---
title: "DRW Codility Assessment: Questions, Patterns, and Prep Notes"
seoTitle: "DRW Codility Assessment Questions and Preparation Guide"
description: "Prepare for the DRW Codility assessment with coding patterns, solution ideas, practice structure, and responsible AI interview prep tips."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "DRW"
  - "Codility"
  - "Coding Interview"
  - "Online Assessment"
seoTags:
  - "drw codility assessment"
  - "drw online assessment"
  - "codility coding interview"
  - "drw coding questions"
sourceUrl: "exports/interview-questions/drw-codility-assessment.md"
canonicalUrl: "https://extrabrain.app/interview-questions/drw-codility-assessment-extrabrain/"
importedAt: "2026-06-25T19:57:51.743Z"
ogImage: "/assets/blog-covers/best-ai-overlay-for-interview-extrabrain.webp"
ogImageAlt: ""
draft: false
---

## DRW Codility Assessment Overview

The DRW Codility assessment is usually described as a timed technical screen for software engineering, trading technology, and quantitative engineering roles.
Candidates should expect a practical coding test that rewards clean logic, efficient algorithms, and careful edge-case handling.

A commonly reported format is a 150-minute assessment with three coding questions.
The questions often increase in difficulty, starting with direct logic or string construction and moving toward optimization or graph-style reasoning.

The goal is not only to pass sample tests.
The goal is to produce code that is readable, fast enough for hidden cases, and easy to reason about under pressure.

ExtraBrain readers should treat this guide as preparation support, not as permission to violate assessment rules.
Use AI assistance, transcription, notes, or screen context only where DRW, Codility, your recruiter, and the assessment rules allow it.

## Reported Question Pattern 1: Construct a String with Odd Character Counts

One reported first-task pattern asks you to build a string of length `N` where each character used in the string appears an odd number of times.
This is a compact logic problem that checks whether you can reason from constraints before writing code.

### Core idea

If `N` is odd, the simplest valid answer is one repeated character.
For example, if `N = 5`, returning `aaaaa` works because `a` appears five times.

If `N` is even, use one character `N - 1` times and a second character once.
For example, if `N = 6`, returning `aaaaab` works because `a` appears five times and `b` appears one time.

### Example solution outline

```python
def solution(n):
    if n % 2 == 1:
        return "a" * n
    return "a" * (n - 1) + "b"
```

The time complexity is `O(N)` because the output string has length `N`.
The space complexity is also `O(N)` for the returned string.

### What to watch for

Do not overcomplicate this problem with frequency maps or backtracking.
The constraint is about parity, so a direct construction is enough.

Also check the smallest inputs.
For `N = 1`, the answer can simply be `a`.
For `N = 2`, the answer can be `ab`.

## Reported Question Pattern 2: Minimum Swaps to Make Two Numbers Closer

A second reported pattern involves two numbers represented as digit strings.
The task is to decide how many digit swaps between the two strings are needed to make the resulting numbers as close as possible.

This kind of problem tests greedy reasoning, comparison of numeric differences, and careful handling of digits without accidentally losing leading zeros.

### Useful way to think about it

You are not sorting arbitrary arrays.
You are deciding whether swapping paired digits at the same position improves the final relationship between the two numbers.

A basic approach is to scan from left to right, evaluate whether a swap reduces the difference, and count swaps that improve the objective.
That intuition is useful, but the exact proof depends on the problem statement and constraints.

### Candidate solution strategy

1. Keep both values as strings while making digit-level decisions.
2. Compare the effect of swapping a position before committing to it.
3. Prefer decisions that reduce the absolute difference or preserve the best reachable result.
4. Track the number of swaps separately from the resulting value comparison.
5. Re-check edge cases where digits are equal, values already match, or leading digits dominate the difference.

### Why this can be tricky

A locally useful swap at a low-significance digit may not matter if a higher-significance digit has already determined the ordering.
A high-significance swap can also change the direction of the comparison, which may affect later choices.

For that reason, do not rely on sample tests alone.
Write your own checks for equal strings, one-digit strings, repeated digits, and cases where the first differing digit appears late.

## Reported Question Pattern 3: Matching Patients to Time Slots

