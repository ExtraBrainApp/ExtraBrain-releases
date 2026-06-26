---
title: "Goldman Sachs Software Engineer Online Assessment Prep Guide"
seoTitle: "Goldman Sachs Software Engineer Online Assessment Prep Guide 2026"
description: "Prepare for the Goldman Sachs Software Engineer OA with coding patterns, timing strategy, sample questions, and responsible AI prep tips."
publishDate: 2026-03-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Goldman Sachs Interview"
  - "Software Engineer Interview"
  - "Online Assessment"
  - "Coding Interview Prep"
seoTags:
  - "goldman-sachs-software-engineer-online-assessment"
  - "goldman-sachs-coding-assessment"
  - "goldman-sachs-interview-prep"
  - "software-engineer-online-assessment"
sourceUrl: "exports/interview-questions/goldman-sachs-software-engineer-online-assessment-success-2025.md"
canonicalUrl: "https://extrabrain.app/interview-questions/goldman-sachs-software-engineer-online-assessment-success-2025-extrabrain/"
importedAt: "2026-06-25T20:20:38.642Z"
ogImage: "/assets/blog-covers/system-design-interviews-ai-era.webp"
ogImageAlt: "ExtraBrain software engineering interview preparation workspace"
draft: false
---

Seeing a Goldman Sachs software engineering online assessment invitation can feel exciting and intimidating at the same time.
Candidates often hear mixed stories about the assessment: two straightforward coding questions, math-heavy reasoning sections, strict proctoring, or interview follow-ups that go far beyond the online test.
The useful way to prepare is to treat the online assessment as one step in a broader engineering interview loop.
You need coding fluency, time control, clear explanations, and enough review discipline to turn each practice session into reusable patterns.

This guide rewrites a candidate-style Goldman Sachs online assessment experience for ExtraBrain readers.
It focuses on what to expect, how to prepare, how to reason through representative questions, and how to use AI tools responsibly before and after assessments.
ExtraBrain can help with mock sessions, transcript review, screen-aware practice, STAR story rehearsal, and post-interview debriefs where rules allow AI assistance.
It should not be used to violate interview, employer, school, workplace, or platform rules.

## Goldman Sachs Software Engineer Online Assessment Timeline

A typical Goldman Sachs software engineering or engineering analyst online assessment can vary by region, program, and recruiting cycle.
Recent candidate reports often describe a HackerRank-style assessment with coding questions and multiple-choice reasoning or computer science questions.
Some versions are around 60 minutes, while others are closer to 90 or 120 minutes.
The safest preparation plan is to train for two medium-difficulty coding problems plus a short reasoning section under a strict timer.

| Area | Practical expectation |
| --- | --- |
| Role context | Software Engineer, Engineering Analyst, or Summer Analyst track |
| Platform | Commonly HackerRank-style coding environment |
| Coding focus | Data structures, algorithms, dynamic programming, strings, arrays, math, and graph basics |
| Reasoning focus | Complexity, CS fundamentals, probability, permutations, combinations, logical reasoning, and pattern questions |
| Timing | Often time-boxed by section, with little room for slow debugging |
| Follow-up rounds | DSA interviews, design discussions, project deep dives, behavioral interviews, and hiring manager conversations |

If your assessment is proctored, treat it as a closed-book exam from the start.
Do not rely on notes, external websites, messaging tools, or AI assistance unless the assessment rules explicitly allow them.
Responsible preparation means using practice tools before the test, not trying to bypass the test environment during the test.

## Online Assessment Structure and Question Types

The Goldman Sachs online assessment is usually designed to measure whether you can turn a compact problem statement into correct, efficient code under pressure.
The coding questions are often not impossible, but they punish weak edge-case handling and slow implementation.
The reasoning questions can feel harder because they require fast arithmetic and pattern recognition without much warm-up time.

