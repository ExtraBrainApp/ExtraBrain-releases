---
title: Conecte um provedor de IA
description: Configure OpenAI, Anthropic, Claude Subscription, Codex Subscription ou um endpoint OpenAI-compatible personalizado em ExtraBrain.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain usa o provedor de IA que você seleciona para análise ao vivo. A configuração do provedor controla para onde os prompts, o contexto da transcrição e o contexto derivado da captura de tela podem ser enviados.

![Seletor de provedor de IA na integração de ExtraBrain](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Modos de provedor público

- Chave OpenAI API.
- Chave Anthropic API.
- Assinatura Codex usando ChatGPT Plus ou Pro diretamente, sem chave API.
- Claude Assinatura usando Claude Pro ou Max diretamente, sem chave API.
- Endpoint OpenAI-compatible personalizado com URL base, chave API e nome do modelo.

## Lista de verificação de configuração

1. Abra integração ou **Configurações -> Provedores LLM**.
2. Escolha a família do provedor.
3. Escolha a chave API ou modo de assinatura.
4. Insira as credenciais quando necessário.
5. Valide ou verifique novamente a conexão.
6. Execute um breve teste de análise.

![Guia de configurações de provedores de LLM](/assets/screenshots/help/dark/settings-llm-providers.png)

## Fluxo de dados

Quando você solicita análise de ExtraBrain com um provedor de nuvem, prompts relevantes, contexto de transcrição, contexto derivado de captura de tela e perguntas personalizadas podem ser enviados a esse provedor. O faturamento, a retenção, a cota e os controles de conta do provedor são regidos pelo provedor que você escolher.

## Relacionado

- [Conectar assinatura OpenAI ou Codex](/pt/help/providers/openai-codex-setup/)
- [Conectar assinatura Anthropic ou Claude](/pt/help/providers/anthropic-claude-setup/)
- [Use um endpoint OpenAI-compatible personalizado](/pt/help/providers/custom-openai-compatible-endpoint/)
- [Revisar preços de ExtraBrain e separação de custos do fornecedor](/pt/pricing/)

## Perguntas do provedor de IA

### Qual provedor de IA devo escolher primeiro?

Escolha o provedor em que você já confia e pode validar antes de uma sessão real. Para a maioria dos usuários, isso significa começar com uma conta OpenAI, Anthropic, Claude ou Codex existente.

### Posso manter mais de um caminho de provedor pronto?

Sim. Manter um caminho de provedor de backup é útil antes de entrevistas ou reuniões em que a cota, o acesso à rede ou o status da conta possam mudar.
