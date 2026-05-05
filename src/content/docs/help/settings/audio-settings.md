---
title: Configure ExtraBrain Audio Settings
description: Set the transcription provider, Deepgram API key, microphone device, transcript cleanup, voice trigger, and system audio permission in ExtraBrain.
sidebar:
  label: Audio Settings
  order: 5
lastUpdated: 2026-04-30
---

Use **Settings -> Audio** to choose transcription behavior and microphone input.

![ExtraBrain audio settings with transcription provider and microphone controls](/assets/screenshots/help/dark/settings-audio.png)

## Audio Controls

| Control | What It Changes |
| --- | --- |
| Speech-to-text provider | Local Parakeet or Deepgram cloud transcription. |
| Deepgram API key | Required only when Deepgram is selected. |
| Audio source | Preferred microphone input. |
| Voice Trigger | Spoken phrase control for starting analysis during an active session. |
| Transcript Cleanup | Filler-word removal before transcript cards and analysis. |
| System audio permission | macOS permission flow for capturing app/system audio when required. |

## Notes

- Audio device changes apply to new sessions.
- Local Parakeet keeps transcription local.
- Deepgram sends audio to Deepgram for transcription.
- ExtraBrain may need macOS microphone and system audio permissions before recording works.

## Related

- [Choose Parakeet or Deepgram transcription](/help/providers/transcription-parakeet-vs-deepgram/)
- [Grant macOS permissions](/help/getting-started/macos-permissions/)
- [Clean up transcripts and filler words](/help/settings/transcript-cleanup-filler-words/)
- [Use voice trigger phrases](/help/settings/voice-trigger/)

## Common Questions

### Why does ExtraBrain say no devices were found?

macOS may not have granted microphone permission yet, or the selected input may be unavailable. Grant permission, reconnect the microphone, then start a new session.

### Does switching transcription providers affect the current session?

Provider and device changes are safest when applied before a session starts. Stop recording and start a new session after major audio changes.

