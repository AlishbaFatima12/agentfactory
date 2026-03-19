# OpenClaw: GitHub Repository Research Report

**Date**: 2026-03-19
**Source**: https://github.com/openclaw/openclaw
**Status**: Production software (rapid release cadence)

---

## 1. Project Overview

**What it is**: OpenClaw is a self-hosted, single-user personal AI assistant that routes conversations across 24+ messaging platforms through a centralized WebSocket gateway. It embeds the Pi agent SDK to run LLM-powered agents with tool execution, browser automation, memory, and session management. The tagline is "Your own personal AI assistant. Any OS. Any Platform. The lobster way."

**Who maintains it**: Peter Steinberger (creator, benevolent dictator) with 25+ named maintainers covering specific domains (Android, iOS, macOS, Telegram, security, agents, performance, CLI, gateway, docs, plugins). 357 total contributors.

**License**: MIT License.

**Repository age**: Created 2025-11-24. ~4 months old at time of research.

**Activity level**: Extremely active. 20,444+ commits on main. 14,575 open issues. Multiple releases per week -- the latest 10 releases span just 17 days (2026-03-02 to 2026-03-13). Pushed to main within hours of this research. 1,589 watchers.

**Community metrics**:

| Metric       |   Count |
| ------------ | ------: |
| Stars        | 323,985 |
| Forks        |  62,472 |
| Contributors |     357 |
| Watchers     |   1,589 |
| Open Issues  |  14,575 |
| Commits      |  20,444 |

**Documentation**: https://docs.openclaw.ai (Mintlify-hosted). Also has `llms.txt` for LLM-consumable docs index.

**Community channels**: Discord (primary), X/Twitter (@openclaw, @steipete).

---

## 2. Architecture

### Gateway-Centric Model

OpenClaw uses a **centralized gateway pattern** where a single long-lived daemon process owns all messaging surfaces and serves as the WebSocket control plane. The gateway runs on a single multiplexed port (default `ws://127.0.0.1:18789`) handling:

- WebSocket control/RPC (typed request-response protocol)
- HTTP APIs (OpenAI-compatible)
- Control UI serving
- Canvas/A2UI hosting

### Component Stack

```
┌──────────────────────────────────────────────────────────┐
│                    Control-Plane Clients                  │
│  macOS App  │  CLI  │  WebChat UI  │  iOS/Android Nodes  │
└───────────────────────┬──────────────────────────────────┘
                        │ WebSocket (typed JSON frames)
┌───────────────────────▼──────────────────────────────────┐
│                       GATEWAY                             │
│  Channel Routing │ Session Mgmt │ Tool Policy │ Auth     │
│  Plugin Loader   │ Cron Engine  │ Webhooks    │ Pairing  │
└───────┬───────────────┬───────────────┬──────────────────┘
        │               │               │
┌───────▼──────┐ ┌──────▼──────┐ ┌──────▼──────────┐
│  Pi Agent    │ │  Channels   │ │  Extensions      │
│  (embedded)  │ │  (24+)      │ │  (plugins)       │
│  Sessions    │ │  Telegram   │ │  mcporter (MCP)  │
│  Tools       │ │  WhatsApp   │ │  voice-call      │
│  Memory      │ │  Discord    │ │  memory-core     │
│  Compaction  │ │  Slack ...  │ │  device-pair ... │
└──────────────┘ └─────────────┘ └──────────────────┘
```

### Wire Protocol

Transport uses WebSocket text frames with JSON. Handshake requires a `connect` frame first, gateway responds with `hello-ok` snapshot (presence, health, state version, uptime, policy limits). Subsequent communication follows `req(method, params) -> res(ok/payload|error)` pattern. Server-push events use `{type:"event", event, payload, seq?, stateVersion?}`. Events are not replayed -- clients must refresh state during sequence gaps.

### Pi Agent Runtime (Embedded)

OpenClaw does NOT shell out to a coding agent. It directly imports and instantiates Mario Zechner's Pi SDK (`pi-ai`, `pi-agent-core`, `pi-coding-agent`, `pi-tui`) via `createAgentSession()`. This gives OpenClaw full control over:

- Session lifecycle and event handling
- Custom tool injection and policy filtering
- System prompt customization per channel/context
- Session persistence with branching/compaction
- Multi-account auth profile rotation with failover
- Provider-agnostic model switching

