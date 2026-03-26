---
sidebar_position: 3
title: "The Five-Phase Map"
description: "The complete development journey from idea to production: Explore, Incubate, Build Specialist, Cloud Deploy, and Scale."
chapter: 63
lesson: 3
duration_minutes: 20
keywords:
  [
    five-phase map,
    explore,
    incubate,
    build specialist,
    cloud deploy,
    scale,
    10-80-10,
    agent maturity,
    quality threshold,
  ]

skills:
  - name: "Agent Factory Phase Identification"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can name all five phases, state what each produces, and identify which phase a given project is in"
  - name: "Maturity Assessment"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can explain the purpose and deliverable of each phase in the Five-Phase Map"

learning_objectives:
  - objective: "Name all five phases of the Agent Factory Maturity Model and state the deliverable of each"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Chapter quiz direct recall"
  - objective: "Explain the 10-80-10 rule and the 9.5+ quality threshold"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Chapter quiz and applied exercise"
  - objective: "Trace the build chain from concept paper to running factory"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Applied exercise in Lesson 4"

cognitive_load:
  new_concepts: 4
  assessment: "Medium-high. Five phases introduced with four new sub-concepts (10-80-10 rule, concept paper, mastery gate, build checklist). Mitigated by table format, short descriptions, and connection to the Incubator/Specialist framework from Lesson 2."

differentiation:
  extension_for_advanced: "For each phase, identify the biggest risk of getting stuck. What would cause a project to stall in Explore? In Incubate? What does 'stuck' look like at each phase?"
  remedial_for_struggling: "Focus on the summary table. For each phase, memorize: the name, what the general agent does (its role), and what you have when the phase is complete."
---

# The Five-Phase Map

Emma drew five boxes on the whiteboard, arranged left to right. She wrote a number in each: 1, 2, 3, 4, 5.

"The journey from idea to production has five phases. Each phase produces a specific deliverable. Each deliverable feeds the next phase. You cannot skip a phase for the same reason you cannot build a roof before laying the foundation: the later phases depend on what the earlier phases produce."

She wrote a name in each box.

## Phase 1: Explore

Emma tapped the first box. "This is where you start. You have an idea: 'AI could help with hiring.' You do not have specifications, data models, or validated requirements. Your job in Phase 1 is to explore the domain using general agents."

"Like Claude or GPT-4?"

"Like any frontier LLM. You use the **10-80-10 rule**: you write the first 10% of a concept paper yourself (the core idea, the domain scope, the key constraints). You give the middle 80% to the AI to draft (detailed analysis, workflow breakdowns, edge case identification). You write the final 10% yourself (conclusions, decisions, tradeoffs you accept)."

James thought about this. "So I'm not outsourcing the thinking. I'm outsourcing the bulk research while keeping the framing and decisions."

"Yes. The 10-80-10 rule prevents two failure modes. Writing 100% yourself is slow and misses patterns the AI would catch. Writing 0% yourself means you accept the AI's framing without questioning it. The 10% bookends force you to own the direction."

"What comes out of this phase?"

"A **concept paper**. For HireFlow, that paper covers the full recruitment workflow: job intake, candidate screening, question generation, and summarization. It includes domain terminology, data schemas, edge cases, and quality criteria. It is evaluated by three frontier LLMs against a rubric. When all three score it 9.5 or above, the paper has crystallized."

"And if it scores 8.7?"

"You iterate. You find the gaps. You revise. You resubmit. The threshold is not negotiable because everything after this phase builds on the paper's quality. An 8.7 paper has gaps that will show up as defects in Phase 3."

:::tip Quick Recall
In Chapter 62, you learned about spending envelopes: budget ceilings that pause a pipeline when reached. The 9.5+ threshold works the same way. It is a gate that pauses the process until quality is sufficient. Both are examples of a design principle you will see throughout Part 6: **ceilings protect you from your own impatience.**
:::

## Phase 2: Incubate

Emma moved to the second box. "Once the concept paper crosses 9.5, you enter Phase 2. The general agent shifts from Director to Builder. But it does not build the full factory yet. It builds the intelligence layer: **agent skills**."

"What's an agent skill?"

"A specification of what a specialist agent knows and can do. For the Resume Screener, the skill defines: scoring rubric fields, career gap evaluation rules, certification weighting, and match threshold logic. The skill is not code. It is structured domain knowledge that the agent will use to make decisions."

"Like a job description for the agent."

"Exactly like a job description. You are hiring a Digital FTE. The agent skill is the job description: what it must do, how it will be evaluated, and what inputs it receives."

Phase 2 has three stages:

**Stage 1: Skill Extraction.** Take the concept paper and extract four agent skills, one per Digital FTE. Each skill is a Markdown file with specific fields: role name, responsibilities, inputs, outputs, evaluation criteria, and known edge cases.

**Stage 2: Simulation.** Test each skill by giving it to a general agent and asking it to role-play the specialist. "You are the Resume Screener. Here is a CV and a job description. Produce a scored profile." The output reveals whether the skill is specific enough to produce consistent results.

**Stage 3: MCP Servers.** Build the tools that the specialist agents will use. Parse CVs, generate questions, query databases. These are the hands of the factory: the mechanisms through which agents interact with data and systems.

"How do you know when Phase 2 is done?"

"You have four validated skills and the MCP servers they need. 'Validated' means you ran simulations, evaluated the outputs, and confirmed that the skills produce consistent, domain-correct results. Not perfect results. Consistent, evaluable, improvable results."

## Phase 3: Build Specialist

"Phase 3 is where you build the actual Digital FTEs. Each one uses an agent SDK (Claude Agents SDK or OpenAI Apps SDK), runs on a local agent runtime, connects to databases and vector stores, and exposes its capabilities through an API."

