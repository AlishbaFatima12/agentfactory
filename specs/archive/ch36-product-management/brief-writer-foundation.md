# Writer Brief: Foundation (README + L01 + L02 + L04 + L05)

**Writer**: writer-foundation
**Scope**: Chapter README, L01, L02, L04, L05 (L03 is written by reference-builder)

---

## Pre-Reading (REQUIRED)

Read these files before writing any content:

1. `specs/drafts/ch36-product-management/shared-brief.md` — Shared context (InsightFlow, terminology, patterns)
2. `specs/drafts/ch36-product-management/architecture-spec.md` — YAML frontmatter template, component catalog
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/README.md` — Reference README format
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/06-invoice-reconciliation-at-scale.md` — Reference lesson format (YAML frontmatter, sections, Try With AI, exercise structure)

---

## Files to Create

### README.md (already written by architect — SKIP)

The chapter README is written by the architect and placed at:
`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/README.md`

### L01: The PM's Cognitive Load Problem

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/01-pms-cognitive-load-problem.md`
**Sidecars**: `.flashcards.yaml` + `.summary.md`

**Spec source**: `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 1–67 (Introduction section)

**Content notes**:

- This is a conceptual lesson — no plugin commands, no exercises with Cowork
- Narrative opening: a senior PM's typical week — the cognitive load of simultaneously being researcher, writer, strategist, communicator, and decision-maker
- Key framework: the five PM roles and the writing volume each requires
- The "document gap": why PMs either write poorly or skip writing entirely
- Introduce the two-plugin architecture at a high level (official + custom) without installation details
- Try With AI: three prompts that let the student reflect on their own PM workflow (or a PM workflow they've observed)
- Duration: 25 minutes
- Proficiency: A2 (conceptual awareness)
- Bloom's: Understand

**Exercise**: Reflective, not tool-based. Student lists the PM artifacts they produce in a typical month and identifies which ones are high-quality vs rushed.

### L02: Plugin Architecture & Your Product Context

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/02-plugin-architecture-product-context.md`
**Sidecars**: `.flashcards.yaml` + `.summary.md`

**Spec source**:

- `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 26–67 (Plugin Architecture section)
- Official plugin README: `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/README.md`
- `specs/drafts/chapter25_product management/pm-skills/product.local.md.template` — the full template

**Content notes**:

- Install both plugins: official (product-management from knowledge-work-plugins) and custom (product-strategy from agentfactory-business-plugins)
- Walk through `product.local.md.template` section by section, explaining what each section does and why it matters
- Exercise: Student populates `product.local.md` for InsightFlow using the template. This is the foundation artifact — every subsequent exercise uses it.
- Explain the command map: which commands come from which plugin
- Show the plugin directory structure (installable components only — NOT dev artifacts)
- Duration: 30 minutes
- Proficiency: B1 (setup + configuration)
- Bloom's: Apply

**Exercise**: Five-step exercise to populate product.local.md for InsightFlow. Step 1: Copy the template. Step 2: Fill Product Identity. Step 3: Fill Personas (Analyst Alex, VP Priya, CFO Marcus). Step 4: Fill Engineering Team and Stakeholder Map. Step 5: Test by running `/brief` with a simple problem statement and checking if the output reflects InsightFlow context.

### L04: User Research — Interviews & Synthesis

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/04-user-research-interviews-synthesis.md`
**Sidecars**: `.flashcards.yaml` + `.summary.md`

**Spec source**:

- `specs/drafts/chapter25_product management/Chapter25_Product_Management.md` lines 496–614 (Research section)
- Custom skill: `specs/drafts/chapter25_product management/pm-skills/products/interview.md`
- Official skill: `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/synthesize-research/SKILL.md`

**Content notes**:

- **Mixed lesson** — uses BOTH plugins: custom `/interview` generates the guide, official `/synthesize-research` processes the results
- Five interview design principles from interview.md: behavior over opinion, past over hypothetical, problem before solution, silence is data, "why" five times
- Interview guide structure (45-minute default): Opening, Warm-Up, Core Discovery, Wrap-Up
- Synthesis methodology from the official skill: thematic analysis, affinity mapping, triangulation
- Teach the handoff: `/interview` output → student runs simulated interviews → `/synthesize-research` processes the notes
- InsightFlow context: interview guide for understanding how analysts currently build reports without SQL
- Duration: 45 minutes
- Proficiency: B1-B2
- Bloom's: Apply + Analyze

**Exercise**: Step 1: Run `/interview` to generate an interview guide for "How do analysts at mid-size companies currently handle reporting?" Step 2: Evaluate the guide against the five principles. Step 3: Simulate 3 interview note-taking sessions (provide pre-written interview snippets for InsightFlow). Step 4: Run `/synthesize-research` with the simulated notes. Step 5: Evaluate the synthesis — does it distinguish behavior from opinion? Does it include a "what we should NOT build" section?

### L05: Competitive Intelligence

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/05-competitive-intelligence.md`
**Sidecars**: `.flashcards.yaml` + `.summary.md`

**Spec source**:

- Official skill: `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/competitive-brief/SKILL.md`

**Content notes**:

- **Official plugin lesson** — uses `/competitive-brief`
- Competitive landscape mapping: direct, indirect, adjacent competitors, substitutes
- Feature comparison matrices with the Simple rating scale (Strong/Adequate/Weak/Absent)
- Positioning analysis: positioning statement template, message architecture levels
- Win/loss analysis methodology
- InsightFlow context: competitive brief comparing InsightFlow's workflow automation vs two fictional competitors (AutoDash — dashboard-focused, WorkflowIQ — automation-focused)
- Teach evaluation: is the brief honest about competitor strengths? Does it identify positioning gaps? Are strategic implications actionable?
- Duration: 35 minutes
- Proficiency: B1-B2
- Bloom's: Analyze

**Exercise**: Step 1: Define InsightFlow's competitive set (direct: AutoDash; indirect: Excel; adjacent: WorkflowIQ). Step 2: Run `/competitive-brief` for "Compare InsightFlow's reporting against AutoDash". Step 3: Check the output — does it rate InsightFlow honestly (some areas Strong, some Adequate)? Step 4: Run a second brief for "workflow automation space". Step 5: Synthesise findings — where should InsightFlow differentiate vs achieve parity?

---

## Exit Criteria

- [ ] L01 + L02 + L04 + L05 each have full YAML frontmatter
- [ ] L01 + L02 + L04 + L05 each have `.flashcards.yaml` (10-15 cards) and `.summary.md`
- [ ] All files use "Cowork" terminology (never "Claude in Excel")
- [ ] L02 exercise produces a complete product.local.md for InsightFlow
- [ ] L04 exercise demonstrates the custom-to-official plugin handoff
- [ ] L05 exercise teaches critical evaluation of competitive brief output
- [ ] No `import` statements for non-existent components
- [ ] All InsightFlow numbers use hedging language

Execute autonomously without asking for confirmation.
