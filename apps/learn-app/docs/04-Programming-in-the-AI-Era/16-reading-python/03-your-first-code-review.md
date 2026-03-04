---
sidebar_position: 3
title: "Your First Code Review -- Catching a Bug"
description: "Apply PRIMM and trace tables to a 15-line SmartNotes code excerpt, find a deliberate type mismatch bug, and discover why human reading and automated tools like Pyright are both essential for verification."
keywords:
  [
    "code review",
    "python",
    "type mismatch",
    "TypeError",
    "pyright",
    "PRIMM",
    "trace tables",
    "bug detection",
    "type annotations",
    "reading code",
    "SmartNotes",
    "verification",
    "static analysis",
  ]
chapter: 16
lesson: 3
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Code Review Through Reading"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can read a 15-20 line Python code block, apply PRIMM and trace tables systematically, and identify a type mismatch bug before running the code"

  - name: "Type Bug Detection"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can identify when a variable's type annotation conflicts with its usage in an expression (e.g., str used in arithmetic with int) and explain why Python raises a TypeError"

  - name: "Human vs Automated Verification"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can explain which bugs Pyright catches (type mismatches) and which bugs only a human reader catches (logic errors with correct types), and why professional verification uses both"

learning_objectives:
  - objective: "Find a type mismatch bug in a 15-line Python code block by applying PRIMM and trace tables"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Student builds a trace table for the SmartNotes excerpt, identifies the line where int + str causes a TypeError, and explains why the bug occurs -- before running the code"

  - objective: "Distinguish between type bugs that Pyright catches and logic bugs that only human reading catches"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Given two buggy code blocks (one type bug, one logic bug), student correctly classifies which Pyright would flag and which requires human reading, with a one-sentence explanation for each"

  - objective: "Perform a complete code review on a short Python code block using PRIMM and trace tables as a systematic toolkit"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student reviews an unseen 8-12 line code block, builds a trace table, identifies the bug (type or logic), and states the fix -- completing the full review cycle without hints"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (code review as active bug-hunting, type bugs vs logic bugs, human + automated verification) within the A2 limit. Students already know PRIMM (Lesson 1) and trace tables (Lesson 2). The new load is applying both tools together on longer code and understanding the distinction between two categories of bugs."

differentiation:
  extension_for_advanced: "After completing the exercises, write a 12-line code block that contains both a type bug AND a logic bug. Give it to an AI assistant and ask it to find the bugs. Compare the AI's analysis with your own trace table -- did it catch both? Did it miss the logic bug? This tests whether AI tools have the same type-vs-logic blind spots as Pyright."
  remedial_for_struggling: "Focus on the main SmartNotes code block only. Copy it into your SmartNotes main.py and run it -- read the error message carefully. Then go back to the code and build the trace table one line at a time on paper. When you reach the line that causes the error, circle it. Write one sentence explaining why int + str does not work. Skip the second code block and exercises until the first one feels solid."
---

# Your First Code Review -- Catching a Bug

In Lesson 1, you learned PRIMM -- predict, run, investigate -- and practiced on short two-to-four line blocks. In Lesson 2, you built trace tables to track variable state across longer code where values change. Now you combine both tools on real project code -- and this time, the code has a bug.

Picture this scenario. Claude Code just generated a statistics module for SmartNotes. It calculates how many words a student has written, their reading speed, and whether their final score passes the threshold. James glances at it, sees that the variable names make sense, and accepts the code. Emma opens a trace table. By line eleven, she spots the problem -- a variable that looks like a number but is actually text. The code will crash the moment it runs. Emma rejects it, fixes one line, and moves on. James discovers the crash twenty minutes later, confused about why addition "stopped working."

This lesson puts you in Emma's position. You are the reviewer. Your job is not to understand the code -- you already know how to do that. Your job is to find what is wrong.

---

## What Is a Code Review?

A code review is reading someone else's code to check for problems. In professional teams, every change is reviewed by at least one other person before it reaches the final product. No code ships without a second pair of eyes.

:::note If you have never written code before
A code review is like proofreading a classmate's essay -- you are looking for mistakes, not just reading. The difference is that with code, mistakes can crash an entire application rather than just confuse a reader.
:::

