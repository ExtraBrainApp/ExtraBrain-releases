---
title: Choose A Transcription Provider
description: Compare Local Parakeet and Deepgram transcription in ExtraBrain by privacy, setup time, API key requirements, and data flow.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain turns live speech into text with either local NVIDIA Parakeet or Deepgram.

![Local transcription selected during onboarding](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## Quick Comparison

| Option | Best For | Data Flow | Setup |
| --- | --- | --- | --- |
| Local Parakeet | Most users, privacy-sensitive sessions, fastest setup | Transcription runs on your Mac | No API key |
| Deepgram | Users who already rely on managed cloud transcription | Audio is sent to Deepgram | Deepgram API key required |

## Local Parakeet

Choose Local Parakeet when you want the simplest setup and prefer transcription to happen on the Mac. It requires local model storage and uses local CPU while the model runs.

## Deepgram

Choose Deepgram when cloud transcription fits your workflow or your organization already uses Deepgram. Deepgram requires a valid API key.

![Deepgram key field during onboarding](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

After validation succeeds, ExtraBrain can continue onboarding with Deepgram selected.

![Deepgram validation success during onboarding](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## Privacy Note

Local Parakeet keeps transcription local. Deepgram sends audio to Deepgram for transcription. AI analysis is a separate choice and may send transcript text or screenshot-derived context to the LLM provider you selected.

## Related

- [Configure ExtraBrain audio settings](/help/settings/audio-settings/)
- [Clean up transcripts and filler words](/help/settings/transcript-cleanup-filler-words/)
- [Use voice trigger phrases](/help/settings/voice-trigger/)
- [How ExtraBrain handles data](/help/privacy-security/how-extrabrain-handles-data/)

## Transcription Questions

### Which transcription provider is best for privacy?

Local Parakeet is the best default when audio should stay on your Mac. It does not require a Deepgram API key.

### When should I choose Deepgram?

Choose Deepgram when cloud transcription fits the session, your organization already uses Deepgram, or you prefer managed transcription and accept that audio is sent to Deepgram.
