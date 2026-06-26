---
title: "Uber HackerRank OA Experience: Questions, Patterns, and Preparation Tips"
seoTitle: "Uber HackerRank OA Questions and Preparation Guide"
description: "A practical Uber HackerRank OA guide with three coding question patterns, efficient approaches, timing tips, and responsible AI prep advice."
publishDate: 2026-02-17
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Uber"
  - "HackerRank OA"
  - "Coding Interviews"
  - "Interview Prep"
seoTags:
  - "uber-hackerrank-oa"
  - "uber-online-assessment"
  - "hackerrank-coding-interview"
  - "uber-coding-questions"
sourceUrl: "exports/interview-questions/uber-hackerrank-oa.md"
canonicalUrl: "https://extrabrain.app/interview-questions/uber-hackerrank-oa-extrabrain/"
importedAt: "2026-06-26T08:13:08.023Z"
ogImage: "/assets/blog-covers/private-by-default-interview-prep-notes.webp"
ogImageAlt: ""
draft: false
---

Preparing for an Uber HackerRank online assessment can feel intense because the problems are usually simple to state but unforgiving on time complexity.
This guide rewrites a candidate-style OA walkthrough into a practical ExtraBrain preparation article for software engineering candidates.
It focuses on the question patterns, the reasoning that matters, the edge cases to test, and the way to use AI assistance responsibly before or during any interview context only when the rules allow it.

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For online assessments, the safest and most useful role for a tool like ExtraBrain is preparation, mock interview review, topic drilling, and post-practice debriefing.
During a real OA, always follow Uber, HackerRank, recruiter, employer, school, and platform rules about AI assistance, notes, screenshots, transcription, and outside resources.

## Quick summary

The reported Uber HackerRank OA style centered on three coding problems.
The first problem tested greedy thinking around reducing a number to zero with powers of two.
The second problem required a monotonic stack to compute discounts efficiently.
The third problem used a permutation insight to decide whether values from 1 through k form a continuous block.

A typical difficulty curve looks like this:

| Problem | Likely difficulty | Main skill tested | Efficient pattern |
| --- | --- | --- | --- |
| Minimum operations to reduce n to 0 | Easy to medium | Binary reasoning and greedy choices | Powers of two, signed representation, or carry logic |
| Final prices with first smaller-or-equal discount | Medium | Data structure optimization | Monotonic stack from right to left |
| Balanced prefixes in a permutation | Medium to hard | Range reasoning over positions | Track min and max positions for values 1 through k |

The key lesson is that brute force is usually not enough.
If a problem has input sizes around 100,000 or 200,000, you should immediately think in terms of O(n), O(n log n), or a carefully bounded greedy process.

## Uber HackerRank OA format

### Number and type of questions

A common Uber HackerRank OA for SDE-style roles may include three algorithmic coding questions.
The exact questions can vary by role, region, season, and recruiting pipeline.
Use this article as preparation for patterns, not as a guarantee of what you will see.

The questions are often wrapped in light scenarios such as pricing, operations, transformations, or arrays.
The real assessment is usually about extracting the underlying algorithm and writing correct code under pressure.

### Timing and environment

A common total time window is around 90 minutes.
That means you cannot spend too long perfecting the first solution before inspecting the full assessment.

The platform usually gives a built-in editor, sample tests, and hidden tests.
Hidden tests are where edge cases and inefficient solutions fail.

### Difficulty distribution

The first problem is often the most approachable.
It may test whether you can translate rules into a clean greedy or simulation strategy.

The second problem often introduces a larger input limit.
That is the signal to replace nested loops with a better data structure.

The third problem may require a more subtle observation.
For permutation and subarray problems, the fastest solution often comes from tracking positions, boundaries, counts, or invariants instead of checking every subarray.

## Question 1: Minimum operations to reduce n to 0

### Problem pattern

You are given a positive integer n.
In one operation, you can add or subtract a power of two.
The goal is to reduce n to 0 using the fewest operations.

