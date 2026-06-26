---
title: "Anthropic Coding Interview Question Bank for 2026"
seoTitle: "Anthropic Coding Interview Questions, Follow-Ups, and Prep Guide"
description: "A practical Anthropic coding interview question bank with six problem themes, follow-ups, prep notes, and responsible AI practice advice."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Anthropic Interview"
  - "Coding Interview"
  - "Interview Preparation"
seoTags:
  - "anthropic coding interview"
  - "anthropic interview questions"
  - "coding interview prep"
sourceUrl: "exports/interview-questions/anthropic-coding-interview.md"
canonicalUrl: "https://extrabrain.app/interview-questions/anthropic-coding-interview-extrabrain/"
importedAt: "2026-06-25T18:30:53.781Z"
ogImage: "/assets/blog-covers/how-to-cheat-on-spark-hire-extrabrain.webp"
ogImageAlt: "Coding interview preparation workspace with live technical notes"
draft: false
---

Anthropic coding interviews are often described as practical programming sessions rather than trivia-heavy algorithm drills.
The recurring pattern is that candidates are expected to read a problem carefully, ask clarifying questions, write runnable code, reason about tradeoffs, and iterate when the interviewer adds constraints.

This guide rewrites a collected Anthropic coding interview question bank into a practical ExtraBrain preparation article.
It focuses on the six problem themes candidates frequently discuss: web crawling, cache design, profiler stack traces, distributed mode and median, trace visualization, and tokenization.

Use this article for study, mock interviews, and post-practice review.
During a real interview, follow Anthropic's instructions and any recruiter guidance exactly.
If a live interview says AI tools are not allowed, do not use ExtraBrain or any other AI assistant during that session.
ExtraBrain is best used where rules allow it, such as preparation, mock interviews, notes, transcripts, and after-action review.

## What to expect in the Anthropic coding round

Many candidates report that Anthropic frames the coding interview as a real-work programming conversation.
That means the interviewer may care as much about your communication and iteration as your final code.

A typical recruiter note may emphasize that the round is pure programming problem solving and does not reward memorizing standard data structures.
You may be allowed to choose your preferred language, and you may be asked to run code in an interview platform such as CodeSignal or another shared coding environment.

The most useful preparation pattern is simple.
Read the prompt out loud, define assumptions, implement the simplest correct version, test it on small examples, and then optimize only after the interviewer agrees with the direction.

## How ExtraBrain fits into Anthropic interview prep

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For Anthropic prep, it can help you run mock sessions, capture your explanation style, review missed edge cases, and build a second-brain-style workspace around your practice attempts.

For a fully local posture, use local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on your configuration.
Always use ExtraBrain only where interview, employer, school, workplace, meeting, and platform rules allow AI assistance, transcription, screenshots, or notes.

## Anthropic Coding Question 1: Web Crawler

### Prompt theme

The interviewer wants to see how you work in a realistic coding environment.
You should be comfortable with concurrency and with the primitives or libraries available in your chosen language.

### Problem description

Implement a web crawler starting from one seed URL.
The crawler should discover reachable links and visit only URLs that belong to the same domain as the seed.

In many versions of this question, the interviewer provides a helper such as `get_urls(url)`.
That helper performs the HTTP request and extracts links, so the candidate can focus on traversal, deduplication, filtering, and concurrency.

The first version is usually synchronous.
A straightforward breadth-first search is enough: keep a queue of URLs to visit, keep a visited set, fetch links from the current URL, normalize or filter them lightly, and enqueue same-domain links that have not been visited.

After the synchronous version works, the interviewer may ask for a threaded or asynchronous implementation.
The important part is to protect shared state, avoid crawling the same URL twice, and explain how ready tasks are scheduled.

### Core algorithm sketch

```python
from collections import deque
from urllib.parse import urldefrag, urlparse


def crawl(seed_url, get_urls):
    seed_domain = urlparse(seed_url).netloc
    visited = set()
    queue = deque([urldefrag(seed_url).url])

    while queue:
        url = queue.popleft()
        if url in visited:
            continue

        if urlparse(url).netloc != seed_domain:
            continue

        visited.add(url)

        for next_url in get_urls(url):
            clean_url = urldefrag(next_url).url
            if urlparse(clean_url).netloc == seed_domain and clean_url not in visited:
                queue.append(clean_url)

    return visited
```

### Follow-up questions to practice

