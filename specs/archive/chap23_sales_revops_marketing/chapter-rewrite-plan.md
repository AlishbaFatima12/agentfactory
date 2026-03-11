# Chapter 23 Rewrite Plan — The Revenue Engine

> **Status**: Draft v3 — command syntax fixed (no namespace prefix), connectors/MCP added, create-an-asset integrated, capstone exercises prioritised
> **Original artifact**: `specs/drafts/chap23_sales_revops_marketing/Chapter23_Sales_RevOps_Marketing.md`
> **Branch**: `feat/ch23-revision`
> **Plugin repo**: `panaversity/agentfactory-business-plugins/sales-revops-marketing`

---

## 1. GOVERNING VISION

The original artifact is a practitioner's operating manual. Every section shows the reader using plugins to produce structured business output they can evaluate, iterate on, and deploy. The reader finishes the chapter having built a complete revenue engine — prospect research, lead scoring, CRM enrichment, outreach sequences, campaign planning, performance analysis, and RevOps dashboards — all configured for their business (or a demo business they built in Lesson 1).

**The shipped chapter drifts from this vision.** Lessons 10–15 teach plugin architecture theory: Wrapper/Override/Delegation patterns, collision resolution, router architecture, state machines, progressive connectors. These concepts are not in the original artifact, not needed by the practitioner, and not producible as deployable output. They are engineering concepts for plugin developers, not for sales and marketing operators.

**The rewrite returns to the artifact.** Every lesson produces business output.

**CRITICAL CORRECTION (v2)**: The original artifact's commands (`/research`, `/score`, `/outreach`, `/campaign`, `/analyze`) do not exist as written. Those were spec-level names that never shipped. The actual plugins use different command names and rely heavily on natural-language skill activation. This plan uses the real commands and real invocation patterns from the shipped plugins. See Section 4.

---

## 2. THE ONE RULE

```
EVERY LESSON ENDS WITH A DEPLOYABLE ARTIFACT.

If a lesson does not produce output the student could send, configure,
deploy, or present to their team — the lesson has failed.
```

Deployable artifacts include:

- A research brief ready for a rep to use before a call
- A lead score with routing recommendation
- An outreach message ready for human review and sending
- A campaign brief ready for marketing team review
- A performance analysis with specific action items
- A configured agent producing scheduled output
- A dashboard reporting on pipeline health

Deployable artifacts do NOT include:

- A diagram of a state machine
- An explanation of the Wrapper pattern
- A collision resolution map
- A list of design reasoning principles

---

## 3. THE TWO CASE STUDIES

Every lesson uses one or both case studies to ground the work in concrete business context. The student sees both their world (NexaFlow — emerging market, bootstrapped, relationship-heavy) and the expert model (Meridian — enterprise, GDPR, mature RevOps).

### NexaFlow Technologies (Learner's Peer — ~60%)

```
Company:        NexaFlow Technologies (Pvt) Ltd
Location:       Karachi, Pakistan
Founded:        2021
Employees:      38
Revenue:        PKR 180M (~$640K USD) — profitable, bootstrapped
Product:        Workflow automation platform for mid-market logistics companies
                (warehouse ops, fleet coordination, SLA tracking)
Markets:        Pakistan primary (70%), UAE secondary (20%), UK expansion (10%)
ICP:            VP Ops / Director Ops at regional 3PL operators, 50-400 employees
Sales team:     4 reps (2 Pakistan, 1 UAE, 1 UK)
Marketing:      1 content marketer, freelance designer
Tech stack:     HubSpot CRM (free tier), Mailchimp, LinkedIn
Pain:           Top rep (Farah) closes 340% of quota; other 3 reps average 60%
Goal:           Scale Farah's research depth and outreach quality to the whole team
Brand voice:    Direct, practical, no jargon. "We speak like operators, not vendors."
```

### Meridian Logistics (Expert Model — ~40%)

```
Company:        Meridian Logistics Ltd
Location:       Leeds, UK
Founded:        2014
Employees:      380
Revenue:        £50M (est.)
Sector:         Regional 3PL — warehousing + last-mile delivery
                (Yorkshire and the Midlands)
Key contact:    Sarah Chen, VP Operations (18 months in role, promoted 6 months ago)
Why they matter: HOT prospect for NexaFlow — new major contract win, rapid hiring,
                 Sarah posted about scaling without headcount
CRM status:     Not in CRM — new prospect identified through LinkedIn
```

### Demo Data Principle

```
RULE: All demo data is generated via prompts in Lesson 1.

Students generate NexaFlow's demo data using Cowork:
- 20 closed-won deals (for ICP calibration)
- 5 target prospects (for research/scoring/outreach)
- Current pipeline (10 deals at various stages)
- Campaign history (Q1 results for performance analysis)

The student types ONE prompt and gets a complete demo dataset.
This is their sandbox for the entire chapter.
```

---

## 4. THE ACTUAL PLUGINS — WHAT EXISTS, HOW IT'S INVOKED

### Install All Three in L01

```bash
# Anthropic base plugins
claude plugin install sales@knowledge-work-plugins
claude plugin install marketing@knowledge-work-plugins

# Agent Factory extension plugin
claude plugin install sales-revops-marketing@agentfactory-business
```

The two-phase "base-only then extension" progression is a fiction. Lead scoring, CRM enrichment, multi-touch sales sequences, follow-up, persona/ICP, content calendar, copywriting, and jurisdiction overlays exist ONLY in the extension. The student needs all three from L02 onward.

### What Actually Ships — Complete Inventory

#### Sales Plugin (Anthropic base — `knowledge-work-plugins/sales`)

**3 Commands** (slash-invoked, explicit workflows):

| Command         | Invocation         | What It Does                                                                                     |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| call-summary    | `/call-summary`    | Process call notes/transcript → action items, internal summary, follow-up email                  |
| forecast        | `/forecast`        | Upload CSV or describe pipeline → weighted forecast (best/likely/worst), gap analysis            |
| pipeline-review | `/pipeline-review` | Upload CSV or describe deals → health score, deal prioritisation, risk flags, weekly action plan |

**6 Skills** (auto-activate when prompt matches description):

| Skill                    | Triggers On                          | What It Does                                                            |
| ------------------------ | ------------------------------------ | ----------------------------------------------------------------------- |
| account-research         | "Research [company/person]"          | Company intel, key contacts, news, hiring signals via web search        |
| call-prep                | "Prepare for my call with..."        | Account context, attendee research, agenda, discovery questions         |
| daily-briefing           | "What should I focus on today?"      | Prioritised meetings, pipeline alerts, email priorities, actions        |
| draft-outreach           | "Draft an email to..."               | Research prospect first, then draft personalised outreach               |
| competitive-intelligence | "How do we compare to [competitor]?" | Competitor research, differentiation matrix, sales talk tracks          |
| create-an-asset          | "Create a one-pager for..."          | Landing pages, decks, one-pagers, workflow demos — interactive HTML/PDF |

#### Marketing Plugin (Anthropic base — `knowledge-work-plugins/marketing`)

**7 Commands** (slash-invoked):

| Command            | Invocation            | What It Does                                                                 |
| ------------------ | --------------------- | ---------------------------------------------------------------------------- |
| draft-content      | `/draft-content`      | Blog posts, social, newsletters, landing pages, press releases, case studies |
| campaign-plan      | `/campaign-plan`      | Full campaign brief: objectives, channels, calendar, success metrics         |
| brand-review       | `/brand-review`       | Review content against brand voice, style guide, messaging pillars           |
| competitive-brief  | `/competitive-brief`  | Competitor positioning and messaging comparison                              |
| performance-report | `/performance-report` | Marketing performance report: metrics, trends, optimisation recs             |
| seo-audit          | `/seo-audit`          | Keyword research, on-page analysis, content gaps, technical checks           |
| email-sequence     | `/email-sequence`     | Multi-email nurture flows, onboarding, drip campaigns (lifecycle marketing)  |

**5 Skills** (auto-activate):

| Skill                 | Triggers On                          | What It Does                                                         |
| --------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| content-creation      | "Write a blog post about..."         | Templates, writing best practices, SEO, headlines, CTAs              |
| campaign-planning     | "Plan a campaign to..."              | Frameworks, channels, calendar, budget, metrics                      |
| brand-voice           | "Check this against our brand voice" | Voice docs, attributes, tone adaptation, style guide enforcement     |
| competitive-analysis  | "Analyse our competitors"            | Research methodology, messaging comparison, positioning, battlecards |
| performance-analytics | "How did our campaign perform?"      | Metrics by channel, reporting, trend analysis, attribution           |

#### RevOps Extension Plugin (ours — `sales-revops-marketing@agentfactory-business`)

**0 Commands.** All invocation is natural language → router auto-activates the right skill.

**15 Skills** (router-coordinated):

