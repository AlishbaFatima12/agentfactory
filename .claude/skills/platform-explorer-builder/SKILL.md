---
name: ai-platform-explorer
description: >
  Build interactive IDE-style explorer websites that teach AI platforms by
  simulating a real project. Creates a three-column layout (file tree, annotated
  code view, interactive terminal) where every file IS the real config artifact
  with inline annotations. Use this skill whenever the user wants to create an
  interactive learning experience for ANY AI platform, agent framework, or
  developer tool — including Claude Code, Cowork, OpenAI Codex CLI, Google ADK,
  Anthropic Agent SDK, Cursor, Windsurf, Goose, OpenClaw, or any SaaS/dev tool.
  Also trigger when user mentions "explorer site", "simulated project",
  "interactive docs", "learn by exploring", or references exploreclaudecode.com.
---

# AI Platform Explorer Builder

Build interactive IDE-style explorer websites that teach AI platforms through
simulated project exploration. Inspired by exploreclaudecode.com — every file
and folder IS a real concept you can click through.

## When to Use

- User wants an interactive learning site for an AI platform or dev tool
- User references exploreclaudecode.com or similar concept
- User says "build an explorer for X" or "interactive docs for Y"
- User wants to teach a framework by letting people explore a simulated project
- Building marketing/onboarding material for an agent framework or plugin

## The Three-Column Pattern

Every explorer follows this exact layout:

```
┌──────────┬──────────────────────┬──────────────┐
│ FILE     │   CONTENT AREA       │  TERMINAL    │
│ TREE     │                      │  PANEL       │
│          │  Welcome page with   │              │
│ .config/ │  clickable cards     │  EXPLORE     │
│  settings│  ─── or ───          │  [PLATFORM]  │
│  skills/ │  Annotated file view │              │
│  agents/ │  with line numbers   │  Quick Start │
│  hooks/  │  and inline notes    │  /help       │
│          │                      │  /command    │
│ file.md  │                      │              │
│ .mcp.json│                      │  How to use  │
└──────────┴──────────────────────┴──────────────┘
```

## Process

### Step 1: Research the Platform

Before building, ALWAYS research the target platform's actual project structure.

1. **Fetch official docs** — use web_search and web_fetch to find the real file
   structure, config formats, and conventions
2. **Identify the key concepts** — what are the 6-10 core concepts a user needs
   to learn? Each becomes a file or folder in the explorer
3. **Get real syntax right** — if the platform uses YAML frontmatter, JSON
   config, TOML, whatever — use the REAL format with REAL field names
4. **Find the hierarchy** — which files go where? What's the directory structure?

Read `references/platform-research-checklist.md` for the full checklist.

### Step 2: Define the File Tree

Map each core concept to a file/folder in the simulated project:

```
Concept              →  File in Explorer
─────────────────────────────────────────
Persistent memory    →  CLAUDE.md / .cursorrules / codex.md
Configuration        →  settings.json / .config/settings.yaml
Skills/Capabilities  →  skills/SKILL.md / recipes/ / prompts/
Agents/Subagents     →  agents/*.md / workers/
Lifecycle hooks      →  Inside settings OR hooks/*.sh
Tool connections     →  .mcp.json / tools.yaml / integrations/
Extensions/Plugins   →  .claude-plugin/ / extensions/
Specifications       →  specs/*.md / tasks/
Quality/Testing      →  evals/ / tests/ / benchmarks/
Source code          →  src/ / app/
```

**Critical**: Get the actual structure RIGHT. Example mistakes to avoid:
- Claude Code hooks go INSIDE settings.json, not as standalone files
- SKILL.md needs YAML frontmatter (---\nname:\ndescription:\n---)
- .claude-plugin/plugin.json is the manifest; skills/ goes at plugin root
- Agent files are SYSTEM PROMPTS, not user prompts

### Step 3: Write Annotated File Content

Each file in the explorer has:
- **The real code/config** — exactly as it would appear in a real project
- **Inline annotations** — explanatory notes that appear below annotated lines

Annotation rules:
- First line of every file gets the "what is this" annotation
- Annotate non-obvious configurations, not every line
- Reference the source docs: `[Docs: section-name]` or `[Book: Ch.X]`
- Highlight security implications, common mistakes, and "why" not just "what"
- Keep annotations to 1-2 sentences max

```javascript
// Data structure for each file:
{
  filename: "settings.json",       // Display name in tab
  lang: "json",                    // Syntax highlighting language
  lines: [
    { code: "{",                   note: "Explain what this file does overall." },
    { code: '  "key": "value",' ,  note: "Why this specific setting matters." },
    { code: '  "key2": true' },    // No note = just show the code
    { code: "}" },
  ]
}
```

