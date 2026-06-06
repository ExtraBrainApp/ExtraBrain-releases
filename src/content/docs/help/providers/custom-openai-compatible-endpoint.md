---
title: Set Up A Custom OpenAI-Compatible API Endpoint
description: Configure a custom OpenAI-compatible API endpoint in ExtraBrain with the right base URL, API key, model name, validation steps, privacy checks, and troubleshooting tips.
sidebar:
  order: 5
lastUpdated: 2026-06-06
---

Use a custom OpenAI-compatible endpoint when your provider, local server, proxy, or hosted gateway exposes an OpenAI-style API. ExtraBrain needs three values: the endpoint base URL, the API key required by that endpoint, and the exact model name the endpoint expects.

## How To Set Up A Custom OpenAI API Endpoint

To set up a custom OpenAI-compatible API endpoint in ExtraBrain, open **Settings -> LLM Providers**, choose the custom provider option, enter the provider base URL, API key, and model name, then validate the configuration with a short test analysis.

![ExtraBrain custom OpenAI-compatible provider settings with Base URL and model name fields](/assets/screenshots/help/dark/settings-custom-provider.png)

## Required Fields

| Field | What To Enter |
| --- | --- |
| Base URL | The provider, proxy, or local server API base URL. Common shapes include `https://api.example.com/v1`, `http://localhost:11434/v1`, or a hosted gateway URL. |
| API key | The key required by that endpoint. Use the key for the proxy or provider you are connecting, not a key from another provider. |
| Model name | The exact model identifier the endpoint expects, such as a provider model ID or the name configured in your local server or gateway. |

## Setup Steps

1. Open onboarding or **Settings -> LLM Providers**.
2. Choose the custom OpenAI-compatible provider option.
3. Enter the base URL, including `/v1` when your provider expects it.
4. Enter the API key for that endpoint.
5. Enter the exact model name from the provider, proxy, or local server.
6. Save and validate the configuration.
7. Run a short test analysis with non-sensitive transcript or screenshot context.
8. Confirm the response quality, latency, provider billing path, and privacy expectations before using the endpoint in a real interview or meeting.

## Base URL Examples

| Endpoint Type | Example Shape | Notes |
| --- | --- | --- |
| Hosted OpenAI-compatible provider | `https://api.example.com/v1` | Use the provider documentation as the source of truth for the path and model IDs. |
| Local server | `http://localhost:11434/v1` | Make sure the local server is running before validating ExtraBrain settings. |
| Team proxy or gateway | `https://ai-gateway.company.com/v1` | Confirm the gateway supports the model and request type ExtraBrain will use. |

Only use URLs and keys from providers you trust. A custom endpoint can receive prompts, transcript context, screenshot-derived context, and custom questions when you choose that provider for analysis.

## Model Name Guidance

The model name should be the API identifier accepted by the endpoint, not the marketing display name. If validation fails, check whether your provider expects a fully qualified model ID, a local alias, or a gateway-specific deployment name.

## Troubleshooting

| Problem | What To Check |
| --- | --- |
| Validation fails immediately | Confirm the base URL is reachable, includes `/v1` if required, and uses `https` unless you are intentionally using a local endpoint. |
| Authentication error | Verify the API key belongs to the custom endpoint, has not expired, and has permission to use the selected model. |
| Model not found | Replace the display name with the exact API model identifier from the provider, local server, or gateway. |
| Slow or empty response | Test the endpoint outside ExtraBrain, check provider status, and try a smaller non-sensitive prompt. |
| Unexpected billing or logging | Review the endpoint operator's billing, retention, logging, and training policies before sending sensitive context. |

## Privacy And Billing Checklist

- Use local providers only when the local server is actually running on your device or trusted network.
- Treat external gateways as external providers: prompts, transcripts, screenshots, and context can leave your Mac.
- Review the endpoint operator's retention, logging, training, quota, and billing rules.
- Test with non-sensitive content before using a custom endpoint in an interview, meeting, customer call, lecture, or research session.
- Rotate the API key if a device, account, proxy, or gateway may be compromised.

## Related Guides

- [Connect an AI provider](/help/providers/connect-ai-provider/)
- [Set up API keys](/help/setup-api-keys/)
- [How ExtraBrain handles data](/help/privacy-security/how-extrabrain-handles-data/)
- [Bring your own provider](/features/bring-your-own-provider/)

## Custom Endpoint Questions

### What makes an endpoint OpenAI-compatible?

The endpoint should accept OpenAI-style API requests using the base URL, key, and model name you enter in ExtraBrain. Your provider, local server, or gateway documentation should confirm which request types and model IDs are supported.

### What should I test after saving a custom endpoint?

Run a short analysis with non-sensitive transcript or screenshot context. Confirm the endpoint returns a useful response, the model name matches what your provider or proxy expects, and the latency is acceptable for live work.

### Can I use a local OpenAI-compatible server?

Yes, if the local server exposes an OpenAI-compatible API and ExtraBrain can reach its base URL. Keep the server running while you validate settings and during any live session that depends on it.

### Who controls data retention and billing for a custom endpoint?

The endpoint operator controls retention, logging, model access, billing, quotas, and availability. ExtraBrain routes requests to the endpoint you configure, so review those policies before sending sensitive meeting or interview context.
