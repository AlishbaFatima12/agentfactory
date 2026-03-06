---
sidebar_position: 1
title: "How You Will Learn -- The PRIMM-AI Framework"
description: "Understand the research-validated PRIMM-AI framework that governs every Python lesson in this book. Learn the five stages (Predict, Run, Investigate, Modify, Make with AI), the five rules, and why comprehension -- not code generation -- is the primary skill of AI-era programming."
keywords:
  [
    "PRIMM",
    "PRIMM-AI",
    "learning framework",
    "predict run investigate modify make",
    "comprehension-first",
    "AI coding assistants",
    "code reading",
    "Sentance Waite Kallia",
    "Vygotsky",
    "spec-driven development",
    "programming pedagogy",
    "AI-era learning",
  ]
chapter: 30
lesson: 1
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "PRIMM-AI Framework Comprehension"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can describe all five PRIMM-AI stages and explain why each stage matters for learning programming in an AI-assisted environment"

  - name: "Comprehension-First Mindset"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can articulate why reading and verifying code is the bottleneck skill in AI-driven development and why PRIMM-AI prioritizes comprehension over production"

  - name: "AI-Assisted Learning Strategy"
    proficiency_level: "A1"
    category: "Soft"
    bloom_level: "Remember"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can list the five PRIMM-AI rules and describe the role of an AI coding assistant at each PRIMM-AI stage"

learning_objectives:
  - objective: "Explain the five stages of PRIMM-AI and why comprehension precedes production"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student describes the five stages in sequence and explains why Predict comes before Make, using the analogy of reading a language before writing in it"

  - objective: "State the five PRIMM-AI rules and connect each rule to a professional development practice"
    proficiency_level: "A1"
    bloom_level: "Remember"
    assessment_method: "Student lists all five rules from memory and pairs each with a real-world scenario where violating the rule would cause a problem"

  - objective: "Describe how PRIMM-AI maps to the book's chapter structure and to professional Spec-Generate-Review-Refine-Ship workflow"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student identifies which PRIMM-AI stage corresponds to each part of a chapter (opening, lessons, exercises, capstone) and explains the parallel to professional practice"

cognitive_load:
  new_concepts: 4
  assessment: "4 new concepts (PRIMM as a research-validated framework, PRIMM-AI as the adapted version with AI integration, the five rules as operational principles, comprehension-first as a paradigm shift). All concepts are conceptual -- no code, no tools. Within the A2 budget for a conceptual-only lesson."

differentiation:
  extension_for_advanced: "After reading the chapter, find the original Sentance, Waite, and Kallia (2019) paper and read the abstract. Compare their classroom findings with how PRIMM-AI adapts the framework for AI coding assistants. Write a paragraph explaining what changed and what stayed the same."
  remedial_for_struggling: "Focus on the five stages and the five rules. Write each stage name on an index card with a one-sentence description. Write each rule on a separate card. Arrange the stage cards in order. For each rule card, place it next to the stage it most relates to. This physical sorting helps build the mental model before you encounter it in lessons."
---

# How You Will Learn

You are about to learn Python programming. But you are learning it in 2026, not 2016. That distinction matters more than any syntax rule this book will ever teach you.

A decade ago, learning to program meant staring at a blank editor, typing code character by character, running it, watching it crash, and slowly building up the ability to write working programs from scratch. The entire pedagogy of programming education was built around one assumption: the learner must produce code from nothing. That assumption is now obsolete.

An AI coding assistant can write a working Python function in seconds. It can scaffold an entire project, generate tests, refactor code, and explain any program you show it. If the goal of learning programming were simply to produce code, you could skip this entire Part and just type prompts into a terminal. But producing code was never the real goal. The real goal is **understanding** -- the ability to read a program and know what it will do, to look at AI-generated code and judge whether it is correct, to take a working function and adapt it for a new purpose, and ultimately to architect solutions that you and AI build together. These are the skills that separate a developer who *uses* AI from someone who *depends* on it blindly.

This chapter introduces the framework that governs all programming instruction in this book: **PRIMM-AI** -- Predict, Run, Investigate, Modify, Make *with AI*. Before you write a single line of Python, you need to understand how you will learn and why this approach works.

