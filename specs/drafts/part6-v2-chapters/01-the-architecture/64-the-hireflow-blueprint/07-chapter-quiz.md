---
sidebar_position: 7
title: "Chapter Quiz"
description: "Test your understanding of domain decomposition, Factory Blueprints, data contracts, and human review gates"
chapter: 64
lesson: 7
duration_minutes: 15
keywords:
  [
    quiz,
    domain decomposition,
    factory blueprint,
    data contracts,
    human gates,
    economic participation,
  ]

skills:
  - name: "Domain Decomposition Recall"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can recall the six steps and seven template sections from memory"

learning_objectives:
  - objective: "Demonstrate understanding of the six-step Domain Decomposition method"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Multiple-choice quiz"

cognitive_load:
  new_concepts: 0
  assessment: "Low. This lesson tests recall and understanding of concepts taught in Lessons 1-6."

differentiation:
  extension_for_advanced: "After the quiz, identify one question where you were uncertain. Write a one-paragraph explanation of that concept to solidify your understanding."
  remedial_for_struggling: "Before taking the quiz, review the six-step summary table in Lesson 2 and the template overview table in Lesson 3."
---

# Chapter Quiz

Test your understanding of Domain Decomposition and the Factory Blueprint Template. Ten questions. Choose the best answer for each.

---

**Question 1: Wish vs Blueprint**

What is the core difference between a "wish" and a "Factory Blueprint"?

- A) A wish is shorter than a blueprint
- B) A blueprint specifies contracts, verification, failure modes, and success criteria; a wish names the goal without defining how it works
- C) A blueprint includes code; a wish does not
- D) A wish is for small projects; a blueprint is for large ones

<details>
<summary>Answer</summary>

**B.** A blueprint defines how the factory works, how it verifies correctness, how it handles failure, and how success is measured. A wish names the goal without any of this structure. Size is irrelevant: even a small factory needs a blueprint.

</details>

---

**Question 2: Step Order**

What is the correct order of the first three steps in Domain Decomposition?

- A) Define Role Specifications, Identify Stages, Name the Workflow
- B) Name the Domain Workflow, Map Data Contracts, Place Human Gates
- C) Name the Domain Workflow, Identify the Stages, Define Role Specifications
- D) Identify the Stages, Define Role Specifications, Map Data Contracts

<details>
<summary>Answer</summary>

**C.** Step 1: Name the Domain Workflow. Step 2: Identify the Stages. Step 3: Define Role Specifications. The workflow anchors everything. Stages break it down. Role specs formalize each stage.

</details>

---

**Question 3: Boundary Confusion**

When two stages in a pipeline have unclear boundaries, which outcome does the chapter identify as a risk?

- A) The pipeline runs faster because both stages help
- B) Both stages do the work (wasted compute), neither does it (dropped data), or both do it differently (inconsistent results)
- C) Only the first stage runs; the second is skipped
- D) The orchestrator detects the conflict and resolves it automatically

<details>
<summary>Answer</summary>

**B.** Unclear boundaries cause three bad outcomes: duplication, omission, or inconsistency. The orchestrator cannot resolve conflicts that exist in the specification, because the orchestrator follows the specification.

</details>

---

**Question 4: Data Contracts vs Type Annotations**

What does a data contract include that a type annotation alone does not?

- A) The field name
- B) Range constraints, required-field rules, and validation criteria
- C) The programming language
- D) The FTE name

<details>
<summary>Answer</summary>

**B.** A type annotation says `score: int`. A data contract says `score: int, range 0-100, required, validated before handoff`. The contract adds constraints, required-field designations, and validation rules that the receiving stage can enforce.

</details>

---

**Question 5: Human Gate Placement**

In HireFlow, why is a human review gate placed after the Job Spec Writer rather than after the Resume Screener?

- A) The Job Spec Writer is the slowest stage
- B) A bad job specification poisons all downstream evaluations, making it a higher-leverage decision point than a single screening error
- C) The Resume Screener never makes mistakes
- D) Human gates should always be placed at the first stage

<details>
<summary>Answer</summary>

**B.** A bad spec multiplies across every candidate: all 200 evaluations will be wrong. A bad screening score affects one candidate. Human gates protect high-leverage decisions, not every individual data point.

</details>

---

**Question 6: Role Specification Components**

Which of these is NOT one of the five components of a Role Specification?

- A) Name
- B) Input Contract
- C) Deployment Region
- D) Verification

<details>
<summary>Answer</summary>

**C.** The five components are: Name, Responsibility, Input Contract, Output Contract, and Verification. Deployment Region is an infrastructure concern, not a role specification concern.

</details>

---

**Question 7: Economic Participation Points**

Why does the chapter recommend recording economic participation points even when the factory does not acquire resources today?

- A) It looks professional in documentation
- B) Adding participation points later requires restructuring data contracts at those locations, which is expensive
- C) The factory cannot function without them
- D) Chapter 62 requires it

<details>
<summary>Answer</summary>

**B.** Recording a participation point now costs one line in the blueprint. Adding one later means restructuring every data contract at that handoff. Like running electrical conduit during construction: it is cheap now and expensive to retrofit.

</details>

---

**Question 8: Success Criteria**

Which of these is a well-formed success criterion?

- A) "The factory should be accurate"
- B) "Candidates should feel well-served"
- C) "Same candidate scored within plus or minus 5 points across repeated runs"
- D) "The pipeline should run fast"

<details>
<summary>Answer</summary>

**C.** A good success criterion is measurable (a number can be computed), specific (plus or minus 5 points), and verifiable (run the same candidate twice and compare). The other options fail one or more of these properties.

</details>

---

**Question 9: Blueprint and Maturity Model**

Where does the Factory Blueprint sit in the Agent Maturity Model from Chapter 63?

- A) Phase 3: Build Specialist
- B) Phase 1: Explore (end of phase)
- C) Phase 2: Incubate (beginning)
- D) Phase 5: Scale

<details>
<summary>Answer</summary>

**B.** The blueprint is the culminating artifact of Phase 1 (Explore). It proves you understand the domain well enough to specify it formally. The concept paper (Chapter 65) closes Phase 1, and Phase 2 (Incubate) begins with skill extraction in Chapter 67.

</details>

---

**Question 10: Blueprint and Concept Paper**

What is the relationship between the Factory Blueprint (Chapter 64) and the 10-80-10 Concept Paper (Chapter 65)?

- A) They are the same document in different formats
- B) The blueprint provides the domain knowledge (the 80%) that the concept paper structures as a persuasive proposal
- C) The concept paper replaces the blueprint
- D) The blueprint is written after the concept paper

<details>
<summary>Answer</summary>

**B.** The blueprint is an architecture document (what the factory does). The concept paper is a persuasion document (why the factory should exist). The blueprint's domain knowledge forms the 80% of the 10-80-10 rule. They serve different purposes and both persist as reference documents.

</details>

---

## Scoring Guide

| Score   | Assessment                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------ |
| 9-10    | Strong understanding of Domain Decomposition and the Factory Blueprint. Ready for Chapter 65.                      |
| 7-8     | Good grasp of core concepts. Review any questions you missed before proceeding.                                    |
| 5-6     | Partial understanding. Re-read Lessons 2 and 3, then retake the quiz.                                              |
| Below 5 | Review the full chapter before proceeding. Pay special attention to the six-step method and the template sections. |
