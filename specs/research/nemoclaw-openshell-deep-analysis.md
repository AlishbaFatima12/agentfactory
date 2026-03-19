# NemoClaw + OpenShell Deep Code Analysis

Source: cloned repos at depth=50 from `github.com/NVIDIA/NemoClaw` and `github.com/NVIDIA/OpenShell`.

---

## 1. Codebase Metrics

| Repo      | Language              | Lines of Code (excl. generated/vendor) |
| --------- | --------------------- | -------------------------------------- |
| NemoClaw  | JavaScript/TypeScript | ~12,243                                |
| NemoClaw  | Python                | ~3,629                                 |
| OpenShell | Rust                  | ~69,425                                |
| OpenShell | Python                | ~9,668                                 |

**NemoClaw** is a relatively thin orchestration layer (~16K LoC). **OpenShell** is a serious Rust systems project (~69K LoC Rust + ~10K Python) — a production-grade sandbox runtime.

---

## 2. NemoClaw Architecture

### 2.1 Dual Interface: OpenClaw Plugin + Standalone CLI

NemoClaw has **two** entry points that share the same underlying code:

**A. OpenClaw Plugin** (`nemoclaw/src/index.ts`)

- Registers as an OpenClaw plugin via `openclaw.plugin.json` (id: `nemoclaw`, version `0.1.0`)
- Plugin entry: `register(api: OpenClawPluginApi)` at line 242
- Registers three things:
  1. **Slash command** `/nemoclaw` (chat interface for status/eject/onboard)
  2. **CLI subcommands** under `openclaw nemoclaw <subcommand>` (commander.js)
  3. **Model provider** `inference` with NVIDIA Nemotron models as the catalog

**B. Standalone CLI** (`bin/nemoclaw.js`)

- Direct `nemoclaw <command>` dispatch — 380 lines of pure Node.js
- Commands: `onboard`, `list`, `deploy`, `setup`, `start`, `stop`, `status`
- Sandbox-scoped: `nemoclaw <name> connect|status|logs|policy-add|policy-list|destroy`

The plugin interface delegates to `openshell` CLI commands. The standalone CLI does the same but adds deployment features (Brev VM deployment, service management).

### 2.2 Blueprint System (Python Orchestrator)

**File**: `nemoclaw-blueprint/orchestrator/runner.py` (347 lines)

The blueprint is a YAML-defined deployment specification (`blueprint.yaml`) with four actions:

| Action     | What it does                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| `plan`     | Validates inputs, resolves inference profile, checks prerequisites. Emits `PROGRESS:<pct>:<label>` on stdout              |
| `apply`    | Creates sandbox via `openshell sandbox create`, configures provider via `openshell provider create`, sets inference route |
| `status`   | Reports most recent run state from `~/.nemoclaw/state/runs/`                                                              |
| `rollback` | Stops and removes sandbox, marks run as rolled back                                                                       |

**Key design decision**: The TS plugin spawns the Python runner as a subprocess (`python3 runner.py <action>`). Communication is via stdout protocol: `PROGRESS:<0-100>:<label>` for progress, `RUN_ID:<id>` for run identification, exit code for success/failure. This is in `nemoclaw/src/blueprint/exec.ts` lines 57-98.

**Blueprint profiles** (from `blueprint.yaml`):

- `default` — NVIDIA Build API (`integrate.api.nvidia.com/v1`), model `nvidia/nemotron-3-super-120b-a12b`
- `ncp` — NVIDIA Cloud Partner (dynamic endpoint)
- `nim-local` — Self-hosted NIM container
- `vllm` — Local vLLM (`localhost:8000/v1`)

### 2.3 Blueprint Integrity & Version Checking

**File**: `nemoclaw/src/blueprint/verify.ts`

- SHA-256 directory digest computed over all files (sorted paths + contents)
- Semver compatibility check: blueprint declares `min_openshell_version` and `min_openclaw_version`
- Blueprint cached at `~/.nemoclaw/blueprints/<version>/`

**File**: `nemoclaw/src/blueprint/resolve.ts`

- Resolution: check local cache first, then fetch from `ghcr.io/nvidia/nemoclaw-blueprint` OCI registry
- Blueprint fetching delegated to `./fetch.ts` (not fully read, but imported)

### 2.4 Migration System

**File**: `nemoclaw/src/commands/migrate.ts` (297 lines)

The most complex command. Migration workflow:

