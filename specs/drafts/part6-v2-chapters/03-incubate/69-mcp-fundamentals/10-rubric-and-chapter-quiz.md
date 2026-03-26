---
sidebar_position: 10
title: "Rubric and Chapter Quiz"
description: "Self-assess your MCP mastery across five dimensions and test your knowledge with a 15-question quiz covering architecture, primitives, implementation, and debugging."
chapter: 69
lesson: 10
duration_minutes: 20
keywords:
  [
    self-assessment,
    rubric,
    mcp quiz,
    chapter review,
    proficiency levels,
    mcp architecture,
    json-rpc,
    fastmcp,
    debugging,
  ]
skills:
  - name: "MCP Self-Assessment"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "2.4 Netiquette"
    measurable_at_this_level: "Accurately rate own proficiency across five dimensions of MCP knowledge using the rubric criteria"
  - name: "MCP Comprehensive Knowledge"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Answer 12 or more quiz questions correctly, demonstrating understanding of MCP architecture, primitives, implementation, and debugging"
learning_objectives:
  - objective: "Self-assess proficiency across five MCP dimensions (prediction accuracy, trace quality, server building, debugging, independent make) using a structured rubric"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student places themselves in Developing/Competent/Fluent for each dimension and identifies areas for review"
  - objective: "Demonstrate comprehensive understanding of MCP fundamentals by answering 15 multiple-choice questions covering architecture, protocol, primitives, implementation, and debugging"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student scores 12/15 or higher on the chapter quiz"
cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This lesson is purely assessment and reflection on material from Lessons 1-9. Cognitive load is low; the challenge is retrieval and application of prior knowledge."
differentiation:
  extension_for_advanced: "For each quiz question you got wrong, write a corrected version of the wrong answer that explains why it fails. This forces deeper analysis of the misconception."
  remedial_for_struggling: "If you score below 10/15, go back to the specific lessons referenced in the wrong-answer explanations. Work through the STOP_AND_PREDICT exercises in those lessons again before retaking the quiz."
---

# Rubric and Chapter Quiz

You have covered MCP from motivation through implementation. This lesson has two parts: a self-assessment rubric that helps you identify where you are strong and where you need more practice, and a 15-question quiz that tests your understanding of the chapter's core concepts.

## Part A: Self-Assessment Rubric

Rate yourself honestly on each dimension. The goal is not to score "Fluent" on everything; the goal is to know exactly where you stand so you can prioritize your review.

| Dimension               | Developing                                                                  | Competent                                                                                                               | Fluent                                                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Prediction Accuracy** | Predictions wrong more than 50% of the time                                 | Predictions correct 50-80% of the time, with reasoning that connects to protocol concepts                               | Predictions correct more than 80% of the time with calibrated confidence (you know when you are guessing)                                                                      |
| **Trace Quality**       | Cannot trace a `tools/call` request through the protocol layers             | Traces the request path with minor gaps (e.g., knows JSON-RPC wraps the call but unsure about transport encoding)       | Traces the complete request lifecycle: client sends JSON-RPC over transport, server receives, routes to handler, executes, returns JSON-RPC response                           |
| **MCP Server Building** | Needs AI help to register a single tool with `@mcp.tool()`                  | Can build a server with tools, resources, and prompts independently; may need help with edge cases or advanced patterns | Extends servers with input validation, error handling, multiple transport options, and structured error responses                                                              |
| **Debugging Skill**     | Cannot identify why a tool call fails without someone pointing to the error | Uses the Inspector to diagnose common errors; can read JSON-RPC error codes and apply the decision tree                 | Builds a systematic debugging workflow: starts with the decision tree, uses Inspector to isolate layers, reads error codes to classify, and fixes root causes without guessing |
| **Independent Make**    | Capstone needed significant AI help on the spec and implementation          | Spec written independently; implementation had 1-2 issues caught by the discipline stack or Inspector                   | Spec and implementation both clean; server passes all eight success criteria on first attempt                                                                                  |

