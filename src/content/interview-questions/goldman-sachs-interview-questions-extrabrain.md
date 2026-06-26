---
title: "Goldman Sachs Interview Questions and Preparation Guide for 2026"
seoTitle: "Goldman Sachs Interview Questions 2026: HireVue, Coding, Behavioral, and Superday Prep"
description: "Prepare for Goldman Sachs interviews with HireVue, coding, behavioral, Superday, division-specific questions, and responsible AI prep tips."
publishDate: 2026-04-17
updatedDate: ""
author: "ExtraBrain"
tags:
  - Goldman Sachs Interview
  - Interview Questions
  - Coding Interview
  - Behavioral Interview
  - HireVue
seoTags:
  - goldman-sachs-interview-questions
  - goldman-sachs-interview
  - goldman-sachs-hirevue
  - goldman-sachs-coding-interview
  - goldman-sachs-superday
sourceUrl: "exports/interview-questions/goldman-sachs-interview-questions.md"
canonicalUrl: "https://extrabrain.app/interview-questions/goldman-sachs-interview-questions-extrabrain/"
importedAt: "2026-06-25T20:18:54.314Z"
ogImage: "/assets/blog-covers/zoom-interview-ai-assistant-extrabrain.webp"
ogImageAlt: ""
draft: false
---

Goldman Sachs interviews can feel intimidating because they test more than whether you know the right answer.
For software engineering, analyst, risk, sales and trading, asset management, and investment banking roles, candidates are evaluated on clarity, judgment, structured thinking, ethics, and how well they communicate under pressure.

This guide rewrites a candidate-style Goldman Sachs interview experience into a practical ExtraBrain preparation article.
Use it to understand common question types, rehearse realistic answer structures, and prepare for HireVue, online assessments, phone screens, CoderPad rounds, and Superday interviews.

ExtraBrain can help you prepare by turning practice sessions into searchable transcripts, structuring behavioral answers, reviewing coding explanations, and helping you debrief after mock interviews.
Use any AI interview assistant only where interview, employer, school, workplace, and platform rules allow AI assistance, transcription, screenshots, or notes.

## Key Takeaways

- Goldman Sachs interview preparation should cover behavioral stories and technical execution.
- The HireVue stage rewards concise, natural answers that sound practiced but not memorized.
- Coding rounds often use familiar patterns such as sliding window, hash maps, strings, arrays, sorting, and simulation.
- Follow-up questions matter because interviewers want to see how you adapt when requirements change.
- Strong answers explain trade-offs, complexity, edge cases, and real-world constraints.
- Division-specific preparation matters because investment banking, sales and trading, asset management, and technology interviews emphasize different skills.
- Responsible preparation means practicing honestly and following every rule that applies to your interview or assessment.

## Goldman Sachs Interview Process Overview

The exact Goldman Sachs interview process depends on role, location, seniority, and hiring team.
For many candidates, the process includes an online application, a HireVue or recorded video interview, an online assessment for technical roles, one or more live technical or behavioral interviews, and a final Superday or panel round.

For software engineering candidates, the process often emphasizes coding, data structures, algorithms, system reasoning, previous projects, and behavioral judgment.
For finance and business candidates, the process may include market awareness, valuation, accounting, investment reasoning, case-style questions, and motivation for Goldman Sachs.

## Goldman Sachs Interview Question Types by Division

### Investment Banking Division Questions

Investment banking interviews usually focus on financial fundamentals and deal logic.
You may be asked to explain the three financial statements, discounted cash flow analysis, WACC, comparable company analysis, precedent transactions, accretion and dilution, or leveraged buyouts.

Strong answers show that you understand how the concepts connect.
For example, it is better to explain how a change in depreciation affects the income statement, balance sheet, and cash flow statement than to recite definitions without context.

Common investment banking questions include:

- Walk me through the three financial statements.
- How would a $10 increase in depreciation flow through the statements?
- Explain a DCF as if I were a new analyst.
- What drives WACC?
- How would you value a company with negative cash flow?
- Why Goldman Sachs and why investment banking?

### Sales and Trading Questions

Sales and trading interviews test market awareness, mental agility, and the ability to defend a view.
You may be asked to pitch a stock, discuss recent market movements, explain macro trends, or react to a sudden change in rates, inflation, commodities, or geopolitical risk.

You do not need a perfect prediction.
You do need a clear framework, a thesis, supporting evidence, risks to your view, and a reasoned conclusion.