| Skill                           | Collision With Base                        | What It Adds Beyond Base                                     |
| ------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| `sales-marketing-global-router` | —                                          | Routes to correct skill + jurisdiction overlay               |
| `prospect-research`             | **Override** → `account-research`          | Three-dimension scoring, timing signals, ICP match header    |
| `lead-scoring`                  | **Unique** (no base equivalent)            | Fit (0-40) + Timing (0-40) + Engagement (0-20) = 0-100       |
| `crm-enrichment`                | **Unique**                                 | Contact/account enrichment, timing signal refresh            |
| `outreach`                      | **Override** → `draft-outreach`            | Five Laws enforcement, banned words, jurisdiction compliance |
| `sequence`                      | **Unique**                                 | Multi-touch sales sequences with exit conditions             |
| `pre-call-brief`                | **Override** → `call-prep`                 | ICP-scored context, three-dimension deal health              |
| `follow-up`                     | **Unique**                                 | Post-meeting follow-up with call-referenced personalisation  |
| `pipeline`                      | **Override** → `/pipeline-review` concept  | Scoring integration                                          |
| `content-creation`              | **Wrapper** → base `content-creation`      | Brand voice from local config + non-English                  |
| `campaign-planning`             | **Wrapper** → base `campaign-planning`     | ICP targeting + budget localisation                          |
| `copywriting`                   | **Unique**                                 | Ad copy, subject lines, CTAs, A/B variants                   |
| `performance-analysis`          | **Wrapper** → base `performance-analytics` | ICP-filtered analysis + regional benchmarks                  |
| `content-calendar`              | **Unique**                                 | Publishing schedule, pillar-cluster architecture             |
| `persona-icp`                   | **Unique**                                 | ICP development from closed-won analysis                     |

**5 Agents** (in `agents/`):

| Agent                         | Purpose                                          |
| ----------------------------- | ------------------------------------------------ |
| `lead-intelligence-agent`     | HOT signal monitoring, daily scan, 2-hour alerts |
| `crm-hygiene-agent`           | Weekly Tier 1 enrichment, monthly full pass      |
| `outreach-sequencing-agent`   | Manage sequences, pause on reply, stop on bounce |
| `marketing-performance-agent` | Automated weekly analysis reports                |
| `revenue-reporting-agent`     | Weekly pipeline dashboard, Monday reports        |

### How the Student Invokes Things

```
TWO INVOCATION PATTERNS:

1. NATURAL LANGUAGE (primary — ~80% of interactions)
   Student types: "Research Sarah Chen at Meridian Logistics"
   → Router auto-activates → prospect-research skill
   → Structured research brief produced

   Student types: "Score this lead: Meridian Logistics"
   → Router auto-activates → lead-scoring skill
   → Three-dimension score produced

   Student types: "Draft a LinkedIn message for Sarah Chen"
   → Router auto-activates → outreach skill
   → Five Laws enforced → message drafted

2. EXPLICIT COMMANDS (base plugin workflows)
   Student types: /call-summary
   → Sales plugin command activates → transcript processed

   Student types: /campaign-plan
   → Marketing plugin command activates → campaign brief generated

   Student types: /seo-audit
   → Marketing plugin command activates → SEO analysis

   Note: commands are invoked by name only — no plugin prefix needed.
   The system auto-routes /call-summary to the sales plugin,
   /campaign-plan to the marketing plugin, etc.
```

### Base Plugin Capabilities We MUST Use

These base plugin features are too valuable to ignore. Each is mapped to a lesson:

| Base Capability            | Lesson | How It's Used                                           |
| -------------------------- | ------ | ------------------------------------------------------- |
| `/call-summary`            | L07    | Process demo call transcript → action items + follow-up |
| `/forecast`                | L13    | Weighted pipeline forecast alongside revenue dashboard  |
| `/pipeline-review`         | L13    | Structured pipeline overview enhanced by extension      |
| `create-an-asset`          | L09    | Generate interactive HTML sales one-pager for NexaFlow  |
| `daily-briefing`           | L13    | Morning sales briefing alongside agent deployment       |
| `/seo-audit`               | L09    | SEO audit of cornerstone content                        |
| `/brand-review`            | L09    | Review content assets against brand voice config        |
| `/competitive-brief`       | L02    | Competitor positioning during ICP calibration           |
| `/competitive-brief`       | L11    | Competitive differentiation for campaign optimisation   |
| `/email-sequence`          | L10    | Lifecycle email nurture alongside campaign strategy     |
| `/campaign-plan`           | L10    | Campaign brief generation with ICP extension layer      |
| `/performance-report`      | L11    | Base performance report enhanced by extension analysis  |
| `competitive-intelligence` | L07    | Battlecard generation for competitive deal prep         |

### Connectors — MCP Server Integrations

The base plugins ship with `.mcp.json` files and `CONNECTORS.md` that pre-configure MCP servers for real SaaS tools. Skills use `~~category` placeholders (e.g., `~~CRM`, `~~data enrichment`) that resolve at runtime to whatever MCP server the student has connected.

**This changes the chapter from "agent generates text" to "agent does the work."**

#### Sales Plugin Connectors (14 MCP servers)

| Category                 | Placeholder                   | Pre-configured Servers      | Alternatives                  |
| ------------------------ | ----------------------------- | --------------------------- | ----------------------------- |
| Calendar                 | `~~calendar`                  | Google Calendar, MS 365     | —                             |
| Chat                     | `~~chat`                      | Slack                       | Microsoft Teams               |
| Competitive intelligence | `~~competitive intelligence`  | Similarweb                  | Crayon, Klue                  |
| CRM                      | `~~CRM`                       | HubSpot, Close              | Salesforce, Pipedrive, Copper |
| Data enrichment          | `~~data enrichment`           | Clay, ZoomInfo, Apollo      | Clearbit, Lusha               |
| Email                    | `~~email`                     | Gmail, MS 365               | —                             |
| Knowledge base           | `~~knowledge base`            | Notion                      | Confluence, Guru              |
| Meeting transcription    | `~~conversation intelligence` | Fireflies                   | Gong, Chorus, Otter.ai        |
| Project tracker          | `~~project tracker`           | Atlassian (Jira/Confluence) | Linear, Asana                 |
| Sales engagement         | `~~sales engagement`          | Outreach                    | Salesloft, Apollo             |

#### Marketing Plugin Connectors (11 MCP servers)

| Category             | Placeholder              | Pre-configured Servers | Alternatives                  |
| -------------------- | ------------------------ | ---------------------- | ----------------------------- |
| Chat                 | `~~chat`                 | Slack                  | Microsoft Teams               |
| Design               | `~~design`               | Canva, Figma           | Adobe Creative Cloud          |
| Marketing automation | `~~marketing automation` | HubSpot                | Marketo, Pardot, Mailchimp    |
| Product analytics    | `~~product analytics`    | Amplitude              | Mixpanel, Google Analytics    |
| Knowledge base       | `~~knowledge base`       | Notion                 | Confluence, Guru              |
| SEO                  | `~~SEO`                  | Ahrefs, Similarweb     | Semrush, Moz                  |
| Email marketing      | `~~email marketing`      | Klaviyo                | Mailchimp, Brevo, Customer.io |

#### How Connectors Affect the Chapter

With connectors, the student can:

- **L02**: Enrich prospect data via ZoomInfo/Clay/Apollo (real enrichment, not prompt-estimated)
- **L04**: Push enriched records to HubSpot/Close CRM (real CRM write, not "imagine you have a CRM")
- **L07**: Pull real call transcripts from Fireflies/Gong (not pasted demo notes)
- **L09**: Run `/seo-audit` against Ahrefs/Similarweb data (real keyword/traffic data)
- **L11**: Pull campaign analytics from Amplitude/HubSpot (real performance data)
- **L13**: RevOps agents can monitor real CRM pipeline, send real Slack alerts, update real calendars

Without connectors, everything still works — skills produce high-quality text output using whatever context the student provides in prompts. The connectors upgrade "generate a research brief" to "generate a research brief populated with live ZoomInfo data."

#### Connector Setup in L01

L01 should show connector setup as an optional but recommended step:

```
OPTIONAL: Connect your tools (any of these, all are free-tier compatible)
- HubSpot CRM (free tier): the agent reads/writes your actual CRM
- Google Calendar: the agent schedules follow-ups on your real calendar
- Gmail: the agent drafts emails in your actual inbox (still requires human send)
- Slack: the agent posts alerts to your actual channels
- Notion: the agent reads/writes your knowledge base

Students without accounts: everything works using prompt-provided context.
Students with accounts: the agent operates on your real data.
```

#### Connector Design Rule for Lessons

```
RULE: Every exercise that uses a connector MUST work in BOTH modes:
- WITH connector: "The agent pulls Sarah Chen's LinkedIn activity from Apollo"
- WITHOUT connector: "Paste Sarah Chen's LinkedIn posts from the demo data"

Never write an exercise that REQUIRES a connector. Always show the
prompt-only fallback. Show the connector path as the "if connected" upgrade.
```

---

## 5. LESSON MAP

