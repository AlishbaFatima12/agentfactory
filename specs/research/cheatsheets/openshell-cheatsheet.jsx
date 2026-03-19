import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
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
      borderRadius: 6,
      padding: "8px 11px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 11,
      lineHeight: 1.5,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 6,
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
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 4,
      marginBottom: 3,
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
      gap: 6,
      marginBottom: 3,
      fontSize: 12.5,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>
      {"\u25CB"}
    </span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "4px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: palette.accent,
        fontWeight: 700,
        width: 155,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 10,
      padding: "14px 16px 14px 16px",
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
        width: 4,
        height: "100%",
        background: palette.accent,
        borderRadius: "10px 0 0 10px",
      }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 26,
          height: 26,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 13,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 15,
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
  const [page, setPage] = useState(0);
  const pages = [
    "Page 1: Setup & Sandbox Management",
    "Page 2: Security & Operations",
  ];

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
        style={{
          background: palette.bg,
          minHeight: "100vh",
          fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
            padding: "22px 28px 16px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Georgia', serif",
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: -0.5,
              color: "#fff",
            }}
          >
            OpenShell{" "}
            <span style={{ color: palette.accentLight }}>Cheatsheet</span>
          </h1>
          <div
            style={{
              color: palette.codeText,
              fontSize: 12,
              marginTop: 6,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {
              "NVIDIA \u00B7 Secure Agent Runtime \u00B7 Policies \u00B7 Privacy \u2014 2026 Edition"
            }
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 14,
            }}
          >
            {pages.map((label, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  background:
                    page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "7px 18px",
                  fontSize: 12.5,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Page 1: Setup & Sandbox Management */}
        {page === 0 && (
          <div
            className="cheatsheet-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              padding: "16px 18px",
              maxWidth: 1050,
              margin: "0 auto",
            }}
          >
            {/* 1. Quick Start */}
            <SectionCard number="1" title="Quick Start">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#5a8a3c">v0.0.10</Tag>
                <Tag color="#3a6ea5">Apache 2.0</Tag>
                <Tag color="#7a5a8a">Alpha</Tag>
              </div>
              <Code>{`# Install via shell script (recommended)
curl -LsSf https://raw.githubusercontent.com/\\
  NVIDIA/OpenShell/main/install.sh | sh

# Or via uv (Python package manager)
uv tool install -U openshell`}</Code>
              <div style={{ marginTop: 8 }}>
                <KV k="Prereqs" v="Docker Desktop or Docker daemon running" />
                <KV k="GPU support" v="NVIDIA drivers + Container Toolkit" />
                <KV k="Platforms" v="macOS ARM64, Linux x86-64, Linux ARM64" />
                <KV k="No Windows" v="WSL2 required for Windows users" />
              </div>
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  <strong>Zero-config start</strong> — running{" "}
                  <code>sandbox create</code> auto-bootstraps a local gateway
                </Bullet>
              </div>
            </SectionCard>

            {/* 2. Gateway Lifecycle */}
            <SectionCard number="2" title="Gateway Lifecycle">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                The gateway is a K3s Kubernetes cluster inside a single Docker
                container. It manages sandbox lifecycle, providers, and
                policies.
              </div>
              <RefRow
                cmd="gateway start"
                desc="Deploy local K3s-in-Docker gateway"
              />
              <RefRow
                cmd="gateway stop"
                desc="Stop gateway container (preserves state)"
              />
              <RefRow cmd="gateway destroy" desc="Remove gateway + all data" />
              <RefRow
                cmd="gateway select"
                desc="Switch active gateway (multi-gateway)"
              />
              <RefRow cmd="gateway logs" desc="Stream gateway server logs" />
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  <strong>Remote deploy</strong> — gateway supports
                  Docker-over-SSH for remote hosts
                </Bullet>
                <Bullet>
                  <strong>mTLS</strong> — auto-generated PKI (CA + server +
                  client certs) stored as K8s secrets
                </Bullet>
              </div>
            </SectionCard>

            {/* 3. Sandbox Management */}
            <SectionCard number="3" title="Sandbox Management">
              <RefRow
                cmd="sandbox create"
                desc="Create sandbox (auto-starts gateway)"
              />
              <RefRow
                cmd="sandbox connect"
                desc="Attach shell to running sandbox"
              />
              <RefRow cmd="sandbox delete" desc="Remove sandbox and its data" />
              <RefRow
                cmd="sandbox get"
                desc="Show sandbox status and metadata"
              />
              <RefRow
                cmd="sandbox list"
                desc="List all sandboxes on active gateway"
              />
              <RefRow
                cmd="sandbox ssh-config"
                desc="Output SSH config for VS Code remote"
              />
              <RefRow
                cmd="sandbox cp"
                desc="Transfer files host to/from sandbox"
              />
              <Code>{`# Create from community templates
openshell sandbox create --from base
openshell sandbox create --from openclaw
openshell sandbox create --from sdg

# GPU-enabled sandbox
openshell sandbox create --gpu

# Run Claude Code directly
openshell sandbox create -- claude

# Custom Dockerfile
openshell sandbox create --from ./my-dir`}</Code>
            </SectionCard>

            {/* 4. Writing Network Policies */}
            <SectionCard number="4" title="Writing Network Policies">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 6,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#5a8a3c">Hot-Reloadable</Tag>
                <Tag color="#3a6ea5">L7 Enforcement</Tag>
              </div>
              <Code>{`# openclaw-sandbox.yaml (excerpt)
network:
  - name: github
    host: "api.github.com"
    port: 443
    protocol: https
    tls: terminate
    enforcement: l7
    binaries:
      - /usr/bin/git
      - /usr/bin/gh
    rules:
      - action: allow
        method: GET
        path: "/repos/*"
      - action: allow
        method: POST
        path: "/repos/*/pulls"
      - action: deny
        method: DELETE`}</Code>
              <div style={{ marginTop: 8 }}>
                <KV
                  k="tls: terminate"
                  v="Decrypt TLS for L7 method/path inspection"
                />
                <KV k="tls: passthrough" v="Forward encrypted, no L7 checks" />
                <KV
                  k="binaries"
                  v="Only these executables may use this endpoint"
                />
                <KV
                  k="Default"
                  v="Deny-by-default — all egress blocked until allowed"
                />
              </div>
            </SectionCard>

            {/* 5. Filesystem & Process Policies */}
            <SectionCard number="5" title="Filesystem & Process Policies">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 6,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#a53a3a">Locked at Creation</Tag>
                <Tag color="#7a5a8a">Kernel-Level</Tag>
              </div>
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Filesystem uses Linux Landlock LSM (ABI V2). Process uses
                seccomp BPF. Both are immutable after sandbox creation.
              </div>
              <Code>{`filesystem_policy:
  landlock: best_effort
  read_only:
    - /usr
    - /lib
    - /proc
    - /dev/urandom
    - /app
    - /etc
    - /var/log
  read_write:
    - /sandbox
    - /tmp
    - /dev/null

process_policy:
  run_as_user: sandbox
  run_as_group: sandbox`}</Code>
              <Bullet>
                <strong>Seccomp</strong> blocks <code>AF_PACKET</code>,{" "}
                <code>AF_BLUETOOTH</code>, <code>AF_VSOCK</code> socket domains
              </Bullet>
              <Bullet>
                <strong>Validation</strong> — rejects{" "}
                <code>run_as_user: root</code>, path traversal (<code>..</code>
                ), overly broad paths (<code>/</code>)
              </Bullet>
            </SectionCard>

            {/* 6. Privacy Router */}
            <SectionCard number="6" title="Privacy Router">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Sandboxes reach LLMs via <code>inference.local</code> — the
                agent never sees real API keys or endpoints.
              </div>
              <Code>{`# Inside sandbox — OpenAI-compatible
curl https://inference.local/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"nemotron","messages":[...]}'

# Configure from host
openshell inference set \\
  --provider ollama \\
  --model qwen3.5:0.8b`}</Code>
              <div style={{ marginTop: 8 }}>
                <RefRow
                  cmd="inference set"
                  desc="Set provider + model for inference.local"
                />
                <RefRow
                  cmd="inference get"
                  desc="Show current inference route config"
                />
              </div>
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <KV
                  k="Supported protocols"
                  v="OpenAI chat/completions, responses, Anthropic messages"
                />
                <KV
                  k="Streaming"
                  v="SSE streaming for chat completions supported"
                />
                <KV
                  k="Backends"
                  v="Ollama, NVIDIA Build, NIM, vLLM, any OpenAI-compatible"
                />
              </div>
            </SectionCard>
          </div>
        )}

        {/* Page 2: Security & Operations */}
        {page === 1 && (
          <div
            className="cheatsheet-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              padding: "16px 18px",
              maxWidth: 1050,
              margin: "0 auto",
            }}
          >
            {/* 7. Credential Injection */}
            <SectionCard number="7" title="Credential Injection">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Providers inject credentials as env vars at runtime — never
                written to the sandbox filesystem.
              </div>
              <RefRow
                cmd="provider create"
                desc="Create named credential bundle"
              />
              <RefRow
                cmd="provider list"
                desc="Show all configured providers"
              />
              <RefRow
                cmd="provider update"
                desc="Modify existing provider credentials"
              />
              <RefRow
                cmd="provider delete"
                desc="Remove provider and its credentials"
              />
              <Code>{`# Auto-discover from environment
openshell provider create \\
  --name my-claude \\
  --type claude \\
  --from-existing

# Manual credential injection
openshell provider create \\
  --name my-openai \\
  --type openai \\
  --credential OPENAI_API_KEY=sk-...`}</Code>
              <Bullet>
                <strong>Auto-discovery</strong> reads{" "}
                <code>ANTHROPIC_API_KEY</code>, <code>OPENAI_API_KEY</code>,{" "}
                <code>OPENROUTER_API_KEY</code> from shell
              </Bullet>
              <Bullet>
                10 provider plugins: Claude, Codex, OpenCode, OpenAI, Anthropic,
                NVIDIA, GitHub, GitLab, Outlook, Generic
              </Bullet>
            </SectionCard>

            {/* 8. Monitoring & Audit */}
            <SectionCard number="8" title="Monitoring & Audit">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Full audit trail of every allow/deny decision. Real-time TUI
                dashboard built with ratatui.
              </div>
              <RefRow
                cmd="openshell term"
                desc="Live terminal dashboard (ratatui TUI)"
              />
              <RefRow
                cmd="openshell logs"
                desc="Stream sandbox stdout/stderr logs"
              />
              <RefRow cmd="sandbox status" desc="JSON status of a sandbox" />
              <RefRow cmd="sandbox get" desc="Metadata and runtime details" />
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  <strong>TUI views</strong> — sandbox list, policy decisions,
                  sandbox detail, live network activity
                </Bullet>
                <Bullet>
                  <strong>Decision types</strong> — <code>Allow</code> (matched
                  policy), <code>Deny</code> (no match), <code>Inspect</code>{" "}
                  (inference route)
                </Bullet>
                <Bullet>
                  <strong>Policy advisor</strong> — denied requests are
                  aggregated and the system proposes policy updates for human
                  approval
                </Bullet>
                <Bullet>
                  <strong>Bypass detection</strong> — reads{" "}
                  <code>/dev/kmsg</code> for iptables LOG entries to detect
                  direct connection attempts
                </Bullet>
              </div>
            </SectionCard>

            {/* 9. 6-Layer Security Architecture */}
            <SectionCard number="9" title="6-Layer Security Architecture">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Defense-in-depth — out-of-process enforcement the agent cannot
                override, even if fully compromised by prompt injection.
              </div>
              {[
                {
                  l: "L1",
                  name: "Net Namespace",
                  desc: "Isolated netns + veth pair (10.200.0.0/24). All traffic must traverse proxy.",
                },
                {
                  l: "L2",
                  name: "CONNECT Proxy",
                  desc: "HTTP CONNECT proxy with OPA eval on every connection. Binary identity via /proc.",
                },
                {
                  l: "L3",
                  name: "OPA/Rego",
                  desc: "Embedded regorus engine. Evaluates host, port, binary SHA-256, ancestor tree.",
                },
                {
                  l: "L4",
                  name: "Landlock FS",
                  desc: "Kernel filesystem sandboxing (ABI V2). Read-only vs read-write path enforcement.",
                },
                {
                  l: "L5",
                  name: "Seccomp BPF",
                  desc: "Blocks dangerous socket domains (AF_PACKET, AF_BLUETOOTH, AF_VSOCK).",
                },
                {
                  l: "L6",
                  name: "Sandbox User",
                  desc: "Mandatory non-root user. Rejects run_as_user: root at policy validation.",
                },
              ].map(({ l, name, desc }, i) => (
                <div
                  key={l}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 5,
                    padding: "5px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      color: palette.accent,
                      fontSize: 12,
                      width: 24,
                    }}
                  >
                    {l}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      width: 90,
                      flexShrink: 0,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 11.5, color: palette.mid }}>
                    {desc}
                  </span>
                </div>
              ))}
            </SectionCard>

            {/* 10. Agent Support Matrix */}
            <SectionCard number="10" title="Agent Support Matrix">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Agents run unmodified inside sandboxes. No code changes
                required.
              </div>
              {[
                {
                  agent: "Claude Code",
                  key: "ANTHROPIC_API_KEY",
                  image: "base",
                  cmd: "-- claude",
                },
                {
                  agent: "Codex",
                  key: "OPENAI_API_KEY",
                  image: "base",
                  cmd: "-- codex",
                },
                {
                  agent: "OpenCode",
                  key: "OPENAI / OPENROUTER",
                  image: "base",
                  cmd: "-- opencode",
                },
                {
                  agent: "OpenClaw",
                  key: "None (inference.local)",
                  image: "openclaw",
                  cmd: "--from openclaw",
                },
                {
                  agent: "Ollama",
                  key: "None",
                  image: "community",
                  cmd: "--from ollama",
                },
              ].map(({ agent, key, image, cmd }, i) => (
                <div
                  key={agent}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 4,
                    padding: "5px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      width: 72,
                      flexShrink: 0,
                    }}
                  >
                    {agent}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: palette.mid,
                      flex: 1,
                    }}
                  >
                    {key}
                  </span>
                  <code
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: palette.accent,
                      fontWeight: 700,
                    }}
                  >
                    {cmd}
                  </code>
                </div>
              ))}
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <KV
                  k="Default tools"
                  v="Python 3.13, Node 22, git, gh, vim, nano"
                />
                <KV
                  k="Net tools"
                  v="ping, dig, nslookup, nc, traceroute, netstat"
                />
              </div>
            </SectionCard>

            {/* 11. Policy Hot-Reload vs Locked */}
            <SectionCard number="11" title="Policy Hot-Reload vs Locked">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Critical distinction: some policies update live, others require
                sandbox recreation. Plan accordingly.
              </div>
              {[
                {
                  domain: "Network",
                  reload: "Hot-reload",
                  method: "openshell policy set",
                  note: "L7 rules update in seconds",
                },
                {
                  domain: "Inference",
                  reload: "Hot-reload",
                  method: "openshell inference set",
                  note: "Route cache refreshes every 5s",
                },
                {
                  domain: "Filesystem",
                  reload: "Locked",
                  method: "Recreate sandbox",
                  note: "Landlock applied at fork time",
                },
                {
                  domain: "Process",
                  reload: "Locked",
                  method: "Recreate sandbox",
                  note: "Seccomp + user set at creation",
                },
              ].map(({ domain, reload, method, note }, i) => (
                <div
                  key={domain}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 4,
                    padding: "5px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      width: 70,
                      flexShrink: 0,
                    }}
                  >
                    {domain}
                  </span>
                  <Tag color={reload === "Hot-reload" ? "#5a8a3c" : "#a53a3a"}>
                    {reload}
                  </Tag>
                  <span style={{ fontSize: 11, color: palette.mid, flex: 1 }}>
                    {note}
                  </span>
                </div>
              ))}
              <Code>{`# Hot-reload a network policy
openshell policy set \\
  --sandbox my-sandbox \\
  --policy ./updated-policy.yaml \\
  --wait

# Must recreate for filesystem changes
openshell sandbox delete my-sandbox
openshell sandbox create \\
  --policy ./new-fs-policy.yaml`}</Code>
            </SectionCard>

            {/* 12. Troubleshooting */}
            <SectionCard number="12" title="Troubleshooting">
              {[
                {
                  issue: "Gateway won't start",
                  fix: "Ensure Docker daemon is running. Check port 8080 is free. Run docker ps to verify no stale containers.",
                },
                {
                  issue: "Sandbox creation fails",
                  fix: "Check gateway status with openshell gateway logs. Verify image pull access. Try --from base first.",
                },
                {
                  issue: "inference.local not responding",
                  fix: "Run openshell inference get to verify route. Ensure provider is configured. Check Ollama is running if local.",
                },
                {
                  issue: "Policy not applying",
                  fix: "Network policies hot-reload; filesystem policies require sandbox recreation. Verify YAML with openshell policy get.",
                },
                {
                  issue: "SSH / VS Code won't connect",
                  fix: "Run openshell sandbox ssh-config and add output to ~/.ssh/config. Verify sandbox is running.",
                },
                {
                  issue: "Agent can't reach API",
                  fix: "Check openshell term for Deny entries. Add endpoint to network policy. Verify binary path in policy.",
                },
              ].map(({ issue, fix }, i) => (
                <div
                  key={issue}
                  style={{
                    padding: "5px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                    marginBottom: 5,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      marginBottom: 2,
                    }}
                  >
                    {issue}
                  </div>
                  <div style={{ fontSize: 11.5, color: palette.mid }}>
                    {fix}
                  </div>
                </div>
              ))}
            </SectionCard>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: "14px 0 18px",
            fontSize: 12,
            color: palette.mid,
            fontFamily: "'Georgia', serif",
          }}
        >
          {"OpenShell Cheatsheet \u2014 Created "}
          {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 10.5, color: palette.mid }}>
            {
              "Source: NVIDIA OpenShell v0.0.10 \u00B7 github.com/NVIDIA/OpenShell \u00B7 Apache 2.0"
            }
          </span>
        </div>
      </div>
    </>
  );
}
