---
sidebar_position: 18
title: "Self-Assessment and Chapter Quiz"
description: "Self-assess your Claude Agent SDK mastery across five dimensions and test your knowledge with a 12-question quiz covering query patterns, MCP integration, multi-agent design, guardrails, supervision, and cost tracking"
chapter: 73
lesson: 18
duration_minutes: 25
keywords:
  [
    self-assessment,
    rubric,
    chapter-quiz,
    claude-agent-sdk,
    proficiency-levels,
    mcp-integration,
    multi-agent,
    guardrails,
    supervision,
    cost-tracking,
  ]

skills:
  - name: "SDK Self-Assessment"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "2.4 Netiquette"
    measurable_at_this_level: "Accurately rate own proficiency across five dimensions of Claude Agent SDK knowledge using the rubric criteria"

  - name: "SDK Comprehensive Knowledge"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Answer 10 or more quiz questions correctly, demonstrating understanding of SDK patterns, MCP integration, multi-agent coordination, guardrails, and cost tracking"

learning_objectives:
  - objective: "Self-assess proficiency across five SDK dimensions (prediction accuracy, trace quality, explanation quality, modification quality, independent make) using a structured rubric"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student places themselves in Developing/Competent/Fluent for each dimension and identifies areas for review"

  - objective: "Demonstrate comprehensive understanding of the Claude Agent SDK by answering 12 multiple-choice questions covering query patterns, MCP naming, AgentDefinition, permissions, tool ordering, error handling, supervision, guardrails, cost tracking, subagent coordination, least privilege, and multi-agent design"
    proficiency_level: "B2"
    bloom_level: "Understand"
    assessment_method: "Student scores 10/12 or higher on the chapter quiz"

cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This lesson is purely assessment and reflection on material from Lessons 1-15. Cognitive load is low; the challenge is retrieval and application of prior knowledge."

differentiation:
  extension_for_advanced: "For each quiz question you got wrong, write a corrected version of the wrong answer that explains why it fails. This deepens your understanding of the misconception."
  remedial_for_struggling: "If you score below 8/12, go back to the specific lessons referenced in the wrong-answer explanations. Work through the Predict exercises in those lessons again before retaking the quiz."
---

# Self-Assessment and Chapter Quiz

You have covered the Claude Agent SDK from first query through multi-agent triage. This lesson has two parts: a rubric that reveals where your understanding is solid and where it needs reinforcement, and a 12-question quiz that tests the chapter's core concepts.

## Part A: Self-Assessment Rubric

Rate yourself honestly on each dimension. The goal is accurate self-knowledge, not high scores. Knowing where you stand tells you where to invest your review time.

| Dimension                | Developing                                                           | Competent                                                                                                     | Fluent                                                                                                                             |
| ------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Prediction Accuracy**  | Predictions wrong more than 50% of the time                          | Predictions correct 50-80% of the time, with reasoning that connects tool descriptions to expected call order | Predictions correct more than 80% of the time with calibrated confidence (you know when you are guessing vs. when you are certain) |
| **Trace Quality**        | Traces incomplete or needed AI help to finish                        | Traces accurate without AI; minor gaps in edge cases such as error paths or multi-turn loops                  | Traces complete; caught edge cases and error paths independently, including what happens when a tool returns `isError: true`       |
| **Explanation Quality**  | Cannot explain the agent loop without re-reading lessons             | Can explain `query()`, `AgentDefinition`, MCP connection, and supervision in own words                        | Can explain to another person and justify design choices: why subagents, why these tools, why this permission mode                 |
| **Modification Quality** | Modifications needed AI help or more than 2 attempts                 | Correct on 1st or 2nd attempt without AI assistance                                                           | Correct on 1st attempt; added improvements beyond the prompt such as better error messages or additional validation                |
| **Independent Make**     | Spec needed AI help; triage system had more than 3 bugs at first run | Spec written independently; 1-2 issues found during implementation that were caught by the test suite         | Spec and implementation both clean on first pass; all success criteria met without revision                                        |

### How to Use This Rubric

