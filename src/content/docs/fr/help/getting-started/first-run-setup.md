---
title: Configurer ExtraBrain pour la première fois
description: Terminez l'intégration de ExtraBrain sur macOS en accordant des autorisations, en choisissant la transcription et en connectant un fournisseur d'IA.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

La configuration de première exécution obtient ExtraBrain du lancement à une session en direct utilisable. Le flux d'intégration couvre l'accueil, les autorisations macOS, le fournisseur de transcription, le fournisseur d'IA et la fin.

![ExtraBrain écran d'accueil d'intégration](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. Commencez l'intégration

Ouvrez ExtraBrain et continuez à partir de l'écran d'accueil. Gardez l'application ouverte pendant que vous terminez les autorisations et la configuration du fournisseur.

## 2. Accorder les autorisations macOS

ExtraBrain a besoin d'une autorisation pour entendre et voir le contexte que vous choisissez d'utiliser :

- Microphone pour votre audio parlé.
- Enregistrement d'écran pour les captures d'écran et le contexte de l'écran.
- Audio système pour les appels, les réunions, les vidéos ou la transcription audio partagée lorsqu'elle est prise en charge.

Voir [Accorder les autorisations macOS](/fr/help/getting-started/macos-permissions/) pour connaître les étapes de récupération si macOS conserve une autorisation dans un état en attente ou refusé.

## 3. Choisissez Transcription

Choisissez un mode de transcription :

- Local Parakeet s'exécute sur votre Mac et ne nécessite pas de clé API.
- Deepgram utilise la transcription cloud et nécessite une clé Deepgram API.

![Sélection du fournisseur de transcription lors de l'intégration](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4. Connectez l'IA

Choisissez la famille de fournisseurs d'IA et la méthode de connexion que ExtraBrain doit utiliser pour l'analyse en direct. Les modes de fournisseur public incluent l'abonnement OpenAI, Anthropic, Claude, l'abonnement Codex et les points de terminaison OpenAI-compatible personnalisés.

![Sélecteur de fournisseur d'IA lors de l'intégration](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

L'option de modèle local affichée lors de l'intégration est désactivée et ne doit pas être traitée comme une configuration publique disponible.

## 5. Exécutez un court test

Avant un véritable entretien ou réunion :

- démarrer l'enregistrement
- confirmer que les entrées de transcription apparaissent
- capturez une capture d'écran si le contexte de l'écran est important
- exécuter une analyse
- confirmer que la réponse vient du prestataire que vous attendiez

## En rapport

- [Choisissez la transcription Parakeet ou Deepgram](/fr/help/providers/transcription-parakeet-vs-deepgram/)
- [Connecter un fournisseur d'IA](/fr/help/providers/connect-ai-provider/)
- [Raccourcis clavier](/fr/help/settings/keyboard-shortcuts/)

## Questions de configuration

### Puis-je changer de fournisseur après la première configuration ?

Oui. Vous pouvez modifier la transcription dans **Paramètres -> Audio** et changer de fournisseur d'IA dans **Paramètres -> Fournisseurs LLM**. Exécutez un court test après avoir modifié l’un ou l’autre paramètre.

### Que dois-je faire si l'intégration ne peut pas continuer ?

Vérifiez les autorisations macOS, la validation du fournisseur et les champs obligatoires. Deepgram nécessite une clé valide, tandis que Local Parakeet peut continuer sans clé API.
