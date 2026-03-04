---
sidebar_position: 2
title: "Trace Tables -- When Your Brain Takes Shortcuts"
description: "Learn to build trace tables that track every variable's value at every line. Catch the most common prediction error -- using old values after reassignment -- by making variable state visible."
keywords:
  [
    "trace tables",
    "variable reassignment",
    "python",
    "reading code",
    "PRIMM",
    "predict output",
    "variable tracking",
    "mental model",
    "type annotations",
    "debugging",
    "code tracing",
  ]
chapter: 16
lesson: 2
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Trace Table Construction"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can build a complete trace table for a 4-6 line Python code block with variable reassignment, correctly tracking each variable's value after each line executes"

  - name: "Variable Reassignment Tracking"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can explain that when a variable appears on the left of = it receives a new value, and the old value is permanently replaced -- and can identify where reassignment occurs in a code block"

  - name: "Prediction Error Detection"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can identify the common prediction error of using a variable's original value instead of its updated value and explain why a trace table prevents this mistake"

learning_objectives:
  - objective: "Build a trace table for a 4-6 line Python code block that includes variable reassignment"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student constructs a trace table with correct columns (Line, each variable, Output) and fills in every row accurately for at least 2 of 3 practice blocks"

  - objective: "Identify where variable reassignment occurs and explain that the old value is replaced"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Student highlights the reassignment lines in a code block and states the old and new values -- correctly distinguishing between the first assignment and later reassignments"

  - objective: "Detect the common shortcut error of using a variable's original value after reassignment"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Given a code block and a wrong prediction, student explains why the prediction is wrong by pointing to the specific line where the variable was reassigned and showing the correct trace"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (trace tables as a tool, variable reassignment replacing old values, the stale-value shortcut error) within the A2 limit. Students already know variables and expressions from Lesson 1. The new load is the tracking method itself and the concept that values can change."

differentiation:
  extension_for_advanced: "After completing the three practice blocks, create your own 6-line code block that would trick a classmate into using a stale value. Build the trace table, then swap with a partner (or use AI) and see if they catch the trap. Try including a line where the variable is reassigned using its own current value (like total = total - discount)."
  remedial_for_struggling: "Focus on Block 1 only. Copy the code into your SmartNotes main.py. Before running it, draw the trace table on paper with one column per variable. Fill in the table one line at a time, saying out loud: 'After this line, width is 8' and so on. Run the code after completing the table and compare. If any cell is wrong, re-trace just that line. Repeat with Block 2 only after Block 1 matches perfectly."
---

# Trace Tables -- When Your Brain Takes Shortcuts

In Lesson 1, you practiced Predict-Run-Investigate on short code blocks where each variable was set once and never changed. Those predictions felt manageable -- you could hold two or three values in your head and follow the logic to the output. Now the code gets longer, and something new happens: variables change.

Look at this code and predict the output before reading further:

```python
count: int = 10
bonus: int = 5
count = count + bonus
bonus = bonus * 2
total: int = count + bonus
print(total)
```

If you predicted `20`, you are in good company -- and you are wrong. The correct answer is `25`. Most beginners make this mistake because their brain uses a shortcut: it remembers the *first* value it saw for each variable and keeps using that value even after the code changes it. With two-line blocks, the shortcut works. With five-line blocks where variables update, it fails. This lesson gives you a tool that eliminates the shortcut entirely.

---

## Why Your Brain Takes Shortcuts

Your working memory can hold about four to seven items at once. When a code block is two lines long, you can track every variable without effort. But the moment code reaches five or six lines -- and variables start changing -- your brain quietly substitutes the value it remembers most easily. That is usually the *first* value it encountered.

This creates a specific, predictable error: **using the original value of a variable after it has been reassigned.** It is not a sign of poor intelligence. It is a sign that working memory has limits, and the code has exceeded them.