| #   | Title                                      | Artifact Section       | Produces                                                                          | Error Introduced      |
| --- | ------------------------------------------ | ---------------------- | --------------------------------------------------------------------------------- | --------------------- |
| 01  | The Revenue Engine                         | Introduction + Install | All 3 plugins installed, demo data, first research brief, hallucination detection | Hallucinated Data     |
| 02  | Prospect Intelligence and ICP Calibration  | Part 1                 | Validated ICP config, 5 research briefs, `/competitive-brief`                     | —                     |
| 03  | Lead Scoring                               | Part 2                 | Scoring model, 5 scored leads, routing rules                                      | Miscalibrated Scoring |
| 04  | CRM Enrichment and Data Decay              | Part 3                 | Enriched CRM records, timing signal refresh                                       | —                     |
| 05  | The Five Laws of Outreach                  | Part 4 (Laws)          | 3 personalised outreach messages, Five Laws audit                                 | Compliance Gap        |
| 06  | Multi-Touch Sequences and Follow-Up        | Part 4 (Sequences)     | 6-touch sequence, follow-up templates, `/email-sequence` comparison               | Over-Automation       |
| 07  | Pre-Call Briefs and Meeting Preparation    | Part 5                 | 3 pre-call briefs, `/call-summary`, battlecard via `competitive-intelligence`     | Context Loss          |
| 08  | The Prospect-to-Meeting Pipeline           | End-to-end             | Complete research → score → outreach → brief → call-summary → follow-up pipeline  | —                     |
| 09  | Content Creation and Brand Voice           | Part 6A                | 10 content assets, `create-an-asset`, `/brand-review`, `/seo-audit`               | —                     |
| 10  | Campaign Strategy and the Content Calendar | Part 6B                | Complete 12-week campaign brief via `/campaign-plan`, content calendar            | —                     |
| 11  | Campaign Performance Analysis              | Part 6C                | Weekly analysis via `/performance-report`, 3 optimisation actions                 | —                     |
| 12  | Outreach Compliance and Regional Context   | Jurisdiction           | Jurisdiction-compliant outreach for 3 markets                                     | —                     |
| 13  | RevOps Agents and the Revenue Dashboard    | Part 7                 | 5 agents, `/forecast`, `daily-briefing`, weekly dashboard                         | —                     |
| 14  | The Revenue Engine Sprint                  | Exercises 1–8          | Full sprint: ICP → research → score → outreach → campaign → dashboard             | —                     |

---

## 6. LESSON-BY-LESSON SPECIFICATION

### General Rules (Apply to ALL Lessons)

````
RULE 1:  Open with a business scenario, not a concept definition.
         The first paragraph is a story — a VP who can't scale,
         a rep who missed a deal, a campaign that underperformed.
         Never open with "In this lesson, we will learn..."

RULE 2:  Show the prompt first. Explain the theory after.
         Type "Research Sarah Chen at Meridian Logistics." See the output.
         THEN explain what ICP means. Never teach ICP abstractly first.
         Use natural language prompts (skill auto-activation) for most
         interactions. Use explicit /command-name only where base plugin
         commands exist (see Section 4 inventory). No plugin prefix
         needed — just /call-summary, /forecast, /campaign-plan, etc.

RULE 3:  Every code block is a prompt the student can copy and paste.
         No pseudocode. No "replace [X] with your value."
         Prompts use the NexaFlow/Meridian demo data exactly.

RULE 4:  Every lesson ends with "What You Built" — a numbered list
         of deployable artifacts the student now has.

RULE 5:  Agent Output Taxonomy errors are DISCOVERED, not taught.
         The student runs a command, gets output, and the lesson
         asks: "Look at the revenue figure. Can you verify it from
         a public source?" The student discovers the hallucination.
         Never say "This is an example of Hallucinated Data."

RULE 6:  Three "Try With AI" prompts per lesson.
         Prompt 1: Reproduce the lesson exercise with the demo data.
         Prompt 2: Adapt the exercise to a different scenario.
         Prompt 3: Apply to the student's own business (if they have one)
                   or to a third demo prospect.

RULE 7:  Case study split: NexaFlow in the main text (~60%).
         Meridian Logistics in the expert sidebar or comparison table (~40%).

RULE 8:  No plugin architecture theory.
         Never mention: Wrapper, Override, Delegation, collision resolution,
         router architecture, state machine (as architecture concept),
         progressive connectors (as design pattern).
         The extension plugin is a tool. Teach how to USE it, not how it WORKS.
         If the student needs to know that the extension adds ICP scoring,
         say: "With the extension installed, asking to score a lead now uses
         three-dimension scoring (Fit + Timing + Engagement)." Do not explain
         the Override pattern that makes this possible.

RULE 9:  "The agent researches, drafts, and recommends.
          The sales professional decides and sends."
         This governing principle appears in EVERY lesson where outreach
         is generated. It is not optional. It is not a footnote.

RULE 10: Include COMPLETE sample outputs from the original artifact.
         The Meridian research brief (lines 116-191 of artifact),
         the scoring breakdown (Fit 36 + Timing 37 + Engagement 14 = 87),
         the outreach messages, the campaign brief — these are the most
         valuable part of the artifact. They are NOT references to be
         summarised. They are included VERBATIM in the lesson text so the
         student can compare their own output to the reference.

RULE 11: Demo data prompts use a consistent format:

         ```
         Generate demo data for NexaFlow Technologies' [dataset name].
         Context: NexaFlow sells workflow automation to mid-market logistics
         companies. They are based in Karachi with 38 employees.

         Generate: [specific data requirements]
         Format: [table / structured text / JSON]
         ```
````

---

### L01 — The Revenue Engine

**Duration**: 25 min
**Artifact section**: Introduction + Plugin Architecture
**Produces**: Demo business data, first research brief, hallucination detection skill

#### Opening Scene

The "1% Problem" story: your top rep (Farah) spends 45 minutes researching every prospect before contact. She closes 340% of quota. Your other 3 reps spend 4 minutes on research and average 60% of quota. The gap isn't talent — it's preparation time. This chapter gives every rep Farah's research depth in under 4 minutes.

#### Structure

```
1. THE 1% PROBLEM (narrative opening — 3 paragraphs, no headers)
   - Farah's approach: 45 min research, 5 questions, never pitches
   - The other 3 reps: 4 min research, template emails, low conversion
   - The promise: AI gives every rep Farah's research capacity

2. INSTALL ALL THREE PLUGINS (procedural — copy-paste commands)
   - Install Anthropic Sales + Marketing plugins AND the extension:
     claude plugin install sales@knowledge-work-plugins
     claude plugin install marketing@knowledge-work-plugins
     claude plugin install sales-revops-marketing@agentfactory-business
   - Verify: type "Research Sarah Chen, VP Operations at Meridian
     Logistics, Leeds. I sell workflow automation for logistics companies."
   - Expected output: structured research brief with ICP MATCH header
     (extension's prospect-research skill auto-activated via router)

2B. CONNECT YOUR TOOLS (optional — recommended)
   - Show the connector categories from CONNECTORS.md
   - Minimum recommended: HubSpot CRM (free tier) + Gmail + Google Calendar
   - Optional: Slack (team alerts), Notion (knowledge base), Apollo (enrichment)
   - Students without accounts: skip — everything works with prompt-provided context
   - Students with free HubSpot: the agent reads/writes your real CRM from L04 onward
   - "If connected, the agent works with your real data. If not, you provide context
     in prompts. Both paths produce the same quality output."

3. GENERATE YOUR DEMO BUSINESS (prompt-driven)
   - Student copies a single prompt to generate NexaFlow's demo dataset:
     20 closed-won deals, 5 target prospects, pipeline data, campaign history
   - Output: a structured dataset saved as demo-data.md
   - This is the sandbox for the entire chapter

4. YOUR FIRST RESEARCH BRIEF
   - Natural language prompt: "Research Sarah Chen at Meridian Logistics"
   - Show COMPLETE expected output (artifact lines 116-191 — full
     research brief with WHO/WHAT/WHEN/PAIN/HOOK sections VERBATIM)
   - Student reads the output and evaluates against the reference

5. HALLUCINATION DETECTION (discovery-based)
   - Ask: "Look at the revenue figure for Meridian (£45-60M). Can you
     verify this from a public source?"
   - The student checks Companies House (or tries)
   - Some claims are verifiable. Some are not.
   - Teach the skill: "Before acting on any research brief claim,
     ask: can I independently verify this?"
   - Table: Verifiable vs Unverifiable claims in the sample output

6. CONFIGURE sales-marketing.local.md (skeleton)
   - Copy from plugin directory: sales-marketing.local.md.template → sales-marketing.local.md
     (the template ships with the extension plugin — it's in the plugin root)
   - Fill in NexaFlow's basic ICP: logistics companies, 50-400 employees,
     VP Ops persona, Pakistan/UAE/UK markets
   - Research Meridian again — compare output WITH vs WITHOUT config
   - Note: this skeleton will be completed in L02

7. WHAT YOU BUILT
   - ☑ All three plugins installed and verified (Sales + Marketing + Extension)
   - ☑ Demo business dataset (NexaFlow) generated
   - ☑ First research brief on Meridian Logistics / Sarah Chen
   - ☑ Hallucination detection skill: can distinguish verifiable from
     unverifiable claims in agent output
   - ☑ sales-marketing.local.md skeleton configured
```

#### Try With AI

```
Prompt 1 (reproduce):
"Research Sarah Chen, VP Operations at Meridian Logistics, Leeds.
I sell workflow automation for logistics companies. I want to
understand fit, timing, and the best outreach angle."

What you're learning: How the prospect-research skill structures intelligence
into actionable sections (WHO / WHAT / WHEN / PAIN / HOOK).

Prompt 2 (adapt):
"Research [second demo prospect from your generated dataset].
Compare the research brief to the Meridian brief. Which prospect
has stronger timing signals? Which has more verifiable data?"

What you're learning: Research briefs vary in quality based on how much
public information exists. Data-scarce prospects produce more hallucinations.

Prompt 3 (apply):
"Research a real prospect from your own network — someone you've been
meaning to contact. After reading the brief, mark every claim as
VERIFIED (you can confirm it), PLAUSIBLE (likely true, not confirmed),
or SUSPECT (cannot verify, possibly hallucinated)."

What you're learning: The discipline of evaluating agent output before
acting on it. This is the foundational skill for every subsequent lesson.
```

---

### L02 — Prospect Intelligence and ICP Calibration

