import { useState } from "react";

// Maps to site's OKLCH design system (custom.css)
// Light: --primary is deep navy, --background is white, --card is white
// Dark: --primary is lighter blue, --background is near-black, --card is dark
const palette = {
  bg: "var(--background)",
  card: "var(--card)",
  cardBorder: "var(--border)",
  accent: "var(--primary)",
  accentLight: "color-mix(in oklab, var(--primary) 75%, white)",
  accentPale: "color-mix(in oklab, var(--primary) 10%, var(--background))",
  accentFg: "var(--primary-foreground)",
  muted: "var(--muted)",
  mutedFg: "var(--muted-foreground)",
  dark: "var(--foreground)",
  mid: "var(--muted-foreground)",
  codeBg: "oklch(0.145 0 0)",
  codeText: "oklch(0.85 0 0)",
  tagBg: "var(--primary)",
  tagText: "var(--primary-foreground)",
  highlight: "var(--muted)",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      padding: "4px 7px",
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
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
      fontSize: 10,
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
      ○
    </span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 10, marginBottom: 1, color: palette.mid }}>
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
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        color: palette.accent,
        fontWeight: 700,
        width: 100,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 9.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1px solid ${palette.cardBorder}`,
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
          color: palette.accentFg,
          width: 18,
          height: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 9.5,
          fontFamily: "var(--font-sans)",
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
          fontFamily: "var(--font-sans)",
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
        className="allow-rounded cheatsheet-root"
        style={{
          background: palette.bg,
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: palette.accent,
            padding: "10px 20px 8px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: -0.5,
              color: palette.accentFg,
            }}
          >
            Claude Code{" "}
            <span style={{ opacity: 0.85 }}>Workflow Cheatsheet</span>
          </h1>
          <div
            style={{
              color: palette.accentFg,
              opacity: 0.7,
              fontSize: 9,
              marginTop: 3,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Setup · Configuration · Skills · Hooks · Agent Teams · Subagents ·
            Scheduled Tasks — {new Date().getFullYear()} Edition
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
          {/* 1. Getting Started */}
          <SectionCard number="1" title="Getting Started">
            <Code>{`# Install (requires Node 18+)
curl -fsSL \\
  https://claude.ai/install.sh | bash

cd your-project
claude
/init`}</Code>
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginTop: 4,
                marginBottom: 3,
              }}
            >
              Scans your codebase and creates a starter CLAUDE.md file.
            </div>
            <KV k="Login" v="claude login — authenticates via browser" />
            <KV k="IDEs" v="VS Code and JetBrains extensions available" />
            <KV k="Verify" v="claude --version to confirm install" />
          </SectionCard>

          {/* 2. Understanding CLAUDE.md */}
          <SectionCard number="2" title="Understanding CLAUDE.md">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Persistent memory loaded every session. Tell Claude about your
              project:
            </div>
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="var(--chart-2)">WHAT</Tag>
              <Tag color="var(--chart-3)">WHY</Tag>
              <Tag color="var(--chart-4)">HOW</Tag>
            </div>
            <Bullet>
              <strong>What</strong> — tech stack, directory map, architecture
            </Bullet>
            <Bullet>
              <strong>Why</strong> — module purpose, design decisions
            </Bullet>
            <Bullet>
              <strong>How</strong> — build/test commands, workflows, gotchas
            </Bullet>
            <Code>{`# Project: MyApp
FastAPI + React + Postgres

## Commands
npm run dev / test / lint

## Architecture
/app → routes  /lib → utils
/prisma → DB schema`}</Code>
          </SectionCard>

          {/* 3. Memory File Hierarchy */}
          <SectionCard number="3" title="Memory File Hierarchy">
            {[
              {
                file: "~/.claude/CLAUDE.md",
                scope: "Global — all projects",
              },
              {
                file: "CLAUDE.md",
                scope: "Project — shared on git",
              },
              {
                file: ".claude/CLAUDE.md",
                scope: "Project — alternative location",
              },
              {
                file: "./src/CLAUDE.md",
                scope: "Subfolder — scoped context",
              },
            ].map(({ file, scope }, i) => (
              <div
                key={file}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 6px",
                  background:
                    i % 2 === 0 ? palette.muted : palette.highlight,
                                    marginBottom: 3,
                }}
              >
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8.5,
                    color: palette.accent,
                    fontWeight: 700,
                    width: 125,
                    flexShrink: 0,
                  }}
                >
                  {file}
                </code>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {scope}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 4 }}>
              <Bullet>Keep each file under 200 lines</Bullet>
              <Bullet>Subfolder files append context, never overwrite</Bullet>
              <Bullet>Commit to Git for team sharing</Bullet>
            </div>
          </SectionCard>

          {/* 4. Project File Structure */}
          <SectionCard number="4" title="Project File Structure">
            <Code>{`your-project/
