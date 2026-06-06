---
title: Definir configurações de áudio ExtraBrain
description: Defina o provedor de transcrição, chave Deepgram API, dispositivo de microfone, limpeza de transcrição, acionador de voz e permissão de áudio do sistema em ExtraBrain.
sidebar:
  label: Configurações de áudio
  order: 5
lastUpdated: 2026-04-30
---

Use **Configurações -> Áudio** para escolher o comportamento da transcrição e a entrada do microfone.

![ExtraBrain configurações de áudio com provedor de transcrição e controles de microfone](/assets/screenshots/help/dark/settings-audio.png)

## Controles de áudio

| Controle | O que isso muda |
| --- | --- |
| Provedor de voz para texto | Transcrição em nuvem local Parakeet ou Deepgram. |
| Chave Deepgram API | Obrigatório somente quando Deepgram está selecionado. |
| Fonte de áudio | Entrada de microfone preferida. |
| Gatilho de voz | Controle de frase falada para iniciar a análise durante uma sessão ativa. |
| Limpeza de transcrição | Remoção de palavras de preenchimento antes dos cartões de transcrição e análise. |
| Permissão de áudio do sistema | Fluxo de permissão macOS para capturar áudio do app/system quando necessário. |

## Notas

- As alterações no dispositivo de áudio se aplicam a novas sessões.
- Local Parakeet mantém a transcrição local.
- Deepgram envia áudio para Deepgram para transcrição.
- ExtraBrain pode precisar de permissões de microfone macOS e áudio do sistema antes de a gravação funcionar.

## Relacionado

- [Escolha a transcrição Parakeet ou Deepgram](/pt/help/providers/transcription-parakeet-vs-deepgram/)
- [Conceder permissões macOS](/pt/help/getting-started/macos-permissions/)
- [Limpar transcrições e palavras de preenchimento](/pt/help/settings/transcript-cleanup-filler-words/)
- [Use frases de gatilho de voz](/pt/help/settings/voice-trigger/)

## Perguntas comuns

### Por que ExtraBrain diz que nenhum dispositivo foi encontrado?

macOS pode ainda não ter concedido permissão de microfone ou a entrada selecionada pode estar indisponível. Conceda permissão, reconecte o microfone e inicie uma nova sessão.

### A troca de provedores de transcrição afeta a sessão atual?

As alterações de provedor e dispositivo são mais seguras quando aplicadas antes do início de uma sessão. Pare a gravação e inicie uma nova sessão após grandes alterações de áudio.

