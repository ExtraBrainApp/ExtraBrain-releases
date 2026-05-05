---
title: Connect OpenAI Or Codex Subscription
description: Set up OpenAI API key mode or Codex Subscription mode in ExtraBrain, validate access, choose models, and troubleshoot setup.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain supports OpenAI API key mode and Codex Subscription mode.

## OpenAI API Key Mode

Use this mode when you want ExtraBrain to call OpenAI through an API key you manage.

1. Open **Settings -> LLM Providers**.
2. Select **OpenAI**.
3. Paste your API key.
4. Choose the model and reasoning effort when available.
5. Validate the key.
6. Run a short analysis to confirm responses come from OpenAI.

![OpenAI provider form in onboarding](/assets/screenshots/help/dark/onboarding-openai-provider-form.png)

## Codex Subscription Mode

Use Codex Subscription when you want ExtraBrain to use your ChatGPT Plus or Pro subscription directly. This mode does not require an API key in ExtraBrain.

1. Open **Settings -> LLM Providers**.
2. Choose **Codex Subscription**.
3. Recheck sign-in status.
4. Choose the available model.
5. Run a test analysis.

## Troubleshooting

If validation fails, check that the key is current, has access to the model you selected, and is not blocked by a proxy or organization policy. For subscription mode, confirm the desktop environment can access the signed-in provider tooling.

## OpenAI And Codex Questions

### Do I need an OpenAI API key for Codex Subscription mode?

No. Codex Subscription mode uses ChatGPT Plus or Pro subscription access directly and does not require an OpenAI API key in ExtraBrain.

### What can ExtraBrain send to OpenAI or Codex?

When selected for analysis, ExtraBrain may send prompts, transcript context, screenshot-derived context, and custom questions needed for the response.
