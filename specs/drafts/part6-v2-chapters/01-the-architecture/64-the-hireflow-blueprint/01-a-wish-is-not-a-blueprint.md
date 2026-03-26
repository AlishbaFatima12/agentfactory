---
sidebar_position: 1
title: "A Wish Is Not a Blueprint"
description: "Why a sentence-level description is not enough to build an agent factory, and what a real blueprint requires"
chapter: 64
lesson: 1
duration_minutes: 15
keywords:
  [blueprint, domain decomposition, specification, agent factory, HireFlow]

skills:
  - name: "Domain Analysis"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can distinguish between a vague description and a formal specification for an agent factory"
  - name: "Factory Blueprint Concept"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can explain why a factory needs a blueprint before code"

learning_objectives:
  - objective: "Explain the difference between a wish (vague description) and a blueprint (formal specification)"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Verbal explanation"
  - objective: "Identify at least three gaps in an informal factory description"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Gap identification exercise"

cognitive_load:
  new_concepts: 2
  assessment: "Low. The wish-vs-blueprint distinction is intuitive. Domain Decomposition is introduced as a preview, not taught in depth."

differentiation:
  extension_for_advanced: "Write three versions of a factory description at increasing levels of specificity. Identify what each level adds."
  remedial_for_struggling: "Focus on the analogy: a job posting is a wish; a job manual is a blueprint. Agents are literal and need the manual."
---

# A Wish Is Not a Blueprint

James picked up the whiteboard marker and wrote in large letters:

**HireFlow: An AI that helps with hiring.**

He stepped back. "There. That is our project. Four FTEs, one pipeline. I know the roles from Chapter 61. I know the economic participation points from Chapter 62. I know where we are on the maturity model from Chapter 63. Let us start building."

Emma looked at the whiteboard for a long moment. "That is a wish."

"It is a description."

"It describes what you hope HireFlow will do. It says nothing about how." She uncapped her own marker. "Let me ask you three questions."

James set down his marker. "Go ahead."

"Question one: the Job Spec Writer receives hiring manager requirements. What format are those requirements in? A structured form? Free text? A conversation transcript?"

James opened his mouth, then closed it.

"Question two: the Resume Screener scores candidates from 0 to 100. What does a 72 mean? Is that good enough to interview? What if the scoring rubric changes between job postings?"

"I guess it depends on the job." James thought for a moment. "At my old company we scored suppliers on a 100-point scale. Anything above 70 was approved, anything below got flagged. So 72 would be a pass. Barely, but a pass."

"That is a threshold, not a meaning. You know 72 crosses a line, but you do not know why it scored 72 instead of 68 or 81. Suppose the rubric weights communication skills at 30 percent for a sales role but 5 percent for a backend engineer. A 72 on one rubric means something completely different from a 72 on the other. Your supplier scoring worked because the rubric was the same every time. Here it changes with every job posting."

James sat with that. The number had felt solid ten seconds ago. Now it felt hollow.

"Question three: the Candidate Summarizer produces a brief for the hiring committee. What happens when its summary contradicts the Resume Screener's score? The screener gave a candidate 85, but the summarizer flags three serious risks. Which does the committee trust?"

James stared at the whiteboard. "HireFlow: An AI that helps with hiring" suddenly looked thin.

## The Gap Between Wish and Blueprint

Quick recall from Chapter 61: What are the two layers of the Two-Layered Model? (Factory Layer and Edge Layer.) HireFlow lives in the Factory Layer. The Factory Layer requires contracts, verification, and governance. A wish has none of these.

Quick recall from Chapter 62: What is the core design principle for economic actors? (Budgets, not permissions.) Where do budget checkpoints appear in a wish? They do not, because a wish has no structure to put them in.

"Wait, so basically..." James said, "my description tells you WHAT HireFlow does, but not HOW each piece works, WHERE the handoffs happen, or WHEN a human needs to step in."

"Or what happens when something breaks." Emma drew a line down the middle of the whiteboard. On the left she wrote **Wish**. On the right she wrote **Blueprint**.

| Wish                      | Blueprint                                    |
| ------------------------- | -------------------------------------------- |
| Names the goal            | Defines the workflow end to end              |
| Lists the roles           | Specifies each role's contracts              |
| Assumes handoffs work     | Defines data schemas at every handoff        |
| Skips failure handling    | Specifies what happens when each stage fails |
| Ignores human involvement | Places human review gates at specific points |
| No measurement            | Defines measurable success criteria          |

"A wish tells you what the factory SHOULD do," Emma said. "A **Factory Blueprint** tells you what it WILL do, what it WILL NOT do, and what happens when things go wrong."

## Why Agents Need Blueprints More Than Humans Do

James leaned against the desk. "My old company ran a supplier evaluation process with four people. We never had a formal blueprint. We knew what to do."

"Did every evaluator produce identical results?"

"No. Maria was strict. Carlos was lenient. The scores varied by 20 points depending on who did the evaluation."

"Agents have the same problem, except worse. A human evaluator who sees a borderline candidate might call a colleague, ask a question, use judgment. An agent follows its contract literally. If the contract says 'score based on requirements match,' it will score. If the contract does not say 'penalize for employment gaps longer than two years,' it will not penalize. There is no judgment. There is only the specification."

James thought about this. "So the more precise the blueprint, the more consistent the factory."

"And the more testable. You cannot test a wish. You can test a blueprint: does the output match the contract? Does the verification gate catch the expected failures? Does the pipeline recover when a stage times out?"

## What This Chapter Teaches

This chapter introduces a six-step method called **Domain Decomposition**. It takes a wish and turns it into a Factory Blueprint: a formal specification with seven sections.

By Lesson 4, you will have HireFlow's complete blueprint. By Lesson 5, you will write one of your own for a different business domain. Every chapter from here forward builds on what you produce in this chapter.

The blueprint is not optional. It is the architectural foundation that skills, MCP servers, databases, and orchestrators will be built on in Chapters 67 through 90. Get it right now, and the rest of Part 6 follows naturally. Get it wrong, and you will debug architecture problems that masquerade as code bugs.
