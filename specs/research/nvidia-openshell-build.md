# NVIDIA OpenShell Research Report

**Date**: 2026-03-19
**Source**: NVIDIA Build, GitHub, PyPI, NVIDIA Developer Blog, Official Docs
**Purpose**: Inform book content decisions regarding OpenShell coverage

---

## 1. What Is Available on NVIDIA Build?

OpenShell appears on NVIDIA Build under the **DGX Spark playbooks** section (`build.nvidia.com/spark/openshell`). It is **not** a hosted API, NIM endpoint, or cloud playground. It is a **guided deployment playbook** — a step-by-step tutorial for setting up OpenShell on DGX Spark hardware.

### Build Page Structure

The NVIDIA Build page has three tabs:

| Tab                 | Content                                                      |
| ------------------- | ------------------------------------------------------------ |
| **Overview**        | Product description, use cases, prerequisites, risk warnings |
| **Instructions**    | 14-step setup guide with full CLI commands                   |
| **Troubleshooting** | Issue/solution table for common deployment problems          |

### What NVIDIA Build Is NOT Providing Here

- No hosted API endpoint (unlike NIM models on Build)
- No playground or interactive demo
- No "Try Now" button or API key provisioning
- No cloud deployment — this is strictly self-hosted on DGX Spark

**Classification**: NVIDIA Build serves as a **documentation portal / playbook host** for OpenShell, not an inference service. OpenShell lives alongside other DGX Spark playbooks like "Open WebUI with Ollama" and "ComfyUI."

---

## 2. Capabilities Exposed

### Core Product

OpenShell is an **open-source sandbox runtime** for autonomous AI agents. It wraps agents in kernel-level isolation with declarative YAML security policies.

### Four Architectural Components

| Component          | Role                                                                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gateway**        | Control-plane API managing sandbox lifecycle, authentication, credential injection. Runs as K3s Kubernetes inside a single Docker container.  |
| **Sandbox**        | Isolated container runtime with policy-enforced egress routing. Each agent runs inside one.                                                   |
| **Policy Engine**  | Enforces constraints across filesystem (Landlock-based), network (default-deny egress), and process (privilege escalation prevention) layers. |
| **Privacy Router** | Routes LLM calls — keeps sensitive context on local models, permits frontier model access only when policy allows.                            |

### What You Can Do

- **Run AI agents in isolation**: Claude Code, OpenCode, Codex, OpenClaw, Ollama all work unmodified inside sandboxes
- **Enforce security policies**: Declarative YAML controls filesystem read/write paths, network endpoints, process privileges
- **Route inference locally**: Direct LLM calls to local Ollama models via `inference.local` endpoint, avoiding cloud API dependencies
- **Inject credentials safely**: Provider abstraction injects env vars (GitHub tokens, API keys) without writing to sandbox filesystem
- **Monitor in real-time**: `openshell term` dashboard shows live policy decisions (allow/deny/inspect)
- **Hot-reload policies**: Network and inference policies update without sandbox recreation (filesystem policies are static)
- **Transfer files**: Upload/download between host and sandbox
- **SSH access**: VS Code remote development via `openshell sandbox ssh-config`
- **GPU passthrough**: Optional `--gpu` flag for GPU workloads inside sandbox

### Community Sandboxes (Pre-built Templates)

| Template          | Purpose                        |
| ----------------- | ------------------------------ |
| `--from openclaw` | OpenClaw agent environment     |
| `--from base`     | Minimal sandbox with dev tools |
| `--from sdg`      | Synthetic data generation      |

---

## 3. Access Model

### Pricing: Free / Open Source

- **License**: Apache 2.0
- **No paid tier mentioned** anywhere — not on Build, GitHub, PyPI, or blog
- **No API keys required** for OpenShell itself (agents inside may need their own keys)

### Hardware Requirements

OpenShell targets **NVIDIA DGX Spark** (128GB unified memory, GB10 Grace Blackwell Superchip) but also mentions RTX PCs in the blog post. The Build playbook is DGX Spark-specific.

| Memory Available | Recommended Model     | Model Size |
| ---------------- | --------------------- | ---------- |
| 25-48 GB         | nemotron-3-nano       | ~24 GB     |
| 48-80 GB         | gpt-oss:120b          | ~65 GB     |
| 128 GB           | nemotron-3-super:120b | ~86 GB     |

### Software Requirements

