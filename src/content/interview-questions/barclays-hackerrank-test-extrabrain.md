---
title: "Barclays HackerRank Test Prep: Questions, Format, and a Responsible 2026 Study Plan"
seoTitle: "Barclays HackerRank Test 2026: Questions, Format, and Prep Tips"
description: "Prepare for the 2026 Barclays HackerRank test with sample question patterns, study strategy, timing advice, and responsible AI prep tips."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - Barclays
  - HackerRank
  - Coding Interview
  - Online Assessment
seoTags:
  - barclays-hackerrank-test
  - barclays-online-assessment
  - hackerrank-test-prep
  - coding-interview-prep
sourceUrl: "exports/interview-questions/barclays-hackerrank-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/barclays-hackerrank-test-extrabrain/"
importedAt: "2026-06-25T18:59:50.146Z"
ogImage: "/assets/blog-covers/help-center-supports-advice-extrabrain.webp"
ogImageAlt: ""
draft: false
---

## Barclays HackerRank test overview

The Barclays HackerRank test is usually designed to check whether you can solve practical programming problems under time pressure.
For developer and technology roles, candidates commonly prepare for two coding questions in a timed online assessment environment.
The difficulty can vary by role, region, and hiring cycle, but the recurring pattern is clear: Barclays wants evidence of clean implementation, basic algorithmic judgment, and calm debugging.

A useful way to prepare is to treat the assessment as a short production exercise rather than a pure puzzle contest.
You need to understand the prompt quickly, choose a simple data structure, code a correct baseline, test edge cases, and only then optimize.
That mindset is especially helpful for finance-related prompts where the story may involve transactions, queues, scheduling, accounts, or rules.

If you use ExtraBrain while preparing, use it as a study and review assistant.
ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
During any real assessment, follow Barclays, HackerRank, school, employer, and platform rules about AI assistance, transcription, screenshots, notes, and external resources.

## What the Barclays assessment can include

### Coding questions

The core technical section often centers on two programming problems.
The examples below reflect the type of reasoning candidates often report from Barclays-style HackerRank assessments.
They are best used as practice patterns, not as guaranteed live questions.

### Values and mindset sections

Some Barclays online assessment flows include additional sections about purpose, values, mindset, assessment guidance, or situational judgment.
These sections are usually short and are not solved like coding problems.
Answer them honestly and consistently, especially when the prompt asks how you would behave in a workplace scenario.

### Timing expectations

A common coding window is about 60 minutes for two problems.
That means you should budget roughly 20 to 25 minutes for the easier problem, 25 to 30 minutes for the harder one, and the final few minutes for compile errors, sample tests, and boundary cases.
Do not spend half the test trying to perfect the first solution if a correct straightforward answer is already within reach.

## Practice question 1: Martin and father's steps

### Problem pattern

This problem type asks you to compare two arithmetic progressions of positions.
One person has known starting position, velocity, and number of steps.
The other person has a starting position and needs a velocity that maximizes overlapping step positions.
If multiple velocities create the same number of overlaps, the tie-breaker may ask for the largest velocity.

### Solution approach

First, generate the father's reachable step positions.
If the father starts at `fatherPos`, moves by `velFather`, and takes `steps` steps, the positions form this sequence:

```text
fatherPos + i * velFather for i in range(steps)
```

Put those positions in a set so overlap checks are fast.
Then test candidate velocities for Martin.
For each candidate velocity, generate Martin's positions for the relevant number of steps and count how many are present in the father's set.
Track the maximum overlap count and the velocity that produced it.
If the overlap count ties the current best, keep the larger velocity when the prompt specifies that tie-breaker.

The brute-force version is often acceptable only when the constraints are small.
If the constraints are large, look for a number-theory shortcut.
An overlap occurs when Martin's position can equal one of the father's positions, so the difference between a father's position and Martin's start must be divisible by Martin's candidate velocity.
That observation can reduce unnecessary simulation.

### Edge cases to test

- No overlapping positions.
- Every generated position overlaps.
- Multiple velocities produce the same overlap count.
- The starting positions are already aligned.
- The velocity is larger than the distance to most target positions.

