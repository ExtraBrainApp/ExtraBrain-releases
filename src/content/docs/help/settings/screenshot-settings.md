---
title: Configure Screenshot Settings In ExtraBrain
description: Choose active-window or full-screen screenshot capture, configure capture-before-analysis behavior, and understand screen context data flow in ExtraBrain.
sidebar:
  label: Screenshot Settings
  order: 8
lastUpdated: 2026-04-30
---

Use **Settings -> Screenshot** to control how ExtraBrain captures screen context.

![ExtraBrain screenshot settings with capture mode controls](/assets/screenshots/help/dark/settings-screenshot.png)

## Screenshot Controls

| Setting | Behavior |
| --- | --- |
| Active window | Captures the current active window when possible. |
| Full screen | Captures broader screen context. |
| Capture before analysis | Takes a screenshot automatically before analysis starts. |

## Choosing A Mode

Use active-window capture when you want ExtraBrain to focus on the app or browser window you are discussing. Use full-screen capture when the relevant context spans multiple visible areas. Use capture-before-analysis when screen context is usually part of the question and you do not want to press Capture manually.

Screenshots and screenshot-derived context can be used in prompts sent to your selected AI provider when you ask for analysis.

## Related

- [Use screenshots and screen context](/help/using-extrabrain/screenshots-screen-context/)
- [Grant macOS permissions](/help/getting-started/macos-permissions/)
- [Privacy controls](/help/privacy-security/privacy-controls/)
- [How ExtraBrain handles data](/help/privacy-security/how-extrabrain-handles-data/)

## Common Questions

### Why are screenshots not appearing?

Check macOS screen recording permission, confirm a session is active, and verify the selected capture mode fits the app you are trying to capture.

### Should I enable capture-before-analysis?

Enable it when screen context is almost always relevant. Leave it off when you usually want transcript-only analysis.
