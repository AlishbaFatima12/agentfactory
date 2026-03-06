---
sidebar_position: 1
title: "The PRIMM Method -- Predict, Run, Investigate"
description: "Learn the formal method professional developers use to read code. Practice Predict-Run-Investigate on four short Python code blocks using variables, types, and arithmetic."
keywords:
  [
    "PRIMM",
    "predict run investigate",
    "reading code",
    "python",
    "type annotations",
    "code reading",
    "predict output",
    "variables",
    "str",
    "int",
    "float",
    "bool",
    "arithmetic operators",
    "f-strings",
    "boolean logic",
  ]
chapter: 32
lesson: 1
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "PRIMM Method Application"
    proficiency_level: "A1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can apply the three-step Predict-Run-Investigate cycle to a short Python code block and articulate whether their prediction matched the actual output"

  - name: "Python Expression Prediction"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can predict the output of a 2-4 line Python snippet that uses variables, type annotations, arithmetic operators, and print()"

  - name: "Code Reading as Verification"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can explain why reading code is the primary skill in AI-driven development and describe the three activities of active reading (predicting, tracing, explaining)"

learning_objectives:
  - objective: "Apply the Predict-Run-Investigate cycle to a short Python code block"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Student writes a prediction for a code block's output, runs the code, and compares the result -- articulating what surprised them if the prediction was wrong"

  - objective: "Predict the output of Python expressions using variables, arithmetic, and print()"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Student correctly predicts the output of at least 3 of 4 code blocks before running them, demonstrating understanding of string concatenation, floor division, f-strings, and boolean logic"

  - objective: "Explain why code reading is the bottleneck skill in AI-driven development"
    proficiency_level: "A1"
    bloom_level: "Remember"
    assessment_method: "Student describes the shift from writing-as-bottleneck to reading-as-bottleneck and names at least two reasons why prediction matters"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (PRIMM method, active reading vs scanning, prediction as learning tool, type-annotated variables, basic Python expressions) within the A1 limit. Students encounter Python syntax for the first time but only read it -- they do not write original code."

differentiation:
  extension_for_advanced: "After completing the four prediction blocks, write your own 3-line Python snippet that would surprise a beginner. Predict its output, run it, and explain why the result is not obvious. Try using operator precedence (e.g., mixing * and + without parentheses) to create a tricky prediction."
  remedial_for_struggling: "Focus on Blocks 1 and 2 only. For each block, copy the code into your SmartNotes project and run it with uv run python main.py. If the output surprises you, change one value (like the number or the string) and predict the new output before running again. Repetition with small changes builds the mental model."
---

# The PRIMM Method -- Predict, Run, Investigate

In Chapter 31, you built the workbench -- uv, pyright, ruff, pytest, and Git. Every tool is installed, every configuration file is in place, and SmartNotes has a clean foundation. Now you use it. This chapter is where you meet Python for the first time -- not by writing it, but by reading it.

Here is a short piece of Python. Before you learn any rules or methods, just look at it:

```python
x: str = "3"
y: str = "7"
print(x + y)
```

What do you think `print(x + y)` displays? Take a guess -- even if you have never seen Python before. If you guessed `10`, you just discovered something important: those quotes around `"3"` and `"7"` make them text, not numbers, and `+` joins text end to end instead of adding. If you guessed `37`, your instinct about strings is already working. Either way, you now know more than you did five seconds ago -- and all you did was read three lines and commit to an answer.

That is the core idea behind this lesson: predict what code does before you run it, then check whether you were right. By the end of this lesson, you will have a formal method for doing exactly that -- and you will have predicted the output of four Python code blocks and discovered what your predictions reveal about your understanding.

---

## The AI-Era Reading Shift

Before AI assistants, the bottleneck in software development was writing code. Developers spent most of their time typing, debugging syntax, and looking up API documentation. Writing was slow, so reading was a secondary concern -- you mostly read code you had written yourself.

AI changed the equation. Tools like Claude Code and GitHub Copilot generate code in seconds. Writing is no longer the bottleneck. Verification is. GitClear's 2025 research, analyzing 211 million changed lines of code, found that 7.9% of newly added code was revised within two weeks in 2024, up from 5.5% in 2020 -- a 44% increase in code churn. Code is being written faster but corrected more often. The bottleneck has moved.

| Era | Bottleneck | Primary Skill | What Slows You Down |
|-----|-----------|---------------|---------------------|
| **Pre-AI** | Writing code | Typing, syntax recall, API lookup | Producing code from scratch |
| **AI era** | Verifying code | Reading, predicting, tracing | Deciding whether generated code is correct |

Reading is no longer a nice-to-have. It is the skill that determines whether you can trust the code your tools produce. In this chapter, the AI generates the code you read -- just like in real projects.

---

## Reading Is Not Scanning

