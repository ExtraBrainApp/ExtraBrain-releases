---
title: Comment ExtraBrain gère les données
description: Comprenez ce que ExtraBrain stocke localement, ce qui peut être envoyé aux fournisseurs d'IA sélectionnés et quand Deepgram reçoit l'audio.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain est une application de bureau locale, mais votre flux de données exact dépend des fournisseurs et des fonctionnalités que vous choisissez.

![Paramètres de confidentialité dans ExtraBrain](/assets/screenshots/help/dark/settings-privacy.png)

## Formulation précise de la confidentialité

ExtraBrain stocke les paramètres, les clés API, l'historique de session locale et les données de transcription locales Parakeet sur votre Mac. Lorsque vous utilisez un fournisseur cloud LLM, le texte pertinent, le contexte de transcription, le contexte dérivé de la capture d'écran et les invites peuvent être envoyés au fournisseur que vous avez sélectionné. Lorsque vous choisissez Deepgram, l'audio est envoyé à Deepgram pour transcription. Le partage d'utilisation anonyme peut être désactivé.

## Ce qui reste sur votre Mac

- paramètres de l'application
- configuration du fournisseur et clés API stockées par l'application
- historique des sessions locales
- transcriptions et captures d'écran enregistrées dans l'historique de la session locale
- données de transcription locales Parakeet

## Qu'est-ce qui peut laisser votre Mac

| Choix | Ce qui peut être envoyé |
| --- | --- |
| Abonnement OpenAI, Anthropic, Claude, Codex ou fournisseur LLM personnalisé | Invites, contexte de transcription, contexte dérivé de capture d'écran, questions personnalisées et autre contexte d'analyse sélectionné. |
| Deepgram transcription | Audio envoyé à Deepgram pour transcription. |
| Partage d'utilisation anonyme | Données d'utilisation lorsqu'elles sont activées. |

## Contrôle du fournisseur

La rétention, la facturation, le quota, l'accès au modèle et les politiques de compte des fournisseurs externes sont contrôlés par le fournisseur que vous choisissez. Vérifiez les paramètres de ce fournisseur si vous gérez des documents sensibles concernant des entretiens, des lieux de travail, des clients ou des recherches.

## En rapport

- [Contrôles de confidentialité](/fr/help/privacy-security/privacy-controls/)
- [Choisissez la transcription Parakeet ou Deepgram](/fr/help/providers/transcription-parakeet-vs-deepgram/)
- [Connecter un fournisseur d'IA](/fr/help/providers/connect-ai-provider/)

## Questions sur la gestion des données

### Quelle est la configuration de transcription la plus privée ?

Utilisez Local Parakeet lorsque la transcription audio doit rester sur le Mac. Évitez Deepgram pour les sessions où l'audio ne doit pas être envoyé à un fournisseur de transcription cloud.

### Qui contrôle la rétention des fournisseurs de cloud ?

Le fournisseur que vous choisissez contrôle ses politiques de rétention, de facturation, de quota et de compte. Vérifiez OpenAI, Anthropic, Claude, Codex, Deepgram ou les paramètres de point de terminaison personnalisés avant d'envoyer un contexte sensible.
