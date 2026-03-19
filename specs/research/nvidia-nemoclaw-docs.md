# NVIDIA NemoClaw Documentation Research Report

**Date**: 2026-03-19
**Source**: docs.nvidia.com/nemoclaw/latest/, GitHub (NVIDIA/NemoClaw, NVIDIA/OpenShell, openclaw/openclaw)
**Purpose**: Inform book content decisions regarding NemoClaw coverage
**Status of Product**: Alpha (interfaces may change)
**License**: Apache 2.0 (Copyright 2026 NVIDIA Corporation)

---

## 1. What Is NemoClaw?

NemoClaw is **the OpenClaw plugin for NVIDIA OpenShell**. It moves the OpenClaw personal AI assistant into a sandboxed environment where every network request, file access, and inference call is governed by declarative YAML policy.

**Problem it solves**: Autonomous AI agents like OpenClaw can make arbitrary network requests, access the host filesystem, and call any inference endpoint. Without guardrails, this creates security, cost, and compliance risks. NemoClaw enforces strict controls from first boot.

**Who built it**: NVIDIA Corporation.

**Who it's for**: Operators who want to run OpenClaw as an always-on assistant with enterprise-grade isolation, controlled network access, and NVIDIA cloud inference.

### Three Core Capabilities

| Capability           | Description                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Sandbox OpenClaw** | Creates an OpenShell sandbox pre-configured for OpenClaw with strict filesystem and network policies from first boot |
| **Route inference**  | Routes agent traffic through cloud-hosted Nemotron models via build.nvidia.com                                       |
| **Manage lifecycle** | Handles blueprint versioning, digest verification, and reproducible sandbox setup                                    |

### Supported Use Cases

1. Always-on assistant with controlled network access
2. Sandboxed testing before granting broader permissions
3. Remote GPU deployment for persistent operation
4. Telegram-bridged remote assistant (chat with your agent from anywhere)

---

## 2. Architecture

NemoClaw has a **two-component design** with a clear host/sandbox boundary.

### Component Stack

```
┌─────────────────────────────────────────────┐
│  HOST SIDE                                   │
│  ┌─────────────┐   ┌──────────────────────┐ │
│  │ nemoclaw CLI │──▶│ Versioned Blueprint  │ │
│  │ (TypeScript) │   │ (Python artifact)    │ │
│  └─────────────┘   └──────────┬───────────┘ │
│                                │              │
│                    ┌───────────▼───────────┐ │
│                    │   OpenShell Runtime    │ │
│                    │ (K3s in Docker)        │ │
│                    │  ├─ Gateway            │ │
│                    │  ├─ Policy Engine      │ │
│                    │  └─ Privacy Router     │ │
│                    └───────────┬───────────┘ │
├────────────────────────────────┼─────────────┤
│  SANDBOX SIDE                  │              │
│  ┌─────────────────────────────▼───────────┐ │
│  │ OpenClaw Agent (isolated container)      │ │
│  │  ├─ NemoClaw plugin pre-installed        │ │
│  │  ├─ Inference routed through gateway     │ │
│  │  ├─ Network egress policy-controlled     │ │
│  │  └─ Filesystem: /sandbox, /tmp (RW)      │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
         │
         ▼
  NVIDIA Cloud (build.nvidia.com)
  Nemotron inference endpoints
```

### Plugin (TypeScript)

The user-facing CLI entrypoint. Directory structure:

| Path                   | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `src/index.ts`         | Plugin entry point, registers commands               |
| `src/cli.ts`           | Commander.js subcommand configuration                |
| `src/commands/`        | launch, connect, status, logs, slash commands        |
| `src/blueprint/`       | Resolution, fetching, verification, execution, state |
| `openclaw.plugin.json` | Plugin manifest                                      |

### Blueprint (Python)

A versioned, immutable artifact with its own release stream. Contains:

| File                             | Purpose                                             |
| -------------------------------- | --------------------------------------------------- |
| `blueprint.yaml`                 | Manifest with version and compatibility constraints |
| `orchestrator/runner.py`         | CLI runner: plan, apply, status operations          |
| `policies/openclaw-sandbox.yaml` | Network and filesystem policy baseline              |

