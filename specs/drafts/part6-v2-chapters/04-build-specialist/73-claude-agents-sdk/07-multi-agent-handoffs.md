---
sidebar_position: 7
title: "Multi-Agent Handoffs"
description: "Build a multi-agent HireFlow system using AgentDefinition and the Task tool, with context isolation, parallel execution, and orchestrator error handling"
chapter: 73
lesson: 7
duration_minutes: 45
keywords:
  [
    AgentDefinition,
    multi-agent,
    Task tool,
    orchestrator,
    subagent,
    handoffs,
    context isolation,
    parallel execution,
    HireFlow pipeline,
  ]

skills:
  - name: "Defining Subagents with AgentDefinition"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Student can create AgentDefinition instances with description, prompt, tools, and model parameters for specialized subagents"

  - name: "Building Orchestrator-Subagent Systems"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Student can configure an orchestrator agent that delegates tasks to subagents via the Task tool and processes their results"

  - name: "Debugging Multi-Agent Permission Errors"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Student can trace a permission denied error to a missing tool in allowed_tools and explain the fix"

learning_objectives:
  - objective: "Create AgentDefinition instances for two HireFlow subagents with appropriate tool restrictions and model selection"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Working subagent definitions that the orchestrator can invoke"

  - objective: "Configure an orchestrator agent that uses the Task tool to delegate work to subagents and aggregate their results"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Orchestrator that invokes cv-parser, collects output, passes it to candidate-scorer"

  - objective: "Diagnose a multi-agent failure caused by a missing tool in the orchestrator's allowed_tools list"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Written trace from error message to root cause to fix"

cognitive_load:
  new_concepts: 5
  assessment: "Five concepts: AgentDefinition, Task tool, orchestrator pattern, context isolation, parallel subagent execution. This is the most concept-dense lesson in the chapter. The progressive build (one agent, then two, then orchestrator) manages the load."

differentiation:
  extension_for_advanced: "Add a third subagent (eligibility-checker) that runs in parallel with candidate-scorer, then have the orchestrator merge both results"
  remedial_for_struggling: "Start with one subagent only (cv-parser). Get the orchestrator to invoke it and print the result before adding the second subagent"
---

# Multi-Agent Handoffs

In Lessons 05 and 06, you built agents with tools: one agent, multiple tools, one conversation. That works for simple workflows. But HireFlow's pipeline is not simple. Parsing a CV requires different skills than scoring a candidate. Scoring requires different context than formatting a brief. A single agent carrying all that context in one conversation window gets confused, makes mistakes, and uses more tokens than necessary.

The solution: multiple specialized agents, each with a narrow focus, coordinated by an orchestrator. This is the pattern you designed in Chapter 64's blueprint. Now you build it.

## What Is AgentDefinition?

An **AgentDefinition** describes a subagent: who it is, what it knows, and what tools it can use. Think of it as a job description for an AI employee.

```python
from claude_agent_sdk import AgentDefinition

cv_parser_agent = AgentDefinition(
    description="Resume parsing specialist for HireFlow",
    prompt=(
        "You are a resume parsing expert. Given raw CV text, extract "
        "structured data: candidate name, email, skills list, work "
        "experience entries, and education. Use the parse_cv tool. "
        "Return the structured data as your final response."
    ),
    tools=["mcp__hiring__parse_cv"],
    model="sonnet",
)
```

Four parameters define each subagent:

- **description**: A one-sentence summary the orchestrator reads when deciding which subagent to invoke. Make it specific. "Resume parsing specialist" is better than "data processor."
- **prompt**: The system instructions for this subagent. This is the subagent's entire knowledge base. It does not see the orchestrator's conversation history.
- **tools**: A whitelist of tools this subagent can use. The cv-parser agent can only call `parse_cv`. It cannot score candidates, check visa eligibility, or read files. This is context isolation.
- **model**: Which Claude model powers this subagent. Use `"sonnet"` for straightforward extraction tasks. Use `"opus"` for complex reasoning. Use `"haiku"` for simple classification. Use `"inherit"` to match the orchestrator's model.

## Building the HireFlow Two-Agent System

The first two HireFlow subagents map directly to the pipeline stages from Chapter 64:

