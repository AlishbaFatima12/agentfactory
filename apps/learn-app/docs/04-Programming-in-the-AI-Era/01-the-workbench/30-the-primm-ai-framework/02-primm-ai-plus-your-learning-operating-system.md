---
sidebar_position: 2
title: "PRIMM-AI+: Your Learning Operating System"
description: "Adapt PRIMM for AI-assisted learning with PRIMM-AI+ enhancements: AI permissions at each stage, AI-free checkpoints, mastery gates, confidence scoring, a verification ladder, error taxonomy, and the deep connection between PRIMM-AI+ and professional software development practice."
keywords: ["PRIMM-AI+", "PRIMM-AI", "AI-assisted learning", "AI-free checkpoints", "mastery gates", "verification ladder", "confidence scoring", "predict run investigate modify make", "Claude Code", "learning framework", "coding education", "Socratic tutoring", "ten axioms"]
chapter: 30
lesson: 2
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "PRIMM-AI+ Stage Execution"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can execute all five PRIMM-AI+ stages with an AI coding assistant, maintaining appropriate boundaries and AI-free checkpoints at each stage (e.g., writing prediction before asking AI, attempting modification before requesting hints)"

  - name: "AI Boundary Management"
    proficiency_level: "B1"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can evaluate whether a specific AI interaction is acting as partner or crutch using the AI Permissions Table, and articulate why the distinction matters for long-term skill development"

  - name: "Verification Ladder Reasoning"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can describe how the PRIMM-AI+ verification instinct (Predict then Run) scales from learning exercises to production systems through the five rungs of the Verification Ladder"

  - name: "PRIMM-to-Professional Mapping"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can map each PRIMM-AI+ stage to its professional equivalent (Spec, Generate, Review, Refine, Ship) and explain why learning habits transfer directly to production workflows"

learning_objectives:
  - objective: "Apply PRIMM-AI+ stages with an AI coding assistant while maintaining appropriate boundaries, AI-free checkpoints, and mastery gates at each stage"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Given a Python program, student demonstrates the full PRIMM-AI+ cycle: writes prediction with confidence score before running, runs and records comparison, investigates with targeted AI questions after providing own explanation first, modifies independently before requesting hints, and builds a new function from written spec"

  - objective: "Evaluate whether a specific AI interaction functions as a learning partner or a crutch using the AI Permissions Table"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student reviews three AI interaction transcripts and classifies each as partner (student learned something new) or crutch (student produced output without understanding), citing the relevant AI Permission rule"

  - objective: "Describe the Verification Ladder from PRIMM-AI+ learning exercises through production observability"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student explains in their own words how predicting-then-running during learning connects to testing-then-deploying in production, referencing at least three rungs of the Verification Ladder"

cognitive_load:
  new_concepts: 7
  assessment: "7 new concepts (AI roles at each stage, AI permissions table, AI-free checkpoints, mastery gates, five PRIMM-AI+ rules, verification ladder, confidence scoring) at the upper boundary of A2 limit of 5-7. Mitigated by the walkthrough grounding each concept in a single concrete example."

differentiation:
  extension_for_advanced: "Compare PRIMM-AI+ boundaries with pair programming protocols (driver/navigator) and formal code review practices. Analyze how the AI Permissions Table maps to specific failure modes in AI-assisted development."
  remedial_for_struggling: "Focus exclusively on the five rules and the calculate_total walkthrough. Treat AI permissions, mastery gates, and the verification ladder as reference material to revisit when starting Chapter 33."
---

# PRIMM-AI+: Your Learning Operating System

In the previous lesson, you learned the five stages of PRIMM -- Predict, Run, Investigate, Modify, Make -- and saw how each stage builds a specific cognitive skill. You traced through a greeting program, understood why comprehension comes before creation, and discovered the research showing that students who read and predict code before writing it develop stronger programming ability. The framework was designed for classrooms with human teachers guiding the process.

You do not have a classroom teacher. You have an AI coding assistant.

