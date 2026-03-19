# Chapter 38: Operations Management — Agent Team Prompt

Create an agent team to build Chapter 38 (Operations Management) for The AI Agent Factory book, including the custom `operations-intelligence` Cowork plugin and the book chapter content.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

---

## Source Materials

| Material                          | Path                                                                                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Governing spec**                | `specs/drafts/chapter27_operations/Chapter27_Operations.md` (~1,670 lines)                                                                |
| **Skill specs**                   | `specs/drafts/chapter27_operations/ops-skills/` (10 product skills + 4 agents + router + README + local.md template)                      |
| **Chapter output**                | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/`                               |
| **Plugin output**                 | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/`                                   |
| **Official plugin (read-only)**   | `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/` (DO NOT modify — this is Anthropic's official plugin) |
| **Reference chapter (primary)**   | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/` (format, YAML, sidecars) |
| **Reference chapter (secondary)** | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/34-sales-revops-marketing/` (multi-plugin install pattern)   |
| **Reference plugin**              | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` (plugin structure precedent)                 |
| **Constitution**                  | `.specify/memory/constitution.md`                                                                                                         |

## Content Identity

Chapter 38 teaches operations professionals (COOs, operations managers, compliance officers, procurement leads) to build an AI-native operations intelligence system using TWO Cowork plugins working together. The chapter covers vendor management, contract analysis, process documentation, change management, compliance tracking, audit preparation, operational risk, incident management, operational metrics, and four persistent monitoring agents. The governing insight: **operations is an intelligence function — its job is to make the invisible visible.**

The chapter ships TWO deliverables:

1. **A custom Cowork plugin** (`operations-intelligence`) with 4 skills + 4 agents in the `agentfactory-business-plugins` repo — covering ONLY the gaps not in the official plugin
2. **15 book lessons** + README in the learn-app docs — teaching BOTH the official `operations` plugin and the custom `operations-intelligence` plugin

## Two-Plugin Architecture (BINDING — Do Not Deviate)

This chapter uses the Ch 34 Sales/RevOps pattern: official plugin(s) for base coverage + custom plugin for gaps. Zero overlap.

**Plugin 1 — Official `operations`** (Anthropic, `knowledge-work-plugins`):

- 6 commands: `/vendor-review`, `/process-doc`, `/change-request`, `/capacity-plan`, `/status-report`, `/runbook`
- 3 auto-skills: `compliance-tracking`, `risk-assessment`, `process-optimization`
- Students install from: Cowork sidebar → Customize → Browse plugins → Operations

**Plugin 2 — Custom `operations-intelligence`** (Panaversity, `agentfactory-business-plugins`):

- 4 skills: `/audit`, `/contract`, `/incident`, `/metrics`
- 4 agents: `vendor-watchdog`, `process-health`, `compliance-monitor`, `change-tracker`
- Config: `local.md.template` → students copy to `ops.local.md`
- Students install from: Cowork sidebar → Customize → Browse plugins → Personal → Add marketplace from GitHub → `https://github.com/panaversity/agentfactory-business-plugins` → Operations Intelligence → Install

## Design Decisions (BINDING — Do Not Deviate)

1. **No `/sop` in custom plugin** — use official `/runbook` for SOP-style work. The difference is taught in L05, not implemented as separate tools.
2. **`/metrics` stays in custom** — complementary to official `/status-report`. `/metrics` designs the KPI framework, `/status-report` generates reports from it.
3. **Router dissolved** — the spec's `ops-global-router.md` (170 lines of universal standards) is NOT included. Distribute standards:
   - Risk scoring 5×5 matrix → embed in `vendor-watchdog` + `compliance-monitor` agents
   - Change classifications (STANDARD/SIGNIFICANT/MAJOR/CRITICAL) → embed in `change-tracker` agent
   - Compliance status codes (🟢/🟡/🔴) → embed in `compliance-monitor` + `/audit` SKILL.md
   - Incident quality standards → embed in `/incident` SKILL.md
   - SOP quality standards → taught in L05 lesson content, not in plugin
4. **`ops.local.md` config** lives in custom plugin as `local.md.template`. Personalises ALL outputs (vendor portfolio, regulatory frameworks, risk appetite, change authority matrix, process tiers, metrics).
5. **Plugin name**: `operations-intelligence` (distinct from official `operations`)
6. **Fact verification flags**: "typical 200-person company overspends on vendors by 20–30%", "Operations teams spend 70% of their time managing consequences", and "addressable savings of 8–10% of spend" are `[VERIFY]` — writers must not present these as confirmed facts. Use hedging language ("research suggests..." or attribute to quoted COO) unless independently verified via WebSearch.
7. **No phantom imports** — do NOT add `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz`. These components do NOT exist. Flashcards = `.flashcards.yaml` sidecar files. Quizzes = generated via `/quiz-generator` skill.
8. **Cowork terminology** — say "Cowork" not "Claude in Excel" (per `.claude/rules/cowork-content.md`). Exception: if referencing Ch 28's product specifically.

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies.

| Phase | Teammate                   | Model  | Depends On        |
| ----- | -------------------------- | ------ | ----------------- |
| 1     | `architect`                | opus   | —                 |
| 2     | `reference-builder`        | opus   | architect         |
| 3     | `plugin-builder`           | opus   | architect         |
| 3     | `writer-bookends`          | sonnet | reference-builder |
| 3     | `writer-contracts-process` | sonnet | reference-builder |
| 3     | `writer-compliance-risk`   | sonnet | reference-builder |
| 3     | `writer-incident-metrics`  | sonnet | reference-builder |
| 3     | `writer-agents-capstone`   | sonnet | reference-builder |
| 4     | `quality-reviewer`         | opus   | all Phase 3       |

**Total: 9 teammates across 4 phases (content production). Phases 5-6 (post-production and verification) are lead-coordinated — reuse existing teammates or spawn new ones as needed.**

Note: `plugin-builder` runs in parallel with Phase 2 and Phase 3 writers (it depends only on architect, not on reference-builder). All chapter writers depend on reference-builder.

---

## PHASE 1: ARCHITECT

Create task: "Phase 1: Architecture spec for Ch 38 Operations"
Depends on: nothing
Spawn 1 teammate: `architect`
Model: opus
Permission mode: plan (lead reviews plan before architect writes)

### Architect Teammate Prompt

"You are the `architect` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter27_operations/Chapter27_Operations.md` — FULL governing spec (~1,670 lines). You are the ONLY teammate who reads this entire document.
2. ALL files in `specs/drafts/chapter27_operations/ops-skills/` — 10 product skills + 4 agents + router + README + local.md template
3. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/README.md` — official plugin README (understand what it provides)
4. Read 2-3 skill SKILL.md files from `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/` — understand official plugin's skill depth
5. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/README.md` — reference chapter README format
6. Read ONE skill-based lesson from Ch 35 Supply Chain (lesson 03 or 04) — reference lesson format (YAML frontmatter, section structure, Try With AI, sidecar patterns)
7. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/34-sales-revops-marketing/README.md` — reference for multi-plugin install pattern (Prerequisites section)
8. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — reference plugin structure (`.claude-plugin/plugin.json`, `skills/`, `agents/`, `evals/`)
9. `.specify/memory/constitution.md` — project constitution

DELIVERABLES — write ALL of these to `specs/drafts/ch38-operations/`:

### 1. `architecture-spec.md` — Master Architecture Spec

Directory skeleton for BOTH deliverables:

**Chapter** (`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/`):

```
38-operations-management/
├── README.md
├── 01-three-operational-failure-modes.md
├── 01-three-operational-failure-modes.flashcards.yaml
├── 01-three-operational-failure-modes.summary.md
├── 02-plugin-architecture-installation.md
├── 02-plugin-architecture-installation.flashcards.yaml
├── 02-plugin-architecture-installation.summary.md
├── 03-vendor-management-portfolio-view.md          ← Reference Builder writes this
├── 03-vendor-management-portfolio-view.flashcards.yaml
├── 03-vendor-management-portfolio-view.summary.md
├── 04-contract-analysis-obligation-extraction.md
├── 04-contract-analysis-obligation-extraction.flashcards.yaml
├── 04-contract-analysis-obligation-extraction.summary.md
├── 05-process-documentation-sops-runbooks.md
├── 05-process-documentation-sops-runbooks.flashcards.yaml
├── 05-process-documentation-sops-runbooks.summary.md
├── 06-change-management-impact-rollback.md
├── 06-change-management-impact-rollback.flashcards.yaml
├── 06-change-management-impact-rollback.summary.md
├── 07-compliance-tracking-obligations-evidence.md
├── 07-compliance-tracking-obligations-evidence.flashcards.yaml
├── 07-compliance-tracking-obligations-evidence.summary.md
├── 08-audit-preparation-evidence-mock-review.md
├── 08-audit-preparation-evidence-mock-review.flashcards.yaml
├── 08-audit-preparation-evidence-mock-review.summary.md
├── 09-operational-risk-register-that-works.md
├── 09-operational-risk-register-that-works.flashcards.yaml
├── 09-operational-risk-register-that-works.summary.md
├── 10-incident-management-postmortem-five-whys.md
├── 10-incident-management-postmortem-five-whys.flashcards.yaml
├── 10-incident-management-postmortem-five-whys.summary.md
├── 11-operational-metrics-designing-what-to-measure.md
├── 11-operational-metrics-designing-what-to-measure.flashcards.yaml
├── 11-operational-metrics-designing-what-to-measure.summary.md
├── 12-persistent-agents-deployment-schedule.md
├── 12-persistent-agents-deployment-schedule.flashcards.yaml
├── 12-persistent-agents-deployment-schedule.summary.md
├── 13-operations-intelligence-brief.md
├── 13-operations-intelligence-brief.flashcards.yaml
├── 13-operations-intelligence-brief.summary.md
├── 14-capstone-end-to-end-operations-sprint.md
├── 14-capstone-end-to-end-operations-sprint.flashcards.yaml
├── 14-capstone-end-to-end-operations-sprint.summary.md
├── 15-chapter-summary-quick-reference.md
├── 15-chapter-summary-quick-reference.flashcards.yaml
└── 15-chapter-summary-quick-reference.summary.md
```

**Plugin** (`/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/`):

```
operations-intelligence/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── audit/
│   │   └── SKILL.md
│   ├── contract/
│   │   └── SKILL.md
│   ├── incident/
│   │   └── SKILL.md
│   └── metrics/
│       └── SKILL.md
├── agents/
│   ├── vendor-watchdog.md
│   ├── process-health.md
│   ├── compliance-monitor.md
│   └── change-tracker.md
├── evals/
│   ├── cases.yaml
│   └── run.py
├── local.md.template
└── README.md
```

Source-to-output mapping table:

- Which spec lines → which lesson files
- Which skill spec files → which plugin skill files
- Which spec exercises → which lessons
- Which official plugin commands → which lessons use them
- Which custom plugin commands → which lessons use them

YAML frontmatter template for lessons (derived from Ch 35 L03 format):

- All required fields: slug, sidebar_position, title, description, keywords, chapter (38), lesson, duration_minutes
- Skills metadata with CEFR/Bloom's/DigComp
- Learning objectives with assessment methods
- Cognitive load assessment
- Differentiation (extension + remedial)
- teaching_guide (key_points, misconceptions, discussion_prompts, teaching_tips)

Component/pattern catalog:

- Try With AI format (3 prompts: Reproduce → Adapt → Apply)
- Exercise format from spec (Step structure with plugin commands and evaluation criteria)
- Docusaurus components allowed: `:::note`, `:::info`, `:::tip`, tables, code blocks
- Docusaurus components FORBIDDEN: No `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz` — these DO NOT EXIST
- Plugin command format: show command syntax, sample input, sample output, 'What to evaluate' section

Plugin-to-lesson mapping (critical — architect must specify which lessons use which plugin):

| Lesson | Official Plugin Commands/Skills     | Custom Plugin Commands/Skills                          |
| ------ | ----------------------------------- | ------------------------------------------------------ |
| L01    | —                                   | —                                                      |
| L02    | Install + verify (`/vendor-review`) | Install + verify (`/audit`) + configure `ops.local.md` |
| L03    | `/vendor-review`                    | —                                                      |
| L04    | —                                   | `/contract`                                            |
| L05    | `/process-doc` + `/runbook`         | —                                                      |
| L06    | `/change-request`                   | —                                                      |
| L07    | `compliance-tracking` (auto-skill)  | —                                                      |
| L08    | —                                   | `/audit`                                               |
| L09    | `risk-assessment` (auto-skill)      | —                                                      |
| L10    | —                                   | `/incident`                                            |
| L11    | `/status-report`                    | `/metrics`                                             |
| L12    | —                                   | 4 agents                                               |
| L13    | `/status-report`                    | Agents + `/metrics`                                    |
| L14    | All applicable                      | All applicable                                         |
| L15    | Reference                           | Reference                                              |

### 2. `shared-brief.md` — Shared Writer's Brief

- Content identity: who this chapter is for (operations professionals, COOs, compliance officers), tone (professional operations, not academic)
- The two-plugin architecture explained (official covers base, custom covers gaps — zero overlap)
- Cross-reference map (L04 feeds L03, L07 feeds L08, L06 connects to L10, L11 aggregates all, L12 automates L03/L05/L07/L06, L13 integrates everything)
- Exercise dependency chain and data flow between lessons
- Sidecar file rules: every `.md` lesson gets `.flashcards.yaml` + `.summary.md`
- Fact verification flags: 20-30% vendor overspend, 70% reactive time, 8-10% savings all `[VERIFY]` — use hedging language
- Cowork terminology: 'Cowork' not 'Claude in Excel' (per `.claude/rules/cowork-content.md`)
- Plugin command syntax conventions for both plugins
- Official plugin auto-skills: `compliance-tracking`, `risk-assessment`, `process-optimization` are TRIGGER-ONLY (activated by keywords, not slash commands). Lessons using these should prompt naturally, not with `/compliance-tracking`.
- For each exercise: include 'What to evaluate' section teaching students to assess AI output quality

### 3. Per-Writer Briefs (one file each)

- `brief-writer-bookends.md` — README + L01 + L02 + L15
- `brief-writer-contracts-process.md` — L04 + L05 + L06
- `brief-writer-compliance-risk.md` — L07 + L08 + L09
- `brief-writer-incident-metrics.md` — L10 + L11
- `brief-writer-agents-capstone.md` — L12 + L13 + L14
- `brief-plugin-builder.md` — Full plugin scope

Each brief contains:

- Exact file paths to create
- Spec line ranges to read (NOT the full spec)
- Content-specific notes (which plugin commands, which exercises, cross-references)
- Exit criteria (what 'done' means for their scope)

### 4. Chapter README

Write `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/README.md` following the Ch 35 README format exactly:

- YAML frontmatter (slug, sidebar_position: 38, title, description, chapter_number: 38, part_number: 3, version: 1.0, status: draft)
- Teaching Aid section with quote from COO
- What You'll Learn section (learning outcomes)
- Lesson Flow table (15 rows: lesson link, title, duration, outcome)
- Chapter Contract (5 questions students can answer by end)
- Prerequisites (Cowork access, BOTH plugins installed, working folder)
  - Use Ch 34 multi-plugin install format: numbered steps for official then custom plugin
- After Chapter 38 section (perspective shift)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — architecture-spec.md, shared-brief.md, 6 writer briefs, README.md'"

---

## PHASE 2: REFERENCE BUILDER

Create task: "Phase 2: Gold-standard reference lesson (L03)"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `reference-builder`
Model: opus

### Reference Builder Teammate Prompt

"You are the `reference-builder` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` — the master spec from architect
2. `specs/drafts/ch38-operations/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` — Ch 35 L03 as format reference (YAML frontmatter, section structure, Try With AI, all patterns)
4. `specs/drafts/chapter27_operations/Chapter27_Operations.md` lines 76-209 — Part One: Vendor Management (your source content)
5. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/vendor-review/SKILL.md` — the official `/vendor-review` skill (understand what the tool does)

DELIVERABLE: Write ONE gold-standard lesson that ALL other writers will match:

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/03-vendor-management-portfolio-view.md`

This lesson teaches vendor portfolio management using the OFFICIAL `/vendor-review` command. It must demonstrate EVERY pattern:

- [ ] Full YAML frontmatter (all fields from architecture-spec.md template, including teaching_guide)
- [ ] Narrative opening connecting to the vendor sprawl problem (from spec's Part One)
- [ ] Core concept: invisible vendor portfolio, rationalisation opportunity, renewal calendar
- [ ] `/vendor-review` command interaction (show the command with realistic input, show sample output from spec's vendor portfolio audit)
- [ ] 'What to evaluate' section teaching students to assess the AI's vendor analysis
- [ ] Exercise: Run vendor portfolio audit with 47 vendors, identify rationalisation opportunities, build renewal calendar. Evaluate whether the AI correctly identified addressable savings.
- [ ] Try With AI section (3 prompts: Reproduce → Adapt → Apply)
- [ ] `:::note` and `:::info` blocks used appropriately
- [ ] NO `import` statements for Flashcards or Quiz components (these DO NOT EXIST as React components)
- [ ] Cross-reference forward to L04 (contract analysis will deepen vendor intelligence)

Also write the sidecar files:

- `03-vendor-management-portfolio-view.flashcards.yaml`
- `03-vendor-management-portfolio-view.summary.md`

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — 03-vendor-management-portfolio-view.md + .flashcards.yaml + .summary.md'"

---

## PHASE 3: PLUGIN BUILDER + CHAPTER WRITERS (parallel)

After Phase 2 completes (reference lesson exists), spawn ALL Phase 3 teammates SIMULTANEOUSLY. The plugin-builder can start after Phase 1 (does not need the reference lesson). Chapter writers need the reference lesson.

### 3A: Plugin Builder

Create task: "Phase 3A: Build operations-intelligence plugin"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `plugin-builder`
Model: opus

#### Plugin Builder Teammate Prompt

"You are the `plugin-builder` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

You build the custom Cowork plugin (`operations-intelligence`). You do NOT write book lessons.

This plugin contains ONLY the capabilities NOT in the official `operations` plugin. Zero overlap.

REFERENCE DOCUMENTATION — Read these FIRST:

1. https://code.claude.com/docs/en/plugins-reference — Official plugin format, plugin.json schema, directory structure, component types
2. https://agentskills.io/specification — SKILL.md format specification (YAML frontmatter schema, name constraints, description field, progressive disclosure)
3. https://code.claude.com/docs/en/sub-agents — Agent definition format (frontmatter fields: name, description, tools, model, memory, background, skills)

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` — master spec with plugin directory skeleton
2. `specs/drafts/ch38-operations/brief-plugin-builder.md` — your specific brief
3. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/.claude-plugin/plugin.json` — reference plugin.json format
4. Read 2-3 supply-chain skill SKILL.md files from `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/skills/` — reference skill format
5. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/evals/` — reference eval format (cases.yaml + run.py)
6. Read 1-2 agent files from `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/agents/` — reference agent format
7. SKILL SOURCE MATERIAL — read ALL of these spec files:
   - `specs/drafts/chapter27_operations/ops-skills/products/audit.md` — source for `/audit` skill
   - `specs/drafts/chapter27_operations/ops-skills/products/contract.md` — source for `/contract` skill
   - `specs/drafts/chapter27_operations/ops-skills/products/incident.md` — source for `/incident` skill
   - `specs/drafts/chapter27_operations/ops-skills/products/metrics.md` — source for `/metrics` skill
   - `specs/drafts/chapter27_operations/ops-skills/agents/vendor-watchdog-agent.md` — source for vendor-watchdog agent
   - `specs/drafts/chapter27_operations/ops-skills/agents/process-health-agent.md` — source for process-health agent
   - `specs/drafts/chapter27_operations/ops-skills/agents/compliance-monitor-agent.md` — source for compliance-monitor agent
   - `specs/drafts/chapter27_operations/ops-skills/agents/change-tracker-agent.md` — source for change-tracker agent
   - `specs/drafts/chapter27_operations/ops-skills/ops-global-router.md` — DISSOLVE this. Extract universal standards and distribute to relevant skills/agents (see Design Decisions #3)
   - `specs/drafts/chapter27_operations/ops-skills/ops.local.md.template` — source for local.md.template

DELIVERABLES — write to `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/`:

### 1. Plugin Manifest

`.claude-plugin/plugin.json`:

```json
{
  \"name\": \"operations-intelligence\",
  \"version\": \"1.0.0\",
  \"description\": \"Operations intelligence layer — audit preparation, contract analysis, incident management, operational metrics design, and four persistent monitoring agents. Extends the official Operations plugin with deep compliance, risk, and change intelligence.\",
  \"author\": {
    \"name\": \"Panaversity\",
    \"url\": \"https://github.com/panaversity\"
  },
  \"homepage\": \"https://agentfactory.panaversity.org\",
  \"repository\": \"https://github.com/panaversity/agentfactory-business-plugins\",
  \"license\": \"Apache-2.0\",
  \"keywords\": [\"operations\", \"audit\", \"contract-analysis\", \"incident-management\", \"operational-metrics\", \"compliance-monitor\", \"change-tracker\", \"vendor-watchdog\", \"process-health\"]
}
```

### 2. Skills (4 total, NO router)

Convert each spec skill file into proper SKILL.md format per https://agentskills.io/specification:

| Spec File              | Plugin Skill Dir           | Command     | Notes                                                                                      |
| ---------------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `products/audit.md`    | `skills/audit/SKILL.md`    | `/audit`    | 3 workflows: prep, mock, response. Embed compliance codes                                  |
| `products/contract.md` | `skills/contract/SKILL.md` | `/contract` | 4 workflows: obligations, risk flags, summary, renewal                                     |
| `products/incident.md` | `skills/incident/SKILL.md` | `/incident` | 5 workflows: post-mortem, Five Whys, log, tracker, brief. Embed incident quality standards |
| `products/metrics.md`  | `skills/metrics/SKILL.md`  | `/metrics`  | KPI framework design, leading/lagging, monthly report                                      |

Each SKILL.md must have:

- YAML frontmatter: `name` (matching directory, lowercase+hyphens), `description` (max 1024 chars, include trigger phrases), `license: Apache-2.0`, `metadata: { author: panaversity, version: \"1.0\" }`
- Body: step-by-step workflow instructions from spec, output format templates, never-do rules
- Distribute relevant universal standards from the router into each skill (e.g., compliance status codes → `/audit`, incident quality standards → `/incident`)
- Keep under 500 lines per SKILL.md
- Reference `ops.local.md` for org-specific configuration where applicable

### 3. Agents (4 total)

Convert each spec agent file into proper agent.md format per https://code.claude.com/docs/en/sub-agents:

| Spec File                            | Plugin Agent File              | Purpose                                                       | Schedule           |
| ------------------------------------ | ------------------------------ | ------------------------------------------------------------- | ------------------ |
| `agents/vendor-watchdog-agent.md`    | `agents/vendor-watchdog.md`    | Renewal calendar, SLA breaches, spend variance, approved list | Weekly (Mon 07:00) |
| `agents/process-health-agent.md`     | `agents/process-health.md`     | SOP currency, orphaned processes, change/regulation triggers  | Monthly (1st Mon)  |
| `agents/compliance-monitor-agent.md` | `agents/compliance-monitor.md` | Obligation tracking, evidence currency, regulatory changes    | Weekly (Mon 08:00) |
| `agents/change-tracker-agent.md`     | `agents/change-tracker.md`     | Change pipeline, rollback compliance, PIR tracking            | Weekly (Fri 16:00) |

Each agent.md must have YAML frontmatter:

- `name`: lowercase+hyphens identifier
- `description`: when Claude should invoke this agent
- `tools`: appropriate tool list (Read, Grep, Glob, Bash, WebSearch, WebFetch as needed)
- `model`: inherit
- `background`: true (these are persistent monitoring agents)
- `skills`: list relevant plugin skills this agent should have preloaded (e.g., compliance-monitor lists `audit` skill)

Body: detailed system prompt from spec (monitoring schedule, alert types, escalation rules, never-do rules, output format for reports/alerts).

Embed universal standards from the router into relevant agents:

- `vendor-watchdog`: embed risk scoring 5×5 matrix
- `compliance-monitor`: embed compliance status codes (🟢/🟡/🔴 with evidence rules)
- `change-tracker`: embed change classifications (STANDARD/SIGNIFICANT/MAJOR/CRITICAL)

### 4. local.md.template

Copy from `specs/drafts/chapter27_operations/ops-skills/ops.local.md.template`. Adapt if needed to match the two-plugin architecture (reference official plugin commands where appropriate).

### 5. Evals

Create `evals/cases.yaml` with golden test cases:

- At least 2 routing cases per skill (8 minimum for 4 skills)
- At least 2 negative cases (queries that should match the OFFICIAL plugin, not ours — e.g., 'review this vendor' should NOT trigger our plugin since `/vendor-review` is official)
- Format: match supply-chain's `evals/cases.yaml` structure

Create `evals/run.py`:

- Match supply-chain's eval runner pattern
- Support `--list` flag to show all cases
- Support `--case <name>` to run single case

### 6. README.md

Plugin README with:

- Quick Start (install instructions — both official and custom plugins)
- How the two plugins work together (official = base, custom = intelligence layer)
- Skill inventory table (command → purpose)
- Agent inventory table (name → purpose → schedule → key alerts)
- Configuration (`ops.local.md` section with template reference)

### 7. VALIDATION (after writing ALL files)

After writing every file, validate against the plugin validation checklist at `.claude/skills/chapter-design-pipeline/references/plugin-validation-checklist.md`. Specifically:

- After each SKILL.md: validate name (1-64 chars, lowercase+hyphens, matches directory, no consecutive hyphens), description (1-1024 chars, includes trigger phrases), body under 500 lines
- After each agent.md: validate name, description, tools list, background: true for all monitoring agents, skills list references skills that actually exist in skills/
- After plugin.json: validate JSON structure, name matches directory, semver version
- After all files: cross-file consistency (skill dirs match names, agent skills references resolve, README tables match actual contents, no router references, no overlap with official plugin commands)
- Run evals: `python evals/run.py --list` then `python evals/run.py` (all cases)
- Verify: `local.md.template` exists with all configurable fields documented

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'PLUGIN-BUILDER DONE — plugin.json + 4 skills + 4 agents + evals + local.md.template + README'"

---

### 3B: Writer — Bookends

Create task: "Phase 3B: Bookend lessons (L01, L02, L15)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-bookends`
Model: sonnet

#### Writer Bookends Teammate Prompt

"You are the `writer-bookends` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch38-operations/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch38-operations/brief-writer-bookends.md` (YOUR specific brief with scope)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/03-vendor-management-portfolio-view.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter27_operations/Chapter27_Operations.md` lines 1-75 (Introduction, Operations Intelligence Gap, Three Failure Modes, Plugin Architecture overview)
6. `specs/drafts/chapter27_operations/Chapter27_Operations.md` last ~60 lines (Chapter Summary, Quick Reference)
7. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/34-sales-revops-marketing/README.md` — reference for multi-plugin Prerequisites section

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports (no `import` statements for Flashcards, Quiz, or any `@site/src/components/`)
- Cowork terminology: say 'Cowork' not 'Claude in Excel'
- Fact verification: 20-30% vendor overspend and 70% reactive time use hedging language ('research suggests...') unless you independently verify via WebSearch
- L02 must install BOTH plugins in sequence: official first, then custom (follow Ch 34 multi-plugin Prerequisites format)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `01-three-operational-failure-modes.md` — Vendor Sprawl, Process Rot, Compliance Drift. Narrative opening with COO quote. No exercise — problem framing only. Duration: ~25 min.

2. `02-plugin-architecture-installation.md` — Install BOTH plugins (official `operations` + custom `operations-intelligence`). Configure `ops.local.md` from template (fill in vendor portfolio, regulatory frameworks, risk appetite, change authority matrix). Verify: run `/vendor-review` (official) and `/audit` (custom) to confirm both work. Duration: ~20 min.

3. `15-chapter-summary-quick-reference.md` — Chapter summary (the operations intelligence insight: make the invisible visible). Quick reference tables for BOTH plugins: official commands (6 commands + 3 auto-skills) AND custom commands (4 commands + 4 agents). Key tables: risk scoring matrix, change classifications, compliance status codes. Duration: ~15 min.

Plus 3 `.flashcards.yaml` files and 3 `.summary.md` files = 9 files total.

When finished, message the team lead: 'WRITER BOOKENDS DONE — L01 + L02 + L15 (9 files)'"

---

### 3C: Writer — Contracts & Process

Create task: "Phase 3C: Contract + Process + Change lessons (L04, L05, L06)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-contracts-process`
Model: sonnet

#### Writer Contracts-Process Teammate Prompt

"You are the `writer-contracts-process` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch38-operations/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch38-operations/brief-writer-contracts-process.md` (YOUR specific brief with scope and line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/03-vendor-management-portfolio-view.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter27_operations/Chapter27_Operations.md` lines 200-497 (Parts Two and Three: Process Documentation + Change Management)
6. `specs/drafts/chapter27_operations/ops-skills/products/contract.md` — `/contract` skill spec (custom plugin)
7. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/process-doc/SKILL.md` — official `/process-doc` skill
8. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/runbook/SKILL.md` — official `/runbook` skill
9. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/change-request/SKILL.md` — official `/change-request` skill

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- L04 uses CUSTOM plugin command `/contract`. L05 and L06 use OFFICIAL plugin commands (`/process-doc`, `/runbook`, `/change-request`).
- L04 cross-references back to L03 (contract analysis deepens vendor intelligence from vendor portfolio audit)
- L05 must teach SOP vs runbook distinction — same domain, different audiences and formats
- L06 cross-references forward to L10 (the incident in L10 was caused by a poorly managed change)
- Exercise format: include 'What to evaluate' section for each exercise
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `04-contract-analysis-obligation-extraction.md` — Contract analysis methodology, `/contract` command (CUSTOM plugin). Exercise: Extract obligations, SLAs, key dates from a sample vendor contract. Risk-flag auto-renewal traps, liability caps, price escalation, unilateral change rights, termination convenience, data ownership. Duration: ~40 min.

2. `05-process-documentation-sops-runbooks.md` — Why process docs decay. Three-stage failure. `/process-doc` (official) for process documentation + RACI. `/runbook` (official) for operational runbooks. Exercise: Document monthly supplier payment run as SOP with RACI + create IT runbook for failure mode. Teach the distinction: SOP = business audience with controls and approvals; runbook = on-call audience with troubleshooting and escalation. Duration: ~45 min.

3. `06-change-management-impact-rollback.md` — Why changes fail (incomplete impact, insufficient comms, no rollback). `/change-request` (official). Exercise: Create change impact assessment for ERP migration (from spec's detailed example). Stakeholder map, comms plan, rollback plan with trigger criteria. Evaluate: did the AI catch the Q3 go-live / year-end conflict? Duration: ~40 min.

Plus 3 `.flashcards.yaml` files and 3 `.summary.md` files = 9 files total.

When finished, message the team lead: 'WRITER CONTRACTS-PROCESS DONE — L04 + L05 + L06 (9 files)'"

---

### 3D: Writer — Compliance & Risk

Create task: "Phase 3D: Compliance + Audit + Risk lessons (L07, L08, L09)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-compliance-risk`
Model: sonnet

#### Writer Compliance-Risk Teammate Prompt

"You are the `writer-compliance-risk` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch38-operations/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch38-operations/brief-writer-compliance-risk.md` (YOUR specific brief with scope and line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/03-vendor-management-portfolio-view.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter27_operations/Chapter27_Operations.md` lines 497-765 (Parts Four and Five: Compliance Tracking + Operational Risk)
6. `specs/drafts/chapter27_operations/ops-skills/products/compliance.md` — compliance spec (official skill covers this, used for depth)
7. `specs/drafts/chapter27_operations/ops-skills/products/audit.md` — `/audit` skill spec (custom plugin)
8. `specs/drafts/chapter27_operations/ops-skills/products/risk.md` — risk spec (official skill covers this, used for depth)
9. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/compliance-tracking/SKILL.md` — official compliance-tracking skill
10. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/risk-assessment/SKILL.md` — official risk-assessment skill

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- L07 uses OFFICIAL `compliance-tracking` auto-skill (triggered by keywords, NOT a slash command). Students prompt naturally: 'Map our compliance obligations...' not '/compliance-tracking'.
- L08 uses CUSTOM `/audit` command. L08 flows directly from L07 — the compliance map from L07 IS the input to L08's audit preparation.
- L09 uses OFFICIAL `risk-assessment` auto-skill (triggered by keywords). Students prompt naturally: 'Build a risk register for...' not '/risk-assessment'.
- The spec's detailed compliance examples (UK FCA, UK GDPR, AML) and risk register examples are excellent source material — adapt them for exercises.
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `07-compliance-tracking-obligations-evidence.md` — Compliance drift happens silently. Official `compliance-tracking` skill (auto-activated). Exercise: Map compliance obligations for a UK financial services firm (from spec's detailed example). For each: owner, control, evidence, status. Identify AML PEP screening gap. Evaluate: is every obligation backed by evidence? Are 🟢/🟡/🔴 statuses justified? Duration: ~45 min.

2. `08-audit-preparation-evidence-mock-review.md` — Why audits fail when evidence is scattered. `/audit` (CUSTOM plugin). Exercise: Prepare for FCA supervisory visit (from spec). Build evidence inventory, run mock audit with likely regulator questions, identify gaps, create 6-week preparation timeline. Evaluate: would this evidence pack survive a real audit? Cross-reference: uses L07's compliance map as input. Duration: ~40 min.

3. `09-operational-risk-register-that-works.md` — Why risk registers fail. Official `risk-assessment` skill (auto-activated). Exercise: Build risk register for operations function (from spec). Score inherent risk, rate control effectiveness (STRONG/MODERATE/WEAK/ABSENT), calculate residual risk, define escalation thresholds. Evaluate: are controls rated by actual effectiveness (not theoretical)? Do mitigation plans quantify reduction targets? Duration: ~40 min.

Plus 3 `.flashcards.yaml` files and 3 `.summary.md` files = 9 files total.

When finished, message the team lead: 'WRITER COMPLIANCE-RISK DONE — L07 + L08 + L09 (9 files)'"

---

### 3E: Writer — Incident & Metrics

Create task: "Phase 3E: Incident + Metrics lessons (L10, L11)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-incident-metrics`
Model: sonnet

#### Writer Incident-Metrics Teammate Prompt

"You are the `writer-incident-metrics` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch38-operations/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch38-operations/brief-writer-incident-metrics.md` (YOUR specific brief with scope and line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/03-vendor-management-portfolio-view.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter27_operations/Chapter27_Operations.md` lines 765-895 (Part Six: Incident Management)
6. `specs/drafts/chapter27_operations/ops-skills/products/incident.md` — `/incident` skill spec (custom plugin)
7. `specs/drafts/chapter27_operations/ops-skills/products/metrics.md` — `/metrics` skill spec (custom plugin)
8. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/skills/status-report/SKILL.md` — official `/status-report` skill (used alongside `/metrics` in L11)

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- BOTH lessons use CUSTOM plugin commands. L10 = `/incident`, L11 = `/metrics` + official `/status-report`.
- L10 cross-references back to L06 (the change management lesson) — the payment outage incident was CAUSED by a poorly managed change (runbook not updated after cloud migration). This is the central cross-lesson callback.
- L11 aggregates all previous domains: one KPI per domain covered in L03-L10.
- L11 teaches the complementary workflow: `/metrics` designs the framework, then `/status-report` generates reports from it.
- The spec's detailed post-mortem example (payment processing outage, 4hr 23min, £140,000 impact) is excellent source material — use it.
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `10-incident-management-postmortem-five-whys.md` — Why post-mortems fail. Blame-free analysis. Systemic vs proximate cause. `/incident` (CUSTOM). Exercise: Write post-mortem for payment processing outage (from spec's detailed example). Run Five Whys from 'database failover failed' to 'runbook validation not part of change acceptance criteria.' Assign 6 corrective actions with named owners and specific dates. Evaluate: does each CA address systemic root cause, not just symptom? Cross-ref: the root cause connects to L06 (change management). Duration: ~45 min.

2. `11-operational-metrics-designing-what-to-measure.md` — Metrics that drive decisions vs fill dashboards. Leading vs lagging indicators. `/metrics` (CUSTOM) + `/status-report` (OFFICIAL). Exercise: Design 5 operational KPIs (one per domain: vendor, process, compliance, risk, incident). Define formula, data source, thresholds (green/amber/red), named owner for each. Then generate monthly operations report using `/status-report`. Evaluate: are thresholds set at the point where action is preventive? Duration: ~40 min.

Plus 2 `.flashcards.yaml` files and 2 `.summary.md` files = 6 files total.

When finished, message the team lead: 'WRITER INCIDENT-METRICS DONE — L10 + L11 (6 files)'"

---

### 3F: Writer — Agents & Capstone

Create task: "Phase 3F: Agents + Intelligence Brief + Capstone (L12, L13, L14)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-agents-capstone`
Model: sonnet

#### Writer Agents-Capstone Teammate Prompt

"You are the `writer-agents-capstone` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch38-operations/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch38-operations/brief-writer-agents-capstone.md` (YOUR specific brief with scope and line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/03-vendor-management-portfolio-view.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter27_operations/Chapter27_Operations.md` lines 895-998 (Part Seven: The Operations Agents)
6. `specs/drafts/chapter27_operations/ops-skills/agents/` — ALL 4 agent spec files (vendor-watchdog, process-health, compliance-monitor, change-tracker)
7. `specs/drafts/chapter27_operations/Chapter27_Operations.md` last ~70 lines (Chapter Summary, Quick Reference — for capstone framing)
8. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/12-persistent-agents-schedule.md` — reference for agents lesson format (if available)

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- ALL three lessons use CUSTOM plugin. L12 = all 4 agents. L13 = agents + `/metrics` + official `/status-report`. L14 = BOTH plugins fully.
- L12 is where the custom plugin differentiates — no official plugin has persistent agents. Frame this as the transition from one-time analysis to continuous intelligence.
- L13 integrates everything: agents → metrics → status report → COO brief. This is the payoff lesson.
- L14 (capstone, 90 min) must let students CHOOSE their scenario (new subsidiary acquisition, ERP migration, or regulatory change) and execute the full operations cycle.
- L14 must use BOTH plugins comprehensively — every official command and every custom command at least once.
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `12-persistent-agents-deployment-schedule.md` — Continuous monitoring vs periodic review. Agent deployment model. CUSTOM plugin — all 4 agents. Exercise: Configure all 4 agents (vendor-watchdog weekly Mon 07:00, process-health monthly 1st Mon, compliance-monitor weekly Mon 08:00, change-tracker weekly Fri 16:00). Review sample alert output for each. Set escalation thresholds. Evaluate: are escalation thresholds appropriate? Would the COO want this alert at 3am? Duration: ~40 min.

2. `13-operations-intelligence-brief.md` — Cross-domain intelligence. How agents feed metrics feed reports. BOTH plugins. Exercise: Build weekly operations intelligence brief combining: vendor-watchdog alerts + compliance-monitor status + change-tracker pipeline + risk updates + operational metrics dashboard. Use `/metrics` (custom) to structure KPIs, then `/status-report` (official) to format the brief. Evaluate: does the brief give the COO a complete picture in 5 minutes? Duration: ~35 min.

3. `14-capstone-end-to-end-operations-sprint.md` — Full operations cycle on a chosen scenario. BOTH plugins. Exercise (90 min): Given scenario options (A: new subsidiary acquisition, B: ERP migration, C: major regulatory change), execute: vendor audit `/vendor-review` → contract review `/contract` → process documentation `/process-doc` + `/runbook` → change assessment `/change-request` → compliance mapping → audit prep `/audit` → risk register → incident response plan `/incident` → metrics framework `/metrics` → agent configuration → executive brief `/status-report`. Deliverable: complete operational intelligence layer. Duration: ~90 min.

Plus 3 `.flashcards.yaml` files and 3 `.summary.md` files = 9 files total.

When finished, message the team lead: 'WRITER AGENTS-CAPSTONE DONE — L12 + L13 + L14 (9 files)'"

---

## PHASE 4: QUALITY REVIEWER

Create task: "Phase 4: Quality review of all Ch 38 content"
Depends on: ALL Phase 3 tasks
Spawn 1 teammate: `quality-reviewer`
Model: opus

### Quality Reviewer Teammate Prompt

"You are the `quality-reviewer` teammate for Chapter 38: Operations Management.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch38-operations/architecture-spec.md` — master architecture
2. `specs/drafts/ch38-operations/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/03-vendor-management-portfolio-view.md` — reference lesson (quality benchmark)
4. ALL lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/` — read every `.md` file
5. ALL plugin files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/` — review every skill and agent
6. `.claude/rules/cowork-content.md` — Cowork terminology rules

REVIEW CHECKLIST — check EVERY lesson file against:

### Universal Checks

- [ ] YAML frontmatter complete (all fields from architecture-spec template)
- [ ] Narrative opening (not jumping straight to commands)
- [ ] Consistent voice (professional operations, matches reference lesson)
- [ ] Cowork terminology correct ('Cowork' not 'Claude in Excel')
- [ ] No phantom imports (grep for `import.*@site/src/components` — must return nothing)
- [ ] Sidecar files exist (.flashcards.yaml + .summary.md for every lesson .md)
- [ ] Cross-references correct (L04→L03, L07→L08, L06→L10, L11 aggregates all, L12→all domains, L13 integrates)
- [ ] Fact claims hedged where flagged (20-30% vendor overspend, 70% reactive time, 8-10% savings)

### Plugin-Specific Checks

- [ ] L02 installs BOTH plugins in correct order (official first, then custom)
- [ ] Lessons using official commands use correct syntax (`/vendor-review` not `/vendor`, `/process-doc` not `/process`, `/change-request` not `/change`)
- [ ] Lessons using custom commands use correct syntax (`/audit`, `/contract`, `/incident`, `/metrics`)
- [ ] L07 and L09 use auto-skills correctly (natural prompting, not slash commands)
- [ ] L15 quick reference covers ALL commands from BOTH plugins + all 4 agents
- [ ] No lesson references commands from the wrong plugin

### Exercise Checks

- [ ] Every exercise lesson has 'What to evaluate' section
- [ ] Exercises use realistic sample data (not toy examples)
- [ ] Try With AI sections have 3 prompts (Reproduce → Adapt → Apply)
- [ ] Capstone (L14) uses ALL commands from both plugins at least once

### Plugin Technical Checks

- [ ] plugin.json is valid JSON with all required fields (name, version, description, author)
- [ ] Every SKILL.md has valid YAML frontmatter (name matches directory, description present, license)
- [ ] Skill names are lowercase+hyphens only, no consecutive hyphens, 1-64 chars
- [ ] Agent .md files have required frontmatter (name, description, tools, background: true, skills list)
- [ ] Universal standards distributed to relevant skills/agents (NOT in a separate router file)
- [ ] evals/cases.yaml has 8+ routing test cases + 2+ negative cases
- [ ] No overlap with official plugin commands in custom skills (no /vendor-review, /process-doc, /change-request, /runbook, /capacity-plan, /status-report references as commands)
- [ ] local.md.template present with all configurable fields documented
- [ ] README.md explains two-plugin architecture clearly

### Continuity Checks

- [ ] L04 (contract) references L03 (vendor) findings
- [ ] L08 (audit) uses L07 (compliance) map as input
- [ ] L10 (incident) references L06 (change management) — root cause callback
- [ ] L11 (metrics) has one KPI per domain (vendor, process, compliance, risk, incident)
- [ ] L12 (agents) references which domains each agent automates
- [ ] L13 (brief) shows complete integration of all components

DELIVERABLE: Write `specs/drafts/ch38-operations/quality-report.md` with:

1. Overall quality score (Pass / Conditional Pass / Fail)
2. Per-lesson summary (1-2 sentences each: strengths + issues)
3. Issues list (specific: file, line, issue, fix required)
4. Plugin command accuracy table (every command reference checked)
5. Cross-reference verification table (every forward/backward ref checked)

If Fail: list the minimum fixes required for Pass.
If Conditional Pass: list recommended improvements.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md [PASS/CONDITIONAL/FAIL]'"

---

## PHASE 5: POST-PRODUCTION (stateful — same team, NOT shutdown)

After quality review passes (Phase 4), the team continues. Do NOT shut down teammates or the team. Reuse existing teammates or spawn new ones for post-production.

### 5A — Summaries (parallel)

Message each writer teammate with explicit instructions:

> "Post-production task: For each lesson you wrote, invoke the `/summary-generator` skill on the lesson `.md` file. This produces a `.summary.md` sidecar adjacent to the lesson. If you already created summary files during Phase 3, verify they match the skill's quality standard and regenerate if needed. When done, message the lead: 'SUMMARIES DONE — [file list]'"

Distribute across writers by their original lesson assignments.

### 5B — Flashcards (parallel)

Message each writer teammate with explicit instructions:

> "Post-production task: For each lesson you wrote, invoke the `/generate-flashcards` skill on the lesson `.md` file. This produces a `.flashcards.yaml` sidecar adjacent to the lesson. If you already created flashcard files during Phase 3, verify they match the skill's quality standard and regenerate if needed. When done, message the lead: 'FLASHCARDS DONE — [file list]'"

Distribute across writers by their original lesson assignments.

### 5C — Chapter Quiz

Spawn or reuse a teammate for the chapter quiz using `/quiz-generator`:

- Input: all 15 lesson files in the chapter
- Output: 50-question quiz (or appended to L15 summary lesson)
- Run after all lessons + summaries are complete
- Target: 50 questions, randomized batching of 15-20 per session

### 5D — Slides

Spawn or reuse a teammate for slides:

- Use `/notebooklm-slides` to generate slide content from all lessons + README
- Then use `/upload-chapter-slides` to upload PDF to CDN and update README frontmatter
- Output: PDF slide deck + README `slides:` frontmatter update

### 5E — Plugin Validation

The plugin-builder teammate MUST validate every file against the checklist (already specified in their prompt above). After all Phase 3 work + quality review, confirm:

- Run `/skill-validator` on each of the 4 SKILL.md files
- Run `python evals/run.py --list` then `python evals/run.py` (all cases)
- Verify zero overlap with official plugin (no skill or command name collisions)

---

## PHASE 6: FINAL VERIFICATION (Lead Only)

After ALL post-production completes, the team lead (you) runs these checks:

```bash
# File inventory — lesson/README files (exclude .summary.md sidecars)
ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/*.md | grep -cv '\.summary\.md$'
# Expected: 16 (README + 15 lessons)

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/*.summary.md | wc -l
# Expected: 15 summary sidecars

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/*.flashcards.yaml | wc -l
# Expected: 15 flashcard sidecars

# No phantom imports
grep -r "import.*@site/src/components" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/
# Must return nothing

# YAML frontmatter spot-check (3 random lessons)
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/04-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/09-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/12-*.md

# Plugin checks
ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/skills/*/SKILL.md | wc -l
# Expected: 4 skill files

ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/agents/*.md | wc -l
# Expected: 4 agent files

python /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/evals/run.py --list
# Evals exist and list

# Verify no overlap with official plugin
grep -r "vendor-review\|process-doc\|change-request\|capacity-plan\|status-report\|runbook" /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/skills/*/SKILL.md
# Must return nothing (no overlap commands in our skills)

# README slides frontmatter
grep "slides:" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/README.md
# Slides metadata present (after Phase 5D)
```

Only after ALL checks pass: shut down teammates, delete the team, report to user.

---

## LEAD COORDINATION RULES

1. Create team with TeamCreate.
2. Create ALL tasks upfront with dependencies (Phase 1 → 2 → 3 → 4 → 5 → 6).
3. Phase ordering is strict. Do NOT start Phase 2 before Phase 1 completes. Do NOT start Phase 3 writers before Phase 2 completes. Plugin-builder may start after Phase 1.
4. Do NOT write content yourself — delegate EVERYTHING to teammates.
5. When spawning Phase 3, spawn ALL writer teammates SIMULTANEOUSLY (they work in parallel with zero file overlap).
6. Monitor teammate progress via messages. If a teammate is stuck for more than 10 minutes, message them to check status or spawn a replacement.
7. Quality review (Phase 4) is a gate. If quality-reviewer reports FAIL, fix the issues (message relevant writers to correct) and re-run quality review before proceeding.
8. Post-production (Phase 5) reuses existing teammates where possible. Do not shut down the team between Phase 4 and Phase 5.
9. After all Phase 5 tasks complete, run Phase 6 verification yourself (these are bash commands, not delegate-to-teammate commands).
10. Only after Phase 6 passes: shut down all teammates, delete the team, report completion to user.
11. If the `quality-reviewer` finds plugin command references using wrong names (e.g., `/vendor` instead of `/vendor-review` for official, or `/compliance` instead of `compliance-tracking`), this is a FAIL — these must be corrected before proceeding.
12. The custom plugin directory (`operations-intelligence/`) must be created at `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/` — this is a DIFFERENT repository from the book content.

---

## MODEL PREFERENCES

| Teammate                   | Model  | Rationale                                         |
| -------------------------- | ------ | ------------------------------------------------- |
| `architect`                | opus   | Full spec analysis, architecture design           |
| `reference-builder`        | opus   | Gold standard quality, pattern definition         |
| `plugin-builder`           | opus   | Plugin specs, agent definitions, validation       |
| `writer-bookends`          | sonnet | Pattern following, intro/summary                  |
| `writer-contracts-process` | sonnet | Pattern following, 3 lessons                      |
| `writer-compliance-risk`   | sonnet | Pattern following, 3 lessons                      |
| `writer-incident-metrics`  | sonnet | Pattern following, 2 lessons                      |
| `writer-agents-capstone`   | sonnet | Pattern following, 3 lessons (capstone is longer) |
| `quality-reviewer`         | opus   | Critical assessment, cross-file consistency       |

---

## ANTI-PATTERNS TO AVOID

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 3 writers before Phase 2 completes (plugin-builder can start after Phase 1)
- Do NOT spawn quality reviewer before ALL Phase 3 teammates complete
- Do NOT let writer teammates read the full governing spec (only architect reads it all)
- Do NOT skip quality review or verification
- Do NOT shut down the team after Phase 4 — Phase 5 (post-production) needs the same team
- Do NOT use official plugin command names in custom plugin skills (zero overlap rule)
- Do NOT add `import` statements for Flashcards or Quiz React components (they don't exist)
- Do NOT use 'Claude in Excel' when you mean 'Cowork' (separate products)
