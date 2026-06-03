import type { MarketingPage } from './product';

const defaultCta = { label: 'Download for Mac', href: '/download/' };

const responsibleUseNote =
  'Use any live AI assistant only where interview, workplace, school, and platform rules allow it. Do not use generated answers to misrepresent your skills, experience, or authorship.';

const platformPage = (
  slug: string,
  platformName: string,
  opts: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    howItWorks: string;
    whyExtraBrain: Array<{ title: string; body: string }>;
    faq: Array<{ question: string; answer: string }>;
  },
): MarketingPage => ({
  slug,
  title: opts.title,
  description: opts.description,
  eyebrow: platformName,
  h1: opts.h1,
  lead: opts.lead,
  primaryCta: defaultCta,
  schemaType: 'FAQPage',
  sections: [
    {
      title: 'How it works',
      body: opts.howItWorks,
    },
    {
      title: `Why ExtraBrain for ${platformName}`,
      items: opts.whyExtraBrain,
    },
    {
      title: 'Responsible use',
      body: responsibleUseNote,
    },
  ],
  faq: opts.faq,
});

const companyGuidePage = (
  slug: string,
  companyName: string,
  opts: {
    description: string;
    lead: string;
    whatToExpect: Array<{ title: string; body: string }>;
    howExtraBrainHelps: Array<{ title: string; body: string }>;
    faq: Array<{ question: string; answer: string }>;
  },
): MarketingPage => ({
  slug,
  title: `${companyName} Interview Preparation — ExtraBrain`,
  description: opts.description,
  eyebrow: 'Interview guide',
  h1: `Prepare for ${companyName} interviews.`,
  lead: opts.lead,
  primaryCta: defaultCta,
  schemaType: 'FAQPage',
  sections: [
    {
      title: 'What to expect',
      items: opts.whatToExpect,
    },
    {
      title: 'How ExtraBrain helps',
      items: opts.howExtraBrainHelps,
    },
    {
      title: 'Responsible use',
      body: responsibleUseNote,
    },
  ],
  faq: opts.faq,
});

const useCasePage = (
  slug: string,
  opts: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    lead: string;
    whatYouGet: Array<{ title: string; body: string }>;
    workflow: Array<{ title: string; body: string }>;
    faq: Array<{ question: string; answer: string }>;
  },
): MarketingPage => ({
  slug,
  title: opts.title,
  description: opts.description,
  eyebrow: opts.eyebrow,
  h1: opts.h1,
  lead: opts.lead,
  primaryCta: defaultCta,
  schemaType: 'FAQPage',
  sections: [
    {
      title: 'What you get',
      items: opts.whatYouGet,
    },
    {
      title: 'Workflow',
      items: opts.workflow,
    },
    {
      title: 'Responsible use',
      body: responsibleUseNote,
    },
  ],
  faq: opts.faq,
});

