---
title: "Morgan Stanley HackerRank Test: Format, Questions, and Prep Notes"
seoTitle: "Morgan Stanley HackerRank Test Questions and Prep Guide"
description: "A practical Morgan Stanley HackerRank prep guide with format notes, coding examples, strategy tips, and responsible ExtraBrain practice advice."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - HackerRank Test
  - Morgan Stanley
  - Coding Interview
  - Interview Prep
seoTags:
  - morgan-stanley-hackerrank-test
  - morgan-stanley-online-assessment
  - hackerrank-coding-questions
  - coding-interview-prep
sourceUrl: "exports/interview-questions/morgan-stanley-hackerrank-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/morgan-stanley-hackerrank-test-extrabrain/"
importedAt: "2026-06-26T04:24:38.189Z"
ogImage: "/assets/blog-covers/how-to-cheat-on-onvue-interview-extrabrain.webp"
ogImageAlt: ""
draft: false
---

## Morgan Stanley HackerRank test overview

The Morgan Stanley HackerRank assessment is commonly used as an early technical screen for analyst, technology, and software engineering roles.
One reported 2026-style format included 24 multiple-choice questions and 2 medium-difficulty coding tasks.
The multiple-choice section can test programming basics, data structures, algorithms, logic, and role-adjacent fundamentals.
The coding section usually matters most because it shows how quickly you can understand a prompt, choose a workable approach, implement cleanly, and handle edge cases under time pressure.

This guide rewrites the useful structure of that assessment experience for ExtraBrain readers.
It focuses on the question patterns, solution reasoning, preparation plan, and responsible ways to use an AI interview assistant during practice.
If an actual employer, school, assessment provider, or interview platform does not allow AI assistance, transcription, screenshots, or notes, you should follow those rules.

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot.
For preparation, it can help you practice explaining algorithms aloud, review transcripts after mock sessions, organize mistake patterns, and generate follow-up drills from your own notes.
Use it as a learning and review tool, not as a way to misrepresent your ability or violate assessment rules.

## Coding question 1: Break the bricks

### Problem idea

In this problem, each brick has a required breaking force represented by a number of newtons.
A big hammer can break a selected brick in 1 hit.
A small hammer takes exactly `k` hits to break a brick with force `k`.
The goal is to minimize the total number of hits needed to break all bricks.

You are also expected to return the 1-based indices of the bricks assigned to each hammer.
That index requirement is easy to miss, so keep the original positions before sorting.

### Core strategy

The big hammer should be used on the bricks with the largest force values.
Replacing a brick that needs 9 small-hammer hits with 1 big-hammer hit saves more than replacing a brick that needs 2 small-hammer hits.
So the greedy choice is to sort bricks by descending force and assign the first `bigHits` bricks to the big hammer.

The remaining bricks are assigned to the small hammer.
Then compute total hits as:

- 1 hit for each brick assigned to the big hammer.
- `newtons[i]` hits for each brick assigned to the small hammer.

Finally, sort each returned index list in ascending order if the output format expects ordered indices.

### Example walkthrough

Suppose `bigHits = 4` and `newtons = [3, 2, 5, 4, 6, 7, 9]`.
After sorting by force, the values are `[9, 7, 6, 5, 4, 3, 2]`.
The big hammer goes to `9`, `7`, `6`, and `5`.
The small hammer goes to `4`, `3`, and `2`.
The total number of hits is `4 + 4 + 3 + 2 = 13`.

The implementation still needs the original 1-based positions, not just the sorted values.
A common bug is to compute the right total but return indices from the sorted array rather than the original input.

### Edge cases to handle

- If `bigHits >= n`, every brick can be broken by the big hammer and the small-hammer index list may need to be `[-1]` depending on the problem statement.
- If `bigHits = 0`, every brick must be broken by the small hammer and the big-hammer index list may need to be `[-1]`.
- If several bricks have the same force, any valid tie order usually works unless the prompt specifies a tie-breaking rule.
- If the output format requires multiple lines, arrays, or sentinel values, implement that formatting carefully before final submission.

### Pseudocode outline

