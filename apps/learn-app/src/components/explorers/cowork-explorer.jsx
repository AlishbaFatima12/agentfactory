import { useState, useEffect, useRef, useCallback } from "react";

var C = {
  bg: "#1c1917",
  sidebar: "#151311",
  border: "#2c2824",
  text: "#e8e0d6",
  textDim: "#a09888",
  textMuted: "#6a6258",
  accent: "#c97d4a",
  accentSoft: "#c97d4a15",
  blue: "#4a9eff",
  blueSoft: "#4a9eff15",
  green: "#4ade80",
  greenSoft: "#4ade8015",
  yellow: "#fbbf24",
  yellowSoft: "#fbbf2415",
  cardBg: "#252220",
  cardBorder: "#333028",
  cardHover: "#2e2a26",
  inputBg: "#252220",
  inputBorder: "#3a3530",
  modalOverlay: "rgba(0,0,0,.7)",
  sidebarHover: "#1e1b18",
  sidebarActive: "#252220",
  approveBtn: "#2d6a3a",
  denyBtn: "#6a2d2d",
  execBorder: "#3a6a3a",
  execBg: "#1a1f18",
  highlight: "#c97d4a18",
  highlightBorder: "#c97d4a40",
  headerBg: "#0e0c0a",
};

// --- SCENARIOS (auto-play demos) ---
var SCENARIOS = [
  {
    title: "Your First Cowork Task",
    intro:
      "You ask Cowork to create a file in a selected folder. Watch the Propose, Approve, Execute workflow.",
    steps: [
      {
        type: "narrator",
        text: "You open Claude Desktop, click the Cowork tab, and select a project folder.",
      },
      {
        type: "user",
        text: "Create a file called hello-world.md with a welcome message.",
      },
      {
        type: "exec",
        items: [
          "Reading ~/Projects/cowork-demo/",
          "Found 0 files in selected folder",
        ],
      },
      {
        type: "claude",
        text: "I'll create that file for you in your cowork-demo folder.",
      },
      {
        type: "approval",
        file: "hello-world.md",
        action: "Create file",
        preview: "# Welcome to Cowork!\nCreated by Claude on March 25, 2026.",
      },
      { type: "exec", items: ["Created hello-world.md (127 bytes)"] },
      {
        type: "claude",
        text: "Done! hello-world.md is now in your cowork-demo folder.",
      },
      {
        type: "narrator",
        text: "Every file write requires your approval. Reads happen automatically within the selected folder.",
      },
    ],
  },
  {
    title: "Folder Access & Security",
    intro: "Cowork can only touch folders you explicitly select or approve.",
    steps: [
      {
        type: "narrator",
        text: "You select ~/Reports as your working folder for this task.",
      },
      {
        type: "user",
        text: "Organize the CSV files in this folder by quarter.",
      },
      {
        type: "exec",
        items: ["Scanning ~/Reports/", "Found 48 CSV files across 4 quarters"],
      },
      {
        type: "approval",
        file: "Organization Plan",
        action: "Move 48 files into subfolders",
        preview:
          "Q1/ (12 files)\nQ2/ (14 files)\nQ3/ (11 files)\nQ4/ (11 files)",
      },
      { type: "exec", items: ["Created 4 subfolders", "Moved 48/48 files"] },
      {
        type: "claude",
        text: "All 48 CSV files organized into quarterly folders. Nothing deleted, only moved.",
      },
    ],
  },
  {
    title: "Projects & Memory",
    intro: "Projects remember your preferences across tasks.",
    steps: [
      {
        type: "narrator",
        text: 'You create a project called "Weekly Reports" with custom instructions.',
      },
      {
        type: "user",
        text: "Use bullet points. Start with executive summaries. Flag changes over 20%.",
      },
      {
        type: "claude",
        text: "Instructions saved. I'll follow these for every task in this project.",
      },
      {
        type: "user",
        text: "My name is Alex. Q2 target is 500 leads.",
      },
      {
        type: "claude",
        text: "Noted. This persists in project memory across sessions.",
      },
      {
        type: "narrator",
        text: "--- New task, same project ---",
      },
      {
        type: "user",
        text: "What do you remember about me?",
      },
      {
        type: "claude",
        text: "You're Alex. Q2 target: 500 leads. Bullet format. Executive summaries first. Flag >20% changes.",
      },
    ],
  },
  {
    title: "Plugins & Connectors",
    intro:
      "Connect Claude to Google Drive, Slack, Notion, and 40+ apps via the Customize panel.",
    steps: [
      {
        type: "narrator",
        text: "You open Customize, click Connectors, and connect Google Drive and Slack.",
      },
      {
        type: "user",
        text: "Create a Q4 report using the sales spreadsheet from Drive and customer feedback from Slack.",
      },
      {
        type: "exec",
        items: [
          'Querying Google Drive: "Q4 Sales"',
          "Querying Slack: #customers, 30 days",
          "Found 47 messages and 1 spreadsheet",
        ],
      },
      {
        type: "claude",
        text: "From two sources:\n- Sheets: Q4 revenue $2.1M (+12%)\n- Slack: 78% positive sentiment\n\nOne prompt pulled from multiple connected services.",
      },
      {
        type: "approval",
        file: "Q4-report.docx",
        action: "Create report",
        preview:
          "Executive Summary\nRegional Performance\nCustomer Feedback\nRecommendations",
      },
    ],
  },
  {
    title: "Document Skills",
    intro: "Built-in skills for xlsx, docx, pptx, and pdf (read-only).",
    steps: [
      {
        type: "user",
        text: "Analyze sales-data.xlsx and add a Summary tab with charts.",
      },
      {
        type: "exec",
        items: [
          "Reading sales-data.xlsx (2,847 rows)",
          "Calculating growth rates",
        ],
      },
      {
        type: "claude",
        text: "Revenue: $4.2M. Top region: West ($1.3M). Growth: +8.3%.",
      },
      {
        type: "approval",
        file: "sales-data.xlsx",
        action: "Add Summary tab + charts",
        preview:
          "Bar chart: Revenue by Region\nTable: Top 5 Products\nLine chart: MoM Growth",
      },
      {
        type: "user",
        text: "Now make a PowerPoint from this.",
      },
      {
        type: "exec",
        items: ["Generating 6 slides from analysis"],
      },
      {
        type: "approval",
        file: "q4-summary.pptx",
        action: "Create 6-slide deck",
        preview:
          "Title > Revenue > Regions > Products > Growth > Recommendations",
      },
    ],
  },
  {
    title: "Dispatch: Phone to Desktop",
    intro: "Send tasks from your phone. Claude works on your desktop files.",
    steps: [
      {
        type: "phone",
        text: "Update the Q3 report with latest numbers from the finance folder.",
      },
      {
        type: "exec",
        items: [
          "Dispatch received on desktop",
          "Reading ~/finance/q3-data.csv",
        ],
      },
      {
        type: "claude",
        text: "Updated: $3.8M (was $3.2M). 12 new entries. Charts regenerated.",
      },
      {
        type: "approval",
        file: "q3-report.docx",
        action: "Update report",
        preview:
          "Executive Summary (new totals)\nRevenue Table (+12 rows)\nCharts (refreshed)",
      },
      {
        type: "notification",
        text: 'Push notification: "Q3 report updated and saved."',
      },
      {
        type: "phone",
        text: "Create a meeting prep doc from last week's action items.",
      },
      {
        type: "claude",
        text: "Created meeting-prep.md with 7 items (3 done, 4 pending). Dispatch keeps full context of your project.",
      },
    ],
  },
  {
    title: "Computer Use",
    intro: "Claude can see your screen, click, and type for apps without APIs.",
    steps: [
      {
        type: "narrator",
        text: "You enable Computer Use in Settings and grant screen permissions.",
      },
      {
        type: "user",
        text: "Open Keynote, make a Q4 presentation, export as PDF.",
      },
      {
        type: "exec",
        items: ["Screenshot taken", "Opening Keynote", "Selecting template"],
      },
      {
        type: "claude",
        text: "Creating 5 slides in Keynote...",
      },
      {
        type: "exec",
        items: ["5 slides complete", "File > Export > PDF", "Saved to Desktop"],
      },
      {
        type: "claude",
        text: "Done! PDF on your Desktop. Computer Use works for any GUI app. For Gmail or Slack, connectors are faster and more reliable.",
      },
    ],
  },
  {
    title: "Scheduled Tasks",
    intro: "Automate recurring work with /schedule or the Scheduled panel.",
    steps: [
      {
        type: "user",
        text: "/schedule\nEvery Monday 8am: read CSVs in ~/Reports, calculate changes, write summary.",
      },
      {
        type: "claude",
        text: "Weekly Marketing Report\nMonday 8:00 AM\nInput: ~/Reports/*.csv\nOutput: ~/Reports/summaries/",
      },
      {
        type: "narrator",
        text: "You confirm. The task is now in the Scheduled panel. Your computer must be awake (or use Keep Awake).",
      },
      {
        type: "exec",
        items: [
          "Running: Weekly Marketing Report",
          "Reading 3 CSV files",
          "Calculating week-over-week",
          "Writing report",
          "Complete",
        ],
      },
      {
        type: "claude",
        text: 'Test run complete! Missed tasks fire when the app reopens. Use "Keep awake" to prevent missed runs.',
      },
    ],
  },
];

