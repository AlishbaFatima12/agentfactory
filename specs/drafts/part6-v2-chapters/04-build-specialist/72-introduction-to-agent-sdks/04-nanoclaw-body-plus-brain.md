---
sidebar_position: 4
title: "NanoClaw: Body Plus Brain"
description: "How NanoClaw wraps an Agent SDK into a production runtime by combining a Body (HTTP, sessions, channels) with a Brain (Agent SDK)."
chapter: 72
lesson: 4
duration_minutes: 15
keywords:
  [
    nanoclaw,
    agent runtime,
    body brain architecture,
    production runtime,
    channel adapters,
  ]

skills:
  - name: "Runtime Architecture"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can explain the Body/Brain separation in NanoClaw and why production agents need both layers"
  - name: "NanoClaw Mental Model"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can trace a user request from HTTP endpoint through NanoClaw Body to Agent SDK Brain and back"

learning_objectives:
  - objective: "Define the Body and Brain layers of NanoClaw and explain what each handles"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Chapter Quiz conceptual question"
  - objective: "Explain why a production agent needs a runtime layer beyond the SDK"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Guided Discovery dialogue analysis"
  - objective: "Connect NanoClaw's architecture to the Agent Maturity Model's Phase 3 (Build Specialist)"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Reflection prompt"

cognitive_load:
  new_concepts: 3
  assessment: "Low-Medium. Three concepts (Body, Brain, runtime), but Body/Brain is a single metaphor. NanoClaw was mentioned in prior chapters; this lesson formalizes what students already sense."

differentiation:
  extension_for_advanced: "Compare NanoClaw's Body/Brain split to the frontend/backend split in web applications. Where do the analogies hold and where do they break?"
  remedial_for_struggling: "Focus on the request flow diagram. Trace one request from start to finish. If the Body/Brain separation feels abstract, think of it as 'everything before the AI thinks' (Body) and 'the AI thinking' (Brain)."
---

# NanoClaw: Body Plus Brain

Emma had a question for James. "You have an agent built with the Claude Agents SDK. It can parse CVs and score candidates. How does a hiring manager use it?"

James thought about it. "She sends a message in a chat interface."

"Where is that chat interface?"

"On a web page. Connected to an API. Running on a server."

"And who builds that server? The SDK?"

James paused. "No. The SDK handles the agent loop. The server is separate."

"Correct. The SDK is the brain. But a brain needs a body."

## The Missing Layer

An Agent SDK provides the six layers from Lesson 2: loop, tools, memory, guardrails, handoffs, and observability. What it does not provide:

- **An HTTP server** to receive requests from the web
- **Session management** to track which conversation belongs to which user
- **Authentication** to verify that the hiring manager is authorized
- **Channel adapters** to connect to Slack, WhatsApp, web chat, or API endpoints
- **Rate limiting** to prevent abuse
- **Health checks** to tell your infrastructure the service is alive

These are not agent concerns. They are infrastructure concerns. But without them, your agent is a Python function that nobody can reach.

"That's the same gap as building a FastAPI endpoint versus building a web framework," James said. "FastAPI gives you routing, validation, serialization. But you still need a server, a process manager, and TLS termination."

"Exactly. NanoClaw is the production runtime that wraps your Agent SDK the way Uvicorn wraps your FastAPI app."

## Body and Brain

Emma drew two boxes on the whiteboard, stacked vertically.

The top box, labeled **Body**, contained:

- HTTP server (receives requests)
- Session manager (tracks conversations)
- Authentication (verifies identity)
- Channel adapters (web, Slack, WhatsApp, API)
- Rate limiter (prevents abuse)
- Health endpoints (infrastructure integration)

The bottom box, labeled **Brain**, contained:

- Agent SDK (Claude Agents SDK)
- Agent loop (reason-act-observe)
- Tool orchestration (MCP server dispatch)
- Memory management
- Guardrails

An arrow connected them: **Body receives request → Brain processes it → Body sends response.**

"NanoClaw is both boxes," Emma said. "The Body handles everything between the user and the AI. The Brain handles everything the AI does. They connect at a clean interface: the Body passes a message in, the Brain returns a response."

"Wait, so basically NanoClaw is like a restaurant," James said. "The Body is the front of house: the host seats you, the waiter takes your order, the cashier processes your payment. The Brain is the kitchen: the chef cooks your food. The waiter does not cook, and the chef does not seat guests."

"I need to remember that analogy," Emma said. "You should write it down before you forget it."

Emma glanced at her phone. "I have a standup in five minutes. Trace the request flow yourself: a hiring manager sends 'Score this candidate' through a web chat. Write down every step, labeling each one Body or Brain. I'll check your work when I get back."

