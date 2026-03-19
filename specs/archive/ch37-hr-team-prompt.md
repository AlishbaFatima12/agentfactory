# Chapter 37: People & HR — Agent Team Prompt

Create an agent team to build Chapter 37 (People & HR) for The AI Agent Factory book, including both the custom Cowork plugin and the book chapter content.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

---

## Source Materials

| Material                          | Path                                                                                                                             |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Governing spec**                | `specs/drafts/chapter26_hr/Chapter26_People_HR.md`                                                                               |
| **Skill specs**                   | `specs/drafts/chapter26_hr/hr-skills/` (10 product skills + 4 agents + router + README + local.md template)                      |
| **Official HR plugin**            | `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/` (9 skills, Anthropic — already shipped) |
| **Chapter output**                | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/`                                  |
| **Plugin output**                 | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/`                                    |
| **Reference chapter (primary)**   | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/`                 |
| **Reference chapter (secondary)** | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/34-sales-revops-marketing/`                         |
| **Reference plugin**              | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`                                     |
| **Constitution**                  | `.specify/memory/constitution.md`                                                                                                |

## Content Identity

Chapter 37 teaches HR professionals and people operations managers to build an AI-native HR operations system using Cowork plugins. The chapter covers the full employee lifecycle: policy self-service, onboarding, job descriptions, offers, performance reviews, compensation analysis, talent matching, institutional knowledge capture, offboarding, and persistent HR agents. The governing insight: **HR teams spend 60% of their time answering the same ten questions and generating the same documents — AI eliminates the repetitive 60% so HR can invest fully in the high-judgment 40% that only humans can do.**

The chapter ships TWO deliverables:

1. **A custom Cowork plugin** (`hr-operations`) with 5 skills + 4 agents in the `agentfactory-business-plugins` repo — covering ONLY what the official Anthropic `human-resources` plugin does not
2. **15 book lessons** + README in the learn-app docs

## Plugin Architecture (BINDING — Do Not Deviate)

This chapter uses THREE plugins (same multi-plugin pattern as Ch 34 Sales):

### Official `human-resources` Plugin (Anthropic — Already Shipped, Do NOT Build)

Students install this from Cowork → Plugins → Browse. It provides:

| Command               | Function                                |
| --------------------- | --------------------------------------- |
| `/onboarding`         | Generate onboarding plans and schedules |
| `/policy-lookup`      | Look up and explain HR policies         |
| `/draft-offer`        | Draft offer letters with compensation   |
| `/performance-review` | Structure performance reviews and 360°  |
| `/comp-analysis`      | Compensation benchmarking and analysis  |
| `/people-report`      | Workforce analytics and reporting       |
| `recruiting-pipeline` | (auto) Recruiting pipeline tracking     |
| `org-planning`        | (auto) Org structure planning           |
| `interview-prep`      | (auto) Interview guides and scorecards  |

### Custom `hr-operations` Plugin (Panaversity — BUILD THIS)

Students install this from the Panaversity marketplace. It provides ONLY what the official plugin does NOT cover:

| Command      | Function                                             |
| ------------ | ---------------------------------------------------- |
| `/jd`        | Write or improve job descriptions                    |
| `/match`     | Talent matching and internal mobility assessment     |
| `/knowledge` | Capture institutional knowledge before departure     |
| `/reference` | Draft reference letters and employment verifications |
| `/offboard`  | Structure offboarding and knowledge transfer         |

**Agents** (all `background: true`, persistent):

| Agent                         | Purpose                                                       |
| ----------------------------- | ------------------------------------------------------------- |
| `knowledge-base-agent`        | Always-on employee Q&A with warm handoff for individual cases |
| `onboarding-orchestrator`     | Automated onboarding checklist (T-14 through Day 90)          |
| `policy-maintenance-agent`    | Monthly policy currency audits + statutory rate monitoring    |
| `offboarding-knowledge-agent` | Risk-calibrated knowledge capture triggered by resignation    |

**Configuration**: `hr.local.md` template (jurisdiction-aware org config: company profile, statutory rates, policy library, benefits, HR contacts, onboarding programme, review cycle)

### Skills NOT Built in Custom Plugin (Covered by Official)

These were in the governing spec but are DROPPED — the official plugin covers them:

- ~~`/onboard`~~ → use `/onboarding` (official)
- ~~`/policy`~~ → use `/policy-lookup` (official)
- ~~`/offer`~~ → use `/draft-offer` (official)
- ~~`/review`~~ → use `/performance-review` (official)
- ~~`/query`~~ → use `/policy-lookup` + Knowledge Base Agent
- ~~router~~ → two plugins coexist, each routes internally

## Design Decisions (BINDING — Do Not Deviate)

- **No router skill** — 5 custom skills with distinct trigger phrases need no routing layer. The official plugin handles its own routing.
- **No jurisdiction overlays** — employment law is too jurisdiction-specific for overlay files. Instead, `hr.local.md` has a jurisdiction section with statutory rates that the user fills in for their country (UK, Pakistan, UAE examples in spec).
- **Zero naming collisions** — custom plugin skills have unique names that do not collide with any official plugin skill
- **Agents are real** — all 4 agents are deployable in Cowork and schedulable via `/schedule`
- **Sensitivity labels in custom skills** — each skill output includes a sensitivity header (ROUTINE / CONFIDENTIAL / SENSITIVE PERSONAL DATA)
- **Plugin follows supply-chain pattern** — `.claude-plugin/plugin.json` + `skills/` + `agents/` + `evals/`
- **No companion repo** — exercise data is narrative (employee profiles, policies), embedded in lessons
- **Fact verification flags**:
  - "HR teams spend 60% on repetitive work" → `[VERIFY]` — use hedging language
  - "External hiring costs 3-6x more than internal promotion" → `[VERIFY]`
  - "New external hire takes 6-12 months to reach full productivity" → `[VERIFY]`
  - "First 90 days shape retention" → `[VERIFY]`
- **Case studies**: Karachi/Pakistan examples (Ayesha Raza, Omar Farooq) ~60% of scenarios, UK examples ~40% (compliance, statutory rates)
- **Official plugin bonus skills**: `/comp-analysis`, `/people-report`, `recruiting-pipeline`, `org-planning`, and `interview-prep` are TAUGHT in lessons even though they weren't in the original governing spec

## Lesson Plan (15 Lessons — BINDING)

| #   | Slug                                            | Title                                          | Plugin Source     | Key Skill(s)                                                |
| --- | ----------------------------------------------- | ---------------------------------------------- | ----------------- | ----------------------------------------------------------- |
| 01  | `01-institutional-memory-problem`               | The Institutional Memory Problem               | —                 | Concepts only                                               |
| 02  | `02-hr-operations-stack`                        | Your HR Operations Stack                       | Both              | Install + configure hr.local.md                             |
| 03  | `03-policy-lookup-self-service`                 | Policy Lookup & Employee Self-Service          | Official          | `/policy-lookup` ← REFERENCE LESSON                         |
| 04  | `04-hr-knowledge-base-agent`                    | The HR Knowledge Base Agent                    | Custom            | knowledge-base-agent                                        |
| 05  | `05-onboarding-first-90-days`                   | Onboarding — The First 90 Days                 | Official          | `/onboarding`                                               |
| 06  | `06-job-descriptions-interview-prep`            | Job Descriptions & Interview Preparation       | Custom + Official | `/jd` + `interview-prep`                                    |
| 07  | `07-offer-letters-employment-docs`              | Offer Letters & Employment Documents           | Official + Custom | `/draft-offer` + `/reference`                               |
| 08  | `08-performance-reviews`                        | Performance Reviews Without Bureaucracy        | Official          | `/performance-review`                                       |
| 09  | `09-compensation-talent-org`                    | Compensation, Talent & Org Planning            | Official + Custom | `/comp-analysis` + `/match` + `org-planning`                |
| 10  | `10-institutional-knowledge-capture`            | Capturing Institutional Knowledge              | Custom            | `/knowledge`                                                |
| 11  | `11-offboarding-knowledge-transfer`             | Offboarding & Knowledge Transfer               | Custom            | `/offboard` + offboarding-knowledge-agent                   |
| 12  | `12-persistent-agents-orchestrator-maintenance` | Persistent Agents — Orchestrator & Maintenance | Custom            | onboarding-orchestrator + policy-maintenance-agent          |
| 13  | `13-people-analytics-agent-operations`          | People Analytics & Agent Operations            | Official + Custom | `/people-report` + `recruiting-pipeline` + agent monitoring |
| 14  | `14-capstone-full-employee-lifecycle`           | Capstone — The Full Employee Lifecycle         | Both              | All skills + all agents                                     |
| 15  | `15-quick-reference-central-insights`           | Quick Reference & Central Insights             | Both              | Command tables, config reference                            |

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies.

| Phase | Teammate            | Model  | Depends On        |
| ----- | ------------------- | ------ | ----------------- |
| 1     | `architect`         | opus   | —                 |
| 2     | `reference-builder` | opus   | architect         |
| 3     | `plugin-builder`    | opus   | architect         |
| 3     | `writer-foundation` | sonnet | reference-builder |
| 3     | `writer-process`    | sonnet | reference-builder |
| 3     | `writer-knowledge`  | sonnet | reference-builder |
| 3     | `writer-synthesis`  | sonnet | reference-builder |
| 4     | `quality-reviewer`  | opus   | all Phase 3       |

**Total: 8 teammates across 4 phases.**

Note: `plugin-builder` runs in parallel with Phase 2 and Phase 3 writers (it depends only on architect, not on reference-builder). All chapter writers depend on reference-builder.

---

## PHASE 1: ARCHITECT

Create task: "Phase 1: Architecture spec for Ch 37 People & HR"
Depends on: nothing
Spawn 1 teammate: `architect`
Model: opus
Permission mode: plan (lead reviews plan before architect writes)

### Architect Teammate Prompt

"You are the `architect` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter26_hr/Chapter26_People_HR.md` — FULL governing spec. You are the ONLY teammate who reads this entire document.
2. ALL files in `specs/drafts/chapter26_hr/hr-skills/` — 10 product skills + 4 agents + README + local.md template + router
3. ALL skill files in `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/*/SKILL.md` — official plugin skills (9 total). Understand what they cover so the custom plugin does NOT duplicate.
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/README.md` — reference chapter README format
5. Read ONE skill-based lesson from Supply Chain Ch 35 (lesson 03 or 04) — reference lesson format (YAML frontmatter, section structure, Try With AI, sidecar patterns)
6. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — reference plugin structure (`.claude-plugin/plugin.json`, `skills/`, `agents/`, `evals/`)
7. `.specify/memory/constitution.md` — project constitution

PLUGIN ARCHITECTURE (CRITICAL):

This chapter uses TWO plugins — official `human-resources` (already shipped by Anthropic, 9 skills) + custom `hr-operations` (Panaversity, 5 skills + 4 agents). The custom plugin covers ONLY what the official does not:

Custom skills: /jd, /match, /knowledge, /reference, /offboard
Custom agents: knowledge-base-agent, onboarding-orchestrator, policy-maintenance-agent, offboarding-knowledge-agent
Config: hr.local.md template

NOT in custom (covered by official): /onboard, /policy, /offer, /review, /query, router

DELIVERABLES — write ALL of these to `specs/drafts/ch37-hr/`:

### 1. `architecture-spec.md` — Master Architecture Spec

Directory skeleton for BOTH deliverables:

**Chapter** (`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/`):

```
37-people-hr/
├── README.md
├── 01-institutional-memory-problem.md
├── 01-institutional-memory-problem.flashcards.yaml
├── 01-institutional-memory-problem.summary.md
├── 02-hr-operations-stack.md
├── 02-hr-operations-stack.flashcards.yaml
├── 02-hr-operations-stack.summary.md
├── 03-policy-lookup-self-service.md          ← Reference Builder writes this
├── 03-policy-lookup-self-service.flashcards.yaml
├── 03-policy-lookup-self-service.summary.md
├── 04-hr-knowledge-base-agent.md
├── 04-hr-knowledge-base-agent.flashcards.yaml
├── 04-hr-knowledge-base-agent.summary.md
├── 05-onboarding-first-90-days.md
├── 05-onboarding-first-90-days.flashcards.yaml
├── 05-onboarding-first-90-days.summary.md
├── 06-job-descriptions-interview-prep.md
├── 06-job-descriptions-interview-prep.flashcards.yaml
├── 06-job-descriptions-interview-prep.summary.md
├── 07-offer-letters-employment-docs.md
├── 07-offer-letters-employment-docs.flashcards.yaml
├── 07-offer-letters-employment-docs.summary.md
├── 08-performance-reviews.md
├── 08-performance-reviews.flashcards.yaml
├── 08-performance-reviews.summary.md
├── 09-compensation-talent-org.md
├── 09-compensation-talent-org.flashcards.yaml
├── 09-compensation-talent-org.summary.md
├── 10-institutional-knowledge-capture.md
├── 10-institutional-knowledge-capture.flashcards.yaml
├── 10-institutional-knowledge-capture.summary.md
├── 11-offboarding-knowledge-transfer.md
├── 11-offboarding-knowledge-transfer.flashcards.yaml
├── 11-offboarding-knowledge-transfer.summary.md
├── 12-persistent-agents-orchestrator-maintenance.md
├── 12-persistent-agents-orchestrator-maintenance.flashcards.yaml
├── 12-persistent-agents-orchestrator-maintenance.summary.md
├── 13-people-analytics-agent-operations.md
├── 13-people-analytics-agent-operations.flashcards.yaml
├── 13-people-analytics-agent-operations.summary.md
├── 14-capstone-full-employee-lifecycle.md
├── 14-capstone-full-employee-lifecycle.flashcards.yaml
├── 14-capstone-full-employee-lifecycle.summary.md
├── 15-quick-reference-central-insights.md
├── 15-quick-reference-central-insights.flashcards.yaml
└── 15-quick-reference-central-insights.summary.md
```

**Plugin** (`/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/`):

```
hr-operations/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── jd/
│   │   └── SKILL.md
│   ├── match/
│   │   └── SKILL.md
│   ├── knowledge/
│   │   └── SKILL.md
│   ├── reference/
│   │   └── SKILL.md
│   └── offboard/
│       └── SKILL.md
├── agents/
│   ├── knowledge-base-agent.md
│   ├── onboarding-orchestrator.md
│   ├── policy-maintenance-agent.md
│   └── offboarding-knowledge-agent.md
├── evals/
│   ├── cases.yaml
│   └── run.py
├── hr.local.md.template
└── README.md
```

Include in the spec:

- YAML frontmatter template (copy from Ch 35 reference lesson)
- Lesson section structure template
- Try With AI pattern (Reproduce → Adapt → Apply)
- Exercise format template
- Source-to-output mapping (which spec sections → which lessons)
- Writer-to-scope assignment table

### 2. `shared-brief.md` — Shared Writer's Brief

- Chapter identity: who this teaches (HR managers, people ops), tone (practical, domain-expert voice), the governing insight (60/40 split)
- Plugin architecture summary: official 9 skills + custom 5 skills + 4 agents, zero overlap
- Case study characters: Ayesha Raza/Omar Farooq (Karachi ~60%), UK names (~40%)
- Cross-reference map: how lessons link to each other, which exercises build on prior outputs
- Sensitivity labels: ROUTINE / CONFIDENTIAL / SENSITIVE PERSONAL DATA classification
- Fact verification flags: which claims need hedging language
- Sidecar patterns: .flashcards.yaml + .summary.md per lesson (use /generate-flashcards and /summary-generator skills)
- Phantom import guard: NEVER add `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz`. Use `<Flashcards />` JSX tag (no import needed). Quizzes are separate files.

### 3. Per-Writer Briefs (4 files)

- `brief-writer-foundation.md` — L01, L02, L15 (bookend lessons)
- `brief-writer-process.md` — L05, L06, L07, L08 (process execution block)
- `brief-writer-knowledge.md` — L04, L10, L11, L12 (agents + knowledge capture block)
- `brief-writer-synthesis.md` — L09, L13, L14 (analytics + capstone)

Each brief contains:

- Exact file paths to create (lesson .md + .flashcards.yaml + .summary.md)
- Spec sections/line ranges that inform each lesson
- Lesson-specific notes (which skills to demonstrate, which exercises to include, how to integrate official vs custom plugin commands)
- Exit criteria: what 'done' means for each lesson

### 4. Chapter README.md

Write the README.md for the chapter output directory. Follow the Ch 35 README format:

- Title + governing insight
- Prerequisites (Cowork access, 3 plugin installations — official human-resources, custom hr-operations, plus any official auto-triggers)
- Lesson Map table (all 15 lessons with key focus)
- Agent Output Taxonomy (error types discovered progressively)
- Case Studies table

### 5. `brief-plugin-builder.md` — Plugin Builder Brief

- Exact files to create (see directory skeleton above)
- For each SKILL.md: name, command, trigger phrases (15+), NOT clauses, workflow steps, output format template, NEVER DO rules, sensitivity label
- For each agent: name, description, tools list, background: true, skills list, monitoring schedule, alert types, escalation rules
- For plugin.json: name=hr-operations, version=1.0.0, author=Panaversity, license=Apache-2.0
- For evals: minimum 12 routing cases (2+ per skill) + 2+ negative cases
- For hr.local.md.template: all configuration sections from spec (org profile, jurisdiction/statutory rates, policy library, leave entitlements, benefits, HR contacts, onboarding programme, review cycle, equal opportunities, reference policy, data retention)
- Source material: read the 5 relevant product files from `specs/drafts/chapter26_hr/hr-skills/products/` (jd.md, match.md, knowledge.md, reference.md, offboard.md) + the 4 agent files from `specs/drafts/chapter26_hr/hr-skills/agents/`
- Validation: after writing each file, validate against the plugin validation checklist (see validation section below)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — [file list]'"

---

## PHASE 2: REFERENCE-BUILDER

Create task: "Phase 2: Reference lesson L03 for Ch 37"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `reference-builder`
Model: opus

### Reference-Builder Teammate Prompt

"You are the `reference-builder` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch37-hr/architecture-spec.md` — master architecture spec (directory skeleton, YAML template, patterns)
2. `specs/drafts/ch37-hr/shared-brief.md` — shared context (identity, patterns, cross-refs)
3. `specs/drafts/chapter26_hr/Chapter26_People_HR.md` — read ONLY Part Two: Policy Synthesis section and Exercise 1 (the sections relevant to L03)
4. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/policy-lookup/SKILL.md` — the official skill this lesson teaches
5. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` — quality benchmark lesson. MATCH this lesson's quality, format, and patterns exactly.

