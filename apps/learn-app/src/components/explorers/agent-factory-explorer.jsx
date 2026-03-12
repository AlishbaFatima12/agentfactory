import { useState, useRef, useEffect, useCallback } from "react";

var TREE = [
  {
    id: "claude-dir",
    name: ".claude",
    type: "folder",
    children: [
      {
        id: "settings",
        name: "settings.json",
        type: "file",
        badges: ["config", "hooks"],
      },
      {
        id: "settings-local",
        name: "settings.local.json",
        type: "file",
        badges: ["personal"],
      },
      {
        id: "commands-dir",
        name: "commands",
        type: "folder",
        badges: ["deprecated"],
        children: [{ id: "cmd-deploy", name: "deploy-fte.md", type: "file" }],
      },
      {
        id: "skills-dir",
        name: "skills",
        type: "folder",
        badges: ["skill"],
        children: [
          {
            id: "sf-dir",
            name: "finance-analyst",
            type: "folder",
            children: [{ id: "skill-finance", name: "SKILL.md", type: "file" }],
          },
          {
            id: "sl-dir",
            name: "legal-reviewer",
            type: "folder",
            children: [{ id: "skill-legal", name: "SKILL.md", type: "file" }],
          },
          {
            id: "si-dir",
            name: "islamic-finance",
            type: "folder",
            children: [{ id: "skill-islamic", name: "SKILL.md", type: "file" }],
          },
          {
            id: "sb-dir",
            name: "banking-ai",
            type: "folder",
            children: [{ id: "skill-banking", name: "SKILL.md", type: "file" }],
          },
          {
            id: "sc-dir",
            name: "ca-cpa-practice",
            type: "folder",
            children: [{ id: "skill-cacpa", name: "SKILL.md", type: "file" }],
          },
        ],
      },
      {
        id: "agents-dir",
        name: "agents",
        type: "folder",
        badges: ["subagents"],
        children: [
          { id: "agent-researcher", name: "researcher.md", type: "file" },
          { id: "agent-auditor", name: "auditor.md", type: "file" },
          { id: "agent-reviewer", name: "code-reviewer.md", type: "file" },
        ],
      },
    ],
  },
  {
    id: "plugin-dir",
    name: ".claude-plugin",
    type: "folder",
    badges: ["plugins"],
    children: [
      { id: "plugin-json", name: "plugin.json", type: "file" },
      { id: "plugin-mkt", name: "marketplace.json", type: "file" },
    ],
  },
  {
    id: "specs-dir",
    name: "specs",
    type: "folder",
    badges: ["sdd"],
    children: [{ id: "spec-fte", name: "digital-fte.spec.md", type: "file" }],
  },
  {
    id: "evals-dir",
    name: "evals",
    type: "folder",
    badges: ["evals"],
    children: [{ id: "eval-config", name: "eval_config.yaml", type: "file" }],
  },
  {
    id: "src-dir",
    name: "src",
    type: "folder",
    badges: ["code"],
    children: [{ id: "src-main", name: "main.py", type: "file" }],
  },
  { id: "claude-md", name: "CLAUDE.md", type: "file", badges: ["memory"] },
  { id: "mcp-json", name: ".mcp.json", type: "file", badges: ["mcp"] },
];

var BADGES = {
  config: { bg: "#3a2a1a", color: "#d4a574", border: "#5a3a2a" },
  hooks: { bg: "#3a1a2a", color: "#d474a5", border: "#5a1a3a" },
  personal: { bg: "#2a2a2a", color: "#999", border: "#444" },
  deprecated: { bg: "#3a2020", color: "#c07060", border: "#5a3030" },
  skill: { bg: "#1a3a2a", color: "#74d4a5", border: "#1a5a3a" },
  agents: { bg: "#1a2a3a", color: "#74a5d4", border: "#1a3a5a" },
  subagents: { bg: "#1a2a3a", color: "#74a5d4", border: "#1a3a5a" },
  plugins: { bg: "#2a2a1a", color: "#b4a574", border: "#4a4a2a" },
  sdd: { bg: "#3a2a1a", color: "#d4b474", border: "#5a3a1a" },
  evals: { bg: "#3a2a2a", color: "#d4a5a5", border: "#5a3a3a" },
  code: { bg: "#2a3a1a", color: "#a5d474", border: "#3a5a1a" },
  memory: { bg: "#1a3a3a", color: "#74d4d4", border: "#1a5a5a" },
  mcp: { bg: "#2a1a3a", color: "#a574d4", border: "#3a1a5a" },
};

function CardIcon(props) {
  var s = {
    stroke: "#c47a50",
    strokeWidth: 1.5,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  var icons = {
    claudemd: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
    settings: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <circle cx="8" cy="6" r="2" fill="#c47a5030" />
        <circle cx="16" cy="12" r="2" fill="#c47a5030" />
        <circle cx="10" cy="18" r="2" fill="#c47a5030" />
      </svg>
    ),
    skills: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    mcp: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="9" y1="12" x2="15" y2="7" />
        <line x1="9" y1="12" x2="15" y2="17" />
      </svg>
    ),
    agents: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="18" cy="9" r="2.5" />
        <path d="M21 21v-1.5a3 3 0 00-3-3h-.5" />
      </svg>
    ),
    plugins: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 4V2" />
        <path d="M15 4V2" />
        <line x1="4" y1="10" x2="20" y2="10" />
        <line x1="12" y1="10" x2="12" y2="20" />
      </svg>
    ),
    commands: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    specs: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    hooks: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
        <path d="M12 3v6" />
        <path d="M8 9h8" />
        <path d="M8 9v4a4 4 0 004 4v0a4 4 0 004-4V9" />
        <path d="M12 17v4" />
      </svg>
    ),
  };
  return icons[props.name] || null;
}

var CARDS = [
  {
    icon: "claudemd",
    title: "CLAUDE.md",
    desc: "How your Digital FTE remembers identity, constraints, and workflow across sessions. Your project's persistent memory.",
    file: "claude-md",
  },
  {
    icon: "settings",
    title: "Settings & Permissions",
    desc: "Configure behaviour, tool access, lifecycle hooks, and safety guardrails. All in one settings.json.",
    file: "settings",
  },
  {
    icon: "commands",
    title: "Custom Slash Commands",
    desc: "Saved workflows you can invoke with a keystroke.",
    file: "cmd-deploy",
    dep: true,
  },
  {
    icon: "skills",
    title: "Skills",
    desc: "Teach your Digital FTE specialised domain knowledge it loads autonomously when needed.",
    file: "skill-finance",
  },
  {
    icon: "mcp",
    title: "MCP Servers",
    desc: "Connect to external tools, APIs, and services via a standard protocol.",
    file: "mcp-json",
  },
  {
    icon: "hooks",
    title: "Hooks",
    desc: "Run custom scripts automatically before or after your agent's tool calls.",
    file: "settings",
  },
  {
    icon: "agents",
    title: "Subagents",
    desc: "Custom subagents with YAML frontmatter. Built-in: Explore (fast search), Plan (read-only research), general-purpose (all tools).",
    file: "agent-researcher",
  },
  {
    icon: "plugins",
    title: "Plugins",
    desc: "Package skills, agents, hooks, and MCP servers into shareable, distributable extensions.",
    file: "plugin-json",
  },
  {
    icon: "specs",
    title: "Specs & Evals",
    desc: "Define what the FTE must do with typed contracts, then measure quality with LLM-as-judge.",
    file: "spec-fte",
  },
];

