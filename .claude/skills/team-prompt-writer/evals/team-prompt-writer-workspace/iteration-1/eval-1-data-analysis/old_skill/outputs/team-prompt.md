# Team Prompt: Part 5 — Data Analysis Fundamentals

Create an agent team to implement Part 5: Data Analysis Fundamentals. This part teaches non-programmers (business professionals, managers, consultants) to analyze business data using AI-assisted workflows. Four chapters, sixteen lessons total. No Python or SQL code; all analysis via Cowork and natural language prompts.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates; do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

**Source document**: `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md`
**Output directory**: `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`
**Content type**: Book part (4 chapters, 16 lessons)
**Constraint**: NO Python or SQL code. All analysis via Cowork. Em-dash limit: 0-1 per file.

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself.
Use the shared task list to track all work.
Enforce phase ordering via task dependencies.

**Team composition**: 5 teammates total

| Teammate | Phase | Model | Role |
|---|---|---|---|
| architect | Phase 1 | Opus | Reads full source, produces architecture spec + briefs |
| reference-builder | Phase 2 | Opus | Produces one gold-standard lesson |
| writer-foundations | Phase 3 | Opus | Ch 35 (Data Mindset) + Ch 36 (Working With Spreadsheets) |
| writer-applied | Phase 3 | Opus | Ch 37 (AI-Assisted Analysis) + Ch 38 (From Analysis to Action) |
| quality-reviewer | Phase 4 | Opus | Reviews all output against spec and reference |

---

## Phase 1: Architect (1 teammate, blocks everything)

**Task**: `phase-1-architecture`
**Depends on**: nothing
**Spawn**: 1 teammate named `architect`
**Model**: Opus
**Plan approval**: enabled (you review the plan before the architect writes)

### Architect Teammate Prompt

"You are the architect teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` (full source spec, all 66 lines)
2. Find and read ONE existing high-quality chapter README + lesson from the book at `apps/learn-app/docs/` to understand the canonical format (pick a chapter from Part 2 or Part 3)
3. `.specify/memory/constitution.md` (project identity and standards)

DELIVERABLES (write all to `specs/drafts/part5-data-analysis/`):

1. **`architecture-spec.md`** — Master architecture spec containing:
   - Complete directory skeleton for `apps/learn-app/docs/05-Data-Analysis-Fundamentals/` (every file path)
   - Source-to-output mapping (which source lines map to which output files)
   - YAML frontmatter template for this part's lessons
   - Component/pattern catalog: how to render exercises, Cowork prompts, Try With AI sections, business scenarios, downloadable CSV references
   - Conversion rules: how source bullet points become full lesson prose
   - Cross-reference map (Ch35 to Part0, Ch36 to Part3/Ch29, Ch37 to Part1, Ch38 to Part0/Ch5)
   - Writer-to-scope assignment table

2. **`shared-brief.md`** — Shared writer's brief containing:
   - Part identity: what this content IS (mentor-voice data analysis for non-programmers), who it's for, what tone (experienced mentor who has made mistakes, not a textbook)
   - Recurring patterns: Cowork exercise format, business scenario format, Try With AI setup, CSV dataset references
   - Quality bar: real datasets, real business scenarios, real consequences of bad analysis
   - Cross-reference protocol (how to link back to earlier parts)
   - Em-dash rule: 0-1 per file (use colons, commas, parentheses, semicolons instead)
   - NO Python/SQL code constraint
   - NO phantom imports (never import `@site/src/components/Flashcards` or `@site/src/components/Quiz`)

3. **`brief-writer-foundations.md`** — Brief for writer-foundations:
   - Files to create: Ch 35 README + 4 lessons, Ch 36 README + 5 lessons (11 files total)
   - Source line ranges: lines 22-33 (Ch 35 and Ch 36 specs)
   - Chapter-specific notes: Ch 35 is conceptual/mindset (no Cowork yet), Ch 36 introduces Cowork for data work
   - Exit criteria: 11 files written, all with complete YAML frontmatter, exercises use Cowork, no code

4. **`brief-writer-applied.md`** — Brief for writer-applied:
   - Files to create: Ch 37 README + 4 lessons, Ch 38 README + 3 lessons (9 files total)
   - Source line ranges: lines 35-44 (Ch 37 and Ch 38 specs)
   - Chapter-specific notes: Ch 37 pairs AI with human judgment, Ch 38 is the capstone (synthesis + presentation)
   - Exit criteria: 9 files written, all with complete YAML frontmatter, capstone lesson is substantive

