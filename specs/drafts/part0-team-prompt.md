# Part 0 Agent Team Prompt

## How to use

Paste the prompt below into a Claude Code session with agent teams enabled.
The session becomes the **lead**. It creates teammates and coordinates work.

Before running:

1. Ensure `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in settings.json
2. Recommended: use `--teammate-mode in-process` (more stable than tmux)
3. Budget: ~8 teammate sessions, expect heavy token usage

---

## The Prompt

```
I need to implement Part 0 of the AI Agent Factory book as Docusaurus content.
The full draft lives at: specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md

This is a NEW part — no existing content. It goes into:
apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/

## What Part 0 IS

10 chapters teaching thinking skills (questioning, error detection, systems thinking,
first principles, communication, AI collaboration, ethics, creativity, decision-making,
meta-learning). Every exercise uses web-based AI (claude.ai, chatgpt.com). No code.
No setup. The deliverable is always documented evidence of thinking, never "the answer."

Each chapter has exactly 4 exercises using 6 assessment layers (Prediction Lock,
Reasoning Receipt, Live Defence, Contradiction Challenge, Divergence Test, Iterative
Drafts). Every exercise ends with a Thinking Score Card (5 dimensions, 1-10 each).

## Team Architecture: 3-Phase Pipeline

### Phase 1: Architect (1 agent, BLOCKS Phase 2-3)

Spawn teammate "architect" with this prompt:

"You are the architect for Part 0 of the AI Agent Factory book.