"This is the big build phase."

"This is the longest phase. In Part 6, it covers Chapters 72 through 89: agent SDKs, databases, vector stores, four FTE implementations, API exposure, orchestration, memory, security, testing, and evaluation. Every chapter builds on the previous one."

James counted on his fingers. "Eighteen chapters."

"Eighteen chapters, one factory. By the end, HireFlow runs locally on your machine: four FTEs coordinating through an orchestrator, scoring candidates, generating questions, producing hiring briefs."

"What about cloud and production?"

## Phase 4: Cloud Deploy

"Phase 4 takes the working local factory and deploys it to cloud infrastructure. Containers, networking, monitoring, CI/CD pipelines. This is Part 7 of the book."

## Phase 5: Scale

"Phase 5 adds multi-tenancy, load balancing, production monitoring, and operational procedures. Also Part 7."

James looked at the five boxes. "So Part 6 covers Phases 1 through 3, and Part 7 covers Phases 4 and 5?"

"Correct. And within Part 6, the four sections map directly to the first three phases:"

| Part 6 Section             | Phase             | Chapters | What You Build                      |
| -------------------------- | ----------------- | -------- | ----------------------------------- |
| I: The Architecture (here) | Preparation       | 61-64    | Conceptual foundation and blueprint |
| II: Explore                | Phase 1: Explore  | 65-66    | Concept paper + domain mastery      |
| III: Incubate              | Phase 2: Incubate | 67-71    | Skills, simulations, MCP servers    |
| IV: Build Specialist       | Phase 3: Build    | 72-89    | FTEs, APIs, orchestration, evals    |

## The Build Chain

Emma drew arrows connecting the five boxes. "Every phase produces something the next phase consumes. Miss a phase, and the chain breaks."

| Phase               | Deliverable                    | Fed Into                      |
| ------------------- | ------------------------------ | ----------------------------- |
| 1. Explore          | Validated concept paper (9.5+) | Phase 2 skill extraction      |
| 2. Incubate         | 4 agent skills + MCP servers   | Phase 3 FTE construction      |
| 3. Build Specialist | Working local factory          | Phase 4 cloud deployment      |
| 4. Cloud Deploy     | Cloud-deployed factory         | Phase 5 production operations |
| 5. Scale            | Production factory at scale    | Business operations           |

"In Lesson 1, you tried to build Phase 3 output without Phase 1 or Phase 2 inputs," Emma said. "The concept paper did not exist. The agent skills did not exist. The MCP tools did not exist. You asked a general agent to produce a specialist with no domain knowledge, no validated requirements, and no tested tools."

"And got a keyword matcher."

"A keyword matcher that runs. The most dangerous kind of failure: the kind that looks like success."

## General Agents Build Custom Agents

James had been staring at the whiteboard. He looked up.

"I keep coming back to something. The general agent, Claude Code, it plays both roles. It's the Incubator in Phases 1-2, and it's the Builder in Phase 3. But the thing it builds is not another copy of itself."

"Go on."

"It builds something smaller. More focused. The Resume Screener does not need to write poetry or explain quantum physics. It needs to score candidates against a rubric. So you use the expensive, broad, general agent to construct a cheap, narrow, specialist agent."

Emma set down her marker. "That is the key insight of the entire Maturity Model. **General agents build custom agents.** The general agent is the construction crew. The specialist agents are the workforce. You do not deploy the construction crew to run the factory floor. You deploy the specialists it built."

"Wait, so basically... the whole point of Phases 1 and 2 is to extract the domain knowledge from the general agent's broad capabilities and crystallize it into narrow, reliable specifications?"

"Crystallize. Yes. That word again."

"The general agent is a solution. The concept paper is the dissolved substance. Crystallization happens when you add enough validation pressure (the 9.5 threshold) that the solution solidifies into specific, actionable skills."

Emma paused. "That is actually a better version of the metaphor than I had. I was thinking of it as temperature-driven. Your version, with validation pressure, is more accurate to what actually happens."

"Don't sound so surprised."

"I'm not surprised. I'm noting that you just demonstrated why Phase 1 exists: your operations background gave you a metaphor that improves the framework. Domain expertise is not optional. It is the raw material."

## Summary

The **Agent Maturity Model** maps the development journey through five phases:

| Phase               | General Agent Role | What Happens                                          | Deliverable                | Gate                     |
| ------------------- | ------------------ | ----------------------------------------------------- | -------------------------- | ------------------------ |
| 1. Explore          | Director           | Domain exploration, concept paper writing             | Validated concept paper    | 9.5+ quality threshold   |
| 2. Incubate         | Builder (early)    | Skill extraction, simulation, MCP server construction | Agent skills + MCP servers | Simulation consistency   |
| 3. Build Specialist | Builder (full)     | FTE construction, API exposure, testing, evaluation   | Working local factory      | Eval pass rates          |
| 4. Cloud Deploy     | Builder (infra)    | Containerization, networking, CI/CD                   | Cloud-deployed factory     | Deployment health checks |
| 5. Scale            | Builder (ops)      | Multi-tenancy, monitoring, load balancing             | Production factory         | SLA compliance           |

**Key insight:** General agents BUILD custom agents. The Incubator phase produces domain knowledge. The Builder phase constructs specialists from that knowledge. The specialists run the factory. The general agent never appears in production.

**Crystallization** is the phase transition triggered by the 9.5+ quality threshold. Before crystallization, everything is fluid exploration. After crystallization, the domain knowledge is structured enough to build from.

In the next lesson, you will practice identifying phases in real scenarios.