var FILES = {};
FILES["claude-md"] = {
  fn: "CLAUDE.md",
  lang: "md",
  lines: [
    {
      c: "# Digital FTE: Financial Analyst",
      n: "CLAUDE.md is persistent memory — loaded every session start. Hierarchical: project root, nested dirs, ~/.claude/CLAUDE.md (global). [Book: Ch.3]",
    },
    { c: "" },
    { c: "## Identity" },
    { c: "" },
    { c: "You are a Financial Analyst Digital FTE specializing in" },
    { c: "variance analysis, forecasting, and CFO-ready reporting." },
    {
      c: "You operate under the Agent Factory methodology:",
      n: "Core thesis: specs define work, skills package execution, humans verify. [Book: Thesis]",
    },
    { c: "specs define work, skills package execution, humans verify." },
    { c: "" },
    {
      c: "## Key Commands",
      n: "List commands so Claude doesn't waste time scanning the codebase. Anthropic best practice.",
    },
    { c: "- `uv run pytest` - Run tests" },
    { c: "- `uv run pyright` - Type check" },
    { c: "- `/deploy-fte` - Deploy to staging" },
    { c: "" },
    { c: "## Constraints", n: "Without guardrails, agents drift." },
    { c: "" },
    {
      c: "- NEVER make final investment recommendations",
      n: "AI executes, professionals judge. [Book: Part 3 Governing Principle]",
    },
    { c: "- ALWAYS cite data sources with dates" },
    { c: "- ESCALATE when variance > 15% or regulatory risk" },
    { c: "" },
    { c: "## MCP Tools" },
    {
      c: "- `financial-data` for market data",
      n: "Configured in .mcp.json at project root. [Book: Ch.37]",
    },
    { c: "- `google-sheets` for spreadsheet ops" },
    { c: "- `slack` for posting to #finance" },
  ],
};

FILES["settings"] = {
  fn: ".claude/settings.json",
  lang: "json",
  lines: [
    {
      c: "{",
      n: "Project settings: permissions, hooks, env. Committed to git (team-shared). Personal overrides in settings.local.json (gitignored).",
    },
    {
      c: '  "permissions": {',
      n: "Allow/deny use glob patterns to control tool access.",
    },
    { c: '    "allow": [' },
    {
      c: '      "Read(specs/*)",',
      n: "Can read specs. SDD requires specs before execution. [Book: Ch.5]",
    },
    {
      c: '      "Write(reports/*)",',
      n: "Can write reports but NOT modify specs or settings.",
    },
    {
      c: '      "mcp:financial-data",',
      n: "MCP granted per-server. No blanket access. [Book: Ch.37]",
    },
    { c: '      "mcp:google-sheets",' },
    {
      c: '      "Bash(uv run pytest*)",',
      n: "Auto-approve test runs. Reduces approval fatigue.",
    },
    { c: '      "Bash(uv run pyright*)"' },
    { c: "    ]," },
    { c: '    "deny": [' },
    {
      c: '      "Write(.claude/*)",',
      n: "Cannot modify its own config. Prevents privilege escalation.",
    },
    { c: '      "Bash(rm -rf*)"' },
    { c: "    ]" },
    { c: "  }," },
    {
      c: '  "hooks": {',
      n: "Hooks are lifecycle triggers configured HERE in settings.json. Events: PreToolUse, PostToolUse, SessionStart, Stop, etc. [Book: Ch.3]",
    },
    { c: '    "PreToolUse": [' },
    { c: "      {" },
    {
      c: '        "matcher": "Bash",',
      n: "Matcher filters which tool fires this hook. 'Bash' = shell commands. 'Edit|Write' = file changes.",
    },
    { c: '        "hooks": [' },
    { c: "          {" },
    {
      c: '            "type": "command",',
      n: "Four types: command (shell), http (POST), prompt (LLM judge), agent (subagent check).",
    },
    {
      c: '            "command": "jq -r .tool_input.command | grep -q \'rm -rf\' && exit 2 || exit 0",',
      n: "Exit code 2 = BLOCK the action. Exit 0 = allow. This blocks destructive rm commands.",
    },
    { c: '            "timeout": 5' },
    { c: "          }" },
    { c: "        ]" },
    { c: "      }" },
    { c: "    ]," },
    { c: '    "PostToolUse": [' },
    { c: "      {" },
    {
      c: '        "matcher": "Edit|Write",',
      n: "After any file edit, auto-format. PostToolUse hooks guarantee consistency.",
    },
    { c: '        "hooks": [' },
    {
      c: '          { "type": "command", "command": "uv run ruff format \\"$CLAUDE_FILE_PATHS\\"" }',
    },
    { c: "        ]" },
    { c: "      }" },
    { c: "    ]," },
    { c: '    "SessionStart": [' },
    { c: "      {" },
    {
      c: '        "hooks": [',
      n: "SessionStart injects context automatically. Stdout becomes context.",
    },
    {
      c: '          { "type": "command", "command": "git status --short && cat TODO.md" }',
    },
    { c: "        ]" },
    { c: "      }" },
    { c: "    ]" },
    { c: "  }," },
    { c: '  "env": {', n: "Environment variables for hooks and MCP servers." },
    { c: '    "JURISDICTION": "PK"' },
    { c: "  }" },
    { c: "}" },
  ],
};

FILES["settings-local"] = {
  fn: ".claude/settings.local.json",
  lang: "json",
  lines: [
    {
      c: "{",
      n: "Personal overrides — gitignored. For your local API keys and extra permissions.",
    },
    { c: '  "permissions": {' },
    {
      c: '    "allow": ["Bash(curl*)", "mcp:slack"]',
      n: "Your personal dev needs. Team settings don't grant these.",
    },
    { c: "  }," },
    { c: '  "env": {' },
    {
      c: '    "FINANCIAL_DATA_KEY": "sk-your-key",',
      n: "Personal keys stay here. Never committed to git.",
    },
    { c: '    "SLACK_TOKEN": "xoxb-your-token"' },
    { c: "  }" },
    { c: "}" },
  ],
};

FILES["cmd-deploy"] = {
  fn: ".claude/commands/deploy-fte.md",
  lang: "md",
  lines: [
    {
      c: "# /deploy-fte",
      n: "Slash commands: .md files in commands/. Being replaced by Skills — skills are model-invoked (automatic), commands are user-invoked (manual). [Book: Ch.3]",
    },
    { c: "" },
    { c: "Deploy the current Digital FTE to staging." },
    { c: "Use $ARGUMENTS for target override." },
    { c: "" },
    {
      c: "1. Run evals — abort if any fail",
      n: "Evals before deploy. Always. [Book: Ch.47]",
    },
    { c: "2. Build Docker image and push" },
    { c: "3. Deploy via ArgoCD" },
    { c: "4. Run smoke tests" },
    { c: "5. Post results to #deployments Slack" },
  ],
};

