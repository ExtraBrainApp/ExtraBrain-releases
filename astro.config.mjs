import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

const siteUrl = 'https://extrabrain.app';
const defaultOgImage = `${siteUrl}/assets/images/logo-512.png`;
const proMonthlyFounderCheckout =
  'https://extrabrain.lemonsqueezy.com/checkout/buy/f5618066-dfaf-419e-ac49-a05ffa5e30d9?checkout%5Bdiscount_code%5D=EARLYBIRD&prefill=earlybird';
const helpStructuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'ExtraBrain',
      alternateName: ['Extra Brain'],
      url: siteUrl,
      logo: defaultOgImage,
      sameAs: ['https://github.com/ExtraBrainApp/ExtraBrain-releases/releases'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'ExtraBrain',
      alternateName: ['Extra Brain'],
      applicationCategory: 'ProductivityApplication',
      applicationSubCategory: 'AI interview and meeting copilot',
      operatingSystem: 'macOS',
      url: siteUrl,
      image: defaultOgImage,
      offers: [
        {
          '@type': 'Offer',
          name: 'ExtraBrain Free',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/download/`,
        },
        {
          '@type': 'Offer',
          name: 'ExtraBrain Pro Founder Monthly',
          price: '6.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: proMonthlyFounderCheckout,
        },
        {
          '@type': 'Offer',
          name: 'ExtraBrain Pro Yearly',
          price: '79',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/pricing/`,
        },
        {
          '@type': 'Offer',
          name: 'ExtraBrain Pro Lifetime',
          price: '149',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/pricing/`,
        },
      ],
      featureList: [
        'Free, local-first desktop AI interview and meeting copilot',
        'Local NVIDIA Parakeet transcription and optional Deepgram',
        'Local Gemma 4 on-device AI where installed and compatible',
        'OpenAI, Anthropic, Claude Subscription, Codex Subscription, and custom endpoint setup',
        'Apple Silicon and Intel Mac support',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is ExtraBrain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screenshots, provider setup, and privacy controls.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does ExtraBrain support local transcription?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ExtraBrain supports local NVIDIA Parakeet transcription and optional Deepgram cloud transcription.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which platforms does ExtraBrain support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ExtraBrain is available for Mac today, including Apple Silicon and Intel Macs. Windows and Linux are planned.',
          },
        },
      ],
    },
  ],
});

export default defineConfig({
  site: siteUrl,
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
          href: 'https://github.com/ExtraBrainApp/ExtraBrain-releases/releases',
        },
      ],
      plugins: [starlightImageZoom()],
      customCss: ['./src/styles/starlight.css'],
      components: {
        Sidebar: './src/components/starlight/Sidebar.astro',
      },
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
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: defaultOgImage,
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: defaultOgImage,
          },
        },
        {
          tag: 'script',
          attrs: {
            type: 'application/ld+json',
          },
          content: helpStructuredData,
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
