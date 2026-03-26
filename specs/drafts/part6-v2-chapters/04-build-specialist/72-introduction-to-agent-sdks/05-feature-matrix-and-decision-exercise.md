---
sidebar_position: 5
title: "Feature Matrix and Decision Exercise"
description: "Compare raw API, Claude Agents SDK, OpenAI Apps SDK, and NanoClaw across twelve dimensions, then decide which technology powers each HireFlow component."
chapter: 72
lesson: 5
duration_minutes: 20
keywords:
  [
    feature matrix,
    sdk comparison,
    decision exercise,
    technology selection,
    hireflow architecture,
  ]

skills:
  - name: "Technology Evaluation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can evaluate technology options against requirements using a structured feature matrix"
  - name: "Architecture Decision"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can justify technology choices for specific components of a multi-agent system"

learning_objectives:
  - objective: "Compare four technology approaches across twelve feature dimensions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Feature matrix completion"
  - objective: "Select and justify the appropriate technology for each HireFlow component"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Decision table with justification"

cognitive_load:
  new_concepts: 0
  assessment: "Low. No new concepts. Applies Lessons 1-4 to a structured decision exercise."

differentiation:
  extension_for_advanced: "Add a fifth column to the feature matrix for Google ADK. Research its capabilities and fill in the matrix. How does it change your HireFlow decisions?"
  remedial_for_struggling: "Start with Exercise 1 only. The feature matrix anchors everything else. If the matrix feels overwhelming, focus on the three rows most relevant to HireFlow: MCP integration, multi-agent support, and production readiness."
---

# Feature Matrix and Decision Exercise

You have learned four things in this chapter so far:

1. Raw API calls produce fragile agents because you must build all six SDK layers yourself (Lesson 1)
2. Every Agent SDK provides six layers: loop, tools, memory, guardrails, handoffs, and observability (Lesson 2)
3. The Claude Agents SDK is capability-centric (deep tool use) and the OpenAI Apps SDK is handoff-centric (routing between specialists) (Lesson 3)
4. NanoClaw wraps an SDK in a production runtime with HTTP, sessions, channels, and monitoring (Lesson 4)

This lesson turns that understanding into a decision. By the end, you will have a technology map for every major component of HireFlow.

## Exercise 1: The Feature Matrix

Below is a feature comparison across four approaches: Raw API, Claude Agents SDK, OpenAI Apps SDK, and NanoClaw. Some cells are filled. Your job is to complete the empty ones based on what you learned in Lessons 1-4.

| Feature                  | Raw API                           | Claude Agents SDK       | OpenAI Apps SDK           | NanoClaw                |
| ------------------------ | --------------------------------- | ----------------------- | ------------------------- | ----------------------- |
| **Agent loop**           | Manual (you write the while loop) | Built-in                | Built-in                  | Built-in (via Brain)    |
| **Tool dispatch**        | Manual JSON parsing               | Automatic from schema   | Automatic from schema     | Automatic (via Brain)   |
| **MCP integration**      | You write the client              | Native MCP client       | \_\_\_                    | Via Brain's SDK         |
| **Memory management**    | You manage the list               | Configurable strategies | Configurable strategies   | \_\_\_                  |
| **Guardrails**           | None by default                   | \_\_\_                  | Built-in guardrail agents | Via Brain + Body rules  |
| **Multi-agent handoffs** | You build the routing             | Orchestrator pattern    | \_\_\_                    | Via Brain's SDK         |
| **HTTP server**          | You build with FastAPI            | Not included            | Not included              | \_\_\_                  |
| **Session management**   | You build it                      | Not included            | \_\_\_                    | Built-in                |
| **Channel adapters**     | You build them                    | Not included            | Not included              | \_\_\_                  |
| **Authentication**       | You build it                      | Not included            | Not included              | Built-in                |
| **Health monitoring**    | You build it                      | \_\_\_                  | Not included              | Built-in (Body + Brain) |
| **Production readiness** | Low (everything custom)           | Medium (needs runtime)  | \_\_\_                    | High (complete runtime) |

Take a few minutes to fill in the blanks. Then check your answers below.

:::note Answers
Here is the completed matrix. Compare your answers.

| Feature                  | Raw API                | Claude Agents SDK         | OpenAI Apps SDK           | NanoClaw                             |
| ------------------------ | ---------------------- | ------------------------- | ------------------------- | ------------------------------------ |
| **Agent loop**           | Manual                 | Built-in                  | Built-in                  | Built-in (via Brain)                 |
| **Tool dispatch**        | Manual                 | Automatic                 | Automatic                 | Automatic (via Brain)                |
| **MCP integration**      | You write the client   | Native MCP client         | Via tool adapters         | Via Brain's SDK                      |
| **Memory management**    | You manage the list    | Configurable strategies   | Configurable strategies   | Configurable (via Brain)             |
| **Guardrails**           | None by default        | Built-in validation hooks | Built-in guardrail agents | Via Brain + Body rules               |
| **Multi-agent handoffs** | You build the routing  | Orchestrator pattern      | Native handoff primitive  | Via Brain's SDK                      |
| **HTTP server**          | You build with FastAPI | Not included              | Not included              | Built-in                             |
| **Session management**   | You build it           | Not included              | Not included              | Built-in                             |
| **Channel adapters**     | You build them         | Not included              | Not included              | Built-in (web, Slack, WhatsApp, API) |
| **Authentication**       | You build it           | Not included              | Not included              | Built-in                             |
| **Health monitoring**    | You build it           | Not included              | Not included              | Built-in (Body + Brain)              |
| **Production readiness** | Low                    | Medium (needs runtime)    | Medium (needs runtime)    | High (complete runtime)              |

