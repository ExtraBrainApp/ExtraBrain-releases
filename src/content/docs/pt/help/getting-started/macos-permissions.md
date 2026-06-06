---
title: Conceda permissões de áudio e tela macOS
description: Saiba por que ExtraBrain precisa de permissões de microfone, gravação de tela e áudio do sistema macOS e como corrigir o acesso bloqueado.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain precisa de permissões macOS antes de poder usar áudio ao vivo e contexto de tela. Conceda-os durante a integração ou nas configurações do sistema macOS.

![ExtraBrain etapa de permissões durante a integração](/assets/screenshots/help/dark/onboarding-permissions.png)

## Permissões ExtraBrain Usos

| Permissão | Por que ExtraBrain usa isso |
| --- | --- |
| Microfone | Transcreve seu áudio falado durante sessões ao vivo. |
| Gravação de tela | Captura capturas de tela e contexto da tela que você pede para ExtraBrain analisar. |
| Áudio do sistema | Captura áudio de reunião, chamada ou vídeo quando a sessão precisa de som do sistema. |

## Abra as configurações de macOS

1. Abra **Configurações do sistema**.
2. Acesse **Privacidade e segurança**.
3. Verifique **Microfone**, **Gravação de tela** e avisos relacionados ao áudio do sistema se macOS os exibir.
4. Habilite ExtraBrain.
5. Reinicie ExtraBrain se macOS solicitar ou se o estado de permissão não for atualizado imediatamente.

## Se uma permissão ainda parecer bloqueada

- Saia e reabra ExtraBrain.
- Ative e desative a permissão nas configurações do sistema.
- Reinicie o Mac se a gravação de tela permanecer travada.
- Reabra a integração ou configurações após reiniciar.

Avisos de permissão como "Microfone interrompido", "Áudio do sistema interrompido" ou "Áudio interrompido" significam que ExtraBrain perdeu acesso a parte do pipeline de captura e precisa de permissão ou recuperação do dispositivo.

## Perguntas de permissão

### Por que ExtraBrain precisa de permissão de gravação de tela?

A gravação de tela permite que ExtraBrain capture capturas de tela e contexto de tela que você usa explicitamente para análise. Sem ele, os fluxos de trabalho de captura de tela e de contexto de tela podem falhar.

### Por que ExtraBrain precisa de permissão de áudio do sistema?

O áudio do sistema ajuda ExtraBrain a capturar contexto de reunião, chamada, vídeo ou áudio compartilhado, quando compatível. Sem ele, você verá apenas a transcrição do microfone.