---

## What Is PRIMM?

PRIMM is a structured approach to teaching programming developed by computing education researchers **Sue Sentance**, **Jane Waite**, and **Maria Kallia** at King's College London and Queen Mary University of London. First presented in 2017 and formally published in *Computer Science Education* (2019) based on a mixed-methods study with 493 students across 13 schools, PRIMM stands for five sequential stages:

1. **Predict** -- Read a short, complete program and predict what it will do before running it.
2. **Run** -- Execute the program and compare the actual output to your prediction.
3. **Investigate** -- Explore how and why the code behaves the way it does.
4. **Modify** -- Change the existing code to alter its behavior in targeted ways.
5. **Make** -- Write new code from scratch to solve a related problem.

The framework is grounded in Lev Vygotsky's sociocultural theory of learning, which holds that knowledge transfers from the social plane (discussion, collaboration, mediation) to the cognitive plane (individual understanding). In plain language: you learn programming by talking about code, reading code, and reasoning about code *before* you ever try to write it yourself.

This is the opposite of how most programming courses work. Most courses begin with "write a program that prints Hello World" -- the Make stage -- and expect learners to somehow absorb reading, comprehension, and debugging skills along the way. PRIMM inverts this. You start by reading code, and you arrive at writing code only after you have built the comprehension skills to do it with confidence.

Think of it this way: you do not learn a new spoken language by writing essays on your first day. You start by reading sentences, recognizing words, and building comprehension. Writing comes after you can read -- because writing requires you to produce what reading only requires you to recognize. PRIMM applies the same principle to code.

The research results are clear. Learners using PRIMM outperformed control groups, and teachers reported that the approach was particularly effective for mixed-ability classes. PRIMM has since been adopted in schools across England, Germany, the United States, Hong Kong, Norway, Argentina, and many other countries.

---

## Why PRIMM Matters in the AI Era

AI coding assistants have made the final step of programming -- generating code -- nearly free. Any beginner can type "write me a Python function that sorts a list of dictionaries by a nested key" and get a correct, well-structured result in seconds. This is extraordinary. But it creates a pedagogical trap.

If a learner can get working code without understanding it, and if that working code appears to solve their problem, what incentive do they have to learn? The incentive is invisible until it is not: the code breaks, the requirements change, the AI misunderstands a subtle constraint, or the learner is asked to debug a system they cannot read. At that point, the gap between "I can prompt AI" and "I understand programming" becomes a chasm.

This is the **comprehension crisis**. The bottleneck in software development has shifted. Before AI, the bottleneck was writing code. Developers spent most of their time typing, debugging syntax, and looking up documentation. Writing was slow, so reading was a secondary concern. AI changed the equation. Writing is no longer the bottleneck. Verification is.

| Era | Bottleneck | Primary Skill | What Slows You Down |
|-----|-----------|---------------|---------------------|
| **Pre-AI** | Writing code | Typing, syntax recall, API lookup | Producing code from scratch |
| **AI era** | Verifying code | Reading, predicting, tracing | Deciding whether generated code is correct |

PRIMM prevents the comprehension crisis by making understanding the *primary* activity and code generation the *final* activity. Four of the five stages -- Predict, Run, Investigate, Modify -- are about building comprehension. Only the last stage involves writing new code. This ratio is exactly right for the AI era: the ability to read, evaluate, trace, and adapt code is now more valuable than the ability to write it from scratch, because writing from scratch is what AI does best.

:::note If you are new to programming
This is good news. You are not starting behind -- you are starting in position. The most important programming skill in 2026 is not typing speed or syntax memorization. It is the ability to read code and predict what it does. PRIMM-AI builds that skill from your very first lesson.
:::

:::note If you have coded before
You already know that reading someone else's code is harder than writing your own. PRIMM-AI formalizes the process you probably already use informally when reviewing pull requests or debugging production issues: read it, predict what it does, run it, investigate the behavior, then modify. The framework gives you a structured vocabulary for a skill you have been practicing by instinct.
:::

---