// --- SVG Icons ---
function IconPlus(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function IconSearch(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function IconClock(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function IconSend(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}
function IconBulb(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.71V16h8v-1.29A7 7 0 0012 2z" />
    </svg>
  );
}
function IconBriefcase(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <rect x={2} y={7} width={20} height={14} rx={2} />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}
function IconFolder(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  );
}
function IconChevronLeft(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function IconChevronRight(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function IconX(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
function IconFile(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}
function IconSettings(p) {
  return (
    <svg
      width={p.size || 16}
      height={p.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <circle cx={12} cy={12} r={3} />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
function IconStopwatch(p) {
  return (
    <svg
      width={p.size || 60}
      height={p.size || 60}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || C.textMuted}
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <circle cx={12} cy={13} r={8} />
      <path d="M12 9v4l2 2M10 2h4M12 2v3" />
    </svg>
  );
}
function IconEdit(p) {
  return (
    <svg
      width={p.size || 14}
      height={p.size || 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function IconDownload(p) {
  return (
    <svg
      width={p.size || 14}
      height={p.size || 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
function IconTrash(p) {
  return (
    <svg
      width={p.size || 14}
      height={p.size || 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  );
}
function IconUpload(p) {
  return (
    <svg
      width={p.size || 14}
      height={p.size || 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
    </svg>
  );
}
function IconMessageCircle(p) {
  return (
    <svg
      width={p.size || 14}
      height={p.size || 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}
function IconGrid(p) {
  return (
    <svg
      width={p.size || 14}
      height={p.size || 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <rect x={3} y={3} width={7} height={7} />
      <rect x={14} y={3} width={7} height={7} />
      <rect x={14} y={14} width={7} height={7} />
      <rect x={3} y={14} width={7} height={7} />
    </svg>
  );
}
function IconLink(p) {
  return (
    <svg
      width={p.size || 14}
      height={p.size || 14}
      viewBox="0 0 24 24"
      fill="none"
      stroke={p.color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

// --- Plugin data ---
var ANTHROPIC_PLUGINS = [
  {
    name: "Legal",
    by: "Anthropic",
    installs: "36.4K",
    desc: "Speed up contract reviews, NDA triage, and compliance workflows for in-house legal teams.",
  },
  {
    name: "Product management",
    by: "Anthropic",
    installs: "38K",
    desc: "Write feature specs, plan roadmaps, and synthesize user research faster.",
  },
  {
    name: "Finance",
    by: "Anthropic",
    installs: "41.2K",
    desc: "Streamline finance and accounting workflows, from journal entries to financial statements.",
  },
  {
    name: "Sales",
    by: "Anthropic",
    installs: "33.7K",
    desc: "Prospect, craft outreach, and build deal strategy faster. Prep for calls, manage your pipeline.",
  },
  {
    name: "Marketing",
    by: "Anthropic",
    installs: "39.1K",
    desc: "Create content, plan campaigns, and analyze performance across marketing channels.",
  },
  {
    name: "Enterprise search",
    by: "Anthropic",
    installs: "35.9K",
    desc: "Search across all of your company's tools in one place. Find anything across email, chat, docs.",
  },
];

var PANAVERSITY_PLUGINS = [
  {
    name: "Agentic office",
    by: "Panaversity",
    desc: "Production-ready agentic office agent. 15 skills, 4 agents. Covers trading, task intelligence, tracking.",
  },
  {
    name: "Banking",
    by: "Panaversity",
    desc: "Jurisdiction-aware banking regulatory agent. 18 product skills, 3 jurisdiction overlays, 4 domain categories.",
  },
  {
    name: "Hr operations",
    by: "Panaversity",
    desc: "People & HR operations agent. 3 skills, 4 agents. Job description generation, onboarding, compliance tracking.",
  },
  {
    name: "Idfa financial architect",
    by: "Panaversity",
    desc: "Intent-Driven Financial Architecture (IDFA): a financial modeling language that replaces Excel cell references with human language.",
  },
  {
    name: "Innovation",
    by: "Panaversity",
    desc: "Integrated strategy & innovation agent. 15 skills, 4 agents. Business model canvas, customer discovery, financial modeling.",
  },
  {
    name: "Islamic finance",
    by: "Panaversity",
    desc: "Panaversity Islamic Finance agent. 12 product skills, 13 jurisdiction overlays, 4 domain standards across 20 jurisdictions.",
  },
];

var SALES_SKILLS = [
  {
    name: "Account research",
    desc: "Research a company or person and get actionable sales intel.",
  },
  {
    name: "Call prep",
    desc: "Prepare for a sales call with account context, attendee research, and talking points.",
  },
  {
    name: "Competitive intelligence",
    desc: "Research your competitors and build an interactive battlecard.",
  },
  {
    name: "Create an asset",
    desc: "Generate tailored sales assets (landing pages, decks, one-pagers).",
  },
  {
    name: "Daily briefing",
    desc: "Start your day with a prioritized sales briefing.",
  },
  {
    name: "Draft outreach",
    desc: "Research a prospect then draft personalized outreach.",
  },
];

var MY_SKILLS = [
  "ai-platform-explorer",
  "compliance-calendar-pakistan",
  "client-karachi-textile-exports",
  "audit-methodology-firm-standards",
  "chart-of-accounts-lahore-manufacturing",
  "pakistan-tax-jurisdiction",
  "cfo-variance-bridge",
  "textile-audit-risk-id",
  "ai-product-ideation",
  "digital-fe-agent-skills",
  "professional-messaging",
  "frontend-design",
  "mit-exam-generator",
  "pdf-to-markdown",
  "course-marketing",
  "ai-image-prompt",
  "learning-path-artifact",
  "data-extraction",
  "skill-creator",
];

var SCHEDULED_TASKS_LIST = [
  "How to use Claude",
  "Dispatch background conversation",
  "Untitled task",
  "Predicting your future profile",
  "Rex Day 1 mystery shop leads",
  "Deep verify OpenClaw current state",
  "Review updated Rex plan + OpenClaw",
  "Fetch Rex review report",
  "Review Rex gstack docs",
  "Chapter 14 realtime image update clarity",
  "Rex differentiation via OpenClaw",
  "Validate Rex demand signals",
];

// --- ApprovalStep component ---
function ApprovalStep({ data: s, isCurrent, opacity }) {
  const [ok, setOk] = useState(false);
  useEffect(
    function () {
      if (isCurrent) {
        var t = setTimeout(function () {
          setOk(true);
        }, 1200);
        return function () {
          clearTimeout(t);
        };
      }
    },
    [isCurrent],
  );

  return (
    <div
      style={{
        opacity: opacity,
        transition: "opacity .5s ease",
        animation: isCurrent ? "fadeUp .5s ease" : "none",
        background: ok ? C.greenSoft : C.yellowSoft,
        border: "1px solid " + (ok ? C.green + "30" : C.yellow + "30"),
        borderRadius: 14,
        padding: "16px 20px",
        margin: "8px 0",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: ok ? C.green : C.yellow,
          marginBottom: 8,
          letterSpacing: 0.5,
        }}
      >
        {ok ? "APPROVED" : "APPROVAL REQUIRED"}
      </div>
      <div style={{ fontSize: 14, color: C.textDim }}>
        <strong style={{ color: C.text }}>{s.action}</strong>: {s.file}
      </div>
      {s.preview ? (
        <pre
          style={{
            background: "#0e0c0a",
            borderRadius: 10,
            padding: "12px 16px",
            fontSize: 12,
            color: C.textDim,
            margin: "10px 0",
            fontFamily: '"JetBrains Mono",monospace',
            whiteSpace: "pre-wrap",
            lineHeight: 1.6,
          }}
        >
          {s.preview}
        </pre>
      ) : null}
      {!ok ? (
        <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
          <button
            onClick={function () {
              setOk(true);
            }}
            style={{
              padding: "8px 22px",
              borderRadius: 10,
              border: "none",
              fontSize: 13,
              fontWeight: 600,
              background: C.approveBtn,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Approve
          </button>
          <button
            style={{
              padding: "8px 22px",
              borderRadius: 10,
              border: "none",
              fontSize: 13,
              fontWeight: 600,
              background: C.denyBtn,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Deny
          </button>
        </div>
      ) : null}
    </div>
  );
}

// --- Step rendering ---
function renderStep(s, isCurrent) {
  var opacity = isCurrent ? 1 : 0.35;
  var wrapper = {
    opacity: opacity,
    transition: "opacity .5s ease",
    animation: isCurrent ? "fadeUp .5s ease" : "none",
  };

  if (s.type === "narrator")
    return (
      <div
        style={{
          ...wrapper,
          textAlign: "center",
          padding: "12px 20px",
          margin: "8px 0",
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: C.textMuted,
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
          {s.text}
        </div>
      </div>
    );

  if (s.type === "user")
    return (
      <div
        style={{
          ...wrapper,
          display: "flex",
          justifyContent: "flex-end",
          padding: "4px 0",
        }}
      >
        <div
          style={{
            background: C.cardBg,
            borderRadius: "18px 18px 4px 18px",
            padding: "14px 18px",
            maxWidth: "65%",
            fontSize: 15,
            color: C.text,
            lineHeight: 1.5,
            whiteSpace: "pre-wrap",
            border: isCurrent
              ? "1px solid " + C.highlightBorder
              : "1px solid transparent",
          }}
        >
          {s.text}
        </div>
      </div>
    );

  if (s.type === "claude")
    return (
      <div
        style={{
          ...wrapper,
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
          padding: "4px 0",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: C.accent + "25",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: C.accent,
            fontSize: 15,
            fontWeight: 700,
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          C
        </div>
        <div
          style={{
            background: C.cardBg,
            borderRadius: "18px 18px 18px 4px",
            padding: "14px 18px",
            maxWidth: "70%",
            fontSize: 15,
            color: C.text,
            lineHeight: 1.7,
            whiteSpace: "pre-wrap",
            border: isCurrent
              ? "1px solid " + C.highlightBorder
              : "1px solid " + C.cardBorder,
          }}
        >
          {s.text}
        </div>
      </div>
    );

  if (s.type === "exec")
    return (
      <div
        style={{
          ...wrapper,
          background: C.execBg,
          border: "1px solid " + (isCurrent ? C.execBorder : C.border),
          borderLeft: "3px solid " + C.execBorder,
          borderRadius: "0 12px 12px 0",
          padding: "12px 16px",
          fontSize: 13,
          margin: "6px 0",
          fontFamily: '"JetBrains Mono",monospace',
        }}
      >
        <div
          style={{
            fontSize: 10,
            color: C.green,
            fontWeight: 600,
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          EXECUTION
        </div>
        {s.items.map(function (item, i) {
          return (
            <div
              key={i}
              style={{
                color: C.textDim,
                padding: "3px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
                animation: isCurrent ? "slideIn .4s ease" : "none",
                animationDelay: i * 120 + "ms",
                animationFillMode: "both",
              }}
            >
              <span style={{ color: C.green, fontSize: 12 }}>$</span>
              {item}
            </div>
          );
        })}
      </div>
    );

  if (s.type === "approval")
    return <ApprovalStep data={s} isCurrent={isCurrent} opacity={opacity} />;

  if (s.type === "phone")
    return (
      <div
        style={{
          ...wrapper,
          display: "flex",
          justifyContent: "flex-end",
          padding: "4px 0",
        }}
      >
        <div
          style={{
            background: C.blueSoft,
            border: "1px solid " + (isCurrent ? C.blue + "40" : C.blue + "15"),
            borderRadius: "18px 18px 4px 18px",
            padding: "14px 18px",
            maxWidth: "65%",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: C.blue,
              fontWeight: 600,
              marginBottom: 6,
              letterSpacing: 1,
            }}
          >
            FROM YOUR PHONE (DISPATCH)
          </div>
          <div style={{ fontSize: 15, color: C.text, lineHeight: 1.5 }}>
            {s.text}
          </div>
        </div>
      </div>
    );

  if (s.type === "notification")
    return (
      <div
        style={{
          ...wrapper,
          background: C.blueSoft,
          border: "1px solid " + C.blue + "25",
          borderRadius: 12,
          padding: "12px 18px",
          margin: "6px 0",
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 14,
          color: C.blue,
        }}
      >
        {s.text}
      </div>
    );

  return null;
}

function StepItem({ step, isCurrent }) {
  return renderStep(step, isCurrent);
}

// --- Title Bar ---
function TitleBar(props) {
  return (
    <div
      style={{
        height: 44,
        background: C.headerBg,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid " + C.border,
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      <div style={{ display: "flex", gap: 8, marginLeft: 14, marginRight: 16 }}>
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
            background: "#febc2e",
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
      {props.navArrows ? (
        <div
          style={{
            display: "flex",
            gap: 6,
            marginRight: 12,
            color: C.textMuted,
          }}
        >
          <span
            onClick={props.onBack}
            style={{
              cursor: "pointer",
              fontSize: 14,
              padding: "2px 6px",
              opacity: props.canBack ? 1 : 0.3,
            }}
          >
            &lt;
          </span>
          <span
            onClick={props.onForward}
            style={{
              cursor: "pointer",
              fontSize: 14,
              padding: "2px 6px",
              opacity: props.canForward ? 1 : 0.3,
            }}
          >
            &gt;
          </span>
        </div>
      ) : null}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        {["Chat", "Cowork", "Code"].map(function (t) {
          return (
            <div
              key={t}
              style={{
                padding: "6px 20px",
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 6,
                color: t === "Cowork" ? C.text : C.textMuted,
                background: t === "Cowork" ? C.bg : "transparent",
                cursor: "default",
              }}
            >
              {t}
            </div>
          );
        })}
      </div>
      {props.rightContent || null}
    </div>
  );
}

// --- Sidebar ---
function Sidebar(props) {
  var view = props.view;
  var setView = props.setView;
  var hover = props.hover;
  var setHover = props.setHover;

  function navItem(icon, label, targetView, onClick) {
    var active = view === targetView;
    return (
      <div
        key={label}
        onClick={
          onClick ||
          function () {
            setView(targetView);
          }
        }
        onMouseEnter={function () {
          setHover("sb-" + label);
        }}
        onMouseLeave={function () {
          setHover(null);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "7px 10px",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 13,
          color: active ? C.text : C.textDim,
          background: active
            ? C.sidebarActive
            : hover === "sb-" + label
              ? C.sidebarHover
              : "transparent",
          transition: "background .15s ease",
        }}
      >
        {icon}
        {label}
      </div>
    );
  }

  return (
    <div
      style={{
        width: 180,
        background: C.sidebar,
        borderRight: "1px solid " + C.border,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{ padding: "10px 8px", borderBottom: "1px solid " + C.border }}
      >
        {navItem(<IconPlus size={15} />, "+ New task", "home")}
        {navItem(<IconSearch size={15} />, "Search", null, function () {
          if (props.onSearchOpen) props.onSearchOpen();
        })}
        {navItem(<IconClock size={15} />, "Scheduled", "scheduled")}
        {navItem(<IconSend size={15} />, "Dispatch", "dispatch")}
        {navItem(<IconBulb size={15} />, "Ideas", "ideas")}
        {navItem(<IconBriefcase size={15} />, "Customize", "customize")}
      </div>
      {/* Projects */}
      <div
        style={{
          padding: "10px 14px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Projects
        </span>
        <span
          onClick={function () {
            setView("project-create");
          }}
          style={{ cursor: "pointer", color: C.textMuted, fontSize: 16 }}
        >
          +
        </span>
      </div>
      <div style={{ padding: "2px 8px" }}>
        <div
          onClick={function () {
            setView("project-interior");
          }}
          onMouseEnter={function () {
            setHover("sb-test");
          }}
          onMouseLeave={function () {
            setHover(null);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 10px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 13,
            color: view === "project-interior" ? C.text : C.textDim,
            background:
              view === "project-interior"
                ? C.sidebarActive
                : hover === "sb-test"
                  ? C.sidebarHover
                  : "transparent",
          }}
        >
          <IconFolder size={14} /> Test
        </div>
      </div>
      {/* Recents */}
      <div
        style={{
          padding: "14px 14px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Recents
        </span>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "2px 8px" }}>
        {SCENARIOS.map(function (sc, i) {
          var isDispatch = i === 5;
          return (
            <div
              key={i}
              onClick={function () {
                props.onScenario(i);
              }}
              onMouseEnter={function () {
                setHover("sc-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 10px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                color: C.textDim,
                background:
                  hover === "sc-" + i ? C.sidebarHover : "transparent",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {isDispatch ? (
                <span
                  style={{
                    fontSize: 9,
                    padding: "1px 5px",
                    borderRadius: 4,
                    background: C.blue + "25",
                    color: C.blue,
                    fontWeight: 600,
                  }}
                >
                  Dispatch
                </span>
              ) : (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: C.blue,
                    flexShrink: 0,
                  }}
                />
              )}
              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {sc.title}
              </span>
            </div>
          );
        })}
      </div>
      {/* Bottom user area */}
      <div
        style={{
          padding: "12px 14px",
          borderTop: "1px solid " + C.border,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: C.accent + "30",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            color: C.accent,
          }}
        >
          M
        </div>
        <div>
          <div style={{ fontSize: 12, color: C.text, fontWeight: 500 }}>
            Muhammad
          </div>
          <div style={{ fontSize: 10, color: C.textMuted }}>Opus 4.6</div>
        </div>
      </div>
    </div>
  );
}

// --- HOME VIEW ---
function HomeView(props) {
  var setView = props.setView;
  var onScenario = props.onScenario;
  var hover = props.hover;
  var setHover = props.setHover;
  const [showDrop, setShowDrop] = useState(false);

  var activeTasks = SCENARIOS.slice(0, 6).map(function (s, i) {
    return {
      title: s.title,
      time: i + 1 + " hours ago",
      color: i < 3 ? C.green : C.blue,
    };
  });

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 40px 20px",
        overflow: "auto",
      }}
    >
      <h1
        style={{
          fontFamily: '"Playfair Display",Georgia,serif',
          fontSize: 34,
          fontWeight: 700,
          color: C.text,
          textAlign: "center",
          marginBottom: 8,
          lineHeight: 1.15,
        }}
      >
        Let's knock something off your list
      </h1>
      <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 28 }}>
        Cowork is in research preview. Learn how to use it safely.
      </p>
      {/* Input area */}
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: C.cardBg,
          borderRadius: 16,
          border: "1px solid " + C.cardBorder,
          padding: "16px 20px",
          marginBottom: 12,
        }}
      >
        <div style={{ fontSize: 15, color: C.textMuted, marginBottom: 20 }}>
          How can I help you today?
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              position: "relative",
            }}
          >
            <div
              onClick={function () {
                setShowDrop(!showDrop);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 8,
                border: "1px solid " + C.border,
                cursor: "pointer",
                fontSize: 13,
                color: C.textDim,
              }}
            >
              <IconFolder size={14} /> Work in a project
              <span style={{ fontSize: 10, marginLeft: 4 }}>
                {showDrop ? "\u25B2" : "\u25BC"}
              </span>
            </div>
            {showDrop ? (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  marginTop: 6,
                  background: C.cardBg,
                  border: "1px solid " + C.cardBorder,
                  borderRadius: 12,
                  padding: "8px 0",
                  width: 340,
                  zIndex: 100,
                  boxShadow: "0 8px 32px rgba(0,0,0,.4)",
                }}
              >
                <div
                  style={{
                    padding: "4px 12px 8px",
                    fontSize: 11,
                    color: C.textMuted,
                    fontWeight: 600,
                  }}
                >
                  Recent
                </div>
                {[
                  { name: "gstack", path: "/Users/mj/code/gstack" },
                  {
                    name: "intel-agent-mode-sessions",
                    path: "/Users/mj/Application Support/claude-force-agent-mode-sessions",
                  },
                  {
                    name: "claude-sales",
                    path: "/Users/mj/Documents/claude-sales",
                  },
                ].map(function (p, i) {
                  return (
                    <div
                      key={i}
                      onMouseEnter={function () {
                        setHover("drop-" + i);
                      }}
                      onMouseLeave={function () {
                        setHover(null);
                      }}
                      style={{
                        padding: "8px 16px",
                        cursor: "pointer",
                        background:
                          hover === "drop-" + i
                            ? C.sidebarHover
                            : "transparent",
                      }}
                    >
                      <div style={{ fontSize: 13, color: C.text }}>
                        {p.name}
                      </div>
                      <div style={{ fontSize: 11, color: C.textMuted }}>
                        {p.path}
                      </div>
                    </div>
                  );
                })}
                <div
                  style={{
                    padding: "8px 16px",
                    borderTop: "1px solid " + C.border,
                    marginTop: 4,
                    cursor: "pointer",
                    fontSize: 13,
                    color: C.textDim,
                  }}
                >
                  Choose a different folder
                </div>
                <div
                  style={{
                    padding: "8px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid " + C.border,
                  }}
                >
                  <span style={{ fontSize: 13, color: C.textDim }}>
                    Projects
                  </span>
                  <div
                    onClick={function () {
                      setShowDrop(false);
                      setView("project-create");
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 12px",
                      borderRadius: 8,
                      border: "1px solid " + C.border,
                      cursor: "pointer",
                      fontSize: 12,
                      color: C.textDim,
                    }}
                  >
                    <IconPlus size={12} />
                    Create new project
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, color: C.textMuted }}>Opus 4.6</span>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: C.accent + "20",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IconSend size={14} color={C.accent} />
            </div>
          </div>
        </div>
      </div>
      {/* Active tasks */}
      <div style={{ width: "100%", maxWidth: 520, marginTop: 16 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: C.textDim }}>
            Active tasks
          </span>
          <span style={{ fontSize: 12, color: C.textMuted, cursor: "pointer" }}>
            Clear all
          </span>
        </div>
        {activeTasks.map(function (t, i) {
          return (
            <div
              key={i}
              onClick={function () {
                onScenario(i);
              }}
              onMouseEnter={function () {
                setHover("task-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                cursor: "pointer",
                borderBottom:
                  i < activeTasks.length - 1 ? "1px solid " + C.border : "none",
                opacity: hover === "task-" + i ? 1 : 0.8,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "2px solid " + t.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: t.color + "60",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, color: C.text }}>{t.title}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>{t.time}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Suggestion cards */}
      <div style={{ width: "100%", maxWidth: 520, marginTop: 24 }}>
        <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 8 }}>
          Get to work with <span style={{ color: C.accent }}>Legal</span> &gt;
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {["Review contract", "Draft NDA", "Compliance check"].map(
            function (s, i) {
              return (
                <div
                  key={i}
                  onMouseEnter={function () {
                    setHover("sug-" + i);
                  }}
                  onMouseLeave={function () {
                    setHover(null);
                  }}
                  style={{
                    flex: 1,
                    padding: "14px 16px",
                    borderRadius: 12,
                    border: "1px solid " + C.cardBorder,
                    cursor: "pointer",
                    background:
                      hover === "sug-" + i ? C.cardHover : "transparent",
                  }}
                >
                  <div style={{ fontSize: 13, color: C.text }}>{s}</div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}

// --- CUSTOMIZE VIEW ---
function CustomizeView(props) {
  var setView = props.setView;
  var hover = props.hover;
  var setHover = props.setHover;
  const [tab, setTab] = useState("skills");
  const [plusOpen, setPlusOpen] = useState(false);
  const [selPlugin, setSelPlugin] = useState(null);

  var pluginList = [
    { name: "Product manag...", status: "Disabled" },
    { name: "Finance", status: "Disabled" },
    { name: "Enterprise sea...", status: "Disabled" },
    { name: "Financial analy...", status: "Disabled" },
    { name: "Investment ba...", status: "Disabled" },
    { name: "Equity research", status: "Disabled" },
    { name: "Private equity", status: "Disabled" },
    { name: "Wealth manag...", status: "Disabled" },
    { name: "Logi", status: "Disabled" },
    { name: "Sa global", status: "Disabled" },
    { name: "Pin go to market...", status: "Disabled" },
    { name: "Pin-marketing...", status: "Disabled" },
    { name: "Pin-market res...", status: "Disabled" },
    { name: "Pin product str...", status: "Disabled" },
    { name: "Legal", status: null },
    { name: "Marketing", status: null },
    { name: "Sales", status: null },
    { name: "Sales revops marketing", status: null },
    { name: "Innovation", status: null },
  ];

  // Plugin detail for selected plugin
  if (selPlugin) {
    var p = selPlugin;
    return (
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Left nav */}
        <div
          style={{
            width: 200,
            borderRight: "1px solid " + C.border,
            padding: "16px",
            overflow: "auto",
          }}
        >
          <div
            onClick={function () {
              setSelPlugin(null);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              color: C.textDim,
              fontSize: 13,
              marginBottom: 16,
            }}
          >
            <IconChevronLeft size={14} /> Customize
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <div
              onClick={function () {
                setTab("skills");
              }}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 13,
                cursor: "pointer",
                color: tab === "skills" ? C.text : C.textDim,
                background: tab === "skills" ? C.sidebarActive : "transparent",
                fontWeight: tab === "skills" ? 600 : 400,
              }}
            >
              Skills
            </div>
            <div
              onClick={function () {
                setTab("connectors");
              }}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 13,
                cursor: "pointer",
                color: tab === "connectors" ? C.text : C.textDim,
                background:
                  tab === "connectors" ? C.sidebarActive : "transparent",
                fontWeight: tab === "connectors" ? 600 : 400,
              }}
            >
              Connectors
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: C.textMuted,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Personal plugins
          </div>
          {pluginList.map(function (pl, i) {
            var isSel = pl.name === p.name;
            return (
              <div
                key={i}
                onClick={function () {
                  var found = ANTHROPIC_PLUGINS.concat(
                    PANAVERSITY_PLUGINS,
                  ).find(function (ap) {
                    return (
                      ap.name === pl.name ||
                      pl.name.startsWith(ap.name.substring(0, 12))
                    );
                  });
                  if (found) setSelPlugin(found);
                }}
                onMouseEnter={function () {
                  setHover("pl-" + i);
                }}
                onMouseLeave={function () {
                  setHover(null);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 10px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 12,
                  color: isSel ? C.text : C.textDim,
                  background: isSel
                    ? C.sidebarActive
                    : hover === "pl-" + i
                      ? C.sidebarHover
                      : "transparent",
                }}
              >
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {pl.name}
                </span>
                {pl.status ? (
                  <span style={{ fontSize: 10, color: C.textMuted }}>
                    {pl.status}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
        {/* Right detail */}
        <div style={{ flex: 1, padding: "24px 32px", overflow: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 20,
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.text }}>
              {p.name}
            </h2>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ fontSize: 12, color: C.textMuted }}>update</span>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 12, color: C.textDim }}>
                  Customize
                </span>
                <div
                  style={{
                    width: 32,
                    height: 18,
                    borderRadius: 9,
                    background: C.green + "40",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: C.green,
                      position: "absolute",
                      top: 2,
                      right: 2,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 12,
              color: C.textMuted,
              marginBottom: 12,
            }}
          >
            <span>
              Source:{" "}
              <span style={{ color: C.accent }}>Anthropic &amp; Partners</span>
            </span>
            <span>Version: 1.1.0</span>
            <span>Author: Anthropic</span>
          </div>
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: C.textMuted,
                marginBottom: 4,
              }}
            >
              Description
            </div>
            <p style={{ fontSize: 14, color: C.textDim, lineHeight: 1.5 }}>
              {p.desc}
            </p>
          </div>
          {/* Skills grid */}
          <div style={{ marginTop: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
                Skills
              </span>
              <span
                style={{ fontSize: 12, color: C.accent, cursor: "pointer" }}
              >
                See all
              </span>
            </div>
            <p style={{ fontSize: 12, color: C.textMuted, marginBottom: 12 }}>
              Invoke by typing / in chat, or let Claude use them automatically
              for relevant tasks.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 10,
              }}
            >
              {SALES_SKILLS.map(function (sk, i) {
                return (
                  <div
                    key={i}
                    onMouseEnter={function () {
                      setHover("sk-" + i);
                    }}
                    onMouseLeave={function () {
                      setHover(null);
                    }}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 10,
                      border: "1px solid " + C.cardBorder,
                      background: hover === "sk-" + i ? C.cardHover : C.cardBg,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: C.text,
                        marginBottom: 4,
                      }}
                    >
                      {sk.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: C.textMuted,
                        lineHeight: 1.4,
                      }}
                    >
                      {sk.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Try asking */}
          <div style={{ marginTop: 24 }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: C.text,
                marginBottom: 12,
              }}
            >
              Try asking...
            </div>
            {[
              "Prep me for my next sales call",
              "Process my call notes into follow-ups",
              "Review my pipeline for risks and next steps",
              "Research a prospect before outreach",
              "Draft personalized outreach for a prospect",
              "Build a sales forecast with scenario analysis",
            ].map(function (q, i) {
              return (
                <div
                  key={i}
                  onMouseEnter={function () {
                    setHover("try-" + i);
                  }}
                  onMouseLeave={function () {
                    setHover(null);
                  }}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 10,
                    border:
                      "1px solid " +
                      (hover === "try-" + i ? C.cardBorder : "transparent"),
                    cursor: "pointer",
                    fontSize: 13,
                    color: C.textDim,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {q} <IconChevronRight size={14} color={C.textMuted} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Main customize view (no plugin selected)
  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* Left panel */}
      <div
        style={{
          width: 220,
          borderRight: "1px solid " + C.border,
          padding: "16px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <IconChevronLeft size={14} color={C.textDim} />
          <span style={{ fontSize: 16, fontWeight: 600, color: C.text }}>
            Customize
          </span>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <div
            onClick={function () {
              setTab("skills");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              cursor: "pointer",
              color: tab === "skills" ? C.text : C.textDim,
              background: tab === "skills" ? C.sidebarActive : "transparent",
              fontWeight: tab === "skills" ? 600 : 400,
            }}
          >
            <IconSettings size={14} /> Skills
          </div>
          <div
            onClick={function () {
              setTab("connectors");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              cursor: "pointer",
              color: tab === "connectors" ? C.text : C.textDim,
              background:
                tab === "connectors" ? C.sidebarActive : "transparent",
              fontWeight: tab === "connectors" ? 600 : 400,
            }}
          >
            <IconLink size={14} /> Connectors
          </div>
        </div>
        {/* Plugin list with + button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: C.textMuted,
              textTransform: "uppercase",
            }}
          >
            Personal plugins
          </span>
          <div style={{ position: "relative" }}>
            <div
              onClick={function () {
                setPlusOpen(!plusOpen);
              }}
              style={{ cursor: "pointer", color: C.textMuted, fontSize: 16 }}
            >
              +
            </div>
            {plusOpen ? (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: 4,
                  background: C.cardBg,
                  border: "1px solid " + C.cardBorder,
                  borderRadius: 10,
                  padding: "6px 0",
                  width: 180,
                  zIndex: 100,
                  boxShadow: "0 8px 24px rgba(0,0,0,.4)",
                }}
              >
                <div
                  onClick={function () {
                    setPlusOpen(false);
                    setView("browse-plugins");
                  }}
                  style={{
                    padding: "8px 14px",
                    fontSize: 13,
                    color: C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={function () {
                    setHover("pm-0");
                  }}
                  onMouseLeave={function () {
                    setHover(null);
                  }}
                >
                  <IconGrid size={14} /> Browse plugins
                </div>
                <div
                  style={{
                    padding: "8px 14px",
                    fontSize: 13,
                    color: C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={function () {
                    setHover("pm-1");
                  }}
                  onMouseLeave={function () {
                    setHover(null);
                  }}
                >
                  <IconLink size={14} /> Add marketplace
                </div>
                <div
                  style={{
                    padding: "8px 14px",
                    fontSize: 13,
                    color: C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={function () {
                    setHover("pm-2");
                  }}
                  onMouseLeave={function () {
                    setHover(null);
                  }}
                >
                  <IconUpload size={14} /> Upload plugin
                </div>
                <div
                  style={{
                    padding: "8px 14px",
                    fontSize: 13,
                    color: C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={function () {
                    setHover("pm-3");
                  }}
                  onMouseLeave={function () {
                    setHover(null);
                  }}
                >
                  <IconMessageCircle size={14} /> Create with Claude
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {/* Plugin items */}
        {pluginList.map(function (pl, i) {
          return (
            <div
              key={i}
              onClick={function () {
                var found = ANTHROPIC_PLUGINS.concat(PANAVERSITY_PLUGINS).find(
                  function (ap) {
                    return (
                      ap.name === pl.name ||
                      pl.name.startsWith(ap.name.substring(0, 12))
                    );
                  },
                );
                if (found) setSelPlugin(found);
                else if (pl.name === "Sales")
                  setSelPlugin(ANTHROPIC_PLUGINS[3]);
              }}
              onMouseEnter={function () {
                setHover("cpl-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px 10px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                color: C.textDim,
                background:
                  hover === "cpl-" + i ? C.sidebarHover : "transparent",
              }}
            >
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: 130,
                }}
              >
                {pl.name}
              </span>
              {pl.status ? (
                <span style={{ fontSize: 10, color: C.textMuted }}>
                  {pl.status}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
      {/* Right content (intro cards) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            border: "2px solid " + C.border,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <IconBriefcase size={32} color={C.textMuted} />
        </div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: C.text,
            marginBottom: 8,
          }}
        >
          Customize Claude
        </h2>
        <p
          style={{
            fontSize: 14,
            color: C.textDim,
            textAlign: "center",
            maxWidth: 400,
            marginBottom: 32,
          }}
        >
          Skills, connectors, and plugins shape how Claude works with you.
        </p>
        {[
          {
            icon: <IconLink size={18} color={C.accent} />,
            title: "Connect your apps",
            desc: "Let Claude read and write to the tools you already use.",
          },
          {
            icon: <IconSettings size={18} color={C.accent} />,
            title: "Create new skills",
            desc: "Teach Claude your processes, team norms, and expertise.",
          },
          {
            icon: <IconGrid size={18} color={C.accent} />,
            title: "Browse plugins",
            desc: "Add pre-built knowledge for your field.",
          },
        ].map(function (c, i) {
          return (
            <div
              key={i}
              onClick={
                i === 2
                  ? function () {
                      setView("browse-plugins");
                    }
                  : undefined
              }
              onMouseEnter={function () {
                setHover("cc-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 18px",
                borderRadius: 12,
                border: "1px solid " + C.cardBorder,
                marginBottom: 10,
                width: "100%",
                maxWidth: 420,
                cursor: i === 2 ? "pointer" : "default",
                background: hover === "cc-" + i ? C.cardHover : "transparent",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: C.accentSoft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
                  {c.title}
                </div>
                <div style={{ fontSize: 12, color: C.textMuted }}>{c.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- BROWSE PLUGINS VIEW ---
function BrowsePluginsView(props) {
  var setView = props.setView;
  var hover = props.hover;
  var setHover = props.setHover;
  const [pTab, setPTab] = useState("anthropic");
  const [modal, setModal] = useState(false);

  var plugins = pTab === "anthropic" ? ANTHROPIC_PLUGINS : PANAVERSITY_PLUGINS;

  return (
    <div
      style={{
        flex: 1,
        padding: "24px 32px",
        overflow: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 16,
          cursor: "pointer",
          color: C.textDim,
          fontSize: 13,
        }}
        onClick={function () {
          setView("customize");
        }}
      >
        <IconChevronLeft size={14} /> Customize
      </div>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: C.text,
          marginBottom: 4,
        }}
      >
        Browse plugins
      </h2>
      <p style={{ fontSize: 13, color: C.textDim, marginBottom: 20 }}>
        Extend how Claude performs tasks with ready-to-use workflows. Customize
        plugins for your company's tools, data, and best practices.
      </p>
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 20,
          borderBottom: "1px solid " + C.border,
          paddingBottom: 8,
        }}
      >
        <div
          onClick={function () {
            setPTab("anthropic");
          }}
          style={{
            fontSize: 13,
            fontWeight: pTab === "anthropic" ? 600 : 400,
            color: pTab === "anthropic" ? C.text : C.textDim,
            cursor: "pointer",
            paddingBottom: 4,
            borderBottom:
              pTab === "anthropic"
                ? "2px solid " + C.accent
                : "2px solid transparent",
          }}
        >
          By Anthropic &amp; Partners
        </div>
        <div
          onClick={function () {
            setPTab("personal");
          }}
          style={{
            fontSize: 13,
            fontWeight: pTab === "personal" ? 600 : 400,
            color: pTab === "personal" ? C.text : C.textDim,
            cursor: "pointer",
            paddingBottom: 4,
            borderBottom:
              pTab === "personal"
                ? "2px solid " + C.accent
                : "2px solid transparent",
          }}
        >
          Personal
        </div>
        <div style={{ flex: 1 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: C.textMuted,
          }}
        >
          Filter by
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: C.textMuted,
          }}
        >
          Sort by
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 10px",
            borderRadius: 6,
            border: "1px solid " + C.border,
            fontSize: 12,
            color: C.textDim,
          }}
        >
          <IconSearch size={12} /> Search...
        </div>
      </div>
      {/* Plugin grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 16,
        }}
      >
        {plugins.map(function (p, i) {
          return (
            <div
              key={i}
              onMouseEnter={function () {
                setHover("bp-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              onClick={function () {
                setView("customize");
              }}
              style={{
                padding: "20px",
                borderRadius: 14,
                border: "1px solid " + C.cardBorder,
                background: hover === "bp-" + i ? C.cardHover : C.cardBg,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: C.accent + "15",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconBriefcase size={18} color={C.accent} />
                </div>
                <button
                  style={{
                    padding: "5px 14px",
                    borderRadius: 8,
                    border: "1px solid " + C.border,
                    background: "transparent",
                    color: C.textDim,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Manage
                </button>
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 2,
                }}
              >
                {p.name}
              </div>
              <div
                style={{ fontSize: 12, color: C.textMuted, marginBottom: 8 }}
              >
                by {p.by}
                {p.installs ? (
                  <span style={{ marginLeft: 8 }}>{p.installs} installs</span>
                ) : null}
              </div>
              <div style={{ fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>
                {p.desc}
              </div>
            </div>
          );
        })}
      </div>
      {/* Add marketplace modal trigger for personal tab */}
      {pTab === "personal" ? (
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <div
            onClick={function () {
              setModal(true);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid " + C.border,
              cursor: "pointer",
              fontSize: 12,
              color: C.textDim,
            }}
          >
            <IconLink size={14} /> Add marketplace
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid " + C.border,
              cursor: "pointer",
              fontSize: 12,
              color: C.textDim,
            }}
          >
            <IconUpload size={14} /> Upload plugin
          </div>
        </div>
      ) : null}
      {/* Modal */}
      {modal ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: C.modalOverlay,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
          }}
          onClick={function () {
            setModal(false);
          }}
        >
          <div
            onClick={function (e) {
              e.stopPropagation();
            }}
            style={{
              background: C.cardBg,
              borderRadius: 16,
              padding: "24px 28px",
              width: 440,
              border: "1px solid " + C.cardBorder,
              boxShadow: "0 16px 48px rgba(0,0,0,.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text }}>
                Add marketplace
              </h3>
              <div
                onClick={function () {
                  setModal(false);
                }}
                style={{ cursor: "pointer" }}
              >
                <IconX size={18} color={C.textMuted} />
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: C.textDim,
                lineHeight: 1.5,
                marginBottom: 16,
              }}
            >
              Make sure you trust a plugin before installing, updating, or using
              it. Plugins installed from marketplaces are not controlled by
              Anthropic.
            </p>
            <div style={{ fontSize: 12, color: C.textDim, marginBottom: 6 }}>
              URL
            </div>
            <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 6 }}>
              A GitHub, server, repo, or a git repository URL.
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.accent,
                background: C.inputBg,
                fontSize: 13,
                color: C.textMuted,
              }}
            >
              Search here
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 10,
                marginTop: 16,
              }}
            >
              <button
                onClick={function () {
                  setModal(false);
                }}
                style={{
                  padding: "8px 20px",
                  borderRadius: 10,
                  border: "1px solid " + C.border,
                  background: "transparent",
                  color: C.textDim,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: "8px 20px",
                  borderRadius: 10,
                  border: "none",
                  background: C.accent,
                  color: "#fff",
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Sync
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// --- SKILLS VIEW ---
function SkillsView(props) {
  var hover = props.hover;
  var setHover = props.setHover;
  const [selected, setSelected] = useState(MY_SKILLS[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [plusOpen, setPlusOpen] = useState(false);

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* Left nav */}
      <div
        style={{
          width: 160,
          borderRight: "1px solid " + C.border,
          padding: "16px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <IconChevronLeft size={14} color={C.textDim} />
          <span style={{ fontSize: 16, fontWeight: 600, color: C.text }}>
            Customize
          </span>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              color: C.text,
              background: C.sidebarActive,
            }}
          >
            Skills
          </div>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              color: C.textDim,
            }}
          >
            Connectors
          </div>
        </div>
      </div>
      {/* Middle: skill list */}
      <div
        style={{
          width: 220,
          borderRight: "1px solid " + C.border,
          overflow: "auto",
        }}
      >
        <div
          style={{
            padding: "16px 16px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600, color: C.text }}>
            Skills
          </span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <IconSearch size={14} color={C.textMuted} />
            <div style={{ position: "relative" }}>
              <div
                onClick={function () {
                  setPlusOpen(!plusOpen);
                }}
                style={{ cursor: "pointer", color: C.textMuted, fontSize: 18 }}
              >
                +
              </div>
              {plusOpen ? (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: 4,
                    background: C.cardBg,
                    border: "1px solid " + C.cardBorder,
                    borderRadius: 10,
                    padding: "6px 0",
                    width: 200,
                    zIndex: 100,
                    boxShadow: "0 8px 24px rgba(0,0,0,.4)",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                    }}
                  >
                    Create with Claude
                  </div>
                  <div
                    style={{
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                    }}
                  >
                    Write skill instructions
                  </div>
                  <div
                    style={{
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                    }}
                  >
                    Upload a skill
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "4px 8px",
            fontSize: 11,
            color: C.textMuted,
            marginBottom: 4,
          }}
        >
          My skills
        </div>
        {MY_SKILLS.map(function (sk, i) {
          return (
            <div
              key={i}
              onClick={function () {
                setSelected(sk);
                setMenuOpen(false);
              }}
              onContextMenu={function (e) {
                e.preventDefault();
                setSelected(sk);
                setMenuOpen(true);
              }}
              onMouseEnter={function () {
                setHover("msk-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                padding: "6px 14px",
                fontSize: 12,
                color: selected === sk ? C.text : C.textDim,
                background:
                  selected === sk
                    ? C.sidebarActive
                    : hover === "msk-" + i
                      ? C.sidebarHover
                      : "transparent",
                cursor: "pointer",
                borderRadius: 6,
                margin: "1px 4px",
              }}
            >
              {sk}
            </div>
          );
        })}
        <div
          style={{ padding: "12px 8px 4px", fontSize: 11, color: C.textMuted }}
        >
          Examples
        </div>
        <div
          style={{
            padding: "6px 14px",
            fontSize: 12,
            color: C.textDim,
            cursor: "pointer",
          }}
        >
          skill-creator
        </div>
      </div>
      {/* Right: skill detail */}
      <div
        style={{
          flex: 1,
          padding: "24px 28px",
          overflow: "auto",
          position: "relative",
        }}
      >
        {/* Context menu overlay */}
        {menuOpen ? (
          <div
            style={{
              position: "absolute",
              top: 60,
              right: 30,
              background: C.cardBg,
              border: "1px solid " + C.cardBorder,
              borderRadius: 10,
              padding: "6px 0",
              width: 180,
              zIndex: 100,
              boxShadow: "0 8px 24px rgba(0,0,0,.4)",
            }}
          >
            {[
              { icon: <IconMessageCircle size={14} />, label: "Try in chat" },
              { icon: <IconDownload size={14} />, label: "Download" },
              { icon: <IconEdit size={14} />, label: "Edit online" },
              {
                icon: <IconMessageCircle size={14} />,
                label: "Edit with Claude",
              },
              { icon: <IconUpload size={14} />, label: "Replace" },
              {
                icon: <IconTrash size={14} color="#ef4444" />,
                label: "Delete",
              },
            ].map(function (m, i) {
              return (
                <div
                  key={i}
                  onClick={function () {
                    setMenuOpen(false);
                  }}
                  onMouseEnter={function () {
                    setHover("cm-" + i);
                  }}
                  onMouseLeave={function () {
                    setHover(null);
                  }}
                  style={{
                    padding: "8px 14px",
                    fontSize: 13,
                    color: i === 5 ? "#ef4444" : C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background:
                      hover === "cm-" + i ? C.sidebarHover : "transparent",
                  }}
                >
                  {m.icon} {m.label}
                </div>
              );
            })}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: C.text,
              marginBottom: 16,
            }}
          >
            {selected}
          </h2>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid " + C.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.green,
                }}
              />
            </div>
            <div
              onClick={function () {
                setMenuOpen(!menuOpen);
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid " + C.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 14,
                color: C.textMuted,
              }}
            >
              ...
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            fontSize: 12,
            color: C.textMuted,
            marginBottom: 20,
          }}
        >
          <span>
            Added by: <span style={{ color: C.text }}>User</span>
          </span>
          <span>
            Last updated: <span style={{ color: C.text }}>Mar 12, 2026</span>
          </span>
          <span>
            Invoked by: <span style={{ color: C.text }}>User or Claude</span>
          </span>
        </div>
        <div
          style={{
            padding: "20px",
            borderRadius: 12,
            background: C.cardBg,
            border: "1px solid " + C.cardBorder,
            marginBottom: 20,
          }}
        >
          <p style={{ fontSize: 13, color: C.textDim, lineHeight: 1.6 }}>
            Build interactive IDE-style explorer websites that teach AI
            platforms by simulating a real project. Creates a three-column
            layout (file tree, annotated code view, interactive terminal) where
            every file fits the real config artifact with inline annotations.
            Use this skill whenever the user wants to create an interactive
            learning experience for ANY AI platform, agent framework, or
            developer tool.
          </p>
        </div>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: C.text,
            marginBottom: 8,
          }}
        >
          AI Platform Explorer Builder
        </h3>
        <p
          style={{
            fontSize: 13,
            color: C.textDim,
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          Build interactive IDE-style explorer websites that teach AI platforms
          through simulated project exploration. Inspired by
          exploreclaudecode.com: every file and folder is a real concept you can
          click through.
        </p>
        <h4
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: C.text,
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          When to Use
        </h4>
        <ul
          style={{
            fontSize: 13,
            color: C.textDim,
            lineHeight: 1.8,
            paddingLeft: 20,
          }}
        >
          <li>
            User wants an interactive learning site for an AI platform or dev
            tool
          </li>
          <li>User references exploreclaudecode.com as a concept</li>
        </ul>
      </div>
    </div>
  );
}

// --- SCHEDULED VIEW ---
function ScheduledView(props) {
  var hover = props.hover;
  var setHover = props.setHover;
  const [subView, setSubView] = useState("list");
  const [dropdown, setDropdown] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [created, setCreated] = useState(false);
  const [toast, setToast] = useState(false);

  // Delete confirmation modal
  var deleteModalEl = deleteModal ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: C.modalOverlay,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
      }}
      onClick={function () {
        setDeleteModal(false);
      }}
    >
      <div
        onClick={function (e) {
          e.stopPropagation();
        }}
        style={{
          background: C.cardBg,
          borderRadius: 16,
          padding: "24px 28px",
          width: 400,
          border: "1px solid " + C.cardBorder,
          boxShadow: "0 16px 48px rgba(0,0,0,.5)",
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: C.text,
            marginBottom: 8,
          }}
        >
          Delete scheduled task
        </h3>
        <p
          style={{
            fontSize: 14,
            color: C.textDim,
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          Delete "daily-code-review"? Any sessions from this task will be
          archived.
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button
            onClick={function () {
              setDeleteModal(false);
            }}
            style={{
              padding: "8px 20px",
              borderRadius: 10,
              border: "1px solid " + C.border,
              background: "transparent",
              color: C.textDim,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={function () {
              setDeleteModal(false);
              setCreated(false);
              setSubView("list");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: 10,
              border: "none",
              background: "#dc2626",
              color: "#fff",
              fontSize: 13,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : null;

  // Toast notification
  var toastEl = toast ? (
    <div
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        background: C.cardBg,
        border: "1px solid " + C.cardBorder,
        borderRadius: 12,
        padding: "12px 18px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: "0 8px 32px rgba(0,0,0,.4)",
        zIndex: 200,
        animation: "fadeUp .4s ease",
      }}
    >
      <IconClock size={16} color={C.green} />
      <span style={{ fontSize: 13, color: C.text }}>
        "daily-code-review" created.
      </span>
      <div
        onClick={function () {
          setToast(false);
        }}
        style={{ cursor: "pointer", marginLeft: 8 }}
      >
        <IconX size={14} color={C.textMuted} />
      </div>
    </div>
  ) : null;

  // DETAIL sub-view
  if (subView === "detail") {
    return (
      <div style={{ flex: 1, padding: "24px 32px", overflow: "auto" }}>
        {deleteModalEl}
        {toastEl}
        <div
          onClick={function () {
            setSubView("card");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            cursor: "pointer",
            color: C.textDim,
            fontSize: 13,
            marginBottom: 20,
          }}
        >
          <IconChevronLeft size={14} /> All scheduled tasks
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: C.text,
                marginBottom: 8,
              }}
            >
              daily-code-review
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 12,
                  background: C.green + "20",
                  color: C.green,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                Active
              </span>
              <span style={{ fontSize: 13, color: C.textDim }}>
                Next run: Tomorrow at 9:05 AM
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid " + C.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IconEdit size={14} color={C.textMuted} />
            </div>
            <div
              onClick={function () {
                setDeleteModal(true);
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid " + C.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IconTrash size={14} color={C.textMuted} />
            </div>
            <button
              style={{
                padding: "8px 18px",
                borderRadius: 10,
                border: "none",
                background: C.accent,
                color: "#fff",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Run now
            </button>
          </div>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 6,
                }}
              >
                Description
              </div>
              <p style={{ fontSize: 14, color: C.text, lineHeight: 1.6 }}>
                Review yesterday's commits and flag anything concerning
              </p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 6,
                }}
              >
                Folder
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconFolder size={14} color={C.textDim} />
                <span style={{ fontSize: 13, color: C.text }}>
                  /Users/mjs/Documents/code/panaversity-offic...
                </span>
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 8,
                }}
              >
                Repeats
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 20,
                    borderRadius: 10,
                    background: C.green + "40",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: C.green,
                      position: "absolute",
                      top: 2,
                      right: 2,
                    }}
                  />
                </div>
                <span style={{ fontSize: 13, color: C.text }}>
                  Every day at 9:06 AM
                </span>
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 8,
                }}
              >
                Always allowed{" "}
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "1px solid " + C.textMuted,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    color: C.textMuted,
                  }}
                >
                  i
                </div>
              </div>
              <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 12 }}>
                No stored approvals yet.
              </p>
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: 10,
                  background: C.cardBg,
                  border: "1px solid " + C.cardBorder,
                  fontSize: 12,
                  color: C.textDim,
                  lineHeight: 1.7,
                }}
              >
                When you choose{" "}
                <span style={{ color: C.text, fontWeight: 500 }}>
                  Allow for all scheduled runs
                </span>{" "}
                on a permission prompt during a run, it's saved here and
                auto-applied next time.
                <br />
                <br />
                Use{" "}
                <span style={{ color: C.text, fontWeight: 500 }}>
                  Run now
                </span>{" "}
                to do a test run and pre-approve permissions for future runs.
              </div>
            </div>
          </div>
          <div style={{ width: 280 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: C.textDim,
                marginBottom: 8,
              }}
            >
              Instructions
            </div>
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 10,
                background: C.cardBg,
                border: "1px solid " + C.cardBorder,
                fontSize: 13,
                color: C.text,
                lineHeight: 1.7,
                minHeight: 120,
              }}
            >
              Look at the commits from the last 24 hours. Summarize what
              changed, call out any risky patterns or missing tests, and note
              anything worth following up on.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Helper for the "New task" dropdown
  function newTaskDropdown() {
    return (
      <div style={{ position: "relative" }}>
        <button
          onClick={function () {
            setDropdown(!dropdown);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: 10,
            border: "1px solid " + C.border,
            background: "transparent",
            color: C.text,
            fontSize: 13,
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          <IconPlus size={14} /> New task
        </button>
        {dropdown ? (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              marginTop: 6,
              background: C.cardBg,
              border: "1px solid " + C.cardBorder,
              borderRadius: 10,
              padding: "4px 0",
              width: 180,
              zIndex: 100,
              boxShadow: "0 8px 24px rgba(0,0,0,.4)",
            }}
          >
            <div
              onClick={function () {
                setDropdown(false);
                setSubView("form");
              }}
              onMouseEnter={function () {
                setHover("nd-0");
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                padding: "8px 14px",
                fontSize: 13,
                color: C.textDim,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: hover === "nd-0" ? C.sidebarHover : "transparent",
              }}
            >
              <IconClock size={14} /> New local task
            </div>
            <div
              onMouseEnter={function () {
                setHover("nd-1");
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                padding: "8px 14px",
                fontSize: 13,
                color: C.textDim,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: hover === "nd-1" ? C.sidebarHover : "transparent",
              }}
            >
              <IconSend size={14} /> New remote task
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  // CARD sub-view
  if (subView === "card") {
    return (
      <div style={{ flex: 1, padding: "24px 32px", overflow: "auto" }}>
        {deleteModalEl}
        {toastEl}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>
            Scheduled tasks
          </h2>
          {newTaskDropdown()}
        </div>
        <p style={{ fontSize: 13, color: C.textDim, marginBottom: 16 }}>
          Run tasks on a schedule or whenever you need them. Type{" "}
          <code
            style={{
              background: C.cardBg,
              padding: "2px 6px",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: '"JetBrains Mono",monospace',
            }}
          >
            /schedule
          </code>{" "}
          in any existing task to set one up.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderRadius: 10,
            background: C.cardBg,
            border: "1px solid " + C.cardBorder,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1px solid " + C.textMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: C.textMuted,
            }}
          >
            i
          </div>
          <span style={{ fontSize: 13, color: C.textDim }}>
            Local tasks only run while your computer is awake.
          </span>
        </div>
        <div
          onClick={function () {
            setSubView("detail");
          }}
          onMouseEnter={function () {
            setHover("tc-0");
          }}
          onMouseLeave={function () {
            setHover(null);
          }}
          style={{
            padding: "16px 20px",
            borderRadius: 14,
            background: hover === "tc-0" ? C.cardHover : C.cardBg,
            border: "1px solid " + C.cardBorder,
            cursor: "pointer",
            maxWidth: 300,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 4,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>
              daily-code-review
            </div>
            <span
              style={{
                padding: "2px 8px",
                borderRadius: 6,
                background: C.border,
                fontSize: 11,
                color: C.textDim,
              }}
            >
              Local
            </span>
          </div>
          <div style={{ fontSize: 13, color: C.textDim, marginBottom: 10 }}>
            Review yesterday's commits and flag anything concerning
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: C.green,
            }}
          >
            <IconClock size={14} color={C.green} />
            Every day at 9:06 AM
          </div>
        </div>
      </div>
    );
  }

  // FORM sub-view
  if (subView === "form") {
    return (
      <div style={{ flex: 1, padding: "24px 32px", overflow: "auto" }}>
        {toastEl}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: C.text,
            marginBottom: 20,
          }}
        >
          New scheduled task
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderRadius: 10,
            background: C.cardBg,
            border: "1px solid " + C.cardBorder,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1px solid " + C.textMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: C.textMuted,
            }}
          >
            i
          </div>
          <span style={{ fontSize: 13, color: C.textDim }}>
            Local tasks only run while your computer is awake.
          </span>
        </div>
        <div style={{ maxWidth: 480 }}>
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                fontSize: 13,
                color: C.text,
                display: "block",
                marginBottom: 4,
              }}
            >
              Name <span style={{ color: C.accent }}>*</span>
            </label>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.inputBorder,
                background: C.inputBg,
                fontSize: 14,
                color: C.text,
              }}
            >
              daily-code-review
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                fontSize: 13,
                color: C.text,
                display: "block",
                marginBottom: 4,
              }}
            >
              Description <span style={{ color: C.accent }}>*</span>
            </label>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.inputBorder,
                background: C.inputBg,
                fontSize: 14,
                color: C.text,
              }}
            >
              Review yesterday's commits and flag anything concerning
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.inputBorder,
                background: C.inputBg,
                fontSize: 13,
                color: C.text,
                minHeight: 80,
                lineHeight: 1.6,
              }}
            >
              Look at the commits from the last 24 hours. Summarize what
              changed, call out any risky patterns or missing tests, and note
              anything worth following up on.
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.inputBorder,
                fontSize: 13,
                color: C.textDim,
              }}
            >
              Ask permissions <span style={{ fontSize: 10 }}>{"\u25BC"}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.inputBorder,
                fontSize: 13,
                color: C.textDim,
              }}
            >
              Opus 4.6 (1M context)
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.inputBorder,
                fontSize: 13,
                color: C.accent,
                cursor: "pointer",
              }}
            >
              <IconFolder size={14} /> Select folder
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: C.textDim,
              }}
            >
              /{" "}
              <span
                style={{
                  fontFamily: '"JetBrains Mono",monospace',
                  fontSize: 12,
                }}
              >
                autorun
              </span>
              <div
                style={{
                  width: 32,
                  height: 18,
                  borderRadius: 9,
                  background: C.border,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#555",
                    position: "absolute",
                    top: 2,
                    left: 2,
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label
              style={{
                fontSize: 13,
                color: C.textDim,
                display: "block",
                marginBottom: 4,
              }}
            >
              Frequency
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.inputBorder,
                background: C.inputBg,
                fontSize: 14,
                color: C.text,
                cursor: "pointer",
              }}
            >
              Daily <span style={{ fontSize: 10 }}>{"\u25BC"}</span>
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid " + C.inputBorder,
              background: C.inputBg,
              fontSize: 14,
              color: C.text,
              marginBottom: 12,
            }}
          >
            09:00 AM
          </div>
          <p style={{ fontSize: 12, color: C.textMuted, marginBottom: 24 }}>
            Scheduled tasks use a randomized delay of several minutes for server
            performance.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <button
              onClick={function () {
                setSubView("list");
              }}
              style={{
                padding: "8px 20px",
                borderRadius: 10,
                border: "1px solid " + C.border,
                background: "transparent",
                color: C.textDim,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              onClick={function () {
                setCreated(true);
                setToast(true);
                setSubView("card");
                setTimeout(function () {
                  setToast(false);
                }, 3000);
              }}
              style={{
                padding: "8px 20px",
                borderRadius: 10,
                border: "none",
                background: C.accent,
                color: "#fff",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Create task
            </button>
          </div>
        </div>
      </div>
    );
  }

  // LIST sub-view (default)
  return (
    <div style={{ flex: 1, padding: "24px 32px", overflow: "auto" }}>
      {toastEl}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 8,
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>
          Scheduled tasks
        </h2>
        {newTaskDropdown()}
      </div>
      <p style={{ fontSize: 13, color: C.textDim, marginBottom: 16 }}>
        Run tasks on a schedule or whenever you need them. Type{" "}
        <code
          style={{
            background: C.cardBg,
            padding: "2px 6px",
            borderRadius: 4,
            fontSize: 12,
            fontFamily: '"JetBrains Mono",monospace',
          }}
        >
          /schedule
        </code>{" "}
        in any existing task to set one up.
      </p>
      {created ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 10,
              background: C.cardBg,
              border: "1px solid " + C.cardBorder,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "1px solid " + C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                color: C.textMuted,
              }}
            >
              i
            </div>
            <span style={{ fontSize: 13, color: C.textDim }}>
              Local tasks only run while your computer is awake.
            </span>
          </div>
          <div
            onClick={function () {
              setSubView("detail");
            }}
            onMouseEnter={function () {
              setHover("tc-0");
            }}
            onMouseLeave={function () {
              setHover(null);
            }}
            style={{
              padding: "16px 20px",
              borderRadius: 14,
              background: hover === "tc-0" ? C.cardHover : C.cardBg,
              border: "1px solid " + C.cardBorder,
              cursor: "pointer",
              maxWidth: 300,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 4,
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>
                daily-code-review
              </div>
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: 6,
                  background: C.border,
                  fontSize: 11,
                  color: C.textDim,
                }}
              >
                Local
              </span>
            </div>
            <div style={{ fontSize: 13, color: C.textDim, marginBottom: 10 }}>
              Review yesterday's commits and flag anything concerning
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: C.green,
              }}
            >
              <IconClock size={14} color={C.green} />
              Every day at 9:06 AM
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 0",
          }}
        >
          <IconStopwatch size={60} color={C.textMuted} />
          <p style={{ fontSize: 14, color: C.textMuted, marginTop: 16 }}>
            No scheduled tasks yet.
          </p>
        </div>
      )}
    </div>
  );
}

