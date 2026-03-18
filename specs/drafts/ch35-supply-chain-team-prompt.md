# Chapter 35: Supply Chain & Procurement — Agent Team Prompt

Create an agent team to build Chapter 35 (Supply Chain & Procurement) for The AI Agent Factory book, including both the Cowork plugin and the book chapter content.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

---

## Source Materials

| Material                          | Path                                                                                                                                            |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Governing spec**                | `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` (1,361 lines)                                      |
| **Skill specs**                   | `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/` (8 product skills + 5 agents + router + README + local.md template) |
| **Chapter output**                | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/`                                |
| **Plugin output**                 | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`                                                    |
| **Reference chapter (primary)**   | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/32-banking-domain-agents/`                                         |
| **Reference chapter (secondary)** | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/30-ai-transformation-ca-cpa-practice/`                             |
| **Reference plugin**              | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/`                                                         |
| **Constitution**                  | `.specify/memory/constitution.md`                                                                                                               |

## Content Identity

Chapter 35 teaches domain experts (procurement managers, CPOs, supply chain analysts) to build an AI-native supply chain intelligence system using Cowork plugins. The chapter covers vendor lifecycle management, invoice reconciliation, supplier risk monitoring, logistics optimization, spend analytics, and persistent procurement agents. The governing insight: **every supply chain problem is an information problem before it is an operational problem.**

The chapter ships TWO deliverables:

1. **A Cowork plugin** (`supply-chain`) with 8 skills + 5 agents in the `agentfactory-business-plugins` repo
2. **15 book lessons** + README in the learn-app docs

## Design Decisions (BINDING — Do Not Deviate)

- **No router skill** — 8 skills with distinct trigger phrases need no routing layer
- **No jurisdiction overlays** — supply chain compliance is too fragmented; `local.md` handles org-specific config
- **3 command renames** to avoid Layer 1 collisions:
  - `/reconcile` → `/invoice-reconcile` (avoids collision with finance/reconciliation)
  - `/communicate` → `/vendor-communicate` (too generic otherwise)
  - `/network-design` → `/supply-network-design` (avoids IT infrastructure confusion)
- **Agents are real** — all 5 agents are deployable in Cowork and schedulable via `/schedule`
- **Fact verification flags**: GEP "60-80% exception reduction" and Samir Saci "10-12 week studies" are `[VERIFY]` — writers must not present these as confirmed facts. Use hedging language ("industry analysts report..." or "practitioners describe...") unless independently verified via WebSearch
- **Plugin follows banking pattern** — `.claude-plugin/plugin.json` + `skills/` + `agents/` + `evals/`

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies.

| Phase | Teammate                 | Model  | Depends On        |
| ----- | ------------------------ | ------ | ----------------- |
| 1     | `architect`              | opus   | —                 |
| 2     | `reference-builder`      | opus   | architect         |
| 3     | `plugin-builder`         | opus   | architect         |
| 3     | `writer-bookends`        | sonnet | reference-builder |
| 3     | `writer-vendor-recon`    | sonnet | reference-builder |
| 3     | `writer-risk-logistics`  | sonnet | reference-builder |
| 3     | `writer-agents-capstone` | sonnet | reference-builder |
| 4     | `quality-reviewer`       | opus   | all Phase 3       |

**Total: 8 teammates across 4 phases.**

Note: `plugin-builder` runs in parallel with Phase 2 and Phase 3 writers (it depends only on architect, not on reference-builder). All chapter writers depend on reference-builder.

---

## PHASE 1: ARCHITECT

Create task: "Phase 1: Architecture spec for Ch 35 Supply Chain"
Depends on: nothing
Spawn 1 teammate: `architect`
Model: opus
Permission mode: plan (lead reviews plan before architect writes)

### Architect Teammate Prompt

"You are the `architect` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` — FULL governing spec (1,361 lines). You are the ONLY teammate who reads this entire document.
2. ALL files in `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/` — 8 product skills + 5 agents + README + local.md template
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/32-banking-domain-agents/README.md` — reference chapter README format
4. Read ONE skill-based lesson from Banking ch 32 (lesson 03 or 04) — reference lesson format (YAML frontmatter, section structure, Try With AI, sidecar patterns)
5. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/` — reference plugin structure (`.claude-plugin/plugin.json`, `skills/`, `commands/`, `evals/`)
6. `.specify/memory/constitution.md` — project constitution

