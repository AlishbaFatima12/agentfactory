---
sidebar_position: 71
title: "Chapter 71: Agent Skills and MCP Code Execution"
description: "Wire agent skills to MCP tools for runtime code execution. Connect the intelligence layer (skills) to the execution layer (MCP servers) so HireFlow agents can parse CVs, score candidates, and generate interview questions through a standard protocol."
---

# Chapter 71: Agent Skills and MCP Code Execution

## Overview

You have agent skills that know WHAT to do (Chapter 67). You have MCP servers that know HOW to execute (Chapters 69-70). This chapter wires them together. When a skill decides to score a candidate, it calls `score_candidate` through MCP. When it needs to parse a CV, it calls `parse_cv`. The skill is the brain; the MCP tool is the hands. Without this connection, skills are consultants who cannot open a spreadsheet.

This is the final chapter in the Incubate phase. By the end, all four HireFlow skills will have runtime access to MCP tools, and you will have a checkpoint inventory proving the integration works. Phase 3 (Build Specialist) begins in Chapter 72.

## Prerequisites

Before starting this chapter, you should have:

- **Completed Chapter 67**: You wrote 4 agent skills (Job Spec Writer, Resume Screener, Interview Q Generator, Candidate Summarizer)
- **Completed Chapter 68**: You validated those skills through simulation
- **Completed Chapter 69**: MCP Fundamentals (FastMCP, `@mcp.tool()`, `@mcp.resource()`, transports)
- **Completed Chapter 70**: Custom MCP Servers (CV parser, Job Template server, Pydantic models, Context logging)

## Setup

Your HireFlow project should already have the MCP SDK from Chapter 69:

```bash
cd hireflow
uv add "mcp[cli]" pydantic
```

## What You Will Learn

By the end of this chapter, you will be able to:

1. Connect an agent skill to MCP tools so the skill can execute actions at runtime
2. Trace the full tool call sequence when a skill processes a candidate
3. Handle MCP tool failures gracefully with retry logic and error reporting
4. Classify orchestration errors using the Error Taxonomy and Verification Ladder
5. Wire multiple skills to shared MCP infrastructure
6. Build a Candidate Summarizer skill with full tool configuration
7. Verify all four HireFlow skills have working MCP tool access (checkpoint inventory)

## Lessons

| #  | Lesson                                                                                         | Duration | Topic                                                       |
|----|------------------------------------------------------------------------------------------------|----------|-------------------------------------------------------------|
| 01 | [Why Runtime Integration](./01-why-runtime-integration.md)                                     | 20 min   | Skills + MCP gap, integration architecture, HireFlow wiring |
| 02 | [Predict: Skill Calls MCP Tool](./02-predict-skill-calls-mcp-tool.md)                          | 25 min   | Resume Screener + CV parser, tool call sequence, Predict     |
| 03 | [Trace the Tool Call Sequence](./03-trace-the-tool-call-sequence.md)                            | 30 min   | Trace table, data flow, edge cases, skill-tool contract      |
| 04 | [James's Bug: Tool Failure Handling](./04-james-bug-tool-failure.md)                            | 25 min   | Planted bug, Error Taxonomy, Verification Ladder             |
| 05 | [Code Execution and AI-Assisted Investigation](./05-code-execution-and-ai-assisted.md)          | 25 min   | Write-execute-analyze via MCP, AI-assisted trace             |
| 06 | [Parsons Bridge](./06-parsons-bridge.md)                                                       | 15 min   | 8 lines, 1 distractor, skill-to-tool wiring                 |
| 07 | [Modify Exercises](./07-modify-exercises.md)                                                   | 35 min   | Scoring normalization, retry logic, wire Question Generator  |
| 08 | [Make: Candidate Summarizer + Checkpoint Inventory](./08-make-candidate-summarizer-config.md)   | 45 min   | Capstone: full skill+tool config, TDG, checkpoint inventory  |
| 09 | [Rubric and Chapter Quiz](./09-rubric-and-chapter-quiz.md)                                     | 20 min   | Self-assessment rubric, chapter quiz                         |

## Chapter Type

**PRIMM-AI+** (Predict, Run, Investigate, Modify, Make with AI-assisted investigation)

## HireFlow Connection

This chapter completes the Incubate phase by connecting all four HireFlow skills to MCP tools. The checkpoint inventory at the end of Lesson 8 verifies that every skill can call every tool it needs. This infrastructure becomes the foundation for Phase 3 (Chapters 72-90), where Agent SDKs, NanoClaw, databases, and orchestration layers build on top of the skill+tool integration you establish here.

## Technical Stack

- **Python SDK**: `mcp` (v1.26+) with `FastMCP` server API and `ClientSession` client API
- **Validation**: `pydantic` (v2) for input/output models
- **Protocol**: JSON-RPC 2.0 over stdio transport (Streamable HTTP available for production; see Ch 82)
- **Skills**: SKILL.md files from Chapter 67
- **Servers**: HireFlow MCP servers from Chapters 69-70

## SDK Version Note

This chapter uses v1.x of the MCP Python SDK, which is the current stable release. The client-side APIs you learn here (`ClientSession`, `stdio_client`, `call_tool`) are stable across all v1.x versions and will remain compatible in v2. The v2 SDK (pre-alpha as of Q1 2026) primarily changes the server-side API from `FastMCP` to `MCPServer` and moves transport configuration to `run()`. Since this chapter focuses on the client side (skills calling tools), the code patterns here will work with both v1 and v2. Separately, the standalone [FastMCP project](https://gofastmcp.com) (by Prefect) has reached 3.0 with component versioning, granular authorization, and OpenTelemetry instrumentation.
