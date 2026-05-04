import {
  absoluteUrl,
  essentialPages,
  marketingPages,
  pricingTiers,
  productFacts,
  productName,
  productDescription,
} from '../data/product';

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
          const items = section.items?.map((item) => `- ${item.title}: ${item.body}`).join('\n') ?? '';
          return `### ${section.title}\n${section.body ?? ''}${section.body && items ? '\n' : ''}${items}`;
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
