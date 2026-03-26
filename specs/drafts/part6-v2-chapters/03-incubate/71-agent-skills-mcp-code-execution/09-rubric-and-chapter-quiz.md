---
sidebar_position: 9
title: "Rubric and Chapter Quiz"
description: "Self-assess your skill-to-tool integration mastery across five dimensions and test your knowledge with a 15-question quiz covering contracts, error handling, orchestration, and verification."
chapter: 71
lesson: 9
duration_minutes: 20
keywords:
  - self-assessment
  - rubric
  - chapter quiz
  - skill-tool contract
  - error taxonomy
  - orchestration
  - verification ladder
  - graceful degradation
  - checkpoint inventory

skills:
  - name: "Integration Self-Assessment"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "2.4 Netiquette"
    measurable_at_this_level: "Accurately rate own proficiency across five dimensions of skill-to-tool integration using the rubric criteria"

  - name: "Runtime Integration Knowledge"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Answer 10 or more quiz questions correctly, demonstrating understanding of skill-tool contracts, error handling, orchestration patterns, and verification"

learning_objectives:
  - objective: "Self-assess proficiency across five integration dimensions (prediction accuracy, trace quality, explanation quality, modification quality, independent make) using a structured rubric"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student places themselves in Developing/Competent/Fluent for each dimension and identifies areas for review"

  - objective: "Demonstrate comprehensive understanding of skill-to-tool integration by answering 15 multiple-choice questions covering contracts, errors, orchestration, and verification"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student scores 10/15 or higher on the chapter quiz"

cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This lesson is purely assessment and reflection on material from Lessons 1-8. Cognitive load is low; the challenge is retrieval and application of prior knowledge."

differentiation:
  extension_for_advanced: "For each quiz question you got wrong, write a corrected version of the wrong answer that explains why it fails. This forces deeper analysis of the misconception."
  remedial_for_struggling: "If you score below 10/15, go back to the specific lessons referenced in the wrong-answer explanations. Work through the PREDICT exercises in those lessons again before retaking the quiz."
---

# Rubric and Chapter Quiz

You have covered skill-to-tool integration from motivation through implementation. This lesson has two parts: a self-assessment rubric that shows where you are strong and where you need more practice, and a 15-question quiz that tests the chapter's core concepts.

---

## Part A: Self-Assessment Rubric

Rate yourself honestly on each dimension. The goal is not to score "Fluent" on everything. The goal is to know exactly where you stand so you can plan your review before Phase 3.

| Dimension                | Developing                                                       | Competent                                                                           | Fluent                                                                                  |
| ------------------------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Prediction Accuracy**  | Predictions wrong more than 50% on tool call sequences           | Predictions correct 50-80%; identified some edge cases in tool behavior             | Predictions correct more than 80% with calibrated confidence on tool failures           |
| **Trace Quality**        | Traces incomplete; missed tool call steps or error paths         | Traces accurate without AI assistance; minor gaps in multi-tool sequences           | Traces complete; caught contract violations independently before being told             |
| **Explanation Quality**  | Cannot explain skill-tool contract without re-reading the lesson | Can explain in own words with effort; may confuse contract levels                   | Can explain to another person and justify why each error handling choice matters        |
| **Modification Quality** | Modifications needed AI help or more than 2 attempts             | Correct on 1st or 2nd attempt without AI; added guards appropriately                | Correct on 1st attempt; added improvements beyond what the prompt asked                 |
| **Independent Make**     | Spec needed AI help; Summarizer had more than 3 bugs             | Spec written independently; 1-2 issues in implementation caught by discipline stack | Spec and implementation both clean on first pass; graceful degradation worked correctly |

### How to Use This Rubric

1. **Read each row** and find the column that most honestly describes your current ability.
2. **Mark your level** for each dimension.
3. **Identify patterns**: Are you stronger on reading code (Prediction, Trace) but weaker on writing it (Modification, Make)? Or the reverse?
4. **Plan your review**: For any dimension where you rated "Developing," revisit the relevant lessons.

