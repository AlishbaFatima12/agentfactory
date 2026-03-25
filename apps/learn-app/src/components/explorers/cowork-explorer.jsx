import React, { useState, useEffect, useRef, useCallback } from "react";

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

// ─── SCENARIOS (auto-play demos) ───
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
      { type: "user", text: "My name is Alex. Q2 target is 500 leads." },
      {
        type: "claude",
        text: "Noted. This persists in project memory across sessions.",
      },
      { type: "narrator", text: "--- New task, same project ---" },
      { type: "user", text: "What do you remember about me?" },
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
      { type: "user", text: "Now make a PowerPoint from this." },
      { type: "exec", items: ["Generating 6 slides from analysis"] },
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
      { type: "claude", text: "Creating 5 slides in Keynote..." },
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

// ─── SVG Icons ───
function IconPlus(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", { d: "M12 5v14M5 12h14" }),
  );
}
function IconSearch(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("circle", { cx: 11, cy: 11, r: 8 }),
    React.createElement("path", { d: "M21 21l-4.35-4.35" }),
  );
}
function IconClock(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React.createElement("path", { d: "M12 6v6l4 2" }),
  );
}
function IconSend(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", { d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" }),
  );
}
function IconBulb(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M9 18h6M10 22h4M12 2a7 7 0 00-4 12.71V16h8v-1.29A7 7 0 0012 2z",
    }),
  );
}
function IconBriefcase(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("rect", { x: 2, y: 7, width: 20, height: 14, rx: 2 }),
    React.createElement("path", {
      d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
    }),
  );
}
function IconFolder(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z",
    }),
  );
}
function IconChevronLeft(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", { d: "M15 18l-6-6 6-6" }),
  );
}
function IconChevronRight(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", { d: "M9 18l6-6-6-6" }),
  );
}
function IconX(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", { d: "M18 6L6 18M6 6l12 12" }),
  );
}
function IconFile(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",
    }),
    React.createElement("path", { d: "M14 2v6h6" }),
  );
}
function IconSettings(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 16,
      height: p.size || 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("circle", { cx: 12, cy: 12, r: 3 }),
    React.createElement("path", {
      d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
    }),
  );
}
function IconStopwatch(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 60,
      height: p.size || 60,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || C.textMuted,
      strokeWidth: 1.5,
      strokeLinecap: "round",
    },
    React.createElement("circle", { cx: 12, cy: 13, r: 8 }),
    React.createElement("path", { d: "M12 9v4l2 2M10 2h4M12 2v3" }),
  );
}
function IconEdit(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 14,
      height: p.size || 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7",
    }),
    React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
    }),
  );
}
function IconDownload(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 14,
      height: p.size || 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
    }),
  );
}
function IconTrash(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 14,
      height: p.size || 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2",
    }),
  );
}
function IconUpload(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 14,
      height: p.size || 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",
    }),
  );
}
function IconMessageCircle(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 14,
      height: p.size || 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    }),
  );
}
function IconGrid(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 14,
      height: p.size || 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("rect", { x: 3, y: 3, width: 7, height: 7 }),
    React.createElement("rect", { x: 14, y: 3, width: 7, height: 7 }),
    React.createElement("rect", { x: 14, y: 14, width: 7, height: 7 }),
    React.createElement("rect", { x: 3, y: 14, width: 7, height: 7 }),
  );
}
function IconLink(p) {
  return React.createElement(
    "svg",
    {
      width: p.size || 14,
      height: p.size || 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: p.color || "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
    },
    React.createElement("path", {
      d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71",
    }),
    React.createElement("path", {
      d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
    }),
  );
}

// ─── Plugin data ───
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

// ─── ApprovalStep component ───
function ApprovalStep(props) {
  var s = props.data;
  var isCurrent = props.isCurrent;
  var opacity = props.opacity;
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
  return React.createElement(
    "div",
    {
      style: {
        opacity: opacity,
        transition: "opacity .5s ease",
        animation: isCurrent ? "fadeUp .5s ease" : "none",
        background: ok ? C.greenSoft : C.yellowSoft,
        border: "1px solid " + (ok ? C.green + "30" : C.yellow + "30"),
        borderRadius: 14,
        padding: "16px 20px",
        margin: "8px 0",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          fontSize: 12,
          fontWeight: 600,
          color: ok ? C.green : C.yellow,
          marginBottom: 8,
          letterSpacing: 0.5,
        },
      },
      ok ? "APPROVED" : "APPROVAL REQUIRED",
    ),
    React.createElement(
      "div",
      { style: { fontSize: 14, color: C.textDim } },
      React.createElement("strong", { style: { color: C.text } }, s.action),
      ": ",
      s.file,
    ),
    s.preview
      ? React.createElement(
          "pre",
          {
            style: {
              background: "#0e0c0a",
              borderRadius: 10,
              padding: "12px 16px",
              fontSize: 12,
              color: C.textDim,
              margin: "10px 0",
              fontFamily: '"JetBrains Mono",monospace',
              whiteSpace: "pre-wrap",
              lineHeight: 1.6,
            },
          },
          s.preview,
        )
      : null,
    !ok
      ? React.createElement(
          "div",
          { style: { display: "flex", gap: 10, marginTop: 12 } },
          React.createElement(
            "button",
            {
              onClick: function () {
                setOk(true);
              },
              style: {
                padding: "8px 22px",
                borderRadius: 10,
                border: "none",
                fontSize: 13,
                fontWeight: 600,
                background: C.approveBtn,
                color: "#fff",
                cursor: "pointer",
              },
            },
            "Approve",
          ),
          React.createElement(
            "button",
            {
              style: {
                padding: "8px 22px",
                borderRadius: 10,
                border: "none",
                fontSize: 13,
                fontWeight: 600,
                background: C.denyBtn,
                color: "#fff",
                cursor: "pointer",
              },
            },
            "Deny",
          ),
        )
      : null,
  );
}

// ─── Step rendering ───
function renderStep(s, isCurrent) {
  var opacity = isCurrent ? 1 : 0.35;
  var wrapper = {
    opacity: opacity,
    transition: "opacity .5s ease",
    animation: isCurrent ? "fadeUp .5s ease" : "none",
  };

  if (s.type === "narrator")
    return React.createElement(
      "div",
      {
        style: Object.assign({}, wrapper, {
          textAlign: "center",
          padding: "12px 20px",
          margin: "8px 0",
        }),
      },
      React.createElement(
        "div",
        {
          style: {
            fontSize: 13,
            color: C.textMuted,
            fontStyle: "italic",
            lineHeight: 1.6,
          },
        },
        s.text,
      ),
    );

  if (s.type === "user")
    return React.createElement(
      "div",
      {
        style: Object.assign({}, wrapper, {
          display: "flex",
          justifyContent: "flex-end",
          padding: "4px 0",
        }),
      },
      React.createElement(
        "div",
        {
          style: {
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
          },
        },
        s.text,
      ),
    );

  if (s.type === "claude")
    return React.createElement(
      "div",
      {
        style: Object.assign({}, wrapper, {
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
          padding: "4px 0",
        }),
      },
      React.createElement(
        "div",
        {
          style: {
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
          },
        },
        "C",
      ),
      React.createElement(
        "div",
        {
          style: {
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
          },
        },
        s.text,
      ),
    );

  if (s.type === "exec")
    return React.createElement(
      "div",
      {
        style: Object.assign({}, wrapper, {
          background: C.execBg,
          border: "1px solid " + (isCurrent ? C.execBorder : C.border),
          borderLeft: "3px solid " + C.execBorder,
          borderRadius: "0 12px 12px 0",
          padding: "12px 16px",
          fontSize: 13,
          margin: "6px 0",
          fontFamily: '"JetBrains Mono",monospace',
        }),
      },
      React.createElement(
        "div",
        {
          style: {
            fontSize: 10,
            color: C.green,
            fontWeight: 600,
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          },
        },
        "EXECUTION",
      ),
      s.items.map(function (item, i) {
        return React.createElement(
          "div",
          {
            key: i,
            style: {
              color: C.textDim,
              padding: "3px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
              animation: isCurrent ? "slideIn .4s ease" : "none",
              animationDelay: i * 120 + "ms",
              animationFillMode: "both",
            },
          },
          React.createElement(
            "span",
            { style: { color: C.green, fontSize: 12 } },
            "$",
          ),
          item,
        );
      }),
    );

  if (s.type === "approval")
    return React.createElement(ApprovalStep, {
      data: s,
      isCurrent: isCurrent,
      opacity: opacity,
    });

  if (s.type === "phone")
    return React.createElement(
      "div",
      {
        style: Object.assign({}, wrapper, {
          display: "flex",
          justifyContent: "flex-end",
          padding: "4px 0",
        }),
      },
      React.createElement(
        "div",
        {
          style: {
            background: C.blueSoft,
            border: "1px solid " + (isCurrent ? C.blue + "40" : C.blue + "15"),
            borderRadius: "18px 18px 4px 18px",
            padding: "14px 18px",
            maxWidth: "65%",
          },
        },
        React.createElement(
          "div",
          {
            style: {
              fontSize: 10,
              color: C.blue,
              fontWeight: 600,
              marginBottom: 6,
              letterSpacing: 1,
            },
          },
          "FROM YOUR PHONE (DISPATCH)",
        ),
        React.createElement(
          "div",
          { style: { fontSize: 15, color: C.text, lineHeight: 1.5 } },
          s.text,
        ),
      ),
    );

  if (s.type === "notification")
    return React.createElement(
      "div",
      {
        style: Object.assign({}, wrapper, {
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
        }),
      },
      s.text,
    );

  return null;
}

function StepItem(props) {
  return renderStep(props.step, props.isCurrent);
}

// ─── Title Bar ───
function TitleBar(props) {
  var view = props.view;
  return React.createElement(
    "div",
    {
      style: {
        height: 44,
        background: C.headerBg,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid " + C.border,
        flexShrink: 0,
        userSelect: "none",
      },
    },
    React.createElement(
      "div",
      { style: { display: "flex", gap: 8, marginLeft: 14, marginRight: 16 } },
      React.createElement("div", {
        style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#ff5f57",
        },
      }),
      React.createElement("div", {
        style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#febc2e",
        },
      }),
      React.createElement("div", {
        style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#28c840",
        },
      }),
    ),
    props.navArrows
      ? React.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: 6,
              marginRight: 12,
              color: C.textMuted,
            },
          },
          React.createElement(
            "span",
            {
              onClick: props.onBack,
              style: {
                cursor: "pointer",
                fontSize: 14,
                padding: "2px 6px",
                opacity: props.canBack ? 1 : 0.3,
              },
            },
            "<",
          ),
          React.createElement(
            "span",
            {
              onClick: props.onForward,
              style: {
                cursor: "pointer",
                fontSize: 14,
                padding: "2px 6px",
                opacity: props.canForward ? 1 : 0.3,
              },
            },
            ">",
          ),
        )
      : null,
    React.createElement(
      "div",
      { style: { flex: 1, display: "flex", justifyContent: "center" } },
      ["Chat", "Cowork", "Code"].map(function (t) {
        return React.createElement(
          "div",
          {
            key: t,
            style: {
              padding: "6px 20px",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 6,
              color: t === "Cowork" ? C.text : C.textMuted,
              background: t === "Cowork" ? C.bg : "transparent",
              cursor: "default",
            },
          },
          t,
        );
      }),
    ),
    props.rightContent || null,
  );
}

