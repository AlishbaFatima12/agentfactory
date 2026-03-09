---
sidebar_position: 4
title: "Reading a Test -- Two New Words"
description: "Learn to read Python test code by recognizing two new vocabulary words -- def and assert. Predict whether tests pass or fail using the PRIMM method you already know."
keywords:
  [
    "reading tests",
    "python",
    "def",
    "assert",
    "test prediction",
    "PRIMM",
    "pytest",
    "reading code",
    "type annotations",
    "test-driven generation",
    "TDG preview",
  ]
chapter: 33
lesson: 4
duration_minutes: 15

# HIDDEN SKILLS METADATA
skills:
  - name: "Test Syntax Recognition"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can identify def and assert in a test function and explain their meaning in plain English -- def labels a check, assert insists something is true"

  - name: "Test Outcome Prediction"
    proficiency_level: "A1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can predict whether a simple test function passes or fails by evaluating the assert expression using skills from Lessons 1-3"

learning_objectives:
  - objective: "Recognize def and assert as test vocabulary words and explain their meaning in plain English"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Student reads a test function and translates each line to plain English -- correctly identifying def as 'this labels a check' and assert as 'this must be true'"

  - objective: "Predict whether a test passes or fails by evaluating the assert expression"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Student correctly predicts pass/fail for at least 3 of 4 test functions before running pytest, using their existing knowledge of types, arithmetic, and string operations"

cognitive_load:
  new_concepts: 2
  assessment: "2 concepts (def as a test label, assert as a truth insistence) within the A1 limit. All code inside the test functions uses vocabulary from Lessons 1-3. The cognitive load is deliberately minimal -- this is a bridge lesson."

differentiation:
  extension_for_advanced: "After predicting all four tests, write your own assert statement (just the assert line, not the full function) that checks a surprising arithmetic result -- like floating-point precision or floor division. Predict whether it passes, then ask Claude Code to wrap it in a test function and run it."
  remedial_for_struggling: "Focus on Tests 1 and 2 only. For each test, copy it into a file called test_practice.py in your SmartNotes project. Before running, translate each line to English on paper. Then run uv run pytest test_practice.py -v and compare the result to your prediction."
---

# Reading a Test -- Two New Words

In Lesson 3, you reviewed a fifteen-line SmartNotes module and caught a bug before running the code. You built trace tables, classified bugs as type errors or logic errors, and saw how PRIMM and Pyright work together. You can read code. You can find what is wrong with it.

Chapter 34 will ask you to do something different: write a test first, then let AI generate the code that makes it pass. Before you can write a test, you need to recognize what one looks like. That is all this lesson does -- it adds two vocabulary words to your reading toolkit.

Think of it the way a medical student learns anatomy. Before performing surgery, you learn to point at a bone and name it. You do not need to understand the entire skeletal system. You need to recognize the part and know what it does. In this lesson, you will point at `def` and `assert` and know what they mean. That is enough. The deeper understanding comes in Phase 2 (Chapter 37 for functions) and Phase 3 (Chapter 39 for testing).

---

## The Two Words

Here is a test. It looks like the code blocks from Lessons 1-3, with two new pieces at the top and bottom:

```python
def test_greeting():
    result: str = "Smart" + "Notes"
    assert result == "SmartNotes"
```

Three lines. Two new words. Everything else you already know. Let us break it down.

**Line 1: `def test_greeting():`**

`def` means "define." It gives a name to a block of code. Think of it as a label on an envelope: "this envelope contains: a greeting check." The name `test_greeting` tells you what the check is about, and the `():` at the end is part of the label's punctuation -- you will learn why it looks that way in Chapter 37 when you study functions properly. For now, just recognize the pattern: `def test_something():` means "here is a check called something."

**Line 2: `result: str = "Smart" + "Notes"`**

You know this. String concatenation from Lesson 1, Block 1. The `+` operator joins two strings end to end. `result` holds `"SmartNotes"`.

**Line 3: `assert result == "SmartNotes"`**

`assert` means "I insist this is true." It checks whether `result` equals `"SmartNotes"`. If the answer is yes, the test passes silently -- nothing happens, no output, no fanfare. If the answer is no, the test fails loudly -- Python stops and tells you exactly what went wrong.

:::note If you have never written code before
You do not need to understand everything about `def` right now. Functions are taught properly in Phase 2 (Chapter 37). For now, just recognize the pattern: `def test_something():` means "here is a check called something." The indented lines below it are the contents of that check. That is all you need for this lesson.
:::

