---
sidebar_position: 5
title: "Write Your Factory Blueprint"
description: "Applied exercise: design a complete Factory Blueprint for a business domain of your choice using the six-step method"
chapter: 64
lesson: 5
duration_minutes: 30
keywords:
  [
    factory blueprint,
    domain decomposition,
    applied exercise,
    customer support,
    content publishing,
    loan processing,
  ]

skills:
  - name: "Independent Blueprint Design"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can design a complete Factory Blueprint for a new business domain without guidance"
  - name: "Domain Analysis"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can identify FTE roles, data contracts, and verification criteria for an unfamiliar business domain"

learning_objectives:
  - objective: "Apply the six-step Domain Decomposition method to a new business domain"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Blueprint production"
  - objective: "Write data contracts with types, constraints, and validation rules"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Contract specification quality"
  - objective: "Place human review gates with justified trigger conditions"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Gate placement justification"

cognitive_load:
  new_concepts: 0
  assessment: "Low for concepts, high for application. No new ideas are introduced. The challenge is applying the template to a fresh domain independently."

differentiation:
  extension_for_advanced: "Choose a domain you have real professional experience in. Use that experience to write richer failure modes and more precise data contracts than the examples provide."
  remedial_for_struggling: "Start with the Customer Support Factory. It has the most obvious parallels to HireFlow. Follow the same FTE structure."
---

# Write Your Factory Blueprint

You have seen the method (Lesson 2), the template (Lesson 3), and a worked example (Lesson 4). Now it is your turn.

In this exercise, you will design a complete Factory Blueprint for a business domain that is NOT HireFlow. The goal is to prove you can apply Domain Decomposition independently.

## Choose Your Domain

Pick one of these three options, or choose a domain from your own professional experience.

### Option A: Customer Support Factory

**Context:** A company receives 500 support tickets per day across email, chat, and phone transcripts. Currently, human agents triage, respond, escalate, and close tickets. The factory automates the pipeline while keeping humans in the loop for complex cases.

**Hints for decomposition:**

- Who triages incoming tickets? (classify urgency, route to category)
- Who drafts responses? (template-based for common issues, custom for complex)
- Who decides when to escalate to a human? (what threshold?)
- Who handles quality checks before sending? (tone, accuracy, policy compliance)

### Option B: Content Publishing Factory

**Context:** A media company publishes 20 articles per week. The pipeline runs from pitch to publication: topic approval, research, drafting, editing, and scheduling. The factory automates drafting and editing while keeping editorial judgment with humans.

**Hints for decomposition:**

- Who evaluates pitches? (relevance, audience fit, overlap with existing content)
- Who researches the topic? (source gathering, fact compilation)
- Who drafts the article? (structure, voice, length requirements)
- Who reviews for quality? (factual accuracy, style guide compliance, SEO)

### Option C: Loan Processing Factory

**Context:** A bank processes 200 loan applications per month. The pipeline runs from application submission to approval decision: eligibility check, document verification, risk assessment, and decision recommendation. The factory automates evaluation while keeping the final decision with a human loan officer.

**Hints for decomposition:**

- Who checks initial eligibility? (credit score threshold, income minimums)
- Who verifies documents? (identity, income proof, employment verification)
- Who assesses risk? (debt-to-income ratio, collateral evaluation, market conditions)
- Who produces the recommendation? (approve, deny, or request more information)

## Your Task

Follow the six-step method from Lesson 2 and fill in all seven sections of the Factory Blueprint Template from Lesson 3.

### Step-by-Step Instructions

**Step 1: Name the Domain Workflow**

Write one sentence: "From [input] to [output] through [stages]."

**Step 2: Identify 3-5 FTE Roles**

Each role has one responsibility. Name them and write a one-sentence description for each.

**Step 3: Write Complete Role Specifications**

For each FTE, fill in all five fields: Name, Responsibility, Input Contract, Output Contract, Verification. Add a Failure Mode for each.

**Step 4: Map Data Contracts**

For every handoff between adjacent FTEs, write the schema with types and constraints. Include at least one concrete example.

**Step 5: Place Human Review Gates**

Decide where humans must intervene. For each gate, specify: Location, Trigger, Decision, Escalation. Justify why this gate is here and not elsewhere.

**Step 6: Add Economic Participation Points**

Identify at least one location where the factory could acquire an external resource autonomously. Record the location, resource, budget constraint, and status.

**Step 7: Write Success Criteria**

Define at least three measurable success criteria with specific targets and measurement methods.

## Self-Assessment Checklist

After completing your blueprint, verify against this list:

| Requirement                                                                   | Check |
| ----------------------------------------------------------------------------- | ----- |
| Workflow described in one sentence using "From... to... through..." structure |       |
| 3-5 FTEs with non-overlapping responsibilities                                |       |
| Every FTE has all five spec fields plus Failure Mode                          |       |
| Every handoff has a data contract with types and constraints                  |       |
| Every data contract includes at least one concrete example                    |       |
| At least 1 human review gate with justified placement                         |       |
| At least 1 economic participation point                                       |       |
| At least 3 measurable success criteria with specific targets                  |       |
| No stage has an ambiguous boundary with its neighbor                          |       |

## Review With Claude Code

After writing your blueprint, share it with Claude Code using this prompt:

:::tip AI-Assisted Review
Copy your blueprint into Claude Code and ask:

"Review this Factory Blueprint. For each section:

1. Are there boundary gaps between any two FTEs?
2. Are there data contract fields that are missing types or constraints?
3. Are the human review gates placed at the highest-leverage decision points?
4. What failure modes am I missing?
5. What is the weakest success criterion, and how would you make it more specific?"

Compare its analysis with your own. Where it finds gaps you missed, update your blueprint. Where you disagree with its suggestions, write a one-sentence justification for your design choice.
:::

## Common Pitfalls

These mistakes appear frequently in first blueprints:

**Too many FTEs.** If you have 7 stages, some can likely be combined. A pipeline with too many stages has too many handoffs, and each handoff is a potential failure point.

**Vague verification criteria.** "Output should be accurate" is not verification. "Every claim references a specific source document" is verification. If you cannot write a test for it, it is not a criterion.

**Human gates everywhere.** If every handoff requires human review, the factory is a workflow tool, not an automated pipeline. Gates protect decisions with high consequences. Most handoffs should flow automatically.

**Missing failure modes.** Every FTE will encounter bad input. What happens then? If your blueprint says nothing, the agent decides for itself. That is rarely what you want.

**Generic data contracts.** `output: dict` is a type annotation, not a contract. Specify the keys, their types, their constraints, and their validation rules.