| If Developing In...  | Review These Lessons                                                            |
| -------------------- | ------------------------------------------------------------------------------- |
| Prediction Accuracy  | Lessons 2-3: redo the STOP_AND_PREDICT exercises with fresh inputs              |
| Trace Quality        | Lesson 3: trace the full tool call sequence including error paths               |
| Explanation Quality  | Lesson 1: re-read the skill-tool contract definition; Lesson 4: Error Taxonomy  |
| Modification Quality | Lesson 7: redo Modifications A and B without looking at solutions               |
| Independent Make     | Lesson 8: redo the capstone with a different skill (e.g., wire Job Spec Writer) |

### Reflection Prompt

Answer these questions before moving to the quiz:

1. **Hardest concept**: What was the hardest concept in this chapter? Was it the skill-tool contract, the error handling patterns, the multi-tool orchestration, or the graceful degradation design?

2. **Guard pattern**: How confident are you in writing the `isError` guard without looking it up? If you had to write it from memory right now, would you get the `not parsed.content` check right?

3. **If you had 30 more minutes**: Where would you spend them? The answer tells you what you have not yet mastered.

> **James:** "I rated myself Fluent on Prediction but Competent on the Make. I could predict what the code would do, but writing it from scratch took two passes."
>
> **Emma:** "Reading and writing are different skills. Can you read French literature and write French poetry? Prediction exercises your reading. The Make exercises your writing."
>
> **James:** "So both matter."
>
> **Emma:** "Both matter. And the gap between them is normal. It closes with practice, not with reading more lessons."

---

## Part B: Chapter Quiz

15 multiple-choice questions. One correct answer per question. After answering all 15, check your answers using the expandable sections.

---

**Question 1**: What is a **skill-tool contract**?

A) A legal agreement between the skill developer and the MCP server provider
B) The implicit agreement between a skill and a tool about input format, output format, and error behavior
C) A Python class that enforces type checking between function calls
D) The JSON-RPC schema that defines tool parameters

<details>
<summary>Answer</summary>

**B)** The skill-tool contract is the implicit agreement between a skill and a tool about what data goes in, what data comes out, and what happens on failure. It is not a legal document (A). It is not a Python class (C), though type annotations help enforce parts of it. It is broader than the JSON-RPC schema (D), which only covers parameter types, not semantic expectations like "scores are floats between 0.0 and 1.0."

</details>

---

**Question 2**: When `result.isError` is `True` after calling `session.call_tool()`, what does this indicate?

A) The MCP server process crashed and needs to be restarted
B) The tool function raised an unhandled exception or returned an error through the protocol
C) The network connection between client and server was lost
D) The tool does not exist on the server

<details>
<summary>Answer</summary>

**B)** When `isError` is `True`, the tool call reached the server and the server processed it, but the tool itself reported a failure. This could be an unhandled exception in the tool function or an explicit error response. The server did not crash (A); if it had, the client session would raise a connection error. A lost network connection (C) would also raise a transport-level exception, not set `isError`. A nonexistent tool (D) would return a "method not found" JSON-RPC error before reaching the tool layer.

</details>

---

**Question 3**: Which MCP SDK class establishes a client connection to an MCP server?

A) `FastMCP`
B) `StdioServerParameters`
C) `ClientSession`
D) `McpClient`

<details>
<summary>Answer</summary>

**C)** `ClientSession` is the class that establishes and manages the client-side connection to an MCP server. You call `await session.initialize()` to complete the handshake, then use `session.call_tool()` to invoke tools. `FastMCP` (A) is for building servers, not clients. `StdioServerParameters` (B) configures how to launch the server process but does not establish the connection itself. `McpClient` (D) does not exist in the SDK.

</details>

---

