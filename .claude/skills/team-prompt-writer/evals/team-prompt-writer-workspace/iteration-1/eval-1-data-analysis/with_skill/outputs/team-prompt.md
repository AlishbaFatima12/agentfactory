# Team Prompt: Part 5 — Data Analysis Fundamentals

Create an agent team to produce Part 5: Data Analysis Fundamentals for the Agent Factory book. This part teaches non-programmers (business professionals, managers, consultants) to analyze data using AI-assisted workflows in Cowork. No Python. No SQL. All analysis via natural language prompts.

**Source material**: `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md`
**Output directory**: `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`
**Content type**: Book part (4 chapters, 16 lessons)

This content creates a specific transformation: readers enter saying "I have a spreadsheet and don't know what to do" and leave able to ask the right questions, get AI to do the analysis, and critically evaluate the results. The teaching tone is mentor, not professor. Real datasets, real business scenarios, real consequences of bad analysis. Every lesson builds confidence AND appropriate caution.

---

## How to Execute This Prompt

1. `TeamCreate(team_name="data-analysis-fundamentals")`
2. `TaskCreate(...)` for each phase with dependencies
3. For each teammate: `Agent(prompt="...", team_name="data-analysis-fundamentals", name="<name>")`
4. Monitor via `SendMessage`
5. Shutdown: `SendMessage(to="<name>", message={"type": "shutdown_request"})`
6. `TeamDelete(team_name="data-analysis-fundamentals")`

The `team_name` parameter on Agent() is what makes them teammates. Without it, you get independent subagents with no shared task list. **Every Agent() call MUST include team_name.**

---

## Team Lead Identity

You are the team lead for the `data-analysis-fundamentals` team. You coordinate work across 5 teammates in 4 phases. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies.

Your teammates:
- `architect` (Phase 1)
- `reference-builder` (Phase 2)
- `writer-foundations` (Phase 3, parallel)
- `writer-application` (Phase 3, parallel)
- `quality-reviewer` (Phase 4)

---

## Task Definitions

Create these tasks with dependencies:

| Task | Subject | Depends On |
|------|---------|------------|
| T1 | Phase 1: Architecture + Domain Wisdom | (none) |
| T2 | Phase 2: Reference Lesson | T1 |
| T3 | Phase 3a: Writer-Foundations (Ch 35 + 36) | T2 |
| T4 | Phase 3b: Writer-Application (Ch 37 + 38) | T2 |
| T5 | Phase 4: Quality Review | T3, T4 |
| T6 | Structural Verification | T5 |

---

## Phase 1: Architect

Spawn: `Agent(prompt="<prompt below>", team_name="data-analysis-fundamentals", name="architect")`

Model: Opus. Plan approval: enabled.

### Architect Prompt

"You are the architect for the data-analysis-fundamentals team. Your job is to read all source material and produce the structural foundation that every other teammate will build on.

READ IN ORDER:
1. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` (full source spec)
2. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/01-foundations/25-enterprise-agentic-landscape/01-the-year-that-did-not-deliver.md` (reference lesson for format, YAML frontmatter, quality baseline)
3. `.specify/memory/constitution.md` (project principles)

DELIVERABLES (write all to `apps/learn-app/docs/05-Data-Analysis-Fundamentals/`):

### 1. Master Architecture Spec (`_architecture-spec.md`)

Create the complete directory skeleton and content spec:

