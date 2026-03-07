---
sidebar_position: 2
title: "PRIMM-AI: Learning with an AI Partner"
description: "Discover how AI coding assistants transform each PRIMM stage into a co-learning experience. Learn the AI's role at every stage, the five operational rules, and how the PRIMM-AI cycle maps directly to professional software development and the Ten Axioms."
keywords:
  [
    "PRIMM-AI",
    "AI coding assistant",
    "co-learning",
    "predict run investigate modify make",
    "AI as learning partner",
    "five rules",
    "spec-driven development",
    "Socratic tutor",
    "professional practice",
    "Claude Code",
    "AI-era programming",
    "verification mindset",
  ]
chapter: 30
lesson: 2
duration_minutes: 18

# HIDDEN SKILLS METADATA
skills:
  - name: "AI-Assisted Learning Boundaries"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can describe what an AI coding assistant should and should not do at each PRIMM-AI stage, and explain why boundaries exist at each stage"

  - name: "PRIMM-AI Operational Rules"
    proficiency_level: "A2"
    category: "Soft"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can explain each of the five PRIMM-AI rules and describe a concrete scenario where violating the rule would harm learning or produce unreliable code"

  - name: "Learning-to-Professional Mapping"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can map each PRIMM-AI stage to its professional equivalent and explain how student learning habits transfer directly to workplace development practices"

learning_objectives:
  - objective: "Describe the AI coding assistant's role and boundaries at each of the five PRIMM-AI stages"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student explains, for each stage, what the AI can do and what it must not do, and why that boundary protects the learning process"

  - objective: "Explain each of the five PRIMM-AI rules and connect it to a real-world consequence of violation"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student states each rule and describes a scenario where ignoring the rule produces a specific, identifiable failure"

  - objective: "Map the PRIMM-AI learning cycle to both the book's chapter structure and the professional Spec-Generate-Review-Refine-Ship workflow"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student matches each PRIMM-AI stage to a section of a typical chapter and to a step in professional practice, explaining the parallel"

cognitive_load:
  new_concepts: 3
  assessment: "3 new concepts (AI role boundaries at each stage, the five rules as operational discipline, the learning-to-professional mapping). All build on the PRIMM-AI framework introduced in Lesson 1. No code, no tools. Within A2 budget for a conceptual lesson that deepens existing understanding."

differentiation:
  extension_for_advanced: "Choose one of the five rules and write a one-page argument for why it is the most important rule. Include at least two scenarios -- one from a student's perspective and one from a professional developer's perspective -- where violating the rule leads to a concrete failure."
  remedial_for_struggling: "Create a simple two-column table for each PRIMM-AI stage. Left column: what the AI does. Right column: what you do. Keep each cell to one sentence. Pin this table next to your workspace and reference it during every lesson in Parts 4 and 5."
---

# PRIMM-AI: Learning with an AI Partner

In Lesson 1, you learned the five stages of PRIMM and why comprehension comes before production. Now you need to understand something more specific: what your AI coding assistant actually *does* at each stage, what it must *never* do, and why those boundaries exist.

This matters because an AI coding assistant with no boundaries is not a learning partner -- it is a shortcut that feels productive while teaching you nothing. The difference between a student who uses AI to accelerate learning and one who uses AI to avoid learning is not the tool. It is the rules governing how the tool is used. PRIMM-AI provides those rules.

---

## From PRIMM to PRIMM-AI

The original PRIMM framework was designed for classrooms where teachers guided students through each stage. You are not in a traditional classroom. You have an AI coding assistant that can generate code, explain concepts, run programs, and review your work -- all in seconds. This changes what is possible at every stage.

PRIMM-AI keeps the five stages identical. What changes is the presence of an AI partner at each stage, with clear rules about what that partner can and cannot do. The adaptation is tool-agnostic: whether you use Claude Code, Cursor, GitHub Copilot, Gemini CLI, or whatever AI coding assistant exists next year, the boundaries are the same. The pedagogy is the constant. The AI tool is the variable.

In this book, we use Claude Code as the primary AI partner because it integrates naturally with the spec-driven development workflow from Chapter 5. But every technique transfers to any AI coding environment.

---

## AI as Your Learning Partner

At each PRIMM-AI stage, the AI has a specific role. Understanding these roles is as important as understanding the stages themselves.

### Predict: AI Generates, You Think

**What the AI does:** Generates programs at exactly the right difficulty level for the topic you are studying, giving you unlimited, fresh prediction exercises tailored to your current lesson.

