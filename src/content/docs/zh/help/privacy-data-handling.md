---
title: 隐私和数据处理
description: 查看有关本地存储、提供商数据流、屏幕截图、Deepgram 音频和隐私控制的 ExtraBrain 隐私指南。
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

本隐私概述指向当前详细的隐私指南，并总结了最重要的数据流区别。

![ExtraBrain 隐私设置选项卡](/assets/screenshots/help/dark/settings-privacy.png)

## 要点

ExtraBrain 隐私由您选择的转录、屏幕截图、提示、模型请求、提供者凭据和本地会话历史记录的数据路径控制。

- 本地 Parakeet 转录可以在 Mac 上保持语音到文本的工作。
- 本地Gemma 4安装后可以将AI提示保留在本地并与Mac兼容。
- 当您要求 ExtraBrain 使用外部模型提供程序时，外部模型提供程序可以接收脚本文本、屏幕截图派生的上下文、提示和注释。
- 可选的 Deepgram 可以在配置时接收音频以进行云转录。

- [ExtraBrain 如何处理数据](/zh/help/privacy-security/how-extrabrain-handles-data/)
- [隐私控制](/zh/help/privacy-security/privacy-controls/)
- [比较应用程序定价和提供商成本](/zh/pricing/)

ExtraBrain 在 Mac 上存储设置、API 密钥、本地会话历史记录和本地 Parakeet 转录数据。当您使用云 LLM 提供商时，相关文本、转录上下文、屏幕截图派生上下文和提示可能会发送到您选择的提供商。当您选择 Deepgram 时，音频将发送到 Deepgram 进行转录。可以禁用匿名使用共享。

## 隐私清单

- 当音频转录应保留在 Mac 上时，请使用本地 Parakeet。
- 在发送敏感文字记录或屏幕截图派生的上下文之前，请检查您选择的 LLM 提供商。
- 如果您不希望共享使用情况数据，请禁用匿名使用情况共享。
- 删除您不再需要的本地会话历史记录。
- 在使用人工智能辅助之前，请遵循面试、工作场所、学校和客户政策。

## 隐私问题

### ExtraBrain 是否将所有内容发送到服务器？

不会。ExtraBrain 将设置、API 密钥和本地会话历史记录存储在 Mac 上。仅当您选择的工作流程向云提供商发送内容时，云提供商才会收到上下文。

### 屏幕截图上下文可以离开我的 Mac 吗？

是的，当您要求云 LLM 提供商进行分析时，可能会发送屏幕截图派生的上下文。使用隐私控制和提供商选择来匹配会话。