:::tip If you have done code reviews in another language
This is a lightweight version of the code review process you know from pull requests. The principles are identical -- you are checking for correctness, not just readability -- but the scope here is a single code block rather than a multi-file changeset.
:::

A code review is different from reading for understanding. When you read to understand, you ask "what does this do?" When you review, you ask "what does this do *wrong*?" The shift is subtle but important. Understanding accepts the code at face value. Reviewing challenges it.

Your toolkit for reviewing is already built:

| Tool | What It Does in a Review |
|------|--------------------------|
| **PRIMM** | You predict what each section should produce, then check if it actually does |
| **Trace tables** | You track every variable line by line, watching for the moment a value stops making sense |

You do not need new techniques. You need to apply the techniques you have with a reviewer's mindset: assume the code has a problem, and your job is to find it.

---

## The SmartNotes Code

Open Claude Code in your SmartNotes project and type this prompt:

```
Generate a note statistics calculator for SmartNotes that computes
total words, reading speed, and whether a final score passes a
threshold. Use only variables with type annotations, arithmetic,
and print. About 15 lines. Do not include functions, imports, or
control flow.
```

AI will generate a statistics module. It might look slightly different each time, but the pattern will be similar: several variables, some arithmetic, and a few `print()` calls.

Here is what a typical generation looks like. This is the version we will review together -- it contains a deliberate bug:

```python
# SmartNotes v0.1 -- Note Statistics Calculator
# Calculates basic statistics about a student's notes

note_count: int = 12
words_per_note: int = 150
total_words: int = note_count * words_per_note

study_hours: float = 2.5
words_per_hour: float = total_words / study_hours

passing_grade: int = 70
current_score: int = 85
bonus_points: str = "10"
final_score: int = current_score + bonus_points

is_passing: bool = final_score >= passing_grade

print(f"Total words written: {total_words}")
print(f"Reading speed: {words_per_hour} words/hour")
print(f"Final score: {final_score}")
print(f"Passing: {is_passing}")
```

Copy this code into your SmartNotes `main.py` file. **Do not run it yet.** Your job is to find the bug by reading, not by waiting for the crash.

**Pause here.** Before reading further, try to find the bug. Read each line, check each type annotation, and ask: does this operation make sense for these types?

---

## Step 1: Predict (Build the Trace Table)

Work through the code line by line, building a trace table as you go. The columns are every variable in the code.

**Lines 1-2**: Comments. No variables created, nothing to trace.

**Line 3**: `note_count: int = 12`

| Line | `note_count` | `words_per_note` | `total_words` | `study_hours` | `words_per_hour` | `passing_grade` | `current_score` | `bonus_points` | `final_score` | `is_passing` | Output |
|------|-------------|-------------------|---------------|---------------|-------------------|-----------------|-----------------|----------------|---------------|-------------|--------|
| 3 | `12` | -- | -- | -- | -- | -- | -- | -- | -- | -- | |

**Line 4**: `words_per_note: int = 150`

| Line | `note_count` | `words_per_note` | `total_words` | ... |
|------|-------------|-------------------|---------------|-----|
| 3 | `12` | -- | -- | |
| 4 | `12` | `150` | -- | |

**Line 5**: `total_words: int = note_count * words_per_note`
Look at the row above: `12 * 150 = 1800`.

| Line | `note_count` | `words_per_note` | `total_words` | ... |
|------|-------------|-------------------|---------------|-----|
| 5 | `12` | `150` | `1800` | |

**Lines 7-8**: `study_hours` becomes `2.5`, then `words_per_hour` becomes `1800 / 2.5 = 720.0`.

So far, no problems. Every operation matches its types: `int * int` produces `int`, `int / float` produces `float`. The trace table confirms the values make sense.

**Lines 10-11**: `passing_grade` becomes `70`, `current_score` becomes `85`. Both are `int`. Still fine.

**Line 12**: `bonus_points: str = "10"`

Stop. Look at the type annotation: `str`. Look at the value: `"10"`. The quotes make this a *string* -- text that happens to contain the characters 1 and 0. It is not the number ten. It is the word "10".

:::note If you have never written code before
This kind of mistake -- putting quotes around a number -- is extremely common. You are not "bad at coding" if you miss it at first. The quotes are small, and `"10"` looks a lot like `10` at a glance. That is exactly why trace tables matter: they force you to write down the type, making the quotes impossible to ignore.
:::

