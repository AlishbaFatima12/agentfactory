# Research-First Protocol for Part 6 Chapters

## THE FUNDAMENTAL PRINCIPLE: Students Are Not Starting From Zero

Part 6 is a 30-chapter progressive build. By the time a student reaches YOUR chapter, they have CONCRETE DELIVERABLES from prior chapters. Your chapter does not exist in isolation. It receives inputs from previous chapters and produces outputs that later chapters consume.

**PRIOR WORK the student already has when they reach your chapter:**
(See `references/chapter-invocations.md` for the specific PRIOR_WORK per chapter)

**This means:**

- Your Predict scenario should use artifacts the student already built (not hypothetical new ones)
- Your Investigate section should trace how prior deliverables connect to this chapter's new concept
- Your Make capstone MUST build on prior deliverables, extending what exists rather than starting from scratch
- Your backward references should be specific: "the Resume Screener skill you wrote in Ch 67" not "a skill"

**The build chain for Part 6:**

```
C1/Ch61 (factory concept) → C5/Ch65 (concept paper) → C7/Ch67 (extract 4 skills) → C8/Ch68 (simulate skills) →
C9-C10/Ch69-70 (expose skills as MCP tools) → C11/Ch71 (skills + MCP runtime integration) →
C13-C14/Ch73-74 (run skills on agent SDKs) → C15/Ch75 (NanoClaw runtime) →
C16-C17/Ch76-77 (add persistence) → C18-C21/Ch78-81 (build 4 FTEs using all of the above) →
C22-C23/Ch82-83 (expose via API + ChatKit) → C24/Ch84 (orchestrate) →
C25-C27/Ch85-87 (memory, knowledge, security) → C28-C29/Ch88-89 (test + eval) → C30/Ch90 (assemble all)
```

Your chapter sits at a specific point in this chain. Know what comes before (your inputs) and what comes after (your outputs). Never pretend the student is a blank slate.

---

## Phase 1: Research (BEFORE writing anything)

### Step 1.1: Read the OLD chapter for technical grounding

Read ALL lesson files in `apps/learn-app/docs/06-Building-Agent-Factories/{OLD_CH_DIR}/`

Extract and note:

- Every real import statement (e.g., `from mcp.server.fastmcp import FastMCP`)
- Every real class/function name from the library
- Every real API pattern demonstrated
- The lesson topics and their progression
- The lesson count (this is your MINIMUM lesson count)

If the chapter has no old equivalent (check Chapter Reference Table), skip this step.

### Step 1.2: Fetch current official documentation

Use Context7 to fetch real, current library docs:

```
mcp__context7__resolve-library-id: libraryName="{LIBRARY_NAME}"
mcp__context7__query-docs: libraryId=<resolved_id>, query="{LIBRARY_QUERY}"
```

Do this for EACH major subtopic in the chapter. Budget: 3 Context7 calls.
Extract: current API surface, correct class names, any changes since old chapter was written.

If {LIBRARY_NAME} is blank (conceptual chapter), skip this step.

### Step 1.3: Read the governing artifacts

1. Your chapter's section from the v4 outline: `specs/drafts/part6_building_agent_factory/part6_v4_outline.md` (read ONLY the relevant C# section)
2. The character-driven-narrative skill: `.claude/skills/character-driven-narrative/SKILL.md`
3. The character voice references: `.claude/skills/character-driven-narrative/references/voices.md` and `.claude/skills/character-driven-narrative/references/patterns.md`

### Step 1.4: Plan lesson structure

Based on Steps 1.1-1.3, design your lesson list:

- Lesson count: at least as many as the OLD chapter had
- Each lesson covers ONE major topic (not generic template sections)
- File names describe topics (e.g., `03-transport-layers-stdio-and-sse.md` not `03-investigate-part1.md`)
- For PRIMM-AI+ chapters: each major topic gets its own Predict-Investigate cycle within the lesson
- Write the lesson plan as a list before starting

---

## Phase 2: Write (lesson by lesson)

### 2.1: YAML frontmatter (COMPLETE, every field)

