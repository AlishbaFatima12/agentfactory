---
sidebar_position: 10
title: "The Skill Library"
description: "How the Sales & Marketing SKILL.md library is structured: the global router, product files, agent files, the local configuration template, the plugin architecture, and how to extend the library with new skills"
keywords:
  [
    "SKILL.md library",
    "global router",
    "product skill",
    "sales plugin architecture",
    "marketing plugin",
    "jurisdiction overlay",
    "local configuration",
    "sales-marketing.local.md",
    "skill extension",
    "plugin structure",
    "RevOps skills",
    "agent skills",
  ]
chapter: 23
lesson: 10
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Explain the Router-Product-Configuration Architecture"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can trace a user query through the three layers (global router identifies task, product file executes workflow, local configuration personalises output) and explain why each layer exists"

  - name: "Extend the Skill Library with a New Product Skill"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a new product skill file following the established pattern, register it in the global router, and verify routing works correctly"

learning_objectives:
  - objective: "Describe the three-layer architecture of the Sales & Marketing skill library (global router, product files, local configuration) and explain the purpose of each layer"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can diagram the three layers and trace a sample query through each, explaining what happens at each stage"

  - objective: "Identify all 14 product skills and 5 agent skills in the library and describe the workflow each addresses"
    proficiency_level: "B1"
    bloom_level: "Remember"
    assessment_method: "Student can name all 19 skill files and map each to its corresponding plugin command or autonomous function"

  - objective: "Create a new product skill file, register it in the global router, and test routing for a sample query"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student produces a new product skill file with correct YAML frontmatter, workflow steps, output format, and NEVER rules, and updates the router to include it"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Three-layer architecture: router, product files, local configuration"
    - "Global router pattern (query classification and file loading)"
    - "Product skill files (one file per plugin command)"
    - "Agent skill files (persistent autonomous workflows)"
    - "Local configuration template (organisation-specific customisation)"
    - "Extending the library (adding new product skills)"
  assessment: "6 concepts at B1-B2 level -- within the acceptable range. The router pattern and skill file structure build on patterns taught in Chapters 5 and 16. Students are applying familiar concepts to a new domain."

differentiation:
  extension_for_advanced: "Compare the sales-marketing skill library to the legal-ops plugin structure. Identify the architectural patterns they share (router, product files, local config, NEVER rules) and propose a generalised template for building domain-specific skill libraries in any industry vertical."
  remedial_for_struggling: "Focus on the global router and one product file (prospect-research.md). If you can trace a query from router match to product file execution to configured output, you understand the architecture. The other 13 product files follow the same pattern."
---

# The Skill Library

Every plugin command you have used in this chapter -- `/research`, `/score`, `/outreach`, `/sequence`, `/campaign`, `/analyze` -- is powered by a SKILL.md file. The five RevOps agents from Lesson 9 -- Lead Intelligence, CRM Hygiene, Outreach Sequencing, Marketing Performance, Revenue Reporting -- are each defined by an agent SKILL.md file. And all of these files are connected by a single global router that determines which file to load for any given query.

This lesson shows you how the library is structured, how the pieces fit together, and how to extend it.

## The Three-Layer Architecture

The Sales & Marketing skill library follows the same architectural pattern as the Legal Plugin from Chapter 22: a **global router** that classifies incoming queries, **product files** that execute specific workflows, and a **local configuration** that personalises every output to your organisation.

:::info What Is a Global Router?
A **global router** is the top-level SKILL.md file that is always loaded in every session. Its job is not to execute workflows -- it is to identify what the user is trying to do and load the correct product file to handle it. Think of it as a receptionist: it listens to the request, identifies which department can help, and routes accordingly. Without a router, the agent would need to load all 19 skill files simultaneously, which would consume context and degrade output quality.
:::

