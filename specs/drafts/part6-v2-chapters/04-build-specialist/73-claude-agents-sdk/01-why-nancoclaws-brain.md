---
sidebar_position: 1
title: "Why NanoClaw's Brain"
description: "Discover why HireFlow needs an agent SDK to drive its MCP servers, and how the Claude Agent SDK fits as NanoClaw's brain component."
keywords:
  - claude agent sdk
  - nanoclaw architecture
  - agent brain
  - mcp tool orchestration
  - hireflow agents
  - build specialist phase
chapter: 73
lesson: 1
duration_minutes: 15

skills:
  - name: "Agent Architecture Reasoning"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can explain why MCP servers alone cannot drive an agent workflow and identify what the SDK layer provides"
  - name: "NanoClaw Component Mapping"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can recall the Body plus Brain decomposition and identify which component the Claude Agent SDK fills"

learning_objectives:
  - objective: "Explain why MCP servers require an orchestration layer to function as autonomous agents"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Scenario analysis: given MCP servers and a hiring task, identify what is missing"
  - objective: "Map the Claude Agent SDK to the Brain component in NanoClaw's architecture"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Diagram labeling: assign Body and Brain to correct components"
  - objective: "Connect Phase 3 Build Specialist to the validated skills and MCP servers from the Incubate phase"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Short answer linking prior chapter outputs to this chapter's starting point"

cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: the orchestration gap (why tools alone are not agents) and the Body plus Brain decomposition applied to a specific SDK. Both build on Chapter 72's conceptual introduction. No code in this lesson."

differentiation:
  extension_for_advanced: "Before reading, sketch your own diagram of what sits between a user request and an MCP tool call. Compare your sketch to Emma's architecture at the end of the lesson."
  remedial_for_struggling: "Focus on the three questions Emma asks James in the opening exchange. If you can answer all three, you understand the gap this chapter fills."
---

# Why NanoClaw's Brain

## James Has Tools but No Driver

James opened his terminal and listed the MCP servers running in his HireFlow project. Three servers, each one battle-tested from Chapters 69 and 70: `parse_cv` for extracting structured data from resumes, `score_candidate` for rating applicants against job specifications, and `job_template` for generating standardized job descriptions.

He also had four validated agent skills from Chapter 67, each one stress-tested through simulation in Chapter 68. The Resume Screener knew how to evaluate candidates across five scoring dimensions. The Job Spec Writer could transform vague hiring briefs into structured specifications. The Interview Question Generator produced role-specific questions. The Candidate Summarizer distilled everything into a hiring recommendation.

The skills knew WHAT to do. The MCP servers knew HOW to execute. But nothing connected them.

"I'll wire these together with HTTP requests," James said, cracking his knuckles. "The Resume Screener skill says 'parse the CV,' so I call the parse_cv MCP tool. Then I take the output, feed it to score_candidate, and return the result. Straightforward."

Emma looked up from her monitor. "And when parse_cv returns an error, who retries?"

James paused. "I'll add a try-except."

"And who decides whether to call parse_cv first or score_candidate first?"

"I'll hardcode the order."

"And when the candidate submits a CV in a format parse_cv doesn't recognize, who decides to ask the candidate for a different format instead of crashing?"

James stared at his terminal. The MCP tools were executors. They did what they were told. They did not decide what to do, in what order, or what to do when something failed. That decision-making layer was completely missing.

"Wait, so basically... I have a bunch of power tools in a workshop, but nobody is standing at the workbench deciding which tool to pick up next."

"Exactly. You have the hands. You need the brain."

## The Orchestration Gap

What James had discovered is the **orchestration gap**: the space between having callable tools and having an autonomous agent. Tools execute. Agents reason, plan, select tools, interpret results, handle errors, and synthesize outputs. The gap between those two capabilities is not a small gap. It is the entire intelligence layer.

Consider what happens when a hiring manager sends HireFlow a message: "Screen these five candidates for the Senior Python Developer role." A human recruiter would read the request, pull up each CV, evaluate them against the job spec, handle any missing information, rank the candidates, and write a summary. That sequence involves dozens of decisions, not just tool calls.

An MCP server cannot make those decisions. The `parse_cv` tool does not know it should be called five times, once per candidate. The `score_candidate` tool does not know it should wait for parse_cv to finish before running. Neither tool knows what to do if one candidate's CV is a scanned image instead of text.

The orchestration gap has three components:

1. **Sequencing**: Deciding which tools to call and in what order
2. **Error recovery**: Deciding what to do when a tool fails or returns unexpected output
3. **Synthesis**: Combining results from multiple tool calls into a coherent response

:::info Recall: Chapter 72
In Chapter 72, Lesson 2, you learned six capabilities that Agent SDKs provide: the agent loop, tool management, message history, multi-agent coordination, streaming, and permission control. The orchestration gap is why those capabilities exist. Without an SDK, you would need to build all six yourself. How many of those six can you name from memory?
:::

