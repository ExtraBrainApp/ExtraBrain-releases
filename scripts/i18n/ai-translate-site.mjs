#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {
  buildContextReport,
  readStyleGuide,
} from './build-site-i18n-context.mjs';
import {
  localeMetadata,
  localizedDocPath,
  protectedInlineTokens,
  readLocaleTranslations,
  rewriteInternalMarkdownLinks,
  targetLocales,
  translationJsonPath,
} from './site-i18n-utils.mjs';

const candidateRoles = [
  {
    role: 'product_marketing',
    instruction: 'Translate as a senior SaaS product-marketing localizer. Prefer persuasive, natural product copy over literal English structure.',
  },
  {
    role: 'technical_help',
    instruction: 'Translate as a technical help-center localizer. Prioritize exact feature, privacy, setup, and provider-routing meaning.',
  },
  {
    role: 'natural_localizer',
    instruction: 'Translate as a native-language editor. Adapt idioms and metaphors so the result sounds written in the target language.',
  },
];

function parseArgs(argv) {
  const args = {
    locale: undefined,
    all: false,
    kind: 'all',
    batchSize: 24,
    limit: undefined,
    maxRepairAttempts: 3,
    skipBuild: false,
    model: process.env.OPENAI_I18N_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2',
    reviewModel: process.env.OPENAI_I18N_REVIEW_MODEL || process.env.OPENAI_I18N_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--all') args.all = true;
    else if (arg === '--locale') args.locale = argv[++index];
    else if (arg === '--kind') args.kind = argv[++index];
    else if (arg === '--batch-size') args.batchSize = Number(argv[++index]);
    else if (arg === '--limit') args.limit = Number(argv[++index]);
    else if (arg === '--max-repair-attempts') args.maxRepairAttempts = Number(argv[++index]);
    else if (arg === '--skip-build') args.skipBuild = true;
    else if (arg === '--model') args.model = argv[++index];
    else if (arg === '--review-model') args.reviewModel = argv[++index];
    else if (!arg.startsWith('--') && !args.locale) args.locale = arg;
  }

  return args;
}

function usage() {
  console.error('Usage: npm run i18n:ai-translate -- --locale <locale> [--kind strings|docs|all] [--batch-size 24]');
  console.error('       npm run i18n:ai-translate:all');
  console.error(`Locales: ${targetLocales.join(', ')}`);
}

function chunk(items, size) {
  const result = [];
  for (let index = 0; index < items.length; index += size) result.push(items.slice(index, index + size));
  return result;
}

function requireOpenAiKey() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error('OPENAI_API_KEY is required to run the AI-only translation pipeline.');
  }
  return key;
}

function extractOutputText(response) {
  if (typeof response.output_text === 'string') return response.output_text;
  const parts = [];
  for (const output of response.output ?? []) {
    for (const content of output.content ?? []) {
      if (content.type === 'output_text' && typeof content.text === 'string') parts.push(content.text);
      if (content.type === 'text' && typeof content.text === 'string') parts.push(content.text);
    }
  }
  return parts.join('\n').trim();
}

async function structuredResponse({ apiKey, model, instructions, input, schemaName, schema }) {
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      instructions,
      input,
      text: {
        format: {
          type: 'json_schema',
          name: schemaName,
          schema,
          strict: true,
        },
      },
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`OpenAI API request failed (${response.status}): ${JSON.stringify(payload).slice(0, 1200)}`);
  }

  const text = extractOutputText(payload);
  if (!text) throw new Error(`OpenAI API response did not include output text: ${JSON.stringify(payload).slice(0, 1200)}`);
  return JSON.parse(text);
}

const translationSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    translations: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string' },
          source: { type: 'string' },
          translation: { type: 'string' },
          meaning_note: { type: 'string' },
          adaptation_note: { type: 'string' },
          confidence: { type: 'integer', minimum: 1, maximum: 5 },
        },
        required: ['id', 'source', 'translation', 'meaning_note', 'adaptation_note', 'confidence'],
      },
    },
    batch_notes: { type: 'string' },
  },
  required: ['translations', 'batch_notes'],
};

const reviewSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    scores: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string' },
          candidate_role: { type: 'string' },
          meaning_score: { type: 'integer', minimum: 1, maximum: 5 },
          fluency_score: { type: 'integer', minimum: 1, maximum: 5 },
          literalness_risk: { type: 'integer', minimum: 1, maximum: 5 },
          passes: { type: 'boolean' },
          issues: { type: 'array', items: { type: 'string' } },
          repair_instruction: { type: 'string' },
        },
        required: [
          'id',
          'candidate_role',
          'meaning_score',
          'fluency_score',
          'literalness_risk',
          'passes',
          'issues',
          'repair_instruction',
        ],
      },
    },
    batch_summary: { type: 'string' },
  },
  required: ['scores', 'batch_summary'],
};

const backTranslationSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    backtranslations: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string' },
          back_translation: { type: 'string' },
          meaning_score: { type: 'integer', minimum: 1, maximum: 5 },
          issues: { type: 'array', items: { type: 'string' } },
        },
        required: ['id', 'back_translation', 'meaning_score', 'issues'],
      },
    },
    batch_summary: { type: 'string' },
  },
  required: ['backtranslations', 'batch_summary'],
};

function localeHeader(locale, context) {
  return [
    `Target locale: ${locale} (${localeMetadata[locale]?.lang ?? locale}, ${localeMetadata[locale]?.dir ?? 'ltr'}).`,
    `Style guide:\n${readStyleGuide(locale) || 'Use natural, professional target-language product copy.'}`,
    `Project tone: ${context.glossary.projectTone}`,
    `Protected terms: ${context.glossary.protectedTerms.join(', ')}`,
    `Do-not-literalize glossary:\n${JSON.stringify(context.glossary.doNotLiteralize, null, 2)}`,
  ].join('\n\n');
}

function itemPayload(items) {
  return items.map((item) => ({
    id: item.id,
    kind: item.kind,
    source: item.sourceText,
    sourceFile: item.sourceFile,
    route: item.route ?? item.routes?.join(', '),
    section: item.section ?? '',
    contentType: item.contentType,
    audience: item.audience,
    surroundingCopy: item.kind === 'string' ? item.surroundingCopy : '',
    meaningNote: item.meaningNote,
    protectedTerms: item.protectedTerms,
    protectedInlineTokens: item.protectedInlineTokens,
    literalizationRisks: item.literalizationRisks,
  }));
}

async function generateCandidateBatch({ apiKey, model, locale, context, role, items }) {
  return structuredResponse({
    apiKey,
    model,
    schemaName: 'translation_batch',
    schema: translationSchema,
    instructions: [
      role.instruction,
      'Return one translation for every item id. Do not omit items.',
      'Preserve placeholders, prices, URLs, Markdown/code spans, frontmatter keys, and protected terms exactly.',
      'For Markdown documents, translate human-readable text and frontmatter values, but preserve Markdown structure and links.',
      'Avoid literal translations when the glossary says to adapt the concept.',
    ].join('\n'),
    input: `${localeHeader(locale, context)}\n\nItems:\n${JSON.stringify(itemPayload(items), null, 2)}`,
  });
}

function candidateRows(items, candidatesByRole) {
  const bySource = new Map(items.map((item) => [item.id, item]));
  const rows = [];
  for (const [role, candidate] of Object.entries(candidatesByRole)) {
    for (const translation of candidate.translations) {
      const item = bySource.get(translation.id);
      if (!item) continue;
      rows.push({
        id: translation.id,
        candidate_role: role,
        source: item.sourceText,
        translation: translation.translation,
        meaning_note: translation.meaning_note,
        adaptation_note: translation.adaptation_note,
      });
    }
  }
  return rows;
}

