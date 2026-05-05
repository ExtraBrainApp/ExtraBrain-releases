import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  site: 'https://extrabrain.app',
  integrations: [
    sitemap(),
    starlight({
      title: 'ExtraBrain Help Center',
      sidebar: [
        {
          label: 'Start Here',
          collapsed: false,
          items: [
            { slug: 'help', label: 'Overview' },
            'help/getting-started/what-is-extrabrain',
            'help/getting-started/first-run-setup',
            'help/getting-started/macos-permissions',
            'help/installation',
          ],
        },
        {
          label: 'Providers',
          collapsed: false,
          items: [
            'help/providers/transcription-parakeet-vs-deepgram',
            'help/providers/connect-ai-provider',
            'help/providers/openai-codex-setup',
            'help/providers/anthropic-claude-setup',
            'help/providers/custom-openai-compatible-endpoint',
          ],
        },
        {
          label: 'Using ExtraBrain',
          collapsed: false,
          items: [
            'help/using-extrabrain/start-recording-and-analysis',
            'help/using-extrabrain/screenshots-screen-context',
            'help/using-extrabrain/follow-up-questions',
            'help/using-extrabrain/detected-topics-questions',
            'help/using-extrabrain-in-interviews',
          ],
        },
        {
          label: 'Privacy And Settings',
          collapsed: false,
          items: [
            'help/privacy-security/how-extrabrain-handles-data',
            'help/privacy-security/privacy-controls',
            'help/settings',
            'help/settings/general-context-language',
            'help/settings/profiles',
            'help/settings/ui-appearance',
            'help/settings/audio-settings',
            'help/settings/transcript-cleanup-filler-words',
            'help/settings/voice-trigger',
            'help/settings/screenshot-settings',
            'help/settings/keyboard-shortcuts',
            'help/settings/automatic-updates',
            'help/settings/send-feedback',
            'help/settings/webcam-tracking-experimental',
            'help/sessions-history/view-delete-session-history',
          ],
        },
        {
          label: 'Billing And Support',
          collapsed: false,
          items: [
            'help/billing-pro/activate-license',
            'help/billing-pro/custom-profiles',
            'help/billing-pro-plan',
            'help/troubleshooting',
          ],
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
      plugins: [starlightImageZoom()],
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
          tag: 'script',
          content: `(() => {
  const helpScreenshotPrefix = '/assets/screenshots/help/';
  const themedPathPattern = /^\\/assets\\/screenshots\\/help\\/(dark|light)\\//;
  const getPreferredScreenshotTheme = () =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  const getBaseHelpScreenshotSrc = (img) => {
    const existingBase = img.dataset.helpScreenshotBase;
    if (existingBase) return existingBase;
    const src = img.getAttribute('src') || '';
    const base = src.replace(themedPathPattern, helpScreenshotPrefix);
    img.dataset.helpScreenshotBase = base;
    return base;
  };
  const applyHelpScreenshotTheme = () => {
    const screenshotTheme = getPreferredScreenshotTheme();
    document.querySelectorAll(\`img[src*="\${helpScreenshotPrefix}"]\`).forEach((img) => {
      const base = getBaseHelpScreenshotSrc(img);
      if (!base.startsWith(helpScreenshotPrefix)) return;
      const nextSrc = base.replace(helpScreenshotPrefix, \`\${helpScreenshotPrefix}\${screenshotTheme}/\`);
      if (img.getAttribute('src') !== nextSrc) {
        img.setAttribute('src', nextSrc);
      }
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyHelpScreenshotTheme, { once: true });
  } else {
    applyHelpScreenshotTheme();
  }
  new MutationObserver(applyHelpScreenshotTheme).observe(document.documentElement, {
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
