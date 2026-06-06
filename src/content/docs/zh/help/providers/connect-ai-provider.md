---
title: 连接人工智能提供商
description: 在 ExtraBrain 中设置 OpenAI、Anthropic、Claude 订阅、Codex 订阅或自定义 OpenAI-compatible 端点。
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain 使用您选择的 AI 提供商进行实时分析。提供程序设置控制可以发送提示、转录上下文和屏幕截图派生上下文的位置。

![ExtraBrain 入门中的 AI 提供商选择器](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## 公共提供者模式

- OpenAI API 键。
- Anthropic API 键。
- Codex 直接使用 ChatGPT Plus 或 Pro 订阅，无需 API 密钥。
- Claude 直接使用 Claude Pro 或 Max 进行订阅，无需 API 密钥。
- 具有基本 URL、API 密钥和模型名称的自定义 OpenAI-compatible 端点。

## 设置清单

1. 打开入职或**设置 -> LLM 提供商**。
2. 选择提供者系列。
3. 选择 API 密钥或订阅模式。
4. 需要时输入凭据。
5. 验证或重新检查连接。
6. 运行简短的测试分析。

![LLM 提供商设置选项卡](/assets/screenshots/help/dark/settings-llm-providers.png)

## 数据流

当您要求 ExtraBrain 与云提供商进行分析时，相关提示、文字记录上下文、屏幕截图派生的上下文和自定义问题可能会发送给该提供商。提供商计费、保留、配额和帐户控制由您选择的提供商管辖。

## 有关的

- [连接OpenAI或Codex订阅](/zh/help/providers/openai-codex-setup/)
- [连接Anthropic或Claude订阅](/zh/help/providers/anthropic-claude-setup/)
- [使用自定义 OpenAI-compatible 端点](/zh/help/providers/custom-openai-compatible-endpoint/)
- [审查 ExtraBrain 定价和提供商成本分离](/zh/pricing/)

## AI 提供商问题

### 我应该首先选择哪个人工智能提供商？

选择您已经信任并可以在实际会话之前进行验证的提供商。对于大多数用户来说，这意味着从现有的 OpenAI、Anthropic、Claude 或 Codex 帐户开始。

### 我可以准备多个提供商路径吗？

是的。在配额、网络访问或帐户状态可能发生变化的面试或会议之前，保留备份提供商路径非常有用。
