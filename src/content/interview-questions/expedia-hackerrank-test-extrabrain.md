---
title: "Expedia HackerRank Test: Questions, Patterns, and Prep Notes"
seoTitle: "Expedia HackerRank Test Questions and Preparation Guide"
description: "A practical Expedia HackerRank test guide with three coding question patterns, solution approaches, prep tips, and responsible AI-use advice."
publishDate: 2026-03-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Expedia"
  - "HackerRank"
  - "Coding Interviews"
  - "Online Assessment"
seoTags:
  - "expedia hackerrank test"
  - "expedia online assessment"
  - "expedia coding interview"
  - "hackerrank preparation"
sourceUrl: "exports/interview-questions/expedia-hackerrank-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/expedia-hackerrank-test-extrabrain/"
importedAt: "2026-06-25T20:00:20.764Z"
ogImage: "/assets/blog-covers/how-to-get-invisible-ai-help-for-geektastic-extrabrain.webp"
ogImageAlt: ""
draft: false
---

The Expedia HackerRank test is usually less about obscure algorithms and more about reading the prompt precisely, mapping a business-style scenario to a familiar pattern, and writing clean code under time pressure.
This guide rewrites the exported interview-question notes into an ExtraBrain-focused preparation article for candidates who want practical Expedia online assessment practice without unsafe shortcuts.

Use this as a study guide, not as a promise that your exact assessment will match these questions.
Company assessments change, question banks rotate, and platform rules vary by role, region, and hiring process.
If you use ExtraBrain or any AI interview assistant while preparing or during an interview, use it only where the employer, school, interview format, and platform rules allow AI assistance, transcription, screenshots, or notes.

## Expedia HackerRank Test Snapshot

The reported Expedia assessment was hosted on HackerRank and contained three coding problems.
The questions were not unusually hard, but they rewarded careful handling of constraints and edge cases.

A useful way to think about the test is this:

- One easy geometry or arithmetic problem to check basic implementation accuracy.
- One medium optimization or enumeration problem that requires a clean formula.
- One medium graph traversal problem based on connected components.

The common thread is that the solution is usually simple once the prompt is translated into the right pattern.
The risk is misreading the input, skipping an edge case, or overcomplicating a problem that should be solved directly.

## Question 1: Area of a Triangle

### What the problem tests

This problem asks you to compute the area of a triangle from three coordinate points.
The key simplifying condition is that at least one side is parallel to either the x-axis or the y-axis.
That means you can find a base and height using coordinate differences instead of using a general determinant formula.

Difficulty: very easy.

### Example reasoning

Suppose the points are `[0, 0]`, `[3, 5]`, and `[0, 2]`.
Two points share the same x-coordinate: `[0, 0]` and `[0, 2]`.
That side is vertical, so it can be treated as the base.

The base length is the absolute difference between the y-coordinates.
Here, the base is `abs(2 - 0) = 2`.

The height is the horizontal distance from the third point to the vertical line `x = 0`.
Here, the height is `abs(3 - 0) = 3`.

The area is `(base * height) / 2`, which gives `3`.

### Solution approach

The direct approach is:

1. Check whether any two points have the same x-coordinate.
2. If they do, use the y-coordinate difference as the base and the third point's x-distance as the height.
3. Otherwise, check whether any two points have the same y-coordinate.
4. If they do, use the x-coordinate difference as the base and the third point's y-distance as the height.
5. Return `(base * height) / 2`.

Because the prompt guarantees that the answer is an integer, you can return integer division when the platform expects an integer.
Still, read the function signature carefully because some HackerRank templates expect a number type rather than a string.

### Edge cases to test

Test points where the parallel side appears in different point positions.
Do not assume the first two points form the base.

Useful cases include:

- Vertical side formed by points 1 and 2.
- Vertical side formed by points 1 and 3.
- Horizontal side formed by points 2 and 3.
- Coordinates containing zero.
- Coordinates where subtraction would be negative without `abs`.

## Question 2: Identical Distribution

### What the problem tests

This problem involves distributing card counts into identical packs.
For each card type, you may add cards so that the final count becomes divisible by some pack count `k`.
The task is to choose `k >= 2` and minimize the total number of added cards.

Difficulty: medium.

The important part is not the formula itself.
The important part is choosing a safe range of possible `k` values and applying the formula consistently.

### Example reasoning

For `cardTypes = [4, 7, 5, 11, 15]`, try `k = 2`.

- `4` is already divisible by `2`, so add `0`.
- `7` becomes `8`, so add `1`.
- `5` becomes `6`, so add `1`.
- `11` becomes `12`, so add `1`.
- `15` becomes `16`, so add `1`.

The total number of added cards is `4`.
Trying larger values of `k` may require more additions, so the algorithm should compare all reasonable options and keep the minimum.

### Core formula

For a card count `card` and pack count `k`, the number of cards to add is:

```text
(k - (card % k)) % k
```

