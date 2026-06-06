#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

console.warn('i18n:translate now uses the AI quality pipeline. Prefer npm run i18n:ai-translate -- --locale <locale>.');

const result = spawnSync(process.execPath, ['scripts/i18n/ai-translate-site.mjs', ...process.argv.slice(2)], {
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
