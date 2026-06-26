---
title: "Jane Street HackerRank Questions: My 2025 Quant Assessment Notes"
seoTitle: "Jane Street HackerRank Questions and Quant Assessment Prep"
description: "Realistic Jane Street HackerRank question patterns, probability walkthroughs, EV strategies, Bayesian updates, and responsible prep tips."
publishDate: 2026-03-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Jane Street"
  - "HackerRank Test"
  - "Quant Interviews"
  - "Probability"
seoTags:
  - "jane-street-hackerrank-questions"
  - "jane-street-hackerrank-test"
  - "quant-trader-online-assessment"
  - "probability-interview-questions"
sourceUrl: "exports/interview-questions/jane-street-hackerrank-questions.md"
canonicalUrl: "https://extrabrain.app/interview-questions/jane-street-hackerrank-questions-extrabrain/"
importedAt: "2026-06-25T21:22:44.973Z"
ogImage: "/assets/blog-covers/lockdown-cheat-extrabrain.webp"
ogImageAlt: ""
draft: false
---

Jane Street HackerRank questions for quant trading can feel different from standard software engineering online assessments.
Instead of deep data structures or long algorithm implementations, the test style often emphasizes probability, expected value, Bayesian reasoning, and fast logical decomposition.

This guide rewrites one candidate-style 2025 Jane Street HackerRank experience into a practical ExtraBrain preparation article.
Use it to understand the question patterns, practice the reasoning process, and build a responsible study plan before your own assessment.

If you use ExtraBrain while preparing, treat it as a study and review copilot.
ExtraBrain should be used only where interview, employer, school, workplace, meeting, and platform rules allow AI assistance, transcription, screenshots, or notes.

## Assessment Overview

The reported assessment was for a quant trader role.
The test had 4 questions and a 30-minute time limit.
The overall difficulty was moderate, but the pace mattered because each question required clean reasoning under time pressure.

The main topics were:

- Parity and prime numbers.
- Expected value and optimal stopping.
- Bayesian updating after observing evidence.
- Expected value comparison after drawing from urns.

The important lesson is that Jane Street-style HackerRank prep should not be limited to coding drills.
You also need to practice explaining probability logic quickly, checking assumptions, and turning ambiguous scenarios into small quantitative models.

## Jane Street HackerRank Questions and Answer Walkthroughs

### Question 1: Parity of the Sum of Primes

The first question was about choosing 5 prime numbers and deciding when their sum is even.
My first thought was that the key was not prime generation, but parity.
A sum is odd or even depending on how many odd and even values it contains.

Among prime numbers, only 2 is even.
Every other prime is odd.

If you choose 5 primes and want the sum to be even, the only workable structure is 1 even prime plus 4 odd primes.
That means the selection must include 2.
If the selection does not include 2, then all 5 selected primes are odd, and the sum of 5 odd numbers is odd.

The problem reduces to a counting question.
You compare the number of valid 5-prime combinations that include 2 against the number of all possible 5-prime combinations.

The core insight is simple but easy to miss under time pressure.
Recognize that 2 is the only even prime, translate the prompt into parity rules, and avoid doing unnecessary prime calculations.

### Question 2: Dice Game Strategy

The second question was an expected value optimization problem.
For each first roll x, you had to decide whether stopping or rolling again produced a better payoff.

The payoff rules can be restated like this:

- If you stop, your payoff is x.
- If you roll again and the sum is at most 8, your payoff is the sum of the two rolls.
- If you roll again and the sum is greater than 8, your payoff is 0.

The solution is to compute the expected payoff of rolling again for each possible x from 1 to 6.
List all second-roll outcomes from 1 to 6.
For each outcome y, calculate whether x + y is at most 8.
If it is, use x + y as the payoff.
If it is not, use 0 as the payoff.
Then average the 6 outcomes.

After that, compare the expected value of rolling again with the guaranteed value of stopping.
If the expected value is greater than x, roll again.
If the expected value is less than or equal to x, stop.

For example, if the first roll is 3, the valid second rolls are 1, 2, 3, 4, and 5 because the total remains at most 8.
A second roll of 6 gives a payoff of 0 because 3 + 6 exceeds 8.
You average those six payoff values and compare the result with 3.