That changes the partner, not the pedagogy. PRIMM with an AI coding assistant as your learning partner is called **PRIMM-AI** -- the same five stages, but AI generates examples for you to predict, executes code for you to compare, answers your investigation questions, and reviews your completed work. That adaptation is powerful. But it has a gap: without structural safeguards, AI makes it easy to skip stages and fake understanding. You can ask AI to explain the code before you predict, request a full solution before you modify, or let it write your Make project while you watch. Nothing in basic PRIMM-AI prevents this.

Here is what PRIMM-AI looks like -- the same five stages, now with an AI partner:

| Stage | You | AI |
|-------|-----|-----|
| **Predict** | Read the code, write your prediction | Generates code samples at the right difficulty |
| **Run** | Compare prediction to actual output | Executes the program, shows raw output |
| **Investigate** | Ask targeted questions, trace variables | Answers questions, generates trace tables |
| **Modify** | Change the code yourself | Compares your version, suggests alternatives |
| **Make** | Write a spec, then implement | Reviews your spec and completed code |

This is a solid foundation. But nothing in this table prevents you from asking AI to explain the code during Predict, or to write the full solution during Make. The boundaries are implied, not enforced. That is the gap.

**PRIMM-AI+** closes that gap. It keeps everything from PRIMM-AI -- every stage, every AI role, every rule -- and adds nine structural enhancements:

| # | Enhancement | What It Adds |
|---|------------|-------------|
| 1 | **AI-Free Checkpoints** | Moments where AI is explicitly not allowed -- diagnostic, not punitive |
| 2 | **Stage-by-Stage AI Permissions** | Exact rules for what AI may and may not do at each stage |
| 3 | **Mandatory Trace Artifacts** | You must produce something visible (trace table, explanation, or failure note) during Investigate |
| 4 | **Mastery Gates** | You must earn the right to proceed to the next stage |
| 5 | **Verification Ladder** | Five rungs connecting learning predictions to production observability |
| 6 | **Error Taxonomy** | Five categories of bugs, so you diagnose before you fix |
| 7 | **Confidence Scoring** | Rate your certainty 1-5 before each prediction -- reveals false confidence |
| 8 | **Classroom and Solo Modes** | Same framework works for both -- this book uses solo mode |
| 9 | **Chapter-End Rubric** | Five-dimension self-assessment at the end of every programming chapter |

You will learn each enhancement in detail throughout this lesson and the next. By the end of Lesson 3, you will have the complete PRIMM-AI+ picture.

PRIMM-AI+ is tool-agnostic. Claude Code, Cursor, GitHub Copilot, Gemini CLI -- the boundaries work the same way regardless of which AI coding assistant you use. The pedagogy is the constant. The AI tool is the variable. We use Claude Code as the primary partner throughout this book because it integrates with the Spec-Driven Development workflow you learned in Chapter 5, but every principle transfers.

---

## AI Roles at Each Stage

Each PRIMM-AI+ stage defines what the AI does, what you do, and -- critically -- what the AI must not do. The "must not" rules exist because AI is eager to help. Helpfulness without boundaries destroys the learning that each stage is designed to produce.

### Predict -- AI Generates, You Think

**What you do:** Study a program and predict its output before anything runs. Write down what you think each line does, what the output will be, what happens with edge cases. Record a confidence score (1-5).

**What the AI does:** Generates programs at the right difficulty level for your current stage. Provides code for you to analyze.

**What the AI must NOT do:** Explain the code before you have predicted. If the AI tells you what a program does before you think about it, the Predict stage produces nothing -- you are reading an explanation, not building a mental model. You can ask your AI assistant something like: *"Generate a short Python program that demonstrates a for loop. Include type hints. Do not explain the code -- just show it to me."* The key instruction is "do not explain" -- that preserves your prediction space.

### Run -- AI Executes, You Compare

**What you do:** Run the program and compare the actual output to your prediction. Where were you right? Where were you wrong? What surprised you? Record the comparison.

**What the AI does:** Executes the program. Runs it again with different inputs you specify. Shows raw output without interpretation.

**What the AI must NOT do:** Interpret the results for you. The learning happens in the gap between your prediction and the actual output. If AI fills that gap with an explanation, you skip the comparison step that builds understanding.

### Investigate -- AI as Socratic Tutor

