---
title: "HSBC Codility Test Guide: 3 Coding Questions, Answers, and Prep Tips"
seoTitle: "HSBC Codility Test: 3 Coding Questions, Solutions, and 2026 Prep Guide"
description: "Prepare for the HSBC Codility test with 3 coding questions, solution strategies, format notes, and responsible AI-assisted prep tips."
publishDate: 2026-03-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "HSBC"
  - "Codility Test"
  - "Coding Interview"
  - "Online Assessment"
seoTags:
  - "hsbc codility test"
  - "hsbc online assessment"
  - "codility coding questions"
  - "bank coding interview"
sourceUrl: "exports/interview-questions/hsbc-codility-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/hsbc-codility-test-extrabrain/"
importedAt: "2026-06-25T21:02:56.147Z"
ogImage: "/assets/blog-covers/13-better-questions-not-ai-bans.webp"
ogImageAlt: "Coding interview preparation workspace for HSBC Codility practice"
draft: false
---

## HSBC Codility test overview

HSBC technical online assessments for quantitative, engineering, data, and technology roles often include a Codility coding section.
A representative candidate report described three coding tasks in 60 minutes, with difficulty around easy-to-medium or the easier side of medium.
The themes were string grouping, frequency counting, and a basic graph-degree calculation.

This guide rewrites that experience for ExtraBrain readers who want a practical preparation plan, not shortcuts.
Use these examples to improve your own problem-solving process, practice under timed conditions, and understand the kinds of implementation details that can cost points.
If you use an AI interview assistant during preparation or an actual assessment, follow HSBC, Codility, employer, school, and platform rules.
ExtraBrain can help you practice explanations, review transcripts, and structure follow-up study, but you remain responsible for honest and allowed use.

## Question 1: Remove adjacent duplicates with minimum deletion cost

### Problem pattern

You are given a string and an array of deletion costs.
When adjacent characters are the same, you need to delete enough characters so that no two adjacent remaining characters are identical.
The goal is to minimize the total deletion cost.

A useful way to think about this problem is to group consecutive identical characters.
For a group such as `aaa`, you only need to keep one character.
To minimize cost, keep the character with the highest deletion cost and delete the rest.

### Example reasoning

For a string such as `aabbbcc`, the consecutive groups are `aa`, `bbb`, and `cc`.
For each group, calculate the sum of costs and subtract the maximum cost in that group.
The result is the minimum cost of deleting all extra characters from that group.

If each duplicate pair in `aabbcc` had costs where each group summed to 3 and had a maximum cost of 2, then each group would cost 1 to fix.
The total deletion cost would be `(3 - 2) + (3 - 2) + (3 - 2) = 3`.

### Solution strategy

1. Traverse the string from left to right.
2. Track the running sum of costs for the current group.
3. Track the maximum cost inside the current group.
4. When the character changes, add `groupSum - groupMax` to the answer.
5. Reset the group trackers for the new character.
6. Add the final group after the loop ends.

### Python implementation

```python
def min_deletion_cost(s, costs):
    if not s:
        return 0

    total_cost = 0
    group_sum = costs[0]
    group_max = costs[0]

    for index in range(1, len(s)):
        if s[index] == s[index - 1]:
            group_sum += costs[index]
            group_max = max(group_max, costs[index])
        else:
            total_cost += group_sum - group_max
            group_sum = costs[index]
            group_max = costs[index]

    total_cost += group_sum - group_max
    return total_cost
```

### Complexity

The time complexity is `O(N)` because each character is processed once.
The space complexity is `O(1)` because the algorithm only keeps a few counters.

## Question 2: Make character frequencies unique

### Problem pattern

You are given a string and need to delete the fewest characters so that every remaining character has a unique frequency.
If two characters both appear four times, one of those frequencies must be reduced to a lower unused value.
A frequency can be reduced all the way to zero, which means that character is removed completely.

### Example reasoning

For `aaaabbbb`, the frequencies are `[4, 4]`.
Keep the first frequency as 4.
Reduce the second frequency from 4 to 3, which costs one deletion.
The resulting frequencies are `[4, 3]`, so the answer is 1.

For a case like `aabbcc`, the frequencies are `[2, 2, 2]`.
One character can stay at 2, another can be reduced to 1, and the last can be reduced to 0.
That requires three deletions total.

### Solution strategy

1. Count the frequency of each character.
2. Keep a set of frequencies already used.
3. For each frequency, reduce it until it is either unused or zero.
4. Count each reduction as one deletion.
5. Add nonzero final frequencies to the used set.

### Python implementation

```python
from collections import Counter


def min_deletions_for_unique_frequencies(s):
    used_frequencies = set()
    deletions = 0

    for frequency in Counter(s).values():
        current = frequency
        while current > 0 and current in used_frequencies:
            current -= 1
            deletions += 1
        if current > 0:
            used_frequencies.add(current)

    return deletions
```

