---
title: "Riot HackerRank OA Guide: 4 Garden-Grid Questions and Solutions"
seoTitle: "Riot HackerRank OA Questions: 4 Real Garden Grid Challenges"
description: "A practical Riot HackerRank guide covering four garden-grid OA challenges, solution ideas, prep strategy, timing, and responsible AI use."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "HackerRank"
  - "Riot Games"
  - "Coding Interview"
  - "Online Assessment"
seoTags:
  - "riot-hackerrank"
  - "riot-hackerrank-questions"
  - "riot-online-assessment"
  - "hackerrank-test"
sourceUrl: "exports/interview-questions/riot-hackerrank.md"
canonicalUrl: "https://extrabrain.app/interview-questions/riot-hackerrank-extrabrain/"
importedAt: "2026-06-26T07:03:17.798Z"
ogImage: "/assets/blog-covers/05-ai-prep-for-people-who-hate-performing.webp"
ogImageAlt: ""
draft: false
---

The Riot HackerRank online assessment I prepared for was a 120-minute test with four consecutive coding questions.
The shared theme was a garden represented as a grid.
Each question built on the earlier ones, so a clean representation, reliable coordinate handling, and reusable helper functions mattered more than trying to rush into a one-off solution.

The hardest parts were not exotic algorithms.
They were input parsing, output formatting, corner cases, and mapping coordinates correctly when the problem described positions from left to right and top to bottom.
If you are preparing for a similar Riot HackerRank, this guide walks through the four challenge styles, the solution strategy for each one, and the prep habits that helped most.

ExtraBrain can be useful during allowed practice sessions because it gives you live transcription, screen-aware context, and a place to review explanations after a mock interview or study session.
Use any AI interview assistant only where the assessment, employer, school, or platform rules allow AI assistance, transcription, screenshots, or notes.

## Riot HackerRank OA Format

The assessment had four questions and a total time limit of 120 minutes.
The problems were connected by a garden-grid model, so each later challenge reused concepts from earlier ones.

At a high level, the progression looked like this:

| Challenge | Main idea | Core skill tested |
| --- | --- | --- |
| 1 | Build and print a garden grid | Input parsing, 2D arrays, coordinate mapping |
| 2 | Find best blank plots by visible flowers | Grid scanning, directional traversal, tie handling |
| 3 | Validate garden operations with carts | Simulation, stack behavior, invalid-state handling |
| 4 | Simulate ivy spreading through the garden | BFS, simultaneous expansion, previous-state tracking |

The common trap was assuming the algorithm alone would be enough.
For this style of OA, the exact output format can decide whether a mostly correct solution passes or fails.

## Challenge 1: Build and Print the Garden

The first challenge asked me to construct the garden from the input and print the final grid.
The garden had a width and height, and each cell could be blank, contain a flower, or contain a wall.

I represented the garden with a 2D array.
Every position started as `B` for blank.
Then I processed the input entries and updated specific coordinates to `F` for flowers or `W` for walls.
Finally, I printed each row as a string.

### Solution approach

The basic approach was:

1. Read the garden width and height.
2. Create a `height x width` grid filled with `B`.
3. Parse every flower or wall coordinate from the input.
4. Convert each coordinate to the correct row and column.
5. Update the grid cell.
6. Print rows from top to bottom, with characters joined left to right.

The key detail was coordinate mapping.
If the garden has width `w` and height `h`, valid columns are `0` through `w - 1`, and valid rows are `0` through `h - 1`.
If the problem gives a coordinate as `(x, y)`, then `x` usually maps to the column and `y` maps to the row.
That means the grid access pattern is commonly `grid[y][x]`, not `grid[x][y]`.

This is an easy mistake to make under time pressure.
I recommend writing a tiny helper such as `in_bounds(x, y)` and using it consistently from the first challenge onward.

### Edge cases to check

Before moving on, I would test these cases mentally or with custom input if the platform allows it:

- A garden with no flowers or walls.
- A garden with objects in the top-left and bottom-right corners.
- A single-row garden.
- A single-column garden.
- Multiple plot types near each other.

## Challenge 2: Mark the Blank Plot With the Most Visible Flowers

The second challenge used the same garden structure but added visibility logic.
For every blank plot, I needed to count how many flowers were visible in the four cardinal directions.
Then I needed to mark every blank plot with the highest visible-flower count using `*`.

A flower was visible if it appeared north, south, east, or west before a wall or boundary blocked the line of sight.
Walls stopped the scan.
Garden boundaries stopped the scan.
Other blank cells did not stop the scan.

### Solution approach

