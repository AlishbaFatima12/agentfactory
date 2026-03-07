---
sidebar_position: 2
title: "PRIMM-AI: Your Learning Operating System"
description: "Adapt PRIMM for AI-assisted learning with clear AI roles at each stage, a complete lesson walkthrough, five operational rules, and the deep connection between PRIMM-AI and professional software development practice."
keywords: ["PRIMM-AI", "AI-assisted learning", "predict run investigate modify make", "Claude Code", "learning framework", "coding education", "Socratic tutoring", "verification chain", "ten axioms"]
chapter: 30
lesson: 2
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "PRIMM-AI Stage Execution"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can execute all five PRIMM-AI stages with an AI coding assistant, maintaining appropriate boundaries at each stage (e.g., not asking AI to explain during Predict, not letting AI write code during Make)"

  - name: "AI Boundary Management"
    proficiency_level: "B1"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can evaluate whether a specific AI interaction is acting as partner or crutch, and articulate why the distinction matters for long-term skill development"

  - name: "Verification Chain Reasoning"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can describe how the PRIMM-AI verification instinct (Predict then Run) scales from learning exercises to production systems through types, tests, pipelines, and observability"

  - name: "PRIMM-to-Professional Mapping"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can map each PRIMM-AI stage to its professional equivalent (Spec, Generate, Review, Refine, Ship) and explain why learning habits transfer directly to production workflows"

learning_objectives:
  - objective: "Apply PRIMM-AI stages with an AI coding assistant while maintaining appropriate boundaries at each stage"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Given a Python program, student demonstrates the full PRIMM-AI cycle: predicts output before running, runs and compares, investigates with targeted AI questions, modifies independently, and builds a new function from spec"

  - objective: "Evaluate whether a specific AI interaction functions as a learning partner or a crutch"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student reviews three AI interaction transcripts and classifies each as partner (student learned something new) or crutch (student produced output without understanding), with justification"

  - objective: "Describe the verification chain from PRIMM-AI learning exercises through production observability"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student explains in their own words how predicting-then-running during learning connects to testing-then-deploying in production, referencing at least three levels of the verification chain"

cognitive_load:
  new_concepts: 4
  assessment: "4 new concepts (AI roles at each stage, five PRIMM-AI rules, verification chain, professional practice mapping) within A2 limit of 5-7"

differentiation:
  extension_for_advanced: "Compare PRIMM-AI boundaries with pair programming protocols (driver/navigator) and formal code review practices. Analyze how PRIMM-AI rules map to specific failure modes in AI-assisted development."
  remedial_for_struggling: "Focus exclusively on the five rules and the calculate_total walkthrough. Ignore the axiom mapping until Chapter 31 introduces the axioms directly."
---

# PRIMM-AI: Your Learning Operating System

In the previous lesson, you learned the five stages of PRIMM -- Predict, Run, Investigate, Modify, Make -- and saw how each stage builds a specific cognitive skill. You traced through a greeting program, understood why comprehension comes before creation, and discovered the research showing that students who read and predict code before writing it develop stronger programming ability. The framework was designed for classrooms with human teachers guiding the process.

You do not have a classroom teacher. You have an AI coding assistant.

That changes the dynamics but not the pedagogy. PRIMM-AI keeps the five stages identical -- the same sequence, the same cognitive goals, the same research foundation. What changes is the partner sitting next to you. Instead of a teacher walking between desks, you have an AI that can generate programs on demand, execute code instantly, answer questions at any hour, and review your work in seconds. That power makes the boundaries between stages more important, not less. Without boundaries, AI collapses all five stages into one: "write me a solution." The learning vanishes. This lesson establishes those boundaries, walks through a complete PRIMM-AI lesson from start to finish, and connects your learning process to the professional practices you will use for the rest of this book.

PRIMM-AI is tool-agnostic. Claude Code, Cursor, GitHub Copilot, Gemini CLI -- the boundaries work the same way regardless of which AI coding assistant you use. The pedagogy is the constant. The AI tool is the variable. We use Claude Code as the primary partner throughout this book because it integrates with the Spec-Driven Development workflow you learned in Chapter 5, but every principle transfers.

---

## AI Roles at Each Stage