## Practice question 2: shortest job first scheduling

### Problem pattern

Shortest job first scheduling problems ask you to process tasks based on request time and duration.
At each moment, you choose the available task with the shortest processing time.
If no task is available, time jumps forward to the next request time.
The output may ask for average waiting time or total waiting time.

### Solution approach

Create a list of tasks where each task contains request time and processing duration.
Sort tasks by request time.
Use a min-heap to store tasks that have arrived but have not yet been processed.
The heap key should usually be duration first, then request time or original index if the prompt needs stable tie-breaking.

Maintain `currentTime`, `index`, and `totalWaitingTime`.
Push all tasks with `requestTime <= currentTime` into the heap.
If the heap is empty, move `currentTime` to the next task's request time.
Otherwise, pop the shortest available job, add `currentTime - requestTime` to the waiting total, and advance `currentTime` by the job duration.
Repeat until all tasks are processed.

Finally, divide total waiting time by the number of tasks and format the result as requested.
If the prompt asks for two decimal places, round only at the final output step.

### Common mistakes

- Starting `currentTime` at zero when the first request arrives much later and then producing negative or inflated waiting values.
- Sorting once by duration and forgetting that jobs only become eligible after their request time.
- Rounding each waiting time before computing the average.
- Ignoring tie-breaker rules.

## Practice question 3: student group ID scoring

### Problem pattern

This question type asks you to assign points based on each student's PFR value compared with students behind them in a line.
The key operation is checking whether there is a higher or lower value after the current index.
A direct slice-and-scan solution is easy to understand but can become too slow when the list is large.

### Solution approach

Precompute suffix maximum and suffix minimum arrays.
For each index `i`, `suffixMax[i + 1]` tells you the highest PFR behind the current student.
Likewise, `suffixMin[i + 1]` tells you the lowest PFR behind the current student.

Then scan the students from front to back and apply the scoring rules from the prompt.
For example, if the current PFR is greater than all values behind it, the student may receive the rule's higher score.
If the current PFR is lower than all values behind it, the student may receive the other score.
If the exact prompt allows both conditions or has equality rules, implement those details exactly.

This approach avoids repeatedly scanning `listPFR[i + 1:]` for every student.
It turns a likely quadratic solution into a linear one after preprocessing.

### Edge cases to test

- A strictly increasing PFR list.
- A strictly decreasing PFR list.
- Duplicate PFR values.
- One student only.
- Equal maximum or minimum values behind the current student.

## Barclays HackerRank format and focus areas

### Programming fundamentals

Expect basic data-structure work with arrays, strings, hash maps, sorting, and loops.
Examples include counting frequencies, removing duplicates, formatting records, grouping events, or doing fast lookups.
These problems reward simple, readable code more than clever one-liners.

### Algorithmic business scenarios

Finance-themed coding prompts often wrap familiar algorithms in a banking story.
A transfer queue can become a scheduling problem.
A client transaction history can become a sliding-window problem.
A portfolio or return question can become dynamic programming.
A risk rule engine can become conditional logic over structured data.

When you see a long business story, translate it into inputs, outputs, constraints, and invariants.
Then ignore unnecessary narrative details and solve the underlying computational problem.

### Logic and data processing

Some assessment flows may include logic, numerical reasoning, or data interpretation.
Practice reading tables carefully, checking units, and distinguishing correlation from a required calculation.
For workplace judgment items, look for answers that show ownership, collaboration, integrity, and customer awareness without pretending that every situation has a perfect response.

## A weekly preparation plan

### Week 1: establish the baseline

Take one timed coding mock before doing heavy review.
Record where time was lost: understanding the prompt, choosing an approach, writing syntax, debugging, or handling edge cases.
Then review arrays, strings, hash maps, sorting, and heap basics.

### Week 2: focus on Barclays-style coding patterns

Practice easy-to-medium HackerRank and LeetCode problems in these categories:

| Topic | What to practice |
| --- | --- |
| Arrays and strings | Counting, scanning, prefix sums, suffix arrays, formatting |
| Hash maps | Frequency counts, fast lookup, grouping, duplicate detection |
| Sorting | Custom comparators, interval ordering, stable tie-breaking |
| Heaps | Scheduling, shortest job first, priority queues |
| Dynamic programming | Small optimization problems, recurrence design, boundary handling |

After each problem, write down the final approach in plain English.
If you cannot explain the algorithm without code, you probably do not own it yet.

### Week 3: simulate the real test

Run at least three 60-minute sessions with two problems each.
Use the same programming language you plan to use in the assessment.
Do not pause the timer when you get stuck.
The goal is to practice recovery, not just correctness.

After each mock, review the transcript of your own reasoning if you recorded a practice session.
ExtraBrain can help during preparation by organizing live practice notes, transcript context, screenshots, and post-session review on your Mac.
A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on configuration.

### Week 4: polish speed and reliability

Focus on implementation templates for common patterns.
Know how to initialize a heap, build a frequency map, create prefix or suffix arrays, parse input, and format output in your chosen language.
Spend the final days on light timed practice and careful review rather than cramming unfamiliar topics.

## Practical test-taking strategy

### Start with a fast scan

Read both coding prompts before writing code.
Identify the easier problem, the expected output, and any unusual tie-breaker.
Solve the easier problem first if it gives you a clear path to points.

### Write a baseline first

A correct straightforward solution is better than an unfinished optimal one.
If constraints are small, a simple implementation may pass.
If constraints are large, start with the clear version mentally, then optimize the bottleneck.

### Test beyond the samples

Create two or three tiny custom cases.
Test empty or minimum input if allowed.
Test ties.
Test large repeated values.
Test cases where no item is available at the current time for scheduling problems.

### Keep explanations simple

Even if the assessment only grades code, clear thinking helps you debug.
Use variable names that reflect the prompt.
Avoid compressing everything into nested expressions that are hard to inspect under pressure.

## How ExtraBrain fits into responsible preparation

ExtraBrain can work as a focused AI second brain for interviews and meetings.
For Barclays HackerRank preparation, that means you can use it to capture mock interview transcripts, review your reasoning, organize screenshots from practice problems, generate follow-up study questions, and compare solution approaches.
It is not a replacement for learning the algorithms yourself.

ExtraBrain is available for macOS today, including Apple Silicon and Intel Macs.
Windows and Linux are planned future platforms.
The core Mac app is free, with optional Pro plans and bring-your-own provider setup.
Use it only where the rules allow AI assistance, transcription, screenshots, or notes.

## FAQ

### Does the Barclays online assessment include more than coding?

It can.
Some candidates see values, mindset, guidance, or situational judgment sections in addition to coding questions.
Treat those sections as workplace judgment exercises and answer honestly.

### What is the best way to manage the 60-minute coding window?

Spend the first few minutes reading both prompts.
Solve the easier one first, then move to the harder one with enough time left to produce a working baseline.
Reserve the final minutes for sample tests, edge cases, and output formatting.

### Which topics should I prioritize?

Prioritize arrays, strings, hash maps, sorting, heaps, scheduling, prefix and suffix preprocessing, and simple dynamic programming.
For Barclays-style prompts, also practice translating finance-flavored stories into standard algorithmic models.

### Can I use AI during the Barclays HackerRank test?

Only if the assessment rules explicitly allow it.
Many online assessments restrict outside tools, window switching, screenshots, transcription, or external help.
Use ExtraBrain and other AI tools for preparation, mock review, and allowed contexts, and follow all Barclays, HackerRank, employer, school, and platform rules during the real assessment.

### How should I review after a failed mock test?

Separate errors into categories: misunderstood prompt, wrong algorithm, slow implementation, syntax issue, missed edge case, or poor time allocation.
Then practice one targeted set of problems for the weakest category before taking another full mock.
That loop improves faster than randomly solving more questions.

## Related practice paths

If you are preparing for finance or technology online assessments, build a rotation around HackerRank-style coding, Codility-style debugging, numerical reasoning, and behavioral judgment practice.
You can also use ExtraBrain to keep a private preparation workspace with notes from each mock session, recurring mistakes, and revised answer outlines.
