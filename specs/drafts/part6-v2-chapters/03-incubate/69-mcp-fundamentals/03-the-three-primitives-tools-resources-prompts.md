---
sidebar_position: 3
title: "The Three Primitives: Tools, Resources, Prompts"
description: "Understand the three capability types in MCP (Tools, Resources, Prompts), who controls each one, and how they are discovered and executed."
chapter: 69
lesson: 3
duration_minutes: 25
keywords:
  - MCP primitives
  - tools
  - resources
  - prompts
  - control model
  - model-controlled
  - application-controlled
  - user-controlled
  - tools/call
  - resources/read
  - prompts/get
skills:
  - name: "MCP Primitive Classification"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can classify a given capability as a Tool, Resource, or Prompt and explain who controls its invocation"
  - name: "MCP Schema Reading"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can read a tool's inputSchema and predict the structure of a tools/call request"
  - name: "Control Model Reasoning"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can explain why a specific capability should be model-controlled vs application-controlled vs user-controlled"
learning_objectives:
  - objective: "Name the three MCP primitives and identify who controls each one (model, application, user)"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Fill-in table: match primitive to controller"
  - objective: "Read a tool's inputSchema and construct a valid tools/call request"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "STOP_AND_PREDICT exercise constructing a tools/call message"
  - objective: "Explain why the control model distinction matters for agent safety and usability"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Short answer: argue why a given capability should NOT be model-controlled"
cognitive_load:
  new_concepts: 5
  assessment: "Five concepts: Tool primitive, Resource primitive, Prompt primitive, control model (who decides), discovery vs execution methods. The three primitives share a parallel structure (discover then execute), which reduces effective load. The control model is the genuinely new idea."
differentiation:
  extension_for_advanced: "Design a fourth primitive. What would 'Policies' (admin-controlled, governing tool access) look like? What discovery and execution methods would it need?"
  remedial_for_struggling: "Focus on the three-row table: Tools are for doing things (model decides), Resources are for reading things (app decides), Prompts are for templating things (user decides). One sentence per primitive is enough to start."
---

# The Three Primitives: Tools, Resources, Prompts

## What Can an MCP Server Offer?

In Lesson 02, you saw a server respond to `tools/list` with a CV parser tool. But tools are only one of the three types of capabilities an MCP server can advertise. The protocol defines three **primitives**, three fundamental building blocks that cover everything a server might provide.

Each primitive has its own discovery method, its own execution method, and, most importantly, its own **control model**: who decides when it gets used.

| Primitive     | Controlled By | Discovery Method | Execution Method |
| :------------ | :------------ | :--------------- | :--------------- |
| **Tools**     | Model         | `tools/list`     | `tools/call`     |
| **Resources** | Application   | `resources/list` | `resources/read` |
| **Prompts**   | User          | `prompts/list`   | `prompts/get`    |

This table is the most important table in the chapter. By the end of this lesson, you will understand every cell in it.

## Primitive 1: Tools (Model-Controlled)

You already met tools in Lesson 02. A **tool** is a function the AI model can decide to call. The model sees the tool's name, description, and input schema, and it decides whether the current task requires calling that tool.

The key phrase is **model-controlled**. The application (host) decides which tools are _available_ by choosing which servers to connect to. But once the tools are available, the _model_ decides which ones to invoke and with what arguments. No human clicks a "run tool" button. The model reasons about the task and makes the call.

Here is a complete tool schema for HireFlow, a tool that scores a candidate against a job specification:

```json
{
  "name": "score_candidate",
  "description": "Score a candidate's fit against a job specification. Returns a score from 0-100 with explanations for each scoring dimension (skills match, experience level, education fit).",
  "inputSchema": {
    "type": "object",
    "properties": {
      "candidate_id": {
        "type": "string",
        "description": "The unique identifier for the candidate (e.g., 'CAND-2025-0042')"
      },
      "job_id": {
        "type": "string",
        "description": "The unique identifier for the job specification (e.g., 'JOB-2025-0015')"
      },
      "scoring_weights": {
        "type": "object",
        "description": "Optional custom weights for scoring dimensions",
        "properties": {
          "skills": {
            "type": "number",
            "description": "Weight for skills match (0-1)"
          },
          "experience": {
            "type": "number",
            "description": "Weight for experience level (0-1)"
          },
          "education": {
            "type": "number",
            "description": "Weight for education fit (0-1)"
          }
        }
      }
    },
    "required": ["candidate_id", "job_id"]
  }
}
```

