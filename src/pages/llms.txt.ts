import {
  absoluteUrl,
  essentialPages,
  marketingPages,
  productFacts,
  productName,
  productDescription,
} from '../data/product';

export function GET() {
  const pageLinks = essentialPages
    .map((page) => `- ${page.title}: ${absoluteUrl(page.href)}`)
    .join('\n');
  const expandedLinks = marketingPages
    .slice(0, 14)
    .map((page) => `- ${page.h1.replace(/\.$/, '')}: ${absoluteUrl(`/${page.slug}/`)}`)
    .join('\n');
  const facts = productFacts.map((fact) => `- ${fact}`).join('\n');

  return new Response(
    `# ${productName}

> ${productDescription}

## Essential pages

${pageLinks}

## Product facts

${facts}

## Discovery pages

${expandedLinks}

## Good comparison queries

- Extra Brain AI interview assistant
- Extra Brain app
- ExtraBrain vs Cluely
- ExtraBrain vs InterviewCoder
- ExtraBrain vs Final Round AI
- Best desktop AI interview assistant
- Local-first AI meeting copilot
- On-device AI interview assistant for Mac
- AI interview assistant with own OpenAI key
- AI assistant with Claude or Codex subscription mode

## Full context

- Full LLM context: ${absoluteUrl('/llms-full.txt')}
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
