---
title: 连接 Anthropic 或 Claude 订阅
description: 在 ExtraBrain 中设置 Anthropic API 密钥模式或 Claude 订阅模式、验证访问权限、选择型号以及解决登录问题。
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain 支持 Anthropic API 密钥模式和 Claude 订阅模式。

## Anthropic API 按键模式

当您希望 ExtraBrain 通过您管理的 API 密钥调用 Anthropic 时，请使用此模式。

1. 打开 **设置 -> LLM 提供商**。
2. 选择 **Anthropic**。
3. 粘贴您的 Anthropic API 密钥。
4. 选择型号。
5. 验证密钥。
6. 运行简短的测试分析。

![LLM 提供商设置选项卡，选择了 Anthropic](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude 订阅模式

当您希望 ExtraBrain 直接使用 Claude Pro 或 Max 订阅时，请使用 Claude 订阅。此模式不需要 ExtraBrain 中的 API 密钥。

1. 打开 **设置 -> LLM 提供商**。
2. 选择 **Claude 订阅**。
3. 重新检查登录状态。
4. 选择可用的型号。
5. 运行测试分析。

## 故障排除

如果验证失败，请确认 API 密钥属于正确的 Anthropic 帐户，具有模型访问权限，并且粘贴时不带多余空格。对于订阅模式，请确认您的 Claude 订阅处于活动状态并已在 ExtraBrain 期望的位置登录。

## Anthropic 和 Claude 问题

### Claude 订阅模式是否需要 Anthropic API 密钥？

否。 Claude 订阅模式适用于 Claude Pro 或 Max 订阅访问，不需要 ExtraBrain 内的 Anthropic API 密钥。

### 哪些数据可以发送到 Anthropic 或 Claude？

当选择进行分析时，相关提示、抄本上下文、屏幕截图派生上下文和自定义问题可以根据该提供者模式发送到 Anthropic 或 Claude。