export const useCasePages: MarketingPage[] = [
  useCasePage('use-cases/product-management-interviews', {
    title: 'AI Product Management Interview Assistant — ExtraBrain',
    description: 'Use ExtraBrain as a local-first AI copilot for product management interviews. Get live support for product sense, estimation, strategy, and metrics questions on Mac.',
    eyebrow: 'PM interviews',
    h1: 'Product management interview copilot.',
    lead: 'ExtraBrain helps you stay organized during PM interviews with live transcription, structured prompts for product sense and strategy questions, and post-session review on Mac.',
    whatYouGet: [
      { title: 'Product sense support', body: 'Get structured frameworks for product design, prioritization, and go-to-market questions during live PM interviews.' },
      { title: 'Metrics and estimation', body: 'Capture estimation prompts and walk through metrics frameworks with live context from your interview conversation.' },
      { title: 'Post-interview review', body: 'Review your PM interview session with saved transcripts, notes, and follow-up question suggestions.' },
    ],
    workflow: [
      { title: 'Set your profile', body: 'Create a PM interview profile with product frameworks and strategy guidance tailored to your target companies.' },
      { title: 'Record the session', body: 'ExtraBrain transcribes the interview conversation and captures screen context from shared product documents or whiteboard tools.' },
      { title: 'Review and improve', body: 'After the interview, review the full session with analysis, follow-ups, and areas for improvement.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with product sense questions?', answer: 'Yes. ExtraBrain captures the conversation and provides structured prompts for product design, prioritization, and strategy questions during live PM interviews.' },
      { question: 'Does ExtraBrain work on Zoom for PM interviews?', answer: 'Yes. ExtraBrain runs as a desktop app and stays hidden from screen sharing on Zoom, Google Meet, and Microsoft Teams while capturing audio and screen context.' },
      { question: 'Is ExtraBrain free for PM interview prep?', answer: 'Yes. The core Mac app is free. ExtraBrain Pro adds custom profiles and richer session history starting at $6.99/month.' },
    ],
  }),

  useCasePage('use-cases/data-science-interviews', {
    title: 'AI Data Science Interview Assistant — ExtraBrain',
    description: 'Use ExtraBrain for data science interviews. Live AI copilot for SQL, statistics, ML system design, and case study questions on Mac.',
    eyebrow: 'Data science interviews',
    h1: 'Data science interview copilot.',
    lead: 'ExtraBrain supports data science interviews with live transcription, screen-aware context for SQL and notebook environments, and structured prompts for statistics and ML questions.',
    whatYouGet: [
      { title: 'SQL and statistics support', body: 'Get live context as you work through SQL queries, probability questions, and statistical reasoning during data science interviews.' },
      { title: 'ML system design', body: 'Capture ML pipeline design discussions with structured prompts for feature engineering, model selection, and evaluation metrics.' },
      { title: 'Case study walkthroughs', body: 'ExtraBrain helps organize business case discussions by capturing the problem statement, assumptions, and analytical approach.' },
    ],
    workflow: [
      { title: 'Configure for data science', body: 'Set up a data science interview profile with relevant frameworks for SQL, ML, and statistics.' },
      { title: 'Capture the interview', body: 'ExtraBrain transcribes the conversation and reads screen context from SQL editors, Jupyter notebooks, or whiteboard tools.' },
      { title: 'Post-session analysis', body: 'Review your data science interview with saved context, code snippets discussed, and improvement suggestions.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with SQL interview questions?', answer: 'Yes. ExtraBrain captures the conversation and screen context from SQL editors, providing live support for query construction and optimization questions.' },
      { question: 'Does ExtraBrain support ML system design interviews?', answer: 'Yes. ExtraBrain helps structure ML pipeline discussions including feature engineering, model selection, training, and evaluation workflows.' },
      { question: 'Is ExtraBrain compatible with Jupyter notebooks?', answer: 'ExtraBrain captures screen context from any visible application, including Jupyter notebooks, SQL editors, and data visualization tools.' },
    ],
  }),

  useCasePage('use-cases/technical-phone-screens', {
    title: 'AI Technical Phone Screen Assistant — ExtraBrain',
    description: 'Use ExtraBrain during technical phone screens. Live AI copilot for initial coding, algorithm, and system design phone interviews on Mac.',
    eyebrow: 'Phone screens',
    h1: 'Technical phone screen copilot.',
    lead: 'ExtraBrain helps during technical phone screens with live transcription, real-time context from your coding environment, and structured prompts for algorithm and design questions.',
    whatYouGet: [
      { title: 'Live coding support', body: 'Get structured context as you work through algorithm and data structure problems during initial phone screen rounds.' },
      { title: 'Conversation capture', body: 'ExtraBrain transcribes the phone screen conversation so you can focus on solving problems instead of taking notes.' },
      { title: 'Quick review', body: 'Review the phone screen session immediately after with saved transcripts, code context, and follow-up notes.' },
    ],
    workflow: [
      { title: 'Prepare before the call', body: 'Set up ExtraBrain with a phone screen profile and verify audio settings before the interview starts.' },
      { title: 'Record during the screen', body: 'ExtraBrain captures audio and screen context while you code and discuss solutions with the interviewer.' },
      { title: 'Review after', body: 'Check your performance with the saved session, including conversation flow, coding approach, and areas to strengthen.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help during phone screen interviews?', answer: 'Yes. ExtraBrain captures audio and screen context during technical phone screens, providing structured support for coding and design questions.' },
      { question: 'Does ExtraBrain work with phone calls?', answer: 'ExtraBrain captures system audio on Mac, so it works with phone calls routed through your computer, VoIP apps, and video conferencing tools.' },
      { question: 'Is ExtraBrain hidden during phone screens?', answer: 'ExtraBrain is designed to stay hidden from screen sharing on major meeting tools. For audio-only phone screens, there is no screen to share.' },
    ],
  }),

  useCasePage('use-cases/frontend-interviews', {
    title: 'AI Frontend Interview Assistant — ExtraBrain',
    description: 'Use ExtraBrain for frontend engineering interviews. Live AI copilot for React, JavaScript, CSS, and UI design questions on Mac.',
    eyebrow: 'Frontend interviews',
    h1: 'Frontend interview copilot.',
    lead: 'ExtraBrain supports frontend engineering interviews with live transcription, screen-aware context from browser dev tools and code editors, and structured prompts for React, JavaScript, and UI questions.',
    whatYouGet: [
      { title: 'JavaScript and React support', body: 'Get structured context for JavaScript fundamentals, React component design, state management, and performance optimization questions.' },
      { title: 'CSS and UI design', body: 'ExtraBrain captures screen context from browser dev tools and design mockups during layout and styling discussions.' },
      { title: 'Live coding assistance', body: 'Follow along with live coding exercises on CodePen, CodeSandbox, or shared editors with real-time transcript and screen context.' },
    ],
    workflow: [
      { title: 'Set up a frontend profile', body: 'Create a profile focused on frontend technologies like React, TypeScript, CSS, and web performance.' },
      { title: 'Code with context', body: 'ExtraBrain captures your conversation and screen content while you build components, debug layouts, or discuss architecture.' },
      { title: 'Improve after', body: 'Review the session to identify gaps in your frontend knowledge and practice specific areas before the next round.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with React interview questions?', answer: 'Yes. ExtraBrain captures the conversation and screen context to help structure answers about React component lifecycle, hooks, state management, and rendering patterns.' },
      { question: 'Does ExtraBrain work with CodeSandbox or CodePen?', answer: 'ExtraBrain captures screen context from any visible application, including browser-based editors like CodeSandbox, CodePen, and StackBlitz.' },
      { question: 'Is ExtraBrain useful for frontend system design?', answer: 'Yes. ExtraBrain helps organize discussions about frontend architecture, component hierarchies, state management patterns, and performance tradeoffs.' },
    ],
  }),

  useCasePage('use-cases/backend-interviews', {
    title: 'AI Backend Interview Assistant — ExtraBrain',
    description: 'Use ExtraBrain for backend engineering interviews. Live AI copilot for API design, databases, distributed systems, and coding on Mac.',
    eyebrow: 'Backend interviews',
    h1: 'Backend interview copilot.',
    lead: 'ExtraBrain supports backend engineering interviews with live transcription, screen-aware context, and structured prompts for API design, database queries, and distributed systems questions.',
    whatYouGet: [
      { title: 'API and system design', body: 'Get structured context for REST API design, microservices architecture, and database schema discussions during backend interviews.' },
      { title: 'Database and query support', body: 'ExtraBrain captures screen context from SQL editors and database tools while you work through query optimization and schema design questions.' },
      { title: 'Distributed systems', body: 'Follow discussions about scalability, consistency, caching, and message queues with live conversation capture and structured prompts.' },
    ],
    workflow: [
      { title: 'Configure for backend', body: 'Set up a backend engineering profile with frameworks for API design, database optimization, and distributed systems.' },
      { title: 'Record the interview', body: 'ExtraBrain transcribes the conversation and captures screen context from terminals, code editors, and architecture diagrams.' },
      { title: 'Review and prepare', body: 'After the interview, review system design decisions, code approaches, and areas to strengthen for the next round.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with API design interviews?', answer: 'Yes. ExtraBrain captures the interview conversation and helps structure discussions about REST endpoints, authentication, rate limiting, and API versioning.' },
      { question: 'Does ExtraBrain support distributed systems interviews?', answer: 'Yes. ExtraBrain helps organize discussions about scalability, consistency models, caching strategies, and service architecture.' },
      { question: 'Can I use ExtraBrain for database interview questions?', answer: 'Yes. ExtraBrain captures screen context from SQL editors and database tools, and helps structure query optimization and schema design discussions.' },
    ],
  }),
];

