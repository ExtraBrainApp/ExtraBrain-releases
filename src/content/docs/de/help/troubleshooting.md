---
title: Fehlerbehebung
description: Behebung von Problemen mit ExtraBrain-Mikrofon, Bildschirmaufzeichnung, Systemaudio, API-Taste, Deepgram, Screenshot, verstecktem Fenster und Sitzungsverlauf.
sidebar:
  order: 6
lastUpdated: 2026-04-29
---

Verwenden Sie diese Seite, wenn ExtraBrain kein Audio aufnimmt, einen Anbieter nicht validieren kann, Screenshots verpasst oder sich während einer Live-Sitzung nur schwer wiederherstellen lässt.

![ExtraBrain Berechtigungsschritt zur Fehlerbehebung beim Zugriff auf Mikrofon, Bildschirm und Systemaudio](/assets/screenshots/help/dark/onboarding-permissions.png)

## Wichtige Erkenntnisse

Die ExtraBrain-Fehlerbehebung ist der Wiederherstellungspfad für die 6 häufigsten Blocker: Mikrofonberechtigung, Bildschirmaufzeichnungsberechtigung, Systemaudio, Anbietervalidierung, Deepgram-Validierung und Fenstersichtbarkeit.

- Die meisten Erfassungsprobleme beginnen in macOS Privacy & Security und erfordern dann das Beenden und erneute Öffnen von ExtraBrain.
- Anbieterfehler betreffen normalerweise das ausgewählte Modell, den API-Schlüssel, den Abonnementzugriff, die Basis-URL, das Kontingent oder den Netzwerkzugriff.
- Für die Screenshot-Analyse sind eine aktive Sitzung, die Berechtigung zur Bildschirmaufzeichnung und der erwartete Aufnahmemodus erforderlich.
- Aktive Sitzungen können erst gelöscht werden, wenn die Aufzeichnung beendet wird.

## Mikrofonberechtigung erforderlich

Wenn die Mikrofonaufnahme nicht startet:

1. Öffnen Sie **Systemeinstellungen -> Datenschutz und Sicherheit -> Mikrofon**.
2. Aktivieren Sie ExtraBrain.
3. Beenden Sie ExtraBrain und öffnen Sie es erneut, wenn macOS danach fragt.
4. Starten Sie eine kurze Testsitzung.

Siehe [Gewähren von macOS-Berechtigungen](/de/help/getting-started/macos-permissions/).

## Bildschirmaufzeichnung oder Systemaudio funktionieren nicht

Die Bildschirmaufzeichnung steuert Screenshots und Bildschirmkontext. System Audio steuert die Transkription von Besprechungen, Anrufen, Videos oder geteilten Audioinhalten, sofern dies unterstützt wird.

Suchen Sie nach Warnchips wie „Mikrofon gestoppt“, „System-Audio gestoppt“ oder „Audio gestoppt“. Öffnen Sie dann die Datenschutz- und Sicherheitseinstellungen von macOS erneut, gewähren Sie Zugriff und starten Sie ExtraBrain bei Bedarf neu.

## API Schlüsselvalidierung fehlgeschlagen

Für OpenAI, Anthropic oder einen benutzerdefinierten Endpunkt:

- Bestätigen Sie, dass der Schlüssel aktuell ist
- Überschüssige Leerzeichen entfernen
- Bestätigen Sie, dass das ausgewählte Modell für das Konto verfügbar ist
– Bestätigen Sie, dass ein benutzerdefinierter Endpunkt eine Basis-URL und einen Modellnamen hat
- Überprüfen Sie die Proxy- oder Organisationsbeschränkungen

Anschließend validieren Sie erneut unter **Einstellungen -> LLM-Anbieter**.

## Deepgram Validierung fehlgeschlagen

Deepgram erfordert einen gültigen Deepgram API Schlüssel. Wenn die Validierung fehlschlägt, fügen Sie einen neuen Schlüssel ein, versuchen Sie die Validierung erneut oder wechseln Sie über Onboarding oder **Einstellungen -> Audio** zurück zu Local Parakeet.

## Screenshots werden in der Analyse nicht angezeigt

Überprüfen Sie Folgendes:

- Eine Sitzung ist aktiv
- Die Erlaubnis zur Bildschirmaufzeichnung wurde erteilt
- Der Aufnahmemodus in **Einstellungen -> Screenshot** entspricht Ihren Erwartungen
– Der Screenshot-Eintrag erscheint im Transkriptfenster

Screenshots sind lokale Sitzungsartefakte. Vom Screenshot abgeleiteter Kontext kann gesendet werden, wenn Sie einen Cloud-LLM-Anbieter um eine Analyse bitten.

## Das Hauptfenster ist ausgeblendet oder schwer anzuklicken

Wenn das Overlay ausgeblendet ist oder das Durchklicken die Interaktion erschwert:

1. Verwenden Sie die Verknüpfung zum Umschalten des Fensters.
2. Deaktivieren Sie Click-through unter **Einstellungen -> Datenschutz**.
3. Aktivieren Sie die Sichtbarkeit des Docks oder der Menüleiste erneut, wenn Sie einen sichtbaren Wiederherstellungspfad benötigen.

## Das Löschen des Sitzungsverlaufs ist deaktiviert

Aktive Sitzungen können nicht gelöscht werden. Stoppen Sie zunächst die Aufzeichnung, kehren Sie dann zu **Einstellungen -> Sitzungen** zurück und löschen Sie die Sitzung.

## Verwandte Leitfäden

- [ExtraBrain zum ersten Mal einrichten](/de/help/getting-started/first-run-setup/)
- [Einen KI-Anbieter verbinden](/de/help/providers/connect-ai-provider/)
- [Transkription Parakeet oder Deepgram wählen](/de/help/providers/transcription-parakeet-vs-deepgram/)
- [Datenschutzkontrollen](/de/help/privacy-security/privacy-controls/)

## Fragen zur Fehlerbehebung

### Was sollte ich zuerst überprüfen, wenn ExtraBrain nicht aufzeichnet?

Überprüfen Sie die Mikrofonberechtigung, die Systemaudioberechtigung, das ausgewählte Audiogerät und ob eine Sitzung bereits gestartet oder beendet wird.

### Was sollte ich zuerst überprüfen, wenn die Analyse fehlschlägt?

Überprüfen Sie den ausgewählten KI-Anbieter, den API-Schlüssel- oder Abonnementstatus, benutzerdefinierte Endpunktfelder und ob die aktuelle Sitzung über zu analysierenden Transkript- oder Screenshot-Kontext verfügt.