The agent loop: `runEmbeddedPiAgent()` creates session -> `subscribeEmbeddedPiSession()` monitors events (message_start, tool_execution_start, turn_start, auto_compaction_start) -> session receives user input -> tools execute -> streaming output.

### Session Management

Sessions stored as JSONL files with tree structure. Pi's `SessionManager` handles persistence. OpenClaw adds session caching, history limiting by channel type (DM vs group), auto-compaction on context overflow, and custom context pruning. Default: all DMs route into a single main session. Secure mode: per-user session isolation via `dmScope: "per-channel-peer"`.

### Multi-Agent Routing

Each agent is a fully isolated persona with:

- Dedicated workspace (AGENTS.md, SOUL.md, USER.md, files, persona rules)
- Separate state directory for auth and per-agent settings
- Independent session store

Routing uses deterministic binding rules with most-specific-wins logic:

1. Exact peer match (specific DM/group/channel)
2. Parent peer match (thread inheritance)
3. Discord role + guild match
4. Guild-level / Team-level match
5. Channel account match
6. Channel-wide fallback
7. Default agent assignment

Each channel account (WhatsApp phone number, Telegram bot token, Discord bot) maps to one agent. Multiple accounts per channel supported.

---

## 3. SOUL.md -- Agent Identity & Personality

### What It Is

SOUL.md is a **workspace template file** that defines an agent's personality, behavioral guidelines, and operating principles. It lives at `~/.openclaw/workspace/SOUL.md` (or per-agent workspace equivalent) and is injected into the agent's system prompt context.

### How It Gets Created

During first-run bootstrapping (`openclaw onboard`), the system runs a short Q&A ritual (one question at a time) and writes identity + preferences to three files:

- `IDENTITY.md` -- user identity data
- `USER.md` -- user preferences
- `SOUL.md` -- agent personality and behavioral rules

The `BOOTSTRAP.md` template orchestrates this ritual, then self-deletes after completion.

### Template Content

The default SOUL.md template establishes these behavioral principles:

| Section          | Guidance                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Authenticity** | "Be genuinely helpful, not performatively helpful." No filler phrases.                                                         |
| **Personality**  | Develop distinct perspectives. Avoid bland assistant stereotype. Have genuine preferences.                                     |
| **Proactivity**  | "Try to figure it out. Read the file. Check the context. Search for it." before asking.                                        |
| **Trust**        | Access to personal info creates responsibility. Bold internally (file review, learning), cautious externally (communications). |
| **Boundaries**   | Protect privacy. Seek approval before external communications. Don't rush in messaging. Don't impersonate.                     |
| **Continuity**   | Treat documentation as persistent memory. Regular updates to reflect evolving understanding.                                   |

### Dev Persona Example

OpenClaw ships a `SOUL.dev.md` alternate persona -- "C-3PO, Clawd's Third Protocol Observer" -- used in `--dev` mode. This demonstrates how SOUL.md enables radically different agent personalities on the same runtime:

- Debugging companion with dramatic flair
- Celebrates builds as "communications triumphs"
- Treats TypeScript errors with gravity
- References probability calculations for challenges

### Template System (7 Files)

SOUL.md is one of seven workspace templates:

| Template       | Purpose                                  |
| -------------- | ---------------------------------------- |
| `SOUL.md`      | Personality and behavioral identity      |
| `AGENTS.md`    | Agent definitions and operating rules    |
| `BOOTSTRAP.md` | First-run setup ritual (self-deleting)   |
| `HEARTBEAT.md` | Periodic execution / scheduled tasks     |
| `TOOLS.md`     | Available capabilities and tool guidance |
| `IDENTITY.md`  | User identity data (name, preferences)   |
| `USER.md`      | User preferences and context             |

---

## 4. Skills System

### How Skills Work

Skills are **AgentSkills-compatible folders** containing a `SKILL.md` file with YAML frontmatter and natural-language instructions that teach agents how to use tools. They are NOT executable code -- they are prompt context that shapes agent behavior.

### Skill Hierarchy (3 Tiers)

| Tier          | Location              | Precedence               |
| ------------- | --------------------- | ------------------------ |
| Workspace     | `<workspace>/skills/` | Highest (wins conflicts) |
| Managed/Local | `~/.openclaw/skills/` | Medium                   |
| Bundled       | Shipped with OpenClaw | Lowest                   |

