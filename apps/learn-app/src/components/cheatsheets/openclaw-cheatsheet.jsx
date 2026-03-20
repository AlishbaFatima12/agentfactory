import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#d8c0ab", // Darkened for better contrast
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#140a06", // Darkened for bolder headings
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
        width: 100,
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

export default function OpenClawCheatsheet() {
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
            OpenClaw{" "}
            <span style={{ color: palette.accentLight }}>
              Workflow Cheatsheet
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
            Setup · Skills · Channels · ACP Agents · Providers · Memory ·
            Routing · ClawHub — {new Date().getFullYear()} Edition
          </div>
        </div>

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
          {/* 1. What OpenClaw Is */}
          <SectionCard number="1" title="What OpenClaw Is">
            <div
              style={{
                fontSize: 10.5,
                color: palette.mid,
                marginBottom: 5,
                lineHeight: 1.4,
                fontStyle: "italic",
              }}
            >
              A personal AI employee that controls your full machine. Give it
              skills and it can do anything — answer on WhatsApp, write code via
              Codex, manage your calendar, run cron jobs.
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 4,
                padding: "5px 7px",
                marginBottom: 5,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: palette.dark,
                  marginBottom: 3,
                  fontFamily: "'Georgia', serif",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                4-Layer Architecture
              </div>
              {[
                {
                  l: "L1",
                  name: "Gateway",
                  desc: "WebSocket control plane (ws://127.0.0.1:18789)",
                },
                {
                  l: "L2",
                  name: "Pi Agent SDK",
                  desc: "Embedded agent loop (model + tools + streaming)",
                },
                {
                  l: "L3",
                  name: "Channels",
                  desc: "24+ platform adapters run simultaneously",
                },
                {
                  l: "L4",
                  name: "Extensions",
                  desc: "Plugin SDK boundary for custom capabilities",
                },
              ].map(({ l, name, desc }, i) => (
                <div
                  key={l}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginBottom: 2,
                    padding: "2px 4px",
                    background:
                      i % 2 === 0 ? palette.accentPale : "transparent",
                    borderRadius: 3,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      color: palette.accent,
                      fontSize: 9,
                      width: 17,
                    }}
                  >
                    {l}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 9.5,
                      width: 68,
                      flexShrink: 0,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 9, color: palette.mid }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                background: palette.codeBg,
                color: "#ff9966",
                borderRadius: 4,
                padding: "4px 7px",
                fontSize: 9.5,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Single-user personal assistant, NOT multi-tenant SaaS
            </div>
            <div style={{ marginTop: 4 }}>
              <Bullet>MIT License — fully self-hosted, you own the data</Bullet>
              <Bullet>Node.js 24 recommended (22 LTS still supported)</Bullet>
              <Bullet>
                Native apps: macOS, iOS, Android + WebChat + TUI
              </Bullet>
            </div>
          </SectionCard>

          {/* 2. First 5 Minutes */}
          <SectionCard number="2" title="First 5 Minutes">
            <Code>{`# 1. Install
curl -fsSL https://openclaw.ai/install.sh | bash

# 2. Onboard (wizard creates workspace files)
openclaw onboard
openclaw onboard --flow quickstart  # minimal
openclaw onboard --flow manual      # full control`}</Code>
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginTop: 4,
                marginBottom: 3,
              }}
            >
              The wizard walks you through:
            </div>
            {[
              "Pick your LLM provider + paste API key",
              "Create SOUL.md, IDENTITY.md, USER.md",
              "Install the gateway daemon (launchd/systemd)",
              "Optionally connect your first channel",
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
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
            <Code>{`# 3. Chat via TUI or one-shot
openclaw tui
openclaw agent --message "Hello" --agent main

# Remote onboarding
openclaw onboard --mode remote \\
  --remote-url wss://host:18789

# Non-interactive (CI/automation)
openclaw onboard --non-interactive \\
  --auth-choice openai-api-key`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="Config" v="~/.openclaw/openclaw.json (JSON5)" />
              <KV k="Workspace" v="~/.openclaw/workspace/" />
            </div>
          </SectionCard>

          {/* 3. Connect Your Channels */}
          <SectionCard number="3" title="Connect Your Channels">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#3a6ea5">Built-in</Tag>
              <Tag color="#5a8a3c">Extension</Tag>
            </div>
            {[
              {
                ch: "WhatsApp",
                method: "QR login",
                steps: "Baileys (WhatsApp Web), one session per host",
                cmd: "openclaw channels login --channel whatsapp",
              },
              {
                ch: "Telegram",
                method: "Token config",
                steps: "Create bot via @BotFather, paste token",
                cmd: "openclaw channels add --channel telegram --token TOKEN",
              },
              {
                ch: "Discord",
                method: "Portal + config",
                steps: "Developer Portal app + Message Content Intent",
                cmd: "Set DISCORD_BOT_TOKEN in env, invite bot to guild",
              },
              {
                ch: "Slack",
                method: "Token config",
                steps: "Bolt SDK — Socket Mode or HTTP events",
                cmd: "Set SLACK_APP_TOKEN + SLACK_BOT_TOKEN in env/config",
              },
            ].map(({ ch, method, steps, cmd }, i) => (
              <div
                key={ch}
                style={{
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                }}
              >
                <div style={{ fontSize: 10, color: palette.mid }}>
                  <strong style={{ color: palette.dark }}>{ch}</strong>{" "}
                  <Tag color="#7a5a8a">{method}</Tag> {steps}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: palette.accent,
                    fontFamily: "'JetBrains Mono', monospace",
                    marginTop: 1,
                  }}
                >
                  {cmd}
                </div>
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
                <strong>Also built-in</strong>: Signal, iMessage/BlueBubbles,
                IRC, WebChat
              </Bullet>
              <Bullet>
                <strong>Extensions</strong>: MS Teams, Matrix, Google Chat,
                Feishu/Lark, Nostr, Mattermost, LINE, Twitch, Zalo, and more
              </Bullet>
              <Bullet>
                Channels run simultaneously; gateway routes per chat
              </Bullet>
            </div>
          </SectionCard>

          {/* 4. How Skills Work */}
          <SectionCard number="4" title="How Skills Work">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              Skills are markdown files with YAML frontmatter injected into the
              system prompt. The 30K token budget means you are doing{" "}
              <strong>prompt engineering through file management</strong>.
            </div>
            <Code>{`---
name: my-research-tool
description: What triggers auto-activation
user-invocable: true
---

# Skill Instructions
Natural language guidance the
model follows when this skill
activates...`}</Code>
            <div style={{ marginTop: 4 }}>
              {[
                {
                  tier: "1",
                  name: "Workspace",
                  path: "<workspace>/skills/",
                  why: "Project-specific, highest priority",
                },
                {
                  tier: "2",
                  name: "Managed",
                  path: "~/.openclaw/skills/",
                  why: "User-wide, shared across projects",
                },
                {
                  tier: "3",
                  name: "Bundled",
                  path: "52+ shipped",
                  why: "GitHub, Slack, coding-agent, etc.",
                },
              ].map(({ tier, name, path, why }, i) => (
                <div
                  key={tier}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginBottom: 2,
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
                      width: 12,
                    }}
                  >
                    {tier}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.dark,
                      fontSize: 10,
                      width: 60,
                      flexShrink: 0,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: 9.5, color: palette.mid, flex: 1 }}>
                    {why}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                256KB max per SKILL.md, up to 150 skills loaded
              </Bullet>
              <Bullet>
                Static scanner blocks eval(), crypto-mining, env harvesting
              </Bullet>
              <Bullet>
                <code>skill-creator</code> meta-skill helps you build new skills
              </Bullet>
            </div>
          </SectionCard>

          {/* 5. ClawHub Registry */}
          <SectionCard number="5" title="ClawHub — Skill Registry">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              <strong>clawhub.ai</strong> — the public skill registry for
              OpenClaw. Search, install, publish, and share versioned skill
              bundles.
            </div>
            <Code>{`# Install the CLI
npm i -g clawhub

# Search for skills
clawhub search "calendar"

# Install a skill
clawhub install my-skill-pack

# Update all installed skills
clawhub update --all

# Publish your own
clawhub publish ./my-skill \\
  --slug my-skill --version 1.0.0

# Bulk sync (scan + publish)
clawhub sync --all`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Vector-powered search (embeddings, not just keywords)
              </Bullet>
              <Bullet>
                Semver versioning with changelogs and tags (including{" "}
                <code>latest</code>)
              </Bullet>
              <Bullet>
                Stars, comments, and community moderation
              </Bullet>
              <Bullet>
                Lockfile at <code>.clawhub/lock.json</code> tracks installed
                skills
              </Bullet>
              <Bullet>
                GitHub account {">"}= 1 week old required to publish
              </Bullet>
            </div>
          </SectionCard>

          {/* 6. Three Memory Systems */}
          <SectionCard number="6" title="Three Memory Systems">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              Memory is three separate systems that kick in at different times:
            </div>
            {[
              {
                name: "Session State",
                storage: "JSONL tree files",
                when: "Every turn",
                detail:
                  "Per-agent sessions/*.jsonl. Auto-compacts on context overflow. Pre-compaction flush saves notes before context is lost.",
              },
              {
                name: "Persistent Notes",
                storage: "MEMORY.md + memory/*.md",
                when: "Cross-session",
                detail:
                  "Curated long-term memory. Daily logs (memory/YYYY-MM-DD.md) auto-loaded. Decisions and preferences go here.",
              },
              {
                name: "Semantic Search",
                storage: "sqlite-vec + embeddings",
                when: "On demand",
                detail:
                  "Vector index over notes. Hybrid BM25 + vector. Supports OpenAI, Gemini, Ollama, or local GGUF embeddings.",
              },
            ].map(({ name, storage, when, detail }, i) => (
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
                <div style={{ display: "flex", gap: 5, marginBottom: 1 }}>
                  <span
                    style={{
                      fontWeight: 800,
                      color: palette.dark,
                      fontSize: 10,
                    }}
                  >
                    {name}
                  </span>
                  <Tag color="#3a6ea5">{when}</Tag>
                </div>
                <div
                  style={{ fontSize: 9.5, color: palette.mid, lineHeight: 1.3 }}
                >
                  <strong>{storage}</strong> — {detail}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 3 }}>
              <Bullet>
                <code>memory_search</code> + <code>memory_get</code> are the
                agent-facing tools
              </Bullet>
              <Bullet>
                MMR re-ranking for diversity, temporal decay for recency
              </Bullet>
            </div>
          </SectionCard>

          {/* 7. Workspace Files */}
          <SectionCard number="7" title="Workspace Files">
            {[
              {
                file: "SOUL.md",
                desc: "Core personality and behavioral identity",
              },
              {
                file: "AGENTS.md",
                desc: "Agent instructions (symlinked from CLAUDE.md)",
              },
              {
                file: "TOOLS.md",
                desc: "Tool usage guidelines and preferences",
              },
              {
                file: "IDENTITY.md",
                desc: "Name, personality traits, voice",
              },
              {
                file: "USER.md",
                desc: "Info about the operator (you)",
              },
              {
                file: "HEARTBEAT.md",
                desc: "Periodic proactive behavior (cron syntax)",
              },
              {
                file: "BOOT.md",
                desc: "Runs agent once on gateway start",
              },
              {
                file: "MEMORY.md",
                desc: "Persistent cross-session memory store",
              },
            ].map(({ file, desc }, i) => (
              <div
                key={file}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                }}
              >
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8.5,
                    color: palette.accent,
                    fontWeight: 700,
                    width: 95,
                    flexShrink: 0,
                  }}
                >
                  {file}
                </code>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {desc}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 3 }}>
              <Bullet>
                Default path: <code>~/.openclaw/workspace/</code>
              </Bullet>
              <Bullet>
                Max 2MB per file, YAML frontmatter stripped before injection
              </Bullet>
              <Bullet>
                Workspace is the agent{"'"}s default cwd — not a hard sandbox
              </Bullet>
            </div>
          </SectionCard>

          {/* 8. Automation & Scheduling */}
          <SectionCard number="8" title="Automation & Scheduling" span={2}>
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Make your agent proactive — not just reactive to messages.
            </div>
            {[
              {
                file: "HEARTBEAT.md",
                desc: "Periodic agent prompts on a schedule (cron syntax)",
              },
              {
                file: "BOOT.md",
                desc: "\"Wake and act\" — runs agent once on gateway start",
              },
              {
                file: "BOOTSTRAP.md",
                desc: "First-run setup (self-deleting after execution)",
              },
            ].map(({ file, desc }, i) => (
              <div
                key={file}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                }}
              >
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8.5,
                    color: palette.accent,
                    fontWeight: 700,
                    width: 90,
                    flexShrink: 0,
                  }}
                >
                  {file}
                </code>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {desc}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 4 }}>
              <KV k="Cron engine" v="Built-in scheduled tasks with cron syntax" />
              <KV k="Webhooks" v="Inbound webhook triggers for external events" />
              <Bullet>
                Cron sessions isolated by default (fresh sessionId per run)
              </Bullet>
              <Bullet>
                MCP via mcporter bridge or native{" "}
                <code>@modelcontextprotocol/sdk</code>
              </Bullet>
            </div>
          </SectionCard>
        </div>

        {/* ===== PAGE 2: Advanced Configuration ===== */}
        <div
          style={{
            borderTop: `2px solid ${palette.cardBorder}`,
            margin: "4px 12px 0",
          }}
        />
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
          {/* 9. Provider & Model Config */}
          <SectionCard number="9" title="Provider & Model Config" span={2}>
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              30+ providers. Use your existing subscriptions (ChatGPT, Copilot)
              or API keys. Format: <code>provider/model</code>.
            </div>
            {[
              {
                p: "Anthropic",
                auth: "API key",
                ex: "anthropic/claude-opus-4-6",
              },
              {
                p: "OpenAI",
                auth: "API key",
                ex: "openai/gpt-5.4",
              },
              {
                p: "OpenAI Codex",
                auth: "ChatGPT OAuth (use your sub!)",
                ex: "openai-codex/gpt-5.4",
              },
              {
                p: "Google",
                auth: "GEMINI_API_KEY or CLI OAuth",
                ex: "google/gemini-3.1-pro-preview",
              },
              {
                p: "GitHub Copilot",
                auth: "Device login OAuth",
                ex: "github-copilot/*",
              },
              {
                p: "OpenRouter",
                auth: "API key (free models available)",
                ex: "openrouter/anthropic/*",
              },
              {
                p: "Ollama",
                auth: "None (local)",
                ex: "ollama/llama3.3",
              },
            ].map(({ p, auth, ex }, i) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "3px 6px",
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
                    width: 72,
                    flexShrink: 0,
                  }}
                >
                  {p}
                </span>
                <span style={{ fontSize: 9, color: palette.mid, flex: 1 }}>
                  {auth}
                </span>
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8,
                    color: palette.accent,
                    fontWeight: 600,
                  }}
                >
                  {ex}
                </code>
              </div>
            ))}
            <Code>{`# Use existing ChatGPT subscription:
openclaw onboard --auth-choice openai-codex
# Use GitHub Copilot:
openclaw models auth login \\
  --provider github-copilot
# CLI helpers:
openclaw models list
openclaw models set openai/gpt-5.4`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>Key rotation</strong>: PROVIDER_API_KEYS (comma list),
                PROVIDER_API_KEY_1/2, or OPENCLAW_LIVE_PROVIDER_KEY
              </Bullet>
              <Bullet>
                <strong>Failover</strong>: retries on 429 rate-limit with next
                key; non-rate-limit errors fail immediately
              </Bullet>
              <Bullet>
                <strong>Also</strong>: Mistral, xAI, Groq, Cerebras, DeepSeek,
                vLLM, SGLang, LM Studio, Kimi, and more
              </Bullet>
            </div>
          </SectionCard>

          {/* 10. Security Architecture */}
          <SectionCard number="10" title="Security Architecture">
            <div
              style={{
                background: palette.codeBg,
                color: "#ff9966",
                borderRadius: 4,
                padding: "4px 7px",
                fontSize: 9.5,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 5,
              }}
            >
              Single-user trust model — one operator per gateway
            </div>
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#3a6ea5">DM Policy</Tag>
              <Tag color="#5a8a3c">Tool Auth</Tag>
              <Tag color="#7a5a8a">Sandbox</Tag>
            </div>
            {[
              {
                k: "Pairing",
                v: "Default — time-limited code (8 chars, 1hr expiry, 3 pending max)",
              },
              {
                k: "Allowlist",
                v: "Pre-approved identities only (E.164 numbers)",
              },
              {
                k: "Open",
                v: "Requires explicit allowFrom: [\"*\"] opt-in",
              },
              { k: "Disabled", v: "All inbound DMs blocked" },
            ].map(({ k, v }) => (
              <KV key={k} k={k} v={v} />
            ))}
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Tool exec: <strong>deny</strong> (default) / ask / allow
                per-agent
              </Bullet>
              <Bullet>
                Docker sandbox: off | all | per-tool (scope: agent / session)
              </Bullet>
              <Bullet>
                Skill scanner: detects eval(), crypto-mining, env harvesting
              </Bullet>
              <Bullet>
                <code>openclaw security audit --deep</code> for live probe
              </Bullet>
            </div>
          </SectionCard>

          {/* 11. ACP Agent Control */}
          <SectionCard number="11" title="ACP Agent Control (The Superpower)">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              <strong>OpenClaw orchestrates external coding agents</strong> via
              ACP (Agent Client Protocol). It spawns and controls Claude Code,
              Codex, OpenCode, Gemini CLI, and Pi as managed sessions.
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 4,
                padding: "4px 6px",
                marginBottom: 4,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: palette.dark,
                  marginBottom: 3,
                  fontFamily: "'Georgia', serif",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                Supported Harnesses (acpx backend)
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 3,
                  flexWrap: "wrap",
                  marginBottom: 3,
                }}
              >
                {["Pi", "Claude Code", "Codex", "OpenCode", "Gemini CLI", "Kimi"].map(
                  (h) => (
                    <Tag key={h} color="#3a6ea5">
                      {h}
                    </Tag>
                  )
                )}
              </div>
            </div>
            <Code>{`# Spawn a persistent Codex session
/acp spawn codex --mode persistent \\
  --thread auto

# Check status, steer, close
/acp status
/acp steer "focus on tests"
/acp model anthropic/claude-opus-4-6
/acp cancel    # stop current turn
/acp close     # end session`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Thread-bound sessions on Discord + Telegram (follow-ups route
                automatically)
              </Bullet>
              <Bullet>
                Resume sessions: <code>resumeSessionId</code> picks up where you
                left off
              </Bullet>
              <Bullet>
                Permission modes: approve-all, approve-reads, deny-all
              </Bullet>
              <Bullet>
                Setup: <code>openclaw plugins install acpx</code> then{" "}
                <code>/acp doctor</code>
              </Bullet>
            </div>
          </SectionCard>

          {/* 12. Multi-Agent Routing */}
          <SectionCard number="12" title="Multi-Agent Routing" span={2}>
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
                lineHeight: 1.4,
              }}
            >
              Each agent gets isolated workspace, sessions, and auth. The
              gateway routes inbound messages via deterministic binding priority.
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 4,
                padding: "4px 6px",
                marginBottom: 4,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: palette.dark,
                  marginBottom: 2,
                  fontFamily: "'Georgia', serif",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                8-Level Deterministic Priority
              </div>
              {[
                "Exact peer match (specific DM/group ID)",
                "Parent peer match (thread inheritance)",
                "Discord: guildId + roles",
                "Discord: guildId only / Slack: teamId",
                "Channel accountId match",
                'Channel-wide fallback (accountId: "*")',
                "Default agent (agents.list[].default)",
                "First agent in list (last resort)",
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 5,
                    padding: "1px 4px",
                    marginBottom: 1,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      color: palette.accent,
                      fontSize: 8.5,
                      width: 12,
                      textAlign: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: 9.5, color: palette.mid }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <Code>{`openclaw agents add work
openclaw agents list --bindings`}</Code>
            <div style={{ marginTop: 3 }}>
              <Bullet>
                <code>dmScope: per-channel-peer</code> for multi-user session
                isolation
              </Bullet>
              <Bullet>
                Agent-to-agent messaging off by default; opt-in via config
              </Bullet>
            </div>
          </SectionCard>

          {/* 13. Quick Reference (span 3) */}
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
                  CLI Commands
                </div>
                <RefRow cmd="onboard" desc="First-run setup wizard" />
                <RefRow cmd="tui" desc="Open terminal interface" />
                <RefRow cmd="gateway start" desc="Start gateway daemon" />
                <RefRow cmd="gateway stop" desc="Stop gateway" />
                <RefRow cmd="status" desc="Show gateway health" />
                <RefRow cmd="doctor" desc="Diagnose config issues" />
                <RefRow cmd="agents add" desc="Create new isolated agent" />
                <RefRow cmd="agents list" desc="List agents + bindings" />
                <RefRow cmd="channels login" desc="Connect a channel" />
                <RefRow cmd="channels status" desc="Channel health check" />
                <RefRow cmd="security audit" desc="Run security scan" />
                <RefRow cmd="models list" desc="Show available models" />
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
                  ACP Commands
                </div>
                <RefRow cmd="/acp spawn" desc="Start ACP session" />
                <RefRow cmd="/acp status" desc="Session state + options" />
                <RefRow cmd="/acp steer" desc="Nudge active session" />
                <RefRow cmd="/acp model" desc="Change runtime model" />
                <RefRow cmd="/acp cancel" desc="Stop current turn" />
                <RefRow cmd="/acp close" desc="End session + unbind" />
                <RefRow cmd="/acp sessions" desc="List recent sessions" />
                <RefRow cmd="/acp doctor" desc="Backend health check" />
                <RefRow cmd="/acp install" desc="Install steps" />
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginTop: 8,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Chat Commands
                </div>
                <RefRow cmd="/new" desc="Reset session (fresh start)" />
                <RefRow cmd="/stop" desc="Abort current agent run" />
                <RefRow cmd="/compact" desc="Summarize + compress" />
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
                  Key Paths
                </div>
                <RefRow cmd="~/.openclaw/" desc="Root config + state" />
                <RefRow cmd="openclaw.json" desc="Main config (JSON5)" />
                <RefRow cmd="workspace/" desc="Workspace template files" />
                <RefRow cmd="skills/" desc="Managed skill directory" />
                <RefRow cmd="agents/<id>/" desc="Per-agent state + sessions" />
                <RefRow cmd="credentials/" desc="Pairing + auth files" />
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginTop: 8,
                    marginBottom: 4,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Decision Guide
                </div>
                <KV k="Personal use" v="Single agent, one WhatsApp" />
                <KV k="Work + personal" v="Two agents, split by binding" />
                <KV k="IDE coding" v="/acp spawn codex or claude" />
                <KV k="Proactive agent" v="HEARTBEAT.md + BOOT.md" />
                <KV k="Skill discovery" v="clawhub search + install" />
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
          OpenClaw Workflow Cheatsheet — Created {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 9, color: palette.mid }}>
            {
              "Self-hosted multi-channel AI gateway — MIT License — openclaw.ai"
            }
          </span>
        </div>
      </div>
    </>
  );
}
