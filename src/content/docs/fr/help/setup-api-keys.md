---
title: Configurer des fournisseurs d'IA
description: Configurez les fournisseurs ExtraBrain, les clés API, les abonnements, les points de terminaison personnalisés et les choix de transcription pour une analyse en direct.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Utilisez cet aperçu lorsque vous devez choisir le guide du fournisseur qui correspond à votre configuration. ExtraBrain prend en charge les fournisseurs de clés API, les modes de fournisseur d'abonnement et les points de terminaison OpenAI-compatible personnalisés.

![ExtraBrain Sélecteur de fournisseur d'IA](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Points clés à retenir

Un fournisseur d'IA ExtraBrain est le chemin de modèle que l'application utilise lorsqu'elle transforme une transcription, une invite, une capture d'écran ou un contexte de session en analyse en direct.

- ExtraBrain prend en charge Google Gemma 4 IA locale, OpenAI, Anthropic, Claude Subscription, Codex Subscription et les points de terminaison personnalisés OpenAI-compatible.
- Les modes clés API nécessitent les informations d'identification actuelles du fournisseur ; les modes d'abonnement utilisent le chemin d'abonnement connecté pris en charge par l'application.
- La validation du fournisseur doit être testée une fois avant un entretien en direct, une réunion, une conférence ou un appel de recherche.
- La facturation, la rétention, l'accès au modèle et le quota du fournisseur sont contrôlés par le compte fournisseur que vous choisissez.

- [Connecter un fournisseur d'IA](/fr/help/providers/connect-ai-provider/)
- [Connecter l'abonnement OpenAI ou Codex](/fr/help/providers/openai-codex-setup/)
- [Connecter l'abonnement Anthropic ou Claude](/fr/help/providers/anthropic-claude-setup/)
- [Utiliser un point de terminaison OpenAI-compatible personnalisé](/fr/help/providers/custom-openai-compatible-endpoint/)
- [Choisissez la transcription Parakeet ou Deepgram](/fr/help/providers/transcription-parakeet-vs-deepgram/)
- [Comparez les prix des applications et les coûts des fournisseurs] (/pricing/)

## Liste de contrôle de configuration du fournisseur

1. Décidez si vous souhaitez le mode clé API, le mode abonnement ou un point de terminaison personnalisé.
2. Ouvrez **Paramètres -> Fournisseurs LLM**.
3. Saisissez les informations requises sur le fournisseur.
4. Validez ou revérifiez la connexion du fournisseur.
5. Exécutez une analyse de test.
6. Examinez [Comment ExtraBrain gère les données](/fr/help/privacy-security/how-extrabrain-handles-data/) avant d'utiliser un contexte sensible.

## Questions des fournisseurs

### Ai-je besoin d'une clé API pour chaque mode fournisseur ?

Non. Les modes de touches OpenAI et Anthropic API nécessitent des clés. Les modes d'abonnement Claude et Codex utilisent l'accès par abonnement et ne nécessitent pas de clé API dans ExtraBrain.

### Que dois-je vérifier si la validation du fournisseur échoue ?

Confirmez la clé, l'accès au modèle, l'URL de base, l'état de l'abonnement et l'accès au réseau. Les points de terminaison personnalisés ont également besoin du nom de modèle exact attendu par le point de terminaison.
