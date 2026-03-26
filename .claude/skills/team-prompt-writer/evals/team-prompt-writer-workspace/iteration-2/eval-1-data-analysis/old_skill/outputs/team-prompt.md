# Team Prompt: Part 5 — Data Analysis Fundamentals

Create an agent team to implement Part 5: Data Analysis Fundamentals. This part teaches non-programmers (business professionals, managers, consultants) to analyze business data using AI-assisted workflows. Four chapters, 16 lessons, zero Python/SQL. All analysis uses Cowork and natural language prompts.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates; do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

**Source material**: `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md`
**Output directory**: `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`
**Content type**: Book part (4 chapters, 16 lessons, for non-programmers)

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself.
Use the shared task list to track all work.
Enforce phase ordering via task dependencies.

**Team composition (5 teammates):**

| Phase | Teammate | Model | Purpose |
|-------|----------|-------|---------|
| 1 | architect | Opus | Analyze source, produce spec + briefs |
| 2 | reference-builder | Opus | Build one gold-standard lesson |
| 3 | writer-data-foundations | Sonnet | Ch 35 + Ch 36 (9 lessons + 2 READMEs) |
| 3 | writer-ai-action | Sonnet | Ch 37 + Ch 38 (7 lessons + 2 READMEs) |
| 4 | quality-reviewer | Opus | Review all output for consistency + quality |

---

## Phase 1: Architect (1 teammate, blocks everything)

**Task**: `architecture-spec`
**Depends on**: nothing
**Model**: Opus
**Plan approval**: enabled (review the plan before architect writes)

Spawn teammate with this prompt:

```
"You are the architect teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` (FULL source spec, 66 lines)
2. An existing high-quality chapter README + lesson from the book. Use `ls -d apps/learn-app/docs/*/` to discover available parts, then pick a part with similar pedagogical style (non-code, conceptual). Read one README and one lesson as format references.
3. `.specify/memory/constitution.md` (voice, identity, quality standards)

DELIVERABLES — write ALL of these:

1. **Master architecture spec** at `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/spec.md`:
   - Complete directory skeleton (every file path for all 4 chapters, 16 lessons)
   - Naming convention for lesson files (NN-slug-name.md)
   - YAML frontmatter template (skills, learning_objectives, sidebar_position, etc.)
   - Component/pattern catalog: what Docusaurus components are needed (admonitions, tabs, collapsibles, etc.)
   - Source-to-output mapping: which source lines map to which output files
   - Conversion rules specific to this part:
     * NO Python or SQL code anywhere
     * All analysis via Cowork and natural language prompts
     * Exercises use downloadable CSV files from companion repo
     * Em-dash limit: 0-1 per file (use colons, semicolons, commas instead)
     * Mentor voice: feel like advice from someone who made these mistakes, not a textbook
   - Writer-to-scope assignment table

2. **Shared writer's brief** at `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/shared-brief.md`:
   - Part identity: who the reader is (business professional, not programmer), what transformation this part delivers
   - Recurring patterns: Cowork exercises (Prompt then Verify then Extend), data scenarios, statistical concepts explained without math
   - Cross-reference map:
     * Ch 35 L01 references Part 0 systematic thinking
     * Ch 36 L02-L04 uses Cowork (taught in Part 3 Ch 29)
     * Ch 37 L02 references Part 1 prompt engineering
     * Ch 38 L02 references Part 0 Ch 5 (communicating what matters)
   - Quality bar: real datasets, real business scenarios, real consequences of bad analysis
   - Tone protocols: mentor voice, appropriate caution alongside confidence

3. **Per-writer briefs**:
   - `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/brief-writer-data-foundations.md`
     * Scope: Ch 35 (lines 22-27 of source) + Ch 36 (lines 29-34 of source)
     * Files to create: Ch 35 README + 4 lessons, Ch 36 README + 5 lessons = 11 files
     * Special notes: Ch 35 is purely conceptual (no Cowork), Ch 36 introduces Cowork for first time in this part, L05 is a hands-on exercise
     * Exit criteria: 11 files created, all YAML frontmatter complete, no Python/SQL, em-dash count 0-1 per file
   - `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/brief-writer-ai-action.md`
     * Scope: Ch 37 (lines 36-40 of source) + Ch 38 (lines 42-45 of source)
     * Files to create: Ch 37 README + 4 lessons, Ch 38 README + 3 lessons = 9 files
     * Special notes: Ch 37 focuses on AI collaboration patterns (references Part 1), L04 is a full-cycle exercise. Ch 38 is the capstone arc, L03 is a simulated board presentation
     * Exit criteria: 9 files created, all YAML frontmatter complete, no Python/SQL, em-dash count 0-1 per file

