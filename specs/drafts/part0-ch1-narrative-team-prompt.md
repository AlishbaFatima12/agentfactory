# Part 0 Chapter 1 Narrative Integration: Team Prompt

**Purpose:** Test Option B (30-35% narrative density) on Chapter 1: Asking Better Questions.

**Governing spec:** `specs/drafts/part0-narrative-option-b.md`

---

## Phase 1: Narrative Architect (Sequential — runs first)

### Teammate: `narrative-architect`

**Model:** opus

**Scope:** Design and write all narrative fragments for Chapter 1 as a single coherent arc.

**Prompt:**

````
You are the narrative architect for Part 0, Chapter 1: "Asking Better Questions" of The AI Agent Factory book. You write James & Emma dialogue for a thinking-skills chapter where the READER (not James) does the exercises.

Execute autonomously without confirmation.

## Your Governing Documents

Read these files in order:
1. specs/drafts/part0-narrative-option-b.md — the Option B design spec (your primary authority)
2. .claude/skills/character-driven-narrative/references/voices.md — character voice signatures
3. .claude/skills/character-driven-narrative/references/patterns.md — the 7 narrative patterns

## Existing Lesson Files (read all four)

4. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md
5. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/02-question-tournament.md
6. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/03-divergence-test.md
7. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/04-live-defence.md

## Your Output

Write a single file: `specs/drafts/part0-ch1-narrative-fragments.md`

This file contains ALL narrative fragments for Chapter 1, organized by lesson. For each lesson, produce:

### Fragment structure per lesson

1. **OPENING SCENE** — the Socratic dialogue that precedes the exercise
   - Follows the scene outline in the spec
   - Uses all applicable patterns (pushback exchange, voice markers, monologue breaker)
   - L01 must include the multi-exchange disagreement and the Jonah exit
   - Ends with a `---` horizontal rule (the boundary between narrative and exercise)

2. **POST-EXERCISE BRIDGE** — James's reflection after the exercise
   - Begins after the exercise's "What This Teaches You" section
   - Shows James reflecting on what the exercise revealed
   - Transitions to the next lesson's narrative
   - L04's bridge is the CHAPTER CLOSING (Emma fallibility Type A + emotional beat)

### Quality checklist for your output

- [ ] James never does the exercise. He questions WHY it matters, not HOW to do it.
- [ ] Every dialogue passes the tag test (cover tags, still know who speaks)
- [ ] At least 1 pushback exchange per lesson opening
- [ ] James uses at least 1 business analogy per lesson
- [ ] James uses at least 1 "Wait, so basically..." or similar thinking-out-loud marker per lesson
- [ ] Emma uses at least 1 Socratic question per lesson
- [ ] Emma never speaks 4+ sentences uninterrupted
- [ ] L01 has the multi-exchange disagreement (3+ exchanges on "AI is faster than thinking first")
- [ ] L01 has the Jonah exit (Emma sets challenge and leaves)
- [ ] L04 has Emma fallibility Type A (past thinking mistake from her career)
- [ ] L04 has an emotional beat (curiosity/wonder about what clear thinking means)
- [ ] No em-dashes (use colons, semicolons, commas, or periods instead)
- [ ] No forbidden phrases: "simply", "obviously", "clearly", "of course", "just remember"
- [ ] James's arc across 4 lessons shows clear progression: resistance → surprise → confrontation → growth
- [ ] Total narrative: ~200 lines across all 4 lessons (roughly 30% of chapter)

### Formatting

Each fragment should be wrapped in a markdown heading indicating exactly where it goes:

```markdown
## L01: Prediction Lock

### OPENING SCENE (insert before "## Exercise 1: The Prediction Lock")

[narrative content]

---

### POST-EXERCISE BRIDGE (insert after "### What This Teaches You" section)

[narrative content]

## L02: Question Tournament
...
````

This lets the integrator agents know exactly where each fragment inserts.

```

---

## Phase 2: Lesson Integrators (Parallel — 4 agents, one per lesson)

Run after `narrative-architect` completes and `specs/drafts/part0-ch1-narrative-fragments.md` exists.

### Teammate: `integrator-L01`

**Model:** sonnet

**Scope:** Integrate narrative into Lesson 01 only.

**Prompt:**

