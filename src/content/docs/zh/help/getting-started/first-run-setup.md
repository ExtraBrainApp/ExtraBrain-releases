---
title: 首次设置 ExtraBrain
description: 通过授予权限、选择转录并连接 AI 提供商，完成 macOS 上的 ExtraBrain 入职。
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

首次运行设置从启动到可用的实时会话获取 ExtraBrain。入职流程包括欢迎、macOS 权限、转录提供者、AI 提供者和完成。

![ExtraBrain 入门欢迎屏幕](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. 开始入职

打开 ExtraBrain 并从欢迎屏幕继续。在完成权限和提供商设置时保持应用程序打开。

## 2.授予macOS权限

ExtraBrain 需要获得许可才能听到和看到您选择使用的上下文：

- 用于语音音频的麦克风。
- 屏幕截图和屏幕上下文的屏幕录制。
- 用于通话、会议、视频或共享音频转录（如果支持）的系统音频。

如果 macOS 将权限保持在待处理或拒绝状态，请参阅[授予 macOS 权限](/zh/help/getting-started/macos-permissions/) 了解恢复步骤。

## 3. 选择转录

选择一种转录模式：

- 本地 Parakeet 在您的 Mac 上运行，不需要 API 密钥。
- Deepgram 使用云转录并需要 Deepgram API 密钥。

![入职时的转录提供商选择](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4. 连接人工智能

选择用于实时分析的 AI 提供商系列和连接方法 ExtraBrain。公共提供程序模式包括 OpenAI、Anthropic、Claude 订阅、Codex 订阅和自定义 OpenAI-compatible 端点。

![入职时的人工智能提供商选择器](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

入门中显示的本地模型选项已禁用，不应被视为可用的公共设置。

## 5. 进行简短测试

在真正的面试或会议之前：

- 开始录音
- 确认出现成绩单条目
- 如果屏幕上下文很重要，请捕获一张屏幕截图
- 运行一项分析
- 确认答案来自您期望的提供商

## 有关的

- [选择 Parakeet 或 Deepgram 转录](/zh/help/providers/transcription-parakeet-vs-deepgram/)
- [连接人工智能提供商](/zh/help/providers/connect-ai-provider/)
- [键盘快捷键](/zh/help/settings/keyboard-shortcuts/)

## 设置问题

### 首次运行设置后我可以更改提供商吗？

是的。您可以在 **设置 -> 音频** 中更改转录，并在 **设置 -> LLM 提供商** 中更改 AI 提供商。更改任一设置后运行简短测试。

### 如果入职无法继续，我该怎么办？

检查 macOS 权限、提供程序验证和必填字段。 Deepgram 需要有效密钥，而本地 Parakeet 可以在没有 API 密钥的情况下继续。