There is a difference between looking at code and reading it. Looking is passive -- your eyes move over the lines, you recognize some words, and you move on with a vague sense of what the code "probably" does. Reading is active. It requires your brain to do work.

Active reading has three components:

| Activity | What Your Brain Does | Example |
|----------|---------------------|---------|
| **Predicting** | Guess the output before running the code | "This line adds two numbers, so the result should be 13" |
| **Tracing** | Follow each line in order, tracking what changes | "After line 1, `x` is 5. After line 2, `y` is 3. After line 3, `result` is 8." |
| **Explaining** | Put into words *why* the code produces its result | "The `//` operator divides and drops the decimal, so 10 // 3 gives 3, not 3.33" |

Scanning feels productive because it is fast. Active reading feels slow because it forces you to think. But scanning produces false confidence -- you believe you understand the code when you do not. Active reading produces real understanding, one line at a time.

:::note If you have never written code before
That is exactly the right starting point for this chapter. You are not behind -- you are in position. Every code block in this lesson is short (2-4 lines), uses plain English variable names, and has type annotations that tell you what kind of data each variable holds. You do not need to memorize anything. You need to predict, run, and compare.
:::

---

## The PRIMM Method

PRIMM is a structured approach to learning programming through reading before writing. It was developed by computing education researchers Sue Sentance, Jane Waite, and Maria Kallia, and is used in classrooms worldwide. The full method has five stages:

| Stage | What You Do | This Chapter? |
|-------|-------------|---------------|
| **Predict** | Read the code and predict its output *before* running it | Yes |
| **Run** | Execute the code and compare the actual output to your prediction | Yes |
| **Investigate** | Explore why the code behaves the way it does -- especially when your prediction was wrong | Yes |
| **Modify** | Change part of the code and predict what the change does | Chapter 33 |
| **Make** | Write new code from scratch using the patterns you have learned | Chapter 33 |

This chapter focuses on the first three stages. They form a tight loop: predict, run, investigate. Each pass through the loop either confirms your understanding or reveals a gap. Both outcomes are useful. A correct prediction means your mental model works. A wrong prediction tells you exactly where your mental model needs updating.

**Why prediction matters**: When you predict before running, you commit to an answer. That commitment forces your brain to engage with the code rather than passively absorb it. If you skip prediction and just run the code, you see the output and think "oh, that makes sense" -- but you have no way to know whether you would have gotten it right on your own. Prediction turns reading into a test you give yourself.

---

## Reading Python: What You'll See

Every code block in this lesson uses the same four building blocks. Knowing what they are turns your predictions from random guesses into informed reasoning.

**Variables** are named containers. `greeting = "Hello"` stores the text `Hello` in a container called `greeting`. You choose the name; Python remembers the value.

**Type annotations** are the `: str`, `: int`, `: float`, `: bool` labels after variable names. They tell you what kind of data the variable holds -- like labels on kitchen jars. They do not change what the code does. They make code easier to read.

| Type    | What It Holds      | Example              |
|---------|--------------------|----------------------|
| `str`   | Text (a "string")  | `"Hello"`, `"3.14"` |
| `int`   | Whole number        | `7`, `-2`, `0`       |
| `float` | Decimal number      | `3.14`, `0.5`        |
| `bool`  | True or False       | `True`, `False`      |

**`print()`** displays whatever is inside the parentheses on your screen. Every block ends with `print()` so you can check your prediction against the actual output.

With these four pieces -- variables, type annotations, types, and `print()` -- you can read every block that follows.

---

## Your First Four Predictions

Time to practice. For each block, you will ask your AI assistant to generate a short Python snippet, read what it produces, predict the output, and then run the code. This mirrors real AI-driven development: the AI writes, you read and verify.

**How to run each block:** Paste the code into your SmartNotes `main.py` file. Then open your terminal and run:

```
$ uv run python main.py
```

`uv` is the package manager you installed in Chapter 31. `uv run python main.py` tells it to execute your Python file.

---

### Block 1: String Concatenation

**What's new here:** When you use `+` between strings, Python joins them end to end -- this is called concatenation, not addition. Characters inside quotes (including commas and spaces) appear exactly as written in the output.

Open Claude Code in your SmartNotes project and type this prompt:

```
Generate a 3-line Python snippet that creates two string variables
called greeting and name (with type annotations), joins them together
with a comma and space, and prints the result.
```

Read what the AI generates. A typical response looks like this:

```python
greeting: str = "Hello"
name: str = "James"
message: str = greeting + ", " + name + "!"
print(message)
```

**Pause here.** Before you run it, predict: what will `print(message)` display? Write your prediction down or say it out loud. Then paste the code into `main.py` and run it.

```
$ uv run python main.py
Hello, James!
```

