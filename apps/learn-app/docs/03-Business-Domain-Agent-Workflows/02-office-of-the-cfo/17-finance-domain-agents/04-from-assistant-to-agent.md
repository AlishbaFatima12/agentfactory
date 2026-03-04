---
slug: /Business-Domain-Agent-Workflows/finance-domain-agents/from-assistant-to-agent
sidebar_position: 4
title: "From Assistant to Agent: Cowork Finance Plugins"
description: "Learn how the architecture shifts from Claude in Excel as an embedded assistant to Cowork as an orchestrating agent, explore the knowledge-work-plugins/finance plugin with its five commands and six skills, and understand the category placeholder system that separates workflow knowledge from connector configuration"
keywords:
  [
    "Cowork",
    "finance plugins",
    "knowledge-work-plugins",
    "orchestrating agent",
    "slash commands",
    "skills",
    "category placeholders",
    "month-end close",
    "Cowork connectors",
    "cross-app orchestration",
    "plugin architecture",
    "GL reconciliation",
  ]
chapter: 17
lesson: 4
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Plugin Architecture Understanding"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Content"
    measurable_at_this_level: "Student can explain the structural difference between an embedded assistant (Claude in Excel) and an orchestrating agent (Cowork), describe how skills and commands serve different purposes within a plugin, and identify the components of the plugin directory structure"

  - name: "Workflow Orchestration Comprehension"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can trace a multi-day finance workflow through the five plugin commands and explain which command serves which phase of a month-end close, and can describe how the close-management skill provides passive context throughout"

  - name: "Category Abstraction Understanding"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Digital Content"
    measurable_at_this_level: "Student can explain the category placeholder system (~~erp, ~~data warehouse) and articulate why this design separates workflow knowledge from connector configuration, connecting it to Chapter 15's division of responsibility between knowledge workers and IT"

learning_objectives:
  - objective: "Explain the architectural difference between Claude as an embedded assistant with native workbook access and Claude as an orchestrating agent that uses connectors to reach across multiple applications"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can describe the assistant-to-agent shift, explaining that Claude in Excel has native workbook access while Cowork uses connectors for cross-app orchestration, and can articulate what changes (scope and connector usage) when moving from one to the other"

  - objective: "Describe the knowledge-work-plugins/finance plugin structure, distinguishing between its five commands (explicitly invoked) and six skills (passively activated), and explain how they combine to support a multi-day month-end close workflow"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a close scenario (e.g., Day 3 bank reconciliation), student can identify which command to invoke, which skill activates passively, and what output to expect"

  - objective: "Analyse the category placeholder system in CONNECTORS.md and explain how it enables the same plugin to work with different enterprise systems without modifying the workflow definitions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student can explain why the plugin uses ~~erp rather than 'NetSuite' and trace the division of responsibility: knowledge worker owns SKILL.md, IT owns connector configuration"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Architecture shift from embedded assistant (single-app) to orchestrating agent (multi-app)"
    - "Skills (passive, auto-triggered) vs commands (active, explicitly invoked) in Cowork plugins"
    - "Plugin directory structure: plugin.json, .mcp.json, CONNECTORS.md, commands/, skills/"
    - "Category placeholder system (~~erp, ~~data warehouse) for tool-agnostic workflow design"
    - "Month-end close as a multi-day orchestrated workflow using commands and skills together"
  assessment: "5 concepts at B1 level -- within the 7-10 cognitive limit for this tier. Students have spent five lessons working inside Excel; this lesson introduces the Cowork layer as a scope expansion, not a replacement. The concepts build on each other: architecture shift sets up plugin structure, plugin structure introduces skills vs commands, commands drive the workflow example."

