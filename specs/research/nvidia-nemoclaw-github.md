# NVIDIA NemoClaw: GitHub Repository Research Report

**Date**: 2026-03-19
**Source**: https://github.com/NVIDIA/NemoClaw
**Status**: Alpha software (pre-production)

---

## 1. Project Overview

**What it is**: NemoClaw is an open-source stack that simplifies running OpenClaw (a personal AI assistant) inside NVIDIA OpenShell (a secure agent runtime). It is specifically the "OpenClaw plugin for OpenShell" -- a bridge between two independent projects, adding sandboxed execution, NVIDIA inference routing, and declarative security policies.

**Who maintains it**: NVIDIA Corporation & Affiliates. The top contributors are `ericksoa` (133 commits), `miyoungc` (45), and `jacobtomlinson` (25), plus 20 additional contributors.

**License**: Apache License 2.0.

**Repository age**: Created 2026-03-15, so only 4 days old at time of research. This is a brand-new project.

**Codebase size**: ~982 KB on disk. Approximately 412 KB of source code across:

| Language   | Size (bytes) | Role                                 |
| ---------- | -----------: | ------------------------------------ |
| JavaScript |      161,809 | CLI entry point (`bin/`), test suite |
| TypeScript |      117,997 | Plugin source (`nemoclaw/src/`)      |
| Shell      |      114,128 | Install scripts, setup, automation   |
| Python     |       14,889 | Blueprint runner, docs extensions    |
| Dockerfile |        2,645 | Sandbox container image              |
| Makefile   |          843 | Build tasks                          |

**Activity**: Extremely active. 20 commits in the first 4 days (2026-03-15 to 2026-03-19). 82 open issues, 152 pull requests total. 9,820 stars, 993 forks -- unusually high for a 4-day-old repo, suggesting significant pre-announcement interest or an internal-first development model.

**Documentation site**: https://docs.nvidia.com/nemoclaw/latest/ (Sphinx/MyST, hosted by NVIDIA).

---

## 2. Architecture

NemoClaw follows a **thin plugin + versioned blueprint** separation:

### Component Stack

```
Host Machine
  nemoclaw CLI (bin/nemoclaw.js)
    TypeScript Plugin (nemoclaw/src/)
      Blueprint Runner (nemoclaw-blueprint/orchestrator/runner.py)
        OpenShell CLI (openshell)
          Sandbox Container
            OpenClaw Agent + NemoClaw Plugin
              NVIDIA Inference (via OpenShell gateway)
```

### Four Core Components

| Component     | Technology                           | Role                                                                               |
| ------------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| **Plugin**    | TypeScript + Commander.js            | CLI commands: launch, connect, status, logs, onboard                               |
| **Blueprint** | Python + YAML                        | Versioned artifact that orchestrates sandbox creation, policy, and inference setup |
| **Sandbox**   | Docker container (OpenShell-managed) | Isolated OpenClaw instance with Landlock + seccomp + netns                         |
| **Inference** | OpenShell gateway proxy              | Routes all model API calls through controlled backends                             |

### Blueprint Lifecycle

The blueprint follows a 5-stage lifecycle: **resolve** (locate artifact + check version compatibility) -> **verify** (check digest) -> **plan** (determine resources) -> **apply** (create sandbox via OpenShell CLI) -> **status** (report state).

The blueprint is executed as a Python subprocess by the TypeScript plugin. Communication uses a structured stdout protocol: `PROGRESS:<0-100>:<label>` for progress updates and `RUN_ID:<id>` for run identification.

### Key Design Principles

1. **Thin plugin, versioned blueprint**: Plugin stays small and stable; orchestration logic evolves on its own release cadence.
2. **Supply chain safety**: Blueprint artifacts are immutable, versioned, and digest-verified.
3. **Reproducible setup**: Running setup again recreates the sandbox from the same blueprint/policy.
4. **OpenShell-native**: For new installs, recommends `openshell sandbox create` directly rather than forcing plugin bootstrap.

---

## 3. Agent Model

NemoClaw does not define its own agent abstraction. It wraps **OpenClaw** -- an existing, independent AI assistant project:

- **OpenClaw** is the agent framework (Node.js-based, created by Peter Steinberger and community)
- **NemoClaw** sandboxes OpenClaw inside OpenShell and routes inference to NVIDIA models
- The agent runs OpenClaw's standard agent system inside the sandbox
- Users interact via OpenClaw's TUI (`openclaw tui`) or CLI (`openclaw agent --agent main --local -m "..."`)

### Plugin Registration

NemoClaw registers with OpenClaw's plugin API:

- **Slash command**: `/nemoclaw` for in-chat sandbox management
- **CLI subcommands**: `openclaw nemoclaw launch|status|logs`
- **Model provider**: Registers NVIDIA Nemotron models as an inference provider
- **Services**: Background services (Telegram bridge, cloudflared tunnel)

