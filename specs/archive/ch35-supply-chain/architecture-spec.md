# Chapter 35: Supply Chain & Procurement — Master Architecture Spec

Version: 1.0 | Date: 2026-03-18

---

## 1. Chapter Identity

- **Chapter number**: 35 (global)
- **Part**: 03-Business-Domain-Agent-Workflows
- **Section**: 05-product-and-value-chain
- **Folder**: `35-supply-chain-procurement`
- **Book path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/`
- **Plugin repo**: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`

---

## 2. Directory Skeleton — Chapter

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/
├── README.md
├── 01-three-structural-failures.md
├── 01-three-structural-failures.flashcards.yaml
├── 01-three-structural-failures.summary.md
├── 02-plugin-architecture-installation.md
├── 02-plugin-architecture-installation.flashcards.yaml
├── 02-plugin-architecture-installation.summary.md
├── 03-vendor-classification-kraljic.md
├── 03-vendor-classification-kraljic.flashcards.yaml
├── 03-vendor-classification-kraljic.summary.md
├── 04-six-dimension-vendor-assessment.md
├── 04-six-dimension-vendor-assessment.flashcards.yaml
├── 04-six-dimension-vendor-assessment.summary.md
├── 05-three-way-match-rule-design.md
├── 05-three-way-match-rule-design.flashcards.yaml
├── 05-three-way-match-rule-design.summary.md
├── 06-invoice-reconciliation-at-scale.md
├── 06-invoice-reconciliation-at-scale.flashcards.yaml
├── 06-invoice-reconciliation-at-scale.summary.md
├── 07-supplier-risk-five-dimensions.md
├── 07-supplier-risk-five-dimensions.flashcards.yaml
├── 07-supplier-risk-five-dimensions.summary.md
├── 08-logistics-carrier-performance.md
├── 08-logistics-carrier-performance.flashcards.yaml
├── 08-logistics-carrier-performance.summary.md
├── 09-supply-network-design-scenarios.md
├── 09-supply-network-design-scenarios.flashcards.yaml
├── 09-supply-network-design-scenarios.summary.md
├── 10-spend-analytics-consolidation.md
├── 10-spend-analytics-consolidation.flashcards.yaml
├── 10-spend-analytics-consolidation.summary.md
├── 11-vendor-communications-disputes.md
├── 11-vendor-communications-disputes.flashcards.yaml
├── 11-vendor-communications-disputes.summary.md
├── 12-persistent-agents-schedule.md
├── 12-persistent-agents-schedule.flashcards.yaml
├── 12-persistent-agents-schedule.summary.md
├── 13-vendor-exit-protocol.md
├── 13-vendor-exit-protocol.flashcards.yaml
├── 13-vendor-exit-protocol.summary.md
├── 14-capstone-end-to-end-procurement.md
├── 14-capstone-end-to-end-procurement.flashcards.yaml
├── 14-capstone-end-to-end-procurement.summary.md
├── 15-chapter-summary-quick-reference.md
├── 15-chapter-summary-quick-reference.flashcards.yaml
└── 15-chapter-summary-quick-reference.summary.md
```

Total chapter files: 46 (1 README + 15 lessons x 3 sidecars)

---

## 3. Directory Skeleton — Plugin

```
supply-chain/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── vendor-assessment/
│   │   └── SKILL.md
│   ├── supplier-risk/
│   │   └── SKILL.md
│   ├── invoice-reconciliation/
│   │   └── SKILL.md
│   ├── vendor-communication/
│   │   └── SKILL.md
│   ├── logistics-brief/
│   │   └── SKILL.md
│   ├── spend-analysis/
│   │   └── SKILL.md
│   ├── network-design/
│   │   └── SKILL.md
│   └── supply-chain-brief/
│       └── SKILL.md
├── agents/
│   ├── vendor-health-monitor.md
│   ├── invoice-reconciliation-agent.md
│   ├── spend-intelligence-agent.md
│   ├── procurement-calendar-agent.md
│   └── logistics-intelligence-agent.md
├── evals/
│   ├── cases.yaml
│   └── run.py
└── README.md
```

Total plugin files: 17 (1 plugin.json + 8 SKILL.md + 5 agents + 2 evals + 1 README)

---

## 4. Binding Design Decisions

| Decision                     | Detail                                                                                                                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No router skill**          | 8 skills are directly addressable — no supply-chain-global-router.md in the plugin. The spec's router file is pedagogical scaffolding only.                                      |
| **No jurisdiction overlays** | Supply chain workflows are policy-configurable via `supply-chain.local.md`, not jurisdiction-specific regulatory frameworks.                                                     |
| **8 product skills**         | vendor-assessment, supplier-risk, invoice-reconciliation, vendor-communication, logistics-brief, spend-analysis, network-design, supply-chain-brief                              |
| **5 persistent agents**      | vendor-health-monitor, invoice-reconciliation-agent, spend-intelligence-agent, procurement-calendar-agent, logistics-intelligence-agent                                          |
| **3 command renames**        | `/reconcile` -> `/invoice-reconcile`, `/communicate` -> `/vendor-communicate`, `/network-design` -> `/supply-network-design` (collision avoidance with Anthropic-owned surfaces) |
| **Agents are deployable**    | Real Cowork agents, schedulable via `/schedule`. Not hypothetical architecture diagrams.                                                                                         |
| **Fact verification flags**  | GEP "60-80% exception reduction" = [VERIFY]. Samir Saci "10-12 week studies" = [VERIFY]. Use hedging language in lessons.                                                        |

---

## 5. Source-to-Output Mapping

### Spec Lines -> Lesson Files

| Spec Section                           | Spec Lines (approx)             | Lesson File                                   |
| -------------------------------------- | ------------------------------- | --------------------------------------------- |
| Introduction: Physical-Digital Gap     | 1-17                            | L01 (context)                                 |
| Three Structural Failures              | 20-41                           | L01: `01-three-structural-failures.md`        |
| Plugin Architecture                    | 44-62                           | L02: `02-plugin-architecture-installation.md` |
| Vendor Classification (Kraljic)        | 65-86                           | L03: `03-vendor-classification-kraljic.md`    |
| Six-Dimension Assessment               | 87-210                          | L04: `04-six-dimension-vendor-assessment.md`  |
| Three-Way Match Rules                  | 213-357                         | L05: `05-three-way-match-rule-design.md`      |
| Four-Agent Reconciliation Architecture | 213-320                         | L06: `06-invoice-reconciliation-at-scale.md`  |
| Five Risk Dimensions                   | 360-457                         | L07: `07-supplier-risk-five-dimensions.md`    |
| Logistics Optimisation (4 dimensions)  | 460-591                         | L08: `08-logistics-carrier-performance.md`    |
| Network Design with MCP                | 549-591                         | L09: `09-supply-network-design-scenarios.md`  |
| Spend Analytics                        | 594-659                         | L10: `10-spend-analytics-consolidation.md`    |
| Vendor Communication types             | (vendor-communication.md skill) | L11: `11-vendor-communications-disputes.md`   |
| Five Core Agents                       | 662-770                         | L12: `12-persistent-agents-schedule.md`       |
| Vendor Exit Protocol                   | (Exercise 8) 1247-1306          | L13: `13-vendor-exit-protocol.md`             |
| Exercises 1-8 composite                | 772-1306                        | L14: `14-capstone-end-to-end-procurement.md`  |
| Chapter Summary + Quick Reference      | 1309-1362                       | L15: `15-chapter-summary-quick-reference.md`  |

### Skill Spec Files -> Plugin SKILL.md Files

| Spec Skill File                      | Plugin Skill Path                        |
| ------------------------------------ | ---------------------------------------- |
| `products/vendor-assessment.md`      | `skills/vendor-assessment/SKILL.md`      |
| `products/supplier-risk.md`          | `skills/supplier-risk/SKILL.md`          |
| `products/invoice-reconciliation.md` | `skills/invoice-reconciliation/SKILL.md` |
| `products/vendor-communication.md`   | `skills/vendor-communication/SKILL.md`   |
| `products/logistics-brief.md`        | `skills/logistics-brief/SKILL.md`        |
| `products/spend-analysis.md`         | `skills/spend-analysis/SKILL.md`         |
| `products/network-design.md`         | `skills/network-design/SKILL.md`         |
| `products/supply-chain-brief.md`     | `skills/supply-chain-brief/SKILL.md`     |

### Agent Spec Files -> Plugin Agent Files

| Spec Agent File                          | Plugin Agent Path                        |
| ---------------------------------------- | ---------------------------------------- |
| `agents/vendor-health-monitor.md`        | `agents/vendor-health-monitor.md`        |
| `agents/invoice-reconciliation-agent.md` | `agents/invoice-reconciliation-agent.md` |
| `agents/spend-intelligence-agent.md`     | `agents/spend-intelligence-agent.md`     |
| `agents/procurement-calendar-agent.md`   | `agents/procurement-calendar-agent.md`   |
| `agents/logistics-intelligence-agent.md` | `agents/logistics-intelligence-agent.md` |

### Exercise-to-Lesson Assignment

| Spec Exercise                             | Exercise # | Assigned Lesson                                              | Spec Lines (approx) |
| ----------------------------------------- | ---------- | ------------------------------------------------------------ | ------------------- |
| Build Vendor Classification & Risk Config | Ex 1       | L03 + L04 (split: classification in L03, risk config in L04) | 778-849             |
| Invoice Reconciliation Sprint             | Ex 2       | L06                                                          | 852-921             |
| Build Supplier Risk Dashboard             | Ex 3       | L07                                                          | 924-1007            |
| Logistics Optimisation Analysis           | Ex 4       | L08                                                          | 1010-1074           |
| Spend Consolidation Project               | Ex 5       | L10                                                          | 1077-1146           |
| Three-Way Match Rule Design & Testing     | Ex 6       | L05 (references Ex 2 results)                                | 1149-1192           |
| Supply Chain Intelligence Dashboard       | Ex 7       | L12                                                          | 1195-1244           |
| Vendor Exit Protocol                      | Ex 8       | L13 (references Ex 1 results)                                | 1247-1306           |

---

## 6. YAML Frontmatter Template (All Lessons)

Derived from Banking Ch 32 L03 format:

```yaml
---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/{lesson-slug}
sidebar_position: { N }
title: "{Lesson Title}"
description: "{One-line description for SEO and sidebar}"
keywords: ["supply chain", "procurement", "{topic-specific keywords}"]
chapter: 35
lesson: { N }
duration_minutes: { N }

