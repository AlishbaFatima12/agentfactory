# Chapter 38: Operations Management — Architecture Spec

**Version:** 1.0
**Date:** 2026-03-18
**Author:** Architect agent
**Status:** Ready for writers

---

## 1. Directory Skeleton

### Chapter Content

Path: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/`

```
38-operations-management/
├── README.md
├── 01-three-operational-failure-modes.md
├── 01-three-operational-failure-modes.flashcards.yaml
├── 01-three-operational-failure-modes.summary.md
├── 02-plugin-architecture-installation.md
├── 02-plugin-architecture-installation.flashcards.yaml
├── 02-plugin-architecture-installation.summary.md
├── 03-vendor-management-portfolio-view.md
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

**Total files:** 46 (1 README + 15 lessons x 3 sidecars each)

### Custom Plugin

Path: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/`

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

**Total files:** 14 (1 plugin.json + 4 skills + 4 agents + 2 evals + 1 template + 1 README + 1 dir)

---

## 2. Source-to-Output Mapping Table

### Spec Lines to Lesson Files

| Spec Section (Ch27 spec)                                                           | Lines (approx)       | Lesson File(s) |
| ---------------------------------------------------------------------------------- | -------------------- | -------------- |
| Introduction: Operations Intelligence Gap                                          | 1-33                 | L01            |
| The Three Operational Failure Modes (Vendor Sprawl, Process Rot, Compliance Drift) | 20-33                | L01            |
| Plugin Architecture + Installing + ops.local.md                                    | 35-73                | L02            |
| Part One: Vendor Management — Portfolio View                                       | 76-199               | L03            |
| Contract Obligation Extraction                                                     | 201-210              | L04            |
| Part Two: Process Documentation — SOPs That Work                                   | 213-370              | L05            |
| Part Three: Change Management — Reducing Change Failure                            | 373-494              | L06            |
| Part Four: Compliance Tracking — Knowing What You Owe                              | 497-628              | L07            |
| Audit Preparation                                                                  | 630-640              | L08            |
| Part Five: Operational Risk — The Register That Works                              | 643-764              | L09            |
| Part Six: Incident Management — Learning From Failure                              | 768-893              | L10            |
| Exercise 7: Operational Metrics Dashboard Design                                   | 1481-1549            | L11            |
| Part Seven: The Operations Agents (4 agents)                                       | 897-998              | L12            |
| Agent reports + monthly cycle + intelligence brief                                 | 897-998 + Exercise 8 | L13            |
| Exercises 1-8 combined (capstone)                                                  | 1000-1606            | L14            |
| Chapter Summary + Quick Reference                                                  | 1609-1670            | L15            |

### Skill Spec Files to Plugin Skill Files

| Spec Skill File (ops-skills/products/) | Plugin Skill File (operations-intelligence/skills/) |
| -------------------------------------- | --------------------------------------------------- |
| `products/audit.md`                    | `skills/audit/SKILL.md`                             |
| `products/contract.md`                 | `skills/contract/SKILL.md`                          |
| `products/incident.md`                 | `skills/incident/SKILL.md`                          |
| `products/metrics.md`                  | `skills/metrics/SKILL.md`                           |

**Not included in custom plugin (covered by official plugin):**

- `products/vendor.md` -> official `/vendor-review`
- `products/process.md` -> official `/process-doc`
- `products/change.md` -> official `/change-request`
- `products/compliance.md` -> official auto-skill `compliance-tracking`
- `products/risk.md` -> official auto-skill `risk-assessment`
- `products/sop.md` -> official `/runbook`

### Agent Spec Files to Plugin Agent Files

| Spec Agent File (ops-skills/agents/) | Plugin Agent File (operations-intelligence/agents/) |
| ------------------------------------ | --------------------------------------------------- |
| `agents/vendor-watchdog-agent.md`    | `agents/vendor-watchdog.md`                         |
| `agents/process-health-agent.md`     | `agents/process-health.md`                          |
| `agents/compliance-monitor-agent.md` | `agents/compliance-monitor.md`                      |
| `agents/change-tracker-agent.md`     | `agents/change-tracker.md`                          |

### Spec Exercises to Lessons

| Spec Exercise                                    | Lesson                     | Focus                                            |
| ------------------------------------------------ | -------------------------- | ------------------------------------------------ |
| Exercise 1: Vendor Portfolio Audit               | L03 (adapted)              | Vendor management with `/vendor-review`          |
| Exercise 5 (Step 5): Contract Obligation         | L04                        | Contract analysis with `/contract`               |
| Exercise 2: SOP Writing Sprint                   | L05                        | Process docs with `/process-doc` + `/runbook`    |
| Exercise 3: Change Request and Impact Assessment | L06                        | Change management with `/change-request`         |
| Exercise 4 (Part 1): Compliance Gap Analysis     | L07                        | Compliance with auto-skill `compliance-tracking` |
| Exercise 4 (Part 2): Audit Preparation           | L08                        | Audit prep with `/audit`                         |
| Exercise 5: Operational Risk Register Build      | L09                        | Risk register with auto-skill `risk-assessment`  |
| Exercise 6: Incident Post-Mortem and RCA         | L10                        | Incident management with `/incident`             |
| Exercise 7: Operational Metrics Dashboard Design | L11                        | Metrics with `/metrics` + `/status-report`       |
| Exercise 8: Configure ops.local.md               | L02 (partial) + L14 (full) | Configuration                                    |
| All exercises combined as capstone sprint        | L14                        | End-to-end                                       |

### Official Plugin Commands to Lessons

| Official Plugin Command/Skill       | Lesson(s) That Use It                                |
| ----------------------------------- | ---------------------------------------------------- |
| `/vendor-review`                    | L02 (install verify), L03 (primary)                  |
| `/process-doc`                      | L05 (primary)                                        |
| `/runbook`                          | L05 (paired with /process-doc)                       |
| `/change-request`                   | L06 (primary)                                        |
| `/capacity-plan`                    | — (not used; not in scope for this chapter)          |
| `/status-report`                    | L11 (paired with /metrics), L13 (intelligence brief) |
| `compliance-tracking` (auto-skill)  | L07 (primary)                                        |
| `risk-assessment` (auto-skill)      | L09 (primary)                                        |
| `process-optimization` (auto-skill) | L05 (secondary — triggered by natural prompts)       |

### Custom Plugin Commands to Lessons

| Custom Plugin Command    | Lesson(s) That Use It                   |
| ------------------------ | --------------------------------------- |
| `/audit`                 | L02 (install verify), L08 (primary)     |
| `/contract`              | L04 (primary)                           |
| `/incident`              | L10 (primary)                           |
| `/metrics`               | L11 (primary), L13 (intelligence brief) |
| Vendor Watchdog agent    | L12 (configure), L13 (output)           |
| Process Health agent     | L12 (configure), L13 (output)           |
| Compliance Monitor agent | L12 (configure), L13 (output)           |
| Change Tracker agent     | L12 (configure), L13 (output)           |

---

## 3. Plugin-to-Lesson Mapping (Definitive)

| Lesson | Official Plugin Commands/Skills    | Custom Plugin Commands/Skills                                                  | Notes                                                                                              |
| ------ | ---------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| L01    | --                                 | --                                                                             | Conceptual; no plugin usage                                                                        |
| L02    | Install + verify `/vendor-review`  | Install + verify `/audit` + configure `ops.local.md`                           | Two-plugin install lesson                                                                          |
| L03    | `/vendor-review`                   | --                                                                             | Vendor portfolio audit + SLA scorecards                                                            |
| L04    | --                                 | `/contract`                                                                    | Contract obligation extraction + risk flagging                                                     |
| L05    | `/process-doc` + `/runbook`        | --                                                                             | SOP creation + process gap analysis; `process-optimization` may auto-activate                      |
| L06    | `/change-request`                  | --                                                                             | Impact assessment + comms plan + rollback                                                          |
| L07    | `compliance-tracking` (auto-skill) | --                                                                             | Obligation mapping + evidence assessment; trigger with natural prompts, NOT `/compliance-tracking` |
| L08    | --                                 | `/audit`                                                                       | Audit preparation + mock review + response framework                                               |
| L09    | `risk-assessment` (auto-skill)     | --                                                                             | Risk register build + mitigation plans; trigger with natural prompts                               |
| L10    | --                                 | `/incident`                                                                    | Post-mortem + Five Whys + corrective actions                                                       |
| L11    | `/status-report`                   | `/metrics`                                                                     | Metrics framework + dashboard + monthly report                                                     |
| L12    | --                                 | 4 agents (vendor-watchdog, process-health, compliance-monitor, change-tracker) | Agent configuration + deployment schedule                                                          |
| L13    | `/status-report`                   | Agents + `/metrics`                                                            | Operations intelligence brief synthesising agent outputs                                           |
| L14    | All applicable                     | All applicable                                                                 | Capstone: end-to-end operations sprint                                                             |
| L15    | Reference table                    | Reference table                                                                | Summary and quick reference                                                                        |

---

## 4. YAML Frontmatter Template (For All Lessons)

Derived from Ch 35 L03 format. Every lesson file MUST include this structure:

```yaml
---
slug: /Business-Domain-Agent-Workflows/operations-management/<lesson-slug>
sidebar_position: <N>
title: "<Lesson Title>"
description: "<One-sentence description of what the student will achieve>"
keywords:
  [
    "<keyword-1>",
    "<keyword-2>",
    "operations management",
    "operations plugin",
    "<domain-keyword>",
  ]