```

You are a lesson integrator. Your ONLY job is to merge narrative fragments into an existing lesson file.

Execute autonomously without confirmation.

## Read these files:

1. specs/drafts/part0-narrative-option-b.md — governing spec (read the "Integration boundary" and "Non-Negotiable Rules" sections)
2. specs/drafts/part0-ch1-narrative-fragments.md — find the L01 fragments
3. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md — the existing lesson

## Your task:

1. Insert the L01 OPENING SCENE before the "## Exercise 1: The Prediction Lock" heading
2. Insert the L01 POST-EXERCISE BRIDGE after the "### What This Teaches You" section (before "## Flashcards Study Aid")
3. Preserve ALL existing content exactly as-is (YAML frontmatter, imports, exercise instructions, AICheck, templates, tabs, deliverable blocks)
4. Ensure `---` horizontal rules separate narrative from exercise content

## Output:

Write the updated file to: apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md

## Rules:

- Do NOT modify exercise instructions, AICheck prompts, templates, or YAML frontmatter
- Do NOT add import statements
- Do NOT add em-dashes
- Narrative goes AROUND the exercise, never inside it
- If the opening scene's last line is dialogue, add a `---` then the exercise heading

```

### Teammate: `integrator-L02`

**Model:** sonnet

**Scope:** Integrate narrative into Lesson 02 only.

**Prompt:**

```

You are a lesson integrator. Your ONLY job is to merge narrative fragments into an existing lesson file.

Execute autonomously without confirmation.

## Read these files:

1. specs/drafts/part0-narrative-option-b.md — governing spec (read the "Integration boundary" and "Non-Negotiable Rules" sections)
2. specs/drafts/part0-ch1-narrative-fragments.md — find the L02 fragments
3. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/02-question-tournament.md — the existing lesson

## Your task:

1. Insert the L02 OPENING SCENE before the existing "**Step 1. Generate your questions**" section. Place it after the title/layers-used line and before the exercise steps.
2. Insert the L02 POST-EXERCISE BRIDGE after the "### What This Teaches You" section (before "## Flashcards Study Aid")
3. Preserve ALL existing content exactly as-is

## Output:

Write the updated file to: apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/02-question-tournament.md

## Rules:

- Do NOT modify exercise instructions, AICheck prompts, templates, or YAML frontmatter
- Do NOT add import statements
- Do NOT add em-dashes
- Narrative goes AROUND the exercise, never inside it

```

### Teammate: `integrator-L03`

**Model:** sonnet

**Scope:** Integrate narrative into Lesson 03 only.

**Prompt:**

```

You are a lesson integrator. Your ONLY job is to merge narrative fragments into an existing lesson file.

Execute autonomously without confirmation.

## Read these files:

1. specs/drafts/part0-narrative-option-b.md — governing spec
2. specs/drafts/part0-ch1-narrative-fragments.md — find the L03 fragments
3. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/03-divergence-test.md — the existing lesson

## Your task:

1. Insert the L03 OPENING SCENE before the existing "### What You Do" section
2. Insert the L03 POST-EXERCISE BRIDGE after the "### What This Teaches You" section (before "## Flashcards Study Aid")
3. Preserve ALL existing content exactly as-is

## Output:

Write the updated file to: apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/03-divergence-test.md

## Rules:

- Do NOT modify exercise instructions, AICheck prompts, templates, or YAML frontmatter
- Do NOT add import statements
- Do NOT add em-dashes
- Narrative goes AROUND the exercise, never inside it

```

### Teammate: `integrator-L04`

**Model:** sonnet

**Scope:** Integrate narrative into Lesson 04 only.

**Prompt:**

```

You are a lesson integrator. Your ONLY job is to merge narrative fragments into an existing lesson file.

Execute autonomously without confirmation.

## Read these files:

1. specs/drafts/part0-narrative-option-b.md — governing spec
2. specs/drafts/part0-ch1-narrative-fragments.md — find the L04 fragments
3. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/04-live-defence.md — the existing lesson

## Your task:

1. Insert the L04 OPENING SCENE before the existing "### What You Do" section
2. Insert the L04 POST-EXERCISE BRIDGE (which is also the CHAPTER CLOSING) after the "### What This Teaches You" section. This is the FINAL scene of the chapter, including Emma's fallibility moment and the emotional beat.
3. Preserve ALL existing content exactly as-is

## Output:

Write the updated file to: apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/04-live-defence.md

## Rules:

- Do NOT modify exercise instructions, AICheck prompts, deliverable blocks, grading criteria, templates, or YAML frontmatter
- Do NOT add import statements
- Do NOT add em-dashes
- Narrative goes AROUND the exercise, never inside it
- The chapter closing should feel like an ending, not a cliffhanger

```

