# Part 0 Agent Team Prompt

## How to use

Paste the prompt below into a Claude Code session with agent teams enabled.
The session becomes the **team lead**. It creates teammates and coordinates work.

Before running:

1. Ensure `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in settings.json
2. Recommended: `claude --teammate-mode in-process` (more stable than tmux)
3. Budget: 8 teammate sessions, expect heavy token usage
4. Docs: https://code.claude.com/docs/en/agent-teams

---

## The Prompt

````
Create an agent team to implement Part 0 of the AI Agent Factory book as Docusaurus content.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the
Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated
through the shared task list and inter-teammate messaging.

## Source Material

The complete draft lives at:
  specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md

Output directory (NEW — does not exist yet):
  apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/

## What Part 0 IS

10 chapters teaching thinking skills (questioning, error detection, systems thinking,
first principles, communication, AI collaboration, ethics, creativity, decision-making,
meta-learning). Every exercise uses web-based AI (claude.ai, chatgpt.com). No code.
No setup. The deliverable is always documented evidence of thinking, never "the answer."

Each chapter has exactly 4 exercises using 6 assessment layers (Prediction Lock,
Reasoning Receipt, Live Defence, Contradiction Challenge, Divergence Test, Iterative
Drafts). Every exercise ends with a Thinking Score Card (5 dimensions, 1-10 each).

## Team Structure: 3-Phase Pipeline (8 Teammates)

You are the team lead. You coordinate. You do NOT write any content yourself.
Use the shared task list to track all work. Enforce phase ordering via task dependencies.

### Phase 1 Tasks (BLOCKS everything else)

Create these tasks FIRST. Phase 2 and 3 tasks depend on Phase 1 completion.

**Task: "Architect — design Part 0 structure"**
Spawn a teammate named "architect". Use Opus model. Require plan approval before
they make changes — review their plan to ensure the directory structure and
conversion patterns are sound, then approve.

Teammate prompt for architect:

"You are the architect teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

READ THESE IN ORDER:
1. specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md (FULL — all 1235 lines)
2. apps/learn-app/docs/01-General-Agents-Foundations/01-agent-factory-paradigm/README.md
   (reference chapter README format)
3. One reference lesson from any existing chapter (discover via:
   ls apps/learn-app/docs/01-General-Agents-Foundations/01-agent-factory-paradigm/*.md | head -3
   — read the first lesson to understand YAML frontmatter, MDX structure, admonitions)
4. .specify/memory/constitution.md (principles governing all content)

YOUR DELIVERABLES (write all these files):

1. specs/drafts/part0-architecture.md — Master spec containing:
   - Complete directory skeleton with every file path to be created
   - Lesson-to-draft mapping (which source draft lines each lesson file covers)
   - YAML frontmatter template with all required fields for Part 0 lessons
   - Docusaurus component patterns mapping source format to output:
     * AI Check prompts → code blocks with copy button
     * Scenario Selectors → Docusaurus Tabs component
     * Deliverable Templates → collapsible <details> sections
     * Solo Learner Alternatives → :::tip admonitions
     * Building On cross-refs → relative markdown links
     * Score Card tables → markdown tables
   - Source draft conversion rules: the draft uses pipe-table formatting
     (| text |) for all callouts — map each callout type to the correct
     Docusaurus pattern (:::tip, :::note, :::warning, <details>, <Tabs>)
   - Chapter-to-teammate assignment for the 6 writer teammates

2. specs/drafts/part0-reference-brief.md — Shared writer's brief containing:
   - Part 0 identity: pedagogical layer L1 (Manual Foundation, no code),
     target audience (complete beginners, no programming assumed),
     assessment philosophy (process over output, thinking over answers)
   - The 6 assessment layers explained concisely
   - Thinking Score Card format (5 dimensions, 1-10 each)
   - Cross-chapter dependency map (which skills build on which)
   - Feedback Challenge Protocol pattern
   - Solo Learner Alternative pattern

3. specs/drafts/part0-writer-briefs/ — One brief per writer teammate:
   - writer-intro.md: Source lines, special handling for Six Layers, Forward Map,
     Score Card system, Baseline assessment, Instructor Guide
   - writer-ch1-2.md: Source lines, chapter details, cross-refs needed
   - writer-ch3-4.md: Source lines, chapter details, cross-refs needed
   - writer-ch5-6.md: Source lines, chapter details, cross-refs needed
   - writer-ch7-8.md: Source lines, chapter details, cross-refs needed
   - writer-ch9-10.md: Source lines, chapter details, Portfolio, Post-Assessment,
     Growth Map handling

   Each writer brief MUST include:
   - Exact file paths to create (from the skeleton)
   - Source draft line ranges they own
   - Chapter-specific 'Building On' references to link to
   - Chapter-specific Docusaurus patterns (e.g., Tabs for scenario variants)
   - Exit criteria: what 'done' means for their scope

4. apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/README.md
   (follow format from 01-General-Agents-Foundations README)

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — [summary of files created]'"

### Phase 2 Tasks (depend on Phase 1, BLOCK Phase 3)

After architect completes, create this task and spawn this teammate.

**Task: "Reference Builder — create gold-standard lesson"**
Spawn a teammate named "reference-builder". Use Opus model.

Teammate prompt for reference-builder:

"You are the reference-builder teammate for Part 0.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/drafts/part0-architecture.md (architect's spec — your source of truth)
2. specs/drafts/part0-reference-brief.md (shared writer's brief)
3. specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md lines 138-237
   (Chapter 1 section only)
4. One high-quality existing lesson from the book (architect's spec will name one,
   or discover via:
   ls apps/learn-app/docs/01-General-Agents-Foundations/01-agent-factory-paradigm/*.md
   and read lesson 01 or 02)

YOUR DELIVERABLE:

Create the FIRST lesson file for Chapter 1 as the gold-standard reference that all
6 writer teammates will pattern-match against. This is the most important file in
Part 0 — every writer teammate uses it as their quality benchmark.

File path: use what part0-architecture.md specifies. If unspecified, use:
apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md

This lesson covers Chapter 1, Exercise 1: The Prediction Lock.

It MUST demonstrate ALL of these patterns:
- Complete YAML frontmatter (all fields from architect's template)
- Narrative opening (NOT 'In this lesson you will learn...')
- Scenario selector using Docusaurus Tabs component with 3 options
- AI Check prompt in a copy-friendly code block (```text with copy button)
- Deliverable Template in a collapsible <details> section
- Thinking Score Card prompt embedded at the end of the AI Check
- Solo Learner Alternative in a :::tip admonition
- 'What This Teaches You' reflection section
- Cross-reference links where needed (Ch1 Ex1 has minimal back-refs)
- NO phantom component imports (NEVER import Flashcards or Quiz)

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'REFERENCE LESSON DONE — [file path]'"

