# Chapter 40: Intrapreneurship & Innovation Agents — Agent Team Prompt

Create an agent team to build Chapter 40 (Intrapreneurship & Innovation Agents) for The AI Agent Factory book, including both the Cowork plugin and the book chapter content.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

---

## Source Materials

| Material                        | Path                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Governing spec**              | `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` (2,045 lines)                                       |
| **Skill specs**                 | `specs/drafts/chap29_innovation/innovation-skills/` (10 product skills + 4 agents + router + README + local.md template) |
| **Chapter output**              | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/`    |
| **Plugin output**               | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/innovation/`                               |
| **Reference chapter (primary)** | `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/`         |
| **Reference plugin**            | `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`                             |
| **Constitution**                | `.specify/memory/constitution.md`                                                                                        |

## Content Identity

Chapter 40 teaches entrepreneurs and intrapreneurs to build an AI-accelerated innovation system using the DLA Stack — Design Thinking, Lean Startup, and Agile — powered by Cowork plugins. The chapter covers customer discovery, ideation, assumption mapping, MVP scoping, validated learning, Business Model Canvas design, financial modelling, competitive intelligence, go-to-market strategy, investor pitch narrative, and innovation sprint management. The governing insight: **the difference between a great idea and a funded company is the speed and rigour with which the idea was tested, refined, and communicated.**

A continuous AP automation SaaS worked example runs through the entire chapter, demonstrating every methodology from customer interview to investor pitch.

The chapter ships TWO deliverables:

1. **A Cowork plugin** (`innovation`) with 10 skills + 4 agents in the `agentfactory-business-plugins` repo
2. **16 book lessons** + README in the learn-app docs

## Design Decisions (BINDING — Do Not Deviate)

- **16 lessons** (not 15): L01-L14 content + L15 capstone + L16 summary. The spec is the richest in Part 3.
- **No router skill** — per plugin validation checklist ("we don't use routers"). Each skill self-activates via trigger phrases in description. The spec's router logic (DLA progression warnings, stage-aware calibration, assumption tracking, financial reasoning standards, pitch quality standards) is DISTRIBUTED into each relevant skill's body.
- **No command renames** — collision check against knowledge-work-plugins found no name collisions. All 10 commands kept as-is: `/idea`, `/discovery`, `/hypothesis`, `/canvas`, `/financials`, `/pitch`, `/sprint`, `/market`, `/gtm`, `/validate`.
- **Order: Market → GTM → Pitch** — students have competitive intelligence and market sizing BEFORE writing the pitch deck. This reorders the spec's Parts 5/7/8.
- **Discovery before ideation** — L03 teaches customer discovery, L04 teaches ideation. This follows DLA Stack methodology order (understand problem before generating solutions). The spec's Exercise 2 (discovery) maps to L03, Exercise 1 (ideas) maps to L04.
- **Agents get their own lesson** (L14) — complex scheduling (Monday briefs, pre-pitch 48hr rituals, trigger-based canvas updates) deserves dedicated treatment, following Ch 35's pattern.
- **Plugin follows supply-chain precedent** — `.claude-plugin/plugin.json` + `skills/` + `agents/` + `evals/`
- **Fact verification flags**: All URLs in the Key References section (`nicolomantini.com`, `ideou.com`, `cloud.google.com`, `insightplatforms.com`) are `[VERIFY]` — writers must independently verify via WebSearch or use hedging language. Financial figures in the AP automation example are illustrative and need no verification.

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies.

| Phase | Teammate                  | Model  | Depends On        |
| ----- | ------------------------- | ------ | ----------------- |
| 1     | `architect`               | opus   | —                 |
| 2     | `reference-builder`       | opus   | architect         |
| 3     | `plugin-builder`          | opus   | architect         |
| 3     | `writer-bookends`         | sonnet | reference-builder |
| 3     | `writer-design-lean`      | sonnet | reference-builder |
| 3     | `writer-business-model`   | sonnet | reference-builder |
| 3     | `writer-pitch-agents-cap` | sonnet | reference-builder |
| 4     | `quality-reviewer`        | opus   | all Phase 3       |

**Total: 8 teammates across 4 phases.**

Note: `plugin-builder` runs in parallel with Phase 2 and Phase 3 writers (it depends only on architect, not on reference-builder). All chapter writers depend on reference-builder.

---

## PHASE 1: ARCHITECT

Create task: "Phase 1: Architecture spec for Ch 40 Innovation"
Depends on: nothing
Spawn 1 teammate: `architect`
Model: opus
Permission mode: plan (lead reviews plan before architect writes)

### Architect Teammate Prompt

"You are the `architect` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` — FULL governing spec (2,045 lines). You are the ONLY teammate who reads this entire document.
2. ALL files in `specs/drafts/chap29_innovation/innovation-skills/` — 10 product skills + 4 agents + README + router + local.md template
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/README.md` — reference chapter README format
4. Read ONE skill-based lesson from Ch 35 (lesson 03 or 04) — reference lesson format (YAML frontmatter, section structure, Try With AI, sidecar patterns)
5. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — reference plugin structure (`.claude-plugin/plugin.json`, `skills/`, `agents/`, `evals/`)
6. `.specify/memory/constitution.md` — project constitution

DELIVERABLES — write ALL of these to `specs/drafts/ch40-innovation/`:

### 1. `architecture-spec.md` — Master Architecture Spec

Directory skeleton for BOTH deliverables:

**Chapter** (`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/`):

```
40-intrapreneurship-innovation-agents/
├── README.md
├── 01-the-innovation-os.md
├── 01-the-innovation-os.flashcards.yaml
├── 01-the-innovation-os.summary.md
├── 02-plugin-architecture-installation.md
├── 02-plugin-architecture-installation.flashcards.yaml
├── 02-plugin-architecture-installation.summary.md
├── 03-customer-discovery-problem-statement.md          ← Reference Builder writes this
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

