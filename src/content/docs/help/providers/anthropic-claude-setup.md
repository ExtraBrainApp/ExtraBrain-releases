---
title: Connect Anthropic Or Claude Subscription
description: Set up Anthropic API key mode or Claude Subscription mode in ExtraBrain, validate access, choose models, and troubleshoot sign-in.
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain supports Anthropic API key mode and Claude Subscription mode.

## Anthropic API Key Mode

Use this mode when you want ExtraBrain to call Anthropic through an API key you manage.

1. Open **Settings -> LLM Providers**.
2. Select **Anthropic**.
3. Paste your Anthropic API key.
4. Choose the model.
5. Validate the key.
6. Run a short test analysis.

![LLM Providers settings tab with Anthropic selected](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude Subscription Mode

Use Claude Subscription when you want ExtraBrain to use your Claude Pro or Max subscription directly. This mode does not require an API key in ExtraBrain.

1. Open **Settings -> LLM Providers**.
2. Choose **Claude Subscription**.
3. Recheck sign-in status.
4. Choose the available model.
5. Run a test analysis.

## Troubleshooting

If validation fails, confirm the API key belongs to the right Anthropic account, has model access, and is pasted without extra spaces. For subscription mode, confirm your Claude subscription is active and signed in where ExtraBrain expects it.

## Anthropic And Claude Questions

### Do I need an Anthropic API key for Claude Subscription mode?

No. Claude Subscription mode is intended for Claude Pro or Max subscription access and does not require an Anthropic API key inside ExtraBrain.

### What data can be sent to Anthropic or Claude?

When selected for analysis, relevant prompts, transcript context, screenshot-derived context, and custom questions may be sent to Anthropic or Claude according to that provider mode.
