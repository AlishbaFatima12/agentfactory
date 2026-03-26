---
name: team-prompt-writer
description: >-
  Generate ready-to-paste agent team prompts for multi-chapter content production.
  Use when: (1) a new part or large feature needs parallel implementation by
  multiple teammates, (2) user says "create team prompt", "team for part X",
  "write team prompt", or references /team-prompt-writer. Reads a source
  spec/draft, deeply analyzes domain AND structure, then produces a phased
  pipeline prompt (architect → reference-builder → parallel writers → quality
  reviewer) using agent teams (not subagents). Embeds domain wisdom and quality
  frameworks into every teammate prompt so writers make smart judgment calls
  instead of following generic templates. Can also launch the team directly
  if the user wants immediate execution.
metadata:
  author: panaversity
  version: "2.1.0"
---

# Team Prompt Writer

Generate agent team prompts that coordinate 3-8 teammates in a phased pipeline.
The output is a **prompt file** the user pastes into Claude Code to launch
the team. Alternatively, if the user asks, launch the team directly from
this session.

## Why This Skill Exists

Multi-teammate work failed repeatedly because:

1. Writers started before structure was verified → wrong paths, wrong format
2. No reference lesson → quality drift across parallel writers
3. Each writer interpreted the source differently → inconsistent output
4. Lead did work instead of coordinating → bottleneck
5. **Teammate prompts were cookie-cutter templates** — writers got file
   assignments and "match the reference" without understanding the domain,
   what quality means, or how to handle judgment calls

The phased pipeline fixes #1-4 by front-loading architecture and quality.
The **domain deep dive** (Step 1) fixes #5 by embedding real understanding
into every teammate's prompt.

## Agent Teams vs Subagents (CRITICAL)

The generated prompt MUST produce an **agent team**, not subagents.
The difference matters:

| | Subagents | Agent Team |
|---|-----------|-----------|
| Communication | Report back to main only | Teammates message each other |
| Coordination | Main agent manages all | Shared task list, self-coordination |
| Context | Isolated, results summarized | Independent sessions, full context |
| Best for | Focused tasks | Complex parallel work needing collaboration |

**In the generated prompt**, use clear natural language:

```
Create an agent team to [task]. Spawn [N] teammates:
- architect: [role]
- reference-builder: [role]
- writer-X: [role]
...
```

The lead Claude will handle the team creation mechanics. What matters
is that the prompt clearly says "agent team" and "teammates" (not
"subagents" or "spawn agents").

**Anti-pattern that causes failure:** Any phrasing that tells the lead
"do NOT use the Agent tool" — this confuses the lead because the Agent
tool with team context IS how teammates are spawned. Instead, say
"spawn teammates in an agent team, NOT independent subagents."

## When to Use

- New book part with 3+ chapters
- Multi-chapter rewrite or migration
- Any content production needing 3+ parallel writers
- Large feature with independent implementation tracks

## When NOT to Use

- Single chapter → use `/sp.chapter` instead
- Single lesson → use `content-implementer` subagent
- Non-content work (platform code, tests) → use standard subagents

---

## Inputs Required

Before invoking, gather:

1. **Source document** — path to the spec, draft, or planning doc
2. **Output directory** — where content will be created
3. **Content type** — book part, chapter set, feature docs, migration
4. **Special constraints** — anything unusual

```
$ARGUMENTS
```

---

## Execution: 5-Step Process

### Step 1: Domain Deep Dive

This is the most important step. Before designing any team, deeply understand
what the content IS, not just how it's structured.

Read the source document completely. Then extract TWO things:

#### A. Structural Analysis

```
STRUCTURAL ANALYSIS:
- Total size: [N] lines
- Structure: [N] chapters × [N] sections each
- Content type: [technical/pedagogical/mixed]
- Recurring patterns: [exercises, prompts, templates, etc.]
- Cross-references: [how sections reference each other]
- Special components: [tabs, collapsibles, code blocks, etc.]
```

#### B. Domain Wisdom Extraction

Read the source asking these questions. Your answers become the foundation
of every teammate prompt:

```
DOMAIN WISDOM:
1. LEARNING JOURNEY: What does the reader know at start vs end?
   What transformation does this content create?

2. CORE CONCEPTS: What 3-5 ideas MUST land? Everything else supports these.

3. QUALITY DIMENSIONS: What matters most for THIS content?
   (technical accuracy? engagement? practical applicability?
    pedagogical progression? authentic examples?)

4. COMMON PITFALLS: What would a mediocre version look like?
   What specific mistakes produce generic content?

5. CONTEXT: What came before? What comes after? How does this
   content connect to the larger work?

6. DECISION FRAMEWORK: When a writer faces ambiguity, what
   principles guide their choices? (e.g., "authenticity over
   elegance", "learner struggle is valuable, not a bug")
```

Also read:
- The constitution (`.specify/memory/constitution.md`)
- A high-quality reference from the book (for format AND quality baseline)
- The chapter/part README for pedagogical context

**You cannot generate a good team prompt without this analysis.** If the
source is too thin to answer these questions, tell the user what's missing.

### Step 2: Design the Team

Calculate the optimal team structure:

```
Phase 1 — 1 architect
Phase 2 — 1 reference-builder
Phase 3 — N writers:
  ≤4 chapters:  2 writers
  5-10:         3-5 writers (~2 chapters each)
  11-20:        5-7 writers
  20+:          cap at 8

  Each writer: 5-12 files, ≤200 source lines
  Zero file overlap between writers
  Separate intro/framing and capstone writers

Phase 4 — 1 quality reviewer

TOTAL = 1 + 1 + N + 1
```

### Step 3: Generate the Prompt

Write to `specs/drafts/<feature>-team-prompt.md`.

Follow the structure in [references/pipeline-pattern.md](references/pipeline-pattern.md).

**Critical requirements for the generated prompt:**

#### Opening: Team Preamble

Every generated prompt MUST open with clear agent team language.
Do NOT include setup instructions about enabling features or
environment variables. The prompt assumes the session is ready.

```markdown
Create an agent team to [describe the project].

You are the team lead. You coordinate. You do NOT write content yourself.
Spawn each worker below as a TEAMMATE in the agent team (not as a
subagent). Use the shared task list to track all work. Enforce phase
ordering: Phase 1 must complete before Phase 2 starts, Phase 2 before
Phase 3, and so on.
```

#### Phase 1: Architect (1 teammate)

- Reads the FULL source (only teammate that does)
- Reads reference chapter + constitution
- Produces:
  - **Master architecture spec** (directory skeleton + content quality spec)
  - **Domain wisdom brief** (core concepts, quality dimensions, decision
    frameworks — extracted from YOUR Step 1 analysis)
  - **Per-writer briefs** (line ranges, file paths, exit criteria, AND
    chapter-specific quality notes)
  - Output directory README
- Model: Opus, plan approval enabled

#### Phase 2: Reference-Builder (1 teammate)

- Reads architect's spec + domain wisdom brief
- Reads first content section + existing reference
- Produces ONE gold-standard file demonstrating ALL patterns
- Model: Opus

#### Phase 3: Writer Teammates (N, all parallel)

Each writer prompt must be SELF-CONTAINED (no placeholders). Include:

```
IDENTITY: "You are writer-[name] for [project]."
TEAM: "You are part of an agent team — communicate via messages."

WHAT YOU'RE BUILDING AND WHY:
[2-3 sentences from domain wisdom — the transformation, why it matters]

YOUR CHAPTERS IN CONTEXT:
[Learning journey position. What reader knows coming in. What they gain.
How your chapters connect to surrounding material.]

READ IN ORDER:
1. [architecture spec]
2. [domain wisdom brief]
3. [your writer brief]
4. [reference file]
5. [source lines N-M]

QUALITY FRAMEWORK:
- [Dimension 1]: [concrete meaning for these chapters]
- [Dimension 2]: [concrete meaning]
- [Dimension 3]: [concrete meaning]

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- [Specific pitfall for this content]
- [Another pitfall]

WHEN IN DOUBT:
- [Decision principle 1]
- [Decision principle 2]

YOUR SCOPE:
- [Exact files with paths]
- [Source line ranges]
- [Chapter-specific notes]

RULES:
- Match reference format and depth
- [Project-specific rules]
- Execute autonomously without asking for confirmation

Done signal: 'WRITER [NAME] DONE — [file list]'
```