### How to Use This Rubric

1. **Read each row** and find the column that most honestly describes your current ability.
2. **Mark your level** for each dimension.
3. **Identify patterns**: Are you stronger on conceptual understanding (Prediction, Trace) but weaker on applied skills (Building, Make)? Or the reverse?
4. **Plan your review**: For any dimension where you rated "Developing," go back to the relevant lesson and work through the exercises again.

| If Developing In... | Review These Lessons                                                             |
| ------------------- | -------------------------------------------------------------------------------- |
| Prediction Accuracy | Lessons 2-3 (architecture and primitives), redo the STOP_AND_PREDICT exercises   |
| Trace Quality       | Lesson 2 (JSON-RPC format), Lesson 4 (server implementation with transport)      |
| MCP Server Building | Lessons 4-5 (FastMCP tools, resources, prompts), Lesson 7 (Modify exercises)     |
| Debugging Skill     | Lesson 8 (Inspector workflow, error codes, decision tree)                        |
| Independent Make    | Lesson 9 (capstone); consider redoing the capstone with a different server theme |

### Reflection Prompt

Answer these three questions before moving to the quiz:

1. **Hardest concept**: What was the hardest concept in this chapter? Was it the protocol layer (JSON-RPC, transports), the primitives (tools vs resources vs prompts), or the implementation (FastMCP decorators, type annotations)?

2. **Primitive confidence**: Which primitive (tools, resources, prompts) do you feel most confident about? Which one is still fuzzy? What specific aspect of the fuzzy one confuses you?

3. **Next step**: If you had 30 more minutes to spend on this chapter, where would you spend them? That answer tells you what you have not yet mastered.

> **James:** I rated myself Competent on everything except Debugging. I keep forgetting the error codes.
>
> **Emma:** Do you need to memorize them?
>
> **James:** Probably not. I need to know where to look them up and what category each one maps to.
>
> **Emma:** That is the difference between Developing and Competent for debugging. Developing means you cannot identify the category. Competent means you can look it up and apply the decision tree. Fluent means you recognize the pattern without looking.
>
> **James:** So Competent is fine for now. I will get to Fluent through practice on the next chapters.
>
> **Emma:** Exactly. This rubric is a snapshot, not a verdict.

---

## Part B: Chapter Quiz

15 multiple-choice questions. One correct answer per question. After answering all 15, check your answers against the key at the end.

---

### Question 1: Host-Client-Server Roles

In the MCP architecture, which component is responsible for spawning and managing client instances?

**A)** The MCP server
**B)** The host application
**C)** The JSON-RPC transport layer
**D)** The tool decorator

<details>
<summary>Answer</summary>

**B) The host application.**

The host (e.g., Claude Desktop, an IDE) spawns one or more MCP clients, each of which connects to a server. The host manages the lifecycle: it starts clients, routes requests, and enforces security policies. The server does not know about the host; it only communicates with its client. The transport layer moves messages but does not manage client instances. The tool decorator registers functions on the server, not client management.

</details>

---

### Question 2: Host Security Boundary

A single host application connects to three MCP servers: a GitHub server, a database server, and a filesystem server. What is the host's primary security responsibility?

**A)** Encrypting all JSON-RPC messages
**B)** Ensuring servers cannot communicate with each other directly
**C)** Requiring authentication tokens for every tool call
**D)** Compiling server code before execution

<details>
<summary>Answer</summary>

**B) Ensuring servers cannot communicate with each other directly.**

The host enforces isolation between servers. Each server runs as a separate process connected through its own client. The host prevents the GitHub server from accessing the database server's data or the filesystem server's files. This isolation is a core security property of the MCP architecture. Encryption (A) is a transport concern, not a host responsibility. Authentication (C) is server-specific. Compilation (D) is not part of the protocol.

</details>

---