**What the AI must not do:** Explain the code at this stage. If the AI explains the program before you have predicted its output, it steals the most valuable moment in the learning cycle -- the moment where your brain commits to a prediction and prepares to learn from the gap between expectation and reality. Prediction forces commitment. When you say "I think this will print 15" and the output is 12, your brain immediately wants to know *why*. That motivation is what drives deep learning.

### Run: AI Executes, You Compare

**What the AI does:** Runs the program and can test it with different inputs to explore edge cases, giving you immediate feedback on your prediction.

**What the AI must not do:** Interpret the results for you. The comparison between your prediction and the actual output is *your* cognitive work. If you predicted a sorted list and got an error instead, the AI should not jump in with an explanation. You need a moment to read the error yourself and form your own hypothesis. The gap between prediction and reality is where learning lives -- if the AI fills that gap immediately, you never develop the diagnostic instinct that professionals rely on every day.

### Investigate: AI as Socratic Tutor

**What the AI does:** This is where the AI becomes most active. It answers your questions, provides contextualized explanations, generates trace tables showing variable values at each step, and suggests investigation questions you might not have thought of. It acts as a Socratic tutor -- guiding your understanding through dialogue rather than lecturing.

**What the AI must not do:** Provide explanations you have not asked for. The Investigate stage is driven by *your* questions, not the AI's assumptions about what you need to know. If you are tracing a loop and understand the first three iterations but are confused about the fourth, you ask about the fourth specifically.

**The critical rule at this stage: you verify every explanation the AI gives by running the code yourself.** AI explanations are powerful but occasionally wrong -- sometimes subtly wrong in ways that sound convincing. When the AI tells you a function returns `None` because of a missing `return` statement, you test it. This builds a double skill: you learn the programming concept, and you learn the verification habit that defines professional development.

### Modify: AI as Comparison Partner

**What the AI does:** After *you* complete a modification, the AI can show you an alternative approach and explain the tradeoffs. If you are genuinely stuck, it can provide a hint -- but never the full solution.

**What the AI must not do:** Modify the code for you. You decide what to change, you make the change, and you observe the result. The AI enters only after you have finished -- as a comparison partner, not a ghostwriter. Modification is the bridge between reading and writing. If the AI handles the modification, you skip the most important step in the progression from reader to writer.

### Make: AI as Review Partner, Not Ghostwriter

**What the AI does:** Reviews your specification before you start coding. Answers specific syntax questions during implementation. Reviews your completed code and suggests improvements.

**What the AI must not do:** Write the solution for you. The Make stage is where you prove that you have internalized the concept. If the AI writes the code, you have proven nothing except that you can type a prompt. Make is the culmination of four stages of preparation -- by the time you reach it, you have predicted, run, investigated, and modified. You are ready to create. The AI evaluates and improves your work, but the work is yours.

---

## The Five PRIMM-AI Rules

These five rules are not suggestions. They are the operational discipline that makes PRIMM-AI work. Every lesson, every exercise, and every interaction with your AI coding assistant in Parts 4 and 5 follows these rules.

**Rule 1: Never run code you have not predicted.**

Every time you encounter a new program -- from the book, generated by your AI assistant, or written by you -- pause and predict its output before executing it. This applies to code you wrote yourself. *Especially* code you wrote yourself. Over hundreds of repetitions, this habit builds a mental compiler: the ability to execute code in your head. That mental compiler is the single skill that separates developers who understand their systems from those who are guessing.

**Rule 2: Never trust an explanation you have not tested.**

Your AI coding assistant is a powerful explainer. It is also occasionally wrong -- sometimes subtly wrong in ways that sound completely convincing. When it tells you what a piece of code does, verify the claim. Change an input. Test the edge case. Run the variation. This is not paranoia -- this is the verification mindset that professional developers practice every day in code reviews, test suites, and production monitoring.

**Rule 3: Modify before you make.**

When you encounter a new concept, resist the urge to immediately write your own program from scratch. First, modify an existing one. Changing working code teaches you the same concepts as writing from nothing, but with dramatically lower cognitive load -- you can focus on the concept itself rather than on syntax, structure, and all the surrounding machinery.

**Rule 4: Write the spec before the code.**

In the Make stage, always describe what your program should do before you start writing it. Define the inputs, outputs, edge cases, and expected behavior. This is the spec-driven development practice from Chapter 5, applied to Python. Writing the spec first forces you to think clearly about the problem before you think about the solution, and gives you a concrete document to validate your code against when you finish.