**Investigate**: The `+` operator joins strings end to end. `greeting` holds `"Hello"`, then `+` attaches `", "`, then `name` attaches `"James"`, then `+` attaches `"!"`. If your prediction matched, your mental model of string concatenation is working. If you predicted something like `Hello James!` (missing the comma and space), look again at the second piece: `", "` -- the comma and space are inside the quotes, so they are part of the string.

Notice what just happened: the AI generated the code, but *you* did the thinking. You read it, predicted the output, and checked whether your understanding was correct. That is the core loop of this chapter.

---

### Block 2: Floor Division

**What's new here:** Python has two division operators. A single `/` gives the full decimal result (`10 / 3` produces `3.3333...`). A double `//` is **floor division** -- it divides and drops everything after the decimal point, giving a whole number. Watch which operator the code uses.

Ask Claude Code:

```
Generate a 3-line Python snippet that divides 10 by 3 using floor
division (//), stores the result in a variable with a type annotation,
and prints it.
```

Read the generated code. It will look something like:

```python
x: int = 10
y: int = 3
result: int = x // y
print(result)
```

**Pause here.** What will `print(result)` display? This one catches many people. Commit to your answer, then run it.

```
$ uv run python main.py
3
```

:::note If you have used other programming languages
In Python, `//` always floors toward negative infinity, not toward zero. For positive numbers, this is the same as truncation. For negative numbers, `-7 // 2` gives `-4`, not `-3`. This distinction matters when you encounter negative values later in the course.
:::

**Investigate**: If you predicted `3.33` or `3.3333`, you were thinking of regular division (`/`). Floor division (`//`) always rounds down to the nearest whole number. The AI generated code using `//` specifically. Part of reading code is noticing which operator was used -- a single character changes the result entirely.

---

### Block 3: F-Strings and Arithmetic

**What's new here:** An `f` before the opening quote makes an **f-string** (formatted string). Inside an f-string, anything between `{` and `}` gets replaced with that variable's value. Without the `f`, Python prints the literal text `{total}` instead of the number. Also note: multiplying a `float` by an `int` produces a `float`.

Ask Claude Code:

```
Generate a Python snippet that multiplies a float price (29.99) by an
integer quantity (3), stores the total, and prints it inside an
f-string that says "Total: $" followed by the total. Use type
annotations on all variables.
```

Read the response. A typical generation:

```python
price: float = 29.99
quantity: int = 3
total: float = price * quantity
print(f"Total: ${total}")
```

**Pause here.** What will `print(...)` display? Predict the exact text.

```
$ uv run python main.py
Total: $89.97
```

**Investigate**: Three things happen in this block. First, `price * quantity` multiplies a float by an integer -- Python handles this automatically, producing a float. Second, the f-string evaluates `{total}` and inserts the value. Third, the `$` appears in the output as-is.

If you predicted `Total: $89.97000000000001`, your instinct about floating-point precision was technically sound. Python's `float` type sometimes produces tiny rounding artifacts. In this case, `29.99 * 3` happens to produce exactly `89.97`, but similar calculations can surprise you with extra decimals.

---

### Block 4: Boolean Logic

**What's new here:** Comparisons like `>` (greater than) produce a boolean result: either `True` or `False`. The `and` operator combines two booleans and returns `True` only when *both* sides are `True`. If either side is `False`, the result is `False`.

Ask Claude Code:

```
Generate a Python snippet that sets a temperature variable to 35
(integer), checks if it is greater than 30, sets a humidity boolean
to True, combines them with "and", and prints the result. Use type
annotations on all variables.
```

Read the generated code:

```python
temperature: int = 35
is_hot: bool = temperature > 30
is_humid: bool = True
feels_bad: bool = is_hot and is_humid
print(feels_bad)
```

**Pause here.** What will `print(feels_bad)` display?

```
$ uv run python main.py
True
```

:::tip If you have used other programming languages
Python capitalizes its boolean values: `True` and `False`, not `true` and `false`. If you predicted lowercase, that is a common expectation from JavaScript, Java, or C-family languages. Also, `print()` displays the word `True`, not the number `1`, even though Python treats `True` as equivalent to `1` internally.
:::

**Investigate**: Line by line: `temperature > 30` asks "is 35 greater than 30?" The answer is `True`, so `is_hot` becomes `True`. `is_humid` is set directly to `True`. The `and` operator returns `True` only when *both* sides are `True`. Since both are `True`, `feels_bad` is `True`.

---

## Why This Works

There is a reason PRIMM starts with reading, not writing. It mirrors how people learn languages. You do not start learning French by writing essays. You start by reading sentences, recognizing words, and building comprehension. Writing comes after you can read -- because writing requires you to produce what reading only requires you to recognize.

In each prediction block, you followed the same cycle that professionals use when reviewing AI-generated code:

1. **SEE it** -- The AI generated a snippet
2. **READ it** -- You examined every line, checking variable names, types, and operators
3. **PREDICT it** -- You committed to what the output would be before running the code

