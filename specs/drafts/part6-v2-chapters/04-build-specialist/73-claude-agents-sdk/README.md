---
sidebar_position: 73
title: "Chapter 73: Anthropic Claude Agents SDK"
description: "Build autonomous agents using the Claude Agent SDK, connecting MCP servers from prior chapters to create multi-agent systems with guardrails, handoffs, and supervision patterns for HireFlow."
keywords:
  [
    Claude Agent SDK,
    agent development,
    MCP integration,
    multi-agent handoffs,
    guardrails,
    supervision,
    HireFlow,
  ]
chapter: 73
---

# Chapter 73: Anthropic Claude Agents SDK

You have four validated agent skills and three working MCP servers. Now you need a brain to drive them. The Claude Agent SDK is that brain: it connects your MCP tools, manages the agent loop, and handles multi-agent coordination. This is the foundation that NanoClaw builds on.

## What You Will Learn

By the end of this chapter, you will be able to:

- **Build agents** that call your HireFlow MCP tools (parse_cv, score_candidate) autonomously
- **Trace the agent loop** step by step to understand how tool calls are selected and executed
- **Create custom tools** using the @tool decorator and register them with create_sdk_mcp_server
- **Design multi-agent systems** with AgentDefinition and the Task tool for parallel specialist work
- **Add guardrails** that validate inputs and outputs at every boundary
- **Implement supervision patterns** for human-in-the-loop approval workflows
- **Track costs** per agent run for budget-aware pipeline design

## Prerequisites

- Chapter 69: MCP Fundamentals (MCP server architecture)
- Chapter 70: Custom MCP Servers (parse_cv, job_template servers)
- Chapter 71: Agent Skills and MCP Code Execution (runtime integration)
- Chapter 72: Introduction to Agent SDKs (conceptual foundation)
- Anthropic API key with Claude access

## Chapter Structure

| Lesson | Topic                             | PRIMM-AI+ Section          |
| ------ | --------------------------------- | -------------------------- |
| 01     | Why NanoClaw's Brain Matters      | Section 1: Why             |
| 02     | SDK Setup and First Query         | Section 2: Predict (setup) |
| 03     | Predict: Agent Tool Call Order    | Section 2: Predict + Run   |
| 04     | Tracing the Agent Loop            | Section 3: Investigate     |
| 05     | Connecting HireFlow MCP Servers   | Section 3: Investigate     |
| 06     | Custom Tools with @tool Decorator | Section 3: Investigate     |
| 07     | Multi-Agent Handoffs              | Section 3: Investigate     |
| 08     | Guardrails and Validation         | Section 3: Investigate     |
| 09     | Supervision and Escalation        | Section 3: Investigate     |
| 10     | AI-Assisted Investigation         | Section 3: Investigate     |
| 11     | SDK Client and Cost Tracking      | Section 3: Investigate     |
| 12     | Permission Modes and Security     | Section 3: Investigate     |
| 13     | File Checkpointing and Recovery   | Section 3: Investigate     |
| 14     | Lifecycle Hooks                   | Section 3: Investigate     |
| 15     | Parsons Bridge                    | Section 4: Parsons         |
| 16     | Modify Exercises                  | Section 5: Modify          |
| 17     | Make: Multi-Agent Triage System   | Section 6: Make            |
| 18     | Self-Assessment and Chapter Quiz  | Section 7: Rubric          |

## HireFlow Connection

This chapter connects your Incubate-phase deliverables (skills, MCP servers) to the SDK that will power them in production:

- **From Ch 67:** Four agent skills (Job Spec Writer, Resume Screener, Interview Q Generator, Candidate Summarizer)
- **From Ch 69-70:** MCP servers exposing parse_cv, score_candidate, and job_template tools
- **From Ch 71:** Runtime integration patterns for skills + MCP
- **To Ch 74:** Same MCP infrastructure, different SDK (OpenAI Apps SDK comparison)
- **To Ch 75:** NanoClaw wraps this SDK as its "brain" component