### Question 3: JSON-RPC 2.0 Format

Which field in a JSON-RPC 2.0 request distinguishes it from a notification?

**A)** The `method` field
**B)** The `params` field
**C)** The `id` field
**D)** The `jsonrpc` field

<details>
<summary>Answer</summary>

**C) The `id` field.**

A JSON-RPC request includes an `id` field that the server echoes back in its response, allowing the client to match responses to requests. A notification is the same structure but without an `id` field, meaning the sender does not expect a response. The `method` field (A) is present in both requests and notifications. The `params` field (B) is optional in both. The `jsonrpc` field (D) is always `"2.0"` in both.

</details>

---

### Question 4: Tool Control Model

In MCP, tools are described as "model-controlled." What does this mean in practice?

**A)** The AI model defines what tools exist on the server
**B)** The AI model decides when and how to invoke tools during a conversation
**C)** The AI model writes the tool implementation code
**D)** The AI model manages the server process lifecycle

<details>
<summary>Answer</summary>

**B) The AI model decides when and how to invoke tools during a conversation.**

"Model-controlled" means the AI model autonomously decides whether to call a tool based on the user's request and the tool's description. The server defines what tools exist (A is wrong). The developer writes the implementation (C is wrong). The host manages the process lifecycle (D is wrong). The model's role is selection and invocation: it reads tool descriptions from `tools/list` and decides which tool to call with what arguments.

</details>

---

### Question 5: Resource Control Model

A resource at `candidates://profiles/C001` returns a candidate profile. Who decides when this resource is read?

**A)** The AI model, automatically based on the conversation
**B)** The server, on a scheduled interval
**C)** The application or user interface, typically through a UI action
**D)** The JSON-RPC transport layer, based on message priority

<details>
<summary>Answer</summary>

**C) The application or user interface, typically through a UI action.**

Resources are "app-controlled." The host application (or its UI) decides when to read a resource and attach its content to the model's context. Unlike tools, the model does not autonomously decide to read resources during generation. The application might expose resources as attachable context in a sidebar, letting the user choose which candidate profiles to include. The server (B) serves resources on request but does not push them. The transport (D) moves data but does not make control decisions.

</details>

---

### Question 6: Prompt Control Model

An MCP server exposes a prompt called `screening_summary`. What triggers its use?

**A)** The AI model calls it automatically when relevant
**B)** The server pushes it to the client at connection time
**C)** The user explicitly selects it, often through a slash command or menu
**D)** The transport layer injects it into every request

<details>
<summary>Answer</summary>

**C) The user explicitly selects it, often through a slash command or menu.**

Prompts are "user-controlled." The user (not the model, not the server) decides when to invoke a prompt template. Common UX patterns include slash commands (`/screening_summary`) or dropdown menus in the client UI. The model (A) controls tools, not prompts. The server (B) makes prompts available via `prompts/list` but does not push them. The transport (D) does not inject content.

</details>

---

### Question 7: FastMCP Tool Registration

Given this code:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("HireFlow")

@mcp.tool()
def parse_cv(cv_text: str) -> dict:
    """Extract structured data from a CV."""
    return {"name": "Alice", "skills": ["Python"]}
```

What name will appear in the `tools/list` response?

**A)** `"HireFlow.parse_cv"`
**B)** `"parse_cv"`
**C)** `"parseCv"`
**D)** `"Extract structured data from a CV."`

<details>
<summary>Answer</summary>

**B) `"parse_cv"`.**

When `@mcp.tool()` is used without a `name` argument, FastMCP uses the Python function name as the tool name. The server name ("HireFlow") is not prefixed to tool names (A is wrong). The function name is not converted to camelCase (C is wrong). The docstring becomes the tool's description, not its name (D is wrong).

</details>

---

### Question 8: FastMCP Resource URI Template

What does the `{candidate_id}` portion of this resource URI indicate?

```python
@mcp.resource("candidates://profiles/{candidate_id}")
def get_candidate_profile(candidate_id: str) -> str:
    ...
