---
title: "Box HackerRank Assessment Questions and Preparation Notes"
seoTitle: "Box HackerRank Assessment Questions, Skills, and Prep Strategy"
description: "A practical rewrite of the Box HackerRank OA: three coding question patterns, solution strategies, tested skills, and responsible prep tips."
publishDate: 2026-02-17
updatedDate: ""
author: "ExtraBrain"
tags:
  - "HackerRank Assessment"
  - "Box Interview"
  - "Coding Interview Prep"
seoTags:
  - "box hackerrank assessment"
  - "box coding interview"
  - "hackerrank online assessment"
sourceUrl: "exports/interview-questions/box-hackerrank-assessment.md"
canonicalUrl: "https://extrabrain.app/interview-questions/box-hackerrank-assessment-extrabrain/"
importedAt: "2026-06-25T19:09:24.258Z"
ogImage: "/assets/blog-covers/how-to-prepare-for-salesforce-interview-extrabrain.webp"
ogImageAlt: ""
draft: false
---

The Box software engineering HackerRank online assessment described in the source article had three coding questions and a 120-minute time limit.
The problems moved from a simple circular-array distance calculation to stricter string validation and then to a harder stack-based collision simulation.
That makes this assessment a good example of how modern coding screens test not only syntax, but also careful reading, edge cases, and choosing the right data structure under time pressure.

Use this guide as preparation material, not as a promise that your exact assessment will match these questions.
Companies rotate prompts, constraints, languages, and scoring rules.
You are responsible for following Box, HackerRank, employer, school, and platform rules about AI assistance, notes, transcription, screenshots, and external tools.
ExtraBrain can help you practice, review transcripts, structure explanations, and learn from mock sessions where AI help is allowed.

## Assessment Snapshot

| Area | Details |
| --- | --- |
| Company | Box |
| Platform | HackerRank |
| Reported time limit | 120 minutes |
| Reported question count | 3 coding problems |
| Question 1 | Box Froyo |
| Question 2 | Counterfeit Currency |
| Question 3 | Retention Policy Collision |
| Overall pattern | Easy circular-array problem, medium validation problem, hard simulation problem |

## Question 1: Box Froyo

### What the Problem Tests

Box Froyo is a circular-array shortest-distance problem.
You are given an array of frozen yogurt flavors arranged in a circle, a starting index, and a target flavor.
The task is to find the minimum number of moves needed to reach the target flavor by moving left or right around the circle.

The core idea is simple, but it still tests whether you understand wraparound indexing and boundary conditions.
If the target is already at the starting position, the answer is zero.
If the target appears only once, there are exactly two direct routes around the circle: clockwise and counter-clockwise.
If the target can appear multiple times, a robust solution should compare the distance to every matching index and return the minimum.

### Solution Strategy

Start by scanning the array for positions where the flavor equals the target.
For each matching index, compute the absolute linear distance from the start.
The circular distance is the smaller of that linear distance and the wraparound distance.
Return the minimum circular distance across all target positions.

A compact formula is:

```text
linear = abs(targetIndex - startIndex)
circular = min(linear, n - linear)
```

This keeps the logic clean and avoids separate clockwise and counter-clockwise branches.
The time complexity is `O(n)` if you scan all flavors once.
The extra space is `O(1)` if you update the best answer as you scan.

### Edge Cases to Practice

- `startIndex` already points to the target flavor.
- The target flavor is at index `0` and the start is near the end of the array.
- The target flavor appears multiple times.
- The array length is `1`.
- The target is not present, if the prompt allows that case.

## Question 2: Counterfeit Currency

### What the Problem Tests

Counterfeit Currency is a string parsing, validation, and calculation problem.
You receive a list of coin or banknote serial numbers.
Each serial number must pass a fixed set of rules before its face value contributes to a total.
After summing valid values, the final amount is reduced by 1 percent and rounded down.

The source article described five validation rules:

1. The serial number length must be between 10 and 12 characters, inclusive.
2. The first three characters must be distinct uppercase English letters.
3. The four-character year segment must contain digits and represent a year from 1900 through 2019, inclusive.
4. The value segment must be one of `10`, `20`, `50`, `100`, `200`, `500`, or `1000`.
5. The final character must be exactly one uppercase English letter.

The exact indices matter.
A common interpretation from the source is that the first three characters are letters, the next four characters are the year, the value is the substring after the year and before the final character, and the final character is the suffix letter.

### Solution Strategy

Write a helper function such as `isValid(serial)`.
Keep the validation readable and fail fast when a rule does not pass.
After a serial passes validation, extract the value segment, convert it to an integer, and add it to a running total.
At the end, compute `floor(total * 0.99)`.

A good implementation separates the problem into three responsibilities:

- Character validation for uppercase letters and digits.
- Segment extraction for prefix, year, value, and suffix.
- Final financial calculation after all valid serials are processed.

### Why This Problem Fails Hidden Tests

This type of problem often has straightforward visible examples and stricter hidden tests.
Most wrong answers come from small details rather than from the overall algorithm.
For example, a solution might accept lowercase letters, allow duplicate prefix characters, parse the year without checking every year character, or round the tax calculation incorrectly.

Be especially careful with substring boundaries.
If the value segment is off by one character, the solution can still work on a few examples while failing hidden cases.

### Edge Cases to Practice

- Length exactly `10` and exactly `12`.
- Prefix letters such as `AAB`, which should fail because the first three letters are not distinct.
- Year values `1899`, `1900`, `2019`, and `2020`.
- Value strings such as `010`, `25`, `1000`, and `500`.
- Final characters that are digits, lowercase letters, or symbols.

## Question 3: Retention Policy Collision

### What the Problem Tests