- How would you make the crawler concurrent with `ThreadPoolExecutor`?
- How would you avoid blocking an event loop if using `asyncio`?
- How would you process a URL as soon as its fetch completes?
- What is the difference between threads and processes for this workload?
- How would you implement a politeness policy to avoid overloading a server?
- How would you distribute crawling across many workers and millions of URLs?
- How would you detect duplicate content available through different URLs?

### Preparation notes

This is an I/O-bound problem, so threads or async I/O can help.
In Python, `ThreadPoolExecutor` is often the simplest practical answer because web fetching spends most of its time waiting on network I/O.

If you use coroutines, make sure the underlying networking calls are non-blocking.
A blocking HTTP client inside an event loop can remove most of the benefit of async code.

Mention production concerns only after the basic crawler is correct.
Good production details include rate limits, retries, timeouts, robots policy, canonicalization, content hashing, persistent queues, and shard ownership.

## Anthropic Coding Question 2: LRU Cache and Durable Cache

### Prompt theme

The interviewer wants to see how you read existing code and extend it safely.
You may receive a template containing an in-memory cache implementation and be asked to debug or improve it.

### Problem description

The first task may be to find a bug in a cache key generator.
A common issue is that function arguments are converted into a cache key in a way that does not handle keyword arguments, mutable values, or equivalent calls consistently.

The second task may be to extend the cache into a durable cache.
If the process crashes and restarts, the cache should restore its data without losing committed entries.

A simple interview-level design is to write cache mutations to disk and replay them during startup.
For a stronger answer, describe atomic writes, write-ahead logs, snapshots, fsync tradeoffs, and recovery from partial writes.

### Follow-up questions to practice

- Is cache persistence CPU-bound or I/O-bound?
- How would you implement durability in a distributed cache?
- What consistency guarantees does the cache need after a crash?
- How would you handle eviction with durable state?
- How would you make cache keys deterministic for positional and keyword arguments?

### Preparation notes

In Python, pay attention to how `args` and `kwargs` are represented.
A robust key builder should preserve call equivalence, avoid unhashable structures, and avoid collisions between different argument shapes.

For durability, avoid promising perfect reliability without naming the assumptions.
A practical interview answer can start with a single append-only log, then move to compaction, checksums, and replication if the interviewer asks about scale.

## Anthropic Coding Question 3: Stack Samples to Trace Events

### Prompt theme

This problem is about converting sampled profiler data into timeline events.
It tests careful comparison of adjacent stacks more than memorized algorithms.

### Problem description

You are given samples sorted by timestamp.
Each sample contains a timestamp and the current call stack from outermost frame to innermost frame.

The goal is to produce start and end events for a trace visualizer.
When a function appears in a new stack, emit a `start` event.
When a function disappears from the stack, emit an `end` event.
Nested calls must end before enclosing calls.
Frames still present in the last sample may remain open depending on the exact prompt wording.

A small example looks like this.

```text
Sample(1.0, ["main"])
Sample(2.5, ["main", "func1"])
Sample(3.1, ["main"])
```

The expected events are conceptually:

```text
start 1.0 main
start 2.5 func1
end   3.1 func1
```

### Core algorithm sketch

Compare the previous stack and current stack.
Find their longest common prefix.
End every previous frame after that prefix in reverse order.
Start every current frame after that prefix in forward order.

```python
def convert_to_trace(samples):
    events = []
    previous = []

    for timestamp, current in samples:
        common = 0
        while common < len(previous) and common < len(current) and previous[common] == current[common]:
            common += 1

        for name in reversed(previous[common:]):
            events.append(("end", timestamp, name))

        for name in current[common:]:
            events.append(("start", timestamp, name))

        previous = current

    return events
```

### Follow-up questions to practice

- What should happen to frames still active in the final sample?
- How would you handle repeated function names at different stack depths?
- How would you identify functions that appear continuously across N samples?
- How would you identify functions that remain active for at least a duration `t`?
- How would you handle malformed samples that are not sorted by timestamp?

### Preparation notes

Do not treat function names as globally unique.
A stack such as `a -> b -> a -> c` is valid, and each depth is a separate frame occurrence.
The longest-common-prefix approach handles repeated names correctly because it compares by position.

## Anthropic Coding Question 4: Distributed Mode and Median

### Prompt theme

This problem tests distributed-systems reasoning, not just local coding.
You should be ready to discuss parallel computation, network efficiency, and map-reduce style aggregation.

### Problem description