// ─── Sidebar ───
function Sidebar(props) {
  var view = props.view;
  var setView = props.setView;
  var hover = props.hover;
  var setHover = props.setHover;

  function navItem(icon, label, targetView, onClick) {
    var active = view === targetView;
    return React.createElement(
      "div",
      {
        key: label,
        onClick:
          onClick ||
          function () {
            setView(targetView);
          },
        onMouseEnter: function () {
          setHover("sb-" + label);
        },
        onMouseLeave: function () {
          setHover(null);
        },
        style: {
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
        },
      },
      icon,
      label,
    );
  }

  return React.createElement(
    "div",
    {
      style: {
        width: 180,
        background: C.sidebar,
        borderRight: "1px solid " + C.border,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
      },
    },
    React.createElement(
      "div",
      { style: { padding: "10px 8px", borderBottom: "1px solid " + C.border } },
      navItem(
        React.createElement(IconPlus, { size: 15 }),
        "+ New task",
        "home",
      ),
      navItem(
        React.createElement(IconSearch, { size: 15 }),
        "Search",
        null,
        function () {
          if (props.onSearchOpen) props.onSearchOpen();
        },
      ),
      navItem(
        React.createElement(IconClock, { size: 15 }),
        "Scheduled",
        "scheduled",
      ),
      navItem(
        React.createElement(IconSend, { size: 15 }),
        "Dispatch",
        "dispatch",
      ),
      navItem(React.createElement(IconBulb, { size: 15 }), "Ideas", "ideas"),
      navItem(
        React.createElement(IconBriefcase, { size: 15 }),
        "Customize",
        "customize",
      ),
    ),
    // Projects
    React.createElement(
      "div",
      {
        style: {
          padding: "10px 14px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
      React.createElement(
        "span",
        {
          style: {
            fontSize: 11,
            fontWeight: 600,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: 1,
          },
        },
        "Projects",
      ),
      React.createElement(
        "span",
        {
          onClick: function () {
            setView("project-create");
          },
          style: { cursor: "pointer", color: C.textMuted, fontSize: 16 },
        },
        "+",
      ),
    ),
    React.createElement(
      "div",
      { style: { padding: "2px 8px" } },
      React.createElement(
        "div",
        {
          onClick: function () {
            setView("project-interior");
          },
          onMouseEnter: function () {
            setHover("sb-test");
          },
          onMouseLeave: function () {
            setHover(null);
          },
          style: {
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
          },
        },
        React.createElement(IconFolder, { size: 14 }),
        "Test",
      ),
    ),
    // Recents
    React.createElement(
      "div",
      {
        style: {
          padding: "14px 14px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
      React.createElement(
        "span",
        {
          style: {
            fontSize: 11,
            fontWeight: 600,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: 1,
          },
        },
        "Recents",
      ),
    ),
    React.createElement(
      "div",
      { style: { flex: 1, overflow: "auto", padding: "2px 8px" } },
      SCENARIOS.map(function (sc, i) {
        var isDispatch = i === 5;
        return React.createElement(
          "div",
          {
            key: i,
            onClick: function () {
              props.onScenario(i);
            },
            onMouseEnter: function () {
              setHover("sc-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 10px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 12,
              color: C.textDim,
              background: hover === "sc-" + i ? C.sidebarHover : "transparent",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          },
          isDispatch
            ? React.createElement(
                "span",
                {
                  style: {
                    fontSize: 9,
                    padding: "1px 5px",
                    borderRadius: 4,
                    background: C.blue + "25",
                    color: C.blue,
                    fontWeight: 600,
                  },
                },
                "Dispatch",
              )
            : React.createElement("span", {
                style: {
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.blue,
                  flexShrink: 0,
                },
              }),
          React.createElement(
            "span",
            { style: { overflow: "hidden", textOverflow: "ellipsis" } },
            sc.title,
          ),
        );
      }),
    ),
    // Bottom user area
    React.createElement(
      "div",
      {
        style: {
          padding: "12px 14px",
          borderTop: "1px solid " + C.border,
          display: "flex",
          alignItems: "center",
          gap: 10,
        },
      },
      React.createElement(
        "div",
        {
          style: {
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
          },
        },
        "M",
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { style: { fontSize: 12, color: C.text, fontWeight: 500 } },
          "Muhammad",
        ),
        React.createElement(
          "div",
          { style: { fontSize: 10, color: C.textMuted } },
          "Opus 4.6",
        ),
      ),
    ),
  );
}

// ─── HOME VIEW ───
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

  return React.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 40px 20px",
        overflow: "auto",
      },
    },
    React.createElement(
      "h1",
      {
        style: {
          fontFamily: '"Playfair Display",Georgia,serif',
          fontSize: 34,
          fontWeight: 700,
          color: C.text,
          textAlign: "center",
          marginBottom: 8,
          lineHeight: 1.15,
        },
      },
      "Let's knock something off your list",
    ),
    React.createElement(
      "p",
      { style: { fontSize: 13, color: C.textMuted, marginBottom: 28 } },
      "Cowork is in research preview. Learn how to use it safely.",
    ),
    // Input area
    React.createElement(
      "div",
      {
        style: {
          width: "100%",
          maxWidth: 520,
          background: C.cardBg,
          borderRadius: 16,
          border: "1px solid " + C.cardBorder,
          padding: "16px 20px",
          marginBottom: 12,
        },
      },
      React.createElement(
        "div",
        { style: { fontSize: 15, color: C.textMuted, marginBottom: 20 } },
        "How can I help you today?",
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              position: "relative",
            },
          },
          React.createElement(
            "div",
            {
              onClick: function () {
                setShowDrop(!showDrop);
              },
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 8,
                border: "1px solid " + C.border,
                cursor: "pointer",
                fontSize: 13,
                color: C.textDim,
              },
            },
            React.createElement(IconFolder, { size: 14 }),
            "Work in a project",
            React.createElement(
              "span",
              { style: { fontSize: 10, marginLeft: 4 } },
              showDrop ? "\u25B2" : "\u25BC",
            ),
          ),
          showDrop
            ? React.createElement(
                "div",
                {
                  style: {
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
                  },
                },
                React.createElement(
                  "div",
                  {
                    style: {
                      padding: "4px 12px 8px",
                      fontSize: 11,
                      color: C.textMuted,
                      fontWeight: 600,
                    },
                  },
                  "Recent",
                ),
                [
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
                  return React.createElement(
                    "div",
                    {
                      key: i,
                      onMouseEnter: function () {
                        setHover("drop-" + i);
                      },
                      onMouseLeave: function () {
                        setHover(null);
                      },
                      style: {
                        padding: "8px 16px",
                        cursor: "pointer",
                        background:
                          hover === "drop-" + i
                            ? C.sidebarHover
                            : "transparent",
                      },
                    },
                    React.createElement(
                      "div",
                      { style: { fontSize: 13, color: C.text } },
                      p.name,
                    ),
                    React.createElement(
                      "div",
                      { style: { fontSize: 11, color: C.textMuted } },
                      p.path,
                    ),
                  );
                }),
                React.createElement(
                  "div",
                  {
                    style: {
                      padding: "8px 16px",
                      borderTop: "1px solid " + C.border,
                      marginTop: 4,
                      cursor: "pointer",
                      fontSize: 13,
                      color: C.textDim,
                    },
                  },
                  "Choose a different folder",
                ),
                React.createElement(
                  "div",
                  {
                    style: {
                      padding: "8px 16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid " + C.border,
                    },
                  },
                  React.createElement(
                    "span",
                    { style: { fontSize: 13, color: C.textDim } },
                    "Projects",
                  ),
                  React.createElement(
                    "div",
                    {
                      onClick: function () {
                        setShowDrop(false);
                        setView("project-create");
                      },
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "5px 12px",
                        borderRadius: 8,
                        border: "1px solid " + C.border,
                        cursor: "pointer",
                        fontSize: 12,
                        color: C.textDim,
                      },
                    },
                    React.createElement(IconPlus, { size: 12 }),
                    "Create new project",
                  ),
                ),
              )
            : null,
        ),
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "center", gap: 8 } },
          React.createElement(
            "span",
            { style: { fontSize: 12, color: C.textMuted } },
            "Opus 4.6",
          ),
          React.createElement(
            "div",
            {
              style: {
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: C.accent + "20",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              },
            },
            React.createElement(IconSend, { size: 14, color: C.accent }),
          ),
        ),
      ),
    ),
    // Active tasks
    React.createElement(
      "div",
      { style: { width: "100%", maxWidth: 520, marginTop: 16 } },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          },
        },
        React.createElement(
          "span",
          { style: { fontSize: 13, fontWeight: 600, color: C.textDim } },
          "Active tasks",
        ),
        React.createElement(
          "span",
          { style: { fontSize: 12, color: C.textMuted, cursor: "pointer" } },
          "Clear all",
        ),
      ),
      activeTasks.map(function (t, i) {
        return React.createElement(
          "div",
          {
            key: i,
            onClick: function () {
              onScenario(i);
            },
            onMouseEnter: function () {
              setHover("task-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 0",
              cursor: "pointer",
              borderBottom:
                i < activeTasks.length - 1 ? "1px solid " + C.border : "none",
              opacity: hover === "task-" + i ? 1 : 0.8,
            },
          },
          React.createElement(
            "div",
            {
              style: {
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "2px solid " + t.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            React.createElement("div", {
              style: {
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: t.color + "60",
              },
            }),
          ),
          React.createElement(
            "div",
            { style: { flex: 1 } },
            React.createElement(
              "div",
              { style: { fontSize: 14, color: C.text } },
              t.title,
            ),
            React.createElement(
              "div",
              { style: { fontSize: 11, color: C.textMuted } },
              t.time,
            ),
          ),
        );
      }),
    ),
    // Suggestion cards
    React.createElement(
      "div",
      { style: { width: "100%", maxWidth: 520, marginTop: 24 } },
      React.createElement(
        "div",
        { style: { fontSize: 12, color: C.textMuted, marginBottom: 8 } },
        "Get to work with ",
        React.createElement("span", { style: { color: C.accent } }, "Legal"),
        " >",
      ),
      React.createElement(
        "div",
        { style: { display: "flex", gap: 10 } },
        ["Review contract", "Draft NDA", "Compliance check"].map(
          function (s, i) {
            return React.createElement(
              "div",
              {
                key: i,
                onMouseEnter: function () {
                  setHover("sug-" + i);
                },
                onMouseLeave: function () {
                  setHover(null);
                },
                style: {
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid " + C.cardBorder,
                  cursor: "pointer",
                  background:
                    hover === "sug-" + i ? C.cardHover : "transparent",
                },
              },
              React.createElement(
                "div",
                { style: { fontSize: 13, color: C.text } },
                s,
              ),
            );
          },
        ),
      ),
    ),
  );
}

