---
slug: /Business-Domain-Agent-Workflows/finance-domain-agents/financial-analysis-the-core-plugin
sidebar_position: 5
title: "Financial Analysis: The Core Plugin"
description: "Explore the financial-analysis core plugin of the anthropics/financial-services-plugins suite -- its shared MCP connector architecture, eight modelling commands, nine passive skills, and how they combine to produce professional financial deliverables"
keywords:
  [
    "financial-analysis",
    "financial-services-plugins",
    "core plugin",
    "MCP connectors",
    "comps",
    "DCF",
    "LBO",
    "three-statement model",
    "Cowork plugins",
    "shared-core architecture",
    "Daloopa",
    "FactSet",
    "S&P Global",
    "sensitivity analysis",
    "WACC",
  ]
chapter: 17
lesson: 5
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Navigate Shared-Core Plugin Architecture"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "Digital Literacy"
    measurable_at_this_level: "Student can describe the shared-core architecture of the financial-services-plugins suite, explain why all MCP connectors are centralised in the core plugin, and state the mandatory install order"

  - name: "Map Financial Modelling Commands to Professional Deliverables"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can identify the correct core plugin command for a given financial modelling task, describe the deliverable it produces, and explain which MCP data sources feed the analysis"

  - name: "Interpret Core Plugin Output for Decision Support"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Data Literacy"
    measurable_at_this_level: "Student can review the output of a /comps or /dcf command, distinguish input cells from formula cells from output cells, and explain what the implied valuation range means for a business decision"

learning_objectives:
  - objective: "Explain the shared-core architecture of the financial-services-plugins suite and apply the mandatory install order when configuring the ecosystem"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can describe why all MCP connectors live in the core plugin, explain what happens if an add-on is installed without the core, and write the correct install sequence for a given combination of plugins"

  - objective: "Identify the correct core plugin command for a given financial modelling task and describe the professional deliverable it produces"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a finance scenario (e.g., 'I need to value a target for acquisition'), student can select the appropriate command (/comps, /dcf, /lbo) and describe the expected output format"

  - objective: "Analyse the output of a comps or DCF command to assess valuation range and communicate findings to a decision-maker"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student can read a comps workbook output, identify the implied EV range, and explain whether the subject company likely trades at a premium or discount to peers based on its financial profile"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Shared-core plugin architecture with mandatory install order"
    - "11 MCP data connectors centralised in the core plugin"
    - "Five end-to-end workflow patterns spanning the suite"
    - "Eight core commands and the deliverables they produce"
    - "Nine passive skills and when they activate"
    - "Professional colour-coding conventions in financial workbook output"
  assessment: "6 concepts at B1 level -- within the 7-10 cognitive limit for this tier. The lesson structures them hierarchically: architecture first, then commands, then skills. Students already understand skills vs commands from L04 (the KWP/finance plugin), so that concept is reinforcement rather than new load."

differentiation:
  extension_for_advanced: "Choose a company you follow. Run /comps and /dcf for the same company. Compare the implied valuations from each method. Where do the ranges overlap? Where do they diverge? Write a one-paragraph 'football field' summary explaining which methodology you trust more and why."
  remedial_for_struggling: "Focus on three commands only: /comps, /dcf, and /lbo. For each, write one sentence describing what it produces and one sentence describing when you would use it. If you can explain the difference between those three, you have the core concept."

teaching_guide:
  lesson_type: "core"
  session_group: 2
  session_title: "The Investment Professional Suite"
  key_points:
    - "All MCP connectors are centralised in the core plugin -- configure once, share across all add-ons"
    - "Install order is mandatory: core first, then function-specific add-ons. Add-ons inherit the core's shared connectors"
    - "The eight commands produce professional-grade financial deliverables as working Excel files with live formulas"
    - "The nine skills fire passively -- Claude applies professional financial conventions automatically without being told"
  misconceptions:
    - "Students may think each plugin in the suite has its own data connections -- all 11 MCP connectors live in the core plugin and are shared automatically"
    - "Students may confuse the core plugin commands with the Claude in Excel Agent Skills from L04 -- the core plugin commands run in Cowork across applications, not inside a single workbook"
    - "Students may assume the plugin outputs are final deliverables -- they are structured drafts that require professional review and judgment"
  discussion_prompts:
    - "Why does the architecture centralise all MCP connectors in the core plugin rather than letting each add-on manage its own? What would go wrong with the alternative design?"
    - "Which of the eight core commands would save you the most time in your current role? What would you still need to do manually after the command runs?"
  teaching_tips:
    - "Walk through the MCP connector table first -- students need to see the breadth of data sources before understanding individual commands"
    - "Use the comps scenario as the anchor example. Students already understand comps from L04's Claude in Excel context -- showing the same analysis through a Cowork command reinforces the assistant-to-agent progression"
  assessment_checks:
    - question: "Why must the core plugin be installed before any add-on?"
      expected_response: "Because all 11 MCP data connectors are centralised in the core plugin. Add-on plugins inherit these connections -- without the core, add-ons have no data sources to work with."
    - question: "What is the difference between /comps in the core plugin and the Comps Agent Skill in Claude in Excel?"
      expected_response: "They produce similar analyses but operate at different scope. The Agent Skill runs inside a single Excel workbook. The /comps command runs through Cowork and can feed its output into multi-application workflows -- sending the comps analysis to a PowerPoint deck or an IC memo."
    - question: "Name three of the 11 MCP data connectors in the core plugin."
      expected_response: "Any three from: Daloopa, Morningstar, S&P Global, FactSet, Moody's, MT Newswires, Aiera, LSEG, PitchBook, Chronograph, Egnyte."
