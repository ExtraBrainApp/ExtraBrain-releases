---
title: "Stripe HackerRank Online Assessment Questions and Prep Notes"
seoTitle: "Stripe HackerRank Online Assessment Questions: 6 Practice Problems"
description: "Six Stripe HackerRank OA-style problems, part-by-part requirements, examples, preparation tips, and responsible AI interview prep guidance."
publishDate: 2026-02-11
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Stripe Interview"
  - "HackerRank Online Assessment"
  - "Coding Interview Prep"
seoTags:
  - "stripe-hackerrank-online-assessment"
  - "stripe-oa-questions"
  - "hackerrank-test-prep"
sourceUrl: "exports/interview-questions/stripe-hackerrank-online-assessment.md"
canonicalUrl: "https://extrabrain.app/interview-questions/stripe-hackerrank-online-assessment-extrabrain/"
importedAt: "2026-06-26T07:33:46.679Z"
ogImage: "/assets/blog-covers/nvidia-broadcast-interview-extrabrain.webp"
ogImageAlt: "AI-assisted coding interview preparation for Stripe HackerRank practice"
draft: false
---

Stripe online assessments can feel different from ordinary algorithm drills because the prompts are often long, business-flavored, and split into progressive parts.
Instead of solving one isolated LeetCode-style task, you may need to build a small system, carry state across events, handle edge cases, and keep your code easy to extend as new requirements appear.

This guide rewrites a Stripe HackerRank OA preparation article for ExtraBrain readers.
It preserves the practical problem patterns, example formats, and preparation advice, while framing AI assistance responsibly.
Use these examples for allowed practice, mock interviews, note-taking, and review.
During any real assessment, follow Stripe's instructions, HackerRank rules, employer policies, school rules, and platform terms.

