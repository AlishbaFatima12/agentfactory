---
slug: /Business-Domain-Agent-Workflows/finance-domain-agents/domain-plugins-from-deals-to-portfolios
sidebar_position: 6
title: "Domain Plugins: From Deals to Portfolios"
description: "Explore the four add-on plugins and two partner plugins built on top of the financial-services-plugins core -- investment banking, equity research, private equity, and wealth management -- with hands-on exercises and finance concept foundations for each domain"
keywords:
  [
    "financial-services-plugins",
    "investment-banking",
    "equity-research",
    "private-equity",
    "wealth-management",
    "LSEG",
    "S&P Global",
    "teaser",
    "CIM",
    "IC memo",
    "due diligence",
    "earnings analysis",
    "data connectors",
    "Cowork plugins",
    "tax-loss harvesting",
    "plugin customisation",
  ]
chapter: 17
lesson: 6
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Map Finance Workflows to Plugin Commands"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can identify which add-on plugin handles a given finance task, select the correct command, and describe the expected output for investment banking, equity research, private equity, and wealth management workflows"

  - name: "Evaluate Plugin Customisation Strategies"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can identify which of the five customisation dimensions applies to a specific firm requirement and explain the trade-offs between using default plugin behaviour and building firm-specific extensions"

  - name: "Apply Professional Finance Concepts in Plugin Context"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Data Literacy"
    measurable_at_this_level: "Student can define M&A teaser, IC memo, due diligence, earnings consensus, and initiating coverage in professional context, and explain how each concept maps to a plugin command or workflow"

learning_objectives:
  - objective: "Map professional finance workflows across four domains to the correct add-on plugin and its commands, explaining the data flow from data connectors to deliverable"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a finance task description (e.g., 'prepare a buyer list for a sell-side mandate'), student can identify the plugin (investment-banking), the command (/buyer-list), and the data providers that supply the data (PitchBook)"

  - objective: "Identify which customisation dimension applies to a firm-specific requirement and describe the file-level change needed"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given a firm requirement (e.g., 'we use Bloomberg instead of FactSet'), student can name the customisation dimension (swap connectors), identify the file (.mcp.json), and explain that no workflow definitions change"

  - objective: "Explain key finance concepts -- M&A teaser, IC memo, due diligence quality of earnings, earnings consensus -- and connect each to the plugin command that automates its production"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can define each concept in one sentence and name the plugin command that produces the corresponding deliverable"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Four add-on plugins layered on the core (investment-banking, equity-research, private-equity, wealth-management)"
    - "M&A teaser as anonymous buyer outreach document"
    - "IC memo as formal investment recommendation with base/bull/bear scenarios"
    - "Due diligence and quality of earnings as pre-transaction investigation"
    - "Earnings consensus and the beat/miss framework"
    - "Initiating coverage as the analyst's franchise-building document"
    - "Five customisation dimensions for firm-specific adaptation"
  assessment: "7 concepts at B1 level -- at the upper end of the 7-10 cognitive limit for this tier. The concepts are grouped by plugin domain (IB, ER, PE, WM), which creates natural clusters that reduce effective working memory load."

differentiation:
  extension_for_advanced: "Choose one plugin and one command. Fork the plugin repository, modify the skill file to add a section your firm requires (e.g., ESG risk section in the IC memo), and test the modified workflow. Document what you changed, why, and how it affects the output."
  remedial_for_struggling: "Focus on two plugins only: investment-banking and private-equity. For each, learn one command (/teaser and /ic-memo). Write one sentence describing what each command produces and who the audience is. If you can do that, you have the core pattern."

