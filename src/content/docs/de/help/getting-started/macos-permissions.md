---
title: Gewähren Sie macOS Audio- und Bildschirmberechtigungen
description: Erfahren Sie, warum ExtraBrain Mikrofon-, Bildschirmaufzeichnungs- und Systemaudioberechtigungen für macOS benötigt und wie Sie blockierten Zugriff beheben können.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain benötigt macOS-Berechtigungen, bevor Live-Audio und Bildschirmkontext verwendet werden können. Gewähren Sie diese beim Onboarding oder über die macOS-Systemeinstellungen.

![ExtraBrain Berechtigungsschritt während des Onboardings](/assets/screenshots/help/dark/onboarding-permissions.png)

## Berechtigungen ExtraBrain Verwendungen

| Erlaubnis | Warum ExtraBrain es verwendet |
| --- | --- |
| Mikrofon | Transkribiert Ihr gesprochenes Audio während Live-Sitzungen. |
| Bildschirmaufnahme | Erfasst Screenshots und Bildschirmkontext, den Sie ExtraBrain analysieren lassen möchten. |
| System-Audio | Erfasst Besprechungs-, Anruf- oder Video-Audio, wenn die Sitzung Systemton benötigt. |

## Öffnen Sie die macOS-Einstellungen

1. Öffnen Sie **Systemeinstellungen**.
2. Gehen Sie zu **Datenschutz und Sicherheit**.
3. Überprüfen Sie die Eingabeaufforderungen **Mikrofon**, **Bildschirmaufzeichnung** und Systemaudio, wenn macOS sie anzeigt.
4. Aktivieren Sie ExtraBrain.
5. Starten Sie ExtraBrain neu, wenn macOS danach fragt oder wenn der Berechtigungsstatus nicht sofort aktualisiert wird.

## Wenn eine Berechtigung immer noch blockiert erscheint

- Beenden Sie ExtraBrain und öffnen Sie es erneut.
- Schalten Sie die Berechtigung in den Systemeinstellungen ein und aus.
- Starten Sie Mac neu, wenn die Bildschirmaufzeichnung weiterhin hängen bleibt.
- Öffnen Sie das Onboarding oder die Einstellungen nach dem Neustart erneut.

Berechtigungswarnungen wie „Mikrofon gestoppt“, „Systemaudio gestoppt“ oder „Audio gestoppt“ bedeuten, dass ExtraBrain den Zugriff auf einen Teil der Aufnahmepipeline verloren hat und eine Erlaubnis oder Gerätewiederherstellung benötigt.

## Berechtigungsfragen

### Warum benötigt ExtraBrain die Erlaubnis zur Bildschirmaufzeichnung?

Mit der Bildschirmaufzeichnung kann ExtraBrain Screenshots und Bildschirmkontext erfassen, die Sie explizit für die Analyse verwenden. Ohne sie können Screenshot-Erfassung und Bildschirmkontext-Workflows fehlschlagen.

### Warum benötigt ExtraBrain eine System-Audio-Berechtigung?

Systemaudio unterstützt ExtraBrain bei der Erfassung von Besprechungen, Anrufen, Videos oder freigegebenen Audiokontexten, sofern dies unterstützt wird. Ohne diese Option wird möglicherweise nur die Mikrofontranskription angezeigt.