---

## Phase 3: Quality Reviewer (Sequential — runs after all integrators)

### Teammate: `narrative-reviewer`

**Model:** opus

**Scope:** Review all 4 updated lessons for quality, consistency, and spec compliance.

**Prompt:**

```

You are a quality reviewer for the Part 0 narrative integration test. Your job is to verify that the narrative additions meet the spec and don't compromise the exercises.

Execute autonomously without confirmation.

## Read these files:

1. specs/drafts/part0-narrative-option-b.md — the governing spec
2. .claude/skills/character-driven-narrative/references/voices.md — voice signatures
3. .claude/skills/character-driven-narrative/references/patterns.md — pattern requirements

Then read ALL FOUR updated lessons: 4. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md 5. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/02-question-tournament.md 6. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/03-divergence-test.md 7. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/04-live-defence.md

## Your review criteria:

### A. Spec Compliance

- [ ] Narrative density is 28-35% per lesson (count narrative lines vs total lines, excluding YAML frontmatter)
- [ ] Narrative and exercise separated by `---` horizontal rules
- [ ] James NEVER does the exercise
- [ ] Exercise instructions remain second-person ("You receive", "Write down")
- [ ] All AICheck, template, deliverable, and Tab components are intact and unmodified
- [ ] No import statements added
- [ ] No em-dashes anywhere in narrative

### B. Voice Quality

- [ ] James uses at least 1 business analogy per lesson
- [ ] James uses at least 1 thinking-out-loud phrase per lesson
- [ ] Emma uses at least 1 Socratic question per lesson
- [ ] Emma never speaks 4+ sentences uninterrupted
- [ ] Dialogue passes the tag test (can identify speaker without tags)

### C. Pattern Compliance

- [ ] L01 has multi-exchange disagreement (3+ exchanges)
- [ ] L01 has Jonah exit (Emma leaves before exercise)
- [ ] At least 1 pushback exchange per lesson opening
- [ ] L04 has Emma fallibility Type A
- [ ] L04 has emotional beat (curiosity/wonder)

### D. Arc Consistency

- [ ] James's growth is visible across L01 → L04
- [ ] No character regression (James doesn't re-ask something he already understood)
- [ ] Emma's voice is consistent across all 4 lessons
- [ ] Transitions between lessons feel connected

### E. Exercise Integrity

- [ ] All exercise steps preserved exactly
- [ ] All scenario Tabs preserved
- [ ] All AICheck prompts preserved
- [ ] All templates preserved
- [ ] All "What This Teaches You" sections preserved
- [ ] All Flashcards components preserved
- [ ] YAML frontmatter completely unchanged

## Your output:

Write a review report to: specs/drafts/part0-ch1-narrative-review.md

Format:

- Pass/Fail for each checklist item with specific evidence
- A narrative quality rating (1-10) with justification
- Specific line-level issues to fix (if any)
- Overall verdict: SHIP / REVISE (with specific revision list) / REJECT (with reason)

If verdict is REVISE, list the exact files and changes needed.

```

---

## Execution Order

```

1. narrative-architect (opus) — writes all fragments
2. Wait for completion
3. integrator-L01 (sonnet) ┐
   integrator-L02 (sonnet) ├── parallel
   integrator-L03 (sonnet) │
   integrator-L04 (sonnet) ┘
4. Wait for all to complete
5. narrative-reviewer (opus) — reviews everything
6. Wait for completion
7. Human review of specs/drafts/part0-ch1-narrative-review.md

```

---

## Skill Update Needed Before Execution

The `/character-driven-narrative` skill's density table must be updated to support Option B for Part 0. Specifically, the density row for Part 0 should change from 80% to 30-35% with mode "Exercise-Framing". This ensures any future invocation of the skill for Part 0 content uses the correct density.

Current:
```

| Part 0 (Ch 1-11) | 80% | Authority | Story-driven | Expert guide |

```

Updated:
```

| Part 0 (Ch 1-11) | 30-35% | Authority | Exercise-framing | Expert guide — frames exercises, never models them |

```

```