A third reported pattern resembles bipartite matching.
Each patient has two acceptable time slots, and each slot can be assigned to at most one patient.
The task is to decide whether every patient can receive a valid slot.

This is a classic graph-modeling problem.
Patients belong on the left side of the graph, time slots belong on the right side, and each patient has edges to their acceptable slots.

### Matching approach

1. Build an adjacency list from each patient to the two slots they can accept.
2. Maintain a map from slot to currently assigned patient.
3. For each patient, run a DFS-based augmenting-path search.
4. If a preferred slot is free, assign it.
5. If a preferred slot is occupied, try to move the occupying patient to another valid slot.
6. Return `true` only if all patients can be matched.

### Example solution outline

```python
def can_schedule(preferences):
    assigned_slot_to_patient = {}

    def try_assign(patient, seen_slots):
        for slot in preferences[patient]:
            if slot in seen_slots:
                continue
            seen_slots.add(slot)
            if slot not in assigned_slot_to_patient or try_assign(assigned_slot_to_patient[slot], seen_slots):
                assigned_slot_to_patient[slot] = patient
                return True
        return False

    for patient in range(len(preferences)):
        if not try_assign(patient, set()):
            return False
    return True
```

For `N` patients and `S` slots, a straightforward augmenting-path solution is often efficient enough for moderate constraints.
The exact complexity depends on the representation, but the common bound is `O(N * E)`, where `E` is the number of preference edges.
With two preferences per patient, the graph is sparse.

### What to practice before this problem

Review bipartite graphs, augmenting paths, DFS recursion, and visited-set handling.
Most wrong answers come from forgetting to reset the visited slots for each new patient or from failing to reassign an already matched patient.

## What DRW-Style Codility Questions Test

DRW-style online assessments tend to reward practical algorithmic thinking.
You need to identify the pattern quickly, choose an efficient enough solution, and implement it with minimal debugging overhead.

### String and construction logic

String construction problems test whether you can turn a condition into a direct output.
They often look unfamiliar at first, but many reduce to parity, counting, or simple casework.

### Greedy and optimization reasoning

Optimization problems test whether you can justify local decisions.
A greedy solution is only safe when the local choice cannot block a better global outcome.
If you cannot prove that, build more tests or consider dynamic programming, sorting, or state tracking.

### Graph modeling

Matching and scheduling problems test whether you can translate a story into nodes, edges, and constraints.
Once the model is correct, the implementation is usually a known algorithm.

### Edge-case discipline

Hidden tests are where many candidates lose points.
You should test empty or minimal inputs, duplicate values, already-valid cases, maximum-size cases, and inputs where the obvious greedy move is suspicious.

## Preparation Plan for the DRW Codility Assessment

### Pick one language and stay with it

Choose the language you can write fastest with the fewest mistakes.
Python is often effective for quick implementation, Java is useful if you are strongest in typed structure, and C++ can be a good fit for candidates comfortable with STL and performance details.

Do not switch languages right before the assessment.
The speed advantage comes from muscle memory, not from picking the theoretically best language.

### Build a focused topic checklist

Use a small checklist instead of trying to review every algorithm topic equally.
The DRW Codility format rewards breadth, but you still need to prioritize likely patterns.

| Topic | Why it matters | Practice target |
| --- | --- | --- |
| Arrays and strings | Common first-question material | Construction, scanning, counting |
| Hash maps and sets | Fast lookup and duplicate handling | Frequency maps, seen states |
| Sorting | Simplifies many optimization problems | Custom keys, intervals, ranking |
| Greedy algorithms | Common for minimum-operation tasks | Proofs and counterexamples |
| DFS and BFS | Useful for graph and search problems | Connected components, paths |
| Bipartite matching | Useful for assignment constraints | Augmenting path implementation |
| Complexity analysis | Needed for hidden test cases | Time and space estimates |

### Simulate the actual assessment

Set a 150-minute timer and solve three problems in one sitting.
Use the first few minutes to read all questions and estimate difficulty.
Then solve the easiest reliable problem first, because early accepted tests reduce pressure.

After each simulation, review three things.
First, identify where you lost time.
Second, identify which bugs appeared more than once.
Third, rewrite one solution from scratch until it feels natural.

