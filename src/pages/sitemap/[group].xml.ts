import { sitemapGroups, urlSitemapXml } from '../../data/sitemap';

export function getStaticPaths() {
  return sitemapGroups.map((group) => ({
    params: { group: group.slug },
    props: { group },
  }));
}

export function GET({ props }: { props: { group: (typeof sitemapGroups)[number] } }) {
  return urlSitemapXml(props.group);
}