### Phase 3 Tasks (depend on Phase 2 — ALL 6 run in parallel)

After reference-builder completes, create ALL 6 writer tasks and spawn ALL 6
writer teammates SIMULTANEOUSLY. Each owns a distinct set of files with zero overlap.

Each writer teammate gets the SAME preamble (inlined below — no placeholders).

---

**Task: "Writer Intro — introduction + baseline + instructor guide"**
Spawn teammate "writer-intro". Use opus model.

Teammate prompt:

"You are the writer-intro teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/drafts/part0-architecture.md (master spec — file paths, patterns, structure)
2. specs/drafts/part0-reference-brief.md (shared context — layers, score card, protocols)
3. specs/drafts/part0-writer-briefs/writer-intro.md (YOUR specific brief with line ranges)
4. The reference lesson file created by the reference-builder teammate (path is in
   part0-architecture.md — this is your quality benchmark, match it exactly)
5. Your assigned lines from specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md
   (line ranges specified in your writer brief — read ONLY those lines, not the full doc)

RULES:
- Match the reference lesson's quality, format, and Docusaurus patterns exactly
- NO phantom imports (NEVER import Flashcards or Quiz components)
- Execute autonomously without asking for confirmation

YOUR SCOPE — Create these files (exact paths from architect spec):
- Introduction lesson: Why This Part Comes First, Six Layers, How AI Checks Thinking,
  Thinking Score Card system, Feedback Challenge Protocol, Solo Learner info, Scaling