FILES["skill-finance"] = {
  fn: ".claude/skills/finance-analyst/SKILL.md",
  lang: "yaml",
  lines: [
    {
      c: "---",
      n: "SKILL.md uses YAML frontmatter. 'name' and 'description' are required. Claude reads description to auto-load. [Book: Ch.39]",
    },
    { c: "name: finance-analyst" },
    {
      c: "description: >",
      n: "Be specific — this determines when Claude loads the skill autonomously.",
    },
    { c: "  Perform financial variance analysis decomposing P&L" },
    { c: "  variances into volume, price, and mix components." },
    { c: "  Use for budget vs actual, quarterly review, CFO briefings." },
    {
      c: "---",
      n: "Below frontmatter = instructions Claude follows when skill is active.",
    },
    { c: "" },
    {
      c: "# Finance Analyst Skill",
      n: "The factory's production unit — domain expertise packaged as reusable capability. [Book: Part 3, Ch.39]",
    },
    { c: "" },
    { c: "## Methodology" },
    { c: "" },
    { c: "### Step 1: Decomposition" },
    { c: "Break each P&L variance into:" },
    { c: "- Volume: delta_Q x P_budget" },
    { c: "- Price: delta_P x Q_actual" },
    {
      c: "- Mix: residual interaction",
      n: "IDFA methodology — Intent-Driven Financial Architecture. [Book: Ch.17]",
    },
    { c: "" },
    { c: "### Step 2: Controllability" },
    { c: "- Within management control (pricing, headcount)" },
    {
      c: "- Outside control (FX, regulation)",
      n: "Makes output CFO-ready. Executives need to know what they can ACT on.",
    },
    { c: "" },
    { c: "### Step 3: Forward Implication" },
    { c: "State impact on full-year forecast." },
    { c: "" },
    {
      c: "## Escalation",
      n: "Every SKILL.md MUST have escalation. AI executes; professionals judge. [Book: Part 3]",
    },
    { c: "- Variance > 15% -> flag for CFO" },
    { c: "- Restatement risk -> STOP and escalate" },
    { c: "- Multi-jurisdiction tax -> route to tax team" },
  ],
};

FILES["skill-legal"] = {
  fn: ".claude/skills/legal-reviewer/SKILL.md",
  lang: "yaml",
  lines: [
    { c: "---" },
    { c: "name: legal-reviewer" },
    { c: "description: >" },
    { c: "  Review contracts for risk factors, missing clauses," },
    {
      c: "  and compliance across US, UK, Pakistan jurisdictions.",
      n: "Jurisdiction-specific knowledge is the moat. [Book: Ch.21]",
    },
    { c: "---" },
    { c: "" },
    { c: "# Legal Document Reviewer" },
    { c: "" },
    { c: "## Jurisdictions" },
    { c: "- US (Federal + CA, NY, TX, DE)" },
    { c: "- UK (Companies Act 2006, GDPR)" },
    { c: "- Pakistan (Contract Act 1872, Companies Act 2017)" },
    { c: "" },
    { c: "## Risk Categories" },
    { c: "- Liability caps and indemnification" },
    { c: "- IP assignment and ownership" },
    { c: "- Data protection and privacy" },
    { c: "" },
    {
      c: "## Escalation",
      n: "Agent NEVER provides legal advice — analysis only. Attorney makes judgments. [Book: Part 3]",
    },
    { c: "- Ambiguous clauses -> attorney review" },
    { c: "- Regulatory findings -> compliance officer" },
  ],
};

FILES["skill-islamic"] = {
  fn: ".claude/skills/islamic-finance/SKILL.md",
  lang: "yaml",
  lines: [
    { c: "---" },
    { c: "name: islamic-finance" },
    { c: "description: >" },
    {
      c: "  Analyze Shariah-compliant instruments. Verify AAOIFI",
      n: "AAOIFI sets global Shariah accounting standards. [Book: Ch.19]",
    },
    { c: "  compliance for Sukuk, Murabaha, Ijara, Takaful." },
    { c: "---" },
    { c: "" },
    { c: "# Islamic Finance Skill" },
    { c: "" },
    { c: "## Instruments" },
    { c: "- Murabaha: Cost-plus financing" },
    { c: "- Ijara: Lease-based financing" },
    { c: "- Musharakah: Joint venture" },
    { c: "- Sukuk: Islamic bonds (asset-backed)" },
    { c: "- Takaful: Cooperative insurance" },
    { c: "" },
    {
      c: "## Shariah Compliance Checks",
      n: "Foundational prohibitions. Every transaction must clear all four.",
    },
    { c: "- No riba (interest/usury)" },
    { c: "- No gharar (excessive uncertainty)" },
    { c: "- No maysir (gambling)" },
    { c: "- Asset-backing verified" },
    { c: "" },
    { c: "## Escalation", n: "Agent can analyze but NEVER issue a fatwa." },
    { c: "- Novel structures -> Shariah board review" },
    { c: "- Cross-jurisdiction -> senior scholar" },
  ],
};

FILES["skill-banking"] = {
  fn: ".claude/skills/banking-ai/SKILL.md",
  lang: "yaml",
  lines: [
    { c: "---" },
    { c: "name: banking-ai" },
    {
      c: "description: >",
      n: "Most comprehensive Part 3 chapter: IFRS 9, Basel III/IV, AML across 7 jurisdictions. [Book: Ch.20]",
    },
    { c: "  Banking regulatory compliance: IFRS 9 ECL, Basel III/IV" },
    { c: "  capital adequacy, AML/KYC screening." },
    { c: "---" },
    { c: "" },
    { c: "# Banking AI Skill" },
    { c: "" },
    { c: "## Frameworks" },
    {
      c: "- IFRS 9: Expected Credit Loss (3 stages)",
      n: "Performing -> underperforming -> non-performing.",
    },
    { c: "- Basel III/IV: Capital requirements" },
    { c: "- AML: FATF guidelines" },
    { c: "" },
    { c: "## Jurisdictions" },
    { c: "- US (Dodd-Frank) | UK (PRA, FCA) | EU (EBA)" },
    {
      c: "- Pakistan (SBP) | UAE | Saudi | Bahrain",
      n: "Seven jurisdictions with unique regulatory overlays.",
    },
    { c: "" },
    {
      c: "## Escalation",
      n: "SAR filing is a legal obligation that cannot be delegated.",
    },
    { c: "- SAR filing -> compliance officer" },
    { c: "- SICR borderline -> credit committee" },
  ],
};

FILES["skill-cacpa"] = {
  fn: ".claude/skills/ca-cpa-practice/SKILL.md",
  lang: "yaml",
  lines: [
    { c: "---" },
    { c: "name: ca-cpa-practice" },
    { c: "description: >", n: "[Book: Ch.18]" },
    { c: "  Audit engagements, tax computation, advisory" },
    { c: "  services for CA/CPA firms." },
    { c: "---" },
    { c: "" },
    { c: "# CA/CPA Practice Skill" },
    { c: "" },
    { c: "## Audit Workflow" },
    { c: "1. Materiality calculation" },
    {
      c: "2. Risk assessment (inherent + control)",
      n: "Agent calculates; audit opinion requires licensed CA/CPA.",
    },
    { c: "3. Sample size determination" },
    { c: "4. Workpaper generation" },
    { c: "" },
    { c: "## Tax Jurisdictions" },
    {
      c: "- Pakistan (ITO 2001) | US (IRC) | UK (HMRC)",
      n: "Jurisdiction-aware tax. [Book: Ch.18]",
    },
    { c: "" },
    { c: "## Escalation" },
    {
      c: "- Audit opinion -> licensed CPA/CA only",
      n: "Closing opinion always requires licensed professional.",
    },
    { c: "- Fraud indicators -> engagement partner" },
  ],
};

