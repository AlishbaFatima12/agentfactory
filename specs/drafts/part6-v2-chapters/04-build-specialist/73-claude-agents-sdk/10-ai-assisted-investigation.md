---
sidebar_position: 10
title: "AI-Assisted Trace and Error Taxonomy"
description: "Use Claude Code to investigate your own agent code, trace execution paths, and classify every error encountered in this chapter into a structured taxonomy mapped to the Verification Ladder."
chapter: 73
lesson: 10
duration_minutes: 30
keywords:
  - ai-assisted investigation
  - error taxonomy
  - verification ladder
  - agent debugging
  - execution trace
  - claude code investigation
  - hireflow debugging
  - error classification
skills:
  - name: "AI-Assisted Code Investigation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can use Claude Code to trace agent execution, compare AI-generated traces against manual traces, and identify discrepancies"
  - name: "Error Taxonomy Classification"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can classify agent failures into five error categories and map each to the appropriate Verification Ladder rung"
  - name: "Edge Case Generation"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can generate novel edge cases for agent systems using AI assistance and predict the resulting error type before testing"
learning_objectives:
  - objective: "Use Claude Code to generate an execution trace of agent code and compare it against a manually constructed trace"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Side-by-side comparison: identify at least two differences between AI-generated and manual traces"
  - objective: "Classify all error types encountered in Lessons 01 through 09 into a five-category error taxonomy"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Completed classification table with error type, lesson reference, and Verification Ladder rung for each entry"
  - objective: "Generate new edge cases using Claude Code and predict error types before testing"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Three new edge cases with predictions, plus post-test comparison of predicted vs actual error type"
cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: AI-assisted investigation as a debugging method and formal error taxonomy with Verification Ladder mapping. Students have encountered individual errors throughout the chapter; this lesson organizes that scattered experience into a structured framework. The AI-assisted exercise is procedural, not conceptual."
differentiation:
  extension_for_advanced: "After completing the error taxonomy, identify which error categories are detectable at compile time, which require runtime testing, and which can only be caught through simulation. Propose an automated detection strategy for each category."
  remedial_for_struggling: "Focus on the error classification table. If you can match each error from the chapter to its category and explain why it belongs there, you have the core skill. The AI-assisted trace is a tool for verification, not a prerequisite."
---

# AI-Assisted Trace and Error Taxonomy

## James Reviews the Wreckage

James scrolled through his notes from the past eight lessons. Each one had produced at least one surprise: a tool call that failed, a permission that blocked an operation, an agent that looped when it should have stopped, a prompt injection that bypassed a guardrail. Each time, he had fixed the immediate problem and moved on.

"I feel like I've been putting out fires," he said. "But I don't have a map of where fires start."

Emma nodded. "You have solved nine individual problems. You have not yet built a mental model of what kinds of problems exist. That is what this lesson fixes."

## Part 1: AI-Assisted Investigation

Before building the error taxonomy, you will use Claude Code itself as an investigation tool. The goal: take agent code you have already written and ask Claude Code to trace its execution, then compare that AI-generated trace against your own understanding.

:::tip AI-ASSISTED INVESTIGATION
Open Claude Code and paste the agent loop code from Lesson 03 (the basic `query()` call with `ClaudeAgentOptions` and the `async for` message processing loop). Ask:

```
Trace the execution of this agent step by step. For each turn, show:
1. What the agent reasons about (the assistant message content)
2. Which tool it decides to call and why
3. What the tool returns (the tool result)
4. How the agent uses that result to decide the next action

Assume the agent is processing a CV file for a Senior Python Developer role
using the parse_cv and score_candidate MCP tools.
```

Claude Code will produce a detailed trace. Save it.
:::

Now compare the AI-generated trace with the trace table you built manually in Lesson 04. Look for these specific differences:

| Comparison Point | Your Manual Trace                         | Claude Code's Trace                            |
| :--------------- | :---------------------------------------- | :--------------------------------------------- |
| Number of turns  | How many did you predict?                 | How many does the AI predict?                  |
| Tool call order  | Which tool did you expect first?          | Does the AI agree?                             |
| Decision points  | Where did you expect the agent to reason? | Does the AI identify the same decision points? |
| Edge cases       | Did you consider failure paths?           | Does the AI mention failures?                  |

The point of this comparison is not to determine which trace is "correct." Both are predictions. The value is in the gaps: places where you assumed something the AI made explicit, or where the AI assumed something you questioned.