4. **Part README** at `apps/learn-app/docs/05-Data-Analysis-Fundamentals/README.md`:
   - Follow the format of existing part READMEs in the book
   - Overview of what this part teaches and the transformation it delivers
   - Chapter listing with brief descriptions
   - Prerequisites (Parts 0-4 completed, Cowork installed)

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — spec.md, shared-brief.md, brief-writer-data-foundations.md, brief-writer-ai-action.md, README.md'"
```

---

## Phase 2: Reference-Builder (1 teammate, blocks Phase 3)

**Task**: `reference-lesson`
**Depends on**: `architecture-spec`
**Model**: Opus

Spawn teammate with this prompt:

```
"You are the reference-builder teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/spec.md` (architect's master spec)
2. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 22-27 (Chapter 35 source content only)
3. An existing high-quality lesson from the book. Use `ls` to find a conceptual lesson (not code-heavy) from Part 0 or another non-programming part. Read it as your format benchmark.

DELIVERABLE:

Create ONE gold-standard reference lesson at:
`apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md`

This lesson MUST demonstrate ALL of the following patterns:

- Complete YAML frontmatter (title, description, sidebar_position, skills, learning_objectives)
- Narrative opening that hooks the reader with a real scenario (mentor voice, not textbook)
- Core concept explanation without code or math (use analogies, business examples)
- At least one admonition (:::tip, :::warning, or :::note) used appropriately
- A 'Try With AI' section with Cowork prompts (Prompt then Verify then Extend pattern)
- A 'Key Takeaways' section
- Cross-reference to Part 0 systematic thinking (as specified in source)
- Zero Python or SQL code
- Em-dash count: 0-1 in the entire file (use colons, semicolons, commas for all other cases)
- NO phantom imports (do NOT import components like Flashcards or Quiz that do not exist)

This lesson is the quality benchmark. Every writer will match it exactly.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'REFERENCE-BUILDER DONE — 01-what-data-can-and-cannot-tell-you.md'"
```

---

## Phase 3: Writers (2 teammates, all parallel)

Spawn ALL 2 writer teammates SIMULTANEOUSLY after Phase 2 completes. Each writer teammate gets a fully self-contained prompt (no placeholders, no shared instructions to include).

### Writer: data-foundations (Ch 35 + Ch 36)

**Task**: `write-data-foundations`
**Depends on**: `reference-lesson`
**Model**: Sonnet

Spawn teammate with this prompt:

```
"You are the writer-data-foundations teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/spec.md` (master spec with file paths, patterns, structure)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/shared-brief.md` (shared context: identity, patterns, cross-references)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/brief-writer-data-foundations.md` (YOUR specific brief with scope details)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: match this quality and format exactly)
5. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 22-34 (source spec for Ch 35 and Ch 36 ONLY; do NOT read the full document)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO Python or SQL code anywhere (all analysis via Cowork + natural language)
- NO phantom imports (do NOT import Flashcards, Quiz, or any component unless you verify it exists)
- Em-dash limit: 0-1 per file (use colons for definitions, semicolons for contrasts, commas/parentheses for asides)
- Mentor voice throughout: real scenarios, real consequences, not textbook prose
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Chapter 35: The Data Mindset
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/README.md` (chapter README)
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/02-asking-good-questions-of-data.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/03-the-analysis-workflow.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/04-common-statistical-traps.md`
NOTE: L01 already exists (reference lesson). Create the remaining 3 lessons + README = 4 files.

