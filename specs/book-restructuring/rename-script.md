# Rename Script — Book Restructuring

Execute these commands from the repo root (`/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2`).

All paths are relative to `apps/learn-app/docs/`.

## Phase 1: Part Folder Renames (REVERSE ORDER — mandatory)

```bash
cd apps/learn-app/docs

# Step 1: Rename part folders in reverse to avoid collisions
git mv 09-Building-Realtime-Voice-Agents 10-Building-Realtime-Voice-Agents
git mv 08-TypeScript-Language-Realtime-Interaction 09-TypeScript-Language-Realtime-Interaction
git mv 07-Turing-LLMOps-Proprietary-Intelligence 08-Turing-LLMOps-Proprietary-Intelligence
git mv 06-AI-Cloud-Native-Development 07-Deploying-Agent-Factories-in-the-Cloud
git mv 05-Building-Custom-Agents 06-Building-Agent-Factories

# Step 2: Create new Part 5
mkdir -p 05-Building-OpenClaw-Apps
```

## Phase 2: Move Ch 18 from Part 1 to new Part 5

```bash
# Move old Ch 18 content to Part 5 as Ch 56
git mv ../01-General-Agents-Foundations/18-meet-your-first-ai-employee 05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee
```

(Note: the `cd` from Phase 1 is still active; relative path goes up one level to Part 1.)

If running as separate commands from repo root:

```bash
git mv apps/learn-app/docs/01-General-Agents-Foundations/18-meet-your-first-ai-employee apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee
```

## Phase 3: Create placeholder for Chapter A (new Ch 18) in Part 1

```bash
mkdir -p apps/learn-app/docs/01-General-Agents-Foundations/18-claude-code-teams-cicd
```

Create `apps/learn-app/docs/01-General-Agents-Foundations/18-claude-code-teams-cicd/README.md`:

```markdown
---
title: "Chapter 18: Claude Code Teams & CI/CD"
sidebar_position: 18
description: "Coming soon"
---

# Chapter 18: Claude Code Teams & CI/CD

Content coming soon.
```

## Phase 4: Chapter Folder Renames Within Part 6 (old Part 5)

Part 6 chapters rename from old numbers to new. Order doesn't matter within a part since folder names don't collide (old 33 -> new 61, etc.).

```bash
cd apps/learn-app/docs/06-Building-Agent-Factories

git mv 33-introduction-to-ai-agents 61-introduction-to-ai-agents
git mv 34-openai-agents-sdk 62-openai-agents-sdk
git mv 35-google-adk-reliable-agents 63-google-adk-reliable-agents
git mv 36-anthropic-agents-kit-development 65-anthropic-agents-kit-development
git mv 37-mcp-fundamentals 66-mcp-fundamentals
git mv 38-custom-mcp-servers 67-custom-mcp-servers
git mv 39-agent-skills-mcp-code-execution 68-agent-skills-mcp-code-execution
git mv 40-fastapi-for-agents 70-fastapi-for-agents
git mv 41-chatkit-server 71-chatkit-server
git mv 42-openai-apps-sdk 72-openai-apps-sdk
git mv 43-vector-databases-rag-langchain 73-vector-databases-rag-langchain
git mv 44-relational-databases-sqlmodel 74-relational-databases-sqlmodel
git mv 45-augmented-memory 75-augmented-memory
git mv 46-tdd-for-agents 76-tdd-for-agents
git mv 47-evals-agent-performance 77-evals-agent-performance
git mv 48-knowledge-graphs-graphrag 78-knowledge-graphs-graphrag
```

## Phase 5: Create Placeholder Chapters in Part 6

```bash
# Ch 64: Cert Chapter B
mkdir -p apps/learn-app/docs/06-Building-Agent-Factories/64-claude-api-agentic-loops

# Ch 69: Cert Chapter D
mkdir -p apps/learn-app/docs/06-Building-Agent-Factories/69-multi-agent-reliability
```

Create `apps/learn-app/docs/06-Building-Agent-Factories/64-claude-api-agentic-loops/README.md`:

```markdown
---
title: "Chapter 64: Claude API & Agentic Loops"
sidebar_position: 64
description: "Coming soon"
---

# Chapter 64: Claude API & Agentic Loops

Content coming soon.
```

Create `apps/learn-app/docs/06-Building-Agent-Factories/69-multi-agent-reliability/README.md`:

```markdown
---
title: "Chapter 69: Multi-Agent Reliability"
sidebar_position: 69
description: "Coming soon"
---

# Chapter 69: Multi-Agent Reliability

Content coming soon.
```

## Phase 6: Chapter Folder Renames Within Part 7 (old Part 6)