Each PRIMM stage defines what the AI does, what you do, and -- critically -- what the AI must not do. The "must not" rules exist because AI is eager to help. Helpfulness without boundaries destroys the learning that each stage is designed to produce.

### Predict -- AI Generates, You Think

**What you do:** Study a program and predict its output before anything runs. Write down what you think each line does, what the output will be, what happens with edge cases.

**What the AI does:** Generates programs at the right difficulty level for your current stage. Provides code for you to analyze.

**What the AI must NOT do:** Explain the code before you have predicted. If the AI tells you what a program does before you think about it, the Predict stage produces nothing -- you are reading an explanation, not building a mental model. You can ask your AI assistant something like: *"Generate a short Python program that demonstrates a for loop. Include type hints. Do not explain the code -- just show it to me."* The key instruction is "do not explain" -- that preserves your prediction space.

### Run -- AI Executes, You Compare

**What you do:** Run the program and compare the actual output to your prediction. Where were you right? Where were you wrong? What surprised you?

**What the AI does:** Executes the program. Runs it again with different inputs you specify. Shows raw output without interpretation.

**What the AI must NOT do:** Interpret the results for you. The learning happens in the gap between your prediction and the actual output. If AI fills that gap with an explanation, you skip the comparison step that builds understanding.

### Investigate -- AI as Socratic Tutor

**What you do:** Ask specific questions about what you observed. Focus on the parts that surprised you during Run. Probe the mechanics you do not yet understand.

**What the AI does:** Answers your questions directly. Generates trace tables showing variable values at each step. Suggests investigation questions you might not have thought to ask. You direct the conversation: *"Trace through this program and show me the value of each variable after every line. Present it as a table."*

**What the AI must NOT do:** Provide unsolicited explanations. If you ask about line 3, the AI answers about line 3 -- it does not explain the entire program. The investigation is yours to direct.

**Critical rule:** Verify every AI explanation by running code yourself. AI can be wrong. When the AI says "this line does X," test it. Modify the line and see if the behavior matches the explanation. This verification instinct is the single most important habit PRIMM-AI builds.

### Modify -- AI as Comparison Partner

**What you do:** Change the program yourself. Add a feature, fix a limitation, extend the behavior. You write the modification.

**What the AI does:** After you modify, shows an alternative approach. Compares your version to the original. Explains tradeoffs between approaches. You might say: *"Here is the original and here is my modified version. Compare the two. Is mine correct?"*

**What the AI must NOT do:** Modify the code for you. The moment AI writes the modification, you are in Make territory without having done the cognitive work that Modify requires. Your hands produce the change; AI evaluates it afterward.

### Make -- AI as Review Partner, Not Ghostwriter

**What you do:** Build something new from a specification you write. Define what the program should do, then implement it yourself.

**What the AI does:** Reviews your specification for completeness. Answers specific syntax questions. Reviews your completed code for correctness and style. A typical Make interaction has two parts: first you ask AI to review your spec (*"Does this cover all edge cases?"*), then after implementing, you ask AI to review your code (*"Review for correctness. Do not rewrite -- just point out issues."*).

**What the AI must NOT do:** Write the solution. If AI writes the program and you submit it, you have produced output without learning. The Make stage proves you can apply what you learned in the previous four stages independently.

---

## A Complete PRIMM-AI Lesson Walkthrough

Theory is useful. Practice is better. Here is what a single PRIMM-AI lesson looks like end-to-end, using a concrete Python program.

> **Remember:** You are not expected to understand every line of this code. This walkthrough shows what a complete PRIMM-AI lesson looks like. Focus on the process, not the syntax.

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

### Stage 1: Predict

Before running anything, answer these questions on paper or in a note:

- What will the first `print` statement output? The prices add to 87.49. Tax at 0.17 is 14.8733. Total is 102.3633, rounded to 102.36. So: `Total with tax: $102.36`.
- What will the second `print` statement output? Tax at 0.05 is 4.3745. Total is 91.8645, rounded to 91.86. So: `Total with discount tax: $91.86`.
- What does `tax_rate: float = 0.17` mean? The notation after `=` suggests a default value -- if you call the function without specifying a tax rate, it uses 0.17.
- What does `-> float` mean? It appears to describe what the function gives back -- a floating-point number.

Write your predictions down. Do not run the code yet.

### Stage 2: Run