## PRIMM-AI: The Adapted Framework

For this book, we adapt the original PRIMM framework to integrate AI coding assistants. We call this adaptation **PRIMM-AI** -- Predict, Run, Investigate, Modify, Make *with AI*. The five stages remain the same, but each stage now has an AI-native dimension.

The name is deliberate. PRIMM-AI is not tied to any single tool or vendor. Whether you use Claude Code, Cursor, GitHub Copilot, Gemini CLI, or whatever AI coding assistant emerges next year, the framework applies. The pedagogy is the constant; the AI tool is the variable. In this book, we use Claude Code as our primary AI partner because it integrates naturally with the spec-driven development workflow you learned in Chapter 5. But every technique you learn here transfers to any AI coding environment.

Here is how each stage works in the PRIMM-AI adaptation:

### Predict: Read Before You Run

You receive a short, complete program. Your task is to predict what it will do before running it. The AI assistant can generate these programs at exactly the right difficulty level for the topic you are studying, giving you fresh, varied prediction exercises. But the AI is not used to explain the code at this stage -- you must engage with it independently first. The prediction habit is the single most important skill you will develop. When your AI assistant generates a function, the first thing you must be able to do is read it and predict what it will do. If you cannot do this, you cannot evaluate whether the AI gave you what you asked for.

### Run: Test Your Mental Model

You run the program and compare the output to your prediction. If your prediction matched, you have evidence that your mental model is accurate. If it did not match, you have something even more valuable: a specific, concrete discrepancy that your brain will work to resolve. The AI assistant executes the code and can run it with different inputs to test edge cases. The gap between what you predicted and what actually happened is where deep learning occurs.

### Investigate: Understand Deeply

You explore how and why the code works. You trace variables line by line, ask targeted questions about specific constructs, and test edge cases. Here is where the AI-era adaptation becomes powerful: your AI assistant acts as a Socratic tutor. Instead of passively reading documentation, you can ask "why does this line use `enumerate` instead of `range(len(...))`?" and get an immediate, contextualized explanation. But -- and this is the critical rule -- **you verify every explanation the AI gives by running the code yourself.** You do not take the AI's word for it. This builds a double skill: you learn to understand the programming concept, and you learn to evaluate AI-generated explanations.

### Modify: Adapt with Purpose

You change the existing code -- not rewrite it from scratch, but make targeted alterations that demonstrate your understanding. After completing your modification, you can compare your approach to what the AI would suggest. "I added the counter using `enumerate`. The AI used `range(len(names))`. Which approach is better, and why?" This kind of comparative reasoning builds professional judgment. Modify is the bridge between reading and writing. It is scaffolded creation -- you produce new code, but within a structure that constrains the problem and gives immediate feedback.

### Make: Create with Specification

You write code to solve a new, related problem. But "from scratch" in the AI era follows a specific pattern: you write the specification first (what the program should do, inputs, outputs, edge cases), you attempt the solution yourself, and you use the AI assistant as a review partner rather than a ghostwriter. The Make stage is where you prove to yourself that you have internalized the concept. Notice: you arrive here only after four stages of preparation. By the time you sit down to write code, you have already read it, predicted its behavior, run it, investigated its mechanics, and modified it. Writing becomes the natural next step, not a terrifying leap.

---

## The Five PRIMM-AI Rules

These rules apply to every lesson, every exercise, and every interaction with your AI coding assistant throughout Parts 4 and 5.

**Rule 1: Never run code you have not predicted.** Every time you encounter a new program -- from the book, generated by your AI assistant, or written by you -- pause and predict its output before executing it. This single habit, practiced consistently, builds the mental compiler that separates competent developers from prompt-and-pray users.

**Rule 2: Never trust an explanation you have not tested.** Your AI coding assistant is a powerful explainer. It is also sometimes wrong. When it tells you what a piece of code does, verify it. Change an input. Run the edge case. This is not paranoia -- it is the verification mindset that defines professional software development.

**Rule 3: Modify before you make.** When you encounter a new concept, resist the urge to immediately write your own program from scratch. First, modify an existing one. Changing working code is less intimidating than creating from nothing, and it teaches you just as much about the concept.

