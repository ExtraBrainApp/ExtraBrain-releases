---
title: Use frases de gatilho de voz em ExtraBrain
description: Configure frases de acionamento de voz ExtraBrain, quando ocorre a escuta, gerenciamento de frases e tratamento de transcrição.
sidebar:
  label: Gatilho de voz
  order: 7
lastUpdated: 2026-04-30
---

O Voice Trigger permite que ExtraBrain inicie a análise quando ouve uma frase curta configurada durante uma sessão ativa. Encontre-o em **Configurações -> Áudio**.

![ExtraBrain configurações de áudio focadas nos controles do Voice Trigger](/assets/screenshots/help/dark/settings-voice-trigger.png)

## Como funciona

| Detalhe | Comportamento |
| --- | --- |
| Somente sessão ativa | ExtraBrain escuta frases de gatilho apenas enquanto a gravação está ativa. |
| Lista de frases | Você pode usar as frases padrão ou adicionar suas próprias frases curtas. |
| Limpeza de transcrição | As frases de acionamento correspondentes são removidas do histórico de transcrição e excluídas da entrada de análise após serem acionadas. |
| Comportamento de análise | A frase funciona como um controle falado para iniciar a análise. |

## Dicas de frases

- Use frases curtas que provavelmente não aparecerão em uma conversa normal.
- Evite palavras ou frases comuns que um participante possa dizer naturalmente.
- Teste a frase em uma sessão curta antes de usá-la ao vivo.
- Mantenha as mesmas expectativas de privacidade da gravação: a captura do microfone deve estar ativa para detecção de gatilho.

## Relacionado

- [Definir configurações de áudio ExtraBrain](/pt/help/settings/audio-settings/)
- [Como ExtraBrain lida com dados](/pt/help/privacy-security/how-extrabrain-handles-data/)
- [Ver e excluir histórico de sessão](/pt/help/sessions-history/view-delete-session-history/)

## Perguntas comuns

### O Voice Trigger escuta quando a gravação é interrompida?

Não. O Voice Trigger escuta apenas durante uma sessão ativa.

### As frases-gatilho são salvas na transcrição?

As frases correspondentes são removidas do histórico de transcrição e excluídas da entrada de análise após serem acionadas.
