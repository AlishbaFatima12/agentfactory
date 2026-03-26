---
sidebar_position: 1
title: "Why Not Just Call the API?"
description: "Discover why raw API calls produce fragile agents and what problems Agent SDKs solve."
chapter: 72
lesson: 1
duration_minutes: 15
keywords:
  [agent sdk, api calls, agent loop, complexity explosion, tool dispatch]

skills:
  - name: "SDK Motivation"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can explain why raw API calls are insufficient for production agent systems"

learning_objectives:
  - objective: "Identify the coordination problems that arise when building an agent loop from raw API calls"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Guided Discovery dialogue analysis"
  - objective: "Explain why agent development is a coordination problem, not a coding problem"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Reflection in Applied Exercise"

cognitive_load:
  new_concepts: 2
  assessment: "Low. Builds on MCP experience from Ch 69-71 and skill validation from Ch 68. Uses familiar HireFlow context."

differentiation:
  extension_for_advanced: "Consider how microservice orchestration frameworks (Kubernetes, Temporal) solve analogous coordination problems for traditional services."
  remedial_for_struggling: "Review Ch 69 Lesson 1 to recall how MCP servers expose tools. The agent loop this lesson describes is what calls those tools."
---

# Why Not Just Call the API?

James had a plan.

He had been staring at his MCP servers for two days. The Resume Screener server worked. He could call `parse_cv` and get structured candidate data back. He could call `score_candidate` and get a numeric score with reasoning. The Job Spec Writer server could take a hiring manager's brief and produce a complete job specification. Four skills, three MCP servers, all validated through simulation in Chapter 68.

"I know what to do next," he told Emma. "I'll write a Python script that calls the Anthropic API, sends messages, and dispatches tool calls to my MCP servers. A loop. Reason, act, observe, repeat. We covered this in Chapter 61."

Emma leaned back. "Show me."

## James's First Attempt

James opened his editor and started writing. The idea was straightforward: send a message to the API, check if the response contains tool calls, execute them, send the results back, and keep going until the model says it is done.

```python
import anthropic
import json

client = anthropic.Anthropic()
messages: list[dict] = []

def run_agent(user_request: str) -> str:
    messages.append({"role": "user", "content": user_request})

    while True:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4096,
            system="You are a recruitment assistant.",
            messages=messages,
            tools=[
                {
                    "name": "parse_cv",
                    "description": "Parse a CV file and extract structured candidate data.",
                    "input_schema": {
                        "type": "object",
                        "properties": {
                            "file_path": {"type": "string"}
                        },
                        "required": ["file_path"]
                    }
                }
            ]
        )

        # Append assistant response
        messages.append({"role": "assistant", "content": response.content})

        # Check if we are done
        if response.stop_reason == "end_turn":
            # Extract text from response
            for block in response.content:
                if block.type == "text":
                    return block.text
            return ""

        # Handle tool calls
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = call_mcp_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": result
                })

        messages.append({"role": "user", "content": tool_results})
```

He sat back. "There. Agent loop. Done."

"Run it," Emma said.

James ran it. It worked for a simple request: "Parse this CV." The API called `parse_cv`, got the result, and produced a summary.

"See?" James grinned.

"Now parse fifty CVs," Emma said. "One has a corrupted PDF. One is in French. One is a 200-page thesis with a CV buried on page four."

## The Complexity Explosion

James tried it. The corrupted PDF crashed his `call_mcp_tool` function. No error handling, so the entire loop died. He added a try-except block. He ran it again. The French CV came back with garbled field names. He added a validation step. The 200-page thesis made the API return a response that exceeded his `max_tokens` setting. He increased the limit. That made the next three calls expensive.

An hour later, he had 47 lines of error handling, a growing list of edge cases, and a sinking feeling.

"How many lines now?" Emma asked.

James counted. "About 180. And I have only one tool. I need four."

"What about message history?"

James looked at his `messages` list. It had been growing with every API call. After fifty CVs, it held thousands of tokens. The API was slowing down. He needed to truncate old messages, but which ones were safe to remove? If he cut the wrong context, the model would lose track of which candidates it had already scored.

"I need a memory manager," James said.

"What about retries? The API rate-limits you at high volume."

"I need a retry handler with backoff."

"What about observability? When candidate 37 gets a wrong score, how do you debug it?"

"I need logging. And tracing. And probably a way to replay individual calls."

James stared at his screen. The plan that had seemed so simple twenty minutes ago now had a dozen unsolved problems growing in every direction.

"Wait, so basically I'm not writing an agent," he said slowly. "I'm writing a framework. A bad one. One that handles exactly my use case and nothing else."

Emma almost smiled. "Now you see it."

## The Coordination Problem

"Here is what happened," Emma said. She drew a line down the middle of the whiteboard. On the left she wrote **What you want to think about**. On the right she wrote **What you are actually spending time on**.

| What you want to think about           | What you are actually spending time on |
| -------------------------------------- | -------------------------------------- |
| Which candidates match the job spec    | Message history management             |
| How to score a CV against requirements | Tool dispatch and error handling       |
| What makes a good interview question   | Retry logic and rate limiting          |
| When to escalate to a human reviewer   | Token counting and context truncation  |

"Every line on the right side," Emma said, "is infrastructure. It has nothing to do with recruitment. It has nothing to do with your skills or your MCP servers. It is plumbing."

"And every SDK solves the plumbing," James said.

"Every SDK solves the plumbing so you can focus on the left column. That is the entire value proposition. Not magic. Not AI. Plumbing management."

:::tip Quick Recall
In Chapter 61, you learned that an agent uses a language model in a loop: reason, act, observe, repeat. In Chapter 69, you built MCP servers that give agents tools to act with. The missing piece is the loop itself: who manages the reasoning cycle, dispatches tool calls, handles errors, and tracks state? That is what an Agent SDK does.
:::

## What Comes Next

James's raw API attempt was not wasted. It showed him exactly what an Agent SDK needs to handle. In the next lesson, Emma breaks those problems into six categories and shows how SDKs solve each one. The plumbing has a name, and it has layers.