- Ubuntu 24.04 (DGX OS)
- Docker Engine + NVIDIA Container Runtime
- Python 3.12+
- `uv` package manager
- Ollama 0.17.0+ (for local inference)

### Who Can Use It

Anyone with compatible hardware. No enterprise agreement, NVIDIA developer program membership, or special access required. Install via `uv pip install openshell` or `uv tool install -U openshell`.

---

## 4. Technical Details

### Package Information

| Field               | Value                                                   |
| ------------------- | ------------------------------------------------------- |
| **Current Version** | 0.0.10 (March 18, 2026)                                 |
| **Status**          | Alpha, single-player mode                               |
| **Language**        | Rust 87.2%, Python 7.0%, Shell 5.4%                     |
| **PyPI**            | `openshell` (NVIDIA maintainer, verified)               |
| **GitHub**          | `NVIDIA/OpenShell` — 2.1k stars, 208 forks, 324 commits |
| **Platforms**       | macOS ARM64, Linux x86-64, Linux ARM64                  |
| **Release cadence** | Rapid (5 releases in 8 days: Mar 10-18, 2026)           |

### CLI Command Surface

```
openshell gateway start|stop|destroy
openshell sandbox create|connect|delete|get|upload|download|ssh-config
openshell provider create|list|delete
openshell inference set|get
openshell policy get|set
openshell term                    # Live monitoring dashboard
openshell logs <name> --tail
openshell status
```

### Policy Schema (YAML)

Policies control three domains:

1. **Filesystem**: `read_only` and `read_write` path lists (static, locked at creation)
2. **Network**: Endpoint allowlist with `host`/`port` fields (hot-reloadable)
3. **Process**: Privilege and binary execution controls

### Inference Routing

The Privacy Router exposes `https://inference.local/v1` inside sandboxes. This routes to configured providers (Ollama, LM Studio, or cloud APIs) based on policy. The endpoint supports OpenAI-compatible API format:

```bash
curl https://inference.local/v1/responses \
  -H "Content-Type: application/json" \
  -d '{"instructions": "You are a helpful assistant.", "input": "Hello!"}'
```

### Supported Agents (Out-of-Box)

| Agent       | Credential Required                  | Image     |
| ----------- | ------------------------------------ | --------- |
| Claude Code | ANTHROPIC_API_KEY                    | Base      |
| OpenCode    | OPENAI_API_KEY or OPENROUTER_API_KEY | Base      |
| Codex       | OPENAI_API_KEY                       | Base      |
| OpenClaw    | None (uses inference.local)          | Community |
| Ollama      | None                                 | Community |

### Default Sandbox Tools

Python 3.13, Node 22, git, gh, vim, nano, ping, dig, traceroute, netstat.

---

## 5. Relationship to the Blog Post Version

### Blog Post: "Run Autonomous, Self-Evolving Agents More Safely with NVIDIA OpenShell"

- **Published**: March 16, 2026
- **Authors**: Ali Golshan (Sr. Dir. AI Software), Alex Watson (Sr. Dir. Product), John Myers (Sr. Dir. Software Engineering)

### Same Product, Different Surface

The blog post and the NVIDIA Build page describe **the same product** — the open-source OpenShell runtime. They are different surfaces:

| Surface            | Purpose                                         | Audience                        |
| ------------------ | ----------------------------------------------- | ------------------------------- |
| **Blog post**      | Strategic positioning, vision, "why it matters" | Decision makers, AI community   |
| **Build playbook** | Step-by-step DGX Spark deployment               | Practitioners with DGX hardware |
| **GitHub repo**    | Source code, development, issues                | Developers, contributors        |
| **PyPI**           | Package distribution                            | Users installing the CLI        |
| **Official docs**  | Comprehensive reference                         | All users                       |

### Blog Adds Context Not on Build

The blog introduces concepts not prominent on the Build page:

- **NemoClaw**: An open-source stack combining NVIDIA Nemotron models with OpenShell runtime. OpenShell powers NemoClaw.
- **"Self-evolving agents"**: Agents that develop new skills over time — OpenShell provides the governance layer for skill verification before execution.
- **The Safety-Capability-Autonomy trilemma**: Traditional approaches deliver only 2 of 3; OpenShell claims to address all three.
- **Enterprise scaling path**: From individual DGX Spark to enterprise-wide deployments with consistent policy and privacy controls.

