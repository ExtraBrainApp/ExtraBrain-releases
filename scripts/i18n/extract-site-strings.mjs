#!/usr/bin/env node
import { extractSiteStrings, writeSourceStringReport } from './site-i18n-utils.mjs';

const strings = extractSiteStrings();
const reportPath = writeSourceStringReport(strings);
console.log(`Extracted ${strings.length} website source strings -> ${reportPath}`);