[ExtraBrain](https://extrabrain.app) is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
It can help you rehearse explanations, organize solution outlines, review transcripts, and practice follow-up questions when that kind of support is allowed.
It should not be used to bypass assessment rules or misrepresent your own work.

## What Makes the Stripe HackerRank OA Challenging

Many Stripe-style OA problems test implementation discipline more than memorized tricks.
The first part is often straightforward, but later parts add persistence, event handling, reversals, redactions, corrupted inputs, or policy changes.

Strong candidates usually do three things well:

- Parse the input carefully before coding.
- Design state that can survive later requirements.
- Write small helper functions for normalization, validation, sorting, and event application.

The six problem sets below are useful practice because they resemble the type of incremental requirements candidates often report seeing in payment, fraud, subscription, and operations-themed coding assessments.

## Stripe HackerRank Online Assessment Practice Questions

### Problem 1: Atlas Company Name Check

**Background**

Stripe Atlas helps founders register a US company remotely.
One important step is checking whether a proposed company name is available.
The check cannot rely only on exact string equality because names that differ only by punctuation, casing, suffixes, or filler words may still be considered the same.

#### Part 1: Basic Name Availability Check

You need to determine whether a proposed company name is available after normalizing it.
Compare each normalized proposal against normalized names that have already been registered.

The normalization rules include:

- Ignore case.
- Treat `&` and `,` as spaces.
- Collapse consecutive spaces into one space.
- Ignore standard company suffixes such as `Inc.`, `Corp.`, `LLC`, `L.L.C.`, and `LLC.` in a case-insensitive way.
- Ignore a leading `The`, `An`, or `A`.
- Ignore `And` unless it appears at the start of the name.
- Treat an empty normalized name as unavailable.

Each request line contains an `account_id` and a proposed name separated by `|`.
For every request, output `account_id|Name Available` or `account_id|Name Not Available`.
Once a name is accepted, it becomes registered and unavailable for later requests.

#### Part 2: Persistent Registration Tracking

Extend the solution so the system keeps a permanent set of registered normalized names.
If any merchant submits a name that was previously registered by anyone, the name should be unavailable.
This is mostly a state-management extension, so your Part 1 normalization function should remain reusable.

#### Part 3: Name Reclamation Requests

Companies may dissolve and free their names for reuse.
Add support for reclamation requests in this shape:

```text
RECLAIM,account_id,original_proposed_name
```

Only the account that originally registered the exact original proposal should be allowed to reclaim it.
When a valid reclaim request arrives, remove the normalized name from the unavailable set.
A robust solution should track both normalized name ownership and the original proposed name associated with successful registrations.

#### Implementation Approach

Create a `normalize_name` helper first.
Then maintain maps such as `normalized_name -> account_id` and possibly `(account_id, original_name) -> normalized_name` for reclamation.
Be especially careful with suffix stripping, leading articles, repeated spaces, and names that normalize to an empty string.

### Problem 2: Card Range Obfuscation

**Problem Description**

Payment card numbers are often 8 to 19 digits long.
For this problem, a 6-digit Bank Identification Number, or BIN, defines all 16-digit card numbers that start with that BIN.
For example, BIN `424242` covers `4242420000000000` through `4242429999999999`.

A card metadata API may return intervals inside the BIN range, each mapped to a card brand.
If the returned intervals contain gaps, those gaps can leak useful information to attackers.
Your task is to return sorted intervals that cover the full BIN range without gaps.

#### Input Format

The input contains:

1. A 6-digit BIN.
2. A positive integer `n`, the number of intervals.
3. `n` lines in the format `start,end,brand`.

The `start` and `end` values are 10-digit offsets inside the BIN range.
The brand is an alphanumeric string.

#### Output Format

Return sorted, gap-free intervals in the format:

```text
start,end,brand
```

The output `start` and `end` values must be full 16-digit card numbers formed by concatenating the BIN and the 10-digit offset.

#### Example

Input:

```text
777777
2
1000000000,3999999999,VISA
4000000000,5999999999,MASTERCARD
```

Output:

```text
7777770000000000,7777773999999999,VISA
7777774000000000,7777775999999999,MASTERCARD
```

#### Notes and Edge Cases

If intervals already cover the full range, sort them and output them.
If there is a gap at the beginning, middle, or end, fill it so the final output covers offsets `0000000000` through `9999999999` inclusively.
Inclusive endpoints are the easiest place to make off-by-one mistakes.
Represent offsets as integers internally, but preserve zero padding when formatting the final card numbers.

### Problem 3: Catch Me If You Can - Fraud Detection

**Background**

Stripe processes large volumes of transactions, so fraud detection systems need clear rules, careful state, and predictable event handling.
This simplified practice problem marks merchants as fraudulent when too many transactions are suspicious.
The problem evolves across three parts.

#### Part 1: Count-Based Fraud Detection

Each merchant has a Merchant Category Code, or MCC, representing its industry.
Each MCC has a fraud threshold, which is the maximum allowed count of fraudulent transactions before the merchant is marked fraudulent.

You are given:

1. A comma-separated list of non-fraudulent response codes.
2. A comma-separated list of fraudulent response codes.
3. A table of MCC thresholds in the format `MCC,threshold`.
4. A table of merchants in the format `account_id,MCC`.
5. A minimum number of total transactions that must be observed before evaluation.
6. A table of charges in the format `CHARGE,charge_id,account_id,amount,code`.

Return a lexicographically sorted, comma-separated list of fraudulent merchant account IDs.

#### Part 2: Percentage-Based Fraud Detection

Count-based thresholds can be unfair for high-volume merchants.
Replace the count threshold with a fractional threshold between 0 and 1.
A merchant is fraudulent if its fraud fraction is greater than or equal to its MCC threshold after the minimum total transaction count is reached.
Once a merchant is marked fraudulent, it stays fraudulent even if the later percentage decreases.

#### Part 3: Dispute Resolution

Some transactions can be disputed and reclassified.
Add support for events like:

```text
DISPUTE,charge_id
```

A disputed transaction should be treated as non-fraudulent for calculations.
If a merchant was marked fraudulent only because of disputed transactions, it may return to non-fraudulent status until it crosses the threshold again.

#### Implementation Approach

Track transactions by `charge_id` so disputes can update prior state.
Track per-merchant totals and fraudulent counts, or recompute from stored transactions if the input size allows it.
For Part 3, the safest approach is often to store every charge and recalculate affected merchant status after a dispute.
That avoids subtle bugs where a disputed charge is subtracted twice or where the previous merchant state is not restored correctly.

### Problem 4: Store Closing Time Penalty

**Problem Description**

A store records whether customers were present during each hour.
Each hour is represented by one letter:

- `Y` means customers were present.
- `N` means no customers were present.

For example:

```text
hour: | 1 | 2 | 3 | 4 |
log:  | Y | Y | N | Y |
```

A closing time is an integer from `0` to `n`.
Closing time `0` means the store never opens.
Closing time `n` means the store stays open for all logged hours.

#### Penalty Definition

For a selected closing time:

- Add 1 for each open hour with no customers.
- Add 1 for each closed hour with customers present.

#### Part 1: Compute Penalty

Write a function like:

```text
def compute_penalty(log: str, closing_time: int) -> int:
    ...
```

The log is a space-separated sequence of `Y` and `N` values.
Return the total penalty.

#### Part 2: Find the Best Closing Time

Write a function like:

```text
def find_best_closing_time(log: str) -> int:
    ...
```

Return the closing time with the smallest penalty.
If several closing times tie, return the smallest closing time.

A simple solution can evaluate every closing time, but a prefix-sum solution is cleaner and faster.
Precompute how many `N` values appear before each index and how many `Y` values appear after each index.

#### Part 3: Aggregate Logs

Employee logs may contain multiple valid day logs mixed with unrelated text.
A valid log starts with `BEGIN`, contains zero or more `Y` or `N` tokens, and ends with `END`.
Invalid or unfinished logs should be ignored.
Nested logs are not valid.
Valid logs may span multiple lines, and multiple logs may appear on one line.

Write a function like:

```text
def get_best_closing_times(aggregate_log: str) -> list[int]:
    ...
```

Return the best closing time for each valid log in the order it appears.
A state machine works well here because you can scan tokens one by one and decide whether you are outside a log, inside a valid candidate, or discarding a nested invalid candidate.

### Problem 5: Subscription Notification Scheduler

**Problem Description**

You need to implement a notification scheduler for subscription plans.
Each user has a start date and a duration in days.
The system prints emails on dates determined by the schedule rules.

#### Part 1: Basic Email Scheduling

Inputs include a `send_schedule` mapping relative offsets to message types:

```text
"start" -> send on the subscription start day
negative integers such as -15 -> send before the subscription end date
"end" -> send on the subscription end date
```

Each user account includes:

```text
name: string
plan: string
account_date: int
duration: int
```

Print one line per email event in ascending date order.
If two events happen on the same date, use the ordering rule given by the prompt or create a deterministic tie-breaker if the prompt leaves it open.

A typical line format is conceptually:

```text
day: [MessageType] Subscription for name (plan)
```

Exact formatting matters in HackerRank, so match the prompt precisely when you implement.

#### Part 2: Handling Plan Changes

Add plan change events.
When a user changes plans, print a `[Changed]` message on the change date.
Then recalculate future notification events using the new plan and the remaining timeline.

A plan change event may look like:

```text
name: user name
new_plan: new plan name
change_date: day the plan changed
```

The key design challenge is preventing stale future emails from being printed after the plan has changed.
One practical approach is to build a chronological event simulation and regenerate future notification candidates after each change.

#### Part 3: Renewals

Add renewal events to the change list.
A renewal extends the subscription duration by a given number of days and prints a `[Renewed]` message on the renewal date.

A renewal may look like:

```text
name: user name
extension: number of added days
change_date: day the renewal happened
```

After each renewal, reschedule upcoming expiration and expired messages based on the updated end date.
Keep the user's current plan unless the event also changes it.

### Problem 6: Stripe Payment Card Validation System

**Background**

This practice problem combines network detection, Luhn checksum validation, redacted digits, and corrupted input recovery.
It is a good example of how Stripe-style OA tasks can start simple and then expand into exhaustive search with careful pruning.

#### Card Networks

The supported networks are:

- `VISA`: 16 digits and starts with `4`.
- `MASTERCARD`: 16 digits and starts with `51` through `55`.
- `AMEX`: 15 digits and starts with `34` or `37`.

#### Luhn Algorithm

To validate a card number:

1. Starting from the rightmost digit before the check digit, double every second digit moving left.
2. If a doubled digit is greater than 9, subtract 9.
3. Sum all transformed digits and untouched digits.
4. The card is valid if the sum is divisible by 10.

Example:

```text
Card: 4532015112830366
Sum: 50
50 % 10 = 0, so the card is valid.
```

#### Part 1: Basic Visa Validation

Input is a 16-digit number starting with `4`.
Return `VISA` if the checksum passes.
Return `INVALID_CHECKSUM` if the checksum fails.

Examples:

```text
Input: 4532015112830366 -> Output: VISA
Input: 4242424242424243 -> Output: INVALID_CHECKSUM
```

#### Part 2: Multi-Network Validation

Input is a 15-digit or 16-digit card number.
Return the network name if the card matches a supported network and passes the checksum.
Return `INVALID_CHECKSUM` if the network matches but the checksum fails.
Return `UNKNOWN_NETWORK` if the length or prefix does not match a supported network.

Examples:

```text
Input: 5482334509943 -> Output: UNKNOWN_NETWORK
Input: 4425233430109994 -> Output: VISA
Input: 562523343010901 -> Output: UNKNOWN_NETWORK
```

#### Part 3: Redacted Cards

The input may contain `*` characters representing 1 to 5 redacted digits.
Return the count of valid cards per network, sorted alphabetically by network.

Examples:

```text
Input: 4242424242424*42 -> Output: VISA,1
Input: 3*8282246310005 -> Output: AMEX,2
```

For an input with multiple possible networks, output one line per network:

```text
MASTERCARD,5
VISA,10
```

#### Part 4: Corrupted Cards

The input may end with `?`, meaning exactly one error occurred.
One digit may have been changed, or two adjacent digits may have been swapped.
Output every possible original valid card in ascending numeric order.

Each output line should be formatted as:

```text
card_number,NETWORK
```

For example:

```text
Input: 4344555566660004?
```

Possible outputs might include:

```text
4342555566660004,VISA
4344555566660004,VISA
4344555566660014,VISA
```

#### Implementation Notes

Write one network detection helper and one Luhn helper.
For redacted cards, generate only candidates consistent with length and prefix constraints when possible.
For corrupted cards, generate all one-digit replacements and all adjacent swaps, deduplicate candidates, validate them, and sort numerically.
Do not forget exact output strings because automated graders usually compare output text byte-for-byte.

## Stripe HackerRank OA Overview

Stripe often uses practical programming tasks that reflect real product domains such as payments, fraud, billing, subscriptions, identity, and operational data processing.
That does not mean you need deep internal Stripe knowledge to prepare.
It does mean you should practice turning detailed business rules into clean code.

### Assessment Content

**Programming fundamentals**

You should be comfortable in one mainstream language such as Python, Java, C++, JavaScript, or Go.
Practice parsing text inputs, manipulating strings, working with maps and sets, sorting records, and writing helper functions.

**Problem decomposition**

A long prompt becomes easier when you identify nouns, state, events, and outputs.
For example, the fraud problem has merchants, charges, codes, thresholds, disputes, and final account statuses.
Turning those into data structures before coding can prevent major rewrites.

**Complexity analysis**

Stripe-style problems often have hidden cases that punish quadratic code or careless brute force.
Before submitting, estimate the time and space complexity of your solution.
For redacted card enumeration, for example, 5 redacted digits means up to 100,000 raw combinations before pruning.

**Exact formatting**

HackerRank graders are strict about whitespace, sorting, capitalization, and separators.
Write tiny formatting helpers so you do not duplicate output logic across parts.

## How to Prepare for a Stripe HackerRank Online Assessment

### Practice Incremental Requirements

Do not stop after solving Part 1.
A strong practice routine is to solve a base problem, then ask how your design would change if the prompt added deletion, reversal, dispute, renewal, or redaction events.
This trains you to write extensible code without overengineering.

### Build a Personal Prompt-Parsing Checklist

Before coding, answer these questions:

- What is the unit of state?
- What events can change that state?
- Which operations are inclusive or exclusive?
- How should ties be sorted?
- What exact output strings are required?
- Which inputs are invalid but still need deterministic handling?

### Rehearse Explanations Out Loud

In interviews and follow-up discussions, your explanation matters almost as much as the final code.
Practice explaining why you chose a hash map, why a prefix sum works, or why you deduplicated generated card candidates before sorting.
ExtraBrain can support this kind of practice by helping you review transcripts and generate follow-up questions from your mock sessions when allowed.

### Use AI Assistance Responsibly

AI tools can help you prepare by creating practice variants, reviewing complexity, summarizing your mistakes, and helping you rehearse explanations.
They should not be used to secretly complete a live assessment if the rules prohibit assistance.
ExtraBrain users are responsible for following interview, employer, school, workplace, meeting, and platform rules around AI assistance, transcription, screenshots, and notes.

### Make Your Code Easy to Modify

For Stripe-style prompts, later parts often invalidate shortcuts from earlier parts.
Prefer helpers such as `normalize`, `detect_network`, `is_fraud_code`, `apply_event`, and `format_output`.
Small helpers reduce the risk of breaking Part 1 when implementing Part 3.

## ExtraBrain Workflow for Stripe OA Practice

ExtraBrain is useful before and after practice sessions, especially when you want a structured review loop.
On macOS, it can provide live transcription, screen-aware context, local-first options, and bring-your-own AI provider workflows.
Local Gemma 4 requires installation and compatible hardware, and local-only operation also requires local Parakeet transcription.
If you select external providers, selected prompts, transcript text, screenshots, audio, or context may be sent to those providers depending on your configuration.

A responsible preparation workflow could look like this:

1. Solve one problem set without assistance under a timer.
2. Record your own explanation in a mock session if that is appropriate for your setup.
3. Review the transcript and identify where your reasoning became unclear.
4. Ask ExtraBrain to help turn mistakes into a checklist or follow-up drills.
5. Re-solve the same problem from scratch a day later.

This keeps the focus on learning and allowed preparation rather than rule-breaking.

## FAQ

### How difficult is the Stripe HackerRank OA?

Candidate reports often describe Stripe online assessment problems as medium to hard because the prompts are long and the requirements are layered.
The core algorithms may be familiar, but the implementation details and edge cases can take significant time.

### What time limit should I expect for the Stripe HackerRank OA?

Some candidates report 60-minute assessments, but duration can vary by role, region, season, and hiring process.
Always rely on the instructions in your own invitation.

### Are these exact Stripe HackerRank questions guaranteed to appear?

No.
Treat these as realistic practice patterns, not a guaranteed question bank.
The most valuable preparation is learning how to parse long requirements, manage state, and implement clean incremental solutions.

### Can ExtraBrain generate interview answers?

ExtraBrain can help generate answer outlines, STAR structures, technical explanations, and follow-up questions from live transcript and screen context, while candidates remain responsible for honest and allowed use.
For real online assessments, only use tools and notes that the assessment rules permit.

### What is ExtraBrain?

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.

### Can ExtraBrain run fully local?

A fully local ExtraBrain setup requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on configuration.

## See Also

- [ExtraBrain](https://extrabrain.app)
- [Responsible use](https://extrabrain.app/responsible-use/)
- [Privacy](https://extrabrain.app/privacy/)
- [AI providers](https://extrabrain.app/providers/)
- [Help center](https://extrabrain.app/help/)
