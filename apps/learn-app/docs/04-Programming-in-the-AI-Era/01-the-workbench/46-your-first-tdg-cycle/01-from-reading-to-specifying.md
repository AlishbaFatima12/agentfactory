---
sidebar_position: 1
title: "From Reading to Specifying -- What Is TDG?"
description: "Understand Test-Driven Generation by reading a complete worked example. See how five lines of specification produce a working, tested function -- and how TDG connects to the SDD workflow you already know."
keywords:
  [
    "TDG",
    "test-driven generation",
    "TDD",
    "test-driven development",
    "spec-driven development",
    "specification",
    "pytest",
    "pyright",
    "AI code generation",
    "verification",
    "worked example",
  ]
chapter: 46
lesson: 1
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "TDG Conceptual Understanding"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can explain the TDG loop (specify, check types, generate, verify, read) and describe how it connects to SDD from Chapter 16"

  - name: "TDG vs TDD Distinction"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can state the key difference between TDD and TDG -- in TDD the human writes the implementation, in TDG the AI generates it"

learning_objectives:
  - objective: "Explain the TDG loop and how it connects to SDD from Chapter 16"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Student reads a complete TDG worked example and correctly identifies the five steps (specify, check types, generate, verify, read) -- mapping each to its SDD equivalent"

  - objective: "Distinguish TDG from TDD and explain why tests improve AI code generation"
    proficiency_level: "A1"
    bloom_level: "Remember"
    assessment_method: "Student correctly states that TDD and TDG share the same discipline (tests first) but differ in who writes the implementation (human vs AI)"

cognitive_load:
  new_concepts: 2
  assessment: "2 concepts (TDG as a method, the TDG loop) within the A1 limit. This is a conceptual lesson -- students read a worked example but do not write code. All code shown uses vocabulary from Chapters 44-45 plus the three new words taught in Lesson 2."

differentiation:
  extension_for_advanced: "If you already know TDD, compare the TDG loop to your Red-Green-Refactor cycle. Identify where the 'Refactor' step lives in TDG (hint: it is a re-prompt, not a manual edit). Consider: what changes about your role when AI writes the Green step?"
  remedial_for_struggling: "Focus only on the worked example. Read each step slowly, matching it to the SDD steps from Chapter 16. Do not worry about the research studies or the TDD comparison -- those are context for experienced readers. The worked example is the lesson."
---

# From Reading to Specifying -- What Is TDG?

Emma turns her laptop toward James. On the screen:

```python
def celsius_to_fahrenheit(celsius: float) -> float: ...

def test_freezing():
    assert celsius_to_fahrenheit(0.0) == 32.0

def test_boiling():
    assert celsius_to_fahrenheit(100.0) == 212.0
```

"That is the whole specification," she says.

James counts the lines. "Five lines? At my old job, our project specs were thirty-page documents that nobody read."

Emma almost smiles. "How many of those specs got implemented exactly as written?"

James shrugs. "...Maybe none."

Emma taps the screen. "What do you think each line does?"

James leans forward. "Okay, let me work through this. The first line names the function and says it takes a float and returns a float. The three dots mean the body is empty -- no implementation yet. And the two test functions say what the correct answers must be: zero Celsius is thirty-two Fahrenheit, a hundred Celsius is two-twelve."

Emma waits. "And then?"

"If the body is empty, you tell Claude Code to fill it in. It reads the types and the tests and writes the formula." He pauses. "That is SDD. But the specification is Python instead of English."

Emma nods. "You already knew that. You just needed to see it."

---

## From English to Python

Think back to Chapter 16. You learned a three-step workflow called Spec-Driven Development (SDD):

1. **You describe what you want** -- in plain English, in a markdown file
2. **Claude Code builds it** -- reading your description and generating the result
3. **You check the result** -- reading what Claude Code produced and deciding if it matches what you asked for

You have been doing this in every chapter since. The only thing that changes now is **step 1** -- how you describe what you want:

| | SDD (Chapter 16) | TDG (This Chapter) |
|---|-------------------|---------------------|
| **Step 1: You describe** | English sentences in a markdown file | Python types and tests |
| **Step 2: AI builds** | Claude Code implements | Claude Code implements |
| **Step 3: You check** | You read and review | pytest + pyright check automatically, then you read |