### Improve speed without becoming sloppy

Speed comes from repeatable patterns.
Keep templates in your head for frequency counting, prefix sums, binary search, graph traversal, and matching.
Do not paste forbidden templates into an assessment environment unless the rules explicitly allow it.

A good speed routine is simple.
Read carefully, restate the requirement, write the core invariant, implement the simplest correct version, test manually, then optimize only if needed.

## How to Use ExtraBrain Responsibly While Preparing

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For assessment preparation, it can help you review practice sessions, explain algorithm tradeoffs, generate follow-up questions, and turn mistakes into a study plan.

Use ExtraBrain only in ways that match the rules of your interview, employer, school, workplace, and assessment platform.
If a live assessment forbids AI assistance, screenshots, transcription, external tools, or notes, do not use those features during that assessment.

### Responsible prep workflows

Use ExtraBrain before the assessment to practice explaining your approach aloud.
A coding interview copilot can help you turn a rough solution into a clearer explanation, but you should still write and understand the code yourself.

Use session review after mock tests to identify repeated mistakes.
For example, you can review whether you skipped edge cases, chose the wrong data structure, or spent too long optimizing before the basic solution worked.

Use local-first settings when privacy matters.
A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on configuration.

## Common Mistakes to Avoid

### Misreading the prompt

Many Codility mistakes start before the first line of code.
Read the return format, input constraints, and examples carefully.
If the problem asks for any valid answer, do not waste time finding the prettiest answer.

### Trusting sample cases too much

Sample cases are not a complete test suite.
They show format and basic behavior, but hidden tests usually check edge cases and performance.

### Optimizing too early

A simple correct solution is often better than a clever incomplete one.
Get the baseline working, then improve complexity if the constraints require it.

### Ignoring numeric representation details

When numbers are represented as strings, leading zeros and digit positions may matter.
Do not convert to integers unless you are sure the constraints and semantics allow it.

### Forgetting to explain tradeoffs

Even in an online assessment, later interviews may ask how you solved the problem.
Practice explaining why your algorithm is correct and what its complexity is.

## Final DRW Codility Study Checklist

1. Practice three-question timed sets.
2. Review arrays, strings, greedy algorithms, DFS, BFS, and matching.
3. Memorize common implementation patterns, not final answers.
4. Write custom tests before submitting.
5. Track edge cases in a small checklist.
6. Practice explaining complexity in one or two sentences.
7. Follow all assessment and interview rules for tools, notes, AI, and collaboration.

| Final tip | Why it helps |
| --- | --- |
| Solve the easiest problem first | Builds momentum and protects points |
| Write down constraints | Prevents wrong complexity choices |
| Test tiny inputs | Catches off-by-one errors fast |
| Keep code readable | Makes debugging faster under pressure |
| Review after practice | Turns mistakes into a focused study plan |

## FAQ

### How long is the DRW Codility assessment?

A commonly reported format is 150 minutes for three coding questions.
Your exact invitation may differ, so always follow the instructions in your official assessment email.

### Does Codility show hidden test cases?

Codility typically shows sample tests but not the full hidden test suite.
That means you should create your own tests for edge cases, large inputs, duplicates, and boundary values.

### Can I get partial credit if only some tests pass?

Many online assessment platforms can award partial credit when some tests pass, but scoring rules vary by employer and assessment.
It is usually better to submit a working core solution than to leave a problem blank while chasing a perfect optimization.

### What should I practice for DRW Codility?

Practice string construction, arrays, greedy optimization, graph traversal, and bipartite matching.
Also practice explaining why your algorithm works, because technical follow-up interviews often evaluate reasoning as much as final code.

### Can ExtraBrain help with DRW Codility preparation?

ExtraBrain can help with responsible preparation by reviewing mock interview transcripts, organizing coding mistakes, generating practice explanations, and helping you study algorithm tradeoffs.
During any real assessment, use it only if the applicable rules allow AI assistance, transcription, screenshots, or notes.

## See Also

[ExtraBrain responsible use guidance](https://extrabrain.app/responsible-use/)

[ExtraBrain privacy and data handling](https://extrabrain.app/privacy/)

[ExtraBrain AI providers](https://extrabrain.app/providers/)
