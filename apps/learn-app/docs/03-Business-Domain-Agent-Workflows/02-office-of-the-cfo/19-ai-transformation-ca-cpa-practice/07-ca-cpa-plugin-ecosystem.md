---
slug: /Business-Domain-Agent-Workflows/ai-transformation-ca-cpa-practice/ca-cpa-plugin-ecosystem
sidebar_position: 7
title: "The CA/CPA Plugin Ecosystem"
description: "Deploy the two-layer Cowork plugin stack for CA/CPA practice — knowledge-work-plugins/finance for core accounting workflows and financial-services-plugins for investment-facing work — with hands-on installation, month-end close workflow, cross-app board pack orchestration, and global instructions for persistent practice context"
keywords:
  [
    "Cowork plugins",
    "knowledge-work-plugins",
    "financial-services-plugins",
    "CA/CPA automation",
    "journal entry automation",
    "reconciliation",
    "SOX testing",
    "variance analysis",
    "income statement",
    "month-end close",
    "plugin ecosystem",
    "Cowork finance",
    "cross-app workflow",
    "board pack automation",
    "Cowork global instructions",
  ]
chapter: 19
lesson: 7
duration_minutes: 65

# HIDDEN SKILLS METADATA
skills:
  - name: "Deploy Domain-Specific Plugin Stacks"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Literacy"
    measurable_at_this_level: "Student can describe Cowork's four core mechanisms, explain the two-layer plugin architecture for CA/CPA practice, and install both plugin layers with correct commands"

  - name: "Map Plugin Commands to Practice Domains"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can identify which plugin command serves a given CA/CPA workflow, explain what each command produces, and select the correct command for reconciliation, journal entry, income statement, variance analysis, and SOX testing tasks"

  - name: "Execute Multi-Step Plugin Workflows"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can run a complete month-end close workflow using plugin commands in sequence, review the output for exceptions, and identify which steps require professional judgment versus automated execution"

  - name: "Configure Cross-App Orchestration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Literacy"
    measurable_at_this_level: "Student can describe how Cowork moves data between Excel and PowerPoint in a single workflow, explain the requirements for cross-app orchestration, and set up a workflow that converts financial analysis into board-ready presentations"

  - name: "Set Global Instructions for Practice Context"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can write effective Cowork global instructions that establish jurisdiction, reporting currency, financial year, and practice-specific context — ensuring every workflow reflects their professional environment without repeating the context each session"

learning_objectives:
  - objective: "Explain Cowork's four core mechanisms and install both layers of the CA/CPA plugin stack"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can list the four mechanisms (file access, sub-agents, scheduled tasks, plugins), explain how each changes CA/CPA practice, and write the correct installation commands for both plugin layers"

  - objective: "Map the knowledge-work-plugins/finance commands to the five CA/CPA practice domains and execute individual commands for accounting workflows"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a CA/CPA task, student can identify the correct plugin command, explain what output it produces, and describe what professional review the output requires"

  - objective: "Execute a full month-end close workflow using sequenced plugin commands and identify the boundary between automated execution and professional judgment"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student completes the month-end close exercise, produces reconciliations, journal entries, income statement, and variance analysis, and documents which outputs they accepted versus which they corrected"

  - objective: "Set up a cross-app Cowork workflow that moves financial data from Excel analysis to PowerPoint board presentation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can describe the three-step accounts-to-board-pack workflow, explain the platform requirements, and identify the time saving compared to manual chart export and slide formatting"

  - objective: "Write effective Cowork global instructions for CA/CPA practice context and explain how global instructions change agent behaviour"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can write a global instruction that specifies jurisdiction, currency, financial year, reporting standards, and variance analysis comparisons — and explain why setting this once is more effective than repeating it per session"