- Thinking Baseline lesson: Pre-assessment with hospital triage scenario
- Instructor Guide lesson: Calibration protocol, implementation notes

These are the FRAMING pieces. The Forward Map must link to all 10 chapter paths
using relative links from the architect's directory skeleton.

When finished, message the team lead: 'WRITER INTRO DONE — [file list]'"

---

**Task: "Writer Ch1-2 — chapters 1 and 2"**
Spawn teammate "writer-ch1-2". Use opus model.

Teammate prompt:

"You are the writer-ch1-2 teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/drafts/part0-architecture.md (master spec — file paths, patterns, structure)
2. specs/drafts/part0-reference-brief.md (shared context — layers, score card, protocols)
3. specs/drafts/part0-writer-briefs/writer-ch1-2.md (YOUR specific brief with line ranges)
4. The reference lesson file created by the reference-builder teammate (path is in
   part0-architecture.md — this is YOUR Ch1 Exercise 1, match its quality exactly)
5. Your assigned lines from specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md
   (line ranges specified in your writer brief — read ONLY those lines, not the full doc)

RULES:
- Match the reference lesson's quality, format, and Docusaurus patterns exactly
- NO phantom imports (NEVER import Flashcards or Quiz components)
- Execute autonomously without asking for confirmation

YOUR SCOPE:
- Chapter 1 (Asking Better Questions): README + Exercises 2-4 as lesson files
  (Exercise 1 already exists as the reference lesson — do NOT recreate it)
- Chapter 2 (Detecting Broken Reasoning): README + all 4 exercises as lesson files
- Chapter deliverable summaries and grading criteria for both chapters

When finished, message the team lead: 'WRITER CH1-2 DONE — [file list]'"

---

**Task: "Writer Ch3-4 — chapters 3 and 4"**
Spawn teammate "writer-ch3-4". Use opus model.

Teammate prompt:

"You are the writer-ch3-4 teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/drafts/part0-architecture.md (master spec — file paths, patterns, structure)
2. specs/drafts/part0-reference-brief.md (shared context — layers, score card, protocols)
3. specs/drafts/part0-writer-briefs/writer-ch3-4.md (YOUR specific brief with line ranges)
4. The reference lesson file created by the reference-builder teammate (path is in
   part0-architecture.md — this is your quality benchmark, match it exactly)
5. Your assigned lines from specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md
   (line ranges specified in your writer brief — read ONLY those lines, not the full doc)

RULES:
- Match the reference lesson's quality, format, and Docusaurus patterns exactly
- NO phantom imports (NEVER import Flashcards or Quiz components)
- Execute autonomously without asking for confirmation

YOUR SCOPE:
- Chapter 3 (Thinking in Systems): README + all 4 exercises as lesson files
- Chapter 4 (Reasoning From First Principles): README + all 4 exercises as lesson files
- Chapter deliverable summaries and grading criteria for both chapters

These chapters introduce Cascade Maps and First Principles Worksheets —
include Deliverable Templates for both in collapsible <details> sections.

When finished, message the team lead: 'WRITER CH3-4 DONE — [file list]'"

---

**Task: "Writer Ch5-6 — chapters 5 and 6"**
Spawn teammate "writer-ch5-6". Use opus model.

Teammate prompt:

"You are the writer-ch5-6 teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/drafts/part0-architecture.md (master spec — file paths, patterns, structure)
2. specs/drafts/part0-reference-brief.md (shared context — layers, score card, protocols)
3. specs/drafts/part0-writer-briefs/writer-ch5-6.md (YOUR specific brief with line ranges)
4. The reference lesson file created by the reference-builder teammate (path is in
   part0-architecture.md — this is your quality benchmark, match it exactly)
