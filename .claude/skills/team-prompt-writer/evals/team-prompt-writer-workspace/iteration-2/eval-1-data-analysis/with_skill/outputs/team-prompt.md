# Team Prompt: Part 5 — Data Analysis Fundamentals

Create an agent team to produce Part 5: Data Analysis Fundamentals, a 4-chapter, 16-lesson book part teaching non-programmers to analyze business data using AI-assisted workflows.

You are the team lead. You coordinate. You do NOT write content yourself. Spawn each worker below as a TEAMMATE in the agent team (not as a subagent). Use the shared task list to track all work. Enforce phase ordering: Phase 1 must complete before Phase 2 starts, Phase 2 before Phase 3, and so on.

**Source material**: `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md`
**Output directory**: `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`
**Reference lesson format**: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md`
**Constitution**: `.specify/memory/constitution.md`

**What this content IS**: A practical guide that transforms business professionals from "I have a spreadsheet and don't know what to do" into "I can ask the right questions, get AI to do the analysis, and critically evaluate the results." The audience knows systematic thinking and AI collaboration (Parts 0-4) but has zero programming, SQL, or statistics background. Every lesson should feel like advice from a mentor who has made these mistakes, not a textbook chapter. Real datasets, real business scenarios, real consequences of bad analysis.

---

## Phase 1: Architect (1 teammate)

Spawn a teammate named **architect**.

**Model**: Opus | **Plan approval**: enabled

**Prompt**:

"You are the architect for Part 5: Data Analysis Fundamentals.

READ IN ORDER:
1. The full source spec: `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md`
2. The constitution: `.specify/memory/constitution.md`
3. A reference lesson for format: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md`
4. The Part 0 README for structural reference: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/README.md`

YOUR DELIVERABLES (write all to `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`):

### 1. Master Architecture Spec (`_architecture-spec.md`)

Create the complete directory skeleton for all 4 chapters and 16 lessons. For each file, specify:
- Full path
- Source line range from the spec
- Content type (lesson, exercise, capstone)
- Sidecar files needed (`.flashcards.yaml`, `.summary.md`, quiz)

Directory structure must follow the existing book pattern:
```
apps/learn-app/docs/05-Data-Analysis-Fundamentals/
├── README.md
├── _category_.json
├── 35-the-data-mindset/
│   ├── README.md
│   ├── 01-what-data-can-and-cannot-tell-you.md
│   ├── 01-what-data-can-and-cannot-tell-you.summary.md
│   ├── 01-what-data-can-and-cannot-tell-you.flashcards.yaml
│   ├── ... (L02-L04 with sidecars)
│   └── 05_chapter_35_quiz.md
├── 36-working-with-spreadsheets/
│   ├── ... (L01-L05 with sidecars)
│   └── 06_chapter_36_quiz.md
├── 37-ai-assisted-analysis/
│   ├── ... (L01-L04 with sidecars)
│   └── 05_chapter_37_quiz.md
└── 38-from-analysis-to-action/
    ├── ... (L01-L03 with sidecars)
    └── 04_chapter_38_quiz.md
