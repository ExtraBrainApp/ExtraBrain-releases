---
title: "McKinsey Interview Questions: OA, Solve, PEI, Case, and Role-Specific Prep"
seoTitle: "McKinsey Interview Questions and Prep Guide for OA, Solve, PEI, and Case Interviews"
description: "A practical McKinsey interview prep guide covering recruiter screens, OA questions, Solve, PEI stories, case drills, and role-specific questions."
publishDate: 2026-02-17
updatedDate: ""
author: "ExtraBrain"
tags:
  - "McKinsey Interview"
  - "Consulting Interviews"
  - "Case Interview"
  - "Behavioral Interview"
seoTags:
  - "mckinsey interview questions"
  - "mckinsey pei questions"
  - "mckinsey case interview"
  - "mckinsey solve game"
  - "mckinsey online assessment"
sourceUrl: "exports/interview-questions/mckinsey-interview-questions.md"
canonicalUrl: "https://extrabrain.app/interview-questions/mckinsey-interview-questions-extrabrain/"
importedAt: "2026-06-25T21:43:46.889Z"
ogImage: "/assets/blog-covers/15-private-interview-notes.webp"
ogImageAlt: ""
draft: false
---

McKinsey interviews can feel exhausting because the process tests several different muscles at once.
You may need to explain your motivation, solve a technical or analytical assessment, think through the McKinsey Solve game, tell detailed Personal Experience Interview stories, and work through interviewer-led cases.
This guide rewrites one complete McKinsey interview experience into a practical ExtraBrain prep article for candidates who want a clearer map of what to expect.

Use this as a preparation guide, not as permission to violate assessment, interview, employer, school, or platform rules.
If you use ExtraBrain during prep or any live session, use it only where AI assistance, transcription, screenshots, and notes are allowed.

## Key takeaways

- Prepare for McKinsey as a multi-stage process, not as one generic consulting interview.
- Expect recruiter screening, a technical or analytical online assessment for some roles, McKinsey Solve, Personal Experience Interview questions, case interviews, and final-round partner conversations.
- Build several strong PEI stories before the interview, because McKinsey often probes deeply into one situation rather than asking many shallow behavioral questions.
- Practice case interviews by clarifying the objective, structuring your thinking, doing clean math, interpreting charts, and tying every answer back to the client decision.
- For technical or analytics roles, prepare SQL, algorithms, JavaScript basics, REST API calls, and technical project storytelling.
- Use AI tools responsibly for practice, mock interviews, transcript review, and answer structure, not for deception or prohibited assistance.

## The McKinsey interview process at a glance

The exact process can vary by role, office, country, and recruiting channel.
A common path includes an initial recruiter conversation, one or more assessments, first-round interviews, and final-round interviews with senior interviewers or partners.

### Initial recruiter contact

The first step is usually a recruiter reach-out or HR pre-talk.
This conversation checks your background, communication style, motivation for consulting, interest in McKinsey, and basic fit for the role.

Common recruiter screen questions include:

- Walk me through your background.
- Why McKinsey?
- Why consulting?
- Why this office or role?
- What kind of work are you most interested in doing?
- What is your timeline and availability?

A strong answer should be specific.
Avoid saying only that McKinsey is prestigious.
Connect your answer to problem solving, client impact, learning curve, industry exposure, and the specific role you are pursuing.

### Online assessment

Some candidates, especially for technical, analytics, or early-career roles, may receive an online assessment.
The source interview experience included four types of tasks: SQL, an algorithm problem, a JavaScript challenge, and a REST API question.

The main skill being tested is not just syntax.
McKinsey wants to see whether you can read requirements carefully, structure the problem, handle unfamiliar material, and produce a working answer under time pressure.

### McKinsey Solve or Imbellus-style assessment

Many candidates encounter McKinsey Solve, formerly associated with the Imbellus assessment.
This can feel different from a normal aptitude test because it resembles a simulation or game-based problem-solving environment.

The reported formats included Ecosystem Building, Redrock Island, and Sea Wolf-style scenarios.
Formats can change, so use these examples as prep context rather than a promise about your exact test.

### First-round interviews

A first round often combines PEI and case interviews.
For some technical or data-focused roles, one interview may include a Technical Experience Interview where you describe a technical project in depth.

The PEI portion evaluates behavior, motivation, interpersonal judgment, leadership, resilience, and learning.
The case portion evaluates structured thinking, business judgment, quantitative reasoning, and communication.

### Final-round interviews

