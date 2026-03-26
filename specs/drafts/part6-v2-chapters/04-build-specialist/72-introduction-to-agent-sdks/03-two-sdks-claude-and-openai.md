---
sidebar_position: 3
title: "Two SDKs: Claude and OpenAI"
description: "Compare the Claude Agents SDK and OpenAI Apps SDK philosophies and understand which HireFlow problems each solves."
chapter: 72
lesson: 3
duration_minutes: 15
keywords:
  [
    claude agents sdk,
    openai apps sdk,
    sdk comparison,
    capability-centric,
    handoff-centric,
  ]

skills:
  - name: "SDK Philosophy Comparison"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can distinguish between capability-centric and handoff-centric SDK philosophies and match each to a use case"
  - name: "SDK Selection"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can justify selecting a specific SDK for a given agent development scenario"

learning_objectives:
  - objective: "Explain the core philosophy of the Claude Agents SDK (capability-centric, tool-first)"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Chapter Quiz conceptual question"
  - objective: "Explain the core philosophy of the OpenAI Apps SDK (handoff-centric, routing-first)"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Chapter Quiz conceptual question"
  - objective: "Justify why HireFlow uses both SDKs for different components"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Decision exercise in Lesson 5"

cognitive_load:
  new_concepts: 4
  assessment: "Medium. Two SDK philosophies plus two key terms (capability-centric, handoff-centric). Comparison table reduces load by making differences visual."

differentiation:
  extension_for_advanced: "Research Google ADK and compare its service-centric philosophy to the two SDKs covered here. Where does it fit on the capability vs. routing spectrum?"
  remedial_for_struggling: "Focus on the summary table at the end. If the philosophies feel abstract, map each SDK to the specific HireFlow FTE it will power."
---

# Two SDKs: Claude and OpenAI

"If all SDKs provide the same six layers," James said, "why does it matter which one I pick? They are interchangeable."

"They are not," Emma said. "Same six layers, different philosophies. The philosophy shapes how you design your agent."

She wrote two words on the whiteboard, one on each side:

**CAPABILITY-CENTRIC** on the left. **HANDOFF-CENTRIC** on the right.

"These are the two design philosophies that matter for HireFlow."

## Claude Agents SDK: Capability-Centric

The Claude Agents SDK is built around a single idea: give one agent powerful tools and let it reason about how to use them.

"Think about the Resume Screener," Emma said. "It needs to parse a CV, look up the job specification, compare qualifications against requirements, calculate a score, and write a justification. That is one agent doing deep work with multiple tools."

The Claude Agents SDK models this as an **Agent** with a system prompt, a list of tools (your MCP servers), and a reasoning loop that decides which tools to call and in what order. You do not script the sequence. The agent reasons through it.

"The key word is 'capability,'" Emma said. "You define what the agent can do. The SDK handles how it does it."

**When to use capability-centric design:**

- The agent needs to reason about which tools to use
- Tool selection depends on context (different CVs need different parsing strategies)
- The agent does sustained, multi-step work on a single task
- Deep execution matters more than routing

"That sounds like all four of our FTEs," James said. "Each one does deep work."

"Correct. For the FTEs themselves, capability-centric is the right fit."

## OpenAI Apps SDK: Handoff-Centric

The OpenAI Apps SDK is built around a different idea: multiple simple agents that transfer control to each other based on conditions.

"Now think about the hiring manager," Emma said. "She opens a chat interface and types: 'Show me the top candidates for the backend engineer role.' That request needs to reach the Resume Screener. But if she types 'Generate interview questions for candidate 3,' that request needs to reach the Interview Question Generator."

James leaned forward. "So there is a triage agent that routes requests to the right FTE?"

"Exactly. The OpenAI Apps SDK calls that routing mechanism a **handoff**. You define agents, and you define the conditions under which one agent hands control to another."

```
Hiring Manager → Triage Agent → Resume Screener
                              → Interview Q Generator
                              → Job Spec Writer
                              → Candidate Summarizer
```

