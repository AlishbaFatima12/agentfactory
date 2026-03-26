---
title: "Why MCP: The Integration Explosion - Summary"
chapter: 69
lesson: 1
---

## Key Concepts

- **Integration Explosion**: When N agents connect to M tools without a shared protocol, the total custom integrations required is N \* M. This grows multiplicatively, making maintenance and scaling impractical.
- **Protocol Solution**: A shared protocol (MCP) converts O(N \* M) integration work into O(N + M) component work. Each agent implements the protocol once; each tool implements it once. Addition replaces multiplication.
- **Model Context Protocol (MCP)**: An open standard defining how AI applications connect to external data sources and tools. It specifies a message format (JSON-RPC 2.0), three capability types (Tools, Resources, Prompts), a role model (Host, Client, Server), and transport options (stdio, Streamable HTTP).

## Mental Models

- The USB analogy: before USB, every peripheral needed its own connector. USB standardized the interface so any device works with any computer. MCP does the same for AI agents and tools.
- MCP is a protocol (a contract), not a framework, library, or SDK. The Python SDK is an implementation of the protocol, not the protocol itself.

## Common Mistakes

- Confusing "well-organized wrappers" with a protocol solution. Twelve well-structured wrappers are still twelve custom integrations.
- Thinking MCP is a specific library you install rather than a set of rules for how two programs communicate.

## Quick Reference

| Agents (N) | Tools (M) | Without Protocol (N \* M) | With Protocol (N + M) |
| :--------: | :-------: | :-----------------------: | :-------------------: |
|     4      |     3     |            12             |           7           |
|     10     |     8     |            80             |          18           |

Three questions MCP answers: Discovery (what is available?), Invocation (how to execute?), Response (how do results come back?).

## Connection to Next Lesson

Lesson 2 opens the MCP "contract" and examines the three-role architecture (Host, Client, Server) and the JSON-RPC 2.0 message format that makes the protocol work.