├── CLAUDE.md
├── .claude/
│   ├── settings.json
│   ├── settings.local.json
│   ├── skills/
│   │   ├── code-review/
│   │   │   └── SKILL.md
│   │   └── testing/
│   │       └── SKILL.md
│   ├── commands/
│   │   └── deploy.md
│   └── agents/
│       └── reviewer.md
└── .gitignore`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>settings.json</strong> — shared team config (commit to
                git)
              </Bullet>
              <Bullet>
                <strong>settings.local.json</strong> — personal overrides
                (gitignored)
              </Bullet>
              <Bullet>
                <strong>commands/</strong> — custom slash commands the team
                shares
              </Bullet>
              <Bullet>
                <strong>agents/</strong> — custom subagent definitions
              </Bullet>
            </div>
          </SectionCard>

          {/* 5. Adding Skills (The Superpower) */}
          <SectionCard number="5" title="Adding Skills (The Superpower)">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              <strong>Skills</strong> = markdown guides Claude auto-invokes via
              natural language.
            </div>
            <KV k="Project" v=".claude/skills/name/SKILL.md" />
            <KV k="Personal" v="~/.claude/skills/name/SKILL.md" />
            <Code>{`---
name: testing-patterns
description: Jest testing patterns
allowed_tools: Read, Grep, Glob
---

# Testing Patterns
Use describe + it + AAA pattern
Use factory mocks`}</Code>
            <div
              style={{
                marginTop: 4,
                padding: "4px 6px",
                background: palette.highlight,
                              }}
            >
              <Bullet>
                <strong>description</strong> field is critical for
                auto-activation
              </Bullet>
              <Bullet>
                Type <code>/skill-name</code> to invoke explicitly
              </Bullet>
            </div>
          </SectionCard>

          {/* 6. Setting Up Hooks */}
          <SectionCard number="6" title="Setting Up Hooks">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              <strong>Hooks</strong> = deterministic callbacks at lifecycle
              events.
            </div>
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="var(--chart-2)">PreToolUse</Tag>
              <Tag color="var(--chart-2)">PostToolUse</Tag>
              <Tag color="var(--chart-3)">Notification</Tag>
            </div>
            <Code>{`"hooks": {
  "PreToolUse": [{
    "matcher": "Bash",
    "hooks": [{
      "type": "command",
      "command": "scripts/sec.sh",
      "timeout": 5
    }]
  }]
}`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="Exit codes" v="0 → allow, 2 → block" />
              <Bullet>
                Input via <strong>stdin</strong> (command) or{" "}
                <strong>POST body</strong> (HTTP)
              </Bullet>
            </div>
          </SectionCard>

          {/* 7. Permissions & Safety */}
          <SectionCard number="7" title="Permissions & Safety">
            <Code>{`{
  "permissions": {
    "allow": [
      "Read:*",
      "Bash:git:*",
      "Write:*:*.md"
    ],
    "deny": [
      "Read:env:*",
      "Bash:sudo:*"
    ]
  }
}`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Wildcard patterns: <code>Tool:arg:glob</code>
              </Bullet>
              <Bullet>
                <strong>allow</strong> auto-approves matching tool calls
              </Bullet>
              <Bullet>
                <strong>deny</strong> blocks matching tool calls entirely
              </Bullet>
              <Bullet>
                Set <code>defaultMode</code> to plan, auto, or default
              </Bullet>
            </div>
          </SectionCard>

          {/* 8. The 4-Layer Architecture */}
          <SectionCard number="8" title="The 4-Layer Architecture">
            {[
              {
                l: "L1",
                name: "CLAUDE.md",
                desc: "Persistent context and rules",
              },
              {
                l: "L2",
                name: "Skills",
                desc: "Auto-invoked knowledge packs",
              },
              {
                l: "L3",
                name: "Hooks",
                desc: "Safety gates and automation",
              },
              {
                l: "L4",
                name: "Agents",
                desc: "Subagents with their own context",
              },
            ].map(({ l, name, desc }, i) => (
              <div
                key={l}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 3,
                  padding: "4px 6px",
                  background:
                    i % 2 === 0 ? palette.muted : palette.highlight,
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
                    width: 60,
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
            <div
              style={{
                marginTop: 5,
                padding: "4px 6px",
                background: palette.highlight,
                              }}
            >
              <Bullet>
                Each layer builds on the one below — start with L1, add layers
                as patterns emerge
              </Bullet>
            </div>
          </SectionCard>

          {/* 9. Daily Workflow Pattern */}
          <SectionCard number="9" title="Daily Workflow Pattern">
            {[
              "cd project && claude",
              "Shift+Tab → Plan Mode",
              "Describe feature intent",
              "Shift+Tab → Auto Accept",
              "! git status → inline bash",
              "/compact when context grows",
              "Ctrl+B → background a task",
              "Esc Esc → rewind if needed",
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "2px 6px",
                  background:
                    i % 2 === 0 ? palette.muted : palette.highlight,
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
                <span
                  style={{
                    fontSize: 10,
                    color: i === 0 ? palette.dark : palette.mid,
                    fontWeight: i === 0 ? 700 : 400,
                    fontFamily:
                      i === 0 ? "var(--font-mono)" : "inherit",
                  }}
                >
                  {step}
                </span>
              </div>
            ))}
          </SectionCard>

          {/* 10. Modes & Models */}
          <SectionCard number="10" title="Modes & Models">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 5,
                flexWrap: "wrap",
              }}
            >
              <Tag>Interactive</Tag>
              <Tag color="var(--chart-2)">Plan Mode</Tag>
              <Tag color="var(--chart-4)">Extended Thinking</Tag>
            </div>
            <KV k="claude-opus-4-6" v="Most capable — deep reasoning" />
            <KV k="claude-sonnet-4-6" v="Balanced — daily coding" />
            <KV k="claude-haiku-4-5" v="Fastest — quick tasks, lowest cost" />
            <KV k="Context" v="Up to 1M tokens with auto-compression" />
            <div
              style={{
                marginTop: 5,
                padding: "4px 6px",
                background: palette.highlight,
                              }}
            >
              <Bullet>⌥P to switch models — context preserved</Bullet>
              <Bullet>⌥T to toggle extended thinking</Bullet>
              <Bullet>
                <strong>/rc</strong> — remote control from claude.ai web
              </Bullet>
              <Bullet>
                <strong>/fork</strong> — branch conversation to explore
                alternatives
              </Bullet>
            </div>
          </SectionCard>

          {/* 11. Non-Interactive & CI */}
          <SectionCard number="11" title="Non-Interactive & CI">
            <Code>{`# Single-shot execution
