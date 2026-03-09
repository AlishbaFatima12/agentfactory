---
title: "Chapter 30: The PRIMM-AI+ Framework"
sidebar_position: 0
description: "Learn the PRIMM-AI+ teaching framework -- Predict, Run, Investigate, Modify, Make with AI -- the research-validated method that teaches you to read and understand code before you write it, with AI-free checkpoints, mastery gates, and confidence scoring."
keywords: ["PRIMM", "PRIMM-AI+", "Predict Run Investigate Modify Make", "code comprehension", "AI-assisted learning", "Sue Sentance", "Jane Waite", "reading code", "teaching framework", "confidence scoring", "mastery gates"]
---

# Chapter 30: The PRIMM-AI+ Framework

> *"The PRIMM approach recognises that starting with existing code and being able to explain what it does gives novice programmers the confidence to write their own programs."*
> — Sentance, Waite, and Kallia (2019)

## Why This Chapter Exists

James stares at fifty lines of AI-generated Python on his screen. Every line is correct. Every function works. He understands none of it. His mentor Emma points at line twelve. "What does that line do?" James cannot answer. He has working code and zero knowledge.

You are about to learn Python programming. But you are learning it in 2026, not 2016. That distinction matters more than any syntax rule this book will ever teach you. An AI coding assistant can write a working Python function in seconds. If the goal were simply to *produce code*, you could skip this Part entirely. But producing code was never the real goal. The real goal is **understanding** — the ability to read a program and know what it will do, to look at AI-generated code and judge whether it is correct, to take a working function and adapt it for a new purpose.

This matters even more in the context of this book. You are learning to build AI agents — systems that generate code autonomously, chain tools together, and execute multi-step workflows without human intervention. When an agent produces fifty lines of Python to process data, query an API, or orchestrate a pipeline, **someone must read that code and decide whether it is correct, safe, and does what was intended.** That someone is you. Code comprehension is not a nice-to-have skill for agent builders. It is the skill that separates someone who deploys agents from someone who deploys liabilities.

This chapter introduces the teaching framework that governs all programming instruction in this book: **PRIMM-AI+**. In one sentence: PRIMM-AI+ is PRIMM adapted for the age of AI coding assistants, with structural safeguards that ensure AI helps rather than replaces your learning. The full name unpacks to Predict, Run, Investigate, Modify, Make *with AI* — enhanced with AI-free checkpoints, mastery gates, confidence scoring, and a verification ladder.

Built on research-tested methods from computing education (493 students, 13 schools), PRIMM-AI+ teaches you to read and understand code before you ever try to write it — and integrates AI coding assistants as learning partners at every stage with clear boundaries. Here is what the process looks like in practice: you see a complete program, predict what it will do before running it, run it and compare the output to your prediction, investigate how it works by tracing variables and asking questions, modify it to change its behavior, and finally build something new from a specification you write. **Every programming chapter from Chapter 33 onward follows this same rhythm.**

## The Framework at a Glance

Before you dive into the lessons, here is the complete picture in one table. You do not need to understand every term yet — each one is explained across the four lessons. This is your map. Return to it anytime you want to see where you are.

| Stage | What You Do | What AI Does | Key Safeguard |
|-------|------------|-------------|---------------|
| **Predict** | Read the code, write your prediction and confidence score | Generates code samples — but must not explain them | AI-free: no AI assistance allowed |
| **Run** | Compare your prediction to the actual output | Executes the program and shows raw output | Gap recorded: you note where prediction matched or diverged |
| **Investigate** | Write your own explanation first, then ask targeted questions | Answers questions and generates trace tables — only after your attempt | Artifact required: trace table, explanation, or failure note |
| **Modify** | Change the code yourself before asking for help | Provides hints — not solutions | Your hands produce the change, AI evaluates afterward |
| **Make** | Write a specification first, then build from scratch | Reviews your spec and code — but must not write the solution | Spec-first: written specification exists before any code |

**The progression is deliberate:** you understand before you change, and you change before you create. Every programming chapter from Chapter 33 onward follows this same rhythm.

---

## Learning Outcomes

By the end of this chapter, you will be able to:

- Explain the five stages of PRIMM and why they are sequenced in that order
- Describe the research basis for PRIMM (493 students, 13 schools, tested and validated)
- Walk through a complete PRIMM-AI+ lesson cycle with a real Python program
- Describe how AI coding assistants integrate into each PRIMM stage with clear boundaries and AI-free checkpoints
- State the five PRIMM-AI+ rules and explain why each matters in the AI era
- Map each PRIMM-AI+ stage to its professional workflow equivalent
- Articulate the verification ladder from learning predictions to production observability
- Identify the four teaching methods embedded within PRIMM-AI+ and where each fits in the learning sequence

## Lessons

| # | Lesson | Duration | Key Focus |
|---|--------|----------|-----------|
| 1 | [The PRIMM Framework](the-primm-framework) | 20 min | The five stages demonstrated with real Python code, the research basis, and why comprehension is the bottleneck skill of 2026 |
| 2 | [PRIMM-AI+: AI as Your Learning Partner](primm-ai-plus-ai-as-your-learning-partner) | 15 min | How AI integrates into each stage — AI roles, permissions, checkpoints, mastery gates, trace artifacts, a complete walkthrough, and the five rules |
| 3 | [The PRIMM-AI+ Toolkit](the-primm-ai-plus-toolkit) | 15 min | Self-assessment and growth tools — verification ladder, confidence scoring, error taxonomy, professional practice mapping, and chapter-end rubric |
| 4 | [The Complete Teaching and Learning System](the-complete-teaching-system) | 20 min | Four embedded teaching methods, classroom vs. solo mode, five-step lesson architecture, and how every chapter follows PRIMM-AI+ |

## Prerequisites

- **Parts 1-3 completed** — You will need the AI prompting skills from Part 1 because each PRIMM stage involves structured AI interaction with specific boundaries. The file processing and version control concepts from Parts 2-3 provide the practical context for the code examples.
- **[Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development) understood** — The Make stage of PRIMM-AI+ uses Spec-Driven Development directly: you write a specification before writing code. Chapter 5 teaches that workflow.

## About the Code in This Chapter

This chapter contains Python code examples. **You are not expected to understand every line yet.** The code is here to show you what the PRIMM process looks like in action — so that when you encounter your first Python lesson in Chapter 33, the method is already familiar. Focus on the *process* (predict, run, investigate), not the syntax.

## What This Chapter Is Not

This chapter teaches you *how you will learn*. The next chapter (Chapter 31: Ten Axioms) teaches *what professional practice looks like*. Together they form the complete system: your learning method and the professional standards you will apply it to.