## NanoClaw: Body Plus Brain

In Chapter 72, Lesson 4, Emma introduced the **NanoClaw** architecture. NanoClaw is HireFlow's agent runtime: the container that turns skills and tools into a deployable agent. It has two components.

The **Body** handles everything external: HTTP routing, session management, authentication, rate limiting, and container orchestration. The Body is infrastructure. It does not understand hiring, candidates, or job specifications. It routes requests, manages connections, and keeps the system running.

The **Brain** handles everything internal: reasoning about the task, selecting which tools to call, interpreting results, recovering from errors, and generating the final response. The Brain is intelligence. It understands the domain because it runs the agent skills through an LLM that can reason about them.

```
NanoClaw Architecture
┌──────────────────────────────────────────┐
│              NanoClaw Runtime             │
│  ┌────────────┐    ┌───────────────────┐ │
│  │    Body     │    │      Brain        │ │
│  │  (Runtime)  │───→│  (Agent SDK)      │ │
│  │ HTTP server │    │ Claude Agent SDK   │ │
│  │ Sessions    │    │ Agent loop        │ │
│  │ Auth        │    │ Tool selection    │ │
│  │ Routing     │    │ Error recovery    │ │
│  └────────────┘    │ Result synthesis  │ │
│                     └──────┬────────────┘ │
│                            │              │
│                     ┌──────▼────────────┐ │
│                     │   MCP Servers     │ │
│                     │ parse_cv          │ │
│                     │ score_candidate   │ │
│                     │ job_template      │ │
│                     └───────────────────┘ │
└──────────────────────────────────────────┘
```

The Claude Agent SDK is the Brain. It provides the agent loop that takes a user request, reasons about which tools to call, dispatches those calls through MCP, interprets the results, and generates a response. This chapter teaches you how to use that SDK.

## Why the Claude Agent SDK

James raised a reasonable question. "In Chapter 72, we compared the Claude Agent SDK and the OpenAI Apps SDK. Why are we starting with Claude's?"

Emma had three reasons.

**First, it speaks MCP natively.** The Claude Agent SDK treats MCP servers as first-class tool providers. You point it at your MCP servers, and every tool registered on those servers becomes available to the agent. No adapter code, no wrapper classes. Since HireFlow's tools are already MCP servers (Chapters 69-70), the integration is direct.

**Second, it provides streaming by default.** The `query()` function returns an async generator that yields messages as the agent works. You see each reasoning step, each tool call, and each result in real time. For debugging agent behavior, this visibility is essential.

**Third, it matches HireFlow's permission model.** The SDK's permission modes ("default," "acceptEdits," "bypassPermissions") map cleanly to the trust levels HireFlow needs. A Resume Screener that only reads files needs different permissions than a Job Spec Writer that creates them.

:::info Recall: Chapter 70
In Chapter 70, you built custom MCP servers with Pydantic input validation and structured error responses. Those design choices pay off now: the Claude Agent SDK receives structured tool results it can reason about. If your MCP servers returned unstructured text, the agent would struggle to interpret errors or extract specific fields. Good MCP server design makes good agent behavior possible.
:::

## Phase 3 Begins Here

James looked at the whiteboard where Emma had drawn the Incubate-to-Build progression in Chapter 68:

```
Explore (Ch 65-66) → Incubate (Ch 67-71) → Build Specialist (Ch 72+)
                                              ↑ You are here
```

Everything before this point was preparation. The Explore phase produced the concept paper and domain mastery. The Incubate phase produced validated skills, MCP servers, and runtime integration. Now, in the Build Specialist phase, those pieces become working agents.

"This is where HireFlow stops being a design document," James said. "Wait, so basically... after this chapter, we'll have agents that actually run. Not skills on paper, not MCP servers waiting for calls, but agents that receive a task and execute it end to end."

"That is the goal," Emma said. "But the word 'actually' is doing a lot of work in that sentence. An agent that runs is not the same as an agent that runs correctly. This chapter teaches you how to build the agent. The chapters after it teach you how to make it reliable."

James felt the familiar tension between wanting to ship and knowing he should be careful. But this time the tension felt different. It felt like determination. He had put in the preparation work. The skills were validated. The tools were tested. The architecture was clear.

"Let's build the brain."

## Check Your Understanding

Before moving to the next lesson, answer these questions without scrolling back:

1. **From Chapter 72**: Name three of the six capabilities that Agent SDKs provide. Which of those three addresses the orchestration gap's "sequencing" component?

2. **The orchestration gap**: James has MCP servers and agent skills. What three things are missing that prevent these from functioning as an autonomous agent?

3. **NanoClaw architecture**: Which component handles HTTP routing and session management? Which component handles tool selection and error recovery?

4. **From Chapter 70**: Why does structured MCP server output (Pydantic models, typed error responses) matter for the agent SDK layer?

---

**Next lesson**: You will install the Claude Agent SDK, configure authentication, and write your first `query()` call against a HireFlow job description.
