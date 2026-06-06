---
title: Schließen Sie das Abonnement OpenAI oder Codex an
description: Richten Sie den Schlüsselmodus OpenAI API oder den Abonnementmodus Codex in ExtraBrain ein, validieren Sie den Zugriff, wählen Sie Modelle aus und beheben Sie Fehler bei der Einrichtung.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain unterstützt den Schlüsselmodus OpenAI API und den Abonnementmodus Codex.

## OpenAI API Tastenmodus

Verwenden Sie diesen Modus, wenn ExtraBrain OpenAI über eine von Ihnen verwaltete API-Taste aufrufen soll.

1. Öffnen Sie **Einstellungen -> LLM-Anbieter**.
2. Wählen Sie **OpenAI**.
3. Fügen Sie Ihren API-Schlüssel ein.
4. Wählen Sie das Modell und den Argumentationsaufwand, sofern verfügbar.
5. Validieren Sie den Schlüssel.
6. Führen Sie eine kurze Analyse durch, um zu bestätigen, dass die Antworten von OpenAI stammen.

![OpenAI Anbieterformular im Onboarding](/assets/screenshots/help/dark/onboarding-openai-provider-form.png)

## Codex Abonnementmodus

Verwenden Sie das Codex-Abonnement, wenn ExtraBrain Ihr ChatGPT Plus- oder Pro-Abonnement direkt nutzen soll. Dieser Modus erfordert keinen API-Schlüssel in ExtraBrain.

1. Öffnen Sie **Einstellungen -> LLM-Anbieter**.
2. Wählen Sie **Codex-Abonnement**.
3. Überprüfen Sie den Anmeldestatus erneut.
4. Wählen Sie das verfügbare Modell.
5. Führen Sie eine Testanalyse durch.

## Fehlerbehebung

Wenn die Validierung fehlschlägt, überprüfen Sie, ob der Schlüssel aktuell ist, Zugriff auf das von Ihnen ausgewählte Modell hat und nicht durch einen Proxy oder eine Organisationsrichtlinie blockiert ist. Bestätigen Sie im Abonnementmodus, dass die Desktop-Umgebung auf die Tools des angemeldeten Anbieters zugreifen kann.

## OpenAI- und Codex-Fragen

### Benötige ich einen OpenAI API-Schlüssel für den Codex-Abonnementmodus?

Nein. Der Codex-Abonnementmodus verwendet den ChatGPT Plus- oder Pro-Abonnementzugriff direkt und erfordert keinen OpenAI API-Schlüssel in ExtraBrain.

### Was kann ExtraBrain an OpenAI oder Codex senden?

Wenn ExtraBrain zur Analyse ausgewählt wird, kann es Eingabeaufforderungen, Transkriptkontext, von Screenshots abgeleiteten Kontext und benutzerdefinierte Fragen senden, die für die Antwort erforderlich sind.
