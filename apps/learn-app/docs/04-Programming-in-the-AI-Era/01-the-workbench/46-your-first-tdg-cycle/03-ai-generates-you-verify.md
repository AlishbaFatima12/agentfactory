---
sidebar_position: 3
title: "AI Generates, You Verify"
description: "Prompt Claude Code to implement your celsius_to_fahrenheit function. See GREEN for the first time. Read the generated code with PRIMM and verify it matches your specification."
keywords:
  [
    "AI code generation",
    "Claude Code",
    "TDG",
    "GREEN",
    "pytest",
    "pyright",
    "verification",
    "PRIMM",
    "celsius to fahrenheit",
    "generated code",
    "trust gap",
  ]
chapter: 46
lesson: 3
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "AI Prompting for TDG"
    proficiency_level: "A1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can prompt Claude Code to implement a function from a stub and tests, using the pattern 'Implement the function that passes these tests. Do not modify the tests.'"

  - name: "AI Output Verification"
    proficiency_level: "A1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can read AI-generated code, predict its output for a new input using PRIMM, and verify the prediction by running the code"

learning_objectives:
  - objective: "Prompt Claude Code to generate a function implementation from a stub and tests"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Student successfully prompts Claude Code with the TDG prompt pattern and receives a working implementation that passes all tests"

  - objective: "Verify AI-generated code by reading it with PRIMM and running tests"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Student reads the generated implementation, predicts its output for a new input (not in the original tests), verifies by running the code, and explains how the implementation works"

cognitive_load:
  new_concepts: 1
  assessment: "1 concept (prompting Claude Code for TDG) at the A1 limit. The verification step reuses PRIMM from Chapter 45 and pytest from Lesson 2 -- no new tools or syntax. The lesson's challenge is applying existing skills to AI-generated output."

differentiation:
  extension_for_advanced: "After verifying celsius_to_fahrenheit, complete a full independent TDG cycle for fahrenheit_to_celsius. Write the stub, tests, prompt, verify, and read -- without looking back at this lesson. The inverse formula is C = (F - 32) × 5/9. Time yourself: the second cycle should feel faster than the first."
  remedial_for_struggling: "Focus on the verification step. If the prompt and generation feel overwhelming, use the exact prompt text provided in this lesson -- copy it word for word. Spend your energy on Step 5 (Read): can you explain how the formula works? If you can explain it, the lesson succeeded."
---

# AI Generates, You Verify

Emma stands up. "You have the stub. You have the tests. Pyright passes. Pytest fails. You know the next step." She picks up her coffee. "I will be back in ten minutes."

James watches her leave. He looks at his terminal. Two red failures. The stub with three dots where the body should be. He knows the next step: prompt Claude Code to fill in the dots.

He types the prompt. Claude Code generates one line. He stares at it. `return celsius * 9 / 5 + 32`. He recognizes the formula from school -- multiply by nine-fifths, add thirty-two. He runs the tests.

```
2 passed
```

Green. Both tests pass. James sits back. Five lines of specification. One line of implementation. And it works.

When Emma comes back, James shows her the terminal. "Green," he says. "Both tests pass. We are done, right?"

Emma sets down her coffee. "What does the generated code do?"

"It converts Celsius to Fahrenheit. The tests prove it."

Emma crosses her arms. "The tests prove it returns the right number for zero and a hundred. What about every other number?"

James hesitates. "Okay, let me look at the actual line." He reads it again. "It multiplies celsius by 9, divides by 5, adds 32. That is the formula."

Emma leans against the desk. "And if I give it minus forty?"

James does the math in his head. Minus forty times nine is minus three sixty. Divided by five is minus seventy-two. Plus thirty-two is... minus forty. "Minus forty. The same number. That is weird."

"That is the crossover point. Celsius and Fahrenheit meet at minus forty." She glances at the green test output. "The tests do not check that. Should they?"

James adds a third test before Emma finishes her coffee.

---

## Step 3: Generate

In Lesson 2, you wrote a function stub and two tests. **Pyright passed** (types are valid). **Pytest failed** (no implementation). You are at the **RED** stage -- exactly where the TDG loop says you should be.

Now you move to Step 3: ask Claude Code to write the implementation.

Open Claude Code in your SmartNotes project and use this prompt:

```
Implement the celsius_to_fahrenheit function in
smartnotes/temperature.py so that all tests in
tests/test_temperature.py pass. Do not modify the tests.
```

That last sentence -- **"Do not modify the tests"** -- is important. AI sometimes tries to change the tests instead of fixing the implementation. **Your tests are the specification.** They define what "correct" means. The implementation must match them, not the other way around.

:::note Commit your tests first
Before prompting AI, commit your test file to Git: `git add tests/test_temperature.py && git commit -m "test: add celsius_to_fahrenheit specification"`. This way, if AI modifies the tests despite your instruction, you can see the change in `git diff` and restore the original. Your specification is sacred -- protect it.
:::

### What AI Generates

Claude Code reads your stub (the function signature and types) and your tests (the expected input-output pairs). It replaces the `...` with:

```python
def celsius_to_fahrenheit(celsius: float) -> float:
    return celsius * 9 / 5 + 32
```

