---
title: Central de Ajuda
description: ExtraBrain ajuda para macOS entrevistas ao vivo, reuniões, transcrição, capturas de tela, provedores de IA, privacidade, configurações e solução de problemas.
sidebar:
  label: Visão geral
  order: 1
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
prev: false
next: false
lastUpdated: 2026-04-29
---

ExtraBrain é o primeiro assistente de IA ao vivo do macOS para entrevistas, reuniões, rodadas de codificação, discussões de design de sistema, entrevistas comportamentais, solução de problemas e conversas técnicas densas. Use esta central de ajuda para configurar o aplicativo, escolher provedores, entender a privacidade e se recuperar de problemas comuns de permissão ou provedor.

![ExtraBrain sessão ao vivo expandida com painéis de transcrição e análise](/assets/screenshots/help/dark/main-analysis-followups.png)

## Principais conclusões

ExtraBrain é um assistente de entrevista de IA de desktop Mac primeiro local e copiloto de reunião com um aplicativo principal gratuito, controles de fluxo de trabalho Pro opcionais, transcrição ao vivo, capturas de tela, análise apoiada pelo provedor, IA Gemma 4 local no dispositivo quando instalada e compatível, e revisão pós-sessão.

- Use a central de ajuda para percorrer quatro áreas de configuração: instalação, permissões, transcrição e acesso ao provedor de IA.
- ExtraBrain suporta Mac hoje, incluindo Apple Silicon e Intel Macs.
- O aplicativo suporta transcrição NVIDIA Parakeet local, assinatura Deepgram, OpenAI, Anthropic, Claude opcional, assinatura Codex e endpoints OpenAI-compatible personalizados.
- A privacidade depende do caminho de dados selecionado: a transcrição Parakeet local e Gemma 4 local podem manter a transcrição e os prompts de IA no Mac, enquanto os provedores de nuvem recebem o contexto que você escolhe enviar.

## Comece aqui

- [O que é ExtraBrain?](/pt/help/getting-started/what-is-extrabrain/) explica o aplicativo, transcrição ao vivo, capturas de tela, perfis, acompanhamentos e histórico de sessões.
- [Configurar ExtraBrain pela primeira vez](/pt/help/getting-started/first-run-setup/) percorre a integração desde as boas-vindas até a configuração do provedor.
- [Conceder permissões macOS](/pt/help/getting-started/macos-permissions/) explica o microfone, a gravação de tela e o acesso ao áudio do sistema.
- [Escolha a transcrição Parakeet ou Deepgram](/pt/help/providers/transcription-parakeet-vs-deepgram/) compara a transcrição local e na nuvem.
- [Conectar um provedor de IA](/pt/help/providers/connect-ai-provider/) abrange OpenAI, Anthropic, assinaturas e endpoints personalizados.

## Use ExtraBrain ao vivo

- [Iniciar gravação e solicitar análise](/pt/help/using-extrabrain/start-recording-and-analysis/) cobre os principais controles ao vivo.
- [Usar capturas de tela e contexto da tela](/pt/help/using-extrabrain/screenshots-screen-context/) explica os modos de captura e o contexto da captura de tela.
- [Usar perguntas de acompanhamento](/pt/help/using-extrabrain/follow-up-questions/) explica sugestões de acompanhamento e perguntas personalizadas.
- [Analisar tópicos e perguntas detectados](/pt/help/using-extrabrain/detected-topics-questions/) explica o tópico da transcrição e os cartões de perguntas.

## Privacidade, configurações e histórico

- [Como ExtraBrain lida com dados](/pt/help/privacy-security/how-extrabrain-handles-data/) fornece o fluxo de dados local versus provedor mais claro.
- [Controles de privacidade](/pt/help/privacy-security/privacy-controls/) abrange ocultação de sobreposição, cliques, visibilidade do aplicativo e compartilhamento de uso.
- [Visão geral das configurações](/pt/help/settings/) links para todas as guias de configurações públicas.
- [Definir configurações de áudio](/pt/help/settings/audio-settings/) abrange provedor de transcrição, microfone, acionador de voz e controles de limpeza de transcrição.
- [Usar perfis ExtraBrain](/pt/help/settings/profiles/) explica o comportamento automático, fixado, de sistema e de perfil personalizado.
- [Atalhos de teclado](/pt/help/settings/keyboard-shortcuts/) lista os atalhos padrão e onde editá-los.
- [Visualizar e excluir histórico de sessões](/pt/help/sessions-history/view-delete-session-history/) abrange transcrições, análises, fatos, capturas de tela e exclusão.
- [Ativar ExtraBrain Pro](/pt/help/billing-pro/activate-license/) explica a compra no aplicativo, ativação e desativação da licença.
- [Compare ExtraBrain Grátis e Pro](/pt/pricing/free-vs-pro/) mostra o que Pro desbloqueia.

## Solução de problemas

Comece com [Solução de problemas](/pt/help/troubleshooting/) se permissão de microfone, gravação de tela, áudio do sistema, validação de chave API, validação Deepgram, capturas de tela, janelas ocultas ou exclusão de sessão não estiverem funcionando conforme o esperado.

## Perguntas comuns

### ExtraBrain envia tudo para um servidor?

Não. ExtraBrain armazena configurações, chaves API, histórico de sessão local e dados de transcrição Parakeet locais em seu Mac. Quando você usa um provedor LLM em nuvem, texto relevante, contexto de transcrição, contexto derivado de captura de tela e prompts podem ser enviados ao provedor selecionado. Quando você escolhe Deepgram, o áudio é enviado para Deepgram para transcrição.

### ExtraBrain suporta Windows ou Linux?

ExtraBrain é macOS-primeiro hoje. Windows e Linux são planejados, e não metas atuais de divulgação pública.

### A aba Configurações remotas é pública?

Não. A guia Remoto é apenas para desenvolvimento e não está documentada como um recurso público.
