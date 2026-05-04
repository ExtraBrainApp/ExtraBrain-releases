import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://extrabrain.app',
  integrations: [
    sitemap(),
    starlight({
      title: 'ExtraBrain Help Center',
      sidebar: [
        {
          label: 'Start here',
          collapsed: false,
          items: [
            { slug: 'help', label: 'Overview' },
            'help/getting-started',
            'help/installation',
            'help/setup-api-keys',
          ],
        },
        {
          label: 'Workflows',
          collapsed: false,
          items: ['help/using-extrabrain-in-interviews'],
        },
        {
          label: 'Support',
          collapsed: false,
          items: ['help/troubleshooting'],
        },
        {
          label: 'Product details',
          collapsed: false,
          items: ['help/privacy-data-handling', 'help/billing-pro-plan'],
        },
      ],
      logo: {
        src: './public/assets/images/logo-192.png',
        alt: 'ExtraBrain',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ExtraBrainApp/ExtraBrain-releases',
        },
      ],
      customCss: ['./src/styles/starlight.css'],
      editLink: {
        baseUrl: 'https://github.com/ExtraBrainApp/ExtraBrain-releases/edit/master/',
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#0B0F14',
          },
        },
        {
          tag: 'script',
          content: `(() => {
  const lightThemeColor = '#F6F4EF';
  const darkThemeColor = '#0B0F14';
  const applyThemeColor = () => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    const theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    meta.setAttribute('content', theme === 'light' ? lightThemeColor : darkThemeColor);
  };
  applyThemeColor();
  new MutationObserver(applyThemeColor).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
})();`,
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/assets/images/favicon-32x32.png',
          },
        },
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
