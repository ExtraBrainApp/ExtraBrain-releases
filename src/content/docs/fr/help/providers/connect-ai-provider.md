---
title: Connectez un fournisseur d'IA
description: Configurez l'abonnement OpenAI, Anthropic, Claude, l'abonnement Codex ou un point de terminaison OpenAI-compatible personnalisé dans ExtraBrain.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain utilise le fournisseur d'IA que vous sélectionnez pour l'analyse en direct. La configuration du fournisseur contrôle où les invites, le contexte de transcription et le contexte dérivé de la capture d’écran peuvent être envoyés.

![Sélecteur de fournisseur d'IA lors de l'intégration de ExtraBrain](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Modes des fournisseurs publics

- Touche OpenAI API.
- Touche Anthropic API.
- Abonnement Codex utilisant ChatGPT Plus ou Pro directement, sans clé API.
- Abonnement Claude utilisant Claude Pro ou Max directement, sans clé API.
- Point de terminaison OpenAI-compatible personnalisé avec URL de base, clé API et nom du modèle.

## Liste de contrôle de configuration

1. Ouvrez l'intégration ou **Paramètres -> Fournisseurs LLM**.
2. Choisissez la famille de prestataires.
3. Choisissez la clé API ou le mode d'abonnement.
4. Saisissez les informations d'identification si nécessaire.
5. Validez ou revérifiez la connexion.
6. Exécutez une courte analyse de test.

![Onglet Paramètres des fournisseurs LLM](/assets/screenshots/help/dark/settings-llm-providers.png)

## Flux de données

Lorsque vous demandez à ExtraBrain une analyse auprès d'un fournisseur de cloud, des invites pertinentes, un contexte de transcription, un contexte dérivé de capture d'écran et des questions personnalisées peuvent être envoyés à ce fournisseur. La facturation, la rétention, les quotas et les contrôles de compte du fournisseur sont régis par le fournisseur que vous choisissez.

## En rapport

- [Connecter l'abonnement OpenAI ou Codex](/fr/help/providers/openai-codex-setup/)
- [Connecter l'abonnement Anthropic ou Claude](/fr/help/providers/anthropic-claude-setup/)
- [Utiliser un point de terminaison OpenAI-compatible personnalisé](/fr/help/providers/custom-openai-compatible-endpoint/)
- [Revoir la tarification ExtraBrain et la séparation des coûts du fournisseur](/fr/pricing/)

## Questions sur les fournisseurs d'IA

### Quel fournisseur d'IA dois-je choisir en premier ?

Choisissez le prestataire en qui vous avez déjà confiance et que vous pouvez valider avant une vraie séance. Pour la plupart des utilisateurs, cela signifie commencer avec un compte OpenAI, Anthropic, Claude ou Codex existant.

### Puis-je garder plusieurs chemins de fournisseur prêts ?

Oui. Conserver un chemin de fournisseur de sauvegarde est utile avant les entretiens ou les réunions où le quota, l'accès au réseau ou l'état du compte pourraient changer.
