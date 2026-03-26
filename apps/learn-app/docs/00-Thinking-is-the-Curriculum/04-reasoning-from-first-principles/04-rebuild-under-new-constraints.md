---
sidebar_position: 4
aicheck: true
title: "Rebuild Under New Constraints"
description: "Rebuild your first-principles solution when a foundational constraint changes, testing whether you understand your principles deeply enough to know which survive and which collapse"
keywords:
  [
    "thinking skills",
    "Part 0",
    "first principles",
    "constraint change",
    "principle audit",
    "adaptability",
  ]
chapter: 4
lesson: 4
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Principle Audit Under Change"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can audit their first principles when a constraint changes, correctly identifying which principles survive (and why), which collapse (and why), and which new principles emerge"

  - name: "Adaptive Solution Design"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Create"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can rebuild a solution under changed constraints by tracing the impact through their principle audit, producing a new solution that is logically consistent with the updated constraints"

learning_objectives:
  - objective: "Conduct a principle audit when constraints change, distinguishing principles that survive from those that collapse and identifying emergent principles"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check evaluates whether the student correctly identified surviving vs. collapsed principles and rates adaptability"

  - objective: "Rebuild a solution from updated principles and compare adaptation strategy against AI's approach"
    proficiency_level: "A1"
    bloom_level: "Create"
    assessment_method: "AI Check rates whether rebuild is genuinely principled or a superficial patch, and provides overall chapter-level first principles rating"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (principle audit, constraint change propagation, principles vs. patterns distinction under stress) : within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After rebuilding, predict which NEXT constraint change would most fundamentally break your rebuilt solution. What does this tell you about the fragility of your remaining assumptions?"
  remedial_for_struggling: "Go through your principles one at a time. For each, ask: 'Does this principle still hold when the constraint changes?' Write yes or no with one sentence explaining why. This is your principle audit"

teaching_guide:
  lesson_type: "exercise"
  session_group: 4
  session_title: "Rebuild Under New Constraints"
  key_points:
    - "This is the ultimate test of first principles reasoning: if you derived from principles, you can adapt; if you borrowed a pattern, you have to start over"
    - "The principle audit (survived/collapsed/emerged) is the key deliverable structure: it makes the adaptation visible"
    - "Comparing human vs. AI rebuild strategies reveals different adaptation approaches: humans tend to preserve core logic; AI tends to regenerate from scratch"
    - "The 200-word reflection on principles vs. patterns connects the full chapter's learning arc"
  misconceptions:
    - "Students try to start from scratch instead of revising: the constraint is that they must trace which principles survived and which collapsed"
    - "Students patch their old solution superficially rather than genuinely rebuilding from the surviving principles"
    - "Students think 'principles that collapsed' means they were wrong: collapsed principles were correct under the old constraints, they just do not apply to the new situation"
  discussion_prompts:
    - "What percentage of your original principles survived the constraint change? Does this surprise you: were your principles more robust or more fragile than you expected?"
    - "What is the difference between a principle and a pattern? This exercise was designed to make that distinction visible: can you now articulate it?"
  teaching_tips:
    - "Each scenario's constraint change fundamentally shifts the problem: Education moves from supply allocation to access optimization, Technical moves from capacity limits to cooperation dynamics, Community moves from supply scarcity to logistics bottlenecks"
    - "Have students share their principle audits before their rebuilt solutions: the quality of the audit predicts the quality of the rebuild"
    - "The chapter-level AI feedback (Beginner/Developing/Proficient/Advanced) gives students a cumulative rating across all 4 exercises: emphasize growth trajectory over absolute score"
  assessment_quick_check:
    - "Ask students: Name one principle that survived the constraint change and explain WHY it still holds"
    - "Ask students: What is the most important thing this chapter taught you about the difference between reasoning from principles and reasoning from patterns?"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Rebuild Under New Constraints

## Why This Matters: James and the Shifting Ground

James read the new constraint and felt his stomach drop. The problem he'd spent forty-five minutes solving in Exercise 2 had just shifted underneath him. The supply constraint was gone, replaced by an access constraint. Everything he'd built assumed scarcity of the resource itself. Now the resource was unlimited but the pathway to it was bottlenecked.