:::note If this is your first time seeing a variable change
In Lesson 1, every variable was set once: `price: float = 29.99` stayed `29.99` for the entire block. That might have given you the impression that variables are permanent labels. They are not. A variable is a name that points to a value -- and you can point it at a different value at any time. The code `count = count + bonus` takes the *current* value of `count`, adds `bonus`, and stores the result back into `count`. The old value disappears.
:::

Consider the opening example. Here is what the shortcut error looks like:

| What Your Brain Does | Resulting (Wrong) Calculation |
|---------------------|-------------------------------|
| Remembers `count` as `10` | Uses `10` in the final line |
| Remembers `bonus` as `5` | Uses `5` in the final line |
| Calculates `total = 10 + 5` | Gets `15` -- or `20` if they half-trace |

The actual values at the final line are `count = 15` and `bonus = 10`, giving `total = 25`. The brain's shortcut skipped the two reassignment lines entirely.

The fix is not "try harder" or "be more careful." The fix is a tool that makes every value visible at every step.

:::note If you got the opening example right
You may have traced it carefully in your head. That works now -- but it becomes unreliable as code grows. Trace tables are like showing your work in math class. Even when you can do the arithmetic mentally, writing it down catches errors that confidence misses.
:::

---

## What Is a Trace Table?

A trace table is a grid that tracks every variable's value after every line of code executes. It has one column for each variable, one column for the line number, and one column for any output.

:::tip If you already debug in your head
You may be thinking "I can track variables without drawing a grid." Many experienced developers feel that way -- and most of them have spent hours hunting a bug that a trace table would have caught in seconds. Mental tracing fails in predictable ways: you skip a reassignment, you confuse two variables with similar names, you carry a stale value forward. Trace tables catch exactly those failures. Think of them as spell-check for your mental model.
:::

Here is a simple example. Given this code:

```python
a: int = 3
b: int = 7
a = a + b
print(a)
```

The trace table looks like this:

| Line | `a` | `b` | Output |
|------|-----|-----|--------|
| 1 | `3` | -- | |
| 2 | `3` | `7` | |
| 3 | `10` | `7` | |
| 4 | `10` | `7` | `10` |

**How to read it**: Each row shows the state of every variable *after* that line executes. On line 1, `a` becomes `3` and `b` does not exist yet (shown as `--`). On line 2, `b` becomes `7`. On line 3, `a` is updated to `a + b`, which is `3 + 7 = 10`. The key: you use the values from the *previous row* to calculate the new row. On line 4, `print(a)` outputs the current value of `a`, which is `10`.

To run this yourself, paste the code into your SmartNotes `main.py` and run it:

```
$ uv run python main.py
10
```

**The rule that makes trace tables work**: Always look at the row above to find a variable's current value. Never go back to the first row.

---

## Building Your First Trace Table

Let us trace the opening example step by step. Here is the code again:

```python
count: int = 10
bonus: int = 5
count = count + bonus
bonus = bonus * 2
total: int = count + bonus
print(total)
```

Start with an empty table. The columns are: Line, `count`, `bonus`, `total`, Output.

**Line 1**: `count: int = 10`
`count` is assigned `10`. No other variables exist yet.

| Line | `count` | `bonus` | `total` | Output |
|------|---------|---------|---------|--------|
| 1 | `10` | -- | -- | |

**Line 2**: `bonus: int = 5`
`bonus` is assigned `5`. `count` has not changed.

| Line | `count` | `bonus` | `total` | Output |
|------|---------|---------|---------|--------|
| 1 | `10` | -- | -- | |
| 2 | `10` | `5` | -- | |

**Line 3**: `count = count + bonus`
This is the first reassignment. Look at the row above: `count` is `10`, `bonus` is `5`. So `count + bonus` is `10 + 5 = 15`. The variable `count` is now `15`. The old value `10` is gone.

| Line | `count` | `bonus` | `total` | Output |
|------|---------|---------|---------|--------|
| 1 | `10` | -- | -- | |
| 2 | `10` | `5` | -- | |
| 3 | **`15`** | `5` | -- | |