5. **`apps/learn-app/docs/05-Data-Analysis-Fundamentals/README.md`** — The Part 5 README following existing Part README format

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — [list of files created]'"

---

## Phase 2: Reference-Builder (1 teammate, blocks Phase 3)

**Task**: `phase-2-reference`
**Depends on**: `phase-1-architecture`
**Spawn**: 1 teammate named `reference-builder`
**Model**: Opus

### Reference-Builder Teammate Prompt

"You are the reference-builder teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/part5-data-analysis/architecture-spec.md` (the architect's master spec)
2. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 22-26 (Chapter 35 L01-L02, for source content to convert)
3. Find and read ONE high-quality existing lesson from `apps/learn-app/docs/` (pick one from a similar pedagogical level, e.g., a Part 2 or Part 3 lesson that teaches concepts without heavy code)

DELIVERABLE:

Create ONE gold-standard reference lesson at:
`apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md`

This lesson MUST demonstrate ALL patterns that writers will use:

- Complete YAML frontmatter (title, description, sidebar_position, skills, learning_objectives)
- Narrative opening in mentor voice (not textbook voice)
- Real business scenario illustrating the concept
- Cowork exercise section (Prompt, Verify, Extend pattern where applicable)
- Try With AI section with natural language prompts (setup line: "Use these prompts in Cowork or your preferred AI assistant.")
- Admonitions (:::tip, :::warning, :::note) used appropriately
- Cross-reference to Part 0 systematic thinking (as specified in source)
- Downloadable CSV reference (link to companion repo)
- Summary/key takeaways section
- Em-dash count: 0-1 in the entire file
- NO Python or SQL code
- NO phantom imports (never import Flashcards or Quiz components)

This reference lesson is the quality benchmark. Every writer must match it exactly in format and quality.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'REFERENCE-BUILDER DONE — [file path]'"

---

## Phase 3: Writers (2 teammates, all parallel)

Spawn ALL 2 writer teammates SIMULTANEOUSLY after Phase 2 completes.
Each writer teammate gets a fully self-contained prompt (inlined, no placeholders).

### Writer-Foundations Teammate Prompt

**Task**: `phase-3-writer-foundations`
**Depends on**: `phase-2-reference`
**Spawn**: 1 teammate named `writer-foundations`
**Model**: Opus

"You are the writer-foundations teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/part5-data-analysis/architecture-spec.md` (master spec with file paths, patterns, structure)
2. `specs/drafts/part5-data-analysis/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/drafts/part5-data-analysis/brief-writer-foundations.md` (YOUR specific brief with line ranges and exit criteria)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: quality benchmark, match it exactly)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 22-33 (read ONLY those lines: Ch 35 and Ch 36 specs)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO Python or SQL code anywhere
- NO phantom imports (never import Flashcards or Quiz React components)
- NO em-dashes except 0-1 per file (use colons, commas, parentheses, semicolons)
- All analysis exercises use Cowork with natural language prompts
- Exercise format: Prompt, Verify, Extend (for Cowork exercises)
- Exercises reference downloadable CSV files from companion repo
- Mentor voice throughout: experienced colleague, not textbook
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Create these files in `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`:

Chapter 35: The Data Mindset (conceptual, no Cowork exercises yet)
- `35-the-data-mindset/README.md` (chapter README)
- `35-the-data-mindset/02-asking-good-questions-of-data.md` (L02: hypothesis-first approach)
- `35-the-data-mindset/03-the-analysis-workflow.md` (L03: question to action pipeline)
- `35-the-data-mindset/04-common-statistical-traps.md` (L04: Simpson's paradox, base rate neglect, p-hacking)

Note: L01 already exists (created by reference-builder). Do NOT recreate it.

Chapter 36: Working With Spreadsheets (hands-on Cowork exercises)
- `36-working-with-spreadsheets/README.md` (chapter README)
- `36-working-with-spreadsheets/01-structuring-data-for-analysis.md` (L01: tidy data principles)
- `36-working-with-spreadsheets/02-using-cowork-for-data-exploration.md` (L02: pivot tables, filtering, grouping)
- `36-working-with-spreadsheets/03-visualization-principles.md` (L03: chart type selection, misleading charts)
- `36-working-with-spreadsheets/04-dashboard-design-for-decision-makers.md` (L04: dashboard design)
- `36-working-with-spreadsheets/05-exercise-build-a-kpi-dashboard.md` (L05: full exercise with raw sales data CSV)

Special notes:
- Ch 35 is conceptual/mindset. Exercises are thought experiments and discussion prompts, not Cowork workflows.
- Ch 36 introduces Cowork for data work. Reference Part 3 Ch 29 for Cowork context. Every lesson from L02 onward should have Cowork exercises.
- Ch 36 L05 is a full hands-on exercise lesson. It needs a downloadable sales data CSV reference and step-by-step Cowork prompts.

When finished, message the team lead: 'WRITER FOUNDATIONS DONE — [list all files created]'"

---

### Writer-Applied Teammate Prompt

**Task**: `phase-3-writer-applied`
**Depends on**: `phase-2-reference`
**Spawn**: 1 teammate named `writer-applied`
**Model**: Opus

"You are the writer-applied teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/part5-data-analysis/architecture-spec.md` (master spec with file paths, patterns, structure)
2. `specs/drafts/part5-data-analysis/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/drafts/part5-data-analysis/brief-writer-applied.md` (YOUR specific brief with line ranges and exit criteria)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: quality benchmark, match it exactly)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 35-44 (read ONLY those lines: Ch 37 and Ch 38 specs)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO Python or SQL code anywhere
- NO phantom imports (never import Flashcards or Quiz React components)
- NO em-dashes except 0-1 per file (use colons, commas, parentheses, semicolons)
- All analysis exercises use Cowork with natural language prompts
- Exercise format: Prompt, Verify, Extend (for Cowork exercises)
- Exercises reference downloadable CSV files from companion repo
- Mentor voice throughout: experienced colleague, not textbook
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Create these files in `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`:

Chapter 37: AI-Assisted Analysis (AI as analysis partner)
- `37-ai-assisted-analysis/README.md` (chapter README)
- `37-ai-assisted-analysis/01-when-to-use-ai-vs-do-it-yourself.md` (L01: AI sweet spots and blind spots)
- `37-ai-assisted-analysis/02-prompting-for-data-analysis.md` (L02: context, constraints, output format)
- `37-ai-assisted-analysis/03-evaluating-ai-generated-insights.md` (L03: checking methodology, not just results)
- `37-ai-assisted-analysis/04-exercise-full-analysis-cycle.md` (L04: full exercise with AI pair)

Chapter 38: From Analysis to Action (synthesis and communication)
- `38-from-analysis-to-action/README.md` (chapter README)
- `38-from-analysis-to-action/01-translating-numbers-into-recommendations.md` (L01: bridging analysis and decisions)
- `38-from-analysis-to-action/02-communicating-uncertainty.md` (L02: presenting uncertainty to non-technical stakeholders)
- `38-from-analysis-to-action/03-capstone-present-a-data-driven-recommendation.md` (L03: capstone, simulated board presentation)

Special notes:
- Ch 37 L02 should reference Part 1 prompt engineering. Ch 37 is about human+AI collaboration for analysis.
- Ch 37 L04 is a full exercise: the student runs a complete analysis cycle using Cowork as an AI pair.
- Ch 38 is the capstone chapter. L03 is the most important lesson in the part: student presents a data-driven recommendation to a simulated board. Make it substantive with a realistic business scenario.
- Ch 38 L02 should reference Part 0 Ch 5 (communicating what matters).

When finished, message the team lead: 'WRITER APPLIED DONE — [list all files created]'"

---

## Phase 4: Quality Reviewer (1 teammate, depends on ALL Phase 3)

**Task**: `phase-4-quality-review`
**Depends on**: `phase-3-writer-foundations`, `phase-3-writer-applied`
**Spawn**: 1 teammate named `quality-reviewer`
**Model**: Opus

### Quality Reviewer Teammate Prompt

