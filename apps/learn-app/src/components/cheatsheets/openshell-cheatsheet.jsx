import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#d8c0ab",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#140a06",
  mid: "#3d2518",
  codeBg: "#2c1810",
  codeText: "#fff",
  tagBg: "#c0582a",
  tagText: "#fff",
  highlight: "#fff3e6",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      borderRadius: 4,
      padding: "4px 7px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 10,
      lineHeight: 1.4,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 4,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: color || palette.tagBg,
      color: palette.tagText,
      borderRadius: 3,
      padding: "1px 6px",
      fontSize: 8.5,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 3,
      marginBottom: 2,
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 4,
      marginBottom: 1,
      fontSize: 10.5,
      lineHeight: 1.35,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span
      style={{
        color: palette.accent,
        fontWeight: 700,
        marginTop: -1,
        fontSize: 8,
      }}
    >
      {"\u25CB"}
    </span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const Check = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 4,
      marginBottom: 1,
      fontSize: 10.5,
      lineHeight: 1.35,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span
      style={{
        color: "#5a8a3c",
        fontWeight: 700,
        marginTop: -2,
        fontSize: 10,
      }}
    >
      {"\u2714"}
    </span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 10.5, marginBottom: 1, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "2px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9.5,
        color: palette.accent,
        fontWeight: 700,
        width: 130,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 10, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1px solid ${palette.cardBorder}`,
      borderRadius: 6,
      padding: "7px 9px 7px 9px",
      gridColumn: span > 1 ? `span ${span}` : undefined,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 3,
        height: "100%",
        background: palette.accent,
        borderRadius: "6px 0 0 6px",
      }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        marginBottom: 5,
      }}
    >
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 18,
          height: 18,
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 9.5,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 11.5,
          fontWeight: 800,
          color: palette.dark,
          fontFamily: "'Georgia', serif",
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function OpenShellCheatsheet() {
  const [_] = useState(0);

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .cheatsheet-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cheatsheet-grid { grid-template-columns: 1fr !important; }
          .cheatsheet-grid > div { grid-column: span 1 !important; }
        }
      `}</style>
      <div
        className="cheatsheet-root"
        style={{
          background: palette.bg,
          fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
            padding: "10px 20px 8px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Georgia', serif",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: -0.5,
              color: "#fff",
            }}
          >
            NVIDIA OpenShell{" "}
            <span style={{ color: palette.accentLight }}>
              Runtime Cheatsheet
            </span>
          </h1>
          <div
            style={{
              color: palette.codeText,
              fontSize: 9.5,
              marginTop: 3,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Page 1: What It Is & Getting Started — Gateway · Sandbox · Security
            · Privacy Router · Policy-as-Code · Agent Compatibility
          </div>
        </div>

        {/* Page 1 Grid */}
        <div
          className="cheatsheet-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 6,
            padding: "8px 12px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* 1. What OpenShell Is */}
          <SectionCard number="1" title="What OpenShell Is">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                fontWeight: 600,
              }}
            >
              The browser tab model applied to AI agents.
            </div>
            <Bullet>
              Just as browser tabs isolate websites from your OS, OpenShell
              isolates AI agents from your infrastructure
            </Bullet>
            <Bullet>
              <strong>Out-of-process enforcement</strong> — guardrails exist at
              the infrastructure level, not as behavioral prompts. A compromised
              agent cannot override its own sandbox
            </Bullet>
            <Bullet>
              Sits <strong>between</strong> the agent and your infrastructure —
              model-agnostic, agent-agnostic
            </Bullet>
            <Bullet>
              Solves the <strong>safety-capability-autonomy trilemma</strong>:
              give agents real tool access (capability + autonomy) while
              enforcing operator-defined boundaries (safety)
            </Bullet>
            <div
              style={{
                marginTop: 4,
                padding: "4px 6px",
                background: palette.highlight,
                borderRadius: 4,
              }}
            >
              <Bullet>
                <strong>Key insight</strong> — Prompt-level guardrails are
                breakable. Kernel-level guardrails (Landlock, seccomp, network
                namespaces) are not. OpenShell enforces at the kernel
              </Bullet>
            </div>
            <div style={{ marginTop: 4 }}>
              <KV k="Written in" v="Rust (69K LoC) + Python (10K LoC)" />
              <KV k="License" v="Apache 2.0" />
              <KV k="Status" v="Alpha v0.0.10, single-player mode" />
            </div>
          </SectionCard>

          {/* 2. First Sandbox in 3 Commands */}
          <SectionCard number="2" title="First Sandbox in 3 Commands">
            <Code>{`# Install (pick one)
curl -LsSf https://raw.githubusercontent.com/\\
  NVIDIA/OpenShell/main/install.sh | sh
uv tool install -U openshell

# Prereq: Docker must be running
# Create sandbox (auto-starts gateway)
openshell sandbox create -- claude`}</Code>
            <div
              style={{
                marginTop: 4,
                fontSize: 10,
                fontWeight: 800,
                color: palette.dark,
                fontFamily: "'Georgia', serif",
                marginBottom: 3,
              }}
            >
              What happens under the hood
            </div>
            {[
              "Pulls K3s-in-Docker container from GHCR",
              "Generates mTLS PKI (CA + server + client certs)",
              "Deploys gateway via Helm chart inside K3s",
              "Auto-discovers ANTHROPIC_API_KEY from your env",
              "Creates sandbox pod with 6-layer isolation",
              "Drops you into an SSH session inside the sandbox",
            ].map((step, i) => (
              <Check key={i}>{step}</Check>
            ))}
            <div style={{ marginTop: 4 }}>
              <KV k="Platforms" v="macOS ARM64, Linux x86-64 / ARM64" />
              <KV k="GPU" v="--gpu flag + NVIDIA Container Toolkit" />
            </div>
          </SectionCard>

          {/* 3. The 6-Layer Security Stack */}
          <SectionCard number="3" title="The 6-Layer Security Stack">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              THE architectural differentiator. Each layer enforces independently
              — compromising one does not defeat the others.
            </div>
            {[
              {
                l: "L1",
                name: "Network NS",
                desc: "Isolated netns + veth pair. All traffic forced through proxy. Even ignoring HTTP_PROXY, only the proxy IP is reachable",
              },
              {
                l: "L2",
                name: "CONNECT Proxy",
                desc: "Every outbound TCP goes through HTTP CONNECT. OPA evaluates host, port, binary identity, and ancestor chain",
              },
              {
                l: "L3",
                name: "OPA / Rego",
                desc: "regorus (Rust OPA): evaluates binary path, SHA-256 hash (TOFU), ancestor tree, and cmdline. Hot-reloadable",
              },
              {
                l: "L4",
                name: "Landlock LSM",
                desc: "Kernel filesystem sandboxing (ABI V2). Path allowlists: read-only vs read-write. Locked at creation",
              },
              {
                l: "L5",
                name: "seccomp BPF",
                desc: "Blocks AF_PACKET, AF_BLUETOOTH, AF_VSOCK, AF_NETLINK socket domains. PR_SET_NO_NEW_PRIVS before filter",
              },
              {
                l: "L6",
                name: "Sandbox User",
                desc: "Runs as sandbox:sandbox. setuid(0) verified to fail. initgroups + setgid + setuid with post-checks",
              },
            ].map(({ l, name, desc }, i) => (
              <div
                key={l}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 6,
                  marginBottom: 3,
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    color: palette.accent,
                    fontSize: 10,
                    width: 20,
                    flexShrink: 0,
                  }}
                >
                  {l}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: palette.dark,
                    fontSize: 10,
                    width: 75,
                    flexShrink: 0,
                  }}
                >
                  {name}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {desc}
                </span>
              </div>
            ))}
          </SectionCard>

          {/* 4. Privacy Router */}
          <SectionCard number="4" title="Privacy Router">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Routes LLM calls based on <strong>operator policy</strong>, not
              agent preference. Agent never sees real API keys.
            </div>
            <Code>{`# Inside sandbox: all inference hits
https://inference.local/v1

# Supported API patterns
POST /v1/chat/completions  -> OpenAI
POST /v1/completions       -> OpenAI
POST /v1/responses         -> OpenAI
POST /v1/messages          -> Anthropic
GET  /v1/models            -> Discovery`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Agent configured with{" "}
                <code>baseUrl: https://inference.local/v1</code> and{" "}
                <code>api_key: openshell-managed</code>
              </Bullet>
              <Bullet>
                Router rewrites auth headers, model ID, and endpoint URL before
                forwarding to the real backend
              </Bullet>
              <Bullet>
                Supports 3 provider profiles: <strong>OpenAI</strong> (Bearer
                auth), <strong>Anthropic</strong> (x-api-key),{" "}
                <strong>NVIDIA NIM</strong> (Bearer auth)
              </Bullet>
              <Bullet>
                <strong>Hot-reloadable</strong> — change routes without sandbox
                restart. Route cache refreshes every 30s from gateway
              </Bullet>
            </div>
            <Code>{`# Configure inference routing
openshell inference set \\
  --provider anthropic --model claude-sonnet-4-6
openshell inference get`}</Code>
          </SectionCard>

          {/* 5. Policy-as-Code */}
          <SectionCard number="5" title="Policy-as-Code (YAML)">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#5a8a3c">Network: Hot-Reload</Tag>
              <Tag color="#8a6a3a">Filesystem: Locked</Tag>
              <Tag color="#8a6a3a">Process: Locked</Tag>
            </div>
            <Code>{`network_policies:
  github:
    name: github
    endpoints:
      - host: "api.github.com"
        port: 443
        protocol: rest
        tls: terminate
        enforcement: enforce
        rules:
          - allow:
              method: GET
              path: "/repos/**"
          - allow:
              method: POST
              path: "/repos/*/pulls"
    binaries:
      - { path: /usr/bin/gh }`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>Deny-by-default</strong> — all outbound blocked unless
                explicitly allowed
              </Bullet>
              <Bullet>
                <strong>L7 enforcement</strong> — HTTP method + path, not just
                IP/port. With TLS termination (MITM via ephemeral CA)
              </Bullet>
              <Bullet>
                <strong>Binary binding</strong> — only{" "}
                <code>/usr/bin/gh</code> can use this policy, not arbitrary
                processes
              </Bullet>
              <Bullet>
                3 access presets: <code>read-only</code>, <code>read-write</code>
                , <code>full</code>. Host wildcards:{" "}
                <code>{"*.example.com"}</code>
              </Bullet>
            </div>
          </SectionCard>

          {/* 6. Agent Compatibility */}
          <SectionCard number="6" title="Agent Compatibility">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Agents run <strong>unmodified</strong> inside sandboxes. Zero code
              changes required.
            </div>
            {[
              {
                agent: "Claude Code",
                cred: "ANTHROPIC_API_KEY",
                cmd: "-- claude",
                image: "base",
              },
              {
                agent: "Codex",
                cred: "OPENAI_API_KEY",
                cmd: "-- codex",
                image: "base",
              },
              {
                agent: "OpenCode",
                cred: "OPENAI / OPENROUTER_API_KEY",
                cmd: "-- opencode",
                image: "base",
              },
              {
                agent: "OpenClaw",
                cred: "None (inference.local)",
                cmd: "--from openclaw",
                image: "community",
              },
              {
                agent: "Ollama",
                cred: "None (local)",
                cmd: "--from ollama",
                image: "community",
              },
            ].map(({ agent, cred, cmd, image }, i) => (
              <div
                key={agent}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "2px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: palette.dark,
                    fontSize: 10,
                    width: 65,
                    flexShrink: 0,
                  }}
                >
                  {agent}
                </span>
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8.5,
                    color: palette.accent,
                    flex: 1,
                  }}
                >
                  {cred}
                </code>
                <Tag color={image === "base" ? "#3a6ea5" : "#5a8a3c"}>
                  {image}
                </Tag>
              </div>
            ))}
            <Code>{`# Run Claude Code in a sandbox
openshell sandbox create -- claude
# OpenClaw community image
openshell sandbox create --from openclaw
# Custom / BYOC image
openshell sandbox create --from ./my-dir
openshell sandbox create --from registry/img:v1`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Default sandbox tools: Python 3.13, Node 22, git, gh, vim, nano
              </Bullet>
              <Bullet>
                Auto-discovers credentials from your shell environment on create
              </Bullet>
            </div>
          </SectionCard>
        </div>

        {/* Page 2 Header */}
        <div
          style={{
            background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
            padding: "6px 20px 5px",
            textAlign: "center",
            marginTop: 2,
          }}
        >
          <div
            style={{
              color: palette.codeText,
              fontSize: 9.5,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Page 2: Operations & Deep Architecture — Lifecycle · Credentials ·
            Monitoring · K3s · Troubleshooting
          </div>
        </div>

        {/* Page 2 Grid */}
        <div
          className="cheatsheet-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 6,
            padding: "8px 12px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* 7. Gateway & Sandbox Lifecycle */}
          <SectionCard number="7" title="Gateway & Sandbox Lifecycle">
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: palette.dark,
                marginBottom: 3,
                fontFamily: "'Georgia', serif",
              }}
            >
              Gateway (Control Plane)
            </div>
            <Code>{`openshell gateway start     # Deploy K3s
openshell gateway stop      # Pause
openshell gateway destroy   # Remove entirely
openshell gateway select    # Switch cluster
openshell gateway logs      # View logs
openshell gateway add <url> # Add remote`}</Code>
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: palette.dark,
                marginTop: 5,
                marginBottom: 3,
                fontFamily: "'Georgia', serif",
              }}
            >
              Sandbox
            </div>
            <Code>{`openshell sandbox create -- claude
openshell sandbox connect <name>
openshell sandbox delete <name>
openshell sandbox get <name>
openshell sandbox list
openshell sandbox ssh-config <name>
openshell sandbox cp <f> <sbx>:<path>
openshell sandbox logs <name> --tail`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="Port" v="8080 (gRPC + HTTP muxed), 30051 NodePort" />
              <KV k="DB" v="SQLite (default) or PostgreSQL" />
              <KV k="Remote" v="--remote user@host for SSH deployment" />
            </div>
          </SectionCard>

          {/* 8. Credential Injection */}
          <SectionCard number="8" title="Credential Injection">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Providers are named credential bundles — injected at runtime,
              never written to disk inside the sandbox.
            </div>
            <Code>{`# Create a provider (named credential)
openshell provider create \\
  --name anthropic \\
  --type anthropic \\
  --credential ANTHROPIC_API_KEY=sk-...

# Or auto-discover from your env
openshell provider create \\
  --type claude --from-existing

# Manage
openshell provider list
openshell provider update <name>
openshell provider delete <name>`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>Auto-discovery</strong> scans env for:{" "}
                <code>ANTHROPIC_API_KEY</code>, <code>OPENAI_API_KEY</code>,{" "}
                <code>OPENROUTER_API_KEY</code>, <code>GITHUB_TOKEN</code>,{" "}
                <code>GITLAB_TOKEN</code>, <code>NVIDIA_API_KEY</code>
              </Bullet>
              <Bullet>
                Sandbox gets placeholder env vars. Proxy rewrites placeholders
                to real secrets on outbound requests
              </Bullet>
              <Bullet>
                10 provider plugins: claude, codex, opencode, openai, anthropic,
                nvidia, github, gitlab, outlook, generic
              </Bullet>
              <Bullet>
                Also scans config files: <code>~/.claude.json</code>,{" "}
                <code>~/.config/gh/hosts.yml</code>, etc.
              </Bullet>
            </div>
          </SectionCard>

          {/* 9. Monitoring & Audit */}
          <SectionCard number="9" title="Monitoring & Audit">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Full audit trail of every allow/deny/inspect decision. Real-time
              visibility into agent behavior.
            </div>
            <Code>{`# Live TUI dashboard (ratatui, k9s-style)
openshell term

# Stream sandbox logs
openshell logs <name> --tail
openshell logs <name> --source sandbox
openshell logs <name> --level warn

# Policy decisions in logs:
#   ALLOW  — matched policy rule
#   DENY   — no matching rule
#   INSPECT — inference routing`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>TUI</strong>: Tab to switch panels, j/k to navigate,
                Enter to select, : for command mode. Auto-refreshes every 2s
              </Bullet>
              <Bullet>
                <strong>Policy Advisor</strong>: denied connections are
                aggregated, a mechanistic mapper proposes YAML policy fixes.
                Review with <code>openshell rule</code>
              </Bullet>
              <Bullet>
                <strong>Bypass monitor</strong>: reads{" "}
                <code>/dev/kmsg</code> for iptables evasion attempts — detects
                processes trying to skip the proxy
              </Bullet>
              <Bullet>
                <strong>TOFU verification</strong>: SHA-256 of each binary
                cached on first use. If a binary is replaced mid-session, proxy
                denies immediately
              </Bullet>
            </div>
          </SectionCard>

          {/* 10. Hot-Reload vs Locked */}
          <SectionCard number="10" title="Hot-Reload vs Locked">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Policy mutability is split by design. Understanding this prevents
              confusion about what can change at runtime.
            </div>
            {[
              {
                domain: "Network policies",
                status: "Hot-reload",
                color: "#5a8a3c",
                why: "OPA engine atomically replaced. 10s poll interval",
              },
              {
                domain: "Inference routes",
                status: "Hot-reload",
                color: "#5a8a3c",
                why: "Route cache refresh every 30s from gateway bundle",
              },
              {
                domain: "Filesystem (Landlock)",
                status: "Locked",
                color: "#8a6a3a",
                why: "Kernel ruleset applied in pre_exec, cannot be reversed",
              },
              {
                domain: "Process (seccomp)",
                status: "Locked",
                color: "#8a6a3a",
                why: "BPF filter + UID drop happen before exec, irreversible",
              },
            ].map(({ domain, status, color, why }, i) => (
              <div
                key={domain}
                style={{
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: palette.dark,
                      fontWeight: 600,
                      flex: 1,
                    }}
                  >
                    {domain}
                  </span>
                  <Tag color={color}>{status}</Tag>
                </div>
                <div style={{ fontSize: 9, color: palette.mid, marginTop: 1 }}>
                  {why}
                </div>
              </div>
            ))}
            <Code>{`# Apply updated network policy live
openshell policy set <name> \\
  --policy new-rules.yaml --wait

# Inspect current policy
openshell policy get <name>
openshell policy get <name> --full
openshell policy list <name>`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>LKG behavior</strong> — if new policy fails validation,
                previous policy stays active (Last-Known-Good)
              </Bullet>
              <Bullet>
                Policy versions are monotonic. Idempotent updates (same hash)
                are no-ops
              </Bullet>
            </div>
          </SectionCard>

          {/* 11. K3s-in-Docker Architecture */}
          <SectionCard number="11" title="K3s-in-Docker Architecture">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Why K3s instead of plain Docker? Network namespaces, Kubernetes
              CRDs for sandbox lifecycle, Helm-based deployment, and the
              NetworkPolicy primitive for gateway-to-sandbox isolation.
            </div>
            {[
              {
                component: "K3s Cluster",
                detail: "v1.35, single Docker container, Helm-deployed",
              },
              {
                component: "Gateway Pod",
                detail:
                  "StatefulSet, 1Gi PVC for SQLite, gRPC + HTTP muxed on :8080",
              },
              {
                component: "Sandbox Pod",
                detail: "1 per sandbox. Supervisor (privileged) + Agent (restricted)",
              },
              {
                component: "mTLS PKI",
                detail: "Auto-generated via rcgen. CA + server + client certs",
              },
              {
                component: "CRD Controller",
                detail: "agents.x-k8s.io/v1alpha1/Sandbox custom resources",
              },
            ].map(({ component, detail }, i) => (
              <div
                key={component}
                style={{
                  display: "flex",
                  gap: 6,
                  padding: "2px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: palette.dark,
                    fontSize: 9.5,
                    width: 85,
                    flexShrink: 0,
                  }}
                >
                  {component}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {detail}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>Sandbox pod internals</strong>: Supervisor runs in host
                netns (privileged), spawns agent in isolated netns via{" "}
                <code>setns()</code>. Veth pair: 10.200.0.1 (host) / 10.200.0.2
                (sandbox)
              </Bullet>
              <Bullet>
                <strong>SSH access</strong>: Embedded russh server on :2222.
                NSSH1 handshake (HMAC-SHA256). CLI tunnels via HTTP CONNECT at{" "}
                <code>/connect/ssh</code>
              </Bullet>
              <Bullet>
                <strong>File sync</strong>: tar-over-SSH, no rsync dependency.{" "}
                <code>openshell sandbox cp</code>
              </Bullet>
            </div>
          </SectionCard>

          {/* 12. Troubleshooting */}
          <SectionCard number="12" title="Troubleshooting">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#8a6a3a">Alpha Software</Tag>
              <Tag color="#7a5a8a">Expect Rough Edges</Tag>
            </div>
            {[
              {
                problem: "Gateway won't start",
                fix: "docker info (Docker must be running)",
              },
              {
                problem: "inference.local 403",
                fix: "openshell inference get (route configured?)",
              },
              {
                problem: "Connection denied",
                fix: "openshell policy get <name> --full",
              },
              {
                problem: "Policy not applying",
                fix: "Use --wait flag: openshell policy set --wait",
              },
              {
                problem: "Sandbox stuck creating",
                fix: "openshell gateway logs (check K3s events)",
              },
              {
                problem: "Credential missing",
                fix: "openshell provider list (check discovery)",
              },
              {
                problem: "GPU not available",
                fix: "Install NVIDIA Container Toolkit + drivers",
              },
              {
                problem: "L7 rules not working",
                fix: "Need tls: terminate for HTTPS inspection",
              },
            ].map(({ problem, fix }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 6,
                  padding: "2px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: palette.dark,
                    fontSize: 9.5,
                    width: 115,
                    flexShrink: 0,
                  }}
                >
                  {problem}
                </span>
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    color: palette.mid,
                  }}
                >
                  {fix}
                </code>
              </div>
            ))}
            <div
              style={{
                marginTop: 4,
                padding: "4px 6px",
                background: palette.highlight,
                borderRadius: 4,
              }}
            >
              <Bullet>
                Clone the repo and use agent skills in{" "}
                <code>.agents/skills/</code> for self-service diagnostics:{" "}
                <code>debug-openshell-cluster</code>,{" "}
                <code>debug-inference</code>,{" "}
                <code>generate-sandbox-policy</code>
              </Bullet>
            </div>
          </SectionCard>

          {/* 13. Quick Reference */}
          <SectionCard number="13" title="Quick Reference" span={3}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div style={{ flex: "1 1 180px", minWidth: 160 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Gateway & Sandbox
                </div>
                <RefRow cmd="gateway start" desc="Deploy K3s cluster" />
                <RefRow cmd="gateway stop" desc="Pause gateway" />
                <RefRow cmd="gateway destroy" desc="Remove gateway" />
                <RefRow cmd="gateway add" desc="Add remote gateway" />
                <RefRow cmd="sandbox create" desc="New sandbox (-- agent)" />
                <RefRow cmd="sandbox connect" desc="SSH into sandbox" />
                <RefRow cmd="sandbox delete" desc="Remove sandbox" />
                <RefRow cmd="sandbox list" desc="List all sandboxes" />
                <RefRow cmd="sandbox ssh-config" desc="SSH config (VS Code)" />
                <RefRow cmd="sandbox cp" desc="Upload/download files" />
              </div>
              <div style={{ flex: "1 1 180px", minWidth: 160 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Policy, Provider & Inference
                </div>
                <RefRow cmd="provider create" desc="Add credential bundle" />
                <RefRow cmd="provider list" desc="Show all providers" />
                <RefRow cmd="provider delete" desc="Remove provider" />
                <RefRow cmd="inference set" desc="Configure model route" />
                <RefRow cmd="inference get" desc="Show current route" />
                <RefRow cmd="policy set" desc="Apply policy YAML" />
                <RefRow cmd="policy get" desc="Show active policy" />
                <RefRow cmd="policy get --full" desc="Full YAML round-trip" />
                <RefRow cmd="policy list" desc="Revision history" />
                <RefRow cmd="term" desc="Live TUI dashboard" />
              </div>
              <div style={{ flex: "1 1 180px", minWidth: 160 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Decision Guide
                </div>
                <KV k="Agent in sandbox" v="sandbox create -- <agent>" />
                <KV k="Custom container" v="sandbox create --from <dir/img>" />
                <KV k="GPU workloads" v="sandbox create --gpu --from <img>" />
                <KV k="Tighten network" v="policy set --policy file.yaml" />
                <KV k="Change LLM route" v="inference set --provider --model" />
                <KV k="Debug denials" v="logs <name> --source sandbox" />
                <KV k="Cluster health" v="openshell term (TUI dashboard)" />
                <KV k="VS Code remote" v="sandbox ssh-config + Remote SSH" />
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: "6px 0 8px",
            fontSize: 10,
            color: palette.mid,
            fontFamily: "'Georgia', serif",
          }}
        >
          NVIDIA OpenShell Runtime Cheatsheet — Created{" "}
          {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 9, color: palette.mid }}>
            {
              "Open-source sandbox runtime for autonomous AI agents — Apache 2.0 — Alpha v0.0.10"
            }
          </span>
        </div>
      </div>
    </>
  );
}