James ran the exercise and found two surprises. "The AI trace includes a step where the agent checks whether the CV file exists before calling parse_cv. My trace jumped straight to the tool call."

"That is a real execution step," Emma said. "The agent reasons about preconditions. Your trace skipped the reasoning, and the AI trace skipped a potential failure mode. Neither trace is complete. Together they get closer."

## Part 2: The Error Taxonomy

Throughout Lessons 01 through 09, you have encountered five distinct categories of error. Each one breaks the agent in a different way, at a different layer of the system.

### Category 1: Type Error

**Definition**: The agent passes a value of the wrong type to a tool or function. The system rejects the input before any logic runs.

**Example from this chapter**: Passing a string where `score_candidate` expects a float for the minimum score threshold. The MCP server's Pydantic model rejects the input with a validation error.

**Characteristic**: Fails immediately. The error message points directly to the problem. These are the easiest errors to fix because the system tells you exactly what is wrong.

### Category 2: Logic Error

**Definition**: The agent calls tools in the wrong order or applies the wrong reasoning to a correct set of inputs.

**Example from this chapter**: Calling `score_candidate` before `parse_cv`. The scoring tool receives unstructured text instead of the parsed JSON it expects. No type error occurs (both are strings), but the output is meaningless.

**Characteristic**: Produces output that looks valid but is wrong. These errors are dangerous because the system does not reject them. You only catch them by inspecting results.

### Category 3: Data/Edge-Case Error

**Definition**: The input data is missing, malformed, or outside the expected range.

**Example from this chapter**: A CV file in an unexpected format (DOCX instead of PDF), a candidate with no work history section, or a job specification with contradictory requirements.

**Characteristic**: The agent's logic is correct, but the world does not match its assumptions. These errors surface during testing with diverse inputs.

### Category 4: Specification Error

**Definition**: The agent's prompt or instructions contain a vulnerability that allows unintended behavior.

**Example from this chapter**: The prompt injection scenario from Lesson 08, where a malicious CV contained instructions that overrode the agent's scoring rubric. The agent followed its instructions perfectly; the instructions themselves were compromised.

**Characteristic**: The system works as specified. The specification is the problem. These errors are invisible to testing that only uses well-formed inputs.

### Category 5: Orchestration Error

**Definition**: The coordination between agents or between an agent and its infrastructure fails.

**Example from this chapter**: The missing Task tool from Lesson 07, where a multi-agent handoff failed because the sub-agent did not have access to a required tool. Each agent worked correctly in isolation; the failure appeared only when they were composed.

**Characteristic**: Individual components pass their tests. The failure emerges from the interaction between components. These errors require integration testing.

## Mapping Errors to the Verification Ladder

Each error category maps to a specific rung on the **Verification Ladder**, the progressive testing strategy from earlier in this chapter:

| Error Category       |  Verification Ladder Rung   | Detection Method                                                           |
| :------------------- | :-------------------------: | :------------------------------------------------------------------------- |
| Type Error           |   Rung 1: Static Analysis   | Type checker or Pydantic validation catches the mismatch before runtime    |
| Logic Error          |    Rung 2: Unit Testing     | Test individual tool call sequences with known inputs and expected outputs |
| Data/Edge-Case Error |  Rung 3: Property Testing   | Generate diverse inputs (unusual formats, missing fields, boundary values) |
| Specification Error  | Rung 4: Adversarial Testing | Attempt prompt injection, boundary violation, and instruction override     |
| Orchestration Error  | Rung 5: Integration Testing | Run the full multi-agent pipeline end-to-end with realistic scenarios      |

The ladder is ordered by increasing difficulty of detection. Type errors are caught by machines. Orchestration errors require the full system running with realistic data.

"So the higher up the ladder, the later you find the bug," James said.

"And the more expensive it is to fix," Emma added. "A type error takes thirty seconds. An orchestration error can take a full day of debugging because you have to understand how four agents interact."

## Classifying This Chapter's Errors

Work through the table below. For each lesson, identify the primary error or failure point and classify it using the five categories.