**One line of implementation.** The formula: multiply by 9, divide by 5, add 32. This is the standard Celsius-to-Fahrenheit conversion formula: **F = C × 9/5 + 32**.

---

## Step 4: Verify

Run both tools:

```
$ uv run pyright
0 errors, 0 warnings, 0 informations
```

```
$ uv run pytest tests/test_temperature.py -v
tests/test_temperature.py::test_freezing_point PASSED
tests/test_temperature.py::test_boiling_point PASSED

2 passed
```

**GREEN.** Both tests pass. The type checker is clean. Your specification demanded that `celsius_to_fahrenheit(0.0)` return `32.0` and that `celsius_to_fahrenheit(100.0)` return `212.0`. The implementation delivers both.

---

## Step 5: Read (PRIMM)

The tests pass, but **you are not done**. Step 5 says: read the generated code. Apply PRIMM from Chapter 45. **Do not just trust the green bar** -- understand *how* the implementation works.

### Predict

Look at the generated line: `return celsius * 9 / 5 + 32`

**Predict:** What does `celsius_to_fahrenheit(37.0)` return? (37°C is normal human body temperature.)

Work it out by hand:
- `37.0 * 9` = `333.0`
- `333.0 / 5` = `66.6`
- `66.6 + 32` = `98.6`

Your prediction: **`98.6`**. That is the well-known body temperature in Fahrenheit. The formula checks out.

**Predict:** What does `celsius_to_fahrenheit(-40.0)` return?

Work it out:
- `-40.0 * 9` = `-360.0`
- `-360.0 / 5` = `-72.0`
- `-72.0 + 32` = `-40.0`

Your prediction: **`-40.0`**. The same number. This is the **crossover point** where Celsius and Fahrenheit are equal. If your prediction matches your domain knowledge, the implementation is correct.

### Trace Table

Build a trace table for `celsius_to_fahrenheit(100.0)`:

| Expression | Value | How |
|-----------|-------|-----|
| `celsius` | `100.0` | Function parameter |
| `celsius * 9` | `900.0` | 100.0 × 9 |
| `celsius * 9 / 5` | `180.0` | 900.0 ÷ 5 |
| `celsius * 9 / 5 + 32` | `212.0` | 180.0 + 32 |
| `return` value | `212.0` | Handed back to caller |

The trace confirms: the function returns `212.0` for input `100.0`. This matches the test assertion `assert celsius_to_fahrenheit(100.0) == 212.0`.

---

## The 5:20 Ratio in Action

Count what happened:

- **You wrote**: 6 lines (1 stub + 1 import + 2 test functions with 2 assertions)
- **AI wrote**: 1 line (the return statement with the formula)
- **Total working code**: 7 lines, fully tested, type-checked

This is a tiny example. The ratio is 6:1 -- you wrote more than AI. But **the ratio flips as functions get more complex**. In later chapters, your specification will stay around 5-10 lines while AI generates 20, 30, or 50 lines of implementation. **Your leverage grows. The loop stays the same.**

---

## The Trust Gap

Why read the generated code at all? The tests pass. Pyright is clean. Why not just move on?

Because **tests only check the cases you wrote**. Your two tests check 0°C and 100°C. They do not check -40°C, 37°C, or 1000°C. A function could pass both tests but still be wrong for other inputs -- for example, if AI hardcoded `return 32.0` for the first test case and `return 212.0` for the second. That would pass both tests but fail for every other input.

This is **the trust gap**. The Stack Overflow 2025 developer survey found that **66% of developers** say their biggest frustration with AI-generated code is **"solutions that are almost right."** The code compiles, the obvious tests pass, but there is a subtle flaw you do not notice until production.

**Reading the generated code is how you close the trust gap.** The tests verify the cases you specified. Your PRIMM reading verifies the logic. Together, they give you confidence that the function works for *all* inputs, not just the two you tested.

---

## Your Independent TDG Cycle

You just completed a full TDG cycle with guidance. Now do one independently.

**Your function:** `fahrenheit_to_celsius` -- the inverse of what you just built.

**The formula:** C = (F - 32) × 5/9

**Known values:**
- 32°F = 0°C (freezing point)
- 212°F = 100°C (boiling point)

**Your steps:**

1. Write the stub in `smartnotes/temperature.py`:
   ```python
   def fahrenheit_to_celsius(fahrenheit: float) -> float: ...
   ```

2. Write two tests in `tests/test_temperature.py`:
   ```python
   def test_freezing_f_to_c():
       assert fahrenheit_to_celsius(32.0) == 0.0

   def test_boiling_f_to_c():
       assert fahrenheit_to_celsius(212.0) == 100.0
   ```

3. Run `uv run pyright` -- should be 0 errors.
4. Run `uv run pytest` -- should be RED (2 failures).
5. Prompt Claude Code: "Implement fahrenheit_to_celsius so all tests pass. Do not modify the tests."
6. Run `uv run pytest` -- should be GREEN.
7. **Read** the generated code. Predict: what does `fahrenheit_to_celsius(98.6)` return? (Hint: it should be 37.0 -- normal body temperature.)