### Complexity

The counting step is `O(N)`.
The adjustment step is efficient because every decrement corresponds to one deleted character, so the total work is bounded by the input size.
The space complexity is `O(K)`, where `K` is the number of distinct characters.

## Question 3: Maximum network rank

### Problem pattern

You are given roads between cities and need to find the maximum network rank for a connected pair of cities.
The network rank of two directly connected cities is the number of roads touching either city, with their direct road counted only once.
That means the rank for a road `(u, v)` is `degree[u] + degree[v] - 1`.

### Example reasoning

Suppose the roads are represented by these arrays:

```text
A = [1, 2, 3, 3]
B = [2, 3, 1, 4]
```

The city degrees are:

| City | Degree | Roads counted |
| --- | ---: | --- |
| 1 | 2 | 1-2, 3-1 |
| 2 | 2 | 1-2, 2-3 |
| 3 | 3 | 2-3, 3-1, 3-4 |
| 4 | 1 | 3-4 |

The rank for each road is:

| Road | Rank |
| --- | ---: |
| 1-2 | `2 + 2 - 1 = 3` |
| 2-3 | `2 + 3 - 1 = 4` |
| 3-1 | `3 + 2 - 1 = 4` |
| 3-4 | `3 + 1 - 1 = 3` |

The maximum network rank is 4.

### Solution strategy

1. Build a degree array for all cities.
2. Iterate through every road once to fill degrees.
3. Iterate through every road again to calculate `degree[u] + degree[v] - 1`.
4. Track the maximum value.
5. Return 0 when there are no roads.

### Python implementation

```python
def max_network_rank(city_count, a_roads, b_roads):
    if not a_roads:
        return 0

    degrees = [0] * (city_count + 1)

    for start, end in zip(a_roads, b_roads):
        degrees[start] += 1
        degrees[end] += 1

    best_rank = 0
    for start, end in zip(a_roads, b_roads):
        best_rank = max(best_rank, degrees[start] + degrees[end] - 1)

    return best_rank
```

### Complexity

The time complexity is `O(N + M)` if `N` is the number of cities and `M` is the number of roads.
The space complexity is `O(N)` for the degree array.

## HSBC Codility test format

### Common question types

HSBC Codility questions tend to test whether you can convert a business-style prompt into clean, efficient code.
The problems are usually not about advanced theory.
They are more often about choosing the right data structure, handling edge cases, and writing a correct implementation quickly.

Common categories include:

- **String processing:** grouping adjacent characters, removing duplicates, scanning with two pointers, and reasoning about local changes.
- **Hashing and counting:** using dictionaries, counters, and sets to track frequencies or used values.
- **Array manipulation:** transforming values, checking constraints, and avoiding unnecessary nested loops.
- **Basic graph logic:** counting node degrees, scanning edges, and computing simple metrics.
- **Greedy decisions:** keeping the most valuable item in a group, reducing duplicate frequencies, or optimizing one local choice at a time.

### What the assessment evaluates

The assessment usually rewards practical engineering habits.
A correct solution with clear edge-case handling is better than an overcomplicated solution that is hard to debug.

Expect the test to evaluate:

- **Problem decomposition:** can you turn a paragraph into steps before coding?
- **Data structure choice:** can you identify when to use a list, set, dictionary, heap, or sorted array?
- **Complexity awareness:** can you avoid `O(N^2)` approaches when input sizes are large?
- **Implementation accuracy:** can you manage indexes, boundaries, and final-loop cleanup?
- **Communication readiness:** can you explain why your approach is correct if asked later?

## Preparation plan for the HSBC Codility test

### Phase 1: Build fundamentals

Start with the patterns that show up repeatedly in bank online assessments.
Spend time on arrays, strings, dictionaries, sets, sorting, and simple graph representations.
If you use Python, make sure you are comfortable with `Counter`, list initialization, `zip`, set membership, and clean loop boundaries.

A daily routine can be simple:

- Spend 30 minutes reviewing one data structure.
- Spend 45 to 60 minutes solving two short problems.
- Spend 15 minutes writing down the mistake that slowed you down most.

### Phase 2: Practice by pattern

Do not only solve random problems.
Group practice by topic so your brain learns when to apply each pattern.

Useful practice buckets include:

- Adjacent duplicate removal.
- Frequency uniqueness.
- Greedy deletion problems.
- Prefix sums and counting elements.
- Degree counting in graphs.
- Edge-case-heavy array scanning.

After each problem, write a short template in your own words.
For example, a frequency-uniqueness template might be: count values, keep used frequencies, decrement duplicates until unused or zero.

