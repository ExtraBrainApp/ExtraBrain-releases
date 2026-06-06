---
title: Conecte a assinatura Anthropic ou Claude
description: Configure o modo de chave Anthropic API ou o modo de assinatura Claude em ExtraBrain, valide o acesso, escolha modelos e solucione problemas de login.
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain suporta o modo de chave Anthropic API e o modo de assinatura Claude.

## Anthropic API Modo chave

Use este modo quando quiser que ExtraBrain chame Anthropic através de uma chave API que você gerencia.

1. Abra **Configurações -> Provedores LLM**.
2. Selecione **Anthropic**.
3. Cole sua chave Anthropic API.
4. Escolha o modelo.
5. Valide a chave.
6. Execute um breve teste de análise.

![Guia de configurações de Provedores LLM com Anthropic selecionado](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude Modo de assinatura

Use a assinatura Claude quando quiser que ExtraBrain use sua assinatura Claude Pro ou Max diretamente. Este modo não requer uma chave API em ExtraBrain.

1. Abra **Configurações -> Provedores LLM**.
2. Escolha **Claude Assinatura**.
3. Verifique novamente o status de login.
4. Escolha o modelo disponível.
5. Execute uma análise de teste.

## Solução de problemas

Se a validação falhar, confirme se a chave API pertence à conta Anthropic correta, tem acesso ao modelo e foi colada sem espaços extras. Para o modo de assinatura, confirme se sua assinatura Claude está ativa e conectada onde ExtraBrain espera.

## Perguntas sobre Anthropic e Claude

### Preciso de uma chave Anthropic API para o modo de assinatura Claude?

Não. O modo de assinatura Claude destina-se ao acesso de assinatura Claude Pro ou Max e não requer uma chave Anthropic API dentro de ExtraBrain.

### Quais dados podem ser enviados para Anthropic ou Claude?

Quando selecionados para análise, prompts relevantes, contexto de transcrição, contexto derivado de captura de tela e perguntas personalizadas podem ser enviados para Anthropic ou Claude de acordo com o modo do provedor.