chapter: 38
lesson: <N>
duration_minutes: <N>

# HIDDEN SKILLS METADATA
skills:
  - name: "<Skill Name — verb phrase describing what the student can do>"
    proficiency_level: "<A1|A2|B1|B2|C1|C2>"
    category: "<Conceptual|Technical|Applied|Soft>"
    bloom_level: "<Remember|Understand|Apply|Analyze|Evaluate|Create>"
    digcomp_area: "<Problem-Solving|Content-Creation|Communication|Safety|Information-Literacy>"
    measurable_at_this_level: "<One sentence describing observable evidence of proficiency>"

  - name: "<Second Skill if applicable>"
    proficiency_level: "<level>"
    category: "<category>"
    bloom_level: "<level>"
    digcomp_area: "<area>"
    measurable_at_this_level: "<evidence>"

learning_objectives:
  - objective: "<Measurable outcome — starts with verb>"
    proficiency_level: "<level>"
    bloom_level: "<level>"
    assessment_method: "<How this is assessed in the lesson>"

  - objective: "<Second objective>"
    proficiency_level: "<level>"
    bloom_level: "<level>"
    assessment_method: "<method>"

cognitive_load:
  new_concepts: <N>
  concepts_list:
    - "<concept 1>"
    - "<concept 2>"
  assessment: "<Why this count is appropriate for the proficiency level>"