1. Read each row and find the column that most honestly describes your current ability.
2. Mark your level for each dimension.
3. Look for patterns: Are you stronger on conceptual understanding (Prediction, Trace, Explanation) but weaker on applied skills (Modification, Make)? Or the reverse?
4. For any dimension where you rated "Developing," revisit the relevant lessons before proceeding to Chapter 74.

| If Developing In...  | Review These Lessons                                                                |
| -------------------- | ----------------------------------------------------------------------------------- |
| Prediction Accuracy  | Lessons 03-04 (predict tool call order, trace the agent loop)                       |
| Trace Quality        | Lessons 04-05 (agent loop tracing, MCP server connection)                           |
| Explanation Quality  | Lessons 06-09 (custom tools, handoffs, guardrails, supervision)                     |
| Modification Quality | Lesson 14 (modify exercises); redo all three modifications                          |
| Independent Make     | Lesson 15 (capstone); consider rebuilding with a different role or supervision rule |

### Reflection Prompt

Answer these three questions before moving to the quiz:

1. **Hardest concept:** What was the hardest concept in this chapter? Was it the agent loop mechanics, MCP integration, multi-agent handoffs, guardrails, supervision, or cost tracking?

2. **Design confidence:** If someone asked you to build a new agent pipeline for a different domain (not hiring), which parts would you feel confident building from scratch? Which parts would you need to reference this chapter?

3. **Next investment:** If you had 30 more minutes with this chapter, where would you spend them? That answer reveals what you have not yet mastered.

> **James:** I rated myself Competent on everything except Independent Make. My spec missed two error cases that the tests caught.
>
> **Emma:** The tests caught them. That is the system working. Developing would mean the errors survived into production. Competent means your process caught them.
>
> **James:** So the rubric measures the combination of spec, tests, and implementation? Not each one alone?
>
> **Emma:** Exactly. A strong spec with a weak implementation scores Competent because the spec identified the problems. A weak spec with heroic debugging also scores Competent, but through a less reliable path.

---

## Part B: Chapter Quiz

12 multiple-choice questions. One correct answer per question. Answer all 12, then check against the answer key.

---

### Q1. query() vs. ClaudeSDKClient

When should you use `ClaudeSDKClient` instead of `query()`?

**A)** When you need multi-turn conversations with persistent context across turns

**B)** When you need faster execution speed

**C)** When you need to use MCP tools

**D)** When you need to stream responses

<details>
<summary>Answer</summary>

**A) When you need multi-turn conversations with persistent context across turns.**

`ClaudeSDKClient` is an async context manager that maintains conversation state between calls. Each message you send builds on the previous context. `query()` is stateless: each call starts fresh with no memory of prior turns. Both support MCP tools (C is wrong). Both support streaming (D is wrong). `ClaudeSDKClient` is not faster; it carries more overhead because it maintains state (B is wrong).

_Review: Lesson 11 (SDK Client and Cost Tracking)_

</details>

---

### Q2. MCP Tool Naming Convention

An agent has a server registered as `"templates"` containing a tool named `"get_template"`. What is the correct identifier in `allowed_tools`?

**A)** `"get_template"`

**B)** `"templates__get_template"`

**C)** `"mcp__templates__get_template"`

**D)** `"mcp__get_template__templates"`

<details>
<summary>Answer</summary>

**C) `"mcp__templates__get_template"`**

The naming convention is `mcp__<servername>__<toolname>` with double underscores. The `mcp__` prefix distinguishes custom tools from built-in tools like `Read` or `Bash`. Option A omits the prefix and server name entirely. Option B omits the `mcp__` prefix. Option D reverses the server and tool names.

_Review: Lesson 05 (Connecting HireFlow MCP Servers)_

</details>

---

### Q3. AgentDefinition Fields

Which fields are required when creating an `AgentDefinition`?

**A)** `description`, `prompt`, `tools`, and `model` are all required

**B)** Only `description` and `prompt` are required; `tools` and `model` have defaults

**C)** Only `prompt` is required; everything else is optional

**D)** `description` and `model` are required; `prompt` and `tools` are optional

<details>
<summary>Answer</summary>

**B) Only `description` and `prompt` are required; `tools` and `model` have defaults.**

