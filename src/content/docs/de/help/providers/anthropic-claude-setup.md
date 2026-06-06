---
title: Schließen Sie das Abonnement Anthropic oder Claude an
description: Richten Sie den Schlüsselmodus Anthropic API oder den Abonnementmodus Claude in ExtraBrain ein, validieren Sie den Zugriff, wählen Sie Modelle aus und beheben Sie Fehler bei der Anmeldung.
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain unterstützt den Schlüsselmodus Anthropic API und den Abonnementmodus Claude.

## Anthropic API Tastenmodus

Verwenden Sie diesen Modus, wenn ExtraBrain Anthropic über eine von Ihnen verwaltete API-Taste aufrufen soll.

1. Öffnen Sie **Einstellungen -> LLM-Anbieter**.
2. Wählen Sie **Anthropic**.
3. Fügen Sie Ihren Anthropic API-Schlüssel ein.
4. Wählen Sie das Modell.
5. Validieren Sie den Schlüssel.
6. Führen Sie eine kurze Testanalyse durch.

![Registerkarte „Einstellungen für LLM-Anbieter“ mit ausgewählter Option „Anthropic“](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude Abonnementmodus

Verwenden Sie das Claude-Abonnement, wenn ExtraBrain Ihr Claude-Pro- oder Max-Abonnement direkt nutzen soll. Dieser Modus erfordert keinen API-Schlüssel in ExtraBrain.

1. Öffnen Sie **Einstellungen -> LLM-Anbieter**.
2. Wählen Sie **Claude-Abonnement**.
3. Überprüfen Sie den Anmeldestatus erneut.
4. Wählen Sie das verfügbare Modell.
5. Führen Sie eine Testanalyse durch.

## Fehlerbehebung

Wenn die Validierung fehlschlägt, stellen Sie sicher, dass der Schlüssel API zum richtigen Konto Anthropic gehört, über Modellzugriff verfügt und ohne zusätzliche Leerzeichen eingefügt wird. Bestätigen Sie für den Abonnementmodus, dass Ihr Claude-Abonnement aktiv und dort angemeldet ist, wo ExtraBrain es erwartet.

## Anthropic- und Claude-Fragen

### Benötige ich einen Anthropic API-Schlüssel für den Claude-Abonnementmodus?

Nein. Der Abonnementmodus Claude ist für den Zugriff auf Claude Pro oder Max-Abonnements vorgesehen und erfordert keinen Anthropic API-Schlüssel in ExtraBrain.

### Welche Daten können an Anthropic oder Claude gesendet werden?

Bei Auswahl zur Analyse können relevante Eingabeaufforderungen, Transkriptkontext, von Screenshots abgeleiteter Kontext und benutzerdefinierte Fragen je nach Anbietermodus an Anthropic oder Claude gesendet werden.