**Line 4**: `bonus = bonus * 2`
Look at the row above: `bonus` is `5`. So `bonus * 2` is `5 * 2 = 10`. The variable `bonus` is now `10`. The old value `5` is gone.

| Line | `count` | `bonus` | `total` | Output |
|------|---------|---------|---------|--------|
| 1 | `10` | -- | -- | |
| 2 | `10` | `5` | -- | |
| 3 | **`15`** | `5` | -- | |
| 4 | `15` | **`10`** | -- | |

**Line 5**: `total: int = count + bonus`
Look at the row above: `count` is `15`, `bonus` is `10`. So `total = 15 + 10 = 25`.

| Line | `count` | `bonus` | `total` | Output |
|------|---------|---------|---------|--------|
| 1 | `10` | -- | -- | |
| 2 | `10` | `5` | -- | |
| 3 | **`15`** | `5` | -- | |
| 4 | `15` | **`10`** | -- | |
| 5 | `15` | `10` | `25` | |

**Line 6**: `print(total)`
Output the current value of `total`.

| Line | `count` | `bonus` | `total` | Output |
|------|---------|---------|---------|--------|
| 1 | `10` | -- | -- | |
| 2 | `10` | `5` | -- | |
| 3 | **`15`** | `5` | -- | |
| 4 | `15` | **`10`** | -- | |
| 5 | `15` | `10` | `25` | |
| 6 | `15` | `10` | `25` | `25` |

To verify, paste the code into `main.py` and run it:

```
$ uv run python main.py
25
```

Notice what the trace table reveals: `count` changed from `10` to `15` on line 3, and `bonus` changed from `5` to `10` on line 4. If you used the original values (`10 + 5 = 15`) or half-traced (`10 + 10 = 20`), the trace table shows exactly where your mental shortcut went wrong.

:::tip If you already work with spreadsheets
A trace table works like tracking formulas across spreadsheet rows. Each row is a snapshot of all your "cells" after one operation. If you can follow a spreadsheet formula that references other cells, you can build a trace table.
:::

---

## Practice -- Three Trace Tables

Now it is your turn. For each code block below:

1. **Read** the code carefully
2. **Build** the trace table on paper or in a text file (draw the grid, fill it row by row)
3. **Predict** the output from your completed trace table
4. **Run** the code in your SmartNotes `main.py`:

```
$ uv run python main.py
```

5. **Investigate** -- if your prediction was wrong, find the row where your trace went off track

---

### Block 1: Area vs. Perimeter

```python
width: int = 8
height: int = 5
area: int = width * height
width = width + 2
perimeter: int = 2 * (width + height)
print(f"Area: {area}, Perimeter: {perimeter}")
```

**Pause here.** Build the trace table before reading on.

**Trace Table:**

| Line | `width` | `height` | `area` | `perimeter` | Output |
|------|---------|----------|--------|-------------|--------|
| 1 | `8` | -- | -- | -- | |
| 2 | `8` | `5` | -- | -- | |
| 3 | `8` | `5` | `40` | -- | |
| 4 | **`10`** | `5` | `40` | -- | |
| 5 | `10` | `5` | `40` | `30` | |
| 6 | `10` | `5` | `40` | `30` | `Area: 40, Perimeter: 30` |

Run it to verify:

```
$ uv run python main.py
Area: 40, Perimeter: 30
```

**Investigate**: The key insight is that `area` was calculated on line 3, when `width` was still `8`. So `area` is `8 * 5 = 40`. Then `width` changed to `10` on line 4. But `area` does not update -- it keeps the value it was given on line 3. The `perimeter` calculation on line 5 uses the *new* `width` of `10`: `2 * (10 + 5) = 30`.

**The common wrong answer**: `Area: 40, Perimeter: 26`. This happens if you use the *old* `width` of `8` for perimeter: `2 * (8 + 5) = 26`. The trace table shows that by line 5, `width` is `10`, not `8`.

---

### Block 2: Strings Do Not Update Retroactively

```python
name: str = "smart"
version: str = "1"
app: str = name + "Notes v" + version
version = "2"
print(app)
```