Final rounds may involve several interviews with partners or senior leaders.
Each interview can include a PEI section and a case section.
Some candidates are told to expect more role-specific problem-solving scenarios, but the actual interview can still look like a traditional PEI plus business case.

## McKinsey online assessment questions

The online assessment described in the source experience had four parts: SQL, algorithmic reasoning, plain JavaScript, and REST API usage.
For technical and analytics candidates, this mix is worth practicing because it tests practical coding range rather than only one language.

### SQL question: advertising system failures report

The SQL task centered on an advertising system.
The goal was to find customers with more than three failure events and report each qualifying customer name with its number of failures.

The data was spread across three tables:

- `customers`
- `campaigns`
- `events`

A strong solution would typically join customers to campaigns, campaigns to events, filter for failure events, group by customer, count failures, and use a `HAVING` clause to keep only customers above the threshold.
A Common Table Expression can make the query easier to read if the logic becomes layered.

Practice prompts like this by writing the query in stages.
First confirm the grain of each table.
Then identify the join keys.
Then decide whether you need `WHERE`, `GROUP BY`, `HAVING`, or a CTE.

### Algorithm question: extraordinary substrings

The algorithm problem was described as Extraordinary Substrings.
The task used a custom mapping from letters to digits, such as assigning the same value to small groups of alphabet letters.
The goal was to count substrings where the mapped value sum is divisible by the substring length.

A brute-force solution can be acceptable for small inputs, but you should understand the complexity.
For each start index, you can expand the end index, maintain a running sum, calculate the current length, and test divisibility.
If constraints are large, discuss possible optimizations rather than silently assuming brute force is enough.

When practicing this type of question, explain your reasoning out loud:

1. Define how each character maps to a value.
2. Decide how to enumerate candidate substrings.
3. Maintain a running sum to avoid recalculating each substring from scratch.
4. Count a substring when `sum % length === 0`.
5. Analyze time and space complexity.

### JavaScript question: button rendering and click handlers

The frontend task was to create 20 buttons with plain JavaScript and attach an `alert` to each button when clicked.
No framework was allowed.

This question checks DOM manipulation, loops, closures or block scoping, and event listeners.
A clean solution would select a container, clear existing content if appropriate, create buttons with `document.createElement`, set labels, attach click handlers, and append them to the page.

Avoid relying only on `innerHTML` if you can create elements directly.
Direct element creation is easier to reason about and avoids mixing markup strings with behavior.

### REST API question: university country list

The REST API task involved calling an API to retrieve universities by country.
The candidate needed to make an HTTP request, parse JSON, handle response data, and return or display the requested list.

In Python, this usually means knowing how to use `requests.get`, pass query parameters, check the status code, call `.json()`, and extract the relevant fields.
In JavaScript, the equivalent practice path is `fetch`, `await response.json()`, and error handling.

For interviews, practice explaining the failure cases too.
Mention invalid country input, non-200 responses, network errors, unexpected JSON shape, and empty results.

## McKinsey Solve and Imbellus-style questions

McKinsey Solve is designed to evaluate how you think through unfamiliar systems.
It is not only about whether you know a formula.
It tests data extraction, prioritization, tradeoffs, pattern recognition, and decision-making under constraints.

### Ecosystem Building

In the reported Ecosystem Building scenario, candidates selected a terrain such as mountain or ocean.
They then chose 8 species from a larger pool and built a viable food chain.

The practical preparation skill is constraint management.
You need to track which species can survive in the environment, which species eat or are eaten by others, and whether the chain is balanced.

### Redrock Island

In the reported Redrock Island format, candidates analyzed provided information, extracted useful data, and used it to answer business-performance questions.
The task included calculations and fill-in-the-blank report fields.

Treat this like a mini-case with a strict interface.
Read the objective first.
Then identify which data matters.
Then calculate carefully and place answers in the required format.

### Sea Wolf-style scenario

The reported Sea Wolf-style task involved polluted sites and microorganism choices.
Candidates selected microorganisms whose average attributes and overall characteristics matched site requirements.

The transferable skill is matching a portfolio of options to a target profile.
Create a simple table, compare attributes, avoid over-optimizing one dimension, and keep the overall requirement in mind.

## McKinsey PEI questions

The Personal Experience Interview is one of the most important parts of the McKinsey process.
It is a deep behavioral interview, not a casual resume chat.
McKinsey may ask one main PEI question and then spend significant time probing details, actions, tradeoffs, and personal reflection.