```bash
cd apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud

git mv 49-docker-for-ai-services 79-docker-for-ai-services
git mv 50-kubernetes-for-ai-services 80-kubernetes-for-ai-services
git mv 51-helm-charts 81-helm-charts
git mv 52-event-driven-kafka 82-event-driven-kafka
git mv 53-dapr-core 83-dapr-core
git mv 54-cicd-gitops-argocd 84-cicd-gitops-argocd
git mv 55-observability-cost-engineering 85-observability-cost-engineering
git mv 56-traffic-engineering 86-traffic-engineering
git mv 57-dapr-actors-workflows 87-dapr-actors-workflows
git mv 58-production-security 88-production-security
git mv 59-cost-disaster-recovery 89-cost-disaster-recovery
git mv 60-real-cloud-deployment 90-real-cloud-deployment
```

## Phase 7: Chapter Folder Renames Within Part 8 (old Part 7)

```bash
cd apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence

git mv 61-introduction-to-llmops 91-introduction-to-llmops
git mv 62-llm-architecture-compute 92-llm-architecture-compute
git mv 63-data-engineering-fine-tuning 93-data-engineering-fine-tuning
git mv 64-supervised-fine-tuning 94-supervised-fine-tuning
git mv 65-identity-persona-tuning 95-identity-persona-tuning
git mv 66-agentic-function-calling 96-agentic-function-calling
git mv 67-model-merging-optimization 97-model-merging-optimization
git mv 68-alignment-safety 98-alignment-safety
git mv 69-evaluation-quality-gates 99-evaluation-quality-gates
git mv 70-deployment-serving 100-deployment-serving
git mv 71-agent-framework-integration 101-agent-framework-integration
git mv 72-capstone-end-to-end-llmops 102-capstone-end-to-end-llmops
```

## Phase 8: Chapter Folder Renames Within Part 9 (old Part 8)

```bash
cd apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction

git mv 73-typescript-fundamentals 103-typescript-fundamentals
git mv 74-async-patterns-streaming 104-async-patterns-streaming
git mv 75-runtime-environments-http 105-runtime-environments-http
git mv 76-building-type-safe-sdks 106-building-type-safe-sdks
git mv 77-testing-typescript-ai 107-testing-typescript-ai
git mv 78-cli-tools-developer-experience 108-cli-tools-developer-experience
```

## Phase 9: Chapter Folder Renames Within Part 10 (old Part 9)

```bash
cd apps/learn-app/docs/10-Building-Realtime-Voice-Agents

git mv 79-voice-ai-fundamentals 109-voice-ai-fundamentals
git mv 80-livekit-agents 110-livekit-agents
git mv 81-pipecat 111-pipecat
git mv 82-openai-realtime-api 112-openai-realtime-api
git mv 83-gemini-live-api 113-gemini-live-api
git mv 84-phone-browser-integration 114-phone-browser-integration
git mv 85-capstone-production-voice-agent 115-capstone-production-voice-agent
```

## Phase 10: Create Part 5 Placeholder Chapter (Ch 57)

```bash
mkdir -p apps/learn-app/docs/05-Building-OpenClaw-Apps/57-building-openclaw-apps
```

Create `apps/learn-app/docs/05-Building-OpenClaw-Apps/57-building-openclaw-apps/README.md`:

```markdown
---
title: "Chapter 57: Building OpenClaw Apps"
sidebar_position: 57
description: "Coming soon"
---

# Chapter 57: Building OpenClaw Apps

Content coming soon.
```

## Phase 11: Create Part 5 README

Create `apps/learn-app/docs/05-Building-OpenClaw-Apps/README.md`:

```markdown
---
title: "Part 5: Building OpenClaw Apps"
sidebar_position: 5
description: "Build applications on the OpenClaw platform"
---

# Part 5: Building OpenClaw Apps

Content coming soon.
```

## Summary of Operations

| Phase     | Operation                   | Count                                 |
| --------- | --------------------------- | ------------------------------------- |
| 1         | Part folder renames         | 5 renames + 1 mkdir                   |
| 2         | Move Ch 18 → Ch 56          | 1 git mv                              |
| 3         | Create Ch 18 placeholder    | 1 mkdir + 1 file                      |
| 4         | Part 6 chapter renames      | 16 git mv                             |
| 5         | Part 6 placeholder chapters | 2 mkdir + 2 files                     |
| 6         | Part 7 chapter renames      | 12 git mv                             |
| 7         | Part 8 chapter renames      | 12 git mv                             |
| 8         | Part 9 chapter renames      | 6 git mv                              |
| 9         | Part 10 chapter renames     | 7 git mv                              |
| 10        | Part 5 Ch 57 placeholder    | 1 mkdir + 1 file                      |
| 11        | Part 5 README               | 1 file                                |
| **Total** |                             | **59 git mv + 6 mkdir + 5 new files** |

## NOT Created (Reserved Slots)

- Ch 58, 59, 60 — reserved for future Part 5 expansion. No folders.
