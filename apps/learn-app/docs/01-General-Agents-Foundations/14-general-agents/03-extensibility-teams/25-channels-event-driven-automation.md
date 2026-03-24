---
slug: /General-Agents-Foundations/general-agents/channels-event-driven-automation
sidebar_position: 25
title: "Channels: Event-Driven Automation"
description: "Push webhooks, chat messages, and alerts into a running Claude Code session with channels; build an alert responder, connect Telegram and Discord, and complete the automation triptych"
keywords:
  [
    channels,
    event-driven,
    webhooks,
    telegram,
    discord,
    claude code,
    automation,
    MCP,
    chat bridge,
  ]
chapter: 14
lesson: 25
duration_minutes: 20

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (AI Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Setting up channels, pushing events into sessions, building alert responders, comparing automation patterns"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA
skills:
  - name: "Channel Setup and Configuration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital-Content-Creation"
    measurable_at_this_level: "Student can install a channel plugin, configure credentials, and start Claude Code with --channels to receive external events"

  - name: "Event-Driven Automation Design"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can distinguish time-driven, event-driven, and human-driven automation patterns and select the right one for a given scenario"

  - name: "Webhook Channel Architecture"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information-Data-Literacy"
    measurable_at_this_level: "Student can explain how a channel MCP server bridges external systems to a running Claude Code session over stdio"

learning_objectives:
  - objective: "Install and run the fakechat demo channel to send messages into a Claude Code session from a browser"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student sends a message in the fakechat UI and observes Claude respond in the terminal"
  - objective: "Send a webhook payload into a running session and observe Claude react to it"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student uses curl to POST a simulated alert and verifies Claude processes it"
  - objective: "Compare time-driven (/loop), event-driven (channels), and human-driven (Remote Control) automation and choose the right pattern for a scenario"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student correctly matches 4 scenarios to the appropriate automation pattern with reasoning"
  - objective: "Describe the setup steps for Telegram and Discord channel adapters"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can list the key steps (create bot, install plugin, configure token, pair account) for either platform"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (channel as MCP push mechanism, fakechat demo flow, webhook receiver pattern, automation triptych comparison); within B1 limit of 10"

differentiation:
  extension_for_advanced: "Build a custom webhook receiver channel using the MCP SDK and test it with --dangerously-load-development-channels; add a reply tool for two-way communication"
  remedial_for_struggling: "Start with fakechat only; skip Telegram/Discord setup until comfortable with the push-event mental model"

# Generation metadata
generated_by: "content-implementer v2.0.0"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
version: "1.0.0"

prerequisites:
  - "Lesson 23: Remote Control (human-driven session access)"
  - "Lesson 24: Scheduled Tasks (time-driven automation with /loop)"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 8
  session_title: "Channels and Event-Driven Automation"
  key_points:
    - "A channel is an MCP server that PUSHES events into your session; this is the opposite of /loop, which PULLS on a timer"
    - "The automation triptych is the lesson's anchor: time-driven (/loop), event-driven (channels), human-driven (Remote Control) cover all three ways work can enter a session"
    - "Channels require --channels on startup; being in .mcp.json is not enough to push events"
    - "Sender allowlists are the security model; every approved channel gates on sender identity, not room identity"
  misconceptions:
    - "Students think channels run in the cloud; they run locally as MCP subprocesses, same as any MCP server"
    - "Students confuse channels with Remote Control; Remote Control lets YOU drive the session, channels let EXTERNAL SYSTEMS push events into it"
    - "Students assume channels persist after the session ends; events only arrive while the session is open"
  discussion_prompts:
    - "What kinds of events in your workflow would benefit from pushing into Claude rather than polling on a timer?"
    - "Why does the security model gate on sender identity rather than room or channel identity?"
  teaching_tips:
    - "The fakechat quickstart is the best live demo: install, restart with --channels, open localhost:8787, type a message, watch Claude react. Takes 2 minutes."
    - "The automation triptych comparison table is the conceptual anchor; have students place their own workflows into the three categories"
    - "If students do not have Telegram or Discord accounts, the fakechat + curl webhook exercises cover the same concepts without external accounts"
  assessment_quick_check:
    - "What flag do you pass to claude to enable a channel on startup?"
    - "Name the three automation patterns from the triptych and give one example of each"
    - "What happens to channel events if you close the Claude Code session?"
---

# Channels: Event-Driven Automation

Your CI pipeline fails at 2:47 AM. Nobody notices until the morning standup at 9:00 AM. Six hours of potential fix time, wasted. You could set up `/loop` to check CI every 5 minutes, but that means Claude polls constantly whether or not anything happened. What you really want is the opposite: when CI fails, it _tells_ Claude, and Claude reacts immediately.

That is what channels do. A channel is an MCP server that pushes events into your running Claude Code session. Instead of Claude asking "did anything happen?" on a timer, external systems say "this just happened" and Claude responds. CI failures, chat messages from Telegram, Discord alerts, webhook payloads from monitoring tools: anything that can send an HTTP request or a chat message can push an event into your session.

In Lesson 23, you learned Remote Control: _you_ drive the session from another device. In Lesson 24, you learned scheduled tasks: Claude checks things on a _timer_. Channels complete the triptych: _external systems_ push events to Claude when something happens. Three patterns, three ways work enters a session.

---

## The Automation Triptych

Before diving into setup, here is the full picture. You now have three distinct automation patterns, each suited to a different trigger:

| Pattern          | Trigger                                | Lesson              | Example                                          |
| :--------------- | :------------------------------------- | :------------------ | :----------------------------------------------- |
| **Time-driven**  | Clock fires on interval                | L24: `/loop`        | "Check the build every 5 minutes"                |
| **Event-driven** | External system pushes event           | L25: Channels       | "When CI fails, tell Claude immediately"         |
| **Human-driven** | You send a message from another device | L23: Remote Control | "From my phone, tell Claude to push the release" |

**When to use which:**

- Something needs checking on a regular schedule? `/loop` (time-driven).
- Something happens unpredictably and Claude should react _when_ it happens? Channels (event-driven).
- You need to steer Claude yourself from another device? Remote Control (human-driven).

Most real workflows combine two or three. You might use a channel to catch CI failures, `/loop` to poll a dashboard, and Remote Control to approve the fix from your phone.

---

## What Is a Channel?

A channel is an MCP server with one extra capability: it can _push_ notifications into your session. Regular MCP servers wait for Claude to call their tools. Channel servers do that too, but they also send unsolicited events whenever something happens in the outside world.

Here is how events flow:

1. **External system** (CI, Telegram bot, monitoring tool) sends a message or webhook
2. **Your channel server** (running locally as an MCP subprocess) receives it
3. **Channel server pushes** a notification to Claude Code over stdio
4. **Claude receives** the event as a `<channel>` tag in the conversation and reacts

The channel server runs on your machine, just like any other MCP server. Claude Code spawns it as a subprocess when you start with the `--channels` flag. Nothing runs in the cloud (the channel server itself is local), and events only arrive while the session is open.

:::note Research Preview
Channels require Claude Code v2.1.80 or later and a claude.ai login (not API keys). They are in research preview: the `--channels` flag syntax may change, and only plugins from an Anthropic-maintained allowlist are supported. On Team and Enterprise plans, an admin must enable channels in managed settings before users can use them.
:::

---

## Hands-On: Your First Channel with Fakechat

Fakechat is an officially supported demo channel that runs a chat UI on localhost. No external accounts, no tokens, no configuration. You type in a browser, the message arrives in your Claude Code session, Claude replies, and the reply appears back in the browser.

### Prerequisites

- Claude Code installed and authenticated with a claude.ai account
- [Bun](https://bun.sh) installed (the pre-built channel plugins are Bun scripts). Check with `bun --version`; if that fails, install it from bun.sh.

### Step 1: Install the Fakechat Plugin

Start a Claude Code session and run:

```
/plugin install fakechat@claude-plugins-official
```

If Claude Code reports the plugin is not found, refresh the marketplace first:

```
/plugin marketplace update claude-plugins-official
```

Then retry the install.

### Step 2: Restart with Channels Enabled

Exit Claude Code, then restart with the `--channels` flag:

```bash
claude --channels plugin:fakechat@claude-plugins-official
```

The fakechat server starts automatically. You should see Claude Code start normally with the channel active.

### Step 3: Send a Message from Your Browser

Open [http://localhost:8787](http://localhost:8787) in your browser. Type a message:

```
hey, what files are in this directory?
```

Watch your Claude Code terminal. The message arrives as a `<channel source="fakechat">` event. Claude reads it, does the work, and sends the reply back to the browser UI.

**What just happened:** You pushed a message into Claude's session from outside the terminal. Claude did not poll for it. The browser pushed, Claude reacted. That is the event-driven pattern.

---

## Simulating Webhooks with curl

Fakechat is a chat bridge (two-way: messages in, replies out). But many real use cases are one-way: a CI system fires a webhook when a build fails, and Claude investigates. You can simulate this right now.

The fakechat server listens on `localhost:8787`. In a separate terminal, send an HTTP POST:

```bash
curl -X POST http://localhost:8787 -d "ALERT: Build failed on main branch. Error: test_auth.py::test_login_redirect FAILED"
```

Back in your Claude Code session, Claude receives the payload and reacts. It might read the test file, check recent commits, or suggest a fix. You did not type anything in the session; the event arrived from outside.

This is exactly how a production webhook channel works. Your CI pipeline, error tracker, or monitoring tool sends an HTTP POST to a local port, and your channel server forwards the payload to Claude.

---

## Telegram and Discord: Real Chat Bridges

Fakechat proves the concept on localhost. For real mobile access, channels support Telegram and Discord as officially maintained adapters. Both follow the same pattern: create a bot, install the plugin, configure your token, pair your account.

### Telegram Setup

1. **Create a bot**: Open [BotFather](https://t.me/BotFather) in Telegram, send `/newbot`, choose a name and username. Copy the token.

2. **Install the plugin** in Claude Code:

   ```
   /plugin install telegram@claude-plugins-official
   ```

   Then run `/reload-plugins` to activate the configure command.

3. **Configure your token**:

   ```
   /telegram:configure <your-bot-token>
   ```

   This saves the token to `~/.claude/channels/telegram/.env`.

4. **Restart with the channel enabled**:

   ```bash
   claude --channels plugin:telegram@claude-plugins-official
   ```

5. **Pair your account**: Open Telegram, send any message to your bot. It replies with a pairing code. Back in Claude Code:
   ```
   /telegram:access pair <code>
   /telegram:access policy allowlist
   ```

Now you can message your Telegram bot from your phone, and the message arrives in your Claude Code session. Claude works on it using your local files, tools, and MCP servers, then replies back through Telegram.

### Discord Setup

1. **Create a bot**: Go to the [Discord Developer Portal](https://discord.com/developers/applications), create a new application, create a bot, copy the token.

2. **Enable Message Content Intent**: In your bot's settings, enable **Message Content Intent** under Privileged Gateway Intents.

3. **Invite the bot** to your server using the OAuth2 URL Generator with the `bot` scope and permissions for View Channels, Send Messages, Read Message History, and Attach Files.

4. **Install the plugin** in Claude Code:

   ```
   /plugin install discord@claude-plugins-official
   ```

   Then run `/reload-plugins`.

5. **Configure your token**:

   ```
   /discord:configure <your-bot-token>
   ```

6. **Restart with the channel enabled**:

   ```bash
   claude --channels plugin:discord@claude-plugins-official
   ```

7. **Pair your account**: DM your bot on Discord. It replies with a pairing code. Back in Claude Code:
   ```
   /discord:access pair <code>
   /discord:access policy allowlist
   ```

### Multiple Channels at Once

You can enable several channels in one session by listing them after `--channels`:

```bash
claude --channels plugin:telegram@claude-plugins-official plugin:discord@claude-plugins-official
```

Claude receives events from both platforms and replies through the channel each message arrived on.

---

## Security: Sender Allowlists

Channels are a potential prompt injection vector: anyone who can reach your channel endpoint can put text in front of Claude. The security model is straightforward.

**Every approved channel maintains a sender allowlist.** Only sender IDs you have explicitly paired can push messages. Everyone else is silently dropped.

Key details:

- **Gating is on sender identity, not room identity.** In a Discord server with 500 people, only _your_ paired account can push events to Claude, not anyone else in the server.
- **The allowlist also gates permission relay.** If a channel supports remote permission approval (letting you approve tool calls from your phone), only allowlisted senders can approve or deny. This is critical: you do not want strangers approving `rm -rf` on your machine.
- **Being in `.mcp.json` is not enough.** A server must also be named in `--channels` to push events. Without the flag, the MCP server connects and its tools work normally, but channel notifications do not arrive.

---

## How Channels Compare to Everything Else

Claude Code has several ways to connect to systems outside the terminal. Here is how channels fit:

| Feature             | Direction                       | What it does                             | Best for                                       |
| :------------------ | :------------------------------ | :--------------------------------------- | :--------------------------------------------- |
| **Channels**        | External pushes IN              | Events arrive in your running session    | Reacting to CI failures, chat messages, alerts |
| **Remote Control**  | You push IN from another device | You drive the session from phone/browser | Steering Claude while away from desk           |
| **Scheduled Tasks** | Claude PULLS on timer           | `/loop` fires prompts at intervals       | Polling dashboards, checking build status      |
| **Standard MCP**    | Claude PULLS on demand          | Claude queries tools during a task       | On-demand data access (databases, APIs)        |
| **Claude in Slack** | Slack triggers cloud session    | `@Claude` mention spawns a web session   | Starting tasks from team conversations         |

Channels fill the gap: pushed events from non-Claude sources into your already-running local session.

---

## When Channels Go Wrong

### 1. Events Are Not Arriving

**What it looks like**: You send a message to your Telegram bot or POST to the webhook, but nothing happens in Claude Code.

**Why it happens**: You forgot `--channels` on startup, or the plugin is not installed. Being in `.mcp.json` alone does not enable channel notifications.

**Fix**: Restart Claude Code with the `--channels` flag and the correct plugin name. Use `/mcp` inside the session to verify the channel server is connected.

### 2. Bot Does Not Respond to Pairing Message

**What it looks like**: You message your Telegram or Discord bot, and it never replies with a pairing code.

**Why it happens**: Claude Code is not running with `--channels`, or the token configuration is wrong.

**Fix**: Verify you ran `/telegram:configure <token>` (or `/discord:configure <token>`) and restarted with `--channels`. Check `~/.claude/channels/telegram/.env` (or discord) to confirm the token is saved.

### 3. Session Ended, Events Lost

**What it looks like**: A CI webhook fired while you were away, but Claude never saw it.

**Why it happens**: Channels only deliver events while the session is open. No session means no delivery, and there is no backlog or retry.

**Fix**: For always-on reception, run Claude Code in a persistent terminal (tmux, as you learned in Lesson 23). Combine channels with the tmux survival trick:

```bash
tmux new -s alert-watcher
claude --channels plugin:telegram@claude-plugins-official
```

Detach with `Ctrl+B`, then `D`. The session stays alive, channels stay active, and events arrive even while your terminal is closed.

### 4. Unauthorized Sender

**What it looks like**: Someone else messages your bot, and you worry about prompt injection.

**Why it happens**: You have not locked down the allowlist.

**Fix**: After pairing, always set the policy to allowlist:

```
/telegram:access policy allowlist
```

Only your paired sender ID can push events. Everyone else is dropped silently.

---

## Building Your Own Channel (Advanced)

The officially supported adapters cover Telegram, Discord, and the fakechat demo. But a channel is just an MCP server with the `claude/channel` capability. If you want to receive events from a system without a plugin, you can build one.

The pattern is simple:

1. Create an MCP server using `@modelcontextprotocol/sdk`
2. Declare `capabilities: { experimental: { 'claude/channel': {} } }` in the constructor
3. Listen for incoming events (HTTP server, polling loop, WebSocket) and call `mcp.notification()` with method `notifications/claude/channel`
4. Register the server in `.mcp.json`
5. Test with `claude --dangerously-load-development-channels server:your-server-name`

A minimal webhook receiver is about 30 lines of TypeScript. The official channels reference at `code.claude.com/docs/en/channels-reference` walks through the complete implementation, including two-way reply tools and permission relay.

---

## What's Next

You now have three automation patterns: time-driven polling with `/loop`, event-driven reactions with channels, and human-driven control with Remote Control. The next section moves from Claude Code to **Claude Cowork**, where these same automation concepts appear in a visual desktop interface designed for knowledge workers who prefer a GUI to a terminal.

---

## Try With AI

**Exercise 1: Run the Fakechat Demo (Predict + Observe)**

Before starting, predict: when you type a message in the fakechat browser UI, does Claude poll for it or does it arrive as a push notification?

Install and run fakechat following the steps in this lesson. Send this message from the browser:

```
list every markdown file in this directory and tell me which one was modified most recently
```

Watch the Claude Code terminal. How did the message arrive? Was your prediction correct?

Now send a second message from the browser _while Claude is still working on the first one_. What happens?

**What you're learning:** The fundamental difference between polling and pushing. Channels push events into the session; Claude does not ask for them. Understanding this distinction is what separates event-driven automation from timer-based polling. The second message tests how channels behave when Claude is busy: the event queues until Claude is idle, similar to how scheduled tasks fire between turns.

**Exercise 2: Simulate a Webhook Alert (Build + Investigate)**

With fakechat running, open a second terminal and simulate a CI failure alert:

```bash
curl -X POST http://localhost:8787 -d "CRITICAL: Production deploy failed. Service health-check returned 503 on /api/v1/status. Last successful deploy: 2 hours ago. Rollback recommended."
```

Watch how Claude reacts in the session. Then send a follow-up:

```bash
curl -X POST http://localhost:8787 -d "UPDATE: Root cause identified. Database migration 047 failed due to column type mismatch. See error log at /var/log/deploy/2026-03-24.log"
```

Observe how Claude incorporates the second event. Does it connect the two alerts?

**What you're learning:** How webhook-style events work in practice. CI pipelines, monitoring tools, and error trackers send HTTP POSTs when something happens. A channel server receives these and forwards them to Claude. You are simulating exactly what a production alerting channel does, without needing actual CI infrastructure.

**Exercise 3: The Automation Triptych Decision (Analyze + Choose)**

Start a Claude Code session and paste this prompt:

```
I have 5 automation scenarios. For each one, tell me whether I should
use time-driven (/loop), event-driven (channels), or human-driven
(Remote Control), and explain why:

1. I want to know immediately when a GitHub Actions workflow fails.
2. I want to check my database backup status every 6 hours.
3. I am at dinner and want to approve a PR that Claude finished reviewing.
4. Our Slack monitoring channel posts alerts when CPU exceeds 90%.
   I want Claude to investigate each alert automatically.
5. I want Claude to summarize my email inbox every morning at 8am.
```

Compare Claude's answers to the triptych table in this lesson. For scenario 4, consider: could you use `/loop` to poll the Slack channel instead of a channel push? What are the tradeoffs?

**What you're learning:** The decision framework for choosing between the three automation patterns. Most students default to `/loop` for everything because it was taught first. This exercise forces you to recognize when event-driven is the better fit (scenarios 1 and 4: unpredictable timing, immediate response needed) versus timer-based (scenarios 2 and 5: regular interval, no urgency) versus human-driven (scenario 3: judgment required).

## Flashcards Study Aid

<Flashcards />
