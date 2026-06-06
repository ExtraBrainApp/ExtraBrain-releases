import { seoMarketingPages } from './seo-pages';
import { comparisonMarketingPages } from './comparisons';

export const siteUrl = 'https://extrabrain.app';
export const githubUrl = 'https://github.com/ExtraBrainApp/ExtraBrain-releases/releases';
export const latestReleaseUrl = `${githubUrl}/latest`;
export const productName = 'ExtraBrain';
export const brandAliases = ['Extra Brain'];
export const productCategory = 'Free, local-first desktop AI interview and meeting copilot';
export const productDescription =
  'ExtraBrain is a free, local-first desktop AI interview assistant and meeting copilot for Mac with live transcription, screen-aware context, local Gemma 4 on-device AI where installed and compatible, bring-your-own AI providers, and clear privacy controls. Use it for coding interviews, system design rounds, behavioral interviews, meetings, lectures, and research calls, with Windows and Linux planned.';
export const contactEmail = 'info@extrabrain.app';
export const lemonSqueezyCheckoutLinks = {
  proMonthlyFounder:
    'https://extrabrain.lemonsqueezy.com/checkout/buy/f5618066-dfaf-419e-ac49-a05ffa5e30d9?checkout%5Bdiscount_code%5D=EARLYBIRD&prefill=earlybird',
} as const;

export const productFacts = [
  'Brand: ExtraBrain is the official product name. Extra Brain is a common spaced search alias for the same app.',
  'Platform: Available for Mac today, including Apple Silicon and Intel Macs. Windows and Linux are planned.',
  'Category: AI interview assistant, AI meeting copilot, live desktop AI assistant.',
  'Use cases: coding interviews, system design interviews, behavioral interviews, product interviews, customer calls, lectures, and research meetings.',
  'Core model: free desktop app with local Gemma 4 on-device AI where installed and compatible, plus bring-your-own provider setup. ExtraBrain Pro is $9.99/month regular ($6.99 Founder pricing), $79/year, or $149 Lifetime (launch price).',
  'Transcription: local NVIDIA Parakeet and optional Deepgram.',
  'Providers: Google Gemma 4 local AI, Anthropic, OpenAI, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription.',
  'Local Gemma 4 availability: local Gemma 4 requires installation and compatible hardware and may not be available on every Mac or customer environment.',
  'Privacy: with local Gemma 4 and local Parakeet transcription, transcription and AI prompts can stay local. Prompts, transcript text, screenshots, or audio may leave the device when sent to selected external providers.',
  'Screen sharing: ExtraBrain is designed to stay hidden from screen sharing and screen recording on major meeting tools, while users remain responsible for following all rules.',
  'Responsible use: users must follow interview, workplace, employer, school, and platform rules.',
];

export const essentialPages = [
  { title: 'Overview', href: '/' },
  { title: 'Download', href: '/download/' },
  { title: 'Pricing', href: '/pricing/' },
  { title: 'Free vs Pro', href: '/pricing/free-vs-pro/' },
  { title: 'Privacy', href: '/privacy/' },
  { title: 'Getting started', href: '/help/getting-started/' },
  { title: 'Installation', href: '/help/installation/' },
  { title: 'AI providers', href: '/help/setup-api-keys/' },
  { title: 'Interview guide', href: '/help/using-extrabrain-in-interviews/' },
  { title: 'Billing', href: '/help/billing-pro-plan/' },
];

export const pricingTiers = [
  {
    name: 'Free',
    price: 'Always free',
    summary: 'Core desktop app, live workflow support, local Gemma 4 on-device AI where installed and compatible, and BYO provider setup.',
    features: [
      'Download and use the Mac app',
      'Use local Gemma 4 on-device AI where installed and compatible, or connect OpenAI, Anthropic, Claude, Codex, or compatible provider access',
      'Local-first transcripts, prompts, screenshots, notes, and session context',
      'Local Parakeet transcription and optional Deepgram setup',
      'Help center, setup, privacy, and troubleshooting guides',
    ],
  },
  {
    name: 'Pro',
    price: 'From $6.99/mo',
    summary: 'Advanced controls for repeated interview, meeting, and research workflows. Pick the billing option that fits your timeline.',
    primaryCta: {
      label: 'Start Pro for $6.99/mo',
      href: lemonSqueezyCheckoutLinks.proMonthlyFounder,
    },
    billingOptions: [
      {
        label: 'Monthly',
        price: '$6.99/mo',
        originalPrice: '$9.99/mo',
        badge: 'Founder',
        note: 'Early-adopter price with code EARLYBIRD applied.',
      },
      { label: 'Yearly', price: '$79/yr', note: 'About $6.58/mo. Save 34% vs monthly.' },
      { label: 'Lifetime', price: '$149', originalPrice: '$179', badge: 'Launch' },
    ],
    features: [
      'Everything in Free',
      'Custom profiles with reusable prompt guidance',
      'Profile-specific workflow controls for analysis behavior',
      'Richer session history across transcripts, notes, screenshots, and saved facts',
      'Post-session summaries for decisions, risks, follow-ups, and review',
      'Premium model and advanced workflow controls where enabled',
      'Purchase and activate from Settings -> License inside the app',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    summary: 'Policy, deployment, privacy, and workflow support for teams.',
    features: [
      'Team rollout planning',
      'Responsible-use and policy guidance',
      'Security and deployment review',
      'Custom workflow support for team requirements',
    ],
  },
];

export const homepageFaq = [
  {
    question: 'What is ExtraBrain?',
    answer:
      'ExtraBrain is a free, local-first desktop AI interview and meeting copilot. It provides live transcription, screen-aware context, structured prompts, question generation, local Gemma 4 on-device AI where installed and compatible, and a desktop window designed for private live workflows. It is available for Mac today, with Windows and Linux planned.',
  },
  {
    question: 'Is ExtraBrain the same as Extra Brain?',
    answer:
      'Yes. ExtraBrain is the official product name, and Extra Brain is a common spaced search people may use for the same Mac AI interview assistant and meeting copilot.',
  },
  {
    question: 'Is ExtraBrain free?',
    answer:
      'Yes. ExtraBrain is free to download and use. ExtraBrain Pro starts at $6.99/month (Founder pricing, regular $9.99), with $79/year, and a $149 Lifetime launch option. Pro adds custom profiles, reusable prompt guidance, richer session history, post-session summaries, premium model controls where enabled, and advanced workflow tools.',
  },
  {
    question: 'What platforms does ExtraBrain support?',
    answer:
      'ExtraBrain is available for Mac today, including Apple Silicon Macs such as M1, M2, M3, and M4, plus Intel Macs. Windows and Linux are planned, not current release targets.',
  },
  {
    question: 'Which AI providers does ExtraBrain support?',
    answer:
      'ExtraBrain supports Google Gemma 4 local AI where installed and compatible, plus provider access you control: OpenAI, Anthropic, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription modes.',
  },
  {
    question: 'Can I bring my own OpenAI or Anthropic key?',
    answer:
      'Yes. ExtraBrain is built around provider access you control. You can use local Gemma 4 where installed and compatible, or connect your own OpenAI, Anthropic, custom OpenAI-compatible endpoint, Claude Subscription, or Codex Subscription setup.',
  },
  {
    question: 'How does transcription work?',
    answer:
      'ExtraBrain supports local NVIDIA Parakeet transcription and optional Deepgram. Your exact data flow depends on whether you choose local Parakeet transcription, local Gemma 4, or external providers.',
  },
  {
    question: 'Does ExtraBrain collect user data?',
    answer:
      'ExtraBrain is designed as a local-first app. With local Gemma 4 and local Parakeet transcription, transcription and AI prompts can stay on your Mac. Content may leave your device only when you choose optional external providers such as cloud model APIs or Deepgram.',
  },
  {
    question: 'Is using ExtraBrain in interviews allowed or considered cheating?',
    answer:
      'ExtraBrain is a tool, and you are responsible for following the policies of the company, interviewer, school, employer, or platform you are working with. Use it to support thinking, notes, accessibility, and preparation without misrepresenting your skills.',
  },
  {
    question: 'Can interviewers detect ExtraBrain on Zoom, Google Meet, or Microsoft Teams?',
    answer:
      'ExtraBrain is designed to stay hidden from screen sharing and screen recording on major meeting tools. You should still follow all interview, workplace, school, and platform rules.',
  },
  {
    question: 'Does ExtraBrain join the meeting as a bot?',
    answer:
      'No. ExtraBrain runs as a desktop app on your Mac rather than joining Zoom, Google Meet, Microsoft Teams, or other calls as another participant.',
  },
  {
    question: 'Does ExtraBrain help with LeetCode and coding interviews?',
    answer:
      'Yes. ExtraBrain is built for coding interviews and LeetCode-style sessions on HackerRank, CoderPad, Codility, CodeSignal, and similar platforms. It can help capture prompts, reason through edge cases, and structure complexity tradeoffs.',
  },
  {
    question: 'Can ExtraBrain help after a meeting or interview?',
    answer:
      'Yes. ExtraBrain can help turn session context into notes, decisions, action items, unresolved risks, follow-up questions, saved facts, and review material while keeping the workflow in a desktop app you control.',
  },
  {
    question: 'Is ExtraBrain more like an interview assistant or a meeting notetaker?',
    answer:
      'ExtraBrain sits between those categories. It supports live interview workflows, meeting notes, local transcription, screen-aware context, and post-session review without joining the call as a meeting bot.',
  },
  {
    question: 'Can ExtraBrain run without sending content to the cloud?',
    answer:
      'A fully local posture is possible when local Parakeet transcription and local Gemma 4 are installed, compatible, and you do not choose external model or transcription providers. Downloads, updates, website analytics, and external providers use network services.',
  },
  {
    question: 'How is ExtraBrain different from InterviewCoder, Cluely, or Final Round AI?',
    answer:
      'ExtraBrain is local-first, free to start, desktop-native, and built around local Gemma 4 on-device AI where installed and compatible plus provider access you control. It is available for Mac today, with Windows and Linux planned. It emphasizes model choice, data-flow clarity, responsible use, and live interview or meeting context rather than bundled AI credits alone.',
  },
];

type FreeVsProComparisonStatus = 'same' | 'pro-unlock' | 'cost-note';
type FreeVsProComparisonValue = string | string[];

type FreeVsProComparison = {
  caption: string;
  plans: Array<{
    name: string;
    price: string;
    summary: string;
    cta: { label: string; href: string; variant: 'primary' | 'secondary' };
    highlight?: boolean;
  }>;
  groups: Array<{
    title: string;
    rows: Array<{
      label: string;
      free: FreeVsProComparisonValue;
      pro: FreeVsProComparisonValue;
      difference: string;
      status: FreeVsProComparisonStatus;
    }>;
  }>;
};

export type MarketingPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ogImage?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  hideSummary?: boolean;
  sections: Array<{
    title: string;
    body?: string;
    items?: Array<{ title: string; body: string; href?: string }>;
    freeVsProComparison?: FreeVsProComparison;
    table?: {
      columns: string[];
      rows: Array<{ label: string; cells: string[] }>;
    };
    media?: Array<{ src: string; alt: string; caption?: string; width?: number; height?: number }>;
  }>;
  faq?: Array<{ question: string; answer: string }>;
  schemaType?: 'SoftwareApplication' | 'FAQPage' | 'HowTo' | 'Article';
  sources?: Array<{ label: string; href: string }>;
  comparisonHub?: unknown;
  comparison?: unknown;
};

const defaultCta = { label: 'Download for Mac', href: '/download/' };