This formula handles the divisible case cleanly.
If `card % k` is `0`, the result is also `0`.

### Solution approach

A practical approach is:

1. Find the maximum card count in the input.
2. Enumerate possible `k` values starting from `2`.
3. For each `k`, compute the added cards needed for every card type.
4. Track the minimum total additions.
5. Return the minimum.

The exported notes mentioned that `n` can be large while the maximum card value is small, around `500`.
That changes the strategy.
You should not build an algorithm whose cost depends heavily on a huge search range for `k` if the values themselves are bounded.

If the maximum card value is `500`, checking `k` values up to around `1000` is often enough for this style of prompt.
The exact upper bound should be derived from the official constraints in your assessment.
When in doubt, use the constraints in the prompt rather than a memorized number.

### How to avoid common bugs

Use `abs` only where distance is involved.
For this problem, do not use `abs` in the divisibility formula because modular arithmetic already gives the needed nonnegative remainder.

Do not special-case divisible counts unnecessarily.
The formula already returns `0` when no additions are required.

Do not stop at the first `k` that seems good.
A local-looking choice can be beaten by another valid `k`, especially when card counts have shared divisibility patterns.

### Complexity notes

If there are `n` card types and you test `m` possible values of `k`, the direct runtime is `O(n * m)`.
When card values are bounded and `m` is small, this is usually fine.
If constraints are larger, you need a tighter mathematical bound or a different optimization.

## Question 3: Connected Groups

### What the problem tests

This is a classic connected components problem in an undirected graph.
Each person is a node.
If `related[i][j]` is `'1'`, there is a relationship edge between person `i` and person `j`.
Because relationships are transitive, the goal is to count how many separate connected groups exist.

Difficulty: medium.

### Example reasoning

If person `0` and person `1` are connected, they belong to the same group.
If person `2` is connected only to themself, person `2` forms a separate group.
The total number of groups is then `2`.

### DFS or BFS approach

The simplest solution is to run depth-first search or breadth-first search over the adjacency matrix.

The steps are:

1. Create a `visited` array initialized to `false`.
2. Loop through every node `i`.
3. If `i` has not been visited, start DFS or BFS from `i`.
4. Mark every reachable node as visited.
5. Increase the group count after each traversal.
6. Return the group count.

Because `related` is represented as strings, compare entries to the character `'1'` rather than the number `1`.
This is a small detail, but it can cause wrong answers in strict language environments.

### Complexity notes

If there are `n` people, the adjacency matrix has `n * n` entries.
DFS or BFS over the matrix runs in `O(n^2)` time.
For `n = 300`, that is only `90,000` relationship checks, which is comfortably small.

The space complexity is `O(n)` for the visited array and traversal stack or queue.

### Edge cases to test

Useful cases include:

- Every person isolated.
- Everyone connected to everyone.
- A single person.
- Two separate clusters.
- A chain where person `0` connects to `1`, `1` connects to `2`, and so on.

The chain case is especially important because it verifies transitive grouping.
You are not counting only direct relationships.
You are counting connected components.

## Expedia Online Assessment Themes

Expedia assessments often wrap classic coding patterns inside travel or marketplace scenarios.
A problem may mention hotel IDs, bookings, nights, itinerary groups, prices, or user traffic, but the underlying pattern is usually familiar.

Common themes include:

| Theme | What to practice | Why it matters |
| --- | --- | --- |
| Hash maps | Frequency counts, grouping, duplicate detection | Many business problems reduce to counting entities. |
| Arrays and strings | Sorting, scanning, two pointers, parsing | Input transformation is often the real challenge. |
| Graphs | Connected components, BFS, DFS | Grouping users, destinations, or relationships is a common pattern. |
| Greedy and enumeration | Cost minimization, choosing a valid parameter | Medium questions often require trying options safely. |
| Dynamic programming | Straightforward state transitions | Some optimization prompts use standard DP shapes. |

Do not let business wording distract you from the core operation.
Translate the story into inputs, constraints, and required output before writing code.

## Time Management Strategy

A three-question HackerRank assessment can feel easy until one prompt takes longer than expected.
A practical time split is:

- First 3 to 5 minutes: read all problems quickly and identify the easiest one.
- Next 20 to 25 minutes: solve the easiest problem completely and submit after testing.
- Middle block: solve the medium problem with the clearest pattern.
- Final block: solve the remaining problem and prioritize correctness over cleverness.

For each problem, spend a few minutes writing your own examples before coding.
This habit catches misread requirements early.
It is especially useful when the prompt uses dates, IDs, travel counts, or formatted strings.

## Preparation Plan for Expedia HackerRank

### Practice the core patterns

Start with easy and medium problems in these categories:

- Coordinate geometry basics.
- Modular arithmetic and divisibility.
- Hash map counting.
- Array sorting and scanning.
- Balanced brackets.
- Connected components with DFS and BFS.
- Simple greedy cost minimization.

