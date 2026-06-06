---
title: Commencer l'enregistrement et exécuter l'analyse
description: Apprenez les commandes en direct ExtraBrain pour l'enregistrement, l'analyse IA, les captures d'écran, le mode compact, le mode étendu et le flux de données du fournisseur.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

La fenêtre principale ExtraBrain est construite autour de l'enregistrement, du contexte de transcription, des captures d'écran et de l'analyse.

![ExtraBrain fenêtre principale inactive avec commandes en direct](/assets/screenshots/help/dark/main-idle-controls.png)

## Contrôles principaux

| Contrôle | Ce qu'il fait |
| --- | --- |
| Commencer l'enregistrement | Démarre une session en direct et commence à capturer les sources audio activées. |
| Arrêter | Termine la session active. |
| Demander | Envoie le contexte actuel au fournisseur d’IA sélectionné pour analyse. |
| Capturer | Ajoute une capture d'écran à la session active. |
| Développer ou réduire | Bascule entre les dispositions de fenêtres compactes et étendues. |

## Flux de travail de base

1. Ouvrez ExtraBrain avant le début de l'appel.
2. Cliquez sur **Démarrer l'enregistrement**.
3. Attendez les entrées de transcription ou les cartes de sujets détectées.
4. Cliquez sur **Capture** si le contexte de l'écran est important.
5. Cliquez sur **Demander** pour demander une analyse.
6. Utilisez les suivis ou saisissez une question personnalisée.

![enregistrement ExtraBrain avec sujet détecté](/assets/screenshots/help/dark/main-recording-topic.png)

## Lorsque les boutons sont désactivés

Les boutons peuvent être désactivés pendant que ExtraBrain démarre, arrête, analyse, valide l'accès du fournisseur ou attend l'autorisation requise et l'état de la session. Si un bouton reste désactivé, vérifiez [Dépannage] (/help/troubleshooting/).

Avant les sessions importantes, examinez les [paramètres audio] (/help/settings/audio-settings/), les [paramètres de capture d'écran] (/help/settings/screenshot-settings/) et les [profils] (/help/settings/profiles/).

## Rappel de confidentialité

Lorsque vous cliquez sur **Demander** avec un fournisseur cloud LLM sélectionné, le texte de transcription pertinent, le contexte dérivé de la capture d'écran, les invites et les questions personnalisées peuvent être envoyés à ce fournisseur.

## Questions d'enregistrement

### Quand dois-je cliquer sur Demander ?

Cliquez sur **Demander** une fois qu'un contexte de transcription utile, un sujet détecté, une question détectée ou une capture d'écran sont disponibles. Vous pouvez également demander avec un minimum de contexte une invite rapide.

### Que se passe-t-il lorsque j'arrête l'enregistrement ?

ExtraBrain met fin à la session active. L'historique des sessions locales peut conserver des transcriptions, des analyses, des captures d'écran, des faits et des entrées, sauf si vous supprimez cette session ultérieurement.