Given a very large dataset spread across machines, assign work so the cluster can find the mode.
Some versions describe 10 nodes and primitives such as `send`, `recv`, and `barrier`.
The constraints may make local disk or data reads faster than network communication, or vice versa.

The simplest solution is for each node to compute a local frequency map, then send counts to one coordinator that merges them and returns the global mode.
This may be acceptable when the number of distinct keys is small.

If the number of distinct keys is large, the better approach is often repartitioning by key.
Each node sends counts for a key to the node responsible for that key's hash range.
Then each reducer finds local maxima over its assigned keys, and a final small aggregation picks the global mode.

### Follow-up: finding the median

Median is harder because counts alone are not always enough unless the value range is bounded or can be bucketed.
Strong answers include distributed sorting, approximate quantiles, histograms, range partitioning, and iterative selection.

If values are integers in a bounded range, each node can build a histogram and reduce histograms globally.
If values are unbounded, a distributed selection algorithm or sample-based range partitioning may be needed.

### Preparation notes

Do not optimize blindly.
Write down the bottleneck: local read bandwidth, network bandwidth, memory, number of unique values, and whether exactness is required.

A naive local-counts-to-coordinator answer can be surprisingly fast under some constraints.
Still, interviewers often want to see that you can evolve it into a sharded reduce plan when coordinator memory or network traffic becomes a bottleneck.

## Anthropic Coding Question 5: Profiler Trace Variant

### Prompt theme

This is another stack-sample-to-trace problem, but it may be presented as a standard coding exercise with less context.
The challenge is to stay calm, clarify the data model, and handle repeated frames correctly.

### Problem description

Sampling profilers periodically capture the entire call stack.
The stack is ordered from outermost function to innermost function.
Unlimited execution can happen between two samples, so the trace you reconstruct is only an approximation of what was observed at sample times.

Example:

```text
Sample(0.0, ["a", "b", "a", "c"])
Sample(1.0, ["a", "a", "b", "c"])
```

The first sample starts `a`, then `b`, then another `a`, then `c`.
At the second sample, the longest common prefix is only the first `a`.
That means the old `c`, old inner `a`, and old `b` must end before the new `a`, `b`, and `c` start.

Conceptually:

```text
start 0.0 a
start 0.0 b
start 0.0 a
start 0.0 c
end   1.0 c
end   1.0 a
end   1.0 b
start 1.0 a
start 1.0 b
start 1.0 c
```

### Follow-up questions to practice

- How would you detect a call that appears in N consecutive samples?
- How would you detect a call that stays active for at least `t` seconds?
- How would you store events for a trace viewer efficiently?
- What assumptions are unsafe when samples are sparse?

### Preparation notes

If you misunderstand the problem, spend time aligning on one concrete example.
A five-minute clarification can save the rest of the interview.
For this problem, the key clarification is whether active frames in the last sample should be closed artificially or left open.

## Anthropic Coding Question 6: Tokenization and Code Review

### Prompt theme

This question combines code reading, code review, edge-case analysis, and implementation.
It does not require deep machine-learning tokenization knowledge, but it does reward clear reasoning about ambiguous requirements.

### Problem description

You may receive a simple `tokenize` and `detokenize` implementation.
The tokenizer builds a string key character by character and emits a token whenever the key appears in the vocabulary.

```python
def tokenize(text: str, vocab: dict):
    tokens = []
    key = ""
    for char in text:
        key += char
        if key in vocab:
            tokens.append(vocab[key])
            key = ""
    return tokens


def detokenize(tokens, vocab: dict):
    reversed_vocab = {value: key for key, value in vocab.items()}
    text = ""
    for token in tokens:
        text += reversed_vocab[token]
    return text
```

A sample vocabulary might be:

```python
vocab = {
    "a": 1,
    "b": 2,
    "cd": 3,
}
```

The first review point is that uncovered characters can disappear silently.
For example, if the input contains a character that is not in the vocabulary and not a prefix of any vocabulary entry, the current code may fail to emit a recoverable token.

A later version may introduce an `UNK` token.
That raises several review questions.
What if the literal string `UNK` appears in input text?
What should detokenization return for unknown text?
Should one unknown token represent one missing character, one missing span, or a sentinel that cannot be reversed?
Should the tokenizer prefer the shortest matching token or the longest matching token?

### Safer implementation direction