**What you do:** Write your own explanation of how the program works first. Then ask specific questions about what you observed. Focus on the parts that surprised you during Run. Probe the mechanics you do not yet understand.

**What the AI does:** Answers your questions directly. Generates trace tables showing variable values at each step. Suggests investigation questions you might not have thought to ask. You direct the conversation: *"Trace through this program and show me the value of each variable after every line. Present it as a table."*

**What the AI must NOT do:** Provide unsolicited explanations. If you ask about line 3, the AI answers about line 3 -- it does not explain the entire program. The investigation is yours to direct.

**Critical rule:** Verify every AI explanation by running code yourself. AI can be wrong. When the AI says "this line does X," test it. Modify the line and see if the behavior matches the explanation. This verification instinct is the single most important habit PRIMM-AI+ builds.

### Modify -- AI as Comparison Partner

**What you do:** Change the program yourself. Add a feature, fix a limitation, extend the behavior. You write the modification first, then ask for feedback.

**What the AI does:** After you modify, shows an alternative approach. Compares your version to the original. Explains tradeoffs between approaches. Can provide a minimal hint or targeted diff if you are stuck -- but not a complete rewrite. You might say: *"I am trying to add a discount parameter. What am I missing?"*

**What the AI must NOT do:** Modify the code for you. The moment AI writes the modification, you are in Make territory without having done the cognitive work that Modify requires. Your hands produce the change; AI evaluates it afterward.

### Make -- AI as Review Partner, Not Ghostwriter

**What you do:** Build something new from a specification you write. Define what the program should do, then implement it yourself.

**What the AI does:** Reviews your specification for completeness. Answers specific syntax questions. Reviews your completed code for correctness and style. A typical Make interaction has two parts: first you ask AI to review your spec (*"Does this cover all edge cases?"*), then after implementing, you ask AI to review your code (*"Review for correctness. Do not rewrite -- just point out issues."*).

**What the AI must NOT do:** Write the solution. If AI writes the program and you submit it, you have produced output without learning. The Make stage proves you can apply what you learned in the previous four stages independently.

---

## AI Permissions Table

The table below makes the boundaries concrete. The Right column shows prompts that keep AI as a partner. The Wrong column shows prompts that turn it into a crutch.

| Stage | AI Permission | Right Interaction | Wrong Interaction |
|-------|--------------|-------------------|-------------------|
| **Predict** | AI may generate the code sample. AI must not reveal the answer or explain the code. | "Generate a program about list comprehensions. Do not explain the code." | "What will this code print?" |
| **Run** | AI may execute the program and display output. No restrictions. | "Run this program and show the output." | (No wrong interaction at this stage) |
| **Investigate** | AI may explain and trace, but only after the learner provides a first explanation. | "What does enumerate return?" (after writing own trace) | "Explain everything about this code." |
| **Modify** | AI may provide a minimal hint or targeted diff. Not a complete rewrite. | "I am trying to add a discount parameter. What am I missing?" | "Add a discount parameter to this function." |
| **Make** | AI may review the specification and completed solution. AI must not write the solution. | "Review my code for correctness and edge cases. Do not rewrite it." | "Write a function that generates an invoice." |

When you catch yourself about to use a prompt from the Wrong column, pause and rephrase. The Right column prompts produce learning. The Wrong column prompts produce output.

---

## AI-Free Checkpoints

Throughout Parts 4 and 5, you will occasionally see **[AI-FREE]** marked in the margin of lessons. When you see this marker, close your AI assistant. Minimize the window, switch to a different tab, put it away. These moments are diagnostic -- they reveal whether you have actually internalized the concept or whether you have been leaning on AI without realizing it.

The rules for AI-free checkpoints are simple:

- **Predict is always AI-free.** You make your prediction without any AI assistance. This is non-negotiable.
- **Make begins AI-free.** You write your specification and make your first implementation attempt without AI. Only after that first attempt do you ask AI for review.
- **Other stages allow AI after your first attempt.** In Investigate, you write your own explanation before asking AI. In Modify, you attempt the change before requesting hints.

AI-free checkpoints are not punishment. They are the moments when you discover whether you truly understand something or merely recognize it when AI explains it. There is a large gap between those two states, and the checkpoints make the gap visible.

