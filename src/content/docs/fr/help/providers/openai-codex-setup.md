---
title: Connectez l'abonnement OpenAI ou Codex
description: Configurez le mode clé OpenAI API ou le mode d'abonnement Codex dans ExtraBrain, validez l'accès, choisissez les modèles et dépannez la configuration.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain prend en charge le mode clé OpenAI API et le mode d'abonnement Codex.

## OpenAI API Mode clé

Utilisez ce mode lorsque vous souhaitez que ExtraBrain appelle OpenAI via une touche API que vous gérez.

1. Ouvrez **Paramètres -> Fournisseurs LLM**.
2. Sélectionnez **OpenAI**.
3. Collez votre clé API.
4. Choisissez le modèle et l'effort de raisonnement lorsqu'ils sont disponibles.
5. Validez la clé.
6. Exécutez une brève analyse pour confirmer que les réponses proviennent de OpenAI.

![Formulaire du fournisseur OpenAI lors de l'intégration](/assets/screenshots/help/dark/onboarding-openai-provider-form.png)

## Codex Mode d'abonnement

Utilisez l'abonnement Codex lorsque vous souhaitez que ExtraBrain utilise directement votre abonnement ChatGPT Plus ou Pro. Ce mode ne nécessite pas de clé API dans ExtraBrain.

1. Ouvrez **Paramètres -> Fournisseurs LLM**.
2. Choisissez **Codex Abonnement**.
3. Revérifiez l'état de connexion.
4. Choisissez le modèle disponible.
5. Exécutez une analyse de test.

## Dépannage

Si la validation échoue, vérifiez que la clé est à jour, a accès au modèle que vous avez sélectionné et n'est pas bloquée par un proxy ou une stratégie d'organisation. Pour le mode abonnement, vérifiez que l’environnement de bureau peut accéder aux outils du fournisseur connecté.

## Questions OpenAI et Codex

### Ai-je besoin d'une clé OpenAI API pour le mode d'abonnement Codex ?

Non. Le mode d'abonnement Codex utilise directement l'accès à l'abonnement ChatGPT Plus ou Pro et ne nécessite pas de clé OpenAI API dans ExtraBrain.

### Que peut envoyer ExtraBrain à OpenAI ou Codex ?

Lorsqu'il est sélectionné pour l'analyse, ExtraBrain peut envoyer des invites, un contexte de transcription, un contexte dérivé de capture d'écran et des questions personnalisées nécessaires à la réponse.