teaching_guide:
  lesson_type: "core"
  session_group: 3
  session_title: "Domain Plugin Workflows"
  key_points:
    - "All add-on plugins require the core plugin (financial-analysis) to be installed first -- they inherit its data connectors and financial modelling commands"
    - "Each add-on targets a specific finance function with commands and skills tailored to that domain's professional conventions"
    - "The plugins produce structured drafts, not finished deliverables -- professional judgment on thesis, risk, and recommendation remains human work"
    - "Partner plugins (LSEG, S&P Global) bring proprietary data that extends capability beyond what public sources provide"
    - "Customisation happens across five dimensions: connectors, firm context, templates, workflows, and new plugins"
  misconceptions:
    - "Students may think each plugin has its own data connections -- all data connectors are centralised in the core plugin and shared automatically"
    - "Students may assume the IC memo plugin writes the investment recommendation -- it structures the document and populates data, but the thesis and recommendation require professional judgment"
    - "Students may treat plugin outputs as final -- every deliverable requires review by a qualified professional before client or committee use"
  discussion_prompts:
    - "Which of the four add-on plugins would save the most time in your current role? What firm-specific customisations would you need?"
    - "The IC memo plugin creates the framework but not the conclusion. Where in each plugin's workflow is professional judgment most critical?"
  teaching_tips:
    - "Walk through the investment banking plugin first -- the deal lifecycle (teaser to buyer list to CIM to merger model) is the most intuitive workflow progression"
    - "Use the concept boxes as just-in-time teaching -- introduce each finance concept immediately before the plugin command that automates it"
    - "Emphasise the non-negotiable boundaries section -- students must understand that Claude produces analytical frameworks, not advice"
  assessment_checks:
    - question: "Why must the core plugin be installed before any add-on?"
      expected_response: "Because all 11 data connectors are centralised in the core plugin. Add-ons inherit these connections. Without the core, add-ons have no data sources."
    - question: "What is the difference between a teaser and a CIM in an M&A process?"
      expected_response: "A teaser is anonymous -- it describes the business without naming it to generate initial buyer interest. A CIM is the full confidential document shared after the buyer signs an NDA. The teaser comes first; the CIM comes after interest is confirmed."
    - question: "Name the five dimensions for customising the plugins for your firm."
      expected_response: "Swap connectors (point at your data providers), add firm context (terminology and processes), bring your templates (branded PowerPoint), adjust workflows (match your team's process), and build new plugins (extend the collection)."
---

# Domain Plugins: From Deals to Portfolios

In Lesson 5, you explored the core plugin -- the foundation of the `anthropics/financial-services-plugins` suite. That core provides the shared connectors, the financial modelling commands (`/comps`, `/dcf`, `/lbo`), and the architecture that every other plugin in the suite depends on. Now you will see what gets built on top of that foundation: four function-specific add-on plugins for investment banking, equity research, private equity, and wealth management, plus two partner-built plugins from LSEG and S&P Global that bring proprietary data into the ecosystem.

Each add-on plugin targets a specific finance function with commands and skills designed around that domain's professional conventions. The investment banking plugin knows how to draft a teaser, build a buyer list, and track a deal process. The equity research plugin knows how to produce a post-earnings note, maintain a thesis, and format an initiating coverage report. These are not general-purpose tools -- they encode the workflows, terminology, and document structures that professionals in each function expect to see.

Every add-on requires the core plugin to be installed first. The add-ons inherit the core's connectors and financial modelling commands. Install order matters: core first, then whichever add-ons match your function.

## Install the Domain Plugins

If you have not already installed the core plugin from Lesson 5, do that first (including adding the GitHub marketplace). Then install whichever add-ons match your function:

1. In the Cowork sidebar, click **Customize** → **Browse plugins** → **Personal**.
2. The `financial-services-plugins` marketplace you added in Lesson 5 shows the available add-ons. Install **Investment Banking**, **Equity Research**, **Private Equity**, or **Wealth Management** -- whichever matches your function.

You do not need all four. Install the one that matches your domain, or install all four to explore the exercises below.

### Which Plugin Do I Need?

| If your work involves...                                    | Install this plugin | Key commands                                              |
| ----------------------------------------------------------- | ------------------- | --------------------------------------------------------- |
| M&A advisory, deal processes, pitch books                   | investment-banking  | `/teaser`, `/cim`, `/buyer-list`, `/one-pager`            |
| Equity coverage, earnings analysis, research notes          | equity-research     | `/earnings`, `/initiate`, `/thesis`, `/morning-note`      |
| Deal sourcing, diligence, IC memos, portfolio monitoring    | private-equity      | `/source`, `/ic-memo`, `/returns`, `/dd-checklist`        |
| Client reporting, financial planning, portfolio rebalancing | wealth-management   | `/client-review`, `/financial-plan`, `/rebalance`, `/tlh` |

## Plugin 1: investment-banking

The investment-banking plugin handles the full lifecycle of sell-side and buy-side advisory work -- from initial market sounding through deal execution and tracking.

**Commands (7):** `/buyer-list`, `/cim`, `/deal-tracker`, `/merger-model`, `/one-pager`, `/process-letter`, `/teaser`

**Skills (9):** buyer-list, cim-builder, datapack-builder, deal-tracker, merger-model, pitch-deck, process-letter, strip-profile, teaser