### Available Models (via NVIDIA Cloud)

| Model                                    | Context | Max Output |
| ---------------------------------------- | ------- | ---------- |
| nvidia/nemotron-3-super-120b-a12b        | 131,072 | 8,192      |
| nvidia/llama-3.1-nemotron-ultra-253b-v1  | 131,072 | 4,096      |
| nvidia/llama-3.3-nemotron-super-49b-v1.5 | 131,072 | 4,096      |
| nvidia/nemotron-3-nano-30b-a3b           | 131,072 | 4,096      |

---

## 4. Security and Isolation Model

This is NemoClaw's primary value proposition. Four protection layers:

### Layer 1: Network Policy (Hot-reloadable)

- **Deny-by-default** egress model
- Policies defined in YAML (`openclaw-sandbox.yaml`)
- Per-binary restrictions: specific binaries can only reach specific endpoints
- Operator approval flow via TUI for unlisted hosts
- Approved endpoints persist for session only (not saved to baseline policy)
- Pre-built policy presets for: Discord, Docker, Hugging Face, Jira, npm, Outlook, PyPI, Slack, Telegram

**Example policy structure** (from `openclaw-sandbox.yaml`):

```yaml
network_policies:
  claude_code:
    endpoints:
      - host: api.anthropic.com
        port: 443
        protocol: rest
        enforcement: enforce
        tls: terminate
        rules:
          - allow: { method: "*", path: "/**" }
    binaries:
      - { path: /usr/local/bin/claude }
```

### Layer 2: Filesystem Policy (Locked at creation)

| Path                                                                | Access     |
| ------------------------------------------------------------------- | ---------- |
| `/sandbox`, `/tmp`, `/dev/null`                                     | Read-write |
| `/usr`, `/lib`, `/proc`, `/dev/urandom`, `/app`, `/etc`, `/var/log` | Read-only  |
| Everything else                                                     | Denied     |

Uses Linux Landlock LSM (best-effort compatibility mode).

### Layer 3: Process Policy (Locked at creation)

- Runs as dedicated `sandbox` user/group
- Blocks privilege escalation
- Blocks dangerous syscalls (seccomp)

### Layer 4: Inference Policy (Hot-reloadable)

- All inference requests intercepted by OpenShell gateway
- Agent never makes direct outbound model API calls
- Model calls routed to controlled backends (NVIDIA cloud by default)
- Inference endpoint configured as `https://inference.local/v1` inside sandbox (gateway proxy)
- API key injected by OpenShell, not stored in sandbox

---

## 5. Supported Channels and Integrations

### Messaging Platforms

| Platform | Status        | Implementation                                              |
| -------- | ------------- | ----------------------------------------------------------- |
| Telegram | Supported     | Bridge script (`scripts/telegram-bridge.js`), policy preset |
| Discord  | Policy preset | Network policy preset only                                  |
| Slack    | Policy preset | Network policy preset only                                  |
| Outlook  | Policy preset | Network policy preset only                                  |

The Telegram bridge is the most developed: a Node.js script that forwards messages between a Telegram bot and the sandboxed agent. Managed by `nemoclaw start/stop`.

### APIs and Services

Pre-configured network policies exist for:

- GitHub (git + gh CLI)
- npm registry
- PyPI
- Docker
- Hugging Face
- Jira

### Deployment Targets

| Target                | Status       | Details                                 |
| --------------------- | ------------ | --------------------------------------- |
| Local Linux           | Primary      | Docker required                         |
| macOS (Apple Silicon) | Supported    | Colima or Docker Desktop                |
| Windows WSL           | Supported    | Docker Desktop with WSL backend         |
| DGX Spark             | Supported    | Special setup script (`setup-spark.sh`) |
| Remote GPU (Brev)     | Experimental | `nemoclaw deploy` command               |

---

## 6. Tech Stack

### Runtime Dependencies

| Component        | Technology                                    |
| ---------------- | --------------------------------------------- |
| CLI entry point  | Node.js 20+, Commander.js                     |
| Plugin           | TypeScript 5.4+                               |
| Blueprint runner | Python 3.11+, PyYAML                          |
| Container image  | node:22-slim base                             |
| Package manager  | npm 10+ (Node), uv (Python)                   |
| Test framework   | Vitest (TS), shell-based E2E                  |
| Documentation    | Sphinx + MyST Markdown                        |
| Linting          | ESLint + Prettier (TS), ruff (Python implied) |
| Sandbox runtime  | OpenShell (Rust)                              |

### Key npm Dependencies

- `commander` ^13.1.0 (CLI framework)
- `json5` ^2.2.3 (config parsing)
- `tar` ^7.0.0 (blueprint artifact handling)
- `yaml` ^2.4.0 (policy/config parsing)

