# Chapter 40: Intrapreneurship & Innovation Agents — Master Architecture Spec

**Version**: 1.0
**Date**: 2026-03-18
**Source spec**: `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` (2,045 lines)
**Plugin source skills**: `specs/drafts/chap29_innovation/innovation-skills/` (10 products + 4 agents + router + local.md template)

---

## 1. Binding Design Decisions

| Decision        | Detail                                                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Lesson count    | 16 (not 15)                                                                                                                                     |
| Router skill    | None — distribute router logic into each skill's YAML description trigger phrases                                                               |
| Command names   | All 10 commands kept as-is: `/idea`, `/discovery`, `/hypothesis`, `/canvas`, `/financials`, `/pitch`, `/sprint`, `/market`, `/gtm`, `/validate` |
| Lesson order    | Discovery (L03) before Ideation (L04); Market (L10) → GTM (L11) → Pitch (L12)                                                                   |
| Agents          | Dedicated lesson (L14)                                                                                                                          |
| Worked example  | AP automation SaaS — the chapter through-line                                                                                                   |
| Terminology     | "Cowork" (never "Claude in Excel")                                                                                                              |
| Plugin location | `agentfactory-business-plugins/innovation/`                                                                                                     |
| Chapter path    | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/`                           |

---

## 2. Source-to-Output Mapping

| Spec Lines | Topic                                             | Output Lesson  | Primary Skill(s)                |
| ---------- | ------------------------------------------------- | -------------- | ------------------------------- |
| 1-137      | Introduction, DLA Stack, innov.local.md config    | L01, L02       | — (conceptual + plugin install) |
| 139-431    | Part 1: Design Thinking (Empathy, Define, Ideate) | L03, L04       | `/discovery`, `/idea`           |
| 432-641    | Part 2: Lean Startup (Assumptions, MVP, BML)      | L05, L06, L07  | `/hypothesis`, `/validate`      |
| 643-761    | Part 3: Business Model Canvas                     | L08            | `/canvas`                       |
| 763-877    | Part 4: Financial Model (Unit Economics, Runway)  | L09            | `/financials`                   |
| 1178-1222  | Part 7: Market Research + Sizing                  | L10            | `/market`                       |
| 1226-1349  | Part 8: GTM Strategy                              | L11            | `/gtm`                          |
| 858-1069   | Part 5: Investor Pitch Deck                       | L12            | `/pitch`                        |
| 1073-1174  | Part 6: Agile Sprint Management                   | L13            | `/sprint`                       |
| 1354-1417  | Part 9: Four Innovation Agents                    | L14            | All 4 agents                    |
| 1820-1874  | Exercise 8: innov.local.md build                  | L15 (capstone) | All skills                      |
| 1878-1950  | Summary + Quick Reference                         | L16            | —                               |

---

## 3. Exercise-to-Lesson Assignment

| Spec Exercise | Topic                            | Spec Lines                   | Lesson | Skill         |
| ------------- | -------------------------------- | ---------------------------- | ------ | ------------- |
| Ex 2          | Customer Discovery Synthesis     | 1489-1531                    | L03    | `/discovery`  |
| Ex 1          | Idea Generation Sprint           | 1419-1487                    | L04    | `/idea`       |
| Ex 3 (part 1) | Hypothesis Stress-Test           | 1533-1573                    | L05    | `/hypothesis` |
| Ex 3 (part 2) | MVP Scoping                      | 1573-1583                    | L06    | `/hypothesis` |
| —             | Build-Measure-Learn Loop         | (spec Part 2, lines 617-641) | L07    | `/validate`   |
| Ex 4          | BMC Build                        | 1587-1641                    | L08    | `/canvas`     |
| Ex 5          | Unit Economics + Financial Model | 1644-1703                    | L09    | `/financials` |
| Ex 7          | GTM Strategy Sprint              | 1764-1817                    | L11    | `/gtm`        |
| Ex 6          | Investor Pitch Deck              | 1707-1761                    | L12    | `/pitch`      |
| Ex 8          | Build innov.local.md             | 1820-1874                    | L15    | All skills    |

---

## 4. Chapter Directory Skeleton

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/
├── README.md
├── 01-the-innovation-os.md
├── 01-the-innovation-os.flashcards.yaml
├── 01-the-innovation-os.summary.md
├── 02-plugin-architecture-installation.md
├── 02-plugin-architecture-installation.flashcards.yaml
├── 02-plugin-architecture-installation.summary.md
├── 03-customer-discovery-problem-statement.md
├── 03-customer-discovery-problem-statement.flashcards.yaml
├── 03-customer-discovery-problem-statement.summary.md
├── 04-hundred-ideas-one-hour.md
├── 04-hundred-ideas-one-hour.flashcards.yaml
├── 04-hundred-ideas-one-hour.summary.md
├── 05-the-assumption-stack.md
├── 05-the-assumption-stack.flashcards.yaml
├── 05-the-assumption-stack.summary.md
├── 06-mvp-the-minimum-that-validates.md
├── 06-mvp-the-minimum-that-validates.flashcards.yaml
├── 06-mvp-the-minimum-that-validates.summary.md
├── 07-build-measure-learn.md
├── 07-build-measure-learn.flashcards.yaml
├── 07-build-measure-learn.summary.md
├── 08-business-model-canvas.md
├── 08-business-model-canvas.flashcards.yaml
├── 08-business-model-canvas.summary.md
├── 09-unit-economics-financial-modelling.md
├── 09-unit-economics-financial-modelling.flashcards.yaml
├── 09-unit-economics-financial-modelling.summary.md
├── 10-competitive-intelligence-market-sizing.md
├── 10-competitive-intelligence-market-sizing.flashcards.yaml
├── 10-competitive-intelligence-market-sizing.summary.md
├── 11-go-to-market-strategy.md
├── 11-go-to-market-strategy.flashcards.yaml
├── 11-go-to-market-strategy.summary.md
├── 12-investor-pitch-deck.md
├── 12-investor-pitch-deck.flashcards.yaml
├── 12-investor-pitch-deck.summary.md
├── 13-innovation-sprints.md
├── 13-innovation-sprints.flashcards.yaml
├── 13-innovation-sprints.summary.md
├── 14-four-innovation-agents.md
├── 14-four-innovation-agents.flashcards.yaml
├── 14-four-innovation-agents.summary.md
├── 15-capstone-build-innovation-os.md
├── 15-capstone-build-innovation-os.flashcards.yaml
├── 15-capstone-build-innovation-os.summary.md
├── 16-chapter-summary-quick-reference.md
├── 16-chapter-summary-quick-reference.flashcards.yaml
└── 16-chapter-summary-quick-reference.summary.md
```