"You are the quality-reviewer teammate for Part 5: Data Analysis Fundamentals.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/part5-data-analysis/architecture-spec.md` (master architecture spec)
2. `specs/drafts/part5-data-analysis/shared-brief.md` (shared writer's brief)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson)
4. ALL output files in `apps/learn-app/docs/05-Data-Analysis-Fundamentals/` (every file produced by both writers)

IMPORTANT: Extract ONLY universal patterns that apply to book content. Do not apply irrelevant checks.

UNIVERSAL CHECKS:

- Voice: mentor tone throughout, not textbook or robotic
- Formatting: consistent heading levels, admonition usage, YAML frontmatter completeness
- Terminology: "Cowork" (never "Claude in Excel" or "Claude Cowork"), consistent term usage
- Continuity: cross-references are correct (Ch35 to Part0, Ch36 to Part3/Ch29, Ch37 to Part1, Ch38 to Part0/Ch5)
- Exercise quality: Cowork exercises follow Prompt/Verify/Extend where applicable, downloadable CSV references present
- Em-dash count: 0-1 per file (flag any file exceeding this)
- No Python/SQL code anywhere
- No phantom imports (no Flashcards or Quiz component imports)

CONTENT-SPECIFIC CHECKS:

- Ch 35 is conceptual only (no Cowork exercises, thought experiments instead)
- Ch 36 introduces Cowork (L02 onward should have hands-on exercises)
- Ch 37 exercises pair human judgment with AI analysis
- Ch 38 L03 capstone is substantive with realistic board scenario
- All lessons match the reference lesson in format and quality
- Business scenarios feel real (specific numbers, industries, consequences)
- Statistical concepts explained without jargon or with clear definitions

DELIVERABLE:

Write a quality report to `specs/drafts/part5-data-analysis/quality-report.md` containing:

1. **Overall score**: Pass / Conditional Pass / Fail
2. **Per-writer summary**: writer-foundations and writer-applied scored separately
3. **Issues list**: each issue with file path, line reference, severity (Critical/Major/Minor), and fix description
4. **Recommendations**: ordered list of fixes if Conditional Pass or Fail

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'QUALITY REVIEWER DONE — [report path]'"

---

## Lead Coordination Rules

1. Create the team with TeamCreate (5 teammates: architect, reference-builder, writer-foundations, writer-applied, quality-reviewer).
2. Create ALL tasks upfront with dependencies:
   - `phase-1-architecture` (no dependencies)
   - `phase-2-reference` (depends on `phase-1-architecture`)
   - `phase-3-writer-foundations` (depends on `phase-2-reference`)
   - `phase-3-writer-applied` (depends on `phase-2-reference`)
   - `phase-4-quality-review` (depends on `phase-3-writer-foundations` AND `phase-3-writer-applied`)
3. Spawn `architect` teammate first. Wait for "ARCHITECT DONE" message.
4. Review the architect's directory skeleton in `specs/drafts/part5-data-analysis/architecture-spec.md`. Verify file paths and scope assignments make sense before proceeding.
5. Spawn `reference-builder` teammate. Wait for "REFERENCE-BUILDER DONE" message.
6. Verify the reference lesson exists and has complete YAML frontmatter.
7. Spawn BOTH writer teammates simultaneously (`writer-foundations` and `writer-applied`). Wait for BOTH "WRITER DONE" messages.
8. Spawn `quality-reviewer` teammate. Wait for "QUALITY REVIEWER DONE" message.
9. Read the quality report. If overall score is Fail, message the relevant writer(s) with specific fixes, wait for confirmation, then re-run quality review.
10. After quality review passes, run structural verification:
    - `ls -R apps/learn-app/docs/05-Data-Analysis-Fundamentals/` to see the full tree
    - Compare file count against architect's skeleton (expected: ~22 files including READMEs)
    - Spot-check YAML frontmatter from each writer (read first 15 lines of 2 files per writer)
    - `grep -r "import.*Flashcards\|import.*Quiz" apps/learn-app/docs/05-Data-Analysis-Fundamentals/` to check for phantom imports
    - `grep -rc "—" apps/learn-app/docs/05-Data-Analysis-Fundamentals/ | grep -v ":0$"` to check em-dash counts
11. Do NOT write content yourself. If a teammate fails or gets stuck, message them with guidance or spawn a replacement teammate.
12. When all verification passes, shut down all teammates and clean up the team.

---

## Model Preferences

| Teammate | Model | Rationale |
|---|---|---|
| architect | Opus | Needs to read full source and produce detailed specs |
| reference-builder | Opus | Gold-standard lesson must be highest quality |
| writer-foundations | Opus | Content quality is paramount |
| writer-applied | Opus | Capstone lesson requires strong synthesis |
| quality-reviewer | Opus | Needs judgment to evaluate quality |

---

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents. This is a TEAM with TEAMMATES.
- Do NOT write content yourself. Delegate everything to teammates.
- Do NOT spawn Phase 3 teammates before Phase 2 completes.
- Do NOT spawn quality reviewer before ALL writers complete.
- Do NOT let writer teammates read the full source draft (only architect reads it all).
- Do NOT approve architect's plan without reviewing the directory structure.
- Do NOT skip quality review or structural verification.
- Do NOT include Python or SQL code in any lesson (this is for non-programmers).
- Do NOT use "Claude in Excel" when you mean "Cowork" (they are different products).
- Do NOT exceed 0-1 em-dashes per file.
