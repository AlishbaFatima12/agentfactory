# OpenClaw Deep Source Code Analysis

**Repository**: https://github.com/openclaw/openclaw
**Version analyzed**: 2026.3.14 (commit depth: 50)
**Codebase size**: ~922,000 lines of TypeScript across `src/`, 75 extensions, 52+ bundled skills
**License**: MIT

---

## 1. Architecture Overview

OpenClaw is a **multi-channel AI gateway** that routes messages from messaging platforms (Telegram, Discord, Slack, WhatsApp, iMessage, Signal, IRC, Matrix, MS Teams, etc.) through an AI agent loop and back. It is fundamentally an **orchestration system**, not a model provider.

### Core Components

```
User Message (Telegram/Discord/Slack/etc.)
    |
    v
[Gateway Server]  ─── WebSocket control plane (port 18789)
    |
    v
[Channel Plugin]  ─── Adapter per platform (src/channels/plugins/)
    |
    v
[Agent Command]   ─── src/agents/agent-command.ts (re-exported via src/commands/agent.ts)
    |
    v
[Pi Agent SDK]    ─── @mariozechner/pi-coding-agent (SessionManager)
    |
    v
[LLM Provider]    ─── Anthropic, OpenAI, Google, OpenRouter, etc.
    |
    v
[Reply Pipeline]  ─── src/auto-reply/ → channel outbound
```

**Key files**:

- Entry point: `src/entry.ts` (CLI bootstrap, respawn for Node flags)
- Gateway server: `src/gateway/server.impl.ts` (265+ files in gateway dir)
- Agent loop: `src/agents/agent-command.ts` → `src/agents/pi-embedded-runner/run.ts`
- System prompt: `src/agents/system-prompt.ts`
- Workspace files: `src/agents/workspace.ts`
- Config: `src/config/` (200+ files, Zod-validated JSON5 schema)
- Plugin system: `src/plugins/registry.ts`

### Build System

- **pnpm** workspace with tsdown bundler (NOT tsc for build)
- **oxfmt** + **oxlint** for formatting/linting (NOT prettier/eslint)
- **vitest** for testing (multiple configs: unit, e2e, gateway, channels, extensions, live)
- Node 22+ required; Bun supported for dev scripts
- Native apps: Swift (macOS/iOS via `apps/` and `Swabble/`), Kotlin (Android via `apps/android/`)

---

## 2. Gateway & WebSocket Control Plane

### Gateway Server (`src/gateway/server.impl.ts`)

The gateway is a **Hono + Express** HTTP server with WebSocket upgrade. It binds to port 18789 by default and exposes:

- **WebSocket control plane**: Clients (CLI, TUI, mobile apps, ACP) connect via WS with token/password auth
- **HTTP endpoints**: `/healthz`, config management, session history, tool invocation, control UI
- **Channel management**: Creates and manages connections to all configured messaging channels

The server startup flow (line 1-200 of `server.impl.ts`):

1. Load config via `loadConfig()` (JSON5 from `~/.openclaw/openclaw.json`)
2. Apply config overrides and legacy migrations
3. Resolve auth (token/password from config, env, or startup wizard)
4. Start plugin runtime, load channel plugins
5. Initialize session stores, cron service, health monitors
6. Attach WS handlers via `attachGatewayWsHandlers()`
7. Start channel adapters (Telegram polling, Discord bot, etc.)

### Client Connection (`src/gateway/client.ts`)

`GatewayClient` is a WS client used by CLI, TUI, ACP, and mobile apps to communicate with the gateway. It handles:

- Authentication handshake (hello/helloOk)
- Event streaming (agent events, session updates)
- Automatic reconnection with backoff

---

## 3. Pi Agent SDK Integration

OpenClaw embeds the **Pi Agent SDK** (`@mariozechner/pi-coding-agent` v0.60.0) as its core agent loop. This is NOT a thin wrapper -- it is deeply integrated.

### Key Dependencies

```json
"@mariozechner/pi-agent-core": "0.58.0",
"@mariozechner/pi-ai": "0.60.0",
"@mariozechner/pi-coding-agent": "0.60.0",
"@mariozechner/pi-tui": "0.60.0"
```

### Agent Run Path

**`src/agents/agent-command.ts`** (the main entry point for agent runs):

- Imports `SessionManager` from `@mariozechner/pi-coding-agent` (line 2)
- Resolves agent config (model, workspace, skills filter)
- Builds the system prompt (more below)
- Calls `runEmbeddedPiAgent()` which delegates to `src/agents/pi-embedded-runner/run.ts`