differentiation:
  extension_for_advanced: "<Challenge for advanced students>"
  remedial_for_struggling: "<Simplified focus for struggling students>"

teaching_guide:
  key_points:
    - "<point 1>"
    - "<point 2>"
  misconceptions:
    - "<misconception and correction>"
  discussion_prompts:
    - "<prompt 1>"
  teaching_tips:
    - "<tip 1>"
---
```

**Mandatory fields:** All of the above. No field may be omitted.

---

## 5. Component / Pattern Catalog

### Try With AI Format (3 prompts: Reproduce -> Adapt -> Apply)

```markdown
:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

\`\`\`
[Prompt that asks the student to reproduce the lesson's core task
with slightly different inputs]
\`\`\`

**What you are learning:** [1-2 sentences connecting the prompt to the skill being developed]

**Adapt**: Modify the scenario to match your organisation.

\`\`\`
[Prompt that asks the student to apply the concept to their own
organisation's data/context]
\`\`\`

**What you are learning:** [1-2 sentences]

**Apply**: Extend to a new situation the lesson didn't cover directly.

\`\`\`
[Prompt that tests transfer — applying the framework to a novel
scenario that requires judgment beyond the lesson's examples]
\`\`\`

**What you are learning:** [1-2 sentences]
:::
```

### Exercise Format