```
User query: "Research Sarah Chen at Meridian Logistics"
                    |
                    v
    +-------------------------------+
    |   GLOBAL ROUTER               |   Layer 1: Classification
    |   sales-marketing-global-     |   - Matches "research" pattern
    |   router.md                   |   - Loads product file
    |                               |   - Loads local configuration
    +-------------------------------+
         |                    |
         v                    v
  +----------------+  +---------------------+
  | PRODUCT FILE   |  | LOCAL CONFIGURATION |   Layer 2: Execution
  | products/      |  | sales-marketing.    |   Layer 3: Personalisation
  | prospect-      |  | local.md            |
  | research.md    |  | (ICP, brand voice,  |
  |                |  |  competitors)       |
  +----------------+  +---------------------+
         |                    |
         +--------+-----------+
                  |
                  v
         Personalised research brief
         matched against YOUR ICP
```

**Layer 1: The Global Router** classifies the user's query against a pattern table and loads the correct product file. It also enforces universal rules that apply to every output (such as "never fabricate prospect data" and the Five Laws of Outreach compliance check).

**Layer 2: Product Files** contain the specific workflow logic for each plugin command -- the steps the agent follows, the output format, the quality checks, and the NEVER rules specific to that workflow.

**Layer 3: Local Configuration** contains your organisation's ICP definition, brand voice, competitor intelligence, persona profiles, and messaging framework. This is the layer that transforms generic outputs into outputs specific to your market, your buyers, and your positioning.

## The Global Router

The `sales-marketing-global-router.md` file is the entry point for every interaction. It performs three functions:

**Function 1: Query Classification.** The router matches the user's query against a pattern table:

| Query Pattern                             | Loads Product File                 |
| ----------------------------------------- | ---------------------------------- |
| Prospect/account research, account intel  | `products/prospect-research.md`    |
| Lead scoring, qualification, ICP match    | `products/lead-scoring.md`         |
| CRM enrichment, data update, data hygiene | `products/crm-enrichment.md`       |
| Outreach email, LinkedIn DM, cold message | `products/outreach.md`             |
| Multi-touch sequence, cadence             | `products/sequence.md`             |
| Pre-call brief, pre-meeting, deal health  | `products/pre-call-brief.md`       |
| Follow-up after call/demo/meeting         | `products/follow-up.md`            |
| Pipeline analysis, forecast, deal review  | `products/pipeline.md`             |
| Content creation (any format)             | `products/content-creation.md`     |
| Campaign planning, campaign brief         | `products/campaign-planning.md`    |
| Ad copy, landing page, subject line, CTA  | `products/copywriting.md`          |
| Campaign performance, analytics, optimise | `products/performance-analysis.md` |
| Content calendar, publishing schedule     | `products/content-calendar.md`     |
| Persona, ICP, buyer profile, audience     | `products/persona-icp.md`          |

**Function 2: Configuration Loading.** On every invocation, the router loads `sales-marketing.local.md` and checks for ICP definition, brand voice, competitor intelligence, persona profiles, and messaging framework. If the local configuration file is not found, the router informs the user and proceeds with general best practices -- but warns that outputs will not be organisation-specific.

**Function 3: Universal Rules Enforcement.** The router enforces rules that apply to every output, regardless of which product file is loaded:

- Never fabricate prospect data -- only report what is verifiable from sources
- Never invent statistics, revenue figures, or company information
- Never write outreach without personalisation to at least one specific, verifiable fact
- Never lead an outreach message with your product or company name
- Never skip ICP validation before building research or outreach materials
- Always run the Five Laws of Outreach compliance check before finalising any message
- Always provide specific, actionable recommendations in any analysis

:::info What Is a Product Skill?
A **product skill** is a SKILL.md file that defines the workflow for one specific plugin command. It contains: the trigger patterns that activate it, the step-by-step workflow the agent follows, the output format, quality checks, and NEVER rules. Each product skill maps to one plugin command (e.g., `prospect-research.md` maps to `/research`). The product skill does not contain your organisation's data -- that comes from the local configuration. The product skill defines _how_ the agent works; the local configuration defines _for whom_.
:::

## The 14 Product Files

Each product file defines one plugin command workflow. The complete library covers both the Sales and Marketing plugins:

### Sales Plugin Product Files (8 files)

