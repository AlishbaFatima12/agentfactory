# Chapter 36: Product Management — Agent Team Prompt

Create an agent team to build Chapter 36 (Product Management) for The AI Agent Factory book, including both the custom Cowork plugin and the book chapter content.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

---

## Source Materials

| Material                          | Path                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Governing spec**                | `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` (1,622 lines)                                |
| **Skill specs (custom)**          | `specs/drafts/chapter25_product management/pm-skills/` (10 product skills + 3 agents + router + local.md template)       |
| **Official plugin (Layer 1)**     | `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/` (7 skills, Anthropic v1.2.0) |
| **Chapter output**                | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/`               |
| **Plugin output**                 | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/`                         |
| **Reference chapter (primary)**   | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/`         |
| **Reference chapter (secondary)** | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/34-sales-revops-marketing/`                 |
| **Reference plugin**              | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`                             |
| **Constitution**                  | `.specify/memory/constitution.md`                                                                                        |

## Content Identity

Chapter 36 teaches product managers to build an AI-native product management system using two complementary Cowork plugins. The chapter covers the full PM workflow cycle: discovery briefs, user research, competitive intelligence, feature specifications, PRDs, user stories, roadmap planning, backlog prioritization, sprint planning, stakeholder communication, metrics & OKRs, retrospectives, and persistent PM agents. The governing insight: **every PM artifact is a thinking tool — the quality of what you write determines the quality of what your team builds.**

The chapter ships TWO deliverables:

1. **A custom Cowork plugin** (`product-strategy`) with 6 skills + 3 agents in the `agentfactory-business-plugins` repo — fills gaps in Anthropic's official plugin
2. **15 book lessons** + README in the learn-app docs — teaches BOTH the official and custom plugins together

## Two-Plugin Architecture (BINDING — Central Design Decision)

This chapter uses a **complement, don't replace** strategy:

**Layer 1 — Official Plugin** (`knowledge-work-plugins/product-management`, Anthropic v1.2.0):

- 7 production-ready skills: `/write-spec`, `/roadmap-update`, `/stakeholder-update`, `/sprint-planning`, `/competitive-brief`, `/synthesize-research`, `/metrics-review`
- Students install this as-is. We do NOT duplicate any of these 7 skills.
- Writers teach students to USE these skills in exercises.

**Layer 2 — Custom Plugin** (`product-strategy`, Panaversity):

- 6 unique skills that fill gaps: `/prd`, `/stories`, `/brief`, `/retro`, `/prioritise`, `/interview`
- 3 persistent agents: research-intelligence, stakeholder-update, roadmap-coherence
- 1 config template: `product.local.md.template`
- NO router (well-named skills self-route — validated by Ch 35)
- NO jurisdiction overlays (PM has no regulatory variation)

**The custom plugin does NOT contain**: `/spec`, `/roadmap`, `/research`, `/update` — those are handled by the official plugin's `/write-spec`, `/roadmap-update`, `/synthesize-research`, `/stakeholder-update`.

## Design Decisions (BINDING — Do Not Deviate)

- **No router skill** — 6 skills with distinct trigger phrases need no routing layer
- **No jurisdiction overlays** — product management has no regulatory jurisdiction variation
- **Two-plugin prerequisite** — README must document installing BOTH official + custom plugins
- **Practice product throughout** — all 15 lessons use a consistent B2B SaaS analytics platform scenario
- **PM workflow progression** — lessons follow the natural PM cycle: Understand → Define → Plan → Communicate → Measure → Automate (NOT the spec's part order)
- **Agents are real** — all 3 agents are deployable in Cowork and schedulable via `/schedule`
- **Fact verification flags**: All statistics and scenario numbers (47 support requests, 4 deals lost, 34% adoption, 70/20/10 capacity rule) are illustrative examples — use hedging language ("in one example..." or "practitioners typically report...") unless independently verified via WebSearch. RICE framework attribution to Intercom must be verified.
- **Plugin follows supply-chain pattern** — `.claude-plugin/plugin.json` + `skills/` + `agents/` + `evals/`

## Lesson Plan (15 lessons + README)

| Lesson | Title                                             | Plugin   | Command/Agent                         | Duration | Spec Source                                        |
| ------ | ------------------------------------------------- | -------- | ------------------------------------- | -------- | -------------------------------------------------- |
| L01    | The PM's Cognitive Load Problem                   | —        | None (conceptual)                     | 30 min   | Lines 1-67                                         |
| L02    | Plugin Architecture & Your Product Context        | Both     | Setup + product.local.md              | 25 min   | Lines 26-67 + plugin docs                          |
| L03    | Discovery Briefs — Framing the Right Problem      | Custom   | `/brief`                              | 45 min   | `pm-skills/products/brief.md`                      |
| L04    | User Research — Interviews & Synthesis            | Both     | `/interview` + `/synthesize-research` | 60 min   | Lines 496-614 + `pm-skills/products/interview.md`  |
| L05    | Competitive Intelligence                          | Official | `/competitive-brief`                  | 45 min   | Official plugin skill                              |
| L06    | Feature Specifications                            | Official | `/write-spec`                         | 60 min   | Lines 69-251                                       |
| L07    | PRDs for Multi-Team Initiatives                   | Custom   | `/prd`                                | 60 min   | Lines 252-343 + `pm-skills/products/prd.md`        |
| L08    | User Stories & Story Mapping                      | Custom   | `/stories`                            | 45 min   | Lines 615-743 + `pm-skills/products/stories.md`    |
| L09    | Roadmap Planning & Communication                  | Official | `/roadmap-update`                     | 60 min   | Lines 344-495                                      |
| L10    | Backlog Prioritization Frameworks                 | Custom   | `/prioritise`                         | 60 min   | Lines 846-945 + `pm-skills/products/prioritise.md` |
| L11    | Sprint Planning & Capacity                        | Official | `/sprint-planning`                    | 45 min   | Official plugin skill                              |
| L12    | Stakeholder Communication                         | Official | `/stakeholder-update`                 | 45 min   | Lines 744-845                                      |
| L13    | Metrics, OKRs & Product Analytics                 | Official | `/metrics-review`                     | 60 min   | Official plugin skill                              |
| L14    | Continuous Intelligence — Agents & Retrospectives | Custom   | `/retro` + 3 agents                   | 75 min   | Lines 946-1097 + `pm-skills/agents/*`              |
| L15    | Chapter Summary & Quick Reference                 | —        | Reference tables                      | 20 min   | Lines 1500-1622                                    |

**Reader experience flow**: L01 "I see the problem" → L02 "I have the tools" → L03-L05 "I understand deeply" → L06-L08 "I define precisely" → L09-L11 "I plan realistically" → L12-L13 "I communicate and measure" → L14 "I automate" → L15 "I have a daily reference"

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies.

| Phase | Teammate             | Model  | Depends On        |
| ----- | -------------------- | ------ | ----------------- |
| 1     | `architect`          | opus   | —                 |
| 2     | `reference-builder`  | opus   | architect         |
| 3     | `plugin-builder`     | opus   | architect         |
| 3     | `writer-foundation`  | sonnet | reference-builder |
| 3     | `writer-define-plan` | sonnet | reference-builder |
| 3     | `writer-communicate` | sonnet | reference-builder |
| 4     | `quality-reviewer`   | opus   | all Phase 3       |
| 5     | `quiz-builder`       | sonnet | quality-reviewer  |

**Total: 8 teammates across 5 phases.**

Note: `plugin-builder` runs in parallel with Phase 2 and Phase 3 writers (it depends only on architect, not on reference-builder). All chapter writers depend on reference-builder.

---

## PHASE 1: ARCHITECT

Create task: "Phase 1: Architecture spec for Ch 36 Product Management"
Depends on: nothing
Spawn 1 teammate: `architect`
Model: opus
Permission mode: plan (lead reviews plan before architect writes)

### Architect Teammate Prompt

"You are the `architect` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` — FULL governing spec (1,622 lines). You are the ONLY teammate who reads this entire document.
2. ALL files in `specs/drafts/chapter25_product management/pm-skills/` — 10 product skills + 3 agents + README + local.md template. NOTE: Only 6 of these 10 skills go into our custom plugin (prd, stories, brief, retro, prioritise, interview). The other 4 (spec, roadmap, research, update) are covered by the official Anthropic plugin and must NOT be duplicated.
3. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/README.md` — official plugin overview (understand what Layer 1 provides)
4. Read 2-3 official plugin skill SKILL.md files from `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/` — understand their workflow so writers can teach students to use them
5. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/README.md` — reference chapter README format
6. Read ONE skill-based lesson from Ch 35 (lesson 06 or 07) — reference lesson format (YAML frontmatter, section structure, Try With AI, sidecar patterns)
7. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — reference plugin structure (`.claude-plugin/plugin.json`, `skills/`, `agents/`, `evals/`)
8. `.specify/memory/constitution.md` — project constitution

DELIVERABLES — write ALL of these to `specs/drafts/ch36-product-management/`:

### 1. `architecture-spec.md` — Master Architecture Spec

Directory skeleton for BOTH deliverables:

**Chapter** (`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/`):

```
36-product-management/
├── README.md
├── 01-pms-cognitive-load-problem.md
├── 01-pms-cognitive-load-problem.flashcards.yaml
├── 01-pms-cognitive-load-problem.summary.md
├── 02-plugin-architecture-product-context.md
├── 02-plugin-architecture-product-context.flashcards.yaml
├── 02-plugin-architecture-product-context.summary.md
├── 03-discovery-briefs-framing-problems.md          ← Reference Builder writes this
├── 03-discovery-briefs-framing-problems.flashcards.yaml
├── 03-discovery-briefs-framing-problems.summary.md
├── 04-user-research-interviews-synthesis.md
├── ... (continue for all 15 lessons, each with .flashcards.yaml + .summary.md)
├── 14-continuous-intelligence-agents-retrospectives.md
├── 14-continuous-intelligence-agents-retrospectives.flashcards.yaml
├── 14-continuous-intelligence-agents-retrospectives.summary.md
├── 15-chapter-summary-quick-reference.md
├── 15-chapter-summary-quick-reference.flashcards.yaml
├── 15-chapter-summary-quick-reference.summary.md
└── 16-chapter-quiz.md
```

**Plugin** (`/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/`):

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

Source-to-output mapping table:

- Which spec lines → which lesson files (see Lesson Plan table in Design Decisions section above)
- Which skill spec files → which plugin skill files (only the 6 unique ones)
- Exercise-to-lesson assignment
- Which lessons teach official plugin skills vs custom plugin skills

**CRITICAL**: The lesson order DIFFERS from the spec's part order. The spec goes: Specs → PRDs → Roadmap → Research → Stories → Updates → Prioritisation → Retros. Our chapter reorders to follow the PM workflow cycle: Discovery → Research → Competitive → Specs → PRDs → Stories → Roadmap → Prioritisation → Sprint → Communication → Metrics → Retros/Agents. The mapping table must make this reordering explicit for all writers.

YAML frontmatter template for lessons (derived from Ch 35 L06 format):

- All required fields: slug, sidebar_position, title, description, keywords, chapter (36), lesson, duration_minutes
- Skills metadata with CEFR/Bloom's/DigComp
- Learning objectives with assessment methods
- Cognitive load assessment
- Differentiation (extension + remedial)
- teaching_guide (key_points, misconceptions, discussion_prompts, teaching_tips)

Component/pattern catalog:

- Try With AI format (3 prompts: Reproduce → Adapt → Apply)
- Exercise format (Step 1-5 structure with plugin commands — specify whether the command is from official or custom plugin)
- Docusaurus components allowed: `:::note`, `:::info`, `:::tip`, `:::caution`, `:::danger`, tables, code blocks
- Docusaurus components FORBIDDEN: No `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz` — these DO NOT EXIST. Use `<Flashcards />` JSX tag only.

Two-plugin teaching pattern:

- For official plugin skills: Show the command (e.g., `/write-spec`), explain what it does by referencing the official skill's workflow, show sample input/output, teach students to EVALUATE the output
- For custom plugin skills: Same pattern but reference our skill spec
- For exercises using official skills: Students invoke the command directly in Cowork — no special install beyond the official plugin
- For exercises using custom skills: Students invoke via the custom plugin

Practice product definition:

- Name: "InsightFlow" (B2B SaaS analytics platform)
- Stage: Series B, 50 employees, 200 customers
- Personas: Data analyst (primary), VP Engineering (secondary), CFO (tertiary)
- Key features: dashboard builder, automated reports, data connectors
- Current challenge: expanding from analytics to workflow automation
- This product context populates `product.local.md` in L02 and is used consistently across all exercises

### 2. `shared-brief.md` — Shared Writer's Brief

- Content identity: who this chapter is for (B2B SaaS PMs), tone (professional PM, not academic)
- Two-plugin architecture explanation (Layer 1 = official, Layer 2 = custom)
- Practice product "InsightFlow" details for consistent exercises
- Cross-reference map (which lessons reference which)
- Exercise progression chain: L03→L04→L06→L07→L08→L09→L10 (each builds on prior artifacts)
- Sidecar file rules: every `.md` lesson gets `.flashcards.yaml` + `.summary.md`
- Fact verification flags: all scenario numbers are illustrative, use hedging language
- Cowork terminology: 'Cowork' not 'Claude in Excel' (per `.claude/rules/cowork-content.md`)

### 3. Per-Writer Briefs (one file each)

- `brief-writer-foundation.md` — README + L01 + L02 + L03 + L04 + L05
- `brief-writer-define-plan.md` — L06 + L07 + L08 + L09 + L10
- `brief-writer-communicate.md` — L11 + L12 + L13 + L14 + L15
- `brief-plugin-builder.md` — Full plugin scope (6 skills + 3 agents + config + evals)

Each brief contains:

- Exact file paths to create
- Spec line ranges to read (NOT the full 1,622 lines)
- Skill spec files to read (for custom plugin skills taught in their lessons)
- Official plugin skill files to read (for official skills taught in their lessons)
- Content-specific notes and exercise assignments
- Exit criteria

### 4. Chapter README

Write `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/README.md` following the Ch 35 README format exactly:

- YAML frontmatter (slug, sidebar_position: 36, title, description, chapter_number: 36, part_number: 3, version: 1.0, status: draft)
- Teaching Aid (narrative hook: the PM cognitive load paradox)
- What You'll Learn (8 capabilities with active verbs)
- Lesson Flow table (15 rows: lesson number, title, duration, walk-away artifact)
- Chapter Contract (5 questions students can answer by end)
- Prerequisites:
  - Cowork access
  - Official plugin: `product-management` from knowledge-work-plugins (install instructions)
  - Custom plugin: `product-strategy` from agentfactory-business-plugins (install instructions)
  - Working folder setup
  - `product.local.md` configuration (detailed in L02)
- After Chapter 36 (4 perspective shifts)
- Link to first lesson

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — architecture-spec.md, shared-brief.md, 4 writer briefs, README.md'"

---

## PHASE 2: REFERENCE BUILDER

Create task: "Phase 2: Gold-standard reference lesson (L03)"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `reference-builder`
Model: opus

### Reference Builder Teammate Prompt

"You are the `reference-builder` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch36-product-management/architecture-spec.md` — the master spec from architect
2. `specs/drafts/ch36-product-management/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/06-invoice-reconciliation-at-scale.md` — Ch 35 L06 as format reference (YAML frontmatter, section structure, Try With AI, all patterns)
4. `specs/drafts/chapter25_product management/pm-skills/products/brief.md` — the `/brief` skill spec (source content for this lesson)

DELIVERABLE: Write ONE gold-standard lesson that ALL other writers will match:

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/03-discovery-briefs-framing-problems.md`

This lesson teaches discovery briefs — how to reframe feature requests into problem statements before jumping to solutions. The `/brief` command comes from the custom `product-strategy` plugin. It must demonstrate EVERY pattern:

- [ ] Full YAML frontmatter (all fields from architecture-spec.md template, including teaching_guide)
- [ ] Narrative opening connecting to real PM scenario: someone says 'we need a dashboard' — but what's the actual problem?
- [ ] Core concept: problem/opportunity brief structure (problem statement → user context → scope boundary → proposed approach → success metrics)
- [ ] Contrast: solution-prescriptive vs problem-focused framing
- [ ] Worked example using the InsightFlow practice product: reframe 'build a dashboard' into a proper problem brief
- [ ] `/brief` skill interaction: show the command with sample input, show sample output, teach students to evaluate whether the AI's framing is problem-focused or solution-prescriptive
- [ ] Exercise: Student receives a feature request and uses `/brief` to reframe it, then evaluates the output
- [ ] Try With AI section (3 prompts: Reproduce → Adapt → Apply)
- [ ] `:::note` and `:::info` blocks used appropriately
- [ ] NO `import` statements for Flashcards or Quiz components (these DO NOT EXIST as React components)
- [ ] `<Flashcards />` JSX tag at the end of the lesson (paired with the .flashcards.yaml sidecar)

Also write the sidecar files:

- `03-discovery-briefs-framing-problems.flashcards.yaml`
- `03-discovery-briefs-framing-problems.summary.md`

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — 03-discovery-briefs-framing-problems.md + .flashcards.yaml + .summary.md'"

---

## PHASE 3: PLUGIN BUILDER + CHAPTER WRITERS (parallel)

After Phase 2 completes (reference lesson exists), spawn ALL Phase 3 teammates SIMULTANEOUSLY. The plugin-builder can start after Phase 1 (does not need the reference lesson). Chapter writers need the reference lesson.

### 3A: Plugin Builder

Create task: "Phase 3A: Build product-strategy plugin"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `plugin-builder`
Model: opus

#### Plugin Builder Teammate Prompt

"You are the `plugin-builder` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

You build the custom Cowork plugin (`product-strategy`). You do NOT write book lessons.

IMPORTANT CONTEXT: This plugin is Layer 2 — it complements Anthropic's official `product-management` plugin (Layer 1). You are building ONLY the 6 skills + 3 agents that the official plugin does NOT provide. Do NOT create skills for spec/roadmap/research/update — those are handled by the official plugin.

REFERENCE DOCUMENTATION — Read these FIRST:

1. https://code.claude.com/docs/en/plugins-reference — Official plugin format, plugin.json schema, directory structure, component types
2. https://agentskills.io/specification — SKILL.md format specification (YAML frontmatter schema, name constraints, description field, progressive disclosure)
3. https://code.claude.com/docs/en/sub-agents — Agent definition format (frontmatter fields: name, description, tools, model, memory, background, skills)

READ IN ORDER:

1. `specs/drafts/ch36-product-management/architecture-spec.md` — master spec with plugin directory skeleton
2. `specs/drafts/ch36-product-management/brief-plugin-builder.md` — your specific brief
3. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/.claude-plugin/plugin.json` — reference plugin.json format
4. Read 2-3 supply-chain skill SKILL.md files from `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/skills/` — reference skill format
5. Read 1-2 supply-chain agent files from `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/agents/` — reference agent format
6. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/CLAUDE.md` — business plugins development guidelines
7. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/EVAL-CONVENTIONS.md` — eval conventions
8. ALL files in `specs/drafts/chapter25_product management/pm-skills/products/` — source skill specs. ONLY convert these 6: `prd.md`, `stories.md`, `brief.md`, `retro.md`, `prioritise.md`, `interview.md`. SKIP: `spec.md`, `roadmap.md`, `research.md`, `update.md` (covered by official plugin).
9. ALL files in `specs/drafts/chapter25_product management/pm-skills/agents/` — source agent specs (3 agents)
10. `specs/drafts/chapter25_product management/pm-skills/product.local.md.template` — configuration template

DELIVERABLES — write to `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/`:

### 1. Plugin Manifest

`.claude-plugin/plugin.json`:

```json
{
  \"name\": \"product-strategy\",
  \"version\": \"1.0.0\",
  \"description\": \"Product strategy and PM workflow intelligence — PRDs, user stories, discovery briefs, retrospectives, backlog prioritization, interview guides, and persistent PM agents. Layer 2 complement to Anthropic's product-management plugin.\",
  \"author\": {
    \"name\": \"Panaversity\",
    \"url\": \"https://github.com/panaversity\"
  },
  \"homepage\": \"https://agentfactory.panaversity.org\",
  \"repository\": \"https://github.com/panaversity/agentfactory-business-plugins\",
  \"license\": \"Apache-2.0\",
  \"keywords\": [\"product-management\", \"prd\", \"user-stories\", \"discovery-brief\", \"retrospective\", \"prioritization\", \"interview-guide\", \"product-strategy\"]
}
```

### 2. Skills (6 total, NO router)

Convert each spec skill file into proper SKILL.md format per https://agentskills.io/specification:

| Spec File                | Plugin Skill Dir             | Command       | Notes                                                                             |
| ------------------------ | ---------------------------- | ------------- | --------------------------------------------------------------------------------- |
| `products/prd.md`        | `skills/prd/SKILL.md`        | `/prd`        | Multi-team initiative PRDs (NOT feature specs — those use official `/write-spec`) |
| `products/stories.md`    | `skills/stories/SKILL.md`    | `/stories`    | Spec → user story translation + acceptance criteria                               |
| `products/brief.md`      | `skills/brief/SKILL.md`      | `/brief`      | Problem/opportunity briefs (NOT competitive — official has `/competitive-brief`)  |
| `products/retro.md`      | `skills/retro/SKILL.md`      | `/retro`      | Post-launch product retrospectives + learning extraction                          |
| `products/prioritise.md` | `skills/prioritise/SKILL.md` | `/prioritise` | RICE/ICE/MoSCoW backlog scoring with explicit assumptions                         |
| `products/interview.md`  | `skills/interview/SKILL.md`  | `/interview`  | User interview guide generation (JTBD framework)                                  |

Each SKILL.md must have:

- YAML frontmatter: `name` (matching directory, lowercase+hyphens), `description` (max 1024 chars, include trigger phrases AND 'NOT for' exclusions), `license: Apache-2.0`, `metadata: { author: panaversity, version: \"1.0\" }`
- Body: step-by-step workflow instructions from spec, output format templates, never-do rules
- Each skill should reference `product.local.md` for organization-specific context
- Keep under 500 lines per SKILL.md (move detailed reference to `references/` if needed)
- Include explicit mention that official plugin handles the complementary workflows (e.g., `/brief` description mentions '/competitive-brief for competitive analysis is in the official product-management plugin')

### 3. Agents (3 total)

Convert each spec agent file into proper agent.md format per https://code.claude.com/docs/en/sub-agents:

| Spec File                               | Plugin Agent File                 | Purpose                                              |
| --------------------------------------- | --------------------------------- | ---------------------------------------------------- |
| `agents/research-intelligence-agent.md` | `agents/research-intelligence.md` | Weekly user signal monitoring (support/NPS/requests) |
| `agents/stakeholder-update-agent.md`    | `agents/stakeholder-update.md`    | Automated weekly stakeholder updates (3 audiences)   |
| `agents/roadmap-coherence-agent.md`     | `agents/roadmap-coherence.md`     | Backlog/roadmap alignment audits                     |

Each agent.md must have YAML frontmatter:

- `name`: lowercase+hyphens identifier
- `description`: when Claude should invoke this agent
- `tools`: appropriate tool list (Read, Grep, Glob, Bash, WebSearch, WebFetch as needed)
- `model`: inherit
- `background`: true (these are persistent monitoring agents)
- `skills`: list relevant custom plugin skills this agent should have preloaded

Body: detailed system prompt from spec (monitoring schedule, alert types, escalation rules, never-do rules).

### 4. Configuration Template

`product.local.md.template` — convert from spec source. Include all sections:

- Product Identity (name, description, stage, business model, value prop)
- Product Vision (vision, strategy, current themes)
- Personas (primary, secondary, tertiary — with job, frustrations, behavioral signals)
- Engineering Team (size, sprint cadence, velocity, team agreements)
- Stakeholder Map (role, cares about, communication style, alert thresholds)
- Terminology Glossary (product-specific terms)
- Quality Standards (spec quality bar, sprint-readiness checklist)
- Research Configuration (data sources + signal thresholds for agent escalation)
- Roadmap Configuration (current themes, roadmap tool, communication schedule)

### 5. Evals

Create `evals/evals.json` with golden test cases following the EVAL-CONVENTIONS.md format:

- At least 2 routing cases per skill (12 minimum)
- At least 2 negative cases (queries that should NOT match product-strategy and should go to official plugin instead)
- Include cases that test the boundary between custom and official plugin (e.g., 'write me a spec' should NOT match custom plugin)

### 6. CLAUDE.md

Plugin-level instructions:

- Explain the Layer 1/Layer 2 relationship
- List which commands belong to this plugin vs the official one
- Reference `product.local.md` for configuration
- Include never-do rules (e.g., never duplicate official plugin functionality)

### 7. README.md

Plugin README with:

- Quick Start (install instructions for BOTH official + custom plugins)
- Skill inventory table (command → purpose → 'official' or 'custom')
- Agent inventory table (name → purpose → schedule)
- Configuration (`product.local.md.template` overview)
- Layer 1/Layer 2 architecture explanation

### 8. Post-Build Validation

After writing ALL files, validate EACH ONE:

**Per SKILL.md:**

- Name is 1-64 chars, lowercase+hyphens, matches directory exactly
- No consecutive hyphens
- Description is 1-1024 chars with trigger phrases
- Body under 500 lines
- Has step-by-step workflow section
- Has output format templates
- Has never-do rules

**Per agent.md:**

- Has required frontmatter (name, description, tools)
- `background: true` for monitoring agents
- `skills` list references skills that actually exist in this plugin
- Has monitoring schedule, alert types, escalation rules

**plugin.json:**

- Valid JSON
- `name` matches directory (`product-strategy`)
- Version in semver

**Cross-file:**

- Every skill directory name matches its SKILL.md `name` field
- Every agent's `skills` list references existing skills
- README tables match actual contents
- No references to a router (there is no router)
- No references to jurisdiction overlays
- No skills that duplicate official plugin (no spec, roadmap, research, update)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'PLUGIN-BUILDER DONE — plugin.json + 6 skills + 3 agents + config template + evals + CLAUDE.md + README'"

---

### 3B: Writer — Foundation (README + L01-L05)

Create task: "Phase 3B: Foundation lessons (L01-L05)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-foundation`
Model: sonnet

#### Writer Foundation Teammate Prompt

"You are the `writer-foundation` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch36-product-management/architecture-spec.md` (master spec — file paths, patterns, YAML template, practice product details)
2. `specs/drafts/ch36-product-management/shared-brief.md` (shared context — identity, terminology, two-plugin architecture, cross-refs)
3. `specs/drafts/ch36-product-management/brief-writer-foundation.md` (YOUR specific brief with scope and source line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/03-discovery-briefs-framing-problems.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 1-67 (Introduction + Plugin Architecture overview)
6. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 496-614 (Part 4: User Research Synthesis)
7. `specs/drafts/chapter25_product management/pm-skills/products/interview.md` — `/interview` skill spec (custom plugin, for L04)
8. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/synthesize-research/SKILL.md` — official `/synthesize-research` skill (for L04)
9. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/competitive-brief/SKILL.md` — official `/competitive-brief` skill (for L05)

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports (no `import` statements for Flashcards, Quiz, or any `@site/src/components/`)
- Use `<Flashcards />` JSX tag at end of each lesson (valid component, paired with .flashcards.yaml sidecar)
- Cowork terminology: say 'Cowork' not 'Claude in Excel' (unless referencing Ch 28's product specifically)
- Fact verification: all scenario numbers use hedging language ('in one example...') unless you independently verify via WebSearch
- Two-plugin clarity: when introducing a command, state which plugin it comes from (official or custom)
- Practice product: use 'InsightFlow' (B2B SaaS analytics) consistently as defined in architecture spec
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `01-pms-cognitive-load-problem.md` — The PM's cognitive load paradox: researcher + writer + strategist + communicator + decision-maker. Why PM artifacts matter. Quality diagnostic exercise: evaluate 3 sample specs (good, mediocre, bad) and identify quality signals. No plugin commands used. Duration: ~30 min.

2. `02-plugin-architecture-product-context.md` — Install BOTH plugins (official `product-management` + custom `product-strategy`). Explain the Layer 1/Layer 2 architecture. Configure `product.local.md` for InsightFlow. Exercise: complete the full product.local.md template. Duration: ~25 min.

3. L03 is already written by reference-builder — DO NOT create `03-discovery-briefs-framing-problems.md` or its sidecars.

4. `04-user-research-interviews-synthesis.md` — The research cycle: design interviews → synthesize findings. First half: `/interview` (custom plugin) for interview guide design with JTBD framework. Second half: `/synthesize-research` (official plugin) for thematic analysis and persona development. Exercise: (1) Generate interview guide for the L03 discovery brief, evaluate question quality. (2) Given mock interview transcripts, run `/synthesize-research` to extract insights, evaluate behavioral vs stated preferences. Duration: ~60 min.

5. `05-competitive-intelligence.md` — Building strategic competitive understanding. Landscape mapping (direct/indirect/adjacent). `/competitive-brief` (official plugin) for feature comparison, positioning analysis, win/loss methodology. Exercise: Create competitive brief for InsightFlow's market with landscape map, feature comparison matrix, positioning analysis, and 3 strategic implications. Evaluate whether the AI is honest about competitor strengths. Duration: ~45 min.

Plus 4 `.flashcards.yaml` files and 4 `.summary.md` files = 12 files total (NOT counting L03 which is already done).

When finished, message the team lead: 'WRITER FOUNDATION DONE — L01 + L02 + L04 + L05 (12 files)'"

---

### 3C: Writer — Define & Plan (L06-L10)

Create task: "Phase 3C: Define + Plan lessons (L06-L10)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-define-plan`
Model: sonnet

#### Writer Define-Plan Teammate Prompt

"You are the `writer-define-plan` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch36-product-management/architecture-spec.md` (master spec)
2. `specs/drafts/ch36-product-management/shared-brief.md` (shared context)
3. `specs/drafts/ch36-product-management/brief-writer-define-plan.md` (YOUR specific brief with scope and line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/03-discovery-briefs-framing-problems.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 69-251 (Part 1: Feature Specifications)
6. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 252-343 (Part 2: PRDs)
7. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 615-743 (Part 5: User Stories)
8. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 344-495 (Part 3: Roadmap Planning)
9. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 846-945 (Part 7: Backlog Prioritisation)
10. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/write-spec/SKILL.md` — official `/write-spec` skill (for L06)
11. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/roadmap-update/SKILL.md` — official `/roadmap-update` skill (for L09)
12. `specs/drafts/chapter25_product management/pm-skills/products/prd.md` — `/prd` skill spec (custom, for L07)
13. `specs/drafts/chapter25_product management/pm-skills/products/stories.md` — `/stories` skill spec (custom, for L08)
14. `specs/drafts/chapter25_product management/pm-skills/products/prioritise.md` — `/prioritise` skill spec (custom, for L10)

RULES:

- Match the reference lesson's quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- Two-plugin clarity: state which plugin each command comes from
- Practice product: use 'InsightFlow' consistently
- Exercise chain: L06 builds on L04 research insights. L07 expands L06 spec. L08 breaks L07 PRD into stories. L09 builds roadmap from L08 stories. L10 prioritizes the roadmap items. Make these cross-references explicit.
- RICE framework attribution: verify Intercom/Sean McBride origin via WebSearch before citing. If unverifiable, hedge.
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `06-feature-specifications.md` — The 5-section spec standard (Problem → Solution → Acceptance Criteria → Edge Cases → Open Questions). AC quality rules (no 'and', independently testable). `/write-spec` (official plugin) workflow deep dive. Exercise: Write spec for a feature identified in L04 research. Run `/write-spec`, evaluate AC quality. Duration: ~60 min.

2. `07-prds-multi-team-initiatives.md` — Spec vs PRD distinction (tactical/single-team vs strategic/multi-team). PRD structure: exec summary → business context → user requirements → functional requirements → non-functional requirements → success metrics. `/prd` (custom plugin) workflow. Exercise: Expand L06 spec into a full initiative PRD. Evaluate commercial evidence and measurable success metrics. Duration: ~60 min.

3. `08-user-stories-story-mapping.md` — Translate specs/PRDs into implementable user stories. Story format (As a [persona] I want [action] so that [outcome]). Story mapping. Given/When/Then acceptance criteria. `/stories` (custom plugin) workflow. Exercise: Take L07 PRD, generate stories via `/stories`. Evaluate: independently deliverable? Sized for single sprint? Duration: ~45 min.

4. `09-roadmap-planning-communication.md` — Now/Next/Later framework. RICE prioritization for roadmap items. Dependency mapping. Capacity allocation (70/20/10 rule — verify source). `/roadmap-update` (official plugin) workflow. Exercise: Build roadmap from L08 stories. Create 3 audience versions (team/executive/customer). Evaluate audience calibration. Duration: ~60 min.

5. `10-backlog-prioritization-frameworks.md` — RICE, ICE, MoSCoW frameworks with explicit assumptions and data gap visibility. `/prioritise` (custom plugin) workflow with scoring templates. Exercise: RICE-score a 15-item backlog. Challenge 3 scores ('What if reach is 2x?' 'What if confidence drops?'). Evaluate transparent defense/adjustment. Duration: ~60 min.

Plus 5 `.flashcards.yaml` files and 5 `.summary.md` files = 15 files total.

When finished, message the team lead: 'WRITER DEFINE-PLAN DONE — L06 + L07 + L08 + L09 + L10 (15 files)'"

---

### 3D: Writer — Communicate, Measure & Automate (L11-L15)

Create task: "Phase 3D: Communicate + Automate + Summary lessons (L11-L15)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-communicate`
Model: sonnet

#### Writer Communicate Teammate Prompt

"You are the `writer-communicate` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch36-product-management/architecture-spec.md` (master spec)
2. `specs/drafts/ch36-product-management/shared-brief.md` (shared context)
3. `specs/drafts/ch36-product-management/brief-writer-communicate.md` (YOUR specific brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/03-discovery-briefs-framing-problems.md` (reference lesson)
5. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/sprint-planning/SKILL.md` — official `/sprint-planning` skill (for L11)
6. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/stakeholder-update/SKILL.md` — official `/stakeholder-update` skill (for L12)
7. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/metrics-review/SKILL.md` — official `/metrics-review` skill (for L13)
8. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 744-845 (Part 6: Stakeholder Updates)
9. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 946-1097 (Part 8: Retrospectives + Part 9: PM Agents)
10. `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 1500-1622 (Summary + Quick Reference)
11. `specs/drafts/chapter25_product management/pm-skills/products/retro.md` — `/retro` skill spec (custom, for L14)
12. ALL files in `specs/drafts/chapter25_product management/pm-skills/agents/` — 3 agent specs (for L14)

RULES:

- Match the reference lesson's quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- Two-plugin clarity: state which plugin each command comes from
- Practice product: use 'InsightFlow' consistently
- L14 must teach `/schedule` for agent automation — agents are REAL deployable components in Cowork
- L15 quick reference must cover ALL 13 commands across BOTH plugins (7 official + 6 custom)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `11-sprint-planning-capacity.md` — Plan sprints by scoping work against real team capacity. Capacity estimation (PTO, meetings, on-call buffers). Sprint goals (one clear goal). 70-80% capacity planning. Definition of Done. `/sprint-planning` (official plugin) workflow. Exercise: Plan a sprint from the roadmap's 'Now' items. Account for 1 team member on PTO, 1 on-call rotation, 2 carryover stories. Evaluate whether planned work fits capacity. Duration: ~45 min.

2. `12-stakeholder-communication.md` — Same reality, three languages (exec/eng/customer). Audience-calibrated updates. Status signaling (Green/Yellow/Red — when to escalate). Risk communication (ROAM: Resolved/Owned/Accepted/Mitigated). `/stakeholder-update` (official plugin) workflow. Exercise: Given a scenario (feature delayed, dependency blocked, customer escalation), create stakeholder updates for 3 audiences. Evaluate: exec version < 200 words? engineering includes links? customer avoids jargon? Duration: ~45 min.

3. `13-metrics-okrs-product-analytics.md` — Metrics hierarchy (North Star → L1 → L2). OKR writing (Objective + 2-4 Key Results). Dashboard design anti-patterns (vanity metrics, stale data, one-dashboard-for-all). Review cadences (weekly/monthly/quarterly). `/metrics-review` (official plugin) workflow. Exercise: Define North Star + L1 metrics for InsightFlow. Run `/metrics-review` with sample data. Set OKRs for next quarter. Evaluate: are Key Results measurable? Is the North Star actionable? Duration: ~60 min.

4. `14-continuous-intelligence-agents-retrospectives.md` — Two parts: (1) Product retrospectives: 4-question retro format (What did we build? What happened? Why? What changes?). `/retro` (custom plugin) workflow. Learning extraction and process commitments. (2) Deploy 3 persistent PM agents: research-intelligence-agent (weekly signal monitoring), stakeholder-update-agent (automated weekly updates), roadmap-coherence-agent (backlog alignment audits). Teach `/schedule` for automation. Exercise: (a) Run a feature retro using `/retro` on an InsightFlow launch. Extract 3 process commitments, update product.local.md. (b) Deploy all 3 agents, configure escalation thresholds, verify agents produce first outputs. Duration: ~75 min.

5. `15-chapter-summary-quick-reference.md` — Chapter summary (PM as thinking discipline, two-plugin architecture recap). Quick reference tables: ALL 13 commands across both plugins (7 official + 6 custom) with command name, plugin source, purpose, and example use case. Key frameworks table (RICE, MoSCoW, ICE, Now/Next/Later, ROAM, 70/20/10). 3 agents table with monitoring schedules. Updated product.local.md template reference. No exercise (reference lesson). Duration: ~20 min.

Plus 5 `.flashcards.yaml` files and 5 `.summary.md` files = 15 files total.

When finished, message the team lead: 'WRITER COMMUNICATE DONE — L11 + L12 + L13 + L14 + L15 (15 files)'"

---

## PHASE 4: QUALITY REVIEWER

Create task: "Phase 4: Quality review of all Chapter 36 output"
Depends on: ALL Phase 3 tasks (plugin-builder + all 3 writers)
Spawn 1 teammate: `quality-reviewer`
Model: opus

### Quality Reviewer Teammate Prompt

"You are the `quality-reviewer` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch36-product-management/architecture-spec.md` — master spec (directory skeleton, YAML template)
2. `specs/drafts/ch36-product-management/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/03-discovery-briefs-framing-problems.md` — reference lesson (quality benchmark)
4. ALL lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/` — review every .md file
5. ALL plugin files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/` — review every skill and agent

REVIEW CHECKLIST:

**Chapter lessons (universal checks):**

- [ ] Every lesson has complete YAML frontmatter (all required fields from architecture-spec template)
- [ ] Every lesson has teaching_guide section in frontmatter (key_points, misconceptions, discussion_prompts, teaching_tips)
- [ ] Keywords list has 8-20 terms per lesson
- [ ] Try With AI section has 3 prompts (Reproduce → Adapt → Apply) with learning explanations
- [ ] NO `import` statements for any `@site/src/components/` (phantom import check)
- [ ] `<Flashcards />` JSX tag present at end of each lesson (NOT an import statement)
- [ ] Cowork terminology correct ('Cowork' not 'Claude in Excel')
- [ ] Exercise format follows Step 1-5 structure with deliverable
- [ ] Cross-references are accurate (exercise chain: L03→L04→L06→L07→L08→L09→L10)
- [ ] Duration is reasonable for content depth
- [ ] Every .md lesson has matching .flashcards.yaml + .summary.md sidecar files
- [ ] Sidebar positions are sequential (1-15)
- [ ] Slugs follow pattern: `/Business-Domain-Agent-Workflows/product-management/[lesson-slug]`
- [ ] Practice product 'InsightFlow' used consistently across all exercises

**Two-plugin correctness:**

- [ ] Every command usage clearly states which plugin it comes from (official or custom)
- [ ] Official plugin commands used: `/write-spec`, `/roadmap-update`, `/stakeholder-update`, `/sprint-planning`, `/competitive-brief`, `/synthesize-research`, `/metrics-review`
- [ ] Custom plugin commands used: `/prd`, `/stories`, `/brief`, `/retro`, `/prioritise`, `/interview`
- [ ] No lesson teaches a custom version of an official command
- [ ] L02 documents installing BOTH plugins
- [ ] L15 quick reference covers ALL 13 commands across both plugins

**Plugin (technical checks):**

- [ ] plugin.json is valid JSON with `name: \"product-strategy\"`
- [ ] Every SKILL.md has valid YAML frontmatter (name matches directory, description present)
- [ ] Skill names are lowercase+hyphens only, no consecutive hyphens
- [ ] Only 6 skills exist (prd, stories, brief, retro, prioritise, interview) — NO spec/roadmap/research/update
- [ ] Agent .md files have required frontmatter (name, description, tools, background: true)
- [ ] Agent `skills` lists reference skills that actually exist
- [ ] product.local.md.template covers all required sections
- [ ] evals/evals.json has 12+ test cases including negative cases
- [ ] No skills reference a router (there is no router)
- [ ] README clearly explains Layer 1/Layer 2 architecture

**Content quality:**

- [ ] Voice is consistent across all lessons (professional PM, not academic)
- [ ] Cognitive load assessment is reasonable per lesson
- [ ] All scenario numbers use hedging language (not stated as verified facts)
- [ ] Lesson progression follows PM workflow cycle: Understand → Define → Plan → Communicate → Measure → Automate
- [ ] Exercises build progressively (each exercise builds on prior artifacts)

DELIVERABLE: Write quality report to `specs/drafts/ch36-product-management/quality-report.md`:

```
## Quality Report: Chapter 36 Product Management

### Overall Score: [PASS/CONDITIONAL PASS/FAIL]

### Per-Writer Summary
| Writer | Files | Issues | Verdict |
|---|---|---|---|
| reference-builder | 3 | [N] | [PASS/FAIL] |
| writer-foundation | 12 | [N] | [PASS/FAIL] |
| writer-define-plan | 15 | [N] | [PASS/FAIL] |
| writer-communicate | 15 | [N] | [PASS/FAIL] |
| plugin-builder | ~15 | [N] | [PASS/FAIL] |

### Issues List
[Numbered list of all issues found, grouped by severity: Critical / Warning / Suggestion]

### Two-Plugin Correctness
[Specific findings on Layer 1/Layer 2 usage across all lessons]
```

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md written. Overall: [PASS/FAIL]'"

---

## PHASE 5: POST-PRODUCTION

After quality review passes, run post-production tasks. These use the SAME team — do NOT shut down teammates yet.

### 5A: Chapter Quiz

Create task: "Phase 5A: Generate 50-question chapter quiz"
Depends on: Phase 4 (quality-reviewer passes)
Spawn 1 teammate: `quiz-builder`
Model: sonnet

#### Quiz Builder Teammate Prompt

"You are the `quiz-builder` teammate for Chapter 36: Product Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. ALL lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/` — read every lesson to understand full chapter content
2. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/16-chapter-quiz.md` — reference quiz format

DELIVERABLE:

Write `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/16-chapter-quiz.md`

Use the `/quiz-generator` skill to generate a 50-question scenario-based quiz:

- Questions must cover ALL 15 lessons proportionally
- Include questions about BOTH official and custom plugin commands
- Scenario-based (not trivia) — test applied understanding
- Cover the chapter contract's 5 focus questions
- Follow the reference quiz format exactly
- YAML frontmatter with sidebar_position: 16

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUIZ-BUILDER DONE — 16-chapter-quiz.md (50 questions)'"

---

## Lead Coordination Rules

1. **Create the team** with TeamCreate before spawning any teammates
2. **Create ALL tasks upfront** with correct dependencies:
   - Phase 1 (architect): no dependencies
   - Phase 2 (reference-builder): depends on Phase 1
   - Phase 3A (plugin-builder): depends on Phase 1 (NOT Phase 2)
   - Phase 3B-3D (chapter writers): depend on Phase 2
   - Phase 4 (quality-reviewer): depends on ALL Phase 3 tasks
   - Phase 5A (quiz-builder): depends on Phase 4 (quality review must pass first)
3. **Enforce phase ordering** — do NOT spawn Phase 2 until architect signals done
4. **Do NOT write content yourself** — you coordinate, you do not write
5. **Wait for architect's plan** — architect uses plan mode, review the directory skeleton before approving
6. **Spawn plugin-builder and reference-builder after architect completes** — plugin-builder can run in parallel with Phase 2
7. **Spawn ALL chapter writers simultaneously** after reference-builder completes
8. **Monitor progress** — if a teammate appears stuck (no message after extended time), send a check-in message
9. **If a teammate fails**, diagnose the issue and either message them to retry or spawn a replacement
10. **After quality reviewer completes**:
    - If PASS: proceed to Phase 5 (post-production)
    - If CONDITIONAL PASS: fix minor issues yourself or message relevant writer
    - If FAIL: message the failing writer(s) with specific issues, wait for fixes, re-run quality review
11. **After Phase 5 completes, run post-production skills yourself (as lead)**:
    - Run `/summary-generator` on any lessons missing `.summary.md` sidecars
    - Run `/generate-flashcards` on any lessons missing `.flashcards.yaml` sidecars
    - These should already exist (writers create them), but verify and fill gaps
12. **Structural verification** (after all phases complete):

    ```bash
    # Chapter file counts
    ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/*.md | wc -l
    # Expected: 16+ (README + 15 lessons + quiz)
    ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/*.summary.md | wc -l
    # Expected: 15
    ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/*.flashcards.yaml | wc -l
    # Expected: 15

    # Plugin file counts
    ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/skills/*/SKILL.md | wc -l
    # Expected: 6
    ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/agents/*.md | wc -l
    # Expected: 3

    # Phantom import check
    grep -r "import.*@site/src/components" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/
    # Must return nothing

    # No duplicated official skills
    ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/skills/
    # Must show ONLY: prd, stories, brief, retro, prioritise, interview (NOT spec, roadmap, research, update)

    # Spot-check YAML frontmatter (3 random lessons)
    head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/04-*.md
    head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/09-*.md
    head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/13-*.md

    # Quiz exists
    ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/16-chapter-quiz.md

    # README has both plugin prereqs
    grep -c "product-management\|product-strategy" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/README.md
    # Should show references to both plugins
    ```

13. **Cleanup**: When all verification passes, shut down all teammates and delete the team
14. **Final message**: Report to user with:
    - File counts (lessons, sidecars, quiz, plugin skills, agents)
    - Quality score
    - Two-plugin correctness summary
    - Any remaining notes or manual steps needed

## Model Preferences

| Teammate           | Model  | Rationale                                                 |
| ------------------ | ------ | --------------------------------------------------------- |
| architect          | opus   | Reads full 1,622-line spec, produces binding architecture |
| reference-builder  | opus   | Sets quality bar for all writers                          |
| plugin-builder     | opus   | Technical precision for skill/agent format compliance     |
| writer-foundation  | sonnet | Standard lesson writing                                   |
| writer-define-plan | sonnet | Standard lesson writing                                   |
| writer-communicate | sonnet | Standard lesson writing                                   |
| quality-reviewer   | opus   | Needs judgment to evaluate cross-cutting quality          |
| quiz-builder       | sonnet | Quiz generation from existing content                     |

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 2 before Phase 1 completes
- Do NOT spawn Phase 3 chapter writers before Phase 2 completes (plugin-builder CAN start after Phase 1)
- Do NOT spawn quality reviewer before ALL Phase 3 teammates complete
- Do NOT spawn quiz builder before quality reviewer passes
- Do NOT let writer teammates read the full 1,622-line source draft (only architect reads it all)
- Do NOT skip quality review or structural verification
- Do NOT approve architect's plan without reviewing the directory structure and YAML template
- Do NOT build skills that duplicate the official plugin (spec, roadmap, research, update)
- Do NOT commit to git until all verification passes and user approves
- Do NOT shut down the team after Phase 3 — Phase 4 and 5 need the same team context
