---
title: How ExtraBrain Handles Data
description: Understand what ExtraBrain stores locally, what may be sent to selected AI providers, and when Deepgram receives audio.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain is a local desktop app, but your exact data flow depends on the providers and features you choose.

![Privacy settings in ExtraBrain](/assets/screenshots/help/dark/settings-privacy.png)

## Accurate Privacy Wording

ExtraBrain stores settings, API keys, local session history, and local Parakeet transcription data on your Mac. When you use a cloud LLM provider, relevant text, transcript context, screenshot-derived context, and prompts may be sent to the provider you selected. When you choose Deepgram, audio is sent to Deepgram for transcription. Anonymous usage sharing can be disabled.

## What Stays On Your Mac

- app settings
- provider configuration and API keys stored by the app
- local session history
- transcripts and screenshots saved in local session history
- local Parakeet transcription data

## What May Leave Your Mac

| Choice | What May Be Sent |
| --- | --- |
| OpenAI, Anthropic, Claude Subscription, Codex Subscription, or custom LLM provider | Prompts, transcript context, screenshot-derived context, custom questions, and other selected analysis context. |
| Deepgram transcription | Audio sent to Deepgram for transcription. |
| Anonymous usage sharing | Usage data when enabled. |

## Provider Control

External provider retention, billing, quota, model access, and account policies are controlled by the provider you choose. Review those provider settings if you handle sensitive interview, workplace, customer, or research material.

## Related

- [Privacy controls](/help/privacy-security/privacy-controls/)
- [Choose Parakeet or Deepgram transcription](/help/providers/transcription-parakeet-vs-deepgram/)
- [Connect an AI provider](/help/providers/connect-ai-provider/)

## Data Handling Questions

### What is the most private transcription setup?

Use Local Parakeet when audio transcription should stay on the Mac. Avoid Deepgram for sessions where audio should not be sent to a cloud transcription provider.

### Who controls cloud provider retention?

The provider you choose controls its retention, billing, quota, and account policies. Review OpenAI, Anthropic, Claude, Codex, Deepgram, or custom endpoint settings before sending sensitive context.