---

# Financial Analysis: The Core Plugin

In Lesson 4, you explored the knowledge-work-plugins/finance plugin -- the corporate finance plugin built for controllers and FP&A teams managing month-end close, journal entries, and reconciliation workflows. That plugin serves operational finance: keeping the books clean and the close on schedule. Now you move to a different audience entirely.

The `anthropics/financial-services-plugins` suite serves investment professionals -- the analysts, bankers, portfolio managers, and researchers whose work centres on valuation, deal execution, and market analysis. This suite is not a single plugin but an architecture: a core plugin that centralises all data connections, four function-specific add-ons, and two partner-built plugins from LSEG and S&P Global. This lesson covers the foundation of that architecture -- the `financial-analysis` core plugin that every add-on depends on.

## The Shared-Core Architecture

Every plugin in the `financial-services-plugins` suite shares one architectural decision: all MCP data connectors live in the core plugin. Install the core once, configure your data connections once, and every add-on you install afterwards inherits them automatically.

This matters because financial workflows pull data from multiple providers simultaneously. A comparable company analysis needs market data from FactSet, financial model data from Daloopa, and credit ratings from Moody's. If each plugin maintained its own connections, you would configure the same providers repeatedly and risk inconsistent credentials across plugins.

**Install order is mandatory.** The core plugin must be installed first; all add-ons depend on it.

```bash
claude plugin marketplace add anthropics/financial-services-plugins

# Install the core plugin FIRST -- required
claude plugin install financial-analysis@financial-services-plugins

# Then add function-specific plugins as needed
claude plugin install investment-banking@financial-services-plugins
claude plugin install equity-research@financial-services-plugins
claude plugin install private-equity@financial-services-plugins
claude plugin install wealth-management@financial-services-plugins
```

**Output:**

```
> financial-analysis@financial-services-plugins installed (core)
> investment-banking@financial-services-plugins installed (add-on)
> equity-research@financial-services-plugins installed (add-on)
> private-equity@financial-services-plugins installed (add-on)
> wealth-management@financial-services-plugins installed (add-on)
```

You can also install from `claude.com/plugins`.

## The 11 MCP Data Connectors

All eleven connectors are configured in the core plugin's `.mcp.json` and shared across the entire suite.

| Provider         | What It Provides                                        | MCP URL                                          |
| ---------------- | ------------------------------------------------------- | ------------------------------------------------ |
| **Daloopa**      | Automated financial model data extraction               | `https://mcp.daloopa.com/server/mcp`             |
| **Morningstar**  | Equity research, fund analysis, valuation data          | `https://mcp.morningstar.com/mcp`                |
| **S&P Global**   | Capital IQ financial data, credit ratings, ownership    | `https://kfinance.kensho.com/integrations/mcp`   |
| **FactSet**      | Market data, financial analytics, portfolio data        | `https://mcp.factset.com/mcp`                    |
| **Moody's**      | Credit ratings, fixed income analytics                  | `https://api.moodys.com/genai-ready-data/m1/mcp` |
| **MT Newswires** | Real-time financial news feeds                          | `https://vast-mcp.blueskyapi.com/mtnewswires`    |
| **Aiera**        | Earnings call transcripts, corporate event intelligence | `https://mcp-pub.aiera.com`                      |
| **LSEG**         | Market data, analytics                                  | `https://api.analytics.lseg.com/lfa/mcp`         |
| **PitchBook**    | Private company, VC, and PE deal data                   | `https://premium.mcp.pitchbook.com/mcp`          |
| **Chronograph**  | Private markets portfolio monitoring                    | `https://ai.chronograph.pe/mcp`                  |
| **Egnyte**       | Document management for deal files                      | `https://mcp-server.egnyte.com/mcp`              |