A clear interview answer starts by asking whether `tokenize` and `detokenize` must be perfectly reversible.
If they must be reversible, replacing unknown characters with a single `UNK` token loses information unless the unknown character is also stored.
If reversibility is not required, `UNK` can be acceptable but should be documented in the expected behavior.

For a longest-prefix tokenizer with a fallback unknown token, you can scan forward and choose the longest vocabulary key that matches the current position.

```python
def tokenize(text: str, vocab: dict):
    tokens = []
    unknown = vocab.get("UNK")
    i = 0

    while i < len(text):
        best_key = None
        for key in vocab:
            if key == "UNK":
                continue
            if text.startswith(key, i) and (best_key is None or len(key) > len(best_key)):
                best_key = key

        if best_key is not None:
            tokens.append(vocab[best_key])
            i += len(best_key)
        elif unknown is not None:
            tokens.append(unknown)
            i += 1
        else:
            raise ValueError(f"No token for character at position {i}")

    return tokens
```

This version is easy to explain but not necessarily optimal.
For a larger vocabulary, you can build a trie so longest-prefix lookup is efficient.

### Follow-up questions to practice

- Should tokenization be reversible?
- How should unknown characters be represented?
- Should matching prefer the shortest token or longest token?
- How would a trie improve lookup speed?
- How would you test tokenization and detokenization as a pair?

## Key Anthropic coding interview insights

The recurring questions are not difficult because they use obscure algorithms.
They are difficult because they are open-ended, easy to misunderstand, and often followed by production-style constraints.

Prepare every follow-up, not just the first implementation.
For Anthropic-style interviews, a candidate who writes a basic solution and then explains concurrency, durability, distributed aggregation, or ambiguity handling can stand out.

Practice communication as much as code.
Say what you are assuming, name edge cases, test small examples, and invite correction before building a large solution.

Do not rely on memorized final answers.
If the interviewer changes one constraint, a memorized answer can collapse.
A better goal is to understand the shape of each problem well enough to adapt.

Use ExtraBrain before and after practice sessions to review your reasoning.
For example, you can run a mock crawler interview, capture your spoken explanation, then ask ExtraBrain to summarize missing edge cases, unclear tradeoffs, and follow-up questions to drill next.

## Responsible AI use for Anthropic interview preparation

ExtraBrain can help generate answer outlines, technical explanations, follow-up questions, and review notes from transcripts and screen context.
That does not mean it should be used in every live interview.

If a company or interviewer says AI tools are not permitted during the interview, respect that rule.
Use ExtraBrain for preparation before the interview, for personal notes that are allowed, and for post-interview reflection where permitted.

If an interview allows notes, transcription, or AI assistance, confirm the boundaries before the session.
Responsible use protects both your candidacy and the integrity of the process.

## FAQ

### What should I do if I get stuck on an Anthropic coding question?

State what you understand, name the part you are unsure about, and propose a small example.
Interviewers often respond well when candidates keep the conversation moving instead of silently freezing.

If rules allow AI-assisted practice before the interview, use ExtraBrain to rehearse getting unstuck.
For a live interview, follow the stated rules for AI tools, notes, search, and screen sharing.

### Does the Anthropic coding interview require screen sharing or camera use?

Some candidates report being asked to share their screen in a video meeting and to work in a shared coding environment.
Prepare your browser permissions, microphone, camera, and coding setup before the interview so logistics do not consume problem-solving time.

### Are AI tools allowed in the Anthropic coding interview?

Follow the specific recruiter and interviewer instructions you receive.
If the instructions say AI tools are not allowed, do not use them during the live interview.
ExtraBrain can still be useful for mock interviews, practice transcripts, notes, and reviewing your own performance before or after the real session where permitted.

### How soon should I expect a follow-up after the interview?

Timelines vary by role, recruiter workload, and hiring committee process.
If you have not heard back after about a week, a polite follow-up to your recruiter is reasonable.

### What is the best way to prepare for these six problem themes?

Implement each problem from scratch at least twice.
Then practice the follow-ups out loud: concurrency for the crawler, crash recovery for the cache, repeated frames for trace conversion, network bottlenecks for distributed mode, sparse samples for profiling, and ambiguity for tokenization.

## See also

- [ExtraBrain responsible use guide](https://extrabrain.app/responsible-use/)
- [ExtraBrain privacy overview](https://extrabrain.app/privacy/)
- [ExtraBrain AI providers](https://extrabrain.app/providers/)
- [ExtraBrain help center](https://extrabrain.app/help/)
