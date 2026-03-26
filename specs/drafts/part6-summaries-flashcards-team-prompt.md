# Part 6 Summaries & Flashcards — Agent Team Prompt

Create an agent team to generate summary and flashcard companion files for Part 6 v2 chapters (Ch 61-68 + 71). The content already exists as lesson `.md` files. Each chapter gets one generator teammate that reads lessons and produces `.summary.md` + `.flashcards.yaml` files adjacent to each lesson.

You are the team lead. You coordinate. You do NOT generate summaries or flashcards yourself. Spawn each worker below as a TEAMMATE in the agent team (not as a subagent). Use the shared task list to track all work. Enforce phase ordering: Phase 1 must complete before Phase 2 starts.

---

## Source & Output

- **Base path**: `specs/drafts/part6-v2-chapters/`
- **Content is NOT in** `apps/learn-app/docs/` — it is in the staging directory above
- **Output**: Files written ADJACENT to each lesson `.md` file:
  - `<lesson-basename>.summary.md` (e.g., `01-from-smartnotes-to-workforce.summary.md`)
  - `<lesson-basename>.flashcards.yaml` (e.g., `01-from-smartnotes-to-workforce.flashcards.yaml`)
- **Skip**: `README.md` in every chapter directory (no summary or flashcards for READMEs)
- **Skip**: Flashcard validator (`apps/learn-app/scripts/validate-flashcards.ts`) since files are in staging, not learn-app

---

## Domain Context (Every Teammate Must Understand This)

Part 6 teaches readers to build an **AI agent factory** called **HireFlow**: a coordinated system of four Digital FTEs (Job Spec Writer, Resume Screener, Interview Question Generator, Candidate Summarizer). The reader arrives knowing Python, spec-driven development, and the discipline stack from Part 4. They leave able to architect, explore, incubate, and build a complete local agent factory.

**The 9 chapters span three phases:**

| Section         | Chapters     | Phase     | Reader Role          | Proficiency |
| --------------- | ------------ | --------- | -------------------- | ----------- |
| I: Architecture | Ch 61-64     | Pre-build | Systems Thinker      | A2          |
| II: Explore     | Ch 65-66     | Phase 1   | Domain Explorer      | A2-B1       |
| III: Incubate   | Ch 67-68, 71 | Phase 2   | Intelligence Builder | B1          |

**Narrative**: James and Emma. James makes architectural mistakes (not syntactic ones). Emma corrects systems thinking. Summaries should capture the insight James learns, not just the section headings.

**Key concepts that MUST appear in flashcards across the full set**:

1. Two-layered model (governance + execution)
2. Agents as economic actors (budgets, self-provisioning)
3. Agent maturity model (five phases)
4. Factory blueprint (domain decomposition)
5. 10-80-10 concept paper method
6. Domain mastery gate
7. Domain knowledge vs. agent intelligence transformation
8. Simulation-driven validation
9. MCP integration for agent skills

---

## Deck ID Convention (Prevents Collisions)

All flashcard decks MUST use this ID pattern:

```
deck.id: "ch{NN}-{lesson-slug}"
card.id: "ch{NN}-{lesson-slug}-{NNN}"
```

Examples:

- Deck: `ch61-from-smartnotes-to-workforce` → Cards: `ch61-from-smartnotes-to-workforce-001`, `-002`, etc.
- Deck: `ch67-transformation-method` → Cards: `ch67-transformation-method-001`, etc.

The `{lesson-slug}` is the lesson filename without the numeric prefix and `.md` extension.

- `01-from-smartnotes-to-workforce.md` → slug: `from-smartnotes-to-workforce`
- `05-reflection-and-chapter-quiz.md` → slug: `reflection-and-chapter-quiz`

---

## Phase 1: Architect-Reference (1 teammate, blocks Phase 2)

Spawn a teammate named **architect-reference**.

**Model**: opus

**Prompt**:

"You are the architect-reference for the Part 6 Summaries & Flashcards project. You are part of an agent team.

YOUR JOB: Read the skill definitions, read one sample lesson, and produce gold-standard reference files that all 9 generator teammates will use as their quality benchmark.

READ IN ORDER:

1. `.claude/skills/summary-generator/SKILL.md` (full summary generation process)
2. `.claude/skills/generate-flashcards/SKILL.md` (full flashcard generation process)
3. `.claude/skills/generate-flashcards/references/YAML-SCHEMA.md` (exact YAML schema)
4. `.claude/skills/generate-flashcards/references/LEARNING-SCIENCE.md` (cognitive science foundations)
5. `.claude/skills/generate-flashcards/references/CARD-TYPES.md` (card type examples)
6. `specs/drafts/part6-v2-chapters/README.md` (Part 6 context)
7. `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.md` (sample lesson)

DELIVERABLES:

1. **Reference summary**: Generate `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.summary.md` following the summary-generator skill exactly. This is the gold standard.

2. **Reference flashcard deck**: Generate `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.flashcards.yaml` following the generate-flashcards skill exactly. Include the concept list extraction step. This is the gold standard.

3. **Quality brief** at `specs/drafts/part6-v2-chapters/_quality-brief.md` containing:
   - Summary length calibration table (A2 lessons: 150-250 words, B1 lessons: 200-350 words)
   - Flashcard deck ID convention (ch{NN}-{lesson-slug})
   - Cross-deck awareness notes: which concepts span multiple chapters (two-layered model, HireFlow FTEs, maturity model) so generators avoid duplicating the SAME card framing across chapters
   - Common pitfalls specific to Part 6 content:
     - Do NOT write summaries that parrot section headings; extract the teaching insight
     - Do NOT create flashcards testing trivia; test architectural thinking
     - DO capture James's mistakes as 'Common Mistakes' in summaries
     - DO create thinking cards about factory design decisions, not just recall of definitions
   - Per-chapter brief: For each of the 9 chapters, list lesson filenames (excluding README.md) and the chapter's proficiency level (A2 or B1)

RULES:

- Execute autonomously without asking for confirmation
- The reference files must be production-quality; generators will match them

When finished, message the team lead: 'ARCHITECT-REFERENCE DONE — \_quality-brief.md + 2 reference files for Ch 61 L01'"

---

## Phase 2: Generators (9 teammates, ALL parallel, depends on Phase 1)

Spawn ALL 9 generator teammates SIMULTANEOUSLY after Phase 1 completes.

Each generator reads:

1. The quality brief: `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. The reference summary: `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.summary.md`
3. The reference flashcards: `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.flashcards.yaml`
4. Their assigned chapter's lessons

Each generator uses skills: `summary-generator`, `generate-flashcards`

---

### gen-ch61 — Chapter 61: Agent Factory Two-Layered Model

Spawn a teammate named **gen-ch61**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch61 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
You generate summary and flashcard companion files for Chapter 61, the opening chapter of Part 6. This chapter transforms the reader from 'I can build one AI app' to 'I understand why a factory is different from a collection of apps.' The two-layered model (governance + execution) is THE foundational concept for all of Part 6.

YOUR CHAPTER IN CONTEXT:
Chapter 61 is the first chapter readers encounter in Part 6. They arrive from Part 5 (OpenClaw) knowing how to build a single application. Chapter 61 introduces factory-scale thinking. Chapters 62-64 build on these foundations. Proficiency: A2.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md` (quality standards + your lesson list)
2. `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.summary.md` (reference summary — match format and depth)
3. `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.flashcards.yaml` (reference flashcards — match format and quality)

NOTE: Lesson 01 already has reference files generated by architect-reference. You generate for lessons 02-07 only.

QUALITY FRAMEWORK:

- Insight extraction: Summaries capture the teaching moment, not section headings
- Factory thinking: Flashcards test architectural concepts (why factories need governance, what coordination problems arise)
- Proficiency calibration: A2 lessons get 150-250 word summaries, basic/intermediate flashcards
- Self-contained cards: Every flashcard must make sense 3 weeks after reading the lesson

WHAT MEDIOCRE LOOKS LIKE (avoid this):

- Summary that says 'This lesson covers the two-layered model' instead of explaining WHAT the two layers are and WHY they matter
- Flashcard asking 'What is the two-layered model?' with a 30-word back (that is a thinking card disguised as recall)
- Cards that could apply to any software architecture chapter, not specifically to agent factories

