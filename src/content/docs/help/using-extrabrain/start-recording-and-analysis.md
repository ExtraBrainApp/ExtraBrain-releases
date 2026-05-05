---
title: Start Recording And Run Analysis
description: Learn ExtraBrain live controls for recording, AI analysis, screenshots, compact mode, expanded mode, and provider data flow.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

The main ExtraBrain window is built around recording, transcript context, screenshots, and analysis.

![ExtraBrain idle main window with live controls](/assets/screenshots/help/dark/main-idle-controls.png)

## Main Controls

| Control | What It Does |
| --- | --- |
| Start Recording | Starts a live session and begins capturing enabled audio sources. |
| Stop | Ends the active session. |
| Ask | Sends the current context to the selected AI provider for analysis. |
| Capture | Adds a screenshot to the active session. |
| Expand or collapse | Toggles between compact and expanded window layouts. |

## Basic Workflow

1. Open ExtraBrain before the call starts.
2. Click **Start Recording**.
3. Wait for transcript entries or detected topic cards.
4. Click **Capture** if screen context matters.
5. Click **Ask** to request analysis.
6. Use follow-ups or type a custom question.

![ExtraBrain recording with detected topic](/assets/screenshots/help/dark/main-recording-topic.png)

## When Buttons Are Disabled

Buttons can be disabled while ExtraBrain is starting, stopping, analyzing, validating provider access, or waiting for required permission and session state. If a button stays disabled, check [Troubleshooting](/help/troubleshooting/).

Before important sessions, review [audio settings](/help/settings/audio-settings/), [screenshot settings](/help/settings/screenshot-settings/), and [profiles](/help/settings/profiles/).

## Privacy Reminder

When you click **Ask** with a cloud LLM provider selected, relevant transcript text, screenshot-derived context, prompts, and custom questions may be sent to that provider.

## Recording Questions

### When should I click Ask?

Click **Ask** after useful transcript context, a detected topic, a detected question, or a screenshot is available. You can also ask with minimal context for a quick prompt.

### What happens when I stop recording?

ExtraBrain ends the active session. Local session history can keep transcripts, analyses, screenshots, facts, and entries unless you delete that session later.
