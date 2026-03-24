---
sidebar_position: 4
title: "When AI Gets It Wrong"
description: "Handle your first failed AI generation. Read the test failure, classify the error, re-prompt Claude Code, and verify the fix. Learn that iteration is a normal part of the TDG loop, not a sign of failure."
keywords:
  [
    "AI failure",
    "re-prompt",
    "iteration",
    "test failure",
    "error taxonomy",
    "logic error",
    "TDG",
    "debugging",
    "trust gap",
    "verification",
    "reading time",
    "SmartNotes",
  ]
chapter: 46
lesson: 4
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "AI Failure Diagnosis"
    proficiency_level: "A1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can read a pytest failure message, identify the mismatch between expected and actual values, and classify the error using the Error Taxonomy from Chapter 43"

  - name: "Re-Prompting After Failure"
    proficiency_level: "A1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can re-prompt Claude Code with specific information about the failure -- quoting the error message and explaining what the correct behavior should be"

learning_objectives:
  - objective: "Read a pytest failure message and identify what went wrong"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Student reads a failing test output, identifies the expected vs actual values, and explains the mismatch in plain English"

  - objective: "Re-prompt Claude Code after a failed generation with specific failure information"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Student writes a re-prompt that includes the failing test output and a clear description of the expected behavior, resulting in a corrected implementation"

cognitive_load:
  new_concepts: 1
  assessment: "1 concept (re-prompting after failure) at the A1 limit. The failure reading uses PRIMM and Error Taxonomy from previous chapters. The re-prompt pattern is a single, repeatable template. The lesson deliberately limits iteration to one re-prompt -- full debugging is taught in Phase 4."

differentiation:
  extension_for_advanced: "After fixing the reading_time_minutes function, design a specification that you expect AI to get wrong on the first attempt. Choose a function with a subtle edge case (like rounding behavior or empty string handling). Run the TDG cycle and see if AI stumbles where you predicted. This is adversarial specification -- testing the limits of AI code generation."
  remedial_for_struggling: "Focus on reading the pytest failure output. The two lines that matter are the > line (which shows which assertion failed) and the E line (which shows expected vs actual). If you can read those two lines and explain the mismatch, the lesson succeeded. The re-prompt can be copied word-for-word from the template."
---

# When AI Gets It Wrong

James is two TDG cycles in. He has converted Celsius to Fahrenheit. He has converted Fahrenheit to Celsius. Both went green on the first prompt. He is starting to feel like the loop always works perfectly.

Then he writes a specification for `reading_time_minutes` -- a SmartNotes function that estimates how long it takes to read a note. He prompts Claude Code. He runs the tests.

```
1 passed, 1 failed
```

He stares at the screen. One passed. One failed. The function is not wrong for everything -- it is wrong for one specific case.

He walks over to Emma's desk. "It failed. I think the loop is broken."

Emma does not look up from her screen. "Good."

James frowns. "Good? One of my tests is red."

"I shipped a bug like this once," she says, turning to face him. "A billing function. Integer division instead of float division. Rounded every invoice down."

James raises an eyebrow. "How long before someone noticed?"

"Three weeks. Four hundred incorrect invoices." She pauses. "Your tests found it in three seconds."

James looks back at his terminal. "Okay, but I do not even know what went wrong yet. I just see the red."

Emma turns her screen toward him. "What do the two lines after the `>` say?"

He reads them. "It says the function returned 1 instead of 1.666... Oh. It dropped the decimal part. That is floor division -- I remember that from Chapter 45."

Emma almost smiles. "You just diagnosed a bug faster than my entire team did in 2019."

---

## A Function That Trips Up AI

Here is a SmartNotes function: `reading_time_minutes`. It takes a word count and a reading speed (words per minute), and returns the estimated reading time in minutes.

### Step 1 -- Specify

```python
# smartnotes/reading.py

def reading_time_minutes(word_count: int, words_per_minute: int) -> float: ...
```

```python
# tests/test_reading.py

from smartnotes.reading import reading_time_minutes

def test_exact_division():
    assert reading_time_minutes(1000, 200) == 5.0

def test_fractional_result():
    assert reading_time_minutes(500, 300) == 1.6666666666666667
```

**Test 1:** 1000 words at 200 words per minute = 5.0 minutes. Clean division.

**Test 2:** 500 words at 300 words per minute = 1.666... minutes. The result is not a round number. The return type is `float`, so the function must return the full fractional value.

### Step 2 -- Check Types

```
$ uv run pyright
0 errors, 0 warnings, 0 informations
```

### Step 3 -- Generate (First Attempt)

Prompt Claude Code:

```
Implement reading_time_minutes in smartnotes/reading.py
so that all tests in tests/test_reading.py pass.
Do not modify the tests.
```

AI might generate:

```python
def reading_time_minutes(word_count: int, words_per_minute: int) -> float:
    return word_count // words_per_minute
```

Notice the `//`. That is floor division -- the operator you learned in Chapter 45, Lesson 1. It drops the decimal. `500 // 300` gives `1`, not `1.666...`.

### Step 4 -- Verify (FAIL)

```
$ uv run pytest tests/test_reading.py -v
tests/test_reading.py::test_exact_division PASSED
tests/test_reading.py::test_fractional_result FAILED

    def test_fractional_result():
>       assert reading_time_minutes(500, 300) == 1.6666666666666667
E       assert 1 == 1.6666666666666667

1 passed, 1 failed
```

The first test passes: `1000 // 200` equals `5`, which equals `5.0`. The floor division did not matter because the result was already a whole number.

The second test fails: `500 // 300` equals `1`, but the test expects `1.6666666666666667`. Floor division threw away the fractional part.

---

## Reading the Failure

The pytest output tells you everything you need to know. Focus on two lines:

```
>       assert reading_time_minutes(500, 300) == 1.6666666666666667
E       assert 1 == 1.6666666666666667
```

- The `>` line shows which assertion failed.
- The `E` line shows the mismatch: the function returned `1`, but the test expected `1.6666666666666667`.

**Error Taxonomy:** This is a **logic error** -- the function computes the wrong value. The types are correct (`int` inputs, `float` output), and the specification is correct (the test values are right). The implementation used the wrong operator: `//` (floor division) instead of `/` (true division).

You already know the difference. In Chapter 45, Lesson 1, you predicted that `10 // 3` equals `3` (not `3.333...`). The same concept appears here -- `//` drops the decimal, `/` keeps it.

---

## Re-Prompting

Now you tell Claude Code what went wrong. A good re-prompt includes the failure:

```
The test_fractional_result test fails. The function returns 1
instead of 1.6666666666666667. The issue is integer division
(// instead of /). Please use true division (/) so the
fractional part is preserved. Do not modify the tests.
```

You are not asking AI to figure out the problem. You are telling it what is wrong and what to fix. Your Chapter 45 reading skills let you diagnose the issue. The re-prompt is specific: it names the failing test, states the wrong value, identifies the cause, and requests the fix.

### Second Attempt

Claude Code generates:

```python
def reading_time_minutes(word_count: int, words_per_minute: int) -> float:
    return word_count / words_per_minute
```

One character changed: `//` became `/`. Run the tests:

```
$ uv run pytest tests/test_reading.py -v
tests/test_reading.py::test_exact_division PASSED
tests/test_reading.py::test_fractional_result PASSED

2 passed
```

**GREEN.** Both tests pass. The fix was one character, but the reading -- identifying *why* it failed and *what* to change -- required your understanding of floor division vs true division.

---

## Step 5: Read the Fixed Code

Apply PRIMM to the corrected implementation: `return word_count / words_per_minute`.

**Predict:** What does `reading_time_minutes(750, 250)` return?

Work it out: `750 / 250 = 3.0`. The function returns `3.0`.

**Predict:** What does `reading_time_minutes(100, 300)` return?

Work it out: `100 / 300 = 0.3333333333333333`. The function returns approximately `0.333`. A 100-word note at 300 words per minute takes about 20 seconds.

Does the logic make sense? Division is the right operation: total words divided by words per minute gives minutes. The formula is correct.

---

## Iteration Is Normal

AI does not always get it right on the first attempt. This is not a flaw in TDG -- it is a feature. The iteration loop is built into the method:

```
Specify → Generate → Verify → [if FAIL] → Read failure → Re-prompt → Verify
```

**Your tests are the safety net.** Without them, the floor division bug would have silently rounded every reading time down. With them, it was caught in three seconds and fixed in one re-prompt.

:::note Keep it simple for now
This lesson covers one re-prompt for one clear error. Real-world debugging -- where the failure is ambiguous or the fix introduces new bugs -- comes in Phase 4.
:::

---

## Your Independent TDG Cycle

Pick one function from this menu and complete a full TDG cycle:

**Option A: `words_per_page`**
- Takes `word_count: int` and `words_per_page: int`
- Returns the number of pages as a `float`
- Test cases: `words_per_page(500, 250) == 2.0`, `words_per_page(300, 250) == 1.2`

**Option B: `discount_price`**
- Takes `price: float` and `percent_off: int`
- Returns the discounted price as a `float`
- Test cases: `discount_price(100.0, 20) == 80.0`, `discount_price(50.0, 10) == 45.0`

