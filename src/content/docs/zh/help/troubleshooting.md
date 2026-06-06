---
title: 故障排除
description: 修复 ExtraBrain 麦克风、屏幕录制、系统音频、API 键、Deepgram、屏幕截图、隐藏窗口和会话历史记录问题。
sidebar:
  order: 6
lastUpdated: 2026-04-29
---

当 ExtraBrain 未捕获音频、无法验证提供程序、错过屏幕截图或在实时会话期间难以恢复时，请使用此页面。

![ExtraBrain 排除麦克风、屏幕和系统音频访问故障的权限步骤](/assets/screenshots/help/dark/onboarding-permissions.png)

## 要点

ExtraBrain 故障排除是 6 个最常见拦截器的恢复路径：麦克风权限、屏幕录制权限、系统音频、提供商验证、Deepgram 验证和窗口可见性。

- 大多数捕获问题始于 macOS 隐私和安全，然后需要退出并重新打开 ExtraBrain。
- 提供程序故障通常涉及所选模型、API 密钥、订阅访问、基本 URL、配额或网络访问。
- 屏幕截图分析需要活动会话、屏幕录制权限和预期的捕获模式。
- 在录制停止之前，无法删除活动会话。

## 需要麦克风许可

如果麦克风捕获未开始：

1. 打开 **系统设置 -> 隐私和安全 -> 麦克风**。
2. 启用 ExtraBrain。
3. 如果 macOS 询问，请退出并重新打开 ExtraBrain。
4. 开始一个简短的测试会话。

请参阅[授予 macOS 权限](/zh/help/getting-started/macos-permissions/)。

## 屏幕录制或系统音频不起作用

屏幕录制控制屏幕截图和屏幕上下文。系统音频控制会议、通话、视频或共享音频转录（如果支持）。

检查警告芯片，例如“麦克风已停止”、“系统音频已停止”或“音频已停止”。然后重新打开 macOS 隐私和安全设置，授予访问权限，并根据需要重新启动 ExtraBrain。

## API 密钥验证失败

对于 OpenAI、Anthropic 或自定义端点：

- 确认密钥是当前的
- 删除多余的空格
- 确认所选型号可供该帐户使用
- 确认自定义端点具有基本 URL 和模型名称
- 检查代理或组织限制

然后在 **设置 -> LLM 提供商** 中再次验证。

## Deepgram 验证失败

Deepgram 需要有效的 Deepgram API 密钥。如果验证失败，请粘贴新密钥，重试验证，或从入门或**设置 -> 音频**切换回本地 Parakeet。

## 屏幕截图未出现在分析中

检查：

- 会话处于活动状态
- 已授予屏幕录制权限
- **设置 -> 屏幕截图** 中的捕获模式符合您的期望
- 屏幕截图条目出现在成绩单面板中

屏幕截图是本地会话工件。当您要求云 LLM 提供商进行分析时，可能会发送屏幕截图派生的上下文。

## 主窗口被隐藏或难以点击

如果覆盖层被隐藏或点击使交互变得困难：

1. 使用切换窗口快捷方式。
2. 在 **设置 -> 隐私** 中禁用点击。
3. 如果您需要可见的恢复路径，请重新启用 Dock 或菜单栏可见性。

## 会话历史记录删除已禁用

无法删除活动会话。先停止录制，然后返回**设置 -> 会话**并删除会话。

## 相关指南

- [首次设置ExtraBrain](/zh/help/getting-started/first-run-setup/)
- [连接人工智能提供商](/zh/help/providers/connect-ai-provider/)
- [选择 Parakeet 或 Deepgram 转录](/zh/help/providers/transcription-parakeet-vs-deepgram/)
- [隐私控制](/zh/help/privacy-security/privacy-controls/)

## 疑难解答问题

### 如果 ExtraBrain 没有录音，我应该首先检查什么？

检查麦克风权限、系统音频权限、所选音频设备以及会话是否已开始或停止。

### 如果分析失败我首先应该检查什么？

检查所选的 AI 提供商、API 密钥或订阅状态、自定义端点字段以及当前会话是否有要分析的记录或屏幕截图上下文。