5. Your assigned lines from specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md
   (line ranges specified in your writer brief — read ONLY those lines, not the full doc)

RULES:
- Match the reference lesson's quality, format, and Docusaurus patterns exactly
- NO phantom imports (NEVER import Flashcards or Quiz components)
- Execute autonomously without asking for confirmation

YOUR SCOPE:
- Chapter 5 (Communicating What Matters): README + all 4 exercises as lesson files
- Chapter 6 (Working With AI, Not For AI): README + all 4 exercises as lesson files
- Chapter deliverable summaries and grading criteria for both chapters

Chapter 6 is the synthesis chapter — it explicitly references Chapters 1-5.
Ensure all 'Building On' cross-references use correct relative paths.
Chapter 6 introduces the Collaboration Log format — include the template.

When finished, message the team lead: 'WRITER CH5-6 DONE — [file list]'"

---

**Task: "Writer Ch7-8 — chapters 7 and 8"**
Spawn teammate "writer-ch7-8". Use opus model.

Teammate prompt:

"You are the writer-ch7-8 teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/drafts/part0-architecture.md (master spec — file paths, patterns, structure)
2. specs/drafts/part0-reference-brief.md (shared context — layers, score card, protocols)
3. specs/drafts/part0-writer-briefs/writer-ch7-8.md (YOUR specific brief with line ranges)
4. The reference lesson file created by the reference-builder teammate (path is in
   part0-architecture.md — this is your quality benchmark, match it exactly)
5. Your assigned lines from specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md
   (line ranges specified in your writer brief — read ONLY those lines, not the full doc)

RULES:
- Match the reference lesson's quality, format, and Docusaurus patterns exactly
- NO phantom imports (NEVER import Flashcards or Quiz components)
- Execute autonomously without asking for confirmation

YOUR SCOPE:
- Chapter 7 (Reasoning Through Dilemmas): README + all 4 exercises as lesson files
- Chapter 8 (Building Something From Nothing): README + all 4 exercises as lesson files
- Chapter deliverable summaries and grading criteria for both chapters

Chapter 7 introduces the Stakeholder Cost Matrix and 3-round adversarial defence.
Chapter 8 introduces the Creation Log and Originality Test.
Include all Deliverable Templates in collapsible <details> sections.

When finished, message the team lead: 'WRITER CH7-8 DONE — [file list]'"

---

**Task: "Writer Ch9-10 — chapters 9-10 + portfolio + post-assessment"**
Spawn teammate "writer-ch9-10". Use opus model.

Teammate prompt:

"You are the writer-ch9-10 teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/drafts/part0-architecture.md (master spec — file paths, patterns, structure)
2. specs/drafts/part0-reference-brief.md (shared context — layers, score card, protocols)
3. specs/drafts/part0-writer-briefs/writer-ch9-10.md (YOUR specific brief with line ranges)
4. The reference lesson file created by the reference-builder teammate (path is in
   part0-architecture.md — this is your quality benchmark, match it exactly)
5. Your assigned lines from specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md
   (line ranges specified in your writer brief — read ONLY those lines, not the full doc)

RULES:
- Match the reference lesson's quality, format, and Docusaurus patterns exactly
- NO phantom imports (NEVER import Flashcards or Quiz components)
- Execute autonomously without asking for confirmation

YOUR SCOPE:
- Chapter 9 (Deciding Under Uncertainty): README + all 4 exercises as lesson files
- Chapter 10 (Learning How to Learn): README + all 4 exercises as lesson files
- Thinking Portfolio summary lesson (the 10-item portfolio list)
- Post-Assessment lesson (repeat baseline scenario + AI check + Growth Map)
- Chapter deliverable summaries and grading criteria for both chapters