DELIVERABLE: Write ONE gold-standard lesson that ALL other writers must match:

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/03-policy-lookup-self-service.md`

This lesson teaches `/policy-lookup` (official plugin) for plain-language policy synthesis. The lesson covers:

- Why employees can't find policies (scattered, jargon-heavy, outdated)
- How `/policy-lookup` transforms policy documents into plain-language summaries
- Worked example: student runs `/policy-lookup` for parental leave policy, evaluates output
- Exercise (from spec Ex 1): Build 20-question FAQ knowledge base — identify most-asked questions, synthesize plain-language answers with `/policy-lookup`, verify accuracy and source citations
- Try With AI: Reproduce (simple policy lookup) → Adapt (your org's policy) → Apply (audit a policy for gaps)

PATTERN CHECKLIST (every element must appear):

- [ ] Full YAML frontmatter (slug, title, description, keywords, chapter: 37, lesson: 3, duration_minutes, skills metadata with CEFR/Bloom's/DigComp, learning_objectives, cognitive_load, differentiation, teaching_guide)
- [ ] Narrative opening (2-3 paragraphs, real-world HR scenario, no heading)
- [ ] Core concept sections (## headings)
- [ ] Worked example with plugin command invocation + sample output
- [ ] 'What to verify' table (how student evaluates AI output quality)
- [ ] Exercise section with step-by-step structure
- [ ] :::note, :::tip, :::caution blocks where appropriate
- [ ] Try With AI section (Reproduce → Adapt → Apply with copyable prompts)
- [ ] `<Flashcards />` component (NO import statement)
- [ ] Navigation footer: `Continue to [Lesson 4: Title →](./04-slug.md)`
- [ ] NO `import` statements for Flashcards or Quiz components

Also write the sidecars:

- `03-policy-lookup-self-service.flashcards.yaml` — use /generate-flashcards skill patterns
- `03-policy-lookup-self-service.summary.md` — use /summary-generator skill patterns

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — 03-policy-lookup-self-service.md + .flashcards.yaml + .summary.md'"

---

## PHASE 3A: PLUGIN-BUILDER

Create task: "Phase 3A: Build hr-operations plugin"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `plugin-builder`
Model: opus

### Plugin-Builder Teammate Prompt

"You are the `plugin-builder` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch37-hr/architecture-spec.md` — master architecture spec (plugin directory skeleton)
2. `specs/drafts/ch37-hr/brief-plugin-builder.md` — your specific brief with skill/agent details
3. The 5 relevant product skill specs: `specs/drafts/chapter26_hr/hr-skills/products/jd.md`, `match.md`, `knowledge.md`, `reference.md`, `offboard.md`
4. The 4 agent specs: `specs/drafts/chapter26_hr/hr-skills/agents/knowledge-base-agent.md`, `onboarding-orchestrator.md`, `policy-maintenance-agent.md`, `offboarding-knowledge-agent.md`
5. `specs/drafts/chapter26_hr/hr-skills/hr.local.md.template` — configuration template spec
6. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — reference plugin (match this structure exactly)
7. ALL official plugin skills at `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/*/SKILL.md` — understand what they cover so you do NOT duplicate

