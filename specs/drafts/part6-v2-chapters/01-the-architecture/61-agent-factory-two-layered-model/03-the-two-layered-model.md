---
sidebar_position: 3
title: "The Two-Layered Model"
description: "How the Factory Layer and Edge Layer work together to create a complete agent architecture."
chapter: 61
lesson: 3
duration_minutes: 20
keywords:
  [
    two-layered model,
    factory layer,
    edge layer,
    Identic AI,
    enterprise agents,
    personal agents,
  ]

skills:
  - name: "Two-Layered Architecture"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can explain the Factory Layer and Edge Layer and why both are necessary"
  - name: "Layer Interaction Analysis"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can identify which layer a given agent belongs to and explain why"

learning_objectives:
  - objective: "Define the Factory Layer and Edge Layer with their distinct characteristics"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Layer comparison table analysis"
  - objective: "Explain why neither layer works without the other"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Scenario analysis in guided discovery"

cognitive_load:
  new_concepts: 4
  assessment: "Moderate-high. Four new terms (Two-Layered Model, Factory Layer, Edge Layer, Identic AI). Visual diagram and table help manage load."

differentiation:
  extension_for_advanced: "Research how cloud computing's IaaS/PaaS/SaaS layers parallel the Factory/Edge distinction. Where does the analogy hold? Where does it break?"
  remedial_for_struggling: "Focus on the company/employee analogy. Factory Layer is the company. Edge Layer is the individual employee's personal workspace."
---

# The Two-Layered Model

Emma drew two horizontal lines on the whiteboard, dividing it into an upper section and a lower section. She wrote "Factory Layer" in the upper section and "Edge Layer" in the lower one.

"Two layers," she said. "Every agent architecture eventually lands here."

James studied the diagram. "Factory Layer is HireFlow? The enterprise system?"

"The Factory Layer is any system where AI workers operate under organizational governance. HireFlow's Resume Screener, Job Spec Writer, Interview Generator, Candidate Summarizer: those are Factory Layer agents. The company owns them. The company defines their contracts. The company verifies their output."

"And the Edge Layer?"

"Your personal agents. Your Claude Code setup with your skills, your memory, your preferences. Nobody governs those except you."

## Factory Layer: Enterprise AI Workers

The **Factory Layer** is where organizations deploy AI workers to produce business outcomes. Every agent in this layer shares five characteristics:

| Characteristic               | What It Means                             | HireFlow Example                                           |
| ---------------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| **Organizational ownership** | The company owns and controls the agent   | HireFlow owns the Resume Screener                          |
| **Defined contracts**        | Inputs and outputs are formally specified | Screener produces `{ score: number, strengths: string[] }` |
| **Verification gates**       | Output is checked before moving forward   | Scores below threshold trigger human review                |
| **Audit trails**             | Every action is logged and traceable      | Every screening decision recorded with reasoning           |
| **Governed access**          | Agents can only access approved resources | Screener reads CVs but cannot access salary data           |

"Think of it this way," Emma said. "A Factory Layer agent is an employee. It has a job description, a manager, performance reviews, and access only to the systems it needs for its role. It does not get to wander around the building reading files from every department."

James thought about his old company. "My manager defined my responsibilities. HR controlled my building access. IT controlled my system access. If I needed data from another department, I went through a formal request."

"Same pattern. Different workforce."

## Edge Layer: Personal AI Agents

The **Edge Layer** is where individuals operate their own AI agents for personal productivity and amplification.

"The Edge Layer is not new to you," Emma said. "You have been building it since Part 1."

James blinked. "I have?"

"Your Claude Code configuration. Your `.claude/` directory with custom skills. Your CLAUDE.md with project-specific instructions. Your personal workflow for generating code, running tests, reviewing specifications. That entire setup is an Edge Layer agent."

"Wait, so basically..." James paused. "My personal Claude Code is already an Edge Layer agent?"

"It adapts to you specifically. It knows your preferences. It remembers your project context. No organization governs it. You govern it."

| Characteristic           | What It Means                           | Your Claude Code                           |
| ------------------------ | --------------------------------------- | ------------------------------------------ |
| **Individual ownership** | You own and control it                  | Your `.claude/` directory, your skills     |
| **Personal adaptation**  | It learns your preferences and patterns | Your CLAUDE.md, your memory files          |
| **Self-governance**      | You decide what it can and cannot do    | Your permission settings, your hooks       |
| **No formal contracts**  | Outputs serve you, not an organization  | Your code, your specifications, your notes |
| **Flexible access**      | You grant access based on your judgment | Your file system, your tools, your APIs    |