**Plugin** (`/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/innovation/`):

```
innovation/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── idea/
│   │   └── SKILL.md
│   ├── discovery/
│   │   └── SKILL.md
│   ├── hypothesis/
│   │   └── SKILL.md
│   ├── canvas/
│   │   └── SKILL.md
│   ├── financials/
│   │   └── SKILL.md
│   ├── pitch/
│   │   └── SKILL.md
│   ├── sprint/
│   │   └── SKILL.md
│   ├── market/
│   │   └── SKILL.md
│   ├── gtm/
│   │   └── SKILL.md
│   └── validate/
│       └── SKILL.md
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

Source-to-output mapping table:

| Spec Lines | Topic                            | Output Lesson  |
| ---------- | -------------------------------- | -------------- |
| 1-137      | Introduction, DLA Stack, Config  | L01, L02       |
| 139-431    | Part 1: Design Thinking          | L03, L04       |
| 432-641    | Part 2: Lean Startup             | L05, L06, L07  |
| 643-761    | Part 3: Business Model Canvas    | L08            |
| 763-877    | Part 4: Financial Model          | L09            |
| 1178-1222  | Part 7: Market Research          | L10            |
| 1226-1349  | Part 8: GTM Strategy             | L11            |
| 858-1069   | Part 5: Investor Deck            | L12            |
| 1073-1174  | Part 6: Agile Sprint             | L13            |
| 1354-1417  | Part 9: Four Innovation Agents   | L14            |
| 1820-1874  | Exercise 8: innov.local.md build | L15 (capstone) |
| 1878-1950  | Summary + Quick Reference        | L16            |

Exercise-to-lesson assignment:

| Spec Exercise | Topic                  | Spec Lines | Lesson |
| ------------- | ---------------------- | ---------- | ------ |
| Ex 2          | Customer Discovery     | 1489-1531  | L03    |
| Ex 1          | Idea Generation Sprint | 1419-1487  | L04    |
| Ex 3 (part 1) | Hypothesis Stress-Test | 1533-1573  | L05    |
| Ex 3 (part 2) | MVP Scoping            | 1573-1583  | L06    |
| Ex 4          | BMC Build              | 1587-1641  | L08    |
| Ex 5          | Unit Economics         | 1644-1703  | L09    |
| Ex 7          | GTM Strategy Sprint    | 1764-1817  | L11    |
| Ex 6          | Investor Pitch Deck    | 1707-1761  | L12    |
| Ex 8          | Build innov.local.md   | 1820-1874  | L15    |

YAML frontmatter template for lessons (derived from Ch 35 reference format):

- All required fields: slug, sidebar_position, title, description, keywords, chapter (40), lesson, duration_minutes
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

- Content identity: who this chapter is for (entrepreneurs + intrapreneurs), tone (practical business methodology, not academic)
- The DLA Stack progression and why lesson ordering matters (Design Thinking → Lean Startup → Agile)
- The AP automation worked example as the chapter through-line — every lesson builds on the same venture
- Cross-reference map (which lessons reference which — L07 BML references L05/L06 assumptions; L12 pitch needs L09/L10 data; L15 capstone integrates all)
- Exercise dependency chain: Ex8 (L15) references all prior exercises
- Sidecar file rules: every `.md` lesson gets `.flashcards.yaml` + `.summary.md`
- Fact verification flags: URL references must be verified or hedged
- Cowork terminology: 'Cowork' not 'Claude in Excel' (per `.claude/rules/cowork-content.md`)
- Router distribution guide: which universal rules go into which skills (DLA warnings → all skills; financial reasoning → financials/canvas; pitch quality → pitch; assumption tracking → hypothesis/validate/sprint)
- Intrapreneurship dual-track: every lesson must acknowledge both entrepreneur and intrapreneur contexts (the spec covers this explicitly — investors ↔ innovation committee, funding ↔ budget, customers ↔ internal users)

### 3. Per-Writer Briefs (one file each)

- `brief-writer-bookends.md` — L01 + L02 + L16
- `brief-writer-design-lean.md` — L04 + L05 + L06 + L07
- `brief-writer-business-model.md` — L08 + L09 + L10 + L11
- `brief-writer-pitch-agents-cap.md` — L12 + L13 + L14 + L15
- `brief-plugin-builder.md` — Full plugin scope

Each brief contains:

- Exact file paths to create
- Spec line ranges to read (NOT the full 2,045 lines)
- Content-specific notes
- Exercise assignments with spec exercise line ranges
- Exit criteria

### 4. Chapter README

Write `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/README.md` following the Ch 35 README format exactly:

- YAML frontmatter (slug, sidebar_position: 40, title, description, chapter_number: 40, part_number: 3, version: 1.0, status: draft)
- Chapter contract (5 questions students can answer by end)
- Lesson table (16 rows: lesson number, title, duration, outcome)
- Prerequisites (Cowork access, plugin installation, working folder)
- Total chapter duration

The 5 contract questions should cover:

1. What is the DLA Stack and why must the three methodologies be applied in order?
2. How does assumption mapping convert entrepreneurial intuition into testable hypotheses, and what evidence hierarchy distinguishes VALIDATED from ANECDOTAL?
3. How do the 10 innovation skills form a complete innovation cycle from customer discovery through investor pitch?
4. How do the 4 persistent agents (Idea Generator, Customer Intelligence, Business Model Architect, Fundraising Readiness) provide continuous innovation intelligence?
5. How does `innov.local.md` serve as the venture's living context file, and what does the 4-question validation test reveal?

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — architecture-spec.md, shared-brief.md, 5 writer briefs, README.md'"

---

## PHASE 2: REFERENCE BUILDER

Create task: "Phase 2: Gold-standard reference lesson (L03)"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `reference-builder`
Model: opus

### Reference Builder Teammate Prompt

"You are the `reference-builder` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch40-innovation/architecture-spec.md` — the master spec from architect
2. `specs/drafts/ch40-innovation/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` — Ch 35 L03 as format reference (YAML frontmatter, section structure, Try With AI, all patterns)
4. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 139-397 — Part One: Design Thinking Accelerated (Empathy + Define + early Ideation — your source content)
5. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1489-1531 — Exercise 2: Customer Discovery Synthesis Sprint
6. `specs/drafts/chap29_innovation/innovation-skills/products/discovery.md` — the `/discovery` skill spec

