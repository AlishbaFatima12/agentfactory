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
        width: 160,
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

export default function NemoClawCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = [
    "Page 1: Setup & Daily Use",
    "Page 2: Operations & Architecture",
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
            NemoClaw{" "}
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
              "NVIDIA \u00B7 OPENCLAW + OPENSHELL BRIDGE \u00B7 NEMOTRON MODELS \u2014 2026 EDITION"
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

        {/* Page 1: Setup & Daily Use */}
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
            {/* Section 1: What NemoClaw Does */}
            <SectionCard number="1" title="What NemoClaw Does">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                NemoClaw is the{" "}
                <strong style={{ color: palette.dark }}>
                  orchestration bridge
                </strong>{" "}
                between three independent systems. It is NOT an agent, NOT a
                sandbox — it is the packaging layer that wires them together.
              </div>
              {[
                {
                  l: "TOP",
                  name: "OpenClaw",
                  desc: "The AI agent (personal assistant)",
                },
                {
                  l: "MID",
                  name: "NemoClaw",
                  desc: "Bridge: config + policies + lifecycle",
                },
                {
                  l: "LOW",
                  name: "OpenShell",
                  desc: "Secure sandbox runtime (Rust, K3s)",
                },
                {
                  l: "INF",
                  name: "Nemotron",
                  desc: "NVIDIA inference models (30B\u2013253B)",
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
                      fontSize: 11,
                      width: 28,
                    }}
                  >
                    {l}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      width: 80,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 11.5, color: palette.mid }}>
                    {desc}
                  </span>
                </div>
              ))}
              <Bullet>
                Analogy: <strong>Helm chart for Kubernetes</strong> — NemoClaw
                is an opinionated, pre-packaged config for running OpenClaw on
                OpenShell
              </Bullet>
            </SectionCard>

            {/* Section 2: Prerequisites & Install */}
            <SectionCard number="2" title="Prerequisites & Install">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#3a6ea5">LINUX-FIRST</Tag>
                <Tag color="#7a5a8a">ALPHA</Tag>
                <Tag color="#5a8a3c">APACHE 2.0</Tag>
              </div>
              <KV
                k="OS"
                v="Ubuntu 22.04+ (macOS via Colima, Windows via WSL)"
              />
              <KV k="CPU / RAM" v="4 vCPU min, 8 GB min (16 GB recommended)" />
              <KV k="Disk" v="20 GB free min (40 GB recommended)" />
              <KV k="Node.js" v="20+ with npm 10+" />
              <KV k="Python" v="3.11+" />
              <KV k="Docker" v="Installed and running" />
              <KV k="OpenShell" v="Must be installed first" />
              <Code>{"curl -fsSL https://nvidia.com/nemoclaw.sh | bash"}</Code>
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  Requires a <strong>fresh</strong> OpenClaw install — cannot
                  retrofit existing setups
                </Bullet>
                <Bullet>
                  Sandbox image is ~2.4 GB compressed; Docker + K3s buffer
                  layers in memory
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 3: Launch & Connect */}
            <SectionCard number="3" title="Launch & Connect">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                The daily workflow: onboard once, then connect to your sandbox
                as needed.
              </div>
              <Code>{`# Interactive setup wizard (first time)
nemoclaw onboard

# Connect to sandbox shell
nemoclaw my-assistant connect

# Inside sandbox: launch agent TUI
sandbox@my-assistant:~$ openclaw tui

# Or send a single message
sandbox@my-assistant:~$ openclaw agent \\
  --agent main --local -m "hello"`}</Code>
              <div style={{ marginTop: 8 }}>
                <RefRow
                  cmd="nemoclaw onboard"
                  desc="Interactive setup wizard (9-step)"
                />
                <RefRow cmd="<name> connect" desc="SSH into running sandbox" />
                <RefRow
                  cmd="<name> status"
                  desc="Show config, model, and health"
                />
                <RefRow
                  cmd="<name> logs -f"
                  desc="Stream sandbox logs (follow mode)"
                />
                <RefRow cmd="<name> destroy" desc="Stop and delete sandbox" />
              </div>
            </SectionCard>

            {/* Section 4: Blueprint Lifecycle */}
            <SectionCard number="4" title="Blueprint Lifecycle">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Terraform-like orchestration: immutable, versioned,
                digest-verified artifacts that create reproducible sandbox
                environments.
              </div>
              {[
                {
                  step: "1",
                  name: "Resolve",
                  desc: "Locate artifact, check version compatibility",
                },
                {
                  step: "2",
                  name: "Verify",
                  desc: "SHA-256 digest check (supply chain safety)",
                },
                {
                  step: "3",
                  name: "Plan",
                  desc: "Determine OpenShell resources needed",
                },
                {
                  step: "4",
                  name: "Apply",
                  desc: "Create sandbox via openshell CLI calls",
                },
                {
                  step: "5",
                  name: "Status",
                  desc: "Report current deployment state",
                },
              ].map(({ step, name, desc }, i) => (
                <div
                  key={step}
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
                      width: 18,
                    }}
                  >
                    {step}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      width: 58,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 11.5, color: palette.mid }}>
                    {desc}
                  </span>
                </div>
              ))}
              <Bullet>
                Python runner (<code>runner.py</code>) spawned as subprocess by
                TS plugin
              </Bullet>
              <Bullet>
                Progress via stdout protocol:{" "}
                <code>{"PROGRESS:<0-100>:<label>"}</code>
              </Bullet>
            </SectionCard>

            {/* Section 5: Nemotron Model Catalog */}
            <SectionCard number="5" title="Nemotron Model Catalog">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Four Nemotron models via <code>build.nvidia.com</code>. All
                share 131K context. Switch at runtime without restarting the
                sandbox.
              </div>
              {[
                {
                  name: "Nemotron 3 Super 120B",
                  id: "nemotron-3-super-120b-a12b",
                  out: "8,192",
                  note: "Default \u2014 12B active params, MoE",
                },
                {
                  name: "Nemotron Ultra 253B",
                  id: "llama-3.1-nemotron-ultra-253b-v1",
                  out: "4,096",
                  note: "Largest available model",
                },
                {
                  name: "Nemotron Super 49B v1.5",
                  id: "llama-3.3-nemotron-super-49b-v1.5",
                  out: "4,096",
                  note: "Mid-tier balance",
                },
                {
                  name: "Nemotron 3 Nano 30B",
                  id: "nemotron-3-nano-30b-a3b",
                  out: "4,096",
                  note: "Smallest / fastest",
                },
              ].map(({ name, id, out, note }, i) => (
                <div
                  key={id}
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
                    }}
                  >
                    {name}
                  </div>
                  <code
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: palette.accent,
                    }}
                  >
                    {"nvidia/"}
                    {id}
                  </code>
                  <div
                    style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}
                  >
                    Max output: {out} tokens — {note}
                  </div>
                </div>
              ))}
              <Code>{`# Switch model at runtime
openshell inference set \\
  --provider nvidia-nim \\
  --model nvidia/llama-3.1-nemotron-ultra-253b-v1`}</Code>
            </SectionCard>

            {/* Section 6: Network Policy Presets */}
            <SectionCard number="6" title="Network Policy Presets">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                9 drop-in YAML presets for common integrations. Add with{" "}
                <code>{"nemoclaw <name> policy-add"}</code>.
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 3,
                }}
              >
                {[
                  { name: "Discord", ep: "discord.com, cdn.discordapp.com" },
                  { name: "Docker", ep: "registry-1.docker.io" },
                  { name: "Hugging Face", ep: "huggingface.co, cdn-lfs.hf.co" },
                  { name: "Jira", ep: "*.atlassian.net" },
                  { name: "npm", ep: "registry.npmjs.org" },
                  { name: "Outlook", ep: "outlook.office365.com" },
                  { name: "PyPI", ep: "pypi.org, files.pythonhosted.org" },
                  { name: "Slack", ep: "slack.com, wss-primary.slack.com" },
                  { name: "Telegram", ep: "api.telegram.org" },
                ].map(({ name, ep }) => (
                  <div
                    key={name}
                    style={{ fontSize: 11.5, color: palette.mid }}
                  >
                    <strong style={{ color: palette.dark }}>{name}</strong>
                    <div style={{ fontSize: 10, color: palette.mid }}>{ep}</div>
                  </div>
                ))}
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
                  Write custom policies: same YAML schema with{" "}
                  <code>endpoints</code>, <code>binaries</code>,{" "}
                  <code>rules</code>
                </Bullet>
                <Bullet>
                  Hot-reloadable — apply at runtime without sandbox restart
                </Bullet>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Page 2: Operations & Architecture */}
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
            {/* Section 7: Operator Approval Flow */}
            <SectionCard number="7" title="Operator Approval Flow">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Human-in-the-loop for network requests the agent tries to make.
                Approvals are{" "}
                <strong style={{ color: palette.dark }}>session-only</strong> —
                they never permanently modify the baseline policy.
              </div>
              {[
                {
                  step: "1",
                  desc: "Agent attempts connection to unlisted host",
                },
                { step: "2", desc: "OpenShell blocks the request immediately" },
                {
                  step: "3",
                  desc: "TUI shows host, port, binary, HTTP method/path",
                },
                { step: "4", desc: "Operator approves or denies in real time" },
              ].map(({ step, desc }, i) => (
                <div
                  key={step}
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
                      width: 18,
                    }}
                  >
                    {step}
                  </span>
                  <span style={{ fontSize: 11.5, color: palette.mid }}>
                    {desc}
                  </span>
                </div>
              ))}
              <Code>{"# Launch the monitoring TUI\nopenshell term"}</Code>
              <Bullet>
                Denial aggregator generates <strong>policy proposals</strong>{" "}
                for frequently blocked endpoints
              </Bullet>
              <Bullet>
                Static overrides: edit <code>openclaw-sandbox.yaml</code> and
                re-run <code>nemoclaw onboard</code>
              </Bullet>
            </SectionCard>

            {/* Section 8: Telegram Bridge */}
            <SectionCard number="8" title="Telegram Bridge">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#3a6ea5">NODE.JS</Tag>
                <Tag color="#5a8a3c">LONG-POLLING</Tag>
                <Tag>MOST DEVELOPED</Tag>
              </div>
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Chat with your sandboxed agent from anywhere via Telegram. The
                bridge SSHs into the sandbox for each message.
              </div>
              <Code>{`# Start the Telegram bridge
nemoclaw start

# Stop all auxiliary services
nemoclaw stop`}</Code>
              <div style={{ marginTop: 8 }}>
                <KV k="Script" v="scripts/telegram-bridge.js (247 lines)" />
                <KV k="Auth" v="TELEGRAM_BOT_TOKEN env var (from @BotFather)" />
                <KV k="Access Control" v="ALLOWED_CHAT_IDS (comma-separated)" />
                <KV k="Chunking" v="Responses split at 4,000 chars, Markdown" />
              </div>
              <Bullet>
                Also starts <code>cloudflared</code> tunnel if configured
              </Bullet>
              <Bullet>
                Filters out NemoClaw banner lines from agent stdout
              </Bullet>
            </SectionCard>

            {/* Section 9: CLI Reference */}
            <SectionCard number="9" title="CLI Reference">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Two entry points: standalone <code>nemoclaw</code> CLI and{" "}
                <code>openclaw nemoclaw</code> plugin subcommands.
              </div>
              <RefRow
                cmd="nemoclaw onboard"
                desc="Interactive setup wizard (9 steps)"
              />
              <RefRow cmd="nemoclaw list" desc="List all managed sandboxes" />
              <RefRow cmd="<name> connect" desc="SSH shell into sandbox" />
              <RefRow
                cmd="<name> status"
                desc="Config, model, and health report"
              />
              <RefRow
                cmd="<name> logs [-f]"
                desc="View / stream sandbox logs"
              />
              <RefRow cmd="<name> destroy" desc="Stop and remove sandbox" />
              <RefRow
                cmd="<name> policy-add"
                desc="Add a network policy preset"
              />
              <RefRow cmd="<name> policy-list" desc="List active policies" />
              <RefRow
                cmd="nemoclaw deploy"
                desc="Deploy to remote GPU (Brev)"
              />
              <RefRow
                cmd="nemoclaw start"
                desc="Start Telegram bridge + tunnels"
              />
              <RefRow cmd="nemoclaw stop" desc="Stop all auxiliary services" />
              <RefRow
                cmd="nemoclaw setup-spark"
                desc="Configure for DGX Spark"
              />
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <div style={{ fontSize: 11, color: palette.mid }}>
                  <strong style={{ color: palette.dark }}>In-chat:</strong>{" "}
                  <code>/nemoclaw status</code> (slash command inside OpenClaw)
                </div>
              </div>
            </SectionCard>

            {/* Section 10: How NemoClaw Calls OpenShell */}
            <SectionCard number="10" title="How NemoClaw Calls OpenShell">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                NemoClaw is purely a{" "}
                <strong style={{ color: palette.dark }}>
                  control-plane client
                </strong>
                . Every operation is a subprocess call to the{" "}
                <code>openshell</code> binary. NemoClaw never imports OpenShell
                code directly.
              </div>
              <Code>{`# What NemoClaw runs under the hood:
openshell sandbox create \\
  --from <image> --name openclaw
openshell provider create \\
  --name nvidia-nim --type openai \\
  --credential NVIDIA_API_KEY
openshell inference set \\
  --provider nvidia-nim \\
  --model nvidia/nemotron-3-super-120b-a12b
openshell sandbox connect <name>
openshell policy set --policy <yaml>`}</Code>
              <Bullet>
                Blueprint runner (<code>runner.py</code>) executes via{" "}
                <code>python3 runner.py {"<action>"}</code>
              </Bullet>
              <Bullet>
                State stored at <code>~/.nemoclaw/state/nemoclaw.json</code>
              </Bullet>
              <Bullet>
                Blueprints cached at{" "}
                <code>{"~/.nemoclaw/blueprints/<version>/"}</code>
              </Bullet>
            </SectionCard>

            {/* Section 11: Security Layers (Inherited) */}
            <SectionCard number="11" title="Security Layers (Inherited)">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Four defense-in-depth layers from OpenShell. Two are
                hot-reloadable, two are locked at sandbox creation.
              </div>
              {[
                {
                  layer: "L1",
                  name: "Network",
                  desc: "Deny-by-default egress, OPA policy engine",
                  tag: "HOT-RELOAD",
                  tagColor: "#5a8a3c",
                },
                {
                  layer: "L2",
                  name: "Filesystem",
                  desc: "Landlock LSM: /sandbox, /tmp RW; rest RO",
                  tag: "LOCKED",
                  tagColor: "#a53a3a",
                },
                {
                  layer: "L3",
                  name: "Process",
                  desc: "seccomp syscall filter, sandbox:sandbox user",
                  tag: "LOCKED",
                  tagColor: "#a53a3a",
                },
                {
                  layer: "L4",
                  name: "Inference",
                  desc: "Gateway proxy, API keys injected server-side",
                  tag: "HOT-RELOAD",
                  tagColor: "#5a8a3c",
                },
              ].map(({ layer, name, desc, tag, tagColor }, i) => (
                <div
                  key={layer}
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
                    {layer}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      width: 70,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 11, color: palette.mid, flex: 1 }}>
                    {desc}
                  </span>
                  <Tag color={tagColor}>{tag}</Tag>
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
                <Bullet>
                  Inference endpoint inside sandbox:{" "}
                  <code>https://inference.local/v1</code>
                </Bullet>
                <Bullet>
                  Agent sees API key as <code>openshell-managed</code> — never
                  the real key
                </Bullet>
                <Bullet>
                  Process identity: proxy walks full ancestor tree to match
                  binary policies
                </Bullet>
                <Bullet>
                  Network namespace: isolated veth pair (
                  <code>10.200.0.1/24</code> host, <code>10.200.0.2/24</code>{" "}
                  sandbox)
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 12: Troubleshooting */}
            <SectionCard number="12" title="Troubleshooting">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Common issues and fixes during alpha.
              </div>
              {[
                {
                  problem: "OpenShell not found",
                  fix: "Run scripts/install-openshell.sh or install manually first",
                },
                {
                  problem: "Docker not running",
                  fix: "Start Docker daemon; K3s cluster runs inside Docker container",
                },
                {
                  problem: "inference.local not responding",
                  fix: "Check openshell inference get; verify NVIDIA_API_KEY is set",
                },
                {
                  problem: "Telegram bridge disconnects",
                  fix: "Check TELEGRAM_BOT_TOKEN and ALLOWED_CHAT_IDS env vars",
                },
                {
                  problem: "Blueprint verification fails",
                  fix: "Clear cache: rm -rf ~/.nemoclaw/blueprints/ and re-onboard",
                },
                {
                  problem: "Sandbox won't start (16 GB RAM)",
                  fix: "Image decompression buffers in memory; free RAM or increase swap",
                },
              ].map(({ problem, fix }, i) => (
                <div
                  key={i}
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
                    }}
                  >
                    {problem}
                  </div>
                  <div style={{ fontSize: 11, color: palette.mid }}>{fix}</div>
                </div>
              ))}
              <Code>{`# Useful diagnostic commands
nemoclaw <name> status       # sandbox health
nemoclaw <name> logs -f      # streaming logs
openshell term               # TUI dashboard
openshell sandbox status <name> --json`}</Code>
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
          {"NemoClaw Cheatsheet \u2014 Created"} {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 10.5, color: palette.mid }}>
            {
              "Source: github.com/NVIDIA/NemoClaw \u00B7 docs.nvidia.com/nemoclaw \u00B7 Apache 2.0 \u00B7 Alpha Software"
            }
          </span>
        </div>
      </div>
    </>
  );
}