Additional skill directories configurable via `skills.load.extraDirs`. In multi-agent setups, each agent has its own workspace skills, while `~/.openclaw/skills/` are shared across all agents.

### SKILL.md Format

Required fields:

- `name` -- skill identifier
- `description` -- purpose statement

Optional frontmatter:

- `homepage` -- link to documentation
- `user-invocable` -- whether user can trigger directly
- `disable-model-invocation` -- prevent automatic activation
- `metadata` -- single-line JSON for gating logic
- Command-dispatch settings

Skills support `{baseDir}` references to the skill folder path for accessing co-located resources.

### Gating & Filtering

Skills can declare prerequisites that are checked at load time:

- `requires.bins` / `requires.anyBins` -- required binaries on PATH
- `requires.env` -- required environment variables
- `requires.config` -- required config paths
- `os` -- platform restrictions

The system validates binary availability and sandbox compatibility.

### Performance

OpenClaw snapshots eligible skills when sessions start, reusing across turns. Optional hot-reload watcher enables mid-session refresh when SKILL.md files change. Token overhead: ~195 base characters + ~97 per skill + field lengths.

### ClawHub Marketplace

**URL**: https://clawhub.ai (redirects from clawhub.com)

ClawHub is the public skill registry, operating like npm for agent skills:

- Install: `npx clawhub@latest install <skill-slug>`
- Update: `clawhub update --all`
- Publish: `clawhub sync --all`

**Current state**: Early stage. The marketplace shows "No skills yet. Be the first." -- zero published skills at time of research. The infrastructure exists but the community marketplace has not yet populated.

**Tech stack**: Vercel + Convex, open-source MIT, developed by the OpenClaw project.

### Bundled Skills (59 in repo)

The `skills/` directory ships 59 bundled skill packages covering:

| Category       | Examples                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------- |
| Productivity   | 1password, apple-notes, apple-reminders, bear-notes, notion, obsidian, things-mac, trello   |
| Communication  | discord, slack, imsg (iMessage)                                                             |
| Media          | camsnap, gifgrep, openai-image-gen, openai-whisper, video-frames, songsee                   |
| Development    | coding-agent, gh-issues, github, skill-creator, tmux                                        |
| Home/IoT       | openhue, sonoscli, weather, goplaces                                                        |
| Infrastructure | healthcheck, model-usage, session-logs, summarize                                           |
| Browser        | canvas, xurl, wacli (WhatsApp CLI)                                                          |
| Niche          | clawhub, eightctl, gog, himalaya, nano-pdf, oracle, ordercli, peekaboo, sag, spotify-player |
| Voice          | sherpa-onnx-tts, voice-call                                                                 |
| Node           | node-connect, bluebubbles, blucli                                                           |

---

## 5. Channel Adapters

### Architecture

Channels are messaging platform integrations that connect through the gateway. They come in two forms:

1. **Built-in channels** -- Core source at `src/<channel>/`: Telegram, Discord, Slack, Signal, iMessage, WhatsApp (web), WebChat, LINE
2. **Extension channels** -- Plugin packages at `extensions/<channel>/`: Microsoft Teams, Matrix, Zalo, Feishu/Lark, IRC, Nostr, Mattermost, Google Chat, Nextcloud Talk, Synology Chat, Tlon (Urbit), Twitch, BlueBubbles

### Supported Platforms (24+)

| Platform        | Type      | Notes                                                          |
| --------------- | --------- | -------------------------------------------------------------- |
| WhatsApp        | Built-in  | QR pairing, stores state on disk, one Baileys session per host |
| Telegram        | Built-in  | Simple bot token, fastest setup                                |
| Discord         | Built-in  | Bot token, role+guild routing                                  |
| Slack           | Built-in  | Block Kit support, team matching                               |
| Signal          | Built-in  | Encrypted messaging                                            |
| iMessage        | Built-in  | Via AppleScript/BlueBubbles                                    |
| LINE            | Built-in  | LINE bot SDK                                                   |
| WebChat         | Built-in  | WebSocket-based UI                                             |
| Microsoft Teams | Extension | Full teams integration                                         |
| Matrix          | Extension | matrix-js-sdk based                                            |
| Feishu/Lark     | Extension | Streaming + reasoning support                                  |
| Google Chat     | Extension | Enterprise chat                                                |
| IRC             | Extension | Classic chat protocol                                          |
| Mattermost      | Extension | Self-hosted Slack alternative                                  |
| Nostr           | Extension | Decentralized protocol                                         |
| Zalo            | Extension | Vietnamese messaging                                           |
| Twitch          | Extension | Via IRC                                                        |
| Tlon            | Extension | Urbit-based                                                    |
| Nextcloud Talk  | Extension | Self-hosted                                                    |
| Synology Chat   | Extension | NAS-integrated                                                 |
| BlueBubbles     | Extension | iMessage via macOS server                                      |