**Option C: `seconds_to_minutes`**
- Takes `seconds: int`
- Returns the time in minutes as a `float`
- Test cases: `seconds_to_minutes(120) == 2.0`, `seconds_to_minutes(90) == 1.5`

Follow the same TDG steps from Lesson 3: stub, tests, pyright, pytest (RED), prompt, pytest (GREEN), read with PRIMM. If the first attempt fails, read the failure and re-prompt -- that is the iteration loop in action.

---

## Try With AI

### Prompt 1: Explain the Failure

```
A Python function returns 1 when I expected 1.6666666666666667.
The implementation uses // (floor division) instead of /
(true division). Explain the difference between // and /
in Python with two examples.
```

Compare AI's explanation to what you learned in Chapter 45. This reinforces the concept through a different angle.

**What you're learning:** You are using AI to consolidate understanding after diagnosing a problem yourself -- not as a shortcut to avoid reading the error.

### Prompt 2: Generate Edge Cases

```
I have a function reading_time_minutes(word_count: int,
words_per_minute: int) -> float that divides word_count
by words_per_minute. What edge cases should I test?
What inputs might cause problems?
```

Evaluate AI's suggestions. Does it mention zero (division by zero)? Negative values? Very large numbers? Which of these are realistic for a SmartNotes reading time function?

**What you're learning:** You are thinking about specification completeness -- whether your two tests cover enough cases. Edge case thinking becomes critical in later chapters.

### Prompt 3: Review Your Cycle

```
Review this TDG cycle for correctness:
1. Stub: def seconds_to_minutes(seconds: int) -> float: ...
2. Tests: assert seconds_to_minutes(120) == 2.0 and
   assert seconds_to_minutes(90) == 1.5
3. Implementation: return seconds / 60

Is the implementation correct? Are the tests sufficient?
What would you add?
```

Read AI's review. Does it find any issues? Does it suggest improvements you had not considered?

**What you're learning:** You are using AI as a code reviewer -- a role it plays well when you give it specific code to evaluate.

---

## PRIMM-AI+ Practice: Diagnosing Failure

### Predict [AI-FREE]

Read this implementation and test. Predict whether the test passes or fails:

```python
def percentage(part: int, whole: int) -> float:
    return part // whole * 100

def test_half():
    assert percentage(50, 100) == 50.0
```

Write your prediction and a **confidence score from 1-5**.

<details>
<summary>Check your prediction</summary>

The test **fails**. `50 // 100` equals `0` (floor division rounds down because 50 is less than 100). Then `0 * 100` equals `0`. The function returns `0`, but the test expects `50.0`.

The fix: use `/` instead of `//`. `50 / 100` equals `0.5`. Then `0.5 * 100` equals `50.0`.

If you predicted the failure and identified the cause, your floor division detection is solid.

</details>

### Run

Create the stub and test. Run `uv run pytest`. Confirm the failure matches your prediction.

### Investigate

Read the pytest output. The `E` line should show `assert 0 == 50.0`. Write a one-sentence diagnosis: what operator is wrong, and what should it be?

**Error Taxonomy:** Classify this as a **logic error** -- the function uses the wrong operator. The types are correct. The specification (test) is correct. The implementation's arithmetic is wrong.

### Modify

Fix the implementation by changing `//` to `/`. Predict: will both `percentage(50, 100)` and `percentage(1, 3)` now return correct values? Calculate `percentage(1, 3)` by hand: `1 / 3 * 100 = 33.333...`. Run it.

### Make [Mastery Gate]

Complete one full TDG cycle -- from stub to GREEN -- for a function of your choice. If AI gets it wrong on the first attempt, read the failure, classify the error, and re-prompt. Document your cycle:

1. What function did you specify?
2. Did AI get it right on the first attempt?
3. If not, what was the error? How did you classify it?
4. What was your re-prompt?
5. Did the second attempt pass?

If you can answer all five questions, you own the full TDG loop -- including the iteration step.

---

## Chapter-End Rubric: Self-Assessment

Before moving to the next chapter, score yourself on five dimensions. This rubric mirrors the one from Chapter 45 -- it shows you where you stand so you can direct your practice.

### 1. Specification Quality

Can you write a function stub with type annotations and two meaningful tests that define expected behavior?

| Developing | Competent | Fluent |
|-----------|-----------|--------|
| Struggled with stub syntax or wrote tests that do not match the function's purpose | Wrote correct stubs and tests for guided examples; needed help with independent specifications | Wrote correct stubs and tests independently for a function of your own choosing; tests cover distinct cases (not redundant) |

### 2. Tool Usage

Can you run `uv run pyright` and `uv run pytest -v` and interpret the results correctly?

