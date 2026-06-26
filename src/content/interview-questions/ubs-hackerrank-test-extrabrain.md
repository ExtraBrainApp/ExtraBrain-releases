---
title: "UBS HackerRank Test Experience: Coding Question, MCQs, and Prep Notes"
seoTitle: "UBS HackerRank Test Questions: Coding Problem, MCQs, and Prep Strategy"
description: "A practical UBS HackerRank prep guide covering the blacklisted IP coding task, MCQ themes, timing strategy, and responsible AI-assisted practice."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - UBS
  - HackerRank
  - Coding Interviews
  - Online Assessment
seoTags:
  - ubs hackerrank test
  - ubs online assessment
  - ubs coding interview
  - hackerrank interview questions
sourceUrl: "exports/interview-questions/ubs-hackerrank-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/ubs-hackerrank-test-extrabrain/"
importedAt: "2026-06-26T08:14:47.494Z"
ogImage: "/assets/blog-covers/how-to-cheat-and-pass-glider-ai-test-extrabrain.webp"
ogImageAlt: "Developer preparing for a real coding interview with structured practice notes"
draft: false
---

The UBS HackerRank assessment I reviewed had a compact but demanding structure.
It included one coding problem, one multiple-select question, and fourteen single-select multiple-choice questions.
The coding task focused on blacklisted IPs, wildcard matching, and rate limiting in a five-second window.
The MCQ section leaned heavily toward Java, build configuration, concurrency, testing frameworks, and practical engineering judgment.

This guide rewrites the experience for ExtraBrain readers who want to prepare responsibly.
Use it to understand the problem style, practice your own implementation, and build a stronger review workflow before the assessment.
If you use AI tools while preparing or during any live assessment, follow the rules from UBS, HackerRank, your recruiter, your school, and the platform.
ExtraBrain is designed for allowed interview preparation, live note support, transcript review, screen-aware context, and post-session learning, not for bypassing assessment rules.

## UBS HackerRank Test Format

The assessment was time pressured and broad.
The coding question required careful algorithm design rather than just syntax recall.
The multiple-choice section tested whether a candidate could reason about enterprise Java development details under time constraints.

A practical way to think about the format is:

| Section | Approximate focus | What it tested |
| --- | --- | --- |
| Coding problem | Blacklisted IP filtering and request throttling | Hash maps, queues, string matching, sliding windows, edge cases |
| Multiple-select question | Conceptual Java or engineering detail | Accuracy under ambiguity |
| Single-select MCQs | Java, Maven, concurrency, Mockito, modern language features | Enterprise development knowledge and precise recall |

The combined assessment time was about 70 minutes.
That is enough time if you already know the patterns, but it can feel tight if you discover the sliding-window logic from scratch during the test.

## Coding Question: Blacklisted IPs

The coding question can be summarized as a request-blocking system.
For every incoming IP request, return `1` if the request should be blocked and `0` if it should be allowed.
A request can be blocked for either of two reasons.

First, the IP may match a blacklist pattern.
Second, the IP may exceed the allowed number of successful requests within a rolling five-second window.

The difficulty is not in any single line of code.
The difficulty is combining wildcard matching, state tracking, and precise rules about which requests count as successful.

### Why This Is a Medium-Level Problem

I would classify this as a medium HackerRank problem.
It is not a pure dynamic programming or graph problem, but it has enough moving parts to punish a rushed implementation.

The two core challenges are:

1. **Wildcard IP matching.**
   The blacklist patterns may contain `*`, so the implementation needs a reliable way to match patterns against IP strings.
2. **Sliding-window rate limiting.**
   The code must track successful requests per IP and remove timestamps that are no longer inside the five-second window.

The most important detail is that blocked requests do not count as successful requests.
If you accidentally add blocked requests to the history, later outputs can become incorrect.

## How to Interpret the Problem

A clean solution separates the two blocking rules.
Treat blacklist matching and rate limiting as two independent checks.
Then combine them in the request-processing loop.

### Rule 1: Blacklist Pattern Matching

The input includes a list of blacklisted IP patterns.
Each current request IP should be compared against every pattern.
If any pattern matches, the request is blocked immediately.

The number of blacklist patterns is usually small enough that checking each pattern per request is acceptable.
That means the important part is correctness, not over-engineering a trie or automaton.

For many languages, you can convert the wildcard pattern to a safe regular expression.
For example, `*` can become `.*`, while dots should be escaped so they match literal dots.
If you do this, make sure the pattern is anchored from start to end.
Otherwise, a partial match can incorrectly block an IP.

### Rule 2: Five-Second Rate Limit

The rate-limit rule applies only when the request was not already blocked by the blacklist.
For each IP, store the timestamps of successful requests.
When a new request arrives, remove timestamps that are outside the five-second window.
If the IP already has at least two successful requests in the valid window, block the new request.
If it has fewer than two, allow the request and add the current timestamp.

