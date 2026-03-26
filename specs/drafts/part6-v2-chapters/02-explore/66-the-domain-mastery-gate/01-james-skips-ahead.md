---
sidebar_position: 1
title: "James Skips Ahead"
description: "James tries to jump from concept paper to skill writing. Emma reveals the gaps in his recruitment domain knowledge with five rapid-fire questions."
chapter: 66
lesson: 1
duration_minutes: 15
keywords:
  [
    domain-mastery,
    recruitment,
    quality-gate,
    blind-spots,
    agent-supervision,
    principal-agent,
  ]

skills:
  - name: "Domain Gap Recognition"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can identify areas where surface-level domain knowledge is insufficient for supervising an agent"
  - name: "Principal Competence Assessment"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can explain why the human principal's knowledge depth determines agent quality"

learning_objectives:
  - objective: "Identify the difference between knowing a domain's happy path and having the depth to supervise agents working in that domain"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Scenario analysis in guided discovery dialogue"
  - objective: "Explain why agents inherit the blind spots of the person who wrote their skills"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Chapter quiz question"

cognitive_load:
  new_concepts: 2
  assessment: "Low. Builds on principal-agent relationship from Chapter 61 and concept paper from Chapter 65. Uses recruitment scenarios students have already explored."

differentiation:
  extension_for_advanced: "Identify three blind spots in your own domain expertise that you were unaware of before reading this lesson. What questions would expose them?"
  remedial_for_struggling: "Review the principal-agent relationship from Chapter 61 Lesson 4. Focus on the idea that the principal must be competent enough to verify agent output."
---

# James Skips Ahead

James closed his concept paper and opened a new file in Claude Code. The HireFlow concept paper from Chapter 65 had scored 9.6 on the quality rubric. Above the 9.5 threshold from Chapter 63's maturity model. The crystallization signal had fired. James had cleared the concept paper gate. Twenty-two pages of recruitment domain analysis, four FTE specifications, a complete pipeline diagram. He was ready.

He started typing a prompt.

```
Create the Resume Screener skill for HireFlow. The screener should
parse CVs, score candidates against job requirements, and produce
a ranked shortlist with match percentages.
```

"What are you doing?" Emma had appeared behind his chair.

"Writing the Resume Screener skill. The concept paper is done. The Blueprint from Chapter 64 has the FTE specs. I have everything I need."

Emma pulled up a chair. "Before you write that skill, I have five questions. Quick ones."

James shrugged. "Go ahead."

## Five Questions

"First question." Emma held up one finger. "What are the four FTE roles in HireFlow and what does each produce?"

James rattled it off without hesitation. "Job Spec Writer produces structured job descriptions from hiring manager briefs. Resume Screener scores CVs against job requirements. Interview Question Generator creates role-specific interview guides. Candidate Summarizer produces decision-ready briefs for the hiring committee." He leaned back. "That is straight from my Blueprint."

"Good. Second question." Emma held up two fingers. "A candidate has a three-year employment gap due to caregiving. How should the Resume Screener handle this?"

James opened his mouth. Paused. "It should... not penalize them for it?"

"Should it flag the gap?"

"Maybe? For context?"

"What context would it provide? What language should the flag use? Should the flag be visible to the hiring manager or only in the audit log?"

James shifted in his seat. "I would need to think about that."

"Third question." Emma did not slow down. "A candidate scored 92% on technical skills but their references describe persistent communication problems. What is your recommendation to the hiring committee?"

"That depends on the role," James said carefully. "If it is a solo contributor, the communication issues matter less. If they are leading a team..."

"Your Resume Screener does not know 'it depends.' It produces a score and a recommendation. What rule do you give it?"

James hesitated. "I am not sure there is a clean rule for that."

"Fourth question. What candidate information must the Resume Screener ignore to comply with anti-discrimination laws?"

Silence. James stared at the ceiling. "Age. Gender. Race. I think... marital status? Disability?"