# HIDDEN SKILLS METADATA
skills:
  - name: "{Skill Name}"
    proficiency_level: "{A1|A2|B1|B2|C1|C2}"
    category: "{Conceptual|Technical|Applied|Soft}"
    bloom_level: "{Remember|Understand|Apply|Analyze|Evaluate|Create}"
    digcomp_area: "{Information-Literacy|Communication|Content-Creation|Safety|Problem-Solving}"
    measurable_at_this_level: "{How you can observe this skill}"

learning_objectives:
  - objective: "{Measurable outcome starting with action verb}"
    proficiency_level: "{A1|A2|B1|B2|C1|C2}"
    bloom_level: "{Remember|Understand|Apply|Analyze|Evaluate|Create}"
    assessment_method: "{How student demonstrates achievement}"

cognitive_load:
  new_concepts: { N }
  concepts_list:
    - "{Concept 1}"
    - "{Concept 2}"
  assessment: "{Brief justification of load vs. tier}"

differentiation:
  extension_for_advanced: "{What advanced students should explore}"
  remedial_for_struggling: "{What struggling students should focus on}"

teaching_guide:
  key_points:
    - "{Critical concept to emphasize}"
  misconceptions:
    - "{Common misunderstanding and correction}"
  discussion_prompts:
    - "{Open-ended question for deeper exploration}"
  teaching_tips:
    - "{Practical advice for instructors}"