MCP access requires a subscription or API key from each provider. You configure credentials once in the core plugin; every add-on uses them automatically.

## End-to-End Workflows

The plugins are designed for complete workflows, not point tools. Five patterns span the suite.

| Workflow                      | What It Does                                                                                           | Plugins Involved          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| **Research to Report**        | Pull real-time data, analyse earnings, generate publication-ready research reports                     | equity-research + core    |
| **Spreadsheet Analysis**      | Build comps, DCF models, and LBO models as Excel workbooks with live formulas                          | core (financial-analysis) |
| **Financial Modelling**       | Populate three-statement models from SEC filings, cross-check against peer data, stress-test scenarios | core + equity-research    |
| **Deal Materials**            | Draft CIMs, teasers, process letters, and pitch deck slides in firm-branded templates                  | investment-banking + core |
| **Portfolio to Presentation** | Screen opportunities, run diligence, build IC memos, track portfolio KPIs                              | private-equity + core     |

Each workflow moves from raw data to professional deliverable in a single session. The deliverables are structured drafts that require professional review -- the plugins handle the data assembly and formatting; you provide the judgment.

## The Eight Core Commands

The core plugin provides eight commands that cover the foundation of financial modelling and analysis.

| Command                           | What It Produces                                                                                |
| --------------------------------- | ----------------------------------------------------------------------------------------------- |
| `/comps [company]`                | Comparable company analysis as Excel workbook -- peer group, multiples, implied valuation range |
| `/dcf [company]`                  | DCF valuation model with sensitivity tables (WACC x terminal growth rate)                       |
| `/lbo [company]`                  | LBO model with entry/exit scenarios, debt schedule, and returns summary                         |
| `/3-statements [company]`         | Three-statement financial model (income statement, balance sheet, cash flow)                    |
| `/competitive-analysis [company]` | Competitive landscape analysis -- market positioning, share, and strategic context              |
| `/debug-model`                    | Debug and validate a financial model for formula errors, circular references, and logic gaps    |
| `/check-deck`                     | Review a pitch deck for numerical consistency, formatting, and narrative coherence              |
| `/ppt-template`                   | Register the firm's branded PowerPoint template for all deck outputs                            |

**`/comps [company]`** produces a fully formatted Excel workbook: peer group table with LTM financials from connected MCP providers, enterprise value calculations, EV/EBITDA and EV/Revenue multiples, statistical summary (median, 25th and 75th percentile), and the subject company with implied valuation range. Blue input cells, black formula cells, green output cells -- the Wall Street colour-coding convention built in.

**`/dcf [company]`** produces a three-stage DCF: detailed projection period, normalisation year, terminal value using both Gordon Growth Model and exit multiple, WACC calculation with beta sourced from the connected data provider, and a two-way sensitivity table. The model is a working Excel file with live formulas -- change an assumption and the sensitivity table updates automatically.

**`/lbo [company]`** builds a leveraged buyout model: sources and uses, debt schedule with multiple tranches, operating model projections, and returns analysis across entry/exit multiple scenarios. The output includes IRR and MOIC calculations at different exit multiples and hold periods.

**`/3-statements [company]`** generates a linked three-statement financial model: income statement, balance sheet, and cash flow statement with line items populated from MCP data sources and formulas linking the three statements. Revenue and cost assumptions are editable on a separate Assumptions tab.

**`/competitive-analysis [company]`** produces a competitive landscape analysis: market sizing, competitor positioning map, share estimates, strategic group analysis, and a summary of competitive dynamics relevant to valuation.

**`/debug-model`** inspects a financial model for common errors: circular references, broken formula links, inconsistent units, hardcoded values where formulas are expected, and balance sheet imbalances. The output is a structured error report with cell references and suggested fixes.

**`/check-deck`** reviews a pitch deck for consistency: do the numbers on slide 7 match the model on slide 12? Are growth rates quoted in the narrative consistent with the chart? Are formatting conventions applied consistently? The output flags every inconsistency with slide and cell references.

**`/ppt-template`** registers the firm's branded PowerPoint template. After registration, every deck output -- one-pagers, IC memos, earnings summaries -- uses the firm's template with the correct logo, fonts, colour scheme, and footer.

:::info What Is WACC?
WACC -- Weighted Average Cost of Capital -- is the discount rate used in a DCF. It represents the blended required return of both debt and equity investors, weighted by their proportions in the capital structure.

