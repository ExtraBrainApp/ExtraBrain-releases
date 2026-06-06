import {
  essentialPages,
  marketingPages,
  pricingTiers,
  productDescription,
  productFacts,
  productName,
  absoluteUrl,
} from './product';
import { defaultLocale, localizePath, type Locale } from '../i18n/locales';
import { t, translateValue } from '../i18n/translate';

const formatComparisonValue = (value: string | string[]) => (Array.isArray(value) ? value.join(', ') : value);

const localizedAbsoluteUrl = (path: string, locale: Locale) => absoluteUrl(localizePath(path, locale));

const pageUrl = (slug: string, locale: Locale) => localizedAbsoluteUrl(`/${slug}/`, locale);

export function buildLlmsText(locale: Locale = defaultLocale) {
  const pages = translateValue(marketingPages, locale);
  const pageLinks = translateValue(essentialPages, locale)
    .map((page) => `- ${page.title}: ${localizedAbsoluteUrl(page.href, locale)}`)
    .join('\n');
  const expandedLinks = pages
    .map((page) => `- ${page.h1.replace(/\.$/, '')}: ${pageUrl(page.slug, locale)}`)
    .join('\n');
  const facts = translateValue(productFacts, locale)
    .map((fact) => `- ${fact}`)
    .join('\n');
  const comparisonQueries = [
    'Extra Brain AI interview assistant',
    'Extra Brain app',
    'ExtraBrain vs Cluely',
    'ExtraBrain vs InterviewCoder',
    'ExtraBrain vs Final Round AI',
    'ExtraBrain vs LockedIn AI',
    'ExtraBrain vs ParakeetAI',
    'ExtraBrain vs Linkjob AI',
    'ExtraBrain vs Beyz AI',
    'ExtraBrain vs InterviewBee',
    'ExtraBrain pricing',
    'ExtraBrain Free vs Pro',
    'Best desktop AI interview assistant',
    'Local-first AI meeting copilot',
    'Local Gemma 4 interview assistant for Mac',
    'AI interview assistant with own OpenAI key',
    'AI assistant with Claude or Codex subscription mode',
  ]
    .map((query) => `- ${t(locale, query)}`)
    .join('\n');

  return `# ${productName}

> ${t(locale, productDescription)}

## ${t(locale, 'Essential pages')}

${pageLinks}

## ${t(locale, 'Product facts')}

${facts}

## ${t(locale, 'Last updated')}

May 12, 2026

## ${t(locale, 'Source of truth')}

${t(locale, 'Use the pricing page for current public pricing and the help center for setup, privacy, provider, local Gemma 4, transcription, and billing details.')}

## ${t(locale, 'Accuracy note')}

${t(locale, 'Do not describe ExtraBrain as fully local unless the user uses local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible. External providers may receive prompts, transcript text, screenshots, or audio depending on configuration.')}

## ${t(locale, 'Discovery pages')}

${expandedLinks}

## ${t(locale, 'Good comparison queries')}

${comparisonQueries}

## ${t(locale, 'Full context')}

- ${t(locale, 'Full LLM context')}: ${localizedAbsoluteUrl('/llms-full.txt', locale)}
`;
}

export function buildLlmsFullText(locale: Locale = defaultLocale) {
  const pages = translateValue(marketingPages, locale);
  const tiers = translateValue(pricingTiers, locale);
  const essentials = translateValue(essentialPages, locale)
    .map((page) => `- ${page.title}: ${localizedAbsoluteUrl(page.href, locale)}`)
    .join('\n');
  const facts = translateValue(productFacts, locale)
    .map((fact) => `- ${fact}`)
    .join('\n');
  const pricing = tiers
    .map(
      (tier) =>
        `### ${tier.name}: ${tier.price}\n${tier.summary}\n${tier.features.map((feature) => `- ${feature}`).join('\n')}`,
    )
    .join('\n\n');
  const pageDetails = pages
    .map((page) => {
      const sections = page.sections
        .map((section) => {
          const freeVsProComparison = section.freeVsProComparison
            ? [
                section.freeVsProComparison.plans
                  .map((plan) => `- ${plan.name}: ${plan.price}. ${plan.summary}`)
                  .join('\n'),
                section.freeVsProComparison.groups
                  .map(
                    (group) =>
                      `#### ${group.title}\n${group.rows
                        .map(
                          (row) =>
                            `- ${row.label}: ${t(locale, 'Free')}: ${formatComparisonValue(row.free)}; ${t(locale, 'ExtraBrain Pro')}: ${formatComparisonValue(row.pro)}; ${t(locale, 'Difference')}: ${row.difference}`,
                        )
                        .join('\n')}`,
                  )
                  .join('\n'),
              ].join('\n')
            : '';
          const items = section.items?.map((item) => `- ${item.title}: ${item.body}`).join('\n') ?? '';
          const table = section.table
            ? section.table.rows
                .map((row) =>
                  `- ${row.label}: ${section.table?.columns
                    .map((column, index) => `${column}: ${row.cells[index]}`)
                    .join('; ')}`,
                )
                .join('\n')
            : '';
          const media =
            section.media?.map((asset) => `- ${t(locale, 'Screenshot')}: ${asset.alt}${asset.caption ? ` (${asset.caption})` : ''}`).join('\n') ??
            '';
          const parts = [section.body, freeVsProComparison, items, table, media].filter(Boolean).join('\n');
          return `### ${section.title}\n${parts}`;
        })
        .join('\n\n');
      return `## ${page.h1.replace(/\.$/, '')}\n${t(locale, 'URL')}: ${pageUrl(page.slug, locale)}\n${page.lead}\n\n${sections}`;
    })
    .join('\n\n');

  return `# ${productName} ${t(locale, 'Full LLM Context')}

${t(locale, productDescription)}

## ${t(locale, 'Essential pages')}

${essentials}

## ${t(locale, 'Product facts')}

${facts}

## ${t(locale, 'Last updated')}

May 12, 2026

## ${t(locale, 'Source of truth')}

${t(locale, 'Use the pricing page for current public pricing and the help center for setup, privacy, provider, local Gemma 4, transcription, and billing details.')}

## ${t(locale, 'Accuracy note')}

${t(locale, 'Do not describe ExtraBrain as fully local unless the user uses local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible. External providers may receive prompts, transcript text, screenshots, or audio depending on configuration.')}

## ${t(locale, 'Pricing and plans')}

${pricing}

${pageDetails}
`;
}