export const platformPages: MarketingPage[] = [
  platformPage('platforms/coderpad', 'CoderPad', {
    title: 'CoderPad Interview Assistant — ExtraBrain',
    description: 'Use ExtraBrain as your AI copilot during CoderPad coding interviews. Live transcription, screen-aware context from CoderPad editors, and local-first privacy on Mac.',
    h1: 'CoderPad interview assistant.',
    lead: 'ExtraBrain runs alongside CoderPad as a local-first desktop copilot, capturing your interview conversation and reading screen context from the CoderPad editor while staying hidden from screen sharing.',
    howItWorks: 'ExtraBrain runs as a Mac desktop app alongside CoderPad. It captures your interview audio, reads visible code and problem statements from the CoderPad editor, and provides structured context without joining the call or modifying the CoderPad session.',
    whyExtraBrain: [
      { title: 'Screen-aware code context', body: 'ExtraBrain reads the visible CoderPad editor to understand the problem statement, your code, and test output in real time.' },
      { title: 'Hidden from screen sharing', body: 'ExtraBrain is designed to stay hidden from screen sharing on Zoom, Google Meet, and other platforms where CoderPad interviews happen.' },
      { title: 'Local-first privacy', body: 'With local Parakeet transcription and local Gemma 4, your interview session can stay on your Mac.' },
    ],
    faq: [
      { question: 'Does ExtraBrain work with CoderPad?', answer: 'Yes. ExtraBrain runs as a Mac desktop app alongside CoderPad, capturing screen context from the editor and transcribing the interview conversation.' },
      { question: 'Can CoderPad detect ExtraBrain?', answer: 'ExtraBrain is designed to stay hidden from screen sharing and screen recording. It does not modify or interact with the CoderPad browser session.' },
      { question: 'Is ExtraBrain free for CoderPad interviews?', answer: 'Yes. The core Mac app is free. Pro adds custom profiles and richer session history starting at $6.99/month.' },
    ],
  }),

  platformPage('platforms/hackerrank', 'HackerRank', {
    title: 'HackerRank Interview Assistant — ExtraBrain',
    description: 'Use ExtraBrain as your AI copilot during HackerRank coding interviews and assessments. Live transcription, screen context, and local-first privacy on Mac.',
    h1: 'HackerRank interview assistant.',
    lead: 'ExtraBrain runs alongside HackerRank as a local-first desktop copilot, capturing your interview conversation and reading screen context from the HackerRank coding environment.',
    howItWorks: 'ExtraBrain runs as a Mac desktop app alongside HackerRank. It captures your interview audio, reads visible problem statements and code from the HackerRank editor, and provides structured context throughout the session.',
    whyExtraBrain: [
      { title: 'Problem context capture', body: 'ExtraBrain reads the visible HackerRank problem statement, constraints, and your code to provide relevant context during the interview.' },
      { title: 'Stays hidden', body: 'ExtraBrain is designed to stay hidden from screen sharing on video platforms where HackerRank live interviews happen.' },
      { title: 'Local transcription', body: 'Use local Parakeet transcription so your interview audio stays on your Mac.' },
    ],
    faq: [
      { question: 'Does ExtraBrain work with HackerRank?', answer: 'Yes. ExtraBrain runs as a Mac desktop app alongside HackerRank, capturing screen context from the coding environment and transcribing the interview.' },
      { question: 'Can HackerRank detect ExtraBrain?', answer: 'ExtraBrain is designed to stay hidden from screen sharing and screen recording. It does not modify or interact with the HackerRank browser session.' },
      { question: 'Does ExtraBrain work with HackerRank assessments?', answer: 'ExtraBrain captures screen context from any visible application. For timed HackerRank assessments, follow all assessment rules and use ExtraBrain responsibly.' },
    ],
  }),

  platformPage('platforms/codesignal', 'CodeSignal', {
    title: 'CodeSignal Interview Assistant — ExtraBrain',
    description: 'Use ExtraBrain as your AI copilot during CodeSignal coding interviews. Live transcription, screen-aware context, and local-first privacy on Mac.',
    h1: 'CodeSignal interview assistant.',
    lead: 'ExtraBrain runs alongside CodeSignal as a local-first desktop copilot, capturing your interview conversation and reading screen context from the CodeSignal environment.',
    howItWorks: 'ExtraBrain runs as a Mac desktop app alongside CodeSignal. It captures your interview audio, reads visible code and problem statements from the CodeSignal editor, and provides structured context without modifying the CodeSignal session.',
    whyExtraBrain: [
      { title: 'Screen-aware context', body: 'ExtraBrain reads the visible CodeSignal editor to understand problem statements, your code, and test results in real time.' },
      { title: 'Hidden from screen sharing', body: 'ExtraBrain is designed to stay hidden from screen sharing on the video platforms where CodeSignal interviews happen.' },
      { title: 'BYO providers', body: 'Connect your own OpenAI, Anthropic, or compatible AI provider for analysis during the session.' },
    ],
    faq: [
      { question: 'Does ExtraBrain work with CodeSignal?', answer: 'Yes. ExtraBrain runs as a Mac desktop app alongside CodeSignal, capturing screen context and transcribing the interview conversation.' },
      { question: 'Can CodeSignal detect ExtraBrain?', answer: 'ExtraBrain is designed to stay hidden from screen sharing and screen recording. It does not interact with the CodeSignal browser session.' },
      { question: 'Is ExtraBrain free for CodeSignal interviews?', answer: 'Yes. The core Mac app is free. Pro adds custom profiles and session history starting at $6.99/month.' },
    ],
  }),

  platformPage('platforms/zoom', 'Zoom', {
    title: 'Zoom Interview and Meeting Assistant — ExtraBrain',
    description: 'Use ExtraBrain as your AI copilot during Zoom interviews and meetings. Live transcription, screen-aware context, hidden from screen sharing on Mac.',
    h1: 'Zoom meeting and interview copilot.',
    lead: 'ExtraBrain runs alongside Zoom as a local-first desktop copilot, transcribing your calls, capturing screen context, and staying hidden from Zoom screen sharing.',
    howItWorks: 'ExtraBrain runs as a Mac desktop app during Zoom calls. It captures system audio for transcription, reads visible screen content, and provides structured context throughout interviews and meetings without joining as a Zoom participant.',
    whyExtraBrain: [
      { title: 'No meeting bot', body: 'ExtraBrain does not join Zoom as a participant. It runs locally on your Mac and captures audio from the system output.' },
      { title: 'Hidden from screen sharing', body: 'ExtraBrain is designed to stay hidden when you share your screen on Zoom.' },
      { title: 'Live transcription', body: 'Get real-time transcription of your Zoom calls with local Parakeet or optional Deepgram, independent of the built-in Zoom transcription.' },
    ],
    faq: [
      { question: 'Does ExtraBrain work with Zoom?', answer: 'Yes. ExtraBrain runs as a Mac desktop app alongside Zoom, capturing audio and screen context without joining the call as a participant.' },
      { question: 'Is ExtraBrain hidden during Zoom screen sharing?', answer: 'ExtraBrain is designed to stay hidden from Zoom screen sharing and screen recording.' },
      { question: 'Does ExtraBrain replace Zoom transcription?', answer: 'ExtraBrain provides its own transcription with local Parakeet or Deepgram. You can use it alongside or instead of the built-in Zoom transcription.' },
    ],
  }),

  platformPage('platforms/google-meet', 'Google Meet', {
    title: 'Google Meet Interview and Meeting Copilot — ExtraBrain',
    description: 'Use ExtraBrain as your AI copilot during Google Meet interviews and meetings. Live transcription, screen-aware context, hidden from screen sharing on Mac.',
    h1: 'Google Meet meeting and interview copilot.',
    lead: 'ExtraBrain runs alongside Google Meet as a local-first desktop copilot, transcribing your calls, capturing screen context, and staying hidden from Google Meet screen sharing.',
    howItWorks: 'ExtraBrain runs as a Mac desktop app during Google Meet calls. It captures system audio for transcription, reads visible screen content, and provides structured analysis without joining as a meeting participant.',
    whyExtraBrain: [
      { title: 'No meeting bot', body: 'ExtraBrain does not join Google Meet as a participant. It runs locally on your Mac and captures audio from the system output.' },
      { title: 'Hidden from screen sharing', body: 'ExtraBrain is designed to stay hidden when you present your screen on Google Meet.' },
      { title: 'Private transcription', body: 'Get transcription of Google Meet calls with local Parakeet, independent of the Google transcription features.' },
    ],
    faq: [
      { question: 'Does ExtraBrain work with Google Meet?', answer: 'Yes. ExtraBrain runs as a Mac desktop app alongside Google Meet, capturing audio and screen context without joining as a participant.' },
      { question: 'Is ExtraBrain hidden during Google Meet presentations?', answer: 'ExtraBrain is designed to stay hidden from screen sharing and screen recording on Google Meet.' },
      { question: 'Can I use ExtraBrain for Google Meet interviews?', answer: 'Yes. ExtraBrain provides live transcription, screen-aware context, and structured analysis during interviews and meetings on Google Meet.' },
    ],
  }),

  platformPage('platforms/microsoft-teams', 'Microsoft Teams', {
    title: 'Microsoft Teams Meeting Copilot — ExtraBrain',
    description: 'Use ExtraBrain as your AI copilot during Microsoft Teams meetings and interviews. Live transcription, screen-aware context, hidden from screen sharing on Mac.',
    h1: 'Microsoft Teams meeting copilot.',
    lead: 'ExtraBrain runs alongside Microsoft Teams as a local-first desktop copilot, transcribing your calls, capturing screen context, and staying hidden from Teams screen sharing.',
    howItWorks: 'ExtraBrain runs as a Mac desktop app during Microsoft Teams calls. It captures system audio for transcription, reads visible screen content, and provides structured analysis without joining as a Teams participant.',
    whyExtraBrain: [
      { title: 'No meeting bot', body: 'ExtraBrain does not join Teams as a participant. It runs locally on your Mac and captures audio from the system output.' },
      { title: 'Hidden from screen sharing', body: 'ExtraBrain is designed to stay hidden when you share your screen on Microsoft Teams.' },
      { title: 'Works with Mac Teams app', body: 'ExtraBrain captures audio from the Teams desktop app or browser version on Mac.' },
    ],
    faq: [
      { question: 'Does ExtraBrain work with Microsoft Teams?', answer: 'Yes. ExtraBrain runs as a Mac desktop app alongside Microsoft Teams, capturing audio and screen context without joining as a participant.' },
      { question: 'Is ExtraBrain hidden during Teams screen sharing?', answer: 'ExtraBrain is designed to stay hidden from screen sharing and screen recording on Microsoft Teams.' },
      { question: 'Can I use ExtraBrain for Teams meetings?', answer: 'Yes. ExtraBrain provides live transcription, screen-aware context, and post-meeting summaries for Teams calls.' },
    ],
  }),

  platformPage('platforms/leetcode', 'LeetCode', {
    title: 'LeetCode Interview Practice Assistant — ExtraBrain',
    description: 'Use ExtraBrain as your AI copilot while practicing LeetCode problems. Live screen context, structured problem analysis, and local-first privacy on Mac.',
    h1: 'LeetCode practice and interview copilot.',
    lead: 'ExtraBrain reads LeetCode problem statements and your code from the screen, provides structured analysis for algorithms and data structures, and helps you review practice sessions.',
    howItWorks: 'ExtraBrain runs as a Mac desktop app alongside LeetCode in your browser. It reads the visible problem statement, constraints, and your code to provide structured context for approaching algorithms, data structures, and optimization questions.',
    whyExtraBrain: [
      { title: 'Problem context', body: 'ExtraBrain reads the visible LeetCode problem, constraints, examples, and your code to understand the full context.' },
      { title: 'Practice and interview', body: 'Use ExtraBrain for solo LeetCode practice sessions and during live coding interviews that use LeetCode-style problems.' },
      { title: 'Session history', body: 'Review past practice sessions with saved problem context, your approach, and analysis for each problem.' },
    ],
    faq: [
      { question: 'Does ExtraBrain work with LeetCode?', answer: 'Yes. ExtraBrain captures screen context from LeetCode in your browser, reading problem statements, constraints, and your code.' },
      { question: 'Can ExtraBrain help me practice LeetCode?', answer: 'Yes. ExtraBrain provides structured analysis of algorithm and data structure problems, helping you practice more effectively.' },
      { question: 'Does ExtraBrain solve LeetCode problems for me?', answer: 'ExtraBrain provides structured context and analysis to support your thinking. It does not submit solutions or interact with LeetCode directly.' },
    ],
  }),
];