// --- PROJECT CREATE VIEW ---
function ProjectCreateView(props) {
  var setView = props.setView;
  const [form, setForm] = useState(false);

  if (!form) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.bg,
        }}
      >
        <div
          style={{
            background: C.cardBg,
            borderRadius: 16,
            padding: "28px 32px",
            width: 460,
            border: "1px solid " + C.cardBorder,
            boxShadow: "0 16px 48px rgba(0,0,0,.5)",
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: C.text,
              marginBottom: 8,
            }}
          >
            Create a new project
          </h2>
          <p
            style={{
              fontSize: 13,
              color: C.textDim,
              lineHeight: 1.5,
              marginBottom: 24,
            }}
          >
            A dedicated place for ongoing work, where context builds over time.
            Files and instructions stay in a folder on your computer.
          </p>
          {[
            {
              icon: <IconPlus size={20} color={C.text} />,
              title: "Start from scratch",
              desc: "Set up a new folder with instructions and files.",
            },
            {
              icon: <IconFile size={20} color={C.text} />,
              title: "Import a project",
              desc: "Bring a project you made in Chat over to Cowork.",
            },
            {
              icon: <IconFolder size={20} color={C.text} />,
              title: "Use an existing folder",
              desc: "Give Claude a folder you already work from.",
            },
          ].map(function (opt, i) {
            return (
              <div
                key={i}
                onClick={function () {
                  setForm(true);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  borderRadius: 12,
                  border: "1px solid " + C.cardBorder,
                  marginBottom: 10,
                  cursor: "pointer",
                  transition: "background .15s",
                }}
                onMouseEnter={function (e) {
                  e.currentTarget.style.background = C.cardHover;
                }}
                onMouseLeave={function (e) {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: C.accentSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {opt.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
                    {opt.title}
                  </div>
                  <div style={{ fontSize: 12, color: C.textMuted }}>
                    {opt.desc}
                  </div>
                </div>
                <IconChevronRight size={16} color={C.textMuted} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Form view
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.bg,
      }}
    >
      <div
        style={{
          background: C.cardBg,
          borderRadius: 16,
          padding: "28px 32px",
          width: 440,
          border: "1px solid " + C.cardBorder,
          boxShadow: "0 16px 48px rgba(0,0,0,.5)",
        }}
      >
        <div
          onClick={function () {
            setForm(false);
          }}
          style={{ cursor: "pointer", marginBottom: 12 }}
        >
          <IconChevronLeft size={18} color={C.textDim} />
        </div>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: C.text,
            marginBottom: 20,
          }}
        >
          Start a new project
        </h2>
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <label style={{ fontSize: 13, color: C.text }}>Name *</label>
            <span style={{ fontSize: 11, color: C.textMuted }}>
              Please fill out this field.
            </span>
          </div>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid " + C.accent,
              background: C.inputBg,
              fontSize: 14,
              color: C.textMuted,
            }}
          >
            Project name
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              fontSize: 13,
              color: C.textDim,
              display: "block",
              marginBottom: 4,
            }}
          >
            Instructions
          </label>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid " + C.inputBorder,
              background: C.inputBg,
              fontSize: 13,
              color: C.textMuted,
              minHeight: 60,
            }}
          >
            Tell Claude how to work in this project (optional)
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              fontSize: 13,
              color: C.textDim,
              display: "block",
              marginBottom: 4,
            }}
          >
            Add files
          </label>
          <div
            style={{
              padding: "16px",
              borderRadius: 10,
              border: "1px dashed " + C.inputBorder,
              textAlign: "center",
              fontSize: 13,
              color: C.textMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <IconPlus size={14} color={C.textMuted} /> Drop files here or click
            to browse
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <label style={{ fontSize: 13, color: C.textDim }}>
              Choose project location
            </label>
            <span style={{ fontSize: 11, color: C.accent, cursor: "pointer" }}>
              Change
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: C.inputBg,
              border: "1px solid " + C.inputBorder,
            }}
          >
            <IconFolder size={14} color={C.textDim} />
            <span style={{ fontSize: 12, color: C.textDim }}>
              /Users/mjs/Documents/Claude/Projects
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: C.textMuted,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                border: "1px solid " + C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
              }}
            >
              M
            </div>
            Memory icon
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={function () {
                setView("home");
              }}
              style={{
                padding: "8px 20px",
                borderRadius: 10,
                border: "1px solid " + C.border,
                background: "transparent",
                color: C.textDim,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              onClick={function () {
                setView("project-interior");
              }}
              style={{
                padding: "8px 20px",
                borderRadius: 10,
                border: "none",
                background: C.accent,
                color: "#fff",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- PROJECT INTERIOR VIEW ---
function ProjectInteriorView(props) {
  var hover = props.hover;
  var setHover = props.setHover;

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid " + C.border,
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text }}>Test</h2>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{ fontSize: 13, color: C.textMuted, cursor: "pointer" }}
            >
              ...
            </div>
          </div>
        </div>
        <div style={{ padding: "20px 24px" }}>
          <div
            style={{
              background: C.cardBg,
              borderRadius: 14,
              border: "1px solid " + C.cardBorder,
              padding: "14px 18px",
            }}
          >
            <div style={{ fontSize: 14, color: C.textMuted, marginBottom: 16 }}>
              What would you like to work on in this project?
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: "1px solid " + C.border,
                    fontSize: 12,
                    color: C.textDim,
                  }}
                >
                  <IconFile size={12} />
                </div>
                <span style={{ fontSize: 12, color: C.textDim }}>Test</span>
                <IconPlus size={14} color={C.textMuted} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 12, color: C.textMuted }}>
                  Opus 4.6
                </span>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: C.accent + "20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconSend size={14} color={C.accent} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 12, opacity: 0.3 }}>
            ( )
          </div>
          <p style={{ fontSize: 14, color: C.textMuted }}>
            Give Claude a task and it'll pick up your project context
            automatically.
          </p>
        </div>
      </div>
      {/* Right panel */}
      <div
        style={{
          width: 260,
          borderLeft: "1px solid " + C.border,
          padding: "16px",
          overflow: "auto",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>
              Instructions
            </span>
            <IconEdit size={14} color={C.textMuted} />
          </div>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              background: C.cardBg,
              fontSize: 12,
              color: C.textDim,
            }}
          >
            Test
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: C.textDim }}>
              Scheduled
            </span>
            <IconPlus size={14} color={C.textMuted} />
          </div>
          <p style={{ fontSize: 12, color: C.textMuted }}>
            Set up recurring tasks for this project.
          </p>
        </div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: C.textDim }}>
              Context
            </span>
            <IconPlus size={14} color={C.textMuted} />
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: C.textDim,
              display: "block",
              marginBottom: 8,
            }}
          >
            On your computer
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: C.cardBg,
              border: "1px solid " + C.cardBorder,
            }}
          >
            <IconFolder size={14} color={C.textDim} />
            <span style={{ fontSize: 12, color: C.text }}>Test</span>
          </div>
        </div>
        <div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: C.textDim,
              display: "block",
              marginBottom: 8,
            }}
          >
            Memory
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: C.cardBg,
              border: "1px solid " + C.cardBorder,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                border: "1px solid " + C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                color: C.textMuted,
              }}
            >
              M
            </div>
            <span style={{ fontSize: 12, color: C.text }}>Memory</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- IDEAS VIEW ---
