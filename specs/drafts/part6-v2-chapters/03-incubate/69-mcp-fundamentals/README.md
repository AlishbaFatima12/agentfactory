---
sidebar_position: 69
title: "MCP Fundamentals"
description: "Master the Model Context Protocol: the standard that eliminates the integration explosion by connecting AI agents to tools, resources, and prompts through a single protocol."
---

# Chapter 69: MCP Fundamentals

## Overview

Your HireFlow agents need to interact with databases, file systems, and external APIs. Without a standard protocol, each agent needs a custom integration for each tool: four agents times three tools equals twelve custom connectors. The **Model Context Protocol (MCP)** collapses that multiplication into addition: four agent clients plus three tool servers equals seven components. This chapter teaches you MCP from first principles through hands-on implementation.

## Prerequisites

Before starting this chapter, you should have:

- **Completed Part 4**: Python functions, type annotations, `async`/`await` basics
- **Completed the Discipline Stack** (Part 1): Git workflow, markdown fluency, file system comfort
- **Completed Chapter 67**: You wrote 4 agent skills (Job Spec Writer, Resume Screener, Interview Q Generator, Candidate Summarizer)
- **Completed Chapter 68**: You validated those skills through simulation
- **Read Chapter 61**: The Agent Factory paradigm and why agents need shared infrastructure

## Setup

Install the MCP Python SDK in your HireFlow project:

```bash
cd hireflow
uv add "mcp[cli]"
```

This installs both the SDK (`from mcp.server.fastmcp import FastMCP`) and the CLI tools (`mcp dev` for the Inspector).

## What You Will Learn

By the end of this chapter, you will be able to:

1. Explain why MCP exists and how it solves the integration explosion
2. Describe the Host-Client-Server architecture and JSON-RPC 2.0 message format
3. Distinguish the three MCP primitives (Tools, Resources, Prompts) and their control models
4. Build an MCP server using FastMCP with tool, resource, and prompt decorators
5. Configure MCP clients and debug connection issues with the MCP Inspector
6. Construct a complete candidate profiles MCP server for HireFlow

## Lessons

| #   | Lesson                                                                                                  | Duration | Topic                                                    |
| --- | ------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------- |
| 01  | [Why MCP: The Integration Explosion](./01-why-mcp-the-integration-explosion.md)                         | 20 min   | Motivation, O(n\*m) to O(n+m), HireFlow scenario         |
| 02  | [MCP Architecture: Host, Client, Server](./02-mcp-architecture-host-client-server.md)                   | 25 min   | Three-role architecture, JSON-RPC 2.0 message format     |
| 03  | [The Three Primitives: Tools, Resources, Prompts](./03-the-three-primitives-tools-resources-prompts.md) | 25 min   | Primitive types, control models, discovery and execution |
| 04  | Building Your First MCP Server                                                                          | 30 min   | FastMCP, @mcp.tool(), transport configuration            |
| 05  | Resources and Prompts in FastMCP                                                                        | 30 min   | @mcp.resource(), @mcp.prompt(), URI templates            |
| 06  | MCP Parsons Problem                                                                                     | 15 min   | Reorder 7 lines to build a working server                |
| 07  | Modify Exercises: Extend the Server                                                                     | 35 min   | Three progressive modifications with mini-Predict        |
| 08  | Configuring and Debugging MCP                                                                           | 25 min   | JSON config, MCP Inspector, common errors                |
| 09  | Make: Expose Resume Screener as MCP Server                                                              | 40 min   | Capstone: wrap C7 skill in MCP tools with TDG            |
| 10  | Rubric and Chapter Quiz                                                                                 | 20 min   | Self-assessment rubric, 15-question quiz                 |

## Chapter Type

**PRIMM-AI+** (Predict, Run, Investigate, Modify, Make with AI-assisted investigation)

## HireFlow Connection

This chapter builds the protocol layer that all HireFlow Full-Time Employee (FTE) agents will use to access shared tools and data. The MCP servers you build here become the foundation for Chapters 70-81, where each FTE agent connects to recruitment databases, candidate profiles, and interview question banks through the protocol you learn now.

## Technical Stack

- **Python SDK**: `mcp` (v1.12.4+) with `FastMCP` server API
- **Protocol**: JSON-RPC 2.0 over stdio or Streamable HTTP transport
- **Dependencies**: `pydantic` for schema validation, `uv` for package management
