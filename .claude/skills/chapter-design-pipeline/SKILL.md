---
name: chapter-design-pipeline
description: >
  End-to-end design pipeline for Part 3 business domain chapters. Takes a
  governing spec/draft + supporting skill specs and produces a ready-to-paste
  agent team prompt through 6 stages: build-or-reuse decision, parallel research,
  diagnostic questions, design decisions with cascade analysis, resolution
  summary, and team prompt generation. Use this skill whenever the user says
  "design chapter X", "plan chapter X", provides a chapter spec and asks to
  build the team, or shares a governing artifact for any Part 3 business domain
  chapter. Also trigger when the user provides a spec path + plugin repo path
  and asks about plugin decisions, collision analysis, or lesson planning. This
  skill orchestrates /diagnostic-questions and /team-prompt-writer — do NOT use
  those skills separately for chapter design work.
license: Apache-2.0
metadata:
  author: panaversity
  version: "2.0"
---

# Chapter Design Pipeline

You are the chapter design architect. Given a governing spec and supporting
artifacts, you orchestrate the full design-to-team-prompt pipeline for Part 3
business domain chapters.

The pipeline exists because uncoordinated chapter writing failed 3x in Part 3.
The root causes were: (1) writers started before collision analysis was done,
(2) plugin architecture decisions were made mid-writing, (3) exercise-to-lesson
mapping was implicit, and (4) fact verification was skipped. This pipeline
front-loads every decision that would otherwise cause rework.

**Worked example**: See [references/worked-example-ch35.md](references/worked-example-ch35.md)
for the complete Ch 35 Supply Chain design session trace — every stage, every
correction, every cascade.

## Inputs

Gather these from the user. If any are missing, ask before proceeding:

| Input                      | Required                  | Example                                       |
| -------------------------- | ------------------------- | --------------------------------------------- |
| **Governing spec**         | Yes                       | `specs/drafts/chapter-name/spec.md`           |
| **Supporting skill specs** | If plugin                 | `specs/drafts/chapter-name/skills/`           |
| **Plugin repo**            | If plugin                 | `/path/to/agentfactory-business-plugins`      |
| **Knowledge-work plugins** | If collision check needed | `/path/to/knowledge-work-plugins`             |
| **Chapter destination**    | Yes                       | `apps/learn-app/docs/03-.../section/chapter/` |
| **Diagnostic questions**   | Optional                  | User may provide pre-researched diagnostics   |

**If the user provides pre-researched diagnostic questions**: Do NOT regenerate
them. Instead, use them as the starting point for Stage 2. Research (Stage 1)
should fill gaps the user's diagnostics didn't cover, not duplicate their work.
Validate each diagnostic against your research and either confirm, refine, or
flag where research contradicts the user's analysis.

## The 6-Stage Pipeline

### Stage 0: Build or Reuse?

Before any research, answer the threshold question: **does this chapter need a
custom plugin, or can it reuse existing ones?**

Check:

1. Do the knowledge-work-plugins already cover this domain?
2. Does the spec describe skills that overlap significantly with existing plugins?
3. Is the domain specialized enough that generic plugins won't serve?

| Finding                                    | Decision                               |
| ------------------------------------------ | -------------------------------------- |
| Existing plugin covers 80%+ of needs       | Reuse — teach the existing plugin      |
| Partial overlap (30-80%)                   | Extend — build a small plugin for gaps |
| No overlap or domain is highly specialized | Build — full custom plugin             |

Present your recommendation to the user before proceeding. This decision shapes
everything downstream — a "reuse" chapter has no Stage 1 collision audit, no
plugin builder teammate, and a fundamentally different lesson structure.

### Stage 1: Parallel Research

Spawn 3-4 Explore agents simultaneously. Do NOT read everything yourself — delegate.

**Agent A — Plugin Pattern Audit** (if building a plugin):

- Scan existing plugins in `agentfactory-business-plugins/`
- Count components per plugin (skills, agents, commands, jurisdictions, evals)
- Identify the closest structural precedent (Banking for large plugins, Legal-ops
  for deduplication patterns, IDFA for light plugins)
- Extract the plugin directory pattern (`.claude-plugin/`, `skills/`, `agents/`, `evals/`)
- Note which plugins have agents (sales-revops-marketing is the precedent for plugin agents)

**Agent B — Layer 1 Collision Audit** (if building a plugin):

- Scan `knowledge-work-plugins/` for every skill name and command
- Build a collision table: planned skill → potential collision → severity
- Classify each: Name collision (same name, different domain), Semantic overlap
  (similar concept, different scope), No collision
- Pay special attention to generic verbs: `/reconcile`, `/communicate`, `/review`,
  `/assess` — these almost always collide

**Agent C — Reference Chapter Format**:

- Read the reference chapter README (usually Banking ch 32 or the closest precedent)
- Read ONE skill-based lesson for format patterns
- Extract: YAML frontmatter template (all fields including teaching_guide),
  section structure, Try With AI format (3 prompts: Reproduce → Adapt → Apply),
  sidecar file patterns (.flashcards.yaml + .summary.md), exercise format (Step 1-5)
