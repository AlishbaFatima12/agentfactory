---
sidebar_position: 72
title: "Chapter 72: Introduction to Agent SDKs"
description: "Why raw API calls are not enough, what Agent SDKs provide, and how to choose between them for HireFlow."
---

# Chapter 72: Introduction to Agent SDKs

You have spent the Incubate phase building the intelligence layer for HireFlow: four validated agent skills (Ch 67), simulation results that prove they work (Ch 68), and MCP servers that expose them as callable tools (Ch 69-71). Your skills can parse CVs, score candidates, generate interview questions, and summarize hiring decisions. Your MCP servers make those skills accessible to any client that speaks the protocol.

Now comes the question that opens every Build phase: **how do you run these skills as autonomous agents?**

You could call the Anthropic API directly. Write your own loop. Manage your own message history. Handle your own tool dispatch. Many developers start there. This chapter explains why they stop there too, and what Agent SDKs provide that raw API integration does not.

Through six lessons, James discovers the hard way that building an agent loop from scratch is a coordination problem, not a coding problem. Emma guides him through the SDK landscape, introduces the two frameworks HireFlow will use (Claude Agents SDK and OpenAI Apps SDK), and shows how NanoClaw wraps an SDK into a production-ready runtime.

## What You Will Learn

- Why raw API calls produce fragile agents that break under real conditions
- The six capabilities every Agent SDK provides (and that you would have to build yourself)
- How the Claude Agents SDK and OpenAI Apps SDK differ in philosophy and use case
- How NanoClaw combines a "Body" (HTTP server, sessions, channels) with a "Brain" (Agent SDK)
- How to choose the right SDK for each HireFlow FTE

## Prerequisites

Before starting this chapter, confirm:

1. **You have four validated agent skills** from Ch 67 (Job Spec Writer, Resume Screener, Interview Question Generator, Candidate Summarizer)
2. **You have simulation results** from Ch 68 proving those skills handle edge cases
3. **You have MCP servers** from Ch 69-71 exposing those skills as callable tools
4. **You understand the Agent Maturity Model** from Ch 63 (five phases, crystallization threshold)

If any of these feel uncertain, revisit the referenced chapter before continuing.

## Lessons

| #   | Title                                | Duration | Focus                                      |
| --- | ------------------------------------ | -------- | ------------------------------------------ |
| 1   | Why Not Just Call the API?           | 15 min   | Opening Scenario: the complexity explosion |
| 2   | What SDKs Provide                    | 15 min   | Guided Discovery: six SDK capabilities     |
| 3   | Two SDKs: Claude and OpenAI          | 15 min   | SDK philosophies and HireFlow fit          |
| 4   | NanoClaw: Body Plus Brain            | 15 min   | Runtime architecture                       |
| 5   | Feature Matrix and Decision Exercise | 20 min   | Applied Exercise                           |
| 6   | Reflection and Chapter Quiz          | 15 min   | Synthesis and assessment                   |