```

**A)** A literal string `{candidate_id}` in the URI
**B)** A variable segment that matches any value and is passed as a function parameter
**C)** An optional query parameter appended to the URI
**D)** A JSON object embedded in the URI path

<details>
<summary>Answer</summary>

**B) A variable segment that matches any value and is passed as a function parameter.**

The curly brace syntax `{candidate_id}` defines a URI template. When a client reads `candidates://profiles/C001`, FastMCP extracts `"C001"` as the value of `candidate_id` and passes it to the function. It is not a literal string (A). It is a path segment, not a query parameter (C). It is a simple string value, not a JSON object (D).

</details>

---

### Question 9: FastMCP Prompt with Message Objects

What does this prompt return?

```python
from mcp.server.fastmcp.prompts import base

@mcp.prompt(title="Interview Prep")
def interview_prep(role: str) -> list[base.Message]:
    return [
        base.UserMessage(f"I am interviewing for a {role} position."),
        base.AssistantMessage("I will help you prepare. What areas concern you most?"),
    ]
```

**A)** A single string containing both messages concatenated
**B)** A list of structured message objects with roles and content, representing a multi-turn conversation
**C)** A JSON-RPC notification sent to the client
**D)** An error, because prompts must return strings

<details>
<summary>Answer</summary>

**B) A list of structured message objects with roles and content, representing a multi-turn conversation.**

Prompts can return either a plain string or a `list[base.Message]`. When returning Message objects, each message has a role (user or assistant) and content. This allows the prompt to define a multi-turn conversation template. It is not concatenated into a single string (A). It is returned as a `prompts/get` response, not a notification (C). Both return types are valid (D is wrong).

</details>

---

### Question 10: Transport Layer Selection

A development team wants to run an MCP server that multiple clients can connect to simultaneously over a network. Which transport should they choose?

**A)** stdio
**B)** streamable-http
**C)** SSH tunnel
**D)** WebSocket only

<details>
<summary>Answer</summary>

**B) streamable-http.**

Stdio transport creates a one-to-one connection between a single client and server process through standard input/output streams. It cannot handle multiple simultaneous clients. Streamable HTTP runs the server on a network port, allowing multiple clients to connect over HTTP. SSH tunnels (C) are not an MCP transport type. WebSocket (D) is not a standalone MCP transport option; the streamable-http transport handles bidirectional communication.

</details>

---

### Question 11: Configuration Environment Variables

In this configuration, what happens if `DATABASE_URL` is not set in the host environment?

```json
{
  "mcpServers": {
    "hireflow": {
      "command": "uv",
      "args": ["run", "hireflow_server.py"],
      "env": {
        "DATABASE_URL": "${DATABASE_URL}"
      }
    }
  }
}
```

**A)** The server receives `DATABASE_URL` set to the literal string `"${DATABASE_URL}"`
**B)** The client refuses to start the server and reports a configuration error
**C)** The server receives `DATABASE_URL` set to an empty string or undefined
**D)** The server starts but crashes immediately with an import error

<details>
<summary>Answer</summary>

**C) The server receives `DATABASE_URL` set to an empty string or undefined.**

The `${VAR_NAME}` syntax interpolates the host environment variable at launch time. If the variable is not set, the server process receives an empty or missing value. The literal string is not passed through (A is wrong). Most MCP clients do not validate env vars before launching (B is wrong). The crash behavior (D) depends on the server code, not the configuration; some servers handle missing env vars gracefully.

</details>

---

### Question 12: MCP Inspector Purpose

What is the primary advantage of testing an MCP server with the Inspector versus testing through Claude Code?

**A)** The Inspector runs tests faster
**B)** The Inspector removes the AI model from the loop, isolating server behavior
**C)** The Inspector automatically fixes bugs it finds
**D)** The Inspector can connect to servers the client cannot reach