```text
pair each brick force with its original 1-based index
sort pairs by force descending
big = first bigHits pairs
small = remaining pairs
totalHits = count(big) + sum(force for each small pair)
bigIndices = sorted original indices from big, or [-1] if empty
smallIndices = sorted original indices from small, or [-1] if empty
return totalHits, bigIndices, smallIndices in the required format
```

## Coding question 2: String subsequences

### Problem idea

The second reported coding task was a subsequence counting problem.
Given strings `s1` and `s2`, count how many times `s1` appears as a subsequence inside `s2`.
In the reported version, the length of `s1` was fixed at 3.

A subsequence does not require adjacent characters.
It only requires the selected characters to appear in order.
For example, `ABC` appears in `ABCBABC` several times because you can choose different valid positions for `A`, `B`, and `C`.

### Dynamic counting strategy

Let `s1 = abc`, where `a`, `b`, and `c` are the three target characters.
You can count matches in stages:

- Count how many `a` characters have appeared so far.
- When you see a `b`, add the current number of prior `a` characters to the number of `ab` partial subsequences.
- When you see a `c`, add the current number of prior `ab` partial subsequences to the final `abc` count.

This turns the problem into a single pass over `s2`.
The time complexity is `O(n)`, where `n` is the length of `s2`.
The space complexity is `O(1)` because only three counters are needed for a length-3 target.

### Example walkthrough

Suppose `s1 = "ABC"` and `s2 = "ABCBABC"`.
Scan `s2` from left to right.
Every `A` increases the count of possible starts.
Every `B` extends all previous `A` starts into `AB` pairs.
Every `C` extends all previous `AB` pairs into full `ABC` subsequences.
The final count for this example is 5.

### Pseudocode outline

```text
aCount = 0
abCount = 0
abcCount = 0

for ch in s2:
  if ch == s1[0]:
    aCount += 1
  if ch == s1[1]:
    abCount += aCount
  if ch == s1[2]:
    abcCount += abCount

return abcCount
```

If the target characters can repeat, be careful with update order.
For a more general subsequence problem where `s1` can have any length, use a dynamic programming array and update it from right to left for each character in `s2`.

## Morgan Stanley HackerRank preparation plan

### Practice relevant problem types

A Morgan Stanley HackerRank screen can mix coding problems with multiple-choice fundamentals.
For coding, prioritize medium-difficulty questions that involve arrays, strings, sorting, greedy reasoning, maps, stacks, queues, trees, graphs, and dynamic programming.
For multiple-choice practice, review language syntax, data structure behavior, complexity analysis, SQL basics, and logical reasoning.

Good practice sources include HackerRank, LeetCode, GeeksforGeeks, official language documentation, and your own notes from mock interviews.
ExtraBrain can support this preparation by helping you turn a solved problem into a spoken explanation, a mistake log, or a follow-up practice prompt.

### Build a topic-focused study table

| Topic | Why it matters | Practical strategy |
| --- | --- | --- |
| Sorting and greedy algorithms | Many assessment problems reward choosing the best local action with proof | Practice interval, selection, ranking, and cost-minimization problems |
| Strings and subsequences | String manipulation appears frequently in online assessments | Drill counting, two-pointer, sliding-window, and dynamic programming variants |
| Data structures | MCQs and coding tasks both test how arrays, maps, stacks, queues, trees, and graphs behave | Write short implementations and explain time and space complexity aloud |
| Graph basics | Some analyst and technology roles include graph traversal or dependency-style prompts | Review BFS, DFS, connected components, shortest paths, and adjacency lists |
| Complexity analysis | Passing hidden tests often depends on avoiding unnecessary nested loops | Estimate worst-case input size before writing code |
| Output formatting | Correct logic can still fail if the answer format is wrong | Recreate sample outputs exactly before submitting |

### Simulate the assessment environment

Set a timer and solve two medium coding problems back to back.
Add a short multiple-choice review block before or after the coding session.
Do not pause the timer to search for solutions.
After the session, review the transcript of your reasoning, list the first mistake you made, and decide what you will do differently next time.

ExtraBrain can be useful during these practice sessions when allowed by your own study setup.
You can use live transcription to capture how you explain tradeoffs, screen-aware context to review a prompt or code window, and post-session notes to turn mistakes into a targeted study plan.
If you use external AI or transcription providers, remember that selected prompts, transcript text, screenshots, audio, or context may leave your device depending on your configuration.
A fully local posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible.