```python
from claude_agent_sdk import AgentDefinition

cv_parser_agent = AgentDefinition(
    description="Resume parsing specialist that extracts structured data from raw CV text",
    prompt=(
        "You are a resume parsing expert working in the HireFlow pipeline. "
        "When given raw CV text, use the parse_cv tool to extract structured "
        "candidate data. Return ONLY the structured data from the tool. "
        "Do not add commentary or recommendations."
    ),
    tools=["mcp__hiring__parse_cv"],
    model="sonnet",
)

candidate_scorer_agent = AgentDefinition(
    description="Candidate scoring specialist that evaluates parsed CV data against job requirements",
    prompt=(
        "You are a candidate evaluation expert working in the HireFlow pipeline. "
        "You receive parsed candidate data (name, skills, experience) and a list "
        "of required skills for the role. Use the score_candidate tool to calculate "
        "a match score. Then use format_candidate_brief to create the hiring manager "
        "brief. Return the formatted brief as your final response."
    ),
    tools=[
        "mcp__hiring__score_candidate",
        "mcp__hiring_tools__format_candidate_brief",
    ],
    model="sonnet",
)
```

Notice how each agent has different tools. The cv-parser cannot score. The scorer cannot parse. Each agent sees only what it needs. This is **context isolation**: each subagent operates in its own conversation window with its own tool set. If the cv-parser hallucinates, the hallucination stays in that conversation. The scorer works from the structured output, not from the parser's internal reasoning.

## The Orchestrator

The orchestrator is the agent that coordinates the subagents. It does not parse CVs or score candidates. It delegates those tasks using the **Task** tool.

```python
from claude_agent_sdk import ClaudeAgentOptions, query, TextBlock
import asyncio


async def run_hireflow_pipeline(cv_text: str, required_skills: list[str]) -> None:
    """Run the HireFlow screening pipeline with two subagents."""
    options = ClaudeAgentOptions(
        allowed_tools=["Task"],
        agents={
            "cv-parser": cv_parser_agent,
            "candidate-scorer": candidate_scorer_agent,
        },
        mcp_servers={
            "hiring": hiring_server,
            "hiring_tools": hiring_tools_server,
        },
    )

    prompt: str = (
        f"Process this candidate through the HireFlow pipeline.\n\n"
        f"Step 1: Send the CV text to the cv-parser agent for extraction.\n"
        f"Step 2: Send the parsed data and these required skills to the "
        f"candidate-scorer agent: {', '.join(required_skills)}.\n"
        f"Step 3: Return the final candidate brief.\n\n"
        f"CV Text:\n{cv_text}"
    )

    async for message in query(prompt, options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(block.text)


# Run the pipeline
cv_text: str = """David Park
david.park@email.com

SKILLS
Python, TypeScript, React, PostgreSQL, Docker, Kubernetes

EXPERIENCE
Staff Engineer at ScaleAI (2021-2025)
Designed multi-service architecture for ML inference pipeline
Led team of 8 engineers across 3 time zones

Senior Developer at WebCorp (2018-2021)
Built customer-facing API serving 50k daily users

EDUCATION
MS Computer Science, Stanford University
"""

asyncio.run(run_hireflow_pipeline(
    cv_text,
    ["Python", "TypeScript", "Kubernetes", "Docker", "PostgreSQL"],
))
```

The orchestrator's `allowed_tools` contains only `"Task"`. This is the tool that lets the orchestrator invoke subagents. The `agents` dictionary maps agent names to `AgentDefinition` instances. The `mcp_servers` dictionary registers all the servers that any subagent might need.

## How Handoffs Work

When the orchestrator decides to invoke the cv-parser, it uses the Task tool internally. The SDK:

1. Creates a new conversation for the cv-parser subagent.
2. Passes the orchestrator's message as the subagent's prompt.
3. Gives the subagent access to only the tools in its `tools` list.
4. Runs the subagent to completion.
5. Returns the subagent's final response to the orchestrator.

The orchestrator then reads that response, extracts the parsed data, and passes it to the candidate-scorer subagent through another Task tool invocation. The candidate-scorer never sees the raw CV text. It only sees the structured data the orchestrator chose to forward.

This is the handoff: the orchestrator decides what information flows between subagents. It controls the pipeline.

## Context Isolation in Practice

Each subagent gets a fresh conversation window. This means:

- The cv-parser does not know about scoring or briefs.
- The candidate-scorer does not know about the raw CV text.
- Neither subagent sees the orchestrator's system prompt.
- Neither subagent sees the other subagent's conversation.

Why does this matter? Tokens and accuracy. A single agent processing the entire pipeline would carry the full CV text, the parsing instructions, the scoring criteria, and the formatting rules in one context window. That is expensive and error-prone. With isolated subagents, each conversation is short and focused.

There is a tradeoff. The orchestrator must explicitly pass information between subagents. If the cv-parser extracts the candidate's location but the orchestrator forgets to include it in the scorer's prompt, the scorer will not know the location. Nothing is shared automatically. You control the data flow.

