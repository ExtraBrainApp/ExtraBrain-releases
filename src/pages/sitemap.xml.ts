import { allPublicRoutes, absoluteUrl } from '../data/product';

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = Array.from(new Set(allPublicRoutes.filter((route) => route.endsWith('/') || route === '/')))
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
    )
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