### Phase 3: Simulate test conditions

In the final week, practice with a timer.
If the target format is three questions in 60 minutes, run at least two mock sessions with that exact setup.

A practical pacing plan is:

| Time | Action |
| ---: | --- |
| 0-5 minutes | Read all questions and identify the easiest one. |
| 5-20 minutes | Solve the easiest question cleanly. |
| 20-40 minutes | Solve the medium question with careful edge cases. |
| 40-55 minutes | Attempt the hardest question or maximize partial credit. |
| 55-60 minutes | Remove debug prints, recheck boundaries, and submit. |

## Coding tips for HSBC Codility

### Start with the invariant

Before writing code, ask what must remain true throughout the algorithm.
For the deletion-cost problem, the invariant is that each processed group contributes its minimum possible deletion cost.
For the unique-frequency problem, the invariant is that every accepted nonzero frequency is unique.
For the network-rank problem, the invariant is that each degree count is accurate before ranks are calculated.

### Write small custom tests

Codility sample tests are useful, but they rarely cover every boundary.
Create quick custom tests before submitting.

For strings, test:

- Empty strings if allowed by constraints.
- Single-character strings.
- All identical characters.
- Alternating characters.
- One large duplicate group at the end.

For counting problems, test:

- All frequencies already unique.
- All frequencies identical.
- Characters that must be reduced to zero.

For graph problems, test:

- No roads.
- One road.
- A star-shaped graph.
- Multiple roads sharing a high-degree city.

### Keep code readable under time pressure

Use variable names that match the problem.
Names like `group_sum`, `group_max`, `degrees`, and `used_frequencies` make debugging easier.
Avoid clever one-liners if they hide the logic.
Codility scoring depends on correctness and performance, not on how compressed the code looks.

### Watch for final-group bugs

String scanning problems often require cleanup after the loop.
If you add group results only when the character changes, remember to add the last group after the loop.
This is one of the easiest ways to lose points on an otherwise correct approach.

### Avoid expensive nested loops

If the input size can reach hundreds of thousands of characters or elements, a nested loop can time out.
Look for a single pass, sorting step, dictionary, or set-based approach before writing `for` inside `for`.

## Using ExtraBrain for responsible Codility preparation

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For Codility preparation, the safest and most useful workflow is to use ExtraBrain before and after practice sessions.
You can talk through your approach, review your reasoning, capture notes from mock interviews, and turn mistakes into a study plan.

A responsible workflow might look like this:

1. Run a timed practice test without help.
2. Record your verbal explanation while solving or reviewing the problem.
3. Use ExtraBrain to summarize where your reasoning was unclear.
4. Ask for alternative explanations of the same pattern.
5. Rewrite the solution from memory the next day.

ExtraBrain should be used only where interview, employer, school, workplace, meeting, and platform rules allow AI assistance, transcription, screenshots, or notes.
A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
If you configure external AI or transcription providers, selected prompts, transcript text, screenshots, audio, or context may be sent to those providers depending on your settings.

## FAQ

### How many questions are in the HSBC Codility test?

A representative HSBC Codility experience included three coding questions in 60 minutes.
The exact number, timing, and difficulty can vary by role, location, hiring team, and year.

### What difficulty level should I expect?

Expect easy-to-medium or medium-level problems focused on practical implementation.
The examples in this guide involve string grouping, frequency counting, and basic graph-degree logic.

### What programming language should I use?

Use the language in which you can write correct code fastest.
Python is popular for Codility because dictionaries, sets, and counters make many assessment patterns concise.
Java, JavaScript, C++, and other supported languages can work well if you are comfortable with their standard libraries.

### Does HSBC only test coding in the online assessment?

Some HSBC hiring processes may include additional assessment components such as personality questions, behavioral prompts, or video interview steps.
The exact process depends on the role and recruiting workflow.

### How should I prepare in the final 48 hours?

Review your error log, redo problems you previously missed, and practice explaining each solution aloud.
Do not spend the final day learning brand-new advanced algorithms unless your fundamentals are already solid.
Focus on clean implementation, edge cases, and pacing.

### Can ExtraBrain give me answers during a live assessment?

ExtraBrain can help generate answer outlines, technical explanations, and follow-up questions from live transcript and screen context, but you should use it only when the assessment rules allow that kind of assistance.
For most online assessments, the responsible use case is preparation, mock review, and post-practice feedback rather than unauthorized live help.

## See also

- [ExtraBrain responsible use](https://extrabrain.app/responsible-use/)
- [ExtraBrain privacy controls](https://extrabrain.app/privacy/)
- [ExtraBrain AI providers](https://extrabrain.app/providers/)
- [ExtraBrain download](https://extrabrain.app/download/)
