---
sidebar_position: 2
title: "Your First Failing Test"
description: "Learn three new Python words -- return, -> float, and the ellipsis stub. Write your first function specification with type annotations and test assertions. See RED: pyright passes, pytest fails."
keywords:
  [
    "return",
    "type annotation",
    "return type",
    "ellipsis",
    "stub",
    "celsius to fahrenheit",
    "pytest",
    "pyright",
    "failing test",
    "RED",
    "specification",
    "TDG",
  ]
chapter: 46
lesson: 2
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Return Statement Understanding"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can explain what return does in plain English -- it hands a value back from a function so the caller can use it -- and distinguish return from print"

  - name: "Function Stub Writing"
    proficiency_level: "A1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can write a function stub with parameter types, a return type annotation, and an ellipsis body -- and explain why pyright passes while pytest fails"

  - name: "Test Assertion Writing"
    proficiency_level: "A1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can write two assert statements that define expected input-output behavior for a simple arithmetic function"

learning_objectives:
  - objective: "Explain what return does and distinguish it from print"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Student correctly explains that return hands a value back for reuse while print only displays text -- and can identify which one a test assertion needs"

  - objective: "Write a function stub with type annotations and an ellipsis body"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Student writes a syntactically correct stub (def name(param: type) -> type: ...) that passes pyright without errors"

  - objective: "Write two test assertions that specify expected function behavior"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Student writes two assert statements with known input-output pairs that correctly define the function's contract"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (return keyword, -> ReturnType annotation, ... ellipsis stub) at the A1 limit. Each concept is taught individually with a plain-English explanation before combining them. The celsius_to_fahrenheit example is deliberately familiar -- the formula is well-known."

differentiation:
  extension_for_advanced: "After writing the celsius_to_fahrenheit specification, write a second stub for fahrenheit_to_celsius with the inverse formula. Write two tests with known values (32.0 -> 0.0, 212.0 -> 100.0). Verify pyright passes and pytest fails. You now have two specifications ready for Lesson 3."
  remedial_for_struggling: "Focus on one concept at a time. First, just understand return by reading the print-vs-return comparison. Then, read the -> float explanation. Finally, read the ... explanation. Do not try to combine them until each one makes sense on its own. If the combination is confusing, re-read the stub line by line."
---

# Your First Failing Test

James opens his editor. He knows what TDG looks like from Lesson 1 -- he read the worked example, predicted the output, traced the loop. Now he wants to try it himself. He starts typing the function body.

Emma glances at his screen. "What are you writing?"

James does not look up. "The function. celsius_to_fahrenheit. I know the formula -- multiply by nine-fifths, add thirty-two."

Emma raises an eyebrow. "So you are skipping the specification."

"Why would I specify something I already know? That is like writing a purchase order for a pen that is already on my desk." He keeps typing.

Emma does not stop him. "Try it. Run pyright when you are done."

James writes the body, saves the file, and runs pyright. Zero errors. He grins. Then he tries pytest. There are no tests. Pytest has nothing to run.

"Green bar," Emma says. "Except there is no bar. How do you know the formula is correct?"

James pauses. "Because I know the formula."

Emma pulls up three versions on her screen. "You know *a* formula. Is it `celsius * 9 / 5 + 32` or `celsius * 9/5 + 32` or `(celsius * 9) / 5 + 32`? They look the same. Are they?"

James stares at the three versions. Operator precedence. He is not actually sure they all produce the same result. "Okay, let me think... actually, I think they do in Python because multiplication and division have the same precedence and go left to right. But I am not a hundred percent sure."

Emma sits back. "And that is why you write the tests first. The tests do not care about your confidence. They check the number."

James deletes the function body. Types the three dots. Opens the test file. "Stub and tests. Then I let the tests prove it."

Emma nods. "Now you are writing the specification, not the implementation."

---

In Lesson 1, you read a complete TDG cycle and understood the five-step loop. Now you do it yourself -- but only the first two steps: **Specify** and **Check types**. You will learn three new Python words, write a function stub, write two tests, and see your first failing test. The function body stays empty. That is the point.

## Word 1: `return`