| File                   | Command      | Purpose                                                                                                                                                |
| ---------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prospect-research.md` | `/research`  | Deep prospect and account intelligence brief with career analysis, company profile, timing signals, pain identification, and recommended outreach hook |
| `lead-scoring.md`      | `/score`     | Three-dimension scoring (Fit 0-40 / Timing 0-40 / Engagement 0-20) with classification rules and routing recommendations                               |
| `crm-enrichment.md`    | `/enrich`    | CRM record enrichment from web, LinkedIn, Companies House, and email verification with field-level change tracking                                     |
| `outreach.md`          | `/outreach`  | Personalised email and LinkedIn message drafting with Five Laws compliance check and brand voice alignment                                             |
| `sequence.md`          | `/sequence`  | Multi-touch outreach sequence generation with timing rules, channel mixing, branch conditions, and graceful close logic                                |
| `pre-call-brief.md`    | `/brief`     | Pre-call preparation brief with discovery questions, anticipated objections, call success criteria, and competitive intelligence                       |
| `follow-up.md`         | `/follow-up` | Post-meeting follow-up drafting with action item capture, next step proposal, and deal advancement recommendations                                     |
| `pipeline.md`          | `/pipeline`  | Pipeline analysis with deal health assessment, at-risk identification, forecast, and specific rep-level recommendations                                |

### Marketing Plugin Product Files (6 files)

| File                      | Command     | Purpose                                                                                                                                                         |
| ------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content-creation.md`     | `/content`  | Content creation across all formats (articles, blog posts, whitepapers, case studies, social posts, video scripts, webinar outlines) with brand voice alignment |
| `campaign-planning.md`    | `/campaign` | Campaign brief generation with audience definition, channel mix, budget allocation, content plan, success metrics, and risk contingencies                       |
| `copywriting.md`          | `/copy`     | Ad copy, landing page copy, subject line, and CTA generation with A/B variant production and brand voice compliance                                             |
| `performance-analysis.md` | `/analyze`  | Campaign performance analysis with multi-channel data comparison, trend identification, and top three actionable optimisation recommendations                   |
| `content-calendar.md`     | `/calendar` | Week-by-week content and campaign calendar with content titles, formats, personas, channels, publish dates, and CTAs                                            |
| `persona-icp.md`          | `/persona`  | ICP and buyer persona development through structured interview, producing firmographic criteria, timing signals, persona profiles, and messaging framework      |

## The 5 Agent Files

The agent files define persistent autonomous workflows (covered in detail in Lesson 9):

| File                                    | Agent                 | Schedule                     | Core Function                                                                                             |
| --------------------------------------- | --------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| `agents/lead-intelligence-agent.md`     | Lead Intelligence     | Daily scan                   | Monitor prospects for HOT timing signals; alert reps within 2 hours; produce weekly signal digest         |
| `agents/crm-hygiene-agent.md`           | CRM Hygiene           | Weekly / Monthly / Quarterly | Scheduled enrichment passes; data quality scoring; duplicate detection; bounce cleanup                    |
| `agents/outreach-sequencing-agent.md`   | Outreach Sequencing   | Continuous                   | Manage multi-touch sequence lifecycle; track engagement; pause on reply; handle bounces and unsubscribes  |
| `agents/marketing-performance-agent.md` | Marketing Performance | Every Friday                 | Pull channel data; compare actuals to targets; generate weekly analysis with optimisation recommendations |
| `agents/revenue-reporting-agent.md`     | Revenue Reporting     | Every Monday                 | Aggregate pipeline, lead velocity, marketing contribution, and forecast into leadership dashboard         |

**The distinction between product files and agent files:** Product files are invoked by the user (you type `/research` and get a brief). Agent files run autonomously on schedule or in response to triggers (the Lead Intelligence Agent scans daily without anyone typing anything). Product files produce a single output. Agent files manage ongoing processes.

## The Local Configuration Template

The `sales-marketing.local.md.template` is the most important file in the library -- not because of what it contains (it ships empty), but because of what you fill in. Every product file and every agent file references the local configuration to personalise outputs. Without it, the library produces generic best-practice outputs. With it, the library produces outputs specific to your market, your buyers, and your positioning.