```yaml
---
sidebar_position: N
title: "Descriptive Title About the Topic"
description: "What the student learns in this lesson"
chapter: { CH_NUM }
lesson: N
duration_minutes: X
keywords: [topic-specific keywords]

skills:
  - name: "Skill Name"
    proficiency_level: "A1|A2|B1|B2|C1|C2"
    category: "Conceptual|Technical|Applied|Soft"
    bloom_level: "Remember|Understand|Apply|Analyze|Evaluate|Create"
    digcomp_area: "..."
    measurable_at_this_level: "..."

learning_objectives:
  - objective: "..."
    proficiency_level: "..."
    bloom_level: "..."
    assessment_method: "..."

cognitive_load:
  new_concepts: X
  assessment: "..."

differentiation:
  extension_for_advanced: "..."
  remedial_for_struggling: "..."
---
```

### 2.2: Content with REAL APIs

- ALL code uses imports/patterns from Phase 1 research (Steps 1.1 + 1.2)
- NEVER invent a class, function, or import that doesn't exist in the docs
- ALL functions have full type annotations
- ALL code is runnable as-is (no pseudocode, no ellipsis)
- ALL examples use HireFlow domain entities

### 2.3: James/Emma dialogue

- James 60%, Emma 40%
- James makes ARCHITECTURAL mistakes (not syntactic): use the {JAMES_MISTAKE} variable
- Emma corrects with systems thinking
- MUST apply the 7 dialogue patterns across the chapter (see SKILL.md)
- Tag Test: cover the names, you should still know who's speaking

### 2.4: Template compliance

For **PRIMM-AI+** chapters:

- STOP_AND_PREDICT [AI-FREE] box before explanation
- Code presented WITHOUT explanation before predict box
- At least 1 trace table per chapter
- At least 1 planted bug with Error Taxonomy classification
- At least 2 edge case investigations
- At least 1 AI-assisted investigation
- Parsons problem with line count per v4 outline
- 2-3 Modify exercises (A simple, B medium, C advanced) each with mini-Predict
- Make capstone: [AI-FREE] spec-first, ruff → pyright → pytest, git commit
- 5x3 self-assessment rubric (Developing/Competent/Fluent)

For **Socratic** chapters:

- Opening Scenario → Guided Discovery → Concept Crystallization → Applied Exercise → Reflection → Chapter Quiz
- Concepts EMERGE from dialogue, then get NAMED in Crystallization
- 8-12 MCQs in Chapter Quiz

### 2.5: Cross-chapter threads

- If {ECONOMIC_ACTORS} = true: include budget tracking, resource envelopes, cost attribution. Reference Ch 62 and forward-ref to Ch 90.
- If {SMARTNOTES} = true: use `NoteStore.create()` and `NoteStore.search()` by name. Reference Part 4 and Ch 61.
- If {SCAFFOLDING} != N/A: follow the specified level exactly (see SKILL.md Scaffolding Withdrawal section).
- At least 2 backward references to prior chapters
- At most 1 forward reference per lesson

### 2.6: Format rules

- No em-dashes (use colons, commas, semicolons, periods)
- No forbidden phrases ('simply', 'obviously', 'just remember', 'don't worry about')
- Bold terms on first use, define immediately

---

## Phase 3: Verify (after ALL lessons written)

Self-check against this list:

- [ ] Every lesson has COMPLETE YAML frontmatter (skills, learning_objectives, cognitive_load, differentiation)
- [ ] Every code block uses REAL imports verified from Phase 1
- [ ] No invented classes, functions, or APIs
- [ ] File names describe topics (not template sections)
- [ ] Lesson count >= old chapter lesson count (for technical chapters)
- [ ] James/Emma dialogue present with 7 patterns used across chapter
- [ ] Tag Test passes (voices distinguishable without names)
- [ ] Zero em-dashes, zero forbidden phrases
- [ ] Template compliance (PRIMM-AI+ or Socratic) complete
- [ ] Cross-chapter threads present where required
- [ ] At least 2 backward references per chapter
- [ ] No `import` statements for non-existent components (Flashcards, Quiz are NOT React components)

Report: `CH{CH_NUM} DONE: [file list] — [lesson count] lessons — verified against [old chapter lesson count] old lessons`