Instead of writing an English sentence like *"Make a function that converts Celsius to Fahrenheit and returns a decimal number,"* you write the same idea in Python:

```python
def celsius_to_fahrenheit(celsius: float) -> float: ...

def test_freezing():
    assert celsius_to_fahrenheit(0.0) == 32.0

def test_boiling():
    assert celsius_to_fahrenheit(100.0) == 212.0
```

Five lines. The function signature says what it does. The `-> float` says what it returns. The `...` says the body is empty. The two tests say what the correct answers must be. That is the specification -- more precise than any English paragraph could be.

:::note If you have never written code before
You are not expected to write these five lines yet. This lesson is about understanding the *loop* -- reading, not doing. Lesson 2 teaches the three new vocabulary words (`return`, `-> float`, `...`) one at a time, and you will write your first specification there. For now, just read and follow along.
:::

---

## The TDG Loop

TDG follows five steps. You will use this exact loop in every lesson of this chapter -- and in every chapter after this one.

**Step 1 -- Specify.** Write a function stub (name, types, `...` body) and two test assertions. This is your specification. It says *what* the function must do without saying *how*.

**Step 2 -- Check types.** Run `uv run pyright`. The type checker must pass. If pyright reports an error, your specification has a type problem -- fix it before going further. (This is like running a spell-check on your English spec.)

**Step 3 -- Generate.** Tell Claude Code: "Implement the function that passes these tests. Do not modify the tests." AI reads your types and tests, then writes the function body.

**Step 4 -- Verify.** Run `uv run pytest -v`. The tests must pass. If they fail, go back to Step 3 and re-prompt. If they pass, go to Step 5.

**Step 5 -- Read.** Apply PRIMM from Chapter 45. Read the generated code. Predict what it does for a new input. Build a trace table if the logic is not obvious. This is where your Chapter 45 skills earn their keep -- you do not trust AI output; you verify it with your eyes.

```
┌──────────┐     ┌─────────────┐     ┌──────────┐     ┌────────┐     ┌──────┐
│ 1.Specify │────▶│ 2.Check     │────▶│ 3.Generate│────▶│4.Verify│────▶│5.Read│
│ stub+tests│     │   types     │     │  (AI)     │     │ pytest │     │ PRIMM│
└──────────┘     └─────────────┘     └──────────┘     └────────┘     └──────┘
                                           ▲                │
                                           └── if FAIL ─────┘
```

That is the entire method. Five steps. The same loop, every time.

---

## A Complete Worked Example (Read, Don't Do)

Let us walk through one full TDG cycle so you can see how every step works. You do not need to type anything -- just read and predict.

### Step 1 -- Specify

The function: `double`. It takes an integer and returns an integer that is twice the input.

```python
# smartnotes/math_helpers.py

def double(n: int) -> int: ...
```

```python
# tests/test_math_helpers.py

from smartnotes.math_helpers import double

def test_double_positive():
    assert double(5) == 10

def test_double_zero():
    assert double(0) == 0
```

Five lines of specification (the stub plus two tests). The `import` line tells Python where to find the function -- you saw imports in Chapter 44 when setting up SmartNotes.

### Step 2 -- Check Types

```
$ uv run pyright
0 errors, 0 warnings, 0 informations
```

Pyright passes. Why? Because `...` (the ellipsis) makes the function a *stub* -- pyright trusts the type annotations and ignores the missing body. The types are consistent: `n: int` goes in, `-> int` comes out. No type errors.

### Step 3 -- Generate

The prompt to Claude Code:

```
Implement the `double` function in smartnotes/math_helpers.py
so that all tests in tests/test_math_helpers.py pass.
Do not modify the tests.
```

Claude Code reads the stub and the tests, and replaces the `...` with:

```python
def double(n: int) -> int:
    return n * 2
```

One line of implementation. `return n * 2` -- the function hands back `n` multiplied by 2.

### Step 4 -- Verify

```
$ uv run pytest tests/test_math_helpers.py -v
tests/test_math_helpers.py::test_double_positive PASSED
tests/test_math_helpers.py::test_double_zero PASSED

2 passed
```

Both tests pass. The green bar. The function does what the specification demanded.

### Step 5 -- Read (PRIMM)

Now apply Chapter 45. Read the generated code: `return n * 2`.

