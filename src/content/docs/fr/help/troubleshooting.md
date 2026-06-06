---
title: Dépannage
description: Correction des problèmes de microphone ExtraBrain, d'enregistrement d'écran, d'audio système, de touche API, Deepgram, de capture d'écran, de fenêtre cachée et d'historique de session.
sidebar:
  order: 6
lastUpdated: 2026-04-29
---

Utilisez cette page lorsque ExtraBrain ne capture pas l'audio, ne peut pas valider un fournisseur, manque des captures d'écran ou est difficile à récupérer pendant une session en direct.

![Étape d'autorisation ExtraBrain pour dépanner l'accès au microphone, à l'écran et à l'audio du système](/assets/screenshots/help/dark/onboarding-permissions.png)

## Points clés à retenir

Le dépannage ExtraBrain est le chemin de récupération pour les 6 bloqueurs les plus courants : autorisation du microphone, autorisation d'enregistrement d'écran, audio du système, validation du fournisseur, validation Deepgram et visibilité de la fenêtre.

- La plupart des problèmes de capture commencent dans macOS Privacy & Security, puis nécessitent la fermeture et la réouverture de ExtraBrain.
- Les échecs du fournisseur impliquent généralement le modèle sélectionné, la clé API, l'accès à l'abonnement, l'URL de base, le quota ou l'accès au réseau.
- L'analyse de capture d'écran nécessite une session active, une autorisation d'enregistrement d'écran et le mode de capture attendu.
- Les sessions actives ne peuvent pas être supprimées jusqu'à la fin de l'enregistrement.

## Autorisation du microphone requise

Si la capture du microphone ne démarre pas :

1. Ouvrez **Paramètres système -> Confidentialité et sécurité -> Microphone**.
2. Activez ExtraBrain.
3. Quittez et rouvrez ExtraBrain si macOS le demande.
4. Démarrez une courte session de test.

Voir [Accorder les autorisations macOS](/fr/help/getting-started/macos-permissions/).

## L'enregistrement d'écran ou l'audio du système ne fonctionne pas

L'enregistrement d'écran contrôle les captures d'écran et le contexte de l'écran. System Audio contrôle les réunions, les appels, la vidéo ou la transcription audio partagée lorsqu'elle est prise en charge.

Recherchez les puces d'avertissement telles que « Micro arrêté », « Audio système arrêté » ou « Audio arrêté ». Ensuite, rouvrez les paramètres de confidentialité et de sécurité de macOS, accordez l'accès et redémarrez ExtraBrain si nécessaire.

## API Échec de la validation de la clé

Pour OpenAI, Anthropic ou un point de terminaison personnalisé :

- confirmer que la clé est actuelle
- supprimer les espaces supplémentaires
- confirmer que le modèle sélectionné est disponible pour le compte
- confirmer qu'un point de terminaison personnalisé a une URL de base et un nom de modèle
- vérifier les restrictions de proxy ou d'organisation

Validez ensuite à nouveau dans **Paramètres -> Fournisseurs LLM**.

## Deepgram Échec de la validation

Deepgram nécessite une clé Deepgram API valide. Si la validation échoue, collez une nouvelle clé, réessayez la validation ou revenez au local Parakeet depuis l'intégration ou **Paramètres -> Audio**.

## Les captures d'écran n'apparaissent pas dans l'analyse

Vérifiez que :

- une session est active
- L'autorisation d'enregistrement d'écran est accordée
- le mode de capture dans **Paramètres -> Capture d'écran** correspond à ce que vous attendez
- l'entrée de capture d'écran apparaît dans le panneau de transcription

Les captures d'écran sont des artefacts de session locale. Le contexte dérivé d’une capture d’écran peut être envoyé lorsque vous demandez une analyse à un fournisseur cloud LLM.

## La fenêtre principale est masquée ou difficile à cliquer

Si la superposition est masquée ou si le clic rend l'interaction difficile :

1. Utilisez le raccourci bascule de la fenêtre.
2. Désactivez le clic dans **Paramètres -> Confidentialité**.
3. Réactivez la visibilité du Dock ou de la barre de menus si vous avez besoin d'un chemin de récupération visible.

## La suppression de l'historique de session est désactivée

Les sessions actives ne peuvent pas être supprimées. Arrêtez d'abord l'enregistrement, puis revenez à **Paramètres -> Sessions** et supprimez la session.

## Guides connexes

- [Configurer ExtraBrain pour la première fois](/fr/help/getting-started/first-run-setup/)
- [Connecter un fournisseur d'IA](/fr/help/providers/connect-ai-provider/)
- [Choisissez la transcription Parakeet ou Deepgram](/fr/help/providers/transcription-parakeet-vs-deepgram/)
- [Contrôles de confidentialité](/fr/help/privacy-security/privacy-controls/)

## Questions de dépannage

### Que dois-je vérifier en premier si ExtraBrain n'enregistre pas ?

Vérifiez l'autorisation du microphone, l'autorisation audio du système, le périphérique audio sélectionné et si une session est déjà en cours de démarrage ou d'arrêt.

### Que dois-je vérifier en premier si l'analyse échoue ?

Vérifiez le fournisseur d'IA sélectionné, la clé API ou l'état de l'abonnement, les champs de point de terminaison personnalisés et si la session en cours a un contexte de transcription ou de capture d'écran à analyser.
