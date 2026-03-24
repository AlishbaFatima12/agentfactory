---
slug: /Business-Domain-Agent-Workflows/finance-domain-agents/the-assistant-and-the-agent
sidebar_position: 1
title: "The Assistant and the Agent"
description: "Understand the architectural distinction between Claude in Excel (an AI assistant embedded in one workbook) and Cowork with Excel (an AI agent orchestrating across applications), and why Excel is the starting point for finance domain agents"
keywords:
  [
    "Claude in Excel",
    "Cowork",
    "finance domain agents",
    "AI assistant",
    "AI agent",
    "Excel add-in",
    "financial modelling",
    "data connectors",
    "Agent Skills",
    "cross-app orchestration",
  ]
chapter: 28
lesson: 1
duration_minutes: 18

# HIDDEN SKILLS METADATA
skills:
  - name: "Distinguish AI Assistant from AI Agent Architecture"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can explain the difference between an AI assistant embedded in a single application and an AI agent orchestrating across multiple applications, using Claude in Excel and Cowork as concrete examples"

  - name: "Identify Finance Domain Agent Capabilities"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Literacy"
    measurable_at_this_level: "Student can describe the two layers of Claude in Excel (general workbook intelligence and pre-built Agent Skills) and explain when Cowork's cross-application orchestration adds value beyond the embedded assistant"

  - name: "Evaluate Appropriate AI Architecture for Finance Tasks"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can determine whether a given finance workflow requires an embedded assistant (single-workbook scope) or an orchestrating agent (multi-application scope) and justify the choice"

learning_objectives:
  - objective: "Explain why the distinction between an embedded AI assistant and an orchestrating AI agent matters for finance professionals, using Claude in Excel and Cowork as concrete examples"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can describe both architectures and explain the scope difference (single workbook vs multi-application) without confusing their capabilities"

  - objective: "Describe the two layers of Claude in Excel (general workbook intelligence and the pre-built Agent Skills) and identify the role of data connectors in both Claude in Excel and Cowork"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can list the two layers, name at least three Agent Skills, and explain that the same data connectors serve both environments with different scope"

  - objective: "Navigate the chapter structure and identify which part addresses their professional context: Claude in Excel for modelling work, Cowork for cross-app workflows, or enterprise extensions for custom deployments"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Student can describe the three-part chapter structure and identify which part they should prioritise based on their role"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Assistant vs agent architecture (embedded in one app vs orchestrating across apps)"
    - "Claude in Excel's two layers (general workbook intelligence and pre-built Agent Skills)"
    - "Data connectors as a shared ecosystem serving both environments at different scope"
    - "The chapter's three-part structure mapping to different professional needs"
  assessment: "4 concepts at A2 level: within the 5-7 cognitive limit for this tier. Students enter from Chapter 27 with a clear understanding of SKILL.md architecture and the Knowledge Extraction Method; this lesson shifts to a new domain (finance) and a new platform distinction (assistant vs agent)."

differentiation:
  extension_for_advanced: "Compare the assistant-vs-agent distinction in finance to a domain you know. Where in your professional workflow would an embedded assistant suffice, and where would cross-application orchestration change the quality or speed of your output? Write two sentences describing each scenario."
  remedial_for_struggling: "Focus on the comparison table. For each row, write one sentence explaining what the difference means in practice. If you can explain why Claude in Excel does not require Cowork but Cowork requires a subscription platform, you have understood the core architectural distinction."

