---
title: "Barclays Codility Test Experience: 7 Questions and Prep Guide"
seoTitle: "Barclays Codility Test Questions, Format, and Prep Guide"
description: "A practical Barclays Codility test guide with 7 question patterns, solution ideas, prep tips, and responsible ExtraBrain interview support."
publishDate: 2026-03-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - Barclays
  - Codility Test
  - Coding Interview
  - Interview Prep
seoTags:
  - barclays codility test
  - barclays online assessment
  - codility interview questions
  - coding interview prep
sourceUrl: "exports/interview-questions/barclays-codility-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/barclays-codility-test-extrabrain/"
importedAt: "2026-06-25T18:58:40.019Z"
ogImage: "/assets/blog-covers/cluely-risk-extrabrain.webp"
ogImageAlt: ""
draft: false
---

## Barclays Codility Test Format

This Barclays Codility test experience is useful if you are preparing for a quantitative, software engineering, data, or technology assessment at Barclays.
The assessment described here used Codility and included seven total questions.
The session had a four-hour time limit.
The coding portion required a webcam to remain on during the test.
The first question was described as very easy, while the final question was the most difficult.

Treat these examples as practice patterns rather than guaranteed future prompts.
Online assessment content can change by role, region, year, hiring pipeline, and candidate background.
Your goal is to understand the underlying problem types so you can solve new variants under time pressure.

If you use ExtraBrain while preparing, use it as a practice companion, not as a way to violate assessment rules.
ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, bring-your-own AI providers, local Gemma 4 where installed and compatible, and privacy controls.
Use any AI assistant only where interview, employer, school, workplace, and platform rules allow AI assistance, transcription, screenshots, or notes.

## The 7 Barclays Codility Question Patterns

### Question 1: Warm-up Coding Task

The first task in this experience was reported as straightforward.
Expect this kind of opening question to test basic implementation accuracy rather than advanced algorithm design.
Common warm-up topics include arrays, strings, counting, simple loops, or basic conditional logic.

A strong approach is to solve it cleanly, add edge-case checks, and move on quickly.
Do not spend too much of the four-hour window polishing a problem that is meant to be a confidence builder.

### Question 2: Largest Sum of Weights

This task can be understood as a graph vertex assignment problem.
You are given vertices and edges, and the goal is to assign values to vertices so that the sum contributed by connected endpoints is as large as possible.

The key insight is that a vertex with a higher degree appears in more edges.
Because it contributes to more endpoint sums, it should receive a larger assigned value.

A practical solution outline:

1. Compute the degree of every vertex.
2. Sort vertices by degree in descending order.
3. Assign the largest available values to the highest-degree vertices.
4. Iterate through the edges and sum the assigned values of both endpoints.

The main thing to explain in your reasoning is why degree drives priority.
If one vertex participates in many edges, increasing its value improves many edge contributions at once.

### Question 3: Common Digit

This task asks for the largest subset of numbers where the numbers share at least one digit under the stated condition.
A simple way to reason about it is to group numbers by digit membership.

A practical solution outline:

1. Create ten buckets, one for each digit from 0 to 9.
2. For each number, identify the unique digits it contains.
3. Add that number to the bucket for each digit it contains.
4. Return the largest bucket size.

Be careful with repeated digits inside a single number.
For example, the number 111 should only count once for digit 1.
A set of digits per number avoids double counting.

### Question 4: Wind Farm

This task involves grid traversal and Manhattan distance.
You are asked to count cells that are far enough from every bird habitat, where bird habitats are represented by cells with value 1.

A practical solution outline:

1. Scan the grid and collect the coordinates of all bird habitat cells.
2. Iterate through every candidate cell in the grid.
3. For each candidate cell, compute its Manhattan distance to each habitat.
4. Count the cell if every habitat distance is greater than K.

The Manhattan distance between cells `(r1, c1)` and `(r2, c2)` is `abs(r1 - r2) + abs(c1 - c2)`.
For small grids, the direct approach is usually clear and acceptable.
For larger constraints, consider multi-source breadth-first search from all habitat cells to compute nearest-habitat distance more efficiently.

### Question 5: Linear Regression