**Rule 4: Write the spec before the code.** In the Make stage, always describe what your program should do *before* you start coding. This is the spec-driven development practice you learned in Chapter 5, and PRIMM-AI's Make stage is where you begin applying it to Python.

**Rule 5: Use AI as a partner, not a crutch.** Your AI assistant should make you smarter, not lazier. Ask it to explain, review, generate examples, and suggest improvements. Do not ask it to do your thinking for you. The goal is to build your understanding, with AI as an accelerant.

---

## How Every Lesson Works

Every chapter in Parts 4 and 5 follows the PRIMM-AI structure. Knowing this in advance turns each lesson from a collection of pages into a deliberate learning progression.

**Chapter Opening -- Predict and Run.** Each chapter begins with one or two complete programs that demonstrate the core concept. You predict their output, run them, and establish baseline understanding. This is Predict and Run working together.

**Lessons -- Investigate.** The lessons within each chapter systematically explore the concept. You trace variables, test edge cases, ask your AI assistant targeted questions, and verify every answer by running code yourself. Investigation is where comprehension deepens.

**Exercises -- Modify.** Each chapter includes modification exercises that progress from simple changes to substantial adaptations. You work within the safety net of functioning code, building confidence through targeted alterations.

**Capstone -- Make.** Each chapter ends with a Make challenge: a new problem that requires you to apply the concept independently, using spec-driven development and your AI assistant as a review partner -- not a ghostwriter.

This structure is not accidental. It is the deliberate application of a research-validated pedagogy to programming education in the AI era. You are not learning Python the way it was taught in 2016. You are learning it the way it should be learned in 2026 -- with comprehension as the foundation, AI as the partner, and your own growing expertise as the goal.

---

## From PRIMM to Professional Practice

There is a direct line from the PRIMM-AI cycle you practice in this book to the professional workflow you will use as a developer.

In professional AI-driven development, the cycle looks like this:

| PRIMM-AI Stage | Professional Equivalent | What You Do |
|---------------|------------------------|-------------|
| **Predict** | Spec | Write a specification for what you need -- define inputs, outputs, constraints |
| **Run** | Generate | Use your AI coding assistant to produce the implementation |
| **Investigate** | Review | Read the generated code, trace its logic, test edge cases |
| **Modify** | Refine | Adjust the code to match your exact needs -- fix bugs, improve naming, add error handling |
| **Make** | Ship | Deploy the code with confidence because you understand it |

By the time you finish Parts 4 and 5, you will have completed hundreds of PRIMM-AI cycles. The Predict habit will be automatic. The Investigate instinct will be second nature. The Modify skill will be well-practiced. And the Make confidence -- the ability to sit down and build something new, with AI as your partner -- will be earned, not assumed.

That is what it means to learn programming in the age of AI. Not faster. Not easier. *Better.*

---

## PRIMM-AI and the Ten Axioms

PRIMM-AI is the operating system. The Ten Axioms of AI-Driven Development (Chapter 31) are the first application that runs on it. The Ten Axioms tell you what professional practice looks like. PRIMM-AI tells you how to internalize those practices. They are complementary: one defines the destination, the other defines the road.

Here is how the PRIMM-AI stages map to the axioms you will learn in the next chapter:

| PRIMM-AI Stage | Axiom Connection | What the Mapping Means |
|---------------|-----------------|----------------------|
| **Predict** | Axiom VII: Tests Are the Specification | Predicting output is a mental test. You define expected behavior before execution -- the same principle behind test-driven development. |
| **Run** | Axiom VII + Axiom IX: Verification Is a Pipeline | Running code and comparing to predictions is verification. As your programs grow, this becomes automated testing and CI pipelines. |
| **Investigate** | Axiom V: Types Are Guardrails + Axiom X: Observability | Tracing variables and testing edge cases is how you build the diagnostic skill that types and observability tools formalize. |
| **Modify** | Axiom IV: Composition Over Creation | Modifying existing code is composition in action. You assemble and adapt rather than building from nothing. |
| **Make** | Axiom II: Knowledge Is Markdown + Axiom III: Programs Are Structured Prose | Writing specs before code means treating programs as structured knowledge -- markdown first, code second. |