**Predict:** What does `double(7)` return? Work it out: `7 * 2 = 14`. The function returns `14`.

**Predict:** What does `double(-3)` return? Work it out: `-3 * 2 = -6`. The function returns `-6`.

Does this match your understanding of "double"? Yes -- multiplying by 2 doubles a number, including negatives. The implementation is correct, and you know *why* it is correct because you read it.

---

## The 5:20 Ratio

Count the lines. You wrote 5 lines of specification (1 stub + 2 tests + 2 assertions). AI generated 2 lines of implementation. The ratio is small here because the function is small. In later chapters, your specifications will be 5-10 lines and AI will generate 20-50 lines. The ratio grows, but the loop stays the same.

This is the productivity claim behind TDG: your 5 lines of specification leverage AI to produce correct, tested, type-checked code. You write the *what*. AI writes the *how*. Pytest and pyright verify the result. Your Chapter 45 skills let you read and understand what AI wrote.

:::tip If you already know TDD
If you have used Test-Driven Development before, TDG is the same discipline -- Red-Green-Refactor -- but AI writes the Green step. Your role shifts from implementation to verification. Kent Beck described TDD in 1999 (*Extreme Programming Explained*) and the 2003 book *Test-Driven Development: By Example*. TDG is an emergent adaptation of that discipline for AI-assisted development, described by multiple practitioners since 2023.
:::

---

## Why Tests Make AI Better

You might wonder: does writing tests actually improve what AI generates? Yes. Research confirms it:

- A study at Microsoft Research (TiCoder, published at ICSE 2024) found that giving AI a test suite improved code accuracy by **45.7 percentage points** compared to natural language alone. Programmers in the study also reported significantly less cognitive load -- the tests did the explaining for them.

- Researchers at the University of Waterloo (TGen, 2024) found that including tests alongside problem descriptions improved AI code generation by **12-18%** -- and the gains came from the AI using failed tests to fix its own mistakes.

- Anthropic, the company behind Claude Code, calls test-driven development "the single strongest pattern for working with agentic coding tools." Their recommendation: write the tests first, confirm they fail, commit them, then ask AI to implement.

The pattern is consistent: tests are better specifications than English. They are precise, unambiguous, and machine-verifiable. When you give AI a test suite, it generates better code than when you describe what you want in words.

:::note One counterintuitive finding
A 2025 study (TENET) tested TDG at the scale of entire code repositories and found something surprising: a *concise, diverse* test suite outperforms a comprehensive one. Two well-chosen tests produce better AI output than ten redundant tests. More is not always better -- clarity beats quantity. This is why this chapter starts with two assertions per function, not twenty.
:::

---

## SDD to TDG: The Translation

If you completed Chapter 16, you already know the three-phase SDD workflow. TDG maps directly onto it:

| SDD Phase | What You Did in Ch 16 | What You Do in TDG |
|-----------|----------------------|-------------------|
| **Specification** | Wrote a markdown spec describing what you wanted | Write a function stub with types + test assertions |
| **Implementation** | Claude Code generated files from your spec | Claude Code generates the function body from your stub + tests |
| **Verification** | You reviewed the output against your spec | pytest checks automatically; you read the code with PRIMM |

The method is the same. The precision is higher. English specifications can be ambiguous -- "convert the temperature" could mean Celsius to Fahrenheit or Fahrenheit to Celsius. A Python test that says `assert celsius_to_fahrenheit(0.0) == 32.0` cannot be misunderstood.

---

## Try With AI

Open Claude Code in your SmartNotes project and try these prompts. You are exploring, not building -- use these to see TDG in action before you do it yourself in Lesson 2.

### Prompt 1: Explain TDG

```
Explain test-driven generation (TDG) in three sentences.
How is it different from test-driven development (TDD)?
```

Compare AI's explanation to what you just read. Does it match? Does it add anything you had not considered? If the explanation contradicts this lesson, trust the lesson -- AI summaries can drift.

**What you're learning:** You are practicing critical reading of AI-generated explanations -- the same verification mindset you will apply to AI-generated code.

### Prompt 2: Show a TDG Cycle

```
Show me a complete TDG cycle for a function called
`triple(n: int) -> int` that returns three times its input.
Show the stub, the tests, and the implementation separately.
Label each step: Specify, Generate, Verify.
```