## Test-day strategy

### Read the output format first

Before writing code, identify exactly what the function must return or print.
Assessment platforms often include special sentinel values, 1-based indices, sorted index lists, or multiple output lines.
In the brick problem, the algorithm is not enough because the final answer also depends on correct index formatting.

### Work through a tiny example by hand

For the brick problem, try `bigHits = 2` and `newtons = [3, 1, 4]`.
The big hammer should be used on `4` and `3`, while the small hammer handles `1`.
If your code returns the wrong original indices or the wrong total, the bug will appear quickly.

For the subsequence problem, try `s1 = "ABC"` and `s2 = "ABC"` first.
Then try a repeated-character case if the constraints allow it.
Small examples expose update-order errors faster than large hidden tests.

### Optimize the inner loop

If a solution times out, inspect nested loops before rewriting everything.
String subsequence counting is a good example.
A brute-force approach that checks every triple of positions can become too slow.
Replacing repeated scans with cumulative counters or dynamic programming usually fixes the bottleneck.

### Start with a correct baseline

If you forget the optimal algorithm during practice, write a simpler version first and use it to confirm the logic.
Then optimize the slow part.
In a real assessment, a partially correct solution with clear progress is better than getting stuck for the full time on a perfect approach you cannot complete.

### Keep explanations interview-ready

Many candidates practice only code, but later rounds often require explanation.
After solving each problem, practice a 60-second explanation of the approach, correctness argument, complexity, and edge cases.
ExtraBrain can help you review whether your explanation sounded structured, concise, and confident.

## Responsible AI use for Morgan Stanley assessment prep

AI tools can be valuable for learning, mock interviews, transcript review, and post-practice reflection.
They should not be used to bypass rules, hide prohibited assistance, or misrepresent your independent work.
Before using any assistant in a live interview, online assessment, workplace meeting, or school context, check the rules that apply to that setting.

ExtraBrain is best used for allowed preparation workflows such as:

- Turning a solved HackerRank problem into a concise verbal explanation.
- Generating follow-up questions from your own study notes.
- Reviewing a mock interview transcript for clarity and pacing.
- Practicing STAR-style communication for behavioral rounds.
- Keeping a local-first record of lessons learned after each practice session.

The core ExtraBrain Mac app is free.
ExtraBrain Pro is available as a paid plan, and external AI or transcription provider usage is billed separately by the providers you choose.

## FAQ

### What technical rounds usually follow a Morgan Stanley HackerRank test?

After an online assessment, candidates may see additional technical interviews focused on coding, problem solving, role-specific fundamentals, and sometimes system design or business-context technical reasoning.
The exact sequence depends on the role, location, and hiring team.

### What should I do if I forget an algorithm during the interview?

Switch to the simplest correct approach you can explain.
For a subsequence problem, you might start with a brute-force count on a small input to validate the idea, then introduce counters or dynamic programming to improve performance.
Interviewers often care about how you reason, recover, and communicate under pressure.

### How do I avoid losing points on formatting?

Read the output section before coding.
Copy the sample output shape exactly.
Pay attention to 1-based versus 0-based indices, sorted lists, sentinel values such as `[-1]`, newline placement, and integer formatting.
Run every provided sample before submitting.

### How can ExtraBrain help me prepare without crossing assessment boundaries?

Use ExtraBrain before and after practice sessions to capture notes, review transcripts, structure explanations, and identify weak topics.
Use it only in live assessments or interviews when the relevant rules allow AI assistance, transcription, screenshots, or notes.

## See also

- [Microsoft HackerRank test prep](https://extrabrain.app/interview-questions/microsoft-hackerrank-test-extrabrain/)
- [JP Morgan HackerRank test prep](https://extrabrain.app/interview-questions/jp-morgan-hackerrank-test-extrabrain/)
- [Citadel HackerRank questions prep](https://extrabrain.app/interview-questions/citadel-hackerrank-questions-extrabrain/)
- [IBM HackerRank test prep](https://extrabrain.app/interview-questions/ibm-hackerrank-test-extrabrain/)
- [Goldman Sachs HackerRank test prep](https://extrabrain.app/interview-questions/goldman-sachs-hackerrank-test-extrabrain/)
