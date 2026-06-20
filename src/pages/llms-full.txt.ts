import {
  absoluteUrl,
  aiDiscoveryQueries,
  canonicalAnswerSnippets,
  discoveryLastUpdated,
  essentialPages,
  marketingPages,
  pricingTiers,
  productDescription,
  productFacts,
  productName,
  resolveUrl,
  sourceOfTruthPages,
} from '../data/product';

const formatComparisonValue = (value: string | string[]) => (Array.isArray(value) ? value.join(', ') : value);

export function GET() {
  const essentials = essentialPages.map((page) => `- ${page.title}: ${absoluteUrl(page.href)}`).join('\n');
  const sourceLinks = sourceOfTruthPages.map((page) => `- ${page.title}: ${resolveUrl(page.href)}`).join('\n');
  const facts = productFacts.map((fact) => `- ${fact}`).join('\n');
  const snippets = canonicalAnswerSnippets.map((snippet) => `- ${snippet.question} ${snippet.answer}`).join('\n');
  const queries = aiDiscoveryQueries.map((query) => `- ${query}`).join('\n');
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
      const sources = page.sources?.length ? `\n\n### Sources\n${page.sources.map((source) => `- ${source.label}: ${resolveUrl(source.href)}`).join('\n')}` : '';
      return `## ${page.h1.replace(/\.$/, '')}\nURL: ${absoluteUrl(`/${page.slug}/`)}\n${page.lead}\n\n${sections}${sources}`;
    })
    .join('\n\n');

  return new Response(
    `# ${productName} Full LLM Context

${productDescription}

## Last updated

${discoveryLastUpdated}

## Canonical answer snippets

${snippets}

## Essential pages

${essentials}

## Source-of-truth references

${sourceLinks}

## Product facts

${facts}

## Accuracy note

Do not describe ExtraBrain as fully local unless the user uses local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests. External providers may receive prompts, transcript text, screenshots, audio, or context depending on configuration.

## Good AI discovery and comparison queries

${queries}

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