**Formula:** WACC = (E/V x Cost of Equity) + (D/V x Cost of Debt x (1 - Tax Rate))

Where E = market value of equity, D = market value of debt, V = E + D. The tax adjustment reflects that interest on debt is tax-deductible, reducing the after-tax cost of debt.

**Cost of equity** is estimated via CAPM: Cost of Equity = Risk-Free Rate + Beta x Equity Risk Premium. The risk-free rate is the 10-year Treasury yield. Beta measures the company's stock volatility relative to the market.

**Why WACC matters:** A 1 percentage point increase in WACC typically reduces DCF equity value by 10-20%. This sensitivity is why the WACC/terminal growth rate sensitivity table is always included in professional analysis.

**Example:** A company has 60% equity, 40% debt. Cost of equity: 12%. Cost of debt: 5%. Tax rate: 25%. WACC = (0.60 x 12%) + (0.40 x 5% x 0.75) = 7.2% + 1.5% = 8.7%.
:::

:::info What Is Enterprise Value (EV)?
Enterprise value is what you would need to pay to acquire a company entirely, including both equity and debt.

**Formula:** EV = Market Cap + Total Debt + Preferred Stock + Minority Interest - Cash

**Why subtract cash?** You inherit the company's cash when you acquire it, which offsets part of the price. A company with $500M market cap, $200M debt, and $50M cash has an EV of $650M.

**Example:** Company A has 100M shares at $8.50. Market cap = $850M. Debt = $150M. Cash = $30M. EV = $850M + $150M - $30M = $970M. With LTM EBITDA of $97M: EV/EBITDA = 10.0x.

**Why use EV over market cap?** EV is capital-structure-neutral. Two companies with identical operations but different debt levels have different market caps but similar EVs. EV/EBITDA allows fair comparison between differently leveraged businesses.
:::

:::info LTM -- Trailing Twelve Months
LTM (Last Twelve Months) refers to a company's financial performance over the most recent twelve-month period, regardless of fiscal year end. Used in comps to ensure all companies are compared on the same timeframe.

**Calculation:** LTM = Most Recent Annual Period + Most Recent Partial Period - Prior Year Comparable Partial Period.

**Example:** A company's fiscal year ends December 31. It is now October. LTM revenue = FY2024 revenue + Q1-Q3 2025 revenue - Q1-Q3 2024 revenue. This gives the twelve months ending September 30, 2025 -- the most current full year available.
:::

:::info What Is an LBO Model?
A Leveraged Buyout (LBO) model values the acquisition of a company using significant borrowed money -- typically 50-70% debt. The acquired company's own cash flows service the debt. Private equity firms use LBOs to acquire companies, improve them over 3-7 years, and sell at a profit.

**Why debt amplifies returns:** Buy a company for $100M using $30M equity and $70M debt. Sell for $130M five years later after repaying debt from operating cash flows, leaving $60M net. Equity return: $60M on $30M invested = 100% total return (15% IRR). Without leverage, the same investment yields 30% total. Debt amplification works in both directions -- underperformance can wipe out equity entirely.

**Key metrics:** Entry multiple (EV/EBITDA at purchase), exit multiple (EV/EBITDA at sale), IRR (annualised equity return, target 20-25%), MOIC (total proceeds / equity invested, target 3-5x over 5 years).
:::

## The Nine Core Skills

Skills fire automatically when Claude detects that their domain is relevant. Unlike commands, you do not invoke them -- Claude draws on them in the background whenever the context matches.

| Skill                    | When It Activates                                          |
| ------------------------ | ---------------------------------------------------------- |
| **3-statements**         | Building or reviewing linked financial models              |
| **check-deck**           | Reviewing presentation materials for consistency           |
| **check-model**          | Validating financial model logic and formula integrity     |
| **competitive-analysis** | Analysing market positioning or competitive dynamics       |
| **comps-analysis**       | Preparing or interpreting comparable company analysis      |
| **dcf-model**            | Building or reviewing discounted cash flow models          |
| **lbo-model**            | Constructing or evaluating leveraged buyout models         |
| **ppt-template-creator** | Formatting presentation outputs to match firm templates    |
| **skill-creator**        | Building new domain-specific skills from user requirements |

The skills complement the commands. When you run `/comps`, the comps-analysis skill is also active in the background -- applying professional conventions to every aspect of the output even beyond what the command explicitly covers. When you paste a financial model into the conversation without invoking any command, the check-model skill activates and flags potential issues automatically.

## Example: A Comps Analysis Through the Core Plugin

An equity analyst needs a quick market check on a mid-cap industrial company before a client meeting tomorrow morning.