**Question 4**: A skill calls `parse_cv` and receives a successful response, but the returned text contains `"error: unsupported format"` instead of parsed CV data. The skill then passes this string to `score_candidate`, which produces a score of 0. What error type is this?

A) Orchestration Error: the skill failed to coordinate tool calls correctly
B) Protocol Error: the JSON-RPC message was malformed
C) Semantic Contract Violation: the tool returned success but the content did not match expectations
D) Transport Error: the message was lost in transit

<details>
<summary>Answer</summary>

**A)** This is an Orchestration Error. The skill is responsible for checking whether a tool's successful response actually contains valid data before passing it downstream. The tool did not set `isError` (so the protocol layer reported success), but the content was an error message, not parsed CV data. The skill should have validated the content before proceeding. Protocol Error (B) is wrong because the JSON-RPC exchange was valid. Semantic Contract Violation (C) is close but describes the tool's behavior, not the skill's failure to handle it. Transport Error (D) is wrong because the message arrived intact.

</details>

---

**Question 5**: What is the correct order of operations when using the MCP Python SDK client?

A) `call_tool` then `initialize` then `stdio_client`
B) `stdio_client` then `ClientSession` then `initialize` then `call_tool`
C) `ClientSession` then `stdio_client` then `call_tool` then `initialize`
D) `initialize` then `stdio_client` then `ClientSession` then `call_tool`

<details>
<summary>Answer</summary>

**B)** The correct sequence is: open the stdio transport with `stdio_client` (which launches the server process and provides read/write streams), create a `ClientSession` with those streams, call `initialize()` to perform the protocol handshake, then call `call_tool()` to invoke tools. Each step depends on the previous one: you need transport before session, session before initialization, initialization before tool calls.

</details>

---

**Question 6**: Why does Emma check `result.isError` before accessing `result.content[0]`?

A) Because `result.content` is always `None` when `isError` is `True`
B) Because accessing `result.content[0]` on an empty list raises an `IndexError`, and error responses may have empty content
C) Because the MCP protocol requires checking `isError` before reading any field
D) Because `result.content[0]` returns encrypted data when `isError` is `True`

<details>
<summary>Answer</summary>

**B)** When a tool call fails, `result.content` may be an empty list or contain error information instead of the expected data. Accessing `result.content[0]` without checking would raise an `IndexError` if the list is empty. The guard pattern `if result.isError or not result.content` protects against both cases: explicit errors and empty responses. Option A is incorrect because `content` is not always `None`; it could be an empty list or contain error-descriptive content. Option C is incorrect because the protocol does not mandate checking order. Option D is fabricated.

</details>

---

**Question 7**: In the Verification Ladder, what rung corresponds to checking whether a pipeline of tool calls produces correct end-to-end results?

A) Rung 1: Individual tool output validation
B) Rung 2: Inter-tool data flow validation
C) Rung 3: Pipeline-level verification
D) Rung 4: Cross-system integration testing

<details>
<summary>Answer</summary>

**C)** Pipeline-level verification (Rung 3) checks whether the entire sequence of tool calls, from the first call through all intermediate processing to the final output, produces the correct result. Rung 1 (A) checks individual tool outputs in isolation. Rung 2 (B) checks that the output of one tool is valid input for the next tool. Rung 4 (D) is not a standard rung in the Verification Ladder as taught in this chapter.

</details>

---

**Question 8**: In a batch processing function that screens 5 candidates, `parse_cv` fails for candidate #3. What should happen to candidate #4?

A) The entire batch should stop and return an error for all 5 candidates
B) Candidate #4 should be processed normally; candidate #3's failure is logged and included in the batch results
C) The batch should retry candidate #3 three times before moving to candidate #4
D) Candidate #4 should be skipped because the server is assumed to be down

<details>
<summary>Answer</summary>