const baseMarketingPages: MarketingPage[] = [
  {
    slug: 'download',
    title: 'Download ExtraBrain for macOS',
    description:
      'Download the latest ExtraBrain macOS release, review Mac compatibility, install steps, checksum notes, signing guidance, and release metadata.',
    eyebrow: 'Download',
    h1: 'Download the free ExtraBrain macOS app.',
    lead:
      'Use this first-party download page as the canonical place for the latest ExtraBrain Mac release, platform requirements, installation steps, release integrity notes, and troubleshooting before a live interview or meeting.',
    primaryCta: { label: 'Download latest release', href: latestReleaseUrl },
    secondaryCta: { label: 'Read installation guide', href: '/help/installation/' },
    schemaType: 'HowTo',
    sections: [
      {
        title: 'Compatibility',
        items: [
          { title: 'Operating system', body: 'macOS on Apple Silicon and Intel Macs.' },
          { title: 'Planned platforms', body: 'Windows and Linux are planned, not current release targets.' },
          { title: 'AI options', body: 'Use local Gemma 4 on-device AI where installed and compatible, or bring OpenAI, Anthropic, Claude Subscription, Codex Subscription, or custom OpenAI-compatible access.' },
          { title: 'Best first test', body: 'Run a short rehearsal after installation to confirm window behavior, microphone access, transcription, Gemma 4 availability, and provider routing.' },
        ],
      },
      {
        title: 'Install steps',
        items: [
          { title: 'Download', body: 'Open the latest GitHub release and download the current macOS build.' },
          { title: 'Install', body: 'Open the installer or app bundle and move ExtraBrain into Applications if the release instructions call for it.' },
          { title: 'Launch', body: 'Open ExtraBrain once, grant required macOS permissions, and confirm settings are reachable.' },
          { title: 'Verify', body: 'Run a short rehearsal before using ExtraBrain in a live interview or meeting.' },
          { title: 'Keep notes nearby', body: 'Open the getting started, provider setup, privacy, and troubleshooting guides before your first high-stakes session.' },
        ],
      },
      {
        title: 'Release integrity',
        body:
          'GitHub release metadata is the source of truth for asset names, dates, file sizes, and published digests. When a SHA-256 digest is available in GitHub metadata, the download page can surface it. If a release does not publish signing or notarization details, verify those details in the release notes before relying on them.',
      },
    ],
    faq: [
      { question: 'Where is the latest ExtraBrain download?', answer: 'The canonical download link is /download/, which points to the latest GitHub release for the macOS app.' },
      { question: 'Does ExtraBrain support Intel Macs?', answer: 'Yes. ExtraBrain supports macOS on Apple Silicon and Intel Macs.' },
      { question: 'Is ExtraBrain available for Windows or Linux?', answer: 'Not today. ExtraBrain is available for Mac now, and Windows and Linux are planned future platforms.' },
      { question: 'What should I test after downloading ExtraBrain?', answer: 'Launch the app, confirm settings and permissions, test transcription, verify local Gemma 4 or provider access, and rehearse before using it in an interview or meeting.' },
      { question: 'Is the app notarized?', answer: 'Do not assume notarization from this page alone. Check the current release notes when signing or notarization status matters.' },
    ],
  },
  {
    slug: 'pricing',
    title: 'ExtraBrain Pricing: Free & Pro Plans for Mac AI Copilot',
    description:
      'ExtraBrain pricing: Free, Pro at $9.99/month ($6.99 Founder), $79/year, $149 Lifetime, BYO provider costs, and Enterprise.',
    eyebrow: 'Pricing',
    h1: 'Free to start. Pro from $6.99/month, $79/year, or $149 lifetime.',
    lead:
      'ExtraBrain separates app features from model usage. The core Mac app is free, Pro unlocks advanced workflow controls, and external AI usage is billed by the providers you choose.',
    ogImage: '/assets/og/pricing.svg',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Compare Free and Pro', href: '/pricing/free-vs-pro/' },
    hideSummary: true,
    sections: [
      {
        title: 'Plans',
        items: pricingTiers.map((tier) => ({
          title: `${tier.name}: ${tier.price}`,
          body: `${tier.summary} ${tier.features.join(' ')}`,
        })),
      },
      {
        title: 'What Pro unlocks',
        body:
          'ExtraBrain Pro is for users who repeat high-stakes workflows and want more control over how the app responds before, during, and after a session.',
        items: [
          { title: 'Custom profiles', body: 'Save reusable prompt guidance for a specific interview style, meeting format, research workflow, or response preference.' },
          { title: 'Profile workflow controls', body: 'Configure profile behavior such as expanding the window on analysis, analyzing after a region screenshot, and using fuller session context.' },
          { title: 'Richer follow-through', body: 'Use advanced history, summaries, saved facts, and review-oriented controls where the current release exposes them.' },
          { title: 'In-app license flow', body: 'Open Settings -> License in ExtraBrain to purchase, activate, view, or deactivate Pro.' },
        ],
      },
      {
        title: 'Gemma 4 and provider costs',
        body: 'How model and transcription costs work alongside the ExtraBrain app and Pro license.',
        items: [
          { title: 'Local Gemma 4', body: 'Runs locally when Gemma 4 is installed and compatible with the Mac. No external model provider fees apply to local Gemma 4 requests.' },
          { title: 'External providers', body: 'OpenAI, Anthropic, Deepgram, Claude, Codex, and compatible-provider usage is billed directly by those providers under your own account.' },
          { title: 'No bundled credits', body: 'ExtraBrain Pro is an app license, not an AI credit pack. It does not include or replace external provider billing.' },
        ],
      },
      {
        title: 'What to compare against paid interview assistants',
        items: [
          { title: 'App price versus model price', body: 'Some live AI interview tools bundle model usage into subscriptions, credits, or lifetime plans. ExtraBrain keeps current app access separate from external provider billing so you can see which account pays for each request.' },
          { title: 'Usage limits', body: 'Before comparing any plan, check whether interview minutes, AI messages, screenshots, mock interviews, premium models, transcription, or support are metered separately.' },
          { title: 'Data path', body: 'A lower sticker price is not the whole privacy story. Compare whether transcripts, audio, screenshots, and answers stay local, go to a hosted service, or go to provider accounts you control.' },
        ],
      },
      {
        title: 'How to choose a plan',
        items: [
          { title: 'Choose Free', body: 'Use Free when you want the Mac app, live interview and meeting support, local Parakeet transcription, local Gemma 4 where installed and compatible, and BYO provider setup.' },
          { title: 'Choose Pro', body: 'Use Pro when repeated workflows need custom profiles, reusable prompt guidance, richer session context and history, post-session summaries, and advanced model controls where enabled.' },
          { title: 'Choose Enterprise', body: 'Use Enterprise when a team needs rollout planning, policy review, security input, privacy requirements, deployment support, or custom workflow guidance.' },
        ],
      },
    ],
    faq: [
      { question: 'Is ExtraBrain free?', answer: 'Yes. The core Mac product is free to download and use today.' },
      { question: 'What does ExtraBrain Pro cost?', answer: 'ExtraBrain Pro is $9.99/month regular with $6.99/month Founder pricing for early users, $79/year, or $149 Lifetime (launch price).' },
      { question: 'What does ExtraBrain Pro include?', answer: 'Pro adds custom profiles, reusable prompt guidance, profile-specific workflow controls, richer history, summaries, premium model controls where enabled, and advanced workflow controls.' },
      { question: 'Where do I buy ExtraBrain Pro?', answer: 'Open Settings -> License inside the ExtraBrain app to purchase, activate, view, or deactivate Pro.' },
      { question: 'Do I still pay my AI provider?', answer: 'Only when you use an external provider. Local Gemma 4 runs locally when installed and compatible, while provider usage remains separate from ExtraBrain pricing.' },
      { question: 'Does ExtraBrain include bundled AI credits?', answer: 'No. ExtraBrain separates app features from external model usage unless a future plan explicitly says otherwise.' },
      { question: 'How should I compare ExtraBrain with monthly or lifetime interview tools?', answer: 'Compare the app price, model and transcription billing, usage limits, platform support, privacy path, cancellation terms, and whether you want a bundled hosted service or provider access you control.' },
      { question: 'Can a team buy Enterprise support?', answer: 'Yes. Enterprise is for rollout planning, responsible-use policy, security and privacy review, deployment constraints, and custom workflow support.' },
    ],
  },
  {
    slug: 'pricing/free-vs-pro',
    title: 'ExtraBrain Free vs Pro: Features, Models, Profiles & Provider Costs',
    description:
      'Compare ExtraBrain Free and Pro for live interview workflows, stealth mode, AI models, providers, interview domains, custom profiles, provider costs, and licensing.',
    eyebrow: 'Free vs Pro',
    h1: 'ExtraBrain vs ExtraBrain Pro.',
    lead:
      'ExtraBrain Free gives you the core Mac live assistant, local-first workflow, built-in domains, and bring-your-own provider setup. ExtraBrain Pro adds advanced controls for people who reuse profiles, session context, summaries, and premium settings across repeated interviews, meetings, and research calls.',
    ogImage: '/assets/og/free-vs-pro.svg',
    primaryCta: { label: 'Download Free', href: '/download/' },
    secondaryCta: { label: 'Open Settings -> License', href: '/help/billing-pro/activate-license/' },
    hideSummary: true,
    sections: [
      {
        title: 'Plan comparison',
        body:
          'Compare the app workflow, model paths, interview domains, and costs together. ExtraBrain Pro changes app controls and reusable workflow behavior; AI provider usage remains separate for both plans.',
        freeVsProComparison: {
          caption: 'ExtraBrain Free and ExtraBrain Pro plan comparison',
          plans: [
            {
              name: 'Free',
              price: '$0',
              summary: 'Best for trying the core Mac live assistant with built-in profiles and your own provider setup.',
              cta: { label: 'Download Free', href: '/download/', variant: 'secondary' },
            },
            {
              name: 'ExtraBrain Pro',
              price: 'From $6.99/mo',
              summary: 'Best for repeated interviews, meetings, and research workflows that need reusable controls.',
              cta: { label: 'Start Pro', href: lemonSqueezyCheckoutLinks.proMonthlyFounder, variant: 'primary' },
              highlight: true,
            },
          ],
          groups: [
            {
              title: 'Pro unlocks',
              rows: [
                {
                  label: 'Custom profiles',
                  free: 'Not included',
                  pro: 'Reusable prompt profiles',
                  difference: 'Upgrade when you need saved guidance for a specific role, interview loop, meeting format, or response style.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Workflow controls',
                  free: 'Built-in defaults',
                  pro: 'Per-profile behavior',
                  difference: 'Pro lets custom profiles control analysis behavior, screenshot follow-up, and context use.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Session review',
                  free: 'Standard local history',
                  pro: 'Richer context and summaries',
                  difference: 'Pro is better when repeated sessions need saved facts, summaries, and review controls.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Premium controls',
                  free: 'Core controls',
                  pro: 'Advanced controls where enabled',
                  difference: 'Pro receives premium workflow and model controls as they ship in the app.',
                  status: 'pro-unlock',
                },
              ],
            },
            {
              title: 'Live interview workflow',
              rows: [
                {
                  label: 'Live session workflow',
                  free: 'Included',
                  pro: 'Included',
                  difference: 'Same desktop app foundation for live interviews, meetings, lectures, and research calls.',
                  status: 'same',
                },
                {
                  label: 'Live transcription',
                  free: 'Local Parakeet or optional Deepgram',
                  pro: 'Local Parakeet or optional Deepgram',
                  difference: 'Same transcription choices; Deepgram costs and data handling remain separate from the app plan.',
                  status: 'same',
                },
                {
                  label: 'Transcript and context intelligence',
                  free: 'Transcript, notes, screenshots, and prompts',
                  pro: 'Richer context controls where enabled',
                  difference: 'Free includes core live context; Pro is better when repeated workflows need fuller session context and saved facts.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Screen and screenshot context',
                  free: 'Screenshot capture and screen context',
                  pro: 'Screenshot capture plus profile-specific follow-up controls',
                  difference: 'Core screenshot workflows are available in Free; Pro can reuse profile behavior for analysis after region screenshots.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Stealth mode',
                  free: 'Designed to stay hidden from screen sharing and screen recording on major meeting tools',
                  pro: 'Same base visibility behavior, plus reusable workflow controls',
                  difference: 'Stealth is not a separate paid feature. You remain responsible for interview, workplace, school, and platform rules.',
                  status: 'same',
                },
                {
                  label: 'Desktop overlay and privacy controls',
                  free: 'Window, opacity, screenshot protection, click-through, and app visibility controls',
                  pro: 'Same controls with reusable profile workflows where enabled',
                  difference: 'The desktop privacy foundation stays in the core app; Pro adds repeatable workflow configuration.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Local session history',
                  free: 'Local transcripts, analyses, screenshots, notes, and saved facts',
                  pro: 'Richer review, summaries, and saved context controls where enabled',
                  difference: 'Both plans keep session records local unless you send content to a selected provider or delete the local record.',
                  status: 'pro-unlock',
                },
              ],
            },
            {
              title: 'AI models and providers',
              rows: [
                {
                  label: 'Local Gemma 4',
                  free: 'Available where installed and compatible',
                  pro: 'Available where installed and compatible',
                  difference: 'Local Gemma 4 availability depends on installation and compatible hardware, not the app plan.',
                  status: 'same',
                },
                {
                  label: 'OpenAI, Anthropic, and custom endpoints',
                  free: 'Bring your own API key or compatible endpoint',
                  pro: 'Bring your own API key or compatible endpoint',
                  difference: 'Both plans use provider access you control; provider billing, quota, retention, and model access stay with that provider.',
                  status: 'same',
                },
                {
                  label: 'Claude Subscription',
                  free: 'Use supported Claude subscription mode',
                  pro: 'Use supported Claude subscription mode',
                  difference: 'Claude subscription access is a provider path, not bundled ExtraBrain Pro AI credit.',
                  status: 'same',
                },
                {
                  label: 'Codex Subscription',
                  free: 'Use supported Codex subscription mode',
                  pro: 'Use supported Codex subscription mode',
                  difference: 'Codex subscription access stays tied to the provider account and is separate from ExtraBrain billing.',
                  status: 'same',
                },
                {
                  label: 'Model selection and reasoning controls',
                  free: 'Core provider model choices where available',
                  pro: 'Premium model and advanced workflow controls where enabled',
                  difference: 'Pro receives advanced controls as they ship, while underlying model access still depends on the selected provider.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Bundled AI credits',
                  free: 'Not included',
                  pro: 'Not included',
                  difference: 'ExtraBrain separates app features from external model and transcription usage unless a future plan explicitly says otherwise.',
                  status: 'cost-note',
                },
              ],
            },
            {
              title: 'Interview domains and profiles',
              rows: [
                {
                  label: 'Coding interviews',
                  free: 'Built-in Coding profile',
                  pro: 'Custom coding profiles for reusable guidance',
                  difference: 'Free covers common coding prompts; Pro helps when you want saved role, stack, or answer-style guidance.',
                  status: 'pro-unlock',
                },
                {
                  label: 'System design interviews',
                  free: 'Built-in System Design profile',
                  pro: 'Custom architecture and tradeoff profiles',
                  difference: 'Pro can preserve reusable prompts for scale, tradeoffs, APIs, data modeling, and follow-up structure.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Behavioral interviews',
                  free: 'Built-in Behavioral profile',
                  pro: 'Custom STAR, leadership, and role-specific profiles',
                  difference: 'Free supports general behavioral structure; Pro is for repeatable guidance tailored to a target role or company loop.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Meeting copilot',
                  free: 'Built-in Meeting profile',
                  pro: 'Custom meeting and follow-through profiles',
                  difference: 'Pro helps recurring meeting workflows reuse note, risk, decision, and follow-up preferences.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Product, research, and general workflows',
                  free: 'Assistant profile and general prompts',
                  pro: 'Reusable custom profiles for specialized domains',
                  difference: 'Use Pro when you want persistent domain guidance beyond the built-in profile set.',
                  status: 'pro-unlock',
                },
                {
                  label: 'Custom domain guidance',
                  free: 'Manual prompt each time',
                  pro: 'Saved custom profile guidance',
                  difference: 'Pro replaces repeated one-off setup with reusable instructions for the domains you use most.',
                  status: 'pro-unlock',
                },
              ],
            },
            {
              title: 'Costs and setup',
              rows: [
                {
                  label: 'App price',
                  free: '$0',
                  pro: ['Founder monthly: $6.99/mo', 'Yearly: $79/yr', 'Lifetime: $149'],
                  difference: 'Pro adds app workflow features, not bundled AI credits.',
                  status: 'cost-note',
                },
                {
                  label: 'Provider costs',
                  free: 'Separate',
                  pro: 'Separate',
                  difference: 'OpenAI, Anthropic, Deepgram, Claude, Codex, or custom provider billing remains separate.',
                  status: 'cost-note',
                },
                {
                  label: 'Purchase path',
                  free: 'No purchase',
                  pro: 'Settings -> License or checkout',
                  difference: 'Use Pro only when workflow controls save meaningful setup and review time.',
                  status: 'cost-note',
                },
              ],
            },
          ],
        },
      },
      {
        title: 'What Free includes',
        items: [
          { title: 'Core desktop workflow', body: 'Download and use the Mac app for live interviews, meetings, lectures, research calls, and technical discussions.' },
          { title: 'Provider choice', body: 'Use local Gemma 4 on-device AI where installed and compatible, or connect OpenAI, Anthropic, Claude Subscription, Codex Subscription, Deepgram, or compatible provider access.' },
          { title: 'Built-in domains', body: 'Use Assistant, Coding, System Design, Behavioral, and Meeting profiles for common interview, meeting, and research workflows.' },
          { title: 'Stealth and screen context', body: 'Use the desktop overlay, screenshot capture, privacy controls, and screen-share visibility behavior built into the core Mac app.' },
          { title: 'Local-first history', body: 'Keep local transcripts, screenshots, notes, analyses, and saved facts on your Mac unless you delete them or send content to a selected provider.' },
        ],
      },
      {
        title: 'What Pro adds',
        items: [
          { title: 'Custom profiles', body: 'Save reusable prompt guidance for a specific role, interview loop, meeting format, study workflow, or response style.' },
          { title: 'Workflow behavior per profile', body: 'Control whether a custom profile expands the window on analysis, starts analysis after a region screenshot, or uses fuller session context.' },
          { title: 'Domain-specific reuse', body: 'Turn repeated coding, system design, behavioral, meeting, product, research, or custom-domain guidance into saved profiles.' },
          { title: 'Richer follow-through', body: 'Use advanced history, post-session summaries, saved facts, review controls, and premium model controls where enabled by the current release.' },
          { title: 'Simple license management', body: 'Purchase, activate, view status, and deactivate Pro from Settings -> License inside the app.' },
        ],
      },
      {
        title: 'Provider billing stays separate',
        body:
          'ExtraBrain Pro changes app workflow features, not your external provider billing. OpenAI, Anthropic, Deepgram, Claude, Codex, or custom provider costs, quotas, retention, and model access remain governed by those provider accounts.',
      },
    ],
    faq: [
      { question: 'Do I need Pro to use ExtraBrain?', answer: 'No. The core Mac app is free to download and use.' },
      { question: 'How much is ExtraBrain Pro?', answer: 'ExtraBrain Pro is $9.99/month regular with $6.99/month Founder pricing for early users, $79/year, or $149 Lifetime (launch price).' },
      { question: 'What is the biggest reason to upgrade?', answer: 'Upgrade when you need custom profiles, reusable prompt guidance, profile-specific workflow controls, richer session context, summaries, and premium controls where enabled.' },
      { question: 'Where do I buy Pro?', answer: 'Open Settings -> License inside the ExtraBrain app to purchase, activate, view, or deactivate Pro.' },
      { question: 'Does Pro include AI credits?', answer: 'No. External AI and transcription provider usage remains separate from ExtraBrain Pro.' },
    ],
  },
  {
    slug: 'privacy',
    title: 'ExtraBrain Privacy and Data Flow',
    description:
      'How ExtraBrain handles local storage, local Gemma 4, local Parakeet transcription, screenshots, prompts, external providers, Deepgram, API keys, and privacy controls.',
    eyebrow: 'Privacy',
    h1: 'Fully local when your setup stays local.',
    lead:
      'ExtraBrain can keep transcription and AI prompts on your Mac when you use local Parakeet transcription plus local Gemma 4. External model or transcription providers receive only the content required for requests you choose to send.',
    primaryCta: { label: 'Read help privacy guide', href: '/help/privacy-data-handling/' },
    secondaryCta: { label: 'Review data flow', href: '/data-flow/' },
    sections: [
      {
        title: 'What stays local by default',
        items: [
          { title: 'Desktop app state', body: 'The app runs on your Mac rather than a hosted browser dashboard.' },
          { title: 'Fully local mode', body: 'With local Gemma 4 and local Parakeet transcription, transcripts, prompts, screenshots, notes, and saved facts can stay on your Mac.' },
          { title: 'Hardware requirement', body: 'Local Gemma 4 requires installation and compatible hardware and may not be available on every Mac or customer environment.' },
          { title: 'Credentials', body: 'Provider credentials should stay in the app-controlled storage path and should be rotated if a device or account is compromised.' },
        ],
      },
      {
        title: 'What can leave your device',
        items: [
          { title: 'External model requests', body: 'Prompt text, transcript excerpts, screenshots, and context can be sent to OpenAI, Anthropic, Claude, Codex, or a custom endpoint when you ask ExtraBrain to use that provider.' },
          { title: 'Transcription', body: 'Local Parakeet can keep transcription on-device. Optional Deepgram can receive audio or transcription data depending on setup.' },
          { title: 'Analytics', body: 'The public website tracks page and download interactions. The app privacy posture should be reviewed separately from website analytics.' },
          { title: 'Pricing boundary', body: 'Use the pricing page to separate ExtraBrain app features from external provider billing and retention settings.', href: '/pricing/' },
        ],
      },
      {
        title: 'User control',
        body:
          'Use only providers you trust, send the minimum context required, rehearse with non-sensitive material, and avoid using ExtraBrain where interview, employer, school, or platform policies prohibit assistance.',
      },
      {
        title: 'Local-first comparison questions',
        items: [
          { title: 'Meeting bot or desktop app', body: 'Ask whether the assistant joins calls as a participant, records through a cloud bot, or runs as a desktop app that you control locally.' },
          { title: 'Audio and transcript routing', body: 'Check whether raw audio, transcript text, screenshots, and summaries stay on the device, go to a vendor backend, or go directly to external providers you configured.' },
          { title: 'Provider retention', body: 'When external AI or transcription is enabled, review each provider account for retention, training, logging, billing, and deletion settings.' },
        ],
      },
      {
        title: 'Privacy checklist before a sensitive session',
        items: [
          { title: 'Pick the data path', body: 'Decide whether the session should use local Gemma 4, local Parakeet transcription, external model providers, optional Deepgram, or a mixed setup.' },
          { title: 'Limit context', body: 'Send only the transcript excerpts, screenshots, notes, or prompts that the task requires.' },
          { title: 'Review provider policies', body: 'External model and transcription providers control their own retention, billing, and account settings.' },
          { title: 'Rehearse safely', body: 'Test privacy-sensitive workflows with realistic but non-confidential material before a real interview or meeting.' },
        ],
      },
    ],
    faq: [
      { question: 'Is ExtraBrain local-first?', answer: 'Yes. ExtraBrain is a local-first desktop app. With local Gemma 4 and local Parakeet transcription, transcription and AI prompts can stay on your Mac; external providers receive content only when you choose features that use them.' },
      { question: 'Can screenshots leave my device?', answer: 'Yes, if you include screenshots in a provider request. Only send screenshots when the provider and situation are appropriate.' },
      { question: 'Is local Gemma 4 available to everyone?', answer: 'Not always. Local Gemma 4 requires installation and compatible hardware and may not be available on every Mac or customer environment.' },
      { question: 'Can I use local transcription?', answer: 'Yes. ExtraBrain supports local NVIDIA Parakeet transcription, with optional Deepgram available when configured.' },
      { question: 'Can API keys leave my control?', answer: 'Provider credentials should stay in app-controlled storage. Rotate or revoke keys if a device, account, or provider credential may have been exposed.' },
      { question: 'What is the safest ExtraBrain setup?', answer: 'The strictest posture is local Parakeet transcription plus local Gemma 4 where installed and compatible, with no external provider requests for sensitive content.' },
      { question: 'How is ExtraBrain different from cloud meeting agents?', answer: 'ExtraBrain runs as a desktop app and can keep transcription and model requests local when your setup is fully local. Cloud meeting agents may join meetings, store transcripts in a vendor workspace, or process content through vendor infrastructure.' },
    ],
  },
  {
    slug: 'use-cases/coding-interviews',
    title: 'AI Coding Interview Assistant',
    description:
      'Use ExtraBrain responsibly during coding interviews, LeetCode-style prompts, HackerRank, CoderPad, Codility, and CodeSignal.',
    eyebrow: 'Use case',
    h1: 'A local-first desktop coding interview copilot.',
    lead:
      'ExtraBrain helps you capture prompts, clarify constraints, reason through edge cases, discuss complexity, and recover structure during live technical interviews.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Interview guide', href: '/help/using-extrabrain-in-interviews/' },
    sections: [
      {
        title: 'Where it helps',
        items: [
          { title: 'Prompt capture', body: 'Turn spoken or on-screen instructions into a clean problem statement.' },
          { title: 'Edge cases', body: 'Keep boundary cases, empty inputs, duplicates, and complexity tradeoffs visible.' },
          { title: 'Communication', body: 'Ask for clarifying questions and a short implementation outline before coding.' },
        ],
      },
      {
        title: 'Responsible use',
        body:
          'Use ExtraBrain only within the rules of the interview, employer, school, or platform. It should support your reasoning and notes, not misrepresent your skills.',
      },
      {
        title: 'Strong coding interview prompts',
        items: [
          { title: 'Clarify the problem', body: 'Ask for inputs, outputs, constraints, examples, edge cases, and assumptions before writing code.' },
          { title: 'Compare approaches', body: 'Ask for a brute-force baseline, a better approach, complexity tradeoffs, and likely failure modes.' },
          { title: 'Review the solution', body: 'Ask for test cases, boundary conditions, dry runs, and concise ways to explain time and space complexity.' },
        ],
      },
      {
        title: 'Coding copilot comparison checklist',
        items: [
          { title: 'Beyond LeetCode', body: 'Compare whether the tool helps with spoken clarifications, system design follow-ups, debugging discussion, and tradeoff explanations instead of only returning a code answer.' },
          { title: 'Screen and transcript context', body: 'Check how much context the assistant needs from screenshots, audio, pasted prompts, and transcript excerpts, then decide what is appropriate to share under the interview rules.' },
          { title: 'Policy fit', body: 'Review whether the interviewer, employer, school, or platform allows live assistance before using any real-time coding interview tool.' },
        ],
      },
    ],
    faq: [
      { question: 'Does ExtraBrain work with HackerRank and CoderPad?', answer: 'ExtraBrain is designed for live coding workflows across HackerRank, CoderPad, Codility, CodeSignal, and similar tools.' },
      { question: 'Can it solve LeetCode problems for me?', answer: 'ExtraBrain can help structure prompts and edge cases, but you remain responsible for your own work and for following interview rules.' },
      { question: 'How should I use ExtraBrain in a coding interview?', answer: 'Use it to capture the prompt, identify constraints, structure edge cases, compare approaches, and explain complexity without reading generated answers verbatim.' },
      { question: 'Does ExtraBrain support system design follow-ups during coding rounds?', answer: 'Yes. It can keep follow-up questions, tradeoffs, and implementation risks visible when an interviewer shifts from code to architecture.' },
      { question: 'How should I compare coding interview copilots?', answer: 'Compare workflow scope, platform support, data flow, provider control, whether answers include reasoning, and whether the tool fits the rules of the interview.' },
    ],
  },
  {
    slug: 'use-cases/system-design-interviews',
    title: 'AI System Design Interview Assistant',
    description:
      'Use ExtraBrain to organize requirements, constraints, scale, tradeoffs, and follow-up questions during system design interviews.',
    eyebrow: 'Use case',
    h1: 'Keep system design tradeoffs visible while you think.',
    lead:
      'ExtraBrain turns live discussion into requirements, assumptions, components, risks, and follow-up questions without forcing you to leave the conversation.',
    primaryCta: defaultCta,
    sections: [
      {
        title: 'System design support',
        items: [
          { title: 'Requirements', body: 'Capture functional and non-functional requirements as they are spoken.' },
          { title: 'Architecture', body: 'Keep candidate components, API boundaries, storage choices, queues, caches, and failure modes organized.' },
          { title: 'Tradeoffs', body: 'Prompt for latency, availability, consistency, cost, operations, and privacy tradeoffs.' },
        ],
      },
      {
        title: 'Best fit',
        body:
          'ExtraBrain is best used as a private structure layer for requirements and tradeoffs, not as a script to read verbatim. It helps you keep the discussion organized while you make the architecture decisions, explain assumptions, and adapt to interviewer feedback.',
      },
      {
        title: 'Useful system design prompts',
        items: [
          { title: 'Requirements', body: 'Ask ExtraBrain to separate functional requirements, non-functional requirements, assumptions, and open questions.' },
          { title: 'Architecture tradeoffs', body: 'Prompt for storage choices, API boundaries, queues, caches, indexing, rate limits, and failure modes.' },
          { title: 'Follow-up readiness', body: 'Keep scale estimates, bottlenecks, observability, privacy, and rollout risks visible as the interviewer probes deeper.' },
        ],
      },
      {
        title: 'System design comparison gaps',
        items: [
          { title: 'Tradeoff quality', body: 'Look for support that explains latency, availability, consistency, privacy, cost, rollout, and operations tradeoffs instead of only naming components.' },
          { title: 'Follow-up depth', body: 'System design rounds often move from broad architecture to bottlenecks and failure cases. Keep prompts ready for scale estimates, data model changes, and operational risks.' },
          { title: 'Your decision layer', body: 'Use AI output as a checklist, then make and defend your own design decisions in the interview.' },
        ],
      },
    ],
    faq: [
      { question: 'Can ExtraBrain help in system design interviews?', answer: 'Yes. ExtraBrain can organize requirements, scale assumptions, components, APIs, storage choices, tradeoffs, and follow-up questions during live system design rounds.' },
      { question: 'Should I read ExtraBrain answers verbatim?', answer: 'No. Use ExtraBrain as a structure layer while you make and explain your own design decisions.' },
      { question: 'What system design topics can ExtraBrain track?', answer: 'It can keep latency, availability, consistency, cost, privacy, failure modes, rollout constraints, and observability tradeoffs visible.' },
      { question: 'Is ExtraBrain only for coding interviews?', answer: 'No. ExtraBrain supports system design, behavioral, meeting, lecture, customer call, and research workflows in addition to coding interviews.' },
    ],
  },
  {
    slug: 'use-cases/behavioral-interviews',
    title: 'Behavioral Interview AI Assistant',
    description:
      'Use ExtraBrain to keep STAR stories, follow-up questions, and interview context organized during behavioral interviews.',
    eyebrow: 'Use case',
    h1: 'Bring the right story forward at the right moment.',
    lead:
      'ExtraBrain helps organize behavioral interview context, story selection, STAR framing, follow-up questions, and concise post-interview notes.',
    primaryCta: defaultCta,
    sections: [
      {
        title: 'Behavioral support',
        items: [
          { title: 'Story recall', body: 'Keep relevant projects, lessons, conflicts, and outcomes close while the conversation shifts.' },
          { title: 'STAR framing', body: 'Convert a broad answer into situation, task, action, result, and reflection.' },
          { title: 'Follow-ups', body: 'Track interviewer questions and tighten the next answer without losing the thread.' },
        ],
      },
      {
        title: 'Use with care',
        body:
          'Do not fabricate experience. Use ExtraBrain to organize true examples, choose the story that fits the question, and communicate clearly within the interview rules. The strongest behavioral answers still come from accurate details, concrete impact, and honest reflection.',
      },
      {
        title: 'Behavioral interview preparation',
        items: [
          { title: 'Story library', body: 'Keep real examples for leadership, conflict, failure, ownership, ambiguity, collaboration, and impact.' },
          { title: 'Concise framing', body: 'Ask for STAR structure, sharper transitions, and follow-up questions without inventing details.' },
          { title: 'Post-interview notes', body: 'Capture themes, unresolved questions, and follow-ups while the conversation is still fresh.' },
        ],
      },
      {
        title: 'Behavioral assistant comparison checklist',
        items: [
          { title: 'Truthfulness', body: 'A useful behavioral assistant should organize real experience and constraints, not create fake accomplishments or unverifiable stories.' },
          { title: 'Role context', body: 'Keep resume, job description, company context, and interviewer follow-ups separate so you can adapt without losing the thread.' },
          { title: 'After-action review', body: 'Post-session notes should help you improve future answers, track follow-ups, and remember what was actually discussed.' },
        ],
      },
    ],
    faq: [
      { question: 'Can ExtraBrain help with behavioral interviews?', answer: 'Yes. It can organize real stories, STAR framing, follow-up questions, and concise notes while you remain responsible for truthful answers.' },
      { question: 'Does ExtraBrain write fake interview stories?', answer: 'No. ExtraBrain should help structure true examples, not fabricate experience or misrepresent your background.' },
      { question: 'What behavioral topics work well with ExtraBrain?', answer: 'Leadership, conflict, failure, ownership, ambiguity, collaboration, prioritization, and impact stories all benefit from a clear structure.' },
      { question: 'Can ExtraBrain help with post-interview review?', answer: 'Yes. It can help turn session context into themes, follow-up questions, notes to improve next time, and reminders about what was asked.' },
    ],
  },
  {
    slug: 'use-cases/ai-assistant-for-meetings',
    title: 'AI Meeting Assistant for Mac — ExtraBrain',
    description:
      'Use ExtraBrain as an AI meeting assistant for Mac with live transcription, screen context, meeting notes, decisions, risks, follow-ups, private local history, and no meeting bot.',
    eyebrow: 'AI meeting assistant for Mac',
    h1: 'AI meeting assistant for Mac that runs on your desktop.',
    lead:
      'ExtraBrain helps you follow live meetings, capture context, organize decisions, and prepare follow-ups from a desktop assistant instead of a bot that joins the call.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Compare meeting copilot workflows', href: '/use-cases/meeting-copilot/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'What it helps with',
        items: [
          { title: 'Live meeting notes', body: 'Capture decisions, risks, objections, owners, unresolved questions, and customer pain points while the conversation is moving.', href: '/use-cases/meeting-copilot/' },
          { title: 'Transcript-aware context', body: 'Use live transcription plus selected screen context to turn messy discussion into clearer prompts, notes, and summaries.', href: '/features/live-transcription-ai-assistant/' },
          { title: 'Private desktop workflow', body: 'Run the assistant on your Mac without adding a bot participant to Zoom, Google Meet, Microsoft Teams, or similar calls.', href: '/features/private-ai-assistant/' },
          { title: 'Post-meeting follow-through', body: 'Review local session history and turn meetings into summaries, action items, saved facts, and next-call context.' },
        ],
      },
      {
        title: 'How it works',
        items: [
          { title: 'Start the session', body: 'Open ExtraBrain before the meeting, choose your transcription and AI provider path, and confirm what context is appropriate to capture.' },
          { title: 'Ask meeting prompts', body: 'Prompt for decisions, blockers, risks, owners, customer quotes, follow-up questions, or concise notes while the call continues.' },
          { title: 'Review and link context', body: 'Use session history after the call and connect related workflows such as meeting copilot, AI note taking, and private transcription.', href: '/use-cases/ai-note-taker-for-mac/' },
        ],
      },
      {
        title: 'Related AI assistant pages',
        items: [
          { title: 'Meeting copilot', body: 'Compare the meeting copilot workflow for decisions, risks, and follow-ups.', href: '/use-cases/meeting-copilot/' },
          { title: 'AI assistant for video calls', body: 'Use ExtraBrain with Zoom, Google Meet, Microsoft Teams, and similar calls.', href: '/use-cases/ai-assistant-for-video-calls/' },
          { title: 'Private AI assistant', body: 'Review local-first privacy, provider routing, and data path controls.', href: '/features/private-ai-assistant/' },
        ],
      },
    ],
    faq: [
      { question: 'What is an AI assistant for meetings?', answer: 'An AI assistant for meetings helps capture live conversation, organize decisions, summarize context, and prepare follow-ups. ExtraBrain does this from a Mac desktop app rather than a meeting bot.' },
      { question: 'Does ExtraBrain join meetings as a bot?', answer: 'No. ExtraBrain runs locally as a desktop app and does not appear as another meeting participant.' },
      { question: 'Can ExtraBrain help after the meeting?', answer: 'Yes. ExtraBrain can turn local session context into summaries, action items, saved facts, review notes, and follow-up prompts.' },
      { question: 'Which meeting apps does this support?', answer: 'ExtraBrain is designed for live meeting workflows across Zoom, Google Meet, Microsoft Teams, Webex, Slack Huddles, Discord, and similar desktop calls.' },
    ],
  },
  {
    slug: 'use-cases/meeting-copilot',
    title: 'AI Meeting Copilot for Mac — ExtraBrain',
    description:
      'ExtraBrain is an AI meeting copilot for Mac that captures live notes, decisions, risks, owners, objections, summaries, and follow-ups without joining as a bot.',
    eyebrow: 'AI meeting copilot',
    h1: 'AI meeting copilot for live decisions, notes, and follow-ups.',
    lead:
      'Use ExtraBrain as a desktop meeting copilot when you need help staying present, tracking decisions, and turning fast conversation into useful notes.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'AI assistant for meetings', href: '/use-cases/ai-assistant-for-meetings/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'What it helps with',
        items: [
          { title: 'Decision tracking', body: 'Separate decisions, open questions, risks, owners, blockers, and next steps as the discussion changes.' },
          { title: 'Customer and research calls', body: 'Capture objections, quotes, pain points, roadmap signals, and follow-up questions without losing the thread.' },
          { title: 'Meeting summaries', body: 'Turn session context into summaries and review notes after the call while details are still fresh.', href: '/use-cases/ai-note-taker-for-mac/' },
          { title: 'Screen context', body: 'Use selected visible context from slides, docs, tickets, or notes alongside the transcript.', href: '/features/screen-context-ai-assistant/' },
        ],
      },
      {
        title: 'Desktop copilot workflow',
        items: [
          { title: 'Before', body: 'Choose a profile and confirm the privacy path for transcription, AI provider, and screenshots.' },
          { title: 'During', body: 'Ask for concise notes, risks, objections, decisions, and follow-up questions without switching away from the conversation.' },
          { title: 'After', body: 'Review the local session, delete what you do not need, and turn relevant context into reusable notes.' },
        ],
      },
      {
        title: 'Backlinks and related workflows',
        items: [
          { title: 'Existing meeting use case', body: 'Read the canonical meeting use-case page for the broader ExtraBrain meeting workflow.', href: '/use-cases/meetings/' },
          { title: 'AI assistant for video calls', body: 'Use meeting copilot workflows across Zoom, Meet, Teams, and other calls.', href: '/use-cases/ai-assistant-for-video-calls/' },
          { title: 'Live transcription assistant', body: 'Pair the copilot workflow with live transcription and local session history.', href: '/features/live-transcription-ai-assistant/' },
        ],
      },
    ],
    faq: [
      { question: 'What is a meeting copilot?', answer: 'A meeting copilot helps you follow live discussion, organize notes, identify decisions, and prepare follow-ups. ExtraBrain does this from a Mac desktop workflow.' },
      { question: 'How is ExtraBrain different from a meeting bot?', answer: 'ExtraBrain does not join the participant list. It runs as a desktop app you control, with local-first options where configured.' },
      { question: 'Can a meeting copilot help with customer calls?', answer: 'Yes. It can help track customer pain points, quotes, objections, next steps, risks, and roadmap signals.' },
    ],
  },
  {
    slug: 'use-cases/ai-note-taker-for-mac',
    title: 'AI Note Taker for Mac — Private Meeting Notes with ExtraBrain',
    description:
      'Use ExtraBrain as a private AI note taker for Mac with live transcription, AI meeting notes, screen context, summaries, local session history, and no meeting bot.',
    eyebrow: 'AI note taker for Mac',
    h1: 'Private AI note taker for Mac meetings, interviews, and calls.',
    lead:
      'ExtraBrain turns live conversation into structured notes, summaries, action items, and saved context while keeping the workflow in a Mac desktop app.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Review privacy controls', href: '/privacy/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'What it helps with',
        items: [
          { title: 'Meeting notes', body: 'Capture decisions, action items, owners, risks, and open questions from live calls.', href: '/use-cases/meeting-copilot/' },
          { title: 'Interview notes', body: 'Keep prompts, constraints, follow-ups, and post-session review notes organized for interview workflows.', href: '/use-cases/coding-interviews/' },
          { title: 'Research and lectures', body: 'Turn dense explanations into concepts, examples, review questions, and saved facts.' },
          { title: 'Private notes on Mac', body: 'Use local session history and delete records you no longer need.', href: '/features/private-ai-assistant/' },
        ],
      },
      {
        title: 'How it works',
        items: [
          { title: 'Transcribe live', body: 'Use local Parakeet transcription or optional Deepgram depending on your setup and privacy needs.', href: '/features/live-transcription-ai-assistant/' },
          { title: 'Add screen context', body: 'Include relevant screenshots or visible context from slides, docs, code, or meeting notes when appropriate.', href: '/features/screen-context-ai-assistant/' },
          { title: 'Review afterward', body: 'Turn the session into summaries, saved facts, follow-ups, and reusable notes for the next call.' },
        ],
      },
      {
        title: 'Related AI note workflows',
        items: [
          { title: 'AI assistant for meetings', body: 'Use note taking as part of a broader AI meeting assistant workflow.', href: '/use-cases/ai-assistant-for-meetings/' },
          { title: 'Private AI assistant', body: 'Review how local-first storage, provider choice, and privacy controls work.', href: '/features/private-ai-assistant/' },
          { title: 'Bring your own AI provider', body: 'Connect provider access you control for notes and summaries.', href: '/features/bring-your-own-ai-provider/' },
        ],
      },
    ],
    faq: [
      { question: 'What is an AI note taker for Mac?', answer: 'An AI note taker for Mac captures live conversation and helps turn it into structured notes, summaries, action items, and review context.' },
      { question: 'Can ExtraBrain take notes without a meeting bot?', answer: 'Yes. ExtraBrain runs as a Mac desktop app instead of joining the call as a bot.' },
      { question: 'Can notes stay local?', answer: 'Local session records can stay on your Mac. External providers receive content only when you choose features that send context to them.' },
    ],
  },
  {
    slug: 'use-cases/ai-assistant-for-video-calls',
    title: 'AI Assistant for Video Calls, Zoom, Meet & Teams — ExtraBrain',
    description:
      'Use ExtraBrain as an AI assistant for video calls across Zoom, Google Meet, Microsoft Teams, Webex, Slack Huddles, and Discord with live transcription, screen context, and private notes.',
    eyebrow: 'AI assistant for video calls',
    h1: 'AI assistant for video calls, Zoom, Meet, and Teams.',
    lead:
      'ExtraBrain helps you follow live video calls, capture transcript context, and organize notes while staying available in your own desktop workflow.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Explore meeting assistant workflow', href: '/use-cases/ai-assistant-for-meetings/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'Video call workflows',
        items: [
          { title: 'Zoom calls', body: 'Use ExtraBrain during Zoom meetings, interviews, lectures, research calls, and customer conversations.' },
          { title: 'Google Meet and Teams', body: 'Follow live discussion, notes, and screen context across Google Meet and Microsoft Teams desktop workflows.' },
          { title: 'Webex, Slack Huddles, and Discord', body: 'Use the same transcript-aware assistant workflow across other live call tools where your setup allows it.' },
          { title: 'Interview platforms', body: 'Pair video-call context with coding, system design, and behavioral interview workflows.', href: '/use-cases/coding-interviews/' },
        ],
      },
      {
        title: 'How it works',
        items: [
          { title: 'Capture audio context', body: 'Use live transcription to track what is said during the call.', href: '/features/live-transcription-ai-assistant/' },
          { title: 'Use screen context', body: 'Add selected context from shared screens, docs, code, slides, or notes when appropriate.', href: '/features/screen-context-ai-assistant/' },
          { title: 'Keep privacy in view', body: 'Use only providers and capture settings that fit the call, company, school, and platform rules.', href: '/privacy/' },
        ],
      },
      {
        title: 'Related video call pages',
        items: [
          { title: 'Meeting copilot', body: 'Use a meeting copilot workflow for decisions, risks, and follow-ups.', href: '/use-cases/meeting-copilot/' },
          { title: 'AI note taker for Mac', body: 'Turn calls into private notes, summaries, and session history.', href: '/use-cases/ai-note-taker-for-mac/' },
          { title: 'Private AI assistant', body: 'Review local-first and provider-routed data paths.', href: '/features/private-ai-assistant/' },
        ],
      },
    ],
    faq: [
      { question: 'Can ExtraBrain work with Zoom?', answer: 'Yes. ExtraBrain is designed for Zoom and similar Mac video-call workflows.' },
      { question: 'Can ExtraBrain work with Google Meet and Microsoft Teams?', answer: 'Yes. ExtraBrain supports live meeting workflows across Google Meet, Microsoft Teams, and other desktop call tools.' },
      { question: 'Does ExtraBrain appear in the video call?', answer: 'No. ExtraBrain is a desktop app and does not join as a meeting participant.' },
    ],
  },
  {
    slug: 'features/private-ai-assistant',
    title: 'Private AI Assistant for Mac — Local-First ExtraBrain',
    description:
      'ExtraBrain is a private AI assistant for Mac with local-first storage, local transcription, on-device AI where configured, BYO AI providers, privacy controls, and data-path clarity.',
    eyebrow: 'Private AI assistant for Mac',
    h1: 'Private AI assistant for Mac with local-first controls.',
    lead:
      'ExtraBrain is built for people who want a desktop AI assistant for meetings, interviews, notes, and calls while keeping control over what is captured and which providers are used.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Read full privacy page', href: '/privacy/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'Privacy controls',
        items: [
          { title: 'Local-first session history', body: 'Keep transcripts, screenshots, notes, analyses, and saved facts on your Mac unless you delete them or send selected context to a provider.' },
          { title: 'Local transcription option', body: 'Use local Parakeet transcription when your setup supports it, or choose optional Deepgram when cloud transcription fits.', href: '/features/local-transcription/' },
          { title: 'On-device AI path', body: 'Use local Gemma 4 where installed and compatible for local model requests.' },
          { title: 'Provider choice', body: 'Bring OpenAI, Anthropic, Claude, Codex, or compatible provider access you control.', href: '/features/bring-your-own-ai-provider/' },
        ],
      },
      {
        title: 'Private assistant workflows',
        items: [
          { title: 'Meetings', body: 'Use ExtraBrain as a private AI assistant for meetings and follow-ups.', href: '/use-cases/ai-assistant-for-meetings/' },
          { title: 'Video calls', body: 'Use desktop AI support across Zoom, Google Meet, Teams, Webex, Slack Huddles, and Discord.', href: '/use-cases/ai-assistant-for-video-calls/' },
          { title: 'Notes', body: 'Turn calls into local notes, summaries, action items, and saved context.', href: '/use-cases/ai-note-taker-for-mac/' },
        ],
      },
      {
        title: 'Data-path checklist',
        items: [
          { title: 'Pick local or external', body: 'Choose whether transcription, model requests, and screenshots should stay local or use external providers.' },
          { title: 'Limit context', body: 'Send only the transcript excerpts, screenshots, and prompts that are necessary.' },
          { title: 'Review policies', body: 'Check workplace, school, interview, and provider policies before sensitive sessions.' },
        ],
      },
    ],
    faq: [
      { question: 'What is a private AI assistant?', answer: 'A private AI assistant gives users more control over local storage, provider routing, context capture, and deletion. ExtraBrain is local-first and supports local or BYO provider setups.' },
      { question: 'Is ExtraBrain fully local?', answer: 'It can be fully local when local Parakeet transcription and local Gemma 4 are installed and compatible. External providers receive content only when you choose those routes.' },
      { question: 'Can I delete local session records?', answer: 'Yes. ExtraBrain supports local session history controls so you can remove records you no longer need.' },
    ],
  },
  {
    slug: 'features/live-transcription-ai-assistant',
    title: 'Live Transcription AI Assistant for Meetings & Interviews — ExtraBrain',
    description:
      'Use ExtraBrain as a live transcription AI assistant for meetings, interviews, video calls, lectures, and research with real-time transcription, local Parakeet, or optional Deepgram.',
    eyebrow: 'Live transcription AI assistant',
    h1: 'Live transcription AI assistant for meetings, calls, and interviews.',
    lead:
      'ExtraBrain combines live transcription with prompts, notes, screen context, and provider choice so you can follow fast conversations without losing structure.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Local transcription feature', href: '/features/local-transcription/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'What it helps with',
        items: [
          { title: 'Real-time context', body: 'Track questions, constraints, decisions, risks, follow-ups, and important phrases while the call is live.' },
          { title: 'Meeting summaries', body: 'Turn transcript context into meeting notes, summaries, action items, and next steps.', href: '/use-cases/meeting-copilot/' },
          { title: 'Interview prompts', body: 'Use transcript context to organize coding, system design, and behavioral interview discussion.', href: '/use-cases/coding-interviews/' },
          { title: 'Lecture and research review', body: 'Convert dense explanations into concepts, examples, review questions, and saved notes.', href: '/use-cases/ai-note-taker-for-mac/' },
        ],
      },
      {
        title: 'Transcription choices',
        items: [
          { title: 'Local Parakeet', body: 'Use local NVIDIA Parakeet transcription where installed and compatible for local-first workflows.', href: '/features/local-transcription/' },
          { title: 'Optional Deepgram', body: 'Use optional Deepgram when cloud transcription fits your accuracy, latency, and account preferences.', href: '/providers/' },
          { title: 'AI provider routing', body: 'Send selected transcript context to the provider path you choose for summaries and prompts.', href: '/features/bring-your-own-ai-provider/' },
        ],
      },
      {
        title: 'Related transcription pages',
        items: [
          { title: 'Private AI assistant', body: 'Review the privacy and local-first implications of live transcription.', href: '/features/private-ai-assistant/' },
          { title: 'Screen context AI assistant', body: 'Combine live transcript with selected screen context.', href: '/features/screen-context-ai-assistant/' },
          { title: 'AI assistant for video calls', body: 'Use transcription during Zoom, Meet, Teams, and other calls.', href: '/use-cases/ai-assistant-for-video-calls/' },
        ],
      },
    ],
    faq: [
      { question: 'What is a live transcription AI assistant?', answer: 'It is an assistant that uses a live transcript to help organize context, notes, summaries, questions, and follow-ups during a conversation.' },
      { question: 'Can ExtraBrain transcribe locally?', answer: 'Yes. ExtraBrain supports local NVIDIA Parakeet transcription where installed and compatible.' },
      { question: 'Can I use cloud transcription?', answer: 'Yes. ExtraBrain also supports optional Deepgram when you configure it and are comfortable with its provider data path.' },
    ],
  },
  {
    slug: 'features/bring-your-own-ai-provider',
    title: 'Bring Your Own AI Provider — OpenAI, Claude, Anthropic & Custom Endpoints',
    description:
      'Bring your own AI provider to ExtraBrain with OpenAI, Anthropic, Claude, Codex, custom OpenAI-compatible endpoints, local Gemma 4, and provider-controlled billing and data paths.',
    eyebrow: 'Bring your own AI provider',
    h1: 'Bring your own AI provider, API key, or custom endpoint.',
    lead:
      'ExtraBrain lets you choose the AI provider path for meetings, interviews, notes, and calls instead of forcing a single hosted model account.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Review providers hub', href: '/providers/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'Provider options',
        items: [
          { title: 'OpenAI and Anthropic', body: 'Use provider accounts and API keys you control for model requests.' },
          { title: 'Claude and Codex subscription modes', body: 'Use supported subscription paths where available in the app.' },
          { title: 'Compatible endpoints', body: 'Route through compatible providers, proxies, or gateways when your setup supports OpenAI-style behavior.', href: '/features/bring-your-own-provider/' },
          { title: 'Local Gemma 4', body: 'Use on-device AI powered by Gemma where installed and compatible.', href: '/features/private-ai-assistant/' },
        ],
      },
      {
        title: 'Why BYO provider matters',
        items: [
          { title: 'Cost clarity', body: 'Provider usage, quota, billing, and limits stay in the provider account you choose.' },
          { title: 'Data-path clarity', body: 'Review each provider for retention, logging, training, and deletion settings before sensitive work.' },
          { title: 'Workflow flexibility', body: 'Use different provider paths for meeting notes, coding interviews, research calls, or private workflows.' },
        ],
      },
      {
        title: 'Related provider workflows',
        items: [
          { title: 'Private AI assistant', body: 'Understand local-first and external-provider boundaries.', href: '/features/private-ai-assistant/' },
          { title: 'Live transcription assistant', body: 'Combine provider choice with transcription choices.', href: '/features/live-transcription-ai-assistant/' },
          { title: 'AI assistant for meetings', body: 'Use your chosen provider path for meeting prompts and summaries.', href: '/use-cases/ai-assistant-for-meetings/' },
        ],
      },
    ],
    faq: [
      { question: 'What does bring your own AI provider mean?', answer: 'It means you connect provider access you control, such as OpenAI, Anthropic, Claude, Codex, local Gemma 4, or a compatible endpoint.' },
      { question: 'Does ExtraBrain include AI credits?', answer: 'No. Provider billing and quota remain separate from the ExtraBrain app.' },
      { question: 'Can I use different providers for different workflows?', answer: 'Yes. Provider choice can support different privacy, cost, latency, and model-quality preferences.' },
    ],
  },
  {
    slug: 'features/screen-context-ai-assistant',
    title: 'Screen Context AI Assistant for Mac — ExtraBrain',
    description:
      'ExtraBrain is a screen context AI assistant for Mac that combines live transcription, screenshots, visible documents, code, meeting slides, and local-first provider controls.',
    eyebrow: 'Screen context AI assistant for Mac',
    h1: 'Screen context AI assistant for Mac live work.',
    lead:
      'ExtraBrain helps your AI prompts use both what is being said and what is visible on screen, so meetings, interviews, documents, and code stay connected.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Read privacy controls', href: '/privacy/' },
    schemaType: 'FAQPage',
    sections: [
      {
        title: 'What it helps with',
        items: [
          { title: 'Meeting slides and docs', body: 'Use selected screen context from slides, docs, tickets, notes, dashboards, and customer materials.', href: '/use-cases/meeting-copilot/' },
          { title: 'Coding interviews', body: 'Connect visible code, prompts, examples, and transcript details for clearer technical context.', href: '/use-cases/coding-interviews/' },
          { title: 'System design discussions', body: 'Keep diagrams, requirements, scale notes, APIs, storage choices, and follow-up questions connected.', href: '/use-cases/system-design-interviews/' },
          { title: 'Research and lectures', body: 'Pair spoken explanation with visible source material for better notes and review.', href: '/use-cases/ai-note-taker-for-mac/' },
        ],
      },
      {
        title: 'How it works',
        items: [
          { title: 'Capture intentionally', body: 'Use screenshots and screen context only when relevant and allowed for the session.' },
          { title: 'Combine with transcript', body: 'Pair visible context with live transcription for grounded summaries, prompts, and follow-ups.', href: '/features/live-transcription-ai-assistant/' },
          { title: 'Choose provider path', body: 'Keep context local where possible or route selected context through the provider you choose.', href: '/features/bring-your-own-ai-provider/' },
        ],
      },
      {
        title: 'Related screen-aware workflows',
        items: [
          { title: 'Private AI assistant', body: 'Review what can stay local and what can leave your Mac.', href: '/features/private-ai-assistant/' },
          { title: 'AI assistant for video calls', body: 'Use screen context with Zoom, Meet, Teams, and other video calls.', href: '/use-cases/ai-assistant-for-video-calls/' },
          { title: 'AI note taker for Mac', body: 'Turn visible context and transcripts into useful notes.', href: '/use-cases/ai-note-taker-for-mac/' },
        ],
      },
    ],
    faq: [
      { question: 'What is a screen context AI assistant?', answer: 'It is an AI assistant that can use selected visible screen context alongside live transcript details for more relevant notes, summaries, and prompts.' },
      { question: 'Can screenshots leave my Mac?', answer: 'Yes, if you include screenshots in a request to an external provider. Use only providers and capture settings that fit the session.' },
      { question: 'When is screen context useful?', answer: 'It is useful for meetings with slides, coding interviews, system design diagrams, shared docs, customer calls, lectures, and research sessions.' },
    ],
  },
  {
    slug: 'use-cases/meetings',
    title: 'AI Meeting Copilot for Mac',
    description:
      'ExtraBrain is a local-first desktop AI meeting copilot that helps with live notes, decisions, risks, and follow-ups without joining as a meeting bot.',
    eyebrow: 'Use case',
    h1: 'A meeting copilot that runs on your Mac.',
    lead:
      'ExtraBrain helps with decisions, action items, objections, research evidence, and next steps while keeping the assistant in a desktop app you control.',
    primaryCta: defaultCta,
    sections: [
      {
        title: 'Meeting workflows',
        items: [
          { title: 'Live notes', body: 'Capture important points, decisions, risks, owners, objections, customer pain points, and unresolved questions while the meeting is still moving.' },
          { title: 'No meeting bot required', body: 'ExtraBrain is a desktop app rather than another participant joining the room, which helps keep the workflow private and under your control.' },
          { title: 'Post-session memory', body: 'Turn the session into summaries, follow-ups, saved facts, action items, review notes, and context for the next customer, product, or research conversation.' },
        ],
      },
      {
        title: 'Where a desktop meeting copilot helps',
        items: [
          { title: 'Customer calls', body: 'Track pain points, objections, quotes, next steps, and roadmap signals without adding a meeting bot.' },
          { title: 'Internal decisions', body: 'Separate decisions, owners, blockers, risks, and follow-up questions during fast-moving team discussions.' },
          { title: 'Research and lectures', body: 'Turn dense explanations into concepts, examples, review questions, and saved context for later.' },
        ],
      },
      {
        title: 'Desktop app versus meeting agent',
        items: [
          { title: 'Participant list', body: 'ExtraBrain does not join the meeting as another attendee. This is different from notetakers that join Zoom, Google Meet, or Teams as a bot.' },
          { title: 'Local mode', body: 'Use local Parakeet transcription and local Gemma 4 on-device AI where installed and compatible when the meeting data path should stay on the Mac.' },
          { title: 'Collaboration tradeoff', body: 'A bot-based meeting agent can be better for shared team workspaces, automatic distribution, or admin-managed archives. ExtraBrain is built for a user-controlled desktop workflow.' },
        ],
      },
    ],
    faq: [
      { question: 'Is ExtraBrain a meeting bot?', answer: 'No. ExtraBrain runs as a desktop app on your Mac instead of joining the meeting as another participant.' },
      { question: 'What can ExtraBrain capture in meetings?', answer: 'It can help with live notes, decisions, owners, risks, action items, customer pain points, follow-ups, and post-session summaries.' },
      { question: 'Can ExtraBrain work with Zoom, Google Meet, and Teams?', answer: 'ExtraBrain is designed for major meeting tools while remaining a desktop app you control. Always follow workplace and meeting policies.' },
      { question: 'How is ExtraBrain different from Otter or other meeting agents?', answer: 'Otter-style tools are usually team meeting agents and transcription workspaces. ExtraBrain focuses on a desktop copilot that can support meetings and interviews without joining the call as a bot.' },
    ],
  },
  {
    slug: 'features/local-transcription',
    title: 'Local Transcription for ExtraBrain',
    description:
      'Use ExtraBrain local NVIDIA Parakeet transcription, local Gemma 4 where installed and compatible, and optional Deepgram for interviews and meetings.',
    eyebrow: 'Feature',
    h1: 'Local transcription when privacy matters.',
    lead:
      'ExtraBrain supports local NVIDIA Parakeet transcription for on-device workflows, local Gemma 4 on-device AI where installed and compatible, and optional Deepgram when you choose cloud transcription.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Read privacy details', href: '/privacy/' },
    sections: [
      {
        title: 'Transcription choices',
        items: [
          { title: 'Local Parakeet', body: 'Use local transcription when you want the strictest default data-flow posture.' },
          { title: 'Local Gemma 4', body: 'Use local Gemma 4 where installed and compatible when model requests should stay local.' },
          { title: 'Optional Deepgram', body: 'Use Deepgram when cloud transcription quality, language support, or workflow needs make sense for the session.' },
          { title: 'Provider-aware prompts', body: 'Transcript text can stay local with local Gemma 4 or be sent to the configured model provider when you request external AI help.' },
        ],
      },
      {
        title: 'How transcription supports live workflows',
        items: [
          { title: 'Interview prompts', body: 'Turn spoken instructions, clarifications, and constraints into structured notes before you answer.' },
          { title: 'Meeting memory', body: 'Keep decisions, risks, owners, blockers, and follow-ups connected to the live conversation.' },
          { title: 'Privacy posture', body: 'Choose local transcription when audio should remain on the device, or optional Deepgram when cloud transcription fits the session.' },
        ],
      },
      {
        title: 'Local transcription comparison checklist',
        items: [
          { title: 'Local versus cloud', body: 'Confirm whether audio is transcribed on your device, uploaded to a transcription service, or processed by a meeting bot vendor.' },
          { title: 'Offline expectations', body: 'Local transcription can reduce cloud dependency, but model downloads, app updates, external providers, and optional cloud transcription still require network access.' },
          { title: 'Summary path', body: 'A transcript can be local while the summary is cloud-generated if you send it to an external model provider. Pick both paths deliberately.' },
        ],
      },
    ],
    faq: [
      { question: 'Does ExtraBrain support local transcription?', answer: 'Yes. ExtraBrain supports local NVIDIA Parakeet transcription for workflows where transcription should stay on the Mac.' },
      { question: 'Can I use Deepgram with ExtraBrain?', answer: 'Yes. Deepgram is optional and should be used only when its cloud transcription path fits your session and privacy requirements.' },
      { question: 'Does transcript text always stay local?', answer: 'Transcript text can stay local with local Parakeet transcription and local Gemma 4, but it can be sent to external providers when you choose provider-backed requests.' },
      { question: 'Is local transcription the same as a fully local AI workflow?', answer: 'No. Local transcription only covers the speech-to-text path. A fully local posture also requires local Gemma 4 where installed and compatible and no external provider requests.' },
    ],
  },
  {
    slug: 'features/bring-your-own-provider',
    title: 'Bring Your Own AI Provider',
    description:
      'Use ExtraBrain with local Gemma 4 where installed and compatible, or connect OpenAI, Anthropic, Claude, Codex, or compatible provider access.',
    eyebrow: 'Feature',
    h1: 'Use local Gemma 4 or provider access you already control.',
    lead:
      'ExtraBrain supports local Gemma 4 for compatible hardware and BYO provider setup for cloud or subscription modes, so model choice, credentials, cost controls, and retention settings stay under your control.',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Compare app pricing', href: '/pricing/' },
    sections: [
      {
        title: 'Supported provider patterns',
        items: [
          { title: 'Local Gemma 4', body: 'Run AI locally when compatible hardware is available; this option may not be available for every Mac or customer environment.' },
          { title: 'API providers', body: 'Connect OpenAI, Anthropic, or custom OpenAI-compatible endpoints.' },
          { title: 'Subscription modes', body: 'Use Claude Subscription and Codex Subscription modes where configured.' },
          { title: 'Cost control', body: 'Provider usage is governed by your provider account, quota, billing, and retention settings.' },
        ],
      },
      {
        title: 'Why bring your own provider',
        items: [
          { title: 'Model choice', body: 'Use the model family, subscription mode, or compatible endpoint that fits your interview or meeting workflow.' },
          { title: 'Cost visibility', body: 'Keep external AI billing tied to provider accounts you already manage instead of bundled credits.' },
          { title: 'Pricing separation', body: 'Review ExtraBrain pricing to compare app workflow controls separately from provider account costs.', href: '/pricing/' },
          { title: 'Operational backup', body: 'Configure a tested fallback so quota, availability, or local hardware limits do not derail a live session.' },
        ],
      },
      {
        title: 'Provider model comparison',
        items: [
          { title: 'Bundled AI plans', body: 'Some assistants sell access to selected hosted models inside their own subscription. That can be convenient, but pricing, quotas, and model choice are tied to that vendor.' },
          { title: 'BYO providers', body: 'ExtraBrain emphasizes provider access you control, including local Gemma 4 where installed and compatible and external accounts or subscriptions when cloud models fit the task.' },
          { title: 'Retention boundaries', body: 'With BYO providers, review your provider account settings directly because retention, logging, training, and billing are governed outside ExtraBrain.' },
        ],
      },
    ],
    faq: [
      { question: 'What AI providers does ExtraBrain support?', answer: 'ExtraBrain supports local Gemma 4 where installed and compatible, OpenAI, Anthropic, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription modes.' },
      { question: 'Can I bring my own API key?', answer: 'Yes. You can connect provider access you control, including API-key based providers where supported.' },
      { question: 'Does ExtraBrain pay for my model usage?', answer: 'No. External provider usage is governed by your provider account, quota, retention settings, and billing.' },
      { question: 'Why not use one bundled AI plan?', answer: 'Bundled plans can be simpler, but ExtraBrain is designed for people who want model choice, cost visibility, and direct control over provider accounts or local Gemma 4 where installed and compatible.' },
    ],
  },
  {
    slug: 'compare/cluely',
    title: 'ExtraBrain vs Cluely Comparison',
    description:
      'Compare ExtraBrain and Cluely for live meetings, screen-share invisibility, local Gemma 4, BYO providers, local-first desktop workflows, and pricing models.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs Cluely.',
    lead:
      'Cluely publicly positions itself as an undetectable AI for meetings with real-time answers and meeting notes. ExtraBrain focuses on local-first desktop interview and meeting workflows with local Gemma 4 where installed and compatible and BYO provider control. ExtraBrain is available for Mac today, with Windows and Linux planned.',
    primaryCta: defaultCta,
    sections: [
      {
        title: 'Choose ExtraBrain when',
        items: [
          { title: 'Model control matters', body: 'You want local Gemma 4 on-device AI where installed and compatible, or OpenAI, Anthropic, Claude, Codex, or compatible-provider control instead of bundled AI access.' },
          { title: 'Interview workflows matter', body: 'You need coding, system design, behavioral, and meeting support in the same local-first desktop app.' },
          { title: 'Data-flow clarity matters', body: 'You want explicit privacy, provider, and local transcription documentation on the first-party site.' },
        ],
      },
      {
        title: 'Choose Cluely when',
        body:
          'You specifically want Cluely’s meeting-focused product, pricing model, App Store distribution, and its own bundled real-time meeting assistant experience.',
      },
      {
        title: 'Comparison factors',
        items: [
          { title: 'Workflow scope', body: 'Compare meeting assistance against ExtraBrain workflows for coding, system design, behavioral interviews, research, lectures, and meetings.' },
          { title: 'Provider model', body: 'Check whether you prefer bundled AI access or local Gemma 4 and provider access you control.' },
          { title: 'Privacy documentation', body: 'Review what each product says about local processing, external providers, transcripts, screenshots, and meeting data.' },
        ],
      },
      {
        title: 'Questions to ask before choosing',
        items: [
          { title: 'Do you need meeting notes, interview help, or both?', body: 'Cluely is publicly framed around meeting assistance and screen-share undetectability. ExtraBrain covers meeting support plus coding, system design, behavioral, lecture, and research workflows.' },
          { title: 'Who controls model access?', body: 'Review whether you want a vendor-managed model bundle or ExtraBrain provider setup with local Gemma 4 where installed and compatible and external providers you choose.' },
          { title: 'What happens to session content?', body: 'Compare what each product says about meeting audio, transcript text, screenshots, uploaded files, notes, and past-meeting history before using sensitive content.' },
        ],
      },
    ],
    sources: [
      { label: 'Cluely homepage', href: 'https://cluely.com/' },
      { label: 'Cluely pricing', href: 'https://cluely.com/pricing' },
    ],
    faq: [
      { question: 'How is ExtraBrain different from Cluely?', answer: 'ExtraBrain focuses on a local-first Mac desktop workflow with local Gemma 4 where installed and compatible, BYO providers, local transcription, and interview plus meeting use cases.' },
      { question: 'Is ExtraBrain only for meetings?', answer: 'No. ExtraBrain supports meetings, coding interviews, system design interviews, behavioral interviews, lectures, customer calls, and research workflows.' },
      { question: 'Which should I choose?', answer: 'Choose based on workflow scope, provider control, pricing model, privacy posture, platform support, and the product experience you want to rely on.' },
      { question: 'Does ExtraBrain copy Cluely pricing or bundled AI access?', answer: 'No. ExtraBrain keeps the core Mac app free, prices Pro at $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime, and separates external provider billing instead of copying a bundled meeting AI subscription model.' },
    ],
  },
  {
    slug: 'compare/interviewcoder',
    title: 'ExtraBrain vs InterviewCoder',
    description:
      'Compare ExtraBrain and InterviewCoder for coding interviews, undetectability claims, pricing, local Gemma 4, BYO providers, and local-first desktop workflows.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs InterviewCoder.',
    lead:
      'InterviewCoder publicly focuses on technical interviews and extensive undetectability features. ExtraBrain focuses on local-first desktop interviews and meetings with local Gemma 4 where installed and compatible and provider access you control. ExtraBrain is available for Mac today, with Windows and Linux planned.',
    primaryCta: defaultCta,
    sections: [
      {
        title: 'Choose ExtraBrain when',
        items: [
          { title: 'Clear plan pricing matters', body: 'You want a free core app, optional $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime Pro controls, and separate provider billing.' },
          { title: 'Broader workflows matter', body: 'You want coding, system design, behavioral, product, research, lecture, and meeting support.' },
          { title: 'Model control matters', body: 'You want local Gemma 4 on-device AI where installed and compatible, or your own OpenAI, Anthropic, Claude, Codex, or compatible provider setup.' },
        ],
      },
      {
        title: 'Choose InterviewCoder when',
        body:
          'You specifically want a tool marketed around technical interview stealth features, its bundled AI plans, and its own pricing model.',
      },
      {
        title: 'Comparison factors',
        items: [
          { title: 'Interview types', body: 'ExtraBrain covers coding, system design, behavioral, product, meeting, lecture, and research workflows in one desktop app.' },
          { title: 'Local-first posture', body: 'ExtraBrain emphasizes local Gemma 4 where installed and compatible, local transcription, and first-party privacy and data-flow pages.' },
          { title: 'Cost model', body: 'ExtraBrain separates app access from external provider billing instead of assuming one bundled AI plan.' },
        ],
      },
      {
        title: 'Other technical interview tools to compare',
        items: [
          { title: 'LockedIn AI', body: 'Public pages emphasize real-time answers, coding help, remote assist, editor integrations, and a broader career ecosystem. Compare that against ExtraBrain if you want human-assist or resume/job-search features.' },
          { title: 'Ultracode and Linkjob', body: 'These SERP rivals emphasize coding, system design, platform coverage, and subscription or lifetime pricing. Compare plan limits, refund terms, model claims, and whether their workflow fits your interview rules.' },
          { title: 'InterviewBee, ParakeetAI, and Beyz AI', body: 'These pages emphasize real-time interview help, desktop invisibility, coding support, or platform breadth. Use them as a checklist for platform support, privacy, pricing, and workflow scope.' },
        ],
      },
    ],
    sources: [
      { label: 'InterviewCoder homepage', href: 'https://www.interviewcoder.co/' },
      { label: 'LockedIn AI homepage', href: 'https://www.lockedinai.com/' },
      { label: 'Ultracode homepage', href: 'https://ultracode.ai/' },
      { label: 'Linkjob pricing', href: 'https://www.linkjob.ai/pricing/' },
      { label: 'InterviewBee desktop assistant', href: 'https://interviewbee.ai/desktop-ai-interview-assistant' },
      { label: 'ParakeetAI homepage', href: 'https://www.parakeet-ai.com/' },
      { label: 'Beyz AI homepage', href: 'https://beyz.ai/' },
    ],
    faq: [
      { question: 'How is ExtraBrain different from InterviewCoder?', answer: 'ExtraBrain is a local-first Mac desktop assistant for interviews and meetings, with local Gemma 4 where installed and compatible and BYO provider access you control.' },
      { question: 'Does ExtraBrain help with coding interviews?', answer: 'Yes. ExtraBrain supports LeetCode-style prompts, HackerRank, CoderPad, Codility, CodeSignal, edge cases, complexity discussion, and follow-up questions.' },
      { question: 'Does ExtraBrain support non-coding workflows?', answer: 'Yes. It also supports system design, behavioral interviews, meetings, lectures, customer calls, and research sessions.' },
      { question: 'What should I compare against InterviewCoder-style tools?', answer: 'Compare coding depth, system design support, data flow, platform claims, pricing, provider control, support for non-coding workflows, and whether live assistance is allowed in your interview.' },
    ],
  },
  {
    slug: 'compare/final-round-ai',
    title: 'ExtraBrain vs Final Round AI',
    description:
      'Compare ExtraBrain and Final Round AI for live interview assistance, interview preparation, privacy, local Gemma 4, BYO providers, and macOS desktop workflows.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs Final Round AI.',
    lead:
      'Final Round AI publicly positions itself around interview preparation and real-time interview help across many roles. ExtraBrain focuses on local-first desktop live workflows with local Gemma 4 where installed and compatible and BYO provider control. ExtraBrain is available for Mac today, with Windows and Linux planned.',
    primaryCta: defaultCta,
    sections: [
      {
        title: 'Choose ExtraBrain when',
        items: [
          { title: 'Desktop-native control matters', body: 'You want a desktop app with local-first session context and privacy documentation. ExtraBrain is available for Mac today.' },
          { title: 'Provider choice matters', body: 'You want local Gemma 4 on-device AI where installed and compatible, or OpenAI, Anthropic, Claude, Codex, or custom provider access you control.' },
          { title: 'Meetings matter too', body: 'You want one assistant for interviews, technical meetings, research calls, and lectures.' },
        ],
      },
      {
        title: 'Choose Final Round AI when',
        body:
          'You want a broader interview-preparation suite with resume, practice, and job-search oriented features in addition to live interview help.',
      },
      {
        title: 'Comparison factors',
        items: [
          { title: 'Live desktop workflow', body: 'ExtraBrain is built around a Mac desktop app for live sessions rather than a broad job-search preparation suite.' },
          { title: 'Provider choice', body: 'ExtraBrain lets you use local Gemma 4 where installed and compatible or connect provider access you control.' },
          { title: 'Data-flow clarity', body: 'ExtraBrain publishes dedicated privacy, provider, local transcription, and responsible-use pages for people comparing live AI tools.' },
        ],
      },
      {
        title: 'Job-search suite comparison',
        items: [
          { title: 'Before, during, and after interviews', body: 'Final Round AI publicly describes preparation, live Interview Copilot, and post-interview feedback. ExtraBrain focuses on live desktop context and post-session review, not automated applications or resume tooling.' },
          { title: 'Privacy and compliance signals', body: 'Review each vendor page for security badges, recording behavior, transcript storage, and whether audio is stored or processed after a session.' },
          { title: 'Role coverage', body: 'Compare whether you need broad career workflow support across industries or a desktop assistant for interviews, meetings, lectures, research, and provider-controlled AI.' },
        ],
      },
    ],
    sources: [
      { label: 'Final Round AI homepage', href: 'https://www.finalroundai.com/' },
      { label: 'Final Round AI pricing/product page', href: 'https://www.finalroundai.com/pricing' },
      { label: 'Final Round AI FAQ', href: 'https://www.finalroundai.com/frequently-asked-questions' },
    ],
    faq: [
      { question: 'How is ExtraBrain different from Final Round AI?', answer: 'ExtraBrain focuses on local-first desktop live workflows for interviews and meetings, with local Gemma 4 where installed and compatible and BYO providers.' },
      { question: 'Is ExtraBrain a full job-search suite?', answer: 'No. ExtraBrain is focused on the live interview and meeting copilot workflow rather than resume, job application, or job-search automation.' },
      { question: 'Can ExtraBrain support interview preparation?', answer: 'Yes. ExtraBrain can help rehearse prompts, organize stories, capture session context, and review notes, but its core experience is the live desktop workflow.' },
      { question: 'Does ExtraBrain include auto-apply or resume-builder features?', answer: 'No. ExtraBrain does not position itself as an auto-apply or resume-builder suite; it focuses on live context, transcription, provider choice, and review workflows.' },
    ],
  },
  {
    slug: 'security',
    title: 'ExtraBrain Security and Privacy Controls',
    description:
      'Security expectations for ExtraBrain: local-first storage, local Gemma 4, provider credentials, release verification, and safe operating practices.',
    eyebrow: 'Trust',
    h1: 'Security starts with local-first control and clear provider boundaries.',
    lead:
      'ExtraBrain keeps the live workflow on your Mac and can run AI locally on compatible hardware, but users should still treat provider credentials, screenshots, transcripts, audio, and release verification carefully.',
    primaryCta: { label: 'Read privacy', href: '/privacy/' },
    sections: [
      {
        title: 'Security practices',
        items: [
          { title: 'Local Gemma 4 availability', body: 'Use local Gemma 4 when compatible hardware is available and your workflow requires local model requests.' },
          { title: 'Provider keys', body: 'Use dedicated provider keys or accounts where possible for external providers, and rotate them after suspected exposure.' },
          { title: 'Release checks', body: 'Download from the first-party download page or official GitHub releases and review published digests when available.' },
          { title: 'Sensitive sessions', body: 'Avoid sending regulated, confidential, or policy-restricted content to external providers unless you have approval.' },
        ],
      },
      {
        title: 'Security review checklist',
        items: [
          { title: 'Before install', body: 'Confirm the release source, asset name, version, checksum availability, and current release notes.' },
          { title: 'Before provider setup', body: 'Use scoped provider credentials where possible and document which external services can receive prompts, screenshots, transcript text, or audio.' },
          { title: 'Before team rollout', body: 'Map interview, workplace, privacy, and compliance expectations before recommending any live AI assistant workflow.' },
        ],
      },
    ],
    faq: [
      { question: 'Is ExtraBrain secure by default?', answer: 'ExtraBrain is local-first and can keep requests on-device with local transcription and local Gemma 4 where installed and compatible, but security depends on setup, provider choices, credentials, and session content.' },
      { question: 'How should I handle provider keys?', answer: 'Use provider credentials you control, store them only where the app expects them, and rotate or revoke keys after suspected exposure.' },
      { question: 'Where should I download ExtraBrain?', answer: 'Use the first-party download page or the official GitHub Releases page, then review release notes and published digests when available.' },
    ],
  },
  {
    slug: 'providers',
    title: 'ExtraBrain AI Providers and Local Models',
    description:
      'How ExtraBrain works with local Gemma 4, OpenAI, Anthropic, Claude Subscription, Codex Subscription, custom endpoints, Deepgram, and local transcription.',
    eyebrow: 'Providers',
    h1: 'Gemma 4 and provider access stay under your control.',
    lead:
      'ExtraBrain is designed for model choice: use local Gemma 4 when compatible hardware supports it, bring your own model access when cloud or subscription modes fit, and keep a backup before high-stakes sessions.',
    primaryCta: { label: 'Setup guide', href: '/help/setup-api-keys/' },
    sections: [
      {
        title: 'Provider options',
        items: [
          { title: 'Local Gemma 4', body: 'Local Gemma 4 can keep AI prompts on your Mac, but it requires compatible hardware and may not be available in every customer environment.' },
          { title: 'Model providers', body: 'OpenAI, Anthropic, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription modes.' },
          { title: 'Transcription providers', body: 'Local NVIDIA Parakeet and optional Deepgram.' },
          { title: 'Retention and billing', body: 'Provider policies, retention settings, and usage costs are controlled through provider accounts.' },
        ],
      },
      {
        title: 'Provider setup priorities',
        items: [
          { title: 'Start local when possible', body: 'Use local Gemma 4 and local Parakeet transcription when compatible hardware and workflow requirements support it.' },
          { title: 'Pick a primary provider', body: 'Choose the model or subscription you trust for normal interviews, meetings, lectures, and research calls.' },
          { title: 'Keep a backup', body: 'Configure a second tested provider or local option for quota, outage, or quality issues before high-stakes sessions.' },
        ],
      },
      {
        title: 'When a hosted meeting assistant may fit better',
        items: [
          { title: 'Shared team notes', body: 'Choose a hosted meeting agent when automatic team sharing, admin workspaces, CRM sync, or searchable company meeting archives matter more than a local desktop workflow.' },
          { title: 'Managed compliance', body: 'Choose an enterprise meeting platform when your organization requires centralized policy controls, SSO, eDiscovery, legal holds, or admin-managed retention.' },
          { title: 'Personal control', body: 'Choose ExtraBrain when you want the live workflow on your Mac with explicit provider choices and a clear path to local transcription and local Gemma 4 where installed and compatible.' },
        ],
      },
    ],
    faq: [
      { question: 'Which providers can ExtraBrain use?', answer: 'ExtraBrain supports local Gemma 4 where installed and compatible, OpenAI, Anthropic, custom OpenAI-compatible endpoints, Claude Subscription, Codex Subscription, local NVIDIA Parakeet transcription, and optional Deepgram.' },
      { question: 'Can provider data leave my Mac?', answer: 'Yes. External model providers can receive prompts, transcript excerpts, screenshots, notes, or context you choose to send. Optional Deepgram can receive audio or transcription data depending on setup.' },
      { question: 'Why keep a backup provider?', answer: 'A backup helps when local hardware support, provider quota, network availability, or model behavior changes before a live session.' },
      { question: 'Can ExtraBrain replace Otter or Meetily?', answer: 'Not always. ExtraBrain is a desktop copilot for interviews and meetings. Otter-style tools are meeting workspaces, while Meetily-style tools focus on local meeting transcription; choose based on workflow and data path.' },
    ],
  },
  {
    slug: 'data-flow',
    title: 'ExtraBrain Data Flow and Privacy Paths',
    description:
      'A plain-language data-flow explanation for ExtraBrain local storage, local Gemma 4, transcription, screenshots, prompts, AI providers, and optional Deepgram.',
    eyebrow: 'Data flow',
    h1: 'Know which path each piece of session data can take.',
    lead:
      'Live audio, transcripts, screenshots, prompts, and generated notes have different privacy implications depending on whether you use local Gemma 4, local Parakeet transcription, or optional external providers.',
    primaryCta: { label: 'Read privacy', href: '/privacy/' },
    sections: [
      {
        title: 'Data-flow map',
        items: [
          { title: 'Audio', body: 'Audio can be transcribed locally with Parakeet or sent to optional Deepgram when configured.' },
          { title: 'Transcript text', body: 'Transcript text can stay local with local Gemma 4 or be included in model prompts sent to your selected external provider.' },
          { title: 'Screenshots', body: 'Screenshots stay local unless you include them in a provider request.' },
          { title: 'Hardware', body: 'Local Gemma 4 requires installation and compatible hardware and may not be available on every Mac or customer environment.' },
          { title: 'Outputs', body: 'Answers, notes, summaries, and saved facts are stored in the app workflow and can be reviewed after the session.' },
        ],
      },
      {
        title: 'How to choose a data path',
        items: [
          { title: 'Fully local target', body: 'Use local Parakeet transcription and local Gemma 4 on-device AI where installed and compatible when prompts and transcription should stay on the Mac.' },
          { title: 'External model target', body: 'Use OpenAI, Anthropic, Claude, Codex, or a custom-compatible provider when cloud or subscription models fit the session.' },
          { title: 'Cloud transcription target', body: 'Use optional Deepgram only when its transcription path is appropriate for the session content and policies.' },
        ],
      },
      {
        title: 'Data-flow questions for any AI assistant',
        items: [
          { title: 'Who receives raw audio', body: 'Find out whether raw audio is kept local, sent to a transcription provider, or captured by a meeting bot service.' },
          { title: 'Who receives screenshots', body: 'Screenshots can contain private code, documents, names, and chats. Only include them in provider requests when the session rules and provider policies allow it.' },
          { title: 'Who stores transcripts', body: 'Compare local app storage, vendor cloud storage, team workspaces, provider logs, and export or deletion controls before using sensitive content.' },
        ],
      },
    ],
    faq: [
      { question: 'What data can ExtraBrain process?', answer: 'Depending on setup, ExtraBrain can use live audio, transcript text, screenshots, prompts, generated notes, saved facts, and provider responses.' },
      { question: 'When does data leave the device?', answer: 'Data can leave the device when you use external model providers or optional Deepgram, and only the content needed for those selected requests should be sent.' },
      { question: 'Can ExtraBrain run fully local?', answer: 'A fully local posture is possible when local Parakeet transcription and local Gemma 4 are available on compatible hardware and no external provider requests are used.' },
      { question: 'Does local-first mean no network is ever used?', answer: 'No. Local-first describes the app posture and available local paths. Downloads, updates, website analytics, optional cloud transcription, and external model providers use network services.' },
    ],
  },
  {
    slug: 'responsible-use',
    title: 'Responsible Use of ExtraBrain',
    description:
      'Responsible-use guidance for using ExtraBrain in interviews, meetings, classes, research calls, and workplace settings.',
    eyebrow: 'Responsible use',
    h1: 'Use live AI assistance only where the rules allow it.',
    lead:
      'ExtraBrain can support accessibility, note-taking, preparation, and live reasoning. It should not be used to deceive interviewers, employers, schools, or platforms.',
    primaryCta: { label: 'Interview guide', href: '/help/using-extrabrain-in-interviews/' },
    sections: [
      {
        title: 'Checklist',
        items: [
          { title: 'Know the rules', body: 'Review interview, workplace, school, meeting, and platform policies before using any AI assistant.' },
          { title: 'Disclose when required', body: 'If the policy requires disclosure or approval, get it before the session.' },
          { title: 'Do your own work', body: 'Use ExtraBrain to organize thinking and notes, not to misrepresent skills or authorship.' },
          { title: 'Keep prompts appropriate', body: 'Ask for structure, clarification, notes, review, and tradeoffs instead of using assistance to hide policy violations.' },
        ],
      },
      {
        title: 'Responsible workflows',
        items: [
          { title: 'Interviews', body: 'Use ExtraBrain to support note-taking, accessibility, prompt recall, and structured reasoning within the rules of the process.' },
          { title: 'Meetings', body: 'Follow workplace policies for recording, transcription, AI assistance, confidential content, and participant expectations.' },
          { title: 'Classes and research', body: 'Respect instructor, institutional, participant, and data-handling rules before using any AI assistant.' },
        ],
      },
      {
        title: 'Questions raised by live AI assistants',
        items: [
          { title: 'Disclosure', body: 'If a policy requires disclosure of AI assistance, recording, transcription, or notes, get approval before the session starts.' },
          { title: 'Authorship', body: 'Do not represent AI-generated answers, code, stories, or analysis as solely your own work when the rules do not allow assistance.' },
          { title: 'Sensitive content', body: 'Avoid sending confidential, regulated, unreleased, or third-party content to external providers unless the data owner and applicable policy allow it.' },
        ],
      },
    ],
    faq: [
      { question: 'Is using ExtraBrain cheating?', answer: 'ExtraBrain is a tool. Whether a specific use is allowed depends on the interview, workplace, school, employer, or platform rules you must follow.' },
      { question: 'When should I disclose ExtraBrain?', answer: 'Disclose or get approval whenever the applicable policy, meeting norms, workplace rules, school rules, or platform terms require it.' },
      { question: 'What is an appropriate use of ExtraBrain?', answer: 'Appropriate uses include note support, accessibility, preparation, prompt organization, follow-up tracking, and structured reasoning where assistance is allowed.' },
    ],
  },
  {
    slug: 'about',
    title: 'About ExtraBrain AI Copilot',
    description:
      'ExtraBrain builds a local-first Mac AI interview assistant and meeting copilot with local Gemma 4 where installed and compatible, provider choice, and privacy controls.',
    eyebrow: 'About',
    h1: 'ExtraBrain helps people stay present during high-stakes live work.',
    lead:
      'The product is built for interviews, technical discussions, customer calls, lectures, and research conversations where context moves faster than notes.',
    primaryCta: defaultCta,
    sections: [
      {
        title: 'Product principles',
        items: [
          { title: 'Local-first', body: 'Keep the live workflow on the user’s Mac whenever possible, including local transcription and local Gemma 4 where installed and compatible.' },
          { title: 'Provider choice', body: 'Let users choose local or external model and transcription providers they trust, including OpenAI, Anthropic, Claude, Codex, Deepgram, and compatible endpoints.' },
          { title: 'Responsible use', body: 'Make policy boundaries, privacy tradeoffs, interview expectations, workplace rules, and external provider data flow visible before high-stakes sessions.' },
        ],
      },
      {
        title: 'What ExtraBrain builds for',
        items: [
          { title: 'High-stakes conversations', body: 'Interviews, meetings, research calls, lectures, customer calls, and technical discussions where context changes quickly and notes alone are not enough.' },
          { title: 'Desktop-native control', body: 'A Mac app workflow for people who want private live support without another participant joining the call, changing meeting dynamics, or relying only on a hosted browser dashboard.' },
          { title: 'Clear tradeoffs', body: 'Public pages explain local Gemma 4 availability, provider data flow, pricing boundaries, and responsible-use expectations.' },
        ],
      },
    ],
    faq: [
      { question: 'What is ExtraBrain?', answer: 'ExtraBrain is a free, local-first desktop AI interview assistant and meeting copilot for Mac.' },
      { question: 'Is the product called ExtraBrain or Extra Brain?', answer: 'The official spelling is ExtraBrain. Extra Brain is a spaced alias people may type when searching for the same product.' },
      { question: 'Who is ExtraBrain for?', answer: 'It is for candidates, engineers, founders, students, meeting leads, researchers, and teams who need structured live context while staying mindful of privacy and policy boundaries.' },
      { question: 'What platforms does ExtraBrain support?', answer: 'ExtraBrain is available for Mac today, including Apple Silicon and Intel Macs. Windows and Linux are planned.' },
    ],
  },
  {
    slug: 'contact',
    title: 'Contact ExtraBrain Support',
    description:
      'Contact ExtraBrain for support, enterprise rollout, privacy questions, security review, billing, and product inquiries.',
    eyebrow: 'Contact',
    h1: 'Contact ExtraBrain.',
    lead:
      'For product questions, enterprise rollout, policy review, deployment support, privacy, security, or billing, email the ExtraBrain team.',
    primaryCta: { label: 'Email ExtraBrain', href: `mailto:${contactEmail}` },
    secondaryCta: { label: 'Open help center', href: '/help/' },
    sections: [
      {
        title: 'Contact paths',
        items: [
          { title: 'Support', body: `Email ${contactEmail} for help with setup, installation, provider configuration, local transcription, optional Deepgram, local Gemma 4 availability, or troubleshooting.` },
          { title: 'Enterprise', body: `Email ${contactEmail} for team rollout, responsible-use policy, deployment, privacy, security, provider data-flow review, and workflow support.` },
          { title: 'GitHub', body: `Release notes, current Mac downloads, asset metadata, checksums when published, and public release history are published at ${githubUrl} for review.` },
        ],
      },
      {
        title: 'What to include',
        items: [
          { title: 'Support requests', body: 'Include your macOS version, ExtraBrain release, provider setup, transcription mode, whether local Gemma 4 is available, the meeting or interview workflow you are testing, and a concise description of the issue.' },
          { title: 'Enterprise requests', body: 'Include team size, workflow type, platform requirements, privacy constraints, deployment expectations, procurement needs, and policy questions.' },
          { title: 'Security or privacy questions', body: 'Describe the data categories, providers, transcription mode, local Gemma 4 expectations, deployment expectations, and review timeline that matter for your environment.' },
        ],
      },
    ],
    faq: [
      { question: 'How do I contact ExtraBrain?', answer: `Email ${contactEmail} for support, enterprise rollout, privacy, security, billing, or product questions.` },
      { question: 'Where do I report setup problems?', answer: 'Start with the help center and troubleshooting guide, then email support with your macOS version, release, provider setup, and transcription mode if you are still blocked.' },
      { question: 'Can teams ask for rollout help?', answer: 'Yes. Enterprise conversations can cover team rollout, policy, deployment, privacy, security, and custom workflow needs.' },
    ],
  },
];