If you completed all seven steps and your prediction in step 7 was correct, you have done a **full TDG cycle independently**. That is the **mastery gate** for this lesson.

---

## Try With AI

### Prompt 1: Verify Your Understanding

```
I just completed a TDG cycle for celsius_to_fahrenheit.
The implementation is: return celsius * 9 / 5 + 32
Explain why this formula works mathematically. What does
each part of the expression do?
```

Compare AI's explanation to your trace table. Does it confirm your understanding?

**What you're learning:** You are using AI to deepen understanding after verification -- not as a substitute for reading the code yourself.

### Prompt 2: Edge Case Discovery

```
I have a celsius_to_fahrenheit function with these tests:
- celsius_to_fahrenheit(0.0) == 32.0
- celsius_to_fahrenheit(100.0) == 212.0

What are three additional test cases I should consider?
Explain why each one is a useful edge case.
```

Read the suggestions. Do they include -40°C (crossover point)? Negative values? Very large numbers? Evaluate whether each suggestion adds real value or is redundant.

**What you're learning:** You are reviewing AI-generated test suggestions -- evaluating specification quality, not just code quality.

### Prompt 3: Domain Application

```
For my SmartNotes app, suggest a simple function that
converts between two units relevant to note-taking
(like words to pages, or characters to reading time).
Give me the function name, types, and two test cases.
I will use it for my next TDG cycle.
```

Save the suggestion for Lesson 4. You will use it there.

**What you're learning:** You are translating domain requirements into TDG specifications -- practicing the "Specify" step for functions you will actually build.

---

## PRIMM-AI+ Practice: Verifying AI Output

### Predict [AI-FREE]

Suppose AI generated this implementation for a function called `km_to_miles`:

```python
def km_to_miles(km: float) -> float:
    return km * 0.621371
```

Predict: what does `km_to_miles(10.0)` return? What does `km_to_miles(0.0)` return? Write your predictions and a **confidence score from 1-5**.

<details>
<summary>Check your prediction</summary>

`km_to_miles(10.0)` returns `6.21371`. The calculation: 10.0 × 0.621371 = 6.21371.

`km_to_miles(0.0)` returns `0.0`. The calculation: 0.0 × 0.621371 = 0.0.

If you predicted both correctly, you can read and evaluate simple AI-generated code.

</details>

### Run

Create the stub and tests for `km_to_miles`. Use the test values from your prediction. Run the full TDG cycle: pyright, pytest (RED), prompt, pytest (GREEN).

### Investigate

Read the generated implementation. Is the conversion factor accurate? (The actual factor is approximately 0.621371 -- check whether AI used this value or a rounded version like 0.62.) If AI rounded, is the rounding acceptable for your tests?

**Error Taxonomy:** If the tests fail because of floating-point precision (e.g., `6.21371` vs `6.213710000000001`), classify this as a **precision error** -- a subtype of logic error caused by floating-point arithmetic. In later chapters, you will learn to use `pytest.approx()` for these cases.

### Modify

Add a third test: `km_to_miles(42.195)` -- the marathon distance. Calculate the expected value by hand (42.195 × 0.621371 ≈ 26.219). Predict: will the existing implementation pass this new test? Run it.

### Make [Mastery Gate]

Complete one full TDG cycle for a function you choose -- from stub to GREEN to reading the generated code. You may use the SmartNotes domain suggestion from Try With AI Prompt 3, or pick a simple unit conversion. Your cycle must include all five steps: specify, check types, generate, verify, read. If you can do this without looking back at the lesson instructions, you own the TDG loop.

---

## Key Takeaways

1. **The prompt pattern is simple.** "Implement the function that passes these tests. Do not modify the tests." That sentence -- especially the second part -- protects your specification from AI changes.

2. **GREEN means the tests pass, not that the code is correct.** Tests only check the cases you wrote. Reading the generated code with PRIMM closes the trust gap between "tests pass" and "the function works."

3. **The trace table verifies logic.** When you trace `celsius * 9 / 5 + 32` step by step, you see exactly how the formula works. This is the same skill from Chapter 45 applied to AI-generated code.

4. **Commit your tests before prompting AI.** Tests are your specification. Protect them with Git. If AI modifies them, `git diff` will show the change.

5. **The loop gets faster with practice.** Your second TDG cycle (fahrenheit_to_celsius) should have felt faster than the first. The method is the same -- only the function changes.

---

## Looking Ahead

You have seen GREEN. The tests pass. The code works. But what happens when AI gets it wrong? In Lesson 4, you will encounter a function where AI's first attempt does not pass your tests. You will read the failure, classify the error, and re-prompt. The TDG loop has a built-in mechanism for this: the tests catch the mistake, and you use them to guide AI toward the correct implementation. Failure is not a dead end -- it is a step in the loop.

---

James commits the green tests. Two functions. Two TDG cycles. Both green.

He catches himself thinking about what function to specify next -- not what formula to write, but what specification to design. The shift happened somewhere between the first stub and the second green bar.

He mentions it to Emma later. She says something he does not expect: "The loop is a circle -- specify, check, generate, verify, read. When it works, you stop seeing the circle. You just see the function."