async function reviewCandidateRows({ apiKey, model, locale, context, reviewer, items, rows }) {
  const reviewerInstruction =
    reviewer === 'semantic'
      ? 'You are the semantic reviewer. Score meaning fidelity, product-claim accuracy, privacy/legal/pricing precision, placeholder preservation, and protected term handling.'
      : 'You are the native fluency reviewer. Score naturalness, idiom adaptation, target-language polish, literalness risk, and whether the copy sounds machine translated.';

  return structuredResponse({
    apiKey,
    model,
    schemaName: `${reviewer}_translation_review`,
    schema: reviewSchema,
    instructions: [
      reviewerInstruction,
      'Score every candidate row. A passing translation needs meaning_score >= 4, fluency_score >= 4, and literalness_risk <= 2.',
      'If a candidate is too literal, explain exactly how to repair it.',
    ].join('\n'),
    input: `${localeHeader(locale, context)}\n\nSource item context:\n${JSON.stringify(itemPayload(items), null, 2)}\n\nCandidate translations:\n${JSON.stringify(rows, null, 2)}`,
  });
}

function scoreKey(id, role) {
  return `${id}\u0000${role}`;
}

function selectBestTranslations(items, rows, semanticReview, fluencyReview) {
  const semantic = new Map(semanticReview.scores.map((score) => [scoreKey(score.id, score.candidate_role), score]));
  const fluency = new Map(fluencyReview.scores.map((score) => [scoreKey(score.id, score.candidate_role), score]));
  const selected = [];
  const failed = [];

  for (const item of items) {
    const options = rows.filter((row) => row.id === item.id);
    const scored = options
      .map((row) => {
        const semanticScore = semantic.get(scoreKey(row.id, row.candidate_role));
        const fluencyScore = fluency.get(scoreKey(row.id, row.candidate_role));
        const meaning = Math.min(semanticScore?.meaning_score ?? 0, fluencyScore?.meaning_score ?? 0);
        const fluencyValue = Math.min(semanticScore?.fluency_score ?? 0, fluencyScore?.fluency_score ?? 0);
        const literalness = Math.max(semanticScore?.literalness_risk ?? 5, fluencyScore?.literalness_risk ?? 5);
        return {
          ...row,
          meaning_score: meaning,
          fluency_score: fluencyValue,
          literalness_risk: literalness,
          score: meaning * 2 + fluencyValue * 2 - literalness,
          issues: [...(semanticScore?.issues ?? []), ...(fluencyScore?.issues ?? [])].filter(Boolean),
          repair_instruction: [semanticScore?.repair_instruction, fluencyScore?.repair_instruction].filter(Boolean).join(' '),
        };
      })
      .sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (!best || best.meaning_score < 4 || best.fluency_score < 4 || best.literalness_risk > 2) {
      failed.push({
        id: item.id,
        source: item.sourceText,
        translation: best?.translation ?? '',
        issues: best?.issues?.length ? best.issues : ['No candidate met the 4/5 meaning and fluency gate.'],
        repair_instruction: best?.repair_instruction ?? 'Rewrite naturally while preserving meaning.',
      });
    } else {
      selected.push(best);
    }
  }

  return { selected, failed };
}

async function backTranslate({ apiKey, model, locale, context, items, selected }) {
  const selectedPayload = selected.map((item) => ({
    id: item.id,
    source: item.source,
    translation: item.translation,
  }));
  return structuredResponse({
    apiKey,
    model,
    schemaName: 'back_translation_review',
    schema: backTranslationSchema,
    instructions: [
      'Back-translate each target-language translation into English and score whether it preserves the original source meaning.',
      'Do not reward literal word matching. Reward accurate intent, product claims, pricing, privacy, and setup meaning.',
    ].join('\n'),
    input: `${localeHeader(locale, context)}\n\nSource context:\n${JSON.stringify(itemPayload(items), null, 2)}\n\nSelected translations:\n${JSON.stringify(selectedPayload, null, 2)}`,
  });
}

async function repairItems({ apiKey, model, locale, context, items, failures, attempt }) {
  const failedIds = new Set(failures.map((failure) => failure.id));
  const failedItems = items.filter((item) => failedIds.has(item.id));
  return structuredResponse({
    apiKey,
    model,
    schemaName: 'translation_repair_batch',
    schema: translationSchema,
    instructions: [
      `Repair attempt ${attempt}. Rewrite failed translations so they pass both meaning fidelity and natural target-language fluency.`,
      'Use reviewer feedback directly. Avoid literal English phrasing. Preserve all protected tokens and Markdown structure.',
    ].join('\n'),
    input: `${localeHeader(locale, context)}\n\nFailed item context:\n${JSON.stringify(itemPayload(failedItems), null, 2)}\n\nFailures:\n${JSON.stringify(failures, null, 2)}`,
  });
}

