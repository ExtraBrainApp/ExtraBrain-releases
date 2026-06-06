import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

const siteUrl = 'https://extrabrain.app';
const defaultOgImage = `${siteUrl}/assets/images/logo-512.png`;
const proMonthlyFounderCheckout =
  'https://extrabrain.lemonsqueezy.com/checkout/buy/f5618066-dfaf-419e-ac49-a05ffa5e30d9?checkout%5Bdiscount_code%5D=EARLYBIRD&prefill=earlybird';
const starlightLocales = {
  root: { label: 'English', lang: 'en' },
  es: { label: 'Español', lang: 'es' },
  fr: { label: 'Français', lang: 'fr' },
  de: { label: 'Deutsch', lang: 'de' },
  pt: { label: 'Português', lang: 'pt' },
  zh: { label: '简体中文', lang: 'zh-CN' },
  ja: { label: '日本語', lang: 'ja' },
  ko: { label: '한국어', lang: 'ko' },
  hi: { label: 'हिन्दी', lang: 'hi' },
  ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
  uk: { label: 'Українська', lang: 'uk' },
  be: { label: 'Беларуская', lang: 'be' },
};
const starlightTitles = {
  en: 'ExtraBrain Help Center',
  es: 'Centro de ayuda de ExtraBrain',
  fr: 'Centre d’aide ExtraBrain',
  de: 'ExtraBrain Hilfezentrum',
  pt: 'Central de Ajuda do ExtraBrain',
  'zh-CN': 'ExtraBrain 帮助中心',
  ja: 'ExtraBrain ヘルプセンター',
  ko: 'ExtraBrain 도움말 센터',
  hi: 'ExtraBrain सहायता केंद्र',
  ar: 'مركز مساعدة ExtraBrain',
  uk: 'Довідковий центр ExtraBrain',
  be: 'Даведачны цэнтр ExtraBrain',
};
const sidebarTranslations = {
  overview: {
    es: 'Resumen',
    fr: 'Aperçu',
    de: 'Übersicht',
    pt: 'Visão geral',
    'zh-CN': '概览',
    ja: '概要',
    ko: '개요',
    hi: 'अवलोकन',
    ar: 'نظرة عامة',
    uk: 'Огляд',
    be: 'Агляд',
  },
  startHere: {
    es: 'Empieza aquí',
    fr: 'Commencer ici',
    de: 'Hier starten',
    pt: 'Comece aqui',
    'zh-CN': '从这里开始',
    ja: 'ここから開始',
    ko: '여기서 시작',
    hi: 'यहाँ से शुरू करें',
    ar: 'ابدأ هنا',
    uk: 'Почніть тут',
    be: 'Пачніце тут',
  },
  providers: {
    es: 'Proveedores',
    fr: 'Fournisseurs',
    de: 'Anbieter',
    pt: 'Provedores',
    'zh-CN': '提供商',
    ja: 'プロバイダー',
    ko: '제공업체',
    hi: 'प्रदाता',
    ar: 'المزوّدون',
    uk: 'Постачальники',
    be: 'Пастаўшчыкі',
  },
  usingExtraBrain: {
    es: 'Usar ExtraBrain',
    fr: 'Utiliser ExtraBrain',
    de: 'ExtraBrain verwenden',
    pt: 'Usar o ExtraBrain',
    'zh-CN': '使用 ExtraBrain',
    ja: 'ExtraBrain を使う',
    ko: 'ExtraBrain 사용',
    hi: 'ExtraBrain का उपयोग',
    ar: 'استخدام ExtraBrain',
    uk: 'Використання ExtraBrain',
    be: 'Выкарыстанне ExtraBrain',
  },
  privacyAndSettings: {
    es: 'Privacidad y ajustes',
    fr: 'Confidentialité et réglages',
    de: 'Datenschutz und Einstellungen',
    pt: 'Privacidade e configurações',
    'zh-CN': '隐私和设置',
    ja: 'プライバシーと設定',
    ko: '개인정보 및 설정',
    hi: 'गोपनीयता और सेटिंग्स',
    ar: 'الخصوصية والإعدادات',
    uk: 'Приватність і налаштування',
    be: 'Прыватнасць і налады',
  },
  billingAndSupport: {
    es: 'Facturación y soporte',
    fr: 'Facturation et assistance',
    de: 'Abrechnung und Support',
    pt: 'Cobrança e suporte',
    'zh-CN': '账单和支持',
    ja: '請求とサポート',
    ko: '결제 및 지원',
    hi: 'बिलिंग और सहायता',
    ar: 'الفوترة والدعم',
    uk: 'Оплата й підтримка',
    be: 'Аплата і падтрымка',
  },
};
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
      title: starlightTitles,
      favicon: '/assets/images/favicon-32x32.png',
      locales: starlightLocales,
      sidebar: [
        {
          label: 'Start Here',
          translations: sidebarTranslations.startHere,
          collapsed: false,
          items: [
            { slug: 'help', label: 'Overview', translations: sidebarTranslations.overview },
            'help/getting-started/what-is-extrabrain',
            'help/getting-started/first-run-setup',
            'help/getting-started/macos-permissions',
            'help/installation',
          ],
        },
        {
          label: 'Providers',
          translations: sidebarTranslations.providers,
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
          translations: sidebarTranslations.usingExtraBrain,
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
          translations: sidebarTranslations.privacyAndSettings,
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
          translations: sidebarTranslations.billingAndSupport,
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
            property: 'og:site_name',
            content: 'ExtraBrain',
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
            property: 'og:image:width',
            content: '512',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:height',
            content: '512',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
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
        {
          tag: 'script',
          content: `(function(){var s=false;var init=function(){if(s)return;s=true;!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init rs ls yi ns us ts ss capture calculateEventProperties vs register register_once register_for_session unregister unregister_for_session gs getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getFeatureFlagPayload getFeatureFlagResult identify reset get_distinct_id get_session_id captureException opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing is_capturing debug getPageViewId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('phc_sXYeYYxL93wov0PTZ9ERSbuvNWlaULK3lSDkqhajz8u',{api_host:'https://us.i.posthog.com',defaults:'2025-11-30',person_profiles:'identified_only',capture_pageview:true,capture_pageleave:true,autocapture:true,rageclick:true,capture_performance:{web_vitals:true},disable_session_recording:true,disable_surveys:true,disable_web_experiments:true,disable_external_dependency_loading:false,capture_dead_clicks:false,capture_heatmaps:false,enable_heatmaps:false})};var idle=function(){if('requestIdleCallback' in window){window.requestIdleCallback(init,{timeout:2500})}else{window.setTimeout(init,1200)}};if(document.readyState==='complete'){idle()}else{window.addEventListener('load',idle,{once:true});window.setTimeout(init,3500)}})();`,
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