### Extension Architecture

Extensions are workspace packages under `extensions/*/` with their own `package.json`. Key rules:

- Plugin-specific dependencies stay in extension's `package.json`, not root
- Runtime installations use `npm install --omit=dev`
- Extensions access core via `"openclaw/plugin-sdk/*"` public surface only
- Direct imports from core `src/**` or other extensions are prohibited

### Adding New Channels

When adding a channel/extension, developers must:

1. Create extension package under `extensions/<name>/`
2. Use `openclaw/plugin-sdk` for the public API surface
3. Update `.github/labeler.yml` and create matching GitHub labels
4. Update all UI surfaces (macOS app, web UI, mobile, onboarding docs)
5. Add status + configuration forms to keep provider lists in sync

### DM Security Policies

All channels enforce inbound access control:

- **Pairing** (default): Unknown senders get time-limited code (1 hour), 3 pending max per channel
- **Allowlist**: Pre-approved identities only
- **Open**: Requires explicit `"*"` opt-in
- **Disabled**: All inbound DMs blocked

---

## 6. Security Model

### Trust Model

OpenClaw operates on a **single-user personal assistant model**. The fundamental assumption: one trusted operator per gateway instance. "OpenClaw is NOT a hostile multi-tenant security boundary for multiple adversarial users sharing one agent/gateway."

Anyone with filesystem write access to `~/.openclaw/` is effectively a trusted operator.

### Authentication

Three gateway auth modes:

1. **Token** (recommended): Shared bearer token
2. **Password**: Environment variable credentials
3. **Trusted proxy**: Identity-aware reverse proxy headers

Default: auth required, fail-closed when no credentials configured.

### Device Pairing

- Local connections (loopback, gateway host): auto-approved
- Remote tailnet peers: require explicit approval
- Pairing files: `~/.openclaw/credentials/<channel>-allowFrom.json`
- Side-effecting operations require idempotency keys

### Tool Authorization

Layered policy framework:

| Layer                 | Description                                        |
| --------------------- | -------------------------------------------------- |
| Tool profiles         | Baseline presets (e.g., `"messaging"`)             |
| Allow/Deny lists      | Per-tool group controls                            |
| Exec security         | `deny` (default) / `ask` / `allow`                 |
| Workspace restriction | `fs.workspaceOnly: true` (default)                 |
| Elevated mode         | Host execution escape hatch with tight `allowFrom` |

High-risk control-plane tools (`gateway`, `cron`, `sessions_spawn`, `sessions_send`) should be denied for any agent handling untrusted content.

### Sandboxing

Two complementary approaches:

1. **Gateway-level**: Run entire OpenClaw in Docker container (OS boundary)
2. **Tool-level**: Individual tools execute in isolated Docker containers

Sandbox modes: `off` | `all` | specific tools
Scope options: `agent` | `session` | `shared`
Workspace access: `none` | `ro` | `rw`

Pluggable sandbox backends support Docker, SSH remotes, and NVIDIA OpenShell.

### Prompt Injection Mitigation

Attack surfaces include direct messages, web search results, browser pages, emails, attachments. Mitigation layers:

1. Identity controls (DM pairing/allowlists, mention gating)
2. Content guardrails (system prompt guidance, not hard enforcement)
3. Tool policy (exec approvals, deny high-risk tools)
4. Sandboxing (isolate tool execution)
5. Secrets isolation (host environment, not prompts)
6. Reader agent pattern (read-only agent for untrusted content, summaries to main agent)

### Browser Security

Dedicated bot browser profile by default. SSRF policy available to block private networks. Browser control = "operator access" to anything that profile can reach.

### Security Audit CLI

