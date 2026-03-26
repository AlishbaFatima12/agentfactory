---
sidebar_position: 2
title: "SDK Setup and First Agent Query"
description: "Install the Claude Agent SDK, configure authentication, and write your first query() call to summarize a HireFlow job description."
keywords:
  - claude agent sdk
  - query function
  - ClaudeAgentOptions
  - async generator
  - message types
  - agent setup
  - hireflow
chapter: 73
lesson: 2
duration_minutes: 25

skills:
  - name: "SDK Installation and Configuration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can install the Claude Agent SDK, set the API key, and run a query() call that produces output"
  - name: "Async Generator Consumption"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can write an async for loop that iterates over query() messages and handles each message type"
  - name: "Agent Options Configuration"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can explain what each ClaudeAgentOptions field controls and choose appropriate values for a given scenario"

learning_objectives:
  - objective: "Install the Claude Agent SDK and configure API key authentication"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Successful execution of a query() call that returns output"
  - objective: "Write an async for loop consuming the query() async generator and handling all three message types"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Code produces correct output distinguishing assistant, tool_use, and result messages"
  - objective: "Configure ClaudeAgentOptions with appropriate allowed_tools, permission_mode, max_turns, and cwd"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Given a scenario, student selects correct option values and explains why"

cognitive_load:
  new_concepts: 4
  assessment: "Four new concepts: query() async generator, ClaudeAgentOptions configuration, message type discrimination, and permission modes. The first two are the core patterns; the latter two are configuration details. Code examples build incrementally."

differentiation:
  extension_for_advanced: "After running the first query, modify the allowed_tools list to include only Read (removing Write). Predict what happens when you ask the agent to create a file. Run it and compare."
  remedial_for_struggling: "Focus on the async for loop pattern first. Ignore the options configuration until you can reliably print each message from a basic query() call. Then add options one at a time."
---

# SDK Setup and First Agent Query

## Installation

James opened a fresh terminal in his HireFlow project directory. The first step was straightforward.

```bash
pip install claude-agent-sdk
```

The package installed the SDK along with its dependencies. James verified the installation:

```bash
python -c "from claude_agent_sdk import query; print('SDK installed')"
```

The output confirmed the SDK was ready. No additional configuration files, no YAML manifests, no plugin registration. One package, one import.

## Authentication

The Claude Agent SDK authenticates through an environment variable: `ANTHROPIC_API_KEY`. James needed to set this before any SDK call would work.

```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

Emma looked over his shoulder. "Two rules for API keys. First, never put the key directly in your Python code. Environment variables keep secrets out of version control. Second, add `ANTHROPIC_API_KEY` to your `.gitignore` if you use a `.env` file, and verify it is excluded before every commit."

James nodded. He had learned this lesson the hard way on a previous project, and it was not an experience he wanted to repeat.

:::warning API Key Safety
Never hardcode your API key in source files. Never commit `.env` files to git. Before any commit, run `git diff --staged | grep -i "key\|secret\|token"` to verify no credentials are included. If you accidentally commit a key, rotate it immediately through the Anthropic console.
:::

## The query() Function

The core of the Claude Agent SDK is the `query()` function. It takes a prompt and an options object, then returns an **async generator** that yields messages as the agent works. Each message represents one step in the agent's reasoning process.

Here is James's first agent: a script that reads a job description file and summarizes it for a hiring manager.

```python
"""First HireFlow agent: summarize a job description for a hiring manager."""

import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, AssistantMessage, ResultMessage, TextBlock


async def summarize_job_description() -> None:
    """Read a job description file and produce a hiring manager summary."""
    options: ClaudeAgentOptions = ClaudeAgentOptions(
        allowed_tools=["Read"],
        permission_mode="acceptEdits",
        max_turns=5,
        cwd="/home/james/hireflow",
    )

    prompt: str = (
        "Read the file job_descriptions/senior_python_dev.md and summarize it "
        "for a hiring manager. Include: role title, key requirements, "
        "salary range if listed, and any unusual qualifications."
    )

    async for message in query(prompt=prompt, options=options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Agent thinking] {block.text}")
        elif message.type == "tool_use":
            print(f"[Tool call] {message.tool_name}({message.tool_input})")
        elif isinstance(message, ResultMessage):
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Result] {block.text}")


asyncio.run(summarize_job_description())
```

James stared at the code. "That is the whole agent?"

"That is the whole agent," Emma confirmed. "The SDK handles the agent loop internally. It sends the prompt to Claude, Claude decides to call the Read tool, the SDK dispatches the tool call, Claude receives the result, and Claude generates the summary. Your code just consumes the stream."

## Understanding ClaudeAgentOptions

Emma walked through each option James had configured.

**`allowed_tools`** controls which tools the agent can use. James set it to `["Read"]` because this agent only needs to read a file. It does not need Write, Bash, or any MCP tools. Restricting tools is a security practice: an agent that can only read files cannot accidentally delete them.

```python
# Only file reading: the agent cannot modify anything
allowed_tools: list[str] = ["Read"]

# Reading and writing: the agent can create files
allowed_tools: list[str] = ["Read", "Write"]