In Chapter 45, you learned `def` (labels a function) and `assert` (insists something is true). Now the third word: `return`.

`return` hands a value back from a function. When Python reaches a `return` statement, it stops the function and sends the value back to wherever the function was called.

Here is the simplest example:

```python
def get_greeting() -> str:
    return "Hello, SmartNotes"
```

When you call `get_greeting()`, the function hands back the string `"Hello, SmartNotes"`. You can use that value:

```python
message: str = get_greeting()
print(message)  # prints: Hello, SmartNotes
```

The function runs, hits `return "Hello, SmartNotes"`, and hands that string back. The variable `message` receives it. Then `print(message)` displays it on screen.

### Print is for people. Return is for reuse.

This is the single most common confusion for beginners. `print()` displays a value on your screen. `return` hands a value back to the code that called the function. They look similar but do completely different things.

| | `print()` | `return` |
|---|-----------|----------|
| **What it does** | Displays text on screen | Hands a value back to the caller |
| **Who sees it** | You, the human | The code that called the function |
| **Can a test use it?** | No -- `assert` cannot check what was printed | Yes -- `assert` checks the returned value |
| **Analogy** | A cashier reading your total out loud | A cashier handing you the receipt |

Why does this matter for TDG? Because `assert` checks the value a function *returns*, not what it *prints*. If your function prints the answer instead of returning it, the test cannot verify anything. Every function you specify with TDG must use `return`.

:::note If you have never written code before
Think of a function like a calculator button. You push 5, it shows 10. The `return` is the moment the calculator shows the answer -- it hands the result back to you. Without `return`, the calculator does the math inside but never shows the answer. `print` is like the calculator reading the number aloud -- helpful for you, but another program cannot hear it.
:::

:::tip If you have used other programming languages
`return` works the same as in JavaScript, Java, C, and most other languages. Python's version has no parentheses required: `return x` not `return(x)`. If you omit the `return` statement entirely, Python returns `None` by default.
:::

---

## Word 2: `-> float`

You saw type annotations in Chapter 45: `name: str = "Zia"` tells pyright that `name` is a string. The `-> float` annotation does the same thing for a function's return value.

```python
def celsius_to_fahrenheit(celsius: float) -> float:
```

Read this line aloud: "Define a function called `celsius_to_fahrenheit` that takes a parameter called `celsius` of type `float` and returns a `float`."

The `-> float` is **the promise**. It tells pyright -- and anyone reading the code -- what type of value this function will hand back. Pyright enforces this: if the function returns a string instead of a float, pyright will report an error.

| Annotation | Meaning |
|-----------|---------|
| `celsius: float` | The input must be a float |
| `-> float` | The output will be a float |
| `-> int` | The output will be an integer |
| `-> str` | The output will be a string |
| `-> bool` | The output will be a boolean |

You already know these four types from Chapter 45. The arrow `->` just applies them to the function's return value instead of a variable.

---

## Word 3: `...` (Ellipsis)

The ellipsis -- three dots -- is Python's way of saying "intentionally empty." When you write:

```python
def celsius_to_fahrenheit(celsius: float) -> float: ...
```

You are saying: "This function exists. It takes a float. It returns a float. But I have not written the body yet." The `...` is a placeholder. It is the stub.

### Why `...` and not `pass`?

Python has another "do nothing" keyword: `pass`. But for TDG, `...` is the right choice. Here is why:

- **`...` (ellipsis)** = pyright treats the function as a *stub*. It trusts the type annotations and ignores the missing body. `uv run pyright` reports **0 errors**.

- **`pass`** = pyright treats the function as *real code* with no return statement. Since the annotation says `-> float` but the function returns nothing (None), pyright reports a **type error**.

The difference matters. You want pyright to pass at Step 2 of the TDG loop so you can focus on one thing at a time: first the types (pyright), then the implementation (Claude Code), then the tests (pytest). Using `...` lets you separate those steps cleanly.

---

## Combining All Three: Your First Stub

Put the three words together. Open your SmartNotes project and create a file called `smartnotes/temperature.py`:

```python
def celsius_to_fahrenheit(celsius: float) -> float: ...
```

