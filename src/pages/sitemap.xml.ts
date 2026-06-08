import { getCollection } from 'astro:content';
import { allPublicRoutes, absoluteUrl } from '../data/product';

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const staticUrls = Array.from(new Set([...allPublicRoutes, '/blog/'].filter((route) => route.endsWith('/') || route === '/'))).map((route) => ({
    loc: absoluteUrl(route),
    lastmod: today,
  }));
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const blogPageCount = Math.ceil(blogPosts.length / 10);
  const blogPageUrls = Array.from({ length: Math.max(blogPageCount - 1, 0) }, (_, index) => ({
    loc: absoluteUrl(`/blog/page/${index + 2}/`),
    lastmod: today,
  }));
  const blogUrls = blogPosts.map((post) => ({
    loc: absoluteUrl(`/blog/${post.id}/`),
    lastmod: (post.data.updatedDate ?? post.data.publishDate).toISOString().slice(0, 10),
  }));
  const urls = [...staticUrls, ...blogPageUrls, ...blogUrls]
    .map(
      ({ loc, lastmod }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
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