teaching_guide:
  lesson_type: "core"
  session_group: 1
  session_title: "The Platform Distinction"
  key_points:
    - "Excel is the operating system of the financial profession: every domain agent chapter begins with the platform, and in finance, that platform is Excel"
    - "Claude in Excel is an AI assistant embedded in one workbook; Cowork with Excel is an AI agent that orchestrates across multiple applications: same data connectors, different scope"
    - "The pre-built Agent Skills in Claude in Excel are purpose-designed financial workflows that produce industry-standard deliverables and can incorporate market data when configured with appropriate connectors"
    - "The chapter is structured in three parts: the embedded assistant, the orchestrating agent platform, and enterprise extensions: each serves a different professional context"
  misconceptions:
    - "Students may assume Claude in Excel and Cowork use separate connector ecosystems: in reality, any data connector configured in Claude settings works in both environments; the difference is scope (one workbook vs cross-app)"
    - "Students may think Claude in Excel requires the Cowork platform: it is a standalone Microsoft add-in that works independently"
    - "Students may confuse the Agent Skills with general chat: the Agent Skills are purpose-built financial workflows, not general conversational features"
  discussion_prompts:
    - "Think about your current finance workflow. How many applications do you touch in a single deliverable: Excel, PowerPoint, Word, email? Does the number of applications suggest you need an assistant or an agent?"
    - "Consider a financial model you built recently. Which parts required judgement (and therefore benefit from an assistant that understands context) versus which parts were mechanical transfers between applications (and therefore benefit from agent orchestration)?"
  teaching_tips:
    - "Open with the epigraph: it frames Excel as the centre of finance and immediately establishes why this chapter starts where it does"
    - "The comparison table is the anchor of this lesson; spend time on it and ensure students understand that the rows describe architectural differences, not feature lists"
    - "The security note is essential for finance professionals: prompt injection in spreadsheets from untrusted sources is a real operational risk, not a theoretical concern"
  assessment_checks:
    - question: "What is the difference between Claude in Excel and Cowork with Excel?"
      expected_response: "Claude in Excel is an AI assistant embedded directly in a workbook (it reads, analyses, and modifies one spreadsheet at a time. Cowork with Excel is an AI agent that orchestrates across multiple applications) Excel is one stop in a multi-step workflow that can include PowerPoint, Word, and other tools. They share the same data connectors but operate at different scope."
    - question: "What are the two layers of Claude in Excel?"
      expected_response: "Layer 1 is general workbook intelligence (Claude reads all sheets, formulas, and data to answer questions, trace dependencies, test scenarios, and debug errors. Layer 2 is the pre-built Agent Skills) specialist financial workflows that produce professionally structured deliverables like DCF models, comparable company analyses, and 3-statement models."
    - question: "Do Claude in Excel and Cowork use different data connectors?"
      expected_response: "No. Any data connector configured in your Claude settings works in both environments. The difference is scope: Claude in Excel uses connectors to serve analysis within one workbook, while Cowork uses the same connectors to serve multi-application workflows."
---

# The Assistant and the Agent

> _"Excel is not a spreadsheet application. It is the operating system of the financial profession. Everything else (the presentations, the memos, the reports) is built from what lives in a spreadsheet first."_

In Chapter 27, you learned the Knowledge Extraction Method: the structured process for surfacing tacit professional knowledge and encoding it in a SKILL.md that produces reliable agent behaviour. Now you will apply that methodology to the domain where AI agents have the most immediate, measurable impact on professional output: finance.

Every finance professional knows the feeling. The corporate controller reconciles accounts in Excel. The investment banker builds deal models in Excel. The equity research analyst updates earnings forecasts in Excel. The FP&A manager presents variance analysis to the board from a PowerPoint deck built from an Excel model. If you work in finance, accounting, treasury, or investment management, Excel is the medium through which your professional judgement is expressed. This chapter begins there; not because Excel is the only tool that matters, but because it is the tool where the distinction between an AI _assistant_ and an AI _agent_ becomes concrete and consequential.

Anthropic offers two architecturally different ways to bring Claude's intelligence into your Excel workflow. Confusing them will cause real frustration: you will look for features in the wrong place and miss capabilities that are available to you. Understanding the distinction will also give you a framework that applies far beyond finance: the difference between intelligence embedded in a single tool and intelligence orchestrating across tools is one of the most important architectural decisions in any domain agent deployment.

## The Core Distinction

**Claude in Excel** is an AI assistant embedded directly inside Microsoft Excel. It lives in a sidebar within your workbook. It reads your spreadsheet (all sheets, all formulas, all data) and applies reasoning to answer questions, trace dependencies, test scenarios, debug errors, and build new model structures from plain-language descriptions. Through its pre-built Agent Skills, it generates professional financial deliverables like DCF valuations and comparable company analyses. When configured with data connectors, it can incorporate market data directly into your workbooks. It is a standalone Microsoft add-in. It does not require Cowork. It works within one application.

