---
sidebar_position: 70
title: "Chapter 70: Building Custom MCP Servers"
description: "Build domain-specific MCP servers with Pydantic models, input validation, and multiple tools for HireFlow's CV parsing and job template infrastructure."
---

# Chapter 70: Building Custom MCP Servers

## Overview

In Chapter 69, you exposed your Resume Screener skill as a basic MCP server with a single tool. That proved the concept: MCP connects agents to tools through a standard protocol. But HireFlow needs more than one tool on one server. It needs a **CV parser** that extracts structured candidate data from raw text. It needs a **Job Template** server that provides standardized job specification formats. Each server must validate its inputs, handle edge cases, and return structured output that downstream agents can consume without guesswork.

This chapter teaches you to build production-quality MCP servers with multiple tools, Pydantic-validated inputs, structured output models, and proper error reporting through the Context object. You will encounter the real problems that surface when parsing messy real-world data: missing fields, unexpected formats, and the edge cases that crash naive implementations.

## Prerequisites

Before starting this chapter, you should have:

- **Completed Chapter 69**: MCP Fundamentals (FastMCP, `@mcp.tool()`, `@mcp.resource()`, `@mcp.prompt()`, stdio transport)
- **Completed Chapter 67**: You wrote 4 agent skills (Job Spec Writer, Resume Screener, Interview Q Generator, Candidate Summarizer)
- **Completed Chapter 68**: You validated those skills through simulation
- **Part 4**: Python functions, type annotations, Pydantic basics, `async`/`await`

## Setup

Your HireFlow project should already have the MCP SDK from Chapter 69:

```bash
cd hireflow
uv add "mcp[cli]" pydantic
```

## What You Will Learn

By the end of this chapter, you will be able to:

1. Build MCP servers with multiple tools that share domain logic
2. Use Pydantic `BaseModel` for structured tool inputs and outputs
3. Validate tool inputs with `Field` descriptions and type constraints
4. Handle format edge cases in real-world data parsing
5. Use the Context object for logging and progress reporting
6. Diagnose and fix Data/Edge-Case errors using the Error Taxonomy
7. Construct a unified HireFlow MCP server combining CV parsing and job templates

## Lessons

| #   | Lesson                                                                     | Duration | Topic                                              |
| --- | -------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| 01  | [Why Custom MCP Servers](./01-why-custom-mcp-servers.md)                   | 20 min   | From single-tool to multi-tool domain servers      |
| 02  | [CV Parser Server: Predict and Run](./02-cv-parser-predict-and-run.md)     | 25 min   | James's CV parser, STOP_AND_PREDICT, first run     |
| 03  | [Format Edge Cases in CV Parsing](./03-format-edge-cases.md)               | 25 min   | Empty fields, malformed data, trace table          |
| 04  | [James's Bug: Missing Format Handling](./04-james-bug-format-handling.md)  | 20 min   | Planted bug, Error Taxonomy, verification          |
| 05  | [Job Template Server](./05-job-template-server.md)                         | 25 min   | Second server, resource URIs, structured templates |
| 06  | [Input Validation with Pydantic Models](./06-pydantic-input-validation.md) | 30 min   | BaseModel, Field constraints, structured output    |
| 07  | [Context, Logging, and Progress](./07-context-logging-progress.md)         | 25 min   | Context injection, info/warning/error, AI-assisted |
| 08  | [Multi-Tool Server Parsons Problem](./08-parsons-problem.md)               | 15 min   | Reorder 8 lines with 1 distractor                  |
| 09  | [Modify Exercises: Extend the Servers](./09-modify-exercises.md)           | 35 min   | Skill normalization, validation, Pydantic models   |
| 10  | [Make: Unified HireFlow MCP Server](./10-make-cv-parser-job-template.md)   | 45 min   | Capstone: unified server with TDG                  |
| 11  | [Rubric and Chapter Quiz](./11-rubric-and-chapter-quiz.md)                 | 20 min   | Self-assessment rubric, chapter quiz               |

## Chapter Type

**PRIMM-AI+** (Predict, Run, Investigate, Modify, Make with AI-assisted investigation)

## HireFlow Connection

Chapter 69 proved that MCP works: you wrapped the Resume Screener skill in a single tool. This chapter builds the **next two servers** in HireFlow's infrastructure: CV parsing (extracting structured candidate data) and Job Templates (providing standardized job specifications). These servers become inputs for Chapter 71, where you wire skills and MCP tools together for code execution, and Chapters 78-81, where each Full-Time Employee agent relies on this tool infrastructure.

## Technical Stack

- **Python SDK**: `mcp` (v1.12.4+) with `FastMCP` server API
- **Validation**: `pydantic` for input/output models with `Field` descriptions
- **Protocol**: JSON-RPC 2.0 over stdio transport
- **Dependencies**: `uv` for package management
