---
title: Como ExtraBrain trata os dados
description: Entenda o que ExtraBrain armazena localmente, o que pode ser enviado para provedores de IA selecionados e quando Deepgram recebe áudio.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain é um aplicativo de desktop local, mas o fluxo exato de dados depende dos provedores e recursos que você escolher.

![Configurações de privacidade em ExtraBrain](/assets/screenshots/help/dark/settings-privacy.png)

## Redação precisa de privacidade

ExtraBrain armazena configurações, chaves API, histórico de sessão local e dados de transcrição Parakeet locais em seu Mac. Quando você usa um provedor LLM em nuvem, texto relevante, contexto de transcrição, contexto derivado de captura de tela e prompts podem ser enviados ao provedor selecionado. Quando você escolhe Deepgram, o áudio é enviado para Deepgram para transcrição. O compartilhamento de uso anônimo pode ser desativado.

## O que permanece no seu Mac

- configurações do aplicativo
- configuração do provedor e chaves API armazenadas pelo aplicativo
- histórico de sessão local
- transcrições e capturas de tela salvas no histórico da sessão local
- dados de transcrição Parakeet locais

## O que pode deixar seu Mac

| Escolha | O que pode ser enviado |
| --- | --- |
| OpenAI, Anthropic, Claude Assinatura, Codex Assinatura ou provedor LLM personalizado | Prompts, contexto de transcrição, contexto derivado de captura de tela, perguntas personalizadas e outros contextos de análise selecionados. |
| Transcrição Deepgram | Áudio enviado para Deepgram para transcrição. |
| Compartilhamento de uso anônimo | Dados de uso quando ativado. |

## Controle do provedor

A retenção do provedor externo, o faturamento, a cota, o acesso ao modelo e as políticas de conta são controlados pelo provedor que você escolher. Revise as configurações do provedor se você lida com materiais confidenciais de entrevistas, locais de trabalho, clientes ou pesquisas.

## Relacionado

- [Controles de privacidade](/pt/help/privacy-security/privacy-controls/)
- [Escolha a transcrição Parakeet ou Deepgram](/pt/help/providers/transcription-parakeet-vs-deepgram/)
- [Conectar um provedor de IA](/pt/help/providers/connect-ai-provider/)

## Perguntas sobre tratamento de dados

### Qual é a configuração de transcrição mais privada?

Use Local Parakeet quando a transcrição do áudio deve permanecer no Mac. Evite Deepgram para sessões em que o áudio não deve ser enviado para um provedor de transcrição em nuvem.

### Quem controla a retenção do provedor de nuvem?

O provedor escolhido controla suas políticas de retenção, cobrança, cota e conta. Revise OpenAI, Anthropic, Claude, Codex, Deepgram ou configurações de endpoint personalizadas antes de enviar o contexto confidencial.
