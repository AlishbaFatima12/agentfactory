# Python for the New AI Era: Course Architecture Plan

**Version:** 2.16
**Status:** Draft
**Date:** 2026-03-15
**Branch:** `learn-python`

---

## 1. The Thesis

We are in the **Post-Syntax Era**. The scarcity in software engineering is no longer the ability to produce code, but the ability to **define problems precisely** and **verify solutions rigorously**.

Traditional Python education teaches **bottom-up**: syntax first, verification last.

- *Python Crash Course* (Matthes, 2023) — teaches features through projects, testing arrives at Chapter 11
- *Learning Python* (Lutz, 2025) — 1,270 pages of deep Python, OOP starts at Chapter 26 (page 687)

This course inverts that order. **Claude Code is the primary development tool throughout Part 4**, and **[Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development) is a required prerequisite.** Students must understand the four-phase SDD workflow — Research, Specification, Refinement, Implementation — before entering Part 4. SDD provides the methodology; Part 4 applies it to Python.

**The core teaching model**: The INPUT is Spec-Driven Development with Claude Code — students write specifications (types + tests) and prompt Claude Code to generate implementations. The OUTPUT is verifying and testing — students run pyright, pytest, and ruff to prove the generated code is correct. Students never type implementation from a blank page. They specify, generate, and verify.

**Our approach**: Teach reading and verification first. "Writing" means specifying (types + tests) and prompting Claude Code to implement — never typing implementation from a blank page.

**Core belief**: A student who can read typed Python, write precise test specifications, and drive Claude Code through the SDD workflow to correct implementations is more valuable in 2026 than one who memorized list comprehension syntax.

---

## 2. The Pedagogical Shift

### Old Way vs New Way

| Dimension | Old Way (Matthes / Lutz) | New Way (AI Era) |
|---|---|---|
| **Starts with** | `print("Hello World")` | `uv init` + `pyproject.toml` |
| **Core skill** | Memorize syntax | Define specifications via SDD with Claude Code |
| **Testing** | Chapter 11 (afterthought) | Chapter 3 (foundational) |
| **Types** | Optional / "dynamic typing interlude" | Non-negotiable from line 1 |
| **OOP** | Part VI, 7 chapters of theory-first | Integrated: dataclasses early, full OOP after testing mastery |
| **Code authoring** | Student writes everything | Student specifies (types + tests) via SDD, Claude Code implements, student verifies |
| **First project** | Alien invasion game | Typed CLI tool with CI pipeline |
| **"Done" means** | It runs | Types pass, tests pass, CI green |
| **Entry point** | Writing from blank page | Reading Claude Code-generated output |

### The Inversion

```
OLD:  Write syntax → Build things → Maybe test → Ship
NEW:  Requirements → Types → Failing Tests → Generate → Verify & Iterate → Ship
```