**B)** Each candidate in a batch is independent. A failure for one candidate does not mean the server is broken; the failure might be specific to that candidate's CV data (empty text, unsupported format, encoding issues). The batch should log candidate #3's error, include it in the results, and continue processing candidate #4. Option A is wrong because it punishes all candidates for one failure. Option C is wrong because unlimited retries on a per-candidate basis would delay the entire batch. Option D is wrong because one tool failure does not indicate a server-wide outage.

</details>

---

**Question 9**: What does Axiom I (Shell as Orchestrator) mean for skill design?

A) Skills should be written as Bash shell scripts that call MCP tools via command line
B) The skill (orchestration layer) decides which tools to call and in what order; tools execute but do not make orchestration decisions
C) The MCP server is the shell that wraps around all skill logic
D) Skills should run inside a Docker container (shell environment) for isolation

<details>
<summary>Answer</summary>

**B)** Axiom I means the skill is the orchestrator: it reads context, decides which tool to call, processes results, and decides the next action. Tools are executors; they perform a specific computation when asked but do not decide whether or when to be called. This separation keeps orchestration logic in one place (the skill) and execution logic in another (the tool). Option A confuses "shell" with Bash. Option C inverts the relationship. Option D confuses "shell" with containerization.

</details>

---

**Question 10**: What retry pattern prevents overwhelming a failing MCP server with rapid reconnection attempts?

A) Immediate retry: call the tool again with no delay
B) Fixed interval: wait exactly 1 second between every retry
C) Exponential backoff: increase the delay between each successive retry (1s, 2s, 4s, 8s)
D) Random retry: wait a random number of seconds between 0 and 60

<details>
<summary>Answer</summary>

**C)** Exponential backoff increases the wait time between retries, giving the server progressively more time to recover. If the server is under load, rapid retries (A) make the problem worse. Fixed intervals (B) are better than immediate retry but do not adapt to the severity of the outage. Random retry (D) could produce very long waits unnecessarily or very short waits that still overwhelm the server. Exponential backoff is the standard pattern for transient failure recovery.

</details>

---

**Question 11**: What is **graceful degradation** in a multi-tool workflow?

A) Gradually reducing the number of tools a skill can access over time
B) Returning as much useful data as possible when some tools fail, instead of failing entirely
C) Automatically removing failed tools from the MCP server's registry
D) Downgrading the AI model to a smaller version when tools are unavailable

<details>
<summary>Answer</summary>

**B)** Graceful degradation means the skill produces a partial but useful result when some tool calls fail. For example, if `extract_skills` fails but `parse_cv` and `score_candidate` succeed, the summary still includes the candidate profile and match score, with the skills section marked as unavailable. Option A describes resource reduction, not degradation handling. Option C describes server reconfiguration, which is not the skill's responsibility. Option D is fabricated.

</details>

---

**Question 12**: What does the checkpoint inventory at the end of Chapter 71 verify?

A) That all MCP servers are deployed to production
B) That all four HireFlow skills have working runtime access to the MCP tools they need
C) That the AI model can autonomously discover and call all tools
D) That the hiring manager dashboard displays candidate data correctly

<details>
<summary>Answer</summary>

**B)** The checkpoint inventory verifies that each of the four HireFlow FTE skills (Job Spec Writer, Resume Screener, Interview Q Generator, Candidate Summarizer) can call its listed MCP tools without errors. It is an integration verification, not a deployment step (A). It tests skill-to-tool connectivity, not autonomous model behavior (C). It does not test UI rendering (D). The inventory closes Phase 2: Incubate by proving that validated intelligence (skills) is connected to validated infrastructure (MCP tools).

</details>

---

**Question 13**: James writes `score = score_result.content[0].text` without checking `score_result.isError` first. The `score_candidate` tool times out and returns an error. What happens?

A) The variable `score` is set to `None` and the function continues silently
B) The variable `score` is set to an error message string and the function uses it as a score
C) An `IndexError` or `AttributeError` is raised because `content` may be empty or structured differently on error
D) The MCP SDK automatically retries the call and sets `score` to the retry result

