---
title: Configurer les paramètres audio ExtraBrain
description: Définissez le fournisseur de transcription, la clé Deepgram API, le périphérique de microphone, le nettoyage de la transcription, le déclencheur vocal et l'autorisation audio du système dans ExtraBrain.
sidebar:
  label: Paramètres audio
  order: 5
lastUpdated: 2026-04-30
---

Utilisez **Paramètres -> Audio** pour choisir le comportement de transcription et l'entrée du microphone.

![Paramètres audio ExtraBrain avec fournisseur de transcription et commandes du microphone](/assets/screenshots/help/dark/settings-audio.png)

## Commandes audio

| Contrôle | Ce que ça change |
| --- | --- |
| Fournisseur de synthèse vocale | Transcription cloud locale Parakeet ou Deepgram. |
| Touche Deepgram API | Obligatoire uniquement lorsque Deepgram est sélectionné. |
| Source audio | Entrée microphone préférée. |
| Déclencheur vocal | Contrôle des phrases parlées pour démarrer l’analyse pendant une session active. |
| Nettoyage de la transcription | Suppression des mots de remplissage avant les fiches de transcription et l'analyse. |
| Autorisation audio du système | Flux d'autorisations macOS pour capturer l'audio de l'application/system lorsque cela est nécessaire. |

## Remarques

- Les modifications du périphérique audio s'appliquent aux nouvelles sessions.
- Local Parakeet conserve la transcription locale.
- Deepgram envoie l'audio à Deepgram pour transcription.
- ExtraBrain peut avoir besoin des autorisations audio du microphone et du système macOS avant d'enregistrer des travaux.

## En rapport

- [Choisissez la transcription Parakeet ou Deepgram](/fr/help/providers/transcription-parakeet-vs-deepgram/)
- [Accorder les autorisations macOS](/fr/help/getting-started/macos-permissions/)
- [Nettoyer les transcriptions et les mots de remplissage](/fr/help/settings/transcript-cleanup-filler-words/)
- [Utiliser des phrases de déclenchement vocal](/fr/help/settings/voice-trigger/)

## Questions courantes

### Pourquoi ExtraBrain indique-t-il qu'aucun appareil n'a été trouvé ?

macOS n'a peut-être pas encore accordé l'autorisation au microphone ou l'entrée sélectionnée peut être indisponible. Accordez l'autorisation, reconnectez le microphone, puis démarrez une nouvelle session.

### Le changement de fournisseur de transcription affecte-t-il la session en cours ?

Les modifications de fournisseur et d’appareil sont plus sûres lorsqu’elles sont appliquées avant le démarrage d’une session. Arrêtez l'enregistrement et démarrez une nouvelle session après des changements audio majeurs.

