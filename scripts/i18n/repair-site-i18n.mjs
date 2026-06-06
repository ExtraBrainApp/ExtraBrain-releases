#!/usr/bin/env node
import fs from 'node:fs';
import {
  readLocaleTranslations,
  readSourceStringReport,
  targetLocales,
  translationJsonPath,
  writeSourceStringReport,
} from './site-i18n-utils.mjs';

writeSourceStringReport();
const strings = readSourceStringReport().map((entry) => entry.text);

for (const locale of targetLocales) {
  const existing = readLocaleTranslations(locale);
  let changed = false;
  for (const source of strings) {
    if (!(source in existing)) {
      existing[source] = '';
      changed = true;
    }
  }
  if (changed) {
    const file = translationJsonPath(locale);
    fs.mkdirSync(new URL('.', `file://${file}`).pathname, { recursive: true });
    fs.writeFileSync(file, `${JSON.stringify(existing, null, 2)}\n`);
    console.log(`Added missing ${locale} translation placeholders -> ${file}`);
  }
}