**Total files**: 1 README + 16 lessons + 16 flashcard YAMLs + 16 summaries = **49 files**

---

## 5. Plugin Directory Skeleton

```
agentfactory-business-plugins/innovation/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── idea/SKILL.md
│   ├── discovery/SKILL.md
│   ├── hypothesis/SKILL.md
│   ├── canvas/SKILL.md
│   ├── financials/SKILL.md
│   ├── pitch/SKILL.md
│   ├── sprint/SKILL.md
│   ├── market/SKILL.md
│   ├── gtm/SKILL.md
│   └── validate/SKILL.md
├── agents/
│   ├── idea-generator.md
│   ├── customer-intelligence.md
│   ├── business-model-architect.md
│   └── fundraising-readiness.md
├── local.md.template
├── evals/
│   ├── cases.yaml
│   └── run.py
├── README.md
└── LICENSE
```

**Total files**: 1 plugin.json + 10 SKILL.md + 4 agent .md + 1 template + 2 evals + 1 README + 1 LICENSE = **20 files**

---

## 6. Router Distribution Guide

The governing spec has a global router (`innovation-global-router.md`). Per binding decision, there is **no router skill** in the plugin. Instead, each skill SKILL.md embeds its own trigger phrases in the YAML `description` field. The router's universal rules must be distributed as follows:

### Rules that go into EVERY skill's SKILL.md preamble

From `innovation-global-router.md` Steps 2-6:

1. **Context loading** (Step 2): Each skill must include a section "Always check `innov.local.md` for venture context. If not found, continue with conversation context and prompt user to run Exercise 8 (L15) to build it."
2. **Stage-aware calibration** (Step 3): Each skill must include stage-specific guidance relevant to its domain. E.g., `/idea` warns if venture.stage=MVP ("You are past ideation — are you pivoting?"). `/financials` warns if stage=IDEA ("You don't have enough data for a financial model yet").
3. **DLA progression rule** (Step 4): Each skill warns if the user is skipping a DLA stage. `/sprint` warns if assumptions aren't validated. `/canvas` warns if discovery hasn't happened.
4. **Assumption tracking** (Step 5): Every skill that produces output referencing assumptions must surface the most critical untested assumption and propose innov.local.md updates.
5. **Financial reasoning** (Step 6): Only applies to `/financials`, `/canvas` (Revenue Streams / Cost Structure blocks), `/pitch` (Slide 6), `/market` (value capture validation).
6. **Pitch quality** (Step 7): Only applies to `/pitch`.

### Skill-specific trigger phrases (from router Step 1)

| Skill         | Trigger phrases (embed in SKILL.md `description`)                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/idea`       | idea, brainstorm, ideate, 100 ideas, idea generation, idea sprint, new product idea, innovation sprint, what should I build, what problem should I solve, idea evaluation, idea scoring, idea shortlist, pressure test idea, devil's advocate, adjacent possible, contrarian ideas, analogy ideas, crazy ideas, how might we, HMW, pivot idea, new venture concept                                                                                                                 |
| `/discovery`  | customer discovery, user research, interview, empathy, jobs to be done, JTBD, persona, pain point, customer insight, discovery, interview guide, synthesis, insight map, interview notes, customer quotes, what do customers want, what problems do customers have, user needs, customer feedback, research synthesis, discovery sprint, problem validation, HMW problem statement, how might we, empathy map, journey map                                                         |
| `/hypothesis` | assumption, hypothesis, MVP, minimum viable product, lean startup, what assumptions am I making, test my idea, what could go wrong, assumption risk, validate assumption, kill my idea, stress test, what should I test first, MVP design, MVP scoping, what to build, minimum feature set, success criteria, failure criteria, pivot criteria, build plan, riskiest assumption, leap of faith assumption, critical assumption                                                     |
| `/canvas`     | business model canvas, BMC, business model, value proposition, customer segments, channels, customer relationships, revenue streams, key resources, key activities, key partnerships, cost structure, canvas build, canvas stress test, alternative business model, monetisation, pricing model, revenue model, how does the business make money, business design, Osterwalder                                                                                                     |
| `/financials` | unit economics, CAC, LTV, customer acquisition cost, lifetime value, payback period, churn, gross margin, breakeven, runway, burn rate, MRR, ARR, monthly recurring revenue, annual recurring revenue, financial model, revenue model, revenue projections, fundraising model, scenario analysis, sensitivity analysis, how much money do I need, how long will the money last, how many customers to break even, what are my unit economics, Series A readiness                   |
| `/pitch`      | pitch, investor deck, fundraising, pitch deck, pitch narrative, investor presentation, raise money, seed round, Series A, SAFE, convertible note, valuation, investor story, narrative architecture, pitch slides, executive summary, investor email, one pager, funding, angel investor, venture capital, VC pitch, pitch practice, hard questions, investor Q&A, term sheet, data room, investor brief                                                                           |
| `/sprint`     | sprint, innovation sprint, agile, sprint plan, sprint goal, sprint backlog, user story, acceptance criteria, definition of done, sprint review, sprint retrospective, velocity, iteration, two-week sprint, sprint planning, what to build this sprint, backlog prioritisation, story points, mid-sprint check, sprint close, assumption update, learning sprint                                                                                                                   |
| `/market`     | market, market size, TAM SAM SOM, competitive analysis, competitive landscape, competitors, competition, who else does this, market research, industry research, market sizing, bottom-up model, addressable market, serviceable market, competitive intelligence, how big is the market, who are my competitors, market positioning, differentiation, moat, unfair advantage, why us not them, SWOT                                                                               |
| `/gtm`        | go to market, GTM, GTM strategy, go-to-market, ICP, ideal customer profile, target customer, who to sell to, channel strategy, sales channel, how to acquire customers, customer acquisition, outreach strategy, LinkedIn outreach, cold email, sales process, sales funnel, pricing strategy, price point, pricing tiers, positioning statement, positioning, how to position, first customers, early adopters, 90-day plan, launch plan, customer success, onboarding, retention |
| `/validate`   | validate, build measure learn, BML, pivot, persevere, pilot results, what did we learn, experiment results, assumption test results, was I right, did it work, should I pivot, what should I change, learning synthesis, validated learning, invalidated assumption, pilot analysis, what our pilot taught us, early customer data, what customers told us, post-pilot analysis, pivot or continue, kill or continue                                                               |

---

## 7. DLA Stack Progression and Lesson Dependencies

```
DESIGN THINKING (Problem Level)        LEAN STARTUP (Solution Level)        AGILE (Delivery Level)
─────────────────────────────          ──────────────────────────────       ────────────────────────
L03: Customer Discovery ─────────────► L05: Assumption Stack ──────────► L13: Innovation Sprints
       │                                      │
       ▼                                      ▼
