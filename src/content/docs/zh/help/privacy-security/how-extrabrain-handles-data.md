---
title: ExtraBrain 如何处理数据
description: 了解 ExtraBrain 本地存储的内容、可能发送给选定 AI 提供商的内容以及 Deepgram 何时接收音频。
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain 是本地桌面应用程序，但您的确切数据流取决于您选择的提供商和功能。

![ExtraBrain 中的隐私设置](/assets/screenshots/help/dark/settings-privacy.png)

## 准确的隐私措辞

ExtraBrain 在 Mac 上存储设置、API 密钥、本地会话历史记录和本地 Parakeet 转录数据。当您使用云 LLM 提供商时，相关文本、转录上下文、屏幕截图派生上下文和提示可能会发送到您选择的提供商。当您选择 Deepgram 时，音频将发送到 Deepgram 进行转录。可以禁用匿名使用共享。

## 您的 Mac 上保留了什么

- 应用程序设置
- 应用程序存储的提供程序配置和 API 密钥
- 本地会话历史记录
- 记录和屏幕截图保存在本地会话历史记录中
- 本地 Parakeet 转录数据

## 什么可能会离开您的 Mac

| 选择 | 可以发送什么 |
| --- | --- |
| OpenAI、Anthropic、Claude 订阅、Codex 订阅或自定义 LLM 提供商 | 提示、文字记录上下文、屏幕截图派生上下文、自定义问题和其他选定的分析上下文。 |
| Deepgram 转录 | 音频发送至 Deepgram 进行转录。 |
| 匿名使用共享 | 启用后的使用数据。 |

## 提供商控制

外部提供商保留、计费、配额、模型访问和帐户策略由您选择的提供商控制。如果您处理敏感的采访、工作场所、客户或研究材料，请检查这些提供商设置。

## 有关的

- [隐私控制](/zh/help/privacy-security/privacy-controls/)
- [选择 Parakeet 或 Deepgram 转录](/zh/help/providers/transcription-parakeet-vs-deepgram/)
- [连接人工智能提供商](/zh/help/providers/connect-ai-provider/)

## 数据处理问题

### 最私密的转录设置是什么？

当音频转录应保留在 Mac 上时，请使用本地 Parakeet。对于不应将音频发送到云转录提供商的会话，请避免使用 Deepgram。

### 谁控制云提供商的保留？

您选择的提供商控制其保留、计费、配额和帐户策略。在发送敏感上下文之前，请检查 OpenAI、Anthropic、Claude、Codex、Deepgram 或自定义端点设置。
