---
sidebar_position: 2
title: "MCP Architecture: Host, Client, Server"
description: "Learn the three-role architecture of MCP (Host, Client, Server) and how they communicate using JSON-RPC 2.0 messages."
chapter: 69
lesson: 2
duration_minutes: 25
keywords:
  - MCP architecture
  - host client server
  - JSON-RPC 2.0
  - protocol messages
  - capability discovery
  - tools/list
  - HireFlow MCP
skills:
  - name: "MCP Architecture Comprehension"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can diagram the Host-Client-Server model and explain each role's responsibility"
  - name: "JSON-RPC 2.0 Message Reading"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can identify the four fields of a JSON-RPC 2.0 request and match a response to its request by ID"
learning_objectives:
  - objective: "Describe the three roles in MCP architecture (Host, Client, Server) and explain what each one manages"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Labeling exercise: assign roles to components in a system diagram"
  - objective: "Read a JSON-RPC 2.0 request and predict the structure of the response"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "STOP_AND_PREDICT exercise with tools/list request and response"
  - objective: "Trace a complete capability discovery exchange between client and server"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Sequence ordering: arrange messages in correct protocol order"
cognitive_load:
  new_concepts: 4
  assessment: "Four new concepts: Host role, Client role, Server role, JSON-RPC 2.0 message format. The three roles are related and can be taught as a unified model. JSON-RPC is a concrete format students can read. Manageable with prediction exercises to anchor understanding."
differentiation:
  extension_for_advanced: "Compare JSON-RPC 2.0 to REST API conventions. What does JSON-RPC give you that a plain HTTP POST with JSON body does not? (Hint: think about the id field and batch requests.)"
  remedial_for_struggling: "Focus on the restaurant analogy: Host is the restaurant manager, Client is the waiter, Server is the kitchen. The waiter takes orders (requests) and brings back food (responses). The manager decides which kitchens are open."
---

# MCP Architecture: Host, Client, Server

## Opening the Contract

In Lesson 01, Emma called MCP a "contract" between agents and tools. Now you are going to read that contract. It has two parts:

1. **The roles**: Who does what (this lesson's main topic)
2. **The message format**: How they talk to each other (JSON-RPC 2.0, also this lesson)

By the end of this lesson, you will be able to look at a raw MCP message and know exactly what is happening, who sent it, and what the response should look like.

## The Three Roles

MCP defines three distinct roles. Every MCP system has all three, though sometimes two roles live in the same process.

### Host

The **Host** is the application the user interacts with. Claude Desktop, VS Code with Copilot, Cursor, or your own custom application: these are hosts. The host's job is lifecycle management. It decides:

- Which MCP servers to start
- Which servers to shut down
- What security boundaries to enforce
- How to present server capabilities to the user or model

Think of the host as a restaurant manager. The manager decides which kitchens are open tonight, hires and fires kitchen staff, and sets the rules for food safety. The manager does not cook.

### Client

The **Client** lives inside the host and maintains a connection to exactly one server. Each server gets its own client. The client's responsibilities:

- Establish and maintain the connection to its assigned server
- Send requests and receive responses
- Translate between the host's internal representation and the MCP protocol format

Back to the restaurant: the client is a waiter. Each waiter serves one kitchen. The waiter takes orders from the dining room (host), carries them to the kitchen (server), and brings back the finished plates (responses).

### Server

The **Server** is a separate process that provides capabilities. An MCP server wraps a database, a file system, an API, or any other tool. It advertises what it can do and executes requests when asked. The server's responsibilities:

- Declare its capabilities (tools, resources, prompts)
- Execute capability requests
- Return structured results

The kitchen. It has a menu (declared capabilities), cooks dishes on request (executes tools), and sends plates back through the waiter (returns results).

### How the Roles Map to HireFlow

James mapped the roles to his system:

| MCP Role   | HireFlow Example                 | What It Does                                                                                            |
| :--------- | :------------------------------- | :------------------------------------------------------------------------------------------------------ |
| **Host**   | The HireFlow orchestrator app    | Starts MCP servers, manages agent lifecycle, enforces access policies                                   |
| **Client** | One client per server connection | ResumeScreener's client talks to the database server; a separate client talks to the file system server |
| **Server** | `hireflow-db-server`             | Exposes tools like `query_candidates` and `get_job_spec` over the MCP protocol                          |
| **Server** | `hireflow-files-server`          | Exposes tools like `read_resume` and `save_report` over the MCP protocol                                |

"Wait," James said. "So my ResumeScreener agent has _two_ clients? One for the database server and one for the file server?"

"Correct. One client per server. The host manages both clients, but each client has a single, dedicated connection."

"Why not one client that talks to multiple servers?"

"Isolation. If the file server crashes, the database client is unaffected. Each connection is independent. Failures do not cascade."

James thought about this. "That's like having separate waiters for the sushi bar and the grill station. If the grill catches fire, the sushi waiter keeps serving."

"Exactly. And the restaurant manager decides whether to reopen the grill or shut down for the night."

:::tip KEY INSIGHT: One Client, One Server
A single MCP client always connects to exactly one MCP server. A host application can manage many clients (one per server), but each client-server pair is an isolated connection. This is a deliberate design choice for fault isolation.
:::

## The Message Format: JSON-RPC 2.0

Now that you know who the players are, you need to know how they communicate. MCP uses **JSON-RPC 2.0**, a lightweight remote procedure call protocol encoded in JSON.

Every JSON-RPC 2.0 message is a JSON object. There are two types: **requests** and **responses**.

### Request Structure

A request has four fields:

| Field     | Type             | Purpose                                                                                     |
| :-------- | :--------------- | :------------------------------------------------------------------------------------------ |
| `jsonrpc` | string           | Always `"2.0"`. Identifies the protocol version.                                            |
| `method`  | string           | The name of the procedure to call (e.g., `"tools/list"`).                                   |
| `params`  | object           | Arguments for the method. Optional for some methods.                                        |
| `id`      | number or string | A unique identifier. The response will echo this back so you can match request to response. |

### Response Structure

A response also has standard fields:

| Field     | Type             | Purpose                                                                                      |
| :-------- | :--------------- | :------------------------------------------------------------------------------------------- |
| `jsonrpc` | string           | Always `"2.0"`.                                                                              |
| `result`  | object           | The return value, present when the call succeeds.                                            |
| `error`   | object           | Error details, present when the call fails. Contains `code`, `message`, and optional `data`. |
| `id`      | number or string | Matches the `id` from the request.                                                           |

A response has _either_ `result` or `error`, never both.

## A Real Message Exchange: tools/list

Let's look at the first message exchange that happens in every MCP session. Before an agent can use any tools, it needs to discover what tools the server offers. This is the **tools/list** request.

Here is a real `tools/list` request, the kind of message a client sends to a server right after connecting:

```json
{
  "jsonrpc": "2.0",
  "method": "tools/list",
  "id": 1
}
```

Three fields. No `params` because `tools/list` does not need arguments. The `id` is `1` (the first request in this session).

:::warning STOP AND PREDICT
You are about to see the server's response to this `tools/list` request. The server is an MCP server for HireFlow that wraps a candidate database. It has one tool: a CV parser that extracts structured data from raw resume text.

**Before scrolling down, write your prediction:**

1. What top-level fields will the response JSON have?
2. Inside the `result`, what information would the server need to provide about each tool so that an AI model can decide whether and how to use it?
3. Specifically for a CV parser tool: what would its `name`, `description`, and required input parameters look like?

Take 60 seconds. Write it down. Then continue.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

### The Response

Here is the server's actual response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "tools": [
      {
        "name": "parse_cv",
        "description": "Parse a candidate CV and extract structured fields including name, email, skills, experience, and education.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "cv_text": {
              "type": "string",
              "description": "The raw text content of the candidate's CV"
            },
            "job_id": {
              "type": "string",
              "description": "The job posting ID to match the CV against"
            }
          },
          "required": ["cv_text"]
        }
      }
    ]
  },
  "id": 1
}
```

### How Did Your Prediction Compare?

Let's walk through the key elements:

**Top-level structure**: `jsonrpc`, `result`, and `id`. The `id` is `1`, matching the request. No `error` field because the call succeeded.

**The tools array**: Inside `result`, there is a `tools` array. Each element describes one tool. Even if the server has only one tool, it is still an array (the server might have more).

**Tool description fields**: Each tool has three critical pieces:

- `name`: A machine-readable identifier (`"parse_cv"`). This is what the client sends when it wants to invoke the tool.
- `description`: A human-readable (and model-readable) explanation. The AI model uses this to decide whether this tool is appropriate for the current task.
- `inputSchema`: A JSON Schema object describing the parameters. This tells the model exactly what arguments the tool accepts, their types, which are required, and what each one means.

**The inputSchema detail**: Notice that `cv_text` is required but `job_id` is not. The server can parse a CV on its own, but if you provide a `job_id`, it can also score the match. This is good schema design: required parameters are the minimum for the tool to function, optional parameters add capability.

"So the model reads this schema and decides on its own whether to call the tool?" James asked.

"Yes. The model sees the tool name, reads the description, examines the input schema, and decides: 'This task requires parsing a CV. I have a tool called parse_cv that does exactly that. The required parameter is cv_text, which I have from the user's upload. I will call it.'"

"The model is making that decision, not the application code?"

"Correct. The application (host) decides which tools are _available_. The model decides which tools to _use_. That distinction matters, and you will see exactly why in Lesson 03."

## Tracing the Full Connection Sequence

Discovery is not the only exchange. Here is the full sequence when a client connects to a server:

| Step | Direction        | Message                    | Purpose                                               |
| :--- | :--------------- | :------------------------- | :---------------------------------------------------- |
| 1    | Client to Server | `initialize` request       | Client declares its protocol version and capabilities |
| 2    | Server to Client | `initialize` response      | Server declares its protocol version and capabilities |
| 3    | Client to Server | `initialized` notification | Client confirms the handshake is complete             |
| 4    | Client to Server | `tools/list` request       | Client discovers available tools                      |
| 5    | Server to Client | `tools/list` response      | Server returns tool schemas                           |
| 6    | Client to Server | `tools/call` request       | Client invokes a specific tool with arguments         |
| 7    | Server to Client | `tools/call` response      | Server returns the tool's result                      |

Steps 1-3 are the **handshake**. Steps 4-5 are **discovery**. Steps 6-7 are **execution**. This sequence repeats for resources and prompts (using `resources/list`, `resources/read`, `prompts/list`, `prompts/get`), but the pattern is always the same: handshake, discover, execute.

Notice step 3: `initialized` is a **notification**, not a request. Notifications in JSON-RPC 2.0 have no `id` field and expect no response. They are fire-and-forget messages used for signaling state changes.

## James's Pushback: "Why Not REST?"

James frowned. "This feels overcomplicated. Why not use regular REST APIs? I already know how those work. POST to an endpoint, get JSON back."

Emma paused. This was a reasonable objection.

"REST works well for CRUD operations on resources with stable URLs. But MCP connections are different in three ways."

"First, MCP connections are _stateful_. The client and server maintain a session after the handshake. REST is stateless by design: each request is independent. A stateful connection lets the server push notifications to the client (like 'I have new tools available') without the client polling."

"Second, MCP uses _bidirectional_ messaging. The server can send messages to the client unprompted. In REST, the server only responds to client requests. Bidirectional messaging enables features like progress updates during long tool executions."

"Third, _capability discovery is built into the protocol_. In REST, you need a separate mechanism (OpenAPI spec, docs, hardcoded knowledge) to learn what endpoints exist. In MCP, the client asks `tools/list` and gets a machine-readable schema. The model can work with tools it has never seen before."

James considered this. "OK, so REST is fine for simple request-response, but MCP gives you sessions, server-initiated messages, and built-in discovery. And the agents need all three of those."

"Yes. Particularly the discovery. Your agents need to find out what tools are available at runtime, not at compile time. That is what makes the O(N+M) architecture work: agents and tools are developed independently, and discovery bridges the gap at connection time."

"Fine. I'll stop trying to shove everything into REST."

"That was faster than I expected."

"I'm learning."

:::info NOTIFICATION vs REQUEST
A JSON-RPC 2.0 **request** has an `id` field and expects a response. A **notification** has no `id` field and expects nothing back. In MCP, the `initialized` message (step 3) is a notification because no response is needed; it is a one-way signal that the handshake is complete.
:::

## The Architecture in One Picture

Here is how all the pieces fit together for HireFlow:

```
┌──────────────────────────────────────────────────┐
│                  HOST                             │
│         (HireFlow Orchestrator App)               │
│                                                   │
│  ┌─────────────────┐    ┌─────────────────┐       │
│  │   CLIENT A       │    │   CLIENT B       │      │
│  │ (DB connection)  │    │ (Files connection)│      │
│  └────────┬────────┘    └────────┬─────────┘      │
│           │                      │                 │
└───────────┼──────────────────────┼─────────────────┘
            │ JSON-RPC 2.0         │ JSON-RPC 2.0
            │ (stdio or HTTP)      │ (stdio or HTTP)
            │                      │
   ┌────────▼────────┐   ┌────────▼─────────┐
   │    SERVER A       │   │    SERVER B       │
   │ (hireflow-db)     │   │ (hireflow-files)  │
   │                   │   │                   │
   │ Tools:            │   │ Tools:            │
   │  - query_candidates│  │  - read_resume    │
   │  - get_job_spec    │  │  - save_report    │
   │  - parse_cv        │  │  - list_uploads   │
   └───────────────────┘   └───────────────────┘
```

Each client has exactly one server. The host manages both clients. Messages flow as JSON-RPC 2.0 over a transport (stdio for local processes, Streamable HTTP for remote services). The servers are independent processes that know nothing about each other.

## Emma's Closing Point

"Remember this diagram. Every MCP system you build will follow this shape. The host is always the outermost box. Clients are always inside the host. Servers are always outside."

"And when I add a new tool?"

"You add a new server and a new client inside the host. Nothing else changes. That is the O(N+M) promise in architecture form."

## Check Your Understanding

1. In the restaurant analogy, what does the Host correspond to, and what is its primary responsibility in MCP?

2. A `tools/list` response contains an `inputSchema` for each tool. Why does the AI model need this schema? What decision does it enable?

3. Look at this JSON-RPC 2.0 message:
   ```json
   { "jsonrpc": "2.0", "method": "resources/list", "id": 4 }
   ```
   Is this a request or a notification? How do you know? What would you expect the response's `id` field to be?

---

**Next lesson**: You will learn the three types of capabilities that MCP servers can provide: Tools (model-controlled), Resources (application-controlled), and Prompts (user-controlled).
