---
title: Use A Custom OpenAI-Compatible Endpoint
description: Configure a custom OpenAI-compatible endpoint in ExtraBrain with base URL, API key, model name, validation, and troubleshooting.
sidebar:
  order: 5
lastUpdated: 2026-04-29
---

Use a custom OpenAI-compatible endpoint when your provider or proxy exposes an OpenAI-style API.

![ExtraBrain custom OpenAI-compatible provider settings with Base URL and model name fields](/assets/screenshots/help/dark/settings-custom-provider.png)

## Required Fields

| Field | What To Enter |
| --- | --- |
| Base URL | The provider or proxy API base URL. |
| API key | The key required by that endpoint. |
| Model name | The exact model identifier the endpoint expects. |

## Setup Steps

1. Open onboarding or **Settings -> LLM Providers**.
2. Choose the custom provider option.
3. Enter the base URL.
4. Enter the API key.
5. Enter the model name.
6. Validate the configuration.
7. Run a short test analysis.

## Common Mistakes

- Missing `/v1` when the provider expects it.
- Using a model display name instead of the API model identifier.
- Pasting a key for the wrong provider or proxy.
- Forgetting that provider retention, billing, and access rules are controlled by the custom endpoint operator.

Custom provider requests can include prompts, transcript context, screenshot-derived context, and custom questions.

## Custom Endpoint Questions

### What makes an endpoint OpenAI-compatible?

The endpoint should accept OpenAI-style API requests for chat or responses using the base URL, key, and model name you enter in ExtraBrain.

### What should I test after saving a custom endpoint?

Run a short analysis with non-sensitive transcript or screenshot context. Confirm the endpoint returns a response and that the model name matches what your provider or proxy expects.