The workflow follows the natural sequence of an M&A engagement. The banker starts with a `/one-pager` to summarise the target company. If the client engages, the banker drafts a `/teaser` for initial buyer outreach -- anonymous, designed to generate interest without revealing the company's identity. Interested buyers sign NDAs and receive the full `/cim` (Confidential Information Memorandum). Meanwhile, `/buyer-list` identifies strategic and financial buyers using PitchBook data, screened by sector, geography, size, and acquisition history. `/process-letter` documents the bid process for structured auctions. `/merger-model` runs accretion/dilution analysis. `/deal-tracker` monitors milestones across the entire process -- NDA status, management presentations, bid rounds, exclusivity.

The strip profile skill fires passively whenever Claude encounters a company in deal context, producing rapid company summaries for pitch books without explicit invocation.

:::info What Is an M&A Teaser?
A teaser (or "blind profile") is the first document a buyer receives in an M&A process. It describes the business without naming it. Covers: industry and market position, key financial metrics (revenue, EBITDA, growth rate), competitive differentiation, and rationale for the sale. If interested, the buyer signs an NDA and receives the full CIM.

A well-written teaser generates 15-25 NDA signings from a targeted buyer list. The skill is selectivity: saying enough to generate interest without revealing the identity or giving away negotiating leverage.
:::

:::note Exercise Numbering
Exercises 1–4 are in Lessons 2 and 3 (Claude in Excel). Exercises 5–7 are in Lesson 4 (corporate finance plugin). Exercises 8–9 are in Lesson 5 (core financial analysis plugin). This lesson continues with Exercise 10.
:::

### Exercise 10: Investment Banking Workflow

**Time:** 30 minutes. **Requires:** Cowork with the investment-banking plugin installed (financial-analysis core first).

1. Choose a publicly listed company in a sector you know. Run `/one-pager [company]`. Review the output: is the business description accurate? Are the financials current? Note which data came from data providers and which required manual input.

2. Draft a buyer list: _"Identify likely strategic acquirers and financial buyers for [company]. Strategic: companies in adjacent industries with acquisition history and balance sheet capacity. Financial: PE firms with relevant sector thesis and fund size appropriate for this company's EV."_

3. Draft a teaser: _"Draft a one-paragraph teaser introduction for [company] that could be sent to a PE buyer unfamiliar with the sector. Emphasise financial characteristics rather than technical ones."_

4. Probe risk: _"What are the most important risk factors a buyer's counsel would investigate in due diligence for a company in this sector?"_

**The key learning:** The deal lifecycle is a sequence, not a set of isolated documents. Each deliverable builds on the previous one -- the one-pager informs the teaser, the teaser drives the buyer list, the buyer list shapes the process letter. The plugin encodes this sequence; your job is the judgment calls within it.

## Plugin 2: equity-research

The equity-research plugin targets sell-side equity research workflows -- from daily market monitoring through full initiating coverage reports.

**Commands (9):** `/catalysts`, `/earnings-preview`, `/earnings`, `/initiate`, `/model-update`, `/morning-note`, `/screen`, `/sector`, `/thesis`

**Skills (9):** catalyst-calendar, earnings-analysis, earnings-preview, idea-generation, initiating-coverage, model-update, morning-note, sector-overview, thesis-tracker

The `/earnings [company] [quarter]` command runs the full post-earnings workflow. It pulls actual results from connected data providers, compares against consensus estimates, identifies beats and misses by line item, updates the financial model, and produces a structured note ready for institutional clients. The `/initiate [company]` command produces the foundation of an initiating coverage report -- investment thesis (bull/base/bear), business description, financial model, valuation (comps and DCF), key risks, and price target. The `/morning-note` command synthesises overnight news from MT Newswires and earnings call transcripts from Aiera into a daily briefing. The `/thesis` command tracks key assumptions over time and flags when events challenge them.

:::info What Is a Sell-Side vs. Buy-Side Analyst?
Sell-side analysts work for investment banks and brokerage firms. They publish equity research reports with buy/hold/sell ratings and price targets for institutional investor clients. Buy-side analysts work for institutional investors -- asset managers, hedge funds, pension funds -- and analyse to support their own firm's investment decisions.

The equity-research plugin follows sell-side conventions: consensus estimates comparison, price target methodology, and publication-ready note format.
:::