<details>
<summary>Answer</summary>

**B) The Inspector removes the AI model from the loop, isolating server behavior.**

When a tool call fails through Claude Code, the failure could be in the model's parameter generation, the transport layer, or the server logic. The Inspector eliminates the first variable: you manually specify parameters and see exactly what the server returns. Speed (A) is not the primary advantage. The Inspector does not fix bugs (C). Both the Inspector and Claude Code connect to servers the same way (D).

</details>

---

### Question 13: JSON-RPC Error Code Classification

A tool call returns JSON-RPC error code -32602. What category of error is this?

**A)** Parse error: the JSON message was malformed
**B)** Method not found: the requested method does not exist on the server
**C)** Invalid params: the parameters provided do not match the method's expected schema
**D)** Internal error: the server encountered an unhandled exception

<details>
<summary>Answer</summary>

**C) Invalid params: the parameters provided do not match the method's expected schema.**

JSON-RPC error code -32602 means the parameters are invalid. This could mean wrong types (string instead of integer), missing required fields, or extra unexpected fields. Parse error is -32700 (A is wrong). Method not found is -32601 (B is wrong). Internal error is -32603 (D is wrong).

</details>

---

### Question 14: Debugging Decision Tree

A developer's MCP server starts successfully, and the Inspector shows all tools registered. However, when they call `score_candidate` with valid parameters, they get an Internal Error (-32603). Where should they look next?

**A)** The configuration file for missing environment variables
**B)** The transport layer for dropped messages
**C)** The tool's business logic for unhandled exceptions
**D)** The decorator registration for incorrect parameter types

<details>
<summary>Answer</summary>

**C) The tool's business logic for unhandled exceptions.**

Following the decision tree: the server starts (infrastructure is fine), tools are listed (registration is fine), but a call fails with -32603 (Internal Error). This means the JSON-RPC request reached the server, the server found the tool, and the parameters passed schema validation, but the function body raised an exception. The developer should add logging to the `score_candidate` function and look for unhandled cases (division by zero, missing dictionary keys, None values). Configuration (A) and transport (B) are ruled out because the server started and tools are listed. The decorator (D) is ruled out because the tool was found and parameters were accepted.

</details>

---

### Question 15: Error Taxonomy Classification

James registers a tool with `@mcp.tool(name="parseCv")`. The server starts correctly, and Inspector shows the tool. But when Claude Code receives a user request to "parse this CV," it does not select the `parseCv` tool. What type of error is this?

**A)** Logic Error: the tool's implementation has a bug
**B)** Data/Edge-Case Error: the input data is malformed
**C)** Specification Error: the code works correctly but the naming convention does not match client expectations
**D)** Orchestration Error: the server failed to start

<details>
<summary>Answer</summary>

**C) Specification Error: the code works correctly but the naming convention does not match client expectations.**

The server is running, the tool is registered, and it would execute correctly if called. The problem is that the tool's name (`parseCv`) uses camelCase, which is unusual for Python tools. The AI model may not confidently match a user request about "parsing a CV" to a camelCase tool name. The code has no bugs (A is wrong). The input is not the problem (B is wrong). The server started fine (D is wrong). This is a specification-level mismatch between the tool's interface and client expectations.

</details>

---

## Quiz Scoring

| Score   | Interpretation                                                                                                                               |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 13-15   | Strong understanding of MCP fundamentals. You are ready for Chapter 70.                                                                      |
| 10-12   | Good foundation with some gaps. Review the lessons referenced in the questions you missed.                                                   |
| 7-9     | Several concepts need reinforcement. Focus on the areas where you got 2+ questions wrong in the same category.                               |
| Below 7 | Revisit the chapter from Lesson 1. Work through the STOP_AND_PREDICT exercises and the Modify exercises (Lesson 7) before retaking the quiz. |

### Question-to-Lesson Mapping

