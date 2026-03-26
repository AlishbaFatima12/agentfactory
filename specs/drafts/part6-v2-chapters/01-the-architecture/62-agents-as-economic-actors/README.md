---
sidebar_position: 62
title: "Chapter 62: Agents as Economic Actors"
description: "Why AI agents are becoming market participants, and why the infrastructure you build now must be ready for economic participation."
---

# Chapter 62: Agents as Economic Actors

In Chapter 61, you learned what an Agent Factory is and how the Two-Layered Model governs it. You met HireFlow's four Digital FTEs and saw why chatbot armies fail. That chapter answered the question: _who governs the factory?_

This chapter asks a different question: _what happens when agents can acquire their own resources?_

Today, AI agents consume what humans allocate: API credits, compute time, storage. They do not make economic decisions. That is changing. This chapter explores the shift from agent-as-tool to **agent-as-economic-actor**, and why the factories you build in Part 6 need infrastructure that most developers skip.

## What You Will Learn

- Why agents are becoming market participants, not tools with API keys
- The difference between a factory that consumes and one that self-provisions
- The core design principle: **agents need budgets, not permissions**
- What resource budgets, spending envelopes, and audit trails look like in practice
- Where HireFlow's pipeline has economic participation points
- Why designing for economic participation now prevents a rewrite later

## Prerequisites

- **Chapter 61 complete**: You understand the Agent Factory, the Two-Layered Model, and the Four Digital FTEs of HireFlow

## Lessons

| #   | Lesson                             | Focus                                                            |
| --- | ---------------------------------- | ---------------------------------------------------------------- |
| 1   | Agents That Buy Things             | Opening Scenario: the moment agents crossed from tool to buyer   |
| 2   | Self-Provisioning Factories        | Guided Discovery: consuming vs. dynamically sourcing resources   |
| 3   | Budgets, Not Permissions           | Concept Crystallization: the design principle and its components |
| 4   | Economic Participation in HireFlow | Applied Exercise: mapping participation points in HireFlow       |
| 5   | Reflection and Chapter Quiz        | Looking ahead + 10 multiple-choice questions                     |

## Key Terms Introduced

| Term                             | Definition                                                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Economic actor**               | An entity that evaluates costs, acquires resources, and participates in market transactions          |
| **Self-provisioning**            | A factory that dynamically sources its own resources rather than consuming only what humans allocate |
| **Resource budget**              | Tokens + compute + API calls + storage, tracked per pipeline run                                     |
| **Spending envelope**            | A ceiling that pauses the pipeline when reached, not a suggestion                                    |
| **Audit trail**                  | Every resource acquisition logged with cost, purpose, and authorizing policy                         |
| **Outcome contract**             | An agreement specifying what an agent must deliver, not how it must do the work                      |
| **Trust infrastructure**         | Payment rails, liability frameworks, and verification systems that enable economic participation     |
| **Economic participation point** | A location in a pipeline where an agent could autonomously acquire a resource                        |