Don Tapscott's research on personal AI agents calls this the **Identic AI** concept: AI that represents your individual interests, amplifies your capabilities, and operates under your personal governance. The Edge Layer is where Identic AI lives.

## Why Neither Layer Works Alone

Emma added a double-headed arrow between the two layers on the whiteboard.

"Neither layer is complete by itself," she said.

James leaned forward. "Why not? If the Factory Layer has governance and contracts, why do I need personal agents?"

"Build HireFlow with only the Factory Layer. Four enterprise agents, fully governed, producing reliable output. Who uses it?"

"The hiring managers."

"Through what interface?"

"A dashboard. Or an API."

"So the hiring manager reads a candidate brief on a dashboard. They want to ask a follow-up question: 'What is this candidate's experience with distributed systems specifically?' Who handles that?"

"The Candidate Summarizer?"

"The Summarizer produced a static brief. It is done. It does not have a conversation. It produced its contracted output and moved on."

James sat back. "So the hiring manager needs their own agent. One that can take the factory's output and have a conversation about it."

"That is the Edge Layer. A personal agent that sits between the human and the factory. It understands the human's questions, retrieves factory output, and presents it in the way that specific human finds useful."

Emma wrote on the whiteboard:

```
Edge Layer (personal)     →  "Show me candidates strong in distributed systems"
        ↕
Factory Layer (enterprise) →  Resume Screener, Summarizer, Interview Generator
```

"Now try the other direction," she said. "Only the Edge Layer. No factory. Personal agents for everyone, no shared infrastructure."

"Everyone builds their own hiring pipeline?"

"Three hiring managers. Each with their own personal agent. Each agent screens resumes differently, uses different criteria, stores results in different formats."

"That is the spreadsheet problem again." James almost laughed. "Four departments, four spreadsheets, Monday morning reconciliation."

"Exactly. The Factory Layer provides consistency, contracts, and governance across the organization. The Edge Layer provides personalization, flexibility, and human-AI interaction for individuals. Neither alone solves the full problem."

## The Two-Layered Model

The **Two-Layered Model** is the architectural principle that agent systems need both layers working together.

| Dimension        | Factory Layer                            | Edge Layer                                |
| ---------------- | ---------------------------------------- | ----------------------------------------- |
| **Owner**        | Organization                             | Individual                                |
| **Governance**   | Contracts, verification, audits          | Personal preferences, self-governance     |
| **Optimization** | Consistency, reliability, scale          | Flexibility, personalization, speed       |
| **Failure mode** | Rigid, slow to adapt to individual needs | Inconsistent, no organizational standards |
| **Data flow**    | Structured, contracted, verified         | Freeform, personal, ad hoc                |
| **Example**      | HireFlow's Resume Screener               | Your Claude Code with custom skills       |

"Here is the insight," Emma said. "The Factory Layer is infrastructure. It does the heavy, repeatable work that needs to be consistent across the organization. The Edge Layer is the interface between that infrastructure and the humans who use it."

James thought about it. "So the Factory Layer is like the company's ERP system, and the Edge Layer is like each employee's personal dashboard."

Emma considered this. "That is close. But the Edge Layer is smarter than a dashboard. It interprets. It adapts. It has a conversation. A dashboard shows you data. An Edge Layer agent helps you think about data."

:::tip Key Insight
The Two-Layered Model is not about choosing between enterprise AI and personal AI. It is about recognizing that both are necessary and designing systems where they reinforce each other. Factory Layer provides reliability. Edge Layer provides humanity.
:::

## Where Part 6 Fits

In Part 6, you will build the Factory Layer. HireFlow's four Digital FTEs, their contracts, their verification gates, their orchestration, and their governance. That is 29 chapters of work.

The Edge Layer already exists in your Claude Code setup. You have been building it since Part 1. In Part 6, the Edge Layer becomes the tool you use to build the Factory Layer: Claude Code (your personal agent) constructs HireFlow (the enterprise factory).

The builder is an Edge Layer agent. The product is a Factory Layer system. This recursion is not accidental. It is the central insight of the Agent Factory paradigm.