**Duration**: 25 min
**Artifact section**: Part 1 (Research) + ICP Configuration
**Produces**: Validated ICP config, 5 research briefs ranked by fit

#### Opening Scene

NexaFlow's top rep Farah knows her ideal customer intuitively — "mid-size 3PL, growing fast, legacy systems, new VP trying to make their mark." But when the other reps ask her to describe her ideal customer, she says "you just know." This lesson turns "you just know" into a data-driven ICP configuration that the AI can use.

#### Structure

```
1. WHY ICP MATTERS (narrative — NOT theory)
   - Farah's 20 best deals: what do they have in common?
   - Student uses the 20 demo closed-won deals generated in L01
   - Prompt: "Analyse these 20 closed-won deals. What patterns do you see
     in company size, industry, buyer persona, trigger event, and sales cycle?"

2. BUILD THE ICP
   - Extension's persona-icp skill auto-activates during ICP prompts
   - Work through: firmographics, technographics, timing signals,
     persona profiles, negative signals ("never buy" patterns)
   - Prompt: "Build an ICP definition for NexaFlow Technologies based on
     these 20 closed-won deals: [paste demo data]"

3. COMPLETE sales-marketing.local.md
   - Fill in the full config: ICP, personas, brand voice, competitor intel
   - Show the complete template with NexaFlow's data filled in

4. VALIDATE THE ICP
   - Prompt: "Score these 5 closed-won deals against NexaFlow's ICP"
   - All 5 should score 60+ (HOT)
   - If any score below 60: the ICP is missing a dimension — debug
   - AUTHOR NOTE: Frame clearly — "We're scoring historical deals to
     validate the ICP, not to prioritise them for outreach. If your best
     deals don't score HOT, your ICP definition is wrong." The lead-scoring
     skill is designed for prospects, not closed-won deals — this is a
     calibration hack that works because Fit scores are retrospective.

5. DEEP RESEARCH ON 5 PROSPECTS
   - Prompt: "Research [prospect name] — build a full intelligence brief"
     (repeat for all 5 demo prospects)
   - Rank by fit, timing, and data availability
   - Show side-by-side: NexaFlow's Pakistan prospect (Karachi)
     vs. Meridian (UK) — different data availability, different hooks
   - WITH CONNECTOR (ZoomInfo/Clay/Apollo): enrichment pulls live data
   - WITHOUT CONNECTOR: research uses web search + demo data context

6. WHAT YOU BUILT
   - ☑ ICP definition validated against 5 closed-won deals
   - ☑ Complete sales-marketing.local.md with all sections filled
   - ☑ 5 research briefs with fit ranking
   - ☑ Understanding of how ICP quality affects research output
```

---

### L03 — Lead Scoring

**Duration**: 25 min
**Artifact section**: Part 2
**Produces**: Scoring model configuration, 5 scored leads with routing

#### Opening Scene

Your CRM says Meridian Logistics is a "warm lead." What does that mean? Someone opened an email? The company matches your industry filter? "Warm" is not actionable. This lesson replaces gut instinct with a three-dimension scoring model: Fit (do they match your ICP?), Timing (is something happening RIGHT NOW that makes them likely to buy?), and Engagement (have they shown interest?).

#### Structure

```
1. WHY MOST LEAD SCORING FAILS (narrative, not theory)
   - Two scoring failures from NexaFlow's history:
     - A "hot" lead that was a terrible fit (high engagement, low fit)
     - A perfect-fit company that was scored "cold" (no engagement tracked,
       but massive timing signals missed)

2. THE THREE-DIMENSION MODEL
   - Fit Score: 0–40 (firmographic + technographic match)
   - Timing Score: 0–40 (external events — funding, hiring, contracts)
   - Engagement Score: 0–20 (email opens, website visits, content downloads)
   - Total: 0–100
   - Table: Score → Classification → Recommended Action

3. SCORE ALL 5 PROSPECTS
   - Prompt: "Score this lead: [prospect name and data]" (for each prospect)
   - Show the full output for Meridian (87/100 HOT — from the artifact)
   - Compare scores across 5 prospects — rank them

4. MISCALIBRATED SCORING (discovery)
   - One demo prospect scores 72 (WARM) but Farah says "that's our best
     prospect — I'd call them today"
   - Why? The scoring model underweights a timing signal Farah recognises
   - Student adjusts point weights and re-scores
   - Lesson: the model is only as good as the weights you configure

5. ROUTING RULES
   - Table: HOT → immediate outreach / WARM → nurture sequence /
     CULTIVATE → quarterly check / NOT YET → monitor
   - Configure routing: who gets which leads, what SLA applies

6. WHAT YOU BUILT
   - ☑ Three-dimension scoring model configured in local config
   - ☑ 5 prospects scored and ranked
   - ☑ Scoring calibration validated against expert judgment
   - ☑ Routing rules defined for each score tier
```

---

### L04 — CRM Enrichment and Data Decay

**Duration**: 20 min
**Artifact section**: Part 3
**Produces**: Enriched CRM records, timing signal refresh report

#### Opening Scene

18 months ago, NexaFlow added Raza Ahmed to the CRM as "COO, TechBridge Solutions, Lahore." Today, Raza is VP Engineering at a different company in Islamabad. The CRM record is 100% wrong. And nobody knows. CRM data decays at ~30% per year. This lesson stops the decay.

#### Structure

```
1. THE DATA DECAY PROBLEM (narrative with demo numbers)
   - NexaFlow's CRM: 340 contacts, 120 companies
   - Estimate: ~100 contacts have stale data (role change, email change,
     company change)
   - The cost: 3 reps waste 15+ hours/month calling wrong numbers,
     emailing dead addresses, pitching to people who left

2. RUN ENRICHMENT
   - Prompt: "Enrich these 5 accounts: [paste prospect data from L02]"
   - Extension's crm-enrichment skill auto-activates
   - Show: what changed, what was confirmed, new timing signals found
   - Highlight any contact whose role changed (requires re-routing)
   - WITH CONNECTOR (HubSpot/Close): reads + writes your real CRM records
   - WITHOUT CONNECTOR: paste prospect data, get enriched output to apply manually

3. TIMING SIGNAL REFRESH
   - For each enriched account: are there new HOT signals?
   - Show: a prospect that was CULTIVATE (score 42) in Q1 just won a
     major contract → timing score jumps → new score 67 → now WARM
   - This is the lead intelligence that was sitting in the CRM unseen

4. ENRICHMENT SCHEDULE
   - Configure: Tier 1 accounts monthly, HOT leads weekly,
     triggered enrichment within 24 hours of web activity
   - Show the configuration in sales-marketing.local.md

5. WHAT YOU BUILT
   - ☑ 5 accounts enriched with current data
   - ☑ Timing signals refreshed — new HOT/WARM signals identified
   - ☑ Stale records flagged for update
   - ☑ Enrichment schedule configured
```

---

### L05 — The Five Laws of Outreach

**Duration**: 25 min
**Artifact section**: Part 4 (Five Laws + outreach skill)
**Produces**: 3 personalised outreach messages, Five Laws compliance audit

#### Opening Scene

NexaFlow's rep Ahmed sends 40 LinkedIn messages a week. His reply rate: 2%. Farah sends 8. Her reply rate: 35%. The difference isn't volume — it's the five things Farah does that Ahmed doesn't. This lesson encodes Farah's approach into five non-negotiable laws that the AI enforces on every outreach message.

#### Structure

```
1. THE FIVE LAWS (taught through Farah's practice, not as theory)
   - Law 1: Reference something specific and real
   - Law 2: Lead with their problem, not your product
   - Law 3: One ask, one clear next step
   - Law 4: Short (email: 150 words max, LinkedIn: 100 words max)
   - Law 5: Sound like a person, not a company
   - Table: "17 Banned Words" — leverage, synergy, best-in-class,
     seamless, robust, game-changing, revolutionary, etc.

2. DRAFT OUTREACH FOR MERIDIAN
   - Prompt: "Draft a LinkedIn DM for Sarah Chen at Meridian Logistics.
     Hook: they just expanded their Leeds warehouse by 40%."
   - Extension's outreach skill auto-activates (Five Laws enforced)
   - Show: LinkedIn DM draft + follow-up email (from the artifact)
   - Student evaluates each law against the output

3. COMPLIANCE GAP (discovery)
   - Prompt: "Draft outreach for [Pakistan prospect]" (different context)
   - The agent produces UK-style outreach for a Karachi prospect
   - Ask: "Is this outreach legal and culturally appropriate in Pakistan?"
   - Student identifies the gap: no jurisdiction awareness yet
   - Foreshadow: L13 adds jurisdiction overlays to fix this

4. PRODUCE 3 OUTREACH MESSAGES
   - Top 3 prospects from L03 scoring
   - Different channels: LinkedIn DM, email, WhatsApp (Pakistan)
   - Student audits each against the Five Laws
   - Iterate any message that violates a law

5. WHAT YOU BUILT
   - ☑ Five Laws of Outreach understood through practice (not theory)
   - ☑ 3 personalised outreach messages (top 3 prospects)
   - ☑ Five Laws compliance audit completed
   - ☑ Compliance Gap error type discovered (cultural mismatch)
```

---

### L06 — Multi-Touch Sequences and Follow-Up

**Duration**: 25 min
**Artifact section**: Part 4 (Sequences)
**Produces**: Complete 6-touch sequence, follow-up templates

#### Opening Scene