---

## Mastery Gates

Each stage transition has a formal requirement. You cannot (or rather, should not) move to the next stage until the gate condition is met:

| Transition | Mastery Gate | Why It Exists |
|-----------|-------------|---------------|
| Before Run | Written prediction exists (not just a mental one) | A vague sense of "it probably prints something" is not a prediction. Writing forces commitment. |
| Before Investigate | Comparison of prediction to actual output recorded | Without recording the gap, you lose the learning signal. |
| Before Modify | Can explain how the program works, not just what it does | "It prints a greeting" is *what*. "It joins two strings with a comma separator using the + operator" is *how*. |
| Before Make | Written specification exists | Spec-first is not optional. Defining expected behavior before coding is the professional habit PRIMM-AI+ builds. |

These gates feel unnecessary when a lesson is going well. They prove their value when a lesson is not -- when you discover at the Modify gate that you cannot actually explain how the program works, only what it outputs. That discovery saves you from writing confused code in the Make stage.

---

## Mandatory Trace Artifacts

Every Investigate stage must produce something visible. A vague sense of "I think I understand it" is not investigation -- it is wishful thinking. PRIMM-AI+ requires you to create at least one of these artifacts before moving to Modify:

- **A trace table** showing the value of each variable after every line executes
- **A plain-English explanation** describing how the program works in your own words
- **A failure note** documenting what you tried to trace and where you got stuck

The third option matters most. If you cannot trace the program or explain it, that is not a sign of failure -- it is a diagnostic signal. A failure note that says "I do not understand how `round()` decides whether to round up or down" gives you an exact target for your AI investigation questions. Without the artifact requirement, you would skip past the confusion and carry it silently into Modify.

The trace table from the `calculate_total` walkthrough earlier in this lesson is an example of a mandatory artifact. The mastery gate for Investigate ("can explain *how*, not just *what*") depends on having produced one.

---

## A Complete PRIMM-AI+ Lesson Walkthrough

Theory is useful. Practice is better. Here is what a single PRIMM-AI+ lesson looks like end-to-end, using a concrete Python program.

> **Remember:** You are not expected to understand every line of this code. This walkthrough shows what a complete PRIMM-AI+ lesson looks like. Focus on the process, not the syntax.

```python
def calculate_total(prices: list[float], tax_rate: float = 0.17) -> float:
    """Calculate the total price including tax."""
    subtotal: float = sum(prices)
    tax: float = subtotal * tax_rate
    return round(subtotal + tax, 2)

items: list[float] = [29.99, 15.50, 42.00]
total: float = calculate_total(items)
print(f"Total with tax: ${total}")

discounted_total: float = calculate_total(items, 0.05)
print(f"Total with discount tax: ${discounted_total}")
```

### Stage 1: Predict [AI-FREE]

Before running anything, answer these questions on paper or in a note:

- What will the first `print` statement output? The prices add to 87.49. Tax at 0.17 is 14.8733. Total is 102.3633, rounded to 102.36. So: `Total with tax: $102.36`.
- What will the second `print` statement output? Tax at 0.05 is 4.3745. Total is 91.8645, rounded to 91.86. So: `Total with discount tax: $91.86`.
- What does `tax_rate: float = 0.17` mean? The notation after `=` suggests a default value -- if you call the function without specifying a tax rate, it uses 0.17.
- What does `-> float` mean? It appears to describe what the function gives back -- a floating-point number.

**Confidence score:** Rate yourself 1-5. Write it down next to your prediction.

**Mastery gate check:** Do you have a written prediction with a confidence score? If yes, proceed to Run.

### Stage 2: Run

Execute the program (ask your AI assistant to run it, or run it directly when you have Python set up later). Here is the output:

```
Total with tax: $102.36
Total with discount tax: $91.86
```

Compare your predictions. Were you right about the default tax rate? Did you get the rounding correct? If your predictions matched, your mental model is accurate for this pattern. If they diverged, you have specific questions for the next stage.

**Mastery gate check:** Have you recorded where your prediction matched and where it diverged? If yes, proceed to Investigate.