As you read the Ten Axioms in Chapter 31, you will recognize PRIMM-AI at work in every one. The axioms are not abstract principles detached from your learning process -- they are the professional formalization of the habits you are building right now.

---

## Key Takeaways

1. **PRIMM-AI is the learning framework for every Python lesson in this book.** Five stages: Predict, Run, Investigate, Modify, Make -- each with an AI-native dimension.

2. **Comprehension comes before production.** Four of the five stages are about understanding. Only the final stage involves writing new code. This ratio matches the reality of AI-era development.

3. **The comprehension crisis is real.** AI can generate code cheaply. The bottleneck has shifted from writing to verifying. PRIMM-AI builds the verification skills that AI cannot replace.

4. **The five rules are non-negotiable.** Never run code you have not predicted. Never trust an explanation you have not tested. Modify before you make. Write the spec before the code. Use AI as a partner, not a crutch.

5. **PRIMM-AI connects directly to professional practice.** The Predict-Run-Investigate-Modify-Make cycle maps to the professional Spec-Generate-Review-Refine-Ship workflow. You are practicing the professional cycle from your first lesson.

6. **PRIMM-AI is tool-agnostic.** The framework applies to Claude Code, Cursor, GitHub Copilot, Gemini CLI, or any AI coding assistant. The pedagogy is the constant; the tool is the variable.

---

## Looking Ahead

You now know *how* you will learn. The next three chapters build the complete system:

- **Chapter 31: The Ten Axioms** gives you the principles that guide every phase of AI-driven development -- what professional practice looks like.
- **Chapter 32: The Development Environment** installs your tools -- uv, pyright, ruff, pytest, and Git -- so that every axiom has a tool enforcing it.
- **Chapter 33: Reading Python** is where you read your first Python code using PRIMM-AI, practicing Predict-Run-Investigate on real programs.

The framework is set. The principles come next.

---

## References

- Sentance, S., Waite, J., and Kallia, M. (2019). "Teaching computer programming with PRIMM: a sociocultural perspective." *Computer Science Education*, 29(2-3), 136-176.
- Sentance, S., Waite, J., and Kallia, M. (2019). "Teachers' Experiences of using PRIMM to Teach Programming in School." *Proceedings of the 50th ACM Technical Symposium on Computer Science Education (SIGCSE '19)*, 476-482.
- Sentance, S. and Waite, J. (2017). "PRIMM: Exploring pedagogical approaches for teaching text-based programming in school." *Proceedings of the 12th Workshop in Primary and Secondary Computing Education (WiPSCE '17)*.
- PRIMM Portal: [https://primmportal.com](https://primmportal.com)

---

## Try With AI

Open any AI coding assistant (Claude Code, ChatGPT, Gemini, or another tool you have access to) and try these prompts. You do not need Python installed yet -- these are conceptual explorations.

### Prompt 1: The Comprehension Shift

```
Explain the difference between reading code and writing code.
Why is reading code a more important skill than writing code
in 2026, when AI can generate code in seconds? Give me a
concrete example where a developer who can only prompt AI
(but cannot read the output) would get into trouble.
```

**What you are learning:** You are testing your understanding of the comprehension crisis against the AI's explanation. Does the AI's example match your understanding of why PRIMM-AI prioritizes reading over writing? If the AI gives a generic answer, push back: "Give me a specific, realistic scenario, not a general statement."

### Prompt 2: Why Prediction Matters

```
I am learning to program using a method called PRIMM, where
I predict what code will do before I run it. My friend says
this is a waste of time -- "just run it and see." Give me
three specific reasons why predicting output before running
code builds a stronger programmer than skipping straight to
execution.
```

**What you are learning:** You are evaluating whether the AI's reasoning aligns with the pedagogical logic behind PRIMM-AI. Compare its three reasons with what you read in this chapter. If the AI misses the key insight -- that prediction forces commitment, which creates a measurable gap between expectation and reality -- ask it directly about that mechanism.