**Key pattern to notice:** The SDKs handle the Brain concerns (rows 1-6). NanoClaw handles Brain concerns AND Body concerns (rows 7-12). Raw API handles neither. This is why you need both an SDK and a runtime.
:::

## Exercise 2: HireFlow Technology Decisions

HireFlow has seven major components. For each one, decide which technology is the best fit and write a one-sentence justification.

| Component                     | Description                                                               | Your Choice | Your Justification |
| ----------------------------- | ------------------------------------------------------------------------- | ----------- | ------------------ |
| **Resume Screener FTE**       | Parses CVs, scores candidates against job specs                           | \_\_\_      | \_\_\_             |
| **Job Spec Writer FTE**       | Takes hiring manager briefs, produces structured job specifications       | \_\_\_      | \_\_\_             |
| **Interview Q Generator FTE** | Creates role-specific interview questions based on candidate and job spec | \_\_\_      | \_\_\_             |
| **Candidate Summarizer FTE**  | Produces final hiring briefs combining scores, questions, and notes       | \_\_\_      | \_\_\_             |
| **Triage Layer**              | Routes hiring manager requests to the correct FTE                         | \_\_\_      | \_\_\_             |
| **Chat Interface**            | Web-based conversational UI for hiring managers                           | \_\_\_      | \_\_\_             |
| **API Endpoints**             | REST API for programmatic access to HireFlow services                     | \_\_\_      | \_\_\_             |

Take a few minutes with each row. The justification matters more than the choice.

:::note Answers
Here are Emma's recommendations. Your choices may differ if your reasoning is sound.

| Component                     | Technology        | Justification                                                                                           |
| ----------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------- |
| **Resume Screener FTE**       | Claude Agents SDK | Deep multi-tool reasoning: parse CV, fetch job spec, score, justify. Capability-centric.                |
| **Job Spec Writer FTE**       | Claude Agents SDK | Multi-step generation: gather requirements, research role, produce structured spec. Capability-centric. |
| **Interview Q Generator FTE** | Claude Agents SDK | Needs to reason about candidate gaps, role requirements, and question difficulty. Capability-centric.   |
| **Candidate Summarizer FTE**  | Claude Agents SDK | Synthesizes data from multiple sources (scores, questions, notes). Deep tool use. Capability-centric.   |
| **Triage Layer**              | OpenAI Apps SDK   | Routes requests to the correct FTE based on intent. Handoff-centric.                                    |
| **Chat Interface**            | NanoClaw          | Needs HTTP server, session management, channel adapters, authentication. Full Body + Brain.             |
| **API Endpoints**             | FastAPI (Ch 82)   | Programmatic access does not need conversational agent infrastructure. Standard REST framework.         |

**Key insight:** All four FTEs use the Claude Agents SDK because they all do deep, multi-tool reasoning. The triage layer uses the OpenAI Apps SDK because routing is its core job. The chat interface uses NanoClaw because it needs the full production runtime. The API uses plain FastAPI because it does not need an agent loop.

The answer "it depends" is usually a dodge. Here, the differences are clear because the components have different problems. Match the philosophy to the problem.
:::

## Exercise 3: Defend a Decision

Choose one row from Exercise 2 and explain why the other technologies would be a worse fit.

**Example for Resume Screener FTE:**

- **Why not raw API?** You would need to build the agent loop, tool dispatch, memory, and error handling yourself. Lesson 1 showed that this produces fragile code with 180+ lines of infrastructure for a single tool.
- **Why not OpenAI Apps SDK?** The screener does not route requests. It does deep work with multiple tools. Handoff-centric design adds overhead without benefit.
- **Why not NanoClaw?** NanoClaw is a runtime, not an SDK. The screener needs an SDK Brain, which NanoClaw wraps. You use NanoClaw at the deployment layer, not the FTE layer.

Write your defense for a different row. If you can explain why three alternatives are worse, you understand the decision deeply.

## Try With AI

Use these prompts in Claude Code or your preferred AI assistant.

> "I'm building a document review agent that reads contracts, extracts key clauses, checks against templates, flags risks, and produces a summary. Should I use a capability-centric SDK or a handoff-centric SDK? Why?"

**What you are learning:** Mapping a real-world task to the correct SDK philosophy.

> "I'm building a customer support system with five specialist agents: billing, shipping, technical, returns, and escalation. A triage agent routes customers to the right specialist. Which SDK philosophy fits the triage layer? Which fits each specialist?"

**What you are learning:** Recognizing that different components of the same system may need different approaches.

> "What are three situations where using BOTH Claude Agents SDK and OpenAI Apps SDK in the same project makes sense? What are three situations where using a single SDK is better?"

**What you are learning:** Understanding the tradeoffs of multi-SDK architectures.