READ THESE IN ORDER:
1. specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md (FULL document — all 1235 lines)
2. apps/learn-app/docs/01-General-Agents-Foundations/01-agent-factory-paradigm/README.md (reference chapter README format)
3. One reference lesson from any existing chapter (discover via: ls apps/learn-app/docs/01-General-Agents-Foundations/01-agent-factory-paradigm/*.md | head -3) — read the first lesson file to understand YAML frontmatter, MDX structure, admonitions
4. .specify/memory/constitution.md — principles that govern all content

YOUR DELIVERABLES (write these files):

1. specs/drafts/part0-architecture.md — The master spec containing:
   - Directory skeleton with every file path
   - Lesson-to-draft mapping (which lines of the source draft each lesson covers)
   - YAML frontmatter template showing all required fields for Part 0 lessons
   - Docusaurus component patterns: how to render AI Check prompts (code blocks with copy),
     Scenario Selectors (Tabs component), Deliverable Templates (details/collapsible),
     Solo Learner Alternatives (admonitions), Building On cross-refs (links), Score Card tables
   - Conversion rules: the source draft uses pipe-table formatting (| text |) for callouts —
     map each to the correct Docusaurus pattern (:::tip, :::note, <details>, <Tabs>, etc.)
   - The chapter-to-writer assignment (6 writers, see below)

2. specs/drafts/part0-reference-brief.md — A writer's brief containing:
   - Part 0 identity: pedagogical layer (L1 — Manual Foundation, no code),
     target audience (complete beginners, no programming assumed),
     assessment philosophy (process over output, thinking over answers)
   - The 6 assessment layers explained concisely
   - Thinking Score Card format (5 dimensions)
   - Cross-chapter dependency map (which skills build on which)
   - Feedback Challenge Protocol (shared across all chapters)
   - Solo Learner Alternative pattern

3. specs/drafts/part0-writer-briefs/ — One brief per writer:
   - writer-intro.md: Source lines to convert, special handling for Six Layers, Forward Map,
     Score Card system, Baseline assessment, Instructor Guide, Implementation Notes
   - writer-ch1-2.md: Source lines, chapter-specific details, cross-refs needed
   - writer-ch3-4.md: Source lines, chapter-specific details, cross-refs needed
   - writer-ch5-6.md: Source lines, chapter-specific details, cross-refs needed
   - writer-ch7-8.md: Source lines, chapter-specific details, cross-refs needed
   - writer-ch9-10.md: Source lines, chapter-specific details, cross-refs to earlier chapters,
     plus Portfolio Summary, Post-Assessment, and Growth Map

Each writer brief must include:
- Exact file paths to create (from the skeleton)
- Which section of the source draft they own (line ranges)
- Chapter-specific 'Building On' references they must link to
- Any chapter-specific Docusaurus patterns (e.g., Ch 1 has 3 scenario variants needing Tabs)
- Exit criteria: what 'done' means for their scope

4. apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/README.md — The part README
   (follow existing part README format from 01-General-Agents-Foundations)

Execute autonomously without confirmation. When done, send a message to the lead
saying 'ARCHITECT DONE' with a summary of all files created."

Wait for the architect to finish before proceeding to Phase 2.

### Phase 2: Reference Lesson Builder (1 agent, BLOCKS Phase 3)

Spawn teammate "reference-builder" with this prompt:

"You are the reference lesson builder for Part 0.

READ THESE FIRST:
1. specs/drafts/part0-architecture.md (the architect's spec — your source of truth)
2. specs/drafts/part0-reference-brief.md (the writer's brief)
3. specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md lines 138-237 (Chapter 1 only)
4. One high-quality existing lesson from the book (architect's spec will name one, or discover via:
   ls apps/learn-app/docs/01-General-Agents-Foundations/01-agent-factory-paradigm/*.md
   and read lesson 01 or 02)

YOUR DELIVERABLE:

Create the FIRST lesson file for Chapter 1 as the gold-standard reference that all
6 writers will pattern-match against. This is the most important file in Part 0 because
every writer will use it as their quality benchmark.

The file path will be specified in part0-architecture.md. If not, use:
apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md

This lesson covers Chapter 1, Exercise 1: The Prediction Lock.

It MUST demonstrate:
- Complete YAML frontmatter (all fields from architect's template)
- Narrative opening (not 'In this lesson you will learn...')
- Scenario selector using Docusaurus Tabs component
- AI Check prompt in a copy-friendly code block
- Deliverable Template in a collapsible <details> section
- Thinking Score Card prompt embedded in the AI Check
- Solo Learner Alternative in a :::tip admonition
- 'What This Teaches You' reflection section
- Cross-reference links where needed (this is Ch1 Ex1, so minimal back-refs)
- NO phantom component imports (no import Flashcards, no import Quiz)

Execute autonomously. When done, send a message to the lead saying
'REFERENCE LESSON DONE' with the file path."

Wait for reference-builder to finish before proceeding to Phase 3.

### Phase 3: Chapter Writers (6 agents IN PARALLEL)

Spawn ALL 6 writers simultaneously. Each gets a specific scope with zero file overlap.

CRITICAL INSTRUCTIONS FOR ALL WRITERS:
- Read specs/drafts/part0-architecture.md FIRST (your master spec)
- Read specs/drafts/part0-reference-brief.md SECOND (shared context)
- Read your specific writer brief from specs/drafts/part0-writer-briefs/
- Read the reference lesson created in Phase 2
- Read ONLY your assigned lines from the source draft (not the whole doc)
- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports (never import Flashcards or Quiz components)
- Execute autonomously without confirmation
- When done, message the lead with 'WRITER [name] DONE' and list of files created

---

**Writer 1: "writer-intro"** — Introduction + Baseline + Instructor Guide

"You are writer-intro for Part 0 of the AI Agent Factory book.

READ IN ORDER:
1. specs/drafts/part0-architecture.md
2. specs/drafts/part0-reference-brief.md
3. specs/drafts/part0-writer-briefs/writer-intro.md
4. The reference lesson from Phase 2
5. Your assigned lines from specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md

YOUR SCOPE — Create these files (paths from architect spec):
- Introduction lesson: Why This Part Comes First, Six Layers, How AI Checks Thinking,
  Thinking Score Card system, Feedback Challenge Protocol, Solo Learner info, Scaling section
- Thinking Baseline lesson: The pre-assessment with hospital triage scenario
- Instructor Guide lesson: Calibration protocol, implementation notes, deployment guidance

These are the FRAMING pieces — they set up everything the other writers build.
The Forward Map section must link to all 10 chapter paths (use relative links
based on the directory skeleton from the architect spec).

Execute autonomously without confirmation. When done, message the lead
with 'WRITER INTRO DONE' and list all files created."

---

**Writer 2: "writer-ch1-2"** — Chapters 1-2

"You are writer-ch1-2 for Part 0.

READ IN ORDER:
1. specs/drafts/part0-architecture.md
2. specs/drafts/part0-reference-brief.md
3. specs/drafts/part0-writer-briefs/writer-ch1-2.md
4. The reference lesson from Phase 2 (this is YOUR Ch 1 Ex 1 — your remaining
   Ch 1 exercises and all Ch 2 exercises must match its quality)
5. Your assigned lines from the source draft

YOUR SCOPE:
- Chapter 1 (Asking Better Questions): README + Exercises 2-4 as lessons
  (Exercise 1 was already created as the reference lesson — do NOT recreate it)
- Chapter 2 (Detecting Broken Reasoning): README + all 4 exercises as lessons
- Chapter deliverable summaries and grading criteria for both chapters

Execute autonomously without confirmation. When done, message the lead
with 'WRITER CH1-2 DONE' and list all files created."

---

**Writer 3: "writer-ch3-4"** — Chapters 3-4

"You are writer-ch3-4 for Part 0.

READ IN ORDER:
1. specs/drafts/part0-architecture.md
2. specs/drafts/part0-reference-brief.md
3. specs/drafts/part0-writer-briefs/writer-ch3-4.md
4. The reference lesson from Phase 2
5. Your assigned lines from the source draft

YOUR SCOPE:
- Chapter 3 (Thinking in Systems): README + all 4 exercises as lessons
- Chapter 4 (Reasoning From First Principles): README + all 4 exercises as lessons
- Chapter deliverable summaries and grading criteria for both chapters

These chapters introduce Cascade Maps and First Principles Worksheets —
include Deliverable Templates for both in collapsible sections.

Execute autonomously without confirmation. When done, message the lead
with 'WRITER CH3-4 DONE' and list all files created."

---

**Writer 4: "writer-ch5-6"** — Chapters 5-6

"You are writer-ch5-6 for Part 0.

READ IN ORDER:
1. specs/drafts/part0-architecture.md
2. specs/drafts/part0-reference-brief.md
3. specs/drafts/part0-writer-briefs/writer-ch5-6.md
4. The reference lesson from Phase 2
5. Your assigned lines from the source draft

YOUR SCOPE:
- Chapter 5 (Communicating What Matters): README + all 4 exercises as lessons
- Chapter 6 (Working With AI, Not For AI): README + all 4 exercises as lessons
- Chapter deliverable summaries and grading criteria for both chapters

Chapter 6 is the synthesis chapter — it explicitly references Chapters 1-5.
Ensure all 'Building On' cross-references use correct relative paths.
Chapter 6 introduces the Collaboration Log format — include the template.

Execute autonomously without confirmation. When done, message the lead
with 'WRITER CH5-6 DONE' and list all files created."

---

**Writer 5: "writer-ch7-8"** — Chapters 7-8

"You are writer-ch7-8 for Part 0.

READ IN ORDER:
1. specs/drafts/part0-architecture.md
2. specs/drafts/part0-reference-brief.md
3. specs/drafts/part0-writer-briefs/writer-ch7-8.md
4. The reference lesson from Phase 2
5. Your assigned lines from the source draft

YOUR SCOPE:
- Chapter 7 (Reasoning Through Dilemmas): README + all 4 exercises as lessons
- Chapter 8 (Building Something From Nothing): README + all 4 exercises as lessons
- Chapter deliverable summaries and grading criteria for both chapters

Chapter 7 introduces the Stakeholder Cost Matrix and 3-round adversarial defence.
Chapter 8 introduces the Creation Log and Originality Test.
Include all Deliverable Templates in collapsible sections.

Execute autonomously without confirmation. When done, message the lead
with 'WRITER CH7-8 DONE' and list all files created."

---

**Writer 6: "writer-ch9-10"** — Chapters 9-10 + Portfolio + Post-Assessment

"You are writer-ch9-10 for Part 0.

READ IN ORDER:
1. specs/drafts/part0-architecture.md
2. specs/drafts/part0-reference-brief.md
3. specs/drafts/part0-writer-briefs/writer-ch9-10.md
4. The reference lesson from Phase 2
5. Your assigned lines from the source draft

YOUR SCOPE:
- Chapter 9 (Deciding Under Uncertainty): README + all 4 exercises as lessons
- Chapter 10 (Learning How to Learn): README + all 4 exercises as lessons
- Thinking Portfolio summary lesson (the 10-item portfolio list)
- Post-Assessment lesson (repeat baseline scenario + AI check + Growth Map)
- Chapter deliverable summaries and grading criteria for both chapters

Chapter 9 introduces Reversal Triggers and the Decision Audit.
Chapter 10 is the capstone — references ALL previous chapters heavily.
The Post-Assessment mirrors the Baseline from writer-intro.
The Growth Map template must reference all 40 exercises across all 10 chapters.

Execute autonomously without confirmation. When done, message the lead
with 'WRITER CH9-10 DONE' and list all files created."

---

## Lead Coordination Rules

1. DO NOT start Phase 2 until architect sends 'ARCHITECT DONE'
2. DO NOT start Phase 3 until reference-builder sends 'REFERENCE LESSON DONE'
3. After spawning all 6 Phase 3 writers, WAIT for all to finish
4. Do NOT implement any content yourself — you are the coordinator
5. After all writers report done, do a verification pass:
   - ls the entire 00-Prelude directory tree
   - Verify file count matches architect's skeleton
   - Spot-check one random lesson from each writer for YAML frontmatter
   - Check that no phantom imports exist (grep for 'import Flashcards' and 'import Quiz')
6. Report final status: files created, any issues found, any gaps

## Model Preferences

- Architect: use Opus (needs to read and synthesize the full 39K-token draft)
- Reference-builder: use Opus (quality-critical reference lesson)
- Writers: use Sonnet (parallel execution, clear patterns to follow)
```

---

## Design Rationale

### Why 3 phases instead of letting everyone read the source?

The source draft is 39K tokens. If all 8 agents read it, that's 312K tokens
on source material alone. The architect distills it into targeted briefs
(~3K tokens each) so writers get only what they need. This is cheaper AND
produces more focused output.

### Why a reference lesson in Phase 2?

Content-implementer subagents have a known quality drift problem (see failure-history.md).
A concrete gold-standard lesson eliminates ambiguity about format, tone, and patterns.
"Match this file" is more reliable than "follow these rules."

### Why pair chapters for writers?

- 10 individual writers = too much coordination overhead
- 2 writers (5 chapters each) = sessions too long, context degradation
- 5 pairs of 2 chapters = sweet spot: each writer produces ~9 files, finishable in one session

### Why intro and capstone are separate writers?

The intro sets up all framing (Six Layers, Score Card, Forward Map). The capstone
(Ch 9-10 + Portfolio + Post-Assessment) wraps it all up. These are the highest-stakes
pieces and benefit from focused attention.

### Why NOT use content-implementer subagent?

Part 0 is fundamentally different from Parts 1-9. It has no code, no AI tools
(just browser-based), no CEFR/Bloom's progression in the traditional sense, and
a completely different exercise structure (4 exercises per chapter, not lessons
building toward a skill). The content-implementer's 9-skill pipeline would
over-engineer the output and potentially hallucinate code-focused patterns.
Custom writer prompts with a reference lesson are more appropriate.

### Alternative: Subagent pipeline instead of agent team

If agent teams are unstable, this same architecture works as subagents:

1. Spawn architect subagent → wait for result
2. Spawn reference-builder subagent → wait for result
3. Spawn 6 writer subagents IN PARALLEL (via Agent tool, not team)
4. Verify in main session

The tradeoff: subagents can't message each other (no "hey ch5-6 writer, what
path did you use for the Collaboration Log?"). But since the architect's spec
defines all paths upfront, this is rarely needed.