<details>
<summary>Answer</summary>

**C)** When a tool call fails, `result.content` may be an empty list, which means `result.content[0]` raises an `IndexError`. Even if content is present, it may not have a `.text` attribute in the expected format, leading to an `AttributeError`. The SDK does not set the value to `None` silently (A). It does not guarantee an error message in `.text` format (B). The SDK does not automatically retry (D); retry logic must be implemented by the skill.

</details>

---

**Question 14**: The `extract_skills` tool returns skills as `["python", "sql", "fastapi"]` (lowercase). The `get_template` tool returns required competencies as `["Python", "SQL", "FastAPI", "Docker"]` (title case). A skill compares them directly with `==`. How many skills appear to match?

A) 3 out of 4 (Python, SQL, FastAPI match; Docker does not)
B) 0 out of 4 (case-sensitive comparison fails for all)
C) 4 out of 4 (comparison is case-insensitive by default in Python)
D) 1 out of 4 (only exact matches count)

<details>
<summary>Answer</summary>

**B)** Python string comparison is case-sensitive by default. `"python" == "Python"` evaluates to `False`. So a direct comparison finds zero matches, even though the candidate has 3 of the 4 required skills. This is a semantic contract violation: both tools refer to the same skills but use different casing conventions. The fix is to normalize both lists to the same case (e.g., `.lower()`) before comparing. Option A would be correct only if comparison were case-insensitive. Option C is wrong; Python does not do case-insensitive comparison by default. Option D is wrong about the count.

</details>

---

**Question 15**: After completing the checkpoint inventory, all four HireFlow skills have MCP tool access. What is the next phase, and what does it add on top of the integration built in this chapter?

A) Phase 3: Build Specialist. It adds Agent SDKs that provide a production runtime with memory, planning, and multi-agent coordination.
B) Phase 3: Build Specialist. It replaces MCP with a proprietary protocol for better performance.
C) Phase 2b: Extended Incubate. It adds more MCP tools before moving to production.
D) Phase 3: Build Specialist. It removes the skill layer and has Agent SDKs call MCP tools directly.

<details>
<summary>Answer</summary>

**A)** Phase 3 (Build Specialist, starting in Chapter 72) introduces Agent SDKs such as the OpenAI Agents SDK. These frameworks add orchestration capabilities (memory, planning, multi-agent coordination) on top of the skill-to-tool integration you built in Phase 2. The skills and MCP tools remain; the Agent SDK sits above them as a production runtime. Option B is wrong because MCP is not replaced. Option C is wrong because Phase 2 ends with Chapter 71's checkpoint inventory. Option D is wrong because the skill layer remains as the intelligence layer; Agent SDKs orchestrate skills, not replace them.

</details>

---

## Quiz Scoring

| Score   | Interpretation                                                                                                                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 13-15   | Strong understanding of skill-to-tool integration. You are ready for Phase 3 (Chapter 72).                                          |
| 10-12   | Good foundation with some gaps. Review the lessons referenced in the questions you missed.                                          |
| 7-9     | Several concepts need reinforcement. Focus on areas where you missed 2 or more questions in the same category.                      |
| Below 7 | Revisit the chapter from Lesson 1. Work through the Predict exercises and the Modify exercises (Lesson 7) before retaking the quiz. |

### Question-to-Lesson Mapping

If you missed a question, use this table to find the lesson that covers that topic:

| Question | Topic                                       | Review Lesson                       |
| -------- | ------------------------------------------- | ----------------------------------- |
| 1        | Skill-tool contract definition              | Lesson 1, Lesson 3                  |
| 2        | `isError` behavior                          | Lesson 4                            |
| 3        | MCP SDK client classes                      | Lesson 2                            |
| 4        | Error Taxonomy: Orchestration Error         | Lesson 4, Lesson 5                  |
| 5        | Client initialization sequence              | Lesson 2                            |
| 6        | Guard pattern reasoning                     | Lesson 4                            |
| 7        | Verification Ladder                         | Lesson 3                            |
| 8        | Batch processing independence               | Lesson 5                            |
| 9        | Axiom I: Shell as Orchestrator              | Lesson 5                            |
| 10       | Retry with backoff                          | Lesson 7 (Modification B)           |
| 11       | Graceful degradation                        | Lesson 7 (Modification C), Lesson 8 |
| 12       | Checkpoint inventory purpose                | Lesson 8                            |
| 13       | Unguarded tool call consequences            | Lesson 4                            |
| 14       | Semantic contract violation (case mismatch) | Lesson 5                            |
| 15       | Phase 3 forward reference                   | Lesson 1, Lesson 8                  |

> **James:** "I missed question 14. I forgot that Python string comparison is case-sensitive."
>
> **Emma:** "That is not an MCP concept. It is a Python fundamental. But it causes real bugs in multi-tool workflows because different tools may normalize strings differently."
>
> **James:** "So the skill has to normalize before comparing. The tools will not coordinate with each other."
>
> **Emma:** "The tools are independent. Coordination is the skill's job. That is Axiom I."

---

## Glossary

| Term                               | Definition                                                                                                | First Introduced   |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------ |
| **Runtime integration**            | Code that connects an agent's decision-making (skills) to its actions (MCP tools) during execution        | Lesson 1           |
| **Skill-tool contract**            | The implicit agreement between a skill and a tool about input format, output format, and error behavior   | Lesson 1           |
| **Tool call sequence**             | The five-step pattern: read context, decide action, call tool, process result, decide next action         | Lesson 1           |
| **Checkpoint inventory**           | A complete list of components, their interfaces, and their verified connection status                     | Lesson 1, Lesson 8 |
| **`isError` guard**                | The pattern of checking `result.isError or not result.content` before accessing tool results              | Lesson 4           |
| **Error Taxonomy**                 | Classification of integration errors: Orchestration, Protocol, Semantic Contract, Transport               | Lesson 4           |
| **Verification Ladder**            | Progressive verification rungs: individual output, inter-tool flow, pipeline-level                        | Lesson 3           |
| **Axiom I: Shell as Orchestrator** | The principle that the skill (shell) decides which tools to call; tools execute but do not orchestrate    | Lesson 5           |
| **Graceful degradation**           | Returning as much useful data as possible when some tool calls in a multi-tool workflow fail              | Lesson 7, Lesson 8 |
| **Retry with backoff**             | A pattern where failed tool calls are retried after increasing delays to avoid overwhelming the server    | Lesson 7           |
| **Semantic contract violation**    | When a tool returns success but the content does not match the skill's expectations (e.g., case mismatch) | Lesson 5           |

## Chapter Complete

You have covered skill-to-tool integration from the gap between skills and tools through contracts, error handling, multi-tool orchestration, and a full capstone build. The checkpoint inventory at the end of Lesson 8 verified that all four HireFlow FTE skills have working MCP tool access. This closes Phase 2: Incubate.

Phase 3 (Build Specialist) begins in Chapter 72. The integration code you wrote here becomes the foundation that Agent SDKs orchestrate. The guard patterns, retry logic, and graceful degradation strategies you practiced will reappear throughout the remaining chapters, because every agent you build will call tools through the same patterns.

## Backward References

- **Lesson 1** introduced the skill-tool contract and five-step sequence. Questions 1 and 5 test retention.
- **Lesson 4** introduced the `isError` guard and Error Taxonomy. Questions 2, 4, 6, and 13 test whether you can apply them.
- **Lesson 5** introduced Axiom I and semantic contract violations. Questions 8, 9, and 14 test comprehension.
- **Lesson 7** introduced retry logic and graceful degradation. Questions 10 and 11 test understanding.
- **Lesson 8** introduced the checkpoint inventory. Questions 12 and 15 test its purpose and what comes next.