# All tools: use with caution
allowed_tools: list[str] = []  # Empty list means all tools available
```

**`permission_mode`** determines how the SDK handles tool approvals. Three modes exist:

| Mode                  | Behavior                                              | Use Case                            |
| --------------------- | ----------------------------------------------------- | ----------------------------------- |
| `"default"`           | Prompts for approval on each tool call                | Interactive debugging               |
| `"acceptEdits"`       | Auto-approves reads and writes, prompts for execution | Development workflows               |
| `"bypassPermissions"` | Auto-approves everything                              | Automated pipelines (use carefully) |

James chose `"acceptEdits"` because his agent only reads files. In a production HireFlow pipeline, where agents run unattended, he would need to think carefully about whether `"bypassPermissions"` was appropriate.

**`max_turns`** caps the number of reasoning cycles. Each turn is one complete cycle: Claude reasons, calls a tool (optionally), and receives the result. James set `max_turns=5` as a safety limit. A simple file-read-and-summarize task should finish in 2-3 turns. If it hits 5, something has gone wrong.

**`cwd`** sets the working directory for file operations. When the agent calls the Read tool with a relative path, the SDK resolves it against this directory. James pointed it at his HireFlow project root.

## The Three Message Types

Emma drew a quick diagram on the whiteboard.

```
query() yields three message types:

  "assistant"      → The agent is thinking or speaking
  "tool_use"       → The agent is calling a tool
  ResultMessage    → The agent has finished (check via isinstance)
```

"Every `query()` call produces a stream of messages," Emma explained. "The stream always ends with a `result` message. Between the start and the result, you see alternating `assistant` and `tool_use` messages as the agent reasons and acts."

For the job description summarizer, the expected message sequence looks like this:

| Order | Type        | Content                                           |
| ----- | ----------- | ------------------------------------------------- |
| 1     | `assistant` | Agent reasons: "I need to read the job spec file" |
| 2     | `tool_use`  | Calls Read with the file path                     |
| 3     | `assistant` | Agent processes file content and writes summary   |
| 4     | `result`    | Final summary for the hiring manager              |

James ran the script. The output matched the expected sequence: a brief reasoning step, a Read tool call, and then the summary.

"Wait, so basically... the SDK is doing the agent loop for me? It sends my prompt, Claude decides to read the file, the SDK executes the Read, sends the result back to Claude, and Claude writes the summary?"

"Yes. That loop is exactly what you would have had to build yourself without the SDK. The `query()` function encapsulates the entire cycle: prompt, reason, act, observe, repeat."

## Mini-Predict: What Messages Will This Produce?

Before running the next example, James wanted to test his understanding. Emma gave him a modified version of the agent:

```python
"""HireFlow agent: count candidates in a directory."""

import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, AssistantMessage, ResultMessage, TextBlock


async def count_candidates() -> None:
    """Count CV files in the candidates directory and report the total."""
    options: ClaudeAgentOptions = ClaudeAgentOptions(
        allowed_tools=["Bash"],
        permission_mode="acceptEdits",
        max_turns=5,
        cwd="/home/james/hireflow",
    )

    prompt: str = (
        "Count the number of PDF files in the candidates/cvs/ directory "
        "and tell me the total."
    )

    async for message in query(prompt=prompt, options=options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Agent] {block.text}")
        elif message.type == "tool_use":
            print(f"[Tool] {message.tool_name}({message.tool_input})")
        elif isinstance(message, ResultMessage):
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Done] {block.text}")


asyncio.run(count_candidates())
```

:::warning STOP AND PREDICT
Before reading further, answer these questions:

1. What tool will the agent call? (Hint: look at `allowed_tools`.)
2. What bash command will it likely use? Think of two plausible options.
3. How many messages will the stream contain? Count each assistant, tool_use, and result message.

Write down your predictions, then continue.
:::

The agent called Bash with `ls candidates/cvs/*.pdf | wc -l`. The stream contained four messages: one `assistant` (planning the approach), one `tool_use` (the Bash call), one `assistant` (interpreting the count), and one `result` (the final answer).

If you predicted `find candidates/cvs/ -name "*.pdf" | wc -l` as the bash command, that would also have been reasonable. The agent has discretion over which specific command to use. Your prediction about the message count matters more than the exact command.

## Emma's Configuration Review

Emma reviewed James's first agent script one more time.

"Three things I would change for production HireFlow code," she said.

**First, extract the options into a factory function.** Every HireFlow agent will share certain defaults (cwd, permission_mode). Repeating those values in every script creates maintenance debt.

```python
def hireflow_read_only_options(max_turns: int = 5) -> ClaudeAgentOptions:
    """Standard options for HireFlow agents that only read files."""
    return ClaudeAgentOptions(
        allowed_tools=["Read"],
        permission_mode="acceptEdits",
        max_turns=max_turns,
        cwd="/home/james/hireflow",
    )
```

**Second, handle the case where the agent hits max_turns without producing a result.** The current code silently stops iterating. A production agent should log a warning or raise an exception when the turn limit is reached without a final synthesis.

**Third, add error handling around the async generator.** Network failures, API rate limits, and authentication errors will raise exceptions. The current script lets those propagate as unhandled crashes.

"We will address all three in later lessons," Emma said. "For now, the important thing is that you understand the basic pattern: configure options, call query, consume the stream."

James saved the file. His first HireFlow agent was twelve lines of meaningful code (excluding imports and boilerplate). It could read a file, reason about its contents, and produce a structured summary. Not bad for a first attempt.

"Now I want to connect it to MCP tools," James said.

"Next lesson," Emma said. "First you need to understand what happens when the agent calls multiple tools in sequence. The order matters more than you think."

## Check Your Understanding

1. **Installation**: What single command installs the Claude Agent SDK? What environment variable must be set before any SDK call works?

2. **query() pattern**: The `query()` function returns what kind of Python object? How do you consume it?

3. **Message types**: Name the three message types that `query()` yields. Which one always appears last?

4. **ClaudeAgentOptions**: What does `max_turns=5` prevent? Why is this a safety measure rather than a performance optimization?

5. **Permission modes**: A HireFlow agent runs unattended in a production pipeline. It needs to read candidate files but must never execute bash commands. Which `permission_mode` would you choose, and what would you set `allowed_tools` to?

---

**Next lesson**: You will connect the agent to MCP tools and predict the order in which it calls `parse_cv`, `score_candidate`, and Read when processing a real candidate.
