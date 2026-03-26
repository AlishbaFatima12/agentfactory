---
sidebar_position: 4
title: "Spot the Phase"
description: "Six real-world scenarios where you identify the phase, the general agent's role, and the maturity level."
chapter: 63
lesson: 4
duration_minutes: 20
keywords:
  [
    applied exercise,
    phase identification,
    maturity assessment,
    scenario analysis,
    agent roles,
  ]

skills:
  - name: "Phase Identification"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can correctly identify the phase, agent role, and maturity level of a project from a scenario description"

learning_objectives:
  - objective: "Identify the current phase of an agent factory project from a scenario description"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Correct phase identification for at least 4 of 6 scenarios"
  - objective: "Determine the general agent's role (Director, Builder, or absent) in each scenario"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Correct role identification in scenarios"
  - objective: "Identify projects that have skipped phases and predict the consequences"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Correct identification of skipped phases in scenarios 3 and 5"

cognitive_load:
  new_concepts: 0
  assessment: "Low. No new concepts introduced. This lesson applies the Five-Phase Map from Lesson 3 to six concrete scenarios. All concepts are review."

differentiation:
  extension_for_advanced: "For each scenario, propose the specific next action the team should take. What deliverable do they need to produce before moving to the next phase?"
  remedial_for_struggling: "Before attempting the scenarios, review the summary table from Lesson 3. For each scenario, match the description to a single row in the table. The deliverable column will confirm your answer."
---

# Spot the Phase

In this exercise, you will read six scenarios describing agent factory projects at different stages of development. For each scenario, identify:

1. **Phase:** Which of the five phases is this project currently in?
2. **Agent role:** What role is the general agent playing? (Director, Builder, or not present)
3. **Maturity level:** Is the project on track, or has it skipped a phase?

Write your answers before reading the analysis. The act of committing to an answer is what makes the exercise work.

---

## Scenario 1: The Legal Document Review Factory

A team is building an AI system that reviews commercial contracts for compliance risks. They have spent two weeks using Claude and GPT-4 to explore the domain. Their concept paper covers contract types (NDAs, SLAs, MSAs), common compliance pitfalls, jurisdiction-specific requirements, and risk scoring frameworks. Three evaluators scored the paper: 9.2, 9.4, and 9.1.

**Your answer:**

- Phase: \_\_\_
- Agent role: \_\_\_
- On track or skipped? \_\_\_

:::tip Analysis
**Phase: 1 (Explore).** The team is still in the Explore phase. The concept paper exists but has not crossed the 9.5 threshold. Average score: 9.23.

**Agent role: Director.** The general agents (Claude, GPT-4) are helping the team explore the domain and draft the concept paper. They are not building specialists yet.

**On track.** The team has not skipped any phase. They need to iterate on the concept paper until it crosses 9.5. The scores suggest they are close: the gaps are likely in one or two specific areas (perhaps jurisdiction-specific requirements are underdeveloped, or the risk scoring framework lacks edge cases).
:::

---

## Scenario 2: The Customer Support Routing Factory

A startup has a concept paper scored at 9.7 by three evaluators. They have extracted four agent skills: Ticket Classifier, Priority Scorer, Response Drafter, and Escalation Decider. They tested the Ticket Classifier skill by asking Claude to role-play the specialist with 50 sample tickets. Results were consistent: 46 correct classifications, 3 edge cases flagged for review, 1 incorrect. They are now building MCP servers for the ticket database and the knowledge base.

**Your answer:**

- Phase: \_\_\_
- Agent role: \_\_\_
- On track or skipped? \_\_\_

:::tip Analysis
**Phase: 2 (Incubate).** The concept paper has crystallized (9.7 is above 9.5). Skills have been extracted and are being validated through simulation. MCP server construction is underway.

**Agent role: Builder (early).** The general agent is constructing the MCP servers and running simulations. It has transitioned from Director (concept paper work) to Builder (constructing components).

**On track.** The team followed the phases in order. Phase 1 produced a validated concept paper. Phase 2 is progressing through skill extraction, simulation, and tool construction. The simulation results (92% accuracy) are strong enough to continue.
:::

---

## Scenario 3: The Inventory Forecasting Agent

A logistics company asked their ML team to "build an AI agent that predicts inventory needs." The team spent one weekend using Claude Code to generate a forecasting agent. The agent uses a linear regression model trained on 12 months of historical sales data. It produces forecasts. The team deployed it to a staging environment on Monday. By Wednesday, the purchasing department reported that the forecasts were ignoring seasonal patterns, promotional events, and supplier lead time constraints.

**Your answer:**

- Phase: \_\_\_
- Agent role: \_\_\_
- On track or skipped? \_\_\_

:::tip Analysis
**Phase: The team jumped directly to Phase 3 (Build Specialist) without completing Phases 1 or 2.**

**Agent role: Misused as Builder without Incubator work.** The general agent (Claude Code) was asked to build a specialist with no concept paper, no validated domain understanding, and no agent skills. It produced code that runs but lacks domain knowledge, exactly like James's resume screener in Lesson 1.

