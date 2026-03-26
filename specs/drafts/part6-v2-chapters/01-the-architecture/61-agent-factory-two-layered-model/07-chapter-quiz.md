---
sidebar_position: 7
title: "Chapter Quiz"
description: "Test your understanding of agent factories, the Two-Layered Model, governance, and HireFlow's architecture."
chapter: 61
lesson: 7
duration_minutes: 15
keywords:
  [quiz, assessment, agent factory, two-layered model, governance, HireFlow]

skills:
  - name: "Agent Factory Comprehension"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can evaluate scenarios and apply Agent Factory concepts to identify correct architectural decisions"

learning_objectives:
  - objective: "Demonstrate understanding of Chapter 61 concepts through multiple-choice assessment"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "10-question MCQ with explanations"

cognitive_load:
  new_concepts: 0
  assessment: "Assessment only. No new concepts."

differentiation:
  extension_for_advanced: "For each question you got right, write a new question that tests the same concept at a harder level. Share it with Claude Code and compare its question quality to yours."
  remedial_for_struggling: "For each question you got wrong, go back to the referenced lesson and re-read the relevant section. Then explain the concept in your own words before retaking."
---

# Chapter Quiz

Test your understanding of the concepts from Chapter 61. For each question, select the best answer and check your reasoning against the explanation.

---

**Question 1.** What is the defining difference between a chatbot collection and an Agent Factory?

- A) An Agent Factory uses more powerful language models
- B) An Agent Factory has data contracts, verification, orchestration, and governance
- C) An Agent Factory processes more requests per second
- D) An Agent Factory uses a single database instead of multiple databases

:::note Answer
**B.** The difference is not about AI capability or performance. It is about the coordination architecture: contracts define data shapes between workers, verification checks output at every handoff, orchestration manages the pipeline, and governance ensures alignment with human intent. (Lesson 2)
:::

---

**Question 2.** A hiring manager says "Find me good candidates." Why is this bad intent for an Agent Factory?

- A) It is too short
- B) It uses informal language
- C) It cannot be verified because "good" has no measurable definition
- D) It does not specify which language model to use

:::note Answer
**C.** Good intent is specific enough that you can verify whether the factory followed it. "Good candidates" has no measurable criteria. "Candidates with 3+ years Python experience scoring above 75 on the rubric" is verifiable. (Lesson 4)
:::

---

**Question 3.** In the Two-Layered Model, the Factory Layer and Edge Layer serve different purposes. Which statement is correct?

- A) The Factory Layer handles all AI tasks; the Edge Layer is optional
- B) The Factory Layer provides organizational consistency; the Edge Layer provides individual personalization
- C) The Edge Layer is more powerful than the Factory Layer
- D) The Factory Layer runs in the cloud; the Edge Layer runs on a phone

:::note Answer
**B.** The Factory Layer provides consistency, contracts, and governance across the organization. The Edge Layer provides personalization, flexibility, and human-AI interaction for individuals. Neither is optional; both are necessary for a complete agent architecture. (Lesson 3)
:::

---

**Question 4.** SmartNotes' `NoteStore` becomes a component in HireFlow. What does this demonstrate about the Agent Factory approach?

- A) Old code must be rewritten for new projects
- B) Good components get reused and integrated into larger systems
- C) SmartNotes was incomplete and needed HireFlow to work properly
- D) The Edge Layer always consumes Factory Layer components

:::note Answer
**B.** SmartNotes was a well-built component with `create()` and `search()` methods. In HireFlow, it becomes the note-taking system. Nothing is rewritten; it is integrated. This is how real engineering works: build good components, then assemble them into systems. (Lesson 1, Lesson 5)
:::

---

**Question 5.** James proposed building four chatbots that share a database. What is the primary failure mode of this approach?

- A) The database cannot handle four simultaneous connections
- B) Chatbots are slower than Digital FTEs
- C) There are no data contracts, so when one chatbot changes its output format, the others break silently
- D) Four chatbots cost more than one Agent Factory

:::note Answer
**C.** The chatbot army fails because there are no shared contracts. When the Resume Screener changes its output format (from numeric scores to letter grades, for example), the Interview Question Generator has no way to know. It reads the new format, misinterprets it, and produces bad output. Nobody detects the problem until a human sees garbled results. (Lesson 2)
:::