Claude Code (the AI coding agent from Chapter 5's SDD workflow) is present at every step. What changes is who is driving:

| Step | Who leads | AI role |
|------|-----------|---------|
| Requirements | Human | Assists: spots gaps, challenges assumptions |
| Types | Human | Assists: suggests models, validates design |
| Failing Tests | Human | Assists: suggests cases you missed |
| Generate | AI | Leads: produces full implementation |
| Verify & Iterate | Human | Assists: explains tracebacks, refines output |
| Ship | Human | Assists: security review, changelog |

---

## 3. The Core Pedagogical Method: Read-First, Type-First, Test-First

### Resolving the Tension

**Tension**: If AI writes code, but students can't verify what they don't understand, how much Python do they need?

**Resolution**: Students must understand every Python feature they encounter. They don't need to memorize how to write it from scratch.

Like language learning: reading comprehension comes before essay writing.

### The Feature Learning Progression

Every Python feature follows this 5-step progression:

```
1. SEE it     → AI generates code containing the feature
2. READ it    → Lesson explains what it does and why
3. PREDICT it → "What will this output?" exercises
4. TEST it    → Student defines expected behavior → prompts AI to help structure the test → verifies test correctness
5. BUILD it   → Student specifies (types + tests) → prompts AI to implement → verifies and iterates (TDG cycle)
```

**Critical principle**: Steps 4 and 5 are done WITH Claude Code using the SDD workflow from Chapter 5, not manually. The student's job is to **specify and verify**, never to write implementation from a blank page. "Writing" in the AI era means defining types, writing test specifications, prompting Claude Code via SDD, and verifying output. The INPUT is always a specification (types + tests); the OUTPUT is always verification (pyright + pytest + ruff).

### The Specification Sophistication Gradient

Student specification ability increases across phases:

```
Phase 1 (Ch 1-4):    Read & Explore (PRIMM-AI+)  ← "I can read, predict, and verify what AI generates"
Phase 2 (Ch 5-8):    Specify with types          ← "I can tell AI precisely what to build"
Phase 3 (Ch 9-12):   Specify with tests          ← "I can define correct and prove it"
Phase 4 (Ch 13-14):  Debug & Master TDG          ← "I can diagnose failures and drive TDG without scaffolding"
Phase 5 (Ch 15-18):  Design object models        ← "I can design systems for AI to implement"
Phase 6 (Ch 19-21):  Build production features   ← "I can specify and verify production-grade Python features"
Phase 7 (Ch 22-23):  Deploy tools + async APIs   ← "I can build and ship production tools and async APIs"
Phase 8 (Ch 24-25):  Harden & Secure             ← "I can harden, secure, and ship production-grade software"
Phase 9 (Ch 26-27):  Full system architecture    ← "I can architect and deliver complete, production-grade systems"
```

By Phase 6, students have seen every Python feature 50+ times in AI output. Specifying it precisely for AI feels natural, not forced.

### Pacing and Cognitive Load: The TDG Anchor Rule

The scope of Part 4 is ambitious — from basic types in Phase 1 to async APIs and CI/CD pipelines in Phases 7-8. Without deliberate scaffolding, beginners will feel overwhelmed by the sudden influx of architectural concepts in later phases.

**The rule**: Phase 4 (TDG Mastery) is the anchor. After Phase 4, the TDG method never changes — only the problem domain grows. Every chapter from Phase 5 onward must open by connecting the new material back to the TDG cycle the student already owns:

| Phase | New domain | TDG connection the chapter must make explicit |
|-------|-----------|----------------------------------------------|
| 5 | Objects and classes | "Same cycle, but now you specify class interfaces instead of function signatures" |
| 6 | Files, databases, packages | "Same cycle, but now your tests verify I/O boundaries and data persistence" |
| 7 | CLI tools, async/await, FastAPI | "Same cycle, but now your tests invoke CLI commands and async endpoints" |
| 8 | CI/CD, security | "Same cycle, but now the pipeline runs your tests on every commit" |
| 9 | Full system architecture | "Same cycle at system scale — QuizForge is a brand-new project proving you can drive TDG from scratch" |

**Chapter author directive**: Each chapter in Phases 5-9 must include a short "bridge paragraph" in its opening that says, in effect: "You already know the TDG cycle. This chapter applies it to [new domain]. The method is the same — specify with types, write failing tests, generate, verify. The only thing that changes is what you are specifying." This prevents the cognitive cliff where students feel they are learning an entirely new approach when they are actually applying the same one to bigger problems.

### The PRIMM-AI+ Recall Directive

PRIMM-AI+ (Predict-Run-Investigate-Modify-Make with AI, enhanced with AI-free checkpoints, mastery gates, confidence scoring, and a verification ladder) is introduced in Chapter 1 as the pedagogical framework for the entire course and applied hands-on in Chapter 3 (Reading Python). Every Phase 2+ chapter introduces new Python features that students encounter for the first time. A lightweight callout at the start of each chapter reinforces the PRIMM-AI+ habit:

**Chapter author directive**: Each chapter in Phases 2-4 must include a `:::tip` callout in its opening section (after the narrative hook, before the first teaching section) that says, in effect:

```markdown
:::tip Reading New Code? Use PRIMM-AI+
When you encounter new Python syntax in this chapter, use the PRIMM-AI+ method from Chapter 1:
**Predict** what the code does before running it [AI-FREE]. Rate your confidence (1-5). **Run** it to check your prediction.
**Investigate** any surprises — produce a trace artifact. This works for every new concept you'll meet here.
:::
```

By Phase 5, students will have internalized the method and the callout can be dropped or reduced to a single sentence. The goal is to make PRIMM-AI+ a reflex, not a lesson to revisit.

### PRIMM-AI+ Track A vs Track B

PRIMM-AI+ exercises come in two tracks, determined by what students know at that point in the book:

| Track | When Used | Exercise Style | Example Chapters |
|-------|-----------|---------------|-----------------|
| **Track B: Conceptual Reasoning** | Before students know programming tools | Plain-English scenarios, real-world analogies, no code | Ch 42 (PRIMM-AI+), Ch 31 (Ten Axioms) |
| **Track A: Code Exercises** | After students have the discipline stack | Typed Python, pytest, pyright, actual code artifacts | Ch 33+ (all Python programming chapters) |

**Why this matters**: Chapter 31's PRIMM-AI+ exercises use school plays, birthday parties, cake orders, and form fields — NOT Makefiles, pytest, SQL, or Docker. Students don't have those tools yet. Track B builds conceptual understanding of each axiom; Track A applies them to real code starting when students have the tools. An earlier attempt to add code-based PRIMM-AI+ to Chapter 31 (PR #853) failed precisely because it used Track A exercises before students had the prerequisite knowledge.

**Chapter author directive**: Before writing PRIMM-AI+ exercises, check what the student knows at that chapter. If the student has NOT yet installed the discipline stack (uv, pyright, pytest, ruff), use Track B. If they have, use Track A. Never reference tools, commands, or syntax the student hasn't learned yet.

### PRIMM-AI+ Structural Requirements

Every PRIMM-AI+ Practice section must include these structural elements:

1. **Answer Key**: After every Predict section, include a collapsible `<details>` block with the correct answer. Students must never be left guessing whether their prediction was right. Format:
   ```html
   <details>
   <summary>Answer Key — Check Your Prediction</summary>
   [Correct answers with brief explanation]
   </details>
   ```

2. **Error Taxonomy Classification**: Every Investigate section must ask the student to classify the error/issue using the 5-category Error Taxonomy (Type, Logic, Specification, Data/Edge-Case, Orchestration). Format: "Apply Error Taxonomy: [description] = [category] error."

3. **Mastery Gate**: Every Make section must produce a concrete artifact that proves understanding. Label it explicitly: "This [artifact] is your mastery gate."

4. **Confidence Scoring**: Every Predict section must include "Rate your confidence (1-5)" or "Confidence score."

5. **Verification Ladder** (selective): Only 5 of 10 axioms get a Verification Ladder rung (I=Prediction, V=Types, VII=Tests, IX=Pipeline, X=Observability). Do NOT add rungs to every axiom.

---

## 4. Target Audience

### Dual-Track Design

The course serves **two audiences simultaneously**:

| Audience | What they bring | What they need |
|---|---|---|
| **True beginners** | No programming experience | Everything, but in the right order |
| **Experienced coders** | Know syntax from other languages | The new AI-era workflow and discipline |

### How both are served

- **Beginners** follow the full progression: read → specify → test → prompt AI → verify
- **Experienced coders** can skim reading chapters but gain the TDG workflow, typed Python discipline, and AI collaboration patterns they've never seen before

Each chapter includes:
- **Core content**: Required for all (the new workflow)
- **"If you're new to programming" callouts**: Extra explanation of fundamentals
- **"If you've coded before" callouts**: What's different in this approach

### Dual-Track Callout Directive (Chapter Author Rule)

Every lesson must include Docusaurus admonition callouts wherever terminology or concepts may confuse one audience. These are not optional polish — they are structural requirements for serving both tracks.

**Format** (Docusaurus admonition syntax):

```markdown
:::note If you're new to programming
A **virtual environment** is like a private toolbox for one project. The tools
in one toolbox do not interfere with tools in another. You never need to manage
this toolbox yourself -- uv creates it and keeps it organized automatically.
:::

:::note If you've coded before
You may know Python as "dynamically typed." This course adds static type
annotations checked by pyright in strict mode. The annotations are not optional
documentation -- they are required guardrails. If you have written Python
without types, the workflow here will feel different by design.
:::
```

**When to add callouts:**

| Trigger | Beginner callout | Experienced callout |
|---------|-----------------|---------------------|
| New terminology (e.g., "virtual environment", "type annotation", "assertion") | Plain-English analogy explaining the concept | Skip — they already know it |
| Concept that contradicts prior experience (e.g., "types are required", "tests before code") | Skip — they have no prior experience to conflict with | Explain what is different and why |
| Tool or workflow unfamiliar to both (e.g., TDG, PRIMM-AI+, uv) | Simple analogy | How it compares to tools/workflows they already know |
| Complex code example with multiple new concepts | Break down each piece in plain English | Highlight what is Python-specific vs general programming |

**Rules:**
- At least one callout of each type per chapter (more in early phases, fewer in later phases)
- Callouts should be 2-4 sentences — concise, not mini-lessons
- Place callouts immediately after the concept they explain, not at the end of a section
- Never let a technical term appear for the first time without either an inline explanation or a beginner callout

---

## 5. The Python Feature Map (Two Reference Books → Our Framing)

All traditional Python features are taught. The **framing changes**, not the content.

### From Python Crash Course (Matthes)

| Matthes Chapter | Traditional Framing | Our Framing | Our Chapter |
|---|---|---|---|
| Ch 1: Getting Started | Install Python, run a script | The professional workbench: uv, pyright, ruff, pytest | Ch 2 |
| Ch 2: Variables & Types | Variables store data | PRIMM-AI+ method + reading types/expressions (variables only, no functions) | Ch 3, 5 |
| Ch 3: Lists | Lists store sequences | Typed collections: what `list[str]` tells us about data | Ch 6 |
| Ch 4: Working with Lists | Looping through lists | Iteration: how AI processes every item | Ch 9 |
| Ch 5: If Statements | Conditional execution | Branch logic: predicting which path code takes | Ch 9 |
| Ch 6: Dictionaries | Key-value pairs | Key-value data: why AI uses `dict[str, int]` for lookups | Ch 6 |
| Ch 7: User Input & While | Input and while loops | Control flow through testing: loops that terminate | Ch 9 |
| Ch 8: Functions | Defining functions | Contracts: what a function signature promises | Ch 8 |
| Ch 9: Classes | OOP fundamentals | Domain models → Full OOP arc | Ch 7, 15-18 |
| Ch 10: Files & Exceptions | File I/O | Files and data processing: JSON, CSV, PostgreSQL intro | Ch 19 |
| Ch 11: Testing | pytest basics | pytest as specification language (foundational) | Ch 4, 10 |
| Chs 12-14: Projects | Alien game, data viz, web | CLI tools, async services, AI-powered capstone | Ch 22-27 |

### From Learning Python (Lutz) — OOP Chapters

| Lutz Chapter | Traditional Coverage | Our Framing | Our Chapter |
|---|---|---|---|
| Ch 26: OOP Big Picture | Why classes, inheritance tree | Objects in the AI era: why structure matters for AI-generated code | Ch 15 |
| Ch 27: Class Coding Basics | `class`, `__init__`, `self`, instances | Classes and instances: building typed objects | Ch 15 |
| Ch 28: A More Realistic Example | Step-by-step class hierarchy | Building a real system: from dataclass to full class | Ch 16 |
| Ch 29: Class Coding Details | Inheritance, abstract classes, namespaces | Inheritance and composition: is-a vs has-a design decisions | Ch 16 |
| Ch 30: Operator Overloading | `__iter__`, `__next__`, `__getattr__`, `__repr__` | Special methods: how Python objects really work | Ch 17 |
| Ch 31: Designing with Classes | Composition, delegation, MRO, multiple inheritance | OOP design: composition-first, inheritance-when-justified | Ch 16 |
| Ch 32: Class Odds and Ends | Static/class methods, decorators, metaclasses intro | Decorators and class patterns: real-world Python | Ch 18 |
| Ch 33-36: Exceptions | Exception classes, hierarchies, context managers | Error handling: exception design for typed systems | Ch 12 |
| Ch 38: Managed Attributes | Properties, descriptors, `__getattr__` | Managed attributes: controlling access patterns | Ch 18 |
| Ch 39: Decorators | Function and class decorators, arguments, nesting | Decorators deep dive: from `@pytest.fixture` to custom decorators | Ch 18 |
| Ch 40: Metaclasses | Metaclass protocol, `type`, class creation | Advanced: metaclasses (reference, not core) | Ch 18 (appendix) |

---

## 6. The Technology Stack

### The Primary Development Tool

**Claude Code** is the AI coding agent used throughout Part 4. Students learned the SDD workflow with Claude Code in [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development). In Part 4, that workflow becomes concrete: specifications are types and tests, Claude Code generates the implementation, and the discipline stack (below) verifies the output. The student's INPUT is always a specification delivered through SDD; the OUTPUT is always verification via types, tests, and linting.

### Non-Negotiable Tools (Every Chapter)

| Layer | Tool | Purpose |
|---|---|---|
| **AI Coding Agent** | Claude Code | SDD workflow: generates implementations from specifications (Chapter 5 prerequisite) |
| **Package Manager** | uv | Fast, reproducible environment management |
| **Static Types** | Pyright (strict mode) | Catch type errors at edit time |
| **Runtime Validation** | Pydantic v2 | Validate data at boundaries |
| **Linting** | Ruff | Style enforcement and error detection |
| **Formatting** | Ruff formatter | Consistent code style |
| **Testing** | pytest | Behavioral verification |
| **Version Control** | Git | Every change is a diff |

### The Pedagogical Rule

> **Never show untyped Python.**
>
> Students must believe Python requires types because in this curriculum, it does.

**Correct:**
```python
def calculate_total(items: list[Item], tax_rate: float = 0.0) -> int:
    """Calculate total price in cents, including tax."""
    subtotal = sum(item.quantity * item.price_cents for item in items)
    return int(subtotal * (1 + tax_rate))
```

**Never show:**
```python
def calculate_total(items, tax_rate=0.0):  # No types = not allowed
    ...
```

---

## 7. Chapter Plan (27 Chapters, 9 Phases)

### Onboarding Directive: Phase 1 Must Handle True Beginners

Part 4 serves students who have completed Parts 1-3 (AI prompting, file processing, version control) but have **never written code**. The leap from "I can prompt Claude Code" to "I can write a failing pytest test" is real.

**Required prerequisite**: [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development). Students must understand the four-phase SDD workflow (Research → Specification → Refinement → Implementation) and Claude Code's native capabilities (Memory, Subagents, Tasks, Hooks) before entering Part 4. TDG is SDD applied to Python — specifications become types + tests, Claude Code generates the implementation, and the discipline stack verifies the output. Without Chapter 5, students lack the methodology that Part 4 assumes.

**Phase 1 chapters (Ch 1-4) must:**

1. **Establish the learning method first.** Chapter 1 (PRIMM-AI+) teaches students *how* they will learn before they learn anything about Python. Every subsequent chapter assumes students know the PRIMM-AI+ stages, AI-free checkpoints, and confidence scoring and apply them reflexively.
2. **Show every command with expected output.** Never say "install uv" without showing the exact terminal command and what success looks like. Include common errors and fixes (wrong PATH, permission denied, Windows vs Mac differences).
3. **Explain every tool before using it.** Before running `uv run pytest`, explain what pytest is and why it exists — in one sentence, not a lecture. A beginner callout can expand for those who need more.
4. **Never assume terminal fluency beyond Parts 1-3.** Students can `cd`, `ls`, and run commands. They cannot debug environment issues, resolve PATH conflicts, or interpret cryptic error messages without guidance.
5. **Make the first TDG cycle (Ch 4) feel small.** The student writes 5 lines (a type signature + 2 assertions). Claude Code writes 20. The ratio should feel empowering, not intimidating. Frame it as: "You already know how to tell Claude Code what you want via SDD. Now you are telling it with types and tests instead of English."

---

### Phase 1: The Workbench (Read & Explore)

> Student role: **Reader** — "I can understand what AI generates"

#### Chapter 1: The PRIMM-AI+ Framework (3 Lessons)

**Goal**: Student understands how they will learn throughout Parts 4 and 5 — the PRIMM-AI+ method (Predict, Run, Investigate, Modify, Make with AI, enhanced with AI-free checkpoints, mastery gates, confidence scoring, and a verification ladder) — before encountering a single line of Python.

**Design decision**: This chapter is conceptual, not technical. Minimal Python code is used (simple variables + print only). No tools are installed. The chapter establishes the learning contract: here is *how* every lesson works, and here is *why* this approach produces better developers than the old "type from scratch" model.

**Positioning**: PRIMM-AI+ sits *above* the Ten Axioms as the meta-learning framework. The Ten Axioms tell you what professional practice looks like. PRIMM-AI+ tells you how to *internalize* those practices. Together they form the complete system — the developer's comprehension and the software's correctness. "PRIMM-AI+ is the operating system. The Ten Axioms are the first application that runs on it."

**Lesson 1: The PRIMM Framework** (~15 min)
- Why learning to program in 2026 is different from 2016
- The comprehension crisis: AI generates code, but who verifies it?
- What is PRIMM? The research-validated framework (Sentance, Waite, Kallia 2019)
- The five stages: Predict [AI-FREE], Run, Investigate, Modify, Make
- Confidence scoring (1-5) introduced at Predict stage
- Walkthrough with a simple 4-line greeting program (variables + print only)

**Lesson 2: PRIMM-AI+: Your Learning Operating System** (~25 min)
- PRIMM-AI+: adapting PRIMM for the AI coding assistant era with 9 structural enhancements
- How AI participates in each stage (Predict: generates examples; Run: executes code; Investigate: Socratic tutor; Modify: comparison partner; Make: review partner)
- AI Permissions Table: right vs wrong interactions at each stage
- AI-Free Checkpoints: [AI-FREE] markers — diagnostic moments without AI
- Mastery Gates: earn the right to proceed (written prediction, comparison recorded, can explain how, written spec)
- The five PRIMM-AI+ rules:
  1. Never run code you have not predicted
  2. Never trust an explanation you have not tested
  3. Modify before you make
  4. Write the spec before the code
  5. Use AI as a partner, not a crutch
- Verification Ladder: 5 rungs from Prediction → Types → Tests → Pipeline → Observability
- Confidence scoring expanded: false confidence as the most dangerous state
- Error taxonomy preview: 5 categories (Type, Logic, Spec, Data/Edge-Case, Orchestration)
- Chapter-End Rubric preview: 5 dimensions (Prediction Accuracy, Trace Quality, Explanation Quality, Modification Quality, Independent Make)
- PRIMM-AI+ at a Glance: consolidated summary table
- PRIMM-AI+ maps to the Ten Axioms (Predict→Axiom VII Tests, Run→VII+IX Pipeline, Investigate→V+X Types+Observability, Modify→IV Composition, Make→II+III Markdown+Programs)

**Lesson 3: The Complete Teaching and Learning System** (~20 min)
- Four embedded teaching methods: worked examples, Parsons problems, live coding, peer instruction
- Where each method fits in the PRIMM-AI+ sequence (worked examples → Predict/Investigate, Parsons problems → bridge inside Investigate, live coding → Investigate/Modify, peer instruction → all stages)
- Classroom mode vs solo mode ("this book is designed for solo mode")
- The 5-step practical lesson architecture — one step per PRIMM stage: Predict, Run, Investigate (with optional Parsons problems), Modify, Make
- Parsons problems sit inside Investigate as a structural check, not as a separate step
- How every chapter in Parts 4-5 maps to PRIMM-AI+ structure at a larger scale
- Blockquote callout: "Where do Parsons Problems fit?" — clarifies placement for students

**Student does**: Reads, reflects, internalizes the learning method — minimal code, no tools, pure method
**AI role**: Not yet present — the student meets AI coding assistants in Ch 2 (tool installation) and Ch 3 (reading AI-generated code)

**Transition to Ch 2**: "You now know *how* you will learn. Chapter 2 gives you the professional tools that make this method possible — a package manager, a type checker, a linter, a test runner, and version control."

---

#### Chapter 2: The Development Environment

**Goal**: Student has a professional Python workbench installed and working.

- Why the toolchain matters before a single line of code
- Installing uv (package manager for the AI era)
- Project initialization: `uv init my-project`
- The `pyproject.toml` as project identity
- Installing the discipline stack: pyright, ruff, pytest
- First run: `uv run ruff check .` → clean output
- Git init: every project is version-controlled from minute one

**Student does**: Configures `pyproject.toml`, runs tools, reads output
**AI role**: Generates project scaffolding; student reads and understands the structure

---

#### Chapter 3: Reading Python (PRIMM-AI+ in Practice)

**Goal**: Student applies the PRIMM-AI+ method from Chapter 1 to real Python code — variables, types, arithmetic, and print only. No functions, no collections, no imports.

**Design decision**: This chapter is standalone (not merged into Ch 2). It gives students a *taste* of Python through reading, not writing. Students already know the PRIMM-AI+ method from Ch 1 (including AI-free checkpoints, confidence scoring, and mastery gates); this chapter puts it into practice with the minimum Python needed. Phase 2 covers every Python feature in depth — Chapter 3 does NOT attempt to teach Python comprehensively.

**What students CAN use** (taught in Ch 2 or introduced here):
- Variables with type annotations: `name: str = "Zia"`
- Four primitive types: `str`, `int`, `float`, `bool`
- Arithmetic operators: `+`, `-`, `*`, `/`, `//`, `%`, `**`
- String concatenation (`+`), repetition (`*`), f-strings
- Boolean logic: `and`, `or`, `not`, comparisons
- `print()` for output
- Operator precedence (PEMDAS + Python extensions)

**What students CANNOT use yet** (deferred to Phase 2+):
- Functions (`def`, parameters, return, signatures)
- Collections (`list`, `dict`, `tuple`, `set`)
- Imports and modules
- String methods (`.upper()`, `.split()`, etc.)
- Control flow (`if/elif/else`, `for`, `while`)
- Classes and dataclasses

**Lessons**:

1. **The PRIMM-AI+ Method in Action — Predict, Run, Investigate**: Applies the PRIMM-AI+ framework from Ch 1 to real code. Students practice Predict [AI-FREE] with confidence scoring, then Run-Investigate on 4 short code blocks (2-4 lines each) using only variables, types, and arithmetic. Establishes the habit: predict before running.

2. **Trace Tables — When Your Brain Takes Shortcuts**: Teaches trace tables as the formal tool for tracking variable state line by line. Students build trace tables for 4-6 line blocks with variable reassignment. Catches the most common prediction error (using old variable values after reassignment).

3. **Your First Code Review — Catching a Bug**: Capstone lesson. Students read a 15-20 line SmartNotes excerpt (variables, arithmetic, print only — no functions). They apply PRIMM-AI+ and trace tables to find a deliberate type mismatch bug. Uses the error taxonomy from Ch 1 to classify the bug. Connects to Pyright: the tool catches what the student just found manually.

**Student does**: Predicts output using PRIMM-AI+ (with [AI-FREE] checkpoints and confidence scoring), builds trace tables, performs a mini code review
**AI role**: Generates typed Python samples; student reads, predicts, and explains

**Transition to Ch 4**: "You can read Python. You can predict what it does. You can even find bugs. In Chapter 4, you flip the script — instead of reading someone else's code, you write a specification and AI generates code for you. Then you verify it using the reading skills you just learned."

---

#### Chapter 4: Your First TDG Cycle

**Goal**: Student experiences the complete Test-Driven Generation loop.

- What is TDG (Test-Driven Generation)?
- The loop: Specify → Type → Test → AI Generates → Verify
- Writing your first test (5 lines that define a requirement)
- Prompting AI: "Implement the function that passes this test"
- Running `uv run pytest` and seeing green
- Running `uv run pyright` and seeing clean
- The first taste: 5 lines of student code → 20 lines of working implementation
- Why this changes everything

**Student does**: Specifies behavior via one test function (5-10 lines), prompts AI, verifies output
**AI role**: Generates implementation (~20 lines) from student's test specification

---

### Phase 2: Types as the Language of Intent (Specify)

> Student role: **Specifier** — "I can tell AI precisely what to build"

#### Chapter 5: Primitive Types and Expressions

**Goal**: Student understands Python's type system as a specification vocabulary.

**Covers Lutz**: Ch 4 (core objects), Ch 5 (numbers), Ch 7 (strings) — reframed as types

- `str` — text, string methods, f-string formatting
- `int` and `float` — numbers, arithmetic operators, precision
- `bool` — truth values, comparisons, logical operators
- Type annotations as contracts: `age: int = 25`
- Operators and expressions (through reading and prediction)
- Type conversions: `int()`, `str()`, `float()`
- Type narrowing: what Pyright catches for you
- Common type errors and how to fix them

**Student does**: Writes type annotations as specifications, reads AI-generated programs using those types
**AI role**: Generates programs using student-defined types; student verifies type correctness

---

#### Chapter 6: Collections — Lists, Dicts, Tuples, Sets

**Goal**: Student can specify structured data using typed collections.

**Covers Lutz**: Ch 8 (lists/dicts), Ch 9 (tuples/files), Ch 4 sets — reframed as typed containers

- `list[str]` — ordered sequences of typed items
- `dict[str, int]` — key-value mappings with typed keys and values
- `tuple[str, int, bool]` — fixed-size typed groups
- `set[str]` — unique collections
- Indexing, slicing, and access patterns (through reading)
- Mutability: which collections can change, which are frozen
- When to use which collection (decision guide)
- Nested collections: `list[dict[str, int]]`
- Type safety: why `list[Any]` is banned

**Student does**: Defines collection types as specifications, predicts behavior of AI-generated collection code
**AI role**: Generates collection processing code; student verifies type safety and correctness

---

#### Chapter 7: Data Models — Dataclasses and Pydantic

**Goal**: Student can model any domain with typed data structures.

**Bridge to OOP**: This chapter introduces the *data side* of objects. Full OOP (behavior, inheritance, design) comes in Phase 4.

- Why raw dicts are dangerous (`dict[str, Any]` hides bugs)
- `@dataclass` — Python's typed data container
- Fields, defaults, and frozen dataclasses
- `@dataclass(frozen=True)` — immutable objects
- Pydantic `BaseModel` — validation at external boundaries
- When to use dataclass vs Pydantic (internal vs external data)
- Modeling a real domain: Order, Customer, Product
- Nested models and relationships
- Preview: dataclasses are simplified classes (full classes come in Phase 4)
- TDG exercise: define models, write tests, AI implements logic

**Student does**: Defines dataclass/Pydantic models (the spec) + writes tests → prompts AI to implement logic → verifies
**AI role**: Generates business logic from student's typed models and tests

---

#### Chapter 8: Functions as Contracts

**Goal**: Student can define function signatures that serve as specifications.

**Covers Lutz**: Ch 16-19 (functions) — reframed as contracts

- A function signature IS a contract: inputs → output
- Type annotations on parameters and return values
- Default values and optional parameters
- `*args` and `**kwargs` (typed): when and why
- Pure functions: same input → same output (predictable, testable)
- Function composition: small functions that combine
- Scope: local, enclosing, global, built-in (LEGB rule)
- First-class functions: functions as values (passing functions to functions)
- The Unix philosophy applied to functions: do one thing well
- Docstrings as specification (what, not how)
- TDG exercise: write signatures + tests, AI implements body

**Student does**: Defines function signatures + docstrings (the contract) + writes tests → prompts AI to implement → verifies
**AI role**: Generates function bodies from student's signatures and test specifications

---

### Phase 3: Tests as Specification (Verify)

> Student role: **Verifier** — "I can prove code is correct"

#### Chapter 9: Control Flow — Through the Lens of Testing

**Goal**: Student understands if/for/while by reading, predicting, and testing them.

**Covers Lutz**: Ch 10-13 (statements, if, while, for) — learned through testing, not memorization

- `if/elif/else` — branch logic (reading and prediction exercises)
- `match/case` — structural pattern matching (Python 3.10+)
- `for` loops — iteration over collections
- `while` loops — conditional repetition
- `break`, `continue`, `pass` — flow control
- The `for/else` and `while/else` patterns
- Truthiness in Python: what evaluates to `True` or `False`
- Testing branches: how to ensure every path is covered
- Testing loops: boundary conditions, empty inputs, single items
- The connection: control flow understanding enables better tests

**Student does**: Writes tests that specify branch/loop behavior → prompts AI to implement → verifies all paths covered
**AI role**: Generates control flow implementations; student verifies branch coverage

---

#### Chapter 10: pytest Deep Dive

**Goal**: Student can write comprehensive test suites that serve as specifications.

- Test structure: Arrange → Act → Assert
- `assert` statements and comparison operators
- Fixtures: reusable test setup with `@pytest.fixture`
- Parametrize: testing many cases from one function
- Testing exceptions: `pytest.raises`
- Test organization: files, classes, naming conventions
- Coverage: measuring what's tested with `pytest-cov`
- Markers: `@pytest.mark.skip`, `@pytest.mark.slow`
- Testing objects: verifying class behavior through tests
- Writing tests as specifications: the test IS the requirement document

**Student does**: Writes complete test suites as specifications (20-40 lines) → AI implements against those specs → student verifies
**AI role**: Generates implementations that must pass student-written test suites

---

#### Chapter 11: Iterating on AI Output — The Feedback Loop

**Goal**: Student can evaluate AI output critically and iterate effectively through prompt refinement.

- Evaluating AI output: does it match the specification?
- The iteration loop: run tests → identify failures → refine prompt → re-generate
- Common AI misinterpretations and how to catch them
- Prompt refinement: being more specific, providing examples, constraining output
- When to accept, when to reject, when to modify AI-generated code
- Reading and understanding diffs: what changed between iterations
- Building the "verify before trust" habit
- Capstone exercise: iterative TDG cycle with intentionally vague initial prompt

**Student does**: Starts with imprecise prompts → evaluates AI output against tests → iterates with progressively better prompts → achieves green
**AI role**: Generates implementations that evolve with student's improving specifications

---

#### Chapter 12: Error Handling and Exceptions

**Goal**: Student can anticipate failures and design exception hierarchies.

**Covers Lutz**: Ch 33-36 (exceptions) — reframed for typed systems

- Exceptions: `try/except/else/finally` (full syntax)
- Built-in exception hierarchy: `BaseException` → `Exception` → specific types
- Built-in exceptions: `ValueError`, `TypeError`, `KeyError`, `FileNotFoundError`, etc.
- Raising exceptions: `raise ValueError("quantity must be positive")`
- Exception chaining: `raise NewError() from original_error`
- Custom exception classes (inheriting from `Exception`)
- Exception hierarchies for domains: why `class OrderError(Exception)` matters
- Context managers: `with` statement and `__enter__`/`__exit__`
- Writing custom context managers with `contextlib`
- Pydantic validators: catching bad data at the boundary
- Testing error paths: `pytest.raises(ValueError, match="...")`
- Edge case thinking: empty inputs, None, negative numbers, huge values
- Defensive vs offensive programming (trust types internally)

**Student does**: Designs exception hierarchies + writes error-path tests → prompts AI to implement handling → verifies edge cases
**AI role**: Generates error handling patterns; student specifies what errors should occur and verifies

---

### Phase 4: Debugging and TDG Independence (Debug & Master)

> Student role: **Debugger** — "I can diagnose failures and drive TDG without scaffolding"

**Why a debugging checkpoint?**: By Phase 3, students can write tests and verify code. But when AI output fails, they need to diagnose WHY. This phase teaches debugging as a systematic skill and consolidates TDG into an independent practice. Without this checkpoint, students hit a wall in Phase 5 (OOP) where AI errors are harder to trace.

#### Chapter 13: Debugging AI-Generated Code

**Goal**: Student can systematically diagnose and fix errors in AI-generated Python.

- **The debugging mindset**: AI code that passes pyright can still be wrong
- Reading error messages: tracebacks, line numbers, exception types
- `print()` debugging: strategic placement to trace values
- Using the Python debugger (`pdb`/`breakpoint()`)
- Common AI code failures:
  - Off-by-one errors in loops
  - Wrong variable scope
  - Incorrect type narrowing
  - Edge cases AI misses (empty inputs, None, boundary values)
- The debugging loop: reproduce → isolate → identify → fix → verify
- Reading `pytest` failure output: expected vs actual, assertion introspection
- Debugging type errors: reading Pyright diagnostics
- When to re-prompt AI vs fix manually (the judgment call)
- Building a personal "bug pattern" checklist

**Student does**: Given AI-generated code with planted bugs → systematically diagnoses using tracebacks, print debugging, and test output → fixes and verifies
**AI role**: Generates code with realistic bugs; student debugs rather than re-prompting

---

#### Chapter 14: TDG Mastery — The Complete Cycle

**Goal**: Student can run the full spec → type → test → generate → verify cycle independently.

- The complete TDG workflow, step by step
- Starting from a problem statement (Markdown spec)
- Defining types (dataclasses/Pydantic)
- Writing comprehensive tests (happy path + edge cases)
- Prompting AI effectively (focused context, not entire codebase)
- Reviewing AI output (what to check, what to question)
- Iterating: when tests fail, tighten the spec
- When NOT to use AI: recognizing when manual implementation is faster
- Running the full verification stack: `ruff` → `pyright` → `pytest`
- Prompt engineering for code: context windows, specificity, iteration patterns
- Capstone exercise: complete TDG cycle for a real problem (no hand-holding)

**Student does**: Full TDG cycle — specs + types + tests → prompts AI → reviews output → debugs failures → iterates until green
**AI role**: Generates complete implementations; student drives the specify-verify-debug loop

---

### Phase 5: OOP — The Python Object Model (Model)

> Student role: **Modeler** — "I can design systems for AI to implement"

**Why OOP gets its own phase**: Python is fundamentally object-oriented — everything is an object. Understanding the object model unlocks the language. But we teach it AFTER testing AND debugging mastery, so students can verify and debug every OOP concept they learn.

**Our OOP philosophy**: Composition first, inheritance when justified. Protocols over abstract base classes. Dataclasses for data, classes for behavior. Test every design decision.

#### Chapter 15: Classes and Instances

**Goal**: Student understands how classes create objects with typed state and behavior.

**Covers Lutz**: Ch 26 (OOP big picture), Ch 27 (class basics)

- Why classes? From dataclasses to full classes (the progression)
- The `class` statement: creating a new type
- `__init__`: initializing instance state with types
- `self`: the instance reference
- Instance attributes vs class attributes
- Methods: functions attached to objects
- Type-annotated classes:
  ```python
  class BankAccount:
      def __init__(self, owner: str, balance: int = 0) -> None:
          self.owner = owner
          self.balance = balance

      def deposit(self, amount: int) -> None:
          if amount <= 0:
              raise ValueError("Amount must be positive")
          self.balance += amount
  ```
- Classes vs dataclasses: when to use which
  - Dataclass: mostly data, little behavior
  - Class: significant behavior, complex state management
- Instance creation and the object lifecycle
- Testing classes: creating instances, calling methods, asserting state
- TDG exercise: define a class interface (types + tests), AI implements

**Student does**: Defines class interfaces (types + method signatures) + writes behavioral tests → prompts AI to implement → verifies
**AI role**: Generates class implementations from student's typed interfaces and test specifications

---

#### Chapter 16: Inheritance, Composition, and Design

**Goal**: Student can choose the right relationship between objects.

**Covers Lutz**: Ch 28 (realistic example), Ch 29 (coding details), Ch 31 (designing with classes)

- **Inheritance: "is-a" relationships**
  - Subclassing: `class SavingsAccount(BankAccount):`
  - Method overriding: specializing behavior
  - `super()`: calling parent methods
  - When inheritance makes sense (shared interface, true specialization)
  - The inheritance trap: deep hierarchies are fragile
- **Composition: "has-a" relationships**
  - Embedding objects in objects: `class Car` has `Engine`
  - Delegation: forwarding method calls
  - Why composition is usually preferred over inheritance
- **The Design Decision Framework**:
  ```
  Q: Does B share A's interface AND is truly a specialized version?
     YES → Inheritance (is-a)
     NO  → Composition (has-a)

  When in doubt → Composition
  ```
- Abstract base classes: `ABC` and `@abstractmethod`
- Multiple inheritance and MRO (method resolution order) — understand, use sparingly
- Class namespaces: how Python looks up attributes (instance → class → parent chain)
- Real-world example: building a system with inheritance AND composition
- Testing OOP designs: testing interfaces, not implementations

**Student does**: Designs class hierarchies (inheritance vs composition decisions) + writes interface tests → prompts AI to implement → verifies design
**AI role**: Generates implementations and refactoring suggestions; student makes design decisions and verifies

---

#### Chapter 17: Special Methods and the Python Object Model

**Goal**: Student understands how Python objects really work under the hood.

**Covers Lutz**: Ch 30 (operator overloading), Ch 9 partial (object model)

- **The Python object model**: everything is an object
- **String representation**:
  - `__repr__`: unambiguous representation (for developers)
  - `__str__`: human-friendly representation (for users)
  - `__format__`: custom formatting with f-strings
- **Comparison operators**:
  - `__eq__`, `__lt__`, `__le__`, `__gt__`, `__ge__`
  - `@functools.total_ordering`: implement `__eq__` and `__lt__`, get the rest
- **Arithmetic operators** (when modeling domain types):
  - `__add__`, `__sub__`, `__mul__`
  - `__radd__`: reverse operations
- **Container protocols**:
  - `__len__`: making objects work with `len()`
  - `__getitem__`: making objects indexable
  - `__contains__`: making objects work with `in`
- **Iteration protocol** (critical):
  - `__iter__` and `__next__`: making objects iterable
  - Building custom iterators
  - Why this matters: `for item in my_object:` just works
- **Boolean protocol**: `__bool__` — truthiness of custom objects
- **Hashability**: `__hash__` — making objects usable as dict keys and in sets
- **Context manager protocol**: `__enter__` and `__exit__` revisited (from Ch 12)
- Testing special methods: verify operator behavior through tests
- The principle: special methods make objects feel "Pythonic"

**Student does**: Specifies special method behavior via tests (e.g., `__eq__`, `__iter__`) → prompts AI to implement → verifies Pythonic behavior
**AI role**: Generates special method implementations; student specifies expected operator behavior via tests

---

#### Chapter 18: Decorators, Properties, and Advanced Patterns

**Goal**: Student can use and understand advanced OOP patterns in real Python code.

**Covers Lutz**: Ch 32 (class odds and ends), Ch 38 (managed attributes), Ch 39 (decorators), Ch 40 (metaclasses preview)

- **Decorators — functions that modify functions**:
  - What decorators do: `@decorator` is just `func = decorator(func)`
  - Built-in decorators: `@staticmethod`, `@classmethod`, `@property`
  - Real-world decorators: `@pytest.fixture`, `@app.get()` (FastAPI), `@dataclass`
  - Writing custom function decorators (with types):
    ```python
    from typing import Callable, TypeVar
    from functools import wraps

    F = TypeVar("F", bound=Callable[..., object])

    def log_calls(func: F) -> F:
        @wraps(func)
        def wrapper(*args: object, **kwargs: object) -> object:
            print(f"Calling {func.__name__}")
            return func(*args, **kwargs)
        return wrapper  # type: ignore[return-value]
    ```
  - Decorator arguments: `@retry(max_attempts=3)`
  - Class decorators: decorating entire classes
  - Decorator stacking: order matters
- **Properties — managed attributes**:
  - `@property`: controlled attribute access
  - Getters, setters, deleters
  - Why properties matter: encapsulation without changing the interface
  - Computed properties: values derived from state
- **Static methods vs class methods**:
  - `@staticmethod`: utility functions in the class namespace
  - `@classmethod`: alternative constructors (`cls` parameter)
  - Factory methods: `User.from_dict(data)`
- **Protocols revisited** (from typing module):
  - `Protocol`: structural subtyping (duck typing with type safety)
  - Protocols vs ABC: when to use which
  - Dependency injection with Protocols
    ```python
    from typing import Protocol

    class Repository(Protocol):
        def save(self, entity: Entity) -> None: ...
        def find_by_id(self, id: str) -> Entity | None: ...
    ```
- **Metaclasses** (reference only, not core):
  - What they are: classes that create classes
  - `type` as the default metaclass
  - When you'd encounter them: ORMs, frameworks
  - The rule: if you need metaclasses, you're building a framework
- Testing advanced patterns: decorators, properties, protocols
- TDG exercise: build a system using decorators, properties, and protocols

**Student does**: Designs protocol interfaces + writes decorator specs + tests → prompts AI to implement patterns → verifies
**AI role**: Generates decorator implementations, protocol-based designs; student architects the patterns and verifies

---

### Phase 6: Real-World Python (Build)

> Student role: **Practitioner** — "I can specify and verify production-grade Python features"

Students already learned file processing and PostgreSQL in Part 2 — directing Claude Code to handle file operations, building a Budget Tracker with SQLAlchemy and Neon PostgreSQL, and managing Git workflows. That knowledge carries forward. Phase 6 builds on it by teaching the typed Python code underneath — the code that Claude Code was generating on their behalf — using TDG to specify, generate, and verify every layer.

#### Chapter 19: Files, Data Processing, and PostgreSQL Introduction

**Goal**: Student can read, process, and persist real-world data — from flat files to relational databases.

**Covers Lutz**: Ch 9 partial (files), Ch 37 partial (unicode)

- Reading and writing text files (with `pathlib.Path`)
- JSON: `json.loads()`, `json.dumps()`, and typed parsing
- CSV processing with the `csv` module
- Binary files and encoding basics (UTF-8)
- Context managers for files: `with open(...) as f:`
- Processing pipelines: read → transform → write
- `pickle` and `shelve` for object serialization (awareness, not preference)
- Error handling for I/O operations
- **When files aren't enough → PostgreSQL introduction**:
  - The problem: JSON grows to 2,000 records with relationships (reference Axiom VI)
  - Why a real database? Files don't support concurrent access, queries, or relationships
  - Setting up PostgreSQL (local install or cloud-hosted like Neon)
  - Connecting with `psycopg` (the modern PostgreSQL adapter)
  - Creating tables, inserting data, querying with SELECT
  - Parameterized queries (SQL injection prevention)
  - Context managers for database connections
  - When to use JSON files vs a database (complexity threshold)
  - *Full SQL coverage (JOINs, migrations, ORMs, advanced PostgreSQL) comes in later parts of the book*
- TDG exercise: build a data processing tool that starts with JSON and graduates to PostgreSQL

**Student does**: Specifies file/data processing pipelines (types + tests) → prompts AI to implement → verifies I/O and query correctness
**AI role**: Generates file processing and PostgreSQL code; student designs the pipeline and verifies data integrity

---

#### Chapter 20: Modules and Packages

**Goal**: Student can organize code into reusable, importable modules.

**Covers Lutz**: Ch 22-25 (modules and packages)

- Why modules? Organizing code beyond single files
- The `import` statement: `import module`, `from module import name`
- Creating your own modules: any `.py` file is a module
- Packages: directories with `__init__.py`
- Relative vs absolute imports
- The `__name__ == "__main__"` pattern
- Module search path: how Python finds modules
- Namespace packages (awareness)
- Project structure conventions:
  ```
  src/
    my_project/
      __init__.py
      models.py
      services.py
      repository.py
  tests/
    test_models.py
    test_services.py
  ```
- Circular imports: why they happen, how to fix them
- TDG exercise: refactor a single-file project into a proper package

**Student does**: Designs module/package architecture → prompts AI to generate structure → verifies imports and organization
**AI role**: Generates project scaffolding and module organization; student architects the structure

---

#### Chapter 21: Comprehensions, Generators, and Functional Patterns

**Goal**: Student masters Python's expressive power for data transformation.

**Covers Lutz**: Ch 14 (iterations/comprehensions), Ch 20 (comprehensions/generators)

- List comprehensions: `[x * 2 for x in items if x > 0]`
- Dict comprehensions: `{k: v for k, v in pairs}`
- Set comprehensions: `{x for x in items if x > 0}`
- Generator expressions for memory efficiency: `(x for x in big_list)`
- Generator functions: `yield` and lazy evaluation
- The iteration protocol revisited: `__iter__`, `__next__`, `StopIteration`
- `map()`, `filter()`, `sorted()` with key functions
- Lambda functions (sparingly, only when clear)
- `functools`: `reduce`, `partial`, `lru_cache`
- `itertools`: `chain`, `groupby`, `islice` (the useful ones)
- Chaining transformations: readable data pipelines
- When comprehensions help vs when they hurt readability
- Performance: generators vs lists for large datasets

**Student does**: Specifies transformation pipelines (types + tests) → prompts AI to implement → compares AI versions, verifies correctness
**AI role**: Generates comprehensions, generators, and pipelines; student specifies expected transformations and reviews efficiency

---

### Phase 7: CLI and Concurrency (Deploy)

> Student role: **Tool Builder** — "I can build and ship production tools and async APIs"

#### Chapter 22: Unix-Style CLI Tools

**Goal**: Student can build professional command-line applications.

- The Unix philosophy applied to Python programs
- `stdin`/`stdout`/`stderr` — the three streams
- Argument parsing with `argparse` or `typer`
- Exit codes: 0 = success, non-zero = failure
- Composable tools: pipe Python programs together
- Environment variables and configuration
- Building a real CLI tool end-to-end with TDG
- Packaging and distributing CLI tools

**Student does**: Designs CLI interface (commands, flags, types) + writes integration tests → prompts AI to implement → verifies end-to-end
**AI role**: Generates CLI boilerplate, argument parsing, command handlers; student architects the user experience

---

#### Chapter 23: Concurrency, async/await, and FastAPI Introduction

**Goal**: Student understands concurrent execution, can write async Python, and sees how it powers web services.

**Covers Lutz**: Ch 31 partial (asyncio concepts), extends beyond Lutz into modern async patterns

- **Why concurrency?** The real world doesn't wait — APIs, databases, file I/O all block
- **Sync vs async**: what "blocking" means and why it matters
- **Threading basics**:
  - `threading.Thread`: running tasks in parallel
  - The GIL (Global Interpreter Lock): what it means for Python threads
  - When threads help (I/O-bound) vs when they don't (CPU-bound)
  - `concurrent.futures.ThreadPoolExecutor`: managed thread pools
- **async/await** (the main event):
  - The event loop: one thread, many tasks
  - `async def` and `await`: writing coroutines
  - `asyncio.run()`: starting the event loop
  - `asyncio.gather()`: running multiple tasks concurrently
  - Async context managers: `async with`
  - Async iteration: `async for`
  - Typed async functions:
    ```python
    async def fetch_user(user_id: int) -> User:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"/users/{user_id}")
            return User.model_validate(response.json())
    ```
- **When to use what**:
  - I/O-bound (API calls, DB queries, file reads) → `async/await`
  - CPU-bound (data processing, calculations) → `multiprocessing` (awareness)
  - Simple parallelism → `ThreadPoolExecutor`
- **Testing async code**: `pytest-asyncio`, `@pytest.mark.asyncio`
- **Putting async to work → FastAPI introduction**:
  - Why FastAPI: types + async + testing unified in one framework
  - One route with Pydantic request/response models
  - `async def` endpoints (the reason you learned async)
  - Testing with `TestClient` — one integration test
  - *Full API development (middleware, dependency injection, database integration, deployment) comes in later parts of the book*
- **Why this matters for Part 5**: FastAPI is async, agent SDKs are async, MCP is async

**Student does**: Specifies async interfaces (typed coroutines + tests) → prompts AI to implement concurrent logic → builds a minimal FastAPI endpoint → verifies async behavior
**AI role**: Generates async implementations, event loop patterns, FastAPI route; student designs concurrency architecture and verifies

---

### Phase 8: Production Systems (Harden & Secure)

> Student role: **Shipping Engineer** — "I can harden, secure, and ship production-grade software"

Students already understand version control and CI concepts from Part 2 — they learned Git workflows, branching, PRs, and reviewing AI-generated code. Phase 8 builds on that foundation by teaching the professional engineering practices underneath: automated CI pipelines, structured logging, security auditing, and the complete verification pyramid.

#### Chapter 24: CI/CD, Git Workflows, and Observability

**Goal**: Student can automate verification and monitor systems.

- Git as persistent memory (branching, committing, reverting)
- GitHub Actions: automated CI pipeline
- The verification pyramid: format → lint → type check → test → security
- Structured logging (JSON format) using classes from Phase 5
- Health check endpoints
- Error tracking basics
- The complete professional workflow: branch → code → test → CI → review → merge

**Student does**: Designs CI pipeline stages + observability requirements → prompts AI to generate configs → verifies pipeline is green
**AI role**: Generates CI YAML, logging setup, monitoring configs; student architects the verification pipeline

---

#### Chapter 25: Security Review for AI-Generated Code

**Goal**: Student can systematically review AI-generated code for security vulnerabilities.

- **Why AI code needs security review**: AI optimizes for functionality, not security
- **The OWASP Top 10 for AI-generated Python**:
  - SQL injection (parameterized queries vs string formatting)
  - Command injection (`subprocess` with `shell=True`)
  - Path traversal (unsanitized file paths)
  - Insecure deserialization (`pickle` from untrusted sources)
  - Hardcoded secrets (API keys, passwords in source)
- **Security review checklist for AI output**:
  - Input validation at every boundary
  - Output sanitization
  - Authentication and authorization checks
  - Dependency audit (`pip audit`, known CVEs)
  - Environment variable management (`.env`, secrets)
- **Common AI security mistakes**:
  - Using `eval()` or `exec()` on user input
  - Overly permissive CORS settings
  - Missing rate limiting
  - Logging sensitive data
- **The security-first TDG addition**: adding security tests to the TDG cycle
- **Tools**: `bandit` (Python security linter), `pip audit`, `safety`
- Practical exercise: review an AI-generated FastAPI endpoint for security issues

**Student does**: Reviews AI-generated code against security checklist → writes security-focused tests → identifies and fixes vulnerabilities
**AI role**: Generates code with realistic security issues; student acts as security reviewer

---

### Phase 9: Capstone (Prove)

> Student role: **Architect** — "I can design and build complete systems"

#### Chapter 26: When Not to Use AI

**Goal**: Student develops judgment about when AI-assisted coding helps and when it hurts.

- **The AI assistance spectrum**: fully manual → AI-assisted → AI-generated
- **When manual is better**:
  - Trivial changes (renaming, one-line fixes)
  - Security-critical code (crypto, auth)
  - Performance-critical hot paths
  - Code you need to deeply understand (learning new concepts)
- **When AI excels**:
  - Boilerplate generation (CRUD, serialization)
  - Test case generation from specifications
  - Refactoring with clear patterns
  - Exploring unfamiliar APIs
- **The judgment framework**: effort to specify + verify vs effort to write manually
- **AI dependency warning signs**:
  - Can't code without AI assistance
  - Accepting AI output without understanding it
  - Prompting is slower than typing
  - Using AI for 5-line functions
- **Building AI-independent strength**: the "no AI day" practice
- **The professional balance**: when to prompt, when to type, when to read docs

**Student does**: Evaluates a set of coding tasks and decides which benefit from AI and which don't → explains reasoning → practices manual implementation for selected tasks
**AI role**: Presents scenarios; student exercises judgment about when to use AI

---

#### Chapter 27: QuizForge Capstone — AI-Powered Quiz Generator

**Goal**: Student builds a complete, production-grade application **from scratch** using everything learned — proving they can drive the full SDD/TDG cycle independently, without the SmartNotes scaffolding.

**Project**: **QuizForge** — an AI-Powered Quiz Generator. Feed it any text (notes, chapters, documentation) and it generates quiz questions, tracks scores over time, identifies weak topics, and adapts difficulty automatically. This is a **new project**, not a continuation of SmartNotes. The student starts from a blank specification.

| Component | Technologies | Chapters Applied |
|---|---|---|
| Problem Specification | Markdown, requirements, SDD workflow | Ch 3, 4, 14 |
| Data Models | `Question`, `Quiz`, `Score`, `Topic` — dataclasses + Pydantic | Ch 7, 15-16 |
| Object Design | `QuestionBank`, `QuizEngine`, `ScoreTracker`, `DifficultyAdapter` | Ch 16-18 |
| Data Layer | PostgreSQL — questions + performance history | Ch 19 |
| Business Logic | Typed functions, difficulty adaptation, scoring | Ch 8, 21 |
| Concurrency | async/await for AI SDK calls | Ch 23 |
| CLI Interface | `quizforge` CLI tool | Ch 22 |
| API Service | FastAPI (async) | Ch 23 |
| AI Integration | OpenAI Agents SDK or Anthropic SDK — question generation, quality scoring | Ch 14, 23 |
| Test Suite | pytest (80%+ coverage) | Ch 10, 14 |
| CI Pipeline | GitHub Actions | Ch 24 |
| Security Review | OWASP checklist, `bandit` | Ch 25 |
| Observability | Structured logging | Ch 24 |

**Key difference from SmartNotes**: Nobody tells the student what to build in each step. They receive the project requirements and drive the entire cycle — research, specification, types, tests, generation, verification, debugging, iteration — from start to finish.

**Deliverables**:
- SDD specification documents (Markdown)
- Type definitions (dataclasses + Pydantic + classes)
- Object model diagram (class relationships)
- Test suites (passing, 80%+ coverage)
- Implementation (AI-generated, student-reviewed)
- Security audit report (student-conducted)
- CI pipeline (green)
- Deployed QuizForge application with CLI + API + AI features
- **Two portfolio-grade projects**: SmartNotes (guided, Phases 1-8) + QuizForge (independent, Phase 9)

---

## 8. The Student Journey Summary

```
Ch 1-4:    READER         → "I can understand what AI generates"
Ch 5-8:    SPECIFIER      → "I can tell AI precisely what to build"
Ch 9-12:   VERIFIER       → "I can define correct and prove it"
Ch 13-14:  DEBUGGER       → "I can diagnose failures and drive TDG without scaffolding"
Ch 15-18:  MODELER        → "I can design systems for AI to implement"
Ch 19-21:  PRACTITIONER   → "I can specify and verify production-grade Python features"
Ch 22-23:  TOOL BUILDER   → "I can build and ship production tools and async APIs"
Ch 24-25:  SHIP ENGINEER  → "I can harden, secure, and ship production-grade software"
Ch 26-27:  ARCHITECT      → "I can architect and deliver complete, production-grade systems"
```

---

## 9. OOP Integration Strategy

### Why OOP Comes After Testing AND Debugging (Phase 5, Not Phase 2)

Traditional books teach OOP early because it's "fundamental." We delay it because:

1. **Students can't verify OOP designs without testing skills** — testing classes is harder than testing functions
2. **Students can't debug OOP errors without debugging skills** — class-related bugs are harder to trace
3. **Dataclasses provide 80% of the value** — students model domains effectively in Phase 2 without full OOP
4. **OOP design decisions require judgment** — inheritance vs composition choices need experience
5. **AI generates OOP code constantly** — by Phase 5, students have read enough AI output to recognize patterns

### The OOP Progression

```
Ch 7  (Phase 2): Dataclasses + Pydantic     → Data modeling (simple objects)
Ch 12 (Phase 3): Exception hierarchies       → First taste of class inheritance
Ch 15 (Phase 5): Classes and instances       → Full class syntax, behavior
Ch 16 (Phase 5): Inheritance & composition   → Design relationships
Ch 17 (Phase 5): Special methods             → Python object model depth
Ch 18 (Phase 5): Decorators & patterns       → Advanced OOP in practice
Ch 19 (Phase 6): Repository pattern          → OOP applied to data access (PostgreSQL intro)
Ch 23 (Phase 7): FastAPI dependency injection → OOP applied to async services (FastAPI intro)
```

### What We Keep from Lutz (Deep Python Knowledge)

| Lutz Topic | Our Treatment | Why |
|---|---|---|
| Classes and instances | Full coverage (Ch 15) | Core to Python |
| `__init__`, `self` | Full coverage (Ch 15) | Can't use classes without it |
| Inheritance | Full coverage with design guidance (Ch 16) | Important but needs guard rails |
| Composition | Emphasized as preferred default (Ch 16) | Better design in AI era |
| Operator overloading | Full coverage (Ch 17) | Makes objects Pythonic |
| Iteration protocol | Full coverage (Ch 17) | Essential for Python fluency |
| Decorators | Full coverage (Ch 18) | Used everywhere in modern Python |
| Properties | Full coverage (Ch 18) | Clean attribute management |
| Protocols | Full coverage (Ch 18) | Modern alternative to ABC |
| MRO | Awareness (Ch 16) | Understand, rarely need to design with |
| Metaclasses | Reference only (Ch 18) | Framework-level, not application-level |
| Descriptors | Awareness (Ch 18) | Properties cover 95% of use cases |

### What We Reframe from Lutz

| Lutz Approach | Our Approach | Why |
|---|---|---|
| OOP as organizing principle | OOP as domain modeling | AI era needs precise models |
| Inheritance-first design | Composition-first design | Less fragile, more testable |
| Dynamic typing celebrated | Static typing enforced | Pyright strict, always |
| Untyped examples | Every example fully typed | No exceptions |
| Theory then practice | Test then understand | Verification-first |
| Classes before testing | Testing before classes | Can't verify what you can't test |

---

## 10. Design Principles for All Chapters

### Every Chapter Must Have

1. **Typed Python only** — no untyped code ever shown
2. **Reading before writing** — students encounter features in AI output before writing them
3. **Tests as verification** — every concept has a testable exercise
4. **Real-world context** — features introduced because a real task demands them, never in isolation
5. **TDG exercises** — at least one spec → test → generate → verify cycle per chapter
6. **Dual-track callouts** — "If you're new" and "If you've coded before" notes
7. **Syntax Card** — half-page reference at the end of every chapter (see Section 14)

### Beginner Accessibility Rules

Every example, exercise, and analogy must match the student's knowledge level at that chapter. These rules prevent the mistake of using professional tools in exercises before students have learned them:

1. **Match examples to student knowledge** — never reference tools, syntax, commands, or frameworks the student hasn't learned yet. If the student doesn't know pytest, don't put pytest in a PRIMM-AI+ exercise.
2. **Ground exercises in the lesson narrative** — if the lesson tells a story (e.g., James's startup), the PRIMM-AI+ exercises should reference characters and situations from that story, not introduce disconnected scenarios.
3. **Never leave predictions unresolved** — every Predict section must have a collapsible answer key (`<details>` block) so students get closure.
4. **Avoid run-on analogies** — if an analogy exceeds 3 lines, break it into a bulleted list. One idea per sentence.
5. **Add `:::tip` blocks for unfamiliar syntax** — when showing code syntax students haven't learned yet (e.g., Makefile syntax in Chapter 31), wrap it in a tip block explaining "you'll learn this later; focus on the concept, not the syntax."
6. **"From Principle to Axiom" pattern** — when a chapter references concepts from earlier chapters, use a proper Docusaurus link, a concrete callback to a memorable example from that earlier chapter, and a comparison table showing what the earlier chapter taught vs what this chapter adds. Never just say "as we saw in Chapter N" without a link and specific reference.

### Iterative Evaluation Pattern

Every chapter and lesson should be evaluated using the iterative refinement cycle before publication:

1. **Evaluate** — Rate the lesson/chapter out of 10, identifying specific issues with line numbers
2. **Fix** — Apply targeted fixes to each identified issue
3. **Re-evaluate** — Rate again after fixes; if below 8.5/10, repeat the cycle
4. **Target** — A lesson is publication-ready at 8.5/10 or above

This pattern is documented in `chapter-writing-methodology.md` (Section 6) and should be applied to every lesson before merge.

### Every Code Example Must

1. Have full type annotations
2. Be runnable (no pseudo-code)
3. Have an associated test
4. Follow the project structure conventions
5. Use the discipline stack (ruff, pyright, pytest compatible)

---

## 11. Reference Materials

| Resource | Purpose |
|---|---|
| *Python Crash Course* (Matthes, 2023) | Reference for traditional Python feature coverage (beginner-friendly) |
| *Learning Python* (Lutz, 2025) | Reference for deep OOP, object model, advanced patterns (1,270 pages) |
| *The Lindy-AI Software Manifesto* v2.0 | Philosophical foundation and axioms |
| Chapter 31: Ten Axioms of Agentic Development | Bridge chapter connecting principles to practice (early in Part 4). Includes PRIMM-AI+ Track B integration with conceptual exercises, answer keys, Error Taxonomy, Verification Ladder, and mastery gates. |
| `chapter-writing-methodology.md` v3.0 | Writing methodology for all chapters — Track A/B, answer keys, beginner accessibility, iterative evaluation |
| Python 3.12+ documentation | Language reference |
| Pyright documentation | Type checking rules |
| pytest documentation | Testing patterns |

---

## 12. Complete Lutz Coverage Map

For tracking that all essential Learning Python content is covered:

| Lutz Part | Lutz Chapters | Our Coverage | Notes |
|---|---|---|---|
| **I: Getting Started** | Ch 1-3 | Ch 1-3 | Reframed: PRIMM-AI+ (3 lessons) + workbench + reading |
| **II: Objects & Operations** | Ch 4-9 | Ch 5-6 | Reframed: typed collections |
| **III: Statements & Syntax** | Ch 10-15 | Ch 9 | Reframed: through testing |
| **IV: Functions & Generators** | Ch 16-21 | Ch 8, 21 | Reframed: contracts + generators |
| **V: Modules & Packages** | Ch 22-25 | Ch 20 | Reframed: project organization |
| **VI: Classes & OOP** | Ch 26-32 | **Ch 15-18** | Full coverage, reframed |
| **VII: Exceptions** | Ch 33-36 | Ch 12 | Reframed: typed error handling |
| **VIII: Advanced** | Ch 37-40 | Ch 18, 19 | Selective: decorators yes, metaclasses reference |

---

## 13. Exercise Strategy

### The 5 Exercise Types

Every chapter draws from these 5 exercise types in varying proportions:

| Type | Name | What Student Gets | What Student Does | Skill Trained |
|---|---|---|---|---|
| 1 | **Read & Predict** | AI-generated code | Predict output, trace execution, explain in plain English | Reading comprehension |
| 2 | **Spot the Bug** | AI-generated code with intentional errors | Find type errors, logic bugs, edge case failures | Verification, code review |
| 3 | **Write the Test** | Problem description + function/class signature | Write pytest tests that specify correct behavior | Specification, testing |
| 4 | **TDG Cycle** | Problem statement in plain English | Define types → write tests → prompt AI → verify → iterate | Full AI-era workflow |
| 5 | **Build It** | A spec with tests already written (provided) | Specify approach → prompt AI to implement → review, debug, and iterate until all tests pass | Full TDG ownership, end-to-end delivery |

### Exercise Mix by Phase

The proportion of each exercise type shifts across phases, tracking the writing gradient:

```
                           Type 1      Type 2      Type 3      Type 4      Type 5
                           Read &      Spot the    Write the   TDG         Build It
                           Predict     Bug         Test        Cycle       (Full TDG)
Phase 1 (Reader)         : ████████    ██          ░           ░           ░
Phase 2 (Specifier)      : ████        ████        ████        ██          ░
Phase 3 (Verifier)       : ██          ██          ████████    ████        ██
Phase 4 (Debugger)       : ██          ████████    ████        ████        ██
Phase 5 (Modeler)        : ██          ██          ████        ████        ████
Phase 6 (Practitioner)   : █           █           ██          ████        ██████
Phase 7 (Tool Builder)   : █           █           ██          ██████      ████
Phase 8 (Ship Engineer)  : █           ██          ██          ████        ██████
Phase 9 (Architect)      : Full capstone project combining all types
```

### Per-Chapter Exercise Structure

Every chapter follows this consistent structure:

```
INLINE EXERCISES (inside lesson content, between sections)
├── Read & Predict (2-3 per chapter)
│   Quick 1-2 minute exercises embedded in the text
│   Format: "Before reading on, predict what this outputs..."
│   Purpose: Active reading, prevent passive consumption
│
└── Spot the Bug (1-2 per chapter)
    AI-generated code with planted errors
    Format: "This AI wrote this code. What's wrong?"
    Purpose: Train critical reading of AI output

END-OF-CHAPTER EXERCISES (after lesson content)
├── Write the Test (2-3 exercises, graded difficulty)
│   Format: Given a specification → write pytest tests
│   Levels: Starter → Intermediate → Challenge
│   Purpose: Specification practice
│
├── TDG Challenge (1 per chapter — CORE exercise)
│   Full cycle: spec → types → tests → prompt AI → verify → iterate
│   This is the signature exercise of the course
│   Purpose: Practice the complete AI-era workflow
│
└── Build It (1 per chapter, starting Phase 3)
    Format: Tests are provided → student drives full TDG cycle to make them pass
    Purpose: Prove you can own the entire specify-prompt-verify loop end-to-end
    Rule: Student must understand every line AI generates — if you can't explain it, iterate
```

### Exercise Quantity Per Chapter

| Chapter Phase | Inline (Read & Predict + Spot Bug) | Write the Test | TDG Challenge | Build It | Total |
|---|---|---|---|---|---|
| Phase 1 (Ch 1-4) | 5 | 1 | 1 | 0 | ~7 |
| Phase 2 (Ch 5-8) | 4 | 2-3 | 1 | 0 | ~8 |
| Phase 3 (Ch 9-12) | 3 | 3 | 1 | 1 | ~8 |
| Phase 4 (Ch 13-14) | 3 | 3 | 1 | 1 | ~8 |
| Phase 5 (Ch 15-18) | 3 | 2 | 1 | 1-2 | ~8 |
| Phase 6 (Ch 19-21) | 2 | 2 | 1 | 2 | ~7 |
| Phase 7 (Ch 22-23) | 2 | 2 | 1-2 | 1 | ~7 |
| Phase 8 (Ch 24-25) | 2 | 2 | 1 | 1-2 | ~7 |
| Phase 9 (Ch 26-27) | — | — | Full project | Full project | 1 large |

**Total across course**: ~200-210 exercises

### The "Build It" Rule

Starting Phase 3, every chapter includes at least one exercise where **the student owns the entire TDG cycle end-to-end**. Tests are provided. The student must drive the full loop: analyze what the tests require → specify the approach → prompt AI effectively → review every line of AI output → iterate until all tests pass.

**Why this matters**: This proves the student can **own delivery** — the real AI-era skill. It's not about typing code manually; it's about understanding what the tests demand, prompting AI precisely, and verifying that the output is correct. If the student can't explain every line AI generated, they iterate until they can.

**The progression**:
- Phase 3-4: Drive TDG for a small function (10-20 lines of AI output to review)
- Phase 5: Drive TDG for a class with methods (30-50 lines, design decisions matter)
- Phase 6: Drive TDG for a module with multiple components (50-100 lines, architecture matters)
- Phase 7-8: Drive TDG for a system component (100+ lines, orchestrating multiple AI prompts)

### The TDG Challenge Format

Every TDG Challenge follows this exact template:

```
## TDG Challenge: [Name]

### Problem Statement
[2-3 sentences describing what to build in plain English]

### Step 1: Specify (Markdown)
Write a brief specification describing the expected behavior.

### Step 2: Define Types
Create dataclasses/Pydantic models for the domain.

### Step 3: Write Tests
Write pytest tests that fully specify correct behavior.
Include: happy path, edge cases, error cases.

### Step 4: Generate
Prompt AI with your types and tests. Ask it to implement.

### Step 5: Verify
Run: uv run ruff check . && uv run pyright && uv run pytest
If anything fails → iterate (tighten spec, fix tests, re-prompt).

### Step 6: Review
Read the AI-generated code. Can you explain every line?
If not → that's your next learning target.
```

### How Exercises Connect Across Chapters

Exercises build on each other. Later chapters reference and extend earlier work:

```
Ch 7:  Define a Note dataclass              → TDG: build note parser
Ch 10: Write comprehensive tests for Note   → TDG: test edge cases
Ch 13: Debug AI-generated Note code         → Debug: find and fix realistic bugs
Ch 14: Full TDG cycle for Note features     → TDG Mastery: independent specify-verify loop
Ch 15: Convert Note to a full class         → BUILD IT (TDG): add behavior (tags, links)
Ch 16: Add inheritance (SourceNote, etc.)   → BUILD IT (TDG): design note hierarchy
Ch 17: Add __repr__, __eq__, __iter__       → BUILD IT (TDG): make notes Pythonic
Ch 19: Store Notes in PostgreSQL             → TDG: file processing + database persistence
Ch 23: Expose Notes via async FastAPI       → TDG: async service with API endpoint
Ch 25: Security review of SmartNotes        → Review: audit for vulnerabilities
Ch 27: Full SmartNotes Knowledge Base       → CAPSTONE (full TDG orchestration)
```

This creates a **running project thread** that students evolve across the course.

---

## 14. Syntax Card Strategy

### The Problem

Traditional books teach syntax through repetition. Our course teaches through reading and testing. But students still need a quick reference when they think: "What was the syntax for dict comprehension again?"

### The Solution: Per-Chapter Syntax Cards (Not an Appendix)

**No big appendix.** Instead, every chapter ends with a **half-page Syntax Card** — a compact, typed reference of every new syntax element introduced in that chapter.

### Why Per-Chapter Beats Appendix

| Appendix | Per-Chapter Syntax Card |
|---|---|
| Nobody reads appendices | Students naturally flip to the chapter they remember |
| Disconnected from context | Right where you learned it |
| Adds 30-40 pages of bulk | Half a page per chapter (~12 pages total) |
| Feels like "old way" manual | Feels like a useful cheat sheet |

### Placement in Chapter Structure

```
CHAPTER N: [Title]
├── Lesson content
├── Inline exercises (Read & Predict, Spot the Bug)
├── End-of-chapter exercises (Write Test, TDG Challenge, Build It)
│
└── 📋 SYNTAX CARD           ← Last section, always
    Half-page, no prose
    Every new syntax element from this chapter
    Format: typed code example + one-line comment
```

### Syntax Card Rules

1. **Only new syntax** — don't repeat what was introduced in earlier chapters
2. **Always typed** — every example has type annotations
3. **Code only** — no prose explanations, just `code + # comment`
4. **Runnable** — every snippet can be pasted and executed
5. **Half-page max** — if it's longer, the chapter introduced too much

### Example: Chapter 6 Syntax Card

```python
# Ch 6 Syntax Card: Collections

# List — ordered, mutable, typed
names: list[str] = ["Zia", "Ali", "Sara"]
names.append("Omar")              # Add to end
names[0]                          # Index access → "Zia"
names[1:3]                        # Slice → ["Ali", "Sara"]
len(names)                        # Length → 4
"Zia" in names                    # Membership → True

# Dict — key-value, mutable, typed
ages: dict[str, int] = {"Zia": 30, "Ali": 25}
ages["Zia"]                       # Key access → 30
ages.get("Unknown", 0)            # Safe access → 0
ages.keys()                       # All keys
ages.items()                      # Key-value pairs

# Tuple — ordered, immutable, typed
point: tuple[int, int] = (10, 20)
x, y = point                     # Unpacking

# Set — unique, unordered, typed
tags: set[str] = {"python", "ai"}
tags.add("typed")                 # Add element
tags | {"new"}                    # Union
```

### Example: Chapter 15 Syntax Card

```python
# Ch 15 Syntax Card: Classes and Instances

# Class definition with typed attributes
class BankAccount:
    def __init__(self, owner: str, balance: int = 0) -> None:
        self.owner = owner        # Instance attribute
        self.balance = balance

    def deposit(self, amount: int) -> None:  # Method
        self.balance += amount

# Instance creation
account = BankAccount("Zia", 1000)
account.deposit(500)              # Method call
account.balance                   # Attribute access → 1500

# Class attribute (shared across all instances)
class Counter:
    count: int = 0                # Class attribute
    def __init__(self) -> None:
        Counter.count += 1        # Modify class attribute
```

### The Combined PDF

All 27 Syntax Cards are automatically compiled into a single **"Python Quick Reference" downloadable PDF** (~14 pages). This is generated from the book content — no separate authoring needed.

Students get:
- **In the book**: Per-chapter cards right where they need them
- **As download**: One combined PDF they can print or keep on their phone

---

## 15. The SmartNotes Project — One Running Project Across All Phases

### Why One Project, Not Nine

Students don't build nine throwaway projects. They build **one real application** — **SmartNotes**, a Personal AI Knowledge Base — that grows with them across all 9 phases. Each phase adds a layer that exercises that phase's core skills.

**Why SmartNotes?**:
1. **Students USE it while learning** — they capture their own notes, code snippets, and learnings as they go through the course
2. **AI integration is natural** — semantic search, auto-tagging, and summarization are genuine AI features (not bolted on)
3. **It shows thinking to interviewers** — a portfolio project that demonstrates typed Python, testing, OOP design, async APIs, and AI integration
4. **Every phase has a real deliverable** — not "exercise 3.2" but "my knowledge base now has search"

### Phase-by-Phase SmartNotes Evolution

#### Phase 1: Read & Understand (Ch 1-4) — "SmartNotes v0.1: Explore"

**Student role**: Reader — understand what AI generates

**What students get**: A pre-built SmartNotes prototype (AI-generated, ~200 lines). Students DON'T build it yet. They:
- Read the code: understand `Note` dataclass, `add_note()`, `search_notes()`
- Predict behavior: "What does this function return for this input?"
- Trace execution: follow `uv run smartnotes add "My first note" --tags python`
- Verify with tests: run `uv run pytest` and read what each test checks

**Deliverable**: An annotated code walkthrough — student adds comments explaining every function

---

#### Phase 2: Specify & Model (Ch 5-8) — "SmartNotes v0.2: Type It"

**Student role**: Specifier — define the domain precisely

**What students build**:
- `Note` dataclass with typed fields: `title: str`, `body: str`, `tags: list[str]`, `created_at: datetime`
- `NoteCollection` with typed methods: `add()`, `search()`, `filter_by_tag()`
- Pydantic models for input validation: `NoteCreate`, `NoteUpdate`
- Type-safe configuration: `SmartNotesConfig` dataclass

**Key learning**: The types ARE the specification. Pyright enforces the contract before a single test is written.

**Deliverable**: Typed data model that passes `pyright --strict` — zero implementation yet, just structure

---

#### Phase 3: Test & Verify (Ch 9-12) — "SmartNotes v0.3: Prove It"

**Student role**: Verifier — prove correctness before implementation

**What students build**:
- Complete test suite for `NoteCollection` (happy path + edge cases)
- Tests for search: exact match, partial match, no results, empty collection
- Tests for tags: add tag, remove tag, filter by multiple tags
- AI-generated implementation verified against student-written tests
- Error handling: `NoteNotFoundError`, `DuplicateNoteError`

**Key learning**: Tests written FIRST become the specification that AI implements against. This is TDG in practice.

**Deliverable**: 30+ passing tests with 90%+ coverage of the core domain

---

#### Phase 4: Debug & Master (Ch 13-14) — "SmartNotes v0.35: Debug It"

**Student role**: Debugger — systematically diagnose and fix AI-generated code

**What students do**:
- Debug planted bugs in SmartNotes code (realistic AI mistakes)
- Run the full TDG cycle independently for a new SmartNotes feature
- Practice the debugging loop: reproduce → isolate → identify → fix → verify
- Drive a complete TDG cycle from vague spec to working feature with no hand-holding

**Key learning**: When AI output fails, you don't re-prompt blindly — you debug systematically. And you can drive TDG independently without scaffolding.

**Deliverable**: New SmartNotes feature built entirely through independent TDG, with a debugging journal documenting bugs found and fixed

---

#### Phase 5: Design & Model (Ch 15-18) — "SmartNotes v0.4: Architect"

**Student role**: Modeler — design objects that represent real concepts

**What students build**:
- Convert `Note` dataclass → full `Note` class with behavior (`.summarize()`, `.add_tag()`, `.link_to()`)
- Note hierarchy: `TextNote`, `CodeNote`, `LinkNote` (inheritance with composition)
- `Repository` Protocol for storage abstraction (in-memory for now)
- Special methods: `Note.__repr__()`, `Note.__eq__()`, `NoteCollection.__iter__()`
- Decorators: `@log_action` for tracking changes, `@validate_input`

**Key learning**: OOP is about modeling real domains, not abstract theory. SmartNotes notes ARE the domain.

**Deliverable**: Refactored SmartNotes with proper object model, all previous tests still passing

---

#### Phase 6: Build & Persist (Ch 19-21) — "SmartNotes v0.5: Store It"

**Student role**: Practitioner — spec real-world features via TDG

**What students build**:
- File-based export: save notes as Markdown files, JSON backup
- PostgreSQL persistence: `NoteRepository` with SQL storage (repository pattern)
- Import/export: read notes from Markdown files, CSV, JSON
- Modular architecture: `smartnotes/models/`, `smartnotes/storage/`, `smartnotes/export/`
- Data transformations: filter, sort, group notes by date/tag/type

**Key learning**: Real applications persist data. The `Repository` Protocol from Phase 4 now gets a real PostgreSQL implementation.

**Deliverable**: SmartNotes that persists to PostgreSQL, imports/exports files, organized as a proper Python package

---

#### Phase 7: CLI & Async (Ch 22-23) — "SmartNotes v0.6: Tool It"

**Student role**: Tool Builder — build production CLI tools and async programs

**What students build**:
- `smartnotes` CLI tool: `smartnotes add`, `smartnotes search`, `smartnotes export` (using typer)
- Async foundations: async/await for non-blocking I/O
- FastAPI async API: `POST /notes`, `GET /notes/search?q=`, `GET /notes/{id}`
- Async AI integration: semantic search using embeddings, auto-summarization

**Key learning**: CLI tools follow Unix philosophy. Async enables non-blocking AI calls. FastAPI unifies types + async + testing.

**Deliverable**: SmartNotes with CLI + REST API, async AI features working

---

#### Phase 8: Ship & Secure (Ch 24-25) — "SmartNotes v0.8: Harden It"

**Student role**: Shipping Engineer — ship secure, tested, production-grade software

**What students build**:
- CI pipeline: GitHub Actions running format → lint → type check → test on every push
- Structured logging and health check endpoint
- Security audit: review SmartNotes for OWASP vulnerabilities, run `bandit`
- Security-focused tests: SQL injection prevention, input validation, auth checks

**Key learning**: Shipping means CI + security + observability. Production software is verified, monitored, and secure.

**Deliverable**: SmartNotes with CI pipeline, security audit report — all green

---

#### Phase 9: Capstone — Prove (Ch 26-27) — "QuizForge: Built From Scratch"

**Student role**: Architect — design and build complete systems independently

**What students build**:
- Judgment about when to use AI vs write manually (Ch 26)
- **QuizForge** — a brand-new AI-Powered Quiz Generator, built entirely from scratch without SmartNotes scaffolding (Ch 27)
- Full SDD/TDG cycle driven independently: requirements → specification → types → tests → generation → verification → debugging → iteration
- `quizforge` CLI tool + FastAPI async API + AI-powered question generation via OpenAI Agents SDK or Anthropic SDK
- PostgreSQL persistence, 80%+ test coverage, CI pipeline, security audit

**Deliverable**: Production-grade QuizForge application — plus SmartNotes from Phases 1-8 — giving the student two portfolio-ready projects demonstrating every skill in the course

### The SmartNotes Stack (Phases 1-8)

```
smartnotes/
├── pyproject.toml          # uv project (Ch 2)
├── src/smartnotes/
│   ├── models/             # Note, NoteCollection, types (Ch 7, 15-17)
│   ├── storage/            # Repository protocol + PostgreSQL impl (Ch 18, 19)
│   ├── search/             # AI-powered semantic search (Ch 14, 23)
│   ├── export/             # Markdown, JSON, CSV (Ch 19)
│   ├── api/                # FastAPI routes (Ch 23)
│   └── cli/                # Typer CLI (Ch 22)
├── tests/                  # pytest suite, 80%+ coverage (Ch 10, 14)
├── .github/workflows/      # CI pipeline (Ch 24)
├── security/               # Security audit report (Ch 25)
└── README.md               # Project documentation
```

### The QuizForge Stack (Phase 9 — Built From Scratch)

```
quizforge/
├── pyproject.toml          # uv project
├── src/quizforge/
│   ├── models/             # Question, Quiz, Score, Topic
│   ├── engine/             # QuizEngine, DifficultyAdapter
│   ├── bank/               # QuestionBank, ScoreTracker
│   ├── ai/                 # OpenAI Agents SDK or Anthropic SDK — question generation, quality scoring
│   ├── storage/            # PostgreSQL — questions + performance history
│   ├── api/                # FastAPI routes
│   └── cli/                # quizforge CLI tool
├── tests/                  # pytest suite, 80%+ coverage
├── .github/workflows/      # CI pipeline
├── security/               # Security audit report
└── README.md               # Project documentation
```

### Why This Works

| Concern | How the Two-Project Approach Addresses It |
|---|---|
| "Exercises feel disconnected" | Phases 1-8: every exercise adds to SmartNotes |
| "I never finish anything" | Each phase has a working, shippable version |
| "Can I do it alone?" | Phase 9: QuizForge from scratch proves independence |
| "Portfolio is empty" | Two polished projects > nine toy exercises |
| "AI features feel bolted on" | Both projects have AI as core feature |
| "OOP feels abstract" | Notes, tags, questions, quizzes ARE the domain objects |
| "Testing feels pointless" | Tests protect YOUR knowledge base from regressions |
| "Security feels theoretical" | Students audit their own code for real vulnerabilities |
| "I'm too dependent on AI" | Ch 26 explicitly teaches when NOT to use AI |

---

## 16. Open Questions

- [x] ~~Python Crash Course Bridge chapter?~~ → Resolved: No. Dual-track callouts within chapters are sufficient. No extra chapter needed.
- [x] ~~Integration with the broader Agent Factory curriculum (Parts 1-6)?~~ → Resolved: Ch 31 (Ten Axioms) bridges Part 3 into this Python course; course output (typed Python + testing + OOP) feeds directly into Part 5 (building agents). No extra integration chapter needed.
- [x] ~~Should metaclasses get a dedicated advanced appendix?~~ → Resolved: No. Reference-only coverage in Ch 18 is sufficient. Metaclasses are for framework authors, not our audience.
- [x] ~~Specific project designs for each phase (Section 15)?~~ → Resolved: "SmartNotes" Personal AI Knowledge Base — one running project across all 9 phases
- [x] ~~Concurrency chapter?~~ → Resolved: Yes, Ch 23 (async/await + threading + FastAPI intro)
- [x] ~~Exercises format: inline vs separate exercise packs?~~ → Resolved: inline + end-of-chapter (Section 13)
- [x] ~~Python Quick Reference appendix?~~ → Resolved: per-chapter Syntax Cards + combined PDF (Section 14)
- [x] ~~Capstone for beginners vs experienced?~~ → Resolved: no beginners by capstone; per-phase projects instead (Section 15)
- [x] ~~Debugging checkpoint between testing and OOP?~~ → Resolved: Yes, Phase 4 (Ch 13-14) — Debugging + TDG Mastery
- [x] ~~Security chapter for AI-generated code?~~ → Resolved: Yes, Ch 25. OWASP-focused review of AI output, security testing, `bandit` tooling.
- [x] ~~"When Not to Use AI" chapter?~~ → Resolved: Yes, Ch 26. Judgment about AI assistance spectrum, preventing AI dependency.
- [x] ~~Split Production Systems phase?~~ → Resolved: Yes. Phase 7 (CLI + Concurrency) and Phase 8 (CI/CD + Security) — separate building from shipping.
- [x] ~~Axioms at start vs end?~~ → Resolved: Keep near start. Chapter 31 (Ten Axioms) already exists and serves as the bridge from Part 3 into Part 4 (after PRIMM-AI+). No duplicate needed.
- [x] ~~PRIMM-AI+ exercise style for pre-coding chapters?~~ → Resolved: Track B (conceptual reasoning with plain-English scenarios). Track A (code exercises) starts when students have the discipline stack (Ch 33+). PR #853 proved that code-based exercises in Chapter 31 fail because students don't know the tools yet.
- [x] ~~Answer keys in PRIMM-AI+ exercises?~~ → Resolved: Mandatory. Every Predict section gets a collapsible `<details>` answer key. Students must never be left guessing whether their prediction was correct.

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-02-17 | Initial plan based on collaborative discussion |
| 2.0 | 2026-02-17 | Added OOP Phase (Ch 12-15), expanded to 24 chapters, integrated Learning Python (Lutz) coverage, added modules chapter, OOP integration strategy, complete Lutz coverage map |
| 2.1 | 2026-02-17 | Added Exercise Strategy (Section 13): 5 exercise types, phase mix, per-chapter structure, TDG challenge template, cross-chapter exercise thread |
| 2.2 | 2026-02-17 | Added Syntax Card Strategy (Section 14): per-chapter half-page reference cards replacing traditional appendix, with combined downloadable PDF |
| 2.3 | 2026-02-17 | Added Per-Phase Projects direction (Section 15): each phase gets its own project, capstone beginner/experienced question resolved |
| 2.4 | 2026-02-17 | Added Concurrency chapter (Ch 21: async/await + threading), expanded to 25 chapters. Placed before FastAPI. Resolved Crash Course Bridge question (no). Added curriculum integration as open question. |
| 2.5 | 2026-02-17 | Designed "SmartNotes" Personal AI Knowledge Base as the running project across all 7 phases. Updated Section 15 with phase-by-phase deliverables. Updated exercise thread from Order domain to Note/SmartNotes domain. Updated capstone to reference SmartNotes. |
| 2.6 | 2026-02-17 | AI-first philosophy applied throughout entire plan. Steps 4-5 of learning progression now explicitly done WITH AI. Renamed "Writing Gradient" to "Specification Sophistication Gradient". All chapter "Student writes/reads" lines replaced with "Student does/AI role" format reflecting TDG workflow. Phase 5 role renamed from "Writer" to "Practitioner". Exercise Type 5 "Build It" reframed from "no AI" to "full TDG ownership". "Build It Rule" rewritten. Student Journey Summary updated. |
| 2.7 | 2026-02-20 | Folded SQL and FastAPI from standalone chapters into existing chapters per teacher directive. Ch 16 now includes PostgreSQL introduction (was separate Ch 18). Ch 20 (Concurrency) now includes FastAPI introduction (was separate Ch 22). Reduced from 25 to 23 chapters. Renumbered all cross-references: old Ch 19→18, 20→19, 21→20, 23→21, 24-25→22-23. Updated SmartNotes project phases, stack references, Syntax Cards count, exercise thread, and all section cross-references. Full SQL and FastAPI coverage deferred to later parts of the book. |
| 2.8 | 2026-02-24 | Major restructuring from 23 chapters/7 phases to 26 chapters/9 phases. Added Phase 4: Debugging + TDG Mastery (Ch 12-13) — debugging checkpoint between testing and OOP. Split old Phase 6 into Phase 7 (CLI + Concurrency) and Phase 8 (CI/CD + Security). Added Ch 24: Security Review for AI-Generated Code (OWASP, bandit, security-focused TDG). Added Ch 25: When Not to Use AI (judgment, AI dependency prevention). Old Ch 10 (TDG Mastery) replaced with Ch 10 (Iterating on AI Output) and moved full TDG mastery to new Ch 13 in Phase 4. Renumbered OOP chapters (12-15 → 14-17), real-world chapters (16-18 → 18-20), production chapters (19-21 → 21-23). Kept axioms at start (Ch 14 already exists) — no duplicate axioms chapter. Updated all cross-references. |
| 2.9 | 2026-02-24 | Aligned plan with Part 4 README changes. Updated workflow diagram to `Requirements → Types → Failing Tests → Generate → Verify & Iterate → Ship`. Added human/AI responsibility table showing who leads each step. Added Part 2 bridge acknowledgments to Phase 6 (file processing, PostgreSQL already covered in Part 2) and Phase 8 (Git workflows, CI concepts already covered in Part 2). |
| 2.10 | 2026-02-24 | Synchronized all phase titles, role quotes, Specification Sophistication Gradient, and Student Journey Summary with the published Part 4 README. Phase titles now match README: Phase 1 "Read & Explore", Phase 4 "Debug & Master", Phase 6 "Build", Phase 7 "Deploy", Phase 8 "Harden & Secure". All 9 role quotes now identical between plan and README. |
| 2.11 | 2026-03-04 | Added Claude Code + SDD emphasis throughout (Sections 1-3, 6-7). Chapter 5 as required prerequisite. INPUT/OUTPUT teaching model. |
| 2.12 | 2026-03-05 | Replaced Phase 9 SmartNotes capstone with QuizForge — an AI-Powered Quiz Generator built from scratch. SmartNotes now runs Phases 1-8 (guided); Phase 9 is QuizForge (independent). Added QuizForge stack diagram. Updated "Why This Works" table for two-project approach. Students finish with two portfolio-grade projects. |
| 2.13 | 2026-03-06 | Added Chapter 1: The PRIMM-AI Framework as the dedicated conceptual chapter. PRIMM-AI is now formally positioned above the Ten Axioms as the meta-learning framework ("PRIMM-AI is the operating system; the Axioms are the first application that runs on it"). Expanded from 26 to 27 chapters. Renumbered all chapters +1: old Ch 1-26 → Ch 2-27. Phase 1 now has 4 chapters (Ch 1-4): PRIMM-AI → Dev Environment → Reading Python → First TDG. Updated all cross-references: feature maps, OOP progression, exercise thread, SmartNotes phases, Lutz coverage map, Syntax Cards, open questions. PRIMM Recall Directive now references Ch 1 (PRIMM-AI) and Ch 3 (Reading Python). Book-level: Chapter 42 becomes PRIMM-AI; Ten Axioms shifts to Chapter 31. |
| 2.14 | 2026-03-08 | Upgraded PRIMM-AI → PRIMM-AI+ throughout. Chapter 1 now has 3 lessons: L1 (The PRIMM Framework — with [AI-FREE] Predict and confidence scoring), L2 (PRIMM-AI+: Your Learning Operating System — AI permissions table, AI-free checkpoints, mastery gates, verification ladder, confidence scoring, error taxonomy preview, chapter-end rubric preview, PRIMM-AI+ at a Glance), L3 (The Complete Teaching and Learning System — four embedded teaching methods, classroom vs solo mode, 5-step lesson architecture). Updated PRIMM Recall Directive callout to PRIMM-AI+ with [AI-FREE] and confidence scoring. Updated all cross-references. |
| 2.15 | 2026-03-09 | L3 lesson architecture corrected from 6 steps to 5 steps (one per PRIMM stage). Parsons Problems folded into Investigate step with a blockquote callout explaining placement. Replaced regional names (Amara→Sarah, Karachi→London) across Ch 42 for international accessibility. Added bold highlighting of key insight sentences across all 3 lessons. |
| 2.16 | 2026-03-15 | Aligned with chapter-writing-methodology v3.0. Added PRIMM-AI+ Track A/B distinction (Section 3): Track B (conceptual reasoning) for pre-coding chapters (Ch 31, Ch 42), Track A (code exercises) for Ch 33+. Added PRIMM-AI+ Structural Requirements (Section 3): mandatory answer keys, Error Taxonomy classification, mastery gates, confidence scoring, selective Verification Ladder. Added Beginner Accessibility Rules (Section 10): match examples to student knowledge, ground exercises in narrative, never leave predictions unresolved, avoid run-on analogies, add :::tip for unfamiliar syntax, "From Principle to Axiom" cross-reference pattern. Added Iterative Evaluation Pattern (Section 10): evaluate → fix → re-evaluate cycle targeting 8.5/10. Updated Reference Materials (Section 11): Chapter 31 entry expanded with PRIMM-AI+ Track B details, added chapter-writing-methodology v3.0 as reference. Resolved open questions: Track B for pre-coding chapters, mandatory answer keys. |