```bash
openclaw security audit          # Basic scan
openclaw security audit --deep   # Probes live gateway
openclaw security audit --fix    # Auto-remediate
openclaw security audit --json   # Machine-readable
```

Checks: inbound access, tool blast radius, network exposure, browser control, disk hygiene, plugin allowlists, policy drift, model hygiene.

### Incident Response

Documented workflow: Contain (stop gateway, disable exposure) -> Rotate (all credentials, provider keys, gateway tokens) -> Audit (logs, transcripts, config changes, rerun security audit).

### Known CVEs / Vulnerability Reporting

No public bug bounty. Security contact: security@openclaw.ai (Jamieson O'Reilly, Security & Trust lead). Reports require reproducible PoC against latest main/release with demonstrated impact crossing documented trust boundaries.

Out of scope: prompt injection without boundary bypass, hostile multi-tenant assumptions, localhost-only deployment findings, sessionKey as auth (it is routing, not authorization).

---

## 7. Tech Stack

### Core

| Component               | Technology                                                   |
| ----------------------- | ------------------------------------------------------------ |
| **Language**            | TypeScript (ESM, strict typing)                              |
| **Runtime**             | Node.js >= 22.16.0                                           |
| **Package manager**     | pnpm 10.23.0 (bun supported for execution)                   |
| **Build**               | tsdown, tsx, TypeScript 5.9.3                                |
| **Linting**             | oxlint + oxfmt                                               |
| **Testing**             | Vitest 4.1.0 + Playwright Core, V8 coverage (70% thresholds) |
| **Duplicate detection** | jscpd                                                        |
| **Pre-commit**          | prek hooks                                                   |
| **Monorepo**            | pnpm workspaces                                              |

### Key Dependencies

| Category          | Packages                                                              |
| ----------------- | --------------------------------------------------------------------- |
| **Agent SDK**     | Pi SDK (@mariozechner): pi-ai, pi-agent-core, pi-coding-agent, pi-tui |
| **Protocol**      | @agentclientprotocol (ACP)                                            |
| **Cloud**         | AWS Bedrock SDK                                                       |
| **Web**           | Express, Hono                                                         |
| **Messaging**     | LINE bot SDK, WhatsApp Baileys                                        |
| **Media**         | Sharp (images), PDF.js                                                |
| **Database**      | sqlite-vec (vector search)                                            |
| **Terminal**      | node-pty (shell), SSH                                                 |
| **Validation**    | Zod, TypeBox                                                          |
| **Serialization** | YAML                                                                  |

### Platform Apps

| Platform | Technology                                            |
| -------- | ----------------------------------------------------- |
| macOS    | SwiftUI (Observation framework, not ObservableObject) |
| iOS      | SwiftUI                                               |
| Android  | Kotlin (Gradle)                                       |
| Web UI   | Lit (legacy decorators) + Vite                        |

### Export Surface

200+ conditional exports under `./plugin-sdk/` subpaths for modular extension imports.

### Repository Structure

```
openclaw/
├── src/                    # Core source (50+ modules)
│   ├── gateway/            # WebSocket control plane
│   ├── channels/           # Channel routing
│   ├── agents/             # Agent runtime, workspace
│   ├── sessions/           # Session management
│   ├── providers/          # LLM provider abstraction
│   ├── browser/            # Browser automation
│   ├── canvas-host/        # Canvas + A2UI
│   ├── cli/                # CLI wiring + commands
│   ├── config/             # Configuration system
│   ├── context-engine/     # Context management
│   ├── memory/             # Persistent memory
│   ├── media/              # Media pipeline
│   ├── security/           # Security subsystem
│   ├── pairing/            # Device pairing
│   ├── plugin-sdk/         # Extension API surface
│   ├── routing/            # Message routing
│   ├── web-search/         # Web search integration
│   └── ...                 # 30+ more modules
├── extensions/             # Channel + feature plugins (70+)
│   ├── telegram/           # Telegram channel
│   ├── discord/            # Discord channel
│   ├── anthropic/          # Anthropic provider
│   ├── openai/             # OpenAI provider
│   ├── ollama/             # Local model provider
│   ├── openshell/          # NVIDIA OpenShell sandbox
│   └── ...
├── skills/                 # 59 bundled skills
├── apps/                   # Native apps
│   ├── macos/              # macOS menu bar app
│   ├── ios/                # iOS app
│   ├── android/            # Android app
│   └── shared/             # Cross-platform shared code
├── ui/                     # WebChat UI (Lit + Vite)
├── docs/                   # Mintlify documentation
├── packages/               # Internal packages (clawdbot, moltbot)
├── test/                   # Test suites
├── .pi/                    # Pi agent config (prompts, extensions)
├── .agents/                # Agent skills for maintainer workflows
└── .agent/                 # Agent workflow definitions
```

---

## 8. Community

### Governance

Benevolent dictator model led by Peter Steinberger. 25+ named domain maintainers. Maintainer applications accepted via contributing@openclaw.ai with review of PRs, open-source involvement, and availability commitment.

### Activity Metrics

| Metric                  | Value   |
| ----------------------- | ------- |
| Stars                   | 323,985 |
| Forks                   | 62,472  |
| Contributors            | 357     |
| Commits                 | 20,444+ |
| Releases (last 17 days) | 10      |
| Open Issues             | 14,575  |
| Health Percentage       | 75%     |

### Release Cadence

CalVer format: `vYYYY.M.D[-suffix]`. Multiple releases per week. Beta channel available via npm `beta` tag. Dev channel tracks main branch head.

Recent releases:

- v2026.3.13-1 (latest stable)
- v2026.3.12 (dashboard redesign)
- v2026.3.11 (mobile enhancements)
- v2026.3.8 (previous stable)

### Sponsors

OpenAI, Vercel, Blacksmith, and Convex are listed sponsors.

### Contribution Process

- Bug fixes: Submit PRs directly
- Major features: Discuss first in GitHub Discussions or Discord
- AI-assisted code explicitly welcome (mark PRs, note testing level)
- Pre-PR: `pnpm build && pnpm check && pnpm test`
- American English spelling throughout
- CODEOWNERS-protected files require explicit owner approval

### Project History

Three naming phases:

1. **Clawd** (Nov 25, 2025 - Jan 27, 2026) -- Original WhatsApp gateway
2. **Moltbot** (Jan 27-30, 2026) -- Temporary rebrand after Anthropic trademark concerns
3. **OpenClaw** (Jan 30, 2026-present) -- Final form

The lobster mascot "Molty" (they/them) represents growth through molting -- shedding old shells to evolve.

### Current Priorities (from CONTRIBUTING.md)

1. **Stability**: Channel connection edge cases (WhatsApp, Telegram)
2. **UX**: Onboarding wizard, error messaging
3. **Skills**: ClawHub community submissions
4. **Performance**: Token usage, compaction optimization

---

## 9. Key Differentiators vs NemoClaw and OpenShell

### The Three-Layer Stack

These are NOT competing products. They form a complementary stack:

```
┌─────────────────────────────────────────────────┐
│  NemoClaw (NVIDIA plugin)                       │
│  Orchestration + inference routing + policies   │
│  Apache-2.0 │ 9,835 stars │ 4 days old         │
├─────────────────────────────────────────────────┤
│  OpenShell (NVIDIA runtime)                     │
│  Sandboxed execution environment                │
│  Apache-2.0 │ 2,131 stars │ Rust │ Alpha        │
├─────────────────────────────────────────────────┤
│  OpenClaw (community project)                   │
│  AI assistant + messaging gateway + agent SDK   │
│  MIT │ 323,985 stars │ TypeScript │ Production   │
└─────────────────────────────────────────────────┘
```

### Comparative Analysis

| Dimension          | OpenClaw                                                     | OpenShell                                                       | NemoClaw                                                    |
| ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------- | ----------------------------------------------------------- |
| **What it is**     | Personal AI assistant with messaging gateway                 | Sandboxed runtime for any AI agent                              | OpenClaw plugin for OpenShell                               |
| **Maintainer**     | Peter Steinberger + community                                | NVIDIA                                                          | NVIDIA                                                      |
| **License**        | MIT                                                          | Apache-2.0                                                      | Apache-2.0                                                  |
| **Language**       | TypeScript                                                   | Rust                                                            | JavaScript/TypeScript                                       |
| **Maturity**       | Production (4 months, 20K+ commits)                          | Alpha (1 month, 324 commits)                                    | Alpha (4 days, ~250 commits)                                |
| **Stars**          | 323,985                                                      | 2,131                                                           | 9,835                                                       |
| **Scope**          | Full agent platform (messaging, tools, memory, skills)       | Execution isolation only (Landlock, seccomp, namespaces)        | Bridges OpenClaw into OpenShell with NVIDIA inference       |
| **Security model** | Single-user trust + tool policies + optional Docker sandbox  | 4-layer policy engine (filesystem, network, process, inference) | Inherits OpenShell policies + adds NVIDIA inference routing |
| **Messaging**      | 24+ channel adapters                                         | None (not a messaging platform)                                 | Inherits OpenClaw channels                                  |
| **AI models**      | 50+ providers (Anthropic, OpenAI, Google, Ollama, etc.)      | Agent-agnostic (supports Claude Code, Codex, OpenClaw, Ollama)  | Routes to NVIDIA Nemotron models via cloud API              |
| **Installation**   | `npm install -g openclaw@latest`                             | `curl ... \| sh` or `uv tool install openshell`                 | OpenShell plugin via CLI                                    |
| **Deployment**     | Bare metal, Docker, Kubernetes, Fly.io, Railway, Render, GCP | K3s cluster in Docker container                                 | Runs inside OpenShell sandbox                               |

### Key Differentiators (OpenClaw Specifically)

1. **Messaging-first**: The only one designed as a messaging gateway. 24+ channel adapters is the primary value proposition.
2. **Pi agent SDK embedding**: Deep integration with Pi coding agent (not subprocess, direct library import) gives full session/tool/prompt control.
3. **SOUL.md personality system**: Unique identity template approach for agent personas -- no equivalent in OpenShell/NemoClaw.
4. **Skills marketplace (ClawHub)**: Community skill registry (early stage but infrastructure exists).
5. **Native companion apps**: macOS menu bar, iOS, Android apps -- not just CLI/web.
6. **MCP via mcporter**: Supports MCP servers without gateway restart through the mcporter extension.
7. **Massive community**: 324K stars, 357 contributors, 62K forks dwarfs OpenShell (2K) and NemoClaw (10K) combined.
8. **Production maturity**: 20K+ commits, CalVer releases multiple times per week, extensive test suite with 70% coverage thresholds.

### Where OpenClaw Depends on the Others

- **OpenShell**: OpenClaw supports OpenShell as a pluggable sandbox backend (`extensions/openshell/`). Sandbox modes `mirror` and `remote` use OpenShell for isolated tool execution.
- **NemoClaw**: Provides turnkey secure deployment of OpenClaw with NVIDIA inference routing and 4-layer security policies. Useful for enterprise/regulated environments where OpenClaw's built-in Docker sandboxing is insufficient.

### Where OpenClaw Is Weaker

1. **Enterprise isolation**: OpenClaw explicitly rejects multi-tenant hostile environments. NemoClaw/OpenShell address this gap.
2. **Hardware-level sandboxing**: OpenShell's Landlock + seccomp + network namespaces provide deeper isolation than OpenClaw's Docker-based approach.
3. **NVIDIA inference optimization**: NemoClaw routes through NVIDIA cloud with Nemotron model support -- OpenClaw is model-provider-agnostic but lacks NVIDIA-specific optimization.

---

## 10. Relevance to Book Content

### Teaching Potential

OpenClaw is highly relevant as a teaching case study for:

- **Agent architecture**: Gateway pattern, session management, tool policies, multi-agent routing
- **Skills/plugins**: SKILL.md format is nearly identical to our AgentSkills pattern
- **Security-in-depth**: Layered trust model, tool authorization, sandboxing tiers
- **Personality engineering**: SOUL.md template as identity specification
- **Channel adapters**: Real-world messaging integration patterns
- **Monorepo architecture**: 200+ exports, extension boundaries, plugin SDK design

### Cautions for Book Content

- Project is only 4 months old despite massive adoption -- high velocity means frequent breaking changes
- ClawHub marketplace is empty -- the community skill ecosystem is aspirational, not proven
- Single-user trust model limits enterprise applicability without NemoClaw/OpenShell layer
- SOUL.md is natural language, not structured specification -- different philosophy from our SDD/SKILL.md approach
- The Pi agent SDK is a third-party dependency (Mario Zechner) -- OpenClaw is an orchestration layer, not an agent framework itself