**What users customise and why:**

| Section                     | What You Fill In                                                                                                                     | Why It Matters                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **ICP Definition**          | Firmographic criteria (size, revenue, industry, geography), technographic signals (positive and negative), timing signals (HOT/WARM) | Every research brief, score, and outreach is matched against YOUR ideal customer -- not a generic profile       |
| **Persona Profiles**        | Primary, secondary, and champion personas with motivations, fears, triggers, and tone preferences                                    | Outreach, content, and campaign outputs are tailored to the specific person you are trying to reach             |
| **Brand Voice**             | Tone, language rules, prohibited words, content pillars, persona-specific voice guides                                               | Every piece of content and every outreach message sounds like YOUR organisation, not a generic AI output        |
| **Competitor Intelligence** | Competitor names, their strengths, their weaknesses, common competitive scenarios                                                    | Research briefs flag competitive situations; outreach avoids landmines; deal briefs prepare reps for objections |
| **Messaging Framework**     | Value propositions by persona, key differentiators, proof points, case study references                                              | Every outreach message and content piece reinforces YOUR positioning, not generic sales language                |

**The template ships with placeholders:**

```markdown
## ICP Definition -- Ideal Customer Profile

### Firmographic Criteria

Company size: [X-Y employees]
Revenue range: [currency X-Y annual revenue]
Stage: [growth stage -- e.g., established, 5+ years, pre-IPO]
Geography: [primary market; secondary market]
Industry: [list your top 3-5 verticals]
Technology maturity: [describe the tech profile of your best customers]

### Timing Signals (HOT -- prioritise immediately)

[List the 3-5 signals that most reliably predict purchase in your market]

### Persona Profiles

PRIMARY: [Title / Role]
Motivation: [what drives their purchasing decisions]
Fear: [what keeps them from buying]
Trigger: [what event makes them start evaluating]
Tone: [how to write to this person]
```

The instructions are explicit: copy the template, rename it to `sales-marketing.local.md`, and fill in every section. Exercise 1 in Lesson 12 guides you through this process using your historical deal data.

:::info What Is a Jurisdiction Overlay?
In the Legal Plugin (Chapter 22), a **jurisdiction overlay** is an additional skill file that modifies the base product skill for a specific legal jurisdiction. The Sales & Marketing library does not use jurisdiction overlays in the same way -- instead, market-specific customisation happens in the local configuration file. However, if you operate across multiple markets (for example, selling in both the UK and the GCC), you could create market-specific local configuration files (`sales-marketing.local.uk.md`, `sales-marketing.local.gcc.md`) and load the appropriate one based on the prospect's geography. The architecture supports this -- the router simply loads a different configuration file.
:::

## How to Extend: Adding a New Product Skill

The library ships with 14 product files covering the core Sales and Marketing plugin commands. You may need to add skills for workflows specific to your organisation -- a partner channel outreach workflow, a customer expansion playbook, a renewal management process, or a market-specific content strategy.

**Step-by-step: adding a new product skill**

**Step 1: Create the product file.**

Create a new file in the `products/` directory. Follow the established naming convention: `[workflow-name].md`.

```markdown
---
name: partner-outreach
version: 1.0
description: >
  Activate for: partner outreach, channel partner, referral partner,
  partner programme, co-sell, partner introduction, alliance.
---

## WORKFLOW

STEP 1 -- IDENTIFY PARTNER TYPE
[Technology partner / Referral partner / Reseller / Co-sell partner]

STEP 2 -- RESEARCH PARTNER ORGANISATION
[Use /research workflow adapted for partner context]

STEP 3 -- BUILD PARTNERSHIP PITCH
[Value proposition specific to partner type]

STEP 4 -- OUTPUT FORMAT
[Partner brief, co-sell one-pager, or introduction request]

## NEVER DO THESE

- NEVER position as a vendor-customer relationship
- NEVER share customer pricing with potential partners
- NEVER promise exclusivity without leadership approval
```

**Step 2: Register in the global router.**

Add a new row to the query pattern table in `sales-marketing-global-router.md`:

```markdown
| Partner outreach, channel partner, co-sell | products/partner-outreach.md |
```

**Step 3: Test routing.**

Ask the agent: "I need to build a partner outreach for TechCorp." The router should match the "partner outreach" pattern and load your new product file. If it loads a different file (for example, `outreach.md` for general outreach), refine the trigger terms in your product file's description field to be more specific.

**Step 4: Validate output quality.**

Run three test queries through the new skill. Review each output for: correct workflow execution, appropriate output format, brand voice compliance, and NEVER rule enforcement.

## Comparison to Legal-Ops Plugin Structure

The Sales & Marketing skill library follows the same architectural pattern established by the Legal-Ops plugin in Chapter 22. This is intentional -- the pattern is designed to be replicable across any domain vertical.

| Component                        | Legal-Ops Plugin                                                                                                                      | Sales & Marketing Library                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Router**                       | `legal-global-router/` -- routes to product + jurisdiction                                                                            | `sales-marketing-global-router.md` -- routes to product file                                                                                    |
| **Product skills**               | 8 skills (contract review, NDA triage, IP protection, regulatory monitoring, DSAR, legal spend, compliance calendar, contract intake) | 14 product files (research, score, enrich, outreach, sequence, brief, follow-up, pipeline, content, campaign, copy, analyze, calendar, persona) |
| **Agent skills**                 | 5 Legal Ops agents (Contract Intake, Regulatory Monitoring, Compliance Calendar, Legal Spend, DSAR)                                   | 5 RevOps agents (Lead Intelligence, CRM Hygiene, Outreach Sequencing, Marketing Performance, Revenue Reporting)                                 |
| **Jurisdiction/Market overlays** | 6 jurisdiction files (UK, EU, US, Pakistan, UAE, GCC)                                                                                 | Market-specific via local configuration file sections                                                                                           |
| **Local configuration**          | `legal.local.md.template` -- negotiation playbook, standard positions, escalation contacts                                            | `sales-marketing.local.md.template` -- ICP, brand voice, competitors, personas, messaging                                                       |
| **Commands**                     | 4 slash commands (`/review-contract`, `/triage-nda`, `/vendor-check`, `/legal-brief`)                                                 | 14 plugin commands (8 Sales + 6 Marketing)                                                                                                      |
| **NEVER rules**                  | Per-skill prohibited actions (never approve contracts, never send legal advice)                                                       | Per-skill prohibited actions (never fabricate data, never send unpersonalised outreach)                                                         |
| **Hooks**                        | `SessionStart` + `PostToolUse` validation                                                                                             | Five Laws compliance check on every outreach output                                                                                             |
| **Evals**                        | Golden-file routing and product tests                                                                                                 | Routing validation + output quality tests                                                                                                       |
| **Governing principle**          | "AI reviews, lawyers decide"                                                                                                          | "Scale the expertise of your top 1%"                                                                                                            |

The pattern is clear: **router + product files + local configuration + NEVER rules + governing principle = domain-specific skill library.** If you are building a skill library for a different domain (HR, finance, procurement, supply chain), this is the template to follow.

## The Complete Directory Structure

For reference, the full library contains 22 files:

```
sales-revops-marketing-skills/
+-- README.md                              # Quick start and directory guide
+-- sales-marketing-global-router.md       # Top-level router (always active)
+-- sales-marketing.local.md.template      # Copy, fill in, rename to .local.md
|
+-- products/                              # One file per plugin command (14 files)
|   +-- prospect-research.md               # /research -- deep prospect brief
|   +-- lead-scoring.md                    # /score -- three-dimension scoring
|   +-- crm-enrichment.md                  # /enrich -- CRM record updates
|   +-- outreach.md                        # /outreach -- personalised messages
|   +-- sequence.md                        # /sequence -- multi-touch sequences
|   +-- pre-call-brief.md                  # /brief -- pre-call preparation
|   +-- follow-up.md                       # /follow-up -- post-meeting drafts
|   +-- pipeline.md                        # /pipeline -- deal health + forecast
|   +-- content-creation.md                # /content -- all content formats
|   +-- campaign-planning.md               # /campaign -- campaign briefs
|   +-- copywriting.md                     # /copy -- ad copy, subject lines
|   +-- performance-analysis.md            # /analyze -- channel performance
|   +-- content-calendar.md                # /calendar -- publishing schedule
|   +-- persona-icp.md                     # /persona -- ICP + buyer personas
|
+-- agents/                                # Persistent autonomous agents (5 files)
    +-- lead-intelligence-agent.md         # Daily signal monitoring + HOT alerts
    +-- crm-hygiene-agent.md               # Scheduled enrichment + data quality
    +-- outreach-sequencing-agent.md       # Sequence lifecycle management
    +-- marketing-performance-agent.md     # Weekly channel performance report
    +-- revenue-reporting-agent.md         # Monday morning revenue dashboard
```

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Trace a Query Through the Architecture

