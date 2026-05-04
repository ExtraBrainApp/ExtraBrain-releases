---
title: Privacy and Data Handling
description: Understand the local-first privacy posture of ExtraBrain, on-device AI, and how connected AI providers affect data flow.
sidebar:
  order: 7
lastUpdated: 2026-04-29
---

ExtraBrain is a **local-first desktop app**. It is available for Mac today, with Windows and Linux planned. The app experience is designed to keep your workspace, prompts, screenshots, transcripts, notes, and session context under your control rather than routing everything through a proprietary hosted dashboard. With on-device AI and local transcription, requests can stay on your Mac.

## What local-first means here

- your app runs on your machine
- your provider credentials are yours
- on-device AI can keep model requests local when compatible hardware is available
- local NVIDIA Parakeet transcription can keep transcription on-device
- transcripts, prompts, screenshots, and notes are intended to stay local unless you explicitly send content to an external model or transcription provider

On-device AI requires compatible hardware and may not be available on every Mac or customer environment.

## What still leaves your device

When you ask ExtraBrain to use an external connected model or provider, the prompt content needed for that request is sent to the provider you configured. That can include transcript excerpts, screenshots, notes, or other context you choose to include.

If you configure optional Deepgram, audio or transcription data can be sent to Deepgram depending on your setup. OpenAI, Anthropic, Claude, Codex, or custom-compatible provider requests are governed by those providers' policies, retention settings, and account controls.

## Sensible operating practices

- use on-device AI and local transcription when you need requests to stay on your Mac and your hardware supports it
- use only the external provider subscriptions, accounts, or API keys you trust
- avoid sharing more sensitive content than the situation requires
- rotate keys if a device or account is compromised
- prefer local transcription for sessions where audio should not leave the device
- rehearse with realistic but non-sensitive material before live use
- review workplace, school, interview, meeting, or customer rules before using AI assistance in sensitive contexts
- decide in advance which screenshots, transcript excerpts, or notes should never be sent to external providers

:::tip
If you need the strictest possible privacy posture, use local transcription and on-device AI where compatible hardware supports it, then map your prompt flow carefully and decide what categories of conversation should never be sent to any external provider.
:::

## Common privacy questions

### Does ExtraBrain send everything to a server?

No. ExtraBrain is designed as a local-first desktop app. With local transcription and on-device AI where compatible hardware supports it, requests can stay on your Mac. External providers receive content only when you choose workflows that use them.

### Can screenshots leave the device?

Yes, if you include screenshots in an external provider request. Screenshots should stay local unless the provider, policy, and situation make sharing appropriate.

### Can audio leave the device?

Audio can stay local when you use local transcription. Audio or transcription data can be sent to optional Deepgram depending on your setup.

### Who controls external provider retention?

External provider retention, billing, quota, and account controls are governed by the provider you choose, such as OpenAI, Anthropic, Claude, Codex, Deepgram, or a custom-compatible endpoint.