```markdown
## Exercise: [Title] (Exercise N)

**Type:** [Domain area]
**Time:** [N minutes]
**Plugin command:** [/command-name]
**Goal:** [One sentence — what the student will have when done]

### Step 1 — [Action verb]

[Instructions — what to do, what data to gather]

### Step 2 — [Action verb]

\`\`\`
/command-name
[Prompt template with placeholders]
\`\`\`

**What to evaluate:** [3-5 bullet points teaching students to assess AI output quality]

- Does the output include [specific element]?
- Is the [metric/classification] appropriate given the input?
- Are there [gaps/omissions] the agent missed?
- Would a [role] find this actionable without additional context?

### Step 3 — [Verification/Extension]

[Cross-reference, peer review, or extension task]

**Deliverable:** [Specific artifact the student should have]
```

### Docusaurus Components — Allowed

- `:::note` — supplementary information, keep-this-file reminders
- `:::info` — context that enhances understanding
- `:::tip` — Try With AI sections, plugin setup reminders
- `:::caution` — critical warnings (bottleneck trap, compliance drift)
- Tables (standard markdown)
- Code blocks (triple backtick with optional language hint)
- `<Flashcards />` — JSX tag at bottom of lesson (paired with `.flashcards.yaml` sidecar)

### Docusaurus Components — FORBIDDEN

- **No `import` statements** for `@site/src/components/Flashcards` or `@site/src/components/Quiz` — these DO NOT EXIST as importable modules
- **No `import` statements at all** — lesson files should contain zero import lines
- Flashcards are `.flashcards.yaml` sidecar files processed at build time
- Quizzes are generated via `/quiz-generator` skill, not React components

### Plugin Command Format in Lessons

```markdown
**Worked example.** You want to [action]. You type:

\`\`\`
/command-name
[Natural language prompt with context]
\`\`\`

**What to expect:** [What the output should contain]

| Output Element  | What to Verify          |
| --------------- | ----------------------- |
| **[Element 1]** | [Verification criteria] |
| **[Element 2]** | [Verification criteria] |

**What to evaluate:**

- [Quality criterion 1]
- [Quality criterion 2]
- [Quality criterion 3]
```

### Plugin Setup Reminder (for lessons after L02)

```markdown
:::tip Plugin Setup Reminder
This exercise requires the **Operations** plugin (official) and the
**Operations Intelligence** plugin (custom). If you have not installed them,
follow the instructions in the [Chapter 38 prerequisites](./README.md#prerequisites)
before continuing.
:::
```

### Sidecar File Rules

Every `.md` lesson file gets exactly two sidecar files:

1. `<lesson-slug>.flashcards.yaml` — 8-15 flashcards covering key concepts
2. `<lesson-slug>.summary.md` — 200-400 word executive summary of the lesson

Naming must match exactly: `05-process-documentation-sops-runbooks.md` -> `05-process-documentation-sops-runbooks.flashcards.yaml` + `05-process-documentation-sops-runbooks.summary.md`

### Official Plugin Auto-Skills (CRITICAL)

These three official plugin skills are **trigger-only** — they activate automatically from keyword patterns in natural prompts, NOT from slash commands:

| Auto-Skill             | Trigger Keywords                                          | How to Use in Lessons                                           |
| ---------------------- | --------------------------------------------------------- | --------------------------------------------------------------- |
| `compliance-tracking`  | "compliance", "obligation", "regulatory", "control"       | Prompt naturally: "Map our compliance obligations for..."       |
| `risk-assessment`      | "risk", "risk register", "risk assessment", "mitigation"  | Prompt naturally: "Build a risk register for our operations..." |
| `process-optimization` | "optimize", "improve process", "bottleneck", "efficiency" | Prompt naturally: "Analyze this process for improvement..."     |