function staticItemFailures(items, selected) {
  const sourceById = new Map(items.map((item) => [item.id, item]));
  const failures = [];
  for (const item of selected) {
    const source = sourceById.get(item.id);
    if (!source) continue;
    for (const token of source.protectedInlineTokens ?? protectedInlineTokens(source.sourceText)) {
      if (!item.translation.includes(token)) {
        failures.push({
          id: item.id,
          source: source.sourceText,
          translation: item.translation,
          issues: [`Protected inline token "${token}" is missing.`],
          repair_instruction: `Restore the token "${token}" exactly while keeping the translation natural.`,
        });
      }
    }
  }
  return failures;
}

async function processBatch({ apiKey, args, locale, context, items, batchIndex }) {
  console.log(`Translating ${locale} batch ${batchIndex + 1} (${items.length} ${items[0]?.kind ?? 'items'})...`);
  const candidatesByRole = {};
  for (const role of candidateRoles) {
    candidatesByRole[role.role] = await generateCandidateBatch({
      apiKey,
      model: args.model,
      locale,
      context,
      role,
      items,
    });
  }

  let rows = candidateRows(items, candidatesByRole);
  let semanticReview = await reviewCandidateRows({
    apiKey,
    model: args.reviewModel,
    locale,
    context,
    reviewer: 'semantic',
    items,
    rows,
  });
  let fluencyReview = await reviewCandidateRows({
    apiKey,
    model: args.reviewModel,
    locale,
    context,
    reviewer: 'fluency',
    items,
    rows,
  });
  let { selected, failed } = selectBestTranslations(items, rows, semanticReview, fluencyReview);

  for (let attempt = 1; failed.length > 0 && attempt <= args.maxRepairAttempts; attempt += 1) {
    const repair = await repairItems({
      apiKey,
      model: args.model,
      locale,
      context,
      items,
      failures: failed,
      attempt,
    });
    rows = candidateRows(
      items.filter((item) => failed.some((failure) => failure.id === item.id)),
      { [`repair_${attempt}`]: repair },
    );
    semanticReview = await reviewCandidateRows({
      apiKey,
      model: args.reviewModel,
      locale,
      context,
      reviewer: 'semantic',
      items,
      rows,
    });
    fluencyReview = await reviewCandidateRows({
      apiKey,
      model: args.reviewModel,
      locale,
      context,
      reviewer: 'fluency',
      items,
      rows,
    });
    const repaired = selectBestTranslations(items, rows, semanticReview, fluencyReview);
    selected = [...selected.filter((item) => !failed.some((failure) => failure.id === item.id)), ...repaired.selected];
    failed = repaired.failed;
  }

  const staticFailures = staticItemFailures(items, selected);
  if (staticFailures.length > 0) failed = [...failed, ...staticFailures];

  if (failed.length === 0) {
    const backTranslation = await backTranslate({
      apiKey,
      model: args.reviewModel,
      locale,
      context,
      items,
      selected,
    });
    const backFailures = backTranslation.backtranslations
      .filter((item) => item.meaning_score < 4)
      .map((item) => ({
        id: item.id,
        source: items.find((source) => source.id === item.id)?.sourceText ?? '',
        translation: selected.find((translation) => translation.id === item.id)?.translation ?? '',
        issues: item.issues.length ? item.issues : ['Back-translation meaning score is below 4/5.'],
        repair_instruction: 'Repair semantic drift found during back-translation.',
      }));
    failed = [...failed, ...backFailures];
  }

  return {
    status: failed.length === 0 ? 'passed' : 'failed',
    items: selected,
    failures: failed,
    candidateRoles: Object.keys(candidatesByRole),
  };
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

function sortedTranslationMap(map) {
  return Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
}

async function translateLocale(locale, args, context, apiKey) {
  const kinds = args.kind === 'all' ? ['strings', 'docs'] : [args.kind];
  const finalStrings = args.limit ? readLocaleTranslations(locale) : {};
  const finalDocs = [];
  const batchReports = [];

  for (const kind of kinds) {
    const sourceItems =
      kind === 'strings'
        ? context.strings.slice(0, args.limit ?? context.strings.length)
        : context.docs.slice(0, args.limit ?? context.docs.length);
    const batches = chunk(sourceItems, kind === 'docs' ? 1 : args.batchSize);
    for (let index = 0; index < batches.length; index += 1) {
      const report = await processBatch({
        apiKey,
        args,
        locale,
        context,
        items: batches[index],
        batchIndex: index,
      });
      batchReports.push({
        kind,
        index,
        status: report.status,
        failures: report.failures,
        translatedCount: report.items.length,
      });
      if (report.status !== 'passed') continue;

      for (const item of report.items) {
        const source = batches[index].find((entry) => entry.id === item.id);
        if (!source) continue;
        if (source.kind === 'string') {
          finalStrings[source.sourceText] = item.translation;
        } else {
          finalDocs.push({
            sourceFile: source.sourceFile,
            localizedPath: localizedDocPath(path.join(process.cwd(), source.sourceFile), locale),
            markdown: rewriteInternalMarkdownLinks(item.translation, locale),
          });
        }
      }
    }
  }

  const failedBatches = batchReports.filter((batch) => batch.status !== 'passed');
  const localeReport = {
    generatedAt: new Date().toISOString(),
    locale,
    status: failedBatches.length === 0 ? 'passed' : 'failed',
    sourceHash: context.sourceHash,
    model: args.model,
    reviewModel: args.reviewModel,
    qualityGate: {
      meaningScoreMinimum: 4,
      fluencyScoreMinimum: 4,
      literalnessRiskMaximum: 2,
      maxRepairAttempts: args.maxRepairAttempts,
    },
    batches: batchReports,
  };
  writeJson(path.join(process.cwd(), 'reports/i18n/ai-review', `${locale}.json`), localeReport);

  if (localeReport.status !== 'passed') {
    throw new Error(`${locale}: AI translation quality gate failed for ${failedBatches.length} batch(es).`);
  }

  if (kinds.includes('strings')) {
    writeJson(translationJsonPath(locale), sortedTranslationMap(finalStrings));
  }
  if (kinds.includes('docs')) {
    for (const doc of finalDocs) {
      fs.mkdirSync(path.dirname(doc.localizedPath), { recursive: true });
      fs.writeFileSync(doc.localizedPath, doc.markdown.endsWith('\n') ? doc.markdown : `${doc.markdown}\n`);
    }
  }

  return localeReport;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if ((!args.locale && !args.all) || (args.locale && !targetLocales.includes(args.locale))) {
    usage();
    process.exit(1);
  }
  if (!['strings', 'docs', 'all'].includes(args.kind)) {
    console.error('--kind must be one of: strings, docs, all');
    process.exit(1);
  }
  if (!Number.isFinite(args.batchSize) || args.batchSize < 1) {
    console.error('--batch-size must be a positive number');
    process.exit(1);
  }

  const apiKey = requireOpenAiKey();
  const context = buildContextReport({ write: true });
  const locales = args.all ? targetLocales : [args.locale];
  const reports = [];
  for (const locale of locales) {
    reports.push(await translateLocale(locale, args, context, apiKey));
  }

  writeJson(path.join(process.cwd(), 'reports/i18n/ai-review/summary.json'), {
    generatedAt: new Date().toISOString(),
    status: reports.every((report) => report.status === 'passed') ? 'passed' : 'failed',
    sourceHash: context.sourceHash,
    locales: reports.map((report) => ({ locale: report.locale, status: report.status })),
  });

  if (!args.skipBuild) {
    execFileSync(process.execPath, ['scripts/i18n/build-site-translations.mjs'], { stdio: 'inherit' });
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
