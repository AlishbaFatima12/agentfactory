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
      ○
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

export default function CoworkCheatsheet() {
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
            Claude{" "}
            <span style={{ color: palette.accentLight }}>
              Cowork Cheatsheet
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
            Desktop Agent · Files · Documents · Skills · Plugins · Connectors —{" "}
            {new Date().getFullYear()} Edition
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
          {/* 1. Quick Start */}
          <SectionCard number="1" title="Quick Start">
            <KV k="Plans" v="Pro, Max, Team Premium, or Enterprise" />
            <KV
              k="macOS"
              v="Apple Silicon required (Intel = Chat + Code only)"
            />
            <KV k="Windows" v="x64 only (ARM not supported)" />
            <KV k="Install" v="claude.ai/download → Claude Desktop app" />
            <KV k="Model" v="Select Opus 4.6 + toggle Extended Thinking" />
            <div
              style={{
                marginTop: 4,
                padding: "3px 6px",
                background: palette.highlight,
                borderRadius: 4,
              }}
            >
              <Bullet>
                Three tabs: <strong>Chat</strong> · <strong>Cowork</strong> ·{" "}
                <strong>Code</strong> — click Cowork to start
              </Bullet>
              <Bullet>Desktop app must stay open while Claude works</Bullet>
            </div>
          </SectionCard>

          {/* 2. Workspace Setup */}
          <SectionCard number="2" title="Workspace Setup">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Create a dedicated folder structure for Claude:
            </div>
            <Code>{`Claude-Work/
├── ABOUT-ME/     ← your role, context
├── PROJECTS/     ← active work folders
├── TEMPLATES/    ← reusable formats
└── OUTPUTS/      ← Claude's deliverables`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>Grant folder access when Cowork prompts</Bullet>
              <Bullet>
                Never share your home directory — specific folders only
              </Bullet>
              <Bullet>One workspace per domain (finance, legal, etc.)</Bullet>
            </div>
          </SectionCard>

          {/* 3. Context Files */}
          <SectionCard number="3" title="Context Files">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Drop these in your workspace so Claude knows you:
            </div>
            <Code>{`ABOUT-ME/
├── about-me.md   ← role, company, goals
├── my-voice.md   ← tone, style, examples
└── my-rules.md   ← constraints, formats`}</Code>
            <div style={{ marginTop: 4 }}>
              <KV k="about-me.md" v="What you work on day-to-day" />
              <KV k="my-voice.md" v="Your tone, 2–3 real writing samples" />
              <KV k="my-rules.md" v="Ask before starting, show a plan, never delete" />
              <Bullet>
                <strong>One great file beats 50 random uploads</strong>
              </Bullet>
            </div>
          </SectionCard>

          {/* 4. Permission Modes */}
          <SectionCard number="4" title="Permission Modes">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Control how much autonomy Claude gets:
            </div>
            {[
              {
                mode: "Ask",
                desc: "Approve each file write/edit/delete",
                tag: "default",
              },
              {
                mode: "Auto accept",
                desc: "Approve edits automatically (reads always auto)",
                tag: "trusted",
              },
              {
                mode: "Plan",
                desc: "Claude proposes plan first, you approve",
                tag: "review",
              },
              {
                mode: "Bypass",
                desc: "Full autonomy — no approval prompts",
                tag: "power",
              },
            ].map(({ mode, desc, tag }, i) => (
              <div
                key={mode}
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
                    fontWeight: 800,
                    color: palette.accent,
                    fontSize: 10,
                    width: 72,
                    flexShrink: 0,
                  }}
                >
                  {mode}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid, flex: 1 }}>
                  {desc}
                </span>
                <Tag color={i === 0 ? "#5a8a3c" : "#3a6ea5"}>{tag}</Tag>
              </div>
            ))}
            <Bullet>
              <strong>Start with Ask</strong> — graduate to Auto accept once
              trusted
            </Bullet>
          </SectionCard>

          {/* 5. Built-in Document Skills */}
          <SectionCard number="5" title="Built-in Document Skills">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#3a6ea5">docx</Tag>
              <Tag color="#5a8a3c">xlsx</Tag>
              <Tag color="#7a5a8a">pptx</Tag>
              <Tag color="#a53a3a">pdf</Tag>
              <Tag color="#2a7a7a">canvas</Tag>
              <Tag color="#8a6a3a">skill-creator</Tag>
            </div>
            <KV k="docx" v="Read, create, edit — tracked changes, styles" />
            <KV k="xlsx" v="Read, analyze, formulas, charts, multi-tab" />
            <KV k="pptx" v="Create, edit, themes, speaker notes" />
            <KV k="pdf" v="Extract text only — read-only, no create/edit" />
            <KV k="canvas" v="Visual designs, diagrams, infographics" />
            <Bullet>Pre-installed — auto-activates by file type</Bullet>
            <Bullet>Community skills at github.com/anthropics/skills</Bullet>
          </SectionCard>

          {/* 6. Cross-App Orchestration */}
          <SectionCard number="6" title="Cross-App Orchestration">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Chain skills across formats in a single prompt:
            </div>
            {[
              { flow: "PDF → docx", desc: "Extract terms, editable summary" },
              { flow: "xlsx → pptx", desc: "Analyze data, gen presentation" },
              { flow: "PDFs → xlsx", desc: "Compile sources into spreadsheet" },
              { flow: "docx → pptx", desc: "Convert brief into slides" },
              { flow: "xlsx → docx", desc: "Analyze figures, gen report" },
            ].map(({ flow, desc }, i) => (
              <div
                key={flow}
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
                    fontWeight: 800,
                    color: palette.accent,
                    fontSize: 9,
                    width: 64,
                    flexShrink: 0,
                  }}
                >
                  {flow}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {desc}
                </span>
              </div>
            ))}
            <Bullet>Eliminates manual copy-paste-reformat between apps</Bullet>
          </SectionCard>

          {/* 7. Effective Prompting */}
          <SectionCard number="7" title="Effective Prompting">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              Use this structured template for complex tasks:
            </div>
            <Code>{`"I want to [TASK]. Read all files
first. Ask me questions using
AskUserQuestion before you execute.
If something is off, generate
new questions. Do not guess."`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                Claude generates <strong>clickable buttons</strong> — you click, it executes
              </Bullet>
              <Bullet>
                <strong>@mention</strong> files by name — autocomplete works
              </Bullet>
              <Bullet>Attach images, PDFs, screenshots directly in chat</Bullet>
              <Bullet>Describe the outcome, not the steps</Bullet>
            </div>
          </SectionCard>

          {/* 8. Plugins */}
          <SectionCard number="8" title="Plugins">
            <div
              style={{
                fontSize: 10,
                color: palette.mid,
                marginBottom: 4,
              }}
            >
              One-click workflow packages:
            </div>
            <KV
              k="Contains"
              v="Connectors + Skills + Slash Commands + Sub-agents"
            />
            <KV k="Install" v="Customize → Browse Plugins → Install" />
            <KV
              k="Use"
              v={"Type / to see slash commands from plugins"}
            />
            {[
              { domain: "Marketing", cmd: "/marketing:draft-content" },
              { domain: "Data", cmd: "/data/explore" },
              { domain: "Legal", cmd: '"Review this NDA"' },
              { domain: "Finance", cmd: "/financial-architect" },
            ].map(({ domain, cmd }, i) => (
              <div
                key={domain}
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
                    fontWeight: 800,
                    color: palette.accent,
                    fontSize: 10,
                    width: 64,
                    flexShrink: 0,
                  }}
                >
                  {domain}
                </span>
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    color: palette.mid,
                  }}
                >
                  {cmd}
                </code>
              </div>
            ))}
          </SectionCard>

          {/* 9. Connectors & Data Sources */}
          <SectionCard number="9" title="Connectors & Data Sources">
            <div
              style={{
                display: "flex",
                gap: 3,
                marginBottom: 4,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#3a6ea5">Drive</Tag>
              <Tag color="#5a8a3c">Slack</Tag>
              <Tag color="#7a5a8a">GitHub</Tag>
              <Tag color="#8a6a3a">Jira</Tag>
              <Tag color="#2a7a7a">Notion</Tag>
              <Tag color="#a53a3a">Salesforce</Tag>
            </div>
            <KV k="What" v="50+ remote MCP servers — no code needed" />
            <KV k="Install" v="Settings → Connectors → Browse → Add" />
            <KV k="Auth" v="OAuth per connector — one-time setup" />
            <Bullet>Claude reads your tools mid-conversation</Bullet>
            <Bullet>No copy-pasting — combine sources in one prompt</Bullet>
            <Bullet>Start read-only, enable write when trusted</Bullet>
          </SectionCard>

          {/* 10. Instructions & Scheduling */}
          <SectionCard number="10" title="Instructions & Scheduling">
            <KV
              k="Global"
              v="Settings → Cowork → Edit Instructions"
            />
            <KV
              k="Folder"
              v="Per-project context — Claude can update mid-session"
            />
            <KV k="/schedule" v="Recurring tasks with frequency options" />
            <Code>{`"I'm [Name], [Role]. Read my
files before every task. Ask me
questions before you execute.
Show a plan. Never delete
without approval."`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>
                <strong>Set once. Runs forever.</strong> Every session loads this.
              </Bullet>
              <Bullet>Scheduled tasks: daily, weekly, or custom cron</Bullet>
              <Bullet>Runs only while Desktop app is open</Bullet>
            </div>
          </SectionCard>

          {/* 11. Review & Approve Workflow */}
          <SectionCard number="11" title="Review & Approve Workflow">
            <Bullet>
              <strong>Visual diffs</strong> — review changes with inline
              comments
            </Bullet>
            <Bullet>
              <strong>Live preview</strong> — see output before approving
            </Bullet>
            <Bullet>
              Claude proposes → you review diff → approve or reject
            </Bullet>
            <Bullet>Reject with feedback → Claude revises immediately</Bullet>
            {[
              { op: "Read files", approval: "Automatic", icon: "✓" },
              { op: "Create files", approval: "Requires approval", icon: "⚠" },
              { op: "Edit files", approval: "Requires approval", icon: "⚠" },
              { op: "Delete files", approval: "Explicit confirm", icon: "✗" },
            ].map(({ op, approval, icon }, i) => (
              <div
                key={op}
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
                <span style={{ fontSize: 11, width: 16 }}>{icon}</span>
                <span
                  style={{
                    fontWeight: 700,
                    color: palette.dark,
                    fontSize: 10,
                    width: 72,
                    flexShrink: 0,
                  }}
                >
                  {op}
                </span>
                <span style={{ fontSize: 9.5, color: palette.mid }}>
                  {approval}
                </span>
              </div>
            ))}
          </SectionCard>

          {/* 12. Parallel Sessions & Sub-agents */}
          <SectionCard number="12" title="Parallel Sessions & Sub-agents">
            <Bullet>
              <strong>Multiple sessions</strong> — run tasks in parallel
            </Bullet>
            <Bullet>
              <strong>Worktree isolation</strong> — each session gets its own
              copy
            </Bullet>
            <Bullet>Complex tasks → Claude auto-breaks into sub-agents</Bullet>
            <Bullet>Progress indicators show real-time activity</Bullet>
            <div
              style={{
                marginTop: 4,
                padding: "3px 6px",
                background: palette.highlight,
                borderRadius: 4,
              }}
            >
              <Bullet>
                <strong>Set a task and step away</strong> — come back to
                completed work
              </Bullet>
              <Bullet>Steer and course-correct mid-task if needed</Bullet>
            </div>
          </SectionCard>

          {/* 13. Daily File Operations */}
          <SectionCard number="13" title="Daily File Operations">
            <Code>{`"Organize files by type: docs/
 office/ images/ — YYYY-MM-DD names"

"Find duplicates by content,
 move to duplicates/ folder"

"Read all .txt files, summarize
 key points into one report"`}</Code>
            <div style={{ marginTop: 4 }}>
              <Bullet>Batch complex work — higher usage than Chat</Bullet>
              <Bullet>
                Add constraints: {'"don\'t delete"'}, {'"preserve structure"'}
              </Bullet>
              <Bullet>Backup important data before bulk operations</Bullet>
            </div>
          </SectionCard>

          {/* 14. Safety & Limitations */}
          <SectionCard number="14" title="Safety & Limitations">
            <Bullet>
              <strong>No memory</strong> across sessions — use context files
            </Bullet>
            <Bullet>
              <strong>Desktop only</strong> — requires app open and running
            </Bullet>
            <Bullet>
              <strong>Isolated VM</strong> — Claude runs in a controlled
              environment
            </Bullet>
            <Bullet>
              <strong>macOS:</strong> Apple Silicon only (M1/M2/M3/M4)
            </Bullet>
            <Bullet>
              <strong>Windows:</strong> x64 only, no ARM, no S Mode
            </Bullet>
            <div
              style={{
                marginTop: 4,
                padding: "3px 6px",
                background: palette.highlight,
                borderRadius: 4,
              }}
            >
              <Bullet>
                <strong>Backup first</strong> — protect important data before
                bulk ops
              </Bullet>
            </div>
          </SectionCard>

          {/* 15. Troubleshooting */}
          <SectionCard number="15" title="Troubleshooting">
            <KV
              k="No Cowork tab"
              v="Update app, verify paid plan, check Apple Silicon"
            />
            <KV
              k="Folder denied (mac)"
              v="System Settings → Privacy → Files & Folders"
            />
            <KV k="Folder denied (win)" v="Run as admin, x64 only" />
            <KV
              k="Slow operations"
              v="Large folders take time — check Execution panel"
            />
            <KV k="Intel Mac" v="No Cowork — only Chat + Code available" />
            <KV k="Windows S Mode" v="Not supported — switch to standard" />
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
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Skill Capabilities
                </div>
                <RefRow cmd="docx" desc="Read, create, edit, tracked changes" />
                <RefRow cmd="xlsx" desc="Read, analyze, formulas, charts" />
                <RefRow cmd="pptx" desc="Create, edit, themes, notes" />
                <RefRow cmd="pdf" desc="Extract text only (read-only)" />
                <RefRow cmd="canvas" desc="Visual designs and diagrams" />
                <RefRow
                  cmd="skill-creator"
                  desc="Build custom skills in Cowork"
                />
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
                  Connector Categories
                </div>
                <RefRow
                  cmd="Document"
                  desc="Drive, Notion, Confluence, SharePoint"
                />
                <RefRow cmd="Comms" desc="Slack, Teams, Gmail, Calendar" />
                <RefRow cmd="Dev" desc="GitHub, GitLab, Linear" />
                <RefRow
                  cmd="Business"
                  desc="Salesforce, HubSpot, Jira, Airtable"
                />
                <RefRow cmd="Design" desc="Figma, Canva" />
                <RefRow cmd="Finance" desc="FactSet, MSCI" />
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
                  Setup Checklist
                </div>
                <KV k="1" v="Install Desktop app (claude.ai/download)" />
                <KV k="2" v="Select Opus 4.6 + Extended Thinking" />
                <KV k="3" v="Create Claude-Work/ folder structure" />
                <KV k="4" v="Add context files (about-me, voice, rules)" />
                <KV k="5" v="Grant folder access in Cowork tab" />
                <KV k="6" v="Install plugins (Customize → Browse)" />
                <KV k="7" v="Add connectors (Settings → Connectors)" />
                <KV k="8" v="Set global + folder instructions" />
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
          Claude Cowork Cheatsheet — Created {new Date().getFullYear()}
          <br />
          <span style={{ fontSize: 9, color: palette.mid }}>
            {"Anthropic's desktop agent for knowledge work beyond coding"}
          </span>
        </div>
      </div>
    </>
  );
}
