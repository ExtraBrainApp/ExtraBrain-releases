---
title: Solução de problemas
description: Corrija problemas de microfone ExtraBrain, gravação de tela, áudio do sistema, tecla API, Deepgram, captura de tela, janela oculta e histórico de sessão.
sidebar:
  order: 6
lastUpdated: 2026-04-29
---

Use esta página quando ExtraBrain não estiver capturando áudio, não puder validar um provedor, perder capturas de tela ou for difícil de recuperar durante uma sessão ao vivo.

![ExtraBrain etapa de permissões para solução de problemas de acesso ao microfone, tela e áudio do sistema](/assets/screenshots/help/dark/onboarding-permissions.png)

## Principais conclusões

A solução de problemas ExtraBrain é o caminho de recuperação para os 6 bloqueadores mais comuns: permissão de microfone, permissão de gravação de tela, áudio do sistema, validação de provedor, validação Deepgram e visibilidade de janela.

- A maioria dos problemas de captura começa em macOS Privacidade e Segurança e, em seguida, exige o encerramento e a reabertura de ExtraBrain.
- As falhas do provedor geralmente envolvem o modelo selecionado, chave API, acesso por assinatura, URL base, cota ou acesso à rede.
- A análise de captura de tela requer uma sessão ativa, permissão de gravação de tela e o modo de captura esperado.
- As sessões ativas não podem ser excluídas até que a gravação seja interrompida.

## Permissão de microfone necessária

Se a captura do microfone não for iniciada:

1. Abra **Configurações do sistema -> Privacidade e segurança -> Microfone**.
2. Habilite ExtraBrain.
3. Saia e reabra ExtraBrain se macOS perguntar.
4. Inicie uma breve sessão de teste.

Consulte [Conceder permissões macOS](/pt/help/getting-started/macos-permissions/).

## A gravação de tela ou o áudio do sistema não está funcionando

A gravação de tela controla as capturas de tela e o contexto da tela. O áudio do sistema controla a transcrição de reuniões, chamadas, vídeos ou áudio compartilhado, quando compatível.

Verifique se há chips de aviso como "Microfone parado", "Áudio do sistema interrompido" ou "Áudio parado". Em seguida, reabra as configurações de privacidade e segurança de macOS, conceda acesso e reinicie ExtraBrain se necessário.

## API Falha na validação da chave

Para OpenAI, Anthropic ou um endpoint personalizado:

- confirme se a chave está atual
- remova espaços extras
- confirme se o modelo selecionado está disponível para a conta
- confirme se um endpoint personalizado tem um URL base e um nome de modelo
- verifique as restrições de proxy ou organização

Em seguida, valide novamente em **Configurações -> Provedores LLM**.

## Deepgram Falha na validação

Deepgram requer uma chave Deepgram API válida. Se a validação falhar, cole uma nova chave, tente novamente a validação ou volte para Local Parakeet na integração ou **Configurações -> Áudio**.

## As capturas de tela não aparecem na análise

Verifique isso:

- uma sessão está ativa
- A permissão de gravação de tela é concedida
- o modo de captura em **Configurações -> Captura de tela** corresponde ao que você espera
- a entrada da captura de tela aparece no painel de transcrição

Capturas de tela são artefatos de sessão local. O contexto derivado da captura de tela pode ser enviado quando você solicita análise a um provedor de LLM em nuvem.

## A janela principal está oculta ou é difícil de clicar

Se a sobreposição estiver oculta ou o clique dificultar a interação:

1. Use o atalho de alternância da janela.
2. Desative o clique em **Configurações -> Privacidade**.
3. Reative a visibilidade do Dock ou da barra de menus se precisar de um caminho de recuperação visível.

## A exclusão do histórico da sessão está desativada

As sessões ativas não podem ser excluídas. Pare a gravação primeiro, depois retorne para **Configurações -> Sessões** e exclua a sessão.

## Guias relacionados

- [Configurar ExtraBrain pela primeira vez](/pt/help/getting-started/first-run-setup/)
- [Conectar um provedor de IA](/pt/help/providers/connect-ai-provider/)
- [Escolha a transcrição Parakeet ou Deepgram](/pt/help/providers/transcription-parakeet-vs-deepgram/)
- [Controles de privacidade](/pt/help/privacy-security/privacy-controls/)

## Perguntas para solução de problemas

### O que devo verificar primeiro se ExtraBrain não está gravando?

Verifique a permissão do microfone, a permissão de áudio do sistema, o dispositivo de áudio selecionado e se uma sessão já está sendo iniciada ou interrompida.

### O que devo verificar primeiro se a análise falhar?

Verifique o provedor de IA selecionado, a chave API ou o status da assinatura, os campos de endpoint personalizados e se a sessão atual tem transcrição ou contexto de captura de tela para analisar.