DELIVERABLE: Write ONE gold-standard lesson that ALL other writers will match:

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/03-customer-discovery-problem-statement.md`

This lesson teaches customer discovery (interview → synthesis → JTBD mapping → HMW problem statements) using the `/discovery` skill. It must demonstrate EVERY pattern:

- [ ] Full YAML frontmatter (all fields from architecture-spec.md template, including teaching_guide)
- [ ] Narrative opening connecting to real business problem (the AP automation CFO interview scenario from spec)
- [ ] Core concept with comparison table (customer discovery phases: Empathise → Define)
- [ ] JTBD framework explanation (functional + emotional + related jobs)
- [ ] `/discovery` skill interaction (show the command, show sample output: interview guide, synthesis, pain ranking, HMW statements)
- [ ] Exercise (Spec Ex 2): students synthesise 5 interviews using `/discovery`, produce JTBD map + pain ranking + insight statements + HMW problem statements
- [ ] Try With AI section (3 prompts: Reproduce → Adapt → Apply)
- [ ] `:::note` and `:::info` blocks used appropriately
- [ ] Intrapreneurship dual-track (note how discovery applies to internal innovation)
- [ ] NO `import` statements for Flashcards or Quiz components (these DO NOT EXIST as React components)

Also write the sidecar files:

- `03-customer-discovery-problem-statement.flashcards.yaml`
- `03-customer-discovery-problem-statement.summary.md`

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — 03-customer-discovery-problem-statement.md + .flashcards.yaml + .summary.md'"

---

## PHASE 3: PLUGIN BUILDER + CHAPTER WRITERS (parallel)

After Phase 2 completes (reference lesson exists), spawn ALL Phase 3 teammates SIMULTANEOUSLY. The plugin-builder can start after Phase 1 (does not need the reference lesson). Chapter writers need the reference lesson.

### 3A: Plugin Builder

Create task: "Phase 3A: Build innovation plugin"
Depends on: Phase 1 (architect)
Spawn 1 teammate: `plugin-builder`
Model: opus

#### Plugin Builder Teammate Prompt

"You are the `plugin-builder` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

You build the Cowork plugin. You do NOT write book lessons.

REFERENCE DOCUMENTATION — Read these FIRST:

1. https://code.claude.com/docs/en/plugins-reference — Official plugin format, plugin.json schema, directory structure, component types
2. https://agentskills.io/specification — SKILL.md format specification (YAML frontmatter schema, name constraints, description field, progressive disclosure)
3. https://code.claude.com/docs/en/sub-agents — Agent definition format (frontmatter fields: name, description, tools, model, memory, background, skills)

READ IN ORDER:

1. `specs/drafts/ch40-innovation/architecture-spec.md` — master spec with plugin directory skeleton
2. `specs/drafts/ch40-innovation/brief-plugin-builder.md` — your specific brief
3. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/.claude-plugin/plugin.json` — reference plugin.json format
4. Read 2-3 supply-chain skill SKILL.md files from `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/skills/` — reference skill format
5. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/agents/` — read 1-2 agent .md files for reference agent format
6. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/evals/` — reference eval format (cases.yaml + run.py)
7. ALL files in `specs/drafts/chap29_innovation/innovation-skills/` — your source material (10 product skills + 4 agents + router + local.md template)

DELIVERABLES — write to `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/innovation/`:

### 1. Plugin Manifest

`.claude-plugin/plugin.json`:

```json
{
  \"name\": \"innovation\",
  \"version\": \"1.0.0\",
  \"description\": \"Innovation and intrapreneurship agent — DLA Stack (Design Thinking, Lean Startup, Agile) for customer discovery, assumption validation, business model design, financial modelling, competitive intelligence, go-to-market strategy, investor pitch, and innovation sprint management. 10 skills and 4 persistent agents.\",
  \"author\": {
    \"name\": \"Panaversity\",
    \"url\": \"https://github.com/panaversity\"
  },
  \"homepage\": \"https://agentfactory.panaversity.org\",
  \"repository\": \"https://github.com/panaversity/agentfactory-business-plugins\",
  \"license\": \"Apache-2.0\",
  \"keywords\": [\"innovation\", \"intrapreneurship\", \"lean-startup\", \"design-thinking\", \"agile\", \"business-model-canvas\", \"customer-discovery\", \"mvp\", \"pitch-deck\", \"unit-economics\", \"go-to-market\", \"assumption-mapping\"]
}
```

### 2. Skills (10 total, NO router)

Convert each spec skill file into proper SKILL.md format per https://agentskills.io/specification:

| Spec File                | Plugin Skill Dir             | Command       | Notes      |
| ------------------------ | ---------------------------- | ------------- | ---------- |
| `products/idea.md`       | `skills/idea/SKILL.md`       | `/idea`       | Keep as-is |
| `products/discovery.md`  | `skills/discovery/SKILL.md`  | `/discovery`  | Keep as-is |
| `products/hypothesis.md` | `skills/hypothesis/SKILL.md` | `/hypothesis` | Keep as-is |
| `products/canvas.md`     | `skills/canvas/SKILL.md`     | `/canvas`     | Keep as-is |
| `products/financials.md` | `skills/financials/SKILL.md` | `/financials` | Keep as-is |
| `products/pitch.md`      | `skills/pitch/SKILL.md`      | `/pitch`      | Keep as-is |
| `products/sprint.md`     | `skills/sprint/SKILL.md`     | `/sprint`     | Keep as-is |
| `products/market.md`     | `skills/market/SKILL.md`     | `/market`     | Keep as-is |
| `products/gtm.md`        | `skills/gtm/SKILL.md`        | `/gtm`        | Keep as-is |
| `products/validate.md`   | `skills/validate/SKILL.md`   | `/validate`   | Keep as-is |

