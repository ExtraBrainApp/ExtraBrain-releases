#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  absoluteRoute,
  distPathForRoute,
  englishDocPaths,
  expectedBaseRoutes,
  localeMetadata,
  localizedDocPath,
  locales,
  normalizeMarkdown,
  needsStrictTranslation,
  protectedInlineTokens,
  protectedTerms,
  protectedTermPattern,
  readLocaleTranslations,
  readSourceStringReport,
  targetLocales,
  translationJsonPath,
  writeSourceStringReport,
} from './site-i18n-utils.mjs';

const strict = process.argv.includes('--strict');
const validateBuiltOutput = process.argv.includes('--built');
const failures = [];
const warnings = [];

writeSourceStringReport();
const strings = readSourceStringReport().map((entry) => entry.text);
const stringSet = new Set(strings);
const requiredLocalizedRouteFiles = [
  'src/pages/[locale]/[...slug].astro',
  'src/pages/[locale]/llms.txt.ts',
  'src/pages/[locale]/llms-full.txt.ts',
];
const hardcodedCopyFiles = [
  'src/pages/index.astro',
  'src/layouts/PageLayout.astro',
  'src/layouts/MarketingLayout.astro',
  'src/components/FeedbackForm.astro',
  'src/components/LanguageSwitcher.astro',
];
const allowedHardcodedCopy = new Set([
  'Brain',
  'Extra',
  'ExtraBrain',
  'ExtraBrain Pro',
  'GitHub',
  'Pro',
  'you@example.com',
]);

for (const relativePath of requiredLocalizedRouteFiles) {
  if (!fs.existsSync(path.join(process.cwd(), relativePath))) {
    failures.push(`missing localized route source ${relativePath}`);
  }
}

const sitemapSource = fs.readFileSync(path.join(process.cwd(), 'src/pages/sitemap.xml.ts'), 'utf8');
if (!sitemapSource.includes('xmlns:xhtml') || !sitemapSource.includes('hreflang="x-default"')) {
  failures.push('sitemap source must emit xhtml hreflang alternates and x-default');
}

for (const relativePath of hardcodedCopyFiles) {
  const source = fs
    .readFileSync(path.join(process.cwd(), relativePath), 'utf8')
    .replace(/^---\n[\s\S]*?\n---\n/, '');
  const pattern = />\s*([^<{\n]*[A-Za-z][^<{\n]*)<|(?:aria-label|title|placeholder)="([^"]*[A-Za-z][^"]*)"/g;
  for (const match of source.matchAll(pattern)) {
    const lineStart = source.lastIndexOf('\n', match.index) + 1;
    const lineEnd = source.indexOf('\n', match.index);
    const line = source.slice(lineStart, lineEnd === -1 ? source.length : lineEnd).trimStart();
    const isAttributeMatch = Boolean(match[2]);
    if (!isAttributeMatch && !line.startsWith('<')) continue;
    const value = (match[1] ?? match[2] ?? '').replace(/\s+/g, ' ').trim();
    if (!value || allowedHardcodedCopy.has(value)) continue;
    failures.push(`${relativePath}: hardcoded visible string "${value}" must use a locale key`);
  }
}

for (const locale of targetLocales) {
  const translations = readLocaleTranslations(locale);
  if (!fs.existsSync(translationJsonPath(locale))) {
    failures.push(`${locale}: missing translation JSON at ${translationJsonPath(locale)}`);
  }
  for (const source of Object.keys(translations)) {
    if (!stringSet.has(source)) {
      failures.push(`${locale}: extra translation key "${source}"`);
    }
  }

  for (const source of strings) {
    const translated = translations[source];
    if (!translated) {
      failures.push(`${locale}: missing translation for "${source}"`);
      continue;
    }
    if (strict && translated === source && needsStrictTranslation(source)) {
      failures.push(`${locale}: untranslated value for "${source}"`);
    }
    for (const term of protectedTerms) {
      if (protectedTermPattern(term).test(source) && !protectedTermPattern(term).test(translated)) {
        failures.push(`${locale}: protected term "${term}" missing in translation for "${source}"`);
      }
    }
    for (const token of protectedInlineTokens(source)) {
      if (!translated.includes(token)) {
        failures.push(`${locale}: protected inline token "${token}" missing in translation for "${source}"`);
      }
    }
  }

  for (const englishPath of englishDocPaths()) {
    const localizedPath = localizedDocPath(englishPath, locale);
    if (!fs.existsSync(localizedPath)) {
      failures.push(`${locale}: missing localized doc ${path.relative(process.cwd(), localizedPath)}`);
      continue;
    }
    const english = fs.readFileSync(englishPath, 'utf8');
    const localized = fs.readFileSync(localizedPath, 'utf8');
    const badInternalLinks = [...localized.matchAll(/!?\[[^\]]*]\((\/(?!assets\/|favicon|manifest\.json|robots\.txt)[^)]+)\)/g)]
      .map((match) => match[1])
      .filter((href) => !href.startsWith(`/${locale}/`));
    if (badInternalLinks.length > 0) {
      failures.push(
        `${locale}: localized doc ${path.relative(process.cwd(), localizedPath)} has non-localized internal links: ${badInternalLinks.join(', ')}`,
      );
    }
    if (strict && normalizeMarkdown(localized) === normalizeMarkdown(english)) {
      failures.push(`${locale}: localized doc still matches English source ${path.relative(process.cwd(), localizedPath)}`);
    } else if (normalizeMarkdown(localized) === normalizeMarkdown(english)) {
      warnings.push(`${locale}: localized doc still matches English source ${path.relative(process.cwd(), localizedPath)}`);
    }
  }
}

if (validateBuiltOutput) {
  const routes = expectedBaseRoutes();
  const sitemapPath = path.join(process.cwd(), 'dist/sitemap.xml');
  const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';

  if (!sitemap) {
    failures.push('built sitemap missing at dist/sitemap.xml');
  } else if (!sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) {
    failures.push('built sitemap is missing the xhtml namespace for localized alternates');
  }

  for (const route of routes) {
    for (const locale of locales) {
      const builtPath = distPathForRoute(route, locale);
      if (!fs.existsSync(builtPath)) {
        failures.push(`${locale}: built route missing ${path.relative(process.cwd(), builtPath)}`);
      } else if (builtPath.endsWith('.html')) {
        const html = fs.readFileSync(builtPath, 'utf8');
        const expected = localeMetadata[locale];
        if (!html.includes(`lang="${expected.lang}"`)) {
          failures.push(`${locale}: built route ${path.relative(process.cwd(), builtPath)} is missing lang="${expected.lang}"`);
        }
        if (!html.includes(`dir="${expected.dir}"`)) {
          failures.push(`${locale}: built route ${path.relative(process.cwd(), builtPath)} is missing dir="${expected.dir}"`);
        }
      }
      if (sitemap && !sitemap.includes(absoluteRoute(route, locale))) {
        failures.push(`${locale}: sitemap missing ${absoluteRoute(route, locale)}`);
      }
    }
    if (sitemap && !sitemap.includes(`hreflang="x-default" href="${absoluteRoute(route)}"`)) {
      failures.push(`sitemap missing x-default alternate for ${route}`);
    }
  }
}

if (warnings.length > 0) {
  console.warn(warnings.map((warning) => `warning: ${warning}`).join('\n'));
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `error: ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Website i18n validation passed${strict ? ' in strict mode' : ''}${validateBuiltOutput ? ' with built-output checks' : ''}.`);
