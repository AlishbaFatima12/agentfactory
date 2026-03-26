---
sidebar_position: 2
title: "Predict: Skill Calls MCP Tool"
description: "Read a Resume Screener integration that connects to the HireFlow MCP server, predict the tool call sequence and output, then compare your prediction against the actual result."
chapter: 71
lesson: 2
duration_minutes: 25
keywords:
  - MCP client
  - ClientSession
  - stdio_client
  - tool call sequence
  - predict and run
  - Resume Screener integration
  - HireFlow MCP

skills:
  - name: "Reading MCP Client Integration Code"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can read an async function that connects to an MCP server and identify the tool call sequence from the code"

  - name: "Predicting Tool Call Output"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Can trace through MCP client code and predict the return value for a given input by reasoning about each tool call's behavior"

learning_objectives:
  - objective: "Identify the MCP client connection pattern (StdioServerParameters, stdio_client, ClientSession) and explain each component's role"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Label each component in the connection setup code"

  - objective: "Predict the sequence of MCP tool calls and the final return value for a given CV input"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Written prediction compared against actual output"

  - objective: "Calibrate confidence in code predictions and identify patterns in prediction accuracy"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Confidence rating with post-prediction reflection"

cognitive_load:
  new_concepts: 3
  assessment: "Three new concepts: StdioServerParameters for server location, stdio_client as the transport layer, ClientSession as the communication channel. Students already know tool calls from Chapter 69. The async context manager pattern is familiar from Chapter 70."

differentiation:
  extension_for_advanced: "Predict what happens if you swap the order of the two tool calls. Does score_candidate work without the parsed CV data? Why or why not?"
  remedial_for_struggling: "Focus on the two tool calls only. Ignore the connection setup code. Ask: what goes in, what comes out, and what gets passed from the first call to the second?"
---

# Predict: Skill Calls MCP Tool

Here is James's first attempt at runtime integration. He wrote a function that connects to the HireFlow MCP server, parses a CV, and scores the candidate. Read the code carefully. Do not scroll past the prediction box until you have written your answers.

```python
# File: hireflow/integrations/screen_candidate.py
import asyncio
import json

from mcp.client.session import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client


async def screen_candidate(cv_text: str, job_requirements: str) -> dict[str, object]:
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            parsed = await session.call_tool("parse_cv", {"cv_text": cv_text})
            cv_data = parsed.content[0].text
            score_result = await session.call_tool(
                "score_candidate",
                {"cv_data": cv_data, "job_requirements": job_requirements},
            )
            return {"cv": json.loads(cv_data), "score": score_result.content[0].text}


if __name__ == "__main__":
    sample_cv = """
    Sarah Chen
    sarah.chen@email.com

    SKILLS
    Python, FastAPI, PostgreSQL, Docker, MCP

    EXPERIENCE
    Senior Backend Engineer at TechCorp (2021-2024)
    - Built microservices handling 10k requests/second
    - Led migration from monolith to service-oriented architecture

    Junior Developer at StartupXYZ (2019-2021)
    - Developed REST APIs using Flask
    - Wrote integration tests for payment processing

    EDUCATION
    BSc Computer Science, State University (2019)
    """
    requirements = "3+ years Python, microservices experience, API design"
    result = asyncio.run(screen_candidate(sample_cv, requirements))
    print(json.dumps(result, indent=2))
```

This function is 15 lines of integration logic (lines 9-22) plus a test harness. Count the tool calls. Read the data flow. Then answer the prediction questions below.

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll past this box. Write your answers on paper or in a separate file.

**Prediction 1:** What is the sequence of MCP tool calls? List each call in order, including the tool name and the arguments it receives.

**Prediction 2:** The sample CV lists Sarah Chen with five skills (Python, FastAPI, PostgreSQL, Docker, MCP) and two jobs. If `parse_cv` returns structured data from this CV, what will `score_candidate` receive as its `cv_data` argument? Describe the shape of that data.

**Prediction 3:** If `parse_cv` receives a CV with no SKILLS section at all, what will `cv_data` contain for the skills field? What will `score_candidate` do with that empty data?

**Confidence:** Rate your confidence in each prediction from 1 (guessing) to 5 (certain). Write the number next to each answer.
:::

## Expected Behavior

The function makes exactly two MCP tool calls in sequence:

**Call 1:** `session.call_tool("parse_cv", {"cv_text": cv_text})`

This sends the raw CV text to the HireFlow MCP server's `parse_cv` tool. The tool parses the text and returns a JSON string containing structured data: name, email, skills list, experience entries, and education. For Sarah Chen's CV, the parsed output includes five skills and two experience entries.

**Call 2:** `session.call_tool("score_candidate", {"cv_data": cv_data, "job_requirements": job_requirements})`

This sends the parsed CV data (as a JSON string) along with the job requirements to `score_candidate`. The tool compares the candidate's qualifications against the requirements and returns a score with reasoning.

The function returns a dictionary with two keys: `"cv"` containing the parsed CV as a Python dict, and `"score"` containing the scoring result as a string.

For the edge case in Prediction 3: recall from Chapter 70 that `parse_cv` handles missing sections by returning empty lists. A CV with no SKILLS section produces `"skills": []`. The `score_candidate` tool then receives that empty list and scores accordingly, likely producing a low skills-match score.

## Calibrating Your Predictions

How you predicted matters as much as what you predicted.

**High confidence, correct prediction (4-5, got it right).** You understood both the code structure and the data flow. The tool call sequence and its data dependencies were clear to you. Move to Lesson 3 with confidence.

**Low confidence, correct prediction (1-2, got it right).** You had the right mental model but did not trust it. This is common with async code that uses unfamiliar context managers. The pattern `async with stdio_client(...) as (read, write)` is new, but the logic inside the session is sequential: call a tool, get the result, call the next tool. Your intuition was correct.

**High confidence, incorrect prediction (4-5, got it wrong).** This is the most valuable outcome. You had a mental model that felt solid but contained a gap. Common mistakes: assuming the two tool calls happen in parallel (they are sequential, connected by `await`), assuming `parsed.content[0].text` returns a Python dict (it returns a JSON string, which is why line 22 calls `json.loads`), or missing that `cv_data` is a string passed directly to the second call. Identify which assumption was wrong and revisit that specific concept.

**Low confidence, incorrect prediction (1-2, got it wrong).** The connection setup code (`StdioServerParameters`, `stdio_client`, `ClientSession`) is likely the obstacle. These three components form a pattern you will see in every MCP client integration:

| Component               | Purpose                   | Analogy           |
| ----------------------- | ------------------------- | ----------------- |
| `StdioServerParameters` | Where is the server?      | A phone number    |
| `stdio_client`          | Open the connection       | Dialing the phone |
| `ClientSession`         | Send and receive messages | The conversation  |

Focus on this table. Every MCP client integration starts with "where, connect, talk." The tool calls inside the session are regular function calls that happen to go across a process boundary.

## The Data Bridge

Notice what connects the two tool calls: line 18. The output of `parse_cv` becomes the input of `score_candidate`. This is the **data bridge** between tools. Without it, the second tool has no structured data to work with. The skill's job is not just to call tools; it is to pass data between them in the right format.

In Lesson 3, you will trace through this code line by line, investigate edge cases, and discover what happens when the data bridge carries unexpected cargo.