- Note proficiency levels used (A2/B1/B2 — varies by chapter position)

**Agent D — Spec Analysis**:

- Read the FULL governing spec
- Read ALL supporting skill/agent spec files
- Extract: total components (skills vs agents vs conceptual), exercise count,
  section structure, external references (URLs, citations), synthetic vs real data,
  fact claims that need verification
- Flag any component the spec calls an "agent" — classify whether it's actually a
  plugin agent, a skill, or lesson content

**Stage 1 also fetches official documentation** (via WebFetch) when building a plugin:

- https://code.claude.com/docs/en/plugins-reference — plugin.json schema, directory structure
- https://agentskills.io/specification — SKILL.md format (YAML frontmatter, name constraints)
- https://code.claude.com/docs/en/sub-agents — agent.md format (frontmatter fields, background flag)

These 3 docs are the canonical references. Fetch them early — they inform collision
resolution (what names are valid), agent classification (what fields exist), and
plugin structure (what files to create).

### Stage 2: Diagnostic Questions

After research completes, generate diagnostic questions across 7 categories.
See [references/diagnostic-categories.md](references/diagnostic-categories.md) for
the full template with tables and examples.

**If the user provided pre-researched diagnostics**: Map each of their questions to
a category. For each:

- **Confirmed**: Your research supports their analysis. Say so briefly.
- **Refined**: Your research adds nuance. Present the refinement.
- **Contradicted**: Your research found something different. Present both and explain.
- **Missing**: Categories not covered by user's diagnostics. Generate new questions.

**If generating from scratch**: Present all 7 categories with your opinionated
recommendations, tradeoffs, and clear questions.

The 7 categories are:

1. **Layer 1 Collision Audit** — For each planned skill: collision candidate,
   severity, recommended pattern (coexist/rename/override). Present as a table.
2. **Component Classification** — Skills vs agents vs lesson content. What's the
   runtime reality in Cowork? Can agents actually be deployed and scheduled?
3. **Jurisdiction/Overlay Decision** — Does this domain need jurisdiction overlays
   or is `local.md` sufficient?
4. **Exercise-to-Lesson Mapping** — How do spec exercises map to lessons? Target
   lesson count (13-15)? Merge candidates? Cross-reference chains?
5. **Pedagogical Approach** — "Use the plugin" vs "build the system" vs hybrid?
   Where does this chapter sit in book progression?
6. **Fact Verification** — Which claims are verifiable, synthetic, or suspect?
7. **Missing Inputs** — What must the user decide before team prompt generation?

