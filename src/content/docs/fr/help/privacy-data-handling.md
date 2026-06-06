---
title: Confidentialité et traitement des données
description: Consultez les directives de confidentialité ExtraBrain pour le stockage local, le flux de données du fournisseur, les captures d'écran, l'audio Deepgram et les contrôles de confidentialité.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Cet aperçu de la confidentialité renvoie aux guides de confidentialité détaillés actuels et résume les distinctions les plus importantes en matière de flux de données.

![Onglet Paramètres de confidentialité ExtraBrain](/assets/screenshots/help/dark/settings-privacy.png)

## Points clés à retenir

La confidentialité de ExtraBrain est contrôlée par le chemin de données que vous choisissez pour la transcription, les captures d'écran, les invites, les demandes de modèle, les informations d'identification du fournisseur et l'historique des sessions locales.

- La transcription locale Parakeet peut maintenir le travail de synthèse vocale sur le Mac.
- Local Gemma 4 peut conserver les invites AI locales lorsqu'il est installé et compatible avec le Mac.
- Les fournisseurs de modèles externes peuvent recevoir le texte de transcription, le contexte dérivé de la capture d'écran, les invites et les notes lorsque vous demandez à ExtraBrain de les utiliser.
- En option, Deepgram peut recevoir de l'audio pour la transcription dans le cloud lorsque vous le configurez.

- [Comment ExtraBrain gère les données](/fr/help/privacy-security/how-extrabrain-handles-data/)
- [Contrôles de confidentialité](/fr/help/privacy-security/privacy-controls/)
- [Comparez les prix des applications et les coûts des fournisseurs] (/pricing/)

ExtraBrain stocke les paramètres, les clés API, l'historique de session locale et les données de transcription locales Parakeet sur votre Mac. Lorsque vous utilisez un fournisseur cloud LLM, le texte pertinent, le contexte de transcription, le contexte dérivé de la capture d'écran et les invites peuvent être envoyés au fournisseur que vous avez sélectionné. Lorsque vous choisissez Deepgram, l'audio est envoyé à Deepgram pour transcription. Le partage d'utilisation anonyme peut être désactivé.

## Liste de contrôle de confidentialité

- Utilisez Local Parakeet lorsque la transcription audio doit rester sur le Mac.
- Vérifiez le fournisseur LLM que vous sélectionnez avant d'envoyer une transcription sensible ou un contexte dérivé d'une capture d'écran.
- Désactivez le partage d'utilisation anonyme si vous ne souhaitez pas que les données d'utilisation soient partagées.
- Supprimez l'historique des sessions locales dont vous n'avez plus besoin.
- Suivez les politiques relatives aux entretiens, au lieu de travail, à l'école et aux clients avant d'utiliser l'assistance de l'IA.

## Questions sur la confidentialité

### Est-ce que ExtraBrain envoie tout à un serveur ?

Non. ExtraBrain stocke les paramètres, les clés API et l'historique des sessions locales sur votre Mac. Les fournisseurs de cloud reçoivent le contexte uniquement lorsque le flux de travail sélectionné leur envoie du contenu.

### Le contexte de la capture d'écran peut-il quitter mon Mac ?

Oui, le contexte dérivé d’une capture d’écran peut être envoyé lorsque vous demandez une analyse à un fournisseur cloud LLM. Utilisez les contrôles de confidentialité et le choix du fournisseur en fonction de la session.
