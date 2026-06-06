---
title: Accorder des autorisations audio et d'écran à macOS
description: Découvrez pourquoi ExtraBrain a besoin des autorisations de microphone, d'enregistrement d'écran et d'audio système de macOS et comment corriger l'accès bloqué.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain a besoin des autorisations macOS avant de pouvoir utiliser l'audio en direct et le contexte d'écran. Accordez-les lors de l'intégration ou à partir des paramètres système macOS.

![étape d'autorisations ExtraBrain lors de l'intégration](/assets/screenshots/help/dark/onboarding-permissions.png)

## Autorisations ExtraBrain Utilisations

| Autorisation | Pourquoi ExtraBrain l'utilise |
| --- | --- |
| Micro | Transcrit votre audio parlé pendant les sessions en direct. |
| Enregistrement d'écran | Capture les captures d'écran et le contexte d'écran que vous demandez à ExtraBrain d'analyser. |
| Audio système | Capture l'audio d'une réunion, d'un appel ou d'une vidéo lorsque la session a besoin du son du système. |

## Ouvrez les paramètres macOS

1. Ouvrez **Paramètres système**.
2. Accédez à **Confidentialité et sécurité**.
3. Vérifiez les invites **Microphone**, **Enregistrement d'écran** et audio du système si macOS les affiche.
4. Activez ExtraBrain.
5. Redémarrez ExtraBrain si macOS le demande ou si l'état d'autorisation n'est pas mis à jour immédiatement.

## Si une autorisation semble toujours bloquée

- Quittez et rouvrez ExtraBrain.
- Activez et désactivez l'autorisation dans les paramètres système.
- Redémarrez le Mac si l'enregistrement d'écran reste bloqué.
- Rouvrez l'intégration ou les paramètres après le redémarrage.

Les avertissements d'autorisation tels que « Micro arrêté », « Audio système arrêté » ou « Audio arrêté » signifient que ExtraBrain a perdu l'accès à une partie du pipeline de capture et a besoin d'une autorisation ou d'une récupération de périphérique.

## Questions d'autorisation

### Pourquoi ExtraBrain a-t-il besoin d'une autorisation d'enregistrement d'écran ?

L'enregistrement d'écran permet à ExtraBrain de capturer des captures d'écran et le contexte d'écran que vous utilisez explicitement pour l'analyse. Sans cela, les flux de travail de capture d’écran et de contexte d’écran peuvent échouer.

### Pourquoi ExtraBrain a-t-il besoin d'une autorisation audio système ?

L'audio du système aide ExtraBrain à capturer le contexte d'une réunion, d'un appel, d'une vidéo ou d'un audio partagé lorsqu'il est pris en charge. Sans cela, vous ne verrez que la transcription du microphone.
