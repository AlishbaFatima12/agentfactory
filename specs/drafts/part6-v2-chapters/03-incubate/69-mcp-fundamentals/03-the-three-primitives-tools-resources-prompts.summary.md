---
title: "The Three Primitives: Tools, Resources, Prompts - Summary"
chapter: 69
lesson: 3
---

## Key Concepts

- **Tools (Model-Controlled)**: Functions the AI model can decide to call autonomously. Discovered via `tools/list`, executed via `tools/call`. Can change state. Highest risk.
- **Resources (Application-Controlled)**: Read-only data exposed through URIs. Discovered via `resources/list`, read via `resources/read`. The host application decides when to load them. Cannot change state.
- **Prompts (User-Controlled)**: Reusable templates the human user selects (e.g., slash commands, menus). Discovered via `prompts/list`, retrieved via `prompts/get`. Package expert knowledge into interaction patterns.
- **Control Model**: The entity with the most context about a capability type controls it. The model understands when a function should be called. The application understands what data is relevant. The user understands their intent.

## Mental Models

- Tools = power tools (worker decides when to use). Resources = reference manuals (supervisor puts them on the desk). Prompts = work order forms (customer fills them out).
- Decision rule: "Who should decide when this capability gets used?" That answer tells you the primitive.

## Common Mistakes

- Putting the tool name in the `method` field of `tools/call`. The method is always `"tools/call"`; the tool name goes in `params.name`.
- Exposing read-only data lookups as tools instead of resources, causing the model to call them autonomously and waste tokens.
- Thinking the three primitives categorize data types. They categorize control: who triggers invocation.

## Quick Reference

| Primitive | Controlled By | Discovery        | Execution        | Can Change State? |
| :-------- | :------------ | :--------------- | :--------------- | :---------------- |
| Tools     | Model         | `tools/list`     | `tools/call`     | Yes               |
| Resources | Application   | `resources/list` | `resources/read` | No                |
| Prompts   | User          | `prompts/list`   | `prompts/get`    | No                |

Rule of thumb: changes state = tool. Read-only data = resource. Reusable interaction pattern user triggers = prompt.

## Connection to Next Lesson

Lesson 4 moves from reading the protocol to implementing it. You build your first FastMCP server using the `@mcp.tool()` decorator and trace the full request lifecycle.