"The key word is 'handoff,'" Emma said. "You define who handles what. The SDK manages the transitions."

**When to use handoff-centric design:**

- Multiple specialists serve different request types
- Routing logic is the core challenge
- Each specialist does focused, bounded work
- User-facing conversations need seamless transitions between agents

"Wait, so basically the Claude SDK powers each FTE, and the OpenAI SDK routes between them?" James said.

"That is one valid architecture, yes. Claude Agents SDK for the brains. OpenAI Apps SDK for the traffic cop."

## Why Not Just Pick One?

James frowned. "But the Claude SDK also supports multi-agent patterns. I could build the triage logic there too. Why use two SDKs?"

This was a fair challenge, and Emma took it seriously.

"You could build everything in one SDK," she said. "Many teams do. Here is what you trade."

| Approach                | Advantage                             | Disadvantage                                                                   |
| ----------------------- | ------------------------------------- | ------------------------------------------------------------------------------ |
| **Single SDK (Claude)** | One dependency, one mental model      | Handoff logic is verbose; you write routing code yourself                      |
| **Single SDK (OpenAI)** | Clean routing with handoff primitives | Deep tool reasoning is less natural; capability patterns need more boilerplate |
| **Both SDKs**           | Best tool for each job                | Two dependencies, two APIs to learn                                            |

"For HireFlow, we use both," Emma said. "The FTEs do deep work. The user-facing layer does routing. Different problems, different tools."

James thought about it. "That's like using PostgreSQL for relational data and ChromaDB for vector search. In Chapter 76 and 77, we use both because they solve different problems."

Emma paused. "That is actually a really useful analogy. Different persistence needs, different databases. Different agent needs, different SDKs."

## The Philosophies in Practice

Here is what the same task looks like under each philosophy.

**Task: A hiring manager asks "Score this candidate against the backend engineer role."**

**Capability-centric (Claude Agents SDK):**

The Resume Screener agent receives the request. It has tools: `parse_cv`, `get_job_spec`, `score_candidate`. It reasons about the sequence: first parse the CV, then fetch the job spec, then score. If the CV is malformed, it calls `parse_cv` with different parameters. If the job spec is missing, it asks the user for clarification. The agent adapts.

**Handoff-centric (OpenAI Apps SDK):**

The Triage Agent receives the request. It recognizes this as a scoring task and hands off to the Resume Screener agent. The handoff includes the candidate ID and role name as context. The Resume Screener executes its workflow and returns the result. The Triage Agent formats it for the hiring manager.

"Notice the difference," Emma said. "In the first case, the agent figures out what to do. In the second case, the routing is pre-defined. The triage agent does not reason about scoring. It just knows that scoring requests go to the screener."

## Summary: Two Philosophies

| Dimension           | Claude Agents SDK               | OpenAI Apps SDK                              |
| ------------------- | ------------------------------- | -------------------------------------------- |
| **Core philosophy** | Capability-centric              | Handoff-centric                              |
| **Key primitive**   | Agent + Tools                   | Agent + Handoffs                             |
| **Design focus**    | What can this agent do?         | Who handles this request?                    |
| **Best for**        | Deep, multi-step tool use       | Routing between specialists                  |
| **MCP integration** | Native (built-in MCP client)    | Via tool adapters                            |
| **Multi-agent**     | Orchestrator coordinates agents | Handoff chain between agents                 |
| **HireFlow use**    | Powers each FTE (the brains)    | Powers user-facing routing (the traffic cop) |

"In Chapter 73, you will build your first agent with the Claude Agents SDK," Emma said. "In Chapter 74, you will build a user-facing app with the OpenAI Apps SDK. You need to understand both philosophies before you touch either codebase."

## What Comes Next

Both SDKs provide the six layers from Lesson 2. But neither SDK, on its own, gives you a production-ready runtime. You need HTTP endpoints, session management, authentication, and channel adapters (web chat, Slack, API). That is where NanoClaw enters the picture.