BUILD the plugin at `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/`:

### Files to Create

1. `.claude-plugin/plugin.json` — name: hr-operations, version: 1.0.0, author: Panaversity, license: Apache-2.0
2. `skills/jd/SKILL.md` — Job description writer (candidate-first, inclusive language, essential vs beneficial)
3. `skills/match/SKILL.md` — Talent matching and internal mobility (readiness classification, development plans)
4. `skills/knowledge/SKILL.md` — Institutional knowledge capture (3-session extraction, knowledge articles)
5. `skills/reference/SKILL.md` — Reference letters and employment verifications (factual + professional types)
6. `skills/offboard/SKILL.md` — Offboarding process and knowledge transfer (risk-calibrated capture)
7. `agents/knowledge-base-agent.md` — Always-on employee Q&A, warm handoff for individual situations, weekly report
8. `agents/onboarding-orchestrator.md` — T-14 through Day 90 automated checklist, alert on incomplete items
9. `agents/policy-maintenance-agent.md` — Monthly policy audits (currency, statutory rates, link validity, FAQ gaps)
10. `agents/offboarding-knowledge-agent.md` — Triggered by resignation, risk-calibrated knowledge capture plan
11. `evals/cases.yaml` — 12+ routing cases (2+ per skill) + 2+ negative cases
12. `evals/run.py` — Eval harness supporting --list and --case flags
13. `hr.local.md.template` — Full configuration template (org profile, jurisdiction/statutory rates, policy library, leave entitlements, benefits summary, HR contact directory, onboarding programme, performance review cycle, equal opportunities statement, reference policy, data retention rules)
14. `README.md` — Quick start, skill table, agent table, configuration guide, evals guide

