# Summary: Channels — Event-Driven Automation

## Key Concepts

**Channels** are MCP servers that push events into a running Claude Code session from external systems like CI pipelines, Telegram, Discord, or any webhook source. Unlike `/loop` (which polls on a timer) or Remote Control (which lets you drive the session), channels react to events as they happen.

## The Automation Triptych

| Pattern      | Trigger            | Tool                       |
| :----------- | :----------------- | :------------------------- |
| Time-driven  | Clock interval     | `/loop` (Lesson 24)        |
| Event-driven | External push      | Channels (this lesson)     |
| Human-driven | You send a message | Remote Control (Lesson 23) |

## How Channels Work

1. External system sends a message or webhook
2. Local channel server (MCP subprocess) receives it
3. Channel pushes a `<channel>` notification to Claude Code over stdio
4. Claude processes the event and optionally replies through the channel

## Setup Steps (Any Channel)

1. Install the plugin: `/plugin install <name>@claude-plugins-official`
2. Configure credentials (token/API key)
3. Restart with `--channels plugin:<name>@claude-plugins-official`
4. Pair your account (for Telegram/Discord)
5. Set allowlist policy to restrict senders

## Key Constraints

- Channels require `--channels` flag on startup; `.mcp.json` alone is not enough
- Events only arrive while the session is open (no backlog)
- Research preview: requires Claude Code v2.1.80+, claude.ai login, Anthropic-approved plugins
- Team/Enterprise plans require admin to enable channels in managed settings

## Security Model

Sender allowlists gate all inbound messages. Gating is on sender identity (not room identity). The allowlist also controls who can approve permission relay requests.

## Supported Adapters

- **Fakechat**: localhost demo on port 8787, no external accounts needed
- **Telegram**: BotFather bot with token configuration
- **Discord**: Developer Portal bot with Message Content Intent enabled
- **Custom**: Build your own with `@modelcontextprotocol/sdk` and the `claude/channel` capability
