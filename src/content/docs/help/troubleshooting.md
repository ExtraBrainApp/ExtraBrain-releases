---
title: Troubleshooting
description: Fix ExtraBrain setup, transcription, provider, on-device AI, and live-session issues before an interview, meeting, lecture, or research call.
sidebar:
  order: 6
lastUpdated: 2026-04-29
---

This page covers the first things to check when ExtraBrain is not behaving the way you expect.

## The app launches but does not respond well

- Restart the app.
- Confirm on-device AI is available if you selected a local model, or confirm your provider subscription, account, or API key is present and valid.
- Confirm your network connection is healthy enough to reach any external model providers you configured.
- Run a short test session with a minimal prompt.
- Switch to the simplest tested provider or local model if you are close to a live call.

## Transcription quality is poor

- Check microphone selection.
- Reduce background noise when possible.
- Rehearse with the same headphones and room you plan to use live.
- Confirm whether you are using local NVIDIA Parakeet transcription or optional Deepgram.
- Try a short rehearsal with slower speech and a known script so you can separate microphone issues from model behavior.

## The wrong provider seems to be answering

- Re-open settings and verify the selected local model or provider.
- Confirm the model choice for the current workflow.
- Remove stale or invalid credentials and save again.
- Check whether the current workflow is using on-device AI, OpenAI, Anthropic, Claude, Codex, a custom-compatible endpoint, or another configured provider mode.

## On-device AI is not available

- Confirm the Mac has compatible hardware for local AI.
- Switch to a configured external provider if the current hardware cannot run on-device AI.
- Keep a tested backup option ready before high-stakes sessions.

## You are close to an interview and something still feels unstable

Use the safest fallback:

1. switch to the local model or provider that worked during your last rehearsal
2. simplify the prompt set
3. reduce your workflow to the smallest dependable setup

:::caution
If the app is unstable minutes before a real interview, do not keep debugging indefinitely. Fall back to the simplest workflow you already tested.
:::

## Still blocked?

Review:

- [Installation](/help/installation/)
- [Set up AI providers](/help/setup-api-keys/)
- [Privacy and data handling](/help/privacy-data-handling/)

## Common troubleshooting questions

### Why is on-device AI unavailable?

On-device AI requires compatible hardware and may not be available on every Mac or customer environment. Use a configured external provider as a fallback when local AI is not available.

### Why is transcription not useful enough?

Check microphone selection, room noise, headset behavior, transcription mode, and whether you are using local Parakeet or optional Deepgram. Run a short test with predictable speech before a real session.

### What should I do minutes before an interview?

Use the simplest setup that worked in your last rehearsal. Avoid changing providers, prompts, permissions, or transcription mode right before a high-stakes call unless the current setup is unusable.