For example, n = 5 can be solved in two operations because 5 = 4 + 1.
You can subtract 4 and subtract 1.

For n = 21, the binary form is 10101.
You can subtract 16, subtract 4, and subtract 1, for three operations.

The interesting cases happen when adding a power of two is better than subtracting many smaller powers.
For example, a run of consecutive 1 bits may be cheaper to handle by rounding up and then correcting the remainder.

### Useful insight

Think of the answer as the minimum number of signed powers of two needed to represent n.
In other words, each operation chooses +2^i or -2^i relative to the current number.

A simple way to reason about it is to inspect the binary representation.
Isolated 1 bits often cost one operation.
Runs of 1 bits may be cheaper if you add the next higher power of two and then subtract the leftover lower power.

### Approach

One practical greedy approach is:

1. While n is not zero, find the lowest set bit.
2. If n has an isolated low bit, subtract that power of two.
3. If n has a run of consecutive 1 bits, consider adding the lowest set bit to create a carry.
4. Count each add or subtract as one operation.
5. Continue until n becomes zero.

Another dynamic approach is to process bits with carry.
At each bit, decide whether the current value is better handled as 0, 1, or by carrying into the next bit.
This is often easier to prove but slightly more abstract to implement.

### Complexity

The greedy or bit-DP version runs in O(log n) time.
The memory usage can be O(1) if you only track the current value and operation count.

### Edge cases to test

Test n = 1.
Test powers of two such as n = 8 or n = 1024.
Test values just below a power of two such as n = 7, n = 15, and n = 31.
Test alternating-bit values such as n = 21.
Test long runs of 1 bits because those are where the add-versus-subtract choice matters.

## Question 2: Apply the first smaller-or-equal discount

### Problem pattern

You are given an array of prices.
For each item, the discount is the first price to its right that is less than or equal to the current price.
If no such price exists, the item keeps its original price.

The task may ask for the final total, the indices that received no discount, or both.
The exact output format can vary, but the algorithmic core is the same.

### Why brute force fails

A direct solution scans to the right for every item.
That is O(n²) in the worst case.

If n is 100,000, O(n²) is not realistic.
You need a monotonic stack.

### Monotonic stack approach

Iterate from right to left.
Maintain a stack of candidate discount prices.
The stack should be monotonic so that the top is the nearest useful smaller-or-equal candidate for the current item.

For each price:

1. Pop every stack value greater than the current price.
2. If the stack is not empty, the top is the discount.
3. If the stack is empty, this item has no discount.
4. Add the final price to the total.
5. Push the current price onto the stack.

The reason this works is that any larger price to the right cannot be the first smaller-or-equal discount for the current item or for earlier larger constraints once a better candidate blocks it.

### Complexity

Each element is pushed once and popped at most once.
The total runtime is O(n).
The stack uses O(n) space in the worst case.

### Edge cases to test

Test an increasing array because many items will have no discount.
Test a decreasing array because each item should usually receive the next item as a discount.
Test equal adjacent values because the rule is less than or equal, not strictly less.
Test a single price.
Test repeated values and large arrays.

## Question 3: Determine whether each k in a permutation is balanced

### Problem pattern

You are given a permutation of values from 1 through n.
For each k, determine whether the numbers 1 through k appear inside one continuous subarray.

Because the array is a permutation, every value appears exactly once.
That makes the problem much easier than it first appears.

### Key insight

Values 1 through k form a continuous subarray if and only if the span between their minimum position and maximum position has length k.

If the minimum position is l and the maximum position is r, the values are continuous when:

```text
r - l + 1 == k
```

No separate set check is needed because the values are unique.
If k distinct values occupy exactly k positions, they fill that entire range.

### Approach

First build a position array.
For each value x, store where x appears in the permutation.

Then iterate k from 1 to n.
Maintain the smallest and largest positions seen among values 1 through k.
If the current range length equals k, mark k as balanced.
Otherwise, mark it as not balanced.