This is where a deque is useful.
Old timestamps leave from the front, and new successful timestamps enter at the back.
That makes the per-request cleanup efficient.

## Recommended Data Structure

Use a map from IP address to a deque of successful request timestamps.
The key is the IP address string.
The value is a deque ordered from oldest timestamp to newest timestamp.

```text
successfulRequests: Map<String, Deque<Integer>>
```

This structure works because each timestamp is inserted once and removed once.
Across all requests, the sliding-window cleanup is amortized efficient.

## Pseudocode Approach

The processing loop can be written as a small sequence of decisions.
The exact timestamp convention depends on the problem statement, but the structure stays the same.

```text
answers = []
successfulRequests = empty map from ip to deque

for each request index i and ip:
    if isBlacklisted(ip, blacklistedPatterns):
        answers.add(1)
        continue

    times = successfulRequests.getOrCreate(ip)

    while times is not empty and times.front is outside the five-second window:
        times.popFront()

    if times.size >= 2:
        answers.add(1)
        continue

    times.pushBack(i)
    answers.add(0)

return answers
```

The two `continue` statements are intentional.
They prevent blocked requests from being recorded as successful requests.
That is the most common bug in this problem.

## Wildcard Matching Details

If you use regular expressions, escape every special character except the wildcard.
For IP-style strings, the dot is the most obvious character to escape.
A pattern like `192.168.*` should not treat each dot as “any character.”

A safe mental transformation is:

```text
original pattern: 192.168.*
regex pattern:    ^192\.168\..*$
```

If your chosen language has a glob matcher, you can use it if it matches the required semantics.
Do not assume the matcher is correct without checking whether it anchors the entire string.
In assessment settings, a short custom matcher may be safer than relying on a library function you do not fully remember.

## Edge Cases to Test

Before submitting, test the cases that expose off-by-one and state-tracking mistakes.

- An IP that matches a blacklist pattern on its first request.
- An IP that has two allowed requests and then a third request inside the five-second window.
- An IP whose old requests expire exactly at the window boundary.
- A blocked request followed by another request from the same IP.
- Multiple IPs interleaved with each other.
- A blacklist pattern with `*` at the beginning, middle, and end.
- A pattern that should not match because only a substring matches.

These cases are more useful than only testing the happy path.
They verify the exact logic HackerRank hidden tests are likely to stress.

## Multiple-Choice Question Themes

The MCQ section felt slightly harder than the coding question because it required exact recall across several engineering topics.
The questions were not just about memorizing Java syntax.
They tested whether a candidate understands how production Java systems are built, configured, tested, and kept safe under concurrency.

### Java Collections and Concurrency

Expect questions that compare collection behavior under single-threaded and multithreaded usage.
You may need to know when ordinary collections are unsafe, when synchronized wrappers help, and when concurrent collections are the better design.

This matters because financial systems often process high-volume events, shared state, and parallel workloads.
A candidate who ignores data races can produce code that passes simple tests but fails in production.

### Maven and Build Configuration

Some questions can focus on the structure of Maven configuration files.
That may include dependencies, plugins, compiler settings, scopes, and project metadata.

The practical lesson is simple.
Do not treat build configuration as boilerplate.
In enterprise environments, a small configuration mistake can break portability, dependency resolution, or deployment consistency.

### Mockito and Testing Frameworks

Testing questions may go beyond basic assertions.
They can check whether you understand mocks, stubs, verification, object state, and how behavior changes depending on test setup.

Prepare by practicing small examples.
Read a test and predict exactly what happens before running it.
That skill transfers well to MCQs where you cannot execute code.

### Java 8 and Modern Language Features

Modern Java topics can include lambda expressions, functional interfaces, streams, method references, and concise collection processing.
The goal is not just to write shorter code.
The goal is to recognize the behavior of modern constructs and avoid subtle mistakes.

## What the UBS Assessment Seems to Value

The assessment appears designed to evaluate engineering judgment as much as raw coding speed.
The blacklisted IP problem is a good example because it resembles a simplified real-world control system.
You must filter bad inputs, track recent activity, and preserve performance under repeated requests.

Three themes stand out.

### Efficient Data Structure Selection

The coding problem rewards choosing the right data structures early.
A hash map gives fast access to each IP’s request history.
A deque gives efficient removal of expired timestamps.
Together, they keep the solution simple and scalable.

A brute-force scan over all past requests may pass small examples, but it is not the right mindset for this assessment.
Think in terms of amortized cost before you write code.

### Robustness and Risk Control

The problem is also about correctness under edge cases.
You need to track only successful requests.
You need to define the time window consistently.
You need to make wildcard matching exact.

