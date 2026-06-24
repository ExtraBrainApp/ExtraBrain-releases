---
title: "When Cluely Stopped Working, This Is the Backup Plan I Built"
seoTitle: "Cluely Not Working? Troubleshooting Steps and ExtraBrain Backup Plan"
description: "Cluely not working? Try these audio, permission, update, and backup checks before your next interview or meeting."
publishDate: 2026-04-18
author: "ExtraBrain"
tags:
  - Cluely
  - AI Interview Assistant
  - Interview Prep
  - Troubleshooting
draft: false
ogImage: "/assets/blog-covers/26-reducing-interview-panic.webp"
ogImageAlt: "A calm interview preparation workspace for handling AI assistant problems before a live session"
---

When Cluely stops working right before an interview, the problem is not only technical.
It breaks your focus, makes you second-guess your setup, and turns the final minutes before a call into a scramble.

I have seen the same pattern with live AI interview tools: audio disappears, transcription stalls, the app gets stuck connecting, or a permission prompt appears at the worst possible time.
The fix is rarely one magic setting.
The safer approach is to troubleshoot in order, decide when to stop, and keep a backup workflow ready.

This guide walks through the checks I would run when Cluely is not working, the signs that the issue may not be local to your machine, and how I would prepare [ExtraBrain](https://extrabrain.app) as a backup AI interview assistant for Mac.

## Quick triage when Cluely is not working

Before reinstalling anything, slow down and identify the failure mode.
A launch problem, an audio problem, a transcription problem, and a connection problem each point to a different cause.

Start by writing down exactly what you see.
That sounds basic, but it saves time if you need to compare reports, contact support, or recreate the issue later.

### Common symptoms to capture

Look for specific clues instead of describing the problem as "broken."

- The app does not launch.
- The app opens but stays on a loading screen.
- The microphone is not detected.
- Audio input is visible, but transcription never appears.
- Transcription appears late, incomplete, or out of order.
- The app says it cannot connect to a server.
- The meeting platform works, but the assistant does not hear anything.

If there is an error message, copy it exactly.
If there is no message, take a screenshot of the state you are stuck in.

### Decide whether this is urgent

If your interview or meeting starts in less than 30 minutes, do not spend the whole window debugging.
Use the first 10 minutes for the highest-probability fixes, then switch to your fallback plan.

If you have more time, you can test deeper causes such as reinstalling, updating your operating system, or comparing behavior across multiple meeting apps.

## Why Cluely may stop working

Most "not working" issues fall into a few buckets.
The frustrating part is that several of them can look similar from the outside.

### Microphone permissions changed

Audio permission issues are one of the most common causes of live assistant failures.
An operating system update, app reinstall, browser update, or privacy setting change can remove microphone access without making the cause obvious.

Check whether Cluely still has microphone permission in your system settings.
Then confirm the correct microphone is selected inside the app and inside the meeting platform.

If you use a USB headset, unplug it and reconnect it.
If you use an external hub, try a direct port.
If you use Bluetooth headphones, test with the built-in microphone once so you can separate headset issues from app issues.

### The meeting app owns the audio path

Sometimes the meeting app works perfectly while the assistant cannot hear anything.
That can happen when Zoom, Google Meet, Teams, a browser, or another audio utility grabs the input first.

Quit unnecessary audio apps before testing again.
Then restart the meeting platform and the assistant in a clean order.

A simple order that often helps is: quit both apps, connect the microphone, open the meeting platform, confirm audio works, then open the assistant.

### The app is stuck in a bad local state

A live assistant can appear to be running while its internal session is stuck.
That may look like an endless loading state, a frozen transcript, or a connection indicator that never changes.

Fully quit the app instead of only closing the window.
On macOS, check that it is not still running in the menu bar or dock.
Then reopen it and start a fresh session.

If the problem returns immediately, capture the behavior before reinstalling.
A reinstall can clear local state, but it can also erase useful clues.

### Network or service connection issues

If Cluely depends on a remote service for part of its workflow, a network block or service-side issue can break functionality even when your microphone is fine.

Test another network if possible.
A phone hotspot can quickly tell you whether your office, school, VPN, firewall, or DNS setup is involved.

If the assistant works on a hotspot but not on your normal network, the issue may be network policy rather than the app itself.

### Work or school device restrictions

Managed laptops can block screen capture, microphone access, local background processes, or outbound network calls.
These restrictions can change after security updates.

If you are on a work or school device, check whether a device management policy recently changed.
Also confirm that your intended use of any AI assistant, transcription tool, screenshot tool, or meeting copilot is allowed by your employer, school, interview platform, or meeting organizer.

## Step-by-step fixes to try first

The goal is to test the most likely causes quickly without destroying your setup.
Work through these in order.

### 1. Restart the live workflow

Quit Cluely completely.
Quit your meeting app or browser tab.
Disconnect and reconnect your microphone.
Reopen the meeting app, confirm audio input, then reopen Cluely.

This clears many stuck session states without changing files, permissions, or accounts.

### 2. Recheck microphone and screen permissions

Open your system privacy settings and confirm the app has the permissions it needs.
For an interview assistant, the relevant areas are usually microphone access, screen recording or screen capture access, and sometimes accessibility permissions.

If you change a permission, restart the app afterward.
Some permissions do not take effect until the app is relaunched.

### 3. Test audio outside the assistant

Record a short voice memo or use your meeting platform's audio test.
If the microphone fails there too, the problem is not specific to Cluely.

If audio works everywhere else, the issue is more likely app configuration, permissions, or the assistant's session state.

### 4. Check for app and operating system updates

Outdated software can break after browser, meeting platform, or operating system changes.
Check for a Cluely update and check your operating system version.

Do not update everything five minutes before an interview unless you have no choice.
Updates can fix one issue and introduce a new permission prompt.

### 5. Reinstall only after saving details

If restart, permissions, audio tests, and updates do not help, reinstalling can be reasonable.
Before you do it, save the exact error messages, screenshots, and the version you were using.

After reinstalling, test with a low-stakes call before depending on it in a real interview.

## When troubleshooting is no longer worth it

There is a point where more debugging becomes less useful than preparing a backup.
That point arrives earlier than most people think.

If Cluely still does not work after the basic checks, ask three questions.

- Is the issue blocking my next interview or meeting?
- Can I reproduce it reliably?
- Do I have a second tool ready if this happens again?

If the answer to the first question is yes and the third question is no, stop trying random fixes.
Build the backup.

### Contact support with useful context

If you contact Cluely support, send a concise report.
Include your device, operating system version, app version, meeting platform, microphone type, error messages, and the steps you already tried.

A useful support request is faster to answer than a vague one.
It also helps you avoid repeating the same troubleshooting loop.

### Check whether others report the same issue

Search recent user discussions, status updates, and community reports.
If other people describe the same symptoms at the same time, the problem may not be your laptop.

That does not mean you should ignore local checks.
It means you should avoid spending hours changing settings for a service-side or release-related problem.

## The backup plan I would prepare with ExtraBrain

A backup tool should not be something you install for the first time during the final countdown.
It should be tested before you need it.

ExtraBrain is a free, local-first desktop AI interview assistant and meeting copilot for Mac.
It supports live transcription, screen-aware context, local Parakeet transcription, local Gemma 4 on-device AI where installed and compatible, bring-your-own AI providers, and clear privacy controls.

That makes it useful as a backup when another live assistant becomes unreliable.
It is especially relevant if your interviews include coding rounds, system design discussions, behavioral answers, product cases, customer calls, lectures, or research meetings.

### Why a local-first backup helps

When a tool fails, you want fewer unknowns.
A local-first setup can reduce dependency on external services when configured with local Parakeet transcription and local Gemma 4 on-device AI where installed and compatible.

That posture can keep transcription and AI prompts local.
If you choose external providers, selected prompts, transcript text, screenshots, audio, or context may leave your device depending on your configuration.

This distinction matters.
A backup plan should include privacy settings, not just app installation.

### What to test before relying on it

Do one realistic rehearsal with the same equipment and meeting platform you will use later.

Check these items:

- The microphone is detected.
- Live transcription appears at a usable pace.
- Screen context works for the material you expect to discuss.
- Your chosen AI provider is configured correctly.
- Local mode works if you plan to use local Parakeet and local Gemma 4.
- You know how to pause, stop, and delete session history if needed.
- Your planned use is allowed by the relevant interview, employer, school, platform, or meeting rules.

This takes less time than emergency troubleshooting.
It also gives you confidence before the stakes are high.

### How I would use ExtraBrain responsibly

ExtraBrain can help structure answers, generate follow-up questions, summarize live context, and review transcripts after a session.
That does not remove your responsibility to be honest and follow rules.

Use it only where AI assistance, transcription, screenshots, and notes are allowed.
If a platform, employer, interviewer, teacher, or meeting organizer forbids those tools, do not use them there.

## What to look for in any Cluely alternative

If Cluely is not working, the best alternative is not automatically the tool with the longest feature list.
The best alternative is the one that works reliably in your actual environment.

### Reliability during live sessions

A live interview assistant has to survive real conditions.
That means your laptop, your headset, your meeting platform, your network, and your privacy settings.

A demo can look impressive, but a realistic rehearsal tells you more.
Test the tool while screen sharing, talking aloud, switching windows, and using the same browser or meeting app you expect to use.

### Audio capture and transcription quality

If the assistant cannot hear the conversation, every other feature becomes less useful.
Prioritize microphone stability and transcription reliability.

Also test accents, background noise, speaker changes, and longer sessions.
Short demos may not expose the problems that show up during a full interview.

### Screen-aware context

For coding interviews, system design rounds, product cases, and technical debugging conversations, screen context can matter as much as transcript context.
A useful assistant should help reason from what is visible, not only from what is spoken.

ExtraBrain is designed around live desktop context, which is why it can be a practical backup for Mac users who want transcription and screen awareness in the same workflow.

### Provider control and privacy controls

Different users have different privacy requirements.
Some want local-first operation where possible.
Some want to connect Anthropic, OpenAI, custom OpenAI-compatible endpoints, Claude Subscription, or Codex Subscription.
Some want to avoid external provider requests for sensitive sessions.

Choose a tool that makes the data flow understandable.
You should know when transcripts, screenshots, prompts, audio, or context stay local and when they are sent to a provider.

## A practical recovery checklist

Use this checklist when Cluely fails close to an interview or important meeting.

1. Save the exact error message or screenshot.
2. Quit the assistant and meeting app completely.
3. Reconnect your microphone or headset.
4. Confirm microphone access in system privacy settings.
5. Confirm audio works in the meeting platform.
6. Reopen the assistant and start a fresh session.
7. Test another network if connection errors continue.
8. Check for recent updates or known reports.
9. Stop debugging if the interview is close.
10. Switch to a tested backup workflow.

The last step is the most important.
A backup plan is not pessimism.
It is how you protect your preparation from a tool failure.

## Lessons from a broken live assistant

The main lesson is that reliability beats novelty under pressure.
A tool can be clever, popular, or feature-rich, but it still has to work at the exact moment you need it.

The second lesson is that audio and permissions deserve more attention than most people give them.
Many failures that feel like AI problems are really microphone, operating system, browser, or network problems.

The third lesson is that one tool should not be your entire interview plan.
If you depend on live assistance, practice with a fallback before the day of the interview.

For Mac users, ExtraBrain is worth preparing as that fallback because it combines live transcription, screen-aware context, local-first options, bring-your-own providers, and post-session review in a desktop workflow.

## FAQ

### Why is Cluely not working after I reinstall it?

A reinstall can clear local app files, but it will not fix every cause.
Microphone permissions, operating system privacy settings, network restrictions, browser conflicts, service-side problems, and managed-device policies can all remain after a reinstall.

### What should I do if Cluely stops working right before an interview?

Run the fastest checks first: restart the workflow, confirm microphone permissions, test audio in your meeting app, and try a fresh session.
If the interview is close, stop debugging and switch to a backup tool you have already tested.

### Is ExtraBrain a Cluely alternative?

ExtraBrain can be a practical Cluely alternative for Mac users who want a free desktop AI interview assistant with live transcription, screen-aware context, local-first options, bring-your-own provider setup, and review workflows.
Windows and Linux support are planned.

### Can ExtraBrain run fully local?

A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible.
With that setup, no external provider requests are needed for the local workflow.
If you use external providers, selected prompts, transcript text, screenshots, audio, or context may be sent to those providers depending on configuration.

### What should I test before using any AI interview assistant live?

Test microphone capture, transcription, screen context, provider setup, meeting platform compatibility, privacy controls, and session cleanup.
Also confirm that your use of AI assistance, transcription, screenshots, or notes is allowed in that interview, workplace, school, or meeting context.

## See also

- [ExtraBrain](https://extrabrain.app)
- [Cluely freezing and how to prepare an ExtraBrain backup](/blog/cluely-freezing-extrabrain/)
- [Cluely high latency and what to check first](/blog/cluely-high-latency-extrabrain/)
- [Cluely risk and safer AI interview workflows](/blog/cluely-risk-extrabrain/)
- [Ethical AI job search guidance](/blog/ethical-ai-job-search/)