DELIVERABLES — write ALL of these to `specs/drafts/ch35-supply-chain/`:

### 1. `architecture-spec.md` — Master Architecture Spec

Directory skeleton for BOTH deliverables:

**Chapter** (`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/`):

```
35-supply-chain-procurement/
├── README.md
├── 01-three-structural-failures.md
├── 01-three-structural-failures.flashcards.yaml
├── 01-three-structural-failures.summary.md
├── 02-plugin-architecture-installation.md
├── 02-plugin-architecture-installation.flashcards.yaml
├── 02-plugin-architecture-installation.summary.md
├── 03-vendor-classification-kraljic.md          ← Reference Builder writes this
├── 03-vendor-classification-kraljic.flashcards.yaml
├── 03-vendor-classification-kraljic.summary.md
├── 04-six-dimension-vendor-assessment.md
├── ... (continue for all 15 lessons, each with .flashcards.yaml + .summary.md)
├── 14-capstone-end-to-end-procurement.md
├── 14-capstone-end-to-end-procurement.flashcards.yaml
├── 14-capstone-end-to-end-procurement.summary.md
├── 15-chapter-summary-quick-reference.md
├── 15-chapter-summary-quick-reference.flashcards.yaml
└── 15-chapter-summary-quick-reference.summary.md
```

**Plugin** (`/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`):

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

Source-to-output mapping table:

- Which spec lines → which lesson files
- Which skill spec files → which plugin skill files
- Exercise-to-lesson assignment

YAML frontmatter template for lessons (derived from Banking ch 32 L03 format):

- All required fields: slug, sidebar_position, title, description, keywords, chapter (35), lesson, duration_minutes
- Skills metadata with CEFR/Bloom's/DigComp
- Learning objectives with assessment methods
- Cognitive load assessment
- Differentiation (extension + remedial)
- teaching_guide (key_points, misconceptions, discussion_prompts, teaching_tips)

Component/pattern catalog:

- Try With AI format (3 prompts: Reproduce → Adapt → Apply)
- Exercise format (from spec exercises — Step 1-5 structure with plugin commands)
- Docusaurus components allowed: `:::note`, `:::info`, `:::tip`, tables, code blocks
- Docusaurus components FORBIDDEN: No `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz` — these DO NOT EXIST

### 2. `shared-brief.md` — Shared Writer's Brief

- Content identity: who this chapter is for, tone (professional procurement, not academic)
- The 3 renames and why (collision avoidance)
- Cross-reference map (which lessons reference which)
- Exercise dependency chain: Ex 6 references Ex 2 results, Ex 8 references Ex 1 results
- Sidecar file rules: every `.md` lesson gets `.flashcards.yaml` + `.summary.md`
- Fact verification flags: GEP and Samir Saci claims must use hedging language
- Cowork terminology: 'Cowork' not 'Claude in Excel' (per `.claude/rules/cowork-content.md`)

### 3. Per-Writer Briefs (one file each)

- `brief-writer-bookends.md` — README + L01 + L02 + L15
- `brief-writer-vendor-recon.md` — L04 + L05 + L06
- `brief-writer-risk-logistics.md` — L07 + L08 + L09 + L10
- `brief-writer-agents-capstone.md` — L11 + L12 + L13 + L14
- `brief-plugin-builder.md` — Full plugin scope

Each brief contains:

- Exact file paths to create
- Spec line ranges to read (NOT the full 1,361 lines)
- Content-specific notes
- Exercise assignments with spec exercise line ranges
- Exit criteria

### 4. Chapter README

Write `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/README.md` following the Banking ch 32 README format exactly:

- YAML frontmatter (slug, sidebar_position: 35, title, description, chapter_number: 35, part_number: 3, version: 1.0, status: draft)
- Chapter contract (5 questions students can answer by end)
- Lesson table (15 rows: lesson number, title, duration, outcome)
- Prerequisites (Cowork access, plugin installation, working folder)
- Total chapter duration

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — architecture-spec.md, shared-brief.md, 5 writer briefs, README.md'"