**Cowork with Excel** involves Claude acting as an AI agent that orchestrates across multiple applications. Excel is one node in a multi-step autonomous workflow. The agent can perform analysis in Excel, then carry that context forward and autonomously build a presentation in PowerPoint: without you switching applications or copying anything manually. This capability requires the Cowork platform and operates through finance plugins that bundle domain knowledge, data connectors, and workflow logic.

The shorthand: Claude in Excel is a _deep companion_ for financial modelling work. Cowork with Excel is a _workflow orchestrator_ that treats Excel as one stop in a larger automated process.

## What Makes Them Different

|                                | **Claude in Excel**                                                                                                                           | **Cowork with Excel**                                 |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **What it is**                 | Standalone Microsoft Excel add-in (sidebar)                                                                                                   | Part of the Cowork agent platform                     |
| **Architecture**               | AI assistant embedded in one application                                                                                                      | AI agent orchestrating across applications            |
| **Scope**                      | One workbook at a time                                                                                                                        | Multiple applications (Excel, PowerPoint, Word)       |
| **Pre-built financial skills** | 11 Agent Skills including comps, DCF, 3-statement models, due diligence packs, earnings analyses, initiating coverage, and presentation tools | Domain plugins with bundled skills and slash commands |
| **Data connectors**            | Any connector configured in your Claude settings                                                                                              | Same connectors, applied across multi-app workflows   |
| **Cross-app capability**       | Excel only                                                                                                                                    | Excel to PowerPoint orchestration (research preview)  |
| **Who it is for**              | Financial analysts doing modelling work directly in Excel                                                                                     | Enterprise teams running agent workflows across tools |
| **Plan requirement**           | Pro, Max, Team, Enterprise (beta)                                                                                                             | Team and Enterprise                                   |
| **Requires Cowork?**           | No                                                                                                                                            | Yes                                                   |

One detail in this table deserves emphasis. Claude in Excel and Cowork do not maintain separate connector ecosystems. Any data connector you configure in your Claude settings (S&P Global, FactSet, PitchBook, Morningstar, Daloopa, LSEG, or any other) works in both environments automatically. The difference is not _which_ connectors are available. The difference is _scope_: Claude in Excel uses those connectors to serve analysis within one workbook; Cowork uses the same connectors to serve workflows that span multiple applications.

This is a useful mental model beyond finance. In any domain, the question is not "which AI tool has the most features?" but "does my workflow live inside one application or across several?" The answer determines whether you need an embedded assistant or an orchestrating agent.

## The Two Layers of Claude in Excel

Claude in Excel operates at two distinct layers. Understanding the difference helps you use it effectively.

**Layer 1: General workbook intelligence.** Claude reads the open workbook: all sheets, all formulas, all data: and applies general reasoning to answer questions about it, trace formula dependencies, test scenario changes, debug errors, and build new model structures from plain-language descriptions. This layer requires no configuration and works on any workbook. It includes native Excel operations: pivot table editing, chart adjustments, conditional formatting, sort and filter, data validation, and print area configuration. Every action Claude takes is traceable: when Claude references revenue being driven by cell B12, clicking that reference in the sidebar navigates Excel directly to it.

**Layer 2: Pre-built Agent Skills.** Claude in Excel ships with specialist financial workflows purpose-designed for investment banking, equity research, and financial analysis. These Agent Skills go beyond general assistance: they produce professionally structured financial deliverables that follow industry conventions. The current set of Agent Skills includes:

1. **3-Statement Financial Modelling**: integrated income statement, balance sheet, and cash flow statement
2. **Comparable Company Analysis**: valuation multiples, operating metrics across public and private peers
3. **Competitive Landscape Analysis**: market positioning and competitive dynamics
4. **Discounted Cash Flow Model**: FCF projections, WACC calculations, scenario toggles, sensitivity tables
5. **Due Diligence Data Pack**: processes data room documents into structured Excel with financials, customer lists, contract terms
6. **Earnings Analysis**: quarterly transcripts extraction: metrics, guidance changes, management commentary
7. **Initiating Coverage Report**: industry analysis, company deep-dives, valuation frameworks
8. **Strip Profile / Business Overview**: condensed company overviews for pitch books and buyer lists
9. **Pitch Deck Creation**: structured presentation content from financial analysis
10. **PPT Template Creator**: presentation templates following industry formatting conventions
11. **Presentation Quality Checker**: reviews and validates presentation deliverables