**`src/agents/pi-embedded-runner/run.ts`** (the actual run loop, ~200+ lines read):

- Manages auth profiles (API key rotation, cooldown, failover)
- Implements retry with backoff across multiple providers
- Has a sophisticated **model fallback** system (up to 160 retry iterations)
- Handles context window overflow with automatic compaction
- Scrubs Anthropic's "magic string trigger refusal" test tokens (line 110-118)
- Tracks token usage across all retry branches

**Notable architecture decision**: The run loop has `OVERLOAD_FAILOVER_BACKOFF_POLICY` with 250ms initial, 1.5s max, factor 2 -- designed to feel responsive within a single agent turn while pacing retries.

### Session Management

Sessions are file-based JSON stores at `~/.openclaw/state/sessions/`. The `SessionManager` from Pi SDK handles the conversation history, tool calls, and streaming. OpenClaw wraps this with:

- Session key routing (agent ID + session suffix)
- Multi-agent session isolation
- Session transcript persistence
- Context pruning (via `src/agents/pi-extensions/context-pruning/`)

---

## 4. SOUL.md / Workspace Bootstrap System

### The Workspace Model

Each agent has a **workspace directory** (default: `~/.openclaw/workspace/`). On first run, OpenClaw seeds template files:

| File           | Purpose                                                          |
| -------------- | ---------------------------------------------------------------- |
| `AGENTS.md`    | Repository-level agent instructions (symlinked from `CLAUDE.md`) |
| `SOUL.md`      | Core personality/behavior instructions                           |
| `TOOLS.md`     | Tool usage guidelines                                            |
| `IDENTITY.md`  | Name, personality traits                                         |
| `USER.md`      | Info about the user                                              |
| `HEARTBEAT.md` | Periodic check-in behavior                                       |
| `BOOTSTRAP.md` | First-run setup instructions                                     |
| `MEMORY.md`    | Persistent memory store                                          |

**Source**: `src/agents/workspace.ts` (lines 26-34 define all filenames)

### How Workspace Files Get Into Prompts

`loadWorkspaceBootstrapFiles()` (workspace.ts line 487-547):

1. Resolves the workspace dir
2. For each recognized file, calls `readWorkspaceFileWithGuards()` which:
   - Opens via `openBoundaryFile()` (symlink/traversal safe)
   - Checks file is within workspace root (security boundary)
   - Caches by inode/dev/size/mtime identity (avoids stale reads)
   - Max file size: 2MB per file
3. Strips YAML frontmatter if present

**Subagent/cron filtering** (line 549-565): Subagent and cron sessions only get `AGENTS.md`, `TOOLS.md`, `SOUL.md`, `IDENTITY.md`, and `USER.md` -- not `HEARTBEAT.md`, `BOOTSTRAP.md`, or `MEMORY.md`.

### System Prompt Composition

`buildAgentSystemPrompt()` in `src/agents/system-prompt.ts` assembles the final system prompt from sections:

1. **Identity line** (name + model)
2. **Skills section** (XML-formatted catalog, mandatory scan instruction)
3. **Memory section** (memory_search + memory_get tool hints)
4. **Authorized senders** (owner identity, optionally HMAC-hashed)
5. **Messaging section** (cross-session, sub-agent, reply tags)
6. **Time section** (user timezone)
7. **Voice/TTS hints**
8. **Documentation paths**
9. **Workspace bootstrap files** (SOUL.md, IDENTITY.md, etc.)
10. **Extra system prompt** (from config)

**Token optimization**: Owner IDs can be HMAC-hashed with `ownerDisplaySecret` (line 73-78) to reduce token usage while maintaining identity verification.

---

## 5. Skills System

### Skill Discovery & Loading

**File**: `src/agents/skills/workspace.ts`

Skills are loaded from **6 sources** with clear precedence (line 490-509):

```
extra < bundled < managed < agents-skills-personal < agents-skills-project < workspace
```

| Source          | Path                           | Priority    |
| --------------- | ------------------------------ | ----------- |
| Extra dirs      | `config.skills.load.extraDirs` | Lowest      |
| Bundled         | `<package>/skills/`            | Low         |
| Plugin skills   | From installed plugins         | Low         |
| Managed         | `~/.openclaw/skills/`          | Medium      |
| Personal agents | `~/.agents/skills/`            | Medium-High |
| Project agents  | `<workspace>/.agents/skills/`  | High        |
| Workspace       | `<workspace>/skills/`          | Highest     |

