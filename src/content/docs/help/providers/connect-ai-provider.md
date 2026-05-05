---
title: Connect An AI Provider
description: Set up OpenAI, Anthropic, Claude Subscription, Codex Subscription, or a custom OpenAI-compatible endpoint in ExtraBrain.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain uses the AI provider you select for live analysis. Provider setup controls where prompts, transcript context, and screenshot-derived context may be sent.

![AI provider chooser in ExtraBrain onboarding](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Public Provider Modes

- OpenAI API key.
- Anthropic API key.
- Codex Subscription using ChatGPT Plus or Pro directly, without an API key.
- Claude Subscription using Claude Pro or Max directly, without an API key.
- Custom OpenAI-compatible endpoint with base URL, API key, and model name.

## Setup Checklist

1. Open onboarding or **Settings -> LLM Providers**.
2. Choose the provider family.
3. Choose API key or subscription mode.
4. Enter credentials when required.
5. Validate or recheck the connection.
6. Run a short test analysis.

![LLM Providers settings tab](/assets/screenshots/help/dark/settings-llm-providers.png)

## Data Flow

When you ask ExtraBrain for analysis with a cloud provider, relevant prompts, transcript context, screenshot-derived context, and custom questions may be sent to that provider. Provider billing, retention, quota, and account controls are governed by the provider you choose.

## Related

- [Connect OpenAI or Codex Subscription](/help/providers/openai-codex-setup/)
- [Connect Anthropic or Claude Subscription](/help/providers/anthropic-claude-setup/)
- [Use a custom OpenAI-compatible endpoint](/help/providers/custom-openai-compatible-endpoint/)

## AI Provider Questions

### Which AI provider should I choose first?

Choose the provider you already trust and can validate before a real session. For most users, that means starting with an existing OpenAI, Anthropic, Claude, or Codex account.

### Can I keep more than one provider path ready?

Yes. Keeping a backup provider path is useful before interviews or meetings where quota, network access, or account status could change.