**Pause here.** Build the trace table before reading on.

:::note If you are new to how strings work
When Python runs `app = name + "Notes v" + version`, it grabs the current values of `name` and `version`, joins the pieces into one finished string, and stores that string in `app`. After that, `app` holds the completed text -- it has no memory of which variables built it. Changing `version` later is like tearing a page out of a notebook after someone already photocopied it. The photocopy does not change.
:::

**Trace Table:**

| Line | `name` | `version` | `app` | Output |
|------|--------|-----------|-------|--------|
| 1 | `"smart"` | -- | -- | |
| 2 | `"smart"` | `"1"` | -- | |
| 3 | `"smart"` | `"1"` | `"smartNotes v1"` | |
| 4 | `"smart"` | `"2"` | `"smartNotes v1"` | |
| 5 | `"smart"` | `"2"` | `"smartNotes v1"` | `smartNotes v1` |

Run it to verify:

```
$ uv run python main.py
smartNotes v1
```

**Investigate**: `app` was built on line 3 using the values at that moment: `"smart" + "Notes v" + "1"` produces `"smartNotes v1"`. On line 4, `version` changes to `"2"` -- but `app` already holds the finished string `"smartNotes v1"`. Reassigning `version` does not reach back and update `app`. The string was assembled once and is now independent of the variables that built it.

**The common wrong answer**: `smartNotes v2`. This happens when your brain assumes that changing `version` automatically changes anything that *used* `version`. It does not. In Python, `app = name + "Notes v" + version` evaluates the right side once, stores the result, and moves on. The result is a snapshot, not a live connection.

---

### Block 3: AI-Generated Trace Challenge

This time, instead of reading a block from the book, you will ask your AI assistant to generate one for you.

Open Claude Code in your SmartNotes project and paste this prompt:

```
Generate a 5-line Python code block using only variables with
type annotations, arithmetic, and print(). Include at least one
variable that changes value. Do NOT show the output.
```

Whatever code the AI generates, build a trace table for it on paper. Then paste the code into your SmartNotes `main.py` and run it:

```
$ uv run python main.py
```

Compare the actual output to your trace table prediction. If they do not match, look at the row where your trace went wrong.

:::note Why AI-generated code?
Every student who reads this lesson gets the same Blocks 1 and 2. But Block 3 is different for everyone -- the AI will generate a unique code block for you. This means you cannot look ahead for the answer. You must build the trace table yourself. This is also closer to real development: in practice, you trace code written by someone else (or generated by AI), not code you chose from a textbook.
:::

---

## The Rule

Every trace table in this lesson demonstrates one principle:

**When a variable appears on the left side of `=`, it gets a new value. The old value is gone.**

```python
bonus: int = 5      # bonus is 5
bonus = bonus * 2   # bonus is now 10 -- the 5 is gone forever
```

This is *variable reassignment*. Python does not keep a history of old values. It replaces them. Once `bonus` becomes `10`, there is no way to recover the `5` unless you stored it somewhere else.

:::note If the stale-value error keeps tripping you up
A **stale-value error** means using a variable's first value after it has been reassigned to a new one -- like using `bonus = 5` on a line where `bonus` is actually `10`. This is the single most common prediction error for beginners and it does not go away by "trying harder." The error happens because your brain is doing its job -- it takes shortcuts to save effort. The fix is mechanical: draw the table, fill it row by row, and never calculate from memory. The table makes the error impossible because every value is written down.
:::

Trace tables make reassignment visible. Without them, your brain silently uses the first value it saw. With them, every value change is written down, row by row, impossible to miss.

**When to use a trace table**: Any time a code block has more than three lines and at least one variable that changes. If every variable is set once and never modified, you can trace in your head (like Lesson 1). The moment a variable appears on the left side of `=` for a second time, draw the table.

---

## Exercises

Build trace tables for these code blocks on paper or in a text file. Predict the output from your table, then run the code to check.

### Exercise 1: Running Total

