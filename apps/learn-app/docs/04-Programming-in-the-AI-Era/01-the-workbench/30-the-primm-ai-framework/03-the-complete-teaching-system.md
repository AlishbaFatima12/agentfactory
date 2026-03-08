---
sidebar_position: 3
title: "The Complete Teaching and Learning System"
description: "How PRIMM-AI+ works in practice -- the four embedded teaching methods, classroom and solo modes, practical lesson architecture, and how every chapter in this book follows the same pattern."
keywords: ["PRIMM-AI+", "worked examples", "Parsons problems", "live coding", "peer instruction", "teaching methods", "classroom mode", "solo mode", "lesson architecture"]
chapter: 30
lesson: 3
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Instructional Method Identification"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can name the four teaching methods embedded in PRIMM-AI+ and describe where each fits in the five-stage sequence"

  - name: "Learning Mode Awareness"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can distinguish classroom mode from solo mode and identify which mode this book is designed for"

  - name: "Lesson Architecture Recognition"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can describe the six-step lesson sequence and recognize it when encountered in subsequent chapters"

learning_objectives:
  - objective: "Name the four teaching methods embedded in PRIMM-AI+ and explain where each fits in the learning sequence"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student maps worked examples to Predict/Investigate, Parsons problems to the bridge between Investigate and Modify, live coding to Investigate/Modify, and peer instruction across all stages"

  - objective: "Distinguish classroom mode from solo mode and identify the mode this book uses"
    proficiency_level: "A1"
    bloom_level: "Remember"
    assessment_method: "Student states that this book is designed for solo mode and explains the key difference: structured AI interaction replaces human collaboration"

  - objective: "Describe the six-step practical lesson architecture"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student lists the six steps in order and explains why prediction comes before running and specification comes before coding"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (four embedded teaching methods as a group, classroom vs solo modes, the six-step lesson architecture) within A2 limit of 5-7"

differentiation:
  extension_for_advanced: "Research Parsons problems further at parsons.problemsolving.io and analyze how they differ from traditional fill-in-the-blank code exercises."
  remedial_for_struggling: "Focus on the six-step lesson architecture and the 'How Every Chapter Follows PRIMM-AI+' section. These two sections tell you exactly what to expect in every future chapter."
---

# The Complete Teaching and Learning System

You now know the five stages of PRIMM-AI+ -- Predict, Run, Investigate, Modify, Make -- and the structural safeguards that keep you honest: AI-free checkpoints, mastery gates, confidence scoring, and the verification ladder. But knowing the stages is like knowing the instruments in an orchestra. The question is: how does the music sound when they all play together?

This lesson answers that question. It shows how four teaching methods -- worked examples, Parsons problems, live coding, and peer instruction -- are woven into the PRIMM-AI+ stages. It explains the difference between learning in a classroom and learning on your own. And it reveals the practical lesson architecture that every chapter in Parts 4 and 5 follows, so you will recognize the pattern the moment you encounter it.

---

## The Four Teaching Methods Inside PRIMM-AI+

PRIMM-AI+ provides the sequence and the safeguards. These four methods provide the instructional moves used inside the sequence.

### Worked Examples: Predict and Investigate

Every code block in this book is a worked example -- a complete, functioning program you study before writing your own. Instead of starting with a blank screen, you inspect a finished program, predict its output, run it, and analyze its structure. Worked examples reduce cognitive load because you do not have to invent everything at once. You focus on understanding how the code works, not on producing it.

Where it fits: **Predict** (you study the example and commit to a prediction) and **Investigate** (you trace through it and produce artifacts like trace tables).

### Parsons Problems: Between Investigate and Modify

A Parsons problem gives you the correct lines of code in scrambled order. Your job is to rearrange them into a working program. This tests whether you truly understand the program's structure -- the order of operations, the indentation, the data flow -- without requiring you to write code from scratch.

Where it fits: **Between Investigate and Modify.** After you have traced through a worked example and understand how it works, a Parsons problem checks that understanding before you attempt free modifications. Consider this example:

```python
# These four lines are scrambled. What is the correct order?
print(label)
temp: int = 32
label: str = city + ": " + str(temp) + "C"
city: str = "Karachi"
```

**Output (when correctly ordered):**

```
Karachi: 32C
```

To solve this, you must reason about data flow: `city` must exist before `label` can use it, `temp` must exist before `label` can use it, and `label` must exist before `print` can display it. The correct order is `city`, then `temp`, then `label`, then `print`. If you can reorder these lines correctly, you understand the program's structure -- not just what it does, but *why* the order matters.

### Live Coding: Investigate and Modify

In classroom settings, the instructor writes or edits code in real time, narrating their thinking aloud -- including mistakes, debugging steps, and design choices. The value is seeing how an expert thinks, not just admiring their finished code.

Where it fits: **Investigate** (the instructor traces and explains) and **Modify** (the instructor demonstrates changes). In solo mode, your AI assistant can serve a similar role when you ask it to walk through adding a feature step by step, explaining its reasoning as it goes.

### Peer Instruction: Across All Stages

Peer instruction means thinking individually first, then discussing your answer with a partner or small group. It is especially powerful in Predict -- you write your prediction, compare it with a classmate, discuss any disagreements, and only then run the code.

Where it fits: **All stages.** In classroom mode, it happens naturally through pair and group work. In solo mode, your AI assistant becomes your "peer" -- but only after you have committed your own answer first. The AI-free checkpoint ensures this.

### Summary

| Method | What It Is | Where It Fits in PRIMM-AI+ |
|--------|-----------|---------------------------|
| Worked Examples | Complete programs you study before writing | Predict and Investigate |
| Parsons Problems | Scrambled code lines you reorder | Between Investigate and Modify |
| Live Coding | Real-time coding with narrated thinking | Investigate and Modify |
| Peer Instruction | Individual thinking, then group discussion | Across all stages |

