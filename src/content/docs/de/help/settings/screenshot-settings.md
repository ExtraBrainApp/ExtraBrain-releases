---
title: Screenshot-Einstellungen in ExtraBrain konfigurieren
description: Wählen Sie die Screenshot-Aufnahme im aktiven Fenster oder im Vollbildmodus, konfigurieren Sie das Aufnahme-vor-Analyse-Verhalten und verstehen Sie den Datenfluss im Bildschirmkontext in ExtraBrain.
sidebar:
  label: Screenshot-Einstellungen
  order: 8
lastUpdated: 2026-04-30
---

Verwenden Sie **Einstellungen -> Screenshot**, um zu steuern, wie ExtraBrain den Bildschirmkontext erfasst.

![ExtraBrain Screenshot-Einstellungen mit Steuerelementen für den Aufnahmemodus](/assets/screenshots/help/dark/settings-screenshot.png)

## Screenshot-Steuerelemente

| Einstellung | Verhalten |
| --- | --- |
| Aktives Fenster | Erfasst nach Möglichkeit das aktuell aktive Fenster. |
| Vollbild | Erfasst einen breiteren Bildschirmkontext. |
| Erfassung vor der Analyse | Erstellt automatisch einen Screenshot, bevor die Analyse beginnt. |

## Einen Modus auswählen

Verwenden Sie die Active-Window-Erfassung, wenn Sie möchten, dass sich ExtraBrain auf die App oder das Browserfenster konzentriert, über die Sie sprechen. Verwenden Sie die Vollbildaufnahme, wenn der relevante Kontext mehrere sichtbare Bereiche umfasst. Verwenden Sie „Capture-before-analysis“, wenn der Bildschirmkontext normalerweise Teil der Frage ist und Sie nicht manuell auf „Capture“ drücken möchten.

Screenshots und aus Screenshots abgeleiteter Kontext können in Eingabeaufforderungen verwendet werden, die an den von Ihnen ausgewählten KI-Anbieter gesendet werden, wenn Sie um eine Analyse bitten.

## Verwandt

- [Screenshots und Bildschirmkontext verwenden](/de/help/using-extrabrain/screenshots-screen-context/)
- [macOS-Berechtigungen erteilen](/de/help/getting-started/macos-permissions/)
- [Datenschutzkontrollen](/de/help/privacy-security/privacy-controls/)
- [Wie ExtraBrain mit Daten umgeht](/de/help/privacy-security/how-extrabrain-handles-data/)

## Häufige Fragen

### Warum werden keine Screenshots angezeigt?

Überprüfen Sie die Berechtigung zur Bildschirmaufzeichnung von macOS, stellen Sie sicher, dass eine Sitzung aktiv ist, und stellen Sie sicher, dass der ausgewählte Aufnahmemodus zu der App passt, die Sie aufnehmen möchten.

### Sollte ich die Erfassung vor der Analyse aktivieren?

Aktivieren Sie es, wenn der Bildschirmkontext fast immer relevant ist. Lassen Sie es weg, wenn Sie normalerweise nur eine Transkriptanalyse wünschen.