### Blueprint Lifecycle

1. **Resolve** -- Locate blueprint, validate version constraints
2. **Verify** -- Confirm artifact digest integrity (supply chain safety)
3. **Plan** -- Determine OpenShell resources to create/update
4. **Apply** -- Execute planned operations via OpenShell CLI
5. **Status** -- Report current deployment state

### Design Principles

- **Thin plugin, versioned blueprint**: Plugin stays stable; blueprint evolves independently
- **CLI boundaries**: Commands live under `openclaw nemoclaw` namespace without overriding core OpenClaw functionality
- **Supply chain safety**: Blueprint artifacts are immutable, versioned, and digest-verified before execution
- **Reproducible setup**: Repeated runs recreate identical configurations

---

## 3. Key Concepts

### Sandbox

An isolated container (`ghcr.io/nvidia/openshell-community/sandboxes/openclaw`) running OpenClaw with three Linux security primitives:

| Layer        | Technology                     | What It Controls                                                                                        |
| ------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Filesystem   | **Landlock LSM**               | `/sandbox` and `/tmp` are read-write; `/usr`, `/lib`, `/proc`, `/app`, `/etc`, `/var/log` are read-only |
| System calls | **seccomp**                    | Restricts available syscalls                                                                            |
| Network      | **Network namespaces (netns)** | All egress goes through OpenShell gateway; no direct outbound connections                               |

### Network Policy

Declarative YAML defining allowed endpoints. **Strict-by-default**: only explicitly listed endpoints are reachable. Unknown hosts are blocked and trigger operator approval via TUI.

Key attributes per policy entry:

- `endpoints` -- Host:port pairs
- `binaries` -- Which executables can use this endpoint
- `rules` -- Allowed HTTP methods and URL paths

### Inference Routing

Agent inference requests never leave the sandbox directly. The path is:

```
Agent (sandbox) → OpenShell Gateway → NVIDIA Cloud (build.nvidia.com)
```

The Privacy Router strips caller credentials, injects backend credentials, and forwards to the managed model. Model switching happens at runtime without sandbox restart.

### Operator Approval

Real-time human-in-the-loop for network requests. When the agent tries to reach an unlisted endpoint:

1. OpenShell blocks the request
2. TUI (`openshell term`) shows host, port, binary, HTTP method/path
3. Operator approves or denies
4. Approved endpoints persist for the session only -- never permanently modify baseline policy

### Blueprint

An immutable, versioned orchestration artifact. The separation of plugin (stable interface) from blueprint (evolving logic) allows backend capabilities to change without breaking the CLI contract.

---

## 4. Security Model

NemoClaw's security is defense-in-depth with four layers:

### Layer 1: Filesystem Isolation (Landlock LSM)

| Access     | Paths                                                               |
| ---------- | ------------------------------------------------------------------- |
| Read-Write | `/sandbox`, `/tmp`, `/dev/null`                                     |
| Read-Only  | `/usr`, `/lib`, `/proc`, `/dev/urandom`, `/app`, `/etc`, `/var/log` |

Agent runs as dedicated `sandbox` user. Landlock enforcement is best-effort (depends on kernel support).

### Layer 2: System Call Filtering (seccomp)

Restricts available system calls to a defined allowlist. Details not documented beyond the mention.

### Layer 3: Network Isolation (netns + Policy Engine)

- Network namespace isolates the sandbox from the host network
- All egress routed through OpenShell gateway
- Gateway enforces the YAML network policy
- Default policy allows 9 endpoint groups (see below)
- Unknown endpoints blocked with operator notification

### Layer 4: Inference Routing (Privacy Router)

- Agent cannot call arbitrary LLM endpoints
- All inference goes through OpenShell gateway to NVIDIA cloud
- Gateway handles credential injection (agent never sees API keys directly)
- Model switching controlled by operator, not agent

### Default Network Policy (9 Allowed Endpoint Groups)