If you missed a question, use this table to find the lesson that covers that topic:

| Question | Topic                                           | Review Lesson      |
| -------- | ----------------------------------------------- | ------------------ |
| 1-2      | Host-Client-Server architecture                 | Lesson 2           |
| 3        | JSON-RPC 2.0 format                             | Lesson 2           |
| 4-6      | Primitive control models (tool/resource/prompt) | Lesson 3           |
| 7-8      | FastMCP tool and resource implementation        | Lessons 4-5        |
| 9        | FastMCP prompt with Message objects             | Lesson 5           |
| 10       | Transport layers (stdio vs streamable-http)     | Lesson 2, Lesson 4 |
| 11-12    | Configuration and Inspector                     | Lesson 8           |
| 13-14    | Error codes and debugging                       | Lesson 8           |
| 15       | Error taxonomy classification                   | Lesson 8           |

> **James:** I got question 5 wrong. I thought the model could read resources on its own.
>
> **Emma:** That is the most common misconception. What is the difference between a tool and a resource?
>
> **James:** Tools are model-controlled; the model calls them during generation. Resources are app-controlled; the application decides when to attach them to the context.
>
> **Emma:** And why does that distinction matter for HireFlow?
>
> **James:** Because I do not want the model grabbing candidate profiles without the recruiter deciding which ones to include. The recruiter picks the profiles; the model analyzes them.
>
> **Emma:** Now you understand control models. Not as abstract categories, but as design decisions about who is in charge.

## Glossary

| Term                | Definition                                                                                                              | First Introduced |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------- |
| **MCP**             | Model Context Protocol: an open standard for connecting AI agents to tools, data, and prompts through a single protocol | Lesson 1         |
| **Host**            | The application that manages MCP client lifecycles (e.g., Claude Code, Claude Desktop)                                  | Lesson 2         |
| **Client**          | A protocol endpoint inside the host that maintains a 1:1 connection with one MCP server                                 | Lesson 2         |
| **Server**          | A lightweight process that exposes tools, resources, and prompts to clients via JSON-RPC 2.0                            | Lesson 2         |
| **JSON-RPC 2.0**    | The message format MCP uses: every request has `jsonrpc`, `method`, `params`, and `id` fields                           | Lesson 2         |
| **Tool**            | A model-controlled primitive: the AI model discovers tools via `tools/list` and invokes them via `tools/call`           | Lesson 3         |
| **Resource**        | An app-controlled primitive: the host application decides which resources to attach to the model's context              | Lesson 3         |
| **Prompt**          | A user-controlled primitive: the user selects prompt templates that structure the model's task                          | Lesson 3         |
| **FastMCP**         | The Python SDK class for building MCP servers (`from mcp.server.fastmcp import FastMCP`)                                | Lesson 4         |
| **stdio transport** | Communication via standard input/output streams; the host launches the server as a child process                        | Lesson 4         |
| **Streamable HTTP** | Communication via HTTP; the server runs independently and clients connect over the network                              | Lesson 4         |
| **MCP Inspector**   | A browser-based debugging tool (`mcp dev server.py`) for testing MCP servers without an AI model                        | Lesson 8         |

## Chapter Complete

You have covered MCP from the integration explosion problem through architecture, primitives, implementation, configuration, debugging, and a full capstone build. The protocol you learned here is the foundation for every HireFlow FTE agent in the chapters ahead. Each agent you build in Chapters 70-81 will connect to shared tools, resources, and prompts through MCP servers using the patterns you practiced.

## Backward References

- **Lesson 1** introduced the integration explosion problem that MCP solves. Questions 1-2 test whether you retained the architectural solution.
- **Lesson 3** introduced the three control models. Questions 4-6 test your understanding of who decides when each primitive is used.
- **Lesson 8** introduced the debugging workflow. Questions 11-15 test whether you can apply that workflow to diagnose real scenarios.
