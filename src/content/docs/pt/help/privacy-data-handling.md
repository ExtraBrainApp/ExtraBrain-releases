---
title: Privacidade e tratamento de dados
description: Revise as diretrizes de privacidade de ExtraBrain para armazenamento local, fluxo de dados do provedor, capturas de tela, áudio Deepgram e controles de privacidade.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Esta visão geral da privacidade aponta para os guias de privacidade detalhados atuais e resume a distinção mais importante do fluxo de dados.

![ExtraBrain guia de configurações de privacidade](/assets/screenshots/help/dark/settings-privacy.png)

## Principais conclusões

A privacidade de ExtraBrain é controlada pelo caminho de dados que você escolhe para transcrição, capturas de tela, prompts, solicitações de modelo, credenciais de provedor e histórico de sessão local.

- A transcrição local Parakeet pode manter o trabalho de fala para texto no Mac.
- O Gemma 4 local pode manter os prompts de IA locais quando estiver instalado e compatível com o Mac.
- Provedores de modelos externos podem receber texto de transcrição, contexto derivado de captura de tela, prompts e notas quando você solicitar que ExtraBrain os use.
- Opcional Deepgram pode receber áudio para transcrição na nuvem quando você o configura.

- [Como ExtraBrain lida com dados](/pt/help/privacy-security/how-extrabrain-handles-data/)
- [Controles de privacidade](/pt/help/privacy-security/privacy-controls/)
- [Comparar preços de aplicativos e custos de provedores](/pt/pricing/)

ExtraBrain armazena configurações, chaves API, histórico de sessão local e dados de transcrição Parakeet locais em seu Mac. Quando você usa um provedor LLM em nuvem, texto relevante, contexto de transcrição, contexto derivado de captura de tela e prompts podem ser enviados ao provedor selecionado. Quando você escolhe Deepgram, o áudio é enviado para Deepgram para transcrição. O compartilhamento de uso anônimo pode ser desativado.

## Lista de verificação de privacidade

- Use Local Parakeet quando a transcrição do áudio deve ficar no Mac.
- Revise o provedor LLM selecionado antes de enviar uma transcrição confidencial ou contexto derivado de captura de tela.
- Desative o compartilhamento de uso anônimo se não quiser que os dados de uso sejam compartilhados.
- Exclua o histórico de sessões locais que você não precisa mais.
- Siga as políticas de entrevista, local de trabalho, escola e cliente antes de usar a assistência de IA.

## Perguntas sobre privacidade

### ExtraBrain envia tudo para um servidor?

Não. ExtraBrain armazena configurações, chaves API e histórico de sessão local em seu Mac. Os provedores de nuvem recebem contexto somente quando o fluxo de trabalho selecionado envia conteúdo para eles.

### O contexto da captura de tela pode sair do meu Mac?

Sim, o contexto derivado da captura de tela pode ser enviado quando você solicita análise a um provedor de LLM em nuvem. Use controles de privacidade e escolha de provedor para combinar com a sessão.