| Lesson | Error / Failure Point                        |    Category    | Ladder Rung |
| :----: | :------------------------------------------- | :------------: | :---------: |
|   01   | No errors (conceptual introduction)          |      N/A       |     N/A     |
|   02   | Connecting to MCP server with wrong config   |   Type Error   |      1      |
|   03   | Agent loop terminates early due to max_turns |  Logic Error   |      2      |
|   04   | Tool returns unexpected format               | Data/Edge-Case |      3      |
|   05   | MCP tool not in allowed_tools list           | Orchestration  |      5      |
|   06   | Wrong tool call order in Parsons problem     |  Logic Error   |      2      |
|   07   | Multi-agent handoff with missing tool        | Orchestration  |      5      |
|   08   | Prompt injection via malicious CV            | Specification  |      4      |
|   09   | Borderline candidate auto-rejected           |  Logic Error   |      2      |

Some lessons involve multiple error types. The table above captures the primary one. Your classification may differ for lessons where two errors are equally prominent; that is fine. The reasoning matters more than the exact label.

## Part 3: Generate New Edge Cases

Now you will reverse the process. Instead of classifying errors you have already seen, you will generate new ones and predict their category before testing.

:::tip AI-ASSISTED EDGE CASE GENERATION
Open Claude Code and ask:

```
I am building a HireFlow recruitment agent with these MCP tools:
- parse_cv: extracts structured data from CV files
- score_candidate: rates candidates against a job specification
- reject_candidate: marks a candidate as rejected
- send_communication: sends an email to a candidate

Generate 5 edge cases that could cause failures in this agent system.
For each edge case, describe:
1. The specific input or scenario
2. Which tool is affected
3. What goes wrong

Do NOT include type errors or simple missing-file scenarios.
Focus on subtle failures that would pass basic testing.
```

Before reading Claude Code's output, write your own predictions for 3 edge cases. Then compare.
:::

### Exercise: Predict, Then Test

For each of the three edge cases you generated (or selected from Claude Code's suggestions), complete this table:

| Edge Case Description | Predicted Error Category | Predicted Ladder Rung | Actual Error Category (after testing) | Match? |
| :-------------------- | :----------------------: | :-------------------: | :-----------------------------------: | :----: |
| Your case 1           |                          |                       |                                       |        |
| Your case 2           |                          |                       |                                       |        |
| Your case 3           |                          |                       |                                       |        |

Fill in the "Predicted" columns first. Then, if you have a running HireFlow agent, test the edge cases and fill in the "Actual" column. If you cannot test them, ask Claude Code to predict the actual outcome and compare its prediction against yours.

James tried this exercise and predicted all three of his edge cases would be Data/Edge-Case errors. Two of them were. The third turned out to be a Specification error: a CV written entirely in French that the English-language scoring prompt could not evaluate correctly.

"I thought that was a data problem," James said. "The data is fine. It's valid French."

"The specification assumed English input without stating that assumption," Emma replied. "When the spec is the problem, the data is innocent."

## The Investigation Mindset

This lesson taught two complementary skills:

1. **Using AI to trace code you wrote.** The AI sees your code fresh, without the assumptions you carry from writing it. Differences between your trace and the AI's trace reveal blind spots.

2. **Classifying errors by category, not by symptom.** "It crashed" is a symptom. "The scoring tool received unstructured text because parse_cv was not called first" is a diagnosis. The taxonomy forces you to name the category, which points you to the correct Verification Ladder rung, which tells you how to prevent the error in the future.

Both skills compound. The better you classify past errors, the better you predict future ones. The better you use AI-assisted investigation, the more blind spots you uncover.

## Exercises

### Exercise 1: Complete Your Error Map

Go back through your own code from Lessons 02 through 09. For each lesson, identify every error you personally encountered (not the ones described in the lesson text, but the ones you hit while working through the exercises). Classify each one using the five categories. Which category appeared most often?

### Exercise 2: Cross-Trace Comparison

Ask Claude Code to trace the supervision pattern from Lesson 09 (the custom approval handler). Compare its trace against your understanding. Specifically: does the AI correctly identify the three branches (allow, deny, ask)? Does it predict what happens when a tool call is denied?

### Exercise 3: Taxonomy Gap Analysis

Look at the five error categories. Is there an error you have encountered in this chapter that does not fit neatly into any of them? If so, describe it and propose a sixth category. If every error fits, explain which category was the hardest to classify and why.

:::info Looking Ahead
The error taxonomy you built in this lesson becomes the testing framework for your complete HireFlow pipeline. When you reach the capstone project, you will write tests that target each category specifically, covering every rung of the Verification Ladder. The taxonomy is not academic; it is your test plan.
:::