**Line 13**: `final_score: int = current_score + bonus_points`

This line tries to add `current_score` (an `int` with value `85`) to `bonus_points` (a `str` with value `"10"`). Python cannot add a number and a string. This line will crash.

:::tip If you have used statically typed languages like Java or C#
In those languages, this would be a compile-time error -- the compiler would refuse to build the program. Python's type annotations give you the same safety when combined with Pyright, but Python itself does not enforce types at runtime. The crash happens when the code actually executes, not when it is loaded.
:::

Here is the complete trace table up to the crash:

| Line | `note_count` | `words_per_note` | `total_words` | `study_hours` | `words_per_hour` | `passing_grade` | `current_score` | `bonus_points` | `final_score` | `is_passing` | Output |
|------|-------------|-------------------|---------------|---------------|-------------------|-----------------|-----------------|----------------|---------------|-------------|--------|
| 3 | `12` | -- | -- | -- | -- | -- | -- | -- | -- | -- | |
| 4 | `12` | `150` | -- | -- | -- | -- | -- | -- | -- | -- | |
| 5 | `12` | `150` | `1800` | -- | -- | -- | -- | -- | -- | -- | |
| 7 | `12` | `150` | `1800` | `2.5` | -- | -- | -- | -- | -- | -- | |
| 8 | `12` | `150` | `1800` | `2.5` | `720.0` | -- | -- | -- | -- | -- | |
| 10 | `12` | `150` | `1800` | `2.5` | `720.0` | `70` | -- | -- | -- | -- | |
| 11 | `12` | `150` | `1800` | `2.5` | `720.0` | `70` | `85` | -- | -- | -- | |
| 12 | `12` | `150` | `1800` | `2.5` | `720.0` | `70` | `85` | `"10"` | -- | -- | |
| 13 | CRASH | | | | | | | | | | |

The trace table makes the problem visible. Row 12 shows `bonus_points` holding a string. Row 13 tries to use that string in arithmetic. The types do not match.

---

## Step 2: Run

Now run the buggy code. Pyright is a *static type checker* -- it reads your code *without running it* and checks whether the types make sense. You installed it in Chapter 15 as part of your discipline stack. Run Pyright first, then Python:

```
$ uv run pyright main.py
```

**Pyright output:**

```
main.py:13:37: error: Operator "+" not supported for types "int" and "str"
  Operand types: "int" and "str" (reportOperatorIssue)
1 error, 0 warnings, 0 informations
```

Pyright found the same bug you found. It points to line 13 and says the `+` operator does not work between `int` and `str`. Pyright found it *without running the code* -- it analyzed the types and caught the mismatch statically.

Now run the code with Python to see the runtime error:

```
$ uv run python main.py
```

**Python output:**

```
Traceback (most recent call last):
  File "main.py", line 13, in <module>
    final_score: int = current_score + bonus_points
                       ~~~~~~~~~~~~~~^~~~~~~~~~~~~~
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Compare both outputs to your trace table prediction. Line 13, exactly where your table predicted the crash. Python tells you the specific problem: it cannot use `+` between an `int` and a `str`. Pyright told you the same thing without even running the code.

If you caught the bug during the Predict step -- before running anything -- that is exactly the skill this chapter teaches. You found the problem by reading, not by waiting for the crash.

---

## Step 3: Investigate

Why did this happen? Three facts combine to create this bug:

1. **`bonus_points` has type annotation `str`** -- the code explicitly says this variable holds text
2. **The value `"10"` is in quotes** -- quotes make it a string, not a number
3. **Python does not automatically convert types** -- adding `int + str` is an error, not an automatic conversion

The type annotation and the value agree with each other: `str = "10"` is a valid string. The bug is that the *intent* was a number, but the *code* wrote a string. Someone (or some AI) put quotes around `10` by mistake.

**The fix**: Change the type and remove the quotes.

```python
# Bug:
bonus_points: str = "10"