Chapter 36: Working With Spreadsheets
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/README.md` (chapter README)
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/01-structuring-data-for-analysis.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/02-using-cowork-for-data-exploration.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/03-visualization-principles.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/04-dashboard-design-for-decision-makers.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/05-exercise-build-a-kpi-dashboard.md`
NOTE: Ch 36 introduces Cowork within this part (students learned Cowork in Part 3 Ch 29). L02 uses Cowork for pivot tables, filtering, grouping. L05 is a hands-on exercise with downloadable CSV data.

TOTAL: 10 files (4 for Ch 35 + 6 for Ch 36). Note: L01 of Ch 35 is the reference lesson and already exists.

When finished, message the team lead: 'WRITER DATA-FOUNDATIONS DONE — [list all 10 files created]'"
```

### Writer: ai-action (Ch 37 + Ch 38)

**Task**: `write-ai-action`
**Depends on**: `reference-lesson`
**Model**: Sonnet

Spawn teammate with this prompt:

```
"You are the writer-ai-action teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/spec.md` (master spec with file paths, patterns, structure)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/shared-brief.md` (shared context: identity, patterns, cross-references)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/brief-writer-ai-action.md` (YOUR specific brief with scope details)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: match this quality and format exactly)
5. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 36-45 (source spec for Ch 37 and Ch 38 ONLY; do NOT read the full document)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO Python or SQL code anywhere (all analysis via Cowork + natural language)
- NO phantom imports (do NOT import Flashcards, Quiz, or any component unless you verify it exists)
- Em-dash limit: 0-1 per file (use colons for definitions, semicolons for contrasts, commas/parentheses for asides)
- Mentor voice throughout: real scenarios, real consequences, not textbook prose
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Chapter 37: AI-Assisted Analysis
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/README.md` (chapter README)
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/01-when-to-use-ai-vs-do-it-yourself.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/02-prompting-for-data-analysis.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/03-evaluating-ai-generated-insights.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/04-exercise-full-analysis-cycle.md`
NOTE: Ch 37 L02 references Part 1 prompt engineering. L04 is a full analysis cycle exercise with AI pair.

Chapter 38: From Analysis to Action
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/README.md` (chapter README)
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/01-translating-numbers-into-recommendations.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/02-communicating-uncertainty.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/03-capstone-data-driven-recommendation.md`
NOTE: Ch 38 is the capstone arc. L02 references Part 0 Ch 5. L03 is the capstone: simulated board presentation.

TOTAL: 9 files (5 for Ch 37 + 4 for Ch 38).

When finished, message the team lead: 'WRITER AI-ACTION DONE — [list all 9 files created]'"
```

---

## Phase 4: Quality Reviewer (1 teammate, depends on ALL Phase 3 writers)

**Task**: `quality-review`
**Depends on**: `write-data-foundations`, `write-ai-action`
**Model**: Opus

Spawn teammate with this prompt:

```
"You are the quality-reviewer teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/spec.md` (architect's master spec)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/shared-brief.md` (shared writer's brief)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: quality benchmark)
4. ALL lesson files across all 4 chapter directories in `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`

IMPORTANT: Extract universal quality patterns from the reference lesson and architecture spec. Check all files against these standards.

UNIVERSAL CHECKS (apply to every file):

- Voice: mentor tone, not textbook. Real scenarios and consequences.
- Formatting: complete YAML frontmatter (title, description, sidebar_position, skills, learning_objectives)
- Terminology: 'Cowork' (never 'Claude in Excel' or 'Claude Cowork'). Consistent naming throughout.
- Continuity: cross-references match the map in shared-brief.md. No broken or missing references.
- Exercise quality: Cowork exercises follow Prompt then Verify then Extend pattern where applicable.
- Em-dash compliance: 0-1 em-dashes per file maximum.
- No Python or SQL code in any file.
- No phantom imports (no import statements for Flashcards, Quiz, or nonexistent components).

CONTENT-SPECIFIC CHECKS:

- Ch 35: purely conceptual, no Cowork exercises (Cowork is introduced in Ch 36)
- Ch 36: Cowork exercises present in L02-L05, tidy data principles in L01
- Ch 37: AI collaboration patterns, references to Part 1 prompt engineering in L02
- Ch 38: capstone arc builds to board presentation in L03, uncertainty communication in L02 references Part 0 Ch 5
- Statistical concepts explained without formulas or code (use analogies and examples)
- Each chapter builds on the previous (no forward references to unlearned concepts)

