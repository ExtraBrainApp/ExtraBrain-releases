import {
  absoluteUrl,
  essentialPages,
  marketingPages,
  pricingTiers,
  productFacts,
  productName,
  productDescription,
} from '../data/product';

const formatComparisonValue = (value: string | string[]) => (Array.isArray(value) ? value.join(', ') : value);

export function GET() {
  const essentials = essentialPages.map((page) => `- ${page.title}: ${absoluteUrl(page.href)}`).join('\n');
  const facts = productFacts.map((fact) => `- ${fact}`).join('\n');
  const pricing = pricingTiers
    .map((tier) => `### ${tier.name}: ${tier.price}\n${tier.summary}\n${tier.features.map((feature) => `- ${feature}`).join('\n')}`)
    .join('\n\n');
  const pages = marketingPages
    .map((page) => {
      const sections = page.sections
        .map((section) => {
          const freeVsProComparison = section.freeVsProComparison
            ? [
                section.freeVsProComparison.plans
                  .map((plan) => `- ${plan.name}: ${plan.price}. ${plan.summary}`)
                  .join('\n'),
                section.freeVsProComparison.groups
                  .map((group) =>
                    `#### ${group.title}\n${group.rows
                      .map(
                        (row) =>
                          `- ${row.label}: Free: ${formatComparisonValue(row.free)}; ExtraBrain Pro: ${formatComparisonValue(row.pro)}; Difference: ${row.difference}`,
                      )
                      .join('\n')}`,
                  )
                  .join('\n'),
              ].join('\n')
            : '';
          const items = section.items?.map((item) => `- ${item.title}: ${item.body}`).join('\n') ?? '';
          const table = section.table
            ? section.table.rows
                .map((row) => `- ${row.label}: ${section.table?.columns.map((column, index) => `${column}: ${row.cells[index]}`).join('; ')}`)
                .join('\n')
            : '';
          const media = section.media?.map((asset) => `- Screenshot: ${asset.alt}${asset.caption ? ` (${asset.caption})` : ''}`).join('\n') ?? '';
          const parts = [section.body, freeVsProComparison, items, table, media].filter(Boolean).join('\n');
          return `### ${section.title}\n${parts}`;
        })
        .join('\n\n');
      return `## ${page.h1.replace(/\.$/, '')}\nURL: ${absoluteUrl(`/${page.slug}/`)}\n${page.lead}\n\n${sections}`;
    })
    .join('\n\n');

  return new Response(
    `# ${productName} Full LLM Context

${productDescription}

## Essential pages

${essentials}

## Product facts

${facts}

## Last updated

May 12, 2026

## Source of truth

Use the pricing page for current public pricing and the help center for setup, privacy, provider, local Gemma 4, transcription, and billing details.

## Accuracy note

Do not describe ExtraBrain as fully local unless the user uses local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible. External providers may receive prompts, transcript text, screenshots, or audio depending on configuration.

## Pricing and plans

${pricing}

${pages}
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
