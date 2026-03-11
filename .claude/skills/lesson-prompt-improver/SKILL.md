---
name: lesson-prompt-improver
description: "Analyse and fix prompt quality issues in Part 3 (Business Domain Agent Workflows) lesson files. Use this skill whenever working on lesson prompt architecture, replacing fabricated agent outputs, adding skill names to prompts, removing inline data injections, or improving Try With AI sections. Triggers on: lesson prompt review, prompt architecture fix, fabricated output replacement, intent table conversion, prompt quality audit for chapters 14-23."
---

# Lesson Prompt Improver

Analyse Part 3 lesson files for prompt quality issues and apply fixes following established patterns. This skill encodes the prompt architecture decisions from the Ch23 rewrite into a reusable workflow.

## When to Use

- Reviewing lesson prompts for quality issues
- Replacing fabricated agent outputs with intent tables
- Adding natural skill names to exercise prompts
- Removing redundant inline data injections
- Auditing Try With AI sections
- Preparing lessons for Cowork-based delivery

## The Six Defect Types

Scan every lesson file for these defects, in priority order:

### Defect 1: Fabricated Agent Output (CRITICAL)

Code blocks that pretend to show exact agent output with specific fake numbers, company details, scores, or content. These anchor students on wrong expectations since their output WILL differ.

**Detection pattern:**

- Code blocks preceded by `**Output:**` or `**Sample Output:**`
- Code blocks containing specific scores (e.g., `87/100`, `$180,000`), dates, company names with fabricated metrics
- Multi-line code blocks showing formatted agent reports with `══════` or `────────` decorations

**Exceptions — DO NOT convert these:**

- **Anti-pattern examples**: Deliberately bad output shown for teaching contrast (e.g., generic briefs, weak follow-ups). These are labelled or discussed as failures.
- **Student-generated data**: Output from prompts where the student explicitly tells the agent what data to generate (the prompt contains the parameters).
- **Prompt blocks**: Instructions the student types — these are inputs, not fabricated outputs.
- **Framework tables**: Scoring models, classification tiers, routing rules — these define the framework, not fake agent output.
- **Comparison tables**: Side-by-side structural comparisons (Sales vs Marketing, Base vs Extension) that describe patterns, not specific outputs.

**Fix: Replace with intent table + disclaimer**

```markdown
**What to expect:** The agent produces [description]. Your output will vary, but look for these sections:

| Section        | Intent                   | What to Verify                  |
| -------------- | ------------------------ | ------------------------------- |
| [Section name] | [What this section does] | [How student evaluates quality] |

:::note Your output will vary
[1-2 sentences explaining what the output depends on and what the teaching point is — structure, not specific numbers.]
:::
```

### Defect 2: Missing Skill Name in Prompt

Exercise prompts that don't name the skill being used. Students need to know which skill activates.

**Detection pattern:**

- Prompts starting with generic verbs: "Research...", "Score...", "Draft...", "Build..."
- Prompts that describe what to do but not which skill does it

**Fix: Add natural skill name**

```
# Before
Research Crescent Freight Karachi — full intelligence brief

# After
Use the prospect-research skill to research Crescent Freight Karachi — full intelligence brief
```

Style: "Use the X skill to..." — natural language, NOT `/skill-name` slash-command style.

Only add skill names to **primary exercise prompts** (the first prompt in a section and Try With AI Prompt 1). Don't add to every follow-up prompt in a flow.

### Defect 3: Inline Data Injection

Prompts that tell the agent to "Read demo-data.md for..." or "Read sales-marketing.local.md for..." — redundant when folder instructions are set in L01.

**Detection pattern:**

- `Read demo-data.md` in prompt code blocks (outside L01)
- `Read sales-marketing.local.md` in prompt code blocks
- `[Paste or reference the...]` placeholder text

**Fix:** Remove the injection line. The folder instructions (set in L01) handle data file references. Exception: L01 itself legitimately uses these as setup examples.

### Defect 4: Fiction-Researching Prompt

Prompts that would cause the agent to web-search fictional entities, producing hallucinated results.

**Detection pattern:**

- Prompts asking to "research" or "pull current data" on fictional companies from demo-data.md
- Prompts referencing NexaFlow's fictional prospects without grounding in demo-data.md

**Fix:** Ensure the prompt references demo-data.md (via folder instructions) rather than asking the agent to discover information about fictional entities via web search.

### Defect 5: Narrative Referencing Fabricated Content

Paragraphs after a fabricated output block that reference specific numbers, scores, or details FROM that output. When the output is replaced with an intent table, the narrative becomes orphaned.

**Detection pattern:**

- Paragraphs that quote specific scores from a now-removed fabricated block
- Paragraphs starting with "Read the report..." or "Notice the..." followed by specific fabricated details

**Fix:** Generalise the narrative to reference structural elements rather than specific numbers. Example:

```
# Before
Meridian scores 87 — HOT. The Fit dimension shows 36/40 because...

# After
If your top prospect scores HOT, examine the dimension breakdown to understand why. The Fit dimension should reflect industry match...
```

### Defect 6: Plugin/Tool Terminology

Incorrect references to plugins, tools, or platforms.

**Detection pattern:**

- `"sales-marketing plugins"` → should be `"Sales, Marketing, and RevOps extension plugins"`
- `"Claude in Excel"` in chapters 18+ → should be `"Cowork"` (Ch17 uses "Claude in Excel" correctly)

**Fix:** Apply correct terminology per `.claude/rules/cowork-content.md`.

## Workflow

### Single Lesson Audit

1. Read the lesson file completely
2. Scan for each defect type in priority order
3. For each defect found, note the line range and defect type
4. Present a summary table: `| Line Range | Defect Type | Current Content (first line) | Recommended Fix |`
5. Apply fixes after user confirmation (or autonomously if instructed)

### Chapter-Wide Audit

1. List all lesson files in the chapter
2. Run single-lesson audit on each, collecting defects
3. Present chapter-level summary: `| File | Defects Found | Critical (Fabricated Output) | Quick Fixes |`
4. Prioritise: fix all Defect 1 (fabricated outputs) first, then Defect 2-6

### Part-Wide Audit

1. List all chapters in Part 3
2. Run chapter-wide audit on each
3. Present part-level summary with chapter priorities
4. Recommend execution order (most defects first, or chapter-by-chapter)

## Intent Table Design Guide

When replacing fabricated outputs, design intent tables that:

1. **Match the skill's output structure** — sections should correspond to what the skill actually produces
2. **Verify against source data** — "What to Verify" column tells students to check output against their demo-data.md, ICP, or research briefs
3. **Teach the diagnostic** — each row teaches what to evaluate, not what to expect literally
4. **Keep to 4-7 rows** — enough to cover key sections, not so many that it overwhelms

The `:::note Your output will vary` disclaimer should:

- Name what the output depends on (demo-data.md content, ICP configuration, research brief quality)
- State the teaching point in one sentence (structure, not numbers; audit, not content; pattern, not specifics)
- Optionally guide what to do if output is unexpected ("If X scores lower than expected, check which dimension is dragging the score")

## Reference Files

See `references/part3-chapters.md` for the chapter-by-chapter status of prompt quality fixes.