### Stage 3: Investigate

First, write your own explanation of how the function works. Even a rough version counts: "It takes a list of numbers, adds them up, calculates tax, and rounds the result." Only after writing your explanation should you ask AI for deeper investigation.

Now probe the mechanics. Focus on whatever surprised you during Run. Ask your AI assistant targeted questions:

- *"Trace through `calculate_total(items)` step by step and show me the value of each variable."* -- The AI returns a trace table. But do not stop there: verify the trace by checking the math yourself (87.49 times 0.17 equals 14.8733, plus 87.49 equals 102.3633, rounded to 102.36).
- *"What happens if the list is empty?"* -- Explore the edge case. Does the function crash or return zero?
- *"What if I pass a string instead of a list of numbers?"* -- Test a type mismatch and observe what happens.

Each question sharpens your understanding of how the function behaves under different conditions. The AI answers; you verify by checking the logic yourself. That verification habit is Rule 2 in action.

**Mastery gate check:** Can you explain *how* the function works, not just *what* it does? Can you describe the role of `sum()`, the multiplication, and `round()`? If yes, proceed to Modify.

### Stage 4: Modify

Change the program yourself. Two challenges:

**Challenge A:** Add a `discount` parameter that subtracts a flat amount before tax is calculated.

**Challenge B:** Change the function so it returns a breakdown (subtotal, tax amount, and total) instead of just the total.

Attempt both modifications before asking AI for any help. If you get stuck, ask for a hint -- not a solution: *"I am trying to add a discount parameter. What am I missing?"*

After you write your modifications, show both versions to your AI assistant and ask it to compare them. The AI might point out that your discount could make the subtotal negative -- an edge case you had not considered. That feedback makes your next version stronger.

### Stage 5: Make [AI-FREE start]

Build something new. Write a specification first -- without AI: *"Create a function that accepts a list of item names and prices, applies tax, and returns a formatted summary showing each item, the subtotal, the tax, and the total."*

**Mastery gate check:** Do you have a written specification? If yes, implement it.

Attempt the implementation yourself. When you finish your first attempt, then bring AI back in. Show your spec to your AI assistant for review -- ask whether you have covered all edge cases. Then ask the AI to review your code for correctness without rewriting it.

You have now completed a full PRIMM-AI+ cycle: predicted with a confidence score, ran and recorded the comparison, investigated after providing your own explanation, modified independently before requesting hints, and built from a written specification -- with AI as partner at every stage and ghostwriter at none.

---

## The Five PRIMM-AI+ Rules

These rules are operational discipline, not suggestions. Each one prevents a specific failure mode in AI-assisted learning.

**Rule 1: Never run code you have not predicted.** This rule builds your mental compiler. Every time you predict before running, you strengthen the neural pathways that let you read code and understand it. Skip the prediction and you train yourself to depend on the Run button instead of your own reasoning.

**Rule 2: Never trust an explanation you have not tested.** AI explanations can be confident and wrong. When AI says "this function returns X," run it and verify. This verification mindset transfers directly to professional practice -- senior engineers test assumptions, junior engineers trust documentation.

**Rule 3: Modify before you make.** Modification has lower cognitive load than creation. When you modify an existing program, you have a working reference, a known structure, and a safety net. When you create from scratch, you have nothing. Modification builds the skills that creation requires.

**Rule 4: Write the spec before the code.** This is Spec-Driven Development from Chapter 5, applied to learning. Defining what your program should do -- inputs, outputs, edge cases, success criteria -- before writing a single line of code forces you to think about the problem before the solution. AI is dramatically better at generating correct code when the specification is clear.

**Rule 5: Use AI as a partner, not a crutch.** The test is simple. After an AI interaction, do you understand more than you did before? If yes -- partner. Do you have working code but understand the same amount? If yes -- crutch. Partner interactions grow your capability. Crutch interactions grow your dependency.

---

## The Verification Ladder

The instinct you build in PRIMM-AI+ -- predict, then verify -- is the foundation of a ladder that extends all the way to production systems. Each rung builds on the one before it.