export const companyGuidePages: MarketingPage[] = [
  companyGuidePage('interview-guides/openai', 'OpenAI', {
    description: 'Prepare for OpenAI software engineering and research interviews with ExtraBrain. Live AI copilot for coding, system design, and research discussions on Mac.',
    lead: 'OpenAI interviews typically include coding rounds, system design discussions, and research-oriented conversations. ExtraBrain helps you prepare and perform with live transcription, screen-aware context, and structured analysis.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Algorithm and data structure problems with emphasis on Python, clean code, and computational thinking.' },
      { title: 'System design', body: 'Large-scale system design with focus on ML infrastructure, data pipelines, and distributed training systems.' },
      { title: 'Research discussion', body: 'Conversations about your technical background, research contributions, and approach to novel ML problems.' },
    ],
    howExtraBrainHelps: [
      { title: 'Live coding support', body: 'ExtraBrain captures your interview conversation and screen context from coding environments, helping you structure solutions.' },
      { title: 'System design capture', body: 'Record and review system design discussions with saved architecture diagrams, tradeoff analysis, and follow-up notes.' },
      { title: 'Post-interview review', body: 'Review each round with saved transcripts, analysis, and improvement suggestions for your next interview.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with OpenAI interviews?', answer: 'Yes. ExtraBrain provides live transcription, screen-aware context, and structured analysis for coding, system design, and research interview rounds.' },
      { question: 'What rounds does OpenAI typically have?', answer: 'OpenAI interviews typically include coding rounds, system design, research discussions, and behavioral conversations. Exact formats may vary by role and team.' },
      { question: 'Is ExtraBrain free for interview prep?', answer: 'Yes. The core Mac app is free. Pro adds custom profiles and richer session history starting at $6.99/month.' },
    ],
  }),

  companyGuidePage('interview-guides/anthropic', 'Anthropic', {
    description: 'Prepare for Anthropic software engineering and research interviews with ExtraBrain. Live AI copilot for coding, alignment, and technical discussions on Mac.',
    lead: 'Anthropic interviews typically include coding assessments, technical discussions about AI safety and alignment, and system design conversations. ExtraBrain helps you prepare with live context and post-session review.',
    whatToExpect: [
      { title: 'Coding assessments', body: 'Algorithm problems and practical coding tasks with emphasis on Python and clear problem-solving approaches.' },
      { title: 'Technical discussions', body: 'Conversations about AI safety, alignment research, interpretability, and your approach to responsible AI development.' },
      { title: 'System design', body: 'Design discussions around ML infrastructure, evaluation pipelines, and large language model training systems.' },
    ],
    howExtraBrainHelps: [
      { title: 'Coding capture', body: 'ExtraBrain captures your coding environment and interview conversation, helping you focus on solving problems.' },
      { title: 'Technical discussion notes', body: 'Record nuanced AI safety and alignment discussions with full transcription and structured follow-up analysis.' },
      { title: 'Session review', body: 'Review each round with saved context, identify knowledge gaps, and prepare targeted follow-up material.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Anthropic interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for coding, technical discussion, and system design rounds.' },
      { question: 'What does Anthropic typically ask in interviews?', answer: 'Anthropic interviews may include coding, AI safety and alignment discussions, system design, and behavioral rounds. Formats vary by role.' },
      { question: 'Is ExtraBrain useful for AI safety discussions?', answer: 'Yes. ExtraBrain captures the full conversation with transcription and helps you organize complex technical discussions about alignment and interpretability.' },
    ],
  }),

  companyGuidePage('interview-guides/google', 'Google', {
    description: 'Prepare for Google software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and Googleyness interviews on Mac.',
    lead: 'Google interviews include coding rounds, system design, and behavioral (Googleyness and Leadership) discussions. ExtraBrain helps you prepare and perform with live transcription and structured analysis.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Multiple coding interviews testing algorithms, data structures, and problem-solving with emphasis on optimal solutions and clean code.' },
      { title: 'System design', body: 'Design interviews for large-scale distributed systems, covering scalability, reliability, and performance tradeoffs.' },
      { title: 'Googleyness and Leadership', body: 'Behavioral interviews assessing collaboration, leadership, navigating ambiguity, and cultural fit.' },
    ],
    howExtraBrainHelps: [
      { title: 'Multi-round support', body: 'Use ExtraBrain across multiple coding and design rounds with separate session profiles and post-round review.' },
      { title: 'System design capture', body: 'Record system design discussions with architecture context, capacity estimates, and tradeoff analysis.' },
      { title: 'Behavioral prep', body: 'Practice and review behavioral answers with transcription and structured follow-up suggestions.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Google coding interviews?', answer: 'Yes. ExtraBrain captures your coding environment and interview conversation, providing structured analysis for algorithm and data structure problems.' },
      { question: 'How many rounds does Google have?', answer: 'Google typically has multiple coding rounds, a system design round, and Googleyness and Leadership behavioral rounds. The exact number varies by level and role.' },
      { question: 'Does ExtraBrain work for Google system design?', answer: 'Yes. ExtraBrain captures system design discussions with live transcription and screen context from diagram tools, whiteboards, and shared documents.' },
    ],
  }),

  companyGuidePage('interview-guides/meta', 'Meta', {
    description: 'Prepare for Meta (Facebook) software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and behavioral interviews on Mac.',
    lead: 'Meta interviews include coding rounds, system design, and behavioral discussions. ExtraBrain helps you prepare with live transcription, screen-aware context, and post-session review.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Algorithm and data structure problems with emphasis on efficient solutions, edge cases, and communication of your approach.' },
      { title: 'System design', body: 'Design interviews for Meta-scale social, messaging, and content systems with emphasis on scalability and reliability.' },
      { title: 'Behavioral', body: 'Questions about past experiences, leadership, conflict resolution, and alignment with the Meta values.' },
    ],
    howExtraBrainHelps: [
      { title: 'Coding support', body: 'ExtraBrain captures coding interview context and helps you structure your approach to algorithm problems.' },
      { title: 'Design context', body: 'Record system design discussions about feed ranking, messaging infrastructure, and content delivery with full transcription.' },
      { title: 'Behavioral review', body: 'Practice and review behavioral answers with saved session context and structured improvement suggestions.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Meta interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for Meta coding, system design, and behavioral interview rounds.' },
      { question: 'What type of system design does Meta ask?', answer: 'Meta system design often covers social graphs, news feed ranking, messaging, content delivery, and real-time systems at massive scale.' },
      { question: 'Does ExtraBrain work for Meta behavioral rounds?', answer: 'Yes. ExtraBrain captures behavioral conversations with full transcription, helping you review and refine your stories.' },
    ],
  }),

  companyGuidePage('interview-guides/amazon', 'Amazon', {
    description: 'Prepare for Amazon software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and Leadership Principles interviews on Mac.',
    lead: 'Amazon interviews include coding rounds, system design, and Leadership Principles behavioral discussions. ExtraBrain helps you prepare with live transcription and structured analysis for each round.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Algorithm and data structure problems with emphasis on time and space complexity analysis.' },
      { title: 'System design', body: 'Design interviews covering AWS-scale distributed systems, microservices, and data pipelines.' },
      { title: 'Leadership Principles', body: 'Behavioral questions centered on the Amazon Leadership Principles like Customer Obsession, Ownership, and Dive Deep.' },
    ],
    howExtraBrainHelps: [
      { title: 'LP story practice', body: 'Record and review your Leadership Principles stories with transcription, structured STAR format analysis, and improvement suggestions.' },
      { title: 'Coding support', body: 'ExtraBrain captures coding interview context and helps you communicate complexity analysis and tradeoffs.' },
      { title: 'Multi-round tracking', body: 'Track your performance across the Amazon loop of interviews with separate sessions and post-loop review.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Amazon interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for coding, system design, and Leadership Principles rounds.' },
      { question: 'How should I prepare for Amazon Leadership Principles?', answer: 'Practice STAR-format stories for each Leadership Principle. ExtraBrain can record your practice sessions and help you review and refine your answers.' },
      { question: 'Does Amazon use a loop interview format?', answer: 'Yes. Amazon typically conducts a loop of back-to-back interviews covering coding, system design, and Leadership Principles. ExtraBrain helps you track each session.' },
    ],
  }),

  companyGuidePage('interview-guides/microsoft', 'Microsoft', {
    description: 'Prepare for Microsoft software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and behavioral interviews on Mac.',
    lead: 'Microsoft interviews include coding rounds, system design, and behavioral discussions focused on growth mindset and collaboration. ExtraBrain helps with live transcription and post-session review.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Algorithm, data structure, and practical coding problems with emphasis on clean, working code and communication.' },
      { title: 'System design', body: 'Design discussions about cloud infrastructure, Azure-scale systems, and enterprise software architecture.' },
      { title: 'Behavioral', body: 'Questions about growth mindset, teamwork, handling ambiguity, and leadership experiences.' },
    ],
    howExtraBrainHelps: [
      { title: 'Coding context', body: 'ExtraBrain captures your coding environment and interview conversation for structured problem-solving support.' },
      { title: 'Design capture', body: 'Record system design discussions with architecture diagrams, tradeoff analysis, and capacity planning notes.' },
      { title: 'Growth mindset prep', body: 'Practice and review behavioral answers focused on learning, collaboration, and handling setbacks.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Microsoft interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for Microsoft coding, system design, and behavioral rounds.' },
      { question: 'What does Microsoft look for in interviews?', answer: 'Microsoft typically evaluates coding ability, system design skills, growth mindset, collaboration, and communication. Formats vary by team and level.' },
      { question: 'Does ExtraBrain work for Azure system design?', answer: 'Yes. ExtraBrain captures system design discussions about cloud infrastructure, distributed systems, and enterprise architecture.' },
    ],
  }),

  companyGuidePage('interview-guides/apple', 'Apple', {
    description: 'Prepare for Apple software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and technical depth interviews on Mac.',
    lead: 'Apple interviews include coding rounds, system design, and deep technical discussions about your domain expertise. ExtraBrain helps you prepare with live transcription and structured review.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Algorithm and data structure problems with attention to code quality, edge cases, and practical engineering judgment.' },
      { title: 'System design', body: 'Design interviews covering Apple-scale systems, performance optimization, and platform-specific architecture.' },
      { title: 'Technical depth', body: 'Deep dives into your specific domain: frameworks, language internals, performance, and engineering tradeoffs.' },
    ],
    howExtraBrainHelps: [
      { title: 'Domain prep', body: 'Create profiles for your specific technical domain and practice deep-dive questions with recorded sessions.' },
      { title: 'Coding support', body: 'ExtraBrain captures coding interview context with screen-aware support for your development environment.' },
      { title: 'Post-round review', body: 'Review each interview round with saved context, identify areas for deeper preparation, and refine your approach.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Apple interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for Apple coding, system design, and technical depth rounds.' },
      { question: 'What is unique about Apple interviews?', answer: 'Apple interviews often emphasize deep technical knowledge in your specific domain, code quality, and attention to detail alongside standard coding and design rounds.' },
      { question: 'Does ExtraBrain run natively on Apple Silicon?', answer: 'Yes. ExtraBrain is a native Mac app that supports both Apple Silicon and Intel Macs.' },
    ],
  }),

  companyGuidePage('interview-guides/stripe', 'Stripe', {
    description: 'Prepare for Stripe software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and integration design interviews on Mac.',
    lead: 'Stripe interviews include coding rounds, system design with emphasis on payments infrastructure, and practical integration exercises. ExtraBrain helps with live transcription and structured review.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Practical coding problems emphasizing clean code, API design, and real-world engineering problems over pure algorithm puzzles.' },
      { title: 'System design', body: 'Design discussions about payments infrastructure, financial systems, idempotency, and distributed transaction handling.' },
      { title: 'Integration exercise', body: 'Stripe may include hands-on coding with APIs, debugging existing code, or building a small integration.' },
    ],
    howExtraBrainHelps: [
      { title: 'Practical coding support', body: 'ExtraBrain captures screen context from code editors and terminal output during practical coding exercises.' },
      { title: 'Payments design capture', body: 'Record discussions about payment processing, fraud detection, and financial system architecture with full transcription.' },
      { title: 'Integration review', body: 'Review integration exercises with saved code context, API documentation references, and debugging steps.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Stripe interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for Stripe coding, system design, and integration rounds.' },
      { question: 'What makes Stripe interviews different?', answer: 'Stripe interviews often emphasize practical coding, API design, and real-world engineering problems alongside traditional algorithm and system design questions.' },
      { question: 'Does ExtraBrain work for debugging exercises?', answer: 'Yes. ExtraBrain captures screen context from your code editor and terminal, helping you track debugging steps and solution approaches.' },
    ],
  }),

  companyGuidePage('interview-guides/databricks', 'Databricks', {
    description: 'Prepare for Databricks software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and data platform interviews on Mac.',
    lead: 'Databricks interviews include coding rounds, system design focused on data platforms, and technical discussions about distributed computing. ExtraBrain helps with live transcription and review.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Algorithm and data structure problems with emphasis on distributed systems concepts and data processing patterns.' },
      { title: 'System design', body: 'Design interviews about data lakes, query engines, distributed storage, and large-scale data processing pipelines.' },
      { title: 'Technical depth', body: 'Discussions about Spark, distributed computing, data engineering, and platform architecture.' },
    ],
    howExtraBrainHelps: [
      { title: 'Data systems context', body: 'ExtraBrain captures discussions about data platform architecture, query optimization, and distributed processing with full transcription.' },
      { title: 'Coding support', body: 'Get screen-aware context from your coding environment during algorithm and data processing problems.' },
      { title: 'Session review', body: 'Review each round with saved context about data engineering concepts, design decisions, and areas for improvement.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Databricks interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for Databricks coding, system design, and technical discussion rounds.' },
      { question: 'What does Databricks ask about in system design?', answer: 'Databricks system design often covers data lakes, distributed storage, query engines, Spark architecture, and large-scale data processing pipelines.' },
      { question: 'Is ExtraBrain useful for data engineering interviews?', answer: 'Yes. ExtraBrain captures discussions about ETL pipelines, data modeling, distributed computing, and platform design with live context.' },
    ],
  }),

  companyGuidePage('interview-guides/netflix', 'Netflix', {
    description: 'Prepare for Netflix software engineering interviews with ExtraBrain. Live AI copilot for coding, system design, and culture fit interviews on Mac.',
    lead: 'Netflix interviews include coding rounds, system design at streaming scale, and culture fit discussions around their values. ExtraBrain helps with live transcription and post-session review.',
    whatToExpect: [
      { title: 'Coding rounds', body: 'Algorithm and data structure problems with emphasis on practical engineering, performance, and code quality.' },
      { title: 'System design', body: 'Design discussions about streaming infrastructure, content delivery, recommendation systems, and microservices at Netflix scale.' },
      { title: 'Culture fit', body: 'Conversations about the Netflix culture values, including freedom and responsibility, context over control, and high performance.' },
    ],
    howExtraBrainHelps: [
      { title: 'Streaming design capture', body: 'Record discussions about CDN architecture, adaptive streaming, and recommendation systems with full transcription.' },
      { title: 'Coding support', body: 'ExtraBrain captures your coding environment and interview conversation for structured problem-solving context.' },
      { title: 'Culture prep', body: 'Practice and review culture fit answers focused on ownership, judgment, and decision-making.' },
    ],
    faq: [
      { question: 'Can ExtraBrain help with Netflix interviews?', answer: 'Yes. ExtraBrain provides live transcription and screen-aware context for Netflix coding, system design, and culture fit rounds.' },
      { question: 'What system design topics does Netflix cover?', answer: 'Netflix system design often covers streaming infrastructure, content delivery networks, recommendation engines, microservices, and resilience patterns.' },
      { question: 'Does Netflix have behavioral interviews?', answer: 'Netflix typically includes culture fit discussions centered on their values, including freedom and responsibility, context not control, and high performance.' },
    ],
  }),
];

export const seoMarketingPages: MarketingPage[] = [
  ...useCasePages,
  ...platformPages,
  ...companyGuidePages,
];
