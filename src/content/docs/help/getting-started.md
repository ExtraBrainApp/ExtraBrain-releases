---
title: Getting Started
description: Download ExtraBrain, launch it on macOS, choose on-device AI where hardware supports it or connect provider access, and prepare for your first live interview or meeting.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

This guide is the shortest path from download to a usable first session.

## 1. Download the latest release

Get the newest build from the [ExtraBrain download page](/download/). It links to the latest official GitHub release and explains compatibility, release metadata, and install checks.

## 2. Install and launch the app

Follow the [installation guide](/help/installation/) for macOS-specific steps.

## 3. Choose local AI or provider access

Open the ExtraBrain settings screen and choose the AI option you want to use. ExtraBrain supports on-device AI where compatible hardware is available, plus OpenAI, Anthropic, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription modes. A good default is:

- one primary local model or provider for your normal workflow
- one backup option for redundancy or alternate behavior

See [Set up AI providers](/help/setup-api-keys/) for details.

## 4. Choose transcription

Decide how speech should become text before you join a real call.

- Use local NVIDIA Parakeet transcription when you want transcription to stay on the Mac.
- Use optional Deepgram only when cloud transcription fits the session and policies.
- Confirm whether transcript text should stay local with on-device AI or be sent to an external model provider for a specific request.

## 5. Test it before a real interview

Run one short rehearsal so you can confirm the app window placement, local Parakeet or optional Deepgram transcription quality, local AI or provider routing, and prompt behavior before a high-stakes session.

- Recommended rehearsal length: 10-15 minutes
- Goal: verify audio capture, transcript flow, and prompt usefulness

## 6. Use a reliable first workflow

For a first session, keep the setup narrow.

- Open ExtraBrain before the call starts.
- Use one tested local model or provider.
- Keep a backup provider or local option ready.
- Ask for concise structure, edge cases, tradeoffs, decisions, risks, or follow-ups.
- Avoid sending sensitive screenshots, transcripts, or notes to external providers unless the situation allows it.

## 7. Keep the help center nearby

The most common next reads are:

- [Using ExtraBrain in interviews](/help/using-extrabrain-in-interviews/)
- [Troubleshooting](/help/troubleshooting/)
- [Privacy and data handling](/help/privacy-data-handling/)

## Common getting started questions

### What is the fastest way to start using ExtraBrain?

Download the Mac app, install it, choose local AI or provider access, choose transcription, and run one 10-15 minute rehearsal before a real session.

### Do I need to configure an external AI provider?

Not always. Use on-device AI where compatible hardware supports it. If you choose an external provider, connect the provider subscription, account, or API key you already manage.

### What should I test before a live interview or meeting?

Test microphone capture, transcript flow, app window placement, local AI availability, provider routing, prompt usefulness, and the backup option you would use if the primary setup fails.

![ExtraBrain empty state with controls ready for a new session](/assets/screenshots/empty_state.png)

:::note
ExtraBrain is positioned as a local-first assistant. With on-device AI and local transcription, requests can stay on your Mac. Your exact data flow still depends on hardware support, the AI providers you choose, and the prompts you send during use.
:::