1. Detect existing host OpenClaw installation (state dir, config, workspace, extensions, skills, hooks)
2. Resolve and verify blueprint
3. Plan + apply (creates sandbox)
4. Create snapshot bundle of host state (tar archives preserving symlinks)
5. Copy archives into sandbox via `openshell sandbox cp`
6. Extract inside sandbox, verify config paths are rewritten correctly
7. Save state with rollback snapshot path

**Notable**: Verification runs a Node.js script _inside the sandbox_ (`execSandboxCommand`) to validate that config paths, symlinks, and external roots were migrated correctly. This is at lines 237-265.

### 2.5 Eject (Rollback)

**File**: `nemoclaw/src/commands/eject.ts`

- Requires a migration snapshot to exist
- Rollback blueprint → restore host state from snapshot → clear NemoClaw state
- Explicit `--confirm` flag required (safety gate)

### 2.6 State Management

**File**: `nemoclaw/src/blueprint/state.ts`

Simple JSON state file at `~/.nemoclaw/state/nemoclaw.json`:

```typescript
interface NemoClawState {
  lastRunId;
  lastAction;
  blueprintVersion;
  sandboxName;
  migrationSnapshot;
  hostBackupPath;
  createdAt;
  updatedAt;
}
```

### 2.7 Network Policies

**File**: `nemoclaw-blueprint/policies/openclaw-sandbox.yaml`

This is the **default deny-by-default network policy** shipped with NemoClaw. It defines exactly which hosts the sandbox can reach:

| Policy Name     | Allowed Hosts                                       | Binary Restrictions          | TLS                          |
| --------------- | --------------------------------------------------- | ---------------------------- | ---------------------------- |
| `claude_code`   | api.anthropic.com, statsig.anthropic.com, sentry.io | `/usr/local/bin/claude` only | terminate                    |
| `nvidia`        | integrate.api.nvidia.com, inference-api.nvidia.com  | `claude`, `openclaw`         | terminate                    |
| `github`        | github.com, api.github.com                          | `gh`, `git`                  | full access                  |
| `clawhub`       | clawhub.com                                         | `openclaw` only              | terminate, GET+POST only     |
| `openclaw_api`  | openclaw.ai                                         | `openclaw` only              | terminate, GET+POST only     |
| `openclaw_docs` | docs.openclaw.ai                                    | `openclaw` only              | GET only                     |
| `npm_registry`  | registry.npmjs.org                                  | `openclaw`, `npm`            | full access                  |
| `telegram`      | api.telegram.org                                    | any binary                   | terminate, /bot\* paths only |

**Filesystem policy**: read-only `/usr`, `/lib`, `/proc`, `/dev/urandom`, `/app`, `/etc`, `/var/log`. Read-write: `/sandbox`, `/tmp`, `/dev/null`. Process runs as `sandbox:sandbox` user.

**9 policy presets** in `policies/presets/`: discord, docker, huggingface, jira, npm, outlook, pypi, slack, telegram. Each follows the same YAML schema with host/port/protocol/rules.

### 2.8 Sandbox Container Image

**File**: `Dockerfile` (72 lines)

- Base: `node:22-slim` with Python3, curl, git, iproute2
- Installs OpenClaw CLI globally: `npm install -g openclaw@2026.3.11`
- Creates `sandbox:sandbox` user (matches OpenShell convention)
- Copies NemoClaw plugin + blueprint into `/opt/nemoclaw/`
- Pre-configures `~/.openclaw/openclaw.json` with NVIDIA as default provider
  - **Key detail**: `baseUrl` is `https://inference.local/v1` — this is the OpenShell inference proxy endpoint
  - API key is `openshell-managed` — credentials injected by OpenShell at runtime
  - Model costs set to `0` (sandbox routes through managed infrastructure)
- Installs NemoClaw plugin into OpenClaw: `openclaw plugins install /opt/nemoclaw`

### 2.9 Telegram Bridge

**File**: `scripts/telegram-bridge.js` (247 lines)

A long-polling Telegram bot that:

1. Polls `getUpdates` from Telegram API
2. For each message, SSHs into the sandbox: `openshell sandbox ssh-config` → write temp config → spawn `ssh` with the agent command
3. Filters out NemoClaw banner lines from stdout
4. Sends response back to Telegram (chunked at 4000 chars, Markdown with fallback)
5. Access control via `ALLOWED_CHAT_IDS` env var (comma-separated)