Chapter 9 introduces Reversal Triggers and the Decision Audit.
Chapter 10 is the capstone — references ALL previous chapters heavily.
The Post-Assessment mirrors the Baseline from the writer-intro teammate.
The Growth Map template must reference all 40 exercises across all 10 chapters.

When finished, message the team lead: 'WRITER CH9-10 DONE — [file list]'"

---

### Phase 4 Task (depends on ALL Phase 3 tasks)

After ALL 6 writers complete, spawn ONE quality reviewer teammate.

**Task: "Quality Reviewer — PHPM compliance check"**
Spawn teammate "quality-reviewer". Use Opus model.

Teammate prompt:

"You are the quality-reviewer teammate for Part 0 of the AI Agent Factory book.
You are part of an agent team — communicate via messages to the team lead.

YOUR ROLE: Review ALL content produced by the 6 writer teammates for quality
compliance against the PHPM Author System Prompt Specification.

READ IN ORDER:
1. specs/drafts/PHPM Author System Prompt Spec.md (the quality standard — read FULLY)
2. specs/drafts/part0-architecture.md (understand the structure)
3. specs/drafts/part0-reference-brief.md (understand the content identity)
4. The reference lesson from Phase 2 (the quality benchmark)
5. THEN read every lesson file in apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/
   (use: find apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum -name '*.md' | sort)

IMPORTANT: Part 0 has NO code, NO SmartNotes, NO PRIMM-AI+ stages. The PHPM spec
is for Parts 4-5. Extract ONLY the universal quality patterns that apply to Part 0:

UNIVERSAL CHECKS (apply to ALL parts):
- Voice rules: tone (authoritative but warm), sentence length (15-25 avg, max 40),
  paragraph length (3-5 sentences), forbidden phrases ('simply', 'obviously', 'just'),
  encouraged phrases, analogy policy (everyday life, not programming)
- Formatting: heading hierarchy (h1=chapter only, h2=sections, h3=subsections, never skip),
  callout box consistency, code block formatting for AI prompts
- Terminology introduction: bold on first use, define immediately, use 3x in next 2 paragraphs
- Cross-chapter continuity: backward references (2+ per chapter), forward references with links
- Exercise design quality: clear task descriptions, testable outcomes, scaffolding
- Vocabulary budget: max 8-12 new terms per chapter, all bolded and defined

PART 0-SPECIFIC CHECKS:
- Every exercise has a Thinking Score Card prompt
- Every AI Check prompt is in a copy-friendly code block
- Scenario selectors use Tabs where the source has 3 options
- Solo Learner Alternatives present where source has peer exercises
- Deliverable Templates in collapsible sections
- Building On cross-references are working relative links
- No phantom component imports (Flashcards, Quiz)
- YAML frontmatter is complete on every file

YOUR DELIVERABLE:

Write a quality report to: specs/drafts/part0-quality-review.md

Structure:
1. OVERALL SCORE: Pass / Pass with issues / Fail
2. PER-WRITER SUMMARY: For each of the 6 writers, list:
   - Files reviewed
   - Voice compliance (Pass/Issues found)
   - Formatting compliance (Pass/Issues found)
   - Exercise quality (Pass/Issues found)
   - Cross-reference integrity (Pass/Issues found)
3. ISSUES LIST: Every issue found, with:
   - File path and line reference
   - Issue category (voice / formatting / exercise / continuity / PHPM violation)
   - Severity (critical = blocks publish, minor = should fix, suggestion = nice to have)
   - Specific fix recommendation
4. TOP 5 PATTERNS: The 5 most common issues across all files (these indicate
   systemic problems in the writer briefs or reference lesson)

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'QUALITY REVIEW DONE — report at specs/drafts/part0-quality-review.md'"

---

## Team Lead Coordination Rules

YOU ARE THE LEAD. Follow these rules strictly:

1. Create the team FIRST using TeamCreate
2. Create ALL tasks upfront in the shared task list with proper dependencies:
   - Phase 1 task: no dependencies
   - Phase 2 task: depends on Phase 1
   - Phase 3 tasks (all 6): each depends on Phase 2
   - Phase 4 task: depends on ALL 6 Phase 3 tasks