**NEVER write** `/compliance-tracking`, `/risk-assessment`, or `/process-optimization` as slash commands in lessons. Students prompt naturally; the auto-skill activates from the keywords.

---

## 6. Cross-Reference Map

### Data/Output Flow Between Lessons

```
L01 (failure modes) ─────────────> Conceptual foundation for all lessons
                                    |
L02 (install + config) ──────────> ops.local.md configuration used by all
                                    |
L03 (vendor portfolio) ──────────> Vendor register
     │                              │
     └──> L04 (contract analysis)   │ L04 feeds obligation data back to L03 vendor profiles
          │                         │
          └──> L07 (compliance) <───┘ Contractual obligations feed compliance map
               │
               └──> L08 (audit) ── L08 uses L07 compliance map for audit evidence

L05 (process docs/SOPs) ─────────> SOP library
     │                              │
     └──> L06 (change management)   │ Change impact references affected SOPs from L05
          │                         │
          └──> L10 (incidents) <────┘ Post-mortem corrective actions may require SOP updates (L05)

L06 (change) ────────────────────> Change log
     │
     └──> L12 (agents: change-tracker monitors L06 change log)

L07 (compliance) ────────────────> Compliance obligation map
     │
     └──> L12 (agents: compliance-monitor tracks L07 obligations)

L09 (risk register) ─────────────> Risk register
     │
     └──> L11 (metrics: risk metrics reference L09 register)

L10 (incidents) ─────────────────> Corrective actions
     │
     └──> L11 (metrics: incident metrics reference L10 data)

L11 (metrics) ───────────────────> Operational dashboard + monthly report
     │
     └──> L13 (intelligence brief: synthesizes L11 metrics + agent outputs)

L12 (agents) ────────────────────> 4 configured agents
     │
     └──> L13 (intelligence brief: agent reports feed the brief)

L13 (intelligence brief) ────────> Operations intelligence report

L14 (capstone) ──────────────────> End-to-end sprint using ALL outputs from L03-L13

L15 (summary) ───────────────────> Quick reference tables for all commands/agents
```

### Exercise Dependency Chain

```
L02: ops.local.md (foundational config — all exercises depend on this)
  └── L03: Vendor register (exercise builds on config)
       └── L04: Contract obligations (adds to vendor profiles)
            └── L07: Compliance map (includes contractual obligations)
                 └── L08: Audit evidence (tests compliance map)
  └── L05: SOP library (exercise builds on config)
       └── L06: Change impact (references SOPs)
  └── L09: Risk register (exercise builds on config + all prior)
  └── L10: Incident post-mortem (standalone exercise, but references SOPs/changes)
  └── L11: Metrics dashboard (aggregates all operational data)
  └── L12: Agent deployment (agents monitor data from L03, L05, L06, L07)
  └── L13: Intelligence brief (synthesizes agents + metrics)
  └── L14: Capstone sprint (all of the above in sequence)
```

---

## 7. Two-Plugin Architecture

### Official Plugin (Anthropic — `knowledge-work-plugins/operations`)

| Type       | Name                   | Function                                                |
| ---------- | ---------------------- | ------------------------------------------------------- |
| Command    | `/vendor-review`       | Vendor evaluation — cost, risk, performance, comparison |
| Command    | `/process-doc`         | Process documentation — RACI, flowcharts, SOPs          |
| Command    | `/change-request`      | Change impact assessment, comms, rollback               |
| Command    | `/capacity-plan`       | Resource capacity planning (not used in this chapter)   |
| Command    | `/status-report`       | Status reports with KPIs, risks, actions                |
| Command    | `/runbook`             | Operational runbook creation and maintenance            |
| Auto-skill | `vendor-management`    | Vendor relationship knowledge                           |
| Auto-skill | `process-optimization` | Process improvement knowledge                           |
| Auto-skill | `change-management`    | Change planning knowledge                               |
| Auto-skill | `risk-assessment`      | Risk identification and scoring                         |
| Auto-skill | `compliance-tracking`  | Compliance obligation tracking                          |
| Auto-skill | `resource-planning`    | Resource allocation knowledge                           |