cognitive_load:
  new_concepts: 10
  concepts_list:
    - "Cowork's four core mechanisms (file access, sub-agents, scheduled tasks, plugins)"
    - "Two-layer plugin architecture (knowledge-work vs financial-services)"
    - "Five accounting commands (/journal-entry, /reconciliation, /income-statement, /variance-analysis, /sox-testing)"
    - "SOX Section 404 compliance and control testing"
    - "Financial-services-plugins: financial-analysis, equity-research, private-equity"
    - "Plugin installation commands and marketplace workflow"
    - "Month-end close as sequenced plugin workflow"
    - "Cross-app orchestration (Excel to PowerPoint in a single session)"
    - "Cowork global instructions for persistent practice context"
    - "Time compression pattern (execution hours to judgment minutes)"
  assessment: "10 concepts at B1 level — at the upper limit of the 7-10 cognitive range. The concepts are structured in three progressive layers (plugin architecture → workflow orchestration → practice configuration) which reduces effective load through progressive disclosure. The cross-app and global instructions sections build directly on the plugin commands already learned, so effective new cognitive load for those sections is low."

differentiation:
  extension_for_advanced: "Install the financial-services-plugins suite and run /dcf or /comps on a listed company relevant to your practice. Compare the output to a manually built model and document the differences. Then design a weekly scheduled Cowork workflow specifying which commands run automatically and which outputs require review."
  remedial_for_struggling: "Focus on the five core accounting commands in Layer 1. For each command, write one sentence describing what it does and which CA/CPA practice domain it serves. Then write a simple global instruction with just your jurisdiction, currency, and reporting standards."

teaching_guide:
  lesson_type: "core"
  session_group: 3
  session_title: "Plugin Ecosystem and Workflows"
  key_points:
    - "Cowork is not another chatbot — it operates through four mechanisms (file access, sub-agents, scheduled tasks, plugins) that enable autonomous multi-step workflows"
    - "Layer 1 (knowledge-work-plugins/finance) covers core accounting: journal entries, reconciliations, income statements, variance analysis, and SOX testing"
    - "Layer 2 (financial-services-plugins) extends into investment-facing work: financial analysis, equity research, private equity, and wealth management"
    - "The /sox-testing command operationalises Section 404 compliance — one of the most document-intensive requirements in CA/CPA practice"
    - "Cross-app orchestration eliminates the manual handoff between Excel analysis and PowerPoint presentation — the most error-prone and time-consuming step in board pack preparation"
    - "Global instructions establish persistent context so every Cowork session reflects your jurisdiction, currency, reporting standards, and practice conventions without repeating them"
  misconceptions:
    - "Students may think Cowork plugins replace professional judgment — they automate execution while judgment remains with the practitioner"
    - "Students may assume both plugin layers are needed for every CA/CPA role — Layer 1 covers most accounting practice, Layer 2 is for financial services specialisations"
    - "Students may think /sox-testing produces a complete audit — it generates the testing framework and documentation, not the assessment of material weakness"
    - "Students may assume cross-app workflows require coding — the orchestration is natural language, not programmatic"
    - "Students may set overly narrow global instructions — effective instructions establish the practice context broadly enough to apply across different workflows"
  discussion_prompts:
    - "Which of the five Layer 1 commands would save the most time in your current practice? What would you still need to review manually?"
    - "Where is the line between what an agent can execute and what requires a qualified practitioner's sign-off in a month-end close?"
    - "What information would you include in global instructions for your specific practice? What would you leave out?"
  teaching_tips:
    - "Walk through the Layer 1 commands with a real workflow in mind — the month-end close sequence makes the commands tangible"
    - "Use the SOX concept box to anchor the /sox-testing command — students outside the US need to understand why Section 404 compliance is so document-intensive"
    - "Have students draft their own global instructions during the lesson — the act of writing forces them to articulate their practice context explicitly"
  assessment_checks:
    - question: "What are Cowork's four core mechanisms that distinguish it from a standard Claude conversation?"
      expected_response: "Direct local file access, sub-agent coordination, scheduled tasks, and the plugin ecosystem."
    - question: "Which plugin command would you use to generate a structured control testing programme for SOX compliance?"
      expected_response: "The /sox-testing command from the knowledge-work-plugins/finance plugin. It generates the testing objective, evidence to gather, sample selection rationale, and documentation of results."
    - question: "What is the difference between Layer 1 and Layer 2 of the CA/CPA plugin stack?"
      expected_response: "Layer 1 (knowledge-work-plugins/finance) covers core accounting workflows — journal entries, reconciliations, financial statements, variance analysis, and SOX testing. Layer 2 (financial-services-plugins) extends into investment-facing work — financial analysis, equity research, private equity, and wealth management."
    - question: "Why set Cowork global instructions rather than specifying context in each session?"
      expected_response: "Global instructions persist across all sessions, ensuring every workflow reflects your jurisdiction, currency, reporting standards, and practice conventions without repeating them. This prevents inconsistency and saves time."