---
```

---

## 7. Component and Pattern Catalog

### Try With AI Format (3 prompts per lesson)

Every lesson includes a "Try With AI" section with three graduated prompts:

```markdown
## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

\`\`\`
{Prompt 1: Direct application of lesson concepts to a provided scenario}
\`\`\`

**What you're learning:** {1-sentence explanation of skill being practiced}

**Adapt**: Modify the scenario to match your organisation.

\`\`\`
{Prompt 2: Same concept but parameterised for the student's own data}
\`\`\`

**What you're learning:** {1-sentence explanation}

**Apply**: Extend to a new situation the lesson didn't cover directly.

\`\`\`
{Prompt 3: Transfer/stretch prompt requiring judgment beyond the lesson}
\`\`\`

**What you're learning:** {1-sentence explanation}
:::
```

### Exercise Format (from spec exercises)

Exercises use a 5-step structure with plugin commands:

```markdown
## Exercise: {Title}

**Type:** {Configuration/Applied Practice/Systems Design/Strategic/Risk Management}
**Time:** {N} minutes
**Plugin commands:** {`/command-1`, `/command-2`}
**Goal:** {One sentence — what the student will have built by the end}

### Step 1 — {Action Verb}

{Instructions with context}

\`\`\`
/{plugin-command} {parameters}
\`\`\`

### Step 2 — {Action Verb}

...

### Step 3 — {Action Verb}

...

### Step 4 — {Action Verb}

...

### Step 5 — {Action Verb}

...

**Deliverable:** {Specific tangible output the student should have}
```