For example, suppose p = [4, 1, 3, 2].
The position of 1 is 2, the position of 2 is 4, and the position of 3 is 3 if using one-based indexing.
For k = 3, l = 2 and r = 4, so r - l + 1 = 3.
That means values 1, 2, and 3 form one continuous block.

For k = 2, l = 2 and r = 4, so r - l + 1 = 3.
That is larger than k, so values 1 and 2 do not occupy a continuous block by themselves.

### Complexity

Building the position array takes O(n).
The k loop also takes O(n).
The total runtime is O(n), and the memory usage is O(n).

### Edge cases to test

Test n = 1.
Test an already sorted permutation.
Test a reversed permutation.
Test permutations where values 1 through k are clustered early.
Test permutations where small values are spread across the whole array.

## Common Uber HackerRank OA patterns

### Greedy and binary reasoning

Some problems describe operations such as add, subtract, transform, or reduce.
The challenge is not to simulate every possible path.
The challenge is to identify the rule that makes one local choice safe or to convert the problem into bit operations.

When you see powers of two, binary representation should be your first instinct.
When you see repeated transformations, ask whether the process can be compressed into counts, carries, or states.

### Data structure optimization

Problems with arrays and right-side conditions often point to stacks, heaps, maps, or two pointers.
A phrase like "first element to the right" is a strong hint for a monotonic stack.
A phrase like "nearest greater," "nearest smaller," or "next qualifying value" often belongs in the same family.

### Permutation invariants

Permutation problems are often easier because uniqueness gives you extra structure.
Instead of checking whether a subarray contains every value, you can track positions, min and max boundaries, or prefix properties.

If the values are exactly 1 through n, ask what must be true about the positions of 1 through k.
That question often reveals the whole solution.

### Scenario translation

Uber-style OA questions may use product, transaction, driver, rider, pricing, or process wording.
Do not get distracted by the story.
Translate the prompt into arrays, graphs, strings, numbers, constraints, and required output.

## Preparation plan

### Practice the right topics

Prioritize arrays, stacks, hash maps, greedy algorithms, binary representation, sorting, heaps, graphs, and prefix or range reasoning.
For this specific pattern set, arrays, monotonic stacks, greedy bit logic, and permutation position tracking matter most.

Useful practice sources include LeetCode, HackerRank practice problems, official language documentation, and your own timed mock assessments.
Use editorials only after you have tried a solution and identified where you got stuck.

### Simulate the 90-minute pressure

Run mock sessions with two or three problems and a strict timer.
Use the same language you plan to use in the actual assessment.
Avoid switching languages during practice unless you have a specific reason.

After each mock, write a short debrief:

- Which problem did you solve first?
- Where did you lose time?
- Which edge case did you miss?
- Did your first complexity estimate match the constraints?
- What pattern should you recognize faster next time?

ExtraBrain can help after a practice session by turning your transcript, notes, and screen context into a structured review when configured for your allowed workflow.
If you use external AI or transcription providers, remember that prompts, transcript text, screenshots, audio, or context may leave your device depending on your configuration.
A fully local posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible.

### Manage time during the OA

Scan all problems first.
Start with the one where you can reach a correct solution fastest.
Do not spend 45 minutes stuck on a hidden insight before earning points on easier work.

A reasonable split for three questions is:

| Time window | Goal |
| --- | --- |
| First 5 minutes | Read all prompts and constraints |
| Next 20 to 25 minutes | Solve the easiest problem cleanly |
| Next 30 minutes | Solve the medium data structure problem |
| Remaining time | Attack the hardest insight problem and strengthen tests |

Leave a few minutes for sample tests, custom edge cases, and output formatting.
A correct algorithm can still fail if you print the wrong format or use zero-based indices where one-based indices are required.

## Tips and pitfalls

### Strategies that help

Read the constraints before choosing an approach.
If n is large, reject O(n²) unless the input structure makes it safe.