```
apps/learn-app/docs/05-Data-Analysis-Fundamentals/
├── README.md
├── _category_.json
├── 35-the-data-mindset/
│   ├── _category_.json
│   ├── 01-what-data-can-and-cannot-tell-you.md
│   ├── 01-what-data-can-and-cannot-tell-you.flashcards.yaml
│   ├── 02-asking-good-questions-of-data.md
│   ├── 02-asking-good-questions-of-data.flashcards.yaml
│   ├── 03-the-analysis-workflow.md
│   ├── 03-the-analysis-workflow.flashcards.yaml
│   ├── 04-common-statistical-traps.md
│   └── 04-common-statistical-traps.flashcards.yaml
├── 36-working-with-spreadsheets/
│   ├── _category_.json
│   ├── 01-structuring-data-for-analysis.md
│   ├── 01-structuring-data-for-analysis.flashcards.yaml
│   ├── 02-using-cowork-for-data-exploration.md
│   ├── 02-using-cowork-for-data-exploration.flashcards.yaml
│   ├── 03-visualization-principles.md
│   ├── 03-visualization-principles.flashcards.yaml
│   ├── 04-dashboard-design-for-decision-makers.md
│   ├── 04-dashboard-design-for-decision-makers.flashcards.yaml
│   ├── 05-build-a-kpi-dashboard.md
│   └── 05-build-a-kpi-dashboard.flashcards.yaml
├── 37-ai-assisted-analysis/
│   ├── _category_.json
│   ├── 01-when-to-use-ai-vs-do-it-yourself.md
│   ├── 01-when-to-use-ai-vs-do-it-yourself.flashcards.yaml
│   ├── 02-prompting-for-data-analysis.md
│   ├── 02-prompting-for-data-analysis.flashcards.yaml
│   ├── 03-evaluating-ai-generated-insights.md
│   ├── 03-evaluating-ai-generated-insights.flashcards.yaml
│   ├── 04-full-analysis-cycle-with-ai.md
│   └── 04-full-analysis-cycle-with-ai.flashcards.yaml
└── 38-from-analysis-to-action/
    ├── _category_.json
    ├── 01-translating-numbers-into-recommendations.md
    ├── 01-translating-numbers-into-recommendations.flashcards.yaml
    ├── 02-communicating-uncertainty.md
    ├── 02-communicating-uncertainty.flashcards.yaml
    ├── 03-capstone-data-driven-recommendation.md
    └── 03-capstone-data-driven-recommendation.flashcards.yaml
```

Include:
- Source-to-output mapping (which spec lines map to which output files)
- YAML frontmatter template (match the reference lesson format exactly: slug, sidebar_position, title, description, keywords, chapter, lesson, duration_minutes, skills with proficiency_level/category/bloom_level/digcomp_area/measurable_at_this_level, learning_objectives, cognitive_load, differentiation, teaching_guide)
- Slug pattern: `/Data-Analysis-Fundamentals/<chapter-slug>/<lesson-slug>`
- Component/pattern catalog (Cowork exercises, Try With AI sections, downloadable CSV references)
- Writer-to-scope assignment table

### 2. Domain Wisdom Brief (`_domain-wisdom.md`)

This is the most important deliverable. Every writer reads it. Capture:

**CORE CONCEPTS** (the 5 ideas that must land):
1. Data literacy is about judgment, not calculation. Correlation vs causation, survivorship bias, Simpson's paradox are thinking tools, not formulas.
2. Question-first analysis: always start with a hypothesis, never start by "exploring the data."
3. The analysis workflow (question, data, method, interpretation, action) is a discipline, not a suggestion.
4. AI is an analysis partner, not an oracle. Its outputs require the same critical evaluation as a junior analyst's work.
5. The gap between analysis and action is where most value is lost. Translating numbers into recommendations is a skill.

**QUALITY DIMENSIONS** (what matters most for THIS content):
- Authenticity: Real business scenarios with messy data, not clean textbook examples. A sales dataset should have missing values. A KPI dashboard should have conflicting metrics.
- Mentor tone: "I made this mistake so you don't have to" not "the student will learn that..."
- Appropriate caution: Every increase in confidence should come with a corresponding increase in awareness of what could go wrong.
- Practical applicability: Every lesson ends with something the reader could use at work tomorrow.
- No code: All analysis via Cowork and natural language prompts. If a writer feels tempted to show Python or SQL, they need to rethink the approach.

**COMMON PITFALLS** (what mediocre content looks like):
- Textbook statistics lecture: Defining terms without showing why they matter in real decisions
- Clean toy data: Datasets where everything works perfectly teach nothing about real analysis
- AI as magic box: "Ask Cowork to analyze this" without teaching how to evaluate the output
- Theory without action: Explaining statistical concepts but never connecting them to business decisions
- Academic exercises: "Calculate the mean" instead of "Should we expand to this market?"
- Using Python/SQL: This part is for non-programmers; any code is a failure