### SKILL.md Format (follow supply-chain pattern)

Each SKILL.md must have:

- YAML frontmatter: name (matches directory), description (15+ trigger phrases + NOT clauses), license: Apache-2.0, metadata (author, version, plugin-commands, mcp-integrations)
- UNIVERSAL RULES section (non-negotiable domain constraints)
- MANDATORY OUTPUT HEADER template (TASK, DOCUMENT TYPE, JURISDICTION, CONFIGURATION, SENSITIVITY)
- Detailed workflow steps with example inputs and outputs
- NEVER DO THESE section (3-5 anti-patterns)
- Professional review disclaimer footer

### Agent Format (follow supply-chain pattern)

Each agent must have:

- YAML frontmatter: name, description, tools (Read, Grep, Glob, Bash, WebSearch, WebFetch), model: inherit, background: true, skills (list of plugin skills it uses)
- AGENT PURPOSE section
- MONITORING/WORKFLOW sections with schedules and triggers
- OUTPUT FORMAT templates (reports, alerts)
- ESCALATION RULES
- NEVER DO THESE section

### VALIDATION (CRITICAL)

After writing EACH file, validate against these checks:

**Per SKILL.md:**

- name: 1-64 chars, lowercase+hyphens, matches directory, no consecutive hyphens
- description: 1-1024 chars, includes trigger phrases
- Body: under 500 lines
- No references to a router
- Sensitivity label in output header