differentiation:
  extension_for_advanced: "Read the actual CONNECTORS.md on GitHub (github.com/anthropics/knowledge-work-plugins/blob/main/finance/CONNECTORS.md). Map each ~~category placeholder to the specific connector servers your organisation uses or could use. For each category that is 'not pre-configured,' research whether an connector server exists (hint: NetSuite's does). Draft a configuration plan showing which connectors IT would need to set up for full automation of your close workflow."
  remedial_for_struggling: "Focus on the skills vs commands distinction only. Pick one command (/reconciliation) and one skill (close-management). Describe in your own words: when does each one activate? What does each one produce? If you can explain that difference clearly, you have the core concept of this lesson."

teaching_guide:
  lesson_type: "core"
  session_group: 2
  session_title: "The Cowork Architecture"
  key_points:
    - "Claude in Excel has native workbook access via its sidebar; Cowork has built-in file skills for Office formats and uses connectors only for enterprise systems (ERP, data warehouse) -- the shift is from embedded assistant to orchestrating agent"
    - "Skills fire passively when contextually relevant; commands are explicitly invoked -- the combination produces specialist behaviour, not just tool access"
    - "The category placeholder system (~~erp, ~~data warehouse) is an architectural insight: plugins describe workflows, IT configures connections"
    - "The month-end close workflow demonstrates how commands and skills work together across multiple days, with the close-management skill providing continuous context"
  misconceptions:
    - "Students may think Cowork connectors are pre-configured -- they are not. Connectors must be separately enabled and some require provider API keys or subscriptions."
    - "Students may confuse skills with commands -- skills are passive (Claude applies them automatically), commands are active (you type them explicitly)"
    - "Students may think the plugin requires specific ERP software -- the category placeholder system is tool-agnostic by design"
  discussion_prompts:
    - "Why does the plugin use ~~erp instead of 'NetSuite'? What does this tell you about who the plugin is designed for?"
    - "If you were a controller starting a month-end close, which would you interact with first -- a command or a skill? Why?"
  teaching_tips:
    - "The architecture shift is the most important concept: Claude in Excel has native access to the open workbook via its sidebar. Cowork has built-in file skills for Excel and PowerPoint, and uses connectors only for enterprise systems. The difference is scope -- embedded assistant vs orchestrating agent."
    - "The month-end close walkthrough is the anchor example. Walk through it day by day, showing how commands produce outputs and skills provide context."
  assessment_checks:
    - question: "What changes when Claude operates through Cowork instead of inside Excel?"
      expected_response: "The scope of what Claude can do. In Excel, Claude works as an embedded assistant within one workbook via its sidebar. Through Cowork, Claude has built-in file skills for Office formats and uses connectors for enterprise systems -- it can carry context from Excel to PowerPoint, query data warehouses, and execute multi-step workflows."
    - question: "What is the difference between a skill and a command in a Cowork plugin?"
      expected_response: "A command is explicitly invoked by typing /command-name and triggers a specific workflow. A skill fires automatically in the background whenever Claude judges it contextually relevant. Commands are what you call; skills are what Claude draws on."
    - question: "Why does CONNECTORS.md use ~~erp instead of naming a specific product?"
      expected_response: "Because the plugin is designed to be tool-agnostic. The workflow definitions (SKILL.md files and commands) describe what needs to happen. The connector configuration (which specific ERP) is managed separately by IT. This separates workflow knowledge from infrastructure decisions."
---

# From Assistant to Agent: Cowork Finance Plugins

In Lessons 1 through 3, you worked inside a single Excel workbook. Claude read your formulas, traced dependencies, tested scenarios, and built model structures from plain-language descriptions -- all within the boundary of one spreadsheet. You close the workbook and the context disappears. You finish the analysis and move to PowerPoint, but that transition is yours to make. Claude cannot follow you.

This lesson crosses that boundary. When Claude operates through the Cowork platform, it is not embedded in Excel -- it is an agent that can act across applications, carry context from one tool to another, and execute multi-step workflows spanning the entire production process of a financial deliverable. The most significant change is scope: from analysing within one workbook to orchestrating across many tools and data sources.