This type of question rewards a mechanical process.
Define the actions, enumerate outcomes, compute expected value, and choose the better action.

### Question 3: Probability of Heads on the Next Toss

The third question was a Bayesian update problem.
The setup involved three coins.
Coins A and B land heads 90% of the time.
Coin C lands heads 20% of the time.
One coin is selected uniformly at random, the first toss is heads, and the question asks for the probability that the next toss is also heads.

The initial probabilities are straightforward.
Each coin starts with probability 1/3.
After observing heads on the first toss, coins A and B become more likely because they are much more likely to produce heads.
Coin C becomes less likely, but it is not impossible.

The solution has two steps.

1. Use Bayes' theorem to compute the posterior probability of having chosen A, B, or C after observing heads.
2. Use the posterior distribution to compute the expected probability of heads on the next toss.

The final expression has this structure:

```text
P(next heads | first heads) = P(A | first heads) * 0.9 + P(B | first heads) * 0.9 + P(C | first heads) * 0.2
```

You do not need to memorize a special trick.
You need to update the original probabilities using the evidence, then use the updated probabilities for the next prediction.

When practicing with ExtraBrain, you can use a transcript or notes from a mock session to review whether your explanation clearly separated prior probability, likelihood, posterior probability, and final expectation.
That review workflow is often more valuable than simply seeing the final number.

### Question 4: Strategy for Drawing from the Urns

The fourth question extended the Bayesian idea into a decision problem.
There were two urns.
One urn was mostly filled with $1 chips, and the other was mostly filled with $10 chips.
After drawing a $1 chip, you had to decide whether to draw again from the same urn or switch to the other urn.

The first step is the Bayesian update.
Drawing a $1 chip makes it more likely that the current urn is the urn with more $1 chips.
It does not prove it with certainty.
You must compute the posterior probability that the current urn is each urn after seeing the draw.

The second step is expected value comparison.
For staying, compute the expected value of drawing again from the current urn using the posterior probabilities and the remaining chip distributions.
For switching, infer the probability distribution for the other urn and compute the expected value of drawing from it.

The decision is whichever expected value is higher.
The strategy is not to guess which urn feels better.
The strategy is to update probabilities first, compute both expected values, and choose the larger one.

## What Jane Street HackerRank Questions Are Really Testing

### Fundamental Math and Probabilistic Thinking

The assessment tests whether you can apply basic mathematical ideas quickly and flexibly.
You need to recognize when a problem is about parity, combinations, conditional probability, or expectation.
You do not need obscure formulas for most of these examples.
You do need strong fundamentals and a calm way to translate words into variables.

### Expected Value Analysis

Expected value questions test whether you can make rational decisions when outcomes are uncertain.
The important skill is defining the payoff for each possible action, enumerating scenarios, and comparing the average result.
This is directly relevant to quant trading because trading decisions often require comparing uncertain payoffs rather than following intuition.

### Bayesian Updating

Bayesian questions test whether you can incorporate new information correctly.
You start with prior probabilities, observe evidence, compute posterior probabilities, and then make a prediction or decision.
This is a useful habit for interviews because many candidates jump straight from evidence to conclusion without showing the update step.

### Logical Rigor and Decomposition

The problems reward candidates who break questions into smaller pieces.
A strong answer usually starts by restating the setup, defining the possible states, listing the actions, and then doing the calculation.
That structure makes it easier to avoid hidden assumptions.

### Speed With Accuracy

The 30-minute format makes speed important, but the questions are not solved by rushing.
You need enough fluency to write compact calculations and enough discipline to check edge cases.
For example, the dice question has a boundary at total 8, and the prime question has a boundary case around the prime number 2.

## Practical Preparation Strategy

### Practice With Timed Sets

Set a 30-minute timer and solve 4 short probability or expected value questions.
After each set, review where your time went.
If you spent too long on arithmetic, practice cleaner tables.
If you spent too long understanding the prompt, practice restating the scenario in one sentence before solving.

### Build a Small Quant Interview Checklist

Use this checklist before starting each problem:

- What are the possible states?
- What evidence have I observed?
- What action choices do I have?
- What payoff or probability is being requested?
- Do I need counting, expected value, or Bayes' theorem?
- What boundary cases could break my reasoning?