**Per agent .md:**

- name, description, tools list present
- background: true for all 4 agents
- skills list references skills that actually exist in skills/
- Schedule/trigger defined

**plugin.json:**

- Valid JSON, name=hr-operations, semver version
- Keywords cover all skill domains

**Cross-file consistency:**

- Every skill directory name matches its SKILL.md name field
- Every agent's skills list references skills that exist
- README tables match actual contents
- No router references anywhere
- hr.local.md.template has all sections from spec

**Evals:**

- python evals/run.py --list → prints all case names
- python evals/run.py → runs all, reports pass/fail

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'PLUGIN-BUILDER DONE — [file list]'"

---

## PHASE 3B: WRITER-FOUNDATION

Create task: "Phase 3B: Write L01, L02, L15 (foundation + reference)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-foundation`
Model: sonnet

### Writer-Foundation Teammate Prompt

"You are the `writer-foundation` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch37-hr/architecture-spec.md` — master spec (file paths, patterns, YAML template)
2. `specs/drafts/ch37-hr/shared-brief.md` — shared context (identity, patterns, cross-refs)
3. `specs/drafts/ch37-hr/brief-writer-foundation.md` — YOUR specific brief with source line ranges
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/03-policy-lookup-self-service.md` — REFERENCE LESSON. Match this lesson's quality, format, and patterns exactly.
5. `specs/drafts/chapter26_hr/Chapter26_People_HR.md` — read ONLY the Introduction section and the HR Plugin Architecture section (your source material for L01 and L02)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports — never add `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz`
- Use `<Flashcards />` JSX tag without import
- Every lesson gets full YAML frontmatter (copy structure from reference lesson)
- Every lesson gets .flashcards.yaml + .summary.md sidecars
- Execute autonomously without asking for confirmation
- Use hedging language for [VERIFY] fact claims

YOUR SCOPE:

**L01: The Institutional Memory Problem** (`01-institutional-memory-problem.md`)

- Concepts only — no plugin skills in this lesson
- CPO quote opening (from spec intro)
- Explicit vs tacit knowledge framework
- Three HR functions AI transforms (Information Routing, Process Execution, Knowledge Capture)
- Exercise: Diagnostic — student lists top 10 repeated HR questions, classifies as explicit/tacit
- Duration: ~40 min

**L02: Your HR Operations Stack** (`02-hr-operations-stack.md`)

- Install 3 plugins: official human-resources (from Cowork store) + custom hr-operations (from Panaversity marketplace)
- Reference Ch 34 README prerequisites for install pattern (3-plugin install steps)
- Configure hr.local.md: guided interview building org profile, jurisdiction, policy library, benefits, HR contacts, onboarding config, review cycle
- Exercise (spec Ex 8): Build complete hr.local.md, validate by running /policy-lookup with 5 real questions
- Duration: ~50 min (configuration-heavy)

**L15: Quick Reference & Central Insights** (`15-quick-reference-central-insights.md`)

- All commands reference table (official + custom — 14 skills total)
- Agent summaries table (4 agents with purpose, trigger, schedule)
- hr.local.md configuration field reference
- Sensitivity classification guide (ROUTINE / CONFIDENTIAL / SENSITIVE PERSONAL DATA)
- Central insight: Explicit knowledge → findable without asking a person. Tacit knowledge → captured before it walks out the door. HR free for the 40% that requires human judgment.
- Duration: ~20 min (reference material)

For each lesson, also write:

- `.flashcards.yaml` sidecar
- `.summary.md` sidecar

When finished, message the team lead: 'WRITER-FOUNDATION DONE — L01 + L02 + L15 (9 files total)'"

---

## PHASE 3C: WRITER-PROCESS

Create task: "Phase 3C: Write L05, L06, L07, L08 (process execution)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-process`
Model: sonnet

### Writer-Process Teammate Prompt