Execute the program (ask your AI assistant to run it, or run it directly when you have Python set up later). Here is the output:

```
Total with tax: $102.36
Total with discount tax: $91.86
```

Compare your predictions. Were you right about the default tax rate? Did you get the rounding correct? If your predictions matched, your mental model is accurate for this pattern. If they diverged, you have specific questions for the next stage.

### Stage 3: Investigate

Now probe the mechanics. Focus on whatever surprised you during Run. Ask your AI assistant targeted questions:

- *"Trace through `calculate_total(items)` step by step and show me the value of each variable."* -- The AI returns a trace table. But do not stop there: verify the trace by checking the math yourself (87.49 times 0.17 equals 14.8733, plus 87.49 equals 102.3633, rounded to 102.36).
- *"What happens if the list is empty?"* -- Explore the edge case. Does the function crash or return zero?
- *"What if I pass a string instead of a list of numbers?"* -- Test a type mismatch and observe what happens.

Each question sharpens your understanding of how the function behaves under different conditions. The AI answers; you verify by checking the logic yourself. That verification habit is Rule 2 in action.

### Stage 4: Modify

Change the program yourself. Two challenges:

**Challenge A:** Add a `discount` parameter that subtracts a flat amount before tax is calculated.

**Challenge B:** Change the function so it returns a breakdown (subtotal, tax amount, and total) instead of just the total.

After you write your modifications, show both versions to your AI assistant and ask it to compare them. The AI might point out that your discount could make the subtotal negative -- an edge case you had not considered. That feedback makes your next version stronger.

### Stage 5: Make

Build something new. Write a specification first: *"Create a function that accepts a list of item names and prices, applies tax, and returns a formatted summary showing each item, the subtotal, the tax, and the total."*

Show your spec to your AI assistant for review -- ask whether you have covered all edge cases. Then implement the function yourself. When you finish, ask the AI to review your code for correctness without rewriting it.

You have now completed a full PRIMM-AI cycle: predicted, ran, investigated, modified, and built -- with AI as partner at every stage and ghostwriter at none.

---

## The Five PRIMM-AI Rules

These rules are operational discipline, not suggestions. Each one prevents a specific failure mode in AI-assisted learning.

**Rule 1: Never run code you have not predicted.** This rule builds your mental compiler. Every time you predict before running, you strengthen the neural pathways that let you read code and understand it. Skip the prediction and you train yourself to depend on the Run button instead of your own reasoning.

**Rule 2: Never trust an explanation you have not tested.** AI explanations can be confident and wrong. When AI says "this function returns X," run it and verify. This verification mindset transfers directly to professional practice -- senior engineers test assumptions, junior engineers trust documentation.

**Rule 3: Modify before you make.** Modification has lower cognitive load than creation. When you modify an existing program, you have a working reference, a known structure, and a safety net. When you create from scratch, you have nothing. Modification builds the skills that creation requires.

**Rule 4: Write the spec before the code.** This is Spec-Driven Development from Chapter 5, applied to learning. Defining what your program should do -- inputs, outputs, edge cases, success criteria -- before writing a single line of code forces you to think about the problem before the solution. AI is dramatically better at generating correct code when the specification is clear.

**Rule 5: Use AI as a partner, not a crutch.** The test is simple. After an AI interaction, do you understand more than you did before? If yes -- partner. Do you have working code but understand the same amount? If yes -- crutch. Partner interactions grow your capability. Crutch interactions grow your dependency.

---

## How PRIMM-AI Maps to the Book's Structure

Every chapter in Parts 4, 5, and 6 follows the PRIMM-AI cycle implicitly:

| Book Element | PRIMM-AI Stage | What Happens |
|---|---|---|
| Chapter opening | Predict and Run | You see code, predict what it does, then see it execute |
| Core lessons | Investigate | You dig into how and why the code works |
| Exercises | Modify | You change existing programs to add features or fix issues |
| Capstone project | Make | You build something new from a specification |

You will never be dropped into a Make exercise without first working through Predict, Run, Investigate, and Modify for the same concepts. The structure is your safety net.

---

## PRIMM-AI and the Ten Axioms: The Complete System

The next chapter introduces the Ten Axioms of AI-Driven Development -- the principles that define what professional software looks like. PRIMM-AI and the Ten Axioms are not separate topics. They form a single system.

