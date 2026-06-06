#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  englishDocPaths,
  extractSiteStrings,
  protectedInlineTokens,
  protectedTerms,
  repoRoot,
  routeFromEnglishDocPath,
  targetLocales,
  writeSourceStringReport,
} from './site-i18n-utils.mjs';

export const contextReportPath = path.join(repoRoot, 'reports/i18n/context/site-context.json');
export const glossaryPath = path.join(repoRoot, 'reports/i18n/glossary.json');
export const styleGuideDir = path.join(repoRoot, 'reports/i18n/style-guides');

function readTextIfExists(relativeOrAbsolutePath) {
  const file = path.isAbsolute(relativeOrAbsolutePath)
    ? relativeOrAbsolutePath
    : path.join(repoRoot, relativeOrAbsolutePath);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function readJsonIfExists(file, fallback) {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : fallback;
}

export function readGlossary() {
  return readJsonIfExists(glossaryPath, {
    projectTone: 'Polished product and help-center copy.',
    protectedTerms: [],
    doNotLiteralize: [],
  });
}

export function readStyleGuide(locale) {
  const file = path.join(styleGuideDir, `${locale}.md`);
  return readTextIfExists(file).trim();
}

function compactWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function lineNumberAt(source, index) {
  if (index < 0) return undefined;
  return source.slice(0, index).split('\n').length;
}

function findStringContext(entry) {
  const sourceText = readTextIfExists(entry.source);
  const index = sourceText.indexOf(entry.text);
  if (index === -1) {
    return {
      line: undefined,
      section: undefined,
      surroundingCopy: '',
    };
  }

  const lines = sourceText.split('\n');
  const line = lineNumberAt(sourceText, index);
  const start = Math.max(0, line - 4);
  const end = Math.min(lines.length, line + 3);
  const surroundingCopy = lines
    .slice(start, end)
    .map((value, offset) => `${start + offset + 1}: ${value.trimEnd()}`)
    .join('\n');

  const previousLines = lines.slice(Math.max(0, line - 25), line).reverse();
  const sectionLine = previousLines.find((value) =>
    /\b(?:title|heading|label|name|section|category|eyebrow|kicker)\s*[:=]/i.test(value),
  );

  return {
    line,
    section: sectionLine ? compactWhitespace(sectionLine) : undefined,
    surroundingCopy,
  };
}

function nearestSlug(sourceText, line) {
  if (!line) return undefined;
  const lines = sourceText.split('\n');
  for (let index = Math.min(line - 1, lines.length - 1); index >= Math.max(0, line - 90); index -= 1) {
    const match = lines[index].match(/\bslug\s*:\s*['"]([^'"]+)['"]/);
    if (match) return `/${match[1]}/`;
  }
  return undefined;
}

function inferRoutes(entry, context) {
  if (entry.source === 'src/pages/index.astro') return ['/'];
  if (entry.source === 'src/data/llms.ts') return ['/llms.txt', '/llms-full.txt'];
  if (entry.source.includes('/components/') || entry.source.includes('/layouts/')) return ['shared layout or component'];
  if (entry.source === 'src/data/product.ts' || entry.source === 'src/data/comparisons.ts') {
    const sourceText = readTextIfExists(entry.source);
    return [nearestSlug(sourceText, context.line) ?? 'marketing route data'];
  }
  return ['unknown route'];
}

function inferContentType(entry) {
  if (entry.source.includes('comparisons')) return 'comparison and SEO page copy';
  if (entry.source.includes('llms')) return 'LLM-readable site summary';
  if (entry.source.includes('FeedbackForm')) return 'feedback form UI';
  if (entry.source.includes('LanguageSwitcher')) return 'language switcher UI';
  if (entry.source.includes('Layout')) return 'shared navigation, footer, metadata, or layout copy';
  if (entry.source.includes('index.astro')) return 'homepage marketing copy';
  return 'marketing or help-center source string';
}

function protectedTermsForText(text) {
  return protectedTerms.filter((term) => text.includes(term));
}

function literalizationRisksForText(text, glossary) {
  const normalized = text.toLowerCase();
  return glossary.doNotLiteralize
    .filter((entry) => normalized.includes(entry.term.toLowerCase()))
    .map((entry) => ({ term: entry.term, meaning: entry.meaning }));
}

function meaningNoteForText(text, contentType) {
  if (/privacy|local|provider|storage|transcript|audio|screenshot/i.test(text)) {
    return 'Preserve the exact privacy, data-flow, and provider-routing claim. Do not soften or exaggerate it.';
  }
  if (/\$\d|price|billing|Pro|free|lifetime|monthly|yearly/i.test(text)) {
    return 'Preserve pricing, plan names, billing cadence, and purchase meaning exactly.';
  }
  if (/interview|meeting|coding|system design|behavioral/i.test(text)) {
    return 'Translate as natural product copy for interview and meeting workflows, not as generic HR or customer-support copy.';
  }
  if (/install|setup|settings|shortcut|API key|provider/i.test(text)) {
    return 'Translate as clear help-center instructions for a Mac desktop app.';
  }
  return `Translate naturally for ${contentType}; preserve intent over literal English wording.`;
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return {};
  const frontmatter = match[1];
  const result = {};
  for (const key of ['title', 'description']) {
    const value = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();
    if (value) result[key] = value.replace(/^["']|["']$/g, '');
  }
  return result;
}

function docSectionSummary(markdown) {
  const headings = [...markdown.matchAll(/^#{1,3}\s+(.+)$/gm)].map((match) => match[1].trim());
  return headings.slice(0, 8).join(' | ');
}

export function stableContextHash(payload) {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(payload))
    .digest('hex');
}

export function buildContextReport({ write = true } = {}) {
  const glossary = readGlossary();
  const strings = extractSiteStrings();
  writeSourceStringReport(strings);

  const stringItems = strings.map((entry, index) => {
    const context = findStringContext(entry);
    const contentType = inferContentType(entry);
    return {
      id: `string:${String(index + 1).padStart(4, '0')}`,
      kind: 'string',
      sourceText: entry.text,
      sourceFile: entry.source,
      sourceLine: context.line,
      routes: inferRoutes(entry, context),
      section: context.section,
      contentType,
      audience: 'website visitor, buyer, developer, or help-center reader',
      surroundingCopy: context.surroundingCopy,
      meaningNote: meaningNoteForText(entry.text, contentType),
      protectedTerms: protectedTermsForText(entry.text),
      protectedInlineTokens: protectedInlineTokens(entry.text),
      literalizationRisks: literalizationRisksForText(entry.text, glossary),
    };
  });

  const docs = englishDocPaths().map((englishPath, index) => {
    const markdown = fs.readFileSync(englishPath, 'utf8');
    const meta = parseFrontmatter(markdown);
    return {
      id: `doc:${String(index + 1).padStart(3, '0')}`,
      kind: 'markdown_doc',
      sourceText: markdown,
      sourceFile: path.relative(repoRoot, englishPath),
      route: routeFromEnglishDocPath(englishPath),
      title: meta.title,
      description: meta.description,
      contentType: 'help-center Markdown document',
      audience: 'ExtraBrain user configuring or troubleshooting the Mac app',
      section: docSectionSummary(markdown),
      meaningNote: 'Translate the Markdown document naturally while preserving frontmatter keys, Markdown structure, links, code spans, and product claims.',
      protectedTerms: protectedTermsForText(markdown),
      protectedInlineTokens: protectedInlineTokens(markdown),
      literalizationRisks: literalizationRisksForText(markdown, glossary),
    };
  });

  const stablePayload = {
    strings: stringItems,
    docs,
    glossary,
  };
  const report = {
    generatedAt: new Date().toISOString(),
    sourceHash: stableContextHash(stablePayload),
    locales: targetLocales,
    glossary,
    strings: stringItems,
    docs,
  };

  if (write) {
    fs.mkdirSync(path.dirname(contextReportPath), { recursive: true });
    fs.writeFileSync(contextReportPath, `${JSON.stringify(report, null, 2)}\n`);
  }

  return report;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const report = buildContextReport({ write: true });
  console.log(
    `Built website i18n context -> ${contextReportPath} (${report.strings.length} strings, ${report.docs.length} docs, hash ${report.sourceHash.slice(0, 12)})`,
  );
}
