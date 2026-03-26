---
sidebar_position: 1
title: "Why Custom MCP Servers"
description: "Understand why HireFlow needs multiple domain-specific MCP servers beyond the basic Resume Screener server from Chapter 69"
chapter: 70
lesson: 1
duration_minutes: 20
keywords:
  [
    custom MCP servers,
    domain-specific tools,
    multi-tool servers,
    HireFlow infrastructure,
  ]

skills:
  - name: "Understanding Multi-Server Architecture"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can explain why a single MCP server is insufficient for a production agent factory and articulate the benefits of domain-specific servers"

  - name: "Identifying Domain Boundaries for MCP Servers"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can identify logical groupings of tools into separate servers based on domain responsibility"

learning_objectives:
  - objective: "Explain why production agent factories need multiple domain-specific MCP servers"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Verbal or written explanation connecting single-server limitations to multi-server benefits"

  - objective: "Identify the tools needed for HireFlow's CV parsing and job template infrastructure"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "List of tools with their inputs, outputs, and domain groupings"

cognitive_load:
  new_concepts: 3
  assessment: "Three concepts: domain-specific servers, tool grouping by responsibility, structured input/output contracts. Builds directly on C69 MCP fundamentals."

differentiation:
  extension_for_advanced: "Design a third HireFlow server for interview scheduling with appropriate tool boundaries"
  remedial_for_struggling: "Review C69 Make capstone to solidify understanding of single-server architecture before proceeding"
---

# Why Custom MCP Servers

Quick recall: In Chapter 69, you built an MCP server that exposed your Resume Screener skill as a tool. What decorator did you use to register the tool? What transport did the server run on? (If unsure, review C69 Lesson 4 before proceeding.)

In Chapter 68, you validated four agent skills through simulation. In Chapter 69, you wrapped one of them in an MCP server. That server had one tool: `score_resume`. It worked. An agent could connect, call the tool, and get a score back.

Now imagine the full HireFlow pipeline running in production. The Resume Screener agent calls `score_resume`. The Job Spec Writer agent needs access to job templates. The Candidate Summarizer needs to parse raw CVs into structured data. Each of these is a separate concern with separate inputs, separate validation rules, and separate output formats. Cramming them all into one server with twenty tools creates a maintenance problem you have seen before.

James stared at his MCP server from Chapter 69. "I'll add the CV parser tool right here. And the job template tool. And the interview question tool. One server, all the tools. Done."

Emma pulled up a chair. "How many tools will that server have by the time we finish Chapter 81?"

James counted on his fingers. "Four FTEs, each with two or three tools... maybe twelve?"

"Twelve tools on one server. What happens when you need to update the CV parser's input format?"

"I redeploy the whole server. All twelve tools go down for a moment."

"And when the CV parser has a memory leak, what happens to the interview question generator?"

James paused. "It crashes too. Because they share the same process."

"That's why production systems split servers by domain. The CV parser handles candidate data. The job template server handles job specifications. Each server owns one responsibility. Each deploys independently."

## From One Server to Many

In Chapter 69, you learned the MCP protocol: hosts, clients, servers, JSON-RPC messages, and the three primitives (tools, resources, prompts). You built one server to prove the concept. This chapter builds the next two.

| Server                          | Responsibility                                 | Tools                                                 | Why Separate                                        |
| ------------------------------- | ---------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------- |
| **Resume Screener** (C69)       | Score candidates against job specs             | `score_resume`                                        | Already built                                       |
| **CV Parser** (this chapter)    | Extract structured data from raw CVs           | `parse_cv`, `extract_skills`, `extract_experience`    | Different input formats, different failure modes    |
| **Job Template** (this chapter) | Serve standardized job specification templates | `get_template`, `list_templates`, `validate_job_spec` | Read-heavy, rarely changes, different scaling needs |

Each server is a separate Python file. Each runs its own process. Each can be tested, deployed, and scaled independently. When the CV parser needs to handle a new resume format, you update one server. The job template server keeps running.

## What Makes a Server "Custom"

The Resume Screener server from Chapter 69 was minimal: one tool, simple string inputs, a dictionary output. Custom servers go further:

**Structured inputs**: Instead of accepting raw strings and hoping for the best, custom servers define Pydantic models that validate inputs before the tool function runs. A malformed CV triggers a clear validation error, not a cryptic crash.

**Structured outputs**: Instead of returning plain dictionaries, custom servers return typed models. Downstream agents know exactly what fields to expect: `ParsedCV.name`, `ParsedCV.email`, `ParsedCV.skills`. No guessing, no key errors.

**Multiple tools per server**: Custom servers group related tools. The CV parser server has `parse_cv` (full parse), `extract_skills` (skills only), and `extract_experience` (work history only). Each tool does one thing. Agents call the specific tool they need.

**Error reporting**: Custom servers use the Context object to log what they are doing, report progress on long-running operations, and surface warnings when data looks suspicious but is not invalid.

## The Two Servers You Will Build

This chapter focuses on two servers that HireFlow's pipeline depends on:

**Server 1: CV Parser** transforms raw candidate text into structured data. It handles the messy reality of resumes: inconsistent formats, missing sections, creative layouts. The parser must extract names, contact information, skills, education, and work experience from unstructured text. When it encounters data it cannot parse, it must report what it found and what it skipped, not crash silently.

**Server 2: Job Template** provides standardized job specification formats. When the Job Spec Writer agent needs to create a new job posting, it requests a template from this server. Templates define required fields (title, department, salary range, required skills) and optional fields (preferred qualifications, benefits). The server validates completed job specs against the template schema.

By the end of this chapter, you will have both servers running, tested, and ready for Chapter 71, where you wire them together with agent skills for code execution.

## The Build Chain

Your work sits at a specific point in the HireFlow build:

```
C67 (4 skills) → C68 (simulate) → C69 (Resume Screener MCP) →
  C70 (CV Parser + Job Template MCP) → C71 (skills + MCP runtime) →
  C73-C74 (agent SDKs) → ...
```

The CV parser and job template servers you build here become the tool infrastructure that later chapters depend on. Build them well now; you will use them for the rest of Part 6.
