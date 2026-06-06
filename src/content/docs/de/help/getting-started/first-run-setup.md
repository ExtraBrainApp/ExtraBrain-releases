---
title: Richten Sie ExtraBrain zum ersten Mal ein
description: Schließen Sie das ExtraBrain-Onboarding auf macOS ab, indem Sie Berechtigungen erteilen, Transkription auswählen und einen KI-Anbieter verbinden.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

Bei der erstmaligen Einrichtung wird ExtraBrain vom Start bis zu einer nutzbaren Live-Sitzung durchgeführt. Der Onboarding-Ablauf umfasst Begrüßung, macOS-Berechtigungen, Transkriptionsanbieter, KI-Anbieter und Abschluss.

![ExtraBrain Onboarding-Begrüßungsbildschirm](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. Starten Sie das Onboarding

Öffnen Sie ExtraBrain und fahren Sie vom Begrüßungsbildschirm aus fort. Lassen Sie die App geöffnet, während Sie die Berechtigungen und die Anbietereinrichtung abschließen.

## 2. Gewähren Sie macOS-Berechtigungen

ExtraBrain benötigt die Berechtigung, den Kontext zu hören und zu sehen, den Sie verwenden möchten:

- Mikrofon für Ihren gesprochenen Ton.
- Bildschirmaufzeichnung für Screenshots und Bildschirmkontext.
- Systemaudio für Anrufe, Besprechungen, Videos oder gemeinsame Audiotranskription, sofern unterstützt.

Siehe [Berechtigungen für macOS erteilen] (/help/getting-started/macos-permissions/) für Wiederherstellungsschritte, wenn macOS eine Berechtigung im Status „Ausstehend“ oder „Verweigert“ behält.

## 3. Wählen Sie Transkription

Wählen Sie einen Transkriptionsmodus:

- Lokales Parakeet läuft auf Ihrem Mac und erfordert keinen API-Schlüssel.
- Deepgram verwendet Cloud-Transkription und erfordert einen Deepgram API-Schlüssel.

![Auswahl des Transkriptionsanbieters beim Onboarding](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4. KI verbinden

Wählen Sie die KI-Anbieterfamilie und die Verbindungsmethode aus, die ExtraBrain für die Live-Analyse verwenden soll. Zu den öffentlichen Anbietermodi gehören OpenAI, Anthropic, Claude-Abonnement, Codex-Abonnement und benutzerdefinierte OpenAI-compatible-Endpunkte.

![KI-Anbieterauswahl beim Onboarding](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

Die im Onboarding angezeigte Option für das lokale Modell ist deaktiviert und sollte nicht als verfügbares öffentliches Setup behandelt werden.

## 5. Führen Sie einen kurzen Test durch

Vor einem echten Interview oder Meeting:

- Aufnahme starten
- Bestätigen Sie, dass Transkripteinträge angezeigt werden
- Nehmen Sie einen Screenshot auf, wenn der Bildschirmkontext wichtig ist
- Führen Sie eine Analyse durch
- Bestätigen Sie, dass die Antwort vom erwarteten Anbieter stammt

## Verwandt

- [Transkription Parakeet oder Deepgram wählen](/de/help/providers/transcription-parakeet-vs-deepgram/)
- [Einen KI-Anbieter verbinden](/de/help/providers/connect-ai-provider/)
- [Tastaturkürzel](/de/help/settings/keyboard-shortcuts/)

## Fragen zur Einrichtung

### Kann ich nach der Ersteinrichtung den Anbieter wechseln?

Ja. Sie können die Transkription unter **Einstellungen -> Audio** und die KI-Anbieter unter **Einstellungen -> LLM-Anbieter** ändern. Führen Sie einen kurzen Test durch, nachdem Sie eine der Einstellungen geändert haben.

### Was soll ich tun, wenn das Onboarding nicht fortgesetzt werden kann?

Überprüfen Sie die macOS-Berechtigungen, die Anbietervalidierung und die erforderlichen Felder. Deepgram erfordert einen gültigen Schlüssel, während Local Parakeet ohne einen API-Schlüssel fortfahren kann.