WHEN IN DOUBT:

- Prefer testing architectural judgment over factual recall
- Capture James's mistakes as learning moments in summaries
- If a concept appears in multiple lessons, card it from a DIFFERENT angle each time

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/`
- Generate for: `02-why-chatbot-armies-fail.md`, `03-the-two-layered-model.md`, `04-governance-intent-verification-outcomes.md`, `05-meet-hireflow-four-ftes-one-pipeline.md`, `06-three-frames-for-the-factory.md`, `07-chapter-quiz.md`
- For each lesson: read it fully, then generate `.summary.md` + `.flashcards.yaml` adjacent to it
- Skip: `README.md`, `01-from-smartnotes-to-workforce.md` (already has reference files)

PROCESS PER LESSON:

1. Read the lesson .md file completely
2. Invoke /summary-generator logic: extract core concept, mental models, patterns, mistakes, connections. Write `<basename>.summary.md`
3. Invoke /generate-flashcards logic: extract concept list (R/T tagged), generate cards, run quality gate. Write `<basename>.flashcards.yaml`
4. Move to next lesson

RULES:

- Match the reference files in format, depth, and quality
- Follow deck ID convention: `ch61-{lesson-slug}` (e.g., `ch61-why-chatbot-armies-fail`)
- Recall/thinking balance: 45-55% each
- No em-dashes in summaries (use colons, semicolons, commas)
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH61 DONE — [list of files created]'"

---

### gen-ch62 — Chapter 62: Agents as Economic Actors

Spawn a teammate named **gen-ch62**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch62 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
You generate companion files for Chapter 62, which teaches that AI agents are not just tools but economic participants that purchase resources, manage budgets, and self-provision. This reframes how readers think about agent design: from 'what can it do?' to 'what should it be allowed to spend?'

YOUR CHAPTER IN CONTEXT:
Chapter 62 follows Ch 61 (two-layered model). Readers understand factory architecture. Now they learn the economic dimension: agents with budgets, not just permissions. Ch 63 (maturity model) builds on this economic framing. Proficiency: A2.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary: `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.summary.md`
3. Reference flashcards: `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.flashcards.yaml`

QUALITY FRAMEWORK:

- Insight extraction: Capture the economic reframing (budgets > permissions)
- Factory thinking: Cards should test why economic agency matters for factory design
- Proficiency calibration: A2, 150-250 word summaries

WHAT MEDIOCRE LOOKS LIKE (avoid this):

- Treating 'economic actors' as a metaphor rather than a concrete design pattern
- Cards that test vocabulary ('What is self-provisioning?') without testing reasoning ('Why would an agent need to purchase its own resources?')

WHEN IN DOUBT:

- Economic concepts should connect back to HireFlow FTEs concretely
- If a concept overlaps with Ch 61, card it from the economic angle, not the architectural angle

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/01-the-architecture/62-agents-as-economic-actors/`
- Generate for: ALL `.md` files except `README.md` (5 lessons)
- Deck ID prefix: `ch62-{lesson-slug}`

PROCESS PER LESSON:

1. Read lesson fully
2. Generate `<basename>.summary.md` following summary-generator skill
3. Generate `<basename>.flashcards.yaml` following generate-flashcards skill
4. Next lesson

RULES:

- Match reference files in format, depth, quality
- Deck IDs: `ch62-{lesson-slug}`
- Recall/thinking balance: 45-55%
- No em-dashes in summaries
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH62 DONE — [file list]'"

---

### gen-ch63 — Chapter 63: Agent Maturity Model

Spawn a teammate named **gen-ch63**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch63 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
Chapter 63 introduces the five-phase agent maturity model: the progression from ad-hoc prompting to production factory. This framework is referenced in every subsequent chapter. Flashcards here must thoroughly cover each phase since students need to internalize the progression.

YOUR CHAPTER IN CONTEXT:
Follows Ch 61 (architecture) and Ch 62 (economics). The maturity model synthesizes both into a roadmap. Ch 64 (blueprint) operationalizes it. Proficiency: A2.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary + flashcards from Ch 61 L01

QUALITY FRAMEWORK:

- The five phases must each get at least one flashcard (enumeration rule)
- James's mistake of skipping phases is a key teaching moment for summaries
- Discrimination cards (phase X vs phase Y) are valuable here

WHAT MEDIOCRE LOOKS LIKE:

- A single card asking 'Name the five phases' with all five in the back (too heavy)
- Summaries that list the phases without explaining why the ORDER matters

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/01-the-architecture/63-agent-maturity-model/`
- Generate for: ALL `.md` files except `README.md` (5 lessons)
- Deck ID prefix: `ch63-{lesson-slug}`

RULES:

- Match reference format. Deck IDs: `ch63-{lesson-slug}`. Recall/thinking 45-55%. No em-dashes.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH63 DONE — [file list]'"

---

### gen-ch64 — Chapter 64: The HireFlow Blueprint

Spawn a teammate named **gen-ch64**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch64 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
Chapter 64 teaches domain decomposition: turning a vague business need into a concrete factory blueprint with defined FTE roles, inputs, outputs, and success criteria. This is the bridge from conceptual architecture (Ch 61-63) to practical execution (Ch 65+). The blueprint template is an artifact students will reuse.

YOUR CHAPTER IN CONTEXT:
Final chapter in Section I (Architecture). Students have the conceptual model; now they learn to operationalize it. Ch 65 starts the Explore phase using the blueprint as input. Proficiency: A2.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary + flashcards from Ch 61 L01

QUALITY FRAMEWORK:

- The six-step decomposition process deserves thorough card coverage
- Blueprint template fields should be tested as recall cards
- Thinking cards should test judgment: 'Why would you split this into two FTEs instead of one?'

WHAT MEDIOCRE LOOKS LIKE:

- Cards that test the template FIELDS without testing the REASONING behind them
- Summaries that describe the template without connecting it to the factory journey

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/01-the-architecture/64-the-hireflow-blueprint/`
- Generate for: ALL `.md` files except `README.md` (7 lessons)
- Deck ID prefix: `ch64-{lesson-slug}`

RULES:

- Match reference format. Deck IDs: `ch64-{lesson-slug}`. Recall/thinking 45-55%. No em-dashes.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH64 DONE — [file list]'"

---

### gen-ch65 — Chapter 65: The 10-80-10 Concept Paper

Spawn a teammate named **gen-ch65**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch65 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
Chapter 65 introduces the 10-80-10 method: 10% human framing, 80% multi-LLM exploration, 10% human crystallization. This is the practical methodology for Phase 1 (Explore). The concept paper is the first major deliverable students produce.

YOUR CHAPTER IN CONTEXT:
First chapter in Section II (Explore). Students have the blueprint from Ch 64. Now they use frontier LLMs to deeply explore the domain. Ch 66 (Domain Mastery Gate) validates the exploration. Proficiency: A2-B1 transition.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary + flashcards from Ch 61 L01

QUALITY FRAMEWORK:

- The 10-80-10 ratio is a recall-worthy framework (each segment needs cards)
- Multi-LLM exploration methodology deserves thinking cards ('Why use multiple LLMs instead of one?')
- The quality threshold (9.5+) is a key concept

WHAT MEDIOCRE LOOKS LIKE:

- Summarizing '10-80-10' without explaining what happens in each segment
- Cards about 'concept papers' that are generic writing advice, not agent-factory-specific

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/02-explore/65-the-ten-eighty-ten-concept-paper/`
- Generate for: ALL `.md` files except `README.md` (6 lessons)
- Deck ID prefix: `ch65-{lesson-slug}`

RULES:

- Match reference format. Deck IDs: `ch65-{lesson-slug}`. Recall/thinking 45-55%. No em-dashes.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH65 DONE — [file list]'"

---

### gen-ch66 — Chapter 66: The Domain Mastery Gate

Spawn a teammate named **gen-ch66**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch66 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
Chapter 66 teaches why you must prove domain mastery before building agents. The mastery gate pattern (concept paper to quiz to validation) prevents premature building. James's mistake of skipping ahead is the central teaching moment.

YOUR CHAPTER IN CONTEXT:
Final chapter in Section II (Explore). Students have a concept paper from Ch 65. Now they validate their understanding through the mastery gate. Ch 67 starts Incubate. Proficiency: B1.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary + flashcards from Ch 61 L01

QUALITY FRAMEWORK:

- The mastery gate PATTERN (not just the quiz) is what students should internalize
- James skipping ahead is a counterfactual scenario perfect for thinking cards
- Cards should distinguish between 'knowing the domain' and 'being ready to build'

WHAT MEDIOCRE LOOKS LIKE:

- Cards about quiz mechanics instead of why mastery gates exist
- Summaries that describe the quiz without explaining the pattern's purpose

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/02-explore/66-the-domain-mastery-gate/`
- Generate for: ALL `.md` files except `README.md` (5 lessons)
- Deck ID prefix: `ch66-{lesson-slug}`

