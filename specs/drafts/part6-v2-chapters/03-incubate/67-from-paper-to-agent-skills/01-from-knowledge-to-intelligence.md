---
sidebar_position: 1
title: "From Knowledge to Intelligence"
description: "Why domain knowledge and agent intelligence are different things, and why your concept paper cannot become code without a transformation step."
chapter: 67
lesson: 1
duration_minutes: 20
keywords:
  [
    domain knowledge,
    agent intelligence,
    concept paper,
    skill writing,
    incubate phase,
  ]

skills:
  - name: "Distinguishing Domain Knowledge from Agent Intelligence"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can articulate why a concept paper alone cannot produce competent agent behavior and identify the gap between knowing a domain and encoding that knowledge for agents"

  - name: "Recognizing the Incubate Phase Purpose"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can explain what Phase 2 (Incubate) produces and how it differs from Phase 1 (Explore) and Phase 3 (Build Specialist)"

learning_objectives:
  - objective: "Explain why domain knowledge (concept paper) and agent intelligence (skills) are different artifacts that serve different purposes"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student articulates the gap between a concept paper paragraph and an actionable agent skill instruction"

  - objective: "Identify the transformation step between Explore and Build as the core purpose of the Incubate phase"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student places skill-writing correctly within the five-phase maturity journey and explains why it cannot be skipped"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (domain knowledge vs. agent intelligence, the transformation gap, Incubate phase purpose) within B1 limit"

differentiation:
  extension_for_advanced: "Compare how two different concept paper sections would produce different types of agent intelligence. Identify which sections contain judgment calls versus factual knowledge."
  remedial_for_struggling: "Focus on one concrete example: the Resume Screener. What does the concept paper say about screening? What would an agent need to know to actually do it?"
---

# From Knowledge to Intelligence

