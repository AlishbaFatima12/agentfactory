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
      {"○"}
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

export default function OpenClawCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = [
    "Page 1: Setup & Daily Use",
    "Page 2: Architecture & Advanced",
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
            OpenClaw{" "}
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
              "Personal AI Assistant \u00B7 Setup \u00B7 Channels \u00B7 Skills \u2014 2026 Edition"
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
            {/* Section 1: Quick Start */}
            <SectionCard number="1" title="Quick Start">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#3a6ea5">Node 22+</Tag>
                <Tag color="#5a8a3c">MIT License</Tag>
                <Tag color="#7a5a8a">TypeScript</Tag>
              </div>
              <Code>
                {
                  "npm install -g openclaw@latest\nopenclaw onboard --install-daemon"
                }
              </Code>
              <div style={{ marginTop: 8 }}>
                <KV k="Install" v="npm, pnpm, or curl script" />
                <KV
                  k="Onboard"
                  v="Interactive wizard sets up workspace, channels, API keys"
                />
                <KV
                  k="Daemon"
                  v="launchd (macOS) or systemd (Linux) keeps gateway running"
                />
                <KV
                  k="First chat"
                  v="Run openclaw tui after onboard completes"
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
                <Bullet>
                  <strong>Alt install:</strong>{" "}
                  <code>
                    {"curl -fsSL https://openclaw.ai/install-cli.sh | bash"}
                  </code>
                </Bullet>
                <Bullet>
                  <strong>Update:</strong>{" "}
                  <code>{"npm update -g openclaw"}</code> or{" "}
                  <code>{"openclaw update"}</code>
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 2: Workspace Files */}
            <SectionCard number="2" title="Workspace Files">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {
                  "8 markdown files at ~/.openclaw/workspace/ injected into every system prompt."
                }
              </div>
              {[
                {
                  file: "SOUL.md",
                  desc: "Personality, values, behavioral identity",
                },
                {
                  file: "AGENTS.md",
                  desc: "Agent definitions and operating rules",
                },
                {
                  file: "TOOLS.md",
                  desc: "Available capabilities, tool guidance",
                },
                { file: "IDENTITY.md", desc: "Agent name, emoji, avatar" },
                {
                  file: "USER.md",
                  desc: "Info about you (preferences, context)",
                },
                {
                  file: "HEARTBEAT.md",
                  desc: "Periodic scheduled task instructions",
                },
                {
                  file: "BOOTSTRAP.md",
                  desc: "First-run setup ritual, self-deletes",
                },
                {
                  file: "MEMORY.md",
                  desc: "Persistent memory store (iron-law rules)",
                },
              ].map(({ file, desc }, i) => (
                <div
                  key={file}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                    padding: "4px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                  }}
                >
                  <code
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10.5,
                      color: palette.accent,
                      fontWeight: 700,
                      width: 100,
                      flexShrink: 0,
                    }}
                  >
                    {file}
                  </code>
                  <span style={{ fontSize: 11, color: palette.mid }}>
                    {desc}
                  </span>
                </div>
              ))}
              <Bullet>
                <strong>Minimal viable:</strong> AGENTS.md + SOUL.md + TOOLS.md
              </Bullet>
              <Bullet>
                Subagents/cron only get AGENTS, TOOLS, SOUL, IDENTITY, USER
              </Bullet>
            </SectionCard>

            {/* Section 3: Channel Setup */}
            <SectionCard number="3" title="Channel Setup">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {"24+ platform adapters. Top 4 channels to set up first:"}
              </div>
              {[
                {
                  ch: "WhatsApp",
                  tag: "QR Pairing",
                  tagColor: "#5a8a3c",
                  detail:
                    "Baileys library, scan QR from terminal, one session per host",
                },
                {
                  ch: "Telegram",
                  tag: "Fastest",
                  tagColor: "#3a6ea5",
                  detail: "Create bot via @BotFather, paste token into config",
                },
                {
                  ch: "Discord",
                  tag: "Role Routing",
                  tagColor: "#7a5a8a",
                  detail:
                    "Bot token + role-based guild routing, thread support",
                },
                {
                  ch: "Slack",
                  tag: "Block Kit",
                  tagColor: "#8a6a3a",
                  detail: "Rich messages via Block Kit, team matching",
                },
              ].map(({ ch, tag, tagColor, detail }, i) => (
                <div
                  key={ch}
                  style={{
                    padding: "6px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                    marginBottom: 5,
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
                    <strong style={{ color: palette.dark, fontSize: 12 }}>
                      {ch}
                    </strong>
                    <Tag color={tagColor}>{tag}</Tag>
                  </div>
                  <div style={{ fontSize: 11, color: palette.mid }}>
                    {detail}
                  </div>
                </div>
              ))}
              <div
                style={{
                  marginTop: 6,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  <strong>Also built-in:</strong> Signal, iMessage, LINE,
                  WebChat
                </Bullet>
                <Bullet>
                  <strong>Extensions:</strong> MS Teams, Matrix, IRC, Google
                  Chat, Nostr, Twitch, and 10+ more
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 4: Daily CLI Workflow */}
            <SectionCard number="4" title="Daily CLI Workflow">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {"Commands you will use every day as an OpenClaw operator:"}
              </div>
              <RefRow
                cmd="openclaw tui"
                desc="Open terminal UI connected to gateway"
              />
              <RefRow
                cmd="openclaw agent"
                desc="Run a single agent turn (no gateway)"
              />
              <RefRow
                cmd="openclaw gateway start"
                desc="Start the gateway daemon"
              />
              <RefRow
                cmd="openclaw gateway stop"
                desc="Stop the gateway daemon"
              />
              <RefRow
                cmd="openclaw gateway restart"
                desc="Restart with new config"
              />
              <RefRow
                cmd="openclaw status"
                desc="Show gateway health and channels"
              />
              <RefRow
                cmd="openclaw config"
                desc="View/edit openclaw.json config"
              />
              <RefRow
                cmd="openclaw logs"
                desc="Stream gateway and agent logs"
              />
              <RefRow
                cmd="openclaw sessions"
                desc="List and manage active sessions"
              />
              <RefRow
                cmd="openclaw security audit"
                desc="Run security scan on gateway"
              />
              <div
                style={{
                  marginTop: 6,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  <strong>TUI session:</strong>{" "}
                  <code>{"openclaw tui --session bugfix"}</code> for named
                  sessions
                </Bullet>
                <Bullet>
                  Full CLI: <code>{"openclaw --help"}</code> lists 40+
                  subcommands
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 5: Skills System */}
            <SectionCard number="5" title="Skills System">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {
                  "Skills are SKILL.md folders with YAML frontmatter that shape agent behavior via prompt context. Not executable code."
                }
              </div>
              {[
                {
                  tier: "T1",
                  name: "Workspace",
                  path: "<workspace>/skills/",
                  note: "Highest priority",
                },
                {
                  tier: "T2",
                  name: "Managed",
                  path: "~/.openclaw/skills/",
                  note: "Shared across agents",
                },
                {
                  tier: "T3",
                  name: "Bundled",
                  path: "Shipped with OpenClaw",
                  note: "59 built-in skills",
                },
              ].map(({ tier, name, path, note }, i) => (
                <div
                  key={tier}
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
                    {tier}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 12,
                      width: 72,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 11, color: palette.mid, flex: 1 }}>
                    {path}
                  </span>
                  <Tag color="#2a7a7a">{note}</Tag>
                </div>
              ))}
              <Code>{"npx clawhub@latest install <skill-name>"}</Code>
              <div style={{ marginTop: 8 }}>
                <KV k="Token budget" v="30K char limit, binary search fit" />
                <KV k="Max per file" v="256KB per SKILL.md" />
                <KV
                  k="Frontmatter"
                  v="name, description, requires, user-invocable"
                />
              </div>
              <div
                style={{
                  marginTop: 6,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <div
                  style={{ fontSize: 11, color: palette.mid, marginBottom: 4 }}
                >
                  <strong style={{ color: palette.dark }}>
                    Bundled categories:
                  </strong>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 3,
                  }}
                >
                  {[
                    "Productivity (Notion, Obsidian, Trello)",
                    "Communication (Discord, Slack)",
                    "Media (Whisper, image-gen)",
                    "Development (GitHub, coding-agent)",
                    "Home/IoT (Hue, Sonos, weather)",
                    "Browser (canvas, xurl)",
                    "Voice (TTS, voice-call)",
                    "Meta (skill-creator, ClawHub)",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{ fontSize: 10.5, color: palette.mid }}
                    >
                      {"○ "}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>

            {/* Section 6: Security Essentials */}
            <SectionCard number="6" title="Security Essentials">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {"Single-user trust model. One operator per gateway instance."}
              </div>
              <div style={{ marginBottom: 8 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                  }}
                >
                  DM Policies
                </div>
                {[
                  {
                    mode: "Pairing",
                    desc: "Time-limited code for unknowns (default, 1hr, 3 max)",
                  },
                  { mode: "Allowlist", desc: "Pre-approved identities only" },
                  { mode: "Open", desc: 'Requires explicit "*" opt-in' },
                  { mode: "Disabled", desc: "All inbound DMs blocked" },
                ].map(({ mode, desc }, i) => (
                  <div
                    key={mode}
                    style={{
                      display: "flex",
                      gap: 6,
                      padding: "3px 8px",
                      background:
                        i % 2 === 0 ? palette.accentPale : palette.highlight,
                      borderRadius: 4,
                      marginBottom: 3,
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10.5,
                        color: palette.accent,
                        fontWeight: 700,
                        width: 68,
                        flexShrink: 0,
                      }}
                    >
                      {mode}
                    </code>
                    <span style={{ fontSize: 11, color: palette.mid }}>
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                  }}
                >
                  Tool Authorization
                </div>
                <KV k="Exec security" v="deny (default) / ask / allow" />
                <KV k="Workspace" v="fs.workspaceOnly: true (default)" />
                <KV k="Sandbox" v="Docker containers for tool isolation" />
              </div>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                  }}
                >
                  Skill Scanner (Static Analysis)
                </div>
                <Bullet>
                  <strong>Critical:</strong> child_process exec, eval(), crypto
                  mining, env harvesting
                </Bullet>
                <Bullet>
                  <strong>Warning:</strong> suspicious network, potential
                  exfiltration, obfuscated code
                </Bullet>
              </div>
              <Code>
                {
                  "openclaw security audit --deep\nopenclaw security audit --fix\nopenclaw security audit --json"
                }
              </Code>
            </SectionCard>
          </div>
        )}

        {/* Page 2: Architecture & Advanced */}
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
            {/* Section 7: Multi-Agent Routing */}
            <SectionCard number="7" title="Multi-Agent Routing">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {
                  "Each agent is fully isolated: own workspace, own SOUL.md, own session store, own state directory."
                }
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: palette.dark,
                  marginBottom: 4,
                }}
              >
                Routing Priority (most-specific wins)
              </div>
              {[
                {
                  n: "1",
                  rule: "Exact peer match",
                  desc: "Specific DM/group/channel",
                },
                {
                  n: "2",
                  rule: "Parent peer match",
                  desc: "Thread inherits from parent",
                },
                {
                  n: "3",
                  rule: "Role + guild",
                  desc: "Discord role-based routing",
                },
                {
                  n: "4",
                  rule: "Guild / team level",
                  desc: "Server-wide fallback",
                },
                {
                  n: "5",
                  rule: "Channel account",
                  desc: "Bot token / phone number",
                },
                {
                  n: "6",
                  rule: "Channel-wide",
                  desc: "All messages on a channel",
                },
                { n: "7", rule: "Default agent", desc: "Catch-all fallback" },
              ].map(({ n, rule, desc }, i) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                    padding: "3px 8px",
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
                      width: 16,
                    }}
                  >
                    {n}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 11.5,
                      width: 110,
                      flexShrink: 0,
                    }}
                  >
                    {rule}
                  </span>
                  <span style={{ fontSize: 11, color: palette.mid }}>
                    {desc}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: 6 }}>
                <KV k="Session isolation" v={'dmScope: "per-channel-peer"'} />
                <Bullet>
                  Each channel account (phone, bot token) maps to one agent
                </Bullet>
                <Bullet>
                  Multiple accounts per channel supported for multi-persona
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 8: Memory & Sessions */}
            <SectionCard number="8" title="Memory & Sessions">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {
                  "JSONL tree storage at ~/.openclaw/state/sessions/ with auto-compaction on context overflow."
                }
              </div>
              <div style={{ marginBottom: 8 }}>
                <KV k="Format" v="JSONL tree files, file-based persistence" />
                <KV
                  k="Compaction"
                  v="Auto-triggers when context window overflows"
                />
                <KV
                  k="Session key"
                  v="agent ID + channel + user/group + thread"
                />
                <KV k="DM default" v="All DMs route into single main session" />
                <KV
                  k="Groups"
                  v="History limited by channel type (DM vs group)"
                />
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: palette.dark,
                  marginBottom: 4,
                }}
              >
                Memory Tools
              </div>
              <Bullet>
                <code>{"memory_search"}</code> — semantic search via sqlite-vec
              </Bullet>
              <Bullet>
                <code>{"memory_get"}</code> — retrieve specific memory entries
              </Bullet>
              <Bullet>
                Session caching avoids repeated disk reads per turn
              </Bullet>
              <Bullet>
                Custom context pruning for token-efficient conversations
              </Bullet>
              <div
                style={{
                  marginTop: 6,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  <strong>BOOT.md:</strong> if present, gateway runs agent once
                  on startup with boot file as prompt
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 9: MCP & Extensibility */}
            <SectionCard number="9" title="MCP & Extensibility">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#3a6ea5">MCP SDK v1.27</Tag>
                <Tag color="#5a8a3c">mcporter</Tag>
                <Tag color="#7a5a8a">100+ exports</Tag>
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: palette.dark,
                  marginBottom: 4,
                }}
              >
                Two MCP Approaches
              </div>
              <div style={{ marginBottom: 8 }}>
                <KV
                  k="mcporter (bridge)"
                  v="Hot-swap MCP servers without gateway restart"
                />
                <KV
                  k="Native SDK"
                  v="@modelcontextprotocol/sdk for direct stdio transport"
                />
              </div>
              <Code>
                {
                  "# mcporter commands\nmcporter list          # list servers\nmcporter call srv.tool # call a tool\nmcporter auth          # OAuth flows\nmcporter config        # manage configs"
                }
              </Code>
              <div style={{ marginTop: 8 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                  }}
                >
                  Plugin SDK Architecture
                </div>
                <Bullet>
                  Extensions use <code>{"openclaw/plugin-sdk/*"}</code> subpaths
                  only
                </Bullet>
                <Bullet>
                  No direct <code>{"src/"}</code> imports allowed
                  (lint-enforced)
                </Bullet>
                <Bullet>
                  Plugins provide: tools, CLI commands, HTTP routes, channels,
                  hooks, providers
                </Bullet>
                <Bullet>
                  75 extensions in the repo covering channels, providers,
                  features
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 10: Cron & Automation */}
            <SectionCard number="10" title="Cron & Automation">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {
                  "Proactive agent behavior via scheduled tasks, webhooks, and event-driven triggers."
                }
              </div>
              <div style={{ marginBottom: 8 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                  }}
                >
                  Scheduling Methods
                </div>
                <KV
                  k="HEARTBEAT.md"
                  v="Periodic prompts sent to agent on schedule"
                />
                <KV k="Cron service" v="Built-in cron engine in gateway" />
                <KV k="Webhooks" v="HTTP endpoints trigger agent runs" />
                <KV k="Gmail Pub/Sub" v="Email-driven agent activation" />
              </div>
              <RefRow cmd="openclaw cron" desc="Manage scheduled tasks" />
              <RefRow cmd="openclaw webhooks" desc="Manage webhook endpoints" />
              <RefRow
                cmd="openclaw heartbeat"
                desc="Configure heartbeat schedule"
              />
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 8px",
                  background: palette.highlight,
                  borderRadius: 6,
                }}
              >
                <Bullet>
                  Heartbeat runs use only AGENTS, TOOLS, SOUL, IDENTITY, USER
                  (no BOOTSTRAP/MEMORY)
                </Bullet>
                <Bullet>
                  <strong>BOOT.md:</strong> one-time agent run on gateway start
                  (then file is consumed)
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 11: Architecture Mental Model */}
            <SectionCard number="11" title="Architecture Mental Model" span={2}>
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <Tag>Gateway</Tag>
                <Tag color="#3a6ea5">Pi Agent SDK</Tag>
                <Tag color="#5a8a3c">Channels</Tag>
                <Tag color="#7a5a8a">Extensions</Tag>
                <Tag color="#8a6a3a">ACP</Tag>
              </div>
              <Code>{`User Message (Telegram/Discord/Slack/WhatsApp/...)
    |
    v
[Gateway Server]  --- WebSocket ws://127.0.0.1:18789
    |                  (Hono + Express, typed JSON frames)
    v
[Channel Plugin]  --- Composable adapter per platform
    |                  (ChannelPlugin interface, 20+ adapter slots)
    v
[Agent Command]   --- src/agents/agent-command.ts
    |                  (resolves agent config, skills, model)
    v
[Pi Agent SDK]    --- @mariozechner/pi-coding-agent (embedded)
    |                  (SessionManager, NOT subprocess)
    v
[LLM Provider]   --- Anthropic, OpenAI, Google, Ollama, etc.
    |                  (160 retry iterations, auth rotation)
    v
[Reply Pipeline]  --- Auto-reply, platform formatting, outbound`}</Code>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: palette.dark,
                      marginBottom: 4,
                    }}
                  >
                    Key Architecture Facts
                  </div>
                  <KV k="Entry" v="src/entry.ts (CLI bootstrap)" />
                  <KV
                    k="Config"
                    v="~/.openclaw/openclaw.json (JSON5, Zod-validated)"
                  />
                  <KV k="Sessions" v="~/.openclaw/state/sessions/ (JSONL)" />
                  <KV
                    k="Workspace"
                    v="~/.openclaw/workspace/ (markdown files)"
                  />
                  <KV k="Port" v="18789 (WS control plane, default)" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: palette.dark,
                      marginBottom: 4,
                    }}
                  >
                    Protocol Details
                  </div>
                  <KV k="Handshake" v="connect frame -> hello-ok snapshot" />
                  <KV k="RPC" v="req(method, params) -> res(ok|error)" />
                  <KV k="Events" v="Server-push, not replayed on gaps" />
                  <KV k="ACP" v="Agent Client Protocol via ndJSON/stdio" />
                  <KV
                    k="Auth"
                    v="Token (recommended), password, or trusted proxy"
                  />
                </div>
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
                  <strong>Native apps:</strong> macOS (SwiftUI), iOS (SwiftUI),
                  Android (Kotlin) — all use WS protocol
                </Bullet>
                <Bullet>
                  <strong>Web UI:</strong> Lit + Vite, WebSocket-based chat
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 12: Troubleshooting */}
            <SectionCard number="12" title="Troubleshooting">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                {"Common issues and fixes for OpenClaw operators:"}
              </div>
              {[
                {
                  issue: "WhatsApp disconnects",
                  fix: "One Baileys session per host. Restart gateway, re-scan QR. Check for competing sessions.",
                },
                {
                  issue: "Channel not responding",
                  fix: "openclaw status to check health. Verify tokens in config. Check openclaw logs for errors.",
                },
                {
                  issue: "Gateway won't start",
                  fix: "Check port 18789 availability. Use --force to kill existing listener. Verify Node 22+.",
                },
                {
                  issue: "Session corruption",
                  fix: "Sessions are JSONL files. Delete the corrupt session file and restart. Auto-compaction may help.",
                },
                {
                  issue: "Skill not loading",
                  fix: "Check SKILL.md frontmatter. Verify requires.bins are on PATH. Check 30K char budget.",
                },
                {
                  issue: "Config not applying",
                  fix: "openclaw gateway restart to reload. SHA-based change detection may need a restart.",
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
                      fontSize: 11.5,
                      fontWeight: 800,
                      color: palette.dark,
                    }}
                  >
                    {issue}
                  </div>
                  <div
                    style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}
                  >
                    {fix}
                  </div>
                </div>
              ))}
              <Code>
                {
                  "# Emergency diagnostics\nopenclaw security audit --deep\nopenclaw doctor\nopenclaw logs --follow"
                }
              </Code>
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
          {"OpenClaw Cheatsheet \u2014 Created "}
          {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 10.5, color: palette.mid }}>
            {
              "Source: github.com/openclaw/openclaw \u00B7 docs.openclaw.ai \u00B7 MIT License \u00B7 v2026.3.x"
            }
          </span>
        </div>
      </div>
    </>
  );
}