"You are the `writer-process` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch37-hr/architecture-spec.md` — master spec
2. `specs/drafts/ch37-hr/shared-brief.md` — shared context
3. `specs/drafts/ch37-hr/brief-writer-process.md` — YOUR specific brief
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/03-policy-lookup-self-service.md` — REFERENCE LESSON. Match exactly.
5. `specs/drafts/chapter26_hr/Chapter26_People_HR.md` — read ONLY: Part One (Onboarding), Part Three (Offer Letters), Part Four (Job Descriptions), Part Five (Performance Reviews)

ALSO READ for skill details:

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/onboarding/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/draft-offer/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/performance-review/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/interview-prep/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/skills/jd/SKILL.md` (custom — written by plugin-builder)
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/skills/reference/SKILL.md` (custom — written by plugin-builder)

NOTE: The custom plugin skills (jd, reference) are written by plugin-builder in parallel. If they don't exist yet when you start, read the spec files instead:

- `specs/drafts/chapter26_hr/hr-skills/products/jd.md`
- `specs/drafts/chapter26_hr/hr-skills/products/reference.md`

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports
- Use `<Flashcards />` JSX tag without import
- Full YAML frontmatter on every lesson
- Every lesson gets .flashcards.yaml + .summary.md sidecars
- Execute autonomously without asking for confirmation
- Use hedging language for [VERIFY] fact claims

YOUR SCOPE:

**L05: Onboarding — The First 90 Days** (`05-onboarding-first-90-days.md`)

- Official plugin: `/onboarding`
- 30-60-90 framework with observable success criteria
- Failure modes: information dump, admin bottleneck, invisible ramp
- Worked example: Ayesha Raza, Senior Data Analyst joining Finance & Analytics team in Karachi
- Exercise (spec Ex 2): Design complete onboarding for most-hired role
- EXTEND: Seniority-differentiated variants (Junior/Mid/Senior)
- Duration: ~45 min

**L06: Job Descriptions & Interview Preparation** (`06-job-descriptions-interview-prep.md`)

- Custom plugin: `/jd` + Official auto-trigger: `interview-prep`
- Candidate-first JDs (lead with the work, not requirements lists)
- Inclusive language (flag gender-coded, age-coded, exclusionary specificity)
- Essential vs beneficial requirements
- Structured interview plan with competency mapping and scoring rubrics
- Exercise (spec Ex 3): Write 3 JDs (junior/mid/senior), test for inclusive language
- Duration: ~45 min

**L07: Offer Letters & Employment Documents** (`07-offer-letters-employment-docs.md`)

- Official plugin: `/draft-offer` + Custom plugin: `/reference`
- Volume document generation problem (50-80 docs/year, same structure)
- Jurisdiction-specific terms (UK notice periods, Pakistan EOBI, UAE probation)
- Exercise: Draft offer letter + reference letter, compare against hr.local.md for accuracy
- EXTEND: Generate promotion letter and contract amendment using adapted prompts
- Duration: ~40 min

**L08: Performance Reviews Without Bureaucracy** (`08-performance-reviews.md`)

- Official plugin: `/performance-review`
- Problem: simultaneously important and universally resented
- Evidence-based reviews (vague-to-specific conversion)
- Three modes: self-assessment, manager review, calibration
- 360° feedback synthesis (themes, frequency, direction)
- Exercise (spec Ex 4): Design review framework — cycle, manager prep guide, sample review
- Duration: ~45 min

For each lesson, also write:

- `.flashcards.yaml` sidecar
- `.summary.md` sidecar

When finished, message the team lead: 'WRITER-PROCESS DONE — L05 + L06 + L07 + L08 (12 files total)'"

---

## PHASE 3D: WRITER-KNOWLEDGE

Create task: "Phase 3D: Write L04, L10, L11, L12 (agents + knowledge)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-knowledge`
Model: sonnet

### Writer-Knowledge Teammate Prompt

"You are the `writer-knowledge` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch37-hr/architecture-spec.md` — master spec
2. `specs/drafts/ch37-hr/shared-brief.md` — shared context
3. `specs/drafts/ch37-hr/brief-writer-knowledge.md` — YOUR specific brief
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/03-policy-lookup-self-service.md` — REFERENCE LESSON. Match exactly.
5. `specs/drafts/chapter26_hr/Chapter26_People_HR.md` — read ONLY: Part Six (HR Knowledge Base Agent), Part Eight (Institutional Knowledge Capture), Part Nine (HR Operations Agents)

ALSO READ for agent details:

- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/agents/knowledge-base-agent.md`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/agents/onboarding-orchestrator.md`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/agents/policy-maintenance-agent.md`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/agents/offboarding-knowledge-agent.md`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/skills/knowledge/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/skills/offboard/SKILL.md`

NOTE: The custom plugin agents/skills are written by plugin-builder in parallel. If they don't exist yet, read the spec files instead:

- `specs/drafts/chapter26_hr/hr-skills/agents/*.md`
- `specs/drafts/chapter26_hr/hr-skills/products/knowledge.md`
- `specs/drafts/chapter26_hr/hr-skills/products/offboard.md`

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports
- Use `<Flashcards />` JSX tag without import
- Full YAML frontmatter on every lesson
- Every lesson gets .flashcards.yaml + .summary.md sidecars
- Execute autonomously without asking for confirmation

YOUR SCOPE:

**L04: The HR Knowledge Base Agent** (`04-hr-knowledge-base-agent.md`)

- Custom plugin: Deploy knowledge-base-agent
- Always-on employee self-service Q&A
- KEY CONCEPT: Warm handoff protocol — what the agent answers (policy) vs what it escalates (individual situations)
- Type 1 queries: policy questions → agent answers with source citation
- Type 2 queries: individual situations (dispute, grievance, medical) → warm handoff to named HR contact
- Exercise: Deploy agent, test with 5 policy queries + 3 individual-situation queries (should escalate)
- Weekly report format: questions by category, escalations, knowledge gaps
- Duration: ~45 min

**L10: Capturing Institutional Knowledge** (`10-institutional-knowledge-capture.md`)

- Custom plugin: `/knowledge`
- THIS IS THE CHAPTER'S "AHA" LESSON
- Tacit knowledge evaporation problem (long-tenured employee leaves, knowledge goes with them)
- Structured 3-session extraction methodology
- Knowledge articles format (title, substance, when it applies, exceptions, contacts, confidence level)
- Knowledge risk classification: HIGH (sole-holder) / MEDIUM (some docs) / LOW (well-distributed)
- Exercise (spec Ex 5): Knowledge Capture Sprint — identify highest-risk departing employee, create capture plan, conduct simulated interview, structure knowledge articles
- Duration: ~50 min

**L11: Offboarding & Knowledge Transfer** (`11-offboarding-knowledge-transfer.md`)

