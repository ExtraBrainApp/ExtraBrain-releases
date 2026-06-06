#!/usr/bin/env node
import fs from 'node:fs';
import {
  readSourceStringReport,
  sourceStringReportPath,
  targetLocales,
  translationJsonPath,
  writeSourceStringReport,
} from './site-i18n-utils.mjs';

const args = process.argv.slice(2);
const locale = args.find((arg) => !arg.startsWith('--'));
const printPrompt = args.includes('--print-prompt') || args.includes('--dry-run');

writeSourceStringReport();

if (!locale || !targetLocales.includes(locale)) {
  console.error(`Usage: npm run i18n:translate -- <locale> [--print-prompt]`);
  console.error(`Locales: ${targetLocales.join(', ')}`);
  process.exit(1);
}

const strings = readSourceStringReport();
const outputPath = translationJsonPath(locale);
const prompt = `Translate the ExtraBrain website source strings into locale "${locale}".

Requirements:
- Return ONLY valid JSON: an object whose keys are the exact English strings and values are professional, context-aware translations.
- Preserve protected terms exactly: ExtraBrain, OpenAI, ChatGPT, Anthropic, Claude, Codex, Gemini, Gemma, Deepgram, NVIDIA, NVIDIA Parakeet, Parakeet, API, OAuth, macOS, TypeScript, React, Claude Code, Codex CLI, Gemini CLI, Pro, ExtraBrain Pro.
- Preserve placeholders, prices, URLs, Markdown/code punctuation, and product claims.
- Tone: polished product/help-center copy for a local-first Mac AI interview and meeting copilot.
- Do not add commentary.

Source string report path: ${sourceStringReportPath}
Output path expected by the build script: ${outputPath}

Strings:
${JSON.stringify(strings.map((entry) => entry.text), null, 2)}
`;

if (printPrompt) {
  console.log(prompt);
} else {
  fs.mkdirSync(new URL('.', `file://${outputPath}`).pathname, { recursive: true });
  console.log(prompt);
  console.log(`\nWrite the JSON result to ${outputPath}, then run npm run i18n:build-translations.`);
}