"You said 'I think.' Your agent will not say 'I think.' Your agent will process the information or ignore it. If you are uncertain which fields are legally protected, your agent will be uncertain too. Except it will not tell anyone it is uncertain. It will just produce output."

"Fifth question." Emma held up her full hand. "When should the Interview Question Generator produce behavioral questions versus technical questions?"

"Behavioral for soft skills. Technical for hard skills."

"What ratio? For a senior engineering role with heavy mentoring responsibilities, what is the split? Seventy-thirty? Fifty-fifty? Does it depend on whether the team already has senior technical coverage?"

James exhaled. "I got the first question right. I fumbled the rest."

## The Concept Paper Is Not Enough

"Your concept paper is excellent," Emma said. "It covers the happy path. Four FTEs, clean handoffs, well-defined inputs and outputs. But the happy path is maybe 30% of what your agents will encounter."

James pushed back. "The concept paper took me two weeks. The 10-80-10 loop from Chapter 65, multiple revision cycles, a quality score above 9.5. You are telling me it is not enough?"

"I am telling you it is a different kind of artifact. The concept paper proves you understand the domain well enough to design a system. It does not prove you understand the domain well enough to supervise agents working inside that system."

"Wait, so basically the concept paper is like an architect's blueprint, and what you are testing is whether I can actually manage the construction crew?"

"Close. The concept paper shows you can design the building. The questions I asked show whether you can inspect the plumbing."

James crossed his arms. "I can learn the edge cases as I build. Read some recruitment law. Study interview methodology. I do not need to be an expert before I start."

"You need to be expert enough to catch your agent's mistakes."

"I will review the agent's output."

"Review it against what? If you do not know the anti-discrimination rules, how will you spot when your screener violates them? If you cannot articulate when behavioral questions should outweigh technical ones, how will you evaluate your Interview Question Generator's output?"

James was quiet for a moment.

Emma pressed. "Here is the problem. Your agents will make the same mistakes you would. If you do not know the answer, your agent will not either. Worse: it will answer confidently."

## Blind Spots Travel Downhill

This is the core lesson of Chapter 66. In Chapter 61, you learned about the principal-agent relationship: the human principal sets intent, and the agent executes. That chapter focused on the agent side. This chapter focuses on the principal side.

A **blind spot** is a gap in the principal's domain knowledge that they are unaware of. James knows the four HireFlow FTEs and their happy-path behavior. He does not know how to handle employment gaps, conflicting signals in candidate data, or the specifics of anti-discrimination compliance. Those are blind spots. He did not know he did not know them until Emma asked.

**Blind spot inheritance** is what happens when those gaps travel from the principal into the agent's behavior. The principal writes agent skills based on what they know. What they do not know never makes it into the skill definition. The agent then operates in a world where those gaps do not exist, because its instructions never mentioned them.

James had already experienced this in miniature. His concept paper described the Resume Screener's scoring logic in detail. It never mentioned how to handle employment gaps, because James had never thought about it. If he had written the screener skill right then, the screener would have penalized every candidate with a gap. Caregivers. Veterans. People who took time to recover from illness. Not because James intended harm, but because the skill never addressed the scenario.

"That is a recruiting lawsuit waiting to happen," James said slowly.

"It is also a fixable problem," Emma said. "But only if you find the gaps before you write the skills."

:::tip Key Insight
Your concept paper from Chapter 65 proves you understand the domain's structure. The Domain Mastery Gate proves you understand the domain's depth. Structure without depth produces agents that work perfectly on happy paths and fail silently on everything else.
:::

## What Comes Next

James deleted the prompt he had started typing. "So how do I find the gaps?"

"You build a test for yourself. Not a test your AI writes for you and you passively answer. A test that forces you to confront the parts of the domain you skimmed over."

In the next lesson, James and Emma will build that test: a domain mastery quiz generated from the concept paper, designed to separate surface knowledge from genuine expertise.