// ─── CUSTOMIZE VIEW ───
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

  // Plugin detail for Sales
  if (selPlugin) {
    var p = selPlugin;
    return React.createElement(
      "div",
      { style: { flex: 1, display: "flex", overflow: "hidden" } },
      // Left nav
      React.createElement(
        "div",
        {
          style: {
            width: 200,
            borderRight: "1px solid " + C.border,
            padding: "16px",
            overflow: "auto",
          },
        },
        React.createElement(
          "div",
          {
            onClick: function () {
              setSelPlugin(null);
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              color: C.textDim,
              fontSize: 13,
              marginBottom: 16,
            },
          },
          React.createElement(IconChevronLeft, { size: 14 }),
          "Customize",
        ),
        React.createElement(
          "div",
          { style: { display: "flex", gap: 8, marginBottom: 20 } },
          React.createElement(
            "div",
            {
              onClick: function () {
                setTab("skills");
              },
              style: {
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 13,
                cursor: "pointer",
                color: tab === "skills" ? C.text : C.textDim,
                background: tab === "skills" ? C.sidebarActive : "transparent",
                fontWeight: tab === "skills" ? 600 : 400,
              },
            },
            "Skills",
          ),
          React.createElement(
            "div",
            {
              onClick: function () {
                setTab("connectors");
              },
              style: {
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 13,
                cursor: "pointer",
                color: tab === "connectors" ? C.text : C.textDim,
                background:
                  tab === "connectors" ? C.sidebarActive : "transparent",
                fontWeight: tab === "connectors" ? 600 : 400,
              },
            },
            "Connectors",
          ),
        ),
        React.createElement(
          "div",
          {
            style: {
              fontSize: 11,
              fontWeight: 600,
              color: C.textMuted,
              textTransform: "uppercase",
              marginBottom: 8,
            },
          },
          "Personal plugins",
        ),
        pluginList.map(function (pl, i) {
          var isSel = pl.name === p.name;
          return React.createElement(
            "div",
            {
              key: i,
              onClick: function () {
                var found = ANTHROPIC_PLUGINS.concat(PANAVERSITY_PLUGINS).find(
                  function (ap) {
                    return (
                      ap.name === pl.name ||
                      pl.name.startsWith(ap.name.substring(0, 12))
                    );
                  },
                );
                if (found) setSelPlugin(found);
              },
              onMouseEnter: function () {
                setHover("pl-" + i);
              },
              onMouseLeave: function () {
                setHover(null);
              },
              style: {
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
              },
            },
            React.createElement(
              "span",
              {
                style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
              },
              pl.name,
            ),
            pl.status
              ? React.createElement(
                  "span",
                  { style: { fontSize: 10, color: C.textMuted } },
                  pl.status,
                )
              : null,
          );
        }),
      ),
      // Right detail
      React.createElement(
        "div",
        { style: { flex: 1, padding: "24px 32px", overflow: "auto" } },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 20,
            },
          },
          React.createElement(
            "h2",
            { style: { fontSize: 24, fontWeight: 700, color: C.text } },
            p.name,
          ),
          React.createElement(
            "div",
            { style: { display: "flex", gap: 8 } },
            React.createElement(
              "span",
              { style: { fontSize: 12, color: C.textMuted } },
              "update",
            ),
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 4 } },
              React.createElement(
                "span",
                { style: { fontSize: 12, color: C.textDim } },
                "Customize",
              ),
              React.createElement(
                "div",
                {
                  style: {
                    width: 32,
                    height: 18,
                    borderRadius: 9,
                    background: C.green + "40",
                    position: "relative",
                  },
                },
                React.createElement("div", {
                  style: {
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: C.green,
                    position: "absolute",
                    top: 2,
                    right: 2,
                  },
                }),
              ),
            ),
          ),
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: 24,
              fontSize: 12,
              color: C.textMuted,
              marginBottom: 12,
            },
          },
          React.createElement(
            "span",
            null,
            "Source: ",
            React.createElement(
              "span",
              { style: { color: C.accent } },
              "Anthropic & Partners",
            ),
          ),
          React.createElement("span", null, "Version: 1.1.0"),
          React.createElement("span", null, "Author: Anthropic"),
        ),
        React.createElement(
          "div",
          { style: { marginBottom: 8 } },
          React.createElement(
            "div",
            {
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: C.textMuted,
                marginBottom: 4,
              },
            },
            "Description",
          ),
          React.createElement(
            "p",
            { style: { fontSize: 14, color: C.textDim, lineHeight: 1.5 } },
            p.desc,
          ),
        ),
        // Skills grid
        React.createElement(
          "div",
          { style: { marginTop: 20 } },
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              },
            },
            React.createElement(
              "span",
              { style: { fontSize: 14, fontWeight: 600, color: C.text } },
              "Skills",
            ),
            React.createElement(
              "span",
              { style: { fontSize: 12, color: C.accent, cursor: "pointer" } },
              "See all",
            ),
          ),
          React.createElement(
            "p",
            { style: { fontSize: 12, color: C.textMuted, marginBottom: 12 } },
            "Invoke by typing / in chat, or let Claude use them automatically for relevant tasks.",
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 10,
              },
            },
            SALES_SKILLS.map(function (sk, i) {
              return React.createElement(
                "div",
                {
                  key: i,
                  onMouseEnter: function () {
                    setHover("sk-" + i);
                  },
                  onMouseLeave: function () {
                    setHover(null);
                  },
                  style: {
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: "1px solid " + C.cardBorder,
                    background: hover === "sk-" + i ? C.cardHover : C.cardBg,
                    cursor: "pointer",
                  },
                },
                React.createElement(
                  "div",
                  {
                    style: {
                      fontSize: 13,
                      fontWeight: 500,
                      color: C.text,
                      marginBottom: 4,
                    },
                  },
                  sk.name,
                ),
                React.createElement(
                  "div",
                  {
                    style: {
                      fontSize: 11,
                      color: C.textMuted,
                      lineHeight: 1.4,
                    },
                  },
                  sk.desc,
                ),
              );
            }),
          ),
        ),
        // Try asking
        React.createElement(
          "div",
          { style: { marginTop: 24 } },
          React.createElement(
            "div",
            {
              style: {
                fontSize: 14,
                fontWeight: 600,
                color: C.text,
                marginBottom: 12,
              },
            },
            "Try asking...",
          ),
          [
            "Prep me for my next sales call",
            "Process my call notes into follow-ups",
            "Review my pipeline for risks and next steps",
            "Research a prospect before outreach",
            "Draft personalized outreach for a prospect",
            "Build a sales forecast with scenario analysis",
          ].map(function (q, i) {
            return React.createElement(
              "div",
              {
                key: i,
                onMouseEnter: function () {
                  setHover("try-" + i);
                },
                onMouseLeave: function () {
                  setHover(null);
                },
                style: {
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
                },
              },
              q,
              React.createElement(IconChevronRight, {
                size: 14,
                color: C.textMuted,
              }),
            );
          }),
        ),
      ),
    );
  }

  // Main customize view (no plugin selected)
  return React.createElement(
    "div",
    { style: { flex: 1, display: "flex", overflow: "hidden" } },
    // Left panel
    React.createElement(
      "div",
      {
        style: {
          width: 220,
          borderRight: "1px solid " + C.border,
          padding: "16px",
          overflow: "auto",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          },
        },
        React.createElement(IconChevronLeft, { size: 14, color: C.textDim }),
        React.createElement(
          "span",
          { style: { fontSize: 16, fontWeight: 600, color: C.text } },
          "Customize",
        ),
      ),
      // Tabs
      React.createElement(
        "div",
        { style: { display: "flex", gap: 8, marginBottom: 16 } },
        React.createElement(
          "div",
          {
            onClick: function () {
              setTab("skills");
            },
            style: {
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
            },
          },
          React.createElement(IconSettings, { size: 14 }),
          "Skills",
        ),
        React.createElement(
          "div",
          {
            onClick: function () {
              setTab("connectors");
            },
            style: {
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
            },
          },
          React.createElement(IconLink, { size: 14 }),
          "Connectors",
        ),
      ),
      // Plugin list with + button
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          },
        },
        React.createElement(
          "span",
          {
            style: {
              fontSize: 11,
              fontWeight: 600,
              color: C.textMuted,
              textTransform: "uppercase",
            },
          },
          "Personal plugins",
        ),
        React.createElement(
          "div",
          { style: { position: "relative" } },
          React.createElement(
            "div",
            {
              onClick: function () {
                setPlusOpen(!plusOpen);
              },
              style: { cursor: "pointer", color: C.textMuted, fontSize: 16 },
            },
            "+",
          ),
          plusOpen
            ? React.createElement(
                "div",
                {
                  style: {
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
                  },
                },
                React.createElement(
                  "div",
                  {
                    onClick: function () {
                      setPlusOpen(false);
                      setView("browse-plugins");
                    },
                    style: {
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    },
                    onMouseEnter: function () {
                      setHover("pm-0");
                    },
                    onMouseLeave: function () {
                      setHover(null);
                    },
                  },
                  React.createElement(IconGrid, { size: 14 }),
                  "Browse plugins",
                ),
                React.createElement(
                  "div",
                  {
                    style: {
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    },
                    onMouseEnter: function () {
                      setHover("pm-1");
                    },
                    onMouseLeave: function () {
                      setHover(null);
                    },
                  },
                  React.createElement(IconLink, { size: 14 }),
                  "Add marketplace",
                ),
                React.createElement(
                  "div",
                  {
                    style: {
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    },
                    onMouseEnter: function () {
                      setHover("pm-2");
                    },
                    onMouseLeave: function () {
                      setHover(null);
                    },
                  },
                  React.createElement(IconUpload, { size: 14 }),
                  "Upload plugin",
                ),
                React.createElement(
                  "div",
                  {
                    style: {
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    },
                    onMouseEnter: function () {
                      setHover("pm-3");
                    },
                    onMouseLeave: function () {
                      setHover(null);
                    },
                  },
                  React.createElement(IconMessageCircle, { size: 14 }),
                  "Create with Claude",
                ),
              )
            : null,
        ),
      ),
      // Plugin items
      pluginList.map(function (pl, i) {
        return React.createElement(
          "div",
          {
            key: i,
            onClick: function () {
              var found = ANTHROPIC_PLUGINS.concat(PANAVERSITY_PLUGINS).find(
                function (ap) {
                  return (
                    ap.name === pl.name ||
                    pl.name.startsWith(ap.name.substring(0, 12))
                  );
                },
              );
              if (found) setSelPlugin(found);
              else if (pl.name === "Sales") setSelPlugin(ANTHROPIC_PLUGINS[3]);
            },
            onMouseEnter: function () {
              setHover("cpl-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 10px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 12,
              color: C.textDim,
              background: hover === "cpl-" + i ? C.sidebarHover : "transparent",
            },
          },
          React.createElement(
            "span",
            {
              style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: 130,
              },
            },
            pl.name,
          ),
          pl.status
            ? React.createElement(
                "span",
                { style: { fontSize: 10, color: C.textMuted } },
                pl.status,
              )
            : null,
        );
      }),
    ),
    // Right content (intro cards)
    React.createElement(
      "div",
      {
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        },
      },
      React.createElement(
        "div",
        {
          style: {
            width: 64,
            height: 64,
            borderRadius: 16,
            border: "2px solid " + C.border,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          },
        },
        React.createElement(IconBriefcase, { size: 32, color: C.textMuted }),
      ),
      React.createElement(
        "h2",
        {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: C.text,
            marginBottom: 8,
          },
        },
        "Customize Claude",
      ),
      React.createElement(
        "p",
        {
          style: {
            fontSize: 14,
            color: C.textDim,
            textAlign: "center",
            maxWidth: 400,
            marginBottom: 32,
          },
        },
        "Skills, connectors, and plugins shape how Claude works with you.",
      ),
      // Three intro cards
      [
        {
          icon: React.createElement(IconLink, { size: 18, color: C.accent }),
          title: "Connect your apps",
          desc: "Let Claude read and write to the tools you already use.",
        },
        {
          icon: React.createElement(IconSettings, {
            size: 18,
            color: C.accent,
          }),
          title: "Create new skills",
          desc: "Teach Claude your processes, team norms, and expertise.",
        },
        {
          icon: React.createElement(IconGrid, { size: 18, color: C.accent }),
          title: "Browse plugins",
          desc: "Add pre-built knowledge for your field.",
        },
      ].map(function (c, i) {
        return React.createElement(
          "div",
          {
            key: i,
            onClick:
              i === 2
                ? function () {
                    setView("browse-plugins");
                  }
                : undefined,
            onMouseEnter: function () {
              setHover("cc-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
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
            },
          },
          React.createElement(
            "div",
            {
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                background: C.accentSoft,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            c.icon,
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { style: { fontSize: 14, fontWeight: 600, color: C.text } },
              c.title,
            ),
            React.createElement(
              "div",
              { style: { fontSize: 12, color: C.textMuted } },
              c.desc,
            ),
          ),
        );
      }),
    ),
  );
}

// ─── BROWSE PLUGINS VIEW ───
function BrowsePluginsView(props) {
  var setView = props.setView;
  var hover = props.hover;
  var setHover = props.setHover;
  const [pTab, setPTab] = useState("anthropic");
  const [modal, setModal] = useState(false);

  var plugins = pTab === "anthropic" ? ANTHROPIC_PLUGINS : PANAVERSITY_PLUGINS;

  return React.createElement(
    "div",
    {
      style: {
        flex: 1,
        padding: "24px 32px",
        overflow: "auto",
        position: "relative",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 16,
          cursor: "pointer",
          color: C.textDim,
          fontSize: 13,
        },
        onClick: function () {
          setView("customize");
        },
      },
      React.createElement(IconChevronLeft, { size: 14 }),
      "Customize",
    ),
    React.createElement(
      "h2",
      {
        style: {
          fontSize: 22,
          fontWeight: 700,
          color: C.text,
          marginBottom: 4,
        },
      },
      "Browse plugins",
    ),
    React.createElement(
      "p",
      { style: { fontSize: 13, color: C.textDim, marginBottom: 20 } },
      "Extend how Claude performs tasks with ready-to-use workflows. Customize plugins for your company's tools, data, and best practices.",
    ),
    // Tabs
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: 16,
          marginBottom: 20,
          borderBottom: "1px solid " + C.border,
          paddingBottom: 8,
        },
      },
      React.createElement(
        "div",
        {
          onClick: function () {
            setPTab("anthropic");
          },
          style: {
            fontSize: 13,
            fontWeight: pTab === "anthropic" ? 600 : 400,
            color: pTab === "anthropic" ? C.text : C.textDim,
            cursor: "pointer",
            paddingBottom: 4,
            borderBottom:
              pTab === "anthropic"
                ? "2px solid " + C.accent
                : "2px solid transparent",
          },
        },
        "By Anthropic & Partners",
      ),
      React.createElement(
        "div",
        {
          onClick: function () {
            setPTab("personal");
          },
          style: {
            fontSize: 13,
            fontWeight: pTab === "personal" ? 600 : 400,
            color: pTab === "personal" ? C.text : C.textDim,
            cursor: "pointer",
            paddingBottom: 4,
            borderBottom:
              pTab === "personal"
                ? "2px solid " + C.accent
                : "2px solid transparent",
          },
        },
        "Personal",
      ),
      React.createElement("div", { style: { flex: 1 } }),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: C.textMuted,
          },
        },
        "Filter by",
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: C.textMuted,
          },
        },
        "Sort by",
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 10px",
            borderRadius: 6,
            border: "1px solid " + C.border,
            fontSize: 12,
            color: C.textDim,
          },
        },
        React.createElement(IconSearch, { size: 12 }),
        "Search...",
      ),
    ),
    // Plugin grid
    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 16,
        },
      },
      plugins.map(function (p, i) {
        return React.createElement(
          "div",
          {
            key: i,
            onMouseEnter: function () {
              setHover("bp-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            onClick: function () {
              setView("customize");
            },
            style: {
              padding: "20px",
              borderRadius: 14,
              border: "1px solid " + C.cardBorder,
              background: hover === "bp-" + i ? C.cardHover : C.cardBg,
              cursor: "pointer",
            },
          },
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 10,
              },
            },
            React.createElement(
              "div",
              {
                style: {
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: C.accent + "15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
              React.createElement(IconBriefcase, { size: 18, color: C.accent }),
            ),
            React.createElement(
              "button",
              {
                style: {
                  padding: "5px 14px",
                  borderRadius: 8,
                  border: "1px solid " + C.border,
                  background: "transparent",
                  color: C.textDim,
                  fontSize: 12,
                  cursor: "pointer",
                },
              },
              "Manage",
            ),
          ),
          React.createElement(
            "div",
            {
              style: {
                fontSize: 15,
                fontWeight: 600,
                color: C.text,
                marginBottom: 2,
              },
            },
            p.name,
          ),
          React.createElement(
            "div",
            { style: { fontSize: 12, color: C.textMuted, marginBottom: 8 } },
            "by ",
            p.by,
            p.installs
              ? React.createElement(
                  "span",
                  { style: { marginLeft: 8 } },
                  p.installs + " installs",
                )
              : null,
          ),
          React.createElement(
            "div",
            { style: { fontSize: 12, color: C.textDim, lineHeight: 1.5 } },
            p.desc,
          ),
        );
      }),
    ),
    // Add marketplace modal trigger for personal tab
    pTab === "personal"
      ? React.createElement(
          "div",
          { style: { display: "flex", gap: 10, marginTop: 16 } },
          React.createElement(
            "div",
            {
              onClick: function () {
                setModal(true);
              },
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.border,
                cursor: "pointer",
                fontSize: 12,
                color: C.textDim,
              },
            },
            React.createElement(IconLink, { size: 14 }),
            "Add marketplace",
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.border,
                cursor: "pointer",
                fontSize: 12,
                color: C.textDim,
              },
            },
            React.createElement(IconUpload, { size: 14 }),
            "Upload plugin",
          ),
        )
      : null,
    // Modal
    modal
      ? React.createElement(
          "div",
          {
            style: {
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
            },
            onClick: function () {
              setModal(false);
            },
          },
          React.createElement(
            "div",
            {
              onClick: function (e) {
                e.stopPropagation();
              },
              style: {
                background: C.cardBg,
                borderRadius: 16,
                padding: "24px 28px",
                width: 440,
                border: "1px solid " + C.cardBorder,
                boxShadow: "0 16px 48px rgba(0,0,0,.5)",
              },
            },
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                },
              },
              React.createElement(
                "h3",
                { style: { fontSize: 18, fontWeight: 700, color: C.text } },
                "Add marketplace",
              ),
              React.createElement(
                "div",
                {
                  onClick: function () {
                    setModal(false);
                  },
                  style: { cursor: "pointer" },
                },
                React.createElement(IconX, { size: 18, color: C.textMuted }),
              ),
            ),
            React.createElement(
              "p",
              {
                style: {
                  fontSize: 13,
                  color: C.textDim,
                  lineHeight: 1.5,
                  marginBottom: 16,
                },
              },
              "Make sure you trust a plugin before installing, updating, or using it. Plugins installed from marketplaces are not controlled by Anthropic.",
            ),
            React.createElement(
              "div",
              { style: { fontSize: 12, color: C.textDim, marginBottom: 6 } },
              "URL",
            ),
            React.createElement(
              "div",
              { style: { fontSize: 11, color: C.textMuted, marginBottom: 6 } },
              "A GitHub, server, repo, or a git repository URL.",
            ),
            React.createElement(
              "div",
              {
                style: {
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid " + C.accent,
                  background: C.inputBg,
                  fontSize: 13,
                  color: C.textMuted,
                },
              },
              "Search here",
            ),
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 10,
                  marginTop: 16,
                },
              },
              React.createElement(
                "button",
                {
                  onClick: function () {
                    setModal(false);
                  },
                  style: {
                    padding: "8px 20px",
                    borderRadius: 10,
                    border: "1px solid " + C.border,
                    background: "transparent",
                    color: C.textDim,
                    fontSize: 13,
                    cursor: "pointer",
                  },
                },
                "Cancel",
              ),
              React.createElement(
                "button",
                {
                  style: {
                    padding: "8px 20px",
                    borderRadius: 10,
                    border: "none",
                    background: C.accent,
                    color: "#fff",
                    fontSize: 13,
                    cursor: "pointer",
                    fontWeight: 600,
                  },
                },
                "Sync",
              ),
            ),
          ),
        )
      : null,
  );
}