:::info Earnings Season and Consensus Estimates
Companies report quarterly. Consensus is the average of analyst forecasts for each financial metric. A "beat" means actual results exceeded consensus; a "miss" means they fell short. Stock price often moves on whether results are better or worse than already expected, not on the absolute quality of the numbers.

Post-earnings workflow: compare actuals vs consensus line by line, update the financial model with reported figures, revise forward estimates, update the price target, and publish the note. The `/earnings` command automates this sequence -- the analyst provides the judgment on what the numbers mean for the thesis.
:::

:::info What Is an Initiating Coverage Report?
An initiating coverage report is a 25-50 page research document that introduces an analyst's view on a company for the first time. It establishes the investment thesis, describes the business model, presents the financial model, provides valuation through multiple methodologies, identifies key risks, and sets an initial price target.

Initiating coverage is how research franchises are built. The analyst's job: supply the non-consensus insight -- the view that differs from what the market already believes and explains why the stock is mispriced.
:::

### Exercise 11: Equity Research Workflow

**Time:** 35 minutes. **Requires:** Cowork with the equity-research plugin installed.

1. Choose a company that reported earnings within the last month. Run `/earnings [company] [quarter]`. Review the note structure: does it cover beats/misses, model updates, and forward guidance?

2. Identify the surprise: _"Which line item was most surprising relative to consensus -- positive or negative for the forward thesis?"_

3. Draft the lead: _"Draft the opening paragraph of an earnings update for institutional clients. Informative but concise -- the client is reading 12 notes this morning."_

4. Test the thesis: _"What are the three key assumptions for consensus revenue over the next two years? How confident should I be in each?"_

5. Challenge yourself: _"If I were a sceptical portfolio manager, what is the one question most uncomfortable for the analyst to answer?"_

**The key learning:** The earnings workflow is not about calculating beats and misses -- the plugin handles that in seconds. The skill is interpreting what the numbers mean for the forward thesis and communicating that interpretation to clients who are making allocation decisions based on your note.

## Plugin 3: private-equity

The private-equity plugin covers the PE deal lifecycle from sourcing through portfolio monitoring.

**Commands (9):** `/dd-checklist`, `/dd-prep`, `/ic-memo`, `/portfolio`, `/returns`, `/screen-deal`, `/source`, `/unit-economics`, `/value-creation`

**Skills (9):** dd-checklist, dd-meeting-prep, deal-screening, deal-sourcing, ic-memo, portfolio-monitoring, returns-analysis, unit-economics, value-creation-plan

The `/source [criteria]` command queries PitchBook and Chronograph for companies matching sector, revenue range, geography, and ownership criteria, returning a scored opportunity list. `/screen-deal [company]` provides a rapid assessment against the firm's investment criteria. `/dd-checklist` generates structured diligence checklists across commercial, financial, legal, operational, and management workstreams. `/unit-economics` runs cohort analysis, LTV/CAC, and payback period calculations for software and consumer businesses. `/returns` models IRR and MOIC across entry/exit multiple scenarios. `/ic-memo` produces the formal investment committee memorandum -- the document that recommends (or does not recommend) an investment.

:::info What Is an IC Memo?
An IC (Investment Committee) memo is the formal recommendation document presented to a firm's investment decision-making body. Standard sections: (1) Executive summary with recommendation. (2) Company and market overview. (3) Investment thesis -- why this company, why now. (4) Financial performance and projections. (5) Valuation. (6) Return analysis -- base, bull, bear case IRR and MOIC. (7) Key risks and mitigants. (8) Proposed deal structure.

The plugin produces the framework and populates data sections from connected sources. The investment thesis, risk assessment, and recommendation require professional judgment -- the plugin creates the structure, not the conclusion.
:::

:::info What Is Due Diligence?
Due diligence (DD) is the investigation of a company before a transaction. Financial DD focuses on quality of earnings (QoE): is reported EBITDA a true run-rate for the business?

Key QoE adjustments: add back genuinely one-time costs (litigation settlement, restructuring), subtract discontinued revenue streams, normalise for unusual items. Red flags during DD: customer concentration (one customer is more than 20% of revenue), receivables growing faster than revenue (potential collection problems), and capex consistently below depreciation (underinvestment in the asset base).

The `/dd-checklist` command generates the structured workstreams; the analyst provides the judgment on what the findings mean for the investment thesis.
:::

### Exercise 12: Private Equity Workflow

**Time:** 40 minutes. **Requires:** Cowork with the private-equity plugin installed. PitchBook access needed for sourcing; IC memo can use manually provided data.