Each skill directory must contain `SKILL.md`. The `loadSkillsFromDir()` function from Pi SDK handles the actual parsing.

### Runtime Limits (Configurable)

```typescript
const DEFAULT_MAX_CANDIDATES_PER_ROOT = 300;
const DEFAULT_MAX_SKILLS_LOADED_PER_SOURCE = 200;
const DEFAULT_MAX_SKILLS_IN_PROMPT = 150;
const DEFAULT_MAX_SKILLS_PROMPT_CHARS = 30_000;
const DEFAULT_MAX_SKILL_FILE_BYTES = 256_000; // 256KB per SKILL.md
```

These are the actual token overhead constraints. When the full skills catalog exceeds `maxSkillsPromptChars` (30K chars), OpenClaw falls back to a **compact format** (name + location only, no description) before resorting to dropping skills entirely. This is implemented via binary search to find the largest prefix that fits (lines 594-609).

### Skill Prompt Format

Skills are rendered as XML in the system prompt:

```xml
<available_skills>
  <skill>
    <name>github</name>
    <description>Manage GitHub repos, issues, PRs</description>
    <location>~/.openclaw/skills/github/SKILL.md</location>
  </skill>
</available_skills>
```

**Path compaction** (line 46-54): Home directory is replaced with `~` to save ~5-6 tokens per skill path (400-600 tokens total across all skills).

### Skill Frontmatter

Skills support YAML frontmatter for metadata:

- `openclaw.always`: Force-include in every session
- `openclaw.requires.bins`: Required CLI binaries
- `openclaw.requires.env`: Required environment variables
- `openclaw.install`: Auto-install specs (brew, npm, go, uv, download)
- `user-invocable`: Whether users can invoke via `/command`
- `disable-model-invocation`: Hide from model's skill catalog
- `command-dispatch`: Direct tool dispatch (bypasses model)

### Bundled Skills (52+)

The repo ships 52+ skills in `skills/`:

- `coding-agent` -- Delegates to Codex/Claude Code/Pi/OpenCode
- `mcporter` -- MCP server management
- `github`, `slack`, `discord` -- Platform integrations
- `obsidian`, `notion`, `trello` -- Productivity tools
- `openai-whisper`, `openai-image-gen` -- Media tools
- `canvas` -- Visual collaboration
- `skill-creator` -- Meta-skill for creating new skills
- Many more (weather, spotify, tmux, video-frames, etc.)

---

## 6. Channel Adapter Architecture

### Plugin Interface

**File**: `src/channels/plugins/types.plugin.ts`

Every channel implements the `ChannelPlugin` interface (93 lines, 20+ adapter slots):

```typescript
type ChannelPlugin = {
  id: ChannelId;
  meta: ChannelMeta;
  capabilities: ChannelCapabilities;
  config: ChannelConfigAdapter;
  setup?: ChannelSetupAdapter;
  pairing?: ChannelPairingAdapter;
  security?: ChannelSecurityAdapter;
  groups?: ChannelGroupAdapter;
  outbound?: ChannelOutboundAdapter;
  lifecycle?: ChannelLifecycleAdapter;
  messaging?: ChannelMessagingAdapter;
  streaming?: ChannelStreamingAdapter;
  threading?: ChannelThreadingAdapter;
  // ... 10+ more optional adapters
  agentTools?: ChannelAgentToolFactory | ChannelAgentTool[];
};
```

This is a **composable adapter pattern** -- channels implement only the adapters they support.

### Channel Message Flow

1. Channel adapter receives inbound message (webhook or polling)
2. Message normalized to internal format via `ChannelMessagingAdapter`
3. Routed to agent via session key (channel + user/group ID + thread)
4. Agent produces response
5. Response passes through `ChannelOutboundAdapter` for platform-specific formatting
6. Channel sends via platform API

### Extension Channels (75 total extensions)

Extensions live under `extensions/` as separate workspace packages. The Discord extension alone has 100+ source files covering:

- Guild management, permissions, components (buttons, selects)
- Voice message transcription
- Thread management and subagent hooks
- Status reactions, typing indicators
- Webhook activity monitoring

**Import boundary enforced**: Extensions must use `openclaw/plugin-sdk/*` subpaths -- never import from `src/` directly. Multiple lint scripts enforce this (`check-extension-plugin-sdk-boundary.mjs`).