| Rung | Question | Maps To |
|------|----------|---------|
| 1. **Prediction** | What do I think this code does? | PRIMM-AI+ Predict and Run |
| 2. **Types** | Is the structure valid? | Axiom V: Types Are Guardrails |
| 3. **Tests** | Is the behavior correct? | Axiom VII: Tests Are the Specification |
| 4. **Pipeline** | Do all checks pass together? | Axiom IX: Verification Is a Pipeline |
| 5. **Observability** | Is it still correct in production? | Axiom X: Observability Extends Verification |

When you predict the output of `calculate_total` and then run it to check, you are practicing the same cognitive pattern that a CI/CD pipeline uses when it runs 500 tests before deploying to production. The scale changes. The instinct does not.

You will encounter the axioms referenced in this table when you reach Chapter 31. For now, the key insight is that the predict-then-verify habit you are building is not a beginner exercise you will outgrow. It is the foundation of every verification practice in professional software engineering.

---

## Confidence Scoring

In the previous lesson, you saw the 1-5 confidence scale during the Predict stage. Here is how to use it systematically throughout Parts 4 and 5.

| Score | Meaning |
|-------|---------|
| 1 | No idea -- complete guess |
| 2 | Vague guess -- something about a greeting? |
| 3 | Think I know but could be wrong |
| 4 | Fairly confident -- I see how the pieces fit |
| 5 | Certain -- I can describe the exact output |

After each prediction, record four things:

1. **Your prediction** -- what you think the code will do
2. **Your confidence score** -- how certain you are (1-5)
3. **The actual result** -- what the code actually did
4. **Your revised explanation** -- what you now understand that you did not before

**Why this matters:** False confidence -- rating yourself a 5 and getting it wrong -- is the most dangerous state for an AI-era developer. It means you *think* you understand code but you do not. When AI generates code you falsely believe you understand, you ship bugs you cannot find. Confidence scoring trains you to know when you know and when you do not. That calibration is a professional skill.

Over the course of Parts 4 and 5, your calibration should improve. Early on, you will probably rate yourself too high (overconfident) or too low (underconfident). Both are normal. The goal is not to always score 5. The goal is for your confidence scores to accurately predict your actual accuracy.

---

## Error Taxonomy Preview

There are five kinds of bugs. You do not need to memorize this table now -- it is a vocabulary list. You will practice finding each kind starting in Chapter 33.

| Error Category | Description |
|---------------|-------------|
| **Type Error** | Structural mismatch: passed a string where a list was expected |
| **Logic Error** | Correct structure, wrong result: discount applied after tax instead of before |
| **Specification Error** | Correct implementation of the wrong thing |
| **Data/Edge-Case Error** | Failures with unusual inputs: empty lists, negative numbers |
| **Orchestration Error** | Component interaction failure: function called at the wrong time |

When you encounter a bug during Investigate or Modify, try to classify it using this table. Naming the kind of error helps you search for it systematically rather than staring at the code hoping the problem becomes visible.

---

## PRIMM-AI+ and the Ten Axioms: The Complete System

The next chapter introduces the Ten Axioms of AI-Driven Development -- the principles that define what professional software looks like. PRIMM-AI+ and the Ten Axioms are not separate topics. They form a single system.

**PRIMM-AI+ is the learning operating system. The Ten Axioms are the first application that runs on it.**

Here is why: PRIMM-AI+ is about the developer -- how you build understanding, how you learn to read and write code, how you develop judgment. The Ten Axioms are about the software -- properties that well-engineered programs possess (types, tests, version control, observability). You learn the axioms *through* PRIMM-AI+, not alongside it.

### Stage-to-Axiom Mapping

Each PRIMM-AI+ stage has a direct connection to specific axioms you will learn in Chapter 31:

| PRIMM-AI+ Stage | Axiom Connection | What the Mapping Means |
|---|---|---|
| **Predict** | Axiom VII: Tests Are the Specification | Writing a test before code IS the professional version of Predict. `assert calculate_shipping(100.0, "express") == 12.50` is a prediction committed to code. Test-Driven Generation is Predict at production scale. |
| **Run** | Axiom VII + Axiom IX: Verification Is a Pipeline | A CI/CD pipeline automates Run: every commit triggers a comparison between test predictions and actual behavior. The pipeline runs your predictions for you, thousands of times. |
| **Investigate** | Axiom V: Types Are Guardrails + Axiom X: Observability | A type checker investigates data flow at compile time. Production logs investigate behavior at runtime. The investigation instinct -- "what is actually happening here?" -- is the same at every scale. |
| **Modify** | Axiom IV: Composition Over Creation | Composable systems are designed to be modified. Emma's 12-line Makefile (from Chapter 31, Axiom I) was easy to modify because each line did one thing. James's 400-line script was impossible to modify because everything was tangled together. |
| **Make** | Axiom II: Knowledge Is Markdown + Axiom III: Programs Over Scripts | Spec first means knowledge captured in markdown. A proper program with types, tests, and structure -- not a throwaway script -- is what Make produces at professional scale. |

### Why PRIMM-AI+ Is Not an Axiom

You might wonder: if PRIMM-AI+ connects to all ten axioms, why is it not the eleventh axiom? Because the ten axioms describe properties of the *software* -- characteristics that well-engineered programs have. PRIMM-AI+ describes the *developer* -- how you build the understanding needed to create software with those properties. PRIMM-AI+ is the meta-framework through which you learn everything else. It operates at a different level of abstraction.

Think of it this way: an operating system is not an application. It is the environment that applications run on. PRIMM-AI+ is your learning operating system. The ten axioms are the first set of applications you will install.

---

## From Learning to Professional Practice

Each PRIMM-AI+ stage maps directly to a step in the professional AI-assisted development workflow you will use in Parts 5 and 6:

| PRIMM-AI+ Stage | Professional Equivalent | What Changes at Scale |
|---|---|---|
| **Predict** | Write the specification | You define expected behavior before any code exists |
| **Run** | Generate and execute | AI generates code from your spec; you run it against tests |
| **Investigate** | Review the output | You examine generated code for correctness, security, and maintainability |
| **Modify** | Refine iteratively | You adjust the spec or the code based on what the review revealed |
| **Make** | Ship to production | You deliver a complete, tested, documented solution |

By the time you finish Parts 4 and 5, the Predict habit will be automatic. You will write specifications before asking AI to generate code -- not because a rule says so, but because you will have practiced prediction hundreds of times and internalized the pattern. The Investigate instinct will be second nature. You will read AI-generated code with the same critical eye you developed tracing through `calculate_total`. The Modify skill will be well-practiced. You will refine iteratively, improving code in stages rather than expecting perfection on the first attempt.

PRIMM-AI+ is not a temporary training wheel. It is the permanent operating system for working with AI.

---

## Chapter-End Rubric Preview

Starting in Chapter 33, every programming chapter ends with a self-assessment against five dimensions. Here is the rubric you will use:

| Dimension | What It Measures |
|-----------|-----------------|
| **Prediction Accuracy** | How often were your predictions correct? |
| **Trace Quality** | Were your trace artifacts accurate without AI help? |
| **Explanation Quality** | Can you explain the concept in your own words? |
| **Modification Quality** | Were your modifications correct on the first or second attempt? |
| **Independent Make** | Was the spec and first attempt produced without AI? |

Each dimension has three levels: **Developing** (need more practice), **Competent** (solid understanding), and **Fluent** (ready to move on). You do not need to be Fluent in every dimension to proceed -- Competent is the target. But if you score Developing on Prediction Accuracy or Explanation Quality, revisit those concepts before moving forward.

---

## PRIMM-AI+ at a Glance

This table consolidates everything. Use it as a reference card whenever you start a PRIMM-AI+ lesson.

| Stage | AI Permission | Checkpoint | Mastery Gate | Artifact |
|-------|--------------|------------|-------------|----------|
| **Predict** | AI-free | Write prediction + confidence score | Written prediction exists | Prediction with confidence score |
| **Run** | AI allowed | Compare prediction to output | Comparison recorded | Prediction vs. actual record |
| **Investigate** | AI after learner explanation | Learner explains first | Learner can explain how, not just what | Trace table, explanation, or failure note |
| **Modify** | AI for hints/diffs only | Learner attempts first | Learner explains the target behavior | Modified code with prediction |
| **Make** | AI for review only | Spec and first attempt AI-free | Written spec or test exists | Specification + solution + rubric |