You do not need to grind only the hardest problems.
For this assessment style, clean execution on common patterns is often more valuable than memorizing advanced algorithms.

### Build a personal mistake list

After each practice session, write down the mistakes you made.
Examples might include:

- Forgot to use absolute value for coordinate distance.
- Compared a string character to an integer.
- Misread whether indexing started at `0` or `1`.
- Failed to test all isolated graph nodes.
- Used a brute-force range without checking constraints.

This list becomes a better study guide than a generic topic checklist.
ExtraBrain can help as a focused interview workspace by keeping live session transcripts, notes, screen context, and review material organized for later study.
It is not a replacement for understanding the material, but it can help you spot recurring weak points after practice sessions.

### Simulate the test environment

Practice in a plain editor or directly in a coding platform.
Avoid depending on autocomplete, heavy local tooling, or a debugger that will not exist in the assessment.

For each practice problem, force yourself to:

1. Restate the problem in one paragraph.
2. Write two normal examples.
3. Write two edge cases.
4. Explain the algorithm before coding.
5. Run the sample and your custom tests.
6. Review complexity.

This routine is simple, but it reduces panic and prevents avoidable wrong submissions.

## How ExtraBrain Fits Into Responsible Prep

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For Expedia prep, the best use case is structured practice and review.

You can use ExtraBrain to rehearse explaining a DFS solution, summarize a mock HackerRank session, keep a record of mistakes, or generate follow-up study prompts from your own notes.
If local Parakeet transcription and local Gemma 4 on-device AI are installed and compatible, you can choose a more local posture.
If you connect external AI or transcription providers, selected prompts, transcript text, screenshots, audio, or context may be sent to those providers depending on your configuration.

The responsible rule is simple.
Use ExtraBrain only where interview, employer, school, workplace, meeting, and platform rules allow AI assistance, transcription, screenshots, or notes.
For a live online assessment, read the instructions carefully before using any outside tool.
If the rules prohibit assistance, use ExtraBrain before and after the assessment for preparation and review instead.

## Lessons From These Questions

The biggest lesson is that easy-looking questions still require disciplined reading.
The triangle problem is simple, but the base can appear in any point pair.
The distribution problem is formula-based, but the range of `k` and divisibility edge cases matter.
The connected groups problem is standard graph traversal, but it requires recognizing transitive relationships.

A strong Expedia HackerRank answer usually shows:

- Clear mapping from prompt to algorithm.
- Correct handling of constraints.
- Simple code structure.
- Meaningful edge-case tests.
- Awareness of time and complexity.

When practicing, explain your reasoning out loud.
Even if the assessment itself is silent, verbal practice helps you identify gaps in logic.
It also prepares you for later technical interviews where Expedia interviewers may ask you to walk through tradeoffs.

## Mistakes to Avoid

Do not start coding before you understand the input format.
Many online assessment errors come from parsing assumptions, not algorithm difficulty.

Do not assume the sample covers edge cases.
Write your own tests for empty-looking boundaries, isolated nodes, equal coordinates, and already-divisible counts.

Do not overfit to a remembered solution.
If the live prompt differs slightly, a memorized answer can fail.
Focus on patterns and reasoning instead.

Do not use AI tools to bypass rules or misrepresent your own work.
Responsible preparation is useful.
Unauthorized assistance during an assessment can violate interview instructions and damage trust.

## FAQ

### Can I choose any programming language for the Expedia HackerRank test?

HackerRank assessments usually allow several languages, but the exact list depends on the employer configuration.
Choose the language you can implement quickly and correctly under time pressure.
Python is often efficient for interviews, but Java, C++, and JavaScript can also work if you are fluent in them.

### Should I code in a local IDE and paste into HackerRank?

It is safer to practice in an environment similar to the one you will use during the assessment.
Large copy-pastes can create formatting issues, indentation bugs, or unnecessary uncertainty.
If the instructions restrict outside editors or tools, follow those instructions.

### Are the Expedia HackerRank questions always the same?

No.
Question banks rotate, and different roles can receive different assessments.
Use the questions in this guide as pattern practice rather than exact predictions.

### What should I practice if I only have one week?

Prioritize arrays, strings, hash maps, modular arithmetic, and DFS or BFS connected components.
Do timed practice every day and review mistakes immediately after each session.

### Can ExtraBrain generate interview answers?

ExtraBrain can help generate answer outlines, STAR structures, technical explanations, and follow-up questions from live transcript and screen context.
Candidates remain responsible for honest and allowed use.
For online assessments, use any AI assistance only if the assessment rules explicitly permit it.

## See Also

- [ExtraBrain](https://extrabrain.app) for responsible interview preparation and review.
- [Responsible use](https://extrabrain.app/responsible-use/) for guidance on allowed AI assistance.
- [Privacy](https://extrabrain.app/privacy/) for details on local-first and provider-dependent data handling.
- [AI providers](https://extrabrain.app/providers/) for supported provider configuration options.