// ─── SKILLS VIEW ───
function SkillsView(props) {
  var hover = props.hover;
  var setHover = props.setHover;
  const [selected, setSelected] = useState(MY_SKILLS[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [plusOpen, setPlusOpen] = useState(false);

  return React.createElement(
    "div",
    { style: { flex: 1, display: "flex", overflow: "hidden" } },
    // Left nav (same as customize left)
    React.createElement(
      "div",
      {
        style: {
          width: 160,
          borderRight: "1px solid " + C.border,
          padding: "16px",
          overflow: "auto",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          },
        },
        React.createElement(IconChevronLeft, { size: 14, color: C.textDim }),
        React.createElement(
          "span",
          { style: { fontSize: 16, fontWeight: 600, color: C.text } },
          "Customize",
        ),
      ),
      React.createElement(
        "div",
        { style: { display: "flex", gap: 8, marginBottom: 20 } },
        React.createElement(
          "div",
          {
            style: {
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              color: C.text,
              background: C.sidebarActive,
            },
          },
          "Skills",
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              color: C.textDim,
            },
          },
          "Connectors",
        ),
      ),
    ),
    // Middle: skill list
    React.createElement(
      "div",
      {
        style: {
          width: 220,
          borderRight: "1px solid " + C.border,
          overflow: "auto",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            padding: "16px 16px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        },
        React.createElement(
          "span",
          { style: { fontSize: 16, fontWeight: 600, color: C.text } },
          "Skills",
        ),
        React.createElement(
          "div",
          { style: { display: "flex", gap: 8, alignItems: "center" } },
          React.createElement(IconSearch, { size: 14, color: C.textMuted }),
          React.createElement(
            "div",
            { style: { position: "relative" } },
            React.createElement(
              "div",
              {
                onClick: function () {
                  setPlusOpen(!plusOpen);
                },
                style: { cursor: "pointer", color: C.textMuted, fontSize: 18 },
              },
              "+",
            ),
            plusOpen
              ? React.createElement(
                  "div",
                  {
                    style: {
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
                    },
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        padding: "8px 14px",
                        fontSize: 13,
                        color: C.textDim,
                        cursor: "pointer",
                      },
                    },
                    "Create with Claude",
                  ),
                  React.createElement(
                    "div",
                    {
                      style: {
                        padding: "8px 14px",
                        fontSize: 13,
                        color: C.textDim,
                        cursor: "pointer",
                      },
                    },
                    "Write skill instructions",
                  ),
                  React.createElement(
                    "div",
                    {
                      style: {
                        padding: "8px 14px",
                        fontSize: 13,
                        color: C.textDim,
                        cursor: "pointer",
                      },
                    },
                    "Upload a skill",
                  ),
                )
              : null,
          ),
        ),
      ),
      React.createElement(
        "div",
        {
          style: {
            padding: "4px 8px",
            fontSize: 11,
            color: C.textMuted,
            marginBottom: 4,
          },
        },
        "My skills",
      ),
      MY_SKILLS.map(function (sk, i) {
        return React.createElement(
          "div",
          {
            key: i,
            onClick: function () {
              setSelected(sk);
              setMenuOpen(false);
            },
            onContextMenu: function (e) {
              e.preventDefault();
              setSelected(sk);
              setMenuOpen(true);
            },
            onMouseEnter: function () {
              setHover("msk-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
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
            },
          },
          sk,
        );
      }),
      React.createElement(
        "div",
        {
          style: { padding: "12px 8px 4px", fontSize: 11, color: C.textMuted },
        },
        "Examples",
      ),
      React.createElement(
        "div",
        {
          style: {
            padding: "6px 14px",
            fontSize: 12,
            color: C.textDim,
            cursor: "pointer",
          },
        },
        "skill-creator",
      ),
    ),
    // Right: skill detail
    React.createElement(
      "div",
      {
        style: {
          flex: 1,
          padding: "24px 28px",
          overflow: "auto",
          position: "relative",
        },
      },
      // Context menu overlay
      menuOpen
        ? React.createElement(
            "div",
            {
              style: {
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
              },
            },
            [
              {
                icon: React.createElement(IconMessageCircle, { size: 14 }),
                label: "Try in chat",
              },
              {
                icon: React.createElement(IconDownload, { size: 14 }),
                label: "Download",
              },
              {
                icon: React.createElement(IconEdit, { size: 14 }),
                label: "Edit online",
              },
              {
                icon: React.createElement(IconMessageCircle, { size: 14 }),
                label: "Edit with Claude",
              },
              {
                icon: React.createElement(IconUpload, { size: 14 }),
                label: "Replace",
              },
              {
                icon: React.createElement(IconTrash, {
                  size: 14,
                  color: "#ef4444",
                }),
                label: "Delete",
              },
            ].map(function (m, i) {
              return React.createElement(
                "div",
                {
                  key: i,
                  onClick: function () {
                    setMenuOpen(false);
                  },
                  onMouseEnter: function () {
                    setHover("cm-" + i);
                  },
                  onMouseLeave: function () {
                    setHover(null);
                  },
                  style: {
                    padding: "8px 14px",
                    fontSize: 13,
                    color: i === 5 ? "#ef4444" : C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background:
                      hover === "cm-" + i ? C.sidebarHover : "transparent",
                  },
                },
                m.icon,
                m.label,
              );
            }),
          )
        : null,
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          },
        },
        React.createElement(
          "h2",
          {
            style: {
              fontSize: 20,
              fontWeight: 700,
              color: C.text,
              marginBottom: 16,
            },
          },
          selected,
        ),
        React.createElement(
          "div",
          { style: { display: "flex", gap: 8 } },
          React.createElement(
            "div",
            {
              style: {
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid " + C.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              },
            },
            React.createElement("div", {
              style: {
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: C.green,
              },
            }),
          ),
          React.createElement(
            "div",
            {
              onClick: function () {
                setMenuOpen(!menuOpen);
              },
              style: {
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
              },
            },
            "...",
          ),
        ),
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: 24,
            fontSize: 12,
            color: C.textMuted,
            marginBottom: 20,
          },
        },
        React.createElement(
          "span",
          null,
          "Added by: ",
          React.createElement("span", { style: { color: C.text } }, "User"),
        ),
        React.createElement(
          "span",
          null,
          "Last updated: ",
          React.createElement(
            "span",
            { style: { color: C.text } },
            "Mar 12, 2026",
          ),
        ),
        React.createElement(
          "span",
          null,
          "Invoked by: ",
          React.createElement(
            "span",
            { style: { color: C.text } },
            "User or Claude",
          ),
        ),
      ),
      React.createElement(
        "div",
        {
          style: {
            padding: "20px",
            borderRadius: 12,
            background: C.cardBg,
            border: "1px solid " + C.cardBorder,
            marginBottom: 20,
          },
        },
        React.createElement(
          "p",
          { style: { fontSize: 13, color: C.textDim, lineHeight: 1.6 } },
          "Build interactive IDE-style explorer websites that teach AI platforms by simulating a real project. Creates a three-column layout (file tree, annotated code view, interactive terminal) where every file fits the real config artifact with inline annotations. Use this skill whenever the user wants to create an interactive learning experience for ANY AI platform, agent framework, or developer tool.",
        ),
      ),
      React.createElement(
        "h3",
        {
          style: {
            fontSize: 16,
            fontWeight: 700,
            color: C.text,
            marginBottom: 8,
          },
        },
        "AI Platform Explorer Builder",
      ),
      React.createElement(
        "p",
        {
          style: {
            fontSize: 13,
            color: C.textDim,
            lineHeight: 1.6,
            marginBottom: 16,
          },
        },
        "Build interactive IDE-style explorer websites that teach AI platforms through simulated project exploration. Inspired by exploreclaudecode.com: every file and folder is a real concept you can click through.",
      ),
      React.createElement(
        "h4",
        {
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: C.text,
            marginTop: 16,
            marginBottom: 8,
          },
        },
        "When to Use",
      ),
      React.createElement(
        "ul",
        {
          style: {
            fontSize: 13,
            color: C.textDim,
            lineHeight: 1.8,
            paddingLeft: 20,
          },
        },
        React.createElement(
          "li",
          null,
          "User wants an interactive learning site for an AI platform or dev tool",
        ),
        React.createElement(
          "li",
          null,
          "User references exploreclaudecode.com as a concept",
        ),
      ),
    ),
  );
}