**PRIMM-AI is the learning operating system. The Ten Axioms are the first application that runs on it.**

Here is why: PRIMM-AI is about the developer -- how you build understanding, how you learn to read and write code, how you develop judgment. The Ten Axioms are about the software -- properties that well-engineered programs possess (types, tests, version control, observability). You learn the axioms *through* PRIMM-AI, not alongside it.

### Stage-to-Axiom Mapping

Each PRIMM-AI stage has a direct connection to specific axioms you will learn in Chapter 31:

| PRIMM-AI Stage | Axiom Connection | What the Mapping Means |
|---|---|---|
| **Predict** | Axiom VII: Tests Are the Specification | Writing a test before code IS the professional version of Predict. `assert calculate_shipping(100.0, "express") == 12.50` is a prediction committed to code. Test-Driven Generation is Predict at production scale. |
| **Run** | Axiom VII + Axiom IX: Verification Is a Pipeline | A CI/CD pipeline automates Run: every commit triggers a comparison between test predictions and actual behavior. The pipeline runs your predictions for you, thousands of times. |
| **Investigate** | Axiom V: Types Are Guardrails + Axiom X: Observability | A type checker investigates data flow at compile time. Production logs investigate behavior at runtime. The investigation instinct -- "what is actually happening here?" -- is the same at every scale. |
| **Modify** | Axiom IV: Composition Over Creation | Composable systems are designed to be modified. Emma's 12-line Makefile (from Chapter 31, Axiom I) was easy to modify because each line did one thing. James's 400-line script was impossible to modify because everything was tangled together. |
| **Make** | Axiom II: Knowledge Is Markdown + Axiom III: Programs Over Scripts | Spec first means knowledge captured in markdown. A proper program with types, tests, and structure -- not a throwaway script -- is what Make produces at professional scale. |

### The Verification Chain

The instinct you build in PRIMM-AI -- predict, then verify -- is the foundation of a chain that extends all the way to production systems:

| Level | What You Verify | How It Connects |
|---|---|---|
| **Learning** | "Does this code do what I predicted?" | PRIMM-AI (Predict then Run) |
| **Types** | "Does this data match the expected structure?" | Axiom V: Types Are Guardrails |
| **Tests** | "Does this function produce the correct output?" | Axiom VII: Tests Are the Specification |
| **Pipeline** | "Do all checks pass before deployment?" | Axiom IX: Verification Is a Pipeline |
| **Production** | "Is the system behaving correctly under real load?" | Axiom X: Observability Extends Verification |

Each level builds on the one before it. When you predict the output of `calculate_total` and then run it to check, you are practicing the same cognitive pattern that a CI/CD pipeline uses when it runs 500 tests before deploying to production. The scale changes. The instinct does not.

### Why PRIMM-AI Is Not an Axiom

You might wonder: if PRIMM-AI connects to all ten axioms, why is it not the eleventh axiom? Because the ten axioms describe properties of the *software* -- characteristics that well-engineered programs have. PRIMM-AI describes the *developer* -- how you build the understanding needed to create software with those properties. PRIMM-AI is the meta-framework through which you learn everything else. It operates at a different level of abstraction.

Think of it this way: an operating system is not an application. It is the environment that applications run on. PRIMM-AI is your learning operating system. The ten axioms are the first set of applications you will install.

---

## From Learning to Professional Practice

Each PRIMM-AI stage maps directly to a step in the professional AI-assisted development workflow you will use in Parts 5 and 6:

| PRIMM-AI Stage | Professional Equivalent | What Changes at Scale |
|---|---|---|
| **Predict** | Write the specification | You define expected behavior before any code exists |
| **Run** | Generate and execute | AI generates code from your spec; you run it against tests |
| **Investigate** | Review the output | You examine generated code for correctness, security, and maintainability |
| **Modify** | Refine iteratively | You adjust the spec or the code based on what the review revealed |
| **Make** | Ship to production | You deliver a complete, tested, documented solution |

By the time you finish Parts 4 and 5, the Predict habit will be automatic. You will write specifications before asking AI to generate code -- not because a rule says so, but because you will have practiced prediction hundreds of times and internalized the pattern. The Investigate instinct will be second nature. You will read AI-generated code with the same critical eye you developed tracing through `calculate_total`. The Modify skill will be well-practiced. You will refine iteratively, improving code in stages rather than expecting perfection on the first attempt.