Retention Policy Collision is a stack-based simulation problem.
You process policies arranged in a line, where each policy has an original index, a direction, and a strength or length.
When a policy moving right meets a policy moving left, they collide.
The stronger policy survives, and if both strengths are equal, both are destroyed.
The result is the list of original indices for policies that survive, sorted in ascending order.

This is similar to classic asteroid-collision problems.
The main insight is that collisions can only happen between adjacent surviving items that move toward each other.
That makes a stack a natural fit.

### Solution Strategy

Iterate through the policies from left to right.
Maintain a stack of policies that have survived so far.
For each new policy, compare it with the top of the stack while the stack top moves right and the current policy moves left.
If the stack top is weaker, pop it and keep checking the current policy against the new stack top.
If the stack top is stronger, the current policy is destroyed.
If strengths are equal, pop the stack top and destroy the current policy.
If the current policy survives all possible collisions, push it onto the stack.

At the end, collect the original indices from the stack and sort them in ascending order if the prompt asks for sorted original indices.

### Collision Logic Checklist

Use this checklist while coding:

- A collision only happens when the previous surviving policy moves right and the current policy moves left.
- Same-direction policies do not collide during this left-to-right simulation.
- A current left-moving policy may destroy multiple weaker right-moving policies.
- Equal strengths destroy both policies.
- Preserve original indices before sorting the final answer.

### Complexity

Each policy is pushed onto the stack at most once.
Each policy is popped from the stack at most once.
That gives the simulation `O(n)` time.
The stack uses `O(n)` space in the worst case.
Sorting the surviving indices adds `O(k log k)` time if `k` policies survive and the output must be sorted by original index.

## Core Technical Focus Areas

| Problem | Primary Focus | Knowledge Points |
| --- | --- | --- |
| Box Froyo | Circular arrays | Wraparound distance, index boundaries, shortest path on a cycle |
| Counterfeit Currency | String validation | Substrings, character classes, uniqueness checks, numeric ranges, allowed-value lookup |
| Retention Policy Collision | Stack simulation | LIFO processing, adjacent interactions, stateful collision rules, tie handling |

The first problem rewards a simple formula.
The second rewards precise implementation.
The third rewards choosing the right data structure and keeping the state machine clear.

## Preparation Plan for a Box HackerRank-Style OA

### Practice by Pattern, Not by Memorizing One Prompt

Do not prepare only for these exact titles.
Instead, practice the patterns underneath them.
For a Box-style online assessment, prioritize:

- Circular arrays and modulo reasoning.
- Fixed-format string parsing.
- Hash sets for uniqueness and membership checks.
- Stack simulations such as asteroid collision, bracket validation, and monotonic stack variants.
- Careful final formatting and rounding rules.

### Build a 120-Minute Strategy

A practical time split is:

| Time Window | Focus |
| --- | --- |
| First 10 minutes | Read all questions and identify difficulty order |
| Next 25 minutes | Finish the easiest problem and run edge tests |
| Next 40 minutes | Solve the medium validation problem carefully |
| Next 35 minutes | Implement the hard stack simulation |
| Final 10 minutes | Re-read constraints, add missing edge tests, and clean up code |

This is only a planning template.
If the hard problem clicks quickly, take the time.
If the medium problem has many strict parsing rules, do not rush it.
A fully correct easy and medium solution can be more valuable than three messy partials.

### How ExtraBrain Fits Into Responsible Preparation

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For assessment prep, it is most useful before and after official tests: running mock interviews, practicing explanations out loud, reviewing transcripts, saving notes, and turning missed edge cases into a study plan.

Use ExtraBrain only where AI assistance, transcription, screenshots, or notes are allowed.
A fully local ExtraBrain setup requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible.
If you choose an external provider, selected prompts, transcript text, screenshots, audio, or other context may be sent to that provider depending on your configuration.

## Practice Resources

| Resource | Best Use |
| --- | --- |
| HackerRank | Online-assessment format practice and timed coding drills |
| LeetCode | Pattern-based practice for arrays, strings, stacks, and simulations |
| Codility | Constraint-heavy tasks and production-style edge-case thinking |
| ExtraBrain | Mock interview review, live explanation practice where allowed, and post-session learning notes |

When using these resources, start with a diagnostic session.
Then spend a few days on each weak pattern instead of jumping randomly between problems.
For this assessment profile, a good rotation is one array problem, one string-validation problem, and one stack or simulation problem per practice block.

## FAQ

### How long is the Box HackerRank assessment?

The source article reported a 120-minute limit for three coding problems.
Your actual invitation may differ, so always follow the timing and instructions in your official HackerRank email or test screen.

### What were the reported Box HackerRank questions?

The reported questions were Box Froyo, Counterfeit Currency, and Retention Policy Collision.
They mapped roughly to circular arrays, string validation with calculation, and stack-based collision simulation.

### Do I need to solve all three problems to pass?

There is no universal public passing threshold.
A strong result usually means getting the early problems fully correct and earning as many hidden test cases as possible on the hardest problem.
Focus on correctness, edge cases, and clean reasoning rather than trying to paste a memorized solution.

### Can I use ExtraBrain during a HackerRank assessment?

Only use ExtraBrain during an assessment if the assessment rules, employer rules, school rules, and platform rules explicitly allow that type of assistance.
ExtraBrain is well suited for preparation, mock interviews, permitted note-taking workflows, and post-practice review.
You remain responsible for honest and compliant use.

### What should I review the night before?

Review circular distance formulas, substring boundary handling, uppercase and digit checks, set membership, stack collision loops, and final-output formatting.
Also prepare a few personal debugging habits, such as testing minimum input sizes, boundary years, duplicate characters, equal collision strengths, and already-at-target cases.
