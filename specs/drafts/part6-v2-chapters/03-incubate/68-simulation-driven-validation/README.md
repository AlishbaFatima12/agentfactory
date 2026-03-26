---
sidebar_position: 68
title: "Chapter 68: Simulation-Driven Validation"
description: "Why agent skills must be tested in conversation before investing in production infrastructure, and how to run a structured simulation protocol."
---

# Chapter 68: Simulation-Driven Validation

In Chapter 67, you transformed your HireFlow concept paper into four agent skills: Job Spec Writer, Resume Screener, Interview Question Generator, and Candidate Summarizer. Each skill encodes domain knowledge you validated through the Domain Mastery Gate (Chapter 66). Each one reads well. Each one looks ready.

But looking ready and being ready are different problems.

This chapter teaches you how to **test agent skills in conversation before investing in production code**. You will learn the simulation protocol, build a scenario bank, and run each HireFlow skill against inputs designed to expose weaknesses. By the end, you will have simulation logs that prove your skills work, or tell you exactly what to fix.

This is the last step of the Incubate phase (Chapter 63, Phase 2). When your simulations pass, you are ready for MCP (Chapter 69).

## What You Will Learn

- Why writing a skill and testing a skill are fundamentally different activities
- The three-step **simulation protocol**: design scenarios, run simulations, evaluate outputs
- How to build a **scenario bank** covering happy paths, edge cases, and adversarial inputs
- What **validation criteria** look like for each HireFlow FTE
- How simulation results connect to the **crystallization** concept from Chapter 63's Agent Maturity Model

## Prerequisites

- **Chapter 67 complete**: You have four written agent skills (Job Spec Writer, Resume Screener, Interview Question Generator, Candidate Summarizer)
- **Chapter 64 complete**: You understand the HireFlow Blueprint, including success criteria for each FTE
- **Chapter 63 complete**: You understand the Five-Phase Map, crystallization, and the 9.5+ threshold

## Lessons

| #   | Lesson                      | Focus                                                                  |
| --- | --------------------------- | ---------------------------------------------------------------------- |
| 1   | James Ships Without Testing | Opening Scenario: why untested skills are hypotheses, not intelligence |
| 2   | The Simulation Protocol     | Guided Discovery: the 3-step protocol and first simulation attempt     |
| 3   | Building a Scenario Bank    | Concept Crystallization: scenario categories, archetypes, criteria     |
| 4   | Simulate the HireFlow FTEs  | Applied Exercise: run all 4 skills through the scenario bank           |
| 5   | Reflection and Chapter Quiz | From validated skills to MCP servers + 10 MCQs                         |

## Key Terms Introduced

| Term                             | Definition                                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Simulation-driven validation** | Testing agent skills in conversation before building production infrastructure around them          |
| **Simulation protocol**          | A three-step method: design scenarios, run the skill, evaluate the output                           |
| **Scenario bank**                | A collection of test inputs organized by category: happy path, edge case, and adversarial           |
| **Validation criteria**          | Specific, measurable standards an agent skill's output must meet (format, completeness, accuracy)   |
| **Simulation log**               | A structured record of each simulation run: input, expected output, actual output, pass/fail, notes |
| **Happy path scenario**          | A normal input that should produce a clean, correct result                                          |
| **Edge case scenario**           | A boundary input that tests skill robustness: incomplete data, unusual formats, conflicting signals |
| **Adversarial scenario**         | An input designed to break the skill: prompt injection, missing fields, contradictory requirements  |