RULES:

- Match reference format. Deck IDs: `ch66-{lesson-slug}`. Recall/thinking 45-55%. No em-dashes.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH66 DONE — [file list]'"

---

### gen-ch67 — Chapter 67: From Paper to Agent Skills

Spawn a teammate named **gen-ch67**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch67 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
Chapter 67 is THE transformation chapter: turning domain knowledge (concept paper) into agent intelligence (skills). It teaches that knowing a domain and encoding that knowledge for agents are fundamentally different tasks. This is the largest chapter in your scope (8 lessons) with hands-on skill-writing exercises for each of HireFlow's four FTEs.

YOUR CHAPTER IN CONTEXT:
First chapter in Section III (Incubate). Students have validated domain knowledge from Ch 65-66. Now they create the skills that agents will execute. Ch 68 (simulation) validates these skills. Proficiency: B1. This chapter uses a hybrid teaching style (Socratic + lightweight PRIMM-AI+).

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary + flashcards from Ch 61 L01

QUALITY FRAMEWORK:

- The domain knowledge vs. agent intelligence distinction is THE core concept (must appear in summaries and flashcards)
- Each HireFlow FTE skill-writing lesson needs cards testing the SPECIFIC skill design decisions
- Thinking cards should test transformation judgment: 'Why can you not just paste the concept paper paragraph into the skill?'

WHAT MEDIOCRE LOOKS LIKE:

- Cards about 'skills' that are generic (could apply to any skill, not HireFlow-specific)
- Summaries of the FTE lessons that describe WHAT was written without explaining WHY the skill was structured that way
- Treating all four FTE skills as interchangeable (each has unique design constraints)

WHEN IN DOUBT:

- Each FTE skill lesson should produce cards about that FTE's unique design challenges
- Prefer cards testing transformation reasoning over skill syntax

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/03-incubate/67-from-paper-to-agent-skills/`
- Generate for: ALL `.md` files except `README.md` (8 lessons)
- Deck ID prefix: `ch67-{lesson-slug}`

RULES:

- Match reference format. Deck IDs: `ch67-{lesson-slug}`. Recall/thinking 45-55%. No em-dashes.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH67 DONE — [file list]'"

---

### gen-ch68 — Chapter 68: Simulation-Driven Validation

Spawn a teammate named **gen-ch68**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch68 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
Chapter 68 teaches why you must test agent skills through simulation before writing any production code. The simulation protocol and scenario bank are reusable patterns. James's mistake of shipping without testing is the opening hook.

YOUR CHAPTER IN CONTEXT:
Follows Ch 67 (skill writing). Students have written HireFlow FTE skills. Now they validate them through simulation. Ch 71 adds MCP integration. Proficiency: B1. Socratic pattern.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary + flashcards from Ch 61 L01

QUALITY FRAMEWORK:

- Simulation protocol steps deserve thorough card coverage
- Scenario bank design is a practical technique for summaries to capture
- Thinking cards should test: 'Why simulate before coding?' and 'What would happen if you skipped simulation?'

WHAT MEDIOCRE LOOKS LIKE:

- Cards about testing in general, not simulation-specific validation of AI agent skills
- Summaries that describe the protocol without explaining WHY each step matters

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/03-incubate/68-simulation-driven-validation/`
- Generate for: ALL `.md` files except `README.md` (5 lessons)
- Deck ID prefix: `ch68-{lesson-slug}`

RULES:

- Match reference format. Deck IDs: `ch68-{lesson-slug}`. Recall/thinking 45-55%. No em-dashes.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH68 DONE — [file list]'"

