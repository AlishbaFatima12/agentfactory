# Chapter Writing Methodology: Python for the New AI Era

**Version:** 3.1
**Date:** 2026-03-19
**Purpose:** Comprehensive reference for how every chapter in the Python course is written — from research to publication.
**Companion to:** `python-new-era-plan.md` (v2.17)

---

## 1. Why This Document Exists

Writing educational content about fast-moving tools (uv, pyright, ruff, pytest, FastAPI) is dangerous. Facts change. Commands change. Config formats change. If we write from memory, we get:

- Wrong command syntax (uv's CLI has changed 3 times in 12 months)
- Outdated config options (pyright adds new strictness rules regularly)
- Incorrect version numbers (ruff releases weekly)
- Hallucinated features (tools we think exist but don't)
- Wrong chapter cross-references (the Seven Principles are in Chapter 6, not Chapter 4 or 7)

This happened in Chapter 2 of the main book (the "Chapter 2 Incident" — 6 rewrites due to hallucinated facts). This document ensures that never happens again.

**The core principle**: Every command, every config option, every version number, and every chapter cross-reference shown to students must be verified before it appears in a lesson.

### Chapter Numbering Clarification

This methodology document uses the **book chapter numbers** (as they appear in `apps/learn-app/docs/`):

| This Document Says | Refers To | Book Path |
|---|---|---|
| Chapter 42 | PRIMM-AI+ Framework | `42-the-primm-ai-framework/` |
| Chapter 43 | Ten Axioms of Programming | `43-ten-axioms-of-programming-in-ai-driven-development/` |
| Chapter 44 | The Development Environment | `44-development-environment/` |
| Chapter 45 | Reading Python | `45-reading-python/` |
| Chapter 6 | Seven Principles | `06-seven-principles/` |
| Chapter 46+ | Python programming chapters (Phase 2+) | To be created |

**Rule**: Always verify chapter numbers against the filesystem using `ls -d apps/learn-app/docs/*/NN-*/` before referencing them. Never guess.

---

## 2. MCP Grounding Strategy

### What MCP Servers We Have

We have two MCP (Model Context Protocol) servers configured at both user and project level:

| MCP Server | What It Does | When We Use It |
|------------|-------------|----------------|
| **Context7** | Fetches official library documentation directly from source. Returns structured, up-to-date API docs, CLI references, and configuration guides. | Every time we reference a tool's commands, config options, or API. This is our primary grounding source. |
| **Firecrawl** | Crawls and extracts content from any web page. Converts HTML to clean markdown. Can scrape blog posts, changelogs, GitHub READMEs, and release notes. | When we need information not in structured docs — blog announcements, community patterns, migration guides, changelog entries. |

### How Grounding Works in Practice

**Before writing any lesson that references a tool:**

```
Step 1: Context7 Fetch
  → Query official docs for the specific tool
  → Extract: exact CLI commands, config file format, current options
  → Save key findings in the expertise skill

Step 2: Firecrawl (if needed)
  → Crawl the tool's changelog or blog for recent changes
  → Crawl GitHub issues for known gotchas
  → Extract: version numbers, breaking changes, common problems

Step 3: WebSearch (supplementary)
  → Search for "[tool] common setup problems 2026"
  → Search for "[tool] Windows/Mac/Linux differences"
  → Extract: platform-specific notes, community workarounds

Step 4: Cross-verify
  → If Context7 and Firecrawl disagree, trust Context7 (official docs)
  → If a feature appears in a blog but not in docs, mark it as "unverified"
  → Never show unverified commands to students
```

### Grounding Table Per Chapter

Every chapter gets a grounding table before writing begins. Example:

| Topic | MCP Source | What to Extract | Verified? |
|-------|-----------|-----------------|-----------|
| `uv init` command | Context7 → uv docs | Exact syntax, flags, output | [ ] |
| `pyproject.toml` fields | Context7 → uv docs | Required fields, tool sections | [ ] |
| pyright strict mode | Context7 → pyright docs | `pyrightconfig.json` format, strict options | [ ] |
| ruff configuration | Context7 → ruff docs | `ruff.toml` format, rule selection | [ ] |
| pytest basic usage | Context7 → pytest docs | `pytest` CLI, conftest.py, fixtures | [ ] |
| uv current version | Firecrawl → uv changelog | Latest stable version number | [ ] |
| Platform differences | WebSearch | Windows vs Mac vs Linux install notes | [ ] |

**Rule**: No lesson moves to content-implementer until all rows are checked.

---

## 3. The PRIMM-AI+ Framework: Two Tracks

Every lesson and every chapter in Parts 4 and 5 follows the PRIMM-AI+ framework defined in Chapter 42. This is not optional — it is the structural backbone of the entire course.

### Track A vs Track B

The critical distinction learned from Chapter 43 (v2 rewrite after PR #853 failure):

| Dimension | Track A: Code Exercises | Track B: Conceptual Reasoning |
|-----------|------------------------|------------------------------|
| **Used when** | Students know the programming tools | Students are learning concepts before code |
| **Exercises use** | Real code, real tools (pytest, pyright, etc.) | Real-world scenarios, plain-English reasoning |
| **Predict stage** | Predict code output | Classify, categorize, or reason about a scenario |
| **Run stage** | Run code, compare output | Ask AI, compare to prediction |
| **Investigate stage** | Trace tables, variable tracking | Written explanation, Error Taxonomy classification |
| **Modify stage** | Change code, observe behavior change | Change scenario, reason about what breaks |
| **Make stage** | Write new code from spec | Write structured plan, checklist, or document |
| **Chapters** | Chapters 44+ (Dev Environment onward) | Chapters 42-43 (conceptual foundations) |

**The PR #853 Lesson**: The first attempt at Chapter 43 PRIMM-AI+ used Track A exercises (Makefiles, pytest, SQL, Docker, git commands) for students who didn't know those tools yet. Every exercise was inaccessible. The v2 rewrite switched to Track B — all exercises use real-world scenarios and plain-English reasoning, not code. **Always match the track to what students actually know at that point in the book.**

### The Five-Step Lesson Architecture

Every lesson follows the same five steps — one for each PRIMM stage:

| Step | PRIMM Stage | What Happens | AI Permission |
|------|-------------|-------------|---------------|
| 1 | **Predict** | Lesson presents a scenario or worked example. Student writes prediction + confidence score (1-5). | AI-free |
| 2 | **Run** | Student runs code (Track A) or asks AI (Track B) and compares to prediction. | AI allowed |
| 3 | **Investigate** | Student produces a trace table, explanation, or Error Taxonomy classification. Optional Parsons Problem. | AI after student's first explanation |
| 4 | **Modify** | Student changes the scenario or code to add a feature or break something. | AI for hints only |
| 5 | **Make** | Student creates something new that demonstrates understanding (Mastery Gate). | AI for review only |

**Core progression**: You understand before you change, and you change before you create.

### Answer Keys (Mandatory)

Every Predict section must have a resolution. Students should never be left guessing whether their prediction was correct.

**Pattern**: Add a collapsible `<details>` answer key after the Run section:

```markdown
<details>
<summary><strong>Answer Key (check after comparing with AI)</strong></summary>

| Item | Classification | Why |
|------|---------------|-----|
| Task 1 | Work | A tool produces a result... |
| Task 2 | Coordination | A decision about sequence... |

</details>
```

**Why this matters**: Without an answer key, students who disagree with the AI have no authoritative resolution. The Axiom I answer key revealed that Task 6 was "Both" — a nuance that neither students nor AI consistently catch. The learning happens in the comparison + resolution, not in the AI's answer alone.

### Error Taxonomy (Every Investigate Section)

Every Investigate section applies one of five error types from the Error Taxonomy:

| Error Type | What It Means | Example |
|-----------|---------------|---------|
| **Type error** | Wrong data shape | Text where a number belongs |
| **Logic error** | Wrong reasoning | Correct types but wrong calculation |
| **Specification error** | Ambiguous requirements | "Make it good" producing the wrong thing |
| **Data/edge-case error** | Unexpected inputs | Plan fails when bakery is closed |
| **Orchestration error** | Tangled responsibilities | Director also builds the set |

**Pattern**: After the student writes their explanation, add: "Apply the **Error Taxonomy**: [specific situation] = **[error type]**. [One sentence explaining why.]"

### Verification Ladder (Chapter-Spanning Arc)

Five axioms introduce a new **method of checking**. These are announced progressively:

| Rung | Name | Introduced At | What It Means |
|------|------|--------------|---------------|
| 1 | Prediction | Axiom I | Predict an outcome, then check if you were right |
| 2 | Types | Axiom V | Catch errors by checking the *shape* of data |
| 3 | Tests | Axiom VII | Define what "correct" means *before* building |
| 4 | Pipeline | Axiom IX | Run multiple checks in order — fast first, slow last |
| 5 | Observability | Axiom X | Watch what happens *after* delivery |

**Why only five axioms, not all ten?** The other five axioms (II, III, IV, VI, VIII) teach *what to build well*, but they do not introduce a new verification method. They still use Rung 1 (prediction) in every Predict step. Only add a Verification Ladder callout to the axioms that introduce a new rung.

**Pattern**: Add a `:::tip Verification Ladder` at the end of the Make section for rungs 1, 2, 3, 4, and 5.

### Mastery Gates (Every Make Section)

The Make section is not optional practice — it is a **gate**. The student must produce an artifact that demonstrates understanding. The artifact format depends on the track:

| Track | Mastery Gate Artifact |
|-------|--------------------|
| Track A (code) | Working code that passes tests |
| Track B (conceptual) | Written plan, structured document, checklist, or relationship map |

**Pattern**: End every Make section with explicit guidance on what the artifact should contain and how the student can self-check it.

### Parsons Problems (Selected Lessons Only)

Parsons Problems — scrambled steps students reorder into the correct sequence — appear in specific lessons, not all of them. In Chapter 43 they appear in Axioms I, IV, and VII only.

**Track A**: Scrambled code lines reordered into a working program.
**Track B**: Scrambled process steps reordered into the correct sequence, with follow-up questions about which steps are coordination vs work.

### The Chapter-Level PRIMM-AI+ Pattern

The five-step sequence also governs the chapter as a whole, at a larger scale:

| Chapter Element | PRIMM-AI+ Connection | What Happens |
|----------------|----------------------|-------------|
| Chapter Opening | Worked Example + Predict and Run | Complete programs or scenarios, predict outcomes with confidence scoring |
| Core Lessons | Investigate with Artifacts | Trace variables (Track A) or explain reasoning (Track B), apply Error Taxonomy |
| Structural Bridge | Parsons Problems | Scrambled-code (A) or scrambled-process (B) exercises test structural understanding |
| Exercises | Modify | Change existing programs or scenarios to add features or break things |
| Capstone | Make with Mastery Gate | Build something new from a specification, with AI as reviewer |

**Students are never dropped into a Make exercise cold.** By the time a chapter asks them to create from scratch, they have predicted, run, investigated, and modified using the same concepts.

### Four Embedded Teaching Methods

Four research-backed teaching methods are woven into the PRIMM-AI+ stages — not added on top:

| Method | What It Is | Where It Fits in PRIMM-AI+ |
|--------|-----------|---------------------------|
| **Worked Examples** | Complete programs or scenarios students study before acting | Predict and Investigate |
| **Parsons Problems** | Scrambled code/steps students reorder | Between Investigate and Modify |
| **Live Coding** | Real-time coding with narrated thinking (classroom) | Investigate and Modify |
| **Peer Instruction** | Individual thinking, then group discussion | Across all stages |

In **solo mode** (this book's default), AI replaces the human peer — but only after the student has committed their own answer first (AI-free checkpoint). In **classroom mode**, teachers add collaborative elements on top of the same structure.

### Classroom vs Solo Mode

This book is designed for solo mode. Every technique works with just the student, the book, and their AI assistant. Key solo-mode safeguards:

- **AI-free checkpoints**: Predict is always AI-free. Make begins AI-free.
- **Confidence scoring**: Students rate certainty 1-5 before seeing results. False confidence is the most dangerous state.
- **Mastery gates**: Students must earn the right to proceed (written prediction exists, comparison recorded, can explain how not just what, written spec exists).
- **Mandatory trace artifacts**: Every Investigate stage must produce something visible (trace table, explanation, or Error Taxonomy classification).

---

## 4. Tone and Narrative Continuity

### Chapter 43's Established Pattern

Chapter 43 (Ten Axioms of Programming in AI-Driven Development) is the second chapter in Phase 1 of the Python course. It establishes professional principles before students install tools or read code:

**Characters:**
- **James** — The learner. Enthusiastic, sometimes rushes ahead, makes the mistakes students will make. He represents the student's journey.
- **Emma** — The mentor. Experienced, patient, explains the "why" before the "how." She represents the course's teaching voice.

**Narrative Structure (per lesson):**
1. James faces a real problem (something goes wrong)
2. The problem illustrates why an axiom matters
3. Emma explains the axiom with a clear analogy
4. Concrete code/tool example shows the axiom in action
5. James applies it and sees the improvement
6. Lesson closes with the principle crystallized

**Tone:**
- Conversational but precise — never dumbed down, never jargon-heavy
- Problem-first — always show the pain before the solution
- Practical — every concept connects to something the student will actually do
- Respectful — assumes the student is smart but new to this specific topic

**Named Anti-patterns:** Chapter 43 names specific mistakes (Circular Testing Trap, Green Bar Illusion, Prototype Trap, etc.). These become recurring vocabulary students recognize.

### The "From Principle to Axiom" Cross-Reference Pattern

Every axiom lesson in Chapter 43 connects back to Chapter 6 (Seven Principles) with a comparison table. The pattern:

1. Reference the principle with a **Docusaurus link**: `In [Chapter 6](/docs/General-Agents-Foundations/seven-principles/bash-is-the-key), you learned **Principle 1: Bash is the Key**`
2. Add a **concrete callback** to what students learned (e.g., the Vercel d0 case study)
3. Show a **comparison table** with labeled columns: `Principle N (Chapter 6)` vs `Axiom N (this lesson)`
4. Bridge paragraph explaining what the principle gave them vs what the axiom adds

**Chapter reference accuracy rule**: Always verify chapter numbers against the filesystem before referencing them. The Seven Principles are in Chapter 6, not Chapter 4 or 7. Run `ls -d apps/learn-app/docs/*/06-*/` to confirm.

### The Bridge from Chapter 43 to Chapter 44 (Conceptual → Hands-On)

Chapter 43 ends with students understanding the TEN AXIOMS — the principles that govern how you work with AI-generated code. They know the WHY. But they haven't done anything yet. Their laptop is still unconfigured.

**Chapter 44 (The Development Environment) is where theory becomes reality.**

The narrative bridge should feel like this progression:

```
Ch 43 (final words): "You now have ten axioms — a complete engineering system.
                       But axioms on paper don't ship software.
                       It's time to build the workbench."

Ch 44 L1 (opening):  James opens his laptop. Empty terminal. No Python tools.
                       Emma: "Every craftsperson starts by setting up their bench.
                       Let's install each tool — and I'll show you which axiom
                       it enforces."
```

**The key insight**: Chapter 44 is NOT a generic "install Python" tutorial. It is the PHYSICAL MANIFESTATION of the axioms. Every tool installed ties back to a specific axiom:

| Tool Being Installed | Axiom It Enforces | Connection |
|---------------------|-------------------|------------|
| **uv** (package manager) | Axiom I: Shell as Orchestrator | uv is how you orchestrate Python from the shell |
| **pyproject.toml** | Axiom II: Knowledge is Markdown | Project config IS knowledge, stored as structured text |
| **pyright** (type checker) | Axiom V: Types Are Guardrails | pyright is the guardrail that catches type errors |
| **ruff** (linter/formatter) | Axiom IX: Verification is a Pipeline | ruff is the first stage of the verification pipeline |
| **pytest** (testing) | Axiom VII: Tests Are the Specification | pytest is where specifications become executable |
| **git init** | Axiom VIII: Version Control is Memory | git gives the project persistent memory from day one |

**This axiom-callback pattern is what makes our chapter different from every other Python setup tutorial.** Students don't just install tools — they understand WHY each tool exists in the context of the engineering system they just learned.

### Tone Shift: Ch 43 → Python Chapters

| Dimension | Ch 43 (Axioms) | Python Chapters |
|-----------|----------------|---------------------|
| **Mode** | Philosophical, conceptual | Hands-on, terminal-driven |
| **Student action** | Read, understand, predict | Run commands, read output, verify |
| **James's role** | Asking "why?" questions | Running commands, checking output |
| **Emma's role** | Explaining principles | Guiding setup, explaining each tool's purpose |
| **Code examples** | Illustrative (conceptual) | Runnable (copy-paste and verify) |
| **Pacing** | Ideas per lesson | Steps per lesson |

**What stays the same**: Characters, respect for the reader, problem-first teaching, connecting every action to a bigger purpose.

---

## 5. Beginner Accessibility Rules

These rules were established through iterative refinement of Chapter 43. They prevent the most common accessibility failures.

### Rule 1: Match Examples to Student Knowledge

**Never use professional tools in examples that target students who don't know those tools.**

| Wrong (students don't know these yet) | Right (students can relate) |
|---------------------------------------|---------------------------|
| ADR about SQLModel vs SQLAlchemy vs Tortoise ORM | ADR about event-driven messaging (connects to James's story) |
| CLAUDE.md with uvicorn, alembic, dependency injection | CLAUDE.md with `python app.py` and `python -m pytest` |
| "We decided to use Redis for caching" | "We decided to use Google Slides instead of PowerPoint" |

**When professional tools appear in code examples**, add a `:::tip` block:

```markdown
:::tip Don't worry about the technical details
You do not need to understand REST, events, or messaging yet. Focus on the
**structure** — Status, Context, Decision, Consequences, Alternatives. That
structure is what makes the reasoning findable six months later.
:::
```

### Rule 2: Ground PRIMM-AI+ Exercises in the Lesson Narrative

**Never create exercises that exist in a vacuum.** Every exercise should connect to the lesson's story:

| Wrong | Right |
|-------|-------|
| "Classify these 6 generic tasks as coordination or work" | "You're in James's shoes. Your team needs to ship an update. Classify these 6 deployment tasks..." |
| "Think of a process and break it into steps" | "Think about a multi-step process you go through regularly — submitting an assignment, publishing a post..." |

### Rule 3: Never Leave Predictions Unresolved

Every Predict section must have an answer key (see Section 3). Students who predict and never learn the right answer develop false confidence or silent confusion — both are worse than never predicting at all.

### Rule 4: Avoid Jargon-Dense Run-On Sentences

Long sentences with multiple analogies overwhelm beginners. Break them into bulleted lists or short sentences:

| Wrong | Right |
|-------|-------|
| "A Google Doc is X, a Slack message is Y, a Confluence page is Z, and markdown is W — all in one sentence." | A bulleted list with one format per bullet, each 1-2 lines. |

### Rule 5: Add Syntax Tips for Unfamiliar Code

When showing code that students haven't learned yet (Makefiles, Python, shell scripts), add a `:::tip` explaining what to focus on:

```markdown
:::tip Don't worry about Makefile syntax
You will learn Makefiles later. For now, ignore details like `.PHONY` and
the tab indentation. Focus on the structure: each named section calls a
tool and nothing else.
:::
```

---

## 6. The Iterative Evaluation Pattern

Every lesson should be evaluated before finalizing. This pattern was established during Chapter 43 refinement.

### The Evaluation Rubric

Rate each lesson out of 10 from a beginner student's perspective. Evaluate these dimensions:

| Dimension | What to Check |
|-----------|--------------|
| **Narrative hook** | Does the opening create stakes? Is it relatable? |
| **Concept clarity** | Can a beginner understand the core idea without prior knowledge? |
| **Example accessibility** | Do examples use tools/concepts students already know? |
| **PRIMM-AI+ quality** | Does every Predict have an answer key? Are Investigate/Modify specific (not vague)? |
| **Cross-references** | Are chapter numbers correct? Do links point to the right lessons? |
| **Cognitive load** | Are there too many new concepts at once? Any dense paragraphs that need breaking up? |
| **Progression** | Does each section build on the previous one? |
| **Takeaways** | Do key takeaways cover all major concepts without redundancy? |

### The Fix Cycle

1. Evaluate → identify specific issues with line numbers
2. Fix issues → edit the file
3. Re-evaluate → confirm the rating improved
4. Repeat until rating ≥ 8.5/10

**Common issues found during Chapter 43 evaluation:**
- No answer key in PRIMM-AI+ (found in Axiom II)
- Professional tool references beginners don't know (found in Axioms I, II)
- Vague Investigate questions that just restate the axiom (found in Axiom II)
- Wrong chapter cross-references (found in all 10 axioms — Chapter 4/7 → Chapter 6)
- Run-on sentences with multiple analogies (found in Axiom II)
- Makefile syntax unexplained (found in Axiom I)

---

## 7. Chapter Structure Methodology

### Lesson Breakdown for Any Chapter

Every chapter in the Python course follows this internal structure:

```
Chapter N: [Title]
├── Lesson 1: [Opening — the "why" and context]
├── Lesson 2-N: [Core content lessons]
├── Lesson N+1: [Synthesis / putting it together]
└── Quiz: [Assessment]
```

### Per-Lesson Internal Structure

Every lesson within a chapter follows this template, aligned with the PRIMM-AI+ five-step architecture (see Section 3):

```
YAML Frontmatter (MANDATORY)
├── sidebar_position, title, description, keywords
├── chapter, lesson, duration_minutes
├── skills (name, proficiency_level, category, bloom_level, digcomp_area)
├── learning_objectives (objective, proficiency_level, bloom_level, assessment_method)
├── cognitive_load (new_concepts count, assessment)
└── differentiation (extension_for_advanced, remedial_for_struggling)

Narrative Opening (2-3 paragraphs)
├── James faces a situation / problem
├── Connect to what student already knows
└── Set up what this lesson will solve

The Problem Without This Axiom
├── Show the pain / failure mode
└── Connect back to narrative

The Axiom/Concept Defined
├── Formal statement (blockquote)
├── Table separating key distinctions
└── Image/diagram where applicable

Historical Background (collapsible <details> block)
└── Optional — for concepts with interesting origins

From Principle to Axiom (for axiom chapters)
├── Link to Chapter 6 principle with Docusaurus URL
├── Concrete callback to what students learned
├── Comparison table: Principle (Chapter 6) vs Axiom (this lesson)
└── Bridge paragraph

Practical Application
├── Core content with verified examples
├── :::tip blocks for unfamiliar syntax
├── Tables comparing options
└── Code examples (with comments explaining orchestration vs computation, etc.)

Anti-Patterns
└── Table: What It Looks Like | Why It Fails | The Fix

Try With AI Section (3 prompts)
├── Prompt 1: Exploration prompt (understand the concept)
├── Prompt 2: Application prompt (apply to a scenario)
├── Prompt 3: Domain connection prompt (apply to student's own context)
├── Each has "What you're learning:" explanation
└── Beginner-accessible examples in prompt instructions

PRIMM-AI+ Practice Section
├── Definitions block (anchor key terms before exercises)
├── Predict [AI-FREE] with confidence score
├── Run (compare with AI)
├── Answer Key (<details> collapsible)
├── Investigate (specific question + Error Taxonomy)
├── Parsons Problem (selected lessons only)
├── Modify (harder scenario that reveals new insight)
├── Make [Mastery Gate] (worked example + self-check guidance)
└── Verification Ladder tip (selected lessons only: I, V, VII, IX, X)

Named Trap/Illusion Section (where applicable)
└── Specific anti-pattern with narrative example

Key Takeaways (5 bullets)
└── Core insights, connection to next lesson

Looking Ahead (1-2 paragraphs)
└── Bridge to next lesson
```

**Note**: Not every lesson includes all sections. Conceptual lessons (like Ch 42 L1-L3) may focus on specific stages. Programming lessons (Ch 44+) include the full five-step code cycle.

---

## 8. The Complete Writing Pipeline

### Phase A: Build Expertise Skill (Research)

**Who does this**: Main agent (orchestrator) using MCP tools

**Duration**: ~30 minutes per chapter

**Process**:

```
1. GROUND with MCP
   ├── Context7: Fetch official docs for each tool in the chapter
   ├── Firecrawl: Crawl changelogs, blog posts, recent updates
   └── WebSearch: Community patterns, common problems, platform differences

2. BUILD the expertise skill
   ├── Persona: Expert identity and voice for this chapter's domain
   ├── Logic: Decision trees (when to use what, common errors and fixes)
   ├── Context: Prerequisites (what student must know before this chapter)
   ├── Data/Knowledge: Verified API patterns, commands, config formats
   ├── MCP: Which tools to use for ongoing verification
   └── Safety/Guardrails: What to avoid, common misconceptions, outdated patterns

3. TEST the skill
   ├── Run every command sequence on a fresh environment
   ├── Verify every config file format parses correctly
   └── Confirm expected output matches actual output

4. COMMIT the skill
   └── Save as .claude/skills/[chapter-domain]/SKILL.md
```

**Output**: A verified expertise skill grounded in official documentation.

### Phase B: Chapter Planning

**Who does this**: Main agent + chapter-planner subagent

**Process**:

```
1. READ Chapter 43 (or previous chapter) for tone/style reference
   └── Note: characters, narrative patterns, exercise style, pacing

2. PLAN lesson breakdown
   ├── chapter-planner subagent → pedagogical arc
   ├── Define lessons (titles, goals, content outline)
   ├── Determine Track A or Track B for PRIMM-AI+ exercises
   └── Map exercises to lesson positions

3. DEFINE learning objectives
   ├── /learning-objectives skill → measurable outcomes per lesson
   └── /skills-proficiency-mapper → CEFR level, Bloom's taxonomy

4. VALIDATE cognitive load
   ├── Count new concepts per lesson (target: 3-5 for A1 level, up to 7 for B1)
   └── Ensure progressive complexity within the chapter

5. APPROVE plan with user before proceeding to writing
```

**Output**: Approved lesson plan with objectives, proficiency levels, and exercise placement.

### Phase C: Content Creation (Per Lesson)

**Who does this**: content-implementer subagent (NEVER the main agent directly)

**Why subagent?** The main agent is the orchestrator. Writing 500-1000 lines of educational prose in the main session causes context bloat, quality degradation, and loses the strategic view. The content-implementer subagent gets a focused prompt with everything it needs.

**Process for each lesson**:

```
1. PROMPT the content-implementer subagent with:
   ├── The expertise skill (grounded knowledge)
   ├── The lesson plan (objectives, concepts, exercises)
   ├── A reference lesson from Ch 43 (for tone matching)
   ├── Character context (James/Emma, their dynamic)
   ├── The axiom callback for this lesson's tools
   ├── Track A or Track B for PRIMM-AI+ exercises
   ├── Full YAML frontmatter requirements
   └── Output path (absolute, specific)

2. SUBAGENT WRITES the lesson
   ├── Opens with narrative (James/Emma)
   ├── Covers all planned content with verified commands
   ├── Includes PRIMM-AI+ Practice section with answer key
   ├── Includes 3 Try With AI prompts
   ├── Adds :::tip blocks for unfamiliar syntax
   └── Outputs complete .md file

3. VALIDATE in parallel:
   ├── educational-validator subagent → constitutional compliance
   ├── factual-verifier subagent → all commands/versions/claims verified
   └── /content-evaluation-framework skill → 6-category rubric scoring

4. EVALUATE using iterative evaluation pattern (Section 6)
   ├── Rate out of 10 from beginner perspective
   ├── Fix issues until ≥ 8.5/10
   └── Common fixes: answer keys, beginner examples, chapter references

5. COMMIT the lesson
   └── git add + commit with descriptive message
```

**Output**: One complete, validated, committed lesson file.

### Phase D: Chapter Assembly

**Who does this**: Main agent

**Process**:

```
1. VERIFY all lessons are committed and validated
2. CREATE chapter README.md (overview, prerequisites, lesson list)
3. CREATE quiz using /quiz-generator skill
4. RUN final content-evaluation-framework on full chapter
5. VERIFY all cross-references (chapter numbers, Docusaurus links)
6. UPDATE progress tracking
7. COMMIT chapter as complete unit
```

---

## 9. Pedagogical Layer System

Every chapter maps to a pedagogical layer from the course plan. This determines what students DO in that chapter.

### The Layers

```
L1 (Manual Foundation): Student learns the concept manually first
    → Used in: Early programming chapters
    → Student action: Read, run commands, predict output
    → AI role: Minimal — generates scaffolding for student to read
    → PRIMM-AI+ Track: A (code) with heavy guidance

L2 (AI Collaboration): Student knows the concept, now works WITH AI
    → Used in: Intermediate chapters
    → Student action: Write specs/tests, AI implements, student verifies
    → AI role: Active partner — Three Roles Framework applies
    → PRIMM-AI+ Track: A (code) with increasing independence

L3 (Skill Building): Pattern recurs, student builds reusable skills
    → Used in: Advanced chapters
    → Student action: Design systems, orchestrate AI, ship software
    → AI role: Tool in student's workflow
    → PRIMM-AI+ Track: A (code) with full autonomy

L4 (Spec-Driven): Student drives full spec → implement → verify cycle
    → Used in: Capstone chapters
    → Student action: Full architect role
    → AI role: Implementation engine
    → PRIMM-AI+ Track: A (code) — student orchestrates everything
```

### Conceptual Chapters (Ch 43, Ch 42) = Pre-L1

Chapters 42-43 are **conceptual foundations** before any programming:
- Students READ and REASON, they don't write code
- PRIMM-AI+ Track B: plain-English exercises with real-world scenarios
- Exercises are classification, structured writing, and reasoning — not coding
- Success = "I can explain the concept and apply it to a new scenario"

---

## 10. Quality Gates

Every lesson must pass through these gates before it's considered done:

### Gate 1: Constitutional Compliance (Pass/Fail)

Checked by: `educational-validator` subagent

- Does it follow the 4-Layer Teaching Method?
- Does it include all required YAML frontmatter?
- Does it maintain the AI-first philosophy?
- Does it avoid the Nine Pillars violations?

**If FAIL**: Content cannot proceed. Must be revised.

### Gate 2: Factual Accuracy

Checked by: `factual-verifier` subagent

- Are all commands verified against official docs (via MCP)?
- Are all version numbers current?
- Are all config file formats correct?
- Are all expected outputs accurate?
- **Are all chapter cross-references correct?** (verify against filesystem)

**If FAIL**: Specific claims flagged for correction.

### Gate 3: Content Quality Score (must be >= 75%)

Checked by: `/content-evaluation-framework` skill

| Category | Weight | What It Checks |
|----------|--------|----------------|
| Technical Accuracy | 30% | Code correctness, commands work, types present |
| Pedagogical Effectiveness | 25% | Show-then-explain, progressive complexity, exercises |
| Writing Quality | 20% | Readability, grade-level appropriate, clear |
| Structure & Organization | 15% | Learning objectives met, logical flow, transitions |
| AI-First Teaching | 10% | Co-learning shown, Three Roles where applicable |

**Minimum**: 75% overall, no category below 50%.

### Gate 4: Narrative Consistency

Checked by: Main agent (manual review)

- Are James/Emma in character?
- Does the tone match Chapter 43?
- Are axiom callbacks natural (not forced)?
- Does each lesson flow into the next?

### Gate 5: Beginner Accessibility (NEW)

Checked by: Iterative evaluation pattern (Section 6)

- Are all examples accessible to students at this chapter's level?
- Does every PRIMM-AI+ Predict section have an answer key?
- Are Investigate questions specific (not vague restatements of the axiom)?
- Are Modify scenarios harder than Predict (not trivial variations)?
- Are :::tip blocks present for unfamiliar syntax?
- Are all chapter cross-references verified against the filesystem?

**Target**: 8.5/10 or higher on the evaluation rubric.

---

## 11. The "Before vs After" Teaching Pattern

This is Chapter 43's signature teaching technique and we carry it into every Python chapter.

### How It Works

For every tool or concept, show TWO versions:

**Version 1 — Without the tool (the mess):**
Show what happens when you skip this tool. Make the pain real.

```
Example for pyright:
  "James writes a function that takes a string but passes it an integer.
   Python doesn't complain. The code runs. Then it crashes at 2 AM
   in production with: TypeError: can't multiply str by int"
```

**Version 2 — With the tool (the fix):**
Show the same scenario with the tool active. The problem is caught immediately.

```
Example for pyright:
  "Emma shows James the same code with pyright running.
   A red squiggly appears BEFORE he even runs the code:
   'Argument of type int is not assignable to parameter of type str'
   Problem caught in 0.2 seconds instead of at 2 AM."
```

### Why This Works

1. **Motivation**: Students don't install tools because a book told them to. They install tools because they SAW what happens without them.
2. **Memory**: The contrast between "before" and "after" is more memorable than just showing the "right way."
3. **Axiom reinforcement**: Each "before vs after" demonstrates an axiom in action.

---

## 12. One Running Example Per Chapter

### The Problem with Multiple Examples

Most tutorials use a different example for each concept. By the end, students have seen a calculator, a todo list, a weather app, and a shopping cart — none of which connect.

### Our Approach: One Project Per Chapter

Each chapter uses ONE project that grows across all lessons. Students aren't doing disconnected exercises — they're building one real thing.

---

## 13. Platform-Specific Handling

### The Problem

uv installation is different on Windows, Mac, and Linux. pyright behaves slightly differently across platforms. Students will hit platform-specific issues.

### Our Approach: Callout Boxes, Not Separate Sections

We do NOT write three versions of each lesson. Instead:

```markdown
> **Windows users**: Run `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"` instead.

> **Mac/Linux users**: The command above works directly in your terminal.
```

**Rules for platform callouts:**
1. Keep them short (1-2 lines)
2. Place them immediately after the main command
3. Only include when the platform difference actually matters
4. Use consistent formatting (blockquote with bold platform name)
5. Test commands on all platforms during Phase A (expertise skill building)

---

## 14. Exercise Design

### Track B Exercises (Conceptual Chapters — Ch 43, Ch 42)

```
Predict & Classify     — 50% (classify tasks, predict properties, categorize)
Parsons Problems       — 15% (reorder process steps, selected lessons only)
Structured Writing     — 20% (ADRs, plans, checklists, specifications)
Scenario Reasoning     — 15% (what breaks if you change X?)
```

### Track A Exercises (Programming Chapters — Ch 44+)

```
Type 1: Read & Predict     — 60% of exercises (PRIMARY)
Type 2: Spot the Bug       — 15% of exercises
Type 3: Parsons Problem    — 15% (scrambled code, reorder for correct program)
Type 4: Write the Test     — 10% (very simple, introduced late)
Type 5: TDG Cycle          — 0% in Phase 1 (introduced in Phase 2+)
Type 6: Build It           — 0% in Phase 1 (introduced in Phase 2+)
```

### What Parsons Problems Look Like

**Track B** (conceptual):
```markdown
Emma is rewriting James's broken deployment process. Here are the five steps
in scrambled order. Put them in the correct sequence:

- (A) The testing tool runs all tests and reports pass or fail
- (B) The orchestration file checks the test result — if tests failed, stop here
- (C) The build tool packages the application into a deployable file
- (D) Emma triggers the deployment process
- (E) The deployment tool pushes the package to the live server

Then answer: Which steps are coordination and which are work?
```

**Track A** (code):
```markdown
**Parsons Problem**: These four lines are scrambled. What is the correct order?

​```python
print(label)
temp: int = 32
label: str = city + ": " + str(temp) + "C"
city: str = "London"
​```

Rearrange them so the program outputs: `London: 32C`
```

---

## 15. The Checkpoint Pattern

### End-of-Chapter Verification

Every programming chapter ends with a single checkpoint command that verifies everything taught in that chapter is working:

**Example Checkpoint:**
```bash
uv run ruff check . && uv run pyright && uv run pytest
```

All must pass (green output). If any fails, the student knows exactly which lesson to revisit.

### Why This Matters

1. **Binary success**: Either it's green or it's not. No ambiguity.
2. **Pipeline preview**: This is a miniature version of the CI pipeline.
3. **Axiom IX in action**: "Verification is a Pipeline" — demonstrated on day one.
4. **Confidence builder**: Seeing three tools all pass on YOUR project is motivating.

---

## 16. Bold Highlighting Pattern

Every lesson uses inline bold text to create a "concept runway" — reading all bold statements in sequence tells the lesson's skeleton. This pattern comes from Part 1 and must be applied consistently across all chapters.

### How Bold Works

| Bold Type | Function | Example |
|-----------|----------|---------|
| **Reframing Statement** | Flips reader assumptions | "**Most programming courses start at the end.**" |
| **Core Definition** | Introduces essential concept | "**A prediction is specific and checkable.**" |
| **Critical Insight** | Distills key learning point | "**AI made production nearly free.**" |
| **Progressive Truth** | Reinforces core thesis as it builds | "**You started by reading someone else's code. You end by writing your own.**" |
| **Causal Claim** | When causation matters, bold it | "**False confidence is the most dangerous state for an AI-era developer.**" |

### Rules

1. **Inline, not standalone** — bold appears within paragraphs, not as separate lines
2. **Short and punchy** — typically 3-20 words
3. **Every 2-4 sentences** in substantive paragraphs (~1 bold per 14 lines of body content)
4. **Marks conceptual boundaries** — where new thinking starts
5. **Never in dialogue quotes** — bold the lesson's own prose, not character speech
6. **Never in callout boxes, tables, or code blocks** — body text only
7. **Builds cumulatively** — reading all bolds in sequence tells the lesson's skeleton

### Density Target

| Lesson Length | Target Bold Count |
|--------------|------------------|
| ~300 lines | ~15-20 key insight bolds |
| ~500 lines | ~25-35 key insight bolds |
| ~600+ lines | ~35-45 key insight bolds |

---

## 17. Key Rules (Non-Negotiable)

1. **Never write lesson prose directly** — always use content-implementer subagent
2. **Never show unverified commands** — MCP ground everything first
3. **Never show untyped Python** — every code example has type annotations
4. **Never skip YAML frontmatter** — full skills, objectives, cognitive load metadata
5. **Never introduce a tool without axiom callback** — every tool connects to Ch 43
6. **Never use multiple disconnected examples** — one running project per chapter
7. **Never drop students into Make cold** — every Make is preceded by Predict, Run, Investigate, and Modify on the same concepts
8. **Always follow the five-step PRIMM-AI+ lesson architecture** — Predict (AI-free) → Run → Investigate → Modify → Make (spec-first)
9. **Always show "Before vs After"** — pain first, solution second
10. **Always include 3 Try With AI prompts** — each targeting a different skill
11. **Always end programming chapters with checkpoint command** — binary pass/fail verification
12. **Always match Chapter 43's tone** — James/Emma, practical, respectful, problem-first
13. **Always bold key insight sentences** — inline, short, punchy, ~1 per 14 lines (see Section 16)
14. **Always include Parsons problems** — at least one per programming chapter, between Investigate and Modify
15. **Always include answer keys** — every Predict section gets a collapsible `<details>` resolution
16. **Always verify chapter cross-references** — run `ls -d` against filesystem, never guess chapter numbers
17. **Always match PRIMM-AI+ track to student knowledge** — Track B for conceptual chapters, Track A for programming chapters
18. **Never use professional tool examples for students who don't know those tools** — add `:::tip` blocks when showing unfamiliar syntax

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 3.1 | 2026-03-19 | Aligned with plan v2.17: updated companion reference, expanded chapter numbering table to include Ch 44 (Dev Env) and Ch 45 (Reading Python), updated Ch 43 from "bridge chapter" to "second chapter in Phase 1", fixed stale "Chapters 30-31" → "Chapters 42-43", updated Track A boundary from Ch 45+ to Ch 44+ (Dev Env has Track A exercises), updated narrative bridge section to reference Ch 44 specifically. |
| 3.0 | 2026-03-15 | Major update based on Chapter 43 v2 refinement: Added Track A/B distinction (Section 3), answer key pattern with `<details>`, Error Taxonomy and Verification Ladder as standard tools, beginner accessibility rules (Section 5), iterative evaluation pattern (Section 6), Gate 5 (beginner accessibility), "From Principle to Axiom" cross-reference pattern, chapter numbering clarification table, 4 new key rules (#15-#18), updated all "Chapter 14" references to "Chapter 43", updated per-lesson structure template with PRIMM-AI+ Practice section details |
| 2.0 | 2026-03-08 | Added Section 3 (PRIMM-AI+ lesson and chapter architecture from Ch 42 L3), Section 15 (bold highlighting pattern from Part 1), added Parsons Problems to exercise design, aligned per-lesson structure with five-step PRIMM-AI+ cycle, added four embedded teaching methods, added classroom/solo mode distinction, added 4 new key rules (#7 no cold Make, #8 follow five-step architecture, #13 bold key insights, #14 include Parsons problems), renumbered all sections |
| 1.0 | 2026-02-20 | Initial methodology document covering MCP grounding, narrative continuity, writing pipeline, quality gates, exercise design, and platform handling |