claude -p "add error handling"

# Pipe content in
cat logs.txt | claude -p \\
  "summarize errors"

# JSON output for scripting
claude -p "list TODOs" \\
  --output-format json

# Restrict tools in CI
claude -p "review" \\
  --allowedTools Read,Grep`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="CI auth" v="Set ANTHROPIC_API_KEY env var" />
              <KV k="Exit code" v="0 on success — fits pipelines" />
              <Bullet>
                Use in GitHub Actions, pre-commit hooks, build scripts
              </Bullet>
            </div>
          </SectionCard>

          {/* 12. MCP Servers */}
          <SectionCard number="12" title="MCP Servers">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Model Context Protocol — connect external tools via a standardized
              interface.
            </div>
            <Code>{`// .mcp.json (project root)
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["server-package"]
    }
  }
}`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="Project" v=".mcp.json — shared with team via git" />
              <KV k="User" v="~/.claude.json under mcpServers" />
              <Bullet>Connect databases, APIs, browsers, cloud services</Bullet>
              <Bullet>Hundreds of community servers available</Bullet>
            </div>
          </SectionCard>

          {/* 13. Multi-Agent Parallel Work */}
          <SectionCard number="13" title="Multi-Agent Parallel Work">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag>Subagents</Tag>
              <Tag color="var(--chart-2)">Agent Teams</Tag>
              <Tag color="var(--chart-3)">Scheduled</Tag>
            </div>
            <KV k="Subagents" v="Parallel workers via Agent tool, isolated" />
            <KV
              k="Agent Teams"
              v="Team lead + teammates, shared task list & mailbox"
            />
            <KV k="/loop 5m" v="Repeat a prompt on interval (s/m/h/d)" />
            <Code>{`.claude/agents/reviewer.md
