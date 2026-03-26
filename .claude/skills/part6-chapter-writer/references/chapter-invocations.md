# Chapter Invocations

## How to Invoke

For each chapter, fill in these variables and pass them when invoking this skill:

```
- {CH_NUM}: e.g., 69 (the real chapter number)
- {CH_TITLE}: e.g., MCP Fundamentals
- {CH_TYPE}: Socratic | PRIMM-AI+ | Hybrid | Capstone
- {OLD_CH_DIR}: e.g., 66-mcp-fundamentals (the OLD chapter covering same topic, or "none")
- {OUTLINE_SECTION}: e.g., C9 (the v4 outline section to read)
- {LIBRARY_NAME}: e.g., "mcp python sdk" (for Context7 doc fetch, blank for conceptual)
- {LIBRARY_QUERY}: e.g., "How to build MCP server with tools and SSE transport"
- {JAMES_MISTAKE}: e.g., "Wrong tool schemas in MCP server"
- {SCAFFOLDING}: FULL | REDUCED | MINIMAL | INDEPENDENT | N/A
- {ECONOMIC_ACTORS}: true/false (is this chapter on the economic actors thread?)
- {SMARTNOTES}: true/false (does this chapter integrate NoteStore?)
- {PRIOR_WORK}: List of concrete deliverables the student already has from prior chapters
```

## Chapter Reference Table

