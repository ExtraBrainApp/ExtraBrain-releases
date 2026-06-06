---
title: 在 ExtraBrain 中使用语音触发短语
description: 配置 ExtraBrain 语音触发短语、监听时、短语管理和转录处理。
sidebar:
  label: 语音触发
  order: 7
lastUpdated: 2026-04-30
---

语音触发让 ExtraBrain 在活动会话期间听到配置好的短短语时开始分析。在 **设置 -> 音频** 中找到它。

![ExtraBrain 音频设置专注于语音触发控制](/assets/screenshots/help/dark/settings-voice-trigger.png)

## 它是如何运作的

| 细节 | 行为 |
| --- | --- |
| 仅活动会话 | ExtraBrain 仅在录音处于活动状态时侦听触发短语。 |
| 短语列表 | 您可以使用默认短语或添加您自己的短语。 |
| 转录本清理 | 匹配的触发短语将从记录历史记录中删除，并在触发后从分析输入中排除。 |
| 分析行为 | 该短语的作用就像用于开始分析的语音控制。 |

## 短语提示

- 使用正常对话中不太可能出现的短语。
- 避免参与者自然会说的常用单词或短语。
- 在实时依赖该短语之前，先在简短的会话中测试该短语。
- 保持隐私期望与录音相同：麦克风捕获必须处于活动状态才能进行触发检测。

## 有关的

- [配置 ExtraBrain 音频设置](/zh/help/settings/audio-settings/)
- [ExtraBrain 如何处理数据](/zh/help/privacy-security/how-extrabrain-handles-data/)
- [查看和删除会话历史记录](/zh/help/sessions-history/view-delete-session-history/)

## 常见问题

### 录音停止时语音触发器是否监听？

否。语音触发器仅在活动会话期间监听。

### 触发短语是否保存在文字记录中？

匹配的短语将从转录历史记录中删除，并在触发后从分析输入中排除。