const comparisonSlugs = new Set(comparisonMarketingPages.map((page) => page.slug));

export const marketingPages: MarketingPage[] = [
  ...baseMarketingPages.filter((page) => !comparisonSlugs.has(page.slug)),
  ...comparisonMarketingPages,
  ...seoMarketingPages,
];

export const allPublicRoutes = [
  '/',
  ...marketingPages.map((page) => `/${page.slug}/`),
  '/help/',
  '/help/billing-pro-plan/',
  '/help/billing-pro/activate-license/',
  '/help/billing-pro/custom-profiles/',
  '/help/getting-started/',
  '/help/getting-started/first-run-setup/',
  '/help/getting-started/macos-permissions/',
  '/help/getting-started/what-is-extrabrain/',
  '/help/installation/',
  '/help/privacy-data-handling/',
  '/help/privacy-security/how-extrabrain-handles-data/',
  '/help/privacy-security/privacy-controls/',
  '/help/providers/anthropic-claude-setup/',
  '/help/providers/connect-ai-provider/',
  '/help/providers/custom-openai-compatible-endpoint/',
  '/help/providers/openai-codex-setup/',
  '/help/providers/transcription-parakeet-vs-deepgram/',
  '/help/sessions-history/view-delete-session-history/',
  '/help/settings/',
  '/help/settings/audio-settings/',
  '/help/settings/automatic-updates/',
  '/help/settings/general-context-language/',
  '/help/settings/keyboard-shortcuts/',
  '/help/settings/profiles/',
  '/help/settings/screenshot-settings/',
  '/help/settings/send-feedback/',
  '/help/settings/transcript-cleanup-filler-words/',
  '/help/settings/ui-appearance/',
  '/help/settings/voice-trigger/',
  '/help/settings/webcam-tracking-experimental/',
  '/help/setup-api-keys/',
  '/help/troubleshooting/',
  '/help/using-extrabrain-in-interviews/',
  '/help/using-extrabrain/detected-topics-questions/',
  '/help/using-extrabrain/follow-up-questions/',
  '/help/using-extrabrain/screenshots-screen-context/',
  '/help/using-extrabrain/start-recording-and-analysis/',
  '/llms.txt',
  '/llms-full.txt',
];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).href;
}