function IdeasView(props) {
  var hover = props.hover;
  var setHover = props.setHover;

  var categories = [
    "All",
    "Plugins",
    "Create",
    "Analyze",
    "Organize",
    "Communicate",
  ];
  var ideas = [
    { title: "Draft an architecture design doc", tags: ["Engineering"] },
    {
      title: "Create a code review checklist for my team",
      tags: ["Engineering"],
    },
    { title: "Create a daily briefing", tags: [] },
    { title: "Create a presentation", tags: [] },
    { title: "Write an incident postmortem", tags: ["Engineering"] },
    { title: "Analyze Google Drive documents", tags: [] },
    { title: "Create content", tags: ["Sales revops marketing"] },
    { title: "Write a meeting follow-up", tags: [] },
    { title: "Write technical documentation", tags: ["Engineering"] },
    {
      title:
        "/validate: Activate for validate, build measure learn, BML, pivot, persevere...",
      tags: ["Innovation"],
    },
    { title: "Apply brand voice and style", tags: ["Marketing"] },
    { title: "Analyze financial metrics", tags: ["Innovation"] },
    { title: "Research competitors and compare positioning", tags: [] },
  ];

  return (
    <div style={{ flex: 1, padding: "24px 32px", overflow: "auto" }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: C.text,
          marginBottom: 16,
        }}
      >
        Ideas
      </h2>
      <div
        style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}
      >
        {categories.map(function (cat, i) {
          return (
            <div
              key={i}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                border: "1px solid " + (i === 0 ? C.accent : C.border),
                fontSize: 12,
                color: i === 0 ? C.accent : C.textDim,
                cursor: "pointer",
                background: i === 0 ? C.accentSoft : "transparent",
              }}
            >
              {cat}
            </div>
          );
        })}
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: C.textMuted }}>Connectors</span>
          <span style={{ fontSize: 12, color: C.textMuted }}>Plugins 1</span>
          <span style={{ fontSize: 12, color: C.textMuted }}>Engineering</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderRadius: 10,
          background: C.cardBg,
          border: "1px solid " + C.cardBorder,
          marginBottom: 20,
          fontSize: 13,
          color: C.textDim,
        }}
      >
        <IconLink size={14} color={C.accent} /> Connect your tools to get more
        from Cowork
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 12,
        }}
      >
        {ideas.map(function (idea, i) {
          return (
            <div
              key={i}
              onMouseEnter={function () {
                setHover("idea-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                padding: "16px",
                borderRadius: 12,
                border: "1px solid " + C.cardBorder,
                background: hover === "idea-" + i ? C.cardHover : C.cardBg,
                cursor: "pointer",
                minHeight: 80,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: C.text,
                  lineHeight: 1.5,
                  marginBottom: 8,
                }}
              >
                {idea.title}
              </div>
              {idea.tags.length > 0 ? (
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {idea.tags.map(function (tag, j) {
                    return (
                      <span
                        key={j}
                        style={{
                          fontSize: 10,
                          padding: "2px 8px",
                          borderRadius: 4,
                          background: C.accentSoft,
                          color: C.textDim,
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- SCENARIO VIEW (auto-play demo) ---
function ScenarioView(props) {
  var scIdx = props.scIdx;
  var stepIdx = props.stepIdx;
  var setStepIdx = props.setStepIdx;
  var playing = props.playing;
  var setPlaying = props.setPlaying;
  var setView = props.setView;
  var scrollRef = useRef(null);

  var sc = SCENARIOS[scIdx];
  var totalSteps = sc ? sc.steps.length : 0;

  function getDelay(s) {
    if (!s) return 3000;
    var len = (s.text || "").length;
    if (s.type === "narrator") return Math.max(3000, len * 35);
    if (s.type === "user") return Math.max(2500, len * 30);
    if (s.type === "claude") return Math.max(3500, len * 28);
    if (s.type === "exec") return 2500 + s.items.length * 400;
    if (s.type === "approval") return 3500;
    if (s.type === "phone") return Math.max(3000, len * 30);
    if (s.type === "notification") return 2500;
    return 3000;
  }

  useEffect(
    function () {
      if (!playing || !sc) return;
      if (stepIdx >= totalSteps - 1) {
        var t = setTimeout(function () {
          setPlaying(false);
        }, 2500);
        return function () {
          clearTimeout(t);
        };
      }
      var delay = getDelay(sc.steps[stepIdx]);
      var t = setTimeout(function () {
        setStepIdx(stepIdx + 1);
      }, delay);
      return function () {
        clearTimeout(t);
      };
    },
    [playing, stepIdx, totalSteps],
  );

  useEffect(
    function () {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    },
    [stepIdx],
  );

  var shown = sc ? sc.steps.slice(0, stepIdx + 1) : [];
  var progress = ((stepIdx + 1) / totalSteps) * 100;

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 24px",
          borderBottom: "1px solid " + C.border,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: C.headerBg,
        }}
      >
        <div>
          <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>
            {sc.title}
          </div>
          <div style={{ fontSize: 12, color: C.textDim, marginTop: 2 }}>
            {sc.intro}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12, color: C.textMuted }}>
            {stepIdx + 1}/{totalSteps}
          </span>
          <button
            onClick={function () {
              setPlaying(!playing);
            }}
            style={{
              padding: "5px 14px",
              borderRadius: 8,
              border: "1px solid " + (playing ? C.green + "40" : C.border),
              background: playing ? C.greenSoft : "transparent",
              color: playing ? C.green : C.textMuted,
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            onClick={function () {
              setView("home");
            }}
            style={{
              padding: "5px 14px",
              borderRadius: 8,
              border: "1px solid " + C.border,
              background: "transparent",
              color: C.textMuted,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Exit
          </button>
        </div>
      </div>
      <div style={{ height: 3, background: C.border, flexShrink: 0 }}>
        <div
          style={{
            height: "100%",
            background: C.accent,
            width: progress + "%",
            transition: "width .8s ease",
          }}
        />
      </div>
      <div
        ref={scrollRef}
        style={{ flex: 1, overflow: "auto", padding: "16px 24px" }}
      >
        {shown.map(function (step, i) {
          var isCurrent = i === shown.length - 1;
          if (step.type === "approval") {
            return (
              <ApprovalStep
                key={i}
                data={step}
                isCurrent={isCurrent}
                opacity={isCurrent ? 1 : 0.35}
              />
            );
          }
          return <div key={i}>{renderStep(step, isCurrent)}</div>;
        })}
      </div>
      <div style={{ padding: "12px 24px", borderTop: "1px solid " + C.border }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <IconPlus size={16} color={C.textMuted} />
          <div
            style={{
              flex: 1,
              padding: "10px 16px",
              borderRadius: 10,
              background: C.inputBg,
              border: "1px solid " + C.inputBorder,
              fontSize: 13,
              color: C.textMuted,
            }}
          >
            Ask Claude anything
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: C.accent + "20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconSend size={14} color={C.accent} />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- DISPATCH VIEW ---
function DispatchView(props) {
  var hover = props.hover;
  var setHover = props.setHover;
  const [keepAwake, setKeepAwake] = useState(true);
  const [browserActions, setBrowserActions] = useState(true);
  const [computerUse, setComputerUse] = useState(false);
  const [infoBox, setInfoBox] = useState(true);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div
          style={{
            width: 240,
            borderRight: "1px solid " + C.border,
            padding: "16px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 600, color: C.text }}>
              Dispatch
            </span>
            <span style={{ fontSize: 10, color: C.textMuted }}>{"\u25BC"}</span>
          </div>
          <p
            style={{
              fontSize: 12,
              color: C.textDim,
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            Dispatch to Claude and check in from anywhere: a task, a code
            session, in one continuous thread.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <IconStopwatch
                size={14}
                color={keepAwake ? C.green : C.textMuted}
              />
              <span style={{ fontSize: 13, color: C.text }}>Keep awake</span>
            </div>
            <div
              onClick={function () {
                setKeepAwake(!keepAwake);
              }}
              style={{
                width: 36,
                height: 20,
                borderRadius: 10,
                background: keepAwake ? C.green + "40" : C.border,
                cursor: "pointer",
                position: "relative",
                transition: "background .2s",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: keepAwake ? C.green : "#555",
                  position: "absolute",
                  top: 2,
                  transition: "left .2s",
                  left: keepAwake ? 18 : 2,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 13, color: C.text }}>
              Allow all browser actions
            </span>
            <div
              onClick={function () {
                setBrowserActions(!browserActions);
              }}
              style={{
                width: 36,
                height: 20,
                borderRadius: 10,
                background: browserActions ? C.green + "40" : C.border,
                cursor: "pointer",
                position: "relative",
                transition: "background .2s",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: browserActions ? C.green : "#555",
                  position: "absolute",
                  top: 2,
                  transition: "left .2s",
                  left: browserActions ? 18 : 2,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <div
              onClick={function () {
                setComputerUse(!computerUse);
              }}
              style={{
                width: 16,
                height: 16,
                borderRadius: 3,
                border: "1px solid " + (computerUse ? C.accent : C.textMuted),
                background: computerUse ? C.accent + "30" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 10,
                color: computerUse ? C.accent : "transparent",
              }}
            >
              {computerUse ? "\u2713" : ""}
            </div>
            <span style={{ fontSize: 13, color: C.text }}>Computer use</span>
          </div>
          <div style={{ marginTop: "auto" }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: C.textMuted,
                textTransform: "uppercase",
                marginBottom: 4,
                display: "block",
              }}
            >
              Outputs
            </span>
            <p style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>
              Files Claude shares will appear here.
            </p>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            padding: "24px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {infoBox ? (
            <div
              style={{
                background: C.cardBg,
                borderRadius: 14,
                padding: "20px 24px",
                border: "1px solid " + C.cardBorder,
                position: "relative",
                marginBottom: 16,
              }}
            >
              <div
                onClick={function () {
                  setInfoBox(false);
                }}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  cursor: "pointer",
                }}
              >
                <IconX size={16} color={C.textMuted} />
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 10,
                }}
              >
                Work with Claude, right on your computer
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: C.textDim,
                  lineHeight: 1.7,
                  marginBottom: 12,
                }}
              >
                Claude can work with your files, browse in Chrome, and use
                connectors. Dispatch a task or a code session from the mobile
                app, and Claude will keep working as long as your computer stays
                awake.
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: C.textDim,
                  lineHeight: 1.7,
                  marginBottom: 10,
                }}
              >
                Hey, glad you're here. Tell me what's on your plate, no ask is
                too big or small. You could ask me to:
              </p>
              <ul
                style={{
                  fontSize: 13,
                  color: C.textDim,
                  lineHeight: 1.8,
                  paddingLeft: 20,
                  marginBottom: 12,
                }}
              >
                <li>
                  Find a confirmation in Downloads and check the order status on
                  the site.
                </li>
                <li>
                  Find a passport scan, check visa rules for a trip, and flag
                  what's missing.
                </li>
                <li>
                  Scan Slack for a bug report, find the file, and open a Code
                  session to fix it.
                </li>
                <li>
                  Search your repos for an error message and trace where it
                  comes from.
                </li>
              </ul>
              <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>
                You can also control this conversation from your phone. Download
                the Claude app for iOS or Android, then go to the Dispatch tab.
              </p>
            </div>
          ) : (
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: 14, color: C.textMuted }}>
                Start a conversation with Claude.
              </p>
            </div>
          )}
        </div>
      </div>
      <div style={{ padding: "12px 24px", borderTop: "1px solid " + C.border }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <IconPlus size={16} color={C.textMuted} />
          <div
            style={{
              flex: 1,
              padding: "10px 16px",
              borderRadius: 10,
              background: C.inputBg,
              border: "1px solid " + C.inputBorder,
              fontSize: 13,
              color: C.textMuted,
            }}
          >
            Ask Claude anything
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: C.accent + "20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconSend size={14} color={C.accent} />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- WELCOME SCREEN ---
function WelcomeScreen(props) {
  var startTour = props.startTour;
  var jumpTo = props.jumpTo;
  var setView = props.setView;
  var hover = props.hover;
  var setHover = props.setHover;

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        animation: "fadeIn 1s ease",
      }}
    >
      <h1
        style={{
          fontFamily: '"Playfair Display",Georgia,serif',
          fontSize: 44,
          fontWeight: 700,
          color: C.text,
          textAlign: "center",
          marginBottom: 16,
          lineHeight: 1.15,
        }}
      >
        Cowork Interactive Tour
      </h1>
      <p
        style={{
          fontSize: 17,
          color: C.textDim,
          textAlign: "center",
          maxWidth: 520,
          lineHeight: 1.65,
          marginBottom: 6,
        }}
      >
        Explore every panel of Claude's autonomous desktop assistant. Click
        through the real UI or watch auto-playing demos.
      </p>
      <p
        style={{
          fontSize: 13,
          color: C.textMuted,
          textAlign: "center",
          marginBottom: 36,
        }}
      >
        Interactive panels + 8 scenario demos
      </p>
      <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
        <button
          onClick={function () {
            setView("home");
          }}
          style={{
            padding: "14px 40px",
            borderRadius: 14,
            border: "none",
            background: C.accent,
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            animation: "glow 2s ease infinite",
          }}
        >
          Explore Cowork
        </button>
        <button
          onClick={startTour}
          style={{
            padding: "14px 40px",
            borderRadius: 14,
            border: "1px solid " + C.border,
            background: "transparent",
            color: C.textDim,
            fontSize: 16,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Watch Demos
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 10,
          maxWidth: 680,
        }}
      >
        {SCENARIOS.map(function (s, i) {
          return (
            <div
              key={i}
              onClick={function () {
                jumpTo(i);
              }}
              onMouseEnter={function () {
                setHover("w-" + i);
              }}
              onMouseLeave={function () {
                setHover(null);
              }}
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border:
                  "1px solid " +
                  (hover === "w-" + i ? C.highlightBorder : C.border),
                fontSize: 12,
                color: C.textDim,
                cursor: "pointer",
                background: hover === "w-" + i ? C.cardHover : "transparent",
                textAlign: "center",
                lineHeight: 1.4,
                transition: "all .15s",
              }}
            >
              <div style={{ fontSize: 15, marginBottom: 4 }}>
                {
                  [
                    "\u{1F4C4}",
                    "\u{1F4C2}",
                    "\u{1F9E0}",
                    "\u{1F50C}",
                    "\u{1F4CA}",
                    "\u{1F4F1}",
                    "\u{1F5A5}",
                    "\u23F0",
                  ][i]
                }
              </div>
              <div>{s.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- FINALE SCREEN ---
function FinaleScreen(props) {
  var setView = props.setView;
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        animation: "fadeIn .8s ease",
      }}
    >
      <div style={{ fontSize: 56, marginBottom: 20 }}>{"\u{1F389}"}</div>
      <h1
        style={{
          fontFamily: '"Playfair Display",Georgia,serif',
          fontSize: 36,
          fontWeight: 700,
          color: C.text,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Tour Complete!
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 12,
          maxWidth: 600,
          marginBottom: 32,
        }}
      >
        {[
          "File creation",
          "Folder security",
          "Project memory",
          "Connectors",
          "Document skills",
          "Dispatch",
          "Computer Use",
          "Scheduling",
        ].map(function (f, i) {
          return (
            <div
              key={i}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                background: C.greenSoft,
                border: "1px solid " + C.green + "25",
                fontSize: 13,
                color: C.green,
                textAlign: "center",
              }}
            >
              {f}
            </div>
          );
        })}
      </div>
      <p
        style={{
          fontSize: 15,
          color: C.textDim,
          textAlign: "center",
          maxWidth: 400,
          marginBottom: 28,
        }}
      >
        Open the Claude Desktop app and click the Cowork tab to get started for
        real.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={function () {
            setView("home");
          }}
          style={{
            padding: "12px 36px",
            borderRadius: 12,
            border: "none",
            background: C.accent,
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Explore Panels
        </button>
        <button
          onClick={function () {
            setView("welcome");
          }}
          style={{
            padding: "12px 36px",
            borderRadius: 12,
            border: "1px solid " + C.border,
            background: "transparent",
            color: C.textDim,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Back to Start
        </button>
      </div>
    </div>
  );
}

// --- SEARCH OVERLAY ---
function SearchOverlay(props) {
  var hover = props.hover;
  var setHover = props.setHover;
  var onClose = props.onClose;

  var SEARCH_ITEMS = [
    { name: "Greeting exchange", time: "Today", icon: "chat" },
    { name: "Take screenshot of current screen", time: "Today", icon: "chat" },
    { name: "Predicting your future profile", time: "Today", icon: "chat" },
    { name: "Untitled task", time: "Today", icon: "chat" },
    { name: "Rex Day 1 mystery shop leads", time: "Today", icon: "chat" },
    {
      name: "Deep verify OpenClaw current state",
      time: "Yesterday",
      icon: "chat",
    },
    {
      name: "Review updated Rex plan + OpenClaw",
      time: "Yesterday",
      icon: "chat",
    },
    { name: "Fetch Rex review report", time: "Yesterday", icon: "chat" },
    { name: "Review Rex gstack docs", time: "Yesterday", icon: "chat" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: C.modalOverlay,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 200,
        paddingTop: 80,
      }}
      onClick={onClose}
    >
      <div
        onClick={function (e) {
          e.stopPropagation();
        }}
        style={{
          background: C.cardBg,
          borderRadius: 16,
          width: 520,
          maxHeight: 500,
          border: "1px solid " + C.cardBorder,
          boxShadow: "0 16px 48px rgba(0,0,0,.6)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "14px 18px",
            borderBottom: "1px solid " + C.border,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <IconSearch size={16} color={C.textMuted} />
          <span style={{ fontSize: 14, color: C.textMuted, flex: 1 }}>
            Search chats and projects
          </span>
        </div>
        <div style={{ padding: "8px 0" }}>
          <div
            onMouseEnter={function () {
              setHover("sr-pin");
            }}
            onMouseLeave={function () {
              setHover(null);
            }}
            style={{
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              background: hover === "sr-pin" ? C.sidebarHover : "transparent",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <IconBulb size={16} color={C.accent} />
              <span style={{ fontSize: 14, color: C.text }}>
                How to use Claude
              </span>
            </div>
            <IconChevronRight size={14} color={C.textMuted} />
          </div>
        </div>
        <div style={{ maxHeight: 340, overflow: "auto" }}>
          {SEARCH_ITEMS.map(function (item, i) {
            return (
              <div
                key={i}
                onMouseEnter={function () {
                  setHover("sr-" + i);
                }}
                onMouseLeave={function () {
                  setHover(null);
                }}
                onClick={onClose}
                style={{
                  padding: "10px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  background:
                    hover === "sr-" + i ? C.sidebarHover : "transparent",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <IconMessageCircle size={14} color={C.textMuted} />
                  <span style={{ fontSize: 13, color: C.textDim }}>
                    {item.name}
                  </span>
                </div>
                <span style={{ fontSize: 11, color: C.textMuted }}>
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- MAIN APP ---
export default function CoworkExplorer() {
  const [view, setView] = useState("welcome");
  const [hover, setHover] = useState(null);
  const [scIdx, setScIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function startTour() {
    setScIdx(0);
    setStepIdx(0);
    setPlaying(true);
    setView("scenario");
  }

  function jumpToScenario(i) {
    setScIdx(i);
    setStepIdx(0);
    setPlaying(true);
    setView("scenario");
  }

  function renderMainContent() {
    if (view === "welcome")
      return (
        <WelcomeScreen
          startTour={startTour}
          jumpTo={jumpToScenario}
          setView={setView}
          hover={hover}
          setHover={setHover}
        />
      );
    if (view === "finale") return <FinaleScreen setView={setView} />;
    if (view === "home")
      return (
        <HomeView
          setView={setView}
          onScenario={jumpToScenario}
          hover={hover}
          setHover={setHover}
        />
      );
    if (view === "customize")
      return (
        <CustomizeView setView={setView} hover={hover} setHover={setHover} />
      );
    if (view === "browse-plugins")
      return (
        <BrowsePluginsView
          setView={setView}
          hover={hover}
          setHover={setHover}
        />
      );
    if (view === "skills")
      return <SkillsView hover={hover} setHover={setHover} />;
    if (view === "scheduled")
      return <ScheduledView hover={hover} setHover={setHover} />;
    if (view === "project-create")
      return <ProjectCreateView setView={setView} />;
    if (view === "project-interior")
      return <ProjectInteriorView hover={hover} setHover={setHover} />;
    if (view === "ideas")
      return <IdeasView hover={hover} setHover={setHover} />;
    if (view === "dispatch")
      return <DispatchView hover={hover} setHover={setHover} />;
    if (view === "scenario")
      return (
        <ScenarioView
          scIdx={scIdx}
          stepIdx={stepIdx}
          setStepIdx={setStepIdx}
          playing={playing}
          setPlaying={setPlaying}
          setView={setView}
        />
      );
    return (
      <HomeView
        setView={setView}
        onScenario={jumpToScenario}
        hover={hover}
        setHover={setHover}
      />
    );
  }

  var showSidebar = view !== "welcome" && view !== "finale";

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
        @keyframes glow{0%,100%{box-shadow:0 0 12px #c97d4a30}50%{box-shadow:0 0 28px #c97d4a60}}
        @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 #c97d4a00}50%{box-shadow:0 0 0 8px #c97d4a20}}
        @keyframes typing{from{width:0}to{width:100%}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes progressFill{from{width:0%}to{width:var(--target)}}
      `,
        }}
      />
      <TitleBar
        view={view}
        navArrows={showSidebar}
        canBack={true}
        canForward={true}
        onBack={function () {
          if (view === "browse-plugins") setView("customize");
          else if (view === "skills") setView("customize");
          else if (view === "project-interior") setView("home");
          else if (view === "project-create") setView("home");
          else if (view === "scenario") setView("home");
          else if (view === "dispatch") setView("home");
          else setView("welcome");
        }}
        onForward={function () {}}
        rightContent={
          view === "scenario" ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginRight: 14,
              }}
            >
              <span style={{ fontSize: 12, color: C.textMuted }}>
                {scIdx + 1}/{SCENARIOS.length}
              </span>
              <button
                onClick={function () {
                  if (scIdx < SCENARIOS.length - 1) {
                    setScIdx(scIdx + 1);
                    setStepIdx(0);
                  } else {
                    setView("finale");
                  }
                }}
                style={{
                  padding: "4px 12px",
                  borderRadius: 8,
                  border: "1px solid " + C.border,
                  background: "transparent",
                  color: C.textMuted,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                Next scenario
              </button>
            </div>
          ) : null
        }
      />
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {showSidebar ? (
          <Sidebar
            view={view}
            setView={setView}
            hover={hover}
            setHover={setHover}
            onScenario={jumpToScenario}
            onSearchOpen={function () {
              setSearchOpen(true);
            }}
          />
        ) : null}
        {renderMainContent()}
      </div>
      {searchOpen ? (
        <SearchOverlay
          hover={hover}
          setHover={setHover}
          onClose={function () {
            setSearchOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}