---

# The CA/CPA Plugin Ecosystem

> _"The best tools disappear into the workflow. You stop thinking about the tool and start thinking about the work."_

In Lessons 2 through 6, you mapped each CA/CPA practice domain against the Gen-AI and Agentic AI spectrum — identifying where automation replaces routine work and where professional judgment becomes more valuable. Now you will deploy the tools that make those mappings operational. This lesson introduces the Cowork plugin ecosystem for CA/CPA practice: two layers of domain-specific capability that turn the theoretical AI impact analysis into working workflows.

The distinction matters. Knowing that reconciliation can be automated is useful. Having a command that runs a bank reconciliation from your ERP export, flags exceptions, and saves the working paper to your client file — while you work on something else — is transformative.

## How Cowork Changes CA/CPA Practice

Cowork is not simply another AI chat interface for CAs and CPAs. In a standard Claude conversation, you ask a question, review the answer, and decide the next step. In Cowork, you set a goal and Claude plans and executes a multi-step workflow — reading files, creating documents, running computations, cross-referencing data sources, and delivering finished work.

Cowork operates through four core mechanisms that distinguish it from standard conversations.

| Mechanism                    | What It Does                                                                                       | CA/CPA Example                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Direct local file access** | Read from and write to any folder you grant access to                                              | Client documents, working papers, financial data files, and draft deliverables — all accessible without manual uploading  |
| **Sub-agent coordination**   | Break complex tasks into parallel subtasks                                                         | A month-end close with reconciliation checking, journal entry preparation, and disclosure drafting running simultaneously |
| **Scheduled tasks**          | Execute tasks automatically on a schedule                                                          | The reconciliation check that runs every morning, the compliance deadline monitor that runs weekly                        |
| **Plugin ecosystem**         | Bundle domain knowledge, data connectors, slash commands, and sub-agents into installable packages | The finance plugins give Cowork deep CA/CPA domain knowledge that generic AI tools lack                                   |

:::caution Prerequisites: Cowork Access
This lesson requires the **Claude desktop app** with **Cowork** enabled. Cowork is available on **Pro, Max, Team, and Enterprise plans**.