PRIMM-AI is not a temporary training wheel. It is the permanent operating system for working with AI.

---

:::note If You Are New to Programming
The predictable structure is your safety net. You will never be thrown into the deep end. By the time a chapter asks you to write code, you will have already predicted, run, investigated, and modified programs using the same concepts. Every Make exercise has four stages of preparation behind it.
:::

:::note If You Have Coded Before
This structure mirrors professional code review: read the PR, understand the logic, suggest changes, build your own feature. PRIMM-AI formalizes what you already do informally -- and adds explicit AI boundaries that prevent the over-reliance pattern experienced developers fall into just as easily as beginners.
:::

---

## Key Takeaways

- PRIMM-AI keeps all five stages from PRIMM and adds an AI partner with clear boundaries at each stage.
- The AI's role changes at every stage: generator in Predict, executor in Run, tutor in Investigate, comparator in Modify, reviewer in Make.
- The five rules (predict before running, test every explanation, modify before making, spec before code, partner not crutch) are operational discipline that prevents AI dependency.
- Every chapter in Parts 4-6 follows the PRIMM-AI cycle implicitly: see code, investigate it, modify it, build something new.
- PRIMM-AI is the learning operating system; the Ten Axioms (Chapter 31) are the first application. The verification chain connects learning predictions to production observability.
- Your learning habits map directly to professional practice: Predict becomes specification, Investigate becomes code review, Make becomes shipping.

---

## What Comes Next

You now understand *how you will learn* throughout the rest of this book. The next chapter -- Chapter 31: Ten Axioms of AI-Driven Development -- introduces *what professional practice looks like*. You will meet the axioms through PRIMM-AI: predicting what professional code should look like, running examples, investigating why each axiom matters, and eventually building programs that embody them. After the axioms, Chapter 32 sets up your development environment and Chapter 33 begins reading Python -- your first full PRIMM-AI cycle applied to real language syntax.

---

## Try With AI

### Prompt 1: Practice the Predict Stage

```
Ask your AI coding assistant to generate a short Python program
(about 10 lines) that uses a for loop and an if statement to
process a list of numbers. Tell it to include type hints and
to NOT explain the code.
```

After the AI generates the program, look away from the response. On paper, write down: What does this program do? What will it print? What happens if the list is empty? Only after you have written your predictions should you ask the AI to run it.

**What you are learning:** The Predict discipline -- forcing yourself to build a mental model before seeing the answer. This is the single most important habit in PRIMM-AI, and the one most easily skipped when AI is one keystroke away.

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

**What you are learning:** The verification instinct that forms the foundation of the verification chain. When you catch an AI explanation that does not match reality, you are practicing the same skill that senior engineers use when they question production logs that "look wrong."

### Prompt 3: Experience the Partner vs. Crutch Distinction

```
Tell your AI coding assistant: "I want to write a Python function
that filters a list of strings to keep only the longer ones.
Do not write the function for me. Instead, ask me three questions
that will help me figure out the implementation myself."

Answer the AI's questions, then try writing the function.
After you finish, ask the AI to review your code for
correctness without rewriting it.
```

**What you are learning:** The difference between partner and crutch interaction. In the first step, AI guided your thinking without replacing it. In the second, AI reviewed your work without doing it. If you understand the function you wrote -- why it works, what it returns, how it handles edge cases -- the AI was a partner. If you cannot explain the function without looking at it, something went wrong.

---

## References and Further Reading

- Sentance, S., Waite, J., and Kallia, M. (2019). "Teaching computer programming with PRIMM: a sociocultural perspective." *Computer Science Education*, 29(2-3), 136-176. DOI: 10.1080/08993408.2019.1608781
- Sentance, S., Waite, J., and Kallia, M. (2019). "Teachers' Experiences of using PRIMM to Teach Programming in School." *Proceedings of SIGCSE '19*, 476-482. DOI: 10.1145/3287324.3287477
- Sentance, S. and Waite, J. (2017). "PRIMM: Exploring pedagogical approaches for teaching text-based programming in school." *Proceedings of WiPSCE '17*, 113-114.
- PRIMM Portal: https://primmportal.com
- Computing Education Research: https://computingeducationresearch.org/projects/primm/