### 2.10 Install Script

**File**: `install.sh` (353 lines)

Five phases:

1. **Node.js**: Install via nvm if missing (SHA-256 verified nvm installer download)
2. **Ollama**: Install if GPU detected, pull appropriate model by VRAM (120GB+ → nemotron-3-super:120b, else nemotron-3-nano:30b). Currently commented out in `main()`.
3. **NemoClaw**: `npm install -g` from GitHub
4. **Verify**: Check binary is on PATH, create shim at `~/.local/bin/nemoclaw` if needed
5. **Onboard**: Run `nemoclaw onboard` interactively

### 2.11 Onboarding Flow

**File**: `nemoclaw/src/commands/onboard.ts` (523 lines)

Interactive wizard with 9 steps:

1. Check existing config
2. Endpoint selection (build, ncp, ollama, nim-local*, vllm*)
3. Endpoint URL resolution (build → hardcoded NVIDIA URL, ncp → prompt, ollama → `host.openshell.internal:11434/v1`)
4. Credential collection (env detection, prompt)
5. API key validation against endpoint
6. Model selection (curated list: Nemotron, Kimi K2.5, GLM-5, MiniMax M2.5, Qwen3.5, GPT-OSS)
7. Profile resolution
8. Apply: `openshell provider create` + `openshell inference set`
9. Save config to disk

Non-interactive mode supported when all flags provided.

### 2.12 Tests

20 test files in `/test/`, using Node.js built-in test runner (`node:test`):

- `cli.test.js` — dispatch, help output, unknown commands
- `policies.test.js` — preset loading, endpoint extraction, YAML schema validation, command building
- `runner.test.js` — stdin isolation for child processes
- `credentials.test.js`, `onboard.test.js`, `registry.test.js`, `preflight.test.js`, etc.
- 1 TypeScript unit test: `nemoclaw/src/commands/status.test.ts` (vitest)
- E2E: `test/e2e-test.sh` and `test/e2e/test-full-e2e.sh`

---

## 3. OpenShell Architecture

### 3.1 Crate Structure (9 Rust Crates)

| Crate                 | Purpose                                 | Key Types                                      |
| --------------------- | --------------------------------------- | ---------------------------------------------- |
| `openshell-core`      | Shared types, protobuf, config          | `Config`, `TlsConfig`, proto types             |
| `openshell-sandbox`   | Process sandbox + monitor (the runtime) | `run_sandbox()`, `ProcessHandle`, `OpaEngine`  |
| `openshell-server`    | gRPC/HTTP gateway server                | `run_server()`, persistence, sandbox lifecycle |
| `openshell-cli`       | CLI frontend (`openshell` binary)       | Subcommands via clap                           |
| `openshell-tui`       | Terminal UI (ratatui)                   | Dashboard, sandbox detail, policy views        |
| `openshell-router`    | Inference routing                       | `Router`, `ResolvedRoute`, streaming proxy     |
| `openshell-policy`    | Policy parsing + validation             | YAML↔proto, `restrictive_default_policy()`     |
| `openshell-providers` | Provider discovery + registry           | 10 provider plugins                            |
| `openshell-bootstrap` | Gateway deployment (Docker + K3s)       | `deploy_gateway()`, PKI generation             |

**Rust edition 2024, MSRV 1.88.** Uses tokio, tonic (gRPC), axum (HTTP), rustls (TLS), regorus (OPA), landlock, seccomp.

### 3.2 Sandbox Runtime (`openshell-sandbox`)

This is the core security component. **File**: `crates/openshell-sandbox/src/lib.rs` (~1790 lines).

`run_sandbox()` is the main entry point (line 149). Lifecycle:

1. **Load policy**: From files (Rego + YAML) or gRPC (fetch from gateway). Falls back to restrictive default.
2. **Validate sandbox user**: Fails fast if `sandbox` user doesn't exist in the image.
3. **Fetch provider env**: Gets credentials from gateway server via gRPC.
4. **Prepare filesystem**: Creates read_write directories, chowns to sandbox user. **Security**: Checks for symlinks before chown to prevent privilege escalation (TOCTOU safe because child hasn't forked yet).
5. **Generate ephemeral CA**: For HTTPS L7 inspection (TLS termination at the proxy).
6. **Create network namespace** (Linux only): Isolated network with veth pair (`10.200.0.1/24` host, `10.200.0.2/24` sandbox). Installs iptables bypass detection rules.
7. **Start HTTP CONNECT proxy**: OPA-evaluated policy decisions on every connection.
8. **Start SSH server**: For remote shell access into the sandbox.
9. **Spawn bypass monitor**: Reads `/dev/kmsg` for iptables LOG entries to detect direct connection attempts.
10. **Spawn child process**: The actual sandboxed command, with Landlock + seccomp applied.
11. **Start background tasks**: Policy poll loop, denial aggregator, route cache refresh.
12. **Zombie reaper**: PID 1 behavior — reaps orphaned grandchildren.

### 3.3 Security Layers (Defense in Depth)

**Layer 1: Network Namespace** (`sandbox/linux/netns.rs`)

- Creates isolated netns `sandbox-{uuid}` with veth pair
- All traffic must go through the proxy on the host side
- Iptables REJECT rules for any traffic that bypasses the proxy

**Layer 2: HTTP CONNECT Proxy** (`proxy.rs`)

- Every outbound TCP connection must go through HTTP CONNECT
- OPA policy evaluation on each CONNECT request
- Process identity binding: resolves which binary owns the TCP socket via `/proc/net/tcp`
- SHA-256 TOFU for binary identity verification
- Ancestor process tree walk for script detection (e.g., Node.js running `/usr/local/bin/claude`)
- L7 inspection: TLS termination with ephemeral CA for REST protocol enforcement

**Layer 3: OPA Policy Engine** (`opa.rs`)

- Embedded `regorus` (Rust OPA implementation)
- Baked-in Rego rules at `data/sandbox-policy.rego`
- Evaluates: host, port, binary path, binary SHA-256, ancestor paths, cmdline paths
- Returns `Allow { matched_policy }` or `Deny { reason }`
- Hot-reloadable: background poll loop detects new policy versions from gateway

**Layer 4: Landlock** (`sandbox/linux/landlock.rs`)

- Linux kernel filesystem sandboxing (ABI V2)
- Restricts filesystem access to policy-specified paths
- `read_only` paths get `AccessFs::from_read()`
- `read_write` paths get `AccessFs::from_all()`
- Workdir automatically included if `include_workdir: true`

**Layer 5: Seccomp** (`sandbox/linux/seccomp.rs`)

- Blocks dangerous socket domains: `AF_PACKET`, `AF_BLUETOOTH`, `AF_VSOCK`
- In non-proxy mode: also blocks `AF_INET`, `AF_INET6`, `AF_NETLINK`
- Uses `PR_SET_NO_NEW_PRIVS` before applying filter

**Layer 6: Process Identity**

- Always runs as `sandbox:sandbox` user (validated at startup)
- Policy validation rejects `run_as_user: root` (or any non-sandbox user)
- Path traversal, relative paths, overly broad paths (`/` as read-write) all rejected

### 3.4 Policy System (`openshell-policy`)

**File**: `crates/openshell-policy/src/lib.rs` (~1120 lines)

Bidirectional YAML↔proto conversion with `deny_unknown_fields` on all serde types (strict parsing).

**Restrictive default policy** (line 377):

- Filesystem: workdir, `/usr`, `/lib`, `/proc`, `/dev/urandom`, `/app`, `/etc`, `/var/log` (RO); `/sandbox`, `/tmp`, `/dev/null` (RW)
- Network: **empty** (no network policies = all network blocked)
- Process: `sandbox:sandbox`
- Landlock: `best_effort`

**Policy validation** checks (line 492):

- `run_as_user` / `run_as_group` must be `"sandbox"`
- Paths must be absolute, no `..` traversal, no overly broad `/`
- Max 256 filesystem paths, max 4096 chars per path

### 3.5 Inference Routing (`openshell-router` + L7 interception)

**File**: `crates/openshell-router/src/lib.rs`

The router proxies inference API calls to configured backends. It uses `reqwest` for HTTP and supports:

- Protocol-based routing: `openai_chat_completions`, `openai_completions`, `openai_responses`, `anthropic_messages`, `model_discovery`
- Streaming responses (SSE for chat completions)
- Mock routes for testing

**File**: `crates/openshell-sandbox/src/l7/inference.rs`

Default inference patterns:

- `POST /v1/chat/completions` → `openai_chat_completions`
- `POST /v1/completions` → `openai_completions`
- `POST /v1/responses` → `openai_responses`
- `POST /v1/messages` → `anthropic_messages`
- `GET /v1/models` → `model_discovery`

Traffic to `inference.local` is intercepted by the CONNECT proxy and routed locally, never leaving the sandbox.

**Route sources** (priority order):

1. `--inference-routes` file (standalone mode)
2. Cluster bundle via gRPC (cluster mode, refreshed every 5s)

**Dual route cache**: User routes (for `inference.local`) and system routes (for `sandbox-system`, supervisor-only). System routes bypass the proxy entirely.

### 3.6 Provider System (`openshell-providers`)

**File**: `crates/openshell-providers/src/lib.rs`

10 provider plugins registered:
| Provider | Plugin Struct |
|----------|--------------|
| `claude` | `ClaudeProvider` |
| `codex` | `CodexProvider` |
| `opencode` | `OpencodeProvider` |
| `generic` | `GenericProvider` |
| `openai` | `OpenaiProvider` |
| `anthropic` | `AnthropicProvider` |
| `nvidia` | `NvidiaProvider` |
| `gitlab` | `GitlabProvider` |
| `github` | `GithubProvider` |
| `outlook` | `OutlookProvider` |

Each implements `ProviderPlugin` trait: `discover_existing()` for auto-detection from environment, `credential_env_vars()`, `apply_to_sandbox()`.

### 3.7 Gateway Server (`openshell-server`)

**File**: `crates/openshell-server/src/main.rs` (201 lines)

- gRPC + HTTP multiplexed on a single port (default 8080)
- Database: SQLite or PostgreSQL (`sqlx`)
- TLS: mTLS with client certificate verification (can be disabled for reverse proxy setups)
- Kubernetes: manages sandbox pods in configurable namespace
- SSH tunneling: WebSocket-based SSH proxy CONNECT

### 3.8 Gateway Deployment (`openshell-bootstrap`)

**File**: `crates/openshell-bootstrap/src/lib.rs` (~1060 lines)

Deploys a **K3s-in-Docker** cluster:

1. Pull gateway image from GHCR
2. Create Docker network + volume
3. Create and start container with K3s
4. Generate PKI (CA, server cert, client cert) or reuse existing
5. Store TLS secrets as Kubernetes secrets inside the cluster
6. Wait for gateway to become ready
7. Store metadata locally for CLI

**Notable features**:

- Remote deployment via SSH (Docker over SSH)
- GPU passthrough (`--gpus all` + NVIDIA k8s-device-plugin)
- PKI reconciliation: reuses existing certs if valid, rotates if expired/missing
- Automatic cleanup on deployment failure
- DNS health probing during namespace wait

### 3.9 Helm Chart

**File**: `deploy/helm/openshell/values.yaml`

- Image: `ghcr.io/nvidia/openshell/gateway:latest`
- Service: NodePort 30051 → port 8080
- DB: SQLite at `/var/openshell/openshell.db`
- Default sandbox image: `ghcr.io/nvidia/openshell-community/sandboxes/base:latest`
- Security: `runAsNonRoot: true`, `runAsUser: 1000`, all capabilities dropped
- NetworkPolicy: restricts SSH ingress on sandbox pods to gateway only

### 3.10 CLI Command Surface

From `crates/openshell-cli/src/main.rs`:

Gateway commands: `gateway start`, `gateway stop`, `gateway destroy`, `gateway select`, `gateway logs`
Sandbox commands: `sandbox create`, `sandbox connect`, `sandbox stop`, `sandbox remove`, `sandbox status`, `sandbox cp`, `sandbox ssh-config`, `sandbox logs`
Provider commands: `provider create`, `provider update`, `provider list`, `provider delete`
Policy commands: `policy set`, `policy get`
Inference commands: `inference set`, `inference get`
TUI: `openshell term` (ratatui terminal dashboard)

### 3.11 Agent Skills

19 agent skills in `.agents/skills/`:

- Development: `create-spike`, `build-from-issue`, `create-github-pr`, `create-github-issue`, `review-github-pr`
- Operations: `debug-openshell-cluster`, `debug-inference`, `watch-github-actions`, `triage-issue`
- Security: `review-security-issue`, `fix-security-issue`, `generate-sandbox-policy`
- Content: `update-docs`, `openshell-cli` (with CLI reference)
- Infrastructure: `sync-agent-infra`, `tui-development`, `sbom`

---

## 4. How NemoClaw and OpenShell Connect

### 4.1 Integration Points

```
User → NemoClaw CLI/Plugin
         │
         ├── openshell sandbox create --from <image> --name openclaw
         ├── openshell provider create --name <provider> --type openai --credential ...
         ├── openshell inference set --provider <provider> --model <model>
         ├── openshell sandbox connect <name>
         ├── openshell sandbox cp <file> <sandbox>:<path>
         ├── openshell policy set --policy <yaml> --wait <sandbox>
         ├── openshell sandbox ssh-config <name>
         └── openshell sandbox status <name> --json
```

NemoClaw is purely a **control-plane client** of OpenShell. Every operation is a subprocess call to the `openshell` CLI binary. NemoClaw never imports OpenShell code directly.

### 4.2 Inference Routing Path

1. Inside sandbox: OpenClaw configured with `baseUrl: https://inference.local/v1`
2. OpenClaw makes API call to `inference.local`
3. HTTP CONNECT proxy intercepts the connection
4. Proxy checks OPA policy → `inference.local` is always allowed
5. L7 inference module detects the API pattern (e.g., `POST /v1/chat/completions`)
6. Router selects a route from cached inference bundle
7. Request is rewritten with real endpoint + API key, forwarded to backend
8. Response streamed back to OpenClaw inside the sandbox

The sandbox never sees the real API key — `openshell-managed` is the placeholder. OpenShell injects credentials server-side.

### 4.3 Policy Flow

1. NemoClaw ships `openclaw-sandbox.yaml` as the base policy
2. During `migrate` or `launch`, the blueprint runner creates the sandbox
3. OpenShell's sandbox supervisor loads the policy (from container disk or gRPC)
4. OPA engine is initialized with the policy data
5. Every network connection is evaluated against the policy
6. NemoClaw's `policy-add` command applies preset overlays via `openshell policy set`

---

## 5. Surprising or Noteworthy Findings

1. **NemoClaw Ollama install is commented out**: In `install.sh` line 344, `install_or_upgrade_ollama` is commented out. The code exists for GPU detection and VRAM-based model selection, but it's not called during installation.

2. **Inference routing supports Anthropic protocol natively**: Despite being an NVIDIA product, OpenShell's inference router handles `anthropic_messages` protocol alongside OpenAI. The proxy detects `POST /v1/messages` and routes it appropriately with custom `x-api-key` header auth.

3. **Dual-binary identity resolution**: The proxy doesn't just check which binary opened the socket — it walks the entire process tree. If `node` is running `/usr/local/bin/claude`, the proxy finds `claude` in the cmdline ancestors and matches the policy. This is critical for script-based tools.

4. **Symlink attack prevention**: The filesystem setup explicitly checks for symlinks before calling `chown`, preventing a class of container escape attacks where a malicious image plants a symlink (e.g., `/sandbox → /etc/shadow`).

5. **NemoClaw's model catalog includes non-NVIDIA models**: The onboarding wizard offers models from multiple providers: Kimi K2.5 (MoonshotAI), GLM-5 (Z-AI), MiniMax M2.5, Qwen3.5 (Alibaba), GPT-OSS 120B (OpenAI), alongside NVIDIA's Nemotron family.

6. **K3s-in-Docker architecture**: OpenShell doesn't use Docker directly for sandboxing. It runs K3s inside a Docker container, deploys the server as a Helm chart, and manages sandboxes as Kubernetes pods within that cluster. This is a significant architectural decision — Kubernetes provides scheduling, networking, and lifecycle management.

7. **SQLite as default database**: The gateway defaults to SQLite (`sqlite:/var/openshell/openshell.db`) but also supports PostgreSQL. For a single-node deployment inside Docker, SQLite is pragmatic.

8. **Denial aggregator with mechanistic mapper**: When connections are denied, the sandbox doesn't just log — it aggregates denial events, generates policy proposals via a `mechanistic_mapper`, and submits them to the gateway. This is the "Policy Advisor" feature visible in the architecture docs.

9. **mTLS everywhere**: CLI↔gateway, gateway↔sandbox, sandbox↔sandbox all use mTLS with auto-generated PKI. The bootstrap process generates CA, server, and client certificates, stores them as Kubernetes secrets, and distributes client materials to the CLI.

10. **OpenShell has a `navigator` legacy path**: The code at `openshell-policy` line 369 reveals a rename from "navigator" to "openshell" — the project was previously called Navigator. Container images may still ship policies at `/etc/navigator/policy.yaml`.