| Policy Name       | Endpoints                                                       | Allowed Binaries                          |
| ----------------- | --------------------------------------------------------------- | ----------------------------------------- |
| `claude_code`     | api.anthropic.com:443, statsig.anthropic.com:443, sentry.io:443 | `/usr/local/bin/claude`                   |
| `nvidia`          | integrate.api.nvidia.com:443, inference-api.nvidia.com:443      | claude, openclaw binaries                 |
| `github`          | github.com:443                                                  | `/usr/bin/gh`, `/usr/bin/git`             |
| `github_rest_api` | api.github.com:443                                              | `/usr/bin/gh` (GET/POST/PATCH/PUT/DELETE) |
| `clawhub`         | clawhub.com:443                                                 | `/usr/local/bin/openclaw` (GET/POST)      |
| `openclaw_api`    | openclaw.ai:443                                                 | `/usr/local/bin/openclaw` (GET/POST)      |
| `openclaw_docs`   | docs.openclaw.ai:443                                            | `/usr/local/bin/openclaw` (GET only)      |
| `npm_registry`    | registry.npmjs.org:443                                          | openclaw, npm binaries (GET only)         |
| `telegram`        | api.telegram.org:443                                            | Any binary (GET/POST on `/bot*/**`)       |

**Notable**: The default policy includes `api.anthropic.com` for Claude Code, suggesting OpenClaw uses Claude as its underlying LLM and Claude Code tooling is present inside the sandbox.

### Supply Chain Safety

Blueprint artifacts are immutable, versioned, and digest-verified before execution. This prevents tampered blueprints from being applied.

### Policy Modification

| Method                | Persistence                  | How                                                           |
| --------------------- | ---------------------------- | ------------------------------------------------------------- |
| **Static**            | Permanent (survives restart) | Edit `policies/openclaw-sandbox.yaml`, run `nemoclaw onboard` |
| **Dynamic**           | Session only                 | `openshell policy set <file>` at runtime                      |
| **Operator approval** | Session only                 | Via TUI for individual requests                               |

---

## 5. Supported Models and Integrations

### Inference Models (via build.nvidia.com)

All models served through the `nvidia-nim` provider:

| Model                       | ID                                         | Context Window | Max Output | Notes             |
| --------------------------- | ------------------------------------------ | -------------- | ---------- | ----------------- |
| **Nemotron 3 Super 120B**   | `nvidia/nemotron-3-super-120b-a12b`        | 131,072        | 8,192      | Default model     |
| **Nemotron Ultra 253B**     | `nvidia/llama-3.1-nemotron-ultra-253b-v1`  | 131,072        | 4,096      | Largest available |
| **Nemotron Super 49B v1.5** | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | 131,072        | 4,096      | Mid-tier          |
| **Nemotron 3 Nano 30B**     | `nvidia/nemotron-3-nano-30b-a3b`           | 131,072        | 4,096      | Smallest/fastest  |

All models have 131K context windows. Only the default (120B) has 8K max output; others cap at 4K.

**Switching models at runtime** (no restart needed):

```bash
openshell inference set --provider nvidia-nim --model nvidia/llama-3.1-nemotron-ultra-253b-v1
```

### Authentication

