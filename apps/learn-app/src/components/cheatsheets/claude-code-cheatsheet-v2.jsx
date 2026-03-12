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
      padding: "6px 10px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 10.5,
      lineHeight: 1.45,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 5,
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
      padding: "1px 7px",
      fontSize: 9.5,
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
      gap: 5,
      marginBottom: 2,
      fontSize: 11.5,
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
  <div style={{ fontSize: 11.5, marginBottom: 1, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "2.5px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10.5,
        color: palette.accent,
        fontWeight: 700,
        width: 115,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 9,
      padding: "10px 13px 10px 13px",
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
        width: 3.5,
        height: "100%",
        background: palette.accent,
        borderRadius: "9px 0 0 9px",
      }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        marginBottom: 7,
      }}
    >
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 23,
          height: 23,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 12,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 13.5,
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

export default function ClaudeCodeCheatsheetV2() {
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
            padding: "14px 28px 11px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Georgia', serif",
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: -0.5,
              color: "#fff",
            }}
          >
            Claude Code{" "}
            <span style={{ color: palette.accentLight }}>
              Workflow Cheatsheet
            </span>
          </h1>
          <div
            style={{
              color: palette.codeText,
              fontSize: 11,
              marginTop: 4,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Shortcuts · CLAUDE.md · Skills · Hooks · MCP · Agents —{" "}
            {new Date().getFullYear()} Edition
          </div>
        </div>

        {/* Grid */}
        <div
          className="cheatsheet-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 9,
            padding: "10px 14px",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* 1. Quick Start */}
          <SectionCard number="1" title="Quick Start">
            <Code>{`npm install -g @anthropic-ai/claude-code
cd your-project && claude
/init    # scan codebase → CLAUDE.md`}</Code>
            <div style={{ marginTop: 6 }}>
              <KV k="Requires" v="Node.js 18+, Anthropic account" />
              <KV k="Login" v="claude login — browser auth" />
              <KV k="IDEs" v="VS Code extension + JetBrains plugin" />
              <KV k="Verify" v="claude --version" />
            </div>
          </SectionCard>

          {/* 2. CLAUDE.md & Configuration */}
          <SectionCard number="2" title="CLAUDE.md & Configuration">
            {[
              { file: "~/.claude/CLAUDE.md", scope: "Global — all projects", tag: "USER", tc: "#3a6ea5" },
              { file: "CLAUDE.md", scope: "Project — shared via git", tag: "TEAM", tc: "#5a8a3c" },
              { file: "./src/CLAUDE.md", scope: "Subfolder — scoped context", tag: "LOCAL", tc: "#7a5a8a" },
            ].map(({ file, scope, tag, tc }, i) => (
              <div
                key={file}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "4px 7px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                }}
              >
                <Tag color={tc}>{tag}</Tag>
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: palette.accent,
                    fontWeight: 700,
                  }}
                >
                  {file}
                </code>
                <span style={{ fontSize: 10, color: palette.mid, marginLeft: "auto" }}>
                  {scope}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 5 }}>
              <Bullet><strong>Include:</strong> stack, build/test commands, architecture, style rules</Bullet>
              <Bullet>Subfolder files add context — never override parent</Bullet>
              <Bullet>Loaded every session automatically</Bullet>
            </div>
          </SectionCard>

          {/* 3. Project File Structure */}
          <SectionCard number="3" title="Project File Structure">
            <Code>{`your-project/
├── CLAUDE.md            # project memory
├── .claude/
│   ├── settings.json    # team config (git)
│   ├── settings.local.json # personal
│   ├── skills/
│   │   └── tdd/SKILL.md # auto-invoked
│   ├── commands/
│   │   └── deploy.md    # /deploy
│   └── agents/
│       └── reviewer.md  # subagent
└── .mcp.json            # MCP servers`}</Code>
            <div style={{ marginTop: 5 }}>
              <Bullet><strong>settings.json</strong> — permissions, MCP, tools (commit to git)</Bullet>
              <Bullet><strong>settings.local.json</strong> — personal overrides (gitignored)</Bullet>
            </div>
          </SectionCard>

          {/* 4. Keyboard Shortcuts */}
          <SectionCard number="4" title="Keyboard Shortcuts">
            <RefRow cmd="Escape" desc="Interrupt current generation" />
            <RefRow cmd="Esc Esc" desc="Rewind menu — undo changes" />
            <RefRow cmd="Shift+Tab" desc="Cycle: normal → auto → plan" />
            <RefRow cmd="Ctrl+G" desc="Open $EDITOR for long prompts" />
            <RefRow cmd="Alt+T" desc="Toggle extended thinking" />
            <RefRow cmd="Ctrl+R" desc="Search command history" />
            <RefRow cmd="Ctrl+V" desc="Paste image from clipboard" />
            <RefRow cmd="\ + Enter" desc="Continue on next line" />
            <div style={{ marginTop: 4, padding: "4px 7px", background: palette.highlight, borderRadius: 5 }}>
              <Bullet>Customize in <code>~/.claude/keybindings.json</code></Bullet>
            </div>
          </SectionCard>

          {/* 5. Slash Commands */}
          <SectionCard number="5" title="Essential Slash Commands">
            <RefRow cmd="/compact" desc="Compress context — run proactively" />
            <RefRow cmd="/clear" desc="Full conversation reset" />
            <RefRow cmd="/cost" desc="Session token spend" />
            <RefRow cmd="/model" desc="Switch model mid-session" />
            <RefRow cmd="/init" desc="Generate starter CLAUDE.md" />
            <RefRow cmd="/btw" desc="Side question, no history impact" />
            <RefRow cmd="/review" desc="Review changes (diff-aware)" />
            <RefRow cmd="/help" desc="List all available commands" />
            <div style={{ marginTop: 4, padding: "4px 7px", background: palette.highlight, borderRadius: 5 }}>
              <Bullet>Type <code>/</code> then any letters to fuzzy-filter</Bullet>
            </div>
          </SectionCard>

          {/* 6. Skills System */}
          <SectionCard number="6" title="Skills: Reusable Knowledge">
            <div style={{ fontSize: 11, color: palette.mid, marginBottom: 4 }}>
              Markdown files Claude auto-invokes when the task matches the description.
            </div>
            <Code>{`# .claude/skills/tdd/SKILL.md
---
name: tdd
description: Test-driven development
  with red-green-refactor loop
---
## Workflow
1. Write failing test first
2. Minimal code to pass
3. Refactor, keep green`}</Code>
            <div style={{ marginTop: 5 }}>
              <KV k="Project" v=".claude/skills/name/SKILL.md" />
              <KV k="Personal" v="~/.claude/skills/name/SKILL.md" />
              <Bullet>Type <code>/skill-name</code> to invoke explicitly</Bullet>
              <Bullet><strong>description</strong> drives auto-activation — be specific</Bullet>
            </div>
          </SectionCard>

          {/* 7. Hooks & Automation */}
          <SectionCard number="7" title="Hooks & Automation">
            <div style={{ fontSize: 11, color: palette.mid, marginBottom: 4 }}>
              <strong>Hooks guarantee execution</strong> — unlike prompts, they fire every time.
            </div>
            <div style={{ display: "flex", gap: 3, marginBottom: 5, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PreToolUse</Tag>
              <Tag color="#5a8a3c">PostToolUse</Tag>
              <Tag color="#7a5a8a">Notification</Tag>
            </div>
            <Code>{`// .claude/hooks.json
"hooks": {
  "PostToolUse": [{
    "matcher": "Write",
    "hooks": [{
      "type": "command",
      "command": "prettier --write $FILE"
    }]
  }]
}`}</Code>
            <div style={{ marginTop: 5 }}>
              <KV k="Exit 0" v="allow the tool call" />
              <KV k="Exit 2" v="block the tool call" />
              <Bullet>Use for: linting, formatting, security scans, alerts</Bullet>
            </div>
          </SectionCard>

          {/* 8. Permissions & Safety */}
          <SectionCard number="8" title="Permissions & Safety Gates">
            <div style={{ display: "flex", gap: 3, marginBottom: 5, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">ALLOW</Tag>
              <Tag color="#a53a3a">DENY</Tag>
              <Tag color="#3a6ea5">ASK</Tag>
            </div>
            <Code>{`{
  "permissions": {
    "allow": ["Read:*", "Bash(git:*)"],
    "deny": ["Bash(sudo:*)"]
  }
}`}</Code>
            <div style={{ marginTop: 5 }}>
              <KV k="Pattern" v="Tool:argument:glob — wildcards work" />
              <KV k="Precedence" v="Enterprise > CLI > Local > Shared > User" />
              <Bullet><strong>deny</strong> always wins — lower scopes cannot override</Bullet>
              <Bullet><code>Shift+Tab</code> cycles: default → auto-accept → plan</Bullet>
            </div>
          </SectionCard>

          {/* 9. MCP Servers */}
          <SectionCard number="9" title="MCP Server Integration">
            <div style={{ fontSize: 11, color: palette.mid, marginBottom: 4 }}>
              Model Context Protocol — connect external tools via a standard interface.
            </div>
            <Code>{`// .mcp.json (project root)
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y",
        "@modelcontextprotocol/server-github"]
    }
  }
}`}</Code>
            <div style={{ marginTop: 5 }}>
              <KV k="Project" v=".mcp.json — commit for team sharing" />
              <KV k="User" v="~/.claude.json → mcpServers" />
              <Bullet>Databases, browsers, Slack, Linear, cloud APIs</Bullet>
              <Bullet>Tools appear as <code>{"mcp__server__tool"}</code> in permissions</Bullet>
            </div>
          </SectionCard>

          {/* 10. CLI Scripting & CI/CD */}
          <SectionCard number="10" title="CLI Scripting & CI/CD">
            <Code>{`# Single-shot (no interactive)
claude -p "add error handling"

# Pipe content in
cat error.log | claude -p "diagnose"

# JSON output for scripts
claude -p "list TODOs" \\
  --output-format json

# Restrict tools in CI
claude -p "review" \\
  --allowedTools Read,Grep`}</Code>
            <div style={{ marginTop: 5 }}>
              <KV k="CI auth" v="Set ANTHROPIC_API_KEY env var" />
              <KV k="Resume" v="claude -c (last) or claude -r name" />
              <Bullet>Combine with GitHub Actions, pre-commit hooks, build scripts</Bullet>
            </div>
          </SectionCard>

          {/* 11. Daily Workflow & Git */}
          <SectionCard number="11" title="Daily Workflow & Git">
            {[
              { step: "cd project && claude", note: "Start in root" },
              { step: "Shift+Tab → Plan Mode", note: "Align first" },
              { step: "Describe feature intent", note: "Not instructions" },
              { step: "Shift+Tab → Auto Accept", note: "Let it execute" },
              { step: "/compact as context grows", note: "Stay sharp" },
              { step: "Commit after each milestone", note: "Small chunks" },
            ].map(({ step, note }, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "3px 7px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5, marginBottom: 2,
                }}
              >
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 10, width: 14, textAlign: "center", flexShrink: 0 }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 11, color: palette.dark, fontWeight: 600, flex: 1 }}>
                  {step}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid, fontStyle: "italic", flexShrink: 0 }}>
                  {note}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 5 }}>
              <Bullet><strong>Git:</strong> {"\"commit these changes\""} — Claude generates conventional messages</Bullet>
              <Bullet><strong>PR:</strong> {"\"create a PR\""} — writes title + body via <code>gh</code></Bullet>
              <Bullet>Built-in secret scanning blocks commits with API keys</Bullet>
            </div>
          </SectionCard>

          {/* 12. Models, Agents & Quick Reference */}
          <SectionCard number="12" title="Models, Agents & Quick Ref">
            {[
              { model: "Opus 4.6", use: "Hard bugs, architecture, deep reasoning", tag: "DEEP", tc: "#7a5a8a" },
              { model: "Sonnet 4.6", use: "Daily coding — fast + quality", tag: "DAILY", tc: "#3a6ea5" },
              { model: "Haiku 4.5", use: "Quick tasks, bulk ops, lowest cost", tag: "FAST", tc: "#5a8a3c" },
            ].map(({ model, use, tag, tc }, i) => (
              <div
                key={model}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "4px 7px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5, marginBottom: 3,
                }}
              >
                <Tag color={tc}>{tag}</Tag>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11, width: 62, flexShrink: 0 }}>
                  {model}
                </span>
                <span style={{ fontSize: 10.5, color: palette.mid }}>{use}</span>
              </div>
            ))}
            <div style={{ marginTop: 5 }}>
              <KV k="Alt+T" v="Toggle extended thinking" />
              <KV k="/model" v="Switch model — context preserved" />
              <KV k="/fast" v="Same model, faster output" />
            </div>
            <div style={{ marginTop: 5, padding: "5px 7px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 3, fontFamily: "'Georgia', serif" }}>
                Multi-Agent Patterns
              </div>
              <Bullet><strong>Subagents</strong> — own context window, only result returns</Bullet>
              <Bullet><strong>Worktrees</strong> (<code>-w</code>) — isolated git copy per agent</Bullet>
              <Bullet><strong>Custom commands</strong> — <code>.claude/commands/name.md</code> → <code>/name</code></Bullet>
              <Bullet>Scope each agent: files, tools, and exit criteria</Bullet>
            </div>
          </SectionCard>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: "8px 0 12px",
            fontSize: 11,
            color: palette.mid,
            fontFamily: "'Georgia', serif",
          }}
        >
          Claude Code Workflow Cheatsheet — Created {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 10, color: "#a08a76" }}>
            {"Anthropic's agentic coding CLI — docs at code.claude.com"}
          </span>
        </div>
      </div>
    </>
  );
}
