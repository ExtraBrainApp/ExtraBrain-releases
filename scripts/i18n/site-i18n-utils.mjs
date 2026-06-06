import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

export const defaultLocale = 'en';
export const locales = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ja', 'ko', 'hi', 'ar', 'uk', 'be'];
export const targetLocales = locales.filter((locale) => locale !== defaultLocale);
export const localeMetadata = {
  en: { lang: 'en', dir: 'ltr' },
  es: { lang: 'es', dir: 'ltr' },
  fr: { lang: 'fr', dir: 'ltr' },
  de: { lang: 'de', dir: 'ltr' },
  pt: { lang: 'pt', dir: 'ltr' },
  zh: { lang: 'zh-CN', dir: 'ltr' },
  ja: { lang: 'ja', dir: 'ltr' },
  ko: { lang: 'ko', dir: 'ltr' },
  hi: { lang: 'hi', dir: 'ltr' },
  ar: { lang: 'ar', dir: 'rtl' },
  uk: { lang: 'uk', dir: 'ltr' },
  be: { lang: 'be', dir: 'ltr' },
};
export const repoRoot = process.cwd();
export const sourceStringReportPath = path.join(repoRoot, 'reports/i18n/source-strings.json');
export const translationReportDir = path.join(repoRoot, 'reports/i18n/translations');
export const generatedTranslationPath = path.join(repoRoot, 'src/i18n/generated/site-translations.ts');
export const siteUrl = 'https://extrabrain.app';

export const protectedTerms = [
  'ExtraBrain',
  'ExtraBrain Pro',
  'OpenAI',
  'OpenAI-compatible',
  'ChatGPT',
  'Anthropic',
  'Claude',
  'Codex',
  'Gemini',
  'Gemma',
  'Deepgram',
  'Deepgram Nova-2',
  'NVIDIA',
  'NVIDIA Parakeet',
  'Parakeet',
  'Nova-2',
  'Nova-3',
  'API',
  'OAuth',
  'macOS',
  'Mac',
  'Windows',
  'Linux',
  'Google',
  'TypeScript',
  'React',
  'Claude Code',
  'Codex CLI',
  'Gemini CLI',
  'Cluely',
  'InterviewCoder',
  'Final Round AI',
  'LockedIn AI',
  'ParakeetAI',
  'Linkjob AI',
  'Beyz AI',
  'InterviewBee',
  'HackerRank',
  'CoderPad',
  'Codility',
  'CodeSignal',
  'LeetCode',
  'Zoom',
  'Google Meet',
  'Microsoft Teams',
  'Cisco Webex',
  'Amazon Chime',
  'Lark / Feishu',
  'Slack Huddles',
  'Discord',
  'LemonSqueezy',
  'GitHub Releases',
  'GitHub',
  'EARLYBIRD',
  'BYO',
  'UI',
  'SHA-256',
  'Pro',
];

export function protectedTermPattern(term) {
  return new RegExp(`(?<![A-Za-z0-9])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![A-Za-z0-9])`, 'g');
}

export function protectedInlineTokens(source) {
  return [
    ...source.matchAll(
      /\[\[\/?accent\]\]|`[^`]+`|https?:\/\/[^\s)]+|\/[A-Za-z0-9_./#?=&%+-]+|\$\d+(?:\.\d+)?(?:\/(?:month|year|mo|yr))?|\b\d+(?:\.\d+)?\s*(?:MB|GB)\b/g,
    ),
  ].map((match) => match[0]);
}

const tsSourceFiles = ['src/data/product.ts', 'src/data/comparisons.ts', 'src/data/llms.ts'];
const astroSourceFiles = [
  'src/pages/index.astro',
  'src/layouts/PageLayout.astro',
  'src/layouts/MarketingLayout.astro',
  'src/components/FeedbackForm.astro',
  'src/components/LanguageSwitcher.astro',
];

const skippedPropertyNames = new Set([
  '@context',
  '@graph',
  '@type',
  'accent',
  'applicationCategory',
  'class',
  'checkedAt',
  'contentType',
  'downloadUrl',
  'email',
  'href',
  'icon',
  'id',
  'image',
  'itemListElement',
  'logo',
  'ogImage',
  'operatingSystem',
  'position',
  'priceCurrency',
  'schemaType',
  'slug',
  'src',
  'status',
  'target',
  'tone',
  'type',
  'url',
  'variant',
]);

function isLikelyTranslatable(value) {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.length === 1 && !/[A-Za-z]/.test(trimmed)) return false;
  if (trimmed.startsWith('/') || trimmed.startsWith('./') || trimmed.startsWith('../')) return false;
  if (/^(https?:|mailto:|data:)/.test(trimmed)) return false;
  if (/^[a-z0-9-]+$/i.test(trimmed) && trimmed.length > 24) return false;
  if (/\.(svg|png|jpg|jpeg|webp|ico|woff2?)$/i.test(trimmed)) return false;
  if (trimmed.includes('<svg') || trimmed.includes('<path')) return false;
  return /[A-Za-z]/.test(trimmed);
}

function propertyName(node) {
  const parent = node.parent;
  if (!parent || !ts.isPropertyAssignment(parent)) return undefined;
  const name = parent.name;
  if (ts.isIdentifier(name) || ts.isStringLiteral(name)) return name.text;
  return undefined;
}

function addString(strings, value, source) {
  if (!isLikelyTranslatable(value)) return;
  if (!strings.has(value)) {
    strings.set(value, { source, text: value });
  }
}

function collectFromTsFile(strings, relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  const sourceText = fs.readFileSync(absolutePath, 'utf8');
  const file = ts.createSourceFile(relativePath, sourceText, ts.ScriptTarget.Latest, true);

  const visit = (node) => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      if (ts.isLiteralTypeNode(node.parent)) {
        return;
      }
      const key = propertyName(node);
      if (!key || !skippedPropertyNames.has(key)) {
        addString(strings, node.text, relativePath);
      }
    }
    ts.forEachChild(node, visit);
  };

  visit(file);
}

function collectFromAstroFile(strings, relativePath) {
  const sourceText = fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
  const callPattern = /\b(?:text|t)\(\s*(?:locale\s*,\s*)?(['"])(.*?)\1\s*\)/gs;
  for (const match of sourceText.matchAll(callPattern)) {
    addString(strings, match[2], relativePath);
  }
}

export function extractSiteStrings() {
  const strings = new Map();
  for (const file of tsSourceFiles) collectFromTsFile(strings, file);
  for (const file of astroSourceFiles) collectFromAstroFile(strings, file);
  return Array.from(strings.values()).sort((a, b) => a.text.localeCompare(b.text));
}

export function writeSourceStringReport(strings = extractSiteStrings()) {
  fs.mkdirSync(path.dirname(sourceStringReportPath), { recursive: true });
  fs.writeFileSync(sourceStringReportPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), strings }, null, 2)}\n`);
  return sourceStringReportPath;
}