James stared at the whiteboard. He started at the top. The message arrives over HTTP. That is the Body. The server looks up the session. Still the Body. Then the channel adapter normalizes the format. Still the Body. Then the agent SDK receives the message. That is where the Brain starts.

He kept going. The agent reasons about which tools to call. Brain. It dispatches `parse_cv` to the MCP server. Brain. Results come back. Brain. The agent generates a response. Brain. The response goes back through the channel adapter. Body again. The HTTP server sends it to the client. Body.

By the time Emma returned, James had seven steps on the whiteboard, each labeled correctly.

"All right?" Emma said.

"Seven steps. Four Body, three Brain. The Body bookends the Brain."

Emma checked his work. "That is exactly right. The Body bookends the Brain. Keep that mental model."

## The Request Flow

Here is what happens when a hiring manager sends a message to HireFlow through a web chat interface:

**Step 1 (Body): Receive.**
The HTTP server receives a POST request with the message text and a session ID.

**Step 2 (Body): Authenticate.**
The session manager looks up the session. Is this a known user? Is the session still active?

**Step 3 (Body): Route.**
The channel adapter translates the raw HTTP request into a standardized internal message format. Whether the request came from web chat, Slack, or an API call, the Brain sees the same format.

**Step 4 (Brain): Reason.**
The Agent SDK receives the message. The agent loop begins: the model reads the message, decides which tools to call, and plans its approach.

**Step 5 (Brain): Act.**
The agent dispatches tool calls to MCP servers. The Resume Screener calls `parse_cv` and `score_candidate`. Results flow back into the agent's context.

**Step 6 (Brain): Respond.**
The model generates a response based on the tool results. The agent loop terminates when the response is complete.

**Step 7 (Body): Deliver.**
The channel adapter translates the internal response back into the format the original channel expects. The HTTP server sends it to the client.

"Seven steps," James said. "And only steps 4 through 6 are the Agent SDK. The rest is NanoClaw's Body."

"Which is why you need the Body. Without it, steps 1 through 3 and step 7 do not exist. Your agent is a function with no way in and no way out."

## Why Not Build the Body Yourself?

Emma had seen this question coming. James was already thinking it.

"I could build the Body with FastAPI," he said. "We cover FastAPI in Chapter 82. A few endpoints, some middleware, done."

"You could. And in Chapter 82, you will build a FastAPI layer for HireFlow's API. But NanoClaw gives you something FastAPI alone does not: the Body and Brain are integrated. The session manager knows about the agent's conversation history. The channel adapters know how to format tool call results for different platforms. The health checks monitor not just the HTTP server but the agent's model connection, tool availability, and memory usage."

She drew a dotted line between the two boxes. "This interface is the hard part. Not the Body. Not the Brain. The connection between them. NanoClaw solves the connection."

"I'll take the shortcut," James said.

"It is not a shortcut. It is the right architectural decision. Build what is unique to HireFlow. Use infrastructure for everything that is common across agent deployments."

## Connecting to the Maturity Model

In Chapter 63, you learned about the Agent Maturity Model. Phase 3 is "Build Specialist," where incubated skills become production-ready FTEs. NanoClaw is the Phase 3 runtime. It takes your validated skills (Phase 2, chapters 67-71), wraps them in an Agent SDK (the Brain), and deploys them through production infrastructure (the Body).

The maturity journey so far:

| Phase             | What You Built                   | Chapter  |
| ----------------- | -------------------------------- | -------- |
| Phase 1: Explore  | Concept paper and domain mastery | Ch 65-66 |
| Phase 2: Incubate | Skills, simulations, MCP servers | Ch 67-71 |
| Phase 3: Build    | Agent SDK + NanoClaw runtime     | Ch 72-81 |

You are at the beginning of Phase 3. This chapter gives you the conceptual foundation. Chapters 73-75 give you the hands-on skills: Claude Agents SDK (Ch 73), OpenAI Apps SDK (Ch 74), and NanoClaw configuration (Ch 75).

:::tip Key Insight
NanoClaw's default Brain uses the Claude Agents SDK. In Chapter 75, you will configure NanoClaw for the Resume Screener FTE, connecting your validated skill and MCP servers from the Incubate phase to a production-ready runtime. Everything you have built so far converges in that chapter.
:::

## What Comes Next

You now understand the three layers of HireFlow's agent infrastructure: skills (the intelligence), SDKs (the reasoning loop), and NanoClaw (the production runtime). In the next lesson, you will put this understanding to work with a feature comparison matrix and a decision exercise that maps each HireFlow component to the right technology.
