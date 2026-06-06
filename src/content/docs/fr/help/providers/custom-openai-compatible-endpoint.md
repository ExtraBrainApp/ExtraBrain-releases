---
title: Utiliser un point de terminaison personnalisé compatible OpenAI
description: Configurez un point de terminaison OpenAI-compatible personnalisé dans ExtraBrain avec l'URL de base, la clé API, le nom du modèle, la validation et le dépannage.
sidebar:
  order: 5
lastUpdated: 2026-04-29
---

Utilisez un point de terminaison OpenAI-compatible personnalisé lorsque votre fournisseur ou proxy expose un API de style OpenAI.

![ExtraBrain paramètres du fournisseur OpenAI-compatible personnalisés avec les champs URL de base et nom du modèle](/assets/screenshots/help/dark/settings-custom-provider.png)

## Champs obligatoires

| Champ | Que participer |
| --- | --- |
| URL de base | URL de base du fournisseur ou du proxy API. |
| Touche API | Clé requise par ce point de terminaison. |
| Nom du modèle | L’identifiant de modèle exact attendu par le point de terminaison. |

## Étapes de configuration

1. Ouvrez l'intégration ou **Paramètres -> Fournisseurs LLM**.
2. Choisissez l'option de fournisseur personnalisé.
3. Saisissez l'URL de base.
4. Entrez la clé API.
5. Entrez le nom du modèle.
6. Validez la configuration.
7. Exécutez une courte analyse de test.

## Erreurs courantes

- Manquant `/v1` lorsque le fournisseur l'attend.
- Utilisation d'un nom d'affichage de modèle au lieu de l'identifiant de modèle API.
- Coller une clé pour le mauvais fournisseur ou proxy.
- Oublier que les règles de rétention, de facturation et d'accès du fournisseur sont contrôlées par l'opérateur du point de terminaison personnalisé.

Les demandes personnalisées du fournisseur peuvent inclure des invites, un contexte de transcription, un contexte dérivé d'une capture d'écran et des questions personnalisées.

## Questions sur les points de terminaison personnalisés

### Qu'est-ce qui fait qu'un point de terminaison OpenAI-compatible ?

Le point de terminaison doit accepter les demandes de discussion ou de réponses API de style OpenAI en utilisant l'URL de base, la clé et le nom de modèle que vous entrez dans ExtraBrain.

### Que dois-je tester après avoir enregistré un point de terminaison personnalisé ?

Exécutez une courte analyse avec un contexte de transcription ou de capture d’écran non sensible. Confirmez que le point de terminaison renvoie une réponse et que le nom du modèle correspond à ce qu'attend votre fournisseur ou proxy.