### Docusaurus Components — ALLOWED

- `:::note` / `:::info` / `:::tip` / `:::caution` / `:::danger` — admonition blocks
- Tables (GFM pipe syntax)
- Code blocks (triple backtick with language tag)
- Bold, italic, inline code
- Ordered and unordered lists
- Links (relative and absolute)
- `<Flashcards />` — JSX tag paired with `.flashcards.yaml` sidecar

### Docusaurus Components — FORBIDDEN

- **NO `import` statements** for `@site/src/components/Flashcards` or `@site/src/components/Quiz` — these DO NOT EXIST as importable React components
- **NO `import` statements** for any component not verified in `apps/learn-app/src/components/`
- Flashcards are `.flashcards.yaml` sidecar files processed at build time
- Quizzes are generated via `/quiz-generator` skill, not imported components

### Sidecar File Patterns

Every lesson `.md` file gets two sidecar files:

**`.flashcards.yaml`** — 8-12 flashcards per lesson:

```yaml
- front: "{Question}"
  back: "{Answer — concise, factual}"
- front: "{Question}"
  back: "{Answer}"
```

**`.summary.md`** — 150-250 word lesson summary:

```markdown
# {Lesson Title} — Summary

{2-3 paragraph summary covering:}

- Key concepts introduced
- Main takeaways
- How this connects to the next lesson
```

---

## 8. Plugin Architecture

### plugin.json

```json
{
  "name": "supply-chain",
  "version": "1.0.0",
  "description": "Supply chain and procurement domain agent. 8 skills covering vendor assessment, invoice reconciliation, supplier risk monitoring, logistics analysis, spend analytics, network design, vendor communications, and executive briefing. 5 persistent agents for continuous supply chain intelligence. No jurisdiction overlays — policy-configurable via supply-chain.local.md.",
  "author": {
    "name": "Panaversity",
    "url": "https://github.com/panaversity"
  },
  "homepage": "https://agentfactory.panaversity.org",
  "repository": "https://github.com/panaversity/agentfactory-business-plugins",
  "license": "Apache-2.0",
  "keywords": [
    "supply-chain",
    "procurement",
    "vendor-assessment",
    "invoice-reconciliation",
    "supplier-risk",
    "logistics",
    "spend-analytics",
    "network-design",
    "vendor-communication",
    "domain-agent"
  ]
}
```

### Command Rename Map (Collision Avoidance)

| Spec Command          | Plugin Command           | Reason                                                         |
| --------------------- | ------------------------ | -------------------------------------------------------------- |
| `/reconcile`          | `/invoice-reconcile`     | Avoids collision with potential Anthropic `/reconcile` surface |
| `/communicate`        | `/vendor-communicate`    | Avoids collision with generic `/communicate`                   |
| `/network-design`     | `/supply-network-design` | Avoids collision with generic `/network-design`                |
| `/vendor-assess`      | `/vendor-assess`         | No collision — keep as-is                                      |
| `/supplier-risk`      | `/supplier-risk`         | No collision — keep as-is                                      |
| `/logistics-brief`    | `/logistics-brief`       | No collision — keep as-is                                      |
| `/spend-analysis`     | `/spend-analysis`        | No collision — keep as-is                                      |
| `/supply-chain-brief` | `/supply-chain-brief`    | No collision — keep as-is                                      |

### Skill SKILL.md Structure (per Banking plugin pattern)

Each `skills/{name}/SKILL.md` follows the spec product file format with YAML frontmatter:

```yaml
---
name: { skill-name }
version: 1.0
description: >
  Activate for: {comma-separated trigger phrases}
plugin-commands: /{command-name}
mcp-integrations: { comma-separated MCP connections }
---
```

Followed by the workflow sections, output format, and NEVER DO THESE guardrails — all taken directly from the spec product files with command names updated per the rename map.

### Eval Structure

**`evals/cases.yaml`** — test cases covering:

- Routing accuracy: each command reaches the correct skill (8 cases)
- Skill output accuracy: golden-file comparison for key scenarios (8 cases)
- Negative cases: out-of-scope queries rejected gracefully (2 cases)
- Total: ~18 eval cases

**`evals/run.py`** — deterministic eval harness matching Banking plugin pattern:

```bash
python evals/run.py --list          # list all cases
python evals/run.py --case vendor_assess_bottleneck -v  # run single case
```

---

## 9. Lesson-Level Architecture

### Lesson Progression Map

| Lesson | Title                                  | Duration | Type       | Skills Introduced                       | Exercise    |
| ------ | -------------------------------------- | -------- | ---------- | --------------------------------------- | ----------- |
| L01    | Three Structural Failures              | 25 min   | Conceptual | None (problem framing)                  | —           |
| L02    | Plugin Architecture & Installation     | 20 min   | Setup      | Plugin install, local.md                | —           |
| L03    | Vendor Classification — Kraljic Matrix | 40 min   | Applied    | `/vendor-assess` (classification)       | Ex 1 Part A |
| L04    | Six-Dimension Vendor Assessment        | 45 min   | Applied    | `/vendor-assess` (full assessment)      | Ex 1 Part B |
| L05    | Three-Way Match Rule Design            | 40 min   | Applied    | `/invoice-reconcile` (tolerance config) | Ex 6        |
| L06    | Invoice Reconciliation at Scale        | 45 min   | Applied    | `/invoice-reconcile` (full workflow)    | Ex 2        |
| L07    | Supplier Risk — Five Dimensions        | 45 min   | Applied    | `/supplier-risk`                        | Ex 3        |
| L08    | Logistics & Carrier Performance        | 40 min   | Applied    | `/logistics-brief`                      | Ex 4        |
| L09    | Supply Network Design Scenarios        | 35 min   | Applied    | `/supply-network-design`                | —           |
| L10    | Spend Analytics & Consolidation        | 45 min   | Applied    | `/spend-analysis`                       | Ex 5        |
| L11    | Vendor Communications & Disputes       | 35 min   | Applied    | `/vendor-communicate`                   | —           |
| L12    | Persistent Agents & Schedule           | 40 min   | Systems    | All 5 agents + `/schedule`              | Ex 7        |
| L13    | Vendor Exit Protocol                   | 35 min   | Risk Mgmt  | `/vendor-assess` exit mode              | Ex 8        |
| L14    | Capstone — End-to-End Procurement      | 90 min   | Capstone   | All skills + agents                     | Composite   |
| L15    | Chapter Summary & Quick Reference      | 15 min   | Reference  | —                                       | —           |

**Total chapter duration: ~595 minutes (~10 hours)**

### Cross-Reference Map

| From Lesson | References                                                                   |
| ----------- | ---------------------------------------------------------------------------- |
| L02         | L01 (why the plugin exists)                                                  |
| L03         | L02 (plugin installed)                                                       |
| L04         | L03 (classification informs assessment depth)                                |
| L05         | L04 (tolerance rules calibrate against vendor tiers)                         |
| L06         | L05 (uses tolerance rules built in L05), Ex 6 references Ex 2 results        |
| L07         | L04 (risk dimensions extend assessment dimensions)                           |
| L08         | L07 (logistics risk informs supplier risk)                                   |
| L09         | L08 (network design uses carrier performance data)                           |
| L10         | L06 (spend analysis uses invoice data patterns)                              |
| L11         | L06 (dispute comms triggered by reconciliation exceptions)                   |
| L12         | L07, L06, L08, L10 (agents automate all prior manual workflows)              |
| L13         | L03 (exit scenarios reference classification register), Ex 8 references Ex 1 |
| L14         | All lessons (capstone integrates everything)                                 |
| L15         | All lessons (summary and quick reference)                                    |

### Exercise Dependency Chain