FILES["agent-researcher"] = {
  fn: ".claude/agents/researcher.md",
  lang: "yaml",
  lines: [
    {
      c: "---",
      n: "Subagent files use YAML frontmatter for config + Markdown body as the system prompt. Store in .claude/agents/ (project) or ~/.claude/agents/ (user-level). [Book: Ch.3]",
    },
    {
      c: "name: researcher",
      n: "'name' and 'description' are required. Claude reads 'description' to decide when to auto-delegate.",
    },
    {
      c: "description: >",
      n: "Be specific — this determines when Claude delegates to this subagent.",
    },
    { c: "  Research specialist that gathers information from" },
    { c: "  multiple sources and returns structured findings." },
    {
      c: "tools: Read, Grep, Glob, Bash, WebFetch",
      n: "Allowlist of tools. Omit to inherit all tools. Use 'disallowedTools' to deny specific ones.",
    },
    {
      c: "model: haiku",
      n: "Model aliases: sonnet, opus, haiku, or 'inherit' (default). Route cheap tasks to Haiku to save tokens.",
    },
    {
      c: "mcpServers: financial-data, company-docs",
      n: "MCP servers this subagent can access. Can reference configured servers or inline definitions.",
    },
    {
      c: "memory: project",
      n: "Persistent memory: 'user' (global), 'project' (shared via git), 'local' (gitignored). Subagent builds knowledge over time.",
    },
    { c: "---" },
    { c: "" },
    {
      c: "You are a research specialist. Gather information from",
      n: "Below frontmatter = system prompt. Subagents get their own context window and tools. They run in parallel.",
    },
    { c: "multiple sources and return structured findings." },
    { c: "" },
    { c: "## Output Format" },
    {
      c: "Return JSON: { sources, findings, conflicts, confidence }",
      n: "Flagging conflicts lets humans exercise judgment. [Book: Thesis]",
    },
    { c: "" },
    { c: "## Rules" },
    { c: "- Verify claims across 2+ sources" },
    { c: "- Score source reliability 0-1" },
    { c: "- Flag contradictions explicitly" },
    { c: "" },
    {
      c: "Update your agent memory as you discover key data sources",
      n: "When memory is enabled, subagent can persist learnings across sessions.",
    },
    { c: "and recurring patterns in this project." },
  ],
};

FILES["agent-auditor"] = {
  fn: ".claude/agents/auditor.md",
  lang: "yaml",
  lines: [
    {
      c: "---",
      n: "This subagent verifies OTHER agents' outputs. QA in the production line.",
    },
    { c: "name: auditor" },
    { c: "description: >" },
    { c: "  Verify agent outputs against specs, domain rules, and" },
    { c: "  regulatory requirements. QA gate before human review." },
    {
      c: "tools: Read, Grep, Glob, Bash",
      n: "Read-only focus — auditor inspects, doesn't modify.",
    },
    {
      c: "permissionMode: dontAsk",
      n: "Modes: default, acceptEdits, dontAsk, bypassPermissions, plan. 'dontAsk' auto-denies prompts.",
    },
    {
      c: "maxTurns: 20",
      n: "Limit agentic turns to prevent runaway verification loops.",
    },
    { c: "---" },
    { c: "" },
    {
      c: "You verify outputs against specs and domain rules.",
      n: "Principle 3: Verification as Core Step. [Book: Ch.6]",
    },
    { c: "" },
    { c: "## Checks" },
    { c: "- Data freshness (reject > 7 days)" },
    { c: "- Calculation accuracy (re-derive figures)" },
    { c: "- Regulatory compliance (jurisdiction)" },
    {
      c: "- Schema compliance (matches spec contract)",
      n: "SDD end-to-end. [Book: Ch.5]",
    },
  ],
};

FILES["agent-reviewer"] = {
  fn: ".claude/agents/code-reviewer.md",
  lang: "yaml",
  lines: [
    {
      c: "---",
      n: "Create subagents interactively with /agents command, or write .md files manually.",
    },
    { c: "name: code-reviewer" },
    {
      c: "description: >",
      n: "Include 'use proactively' to encourage Claude to auto-delegate.",
    },
    { c: "  Expert code review. Use proactively after code changes." },
    { c: "  Checks quality, security, and best practices." },
    {
      c: "tools: Read, Grep, Glob, Bash",
      n: "No Write or Edit — reviewer inspects, doesn't modify. Least privilege.",
    },
    { c: "model: sonnet" },
    {
      c: "skills:",
      n: "'skills' injects full skill content into subagent context at startup. Not inherited from parent.",
    },
    { c: "  - api-conventions" },
    { c: "---" },
    { c: "" },
    { c: "You are a senior code reviewer ensuring high standards." },
    { c: "" },
    { c: "When invoked:" },
    { c: "1. Run git diff to see recent changes" },
    { c: "2. Focus on modified files" },
    { c: "3. Begin review immediately" },
    { c: "" },
    {
      c: "## Built-in Subagents",
      n: "Claude Code includes built-in subagents: Explore (Haiku, read-only, fast codebase search), Plan (research for plan mode), and general-purpose (all tools, complex tasks). Subagents cannot spawn other subagents.",
    },
  ],
};

FILES["plugin-json"] = {
  fn: ".claude-plugin/plugin.json",
  lang: "json",
  lines: [
    {
      c: "{",
      n: "plugin.json is the manifest. Lives in .claude-plugin/ at plugin root. Only plugin.json goes inside .claude-plugin/ — skills, agents, hooks go at root level.",
    },
    {
      c: '  "name": "agentfactory-finance",',
      n: "Install: claude plugin install agentfactory-finance@marketplace",
    },
    { c: '  "description": "Agent Factory financial analysis Digital FTE",' },
    { c: '  "version": "2.1.0",' },
    {
      c: '  "skills": [',
      n: "Skills bundled. Each has SKILL.md with YAML frontmatter.",
    },
    { c: '    "skills/finance-analyst",' },
    { c: '    "skills/legal-reviewer",' },
    { c: '    "skills/islamic-finance",' },
    { c: '    "skills/banking-ai",' },
    { c: '    "skills/ca-cpa-practice"' },
    { c: "  ]," },
    { c: '  "agents": ["agents/researcher.md", "agents/auditor.md"],' },
    {
      c: '  "hooks": "hooks/hooks.json",',
      n: "Plugin hooks config. Same format as hooks in settings.json.",
    },
    { c: '  "mcp_servers": {', n: "MCP servers auto-configure on install." },
    {
      c: '    "financial-data": { "command": "npx", "args": ["-y", "@agentfactory/mcp-financial-data"] }',
    },
    { c: "  }" },
    { c: "}" },
  ],
};