James opened his laptop and pulled up the HireFlow concept paper. Two weeks of work sat in that document: recruitment workflows mapped, scoring criteria defined, edge cases catalogued, quality thresholds argued over with three different frontier models until the paper earned a 9.5 (above the crystallization threshold from Chapter 63's Agent Maturity Model; Phase 1 was complete). He had passed the domain mastery gate in Chapter 66 with an 88% score. He knew recruitment.

"Time to build," he said, cracking his knuckles.

He opened Claude Code and typed:

```
Build me a resume screening agent that scores candidates
against job requirements.
```

Claude Code produced something. It ran. It generated scores. James looked at the output and frowned.

"It gave the marketing candidate a 7 out of 10 for a backend engineering role," he said. "And the senior engineer with fifteen years of experience got a 6. That is backwards."

Emma looked over his shoulder. "What scoring criteria did you give it?"

"I said to score candidates against job requirements."

"That is not criteria. That is a wish."

James scrolled through the output. The agent had invented its own scoring logic: it weighted keyword matches in the CV against words in the job description. A marketing candidate whose CV mentioned "Python" in a course description scored higher than an engineer whose CV described "distributed systems architecture" because the job description happened to mention Python three times.

"But I know how to score candidates," James said. "I spent two chapters researching this. The concept paper has a whole section on scoring dimensions."

Emma pulled up the concept paper on her screen. "Read me the scoring section."

James read: "The Resume Screener evaluates candidates across five dimensions: technical skills match, experience relevance, role-specific qualifications, cultural indicators, and career trajectory alignment. Each dimension is weighted based on role seniority, with technical match receiving higher weight for junior roles and career trajectory receiving higher weight for senior roles."

"Good," Emma said. "Now tell me: is any of that in the prompt you just wrote?"

James looked at his one-line prompt. "No."

"Your concept paper knows how to score candidates. Your agent does not. Those are two different things."

## The Gap Between Knowing and Encoding

This is the central problem of the Incubate phase. You have domain knowledge. You proved it by passing the mastery gate. But domain knowledge lives in your head and in your concept paper. Agents cannot read your mind. They cannot extract the decision logic buried in your paragraphs. They need that logic encoded in a format they can execute.

Consider what happened to James. He knew:

- Five scoring dimensions with context-dependent weights
- That keyword matching alone produces garbage scores
- That career trajectory matters more for senior roles than junior ones
- That a marketing candidate mentioning Python in a course description is not the same as an engineer with production Python experience

The agent knew none of this. It received "score candidates against job requirements" and did the best it could with no decision logic to guide it.

Quick recall from Chapter 63: what is the difference between an Incubator and a Specialist? The Incubator (a general agent like Claude Code) explores and validates. The Specialist (a custom agent you build) executes domain-specific tasks with encoded expertise. Right now, James is asking an Incubator to do a Specialist's job without giving it the Specialist's knowledge.

Quick recall from Chapter 66: what does the domain mastery gate protect against? It protects against building agents on top of blind spots. James passed the gate. He has the knowledge. The problem is that the knowledge is still trapped in human-readable prose.

## Domain Knowledge vs. Agent Intelligence

**Domain knowledge** is what you know about a field. It lives in concept papers, textbooks, experience, and your head. It is descriptive: it explains how things work, what matters, and why.

**Agent intelligence** is how an agent makes decisions in that field. It lives in skill files. It is prescriptive: it tells the agent what to do, when to do it, how to evaluate its own output, and when to stop.

The difference matters because agents do not "understand" prose the way humans do. When your concept paper says "technical skills match receives higher weight for junior roles," a human reader applies that rule instinctively when reviewing a CV. An agent needs explicit instructions: "For roles marked seniority: junior, multiply the technical skills score by 1.5. For roles marked seniority: senior, multiply the career trajectory score by 1.5."

James leaned back. "Wait, so basically my concept paper is like a training manual that explains the company's hiring philosophy, and the skill file is like the actual scoring rubric the recruiter uses on their desk?"

Emma nodded. "The training manual tells you what good hiring looks like. The scoring rubric tells you what number to write in which box. Agents need the rubric."

"So I have to go through my entire concept paper and turn philosophy into rubrics."

"That is exactly what this chapter teaches."

## What the Incubate Phase Produces

In Chapter 63, you learned the five-phase maturity journey. Phase 1 (Explore) produced a validated concept paper and confirmed domain mastery. Phase 3 (Build Specialist) will produce running Digital FTEs with MCP servers, databases, and APIs.

Phase 2 (Incubate) sits between them. It answers the question: what does the agent need to know before you start building production code?

The answer is skills. Specifically, four SKILL.md files, one for each HireFlow FTE:

| FTE                       | What the Concept Paper Says                            | What the Skill Must Encode                                                                         |
| ------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Job Spec Writer**       | "Turns hiring briefs into structured job descriptions" | Exact output format, required sections, how to handle vague briefs, when to ask for clarification  |
| **Resume Screener**       | "Scores candidates across five dimensions"             | The five dimensions, their weights per seniority level, calibration examples, edge case handling   |
| **Interview Q Generator** | "Creates role-specific questions"                      | Question categories, difficulty calibration, how to match questions to scoring gaps from screening |
| **Candidate Summarizer**  | "Produces hiring committee briefs"                     | Brief format, what to include vs. omit, how to present conflicting signals, recommendation logic   |

The concept paper describes each FTE in 2-3 paragraphs. The skill file encodes each FTE's decision logic in specific, executable instructions. The transformation from one to the other is not automatic. It requires systematic extraction, structuring, and encoding.

That transformation method is what Lesson 2 teaches.

## Why You Cannot Skip This Step

James looked at the table. "Could I just paste the concept paper into a prompt and tell the agent to follow it?"

Emma raised an eyebrow. "Try it."

James pasted the entire Resume Screener section from his concept paper into a prompt. The agent produced better output than the one-liner. The marketing candidate dropped to a 4. The senior engineer rose to an 8. Progress.

Then James tested with a candidate who had a non-traditional background: a self-taught developer with no degree, five years of freelance work, and strong GitHub contributions but no corporate experience.

The agent gave the candidate a 3 out of 10. James read the reasoning: "Lacks formal qualifications. No corporate experience. Freelance work does not meet role requirements."

"My concept paper says nothing about requiring a degree," James said. "And it specifically mentions that non-traditional backgrounds should be evaluated on demonstrated ability, not credentials."

"Where in the paper does it say that?"

James searched. "Paragraph seven of the screening section. It is one sentence in a paragraph about edge cases."

"One sentence in paragraph seven," Emma said. "Buried in prose that the agent processed as background context, not as a decision rule. If you want the agent to treat non-traditional backgrounds differently, that rule needs to be explicit, prominent, and structured."

That is the problem with pasting prose. Concept papers are written for human readers who apply judgment. Agents treat every sentence with equal weight unless you structure the information hierarchically. Edge case rules buried in paragraph seven are indistinguishable from general observations in paragraph two.

Skills solve this by structuring knowledge into three components: what the agent IS (Persona), what the agent ASKS itself (Questions), and what rules the agent FOLLOWS (Principles). These components create a decision framework, not a document to read.

## Try With AI

Use these prompts to explore the gap between domain knowledge and agent intelligence.

### Prompt 1: Test the Gap

```
I have a concept paper about [your domain from the Ch 64 blueprint exercise].
Here is one paragraph from it:

[Paste one paragraph from your concept paper]

Now, using ONLY this paragraph as your instructions, [perform the task
the paragraph describes] for this test input:

[Provide a specific test case]

After you produce the output, tell me: what decisions did you make that
were NOT explicitly stated in the paragraph? What did you have to infer
or guess?
```

**What you are learning**: How much decision logic is implicit in prose. The agent's list of "guesses" reveals exactly what needs to be made explicit in a skill.

### Prompt 2: Compare Prose vs. Structured Instructions

```
I want to score a job candidate. Here are two versions of my instructions:

Version A (prose): "Evaluate the candidate's technical skills, relevant
experience, and cultural fit. Weight technical skills more heavily for
junior roles."

Version B (structured):
- Score technical_skills (0-10): count matching required skills, bonus
  for adjacent skills
- Score experience_relevance (0-10): years in similar role, relevance
  of past projects
- Score cultural_indicators (0-10): communication style, collaboration
  signals
- For junior roles: final = technical_skills * 0.5 + experience * 0.3
  + cultural * 0.2
- For senior roles: final = technical_skills * 0.3 + experience * 0.3
  + cultural * 0.4

Using each version separately, score this candidate:
[Describe a test candidate]

Which version produced more consistent, auditable results? Why?
```

**What you are learning**: Structured instructions produce reproducible output. Prose produces variable output because the agent fills gaps with its own judgment.

### Prompt 3: Find the Buried Rules

```
Read this concept paper section carefully:

[Paste a 3-4 paragraph section from your concept paper]

Now list every decision rule that is implied but not explicitly stated.
For each one:
1. What is the rule?
2. Where in the text is it implied?
3. How would you make it explicit for an agent?
```

**What you are learning**: How to identify implicit decision logic. Every rule you find becomes a candidate for your skill's Questions or Principles section. This extraction process is the first step of the transformation method you will learn in Lesson 2.