### Custom Plugin (Panaversity — `operations-intelligence`)

| Type    | Name                | Function                                                                   | Why Custom (Not in Official)                                                         |
| ------- | ------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command | `/audit`            | Audit preparation, evidence packs, mock review, response framework         | Official has no dedicated audit command                                              |
| Command | `/contract`         | Contract obligation extraction, risk flagging, negotiation positions       | Official `/vendor-review` covers vendor eval but not deep contract analysis          |
| Command | `/incident`         | Post-mortem, Five Whys RCA, corrective action tracking                     | Official has no incident management command                                          |
| Command | `/metrics`          | Operational metrics framework, dashboard design, reporting templates       | Official `/status-report` generates reports but doesn't design the metrics framework |
| Agent   | vendor-watchdog     | Weekly vendor monitoring (renewals, SLAs, spend, unapproved payments)      | Persistent automation layer                                                          |
| Agent   | process-health      | Monthly SOP currency, orphan tracking, change/regulation-triggered reviews | Persistent automation layer                                                          |
| Agent   | compliance-monitor  | Weekly obligation review, evidence aging, regulatory change monitoring     | Persistent automation layer                                                          |
| Agent   | change-tracker      | Weekly change pipeline, impact assessment compliance, PIR tracking         | Persistent automation layer                                                          |
| Config  | `local.md.template` | Organisation-specific operations configuration                             | Custom to each org                                                                   |

### Zero-Overlap Principle

Every command in the custom plugin covers functionality NOT present in the official plugin:

- `/audit` = no official equivalent (official has `compliance-tracking` auto-skill, but no audit-specific command)
- `/contract` = no official equivalent (official `/vendor-review` evaluates vendors, doesn't extract contract obligations)
- `/incident` = no official equivalent (official has no incident management)
- `/metrics` = complementary to `/status-report` (official generates reports; custom designs the metrics framework that reports draw from)

---

## 8. Fact Verification Flags

The following statistics from the governing spec require verification before publication. Writers MUST use hedging language (e.g., "research suggests", "often cited estimates indicate") unless verified via WebSearch:

| Claim                                                                                  | Spec Location           | Status   |
| -------------------------------------------------------------------------------------- | ----------------------- | -------- |
| "Typical 200-person company overspends on vendors by 20-30%"                           | Spec line 23            | [VERIFY] |
| "Operations teams spend 70% of their time managing consequences of invisible problems" | Spec line 3 (COO quote) | [VERIFY] |
| "8-10% of spend" addressable savings from vendor rationalisation                       | Spec line 151-152       | [VERIFY] |

**Rule:** Use hedging language in L01 and L03 where these figures appear. If a writer can verify via WebSearch, they may use the figure with citation. Otherwise, use "often-cited industry estimates suggest..." or similar framing.

---

## 9. Binding Design Decisions

These decisions are FINAL. Writers must not deviate:

1. **No `/sop` in custom plugin** — use official `/runbook` for SOP/runbook work
2. **`/metrics` in custom plugin** — complementary to official `/status-report`, not overlapping
3. **Router dissolved** — the spec's `ops-global-router.md` is reference only; universal standards (risk scoring, change classification, compliance status, SOP quality, incident quality) are distributed into each custom skill and agent file
4. **`ops.local.md` config** in custom plugin as `local.md.template`
5. **Plugin name:** `operations-intelligence`
6. **Fact verification required** — 20-30% vendor overspend, 70% reactive time, 8-10% savings are all [VERIFY]; use hedging language
7. **No phantom imports** — zero `import` statements in lesson files
8. **Cowork terminology** — "Cowork" not "Claude in Excel" (per `.claude/rules/cowork-content.md`)
9. **Auto-skills use natural prompts** — `compliance-tracking`, `risk-assessment`, `process-optimization` are NEVER written as `/compliance-tracking` etc.
10. **Every exercise includes 'What to evaluate'** — teaching students to assess AI output quality
