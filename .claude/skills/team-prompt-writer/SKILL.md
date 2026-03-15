---
name: team-prompt-writer
description: >-
  Generate ready-to-paste agent team prompts for multi-chapter content production.
  Use when: (1) a new part or large feature needs parallel implementation by
  multiple teammates, (2) user says "create team prompt", "team for part X",
  "write team prompt", or references /team-prompt-writer. Reads a source
  spec/draft, analyzes structure, and produces a 3-phase pipeline prompt
  (architect → reference-builder → parallel writers) that enforces the agent
  team API (https://code.claude.com/docs/en/agent-teams). Prevents the
  redesign cycles caused by writers starting without a verified architectural
  spec or quality reference.
metadata:
  author: panaversity
  version: "1.0.0"
---

# Team Prompt Writer

Generate agent team prompts that coordinate 3-8 teammates in a phased pipeline.
The output is a **prompt file** — not content. The user pastes it into a
team-enabled Claude Code session to launch the team.

## Why This Skill Exists

Multi-chapter work (Parts, large features) failed 3x in Part 3 because:

1. Writers started before structure was verified → wrong paths, wrong format
2. No reference lesson → quality drift across parallel writers
3. Each writer interpreted the source differently → inconsistent output
4. Lead did work instead of coordinating → bottleneck

The 3-phase pipeline fixes all four by front-loading architecture and quality.

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
2. **Output directory** — where content will be created (e.g., `apps/learn-app/docs/00-Prelude/`)
3. **Content type** — what kind of content (book part, chapter set, feature docs)
4. **Special constraints** — anything unusual (no code, different exercise format, etc.)

```
$ARGUMENTS
```

---

## Execution: 4-Step Process

### Step 1: Analyze the Source

Read the source document completely. Extract:

```
SOURCE ANALYSIS:
- Total size: [N] lines / [N] tokens
- Structure: [N] chapters × [N] sections each
- Content type: [technical/pedagogical/mixed]
- Recurring patterns: [exercises, prompts, templates, etc.]
- Cross-references: [how sections reference each other]
- Special components: [tabs, collapsibles, code blocks, etc.]
```

### Step 2: Design the Team

Calculate the optimal team structure using these rules:

```
TEAM SIZING RULES:

Phase 1 — Always 1 architect teammate
Phase 2 — Always 1 reference-builder teammate
Phase 3 — Calculate writer count:

  IF total_chapters <= 4:  → 2 writers (pair chapters)
  IF total_chapters 5-10:  → 3-5 writers (pair chapters, ~2 each)
  IF total_chapters 11-20: → 5-7 writers (pair or triple chapters)
  IF total_chapters > 20:  → Cap at 8 writers (group chapters)

  CONSTRAINTS:
  - Each writer should produce 5-12 files (sweet spot)
  - No writer should need more than ~200 lines of source
  - Intro/framing writer is always separate from chapter writers
  - Capstone/conclusion writer is always separate if it exists
  - Zero file overlap between writers

TOTAL TEAMMATES = 1 (architect) + 1 (reference-builder) + N (writers)
```

### Step 3: Generate the Prompt

Write the team prompt to `specs/drafts/<feature>-team-prompt.md`.

The prompt MUST follow the structure in [references/pipeline-pattern.md](references/pipeline-pattern.md).

**Critical requirements for the generated prompt:**

#### Agent Team Enforcement

The prompt must explicitly prevent the lead from using subagents instead of teammates:

```markdown
IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the
Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team,
coordinated through the shared task list and inter-teammate messaging.
```

#### Phase 1: Architect Teammate

The architect teammate prompt must:

- Read the FULL source document (only teammate that reads it all)
- Read an existing reference chapter/lesson from the book for format
- Read the constitution (`.specify/memory/constitution.md`)
- Produce these artifacts:
  - Master architecture spec with complete directory skeleton
  - Shared writer's brief (identity, patterns, cross-references)
  - Per-writer briefs with exact line ranges, file paths, exit criteria
  - The output directory's README.md
- Use Opus model
- Have plan approval enabled (lead reviews before architect writes)

#### Phase 2: Reference-Builder Teammate

The reference-builder teammate prompt must:

- Read the architect's spec (NOT the full source)
- Read the first content section from the source (for conversion)
- Read a high-quality existing lesson from the book
- Produce ONE gold-standard lesson that demonstrates ALL patterns:
  - YAML frontmatter, narrative opening, all component types
  - Every Docusaurus pattern the architect defined
- Use Opus model

#### Phase 3: Writer Teammates (parallel)

Each writer teammate prompt must be SELF-CONTAINED (no placeholders). Include:

- Identity: "You are the writer-[name] teammate for [project]"
- Team membership: "You are part of an agent team — communicate via messages to the team lead"
- 5-step read order: architecture spec → shared brief → their brief → reference lesson → source lines
- Rules: match reference, no phantom imports, autonomous execution
- Scope: exact files to create, exact source line ranges
- Done signal: "When finished, message the team lead: 'WRITER [NAME] DONE — [file list]'"

#### Lead Coordination Rules

The prompt must include explicit rules for the lead:

1. Create team with TeamCreate
2. Create all tasks upfront with dependencies (Phase 1 → 2 → 3)
3. Do NOT write content — coordinate only
4. Wait for each phase before starting the next
5. After all teammates finish, run verification:
   - ls the output directory tree
   - Compare file count against architect's skeleton
   - Spot-check YAML frontmatter from each writer
   - grep for phantom imports
6. Shut down teammates, clean up team

#### Anti-Patterns Section

Always include this in the generated prompt:

```markdown
## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 3 teammates before Phase 2 completes
- Do NOT let writer teammates read the full source draft (only architect reads it all)
- Do NOT approve architect's plan without reviewing the directory structure
- Do NOT skip verification after all teammates finish
```

### Step 4: Verify the Output

After writing the prompt file, verify:

```
VERIFICATION CHECKLIST:
- [ ] Prompt opens with "Create an agent team"
- [ ] TeamCreate and teammate terminology used (never "subagent" or "Agent tool")
- [ ] Phase 1 architect reads full source, produces spec + briefs
- [ ] Phase 2 reference-builder produces one gold-standard lesson
- [ ] Phase 3 writer prompts are all self-contained (no placeholders)
- [ ] Each writer has zero file overlap with every other writer
- [ ] Total source lines assigned to writers = total source lines in document
- [ ] Lead rules include "Do NOT write content yourself"
- [ ] Anti-patterns section present
- [ ] Model preferences specified (Opus for architect/reference, configurable for writers)
```

Report the prompt file path and teammate count to the user.

---

## Adaptation Rules

The pipeline is the same structure every time. What changes:

| Dimension                 | Adapts Based On                                                    |
| ------------------------- | ------------------------------------------------------------------ |
| Teammate count            | Number of chapters/sections in source                              |
| Chapter pairing           | Content dependencies, cross-references                             |
| Architect deliverables    | Content type (book part vs feature docs vs migration)              |
| Reference lesson patterns | Docusaurus components needed (tabs, collapsibles, code, etc.)      |
| Writer brief detail       | How much source-to-output translation is needed                    |
| Model preferences         | Quality requirements, budget constraints                           |
| Verification checks       | Content-specific (YAML frontmatter for book, tests for code, etc.) |

## Content-Type Variations

### Book Part (default)

- Architect produces: directory skeleton, YAML template, component patterns, writer briefs
- Reference lesson demonstrates: full lesson format with all Docusaurus patterns
- Writers produce: README + lesson files per chapter
- Verification: YAML frontmatter, no phantom imports, file count

### Feature Documentation

- Architect produces: directory skeleton, doc template, API reference structure
- Reference doc demonstrates: full doc page with code samples, diagrams, admonitions
- Writers produce: doc pages per feature area
- Verification: links work, code samples compile, no broken refs

### Migration/Rewrite

- Architect produces: mapping of old→new paths, migration rules, writer briefs
- Reference file demonstrates: one fully migrated file
- Writers produce: migrated files per assigned scope
- Verification: old content covered, new format consistent, no regressions

---

## Reference

- Pipeline pattern: [references/pipeline-pattern.md](references/pipeline-pattern.md)
- Agent teams docs: https://code.claude.com/docs/en/agent-teams
- Working example: `specs/drafts/part0-team-prompt.md` (Part 0 implementation)

---

**Version**: 1.0.0 (March 2026)
**Produces**: Team prompt files at `specs/drafts/<feature>-team-prompt.md`
**Prevents**: Multi-cycle redesigns from uncoordinated parallel writing