```python
total: int = 0
total = total + 10
total = total + 25
total = total + 5
print(f"Total: {total}")
```

Paste this into your `main.py` and run it after making your prediction:

```
$ uv run python main.py
```

**Your trace table template:**

| Line | `total` | Output |
|------|---------|--------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

### Exercise 2: Swap Attempt

```python
a: int = 3
b: int = 7
a = b
b = a
print(f"a={a}, b={b}")
```

**Your trace table template:**

| Line | `a` | `b` | Output |
|------|-----|-----|--------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

Hint: The output may surprise you. Trace line 3 carefully -- what value does `a` hold *after* that line? Then use that new value of `a` when tracing line 4.

### Exercise 3: Temperature Conversion

```python
temp_c: float = 100.0
temp_f: float = temp_c * 9 / 5 + 32
temp_c = 0.0
print(f"F: {temp_f}, C: {temp_c}")
```

**Your trace table template:**

| Line | `temp_c` | `temp_f` | Output |
|------|----------|----------|--------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

This exercises the same principle as Block 2: does changing `temp_c` affect `temp_f`?

---

## Try With AI

Open Claude Code and try these prompts to extend your trace table practice.

### Prompt 1: Generate and Trace

```
Generate a 5-line Python code block that uses only variables
with type annotations (int, float, str), arithmetic operators,
and print(). Include at least one variable reassignment where
the variable's new value depends on its old value.
Do NOT show the output -- I will build a trace table to predict it.
```

After building your trace table and running the code:

```
Here is my trace table:
[paste your table]
My prediction was [your prediction]. The actual output was [actual].
Check my trace table row by row and tell me where I went wrong
(if anywhere).
```

**What you're learning:** You are using AI as a practice partner that generates unlimited trace-table challenges. Each code block is different, so you cannot memorize answers -- you must apply the method. Having the AI check your trace table row by row gives you immediate, specific feedback on exactly where your tracking went off.

### Prompt 2: Common Mistake Diagnosis

```
Show me a 5-line Python code block using only variables with
type annotations, arithmetic, and print(). Then show TWO
predictions: one WRONG prediction that a beginner would make
by using the original variable values (the shortcut error),
and one CORRECT prediction from a proper trace table.
Explain why the wrong prediction happens.
```

**What you're learning:** You are seeing the shortcut error from the outside -- watching someone else make the mistake instead of making it yourself. This builds your ability to spot stale-value errors in code reviews, which is exactly what Lesson 3 will ask you to do.

### Prompt 3: Progressive Difficulty

```
Give me 3 Python code blocks to trace, each getting progressively
harder: the first has 3 lines, the second has 5, the third has 7.
Use only variables with type annotations, arithmetic, string
operations, and print(). Each block must have at least one variable
reassignment. Do NOT show the output.
```

**What you're learning:** Progressive difficulty builds your tracing stamina -- starting easy and increasing complexity mirrors how real code review works. By the time you finish the 7-line block, you will have proven that your trace table method scales beyond the examples in this lesson.

---

## Key Takeaways

1. **Your brain takes shortcuts with longer code** -- it uses the first value it saw for a variable instead of tracking updates. This is normal, not a failure of intelligence.

2. **A trace table tracks every variable at every line.** One column per variable, one row per line. It makes the invisible visible.

3. **When a variable appears on the left of `=`, it gets a new value.** The old value is gone. Python does not keep history.

4. **Strings (and other values) built from variables are snapshots.** Changing the source variable later does not update the string that was already assembled.

5. **Use a trace table whenever code has more than three lines and a variable that changes.** Short code can be traced in your head. Reassignment code needs the table.

---

## Looking Ahead

You now have two tools: the PRIMM method for approaching any code block, and trace tables for tracking variables through longer code. In Lesson 3, you will combine both tools on a real piece of SmartNotes code -- and you will find a bug. The code will be longer than anything you have seen so far, with multiple variables changing across several lines. Your trace table will reveal a mismatch that your eyes alone would miss.