Each SKILL.md must have:

- YAML frontmatter: `name` (matching directory, lowercase+hyphens), `description` (max 1024 chars, include trigger phrases), `license: Apache-2.0`, `metadata: { author: Panaversity, version: \"1.0\" }`
- Body: step-by-step workflow instructions from spec, output format templates, never-do rules
- **ROUTER DISTRIBUTION**: There is NO router file. Distribute the spec router's logic into each relevant skill:
  - **ALL skills**: Include `innov.local.md` context loading instructions. Include brief DLA progression check (e.g., `/idea` should note: 'If venture.stage = IDEA and no discovery work done, recommend /discovery first').
  - **`/hypothesis`, `/validate`, `/sprint`**: Include assumption tracking standard (always surface most critical untested assumption, always update assumption status after outputs).
  - **`/financials`, `/canvas`**: Include financial reasoning standard (unit economics first, churn is most dangerous assumption, never produce projections without assumptions stated, always show runway).
  - **`/pitch`**: Include pitch quality standard (every claim has a source, traction is specific, market size is bottom-up, ask is specific, never use vague claims like 'massive market opportunity').
- Keep under 500 lines per SKILL.md

### 3. Agents (4 total)

Convert each spec agent file into proper agent.md format per https://code.claude.com/docs/en/sub-agents:

| Spec File                                  | Plugin Agent File                    | Purpose                                         |
| ------------------------------------------ | ------------------------------------ | ----------------------------------------------- |
| `agents/idea-generator-agent.md`           | `agents/idea-generator.md`           | Weekly innovation briefs, 100-idea facilitation |
| `agents/customer-intelligence-agent.md`    | `agents/customer-intelligence.md`    | Customer signal digest, interview synthesis     |
| `agents/business-model-architect-agent.md` | `agents/business-model-architect.md` | Canvas versioning, financial health reviews     |
| `agents/fundraising-readiness-agent.md`    | `agents/fundraising-readiness.md`    | Pitch prep, investor pipeline, data room        |

Each agent.md must have YAML frontmatter:

- `name`: lowercase+hyphens identifier
- `description`: when Claude should invoke this agent
- `tools`: appropriate tool list (Read, Grep, Glob, Bash, WebSearch, WebFetch as needed)
- `model`: inherit
- `background`: true (these are persistent monitoring agents)
- `skills`: list relevant plugin skills this agent should have preloaded

Body: detailed system prompt from spec (monitoring schedule, alert types, escalation rules, never-do rules).

### 4. Local Config Template

`local.md.template` — copy from `specs/drafts/chap29_innovation/innovation-skills/innov.local.md.template` with any adjustments for plugin format.

### 5. Evals

Create `evals/cases.yaml` with golden test cases:

- At least 2 routing cases per skill (20 minimum for 10 skills)
- At least 4 negative cases (queries that should NOT match innovation — e.g., 'reconcile this invoice', 'assess this vendor', 'review this contract')
- Format: match supply-chain's `evals/cases.yaml` structure

Create `evals/run.py`:

- Match supply-chain's eval runner pattern
- Support `--list` flag to show all cases
- Support `--case <name>` to run single case

### 6. README.md

Plugin README with:

- Quick Start (install instructions via marketplace)
- The DLA Stack explanation (one paragraph)
- Skill inventory table (command → purpose → DLA stage)
- Agent inventory table (name → purpose → schedule/trigger)
- Configuration (`innov.local.md` template overview — venture, assumptions, customer profiles, BMC, financials, competitive landscape, fundraising, intrapreneurship, sprint log)
- Works With section (references to other plugins — Ch 25 Product Management, Ch 23 Sales & RevOps, Ch 28 Productivity)

### 7. LICENSE

Apache-2.0 license file (copy from supply-chain plugin).

### VALIDATION CHECKLIST (run after ALL files written):

After writing each file, validate against the plugin validation checklist:

- After each SKILL.md: validate `name` (1-64 chars, lowercase+hyphens, matches directory, no consecutive hyphens), `description` (1-1024 chars, includes trigger phrases), body under 500 lines
- After each agent.md: validate `name`, `description`, `tools` list, `background: true`, `skills` list references skills that actually exist
- After plugin.json: validate JSON structure, `name` matches directory, semver version
- After all files: cross-file consistency (skill dirs match names, agent skills references resolve, README tables match actual contents, no router references, command names consistent everywhere)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'PLUGIN-BUILDER DONE — plugin.json + 10 skills + 4 agents + local.md.template + evals + README + LICENSE'"

---

### 3B: Writer — Bookends

Create task: "Phase 3B: Bookend lessons (L01, L02, L16)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-bookends`
Model: sonnet

#### Writer Bookends Teammate Prompt