1. Run `/source` with criteria: specify sector, revenue range ($20M-$100M), geography, and ownership type. Review the returned list: are companies genuinely in-criteria?

2. Pick one company. Ask: _"What are the three most important diligence questions for the first two weeks? Focus on deal-killers, not price-refiners."_

3. Draft a one-paragraph investment thesis as if presenting to the IC. Include: why this company, why now, value creation plan, and exit path.

4. Model returns: _"Assume $50M entry EV at 7x EBITDA, 60% debt, 5-year hold, EBITDA growing 15% per year. At exit multiples of 7x and 8x, what is the IRR and MOIC?"_ Verify the arithmetic manually.

5. Stress-test: _"What are the three most common reasons PE-backed companies in this sector underperform the entry thesis? How would I test for each in diligence?"_

**The key learning:** The PE workflow moves from broad sourcing to narrow conviction. Each step filters: sourcing produces a list, screening reduces it, diligence tests the survivors, and the IC memo synthesises everything into a recommendation. The plugin handles the structure; you provide the judgment on whether this company deserves your firm's capital.

## Plugin 4: wealth-management

The wealth-management plugin handles the adviser's client-facing workflow -- from meeting preparation through tax optimisation.

**Commands (6):** `/client-report`, `/client-review`, `/financial-plan`, `/proposal`, `/rebalance`, `/tlh`

**Skills (6):** client-report, client-review, financial-plan, investment-proposal, portfolio-rebalance, tax-loss-harvesting

The `/client-review` command produces a pre-meeting brief: performance summary, allocation drift from IPS targets, recent market news relevant to the client's holdings, tax-loss harvesting opportunities, and suggested agenda items. `/financial-plan` runs goal-based analysis -- retirement projections, college funding, estate planning -- with scenario modelling across market conditions. `/rebalance` identifies drift from target allocation, recommends trades, and checks IPS constraints before any trade is proposed. `/client-report` generates quarterly and annual performance reports in the adviser's branded template. `/tlh` identifies positions with unrealised losses, runs offset analysis, and checks wash-sale rule compliance.

### Exercise 13: Wealth Management Workflow

**Time:** 30 minutes. **Requires:** Cowork with the wealth-management plugin installed. Can use hypothetical client data.

1. Create a hypothetical client: age 58, retired executive, $2M portfolio (60% equities, 30% bonds, 10% alternatives), goal of $120K/year income for 30 years, constraint of no tobacco or weapons companies.

2. Test alignment: _"Does this allocation align with the client's income objectives and risk tolerance? What is the probability of portfolio survival over 30 years at this withdrawal rate?"_

3. Test constraints: _"Which positions in a standard 60/30/10 allocation would violate the ESG constraint? What replacements maintain sector allocation while satisfying the constraint?"_

4. Run `/client-review` for your hypothetical client. Review the pre-meeting brief: does it include a performance summary, allocation drift from target, and suggested agenda items? Then ask: _"Add three topics to raise proactively and two questions to check whether the client's objectives have changed."_

5. Handle the concern: _"The client wants to move 20% to cash due to volatility. How do I respond without being dismissive -- and what must I document for fiduciary compliance?"_

6. Test the passive skill: without using any command, type _"My client just inherited $300K. How should we think about integrating this into the portfolio?"_ The financial-plan skill should activate automatically, framing the question around the client's existing goals and constraints without being explicitly invoked.

**The key learning:** Wealth management is relationship management with analytical backing. The plugin handles the data assembly and compliance checks; the adviser provides the judgment, empathy, and fiduciary responsibility that no plugin can replicate.

## Partner-Built Plugins

Two additional plugins are built and maintained by data partners, bringing proprietary data directly into Claude workflows.

**LSEG Plugin** -- prices bonds, analyses yield curves, evaluates FX carry trades, values options, and builds macro dashboards using LSEG financial data. Eight commands covering fixed income, FX, equities, and macro analysis. To install, find **LSEG** in the `financial-services-plugins` marketplace you added in Lesson 5 and click **Install**. Requires an active LSEG data subscription.

**S&P Global Plugin** -- generates company tearsheets, earnings previews, and funding digests powered by S&P Capital IQ data. Supports multiple audience types: equity research, IB/M&A, corporate development, and sales. To install, find **S&P Global** in the same marketplace and click **Install**. Requires an active S&P Capital IQ subscription.

## Making the Plugins Yours

The plugins are starting points, not finished products. Customisation happens across five dimensions.