---

**Question 6.** Verification in an Agent Factory happens:

- A) Once, at the end of the pipeline
- B) At every handoff between workers
- C) Only when a human requests a review
- D) Only when an error is detected

:::note Answer
**B.** Verification happens at every handoff. The Resume Screener's output is checked before it reaches the Interview Question Generator. The Generator's output is checked before it reaches the Candidate Summarizer. This catches drift early, before it compounds through the pipeline. (Lesson 4)
:::

---

**Question 7.** What is a Digital FTE?

- A) A chatbot that answers questions about a specific topic
- B) An AI agent that performs a complete job role with defined inputs, outputs, and accountability
- C) A full-time human employee who uses AI tools
- D) A type of language model optimized for business tasks

:::note Answer
**B.** A Digital FTE (Full-Time Equivalent) owns a responsibility end to end. It has defined input contracts, output contracts, verification gates, and accountability. A chatbot answers questions when asked. A Digital FTE runs a process. (Lesson 5)
:::

---

**Question 8.** The three governance flows in an Agent Factory are:

- A) Input, processing, output
- B) Intent down, verification up, outcomes back
- C) Read, execute, report
- D) Plan, act, observe

:::note Answer
**B.** Intent flows down from the human principal (goals, criteria, constraints). Verification flows up at every pipeline stage (output checks against contracts). Outcomes flow back to the principal (what happened, what succeeded, what needs review). These three flows form a continuous governance loop. (Lesson 4)
:::

---

**Question 9.** Why does the Two-Layered Model require BOTH layers? What fails if you have only the Factory Layer?

- A) The Factory Layer cannot run without Edge Layer compute resources
- B) Humans cannot interact naturally with factory output; they need personal agents to interpret, converse, and adapt
- C) The Edge Layer provides the language models that the Factory Layer uses
- D) Government regulations require both layers

:::note Answer
**B.** The Factory Layer produces structured, contracted output. But a hiring manager who wants to ask "What is this candidate's distributed systems experience specifically?" needs a personal agent that can take the factory's output and have a conversation about it. Without the Edge Layer, the factory produces data but humans struggle to interact with it naturally. (Lesson 3)
:::

---

**Question 10.** The three frames for understanding agent factories are the Two-Layered Model, the Agent Maturity Model, and Agents as Economic Actors. Which frame answers "How does a factory grow from idea to production?"

- A) Two-Layered Model
- B) Agent Maturity Model
- C) Agents as Economic Actors
- D) All three equally

:::note Answer
**B.** The Agent Maturity Model (Chapter 63) maps the five-phase journey from general agent exploration to specialized production. The Two-Layered Model answers "who governs?" and Economic Actors answers "what is it becoming?" Each frame provides a different lens on the same factory. (Lesson 6)
:::

---

## Self-Assessment

Count your correct answers:

| Score       | Assessment                                     | Next Step                                                                                   |
| ----------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **9-10**    | Strong understanding of Chapter 61 foundations | Proceed to Chapter 62 with confidence                                                       |
| **7-8**     | Solid grasp with minor gaps                    | Review the lessons referenced in your incorrect answers                                     |
| **5-6**     | Partial understanding                          | Re-read Lessons 2-4 (the core concepts) before continuing                                   |
| **Below 5** | Foundations need strengthening                 | Work through the chapter again; use the Applied Exercise in Lesson 5 to ground the concepts |

### Reflection

Before moving to Chapter 62, answer these questions for yourself:

1. **What was the hardest concept in this chapter?** If it was governance (Lesson 4), that is normal. Governance feels abstract until you see it fail. You will see it fail in Chapter 68 (Simulation-Driven Validation).

2. **Can you explain the Two-Layered Model to someone who has never heard of it?** Try explaining it in two sentences. If you need more than two sentences, your understanding may still be forming.

3. **Can you draw the HireFlow pipeline from memory?** Four FTEs, their connections, and one verification gate at each handoff. If you can draw it without looking, the architecture is in your head. That is where it needs to be for the next 29 chapters.
