---
sidebar_position: 3
title: "The Factory Blueprint Template"
description: "The reusable seven-section template for specifying any agent factory, from domain summary to economic participation points"
chapter: 64
lesson: 3
duration_minutes: 15
keywords:
  [
    factory blueprint,
    template,
    role specification,
    data contract,
    human gate,
    success criteria,
    economic participation,
  ]

skills:
  - name: "Blueprint Template Structure"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can describe all seven sections of the Factory Blueprint Template and explain what each one captures"
  - name: "Specification Writing"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can fill in a blank blueprint section with appropriate content for a given domain"

learning_objectives:
  - objective: "Name the seven sections of the Factory Blueprint Template in order"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Section recall"
  - objective: "Explain the purpose of each section and what problem it prevents"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Purpose explanation exercise"

cognitive_load:
  new_concepts: 2
  assessment: "Low. The template organizes concepts from Lesson 2 into a formal structure. No new ideas are introduced; this lesson is about form, not content."

differentiation:
  extension_for_advanced: "Compare this template to a software architecture document (SAD) or an RFC. What does the Factory Blueprint include that those documents do not?"
  remedial_for_struggling: "Focus on Sections 1-3 (Summary, Workflow Map, Role Specs). These are the core. Sections 4-7 add precision."
---

# The Factory Blueprint Template

"You have six steps," Emma said. "Now you need a place to put the results. One document. Seven sections."

She pulled up an empty template on the screen. "This is the **Factory Blueprint Template**. Every agent factory you build starts here."

James studied it. "Seven sections. That is more than I expected."

"Each section answers a specific question. Skip one, and you will discover the gap when something breaks in production, which is the most expensive place to discover it."

## The Seven Sections

### Section 1: Domain Summary

Three lines. The anchor for everything that follows.

```
Workflow: From [input] to [output] through [stages].
Business value: [What problem this factory solves]
Users: [Who consumes the factory's outputs]
```

"This is Step 1 from the decomposition method," James said. "The one-sentence workflow."

"Plus two lines of context. The business value reminds you WHY the factory exists when you are deep in implementation details. The users line tells you WHO judges the output."

### Section 2: Workflow Map

A visual diagram showing stages left to right, arrows for data flow, and diamonds for human review gates.

```
[Input] → [Stage 1] → ◇ → [Stage 2] → [Stage 3] → ◇ → [Stage 4] → [Output]
                       |                              |
                   Human Gate                     Human Gate
```

"This is the picture version of Steps 2 and 5," Emma said. "It shows the pipeline shape at a glance. Someone who reads only this diagram should understand the flow."

"Do I need a formal diagramming tool?"

"ASCII is fine for a blueprint. Clarity matters more than aesthetics."

### Section 3: Role Specifications

One block per FTE. Five fields each, straight from Step 3.

```
### FTE [N]: [Name]
- Responsibility: [One sentence]
- Input Contract: [Schema with types and constraints]
- Output Contract: [Schema with types and constraints]
- Verification: [What must be true before handoff]
- Failure Mode: [What happens when this FTE fails]
```

James noticed a new field. "Failure Mode was not in Step 3."

"It should have been. What happens when the Resume Screener cannot parse a CV? Does the pipeline skip the candidate? Retry with a different parser? Escalate to a human? If you do not decide now, the agent decides for you. And agent decisions without specifications are unpredictable."

"Good catch."

"I have shipped factories without failure modes." Emma paused. "Once. The third FTE silently dropped records that did not match its expected schema. Clean runs, green dashboards, no errors. We did not find out until the client reported two hundred missing candidate evaluations three weeks later." She looked at James. "Failure modes are not documentation. They are the difference between a factory that fails visibly and one that fails quietly while telling you everything is fine."

### Section 4: Data Contracts

One block per handoff. The exact schema that the receiving stage can rely on, from Step 4.

```
### [Stage A] → [Stage B]
- Schema: [Field definitions with types and constraints]
- Required fields: [List]
- Validation rules: [Constraints that must hold]
- Example: [One concrete example of valid data]
```

"The example is important," Emma said. "A schema tells you the structure. An example shows you a real instance. When the two disagree, you found a bug in your schema."

### Section 5: Human Review Gates

One block per gate, from Step 5.

```
### Gate [N]: [Name]
- Location: Between [Stage A] and [Stage B]
- Trigger: [When is human review required]
- Decision: [What the human approves or rejects]
- Escalation: [What happens if the human rejects]
```

"The Trigger field matters," James said. "Not every pipeline run needs the same gates."

"Correct. A gate that triggers for every run is a bottleneck. A gate that triggers only when the screener's confidence is below a threshold is a safety net. The trigger defines which one you are building."

### Section 6: Success Criteria

Measurable outcomes. Not aspirations. Measurements.

```
- [Metric]: [Target value] (measured by [method])
```

"What makes a good success criterion?" James asked.

"Three properties. It is measurable: you can compute a number. It is specific: '< 4 hours' not 'fast.' And it is verifiable: someone can check whether you hit the target without subjective judgment."

:::tip Good vs Bad Success Criteria

- Bad: "The factory should be fast." (Not measurable.)
- Bad: "Candidates should be evaluated accurately." (Not specific.)
- Good: "Time from requirements to candidate briefs < 4 hours." (Measurable, specific, verifiable.)
- Good: "Same candidate scored within plus or minus 5 points across repeated runs." (Measurable, specific, verifiable.)
  :::

### Section 7: Economic Participation Points

One block per point, from Step 6. This section may be mostly "future" status early in a factory's life.

```
### Point [N]: [Name]
- Location: [Which FTE, which stage]
- Resource: [What could be acquired]
- Budget constraint: [Spending envelope from Chapter 62]
- Status: [Designed | Active | Future]
```

"The Status field is key," Emma said. "Designed means you have recorded the point and will track budgets from Chapter 84 onward. Active means the agent is acquiring resources today. Future means you see the possibility but have no timeline."

## The Template as a Whole

| Section                   | Maps to Step | Core Question                         |
| ------------------------- | ------------ | ------------------------------------- |
| 1. Domain Summary         | Step 1       | What does this factory do?            |
| 2. Workflow Map           | Steps 2 + 5  | What is the pipeline shape?           |
| 3. Role Specifications    | Step 3       | Who does what, with what contracts?   |
| 4. Data Contracts         | Step 4       | What can each stage rely on?          |
| 5. Human Review Gates     | Step 5       | Where do humans intervene?            |
| 6. Success Criteria       | (new)        | How do we know it works?              |
| 7. Economic Participation | Step 6       | Where could agents acquire resources? |

"In the next lesson," Emma said, "we fill this template in for HireFlow. Every field. Every section. That becomes the reference blueprint for the rest of Part 6."
