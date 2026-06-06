---
title: 选择转录提供商
description: 按隐私、设置时间、API 关键要求和数据流比较 ExtraBrain 中的本地 Parakeet 和 Deepgram 转录。
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain 使用本地 NVIDIA Parakeet 或 Deepgram 将实时语音转换为文本。

![入职期间选择的本地转录](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 快速比较

| 选项 | 最适合 | 数据流 | 设置 |
| --- | --- | --- | --- |
| 本地 Parakeet | 大多数用户、隐私敏感会话、最快设置 | 转录在您的 Mac 上运行 | 没有 API 密钥 |
| Deepgram | 已经依赖托管云转录的用户 | 音频发送到 Deepgram | Deepgram API 需要密钥 |

## 本地 Parakeet

当您想要最简单的设置并希望在 Mac 上进行转录时，请选择本地 Parakeet。它需要本地模型存储并在模型运行时使用本地 CPU。

## Deepgram

当云转录适合您的工作流程或您的组织已使用 Deepgram 时，请选择 Deepgram。 Deepgram 需要有效的 API 密钥。

![Deepgram 入职期间的关键字段](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

验证成功后，ExtraBrain 可以在选择 Deepgram 的情况下继续加入。

![Deepgram 入职期间验证成功](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## 隐私说明

本地 Parakeet 使转录保持在本地。 Deepgram 将音频发送到 Deepgram 进行转录。 AI 分析是一个单独的选择，可能会将转录文本或屏幕截图派生的上下文发送到您选择的 LLM 提供商。

## 有关的

- [配置 ExtraBrain 音频设置](/zh/help/settings/audio-settings/)
- [清理成绩单和填充词](/zh/help/settings/transcript-cleanup-filler-words/)
- [使用语音触发短语](/zh/help/settings/voice-trigger/)
- [ExtraBrain 如何处理数据](/zh/help/privacy-security/how-extrabrain-handles-data/)

## 转录问题

### 哪个转录提供商最适合隐私？

当音频应保留在 Mac 上时，本地 Parakeet 是最佳默认值。它不需要 Deepgram API 密钥。

### 我什么时候应该选择Deepgram？

当云转录适合会话时选择 Deepgram，您的组织已使用 Deepgram，或者您更喜欢托管转录并接受将音频发送到 Deepgram。
