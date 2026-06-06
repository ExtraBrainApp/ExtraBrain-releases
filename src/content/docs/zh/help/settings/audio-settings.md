---
title: 配置 ExtraBrain 音频设置
description: 在 ExtraBrain 中设置转录提供程序、Deepgram API 键、麦克风设备、转录清理、语音触发器和系统音频权限。
sidebar:
  label: 音频设置
  order: 5
lastUpdated: 2026-04-30
---

使用 **设置 -> 音频** 选择转录行为和麦克风输入。

![ExtraBrain 带有转录提供程序和麦克风控制的音频设置](/assets/screenshots/help/dark/settings-audio.png)

## 音频控制

| 控制 | 它改变了什么 |
| --- | --- |
| 语音转文本提供商 | 本地 Parakeet 或 Deepgram 云转录。 |
| Deepgram API 键 | 仅当选择 Deepgram 时才需要。 |
| 音源 | 首选麦克风输入。 |
| 语音触发 | 用于在活动会话期间开始分析的口头短语控制。 |
| 转录本清理 | 在成绩单卡和分析之前删除填充词。 |
| 系统音频权限 | macOS 权限流程，用于在需要时捕获 app/system 音频。 |

## 笔记

- 音频设备更改适用于新会话。
- 本地 Parakeet 将转录保持在本地。
- Deepgram 将音频发送到 Deepgram 进行转录。
- ExtraBrain 可能需要 macOS 麦克风和系统音频权限才能进行录音。

## 有关的

- [选择 Parakeet 或 Deepgram 转录](/zh/help/providers/transcription-parakeet-vs-deepgram/)
- [授予 macOS 权限](/zh/help/getting-started/macos-permissions/)
- [清理成绩单和填充词](/zh/help/settings/transcript-cleanup-filler-words/)
- [使用语音触发短语](/zh/help/settings/voice-trigger/)

## 常见问题

### 为什么 ExtraBrain 说没有找到设备？

macOS 可能尚未授予麦克风权限，或者所选输入可能不可用。授予权限，重新连接麦克风，然后开始新会话。

### 切换转录提供程序是否会影响当前会话？

在会话开始之前应用提供商和设备更改是最安全的。在重大音频更改后停止录制并开始新的会话。