Sarah Chen didn't respond to your LinkedIn message. Now what? Most reps either give up or send the same message again. Farah follows up five more times over 21 days — each touch adding new value, never repeating, never pitching. By touch 4, Sarah connects. By touch 5, she replies. This lesson builds that sequence for every prospect.

#### Structure

```
1. THE SEQUENCE PROBLEM (narrative)
   - Single-touch outreach: 5% response rate
   - 6-touch sequence with value adds: 25-35% response rate
   - But most reps can't write 6 unique, personalised touches
     for every prospect — the cognitive load is too high

2. BUILD THE MERIDIAN SEQUENCE
   - Natural language: "Build a 6-touch, 21-day outreach sequence for
     Sarah Chen at Meridian Logistics. Mix LinkedIn and email.
     Goal: discovery call. Tone: peer-level, no pitch."
   - sequence skill auto-activates
   - Show COMPLETE output (from the artifact — all 6 touches VERBATIM)
   - Explain the logic: value adds, not asks; Touch 3 is content
     share, not pitch; Touch 6 is graceful close

2B. SALES SEQUENCES vs MARKETING SEQUENCES
   - Run /email-sequence with prompt: "Create a 5-email onboarding
     nurture sequence for new NexaFlow trial users. Goal: convert to
     paid within 14 days."
   - Compare the output to the Meridian sales sequence from step 2:
     * Marketing sequence: generic to a segment, lifecycle triggers
     * Sales sequence: personalised to Sarah Chen, Five Laws enforced
   - Both are useful. Different purpose. Student identifies the key
     difference: personalisation depth and exit conditions.

3. OVER-AUTOMATION (discovery)
   - Ask: "Look at Touch 5. Does it reference anything specific about
     Sarah? Or has the personalisation decayed to generic?"
   - Student identifies: by Touch 4-5, the agent may lose the specific
     context that made Touch 1 powerful
   - Lesson: personalisation degrades over sequence length — the later
     touches need MANUAL review and enhancement
   - "Should the agent have stopped before touch #5?"

4. FOLLOW-UP TEMPLATES
   - Natural language: "Write a follow-up email after my discovery
     call with Sarah Chen at Meridian. She liked the automation
     features and wants to see a demo next week."
   - follow-up skill auto-activates
   - Show: follow-up email that references specific conversation points
   - Student compares: follow-up WITH call notes vs WITHOUT

5. EXIT CONDITIONS
   - Reply to any touch → exit sequence, brief the rep
   - Bounce → switch channel
   - Unsubscribe → stop immediately, log in CRM
   - No response after 6 → move to WARM nurture, do not re-sequence
     for 90 days

6. WHAT YOU BUILT
   - ☑ Complete 6-touch, 21-day outreach sequence for top prospect
   - ☑ Follow-up templates for post-meeting and post-demo
   - ☑ Over-Automation error type discovered (personalisation decay)
   - ☑ Exit conditions defined (reply, bounce, unsubscribe, silence)
```

---

### L07 — Pre-Call Briefs and Meeting Preparation

**Duration**: 25 min
**Artifact section**: Part 5
**Produces**: 3 pre-call briefs with discovery questions

#### Opening Scene

Tomorrow at 10am, NexaFlow's rep Ahmed has a discovery call with a prospect he's never spoken to. He opens the CRM, reads a one-line note ("met at expo, interested in automation"), and wings it. Meanwhile, Farah walks into every call with a one-page brief: who she's talking to, what she knows, what questions to lead with, what objections to anticipate. This lesson gives every rep Farah's brief.

#### Structure

```
1. THE INTELLIGENCE YOUR REP NEEDS (narrative)
   - 5 things Farah always knows before a call:
     quick context, call goal, discovery questions,
     anticipated objections, success criteria

2. BUILD THE MERIDIAN PRE-CALL BRIEF
   - Natural language: "Prepare me for a discovery call with Sarah Chen
     at Meridian Logistics tomorrow. 30-minute call. First conversation."
   - pre-call-brief skill auto-activates
   - Show COMPLETE output (from artifact — questions, objections, criteria VERBATIM)
   - Student reads and evaluates: are these questions good?

2B. COMPETITIVE BATTLECARD (base Sales plugin skill)
   - Natural language: "How do we compare to [Competitor A]?"
   - competitive-intelligence skill auto-activates
   - Show: differentiation matrix, talk tracks, where we win/lose
   - Student adds this intel to the pre-call brief

3. CONTEXT LOSS (discovery)
   - Build a brief for a prospect that was researched in L02
     but where the follow-up is 3 weeks later
   - Ask: "Does this brief reference the research from L02?
     Or has the agent lost context?"
   - If context is lost: the brief is generic, not personalised
   - Lesson: agent context degrades — always feed the research
     brief into the pre-call prompt

4. BUILD 3 BRIEFS
   - For the top 3 prospects from L03 scoring
   - Different call types: discovery, demo, follow-up
   - Each brief includes: context, goal, questions, objections,
     success criteria

5. OBJECTION HANDLING (from the artifact)
   - Show 3 common objections and responses (Meridian examples)
   - "We're too busy right now" → timing frame response
   - "We already have a WMS" → complementary positioning
   - "We're not ready to buy" → qualify, don't sell

6. PROCESS A CALL TRANSCRIPT (base Sales plugin command)
   - /call-summary
   - WITH CONNECTOR (Fireflies/Gong): pull real transcript automatically
   - WITHOUT CONNECTOR: paste demo call notes/transcript for Meridian
   - Show: action items, internal summary, draft follow-up email
   - This is the bridge from brief → call → post-call follow-up

7. WHAT YOU BUILT
   - ☑ 3 pre-call briefs with tailored discovery questions
   - ☑ Competitive battlecard for top competitor
   - ☑ Call summary with action items from /call-summary
   - ☑ Objection handling responses for 3 common objections
   - ☑ Context Loss error type discovered (agent forgets earlier research)
   - ☑ Understanding: always feed prior context into brief prompts
```

---

### L08 — The Prospect-to-Meeting Pipeline

**Duration**: 25 min
**Artifact section**: End-to-end synthesis (Parts 1–5)
**Produces**: Complete pipeline for one prospect (research → score → outreach → brief → follow-up)

#### Opening Scene

In L01–L07, you built individual pieces: research, scoring, outreach, sequences, briefs. But NexaFlow's reps don't execute individual commands — they run a pipeline. A new prospect appears → research → score → if HOT, outreach → if they respond, brief → after the call, follow-up. This lesson runs the full pipeline for one prospect, end to end, in one session.

#### Structure

```
1. THE PIPELINE (procedural — step by step)

   Step 1: Research
   - New prospect: [5th demo prospect — unused from L02]
   - Prompt: "Research [prospect name] — full intelligence brief"
   - Extension's prospect-research skill auto-activates

   Step 2: Score
   - Prompt: "Score this lead: [prospect name and brief data]"
   - Extension's lead-scoring skill → three-dimension score
   - Routing decision: HOT → proceed to outreach

   Step 3: Outreach
   - Prompt: "Draft a LinkedIn DM for [prospect], referencing [hook]"
   - Extension's outreach skill → Five Laws enforced
   - Five Laws check

   Step 4: Sequence
   - Prompt: "Build a 6-touch, 21-day outreach sequence for [prospect]"
   - Extension's sequence skill → exit conditions included
   - Review exit conditions

   Step 5: Brief
   - Assume prospect responds to Touch 2 — discovery call booked
   - Prompt: "Prepare a pre-call brief for my discovery call with [prospect]"
   - Extension's pre-call-brief skill auto-activates
   - Review discovery questions

   Step 6: Follow-up
   - Assume call went well — next step booked
   - Prompt: "Write a follow-up email. Call notes: [paste notes]"
   - Extension's follow-up skill auto-activates
   - Review: does the follow-up reference specific conversation points?

2. GARBAGE IN, GARBAGE OUT
   - Run the same pipeline but with a WEAK ICP config
   - Show: research is generic, score is unreliable, outreach is bland
   - The pipeline amplifies whatever you put into it —
     good config produces great output, bad config produces garbage
   - This is why L02 (ICP calibration) is the most important lesson

3. THE TIME COMPARISON
   - Time to complete full pipeline with AI: ~20 minutes
   - Estimated time for Farah to do this manually: 3-4 hours
   - Estimated time for Ahmed to do this manually: he doesn't
     (he skips research and sends template emails)

4. WHAT YOU BUILT
   - ☑ Complete prospect-to-meeting pipeline (end to end)
   - ☑ Understanding: the pipeline amplifies config quality
   - ☑ Time comparison: AI vs manual for a single prospect
```

---

### L09 — Content Creation and Brand Voice

**Duration**: 25 min
**Artifact section**: Part 6A
**Produces**: 10 content assets from 1 cornerstone piece

#### Opening Scene

NexaFlow's content marketer, Zara, produces one LinkedIn article per week. It takes her two days: research, outline, draft, edit, review. Meanwhile, their competitor publishes three articles, two case studies, and a weekly newsletter. The gap isn't quality of thinking — it's production capacity. This lesson gives Zara the capacity to produce 10 assets from every cornerstone piece she writes.

#### Structure