One line. Read it piece by piece:

| Part | Meaning |
|------|---------|
| `def` | Define a function (Chapter 45, Lesson 4) |
| `celsius_to_fahrenheit` | The function's name -- what it does |
| `(celsius: float)` | It takes one input called `celsius`, which is a float |
| `-> float` | It promises to return a float |
| `: ...` | The body is intentionally empty -- a stub |

Now run the type checker:

```
$ uv run pyright
0 errors, 0 warnings, 0 informations
```

Pyright passes. The types are consistent: a float goes in, a float comes out. The stub tells pyright "trust me, the body will be filled in later."

---

## Your First Two Tests

Now create the test file. In `tests/test_temperature.py`:

```python
from smartnotes.temperature import celsius_to_fahrenheit

def test_freezing_point():
    assert celsius_to_fahrenheit(0.0) == 32.0

def test_boiling_point():
    assert celsius_to_fahrenheit(100.0) == 212.0
```

These are the two tests that define what your function must do. Let us read them:

**Line 1:** `from smartnotes.temperature import celsius_to_fahrenheit` -- this tells Python where to find the function. You saw import statements in Chapter 44.

**Test 1:** "I insist that converting 0.0 degrees Celsius gives 32.0 degrees Fahrenheit." This is the freezing point of water -- 0°C equals 32°F.

**Test 2:** "I insist that converting 100.0 degrees Celsius gives 212.0 degrees Fahrenheit." This is the boiling point of water -- 100°C equals 212°F.

Two tests. Two known facts about temperature conversion. These are your specification.

---

## The RED Moment

Now run the tests:

```
$ uv run pytest tests/test_temperature.py -v
```

```
tests/test_temperature.py::test_freezing_point FAILED
tests/test_temperature.py::test_boiling_point FAILED

    def test_freezing_point():
>       assert celsius_to_fahrenheit(0.0) == 32.0
E       assert None == 32.0

2 failed
```

Both tests fail. The function returned `None` -- because the body is `...`, there is no `return` statement, so Python returns `None` by default. The assert insists the result should be `32.0`, but it got `None`. The test fails loudly.

**This is correct.** The failing test is not a mistake. It is the starting point. In test-driven development, this is called **RED** -- the tests fail because the implementation does not exist yet. Your specification is complete. The tests define what "correct" means. The implementation is AI's job.

Here is where you stand:

| Tool | Result | Meaning |
|------|--------|---------|
| `uv run pyright` | 0 errors | Types are consistent -- the stub is valid |
| `uv run pytest` | 2 FAILED | No implementation yet -- tests cannot pass |

Two tools, two different jobs. Pyright checks the *shape* (types are consistent). Pytest checks the *behavior* (the function does what the tests demand). Right now, the shape is right but the behavior is missing. That is exactly where you want to be before asking AI to generate.

---

## What You Just Wrote

Six lines total. One stub. Two tests. One import. That is your specification. In Lesson 3, you will prompt Claude Code to fill in the `...` with a real implementation, run the tests again, and see GREEN.

---

## Try With AI

Open Claude Code in your SmartNotes project and try these prompts.

### Prompt 1: Explain the Three Words

```
Explain these three Python concepts in one sentence each,
as if I am a complete beginner:
1. The return keyword
2. The -> float annotation
3. The ... (ellipsis) as a function body
```

Compare AI's explanations to what you just learned. Are they consistent? If AI uses jargon you do not recognize, ask it to simplify.

**What you're learning:** You are verifying AI explanations against your own understanding -- the same critical reading you will apply to AI-generated code.

### Prompt 2: Write a Different Stub

```
Write a function stub (using ... for the body) for a function
called word_count that takes a text parameter of type str and
returns an int. Include a -> int return type annotation.
Do not write the implementation.
```

Read the stub AI generates. Does it match the pattern you just learned? Check: does it have `def`, a parameter with a type, `-> int`, and `...`?

**What you're learning:** You are applying the stub pattern to a different function -- testing whether you understand the structure, not just the specific example.

### Prompt 3: Generate Test Cases