---

## 7. Security Architecture

### Security Audit System (`src/security/audit.ts`)

The security audit produces findings at three severity levels: `info`, `warn`, `critical`. It checks:

- Gateway auth configuration
- Filesystem permissions (config, state dirs)
- Docker sandbox isolation
- Dangerous config flags
- Browser control auth
- SSRF protections (blocked hostnames, private network policy)
- Channel security per-adapter

### Skill Security Scanner (`src/security/skill-scanner.ts`)

A static analysis scanner runs on skill source files looking for:

**Critical rules**:

- `dangerous-exec`: `child_process` shell execution
- `dynamic-code-execution`: `eval()`, `new Function()`
- `crypto-mining`: stratum+tcp, coinhive, xmrig references
- `env-harvesting`: `process.env` + network send (credential harvesting)

**Warning rules**:

- `suspicious-network`: WebSocket on non-standard ports
- `potential-exfiltration`: File read + network send
- `obfuscated-code`: Hex-encoded strings, large base64 payloads

Scanner is cached by file identity (inode/dev/size/mtime) with 5000-entry LRU.

### Sandbox Isolation

Docker-based sandboxing via `Dockerfile.sandbox`:

- Debian bookworm-slim base
- Unprivileged `sandbox` user
- Minimal tools: bash, curl, git, jq, python3, ripgrep
- Separate `Dockerfile.sandbox-browser` for browser-capable sandboxes

Config controls: `agents.defaults.sandbox` in `openclaw.json`

### Tool Authorization

The dangerous tools system (`src/security/dangerous-tools.ts`) maintains deny lists for HTTP-accessible tools. Tool authorization is enforced at the gateway level before forwarding to the agent.

### Workspace File Boundary Safety

Workspace file loading uses `openBoundaryFile()` which:

- Resolves symlinks before boundary check
- Rejects files outside workspace root
- Caps at 2MB per file
- Uses file descriptor-based reads (open then read, not path-based)

---

## 8. MCP Support

### Architecture Decision: Bridge, Not Native