```
1. CONFIGURE BRAND VOICE (in sales-marketing.local.md)
   - NexaFlow's voice: direct, practical, operator-level, no marketing fluff
   - Content pillars: operational excellence, sector intelligence, technology
   - Persona-specific voice guide: VP Ops, CFO, CEO

2. CREATE THE CORNERSTONE PIECE
   - Prompt: "Write a 1,200-word LinkedIn article on why 3PL operators who
     survived the 2024-25 delivery cost crunch are positioned to win.
     Target audience: VP Ops at mid-market logistics companies."
   - Extension's content-creation skill auto-activates (brand voice,
     ICP-filtered content)
   - Review the output against the brand voice config

2B. BRAND VOICE CHECK — /brand-review
   - Run: /brand-review on the cornerstone article
   - This is a base marketing plugin command — runs even without extension
   - Shows: brand consistency score, tone analysis, suggested adjustments
   - Compare: base brand-review vs. extension's ICP-tuned brand voice
     (extension adds persona-specific voice matching)

3. THE CONTENT MULTIPLICATION (from the artifact — Exercise 6)
   - From the one article, produce 10 assets:
     LinkedIn article, CEO post (3 variants), newsletter, social carousel,
     cold email hook, sales one-pager, ad copy (5 variants),
     subject lines (8 variants), webinar outline, FAQ post
   - Prompt: "From this cornerstone article, create an asset tree with
     10 derivative content pieces across these channels: [list]"
   - Extension's content-creation skill handles the multiplication

3B. SEO AUDIT — /seo-audit
   - Run: /seo-audit on the cornerstone article
   - Base marketing plugin command — checks keyword targeting, readability,
     metadata suggestions
   - WITH CONNECTOR (Ahrefs/Similarweb): audit pulls real keyword + traffic data
   - WITHOUT CONNECTOR: audit uses general SEO best practices
   - Apply SEO recommendations to the cornerstone before distributing

4. CREATE A SALES ASSET — create-an-asset (Sales plugin skill)
   - Prompt: "Create an interactive one-pager for Meridian Logistics
     showing how NexaFlow solves their warehouse scaling problem."
   - The Sales plugin's create-an-asset skill auto-activates
   - Produces: interactive HTML/PDF deliverable the student can
     actually send with a proposal
   - This is the most technically impressive base skill — 868 lines,
     generates deployable visual artifacts (not just text)
   - Student compares: text-based content multiplication (step 3)
     vs. interactive sales asset (this step)

5. REVIEW AGAINST BRAND VOICE
   - For each asset: does it sound like NexaFlow or like a generic vendor?
   - Identify assets that need the most iteration (typically: CEO post,
     ad copy — both need to feel personal)
   - Student iterates until brand voice is consistent

6. WHAT YOU BUILT
   - ☑ Brand voice configuration in local config
   - ☑ 1 cornerstone content piece (LinkedIn article) — SEO-audited
   - ☑ 10 derivative assets across channels
   - ☑ 1 interactive sales one-pager (create-an-asset) — deployable
   - ☑ Content multiplication skill: 1 piece → 10 distribution-ready assets
   - ☑ Used base /brand-review, /seo-audit, and create-an-asset
```

---

### L10 — Campaign Strategy and the Content Calendar

**Duration**: 25 min
**Artifact section**: Part 6B
**Produces**: Complete 12-week campaign brief, weekly content calendar

#### Opening Scene

NexaFlow needs 50 qualified leads in Q2. Budget: PKR 7M (~$25K). Team: Zara (content), freelance designer, 4 sales reps. No events budget. How do you turn $25K into 50 leads that the sales team will actually work? This lesson builds the plan.

#### Structure

```
1. DEFINE THE GOAL (not "more leads" — a specific, measurable target)
   - 50 HOT-scored leads (score 60+) in 12 weeks
   - Target: VP Ops and COO at Pakistan/UAE/UK 3PL operators
   - Budget: $25K across channels
   - Constraint: small team, no events

2. RUN /campaign-plan
   - This is a base marketing plugin command
   - Full prompt (from artifact): goal, audience, product, budget,
     timeline, constraints
   - Show: complete campaign brief output (from artifact)
   - Student reads: channel mix, content plan, success metrics,
     risk, budget breakdown
   - Then: extension's campaign-planning skill auto-activates,
     adding ICP targeting + budget localisation for Pakistan/UAE/UK markets

3. EVALUATE THE BRIEF
   - Is the channel mix appropriate for NexaFlow's markets?
     (LinkedIn sponsored may work differently in Pakistan vs UK)
   - Does the team have capacity to execute the content plan?
   - Are the success metrics leading indicators or vanity metrics?

4. BUILD THE EMAIL NURTURE — /email-sequence
   - Run: /email-sequence for the campaign's email nurture track
   - Base marketing plugin command — generates sequenced email content
   - Compare: base email sequence vs. extension's sequence skill
     (extension adds Five Laws compliance, exit conditions, reply monitoring)
   - Student evaluates: which version is more personalised?

5. BUILD THE CONTENT CALENDAR
   - Prompt: "Create a 12-week content calendar for this campaign.
     Each entry: content title, format, target persona, channel,
     publish date, CTA."
   - Extension's content-calendar skill auto-activates
   - Show as a table

6. DEFINE THE MEASUREMENT FRAMEWORK
   - What metrics weekly? Threshold for pausing a channel?
     Threshold for reallocating budget?
   - Configure the marketing performance agent (L13) to report weekly

7. WHAT YOU BUILT
   - ☑ Complete 12-week campaign brief with budget allocation
   - ☑ Email nurture sequence (compared base vs. extension)
   - ☑ Weekly content calendar with 36+ content entries
   - ☑ Measurement framework with thresholds and owners
   - ☑ Understanding: how to evaluate a campaign brief critically
```

---

### L11 — Campaign Performance Analysis

**Duration**: 25 min
**Artifact section**: Part 6C
**Produces**: Weekly analysis report with 3 optimization recommendations

#### Opening Scene

It's Week 5 of NexaFlow's campaign. The numbers look... okay? Downloads are above target. LinkedIn CTR is just below benchmark. Email click rate is weak. But what should Zara actually DO differently next week? Most marketing teams stare at dashboards and draw intuitive conclusions. This lesson teaches the agent to go deeper — and gives Zara specific, actionable optimisation recommendations every week.

#### Structure

```
1. THE DEMO DATA: WEEK 5 CAMPAIGN RESULTS
   - Student generates demo campaign data using prompt:
     "Generate Week 5 performance data for NexaFlow's Q2 campaign.
      Include: whitepaper downloads (above target), LinkedIn impressions
      (above target), LinkedIn CTR (just below benchmark), email open
      rate (strong), email click rate (weak), cost per download,
      cost per HOT lead, trade press performance (below expectation)."

2. RUN /performance-report
   - Base marketing plugin command
   - WITH CONNECTOR (Amplitude/HubSpot): pulls real campaign analytics
   - WITHOUT CONNECTOR: paste the demo data from step 1
   - Show: the base performance report output

2B. COMPARE: extension's performance-analysis skill
   - Extension wraps the base report, adding:
     ICP-filtered analysis (are the leads ICP-matched?),
     regional benchmarks (Pakistan vs UK vs UAE channel norms),
     three-dimension scoring integration
   - Show BOTH outputs side by side
   - Student identifies: what the extension adds beyond the base

3. EVALUATE THE RECOMMENDATIONS
   - For each of the 3 recommendations:
     Is this specific enough to act on?
     Is the expected impact realistic?
     Can NexaFlow's small team actually execute this?
   - If a recommendation requires resources they don't have:
     iterate with the agent for alternatives

4. COMPETITIVE CONTEXT — /competitive-brief
   - Run: /competitive-brief for NexaFlow's top competitor
   - Base marketing plugin command — competitor positioning analysis
   - Use the competitive intel to refine campaign messaging
   - This gives Zara competitive differentiation for next week's content

5. THE WEEKLY CADENCE
   - Monday: review channel performance
   - Wednesday: sales + marketing align on lead quality
   - Friday: /performance-report + extension analysis
   - Show the cadence as a recurring workflow

6. WHAT YOU BUILT
   - ☑ Weekly campaign analysis with 3 specific optimisation actions
   - ☑ Budget reallocation recommendation based on channel performance
   - ☑ Competitive brief for differentiated positioning
   - ☑ Weekly review cadence configured
   - ☑ Understanding: actionable analysis vs observation-only reporting
```

---

### L12 — Outreach Compliance and Regional Context

**Duration**: 25 min
**Artifact section**: Jurisdiction overlays
**Produces**: Jurisdiction-compliant outreach for 3 markets

#### Opening Scene

NexaFlow sells into three markets: Pakistan, UAE, and UK. The same outreach message that works in Karachi (WhatsApp-first, relationship-heavy, warm referral framing) is illegal in London (cold WhatsApp B2B outreach violates PECR) and culturally wrong in Dubai (formal titles, Arabic greeting, different business norms). This lesson ensures every message is legal and culturally appropriate for its market.

#### Structure