# Fix:
bonus_points: int = 10
```

With this fix, line 13 becomes `85 + 10 = 95`, `final_score` is `95`, and `is_passing` becomes `True`.

**Fixed output:**

```
$ uv run python main.py
Total words written: 1800
Reading speed: 720.0 words/hour
Final score: 95
Passing: True
```

---

## A Logic Bug That Pyright Misses

Ask Claude Code to generate another SmartNotes snippet:

```
Generate a 5-line Python code block that calculates the average
note length from total_notes and total_words for SmartNotes. Use
only variables with type annotations, arithmetic, and print.
Do not include functions, imports, or control flow.
```

The AI will generate something that calculates an average. Here is a version that contains a logic bug -- a mistake that Pyright cannot catch:

```python
# SmartNotes v0.1 -- Average Note Length
total_notes: int = 5
total_words: int = 750
average_length: float = total_notes / total_words
print(f"Average words per note: {average_length}")
```

Run Pyright on this code:

```
$ uv run pyright main.py
```

**Pyright output:**

```
0 errors, 0 warnings, 0 informations
```

Pyright sees nothing wrong. Every type checks out: `int / int` produces `float`, and the result is stored in a `float` variable. The types are perfect.

Now apply PRIMM. Predict the output.

**Trace table:**

| Line | `total_notes` | `total_words` | `average_length` | Output |
|------|---------------|---------------|-------------------|--------|
| 2 | `5` | -- | -- | |
| 3 | `5` | `750` | -- | |
| 4 | `5` | `750` | `0.006666...` | |
| 5 | `5` | `750` | `0.006666...` | `Average words per note: 0.006666666666666667` |

Run the code to confirm:

```
$ uv run python main.py
Average words per note: 0.006666666666666667
```

The average words per note is `0.0067`? That makes no sense. If a student wrote 750 words across 5 notes, the average should be 150 words per note, not a fraction of a word.

The bug: the division is backwards. The code divides `total_notes / total_words` (5 / 750) when it should divide `total_words / total_notes` (750 / 5).

```python
# Bug:
average_length: float = total_notes / total_words    # 5 / 750 = 0.0067

