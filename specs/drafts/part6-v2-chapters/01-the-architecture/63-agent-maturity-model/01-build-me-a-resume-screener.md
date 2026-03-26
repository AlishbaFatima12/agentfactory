---
sidebar_position: 1
title: "Build Me a Resume Screener"
description: "James asks Claude Code to build a resume screening agent and discovers why domain-ignorant agents fail."
chapter: 63
lesson: 1
duration_minutes: 15
keywords:
  [
    domain-ignorant agent,
    premature specialist,
    resume screener,
    shortcutting,
    agent maturity,
  ]

skills:
  - name: "Recognizing Domain-Ignorant Agents"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can identify when an agent produces syntactically correct but domain-ignorant output"

learning_objectives:
  - objective: "Explain why a general-purpose AI producing code that runs does not mean the code works for the domain"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Scenario analysis in chapter quiz"
  - objective: "Identify at least three domain-specific requirements that a premature agent misses"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Applied exercise in Lesson 4"

cognitive_load:
  new_concepts: 2
  assessment: "Low-medium. Two new terms (domain-ignorant agent, premature specialist) introduced through a concrete scenario, not abstract definition."

differentiation:
  extension_for_advanced: "Before reading further, try the same experiment yourself: ask Claude Code to build a resume screener. Evaluate the output against the questions Emma raises. How many domain gaps can you spot?"
  remedial_for_struggling: "Focus on the three questions Emma asks James. For each one, write down what a good answer would look like. If you cannot answer all three, that is exactly the point of this lesson."
---

# Build Me a Resume Screener

James opened Claude Code and typed a prompt.

"Build me a resume screening agent that scores candidates for a software engineering role."

He hit enter. Thirty seconds later, he had code. A Python function that parsed a resume, extracted keywords, compared them to a job description, and returned a score between 0 and 100. It ran. It produced output. James leaned back in his chair.

"Done."

Emma looked over his shoulder. "Run it on this." She handed him a resume. The candidate had eight years of experience, a two-year career gap, three promotions at one company, and a master's degree in an unrelated field.

James ran the agent. Score: 47.

"Is that good or bad?" Emma asked.

"It's... medium?"

"What does 47 mean? What's your scoring rubric?"

James looked at the code. The scoring rubric was a keyword-matching function. Years of experience counted for 20 points. Education counted for 15. Skills matched against a hardcoded list for the rest. Career gaps were not mentioned anywhere.

"There's no career gap handling," James admitted.

"What about the three promotions at one company? Does your agent value loyalty and growth, or penalize narrow experience?"

"It doesn't know about either of those things."

"What's your job spec schema? What fields does a job description need so the screener can score against it?"

James scrolled through the code. The job description was a single string. No structured fields for required skills versus preferred skills. No distinction between must-have qualifications and nice-to-have qualifications. No salary range, no team size, no reporting structure.

"It's a string."

"A string."

## What Just Happened

James asked a general-purpose AI to build a specialist. The AI complied. It produced code that parsed text, compared keywords, and returned a number. Every line of Python was syntactically correct. The function passed a type checker. It would survive a linting pass.

But the agent was **domain-ignorant**: it executed mechanics correctly while knowing nothing about recruitment as a discipline. It did not know that career gaps require contextual evaluation, not automatic penalties. It did not know that a scoring rubric needs to distinguish between hard requirements and soft preferences. It did not know that a job description needs structured fields that a screening algorithm can evaluate against.

The code ran. The output was meaningless.

"This is what I mean by a **premature specialist**," Emma said. "You skipped the part where you understand the domain and went straight to the part where you build the agent. The agent reflects your understanding at the moment you prompted it. And right now, your understanding of recruitment scoring is: match keywords, return a number."

James stared at the code. "But it runs."

"Lots of broken things run." Emma paused. "The question is not whether it runs. The question is whether a hiring manager would trust this output to decide who gets an interview."

James thought about his old job in operations. They had a supplier scoring system once. It matched delivery dates against contract terms and produced a performance score. The first version was pure date comparison: on time or late. It took six months of domain work to add partial deliveries, force majeure clauses, and seasonal adjustment. The first version ran, too. Nobody used it.

"Wait, so basically... I built the equivalent of that first supplier scorecard. The one nobody trusted."

Emma almost smiled. "Exactly. The code is the easy part. The domain knowledge is the hard part. And you tried to skip the hard part."

## The Core Problem

James's experiment reveals a pattern that shows up everywhere in agent factory development:

**General-purpose AI can produce code for any domain. That does not mean it can produce correct code for that domain.**

Claude Code, GPT-4, Gemini: these are general agents. They know syntax, patterns, and common architectures. They can write a resume parser in thirty seconds. But they do not know _your_ domain's requirements unless you teach them. And teaching them requires that you understand the domain first.

This creates a dependency chain:

1. You must understand the domain
2. You must encode that understanding into specifications
3. The specifications must be validated against real domain constraints
4. Only then can a general agent build a specialist that handles the domain correctly

James tried to jump from step 0 (no domain understanding) to step 4 (working specialist). The result was a **domain-ignorant agent**: syntactically valid, semantically empty.

:::tip Quick Recall
In Chapter 61, James tried a different shortcut: building four separate chatbots and connecting them. That failed because of coordination (no contracts, no governance). This failure is different. The code coordinates fine; it is a single function. The problem is that the function does not know what it should be computing. What does this tell you about the two distinct challenges of building an agent factory?
:::

## The Question This Chapter Answers

The Two-Layered Model (Chapter 61) told you who governs the factory. Agents as Economic Actors (Chapter 62) told you what the factory is becoming. This chapter answers the third question: **how does a factory grow from idea to production?**

The answer is not "prompt a general AI and ship the output." The answer involves phases, roles, and a specific moment of transition that separates exploration from construction.

Emma picked up a marker and walked to the whiteboard. "Let me show you how this actually works."
