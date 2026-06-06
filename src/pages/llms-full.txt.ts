import { buildLlmsFullText } from '../data/llms';

export function GET() {
  return new Response(buildLlmsFullText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