export function pageBySlug(slug: string) {
  return marketingPages.find((page) => page.slug === slug);
}

export function softwareApplicationSchema(description = productDescription, downloadUrl = absoluteUrl('/download/')) {
  return {
    '@type': 'SoftwareApplication',
    name: productName,
    alternateName: brandAliases,
    applicationCategory: 'ProductivityApplication',
    applicationSubCategory: 'AI interview and meeting copilot',
    operatingSystem: 'macOS',
    url: siteUrl,
    image: absoluteUrl('/assets/images/logo-512.png'),
    screenshot: [
      absoluteUrl('/assets/screenshots/empty_state.png'),
      absoluteUrl('/assets/screenshots/live_session.png'),
      absoluteUrl('/assets/screenshots/sessions_history.png'),
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'ExtraBrain Free',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: absoluteUrl('/download/'),
      },
      {
        '@type': 'Offer',
        name: 'ExtraBrain Pro Founder Monthly',
        price: '6.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: lemonSqueezyCheckoutLinks.proMonthlyFounder,
      },
      {
        '@type': 'Offer',
        name: 'ExtraBrain Pro Yearly',
        price: '79',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: absoluteUrl('/pricing/'),
      },
      {
        '@type': 'Offer',
        name: 'ExtraBrain Pro Lifetime',
        price: '149',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: absoluteUrl('/pricing/'),
      },
    ],
    downloadUrl,
    releaseNotes: latestReleaseUrl,
    description,
    softwareRequirements: 'macOS on Apple Silicon or Intel Mac; local Gemma 4 requires installation and compatible hardware',
    author: {
      '@type': 'Organization',
      name: productName,
      alternateName: brandAliases,
      url: siteUrl,
    },
    featureList: [
      'Free, local-first desktop AI interview and meeting copilot',
      'Live coding, system design, behavioral interview, and meeting support',
      'Screen-aware desktop workflow for live calls',
      'Local Gemma 4 on-device AI where installed and compatible',
      'Local NVIDIA Parakeet transcription and optional Deepgram',
      'Bring your own OpenAI, Anthropic, Claude, Codex, or compatible provider access',
      'ExtraBrain Pro custom profiles and workflow controls',
      'Local-first transcripts, prompts, screenshots, notes, and session history',
      'Available for Mac today, with Windows and Linux planned',
      'Apple Silicon and Intel Mac support',
      'Responsible-use and privacy controls',
    ],
  };
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    name: productName,
    alternateName: brandAliases,
    url: siteUrl,
    logo: absoluteUrl('/assets/images/logo-512.png'),
    sameAs: [githubUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      email: contactEmail,
      contactType: 'customer service',
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    name: productName,
    alternateName: brandAliases,
    url: siteUrl,
  };
}

export function faqSchema(faq: Array<{ question: string; answer: string }>) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(page: MarketingPage) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.h1.replace(/\.$/, ''),
        item: absoluteUrl(`/${page.slug}/`),
      },
    ],
  };
}

export function howToInstallSchema() {
  return {
    '@type': 'HowTo',
    name: 'Install ExtraBrain for macOS',
    description: 'Download, install, launch, and verify ExtraBrain before a live interview or meeting.',
    step: [
      { '@type': 'HowToStep', name: 'Download', text: 'Open the latest ExtraBrain release and download the current macOS build.' },
      { '@type': 'HowToStep', name: 'Install', text: 'Open the installer or app bundle and move ExtraBrain into Applications if instructed.' },
      { '@type': 'HowToStep', name: 'Launch', text: 'Launch ExtraBrain and grant required macOS permissions.' },
      { '@type': 'HowToStep', name: 'Verify', text: 'Run a short rehearsal to verify audio, transcription, local Gemma 4 or providers, and window placement.' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'macOS Mac' }],
  };
}