This task is closer to data analysis than pure algorithmic coding.
The reported version involved fitting a linear regression model with Price as the dependent variable and the remaining columns as independent variables.

A practical solution outline:

1. Load the dataset and inspect the schema.
2. Review descriptive statistics, row counts, column types, and missing values.
3. Handle missing values consistently, such as by listwise deletion if allowed by the prompt.
4. Select Price as the dependent variable.
5. Use the remaining valid variables as predictors.
6. Fit the linear regression model.
7. Report or return the requested model output.

The important interview skill is not just knowing how to call a regression function.
You should also be able to explain why missing values matter, what the dependent variable represents, and how predictors are selected.

### Question 6: Fib Digits

This task involves a recursive sequence where each element is derived from the digit sums of the previous two elements.
The challenge is that N can be very large, so direct iteration may not finish in time.

A practical solution outline:

1. Generate terms from the starting values.
2. Track pairs of consecutive values that have already appeared.
3. Once a pair repeats, identify the cycle start and cycle length.
4. Use modular arithmetic to map N into the repeating cycle.
5. Return the corresponding value without iterating all the way to N.

The core concept is periodicity.
When a deterministic recurrence reaches a previously seen state, all future states repeat from that point.
For this problem, the state is not just one value but the pair of previous values used to generate the next value.

### Question 7: Make Words Equal

This task asks you to find a string that differs by at most one position from every string in an array.
If such a string exists, return it.
Otherwise, return an empty string.

A practical solution outline:

1. Choose a baseline word from the array.
2. For each character position in the baseline word, try replacing that character with each possible lowercase letter.
3. For every candidate string, compare it with every word in the array.
4. A candidate is valid if its Hamming distance from every word is at most one.
5. Return the first valid candidate or an empty string if none exists.

The Hamming distance between two equal-length strings is the number of positions where their characters differ.
This problem rewards careful brute force with efficient validation because the candidate space is limited by word length and alphabet size.

## How to Prepare for the Barclays Codility Test

### Build a focused study plan

Start with the fundamentals that appear repeatedly in Codility-style assessments.
Focus on arrays, strings, hash maps, sorting, greedy reasoning, graph degree counting, grid traversal, recursion, cycle detection, and basic data analysis.

For each topic, write down the pattern, the typical constraints, and the usual optimization move.
For example, cycle detection often turns an impossible large-N simulation into a small precomputation plus modular arithmetic.
Graph degree counting often turns a vague optimization problem into a sorting problem.

### Practice under realistic timing

A four-hour assessment can feel generous, but seven questions can still create pressure.
Practice solving multiple problems in one sitting so you learn when to move on.
Do not let one hard task consume the entire session.

A useful timing strategy is:

- Spend the first pass solving easy and medium questions cleanly.
- Mark hard questions for a second pass.
- Keep notes on assumptions, constraints, and edge cases.
- Leave time for testing, syntax fixes, and performance review.

### Review every failed attempt

After each practice session, write down why each mistake happened.
Common reasons include missing edge cases, misunderstanding constraints, using the wrong data structure, or writing code that works logically but times out.

This mistake log becomes more valuable than a list of solved problems.
It shows you which habits to fix before the real assessment.

### Practice explaining solution ideas

Even if the Codility assessment is asynchronous, later interview rounds may ask you to discuss similar problems.
Practice explaining your approach in plain language.
Mention the brute-force idea, the bottleneck, the optimization, and the final complexity.

ExtraBrain can help during preparation by turning your practice transcript, notes, and screen context into structured follow-up questions and review prompts.
For example, after solving a cycle-detection problem, you can ask ExtraBrain to help you rehearse a concise explanation of why tracking repeated states works.
Use this kind of assistance responsibly and within any rules that apply to your interview process.

## Recommended Practice Platforms

### Codility

Codility is the most direct practice source because the Barclays assessment in this experience used Codility.
Use it to become comfortable with the editor, input style, scoring feedback, and performance expectations.

### LeetCode

LeetCode is useful for strengthening general data structures and algorithms.
For this Barclays-style preparation, prioritize medium problems involving arrays, strings, graphs, greedy methods, and dynamic programming fundamentals.

### HackerRank