---

:::note If You Are New to Programming
The predictable structure is your safety net. You will never be thrown into the deep end. By the time a chapter asks you to write code, you will have already predicted, run, investigated, and modified programs using the same concepts. Every Make exercise has four stages of preparation behind it. The mastery gates ensure you do not skip ahead before you are ready.
:::

:::note If You Have Coded Before
This structure mirrors professional code review: read the PR, understand the logic, suggest changes, build your own feature. PRIMM-AI+ formalizes what you already do informally -- and adds explicit AI boundaries, AI-free checkpoints, and mastery gates that prevent the over-reliance pattern experienced developers fall into just as easily as beginners.
:::

---

## Key Takeaways

- PRIMM-AI+ keeps all five stages from PRIMM and adds an AI partner with clear boundaries, AI-free checkpoints, mastery gates, and confidence scoring at each stage.
- The AI Permissions Table defines exactly what AI may and may not do at each stage -- use it to distinguish partner interactions from crutch interactions.
- The five rules (predict before running, test every explanation, modify before making, spec before code, partner not crutch) are operational discipline that prevents AI dependency.
- The Verification Ladder connects your learning predictions to production observability across five rungs: Prediction, Types, Tests, Pipeline, Observability.
- Every chapter in Parts 4-6 follows the PRIMM-AI+ cycle implicitly: see code, investigate it, modify it, build something new.
- PRIMM-AI+ is the learning operating system; the Ten Axioms (Chapter 31) are the first application. Your learning habits map directly to professional practice.

---

## Try With AI

### Prompt 1: Practice the Predict Stage

```
Ask your AI coding assistant to generate a short Python program
(about 10 lines) that uses a for loop and an if statement to
process a list of numbers. Tell it to include type hints and
to NOT explain the code.
```

After the AI generates the program, look away from the response. On paper, write down: What does this program do? What will it print? What happens if the list is empty? Rate your confidence 1-5. Only after you have written your predictions and confidence score should you ask the AI to run it. Record where your prediction matched and where it diverged.

**What you are learning:** The Predict discipline with confidence scoring -- forcing yourself to build a mental model before seeing the answer and calibrating your certainty. This is the single most important habit in PRIMM-AI+, and the one most easily skipped when AI is one keystroke away.

### Prompt 2: Test the Verification Instinct

```
Ask your AI coding assistant: "Explain what Python's round()
function does with negative numbers. For example, what does
round(-2.5) return?"

Read the explanation. Then ask it to actually run round(-2.5),
round(-1.5), round(0.5), and round(1.5) and show you the
real output. Compare the explanation to the actual results.
```

Did the AI's explanation match the actual output? Python's rounding behavior surprises most people (and most AI models). The discrepancy you may find is exactly why Rule 2 exists: never trust an explanation you have not tested.

**What you are learning:** The verification instinct that forms the foundation of the Verification Ladder. When you catch an AI explanation that does not match reality, you are practicing the same skill that senior engineers use when they question production logs that "look wrong."

---

## Looking Ahead

The next lesson shows how everything fits together -- the four teaching methods embedded within PRIMM-AI+, how classroom and solo modes work, and what a typical lesson architecture looks like.

---

## References and Further Reading

- Sentance, S., Waite, J., and Kallia, M. (2019). "Teaching computer programming with PRIMM: a sociocultural perspective." *Computer Science Education*, 29(2-3), 136-176. DOI: 10.1080/08993408.2019.1608781
- Sentance, S., Waite, J., and Kallia, M. (2019). "Teachers' Experiences of using PRIMM to Teach Programming in School." *Proceedings of SIGCSE '19*, 476-482. DOI: 10.1145/3287324.3287477
- Sentance, S. and Waite, J. (2017). "PRIMM: Exploring pedagogical approaches for teaching text-based programming in school." *Proceedings of WiPSCE '17*, 113-114.
- PRIMM Portal: https://primmportal.com
- Computing Education Research: https://computingeducationresearch.org/projects/primm/