`AgentDefinition` requires `description` (what the subagent does, used by the orchestrator to decide when to delegate) and `prompt` (the subagent's system instructions). `tools` defaults to an empty list (no tool access). `model` defaults to the same model as the parent agent. You can override both, but they are not required.

_Review: Lesson 07 (Multi-Agent Handoffs)_

</details>

---

### Q4. Permission Modes

Which permission mode gives the agent the most access with the least human intervention?

**A)** `"default"` with no `allowed_tools` specified

**B)** `"bypassPermissions"` with a specific `allowed_tools` list

**C)** `"plan"` mode with all tools enabled

**D)** `"bypassPermissions"` with no `allowed_tools` specified

<details>
<summary>Answer</summary>

**D) `"bypassPermissions"` with no `allowed_tools` specified.**

`"bypassPermissions"` disables the human confirmation step for tool use. When `allowed_tools` is not specified, the agent can access all available tools. This combination gives maximum access with zero human oversight. Option B is more restrictive because `allowed_tools` limits which tools are available. Option A uses the default permission mode, which prompts for confirmation on sensitive operations. Option C is not a valid permission mode in the SDK.

_Review: Lesson 12 (Permission Modes and Security)_

</details>

---

### Q5. Tool Call Order Prediction

An agent has three tools: `parse_cv`, `score_candidate`, and `generate_interview_questions`. The prompt says: "Parse this CV, score the candidate, and generate interview questions based on the gaps." In what order will the agent call them?

**A)** All three in parallel, since they are independent

**B)** `parse_cv` first, then `score_candidate`, then `generate_interview_questions`

**C)** `generate_interview_questions` first, to know what to look for in the CV

**D)** The order is random; the agent picks tools unpredictably

<details>
<summary>Answer</summary>

**B) `parse_cv` first, then `score_candidate`, then `generate_interview_questions`.**

Each step depends on the output of the previous step. The question generator needs the skill gaps, which come from the scoring step. The scoring step needs the candidate's skills, which come from the parsing step. The agent recognizes this data dependency from the tool descriptions and calls them in the correct order. Parallel execution (A) is impossible because of the sequential dependency. The agent does not act randomly (D); it reasons about tool descriptions and data flow.

_Review: Lesson 03 (Predict: Agent Tool Call Order)_

</details>

---

### Q6. Error Handling

An MCP tool returns a result with `isError: true` and a content block containing `"CV file not found: resume.pdf"`. What should the agent do?

**A)** Retry the same tool call with the same parameters

**B)** Crash and stop execution immediately

**C)** Read the error message and decide on the next action (report the error, try an alternative, or ask the user)

**D)** Ignore the error and proceed as if the tool succeeded

<details>
<summary>Answer</summary>

**C) Read the error message and decide on the next action.**

When a tool returns `isError: true`, the content block contains a description of what went wrong. The agent reads this and decides how to proceed. It might report the error to the user, attempt an alternative approach, or skip that candidate and continue with others. Automatic retry (A) would likely hit the same error. Crashing (B) wastes all prior work. Ignoring the error (D) would produce incorrect or incomplete results.

_Review: Lesson 08 (Guardrails and Validation)_

</details>

---

### Q7. Supervision Patterns

In a hiring pipeline, which risk tier should receive the most human oversight?

**A)** Auto-approved candidates (highest scores)

**B)** Borderline candidates (scores between the approve and reject thresholds)

**C)** Auto-rejected candidates (lowest scores)

**D)** All tiers should receive equal oversight

<details>
<summary>Answer</summary>

**B) Borderline candidates (scores between the approve and reject thresholds).**

Borderline candidates are where the agent's judgment is least reliable. High-confidence approvals and rejections are low-risk because the signal is strong. Borderline cases have ambiguous signals, and a wrong classification has consequences: a good candidate rejected, or a weak candidate advanced. Human review adds the most value where the automated decision is least certain. Equal oversight (D) wastes human time on clear-cut cases.

_Review: Lesson 09 (Supervision and Escalation)_

</details>

---

### Q8. Guardrail Types

An output guardrail checks the agent's response before it reaches the user. Which of the following is an output guardrail?

**A)** Validating that a CV file exists before sending it to the agent

**B)** Checking that the agent's response does not contain the candidate's Social Security number

