import type { MarketingPage } from './product';

export type ComparisonSource = {
  label: string;
  href: string;
};

export type ComparisonFeatureRow = {
  feature: string;
  extraBrain: string;
  competitor: string;
  note: string;
};

export type ComparisonPageContent = {
  checkedAt: string;
  competitorName: string;
  competitorSummary: string;
  pricingSnapshot: string;
  bestForExtraBrain: string[];
  bestForCompetitor: string[];
  atAGlance: Array<{
    label: string;
    extraBrain: string;
    competitor: string;
  }>;
  featureRows: ComparisonFeatureRow[];
  extraBrainAdvantages: Array<{ title: string; body: string }>;
  chooseCompetitorWhen: Array<{ title: string; body: string }>;
  responsibleUse: string;
};

export type ComparisonHubContent = {
  checkedAt: string;
  entries: Array<{
    name: string;
    href: string;
    summary: string;
    pricing: string;
  }>;
};

const defaultCta = { label: 'Download for Mac', href: '/download/' };
const checkedAt = 'May 12, 2026';
const responsibleUse =
  'Use any live AI assistant only where interview, workplace, school, and platform rules allow it. Do not use generated answers to misrepresent your skills, experience, or authorship.';

const sharedExtraBrainBestFor = [
  'People who want a free core Mac app, optional $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime Pro controls, and separate BYO provider billing.',
  'People who want local Parakeet transcription and local Gemma 4 on-device AI where installed and compatible.',
  'People who need one desktop workflow for interviews, meetings, lectures, and research calls.',
];

const sharedExtraBrainAdvantages = [
  {
    title: 'Local-first workflow',
    body: 'ExtraBrain keeps the live assistant in a Mac desktop app and documents when session content can stay local or be sent to selected providers.',
  },
  {
    title: 'Provider control',
    body: 'Use local Gemma 4 where installed and compatible, or connect OpenAI, Anthropic, Claude, Codex, and compatible provider access you control.',
  },
  {
    title: 'Broader live context',
    body: 'The product covers coding, system design, behavioral interviews, meetings, lectures, research calls, and post-session review.',
  },
];

const baseRows = (competitorName: string, competitorPlatform: string, pricing: string): ComparisonFeatureRow[] => [
  {
    feature: 'Core workflow',
    extraBrain: 'Live interview and meeting copilot with local-first session context.',
    competitor: competitorPlatform,
    note: 'Choose based on whether you need a general desktop copilot or a more specialized interview product.',
  },
  {
    feature: 'Pricing model',
    extraBrain: 'Free core Mac app; Pro is $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; external AI or transcription costs depend on providers you choose.',
    competitor: pricing,
    note: 'Verify live checkout pages before purchase because plans and promotions can change.',
  },
  {
    feature: 'Provider model',
    extraBrain: 'Local Gemma 4 where installed and compatible plus BYO OpenAI, Anthropic, Claude, Codex, or compatible endpoints.',
    competitor: `${competitorName} bundles or manages AI access through its own product plans unless its current checkout says otherwise.`,
    note: 'Provider control matters when billing, retention, and model choice need to stay in your accounts.',
  },
  {
    feature: 'Responsible use',
    extraBrain: 'Publishes policy reminders for interviews, meetings, schools, employers, and platforms.',
    competitor: `${competitorName} users should also verify the rules for each interview or meeting.`,
    note: 'No tool can make prohibited assistance acceptable.',
  },
];

const comparisonPage = (page: Omit<MarketingPage, 'schemaType'> & { comparison: ComparisonPageContent }): MarketingPage => ({
  ...page,
  schemaType: 'FAQPage',
});