Common sales and trading questions include:

- Pitch me a stock.
- What is one market trend you are watching right now?
- What happens to bond prices when interest rates rise?
- How would you hedge a portfolio exposed to energy prices?
- Tell me about a time you made a decision with incomplete information.

### Asset Management Questions

Asset management interviews usually focus on investment philosophy, portfolio construction, risk, and how you evaluate businesses.
Interviewers may ask about your personal portfolio, a company you like, a company you would avoid, or how you balance qualitative and quantitative signals.

Strong answers combine business understanding with valuation discipline.
Mentioning management quality, industry structure, competitive advantage, margins, cash flow, and downside risk can make an answer sound more mature.

Common asset management questions include:

- What is your investment philosophy?
- Describe a company you would buy and hold for five years.
- How do you think about risk?
- What makes a good management team?
- How would you evaluate whether a stock is expensive or cheap?

### Technology Division Questions

Technology interviews usually focus on coding, problem solving, system design, communication, and project ownership.
For software engineering roles, expect LeetCode-style problems, live coding, complexity analysis, edge-case discussion, and questions about how your solution would behave in production.

Goldman Sachs interviewers may also ask why you want to work in financial technology instead of a traditional consumer technology company.
A strong answer connects engineering impact to scale, reliability, data, risk systems, trading platforms, security, and regulated financial infrastructure.

Common technology questions include:

- Solve this coding problem and explain your reasoning.
- What is the time and space complexity?
- How would your solution change if the input were much larger?
- Tell me about a technical project you led.
- How do you debug a production issue?
- Why technology at Goldman Sachs?

### Behavioral and Situational Questions

Behavioral questions are not filler.
Goldman Sachs uses them to evaluate judgment, ownership, collaboration, resilience, integrity, and communication style.

Prepare stories that show real impact.
Avoid vague claims like "I am a team player" unless you can support them with a concrete situation, action, and result.

Common behavioral questions include:

- Tell me about yourself.
- Why Goldman Sachs?
- Describe a time you handled conflict on a team.
- Tell me about a time you received difficult feedback.
- Describe a project you are proud of.
- Tell me about a time you failed.
- What would you do if a manager asked for sensitive data that you were not sure you could share?
- A teammate disagrees with your approach and the deadline is close.
What do you do?

## Realistic Goldman Sachs Software Engineer Interview Questions

The following examples are based on common candidate-reported patterns for Goldman Sachs software engineering interviews.
They are useful for practice even when your exact questions differ.

### Stage 1: Online Assessment

The online assessment is often the first technical filter for engineering candidates.
Expect timed coding problems where implementation speed, edge-case handling, and pattern recognition matter.

#### Coding Question 1: Transaction Segments

Problem summary: given an array `transactionValues`, count the number of contiguous subarrays of length `k` that are strictly increasing.

A good approach is to use a sliding window over the current increasing run.
Instead of checking every subarray from scratch, track the length of the current strictly increasing sequence.
Each time the length reaches at least `k`, one valid subarray ending at the current index exists.

```python
def count_increasing_subarrays(nums, k):
    if k <= 0 or not nums:
        return 0

    count = 0
    run_length = 1

    if k == 1:
        return len(nums)

    for i in range(1, len(nums)):
        if nums[i] > nums[i - 1]:
            run_length += 1
        else:
            run_length = 1

        if run_length >= k:
            count += 1

    return count
```

Complexity: `O(n)` time and `O(1)` extra space.

Good follow-up points include:

- Explain how duplicates break strict increase.
- Handle `k == 1` explicitly.
- Discuss whether empty arrays or invalid `k` values are possible.
- Compare the optimized solution with the brute-force `O(nk)` approach.

#### Coding Question 2: Efficient Task Allocation

Problem summary: distribute task difficulties into three non-empty groups.
From each group, choose one value and compute `|d1 - d2| + |d2 - d3|`.
Reason about how to maximize the minimum value across possible choices.

This type of question is more important for reasoning than memorization.
If you do not immediately see an optimal solution, state assumptions, define the objective carefully, test small examples, and explain why brute force does not scale.

For small inputs, a brute-force baseline can clarify the problem:

```python
from itertools import product


def brute_force_task_allocation(difficulty):
    n = len(difficulty)
    best = float("-inf")

    for assignment in product(range(3), repeat=n):
        groups = [[], [], []]

        for index, group_id in enumerate(assignment):
            groups[group_id].append(difficulty[index])

        if any(not group for group in groups):
            continue

        worst_choice = float("inf")

        for d1 in groups[0]:
            for d2 in groups[1]:
                for d3 in groups[2]:
                    score = abs(d1 - d2) + abs(d2 - d3)
                    worst_choice = min(worst_choice, score)

        best = max(best, worst_choice)

    return best
```

Complexity: exponential in the number of tasks, so this is only a baseline.
In an interview, use it to validate examples, then discuss sorting, partition boundaries, binary search on feasibility, or other constraints once the interviewer clarifies input size.

### Stage 2: Phone or CoderPad Interview

Live coding rounds test communication as much as correctness.
You should explain your plan before typing, narrate edge cases, and check your solution with a simple example.

#### Coding Question 1: First Non-Repeating Character

Problem summary: return the first character in a string that appears exactly once.

```python
from collections import Counter


def first_unique_character(text):
    counts = Counter(text)

    for character in text:
        if counts[character] == 1:
            return character

    return None
```

Complexity: `O(n)` time and `O(m)` space, where `m` is the number of distinct characters.

Good follow-up points include:

- Clarify whether the input is ASCII, Unicode, or lowercase English letters only.
- Clarify whether returning `None`, `-1`, or an empty string is expected when no unique character exists.
- Explain why a two-pass solution is still linear.

#### Coding Question 2: Highest Average Score

Problem summary: given records of student or employee names and scores, return the highest average score.

```python
from collections import defaultdict


def highest_average(records):
    scores_by_name = defaultdict(list)

    for name, score in records:
        scores_by_name[name].append(score)

    best_average = float("-inf")

    for scores in scores_by_name.values():
        average = sum(scores) / len(scores)
        best_average = max(best_average, average)

    return best_average
```

A more memory-efficient version stores running totals and counts:

```python
from collections import defaultdict


def highest_average_streaming(records):
    totals = defaultdict(int)
    counts = defaultdict(int)

    for name, score in records:
        totals[name] += score
        counts[name] += 1

    return max(totals[name] / counts[name] for name in totals)
```

Good follow-up points include:

- Discuss whether scores are integers or floats.
- Clarify rounding requirements.
- Explain how you would handle an empty input.
- Mention the memory trade-off between storing all scores and storing totals.

### Stage 3: Superday or Final Rounds

The final rounds can combine coding, behavioral questions, project deep dives, and follow-up modifications.
Candidates often describe this stage as intense because interviewers may change requirements after the first working solution.

#### Coding Question 1: Longest Substring Without Repeating Characters

Problem summary: return the length of the longest substring without repeated characters.

```python
def length_of_longest_substring(text):
    seen = set()
    left = 0
    best = 0

    for right, character in enumerate(text):
        while character in seen:
            seen.remove(text[left])
            left += 1

        seen.add(character)
        best = max(best, right - left + 1)

    return best
```

Complexity: `O(n)` time and `O(m)` space, where `m` is the character set size.

Follow-up: return the actual substring instead of only the length.

```python
def longest_unique_substring(text):
    seen = set()
    left = 0
    best_start = 0
    best_length = 0

    for right, character in enumerate(text):
        while character in seen:
            seen.remove(text[left])
            left += 1

        seen.add(character)
        current_length = right - left + 1

        if current_length > best_length:
            best_start = left
            best_length = current_length

    return text[best_start:best_start + best_length]
```

Good follow-up points include:

- Explain why each pointer moves at most `n` times.
- Clarify behavior for an empty string.
- Discuss Unicode or case sensitivity if relevant.

#### Coding Question 2: Group Anagrams

Problem summary: group strings that contain the same letters.

```python
from collections import defaultdict


def group_anagrams(words):
    groups = defaultdict(list)

    for word in words:
        key = tuple(sorted(word))
        groups[key].append(word)

    return list(groups.values())
```

Complexity: `O(n * k log k)` time, where `n` is the number of words and `k` is the maximum word length.

A useful follow-up is to use a frequency-count key for lowercase English letters:

```python
from collections import defaultdict


def group_anagrams_lowercase(words):
    groups = defaultdict(list)

    for word in words:
        counts = [0] * 26

        for character in word:
            counts[ord(character) - ord("a")] += 1

        groups[tuple(counts)].append(word)

    return list(groups.values())
```