---

## PHASE 2: REFERENCE BUILDER

Create task: "Phase 2: Gold-standard reference lesson (L03)"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `reference-builder`
Model: opus

### Reference Builder Teammate Prompt

"You are the `reference-builder` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch35-supply-chain/architecture-spec.md` — the master spec from architect
2. `specs/drafts/ch35-supply-chain/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/32-banking-domain-agents/03-ifrs9-staging-ecl.md` — Banking L03 as format reference (YAML frontmatter, section structure, Try With AI, all patterns)
4. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 65-212 — Part One: Vendor Management (your source content)
5. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/vendor-assessment.md` — the `/vendor-assess` skill spec

DELIVERABLE: Write ONE gold-standard lesson that ALL other writers will match:

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md`

This lesson teaches the Kraljic vendor classification framework (Strategic/Tactical/Commodity/Bottleneck). It must demonstrate EVERY pattern:

- [ ] Full YAML frontmatter (all fields from architecture-spec.md template, including teaching_guide)
- [ ] Narrative opening connecting to real business problem (the KIFTL scenario from spec)
- [ ] Core concept with comparison table (4-tier classification)
- [ ] Worked example (classifying a vendor using the framework)
- [ ] `/vendor-assess` skill interaction (show the command, show sample output)
- [ ] Exercise: students classify their own vendors using the framework
- [ ] Try With AI section (3 prompts: Reproduce → Adapt → Apply)
- [ ] `:::note` and `:::info` blocks used appropriately
- [ ] NO `import` statements for Flashcards or Quiz components (these DO NOT EXIST as React components)

Also write the sidecar files:

- `03-vendor-classification-kraljic.flashcards.yaml`
- `03-vendor-classification-kraljic.summary.md`

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — 03-vendor-classification-kraljic.md + .flashcards.yaml + .summary.md'"

---

## PHASE 3: PLUGIN BUILDER + CHAPTER WRITERS (parallel)

After Phase 2 completes (reference lesson exists), spawn ALL Phase 3 teammates SIMULTANEOUSLY. The plugin-builder can start after Phase 1 (does not need the reference lesson). Chapter writers need the reference lesson.

### 3A: Plugin Builder

Create task: "Phase 3A: Build supply-chain plugin"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `plugin-builder`
Model: opus

#### Plugin Builder Teammate Prompt

"You are the `plugin-builder` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

You build the Cowork plugin. You do NOT write book lessons.

REFERENCE DOCUMENTATION — Read these FIRST:

1. https://code.claude.com/docs/en/plugins-reference — Official plugin format, plugin.json schema, directory structure, component types
2. https://agentskills.io/specification — SKILL.md format specification (YAML frontmatter schema, name constraints, description field, progressive disclosure)
3. https://code.claude.com/docs/en/sub-agents — Agent definition format (frontmatter fields: name, description, tools, model, memory, background, skills)

READ IN ORDER:

1. `specs/drafts/ch35-supply-chain/architecture-spec.md` — master spec with plugin directory skeleton
2. `specs/drafts/ch35-supply-chain/brief-plugin-builder.md` — your specific brief
3. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/.claude-plugin/plugin.json` — reference plugin.json format
4. Read 2-3 banking skill SKILL.md files from `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/skills/` — reference skill format
5. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/evals/` — reference eval format (cases.yaml + run.py)
6. ALL files in `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/` — your source material (8 product skills + 5 agents)

DELIVERABLES — write to `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`:

### 1. Plugin Manifest

`.claude-plugin/plugin.json`:

```json
{
  \"name\": \"supply-chain\",
  \"version\": \"1.0.0\",
  \"description\": \"Supply chain and procurement intelligence — vendor management, invoice reconciliation, supplier risk, logistics optimization, spend analytics, and persistent procurement agents\",
  \"author\": {
    \"name\": \"Panaversity\",
    \"url\": \"https://github.com/panaversity\"
  },
  \"homepage\": \"https://agentfactory.panaversity.org\",
  \"repository\": \"https://github.com/panaversity/agentfactory-business-plugins\",
  \"license\": \"Apache-2.0\",
  \"keywords\": [\"supply-chain\", \"procurement\", \"vendor-management\", \"invoice-reconciliation\", \"logistics\", \"spend-analysis\", \"supplier-risk\"]
}
```