HackerRank can be useful for timed practice and finance-adjacent problem solving.
Its algorithm and problem-solving sections include many tasks that build the same implementation discipline needed for online assessments.

### Your own review notebook

Keep a small notebook or document with patterns you repeatedly miss.
Include examples like digit grouping, multi-source grid search, graph degree sorting, and recurrence cycle detection.
This gives you a personalized revision sheet before the test.

## Responsible ExtraBrain Workflow for Barclays Prep

ExtraBrain is best used as a preparation and review tool for candidates who want better structure around their practice.
It can help you turn a messy practice session into notes, solution outlines, STAR-style explanations, and follow-up questions.

A responsible workflow looks like this:

1. Practice the problem yourself first.
2. Use ExtraBrain afterward to summarize the approach and identify missed edge cases.
3. Ask for alternate explanations of the same algorithm.
4. Re-solve the problem without looking at the answer.
5. Review the transcript or notes to improve your communication.

ExtraBrain can run in a more local-first posture when using local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible.
If you configure external AI or transcription providers, selected prompts, transcript text, screenshots, audio, or context may be sent to those providers depending on your setup.
Always choose settings that match your privacy needs and the rules of your interview or assessment.

## Barclays Codility Test Lessons Learned

### Read the problem twice

The first read should give you the broad objective.
The second read should focus on constraints, input ranges, return format, and hidden edge cases.
Many online assessment mistakes come from solving a slightly different problem than the one asked.

### Start with a simple baseline

If the optimal solution is not obvious, outline a brute-force approach first.
This gives you a correctness anchor.
Then identify what makes it too slow and optimize the bottleneck.

### Test incrementally

Do not wait until the end to test a large block of code.
Run small examples mentally or in the editor as you build.
Use edge cases like empty inputs if allowed, one-element inputs, repeated values, maximum values, and ties.

### Explain complexity clearly

For each solution, know the time and space complexity.
For example, the degree-sorting graph task is driven by counting degrees, sorting vertices, and iterating edges.
The wind-farm grid task may be acceptable as a direct scan for small constraints but may need breadth-first search for larger constraints.

### Build calm through repetition

Confidence comes from repeated exposure to realistic conditions.
Set a timer, keep your camera-ready environment in mind if required by the platform, and practice staying calm when a problem looks unfamiliar.
The ability to break down an unfamiliar prompt is more important than memorizing exact questions.

## FAQ

### Does the Barclays Codility assessment include anything besides coding questions?

In this reported experience, there were additional non-coding parts.
One part was a personality-style test where candidates selected the option that best matched them.
Another part included logic or calculation questions that were described as not very difficult.
These parts were reported as not requiring a webcam, while the coding section did require one.
Your process may differ, so always follow the instructions shown in your actual assessment.

### What programming language should I use for the Barclays Codility test?

Choose the language you know best under timed conditions.
Python is often convenient for quick implementation, but Java, C++, JavaScript, and other Codility-supported languages can work well if you are fluent in them.
The best language is the one where you can write correct code, handle edge cases, and reason about performance quickly.

### Can ExtraBrain help me prepare for Codility interviews?

Yes, ExtraBrain can help with preparation by organizing practice notes, turning solution attempts into review prompts, helping you rehearse explanations, and supporting post-practice analysis.
ExtraBrain is a Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local-first options, bring-your-own providers, and privacy controls.
Use it only in ways that comply with the rules of your interview, assessment, employer, school, workplace, and platform.

### Can ExtraBrain run fully local?

A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on configuration.
Review your settings before using any AI workflow around sensitive interview or assessment material.

### What is the best mindset for the Barclays Codility test?

Expect a mix of easy, medium, and harder tasks.
Take the easy points first, manage the clock, and do not panic if one problem requires a second pass.
For each task, focus on understanding the constraints, choosing the right pattern, testing edge cases, and explaining your reasoning clearly.

## See Also

[ExtraBrain interview preparation resources](https://extrabrain.app)

[Responsible AI interview use](https://extrabrain.app/responsible-use/)

[ExtraBrain privacy controls](https://extrabrain.app/privacy/)

[ExtraBrain AI provider options](https://extrabrain.app/providers/)
