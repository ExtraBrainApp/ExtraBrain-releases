---
title: Connectez l'abonnement Anthropic ou Claude
description: Configurez le mode clé Anthropic API ou le mode d'abonnement Claude dans ExtraBrain, validez l'accès, choisissez les modèles et résolvez les problèmes de connexion.
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain prend en charge le mode clé Anthropic API et le mode d'abonnement Claude.

## Anthropic API Mode clé

Utilisez ce mode lorsque vous souhaitez que ExtraBrain appelle Anthropic via une touche API que vous gérez.

1. Ouvrez **Paramètres -> Fournisseurs LLM**.
2. Sélectionnez **Anthropic**.
3. Collez votre clé Anthropic API.
4. Choisissez le modèle.
5. Validez la clé.
6. Exécutez une courte analyse de test.

![Onglet Paramètres des fournisseurs LLM avec Anthropic sélectionné](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude Mode d'abonnement

Utilisez l'abonnement Claude lorsque vous souhaitez que ExtraBrain utilise directement votre Claude Pro ou Max. Ce mode ne nécessite pas de clé API dans ExtraBrain.

1. Ouvrez **Paramètres -> Fournisseurs LLM**.
2. Choisissez **Claude Abonnement**.
3. Revérifiez l'état de connexion.
4. Choisissez le modèle disponible.
5. Exécutez une analyse de test.

## Dépannage

Si la validation échoue, confirmez que la clé API appartient au bon compte Anthropic, qu'elle a accès au modèle et qu'elle est collée sans espaces supplémentaires. Pour le mode abonnement, confirmez que votre abonnement Claude est actif et connecté là où ExtraBrain l'attend.

## Questions Anthropic et Claude

### Ai-je besoin d'une clé Anthropic API pour le mode d'abonnement Claude ?

Le mode d'abonnement Claude est destiné à l'accès à l'abonnement Claude Pro ou Max et ne nécessite pas de clé Anthropic API à l'intérieur de ExtraBrain.

### Quelles données peuvent être envoyées à Anthropic ou Claude ?

Lorsqu'ils sont sélectionnés pour l'analyse, les invites pertinentes, le contexte de transcription, le contexte dérivé de capture d'écran et les questions personnalisées peuvent être envoyés à Anthropic ou Claude selon le mode de ce fournisseur.
