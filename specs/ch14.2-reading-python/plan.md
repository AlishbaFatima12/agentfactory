# Chapter 14.2: Reading Python — Implementation Plan

**Version**: 1.0
**Date**: 2026-02-21
**Phase**: 1 (Reader) — "I can read and understand AI-generated typed Python"
**Pedagogical Layer**: L1 (Manual Foundation)
**CEFR Level**: A1-A2
**SmartNotes Connection**: Students read a pre-built SmartNotes module (~100 lines)

---

## Chapter Overview

This chapter teaches students to READ typed Python code — predicting output, tracing execution, and understanding function signatures. Students do NOT write code. Every example is typed. The chapter follows the PRIMM-AI+ framework (Predict, Run, Investigate, with AI-free checkpoints, confidence scoring, mastery gates, and verification ladder).

**Bridge from Ch 14.1**: "Your workbench is built. Now let's use it to read the language it processes."

**Bridge to Ch 14.3**: "You can read Python. Now let's write your first test and watch AI implement it."

---

## Lesson Breakdown (6 Lessons + Quiz)

### Lesson 1: Why Reading Comes Before Writing

**Duration**: 15 min | **New concepts**: 3 | **Bloom's**: Understand

**Goal**: Establish the reading-first mindset and why it matters in the AI era.

**Content**:
- Bridge from Ch 14.1 (workbench built → now use it)
- The AI-era shift: reading > writing (GitClear data: AI code has 1.7x defect rate)
- PRIMM-AI+ framework: Predict → Run → Investigate (our method for this chapter, with AI-free checkpoints and confidence scoring)
- What "reading code" means: predicting output, tracing execution, explaining purpose
- SmartNotes preview: the code you'll read by lesson 6

**Narrative**: James watches AI generate 50 lines of code. "That was fast!" Emma: "Now read it. What does line 12 actually do?" James stares. He can't answer. Emma: "Speed of generation means nothing if you can't verify correctness." (Students apply PRIMM-AI+ Predict stage with [AI-FREE] checkpoint and confidence scoring from Chapter 30.)

**Exercises**: 2 Read & Predict (simple expressions)
**Try With AI**: 3 prompts about code reading strategies

**Skills**:
- Code Reading Mindset (A1/Understand)
- AI Output Verification Awareness (A1/Remember)

---

### Lesson 2: Types as Labels — str, int, float, bool

**Duration**: 25 min | **New concepts**: 5 | **Bloom's**: Understand

**Goal**: Students recognize the four primitive types and read type annotations as "labels."

**Content**:
- The four primitive types: `str`, `int`, `float`, `bool`
- Type annotations as labels: `name: str = "Zia"` reads as "name is labeled str, holds Zia"
- Analogy: jar labels tell you what's inside without opening
- Variable annotation syntax: `x: int = 5`, `x: int` (no value), `total: int = a + b`
- `None` as absence of value, `str | None` pattern
- Type conversions: `int()`, `str()`, `float()`, `bool()`
- Truthiness: what values are falsy (0, "", None, False, [], {})
- Before/After: reading code WITHOUT types vs WITH types

**Narrative**: James sees `def process(data):` — "What does data hold?" No idea. Emma shows him the typed version: `def process(data: list[int]) -> int:` — "Now you know exactly what goes in and comes out. Types are documentation that the machine also reads."

**Exercises**: 3 Read & Predict (type identification, truthiness), 1 Spot the Bug (wrong type conversion)
**Try With AI**: 3 prompts exploring type behavior

**Skills**:
- Python Primitive Types (A1/Understand)
- Type Annotation Reading (A2/Understand)

---

### Lesson 3: Reading Expressions and Predicting Output

**Duration**: 30 min | **New concepts**: 5 | **Bloom's**: Apply

**Goal**: Students can predict what Python expressions evaluate to, including operator precedence.

**Content**:
- Arithmetic: `+`, `-`, `*`, `/`, `//`, `%`, `**`
- Critical distinction: `/` always returns float, `//` returns int
- Operator precedence (simplified table)
- String operations: concatenation, repetition, indexing, slicing, f-strings
- Boolean operators: `and`, `or`, `not` — return actual values, not just True/False
- Short-circuit evaluation
- Comparison chaining: `0 < x < 10`
- Trace tables: tracking variable state line by line
- Common traps: `round(2.5)` → 2, `-3 ** 2` → -9, `bool("0")` → True

**Narrative**: Emma writes five lines on the whiteboard. "Before I run this, predict the value of each variable." James traces through them, gets two wrong. Emma: "That's why we trace. Your brain skips steps. The trace table doesn't."

**Exercises**: 4 Read & Predict (escalating difficulty), 1 trace table exercise
**Try With AI**: 3 prompts about expression evaluation

**Skills**:
- Expression Evaluation (A2/Apply)
- Trace Table Construction (A1/Apply)

---

### Lesson 4: Reading Function Signatures

**Duration**: 25 min | **New concepts**: 4 | **Bloom's**: Understand/Apply

**Goal**: Students can read a function signature and know what it accepts, what it returns, and what its contract is.