---

### gen-ch71 — Chapter 71: Agent Skills, MCP & Code Execution

Spawn a teammate named **gen-ch71**.

**Model**: sonnet
**Skills**: summary-generator, generate-flashcards

**Prompt**:

"You are gen-ch71 for the Part 6 Summaries & Flashcards project. You are part of an agent team.

WHAT YOU'RE BUILDING AND WHY:
Chapter 71 is the most technical chapter in your scope (9 lessons). It teaches how agent skills connect to MCP servers and code execution runtimes. This is the bridge from validated intelligence (Ch 67-68) to production-ready integration. Includes Parsons problems, modify exercises, and capstone work.

YOUR CHAPTER IN CONTEXT:
Final chapter in Section III (Incubate) within your scope. Students have written and simulated skills. Now they connect skills to real tools via MCP and code execution. Section IV (Build) follows. Proficiency: B1. Uses hybrid PRIMM-AI+ teaching.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary + flashcards from Ch 61 L01

QUALITY FRAMEWORK:

- MCP tool-call sequences are card-worthy (recall: what calls what; thinking: why this order?)
- The skill-to-MCP connection pattern is THE core concept
- Parsons problem lessons and modify exercises may need lighter summaries (less prose to extract from)
- Code execution integration deserves thinking cards about security and failure modes

WHAT MEDIOCRE LOOKS LIKE:

- Cards about MCP in general (covered in Ch 69-70 which are NOT in your scope) instead of the skill-MCP integration specifically
- Summaries of exercise lessons that just say 'practice the pattern' without capturing what the exercise teaches
- Ignoring the rubric and quiz lesson (it contains assessment criteria worth carding)

WHEN IN DOUBT:

- Exercise/Parsons lessons: shorter summaries (150-200 words) focused on what skill the exercise builds
- Technical lessons: full summaries (200-350 words) with concrete patterns
- The bug-debugging lesson (L04) is rich in thinking-card material

YOUR SCOPE:

- Chapter dir: `specs/drafts/part6-v2-chapters/03-incubate/71-agent-skills-mcp-code-execution/`
- Generate for: ALL `.md` files except `README.md` (9 lessons)
- Deck ID prefix: `ch71-{lesson-slug}`

RULES:

- Match reference format. Deck IDs: `ch71-{lesson-slug}`. Recall/thinking 45-55%. No em-dashes.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'GEN-CH71 DONE — [file list]'"

---

## Phase 3: Quality Reviewer (1 teammate, depends on ALL Phase 2)

Spawn a teammate named **quality-reviewer** after ALL 9 generators complete.

**Model**: opus

**Prompt**:

"You are quality-reviewer for the Part 6 Summaries & Flashcards project. You are part of an agent team.

YOUR JOB: Spot-check the output from all 9 generator teammates against the quality brief and reference files. You do NOT regenerate files; you produce a quality report.

READ IN ORDER:

1. `specs/drafts/part6-v2-chapters/_quality-brief.md`
2. Reference summary: `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.summary.md`
3. Reference flashcards: `specs/drafts/part6-v2-chapters/01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.flashcards.yaml`

REVIEW PROCESS:

1. **File count verification**: Run `find specs/drafts/part6-v2-chapters -name '*.summary.md' | wc -l` (expect 57) and `find specs/drafts/part6-v2-chapters -name '*.flashcards.yaml' | wc -l` (expect 57). Report any missing files.

2. **Spot-check 1 summary + 1 flashcard deck per chapter** (9 summaries, 9 decks total). For each:

   Summary checks:
   - Has Core Concept, Key Mental Models, Critical Patterns, Common Mistakes sections?
   - Word count within proficiency range (A2: 150-250, B1: 200-350)?
   - Captures an insight, not just section headings?
   - No em-dashes?

   Flashcard checks:
   - Deck ID matches `ch{NN}-{lesson-slug}` convention?
   - Card IDs match `{deck.id}-{NNN}` pattern?
   - Recall/thinking balance within 45-55%?
   - Recall backs under 15 words?
   - Thinking backs 20-40 words with reasoning chains?
   - Every front ends with `?`?
   - Thinking cards have `why` field, recall cards do not?
   - YAML parses without errors?

