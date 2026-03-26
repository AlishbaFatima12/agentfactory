---
sidebar_position: 1
title: "Why Runtime Integration"
description: "Understand why validated agent skills and working MCP servers are useless in isolation, and discover the runtime integration pattern that connects intelligence to execution."
chapter: 71
lesson: 1
duration_minutes: 20
keywords:
  - runtime integration
  - skill-tool contract
  - tool call sequence
  - MCP client
  - HireFlow pipeline
  - agent architecture

skills:
  - name: "Understanding Runtime Integration"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can explain why agent skills and MCP tools must be connected at runtime and describe the data flow between them"

  - name: "Identifying the Skill-Tool Gap"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Can identify the missing link between a validated skill and a working MCP tool and articulate what runtime integration solves"

  - name: "Describing the Tool Call Sequence"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can describe the five-step sequence (read context, decide action, call tool, process result, decide next action) from memory"

learning_objectives:
  - objective: "Explain why validated skills and working MCP servers cannot produce value until they are connected at runtime"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Written explanation using the brain/hands analogy"

  - objective: "Describe the five-step tool call sequence that connects a skill to an MCP tool"
    proficiency_level: "B2"
    bloom_level: "Understand"
    assessment_method: "Sequence recall: list the five steps in correct order"

  - objective: "Conduct a checkpoint inventory of HireFlow components built in Chapters 67-70"
    proficiency_level: "B1"
    bloom_level: "Remember"
    assessment_method: "Completed inventory table matching skills to MCP tools"

cognitive_load:
  new_concepts: 4
  assessment: "Four new concepts: runtime integration, skill-tool contract, tool call sequence, checkpoint inventory. All conceptual with no code. Each builds on familiar components from Chapters 67-70."

differentiation:
  extension_for_advanced: "Sketch a sequence diagram showing the full data flow from raw CV text through the skill layer, across MCP, and back to a hiring decision. Include error paths."
  remedial_for_struggling: "Focus on the brain/hands analogy first. List the four skills on one side and the six MCP tools on the other. Draw lines showing which skill needs which tool."
---

# Why Runtime Integration

## The Pieces That Don't Talk

James had everything. Four validated skills from Chapter 67. Simulation results from Chapter 68 proving those skills could score candidates, generate interview questions, and write job specifications. A Resume Screener MCP server from Chapter 69. A unified HireFlow MCP server from Chapter 70 with `parse_cv`, `extract_skills`, `extract_experience`, `list_templates`, `get_template`, and `validate_job_spec`.

He opened two terminal windows side by side. In the left terminal, his HireFlow MCP server was running. In the right terminal, his Resume Screener skill logic sat in a Python file, ready to evaluate candidates.

"So I run them both," James said. "The skill scores candidates. The MCP server parses CVs. We're done."

Emma looked at both terminals. "Call the MCP server from the skill."

James paused. "What do you mean, call it?"

"Your Resume Screener skill knows HOW to score candidates. Your MCP server CAN parse CVs. Show me where the skill asks the server to parse a CV."

James scrolled through his code. The skill had scoring logic. The server had parsing tools. Neither one referenced the other.

"I have a brain in a jar," James said slowly, "and hands that can't feel anything."

"Exactly," Emma said. "Your intelligence layer and your execution layer are disconnected. You have both halves of a system, but no wiring between them."

## What Runtime Integration Means

**Runtime integration** is the code that connects an agent's decision-making (skills) to its actions (MCP tools) during execution. Without it, skills cannot invoke tools and tools never receive instructions.

Consider a hiring manager who reads a CV and decides the candidate looks strong. That decision has no effect unless the manager picks up the phone, calls the interview team, and says "schedule this person." The decision (skill) must trigger the action (tool call), and the result must flow back to inform the next decision.

Runtime integration is the phone call. It is the connection that turns a static skill into a functioning agent.

This chapter teaches you how to write that connection. By the end, your skills will call MCP tools, receive structured results, and use those results to drive further actions.

:::info Quick Recall: Chapters 69 and 70
Before proceeding, test your memory of the MCP servers you built.

1. In Chapter 70, you built a CV parser tool called `parse_cv`. What Pydantic model does it return? What happens when it receives empty text?
2. In Chapter 69, what decorator registers a tool with FastMCP? What transport did your server use?
3. In Chapter 70, how does the `extract_experience` tool handle a CV with education but no work history section?

If you cannot answer all three, review Chapters 69-70 before continuing. The code in this chapter builds directly on those servers.
:::

## The Five-Step Sequence

"Wait, so basically the skill talks to the MCP server the same way a browser talks to a web server?" James asked.

Emma tilted her head. "Close enough for now. The skill is the client. The MCP server is the server. But the conversation follows a specific pattern."

She drew five steps on the whiteboard.

The **tool call sequence** is the pattern every skill follows when it uses an MCP tool:

1. **Read context.** The skill receives input data (a raw CV, a job description, a candidate profile).
2. **Decide action.** Based on the input, the skill determines which MCP tool to call and what arguments to pass.
3. **Call tool.** The skill sends a request to the MCP server, specifying the tool name and its arguments.
4. **Process result.** The skill receives the tool's response and extracts the relevant data.
5. **Decide next action.** Based on the result, the skill either calls another tool, returns a final answer, or reports an error.

