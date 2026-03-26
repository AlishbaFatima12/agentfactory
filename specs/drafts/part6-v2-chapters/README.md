---
sidebar_position: 6
title: "Part 6: Building the Agent Factory"
---

# Part 6: Building the Agent Factory

James stares at his screen. He has spent four parts of this book learning to think, work, and code alongside AI. He understands spec-driven development. He can write typed Python, trace variables through functions, build tested modules, and run the full discipline stack without hesitation. He has built SmartNotes from a blank file into a working application with CRUD operations, a test suite, and a CI pipeline. He writes type annotations instinctively. He commits before he ships. He is no longer a beginner.

But he has a question that has been growing since Chapter 1.

"I understand how to build _a program_," James says. "But how do I build _a company_ out of AI agents? Not one agent, a whole team of them. A factory."

Emma sets down her coffee. "That is exactly what this part teaches. Everything you have done so far: specs, skills, tests, code. Those are the raw materials. Now you learn to assemble them into something that runs without you watching."

This is Part 6: **Building the Agent Factory**.

In Parts 1 through 3, you learned _what_ AI agents are, _how_ they work, and _where_ they fit into business domains. In Part 4, you learned _how to code_: Python, the discipline stack, the PRIMM-AI+ framework, and the ten axioms that govern AI-driven development. In Part 5, you built your first OpenClaw application. You have the vocabulary. You have the tools. You have the mental models.

Now you build the thing.

---

## From SmartNotes to HireFlow

In Part 4, SmartNotes was your companion: a personal note-taking application that grew alongside your skills. You started with variables and strings, then functions, then data structures, then classes, then tests. SmartNotes taught you to build a _program_.

Part 6 introduces a new running project: **HireFlow**, an AI-powered recruitment factory. SmartNotes does not disappear. It becomes one of HireFlow's tools: the note-taking system the hiring manager uses to capture briefs, annotate candidate profiles, and record interview observations. You will see SmartNotes' `NoteStore` class appear in Chapter 83 (ChatKit Server) where it stores session transcripts and hiring manager annotations. SmartNotes taught you to write code. HireFlow teaches you to build a _workforce_ that writes outcomes.

The shift is deliberate. SmartNotes is a single application with a single user. HireFlow is a coordinated system with multiple AI employees, each performing a distinct role, passing data between them, and producing a deliverable that a human uses to make a decision. The skills transfer. The scale changes.

---

## What You Will Build

**HireFlow**: an AI-powered recruitment factory with four Digital FTEs:

| FTE Role                         | Function                                                     | Input                                | Output                                                                              |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------- |
| **Job Spec Writer**              | Turns hiring manager briefs into structured job descriptions | Raw brief (role, team, requirements) | Formatted job description with responsibilities, qualifications, and scoring rubric |
| **Resume Screener**              | Parses and scores candidate CVs against job requirements     | CV + job description                 | Scored candidate profile with match percentage and flagged gaps                     |
| **Interview Question Generator** | Creates role-specific behavioral and technical questions     | Job description + candidate profile  | Structured interview guide with scoring criteria                                    |
| **Candidate Summarizer**         | Produces hiring committee briefs from all collected data     | Screening results + interview notes  | Decision-ready candidate brief with recommendation                                  |

By the end of this part, HireFlow will run locally on your machine: four FTEs coordinating via MCP, powered by NanoClaw, passing evals, processing candidates 24/7 for a single user. No cloud. No multi-tenancy. Just a working factory on your laptop. Part 7 takes it to the cloud.

---

## The Five-Phase Journey

**Phase 1: Explore.** Use frontier LLMs to explore the domain and write a concept paper through the 10-80-10 loop until it crosses the 9.5+ quality threshold.

**Phase 2: Incubate.** Convert the paper into agent skills. Test them as simulations. Build MCP servers. At the end: validated intelligence, no production code.

**Phase 3: Build Specialist.** Deploy validated skills as running Digital FTEs using NanoClaw, Agent SDKs, and MCP. Connected to data stores, exposed via FastAPI, validated by evals.

Phases 4-5 (CloudNanoClaw, Deploy at Scale) belong to Part 7.

---

## Reading This Part in Phases

Part 6 is the largest part of the book: 30 chapters across four sections. You do not need to read it in one pass. Each section has a natural checkpoint:

| After Section                  | You Have                                                                                                       | You Can Stop Here If...                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **I: Architecture** (Ch 61-64) | A conceptual understanding of agent factories, economic actors, the maturity model, and the HireFlow blueprint | You want to understand the paradigm before committing to the build         |
| **II: Explore** (Ch 65-66)     | A validated concept paper and domain mastery                                                                   | You are exploring whether a specific domain is viable for an agent factory |
| **III: Incubate** (Ch 67-71)   | Validated agent skills, simulation logs, and MCP servers                                                       | You have working intelligence but haven't committed to production code     |
| **IV: Build** (Ch 72-90)       | A fully operational local agent factory                                                                        | You are ready for Part 7 (cloud deployment)                                |

Each checkpoint produces a concrete deliverable. You can pause, apply what you have learned, and return.

---

## Before You Begin

Part 6 assumes you can do the following without assistance. If any item is uncertain, revisit the referenced chapter.

1. **Write a typed Python function with pytest tests**: function signature with type annotations, at least one passing test (Part 4, Chapters on Functions and Testing)
2. **Use the discipline stack without guidance**: uv for project management, ruff for linting, pyright for type checking, pytest for testing (Part 4, Chapter on The Development Environment)
3. **Commit and push with Git**: create a branch, commit changes with a descriptive message, push to remote (Part 2, Chapter 23)
4. **Write a specification and use TDG with Claude Code**: write a failing test from a spec, prompt Claude Code to generate the implementation, verify the output (Part 4, Spec-Driven Development chapters)
5. **Explain at least 5 of the 10 axioms from memory**: Shell as Orchestrator, Knowledge is Markdown, Types Are Guardrails, Tests Are the Specification, Verification is a Pipeline (Part 4)

If all five are solid, you are ready.

---

## How This Part Teaches

**Programming chapters** (Ch 69-89) follow the full PRIMM-AI+ 7-section template:

1. Why This Chapter Exists | 2. Worked Example + Predict | 3. Investigate | 4. Parsons Bridge | 5. Modify | 6. Make Capstone | 7. Self-Assessment Rubric

**Conceptual chapters** (Ch 61-66, 68, 72) follow the Socratic pattern:

1. Opening Scenario | 2. Guided Discovery | 3. Concept Crystallization | 4. Applied Exercise | 5. Reflection and Connection | 6. Chapter Quiz

**Ch 67 (From Paper to Agent Skills)** uses a hybrid: Socratic discovery + lightweight PRIMM-AI+ cycle for skill-writing.

James in Part 6 makes architectural mistakes, not syntactic ones: vague agent skills, missing database persistence, no retry logic in orchestrators, trusting agent output without verification, concatenating user content into prompts. Emma corrects systems thinking, not code mechanics.

---

## The Four Sections

| Section | Title            | Chapters | Phase     | Your Role            |
| ------- | ---------------- | -------- | --------- | -------------------- |
| I       | The Architecture | Ch 61-64 | Pre-build | Systems Thinker      |
| II      | Explore          | Ch 65-66 | Phase 1   | Domain Explorer      |
| III     | Incubate         | Ch 67-71 | Phase 2   | Intelligence Builder |
| IV      | Build Specialist | Ch 72-90 | Phase 3   | Factory Engineer     |

---

## What You Will Be Able To Do

By the end of Part 6, you will be able to:

1. **Decompose a business domain into agent roles**: identify FTE responsibilities, inputs, outputs, and success criteria for any domain
2. **Write and validate agent skills**: transform domain knowledge into tested, simulation-validated Markdown skills
3. **Build MCP servers**: expose tools, resources, and prompts via the Model Context Protocol
4. **Deploy agents on production SDKs**: use Claude Agents SDK and OpenAI Apps SDK to run skills as real agents
5. **Connect agents to data stores**: relational databases with SQLModel, vector databases with RAG
6. **Build four Digital FTEs independently**: with progressively decreasing scaffolding (full to zero)
7. **Orchestrate multi-agent pipelines**: error handling, retries, dead letter queues, budget tracking
8. **Secure agent factories**: defend against prompt injection, data leakage, unauthorized access, model extraction, and budget abuse
9. **Test and evaluate agent quality**: TDD for probabilistic outputs, multi-dimensional evals, golden datasets
10. **Assemble a complete local agent factory**: four FTEs, one pipeline, running 24/7 on your machine

---

## What's Next

After completing Part 6, continue to **Part 7: Deploying Agent Factories in the Cloud** where HireFlow goes from your laptop to production infrastructure. Docker containerization, Kafka event streaming, multi-tenant architecture, and cloud deployment. The factory you built locally becomes a scalable service.

The method you learn here applies to any domain. HireFlow is the vehicle. The repeatable process of Explore, Incubate, Build is the takeaway.

Let's begin.