DELIVERABLE:

Write a quality report at:
`apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture/quality-report.md`

Format:
- Overall score: Pass / Conditional Pass / Fail
- Per-writer summary (what worked, what needs fixing)
- Issues list with file path, line number, severity (Critical/Major/Minor), and fix description
- A final recommendation: ship as-is, fix-then-ship, or rewrite

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md [Pass/Conditional Pass/Fail]'"
```

---

## Lead Coordination Rules

1. **Create team** with TeamCreate. Name the team `part5-data-analysis`.
2. **Create all tasks** upfront with dependencies:
   - `architecture-spec` (no dependencies)
   - `reference-lesson` (depends on: `architecture-spec`)
   - `write-data-foundations` (depends on: `reference-lesson`)
   - `write-ai-action` (depends on: `reference-lesson`)
   - `quality-review` (depends on: `write-data-foundations`, `write-ai-action`)
3. **Enforce phase ordering**: do NOT spawn Phase 2 until Phase 1 completes. Do NOT spawn Phase 3 until Phase 2 completes. Do NOT spawn Phase 4 until ALL Phase 3 writers complete.
4. **Do NOT write content yourself**. You coordinate only. Your only direct writes are task updates and messages.
5. **Review architect's plan** before approving (plan approval is enabled for architect). Verify the directory skeleton covers all 16 lessons + 4 chapter READMEs + 1 part README = 21 files.
6. **After Phase 2**: read the reference lesson yourself. Verify it has YAML frontmatter, mentor voice, Cowork exercise pattern, zero code, and 0-1 em-dashes.
7. **Spawn Phase 3 writers simultaneously** after reference lesson is verified.
8. **Monitor writer progress**: if a writer goes idle for more than 5 minutes, send a message to check status.
9. **After ALL Phase 3 writers complete**: verify file count before spawning quality reviewer.
10. **After quality review**: read the quality report.
    - If **Pass**: proceed to structural verification (step 11).
    - If **Conditional Pass**: message relevant writers with specific fixes. Wait for fixes. Re-run quality review.
    - If **Fail**: assess scope of failure. Message writers with detailed fix instructions or spawn replacement teammates.
11. **Structural verification** (do this yourself after quality passes):
    - `ls -R apps/learn-app/docs/05-Data-Analysis-Fundamentals/` to verify directory tree
    - Confirm file count: 21 files (1 part README + 4 chapter READMEs + 16 lessons)
    - Spot-check YAML frontmatter from one file per writer
    - Grep for phantom imports: search for `import` statements across all files
    - Grep for Python/SQL: search for `python`, `sql`, `def `, `SELECT ` across all files
    - Grep for em-dash overuse: search for `—` and count per file
12. **Cleanup**: send shutdown_request to all teammates. Then TeamDelete.
13. **Report**: message the user with final status, file count, and any quality notes.

---

## Model Preferences

| Teammate | Model | Rationale |
|----------|-------|-----------|
| architect | Opus | Must analyze full source, design architecture, produce detailed briefs |
| reference-builder | Opus | Must produce highest-quality reference lesson |
| writer-data-foundations | Sonnet | Follows established patterns from reference and briefs |
| writer-ai-action | Sonnet | Follows established patterns from reference and briefs |
| quality-reviewer | Opus | Must evaluate quality nuances, catch subtle issues |

---

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents. This is a TEAM with TEAMMATES.
- Do NOT write content yourself. Delegate everything to teammates.
- Do NOT spawn Phase 3 teammates before Phase 2 completes.
- Do NOT spawn quality reviewer before ALL writers complete.
- Do NOT let writer teammates read the full source draft (only architect reads it all).
- Do NOT skip quality review or verification.
- Do NOT approve architect's plan without reviewing the directory structure.
- Do NOT include Python or SQL code in any lesson (this part is for non-programmers).
- Do NOT use `import` statements for components that do not exist (Flashcards, Quiz are NOT React components).
- Do NOT exceed 1 em-dash per file. Use colons, semicolons, and commas instead.