These five steps repeat. A skill might call `parse_cv` in step 3, process the parsed data in step 4, then loop back to step 2 and decide to call `score_candidate` next. The tool call sequence is not a single call; it is a loop that continues until the skill has enough information to produce its final output.

"So each skill becomes a little orchestrator," James said. "It reads, decides, calls, reads the result, decides again."

"That is the core pattern of every agent," Emma said. "Intelligence without action is analysis. Action without intelligence is automation. The combination is agency."

James studied the five steps again. "Step 4 feels like overhead. If the tools work, and we tested them in Chapter 70, do we really need to process and validate every single result? Can't the skill just pass it straight to the next call?"

"What happens if the MCP server takes three seconds to respond instead of 200 milliseconds?" Emma asked.

"Add a timeout," James said. "Five seconds, say. If it doesn't respond, raise an error. Simple."

"Okay. Your timeout fires at five seconds. The server responds at 4.8 seconds with a partial result because it parsed the name and email but ran out of memory before extracting skills. Your timeout did not trigger. What does your skill do next?"

James frowned. "It gets back a result, so it passes it to `score_candidate`."

"And `score_candidate` receives a `ParsedCV` with a name and email but an empty skills list. It scores the candidate as having zero relevant skills. You reject a qualified candidate because your integration assumed 'got a response' means 'got a complete response.'"

"So I check the result," James said slowly. "Step 4 is where I verify the data is actually complete before I feed it to the next tool."

"Every tool call is a boundary crossing," Emma said. "Data can arrive late, partial, or malformed. The five-step loop exists because each result needs inspection before it drives the next decision."

## Checkpoint Inventory

Before writing integration code, you need to know exactly what you are connecting. This is a **checkpoint inventory**: a complete list of the components you have built and the interfaces they expose.

Here is what HireFlow has after Chapters 67-70:

| Component             | Type     | Chapter | Interface                                            |
| --------------------- | -------- | ------- | ---------------------------------------------------- |
| Job Spec Writer       | Skill    | 67      | Takes role description, produces structured job spec |
| Resume Screener       | Skill    | 67      | Takes CV + requirements, produces score + reasoning  |
| Interview Q Generator | Skill    | 67      | Takes job spec + CV, produces ranked questions       |
| Candidate Summarizer  | Skill    | 67      | Takes all candidate data, produces executive summary |
| `parse_cv`            | MCP Tool | 70      | Takes raw CV text, returns structured `ParsedCV`     |
| `extract_skills`      | MCP Tool | 70      | Takes raw CV text, returns skills list               |
| `extract_experience`  | MCP Tool | 70      | Takes raw CV text, returns experience entries        |
| `list_templates`      | MCP Tool | 70      | No args, returns available job template names        |
| `get_template`        | MCP Tool | 70      | Takes template name, returns template content        |
| `validate_job_spec`   | MCP Tool | 70      | Takes job spec dict, returns validation result       |

This chapter introduces one additional tool: `score_candidate`, which combines CV parsing with scoring against job requirements. You will build it in Lesson 2 as a composite tool that takes parsed CV data and a requirements string, then returns a match score with reasoning. It does not exist yet in the HireFlow server; it is the first tool you create as part of the integration work.

Look at the table. The skills in the top four rows need data that the tools in the bottom six rows can provide. The Resume Screener needs parsed CV data; `parse_cv` produces it. The Job Spec Writer needs template content; `get_template` delivers it.

The checkpoint inventory makes the wiring explicit. You can now draw lines between skills and tools, and those lines become the integration code you will write in Lesson 2.

## Where This Chapter Fits

"I keep hearing 'Incubate phase,'" James said. "What does that actually mean for us right now?"

In Chapter 67, you wrote four skills (the intelligence layer). In Chapters 69-70, you built MCP servers (the execution layer). This chapter is the wiring between them. It closes the Incubate phase of the Agent Factory lifecycle. When this chapter is done, you will have validated intelligence connected to validated infrastructure. Phase 3 brings Agent SDKs, where external orchestration frameworks take over and your skills become components in larger systems.

Think of it this way. Phase 1 (Explore) answered "What should the agents do?" Phase 2 (Incubate) answers "Can the pieces actually work?" This chapter is the final Incubate test: can the brain control the hands?

"And if it can't?" James asked.

"Then you find out now," Emma said, "before you build the full factory around broken wiring."

:::tip Key Insight
Runtime integration is not a nice-to-have feature you add at the end. It is the validation that your entire architecture holds together. A skill that cannot call a tool is a function that never runs. A tool that no skill invokes is dead code. This chapter proves the connection works before you invest in orchestration frameworks.
:::

## What You Will Build

Over the next lessons, you will:

- Read and predict the behavior of a skill that calls MCP tools (Lesson 2)
- Trace the tool call sequence step by step, including edge cases (Lesson 3)
- Investigate what happens when tools return unexpected data or fail entirely (Lessons 3-4)
- Write your own integration connecting skills to the HireFlow MCP server (later lessons)

Each lesson builds on the previous one. The tool call sequence you learned in this lesson is the mental model you will use throughout. When you see integration code, ask: which step is this? Read, decide, call, process, or decide again?