---

## 6. Notable Features and Limitations

### Notable Features

1. **Agent-agnostic**: Claude Code, Codex, OpenCode, OpenClaw all run unmodified. No vendor lock-in.
2. **Privacy Router is architecturally significant**: Policy-based routing decides which context stays local vs. goes to cloud APIs. This is not just sandboxing — it is a privacy-preserving inference architecture.
3. **Hot-reloadable policies**: Network and inference policies update without sandbox recreation. Filesystem policies are static (require sandbox recreation).
4. **Built "agent-first"**: The repo includes agent skills (`.agents/skills/`) for debugging, policy generation, and troubleshooting — agents help manage the agent runtime.
5. **Deny-by-default**: All outbound traffic blocked unless explicitly allowed. Security posture is restrictive by default.
6. **Audit trail**: Complete logging of policy decisions (allow/deny/inspect_for_inference) via `openshell term`.

### Limitations

1. **Alpha software**: v0.0.10, "single-player mode" — not production-ready, no multi-tenant support yet.
2. **DGX Spark-centric**: The Build playbook is specifically for DGX Spark. While GitHub mentions RTX PCs, the guided experience targets $3,000+ hardware.
3. **No cloud/hosted option**: Entirely self-hosted. No "try it in the browser" experience.
4. **Interactive wizard dependency**: OpenClaw onboarding requires TTY with arrow-key navigation — cannot be fully automated via script.
5. **Filesystem policies are static**: Cannot be hot-reloaded; require sandbox recreation to change.
6. **No Windows support**: macOS ARM64 and Linux only (per PyPI distributions).
7. **Ollama version requirement**: Needs 0.17.0+ which may not be widely available yet.
8. **Rapid iteration risk**: 5 releases in 8 days suggests the API surface is unstable.

---

## 7. Implications for Book Content

### What OpenShell Is (For Our Purposes)

OpenShell is **infrastructure for running AI agents safely**, not an agent itself. It is to AI agents what Docker is to applications — an isolation and governance layer.

### Relevance to Agent Factory Curriculum

| Aspect                               | Relevance  | Where It Fits                        |
| ------------------------------------ | ---------- | ------------------------------------ |
| Security/sandboxing for agents       | High       | Enterprise agent deployment chapters |
| Privacy-preserving inference routing | High       | Data governance, enterprise AI       |
| Policy-as-code (YAML governance)     | Medium     | SDD/spec-driven patterns             |
| Local-first AI (Ollama + DGX Spark)  | Medium     | Infrastructure chapters              |
| NemoClaw stack                       | Low-Medium | Open-source agent stacks             |

### Key Teaching Angles

1. **"The agent safety problem"**: OpenShell's framing of the safety-capability-autonomy trilemma is pedagogically valuable.
2. **Policy-as-code**: Declarative YAML security policies are a concrete skill students can learn.
3. **Privacy Router pattern**: The architectural decision of routing sensitive vs. non-sensitive inference is a design pattern worth teaching.
4. **Agent-agnostic runtime**: The principle that agents should be portable across runtimes mirrors our plugin architecture philosophy.

### Cautions for Content

- **Hardware barrier**: DGX Spark at ~$3,000 limits hands-on exercises. Would need alternative deployment paths (standard Docker + GPU) or conceptual treatment.
- **Alpha instability**: API surface may change significantly before content publication. Pin to specific version if including exercises.
- **Not a substitute for agent building**: OpenShell is infrastructure, not a tool for building agents. Don't conflate "running agents safely" with "building agents."

---

## 8. Key URLs

| Resource               | URL                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| NVIDIA Build Playbook  | https://build.nvidia.com/spark/openshell                                                                 |
| GitHub Repository      | https://github.com/NVIDIA/OpenShell                                                                      |
| PyPI Package           | https://pypi.org/project/openshell/                                                                      |
| Official Documentation | https://docs.nvidia.com/openshell/latest/                                                                |
| Blog Post              | https://developer.nvidia.com/blog/run-autonomous-self-evolving-agents-more-safely-with-nvidia-openshell/ |
| OpenClaw Docs          | https://docs.openclaw.ai                                                                                 |
| DGX Spark Docs         | https://docs.nvidia.com/dgx/dgx-spark                                                                    |
| Developer Forum        | https://forums.developer.nvidia.com/c/accelerated-computing/dgx-spark-gb10                               |