This checklist is especially helpful for Jane Street-style questions because the math is often simple once the model is clear.

### Use Tables for Expected Value Problems

A small table can prevent careless mistakes.
For dice problems, rows can be second-roll outcomes.
For urn problems, rows can be possible hidden urn states.
For coin problems, rows can be possible selected coins.

| Problem type | Useful table columns |
| --- | --- |
| Dice expected value | First roll, second roll, total, payoff, probability |
| Coin Bayes update | Coin, prior, likelihood, unnormalized posterior, normalized posterior |
| Urn strategy | Current urn state, posterior probability, stay payoff, switch payoff |
| Combinatorics | Case type, valid choices, invalid choices, total choices |

### Review Explanations, Not Just Answers

Quant interviews care about reasoning clarity.
When you finish a practice set, explain your solution aloud.
Record your explanation if permitted in your study environment, then review whether each step would make sense to an interviewer.

ExtraBrain can support this kind of preparation as a local-first Mac desktop AI interview assistant and meeting copilot.
For practice sessions, it can help you review live transcripts, notes, screen context, and follow-up questions, while you remain responsible for following all applicable rules.

## Common Mistakes To Avoid

- Do not spend too long trying to find a complex algorithm when the question is really about probability fundamentals.
- Do not skip the restatement step because many errors come from solving a slightly different problem.
- Do not forget special cases such as 2 being the only even prime.
- Do not compare raw outcomes when the question requires expected values.
- Do not treat observed evidence as certainty in Bayesian problems.
- Do not use AI assistance in any assessment setting unless the relevant rules clearly allow it.

## How ExtraBrain Fits Into Responsible Jane Street Prep

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For Jane Street preparation, the most useful workflow is practice and review.

You can use ExtraBrain to rehearse probability explanations, capture your mock interview transcript, review where your reasoning became unclear, and generate follow-up drills from your weak spots.
A fully local posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
If you configure external providers, selected prompts, transcript text, screenshots, audio, or context may leave the device depending on your settings.

The responsible use principle is simple.
Use ExtraBrain where AI assistance, transcription, screenshots, and notes are allowed.
Do not use any tool to bypass assessment rules, impersonate your ability, or violate platform policies.

## FAQ

### Will Jane Street HackerRank questions include advanced algorithms?

Based on this candidate-style experience, the assessment emphasized probability, expectations, parity, and Bayesian reasoning rather than complex algorithms.
You should still read your official instructions carefully because assessment formats can change.
The safest preparation is to strengthen core quantitative reasoning and basic coding fluency.

### How should I prepare if Bayes' theorem feels unfamiliar?

Start with small examples.
Write the prior probabilities, likelihoods, unnormalized posterior weights, and normalized posterior probabilities in separate columns.
Then compute the final prediction from the posterior distribution.
After a few examples, the process becomes much more mechanical.

### What is the best way to practice expected value questions?

Practice by enumerating outcomes in a table.
For each outcome, write its probability and payoff.
Multiply probability by payoff, sum the results, and compare strategies.
This is slower at first, but it trains the structure you need under time pressure.

### Can ExtraBrain generate interview answers?

ExtraBrain can help generate answer outlines, STAR structures, technical explanations, and follow-up questions from live transcript and screen context.
Candidates remain responsible for honest and allowed use.
For online assessments, always follow the rules provided by the employer, school, platform, or interviewer.

### What platforms does ExtraBrain support?

ExtraBrain is available for macOS today, including Apple Silicon and Intel Macs.
Windows and Linux are planned future platforms.

## See Also

- [Citadel HackerRank questions guide](https://extrabrain.app/interview-questions/citadel-hackerrank-questions-extrabrain/)
- [IBM HackerRank test guide](https://extrabrain.app/interview-questions/ibm-hackerrank-test-extrabrain/)
- [Goldman Sachs HackerRank test guide](https://extrabrain.app/interview-questions/goldman-sachs-hackerrank-test-extrabrain/)
- [Amazon HackerRank assessment guide](https://extrabrain.app/interview-questions/amazon-hackerrank-assessment-extrabrain/)
- [AI interview preparation with ExtraBrain](https://extrabrain.app/interview-questions/ai-interview-preparation-extrabrain/)