Notice the design: `candidate_id` and `job_id` are required (the tool cannot score without both), while `scoring_weights` is optional (the tool has sensible defaults). The descriptions are written for an AI model to read, not a human developer. They explain what each field means in the context of the task.

:::warning STOP AND PREDICT
You have the `score_candidate` tool schema above. Now imagine the model decides to score candidate `CAND-2025-0042` against job `JOB-2025-0015` using the default weights.

**Before scrolling down, write the JSON-RPC 2.0 `tools/call` request the client would send.**

You need to figure out:

1. What is the `method` field?
2. What goes in the `params` object?
3. What fields are required inside the arguments?

Take 60 seconds. Write the full JSON message. Then continue.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

### The tools/call Request

Here is the request the client sends:

```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "score_candidate",
    "arguments": {
      "candidate_id": "CAND-2025-0042",
      "job_id": "JOB-2025-0015"
    }
  },
  "id": 5
}
```

**How did your prediction compare?**

- The `method` is `"tools/call"` (not `"score_candidate"`; the tool name goes in `params`)
- The `params` object has two fields: `name` (which tool to call) and `arguments` (the input data)
- The `arguments` match the `inputSchema`: only the required fields are included since we are using default weights
- The `id` is `5` (it is the fifth request in this session; any unique number works)

A common mistake: putting the tool name in the `method` field. The method is always `"tools/call"`. The `params.name` field identifies _which_ tool. This is because `tools/call` is a _generic_ method that can invoke any tool on the server.

And the response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Candidate CAND-2025-0042 scored 78/100 against JOB-2025-0015.\n\nSkills match: 85/100 (Python, SQL, data analysis align well)\nExperience: 72/100 (3 years vs 5 years preferred)\nEducation: 77/100 (BS Computer Science, matches requirement)"
      }
    ]
  },
  "id": 5
}
```

The result contains a `content` array with typed content objects. Here it is a single text block, but tools can return multiple content items, including images and other media types.

## Primitive 2: Resources (Application-Controlled)

A **resource** is data the server makes available for reading. Resources have URIs (like web addresses) and return content when read. Think of them as files or data endpoints that the server exposes.

The critical difference from tools: resources are **application-controlled**. The host application decides which resources to load and when. The model does not decide on its own to read a resource. Instead, the application provides resource content to the model as context.

Why the distinction? Safety and control. Tools _do things_: they execute functions, change state, call external APIs. Resources _provide data_: they are read-only. Giving the model autonomous control over read-only data is less risky than giving it autonomous control over actions that change the world.

Here is what resource discovery and reading look like for HireFlow:

**Discovery (resources/list response):**

```json
{
  "jsonrpc": "2.0",
  "result": {
    "resources": [
      {
        "uri": "hireflow://jobs/active",
        "name": "Active Job Listings",
        "description": "All currently active job postings with their requirements and status",
        "mimeType": "application/json"
      },
      {
        "uri": "hireflow://candidates/{candidate_id}/resume",
        "name": "Candidate Resume",
        "description": "The full resume text for a specific candidate",
        "mimeType": "text/plain"
      }
    ]
  },
  "id": 2
}
```

Notice two patterns:

1. **Direct resource** (`hireflow://jobs/active`): A fixed URI. There is exactly one "active jobs" list. The application reads it directly.
2. **Resource template** (`hireflow://candidates/{candidate_id}/resume`): A URI with a parameter in curly braces. The application fills in the `candidate_id` to read a specific candidate's resume. This is like a URL pattern: `/users/{id}` in a web API.

**Reading a resource (resources/read request):**

```json
{
  "jsonrpc": "2.0",
  "method": "resources/read",
  "params": {
    "uri": "hireflow://candidates/CAND-2025-0042/resume"
  },
  "id": 3
}
```