Good follow-up points include:

- Clarify whether case matters.
- Clarify whether punctuation or spaces are included.
- Compare sorting keys with frequency keys.
- Discuss preserving original input order inside each group.

#### Coding Question 3: Grid Movement Simulation

Problem summary: starting at `(0, 0)`, process commands `U`, `D`, `L`, and `R`, then return the final position.

```python
def final_position(commands):
    x = 0
    y = 0

    for command in commands:
        if command == "U":
            y += 1
        elif command == "D":
            y -= 1
        elif command == "L":
            x -= 1
        elif command == "R":
            x += 1
        else:
            raise ValueError(f"Unsupported command: {command}")

    return x, y
```

Good follow-up points include:

- Handle lowercase commands.
- Add boundaries or obstacles.
- Return every visited coordinate.
- Detect whether the path crosses itself.
- Compute Manhattan distance from the origin.

## Behavioral Questions and Strong Answer Angles

### Conflict With a Teammate

Question: "Your manager assigns you as team lead, but a teammate disagrees with your direction.
What would you do?"

A strong answer should show that you listen first, clarify shared goals, separate personal tension from project needs, and create a path forward.
You can structure the answer like this:

1. Acknowledge the disagreement without becoming defensive.
2. Ask the teammate to explain concerns and evidence.
3. Reconnect the team to the project goal and deadline.
4. Incorporate useful feedback where possible.
5. Escalate only if the disagreement blocks execution or affects team health.
6. Reflect afterward on how to improve alignment earlier next time.

### Request for Sensitive Data

Question: "A manager asks you for sensitive project data.
How would you respond?"

A strong answer should show integrity and judgment.
You can say that you would clarify the business need, check policy and permissions, avoid sharing data through informal channels, involve the right data owner or compliance contact, and offer a compliant alternative if possible.

This is a good place to show that you can be helpful without bypassing rules.
Goldman Sachs operates in a regulated environment, so privacy, access control, and auditability matter.

### Project You Are Proud Of

Question: "Tell me about a project you are proud of."

A strong answer should include the business or user problem, your ownership, the technical decisions you made, the measurable result, and what you would improve.
For engineering roles, be ready for follow-ups about architecture, trade-offs, testing, deployment, failures, and team collaboration.

### Why Goldman Sachs

Question: "Why Goldman Sachs?"

Avoid generic prestige-only answers.
A stronger answer connects your role to the firm's work in financial markets, risk, data, technology, client service, and high-stakes decision-making.

For technology candidates, you might mention that financial systems require reliability, security, scale, and clear engineering judgment.
For finance candidates, you might mention client impact, analytical rigor, transaction exposure, and learning from high-performing teams.

## Goldman Sachs Interview Preparation Strategy

### Study the Role Before You Study Random Questions

Start with the job description.
Identify whether the role is mostly engineering, finance, analytics, operations, risk, compliance, or client-facing work.
Then map your preparation to the role's likely interview signals.

For software engineering, prioritize:

- Arrays and strings.
- Hash maps and sets.
- Sliding window.
- Two pointers.
- Sorting and searching.
- Graph basics.
- Dynamic programming fundamentals.
- SQL basics if the role mentions data.
- System design for more senior roles.
- Clear explanation of previous projects.

For finance and analyst roles, prioritize:

- Accounting fundamentals.
- Valuation methods.
- Market awareness.
- Excel and modeling concepts where relevant.
- Business judgment.
- Written and verbal communication.
- Motivation for the specific division.

### Build a Behavioral Story Bank

Prepare five to eight reusable stories before the interview.
Each story should cover a real situation, the task or stakes, the actions you took, the result, and the lesson.

Useful story themes include:

- Leadership without authority.
- Conflict resolution.
- Mistake or failure.
- Tight deadline.
- Ambiguous problem.
- Ethical judgment.
- Technical ownership.
- Collaboration across functions.

ExtraBrain can support this workflow as a focused second-brain-style workspace for interviews.
You can practice aloud, capture transcripts, save notes, and review which examples sound specific versus generic.

### Practice HireVue Answers Out Loud

Recorded interviews can feel awkward because there is no live feedback.
Practice with a timer and answer in a simple structure:

1. Direct answer.
2. Short example.
3. Result or lesson.
4. Connection to the role.

Keep answers concise.
A polished one-minute answer is usually better than a rambling three-minute answer.

