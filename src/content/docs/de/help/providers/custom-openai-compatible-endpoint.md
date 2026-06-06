---
title: Verwenden Sie einen benutzerdefinierten OpenAI-kompatiblen Endpunkt
description: Konfigurieren Sie einen benutzerdefinierten OpenAI-compatible-Endpunkt in ExtraBrain mit Basis-URL, API-Schlüssel, Modellname, Validierung und Fehlerbehebung.
sidebar:
  order: 5
lastUpdated: 2026-04-29
---

Verwenden Sie einen benutzerdefinierten OpenAI-compatible-Endpunkt, wenn Ihr Anbieter oder Proxy einen API im OpenAI-Stil bereitstellt.

![ExtraBrain benutzerdefinierte OpenAI-compatible-Anbietereinstellungen mit Basis-URL- und Modellnamensfeldern](/assets/screenshots/help/dark/settings-custom-provider.png)

## Erforderliche Felder

| Feld | Was Sie eingeben müssen |
| --- | --- |
| Basis-URL | Die Basis-URL des Anbieters oder Proxys API. |
| API Schlüssel | Der für diesen Endpunkt erforderliche Schlüssel. |
| Modellname | Die genaue Modellkennung, die der Endpunkt erwartet. |

## Einrichtungsschritte

1. Öffnen Sie Onboarding oder **Einstellungen -> LLM-Anbieter**.
2. Wählen Sie die Option „Benutzerdefinierter Anbieter“.
3. Geben Sie die Basis-URL ein.
4. Geben Sie den Schlüssel API ein.
5. Geben Sie den Modellnamen ein.
6. Validieren Sie die Konfiguration.
7. Führen Sie eine kurze Testanalyse durch.

## Häufige Fehler

- `/v1` fehlt, wenn der Anbieter es erwartet.
– Verwendung eines Modellanzeigenamens anstelle der Modellkennung API.
- Einfügen eines Schlüssels für den falschen Anbieter oder Proxy.
- Vergessen, dass die Aufbewahrungs-, Abrechnungs- und Zugriffsregeln des Anbieters vom benutzerdefinierten Endpunktbetreiber gesteuert werden.

Benutzerdefinierte Anbieteranfragen können Eingabeaufforderungen, Transkriptkontext, von Screenshots abgeleiteter Kontext und benutzerdefinierte Fragen umfassen.

## Fragen zu benutzerdefinierten Endpunkten

### Was macht einen Endpunkt OpenAI-compatible aus?

Der Endpunkt sollte API-Anfragen für Chats oder Antworten im OpenAI-Stil unter Verwendung der Basis-URL, des Schlüssels und des Modellnamens akzeptieren, die Sie in ExtraBrain eingeben.

### Was sollte ich testen, nachdem ich einen benutzerdefinierten Endpunkt gespeichert habe?

Führen Sie eine kurze Analyse mit nicht sensiblem Transkript- oder Screenshot-Kontext durch. Bestätigen Sie, dass der Endpunkt eine Antwort zurückgibt und dass der Modellname mit den Erwartungen Ihres Anbieters oder Proxys übereinstimmt.
