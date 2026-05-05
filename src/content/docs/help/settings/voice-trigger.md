---
title: Use Voice Trigger Phrases In ExtraBrain
description: Configure ExtraBrain voice trigger phrases, when listening happens, phrase management, and transcript handling.
sidebar:
  label: Voice Trigger
  order: 7
lastUpdated: 2026-04-30
---

Voice Trigger lets ExtraBrain start analysis when it hears a short configured phrase during an active session. Find it in **Settings -> Audio**.

![ExtraBrain audio settings focused on Voice Trigger controls](/assets/screenshots/help/dark/settings-voice-trigger.png)

## How It Works

| Detail | Behavior |
| --- | --- |
| Active-session only | ExtraBrain listens for trigger phrases only while recording is active. |
| Phrase list | You can use the default phrases or add your own short phrases. |
| Transcript cleanup | Matched trigger phrases are removed from transcript history and excluded from analysis input after they trigger. |
| Analysis behavior | The phrase acts like a spoken control for starting analysis. |

## Phrase Tips

- Use short phrases that are unlikely to appear in normal conversation.
- Avoid common words or phrases a participant might naturally say.
- Test the phrase in a short session before relying on it live.
- Keep privacy expectations the same as recording: microphone capture must be active for trigger detection.

## Related

- [Configure ExtraBrain audio settings](/help/settings/audio-settings/)
- [How ExtraBrain handles data](/help/privacy-security/how-extrabrain-handles-data/)
- [View and delete session history](/help/sessions-history/view-delete-session-history/)

## Common Questions

### Does Voice Trigger listen when recording is stopped?

No. Voice Trigger listens only during an active session.

### Are trigger phrases saved in the transcript?

Matched phrases are removed from transcript history and excluded from analysis input after they trigger.