3. **Cross-deck collision check**: Run `grep -rh 'id:' specs/drafts/part6-v2-chapters/*.flashcards.yaml | sort | uniq -d` to find duplicate card IDs.

4. **Cross-deck concept check**: Sample 3 concepts that span chapters (two-layered model, HireFlow FTEs, maturity model). Verify they are carded from DIFFERENT angles in different chapters, not duplicated.

DELIVERABLE:
Write `specs/drafts/part6-v2-chapters/_quality-report.md` with:

- File count: expected vs actual
- Per-chapter spot-check results (PASS/FAIL per dimension)
- Cross-deck collision results
- Cross-deck concept diversity results
- Top 5 issues requiring fixes (ranked by severity)
- Overall quality score (1-10)

RULES:

- Execute autonomously without asking for confirmation
- If overall score < 7, list specific files that need regeneration

When finished, message the team lead: 'QUALITY-REVIEWER DONE — \_quality-report.md'"

---

## Lead Rules

1. Create the agent team, then spawn the architect-reference teammate (Phase 1)
2. Create tasks for all phases with dependencies: Phase 1 blocks Phase 2, Phase 2 blocks Phase 3
3. Do NOT generate summaries or flashcards yourself; coordinate only
4. Wait for architect-reference to complete before spawning ALL 9 generators simultaneously
5. Wait for ALL 9 generators to complete before spawning quality-reviewer
6. After quality review completes:
   - Read `_quality-report.md`
   - Run `find specs/drafts/part6-v2-chapters -name '*.summary.md' | wc -l` (expect 57)
   - Run `find specs/drafts/part6-v2-chapters -name '*.flashcards.yaml' | wc -l` (expect 57)
   - Report final counts and quality score to user
7. Shut down all teammates gracefully when done

---

## Anti-Patterns

- Do NOT spawn subagents; use agent team teammates
- Do NOT generate summaries or flashcards yourself; delegate to teammates
- Do NOT spawn Phase 2 generators before architect-reference completes
- Do NOT spawn quality-reviewer before ALL generators complete
- Do NOT run the flashcard validator script (files are in staging, not learn-app)
- Do NOT modify the source lesson `.md` files; only CREATE companion files
- Do NOT generate companions for README.md files

---

## Expected Output

When complete, the staging directory should contain:

```
specs/drafts/part6-v2-chapters/
├── _quality-brief.md                    (from architect-reference)
├── _quality-report.md                   (from quality-reviewer)
├── 01-the-architecture/
│   ├── 61-agent-factory-two-layered-model/
│   │   ├── 01-from-smartnotes-to-workforce.md          (existing)
│   │   ├── 01-from-smartnotes-to-workforce.summary.md  (NEW)
│   │   ├── 01-from-smartnotes-to-workforce.flashcards.yaml (NEW)
│   │   ├── 02-why-chatbot-armies-fail.md               (existing)
│   │   ├── 02-why-chatbot-armies-fail.summary.md       (NEW)
│   │   ├── 02-why-chatbot-armies-fail.flashcards.yaml  (NEW)
│   │   └── ... (same pattern for all lessons)
│   ├── 62-agents-as-economic-actors/
│   │   └── ... (5 lessons × 2 companion files)
│   ├── 63-agent-maturity-model/
│   │   └── ... (5 lessons × 2 companion files)
│   └── 64-the-hireflow-blueprint/
│       └── ... (7 lessons × 2 companion files)
├── 02-explore/
│   ├── 65-the-ten-eighty-ten-concept-paper/
│   │   └── ... (6 lessons × 2 companion files)
│   └── 66-the-domain-mastery-gate/
│       └── ... (5 lessons × 2 companion files)
└── 03-incubate/
    ├── 67-from-paper-to-agent-skills/
    │   └── ... (8 lessons × 2 companion files)
    ├── 68-simulation-driven-validation/
    │   └── ... (5 lessons × 2 companion files)
    └── 71-agent-skills-mcp-code-execution/
        └── ... (9 lessons × 2 companion files)

Total new files: 114 (57 summaries + 57 flashcard decks)
+ 2 meta files (_quality-brief.md, _quality-report.md)
```