1. **Install the Claude desktop app** if you have not already — download it from [claude.ai/download](https://claude.ai/download) for macOS or Windows.
2. **Switch to the Cowork tab.** Open the Claude desktop app and select the **Cowork** tab. If you do not see it, your plan may not include Cowork — check your subscription at [claude.ai/settings](https://claude.ai/settings).
3. **Install the plugins** using the instructions in the Layer 1 and Layer 2 sections below.
   :::

The practical difference is significant. A standard conversation can help draft a tax research memo. Cowork can take a folder of client documents, extract the relevant financial data, conduct the research, cross-reference the applicable provisions, produce the memo, and save it to the client file — as a single orchestrated workflow.

## Layer 1: knowledge-work-plugins/finance

The knowledge-work finance plugin is designed for corporate finance and accounting teams. Its commands directly address the core workflows of Domains 1 and 4 from this chapter — Accounting & Financial Reporting and Management Accounting.

**Installation:** In the Cowork sidebar, click **Customize** → **Browse plugins**, find `knowledge-work-plugins/finance`, and click **Install**. The plugin bundles all five commands below plus their supporting skills — no separate configuration needed.

:::warning Plugin Availability
Plugin commands shown here reflect the current Cowork ecosystem. Check the plugin browser for the latest version before installing. Command names, syntax, and available features may change as the ecosystem evolves.
:::

**Key commands for CA/CPA practice:**

| Command                        | What It Produces                                      | Domain                              |
| ------------------------------ | ----------------------------------------------------- | ----------------------------------- |
| `/journal-entry [description]` | Journal entries from transaction descriptions         | Domain 1: Accounting                |
| `/reconciliation [account]`    | Automated reconciliation analysis for a named account | Domain 1: Accounting                |
| `/income-statement [period]`   | Draft income statement from trial balance data        | Domain 1: Accounting                |
| `/variance-analysis [period]`  | Variance analysis with bridge decomposition           | Domain 4: Management Accounting     |
| `/sox-testing [control]`       | SOX control testing documentation                     | Domain 3: Assurance / Domain 5: GRC |

The `/journal-entry` command takes a plain-language transaction description — "Record monthly depreciation for manufacturing equipment, PKR 450,000 straight-line over 10 years" — and produces the debit and credit entries with account codes, amounts, and narrative. You review the entries, confirm the account mapping matches your chart of accounts, and post.

The `/reconciliation` command takes an account name and the available data (ERP export, bank statement, subsidiary ledger) and produces a structured reconciliation with matching items, unmatched items, timing differences, and exceptions flagged for review. The output is a working paper, not a summary — it shows the work.

The `/income-statement` command reads trial balance data and produces a draft income statement formatted to your reporting requirements. For a Pakistani CA working under IFRS, the output follows IAS 1 presentation requirements. The command handles the mechanical formatting; you review the classification decisions and add any notes disclosure.

The `/variance-analysis` command compares actual results against budget and prior period, then decomposes the variances into a bridge analysis. For month-end management reporting, this is the command that answers "what changed and why" — the analysis your board or management committee needs.

:::info What Is SOX (Section 404)?
**SOX (the Sarbanes-Oxley Act)** is a US federal law enacted in 2002 following major accounting scandals (Enron, WorldCom). It requires management of public companies to assess and report on the effectiveness of internal controls over financial reporting, and requires external auditors to attest to that assessment.

**Section 404** is the most demanding SOX requirement: management must document all key controls, test whether they are operating effectively, identify any material weaknesses, and disclose the results. External auditors must independently test the same controls.

**Why SOX matters for AI:** Section 404 compliance is one of the most document-intensive and time-consuming requirements in CA/CPA practice. The `/sox-testing` command automates the documentation and testing framework — generating the testing objective, evidence to be gathered, sample selection rationale, and documentation of results. Human professional judgment remains required for assessing whether a control failure constitutes a material weakness. The mechanical execution of the testing programme is automatable; the professional assessment is not.
:::

:::tip Global Perspective
**Pakistan**: The Securities and Exchange Commission of Pakistan (SECP) requires listed companies to maintain internal controls under the Companies Act 2017 and the Code of Corporate Governance. While not identical to SOX, the control documentation requirements follow a similar framework — the `/sox-testing` command's output structure applies with jurisdiction-specific adjustments.

**IFRS jurisdictions**: Many countries adopting IFRS also require internal control assessments under local corporate governance codes. The testing methodology is transferable.

**US GAAP / SEC**: SOX Section 404 applies directly to all SEC-registered companies. The `/sox-testing` command is designed for this requirement.

**UK**: The UK Corporate Governance Code requires boards to assess effectiveness of internal controls. The FRC's guidance follows a similar test-and-document approach.
:::

## Layer 2: financial-services-plugins

The financial-services-plugins suite extends Cowork's CA/CPA capabilities into investment-facing professional work. If you work in financial services environments — bank audit, investment fund administration, insurance accounting, or capital markets advisory — these plugins are directly relevant.

**Installation:** From the same **Customize** → **Browse plugins** menu, find `financial-services-plugins` and install the **financial-analysis** core plugin. The add-on plugins (equity-research, private-equity, wealth-management) can be installed individually as needed.

The **financial-analysis core plugin** provides the `/dcf`, `/comps`, and `/lbo` commands. These are most relevant to corporate finance and restructuring work in Domain 2 (Tax and Non-Assurance Advisory). A CA/CPA advising on an M&A transaction or restructuring has direct access to financial modelling tools that previously required specialist software.

The **equity-research plugin** provides earnings analysis and sector research capabilities relevant to CA/CPA professionals advising listed companies or working in fund accounting contexts.

The **private-equity plugin** provides deal sourcing, IC memo, and portfolio monitoring capabilities directly relevant to due diligence and corporate finance work in Domain 2.

You explored the full financial-services-plugins architecture in Chapter 17, Lessons 5 and 6. The key point for CA/CPA practice is that these plugins extend your capabilities beyond core accounting into the advisory and financial services work that Domain 2 (Tax and Non-Assurance Advisory) covers.

## Mapping Plugins to Practice Domains

With both layers installed, your plugin stack maps across all five practice domains.

| Domain                        | Layer 1 Commands                                         | Layer 2 Capabilities                          | Primary Use                               |
| ----------------------------- | -------------------------------------------------------- | --------------------------------------------- | ----------------------------------------- |
| **1. Accounting & Reporting** | `/journal-entry`, `/reconciliation`, `/income-statement` | —                                             | Core accounting workflows                 |
| **2. Tax & Advisory**         | —                                                        | `/dcf`, `/comps`, `/lbo` (financial-analysis) | Corporate finance, M&A advisory           |
| **3. Assurance**              | `/sox-testing`                                           | —                                             | Internal controls, SOX compliance         |
| **4. Management Accounting**  | `/variance-analysis`, `/income-statement`                | —                                             | FP&A, management reporting                |
| **5. GRC Advisory**           | `/sox-testing`                                           | —                                             | Control testing, compliance documentation |

This mapping shows why both layers matter. Layer 1 covers the accounting and management accounting core — Domains 1, 3, 4, and 5. Layer 2 extends into advisory and financial services — Domain 2. A CA/CPA in general practice may only need Layer 1. A CA/CPA in a financial services firm needs both.

## From Commands to Workflows

In isolation, each plugin command produces a single output — a journal entry, a reconciliation working paper, an income statement. The transformation happens when these commands work together as orchestrated workflows. A month-end close is not five separate commands run one after another; it is a sequenced workflow where each step feeds the next and the CA/CPA intervenes only at the judgment points.

The time compression is substantial. A traditional month-end close requires four junior staff members working over three days. With Cowork orchestrating the plugin commands — reconciliations running as scheduled tasks at 7:00 AM, journal entries and draft accounts following at 9:30 AM, variance analysis completing by 11:00 AM — the same close completes in one day with one CA/CPA.

| Before Cowork                                               | After Cowork                                               |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| 3 hours running reconciliations manually                    | 30 minutes reviewing flagged exceptions                    |
| 2 hours preparing journal entries and trial balance updates | 20 minutes reviewing automated journals                    |
| 1.5 hours formatting management accounts                    | 15 minutes reviewing draft income statement                |
| 1 hour building variance analysis bridge                    | 10 minutes reviewing bridge, 30 minutes writing commentary |
| **7.5 hours of execution**                                  | **1 hour 45 minutes — mostly judgment and commentary**     |

The hours saved are not the point. The shift in how those hours are spent is the point. Before: executing processes. After: reviewing outputs and applying judgment where it matters.

### Practice Exercise 6: Full Month-End Close Workflow (45 min)

**What you'll build:** A complete month-end close using sequenced plugin commands — from automated reconciliations through management accounts to variance analysis.

**Requirements:** Cowork (any Claude plan). [**Download the exercise data zip**](https://github.com/panaversity/ca-cpa-practice-agents/releases/latest/download/ca-cpa-exercise-data.zip) and add the full `exercises/` folder to your Cowork project. The zip includes the Crescent Textiles entity profile, June 2025 trial balance, May 2025 prior-month trial balance, bank statement with reconciling items, budget with variance drivers, and AR aging schedule — everything needed for a complete month-end close.

1. **Set context.** Create a Cowork project folder with the exercise data. Set a global instruction:

   _"I am a management accountant at Crescent Textiles (Pvt) Ltd, a Pakistani textile manufacturer. Our financial year runs July to June. We report monthly to the board. Reporting currency is PKR (thousands). Variance analysis should compare actual vs. budget and actual vs. prior month. The exercise data folder contains our June 2025 year-end trial balance, prior month trial balance, bank statement, budget, AR aging, and entity profile."_

2. **Reconcile cash.** Run `/reconciliation bank`. The plugin reads the bank statement and trial balance from your project folder and produces a structured reconciliation workpaper. Review the output — there are five reconciling items (three outstanding cheques, one deposit in transit, and bank charges not yet recorded in the GL). Confirm that the adjusted bank balance and adjusted GL balance agree.

3. **Reconcile receivables.** Run `/reconciliation debtors`. The plugin matches the AR aging schedule against the trade receivables balance in the trial balance and produces an ECL assessment. Review the output — does the allowance of PKR 1,200 thousand adequately cover the credit risk? The 91+ days bucket (Chase Up) and the quality dispute (Al-Fatah) are the items requiring your judgment.

4. **Produce management accounts with variance analysis.** Run `/income-statement monthly` and `/variance-analysis monthly`. The plugins use the budget file and May trial balance to produce a comparative income statement and variance bridge. Review the variance bridge. Ask Cowork: _"Which of these variances are within management control, and which are driven by external factors?"_ The budget file includes root causes for the five largest variances — compare Cowork's analysis against those.

5. **Create board reporting.** Ask Cowork to produce a two-slide board update in PowerPoint: the P&L versus budget on slide 1, and the three key variance drivers with commentary on slide 2.

6. **Identify the judgment boundary.** Review the complete output: reconciliations, management accounts, variance analysis, and board slides. Note which elements required your professional judgment (the ECL assessment, the variance root-cause commentary, the board narrative) and which were fully automated by plugin commands (the reconciliation arithmetic, the statement formatting, the variance calculations). Write a brief specification for a monthly scheduled task that would automate steps 2–4 at each month-end.

**Check your work:** You should have five outputs — bank reconciliation, AR reconciliation, income statement with variance analysis, board presentation, and an automation specification. The bank reconciliation should balance to zero difference. The variance analysis should identify export revenue shortfall (PKR 20M, -5.9%) and raw material cost overrun (PKR 9M, -4.8%) as the two largest drivers. The key learning is the judgment boundary: the plugin commands handled the mechanical execution; everything you reviewed and adjusted is where you added professional value.

:::tip Global Perspective
**Pakistan (PKR):** The exercise uses PKR as the reporting currency. Management reporting under SECP's Code of Corporate Governance requires monthly board reporting for listed companies.

**IFRS jurisdictions:** Replace PKR with your local currency. The variance analysis structure (actual vs budget, actual vs prior period) is universal.

**US GAAP:** The same workflow applies. Replace the income statement format with a US GAAP-compliant P&L structure if your entity reports under US GAAP.

**UK (GBP):** FRS 102 reporting follows the same month-end cycle. Adjust for UK-specific presentation requirements under FRS 102 Section 5.
:::

## Cross-App Workflow: Accounts to Board Pack

Cowork's cross-application capability — moving analysis from Excel through to PowerPoint — directly applies to the CA/CPA workflow of converting financial statements into board-ready presentations.

**The workflow:**

1. Run the month-end close and produce the management P&L in Excel via the Cowork finance plugin

2. Ask Cowork:

   _"Take the management P&L from the Excel file and create a four-slide board update presentation in PowerPoint: (1) headline P&L versus budget, (2) the three key variance drivers with commentary, (3) the rolling 12-month EBITDA trend, (4) the cash flow bridge."_

3. Claude reads the Excel output, creates the PowerPoint using Claude in PowerPoint, and saves both files to the output folder

What previously required the finance team to build the Excel, export the charts, and manually format the PowerPoint — an hour of skilled work — becomes a five-minute Cowork orchestration.

:::warning Platform Requirements
Cross-app workflows between Excel and PowerPoint are available as a research preview on both macOS and Windows for paid plans (Pro, Max, Team, and Enterprise). You need both Claude in Excel and Claude in PowerPoint installed.
:::

## Setting Global Instructions

Every Cowork session starts fresh — it does not remember your jurisdiction, reporting currency, or practice conventions from previous sessions unless you tell it to. Global instructions solve this.

A well-written global instruction establishes the persistent context for all your CA/CPA workflows:

```
I am a chartered accountant at a mid-size manufacturing company
in Pakistan. My key practice details:

- Jurisdiction: Pakistan (FBR for tax, SECP for corporate governance)
- Reporting standards: IFRS as adopted in Pakistan
- Reporting currency: PKR
- Financial year: January to December
- Reporting cycle: Monthly to the board, quarterly to regulators
- Variance analysis: Compare actual vs. budget and actual vs. prior month
- Materiality threshold: 2% of revenue for management reporting
- Key stakeholders: CFO (weekly), Board (monthly), SECP (quarterly)

When producing financial outputs, follow IFRS presentation
requirements (IAS 1). When referencing tax provisions, use the
Income Tax Ordinance 2001 and current FBR circulars. Flag any
item above the materiality threshold for my explicit review.
```

This instruction persists across all sessions. Every reconciliation, every income statement, every variance analysis reflects your jurisdiction and practice conventions without you specifying them each time.

**What makes a good global instruction:**

| Include                            | Why                                                        |
| ---------------------------------- | ---------------------------------------------------------- |
| Jurisdiction and regulatory bodies | Ensures correct legal framework references                 |
| Reporting standards                | Controls format and presentation requirements              |
| Reporting currency                 | Prevents currency confusion in multi-currency environments |
| Financial year and reporting cycle | Aligns period references correctly                         |
| Materiality threshold              | Sets the bar for what requires your explicit review        |
| Variance analysis comparisons      | Standardises analytical framework                          |

:::tip Global Perspective
**Pakistan:** FBR (Federal Board of Revenue) for tax, SECP (Securities and Exchange Commission of Pakistan) for corporate governance, SBP (State Bank of Pakistan) for banking regulation.

**US:** IRS for tax, SEC for corporate governance. Global instructions would reference US GAAP (ASC) instead of IFRS, and USD as reporting currency.

**UK:** HMRC for tax, FRC (Financial Reporting Council) for corporate governance. Reference FRS 102 or IFRS as adopted in the UK, GBP as reporting currency.

**IFRS jurisdictions generally:** Replace Pakistan-specific bodies with your local equivalents. The instruction structure remains the same — jurisdiction, standards, currency, cycle, materiality.
:::

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to explore the plugin ecosystem.

### Prompt 1: Plugin Command Selection

```
I am a CA/CPA working in [YOUR PRACTICE AREA — e.g., audit,
tax advisory, management accounting, financial services].

My most time-consuming monthly task is [DESCRIBE THE TASK —
e.g., preparing bank reconciliations, drafting management
accounts, compiling SOX control testing documentation].

Based on the Cowork plugin commands available:
1. Which specific command handles this task?
2. What input does it need from me?
3. What does the output look like?
4. What professional review does the output require before
   I can sign off on it?
```

**What you are learning:** Mapping your actual practice to plugin commands requires understanding three things: which command handles the task, what input it needs, and what professional review the output requires. The third point is critical — the plugin produces a draft, not a signed-off deliverable. Knowing where your judgment is required is what distinguishes a CA/CPA from an operator.

### Prompt 2: SOX Testing Workflow

```
I need to document and test the following internal control
for SOX Section 404 compliance:

Control: [DESCRIBE THE CONTROL — e.g., "Three-way match
for purchase orders above PKR 500,000 requires procurement
manager approval before payment processing"]

Generate:
1. The testing objective for this control
2. The evidence I need to gather
3. The sample selection rationale (how many transactions,
   what period, what selection method)
4. The documentation template for recording test results
5. The criteria for classifying a finding as a deficiency
   versus a material weakness
```

**What you are learning:** SOX testing follows a structured methodology. The plugin automates the framework — the documentation structure, the sampling rationale, the results template. Your professional judgment is needed for two things: (1) assessing whether the evidence actually demonstrates the control is operating effectively, and (2) classifying any exceptions as deficiencies or material weaknesses. This distinction between mechanical framework and professional assessment is the core of AI-augmented assurance practice.

### Prompt 3: Global Instructions Design

```
I am a [QUALIFICATION — e.g., CA, CPA, ACCA] working in
[JURISDICTION]. My practice focuses on [SERVICE LINES].

Draft a Cowork global instruction for my practice that includes:
- Jurisdiction and regulatory bodies
- Reporting standards and currency
- Financial year and reporting cycle
- Materiality thresholds
- Variance analysis framework
- Any jurisdiction-specific conventions I should encode

Explain why each element matters for consistent agent output.
```

**What you are learning:** Writing global instructions forces you to articulate your practice context explicitly — the jurisdiction, standards, conventions, and thresholds that experienced practitioners carry as tacit knowledge. Making this knowledge explicit is the same skill you will use in Lesson 8 when building domain extensions. The global instruction is the lightweight version; the Cowork skill is the full encoding.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 8: Building Jurisdiction and Entity Extensions →](./08-jurisdiction-entity-extensions.md)
