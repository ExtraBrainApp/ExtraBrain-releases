---
title: Utiliser des phrases de déclenchement vocal dans ExtraBrain
description: Configurez les phrases de déclenchement vocal ExtraBrain, lors de l'écoute, la gestion des phrases et la gestion des transcriptions.
sidebar:
  label: Déclencheur vocal
  order: 7
lastUpdated: 2026-04-30
---

Voice Trigger permet à ExtraBrain de démarrer l'analyse lorsqu'il entend une courte phrase configurée au cours d'une session active. Trouvez-le dans **Paramètres -> Audio**.

![Paramètres audio ExtraBrain axés sur les commandes de déclenchement vocal](/assets/screenshots/help/dark/settings-voice-trigger.png)

## Comment ça marche

| Détail | Comportement |
| --- | --- |
| Session active uniquement | ExtraBrain écoute les phrases de déclenchement uniquement lorsque l'enregistrement est actif. |
| Liste de phrases | Vous pouvez utiliser les phrases par défaut ou ajouter vos propres phrases courtes. |
| Nettoyage de la transcription | Les phrases de déclenchement correspondantes sont supprimées de l’historique des transcriptions et exclues des entrées d’analyse après leur déclenchement. |
| Comportement d'analyse | La phrase agit comme un contrôle vocal pour démarrer l’analyse. |

## Conseils pour les expressions

- Utilisez des phrases courtes qui sont peu susceptibles d'apparaître dans une conversation normale.
- Évitez les mots ou expressions courants qu’un participant pourrait naturellement dire.
- Testez la phrase lors d'une courte session avant de vous y fier en direct.
- Gardez les attentes en matière de confidentialité les mêmes que pour l'enregistrement : la capture du microphone doit être active pour la détection du déclencheur.

## En rapport

- [Configurer les paramètres audio ExtraBrain] (/help/settings/audio-settings/)
- [Comment ExtraBrain gère les données](/fr/help/privacy-security/how-extrabrain-handles-data/)
- [Afficher et supprimer l'historique de la session](/fr/help/sessions-history/view-delete-session-history/)

## Questions courantes

### Voice Trigger écoute-t-il lorsque l'enregistrement est arrêté ?

Non. Voice Trigger n’écoute que pendant une session active.

### Les phrases déclencheurs sont-elles enregistrées dans la transcription ?

Les phrases correspondantes sont supprimées de l’historique des transcriptions et exclues des entrées d’analyse après leur déclenchement.