## Parallel Execution

Some subagent tasks are independent. Parsing a CV and fetching a job template have no dependencies on each other. The orchestrator can invoke them simultaneously:

```python
# In the orchestrator's prompt:
prompt: str = (
    "Process this candidate. Run these steps in parallel where possible:\n"
    "- Send the CV to cv-parser for extraction\n"
    "- Send the role name to template-fetcher for the job requirements\n"
    "Then, once both complete, send the parsed data and requirements "
    "to candidate-scorer.\n\n"
    f"CV: {cv_text}\nRole: Senior Backend Engineer"
)
```

The orchestrator is an agent. It can decide to invoke multiple subagents at the same time if the tasks are independent. The SDK handles the parallel execution. The orchestrator waits for both results before proceeding to the scoring step.

## James's Bug: The Missing Task Tool

James built the system. He defined the subagents. He registered the servers. He ran the agent.

```
Error: Permission denied for tool "Task"
```

The orchestrator could not invoke any subagents. James stared at his code:

```python
options = ClaudeAgentOptions(
    allowed_tools=["Read"],  # Bug: "Task" is missing
    agents={
        "cv-parser": cv_parser_agent,
        "candidate-scorer": candidate_scorer_agent,
    },
    mcp_servers={"hiring": hiring_server},
)
```

:::info ERROR TYPE
**Category:** Orchestration Error
**What happened:** Orchestrator cannot invoke subagents because "Task" is missing from allowed_tools
**Caught by:** Agent attempts to use Task tool, gets permission denied
**Verification Rung:** Rung 4: pipeline verification
:::

Emma was in a meeting. James read the error message again: "Permission denied for tool 'Task'." He looked at the `allowed_tools` list. `"Read"` was there. `"Task"` was not.

He checked the orchestrator's purpose. It coordinates subagents. Subagent invocation uses the Task tool. The Task tool is not in the allowed list. The fix:

```python
options = ClaudeAgentOptions(
    allowed_tools=["Task"],  # Fixed: orchestrator needs Task to invoke subagents
    agents={
        "cv-parser": cv_parser_agent,
        "candidate-scorer": candidate_scorer_agent,
    },
    mcp_servers={"hiring": hiring_server},
)
```

Emma returned from her meeting. James showed her the fix.

"Good. How did you find it?"

"The error said 'Permission denied for tool Task.' I checked allowed_tools. Task was not there."

"That is the diagnostic pattern for multi-agent systems," Emma said. "When an orchestrator fails to invoke a subagent, check three things in this order. First: is 'Task' in allowed_tools? Second: is the agent name in the agents dictionary spelled correctly? Third: does the subagent have the tools it needs in its own tools list?"

"A checklist."

"A debugging sequence. First, second, third. The order matters because the first check catches 80% of cases."

## Handling Subagent Failures

What if the cv-parser subagent fails? Maybe the CV text is malformed, or the `parse_cv` tool returns an error. The orchestrator receives the failure as text in the subagent's response. It must decide what to do.

Good orchestrator prompts include failure handling instructions:

```python
orchestrator_prompt: str = (
    "You coordinate the HireFlow screening pipeline.\n\n"
    "If the cv-parser returns an error or incomplete data:\n"
    "- Report the specific error to the user\n"
    "- Do NOT proceed to scoring with incomplete data\n"
    "- Suggest what might be wrong with the CV format\n\n"
    "If the candidate-scorer returns an error:\n"
    "- Check if the parsed data was passed correctly\n"
    "- Report the scoring error with the candidate's name\n"
)
```

The orchestrator is an agent with reasoning capabilities. It can inspect subagent results, detect problems, and make decisions about how to proceed. But it will only check for failures if you tell it to. Without explicit instructions, the orchestrator may pass error messages to the next subagent as if they were valid data.

## The Full Two-Agent System

Here is the complete, runnable system:

```python
# File: hireflow/pipeline/screening_pipeline.py
import asyncio
from typing import Any

from claude_agent_sdk import (
    AgentDefinition,
    ClaudeAgentOptions,
    TextBlock,
    create_sdk_mcp_server,
    query,
    tool,
)


# --- Tools (from Lessons 05-06) ---
@tool(
    "parse_cv",
    "Parse raw CV text into structured candidate data",
    {"cv_text": str},
)
async def parse_cv(args: dict[str, Any]) -> dict[str, Any]:
    cv_text: str = args["cv_text"]
    lines: list[str] = cv_text.strip().split("\n")
    name: str = lines[0].strip() if lines else "Unknown"
    skills: list[str] = []
    capturing: bool = False
    for line in lines:
        if line.strip().upper() == "SKILLS":
            capturing = True
            continue
        if capturing and line.strip().isupper() and len(line.strip()) > 2:
            break
        if capturing and line.strip():
            skills.extend(s.strip() for s in line.split(","))
    return {
        "content": [
            {"type": "text", "text": f"Name: {name}\nSkills: {', '.join(skills)}"}
        ]
    }


@tool(
    "score_candidate",
    "Score a candidate against job requirements",
    {"candidate_skills": list, "required_skills": list},
)
async def score_candidate(args: dict[str, Any]) -> dict[str, Any]:
    candidate: set[str] = {s.lower() for s in args["candidate_skills"]}
    required: set[str] = {s.lower() for s in args["required_skills"]}
    if not required:
        return {
            "content": [{"type": "text", "text": "Error: no requirements"}],
            "isError": True,
        }
    overlap: set[str] = candidate & required
    score: float = len(overlap) / len(required)
    return {
        "content": [
            {
                "type": "text",
                "text": f"Score: {score:.2f}\nMatched: {', '.join(sorted(overlap))}",
            }
        ]
    }


# --- Server ---
hiring_server = create_sdk_mcp_server(
    "hiring", "1.0.0", [parse_cv, score_candidate]
)


# --- Subagent Definitions ---
cv_parser_agent = AgentDefinition(
    description="Resume parsing specialist that extracts structured data from raw CV text",
    prompt=(
        "You are a resume parsing expert. Use the parse_cv tool to extract "
        "structured candidate data from the provided CV text. Return ONLY "
        "the structured data. Do not add commentary."
    ),
    tools=["mcp__hiring__parse_cv"],
    model="sonnet",
)

candidate_scorer_agent = AgentDefinition(
    description="Candidate scoring specialist that evaluates parsed data against job requirements",
    prompt=(
        "You are a candidate evaluation expert. You receive parsed candidate "
        "data and required skills. Use score_candidate to calculate the match. "
        "Return the score and matched skills."
    ),
    tools=["mcp__hiring__score_candidate"],
    model="sonnet",
)


# --- Orchestrator ---
async def main() -> None:
    options = ClaudeAgentOptions(
        allowed_tools=["Task"],
        agents={
            "cv-parser": cv_parser_agent,
            "candidate-scorer": candidate_scorer_agent,
        },
        mcp_servers={"hiring": hiring_server},
    )

    cv_text: str = """Priya Sharma
priya.sharma@email.com

SKILLS
Python, FastAPI, Docker, PostgreSQL, Redis, Celery

EXPERIENCE
Backend Engineer at FinTech Global (2022-2025)
Built payment processing pipeline handling 100k transactions/day

Junior Developer at StartupXYZ (2020-2022)
Maintained REST API for mobile app with 50k users

EDUCATION
BS Computer Science, IIT Delhi
"""

    prompt: str = (
        "Screen this candidate for a Senior Backend Engineer role.\n\n"
        "Step 1: Send the CV to cv-parser for extraction.\n"
        "Step 2: Send parsed data to candidate-scorer with these required "
        "skills: Python, FastAPI, Kubernetes, Docker, PostgreSQL.\n"
        "Step 3: Summarize the result.\n\n"
        "If any step fails, report the error. Do NOT proceed with bad data.\n\n"
        f"CV:\n{cv_text}"
    )

    async for message in query(prompt, options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(block.text)


asyncio.run(main())
```

## Investigation Exercise

Extend the system with a third subagent: `eligibility-checker`. This agent uses `check_visa_eligibility` (from Lesson 06) to verify location requirements. Configure the orchestrator to run `cv-parser` first, then run `candidate-scorer` and `eligibility-checker` in parallel (since scoring and eligibility checking are independent), and finally combine both results into a summary.

Questions to answer:

1. What tools does `eligibility-checker` need in its `tools` list?
2. How does the orchestrator know to run the scorer and checker in parallel?
3. If you forget to add `eligibility-checker` to the `agents` dictionary but reference it in the prompt, what happens?
4. What model would you choose for `eligibility-checker`, and why?

Build it, run it, and verify that both subagents execute before the orchestrator produces the summary.

:::tip Key Takeaway
Multi-agent systems split complex pipelines into focused specialists. The orchestrator needs "Task" in allowed_tools. Each subagent gets context isolation: its own conversation, its own tools, its own model. The orchestrator controls what information flows between them.
:::