### 2. Skills (8 total, NO router)

Convert each spec skill file into proper SKILL.md format per https://agentskills.io/specification:

| Spec File                            | Plugin Skill Dir                         | Command                  | Notes                          |
| ------------------------------------ | ---------------------------------------- | ------------------------ | ------------------------------ |
| `products/vendor-assessment.md`      | `skills/vendor-assessment/SKILL.md`      | `/vendor-assess`         | Keep as-is                     |
| `products/supplier-risk.md`          | `skills/supplier-risk/SKILL.md`          | `/supplier-risk`         | Keep as-is                     |
| `products/invoice-reconciliation.md` | `skills/invoice-reconciliation/SKILL.md` | `/invoice-reconcile`     | RENAMED from `/reconcile`      |
| `products/vendor-communication.md`   | `skills/vendor-communication/SKILL.md`   | `/vendor-communicate`    | RENAMED from `/communicate`    |
| `products/logistics-brief.md`        | `skills/logistics-brief/SKILL.md`        | `/logistics-brief`       | Keep as-is                     |
| `products/spend-analysis.md`         | `skills/spend-analysis/SKILL.md`         | `/spend-analysis`        | Keep as-is                     |
| `products/network-design.md`         | `skills/network-design/SKILL.md`         | `/supply-network-design` | RENAMED from `/network-design` |
| `products/supply-chain-brief.md`     | `skills/supply-chain-brief/SKILL.md`     | `/supply-chain-brief`    | Keep as-is                     |

Each SKILL.md must have:

- YAML frontmatter: `name` (matching directory, lowercase+hyphens), `description` (max 1024 chars, include trigger phrases), `license: Apache-2.0`, `metadata: { author: panaversity, version: \"1.0\" }`
- Body: step-by-step workflow instructions from spec, output format templates, never-do rules
- Distribute the 7 universal non-negotiable rules from the spec's router into the relevant skills (e.g., 'never approve invoice without PO match' → invoice-reconciliation)
- Keep under 500 lines per SKILL.md (move detailed reference to `references/` if needed)

### 3. Agents (5 total)

Convert each spec agent file into proper agent.md format per https://code.claude.com/docs/en/sub-agents:

| Spec File                                | Plugin Agent File                        | Purpose                                       |
| ---------------------------------------- | ---------------------------------------- | --------------------------------------------- |
| `agents/vendor-health-monitor.md`        | `agents/vendor-health-monitor.md`        | Continuous Tier 1/4 vendor surveillance       |
| `agents/invoice-reconciliation-agent.md` | `agents/invoice-reconciliation-agent.md` | AP inbox → 3-way match automation             |
| `agents/spend-intelligence-agent.md`     | `agents/spend-intelligence-agent.md`     | Monthly category analytics + savings pipeline |
| `agents/procurement-calendar-agent.md`   | `agents/procurement-calendar-agent.md`   | Contract renewals, certifications, deadlines  |
| `agents/logistics-intelligence-agent.md` | `agents/logistics-intelligence-agent.md` | Carrier performance + disruption alerts       |

Each agent.md must have YAML frontmatter:

- `name`: lowercase+hyphens identifier
- `description`: when Claude should invoke this agent
- `tools`: appropriate tool list (Read, Grep, Glob, Bash, WebSearch, WebFetch as needed)
- `model`: inherit
- `background`: true (these are persistent monitoring agents)
- `skills`: list relevant plugin skills this agent should have preloaded

Body: detailed system prompt from spec (monitoring schedule, alert types, escalation rules, never-do rules).

### 4. Evals

Create `evals/cases.yaml` with golden test cases:

- At least 2 routing cases per skill (16 minimum)
- At least 2 negative cases (queries that should NOT match supply chain)
- Format: match banking's `evals/cases.yaml` structure

