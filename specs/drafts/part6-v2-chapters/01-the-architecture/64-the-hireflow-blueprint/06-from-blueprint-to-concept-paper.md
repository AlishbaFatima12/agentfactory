---
sidebar_position: 6
title: "From Blueprint to Concept Paper"
description: "How the Factory Blueprint connects to the Agent Maturity Model and seeds the 10-80-10 Concept Paper in Chapter 65"
chapter: 64
lesson: 6
duration_minutes: 10
keywords:
  [
    blueprint,
    concept paper,
    maturity model,
    incubate phase,
    domain decomposition,
  ]

skills:
  - name: "Systems Thinking"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can trace how the blueprint feeds into subsequent phases of the Agent Maturity Model"
  - name: "Project Planning"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can explain what the next step after a blueprint is and why"

learning_objectives:
  - objective: "Explain how the Factory Blueprint feeds into the 10-80-10 Concept Paper"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Connection explanation"
  - objective: "Locate the blueprint within the Agent Maturity Model's five phases"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Phase mapping exercise"

cognitive_load:
  new_concepts: 0
  assessment: "Low. This lesson synthesizes concepts from Chapters 61-64 without introducing new ones."

differentiation:
  extension_for_advanced: "Diagram the full Part 6 build chain from blueprint (Ch 64) through capstone (Ch 90), identifying which chapters consume which blueprint sections."
  remedial_for_struggling: "Focus on the core chain: Blueprint (Ch 64) feeds Concept Paper (Ch 65) feeds Agent Skills (Ch 67). Three links."
---

# From Blueprint to Concept Paper

Emma set down her marker. "You have a complete blueprint. Let me show you where it sits in the bigger picture."

She drew three boxes on the whiteboard, left to right:

```
[Blueprint]  →  [Concept Paper]  →  [Agent Skills]
  Ch 64            Ch 65              Ch 67
```

"In Chapter 65, you write a concept paper using the 10-80-10 rule: ten percent research, eighty percent domain knowledge, ten percent AI validation. The blueprint you wrote today IS the eighty percent. It contains your domain understanding in formal, structured terms."

James studied the diagram. "Wait, so basically... the concept paper is a refined version of the blueprint? Or something different?"

"Different purpose. The blueprint is an architecture document: it says what the factory DOES. The concept paper is a persuasion document: it argues that this factory SHOULD EXIST. The blueprint gives the concept paper its substance."

## Where the Blueprint Sits in the Maturity Model

In Chapter 63, you learned the five phases of the Agent Maturity Model:

| Phase | Name             | Key Activity                                  |
| ----- | ---------------- | --------------------------------------------- |
| 1     | Explore          | Research the domain, validate the idea        |
| 2     | Incubate         | Extract skills, build prototypes, simulate    |
| 3     | Build Specialist | Write production code, test, deploy           |
| 4     | Integrate        | Connect FTEs, orchestrate, add infrastructure |
| 5     | Scale            | Monitor, evaluate, optimize, expand           |

The Factory Blueprint belongs to the end of Phase 1. You have explored the domain enough to specify it formally. The concept paper (Chapter 65) closes Phase 1. Then Phase 2 begins: you extract agent skills from the blueprint (Chapter 67), simulate them (Chapter 68), and expose them through MCP servers (Chapters 69-71).

"Every chapter from here to Chapter 90 consumes something from this blueprint," Emma said. "The role specifications feed into agent skills. The data contracts become database schemas. The human review gates become API endpoints. The economic participation points become budget tracking in the orchestrator."

She picked up her coffee. "I have a meeting in ten minutes. While I am gone, review your blueprint. Read every section. Find the gaps." She paused at the door. "There are at least three. Do not wait for me to point them out."

James watched her leave, then turned to the HireFlow blueprint on his screen.

He started with the Role Specifications. The Job Spec Writer section said "translates hiring manager requirements into structured specifications." Clear enough. But it did not say how the FTE handles ambiguous requirements. What happens when the hiring manager contradicts themselves mid-conversation? When does the FTE stop asking clarifying questions and produce the spec? He added a bullet point: "Ambiguity threshold: after two clarification rounds with no resolution, produce spec with unresolved items flagged for human review."

He moved to the Data Contracts. The handoff between the Resume Screener and the Candidate Summarizer specified a score and a list of matched skills. But the Summarizer also needed to explain risks. Where did risk data come from? The Screener's output contract did not include it. The Summarizer would have to infer risks from raw resume data, which meant it needed access to the original resume, not just the Screener's output. He added a field: "raw_resume_text: string (passed through for downstream analysis)."

Then he checked the Human Review Gates. Gate 1 triggered when the Screener's confidence was below 60. But the blueprint said nothing about what "confidence" meant. Was it a model probability? A heuristic score? A percentage of matched requirements? Without a definition, the gate's trigger was meaningless. He wrote: "Confidence definition: percentage of required qualifications matched, computed from the scoring rubric for that specific job posting."

When Emma came back twenty minutes later, James had three new bullet points under the Job Spec Writer's failure mode section, a revised data contract for the Screener-to-Summarizer handoff, and a confidence definition for Gate 1.

"Three gaps," he said. "The Job Spec Writer had no ambiguity handling. The Screener's output did not pass through enough data for the Summarizer. And Gate 1's trigger used a term that was never defined."

Emma set down her coffee. "You found gaps without me telling you where to look. That is the difference between following instructions and thinking like a systems engineer."

## What You Built in This Chapter

Over six lessons, you went from a wish to a blueprint:

- **Lesson 1**: Discovered that "HireFlow helps with hiring" is not enough to start building
- **Lesson 2**: Learned the six-step Domain Decomposition method
- **Lesson 3**: Saw the Factory Blueprint Template with its seven sections
- **Lesson 4**: Filled in HireFlow's complete blueprint (the reference document for Part 6)
- **Lesson 5**: Wrote your own blueprint for a different domain

The blueprint is not the final artifact. It is the starting artifact. In Chapter 65, you transform it into a concept paper. In Chapter 67, you extract agent skills from it. In Chapter 76, you turn its data contracts into database schemas. The blueprint is the seed from which the entire factory grows.

## Looking Ahead

Chapter 65 introduces the **10-80-10 Concept Paper**: a structured document that validates your factory idea before you invest in code. The blueprint you wrote today provides the domain knowledge. Chapter 65 teaches you how to frame that knowledge as a persuasive, reviewable proposal.

Bring your HireFlow blueprint. You will need every section.
