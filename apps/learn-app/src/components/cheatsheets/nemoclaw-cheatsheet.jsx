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
      {"✔"}
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
        width: 160,
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

export default function NemoClawCheatsheet() {
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
            NemoClaw{" "}
            <span style={{ color: palette.accentLight }}>
              Operator Cheatsheet
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
            Security · Models · Policies · Blueprints · Approval · Deployment —{" "}
            {new Date().getFullYear()} Edition (Alpha)
          </div>
        </div>

        {/* ═══════════ PAGE 1: Why NemoClaw & Getting Started ═══════════ */}
        <div
          style={{
            textAlign: "center",
            padding: "6px 12px 2px",
            fontSize: 10,
            fontWeight: 800,
            color: palette.accent,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontFamily: "'Georgia', serif",
          }}
        >
          Page 1 — Why NemoClaw & Getting Started
        </div>

        <div
          className="cheatsheet-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 6,
            padding: "4px 12px 8px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* 1. Why NemoClaw Exists */}
          <SectionCard number="1" title="Why NemoClaw Exists">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              <strong>The problem:</strong> OpenClaw is powerful but runs with a
              single-user trust model — no network isolation, no filesystem
              boundaries, no inference controls. Fine for a developer at a
              keyboard. Dangerous for an autonomous agent.
            </div>
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 5,
                lineHeight: 1.4,
              }}
            >
              <strong>NemoClaw{"'"}s answer:</strong> Wrap OpenClaw in NVIDIA
              OpenShell{"'"}s security sandbox and route inference through
              Nemotron models. One <code>curl</code> command to go from
              {"'"}open agent{"'"} to {"'"}governed agent.{"'"}
            </div>
            <Code>{`OpenClaw (agent engine)
  \u2502 registers plugin
NemoClaw (bridge, ~16K LoC)
  \u2502 subprocess calls
OpenShell (sandbox runtime, 69K Rust)
  \u2502 enforces 4-layer security
Nemotron (NVIDIA cloud models)`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>One-sentence pitch</strong> — a Helm chart for running
                OpenClaw safely on OpenShell
              </Bullet>
              <Bullet>
                Every NemoClaw operation = subprocess call to{" "}
                <code>openshell</code> binary
              </Bullet>
              <Bullet>
                NemoClaw never imports OpenShell code — pure control-plane client
              </Bullet>
              <Bullet>Apache 2.0 | Alpha | NVIDIA</Bullet>
            </div>
          </SectionCard>

          {/* 2. What You Get (and Give Up) */}
          <SectionCard number="2" title="What You Get (and Give Up)">
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: palette.accent,
                marginBottom: 3,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              vs Raw OpenClaw
            </div>
            <Check>
              Sealed container — Landlock + seccomp + network namespace
            </Check>
            <Check>
              Deny-by-default egress — only listed endpoints reachable
            </Check>
            <Check>
              Inference routing — agent never sees real API keys
            </Check>
            <Check>
              Operator approval — human-in-the-loop for unknown hosts
            </Check>
            <Check>
              Policy presets — drop-in YAML for Slack, Docker, HuggingFace, etc.
            </Check>
            <Check>
              Blueprint lifecycle — versioned, digest-verified, reproducible
            </Check>
            <div
              style={{
                marginTop: 5,
                fontSize: 9,
                fontWeight: 700,
                color: "#7a5a8a",
                textTransform: "uppercase",
                letterSpacing: 0.5,
                marginBottom: 3,
              }}
            >
              Tradeoffs
            </div>
            <Bullet>
              <strong>Linux primary</strong> — macOS via Colima/Docker Desktop, Windows via WSL
            </Bullet>
            <Bullet>
              <strong>Fresh install</strong> — cannot retrofit existing OpenClaw
            </Bullet>
            <Bullet>
              <strong>Alpha maturity</strong> — interfaces may change without notice
            </Bullet>
            <Bullet>
              <strong>Sandbox overhead</strong> — K3s-in-Docker adds resource cost
            </Bullet>
          </SectionCard>

          {/* 3. Install & First Launch */}
          <SectionCard number="3" title="Install & First Launch">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#3a6ea5">Linux</Tag>
              <Tag color="#5a8a3c">Docker</Tag>
              <Tag color="#7a5a8a">Node 20+</Tag>
              <Tag>OpenShell</Tag>
            </div>
            <Code>{`# One-command install + onboard wizard
curl -fsSL https://www.nvidia.com/nemoclaw.sh \\
  | bash`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="What the wizard does" v="Creates gateway, registers NVIDIA provider, builds sandbox image, applies policies" />
              <KV k="First run" v="Prompts for NVIDIA_API_KEY, saves to ~/.nemoclaw/credentials.json" />
              <KV k="Sandbox name" v="RFC 1123 — lowercase alphanumeric + hyphens (e.g. my-assistant)" />
            </div>
            <div
              style={{
                marginTop: 4,
                fontSize: 9,
                fontWeight: 700,
                color: palette.accent,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                marginBottom: 3,
              }}
            >
              Prerequisites
            </div>
            {[
              { req: "CPU", val: "4 vCPU min" },
              { req: "RAM", val: "8 GB min, 16 GB recommended" },
              { req: "Disk", val: "20 GB min, 40 GB recommended" },
              { req: "OS", val: "Ubuntu 22.04+ (primary)" },
            ].map(({ req, val }) => (
              <KV key={req} k={req} v={val} />
            ))}
            <Bullet>
              <strong>DGX Spark</strong> — run{" "}
              <code>sudo nemoclaw setup-spark</code> first for cgroup v2 fixes
            </Bullet>
          </SectionCard>

          {/* 4. Daily Operations */}
          <SectionCard number="4" title="Daily Operations">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Five commands you use every day. The sandbox name (e.g.{" "}
              <code>my-assistant</code>) is your handle for everything.
            </div>
            {[
              { cmd: "nemoclaw <n> connect", what: "Shell into sandbox" },
              { cmd: "nemoclaw <n> status", what: "Health + inference config" },
              { cmd: "nemoclaw <n> logs -f", what: "Stream logs (follow)" },
              { cmd: "nemoclaw list", what: "List all sandboxes" },
              { cmd: "nemoclaw <n> destroy", what: "Stop + delete sandbox" },
            ].map(({ cmd, what }, i) => (
              <div
                key={cmd}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 3,
                }}
              >
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    color: palette.accent,
                    fontWeight: 700,
                    width: 140,
                    flexShrink: 0,
                  }}
                >
                  {cmd}
                </code>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {what}
                </span>
              </div>
            ))}
            <Code>{`# Inside the sandbox: interactive chat
sandbox@my-assistant:~$ openclaw tui

# Or single-message CLI (better for long output)
sandbox@my-assistant:~$ openclaw agent \\
  --agent main --local \\
  -m "hello" --session-id test`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <code>openshell term</code> — TUI for monitoring + approving
                network requests
              </Bullet>
              <Bullet>
                <code>/nemoclaw status</code> — slash command inside OpenClaw
                chat
              </Bullet>
            </div>
          </SectionCard>

          {/* 5. Nemotron Models */}
          <SectionCard number="5" title="Nemotron Models">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              All served via <strong>build.nvidia.com</strong>. 131K context
              window. Agent never sees API keys —{" "}
              <code>inference.local</code> proxies everything.
            </div>
            {[
              {
                name: "Super 120B",
                id: "nemotron-3-super-120b-a12b",
                out: "8K",
                tag: "Default",
                tagColor: "#5a8a3c",
                when: "Best quality. Production workloads.",
              },
              {
                name: "Ultra 253B",
                id: "nemotron-ultra-253b-v1",
                out: "4K",
                tag: "Largest",
                tagColor: "#7a5a8a",
                when: "Hardest reasoning. Highest cost.",
              },
              {
                name: "Super 49B v1.5",
                id: "nemotron-super-49b-v1.5",
                out: "4K",
                tag: "Mid-tier",
                tagColor: "#3a6ea5",
                when: "Balance of speed and quality.",
              },
              {
                name: "Nano 30B",
                id: "nemotron-3-nano-30b-a3b",
                out: "4K",
                tag: "Fastest",
                tagColor: "#3a6ea5",
                when: "Quick tasks. Lowest latency.",
              },
            ].map(({ name, out, tag, tagColor, when }, i) => (
              <div
                key={name}
                style={{
                  padding: "4px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 3,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 1 }}>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 10,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 9, color: palette.mid }}>
                    ({out} output)
                  </span>
                  <Tag color={tagColor}>{tag}</Tag>
                </div>
                <div style={{ fontSize: 9, color: palette.mid }}>
                  {when}
                </div>
              </div>
            ))}
            <Code>{`# Switch model at runtime (no restart)
openshell inference set \\
  --provider nvidia-nim \\
  --model nvidia/llama-3.1-nemotron-ultra-253b-v1

# Verify active model
openclaw nemoclaw status`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="Auth" v="NVIDIA_API_KEY from build.nvidia.com" />
              <KV k="Key storage" v="~/.nemoclaw/credentials.json (set at onboard)" />
            </div>
          </SectionCard>

          {/* 6. Network Policy Presets */}
          <SectionCard number="6" title="Network Policy Presets">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              <strong>Deny-by-default</strong> egress. Only listed endpoints
              reachable. 9 drop-in presets — add what your agent needs:
            </div>
            {[
              { preset: "Slack", hosts: "slack.com, api.slack.com, hooks.slack.com" },
              { preset: "Discord", hosts: "discord.com, gateway.discord.gg, cdn.discordapp.com" },
              { preset: "Docker", hosts: "registry-1.docker.io, auth.docker.io, nvcr.io" },
              { preset: "HuggingFace", hosts: "huggingface.co, cdn-lfs.huggingface.co, api-inference.huggingface.co" },
              { preset: "Jira", hosts: "*.atlassian.net, auth.atlassian.com, api.atlassian.com" },
              { preset: "Outlook", hosts: "graph.microsoft.com, login.microsoftonline.com, outlook.office365.com" },
              { preset: "PyPI", hosts: "pypi.org, files.pythonhosted.org" },
              { preset: "npm", hosts: "registry.npmjs.org, registry.yarnpkg.com" },
              { preset: "Telegram", hosts: "api.telegram.org (/bot* paths)" },
            ].map(({ preset, hosts }, i) => (
              <div
                key={preset}
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
                <Tag color="#3a6ea5">{preset}</Tag>
                <span style={{ fontSize: 9, color: palette.mid }}>
                  {hosts}
                </span>
              </div>
            ))}
            <Code>{`# Add a preset to a running sandbox
nemoclaw my-assistant policy-add

# List applied presets
nemoclaw my-assistant policy-list`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                All presets use TLS termination on port 443
              </Bullet>
              <Bullet>
                Per-binary restrictions — specific executables reach specific
                hosts
              </Bullet>
              <Bullet>
                Custom policy: edit <code>openclaw-sandbox.yaml</code> then{" "}
                <code>nemoclaw onboard</code>
              </Bullet>
            </div>
          </SectionCard>
        </div>

        {/* ═══════════ PAGE 2: Security & Architecture ═══════════ */}
        <div
          style={{
            textAlign: "center",
            padding: "6px 12px 2px",
            fontSize: 10,
            fontWeight: 800,
            color: palette.accent,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontFamily: "'Georgia', serif",
          }}
        >
          Page 2 — Security & Architecture
        </div>

        <div
          className="cheatsheet-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 6,
            padding: "4px 12px 8px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* 7. Operator Approval Flow */}
          <SectionCard number="7" title="Operator Approval Flow">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              The human-in-the-loop pattern. When an autonomous agent tries to
              reach an unknown host, <strong>you</strong> decide.
            </div>
            {[
              "Agent makes request to unlisted host",
              "OpenShell blocks the connection, logs the attempt",
              "TUI shows: host, port, binary, HTTP method, path",
              "Operator approves or denies in real time",
              "Approved endpoints persist for session only",
            ].map((step, i) => (
              <div
                key={i}
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
                    fontWeight: 900,
                    color: palette.accent,
                    fontSize: 9,
                    width: 14,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 10, color: palette.mid }}>
                  {step}
                </span>
              </div>
            ))}
            <Code>{`# Launch the monitoring TUI
openshell term

# Guided walkthrough (split tmux)
./scripts/walkthrough.sh`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Approvals <strong>never</strong> modify baseline policy file —
                session-scoped only
              </Bullet>
              <Bullet>
                To permanently allow: add to{" "}
                <code>openclaw-sandbox.yaml</code> and re-onboard
              </Bullet>
              <Bullet>
                Dynamic update without restart:{" "}
                <code>openshell policy set {"<"}file{">"}</code>
              </Bullet>
              <Bullet>
                <strong>Why this matters:</strong> autonomous agents should not
                grant themselves network access
              </Bullet>
            </div>
          </SectionCard>

          {/* 8. 4 Security Layers */}
          <SectionCard number="8" title="4 Security Layers">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Defense in depth. Each layer is independently enforced. Two are
              hot-reloadable, two are locked at sandbox creation.
            </div>
            {[
              {
                l: "L1",
                name: "Network",
                what: "Deny-by-default egress, per-binary rules, OPA policy engine",
                tech: "Network namespace + HTTP CONNECT proxy",
                reload: "Hot-reload",
              },
              {
                l: "L2",
                name: "Filesystem",
                what: "/sandbox + /tmp RW. /usr, /lib, /etc, /app read-only",
                tech: "Landlock LSM (Linux 5.13+, best-effort)",
                reload: "Locked",
              },
              {
                l: "L3",
                name: "Process",
                what: "sandbox:sandbox user, blocked dangerous syscalls",
                tech: "seccomp filter — blocks AF_PACKET, AF_BLUETOOTH, AF_VSOCK",
                reload: "Locked",
              },
              {
                l: "L4",
                name: "Inference",
                what: "All LLM calls via gateway proxy, keys injected server-side",
                tech: "inference.local endpoint — agent sees openshell-managed key",
                reload: "Hot-reload",
              },
            ].map(({ l, name, what, tech, reload }, i) => (
              <div
                key={l}
                style={{
                  padding: "4px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 3,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 2,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      color: palette.accent,
                      fontSize: 10,
                      width: 20,
                    }}
                  >
                    {l}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 10,
                      flex: 1,
                    }}
                  >
                    {name}
                  </span>
                  <Tag
                    color={reload === "Hot-reload" ? "#5a8a3c" : "#7a5a8a"}
                  >
                    {reload}
                  </Tag>
                </div>
                <div style={{ fontSize: 9, color: palette.mid, marginLeft: 26 }}>
                  {what}
                </div>
                <div
                  style={{
                    fontSize: 8.5,
                    color: palette.mid,
                    marginLeft: 26,
                    fontStyle: "italic",
                  }}
                >
                  {tech}
                </div>
              </div>
            ))}
            <Bullet>
              Blueprint artifacts are digest-verified (SHA-256) — supply chain
              safety
            </Bullet>
            <Bullet>
              mTLS everywhere: CLI to gateway, gateway to sandbox
            </Bullet>
          </SectionCard>

          {/* 9. Blueprint Architecture */}
          <SectionCard number="9" title="Blueprint Architecture">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              Thin plugin stays stable. Blueprint evolves independently.
              Like Terraform: plan what changes, verify the plan, then apply.
            </div>
            {[
              { step: "Resolve", desc: "Locate artifact, check version constraints (min_openshell, min_openclaw)" },
              { step: "Verify", desc: "SHA-256 digest integrity check against expected value" },
              { step: "Plan", desc: "Determine resources to create/update: gateway, providers, sandbox, policy" },
              { step: "Apply", desc: "Execute plan via openshell CLI subprocess calls" },
            ].map(({ step, desc }, i) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 3,
                }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    color: palette.accent,
                    fontSize: 9,
                    width: 14,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: palette.dark,
                    fontSize: 10,
                    width: 50,
                    flexShrink: 0,
                  }}
                >
                  {step}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {desc}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 4 }}>
              <KV k="Plugin" v="TypeScript CLI (Commander.js) — user interaction" />
              <KV k="Blueprint" v="Python runner.py — orchestration logic, versioned independently" />
              <KV k="Communication" v={"Subprocess: PROGRESS:<pct>:<label> on stdout, exit code for status"} />
              <KV k="Cache" v={"~/.nemoclaw/blueprints/<version>/"} />
            </div>
            <div
              style={{
                marginTop: 4,
                padding: "4px 6px",
                background: palette.highlight,
                borderRadius: 4,
              }}
            >
              <Bullet>
                <strong>Reproducible:</strong> running <code>nemoclaw onboard</code>{" "}
                again recreates from same blueprint + policy
              </Bullet>
            </div>
          </SectionCard>

          {/* 10. Telegram Bridge */}
          <SectionCard number="10" title="Telegram Bridge">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Chat with your sandboxed agent from any Telegram client. The most
              developed external channel.
            </div>
            {[
              { step: "1", desc: "Create bot via @BotFather, get token" },
              { step: "2", desc: "export TELEGRAM_BOT_TOKEN=<token>" },
              { step: "3", desc: "nemoclaw start (launches bridge + cloudflared tunnel)" },
              { step: "4", desc: "Send a message to your bot in Telegram" },
            ].map(({ step, desc }, i) => (
              <div
                key={step}
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
                    fontWeight: 900,
                    color: palette.accent,
                    fontSize: 9,
                    width: 14,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {step}
                </span>
                <span style={{ fontSize: 10, color: palette.mid }}>
                  {desc}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 4 }}>
              <KV k="How it works" v="Long-polling bot SSHs into sandbox per message" />
              <KV k="Responses" v="Chunked at 4000 chars, Markdown with plaintext fallback" />
              <KV k="Access control" v="ALLOWED_CHAT_IDS=123,456 (comma-separated)" />
              <KV k="External access" v="cloudflared tunnel auto-started with nemoclaw start" />
              <KV k="Stop" v="nemoclaw stop (stops bridge + all aux services)" />
              <KV k="Status" v="nemoclaw status (shows bridge health)" />
            </div>
          </SectionCard>

          {/* 11. Inference Routing Path */}
          <SectionCard number="11" title="How Inference Routing Works">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              The agent inside the sandbox calls{" "}
              <code>https://inference.local/v1</code>. It never sees the real
              API key or endpoint. Here is the full path:
            </div>
            {[
              "Agent calls https://inference.local/v1 (placeholder key: openshell-managed)",
              "HTTP CONNECT proxy intercepts the connection",
              "OPA policy check — inference.local is always allowed",
              "L7 module detects API pattern (POST /v1/chat/completions)",
              "Router selects cached inference route for active model",
              "Request rewritten with real endpoint + real API key",
              "Response streamed back to agent inside sandbox",
            ].map((step, i) => (
              <div
                key={i}
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
                    fontWeight: 900,
                    color: palette.accent,
                    fontSize: 9,
                    width: 14,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {step}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Supports OpenAI + Anthropic protocols natively
              </Bullet>
              <Bullet>
                Dual-binary identity — proxy walks process tree to match policy
                (e.g. node running claude)
              </Bullet>
              <Bullet>
                TLS termination with ephemeral CA for L7 REST inspection
              </Bullet>
              <Bullet>
                Local inference (Ollama, vLLM) experimental — see blueprint
                profiles
              </Bullet>
            </div>
          </SectionCard>

          {/* 12. Troubleshooting & Limitations */}
          <SectionCard number="12" title="Troubleshooting & Limitations">
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: palette.accent,
                marginBottom: 3,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Common Issues
            </div>
            <KV
              k="nemoclaw not found"
              v="Run source ~/.bashrc (nvm/fnm may not update PATH)"
            />
            <KV
              k="Docker not running"
              v="Start daemon: sudo systemctl start docker"
            />
            <KV
              k="Cgroup v2 errors"
              v="sudo nemoclaw setup-spark, then nemoclaw onboard"
            />
            <KV
              k="Port 18789 in use"
              v={"lsof -i :18789, then kill <PID>"}
            />
            <KV
              k="inference.local fails"
              v="Check openshell inference get; verify provider created"
            />
            <KV
              k="Agent blocked from host"
              v="openshell term to see + approve blocked requests"
            />
            <KV
              k="Blueprint run failed"
              v={"openclaw nemoclaw logs --run-id <id>"}
            />
            <KV
              k="Status says 'not running' inside sandbox"
              v="Expected — run openshell sandbox list on host instead"
            />
            <div
              style={{
                marginTop: 5,
                fontSize: 9,
                fontWeight: 700,
                color: "#7a5a8a",
                textTransform: "uppercase",
                letterSpacing: 0.5,
                marginBottom: 3,
              }}
            >
              Known Limitations
            </div>
            <Bullet>
              <strong>Alpha software</strong> — interfaces, APIs, and behavior
              may change without notice
            </Bullet>
            <Bullet>
              <strong>Fresh install only</strong> — cannot retrofit existing
              OpenClaw; use <code>nemoclaw onboard</code>
            </Bullet>
            <Bullet>
              <strong>Landlock requires</strong> Linux kernel 5.13+ with
              Landlock LSM enabled
            </Bullet>
            <Bullet>
              <strong>Plugin commands</strong> (<code>openclaw nemoclaw</code>) are under
              active development — use <code>nemoclaw</code> host CLI as primary
            </Bullet>
          </SectionCard>

          {/* CLI Reference (full width) */}
          <SectionCard number="R" title="CLI Reference" span={3}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div style={{ flex: "1 1 200px", minWidth: 180 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  NemoClaw Host Commands
                </div>
                <RefRow cmd="nemoclaw onboard" desc="Interactive setup wizard (gateway + providers + sandbox)" />
                <RefRow cmd="nemoclaw list" desc="List all sandboxes with model + presets" />
                <RefRow cmd="nemoclaw <n> connect" desc="Shell into sandbox" />
                <RefRow cmd="nemoclaw <n> status" desc="Health, blueprint state, inference config" />
                <RefRow cmd="nemoclaw <n> logs [-f]" desc="View/follow logs" />
                <RefRow cmd="nemoclaw <n> destroy" desc="Stop and delete sandbox" />
                <RefRow cmd="nemoclaw <n> policy-add" desc="Add policy presets interactively" />
                <RefRow cmd="nemoclaw <n> policy-list" desc="List available + applied presets" />
                <RefRow cmd="nemoclaw start" desc="Start Telegram bridge + cloudflared tunnel" />
                <RefRow cmd="nemoclaw stop" desc="Stop all auxiliary services" />
                <RefRow cmd="nemoclaw status" desc="Sandbox list + aux service status" />
                <RefRow cmd="nemoclaw deploy <n>" desc="Remote GPU via Brev (experimental)" />
                <RefRow cmd="nemoclaw setup-spark" desc="DGX Spark cgroup v2 + Docker fixes" />
              </div>
              <div style={{ flex: "1 1 200px", minWidth: 180 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  OpenShell Commands (Used by NemoClaw)
                </div>
                <RefRow cmd="openshell sandbox create" desc="Create sandbox container from image" />
                <RefRow cmd="openshell sandbox connect" desc="Attach to running sandbox" />
                <RefRow cmd="openshell provider create" desc="Register inference provider" />
                <RefRow cmd="openshell inference set" desc="Set active model + provider" />
                <RefRow cmd="openshell inference get" desc="Show current model config" />
                <RefRow cmd="openshell policy set" desc="Apply policy YAML (hot-reload)" />
                <RefRow cmd="openshell policy get" desc="Show active policy" />
                <RefRow cmd="openshell term" desc="TUI: monitor + approve/deny requests" />
                <RefRow cmd="openshell sandbox ssh-config" desc="SSH config for sandbox access" />
                <RefRow cmd="openshell sandbox cp" desc="Copy files into sandbox" />
              </div>
              <div style={{ flex: "1 1 200px", minWidth: 180 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Default Baseline Policy Endpoints
                </div>
                <KV k="claude_code" v="api.anthropic.com (claude binary only)" />
                <KV k="nvidia" v="integrate.api.nvidia.com (claude + openclaw)" />
                <KV k="github" v="github.com, api.github.com (gh + git)" />
                <KV k="clawhub" v="clawhub.com (openclaw, GET+POST)" />
                <KV k="openclaw_api" v="openclaw.ai (openclaw, GET+POST)" />
                <KV k="openclaw_docs" v="docs.openclaw.ai (GET only)" />
                <KV k="npm_registry" v="registry.npmjs.org (openclaw + npm)" />
                <KV k="telegram" v="api.telegram.org (/bot* paths, any binary)" />
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Custom Policy YAML Format
                </div>
                <Code>{`network_policies:
  my_service:
    endpoints:
      - host: api.example.com
        port: 443
        tls: terminate
        rules:
          - allow: { method: GET, path: "/**" }
    binaries:
      - path: /usr/local/bin/claude`}</Code>
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
          NemoClaw Operator Cheatsheet — Created {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 9, color: palette.mid }}>
            {"NVIDIA's OpenClaw plugin for OpenShell — Apache 2.0 — Alpha"}
          </span>
        </div>
      </div>
    </>
  );
}
