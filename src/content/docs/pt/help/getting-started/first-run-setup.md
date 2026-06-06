---
title: Configure ExtraBrain pela primeira vez
description: Conclua a integração de ExtraBrain em macOS concedendo permissões, escolhendo a transcrição e conectando um provedor de IA.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

A configuração de primeira execução obtém ExtraBrain desde o lançamento até uma sessão ao vivo utilizável. O fluxo de integração abrange boas-vindas, permissões macOS, provedor de transcrição, provedor de IA e finalização.

![ExtraBrain tela de boas-vindas de integração](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. Comece a integração

Abra ExtraBrain e continue na tela de boas-vindas. Mantenha o aplicativo aberto enquanto você conclui as permissões e a configuração do provedor.

## 2. Conceda permissões macOS

ExtraBrain precisa de permissão para ouvir e ver o contexto que você escolhe usar:

- Microfone para seu áudio falado.
- Gravação de tela para capturas de tela e contexto da tela.
- Áudio do sistema para transcrição de chamadas, reuniões, vídeos ou áudio compartilhado, quando compatível.

Consulte [Conceder permissões macOS](/pt/help/getting-started/macos-permissions/) para ver as etapas de recuperação se macOS mantiver uma permissão em estado pendente ou negado.

## 3. Escolha a transcrição

Escolha um modo de transcrição:

- O Parakeet local é executado em seu Mac e não requer uma chave API.
- Deepgram usa transcrição em nuvem e requer uma chave Deepgram API.

![Seleção do provedor de transcrição na integração](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4. Conecte IA

Escolha a família de provedores de IA e o método de conexão que ExtraBrain deve usar para análise ao vivo. Os modos de provedor público incluem OpenAI, Anthropic, Claude Assinatura, Codex Assinatura e endpoints OpenAI-compatible personalizados.

![Seletor de provedor de IA na integração](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

A opção de modelo local mostrada na integração está desativada e não deve ser tratada como configuração pública disponível.

## 5. Execute um breve teste

Antes de uma entrevista ou reunião real:

- comece a gravar
- confirmar que as entradas da transcrição aparecem
- capture uma captura de tela se o contexto da tela for importante
- execute uma análise
- confirme se a resposta vem do provedor que você esperava

## Relacionado

- [Escolha a transcrição Parakeet ou Deepgram](/pt/help/providers/transcription-parakeet-vs-deepgram/)
- [Conectar um provedor de IA](/pt/help/providers/connect-ai-provider/)
- [Atalhos de teclado](/pt/help/settings/keyboard-shortcuts/)

## Perguntas de configuração

### Posso mudar de provedor após a configuração inicial?

Sim. Você pode alterar a transcrição em **Configurações -> Áudio** e alterar os provedores de IA em **Configurações -> Provedores LLM**. Execute um pequeno teste após alterar qualquer configuração.

### O que devo fazer se a integração não puder continuar?

Verifique as permissões macOS, validação do provedor e campos obrigatórios. Deepgram requer uma chave válida, enquanto Parakeet Local pode continuar sem uma chave API.