- Custom plugin: `/offboard` + offboarding-knowledge-agent deployment
- Structured offboarding process (4 phases: pre-offboarding, knowledge transfer, administrative close, post-departure)
- Handover documentation (areas, status, handover target)
- Exit interview as knowledge capture (not goodbye conversation)
- Risk-calibrated capture: LOW (1 session), MEDIUM (2 sessions), HIGH (3+ sessions + escalation)
- Exercise: Structure complete offboarding for departing senior employee
- Duration: ~45 min

**L12: Persistent Agents — Orchestrator & Maintenance** (`12-persistent-agents-orchestrator-maintenance.md`)

- Custom plugin: Deploy onboarding-orchestrator + policy-maintenance-agent
- Onboarding Orchestrator: T-14/T-7/T-3/Day 1/Day 10/Day 30/Day 60/Day 90 automated timeline
- Policy Maintenance Agent: monthly checks (policy currency, statutory rates, link validity, FAQ gap analysis)
- Exercise (spec Ex 6): Policy Audit & Refresh — inventory 3 policies, audit for currency + plain language, identify gaps, refresh one policy
- EXTEND: Configure onboarding-orchestrator for a new hire
- Duration: ~45 min

For each lesson, also write:

- `.flashcards.yaml` sidecar
- `.summary.md` sidecar

When finished, message the team lead: 'WRITER-KNOWLEDGE DONE — L04 + L10 + L11 + L12 (12 files total)'"

---

## PHASE 3E: WRITER-SYNTHESIS

Create task: "Phase 3E: Write L09, L13, L14 (analytics + capstone)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-synthesis`
Model: sonnet

### Writer-Synthesis Teammate Prompt