**Skipped phases.** The consequences are visible: seasonal patterns, promotional events, and supplier lead times are domain-specific requirements that a concept paper and agent skills would have captured. The team's forecasting agent is a domain-ignorant agent: syntactically correct, semantically empty.

The fix is not to patch the agent. The fix is to go back to Phase 1: explore the inventory domain, write a concept paper that covers seasonal adjustment, promotional impact modeling, and lead time constraints, validate it to 9.5+, extract skills, and then rebuild.
:::

---

## Scenario 4: The Healthcare Appointment Scheduler

A hospital IT team has completed their concept paper (scored 9.6), extracted three agent skills (Triage Classifier, Slot Matcher, Patient Communicator), validated all three through simulation with 200 test cases each, and built MCP servers for the appointment database and the patient records system. They are now implementing the Triage Classifier as a Digital FTE using the Claude Agents SDK, with a PostgreSQL database for appointment storage and a vector store for patient history search.

**Your answer:**

- Phase: \_\_\_
- Agent role: \_\_\_
- On track or skipped? \_\_\_

:::tip Analysis
**Phase: 3 (Build Specialist).** The team has completed Phase 1 (concept paper at 9.6) and Phase 2 (three validated skills, tested simulations, MCP servers built). They are now constructing Digital FTEs.

**Agent role: Builder (full).** The general agent is building production-grade specialists with databases, APIs, and SDKs.

**On track.** The team followed all phases. Their Phase 2 was thorough: 200 test cases per skill is well above the minimum for simulation validation. They are exactly where they should be.
:::

---

## Scenario 5: The Marketing Content Generator

A marketing agency built a "content factory" by chaining together four Claude API calls: Audience Analyzer, Topic Generator, Draft Writer, and SEO Optimizer. Each API call uses a different system prompt. There is no concept paper, no agent skills, and no simulation testing. The chain produces blog posts. The posts are grammatically correct but tonally inconsistent, factually unchecked, and ignore the agency's brand guidelines.

**Your answer:**

- Phase: \_\_\_
- Agent role: \_\_\_
- On track or skipped? \_\_\_

:::tip Analysis
**Phase: The team thinks they are in Phase 3, but they are actually in Phase 0: they have not started the maturity journey at all.**

**Agent role: No defined role.** The general agent is being used as a direct content generator, not as a Director or Builder. There is no factory construction happening, only prompt chaining.

**Skipped all phases.** No concept paper means no validated understanding of the content domain (brand guidelines, tone requirements, fact-checking standards, audience segmentation). No agent skills means no specifications for what each "agent" should do. No simulation means no validation that the chain produces consistent, correct output.

The result is four system prompts pretending to be a factory. This is the chatbot army from Chapter 61, Lesson 2, with API calls instead of chatbot windows.
:::

---

## Scenario 6: The Financial Audit Assistant

An accounting firm completed their concept paper (scored 9.8) and extracted five agent skills. During simulation testing, the Statement Analyzer skill produced inconsistent results: when given the same financial statement twice, it returned different risk assessments 30% of the time. The team is debating whether to proceed to Phase 3 or go back and refine the skill.

**Your answer:**

- Phase: \_\_\_
- Agent role: \_\_\_
- On track or skipped? \_\_\_

:::tip Analysis
**Phase: 2 (Incubate), stalled at simulation validation.**

**Agent role: Builder (early), paused.** The general agent built the skills, but simulation revealed a quality problem.

**On track, with a decision point.** The team has not skipped any phase. They are in the right place: Phase 2 simulation is exactly where consistency problems should surface. A 30% inconsistency rate means the Statement Analyzer skill is underspecified. It probably lacks explicit scoring criteria for ambiguous cases, or its risk assessment categories overlap.

The correct decision is to stay in Phase 2 and refine the skill. Moving to Phase 3 with an inconsistent skill means building a specialist that produces unreliable audits. The 9.5+ threshold prevents premature crystallization of the concept paper; simulation testing prevents premature advancement of the skills.
:::

---

## Scoring Your Answers

Count how many of the six scenarios you identified correctly across all three dimensions (phase, role, and maturity status).

| Score | Assessment                                                                                                                                                                                 |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 6/6   | You have internalized the Five-Phase Map. The phases and their deliverables are clear in your mental model.                                                                                |
| 4-5/6 | You understand the phases but may be confusing adjacent phases or missing skipped-phase patterns. Review the specific scenarios you missed.                                                |
| 2-3/6 | Go back to Lesson 3 and re-read the summary table. For each scenario, map the description to a row in the table.                                                                           |
| 0-1/6 | Start from Lesson 2 (Incubator vs. Specialist) and work forward. The foundational distinction between exploring and building needs to click before the five-phase details will make sense. |

:::note For Further Practice
Ask Claude Code: "Give me three more agent factory scenarios at different phases. I will identify the phase, role, and maturity status, then you evaluate my answers." This generates unlimited practice with immediate feedback.
:::