// ─── SCHEDULED VIEW ───
function ScheduledView(props) {
  var hover = props.hover;
  var setHover = props.setHover;
  // subView: 'list' | 'form' | 'card' | 'detail'
  const [subView, setSubView] = useState("list");
  const [dropdown, setDropdown] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [created, setCreated] = useState(false);
  const [toast, setToast] = useState(false);

  // ── Delete confirmation modal ──
  var deleteModalEl = deleteModal
    ? React.createElement(
        "div",
        {
          style: {
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
          },
          onClick: function () {
            setDeleteModal(false);
          },
        },
        React.createElement(
          "div",
          {
            onClick: function (e) {
              e.stopPropagation();
            },
            style: {
              background: C.cardBg,
              borderRadius: 16,
              padding: "24px 28px",
              width: 400,
              border: "1px solid " + C.cardBorder,
              boxShadow: "0 16px 48px rgba(0,0,0,.5)",
            },
          },
          React.createElement(
            "h3",
            {
              style: {
                fontSize: 18,
                fontWeight: 700,
                color: C.text,
                marginBottom: 8,
              },
            },
            "Delete scheduled task",
          ),
          React.createElement(
            "p",
            {
              style: {
                fontSize: 14,
                color: C.textDim,
                lineHeight: 1.6,
                marginBottom: 20,
              },
            },
            'Delete "daily-code-review"? Any sessions from this task will be archived.',
          ),
          React.createElement(
            "div",
            { style: { display: "flex", justifyContent: "flex-end", gap: 10 } },
            React.createElement(
              "button",
              {
                onClick: function () {
                  setDeleteModal(false);
                },
                style: {
                  padding: "8px 20px",
                  borderRadius: 10,
                  border: "1px solid " + C.border,
                  background: "transparent",
                  color: C.textDim,
                  fontSize: 13,
                  cursor: "pointer",
                },
              },
              "Cancel",
            ),
            React.createElement(
              "button",
              {
                onClick: function () {
                  setDeleteModal(false);
                  setCreated(false);
                  setSubView("list");
                },
                style: {
                  padding: "8px 20px",
                  borderRadius: 10,
                  border: "none",
                  background: "#dc2626",
                  color: "#fff",
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: 600,
                },
              },
              "Delete",
            ),
          ),
        ),
      )
    : null;

  // ── Toast notification ──
  var toastEl = toast
    ? React.createElement(
        "div",
        {
          style: {
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
          },
        },
        React.createElement(IconClock, { size: 16, color: C.green }),
        React.createElement(
          "span",
          { style: { fontSize: 13, color: C.text } },
          '"daily-code-review" created.',
        ),
        React.createElement(
          "div",
          {
            onClick: function () {
              setToast(false);
            },
            style: { cursor: "pointer", marginLeft: 8 },
          },
          React.createElement(IconX, { size: 14, color: C.textMuted }),
        ),
      )
    : null;

  // ── DETAIL sub-view ──
  if (subView === "detail") {
    return React.createElement(
      "div",
      { style: { flex: 1, padding: "24px 32px", overflow: "auto" } },
      deleteModalEl,
      toastEl,
      React.createElement(
        "div",
        {
          onClick: function () {
            setSubView("card");
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            cursor: "pointer",
            color: C.textDim,
            fontSize: 13,
            marginBottom: 20,
          },
        },
        React.createElement(IconChevronLeft, { size: 14 }),
        "All scheduled tasks",
      ),
      // Title row
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          },
        },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            {
              style: {
                fontSize: 24,
                fontWeight: 700,
                color: C.text,
                marginBottom: 8,
              },
            },
            "daily-code-review",
          ),
          React.createElement(
            "div",
            { style: { display: "flex", alignItems: "center", gap: 10 } },
            React.createElement(
              "span",
              {
                style: {
                  padding: "3px 10px",
                  borderRadius: 12,
                  background: C.green + "20",
                  color: C.green,
                  fontSize: 12,
                  fontWeight: 500,
                },
              },
              "Active",
            ),
            React.createElement(
              "span",
              { style: { fontSize: 13, color: C.textDim } },
              "Next run: Tomorrow at 9:05 AM",
            ),
          ),
        ),
        React.createElement(
          "div",
          { style: { display: "flex", gap: 8 } },
          React.createElement(
            "div",
            {
              onClick: function () {},
              style: {
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid " + C.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              },
            },
            React.createElement(IconEdit, { size: 14, color: C.textMuted }),
          ),
          React.createElement(
            "div",
            {
              onClick: function () {
                setDeleteModal(true);
              },
              style: {
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid " + C.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              },
            },
            React.createElement(IconTrash, { size: 14, color: C.textMuted }),
          ),
          React.createElement(
            "button",
            {
              style: {
                padding: "8px 18px",
                borderRadius: 10,
                border: "none",
                background: C.accent,
                color: "#fff",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: 500,
              },
            },
            "Run now",
          ),
        ),
      ),
      // Two-column layout
      React.createElement(
        "div",
        { style: { display: "flex", gap: 32 } },
        // Left column
        React.createElement(
          "div",
          { style: { flex: 1 } },
          React.createElement(
            "div",
            { style: { marginBottom: 20 } },
            React.createElement(
              "div",
              {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 6,
                },
              },
              "Description",
            ),
            React.createElement(
              "p",
              { style: { fontSize: 14, color: C.text, lineHeight: 1.6 } },
              "Review yesterday's commits and flag anything concerning",
            ),
          ),
          React.createElement(
            "div",
            { style: { marginBottom: 20 } },
            React.createElement(
              "div",
              {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 6,
                },
              },
              "Folder",
            ),
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 8 } },
              React.createElement(IconFolder, { size: 14, color: C.textDim }),
              React.createElement(
                "span",
                { style: { fontSize: 13, color: C.text } },
                "/Users/mjs/Documents/code/panaversity-offic...",
              ),
            ),
          ),
          React.createElement(
            "div",
            { style: { marginBottom: 20 } },
            React.createElement(
              "div",
              {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 8,
                },
              },
              "Repeats",
            ),
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 10 } },
              React.createElement(
                "div",
                {
                  style: {
                    width: 36,
                    height: 20,
                    borderRadius: 10,
                    background: C.green + "40",
                    position: "relative",
                  },
                },
                React.createElement("div", {
                  style: {
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: C.green,
                    position: "absolute",
                    top: 2,
                    right: 2,
                  },
                }),
              ),
              React.createElement(
                "span",
                { style: { fontSize: 13, color: C.text } },
                "Every day at 9:06 AM",
              ),
            ),
          ),
          React.createElement(
            "div",
            { style: { marginBottom: 20 } },
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textDim,
                  marginBottom: 8,
                },
              },
              "Always allowed ",
              React.createElement(
                "div",
                {
                  style: {
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "1px solid " + C.textMuted,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    color: C.textMuted,
                  },
                },
                "i",
              ),
            ),
            React.createElement(
              "p",
              { style: { fontSize: 13, color: C.textMuted, marginBottom: 12 } },
              "No stored approvals yet.",
            ),
            React.createElement(
              "div",
              {
                style: {
                  padding: "14px 16px",
                  borderRadius: 10,
                  background: C.cardBg,
                  border: "1px solid " + C.cardBorder,
                  fontSize: 12,
                  color: C.textDim,
                  lineHeight: 1.7,
                },
              },
              "When you choose ",
              React.createElement(
                "span",
                { style: { color: C.text, fontWeight: 500 } },
                "Allow for all scheduled runs",
              ),
              " on a permission prompt during a run, it's saved here and auto-applied next time.",
              React.createElement("br", null),
              React.createElement("br", null),
              "Use ",
              React.createElement(
                "span",
                { style: { color: C.text, fontWeight: 500 } },
                "Run now",
              ),
              " to do a test run and pre-approve permissions for future runs.",
            ),
          ),
        ),
        // Right column (Instructions)
        React.createElement(
          "div",
          { style: { width: 280 } },
          React.createElement(
            "div",
            {
              style: {
                fontSize: 13,
                fontWeight: 600,
                color: C.textDim,
                marginBottom: 8,
              },
            },
            "Instructions",
          ),
          React.createElement(
            "div",
            {
              style: {
                padding: "14px 16px",
                borderRadius: 10,
                background: C.cardBg,
                border: "1px solid " + C.cardBorder,
                fontSize: 13,
                color: C.text,
                lineHeight: 1.7,
                minHeight: 120,
              },
            },
            "Look at the commits from the last 24 hours. Summarize what changed, call out any risky patterns or missing tests, and note anything worth following up on.",
          ),
        ),
      ),
    );
  }

  // ── CARD sub-view (task created, showing task list) ──
  if (subView === "card") {
    return React.createElement(
      "div",
      { style: { flex: 1, padding: "24px 32px", overflow: "auto" } },
      deleteModalEl,
      toastEl,
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          },
        },
        React.createElement(
          "h2",
          { style: { fontSize: 22, fontWeight: 700, color: C.text } },
          "Scheduled tasks",
        ),
        React.createElement(
          "div",
          { style: { position: "relative" } },
          React.createElement(
            "button",
            {
              onClick: function () {
                setDropdown(!dropdown);
              },
              style: {
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
              },
            },
            React.createElement(IconPlus, { size: 14 }),
            "New task",
          ),
          dropdown
            ? React.createElement(
                "div",
                {
                  style: {
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
                  },
                },
                React.createElement(
                  "div",
                  {
                    onClick: function () {
                      setDropdown(false);
                      setSubView("form");
                    },
                    onMouseEnter: function () {
                      setHover("nd-0");
                    },
                    onMouseLeave: function () {
                      setHover(null);
                    },
                    style: {
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background:
                        hover === "nd-0" ? C.sidebarHover : "transparent",
                    },
                  },
                  React.createElement(IconClock, { size: 14 }),
                  "New local task",
                ),
                React.createElement(
                  "div",
                  {
                    onMouseEnter: function () {
                      setHover("nd-1");
                    },
                    onMouseLeave: function () {
                      setHover(null);
                    },
                    style: {
                      padding: "8px 14px",
                      fontSize: 13,
                      color: C.textDim,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background:
                        hover === "nd-1" ? C.sidebarHover : "transparent",
                    },
                  },
                  React.createElement(IconSend, { size: 14 }),
                  "New remote task",
                ),
              )
            : null,
        ),
      ),
      React.createElement(
        "p",
        { style: { fontSize: 13, color: C.textDim, marginBottom: 16 } },
        "Run tasks on a schedule or whenever you need them. Type ",
        React.createElement(
          "code",
          {
            style: {
              background: C.cardBg,
              padding: "2px 6px",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: '"JetBrains Mono",monospace',
            },
          },
          "/schedule",
        ),
        " in any existing task to set one up.",
      ),
      // Info bar
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderRadius: 10,
            background: C.cardBg,
            border: "1px solid " + C.cardBorder,
            marginBottom: 20,
          },
        },
        React.createElement(
          "div",
          {
            style: {
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1px solid " + C.textMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: C.textMuted,
            },
          },
          "i",
        ),
        React.createElement(
          "span",
          { style: { fontSize: 13, color: C.textDim } },
          "Local tasks only run while your computer is awake.",
        ),
      ),
      // Task card
      React.createElement(
        "div",
        {
          onClick: function () {
            setSubView("detail");
          },
          onMouseEnter: function () {
            setHover("tc-0");
          },
          onMouseLeave: function () {
            setHover(null);
          },
          style: {
            padding: "16px 20px",
            borderRadius: 14,
            background: hover === "tc-0" ? C.cardHover : C.cardBg,
            border: "1px solid " + C.cardBorder,
            cursor: "pointer",
            maxWidth: 300,
          },
        },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 4,
            },
          },
          React.createElement(
            "div",
            { style: { fontSize: 15, fontWeight: 600, color: C.text } },
            "daily-code-review",
          ),
          React.createElement(
            "span",
            {
              style: {
                padding: "2px 8px",
                borderRadius: 6,
                background: C.border,
                fontSize: 11,
                color: C.textDim,
              },
            },
            "Local",
          ),
        ),
        React.createElement(
          "div",
          { style: { fontSize: 13, color: C.textDim, marginBottom: 10 } },
          "Review yesterday's commits and flag anything concerning",
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: C.green,
            },
          },
          React.createElement(IconClock, { size: 14, color: C.green }),
          "Every day at 9:06 AM",
        ),
      ),
    );
  }

  // ── FORM sub-view (create new scheduled task) ──
  if (subView === "form") {
    return React.createElement(
      "div",
      { style: { flex: 1, padding: "24px 32px", overflow: "auto" } },
      toastEl,
      React.createElement(
        "h2",
        {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: C.text,
            marginBottom: 20,
          },
        },
        "New scheduled task",
      ),
      // Info bar
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderRadius: 10,
            background: C.cardBg,
            border: "1px solid " + C.cardBorder,
            marginBottom: 24,
          },
        },
        React.createElement(
          "div",
          {
            style: {
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1px solid " + C.textMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: C.textMuted,
            },
          },
          "i",
        ),
        React.createElement(
          "span",
          { style: { fontSize: 13, color: C.textDim } },
          "Local tasks only run while your computer is awake.",
        ),
      ),
      // Form fields
      React.createElement(
        "div",
        { style: { maxWidth: 480 } },
        // Name
        React.createElement(
          "div",
          { style: { marginBottom: 16 } },
          React.createElement(
            "label",
            {
              style: {
                fontSize: 13,
                color: C.text,
                display: "block",
                marginBottom: 4,
              },
            },
            "Name ",
            React.createElement("span", { style: { color: C.accent } }, "*"),
          ),
          React.createElement(
            "div",
            {
              style: {
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.inputBorder,
                background: C.inputBg,
                fontSize: 14,
                color: C.text,
              },
            },
            "daily-code-review",
          ),
        ),
        // Description
        React.createElement(
          "div",
          { style: { marginBottom: 16 } },
          React.createElement(
            "label",
            {
              style: {
                fontSize: 13,
                color: C.text,
                display: "block",
                marginBottom: 4,
              },
            },
            "Description ",
            React.createElement("span", { style: { color: C.accent } }, "*"),
          ),
          React.createElement(
            "div",
            {
              style: {
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.inputBorder,
                background: C.inputBg,
                fontSize: 14,
                color: C.text,
              },
            },
            "Review yesterday's commits and flag anything concerning",
          ),
        ),
        // Instructions
        React.createElement(
          "div",
          { style: { marginBottom: 16 } },
          React.createElement(
            "div",
            {
              style: {
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid " + C.inputBorder,
                background: C.inputBg,
                fontSize: 13,
                color: C.text,
                minHeight: 80,
                lineHeight: 1.6,
              },
            },
            "Look at the commits from the last 24 hours. Summarize what changed, call out any risky patterns or missing tests, and note anything worth following up on.",
          ),
        ),
        // Permissions + Model row
        React.createElement(
          "div",
          { style: { display: "flex", gap: 12, marginBottom: 16 } },
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.inputBorder,
                fontSize: 13,
                color: C.textDim,
              },
            },
            "Ask permissions ",
            React.createElement("span", { style: { fontSize: 10 } }, "\u25BC"),
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.inputBorder,
                fontSize: 13,
                color: C.textDim,
              },
            },
            "Opus 4.6 (1M context)",
          ),
        ),
        // Folder + autorun
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            },
          },
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid " + C.inputBorder,
                fontSize: 13,
                color: C.accent,
                cursor: "pointer",
              },
            },
            React.createElement(IconFolder, { size: 14 }),
            "Select folder",
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: C.textDim,
              },
            },
            "/",
            React.createElement(
              "span",
              {
                style: {
                  fontFamily: '"JetBrains Mono",monospace',
                  fontSize: 12,
                },
              },
              "autorun",
            ),
            React.createElement(
              "div",
              {
                style: {
                  width: 32,
                  height: 18,
                  borderRadius: 9,
                  background: C.border,
                  position: "relative",
                },
              },
              React.createElement("div", {
                style: {
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#555",
                  position: "absolute",
                  top: 2,
                  left: 2,
                },
              }),
            ),
          ),
        ),
        // Frequency
        React.createElement(
          "div",
          { style: { marginBottom: 12 } },
          React.createElement(
            "label",
            {
              style: {
                fontSize: 13,
                color: C.textDim,
                display: "block",
                marginBottom: 4,
              },
            },
            "Frequency",
          ),
          React.createElement(
            "div",
            {
              style: {
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
              },
            },
            "Daily",
            React.createElement("span", { style: { fontSize: 10 } }, "\u25BC"),
          ),
        ),
        // Time
        React.createElement(
          "div",
          {
            style: {
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid " + C.inputBorder,
              background: C.inputBg,
              fontSize: 14,
              color: C.text,
              marginBottom: 12,
            },
          },
          "09:00 AM",
        ),
        // Note
        React.createElement(
          "p",
          { style: { fontSize: 12, color: C.textMuted, marginBottom: 24 } },
          "Scheduled tasks use a randomized delay of several minutes for server performance.",
        ),
        // Buttons
        React.createElement(
          "div",
          { style: { display: "flex", justifyContent: "flex-end", gap: 10 } },
          React.createElement(
            "button",
            {
              onClick: function () {
                setSubView("list");
              },
              style: {
                padding: "8px 20px",
                borderRadius: 10,
                border: "1px solid " + C.border,
                background: "transparent",
                color: C.textDim,
                fontSize: 13,
                cursor: "pointer",
              },
            },
            "Cancel",
          ),
          React.createElement(
            "button",
            {
              onClick: function () {
                setCreated(true);
                setToast(true);
                setSubView("card");
                setTimeout(function () {
                  setToast(false);
                }, 3000);
              },
              style: {
                padding: "8px 20px",
                borderRadius: 10,
                border: "none",
                background: C.accent,
                color: "#fff",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: 600,
              },
            },
            "Create task",
          ),
        ),
      ),
    );
  }

  // ── LIST sub-view (default: empty state or with task) ──
  return React.createElement(
    "div",
    { style: { flex: 1, padding: "24px 32px", overflow: "auto" } },
    toastEl,
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 8,
        },
      },
      React.createElement(
        "h2",
        { style: { fontSize: 22, fontWeight: 700, color: C.text } },
        "Scheduled tasks",
      ),
      React.createElement(
        "div",
        { style: { position: "relative" } },
        React.createElement(
          "button",
          {
            onClick: function () {
              setDropdown(!dropdown);
            },
            style: {
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
            },
          },
          React.createElement(IconPlus, { size: 14 }),
          "New task",
        ),
        dropdown
          ? React.createElement(
              "div",
              {
                style: {
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
                },
              },
              React.createElement(
                "div",
                {
                  onClick: function () {
                    setDropdown(false);
                    setSubView("form");
                  },
                  onMouseEnter: function () {
                    setHover("nd-0");
                  },
                  onMouseLeave: function () {
                    setHover(null);
                  },
                  style: {
                    padding: "8px 14px",
                    fontSize: 13,
                    color: C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background:
                      hover === "nd-0" ? C.sidebarHover : "transparent",
                  },
                },
                React.createElement(IconClock, { size: 14 }),
                "New local task",
              ),
              React.createElement(
                "div",
                {
                  onMouseEnter: function () {
                    setHover("nd-1");
                  },
                  onMouseLeave: function () {
                    setHover(null);
                  },
                  style: {
                    padding: "8px 14px",
                    fontSize: 13,
                    color: C.textDim,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background:
                      hover === "nd-1" ? C.sidebarHover : "transparent",
                  },
                },
                React.createElement(IconSend, { size: 14 }),
                "New remote task",
              ),
            )
          : null,
      ),
    ),
    React.createElement(
      "p",
      { style: { fontSize: 13, color: C.textDim, marginBottom: 16 } },
      "Run tasks on a schedule or whenever you need them. Type ",
      React.createElement(
        "code",
        {
          style: {
            background: C.cardBg,
            padding: "2px 6px",
            borderRadius: 4,
            fontSize: 12,
            fontFamily: '"JetBrains Mono",monospace',
          },
        },
        "/schedule",
      ),
      " in any existing task to set one up.",
    ),
    // Info bar (always visible)
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderRadius: 10,
          background: C.cardBg,
          border: "1px solid " + C.cardBorder,
          marginBottom: 20,
        },
      },
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 8 } },
        React.createElement(
          "div",
          {
            style: {
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1px solid " + C.yellow,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: C.yellow,
            },
          },
          "\u26a0",
        ),
        React.createElement(
          "span",
          { style: { fontSize: 13, color: C.textDim } },
          "Scheduled tasks only run while your computer is awake.",
        ),
      ),
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 8 } },
        React.createElement(
          "span",
          { style: { fontSize: 13, color: C.text } },
          "Keep awake",
        ),
        React.createElement(
          "div",
          {
            style: {
              width: 36,
              height: 20,
              borderRadius: 10,
              background: C.green,
              position: "relative",
              cursor: "pointer",
            },
          },
          React.createElement("div", {
            style: {
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#fff",
              position: "absolute",
              top: 2,
              right: 2,
            },
          }),
        ),
      ),
    ),
    // Show task card if created, otherwise empty state
    created
      ? React.createElement(
          "div",
          null,
          // Info bar
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 10,
                background: C.cardBg,
                border: "1px solid " + C.cardBorder,
                marginBottom: 20,
              },
            },
            React.createElement(
              "div",
              {
                style: {
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "1px solid " + C.textMuted,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  color: C.textMuted,
                },
              },
              "i",
            ),
            React.createElement(
              "span",
              { style: { fontSize: 13, color: C.textDim } },
              "Local tasks only run while your computer is awake.",
            ),
          ),
          // Task card
          React.createElement(
            "div",
            {
              onClick: function () {
                setSubView("detail");
              },
              onMouseEnter: function () {
                setHover("tc-0");
              },
              onMouseLeave: function () {
                setHover(null);
              },
              style: {
                padding: "16px 20px",
                borderRadius: 14,
                background: hover === "tc-0" ? C.cardHover : C.cardBg,
                border: "1px solid " + C.cardBorder,
                cursor: "pointer",
                maxWidth: 300,
              },
            },
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 4,
                },
              },
              React.createElement(
                "div",
                { style: { fontSize: 15, fontWeight: 600, color: C.text } },
                "daily-code-review",
              ),
              React.createElement(
                "span",
                {
                  style: {
                    padding: "2px 8px",
                    borderRadius: 6,
                    background: C.border,
                    fontSize: 11,
                    color: C.textDim,
                  },
                },
                "Local",
              ),
            ),
            React.createElement(
              "div",
              { style: { fontSize: 13, color: C.textDim, marginBottom: 10 } },
              "Review yesterday's commits and flag anything concerning",
            ),
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: C.green,
                },
              },
              React.createElement(IconClock, { size: 14, color: C.green }),
              "Every day at 9:06 AM",
            ),
          ),
        )
      : React.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 0",
            },
          },
          React.createElement(IconStopwatch, { size: 60, color: C.textMuted }),
          React.createElement(
            "p",
            { style: { fontSize: 14, color: C.textMuted, marginTop: 16 } },
            "No scheduled tasks yet.",
          ),
        ),
  );
}