**Also present Stage 0's build-or-reuse conclusion** and the router question: Does
this plugin need a router skill? (Answer: only if 10+ skills AND ambiguous trigger
phrases. 8 or fewer well-named skills don't need routing indirection.)

### Stage 3: Design Decisions (with Cascade Analysis)

This is the most important stage. The user will:

- Agree with some recommendations ("yes, go with that")
- Correct assumptions ("actually, agents DO work in Cowork")
- Reject options ("no need for jurisdictions")
- Add constraints you didn't consider

**The Cascade Protocol**: After EVERY user correction, immediately trace downstream
impacts. This is not optional — it's the core value of the pipeline.

```
CORRECTION: [what the user said]
IMMEDIATE IMPACT: [what changes directly]
CASCADE:
  → Lesson plan: [how lessons change]
  → Plugin architecture: [how components change]
  → Team prompt: [how teammates/phases change]
  → Exercise mapping: [how exercises redistribute]
REVISED POSITION: [updated recommendation]
```

**Real examples from Ch 35**:

Correction: "Agents work in Cowork, /schedule handles automation"
→ L12 changes from "conceptual agent design" to "deploy and configure real agents"
→ Plugin ships 5 agent files (not zero)
→ Team prompt adds agent format reference docs to plugin-builder
→ Exercises 3 and 7 now configure actual running agents

Correction: "No need for jurisdictions"
→ Plugin drops overlays directory entirely
→ No jurisdiction-loading logic needed
→ Universal rules go into individual skills, not a router
→ L02 setup lesson simplifies (no overlay configuration)

Correction: "Why even add a router? It has no value"
→ Router dropped (was 1 of 14 components, now 0)
→ Universal non-negotiable rules distribute across 8 skills
→ Plugin inventory: 8 skills + 5 agents + local.md = 14 files (not 15)

**After all corrections are resolved**, present the binding decisions:

```
BINDING DECISIONS (N total):
1. [Decision]: [Choice] — [Rationale]
2. [Decision]: [Choice] — [Rationale]
...
Corrections applied: [N]
Cascades traced: [N]
Open questions: 0 ← this MUST be zero before Stage 4
```

### Stage 4: Resolution

Present the complete design summary. This is the final checkpoint before team
prompt generation. The user must approve this before Stage 5.

**The resolution has 4 sections** (adapt based on chapter type):

#### Section A: Plugin Architecture (if applicable)

```markdown
## Plugin: [name]

**Components**: N skills + M agents (no router, no jurisdictions)
**Repo**: [path]

| #   | Skill  | Command    | Renamed?            | Collision Avoided |
| --- | ------ | ---------- | ------------------- | ----------------- |
| 1   | [name] | /[command] | No/Yes (was /[old]) | [what it avoids]  |

...

| #   | Agent  | Purpose   | Background? | Skills Preloaded |
| --- | ------ | --------- | ----------- | ---------------- |
| 1   | [name] | [purpose] | true        | [list]           |

...

**Config**: [local.md template description]
**Evals**: [N routing + N negative cases]
```

#### Section B: Lesson Plan

```markdown
## 15 Lessons

| Lesson | Content | Skill/Agent | Exercise | Duration |
| ------ | ------- | ----------- | -------- | -------- |
| L01    | [title] | —           | —        | 30 min   |

...

**Exercise cross-references**: Ex N references Ex M results
**Build-first lessons**: L03, L05 (students build skills before installing plugin)
```

#### Section C: Fact Verification

```markdown
| Claim      | Source    | Verdict | Action                          |
| ---------- | --------- | ------- | ------------------------------- |
| [stat]     | [source]  | Suspect | [VERIFY] — use hedging language |
| [scenario] | Synthetic | Fine    | Keep as teaching scenario       |
```

#### Section D: Team Prompt Inputs

```markdown
**Reference chapters**: [primary] + [secondary]
**Plugin builder refs**: 3 canonical URLs
**Fact flags**: N claims marked [VERIFY]
**Open questions**: 0
```

### Stage 5: Team Prompt Generation

Invoke `/team-prompt-writer` with the complete context from Stage 4:

- Spec path + skills specs path
- Plugin repo path + chapter destination
- ALL binding design decisions from Stage 3
- Complete lesson plan with exercise mapping from Stage 4
- Reference chapters
- Plugin builder reference URLs (3 canonical docs)
- Fact verification flags
- Any chapter-specific constraints

The team-prompt-writer generates the phased pipeline prompt
(architect → reference-builder → plugin-builder → writers → quality-reviewer).

**After generation**, verify the team prompt contains:

- [ ] Zero open questions (all decisions are binding)
- [ ] All renames reflected in plugin builder mapping table
- [ ] All corrections from Stage 3 reflected in lesson scopes
- [ ] Fact verification flags in writer rules
- [ ] Plugin builder has the 3 canonical reference URLs
- [ ] Writer scopes use spec line ranges (no writer reads the full spec)

## Key Principles

**Front-load decisions.** Every decision that would cause rework if made mid-writing
must be resolved in Stages 2-4. The team prompt should contain ZERO open questions.

**User corrections change the model.** When the user corrects an assumption, trace
ALL downstream impacts using the Cascade Protocol. Don't just fix the one thing —
fix everything it touches. This is the most common failure mode: a correction gets
applied locally but stale assumptions survive in the lesson plan or team prompt.

**Opinionated defaults, explicit overrides.** Present your recommendation first.
The user can override. But never present options without a recommendation — that's
delegation, not design.

**Research, don't guess.** Stage 1 reads actual files and fetches actual docs. Don't
assume plugin structures, collision patterns, runtime capabilities, or format
requirements from memory. The filesystem and official docs are the source of truth.

**Challenge your own assumptions.** If the user doesn't challenge them, you should.
Before finalizing Stage 4, ask yourself: "What am I assuming about runtime
capabilities, user workflow, or platform features that I haven't verified?"

## Adaptation by Chapter Type

| Chapter Type                               | Stage 0 | Stage 1 Focus                                     | Stage 2 Categories        | Plugin?      |
| ------------------------------------------ | ------- | ------------------------------------------------- | ------------------------- | ------------ |
| **Plugin chapter** (Banking, Supply Chain) | Build   | Plugin audit + collision + format + WebFetch docs | All 7                     | Yes          |
| **Companion repo chapter** (CA/CPA)        | Skip    | Repo structure + format                           | 4-7 (no collision)        | No           |
| **Reuse chapter** (using existing plugin)  | Reuse   | Format only                                       | 4-7                       | No           |
| **Extension chapter**                      | Extend  | Gap analysis + format                             | All 7 (lighter collision) | Small plugin |

## What This Skill Does NOT Do

- Does not write lesson content (that's the team's job)
- Does not build the plugin (plugin-builder teammate does that)
- Does not run the team (user pastes the team prompt)
- Does not replace `/team-prompt-writer` — it feeds it with resolved context

## Failure Modes to Avoid

- **Skipping Stage 0** → Building a plugin when existing one would suffice
- **Skipping Stage 1 research** → Collision discovered mid-writing, causes rework
- **Not fetching official docs** → Plugin builder uses wrong format, skill/agent files invalid
- **Presenting options without recommendations** → User has to do your thinking
- **Applying corrections without cascade analysis** → Stale decisions in team prompt
- **Starting team prompt before all decisions are binding** → Open questions in prompt
- **Assuming runtime capabilities** → Always verify what works in Cowork/Claude Code
- **Generating diagnostics that duplicate user's pre-research** → Wastes time, annoys user
- **Recommending a router for small plugin** → Router adds indirection without value for <10 well-named skills
