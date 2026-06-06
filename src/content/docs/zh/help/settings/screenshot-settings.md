---
title: 在 ExtraBrain 中配置屏幕截图设置
description: 选择活动窗口或全屏屏幕截图捕获，配置分析前捕获行为，并了解 ExtraBrain 中的屏幕上下文数据流。
sidebar:
  label: 截图设置
  order: 8
lastUpdated: 2026-04-30
---

使用 **设置 -> 屏幕截图** 控制 ExtraBrain 如何捕获屏幕上下文。

![ExtraBrain 带有捕获模式控件的屏幕截图设置](/assets/screenshots/help/dark/settings-screenshot.png)

## 截图控件

| 环境 | 行为 |
| --- | --- |
| 活动窗口 | 尽可能捕获当前活动窗口。 |
| 全屏 | 捕捉更广泛的屏幕背景。 |
| 先捕获后分析 | 在分析开始之前自动截取屏幕截图。 |

## 选择模式

当您希望 ExtraBrain 专注于您正在讨论的应用程序或浏览器窗口时，请使用活动窗口捕获。当相关上下文跨越多个可见区域时，请使用全屏捕获。当屏幕上下文通常是问题的一部分并且您不想手动按“捕获”时，请使用“分析前捕获”。

当您要求分析时，屏幕截图和屏幕截图衍生的上下文可用于发送给您选择的人工智能提供商的提示中。

## 有关的

- [使用屏幕截图和屏幕上下文](/zh/help/using-extrabrain/screenshots-screen-context/)
- [授予 macOS 权限](/zh/help/getting-started/macos-permissions/)
- [隐私控制](/zh/help/privacy-security/privacy-controls/)
- [ExtraBrain 如何处理数据](/zh/help/privacy-security/how-extrabrain-handles-data/)

## 常见问题

### 为什么没有出现屏幕截图？

检查 macOS 屏幕录制权限，确认会话处于活动状态，并验证所选的捕获模式适合您尝试捕获的应用程序。

### 我应该启用分析前捕获吗？

当屏幕上下文几乎总是相关时启用它。当您通常需要仅进行转录本分析时，请将其关闭。