L04: 100 Ideas ──────────────────────► L06: MVP Scoping
                                              │
                                              ▼
                                       L07: Build-Measure-Learn

CROSS-CUTTING TOOLS (any stage)
──────────────────────────────
L08: Business Model Canvas ◄──── feeds ────► L09: Unit Economics
       │                                            │
       ▼                                            ▼
L10: Market + Competitive Intelligence ──────► L11: GTM Strategy
       │
       ▼
L12: Investor Pitch Deck

INTEGRATION
───────────
L14: Four Innovation Agents (orchestrate all skills)
L15: Capstone — Build innov.local.md (integrates all exercises)
L16: Summary + Quick Reference
```

### Hard Dependencies (must be read in order)

- L01 → L02 (concepts before plugin install)
- L03 → L04 (discovery before ideation — binding decision)
- L05 → L06 → L07 (assumption → MVP → BML is a sequence)
- L08 depends on L03-L07 (BMC requires discovery + validation inputs)
- L09 depends on L08 (unit economics need revenue model from canvas)
- L12 depends on L08 + L09 + L10 (pitch needs canvas + financials + market)
- L14 depends on L01-L13 (agents orchestrate all skills)
- L15 depends on L01-L14 (capstone integrates everything)

### Soft Dependencies (conceptual, not strict order)

- L10 can be done alongside L08-L09
- L11 depends on L10 but could start with draft ICP from L03
- L13 can be introduced at any stage (adapted to current DLA phase)

---

## 8. YAML Frontmatter Template

All 16 lessons use this template (adapted from Ch 35 L03 reference):

```yaml
---
slug: /Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/[lesson-slug]
sidebar_position: [N]
title: "[Lesson Title]"
description: "[One sentence — what the student walks away with]"
keywords: [
    "[keyword1]",
    "[keyword2]",
    # 8-12 keywords
  ]
chapter: 40
lesson: [N]
duration_minutes: [N]

# HIDDEN SKILLS METADATA
skills:
  - name: "[Skill Name — action phrase]"
    proficiency_level: "[A1|A2|B1|B2|C1|C2]"
    category: "[Conceptual|Technical|Applied|Soft]"
    bloom_level: "[Remember|Understand|Apply|Analyze|Evaluate|Create]"
    digcomp_area: "[Information-Processing|Content-Creation|Problem-Solving|Communication|Safety]"
    measurable_at_this_level: "[What the student can demonstrably do]"

  # 2-3 skills per lesson

learning_objectives:
  - objective: "[Measurable outcome]"
    proficiency_level: "[level]"
    bloom_level: "[level]"
    assessment_method: "[How to verify the student achieved this]"

  # 2-3 objectives per lesson

cognitive_load:
  new_concepts: [N]
  concepts_list:
    - "[Concept 1]"
    - "[Concept 2]"
  assessment: "[Why this is within cognitive limits]"

differentiation:
  extension_for_advanced: "[Stretch task or deeper research]"
  remedial_for_struggling: "[Reduced scope focus]"

teaching_guide:
  key_points:
    - "[Point 1]"
    - "[Point 2]"
  misconceptions:
    - "[Misconception and correction]"
  discussion_prompts:
    - "[Question]"
  teaching_tips:
    - "[Tip]"