**DECISION FRAMEWORK** (when writers face ambiguity):
- Authenticity over elegance: messy real scenarios beat clean demonstrations
- Skepticism is a feature: teach readers to question AI analysis, not trust it
- Action not theory: every lesson ends with what you would DO differently
- Struggle is valuable: let the reader encounter bad data, misleading charts, wrong conclusions before showing the right approach
- Cowork is the tool: all hands-on work uses Cowork with natural language; reference Part 3 Ch 29 for Cowork foundations

**CROSS-REFERENCE MAP**:
- Ch 35 L01 references Part 0 systematic thinking (correlation vs causation connects to logical reasoning)
- Ch 36 L02-L04 uses Cowork (taught in Part 3 Ch 29; readers already know the tool)
- Ch 37 L02 references Part 1 prompt engineering (prompting for analysis builds on existing prompt skills)
- Ch 38 L02 references Part 0 Ch 5 (communicating what matters)

### 3. Per-Writer Briefs

**Writer-Foundations Brief** (`_brief-writer-foundations.md`):
- Scope: Ch 35 (4 lessons) + Ch 36 (5 lessons) = 9 lessons + 9 flashcard files + 2 _category_.json
- Source lines: 22-33 of the source spec
- Chapter-specific notes:
  - Ch 35 is pure conceptual: no tool usage, no exercises with Cowork. It builds the mental model. Tone: "Here is what goes wrong when people skip this thinking."
  - Ch 36 is the first hands-on chapter. Cowork appears here. Each lesson should include a Try With AI section with Cowork prompts. L05 is a full exercise building a KPI dashboard from raw sales data (needs a companion CSV reference).
  - The transition from Ch 35 (thinking) to Ch 36 (doing) must feel natural, not jarring. Ch 36 L01 (tidy data) bridges the gap: it is conceptual but with practical structure.

**Writer-Application Brief** (`_brief-writer-application.md`):
- Scope: Ch 37 (4 lessons) + Ch 38 (3 lessons) = 7 lessons + 7 flashcard files + 2 _category_.json
- Source lines: 35-44 of the source spec
- Chapter-specific notes:
  - Ch 37 is where AI enters as analysis partner. The critical lesson is L03 (evaluating AI-generated insights): this is where the reader learns that AI can be confidently wrong. Use examples of AI analysis that looks right but has methodology flaws.
  - Ch 38 is the communication chapter. L01-L02 are about translating analysis into stakeholder language. L03 is the capstone: a simulated board presentation where the reader synthesizes everything.
  - Ch 37 L04 and Ch 38 L03 are both exercises/capstones. They should feel like culmination, not just "another exercise."

### 4. Part README (`README.md`)
- Part title, overview, chapter listing with descriptions
- Prerequisites: Parts 0-4 completed, Cowork installed
- Learning outcomes for the entire part

RULES:
- Match the reference lesson's YAML frontmatter structure exactly
- Use the Cowork terminology rules (see CLAUDE.md: Cowork is NOT 'Claude in Excel')
- Em-dash limit: 0-1 per file
- Execute autonomously without asking for confirmation

Done signal: message the team lead 'ARCHITECT DONE — [file list]'"

---

## Phase 2: Reference-Builder

**Wait for Phase 1 (architect) to complete before spawning.**

Spawn: `Agent(prompt="<prompt below>", team_name="data-analysis-fundamentals", name="reference-builder")`

Model: Opus.

### Reference-Builder Prompt

"You are the reference-builder for the data-analysis-fundamentals team. You produce ONE gold-standard lesson file that demonstrates every pattern the writers must follow.