:::caution Prerequisites: Cowork Access
This lesson requires the **Claude desktop app** with **Cowork** enabled. Cowork is available on **Pro, Max, Team, and Enterprise plans**.

1. **Install the Claude desktop app** if you have not already — download it from [claude.ai/download](https://claude.ai/download) for macOS or Windows.
2. **Switch to the Cowork tab.** Open the Claude desktop app and select the **Cowork** tab. If you do not see it, your plan may not include Cowork — check your subscription at [claude.ai/settings](https://claude.ai/settings).
3. **Install the finance plugin.** In the Cowork sidebar, click **Customize** → **Browse plugins** → **Personal**. Click the **+** button, select **Add marketplace from GitHub**, and enter `https://github.com/anthropics/knowledge-work-plugins`. Find the **Finance** plugin and click **Install**. The plugin bundles skills, slash commands, and connector definitions into a single package — the workflows are ready to use immediately.
4. **Enable connectors for enterprise data (optional).** Cowork can read and create Excel, PowerPoint, Word, and PDF files directly through built-in file skills — no connectors needed for these. From the **Customize** menu, select **Connectors** only if your workflows need to reach enterprise systems like your ERP or data warehouse. The plugin references connector categories like `~~erp` and `~~data warehouse` — once you enable the matching connector, those workflows pull data automatically. Some connectors require a separate subscription or API key from the provider. For enterprise deployments, your IT team can pre-provision connectors through the admin console.
5. **Connect a working folder.** Create a folder on your computer for this lesson's practice files (e.g., `finance-practice/`). In the Cowork chat, tell Claude to use this folder for reading and writing files. This gives Claude a place to store the sample financial data you will generate next.
   :::

## Verify the Install

After installing the plugin, verify it is active by typing `/reconciliation` in the Cowork chat. You should see the command auto-complete. If it does not appear, return to **Customize** → **Browse plugins** and confirm the Finance plugin shows as installed.

Once you see the command, type:

```
/reconciliation bank-USD 2025-03
```

Claude will ask you to provide or upload bank and GL data (unless you have already connected an ERP). This confirms the plugin is loaded and the command is available.

## Prepare Your Practice Data

Before running the exercises, you need financial data to work with. If your organisation has connected an ERP or data warehouse, the commands will pull live data automatically. If not, ask Claude to generate realistic sample data in your connected folder:

```
Create a practice data set for a month-end close exercise:

1. A bank statement spreadsheet for March 2025 with 45
   transactions -- deposits totalling $892,000 and withdrawals
   totalling $876,580
2. A general ledger trial balance extract for the same period
   with a $3,420 discrepancy against the bank statement
3. A budget-vs-actuals spreadsheet with Q1 revenue of $465K
   against a $500K budget, broken down by three product lines
   with unit volumes and average selling prices so variances
   can be decomposed into volume, price, and mix

Make the data realistic. Include timing differences, a bank
charge not yet posted to the GL, and one unidentified item.
Save all files in my connected folder.
```

Claude will create the spreadsheets in your folder. You will use them throughout the exercises below. This is a valuable pattern beyond this lesson: whenever you need to practise a financial workflow but lack live data, have Claude generate a realistic data set first.

## Skills vs Commands

Before running the finance plugin's workflows, you need to understand the two ways Claude receives domain knowledge in Cowork.

:::info Skills vs Commands
**Commands** are active. You invoke them explicitly by typing `/command-name`. Each triggers a specific, defined workflow. `/reconciliation` always runs the reconciliation workflow. It does not fire unless you call it.

**Skills** are passive. They are instructions encoded in SKILL.md files that fire automatically when Claude judges them relevant. A finance skill might say: "whenever a variance exceeds ten percent, present it as a table with volume, price, and mix components." Claude applies this without being told to.

The combination is what makes Cowork plugins behave like trained specialists. Commands give you explicit control over specific tasks. Skills ensure that everything Claude does in between meets the domain standards encoded in the SKILL.md files.
:::

## The Five Commands

The `knowledge-work-plugins/finance` plugin serves corporate FP&A teams, controllers, accounting managers, and internal audit teams. It provides five commands:

| Command                                        | What It Produces                                                                         |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `/reconciliation [account] [period]`           | GL-to-source reconciliation workpaper with categorised reconciling items                 |
| `/journal-entry [type] [period]`               | Journal entries with debits, credits, accounting rationale, and supporting documentation |
| `/variance-analysis [area] [period-vs-period]` | Variance decomposition into volume, price, and mix with narrative explanations           |
| `/income-statement [period-type] [period]`     | Management P&L with period-over-period comparison and material variance flags            |
| `/sox-testing [process] [period]`              | SOX 404 control testing workpapers with sample selection methodology                     |

Six passive skills complement these commands: journal-entry-prep, reconciliation, financial-statements, variance-analysis, close-management, and audit-support. The close-management skill is particularly important -- it activates whenever you are in a close context and applies the close checklist lens automatically, flagging whether items are resolved, whether they block downstream tasks, and who owns them.

:::info Category Placeholders
The plugin uses category placeholders (`~~erp`, `~~data warehouse`, `~~analytics`) instead of naming specific products. The SKILL.md files say "pull the trial balance from ~~erp" without caring whether the ERP is NetSuite or SAP. IT configures `.mcp.json` to map each placeholder to a specific system. This separates workflow knowledge (owned by the knowledge worker) from connector configuration (owned by IT) -- Chapter 15's division of responsibility made concrete.
:::

> **What Is a GL Reconciliation?**
>
> A GL (General Ledger) reconciliation compares the balance recorded in your accounting system to an independent source of truth -- a bank statement, a subledger, or a third-party confirmation -- and explains every difference. The goal is to confirm that every dollar in the GL is real, correctly classified, and properly supported.
>
> **Categories of reconciling items:** Timing differences (transaction in GL but not yet at the bank -- resolves next period). In-transit items (deposit recorded but not yet credited). Errors (wrong amount, wrong account, wrong period -- requires correcting entry). Items requiring investigation (no obvious explanation -- the most important category to resolve before closing).

> **What Is a Month-End Close?**
>
> The month-end close is the process by which a company's accounting team finalises the financial records for a completed calendar month -- reconciling all accounts, posting final journal entries, and producing the management accounts. For most organisations, it takes three to ten business days after month-end.
>
> **Key close tasks by day:** Day 1-2: subledger feeds, bank statement receipt, preliminary trial balance. Day 2-3: AR/AP reconciliation, payroll posting, fixed asset depreciation. Day 3-5: accruals, prepaids, intercompany eliminations. Day 5-7: income statement and balance sheet preparation, flux analysis. Day 7-10: management review, CFO sign-off, distribution.

## Worked Example: The Month-End Close

You are a controller starting the March close. The workflow spans seven business days, and each day maps to a specific command or skill in the finance plugin. Walk through the full cycle to see how the five commands and the close-management skill work together.

**Day 1: Close kickoff.** You tell Claude: _"Let's start the March close."_ You do not invoke a command — the close-management skill activates automatically. It produces a close checklist with task owners, deadlines, and dependencies. Throughout the close, this skill stays active in the background, flagging whether items are resolved, whether they block downstream tasks, and who owns them.

**Day 3: Bank reconciliation.** The USD operating account shows a $3,420 discrepancy between the GL and the bank statement. You type:

```
/reconciliation bank-USD 2025-03
```

Claude reads the bank statement and trial balance from your connected folder (or queries your ERP if connected), runs the reconciliation against the GL, and produces a structured workpaper. The $3,420 discrepancy breaks down as:

| Item                                        | Category                   | Amount | Action Required              |
| ------------------------------------------- | -------------------------- | ------ | ---------------------------- |
| 4 checks issued in March, clearing in April | Timing difference          | $2,180 | None -- resolves next period |
| 2 bank service charges not posted to GL     | Error requiring correction | $840   | Journal entry needed         |
| 1 unidentified deposit                      | Requires investigation     | $400   | Research before Day 5        |

The close-management skill flags the $400 unidentified item as a blocker that must be resolved before Day 5 close activities can proceed.

**Day 4: Correcting entries.** You fix the bank charges immediately:

```
/journal-entry bank-charges 2025-03
```

Claude generates the entry: debit Bank Charges Expense $840, credit Cash -- USD Operating $840, with transaction references and a note that this entry requires controller review before posting.

**Day 5: Variance analysis.** With accounts reconciled and entries posted, you shift to management reporting:

```
/variance-analysis revenue Q1 vs budget
```

Claude decomposes the revenue variance into volume, price, and mix drivers across your product lines. The CFO wants to know why revenue is $35K below budget — now you can explain: volume was on plan, but average selling price fell 7% due to promotional discounting in one product line.

**Day 6: Management P&L.**

```
/income-statement monthly 2025-03
```

Claude produces the management P&L with current month, prior month, YTD actual, YTD budget, and variance columns. Material variances are flagged. The variance narrative from Day 5 feeds directly into the P&L commentary.

**SOX season: Control testing.** After the books are closed, control testing follows:

```
/sox-testing revenue-recognition 2025-Q1
```

Claude generates a SOX 404 control testing workpaper: control description, testing methodology, sample selection criteria, test steps, and spaces for test results and exceptions. This is a framework — the qualified auditor selects the actual samples, performs the tests, and documents the conclusions.

Five commands, one skill, seven business days. Each command produces a deliverable that feeds the next phase. The close-management skill ties them together by tracking what is done, what is outstanding, and what blocks downstream work.

### Exercise 5: Reconciliation and Journal Entry

**Time:** 25 minutes. **Requires:** Cowork with the finance plugin installed.

1. Run `/reconciliation bank-USD 2025-03`. Claude will use the bank statement and trial balance you generated in the practice data step (or your live data if you have connected an ERP). Review the structured workpaper output.

2. Identify the reconciling items in the output. For each item, confirm the categorisation: is it a timing difference, an in-transit item, an error, or an item requiring investigation? If you disagree with any categorisation, tell Claude why and ask it to recategorise.

3. For each item categorised as an error requiring correction, run `/journal-entry` to generate the correcting entry. Review the debit/credit structure: does the entry balance? Is the accounting rationale correct?

4. Ask Claude: _"Which reconciling items must be resolved before Day 5 of the close, and which can wait?"_ The close-management skill should contextualise each item against the close timeline.

5. Test the passive skill: copy a journal entry from the practice data and paste it into Cowork WITHOUT using a command. The journal-entry-prep skill should activate automatically, applying review standards and flagging documentation gaps -- no `/journal-entry` command needed. This is the difference between commands (you invoke them) and skills (they fire on their own).

**The discipline:** Reconciliation finds problems; journal entries fix them. The two commands work as a pair -- reconciliation identifies discrepancies, and journal entry creates the correcting entries with proper documentation. Running them in sequence is the core close workflow.

### Exercise 6: Variance Analysis

**Time:** 20 minutes. **Requires:** Cowork with the finance plugin installed.

1. Run `/variance-analysis revenue Q1 vs budget`. Claude will use the budget-vs-actuals spreadsheet you generated in the practice data step (or your live data if connected). The practice data includes three product lines with unit volumes and average selling prices -- enough for a full decomposition.

2. Read the decomposition output. Revenue variances split into three drivers: volume (units sold vs planned), price (average selling price vs planned), and mix (product/segment distribution vs planned). Identify which driver accounts for the largest variance.

3. Run `/income-statement monthly 2025-03`. Review the management P&L: current month, prior month, YTD actual, YTD budget, and YTD variance columns. Check which line items are flagged as material variances.

4. Cross-reference: does the variance narrative from step 2 explain the revenue line in the income statement from step 3? Ask Claude: _"Summarise the revenue variance in two sentences suitable for the CFO deck."_

**The discipline:** Variance analysis and the income statement are complementary views of the same data. The variance analysis explains _why_ numbers moved; the income statement shows _what_ moved. Running both commands and cross-referencing the outputs is how controllers build the management narrative.

### Exercise 7: SOX Control Testing

**Time:** 15 minutes. **Requires:** Cowork with the finance plugin installed.

1. Run `/sox-testing revenue-recognition 2025-Q1`. Review the generated workpaper: does the control description match a revenue recognition process you recognise? Is the sample selection methodology appropriate for the population size?

2. Ask Claude: _"What are the three most common revenue recognition control failures identified in SOX testing? For each, what test procedure would detect it?"_

3. Run `/sox-testing procure-to-pay 2025-Q1`. Compare the two workpapers: what is structurally similar, and what differs between revenue cycle and expenditure cycle testing?

**The discipline:** SOX workpapers are frameworks, not conclusions. The plugin generates the testing structure — control description, sample methodology, and test steps. A qualified auditor selects the actual samples, executes the tests, and documents the results. The plugin saves hours of document setup; professional judgment on control effectiveness remains human.

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to explore the concepts from this lesson.

### Prompt 1: Plugin Architecture Exploration

```
I want to understand how a Cowork finance plugin is structured.

Given this directory layout:
- .claude-plugin/plugin.json (manifest)
- .mcp.json (connector configuration)
- commands/ (5 .md files: journal-entry, reconciliation,
  income-statement, variance-analysis, sox-testing)
- skills/ (6 directories, each with SKILL.md: journal-entry-prep,
  reconciliation, financial-statements, variance-analysis,
  close-management, audit-support)

Explain:
1. What happens when I type /reconciliation in Cowork?
2. What happens when I paste a trial balance WITHOUT typing
   any command?
3. Why are there both a reconciliation command AND a
   reconciliation skill?
```

**What you're learning:** The distinction between commands (explicit invocation) and skills (passive activation) is the core architectural concept of Cowork plugins. Understanding when each fires -- and why both exist for the same domain -- reveals how the plugin produces specialist behaviour rather than just providing tool access.

### Prompt 2: Close Workflow Design

```
I'm a controller at a mid-market company starting the March
month-end close. Walk me through which Cowork finance plugin
commands I would use on each day of a 7-day close:

Day 1: Initial status and blocker identification
Day 2-3: Account reconciliations
Day 4: Journal entries for reconciling items
Day 5: Variance analysis and management reporting
Day 6: Income statement and distribution prep
Day 7: SOX documentation (if applicable)

For each day:
- Which command(s) would I invoke?
- Which skill(s) would fire automatically?
- What output would I expect?
- What human judgment is still required?
```

**What you're learning:** A month-end close is not a single task but a multi-day workflow where each step builds on the previous one. By mapping commands and skills to specific close days, you develop the ability to orchestrate financial workflows through Cowork rather than treating each command as an isolated tool.

### Prompt 3: Reconciliation Deep Dive

```
I have a bank reconciliation with these reconciling items:

- 3 timing differences totalling $5,200
- 1 bank charge of $150 not posted to GL
- 1 unidentified item of $780

Help me:
1. Which items need journal entries and which resolve on
   their own?
2. Draft the journal entry for the bank charge. Include
   debit/credit, account names, and the accounting rationale.
3. What steps should I take to investigate the unidentified
   $780? What are the three most common explanations for
   unidentified reconciling items?
4. If this is Day 3 of a 7-day close, which of these items
   blocks Day 5 activities?
```

**What you're learning:** Reconciliation is not just identifying differences -- it is categorising them and knowing what action each category requires. Timing differences resolve themselves. Errors need correcting entries. Unidentified items need investigation. This prompt practises the judgment layer that sits on top of the `/reconciliation` command output.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 5: Financial Analysis — The Core Plugin →](./05-financial-analysis-the-core-plugin.md)