```
1. THE THREE MARKETS (narrative — real compliance rules)

   Pakistan (PECA 2016):
   - No explicit opt-in requirement for B2B email (but ISP spam rules apply)
   - WhatsApp is the primary B2B channel (unlike EU where it's risky)
   - Cultural: relationship introduction, formal respect, warm tone
   - Language: English + Urdu professional mix

   UK (GDPR + PECR):
   - B2B email: legitimate interest basis allowed for relevant outreach
   - Cold calling: TPS check required before dialing
   - WhatsApp: NOT recommended for cold B2B (PECR consent concerns)
   - Cultural: direct, professional, understated, no hard sell

   UAE / GCC:
   - Federal Decree-Law No. 45/2021 on personal data protection
   - WhatsApp: acceptable for B2B (widely used for business)
   - Cultural: formal titles (Sheikh, Sayyed), Arabic salutation,
     relationship-building before business
   - Timing: Sunday–Thursday working week

2. THE JURISDICTION OVERLAYS
   - The extension plugin includes 4 jurisdiction overlays
   - Prompt: "Draft outreach for [prospect] — market: [Pakistan/UK/UAE]"
   - Extension routes to correct jurisdiction overlay automatically
   - Show: how the output adapts (channel, tone, legal disclaimers)

3. PRODUCE COMPLIANT OUTREACH FOR 3 MARKETS
   - Pakistan prospect: WhatsApp message, Urdu-influenced English
   - UK prospect (Meridian/Sarah Chen): LinkedIn DM, GDPR-aware
   - UAE prospect: Email, formal Arabic greeting, relationship framing

4. THE COMPLIANCE CHECK
   - For each message: is this legal? Is this culturally appropriate?
   - Student evaluates against the jurisdiction rules
   - If a message violates: iterate with the agent

5. WHAT YOU BUILT
   - ☑ Jurisdiction-compliant outreach for Pakistan, UK, UAE
   - ☑ Understanding: how compliance rules differ across markets
   - ☑ Cultural adaptation skill: same prospect, different market → different approach
   - ☑ Compliance checklist for each market
```

---

### L13 — RevOps Agents and the Revenue Dashboard

**Duration**: 30 min
**Artifact section**: Part 7 + Exercises 7–8
**Produces**: 5 configured agents, pipeline analysis, revenue dashboard, forecast

#### Opening Scene

Until now, every command required you to type a prompt. NexaFlow's reps need to remember to run research when a new prospect appears, check scores when signals change, enrich when data goes stale. What if the system did this automatically? RevOps agents run on schedules — monitoring signals, enriching CRM data, managing sequences, analysing performance, and reporting on pipeline — without a human typing a single prompt.

#### Structure

```
1. THE 5 REVOPS AGENTS (what each does — from the artifact)

   Agent 1: Lead Intelligence Agent
   - Monitors: funding, leadership changes, contracts, hiring, posts
   - Trigger: any HOT signal → alert rep within 2 hours
   - Schedule: daily scan, weekly digest

   Agent 2: CRM Hygiene Agent
   - Monitors: stale records (>30 days since enrichment)
   - Action: automatic enrichment, role change flagging
   - Schedule: weekly (Tier 1), monthly (all accounts)

   Agent 3: Outreach Sequencing Agent
   - Monitors: sequence progress, opens, clicks, replies
   - Action: trigger next touch, pause on reply, stop on bounce
   - Schedule: continuous (event-driven)

   Agent 4: Marketing Performance Agent
   - Monitors: campaign channels (LinkedIn, email, GA4)
   - Action: weekly analysis report with optimisation recs
   - Schedule: every Friday

   Agent 5: Revenue Reporting Agent
   - Monitors: pipeline, conversion rates, forecast
   - Action: weekly revenue dashboard
   - Schedule: every Monday

   CONNECTOR NOTE: With HubSpot/Close + Slack + Google Calendar connected,
   these agents can monitor real CRM pipeline, send real Slack alerts,
   and schedule real calendar events. Without connectors, agents produce
   text output the student reviews manually.

2. PIPELINE ANALYSIS — /pipeline-review
   - Run: /pipeline-review with demo pipeline data (10 deals)
   - Base sales plugin command — structured pipeline overview
   - Then: extension's pipeline skill auto-activates, adding
     three-dimension scoring integration + deal-level health scores
   - Identify: at-risk deals, strongest closes, forecast gaps

3. SALES FORECAST — /forecast
   - Run: /forecast for NexaFlow's pipeline
   - Base sales plugin command — revenue projection model
   - Show: weighted pipeline, best/worst/likely scenarios
   - Student evaluates: are the assumptions realistic for NexaFlow's
     sales cycle length?

4. BUILD THE REVENUE DASHBOARD
   - Define metrics (from artifact Exercise 8):
     HOT leads generated, lead-to-SAL conversion, pipeline created,
     average deal size, pipeline at risk, close rate, CAC by channel
   - Run the dashboard for NexaFlow's demo data
   - Produce the weekly executive email (5 bullets, 150 words)

5. THE DAILY BRIEFING
   - Use the sales plugin's daily-briefing skill (auto-activates)
   - Prompt: "Give me today's sales briefing for NexaFlow."
   - Shows: deals closing this week, meetings today, signals to act on
   - Configure this as the rep's morning routine
   - AUTHOR NOTE: daily-briefing is a manual invocation, not an autonomous
     agent. It sits here because L13 teaches the business rhythm. If L13
     feels overloaded during writing, move daily-briefing to L08 step 3
     (after "the time comparison" → "and here's how you start each day").

6. CONFIGURE AGENT SCHEDULES
   - Show: how each agent's schedule maps to the business rhythm
   - Monday: Revenue dashboard + /forecast
   - Wednesday: CRM hygiene report
   - Friday: Marketing performance analysis
   - Daily: Sales briefing (daily-briefing skill)
   - Continuous: Lead intelligence alerts + sequence management

7. WHAT YOU BUILT
   - ☑ 5 RevOps agents understood and configured
   - ☑ Pipeline health audit with deal-level recommendations
   - ☑ Sales forecast (3 scenarios)
   - ☑ Daily sales briefing configured
   - ☑ Weekly revenue dashboard with executive summary
   - ☑ Agent schedule mapped to business rhythm
```

---

### L14 — Applied Practice: The Full Revenue Engine

**Duration**: 45 min
**Artifact section**: Exercises 1–8
**Produces**: Complete sprint on 5 new prospects + campaign + dashboard

#### Opening Scene

This is the capstone. No new concepts. You have built every component of the revenue engine across 13 lessons. In this session, you run the complete sales workflow for 5 new prospects (start to finish), build a full campaign, and produce the revenue dashboard. By the end, you have a working revenue engine for NexaFlow — or for your own business.

#### Structure

```
MINIMUM VIABLE CAPSTONE (30 min — exercises 1, 2, 4, 7)
These four exercises constitute the core loop. Complete these first.

PART A: THE RESEARCH-TO-MEETING SPRINT (15 min — REQUIRED)

EXERCISE 1: Validate Your ICP (from artifact Exercise 1)
- Student already has NexaFlow's ICP from L02
- Validate: score 5 closed-won deals, all should be 60+
- If calibration has drifted since L02: refine

EXERCISE 2: The Research and Outreach Sprint (from artifact Exercise 2)
- 5 new prospects (generated via prompt or from student's network)
- For each: research prompt → scoring prompt → rank
- Top 3: outreach prompt with Five Laws audit
- Run /call-summary for the #1 prospect's discovery call
- Deliverable: 5 briefs, 5 scores, 3 outreach messages, 1 call summary

EXERCISE 3: Ghostwrite a Full Sequence (BONUS — from artifact Exercise 4)
- Pick the #1 prospect from the sprint
- Build a 6-touch, 21-day, mixed-channel sequence
- Evaluate each touch against the Five Laws
- Iterate until all 6 touches pass

PART B: THE CAMPAIGN + CONTENT ENGINE (10 min — REQUIRED)

EXERCISE 4: Full Campaign Brief (from artifact Exercise 5)
- Define: 50 HOT leads, $25K budget, 12 weeks, VP Ops + COO audience
- Run /campaign-plan → complete brief
- Build content calendar → week-by-week schedule
- Deliverable: campaign brief + calendar

EXERCISE 5: Content Factory — 10 Assets (BONUS — from artifact Exercise 6)
- From a cornerstone asset, produce 10 derivative assets
- Run /brand-review on 3 key pieces
- Review: brand voice consistency across all 10

PART C: THE REVENUE DASHBOARD (5 min — REQUIRED)

EXERCISE 6: Pipeline Health Audit (BONUS — from artifact Exercise 7)
- Run /pipeline-review on demo pipeline data
- Run /forecast for 3-scenario projection
- Produce 3 deal health briefs for top opportunities

EXERCISE 7: The RevOps Dashboard (from artifact Exercise 8)
- Configure Revenue Reporting Agent with all metrics
- Produce weekly dashboard + executive email (5 bullets, 150 words)
- Define leading indicator alert: HOT-to-SAL conversion rate drop

Note: Artifact Exercise 3 (Build the Scoring Model) is covered in L03.
All 8 artifact exercises are mapped: Ex1→Ex1, Ex2→Ex2, Ex3→L03,
Ex4→Ex3(bonus), Ex5→Ex4, Ex6→Ex5(bonus), Ex7→Ex6(bonus), Ex8→Ex7.

WHAT YOU BUILT (Chapter Summary)
- ☑ Complete revenue engine: prospect → research → score → outreach →
    sequence → brief → follow-up → campaign → content → analysis → dashboard
- ☑ Configured for NexaFlow's business (or your own)
- ☑ Used BOTH base plugin commands (/call-summary, /forecast,
    /campaign-plan, etc.) AND extension skills (auto-activated
    via natural language)
- ☑ 5 RevOps agents running on schedule
- ☑ All 5 Agent Output Taxonomy errors identified and diagnosed
- ☑ Jurisdiction-compliant outreach for 3 markets
- ☑ Ready to sell: this system IS the product for the dispatcher
    business, the agency, the consultancy
```

---

## 7. DEMO DATA SPECIFICATION

All demo data is generated in L01 using a single prompt. The dataset is consistent across all 14 lessons.

### The Generation Prompt (L01)

