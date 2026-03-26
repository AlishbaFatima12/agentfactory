---
sidebar_position: 3
title: "Predict: Agent Tool Call Order"
description: "Read an agent configured with MCP tools and predict the exact order of tool calls before running it. Core predict-and-verify exercise for multi-tool agents."
keywords:
  - tool call order
  - predict and verify
  - mcp tool integration
  - agent reasoning
  - parse_cv
  - score_candidate
  - claude agent sdk
chapter: 73
lesson: 3
duration_minutes: 30

skills:
  - name: "Agent Behavior Prediction"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can read an agent configuration and predict the tool call sequence for a given prompt, including data dependencies between tools"
  - name: "MCP Tool Integration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can configure an agent with MCP servers and specify tool names using the mcp__servername__toolname convention"
  - name: "Confidence Calibration"
    proficiency_level: "A2"
    category: "Metacognitive"
    bloom_level: "Evaluate"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can rate prediction confidence before seeing results and reflect on calibration accuracy afterward"

learning_objectives:
  - objective: "Predict the tool call sequence for a multi-tool agent given its configuration and prompt"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Written prediction compared against actual execution output"
  - objective: "Configure an agent with MCP servers using the mcp__servername__toolname naming convention"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Code review of agent configuration with correct MCP tool references"
  - objective: "Assess prediction accuracy and identify sources of incorrect assumptions"
    proficiency_level: "A2"
    bloom_level: "Evaluate"
    assessment_method: "Written reflection comparing predicted vs actual tool call order"

cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: MCP tool naming convention (mcp__server__tool) and data dependency reasoning (tool B needs output from tool A). Both are applied to familiar HireFlow tools. The predict exercise is cognitively demanding but uses known domain entities."

differentiation:
  extension_for_advanced: "Before reading the answer, draw a dependency graph showing which tool outputs feed into which tool inputs. Use this graph to derive the minimum number of turns."
  remedial_for_struggling: "Focus on one question at a time in the prediction box. Start with question 1 (tool order) and ignore questions 2 and 3 until you have a firm answer for the first."
---

# Predict: Agent Tool Call Order

## James's Multi-Tool Agent

James had his first `query()` call working from the previous lesson. Now he wanted to connect his agent to the MCP tools he built in Chapters 69 and 70. The goal: an agent that receives a candidate's CV file, parses it into structured data, and scores the candidate against a job specification.

He wrote the following code. Read it carefully. There are no explanatory comments.

```python
"""HireFlow candidate screening agent with MCP tools."""

import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, ResultMessage, TextBlock


async def screen_candidate() -> None:
    options: ClaudeAgentOptions = ClaudeAgentOptions(
        allowed_tools=[
            "Read",
            "mcp__parse_cv__parse_cv",
            "mcp__score_candidate__score_candidate",
        ],
        permission_mode="acceptEdits",
        max_turns=10,
        cwd="/home/james/hireflow",
        mcp_servers=[
            {
                "name": "parse_cv",
                "type": "stdio",
                "command": "python",
                "args": ["-m", "hireflow.mcp_servers.parse_cv"],
            },
            {
                "name": "score_candidate",
                "type": "stdio",
                "command": "python",
                "args": ["-m", "hireflow.mcp_servers.score_candidate"],
            },
        ],
    )

    prompt: str = (
        "Parse this candidate's CV and score them against the "
        "Senior Python Developer role. The CV is at "
        "candidates/cvs/sarah_chen.txt and the job spec is at "
        "job_descriptions/senior_python_dev.md."
    )

    async for message in query(prompt=prompt, options=options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Agent] {block.text}")
        elif message.type == "tool_use":
            print(f"[Tool] {message.tool_name}")
            print(f"  Input: {message.tool_input}")
        elif isinstance(message, ResultMessage):
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Result] {block.text}")


asyncio.run(screen_candidate())
```

Study the code. Pay attention to three things: the `allowed_tools` list, the `mcp_servers` configuration, and the prompt. Do not read past the prediction box until you have written your answers.

## MCP Tool Naming

Before you predict, one pattern needs explanation. The `allowed_tools` list contains entries like `mcp__parse_cv__parse_cv`. This follows the MCP tool naming convention in the Claude Agent SDK:

```
mcp__<server_name>__<tool_name>
```

The first `parse_cv` is the server name (from the `"name"` field in the `mcp_servers` config). The second `parse_cv` is the tool name registered on that server. They happen to match here, but they do not have to. A server named `hiring_tools` with a tool named `parse_cv` would produce `mcp__hiring_tools__parse_cv`.

The `mcp_servers` list tells the SDK how to start each MCP server process. The `"type": "stdio"` field means the SDK communicates with the server over standard input/output, the same transport you used in Chapters 69 and 70.

Now, predict.

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll ahead. Do not ask your AI assistant.

The agent receives this prompt: "Parse this candidate's CV and score them against the Senior Python Developer role. The CV is at candidates/cvs/sarah_chen.txt and the job spec is at job_descriptions/senior_python_dev.md."

The agent has three tools available: Read, mcp__parse_cv__parse_cv, and mcp__score_candidate__score_candidate.

1. **In what ORDER will the agent call the tools?** Will it call Read first, parse_cv first, or score_candidate first? List the complete sequence.

2. **What happens if parse_cv returns an error?** Does the agent retry, skip scoring, or stop entirely?

