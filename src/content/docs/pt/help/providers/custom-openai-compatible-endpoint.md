---
title: Use um endpoint compatível com OpenAI personalizado
description: Configure um endpoint OpenAI-compatible personalizado em ExtraBrain com URL base, chave API, nome do modelo, validação e solução de problemas.
sidebar:
  order: 5
lastUpdated: 2026-04-29
---

Use um endpoint OpenAI-compatible personalizado quando seu provedor ou proxy expõe um API estilo OpenAI.

![ExtraBrain configurações personalizadas do provedor OpenAI-compatible com URL base e campos de nome de modelo](/assets/screenshots/help/dark/settings-custom-provider.png)

## Campos obrigatórios

| Campo | O que entrar |
| --- | --- |
| URL base | O provedor ou proxy URL base API. |
| Chave API | A chave exigida por esse endpoint. |
| Nome do modelo | O identificador exato do modelo que o endpoint espera. |

## Etapas de configuração

1. Abra integração ou **Configurações -> Provedores LLM**.
2. Escolha a opção de provedor personalizado.
3. Insira o URL base.
4. Insira a chave API.
5. Insira o nome do modelo.
6. Valide a configuração.
7. Execute um breve teste de análise.

## Erros Comuns

- Faltando `/v1` quando o provedor espera.
- Usando um nome de exibição do modelo em vez do identificador do modelo API.
- Colando uma chave para o provedor ou proxy errado.
- Esquecer que as regras de retenção, cobrança e acesso do provedor são controladas pelo operador do endpoint personalizado.

As solicitações personalizadas do provedor podem incluir prompts, contexto de transcrição, contexto derivado de captura de tela e perguntas personalizadas.

## Perguntas sobre endpoints personalizados

### O que torna um endpoint OpenAI-compatible?

O endpoint deve aceitar solicitações API estilo OpenAI para bate-papo ou respostas usando o URL base, a chave e o nome do modelo inserido em ExtraBrain.

### O que devo testar depois de salvar um endpoint personalizado?

Execute uma breve análise com transcrição não confidencial ou contexto de captura de tela. Confirme se o endpoint retorna uma resposta e se o nome do modelo corresponde ao que seu provedor ou proxy espera.
