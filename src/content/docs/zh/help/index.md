---
title: 帮助中心
description: ExtraBrain 帮助 macOS 现场采访、会议、转录、屏幕截图、AI 提供程序、隐私、设置和故障排除。
sidebar:
  label: 概述
  order: 1
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
prev: false
next: false
lastUpdated: 2026-04-29
---

ExtraBrain 是 macOS 首款实时 AI 助手，适用于面试、会议、编码轮次、系统设计讨论、行为面试、故障排除和密集技术对话。使用此帮助中心来设置应用程序、选择提供商、了解隐私以及从常见权限或提供商问题中恢复。

![ExtraBrain 通过文字记录和分析小组扩展了现场会议](/assets/screenshots/help/dark/main-analysis-followups.png)

## 要点

ExtraBrain 是本地优先的 Mac 桌面人工智能面试助手和会议副驾驶，具有免费核心应用程序、可选的 Pro 工作流程控件、实时转录、屏幕截图、提供商支持的分析、本地 Gemma 4 设备上人工智能（已安装且兼容）以及会后审核。

- 使用帮助中心浏览 4 个设置区域：安装、权限、转录和 AI 提供商访问。
- ExtraBrain 目前支持 Mac，包括 Apple Silicon 和 Intel Mac。
- 该应用程序支持本地 NVIDIA Parakeet 转录、可选 Deepgram、OpenAI、Anthropic、Claude 订阅、Codex 订阅和自定义 OpenAI-compatible 端点。
- 隐私取决于所选的数据路径：本地 Parakeet 转录和本地 Gemma 4 可以在 Mac 上保留转录和 AI 提示，而云提供商则接收您选择发送的上下文。

## 从这里开始

- [什么是 ExtraBrain？](/zh/help/getting-started/what-is-extrabrain/) 解释了应用程序、实时转录、屏幕截图、个人资料、后续操作和会话历史记录。
- [首次设置 ExtraBrain](/zh/help/getting-started/first-run-setup/) 逐步完成从欢迎到提供商设置的入职流程。
- [授予 macOS 权限](/zh/help/getting-started/macos-permissions/) 解释麦克风、屏幕录制和系统音频访问。
- [选择 Parakeet 或 Deepgram 转录](/zh/help/providers/transcription-parakeet-vs-deepgram/) 比较本地转录和云转录。
- [连接 AI 提供商](/zh/help/providers/connect-ai-provider/) 涵盖 OpenAI、Anthropic、订阅和自定义端点。

## 实时使用 ExtraBrain

- [开始录制并要求分析](/zh/help/using-extrabrain/start-recording-and-analysis/) 涵盖了主要的实时控制。
- [使用屏幕截图和屏幕上下文](/zh/help/using-extrabrain/screenshots-screen-context/) 解释了捕获模式和屏幕截图上下文。
- [使用后续问题](/zh/help/using-extrabrain/follow-up-questions/) 解释建议的后续问题和自定义问题。
- [分析检测到的主题和问题](/zh/help/using-extrabrain/detected-topics-questions/) 解释成绩单主题和问题卡。

## 隐私、设置和历史记录

- [ExtraBrain 如何处理数据](/zh/help/privacy-security/how-extrabrain-handles-data/) 给出了最清晰的本地与提供商数据流。
- [隐私控制](/zh/help/privacy-security/privacy-controls/) 涵盖覆盖隐藏、点击、应用可见性和使用共享。
- [设置概述](/zh/help/settings/) 链接到每个公共设置选项卡。
- [配置音频设置](/zh/help/settings/audio-settings/) 涵盖转录提供程序、麦克风、语音触发器和转录清理控件。
- [使用 ExtraBrain 配置文件](/zh/help/settings/profiles/) 解释了自动、固定、系统和自定义配置文件行为。
- [键盘快捷键](/zh/help/settings/keyboard-shortcuts/) 列出了默认快捷键以及编辑它们的位置。
- [查看和删除会话历史记录](/zh/help/sessions-history/view-delete-session-history/) 涵盖记录、分析、事实、屏幕截图和删除。
- [激活 ExtraBrain Pro](/zh/help/billing-pro/activate-license/) 解释了应用内购买、许可证激活和停用。
- [比较 ExtraBrain Free 和 Pro](/zh/pricing/free-vs-pro/) 显示了 Pro 解锁的内容。

## 故障排除

如果麦克风权限、屏幕录制、系统音频、API 密钥验证、Deepgram 验证、屏幕截图、隐藏窗口或会话删除未按预期工作，请从[故障排除](/zh/help/troubleshooting/) 开始。

## 常见问题

### ExtraBrain 是否将所有内容发送到服务器？

不会。ExtraBrain 在 Mac 上存储设置、API 密钥、本地会话历史记录和本地 Parakeet 转录数据。当您使用云 LLM 提供商时，相关文本、转录上下文、屏幕截图派生上下文和提示可能会发送到您选择的提供商。当您选择 Deepgram 时，音频将发送到 Deepgram 进行转录。

### ExtraBrain 支持 Windows 或 Linux 吗？

ExtraBrain 今天是 macOS。 Windows 和 Linux 是计划中的，不是当前的公开发布目标。

### 远程设置选项卡是否公开？

否。“远程”选项卡仅供开发使用，未记录为公共功能。