**Rule 5: Use AI as a partner, not a crutch.**

Your AI assistant should make you smarter, not lazier. Ask it to explain, review, generate examples, and suggest improvements. Do not ask it to do your thinking for you. The distinction is simple: if you understand more after the interaction than you did before, the AI was a partner. If you understand the same amount but have a working program you cannot explain, the AI was a crutch.

---

## How Every Lesson Works

Every chapter in Parts 4 and 5 follows a predictable structure mapped directly to the PRIMM-AI stages. Knowing this structure means you always know exactly where you are in the learning process.

**Chapter Opening -- Predict and Run.** Each chapter starts with one or two complete programs that demonstrate the core concept. You predict their output, run them, and establish your baseline understanding.

**Lessons -- Investigate.** The lessons within each chapter systematically explore the concept through questions, trace exercises, and AI-assisted explanation. This is where comprehension deepens.

**Exercises -- Modify.** Each chapter includes modification exercises. You change existing code in targeted ways, building the bridge between reading and writing.

**Capstone -- Make.** Each chapter ends with a Make challenge: a new problem where you write the specification first and then build the solution, with AI as your review partner.

:::note If you are new to programming
This predictable structure is your safety net. You will never be thrown into the deep end without preparation. By the time a chapter asks you to write code, you have already read it, predicted its behavior, investigated how it works, and modified it. Writing becomes the natural final step, not a terrifying first one.
:::

:::note If you have coded before
This structure mirrors professional code review: read the PR, understand the logic, suggest changes, then build your own feature. PRIMM-AI formalizes a process you likely already practice informally. The structure gives you a shared vocabulary for a skill you have been developing by instinct.
:::

---

## From PRIMM to Professional Practice

There is a direct line from the learning cycle you practice in this book to the workflow used by professional developers every day. This is not a coincidence -- PRIMM-AI was designed to build professional habits from the start.

| PRIMM-AI Stage | Professional Equivalent | What You Do |
|---|---|---|
| **Predict** | **Spec** | Define what the program should do -- inputs, outputs, constraints, expected behavior |
| **Run** | **Generate** | Use your AI coding assistant to produce the implementation from the spec |
| **Investigate** | **Review** | Read the generated code, trace its logic, test edge cases, verify correctness |
| **Modify** | **Refine** | Adjust the code to match your exact requirements -- fix bugs, improve naming, handle errors |
| **Make** | **Ship** | Deploy with confidence because you understand every line |

The mapping reveals something important: the professional workflow is not something you learn *after* mastering programming. You are practicing it from your first chapter. Every Predict exercise builds the specification habit. Every Investigate session builds the code review habit. Every Modify exercise builds the refactoring habit. By the time you finish Parts 4 and 5, these habits will be automatic -- not because someone told you to adopt them, but because you practiced them hundreds of times through PRIMM-AI.

---

## PRIMM-AI and the Ten Axioms

PRIMM-AI is the operating system. The Ten Axioms of AI-Driven Development (Chapter 31) are the first application that runs on it.

The Ten Axioms tell you what professional practice looks like. PRIMM-AI tells you how to internalize those practices. They are complementary: one defines the destination, the other defines the road.

| PRIMM-AI Stage | Axiom Connection | What the Mapping Means |
|---|---|---|
| **Predict** | Axiom VII: Tests Are the Specification | Predicting output is a mental test. You define expected behavior before execution -- the same principle behind test-driven development. |
| **Run** | Axiom VII + Axiom IX: Verification Is a Pipeline | Running code and comparing to predictions is verification. As programs grow, this becomes automated testing and CI pipelines. |
| **Investigate** | Axiom V: Types Are Guardrails + Axiom X: Observability | Tracing variables and testing edge cases builds the diagnostic skill that types and observability tools formalize in production systems. |
| **Modify** | Axiom IV: Composition Over Creation | Modifying existing code is composition in action -- assembling and adapting rather than building from nothing. |
| **Make** | Axiom II: Knowledge Is Markdown + Axiom III: Programs Are Structured Prose | Writing specs before code means treating programs as structured knowledge. Markdown first, code second. |

As you read the Ten Axioms in Chapter 31, you will recognize PRIMM-AI at work in every one. The axioms are not abstract principles detached from your learning process. They are the professional formalization of the habits you are building right now.

---

## Key Takeaways