### McKinsey PEI format

Prepare three to four strong stories before the interview.
Each story should be detailed enough to support follow-up questions.
It should include context, stakes, obstacles, your specific actions, results, and reflection.

Use the STAR structure as a baseline:

- Situation: What was happening?
- Task: What were you responsible for?
- Action: What did you personally do?
- Result: What changed because of your work?

For McKinsey, add a reflection layer.
Explain what you learned, what you would do differently, and how the story shows the trait being tested.

### Connection theme

Connection questions evaluate whether you can build trust, handle disagreement, and work productively with people who see the problem differently.

Example questions:

- Tell me about a challenging situation where you worked with someone who had an opposing opinion.
- Describe a time you had to influence someone without authority.
- Give an example of building trust with a difficult stakeholder.

A strong answer should include respectful debate.
Do not make the other person sound foolish.
Show how you listened, reframed the problem, found shared goals, and moved the work forward.

### Drive theme

Drive questions evaluate resilience, high standards, persistence, and judgment under pressure.

Example questions:

- Tell me about a time you worked hard to achieve excellence in tough circumstances.
- Describe a time you faced a major obstacle and kept going.
- Give an example of taking ownership when the path was unclear.

A strong answer should include real constraints.
Show what made the goal difficult, what options you considered, what tradeoffs you made, and how you measured success.

### Leadership theme

Leadership questions evaluate how you motivate people, navigate complexity, and create progress through others.

Example questions:

- Share an example where you worked effectively with people from different backgrounds despite challenges.
- Tell me about a time you led a team through ambiguity.
- Describe a moment when you helped someone else perform at their best.

Even if you were not the official manager, you can show leadership through coordination, clarity, empathy, decision-making, and accountability.

### Growth theme

Growth questions evaluate learning agility, openness to feedback, and ability to change your approach.

Example questions:

- Tell me about a time you had to rapidly learn something new to tackle a difficult situation.
- Describe feedback that changed how you work.
- Give an example of failing, adapting, and improving.

The best growth stories are specific.
Do not say only that you learned to communicate better.
Show the feedback, the old behavior, the new behavior, and the result.

## PEI answer techniques that work well

Do not underestimate PEI preparation.
Many candidates spend too much time memorizing case frameworks and too little time preparing personal stories.

Choose stories with real complexity.
A story with a few twists, a difficult stakeholder, a changing constraint, or an unexpected obstacle gives the interviewer more substance to probe.

Use first-person language.
McKinsey wants to understand what you did, thought, decided, and learned.
Avoid hiding behind "we" for the most important actions.

End each story with a clear result and a brief reflection.
The reflection should sound mature and specific, not generic.

Practice with someone unfamiliar with the situation.
If they cannot understand the context quickly, your setup is probably too vague or too full of internal jargon.

ExtraBrain can help in preparation by recording mock answers, transcribing them, and letting you review whether your story has a clear setup, personal actions, measurable result, and reflection.
Use it responsibly and only in settings where recording and AI assistance are permitted.

## McKinsey case interview questions

McKinsey case interviews are often interviewer-led.
That means the interviewer may guide you through a sequence of questions rather than expecting you to drive the entire case from beginning to end.
Still, you need to stay structured and tie each answer back to the client objective.

### Case interview format

A typical case flow may include:

1. Business problem introduction.
2. Clarifying questions.
3. Initial structure or framework.
4. Quantitative analysis.
5. Chart or exhibit interpretation.
6. Brainstorming or hypothesis generation.
7. Recommendation or synthesis.

Before answering, make sure you understand the actual question.
It is acceptable to take a moment to think.
It is better to pause and structure than to start speaking without a plan.

### Case questions and framework questions can differ

One common trap is confusing the overall case objective with the immediate framework prompt.
For example, the overall case may ask whether a client should enter a new market.
The framework prompt may ask what cost factors the client should consider before entering that market.

Answer the prompt you were asked, but keep the broader decision in mind.
After each analysis step, connect your answer back to what it means for the client.

### Math questions

Many McKinsey math questions look more intimidating than they are.
The difficulty often comes from multiple numbers, units, and assumptions rather than complex formulas.

Write the formula first.
Then plug in numbers.
Then sanity-check the answer.
Then explain what the answer means for the client.

### Chart interpretation questions

When asked what you see in a chart, do not only describe the trend.
State the trend, quantify it if possible, explain a possible reason, and connect it to the client question.

A useful pattern is:

