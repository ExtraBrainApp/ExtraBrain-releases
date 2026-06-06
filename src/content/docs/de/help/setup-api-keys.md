---
title: Richten Sie KI-Anbieter ein
description: Richten Sie ExtraBrain-Anbieter, API-Schlüssel, Abonnements, benutzerdefinierte Endpunkte und Transkriptionsoptionen für die Live-Analyse ein.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Verwenden Sie diese Übersicht, wenn Sie auswählen müssen, welcher Anbieterleitfaden zu Ihrem Setup passt. ExtraBrain unterstützt API-Schlüsselanbieter, Abonnementanbietermodi und benutzerdefinierte OpenAI-compatible-Endpunkte.

![ExtraBrain AI-Anbieterauswahl](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Wichtige Erkenntnisse

Ein ExtraBrain-KI-Anbieter ist der Modellpfad, den die App verwendet, wenn sie Transkript-, Eingabeaufforderungs-, Screenshot- oder Sitzungskontext in eine Live-Analyse umwandelt.

- ExtraBrain unterstützt Google Gemma 4 lokale KI, OpenAI, Anthropic, Claude-Abonnement, Codex-Abonnement und benutzerdefinierte OpenAI-compatible-Endpunkte.
- Für die Schlüsselmodi API sind aktuelle Anbieteranmeldeinformationen erforderlich. Abonnementmodi verwenden den von der App unterstützten angemeldeten Abonnementpfad.
- Die Anbietervalidierung sollte einmal vor einem Live-Interview, einer Besprechung, einem Vortrag oder einem Forschungsgespräch getestet werden.
- Anbieterabrechnung, Aufbewahrung, Modellzugriff und Kontingent werden durch das von Ihnen gewählte Anbieterkonto gesteuert.

- [Einen KI-Anbieter verbinden](/de/help/providers/connect-ai-provider/)
- [Abonnement OpenAI oder Codex verbinden](/de/help/providers/openai-codex-setup/)
- [Abonnement Anthropic oder Claude verbinden](/de/help/providers/anthropic-claude-setup/)
- [Benutzerdefinierten OpenAI-compatible-Endpunkt verwenden](/de/help/providers/custom-openai-compatible-endpoint/)
- [Transkription Parakeet oder Deepgram wählen](/de/help/providers/transcription-parakeet-vs-deepgram/)
- [App-Preise und Anbieterkosten vergleichen](/de/pricing/)

## Checkliste für die Einrichtung des Anbieters

1. Entscheiden Sie, ob Sie den API-Schlüsselmodus, den Abonnementmodus oder einen benutzerdefinierten Endpunkt wünschen.
2. Öffnen Sie **Einstellungen -> LLM-Anbieter**.
3. Geben Sie die erforderlichen Anbieterdaten ein.
4. Validieren oder überprüfen Sie die Anbieterverbindung erneut.
5. Führen Sie eine Testanalyse durch.
6. Lesen Sie [Wie ExtraBrain mit Daten umgeht](/de/help/privacy-security/how-extrabrain-handles-data/), bevor Sie sensiblen Kontext verwenden.

## Fragen zum Anbieter

### Benötige ich für jeden Anbietermodus einen API-Schlüssel?

Nein. Für die Tastenmodi OpenAI und Anthropic API sind Tasten erforderlich. Die Abonnementmodi Claude und Codex nutzen den Abonnementzugriff und erfordern keinen API-Schlüssel in ExtraBrain.

### Was sollte ich überprüfen, wenn die Anbietervalidierung fehlschlägt?

Bestätigen Sie den Schlüssel, den Modellzugriff, die Basis-URL, den Abonnementstatus und den Netzwerkzugriff. Benutzerdefinierte Endpunkte benötigen außerdem den genauen Modellnamen, den der Endpunkt erwartet.
