---
title: Wie ExtraBrain mit Daten umgeht
description: Verstehen Sie, was ExtraBrain lokal speichert, was an ausgewählte KI-Anbieter gesendet werden kann und wann Deepgram Audio empfängt.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain ist eine lokale Desktop-App, Ihr genauer Datenfluss hängt jedoch von den von Ihnen gewählten Anbietern und Funktionen ab.

![Datenschutzeinstellungen in ExtraBrain](/assets/screenshots/help/dark/settings-privacy.png)

## Genaue Datenschutzformulierung

ExtraBrain speichert Einstellungen, API-Schlüssel, lokalen Sitzungsverlauf und lokale Parakeet-Transkriptionsdaten auf Ihrem Mac. Wenn Sie einen Cloud-LLM-Anbieter verwenden, werden möglicherweise relevanter Text, Transkriptkontext, von Screenshots abgeleiteter Kontext und Eingabeaufforderungen an den von Ihnen ausgewählten Anbieter gesendet. Wenn Sie Deepgram wählen, wird das Audio zur Transkription an Deepgram gesendet. Die anonyme Nutzungsfreigabe kann deaktiviert werden.

## Was auf Ihrem Mac bleibt

- App-Einstellungen
- Von der App gespeicherte Anbieterkonfiguration und API-Schlüssel
- Lokaler Sitzungsverlauf
- Transkripte und Screenshots werden im lokalen Sitzungsverlauf gespeichert
– lokale Parakeet-Transkriptionsdaten

## Was Ihr Mac verlassen kann

| Wahl | Was gesendet werden darf |
| --- | --- |
| OpenAI, Anthropic, Claude Abonnement, Codex Abonnement oder benutzerdefinierter LLM-Anbieter | Eingabeaufforderungen, Transkriptkontext, von Screenshots abgeleiteter Kontext, benutzerdefinierte Fragen und anderer ausgewählter Analysekontext. |
| Deepgram Transkription | Audio zur Transkription an Deepgram gesendet. |
| Anonyme Nutzungsfreigabe | Nutzungsdaten, wenn aktiviert. |

## Anbieterkontrolle

Aufbewahrung, Abrechnung, Kontingent, Modellzugriff und Kontorichtlinien für externe Anbieter werden von dem von Ihnen ausgewählten Anbieter gesteuert. Überprüfen Sie diese Anbietereinstellungen, wenn Sie mit sensiblem Interview-, Arbeitsplatz-, Kunden- oder Forschungsmaterial umgehen.

## Verwandt

- [Datenschutzkontrollen](/de/help/privacy-security/privacy-controls/)
- [Transkription Parakeet oder Deepgram wählen](/de/help/providers/transcription-parakeet-vs-deepgram/)
- [Einen KI-Anbieter verbinden](/de/help/providers/connect-ai-provider/)

## Fragen zur Datenverarbeitung

### Was ist das privateste Transkriptions-Setup?

Verwenden Sie Local Parakeet, wenn die Audiotranskription auf Mac bleiben soll. Vermeiden Sie Deepgram für Sitzungen, bei denen Audio nicht an einen Cloud-Transkriptionsanbieter gesendet werden soll.

### Wer kontrolliert die Aufbewahrung bei Cloud-Anbietern?

Der von Ihnen gewählte Anbieter kontrolliert seine Aufbewahrungs-, Abrechnungs-, Kontingent- und Kontorichtlinien. Überprüfen Sie die Einstellungen für OpenAI, Anthropic, Claude, Codex, Deepgram oder benutzerdefinierte Endpunkte, bevor Sie sensiblen Kontext senden.
