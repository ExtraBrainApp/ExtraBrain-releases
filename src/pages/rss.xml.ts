import { getCollection } from 'astro:content';
import { absoluteUrl, productDescription, productName } from '../data/product';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => (b.data.updatedDate ?? b.data.publishDate).getTime() - (a.data.updatedDate ?? a.data.publishDate).getTime(),
  );

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.id}/`);
      const date = post.data.updatedDate ?? post.data.publishDate;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${date.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(productName)} Blog</title>
    <link>${absoluteUrl('/blog/')}</link>
    <description>${escapeXml(productDescription)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