```
I have this function stub:
def word_count(text: str) -> int: ...

Write two test functions using assert that define what
word_count should do. Use simple, obvious test cases.
```

Read the tests AI generates. Predict: do the test values make sense? For example, if the test says `word_count("hello world") == 2`, does that match your understanding of "word count"? This is specification review -- you are checking whether the *tests* are correct, not the implementation.

**What you're learning:** You are reviewing AI-generated specifications (tests) -- a skill you will need when AI suggests test cases for your functions.

---

## PRIMM-AI+ Practice: Writing Specifications

### Predict [AI-FREE]

Read this stub and tests without running them:

```python
def inches_to_cm(inches: float) -> float: ...

def test_one_inch():
    assert inches_to_cm(1.0) == 2.54

def test_one_foot():
    assert inches_to_cm(12.0) == 30.48
```

Predict: if you run `uv run pyright`, will it report errors? If you run `uv run pytest`, will the tests pass or fail? Write both predictions and a **confidence score from 1-5**.

<details>
<summary>Check your prediction</summary>

Pyright: **0 errors**. The stub uses `...`, so pyright treats it as a valid stub. The types are consistent: `float` in, `float` out.

Pytest: **2 FAILED**. The body is `...`, so the function returns `None`. Both assertions check `None` against a float value. Both fail.

If you predicted both correctly with confidence 4-5, you understand the pyright/pytest split -- the key insight of this lesson.

</details>

### Run

Create the stub and tests in your SmartNotes project. Run `uv run pyright` and `uv run pytest tests/test_inches.py -v`. Compare to your predictions.

### Investigate

The error says `assert None == 2.54`. Explain in one sentence *why* the function returns `None`.

**Error Taxonomy:** This is not a type, logic, or specification error -- it is an *incomplete implementation*. The `...` body means Python returns `None` by default. This is the expected state at Step 2 of TDG.

### Modify

Change `test_one_foot` to check 6 inches instead. Calculate `6.0 × 2.54` by hand, update the assertion. Predict: will pyright still pass? Will pytest still fail?

### Make [Mastery Gate]

Write your own stub and two tests for a function of your choice. Some ideas:

- `kg_to_pounds(kg: float) -> float` (1 kg = 2.205 pounds)
- `minutes_to_hours(minutes: int) -> float` (divide by 60)
- `area_of_rectangle(width: float, height: float) -> float` (width × height)

Your specification must:
1. Have a stub with `...` and a return type annotation
2. Have two tests with known input-output pairs
3. Pass `uv run pyright` with 0 errors
4. Fail `uv run pytest` (RED -- because the body is still `...`)

If all four conditions are met, you have written a complete TDG specification. You are ready for Lesson 3.

---

## Key Takeaways

1. **`return` hands a value back from a function.** Print is for people. Return is for reuse. Tests check return values, not printed output.

2. **`-> float` is the promise.** It tells pyright and every reader what type the function returns. Pyright enforces it -- if the implementation returns the wrong type, pyright catches it.

3. **`...` means "intentionally empty."** The ellipsis makes the function a stub. Pyright trusts the type annotations and ignores the missing body. Pytest fails because there is no implementation. This separation -- types pass, tests fail -- is the starting point of TDG.

4. **RED is the starting point, not a problem.** A failing test means your specification is complete and the implementation is missing. That is exactly where you want to be before prompting AI.

5. **Six lines is a complete specification.** One stub line plus five test lines (import + two test functions) fully define what the function must do. AI needs nothing more.

---

## Looking Ahead

You have your first RED test. Pyright passes. Pytest fails. The specification is complete. In Lesson 3, you prompt Claude Code to replace the `...` with a real implementation. You will see GREEN for the first time -- and then you will read the generated code with PRIMM to make sure you understand *how* it works, not just that it passes.

---

James stares at the two red failures on his screen. The stub. The tests. The intentionally empty body. He had wanted to write the formula himself ten minutes ago. Now the red feels like progress.

"It is strange," he says. "The failing tests feel like I accomplished something."

Emma's voice comes from across the room. "That is because you did. You wrote a contract that a machine can verify. That is harder than writing the formula."
