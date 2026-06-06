---
title: Configurar provedores de IA
description: Configure provedores ExtraBrain, chaves API, assinaturas, endpoints personalizados e opções de transcrição para análise ao vivo.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Use esta visão geral quando precisar escolher qual guia do fornecedor corresponde à sua configuração. ExtraBrain oferece suporte a provedores de chave API, modos de provedor de assinatura e endpoints OpenAI-compatible personalizados.

![ExtraBrain seletor de provedor de IA](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Principais conclusões

Um provedor de IA ExtraBrain é o caminho do modelo que o aplicativo usa quando transforma transcrição, prompt, captura de tela ou contexto de sessão em análise ao vivo.

- ExtraBrain suporta Google Gemma 4 IA local, OpenAI, Anthropic, assinatura Claude, assinatura Codex e endpoints OpenAI-compatible personalizados.
- Os modos principais API exigem credenciais atuais do provedor; os modos de assinatura usam o caminho de assinatura conectado compatível com o aplicativo.
- A validação do fornecedor deve ser testada uma vez antes de uma entrevista ao vivo, reunião, palestra ou chamada de pesquisa.
- O faturamento, a retenção, o acesso ao modelo e a cota do provedor são controlados pela conta do provedor que você escolher.

- [Conectar um provedor de IA](/pt/help/providers/connect-ai-provider/)
- [Conectar assinatura OpenAI ou Codex](/pt/help/providers/openai-codex-setup/)
- [Conectar assinatura Anthropic ou Claude](/pt/help/providers/anthropic-claude-setup/)
- [Use um endpoint OpenAI-compatible personalizado](/pt/help/providers/custom-openai-compatible-endpoint/)
- [Escolha a transcrição Parakeet ou Deepgram](/pt/help/providers/transcription-parakeet-vs-deepgram/)
- [Comparar preços de aplicativos e custos de provedores](/pt/pricing/)

## Lista de verificação de configuração do provedor

1. Decida se deseja o modo chave API, o modo de assinatura ou um endpoint personalizado.
2. Abra **Configurações -> Provedores LLM**.
3. Insira os detalhes necessários do provedor.
4. Valide ou verifique novamente a conexão do provedor.
5. Execute uma análise de teste.
6. Revise [Como ExtraBrain lida com dados](/pt/help/privacy-security/how-extrabrain-handles-data/) antes de usar contexto confidencial.

## Perguntas do provedor

### Preciso de uma chave API para cada modo de provedor?

Não. Os modos de teclas OpenAI e Anthropic API requerem chaves. Os modos de assinatura Claude e Codex usam acesso de assinatura e não exigem uma chave API em ExtraBrain.

### O que devo verificar se a validação do provedor falhar?

Confirme a chave, o acesso ao modelo, o URL base, o status da assinatura e o acesso à rede. Os endpoints personalizados também precisam do nome exato do modelo esperado pelo endpoint.