```

Include a writer-to-scope assignment table:
- **writer-foundations**: Ch 35 (4 lessons) + Ch 36 (5 lessons) = 9 lessons
- **writer-applied**: Ch 37 (4 lessons) + Ch 38 (3 lessons) = 7 lessons

### 2. Domain Wisdom Brief (`_domain-wisdom.md`)

This is the most important deliverable. Every writer reads it. Extract and document:

**CORE CONCEPTS (these 5 ideas must land in every reader's mind):**
1. Data literacy: understanding what data can and cannot prove (correlation vs causation, survivorship bias, Simpson's paradox)
2. Question-first analysis: always start with a hypothesis, never go fishing in data hoping to find something
3. AI as analysis partner: AI handles computation and pattern-finding, the human provides domain context, judgment, and skepticism
4. Critical evaluation: checking the methodology behind AI-generated insights, not just accepting results
5. Translation to action: numbers mean nothing until translated into recommendations with explicit uncertainty

**QUALITY DIMENSIONS for this content:**
- Authenticity: Every example must come from a plausible business scenario with real consequences. No toy datasets or "imagine a company" hand-waving.
- Mentor voice: The tone is a senior colleague who has personally made these analytical mistakes, sharing hard-won wisdom. Not a textbook. Not a lecture.
- Appropriate caution: The reader should finish each lesson feeling more confident AND more appropriately cautious. Overconfidence in data analysis is the most dangerous outcome.
- Practical applicability: Every concept should be immediately usable in the reader's next meeting or decision.

**COMMON PITFALLS (what mediocre content looks like):**
- Generic "data is important" moralizing instead of specific, vivid examples of data-driven decisions gone wrong
- Toy datasets with obvious answers that don't teach the ambiguity of real data
- Teaching statistical formulas and terminology instead of building intuition about what numbers mean
- Treating AI as an oracle: "just ask Claude and trust the answer" instead of teaching verification
- Skipping the translation layer: analysis stops at "here are the numbers" without teaching how to turn findings into actionable recommendations with appropriate caveats
- Textbook voice: "In this lesson you will learn..." instead of "I once watched a VP present a retention analysis that proved the opposite of what she thought..."

**DECISION FRAMEWORK (when writers face ambiguity):**
- Authenticity over polish: a messy real scenario beats a clean fake one
- Learner caution is a feature: if a lesson makes the reader more careful about data claims, it succeeded
- Ground every concept in business consequences: "this matters because a real person made this mistake and it cost $X"
- No Python, no SQL, no formulas: if a concept requires code to explain, find a different angle using natural language and Cowork prompts
- Cowork is the tool: all hands-on work happens through Cowork + natural language prompts (taught in Part 3 Ch 29)

**CROSS-REFERENCE MAP:**
- Ch 35 L01 connects to Part 0 systematic thinking (reader already has this foundation)
- Ch 36 L02-L04 builds on Cowork skills from Part 3 Ch 29 (reader knows Cowork basics)
- Ch 37 L02 extends Part 1 prompt engineering into the data analysis domain
- Ch 38 L02 connects to Part 0 Ch 5 (Communicating What Matters)

### 3. Per-Writer Briefs

**`_writer-brief-foundations.md`** for writer-foundations:
- Exact file paths for Ch 35 (4 lessons + sidecars) and Ch 36 (5 lessons + sidecars)
- Source spec lines 22-33
- Chapter-specific quality notes:
  - Ch 35 must establish the "data skeptic" mindset: every concept should make the reader appropriately suspicious of data claims. Use vivid real-world examples of statistical traps catching smart people.
  - Ch 36 must be entirely hands-on with Cowork: no abstract "here is what a pivot table is," but "open this dataset in Cowork and ask it to..."
- Exit criteria: all lesson files, summary files, flashcard files, chapter quizzes for Ch 35 and Ch 36

**`_writer-brief-applied.md`** for writer-applied:
- Exact file paths for Ch 37 (4 lessons + sidecars) and Ch 38 (3 lessons + sidecars)
- Source spec lines 35-44
- Chapter-specific quality notes:
  - Ch 37 must teach the reader to be a critical consumer of AI analysis, not a passive recipient. The evaluation lesson (L03) is the most important in the chapter.
  - Ch 38 is the capstone arc: numbers become recommendations become presentations. L03 (capstone) must simulate a genuine board presentation scenario with stakeholder pushback.
- Exit criteria: all lesson files, summary files, flashcard files, chapter quizzes for Ch 37 and Ch 38

### 4. Output Directory README (`README.md`)

Standard part README with:
- Part title and overview
- Chapter listing with descriptions
- Prerequisites (Parts 0-4, Cowork setup from Ch 29)
- Learning outcomes for the part

**CONTENT RULES:**
- Em-dash limit: 0-1 per file (use colons, semicolons, commas, or parentheses instead)
- YAML frontmatter is mandatory on all lesson files (see reference lesson for full structure)
- No Python, SQL, or code of any kind
- All analysis done via Cowork and natural language prompts
- Exercises reference downloadable CSV files from companion repo

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — [list of deliverable files]'"

---

## Phase 2: Reference-Builder (1 teammate)

Spawn a teammate named **reference-builder**.

**Model**: Opus

**Prompt**:

"You are the reference-builder for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

Your job: create ONE gold-standard lesson that demonstrates every pattern writers must follow. This lesson becomes the quality benchmark for the entire part.

READ IN ORDER:
1. Architect's master spec: `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md`
2. Architect's domain wisdom brief: `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md`
3. Existing reference lesson: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md`
4. Source spec Ch 35 L01 description (lines 23 in source): 'What data can and cannot tell you (correlation ≠ causation, survivorship bias)'