| Question type | Example pattern | What to practice |
| --- | --- | --- |
| Array math | Find a missing number in a bounded range | Summation formulas, frequency arrays, XOR, and off-by-one checks |
| Frequency counting | Return the string with the third-highest frequency | Hash maps, tie-breaking rules, sorting by value, and stable output rules |
| Pair relationships | Find indices where `a + b = c + d` | Hashing sums, duplicate handling, and index uniqueness constraints |
| Circular distribution | Distribute items around a circle from a start position | Modular arithmetic and one-based versus zero-based indexing |
| Dynamic programming | Count valid decodings of a digit string | State definition, base cases, invalid zeros, and O(1) space optimization |
| Puzzles and math | Egg dropping, probability, permutations, combinations | Recurrence thinking, simple formulas, and fast elimination |

The best preparation is not memorizing every possible problem.
It is learning enough patterns that a new problem looks like a variation of something you already understand.

## Representative Coding Question 1: Toy Distribution in a Circle

### Problem shape

A common Goldman-style math problem asks you to distribute items around a circle.
Imagine `n` students sitting in a circle, numbered from `1` to `n`.
A teacher starts at student `k` and distributes `m` toys, one toy at a time, moving to the next student after each toy and wrapping from `n` back to `1`.
The task is to return the first student who receives no toy.
If every student receives at least one toy, return `-1`.

### Naive approach

The simplest approach is to simulate the distribution with an array of size `n`.
For each toy, increment the current student's count, move to the next student, and wrap around when needed.
After distribution, scan for the first zero.
This is easy to reason about, but it can be too slow when `m` is large.

### Better approach

The key is to think in full cycles.
Every complete cycle of `n` toys gives one toy to every student.
The number of full cycles is `m // n`.
The number of leftover toys is `m % n`.

If `m >= n`, every student receives at least one toy, so the answer is `-1`.
If `m < n`, only a contiguous circular segment of `m` students receives a toy.
The first student with no toy is the first index outside that segment when scanning from student `1` upward.

### Edge cases to check

- `m = 0`, if the platform allows it.
- `k = 1`, where the segment starts at the first student.
- `k = n`, where wrapping happens immediately after the first student receives a toy.
- `m = n - 1`, where exactly one student is missed.
- `m >= n`, where everyone receives at least one toy.

### Complexity

The optimized solution runs in O(1) time and O(1) space.
The most common bug is mixing one-based and zero-based indexing.
When practicing, write down the first three examples by hand before coding.

## Representative Coding Question 2: Decode Ways

### Problem shape

Another common assessment pattern is the classic digit decoding problem.
Given a string of digits `s`, map `1` to `A`, `2` to `B`, and so on through `26` to `Z`.
Return the number of valid ways to decode the string.
Zeros are only valid as part of `10` or `20`.

### Dynamic programming formulation

Let `dp[i]` represent the number of ways to decode the first `i` characters.
Set `dp[0] = 1` because the empty prefix has one neutral decoding path.
For each position, add `dp[i - 1]` if the last single digit is between `1` and `9`.
Also add `dp[i - 2]` if the last two digits form a number from `10` through `26`.

### Cases that decide correctness

| Input | Important lesson |
| --- | --- |
| `"0"` | A leading zero has no valid decoding |
| `"06"` | A two-digit value cannot start with zero |
| `"10"` | `10` is valid only as a pair |
| `"27"` | `27` cannot be decoded as one letter, but `2` and `7` can be separate |
| `"226"` | Multiple valid paths require adding both one-digit and two-digit transitions |

### Complexity

The standard DP array runs in O(n) time and O(n) space.
You can reduce space to O(1) by keeping only the previous two states.
For an online assessment, it is usually better to write the clear DP first and optimize only if time remains or the constraints require it.

## Preparation Plan That Transfers Beyond the OA

The online assessment is not the whole Goldman Sachs process.
A strong preparation plan should also help you in live DSA rounds, project discussions, design interviews, and behavioral interviews.

### Build a core pattern list

Start with a short list of must-know patterns and solve several problems in each category.
Do not just read editorials.
Write code, test edge cases, and explain the approach out loud.

