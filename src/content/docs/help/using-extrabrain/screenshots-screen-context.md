---
title: Use Screenshots And Screen Context
description: Capture screen context in ExtraBrain, choose active-window or full-screen mode, and include screenshots in analysis.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

Screenshots help ExtraBrain understand code, prompts, diagrams, slides, terminals, browser pages, and other visual context.

![Screenshot entry in an ExtraBrain transcript](/assets/screenshots/help/dark/main-screenshot-entry.png)

## Capture Modes

Open **Settings -> Screenshot** to choose how screenshots work.

![Screenshot settings tab](/assets/screenshots/help/dark/settings-screenshot.png)

| Setting | Use It When |
| --- | --- |
| Active window | You want screenshots scoped to the current app window. |
| Full screen | You need broader desktop context. |
| Capture before analysis | You want ExtraBrain to automatically capture a screenshot before running analysis. |

## During A Session

1. Start recording.
2. Click **Capture**.
3. Confirm the screenshot entry appears in the transcript panel.
4. Click **Ask** to include current context in analysis.

If a screenshot does not appear, confirm the session is active and macOS Screen Recording permission is granted.

## Delete Screenshots

Use screenshot deletion when you captured the wrong context or do not want a screenshot kept in the local session record.

## Data Flow

Screenshots are stored locally as session artifacts. When you ask a cloud provider for analysis, screenshot-derived context may be sent to the selected provider.

## Related

- [Configure screenshot settings](/help/settings/screenshot-settings/)
- [Privacy controls](/help/privacy-security/privacy-controls/)
- [Grant macOS permissions](/help/getting-started/macos-permissions/)

## Screenshot Questions

### Should I use active-window or full-screen capture?

Use active-window capture when you want narrower context from the current app. Use full-screen capture only when the broader desktop view is relevant and acceptable for the session.

### Why are screenshots not appearing in analysis?

Check that recording is active, Screen Recording permission is granted, and a screenshot entry appears in the transcript panel before analysis starts.