| Dimension             | What You Change                                        | Example                                                             |
| --------------------- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| **Swap connectors**   | Edit `.mcp.json` to point at your data providers       | Replace FactSet with Bloomberg if that is your firm's provider      |
| **Add firm context**  | Update skill files with your terminology and processes | Change "comps" to "trading comps" if that is your firm's convention |
| **Bring templates**   | Register your branded PowerPoint with `/ppt-template`  | Every deck output matches your style guide                          |
| **Adjust workflows**  | Modify skill instructions to match your team's process | Add an ESG section to IC memo if your firm requires it              |
| **Build new plugins** | Follow the standard structure to create new plugins    | Build a compliance plugin for regulatory reporting workflows        |

The plugin skill files are plain Markdown -- readable and editable without technical knowledge. Fork the repository, make your changes, and your firm's version of the suite reflects how your team actually works.

## Non-Negotiable Boundaries

Four boundaries apply to every plugin in the suite. These are not disclaimers -- they are architectural constraints that determine how you use the outputs.

1. **Claude does not provide investment advice.** The plugins produce analytical frameworks, structured data, and draft documents. The recommendation -- buy, sell, hold, invest, pass -- is yours.

2. **Claude makes mistakes and must be verified.** Every number, every calculation, every data point in a plugin output must be checked against source data before use in any client-facing or committee-facing deliverable.

3. **Claude does not validate assumptions.** A DCF model built with unreasonable assumptions produces a precise but wrong answer. The plugin builds the model; you anchor the assumptions with evidence.

4. **Claude does not replace an audit.** SOX workpapers, diligence reports, and compliance checks produced by the plugins are starting frameworks. Qualified professionals must review, validate, and sign off before any regulatory or fiduciary use.

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to explore the plugin ecosystem.

### Prompt 1: Plugin Integration Testing

```
I need to produce a research-backed company tearsheet that combines
data from multiple plugins. My target company is [COMPANY NAME].

Map the data flow across these three steps:
1. Run /comps to get peer valuation context (core plugin)
2. Run /earnings to get the latest quarterly performance (equity-research)
3. Run /one-pager to compile the summary (core plugin)

For each step:
- What data providers supply the underlying data?
- What output from step N becomes input context for step N+1?
- Where might format mismatches cause problems?
- What would the final deliverable look like if all three
  steps execute successfully?
```

**What you're learning:** Individual plugins work in isolation; professional workflows require plugins to work together. Mapping the data flow between plugins reveals where they connect smoothly and where manual intervention bridges the gaps. This is the same discipline as testing a financial model before presenting it -- the cost of finding integration errors before the client meeting is far lower than finding them during it.

### Prompt 2: Customisation Planning

```
My firm has these specific requirements that differ from the
default plugin configuration:

1. We use [DATA PROVIDER] instead of [DEFAULT PROVIDER]
2. Our IC memos require an ESG risk section not in the default
3. Our team calls the comps analysis "trading comparables"

For each requirement:
- Which of the five customisation dimensions applies?
- Which specific file in the plugin would I modify?
- What is the exact change?
- Are there dependencies or side effects to consider?
```

**What you're learning:** Customising plugins means understanding their internal structure -- which files control data connections (.mcp.json), which control document templates (skill files), and which control terminology (skill files again). This prompt practises reading the plugin architecture as a system you can modify, not a black box you accept as-is.

### Prompt 3: Due Diligence Red Flag Analysis

```
I am running financial due diligence on a target company with
these characteristics:

- Revenue: $85M, growing 22% YoY
- EBITDA: $12M (14% margin)
- Top customer is 28% of revenue
- Receivables grew 35% while revenue grew 22%
- Capex has been below depreciation for three years

Using the private-equity plugin's due diligence framework:
1. Which of these characteristics are red flags? Why?
2. For each red flag, what specific diligence question would
   you ask management?
3. How would each red flag affect your EBITDA adjustment in
   a quality of earnings analysis?
4. If two of three red flags are confirmed, does the deal
   still work at 7x entry EV/EBITDA? Show the sensitivity.
```

**What you're learning:** Due diligence is not a checklist exercise -- it is pattern recognition. Customer concentration, receivables outpacing revenue, and underinvestment in assets are classic red flags that signal risk to the quality of reported earnings. The plugin generates the diligence framework; this prompt practises the judgment of interpreting what the findings mean for the investment thesis.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 7: Cross-App Orchestration &rarr;](./07-cross-app-orchestration.md)