// ─── PROJECT CREATE VIEW ───
function ProjectCreateView(props) {
  var setView = props.setView;

  // Show the "Create a new project" modal first
  const [form, setForm] = useState(false);

  if (!form) {
    return React.createElement(
      "div",
      {
        style: {
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.bg,
        },
      },
      React.createElement(
        "div",
        {
          style: {
            background: C.cardBg,
            borderRadius: 16,
            padding: "28px 32px",
            width: 460,
            border: "1px solid " + C.cardBorder,
            boxShadow: "0 16px 48px rgba(0,0,0,.5)",
          },
        },
        React.createElement(
          "h2",
          {
            style: {
              fontSize: 20,
              fontWeight: 700,
              color: C.text,
              marginBottom: 8,
            },
          },
          "Create a new project",
        ),
        React.createElement(
          "p",
          {
            style: {
              fontSize: 13,
              color: C.textDim,
              lineHeight: 1.5,
              marginBottom: 24,
            },
          },
          "A dedicated place for ongoing work, where context builds over time. Files and instructions stay in a folder on your computer.",
        ),
        // Three options
        [
          {
            icon: React.createElement(IconPlus, { size: 20, color: C.text }),
            title: "Start from scratch",
            desc: "Set up a new folder with instructions and files.",
          },
          {
            icon: React.createElement(IconFile, { size: 20, color: C.text }),
            title: "Import a project",
            desc: "Bring a project you made in Chat over to Cowork.",
          },
          {
            icon: React.createElement(IconFolder, { size: 20, color: C.text }),
            title: "Use an existing folder",
            desc: "Give Claude a folder you already work from.",
          },
        ].map(function (opt, i) {
          return React.createElement(
            "div",
            {
              key: i,
              onClick: function () {
                setForm(true);
              },
              style: {
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 18px",
                borderRadius: 12,
                border: "1px solid " + C.cardBorder,
                marginBottom: 10,
                cursor: "pointer",
                transition: "background .15s",
              },
              onMouseEnter: function (e) {
                e.currentTarget.style.background = C.cardHover;
              },
              onMouseLeave: function (e) {
                e.currentTarget.style.background = "transparent";
              },
            },
            React.createElement(
              "div",
              {
                style: {
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: C.accentSoft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
              opt.icon,
            ),
            React.createElement(
              "div",
              { style: { flex: 1 } },
              React.createElement(
                "div",
                { style: { fontSize: 14, fontWeight: 600, color: C.text } },
                opt.title,
              ),
              React.createElement(
                "div",
                { style: { fontSize: 12, color: C.textMuted } },
                opt.desc,
              ),
            ),
            React.createElement(IconChevronRight, {
              size: 16,
              color: C.textMuted,
            }),
          );
        }),
      ),
    );
  }

  // Form view
  return React.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.bg,
      },
    },
    React.createElement(
      "div",
      {
        style: {
          background: C.cardBg,
          borderRadius: 16,
          padding: "28px 32px",
          width: 440,
          border: "1px solid " + C.cardBorder,
          boxShadow: "0 16px 48px rgba(0,0,0,.5)",
        },
      },
      React.createElement(
        "div",
        {
          onClick: function () {
            setForm(false);
          },
          style: { cursor: "pointer", marginBottom: 12 },
        },
        React.createElement(IconChevronLeft, { size: 18, color: C.textDim }),
      ),
      React.createElement(
        "h2",
        {
          style: {
            fontSize: 20,
            fontWeight: 700,
            color: C.text,
            marginBottom: 20,
          },
        },
        "Start a new project",
      ),
      // Name field
      React.createElement(
        "div",
        { style: { marginBottom: 16 } },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            },
          },
          React.createElement(
            "label",
            { style: { fontSize: 13, color: C.text } },
            "Name *",
          ),
          React.createElement(
            "span",
            { style: { fontSize: 11, color: C.textMuted } },
            "Please fill out this field.",
          ),
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid " + C.accent,
              background: C.inputBg,
              fontSize: 14,
              color: C.textMuted,
            },
          },
          "Project name",
        ),
      ),
      // Instructions
      React.createElement(
        "div",
        { style: { marginBottom: 16 } },
        React.createElement(
          "label",
          {
            style: {
              fontSize: 13,
              color: C.textDim,
              display: "block",
              marginBottom: 4,
            },
          },
          "Instructions",
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid " + C.inputBorder,
              background: C.inputBg,
              fontSize: 13,
              color: C.textMuted,
              minHeight: 60,
            },
          },
          "Tell Claude how to work in this project (optional)",
        ),
      ),
      // Add files
      React.createElement(
        "div",
        { style: { marginBottom: 16 } },
        React.createElement(
          "label",
          {
            style: {
              fontSize: 13,
              color: C.textDim,
              display: "block",
              marginBottom: 4,
            },
          },
          "Add files",
        ),
        React.createElement(
          "div",
          {
            style: {
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
            },
          },
          React.createElement(IconPlus, { size: 14, color: C.textMuted }),
          "Drop files here or click to browse",
        ),
      ),
      // Location
      React.createElement(
        "div",
        { style: { marginBottom: 20 } },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
            },
          },
          React.createElement(
            "label",
            { style: { fontSize: 13, color: C.textDim } },
            "Choose project location",
          ),
          React.createElement(
            "span",
            { style: { fontSize: 11, color: C.accent, cursor: "pointer" } },
            "Change",
          ),
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: C.inputBg,
              border: "1px solid " + C.inputBorder,
            },
          },
          React.createElement(IconFolder, { size: 14, color: C.textDim }),
          React.createElement(
            "span",
            { style: { fontSize: 12, color: C.textDim } },
            "/Users/mjs/Documents/Claude/Projects",
          ),
        ),
      ),
      // Memory icon + buttons
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: C.textMuted,
            },
          },
          React.createElement(
            "div",
            {
              style: {
                width: 16,
                height: 16,
                borderRadius: 4,
                border: "1px solid " + C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
              },
            },
            "M",
          ),
          "Memory icon",
        ),
        React.createElement(
          "div",
          { style: { display: "flex", gap: 10 } },
          React.createElement(
            "button",
            {
              onClick: function () {
                setView("home");
              },
              style: {
                padding: "8px 20px",
                borderRadius: 10,
                border: "1px solid " + C.border,
                background: "transparent",
                color: C.textDim,
                fontSize: 13,
                cursor: "pointer",
              },
            },
            "Cancel",
          ),
          React.createElement(
            "button",
            {
              onClick: function () {
                setView("project-interior");
              },
              style: {
                padding: "8px 20px",
                borderRadius: 10,
                border: "none",
                background: C.accent,
                color: "#fff",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: 600,
              },
            },
            "Create",
          ),
        ),
      ),
    ),
  );
}

// ─── PROJECT INTERIOR VIEW ───
function ProjectInteriorView(props) {
  var hover = props.hover;
  var setHover = props.setHover;

  return React.createElement(
    "div",
    { style: { flex: 1, display: "flex", overflow: "hidden" } },
    // Main chat area
    React.createElement(
      "div",
      { style: { flex: 1, display: "flex", flexDirection: "column" } },
      // Project header
      React.createElement(
        "div",
        {
          style: {
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid " + C.border,
          },
        },
        React.createElement(
          "h2",
          { style: { fontSize: 20, fontWeight: 700, color: C.text } },
          "Test",
        ),
        React.createElement(
          "div",
          { style: { display: "flex", gap: 8 } },
          React.createElement(
            "div",
            { style: { fontSize: 13, color: C.textMuted, cursor: "pointer" } },
            "...",
          ),
        ),
      ),
      // Chat input
      React.createElement(
        "div",
        { style: { padding: "20px 24px" } },
        React.createElement(
          "div",
          {
            style: {
              background: C.cardBg,
              borderRadius: 14,
              border: "1px solid " + C.cardBorder,
              padding: "14px 18px",
            },
          },
          React.createElement(
            "div",
            { style: { fontSize: 14, color: C.textMuted, marginBottom: 16 } },
            "What would you like to work on in this project?",
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
            },
            React.createElement(
              "div",
              { style: { display: "flex", gap: 8 } },
              React.createElement(
                "div",
                {
                  style: {
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: "1px solid " + C.border,
                    fontSize: 12,
                    color: C.textDim,
                  },
                },
                React.createElement(IconFile, { size: 12 }),
              ),
              React.createElement(
                "span",
                { style: { fontSize: 12, color: C.textDim } },
                "Test",
              ),
              React.createElement(IconPlus, { size: 14, color: C.textMuted }),
            ),
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 8 } },
              React.createElement(
                "span",
                { style: { fontSize: 12, color: C.textMuted } },
                "Opus 4.6",
              ),
              React.createElement(
                "div",
                {
                  style: {
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: C.accent + "20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                },
                React.createElement(IconSend, { size: 14, color: C.accent }),
              ),
            ),
          ),
        ),
      ),
      // Empty state
      React.createElement(
        "div",
        {
          style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        },
        React.createElement(
          "div",
          { style: { fontSize: 40, marginBottom: 12, opacity: 0.3 } },
          "( )",
        ),
        React.createElement(
          "p",
          { style: { fontSize: 14, color: C.textMuted } },
          "Give Claude a task and it'll pick up your project context automatically.",
        ),
      ),
    ),
    // RIGHT PANEL (Instructions, Scheduled, Context, On your computer, Memory)
    React.createElement(
      "div",
      {
        style: {
          width: 260,
          borderLeft: "1px solid " + C.border,
          padding: "16px",
          overflow: "auto",
        },
      },
      // Instructions
      React.createElement(
        "div",
        { style: { marginBottom: 20 } },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            },
          },
          React.createElement(
            "span",
            { style: { fontSize: 13, fontWeight: 600, color: C.text } },
            "Instructions",
          ),
          React.createElement(IconEdit, { size: 14, color: C.textMuted }),
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "8px 12px",
              borderRadius: 8,
              background: C.cardBg,
              fontSize: 12,
              color: C.textDim,
            },
          },
          "Test",
        ),
      ),
      // Scheduled
      React.createElement(
        "div",
        { style: { marginBottom: 20 } },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            },
          },
          React.createElement(
            "span",
            { style: { fontSize: 13, fontWeight: 600, color: C.textDim } },
            "Scheduled",
          ),
          React.createElement(IconPlus, { size: 14, color: C.textMuted }),
        ),
        React.createElement(
          "p",
          { style: { fontSize: 12, color: C.textMuted } },
          "Set up recurring tasks for this project.",
        ),
      ),
      // Context
      React.createElement(
        "div",
        { style: { marginBottom: 20 } },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            },
          },
          React.createElement(
            "span",
            { style: { fontSize: 13, fontWeight: 600, color: C.textDim } },
            "Context",
          ),
          React.createElement(IconPlus, { size: 14, color: C.textMuted }),
        ),
      ),
      // On your computer
      React.createElement(
        "div",
        { style: { marginBottom: 20 } },
        React.createElement(
          "span",
          {
            style: {
              fontSize: 13,
              fontWeight: 600,
              color: C.textDim,
              display: "block",
              marginBottom: 8,
            },
          },
          "On your computer",
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: C.cardBg,
              border: "1px solid " + C.cardBorder,
            },
          },
          React.createElement(IconFolder, { size: 14, color: C.textDim }),
          React.createElement(
            "span",
            { style: { fontSize: 12, color: C.text } },
            "Test",
          ),
        ),
      ),
      // Memory
      React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          {
            style: {
              fontSize: 13,
              fontWeight: 600,
              color: C.textDim,
              display: "block",
              marginBottom: 8,
            },
          },
          "Memory",
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: C.cardBg,
              border: "1px solid " + C.cardBorder,
            },
          },
          React.createElement(
            "div",
            {
              style: {
                width: 16,
                height: 16,
                borderRadius: "50%",
                border: "1px solid " + C.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                color: C.textMuted,
              },
            },
            "M",
          ),
          React.createElement(
            "span",
            { style: { fontSize: 12, color: C.text } },
            "Memory",
          ),
        ),
      ),
    ),
  );
}

