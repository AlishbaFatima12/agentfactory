---
sidebar_class_name: hidden
title: "Summary: Computer Use - Let Claude Control Your Screen"
---

# Summary: Computer Use - Let Claude Control Your Screen

## Key Concepts

- **Computer Use** lets Claude open applications, move the cursor, click, type, and navigate your macOS desktop through screenshots and simulated input.
- It requires **macOS with Apple Silicon**, a **Pro or Max plan**, and the **Claude Desktop app**.
- Two macOS permissions must be granted: **Accessibility** (for clicking, typing, scrolling) and **Screen Recording** (for taking screenshots).

## Tool Priority Hierarchy

Claude always tries the most precise tool first:

1. **Connectors** (Gmail, Slack, Google Drive): fastest, direct API access
2. **Bash**: fast, for command-line tasks
3. **Browser** (Claude in Chrome): medium speed, for web interaction
4. **Computer Use**: slowest, for native apps with no other interface

Computer Use is the fallback, not the default.

## Per-App Permission Tiers

| Tier         | Capability                            | Example Apps                |
| :----------- | :------------------------------------ | :-------------------------- |
| View only    | Screenshots only                      | Browsers, trading platforms |
| Click only   | Click and scroll, no typing           | Terminals, IDEs             |
| Full control | Click, type, drag, keyboard shortcuts | Everything else             |

Tiers are fixed by app category and cannot be changed by the user.

## Safety Boundaries

- Computer Use runs on your **real desktop**, not in a sandbox.
- Anything visible on screen is accessible through screenshots.
- Build a **denied-apps list** before enabling (password managers, banking, health apps).
- Permissions are **session-scoped**: you approve fresh each session.
- Close sensitive applications before starting Computer Use tasks.
- Claude is trained to avoid stock trading, sensitive data input, and facial image scraping.

## When to Use (and When Not To)

- **Use for**: native apps without APIs, iOS Simulator testing, proprietary GUI-only tools, one-off manual tasks
- **Do not use for**: email (connectors), web browsing (Chrome), file operations (Bash), anything with a CLI or API

## Screenshot-Act Loop

Claude follows a cycle: screenshot, analyze UI, decide action, act, screenshot again to verify, repeat. Each cycle takes seconds; complex tasks need dozens of cycles.