| Pattern | Example problem | Interview skill it builds |
| --- | --- | --- |
| One-pass array scan | Best Time to Buy and Sell Stock | Maintaining running state and proving O(n) solutions |
| Stack matching | Valid Parentheses | Data structure selection and clean edge-case handling |
| Center expansion | Longest Palindromic Substring | Turning a string problem into repeated local checks |
| Subsequence DP | Distinct Subsequences | Defining a two-dimensional state and optimizing space |
| Grid DP | Maximal Square | Combining neighboring states and translating recurrence to code |
| Graph traversal | Maze shortest path | Modeling state, visited sets, BFS, and weighted versus unweighted paths |
| Sorting tradeoffs | Quicksort and heapsort | Explaining average case, worst case, memory use, and partitioning |

### Practice under assessment timing

Run practice blocks that match the real assessment as closely as possible.
Use one timed session for two coding questions and a short reasoning warm-up.
Close unrelated tabs.
Use a scratchpad.
Review mistakes immediately after the timer ends.

A good 90-minute practice session can look like this:

1. Spend 5 minutes reading both problems and rating difficulty.
2. Solve the easier problem first in 25 to 30 minutes.
3. Use 35 to 40 minutes for the harder problem.
4. Reserve 10 to 15 minutes for edge cases, cleanup, and complexity notes.
5. Spend another 20 minutes after the session writing what pattern each problem used.

ExtraBrain can be useful during allowed practice sessions because it can capture your spoken reasoning, preserve screen context, and help you review where your explanation became vague.
That post-session feedback loop is often more valuable than solving one more random problem.

### Prepare for the follow-up interview loop

Passing the online assessment often leads to deeper interviews.
The later rounds may ask you to explain dynamic programming, implement an in-place algorithm, design a small object-oriented system, or discuss a project architecture.

| Round type | What may be tested | How to prepare |
| --- | --- | --- |
| DSA live coding | DP, strings, arrays, graphs, sorting | Practice explaining brute force, optimized approach, complexity, and tests |
| Big data or scalability | External sort, memory limits, file processing | Learn chunking, k-way merge, heap usage, and disk I/O tradeoffs |
| Low-level design | Expense sharing, class design, interfaces | Clarify requirements, define entities, model relationships, and discuss extensibility |
| System design | Project architecture, tradeoffs, reliability | Prepare one or two projects deeply and know why each technical decision was made |
| Behavioral | Leadership, conflict, mistakes, learning | Prepare STAR stories with measurable outcomes and honest reflection |

## Example Follow-Up Topics to Study

### Distinct Subsequences

This is a classic two-string DP problem.
You count how many ways one string can form another as a subsequence.
Interviewers may ask for the full O(n * m) table and then ask how to reduce space.
Focus on explaining why each character match creates two choices: use it or skip it.

### Maximal Square

This is a grid DP problem.
For each cell containing `1`, the largest square ending at that cell is one plus the minimum of the top, left, and top-left neighbors.
The recurrence is simple once you understand that a square can only grow if all three neighboring square boundaries support it.

### External Sorting

A common systems-flavored question is sorting a file larger than available memory.
The expected answer is usually external merge sort.
Split the file into chunks that fit memory, sort each chunk, write sorted runs to disk, then merge runs with a min-heap.
Strong answers mention memory limits, disk reads, write buffering, and the tradeoff between number of runs and merge fan-in.

### Maze Shortest Path

Maze problems test whether you can model movement rules clearly.
If every move has equal cost, BFS is usually appropriate.
If rolling distance or weighted movement matters, Dijkstra's algorithm may be needed.
Always define the state, transitions, visited structure, and termination condition before coding.

### Splitwise-Style Low-Level Design

A simplified expense-sharing design should include users, groups, expenses, splits, and balances.
Good answers separate recording an expense from settling balances.
They also describe how equal, exact, and percentage splits could share a common interface.
You do not need production-ready code, but you should show clean entities and extension points.

## How ExtraBrain Fits Into Responsible Interview Preparation

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot.
It supports live transcription, screen-aware context, local Gemma 4 on-device AI where installed and compatible, bring-your-own AI providers, and privacy controls.
It can help you prepare for coding interviews, system design rounds, behavioral interviews, lectures, meetings, and research calls.
Windows and Linux are planned future platforms.

For Goldman Sachs preparation, the responsible use case is practice, review, and allowed note-taking.
Use ExtraBrain to rehearse explanations, summarize mock interview transcripts, turn a failed practice problem into a pattern note, or refine behavioral stories.
Do not use any tool to bypass proctoring, hide unauthorized assistance, or break assessment rules.
Your goal is to become calmer and more structured, not to outsource your judgment.

