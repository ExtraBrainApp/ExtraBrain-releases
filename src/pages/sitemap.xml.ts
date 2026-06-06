import fs from 'node:fs';
import path from 'node:path';
import { absoluteUrl, marketingPages } from '../data/product';
import { localeCodes, localizePath, siteLocales, type Locale } from '../i18n/locales';

const docsRoot = path.join(process.cwd(), 'src/content/docs/help');

function walkMarkdownFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(filePath);
    return entry.isFile() && entry.name.endsWith('.md') ? [filePath] : [];
  });
}

function routeFromDocPath(filePath: string) {
  const relative = path.relative(docsRoot, filePath).replace(/\.md$/, '');
  const route = relative.endsWith('/index') ? relative.replace(/\/index$/, '') : relative;
  return route === 'index' ? '/help/' : `/help/${route}/`;
}

function baseRoutes() {
  const docs = walkMarkdownFiles(docsRoot).map(routeFromDocPath);
  return Array.from(
    new Set([
      '/',
      ...marketingPages.map((page) => `/${page.slug}/`),
      ...docs,
      '/llms.txt',
      '/llms-full.txt',
    ]),
  ).sort((a, b) => a.localeCompare(b));
}

function alternateTags(baseRoute: string) {
  const alternates = localeCodes
    .map((locale) => {
      const href = absoluteUrl(localizePath(baseRoute, locale));
      return `    <xhtml:link rel="alternate" hreflang="${siteLocales[locale].hreflang}" href="${href}" />`;
    })
    .join('\n');
  return `${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localizePath(baseRoute, 'en'))}" />`;
}

function urlEntry(baseRoute: string, locale: Locale, lastmod: string) {
  const loc = absoluteUrl(localizePath(baseRoute, locale));
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
${alternateTags(baseRoute)}
  </url>`;
}

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = baseRoutes()
    .flatMap((route) => localeCodes.map((locale) => urlEntry(route, locale, today)))
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