- `NVIDIA_API_KEY` environment variable (from build.nvidia.com)
- Stored in `~/.nemoclaw/credentials.json` on first run
- Credential injection handled by OpenShell gateway (agent doesn't see raw keys)

### Integrations

| Integration          | Purpose                                |
| -------------------- | -------------------------------------- |
| **OpenClaw**         | The agent framework being sandboxed    |
| **OpenShell**        | The sandbox runtime (K3s-in-Docker)    |
| **build.nvidia.com** | NVIDIA cloud inference endpoint        |
| **Telegram**         | Bot bridge for remote chat access      |
| **GitHub**           | Git operations from within sandbox     |
| **npm**              | Package management from within sandbox |
| **ClawHub**          | OpenClaw's skill registry              |
| **Brev**             | Remote GPU deployment (experimental)   |
| **cloudflared**      | Tunnel for external access             |

### MCP (Model Context Protocol)

OpenShell's GitHub page references an "MCP Registry" for integrating external tools, but **no detailed MCP documentation exists** in either the NemoClaw or OpenShell docs. The feature appears to be present but undocumented at this stage.

---

## 6. Relationship to OpenShell

### What OpenShell Is

OpenShell is NVIDIA's **"safe, private runtime for autonomous AI agents."** It provides:

- Sandboxed container execution with policy-governed access
- Multi-layer protection (filesystem, network, process, inference)
- K3s Kubernetes cluster running inside a single Docker container
- Gateway (control plane), Policy Engine, Privacy Router
- Hot-reloadable YAML policies
- Real-time TUI for monitoring

### Supported Agents in OpenShell

OpenShell is **agent-agnostic**. It supports:

| Agent          | Auth Key                                | Notes                      |
| -------------- | --------------------------------------- | -------------------------- |
| Claude Code    | `ANTHROPIC_API_KEY`                     | Fully integrated           |
| OpenCode       | `OPENAI_API_KEY` / `OPENROUTER_API_KEY` | Fully integrated           |
| Codex (OpenAI) | `OPENAI_API_KEY`                        | Fully integrated           |
| OpenClaw       | Community sandbox                       | Requires `--from openclaw` |
| Ollama         | Community sandbox                       | Requires `--from ollama`   |

### NemoClaw's Role

NemoClaw is a **specialized plugin** that pre-configures OpenShell specifically for OpenClaw:

```
OpenShell (generic sandbox runtime)
  └── NemoClaw (OpenClaw-specific configuration + NVIDIA inference routing)
       └── OpenClaw (the agent running inside)
```

**NemoClaw is to OpenShell what a Helm chart is to Kubernetes** -- it's an opinionated, pre-packaged configuration that makes it easy to run one specific workload (OpenClaw) on the generic platform (OpenShell).

Without NemoClaw, you could still run OpenClaw on OpenShell manually, but NemoClaw automates:

- Blueprint-based reproducible setup
- NVIDIA inference routing configuration
- Network policy baselines
- Lifecycle management (onboard, connect, status, logs, destroy)

### OpenShell Without NemoClaw

OpenShell can run Claude Code, Codex, OpenCode, and Ollama directly -- NemoClaw is not needed for those agents. OpenShell is the broader product; NemoClaw is one consumption pattern.

---

## 7. Relationship to OpenClaw

### What OpenClaw Is

OpenClaw is an **open-source personal AI assistant** (built by Peter Steinberger / community) that:

- Runs locally on your devices (Mac, Windows, Linux)
- Connects to messaging channels (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, 20+ others)
- Has persistent memory, browser control, filesystem access, shell execution
- Extensible via skills/plugins (ClawHub registry)
- Model-agnostic (supports OpenAI, Anthropic, and other providers)
- Uses a Gateway WebSocket control plane architecture

### OpenClaw's Security Problem

OpenClaw is powerful but runs with essentially full local access. It can:

- Make arbitrary network requests
- Read/write the host filesystem
- Execute shell commands
- Call any inference endpoint

This is fine for personal tinkering but problematic for always-on deployment, shared environments, or enterprise use.

### What NemoClaw Adds

NemoClaw wraps OpenClaw in OpenShell's sandbox, adding:

| Concern         | Without NemoClaw | With NemoClaw                                |
| --------------- | ---------------- | -------------------------------------------- |
| Network access  | Unrestricted     | Allowlist-only, operator-approved            |
| Filesystem      | Full host access | `/sandbox` + `/tmp` only                     |
| Inference       | Any endpoint     | NVIDIA cloud only, via gateway               |
| Credentials     | On disk          | Injected by gateway, not visible to agent    |
| Reproducibility | Manual setup     | Blueprint-versioned, digest-verified         |
| Monitoring      | Agent logs only  | TUI with network activity, policy violations |

### The Default Policy Reveals the Stack

The default network policy allows `api.anthropic.com` for `/usr/local/bin/claude`, indicating that **Claude Code runs inside the sandbox alongside OpenClaw**. OpenClaw likely uses Claude as its underlying LLM (via Claude Code), and NemoClaw adds NVIDIA's Nemotron models as an alternative/additional inference path.

---

## 8. Getting Started Flow

### Prerequisites

| Requirement | Specification                          |
| ----------- | -------------------------------------- |
| OS          | Ubuntu 22.04 LTS or later (Linux only) |
| CPU         | 4 vCPU minimum, 4+ recommended         |
| RAM         | 8 GB minimum, 16 GB recommended        |
| Disk        | 20 GB free minimum, 40 GB recommended  |
| Node.js     | 20 or later                            |
| npm         | 10 or later                            |
| Docker      | Installed and running                  |
| OpenShell   | Installed                              |
| OpenClaw    | Fresh installation required            |

**Critical constraint**: NemoClaw currently requires a **fresh** installation of OpenClaw. Cannot be added to existing OpenClaw setups.

**Sandbox image**: ~2.4 GB compressed. During push, Docker daemon + K3s + OpenShell gateway run alongside the export pipeline, which buffers decompressed layers in memory. Hence the 16 GB RAM recommendation.

### Installation

Single command:

```bash
curl -fsSL https://nvidia.com/nemoclaw.sh | bash
```

This runs a guided onboarding wizard that:

1. Installs Node.js if absent
2. Creates the sandbox environment
3. Configures inference (Nemotron 3 Super 120B default)
4. Applies security policies (Landlock + seccomp + netns)

### Expected Output

```
──────────────────────────────────────────────────
Sandbox      my-assistant (Landlock + seccomp + netns)
Model        nvidia/nemotron-3-super-120b-a12b (NVIDIA Cloud API)
──────────────────────────────────────────────────
Run:         nemoclaw my-assistant connect
Status:      nemoclaw my-assistant status
Logs:        nemoclaw my-assistant logs --follow
──────────────────────────────────────────────────
```

### First Interaction

```bash
# Connect to the sandbox
nemoclaw my-assistant connect

# Launch interactive chat
sandbox@my-assistant:~$ openclaw tui

# Or send a single message
sandbox@my-assistant:~$ openclaw agent --agent main --local -m "hello" --session-id test
```

### Post-Setup Options

1. Switch inference models (`openshell inference set`)
2. Approve/deny network requests (`openshell term`)
3. Customize network policies (edit YAML + `nemoclaw onboard`)
4. Deploy to remote GPU (`nemoclaw deploy`)
5. Set up Telegram bridge (`nemoclaw start`)
6. Monitor sandbox activity (`openclaw nemoclaw status/logs`)

### CLI Command Reference

| Command                             | Purpose                                    |
| ----------------------------------- | ------------------------------------------ |
| `nemoclaw onboard`                  | Interactive setup wizard                   |
| `nemoclaw <name> connect`           | Shell into sandbox                         |
| `nemoclaw <name> status`            | Show config and health                     |
| `nemoclaw <name> logs [--follow]`   | View logs                                  |
| `nemoclaw <name> destroy`           | Stop and delete sandbox                    |
| `nemoclaw <name> policy-add`        | Add policy presets                         |
| `nemoclaw <name> policy-list`       | List policies                              |
| `nemoclaw list`                     | List all sandboxes                         |
| `nemoclaw deploy <name>`            | Deploy to remote GPU (experimental)        |
| `nemoclaw start`                    | Start aux services (Telegram, cloudflared) |
| `nemoclaw stop`                     | Stop all aux services                      |
| `nemoclaw setup-spark`              | Configure for DGX Spark with cgroup fixes  |
| `openshell term`                    | TUI for monitoring + network approval      |
| `openclaw nemoclaw status [--json]` | Status from within sandbox                 |
| `openclaw nemoclaw logs [-f]`       | Logs from within sandbox                   |
| `/nemoclaw status`                  | In-chat slash command                      |

---

## 9. Key Differentiators

### What Makes NemoClaw Unique

1. **Defense-in-depth for AI agents**: Four security layers (Landlock + seccomp + netns + inference routing) is more comprehensive than typical container isolation. Most agent sandboxes stop at Docker; NemoClaw adds kernel-level enforcement.

2. **Operator-in-the-loop network control**: Real-time TUI for approving/denying network requests as they happen. Session-only approvals prevent permanent policy drift. This is unusual -- most systems are either fully blocked or fully open.

3. **NVIDIA inference routing**: All LLM calls go through OpenShell's Privacy Router, which strips credentials and routes to NVIDIA cloud. The agent never sees API keys. This solves both the "agent leaks credentials" and "agent calls unauthorized endpoints" problems.

4. **Blueprint-based reproducibility**: Immutable, versioned, digest-verified blueprints mean you can recreate identical sandbox configurations. This is infrastructure-as-code thinking applied to agent deployment.

5. **Hot-reloadable policies**: Network policies and inference model selection can change at runtime without restarting the sandbox. Dynamic policy changes are session-scoped by default.

6. **Telegram bridge**: Turns a sandboxed agent into a remote assistant accessible from any Telegram client, with chat ID-based access control.

7. **DGX Spark support**: `nemoclaw setup-spark` command specifically targets NVIDIA's DGX Spark hardware with required cgroup fixes.

### Limitations (as of Alpha)

- **Linux only**: Ubuntu 22.04+ required. No macOS or Windows support.
- **Fresh OpenClaw only**: Cannot retrofit existing OpenClaw installations.
- **NVIDIA models only**: Only four Nemotron models via build.nvidia.com. No support for other LLM providers through the inference routing.
- **Alpha stability**: Interfaces may change. `nemoclaw deploy` is explicitly marked experimental.
- **Landlock best-effort**: Filesystem isolation depends on kernel support (Landlock LSM requires Linux 5.13+).
- **No alerting**: Monitoring is pull-based (TUI, CLI). No proactive alerting documented.
- **Single provider**: Only `nvidia-nim` inference provider documented. No path to add custom providers.

---

## 10. Ecosystem Map

```
NVIDIA Agent Ecosystem (relevant pieces)
├── NeMo Agent Toolkit ─── Framework-agnostic agent library (LangChain, LlamaIndex, etc.)
│                           NOT directly related to NemoClaw
│
├── OpenShell ──────────── Generic sandbox runtime for ANY agent
│   ├── Claude Code support
│   ├── Codex support
│   ├── OpenCode support
│   ├── Ollama support
│   └── OpenClaw support ◄── NemoClaw is the packaging layer here
│
├── NemoClaw ───────────── OpenClaw-specific OpenShell plugin
│   ├── Blueprint system (versioned orchestration)
│   ├── NVIDIA inference routing (Nemotron models)
│   └── Security policies (network + filesystem + seccomp)
│
├── build.nvidia.com ───── Cloud inference endpoint
│   └── Nemotron models (30B, 49B, 120B, 253B)
│
└── Brev (brev.nvidia.com) ── Remote GPU deployment platform
```

### OpenClaw Ecosystem (independent of NVIDIA)

```
OpenClaw (Peter Steinberger / community)
├── Gateway (WebSocket control plane)
├── Channels (WhatsApp, Telegram, Slack, Discord, 20+ more)
├── Skills/Plugins (ClawHub registry)
├── macOS App, iOS/Android nodes, WebChat
└── Model-agnostic (OpenAI, Anthropic, etc.)
```

NemoClaw sits at the intersection: it takes OpenClaw (community agent) and wraps it in OpenShell (NVIDIA runtime) with NVIDIA inference (Nemotron models).

---

## 11. Implications for Book Content

### Relevance

NemoClaw demonstrates the emerging pattern of **agent governance** -- the idea that autonomous agents need enterprise-grade controls around network access, filesystem isolation, inference routing, and operator oversight. This is directly relevant to teaching agent architecture.

### Teaching Opportunities

1. **Security-by-default**: The allowlist-based network policy is a teachable pattern for any agent deployment
2. **Inference routing**: The Privacy Router pattern (strip credentials, inject backend auth, route to managed endpoint) is reusable beyond NemoClaw
3. **Blueprint-as-code**: Versioned, digest-verified deployment artifacts for agents is novel and worth teaching
4. **Operator-in-the-loop**: Real-time approval of agent network requests bridges autonomous operation and human oversight

### Caveats for Coverage

- Alpha status means APIs will change
- Linux-only limits hands-on exercises for students on macOS/Windows
- Tight coupling to NVIDIA cloud inference limits generalizability
- OpenClaw itself is a moving target (community project, model-agnostic)

### Relationship to Existing Content

- **OpenShell** (broader product) is more relevant for students using Claude Code, since OpenShell supports Claude Code directly
- **NemoClaw** is specifically interesting for the OpenClaw + NVIDIA inference use case
- The security model (Landlock + seccomp + netns + inference routing) is worth teaching regardless of which specific product wraps it