**Content**:
- A function signature IS a contract: `def greet(name: str) -> str:`
- Reading parameters: name, type, default values
- Reading return types: `-> str`, `-> int`, `-> None`, `-> str | None`
- The `-> None` pattern: functions that DO something but don't RETURN a value
- Print vs return: the critical distinction (print = side effect, return = value)
- Calling functions: matching arguments to parameters
- Multiple parameters with defaults: `def add(a: int, b: int = 0) -> int:`
- Before/After: reading function WITHOUT signature vs WITH

**Narrative**: James finds a SmartNotes function: `def search_notes(query: str, max_results: int = 10) -> list[str]:`. Emma: "Read the signature. What does it take? What does it give back? You haven't read a single line of the body, and you already know the contract."

**Exercises**: 3 Read & Predict (function calls), 1 Spot the Bug (return type mismatch)
**Try With AI**: 3 prompts about function contracts

**Skills**:
- Function Signature Reading (A2/Understand)
- Print vs Return Distinction (A1/Understand)

---

### Lesson 5: What Python Does (and Doesn't Do) with Types

**Duration**: 25 min | **New concepts**: 4 | **Bloom's**: Understand

**Goal**: Students understand that Python ignores type annotations at runtime, and that Pyright catches what Python won't.

**Content**:
- Python does NOT enforce types: `age: int = 25; age = "hello"` — no error!
- Annotations are metadata in `__annotations__`
- Gradual typing: you add types incrementally
- Why this matters: types are for humans and tools, not for Python itself
- Pyright as the enforcer: what it catches (5 common error types)
  - Argument type mismatch
  - Return type mismatch
  - Assignment type mismatch
  - Missing return on code paths
  - None safety (accessing method on possibly-None value)
- Before/After: bug caught at 2 AM vs bug caught by Pyright in 0.2 seconds
- Connection to Axiom V: Types Are Guardrails

**Narrative**: James writes `age: int = 25` then `age = "twenty-five"`. Python runs it fine. "See? Types don't matter!" Emma runs `uv run pyright`. Red squiggly: "Type 'str' is not assignable to declared type 'int'." Emma: "Python doesn't enforce types. Pyright does. That's the guardrail."

**Exercises**: 3 Spot the Bug (type errors Pyright would catch), 1 Read & Predict
**Try With AI**: 3 prompts about type checking

**Skills**:
- Runtime vs Static Type Checking (A2/Understand)
- Pyright Error Reading (A1/Apply)

---

### Lesson 6: Reading SmartNotes — Your First Code Review

**Duration**: 30 min | **New concepts**: 3 | **Bloom's**: Apply/Analyze

**Goal**: Students apply all reading skills to a real SmartNotes module, performing their first code review.

**Content**:
- Present a SmartNotes module (~80-100 lines, AI-generated, fully typed)
  - A `Note` with typed fields
  - A `format_title()` function
  - A `search_notes()` function
  - A `main()` entry point
- Code review checklist: signature → types → logic → edge cases
- Explain in plain English: describe each function's purpose in one sentence
- Parsons problem: reorder scrambled SmartNotes code
- Syntax Card: all new syntax from this chapter
- Checkpoint: `uv run pyright` on SmartNotes should pass
- Bridge to Ch 14.3: "You can read Python. Now write your first test."

**Narrative**: Emma opens the SmartNotes `main.py`. "This is 80 lines of typed Python. AI generated it from a specification. Your job: read every function, predict what it does, and explain it in plain English. If you can explain it, you understand it. If you can't — that's your next learning target."

**Exercises**: 2 Explain-in-Plain-English, 1 Parsons problem, 1 full code review exercise
**Try With AI**: 3 prompts about code review

**Skills**:
- Code Review Process (A2/Apply)
- Plain English Explanation (A2/Analyze)

---

## Exercise Summary

| Lesson | Read & Predict | Spot the Bug | Trace Table | Explain/Parsons | Total |
|--------|---------------|-------------|-------------|----------------|-------|
| L1 | 2 | 0 | 0 | 0 | 2 |
| L2 | 3 | 1 | 0 | 0 | 4 |
| L3 | 4 | 0 | 1 | 0 | 5 |
| L4 | 3 | 1 | 0 | 0 | 4 |
| L5 | 1 | 3 | 0 | 0 | 4 |
| L6 | 0 | 0 | 0 | 4 | 4 |
| **Total** | **13** | **5** | **1** | **4** | **23** |

## Quality Targets

- Each lesson: 300-450 lines
- Full YAML frontmatter (skills, learning_objectives, cognitive_load, differentiation)
- James/Emma narrative opening every lesson
- 3 Try With AI prompts per lesson with "What you're learning:" explanations
- Key Takeaways section (5 points) per lesson
- All code typed — zero untyped examples
- Syntax Card in Lesson 6

## Files to Create

```
apps/learn-app/docs/04-Coding-for-Problem-Solving/14.2-reading-python/
├── README.md
├── 01-why-reading-comes-before-writing.md
├── 02-types-as-labels.md
├── 03-reading-expressions-and-predicting-output.md
├── 04-reading-function-signatures.md
├── 05-what-python-does-with-types.md
├── 06-reading-smartnotes-your-first-code-review.md
└── 07_chapter_14-2_quiz.md
```
