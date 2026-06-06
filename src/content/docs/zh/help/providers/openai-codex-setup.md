---
title: 连接 OpenAI 或 Codex 订阅
description: 在 ExtraBrain 中设置 OpenAI API 密钥模式或 Codex 订阅模式、验证访问、选择型号并对设置进行故障排除。
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain 支持 OpenAI API 密钥模式和 Codex 订阅模式。

## OpenAI API 按键模式

当您希望 ExtraBrain 通过您管理的 API 密钥调用 OpenAI 时，请使用此模式。

1. 打开 **设置 -> LLM 提供商**。
2. 选择 **OpenAI**。
3. 粘贴您的 API 密钥。
4. 选择可用的模型和推理工作。
5. 验证密钥。
6. 运行简短分析以确认响应来自 OpenAI。

![OpenAI 入职提供者表格](/assets/screenshots/help/dark/onboarding-openai-provider-form.png)

## Codex 订阅模式

当您希望 ExtraBrain 直接使用 ChatGPT Plus 或 Pro 订阅时，请使用 Codex 订阅。此模式不需要 ExtraBrain 中的 API 密钥。

1. 打开 **设置 -> LLM 提供商**。
2. 选择 **Codex 订阅**。
3. 重新检查登录状态。
4. 选择可用的型号。
5. 运行测试分析。

## 故障排除

如果验证失败，请检查密钥是否是最新的、有权访问您选择的模型，并且未被代理或组织策略阻止。对于订阅模式，请确认桌面环境可以访问已登录的提供商工具。

## OpenAI 和 Codex 问题

### Codex 订阅模式是否需要 OpenAI API 密钥？

不需要。 Codex 订阅模式直接使用 ChatGPT Plus 或 Pro 订阅访问，不需要 ExtraBrain 中的 OpenAI API 密钥。

### ExtraBrain 可以向 OpenAI 或 Codex 发送什么？

当选择进行分析时，ExtraBrain 可能会发送提示、转录上下文、屏幕截图派生的上下文以及响应所需的自定义问题。