### Step 4: Create Welcome Page Cards

The welcome page shows clickable cards for each major concept. Follow
the exploreclaudecode.com pattern:

- **2-column grid** of cards
- Each card has: **SVG icon** (line-art, platform accent color), **title**,
  **1-2 line description**, and **click → navigates to the file**
- Cards should cover ALL major concepts (6-10 cards typical)
- Add `deprecated` badge to sunset features

### Step 5: Build the Terminal Panel

Right-side terminal with:
- **Platform branding** — big text logo in the platform's accent color
- **Quick Start** — 4-5 key commands
- **How to Explore** — numbered steps (①②③)
- **Version/model/project info** at bottom
- **Interactive commands** — 8-12 commands that teach core concepts
  via ASCII art, tables, and formatted output

### Step 6: Set the Visual Theme

Read `references/theme-guide.md` for the full theming system.

Quick reference:
- **Accent color**: Match the platform brand (copper for Claude, green for
  Codex, blue for Cursor, etc.)
- **Background**: Always dark (#0e0c08 range)
- **Fonts**: Playfair Display (headings) + JetBrains Mono (code/terminal)
- **macOS traffic lights** in title bar
- **Tab-style navigation** for Welcome vs file content

### Accessibility: Dark Surface Contrast Rules (MANDATORY)

All text on dark backgrounds (#0e0c08, #0c0a06, #0a0806) MUST meet WCAG 4.5:1 contrast:

- **Body/instructional text**: use `#e0d8cc` or lighter (near-white with warm tint)
- **Secondary/meta text** (labels, descriptions): use at least `#c8b8a8`
- **Active interactive elements**: use `#fff` or platform accent at full opacity
- **Disabled text**: use at least `#b8a898` (never below 4.5:1)
- **Accent colors** (copper, brand colors): reserve for headings, active states, and interactive highlights ONLY — never for body/instructional copy on dark surfaces
- **"How to use this lab" block**: REQUIRED inside the artifact — either as a welcome page section or an onboarding overlay. Users must understand how to interact with the three panels before exploring.
- **Product label**: Use the full descriptive name (e.g., "Claude Code Simulation Lab"), not just the platform name ("Claude Code")

## Technical Requirements

The output is a single React JSX artifact. Constraints:
- `import { useState, useRef, useEffect, useCallback } from "react"` — NO `import React`
- NO JSX fragments (`<>...</>`) — always wrap in `<div>` or `<span>`
- NO arrow functions in component definitions — use `function ComponentName(props)`
- NO destructured useState — use `var s = useState(x); var val = s[0]; var setVal = s[1];`
- Use inline styles only (no Tailwind in artifacts)
- Load Google Fonts via `<link>` inside the component
- All SVG icons inline — no external icon libraries

## Common Platforms Quick Reference

When building for these platforms, here's the starting file tree:

**Claude Code** — .claude/settings.json, .claude/skills/, .claude/agents/,
.claude/commands/ (deprecated), .claude-plugin/, CLAUDE.md, .mcp.json

**Cowork (Claude Desktop)** — CLAUDE.md, connectors (Google, Slack, Notion),
Chrome automation, document skills (docx/xlsx/pptx/pdf), plugins

**OpenAI Codex CLI** — codex.md, .codex/settings.json, skills/ (same SKILL.md
format), agents/, .mcp.json (Codex supports MCP too)

**Google ADK** — agent.py, tools/, sub_agents/, prompts/, .env, config.yaml

**Cursor** — .cursorrules, .cursor/settings.json, .cursor/prompts/,
rules files, context providers

**Anthropic Agent SDK** — agent definition (Python), tools, handoffs,
guardrails, tracing, model_config

For any platform not listed, ALWAYS research the real docs first.

## Quality Checklist

Before delivering the artifact:
- [ ] Every file uses the platform's REAL format (verified against docs)
- [ ] Hooks/lifecycle events configured where they ACTUALLY go
- [ ] YAML frontmatter where required (not invented)
- [ ] Agent files labeled as system prompts (if applicable)
- [ ] No `import React` — only named imports from "react"
- [ ] No JSX fragments
- [ ] All useState uses `var` pattern, not destructuring
- [ ] SVG icons use line-art style matching accent color
- [ ] Welcome cards cover all major concepts
- [ ] Terminal has 8+ interactive commands
- [ ] Annotations reference real docs, not made-up chapter numbers
- [ ] File tree matches actual project structure of the platform