FILES["plugin-mkt"] = {
  fn: ".claude-plugin/marketplace.json",
  lang: "json",
  lines: [
    {
      c: "{",
      n: "Marketplace catalog. Add: claude plugin marketplace add panaversity/agentfactory-business",
    },
    { c: '  "name": "agentfactory-business",' },
    { c: '  "owner": { "name": "Panaversity" },' },
    { c: '  "plugins": [' },
    { c: "    {" },
    {
      c: '      "name": "agentfactory-finance",',
      n: "Install: claude plugin install agentfactory-finance@agentfactory-business",
    },
    { c: '      "description": "5 domain skills + 2 agents",' },
    { c: '      "version": "2.1.0",' },
    {
      c: '      "source": { "source": "github", "repo": "panaversity/agentfactory-finance" }',
    },
    { c: "    }," },
    { c: "    {" },
    {
      c: '      "name": "agentfactory-islamic-finance",',
      n: "Standalone Islamic finance plugin. [Book: Ch.19]",
    },
    { c: '      "description": "Shariah compliance, Sukuk, Murabaha"' },
    { c: "    }" },
    { c: "  ]" },
    { c: "}" },
  ],
};

FILES["mcp-json"] = {
  fn: ".mcp.json",
  lang: "json",
  lines: [
    {
      c: "{",
      n: ".mcp.json at project root. Committed to git for team sharing. MCP = universal tool protocol. [Book: Ch.37]",
    },
    { c: '  "mcpServers": {' },
    { c: '    "financial-data": {' },
    { c: '      "command": "npx",' },
    {
      c: '      "args": ["-y", "@agentfactory/mcp-financial-data"],',
      n: "MCP servers are npm packages. N+M instead of N*M integrations.",
    },
    {
      c: '      "env": { "API_KEY": "${FINANCIAL_DATA_KEY}" }',
      n: "Env vars resolved from settings.json or settings.local.json.",
    },
    { c: "    }," },
    {
      c: '    "google-sheets": { "command": "npx", "args": ["-y", "@anthropic/mcp-google-sheets"] },',
    },
    {
      c: '    "slack": { "command": "npx", "args": ["-y", "@anthropic/mcp-slack"] },',
    },
    {
      c: '    "company-docs": {',
      n: "Internal doc search via MCP. RAG in the tool layer. [Book: Ch.43]",
    },
    { c: '      "command": "npx", "args": ["-y", "@agentfactory/mcp-rag"]' },
    { c: "    }" },
    { c: "  }" },
    { c: "}" },
  ],
};

FILES["spec-fte"] = {
  fn: "specs/digital-fte.spec.md",
  lang: "md",
  lines: [
    {
      c: "# Digital FTE Spec: Financial Analyst",
      n: "In SDD, specs are primary artifact. Spec = WHAT; Claude Code = HOW. [Book: Ch.5]",
    },
    { c: "" },
    { c: "## Input Contract", n: "Typed contracts. No ambiguity." },
    { c: "```typescript" },
    { c: "interface AnalysisRequest {" },
    { c: "  period: 'Q1'|'Q2'|'Q3'|'Q4'|'YTD';" },
    { c: "  department: string;" },
    { c: "  detail_level: 'summary'|'cfo_brief';" },
    { c: "}" },
    { c: "```" },
    { c: "" },
    { c: "## Output Contract" },
    { c: "```typescript" },
    { c: "interface AnalysisReport {" },
    { c: "  executive_summary: string;" },
    { c: "  variances: VarianceItem[];" },
    {
      c: "  requires_human_review: boolean;",
      n: "Forces agent to declare if human review needed. [Book: Part 3]",
    },
    { c: "}" },
    { c: "```" },
    { c: "" },
    { c: "## Acceptance Criteria", n: "Become your eval suite. [Book: Ch.47]" },
    { c: "- Calculations match +/- 0.01%" },
    { c: "- Sources cited with timestamps" },
    { c: "- Report in < 60 seconds" },
  ],
};

FILES["eval-config"] = {
  fn: "evals/eval_config.yaml",
  lang: "yaml",
  lines: [
    {
      c: "# Digital FTE Eval Suite",
      n: "Without evals you're guessing. [Book: Ch.47]",
    },
    { c: "" },
    {
      c: "evaluator: llm-as-judge",
      n: "One model grades another against rubrics.",
    },
    { c: "model: claude-sonnet-4-20250514" },
    { c: "" },
    { c: "test_cases:" },
    { c: "  - name: variance_analysis" },
    { c: "    input: { period: Q3, dept: Engineering }" },
    { c: "    expected: { accurate: true }" },
    { c: "" },
    { c: "  - name: escalation_trigger" },
    { c: "    input: { scenario: variance_20pct }" },
    { c: "    expected:", n: "If agent doesn't flag this, it FAILS." },
    { c: "      requires_human_review: true" },
    { c: "" },
    { c: "scoring:" },
    {
      c: "  minimum_pass: 3",
      n: "5=perfect, 3=acceptable, 1=fail. <3 blocks deploy.",
    },
  ],
};

FILES["src-main"] = {
  fn: "src/main.py",
  lang: "python",
  lines: [
    {
      c: '"""Digital FTE: Financial Analyst"""',
      n: "You wrote the SPEC; Claude Code generated this. [Book: Part 4, Ch.36]",
    },
    { c: "" },
    { c: "from agent_factory import AgentFactory" },
    { c: "" },
    { c: "def create_analyst():" },
    {
      c: '    factory = AgentFactory("CLAUDE.md")',
      n: "Reads CLAUDE.md + .claude/ for skills, agents, hooks.",
    },
    {
      c: '    factory.load_skill("finance-analyst")',
      n: "From .claude/skills/finance-analyst/SKILL.md",
    },
    { c: '    factory.load_skill("banking-ai")' },
    { c: '    factory.connect_mcp(".mcp.json")' },
    { c: '    factory.deploy_agent("researcher")' },
    { c: '    factory.deploy_agent("auditor")' },
    { c: "    return factory.build()", n: "Intent -> Factory -> Outcome." },
    { c: "" },
    { c: 'if __name__ == "__main__":' },
    { c: "    create_analyst().run()" },
  ],
};