READ IN ORDER:
1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md` (directory structure, patterns, YAML template)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md` (what quality means for this content)
3. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 22-26 (Ch 35 L01 source material)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/01-foundations/25-enterprise-agentic-landscape/01-the-year-that-did-not-deliver.md` (existing reference for format)

DELIVERABLE:

Create `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` as the gold-standard reference lesson.

This lesson must demonstrate ALL of these patterns:
- Full YAML frontmatter (slug, sidebar_position, title, description, keywords, chapter, lesson, duration_minutes, skills with proficiency levels, learning_objectives, cognitive_load, differentiation, teaching_guide)
- Mentor tone (not textbook)
- Real business scenario (not toy example)
- Correlation vs causation taught through a story the reader can feel
- Survivorship bias shown with a business decision that went wrong
- Try With AI section using Cowork prompts (even though this is conceptual, show how Cowork can help explore these biases)
- No Python, no SQL, no code
- Em-dash limit: 0-1 per file
- Cowork terminology (never 'Claude in Excel' when referring to Cowork)

Also create the corresponding flashcards file:
`apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.flashcards.yaml`

RULES:
- This file IS the quality benchmark. Writers will match it in format, depth, and tone.
- Execute autonomously without asking for confirmation

Done signal: message the team lead 'REFERENCE-BUILDER DONE — [file list]'"

---

## Phase 3: Writers (Parallel)

**Wait for Phase 2 (reference-builder) to complete before spawning. Spawn ALL writer teammates SIMULTANEOUSLY.**

### Writer-Foundations

Spawn: `Agent(prompt="<prompt below>", team_name="data-analysis-fundamentals", name="writer-foundations")`

#### Writer-Foundations Prompt

"You are writer-foundations for the data-analysis-fundamentals team.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are creating the foundational layers of data analysis education for business professionals who have never written a formula. Chapters 35 and 36 take readers from 'I have a spreadsheet and don't know what to do' to 'I can structure data, explore it in Cowork, build visualizations, and construct a KPI dashboard.' This progression matters because most data education starts with tools and skips the thinking. Your chapters prove that thinking comes first, then the tools become powerful.

YOUR CHAPTERS IN CONTEXT:
The reader has completed Parts 0-4: they can think systematically, write specs, use Claude Code, and navigate Cowork. They do NOT know statistics, data analysis, or how to interpret charts. Chapter 35 builds the mental model (what data can tell you, how to ask questions, the analysis workflow, statistical traps). Chapter 36 puts that mental model to work with Cowork (structuring data, exploring it, visualizing it, building dashboards). After your chapters, the reader moves to Ch 37 where AI becomes an analysis partner, and Ch 38 where they learn to communicate findings. Your chapters are the bridge from 'I understand AI tools' to 'I can analyze data with AI tools.'

READ IN ORDER:
1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md` (what quality means for this content)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_brief-writer-foundations.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: match format AND depth)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 22-33 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Authenticity: Use real business scenarios with messy data. A lesson about tidy data should start with a genuinely messy spreadsheet. A lesson about chart types should show a misleading chart from a real context.
- Mentor tone: Write like a senior analyst talking to a smart colleague who is new to data. 'I once saw a VP make a $2M decision based on a chart that hid the seasonal pattern' not 'Students will learn about seasonal adjustment.'
- Appropriate caution: Ch 35 teaches what can go wrong. Ch 36 teaches hands-on skills. Both should balance confidence with awareness. 'You can build this dashboard, AND here is what it will not show you.'

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- A statistics textbook with definitions and formulas but no business context
- Exercises that say 'calculate the mean of this dataset' instead of 'should we expand into the European market based on this data?'
- Ch 36 lessons that show Cowork prompts without teaching how to evaluate whether the output is right
- Clean toy datasets where everything works perfectly (real data is messy; show that)
- Any Python, SQL, or code examples (this part is for non-programmers)

WHEN IN DOUBT:
- Authenticity over elegance: a messy real scenario beats a clean demonstration
- Struggle is valuable: let the reader encounter the problem before showing the solution
- Action not theory: every lesson ends with what the reader would DO differently at work
- Cowork is the tool: all hands-on work uses Cowork with natural language prompts

YOUR SCOPE:

Chapter 35 (The Data Mindset) — 4 lessons + 4 flashcard files:
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/02-asking-good-questions-of-data.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/02-asking-good-questions-of-data.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/03-the-analysis-workflow.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/03-the-analysis-workflow.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/04-common-statistical-traps.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/04-common-statistical-traps.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/_category_.json`

Chapter 36 (Working With Spreadsheets) — 5 lessons + 5 flashcard files:
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/01-structuring-data-for-analysis.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/01-structuring-data-for-analysis.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/02-using-cowork-for-data-exploration.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/02-using-cowork-for-data-exploration.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/03-visualization-principles.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/03-visualization-principles.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/04-dashboard-design-for-decision-makers.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/04-dashboard-design-for-decision-makers.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/05-build-a-kpi-dashboard.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/05-build-a-kpi-dashboard.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/36-working-with-spreadsheets/_category_.json`

NOTE: L01 of Ch 35 is already created by the reference-builder. Do NOT recreate it.

RULES:
- Match the reference lesson (Ch 35 L01) in format, depth, and quality
- Full YAML frontmatter on every .md file (match reference exactly)
- Flashcard files for every lesson
- No Python, no SQL, no code
- All hands-on work via Cowork with natural language prompts
- Use Cowork terminology correctly (never 'Claude in Excel' when you mean Cowork)
- Em-dash limit: 0-1 per file
- Ch 36 L05 should reference a downloadable CSV from the companion repo
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER FOUNDATIONS DONE — [file list]'"

---

### Writer-Application

Spawn: `Agent(prompt="<prompt below>", team_name="data-analysis-fundamentals", name="writer-application")`

#### Writer-Application Prompt

"You are writer-application for the data-analysis-fundamentals team.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are creating the chapters where data analysis becomes an AI-augmented capability. Chapters 37 and 38 take readers from 'I can structure and visualize data' to 'I can partner with AI for analysis, critically evaluate its output, and present data-driven recommendations to stakeholders.' This is the payoff of the entire part: the reader goes from passive consumer of dashboards to active producer of data-driven decisions.

YOUR CHAPTERS IN CONTEXT:
The reader has completed Ch 35 (data mindset: biases, question-first thinking, statistical traps) and Ch 36 (hands-on Cowork: tidy data, exploration, visualization, dashboards). They know how to think about data AND work with it. Now they learn to bring AI into the loop (Ch 37) and translate analysis into organizational action (Ch 38). Ch 37 is the fulcrum: where AI shifts from tool to analysis partner. Ch 38 is the capstone: where technical skills become organizational impact. After your chapters, the reader has completed the full analysis lifecycle from question to boardroom presentation.

READ IN ORDER:
1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md` (what quality means for this content)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_brief-writer-application.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: match format AND depth)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test1-data-analysis.md` lines 35-44 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Critical evaluation: Ch 37 L03 is the most important lesson you write. The reader must learn that AI analysis can be confidently wrong. Show AI output that looks professional but has methodology flaws (wrong baseline period, confounded variables, cherry-picked data ranges).
- Stakeholder empathy: Ch 38 is about communication. The reader's audience is executives who do not understand statistics. Teach them to translate uncertainty into decision language ('We are 80% confident this will increase revenue by $200K-$400K' not 'p < 0.05').
- Capstone quality: Ch 38 L03 is the finale. It should feel like a culmination of everything in Part 5. The simulated board presentation should use a realistic scenario with real tension (the data supports a recommendation the board will resist).

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Ch 37 that treats AI as infallible: 'Ask Cowork to analyze this and paste the result' without teaching evaluation
- Ch 37 L01 that gives a vague list of 'AI strengths' without concrete examples of when AI fails at analysis
- Ch 38 that teaches presentation skills generically instead of the specific challenge of communicating uncertainty
- A capstone that is just another exercise instead of a genuine synthesis moment
- Any Python, SQL, or code examples (this part is for non-programmers)

WHEN IN DOUBT:
- Skepticism is a feature: teach readers to question AI analysis, not trust it
- Action not theory: every lesson ends with what the reader would DO differently at work
- Authenticity over elegance: use realistic stakeholder dynamics (resistance, skepticism, misunderstanding)
- The capstone is the crown: invest extra depth and quality in Ch 38 L03

YOUR SCOPE:

Chapter 37 (AI-Assisted Analysis) — 4 lessons + 4 flashcard files:
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/01-when-to-use-ai-vs-do-it-yourself.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/01-when-to-use-ai-vs-do-it-yourself.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/02-prompting-for-data-analysis.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/02-prompting-for-data-analysis.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/03-evaluating-ai-generated-insights.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/03-evaluating-ai-generated-insights.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/04-full-analysis-cycle-with-ai.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/04-full-analysis-cycle-with-ai.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/37-ai-assisted-analysis/_category_.json`

Chapter 38 (From Analysis to Action) — 3 lessons + 3 flashcard files:
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/01-translating-numbers-into-recommendations.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/01-translating-numbers-into-recommendations.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/02-communicating-uncertainty.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/02-communicating-uncertainty.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/03-capstone-data-driven-recommendation.md`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/03-capstone-data-driven-recommendation.flashcards.yaml`
- `apps/learn-app/docs/05-Data-Analysis-Fundamentals/38-from-analysis-to-action/_category_.json`

RULES:
- Match the reference lesson (Ch 35 L01) in format, depth, and quality
- Full YAML frontmatter on every .md file (match reference exactly)
- Flashcard files for every lesson
- No Python, no SQL, no code
- All hands-on work via Cowork with natural language prompts
- Use Cowork terminology correctly (never 'Claude in Excel' when you mean Cowork)
- Em-dash limit: 0-1 per file
- Ch 37 L04 and Ch 38 L03 are exercises/capstones: invest extra quality
- Ch 38 L03 should use a downloadable CSV from the companion repo for the board presentation scenario
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER APPLICATION DONE — [file list]'"

---

## Phase 4: Quality Reviewer

**Wait for ALL Phase 3 writers to complete before spawning.**

Spawn: `Agent(prompt="<prompt below>", team_name="data-analysis-fundamentals", name="quality-reviewer")`

Model: Opus.

### Quality-Reviewer Prompt

"You are the quality-reviewer for the data-analysis-fundamentals team. You evaluate ALL content produced by both writers against the domain quality standards.

READ IN ORDER:
1. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_domain-wisdom.md` (quality dimensions, core concepts, pitfalls)
2. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_architecture-spec.md` (structural requirements)
3. `apps/learn-app/docs/05-Data-Analysis-Fundamentals/35-the-data-mindset/01-what-data-can-and-cannot-tell-you.md` (reference lesson: the quality benchmark)
4. ALL lesson files in `apps/learn-app/docs/05-Data-Analysis-Fundamentals/` (read every .md and .flashcards.yaml)

EVALUATE EACH LESSON AGAINST THESE DIMENSIONS:

**Structural Compliance**:
- [ ] Full YAML frontmatter (slug, sidebar_position, title, description, keywords, chapter, lesson, duration_minutes, skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- [ ] Flashcards file exists and matches lesson content
- [ ] _category_.json exists for each chapter folder
- [ ] Slug pattern matches: `/Data-Analysis-Fundamentals/<chapter-slug>/<lesson-slug>`

**Domain Quality** (from the domain wisdom brief):
- [ ] Authenticity: Real business scenarios, not toy examples. Messy data, not clean datasets.
- [ ] Mentor tone: Sounds like experienced analyst mentoring a colleague, not a textbook.
- [ ] Appropriate caution: Builds confidence AND awareness of what can go wrong.
- [ ] Practical applicability: Reader can use this at work tomorrow.
- [ ] No code: Zero Python, SQL, or programming. All analysis via Cowork prompts.

**Content-Specific Checks**:
- [ ] Ch 35: Core biases (correlation/causation, survivorship, Simpson's paradox, base rate neglect) are taught through stories, not definitions
- [ ] Ch 36: Cowork exercises include verification steps (not just 'ask Cowork to...')
- [ ] Ch 37 L03: Shows AI analysis that is confidently wrong with specific methodology flaws
- [ ] Ch 38 L03: Capstone feels like genuine culmination, not just another exercise
- [ ] Cross-references are accurate (Part 0, Part 1, Part 3 Ch 29)

**Writing Quality**:
- [ ] Em-dash count: 0-1 per file (flag any file exceeding this)
- [ ] Cowork terminology correct (never 'Claude in Excel' when meaning Cowork)
- [ ] No sycophantic language ('Of course!', 'Great question!')
- [ ] Progressive difficulty within and across chapters

DELIVERABLE:

Write quality report to `apps/learn-app/docs/05-Data-Analysis-Fundamentals/_quality-report.md`:

```
# Quality Report: Part 5 — Data Analysis Fundamentals

