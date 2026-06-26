---
title: "Marshall Wace Codility Test Experience and Preparation Guide"
seoTitle: "Marshall Wace Codility Test: Questions, SQL, Coding, and Prep Tips"
description: "Prepare for the Marshall Wace Codility test with realistic question patterns, SQL and coding examples, and responsible practice advice."
publishDate: 2026-03-14
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Marshall Wace"
  - "Codility Test"
  - "Coding Interview"
  - "SQL Interview"
seoTags:
  - "marshall-wace-codility-test"
  - "marshall-wace-online-assessment"
  - "codility-test-prep"
  - "sql-coding-interview"
sourceUrl: "exports/interview-questions/marshall-wace-codility-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/marshall-wace-codility-test-extrabrain/"
importedAt: "2026-06-25T21:37:17.804Z"
ogImage: "/assets/blog-covers/star-method-broken-without-memory.webp"
ogImageAlt: ""
draft: false
---

## Marshall Wace Codility Test Overview

The Marshall Wace Codility test is commonly described as a concise online assessment for technical and quantitative technology roles.
One reported intern assessment included one LeetCode-style coding problem based on JSON or event-style data processing, one SQL question, and one debugging task in a less familiar programming language.
The exact format can change by role, year, office, and hiring team, so treat this as a realistic preparation guide rather than a guaranteed question list.

For candidates, the main lesson is simple.
Prepare for clean data processing, SQL grouping logic, sliding-window patterns, debugging unfamiliar syntax, and careful time management.

