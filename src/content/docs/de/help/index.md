---
title: Hilfecenter
description: ExtraBrain Hilfe für macOS Live-Interviews, Meetings, Transkription, Screenshots, KI-Anbieter, Datenschutz, Einstellungen und Fehlerbehebung.
sidebar:
  label: Überblick
  order: 1
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
prev: false
next: false
lastUpdated: 2026-04-29
---

ExtraBrain ist ein macOS-erster Live-KI-Assistent für Interviews, Meetings, Programmierrunden, Systemdesign-Diskussionen, Verhaltensinterviews, Fehlerbehebung und intensive technische Gespräche. Verwenden Sie dieses Hilfecenter, um die App einzurichten, Anbieter auszuwählen, den Datenschutz zu verstehen und häufige Berechtigungs- oder Anbieterprobleme zu beheben.

![ExtraBrain erweiterte Live-Sitzung mit Transkript- und Analysepanels](/assets/screenshots/help/dark/main-analysis-followups.png)

## Wichtige Erkenntnisse

ExtraBrain ist ein lokaler Mac Desktop-KI-Interviewassistent und Meeting-Copilot mit einer kostenlosen Kern-App, optionalen Pro-Workflow-Kontrollen, Live-Transkription, Screenshots, vom Anbieter unterstützter Analyse, lokaler Gemma 4 KI auf dem Gerät, sofern installiert und kompatibel, und Überprüfung nach der Sitzung.

- Verwenden Sie das Hilfecenter, um durch vier Einrichtungsbereiche zu navigieren: Installation, Berechtigungen, Transkription und Zugriff auf KI-Anbieter.
- ExtraBrain unterstützt heute Mac, einschließlich Apple Silicon und Intel Macs.
- Die App unterstützt lokale NVIDIA Parakeet-Transkription, optionale Deepgram-, OpenAI-, Anthropic-, Claude-Abonnements, Codex-Abonnements und benutzerdefinierte OpenAI-compatible-Endpunkte.
- Der Datenschutz hängt vom ausgewählten Datenpfad ab: lokale Parakeet-Transkription und lokale Gemma 4 können Transkription und KI-Eingabeaufforderungen auf dem Mac behalten, während Cloud-Anbieter den Kontext erhalten, den Sie senden möchten.

## Hier beginnen

- [Was ist ExtraBrain?](/de/help/getting-started/what-is-extrabrain/) erklärt die App, Live-Transkription, Screenshots, Profile, Follow-ups und Sitzungsverlauf.
- [Setup ExtraBrain for the first time](/de/help/getting-started/first-run-setup/) durchläuft das Onboarding von der Begrüßung bis zur Anbietereinrichtung.
– [Gewähren Sie macOS-Berechtigungen] (/help/getting-started/macos-permissions/) erklärt Mikrofon, Bildschirmaufzeichnung und System-Audiozugriff.
- [Wählen Sie die Transkription Parakeet oder Deepgram](/de/help/providers/transcription-parakeet-vs-deepgram/) vergleicht lokale und Cloud-Transkription.
– [Einen KI-Anbieter verbinden](/de/help/providers/connect-ai-provider/) deckt OpenAI, Anthropic, Abonnements und benutzerdefinierte Endpunkte ab.

## Verwenden Sie ExtraBrain Live

- [Aufzeichnung starten und um Analyse bitten](/de/help/using-extrabrain/start-recording-and-analysis/) behandelt die wichtigsten Live-Steuerungen.
- [Screenshots und Bildschirmkontext verwenden] (/help/using-extrabrain/screenshots-screen-context/) erklärt Aufnahmemodi und Screenshot-Kontext.
- [Folgefragen verwenden](/de/help/using-extrabrain/follow-up-questions/) erläutert vorgeschlagene Folgefragen und benutzerdefinierte Fragen.
- [Erkannte Themen und Fragen analysieren] (/help/using-extrabrain/detected-topics-questions/) erklärt Transkript-Themen- und Fragenkarten.

## Datenschutz, Einstellungen und Verlauf

- [Wie ExtraBrain mit Daten umgeht](/de/help/privacy-security/how-extrabrain-handles-data/) bietet den klarsten lokalen Datenfluss im Vergleich zum Anbieter.
– [Datenschutzkontrollen](/de/help/privacy-security/privacy-controls/) umfasst das Ausblenden von Overlays, Click-through, App-Sichtbarkeit und Nutzungsfreigabe.
- [Einstellungsübersicht](/de/help/settings/) verlinkt zu allen öffentlichen Einstellungsregisterkarten.
– [Audioeinstellungen konfigurieren] (/help/settings/audio-settings/) umfasst Transkriptionsanbieter, Mikrofon, Sprachauslöser und Transkriptbereinigungssteuerungen.
– [ExtraBrain-Profile verwenden] (/help/settings/profiles/) erklärt das automatische, angeheftete, System- und benutzerdefinierte Profilverhalten.
- [Tastaturkürzel](/de/help/settings/keyboard-shortcuts/) listet die Standardkürzel und den Ort auf, an dem sie bearbeitet werden können.
- [Sitzungsverlauf anzeigen und löschen](/de/help/sessions-history/view-delete-session-history/) umfasst Transkripte, Analysen, Fakten, Screenshots und das Löschen.
- [Activate ExtraBrain Pro](/de/help/billing-pro/activate-license/) erklärt den In-App-Kauf, die Lizenzaktivierung und -deaktivierung.
- [Vergleiche ExtraBrain Free und Pro](/de/pricing/free-vs-pro/) zeigt, was Pro freischaltet.

## Fehlerbehebung

Beginnen Sie mit [Fehlerbehebung](/de/help/troubleshooting/), wenn Mikrofonberechtigung, Bildschirmaufzeichnung, Systemaudio, API-Schlüsselvalidierung, Deepgram-Validierung, Screenshots, ausgeblendete Fenster oder Sitzungslöschung nicht wie erwartet funktionieren.

## Häufige Fragen

### Sendet ExtraBrain alles an einen Server?

Nein. ExtraBrain speichert Einstellungen, API-Schlüssel, den lokalen Sitzungsverlauf und lokale Parakeet-Transkriptionsdaten auf Ihrem Mac. Wenn Sie einen Cloud-LLM-Anbieter verwenden, werden möglicherweise relevanter Text, Transkriptkontext, von Screenshots abgeleiteter Kontext und Eingabeaufforderungen an den von Ihnen ausgewählten Anbieter gesendet. Wenn Sie Deepgram wählen, wird das Audio zur Transkription an Deepgram gesendet.

### Unterstützt ExtraBrain Windows oder Linux?

ExtraBrain ist heute macOS-first. Windows und Linux sind geplant, keine aktuellen Ziele für die öffentliche Veröffentlichung.

### Ist die Registerkarte „Remote-Einstellungen“ öffentlich?

Nein. Die Registerkarte „Remote“ steht nur der Entwicklung zur Verfügung und ist nicht als öffentliche Funktion dokumentiert.