// ─── IDEAS VIEW ───
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

  return React.createElement(
    "div",
    { style: { flex: 1, padding: "24px 32px", overflow: "auto" } },
    React.createElement(
      "h2",
      {
        style: {
          fontSize: 22,
          fontWeight: 700,
          color: C.text,
          marginBottom: 16,
        },
      },
      "Ideas",
    ),
    // Category tabs
    React.createElement(
      "div",
      {
        style: { display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" },
      },
      categories.map(function (cat, i) {
        return React.createElement(
          "div",
          {
            key: i,
            style: {
              padding: "6px 14px",
              borderRadius: 20,
              border: "1px solid " + (i === 0 ? C.accent : C.border),
              fontSize: 12,
              color: i === 0 ? C.accent : C.textDim,
              cursor: "pointer",
              background: i === 0 ? C.accentSoft : "transparent",
            },
          },
          cat,
        );
      }),
      React.createElement("div", { style: { flex: 1 } }),
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 8 } },
        React.createElement(
          "span",
          { style: { fontSize: 12, color: C.textMuted } },
          "Connectors",
        ),
        React.createElement(
          "span",
          { style: { fontSize: 12, color: C.textMuted } },
          "Plugins 1",
        ),
        React.createElement(
          "span",
          { style: { fontSize: 12, color: C.textMuted } },
          "Engineering",
        ),
      ),
    ),
    // Info bar
    React.createElement(
      "div",
      {
        style: {
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
        },
      },
      React.createElement(IconLink, { size: 14, color: C.accent }),
      "Connect your tools to get more from Cowork",
    ),
    // Ideas grid
    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 12,
        },
      },
      ideas.map(function (idea, i) {
        return React.createElement(
          "div",
          {
            key: i,
            onMouseEnter: function () {
              setHover("idea-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
              padding: "16px",
              borderRadius: 12,
              border: "1px solid " + C.cardBorder,
              background: hover === "idea-" + i ? C.cardHover : C.cardBg,
              cursor: "pointer",
              minHeight: 80,
            },
          },
          React.createElement(
            "div",
            {
              style: {
                fontSize: 13,
                color: C.text,
                lineHeight: 1.5,
                marginBottom: 8,
              },
            },
            idea.title,
          ),
          idea.tags.length > 0
            ? React.createElement(
                "div",
                { style: { display: "flex", gap: 4, flexWrap: "wrap" } },
                idea.tags.map(function (tag, j) {
                  return React.createElement(
                    "span",
                    {
                      key: j,
                      style: {
                        fontSize: 10,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: C.accentSoft,
                        color: C.textDim,
                      },
                    },
                    tag,
                  );
                }),
              )
            : null,
        );
      }),
    ),
  );
}

// ─── SCENARIO VIEW (auto-play demo) ───
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

  return React.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      },
    },
    // Scenario header
    React.createElement(
      "div",
      {
        style: {
          padding: "12px 24px",
          borderBottom: "1px solid " + C.border,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: C.headerBg,
        },
      },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { style: { fontSize: 16, fontWeight: 600, color: C.text } },
          sc.title,
        ),
        React.createElement(
          "div",
          { style: { fontSize: 12, color: C.textDim, marginTop: 2 } },
          sc.intro,
        ),
      ),
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 10 } },
        React.createElement(
          "span",
          { style: { fontSize: 12, color: C.textMuted } },
          stepIdx + 1 + "/" + totalSteps,
        ),
        React.createElement(
          "button",
          {
            onClick: function () {
              setPlaying(!playing);
            },
            style: {
              padding: "5px 14px",
              borderRadius: 8,
              border: "1px solid " + (playing ? C.green + "40" : C.border),
              background: playing ? C.greenSoft : "transparent",
              color: playing ? C.green : C.textMuted,
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 500,
            },
          },
          playing ? "Pause" : "Play",
        ),
        React.createElement(
          "button",
          {
            onClick: function () {
              setView("home");
            },
            style: {
              padding: "5px 14px",
              borderRadius: 8,
              border: "1px solid " + C.border,
              background: "transparent",
              color: C.textMuted,
              fontSize: 12,
              cursor: "pointer",
            },
          },
          "Exit",
        ),
      ),
    ),
    // Progress bar
    React.createElement(
      "div",
      { style: { height: 3, background: C.border, flexShrink: 0 } },
      React.createElement("div", {
        style: {
          height: "100%",
          background: C.accent,
          width: progress + "%",
          transition: "width .8s ease",
        },
      }),
    ),
    // Steps
    React.createElement(
      "div",
      {
        ref: scrollRef,
        style: { flex: 1, overflow: "auto", padding: "16px 24px" },
      },
      shown.map(function (step, i) {
        var isCurrent = i === shown.length - 1;
        if (step.type === "approval") {
          return React.createElement(ApprovalStep, {
            key: i,
            data: step,
            isCurrent: isCurrent,
            opacity: isCurrent ? 1 : 0.35,
          });
        }
        return React.createElement(
          "div",
          { key: i },
          renderStep(step, isCurrent),
        );
      }),
    ),
    // Bottom input mock
    React.createElement(
      "div",
      { style: { padding: "12px 24px", borderTop: "1px solid " + C.border } },
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 8 } },
        React.createElement(IconPlus, { size: 16, color: C.textMuted }),
        React.createElement(
          "div",
          {
            style: {
              flex: 1,
              padding: "10px 16px",
              borderRadius: 10,
              background: C.inputBg,
              border: "1px solid " + C.inputBorder,
              fontSize: 13,
              color: C.textMuted,
            },
          },
          "Ask Claude anything",
        ),
        React.createElement(
          "div",
          {
            style: {
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: C.accent + "20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
          React.createElement(IconSend, { size: 14, color: C.accent }),
        ),
      ),
    ),
  );
}

// ─── DISPATCH VIEW ───
function DispatchView(props) {
  var hover = props.hover;
  var setHover = props.setHover;
  const [keepAwake, setKeepAwake] = useState(true);
  const [browserActions, setBrowserActions] = useState(true);
  const [computerUse, setComputerUse] = useState(false);
  const [infoBox, setInfoBox] = useState(true);

  return React.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      },
    },
    React.createElement(
      "div",
      { style: { flex: 1, display: "flex", overflow: "hidden" } },
      // Left panel: settings
      React.createElement(
        "div",
        {
          style: {
            width: 240,
            borderRight: "1px solid " + C.border,
            padding: "16px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          },
        },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 12,
            },
          },
          React.createElement(
            "span",
            { style: { fontSize: 16, fontWeight: 600, color: C.text } },
            "Dispatch",
          ),
          React.createElement(
            "span",
            { style: { fontSize: 10, color: C.textMuted } },
            "\u25BC",
          ),
        ),
        React.createElement(
          "p",
          {
            style: {
              fontSize: 12,
              color: C.textDim,
              lineHeight: 1.6,
              marginBottom: 20,
            },
          },
          "Dispatch to Claude and check in from anywhere: a task, a code session, in one continuous thread.",
        ),
        // Keep awake toggle
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            },
          },
          React.createElement(
            "div",
            { style: { display: "flex", alignItems: "center", gap: 8 } },
            React.createElement(IconStopwatch, {
              size: 14,
              color: keepAwake ? C.green : C.textMuted,
            }),
            React.createElement(
              "span",
              { style: { fontSize: 13, color: C.text } },
              "Keep awake",
            ),
          ),
          React.createElement(
            "div",
            {
              onClick: function () {
                setKeepAwake(!keepAwake);
              },
              style: {
                width: 36,
                height: 20,
                borderRadius: 10,
                background: keepAwake ? C.green + "40" : C.border,
                cursor: "pointer",
                position: "relative",
                transition: "background .2s",
              },
            },
            React.createElement("div", {
              style: {
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: keepAwake ? C.green : "#555",
                position: "absolute",
                top: 2,
                transition: "left .2s",
                left: keepAwake ? 18 : 2,
              },
            }),
          ),
        ),
        // Allow all browser actions toggle
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            },
          },
          React.createElement(
            "span",
            { style: { fontSize: 13, color: C.text } },
            "Allow all browser actions",
          ),
          React.createElement(
            "div",
            {
              onClick: function () {
                setBrowserActions(!browserActions);
              },
              style: {
                width: 36,
                height: 20,
                borderRadius: 10,
                background: browserActions ? C.green + "40" : C.border,
                cursor: "pointer",
                position: "relative",
                transition: "background .2s",
              },
            },
            React.createElement("div", {
              style: {
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: browserActions ? C.green : "#555",
                position: "absolute",
                top: 2,
                transition: "left .2s",
                left: browserActions ? 18 : 2,
              },
            }),
          ),
        ),
        // Computer use checkbox
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            },
          },
          React.createElement(
            "div",
            {
              onClick: function () {
                setComputerUse(!computerUse);
              },
              style: {
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
              },
            },
            computerUse ? "\u2713" : "",
          ),
          React.createElement(
            "span",
            { style: { fontSize: 13, color: C.text } },
            "Computer use",
          ),
        ),
        // Outputs
        React.createElement(
          "div",
          { style: { marginTop: "auto" } },
          React.createElement(
            "span",
            {
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: C.textMuted,
                textTransform: "uppercase",
                marginBottom: 4,
                display: "block",
              },
            },
            "Outputs",
          ),
          React.createElement(
            "p",
            { style: { fontSize: 12, color: C.textMuted, marginTop: 4 } },
            "Files Claude shares will appear here.",
          ),
        ),
      ),
      // Right panel: welcome info box
      React.createElement(
        "div",
        {
          style: {
            flex: 1,
            padding: "24px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          },
        },
        infoBox
          ? React.createElement(
              "div",
              {
                style: {
                  background: C.cardBg,
                  borderRadius: 14,
                  padding: "20px 24px",
                  border: "1px solid " + C.cardBorder,
                  position: "relative",
                  marginBottom: 16,
                },
              },
              React.createElement(
                "div",
                {
                  onClick: function () {
                    setInfoBox(false);
                  },
                  style: {
                    position: "absolute",
                    top: 14,
                    right: 14,
                    cursor: "pointer",
                  },
                },
                React.createElement(IconX, { size: 16, color: C.textMuted }),
              ),
              React.createElement(
                "h3",
                {
                  style: {
                    fontSize: 16,
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: 10,
                  },
                },
                "Work with Claude, right on your computer",
              ),
              React.createElement(
                "p",
                {
                  style: {
                    fontSize: 13,
                    color: C.textDim,
                    lineHeight: 1.7,
                    marginBottom: 12,
                  },
                },
                "Claude can work with your files, browse in Chrome, and use connectors. Dispatch a task or a code session from the mobile app, and Claude will keep working as long as your computer stays awake.",
              ),
              React.createElement(
                "p",
                {
                  style: {
                    fontSize: 13,
                    color: C.textDim,
                    lineHeight: 1.7,
                    marginBottom: 10,
                  },
                },
                "Hey, glad you're here. Tell me what's on your plate, no ask is too big or small. You could ask me to:",
              ),
              React.createElement(
                "ul",
                {
                  style: {
                    fontSize: 13,
                    color: C.textDim,
                    lineHeight: 1.8,
                    paddingLeft: 20,
                    marginBottom: 12,
                  },
                },
                React.createElement(
                  "li",
                  null,
                  "Find a confirmation in Downloads and check the order status on the site.",
                ),
                React.createElement(
                  "li",
                  null,
                  "Find a passport scan, check visa rules for a trip, and flag what's missing.",
                ),
                React.createElement(
                  "li",
                  null,
                  "Scan Slack for a bug report, find the file, and open a Code session to fix it.",
                ),
                React.createElement(
                  "li",
                  null,
                  "Search your repos for an error message and trace where it comes from.",
                ),
              ),
              React.createElement(
                "p",
                {
                  style: { fontSize: 12, color: C.textMuted, lineHeight: 1.6 },
                },
                "You can also control this conversation from your phone. Download the Claude app for iOS or Android, then go to the Dispatch tab.",
              ),
            )
          : React.createElement(
              "div",
              {
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
              React.createElement(
                "p",
                { style: { fontSize: 14, color: C.textMuted } },
                "Start a conversation with Claude.",
              ),
            ),
      ),
    ),
    // Bottom input bar
    React.createElement(
      "div",
      { style: { padding: "12px 24px", borderTop: "1px solid " + C.border } },
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 8 } },
        React.createElement(IconPlus, { size: 16, color: C.textMuted }),
        React.createElement(
          "div",
          {
            style: {
              flex: 1,
              padding: "10px 16px",
              borderRadius: 10,
              background: C.inputBg,
              border: "1px solid " + C.inputBorder,
              fontSize: 13,
              color: C.textMuted,
            },
          },
          "Ask Claude anything",
        ),
        React.createElement(
          "div",
          {
            style: {
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: C.accent + "20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
          React.createElement(IconSend, { size: 14, color: C.accent }),
        ),
      ),
    ),
  );
}

