---
title: Konfigurieren Sie die Audioeinstellungen von ExtraBrain
description: Legen Sie den Transkriptionsanbieter, den Schlüssel Deepgram API, das Mikrofongerät, die Transkriptbereinigung, den Sprachauslöser und die Systemaudioberechtigung in ExtraBrain fest.
sidebar:
  label: Audioeinstellungen
  order: 5
lastUpdated: 2026-04-30
---

Verwenden Sie **Einstellungen -> Audio**, um das Transkriptionsverhalten und den Mikrofoneingang auszuwählen.

![ExtraBrain Audioeinstellungen mit Transkriptionsanbieter und Mikrofonsteuerung](/assets/screenshots/help/dark/settings-audio.png)

## Audiosteuerung

| Kontrolle | Was es ändert |
| --- | --- |
| Speech-to-Text-Anbieter | Lokale Parakeet- oder Deepgram-Cloud-Transkription. |
| Deepgram API Schlüssel | Nur erforderlich, wenn Deepgram ausgewählt ist. |
| Audioquelle | Bevorzugter Mikrofoneingang. |
| Sprachauslöser | Steuerung gesprochener Phrasen zum Starten der Analyse während einer aktiven Sitzung. |
| Transkriptbereinigung | Entfernen von Füllwörtern vor Transkriptkarten und Analyse. |
| System-Audio-Berechtigung | macOS-Berechtigungsfluss zum Erfassen von app/system-Audio, wenn erforderlich. |

## Notizen

- Änderungen am Audiogerät gelten für neue Sitzungen.
- Local Parakeet hält die Transkription lokal.
- Deepgram sendet Audio zur Transkription an Deepgram.
- ExtraBrain benötigt möglicherweise macOS Mikrofon- und System-Audioberechtigungen, bevor die Aufnahme funktioniert.

## Verwandt

- [Transkription Parakeet oder Deepgram wählen](/de/help/providers/transcription-parakeet-vs-deepgram/)
- [macOS-Berechtigungen erteilen](/de/help/getting-started/macos-permissions/)
- [Transkripte und Füllwörter bereinigen](/de/help/settings/transcript-cleanup-filler-words/)
- [Voice-Trigger-Phrasen verwenden](/de/help/settings/voice-trigger/)

## Häufige Fragen

### Warum meldet ExtraBrain, dass keine Geräte gefunden wurden?

macOS hat möglicherweise noch keine Mikrofonberechtigung erteilt oder der ausgewählte Eingang ist möglicherweise nicht verfügbar. Erteilen Sie die Erlaubnis, schließen Sie das Mikrofon erneut an und starten Sie dann eine neue Sitzung.

### Hat der Wechsel des Transkriptionsanbieters Auswirkungen auf die aktuelle Sitzung?

Anbieter- und Geräteänderungen sind am sichersten, wenn sie vor Beginn einer Sitzung vorgenommen werden. Stoppen Sie die Aufnahme und starten Sie eine neue Sitzung nach größeren Audioänderungen.