If you use an AI interview assistant such as [ExtraBrain](https://extrabrain.app), use it only where the assessment, employer, school, workplace, and platform rules allow AI assistance, transcription, screenshots, or notes.
ExtraBrain can help you practice, review transcripts, structure explanations, and learn from mock sessions, but you remain responsible for honest and allowed use.

## What the Assessment May Test

A Marshall Wace technical online assessment may combine practical engineering tasks with data-heavy reasoning.
You should be ready for questions that ask you to write efficient code, reason about edge cases, and explain why your solution scales.

Common skill areas include:

- SQL aggregation and filtering.
- JSON, log, or event data processing.
- Sliding windows and two-pointer algorithms.
- Hash maps and set-based deduplication.
- Debugging code in unfamiliar syntax.
- Boundary-condition handling.
- Clear communication of complexity.

## Example Question 1: SQL Login Analysis

A common SQL-style prompt asks you to identify users who satisfy multiple conditions across login records.
For example, you might be given a `login_attempts` table with columns such as `user_id`, `country`, and `status`.
The task is to return every user who has at least one successful login and has logged in successfully from two or more distinct countries.

### Solution Approach

First, filter the table to keep only successful login attempts.
Then group by `user_id`.
Then count the number of distinct countries per user.
Finally, keep only users whose distinct country count is at least two.

```sql
SELECT user_id
FROM login_attempts
WHERE status = 'SUCCESS'
GROUP BY user_id
HAVING COUNT(DISTINCT country) >= 2
ORDER BY user_id;
```

### Why This Works

The `WHERE` clause removes failed attempts before aggregation.
The `GROUP BY` clause creates one group per user.
The `COUNT(DISTINCT country)` expression counts unique successful-login countries for each user.
The `HAVING` clause filters aggregated groups, which is why it is used instead of another `WHERE` clause.

### Edge Cases to Check

Check users with only failed logins.
Check users with successful logins from only one country.
Check duplicate successful logins from the same country.
Check user IDs that sort differently as strings versus numbers.

## Example Question 2: Maximum Events in 60 Seconds

Another realistic coding prompt involves finding the maximum number of events that occur within any 60-second interval.
You may be given a sorted list of timestamps and asked to return the largest number of timestamps contained in a valid window.

For example:

```text
timestamps = [1, 2, 61, 62, 121]
```

A valid answer is `2`, because the windows `[1, 2]` and `[61, 62]` each contain two events.

### Sliding Window Strategy

Because the timestamps are sorted, a two-pointer sliding window is more efficient than checking every pair of start and end positions.
Keep a left pointer at the start of the current window.
Move the right pointer through the list.
Whenever the current window becomes wider than the allowed interval, move the left pointer forward.
Track the largest window size seen.

```python
def max_events_in_60_seconds(timestamps):
    left = 0
    best = 0

    for right, timestamp in enumerate(timestamps):
        while timestamp - timestamps[left] >= 60:
            left += 1
        best = max(best, right - left + 1)

    return best
```

This version treats a window as containing events that occur less than 60 seconds apart from the first event in the window.
If your prompt defines the interval as inclusive, adjust the condition to match the exact wording.

### Complexity

The time complexity is `O(n)` because each pointer moves forward at most `n` times.
The extra space complexity is `O(1)` because the algorithm only stores pointer positions and the best count.

### Mistakes to Avoid

Do not use a nested loop unless the input size is tiny.
Do not ignore whether the 60-second boundary is inclusive or exclusive.
Do not assume the input is non-empty unless the prompt guarantees it.
Do not forget to test duplicate timestamps.

## Example Question 3: Debugging an Unfamiliar Language

Some candidates report a debugging task written in a less familiar language.
The goal is usually not to become fluent in that language during the assessment.
The goal is to read syntax carefully, infer the intended logic, and identify a small bug.

### How to Approach It

Start by identifying inputs, outputs, loops, conditionals, and return values.
Look for off-by-one errors, incorrect comparisons, misplaced braces, wrong variable names, and type conversions.
If the platform allows language documentation, use it responsibly and within the stated rules.

A useful debugging checklist is:

1. Read the function signature.
2. Identify the expected return type.
3. Trace the sample input manually.
4. Compare actual control flow with intended control flow.
5. Make the smallest correct change.
6. Re-run visible tests and add mental tests for boundaries.

## Preparation Plan for the Marshall Wace Codility Test

### Practice SQL Aggregation

Spend time on `GROUP BY`, `HAVING`, `COUNT(DISTINCT ...)`, joins, date filtering, and ordering.
Many candidates know basic SQL but lose time when a query requires filtering before and after aggregation.
Practice writing queries from scratch without relying on autocomplete.

### Practice Data Processing

Marshall Wace-style technical work often rewards comfort with structured data.
Practice parsing lists of dictionaries, JSON-like records, logs, and transaction events.
Focus on producing correct results while keeping the code readable.

Strong practice themes include:

- Filtering invalid records.
- Grouping records by ID.
- Counting unique values.
- Finding maximum values over time windows.
- Handling missing fields.
- Returning stable sorted output.

### Practice Efficient Algorithms

You do not need to memorize every algorithm, but you should be fluent with patterns that appear in timed assessments.
Focus on arrays, strings, dictionaries, sets, sorting, binary search, two pointers, and sliding windows.
For each solution, practice saying the time and space complexity out loud.

### Practice Robust Code

Write code that handles empty input, single-element input, duplicate records, unexpected ordering, and boundary values.
Use clear variable names and simple control flow.
Avoid clever code that becomes hard to debug under time pressure.

### Practice Under Timed Conditions

A practice problem solved slowly is useful for learning.
A practice problem solved under a timer is useful for assessment readiness.
Do both.

Set a realistic timer, avoid pausing, and review what slowed you down afterward.
ExtraBrain can be useful during permitted practice sessions because it can help you review your explanation, capture transcript notes, and identify where your reasoning became unclear.

## Platform and Setup Checklist

### Before Test Day

Create or access your Codility account if instructed.
Run an official demo test to understand the editor, language selection, test execution, and submission flow.
Check your browser, keyboard, camera, microphone, internet connection, and power source.
Disable distracting notifications and unnecessary extensions.

### On Test Day

Read the instructions before opening the first problem.
Confirm the allowed programming languages.
Confirm whether external references, notes, AI tools, or documentation are allowed.
Keep a visible clock or timer if permitted.
Reserve time to run examples and inspect edge cases before submission.

### During the Test

Start with the problem you understand best if the platform allows free navigation.
If you get stuck, write down the blocker and move on.
A partial correct solution with clear logic can be better than spending the whole session on one unfinished idea.

## Responsible Use of AI During Preparation

AI tools can be helpful for learning, mock interviews, explanation practice, and post-session review.
ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, bring-your-own AI providers, local Gemma 4 where installed and compatible, and privacy controls.
It can support coding interviews, system design rounds, behavioral interviews, meetings, lectures, and research calls.

Use AI responsibly.
Do not use AI assistance in a live assessment unless the instructions explicitly allow it.
Do not try to bypass monitoring, impersonate independent work, or violate platform rules.
The best use of ExtraBrain for a Codility-style assessment is usually before and after the real test: practice aloud, review explanations, build a personal mistake log, and improve your problem-solving process.

## Candidate Advice

### Application Process

Read the job description carefully and map it to the skills likely to be tested.
Prepare your resume and application materials before starting technical practice.
Work through coding and SQL problems daily in short focused sessions.
Set up a quiet test environment before the assessment window opens.
Review every answer before submitting when time allows.

### Useful Practice Resources

Use official Codility practice tests to learn the platform.
Use LeetCode and HackerRank for algorithm practice.
Use SQL practice sites for aggregation, joins, and filtering drills.
Use reputable discussion forums carefully, but avoid assuming someone else's reported question will appear unchanged.
Use mock interviews to practice explaining tradeoffs under pressure.

## Final Checklist

Before starting the Marshall Wace Codility test, confirm these points:

- Your application details are complete and accurate.
- You understand the assessment time limit.
- You know which programming languages are allowed.
- You have practiced SQL, data processing, and sliding-window problems.
- Your device, browser, internet connection, and power setup are stable.
- You understand the rules around notes, documentation, AI assistance, and external resources.
- You have a plan for allocating time across questions.

## FAQ

### How long is the Marshall Wace Codility online assessment?

One reported intern assessment lasted about 70 minutes.
Other roles, especially quantitative or more senior technical roles, may use longer assessments or include more coding questions.
Always follow the duration shown in your official invitation.

### Are there non-coding questions in the Marshall Wace assessment?

Some candidates report SQL, debugging, and multiple-choice questions in addition to coding tasks.
The mix can vary by role and hiring cycle.

### Which programming language should I use?

Use the language you can write correctly and debug quickly.
Python is often convenient for data processing and interview-style algorithms, while C++ and Java can also be strong choices if you are more comfortable with them.

### What should I practice first if I have limited time?

Practice SQL aggregation, sliding windows, hash maps, sorting, and careful edge-case testing.
These areas cover many common timed-assessment patterns and are especially relevant to data-heavy coding questions.

### Can ExtraBrain help me prepare for a Codility test?

Yes, ExtraBrain can help during allowed preparation by supporting live practice sessions, transcripts, notes, screen-aware context, answer outlines, and post-practice review.
Use it only where your interview, employer, school, workplace, and platform rules allow AI assistance, transcription, screenshots, or notes.

## See Also

- [AI interview preparation with ExtraBrain](https://extrabrain.app)
- [Responsible AI interview support](https://extrabrain.app/responsible-use/)
- [ExtraBrain privacy and data handling](https://extrabrain.app/privacy/)