# Fix:
average_length: float = total_words / total_notes    # 750 / 5 = 150.0
```

This is a *logic bug*. The types are all correct -- dividing two integers into a float is perfectly valid Python. Pyright has no way to know that you meant to divide in the other direction. Only a human reader, applying PRIMM and checking whether the result makes sense, catches this.

:::note If you have never written code before
A logic bug means the code runs fine but gives the wrong answer -- like a calculator that adds when it should subtract. The program does not crash, and no tool flags an error. You catch it by asking "does this answer make sense?" and using your knowledge of the real world. In this case, you know that average words per note should be a reasonable number -- maybe 50, 100, or 200. When the code produces 0.0067, your common sense flags it immediately. Experienced developers sometimes miss logic bugs because they focus on syntax and types rather than asking that question.
:::

---

## Two Kinds of Bugs, Two Kinds of Review

This lesson demonstrated two categories of bugs:

| Bug Type | Example | Pyright Catches It? | Human Catches It? |
|----------|---------|---------------------|-------------------|
| **Type bug** | Adding `int + str` | Yes -- type mismatch detected | Yes -- trace table shows mismatched types |
| **Logic bug** | Dividing backwards (`5 / 750` instead of `750 / 5`) | No -- types are correct | Yes -- result does not make sense |

Professional verification uses both:

- **Automated tools (Pyright, ruff, pytest)** catch mechanical errors -- type mismatches, unused variables, formatting issues. They are fast and tireless.
- **Human reading (PRIMM, trace tables)** catches logical errors -- wrong formulas, backwards operations, values that do not make sense. They require judgment.

:::tip If you have used linting or CI/CD pipelines at work
This is the same principle as linting plus code review in professional workflows -- automated tools catch mechanical issues, humans catch intent mismatches. The combination is what makes production code reliable. Neither alone is sufficient.
:::

---

## Exercises

Practice your code review skills on these code blocks. Each one has a bug. Your job: build a trace table, find the bug, classify it (type bug or logic bug), and state the fix.

### Exercise 1: Grade Calculator

```python
student_name: str = "Zia"
exam_score: int = 78
homework_score: str = "15"
total: int = exam_score + homework_score
grade_message: str = f"{student_name} scored {total}"
print(grade_message)
```

Build the trace table. What happens on the `total` line? Is this a type bug or a logic bug? What is the fix?

### Exercise 2: Percentage Error

```python
correct_answers: int = 18
total_questions: int = 20
percentage: float = correct_answers / total_questions
print(f"Score: {percentage}%")
```

Build the trace table. The code runs without crashing -- but is the output what a teacher would expect? Is this a type bug or a logic bug?

Hint: What does a percentage look like? `0.9` or `90`?

### Exercise 3: Word Counter

```python
title_words: int = 8
body_words: int = 342
footer_words: int = 12
total_words: int = title_words + body_words
average_section: float = total_words / 3
print(f"Total: {total_words}, Average per section: {average_section}")
```

Build the trace table. The code runs without crashing and the types are correct. But is `total_words` actually the total of all words? Look at every addition carefully. Is this a type bug or a logic bug?

---

## Try With AI

Open Claude Code in your SmartNotes project. Try these prompts to practice code review with AI-generated code.

### Prompt 1: Generate a Type Bug

```
Generate a 10-line Python code block for a SmartNotes feature
that uses only variables with type annotations (str, int, float,
bool), arithmetic operators, and print(). Include one deliberate
type mismatch bug where a variable has the wrong type for how
it is used. Do NOT reveal which line has the bug.
```

Build a trace table. Find the bug. Then tell the AI what you found:

```
I found the bug on line [N]. The variable [name] is declared
as [type] but used in [operation] which requires [other type].
Is my analysis correct?
```

**What you're learning:** You are practicing type-bug detection on unfamiliar code -- the exact scenario you face when reviewing AI-generated output. The AI creates the challenge; you apply PRIMM and trace tables to find it. This is the core code review skill: reading code you did not write and catching what is wrong.

### Prompt 2: Generate a Logic Bug

```
Generate a 10-line Python code block that calculates statistics
for a student's notes. Use only variables with type annotations
(str, int, float, bool), arithmetic, and print(). All types
must be correct -- Pyright should show 0 errors. But include
one logic error where the calculation produces a wrong result
(like dividing in the wrong order or forgetting to include a
variable). Do NOT reveal which line has the logic bug.
```

Build a trace table. Find the bug. Then tell the AI what you found:

```
I found the logic bug on line [N]. The code calculates [what it
does] but the result is [wrong value] when it should be [correct
value] because [explanation]. Is my analysis correct?
```

**What you're learning:** You are practicing the harder kind of code review -- finding bugs that pass all automated checks. Pyright would say "0 errors" for this code, so the only way to find the problem is human reading: predicting what the values should be and comparing that to what the code actually produces.

### Prompt 3: The Boundary Between Human and Machine

```
Show me a 10-line Python code block using only variables with type
annotations, arithmetic, and print(). Run Pyright on it and tell
me what Pyright reports. Then tell me: are there any logic bugs
that Pyright missed? Explain the difference between what Pyright
catches and what only a human reviewer would catch.
```

**What you're learning:** You are seeing the boundary between automated and human verification -- the same boundary that defines professional code review practice. Pyright catches type mismatches mechanically. Human reviewers catch intent mismatches through judgment. Understanding where each tool is strong and where it is blind is the foundation of reliable verification.

---

## Key Takeaways

1. **A code review means reading code to find problems -- not just understanding.** The shift from "what does this do?" to "what does this do wrong?" is the reviewer's mindset.

2. **PRIMM and trace tables are your code review toolkit.** Predict what the code should produce, trace each variable, and compare your expectations to the actual behavior.

3. **Type bugs crash at runtime -- Pyright catches them before you run.** When a variable's type does not match its usage (like adding `int + str`), Pyright flags it statically. The type annotations you write exist for exactly this purpose.

4. **Logic bugs pass all type checks -- only human reading catches them.** A backwards division or a missing variable produces the wrong answer with all the right types. No automated tool knows your intent.

5. **Professional verification combines human reading and automated tools.** Pyright, ruff, and pytest catch mechanical errors. PRIMM and trace tables catch logical errors. You need both.

---

## Looking Ahead

You can read Python. You can predict what code does line by line, trace variable changes through reassignment, and catch bugs -- both the type mismatches that crash programs and the logic errors that produce wrong answers silently. In Chapter 17, the direction reverses. Instead of reading code someone else wrote, you will describe what you want in a specification and let AI generate the code. Then you will verify that code using the PRIMM method and trace tables you built here. Reading does not stop when writing begins -- it becomes the verification step in every cycle of AI-assisted development.
