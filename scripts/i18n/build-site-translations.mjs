#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  generatedTranslationPath,
  readLocaleTranslations,
  targetLocales,
  translationReportDir,
} from './site-i18n-utils.mjs';

fs.mkdirSync(path.dirname(generatedTranslationPath), { recursive: true });
fs.mkdirSync(translationReportDir, { recursive: true });

const translations = Object.fromEntries(targetLocales.map((locale) => [locale, readLocaleTranslations(locale)]));
const body = `import type { PrefixedLocale } from '../locales';

export const siteTranslations: Record<PrefixedLocale, Record<string, string>> = ${JSON.stringify(translations, null, 2)};
`;

fs.writeFileSync(generatedTranslationPath, body);
console.log(`Built runtime translation map -> ${generatedTranslationPath}`);