## Summary
- Total lessons reviewed: [N]
- Pass: [N] | Needs revision: [N] | Fail: [N]

## Per-Writer Scores

### Writer-Foundations (Ch 35 + Ch 36)
- Structural compliance: [score]/10
- Domain quality: [score]/10
- Writing quality: [score]/10
- Issues: [list specific issues with file paths]

### Writer-Application (Ch 37 + Ch 38)
- Structural compliance: [score]/10
- Domain quality: [score]/10
- Writing quality: [score]/10
- Issues: [list specific issues with file paths]

## Critical Issues (must fix)
[List any issues that would block publication]

## Recommendations (should fix)
[List improvements that would elevate quality]

## Reference Comparison
[How do the lessons compare to the reference lesson in tone, depth, format?]
```

RULES:
- Read every file. Do not sample.
- Grade against the domain wisdom brief, not generic quality standards.
- Be specific: cite file paths and line numbers for issues.
- Execute autonomously without asking for confirmation

Done signal: message the team lead 'QUALITY-REVIEWER DONE — quality report at _quality-report.md'"

---

## Lead Coordination Rules

1. `TeamCreate(team_name="data-analysis-fundamentals")`
2. `TaskCreate` for each of the 6 tasks with dependencies as shown in the Task Definitions table
3. Spawn `architect` with `Agent(prompt="...", team_name="data-analysis-fundamentals", name="architect")`
4. Assign T1 to architect: `TaskUpdate(taskId="1", owner="architect")`
5. Wait for architect to complete (done signal via message)
6. Spawn `reference-builder` with `Agent(prompt="...", team_name="data-analysis-fundamentals", name="reference-builder")`
7. Assign T2 to reference-builder
8. Wait for reference-builder to complete
9. Spawn `writer-foundations` AND `writer-application` SIMULTANEOUSLY with `Agent(prompt="...", team_name="data-analysis-fundamentals", name="writer-foundations")` and `Agent(prompt="...", team_name="data-analysis-fundamentals", name="writer-application")`
10. Assign T3 to writer-foundations, T4 to writer-application
11. Wait for BOTH writers to complete
12. Spawn `quality-reviewer` with `Agent(prompt="...", team_name="data-analysis-fundamentals", name="quality-reviewer")`
13. Assign T5 to quality-reviewer
14. Wait for quality-reviewer to complete
15. Run structural verification (T6):
    - Verify all expected files exist: `ls -la apps/learn-app/docs/05-Data-Analysis-Fundamentals/*/`
    - Count: expect 16 .md lesson files, 16 .flashcards.yaml files, 4 _category_.json files, 1 README.md, plus architect artifacts
    - Check for zero-byte files
    - Verify no Python/SQL code in any lesson: `grep -r "import \|SELECT \|FROM \|def \|print(" apps/learn-app/docs/05-Data-Analysis-Fundamentals/`
    - Verify em-dash compliance: `grep -c '—' apps/learn-app/docs/05-Data-Analysis-Fundamentals/*/*.md`
16. Do NOT write content yourself. You are the coordinator.
17. Graceful shutdown: `SendMessage(to="<name>", message={"type": "shutdown_request"})` for each teammate
18. `TeamDelete(team_name="data-analysis-fundamentals")`

---

## Anti-Patterns

- Do NOT call `Agent()` without `team_name` — that spawns subagents, not teammates
- Do NOT write content yourself — delegate to teammates
- Do NOT spawn Phase 3 before Phase 2 completes
- Do NOT spawn quality reviewer before ALL writers complete
- Do NOT let writers read the full source (only architect does)
- Do NOT skip the quality reviewer phase
- Do NOT use Python or SQL in any lesson content — all analysis via Cowork
- Do NOT use the term "Claude in Excel" when referring to Cowork (they are separate products)
