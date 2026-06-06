---
title: 使用自定义 OpenAI 兼容端点
description: 使用基本 URL、API 密钥、模型名称、验证和故障排除在 ExtraBrain 中配置自定义 OpenAI-compatible 端点。
sidebar:
  order: 5
lastUpdated: 2026-04-29
---

当您的提供商或代理公开 OpenAI 样式 API 时，请使用自定义 OpenAI-compatible 端点。

![ExtraBrain 自定义 OpenAI-compatible 提供程序设置，带有基本 URL 和模型名称字段](/assets/screenshots/help/dark/settings-custom-provider.png)

## 必填字段

| 场地 | 输入什么 |
| --- | --- |
| 基本网址 | 提供者或代理 API 基本 URL。 |
| API 密钥 | 该端点所需的密钥。 |
| 型号名称 | 端点期望的确切模型标识符。 |

## 设置步骤

1. 打开入职或**设置 -> LLM 提供商**。
2. 选择自定义提供商选项。
3. 输入基本 URL。
4. 输入 API 键。
5. 输入型号名称。
6. 验证配置。
7. 运行简短的测试分析。

## 常见错误

- 当提供者期望时缺少 `/v1`。
- 使用模型显示名称而不是 API 模型标识符。
- 为错误的提供商或代理粘贴密钥。
- 忘记提供商保留、计费和访问规则是由自定义端点运营商控制的。

自定义提供者请求可以包括提示、文字记录上下文、屏幕截图派生的上下文和自定义问题。

## 自定义端点问题

### 是什么让端点成为 OpenAI-compatible？

端点应使用您在 ExtraBrain 中输入的基本 URL、密钥和模型名称接受 OpenAI 样式 API 聊天或响应请求。

### 保存自定义端点后我应该测试什么？

使用不敏感的文字记录或屏幕截图上下文运行简短的分析。确认端点返回响应并且模型名称与您的提供商或代理期望的名称匹配。