### Practical ExtraBrain prep workflows

| Workflow | How it helps |
| --- | --- |
| Coding mock interview | Record your explanation, capture screen context, and review where your reasoning skipped steps |
| DP pattern review | Ask for a clean explanation of the state, transition, base cases, and edge cases after practice |
| System design rehearsal | Practice clarifying requirements and receive a structured outline for tradeoffs and follow-ups |
| Behavioral story practice | Convert raw experience into STAR-format answers without losing your authentic voice |
| Post-session debrief | Turn a transcript into a short list of mistakes, improvements, and next practice targets |

A fully local ExtraBrain setup requires local Parakeet transcription plus local Gemma 4 where installed and compatible.
If you choose external AI or transcription providers, selected prompts, transcript text, screenshots, audio, or context may leave your device depending on configuration.
Review your provider settings and follow the rules of the interview or workplace context you are in.

## Test-Day Strategy

### Read both coding questions first

Use the first few minutes to decide which problem is safer.
A fast accepted solution to the easier problem is better than spending half the assessment stuck on the harder one.
Once you have one solution submitted, your stress level usually drops.

### Write the brute force idea briefly

Even if you do not code the brute force solution, articulating it helps you find the bottleneck.
For example, circular distribution starts with simulation, then improves to modular arithmetic.
Decode Ways starts with recursive choices, then improves to DP.

### Protect edge-case time

Most online assessment failures come from edge cases rather than completely missing the algorithm.
Reserve time to test empty inputs if allowed, minimum sizes, zeros, duplicates, sorted inputs, reverse-sorted inputs, and boundary values.

### Keep explanations concise

If the platform lets you add comments or notes, use them sparingly.
Your variable names, function structure, and test cases should communicate most of the reasoning.
In live rounds, explain more verbally, but still keep the structure clear: approach, correctness, complexity, and edge cases.

## FAQ

### How hard is the Goldman Sachs Software Engineer online assessment?

It is usually manageable if you are comfortable with LeetCode easy-to-medium patterns, but it can feel hard because of timing, proctoring, and reasoning questions.
Dynamic programming, arrays, strings, modular arithmetic, graphs, and basic CS fundamentals are high-value preparation areas.

### What should I do if I get stuck on a coding problem?

Write down the input, output, constraints, and a small example.
Then state the brute force approach and identify exactly why it is too slow.
If you still cannot find the optimization after several minutes, move to the other problem and return later.
Momentum matters in a timed assessment.

### Can I use external resources during the online assessment?

Only use resources that the assessment instructions explicitly allow.
If the assessment is closed-book or proctored, assume external websites, notes, messaging apps, and AI tools are not allowed unless the rules say otherwise.
Use ExtraBrain and other tools for practice, mock interviews, and post-session review where permitted.

### How should I prepare for reasoning questions?

Practice short timed sets of probability, permutations, combinations, logical patterns, and basic complexity questions.
The goal is not deep theory.
The goal is speed, accuracy, and recognizing familiar structures under pressure.

### How important is explaining my code after the OA?

It becomes very important in live follow-up rounds.
Goldman Sachs interviewers often care about how you move from brute force to optimized solutions, how you test edge cases, and how you communicate tradeoffs.
Practice explaining every solved problem in two minutes.

### What is ExtraBrain?

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
It can work as a focused second-brain-style workspace for interviews and meetings, including live sessions, transcripts, notes, screen context, and review.

### Is ExtraBrain allowed in interviews or assessments?

It depends on the rules of the employer, school, interviewer, meeting, and platform.
ExtraBrain should be used only where AI assistance, transcription, screenshots, or notes are allowed.
When in doubt, ask for permission or limit usage to preparation and after-action review.

## See Also

- [ExtraBrain interview copilot for software engineers](https://extrabrain.app)
- [Responsible AI interview preparation](https://extrabrain.app/responsible-use/)
- [ExtraBrain privacy controls](https://extrabrain.app/privacy/)
- [ExtraBrain AI provider options](https://extrabrain.app/providers/)
