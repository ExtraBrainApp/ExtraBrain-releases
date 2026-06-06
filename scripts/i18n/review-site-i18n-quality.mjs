#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { buildContextReport } from './build-site-i18n-context.mjs';
import {
  englishDocPaths,
  isProtectedOnly,
  localizedDocPath,
  needsStrictTranslation,
  protectedInlineTokens,
  readLocaleTranslations,
  repoRoot,
  targetLocales,
} from './site-i18n-utils.mjs';

const aiReviewDir = path.join(repoRoot, 'reports/i18n/ai-review');
const failures = [];
const warnings = [];

const expectedScript = {
  zh: /[\u4e00-\u9fff]/,
  ja: /[\u3040-\u30ff\u4e00-\u9fff]/,
  ko: /[\uac00-\ud7af]/,
  hi: /[\u0900-\u097f]/,
  ar: /[\u0600-\u06ff]/,
  uk: /[\u0400-\u04ff]/,
  be: /[\u0400-\u04ff]/,
};

function readJsonIfExists(file) {
  if (!fs.existsSync(file)) return undefined;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function compact(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function sourceNeedsTargetScript(source) {
  if (!needsStrictTranslation(source)) return false;
  if (isProtectedOnly(source)) return false;
  return (source.match(/[A-Za-z]{3,}/g) ?? []).length >= 3;
}

function containsUnchangedLiteralRisk(source, translated, risks) {
  const normalized = translated.toLowerCase();
  return risks
    .filter((risk) => source.toLowerCase().includes(risk.term.toLowerCase()))
    .filter((risk) => normalized.includes(risk.term.toLowerCase()))
    .map((risk) => risk.term);
}

function validateAiReports(context) {
  const summary = readJsonIfExists(path.join(aiReviewDir, 'summary.json'));
  if (!summary) {
    failures.push('missing AI i18n review summary at reports/i18n/ai-review/summary.json; run npm run i18n:ai-translate:all');
  } else {
    if (summary.sourceHash !== context.sourceHash) {
      failures.push('AI i18n review summary is stale for the current source context; rerun npm run i18n:ai-translate:all');
    }
    if (summary.status !== 'passed') {
      failures.push(`AI i18n review summary status is "${summary.status}", expected "passed"`);
    }
  }

  for (const locale of targetLocales) {
    const reportPath = path.join(aiReviewDir, `${locale}.json`);
    const report = readJsonIfExists(reportPath);
    if (!report) {
      failures.push(`${locale}: missing AI i18n review report at ${path.relative(repoRoot, reportPath)}`);
      continue;
    }
    if (report.sourceHash !== context.sourceHash) {
      failures.push(`${locale}: AI i18n review report is stale for current source hash`);
    }
    if (report.status !== 'passed') {
      failures.push(`${locale}: AI i18n review report status is "${report.status}", expected "passed"`);
    }
    for (const batch of report.batches ?? []) {
      if (batch.status !== 'passed') {
        failures.push(`${locale}: AI i18n batch ${batch.kind}#${batch.index} failed (${batch.failures?.length ?? 0} item failures)`);
      }
    }
  }
}

function validateStaticStringQuality(context) {
  for (const locale of targetLocales) {
    const translations = readLocaleTranslations(locale);
    const scriptPattern = expectedScript[locale];
    for (const item of context.strings) {
      const translated = translations[item.sourceText];
      if (!translated) {
        failures.push(`${locale}: missing translation for "${item.sourceText}"`);
        continue;
      }
      if (needsStrictTranslation(item.sourceText) && compact(translated) === compact(item.sourceText)) {
        failures.push(`${locale}: unchanged English translation for "${item.sourceText}"`);
      }
      for (const token of item.protectedInlineTokens ?? protectedInlineTokens(item.sourceText)) {
        if (!translated.includes(token)) {
          failures.push(`${locale}: protected inline token "${token}" missing for "${item.sourceText}"`);
        }
      }
      const unchangedRiskTerms = containsUnchangedLiteralRisk(item.sourceText, translated, context.glossary.doNotLiteralize);
      if (unchangedRiskTerms.length > 0) {
        failures.push(
          `${locale}: literal-risk term(s) left unchanged (${unchangedRiskTerms.join(', ')}) for "${item.sourceText}"`,
        );
      }
      if (scriptPattern && sourceNeedsTargetScript(item.sourceText) && !scriptPattern.test(translated)) {
        failures.push(`${locale}: translation may be in the wrong script for "${item.sourceText}" -> "${translated}"`);
      }
    }
  }
}

function validateStaticDocQuality(context) {
  const englishPaths = englishDocPaths();
  for (const locale of targetLocales) {
    const scriptPattern = expectedScript[locale];
    for (const englishPath of englishPaths) {
      const localizedPath = localizedDocPath(englishPath, locale);
      if (!fs.existsSync(localizedPath)) {
        failures.push(`${locale}: missing localized doc ${path.relative(repoRoot, localizedPath)}`);
        continue;
      }
      const english = fs.readFileSync(englishPath, 'utf8');
      const localized = fs.readFileSync(localizedPath, 'utf8');
      if (compact(english) === compact(localized)) {
        failures.push(`${locale}: localized doc still matches English ${path.relative(repoRoot, englishPath)}`);
      }
      if (scriptPattern && compact(english).length > 400 && !scriptPattern.test(localized)) {
        failures.push(`${locale}: localized doc may be in the wrong script ${path.relative(repoRoot, localizedPath)}`);
      }
      const docContext = context.docs.find((doc) => doc.sourceFile === path.relative(repoRoot, englishPath));
      for (const risk of docContext?.literalizationRisks ?? []) {
        if (localized.toLowerCase().includes(risk.term.toLowerCase())) {
          warnings.push(`${locale}: localized doc still contains literal-risk English term "${risk.term}" in ${path.relative(repoRoot, localizedPath)}`);
        }
      }
    }
  }
}

const context = buildContextReport({ write: false });
validateAiReports(context);
validateStaticStringQuality(context);
validateStaticDocQuality(context);

if (warnings.length > 0) {
  console.warn(warnings.slice(0, 200).map((warning) => `warning: ${warning}`).join('\n'));
  if (warnings.length > 200) console.warn(`warning: ${warnings.length - 200} additional warning(s) omitted`);
}

if (failures.length > 0) {
  console.error(failures.slice(0, 200).map((failure) => `error: ${failure}`).join('\n'));
  if (failures.length > 200) console.error(`error: ${failures.length - 200} additional failure(s) omitted`);
  process.exit(1);
}

console.log(`AI i18n quality review passed for ${targetLocales.length} locales and source hash ${context.sourceHash.slice(0, 12)}.`);