Create `evals/run.py`:

- Match banking's eval runner pattern
- Support `--list` flag to show all cases
- Support `--case <name>` to run single case

### 5. README.md

Plugin README with:

- Quick Start (install instructions)
- Skill inventory table (command → purpose)
- Agent inventory table (name → purpose → schedule)
- MCP integrations required (ERP, AP, TMS, financial databases, web search)
- Configuration (`supply-chain.local.md.template` contents for reference)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'PLUGIN-BUILDER DONE — plugin.json + 8 skills + 5 agents + evals + README'"

---

### 3B: Writer — Bookends

Create task: "Phase 3B: Bookend lessons (L01, L02, L15)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-bookends`
Model: sonnet

#### Writer Bookends Teammate Prompt

"You are the `writer-bookends` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch35-supply-chain/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch35-supply-chain/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch35-supply-chain/brief-writer-bookends.md` (YOUR specific brief with scope)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 1-64 AND 1309-1361 (read ONLY those lines — intro, 3 failures, plugin architecture, summary, quick reference)

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports (no `import` statements for Flashcards, Quiz, or any `@site/src/components/`)
- Cowork terminology: say 'Cowork' not 'Claude in Excel' (unless referencing Ch 28's product specifically)
- Fact verification: GEP and Samir Saci claims use hedging language ('industry analysts report...') unless you independently verify via WebSearch
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `01-three-structural-failures.md` — The Reconciliation Swamp, Vendor Blind Spot, Static Optimisation Trap. Narrative opening with CPO quote. No exercises. Duration: ~30 min.
2. `02-plugin-architecture-installation.md` — Install supply-chain plugin, configure `supply-chain.local.md`, connect MCP integrations. Setup/orientation lesson. Duration: ~25 min.
3. `15-chapter-summary-quick-reference.md` — Chapter summary (connected supply chain insight), quick reference tables (all 8 commands + 5 agents), key references. Duration: ~20 min.

Plus 3 `.flashcards.yaml` files and 3 `.summary.md` files = 9 files total.

When finished, message the team lead: 'WRITER BOOKENDS DONE — L01 + L02 + L15 (9 files)'"

---

### 3C: Writer — Vendor & Reconciliation

Create task: "Phase 3C: Vendor + Invoice lessons (L04, L05, L06)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-vendor-recon`
Model: sonnet

#### Writer Vendor-Recon Teammate Prompt

"You are the `writer-vendor-recon` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch35-supply-chain/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch35-supply-chain/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch35-supply-chain/brief-writer-vendor-recon.md` (YOUR specific brief with scope and line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 65-359 (Parts 1-2: vendor management + invoice reconciliation)
6. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 778-923 AND 1149-1194 (Exercises 1, 2, and 6)
7. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/vendor-assessment.md` — vendor-assess skill spec
8. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/invoice-reconciliation.md` — invoice-reconcile skill spec

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- The command is `/invoice-reconcile` NOT `/reconcile` (renamed to avoid Layer 1 collision)
- Exercise format: Step 1-5 structure with explicit plugin commands, deliverable at end
- Fact verification: GEP claims use hedging language
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `04-six-dimension-vendor-assessment.md` — Six-dimension assessment framework, `/vendor-assess` workflow deep dive, KIFTL worked example. **Exercise 1**: Classify 10 vendors + run full assessment (75 min). Duration: ~75 min.

2. `05-three-way-match-rule-design.md` — Three-way match fundamentals (invoice↔PO↔GR), tolerance rules, category-specific thresholds. **Exercise 6**: Design and validate tolerance rules for your org (45 min). Duration: ~60 min.

3. `06-invoice-reconciliation-at-scale.md` — Four-stage reconciliation workflow, `/invoice-reconcile` at scale, invoice-reconciliation-agent introduction, exception pattern analysis. **Exercise 2**: Process 10 invoices with 3-way match + draft dispute communications (60 min). Cross-reference: Exercise 6's tolerance rules apply here. Duration: ~75 min.

Plus 3 `.flashcards.yaml` files and 3 `.summary.md` files = 9 files total.

When finished, message the team lead: 'WRITER VENDOR-RECON DONE — L04 + L05 + L06 (9 files)'"

---

### 3D: Writer — Risk, Logistics, Network, Spend

Create task: "Phase 3D: Risk + Logistics + Spend lessons (L07, L08, L09, L10)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-risk-logistics`
Model: sonnet

#### Writer Risk-Logistics Teammate Prompt

"You are the `writer-risk-logistics` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch35-supply-chain/architecture-spec.md` (master spec)
2. `specs/drafts/ch35-supply-chain/shared-brief.md` (shared context)
3. `specs/drafts/ch35-supply-chain/brief-writer-risk-logistics.md` (YOUR specific brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` (reference lesson)
5. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 360-661 (Parts 3-5: supplier risk + logistics + spend analytics)
6. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 924-1148 (Exercises 3, 4, and 5)
7. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/supplier-risk.md` — supplier-risk skill spec
8. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/logistics-brief.md` — logistics-brief skill spec
9. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/network-design.md` — network-design skill spec
10. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/spend-analysis.md` — spend-analysis skill spec

RULES:

- Match the reference lesson's quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- The command is `/supply-network-design` NOT `/network-design` (renamed)
- Samir Saci claims use hedging language unless verified
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `07-supplier-risk-five-dimensions.md` — Five risk dimensions (financial, operational, compliance, geopolitical, Tier 2), `/supplier-risk` workflow, vendor-health-monitor agent introduction. **Exercise 3**: Build supplier risk dashboard for top 10 vendors + configure vendor-health-monitor agent (75 min). Duration: ~75 min.

2. `08-logistics-carrier-performance.md` — Four logistics dimensions (route, carrier, network, sustainability), `/logistics-brief` workflow (carrier scorecard, lane optimization, expedited freight root cause, carbon assessment), logistics-intelligence-agent introduction. **Exercise 4**: Identify top 3 logistics cost reductions (60 min). Duration: ~60 min.

3. `09-supply-network-design-scenarios.md` — Network design triggers, `/supply-network-design` workflow, scenario comparison (baseline + alternatives), sensitivity analysis. No exercise in this lesson. Duration: ~60 min.

4. `10-spend-analytics-consolidation.md` — Category spend mapping, `/spend-analysis` workflow (4 analysis types), spend-intelligence-agent introduction, market benchmarking. **Exercise 5**: Build £50k+ consolidation business case (75 min). Duration: ~75 min.

Plus 4 `.flashcards.yaml` files and 4 `.summary.md` files = 12 files total.

When finished, message the team lead: 'WRITER RISK-LOGISTICS DONE — L07 + L08 + L09 + L10 (12 files)'"

---

### 3E: Writer — Agents, Communications, Exit, Capstone

Create task: "Phase 3E: Agents + Comms + Exit + Capstone lessons (L11, L12, L13, L14)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-agents-capstone`
Model: sonnet

#### Writer Agents-Capstone Teammate Prompt

"You are the `writer-agents-capstone` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch35-supply-chain/architecture-spec.md` (master spec)
2. `specs/drafts/ch35-supply-chain/shared-brief.md` (shared context)
3. `specs/drafts/ch35-supply-chain/brief-writer-agents-capstone.md` (YOUR specific brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` (reference lesson)
5. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 662-771 (Part 6: Procurement Intelligence Agents — all 5 agent descriptions)
6. `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md` lines 1195-1308 (Exercises 7 and 8)
7. ALL files in `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/agents/` — all 5 agent spec files
8. `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/vendor-communication.md` — vendor-communicate skill spec

RULES:

- Match the reference lesson's quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- The command is `/vendor-communicate` NOT `/communicate` (renamed)
- L12 must teach `/schedule` for agent automation — agents are REAL deployable components in Cowork
- L14 capstone must reference skills and exercises from ALL prior lessons (L03-L13)
- Exercise 8 references Exercise 1 results (vendor classification) — make this cross-reference explicit
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `11-vendor-communications-disputes.md` — Five communication types (dispute, CAR, non-renewal, emergency assurance, exit), `/vendor-communicate` workflow, professional tone calibration. No exercise. Duration: ~45 min.

2. `12-persistent-agents-schedule.md` — Deploy all 5 persistent agents, configure monitoring parameters, use `/schedule` to automate recurring intelligence gathering, procurement-calendar-agent for deadline management. **Exercise 7**: Build weekly CPO supply chain intelligence dashboard (60 min). This is the orchestration lesson — students wire up the 5 agents as a continuous intelligence system. Duration: ~60 min.

3. `13-vendor-exit-protocol.md` — Vendor exit planning under pressure, emergency sourcing, communication plans, post-mortem. **Exercise 8**: Complete exit protocol for highest-risk Bottleneck vendor from Exercise 1 (45 min). Duration: ~60 min.

4. `14-capstone-end-to-end-procurement.md` — Full procurement cycle: new vendor onboard → classify → assess → monitor → reconcile invoices → optimize logistics → analyze spend → handle crisis → exit. Uses ALL 8 skills + all 5 agents. Scenario-based with interconnected steps. Duration: ~90 min.

Plus 4 `.flashcards.yaml` files and 4 `.summary.md` files = 12 files total.

When finished, message the team lead: 'WRITER AGENTS-CAPSTONE DONE — L11 + L12 + L13 + L14 (12 files)'"

---

## PHASE 4: QUALITY REVIEWER

Create task: "Phase 4: Quality review of all Chapter 35 output"
Depends on: ALL Phase 3 tasks (plugin-builder + all 4 writers)
Spawn 1 teammate: `quality-reviewer`
Model: opus

### Quality Reviewer Teammate Prompt

"You are the `quality-reviewer` teammate for Chapter 35: Supply Chain & Procurement.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch35-supply-chain/architecture-spec.md` — master spec (directory skeleton, YAML template)
2. `specs/drafts/ch35-supply-chain/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` — reference lesson (quality benchmark)
4. ALL lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/` — review every .md file
5. ALL plugin files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — review every skill and agent

REVIEW CHECKLIST:

**Chapter lessons (universal checks):**

- [ ] Every lesson has complete YAML frontmatter (all required fields)
- [ ] Every lesson has teaching_guide section in frontmatter
- [ ] Keywords list has 8-20 terms per lesson
- [ ] Try With AI section has 3 prompts (Reproduce → Adapt → Apply)
- [ ] NO `import` statements for any `@site/src/components/` (phantom import check)
- [ ] Cowork terminology correct ('Cowork' not 'Claude in Excel')
- [ ] Exercise format follows Step 1-5 structure with deliverable
- [ ] Cross-references are accurate (Ex 6→Ex 2, Ex 8→Ex 1)
- [ ] Duration is reasonable for content depth
- [ ] Every .md lesson has matching .flashcards.yaml + .summary.md sidecar files
- [ ] Sidebar positions are sequential (1-15)
- [ ] Slugs follow pattern: `/Business-Domain-Agent-Workflows/supply-chain-procurement/[lesson-slug]`

**Plugin (technical checks):**

- [ ] plugin.json is valid JSON with all required fields
- [ ] Every SKILL.md has valid YAML frontmatter (name matches directory, description present)
- [ ] Skill names are lowercase+hyphens only, no consecutive hyphens
- [ ] Commands use renamed versions: `/invoice-reconcile`, `/vendor-communicate`, `/supply-network-design`
- [ ] Agent .md files have required frontmatter (name, description, tools)
- [ ] Agent files set `background: true` for persistent monitoring agents
- [ ] Universal non-negotiable rules are distributed across relevant skills (not in a router)
- [ ] evals/cases.yaml has 16+ test cases
- [ ] No skills reference a router (there is no router in this plugin)

**Content quality:**

- [ ] Voice is consistent across all lessons (professional procurement, not academic)
- [ ] Cognitive load assessment is reasonable per lesson
- [ ] GEP and Samir Saci claims use hedging language (not stated as verified facts)
- [ ] Lesson progression builds logically (vendor → invoice → risk → logistics → spend → agents → exit → capstone)

DELIVERABLE: Write quality report to `specs/drafts/ch35-supply-chain/quality-report.md`:

```
## Quality Report: Chapter 35 Supply Chain & Procurement

### Overall Score: [PASS/CONDITIONAL PASS/FAIL]

### Per-Writer Summary
| Writer | Files | Issues | Verdict |
|---|---|---|---|
| reference-builder | 3 | [N] | [PASS/FAIL] |
| writer-bookends | 9 | [N] | [PASS/FAIL] |
| writer-vendor-recon | 9 | [N] | [PASS/FAIL] |
| writer-risk-logistics | 12 | [N] | [PASS/FAIL] |
| writer-agents-capstone | 12 | [N] | [PASS/FAIL] |
| plugin-builder | ~20 | [N] | [PASS/FAIL] |

### Issues List
[Numbered list of all issues found, grouped by severity: Critical / Warning / Suggestion]
```

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md written. Overall: [PASS/FAIL]'"

---

## Lead Coordination Rules

1. **Create the team** with TeamCreate before spawning any teammates
2. **Create ALL tasks upfront** with correct dependencies:
   - Phase 1 (architect): no dependencies
   - Phase 2 (reference-builder): depends on Phase 1
   - Phase 3A (plugin-builder): depends on Phase 1 (NOT Phase 2)
   - Phase 3B-3E (chapter writers): depend on Phase 2
   - Phase 4 (quality-reviewer): depends on ALL Phase 3 tasks
3. **Enforce phase ordering** — do NOT spawn Phase 2 until architect signals done
4. **Do NOT write content yourself** — you coordinate, you do not write
5. **Wait for architect's plan** — architect uses plan mode, review the directory skeleton before approving
6. **Spawn plugin-builder and reference-builder after architect completes** — plugin-builder can run in parallel with Phase 2
7. **Spawn ALL chapter writers simultaneously** after reference-builder completes
8. **Monitor progress** — if a teammate appears stuck (no message after extended time), send a check-in message
9. **If a teammate fails**, diagnose the issue and either message them to retry or spawn a replacement
10. **After quality reviewer completes**:
    - If PASS: proceed to verification
    - If CONDITIONAL PASS: fix minor issues yourself or message relevant writer
    - If FAIL: message the failing writer(s) with specific issues, wait for fixes, re-run quality review
11. **Post-quality structural verification**:
    - `ls` the chapter output directory — confirm 46+ files (15 lessons × 3 files each + README)
    - `ls` the plugin output directory — confirm 8 skill dirs + 5 agent files + plugin.json + evals + README
    - Grep for phantom imports: `grep -r "import.*@site/src/components" <chapter-dir>` — must return nothing
    - Spot-check YAML frontmatter from 3 random lessons — confirm all required fields present
    - Verify command renames: grep for `/reconcile ` (without `invoice-`) — must return nothing in plugin skills
12. **Cleanup**: When all verification passes, shut down all teammates and delete the team
13. **Final message**: Report to user with file counts, quality score, and any notes

## Model Preferences

| Teammate               | Model  | Rationale                                                 |
| ---------------------- | ------ | --------------------------------------------------------- |
| architect              | opus   | Reads full 1,361-line spec, produces binding architecture |
| reference-builder      | opus   | Sets quality bar for all writers                          |
| plugin-builder         | opus   | Technical precision for skill/agent format compliance     |
| writer-bookends        | sonnet | Lighter content (intro, setup, summary)                   |
| writer-vendor-recon    | sonnet | Standard lesson writing                                   |
| writer-risk-logistics  | sonnet | Standard lesson writing                                   |
| writer-agents-capstone | sonnet | Standard lesson writing                                   |
| quality-reviewer       | opus   | Needs judgment to evaluate cross-cutting quality          |

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 2 before Phase 1 completes
- Do NOT spawn Phase 3 chapter writers before Phase 2 completes (plugin-builder CAN start after Phase 1)
- Do NOT spawn quality reviewer before ALL Phase 3 teammates complete
- Do NOT let writer teammates read the full 1,361-line source draft (only architect reads it all)
- Do NOT skip quality review or structural verification
- Do NOT approve architect's plan without reviewing the directory structure and YAML template
- Do NOT commit to git until all verification passes and user approves