Each prediction built a small piece of your mental model:

- **Block 1** taught you that `+` joins strings and that characters inside quotes (like `, `) appear exactly as written
- **Block 2** taught you that `//` is not the same as `/` -- floor division drops the decimal
- **Block 3** taught you that f-strings evaluate expressions inside `{}` and that Python mixes `float` and `int` arithmetic automatically
- **Block 4** taught you that comparisons produce `True` or `False` and that `and` requires both sides to be `True`

Wrong predictions are the most valuable part of this process. A correct prediction confirms what you already know. A wrong prediction reveals a specific gap -- `//` vs `/`, `True` vs `true`, how f-strings work -- that you can now fill. Every gap you fill makes the next prediction more accurate.

---

## Exercises

Practice the Predict-Run-Investigate cycle on these new code blocks. Write your prediction before running the code.

### Exercise 1: String Repetition

```python
dash: str = "-"
line: str = dash * 20
label: str = "SmartNotes"
print(line)
print(label)
print(line)
```

Predict what three lines `print()` will display. Then paste into `main.py` and run:

```
$ uv run python main.py
```

Compare your prediction to the actual output.

### Exercise 2: Floor Division Round-Trip

```python
a: int = 17
b: int = 5
quotient: int = a // b
product: int = quotient * b
print(f"{a} // {b} = {quotient}, and {quotient} * {b} = {product}")
```

Predict the exact output string. Does multiplying `quotient * b` give back the original `a`? Why or why not?

```
$ uv run python main.py
```

### Exercise 3: Boolean Combination

```python
score: int = 72
passing: bool = score >= 70
excellent: bool = score >= 90
both: bool = passing and excellent
print(f"Passing: {passing}, Excellent: {excellent}, Both: {both}")
```

Predict all three boolean values. Remember: `and` returns `True` only when *both* sides are `True`.

```
$ uv run python main.py
```

---

## Try With AI

Open Claude Code and try these prompts to extend your prediction practice.

### Prompt 1: Generate and Explain

```
Generate a 3-line Python snippet that uses type annotations
for str, int, and float variables, then prints a result.
After showing the code, explain what each type annotation means
and why it matters for code readability.
```

**What you're learning:** You are seeing how Claude Code generates typed Python and whether its explanations match what you learned in this lesson. Compare its type annotation explanations with what you observed in the four code blocks above. If Claude Code uses a concept you have not seen yet (like a function or a list), ask it to simplify using only variables and `print()`.

### Prompt 2: Surprise Me

```
Generate a 3-line Python code block using only variables,
arithmetic operators, and print(). Make the output surprising --
something where the result is not what most beginners would
predict. Do NOT reveal the output. Let me predict first.
```

After predicting and running the code:

```
My prediction was [your prediction]. The actual output was
[actual output]. Explain why I got it [right/wrong].
```

**What you're learning:** You are practicing PRIMM with AI-generated code -- the exact situation you will face when AI assistants generate code in your projects. The AI creates the surprise; you practice the prediction. This is the core skill loop of this chapter applied to a new, unpredictable example.

### Prompt 3: Quiz Me

```
Give me 5 short Python code blocks (2-3 lines each) that use
only variables with type annotations, arithmetic operators
(+, -, *, /, //), string operations (+, *, f-strings),
boolean logic (and, or, comparisons), and print().
Do NOT show the output. I will predict each one, then you
check my answers.
```

**What you're learning:** You are turning the AI into a practice partner that generates unlimited prediction exercises. This is more effective than re-reading the same four blocks because each quiz is different, forcing you to apply your mental model to new situations rather than memorizing specific answers.

---

## Key Takeaways

1. **Reading code is the primary skill in AI-driven development.** AI generates code fast. Your job is to verify it -- and verification starts with reading.

2. **Active reading means predicting, tracing, and explaining.** Scanning code is not reading. If you cannot predict what a line does before running it, you do not yet understand that line.

3. **PRIMM gives you a formal method: Predict, Run, Investigate.** This chapter uses the first three stages. Modify and Make come in Chapter 33 when you start writing code.

4. **Wrong predictions are the most valuable learning moments.** A correct prediction confirms your model. A wrong prediction reveals exactly where your understanding has a gap -- and that gap is now something you can fix.

5. **This chapter reads Python -- writing comes later.** Every code block uses only variables, types, arithmetic, strings, booleans, and `print()`. You are building the mental model that writing will later depend on.

---

## Looking Ahead

You have practiced predicting the output of short, straight-line code. But what happens when code gets longer and variables change across multiple lines? Your brain starts taking shortcuts -- assuming values instead of tracking them. In Lesson 2, you will learn trace tables: a structured method for tracking every variable's value at every line, so that your predictions stay accurate even when the code gets complex.
