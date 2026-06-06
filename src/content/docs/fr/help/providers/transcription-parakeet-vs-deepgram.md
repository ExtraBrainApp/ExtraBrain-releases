---
title: Choisissez un fournisseur de transcription
description: Comparez la transcription locale Parakeet et Deepgram dans ExtraBrain en fonction de la confidentialité, du temps de configuration, des exigences de clé API et du flux de données.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain transforme la parole en direct en texte avec NVIDIA Parakeet local ou Deepgram.

![Transcription locale sélectionnée lors de l'intégration](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## Comparaison rapide

| Options | Idéal pour | Flux de données | Configuration |
| --- | --- | --- | --- |
| Locale Parakeet | La plupart des utilisateurs, sessions sensibles à la confidentialité, configuration la plus rapide | La transcription s'exécute sur votre Mac | Pas de clé API |
| Deepgram | Utilisateurs qui s'appuient déjà sur la transcription cloud gérée | L'audio est envoyé à Deepgram | Clé Deepgram API requise |

##Local Parakeet

Choisissez Local Parakeet lorsque vous souhaitez la configuration la plus simple et préférez que la transcription ait lieu sur le Mac. Il nécessite un stockage de modèle local et utilise le processeur local pendant l'exécution du modèle.

## Deepgram

Choisissez Deepgram lorsque la transcription cloud correspond à votre flux de travail ou que votre organisation utilise déjà Deepgram. Deepgram nécessite une clé API valide.

![Deepgram champ clé lors de l'intégration](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

Une fois la validation réussie, ExtraBrain peut continuer l'intégration avec Deepgram sélectionné.

![Deepgram réussite de la validation lors de l'intégration](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## Remarque sur la confidentialité

Local Parakeet maintient la transcription locale. Deepgram envoie l'audio à Deepgram pour transcription. L'analyse de l'IA est un choix distinct et peut envoyer un texte de transcription ou un contexte dérivé d'une capture d'écran au fournisseur LLM que vous avez sélectionné.

## En rapport

- [Configurer les paramètres audio ExtraBrain] (/help/settings/audio-settings/)
- [Nettoyer les transcriptions et les mots de remplissage](/fr/help/settings/transcript-cleanup-filler-words/)
- [Utiliser des phrases de déclenchement vocal](/fr/help/settings/voice-trigger/)
- [Comment ExtraBrain gère les données](/fr/help/privacy-security/how-extrabrain-handles-data/)

## Questions de transcription

### Quel fournisseur de transcription est le meilleur en matière de confidentialité ?

Le Parakeet local est le meilleur paramètre par défaut lorsque l'audio doit rester sur votre Mac. Il ne nécessite pas de clé Deepgram API.

### Quand dois-je choisir Deepgram ?

Choisissez Deepgram lorsque la transcription cloud correspond à la session, que votre organisation utilise déjà Deepgram ou que vous préférez la transcription gérée et acceptez que l'audio soit envoyé à Deepgram.