The response contains the resource content with its MIME type, so the application knows how to interpret it (JSON, plain text, HTML, etc.).

## Primitive 3: Prompts (User-Controlled)

A **prompt** is a reusable template for a specific interaction pattern. Prompts are **user-controlled**: the user (the human using the application) selects which prompt template to use. The application presents available prompts as menu options or slash commands, and the user picks one.

Why user-controlled? Prompts are about _intent_. They represent "I want to do X." The user knows their intent; the model does not. A prompt template packages expert knowledge ("here is how to conduct a technical screening") in a form the user can trigger when they need it.

**Discovery (prompts/list response):**

```json
{
  "jsonrpc": "2.0",
  "result": {
    "prompts": [
      {
        "name": "technical_screen",
        "description": "Generate a technical screening questionnaire tailored to a specific job role and seniority level",
        "arguments": [
          {
            "name": "job_title",
            "description": "The job title to generate questions for (e.g., 'Senior Python Developer')",
            "required": true
          },
          {
            "name": "seniority",
            "description": "The seniority level: junior, mid, senior, or lead",
            "required": true
          },
          {
            "name": "focus_areas",
            "description": "Comma-separated technical areas to emphasize (e.g., 'async programming, database design')",
            "required": false
          }
        ]
      }
    ]
  },
  "id": 6
}
```

**Retrieving a prompt (prompts/get request):**

```json
{
  "jsonrpc": "2.0",
  "method": "prompts/get",
  "params": {
    "name": "technical_screen",
    "arguments": {
      "job_title": "Senior Python Developer",
      "seniority": "senior"
    }
  },
  "id": 7
}
```

The response returns the filled-in prompt template, ready to be sent to the model as part of a conversation. The prompt itself is not _executed_; it is _retrieved and used as input_. The model then works with the prompt content to generate the screening questions.

## The Control Model: Why It Matters

James looked at the three-row table again.

"So tools are the dangerous ones. The model decides to call them on its own."

"Not dangerous. _Powerful_. The model can reason about when a tool is needed and invoke it without waiting for a human to click a button. That is what makes agents autonomous."

"But what if the model calls `delete_candidate` when I did not want it to?"

"Two layers of protection. First, the host decides which servers and tools are available. If `delete_candidate` should not be accessible, do not expose it. Second, many hosts implement confirmation: the model proposes a tool call, the host shows it to the user, the user approves or rejects."

"OK, and resources are read-only, so the model cannot break anything by reading data?"

"Correct. And the application controls _which_ resources get loaded. The model does not decide to load a resource; the application feeds resource content to the model as context. The application might read a candidate's resume and include it in the conversation. The model did not ask for it; the application decided it was relevant."

"And prompts are like... templates the user picks from a menu?"

"Yes. The user says 'I want to do a technical screening.' The application shows the `technical_screen` prompt. The user fills in the job title and seniority. The completed prompt goes to the model."

"So the three control levels are: model drives tools, application drives resources, user drives prompts."

"That is the hierarchy. And it is designed that way for a reason. Actions (tools) need autonomy for agents to be useful, but they are the highest risk. Data access (resources) is lower risk, so the application controls it. Intent selection (prompts) is lowest risk and most personal, so the user controls it."

:::tip KEY INSIGHT: Control Model as Safety Design
The three control levels are not arbitrary. They reflect a deliberate safety design. The entity with the most _context_ about each type of capability is the one that controls it. The model has the most context about _when a function should be called_ (it understands the task). The application has the most context about _what data is relevant_ (it understands the system). The user has the most context about _what they want to accomplish_ (they understand their intent).
:::

## Side-by-Side Comparison

Here is the complete comparison for all three primitives, using HireFlow examples:

| Aspect                | Tools                                                         | Resources                                                                           | Prompts                                                               |
| :-------------------- | :------------------------------------------------------------ | :---------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **What it is**        | A function the model can call                                 | Data the application can read                                                       | A template the user can select                                        |
| **Who controls it**   | The AI model                                                  | The host application                                                                | The human user                                                        |
| **Discovery**         | `tools/list`                                                  | `resources/list`                                                                    | `prompts/list`                                                        |
| **Execution**         | `tools/call`                                                  | `resources/read`                                                                    | `prompts/get`                                                         |
| **HireFlow example**  | `score_candidate(candidate_id, job_id)`                       | `hireflow://candidates/{id}/resume`                                                 | `technical_screen(job_title, seniority)`                              |
| **Analogy**           | A power tool in a workshop: the worker decides when to use it | A reference manual on a shelf: the supervisor decides which ones to put on the desk | A work order form: the customer fills it out to request specific work |
| **Risk level**        | Highest (executes actions)                                    | Medium (reads data)                                                                 | Lowest (provides templates)                                           |
| **Can change state?** | Yes (tools can write, delete, modify)                         | No (read-only by design)                                                            | No (returns template text only)                                       |

## Emma Admits a Limit

"I should mention something," Emma said. "The three-primitive model is clean in theory. In practice, the boundaries blur."

James looked surprised. "How?"

"A tool could return a large dataset, blurring the line between 'executing a function' and 'reading a resource.' A prompt template could include instructions that effectively direct the model to call specific tools, blurring the line between 'user intent' and 'model autonomy.' The control model is a design guideline, not an enforcement mechanism."

"So the server developer has to make good choices about what goes where?"

"Yes. And those choices matter. If you expose a read-only data lookup as a tool instead of a resource, the model will call it autonomously instead of the application controlling when it loads. That might be fine, or it might waste tokens and slow down the conversation."

"Any rule of thumb?"

"If it changes state: tool. If it is read-only data: resource. If it is a reusable interaction pattern the user triggers: prompt. When in doubt, ask: 'Who should decide when this capability gets used?' That answer tells you the primitive."

## Connecting Back to HireFlow

James mapped the three primitives to his four FTE agents:

**Tools (model-controlled)**: `score_candidate`, `parse_cv`, `generate_interview_questions`, `rank_candidates`. These are actions the agents invoke during their reasoning. The agent decides when scoring or parsing is needed based on the conversation context.

**Resources (application-controlled)**: `hireflow://jobs/active`, `hireflow://candidates/{id}/resume`, `hireflow://departments/org-chart`. These are data the host loads as context. When a recruiter opens a candidate profile, the host reads the resume resource and includes it in the conversation.

**Prompts (user-controlled)**: `technical_screen`, `candidate_summary`, `rejection_letter`, `offer_template`. These are interaction patterns the recruiter triggers. The recruiter says "I need a technical screening for this role" and selects the prompt from the interface.

"Each FTE agent connects to the same MCP servers," James realized. "ResumeScreener uses `parse_cv` and reads resume resources. InterviewBot uses `generate_interview_questions` and the `technical_screen` prompt. They share the infrastructure but use different pieces."

"And when you add a new FTE agent in Chapter 80?"

"It connects to the existing servers and uses whichever primitives it needs. No new servers required unless it needs a capability that does not exist yet."

"You are getting it."

## Check Your Understanding

1. You are designing an MCP server for HireFlow that provides access to interview recordings. Should "download a recording" be a Tool or a Resource? Who should control when a recording gets loaded into the conversation?

2. A recruiter wants a reusable template for writing rejection emails that are personalized to the candidate's strengths. Which primitive is this? What fields would the `prompts/list` response include?

3. Look at this `tools/call` request:
   ```json
   {
     "jsonrpc": "2.0",
     "method": "tools/call",
     "params": {
       "name": "score_candidate",
       "arguments": {
         "candidate_id": "CAND-2025-0042",
         "job_id": "JOB-2025-0015",
         "scoring_weights": {
           "skills": 0.5,
           "experience": 0.3,
           "education": 0.2
         }
       }
     },
     "id": 12
   }
   ```
   Compare this to the default-weights request from earlier in the lesson. What is different? Why might the model choose to send custom weights in this case?

---

**Next lesson**: You will move from reading the protocol to _implementing_ it. Lesson 04 introduces FastMCP and has you build your first working MCP server with the `@mcp.tool()` decorator.
