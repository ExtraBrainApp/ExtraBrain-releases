---
title: Conecte a assinatura OpenAI ou Codex
description: Configure o modo de chave OpenAI API ou o modo de assinatura Codex em ExtraBrain, valide o acesso, escolha modelos e solucione problemas de configuração.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain suporta o modo de chave OpenAI API e o modo de assinatura Codex.

## OpenAI API Modo chave

Use este modo quando quiser que ExtraBrain chame OpenAI através de uma chave API que você gerencia.

1. Abra **Configurações -> Provedores LLM**.
2. Selecione **OpenAI**.
3. Cole sua chave API.
4. Escolha o modelo e o esforço de raciocínio, quando disponível.
5. Valide a chave.
6. Execute uma breve análise para confirmar se as respostas vêm de OpenAI.

![OpenAI formulário do provedor na integração](/assets/screenshots/help/dark/onboarding-openai-provider-form.png)

## Codex Modo de assinatura

Use a assinatura Codex quando quiser que ExtraBrain use sua assinatura ChatGPT Plus ou Pro diretamente. Este modo não requer uma chave API em ExtraBrain.

1. Abra **Configurações -> Provedores LLM**.
2. Escolha **Codex Assinatura**.
3. Verifique novamente o status de login.
4. Escolha o modelo disponível.
5. Execute uma análise de teste.

## Solução de problemas

Se a validação falhar, verifique se a chave é atual, tem acesso ao modelo selecionado e não está bloqueada por um proxy ou política da organização. Para o modo de assinatura, confirme se o ambiente de área de trabalho pode acessar as ferramentas do provedor conectado.

## Perguntas sobre OpenAI e Codex

### Preciso de uma chave OpenAI API para o modo de assinatura Codex?

O modo de assinatura Codex usa acesso de assinatura ChatGPT Plus ou Pro diretamente e não requer uma chave OpenAI API em ExtraBrain.

### O que ExtraBrain pode enviar para OpenAI ou Codex?

Quando selecionado para análise, ExtraBrain pode enviar prompts, contexto de transcrição, contexto derivado de captura de tela e perguntas personalizadas necessárias para a resposta.
