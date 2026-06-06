---
title: 清理文字记录和填充词
description: 配置 ExtraBrain 记录清理、默认填充词、自定义填充词以及清理如何影响分析提示。
sidebar:
  label: 转录本清理
  order: 6
lastUpdated: 2026-04-30
---

成绩单清理会在成绩单卡和分析输入之前删除常见的填充词。在 **设置 -> 音频** 中找到它。

![ExtraBrain 音频设置专注于转录清理控制](/assets/screenshots/help/dark/settings-transcript-cleanup.png)

## 清理的作用是什么

| 控制 | 行为 |
| --- | --- |
| 删除填充词 | 在成绩单卡和分析之前去除填充物。 |
| 附加填充词 | 添加您自己的逗号分隔填充术语。 |
| 默认预览 | 显示内置字 ExtraBrain 已删除。 |

默认情况下启用清理。它可以跳过仅填充的片段并删除内联填充符，例如“呃”或“嗯”，因此实时转录上下文对于您和模型来说都更容易阅读。

## 何时定制

当您的环境重复转录无用的短语、重复的言语习惯或会议室工件时，添加自定义填充词。保持列表范围窄。删除有意义的单词可能会降低文字记录的准确性。

## 有关的

- [配置 ExtraBrain 音频设置](/zh/help/settings/audio-settings/)
- [开始录音并要求分析](/zh/help/using-extrabrain/start-recording-and-analysis/)
- [查看和删除会话历史记录](/zh/help/sessions-history/view-delete-session-history/)

## 常见问题

### 清理会更改保存的历史记录吗？

清理会影响成绩单卡和分析输入。保存的会话历史记录反映了应用程序中显示的已处理的记录条目。

### 我应该添加每个我不喜欢的重复单词吗？

不。只添加那些一直是噪音的单词。如果某个词可以在技术讨论中有意义，请将其忽略。