```
Generate a complete demo dataset for a company called NexaFlow Technologies,
a workflow automation platform for mid-market logistics companies based in
Karachi, Pakistan (38 employees, PKR 180M revenue).

Generate the following:

1. CLOSED-WON DEALS (20 records)
   For each: company name, industry, employee count, revenue, location,
   buyer persona (name + title), trigger event, sales cycle length,
   primary pain, deal value, close date (last 18 months)
   Mix: 12 Pakistan, 5 UAE, 3 UK

2. TARGET PROSPECTS (5 records)
   For each: company name, location, employee count, revenue estimate,
   industry, key contact (name + title + background), recent news/signals,
   LinkedIn activity, tech stack signals
   Include: Meridian Logistics (Leeds, UK, Sarah Chen, VP Ops) as prospect #1
   Mix: 2 Pakistan, 1 UAE, 2 UK

3. CURRENT PIPELINE (10 deals)
   For each: company name, deal value, stage (Discovery/Demo/Proposal/
   Negotiation/Closed-Won), assigned rep, last activity date, close date
   target, notes
   Include: 3 at-risk (no activity >14 days), 2 likely to close this quarter

4. CAMPAIGN HISTORY (Q1 results)
   Channels: LinkedIn (organic + sponsored), email nurture, trade press
   For each: impressions, clicks, CTR, conversions, cost, leads generated,
   HOT leads, cost per lead

5. COMPETITOR INTELLIGENCE
   3 competitors: name, positioning, strengths, weaknesses, where they win,
   where NexaFlow wins

Format: structured markdown with clear headers.
```

### How Demo Data Is Used Across Lessons

| Lesson | Demo Data Used                                                       |
| ------ | -------------------------------------------------------------------- |
| L01    | All datasets generated; closed-won deals for ICP foundation          |
| L02    | 20 closed-won deals (ICP calibration); 5 target prospects (research) |
| L03    | 5 prospects (scoring); 10 closed-won deals (calibration validation)  |
| L04    | 5 prospects (enrichment); pipeline accounts (stale record check)     |
| L05    | Top 3 prospects (outreach messages)                                  |
| L06    | #1 prospect — Meridian (6-touch sequence)                            |
| L07    | Top 3 prospects (pre-call briefs)                                    |
| L08    | Full pipeline from L01 → end-to-end pipeline exercise                |
| L09    | Cornerstone content about NexaFlow's market                          |
| L10    | Campaign data (budget, audience from NexaFlow's ICP)                 |
| L11    | Q1 campaign results (performance analysis)                           |
| L12    | Pakistan/UAE/UK prospects (jurisdiction-specific outreach)           |
| L13    | Pipeline data (audit); all channel data (dashboard); forecast        |
| L14    | 5 NEW prospects (sprint) + all datasets (capstone assembly)          |

---

## 8. AGENT OUTPUT TAXONOMY — PROGRESSIVE DISCOVERY

Errors are not TAUGHT. They are DISCOVERED through exercises that naturally surface them.

| Error Type                | Lesson | How Student Discovers It                                         |
| ------------------------- | ------ | ---------------------------------------------------------------- |
| **Hallucinated Data**     | L01    | "Can you verify this revenue figure from a public source?"       |
| **Miscalibrated Scoring** | L03    | "Farah says this is our best prospect — why does it score WARM?" |
| **Compliance Gap**        | L05    | "Is this outreach legal/appropriate in Pakistan?"                |
| **Over-Automation**       | L06    | "Does Touch 5 still reference something specific about Sarah?"   |
| **Context Loss**          | L07    | "Does this brief reference the research from L02?"               |

By L14, the student can diagnose all five errors in any agent output. The errors are never introduced with "This is an example of [Error Type]." The student names the error after discovering it.

---

## 9. QUALITY CHECKLIST (Per Lesson)

Before finalising ANY lesson:

```
CONTENT CHECKLIST

□ Opens with a business scenario (not "In this lesson...")
□ Shows the command BEFORE explaining the concept
□ Every code block is a copy-paste prompt (no pseudocode)
□ Uses NexaFlow/Meridian demo data consistently
□ Ends with "What You Built" — numbered list of deployable artifacts
□ Contains 3 "Try With AI" prompts (reproduce / adapt / apply)
□ Agent Output Taxonomy error is DISCOVERED, not taught (if applicable)
□ "The agent researches, drafts, and recommends. The sales professional
   decides and sends." appears where outreach is generated
□ No plugin architecture theory (Wrapper, Override, Delegation,
   collision resolution, router architecture, state machine, progressive
   connectors) — ZERO mentions
□ Full YAML frontmatter (skills, learning objectives, cognitive load,
   differentiation)
□ Duration ≤ 30 minutes (L14 capstone: 45 min allowed)
□ All statistics fact-checked via WebSearch
□ No banned imports (Flashcards, Quiz React components)
□ All commands use real names from Section 4 (no /research, /score,
   /outreach, /campaign, /analyze — these don't exist)
□ Natural language prompts used for extension skill invocation;
   /command-name syntax used only for base plugin commands
   (no plugin prefix — just /call-summary, not /sales:call-summary)

DEPLOYABLE ARTIFACT CHECKLIST

□ At least ONE artifact the student could use in a real business
□ Artifact is complete (not "outline" or "framework" — actual output)
□ Artifact references specific demo data (NexaFlow/Meridian names,
   not placeholder [Company])
```

---

## 10. WHAT WE DELETE

The following shipped lessons have no equivalent in the original artifact and are removed entirely:

| Current Lesson                                 | Why Deleted                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| L10: Wrappers and Progressive Enhancement      | Plugin architecture theory — not a practitioner skill        |
| L11: Override, Delegation, and the Five Laws   | Plugin architecture theory — Five Laws already taught in L05 |
| L14: Reactive Agents and State Machines        | State machine design is CS theory, not business output       |
| L15: Agent Orchestration and the Skill Library | Router architecture is plugin engineering, not usage         |

### What Happens to Their Content

- **Five Laws** from shipped L04/L11 → consolidated into new L05
- **Outreach compliance** from shipped L12 → new L12 (kept, expanded with real jurisdiction rules)
- **Agent deployment** from shipped L13 → new L13 (kept, refocused on deployment not architecture)
- **State machine exit conditions** → simplified into L06 as "exit conditions" (reply, bounce, unsubscribe, silence) — NO state machine diagram

---

## 11. WHAT CHANGES IN THE README

### Prerequisites

```bash
# All three plugins installed in L01 — no phased installation
claude plugin install sales@knowledge-work-plugins
claude plugin install marketing@knowledge-work-plugins
claude plugin install sales-revops-marketing@agentfactory-business
```

### Lesson Map

Update to 14 lessons matching Section 5 of this plan.

### Agent Output Taxonomy

Keep as-is — the taxonomy and progressive introduction table are correct.

### Case Studies

Keep as-is — NexaFlow and Meridian descriptions are correct.

---

## 12. IMPLEMENTATION SEQUENCE

```
Phase 1: Setup (this session)
  □ Review and approve this plan
  □ Update README.md with new 14-lesson map

Phase 2: Core Sales Lessons (L01-L08)
  □ L01: The Revenue Engine (install all 3 plugins, generate demo data)
  □ L02: Prospect Intelligence and ICP Calibration
  □ L03: Lead Scoring and Qualification
  □ L04: CRM Enrichment and Data Decay
  □ L05: The Five Laws of Outreach
  □ L06: Multi-Touch Sequences and Follow-Up
  □ L07: Pre-Call Briefs and Meeting Preparation
  □ L08: The Prospect-to-Meeting Pipeline

Phase 3: Marketing + Compliance (L09-L12)
  □ L09: Content Creation and Brand Voice
  □ L10: Campaign Strategy and the Content Calendar
  □ L11: Campaign Performance Analysis
  □ L12: Outreach Compliance and Regional Context

Phase 4: RevOps + Capstone (L13-L14)
  □ L13: RevOps Agents and the Revenue Dashboard
  □ L14: Applied Practice — The Full Revenue Engine

Phase 5: Quality
  □ Run quality checklist on every lesson
  □ Fact-check all statistics
  □ Verify demo data consistency across lessons
  □ Run educational-validator on full chapter
```

---

## 13. SUCCESS CRITERIA

After completing this chapter, a reader should be able to:

1. **Research any prospect** and produce a structured intelligence brief in under 5 minutes
2. **Score leads** using a three-dimension model calibrated to their business
3. **Write personalised outreach** that passes the Five Laws on every message
4. **Build multi-touch sequences** with appropriate exit conditions
5. **Prepare for any sales call** with a tailored pre-call brief
6. **Plan a marketing campaign** with specific goals, channel mix, and measurement framework
7. **Analyse campaign performance** and produce actionable optimisation recommendations
8. **Deploy RevOps agents** that automate research, enrichment, sequencing, and reporting
9. **Produce compliant outreach** for multiple jurisdictions
10. **Diagnose all 5 agent error types** in any agent output

And the ultimate test (the user's question that started this):

> **Could someone build a "24/7 AI dispatcher for home-service businesses" after this chapter?**
>
> Yes. They would:
>
> - Replace NexaFlow's logistics ICP with home-service ICP
> - Configure their own sales-marketing.local.md
> - Use the same research → score → outreach → sequence → brief pipeline
>   (natural language prompts + base plugin commands + extension skills)
> - Deploy the same 5 RevOps agents
> - Sell the configured system as a productised service
>
> The chapter teaches the SYSTEM. The reader configures it for their MARKET.
