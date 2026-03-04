---
sidebar_position: 1
title: "Why Reading Comes Before Writing"
description: "Understand why reading and verifying code is the most important skill in AI-driven development, and learn the PRIMM method for reading Python."
keywords: ["code reading", "PRIMM", "predict run investigate", "AI code review", "reading before writing", "code comprehension"]
chapter: 16
lesson: 1
duration_minutes: 15

# HIDDEN SKILLS METADATA
skills:
  - name: "Code Reading Mindset"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Explain why reading code before writing it is essential in AI-driven development"
  - name: "AI Output Verification Awareness"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "Safety"
    measurable_at_this_level: "Describe why AI-generated code requires human verification"

learning_objectives:
  - objective: "Explain why reading code is more important than writing code in the AI era"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Short answer explanation"
  - objective: "Describe the three stages of the PRIMM framework used in this chapter"
    proficiency_level: "A1"
    bloom_level: "Remember"
    assessment_method: "Identify each PRIMM stage"
  - objective: "Recognize the difference between code generation speed and code verification ability"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Scenario analysis"

cognitive_load:
  new_concepts: 3
  assessment: "Low -- 3 concepts (reading-first mindset, active reading vs passive scanning, PRIMM framework) well within A1 limit. Conceptual framing, no code writing."

differentiation:
  extension_for_advanced: "Research how code review practices differ for AI-generated vs human-written code"
  remedial_for_struggling: "Focus on the language-learning analogy -- reading comprehension before essay writing"
---

# Why Reading Comes Before Writing

In Chapter 15, you built the workbench -- uv, pyright, ruff, pytest, and Git, all configured and ready. Now you will use that workbench for its first real job: reading Python.

James watches AI generate fifty lines of Python in four seconds. He does not understand any of it -- not a single line. He leans back, impressed by the speed. "That was fast. Ship it." Emma points at line 12. "What does this line do?" James stares at the screen. He reads the line. He reads it again. He cannot explain what it does. Emma does not look surprised. "You just accepted fifty lines of code you cannot explain. That is not programming. That is hoping."

This is the first lesson of a chapter devoted entirely to reading. You will not write a single line of Python here. Instead, you will learn why reading code is the essential skill of the AI era -- and how this chapter will teach you to read Python from scratch, one concept at a time.

---

## The AI-Era Shift

In traditional computer science education, the skill was writing. Students sat in front of blank editors and typed programs from scratch. The bottleneck was production: How fast can you translate an idea into working code?

AI removed that bottleneck. A coding assistant can produce fifty lines of working code in seconds. The new bottleneck is verification: How do you know the code is correct?

This is not a theoretical concern. GitClear's 2025 research on AI-assisted code quality found that code written with AI assistants has measurably higher churn -- 7.9% of newly added code required revision within two weeks, compared to 5.5% before widespread AI adoption. Code duplication increased while refactoring declined. The code gets generated fast. It does not always get generated right.

| Era | Bottleneck | Primary Skill |
|---|---|---|
| Pre-AI | Production -- typing code from scratch | Writing |
| AI-assisted | Verification -- confirming code is correct | Reading |

James's mistake was not using AI. His mistake was trusting output he could not read. The discipline stack from Chapter 15 catches some errors automatically -- pyright catches certain kinds of mistakes, ruff catches style problems, pytest checks whether code behaves correctly. But those tools check what they are designed to check. They do not check whether the code does what *you* intended. Only you can verify that, and you verify it by reading.

---

## How AI Generates Code

You have watched AI produce Python in seconds. But what is actually happening when it generates those fifty lines? Understanding the answer explains why reading is non-negotiable.

An AI coding assistant does not understand Python the way you will. It has been trained on billions of lines of existing code and text, learning statistical patterns -- which words and symbols tend to follow which other words and symbols. When you ask it to "write code that calculates an average," it predicts the most likely sequence of characters based on patterns it has seen in its training data. The result often looks correct because that pattern is common and well-represented.

But "most likely next word" is not the same as "correct." The AI does not check its own work. It does not ask itself "what happens when there is no data?" or "is this calculation actually right?" It produces the statistically probable answer, not the verified one. A student who has learned to read Python carefully -- line by line, piece by piece -- will catch errors that the AI itself cannot catch, because the AI never checked in the first place.

This is the deeper reason reading matters. The discipline stack from Chapter 15 automates part of the verification -- but none of those tools check whether the code does what *you* intended. That verification is your unique contribution, and it starts with reading.

---

## Reading Is Not Passive

When most people hear "read code," they picture scanning. Eyes move across lines, words register vaguely, and the reader reaches the end with a general impression but no precise understanding. That is not reading. That is skimming.

Active reading is mentally demanding work. It means three things:

**Predicting** what code will do *before* running it. You look at a piece of code and commit to an answer -- "I think this will produce 3" -- before the computer confirms or corrects you. The prediction forces your brain to engage with the logic instead of passively absorbing text.

**Tracing** how data changes step by step. When code has five lines, you track what happens after each one. This is slow, deliberate, and the single most effective technique for building a correct mental model of how Python executes.

**Explaining** what a piece of code does in plain English. If you can say "this code takes a name and produces a greeting," you understand it. If you can only say "it does some text stuff," you do not.

These three activities -- predict, trace, explain -- are the core of reading. They are what this chapter trains.

---

## The PRIMM Method

This chapter follows a research-backed framework called **PRIMM**, developed by Sentance, Waite, and Kallia (2019) for teaching programming through reading. PRIMM has five stages. This chapter uses the first three:

| Stage | What You Do | Example |
|---|---|---|
| **Predict** | Guess what the code will produce *before* running it | "I think this will print the word Hello" |
| **Run** | Execute the code and compare the actual output to your prediction | Run it. It prints Hello. Prediction confirmed. |
| **Investigate** | Walk through the code step by step, explain what each part does in plain English | "This line stores a piece of text, and the next line displays it on screen" |

The remaining stages -- Modify and Make -- involve changing and writing code. Those come in Chapter 17. For now, you are a reader. You predict, run, and investigate. That is enough.

Why start with reading? Because understanding must precede creation. Every prediction you make -- right or wrong -- builds your mental model of how Python works. Every wrong prediction is especially valuable: it reveals a gap between what you assumed and what Python actually does. Those gaps are where learning happens.

---

## The Language-Learning Analogy

Reading comprehension comes before essay writing. This is true in every natural language, and it is true in programming.

Children read thousands of sentences before writing their first paragraph. Language learners parse restaurant menus, street signs, and news headlines long before composing their own prose. The reason is cognitive: you need a library of patterns in your head before you can produce new combinations of those patterns. Without input, there is no output.

Programming works the same way. Before you can write Python, you need to have read many examples of Python. Before you can spot a mistake in AI-generated code, you need to have seen what correct code looks like. The reading builds the mental library that every other skill draws from.

This chapter is your reading phase. You will see Python code, have it explained piece by piece, and practice predicting what it does -- all before you write your first line in Chapter 17.

---

## Exercises

### Exercise 1: The Verification Gap

A team uses AI to generate code for a banking application. The code passes all automated checks -- the style checker is happy, the type checker reports no errors, and all tests pass. Six months later, they discover the code rounds currency amounts in a way that loses fractions of a cent on every transaction. Thousands of transactions later, the losses are significant.

Which check was missing? Why couldn't the automated tools catch this?

**Answer:** The automated tools verified that the code was well-formed, correctly typed, and matched the test cases. But the tests themselves did not cover the rounding behavior. No tool can verify whether the code matches the developer's *intent* -- only a human who reads the code and understands the business requirement can catch this kind of error. This is the verification gap that reading fills.

### Exercise 2: Scanning vs Reading

James looks at fifty lines of AI-generated code for thirty seconds and says "looks good." Emma looks at the same code for ten minutes and finds a mistake on line 37.

What did Emma do differently? List three specific activities she likely performed that James skipped.

**Answer:** Emma likely (1) predicted what the code should do before checking each section, (2) traced the logic step by step rather than glancing at the overall shape, and (3) explained each section's purpose in plain English to herself, catching the moment where the code did something different from what she expected. James scanned. Emma read.

---

## Try With AI

Open your AI coding assistant. Try these three prompts to explore the reading-first mindset.

### Prompt 1: Why Reading Before Writing

```
I am about to learn Python for the first time. My course teaches
me to READ code before I write any. Explain why this approach
makes sense. Use an analogy from learning a natural language
like English or Arabic -- how does reading come before writing
in language learning?
```

**What you're learning:** You are building conviction in the reading-first approach before diving into Python syntax. The AI will reinforce the same principle from multiple angles -- language acquisition research, cognitive science, and practical programming experience. This prepares you mentally for the next five lessons where you will read Python without writing it.

### Prompt 2: What Does AI-Generated Code Look Like

```
Generate 10 lines of simple Python code for a note-taking app.
Do NOT explain it to me. Just show me the code.

I want to see what AI-generated Python looks like before I start
learning to read it. I will come back to this code after finishing
Chapter 16 and see how much I can understand then.
```

**What you're learning:** You are creating a personal benchmark. Right now, these ten lines may look like a foreign language. Save the AI's response somewhere. After Lesson 6, you will return to it and discover you can read and explain every line. The difference between now and then is exactly what this chapter builds.

### Prompt 3: The Verification Problem

```
Give me three real-world examples where AI-generated code looked
correct but had a subtle bug that only a human reader would catch.
For each example, explain what the AI got wrong and why automated
tools did not catch it. Keep the explanations non-technical -- I
am a beginner who has not learned Python yet.
```

**What you're learning:** You are seeing concrete evidence of why reading matters. AI-generated code is not always correct, and the mistakes it makes are often subtle -- the code runs, the tools pass, but the result is wrong. These examples motivate the entire chapter: you need to read code yourself because no tool can fully replace human understanding.

---

## Key Takeaways

1. **Reading code is the primary skill in AI-driven development.** AI generates code fast. Your job is verifying it is correct -- and that requires reading, not writing.

2. **Active reading means predicting, tracing, and explaining -- not scanning.** Predict what code does before running it. Trace how data changes step by step. Explain what each piece of code does in plain English. If you cannot explain it, you do not understand it.

3. **PRIMM is your method: Predict, Run, Investigate.** These three stages structure every lesson in this chapter. Modify and Make come later, in Chapter 17.

4. **Speed of generation without ability to verify is dangerous.** James accepted fifty lines of code he could not explain. The discipline stack catches some errors, but only a human reader can verify intent.

5. **This chapter focuses on reading only -- writing comes in Chapter 17.** Like learning a natural language, you build a library of patterns through reading before producing your own code.

---

## Looking Ahead

You know why reading matters and how you will practice it. In the next lesson, you will meet Python's four basic data types -- text, whole numbers, decimal numbers, and true/false values -- and learn how Python labels its data so you can read what a program is working with at a glance.