var CMDS = {
  "/help":
    "  BOOK COMMANDS\n  /thesis  /sdd   /mcp    /fte\n  /seven   /stack  /parts\n  /deploy  /eval   /doctor\n\n  CLAUDE CODE FEATURES\n  /agents  /fork    /loop\n  /remote-control   /tasks\n  /agent-teams",
  "/thesis":
    "  THE AGENT FACTORY THESIS\n  SaaS -> subscriptions\n  Agent Factory -> RESULTS\n  Intent -> Factory -> Outcome",
  "/sdd":
    "  SPEC-DRIVEN DEVELOPMENT\n  L1: Lightweight specs\n  L2: Specs + test contracts\n  L3: Orchestration (Memory+Tasks)\n  Specs are the new syntax.",
  "/mcp":
    "  MODEL CONTEXT PROTOCOL\n  The USB-C of AI tools.\n  N*M -> N+M integrations.",
  "/fte":
    "  DIGITAL FTE\n  Specs + Domain Expertise\n  + Engineering + Oversight\n  = Digital FTE",
  "/seven":
    "  1 Bash is the Key\n  2 Code as Universal Interface\n  3 Verification as Core Step\n  4 Small Reversible Steps\n  5 Persist State in Files\n  6 Constraints and Safety\n  7 Observability",
  "/stack":
    "  ┌──────────────┐\n  │   OUTCOME    │\n  ├──────────────┤\n  │   FACTORY    │\n  ├──────────────┤\n  │   INTENT     │\n  └──────────────┘",
  "/parts":
    "  9 PARTS, 60+ CHAPTERS\n  1 General Agents      [7]\n  2 Workflow Primitives  [6]\n  3 Business Domains    [16]\n  4 Programming AI Era   [3]\n  5 Custom Agents       [16]\n  6 Cloud Native        [12]\n  7 LLMOps  8 TS  9 Voice",
  "/deploy":
    "  ✓ Evals: 5/5 passed\n  ✓ Docker built\n  ✓ ArgoCD deployed\n  ✓ Smoke tests passed\n  FTE v2.1.0 -> LIVE ✓",
  "/eval":
    "  ✓ variance_analysis   5/5\n  ✓ escalation_trigger  5/5\n  ✓ islamic_compliance  5/5\n  ✓ banking_regulatory  4/5\n  ALL PASSED ✓",
  "/doctor":
    "  ✓ CLAUDE.md loaded\n  ✓ settings.json (3 hooks)\n  ✓ 5 skills\n  ✓ 3 subagents\n  ✓ plugin.json valid\n  ✓ 4 MCP servers\n  All systems go ✓",
  "/agents":
    "  CONFIGURED SUBAGENTS\n  ✓ researcher    (project, haiku)\n  ✓ auditor       (project, inherit)\n  ✓ code-reviewer (project, sonnet)\n\n  BUILT-IN\n  ✓ Explore  (haiku, read-only)\n  ✓ Plan     (inherit, read-only)\n  ✓ general-purpose (inherit, all tools)\n\n  Create: /agents -> Create new agent\n  Manage: claude agents (from CLI)",
  "/fork":
    "  FORK CONVERSATION\n  /fork [name]\n\n  Creates a branch of the current\n  conversation at this point.\n  Both branches continue independently.\n  Useful for exploring alternatives\n  without losing progress.",
  "/loop":
    "  SCHEDULED LOOP\n  /loop 5m check deploy status\n  /loop 2h /review-pr 142\n  /loop check build (default: 10m)\n\n  Recurring prompts on a schedule.\n  Session-scoped — exits with session.\n  Max 50 tasks. 3-day auto-expiry.\n  Uses cron under the hood.",
  "/remote-control":
    "  REMOTE CONTROL ACTIVE\n  Session: digital-fte-finance\n  URL: https://claude.ai/code/s/abc123\n  QR: [press spacebar to show]\n\n  Continue this session from any device:\n  phone, tablet, or another browser.\n  Runs locally — full MCP & tools.\n  Alias: /rc",
  "/tasks":
    "  TASK LIST\n  ✓ Analyze Q3 variance data\n  ✓ Generate decomposition\n  ● Build CFO report       [in progress]\n  ○ Review tax implications\n  ○ Post to #finance Slack\n\n  Ctrl+T to toggle in terminal.\n  Tasks persist across compaction.",
  "/agent-teams":
    "  AGENT TEAMS (Experimental)\n\n  Multiple Claude Code sessions working\n  together as a coordinated team.\n\n  ● Team lead creates & coordinates\n  ● Teammates work independently\n  ● Shared task list for coordination\n  ● Direct messaging between agents\n  ● Shift+Down to cycle teammates\n\n  Enable: CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1\n\n  vs Subagents:\n  Subagents = within one session\n  Agent Teams = separate sessions\n  that communicate with each other",
};

function colorize(t, l) {
  if (!t) return "\u00A0";
  if (
    (l === "bash" || l === "python" || l === "yaml") &&
    t.trimStart().startsWith("#")
  )
    return <span style={{ color: "#6a9955" }}>{t}</span>;
  if (l === "md" && /^#{1,4}\s/.test(t))
    return <span style={{ color: "#c47a50", fontWeight: 600 }}>{t}</span>;
  if (l === "md" && t.startsWith("- "))
    return (
      <span>
        <span style={{ color: "#c47a50" }}>{"- "}</span>
        {t.slice(2)}
      </span>
    );
  if (l === "md" && /^\d+\./.test(t)) {
    var n = t.match(/^\d+\./)[0];
    return (
      <span>
        <span style={{ color: "#c47a50" }}>{n}</span>
        {t.slice(n.length)}
      </span>
    );
  }
  if ((l === "md" || l === "yaml") && t === "---")
    return <span style={{ color: "#c47a5080" }}>{t}</span>;
  if (l === "yaml" && /^[a-z_]+:/.test(t)) {
    var k = t.indexOf(":");
    return (
      <span>
        <span style={{ color: "#569cd6" }}>{t.slice(0, k)}</span>
        {t.slice(k)}
      </span>
    );
  }
  if (l === "md" && t.startsWith("```"))
    return <span style={{ color: "#555" }}>{t}</span>;
  var re = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;
  var p = [];
  var li = 0;
  var m;
  var ki = 0;
  while ((m = re.exec(t)) !== null) {
    if (m.index > li) p.push(<span key={ki++}>{t.slice(li, m.index)}</span>);
    p.push(
      <span key={ki++} style={{ color: "#ce9178" }}>
        {m[0]}
      </span>,
    );
    li = m.index + m[0].length;
  }
  if (li < t.length) p.push(<span key={ki++}>{t.slice(li)}</span>);
  return p.length > 0 ? p : t;
}

function renderNote(t) {
  return t.split(/(\[Book:[^\]]+\])/).map(function (s, i) {
    return s.startsWith("[Book:") ? (
      <span key={i} style={{ color: "#c47a50", fontSize: 11 }}>
        {s}
      </span>
    ) : (
      <span key={i}>{s}</span>
    );
  });
}