I started by building the garden grid the same way as in Challenge 1.
Then I iterated through every cell and only considered cells marked `B`.
For each blank cell, I scanned in four directions:

- North by decrementing `y`.
- South by incrementing `y`.
- West by decrementing `x`.
- East by incrementing `x`.

During each scan, I counted `F` cells and stopped when I hit `W` or moved outside the grid.
After calculating a total for every blank cell, I found the maximum score.
Then I marked every blank cell with that score as `*`.

### Handling ties and zero-flower cases

The tie rule mattered.
If several blank cells shared the highest score, all of them needed to be marked.

The zero-flower case also mattered.
If there were no flowers visible anywhere, then every blank plot had the same best score of zero.
In that situation, the expected behavior was to mark all blank plots.

This challenge is a good place to use a small directional helper.
For example, you can store directions as `[(0, -1), (0, 1), (-1, 0), (1, 0)]` and reuse the same scanning loop for all four directions.
That keeps the code shorter and reduces copy-paste mistakes.

## Challenge 3: Validate Garden Operations With a Stack

The third challenge introduced operations on the garden.
The task was to validate a sequence of pick-up and plant actions while maintaining a stack that represented a flower cart.

The rules were straightforward but strict.
A pick-up operation was valid only when the target position contained the expected flower type.
After a valid pick-up, the garden position became `B`, and the flower was pushed onto the stack.

A plant operation was valid only when the target position was `B` and the top of the stack matched the flower being planted.
After a valid plant action, the top flower was popped from the stack and placed in the garden.
At the end, the stack needed to be empty.

### Solution approach

I used this process:

1. Build the initial garden grid.
2. Create an empty stack.
3. Process operations in order.
4. For each pick-up operation, verify the target cell contains the expected flower.
5. If valid, set that cell to `B` and push the flower onto the stack.
6. For each plant operation, verify the stack is non-empty, the top stack item matches the requested flower, and the target cell is blank.
7. If valid, pop from the stack and place the flower in the garden.
8. If any operation is invalid, stop immediately and output the current garden state with `false`.
9. If every operation is valid, output `true` only if the stack is empty at the end.

The stack was the main concept here.
It is Last-In-First-Out, so a plant action can only use the most recently picked-up flower that has not already been planted.

### Common failure modes

The most common mistakes were:

- Forgetting to stop after the first invalid operation.
- Popping from an empty stack.
- Planting a flower type that is not on top of the stack.
- Letting a plant operation overwrite a non-blank cell.
- Returning success before checking the final stack state.

If the problem statement guarantees that a valid plan ends with an empty stack, you still need to validate intermediate operations carefully.
An invalid operation can happen before the final state is reached.

## Challenge 4: Simulate Ivy Growth With BFS

The fourth challenge asked me to simulate ivy spreading through the garden.
Ivy expanded in the four cardinal directions each day.
It stopped at walls, existing ivy, boundaries, or flowers.
The goal was to find the first day when ivy touched a flower and then output the garden state from the previous day.

This is a classic breadth-first search problem with simultaneous expansion.
Each BFS layer represents one day.

### Solution approach

I started by finding every initial ivy position and storing those positions in a queue or set.
Then I simulated growth day by day.

For each current ivy position, I checked the four adjacent cells.
If a neighboring cell contained `F`, the ivy reached a flower on that day.
At that point, the answer was the current day count, and the grid to print was the previous day's grid.
If a neighboring cell contained `B`, I changed it to `I` and added it to the next day's frontier.
If it contained `W` or `I`, I skipped it.

The important detail was simultaneous growth.
You should not let a cell added during the current day immediately spread again on the same day.
That is why the solution should separate the current frontier from the next frontier.

### Tracking the previous garden state

Because the output required the previous day's garden state, I needed to preserve the grid before applying each day's expansion.
A simple way to do this is to copy the grid at the start of each day.
Then, if a flower is reached during that day's expansion, print the saved copy instead of the newly modified grid.

This challenge is where a clean structure from the first three problems pays off.
If you already have helpers for bounds checks, direction loops, and grid printing, the BFS logic becomes much easier to implement correctly.

## Preparation Plan for a Riot HackerRank

The best preparation strategy was not memorizing one exact problem.
It was practicing the patterns that appeared repeatedly: grid construction, directional scans, stack simulation, BFS, and strict output formatting.

### What I practiced

I focused on these categories:

- 2D arrays and coordinate conversion.
- Grid traversal in four directions.
- Simulation problems with mutable state.
- Stack-based validation.
- BFS with levels or days.
- Custom test cases for edge conditions.
- Exact printing requirements.