That kind of detail is especially important in finance-adjacent systems.
A small edge-case bug in filtering, throttling, or state cleanup can become a serious reliability problem.

### Enterprise Engineering Standards

The MCQs suggest that UBS values candidates who can work inside mature engineering environments.
That means understanding build tools, dependency behavior, test frameworks, modern Java style, and concurrency concerns.

The assessment is not only asking whether you can solve a puzzle.
It is asking whether your code and judgment would fit into a larger production system.

## Timing Strategy for the Assessment

Start by scanning the entire assessment if the platform allows it.
Answer obvious MCQs quickly, mark uncertain ones mentally, and reserve enough time for the coding task.
The coding task usually has the highest upside because hidden performance tests can separate correct-looking submissions from truly correct solutions.

A reasonable strategy is:

1. Spend a few minutes scanning the MCQs.
2. Answer questions that are direct recall.
3. Move to the coding problem before too much time is gone.
4. Design the data structures before writing code.
5. Implement the blacklist matcher separately from the rate limiter.
6. Run edge cases before submitting.
7. Return to uncertain MCQs with remaining time.

Do not spend too long debating one MCQ early in the assessment.
A single stuck conceptual question can steal time from the coding problem, where careful implementation matters more.

## How ExtraBrain Can Help You Prepare Responsibly

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot.
For preparation, it can help you practice explaining your approach, review transcripts of mock sessions, organize notes, and reason through coding tradeoffs.
It supports live transcription, screen-aware context, local Parakeet transcription, local Gemma 4 on-device AI where installed and compatible, bring-your-own AI providers, and clear privacy controls.

For a UBS HackerRank-style assessment, a responsible preparation workflow could look like this:

- Practice the blacklisted IP problem aloud and use ExtraBrain to capture your explanation.
- Review where your reasoning became unclear or too slow.
- Ask for follow-up prompts about sliding windows, hash maps, deques, and wildcard matching.
- Use session notes to build a checklist of edge cases.
- Rehearse concise explanations for Java collections, Maven, Mockito, and concurrency topics.

ExtraBrain should be used only where interview, employer, school, workplace, meeting, and platform rules allow AI assistance, transcription, screenshots, or notes.
If a live assessment prohibits AI tools, use ExtraBrain before and after the assessment for practice and review instead.

## Practical Prep Checklist

Use this checklist before attempting a UBS HackerRank-style test.

- Implement a sliding-window rate limiter from scratch.
- Practice wildcard string matching without relying on a black-box helper.
- Review `HashMap`, `Queue`, `Deque`, and concurrent collection behavior.
- Review Java 8 lambdas, functional interfaces, and stream behavior.
- Refresh Maven dependency scopes and compiler plugin configuration.
- Practice reading Mockito tests and predicting verification results.
- Write edge cases before you submit code.
- Explain your time complexity in one or two sentences.
- Keep a calm fallback plan for difficult MCQs.

## FAQ

### How long is the UBS HackerRank assessment?

The combined assessment time described in the source experience was about 70 minutes.
That included the coding task and the multiple-choice questions.
The time pressure is real, so move on when a question is taking too long and return later if the platform permits.

### Is the UBS HackerRank coding question hard?

The blacklisted IP question is best treated as medium difficulty.
The individual ideas are familiar, but the combination of wildcard matching, per-IP history, and a rolling time window requires careful implementation.

### Should I prioritize the coding question or the MCQs?

Prioritize the coding question once you have answered the easy MCQs.
The coding problem gives you more room to demonstrate algorithmic skill, and hidden performance tests often matter.
Still, do not ignore MCQs because the section checks practical Java and enterprise engineering knowledge.

### What is the most common mistake in the blacklisted IP problem?

The most common mistake is counting blocked requests as successful requests.
Only allowed requests should be added to the per-IP deque.
Another common mistake is using wildcard matching that allows partial matches instead of matching the full IP string.

### Can ExtraBrain generate interview answers for practice?

ExtraBrain can help generate answer outlines, STAR structures, technical explanations, and follow-up questions from transcript and screen context.
Candidates remain responsible for honest and allowed use.
For live assessments, follow all rules from the employer, school, platform, and interview instructions.

## See Also

- [Nvidia HackerRank test prep](https://extrabrain.app/interview-questions/nvidia-hackerrank-test-extrabrain/)
- [Citadel HackerRank questions](https://extrabrain.app/interview-questions/citadel-hackerrank-questions-extrabrain/)
- [IBM HackerRank test guide](https://extrabrain.app/interview-questions/ibm-hackerrank-test-extrabrain/)
- [MathWorks HackerRank assessment prep](https://extrabrain.app/interview-questions/mathworks-hackerrank-assessment-extrabrain/)
- [Goldman Sachs HackerRank test notes](https://extrabrain.app/interview-questions/goldman-sachs-hackerrank-test-extrabrain/)