function TreeNode(p) {
  var n = p.node,
    d = p.depth,
    sel = p.selected,
    isF = n.type === "folder",
    isO = p.expanded[n.id],
    isA = sel === n.id;
  return (
    <div>
      <div
        onClick={function () {
          isF ? p.onToggle(n.id) : p.onSelect(n.id);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 10px 4px " + (14 + d * 16) + "px",
          cursor: "pointer",
          background: isA ? "#c47a5012" : "transparent",
          borderLeft: isA ? "2px solid #c47a50" : "2px solid transparent",
        }}
        onMouseEnter={function (e) {
          if (!isA) e.currentTarget.style.background = "#ffffff05";
        }}
        onMouseLeave={function (e) {
          if (!isA) e.currentTarget.style.background = "transparent";
        }}
      >
        {isF ? (
          <span
            style={{
              color: "#666",
              fontSize: 9,
              width: 10,
              display: "inline-block",
              transition: "transform .15s",
              transform: isO ? "rotate(90deg)" : "",
            }}
          >
            {"▶"}
          </span>
        ) : (
          <span style={{ width: 10 }} />
        )}
        <span
          style={{
            fontSize: 13,
            color: isA ? "#e8d0b0" : isF ? "#b0a890" : "#908878",
            fontFamily: "'JetBrains Mono',monospace",
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {isF ? "📁 " : "📄 "}
          {n.name}
        </span>
        {n.badges &&
          n.badges.map(function (b) {
            var s = BADGES[b] || {};
            return (
              <span
                key={b}
                style={{
                  fontSize: 9,
                  padding: "1px 6px",
                  borderRadius: 3,
                  background: s.bg || "#222",
                  color: s.color || "#888",
                  border: "1px solid " + (s.border || "#333"),
                  flexShrink: 0,
                }}
              >
                {b}
              </span>
            );
          })}
      </div>
      {isF &&
        isO &&
        n.children &&
        n.children.map(function (c) {
          return (
            <TreeNode
              key={c.id}
              node={c}
              depth={d + 1}
              selected={sel}
              onSelect={p.onSelect}
              expanded={p.expanded}
              onToggle={p.onToggle}
            />
          );
        })}
    </div>
  );
}

function WelcomePage(p) {
  return (
    <div
      style={{
        padding: "36px 44px",
        maxWidth: 820,
        overflowY: "auto",
        flex: 1,
        background: "#0e0c08",
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: "#c47a50",
          fontFamily: "'JetBrains Mono',monospace",
          marginBottom: 8,
          letterSpacing: 1,
        }}
      >
        {"// explore-the-agent-factory"}
      </p>
      <h1
        style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: 34,
          color: "#f0e6d6",
          marginBottom: 4,
          lineHeight: 1.15,
        }}
      >
        {"Learn "}
        <span style={{ color: "#c47a50" }}>The Agent Factory</span>
        <br />
        {"by exploring it."}
      </h1>
      <p
        style={{
          fontSize: 15,
          color: "#998877",
          lineHeight: 1.7,
          margin: "20px 0 12px",
          maxWidth: 620,
        }}
      >
        {
          "This is a simulated Digital FTE project — a real Claude Code project built using the Agent Factory methodology. Every file is genuine: "
        }
        <code
          style={{
            background: "#1a1814",
            padding: "2px 6px",
            borderRadius: 3,
            fontSize: 13,
            color: "#c47a50",
          }}
        >
          settings.json
        </code>
        {" with hooks, "}
        <code
          style={{
            background: "#1a1814",
            padding: "2px 6px",
            borderRadius: 3,
            fontSize: 13,
            color: "#c47a50",
          }}
        >
          SKILL.md
        </code>
        {
          " with YAML frontmatter, agents, plugins, and MCP configs. Click any file to see the real artifact, annotated."
        }
      </p>
      <p
        style={{
          fontSize: 14,
          color: "#776655",
          fontStyle: "italic",
          marginBottom: 32,
        }}
      >
        Open a file. Read the source. Learn. Build.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {CARDS.map(function (c) {
          return (
            <div
              key={c.file}
              onClick={function () {
                p.onNavigate(c.file);
              }}
              style={{
                padding: 18,
                background: "#14120e",
                border: "1px solid #2a2218",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all .15s",
              }}
              onMouseEnter={function (e) {
                e.currentTarget.style.borderColor = "#c47a5050";
                e.currentTarget.style.background = "#1a1610";
              }}
              onMouseLeave={function (e) {
                e.currentTarget.style.borderColor = "#2a2218";
                e.currentTarget.style.background = "#14120e";
              }}
            >
              <div style={{ marginBottom: 10 }}>
                <CardIcon name={c.icon} />
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#e0d4c4",
                  fontWeight: 600,
                  marginBottom: 3,
                }}
              >
                {c.title}
                {c.dep && (
                  <span
                    style={{
                      fontSize: 9,
                      marginLeft: 8,
                      padding: "2px 6px",
                      borderRadius: 3,
                      background: "#3a2020",
                      color: "#c07060",
                      border: "1px solid #5a3030",
                    }}
                  >
                    deprecated
                  </span>
                )}
              </div>
              <div style={{ fontSize: 12, color: "#887766", lineHeight: 1.5 }}>
                {c.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FileView(p) {
  var d = FILES[p.fileId];
  if (!d) return null;
  return (
    <div style={{ flex: 1, overflowY: "auto", background: "#0e0c08" }}>
      <div
        style={{
          borderBottom: "2px solid #c47a50",
          background: "#0e0c08",
          padding: "8px 16px",
          fontSize: 13,
          color: "#c8b8a0",
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        {"● "}
        {d.fn}
      </div>
      <div style={{ background: "#0e0c08" }}>
        {d.lines.map(function (l, i) {
          return (
            <div key={i} style={{ background: "#0e0c08" }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 13,
                  lineHeight: "24px",
                  background: "#0e0c08",
                }}
              >
                <div
                  style={{
                    width: 44,
                    textAlign: "right",
                    paddingRight: 12,
                    color: "#3a3428",
                    userSelect: "none",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div
                  style={{
                    margin: 0,
                    padding: 0,
                    color: "#c8c0b0",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    flex: 1,
                    paddingRight: 16,
                    background: l.n ? "#c47a5005" : "#0e0c08",
                    fontFamily: "inherit",
                  }}
                >
                  {colorize(l.c, d.lang)}
                </div>
              </div>
              {l.n && (
                <div style={{ display: "flex", margin: "2px 0 6px" }}>
                  <div style={{ width: 44, flexShrink: 0 }} />
                  <div
                    style={{
                      flex: 1,
                      padding: "7px 14px 7px 11px",
                      borderLeft: "3px solid #c47a50",
                      background: "#c47a5008",
                      borderRadius: "0 6px 6px 0",
                      fontSize: 12.5,
                      color: "#9a8870",
                      lineHeight: 1.6,
                    }}
                  >
                    {renderNote(l.n)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div style={{ height: 60 }} />
      </div>
    </div>
  );
}

function TerminalPanel() {
  var sh = useState([]);
  var h = sh[0];
  var sH = sh[1];
  var si = useState("");
  var inp = si[0];
  var sI = si[1];
  var ref = useRef(null);
  useEffect(
    function () {
      if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
    },
    [h],
  );
  var run = useCallback(
    function (c) {
      var x = c.trim().toLowerCase();
      if (!x) return;
      var nh = h.concat([{ t: "i", v: c }]);
      if (x === "clear") {
        sH([]);
        sI("");
        return;
      }
      var k = x.startsWith("/") ? x : "/" + x;
      if (CMDS[k]) nh.push({ t: "o", v: CMDS[k] });
      else nh.push({ t: "e", v: "  Unknown: " + x + "\n  Type /help" });
      sH(nh);
      sI("");
    },
    [h],
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        fontFamily: "'JetBrains Mono',monospace",
        background: "#0c0a06",
      }}
    >
      <div
        style={{
          padding: "14px 16px",
          borderBottom: "1px solid #1e1a14",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#c47a50",
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: "#776655",
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            The Agent Factory
          </span>
        </div>
        <div style={{ fontWeight: 700, lineHeight: 1.05, marginBottom: 16 }}>
          <div style={{ fontSize: 26, color: "#c47a5020", letterSpacing: 4 }}>
            EXPLORE
          </div>
          <div style={{ fontSize: 20, color: "#c47a50", letterSpacing: 3 }}>
            THE AGENT
          </div>
          <div style={{ fontSize: 20, color: "#c47a50", letterSpacing: 3 }}>
            FACTORY
          </div>
        </div>
        <p
          style={{
            fontSize: 11,
            color: "#776655",
            lineHeight: 1.5,
            margin: "0 0 14px",
          }}
        >
          {"Learn by doing. Every file is a lesson."}
          <br />
          {"Every folder is a concept."}
        </p>
        <div
          style={{
            fontSize: 10,
            color: "#554433",
            letterSpacing: 1.5,
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          Quick Start
        </div>
        <div style={{ fontSize: 12, color: "#776655", lineHeight: 2 }}>
          <span style={{ color: "#c47a50" }}>/help</span>
          {" - list commands"}
          <br />
          <span style={{ color: "#c47a50" }}>/agents</span>
          {" - manage subagents"}
          <br />
          <span style={{ color: "#c47a50" }}>/loop</span>
          {" - scheduled tasks"}
          <br />
          <span style={{ color: "#c47a50" }}>/fork</span>
          {" - branch conversation"}
          <br />
          <span style={{ color: "#c47a50" }}>/remote-control</span>
          {" - connect remotely"}
        </div>
        <div
          style={{
            fontSize: 10,
            color: "#554433",
            letterSpacing: 1.5,
            margin: "14px 0 6px",
            textTransform: "uppercase",
          }}
        >
          How to Explore
        </div>
        <div style={{ fontSize: 12, color: "#776655", lineHeight: 1.8 }}>
          {"① Browse files on the left"}
          <br />
          {"② Click to learn what it does"}
          <br />
          {"③ Try commands here"}
        </div>
        <div
          style={{
            borderTop: "1px solid #1e1a14",
            marginTop: 14,
            paddingTop: 10,
            fontSize: 11,
            color: "#443322",
            lineHeight: 1.8,
          }}
        >
          {"› version  "}
          <span style={{ color: "#776655" }}>2.1.0</span>
          <br />
          {"› model    "}
          <span style={{ color: "#776655" }}>claude-opus-4-6</span>
          <br />
          {"› project  "}
          <span style={{ color: "#776655" }}>digital-fte-finance</span>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "8px 16px",
          fontSize: 12,
        }}
      >
        {h.map(function (e, i) {
          return (
            <div key={i} style={{ marginBottom: 3 }}>
              {e.t === "i" && (
                <div style={{ color: "#c47a50" }}>
                  {"factory > "}
                  {e.v}
                </div>
              )}
              {e.t === "o" && (
                <div
                  style={{
                    color: "#887766",
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    fontFamily: "inherit",
                  }}
                >
                  {e.v}
                </div>
              )}
              {e.t === "e" && (
                <div
                  style={{
                    color: "#a05040",
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    fontFamily: "inherit",
                  }}
                >
                  {e.v}
                </div>
              )}
            </div>
          );
        })}
        <div ref={ref} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #1e1a14",
          padding: "8px 16px",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#c47a50", fontSize: 12, marginRight: 8 }}>
          {"factory >"}
        </span>
        <input
          value={inp}
          onChange={function (e) {
            sI(e.target.value);
          }}
          onKeyDown={function (e) {
            if (e.key === "Enter") run(inp);
          }}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#c8b8a0",
            fontSize: 12,
            fontFamily: "inherit",
          }}
          placeholder="Type /help for commands..."
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export default function AgentFactoryExplorer() {
  var s1 = useState(null);
  var sel = s1[0];
  var setSel = s1[1];
  var s2 = useState({ "claude-dir": true, "skills-dir": true });
  var exp = s2[0];
  var setExp = s2[1];
  var tog = function (id) {
    setExp(function (p) {
      var n = Object.assign({}, p);
      n[id] = !p[id];
      return n;
    });
  };
  var nav = function (id) {
    setSel(id);
    var up = function (nodes, path) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) {
          path.forEach(function (p) {
            setExp(function (prev) {
              var n = Object.assign({}, prev);
              n[p] = true;
              return n;
            });
          });
          return true;
        }
        if (
          nodes[i].children &&
          up(nodes[i].children, path.concat([nodes[i].id]))
        )
          return true;
      }
      return false;
    };
    up(TREE, []);
  };
  return (
    <div
      data-explorer-root=""
      data-theme="dark"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#0e0c08",
        color: "#c8c0b0",
        colorScheme: "dark",
        fontFamily: "'DM Sans',system-ui",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        [data-explorer-root] {
          color-scheme: dark;
        }
        [data-explorer-root] pre {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          font-size: inherit !important;
          line-height: inherit !important;
          color: inherit !important;
        }
        [data-explorer-root] [class*="codeBlock"],
        [data-explorer-root] [class*="prism-code"],
        [data-explorer-root] [class*="theme-code-block"] {
          background: transparent !important;
          border: none !important;
        }
      ` }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          background: "#0a0806",
          borderBottom: "1px solid #1e1a14",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 12,
            color: "#776655",
            fontFamily: "'JetBrains Mono',monospace",
          }}
        >
          explore-the-agent-factory : digital-fte-finance
        </span>
        <a
          href="https://agentfactory.panaversity.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 11,
            color: "#554433",
            textDecoration: "none",
            padding: "3px 10px",
            borderRadius: 4,
            border: "1px solid #2a2218",
          }}
        >
          {"📖 Read Book"}
        </a>
      </div>
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        <div
          style={{
            width: 260,
            borderRight: "1px solid #1e1a14",
            overflowY: "auto",
            background: "#0c0a06",
            flexShrink: 0,
          }}
        >
          <div
            style={{ padding: "10px 14px", borderBottom: "1px solid #1e1a14" }}
          >
            <span
              style={{
                fontSize: 10,
                letterSpacing: 1.5,
                color: "#554433",
                textTransform: "uppercase",
              }}
            >
              Digital FTE Project
            </span>
          </div>
          {TREE.map(function (n) {
            return (
              <TreeNode
                key={n.id}
                node={n}
                depth={0}
                selected={sel}
                onSelect={nav}
                expanded={exp}
                onToggle={tog}
              />
            );
          })}
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            overflow: "hidden",
            background: "#0e0c08",
          }}
        >
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #1e1a14",
              background: "#0a0806",
              flex: "0 0 auto",
            }}
          >
            <div
              onClick={function () {
                setSel(null);
              }}
              style={{
                padding: "8px 14px",
                fontSize: 12,
                cursor: "pointer",
                background: "#0a0806",
                color: !sel || !FILES[sel] ? "#c8b8a0" : "#776655",
                borderBottom:
                  !sel || !FILES[sel]
                    ? "2px solid #c47a50"
                    : "2px solid transparent",
              }}
            >
              {"● Welcome"}
            </div>
            {sel && FILES[sel] && (
              <div
                style={{
                  padding: "8px 14px",
                  fontSize: 12,
                  color: "#c8b8a0",
                  background: "#0a0806",
                  borderBottom: "2px solid #c47a50",
                  fontFamily: "'JetBrains Mono',monospace",
                }}
              >
                {"● "}
                {FILES[sel].fn}
              </div>
            )}
          </div>
          <div
            style={{
              flex: 1,
              overflow: "auto",
              display: "flex",
              background: "#0e0c08",
            }}
          >
            {sel && FILES[sel] ? (
              <FileView fileId={sel} />
            ) : (
              <WelcomePage onNavigate={nav} />
            )}
          </div>
        </div>
        <div
          style={{
            width: 300,
            borderLeft: "1px solid #1e1a14",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <TerminalPanel />
        </div>
      </div>
    </div>
  );
}