```
I am studying the Sales & Marketing skill library architecture.
Trace this query through all three layers:

Query: "Score this lead: Ahmed Hassan, CTO at a 200-person
fintech startup in Dubai that just raised Series B funding."

For each layer, explain:
1. ROUTER: Which pattern matches? What file is loaded?
   What universal rules apply?
2. PRODUCT FILE: What are the workflow steps? What does the
   three-dimension scoring model produce?
3. LOCAL CONFIGURATION: What ICP criteria would need to be
   configured for a company selling to fintech in the GCC?
   What timing signals are unique to this market?

Then show me what the output would look like if the local
configuration had a GCC-focused ICP definition.
```

**What you are learning:** The three-layer architecture separates concerns cleanly: the router handles classification (what type of task), the product file handles execution (how to do it), and the local configuration handles personalisation (for whom). The GCC variant demonstrates that the architecture works across markets -- the same router and product file produce market-specific outputs when the local configuration is customised.

### Prompt 2: Design a New Product Skill

```
I need to add a product skill to the library that does not
currently exist: a "win/loss analysis" skill that analyses
completed deals (both won and lost) and identifies patterns.

Design the complete product skill file:
1. YAML frontmatter (name, version, description with trigger terms)
2. Workflow steps (what data the agent needs, how it analyses)
3. Output format (structured analysis with patterns, recommendations)
4. NEVER rules (what the agent must not do)
5. The router entry (pattern match for the global router table)

The skill should produce actionable insights that improve
the ICP definition, the scoring model, and the outreach approach.
```

**What you are learning:** Extending the library follows a repeatable pattern: create the skill file with YAML frontmatter, define the workflow, specify the output format, write the NEVER rules, and register in the router. The win/loss analysis skill demonstrates how the library grows organically from operational needs -- every closed deal produces data that should refine the system.

Note that when you extend the library, some new skills may overlap with skills already provided by the Anthropic base plugins — for example, `campaign-planning` and `content-creation` exist in both the base Marketing Plugin and the Agent Factory extension. Lesson 11 covers the three collision resolution patterns (wrapper, override, delegation) and teaches you to build jurisdiction overlays for markets beyond the four that ship with the extension.

### Prompt 3: Compare Domain Libraries

```
Compare the Legal-Ops plugin structure (Chapter 22) to the
Sales & Marketing skill library (Chapter 23).

For each of these architectural components, explain what is
the same and what is different between the two domains:
1. Global router -- how does query classification differ?
2. Product skills -- what structural patterns are shared?
3. Local configuration -- what is the equivalent of the
   negotiation playbook in sales?
4. NEVER rules -- how do governance boundaries differ between
   legal and sales domains?
5. Agent skills -- how do the Legal Ops agents compare to
   the RevOps agents in purpose and design?

Then propose: if I were building a skill library for a third
domain (e.g., HR, procurement, or customer success), what
would the template look like?
```

**What you are learning:** The domain-specific skill library is a repeatable architectural pattern: router + product files + local configuration + NEVER rules + governing principle. Comparing two implementations (legal and sales) reveals the universal structure and the domain-specific variations. This prepares you to build skill libraries for any business function.

---

Continue to [Lesson 11: Extending Plugins for Your Market ->](./11-extending-plugins-for-your-market.md)