"You are the `writer-bookends` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch40-innovation/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch40-innovation/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch40-innovation/brief-writer-bookends.md` (YOUR specific brief with scope)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/03-customer-discovery-problem-statement.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1-137 (Introduction, DLA Stack, Cowork Config) AND lines 1878-1950 (Summary, Quick Reference)

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports (no `import` statements for Flashcards, Quiz, or any `@site/src/components/`)
- Cowork terminology: say 'Cowork' not 'Claude in Excel' (unless referencing Ch 28's product specifically)
- Fact verification: URL references must be verified via WebSearch or use hedging language ('practitioners describe...')
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `01-the-innovation-os.md` — The DLA Stack as a unified methodology. Why each methodology (Design Thinking, Lean Startup, Agile) fails without the others. Three anti-patterns. The AP automation SaaS as the chapter's worked example. Introduce Cowork configuration for innovation. No exercises (conceptual foundation). Duration: ~25 min.

2. `02-plugin-architecture-installation.md` — Install innovation plugin, configure `innov.local.md` template with their own venture idea OR the AP automation walkthrough. Command map (10 skills → 10 commands). Verify commands respond. No full exercises — setup/orientation lesson with mini-activity. Duration: ~20 min.

3. `16-chapter-summary-quick-reference.md` — Chapter summary (the Innovation OS as a unified system), quick reference tables (all 10 commands + 4 agents with scheduling), DLA Stack framework table, key references. Duration: ~15 min.

Plus 3 `.flashcards.yaml` files and 3 `.summary.md` files = 9 files total.

When finished, message the team lead: 'WRITER BOOKENDS DONE — L01 + L02 + L16 (9 files)'"

---

### 3C: Writer — Design Thinking + Lean Startup

Create task: "Phase 3C: Design Thinking + Lean Startup lessons (L04, L05, L06, L07)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-design-lean`
Model: sonnet

#### Writer Design-Lean Teammate Prompt

"You are the `writer-design-lean` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch40-innovation/architecture-spec.md` (master spec — file paths, patterns, YAML template)
2. `specs/drafts/ch40-innovation/shared-brief.md` (shared context — identity, terminology, cross-refs)
3. `specs/drafts/ch40-innovation/brief-writer-design-lean.md` (YOUR specific brief with scope and line ranges)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/03-customer-discovery-problem-statement.md` (reference lesson — match its quality exactly)
5. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 399-641 (Ideation + Part 2: Lean Startup — assumption stack, MVP, BML)
6. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1419-1487 (Exercise 1: Idea Generation Sprint)
7. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1533-1583 (Exercise 3: MVP Hypothesis Stress-Test)
8. `specs/drafts/chap29_innovation/innovation-skills/products/idea.md` — /idea skill spec
9. `specs/drafts/chap29_innovation/innovation-skills/products/hypothesis.md` — /hypothesis skill spec
10. `specs/drafts/chap29_innovation/innovation-skills/products/validate.md` — /validate skill spec

RULES:

- Match the reference lesson's YAML frontmatter, section structure, and quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- The AP automation worked example continues from L03 (discovery) — L04 uses the HMW problem statements discovered in L03
- L05 and L06 build the assumption map and MVP that L07 validates — maintain the worked example continuity
- L07 uses the spec's pilot results data (2 of 3 pilots at $500, AI accuracy 91%, adoption 89%/71%/45%)
- Exercise format: Step 1-5 structure with explicit plugin commands, deliverable at end
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `04-hundred-ideas-one-hour.md` — Design Thinking Ideate phase. 100-idea sprint across 10 categories. DVF (Desirability/Viability/Feasibility) filtering. Pressure-testing with devil's advocate. **Exercise 1** (from spec lines 1419-1487): Run 100-idea sprint using `/idea`, shortlist to 10, pressure-test top 1. Duration: ~35 min.

2. `05-the-assumption-stack.md` — Lean Startup hypothesis phase. Making all assumptions explicit. 3-tier risk scoring (HIGH/MEDIUM/LOW). Evidence quality (ASSUMED/ANECDOTAL/VALIDATED). Cheapest test design. **Exercise 3 part 1** (from spec lines 1533-1573): Build 20+ assumption map using `/hypothesis`, risk-score, design cheapest test per assumption, prioritise into 4-week validation plan. Duration: ~40 min.

3. `06-mvp-the-minimum-that-validates.md` — MVP scoping: the minimum product that tests the most critical assumption. Feature inclusion/exclusion with rationale. Success/failure criteria. Week-by-week build plan. **Exercise 3 part 2** (from spec lines 1573-1583): Design MVP using `/hypothesis`, define minimum feature set, excluded features, success/failure criteria. Duration: ~40 min.

4. `07-build-measure-learn.md` — Lean Startup validation loop. Analysing pilot results against assumptions. Evidence hierarchy (paid & renewed > paid once > LOI > usage > stated WTP > problem real > multiple mentions). 7 pivot types. Pivot/persevere decision. **Exercise**: Analyse the AP automation pilot results using `/validate`, classify evidence, make pivot/persevere recommendation. Duration: ~35 min.

Plus 4 `.flashcards.yaml` files and 4 `.summary.md` files = 12 files total.

When finished, message the team lead: 'WRITER DESIGN-LEAN DONE — L04 + L05 + L06 + L07 (12 files)'"

---

### 3D: Writer — Business Model + Market + GTM

Create task: "Phase 3D: Business model + market + GTM lessons (L08, L09, L10, L11)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-business-model`
Model: sonnet

#### Writer Business-Model Teammate Prompt

"You are the `writer-business-model` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch40-innovation/architecture-spec.md` (master spec)
2. `specs/drafts/ch40-innovation/shared-brief.md` (shared context)
3. `specs/drafts/ch40-innovation/brief-writer-business-model.md` (YOUR specific brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/03-customer-discovery-problem-statement.md` (reference lesson)
5. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 643-877 (Parts 3-4: Business Model Canvas + Financial Model)
6. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1178-1349 (Parts 7-8: Market Research + GTM Strategy)
7. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1587-1641 (Exercise 4: BMC Build)
8. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1644-1703 (Exercise 5: Unit Economics)
9. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1764-1817 (Exercise 7: GTM Strategy Sprint)
10. `specs/drafts/chap29_innovation/innovation-skills/products/canvas.md` — /canvas skill spec
11. `specs/drafts/chap29_innovation/innovation-skills/products/financials.md` — /financials skill spec
12. `specs/drafts/chap29_innovation/innovation-skills/products/market.md` — /market skill spec
13. `specs/drafts/chap29_innovation/innovation-skills/products/gtm.md` — /gtm skill spec

RULES:

- Match the reference lesson's quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- L08 BMC builds on the validated learning from L07 — the canvas blocks should reference pilot results
- L09 unit economics uses the spec's detailed AP automation numbers (CAC $275, LTV $3.6M, breakeven at 10 customers, etc.) as the worked example
- L10 market sizing must emphasise bottom-up methodology (NOT top-down analyst TAM)
- L11 GTM comes after L10 — the ICP and channel strategy should reference market sizing data
- Financial reasoning standard: always state assumptions, flag churn as ASSUMED, show runway
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `08-business-model-canvas.md` — Osterwalder's 9-block BMC. Evidence quality per block (ASSUMED/ANECDOTAL/VALIDATED). Stress-testing with 3 adversarial scenarios. Alternative business model generation. Canvas health summary. **Exercise 4** (spec lines 1587-1641): Build complete BMC, stress-test, generate 3 alternatives, compare and select. Duration: ~45 min.

2. `09-unit-economics-financial-modelling.md` — Unit economics (CAC, LTV, LTV:CAC, payback, churn). Revenue and runway modelling. 3-scenario analysis (base/conservative/optimistic). Sensitivity analysis. Fundraising model. **Exercise 5** (spec lines 1644-1703): Build unit economics model, 18-month model with 3 scenarios, run sensitivity analysis. Duration: ~45 min.

3. `10-competitive-intelligence-market-sizing.md` — Competitive landscape scan. Bottom-up TAM/SAM/SOM. Positioning map. Market timing ('why now?'). Moat assessment (data/switching costs/network/brand/regulatory/distribution). **Exercise**: Run competitive intelligence using `/market`, build bottom-up market sizing. Duration: ~40 min.

4. `11-go-to-market-strategy.md` — ICP definition (role + company + trigger + NOT-a-fit). Positioning statement (For/Who/That/Unlike/We format). Channel strategy ranked by CAC efficiency. 7-step sales process. Pricing strategy. Customer success programme. 90-day GTM calendar. **Exercise 7** (spec lines 1764-1817): Define ICP, design positioning, rank channels, design sales process, build 90-day calendar with decision gates. Duration: ~40 min.

Plus 4 `.flashcards.yaml` files and 4 `.summary.md` files = 12 files total.

When finished, message the team lead: 'WRITER BUSINESS-MODEL DONE — L08 + L09 + L10 + L11 (12 files)'"

---

### 3E: Writer — Pitch + Sprint + Agents + Capstone

Create task: "Phase 3E: Pitch + Sprint + Agents + Capstone lessons (L12, L13, L14, L15)"
Depends on: Phase 2 (reference-builder)
Spawn 1 teammate: `writer-pitch-agents-cap`
Model: sonnet

#### Writer Pitch-Agents-Capstone Teammate Prompt

"You are the `writer-pitch-agents-cap` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch40-innovation/architecture-spec.md` (master spec)
2. `specs/drafts/ch40-innovation/shared-brief.md` (shared context)
3. `specs/drafts/ch40-innovation/brief-writer-pitch-agents-cap.md` (YOUR specific brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/03-customer-discovery-problem-statement.md` (reference lesson)
5. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 858-1174 (Parts 5-6: Investor Deck + Agile Sprint)
6. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1354-1417 (Part 9: The Four Innovation Agents)
7. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1707-1761 (Exercise 6: Investor Pitch Deck)
8. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1820-1874 (Exercise 8: Build innov.local.md)
9. ALL files in `specs/drafts/chap29_innovation/innovation-skills/agents/` — all 4 agent spec files
10. `specs/drafts/chap29_innovation/innovation-skills/products/pitch.md` — /pitch skill spec
11. `specs/drafts/chap29_innovation/innovation-skills/products/sprint.md` — /sprint skill spec

RULES:

- Match the reference lesson's quality exactly
- NO phantom imports
- Cowork terminology: 'Cowork' not 'Claude in Excel'
- L12 pitch deck lesson comes AFTER L10 (market) and L11 (GTM) — by this point students have all the data they need for a complete pitch deck
- Pitch quality standard: every claim has a source, traction is specific, market size is bottom-up, ask is specific, never use vague investor claims
- L13 innovation sprints: emphasise LEARNING goal + DELIVERY goal distinction; user stories reference assumption IDs; retrospective updates innov.local.md
- L14 agents: teach `/schedule` for agent automation, configure all 4 agents with appropriate scheduling (Monday weekly briefs, trigger-based activation, 48hr pre-pitch rituals)
- L15 capstone: integrates ALL prior lessons. Students build complete innov.local.md and run full innovation cycle. The 4-question validation test from the spec is the exit criteria.
- Exercise 8 (L15): references all prior exercises — make cross-references explicit
- For intrapreneurs: L12 pitch = business case for innovation committee; L14 agents = internal innovation intelligence
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Files to create (each lesson = .md + .flashcards.yaml + .summary.md):

1. `12-investor-pitch-deck.md` — 9-slide narrative architecture with emotional engineering per slide (Hook → Problem → Solution → Market → Traction → Business Model → Team → Ask → Vision). Hard Q&A preparation (15 questions). Executive summary (100 words). Pitch practice with feedback. **Exercise 6** (spec lines 1707-1761): Write 9-slide narrative using `/pitch`, prepare 15 Q&A answers, draft executive summary. Duration: ~45 min.

2. `13-innovation-sprints.md` — Innovation sprints vs product sprints. Sprint goal = learning goal. Sprint review = validation review. Retrospective = assumption update. User stories with assumption IDs and acceptance criteria. Mid-sprint check-in. **Exercise**: Plan innovation sprint using `/sprint`, write 3-5 user stories, design sprint review + retrospective formats. Duration: ~35 min.

3. `14-four-innovation-agents.md` — Deploy all 4 persistent agents (Idea Generator, Customer Intelligence, Business Model Architect, Fundraising Readiness). Configure scheduling. Weekly Monday intelligence rhythm. Trigger-based canvas updates. Pre-pitch 48hr investor briefs. 16-point fundraising readiness checklist. **Exercise**: Deploy and configure all 4 agents, test Monday brief from Idea Generator, test canvas update from Business Model Architect. Duration: ~40 min.

4. `15-capstone-build-innovation-os.md` — Full integration exercise. Build complete `innov.local.md` (6 sections: venture, assumptions, customer profiles, BMC, financials, competitive landscape + optional fundraising/intrapreneurship). Deploy all agents. Run full innovation cycle: discovery → ideation → hypothesis → MVP → validation → BMC → financials → market → GTM → pitch → sprint. Validate with 4-question test: (1) today's most important task, (2) assumption to test this week, (3) investor question least prepared for, (4) business model concern. **Exercise 8** (spec lines 1820-1874): Build and validate complete innov.local.md. Duration: ~90 min.

Plus 4 `.flashcards.yaml` files and 4 `.summary.md` files = 12 files total.

When finished, message the team lead: 'WRITER PITCH-AGENTS-CAP DONE — L12 + L13 + L14 + L15 (12 files)'"

---

## PHASE 4: QUALITY REVIEWER

Create task: "Phase 4: Quality review of all Chapter 40 output"
Depends on: ALL Phase 3 tasks (plugin-builder + all 4 writers)
Spawn 1 teammate: `quality-reviewer`
Model: opus

### Quality Reviewer Teammate Prompt

"You are the `quality-reviewer` teammate for Chapter 40: Intrapreneurship & Innovation Agents.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/ch40-innovation/architecture-spec.md` — master spec (directory skeleton, YAML template)
2. `specs/drafts/ch40-innovation/shared-brief.md` — shared context
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/03-customer-discovery-problem-statement.md` — reference lesson (quality benchmark)
4. ALL lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/` — review every .md file
5. ALL plugin files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/innovation/` — review every skill and agent

REVIEW CHECKLIST:

**Chapter lessons (universal checks):**

- [ ] Every lesson has complete YAML frontmatter (all required fields including teaching_guide)
- [ ] Keywords list has 8-20 terms per lesson
- [ ] Try With AI section has 3 prompts (Reproduce → Adapt → Apply)
- [ ] NO `import` statements for any `@site/src/components/` (phantom import check)
- [ ] Cowork terminology correct ('Cowork' not 'Claude in Excel')
- [ ] Exercise format follows Step 1-5 structure with deliverable
- [ ] Cross-references are accurate (L07 references L05/L06 assumptions; L12 references L09/L10 data; L15 integrates all)
- [ ] Duration is reasonable for content depth
- [ ] Every .md lesson has matching .flashcards.yaml + .summary.md sidecar files
- [ ] Sidebar positions are sequential (1-16)
- [ ] Slugs follow pattern: `/Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/[lesson-slug]`
- [ ] AP automation worked example is consistent across all lessons (same dollar amounts, same pilot data, same company details)
- [ ] Intrapreneurship dual-track: each lesson acknowledges both entrepreneur and intrapreneur contexts where relevant

**DLA Stack progression checks:**

- [ ] L01 establishes all three methodologies and their interaction
- [ ] L03-L04 are clearly Design Thinking phase
- [ ] L05-L07 are clearly Lean Startup phase
- [ ] L13 is clearly Agile phase
- [ ] L08-L12 are supporting tools that serve all three phases
- [ ] The progression builds logically — no lesson assumes knowledge from a later lesson

**Plugin (technical checks):**

- [ ] plugin.json is valid JSON with all required fields
- [ ] Every SKILL.md has valid YAML frontmatter (name matches directory, description present with trigger phrases)
- [ ] Skill names are lowercase+hyphens only, no consecutive hyphens, 1-64 chars
- [ ] No skill references a router (there is no router in this plugin)
- [ ] Each skill includes distributed router logic (innov.local.md loading, DLA warnings, domain-specific standards)
- [ ] Agent .md files have required frontmatter (name, description, tools, background: true, skills list)
- [ ] Agent skills lists reference skills that actually exist in skills/
- [ ] evals/cases.yaml has 20+ routing cases + 4+ negative cases
- [ ] README skill table and agent table match actual directory contents

**Content quality:**

- [ ] Voice is consistent across all lessons (practical business methodology, not academic)
- [ ] Cognitive load assessment is reasonable per lesson (7-10 new concepts max)
- [ ] URL references are verified or hedged (not stated as confirmed facts)
- [ ] Financial figures in worked example are internally consistent across all lessons
- [ ] Evidence hierarchy is applied correctly in L07 (/validate lesson)
- [ ] The 4-question validation test in L15 actually works as described

DELIVERABLE: Write quality report to `specs/drafts/ch40-innovation/quality-report.md`:

```
## Quality Report: Chapter 40 Intrapreneurship & Innovation Agents

### Overall Score: [PASS/CONDITIONAL PASS/FAIL]

### Per-Writer Summary
| Writer | Files | Issues | Verdict |
|---|---|---|---|
| reference-builder | 3 | [N] | [PASS/FAIL] |
| writer-bookends | 9 | [N] | [PASS/FAIL] |
| writer-design-lean | 12 | [N] | [PASS/FAIL] |
| writer-business-model | 12 | [N] | [PASS/FAIL] |
| writer-pitch-agents-cap | 12 | [N] | [PASS/FAIL] |
| plugin-builder | ~25 | [N] | [PASS/FAIL] |

### Issues List
[Numbered list of all issues found, grouped by severity: Critical / Warning / Suggestion]
```

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md written. Overall: [PASS/FAIL]'"

---

## PHASE 5: POST-PRODUCTION (same team, NOT shutdown)

After quality review PASSES, proceed to post-production using the SAME team. Do NOT shut down teammates.

### 5A: Summaries

If any lesson `.summary.md` files are missing or flagged as low quality by the quality reviewer, message the relevant writer teammate to regenerate them using the `/summary-generator` skill pattern. Each summary should extract key concepts, mental models, patterns, and common mistakes.

### 5B: Flashcards

If any lesson `.flashcards.yaml` files are missing or flagged, message the relevant writer to regenerate using the `/generate-flashcards` skill pattern. Flashcards are YAML sidecar files, NOT React component imports.

### 5C: Chapter Quiz

Create task: "Phase 5C: Generate chapter quiz"
Message the `writer-bookends` teammate (or spawn a new `quiz-generator` teammate if bookends has shut down):

"Generate a 50-question quiz for Chapter 40 using the `/quiz-generator` skill. Read ALL lesson files in the chapter directory. Output the quiz as `17-quiz.md` (sidebar_position: 17). Questions should cover all 10 skills, all 4 agents, the DLA Stack methodology, assumption mapping, evidence hierarchy, unit economics, and the innovation sprint model. Use randomised batching of 15-20 questions per session."

### 5D: Slides

Create task: "Phase 5D: Generate chapter slides"
Spawn a new `slides-generator` teammate or message an existing one:

"Generate chapter slides using `/notebooklm-slides` skill. Read ALL lesson files + chapter README. Then use `/upload-chapter-slides` to upload the PDF to CDN and update the README frontmatter with `slides:` metadata."

### 5E: Plugin Validation

Message the `plugin-builder` teammate:

"Run final plugin validation:

1. `python evals/run.py --list` — verify all eval cases listed
2. `python evals/run.py` — run all cases, report pass/fail
3. Run `/skill-validator` on each SKILL.md for quality scoring
4. Verify `local.md.template` exists with all configurable fields documented"

---

## PHASE 6: FINAL VERIFICATION

The team lead (not a teammate) runs these checks:

```bash
# File inventory — chapter
ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/*.md | wc -l
# Expected: 17+ (README + 16 lessons + quiz)

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/*.summary.md | wc -l
# Expected: 16 summary sidecars

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/*.flashcards.yaml | wc -l
# Expected: 16 flashcard sidecars

# No phantom imports
grep -r "import.*@site/src/components" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/
# Must return nothing

# YAML frontmatter spot-check (3 random lessons)
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/04-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/09-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/14-*.md

# Plugin checks
ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/innovation/skills/*/SKILL.md | wc -l
# Expected: 10 skill files

ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/innovation/agents/*.md | wc -l
# Expected: 4 agent files

# README slides frontmatter
grep "slides:" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/README.md
```

Only after ALL checks pass: shut down teammates, delete the team, report to user.

---

## Lead Coordination Rules

1. **Create the team** with TeamCreate before spawning any teammates
2. **Create ALL tasks upfront** with correct dependencies:
   - Phase 1 (architect): no dependencies
   - Phase 2 (reference-builder): depends on Phase 1
   - Phase 3A (plugin-builder): depends on Phase 1 (NOT Phase 2)
   - Phase 3B-3E (chapter writers): depend on Phase 2
   - Phase 4 (quality-reviewer): depends on ALL Phase 3 tasks
   - Phase 5 (post-production): depends on Phase 4 PASS
   - Phase 6 (verification): depends on Phase 5
3. **Enforce phase ordering** — do NOT spawn Phase 2 until architect signals done
4. **Do NOT write content yourself** — you coordinate, you do not write
5. **Wait for architect's plan** — architect uses plan mode, review the directory skeleton before approving
6. **Spawn plugin-builder and reference-builder after architect completes** — plugin-builder can run in parallel with Phase 2
7. **Spawn ALL chapter writers simultaneously** after reference-builder completes
8. **Monitor progress** — if a teammate appears stuck (no message after extended time), send a check-in message
9. **If a teammate fails**, diagnose the issue and either message them to retry or spawn a replacement
10. **After quality reviewer completes**:
    - If PASS: proceed to Phase 5 post-production
    - If CONDITIONAL PASS: fix minor issues yourself or message relevant writer
    - If FAIL: message the failing writer(s) with specific issues, wait for fixes, re-run quality review
11. **Post-production is stateful** — reuse existing teammates where possible (they have context)
12. **Post-quality structural verification** (Phase 6):
    - `ls` the chapter output directory — confirm 50+ files (16 lessons × 3 files each + README + quiz)
    - `ls` the plugin output directory — confirm 10 skill dirs + 4 agent files + plugin.json + evals + README + LICENSE + local.md.template
    - Grep for phantom imports — must return nothing
    - Spot-check YAML frontmatter from 3 random lessons — confirm all required fields present
13. **Cleanup**: When all verification passes, shut down all teammates and delete the team
14. **Final message**: Report to user with file counts, quality score, and any notes
15. **Do NOT commit to git** until all verification passes and user approves

## Model Preferences

| Teammate                | Model  | Rationale                                                 |
| ----------------------- | ------ | --------------------------------------------------------- |
| architect               | opus   | Reads full 2,045-line spec, produces binding architecture |
| reference-builder       | opus   | Sets quality bar for all writers                          |
| plugin-builder          | opus   | Technical precision for skill/agent format compliance     |
| writer-bookends         | sonnet | Lighter content (intro, setup, summary)                   |
| writer-design-lean      | sonnet | Standard lesson writing                                   |
| writer-business-model   | sonnet | Standard lesson writing                                   |
| writer-pitch-agents-cap | sonnet | Standard lesson writing                                   |
| quality-reviewer        | opus   | Needs judgment to evaluate cross-cutting quality          |

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 2 before Phase 1 completes
- Do NOT spawn Phase 3 chapter writers before Phase 2 completes (plugin-builder CAN start after Phase 1)
- Do NOT spawn quality reviewer before ALL Phase 3 teammates complete
- Do NOT let writer teammates read the full 2,045-line source draft (only architect reads it all)
- Do NOT skip quality review or structural verification
- Do NOT approve architect's plan without reviewing the directory structure and YAML template
- Do NOT shut down the team after Phase 4 — post-production (Phase 5) uses the same team
- Do NOT commit to git until all verification passes and user approves