Read the output. Predict: if you ran the tests, would they pass? Check the implementation against the tests line by line.

**What you're learning:** You are reading a TDG cycle generated by AI and verifying it mentally -- exactly the Step 5 (Read) skill from the TDG loop.

### Prompt 3: Connect to Your Domain

```
I am building a note-taking app called SmartNotes. Suggest
three simple functions (name, input type, return type, one-sentence
description) that I could use as my first TDG exercises. Keep
them simple -- one calculation each, no loops or conditionals.
```

Look at the suggestions. For each one, could you write two test assertions? If yes, you are ready for Lesson 2.

**What you're learning:** You are translating domain requirements (SmartNotes features) into function signatures -- the first step of the Specify phase.

---

## PRIMM-AI+ Practice: Understanding the TDG Loop

### Predict [AI-FREE]

Read the following specification without running it. Predict: if AI implemented this function correctly, what would `test_negate_positive` check? What value would `negate(4)` need to return for the test to pass?

```python
def negate(n: int) -> int: ...

def test_negate_positive():
    assert negate(4) == -4

def test_negate_zero():
    assert negate(0) == 0
```

Write your prediction and a **confidence score from 1-5** before continuing.

<details>
<summary>Check your prediction</summary>

`negate(4)` must return `-4` for the test to pass. The function negates (flips the sign of) its input. `negate(0)` must return `0` because negating zero is still zero. If you predicted this correctly with confidence 4-5, your reading skills from Chapter 45 are working.

</details>

### Run

Ask Claude Code to implement `negate` and run the tests:

```
Create a file smartnotes/negate.py with this stub:
def negate(n: int) -> int: ...

Create a file tests/test_negate.py with:
from smartnotes.negate import negate

def test_negate_positive():
    assert negate(4) == -4

def test_negate_zero():
    assert negate(0) == 0

Then implement the negate function so all tests pass.
```

Run `uv run pytest tests/test_negate.py -v`. Compare the result to your prediction.

### Investigate

Read the implementation AI generated. Write a one-sentence explanation of *how* it works. Common implementations: `return -n` or `return n * -1` or `return 0 - n`. All three are correct. Which did AI choose?

**Error Taxonomy:** If the tests fail, classify the error. Is it a *type error* (wrong types), a *logic error* (wrong calculation), or a *specification error* (the tests themselves are wrong)? In this case, the specification is correct -- so any failure is in AI's implementation.

### Modify

Change the specification: add a third test that checks `negate(-7) == 7`. Predict: will the existing implementation pass this new test without changes? Run it and compare.

### Make [Mastery Gate]

Without looking back at this lesson, explain the five steps of the TDG loop in your own words. Then explain: what is the difference between TDG and the SDD workflow from Chapter 16? If you can answer both questions, you have the conceptual foundation for the rest of this chapter.

---

## Key Takeaways

1. **TDG is SDD with the specification written in Python.** You write types and tests (specification), AI generates the function body (implementation), pytest and pyright verify (verification). Same three phases, different language.

2. **You write 5 lines, AI writes 20.** The specification is tiny -- a stub and two assertions. The implementation can be much larger. Your leverage comes from writing the *what*, not the *how*.

3. **Tests make AI code better.** Research shows that giving AI a test suite improves code accuracy by 12-45% compared to natural language descriptions alone. Tests are precise, unambiguous specifications that AI can verify against.

4. **The loop is always the same.** Specify, check types, generate, verify, read. Five steps. Every function, every chapter, from here forward.

5. **You already know this method.** If you completed Chapter 16, you completed SDD cycles in English. If you completed Chapter 45, you can read what AI generates. TDG combines both skills.

---

## Looking Ahead

You understand the loop. You have seen a complete worked example. In Lesson 2, you learn three new Python words -- `return`, `-> float`, and `...` -- and write your first real specification. The function: `celsius_to_fahrenheit`. The test: two assertions. The result: your first RED test -- failing on purpose, because the body is still empty. That is where the loop begins.

---

James looks at his notes. Five steps. He has not written a single line of code yet, but the method already makes sense. Five lines of specification. One loop. Every time.

"It is smaller than I expected," he says.

Emma, halfway out the door, turns back. "The best specifications always are."
