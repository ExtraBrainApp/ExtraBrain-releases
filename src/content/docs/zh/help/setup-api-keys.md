---
title: 设置 AI 提供商
description: 设置 ExtraBrain 提供程序、API 密钥、订阅、自定义端点和转录选择以进行实时分析。
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

当您需要选择与您的设置匹配的提供商指南时，请使用此概述。 ExtraBrain 支持 API-密钥提供程序、订阅提供程序模式和自定义 OpenAI-compatible 端点。

![ExtraBrain AI 提供商选择器](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## 要点

ExtraBrain AI 提供程序是应用程序将转录、提示、屏幕截图或会话上下文转换为实时分析时使用的模型路径。

- ExtraBrain 支持 Google Gemma 4 个本地 AI、OpenAI、Anthropic、Claude 订阅、Codex 订阅和自定义 OpenAI-compatible 端点。
- API 关键模式需要当前的提供商凭据；订阅模式使用应用支持的登录订阅路径。
- 提供商验证应在现场采访、会议、讲座或研究电话之前测试一次。
- 提供商计费、保留、模型访问和配额由您选择的提供商帐户控制。

- [连接人工智能提供商](/zh/help/providers/connect-ai-provider/)
- [连接OpenAI或Codex订阅](/zh/help/providers/openai-codex-setup/)
- [连接Anthropic或Claude订阅](/zh/help/providers/anthropic-claude-setup/)
- [使用自定义 OpenAI-compatible 端点](/zh/help/providers/custom-openai-compatible-endpoint/)
- [选择 Parakeet 或 Deepgram 转录](/zh/help/providers/transcription-parakeet-vs-deepgram/)
- [比较应用程序定价和提供商成本](/zh/pricing/)

## 提供商设置清单

1. 决定您是否需要 API 密钥模式、订阅模式或自定义端点。
2. 打开 **设置 -> LLM 提供商**。
3. 输入所需的提供商详细信息。
4. 验证或重新检查提供商连接。
5. 运行一项测试分析。
6. 使用敏感上下文之前，请查看[ExtraBrain 如何处理数据](/zh/help/privacy-security/how-extrabrain-handles-data/)。

## 提供商问题

### 每个提供商模式都需要 API 密钥吗？

不需要。OpenAI 和 Anthropic API 按键模式需要按键。 Claude 订阅和 Codex 订阅模式使用订阅访问，不需要 ExtraBrain 中的 API 密钥。

### 如果提供商验证失败，我应该检查什么？

确认密钥、模型访问、基本 URL、订阅状态和网络访问。自定义端点还需要端点所需的确切模型名称。