3. Spawn architect teammate FIRST. Wait for their 'ARCHITECT DONE' message
4. Review architect's plan before approving (plan approval mode for architect only)
5. After architect finishes, spawn reference-builder teammate. Wait for 'REFERENCE LESSON DONE'
6. After reference-builder finishes, spawn ALL 6 writer teammates at the same time
7. WAIT for ALL 6 writers to message 'DONE'. Do NOT start Phase 4 early
8. After all writers finish, spawn quality-reviewer teammate. Wait for 'QUALITY REVIEW DONE'
9. Do NOT write ANY content yourself — you are the coordinator only
10. If a teammate gets stuck or stops, message them directly to unstick them
    or spawn a replacement teammate to continue their work
11. After quality-reviewer reports, read specs/drafts/part0-quality-review.md:
    - If OVERALL SCORE is "Pass": proceed to verification
    - If "Pass with issues": review the issues list, decide which are critical
    - If "Fail": message the relevant writer teammates with specific fixes needed,
      wait for them to fix, then re-run quality reviewer
12. After quality review passes, run structural verification:
    - ls -R apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/
    - Count total files and compare against architect's skeleton in part0-architecture.md
    - grep -r 'import Flashcards' and grep -r 'import Quiz' in the output directory
    - Report: total files, missing files, phantom imports, quality review score
13. After verification, ask all teammates to shut down, then clean up the team

## Model Preferences

- Architect teammate: Opus (reads and synthesizes full 39K-token draft)
- Reference-builder teammate: Opus (quality-critical gold-standard lesson)
- All 6 writer teammates: Opus (pattern-following from reference lesson)
- Quality reviewer teammate: Opus (reads PHPM spec + all output, needs deep reasoning)

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 3 teammates before Phase 2 completes
- Do NOT spawn quality reviewer before ALL 6 writers complete
- Do NOT let writer teammates read the full 39K source draft (only architect reads it all)
- Do NOT approve architect's plan without reviewing the directory structure
- Do NOT skip quality review or structural verification
````

---

## Design Rationale

### Why agent team instead of subagents?

Subagents report results back and disappear. Teammates persist, can be messaged
mid-flight, can message each other, and share a task list. For an 8-worker pipeline
with phase dependencies, the team's shared task list and messaging are essential
for coordination. The lead can redirect a stuck writer without losing their context.

### Why 3 phases instead of letting everyone read the source?

The source draft is 39K tokens. If all 8 teammates read it, that's 312K tokens
on source material alone. The architect distills it into targeted briefs
(~3K tokens each) so writers get only what they need. Cheaper AND more focused.

### Why a reference lesson in Phase 2?

Content agents have a known quality drift problem (see failure-history.md).
A concrete gold-standard lesson eliminates ambiguity about format, tone, and patterns.
"Match this file" is more reliable than "follow these rules."

### Why pair chapters for writer teammates?

- 10 individual teammates = too much coordination overhead (docs recommend 3-5)
- 2 teammates (5 chapters each) = sessions too long, context degradation
- 6 teammates (2 chapters each + intro/capstone) = sweet spot, ~9 files each

### Why plan approval for architect only?

The architect's output is the spec every writer depends on. A wrong directory
structure cascades to all 6 writers. Plan approval lets the lead catch issues
before the architect writes files. Writer teammates don't need plan approval
because they follow the architect's spec — the spec IS the approved plan.

### Why NOT use content-implementer subagent?

Part 0 is fundamentally different from Parts 1-9. No code, no CLI tools (just
browser-based claude.ai/chatgpt.com), no CEFR/Bloom's in the traditional sense,
and a completely different exercise structure (4 exercises per chapter, not lessons
building toward a skill). The content-implementer's 9-skill pipeline would
over-engineer the output. Custom teammate prompts with a reference lesson are
more appropriate.