1. **Every PRIMM-AI stage has clear AI boundaries.** The AI generates at Predict, executes at Run, tutors at Investigate, compares at Modify, and reviews at Make. It never explains before you predict, interprets before you compare, or writes before you make.

2. **The five rules are operational discipline, not suggestions.** Never run without predicting. Never trust without testing. Modify before you make. Spec before you code. Partner, not crutch.

3. **PRIMM-AI is tool-agnostic.** Claude Code, Cursor, Copilot, Gemini CLI -- the boundaries and rules apply regardless of which AI assistant you use.

4. **The book's structure maps to PRIMM-AI.** Chapter openings are Predict and Run. Lessons are Investigate. Exercises are Modify. Capstones are Make. You always know where you are.

5. **Learning habits become professional habits.** The Predict-Run-Investigate-Modify-Make cycle maps directly to the professional Spec-Generate-Review-Refine-Ship workflow. You are practicing professional development from your first lesson.

---

## Looking Ahead

You now know how you will learn (PRIMM-AI) and the five rules that govern your learning process. The next chapter introduces the Ten Axioms of AI-Driven Development -- the principles that define what professional practice looks like. PRIMM-AI tells you how to learn. The axioms tell you what to learn. Together, they form the complete foundation for everything that follows.

After the axioms, Chapter 32 installs your development environment -- uv, pyright, ruff, pytest, and Git -- so that every axiom has a tool enforcing it. Then Chapter 33 is where you read your first Python code using PRIMM-AI, practicing Predict-Run-Investigate on real programs.

The framework is set. The rules are clear. The principles come next.

---

## Try With AI

Open any AI coding assistant (Claude Code, ChatGPT, Gemini, or another tool you have access to) and try these prompts. You do not need Python installed yet -- these are conceptual explorations.

### Prompt 1: The Five Rules in Action

```
I am learning to program using a framework called PRIMM-AI,
which has five rules: (1) Never run code you have not predicted,
(2) Never trust an explanation you have not tested, (3) Modify
before you make, (4) Write the spec before the code, (5) Use
AI as a partner, not a crutch.

For each rule, give me a realistic scenario where a student
violates the rule and describe the specific consequence they
would face. Make the scenarios concrete -- use real programming
situations, not abstract generalities.
```

**What you are learning:** You are testing whether your understanding of the five rules is deep enough to evaluate the AI's scenarios. For each scenario the AI generates, ask yourself: does this consequence feel real? Would this actually happen? If a scenario feels weak or generic, push back and ask for a more specific one. Your ability to evaluate the AI's answer is itself a PRIMM-AI skill -- Rule 2 in action.

### Prompt 2: PRIMM-AI vs Traditional Learning

```
Compare two approaches to learning programming:

Approach A: Start by writing code from scratch. When it does not
work, ask AI to fix it. When you need a new feature, ask AI to
write it.

Approach B (PRIMM-AI): Start by reading code and predicting its
output. Run it and compare. Investigate how it works by asking
targeted questions and verifying answers. Modify existing code
before writing new code. Write a spec before coding.

What specific skills does Approach B build that Approach A
does not? Be concrete -- name the skills and explain why they
matter for a professional developer.
```

**What you are learning:** You are asking the AI to articulate the value proposition of PRIMM-AI. Compare its answer to what you read in this chapter. Does it identify the verification mindset? Does it mention the mental compiler that prediction builds? If it misses key points, that tells you something about what AI explanations tend to skip -- and gives you practice at the critical evaluation that Rule 2 demands.

### Prompt 3: Your Professional Future

```
A professional developer using AI follows this cycle:
Spec (define what to build) -> Generate (AI writes code) ->
Review (read and verify the code) -> Refine (fix issues) ->
Ship (deploy with confidence).

A student using PRIMM-AI follows this cycle:
Predict (read code and predict output) -> Run (execute and
compare) -> Investigate (explore how it works) -> Modify
(change existing code) -> Make (write new code from spec).

Explain the parallels between these two cycles. Why would
practicing one prepare you for the other? What habits transfer
directly from learning to professional practice?
```

**What you are learning:** You are exploring the learning-to-professional mapping from a different angle. The AI's response should reinforce the table from this lesson, but it may also reveal connections you had not considered. Pay attention to whether the AI identifies *prediction as specification* and *investigation as code review* -- those are the most important parallels. If it focuses only on the surface similarities (both have five steps), ask it to go deeper.