**The domain sections are not optional.** They're what turns a template-
follower into a writer who makes good judgment calls. Extract them from
your Step 1 analysis and customize per writer's chapters.

#### Phase 4: Quality Reviewer (1 teammate)

- Reads domain wisdom brief + architecture + reference + ALL outputs
- Evaluates against domain quality dimensions (not just structural checks)
- Produces quality report with per-writer scores and issues
- Model: Opus

#### Lead Coordination Rules

Include these in the generated prompt:

```markdown
## Lead Rules

1. Create the agent team, then spawn teammates for each phase
2. Create tasks with phase dependencies (Phase 1 → 2 → 3 → 4)
3. Do NOT write content yourself — coordinate only
4. Wait for each phase to complete before spawning the next
5. After quality review, run structural verification:
   - ls the output directory tree
   - Compare file count against architect's skeleton
   - Spot-check YAML frontmatter from each writer
6. Shut down all teammates gracefully when done
```

#### Anti-Patterns Section

Always include:

```markdown
## Anti-Patterns
- Do NOT spawn subagents — use agent team teammates
- Do NOT write content yourself — delegate to teammates
- Do NOT spawn Phase 3 before Phase 2 completes
- Do NOT let writers read the full source (only architect does)
- Do NOT skip the quality reviewer phase
```

### Step 4: Verify the Output

```
VERIFICATION CHECKLIST:
- [ ] Prompt opens with "Create an agent team" (clear team language)
- [ ] Lead identity says "You coordinate. You do NOT write content."
- [ ] "do NOT use Agent tool" does NOT appear anywhere
- [ ] Anti-patterns say "subagents" as the thing to avoid (not "Agent tool")
- [ ] No setup/enablement instructions (no env vars, no settings.json)
- [ ] Domain wisdom brief is in architect deliverables
- [ ] Writer prompts have "WHAT YOU'RE BUILDING AND WHY" section
- [ ] Writer prompts have "QUALITY FRAMEWORK" section
- [ ] Writer prompts have "WHAT MEDIOCRE LOOKS LIKE" section
- [ ] Writer prompts have "WHEN IN DOUBT" section
- [ ] Zero file overlap between writers
- [ ] Phase 4 quality reviewer is present
- [ ] Lead rules present with phase ordering enforcement
```

Report the prompt file path and teammate count.

### Step 5: Offer Execution (Optional)

After generating and verifying the prompt, ask the user:

> "Team prompt saved to `specs/drafts/<feature>-team-prompt.md`
> ([N] teammates across 4 phases). Would you like me to launch
> the team now, or will you paste it into a separate session?"

**If the user wants immediate execution:**

1. Read the generated prompt file
2. Follow its instructions as the team lead:
   - Create the agent team
   - Create all tasks with phase dependencies
   - Spawn Phase 1 architect teammate
   - Wait for completion, then proceed through phases
   - Coordinate, verify, and clean up
3. The prompt you generated IS your playbook

This turns the skill from "prompt generator" to "team orchestrator"
when the user wants it.

---

## Content-Type Variations

### Book Part (default)

- Wisdom: learning journey, pedagogical progression, core concepts per chapter
- Quality: engagement, accuracy, cognitive load management
- Mediocre: textbook-dry, no real-world grounding, recall-testing exercises

### Feature Documentation

- Wisdom: user journey, API design rationale, error handling philosophy
- Quality: completeness, findability, code sample correctness
- Mediocre: API reference without context, no "why" explanations

### Migration/Rewrite

- Wisdom: what current system does well, fragility areas, user impact
- Quality: parity (zero regressions), test coverage, verifiability
- Mediocre: mechanical translation without understanding design intent

---

## Reference

- Pipeline pattern: [references/pipeline-pattern.md](references/pipeline-pattern.md)
- Agent teams docs: https://code.claude.com/docs/en/agent-teams

---

**Version**: 2.1.0 (March 2026)
**Produces**: Team prompt files at `specs/drafts/<feature>-team-prompt.md`
**Prevents**: Subagent fallback, generic teammates, multi-cycle redesigns