When connecting to external data sources such as FactSet, Capital IQ, or Daloopa, these skills can incorporate live data into your workbooks. The specific data connectors available depend on your organisation's connector configuration.

:::note Agent Skills Availability

The financial services Agent Skills are currently available to Claude for Financial Services users. Check the [Claude for Financial Services](https://support.claude.com/en/articles/12219959-claude-for-financial-services-overview) page for current access requirements and waitlist information.

:::

## Chapter Roadmap

This chapter is structured in three parts, each serving a different professional context.

**Part One: Claude in Excel: The Embedded Assistant.** Covers general workbook intelligence (understanding models you did not build, scenario testing, error debugging) and the pre-built Agent Skills for financial analysis. This is where most finance professionals will spend their initial time. If you work directly in Excel building models and analysing data, Part One gives you immediately applicable skills.

**Part Two: Cowork Finance Plugins (The Orchestrating Agent.** Covers the Cowork platform's finance capabilities) the corporate finance plugin, the financial services plugin suite, data connectors, and cross-app orchestration from Excel to PowerPoint. This part matters when your deliverables span multiple applications and your workflow involves carrying analysis from a spreadsheet into a presentation, memo, or report.

**Part Three: Enterprise Extensions.** Covers how to extend the pre-built capabilities with custom SKILL.md files for your firm's specific needs: applying the Knowledge Extraction Method from Chapter 27 to finance domain expertise. This part connects everything: the platform capabilities from Parts One and Two, the extraction methodology from Chapter 27, and the agent architecture from Chapter 26.

## Getting Started

**Step 1 (Install the add-in.** Go to the [Claude in Excel page](https://claude.com/claude-in-excel) and click **Install Now**) this takes you to the [Microsoft AppSource listing](https://marketplace.microsoft.com/en-us/product/saas/wa200009404?tab=overview). Click **Get it now** and sign in with your Microsoft account to add the add-in.

**Step 2: Find the add-in in Excel.** After installation, the add-in location depends on your platform:

- **Windows (Excel 365):** Home tab → **Add-ins** in the ribbon
- **Mac (Excel 16.46+):** Tools menu → **Add-ins**
- **Excel on the web:** Insert tab → **Add-ins** → **My Add-ins**
- **iPad (Excel 2.51+):** Insert tab → **Add-ins**

:::tip Can't find the add-in?

Click the **Insert** tab → **My Add-ins** (labelled **My Apps** in some Office versions). If the add-in still does not appear, click **Refresh** in the My Add-ins menu. Organisation administrators who have disabled the Office Store can deploy via the manifest XML file through the Microsoft 365 Admin Center instead.

:::

**Step 3: Open the Claude panel.** Click the Claude icon in the ribbon, or use the keyboard shortcut:

- **Mac:** Control + Option + C
- **Windows:** Control + Alt + C

A sidebar opens on the right side of your Excel window. Sign in with your Claude account. This is where you type prompts and where Claude's responses appear.

**Step 4: Open a practice workbook.** Download the chapter practice workbook to follow along with the exercises in this chapter:

<a href="/downloads/ch28/ch28_veeva_practice_workbook.xlsx" download>Download Practice Workbook (ch28_veeva_practice_workbook.xlsx)</a>

Open the workbook in Excel (desktop or web), then open the Claude panel using the shortcut above.

**Step 5: Say hello.** Type your first prompt to verify the connection and explore the workbook:

```
Walk me through the structure of this workbook: summarize the key inputs,
calculations, and outputs, any important relationships between sheets,
and the overall purpose of the analysis.
```

If Claude responds with a structured description of the workbook, the add-in is working. You are ready for the rest of this chapter.

**Plan requirement.** Claude in Excel is available in beta for **Pro, Max, Team, and Enterprise** subscribers.

**Supported platforms.** Excel on the web, Excel on Windows (Microsoft 365, build 16.0.13127.20296+), Excel on Mac (version 16.46+), and Excel on iPad (version 2.51+).

**Supported formats.** `.xlsx` and `.xlsm`. File size limits apply by plan.

:::warning Security: Spreadsheets from Untrusted Sources

Claude in Excel reads the contents of your workbook: including cell values, formulas, and comments. This creates a prompt injection risk when opening spreadsheets from sources you do not fully trust.

Malicious instructions hidden in cells, formulas, or comments can attempt to trick Claude into extracting sensitive information, modifying critical financial records, or performing destructive actions. This is particularly relevant in finance, where spreadsheets are routinely shared between organisations during deal processes, audits, and due diligence.

**Protections in place:** Claude will show you a confirmation pop-up before executing functions that fetch external data: including WEBSERVICE, STOCKHISTORY, IMPORTDATA, and others that reach outside the workbook. Do not dismiss these prompts without reading them.

**Best practice:** When opening a spreadsheet from an external source, review its contents before engaging Claude. If the workbook was not created by someone you trust, treat any unusual formulas or hidden sheets with the same caution you would apply to an email attachment from an unknown sender.

:::

## Try With AI

Use these prompts in Claude in Excel or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Architecture Assessment

```
I am a [YOUR ROLE] in [YOUR INDUSTRY — e.g., corporate finance,
investment banking, equity research, FP&A]. Describe my typical
workflow for producing a [KEY DELIVERABLE — e.g., quarterly board
deck, deal book, earnings model update].

For each step in the workflow, classify it as:
1. Single-application work (stays inside Excel) — suited to an
   embedded AI assistant
2. Cross-application work (moves between Excel, PowerPoint, Word,
   email) — suited to an orchestrating AI agent

Based on the classification, recommend whether I should start with
Claude in Excel, Cowork, or both, and explain why.
```

**What you are learning:** The assistant-vs-agent distinction is not abstract when applied to your own workflow. By mapping your actual deliverable production process against the two architectures, you develop an intuition for which problems each solves: and where the boundary between them falls in your specific context.

### Prompt 2: Agent Skills Discovery

```
I work in [YOUR FINANCE ROLE]. Claude in Excel has pre-built
Agent Skills including: 3-Statement Financial Modelling, Comparable
Company Analysis, Competitive Landscape Analysis, Discounted Cash
Flow Model, Due Diligence Data Pack, Earnings Analysis, Initiating
Coverage Report, Strip Profile / Business Overview, Pitch Deck
Creation, PPT Template Creator, and Presentation Quality Checker.

For each Agent Skill:
1. Explain what it produces in one sentence
2. Rate its relevance to my role (High / Medium / Low / Not Applicable)
3. Describe one specific situation where I would invoke it

Then suggest which two Agent Skills I should learn first and why.
```

**What you are learning:** The Agent Skills are not generic features: they are purpose-built for specific financial workflows. By mapping them to your role, you identify which capabilities will produce immediate value and which you can defer, preventing the common mistake of trying to learn everything at once instead of mastering the tools that match your actual work.

### Prompt 3: Connector Scope Analysis

```
Explain the data connector architecture that Claude in Excel and
Cowork share. Specifically:

1. What are data connectors and what do they provide?
2. Why do the same connectors work in both Claude in Excel and Cowork?
3. What changes between the two environments — if the connectors are
   the same, what is actually different?
4. Give me a concrete example: if I have S&P Global configured as a
   data connector, describe what I can do with it in Claude in Excel
   versus what I can do with it in Cowork.

Use language appropriate for a finance professional who understands
data terminals but not software architecture.
```

**What you are learning:** The shared connector architecture is one of the most commonly misunderstood aspects of Claude's finance offerings. By working through how the same data source behaves differently depending on whether it serves an embedded assistant or an orchestrating agent, you build the mental model that prevents confusion throughout the rest of this chapter.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 2: Understanding Workbooks You Didn't Build →](./02-understanding-workbooks-you-didnt-build.md)