export function readSourceStringReport() {
  if (!fs.existsSync(sourceStringReportPath)) writeSourceStringReport();
  return JSON.parse(fs.readFileSync(sourceStringReportPath, 'utf8')).strings;
}

export function englishDocPaths() {
  const docsRoot = path.join(repoRoot, 'src/content/docs/help');
  const result = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        result.push(fullPath);
      }
    }
  };
  walk(docsRoot);
  return result.sort();
}

export function routeFromEnglishDocPath(englishPath) {
  const docsRoot = path.join(repoRoot, 'src/content/docs/help');
  const relative = path.relative(docsRoot, englishPath).replace(/\.md$/, '');
  if (relative === 'index') return '/help/';
  return `/help/${relative.endsWith('/index') ? relative.replace(/\/index$/, '') : relative}/`;
}

export function localizedDocPath(englishPath, locale) {
  const docsRoot = path.join(repoRoot, 'src/content/docs/help');
  const relative = path.relative(docsRoot, englishPath);
  return path.join(repoRoot, 'src/content/docs', locale, 'help', relative);
}

function sourceSlugs(relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  const sourceText = fs.readFileSync(absolutePath, 'utf8');
  const file = ts.createSourceFile(relativePath, sourceText, ts.ScriptTarget.Latest, true);
  const slugs = [];

  const visit = (node) => {
    if (
      ts.isPropertyAssignment(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === 'slug' &&
      ts.isStringLiteral(node.initializer)
    ) {
      slugs.push(node.initializer.text);
    }
    ts.forEachChild(node, visit);
  };

  visit(file);
  return slugs;
}

export function marketingRoutesFromSource() {
  return Array.from(
    new Set([...sourceSlugs('src/data/product.ts'), ...sourceSlugs('src/data/comparisons.ts')].map((slug) => `/${slug}/`)),
  ).sort((a, b) => a.localeCompare(b));
}

export function expectedBaseRoutes() {
  return Array.from(
    new Set([
      '/',
      ...marketingRoutesFromSource(),
      ...englishDocPaths().map(routeFromEnglishDocPath),
      '/llms.txt',
      '/llms-full.txt',
    ]),
  ).sort((a, b) => a.localeCompare(b));
}

export function localizedRoute(route, locale) {
  if (locale === defaultLocale) return route;
  return `/${locale}${route === '/' ? '/' : route}`;
}

export function absoluteRoute(route, locale = defaultLocale) {
  return new URL(localizedRoute(route, locale), siteUrl).href;
}

export function distPathForRoute(route, locale = defaultLocale) {
  const localized = localizedRoute(route, locale).replace(/^\//, '');
  if (!localized || localized.endsWith('/')) return path.join(repoRoot, 'dist', localized, 'index.html');
  return path.join(repoRoot, 'dist', localized);
}

export function translationJsonPath(locale) {
  return path.join(translationReportDir, `${locale}.json`);
}

export function readLocaleTranslations(locale) {
  const file = translationJsonPath(locale);
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function rewriteInternalMarkdownLinks(markdown, locale) {
  return markdown.replace(/(!?\[[^\]]*]\()\/(?!assets\/|favicon|manifest\.json|robots\.txt|[a-z]{2}\/)/g, `$1/${locale}/`);
}

export function normalizeMarkdown(markdown) {
  return markdown
    .replace(/\s+/g, ' ')
    .replace(/---.*?---/s, '')
    .trim();
}

export function isProtectedOnly(source) {
  const withoutTerms = protectedTerms.reduce((value, term) => value.replace(protectedTermPattern(term), ''), source);
  const stripped = withoutTerms
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '')
    .replace(/\$\d+(?:\.\d+)?(?:\/(?:month|year|mo|yr))?/g, '')
    .replace(/\b(?:mo|yr|month|year|optional)\b/gi, '')
    .replace(/[0-9$.,/:()%+-]/g, '')
    .trim();
  return stripped.trim().length === 0;
}

export function needsStrictTranslation(source) {
  if (isProtectedOnly(source)) return false;
  const withoutTerms = protectedTerms.reduce((value, term) => value.replace(protectedTermPattern(term), ''), source);
  const words = withoutTerms.match(/[A-Za-z]{3,}/g) ?? [];
  return words.length >= 3;
}