// ─── WELCOME SCREEN ───
function WelcomeScreen(props) {
  var startTour = props.startTour;
  var jumpTo = props.jumpTo;
  var setView = props.setView;
  var hover = props.hover;
  var setHover = props.setHover;

  return React.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        animation: "fadeIn 1s ease",
      },
    },
    React.createElement(
      "h1",
      {
        style: {
          fontFamily: '"Playfair Display",Georgia,serif',
          fontSize: 44,
          fontWeight: 700,
          color: C.text,
          textAlign: "center",
          marginBottom: 16,
          lineHeight: 1.15,
        },
      },
      "Cowork Interactive Tour",
    ),
    React.createElement(
      "p",
      {
        style: {
          fontSize: 17,
          color: C.textDim,
          textAlign: "center",
          maxWidth: 520,
          lineHeight: 1.65,
          marginBottom: 6,
        },
      },
      "Explore every panel of Claude's autonomous desktop assistant. Click through the real UI or watch auto-playing demos.",
    ),
    React.createElement(
      "p",
      {
        style: {
          fontSize: 13,
          color: C.textMuted,
          textAlign: "center",
          marginBottom: 36,
        },
      },
      "Interactive panels + 8 scenario demos",
    ),
    React.createElement(
      "div",
      { style: { display: "flex", gap: 12, marginBottom: 32 } },
      React.createElement(
        "button",
        {
          onClick: function () {
            setView("home");
          },
          style: {
            padding: "14px 40px",
            borderRadius: 14,
            border: "none",
            background: C.accent,
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            animation: "glow 2s ease infinite",
          },
        },
        "Explore Cowork",
      ),
      React.createElement(
        "button",
        {
          onClick: startTour,
          style: {
            padding: "14px 40px",
            borderRadius: 14,
            border: "1px solid " + C.border,
            background: "transparent",
            color: C.textDim,
            fontSize: 16,
            fontWeight: 500,
            cursor: "pointer",
          },
        },
        "Watch Demos",
      ),
    ),
    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 10,
          maxWidth: 680,
        },
      },
      SCENARIOS.map(function (s, i) {
        return React.createElement(
          "div",
          {
            key: i,
            onClick: function () {
              jumpTo(i);
            },
            onMouseEnter: function () {
              setHover("w-" + i);
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
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
            },
          },
          React.createElement(
            "div",
            { style: { fontSize: 15, marginBottom: 4 } },
            [
              "\u{1F4C4}",
              "\u{1F4C2}",
              "\u{1F9E0}",
              "\u{1F50C}",
              "\u{1F4CA}",
              "\u{1F4F1}",
              "\u{1F5A5}",
              "\u23F0",
            ][i],
          ),
          React.createElement("div", null, s.title),
        );
      }),
    ),
  );
}

// ─── FINALE SCREEN ───
function FinaleScreen(props) {
  var setView = props.setView;
  return React.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        animation: "fadeIn .8s ease",
      },
    },
    React.createElement(
      "div",
      { style: { fontSize: 56, marginBottom: 20 } },
      "\u{1F389}",
    ),
    React.createElement(
      "h1",
      {
        style: {
          fontFamily: '"Playfair Display",Georgia,serif',
          fontSize: 36,
          fontWeight: 700,
          color: C.text,
          textAlign: "center",
          marginBottom: 16,
        },
      },
      "Tour Complete!",
    ),
    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 12,
          maxWidth: 600,
          marginBottom: 32,
        },
      },
      [
        "File creation",
        "Folder security",
        "Project memory",
        "Connectors",
        "Document skills",
        "Dispatch",
        "Computer Use",
        "Scheduling",
      ].map(function (f, i) {
        return React.createElement(
          "div",
          {
            key: i,
            style: {
              padding: "10px 12px",
              borderRadius: 10,
              background: C.greenSoft,
              border: "1px solid " + C.green + "25",
              fontSize: 13,
              color: C.green,
              textAlign: "center",
            },
          },
          f,
        );
      }),
    ),
    React.createElement(
      "p",
      {
        style: {
          fontSize: 15,
          color: C.textDim,
          textAlign: "center",
          maxWidth: 400,
          marginBottom: 28,
        },
      },
      "Open the Claude Desktop app and click the Cowork tab to get started for real.",
    ),
    React.createElement(
      "div",
      { style: { display: "flex", gap: 12 } },
      React.createElement(
        "button",
        {
          onClick: function () {
            setView("home");
          },
          style: {
            padding: "12px 36px",
            borderRadius: 12,
            border: "none",
            background: C.accent,
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          },
        },
        "Explore Panels",
      ),
      React.createElement(
        "button",
        {
          onClick: function () {
            setView("welcome");
          },
          style: {
            padding: "12px 36px",
            borderRadius: 12,
            border: "1px solid " + C.border,
            background: "transparent",
            color: C.textDim,
            fontSize: 15,
            cursor: "pointer",
          },
        },
        "Back to Start",
      ),
    ),
  );
}

// ─── SEARCH OVERLAY ───
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

  return React.createElement(
    "div",
    {
      style: {
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
      },
      onClick: onClose,
    },
    React.createElement(
      "div",
      {
        onClick: function (e) {
          e.stopPropagation();
        },
        style: {
          background: C.cardBg,
          borderRadius: 16,
          width: 520,
          maxHeight: 500,
          border: "1px solid " + C.cardBorder,
          boxShadow: "0 16px 48px rgba(0,0,0,.6)",
          overflow: "hidden",
        },
      },
      // Search input
      React.createElement(
        "div",
        {
          style: {
            padding: "14px 18px",
            borderBottom: "1px solid " + C.border,
            display: "flex",
            alignItems: "center",
            gap: 10,
          },
        },
        React.createElement(IconSearch, { size: 16, color: C.textMuted }),
        React.createElement(
          "span",
          { style: { fontSize: 14, color: C.textMuted, flex: 1 } },
          "Search chats and projects",
        ),
      ),
      // Pinned item
      React.createElement(
        "div",
        { style: { padding: "8px 0" } },
        React.createElement(
          "div",
          {
            onMouseEnter: function () {
              setHover("sr-pin");
            },
            onMouseLeave: function () {
              setHover(null);
            },
            style: {
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              background: hover === "sr-pin" ? C.sidebarHover : "transparent",
            },
          },
          React.createElement(
            "div",
            { style: { display: "flex", alignItems: "center", gap: 10 } },
            React.createElement(IconBulb, { size: 16, color: C.accent }),
            React.createElement(
              "span",
              { style: { fontSize: 14, color: C.text } },
              "How to use Claude",
            ),
          ),
          React.createElement(IconChevronRight, {
            size: 14,
            color: C.textMuted,
          }),
        ),
      ),
      // Results list
      React.createElement(
        "div",
        { style: { maxHeight: 340, overflow: "auto" } },
        SEARCH_ITEMS.map(function (item, i) {
          return React.createElement(
            "div",
            {
              key: i,
              onMouseEnter: function () {
                setHover("sr-" + i);
              },
              onMouseLeave: function () {
                setHover(null);
              },
              onClick: onClose,
              style: {
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                background:
                  hover === "sr-" + i ? C.sidebarHover : "transparent",
              },
            },
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 10 } },
              React.createElement(IconMessageCircle, {
                size: 14,
                color: C.textMuted,
              }),
              React.createElement(
                "span",
                { style: { fontSize: 13, color: C.textDim } },
                item.name,
              ),
            ),
            React.createElement(
              "span",
              { style: { fontSize: 11, color: C.textMuted } },
              item.time,
            ),
          );
        }),
      ),
    ),
  );
}

// ─── CSS Keyframes (injected as style tag) ───
var CSS_KEYFRAMES = [
  "*{margin:0;padding:0;box-sizing:border-box}",
  "::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#3a3530;border-radius:3px}",
  "@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}",
  "@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
  "@keyframes slideIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}",
  "@keyframes glow{0%,100%{box-shadow:0 0 12px #c97d4a30}50%{box-shadow:0 0 28px #c97d4a60}}",
  "@keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 #c97d4a00}50%{box-shadow:0 0 0 8px #c97d4a20}}",
  "@keyframes typing{from{width:0}to{width:100%}}",
  "@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}",
  "@keyframes progressFill{from{width:0%}to{width:var(--target)}}",
].join("\n");

// ─── MAIN APP ───
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
      return React.createElement(WelcomeScreen, {
        startTour: startTour,
        jumpTo: jumpToScenario,
        setView: setView,
        hover: hover,
        setHover: setHover,
      });
    if (view === "finale")
      return React.createElement(FinaleScreen, { setView: setView });
    if (view === "home")
      return React.createElement(HomeView, {
        setView: setView,
        onScenario: jumpToScenario,
        hover: hover,
        setHover: setHover,
      });
    if (view === "customize")
      return React.createElement(CustomizeView, {
        setView: setView,
        hover: hover,
        setHover: setHover,
      });
    if (view === "browse-plugins")
      return React.createElement(BrowsePluginsView, {
        setView: setView,
        hover: hover,
        setHover: setHover,
      });
    if (view === "skills")
      return React.createElement(SkillsView, {
        hover: hover,
        setHover: setHover,
      });
    if (view === "scheduled")
      return React.createElement(ScheduledView, {
        hover: hover,
        setHover: setHover,
      });
    if (view === "project-create")
      return React.createElement(ProjectCreateView, { setView: setView });
    if (view === "project-interior")
      return React.createElement(ProjectInteriorView, {
        hover: hover,
        setHover: setHover,
      });
    if (view === "ideas")
      return React.createElement(IdeasView, {
        hover: hover,
        setHover: setHover,
      });
    if (view === "dispatch")
      return React.createElement(DispatchView, {
        hover: hover,
        setHover: setHover,
      });
    if (view === "scenario")
      return React.createElement(ScenarioView, {
        scIdx: scIdx,
        stepIdx: stepIdx,
        setStepIdx: setStepIdx,
        playing: playing,
        setPlaying: setPlaying,
        setView: setView,
      });
    return React.createElement(HomeView, {
      setView: setView,
      onScenario: jumpToScenario,
      hover: hover,
      setHover: setHover,
    });
  }

  var showSidebar = view !== "welcome" && view !== "finale";

  return React.createElement(
    "div",
    {
      style: {
        height: "100%",
        width: "100%",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,sans-serif",
      },
    },
    React.createElement("style", {
      dangerouslySetInnerHTML: { __html: CSS_KEYFRAMES },
    }),
    React.createElement("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&family=JetBrains+Mono:wght@400;500&display=swap",
    }),
    React.createElement(TitleBar, {
      view: view,
      navArrows: showSidebar,
      canBack: true,
      canForward: true,
      onBack: function () {
        if (view === "browse-plugins") setView("customize");
        else if (view === "skills") setView("customize");
        else if (view === "project-interior") setView("home");
        else if (view === "project-create") setView("home");
        else if (view === "scenario") setView("home");
        else if (view === "dispatch") setView("home");
        else setView("welcome");
      },
      onForward: function () {},
      rightContent:
        view === "scenario"
          ? React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginRight: 14,
                },
              },
              React.createElement(
                "span",
                { style: { fontSize: 12, color: C.textMuted } },
                scIdx + 1 + "/" + SCENARIOS.length,
              ),
              React.createElement(
                "button",
                {
                  onClick: function () {
                    if (scIdx < SCENARIOS.length - 1) {
                      setScIdx(scIdx + 1);
                      setStepIdx(0);
                    } else {
                      setView("finale");
                    }
                  },
                  style: {
                    padding: "4px 12px",
                    borderRadius: 8,
                    border: "1px solid " + C.border,
                    background: "transparent",
                    color: C.textMuted,
                    fontSize: 12,
                    cursor: "pointer",
                  },
                },
                "Next scenario",
              ),
            )
          : null,
    }),
    React.createElement(
      "div",
      { style: { flex: 1, display: "flex", overflow: "hidden" } },
      showSidebar
        ? React.createElement(Sidebar, {
            view: view,
            setView: setView,
            hover: hover,
            setHover: setHover,
            onScenario: jumpToScenario,
            onSearchOpen: function () {
              setSearchOpen(true);
            },
          })
        : null,
      renderMainContent(),
    ),
    searchOpen
      ? React.createElement(SearchOverlay, {
          hover: hover,
          setHover: setHover,
          onClose: function () {
            setSearchOpen(false);
          },
        })
      : null,
  );
}