---
name: reviewer
description: Code review agent
model: claude-sonnet-4-6
tools: Read, Grep, Glob
---
Review for OWASP top 10...`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>Worktrees</strong> — each agent gets isolated git copy
              </Bullet>
              <Bullet>
                <strong>Shift+Down</strong> to cycle teammates in Agent Teams
              </Bullet>
              <Bullet>
                <strong>/agents</strong> to list and manage definitions
              </Bullet>
            </div>
          </SectionCard>

          {/* 14. Git & PR Workflows */}
          <SectionCard number="14" title="Git & PR Workflows">
            <Bullet>
              <strong>Commits</strong> — auto-generates conventional commit
              messages from diff
            </Bullet>
            <Bullet>
              <strong>Branches</strong> — creates feature branches, pushes
              upstream
            </Bullet>
            <Bullet>
              <strong>Pull requests</strong> — writes title, description, files
              via <code>gh</code>
            </Bullet>
            <Bullet>
              <strong>Code review</strong> — reads diffs, structured feedback
            </Bullet>
            <Bullet>
              Secret scanning blocks commits with API keys or tokens
            </Bullet>
            <Code>{`# Ask Claude naturally:
"commit these changes"
"create a PR for this branch"
"review the last 3 commits"`}</Code>
          </SectionCard>

          {/* 15. Context & Cost Management */}
          <SectionCard number="15" title="Context & Cost Management">
            <Bullet>
              <strong>/compact</strong> — summarize and compress when context
              gets long
            </Bullet>
            <Bullet>
              <strong>/clear</strong> — full reset when session is confused
            </Bullet>
            <Bullet>
              <strong>/cost</strong> — check session spend at any time
            </Bullet>
            <Bullet>Auto-compresses as you approach token limits</Bullet>
            <Bullet>
              Start fresh sessions every ~20 turns for best quality
            </Bullet>
            <div
              style={{
                marginTop: 5,
                padding: "4px 6px",
                background: palette.highlight,
                              }}
            >
              <Bullet>
                <strong>Rule of thumb</strong> — <code>/compact</code> first; if
                still off, <code>/clear</code> and start over
              </Bullet>
            </div>
          </SectionCard>

          {/* 16. Quick Reference */}
          <SectionCard number="16" title="Quick Reference" span={3}>
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
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Core Commands
                </div>
                <RefRow cmd="/init" desc="Generate CLAUDE.md" />
                <RefRow cmd="/compact" desc="Compress context" />
                <RefRow cmd="/clear" desc="Reset conversation" />
                <RefRow cmd="/cost" desc="Session spend" />
                <RefRow cmd="/fork" desc="Branch conversation" />
                <RefRow cmd="/rc" desc="Remote from claude.ai" />
                <RefRow cmd="/loop 5m" desc="Repeat on interval" />
                <RefRow cmd="/btw" desc="Side question (ephemeral)" />
                <RefRow cmd="/diff" desc="Review pending changes" />
                <RefRow cmd="/agents" desc="List agent definitions" />
              </div>
              <div style={{ flex: "1 1 180px", minWidth: 160 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Key Shortcuts
                </div>
                <RefRow cmd="⌥P / Alt+P" desc="Switch model" />
                <RefRow cmd="⌥T / Alt+T" desc="Extended thinking" />
                <RefRow cmd="Ctrl+G" desc="Text editor" />
                <RefRow cmd="Ctrl+B" desc="Background task" />
                <RefRow cmd="Ctrl+T" desc="Toggle task list" />
                <RefRow cmd="Shift+Tab" desc="Cycle mode" />
                <RefRow cmd="Shift+Down" desc="Cycle teammates" />
                <RefRow cmd="Esc Esc" desc="Rewind last turn" />
                <RefRow cmd="!" desc="Bash mode (inline)" />
              </div>
              <div style={{ flex: "1 1 180px", minWidth: 160 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: palette.dark,
                    marginBottom: 4,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  When to Use
                </div>
                <KV k="Interactive" v="Exploring, debugging, learning" />
                <KV k="-p flag" v="CI/CD, automation, scripts" />
                <KV k="Plan mode" v="Complex features, unclear scope" />
                <KV k="Agent Teams" v="Multi-file parallel work" />
                <KV k="/loop" v="Monitoring, polling, recurring" />
                <KV k="/rc" v="Control CLI from web UI" />
                <KV k="⌥T thinking" v="Hard bugs, architecture" />
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: "6px 0 8px",
            fontSize: 9.5,
            color: palette.mid,
            fontFamily: "var(--font-sans)",
          }}
        >
          Claude Code Workflow Cheatsheet — Created {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 9, color: palette.mutedFg }}>
            {"Anthropic's agentic coding CLI & IDE extensions"}
          </span>
        </div>
      </div>
    </>
  );
}
