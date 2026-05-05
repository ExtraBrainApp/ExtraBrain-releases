---
title: Set Up AI Providers
description: Set up ExtraBrain AI providers, API keys, subscriptions, custom endpoints, and transcription choices for live analysis.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Use this overview when you need to choose which provider guide matches your setup. ExtraBrain supports API-key providers, subscription provider modes, and custom OpenAI-compatible endpoints.

![ExtraBrain AI provider chooser](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

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
