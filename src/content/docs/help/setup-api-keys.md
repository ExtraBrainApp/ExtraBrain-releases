---
title: Set Up AI Providers
description: Set up ExtraBrain providers, API keys, subscriptions, custom endpoints, and transcription choices for live analysis.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Use this overview when you need to choose which provider guide matches your setup. ExtraBrain supports API-key providers, subscription provider modes, and custom OpenAI-compatible endpoints.

![ExtraBrain AI provider chooser](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Key Takeaways

An ExtraBrain AI provider is the model path the app uses when it turns transcript, prompt, screenshot, or session context into live analysis.

- ExtraBrain supports 5 model-provider patterns: on-device AI where supported, OpenAI, Anthropic, Claude Subscription, Codex Subscription, and custom OpenAI-compatible endpoints.
- API key modes require current provider credentials; subscription modes use the signed-in subscription path supported by the app.
- Provider validation should be tested once before a live interview, meeting, lecture, or research call.
- Provider billing, retention, model access, and quota are controlled by the provider account you choose.

- [Connect an AI provider](/help/providers/connect-ai-provider/)
- [Connect OpenAI or Codex Subscription](/help/providers/openai-codex-setup/)
- [Connect Anthropic or Claude Subscription](/help/providers/anthropic-claude-setup/)
- [Use a custom OpenAI-compatible endpoint](/help/providers/custom-openai-compatible-endpoint/)
- [Choose Parakeet or Deepgram transcription](/help/providers/transcription-parakeet-vs-deepgram/)

## Provider Setup Checklist

1. Decide whether you want API key mode, subscription mode, or a custom endpoint.
2. Open **Settings -> LLM Providers**.
3. Enter the required provider details.
4. Validate or recheck the provider connection.
5. Run one test analysis.
6. Review [How ExtraBrain handles data](/help/privacy-security/how-extrabrain-handles-data/) before using sensitive context.

## Provider Questions

### Do I need an API key for every provider mode?

No. OpenAI and Anthropic API key modes require keys. Claude Subscription and Codex Subscription modes use subscription access and do not require an API key in ExtraBrain.

### What should I check if provider validation fails?

Confirm the key, model access, base URL, subscription status, and network access. Custom endpoints also need the exact model name expected by the endpoint.