For a 120-minute four-question assessment, speed comes from having reliable templates in your head.
For example, the same `directions` array can support visibility scanning and BFS expansion.
The same `print_grid` helper can be reused across all questions.

### Resources that helped

| Resource | Purpose | How to use it |
| --- | --- | --- |
| HackerRank | Timed coding practice | Practice parsing, output format, and medium-difficulty problems |
| LeetCode | Pattern practice | Focus on grids, BFS, stacks, and simulations |
| Glassdoor | Interview context | Look for broad assessment themes, not exact answer scripts |
| TeamBlind | Candidate discussion | Read timing and difficulty feedback with caution |
| ExtraBrain | Practice review | Use live transcription and screen-aware notes during allowed mock sessions |

ExtraBrain is especially useful for review after practice.
You can run a mock coding session, talk through your reasoning, and then review the transcript to find where you hesitated, skipped edge cases, or explained a solution poorly.

## Time Management Strategy

The four-question format made timing tight.
I would not spend too long perfecting the first problem if the core output already worked.
Each question built on the same garden structure, so the goal was to create stable helper functions early and then reuse them.

A practical time split is:

| Time window | Goal |
| --- | --- |
| First 10 minutes | Read all instructions and understand the shared grid model |
| Next 20 minutes | Solve Challenge 1 cleanly and create reusable helpers |
| Next 30 minutes | Solve Challenge 2 and test visibility edge cases |
| Next 30 minutes | Solve Challenge 3 and test invalid operation paths |
| Final 25 minutes | Solve Challenge 4 with BFS and previous-state tracking |
| Final 5 minutes | Recheck formatting, boundaries, and sample outputs |

That split is only a guide.
If Challenge 1 or 2 takes longer, do not panic.
The same helpers can still help you recover time later.

## How to Use ExtraBrain Responsibly While Preparing

ExtraBrain is a free, local-first desktop AI interview assistant and meeting copilot for Mac.
It can help with live transcription, screen-aware context, practice-session notes, and post-session review.
It supports local Parakeet transcription and local Gemma 4 on-device AI where installed and compatible, plus bring-your-own providers such as Anthropic, OpenAI, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription.

For HackerRank preparation, the most responsible use is before and after the actual assessment.
Use it to practice explaining your approach aloud, capture where you got stuck, compare your final solution against your intended algorithm, and build a better review loop.

During a real OA, follow the rules given by Riot, HackerRank, your recruiter, your school, and any other applicable platform or workplace policy.
Do not use AI assistance, transcription, screenshots, or notes if the rules prohibit them.

## FAQ

### How long after the OA can follow-up results arrive?

In the source experience, the candidate completed the OA in the morning and had an HR call scheduled by the afternoon.
That was very fast, but timelines can vary by recruiter, role, region, and hiring cycle.

### What should I watch out for in the garden-grid problems?

The biggest risk is mixing up rows and columns.
Keep `x` as the column and `y` as the row unless the prompt explicitly defines something different.
Then consistently access the grid as `grid[y][x]`.

The second risk is printing the wrong state.
Challenge 3 may require the current state at the first invalid operation.
Challenge 4 may require the state from the previous day, not the state after ivy touches a flower.

### What algorithms should I review before the Riot HackerRank?

Review 2D arrays, directional traversal, stacks, simulations, and BFS.
You do not need a huge catalog of advanced algorithms for this specific garden-style assessment.
You do need to be precise with state updates and output formatting.

### Is there a quick way to improve before the test?

Practice one timed grid problem per day for a week.
After each attempt, write down the exact bug that cost you time.
Most candidates improve faster by fixing repeated implementation mistakes than by grinding random hard problems.

### Can ExtraBrain generate interview answers?

ExtraBrain can help generate answer outlines, technical explanations, STAR structures, and follow-up questions from live transcript and screen context.
Candidates remain responsible for honest and allowed use.

## See Also

- [Nvidia HackerRank test guide](https://extrabrain.app/interview-questions/nvidia-hackerrank-test-extrabrain/)
- [Citadel HackerRank questions guide](https://extrabrain.app/interview-questions/citadel-hackerrank-questions-extrabrain/)
- [IBM HackerRank test guide](https://extrabrain.app/interview-questions/ibm-hackerrank-test-extrabrain/)
- [MathWorks HackerRank assessment guide](https://extrabrain.app/interview-questions/mathworks-hackerrank-assessment-extrabrain/)
- [Goldman Sachs HackerRank test guide](https://extrabrain.app/interview-questions/goldman-sachs-hackerrank-test-extrabrain/)
