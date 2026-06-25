---
title: "How to Contact ExtraBrain and Report Bugs Clearly"
seoTitle: "Contact ExtraBrain Support and Report Bugs Efficiently"
description: "Contact ExtraBrain or report bugs with clear details, reproduction steps, screenshots, and context for faster support and fixes."
publishDate: 2026-02-17
author: "ExtraBrain"
tags:
  - Help Center
  - Support
  - Bug Reports
draft: false
ogImage: "/assets/blog-covers/contact-extrabrain-team-report-bugs.webp"
ogImageAlt: "Private interview notes and support workflow for ExtraBrain users"
---

ExtraBrain is built to help people prepare, think, and stay organized during interviews, meetings, lectures, and research calls.
When something is confusing, broken, or missing, a clear support message helps the team understand the issue faster and respond with more useful guidance.

This guide explains how to contact the ExtraBrain team and how to write bug reports that are easy to investigate.
It is especially useful if your issue involves live transcription, screen-aware context, local AI, provider setup, privacy controls, app activation, or session review.

## Ways to contact the ExtraBrain team

For general product questions, start with the [ExtraBrain website](https://extrabrain.app) and the in-app help or feedback options available in your version of the Mac app.
Use the channel that best matches what you need so your message reaches the right context quickly.

Common reasons to contact the team include:

- Questions about installing ExtraBrain on macOS.
- Help with connecting bring-your-own AI providers.
- Questions about local Parakeet transcription or optional Deepgram transcription.
- Help understanding privacy controls and data flow.
- Issues with local Gemma 4 where installed and compatible.
- Confusion about ExtraBrain Pro activation or billing.
- Feedback about interview, meeting, lecture, or research workflows.
- Bug reports that affect your ability to use the app reliably.

If you are using ExtraBrain during interviews, assessments, workplace meetings, or school contexts, make sure your use follows the rules that apply to that situation.
ExtraBrain should only be used where AI assistance, transcription, screenshots, screen context, and notes are allowed.

## Before you send a support request

A useful support request does not need to be long.
It just needs to include the details that let someone understand what happened.

Before contacting support, try to gather:

- Your device type, such as MacBook Air M2 or MacBook Pro Intel.
- Your macOS version.
- The ExtraBrain app version.
- Whether you are using local transcription, Deepgram, or another configured provider.
- Whether you are using local Gemma 4 where installed and compatible, Anthropic, OpenAI, a custom OpenAI-compatible endpoint, Claude Subscription, or Codex Subscription.
- Whether the issue happens on public Wi-Fi, private Wi-Fi, mobile hotspot, VPN, or a restricted workplace network.
- The exact page, setting, session state, or workflow where the issue appears.
- Screenshots or a short screen recording if visual context would help.

Do not include private interview content, confidential meeting details, customer data, school assessment content, or employer information unless it is necessary and allowed to share.
If you need to show a transcript or screenshot, redact anything sensitive first.

## How to report bugs efficiently

A good bug report answers three questions.
What were you trying to do?
What actually happened?
What did you expect to happen instead?

Use this structure when reporting an issue:

1. Describe the feature or workflow.
2. List the exact steps that caused the problem.
3. Explain the actual result.
4. Explain the expected result.
5. Include app, device, provider, and network details.
6. Attach relevant screenshots or videos with context.

For example:

> I started a live session, selected local transcription, and opened a coding interview prompt on my screen.
> The transcript started normally, but the analysis panel stopped updating after about three minutes.
> I expected the transcript and analysis to continue updating while the session was active.
> This happened on a MacBook Pro M2 running macOS 15, ExtraBrain version 0.x, private Wi-Fi, with local Parakeet transcription and local Gemma 4 enabled.

That kind of report gives the team a practical starting point.
A report that only says "it does not work" is much harder to reproduce.

## Details that make a bug report actionable

### Device and platform

ExtraBrain is available for macOS today, including Apple Silicon and Intel Macs.
Windows and Linux are planned future platforms, so support requests should clearly state the Mac model and macOS version involved.

Useful examples include:

- MacBook Air M1, macOS 14.6.
- MacBook Pro M2, macOS 15.1.
- Intel iMac, macOS 13.7.

### App version and settings

Include the ExtraBrain version whenever possible.
If the issue depends on a setting, describe the setting rather than assuming support can infer it.

Relevant settings may include:

- Local Parakeet transcription versus optional Deepgram transcription.
- Local Gemma 4 where installed and compatible versus an external AI provider.
- Anthropic, OpenAI, custom OpenAI-compatible endpoint, Claude Subscription, or Codex Subscription configuration.
- Screenshot, screen context, audio, transcript cleanup, profile, or privacy settings.
- Whether the issue appears in a new session, an existing session, or session history.

### Network and provider context

Some issues are local app issues.
Other issues may depend on provider configuration, API keys, network restrictions, VPNs, or unreliable Wi-Fi.

Mention whether you are using:

- Private home Wi-Fi.
- Public Wi-Fi.
- A workplace or school network.
- A VPN.
- Mobile hotspot.
- A local-only setup with local Parakeet transcription and local Gemma 4 where installed and compatible.
- An external provider that may receive selected prompts, transcript text, screenshots, audio, or context depending on your configuration.

This helps separate local-first behavior from external provider behavior.

### Reproduction steps

Reproduction steps are the most important part of a bug report.
They should be specific enough that another person can follow them and see the same problem.

A strong reproduction section looks like this:

1. Open ExtraBrain.
2. Start a new live session.
3. Select the interview profile.
4. Enable screen context.
5. Join a meeting app and share the target screen.
6. Ask a coding question or open a prompt window.
7. Wait until the transcript reaches the analysis panel.
8. Observe that the analysis stops updating.

If the issue only happens sometimes, say that too.
Intermittent bugs are still useful to report, but the frequency matters.

## When screenshots or videos help

Screenshots and videos are useful when they show what changed on screen.
They are less useful when they arrive without context.

Attach visual evidence when it helps explain:

- A settings page that looks incorrect.
- An activation or license state that does not update.
- A transcription panel that stops responding.
- A provider setup screen that shows an error.
- A session history item that is missing or incomplete.
- A screen-aware context workflow that behaves unexpectedly.

Always add a short sentence explaining what the image or video is meant to show.
For privacy, crop or blur sensitive transcript text, meeting names, candidate details, company data, assessment prompts, or customer information.

## Feature requests are welcome too

Bug reports explain something broken.
Feature requests explain something that would make ExtraBrain more useful.
Both are valuable, but they should include different kinds of context.

For a feature request, include:

- The workflow you are trying to improve.
- Whether it is for interviews, meetings, lectures, research calls, or another use case.
- What you currently do manually.
- What outcome would save time or reduce stress.
- Any privacy or responsible-use constraints the feature should respect.

For example, a request like "add better notes" is hard to act on.
A request like "after a system design interview, let me summarize transcript highlights into tradeoffs, follow-up questions, and things to practice next" is much clearer.

## What not to include

To keep support efficient and safe, avoid sending unnecessary sensitive information.

Do not include:

- Full interview transcripts unless sharing them is allowed and necessary.
- Private assessment questions from platforms that prohibit sharing.
- Employer confidential information.
- Customer names, account details, or internal meeting content.
- API keys, provider secrets, passwords, or license keys in plain text.
- Screenshots that reveal unrelated personal data.

If a support request requires sensitive context, redact first and explain what was removed.

## A simple bug report template

You can copy this template into your support message:

```text
Summary:

What I was trying to do:

Steps to reproduce:
1.
2.
3.

What happened:

What I expected:

Device model:
macOS version:
ExtraBrain version:
Transcription mode:
AI provider or local model:
Network type:
Relevant settings:

Screenshots or video attached:
Sensitive details redacted:
```

The more complete this template is, the easier it is to reproduce the issue and prioritize a fix.

## Why clear reports matter

ExtraBrain is a local-first desktop AI interview assistant and meeting copilot, so issues can involve a mix of app state, macOS permissions, audio routing, screen context, local models, external providers, and network conditions.
Clear reports reduce guesswork.
They help the team understand whether a problem is caused by the app, the operating system, a provider, configuration, hardware compatibility, or usage context.

That means faster support, better fixes, and fewer back-and-forth questions.
It also helps improve ExtraBrain for everyone using it to prepare for interviews, stay present in meetings, review sessions, and build a more useful personal workflow around transcripts and notes.

## Bottom line

Contact the ExtraBrain team when you need help, and include enough context for the team to act quickly.
For bugs, the best reports include device details, app version, settings, provider configuration, network context, reproduction steps, expected behavior, actual behavior, and privacy-safe screenshots or videos.

A few extra minutes spent writing a clear report can save hours of investigation and get you back to focused interview prep or meeting work sooner.
