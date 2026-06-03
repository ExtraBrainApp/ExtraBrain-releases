import { allPublicRoutes, absoluteUrl } from './product';

export const sitemapLastmod = '2026-06-03';

export type SitemapGroup = {
  slug: string;
  routes: string[];
};

const isHelpRoute = (route: string) => route.startsWith('/help/');
const isCompareRoute = (route: string) => route.startsWith('/compare/');
const isInterviewGuideRoute = (route: string) => {
  if (isHelpRoute(route) || isCompareRoute(route)) return false;

  return [
    '/ai-interview-assistant-mac',
    '/platforms/',
    '/meetings/',
    '/providers/',
    '/use-cases/',
    '/interview-guides/',
  ].some((prefix) => route.startsWith(prefix));
};

const byGroup = {
  static: allPublicRoutes.filter(
    (route) => !isHelpRoute(route) && !isCompareRoute(route) && !isInterviewGuideRoute(route),
  ),
  help: allPublicRoutes.filter(isHelpRoute),
  compare: allPublicRoutes.filter(isCompareRoute),
  'interview-guides': allPublicRoutes.filter(isInterviewGuideRoute),
};

export const sitemapGroups: SitemapGroup[] = [
  { slug: 'static', routes: byGroup.static },
  { slug: 'help', routes: byGroup.help },
  { slug: 'compare', routes: byGroup.compare },
  { slug: 'interview-guides', routes: byGroup['interview-guides'] },
].filter((group) => group.routes.length > 0);

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const xmlResponse = (body: string) =>
  new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });

export function sitemapIndexXml() {
  const entries = sitemapGroups
    .map(
      (group) => `  <sitemap>\n    <loc>${escapeXml(absoluteUrl(`/sitemap/${group.slug}.xml`))}</loc>\n    <lastmod>${sitemapLastmod}</lastmod>\n  </sitemap>`,
    )
    .join('\n');

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`);
}

export function urlSitemapXml(group: SitemapGroup) {
  const entries = group.routes
    .map(
      (route) => `  <url>\n    <loc>${escapeXml(absoluteUrl(route))}</loc>\n    <lastmod>${sitemapLastmod}</lastmod>\n  </url>`,
    )
    .join('\n');

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`);
}