3. **How many turns (reasoning cycles) will this take?** Count each tool call as one turn. Include the final synthesis as a turn.

Record your confidence for each answer (1 = guessing, 5 = certain).

Write your predictions on paper or in a text file before continuing.
:::

## The Actual Execution

James ran the script. Here is the output, condensed to show the tool call sequence:

```
[Agent] I need to read both files first, then parse the CV, then score
        the candidate. Let me start by reading the CV and job spec.

[Tool] Read
  Input: {"file_path": "candidates/cvs/sarah_chen.txt"}

[Tool] Read
  Input: {"file_path": "job_descriptions/senior_python_dev.md"}

[Agent] Now I have both files. Let me parse the CV into structured data.

[Tool] mcp__parse_cv__parse_cv
  Input: {"cv_text": "Sarah Chen\nSenior Software Engineer...(CV content)"}

[Agent] The parsed CV shows 8 years Python experience, FastAPI and Django
        expertise, and AWS deployment skills. Now I'll score against the
        job spec.

[Tool] mcp__score_candidate__score_candidate
  Input: {"candidate_data": {"name": "Sarah Chen", ...},
          "job_spec": {"title": "Senior Python Developer", ...}}

[Result] Candidate: Sarah Chen
         Score: 8.2/10
         Strengths: Strong Python depth (8 years), production FastAPI
         experience matches requirement, AWS deployment covers
         infrastructure needs.
         Gaps: No mention of GraphQL (listed as preferred),
         no open-source contributions noted.
         Recommendation: Strong match. Advance to technical interview.
```

The tool call order was: **Read (CV) → Read (job spec) → parse_cv → score_candidate → synthesis**.

Five turns total. Two Read calls to load both files, one parse_cv call to extract structured data, one score_candidate call to evaluate the match, and one final synthesis that combined everything into a recommendation.

## Why This Order?

The order was not random. It followed a **data dependency chain**: each tool call needed output from the previous one.

```
Read (CV file)          → raw text needed by parse_cv
Read (job spec file)    → structured spec needed by score_candidate
parse_cv(raw CV text)   → structured candidate data needed by score_candidate
score_candidate(data, spec) → scoring result needed for synthesis
synthesis              → final recommendation combining all results
```

The agent could not call `parse_cv` before reading the CV file, because `parse_cv` needs the CV text as input. It could not call `score_candidate` before both `parse_cv` and reading the job spec, because `score_candidate` needs structured candidate data AND the job specification.

The agent figured this out through reasoning, not through hardcoded sequencing. The SDK did not tell it which order to use. Claude read the prompt, identified the data dependencies, and chose the correct sequence.

"Wait, so basically... the agent planned the whole pipeline on its own? I didn't tell it to read the files first."

"You gave it a goal and the available tools," Emma said. "The reasoning about which tool to call first is the agent loop in action. That is what you would have had to implement yourself without the SDK."

## Confidence Calibration

How did your predictions compare?

**Question 1 (tool order)**: If you predicted Read → Read → parse_cv → score_candidate, you nailed it. Many people predict parse_cv first, forgetting that parse_cv needs the CV text as input, and the CV text lives in a file that must be read first. The two Read calls before any MCP tool call are the key insight.

**Question 2 (error handling)**: If parse_cv returns an error, the agent does not automatically retry. It receives the error as a tool result, reasons about it, and decides what to do. It might retry with different input, skip scoring and report the parse failure, or ask for clarification. The behavior depends on the error message and the agent's reasoning. There is no built-in retry mechanism in the SDK itself.

**Question 3 (turn count)**: Five turns is the correct answer if you count the final synthesis. Some people count four, treating only tool-calling turns as "turns." Both interpretations are reasonable, but the SDK counts every reasoning cycle, including the final one that produces the result.

If your confidence was high and your predictions were correct, your mental model of agent behavior is solid. If your confidence was high but your predictions were wrong, that mismatch is the most valuable signal: it reveals a gap between what you think agents do and what they actually do.

## James Reflects

James compared his predictions to the actual output. He had guessed parse_cv would be called first, without the Read steps.

"I forgot that parse_cv doesn't have access to the filesystem," James said. "It's an MCP tool. It takes text input. Someone has to read the file first and pass the text."

"That is the single most common prediction error for multi-tool agents," Emma said. "People think in terms of high-level goals: 'parse the CV.' But the agent thinks in terms of available actions: 'I need CV text, I have a Read tool, the file is at this path.' The gap between your goal-level thinking and the agent's action-level thinking is where prediction errors live."

James wrote in his notebook: *Predict at the action level, not the goal level. What data does each tool need? Where does that data come from?*

"Good rule," Emma said. "You will need it in the next lesson, where we trace every step of this execution in detail."

## Check Your Understanding

1. **MCP naming**: An MCP server named `hiring_tools` registers a tool called `generate_questions`. What string would you use in the `allowed_tools` list?

2. **Data dependencies**: Why must Read be called before parse_cv? Why must parse_cv be called before score_candidate? Trace the data flow.

3. **Agent autonomy**: James did not specify the tool call order in his code. How did the agent determine the correct sequence?

4. **Error behavior**: The Claude Agent SDK does not include automatic retry logic for failed tool calls. Who decides whether to retry: the SDK, the agent (Claude), or the developer's code?

---

**Next lesson**: You will take this same execution and trace every step in a structured trace table, then investigate what happens when tools return errors.
