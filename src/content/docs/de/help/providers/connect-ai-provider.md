---
title: Verbinden Sie einen KI-Anbieter
description: Richten Sie ein OpenAI-, Anthropic-, Claude-Abonnement, Codex-Abonnement oder einen benutzerdefinierten OpenAI-compatible-Endpunkt in ExtraBrain ein.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain verwendet den von Ihnen ausgewählten KI-Anbieter für die Live-Analyse. Die Einrichtung des Anbieters steuert, wohin Eingabeaufforderungen, Transkriptkontext und vom Screenshot abgeleiteter Kontext gesendet werden können.

![KI-Anbieterauswahl beim ExtraBrain-Onboarding](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Öffentliche Anbietermodi

- OpenAI API Schlüssel.
- Anthropic API Schlüssel.
- Codex-Abonnement mit ChatGPT Plus oder Pro direkt, ohne API-Schlüssel.
- Claude Abonnement mit Claude Pro oder Max direkt, ohne API-Schlüssel.
– Benutzerdefinierter OpenAI-compatible-Endpunkt mit Basis-URL, API-Schlüssel und Modellname.

## Setup-Checkliste

1. Öffnen Sie Onboarding oder **Einstellungen -> LLM-Anbieter**.
2. Wählen Sie die Anbieterfamilie.
3. Wählen Sie den API-Schlüssel- oder Abonnementmodus.
4. Geben Sie bei Bedarf Anmeldeinformationen ein.
5. Validieren oder überprüfen Sie die Verbindung erneut.
6. Führen Sie eine kurze Testanalyse durch.

![Registerkarte „Einstellungen für LLM-Anbieter“](/assets/screenshots/help/dark/settings-llm-providers.png)

## Datenfluss

Wenn Sie ExtraBrain um eine Analyse bei einem Cloud-Anbieter bitten, werden möglicherweise relevante Eingabeaufforderungen, Transkriptkontext, von Screenshots abgeleiteter Kontext und benutzerdefinierte Fragen an diesen Anbieter gesendet. Anbieterabrechnung, Aufbewahrung, Kontingent und Kontokontrollen unterliegen dem von Ihnen gewählten Anbieter.

## Verwandt

- [Abonnement OpenAI oder Codex verbinden](/de/help/providers/openai-codex-setup/)
- [Abonnement Anthropic oder Claude verbinden](/de/help/providers/anthropic-claude-setup/)
- [Benutzerdefinierten OpenAI-compatible-Endpunkt verwenden](/de/help/providers/custom-openai-compatible-endpoint/)
- [Überprüfen Sie die Preise von ExtraBrain und die Kostentrennung der Anbieter](/de/pricing/)

## Fragen zu KI-Anbietern

### Welchen KI-Anbieter sollte ich zuerst wählen?

Wählen Sie den Anbieter, dem Sie bereits vertrauen und den Sie vor einer echten Sitzung validieren können. Für die meisten Benutzer bedeutet das, dass sie mit einem bestehenden OpenAI-, Anthropic-, Claude- oder Codex-Konto beginnen.

### Kann ich mehr als einen Providerpfad bereithalten?

Ja. Das Beibehalten eines Backup-Anbieterpfads ist vor Vorstellungsgesprächen oder Besprechungen nützlich, bei denen sich Kontingent, Netzwerkzugriff oder Kontostatus ändern könnten.