export const comparisonMarketingPages: MarketingPage[] = [
  {
    slug: 'compare',
    title: 'Compare AI Interview Assistants — ExtraBrain vs Alternatives',
    description:
      'Compare ExtraBrain with Cluely, InterviewCoder, Final Round AI, LockedIn AI, ParakeetAI, Linkjob AI, Beyz AI, and InterviewBee for interviews and meetings.',
    eyebrow: 'Comparisons',
    h1: 'Compare ExtraBrain with live AI interview assistants.',
    lead:
      'Use this hub to compare ExtraBrain against popular real-time interview and meeting assistants. Each page includes who each product is for, pricing notes, tradeoffs, FAQs, and official source links checked on May 12, 2026.',
    ogImage: '/assets/og/compare.svg',
    primaryCta: defaultCta,
    secondaryCta: { label: 'Read responsible use', href: '/responsible-use/' },
    schemaType: 'FAQPage',
    comparisonHub: {
      checkedAt,
      entries: [
        { name: 'Cluely', href: '/compare/cluely/', summary: 'Meeting assistant with live answers, meeting notes, and screen-share invisibility claims.', pricing: 'Starter Free; Pro $19.99/month; Pro + Undetectability $149.99/month.' },
        { name: 'InterviewCoder', href: '/compare/interviewcoder/', summary: 'Technical interview assistant focused on coding interviews and undetectability claims.', pricing: 'Free download; Monthly Pro $299/month; Lifetime Pro $799 one-time.' },
        { name: 'Final Round AI', href: '/compare/final-round-ai/', summary: 'Interview preparation and live Interview Copilot suite across roles and interview types.', pricing: 'Public pages link to subscription signup; current static pages should be verified for live plan pricing.' },
        { name: 'LockedIn AI', href: '/compare/lockedin-ai/', summary: 'Interview copilot and career platform with web, desktop, phone interview, coding, and career tools.', pricing: 'Pricing page lists Unlimited, Credits, and Lifetime plan families; verify live pricing before purchase.' },
        { name: 'ParakeetAI', href: '/compare/parakeet-ai/', summary: 'Real-time interview assistant with coding support, desktop privacy claims, credits, subscriptions, and lifetime plans.', pricing: 'Pricing area lists credits, subscriptions, lifetime, unlimited calls, and code INTERVIEW50; exact current dollar prices require live checkout.' },
        { name: 'Linkjob AI', href: '/compare/linkjob-ai/', summary: 'Interview copilot with real-time assistant, coding copilot, online quiz assistant, model tiers, and stealth claims.', pricing: 'Free trial; Monthly $99.99; Quarterly $69.99 monthly price billed quarterly; Yearly $29.99 monthly price billed yearly; Lifetime $699.99.' },
        { name: 'Beyz AI', href: '/compare/beyz-ai/', summary: 'Invisible desktop interview assistant with real-time suggestions, coding assistant, meeting assistant, and prep tools.', pricing: 'Monthly $49.99/month; Titan $24.99/month billed semi-annually; God $32.99/month billed quarterly.' },
        { name: 'InterviewBee', href: '/compare/interviewbee/', summary: 'Interview assistant with live sessions, mock interviews, desktop technical assistant, and job-search resources.', pricing: 'Free, Starter, Pro, and Champion plans; page says prices may update by location and currency.' },
      ],
    },
    sections: [
      {
        title: 'How to use these pages',
        body:
          'Start with the workflow you need, then check pricing, platform support, privacy path, provider control, and the rules for the interview or meeting.',
      },
      {
        title: 'Responsible use',
        body: responsibleUse,
      },
    ],
    sources: [
      { label: 'CTRLpotato reference layout', href: 'https://www.ctrlpotato.com/compare/cluely' },
      { label: 'Cluely pricing', href: 'https://cluely.com/pricing' },
      { label: 'InterviewCoder homepage', href: 'https://www.interviewcoder.co/' },
      { label: 'Final Round AI FAQ', href: 'https://www.finalroundai.com/frequently-asked-questions' },
      { label: 'LockedIn AI pricing', href: 'https://www.lockedinai.com/pricing' },
      { label: 'ParakeetAI assistant page', href: 'https://www.parakeet-ai.com/ai-interview-assistant' },
      { label: 'Linkjob AI pricing', href: 'https://www.linkjob.ai/pricing/' },
      { label: 'Beyz AI homepage', href: 'https://beyz.ai/' },
      { label: 'InterviewBee pricing', href: 'https://interviewbee.ai/pricing' },
    ],
    faq: [
      { question: 'How current are these comparison pages?', answer: 'The comparison source links and pricing snapshots were last checked on May 12, 2026. Always verify live pricing and plan terms before purchase.' },
      { question: 'What makes ExtraBrain different from most alternatives?', answer: 'ExtraBrain emphasizes a free core Mac app, optional $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime Pro workflow controls, local-first workflows, local Parakeet transcription, local Gemma 4 where installed and compatible, and provider access you control.' },
      { question: 'Are these pages legal or policy advice?', answer: 'No. They are product comparisons. You are responsible for following the rules of the interview, employer, school, meeting, and platform.' },
    ],
  },
  comparisonPage({
    slug: 'compare/cluely',
    title: 'ExtraBrain vs Cluely: Pricing, Privacy & Provider Control',
    description:
      'Compare ExtraBrain and Cluely for meetings, interviews, screen-share invisibility, local-first workflows, provider control, and pricing.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs Cluely.',
    lead:
      'Cluely positions itself as an undetectable AI for meetings with real-time answers and meeting notes. ExtraBrain focuses on local-first Mac interview and meeting workflows with local Parakeet transcription, local Gemma 4 where installed and compatible, and BYO provider control.',
    ogImage: '/assets/og/compare-cluely.svg',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare meeting-first assistance against a local-first desktop copilot for interviews and meetings.' },
      {
        title: 'Where ExtraBrain is meaningfully different from Cluely',
        items: [
          { title: 'Provider control', body: 'ExtraBrain lets you choose local Gemma 4 where installed and compatible, or provider access you control, instead of relying only on a bundled meeting assistant plan.' },
          { title: 'Workflow scope', body: 'Cluely is meeting-answer focused; ExtraBrain covers interviews, meetings, coding, system design, lectures, research, and post-session review.' },
          { title: 'Pricing caveat', body: 'Cluely separates a higher-priced undetectability tier, so compare screen-share needs and plan limits before buying.' },
        ],
      },
    ],
    sources: [
      { label: 'Cluely homepage', href: 'https://cluely.com/' },
      { label: 'Cluely pricing', href: 'https://cluely.com/pricing' },
      { label: 'Cluely undetectability', href: 'https://cluely.com/undetectability' },
    ],
    comparison: {
      checkedAt,
      competitorName: 'Cluely',
      competitorSummary: 'Cluely says it listens to meetings in real time, gives instant answers, creates meeting notes, does not join meetings as a bot, and offers screen-share invisibility features.',
      pricingSnapshot: 'Starter Free; Pro $19.99/month; Pro + Undetectability $149.99/month.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People who primarily want a meeting assistant with live answers and meeting notes.',
        'People who want Cluely App Store or desktop distribution and its bundled plan model.',
        'People who specifically want Cluely’s paid undetectability tier.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Interviews plus meetings', competitor: 'Meetings and live answers' },
        { label: 'Current platform', extraBrain: 'Mac today; Windows/Linux planned', competitor: 'Desktop and mobile positioning on Cluely pages' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: 'Free, $19.99/month Pro, $149.99/month Pro + Undetectability' },
      ],
      featureRows: baseRows('Cluely', 'Live meeting assistant with meeting notes, real-time answers, and screen-share invisibility claims.', 'Free, Pro, and Pro + Undetectability tiers.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'Meeting notes are the main job', body: 'Cluely is explicitly framed around live meetings, recaps, and in-call answers.' },
        { title: 'You want its paid invisibility package', body: 'Cluely separates Pro + Undetectability as a higher-priced plan on its pricing page.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'How is ExtraBrain different from Cluely?', answer: 'ExtraBrain is a local-first Mac assistant for interviews and meetings with local Parakeet transcription, local Gemma 4 where installed and compatible, and BYO provider control. Cluely is marketed primarily around meetings, live answers, notes, and undetectability.' },
      { question: 'Which product has a free option?', answer: 'ExtraBrain has a free core Mac app and optional paid Pro workflow controls. Cluely lists a free Starter plan with limited AI responses and limited meeting notetaking.' },
      { question: 'Can either product make prohibited interview assistance acceptable?', answer: 'No. You must follow the rules for the interview, workplace, school, meeting, and platform.' },
    ],
  }),
  comparisonPage({
    slug: 'compare/interviewcoder',
    title: 'ExtraBrain vs InterviewCoder: Coding Interview Assistant Comparison',
    description:
      'Compare ExtraBrain and InterviewCoder for coding interviews, system design, undetectability claims, pricing, Gemma 4, and BYO providers.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs InterviewCoder.',
    lead:
      'InterviewCoder focuses on technical interviews and daily-tested undetectability claims across interview apps. ExtraBrain focuses on local-first desktop support across coding, system design, behavioral interviews, and meetings.',
    ogImage: '/assets/og/compare-interviewcoder.svg',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare a coding-interview specialist against a broader local-first desktop copilot.' },
      {
        title: 'Pricing caveats for InterviewCoder',
        items: [
          { title: 'High monthly sticker price', body: 'The checked page listed Monthly Pro at $299/month, so compare whether a coding-only workflow justifies the subscription.' },
          { title: 'Broader use cases', body: 'ExtraBrain keeps coding support inside a general Mac assistant for meetings, system design, behavioral rounds, lectures, and research calls.' },
          { title: 'Provider ownership', body: 'ExtraBrain separates app pricing from local Gemma 4 or external provider accounts you control.' },
        ],
      },
    ],
    sources: [{ label: 'InterviewCoder homepage', href: 'https://www.interviewcoder.co/' }],
    comparison: {
      checkedAt,
      competitorName: 'InterviewCoder',
      competitorSummary: 'InterviewCoder describes a desktop app for technical interviews, LeetCode, system design, audio support, and undetectability testing across Teams, Zoom, Meet, Chime, Webex, HackerRank, CoderPad, and Codility.',
      pricingSnapshot: 'Free Download $0 forever; Monthly Pro $299/month with original price shown as $499; Lifetime Pro $799 one-time with original price shown as $1598.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People focused specifically on software engineering technical interviews.',
        'People who want InterviewCoder’s coding-first positioning and plan model.',
        'People who prioritize its daily undetectability testing claims.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Coding, system design, behavioral, meetings', competitor: 'Technical interviews' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: '$0 free download; $299/month Monthly Pro; $799 Lifetime Pro' },
        { label: 'Use-case breadth', extraBrain: 'Interviews, meetings, lectures, research', competitor: 'Technical interview assistance' },
      ],
      featureRows: baseRows('InterviewCoder', 'Technical interview desktop assistant with coding, system design, and undetectability positioning.', 'Free download, Monthly Pro, and Lifetime Pro prices are published on its homepage.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'Coding-only focus', body: 'InterviewCoder is built and messaged around technical interview assistance.' },
        { title: 'You want its specific platform checks', body: 'Its homepage lists daily undetectability checks across many interview and meeting apps.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'Is ExtraBrain only for coding interviews?', answer: 'No. ExtraBrain supports coding, system design, behavioral interviews, meetings, lectures, and research calls.' },
      { question: 'What did InterviewCoder pricing list when checked?', answer: 'The homepage listed Free Download at $0 forever, Monthly Pro at $299/month, and Lifetime Pro at $799 one-time.' },
      { question: 'What should I compare first?', answer: 'Compare coding depth, system design help, pricing, provider control, data flow, platform support, and whether live help is allowed.' },
    ],
  }),
  comparisonPage({
    slug: 'compare/final-round-ai',
    title: 'ExtraBrain vs Final Round AI: Live Interview Copilot Comparison',
    description:
      'Compare ExtraBrain and Final Round AI for live interview help, interview preparation, mock interviews, desktop workflows, pricing, and provider control.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs Final Round AI.',
    lead:
      'Final Round AI positions itself as an all-in-one interview preparation and live Interview Copilot product. ExtraBrain focuses on local-first Mac live workflows and provider access you control.',
    ogImage: '/assets/og/compare-final-round-ai.svg',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare an all-in-one interview suite against a local-first desktop live workflow.' },
      {
        title: 'Best alternative depending on your workflow',
        items: [
          { title: 'Choose ExtraBrain for live desktop context', body: 'ExtraBrain is strongest when you want a Mac app, local transcription, local Gemma 4 where installed and compatible, and provider access you control.' },
          { title: 'Choose Final Round AI for a prep suite', body: 'Final Round AI is better aligned when you want mock interviews, preparation workflows, resume context, and post-interview reports in one hosted suite.' },
          { title: 'Verify current pricing', body: 'The checked static public text did not expose exact current dollar pricing, so verify the live signup or checkout page before purchase.' },
        ],
      },
    ],
    sources: [
      { label: 'Final Round AI homepage', href: 'https://www.finalroundai.com/' },
      { label: 'Final Round AI FAQ', href: 'https://www.finalroundai.com/frequently-asked-questions' },
    ],
    comparison: {
      checkedAt,
      competitorName: 'Final Round AI',
      competitorSummary: 'Final Round AI describes interview preparation, mock interviews, real-time Interview Copilot, post-interview reports, resume and role personalization, and broad interview-type coverage.',
      pricingSnapshot: 'Current public pages link to subscription signup and desktop app onboarding, but the static page text checked for this update did not expose exact current dollar prices.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People who want mock interviews, preparation, and live support in one career suite.',
        'People who want resume and job-detail personalization in a hosted interview workflow.',
        'People who want post-interview scoring and performance feedback features.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Live desktop context for interviews and meetings', competitor: 'Interview prep, live copilot, reports' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: 'Subscription signup; exact current dollar prices require live page or checkout verification' },
        { label: 'Career-suite scope', extraBrain: 'No auto-apply or resume suite positioning', competitor: 'Preparation and interview lifecycle tooling' },
      ],
      featureRows: baseRows('Final Round AI', 'All-in-one interview assistant for preparation, live guidance, and feedback reports.', 'Subscription pricing should be verified on the current signup or checkout page.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'You want a prep suite', body: 'Final Round AI emphasizes mock interviews, resume/job context, and post-interview feedback.' },
        { title: 'You want broad career tooling', body: 'Its public pages frame the product around the full interview lifecycle.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'Is ExtraBrain a full interview preparation suite?', answer: 'No. ExtraBrain focuses on live desktop context, local transcription, provider control, and post-session review rather than a broad job-search suite.' },
      { question: 'What does Final Round AI pricing say publicly?', answer: 'The checked public pages linked to subscription signup, but exact current dollar prices were not exposed in the static text used for this comparison.' },
      { question: 'Which is better for meetings?', answer: 'ExtraBrain is built for interviews and meetings. Final Round AI is framed around interview preparation and live interview support.' },
    ],
  }),
  comparisonPage({
    slug: 'compare/lockedin-ai',
    title: 'ExtraBrain vs LockedIn AI',
    description:
      'Compare ExtraBrain and LockedIn AI for interview copilot workflows, desktop stealth mode, phone interviews, career tools, pricing, and provider control.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs LockedIn AI.',
    lead:
      'LockedIn AI positions itself as an interview copilot and career platform with web, desktop, phone interview, coding, and job-search tools. ExtraBrain focuses on a local-first Mac desktop workflow for interviews and meetings.',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare a career-platform interview copilot against a local-first desktop copilot.' },
      {
        title: 'What to verify before buying LockedIn AI',
        items: [
          { title: 'Career platform scope', body: 'LockedIn AI includes resume, LinkedIn, job tracking, and related tools; ExtraBrain is narrower and focused on live desktop context.' },
          { title: 'Phone interview mode', body: 'Verify whether phone, web, desktop, and coding modes match the actual workflow you need.' },
          { title: 'Current plan price', body: 'The checked page listed plan families, but exact live prices should be verified before purchase.' },
        ],
      },
    ],
    sources: [
      { label: 'LockedIn AI pricing', href: 'https://www.lockedinai.com/pricing' },
      { label: 'LockedIn AI support', href: 'https://www.lockedinai.com/support' },
    ],
    comparison: {
      checkedAt,
      competitorName: 'LockedIn AI',
      competitorSummary: 'LockedIn AI support describes real-time interview assistance, web app modes, desktop stealth mode, phone interviews, coding screenshots, resume and job-search tools, and career planning features.',
      pricingSnapshot: 'Pricing page lists Unlimited, Credits, and Lifetime plan families plus General and Professional categories; verify live pricing before purchase.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People who want interview help plus resume, LinkedIn, cover letter, job tracking, and career tools.',
        'People who want web, desktop, and phone interview modes under one account.',
        'People who prefer LockedIn AI’s credit, unlimited, or lifetime plan structure.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Local-first interviews and meetings', competitor: 'Interview copilot and career platform' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: 'Unlimited, Credits, Lifetime plan families; live prices require checkout/page verification' },
        { label: 'Career tools', extraBrain: 'Focused live assistant', competitor: 'Resume, LinkedIn, cover letter, job tracking, and more' },
      ],
      featureRows: baseRows('LockedIn AI', 'Interview copilot with desktop, browser, phone, coding, and career-tool workflows.', 'Pricing page lists plan families; exact live prices should be verified before purchase.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'You want career tools', body: 'LockedIn AI includes resume, cover letter, LinkedIn, job tracking, and career planning workflows.' },
        { title: 'You want phone interview mode', body: 'Its support center documents phone interview workflows on mobile devices.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'Does LockedIn AI include more than interview assistance?', answer: 'Yes. Its support center describes resume, cover letter, LinkedIn optimization, job tracking, professional headshot, and career tools.' },
      { question: 'Why choose ExtraBrain instead?', answer: 'Choose ExtraBrain when you want a local-first Mac workflow, local Parakeet transcription, local Gemma 4 where installed and compatible, and provider access you control.' },
      { question: 'Does LockedIn AI publish exact prices in static page text?', answer: 'The checked pricing page lists plan families and categories, but exact live prices should be verified on the current page or checkout.' },
    ],
  }),
  comparisonPage({
    slug: 'compare/parakeet-ai',
    title: 'ExtraBrain vs ParakeetAI',
    description:
      'Compare ExtraBrain and ParakeetAI for real-time interview assistance, coding support, privacy claims, credits, subscriptions, lifetime plans, and local-first workflows.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs ParakeetAI.',
    lead:
      'ParakeetAI positions itself as a real-time AI interview assistant with coding support, privacy and undetectability claims, credits, subscriptions, and lifetime plans. ExtraBrain focuses on local-first Mac workflows and BYO provider control.',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare an interview assistant with credits/subscriptions against a local-first desktop copilot.' },
      {
        title: 'Privacy and data-flow difference',
        items: [
          { title: 'Credit-based sessions', body: 'ParakeetAI documents credits and session concepts; ExtraBrain separates app features from local Gemma 4 and provider usage.' },
          { title: 'Document uploads', body: 'Verify where uploaded documents, notes, and interview context are stored before using sensitive material.' },
          { title: 'Local transcription distinction', body: 'ExtraBrain can use local Parakeet transcription and local Gemma 4 where installed and compatible for a fully local path.' },
        ],
      },
    ],
    sources: [{ label: 'ParakeetAI interview assistant', href: 'https://www.parakeet-ai.com/ai-interview-assistant' }],
    comparison: {
      checkedAt,
      competitorName: 'ParakeetAI',
      competitorSummary: 'ParakeetAI says it works with video and coding platforms, supports coding interviews, offers fast transcription, AI notes, uploaded documents, credits, subscriptions, and lifetime plans.',
      pricingSnapshot: 'Pricing area lists credits, subscriptions, lifetime, 30-day money back, unlimited calls, and cancel-anytime language. Static page text did not expose exact current dollar prices.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People who want ParakeetAI’s credits, subscription, or lifetime usage model.',
        'People who want its browser/mobile session options and coding-call support.',
        'People who prefer its bundled model choices and uploaded-document workflow.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Interviews and meetings', competitor: 'Real-time interview assistant' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: 'Credits, subscriptions, lifetime; exact static prices not visible' },
        { label: 'Transcription', extraBrain: 'Local Parakeet transcription and optional Deepgram', competitor: 'Vendor-managed transcription model claims' },
      ],
      featureRows: baseRows('ParakeetAI', 'Real-time interview assistant with coding support, documents, notes, and privacy claims.', 'Credits, subscriptions, and lifetime plans; exact static prices not visible.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'You want its credit model', body: 'ParakeetAI documents credits divided into 30-minute sessions and says credits never expire.' },
        { title: 'You want browser/mobile pairing', body: 'Its FAQ describes mobile-optimized browser access and simultaneous desktop/mobile sessions.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'Does ParakeetAI list exact prices in static page text?', answer: 'The checked page showed plan types and billing concepts, but exact current dollar prices were not exposed in the static text available to this implementation.' },
      { question: 'How is ExtraBrain different?', answer: 'ExtraBrain emphasizes local-first Mac workflows, local Parakeet transcription, local Gemma 4 where installed and compatible, and provider access you control.' },
      { question: 'Can ExtraBrain support coding interviews?', answer: 'Yes. ExtraBrain supports coding prompts, screenshots, edge cases, complexity tradeoffs, and follow-up questions.' },
    ],
  }),
  comparisonPage({
    slug: 'compare/linkjob-ai',
    title: 'ExtraBrain vs Linkjob AI',
    description:
      'Compare ExtraBrain and Linkjob AI pricing, interview assistance, coding copilot, quiz assistant, stealth claims, model tiers, and provider control.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs Linkjob AI.',
    lead:
      'Linkjob AI publishes plan prices for a free trial, monthly, quarterly, yearly, and lifetime access with real-time interview, coding copilot, quiz assistant, smart screenshot, and stealth mode features. ExtraBrain keeps the core Mac app free, offers Pro at $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime, and separates external provider billing.',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare a priced subscription/lifetime interview copilot against a free-core local-first Mac app.' },
      {
        title: 'Pricing caveats for Linkjob AI',
        items: [
          { title: 'Billing cadence', body: 'Linkjob AI lists monthly, quarterly, yearly, and lifetime options, so compare renewal terms and cancellation policy before purchase.' },
          { title: 'Feature packaging', body: 'Quiz assistant, coding copilot, smart screenshot, and model tiers may be bundled differently from ExtraBrain’s app-license model.' },
          { title: 'Provider control', body: 'ExtraBrain keeps external provider billing in your own accounts, with local Gemma 4 available where installed and compatible.' },
        ],
      },
    ],
    sources: [{ label: 'Linkjob AI pricing', href: 'https://www.linkjob.ai/pricing/' }],
    comparison: {
      checkedAt,
      competitorName: 'Linkjob AI',
      competitorSummary: 'Linkjob AI pricing describes real-time interview assistant, AI mock interview practice, coding copilot, online quiz assistant, smart screenshot, custom AI response, support, model tiers, and stealth mode.',
      pricingSnapshot: 'Free trial; Monthly $99.99; Quarterly $69.99 monthly price billed quarterly; Yearly $29.99 monthly price billed yearly; Lifetime $699.99.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People who want a published subscription or lifetime purchase for bundled interview assistant features.',
        'People who want Linkjob AI’s quiz assistant and smart screenshot workflow.',
        'People who prefer its listed model-tier packaging.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Interviews and meetings', competitor: 'Interview, coding, mock, and quiz assistant' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: 'Free trial; $99.99 monthly; $69.99 quarterly monthly price; $29.99 yearly monthly price; $699.99 lifetime' },
        { label: 'Model control', extraBrain: 'Provider access you control', competitor: 'Plan-based model bundles listed by vendor' },
      ],
      featureRows: baseRows('Linkjob AI', 'Real-time interview assistant with coding copilot, quiz assistant, screenshots, and stealth claims.', 'Free trial; monthly, quarterly, yearly, and lifetime pricing published.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'You want a lifetime option', body: 'Linkjob AI lists a one-time lifetime plan on its pricing page.' },
        { title: 'You need quiz assistant packaging', body: 'Its plans explicitly include an Online Quiz Assistant feature.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'What prices did Linkjob AI list when checked?', answer: 'The pricing page listed a free trial, Monthly $99.99, Quarterly $69.99 monthly price billed quarterly, Yearly $29.99 monthly price billed yearly, and Lifetime $699.99.' },
      { question: 'Does ExtraBrain have a lifetime plan?', answer: 'Yes. ExtraBrain Pro has a one-time $149 Lifetime option at launch (regular $179), while the core Mac app remains free and external provider billing stays separate.' },
      { question: 'What should I verify before buying Linkjob AI?', answer: 'Verify current checkout price, renewal terms, refund terms, model limits, platform support, and whether the workflow is allowed in your interview.' },
    ],
  }),
  comparisonPage({
    slug: 'compare/beyz-ai',
    title: 'Beyz AI vs ExtraBrain — Desktop Interview Assistant Comparison',
    description:
      'Compare the Beyz AI desktop app and ExtraBrain for invisible desktop interview help, real-time suggestions, coding, meetings, pricing, platforms, and provider control.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs Beyz AI.',
    lead:
      'If you are comparing the Beyz AI desktop app with ExtraBrain, this guide explains differences in Mac workflow, provider control, pricing, privacy, and interview support. Beyz AI positions itself as an invisible desktop interview assistant with real-time suggestions, LeetCode support, cheat sheets, meeting assistance, and paid plans. ExtraBrain focuses on local-first Mac workflows and BYO provider control.',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare Beyz’s invisible desktop interview suite against ExtraBrain’s local-first Mac copilot.' },
      {
        title: 'Best alternative depending on platform',
        items: [
          { title: 'Choose Beyz AI for Windows today', body: 'Beyz lists Windows x64 support, while ExtraBrain currently publishes Mac support with Windows and Linux planned.' },
          { title: 'Choose ExtraBrain for Mac local-first control', body: 'ExtraBrain is strongest when Mac availability, local Parakeet transcription, local Gemma 4, and provider control matter.' },
          { title: 'Verify plan terms', body: 'Beyz lists monthly, quarterly, and semi-annual prices; check current checkout terms before buying.' },
        ],
      },
    ],
    sources: [{ label: 'Beyz AI homepage', href: 'https://beyz.ai/' }],
    comparison: {
      checkedAt,
      competitorName: 'Beyz AI',
      competitorSummary: 'Beyz says its desktop app is invisible to screen sharing, supports Mac Apple Silicon, Mac Intel, and Windows downloads, requires macOS 14+ or Windows 11 22H2+, and includes interview, coding, meeting, practice, cheat sheet, and prep tools.',
      pricingSnapshot: 'Monthly $49.99/month; Titan $24.99/month billed semi-annually; God $32.99/month billed quarterly. All prices shown in USD.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People who want Beyz’s invisible desktop app across Mac and Windows.',
        'People who want its interview cheat sheets, practice, phone assistant, and meeting assistant bundle.',
        'People who prefer Beyz’s semi-annual or quarterly paid plan structure.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Interviews and meetings with local-first controls', competitor: 'Invisible interview assistant and prep tools' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: '$49.99 monthly; $24.99/month semi-annual; $32.99/month quarterly' },
        { label: 'Platform', extraBrain: 'Mac today; Windows/Linux planned', competitor: 'Mac Apple Silicon, Mac Intel, Windows x64 downloads listed' },
      ],
      featureRows: baseRows('Beyz AI', 'Invisible desktop interview assistant with real-time suggestions, coding, meetings, practice, and prep tools.', 'Monthly, semi-annual, and quarterly plan prices are published.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'You need Windows today', body: 'Beyz lists a Windows x64 download, while ExtraBrain lists Windows as planned.' },
        { title: 'You want cheat sheets and phone assistant features', body: 'Beyz markets interview cheat sheets, phone assistant, 90s prep, and related tools.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'Does Beyz support Windows?', answer: 'The checked Beyz homepage listed Mac Apple Silicon, Mac Intel, and Windows x64 downloads.' },
      { question: 'How does ExtraBrain pricing differ?', answer: 'ExtraBrain keeps the core Mac app free, offers Pro at $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime, and separates external AI or transcription billing through providers you choose.' },
      { question: 'Which should I choose for local-first provider control?', answer: 'ExtraBrain is the better fit when local Parakeet transcription, local Gemma 4 where installed and compatible, and BYO providers are central requirements.' },
    ],
  }),
  comparisonPage({
    slug: 'compare/interviewbee',
    title: 'ExtraBrain vs InterviewBee',
    description:
      'Compare ExtraBrain and InterviewBee for live interview help, mock interviews, desktop assistant plans, pricing, platform support, and provider control.',
    eyebrow: 'Comparison',
    h1: 'ExtraBrain vs InterviewBee.',
    lead:
      'InterviewBee offers live and mock interview plans plus a desktop AI assistant for technical interviews, with Windows available and Mac marked as coming soon. ExtraBrain offers a free local-first Mac app today with BYO provider control.',
    primaryCta: defaultCta,
    sections: [
      { title: 'Summary', body: 'Compare InterviewBee’s session-limited paid plans and desktop technical assistant against ExtraBrain’s free-core Mac app.' },
      {
        title: 'What to verify before buying InterviewBee',
        items: [
          { title: 'Session limits', body: 'InterviewBee plans list live and mock interview session counts, so compare limits against your expected interview volume.' },
          { title: 'Desktop platform', body: 'The checked desktop page listed Windows download and Mac coming soon; ExtraBrain is available for Mac today.' },
          { title: 'Location-based pricing', body: 'InterviewBee says prices may update by location and currency, so verify the checkout shown to your account.' },
        ],
      },
    ],
    sources: [
      { label: 'InterviewBee pricing', href: 'https://interviewbee.ai/pricing' },
      { label: 'InterviewBee desktop assistant', href: 'https://interviewbee.ai/desktop-ai-interview-assistant' },
    ],
    comparison: {
      checkedAt,
      competitorName: 'InterviewBee',
      competitorSummary: 'InterviewBee pricing lists Free, Starter, Pro, and Champion plans with live interview and mock interview session limits. Its pricing FAQ says default USD prices can update client-side by detected location and supported currency.',
      pricingSnapshot: 'Free, Starter, Pro, and Champion plans are listed. Static page text no longer exposes default USD plan prices and says prices may change by location or currency.',
      bestForExtraBrain: sharedExtraBrainBestFor,
      bestForCompetitor: [
        'People who want a plan with included live and mock interview session counts.',
        'People who want InterviewBee’s Windows desktop technical assistant today.',
        'People who want its CV-JD matching, question bank, job board, and templates ecosystem.',
      ],
      atAGlance: [
        { label: 'Primary focus', extraBrain: 'Live interviews and meetings', competitor: 'Live interviews, mock interviews, and desktop technical assistant' },
        { label: 'Pricing', extraBrain: 'Free core app; Pro $9.99/month ($6.99 Founder), $79/year, or $149 Lifetime; BYO provider costs separate', competitor: 'Free, Starter, Pro, and Champion; exact current prices require live page or checkout verification' },
        { label: 'Desktop platform', extraBrain: 'Mac today', competitor: 'Windows free download; Mac coming soon on desktop page' },
      ],
      featureRows: baseRows('InterviewBee', 'Live/mock interview assistant with desktop technical assistant and job-search resources.', 'Free, Starter, Pro, and Champion plan names are published; exact current prices may update by location.'),
      extraBrainAdvantages: sharedExtraBrainAdvantages,
      chooseCompetitorWhen: [
        { title: 'You need Windows today', body: 'InterviewBee’s desktop assistant page lists a Windows download and says Mac is coming soon.' },
        { title: 'You want mock-session bundles', body: 'InterviewBee plans include explicit live interview and mock interview session limits.' },
      ],
      responsibleUse,
    },
    faq: [
      { question: 'What does InterviewBee pricing list?', answer: 'The checked pricing page listed Free, Starter, Pro, and Champion plans and noted that prices can update by location and currency.' },
      { question: 'Does InterviewBee desktop support Mac?', answer: 'The checked pricing and navigation copy emphasizes live, mock, desktop, and invisible interview assistants; verify the latest desktop download page for current platform availability.' },
      { question: 'Why choose ExtraBrain instead?', answer: 'Choose ExtraBrain when you want a free core Mac app, optional low-cost Pro workflow controls, local-first session context, local transcription, and BYO provider control.' },
    ],
  }),
];