From `VISION.md` (line 72-83): OpenClaw explicitly **does not** build first-class MCP runtime into core. Instead, MCP is supported through `mcporter` (https://github.com/steipete/mcporter), an external bridge tool.

Rationale:

- Add/change MCP servers without gateway restart
- Keep core tool/context surface lean
- Reduce MCP churn impact on core stability

### Actual MCP Integration (`src/agents/pi-bundle-mcp-tools.ts`)

Despite the "bridge" philosophy, there IS native MCP integration code:

- Uses `@modelcontextprotocol/sdk` v1.27.1 (direct dependency)
- `Client` from `@modelcontextprotocol/sdk/client/index.js`
- `StdioClientTransport` for stdio-based MCP servers
- Converts MCP `CallToolResult` to Pi Agent `AgentToolResult`
- Handles paginated `listTools` across MCP servers
- Logs stderr from MCP servers for debugging

**MCP config** lives in `openclaw.json` under `mcp.servers` (managed via `src/config/mcp-config.ts`).

### mcporter Skill

The bundled `skills/mcporter/SKILL.md` teaches the agent to use mcporter CLI:

- `mcporter list` -- list servers
- `mcporter call <server.tool>` -- call tools
- `mcporter auth` -- OAuth flows
- `mcporter config` -- manage server configs
- `mcporter generate-cli` -- generate CLI wrappers

---

## 9. Configuration System

### Config Format & Location

- **File**: `~/.openclaw/openclaw.json` (JSON5)
- **Schema**: Zod-based validation via `src/config/zod-schema.ts`
- **Type definitions**: Split across 30+ type files in `src/config/types.*.ts`
- **Legacy migration**: `src/config/legacy-migrate.ts` (3-part migration system)

### Config Hierarchy

Environment variables take precedence over config file values. Config supports:

- `env` block for environment variable injection
- `agents.list[]` for multi-agent setups with per-agent models, workspaces, skills
- Channel-specific config sections (telegram, discord, slack, etc.)
- Plugin configuration
- Secret management with runtime snapshots

### Config Schema Architecture

The Zod schema (`src/config/zod-schema.ts`) is decomposed into focused modules:

- `zod-schema.agents.ts` -- Agent list, defaults, model config
- `zod-schema.channels.ts` -- Channel common config
- `zod-schema.providers-core.ts` -- Provider auth, model catalog
- `zod-schema.session.ts` -- Session management, compaction
- `zod-schema.sensitive.ts` -- Secret handling, redaction
- `zod-schema.hooks.ts` -- Hook configuration

Config UI hints (`src/config/schema.hints.ts`) provide metadata for the control UI (labels, sensitivity markers, advanced toggles).

---

## 10. Plugin / Extension Architecture

### Plugin Registration (`src/plugins/registry.ts`)

Plugins register through `OpenClawPluginApi`, providing:

- **Tools**: Custom agent tools via `OpenClawPluginToolFactory`
- **CLI commands**: Via `OpenClawPluginCliRegistrar`
- **HTTP routes**: Custom gateway endpoints with auth
- **Channels**: Full channel implementations
- **Hooks**: Lifecycle hooks (before/after agent start, etc.)
- **Providers**: LLM providers, image generation, speech, web search
- **Config schema extensions**: Per-plugin config validation

### Plugin SDK

The plugin SDK is exposed via `openclaw/plugin-sdk/*` subpaths (100+ subpath exports in `package.json`). This includes:

- Runtime helpers for each concern (channel, config, agent, media, etc.)
- Testing utilities
- Platform-specific helpers (Telegram, Discord, Slack, WhatsApp, etc.)

### Extension Loading

Extensions in `extensions/` are workspace packages with their own `package.json`. They are loaded via:

1. Plugin auto-enable (`src/config/plugin-auto-enable.ts`)
2. Runtime plugin registry
3. jiti for TypeScript execution at runtime

**Key boundary rules** (enforced by lint scripts):

- Extensions cannot import from `src/` directly
- Extensions cannot import other extensions' `src/`
- Extensions must use `plugin-sdk` subpaths as public API

---

## 11. ACP (Agent Client Protocol) Integration

### ACP Server (`src/acp/server.ts`)

OpenClaw implements the **Agent Client Protocol** (https://agentclientprotocol.com) via `@agentclientprotocol/sdk` v0.16.1. The ACP server:

- Accepts ndJSON over stdio (standard ACP transport)
- Translates between ACP protocol and OpenClaw gateway events
- Connects to the gateway as a special WebSocket client

### ACP Translator (`src/acp/translator.ts`)

The `AcpGatewayAgent` class implements the ACP `Agent` interface:

- Handles `Initialize`, `Authenticate`, `NewSession`, `LoadSession`, `Prompt` requests
- Maps gateway events to ACP events (tool calls, text deltas, completions)
- Supports ACP config options: `thought_level`, `fast_mode`, `verbose_level`, `reasoning_level`
- DoS protection: MAX_PROMPT_BYTES = 2MB (line 54)

### ACP Control Plane (`src/acp/control-plane/`)

Manages session lifecycle, identity reconciliation, runtime controls. The control plane has:

- `manager.core.ts` -- Core session management
- `manager.identity-reconcile.ts` -- ACP identity mapping
- `manager.runtime-controls.ts` -- Runtime control surface
- `runtime-cache.ts` -- Caching for ACP runtime state
- `session-actor-queue.ts` -- Queue for session operations

---

## 12. Noteworthy Patterns & Surprises

### 1. CLAUDE.md is a Symlink

`CLAUDE.md -> AGENTS.md` at repo root. The project uses `AGENTS.md` as its canonical workspace instruction file, aliased to `CLAUDE.md` for Claude compatibility.

### 2. Anthropic Magic String Scrubbing

`src/agents/pi-embedded-runner/run.ts` (line 107-118) actively scrubs `ANTHROPIC_MAGIC_STRING_TRIGGER_REFUSAL` from prompts to prevent Anthropic's refusal test tokens from poisoning session transcripts.

### 3. Multi-Platform Native Apps

Beyond the TypeScript core, OpenClaw has:

- **macOS**: Swift app in `apps/macos/` + `Swabble/` (Swift package)
- **iOS**: Swift app in `apps/ios/` with xcodegen project generation
- **Android**: Kotlin app in `apps/android/` with Gradle build
- All use the gateway's WebSocket protocol

### 4. Extensive Test Infrastructure

- `scripts/test-parallel.mjs` -- Parallel test runner
- Performance budgets (`scripts/test-perf-budget.mjs`)
- Docker-based e2e tests (onboarding, gateway network, plugin tests)
- Live model tests with real API keys
- 265 test files in `src/gateway/` alone

### 5. Subsystem Logger Pattern

Every module uses `createSubsystemLogger("module/name")` for structured logging with hierarchical names. This is pervasive across the entire codebase.

### 6. Config Change Detection

Config reload uses SHA-based change detection (`resolveConfigSnapshotHash`) with file watching via chokidar. Changes trigger cascading reload of channels, skills, auth profiles.

### 7. BOOT.md System

`src/gateway/boot.ts`: On gateway start, if a `BOOT.md` file exists in the workspace, the gateway runs the agent once with the boot file content as a prompt. This enables "wake and act" scenarios (e.g., "check my Discord messages and send a summary").

### 8. Heartbeat System

Agents can have periodic heartbeat runs configured via `HEARTBEAT.md` and agent config. The heartbeat runner sends scheduled prompts to the agent, enabling proactive behavior.

### 9. Secrets Management

`src/secrets/` implements runtime secret snapshots with:

- Secret file references (avoid env var exposure)
- Runtime activation/deactivation
- Gateway auth surface evaluation
- Command-level secret assignment

### 10. Provider Auth Rotation

The auth profile system supports multiple API keys per provider with:

- Automatic round-robin rotation
- Cooldown periods on failure
- Automatic expiry tracking
- Runtime snapshot persistence

---

## 13. Dependency Analysis

### Critical Runtime Dependencies

| Dependency                      | Purpose                                         | Version      |
| ------------------------------- | ----------------------------------------------- | ------------ |
| `@mariozechner/pi-coding-agent` | Core agent loop (SessionManager, tools, skills) | 0.60.0       |
| `@mariozechner/pi-ai`           | AI provider abstraction                         | 0.60.0       |
| `@agentclientprotocol/sdk`      | ACP protocol implementation                     | 0.16.1       |
| `@modelcontextprotocol/sdk`     | MCP client for tool bridging                    | 1.27.1       |
| `hono`                          | HTTP framework (gateway)                        | 4.12.8       |
| `express`                       | HTTP framework (legacy/compat)                  | 5.2.1        |
| `ws`                            | WebSocket server/client                         | 8.19.0       |
| `@sinclair/typebox`             | Runtime type validation                         | 0.34.48      |
| `zod`                           | Config schema validation                        | 4.3.6        |
| `playwright-core`               | Browser automation/computer use                 | 1.58.2       |
| `sharp`                         | Image processing                                | 0.34.5       |
| `@lydell/node-pty`              | PTY for terminal tools                          | 1.2.0-beta.3 |
| `sqlite-vec`                    | Vector search for memory                        | 0.1.7        |

### Dev/Build Dependencies

| Dependency | Purpose                  |
| ---------- | ------------------------ |
| `tsdown`   | Bundler (NOT tsc)        |
| `oxfmt`    | Formatter (NOT prettier) |
| `oxlint`   | Linter (NOT eslint)      |
| `vitest`   | Test framework           |
| `tsx`      | TypeScript execution     |

---

## 14. Architecture Assessment for Agent Factory Curriculum

### Relevance to Our Teaching Goals

1. **Gateway Pattern**: OpenClaw demonstrates a production multi-channel gateway -- the exact pattern we teach in Part 3 (Business Domain Agents). Students building agents need to understand how agents connect to real messaging platforms.

2. **Skills System**: Their skill loading (6 sources, precedence, frontmatter metadata, security scanning, token budgeting) is the most mature open-source implementation available. Our SKILL.md format aligns closely.

3. **Plugin Architecture**: The `ChannelPlugin` composable adapter pattern is a clean teaching example of how to build extensible systems without monolithic inheritance.

4. **Security Model**: The layered security (skill scanner, workspace boundary, sandbox isolation, tool authorization, auth profiles) is exemplary for teaching "security by default."

5. **MCP Integration**: Their bridge approach (mcporter) vs native MCP runtime is a real architectural decision students should understand.

### Key Differences from Our Stack

- OpenClaw uses Pi Agent SDK; we teach Claude Code/Claude API directly
- OpenClaw is a gateway (runs as a service); our agents are more task-oriented
- OpenClaw has 922K lines; our focus is keeping agents lean
- Their config is JSON5; we use YAML frontmatter in SKILL.md files

### What We Can Learn

1. **Token budgeting for skills**: Their binary-search approach to fitting skills within prompt char limits is directly applicable
2. **Workspace file security**: Boundary-safe file reads with inode identity caching
3. **Multi-source skill precedence**: A clear model for plugin/workspace/managed skill resolution
4. **Auth profile rotation**: Sophisticated API key management that our students will need at scale