Each row gives everything needed to invoke the skill for that chapter. Outline section numbers (C#) map to real chapter numbers: offset +60.

### Section I: The Architecture (Ch 61-64)

| Ch  | C#  | Topic                             | Type     | Old Ch Dir                   | Library      | Scaffolding | Econ | SN  | PRIOR WORK                                              |
| --- | --- | --------------------------------- | -------- | ---------------------------- | ------------ | ----------- | ---- | --- | ------------------------------------------------------- |
| 61  | C1  | Agent Factory + Two-Layered Model | Socratic | 61-introduction-to-ai-agents | (conceptual) | N/A         | no   | yes | SmartNotes (Part 4), OpenClaw experience (Part 5 Ch 56) |
| 62  | C2  | Agents as Economic Actors         | Socratic | (none)                       | (conceptual) | N/A         | yes  | no  | Two-Layered Model (C1/Ch61)                             |
| 63  | C3  | Agent Maturity Model              | Socratic | (none)                       | (conceptual) | N/A         | no   | no  | Two-Layered Model (C1/Ch61), Economic Actors (C2/Ch62)  |
| 64  | C4  | HireFlow Blueprint                | Socratic | (none)                       | (conceptual) | N/A         | yes  | no  | C1-C3 concepts, SmartNotes (Part 4)                     |

### Section II: Phase 1 Explore (Ch 65-66)

| Ch  | C#  | Topic                  | Type     | Old Ch Dir | Library      | Scaffolding | Econ | SN  | PRIOR WORK                                    |
| --- | --- | ---------------------- | -------- | ---------- | ------------ | ----------- | ---- | --- | --------------------------------------------- |
| 65  | C5  | 10-80-10 Concept Paper | Socratic | (none)     | (conceptual) | N/A         | no   | no  | HireFlow Blueprint with 4 FTE specs (C4/Ch64) |
| 66  | C6  | Domain Mastery Gate    | Socratic | (none)     | (conceptual) | N/A         | no   | no  | HireFlow concept paper (C5/Ch65)              |

### Section III: Phase 2 Incubate (Ch 67-71)

| Ch  | C#  | Topic                        | Type      | Old Ch Dir                         | Library        | Scaffolding | Econ | SN  | PRIOR WORK                                                                                                    |
| --- | --- | ---------------------------- | --------- | ---------------------------------- | -------------- | ----------- | ---- | --- | ------------------------------------------------------------------------------------------------------------- |
| 67  | C7  | Paper to Agent Skills        | Hybrid    | 68-agent-skills                    | (light code)   | N/A         | no   | no  | Concept paper (C5/Ch65), domain mastery confirmed (C6/Ch66)                                                   |
| 68  | C8  | Simulation-Driven Validation | Socratic  | (none)                             | (conceptual)   | N/A         | no   | no  | 4 agent skills from C7/Ch67                                                                                   |
| 69  | C9  | MCP Fundamentals             | PRIMM-AI+ | 66-mcp-fundamentals                | mcp python sdk | N/A         | no   | no  | 4 validated skills (C7/Ch67) + simulation results (C8/Ch68). Make: expose Resume Screener skill as MCP server |
| 70  | C10 | Custom MCP Servers           | PRIMM-AI+ | 67-custom-mcp-servers              | mcp python sdk | N/A         | no   | no  | Basic MCP server (C9/Ch69) + 4 validated skills. Make: CV parser + Job Template MCP servers                   |
| 71  | C11 | Agent Skills + MCP Code Exec | PRIMM-AI+ | 68-agent-skills-mcp-code-execution | mcp python sdk | N/A         | no   | no  | MCP servers (C9-C10/Ch69-70) + skills (C7/Ch67). RUNTIME INTEGRATION                                          |

### Section IV: Phase 3 Build Specialist (Ch 72-90)

| Ch  | C#  | Topic                           | Type      | Old Ch Dir                        | Library              | Scaffolding     | Econ | SN  | PRIOR WORK                                                                                                                                       |
| --- | --- | ------------------------------- | --------- | --------------------------------- | -------------------- | --------------- | ---- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 72  | C12 | Intro to Agent SDKs             | Socratic  | 61-introduction-to-ai-agents      | (conceptual)         | N/A             | no   | no  | Working skills + MCP servers from Incubate (C7-C11/Ch67-71)                                                                                      |
| 73  | C13 | Claude Agents SDK               | PRIMM-AI+ | 65-anthropic-agents-kit           | anthropic agents sdk | Full            | no   | no  | MCP servers (C9-C11/Ch69-71), skills (C7/Ch67). Build agent using parse_cv + score_candidate tools                                               |
| 74  | C14 | OpenAI Apps SDK                 | PRIMM-AI+ | 72-openai-apps-sdk                | openai agents sdk    | Full            | no   | no  | Same MCP infrastructure. Build "Job Brief Collector" App                                                                                         |
| 75  | C15 | NanoClaw Architecture           | PRIMM-AI+ | (none)                            | nanoclaw             | Full            | no   | no  | Agent SDK experience (C13-C14/Ch73-74), MCP servers (C9-C11/Ch69-71). Configure NanoClaw for Resume Screener                                     |
| 76  | C16 | Relational Databases + SQLModel | PRIMM-AI+ | 74-relational-databases-sqlmodel  | sqlmodel, fastapi    | Full            | no   | no  | HireFlow Blueprint (C4/Ch64) defines: Job, Candidate, Score, PipelineStage                                                                       |
| 77  | C17 | Vector Databases + RAG          | PRIMM-AI+ | 73-vector-databases-rag-langchain | langchain, chromadb  | Full            | no   | no  | Relational DB (C16/Ch76), skills (C7/Ch67), MCP servers (C9-C11/Ch69-71). Embed CVs for semantic search                                          |
| 78  | C18 | Job Spec Writer FTE             | PRIMM-AI+ | (none)                            | mcp python sdk       | **FULL**        | no   | no  | ALL prior: skill (C7/Ch67), simulation (C8/Ch68), MCP (C10/Ch70), NanoClaw (C15/Ch75), DB (C16/Ch76), vectors (C17/Ch77). Define Build Checklist |
| 79  | C19 | Resume Screener FTE             | PRIMM-AI+ | (none)                            | mcp python sdk       | **REDUCED**     | no   | no  | Job Spec Writer FTE (C18/Ch78) + Build Checklist. Reference Ch 78, don't re-explain                                                              |
| 80  | C20 | Interview Q Generator FTE       | PRIMM-AI+ | (none)                            | mcp python sdk       | **MINIMAL**     | no   | no  | 2 FTEs (C18-C19/Ch78-79). Hints in collapsibles only                                                                                             |
| 81  | C21 | Candidate Summarizer FTE        | PRIMM-AI+ | (none)                            | mcp python sdk       | **INDEPENDENT** | no   | no  | 3 FTEs (C18-C20/Ch78-80). No scaffolding + wire verification assembly for all 4 FTEs                                                             |
| 82  | C22 | FastAPI for Agents              | PRIMM-AI+ | 70-fastapi-for-agents             | fastapi              | Full            | no   | no  | 4 working FTEs (C18-C21/Ch78-81). Expose via REST API                                                                                            |
| 83  | C23 | ChatKit Server                  | PRIMM-AI+ | 71-chatkit-server                 | chatkit server       | Full            | no   | yes | FastAPI (C22/Ch82), SmartNotes NoteStore (Part 4). Wrap in conversational interface                                                              |
| 84  | C24 | Orchestration + Budget Tracking | PRIMM-AI+ | 69-multi-agent-reliability        | anthropic agents sdk | Full            | yes  | no  | 4 FTEs + FastAPI + ChatKit. Production orchestrator with budget tracking                                                                         |
| 85  | C25 | Augmented Memory                | PRIMM-AI+ | 75-augmented-memory               | (varied)             | Full            | no   | no  | Orchestrated pipeline (C24/Ch84). Add memory to screener                                                                                         |
| 86  | C26 | Knowledge Graphs + GraphRAG     | PRIMM-AI+ | 78-knowledge-graphs-graphrag      | neo4j, networkx      | Full            | no   | no  | Vector DB (C17/Ch77), relational DB (C16/Ch76). Add relationship-aware search                                                                    |
| 87  | C27 | Security for Agent Factories    | PRIMM-AI+ | (none)                            | (conceptual + code)  | Full            | yes  | no  | Complete pipeline (C24/Ch84) + all data stores. 5 attack surfaces including budget abuse                                                         |
| 88  | C28 | TDD for Agents                  | PRIMM-AI+ | 76-tdd-for-agents                 | pytest               | Full            | no   | no  | Complete HireFlow factory. Test with constraint/property/golden dataset                                                                          |
| 89  | C29 | Evals                           | PRIMM-AI+ | 77-evals-agent-performance        | (varied)             | Full            | no   | no  | Tested factory (C28/Ch88). Measure quality across 5 dimensions                                                                                   |
| 90  | C30 | HireFlow Capstone               | Capstone  | (none)                            | (none)               | Independent     | yes  | yes | EVERYTHING. Assembly Checklist C5-C29. E2E test + budget report + SmartNotes verification                                                        |

## Invocation Example

To write Chapter 69 (MCP Fundamentals):

```
Use /part6-chapter-writer

Variables:
- CH_NUM: 69
- CH_TITLE: MCP Fundamentals
- CH_TYPE: PRIMM-AI+
- OLD_CH_DIR: 66-mcp-fundamentals
- OUTLINE_SECTION: C9
- LIBRARY_NAME: mcp python sdk
- LIBRARY_QUERY: How to build MCP server with tools, resources, prompts, and SSE transport
- JAMES_MISTAKE: Wrong tool schemas in MCP server
- SCAFFOLDING: N/A
- ECONOMIC_ACTORS: false
- SMARTNOTES: false
- PRIOR_WORK: 4 validated skills from C7/Ch67 (Job Spec Writer, Resume Screener, Interview Q Generator, Candidate Summarizer) + simulation results from C8/Ch68. Make capstone must expose the Resume Screener skill as an MCP server, not build from scratch.

Execute Phase 1 (Research), Phase 2 (Write), Phase 3 (Verify).
```

## Section Staging Directories

Output chapters to section-organized staging:

```
specs/drafts/part6-v2-chapters/
├── 01-the-architecture/     (Ch 61-64)
├── 02-explore/              (Ch 65-66)
├── 03-incubate/             (Ch 67-71)
└── 04-build-specialist/     (Ch 72-90)
```
