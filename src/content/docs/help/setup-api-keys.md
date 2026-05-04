---
title: Set Up AI Providers
description: Choose on-device AI where hardware supports it, or connect your current provider subscription, account, or API key so ExtraBrain can answer with the models you choose.
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain is designed around AI options you control. You can use on-device AI where compatible hardware is available, or connect the provider subscription, account, or API key you already manage. This keeps model choice, retention settings, and usage costs under your control.

Supported provider patterns include on-device AI, OpenAI, Anthropic, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription modes. Transcription can use local NVIDIA Parakeet or optional Deepgram.

On-device AI requires compatible hardware and may not be available on every Mac or customer environment.

## Recommended setup

- Use on-device AI if your hardware supports it and you want model requests to stay local.
- Connect the provider subscription, account, or API key you plan to rely on most if you use an external provider.
- Keep at least one backup option available before an important interview or meeting.
- Decide whether the session should use local transcription or optional Deepgram before a high-stakes call.
- Match provider choice to the workflow: coding interviews, system design, behavioral interviews, meetings, lectures, and research calls may need different context length, speed, or privacy tradeoffs.

## Key handling expectations

- Store keys only where the app expects them.
- Use a dedicated provider subscription, account, or API key for interview workflows if you want tighter spend control for external providers.
- Rotate or revoke keys immediately if you believe they were exposed.

## Suggested checklist

1. Check whether on-device AI is available on your Mac.
2. Create or locate your provider subscription, account, or API key if you plan to use an external provider.
3. Paste external credentials into ExtraBrain settings if needed.
4. Save the configuration.
5. Run one short test session.
6. Verify responses are coming from the local model or provider you selected.
7. Verify transcript routing: local Parakeet, optional Deepgram, or the specific external model provider used for prompts.

:::tip
Keep a backup option configured before important interviews. Local AI availability, provider outages, and quota issues are rare until they matter.
:::

## Related guides

- [Getting started](/help/getting-started/)
- [Using ExtraBrain in interviews](/help/using-extrabrain-in-interviews/)
- [Troubleshooting](/help/troubleshooting/)

## Provider questions

### Can I bring my own OpenAI or Anthropic key?

Yes. ExtraBrain is built around provider access you control, including OpenAI, Anthropic, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription modes where configured.

### Do external providers receive my data?

They can receive the prompt content needed for a request you choose to send. That content can include transcript excerpts, screenshots, notes, or other session context. Provider retention, billing, and account controls are governed by the provider.

### What is the most private setup?

Use local NVIDIA Parakeet transcription and on-device AI where compatible hardware supports it, and avoid external provider requests for sensitive session content.
