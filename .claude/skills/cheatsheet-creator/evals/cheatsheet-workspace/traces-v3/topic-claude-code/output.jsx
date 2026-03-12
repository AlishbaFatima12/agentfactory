import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
  mid: "#5a3e2b",
  codeBg: "#2c1810",
  codeText: "#f0dcc8",
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
      ○
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
        width: 140,
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

export default function ClaudeCodeCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Workflows", "Page 2: Power Patterns"];

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
            Claude Code{" "}
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
            Agentic CLI · Workflows · Configuration · Automation — 2026 Edition
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

        {/* Page 1: Core Workflows */}
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
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Install and run your first session in under 2 minutes.
              </div>
              <Code>{`# Install (native binary — no Node required)
curl -fsSL https://claude.ai/install.sh | bash

# Authenticate
claude login

# Start interactive session
claude

# Initialize project context
/init`}</Code>
              <div style={{ marginTop: 8 }}>
                <KV k="Requires" v="macOS, Linux, or Windows (WSL)" />
                <KV k="Auth" v="claude.ai OAuth or Anthropic API key" />
                <KV
                  k="/init"
                  v="Scans your project and generates a CLAUDE.md file"
                />
                <KV k="Update" v="claude update (auto-updates in background)" />
              </div>
            </SectionCard>

            {/* Section 2: Daily Workflow Shortcuts */}
            <SectionCard number="2" title="Daily Workflow Shortcuts">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Keyboard shortcuts you will use every session.
              </div>
              <RefRow cmd="Esc" desc="Cancel current input / stop generation" />
              <RefRow
                cmd="Esc Esc"
                desc="Rewind to a previous checkpoint in conversation"
              />
              <RefRow
                cmd="Shift+Tab"
                desc="Cycle: Normal → Auto-Accept → Plan mode"
              />
              <RefRow
                cmd="Alt+P"
                desc="Switch model without clearing your prompt"
              />
              <RefRow
                cmd="Alt+T"
                desc="Toggle extended thinking (run /terminal-setup first)"
              />
              <RefRow
                cmd="Ctrl+G"
                desc="Open system text editor for long prompts"
              />
              <RefRow cmd="Shift+Enter" desc="Multi-line input" />
              <RefRow cmd="Ctrl+C" desc="Cancel current operation" />
              <RefRow
                cmd="Ctrl+F Ctrl+F"
                desc="Kill all background agents (press twice)"
              />
            </SectionCard>

            {/* Section 3: Essential Slash Commands */}
            <SectionCard number="3" title="Essential Slash Commands">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 6,
                  flexWrap: "wrap",
                }}
              >
                <Tag color="#3a6ea5">Context</Tag>
                <Tag color="#5a8a3c">Session</Tag>
                <Tag color="#7a5a8a">Config</Tag>
              </div>
              <RefRow
                cmd="/compact"
                desc="Compress context (add focus: /compact retain errors)"
              />
              <RefRow cmd="/clear" desc="Clear conversation and start fresh" />
              <RefRow
                cmd="/cost"
                desc="Check current session token usage and cost"
              />
              <RefRow
                cmd="/model"
                desc="Switch Claude model (e.g., /model sonnet)"
              />
              <RefRow cmd="/review" desc="Code review of recent changes" />
              <RefRow
                cmd="/init"
                desc="Generate or update CLAUDE.md for your project"
              />
              <RefRow
                cmd="/doctor"
                desc="Diagnose installation and config issues"
              />
              <RefRow
                cmd="/resume"
                desc="Open session picker to continue past work"
              />
              <RefRow
                cmd="/permissions"
                desc="View or update permission settings"
              />
              <RefRow cmd="/hooks" desc="Interactive hook configuration menu" />
            </SectionCard>

            {/* Section 4: Project Setup */}
            <SectionCard number="4" title="Project Setup">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Configure your project so every Claude session starts with the
                right context.
              </div>
              <Code>{`your-project/
├── CLAUDE.md          # Project instructions (auto-loaded)
├── .claude/
│   ├── settings.json  # Shared team settings
│   ├── settings.local.json  # Personal (git-ignored)
│   ├── commands/      # Legacy slash commands
│   ├── skills/        # Skills with YAML frontmatter
│   ├── agents/        # Subagent definitions (.md)
│   └── rules/         # Modular rules (auto-loaded)
└── .mcp.json          # MCP server config`}</Code>
              <div style={{ marginTop: 8 }}>
                <Bullet>
                  <strong>CLAUDE.md</strong> is loaded as system prompt context
                  every session — commit it to version control
                </Bullet>
                <Bullet>
                  Hierarchical loading: root CLAUDE.md applies everywhere,
                  subdirectory CLAUDE.md applies locally
                </Bullet>
                <Bullet>
                  Run <code>/init</code> to auto-generate a starter CLAUDE.md
                  from your codebase
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 5: Context Management */}
            <SectionCard number="5" title="Managing Context">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Current models support up to 1M tokens, but context management
                is still the key skill for effective sessions.
              </div>
              {[
                {
                  label: "Start fresh per task",
                  desc: "New session for each distinct task avoids context pollution",
                },
                {
                  label: "/compact at 70-80%",
                  desc: "Compress context before hitting limits; add focus instructions",
                },
                {
                  label: "/clear between tasks",
                  desc: "Wipe context completely when switching to an unrelated task",
                },
                {
                  label: "Delegate to subagents",
                  desc: "Research and exploration tasks consume context — offload them",
                },
                {
                  label: "Auto-compact at 95%",
                  desc: "Claude auto-compresses when nearing the limit, but proactive is better",
                },
              ].map(({ label, desc }, i) => (
                <div
                  key={label}
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
                    {label}
                  </div>
                  <div style={{ fontSize: 11.5, color: palette.mid }}>
                    {desc}
                  </div>
                </div>
              ))}
            </SectionCard>

            {/* Section 6: Permission Modes & Safety */}
            <SectionCard number="6" title="Permission Modes & Safety">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Control what Claude can do on your machine. Cycle modes with{" "}
                <code>Shift+Tab</code>.
              </div>
              {[
                {
                  mode: "Normal",
                  desc: "Asks permission before file writes and shell commands",
                  tag: "Default",
                  tagColor: "#5a8a3c",
                },
                {
                  mode: "Auto-Accept",
                  desc: "Writes files and runs commands without asking (sandboxed)",
                  tag: "Fast",
                  tagColor: "#8a6a3a",
                },
                {
                  mode: "Plan",
                  desc: "Read-only research — Claude can explore but not modify anything",
                  tag: "Safe",
                  tagColor: "#3a6ea5",
                },
                {
                  mode: "Bypass",
                  desc: "CLI flag --dangerously-skip-permissions skips all prompts",
                  tag: "CI/CD",
                  tagColor: "#a53a3a",
                },
              ].map(({ mode, desc, tag, tagColor }, i) => (
                <div
                  key={mode}
                  style={{
                    padding: "5px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                    marginBottom: 5,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Tag color={tagColor}>{tag}</Tag>
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        fontWeight: 700,
                        color: palette.dark,
                        fontSize: 12,
                      }}
                    >
                      {mode}
                    </span>
                    <span style={{ fontSize: 11.5, color: palette.mid }}>
                      {" "}
                      — {desc}
                    </span>
                  </div>
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
                  <strong>Sandbox</strong>: macOS uses Seatbelt, Linux uses
                  bubblewrap for OS-level filesystem and network isolation
                </Bullet>
                <Bullet>
                  <strong>Deny rules</strong> always override allow rules
                  regardless of config level
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 7: Session Management */}
            <SectionCard number="7" title="Session Management">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Resume past work, switch models mid-session, and pipe Claude
                into scripts.
              </div>
              <Code>{`# Continue most recent conversation
claude -c   # or claude --continue

# Resume a specific session by ID
claude -r abc123

# One-shot (non-interactive) mode
claude -p "explain this error"

# Specify model
claude --model claude-sonnet-4-20250514

# Check version
claude --version`}</Code>
              <div style={{ marginTop: 8 }}>
                <Bullet>
                  All sessions auto-save with full message history
                </Bullet>
                <Bullet>
                  <code>/resume</code> opens a session picker inside interactive
                  mode
                </Bullet>
                <Bullet>
                  Use <code>-c</code> when you were just working on something
                  and closed the terminal
                </Bullet>
                <Bullet>
                  <strong>Caution</strong>: resuming sessions near the context
                  limit may fail with "Prompt is too long"
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 8: When to Use Which Mode */}
            <SectionCard number="8" title="When to Use Which Mode" span={2}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 8,
                }}
              >
                {[
                  {
                    title: "Normal Mode",
                    when: "Day-to-day coding",
                    best: "Review each change before it happens. Best for learning how Claude works and for sensitive codebases.",
                    color: "#5a8a3c",
                  },
                  {
                    title: "Auto-Accept",
                    when: "Rapid iteration",
                    best: "Let Claude write files and run commands freely. Use with sandbox enabled. Great for scaffolding and boilerplate.",
                    color: "#8a6a3a",
                  },
                  {
                    title: "Plan Mode",
                    when: "Research & analysis",
                    best: "Claude can read and explore but cannot modify anything. Perfect for code review, architecture analysis, and investigation.",
                    color: "#3a6ea5",
                  },
                  {
                    title: "Headless (-p)",
                    when: "CI/CD & scripts",
                    best: "Non-interactive mode for pipelines. Combine with --output-format stream-json and --dangerously-skip-permissions for full automation.",
                    color: "#a53a3a",
                  },
                ].map(({ title, when, best, color }) => (
                  <div
                    key={title}
                    style={{
                      background: palette.highlight,
                      borderRadius: 8,
                      padding: "10px 12px",
                      border: `1px solid ${palette.cardBorder}`,
                    }}
                  >
                    <Tag color={color}>{when}</Tag>
                    <div
                      style={{
                        fontSize: 12.5,
                        fontWeight: 800,
                        color: palette.dark,
                        marginTop: 4,
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: 10.5,
                        color: palette.mid,
                        marginTop: 3,
                      }}
                    >
                      {best}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        )}

        {/* Page 2: Power Patterns */}
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
            {/* Section 9: Subagents & Delegation */}
            <SectionCard number="9" title="Subagents & Delegation">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Claude can spawn autonomous sub-agents that work in parallel,
                each with its own context and tools.
              </div>
              <Code>{`# .claude/agents/researcher.md
---
name: researcher
description: Deep-dive codebase analysis
allowed_tools: Read, Glob, Grep
---
Analyze the codebase and summarize
architecture patterns you find.`}</Code>
              <div style={{ marginTop: 8 }}>
                <KV
                  k="Agent tool"
                  v="Claude auto-delegates via the Agent tool (formerly Task tool)"
                />
                <KV
                  k="Custom agents"
                  v="Define in .claude/agents/ as Markdown files with YAML frontmatter"
                />
                <KV
                  k="Parallel"
                  v="Multiple concurrent agents run in parallel automatically"
                />
                <Bullet>
                  Each agent gets its own context window — offloads work from
                  your main session
                </Bullet>
                <Bullet>
                  Scope agents narrowly: one task, explicit file list, clear
                  exit condition
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 10: Hooks & Automation */}
            <SectionCard number="10" title="Hooks & Automation">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Hooks are scripts that fire at lifecycle events — like Git
                hooks, but for Claude Code.
              </div>
              <Code>{`// .claude/settings.json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Edit",
      "command": "echo 'File about to change'"
    }],
    "PostToolUse": [{
      "matcher": "Bash",
      "command": "./scripts/format.sh"
    }]
  }
}`}</Code>
              <div style={{ marginTop: 8 }}>
                <div
                  style={{ fontSize: 11, color: palette.mid, marginBottom: 4 }}
                >
                  <strong style={{ color: palette.dark }}>Key events:</strong>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 3,
                  }}
                >
                  {[
                    "PreToolUse",
                    "PostToolUse",
                    "SessionStart",
                    "SessionEnd",
                    "Stop",
                    "SubagentStop",
                    "UserPromptSubmit",
                    "Notification",
                  ].map((evt) => (
                    <div
                      key={evt}
                      style={{ fontSize: 11.5, color: palette.mid }}
                    >
                      ○ {evt}
                    </div>
                  ))}
                </div>
                <Bullet>
                  <strong>PreToolUse</strong> can approve or deny actions — use
                  it for security policies and file protection
                </Bullet>
                <Bullet>
                  Run <code>/hooks</code> for interactive menu-based
                  configuration
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 11: MCP Servers */}
            <SectionCard number="11" title="Connecting MCP Servers">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                MCP (Model Context Protocol) connects Claude to external tools
                like GitHub, databases, and APIs.
              </div>
              <Code>{`// .mcp.json (project root)
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_..."
      }
    }
  }
}`}</Code>
              <div style={{ marginTop: 8 }}>
                <KV
                  k="Scopes"
                  v="Project (.mcp.json), User (~/.claude.json), or per-session"
                />
                <KV
                  k="Popular"
                  v="GitHub, Perplexity, Context7, Sequential Thinking, Postgres"
                />
                <Bullet>
                  Validate JSON carefully — trailing commas and unescaped
                  backslashes cause silent failures
                </Bullet>
                <Bullet>
                  MCP tools appear alongside built-in tools and can be
                  controlled via permission rules
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 12: CI/CD & Headless Mode */}
            <SectionCard number="12" title="CI/CD & Headless Mode">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Run Claude non-interactively in pipelines, scripts, and
                automation workflows.
              </div>
              <Code>{`# Basic headless run
claude -p "fix lint errors" \\
  --output-format stream-json

# Full CI pipeline mode
claude -p "review this PR" \\
  --dangerously-skip-permissions \\
  --output-format json \\
  --model claude-sonnet-4-20250514

# Pipe input
cat error.log | claude -p "diagnose this"`}</Code>
              <div style={{ marginTop: 8 }}>
                <KV k="-p" v="Print mode — non-interactive, single response" />
                <KV
                  k="--output-format"
                  v="json or stream-json for programmatic parsing"
                />
                <KV
                  k="--model"
                  v="Override model for cost or capability reasons"
                />
                <Bullet>
                  Combine <code>-p</code> +{" "}
                  <code>--dangerously-skip-permissions</code> for fully
                  autonomous CI workflows
                </Bullet>
              </div>
            </SectionCard>

            {/* Section 13: Debugging & Troubleshooting */}
            <SectionCard number="13" title="Debugging & Troubleshooting">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Common issues and how to resolve them quickly.
              </div>
              {[
                {
                  problem: "Installation issues",
                  fix: "Run /doctor to diagnose environment and config problems",
                },
                {
                  problem: "Context too large",
                  fix: "Use /compact with focus instructions, or /clear and start fresh",
                },
                {
                  problem: "Resume fails",
                  fix: "Session hit context limit — start new session and describe prior work",
                },
                {
                  problem: "MCP server not connecting",
                  fix: "Validate .mcp.json with a JSON linter — no trailing commas",
                },
                {
                  problem: "Hooks not firing",
                  fix: "Check matcher regex matches tool name exactly; verify settings.json syntax",
                },
                {
                  problem: "Wrong file edits",
                  fix: "Use Esc Esc to rewind to a checkpoint before the bad change",
                },
              ].map(({ problem, fix }, i) => (
                <div
                  key={problem}
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
                  <div style={{ fontSize: 11.5, color: palette.mid }}>
                    {fix}
                  </div>
                </div>
              ))}
            </SectionCard>

            {/* Section 14: Tips & Best Practices */}
            <SectionCard number="14" title="Tips & Best Practices">
              <div
                style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}
              >
                Patterns that experienced Claude Code users rely on daily.
              </div>
              <Bullet>
                <strong>One task per session</strong> — context degrades after
                ~20 turns; start fresh for new topics
              </Bullet>
              <Bullet>
                <strong>CLAUDE.md is your leverage</strong> — invest in it like
                you would a .gitignore; it pays back every session
              </Bullet>
              <Bullet>
                <strong>Start with Sonnet, switch to Opus</strong> — Sonnet
                handles most tasks at lower cost; Opus for architecture
                decisions and subtle bugs
              </Bullet>
              <Bullet>
                <strong>Scope prompts narrowly</strong> — "fix the auth bug in
                login.ts" beats "fix all the bugs"
              </Bullet>
              <Bullet>
                <strong>Use /cost habitually</strong> — a single agentic loop
                can burn tokens faster than expected
              </Bullet>
              <Bullet>
                <strong>Competing worktrees</strong> — run parallel sessions on
                separate branches implementing different approaches, then
                compare results
              </Bullet>
              <Bullet>
                <strong>Skills over commands</strong> — Skills (SKILL.md with
                YAML frontmatter) auto-trigger on context; legacy commands
                require explicit invocation
              </Bullet>
              <Bullet>
                <strong>Allow/deny rules</strong> — define{" "}
                <code>{"Bash(npm run *)"}</code> and{" "}
                <code>{"Bash(git *)"}</code> in settings.json to auto-approve
                safe commands
              </Bullet>
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
          Claude Code Cheatsheet — Created {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 10.5, color: "#a08a76" }}>
            Based on official Anthropic documentation · claude.ai/code
          </span>
        </div>
      </div>
    </>
  );
}
