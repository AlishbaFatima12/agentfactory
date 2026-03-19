# Chapter 36: Product Management — Architecture Spec

## Overview

Chapter 36 teaches B2B SaaS Product Managers to deploy AI agents across the full PM workflow cycle — from discovery through retrospective. It uses a **two-plugin architecture**: the official Anthropic `product-management` plugin (Layer 1) provides foundational PM commands, while a custom `product-strategy` plugin (Layer 2) fills workflow gaps the official plugin does not cover.

The chapter follows the PM workflow cycle (not the spec's original part order) so that exercises build on each other progressively: discover → research → define → plan → execute → communicate → reflect.

---

## Source-to-Output Mapping

### Governing Spec

`specs/drafts/chapter25_product management/Chapter25_Product_Management.md` (1,622 lines)

### Two-Plugin Architecture

| Layer              | Plugin               | Repository                                       | Commands                                                                                                                                     | Purpose                                                                                               |
| ------------------ | -------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Layer 1 (Official) | `product-management` | `knowledge-work-plugins/product-management`      | `/write-spec`, `/roadmap-update`, `/synthesize-research`, `/stakeholder-update`, `/competitive-brief`, `/metrics-review`, `/sprint-planning` | Foundational PM workflows maintained by Anthropic                                                     |
| Layer 2 (Custom)   | `product-strategy`   | `agentfactory-business-plugins/product-strategy` | `/prd`, `/stories`, `/brief`, `/retro`, `/prioritise`, `/interview`                                                                          | Workflow gaps: discovery briefs, interview guides, PRDs, user stories, prioritisation, retrospectives |

### Lesson-to-Source Mapping

| Lesson | Slug                                            | Title                                             | Plugin   | Command(s)                            | Spec Source                               | Skill Spec Files                                     | Duration |
| ------ | ----------------------------------------------- | ------------------------------------------------- | -------- | ------------------------------------- | ----------------------------------------- | ---------------------------------------------------- | -------- |
| L01    | `pms-cognitive-load-problem`                    | The PM's Cognitive Load Problem                   | —        | None                                  | Spec lines 1–67                           | —                                                    | 25 min   |
| L02    | `plugin-architecture-product-context`           | Plugin Architecture & Your Product Context        | Both     | Setup                                 | Spec lines 26–67 + official plugin README | `product.local.md.template`                          | 30 min   |
| L03    | `discovery-briefs-framing-problems`             | Discovery Briefs — Framing the Right Problem      | Custom   | `/brief`                              | pm-skills/products/brief.md               | brief.md                                             | 40 min   |
| L04    | `user-research-interviews-synthesis`            | User Research — Interviews & Synthesis            | Both     | `/interview` + `/synthesize-research` | Spec lines 496–614                        | interview.md + official synthesize-research SKILL.md | 45 min   |
| L05    | `competitive-intelligence`                      | Competitive Intelligence                          | Official | `/competitive-brief`                  | Official plugin skill                     | official competitive-brief SKILL.md                  | 35 min   |
| L06    | `feature-specifications`                        | Feature Specifications                            | Official | `/write-spec`                         | Spec lines 69–251                         | official write-spec SKILL.md                         | 45 min   |
| L07    | `prds-multi-team-initiatives`                   | PRDs for Multi-Team Initiatives                   | Custom   | `/prd`                                | Spec lines 252–343                        | prd.md                                               | 45 min   |
| L08    | `user-stories-story-mapping`                    | User Stories & Story Mapping                      | Custom   | `/stories`                            | Spec lines 615–743                        | stories.md                                           | 40 min   |
| L09    | `roadmap-planning-communication`                | Roadmap Planning & Communication                  | Official | `/roadmap-update`                     | Spec lines 344–495                        | official roadmap-update SKILL.md                     | 40 min   |
| L10    | `backlog-prioritization-frameworks`             | Backlog Prioritization Frameworks                 | Custom   | `/prioritise`                         | Spec lines 846–945                        | prioritise.md                                        | 45 min   |
| L11    | `sprint-planning-capacity`                      | Sprint Planning & Capacity                        | Official | `/sprint-planning`                    | Official plugin skill                     | official sprint-planning SKILL.md                    | 35 min   |
| L12    | `stakeholder-communication`                     | Stakeholder Communication                         | Official | `/stakeholder-update`                 | Spec lines 744–845                        | official stakeholder-update SKILL.md                 | 40 min   |
| L13    | `metrics-okrs-product-analytics`                | Metrics, OKRs & Product Analytics                 | Official | `/metrics-review`                     | Official plugin skill                     | official metrics-review SKILL.md                     | 45 min   |
| L14    | `continuous-intelligence-agents-retrospectives` | Continuous Intelligence — Agents & Retrospectives | Custom   | `/retro` + 3 agents                   | Spec lines 946–1097                       | retro.md + agents/\*.md                              | 45 min   |
| L15    | `chapter-summary-quick-reference`               | Chapter Summary & Quick Reference                 | —        | Reference                             | Spec lines 1500–1622                      | —                                                    | 15 min   |
| L16    | `chapter-quiz`                                  | Chapter Quiz                                      | —        | —                                     | Generated via `/quiz-generator`           | —                                                    | —        |

---

## Chapter Directory Skeleton

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/
├── README.md
├── 01-pms-cognitive-load-problem.md
├── 01-pms-cognitive-load-problem.flashcards.yaml
├── 01-pms-cognitive-load-problem.summary.md
├── 02-plugin-architecture-product-context.md
├── 02-plugin-architecture-product-context.flashcards.yaml
├── 02-plugin-architecture-product-context.summary.md
├── 03-discovery-briefs-framing-problems.md
├── 03-discovery-briefs-framing-problems.flashcards.yaml
├── 03-discovery-briefs-framing-problems.summary.md
├── 04-user-research-interviews-synthesis.md
├── 04-user-research-interviews-synthesis.flashcards.yaml
├── 04-user-research-interviews-synthesis.summary.md
├── 05-competitive-intelligence.md
├── 05-competitive-intelligence.flashcards.yaml
├── 05-competitive-intelligence.summary.md
├── 06-feature-specifications.md
├── 06-feature-specifications.flashcards.yaml
├── 06-feature-specifications.summary.md
├── 07-prds-multi-team-initiatives.md
├── 07-prds-multi-team-initiatives.flashcards.yaml
├── 07-prds-multi-team-initiatives.summary.md
├── 08-user-stories-story-mapping.md
├── 08-user-stories-story-mapping.flashcards.yaml
├── 08-user-stories-story-mapping.summary.md
├── 09-roadmap-planning-communication.md
├── 09-roadmap-planning-communication.flashcards.yaml
├── 09-roadmap-planning-communication.summary.md
├── 10-backlog-prioritization-frameworks.md
├── 10-backlog-prioritization-frameworks.flashcards.yaml
├── 10-backlog-prioritization-frameworks.summary.md
├── 11-sprint-planning-capacity.md
├── 11-sprint-planning-capacity.flashcards.yaml
├── 11-sprint-planning-capacity.summary.md
├── 12-stakeholder-communication.md
├── 12-stakeholder-communication.flashcards.yaml
├── 12-stakeholder-communication.summary.md
├── 13-metrics-okrs-product-analytics.md
├── 13-metrics-okrs-product-analytics.flashcards.yaml
├── 13-metrics-okrs-product-analytics.summary.md
├── 14-continuous-intelligence-agents-retrospectives.md
├── 14-continuous-intelligence-agents-retrospectives.flashcards.yaml
├── 14-continuous-intelligence-agents-retrospectives.summary.md
├── 15-chapter-summary-quick-reference.md
├── 15-chapter-summary-quick-reference.flashcards.yaml
├── 15-chapter-summary-quick-reference.summary.md
└── 16-chapter-quiz.md
```

---

## Plugin Directory Skeleton

```
product-strategy/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── prd/
│   │   └── SKILL.md
│   ├── stories/
│   │   └── SKILL.md
│   ├── brief/
│   │   └── SKILL.md
│   ├── retro/
│   │   └── SKILL.md
│   ├── prioritise/
│   │   └── SKILL.md
│   └── interview/
│       └── SKILL.md
├── agents/
│   ├── research-intelligence.md
│   ├── stakeholder-update.md
│   └── roadmap-coherence.md
├── product.local.md.template
├── evals/
│   ├── evals.json
│   └── cases/
├── CLAUDE.md
└── README.md
```

Location: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/`

---

## YAML Frontmatter Template

Derived from Ch 35 L06 format. Every lesson file MUST use this template:

```yaml
---
slug: /Business-Domain-Agent-Workflows/product-management/<lesson-slug>
sidebar_position: <N>
title: "<Lesson Title>"
description: "<1-2 sentence description of what the student will learn and produce>"
keywords:
  [
    "product management",
    "<keyword-2>",
    "<keyword-3>",
    "<keyword-4>",
    "<keyword-5>",
    "<keyword-6>",
  ]
chapter: 36
lesson: <N>
duration_minutes: <N>

# HIDDEN SKILLS METADATA
skills:
  - name: "<Skill description — what the student can do>"
    proficiency_level: "<A1|A2|B1|B2|C1|C2>"
    category: "<Conceptual|Technical|Applied|Soft>"
    bloom_level: "<Remember|Understand|Apply|Analyze|Evaluate|Create>"
    digcomp_area: "<Information-Literacy|Communication|Content-Creation|Safety|Problem-Solving>"
    measurable_at_this_level: "<How you verify the student achieved this>"

  - name: "<Second skill if applicable>"
    proficiency_level: "<level>"
    category: "<category>"
    bloom_level: "<level>"
    digcomp_area: "<area>"
    measurable_at_this_level: "<verification>"

learning_objectives:
  - objective: "<Active verb + measurable outcome>"
    proficiency_level: "<level>"
    bloom_level: "<level>"
    assessment_method: "<How the student demonstrates this>"

  - objective: "<Second objective>"
    proficiency_level: "<level>"
    bloom_level: "<level>"
    assessment_method: "<verification>"

cognitive_load:
  new_concepts: <N>
  concepts_list:
    - "<concept 1>"
    - "<concept 2>"
  assessment: "<Why this load level is appropriate given prerequisites>"

differentiation:
  extension_for_advanced: "<Challenge for advanced learners>"
  remedial_for_struggling: "<Scaffolding for struggling learners>"

teaching_guide:
  key_points:
    - "<Key teaching point 1>"
    - "<Key teaching point 2>"
  misconceptions:
    - "<Common misconception and correction>"
  discussion_prompts:
    - "<Scenario-based discussion question>"
  teaching_tips:
    - "<Practical teaching guidance>"
---
```

---

## Component and Pattern Catalog

### Lesson Body Structure

Every lesson follows this structure (derived from Ch 35 L06):

1. **Narrative opening** (2-3 paragraphs) — Real-world scenario connecting to the PM's daily experience. Business hook, not academic.
2. **Conceptual sections** — Theory with tables, frameworks, concrete examples using InsightFlow.
3. **Worked example** — A complete walkthrough using the lesson's command(s) against InsightFlow.
4. **Try With AI** — Three prompts following Reproduce → Adapt → Apply pattern.
5. **Exercise** — Step-by-step (5 steps) using the plugin command. Specify whether official or custom plugin.
6. **What You Built** — Summary of the artifact produced.

### Try With AI Format

```markdown
## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

\`\`\`
<prompt using InsightFlow context>
\`\`\`

**What you're learning:** <1 sentence explaining the skill being practiced>

**Prompt 2 — Adapt** (change the context):

\`\`\`
<prompt with a different product or scenario>
\`\`\`

**What you're learning:** <1 sentence>

**Prompt 3 — Apply** (connect to your domain):

\`\`\`
<prompt asking the student to use their own product>
\`\`\`

**What you're learning:** <1 sentence>
```

### Exercise Format

```markdown
## Exercise: <Title>

**Plugin:** <Official product-management | Custom product-strategy>
**Command:** `/<command>`
**Time:** <N> minutes

**Step 1 — <Setup>**
<instruction>

**Step 2 — <Run the command>**
<instruction with the specific prompt to use>

**Step 3 — <Evaluate the output>**
<instruction to check specific quality criteria from the lesson>

**Step 4 — <Refine>**
<instruction to improve the output based on evaluation>

**Step 5 — <Extend>**
<instruction to apply to a different context or add complexity>
```

### Allowed Docusaurus Components

- `:::note`, `:::info`, `:::tip`, `:::caution`, `:::danger`
- Tables, code blocks, bold, italic
- `<Flashcards />` JSX tag (paired with `.flashcards.yaml` sidecar)

### FORBIDDEN Components

- **No `import` statements** for `@site/src/components/Flashcards` or `@site/src/components/Quiz` — these DO NOT EXIST as importable React components
- No custom React component imports unless verified via `ls apps/learn-app/src/components/`

---

## Practice Product Definition

All exercises use a single practice product for consistency:

| Field                 | Value                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**              | InsightFlow                                                                                                                                             |
| **Type**              | B2B SaaS analytics platform                                                                                                                             |
| **Stage**             | Series B, 50 employees, 200 customers                                                                                                                   |
| **Business model**    | B2B SaaS (Free / Pro / Business / Enterprise)                                                                                                           |
| **Core value prop**   | "InsightFlow turns raw data into decisions without requiring a data team"                                                                               |
| **Primary persona**   | "Analyst Alex" — Data analyst at 100-500 person company. Primary goal: build dashboards without SQL. Biggest frustration: report requests take 3+ days. |
| **Secondary persona** | "VP Engineering Priya" — Wants team performance metrics without asking the data team. Needs weekly automated reports.                                   |
| **Tertiary persona**  | "CFO Marcus" — Needs revenue dashboards for board meetings. Cares about accuracy and audit trail.                                                       |
| **Engineering team**  | 12 engineers + 3 designers. 2-week sprints. Linear for backlog.                                                                                         |
| **Current challenge** | Expanding from analytics to workflow automation — biggest strategic bet of the year                                                                     |
| **Vision**            | "Every business decision backed by real-time data intelligence"                                                                                         |
| **Current themes**    | 1. Workflow automation MVP 2. Enterprise security (SOC 2) 3. Self-serve onboarding                                                                      |

---

## Exercise Progression Chain

Exercises build progressively — each lesson's output feeds the next:

```
L02 (product.local.md) → populates all subsequent commands
L03 (Problem Brief) → frames the discovery for L04
L04 (Interview Guide + Research Synthesis) → evidence for L06
L05 (Competitive Brief) → positioning context for L07
L06 (Feature Spec) → the spec that L07 wraps into a PRD
L07 (PRD) → requirements that L08 decomposes into stories
L08 (User Stories) → stories that L10 prioritises
L09 (Roadmap) → the roadmap that L10's priorities populate
L10 (Prioritised Backlog) → input to L11 sprint planning
L11 (Sprint Plan) → the sprint that L12 communicates about
L12 (Stakeholder Updates) → the comms that L14 agents automate
L13 (Metrics Review) → the data that L14 retro evaluates
L14 (Retro + Agents) → process rules feed back into product.local.md
```

:::note Keep This File
Lessons 3–14 build one continuous product management cycle for InsightFlow. Keep your Cowork session and working folder between lessons.
:::

---

## Two-Plugin Teaching Pattern

### For Official Plugin Skills (L05, L06, L09, L11, L12, L13)

1. **Introduce the command** — Show `/command-name` with a brief description
2. **Explain the workflow** — Reference the official skill's internal workflow (what it asks, what it produces, what MCP connections enhance it)
3. **Show sample input/output** — Using InsightFlow context
4. **Teach evaluation** — How to assess the output quality against PM craft standards from the spec
5. **Exercise** — Student invokes the command in Cowork, evaluates output, refines

### For Custom Plugin Skills (L03, L04, L07, L08, L10, L14)

1. **Introduce the command** — Show `/command-name` from the custom plugin
2. **Explain the skill spec** — What principles the skill enforces (e.g., brief.md's "no solutions in a problem brief" rule)
3. **Show sample input/output** — Using InsightFlow context
4. **Teach evaluation** — Quality criteria from the skill spec's "NEVER DO THESE" section
5. **Exercise** — Student invokes the command, evaluates against skill rules, extends

### For Mixed Lessons (L04 uses both plugins)

Show both commands sequentially: custom `/interview` generates the guide → official `/synthesize-research` processes the interview notes. Teach the handoff between them.

---

## Sidecar File Rules

Every `.md` lesson file gets two sidecar files:

### `.flashcards.yaml`

- 10-15 cards per lesson
- Format: `question:` / `answer:` pairs in YAML list
- Cover key concepts, command purposes, quality criteria, and "NEVER DO" rules
- No import statement needed — the build system pairs them automatically

### `.summary.md`

- 3-5 bullet point summary of the lesson
- Key artifact produced
- Commands used
- Connection to next lesson

---

## Cross-Reference Map

| From | References                      | Why                                                          |
| ---- | ------------------------------- | ------------------------------------------------------------ |
| L01  | Ch 28 (Cowork intro)            | Students must have Cowork set up                             |
| L02  | L01 (problem framing)           | product.local.md uses insights from L01                      |
| L03  | L02 (product.local.md)          | Brief uses product context                                   |
| L04  | L03 (Problem Brief)             | Interview guide addresses brief's discovery questions        |
| L06  | L04 (Research Synthesis)        | Spec uses research evidence                                  |
| L07  | L06 (Feature Spec)              | PRD wraps the spec into a multi-team document                |
| L08  | L07 (PRD)                       | Stories decompose PRD requirements                           |
| L09  | L08 (Stories), L10 (Priorities) | Roadmap organises prioritised stories                        |
| L10  | L08 (Stories)                   | Prioritises the story backlog                                |
| L11  | L10 (Prioritised Backlog)       | Sprint pulls from prioritised backlog                        |
| L12  | L11 (Sprint Plan)               | Updates communicate sprint status                            |
| L13  | L12 (Updates)                   | Metrics review evaluates what updates reported               |
| L14  | L13 (Metrics), all prior        | Retro evaluates the full cycle; agents automate L12 patterns |
| L15  | All                             | Summary and quick reference                                  |

---

## Cowork Terminology Rules

Per `.claude/rules/cowork-content.md`:

- **Use "Cowork"** — not "Claude in Excel", not "Claude Cowork", not "Claude in Cowork"
- **"Claude in Excel" is a separate product** (Ch 28) — never conflate
- **Try With AI setups**: Use `"Use these prompts in Cowork or your preferred AI assistant."`
- **Plugin trees in lessons**: Show only installable components (`.claude-plugin/` + `skills/`), NOT dev artifacts

---

## Fact Verification Flags

- All InsightFlow scenario numbers are **illustrative** — use hedging language ("a company like InsightFlow might see...")
- No real company statistics without WebSearch verification
- PM framework descriptions (RICE, MoSCoW, etc.) are well-established — no verification needed
- Any adoption/market statistics require WebSearch before publication