**C)** Restricting the agent to only use `parse_cv` and `score_candidate` tools

**D)** Setting `max_turns=5` to limit the agent's execution time

<details>
<summary>Answer</summary>

**B) Checking that the agent's response does not contain the candidate's Social Security number.**

Output guardrails inspect the agent's final output before it reaches the user. Checking for sensitive data (SSN, private keys, passwords) in the response is a classic output guardrail. Option A is an input guardrail (runs before the agent). Option C is a tool restriction (configured in `allowed_tools`). Option D is a resource limit (controls execution bounds), not a content guardrail.

_Review: Lesson 08 (Guardrails and Validation)_

</details>

---

### Q9. Cost Tracking

Where in the SDK do you access token usage data for a completed query?

**A)** From the `message.usage` field on result messages in the `query()` stream

**B)** From a global `claude_agent_sdk.get_usage()` function

**C)** From the `ClaudeSDKClient.total_cost` property

**D)** Token usage is not available through the SDK; you must estimate from prompt length

<details>
<summary>Answer</summary>

**A) From the `message.usage` field on result messages in the `query()` stream.**

As you iterate through messages from `query()`, result messages include a `usage` field with `input_tokens` and `output_tokens`. You accumulate these across calls to track total cost. There is no global usage function (B). `ClaudeSDKClient` provides access through the same streaming pattern, not a single property (C). The SDK does provide real usage data (D is wrong).

_Review: Lesson 11 (SDK Client and Cost Tracking)_

</details>

---

### Q10. Subagent Coordination

What mechanism in the Claude Agent SDK enables one agent to delegate work to a subagent?

**A)** The `agents` parameter in `ClaudeAgentOptions`, which registers `AgentDefinition` objects as tools the parent agent can call

**B)** Direct Python function calls between agent instances

**C)** A shared message queue between agents

**D)** The `mcp_servers` parameter, which connects agents through MCP

<details>
<summary>Answer</summary>

**A) The `agents` parameter in `ClaudeAgentOptions`, which registers `AgentDefinition` objects as tools the parent agent can call.**

When you pass `AgentDefinition` objects in the `agents` list within `ClaudeAgentOptions`, the SDK exposes each subagent as a tool that the parent agent can invoke. The parent uses the subagent's `description` to decide when to delegate. Direct function calls (B) bypass the agent loop. Message queues (C) are not part of the SDK. `mcp_servers` (D) connects MCP tool servers, not subagents.

_Review: Lesson 07 (Multi-Agent Handoffs)_

</details>

---

### Q11. Least Privilege

A `cv-parser` subagent has `allowed_tools=["mcp__hiring__parse_cv", "Write"]`. What is wrong with this configuration?

**A)** Nothing; `Write` is needed to save parsed data

**B)** The parser does not need filesystem write access; `Write` should be removed to enforce least privilege

**C)** `Write` is not a valid tool name; it should be `mcp__system__Write`

**D)** `parse_cv` and `Write` cannot coexist in the same `allowed_tools` list

<details>
<summary>Answer</summary>

**B) The parser does not need filesystem write access; `Write` should be removed to enforce least privilege.**

A CV parser extracts data from text and returns structured output. It does not need to create or modify files. Granting `Write` access means the agent could write arbitrary files to disk, which is unnecessary and creates a security risk. If a malicious CV contains prompt injection instructions, a parser with `Write` access could be tricked into creating files. Remove `Write` to follow least privilege. Option A mistakes convenience for necessity. Option C is wrong because built-in tools use plain names like `Write`, not the `mcp__` prefix. Option D is wrong because MCP tools and built-in tools can coexist.

_Review: Lessons 08, 12 (Guardrails, Permission Modes)_

</details>

---

### Q12. Multi-Agent vs. Single-Agent

When should you split a pipeline into multiple subagents instead of using a single agent with multiple tools?

**A)** Always; multiple agents are always better than one

**B)** When different stages need different tool access, different models, or different permission levels

**C)** Only when the pipeline has more than 10 tools

**D)** Never; subagents add unnecessary complexity

<details>
<summary>Answer</summary>

**B) When different stages need different tool access, different models, or different permission levels.**

