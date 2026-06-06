---
title: Escolha um provedor de transcrição
description: Compare a transcrição local Parakeet e Deepgram em ExtraBrain por privacidade, tempo de configuração, requisitos principais de API e fluxo de dados.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain transforma fala ao vivo em texto com NVIDIA Parakeet ou Deepgram local.

![Transcrição local selecionada durante a integração](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## Comparação Rápida

| Opção | Melhor para | Fluxo de dados | Configuração |
| --- | --- | --- | --- |
| Local Parakeet | A maioria dos usuários, sessões sensíveis à privacidade, configuração mais rápida | A transcrição é executada em seu Mac | Nenhuma chave API |
| Deepgram | Usuários que já contam com transcrição gerenciada em nuvem | O áudio é enviado para Deepgram | Chave Deepgram API necessária |

## Local Parakeet

Escolha Local Parakeet quando desejar a configuração mais simples e preferir que a transcrição aconteça no Mac. Requer armazenamento local do modelo e usa CPU local enquanto o modelo é executado.

## Deepgram

Escolha Deepgram quando a transcrição na nuvem se adequa ao seu fluxo de trabalho ou sua organização já usa Deepgram. Deepgram requer uma chave API válida.

![Deepgram campo-chave durante a integração](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

Após a validação ser bem-sucedida, ExtraBrain poderá continuar a integração com Deepgram selecionado.

![Deepgram validação bem-sucedida durante a integração](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## Nota de privacidade

Local Parakeet mantém a transcrição local. Deepgram envia áudio para Deepgram para transcrição. A análise de IA é uma escolha separada e pode enviar texto transcrito ou contexto derivado de captura de tela para o provedor de LLM que você selecionou.

## Relacionado

- [Definir configurações de áudio ExtraBrain](/pt/help/settings/audio-settings/)
- [Limpar transcrições e palavras de preenchimento](/pt/help/settings/transcript-cleanup-filler-words/)
- [Use frases de gatilho de voz](/pt/help/settings/voice-trigger/)
- [Como ExtraBrain lida com dados](/pt/help/privacy-security/how-extrabrain-handles-data/)

## Perguntas de transcrição

### Qual provedor de transcrição é melhor para privacidade?

Local Parakeet é o melhor padrão quando o áudio deve permanecer em seu Mac. Não requer uma chave Deepgram API.

### Quando devo escolher Deepgram?

Escolha Deepgram quando a transcrição na nuvem se adequa à sessão, sua organização já usa Deepgram ou você prefere a transcrição gerenciada e aceita que o áudio seja enviado para Deepgram.
