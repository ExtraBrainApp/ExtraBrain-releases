---
title: Wählen Sie einen Transkriptionsanbieter
description: Vergleichen Sie die lokale Parakeet- und Deepgram-Transkription in ExtraBrain nach Datenschutz, Einrichtungszeit, API-Schlüsselanforderungen und Datenfluss.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain wandelt Live-Sprache entweder mit lokalem NVIDIA Parakeet oder Deepgram in Text um.

![Lokale Transkription beim Onboarding ausgewählt](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## Schneller Vergleich

| Option | Am besten für | Datenfluss | Einrichtung |
| --- | --- | --- | --- |
| Lokal Parakeet | Die meisten Benutzer, datenschutzrelevante Sitzungen, schnellste Einrichtung | Die Transkription läuft auf Ihrem Mac | Kein API-Schlüssel |
| Deepgram | Benutzer, die sich bereits auf die verwaltete Cloud-Transkription verlassen | Audio wird an Deepgram | gesendet Deepgram API Schlüssel erforderlich |

## Lokal Parakeet

Wählen Sie „Lokal Parakeet“, wenn Sie die einfachste Einrichtung wünschen und die Transkription lieber auf Mac durchführen möchten. Es erfordert lokalen Modellspeicher und nutzt die lokale CPU, während das Modell ausgeführt wird.

## Deepgram

Wählen Sie Deepgram, wenn die Cloud-Transkription zu Ihrem Workflow passt oder Ihre Organisation bereits Deepgram verwendet. Deepgram erfordert einen gültigen API-Schlüssel.

![Deepgram Schlüsselfeld beim Onboarding](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

Nach erfolgreicher Validierung kann ExtraBrain mit dem Onboarding fortfahren, wobei Deepgram ausgewählt ist.

![Deepgram Validierungserfolg während des Onboardings](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## Datenschutzhinweis

Local Parakeet hält die Transkription lokal. Deepgram sendet Audio zur Transkription an Deepgram. Die KI-Analyse ist eine separate Option und sendet möglicherweise Transkripttext oder aus Screenshots abgeleiteten Kontext an den von Ihnen ausgewählten LLM-Anbieter.

## Verwandt

- [Audioeinstellungen für ExtraBrain konfigurieren](/de/help/settings/audio-settings/)
- [Transkripte und Füllwörter bereinigen](/de/help/settings/transcript-cleanup-filler-words/)
- [Voice-Trigger-Phrasen verwenden](/de/help/settings/voice-trigger/)
- [Wie ExtraBrain mit Daten umgeht](/de/help/privacy-security/how-extrabrain-handles-data/)

## Fragen zur Transkription

### Welcher Transkriptionsanbieter eignet sich am besten für den Datenschutz?

Lokal Parakeet ist die beste Standardeinstellung, wenn Audio auf Ihrem Mac bleiben soll. Es ist kein Deepgram API-Schlüssel erforderlich.

### Wann sollte ich Deepgram wählen?

Wählen Sie Deepgram, wenn die Cloud-Transkription zur Sitzung passt, Ihre Organisation bereits Deepgram verwendet oder Sie eine verwaltete Transkription bevorzugen und akzeptieren, dass Audio an Deepgram gesendet wird.
