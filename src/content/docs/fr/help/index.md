---
title: Centre d'aide
description: Aide ExtraBrain pour les entretiens en direct macOS, les réunions, la transcription, les captures d'écran, les fournisseurs d'IA, la confidentialité, les paramètres et le dépannage.
sidebar:
  label: Aperçu
  order: 1
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
prev: false
next: false
lastUpdated: 2026-04-29
---

ExtraBrain est le premier assistant d'IA en direct de macOS pour les entretiens, les réunions, les cycles de codage, les discussions sur la conception de systèmes, les entretiens comportementaux, le dépannage et les conversations techniques denses. Utilisez ce centre d'aide pour configurer l'application, choisir les fournisseurs, comprendre la confidentialité et récupérer des problèmes courants d'autorisation ou de fournisseur.

![ExtraBrain session en direct étendue avec panneaux de transcription et d'analyse](/assets/screenshots/help/dark/main-analysis-followups.png)

## Points clés à retenir

ExtraBrain est un premier assistant d'entretien d'IA de bureau Mac local et un copilote de réunion avec une application principale gratuite, des contrôles de flux de travail Pro en option, une transcription en direct, des captures d'écran, une analyse soutenue par le fournisseur, une IA locale Gemma 4 sur l'appareil lorsqu'elle est installée et compatible, et un examen post-session.

- Utilisez le centre d'aide pour parcourir 4 zones de configuration : installation, autorisations, transcription et accès au fournisseur d'IA.
- ExtraBrain prend aujourd'hui en charge Mac, y compris les Mac Apple Silicon et Intel.
- L'application prend en charge la transcription locale NVIDIA Parakeet, l'abonnement Deepgram, OpenAI, Anthropic, Claude en option, l'abonnement Codex et les points de terminaison OpenAI-compatible personnalisés.
- La confidentialité dépend du chemin de données sélectionné : la transcription locale Parakeet et la locale Gemma 4 peuvent conserver la transcription et les invites IA sur le Mac, tandis que les fournisseurs de cloud reçoivent le contexte que vous choisissez d'envoyer.

## Commencez ici

- [Qu'est-ce que ExtraBrain ?](/fr/help/getting-started/what-is-extrabrain/) explique l'application, la transcription en direct, les captures d'écran, les profils, les suivis et l'historique des sessions.
- [Configurer ExtraBrain pour la première fois](/fr/help/getting-started/first-run-setup/) passe par l'intégration, de l'accueil à la configuration du fournisseur.
- [Accorder les autorisations macOS] (/help/getting-started/macos-permissions/) explique l'accès au microphone, à l'enregistrement d'écran et à l'audio du système.
- [Choisissez la transcription Parakeet ou Deepgram](/fr/help/providers/transcription-parakeet-vs-deepgram/) compare la transcription locale et cloud.
- [Connecter un fournisseur d'IA] (/help/providers/connect-ai-provider/) couvre OpenAI, Anthropic, les abonnements et les points de terminaison personnalisés.

## Utilisez ExtraBrain en direct

- [Démarrer l'enregistrement et demander une analyse] (/help/using-extrabrain/start-recording-and-analysis/) couvre les principaux contrôles en direct.
- [Utiliser les captures d'écran et le contexte de l'écran](/fr/help/using-extrabrain/screenshots-screen-context/) explique les modes de capture et le contexte de la capture d'écran.
- [Utiliser des questions de suivi](/fr/help/using-extrabrain/follow-up-questions/) explique les suivis suggérés et les questions personnalisées.
- [Analyser les sujets et les questions détectés] (/help/using-extrabrain/detected-topics-questions/) explique le sujet de la transcription et les cartes de questions.

## Confidentialité, paramètres et historique

- [Comment ExtraBrain gère les données](/fr/help/privacy-security/how-extrabrain-handles-data/) donne le flux de données local par rapport au fournisseur le plus clair.
- [Contrôles de confidentialité](/fr/help/privacy-security/privacy-controls/) couvre le masquage de superposition, les clics, la visibilité des applications et le partage d'utilisation.
- [Aperçu des paramètres] (/help/settings/) renvoie à tous les onglets de paramètres publics.
- [Configurer les paramètres audio] (/help/settings/audio-settings/) couvre les commandes du fournisseur de transcription, du microphone, du déclencheur vocal et du nettoyage de la transcription.
- [Utiliser les profils ExtraBrain] (/help/settings/profiles/) explique le comportement des profils automatiques, épinglés, système et personnalisés.
- [Raccourcis clavier](/fr/help/settings/keyboard-shortcuts/) répertorie les raccourcis par défaut et où les modifier.
- [Afficher et supprimer l'historique de session] (/help/sessions-history/view-delete-session-history/) couvre les transcriptions, les analyses, les faits, les captures d'écran et la suppression.
- [Activer ExtraBrain Pro](/fr/help/billing-pro/activate-license/) explique l'achat intégré, l'activation et la désactivation de la licence.
- [Comparez ExtraBrain Free et Pro](/fr/pricing/free-vs-pro/) montre ce que Pro débloque.

## Dépannage

Commencez par [Dépannage] (/help/troubleshooting/) si l'autorisation du microphone, l'enregistrement d'écran, l'audio du système, la validation de la clé API, la validation Deepgram, les captures d'écran, les fenêtres masquées ou la suppression de session ne fonctionnent pas comme prévu.

## Questions courantes

### Est-ce que ExtraBrain envoie tout à un serveur ?

Non. ExtraBrain stocke les paramètres, les clés API, l'historique de session locale et les données de transcription locales Parakeet sur votre Mac. Lorsque vous utilisez un fournisseur cloud LLM, le texte pertinent, le contexte de transcription, le contexte dérivé de la capture d'écran et les invites peuvent être envoyés au fournisseur que vous avez sélectionné. Lorsque vous choisissez Deepgram, l'audio est envoyé à Deepgram pour transcription.

### Est-ce que ExtraBrain prend en charge Windows ou Linux ?

ExtraBrain est macOS-premier aujourd'hui. Windows et Linux sont prévus, et non les objectifs actuels de diffusion publique.

### L'onglet Paramètres à distance est-il public ?

Non. L'onglet Distant est réservé au développement et n'est pas documenté comme une fonctionnalité publique.