1. What changed?
2. How much did it change?
3. Why might it have changed?
4. So what should the client consider next?

### Non-traditional cases

McKinsey cases are not limited to profit, pricing, or market entry.
Practice non-profit, public sector, healthcare, education, sustainability, and operations cases.
These cases still require structure, math, judgment, and synthesis.

## Role-specific McKinsey interview questions

Different roles emphasize different examples.
Use the lists below to prepare targeted stories and practice answers.

### McKinsey analyst interview questions

- Why do you want to work at McKinsey?
- Tell me about a time you analyzed data to make a decision.
- How do you handle tight deadlines and multiple projects?
- Describe a time you turned an ambiguous problem into a clear work plan.
- Tell me about a recommendation you made based on evidence.

### McKinsey engineer interview questions

- Describe a technical challenge you solved.
- How do you explain complex technical concepts to non-technical people?
- Give an example of working with cross-functional teams.
- Tell me about a time you made a technical tradeoff.
- Walk me through a project where reliability, performance, or maintainability mattered.

### McKinsey data science interview questions

- Tell me about a model or analysis you built and how it affected a decision.
- How do you validate that an analysis is reliable?
- Describe a time your data was incomplete or messy.
- How would you explain model uncertainty to a client?
- Tell me about a technical project where business context changed your approach.

### McKinsey presentation designer interview questions

- How would you approach analyzing a new market for a client?
- Describe a time you transformed complex data into a compelling visual story.
- How do you ensure a presentation aligns with brand and messaging requirements?
- What tools and processes do you use to manage tight deadlines for multiple presentations?
- How would you communicate complex technical information to a non-technical client?

## How to prepare with ExtraBrain

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For McKinsey prep, the most useful workflow is before and after practice sessions.

### Use ExtraBrain for mock PEI practice

Record a mock PEI answer, then review the transcript.
Check whether your answer has a clear situation, a specific personal action, a result, and a reflection.
Ask ExtraBrain to help identify vague sections, missing stakes, overuse of "we," or places where the interviewer may probe.

### Use ExtraBrain for case practice review

During allowed practice sessions, use transcripts and notes to review your case communication.
Look for moments where you forgot the client objective, skipped a unit check, failed to state a hypothesis, or did not explain the "so what."

### Use ExtraBrain for technical interview drills

For technical McKinsey roles, use ExtraBrain to review mock explanations of SQL joins, algorithm complexity, API error handling, and project tradeoffs.
The goal is to improve your explanation quality, not to outsource your thinking.

### Use local-first settings when privacy matters

A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on configuration.
Review your settings before using any AI tool with sensitive interview or workplace information.

## Responsible-use note for McKinsey candidates

McKinsey interviews, online assessments, and game-based assessments may have strict rules.
Follow the instructions given by your recruiter, school, employer, assessment vendor, and interview platform.
Do not use AI assistance, transcription, screenshots, notes, or external help where it is not allowed.

The strongest use of ExtraBrain for McKinsey preparation is ethical practice: mock interviews, transcript review, structured feedback, story refinement, and post-session learning.
You remain responsible for your answers, conduct, and compliance with all applicable rules.

## FAQ

### Which McKinsey frameworks should I prepare?

Prepare 3C, 4P, value chain, profitability, market entry, issue trees, and public-sector style structures.
Do not memorize them mechanically.
Use them as building blocks to create a structure that fits the actual prompt.

### Is PEI or the case interview more important?

Treat both as equally important.
A polished case performance will not save an unconvincing PEI, and strong personal stories will not replace structured problem solving.

### Do I need a conclusion for every McKinsey answer?

For cases, you should synthesize when asked and tie analysis back to the client objective throughout the case.
For PEI stories, you should end with a result and reflection.
If you cannot produce a full final recommendation during a case, summarize what you know, what it implies, and what you would test next.

### How many PEI stories should I prepare?

Prepare at least three to four strong stories.
Each story should be flexible enough to support follow-up questions but specific enough to feel real.
Ideally, prepare stories across connection, drive, leadership, and growth themes.

### Can ExtraBrain generate McKinsey interview answers?

ExtraBrain can help generate answer outlines, STAR structures, technical explanations, and follow-up questions from practice transcripts and screen context.
Use it only where interview, employer, school, workplace, meeting, and platform rules allow AI assistance, transcription, screenshots, or notes.

### What is ExtraBrain?

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
It can support coding interviews, system design rounds, behavioral interviews, meetings, lectures, and research calls, with Windows and Linux planned.