Two words. `def` labels the check. `assert` insists something is true. The code between them -- the variables, the types, the arithmetic -- is the same Python you have been reading since Lesson 1.

---

## How to Run a Test

Save the test in a file called `test_practice.py` in your SmartNotes project. Then run:

```
$ uv run pytest test_practice.py -v
```

The `-v` flag means "verbose" -- it shows the name and result of each test.

**What passing looks like:**

```
test_practice.py::test_greeting PASSED
```

One line. The word `PASSED`. No drama. That is what a passing test looks like.

**What failing looks like** (if you changed `"SmartNotes"` to `"Smart Notes"` with a space):

```
test_practice.py::test_greeting FAILED

    def test_greeting():
        result: str = "Smart" + "Notes"
>       assert result == "Smart Notes"
E       AssertionError: assert 'SmartNotes' == 'Smart Notes'
```

The `>` arrow points to the line that failed. The `E` line shows what the test expected versus what it got. `assert` insisted that `result` equals `"Smart Notes"`, but `result` was actually `"SmartNotes"` -- no space. The test failed loudly.

That is enough about running tests. You will use `uv run pytest` throughout Chapter 34. For now, the point is: you can check your predictions.

---

## Your First Four Test Predictions

Four tests. Each one uses only vocabulary from Lessons 1-3 -- variables, types, arithmetic, strings, booleans, and comparisons. The only new parts are `def` and `assert`. Your job: predict whether each test passes or fails.

---

### Test 1: String Concatenation

```python
def test_greeting():
    result: str = "Smart" + "Notes"
    assert result == "SmartNotes"
```

**Pause here.** Predict: does this test pass or fail?

**Answer:** Pass. `"Smart" + "Notes"` produces `"SmartNotes"`. The assert checks whether `result` equals `"SmartNotes"`. It does. The test passes silently.

**Investigate:** This is the same string concatenation from Lesson 1, Block 1. The `+` joins strings end to end with no space between them. If you predicted it would fail because of a missing space, look again -- `"SmartNotes"` (the expected value) has no space either. The assert matches.

---

### Test 2: Floor Division

```python
def test_floor_division():
    result: int = 10 // 3
    assert result == 4
```

**Pause here.** Predict: does this test pass or fail?

**Answer:** Fail. `10 // 3` equals `3`, not `4`. Floor division drops the decimal -- you learned this in Lesson 1, Block 2. The assert insists `result` equals `4`, but `result` is `3`. The assertion fails.

**Investigate:** `10 / 3` is `3.333...`. Floor division `//` drops everything after the decimal, giving `3`. The person who wrote this test made a mistake in the expected value -- they wrote `4` instead of `3`. When you run this test, pytest will show:

```
E       assert 3 == 4
```

That single line tells you everything: the code produced `3`, the test expected `4`.

:::tip If you have used other programming languages
Python's `//` operator always floors toward negative infinity. For positive numbers, this is identical to integer division in C or Java. The distinction matters with negative values: Python gives `-7 // 2 = -4`, while C-style truncation gives `-3`.
:::

---

### Test 3: F-String Formatting

```python
def test_price_label():
    price: float = 29.99
    quantity: int = 3
    total: float = price * quantity
    label: str = f"Total: ${total}"
    assert label == "Total: $89.97"
```

**Pause here.** Predict: does this test pass or fail?

**Answer:** Pass. `29.99 * 3` equals `89.97`. The f-string puts that value after `Total: $`, producing `"Total: $89.97"`. The assert checks for exactly that string. It matches.

**Investigate:** Three operations from Lesson 1, Block 3, working together. First, `float * int` produces a `float`. Second, the f-string evaluates `{total}` and inserts the value. Third, the `$` sign is literal text -- it appears in the output as-is. If you predicted failure because of floating-point precision (maybe expecting `89.97000000000001`), your instinct was sound -- that does happen with some float calculations -- but `29.99 * 3` happens to produce exactly `89.97`.

---

### Test 4: Boolean Logic

```python
def test_both_conditions():
    temperature: int = 25
    is_hot: bool = temperature > 30
    is_sunny: bool = True
    both: bool = is_hot and is_sunny
    assert both == True
```

**Pause here.** Predict: does this test pass or fail?