### Container Stack

- Base image: `node:22-slim`
- Agent binary: OpenClaw CLI (`openclaw@2026.3.11`)
- Sandbox image: `ghcr.io/nvidia/openshell-community/sandboxes/openclaw:latest`
- Runtime: OpenShell (Rust) with Docker backend

---

## 7. Relationship to OpenShell

**OpenShell** (https://github.com/NVIDIA/OpenShell) is a separate NVIDIA project:

| Aspect   | OpenShell                            | NemoClaw                               |
| -------- | ------------------------------------ | -------------------------------------- |
| What     | General-purpose secure agent runtime | OpenClaw-specific plugin for OpenShell |
| Language | Rust (87.2%)                         | TypeScript + JavaScript + Python       |
| Stars    | 2,129                                | 9,820                                  |
| Created  | 2026-02-24                           | 2026-03-15                             |
| Scope    | Any agent                            | OpenClaw agents only                   |
| License  | Apache 2.0                           | Apache 2.0                             |

**Relationship**: NemoClaw is a **consumer** of OpenShell. It uses OpenShell as the underlying sandbox/security runtime:

- NemoClaw calls `openshell` CLI commands to create sandboxes, set policies, configure providers
- OpenShell provides the actual isolation (Landlock, seccomp, network namespaces, gateway proxy)
- NemoClaw adds the OpenClaw-specific layer: plugin registration, inference routing to Nemotron, blueprint lifecycle
- Both are part of the broader "NVIDIA Agent Toolkit" ecosystem

NemoClaw requires OpenShell to be installed first (it's a prerequisite). The install script (`scripts/install-openshell.sh`) handles this.

---

## 8. Relationship to OpenClaw

**OpenClaw** (https://openclaw.ai) is an **independent, community-maintained** open-source project:

| Aspect       | OpenClaw                      | NemoClaw                               |
| ------------ | ----------------------------- | -------------------------------------- |
| Maintainer   | Peter Steinberger + community | NVIDIA                                 |
| Purpose      | Personal AI assistant         | Secure deployment wrapper for OpenClaw |
| Relationship | The agent being sandboxed     | The sandbox + infrastructure layer     |
| License      | Open source                   | Apache 2.0                             |

**Relationship**: NemoClaw is **not a fork** of OpenClaw. It is a deployment and security wrapper:

1. OpenClaw is the AI assistant (handles agent logic, chat, integrations, plugins)
2. NemoClaw installs OpenClaw inside an OpenShell sandbox
3. NemoClaw registers as an OpenClaw plugin (via `openclaw.plugin.json`)
4. NemoClaw routes OpenClaw's inference calls to NVIDIA models
5. NemoClaw applies security policies that OpenClaw doesn't provide natively

OpenClaw can run without NemoClaw (unsandboxed, with any model provider). NemoClaw cannot run without OpenClaw (it's the agent being sandboxed).

---

## 9. Community and Governance

| Metric             | Value                             |
| ------------------ | --------------------------------- |
| Stars              | 9,820                             |
| Forks              | 993                               |
| Open issues        | 82                                |
| Total PRs          | 152                               |
| Contributors       | 23                                |
| Age                | 4 days (2026-03-15 to 2026-03-19) |
| Commit frequency   | ~5/day since creation             |
| Primary maintainer | ericksoa (133 commits)            |

### Governance

- **Contributing**: Conventional Commits required, maintainer review on all PRs, max 10 open PRs per contributor
- **Security**: Vulnerabilities reported via NVIDIA PSIRT (not GitHub issues), PGP-signed email option
- **Code of Conduct**: Standard community code of conduct
- **Issue templates**: Bug report and feature request templates
- **CI/CD**: PR workflow, docs build workflow, PR count limit workflow
- **AI coding support**: Includes `/update-docs` skill for AI agent contributors (Cursor, Claude Code, Codex)

### Documentation Quality

Comprehensive Sphinx/MyST documentation covering:

- Overview, How It Works, Architecture
- Quickstart guide
- CLI command reference
- Network policies reference
- Inference profiles reference
- Deployment guides (remote GPU, Telegram bridge)
- Monitoring and troubleshooting

---

## 10. Key Differentiators

### What Makes NemoClaw Notable

1. **Enterprise-grade agent sandboxing**: Most agent frameworks have no isolation. NemoClaw applies 4-layer security (network, filesystem, process, inference) using Linux kernel mechanisms (Landlock, seccomp, network namespaces).

2. **Declarative security policies**: Network egress rules are YAML-defined, per-binary, and hot-reloadable. This is a significant step beyond "run the agent and hope for the best."

3. **Inference interception**: The agent inside the sandbox cannot make direct model API calls. All inference is routed through the OpenShell gateway. This prevents credential leakage and enables cost/usage control.

4. **Operator approval flow**: When the agent tries to reach an unlisted host, the request is blocked and surfaced in a TUI for human approval. This is a practical human-in-the-loop pattern for autonomous agents.

5. **Blueprint versioning and supply chain safety**: Sandbox configurations are immutable, versioned artifacts with digest verification. This addresses reproducibility and supply chain concerns.

6. **NVIDIA model ecosystem**: Default routing to Nemotron 3 Super 120B via build.nvidia.com, with 4 Nemotron models available. Runtime model switching without sandbox restart.

7. **Policy presets**: Ready-made YAML policies for common integrations (Slack, Discord, Jira, Telegram, Docker, npm, PyPI, etc.) -- drop-in security templates.

### Limitations (Alpha Stage)

- Linux-first (macOS via Colima/Docker Desktop, Windows via WSL only)
- Docker required (no Podman support on macOS yet)
- Local inference (Ollama, vLLM) still experimental
- `nemoclaw deploy` (remote GPU) is experimental
- Plugin commands (`openclaw nemoclaw`) under active development
- No production-readiness claim
- Interfaces, APIs, and behavior may change without notice

---

## 11. Relevance to Our Book Content

### Teaching Opportunities

1. **Agent Security Architecture** (Part 2-3): NemoClaw demonstrates a production-grade pattern for agent isolation that goes far beyond "use an API key." The 4-layer model (network, filesystem, process, inference) is teachable.

2. **Declarative Policy as Code**: The YAML-based security policy system is a strong example of infrastructure-as-code applied to agent governance. Relevant to enterprise agent chapters.

3. **Blueprint/Artifact Pattern**: The resolve -> verify -> plan -> apply lifecycle is a clean orchestration pattern. Comparable to Terraform for agent infrastructure.

4. **Human-in-the-Loop Security**: The operator approval flow (TUI-based, real-time) is a practical pattern for Chapter 25+ enterprise agent topics.

5. **NVIDIA Ecosystem Integration**: NemoClaw positions NVIDIA as a serious player in the "safe autonomous agents" space, complementing their inference API (build.nvidia.com) and hardware (DGX Spark).

### Potential Concerns

- **Alpha maturity**: Only 4 days old. APIs will change. Not suitable as a "teach students to build on this" platform yet.
- **OpenClaw dependency**: Tightly coupled to OpenClaw. If OpenClaw's trajectory changes, NemoClaw's utility narrows.
- **Linux-centric**: Students on macOS/Windows face friction. Not a plug-and-play experience.

### Recommendation

**Include as reference material (not hands-on)** in enterprise agent security chapters. The security architecture patterns (policy presets, inference routing, operator approval) are valuable teaching content regardless of whether students use NemoClaw directly. Monitor for beta/GA release before considering hands-on exercises.

---

## Appendix: Repository File Structure

```
NVIDIA/NemoClaw/
├── .agents/skills/update-docs/     # AI agent skill for doc updates
├── .github/workflows/              # CI: docs, PR tests, PR limits
├── bin/                            # CLI entry point + libraries
│   ├── nemoclaw.js                 #   Main CLI binary
│   └── lib/                        #   Onboard, preflight, policies, etc.
├── docs/                           # Sphinx/MyST documentation
│   ├── about/                      #   Overview, how-it-works, release notes
│   ├── deployment/                 #   Remote GPU, Telegram bridge
│   ├── get-started/                #   Quickstart
│   ├── inference/                  #   Provider switching
│   ├── monitoring/                 #   Sandbox monitoring
│   ├── network-policy/             #   Egress control, customization
│   ├── reference/                  #   Architecture, commands, policies
│   └── _ext/                       #   Sphinx extensions (search, JSON output)
├── nemoclaw/                       # TypeScript plugin package
│   ├── src/                        #   Source (blueprint/, commands/, onboard/)
│   ├── dist/                       #   Compiled output
│   ├── openclaw.plugin.json        #   Plugin manifest
│   └── package.json                #   Dependencies
├── nemoclaw-blueprint/             # Python blueprint artifact
│   ├── blueprint.yaml              #   Manifest (version, profiles, components)
│   ├── orchestrator/runner.py      #   Plan/apply/status/rollback actions
│   ├── policies/                   #   Baseline + preset YAML policies
│   └── migrations/                 #   Schema migration support
├── scripts/                        # Install, setup, automation scripts
├── test/                           # Integration + E2E tests
├── Dockerfile                      # Sandbox container image
├── install.sh                      # Main installer
├── uninstall.sh                    # Clean uninstaller
├── spark-install.md                # DGX Spark setup guide
├── LICENSE                         # Apache 2.0
├── SECURITY.md                     # NVIDIA PSIRT vulnerability reporting
└── CONTRIBUTING.md                 # Contribution guidelines
```