DELIVERABLE: Create Ch 35 L01 as the reference lesson:
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.summary.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.flashcards.yaml`

PATTERN CHECKLIST (the reference must demonstrate ALL of these):
- [ ] Full YAML frontmatter: sidebar_position, aicheck, title, description, keywords, chapter, lesson, duration_minutes, skills (with proficiency_level, category, bloom_level, digcomp_area, measurable_at_this_level), learning_objectives, cognitive_load, differentiation, teaching_guide
- [ ] Mentor voice throughout (not textbook)
- [ ] At least 2 vivid real-world examples of data misleading smart people
- [ ] A "Try With AI" section using Cowork prompts (not code)
- [ ] No Python, SQL, or statistical formulas
- [ ] 0-1 em-dashes in the entire file
- [ ] Concepts grounded in business consequences
- [ ] Sidecar `.summary.md` and `.flashcards.yaml` files

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — [file list]'"

---

## Phase 3: Writers (2 teammates, spawn simultaneously)

Spawn ALL 2 writer teammates SIMULTANEOUSLY after Phase 2 completes.

### writer-foundations

Spawn a teammate named **writer-foundations**.

**Prompt**:

"You are writer-foundations for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are building the foundation chapters that transform a business professional from 'I look at spreadsheets but don't really understand data' into someone who thinks critically about every number they see and can explore data hands-on using Cowork. This is where the data skeptic mindset is born, and where abstract caution becomes practical skill. Without these chapters, the AI-assisted analysis in later chapters becomes dangerous: a reader who trusts AI output without understanding what data can and cannot prove will make worse decisions than someone who never used AI at all.

YOUR CHAPTERS IN CONTEXT:
The reader arrives having completed Parts 0-4. They can think systematically (Part 0), use Claude Code (Part 1), process files and workflows (Part 2), and have seen domain-specific agent work (Part 3). They've also been introduced to programming concepts (Part 4). They do NOT know statistics, data analysis, or how to interpret quantitative results. Your Ch 35 builds the conceptual foundation (what data means, how to ask questions of it, how to avoid traps). Your Ch 36 turns that foundation into hands-on Cowork skills (structuring data, exploring it, visualizing it, building dashboards). Together, these chapters prepare the reader for Ch 37-38 where they'll use AI as an analysis partner.

READ IN ORDER:
1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md` (what quality means for this content)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_writer-brief-foundations.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: match format AND depth)
5. Source spec: `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 22-33 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Authenticity: Every example must be a plausible business scenario with real stakes. A retention analysis that cost a VP her credibility. A marketing campaign that targeted the wrong segment because of survivorship bias. Not 'imagine a company that sells widgets.'
- Mentor voice: Write as someone who has personally made these analytical mistakes. 'I once watched a team spend three months optimizing a metric that was measuring the wrong thing' beats 'It is important to verify your metrics.'
- Appropriate caution: Each lesson should increase both competence and humility. The reader should leave Ch 35 feeling 'I now see traps I used to walk into' and Ch 36 feeling 'I can explore data myself, but I know where my skills end.'
- Hands-on grounding (Ch 36): Every concept must be immediately practiced in Cowork. No abstract descriptions of what pivot tables are. Instead: 'Open the sales dataset in Cowork and prompt: Show me total revenue by region, broken down by quarter.'

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Ch 35 that reads like a statistics textbook: definitions of bias types, no real stories, no business consequences
- Ch 36 that describes Cowork features in the abstract instead of walking through specific datasets with specific prompts
- Exercises with obvious answers that don't require judgment
- 'Correlation does not imply causation' stated as a rule instead of demonstrated through a vivid scenario where someone got burned
- Visualization lessons that list chart types instead of showing how the same data tells different stories depending on chart choice

WHEN IN DOUBT:
- Choose the messier, more authentic example over the clean, textbook one
- If a concept requires formulas to explain, find a natural language angle instead
- When deciding lesson depth, ask: 'Would a business manager finish this and immediately change how they look at their next spreadsheet?'
- All hands-on work uses Cowork prompts, never code

YOUR SCOPE:
- Chapter 35: The Data Mindset (4 lessons + sidecars + quiz)
  - Skip L01 (reference-builder already created it)
  - Create L02, L03, L04 with all sidecar files
  - Create chapter quiz
- Chapter 36: Working With Spreadsheets (5 lessons + sidecars + quiz)
  - Create all 5 lessons with sidecar files
  - Create chapter quiz
- Chapter READMEs for both chapters
- Exact file paths per the architecture spec and your writer brief

RULES:
- Match the reference lesson in format, depth, and quality
- Full YAML frontmatter on every lesson file (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- Em-dash limit: 0-1 per file
- No Python, SQL, or code
- All hands-on work through Cowork + natural language prompts
- Exercises reference downloadable CSV files from companion repo
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER FOUNDATIONS DONE — [file list]'"

### writer-applied

Spawn a teammate named **writer-applied**.

**Prompt**:

"You are writer-applied for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are building the chapters that take a reader from 'I understand data and can explore spreadsheets' to 'I can run a complete AI-assisted analysis cycle and present data-driven recommendations to executives.' This is where the reader's newly formed data skepticism meets AI's analytical power, and the tension between those two forces is the entire point. The reader must learn to leverage AI without surrendering their judgment, and then translate analytical findings into decisions that real stakeholders will act on. These chapters are the payoff for the entire part: if the reader can present a recommendation to a simulated board and handle pushback about uncertainty, the part succeeded.

YOUR CHAPTERS IN CONTEXT:
The reader arrives at your chapters having built a data skeptic mindset (Ch 35) and hands-on Cowork skills (Ch 36). They can spot survivorship bias, ask hypothesis-driven questions, structure tidy data, build pivot tables, and create dashboards, all through natural language prompts. They do NOT yet know how to use AI as a data analysis partner (that's your Ch 37) or how to translate numbers into executive-ready recommendations (that's your Ch 38). Your chapters are the culmination: everything before was preparation, everything after builds on the analytical confidence established here.

READ IN ORDER:
1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md` (what quality means for this content)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_writer-brief-applied.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: match format AND depth)
5. Source spec: `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 35-44 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Critical thinking emphasis: Ch 37 is NOT 'how to prompt AI for analysis.' It IS 'how to be a demanding, skeptical consumer of AI-generated analysis.' The reader should finish feeling empowered to challenge AI output, not just consume it.
- Actionability: Ch 38 must bridge the gap between 'here are numbers' and 'here is what we should do.' Every lesson must produce something the reader could bring to a real meeting.
- Stakeholder realism: The capstone board presentation (Ch 38 L03) must include realistic stakeholder personas who ask hard questions: 'What's the confidence level?', 'What if your assumptions are wrong?', 'How does this compare to last quarter?'
- Mentor voice: Same warm, experienced tone. The writer of these chapters has presented to boards, has had analysis torn apart, has learned to communicate uncertainty without losing credibility.

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Ch 37 that treats AI as infallible: 'Ask Claude to analyze this data and present the results' without teaching verification
- Ch 37 L03 (evaluating AI insights) that just says 'check the methodology' without showing HOW to check, what red flags look like, what questions to ask
- Ch 38 that teaches slide formatting instead of narrative construction and uncertainty communication
- A capstone exercise that is a cookbook recipe: 'Step 1: analyze the data. Step 2: make a recommendation.' Real analysis is messy, iterative, and full of judgment calls.
- Treating uncertainty as a footnote ('note: results may vary') instead of a core communication skill

WHEN IN DOUBT:
- Emphasize evaluation over generation: a reader who can critically assess one AI analysis is more valuable than one who can prompt for ten
- For the capstone, make it genuinely challenging: the board should push back, the data should be ambiguous, the 'right answer' should require judgment
- Communication of uncertainty is a skill, not a disclaimer: teach specific techniques, not just 'mention your confidence level'
- All hands-on work uses Cowork prompts, never code

YOUR SCOPE:
- Chapter 37: AI-Assisted Analysis (4 lessons + sidecars + quiz)
  - Create all 4 lessons with sidecar files
  - Create chapter quiz
- Chapter 38: From Analysis to Action (3 lessons + sidecars + quiz)
  - Create all 3 lessons with sidecar files
  - Create chapter quiz
- Chapter READMEs for both chapters
- Exact file paths per the architecture spec and your writer brief

RULES:
- Match the reference lesson in format, depth, and quality
- Full YAML frontmatter on every lesson file (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- Em-dash limit: 0-1 per file
- No Python, SQL, or code
- All hands-on work through Cowork + natural language prompts
- Exercises reference downloadable CSV files from companion repo
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER APPLIED DONE — [file list]'"

---

## Phase 4: Quality Reviewer (1 teammate)

Spawn a teammate named **quality-reviewer** after ALL Phase 3 writers complete.

**Model**: Opus

**Prompt**:

"You are the quality-reviewer for Part 5: Data Analysis Fundamentals.
You are part of an agent team. Communicate via messages to the team lead.

Your job: evaluate every file produced by the team against the domain quality standards, not just structural compliance.

READ IN ORDER:
1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md` (quality dimensions and pitfalls)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md` (expected structure)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson)
4. ALL lesson files, summary files, flashcard files, and quizzes across all 4 chapters

EVALUATION CRITERIA:

**Structural Compliance:**
- [ ] All files from architecture spec exist
- [ ] Every lesson has full YAML frontmatter (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- [ ] Every lesson has `.summary.md` and `.flashcards.yaml` sidecars
- [ ] Chapter quizzes exist for all 4 chapters
- [ ] READMEs exist for the part and all 4 chapters

**Domain Quality (the hard part):**
- [ ] Authenticity: Are examples real-feeling business scenarios with genuine stakes, or generic/toy examples?
- [ ] Mentor voice: Does the content sound like experienced advice or a textbook? Count instances of 'In this lesson you will learn' or similar textbook phrases.
- [ ] Appropriate caution: Does the reader gain confidence AND appropriate skepticism? Or does the content either scare them away from data or make them overconfident?
- [ ] No code: Zero instances of Python, SQL, R, or any programming language
- [ ] Cowork usage: All hands-on work done through Cowork natural language prompts, properly formatted
- [ ] Em-dash count: 0-1 per file (count them)
- [ ] Cross-references: Do the specified cross-references to Parts 0, 1, 3 appear where the spec says?
- [ ] Progression: Does Ch 35 -> 36 -> 37 -> 38 build logically? Does the reader's capability grow naturally?
- [ ] Capstone quality: Does Ch 38 L03 simulate a genuine board presentation with stakeholder pushback and ambiguous data?

**Per-Writer Scoring:**

For each writer, score 1-5 on:
1. Structural compliance
2. Example authenticity
3. Voice consistency
4. Pedagogical progression
5. Exercise quality

DELIVERABLE: Write a quality report to `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_quality-report.md` with:
- Per-writer scores and justifications
- Top 3 issues per writer (with file paths and specific quotes)
- Overall part assessment
- Recommended fixes (prioritized by impact)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality report at _quality-report.md'"

---

## Lead Rules

1. Create the agent team, then spawn teammates for each phase
2. Create tasks with phase dependencies (Phase 1 -> 2 -> 3 -> 4)
3. Do NOT write content yourself. Coordinate only.
4. Wait for each phase to complete before spawning the next
5. After quality review, run structural verification:
   - `ls` the output directory tree recursively
   - Compare file count against architect's skeleton
   - Spot-check YAML frontmatter from each writer (at least 1 file per writer)
6. If quality reviewer flags critical issues (score below 3 on any dimension), have the relevant writer fix before marking complete
7. Shut down all teammates gracefully when done

## Anti-Patterns

- Do NOT spawn subagents. Use agent team teammates.
- Do NOT write content yourself. Delegate to teammates.
- Do NOT spawn Phase 3 before Phase 2 completes
- Do NOT spawn quality reviewer before ALL writers complete
- Do NOT let writers read the full source (only architect does)
- Do NOT skip the quality reviewer phase

## Team Summary

| Phase | Teammate | Model | Depends On |
|-------|----------|-------|------------|
| 1 | architect | Opus | — |
| 2 | reference-builder | Opus | Phase 1 |
| 3 | writer-foundations | default | Phase 2 |
| 3 | writer-applied | default | Phase 2 |
| 4 | quality-reviewer | Opus | Phase 3 (all) |

**Total teammates: 5** across 4 phases.