"Okay, so I just... start over?" he said.

"Do you?"

"The whole solution was built around fair allocation of a limited supply. The supply isn't limited anymore. So yes, I start from scratch."

"Which of your principles was 'supply is limited'?"

James pulled up his worksheet. "It wasn't a principle. It was a constraint." He stopped. "Wait, so basically... my principles might still be valid even though the constraint changed. The principle about prioritizing the most underserved groups doesn't depend on whether supply is limited. It depends on whether access is unequal."

"So which principles survive?"

James went through his list. Equity-first allocation: still valid, because access is still unequal. Measurement through standardized assessments: still valid, but now measuring something different. Phased rollout to manage capacity: collapsed, because capacity isn't the bottleneck anymore. "Two survive. One collapses. And I think a new one emerges. Something about routing efficiency through bottleneck points."

"That's a principle audit." Emma leaned back. "If you'd copied a framework from a textbook, you'd have nothing to audit. You'd just have a pattern that no longer fits. But because you derived from principles, you can trace exactly what changed and what didn't."

"It's like when our company restructured the sales territories," James said. "Everyone who'd built their strategy around geographic boundaries had to start from zero. But one rep had built his strategy around customer industry verticals instead. When the map changed, his approach survived because the principle underneath it wasn't tied to geography."

"Same mechanism. Principles are portable. Patterns are fragile."

---

## Exercise 4: Rebuild Under New Constraints

**Layers Used:** Layer 4 (Contradiction Challenge), Layer 6 (Iterative Drafts)

James just discovered that two of his principles survived while one collapsed. Now he has to rebuild. So do you.

### Apply the Constraint Change

The instructor removes or changes one foundational constraint from the scenario you chose in Lesson 2. Use the matching constraint change below:

<Tabs>
  <TabItem value="education" label="Education" default>
    **Scenario A (Education):** "Now assume the AI tutoring system has unlimited
    capacity but students have limited internet access; only 2 hours per day."
  </TabItem>
  <TabItem value="technical" label="Technical">
    **Scenario B (Technical):** "Now assume your GPU cluster has doubled in size
    but every research team must share their compute allocation with at least one
    other team; no team gets exclusive access."
  </TabItem>
  <TabItem value="community" label="Community">
    **Scenario C (Community):** "Now assume disaster relief supplies are
    unlimited but only 3 of the 50 neighborhoods have functioning roads;
    all other deliveries must go through those 3 access points."
  </TabItem>
</Tabs>

### Rebuild from Your Principles

Rebuild your solution. You cannot start from scratch; trace which of your first principles still hold and which collapsed. Then ask AI to rebuild under the same new constraints and compare adaptation strategies.

:::info Your Deliverable
Your rebuilt solution with a clear "principle audit" showing: which first principles survived the constraint change (and why), which collapsed (and why), and which new principles emerged. A comparison of your rebuild approach vs. AI's rebuild approach. A reflection (200 words) answering: What did this exercise teach me about the difference between principles and patterns?
:::

### Check Your Thinking

<AICheck id="rebuild-under-new-constraints" xp={50}>

I originally designed a solution using first principles for a problem.
The constraint has now changed. I rebuilt my solution and documented
which principles survived, which collapsed, and which emerged.

Please:
(1) Did I correctly identify which principles still hold vs. which
collapsed?
(2) Is my rebuilt solution logically consistent with the new
constraints?
(3) Now rebuild the solution yourself under the same new constraints.
I will compare our approaches.
(4) Rate my adaptability -- did I genuinely rebuild from principles or
did I just patch my old solution superficially?
(5) Rate my overall first principles reasoning across this entire
chapter from Beginner / Developing / Proficient / Advanced, with
specific feedback on what to improve.

My principle audit:

<AICheckField
  name="principle_audit"
  placeholder="Paste your principle audit here..."
  rows={6}
/>

My rebuilt solution:

<AICheckField
  name="rebuilt_solution"
  placeholder="Paste your rebuilt solution here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

## What Happened With James

James compared his rebuilt solution against AI's. Claude had regenerated from scratch, producing a clean, comprehensive design that bore almost no resemblance to the original. James's rebuild was messier, but the surviving principles ran through it like a spine. He could trace every design choice back to a specific constraint, old or new.

"Claude rebuilt faster," he said. "But it didn't preserve anything from the original. It just generated a new answer."

"Could Claude explain why it made different choices the second time?"

James checked. The AI's explanation was generic: "The changed constraints require a different approach." No specifics about which parts of the old design survived and which failed.

"I can explain it," James said. "The equity principle survived because access inequality didn't change, only the bottleneck moved. The phased rollout collapsed because capacity is no longer the constraint. And the new routing principle emerged because three access points create a logistics problem that didn't exist before. Claude didn't trace any of that. It just started fresh."

"That's the difference between reasoning from principles and generating from patterns. A pattern matcher produces a new output. A principled thinker adapts with traceability."

Emma was quiet for a moment. Then she said something he didn't expect.

"I spent three months building a microservices architecture at my last company. Three months. Distributed services, message queues, separate deployments, the entire modern stack. Everyone was building microservices. Every conference talk, every blog post, every senior engineer I respected said it was the right approach for any serious application."

James watched her. She didn't usually talk about getting things wrong.

"The application had four users. Four internal users who needed a dashboard that pulled data from two sources. A monolith would have taken two weeks. I spent three months because I never asked whether the pattern fit the problem. I looked at what everyone else was doing and assumed the popular answer was the correct one."

"What happened?"

"My tech lead pulled me aside after a sprint review. She asked me one question: 'What problem does the microservices architecture solve that a monolith doesn't, for this specific application?' And I didn't have an answer. Not because microservices are bad. Because I'd never traced the reasoning. I'd adopted the conclusion without doing the derivation."

She let the silence sit for a beat.

"That's what this chapter is building in you. Not skepticism of best practices. Not contrarianism for its own sake. The habit of asking: what are the actual constraints here, and does this solution follow from them? Or am I just inheriting someone else's answer because it sounds professional?"

James thought about the four exercises. In the first, he'd argued against a best practice and discovered the difference between principles and anecdotes. In the second, he'd derived a solution from nothing and discovered what he actually believed versus what he'd borrowed. In the third, he'd found twenty-three assumptions hiding in a solution he thought was clean. In the fourth, he'd rebuilt when the ground shifted and discovered which parts of his thinking were portable and which were fragile.

"I came into this chapter thinking first principles was about being contrarian," he said. "Arguing against the mainstream for the sake of it. But it's the opposite. It's about understanding why the mainstream answer works, so you know when it doesn't."

"Ready for Chapter 5?"

James looked at his principle audit. Two survived. One collapsed. One emerged. He could trace every line. "Yeah. But I'm going to check my assumptions before I start."

"That's the idea."

## The Lesson Learned

The real test of understanding is adaptation. If you can trace which principles survived a constraint change and which collapsed, you understood the problem. If you have to start over from zero, you were following a pattern, not reasoning from principles. First principles thinking is not about being contrarian. It is about knowing why the mainstream answer works well enough to recognize when it doesn't.

:::info Chapter Deliverable
A **First Principles Portfolio** containing: (1) the contrarian argument (written without AI), (2) the novel problem First Principles Worksheet with AI comparison, (3) the merged assumption map, (4) the rebuilt solution with principle audit, and (5) all AI feedback with reflections.
:::

<details>
<summary>Grading Criteria</summary>

| Component                                                       | Weight |
| --------------------------------------------------------------- | :----: |
| Contrarian argument quality and logical rigor                   |  20%   |
| Novel problem solution (derived from constraints, not borrowed) |  25%   |
| Assumption autopsy thoroughness                                 |  15%   |
| Rebuild adaptation quality                                      |  25%   |
| AI feedback integration and reflections                         |  15%   |

</details>

## Flashcards Study Aid

<Flashcards />