"You are the `writer-synthesis` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch37-hr/architecture-spec.md` — master spec
2. `specs/drafts/ch37-hr/shared-brief.md` — shared context
3. `specs/drafts/ch37-hr/brief-writer-synthesis.md` — YOUR specific brief
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/03-policy-lookup-self-service.md` — REFERENCE LESSON. Match exactly.
5. `specs/drafts/chapter26_hr/Chapter26_People_HR.md` — read ONLY: Part Seven (Talent Matching), the sections on /comp-analysis and /people-report from the Plugin Architecture section

ALSO READ:

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/comp-analysis/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/people-report/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/recruiting-pipeline/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/human-resources/skills/org-planning/SKILL.md`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/skills/match/SKILL.md` (custom — written by plugin-builder)

NOTE: If custom plugin skills don't exist yet, read the spec file instead:

- `specs/drafts/chapter26_hr/hr-skills/products/match.md`

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports
- Use `<Flashcards />` JSX tag without import
- Full YAML frontmatter on every lesson
- Every lesson gets .flashcards.yaml + .summary.md sidecars
- Execute autonomously without asking for confirmation
- Use hedging language for [VERIFY] fact claims (especially "3-6x cost" and "6-12 months productivity")

YOUR SCOPE:

**L09: Compensation, Talent & Org Planning** (`09-compensation-talent-org.md`)

- Official plugin: `/comp-analysis`, `org-planning` (auto) + Custom plugin: `/match`
- Market benchmarking: percentile bands (25th/50th/75th/90th)
- Internal mobility vs external hiring cost comparison [VERIFY: 3-6x]
- Readiness classification: READY NOW / 6 MONTHS / 12 MONTHS / DEVELOPING / NOT A FIT
- Org design: span-of-control analysis, healthy benchmarks (5-8 reports, 6:1-10:1 IC:manager)
- Exercise (spec Ex 7): Internal talent review — 3-5 critical roles, assess candidates with /match, benchmark with /comp-analysis
- Duration: ~50 min

**L13: People Analytics & Agent Operations** (`13-people-analytics-agent-operations.md`)

- Official plugin: `/people-report`, `recruiting-pipeline` (auto) + All 4 custom agents
- Data-driven HR decisions (headcount, attrition, diversity, org health)
- Agent output evaluation: reviewing weekly Knowledge Base report, identifying FAQ gaps
- Recruiting pipeline metrics: velocity, conversion rates, source effectiveness
- The ongoing HUMAN judgment required — agents suggest, humans decide
- Exercise: Generate people report, review agent reports, identify gaps, evaluate accuracy
- Duration: ~45 min

**L14: Capstone — The Full Employee Lifecycle** (`14-capstone-full-employee-lifecycle.md`)

- ALL skills + ALL agents
- End-to-end orchestration: hire → onboard → review → develop → depart
- Exercise (90 min): Complete lifecycle sprint:
  1. Write JD (`/jd`) and prepare interviews (`interview-prep`)
  2. Assess candidates (`/match`) and benchmark comp (`/comp-analysis`)
  3. Draft offer (`/draft-offer`)
  4. Generate onboarding plan (`/onboarding`)
  5. Structure performance review (`/performance-review`)
  6. Conduct knowledge capture (`/knowledge`)
  7. Structure offboarding (`/offboard`)
  8. Review agent reports and recommendations
- Duration: ~60 min (capstone)

For each lesson, also write:

- `.flashcards.yaml` sidecar
- `.summary.md` sidecar

When finished, message the team lead: 'WRITER-SYNTHESIS DONE — L09 + L13 + L14 (9 files total)'"

---

## PHASE 4: QUALITY REVIEWER

Create task: "Phase 4: Quality review for Ch 37"
Depends on: ALL Phase 3 tasks (all writers + plugin-builder)
Spawn 1 teammate: `quality-reviewer`
Model: opus

### Quality-Reviewer Teammate Prompt

"You are the `quality-reviewer` teammate for Chapter 37: People & HR.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch37-hr/architecture-spec.md` — what was planned
2. `specs/drafts/ch37-hr/shared-brief.md` — patterns and rules
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/03-policy-lookup-self-service.md` — reference lesson (quality benchmark)
4. ALL 15 lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/`
5. ALL plugin files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/`

CHECKS:

### Chapter Content Checks

For EACH lesson file:

- [ ] Full YAML frontmatter present (slug, title, description, keywords, chapter: 37, lesson, duration_minutes, skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- [ ] Narrative opening (2-3 paragraphs, no heading, real-world scenario)
- [ ] Correct plugin commands referenced (official vs custom — no confusion)
- [ ] Worked example with plugin command invocation
- [ ] Exercise section with step-by-step structure
- [ ] Try With AI section (Reproduce → Adapt → Apply)
- [ ] `<Flashcards />` component present (NO import statement)
- [ ] Navigation footer present and correct (links to next lesson)
- [ ] .flashcards.yaml sidecar exists and is valid YAML
- [ ] .summary.md sidecar exists
- [ ] No phantom imports (grep for `import.*@site/src/components`)
- [ ] Sensitivity labels where appropriate
- [ ] [VERIFY] claims use hedging language

### Cross-Lesson Checks

- [ ] L01 → L15 progression is coherent (each builds on previous)
- [ ] Exercise cross-references work (L02's hr.local.md used by subsequent lessons)
- [ ] Case study consistency (Ayesha Raza/Omar Farooq details don't contradict across lessons)
- [ ] Official vs custom plugin attribution is correct throughout
- [ ] No skill/command name confusion (e.g., /onboard vs /onboarding)

### Plugin Checks

- [ ] All 5 skill directories exist with SKILL.md
- [ ] All 4 agent files exist
- [ ] plugin.json is valid JSON with correct name/version
- [ ] Every skill name matches its directory name
- [ ] Every agent's skills list references skills that exist
- [ ] README tables match actual contents
- [ ] hr.local.md.template has all required sections
- [ ] evals/cases.yaml has 12+ routing cases + 2+ negative
- [ ] No router references anywhere
- [ ] No collisions with official plugin skill names

DELIVERABLE: Write quality report to `specs/drafts/ch37-hr/quality-report.md`

Format:

- Overall verdict: PASS / CONDITIONAL PASS / FAIL
- Per-writer summary (foundation, process, knowledge, synthesis)
- Plugin builder summary
- Issues list (CRITICAL / IMPORTANT / MINOR)
- Recommendations

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md with verdict [PASS/CONDITIONAL/FAIL]'"

---

## PHASE 5: POST-PRODUCTION (Same Team — Do NOT Shut Down)

After quality review passes, the team remains active for post-production:

### 5A: Quiz Generation

Create task: "Phase 5A: Generate chapter quiz"
Spawn or reuse teammate for quiz generation.

The lead (you) should invoke `/quiz-generator` on the full chapter to produce a 50-question quiz file. Place it at:
`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/16-quiz.md`

### 5B: Slides Generation

Create task: "Phase 5B: Generate chapter slides"

The lead should invoke:

1. `/notebooklm-slides` to generate slide content from all lessons
2. `/upload-chapter-slides` to upload PDF to CDN and update README frontmatter

### 5C: Plugin Validation

Create task: "Phase 5C: Validate plugin skills"

The lead should:

1. Run `/skill-validator` on each of the 5 SKILL.md files in hr-operations
2. Run `python evals/run.py --list` then `python evals/run.py` in the plugin directory
3. Fix any failures

---

## PHASE 6: FINAL VERIFICATION

The team lead (NOT a teammate) runs these checks:

```bash
# File inventory
ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/*.md | wc -l
# Expected: 16 (README + 15 lessons)

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/*.summary.md | wc -l
# Expected: 15

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/*.flashcards.yaml | wc -l
# Expected: 15

# No phantom imports
grep -r "import.*@site/src/components" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/
# Must return nothing

# YAML frontmatter spot-check (3 random lessons)
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/01-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/08-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/14-*.md

# Plugin checks
ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/skills/*/SKILL.md | wc -l
# Expected: 5

ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/hr-operations/agents/*.md | wc -l
# Expected: 4

# README slides frontmatter
grep "slides:" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/README.md
```

Only after ALL checks pass: shut down teammates, delete the team, report to user.

---

## Lead Coordination Rules

1. Create team with TeamCreate
2. Create ALL tasks upfront with dependencies (Phase 1 → 2 → 3A/3B/3C/3D/3E → 4 → 5 → 6)
3. **Do NOT write content yourself** — coordinate only
4. Wait for architect to complete before spawning Phase 2 and 3A
5. Wait for reference-builder to complete before spawning Phase 3B-3E writers
6. Plugin-builder can run in parallel with reference-builder and writers (depends only on architect)
7. Spawn ALL 4 writer teammates SIMULTANEOUSLY after reference-builder completes
8. Monitor for stuck teammates — if no progress after 10 min, message them
9. After quality reviewer returns verdict:
   - PASS → proceed to Phase 5
   - CONDITIONAL PASS → fix issues, then Phase 5
   - FAIL → diagnose root cause, fix, re-review
10. Run Phase 5 post-production (quiz, slides, plugin validation)
11. Run Phase 6 verification checks yourself
12. After all checks pass: shut down all teammates, delete team, report final status

## Model Preferences

| Teammate          | Model  | Rationale                        |
| ----------------- | ------ | -------------------------------- |
| architect         | opus   | Architecture quality critical    |
| reference-builder | opus   | Sets quality bar for all writers |
| plugin-builder    | opus   | Domain accuracy critical         |
| writer-foundation | sonnet | Content writing, pattern-matched |
| writer-process    | sonnet | Content writing, pattern-matched |
| writer-knowledge  | sonnet | Content writing, pattern-matched |
| writer-synthesis  | sonnet | Content writing, pattern-matched |
| quality-reviewer  | opus   | Catches subtle quality issues    |

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 3 writers before Phase 2 reference-builder completes
- Do NOT spawn quality reviewer before ALL Phase 3 teammates complete
- Do NOT let writer teammates read the full governing spec (only architect reads it all)
- Do NOT skip quality review or verification
- Do NOT build skills that duplicate the official human-resources plugin
- Do NOT add `import` statements for Flashcards or Quiz components
- Do NOT commit to git until all verification passes
- Do NOT shut down the team after content writing — post-production phases follow