Write down the invariant before coding.
For the monotonic stack problem, the invariant is that the stack contains useful right-side discount candidates.
For the permutation problem, the invariant is the min and max positions among values 1 through k.

Test with small custom cases before submitting.
Small cases are where you can manually verify every answer.

Keep code simple.
A short, readable O(n) solution is better than a clever solution you cannot debug under time pressure.

### Mistakes to avoid

| Mistake | Why it hurts | Better habit |
| --- | --- | --- |
| Ignoring constraints | Leads to timeouts on hidden tests | Estimate complexity before coding |
| Treating less-than-or-equal as strictly less | Breaks duplicate price cases | Re-read comparison words carefully |
| Forgetting one-based output | Produces wrong indices even with correct logic | Confirm expected indexing in examples |
| Overfitting sample tests | Misses hidden edge cases | Add custom extremes and random small tests |
| Spending too long on one problem | Leaves easy points unfinished | Scan first and set mini-deadlines |

## Responsible AI use for interview preparation

AI tools can be helpful for practice, explanation, mock interviews, and post-session review.
ExtraBrain is built as a real-time AI interview assistant for Mac with live transcription, screen-aware context, coding and system design support, local-first options, bring-your-own AI providers, and post-interview review.

That does not mean you should use AI in every assessment context.
Use ExtraBrain only where interview, employer, school, workplace, and platform rules allow AI assistance, transcription, screenshots, or notes.
If an OA forbids external resources, follow that rule.

A strong preparation workflow is to use ExtraBrain before the assessment to practice thinking out loud, explain code, review failed attempts, and build a personal bank of patterns.
You remain responsible for writing honest solutions and respecting the rules of the process.

## FAQ

### Has Uber moved every online assessment to HackerRank?

Not necessarily.
Some candidates have reported Uber SDE online assessments on HackerRank, while other roles or historical pipelines may use different platforms.
Always rely on your recruiter instructions and the assessment invitation for the current process.

### What languages should I use for the Uber HackerRank OA?

Use the language in which you can write correct code fastest.
Python is popular for arrays, stacks, maps, and quick implementation.
Java, C++, and JavaScript are also common choices when supported by the assessment.

The best language is the one where you know the standard library, input parsing, sorting behavior, stack patterns, and edge-case syntax well.

### Are outside notes or AI tools allowed during the OA?

Only if the assessment instructions explicitly allow them.
Many online assessments restrict outside resources, collaboration, screenshots, transcription, or AI assistance.
Follow the written rules from Uber, HackerRank, your recruiter, your school, and your employer.

Use tools like ExtraBrain for preparation and review unless your specific assessment rules clearly permit live assistance.

### What should I do if I get stuck on the hardest question?

Write down the brute-force idea first so you understand the target behavior.
Then identify the bottleneck.
Ask what information is repeated, what can be precomputed, and whether the input structure has a special property such as sorted order, uniqueness, or bounded values.

If you still cannot solve it, implement partial logic if the platform gives partial credit, then return after solving easier questions.

### How should I practice the three patterns in this guide?

For the number-reduction problem, practice binary and greedy problems involving powers of two.
For the discount problem, practice monotonic stack problems such as next smaller element and next greater element.
For the permutation problem, practice position-array techniques and subarray validation problems.

The goal is not to memorize exact prompts.
The goal is to recognize the underlying pattern quickly enough to write a correct solution under time pressure.

## Related ExtraBrain interview-question guides

- [Amazon coding interview guide](https://extrabrain.app/interview-questions/amazon-coding-interview-extrabrain/)
- [Microsoft coding interview guide](https://extrabrain.app/interview-questions/microsoft-coding-interview-extrabrain/)
- [Stripe coding interview guide](https://extrabrain.app/interview-questions/stripe-coding-interview-extrabrain/)
- [Nvidia coding interview guide](https://extrabrain.app/interview-questions/nvidia-coding-interview-extrabrain/)
- [HackerRank assessment preparation guide](https://extrabrain.app/interview-questions/amazon-hackerrank-assessment-extrabrain/)