| Developing | Competent | Fluent |
|-----------|-----------|--------|
| Confused pyright and pytest output; unsure which tool checks types vs behavior | Ran both tools correctly; understood that pyright checks types and pytest checks behavior | Ran both tools fluently; committed tests before prompting; used `git diff` to verify AI did not modify tests |

### 3. Reading Generated Code

Can you read AI-generated code with PRIMM -- predict output, trace the logic, verify against domain knowledge?

| Developing | Competent | Fluent |
|-----------|-----------|--------|
| Accepted AI output without reading; relied on green tests as sufficient verification | Read generated code and predicted output for one new input; trace was mostly correct | Built trace tables for generated code; predicted output for multiple inputs including edge cases; verified against domain knowledge |

### 4. Failure Diagnosis

Can you read a pytest failure, identify the mismatch, classify the error, and explain what went wrong?

| Developing | Competent | Fluent |
|-----------|-----------|--------|
| Could not interpret the > and E lines in pytest output; needed AI to explain the failure | Read the failure message and identified the expected-vs-actual mismatch; classified the error type | Diagnosed the floor-division-vs-true-division error by reading the code; wrote a specific re-prompt without help |

### 5. Iteration

Can you re-prompt Claude Code after a failure with specific information about what went wrong?

| Developing | Competent | Fluent |
|-----------|-----------|--------|
| Re-prompted vaguely ("it's wrong, fix it"); AI did not improve on the second attempt | Re-prompted with the failing test name and expected-vs-actual values; AI fixed the issue | Re-prompted with diagnosis, root cause, and suggested fix; wrote the re-prompt faster than the original prompt |

---

**Developing** on any dimension? Repeat that lesson's exercises. **Competent** across all five? You are ready for the next chapter. **Fluent**? You are doing what professional developers do with AI coding tools.

---

## Common Mistakes

| Mistake | What Goes Wrong | How to Avoid It |
|---------|----------------|-----------------|
| Using `print()` instead of `return` | Tests cannot check printed output -- `assert` needs a return value | "Print is for people. Return is for reuse." Every TDG function uses `return` |
| Using `pass` instead of `...` in stubs | Pyright treats `pass` as real code and flags a type error for non-None return types | Use `...` (ellipsis) for stubs -- pyright trusts the annotations |
| Using `//` instead of `/` | Floor division drops decimals: `500 // 300` gives `1`, not `1.666...` | Use `/` for true division when the return type is `float` |
| Trusting GREEN without reading the code | Tests only check the cases you wrote -- the function could be wrong for other inputs | Always apply PRIMM after GREEN: predict output for a new input, then verify |

---

## Key Takeaways

1. **AI does not always get it right.** Floor division instead of true division. Hardcoded values instead of formulas. Off-by-one errors. The first generation is a draft, not a finished product.

2. **Your tests catch the mistakes.** Without tests, the floor division bug would have silently rounded every reading time down. With tests, it was caught in three seconds.

3. **Read the failure before re-prompting.** The `>` and `E` lines in pytest output tell you exactly what went wrong. A specific re-prompt ("the issue is // instead of /") works better than a vague one ("it's wrong, fix it").

4. **Classify the error.** Use the Error Taxonomy from Chapter 43. Is it a type error, a logic error, or a specification error? Classification helps you write better re-prompts and build pattern recognition.

5. **Iteration is a step in the loop, not a sign of failure.** The TDG loop includes the feedback path: Verify → [if FAIL] → Read → Re-prompt → Verify. This is normal. Professional developers iterate. AI-assisted development iterates. The method accounts for it.

---

## Looking Ahead

You have completed your first TDG cycles. You can specify a function, prompt AI to implement it, verify the result, and iterate when it fails. The method stays the same from here forward. Every chapter in Part 4 applies this loop to new domains -- strings, collections, control flow, classes. The functions get more complex. The tests get more interesting. The AI-generated code gets longer. But the loop never changes: Specify. Check types. Generate. Verify. Read.

The method stays the same. The problems get bigger. And you are ready.

---

James closes his laptop. Four TDG cycles today. Three green on the first prompt, one that needed a re-prompt. He caught the bug himself -- read the failure, named the problem, told AI what to fix.

He thinks about what Emma said. Four hundred invoices. Three weeks. His test caught it in three seconds.

He is not writing code yet. He is writing specifications that catch bugs before they ship. Somehow, without noticing, he started thinking like the person who prevents the four-hundred-invoice disaster -- not the person who discovers it three weeks late.

When he gets home, his partner asks how the course is going. James surprises himself: "I wrote five lines of Python today and caught a bug that a professional team missed for three weeks."

It is not the whole story. But it is the part that matters.