```
Ex 1 (L03/L04: vendor classification + risk config)
  └── Ex 6 (L05: tolerance rules tested against Ex 2 sample)
  └── Ex 8 (L13: exit scenario uses bottleneck vendor from Ex 1)

Ex 2 (L06: invoice reconciliation sprint)
  └── Ex 6 (L05: applies new tolerance rules to Ex 2 invoice sample)

Ex 3 (L07: supplier risk dashboard) — independent
Ex 4 (L08: logistics optimisation) — independent
Ex 5 (L10: spend consolidation) — independent

Ex 7 (L12: supply chain intelligence dashboard) — references all agent configs

Capstone (L14): integrates Exs 1-8 into end-to-end procurement scenario
```

---

## 10. Writer Assignment Boundaries

### Writer 1: Bookends (README + L01 + L02 + L15)

- README.md (chapter overview, lesson table, prerequisites)
- L01: Three Structural Failures (conceptual, no plugin)
- L02: Plugin Architecture & Installation (setup, first commands)
- L15: Chapter Summary & Quick Reference (all commands, all agents, key tables)

### Writer 2: Vendor + Invoice (L04 + L05 + L06)

- L04: Six-Dimension Vendor Assessment (full `/vendor-assess`)
- L05: Three-Way Match Rule Design (`/invoice-reconcile` tolerance)
- L06: Invoice Reconciliation at Scale (`/invoice-reconcile` full workflow)

### Writer 3: Risk + Logistics + Spend (L07 + L08 + L09 + L10)

- L07: Supplier Risk — Five Dimensions (`/supplier-risk`)
- L08: Logistics & Carrier Performance (`/logistics-brief`)
- L09: Supply Network Design Scenarios (`/supply-network-design`)
- L10: Spend Analytics & Consolidation (`/spend-analysis`)

### Writer 4: Agents + Comms + Exit + Capstone (L11 + L12 + L13 + L14)

- L11: Vendor Communications & Disputes (`/vendor-communicate`)
- L12: Persistent Agents & Schedule (all 5 agents + `/schedule`)
- L13: Vendor Exit Protocol (`/vendor-assess` exit mode)
- L14: Capstone — End-to-End Procurement (all skills + agents)

### Writer 5: Plugin Builder

- Full plugin directory structure
- All 8 SKILL.md files (from spec product files, with command renames)
- All 5 agent files (from spec agent files)
- plugin.json, README.md
- evals/cases.yaml + evals/run.py

### Reference Builder: L03

- L03: Vendor Classification — Kraljic Matrix (gold-standard reference lesson)
- Built by reference-builder before parallel writers start
- All other writers use L03 as their quality reference

---

## 11. Fact Verification Flags

These claims from the governing spec require [VERIFY] treatment:

| Claim                                                                                                  | Spec Location | Treatment                                                                                               |
| ------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------- |
| GEP: "organisations using coordinated agent architectures reduce exception processing time by 60-80%"  | Line ~231     | Use hedging: "Research from GEP suggests..." or "According to GEP's analysis..." — do NOT state as fact |
| Samir Saci: "network design studies which previously took 10-12 weeks can now be run conversationally" | Line ~464     | Use hedging: "Samir Saci's work demonstrates..." — do NOT state as absolute                             |
| Ricardo Devis `it-vendor-provision` architecture                                                       | Line ~48      | Verify repo exists; use as attribution, not as endorsement                                              |
| "15-25% of invoices have discrepancies"                                                                | Line ~27      | Industry-standard range — acceptable with "typically" qualifier                                         |
| "£25-£80 per invoice" exception processing cost                                                        | Line ~28      | Industry-standard range — acceptable with "estimates suggest" qualifier                                 |

---

## 12. Cowork Terminology Rules

Per `.claude/rules/cowork-content.md`:

- **"Cowork"** — correct term for the collaborative workspace (Ch 35)
- **"Claude in Excel"** — SEPARATE product (Ch 28 only, not referenced in Ch 35)
- **Never**: "Claude in Excel", "Claude Cowork", "Claude in Cowork"
- **Try With AI setups**: "Use these prompts in Cowork or your preferred AI assistant."
- **Plugin trees in lessons**: Show only installable components (`.claude-plugin/`, `skills/`), NOT dev artifacts
