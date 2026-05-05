---
title: Troubleshooting
description: Fix ExtraBrain microphone, screen recording, system audio, API key, Deepgram, screenshot, hidden-window, and session-history issues.
sidebar:
  order: 6
lastUpdated: 2026-04-29
---

Use this page when ExtraBrain is not capturing audio, cannot validate a provider, misses screenshots, or is hard to recover during a live session.

![ExtraBrain permissions step for troubleshooting microphone, screen, and system audio access](/assets/screenshots/help/dark/onboarding-permissions.png)

## Microphone Permission Required

If microphone capture does not start:

1. Open **System Settings -> Privacy & Security -> Microphone**.
2. Enable ExtraBrain.
3. Quit and reopen ExtraBrain if macOS asks.
4. Start a short test session.

See [Grant macOS permissions](/help/getting-started/macos-permissions/).

## Screen Recording Or System Audio Is Not Working

Screen Recording controls screenshots and screen context. System Audio controls meeting, call, video, or shared-audio transcription when supported.

Check for warning chips such as "Mic stopped", "System audio stopped", or "Audio stopped". Then reopen macOS Privacy & Security settings, grant access, and restart ExtraBrain if needed.

## API Key Validation Failed

For OpenAI, Anthropic, or a custom endpoint:

- confirm the key is current
- remove extra spaces
- confirm the selected model is available to the account
- confirm a custom endpoint has a base URL and model name
- check proxy or organization restrictions

Then validate again in **Settings -> LLM Providers**.

## Deepgram Validation Failed

Deepgram requires a valid Deepgram API key. If validation fails, paste a fresh key, retry validation, or switch back to Local Parakeet from onboarding or **Settings -> Audio**.

## Screenshots Are Not Appearing In Analysis

Check that:

- a session is active
- Screen Recording permission is granted
- the capture mode in **Settings -> Screenshot** matches what you expect
- the screenshot entry appears in the transcript panel

Screenshots are local session artifacts. Screenshot-derived context may be sent when you ask a cloud LLM provider for analysis.

## Main Window Is Hidden Or Hard To Click

If the overlay is hidden or click-through makes it hard to interact:

1. Use the toggle window shortcut.
2. Disable click-through in **Settings -> Privacy**.
3. Re-enable Dock or menu bar visibility if you need a visible recovery path.

## Session History Delete Is Disabled

Active sessions cannot be deleted. Stop recording first, then return to **Settings -> Sessions** and delete the session.

## Related Guides

- [Set up ExtraBrain for the first time](/help/getting-started/first-run-setup/)
- [Connect an AI provider](/help/providers/connect-ai-provider/)
- [Choose Parakeet or Deepgram transcription](/help/providers/transcription-parakeet-vs-deepgram/)
- [Privacy controls](/help/privacy-security/privacy-controls/)

## Troubleshooting Questions

### What should I check first if ExtraBrain is not recording?

Check microphone permission, system audio permission, the selected audio device, and whether a session is already starting or stopping.

### What should I check first if analysis fails?

Check the selected AI provider, API key or subscription status, custom endpoint fields, and whether the current session has transcript or screenshot context to analyze.