---
```

---

## 9. Component/Pattern Catalog

### Try With AI Format

Each lesson includes a "Try With AI" section with 3 prompts following the Reproduce → Adapt → Apply pattern:

```markdown
## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Reproduce** — Run the chapter's worked example:
```

[Prompt that produces the AP automation output from the spec]

```
**What you're learning:** [1 sentence explanation]

**Adapt** — Modify for a different context:
```

[Prompt that changes the industry/customer/problem]

```
**What you're learning:** [1 sentence explanation]

**Apply** — Use your own venture data:
```

[Prompt using the student's innov.local.md data]

```
**What you're learning:** [1 sentence explanation]
```

### Exercise Format (for lessons with exercises)

Follows the spec's Step 1-5 structure with plugin commands:

```markdown
## Exercise: [Title]

**Type:** [DLA Stage]
**Time:** [N] minutes
**Goal:** [One sentence]

**Step 1 — [Action] ([N] minutes).**

[Instructions]

**Step 2 — [Action] ([N] minutes).**
```

> [Cowork prompt using /command]

```

**Step 3 — [Continue].**

**Deliverable:** [What the student should have at the end]
```

### Docusaurus Components

**Allowed**: `:::note`, `:::info`, `:::tip`, `:::warning`, `:::danger`, tables, code blocks, bold, links

**FORBIDDEN**: No `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz` — these components DO NOT EXIST. Flashcards = `.flashcards.yaml` sidecar files. Quizzes = generated via `/quiz-generator` skill.

### Sidecar File Rules

- Every lesson `NN-slug.md` gets:
  - `NN-slug.flashcards.yaml` — 10-15 flashcards covering key concepts
  - `NN-slug.summary.md` — 200-300 word lesson summary

---

## 10. The AP Automation Through-Line

The spec uses a **B2B SaaS product for accounts payable (AP) automation** as the worked example throughout the chapter. This example is:

- **Universally recognisable**: Every organisation pays suppliers
- **Internationally portable**: Works in any country/currency
- **Uses WhatsApp as approval channel**: Dominant in 100+ countries; illustrates "build with the behaviour, not against it"
- **Dual-track**: Works for both entrepreneurs (external startup) and intrapreneurs (internal innovation project)

### Where the AP example appears per lesson:

| Lesson | AP Example Usage                                                        |
| ------ | ----------------------------------------------------------------------- |
| L01    | Introduces AP problem as the chapter through-line                       |
| L03    | AP customer discovery — CFO interview guide, synthesis of 10 interviews |
| L04    | 100 ideas for AP automation; shortlist to 10; select one                |
| L05    | Assumption map for AP SaaS (20+ assumptions, 3 tiers)                   |
| L06    | MVP design for AP SaaS (5 features in, 6 out, 8-week plan)              |
| L07    | Build-Measure-Learn analysis of 3 AP pilots                             |
| L08    | Business Model Canvas for AP SaaS (all 9 blocks)                        |
| L09    | Unit economics for AP SaaS (CAC, LTV, breakeven at 10 customers)        |
| L10    | Competitive landscape scan for AP automation; bottom-up market sizing   |
| L11    | GTM strategy: ICP (CFOs $5M-$50M), channel strategy, 90-day calendar    |
| L12    | 9-slide investor pitch deck for AP SaaS ($500K seed raise)              |
| L13    | Innovation sprint plan: WhatsApp adoption validation                    |
| L14    | Four agents configured for the AP venture                               |
| L15    | Complete innov.local.md for the AP venture                              |

### Intrapreneurship Dual-Track

Every lesson that uses the AP example also includes a sidebar or note on how the same methodology applies to an intrapreneur. Key translation:

| Entrepreneur Term  | Intrapreneur Equivalent                                        |
| ------------------ | -------------------------------------------------------------- |
| Investors          | Innovation committee / sponsoring executive                    |
| Funding / raise    | Budget and headcount approval                                  |
| Customers          | Internal users or existing external customers                  |
| Market             | Organisation's existing customer base or new adjacent market   |
| MRR / ARR          | Value metrics relevant to the organisation                     |
| Unfair advantage   | Organisational knowledge, relationships, existing distribution |
| Pivot              | Scope change / direction adjustment                            |
| Product-market fit | Internal adoption                                              |

---

## 11. Per-Lesson Specifications

### L01: The Innovation OS (25 min)

- **Content**: DLA Stack overview (Design Thinking → Lean Startup → Agile), why order matters, AI as the DLA accelerant (the bottleneck table from spec lines 47-61), the AP worked example introduction, intrapreneurship context
- **Spec lines**: 1-137
- **Skills taught**: Conceptual (no plugin commands)
- **Proficiency**: A2 Conceptual (Remember/Understand)
- **New concepts**: DLA Stack, Design Thinking, Lean Startup, Agile, Innovation OS
- **No exercise** — purely conceptual

### L02: Plugin Architecture and Installation (20 min)

- **Content**: Plugin directory structure, installation via Cowork, `innov.local.md` template walkthrough, 10 commands overview table, verify installation
- **Spec lines**: 74-137 (config section)
- **Skills taught**: Technical (plugin install + verify)
- **Proficiency**: A2 Technical (Apply)
- **New concepts**: Plugin structure, innov.local.md, command map
- **No exercise** — setup lesson

### L03: Customer Discovery and Problem Statement (45 min)

- **Content**: Empathy stage, interview guide generation, interview synthesis (JTBD map, pain ranking, insight statements), "How Might We" problem statement generation
- **Spec lines**: 139-397
- **Primary skill**: `/discovery`
- **Exercise**: Ex 2 from spec (Customer Discovery Synthesis Sprint, lines 1489-1531)
- **Proficiency**: B1 Applied (Apply/Analyze)
- **New concepts**: JTBD map, pain ranking matrix, insight statements, HMW format, interview protocol
- **AP example**: CFO interview guide, 10-interview synthesis, 5 HMW variants

### L04: Hundred Ideas, One Hour (40 min)

- **Content**: Why brainstorms underperform, 100-idea sprint methodology, DVF scoring (Desirability/Viability/Feasibility), shortlisting, pressure testing
- **Spec lines**: 399-431
- **Primary skill**: `/idea`
- **Exercise**: Ex 1 from spec (Idea Generation Sprint, lines 1419-1487)
- **Proficiency**: B1 Applied (Apply/Evaluate)
- **New concepts**: 100-idea sprint, 10 idea categories, DVF framework, "Why Now?" test, pressure test
- **AP example**: 100 AP ideas, shortlist to 10, devil's advocate on selected idea

### L05: The Assumption Stack (40 min)

- **Content**: Why assumptions kill startups, assumption map methodology (3 tiers), assumption categories (customer/problem/solution/business model/technical), risk scoring, test design hierarchy (conversation → landing page → concierge → Wizard of Oz → functional MVP)
- **Spec lines**: 432-519
- **Primary skill**: `/hypothesis`
- **Exercise**: Ex 3 part 1 (Hypothesis Stress-Test, lines 1533-1573)
- **Proficiency**: B1 Applied (Apply/Analyze)
- **New concepts**: Assumption map, 3 risk tiers, evidence quality (ASSUMED/ANECDOTAL/VALIDATED), MVT hierarchy, test prioritisation
- **AP example**: Full assumption map (A-001 through A-010)

### L06: MVP — The Minimum That Validates (40 min)

- **Content**: MVP is not minimum product — it's minimum test of critical assumptions. Feature in/out framework, success/failure criteria, build plan design
- **Spec lines**: 521-615
- **Primary skill**: `/hypothesis` (MVP scoping)
- **Exercise**: Ex 3 part 2 (MVP Scoping, lines 1573-1583)
- **Proficiency**: B1 Applied (Apply/Evaluate)
- **New concepts**: MVP purpose (test, not ship), feature inclusion criteria, success/failure criteria, explicit exclusion list
- **AP example**: AP SaaS MVP (5 features in, 6 out, 8-week build plan)

### L07: Build-Measure-Learn (35 min)

- **Content**: The BML loop, how to analyse pilot results, validated vs. invalidated assumptions, unexpected learnings, pivot types, pivot-or-persevere decision framework
- **Spec lines**: 617-641
- **Primary skill**: `/validate`
- **No separate exercise** — uses the AP pilot data analysis as the worked example + Try With AI
- **Proficiency**: B1 Applied (Analyze/Evaluate)
- **New concepts**: BML loop, pivot types (zoom-in, zoom-out, customer segment, customer need, platform, business architecture, technology, channel), pivot decision checklist
- **AP example**: 6-week pilot results analysis (accuracy 91%, adoption 45-89%, pricing validated at $500)

### L08: Business Model Canvas (45 min)

- **Content**: Osterwalder's 9 blocks, building a canvas with evidence quality, stress-testing each block, alternative business model exploration, canvas health summary
- **Spec lines**: 643-761
- **Primary skill**: `/canvas`
- **Exercise**: Ex 4 (BMC Build, lines 1587-1641)
- **Proficiency**: B1 Applied (Apply/Analyze)
- **New concepts**: 9 canvas blocks, evidence quality per block, canvas health summary, adversarial stress-testing, alternative business model patterns
- **AP example**: Full BMC with post-MVP evidence, stress-test with 3 adversarial scenarios

### L09: Unit Economics and Financial Modelling (45 min)

- **Content**: Unit economics foundation (CAC, LTV, LTV:CAC, payback, breakeven), 18-month revenue/runway model (3 scenarios), sensitivity analysis, fundraising model, Series A readiness framework
- **Spec lines**: 763-877
- **Primary skill**: `/financials`
- **Exercise**: Ex 5 (Unit Economics + Financial Model, lines 1644-1703)
- **Proficiency**: B2 Applied (Apply/Analyze)
- **New concepts**: CAC (founder-led vs. sustainable), LTV at different churn rates, 3-scenario model, runway trigger, Series A readiness benchmarks
- **AP example**: $275 CAC, $36K LTV, 131:1 ratio, breakeven at 10 customers, 24-month model

### L10: Competitive Intelligence and Market Sizing (40 min)

- **Content**: Competitive landscape scan methodology, bottom-up market sizing (5-step method), differentiation map, market timing analysis ("Why Now?"), moat assessment framework
- **Spec lines**: 1178-1222
- **Primary skill**: `/market`
- **No separate exercise** — market sizing is integrated into the AP worked example + Try With AI
- **Proficiency**: B1 Applied (Apply/Analyze)
- **New concepts**: Bottom-up vs. top-down sizing, TAM/SAM/SOM, value capture ratio (<10% rule), 6 moat types, competitive intelligence structure
- **AP example**: AP SaaS competitive landscape + bottom-up market sizing

### L11: Go-to-Market Strategy (45 min)

- **Content**: ICP definition with surgical precision (company + person + trigger + signals + NOT a fit), positioning statement, channel strategy ranked by CAC efficiency, sales process design, pricing strategy, 90-day GTM calendar, customer success programme
- **Spec lines**: 1226-1349
- **Primary skill**: `/gtm`
- **Exercise**: Ex 7 (GTM Strategy Sprint, lines 1764-1817)
- **Proficiency**: B2 Applied (Apply/Create)
- **New concepts**: ICP with buying trigger, positioning statement format, 6 channel archetypes, value-based pricing, paid trial preference, 90-day calendar with decision gates
- **AP example**: Full GTM for AP SaaS (50 customers in 18 months)

### L12: Investor Pitch Deck (45 min)

- **Content**: Narrative architecture (9-slide structure), pitch quality standards, traction hierarchy, hard questions prep, executive summary writing, investor research brief, pitch practice methodology
- **Spec lines**: 858-1069
- **Primary skill**: `/pitch`
- **Exercise**: Ex 6 (Investor Pitch Deck, lines 1707-1761)
- **Proficiency**: B2 Applied (Create/Evaluate)
- **New concepts**: 9-slide narrative arc, emotional engineering per slide, traction hierarchy, banned phrases, executive summary format, pre-meeting investor brief
- **AP example**: Full 9-slide narrative for AP SaaS ($500K seed raise)

### L13: Innovation Sprints (35 min)

- **Content**: How innovation sprints differ from product sprints (learning goal + delivery goal), sprint planning with assumption-linked stories, user story quality, backlog prioritisation by assumption risk x delivery value, retrospective with assumption updates
- **Spec lines**: 1073-1174
- **Primary skill**: `/sprint`
- **No separate exercise** — sprint planning is the Try With AI focus
- **Proficiency**: B1 Applied (Apply)
- **New concepts**: Innovation sprint vs. product sprint, learning goal, assumption-linked user stories, priority scoring formula, mid-sprint check, assumption update retrospective
- **AP example**: 2-week sprint to validate WhatsApp adoption

### L14: Four Innovation Agents (40 min)

- **Content**: Agent architecture overview, 4 agents in detail (Idea Generator, Customer Intelligence, Business Model Architect, Fundraising Readiness), weekly automated tasks, on-demand capabilities, how agents interact with innov.local.md
- **Spec lines**: 1354-1417
- **Skills taught**: All 4 agents
- **No separate exercise** — exploration of agent capabilities via Try With AI
- **Proficiency**: B1 Applied (Understand/Apply)
- **New concepts**: Persistent agent concept, weekly automated briefs, trigger-based activation, Monday Innovation Brief, Customer Signal Digest, Monthly Financial Health Review, Investor Pipeline tracking
- **AP example**: Configure all 4 agents for the AP venture

### L15: Capstone — Build Your Innovation OS (90 min)

- **Content**: Build complete innov.local.md from all prior exercises. Integrate venture context, customer profiles, assumption stack, BMC, financial model, competitive landscape, fundraising section. Validate with 4-question test.
- **Spec lines**: 1820-1874 (Exercise 8)
- **Skills used**: All 10 commands
- **Exercise**: Ex 8 (Build innov.local.md, lines 1820-1874)
- **Proficiency**: B2 Applied (Create/Evaluate)
- **New concepts**: None new — integration and validation of all prior concepts
- **AP example**: Complete innov.local.md for AP venture, then student builds their own

### L16: Chapter Summary and Quick Reference (15 min)

- **Content**: The central insight (spec lines 1878-1913), what the chapter built (14-item list), intrapreneurship note, key frameworks table, key canvas tools table, key references table, full command reference table
- **Spec lines**: 1878-1950
- **Skills taught**: None — reference material
- **Proficiency**: N/A
- **No exercise** — reference lesson

---

## 12. Fact Verification Flags

The following claims in the spec require WebSearch verification before publication:

| Claim                                                     | Location    | Verification Need                                                   |
| --------------------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| Kraljic framework introduced in 1983                      | L03 context | Verify year and publication (HBR)                                   |
| Osterwalder's BMC                                         | L08         | Verify attribution                                                  |
| WhatsApp dominant in 100+ countries                       | L01/L03     | Verify current market data                                          |
| DLA Stack terminology                                     | L01         | Verify if "DLA Stack" is an established term or coined by this spec |
| URL references in Quick Reference table (lines 1943-1949) | L16         | Verify all URLs are live and accurate                               |
| Build-Measure-Learn from Eric Ries / Lean Startup         | L07         | Verify attribution                                                  |

**Rule**: Statistics, dates, and adoption numbers must be verified via WebSearch or hedged with "approximately" / "as of [year]". Do NOT publish unverified numbers as facts.

---

## 13. Writer Assignment Summary

| Writer                  | Lessons            | File Count                                  | Exercise Count           |
| ----------------------- | ------------------ | ------------------------------------------- | ------------------------ |
| writer-bookends         | L01, L02, L16      | 9 (3 lessons + 3 flashcards + 3 summaries)  | 0                        |
| writer-design-lean      | L04, L05, L06, L07 | 12 (4 lessons + 4 flashcards + 4 summaries) | 3 (Ex 1, Ex 3 parts 1+2) |
| reference-builder (L03) | L03                | 3 (1 lesson + 1 flashcard + 1 summary)      | 1 (Ex 2)                 |
| writer-business-model   | L08, L09, L10, L11 | 12 (4 lessons + 4 flashcards + 4 summaries) | 3 (Ex 4, Ex 5, Ex 7)     |
| writer-pitch-agents-cap | L12, L13, L14, L15 | 12 (4 lessons + 4 flashcards + 4 summaries) | 2 (Ex 6, Ex 8)           |
| plugin-builder          | All plugin files   | 20                                          | N/A                      |

**Total**: 48 lesson files + 1 README + 20 plugin files = **69 files across both deliverables**