Multi-agent design is a tool for enforcing separation of concerns. If the parser needs `parse_cv` and the scorer needs `score_candidate`, splitting them into subagents ensures each only accesses its required tools (least privilege). Different stages may also benefit from different models: a simple extraction task can use a cheaper model, while a nuanced triage decision might need a more capable one. Splitting is not always better (A); single agents are simpler when all stages share the same tools and permissions. A tool count threshold (C) is not a reliable heuristic. Subagents add value when they enable better security, cost optimization, or error isolation (D is wrong).

_Review: Lesson 07 (Multi-Agent Handoffs), Lesson 15 (Make Capstone)_

</details>

---

## Quiz Scoring

| Score   | Interpretation                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 11-12   | Strong understanding of the Claude Agent SDK. You are ready for Chapter 74.                                                           |
| 8-10    | Good foundation with some gaps. Review the lessons referenced in the questions you missed.                                            |
| 5-7     | Several concepts need reinforcement. Focus on the areas where you got 2 or more questions wrong in the same category.                 |
| Below 5 | Revisit the chapter from Lesson 01. Work through the Predict exercises and the Modify exercises (Lesson 14) before retaking the quiz. |

### Question-to-Lesson Mapping

| Question | Topic                                      | Review Lesson  |
| -------- | ------------------------------------------ | -------------- |
| 1        | query() vs. ClaudeSDKClient                | Lesson 11      |
| 2        | MCP tool naming convention                 | Lesson 05      |
| 3        | AgentDefinition fields                     | Lesson 07      |
| 4        | Permission modes                           | Lesson 12      |
| 5        | Tool call order prediction                 | Lesson 03      |
| 6        | Error handling with isError                | Lesson 08      |
| 7        | Supervision tier design                    | Lesson 09      |
| 8        | Guardrail types                            | Lesson 08      |
| 9        | Cost tracking                              | Lesson 11      |
| 10       | Subagent coordination via agents parameter | Lesson 07      |
| 11       | Least privilege                            | Lessons 08, 12 |
| 12       | Multi-agent vs. single-agent               | Lessons 07, 15 |

> **James:** I got Q4 wrong. I picked B, thinking `bypassPermissions` with a specific `allowed_tools` list was the most permissive.
>
> **Emma:** That is actually a reasonable confusion. Option B is powerful, but the `allowed_tools` list constrains which tools are available. Option D removes both constraints: no permission checks and no tool restrictions.
>
> **James:** "So `bypassPermissions` controls whether the user is asked for confirmation, and `allowed_tools` controls which tools exist in the first place?"
>
> **Emma:** "Two separate dimensions. Permission mode is the confirmation gate. `allowed_tools` is the availability gate. The most permissive configuration opens both gates."
>
> **James:** "And the most secure configuration?"
>
> **Emma:** "Default permission mode with a narrow `allowed_tools` list. The user confirms every sensitive action, and the agent can only see the tools it needs."

## Chapter Complete

You have covered the Claude Agent SDK from the orchestration gap through single-agent queries, MCP server integration, custom tools, multi-agent handoffs, guardrails, supervision, cost tracking, and permission modes. The patterns you practiced here form the "brain" component of NanoClaw.

In Chapter 74, you will apply the same MCP servers and HireFlow domain to a different SDK (the OpenAI Agents SDK), comparing how each framework handles the same problems. The domain knowledge and MCP tools carry over; only the orchestration layer changes.

## Backward References

- **Lesson 03** introduced tool call order prediction. Question 5 tests whether you retained that reasoning skill.
- **Lesson 05** introduced the MCP naming convention. Question 2 tests mechanical recall.
- **Lesson 07** introduced multi-agent handoffs. Questions 3, 10, and 12 test conceptual understanding of when and how to use subagents.
- **Lesson 08** introduced guardrails. Questions 6, 8, and 11 test your ability to classify guardrails by type and apply least privilege.
- **Lesson 09** introduced supervision. Question 7 tests your understanding of where human review adds the most value.
- **Lesson 11** introduced cost tracking. Questions 1 and 9 test your understanding of when to use each query pattern and where usage data lives.
- **Lesson 12** introduced permission modes. Question 4 tests your understanding of the two permission dimensions.