### Practice Coding With Explanation, Not Silence

For live coding, practice saying your reasoning while solving.
Interviewers need to understand your approach, not just see final code.

A useful coding interview flow is:

1. Restate the problem.
2. Ask clarifying questions.
3. Give a brute-force approach.
4. Improve the approach.
5. State complexity.
6. Code cleanly.
7. Test with examples.
8. Discuss edge cases and follow-ups.

### Track Mistakes and Rehearse Fixes

Do not only count solved problems.
Track why you missed questions.
Common categories include misunderstanding the prompt, missing edge cases, choosing the wrong data structure, over-optimizing early, coding too slowly, or explaining too little.

After every mock interview, write a short debrief.
ExtraBrain can help review transcripts and screen context after practice sessions so you can see where your explanation became unclear.

## Responsible AI Use for Goldman Sachs Interview Prep

AI tools can be useful for preparation, mock interviews, answer outlines, coding review, and post-interview reflection.
They should not be used to violate interview rules, assessment rules, school rules, employer policies, or platform terms.

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
It can help generate answer outlines, STAR structures, technical explanations, and follow-up questions from practice transcript and screen context.
Candidates remain responsible for honest and allowed use.

A privacy-aware setup matters when practicing with sensitive career notes or workplace examples.
A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
If you configure external providers, selected prompts, transcript text, screenshots, audio, or context may leave the device depending on your settings.

## Common Mistakes to Avoid

### Memorizing Without Understanding

Memorized answers break down when interviewers ask follow-ups.
For technical interviews, understand the pattern and trade-offs.
For behavioral interviews, know the story deeply enough to adapt it to different questions.

### Over-Optimizing Too Early

Candidates sometimes jump to a complex solution before proving they understand the problem.
Start with a simple baseline, then improve it.
This makes your reasoning easier to follow.

### Ignoring Edge Cases

Edge cases are a common interview signal.
For coding questions, discuss empty inputs, duplicates, invalid values, large inputs, negative numbers, case sensitivity, and return conventions.

### Giving Generic Behavioral Answers

Goldman Sachs interviewers hear many answers about teamwork and hard work.
Specific examples with measurable impact stand out more than broad claims.

### Forgetting to Ask Questions

Ask thoughtful questions at the end.
Good questions show that you understand the role and care about the team's work.

Examples include:

- What kinds of systems or products would this team own?
- How does the team balance speed, reliability, and risk controls?
- What makes someone successful in this role after six months?
- How do engineers and business stakeholders collaborate on this team?
- What are the biggest technical or analytical challenges the team is working through?

## FAQ

### How should I prepare for the Goldman Sachs online assessment?

Focus on common coding patterns, then practice under time pressure.
Sliding window, hash maps, sorting, arrays, strings, and simulation are especially useful for early engineering assessments.

### What should I wear for a virtual Goldman Sachs interview?

Choose professional clothing that does not distract from your answers.
For most virtual interviews, simple business casual or business professional attire is a safe choice.

### What should I do if I do not know the answer?

Do not freeze or pretend.
Restate what you understand, ask a clarifying question, explain a baseline approach, and reason forward step by step.
Interviewers often value structured thinking even when the final answer is imperfect.

### How can I stand out in behavioral interviews?

Use real examples with clear stakes, actions, and outcomes.
Show ownership, integrity, teamwork, and learning instead of giving generic personality claims.

### Should I ask questions at the end of the interview?

Yes.
Ask specific questions about the team, role, expectations, technical challenges, or business context.
This shows genuine interest and helps you evaluate fit.

### Can ExtraBrain help me prepare for Goldman Sachs interviews?

Yes, ExtraBrain can help with mock interview transcripts, STAR answer outlines, coding explanation practice, screen-aware context during preparation, and post-practice review.
Use it only in ways that comply with the rules of your interview, employer, school, workplace, and platform.

### What platforms does ExtraBrain support?

ExtraBrain is available for macOS today, including Apple Silicon and Intel Macs.
Windows and Linux are planned future platforms.

## See Also

- [ExtraBrain](https://extrabrain.app)
- [ExtraBrain responsible use](https://extrabrain.app/responsible-use/)
- [ExtraBrain privacy](https://extrabrain.app/privacy/)
- [ExtraBrain providers](https://extrabrain.app/providers/)
- [ExtraBrain pricing](https://extrabrain.app/pricing/)
