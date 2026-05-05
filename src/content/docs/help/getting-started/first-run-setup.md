---
title: Set Up ExtraBrain For The First Time
description: Complete ExtraBrain onboarding on macOS by granting permissions, choosing transcription, and connecting an AI provider.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

First-run setup gets ExtraBrain from launch to a usable live session. The onboarding flow covers welcome, macOS permissions, transcription provider, AI provider, and finish.

![ExtraBrain onboarding welcome screen](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. Start Onboarding

Open ExtraBrain and continue from the welcome screen. Keep the app open while you complete permissions and provider setup.

## 2. Grant macOS Permissions

ExtraBrain needs permission to hear and see the context you choose to use:

- Microphone for your spoken audio.
- Screen Recording for screenshots and screen context.
- System Audio for call, meeting, video, or shared-audio transcription when supported.

See [Grant macOS permissions](/help/getting-started/macos-permissions/) for recovery steps if macOS keeps a permission in a pending or denied state.

## 3. Choose Transcription

Choose one transcription mode:

- Local Parakeet runs on your Mac and does not require an API key.
- Deepgram uses cloud transcription and requires a Deepgram API key.

![Transcription provider selection in onboarding](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4. Connect AI

Choose the AI provider family and connection method ExtraBrain should use for live analysis. Public provider modes include OpenAI, Anthropic, Claude Subscription, Codex Subscription, and custom OpenAI-compatible endpoints.

![AI provider chooser in onboarding](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

The local model option shown in onboarding is disabled and should not be treated as available public setup.

## 5. Run A Short Test

Before a real interview or meeting:

- start recording
- confirm transcript entries appear
- capture one screenshot if screen context matters
- run one analysis
- confirm the answer comes from the provider you expected

## Related

- [Choose Parakeet or Deepgram transcription](/help/providers/transcription-parakeet-vs-deepgram/)
- [Connect an AI provider](/help/providers/connect-ai-provider/)
- [Keyboard shortcuts](/help/settings/keyboard-shortcuts/)

## Setup Questions

### Can I change providers after first-run setup?

Yes. You can change transcription in **Settings -> Audio** and change AI providers in **Settings -> LLM Providers**. Run a short test after changing either setting.

### What should I do if onboarding cannot continue?

Check macOS permissions, provider validation, and required fields. Deepgram requires a valid key, while Local Parakeet can continue without an API key.