**Answer:** Fail. `25 > 30` is `False`, so `is_hot` is `False`. `False and True` is `False` -- the `and` operator requires both sides to be `True`. The assert insists `both` equals `True`, but `both` is `False`. The test fails.

**Investigate:** This is Lesson 1, Block 4 with different values. In that block, the temperature was `35`, making `is_hot` `True`. Here it is `25`, making `is_hot` `False`. One number changed, and the entire chain of boolean logic flipped. The assert expected the temperature to be above 30, but it is not. When you run this test, pytest shows:

```
E       assert False == True
```

---

## What You Just Did

You read four test functions and predicted their outcomes. Two passed. Two failed. The code inside each test -- the variables, the types, the arithmetic, the strings, the booleans -- used nothing new. Every expression was something you already knew from Lessons 1-3. The only new parts were `def` (a label for the check) and `assert` (an insistence that something is true).

You applied PRIMM to test functions the same way you applied it to code blocks. Predict what the assert checks. Evaluate the expression. Decide: pass or fail. The method does not change. The code just has a wrapper around it.

---

## Exercises

### Exercise 1: Variable Reassignment in a Test

```python
def test_updated_price():
    price: float = 19.99
    price = 24.99
    discount: float = 5.0
    final: float = price - discount
    assert final == 14.99
```

Predict: pass or fail? Remember what you learned about variable reassignment in Lesson 2 -- when a variable appears on the left of `=`, it receives a new value and the old value is gone.

### Exercise 2: Stale Value Error

```python
def test_word_count():
    title_words: int = 8
    body_words: int = 342
    total: int = title_words + body_words
    body_words = 410
    assert total == 418
```

Predict: pass or fail? Trace the variables line by line. When does `total` get its value? When does `body_words` change?

---

## Try With AI

Open Claude Code in your SmartNotes project and try these prompts.

### Prompt 1: Generate a Passing Test

```
Generate a simple Python test function (using def and assert)
that tests a calculation using only variables with type
annotations, arithmetic operators, and assert. Use only str,
int, float, or bool types. No imports. Make the test pass.
Do NOT reveal whether it passes -- let me predict first.
```

Before running `uv run pytest test_practice.py -v`, read the test and predict: will it pass or fail? Evaluate the assert expression using what you know from Lessons 1-3. Then run it and compare.

**What you're learning:** You are applying PRIMM to AI-generated test code -- the same workflow you will use in Chapter 34. The AI writes the test, you read it and predict the outcome, then you verify. This is the prediction loop applied to a new kind of code.

### Prompt 2: Generate a Failing Test

```
Generate a simple Python test function (using def and assert)
that tests a calculation using only variables with type
annotations, arithmetic operators, and assert. Use only str,
int, float, or bool types. No imports. Include a deliberate
mistake in the assert so the test FAILS. Do NOT tell me
which line is wrong -- let me find it.
```

Read the test. Find the line where the assert expects the wrong value. Predict what the correct value should be. Then run `uv run pytest test_practice.py -v` and check the error output -- does it match your prediction?

**What you're learning:** You are combining test reading with bug detection from Lesson 3. The failing assert is like the type bug and logic bug exercises -- you find what is wrong by reading carefully, not by waiting for the crash.

---

## Key Takeaways

1. **`def test_something():` labels a check.** You will learn functions fully in Phase 2 (Chapter 37). For now, recognize the pattern: `def` followed by a name starting with `test_` means "here is a check."

2. **`assert` means "I insist this is true."** Pass = silent. Fail = loud. The assert line is where you focus your prediction.

3. **You predicted test outcomes using skills from Lessons 1-3.** The code inside each test -- string concatenation, floor division, f-strings, boolean logic -- was not new. Only the wrapper was new.

4. **Reading a test is reading code.** PRIMM works on test functions the same way it works on any code block. Predict what the assert checks, evaluate the expression, decide pass or fail.

5. **In Chapter 34, you flip the direction.** Instead of predicting whether someone else's test passes, you write the test -- just the assert line and a few variables -- and AI writes the code that makes it pass.

---

## Looking Ahead

You can now read tests. You know what `def` and `assert` mean. In Chapter 34, you flip the script: instead of predicting whether someone else's test passes, you write the test -- five lines at most -- and AI writes the code that makes it pass. The PRIMM method does not stop. It becomes the verification step: AI generates, you read and predict, you run and compare. Chapter 34 is where reading becomes doing.
