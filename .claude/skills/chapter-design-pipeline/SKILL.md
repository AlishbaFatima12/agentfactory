---
name: chapter-design-pipeline
description: >
  End-to-end design pipeline for Part 3 business domain chapters. Takes a
  governing spec/draft and produces a ready-to-paste agent team prompt through
  6 stages: plugin status check, research (verify don't assume), lesson design,
  design decisions with cascade analysis, resolution, and stateful team prompt
  generation. Use this skill whenever the user says "design chapter X",
  "plan chapter X", provides a chapter spec and asks to build the team, or
  shares a governing artifact for any Part 3 business domain chapter. Also
  trigger when the user provides a spec path + plugin repo path and asks about
  lesson planning, plugin decisions, or reader experience design. This skill
  orchestrates /team-prompt-writer — do NOT use that skill separately for
  chapter design work.
license: Apache-2.0
metadata:
  author: panaversity
  version: "3.0"
---

# Chapter Design Pipeline

You are the chapter design architect. Given a governing spec, you produce a
team prompt that creates the best possible learning experience for readers.

**The pipeline's core value is NOT plugin architecture.** It's designing how
each lesson teaches, how each skill/agent integrates into exercises, and how
the reader experiences the chapter from start to finish. Plugin decisions are
a means to that end.

**Worked example**: See [references/worked-example-ch35.md](references/worked-example-ch35.md)
for the Ch 35 Supply Chain design session — every stage, correction, cascade.

## Critical Rule: Verify, Don't Assume

The #1 failure in the Ch 35 session was assuming platform capabilities instead
of verifying them. Three wrong assumptions (agents don't work in Cowork,
jurisdictions are needed, router is needed) caused three rounds of rework.

**When uncertain about ANY platform capability** (Does Cowork support X? Can
agents be scheduled? Does `/schedule` exist?):

1. **WebSearch first** — search for official docs
2. **WebFetch the official page** — read the actual documentation
3. **Ask the user** — they know the platform better than you

Never reason from first principles about what a platform "probably" supports.
Check.

## Inputs

Gather from the user. Ask if missing:

| Input                      | Required           | Example                                       |
| -------------------------- | ------------------ | --------------------------------------------- |
| **Governing spec**         | Yes                | `specs/drafts/chapter-name/spec.md`           |
| **Supporting skill specs** | If plugin          | `specs/drafts/chapter-name/skills/`           |
| **Plugin repo**            | If plugin          | `/path/to/agentfactory-business-plugins`      |
| **Knowledge-work plugins** | If collision check | `/path/to/knowledge-work-plugins`             |
| **Chapter destination**    | Yes                | `apps/learn-app/docs/03-.../section/chapter/` |
| **User's pre-research**    | Optional           | Diagnostics, collision tables, etc.           |

If the user provides pre-researched diagnostics, validate them against your
research — don't regenerate from scratch.

## The 6-Stage Pipeline

### Stage 0: Plugin Status Check

Before anything else: **is the plugin already shipped, in progress, or needed?**

```
CHECK ORDER:
1. ls the plugin repo — is there already a directory for this domain?
2. If yes → plugin exists. Read it. Understand what's shipped.
3. If no → check knowledge-work-plugins for coverage
4. If partial coverage → decide: extend existing or build new?
5. If no coverage → build new plugin
```

| Status                     | What Changes                                                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Plugin already shipped** | No plugin-builder teammate. Chapter teaches the existing plugin. Design focuses entirely on lesson quality and reader experience. |
| **Plugin in progress**     | Coordinate with plugin work. Chapter may need to wait or adapt.                                                                   |
| **Need to build**          | Plugin-builder teammate in team. But plugin design is a MEANS to lesson design, not the goal.                                     |
| **No plugin needed**       | Companion repo or skills-only chapter.                                                                                            |

### Stage 1: Research (Verify Everything)

Spawn parallel agents. The research serves Stage 2 (lesson design), not the
other way around.

**Agent A — Platform Capabilities** (ALWAYS run this):

- WebSearch and WebFetch to verify what Cowork supports today
- Can agents be deployed via plugins? How?
- Does `/schedule` exist? How does it work?
- What plugin components are supported (skills, agents, commands, hooks)?
- Fetch these 3 canonical docs:
  - https://code.claude.com/docs/en/plugins-reference
  - https://agentskills.io/specification
  - https://code.claude.com/docs/en/sub-agents

**Agent B — Plugin Audit** (if building a plugin):

- Scan existing plugins in `agentfactory-business-plugins/`
- Identify closest structural precedent
- Scan `knowledge-work-plugins/` for collision candidates
- Build collision table (planned skill → L1 candidate → severity → rename?)

**Agent C — Reference Chapter Format**:

- Read reference chapter README + ONE skill-based lesson
- Extract: YAML frontmatter, section structure, Try With AI format,
  sidecar patterns, exercise format, proficiency levels
- Focus on what makes the READER EXPERIENCE good, not just the format

**Agent D — Spec Deep Read**:

- Read the FULL governing spec
- Read ALL supporting skill/agent spec files
- Extract: components, exercises, sections, external refs, fact claims
- For each exercise: what does the READER DO? What's the hands-on experience?

### Stage 2: Lesson Design (The Core Stage)

This is where the real value is. Not "exercise-to-lesson mapping" — that's
mechanical. This is designing how each lesson TEACHES.

For each lesson, answer:

```
LESSON [N]: [Title]
- WHAT the reader learns (concept, not just topic)
- HOW they learn it (read → try → verify → extend)
- WHICH skill/agent they use and HOW it integrates
  - What command do they run?
  - What input do they provide?
  - What output do they evaluate?
  - What does the output TEACH them?
- EXERCISE design (if applicable):
  - What real-world scenario?
  - What data do they need?
  - What's the deliverable?
  - How do they know they succeeded?
- READER EXPERIENCE:
  - Does this lesson flow naturally from the previous one?
  - Is the cognitive load appropriate (7-10 new concepts max)?
  - Does the Try With AI section give them genuine practice?
  - Would a procurement manager find this immediately useful?
```

**Design the progression**: Early lessons build foundations. Middle lessons
use skills for real scenarios. Late lessons combine skills + agents for
complex workflows. Capstone integrates everything.

**Design the skill/agent integration**: Each skill appears in exercises with:

- Explicit command syntax
- Realistic sample input (not toy data)
- Output that the student must EVALUATE (not just read)
- A "what to look for" guide so students learn to assess AI output quality

**Design the agent deployment**: For chapters with agents:

- Which lesson introduces each agent?
- How does the student configure it?
- How do they use `/schedule` to automate it?
- What does the agent's output look like in practice?

### Stage 3: Design Decisions (with Cascade Analysis)

Present your lesson design + plugin decisions to the user. They will correct
assumptions. The Ch 35 session had 3 major corrections — expect this.

**The Cascade Protocol**: After EVERY correction, trace downstream impacts:

```
CORRECTION: [what the user said]
IMMEDIATE IMPACT: [what changes directly]
CASCADE:
  → Lesson design: [how teaching changes]
  → Plugin architecture: [how components change]
  → Team prompt: [how teammates/phases change]
  → Reader experience: [how the chapter feels different]
REVISED POSITION: [updated recommendation]
```

**Collect all corrections, then cascade once** if they arrive in a batch.
Don't cascade after each word — wait for the user to finish their corrections.

### Stage 4: Resolution

Present the complete design. User must approve before Stage 5.

**Section A: Plugin** (if applicable)

- Component inventory with command names
- Renames to avoid collisions
- Agent deployment model

**Section B: Lesson Plan** (the important part)

- 15 lessons with titles, skills, exercises, durations
- For each skill-based lesson: what command, what scenario, what the student evaluates
- Exercise cross-reference chain
- Reader experience flow (does it build naturally?)

**Section C: Fact Verification**

- Claims flagged `[VERIFY]` with hedging instructions

**Section D: Reference chapters + docs**

### Stage 5: Team Prompt Generation

Invoke `/team-prompt-writer` with complete context from Stage 4.

**CRITICAL: The team is STATEFUL. It does NOT shut down after content writing.**

The team prompt must include these post-writing phases:

```
Phase 3: Writers (parallel) ← content lessons
Phase 4: Quality Review
Phase 5: Post-Production (SAME team, NOT shutdown)
  - Summary Generator: .summary.md for each lesson
  - Flashcard Generator: .flashcards.yaml for each lesson
  - Quiz Generator: end-of-chapter quiz
  - Slide Generator: chapter slide deck
Phase 6: Final Verification
  - All sidecar files present
  - All YAML frontmatter complete
  - All exercises have data/scenarios
```

The team lead coordinates ALL phases. Teammates from Phase 3 can be reused
in Phase 5 (they have context). New teammates can be spawned for specialized
work (quiz, slides).

**Team prompt args format for `/team-prompt-writer`**:

```
Chapter [N]: [Title]. Spec at [path]. Skills at [path].
Plugin repo at [path]. Chapter destination: [path].
DESIGN DECISIONS: [all binding decisions from Stage 3].
LESSON DESIGN: [the Stage 2 output — how each lesson teaches].
POST-PRODUCTION: Team is stateful — include summary, flashcard,
quiz, and slide phases after content writing.
Reference chapters: [primary] + [secondary].
Plugin builder refs: [3 URLs if building plugin].
```

## Key Principles

**Reader experience first.** Every decision serves the reader. Plugin
architecture, collision resolution, team structure — these are means, not ends.
Ask: "Does this make the chapter better for a procurement manager learning
supply chain AI?"

**Verify, don't assume.** WebSearch/WebFetch for platform capabilities. Ask the
user about their workflow. Never reason about what Cowork "probably" supports.

**Corrections cascade.** When the user corrects an assumption, trace ALL
downstream impacts. The most common failure: a correction gets applied locally
but stale assumptions survive in the lesson plan.

**The team is stateful.** Content writing is phase 3 of ~6. Summaries,
flashcards, quizzes, and slides come after. The team persists through all phases.

**Design lessons, not just structure.** "L07 = Supplier Risk" is structure.
"L07: students configure vendor-health-monitor for their top 10 suppliers,
run `/supplier-risk` to generate a risk matrix, then evaluate whether the
agent's financial distress signals are actionable" — that's lesson design.

## Adaptation by Chapter Type

| Type                | Stage 0              | Stage 2 Focus                       | Team Phases                                |
| ------------------- | -------------------- | ----------------------------------- | ------------------------------------------ |
| **Plugin shipped**  | Read existing plugin | How to teach existing skills/agents | Writers + Post-production                  |
| **Plugin to build** | Build                | Lesson design + plugin design       | Plugin-builder + Writers + Post-production |
| **Companion repo**  | Skip                 | Lesson design + repo structure      | Writers + Post-production                  |
| **No plugin**       | Skip                 | Pure lesson design                  | Writers + Post-production                  |

## Failure Modes

- **Assuming platform capabilities** → Wrong design, user has to correct you 3x
- **Focusing on plugin architecture over lesson design** → Beautiful plugin, mediocre teaching
- **Shutting down team after content** → Lose context for summaries/flashcards/quizzes
- **Mapping exercises to lessons mechanically** → "L07 has Ex 3" instead of designing HOW Ex 3 teaches
- **Not checking if plugin already exists** → Designing a plugin that's already shipped
- **Presenting options without recommendations** → Delegation, not design
- **Generating diagnostics that duplicate user's pre-research** → Wastes time