**The request:**
"Run a comps analysis for Acme Industrial. My subject company has LTM Revenue of $340M and LTM EBITDA of $51M."

**What happens:** The `/comps` command activates. Claude queries the configured MCP connectors -- FactSet for market data, Daloopa for standardised financial model data -- pulls comparable public companies in the industrials sector, calculates enterprise values, and builds the workbook.

**The output:** A formatted Excel workbook following professional conventions. Blue input cells for manually adjustable figures. Black formula cells. Green output cells for the multiples table. The peer group table shows each company's LTM Revenue, LTM EBITDA, EBITDA Margin %, EV, EV/EBITDA, and EV/Revenue. Summary statistics rows show Median, 25th Percentile, and 75th Percentile.

**The follow-up:**
"Based on this peer group, what is the implied enterprise value range for my company?"

**Claude's analysis:** "Your EBITDA Margin of 15.0% ($51M / $340M) is below the peer median of 18.3%. The peer group trades at: Median EV/EBITDA 9.2x, 25th percentile 8.1x, 75th percentile 11.4x. Applied to your EBITDA of $51M: at 25th percentile (8.1x) implied EV is $413M; at median (9.2x) $469M; at 75th percentile (11.4x) $581M. Note: your margin is below the peer 25th percentile. A buyer applying a discount for the margin gap may use 7-8x, implying $357M-$408M."

The professional skill is not the arithmetic. The skill is evaluating whether the peer group is right, whether the margin gap is structural or correctable, and what that implies for the appropriate multiple.

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to explore the core plugin commands.

### Prompt 1: Plugin Command Selection

```
I work in [YOUR FINANCE FUNCTION -- e.g., equity research,
investment banking, corporate development, FP&A].

My most common analytical task is [DESCRIBE THE TASK --
e.g., "valuing acquisition targets", "preparing board
presentations with peer benchmarks", "building projection
models for budget season"].

Based on the eight core plugin commands (/comps, /dcf, /lbo,
/3-statements, /competitive-analysis, /debug-model,
/check-deck, /ppt-template):

1. Which command maps to my task?
2. What would the output look like?
3. Which MCP data providers would supply the underlying data?
4. What would I still need to review manually before the
   deliverable is ready for my audience?
```

**What you're learning:** Mapping real workflows to plugin commands requires understanding what each command produces and which data sources feed it. This prompt practises the three-layer mapping -- command, data provider, manual review -- that separates someone who installs a plugin from someone who integrates it into professional practice.

### Prompt 2: Sensitivity Table Interpretation

```
A DCF model for Company X produces this sensitivity table
showing equity value per share at different WACC and terminal
growth rate combinations:

           Growth 1.5%   Growth 2.0%   Growth 2.5%
WACC 8.0%    $42.10        $47.30        $54.20
WACC 9.0%    $33.80        $37.10        $41.50
WACC 10.0%   $27.60        $29.80        $32.70

The current share price is $35.00.

1. What combination of WACC and growth rate justifies the
   current market price?
2. Is that combination reasonable for a mid-cap industrial
   company? Why or why not?
3. What is the spread between the highest and lowest values
   in this table? What does that spread tell a decision-maker
   about how much confidence to place in any single DCF number?
4. If you were presenting this to an investment committee,
   how would you frame the uncertainty?
```

**What you're learning:** A sensitivity table is the most honest output of a DCF because it shows the range of outcomes rather than pretending one number is correct. Reading a sensitivity table is a professional skill: you need to locate where the current market price sits in the grid, assess whether those assumptions are plausible, and communicate the range to decision-makers who want a single answer.

### Prompt 3: Core Plugin Exploration

```
I want to understand how the eight core plugin commands
relate to each other. Consider this scenario:

A corporate development team is evaluating whether to
acquire a competitor. They need:
- A market check (how does the target compare to peers?)
- A fundamental valuation (what is the target worth
  based on projected cash flows?)
- A leveraged buyout analysis (what returns could a
  financial sponsor achieve?)
- A three-statement model (what do the combined
  financials look like?)

For each need:
1. Which core command would I use?
2. In what order should I run them?
3. Where does the output of one command feed into another?
4. What professional judgment is required between commands?
```

**What you're learning:** Individual commands solve individual problems; professional workflows chain commands together. The order matters -- comps establish the market context that informs DCF assumptions, which in turn anchor the LBO entry multiple. Understanding this chain reveals how the core plugin supports an end-to-end analysis rather than isolated calculations.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 6: Domain Plugins -- From Deals to Portfolios &rarr;](./06-domain-plugins-from-deals-to-portfolios.md)