---

## Classroom Mode vs. Solo Mode

**Classroom mode.** The teacher orchestrates the process. Predictions are shared in pairs or small groups before anyone runs the code. Investigation questions are discussed as a class before consulting AI. Modification approaches are compared across teams. The teacher controls AI permissions and uses mastery gates as checkpoints for the whole class.

**Solo mode.** You replace human collaboration with structured AI interaction -- but only after passing through the AI-free checkpoint at each stage. You write your prediction alone, commit your confidence score, and only then engage your AI assistant. The confidence scoring system is especially important in solo mode because it makes self-deception visible. There is no classmate to challenge your assumptions, so you must challenge them yourself.

This book is designed for solo mode. Every technique works with just you, the book, and your AI assistant. If you are in a classroom, your teacher will add the collaborative elements -- pair predictions, group investigations, live coding demonstrations -- on top of the same structure.

---

## A Practical Lesson Architecture

Here is what a typical lesson looks like when all the pieces work together. You will recognize this pattern starting in Chapter 33.

**Step 1: Worked Example and AI-Free Prediction.** The lesson presents a compact, complete program. You write your prediction and confidence score without AI assistance. This is the worked example method combined with the AI-free checkpoint from Lesson 2.

**Step 2: Run and Compare.** You run the code and compare the output to your prediction. In classroom mode, you share predictions with a partner first (peer instruction). In solo mode, you commit your prediction to writing before executing. The prediction-reality gap drives learning regardless of mode.

**Step 3: Investigate with Artifacts.** You produce a trace table or line-by-line explanation. You discuss targeted questions -- with peers in classroom mode, or with your AI assistant in solo mode after your own first explanation. This is where the Socratic tutoring role from Lesson 2 activates.

**Step 4: Parsons Problem.** A Parsons problem closely related to the worked example tests structural understanding before free creation. If you can reorder scrambled lines correctly, you have internalized the program's logic -- not just recognized it.

**Step 5: Modify.** You perform a modification task, changing the existing program to add a feature or alter its behavior. In classroom mode, the teacher may follow with a live-coding demonstration of a more advanced change. You write the modification yourself; AI evaluates it afterward.

**Step 6: Make with Spec-Driven Development.** You write a specification first (AI-free), attempt the solution yourself, and use AI only for review, debugging, or targeted syntax help after your first attempt exists. This is the Make stage from Lesson 2 with the spec-before-code rule enforced.

Notice the progression: you understand before you change, and you change before you create. Every step earns you the right to attempt the next one.

---

## How Every Chapter Follows PRIMM-AI+

The six-step sequence above is not just a lesson pattern -- it is the chapter pattern. Every chapter in Parts 4 and 5 maps to the same structure at a larger scale.

| Chapter Element | PRIMM-AI+ Connection | What Happens |
|----------------|----------------------|-------------|
| Chapter Opening | Worked Example + Predict and Run | You see complete programs, predict their output with confidence scoring, then run them |
| Core Lessons | Investigate with Artifacts | You trace variables, test edge cases, and produce visible artifacts |
| Structural Bridge | Parsons Problems | Scrambled-code exercises test your structural understanding |
| Exercises | Modify | You change existing programs to add features or fix issues |
| Capstone | Make with Spec-Driven Development | You build something new from a specification, with AI as reviewer |

You will never be dropped into a Make exercise cold. By the time a chapter asks you to write code from scratch, you will have predicted, run, investigated, and modified programs using the same concepts. The structure is your safety net.

---

## Key Takeaways

- Four teaching methods -- worked examples, Parsons problems, live coding, and peer instruction -- are embedded within PRIMM-AI+ stages, not added on top of them.
- This book is designed for solo mode: you, the book, and your AI assistant. Classroom teachers add collaborative elements on top of the same structure.
- Every lesson follows a six-step architecture: worked example with prediction, run and compare, investigate with artifacts, Parsons problem, modify, and make with specification.
- Every chapter follows the same pattern at a larger scale: opening worked examples, investigative lessons, structural bridges, modification exercises, and a make capstone.
- The pattern is deliberate: you understand before you change, and you change before you create. No stage is skippable.

---

## Try With AI

### Prompt 1: Generate a Parsons Problem

```
I am learning about Parsons problems -- exercises where you rearrange
scrambled lines of code into the correct order. Here is a simple
Python program:

city: str = "Karachi"
temp: int = 32
label: str = city + ": " + str(temp) + "C"
print(label)

Scramble these four lines and present them to me in random order.
Ask me to put them back in the correct sequence. After I answer,
tell me if I got it right and explain why the order matters.
```

**What you are learning:** Parsons problems test structural understanding -- whether you know not just what code does, but why it must be ordered the way it is. The scrambled lines force you to reason about data flow: which variables must exist before others can use them.

### Prompt 2: AI as Peer Instruction Partner

```
I want to practice peer instruction with you. Show me a short
Python program (4-6 lines, using only variables and print, no
loops) and ask me to predict its output. After I give my prediction
and confidence score, share YOUR prediction and reasoning as if
you were a study partner. Then we will run the code together and
compare notes.
```

**What you are learning:** Peer instruction in solo mode. By asking AI to share its own "prediction" and reasoning, you practice the compare-and-discuss step that makes peer instruction effective -- even when studying alone.

---

## Looking Ahead

You now know how you will learn. You know the five stages, the structural safeguards, the four teaching methods, and the lesson architecture. The next chapter introduces what professional practice looks like -- the Ten Axioms of AI-Driven Development. You will experience those axioms through the PRIMM-AI+ lens: predicting what professional code should look like, investigating why each axiom matters, and eventually building programs that embody them.
