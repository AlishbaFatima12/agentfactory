THE AI AGENT FACTORY

**Certification-Ready Expansion**

Four New Chapters to Achieve Complete Coverage of the

**Claude Certified Architect — Foundations Exam**

*Complete Lesson-Level Outlines with Exam Domain Mapping*

March 2026

# **Strategic Overview**

The Claude Certified Architect — Foundations exam tests five domains. The Agent Factory book already covers the architectural thinking, Claude Code fundamentals, MCP, the Anthropic Agent SDK, and context engineering. What’s missing is a layer of implementation-level specifics that the exam drills into: bare API mechanics, programmatic enforcement patterns, CI/CD pipeline integration, production reliability engineering, and structured output enforcement.

Four new chapters close every gap. Each chapter slots into the existing book structure, builds on prior chapters, and follows the book’s established pedagogy (PRIMM-AI+ where applicable, Try With AI sections, SKILL.md deliverables where appropriate).

## **Where the Four Chapters Fit**

| New Chapter | Placement | Exam Gaps Covered | Primary Exam Domains |
| :---- | :---- | :---- | :---- |
| Claude Code for Teams, CI/CD & Advanced Configuration | Part 1, after Chapter 5 (SDD) | Gaps 3, 4, 5 | Domain 3 (20%) |
| The Claude API: Agentic Loops, Structured Output & Batch Processing | Part 5, before Chapter 36 (Anthropic Agent SDK) | Gaps 1, 6 (partial) | Domain 1 (27%), Domain 4 (20%) |
| Agent SDK Hooks & Programmatic Enforcement | Part 5, after Chapter 36 (Anthropic Agent SDK) | Gap 2 | Domain 1 (27%) |
| Multi-Agent Reliability: Errors, Escalation, Provenance & Quality | Part 5, after MCP chapters (38–39) | Gaps 6, 7, 8, 9, 10 | Domain 2 (18%), Domain 5 (15%) |

## **Exam Coverage After Addition**

With these four chapters, the Agent Factory book achieves 100% coverage of all five exam domains, all six exam scenarios, and every task statement in the certification exam guide. Students who complete the book will be fully prepared without supplementary material.

# **Chapter A: Claude Code for Teams, CI/CD & Advanced Configuration**

| PLACEMENT Part 1: General Agents — Foundations, after Chapter 5 (Spec-Driven Development). This chapter assumes students have completed Chapters 3 (Claude Code & Cowork) and 5 (SDD). It extends Claude Code from solo developer tool to team-wide engineering infrastructure. |
| :---- |

| EXAM COVERAGE Domain 3 — Claude Code Configuration & Workflows (20% of exam). Covers Task Statements 3.1, 3.2, 3.3, 3.4, 3.6. Also supports Domain 4 Task Statement 4.6 (multi-pass review). |
| :---- |

**Chapter thesis:** Claude Code becomes exponentially more valuable when it is configured for a team, embedded in automated pipelines, and equipped with path-aware conventions. This chapter transforms Claude Code from a solo productivity tool into shared engineering infrastructure.

**Prerequisites:** Chapter 3 (Claude Code & Cowork), Chapter 5 (Spec-Driven Development with Claude Code)

**Running project:** Students apply every lesson to a shared team repository. By the end of the chapter, the repository has a complete CLAUDE.md hierarchy, path-specific rules, custom skills, a CI/CD pipeline, and a multi-pass review workflow.

## **Lesson 1: The CLAUDE.md Configuration Hierarchy**

**Exam mapping:** Task Statement 3.1 — Configure CLAUDE.md files with appropriate hierarchy, scoping, and modular organization

Chapter 3 introduced CLAUDE.md as a project constitution. This lesson formalizes the three-level hierarchy and teaches students to diagnose configuration issues that arise in team environments.

### **Topics**

* **The three-level hierarchy:** User-level (\~/.claude/CLAUDE.md) → Project-level (.claude/CLAUDE.md or root CLAUDE.md) → Directory-level (subdirectory CLAUDE.md files). Explain precedence, inheritance, and when each level applies.

* **User-level isolation:** Instructions in \~/.claude/CLAUDE.md are NOT shared with teammates via version control. This is the \#1 configuration bug in team environments — a developer puts team-critical rules in their user-level file, wonders why no one else follows them.

* **The @import syntax:** Reference external files to keep CLAUDE.md modular. Example: a monorepo with three packages, each importing only the standards files relevant to its domain. Demonstrate @import with relative paths and explain how it reduces duplication.

* **The .claude/rules/ directory:** Introduce as an alternative to monolithic CLAUDE.md. Topic-specific rule files (testing.md, api-conventions.md, deployment.md) that are always loaded. Compare with path-specific rules in Lesson 2\.

* **The /memory command:** Verify which memory files are loaded. Diagnose inconsistent behavior across sessions by checking what Claude Code actually sees.

### **Diagnostic Scenario (Try With AI)**

Present a team debugging scenario: A new developer joins the team. They clone the repo and run Claude Code, but it doesn’t follow the team’s testing conventions. Walk through the diagnosis: the rules were in a senior developer’s \~/.claude/CLAUDE.md, not in the project’s .claude/CLAUDE.md. Students fix it by moving the rules to the correct scope.

### **Exercise**

Build a three-level CLAUDE.md hierarchy for a monorepo with a frontend (React), backend (Python/FastAPI), and shared library. User-level: personal editor preferences. Project-level: universal team standards (Git conventions, PR templates). Directory-level: package-specific rules. Use @import to pull shared standards into each package’s configuration.

## **Lesson 2: Path-Specific Rules with .claude/rules/ and YAML Frontmatter**

**Exam mapping:** Task Statement 3.3 — Apply path-specific rules for conditional convention loading

This is directly tested on the exam (Sample Question 6). Students learn to create rule files that activate only when editing matching files, using glob patterns in YAML frontmatter.

### **Topics**

* **YAML frontmatter path scoping:** Create .claude/rules/ files with paths: \["terraform/\*\*/\*"\] so rules load only when editing matching files. Explain the frontmatter syntax (--- delimiters, paths array, glob pattern syntax).

* **Glob pattern syntax:** Teach the patterns students need: \*\*/\*.test.tsx (all test files anywhere), src/api/\*\*/\* (all files under api/), \*.py (Python files in current directory only). Distinguish \*\* (recursive) from \* (single level).

* **Why globs beat directory-level CLAUDE.md:** The killer scenario: test files are spread throughout the codebase (Button.test.tsx next to Button.tsx). A directory-level CLAUDE.md in a /tests/ folder misses them. A glob pattern \*\*/\*.test.tsx catches them all regardless of location.

* **Token efficiency:** Path-scoped rules load only when needed, reducing irrelevant context and token usage. Compare with always-loaded .claude/rules/ files (no frontmatter) and project-level CLAUDE.md.

* **Decision framework:** When to use path-specific rules vs directory-level CLAUDE.md vs always-loaded rules vs skills. Provide a decision tree.

### **Exercise**

Create four rule files for a full-stack project: (1) paths: \["\*\*/\*.test.\*"\] for testing conventions. (2) paths: \["src/api/\*\*/\*"\] for API handler conventions. (3) paths: \["terraform/\*\*/\*"\] for infrastructure conventions. (4) paths: \["\*.md"\] for documentation standards. Verify that each file loads only when editing matching files. Use /memory to confirm.

## **Lesson 3: Custom Skills with Frontmatter: fork, allowed-tools, argument-hint**

**Exam mapping:** Task Statement 3.2 — Create and configure custom slash commands and skills

### **Topics**

* **Project-scoped commands in .claude/commands/:** Create a /review slash command shared via version control. Walk through the file format, naming conventions, and how they appear in Claude Code’s UI.

* **User-scoped commands in \~/.claude/commands/:** Personal commands not shared with the team. When to use: experimental workflows, personal shortcuts.

* **Skills in .claude/skills/ with SKILL.md frontmatter:**

  * **context: fork** — Run the skill in an isolated sub-agent context. Critical for skills that produce verbose output (codebase analysis) or exploratory context (brainstorming). Prevents skill outputs from polluting the main conversation.

  * **allowed-tools** — Restrict tool access during skill execution. Example: limit to file write operations to prevent destructive actions. Security boundary for skills shared across the team.

  * **argument-hint** — Prompt developers for required parameters when they invoke the skill without arguments. UX polish for team-shared skills.

* **Skills vs CLAUDE.md decision framework:** Skills are on-demand (invoked explicitly for task-specific workflows). CLAUDE.md is always-loaded (universal standards that apply to every interaction). The exam tests this distinction.

* **Personal skill customization:** Create personal variants in \~/.claude/skills/ with different names to avoid overriding team skills.

### **Exercise**

Build three skills: (1) A /codebase-audit skill with context: fork that explores the codebase and returns a structured summary without polluting the main context. (2) A /safe-migrate skill with allowed-tools restricted to Read and Edit (no Bash, no Write) for safe refactoring. (3) A /generate-tests skill with argument-hint: "Path to the file to test" that generates pytest tests for a given module.

## **Lesson 4: Plan Mode vs Direct Execution**

**Exam mapping:** Task Statement 3.4 — Determine when to use plan mode vs direct execution

### **Topics**

* **When to use plan mode:** Complex tasks involving large-scale changes, multiple valid approaches, architectural decisions, multi-file modifications. Example: microservice restructuring, library migrations affecting 45+ files.

* **When to use direct execution:** Simple, well-scoped changes. Example: single-file bug fix with a clear stack trace, adding a date validation conditional.

* **The Explore subagent:** Isolate verbose discovery output. The Explore subagent investigates and returns summaries, preserving main conversation context. Critical for multi-phase tasks where exploration would exhaust the context window.

* **Combining modes:** Plan mode for investigation, direct execution for implementation. Example: plan a library migration (understand dependencies, design approach), then execute the planned approach step by step.

* **The exam’s decision tree:** If the task has architectural implications → plan mode. If the task has a clear scope and single file → direct execution. If you’re unsure which approach is right → plan mode (you can always switch to direct).

### **Exercise**

Present five tasks. Students classify each as plan mode or direct execution and explain why: (1) Restructure a monolith into three microservices. (2) Fix a null pointer exception in a single function. (3) Migrate from REST to GraphQL across 20 endpoints. (4) Add input validation to one form handler. (5) Choose between Redis and Memcached for a caching layer. Students then execute one plan-mode task and one direct-execution task using Claude Code.

## **Lesson 5: Iterative Refinement Techniques**

**Exam mapping:** Task Statement 3.5 — Apply iterative refinement techniques for progressive improvement

### **Topics**

* **Concrete input/output examples:** When prose descriptions produce inconsistent results, 2-3 input/output examples are the most effective fix. Show the transformation you expect, not just describe it.

* **Test-driven iteration:** Write test suites first, then iterate by sharing test failures. Each failure message gives Claude Code specific feedback about what’s wrong.

* **The interview pattern:** Have Claude Code ask questions before implementing. Surfaces considerations the developer may not have anticipated (cache invalidation, failure modes, race conditions).

* **Single message vs sequential iteration:** Provide all interacting issues in a single message when fixes depend on each other. Fix independent issues sequentially to keep context focused.

* **Specific test cases for edge cases:** When Claude Code handles the happy path but misses edge cases, provide specific test input \+ expected output. Example: null values in migration scripts, empty strings, unicode characters.

### **Exercise**

Students build a CSV-to-JSON transformer through iterative refinement: (1) Start with a prose description — observe inconsistent output format. (2) Add 2 input/output examples — observe improved consistency. (3) Write 5 pytest tests covering edge cases (empty rows, quoted commas, unicode) — iterate by sharing failures. (4) Use the interview pattern to surface a design consideration they missed (encoding detection). Measure improvement at each step.

## **Lesson 6: Claude Code in CI/CD Pipelines**

**Exam mapping:** Task Statement 3.6 — Integrate Claude Code into CI/CD pipelines

*This lesson covers the content of exam Sample Question 10 (the \-p flag) and Sample Question 11 (Batch API for CI).*

### **Topics**

* **The \-p (--print) flag:** Run Claude Code in non-interactive mode. Processes the prompt, outputs to stdout, exits. Required for CI/CD — without it, the job hangs waiting for interactive input. This is literally an exam question.

* **\--output-format json \+ \--json-schema:** Produce machine-parseable structured findings. Define a JSON schema for code review output (file, line, severity, issue, suggestion). Parse the output and post as inline PR comments.

* **CLAUDE.md as CI context:** Provide project context to CI-invoked Claude Code. Document testing standards, fixture conventions, review criteria. Without this, CI-invoked Claude Code lacks the context a human developer has from working in the codebase daily.

* **Avoiding duplicate comments:** Include prior review findings when re-running after new commits. Instruct Claude Code to report only new or still-unaddressed issues.

* **Test generation quality:** Provide existing test files in context so Claude Code avoids suggesting duplicate scenarios. Document valuable test criteria (what tests are worth writing vs noise).

### **Build Exercise**

Students build a complete CI pipeline that: (1) Runs Claude Code with \-p for automated code review on every PR. (2) Uses \--output-format json with a custom schema to produce structured findings. (3) Posts findings as inline PR comments via the GitHub API. (4) Includes a CLAUDE.md section documenting review criteria, severity definitions, and testing conventions. (5) On subsequent runs after new commits, includes prior findings to avoid duplicate comments.

## **Lesson 7: Multi-Pass Review Architecture**

**Exam mapping:** Task Statement 4.6 (Domain 4\) — Design multi-instance and multi-pass review architectures

*This lesson covers exam Sample Question 12 (splitting large PR reviews into focused passes).*

### **Topics**

* **Self-review limitations:** A model retains reasoning context from generation. It is less likely to question its own decisions in the same session. The exam’s hierarchy: independent review instance \> extended thinking \> self-review instructions.

* **Per-file local analysis \+ cross-file integration pass:** For large PRs (10+ files), a single-pass review produces inconsistent depth, missed bugs, and contradictory findings. The correct architecture: analyze each file individually for local issues, then run a separate pass examining cross-file data flow and API contract consistency.

* **Session context isolation:** Why the same Claude session that generated code should NOT review it. The generator’s reasoning context biases the review. Use an independent Claude instance.

* **Confidence self-reporting:** Have the review model self-report confidence alongside each finding. Use this for calibrated review routing — high-confidence findings go directly to developers, low-confidence findings get human reviewer attention.

* **The “larger context window” trap:** Larger context windows do NOT solve attention quality issues. The exam consistently marks this as wrong. Splitting into focused passes is always the correct answer for attention dilution problems.

### **Exercise**

Students implement a multi-pass review workflow for a 10-file PR: (1) Write a script that invokes Claude Code with \-p for each file individually, collecting per-file findings. (2) Write a second script that passes all per-file findings plus the full PR diff to a separate Claude instance for cross-file integration analysis. (3) Compare results with a single-pass review of the same PR. Measure: findings count, finding quality, consistency across files.

## **Lesson 8: Session Management — Resume, Fork, and Recovery**

**Exam mapping:** Task Statement 1.7 — Manage session state, resumption, and forking

### **Topics**

* **Named session resumption:** \--resume \<session-name\> continues a specific prior conversation. Use for multi-day investigations where context from prior sessions is valuable.

* **fork\_session:** Create independent branches from a shared analysis baseline. Use for exploring divergent approaches (e.g., comparing two testing strategies, two refactoring approaches) from a common starting point.

* **When to resume vs start fresh:** Resume when prior context is mostly valid. Start fresh with injected summaries when prior tool results are stale (files have changed, external state has evolved).

* **Informing resumed sessions about changes:** When resuming after code modifications, tell the session about specific file changes for targeted re-analysis rather than requiring full re-exploration.

* **/compact for context management:** Reduce context usage during extended exploration sessions when context fills with verbose discovery output.

### **Exercise**

Students work through a multi-session codebase exploration: (1) Start a named session exploring a codebase architecture. (2) Save findings, then fork the session to explore two competing refactoring approaches. (3) Compare the two branches. (4) Resume the original session the next day, inform it about files that changed overnight, and verify it focuses re-analysis on the changed areas.

### **Chapter Deliverables**

* A complete CLAUDE.md hierarchy for a team monorepo

* Four path-specific rule files with glob patterns

* Three custom skills with context: fork, allowed-tools, and argument-hint frontmatter

* A working CI/CD pipeline with Claude Code integration (--p, \--output-format json)

* A multi-pass review workflow script

# **Chapter B: The Claude API — Agentic Loops, Structured Output & Batch Processing**

| PLACEMENT Part 5: Building Custom Agents, BEFORE Chapter 36 (Anthropic Claude Agent SDK). This chapter teaches the raw API mechanics that the Agent SDK abstracts. Students must understand the API layer before they can understand what the SDK does for them. |
| :---- |

| EXAM COVERAGE Domain 1 — Agentic Architecture & Orchestration (27%): Task Statement 1.1. Domain 4 — Prompt Engineering & Structured Output (20%): Task Statements 4.3, 4.5. Directly covers Sample Questions 1, 2, 10, 11\. |
| :---- |

**Chapter thesis:** Every agent SDK is an abstraction over the Claude API’s messages endpoint. Understanding the raw API — stop\_reason, tool\_use, tool\_choice, JSON schemas, and the Batch API — gives you the ability to diagnose any agent behavior, design custom orchestration that SDKs don’t support, and make cost/latency tradeoffs that production systems require.

**Prerequisites:** Chapter 33 (Introduction to AI Agents — conceptual foundation), Python proficiency from Part 4

**Running project:** Students build a complete structured data extraction pipeline using raw API calls, progressing from simple extraction to validation-retry to batch processing. By the end, they have a production-grade extraction system.

## **Lesson 1: The Messages API — Anatomy of a Request and Response**

**Exam mapping:** Task Statement 1.1 (foundation)

### **Topics**

* **Request structure:** model, max\_tokens, system prompt, messages array, tools array. Walk through each field with concrete examples.

* **Response structure:** content blocks (text, tool\_use), stop\_reason, usage (input/output tokens). Explain each content block type.

* **stop\_reason values:** "end\_turn" (model is done), "tool\_use" (model wants to call a tool), "max\_tokens" (response was truncated). The exam tests all three.

* **Conversation history as state:** The API is stateless. You must pass the complete conversation history in every request. Omitting prior messages causes context loss.

### **Exercise**

Students make their first raw API call using Python’s httpx library. Send a simple message, inspect the response structure, identify stop\_reason, and parse content blocks. Then add a system prompt and observe how it changes behavior.

## **Lesson 2: Tool Definitions and Tool Use**

**Exam mapping:** Task Statement 1.1, Task Statement 2.1

### **Topics**

* **Tool definition structure:** name, description, input\_schema (JSON Schema). The description is the primary mechanism Claude uses for tool selection — minimal descriptions lead to unreliable selection.

* **Writing effective tool descriptions:** Include input formats, example queries, edge cases, and boundary explanations. Differentiate similar tools. The exam tests this as Sample Question 2\.

* **Tool use response handling:** When stop\_reason is "tool\_use", the content array contains a tool\_use block with id, name, and input. Extract the call, execute the tool, format the result.

* **Tool result format:** Construct a tool\_result message with tool\_use\_id, content (string or array of content blocks), and optional is\_error flag. Append to conversation history.

* **Tool distribution principles:** Giving an agent 18 tools degrades selection reliability. Restrict each agent to 4-5 tools relevant to its role. The exam tests this in Task Statement 2.3.

### **Exercise**

Students define three tools: get\_customer (retrieves customer by ID), lookup\_order (retrieves order by number), calculate\_refund (computes refund amount). First, use minimal descriptions and observe misrouting. Then expand descriptions with input formats, boundaries, and examples. Measure selection accuracy before and after.

## **Lesson 3: The Agentic Loop — Building Autonomous Tool-Using Agents**

**Exam mapping:** Task Statement 1.1 — Design and implement agentic loops for autonomous task execution

*This is the core exam pattern for Domain 1\. Every agentic architecture question depends on understanding this loop.*

### **Topics**

* **The complete agentic loop:** (1) Send request with tools. (2) Inspect stop\_reason. (3) If "tool\_use": execute tool, append result, send again. (4) If "end\_turn": present final response. (5) Repeat until "end\_turn".

* **Model-driven decision making:** Claude reasons about which tool to call next based on context. This is fundamentally different from pre-configured decision trees. The model decides the sequence, not the developer.

* **Anti-patterns (the exam tests all three):**

  * Parsing natural language to detect completion → unreliable

  * Arbitrary iteration caps as PRIMARY stopping mechanism → may terminate early

  * Checking for assistant text content as completion indicator → text may appear alongside tool\_use

* **Appending tool results correctly:** Each tool result must reference the tool\_use\_id from the request. Multiple tool calls in one response require multiple tool results appended in order.

### **Build Exercise**

Students implement a complete agentic loop in Python. The agent has access to get\_customer, lookup\_order, and process\_refund tools. Given a customer support request like “I want a refund for order \#12345,” the agent autonomously: (1) Looks up the customer. (2) Looks up the order. (3) Calculates and processes the refund. (4) Returns a summary. Students verify the loop terminates correctly on stop\_reason \= "end\_turn" and handles multi-step tool chains.

## **Lesson 4: tool\_choice — Controlling Tool Selection**

**Exam mapping:** Task Statement 2.3, Task Statement 4.3

### **Topics**

* **tool\_choice: "auto" (default):** Model decides whether to call a tool or respond with text. Use for general-purpose agents.

* **tool\_choice: "any":** Model MUST call a tool but can choose which one. Use when you need guaranteed structured output with multiple possible schemas (e.g., unknown document type with multiple extraction tools).

* **tool\_choice: {"type": "tool", "name": "extract\_metadata"}:** Model MUST call this specific tool. Use to force a particular step (e.g., metadata extraction before enrichment).

* **Multi-step forced selection:** Force a specific tool in the first turn, then switch to "auto" for subsequent turns. Ensures a prerequisite runs first without hardcoding the entire sequence.

### **Exercise**

Students build a document processing pipeline that: (1) Forces extract\_metadata on the first turn to get document type. (2) Uses tool\_choice: "any" on the second turn with three extraction tools (extract\_invoice, extract\_contract, extract\_report) so the model picks the right one based on the metadata. (3) Switches to "auto" for optional enrichment steps. Students verify each tool\_choice setting produces the expected behavior.

## **Lesson 5: Structured Output via tool\_use with JSON Schemas**

**Exam mapping:** Task Statement 4.3 — Enforce structured output using tool use and JSON schemas

### **Topics**

* **Why tool\_use beats prompting for JSON:** tool\_use with JSON schemas eliminates syntax errors entirely. Prompting for JSON text has a non-zero failure rate (malformed JSON, missing fields, wrong types).

* **Schema design patterns:**

  * **Required vs optional fields:** Make fields optional/nullable when the source may not contain the information. Prevents the model from fabricating values to satisfy required fields.

  * **Enum \+ "other" \+ detail string:** For extensible categories. status: enum \["approved", "denied", "pending", "other"\] \+ status\_detail: string.

  * **"unclear" enum value:** For genuinely ambiguous cases. Gives the model an honest escape hatch instead of forcing a guess.

* **Semantic validation:** Strict schemas eliminate syntax errors but NOT semantic errors. Line items may not sum to total. Values may end up in wrong fields. You still need validation logic.

* **Format normalization rules:** Include normalization instructions in the system prompt alongside the schema (e.g., "Always return dates as ISO 8601", "Convert all currencies to USD").

### **Build Exercise**

Students build an invoice extraction tool with a JSON schema containing: required fields (invoice\_number, date, total), optional fields (po\_number, payment\_terms), an enum with "other" (payment\_method), and a nullable field (discount\_amount). Process 5 sample invoices, including one with missing PO number and one with an unusual payment method. Verify nullable fields return null (not fabricated values) and the "other" enum captures the unusual method.

## **Lesson 6: Validation-Retry Loops for Extraction Quality**

**Exam mapping:** Task Statement 4.4 — Implement validation, retry, and feedback loops for extraction quality

### **Topics**

* **The retry-with-error-feedback pattern:** On validation failure, send a follow-up containing: original document \+ failed extraction \+ specific validation errors. The model uses error feedback to self-correct.

* **When retries succeed vs fail:**

  * Succeed: format mismatches, structural errors, wrong field placement

  * Fail: information absent from source document, external dependencies, genuine ambiguity with no additional context

* **Self-correction validation:** Extract both "calculated\_total" and "stated\_total". Flag discrepancies. Add "conflict\_detected" booleans for inconsistent source data.

* **Pydantic validation integration:** Use Pydantic models to validate extracted data. On failure, format Pydantic error messages as feedback for the retry prompt.

### **Build Exercise**

Students implement a complete validation-retry pipeline: (1) Extract invoice data using tool\_use. (2) Validate with Pydantic (dates are valid, amounts are positive, line items sum to total). (3) On failure, retry with the original document \+ failed extraction \+ formatted Pydantic errors. (4) Test with an invoice where line items don’t sum to the stated total — verify the retry catches the discrepancy. (5) Test with a document missing a required field — verify the retry correctly identifies it as absent (not retryable).

## **Lesson 7: The Message Batches API**

**Exam mapping:** Task Statement 4.5 — Design efficient batch processing strategies

*This lesson covers exam Sample Question 11 (batch API for pre-merge checks vs overnight reports).*

### **Topics**

* **Batch API mechanics:** 50% cost savings, up to 24-hour processing window, no latency SLA, custom\_id for request/response correlation, no multi-turn tool calling within a single batch request.

* **When to use:** Latency-tolerant workloads: overnight technical debt reports, weekly compliance audits, nightly test generation, batch document extraction.

* **When NOT to use:** Blocking workflows: pre-merge checks, real-time code review, anything where a developer or system is waiting for the result. The 24-hour window makes it unsuitable.

* **Failure handling:** Identify failed documents by custom\_id. Resubmit only failures with modifications (chunking oversized documents, simplifying extraction requests).

* **Cost optimization:** Refine prompts on a small sample set before batch-processing large volumes. First-pass success rate directly impacts total cost.

* **Batch submission frequency:** Calculate based on SLA constraints. If SLA is 30 hours and batch processing takes up to 24 hours, you need to submit at least 6 hours before the SLA deadline.

### **Build Exercise**

Students batch-process 50 invoices: (1) Submit the batch with custom\_id for each invoice. (2) Poll for completion. (3) Identify 5 failures by custom\_id. (4) Analyze failure reasons (3 oversized, 2 format errors). (5) Resubmit oversized invoices with chunking. (6) Calculate total cost vs real-time API equivalent.

### **Chapter Deliverables**

* A working agentic loop implementation in Python

* A tool\_choice progression pipeline (forced → any → auto)

* A structured extraction tool with JSON schema (nullable, enum \+ other, format rules)

* A validation-retry pipeline with Pydantic integration

* A batch processing pipeline with failure recovery

# **Chapter C: Agent SDK Hooks & Programmatic Enforcement**

| PLACEMENT Part 5: Building Custom Agents, immediately AFTER Chapter 36 (Anthropic Claude Agent SDK). This chapter deepens the SDK coverage with the hook patterns and enforcement mechanisms the exam tests. |
| :---- |

| EXAM COVERAGE Domain 1 — Agentic Architecture & Orchestration (27%): Task Statements 1.4, 1.5. Directly covers Sample Question 1 (programmatic prerequisite for tool ordering). |
| :---- |

**Chapter thesis:** Prompt instructions have a non-zero failure rate. When business rules have financial, legal, or safety consequences, “non-zero” is unacceptable. Hooks provide deterministic guarantees that sit outside the model’s probabilistic reasoning. This chapter teaches when and how to use them.

**Prerequisites:** Chapter 36 (Anthropic Claude Agent SDK), Chapter B (The Claude API)

**Running project:** Students build a customer support resolution agent with programmatic enforcement of identity verification, refund limits, and escalation protocols. Target: 80%+ first-contact resolution with zero policy violations. This is exam Scenario 1\.

## **Lesson 1: The Enforcement Hierarchy — When Prompts Are Not Enough**

### **Topics**

* **The three levels of enforcement:**

  * **Level 1 — Programmatic enforcement (hooks, prerequisite gates):** Deterministic. 100% compliance. Use for identity verification, financial limits, security boundaries.

  * **Level 2 — Few-shot examples in system prompt:** High reliability but probabilistic. Use for judgment calls where the model needs guidance but absolute compliance isn’t critical.

  * **Level 3 — Prompt instructions:** Least reliable. Non-zero failure rate. Use for stylistic guidance, output formatting, conversational tone.

* **The exam’s decision rule:** If the question mentions financial operations, identity verification, policy compliance, or security, the answer is Level 1\. Always.

* **Why prompt-based ordering fails:** Present production data showing 12% of cases skip identity verification when relying on prompt instructions alone (Sample Question 1 scenario).

### **Exercise**

Students classify 10 business rules into the three enforcement levels: (1) “Verify customer identity before processing refunds” → Level 1\. (2) “Use a friendly tone in responses” → Level 3\. (3) “Escalate when the customer explicitly asks for a human” → Level 1\. (4) “Check order status before offering a replacement” → Level 2\. And so on.

## **Lesson 2: PostToolUse Hooks — Normalizing Tool Output**

**Exam mapping:** Task Statement 1.5

### **Topics**

* **Hook lifecycle:** PostToolUse fires after tool execution, before the model processes the result. The hook transforms the result in place.

* **Data normalization use cases:** MCP tools from different backends return heterogeneous formats: Unix timestamps vs ISO 8601, numeric status codes vs strings, nested vs flat structures. The model processes normalized data more reliably than raw heterogeneous formats.

* **Trimming verbose tool output:** A CRM lookup returns 40+ fields per customer. The agent only needs 5 for the current task. PostToolUse hooks trim to relevant fields, reducing context consumption.

* **Implementation pattern:** Hook receives tool name and result. Switch on tool name to apply tool-specific normalization. Return the transformed result.

### **Build Exercise**

Students implement PostToolUse hooks for three MCP tools: (1) get\_customer returns Unix timestamps → hook converts to ISO 8601\. (2) lookup\_order returns 30 fields → hook trims to 6 return-relevant fields. (3) process\_refund returns numeric status codes → hook converts to human-readable strings. Verify the agent processes the normalized data correctly.

## **Lesson 3: Tool Call Interception — Blocking Policy-Violating Actions**

**Exam mapping:** Task Statement 1.5

### **Topics**

* **Pre-execution interception:** The hook fires before the tool executes. It can block the call entirely, modify parameters, or redirect to an alternative workflow.

* **Threshold enforcement:** Block refunds above $500 and redirect to human escalation. The model never even sees the tool result — the hook prevents execution.

* **Prerequisite gates:** Block lookup\_order and process\_refund until get\_customer has returned a verified customer ID. Maintain a session-level state variable tracking whether verification has occurred.

* **Escalation redirection:** When a hook blocks an action, it should return a structured response telling the agent what happened and what to do instead (escalate, ask for approval, use an alternative workflow).

### **Build Exercise**

Students implement: (1) A prerequisite gate that blocks lookup\_order and process\_refund until get\_customer returns a verified customer ID. Test with 10 customer requests — verify 100% compliance (no order lookups without verification). (2) A threshold hook that blocks refunds \> $500 and redirects to escalate\_to\_human. Test with refunds of $200, $500, $501, $1000. (3) Compare with a prompt-only baseline (same rules expressed as system prompt instructions) and measure the compliance difference.

## **Lesson 4: Multi-Step Workflow Enforcement**

**Exam mapping:** Task Statement 1.4 — Implement multi-step workflows with enforcement and handoff patterns

### **Topics**

* **Decomposing multi-concern requests:** A customer says “I want a refund for order \#123 and also need to update my address.” The agent must decompose into two items, investigate each using shared context, and synthesize a unified resolution.

* **Structured handoff protocol:** When escalating, compile: customer ID, verification status, root cause analysis, actions already taken, recommended next action. The human agent may not have access to the conversation transcript.

* **Mid-process escalation:** The agent discovers during investigation that the case requires policy exception handling. It must escalate with context, not abandon the work done so far.

### **Build Exercise**

Students build the complete customer support resolution agent (exam Scenario 1): (1) Prerequisite gate: identity verification before any operations. (2) Threshold enforcement: refund limit of $500. (3) Multi-concern decomposition: handle compound requests. (4) Structured handoff: compile escalation summaries. (5) Test with 20 diverse customer requests. Measure first-contact resolution rate and policy violation rate.

## **Lesson 5: Hooks in Multi-Agent Architectures**

### **Topics**

* **Coordinator-level hooks:** Hooks on the coordinator agent that normalize or validate subagent outputs before synthesis.

* **Subagent-level hooks:** Hooks scoped to individual subagents that enforce subagent-specific rules (e.g., the search subagent has a rate limiter hook, the refund subagent has a threshold hook).

* **Hook ordering and composition:** When multiple hooks apply to the same tool call, execution order matters. Normalization hooks should run before validation hooks.

### **Chapter Deliverables**

* A complete customer support resolution agent with programmatic enforcement

* PostToolUse hooks for data normalization across 3 MCP tools

* Tool call interception hooks for prerequisite gates and threshold enforcement

* Structured handoff protocol implementation

* Compliance measurement: prompt-only vs hooks comparison

# **Chapter D: Multi-Agent Reliability — Errors, Escalation, Provenance & Quality**

| PLACEMENT Part 5: Building Custom Agents, after the MCP chapters (38–39). This is the reliability engineering chapter that teaches students how to make multi-agent systems production-grade. It bridges the gap between “it works in a demo” and “it works in production.” |
| :---- |

| EXAM COVERAGE Domain 2 — Tool Design & MCP Integration (18%): Task Statement 2.2. Domain 5 — Context Management & Reliability (15%): Task Statements 5.1, 5.2, 5.3, 5.4, 5.5, 5.6. Directly covers Sample Questions 3, 7, 8, 9\. |
| :---- |

**Chapter thesis:** A multi-agent system is only as reliable as its weakest error path. This chapter teaches the five disciplines of multi-agent reliability: structured error propagation, escalation calibration, context management at scale, information provenance, and human review integration. These are the patterns that separate prototype-grade systems from production-grade systems.

**Prerequisites:** Chapter 36 (Anthropic Agent SDK), Chapter C (Hooks & Programmatic Enforcement), Chapters 37-38 (MCP)

**Running project:** Students build a multi-agent research system (exam Scenario 3\) with a coordinator agent, web search subagent, document analysis subagent, and synthesis subagent. They progressively add reliability engineering to each layer.

## **Lesson 1: Structured Error Propagation — The MCP isError Pattern**

**Exam mapping:** Task Statement 2.2, Task Statement 5.3

*Covers Sample Question 8 (web search subagent timeout error propagation).*

### **Topics**

* **The MCP isError flag:** How tools communicate failures back to the agent.

* **Error category taxonomy:** transient (timeouts, service unavailability), validation (invalid input), business (policy violations), permission (unauthorized access). Each category implies different agent behavior.

* **Structured error metadata:** errorCategory, isRetryable boolean, description, attemptedQuery, partialResults. Compare with generic “Operation failed” strings that prevent intelligent recovery.

* **The access-failure vs valid-empty-result distinction:** Search timed out (isError: true, isRetryable: true) vs search succeeded with 0 results (isError: false). The coordinator must distinguish these to make correct retry decisions.

* **Anti-patterns:**

  * Returning empty results as success when the tool actually failed (suppresses error)

  * Terminating the entire workflow on a single subagent failure (over-reaction)

  * Generic error messages that hide valuable recovery context

### **Build Exercise**

Students implement structured error responses for four MCP tools: (1) web\_search — return transient errors with the attempted query and partial results. (2) fetch\_document — distinguish between “document not found” (valid empty, isError: false) and “service timeout” (transient, isError: true). (3) process\_payment — return business errors with customer-friendly explanations for policy violations. (4) access\_database — return permission errors with the specific access level required.

## **Lesson 2: Subagent Error Recovery and Coordinator Decision-Making**

**Exam mapping:** Task Statement 5.3

### **Topics**

* **Local recovery first:** Subagents implement retry logic for transient failures internally. Only propagate errors they cannot resolve.

* **Partial results propagation:** When a subagent partially succeeds (3 of 5 queries completed), return what it has plus what failed and what was attempted.

* **Coordinator recovery strategies:** Based on error metadata, the coordinator can: retry with modified parameters, invoke an alternative subagent, proceed with partial results and annotate the gap, or escalate to a human.

* **Coverage annotations in synthesis:** The synthesis output must indicate which findings are well-supported vs which topic areas have gaps due to unavailable sources.

### **Build Exercise**

Students simulate failures in the research pipeline: (1) Web search subagent times out on 2 of 5 queries — verify it returns partial results \+ structured error for the 2 failures. (2) The coordinator receives the error, retries with modified queries, gets 1 more result, and proceeds with 4 of 5 sources. (3) The synthesis subagent produces a report with coverage annotations noting the missing source area. Students verify the complete error flow from subagent to coordinator to synthesis.

## **Lesson 3: Escalation Calibration — When to Escalate vs Resolve**

**Exam mapping:** Task Statement 5.2

*Covers Sample Question 3 (escalation accuracy improvement).*

### **Topics**

* **Appropriate escalation triggers:**

  * Customer explicitly requests a human agent → honor immediately

  * Policy exceptions or gaps (policy is ambiguous or silent on the request) → escalate

  * Inability to make meaningful progress after genuine investigation → escalate

* **What does NOT work for escalation calibration:**

  * **Self-reported confidence scores:** LLM confidence is poorly calibrated. Agent is incorrectly confident on hard cases.

  * **Sentiment analysis:** Frustration ≠ complexity. A frustrated customer with a simple return doesn’t need escalation.

  * **Separate classifier model:** Over-engineered when prompt optimization hasn’t been tried.

  * **“Be conservative” instructions:** Vague. Doesn’t improve precision.

* **What DOES work:** Explicit escalation criteria \+ 3-5 few-shot examples demonstrating when to escalate vs resolve autonomously. Include examples of straightforward cases that should NOT be escalated (standard damage replacement with photo evidence) and complex cases that SHOULD be escalated (policy exception request).

* **Acknowledging frustration without escalating:** When the customer is frustrated but the issue is within the agent’s capability, acknowledge the frustration, offer resolution, and escalate only if the customer reiterates.

* **Multiple customer matches:** When get\_customer returns multiple results, ask for additional identifiers. Never select based on heuristics.

### **Exercise**

Students add escalation logic to the customer support agent from Chapter C: (1) Write explicit escalation criteria with 5 few-shot examples. (2) Test with 20 customer requests including: straightforward cases, policy exception requests, frustrated customers with simple issues, customers who explicitly ask for a human, and ambiguous cases. (3) Measure: first-contact resolution rate, correct escalation rate, false escalation rate. (4) Compare with a baseline using only “be conservative” prompt instructions.

## **Lesson 4: Context Management at Scale — Preserving Critical Information**

**Exam mapping:** Task Statement 5.1, Task Statement 5.4

### **Topics**

* **Progressive summarization risks:** When you summarize conversation history, exact numbers, dates, percentages, and customer-stated expectations get compressed into vague summaries. “The customer wants a $247.50 refund for order \#ORD-7891 placed on March 3” becomes “the customer wants a refund.”

* **The “case facts” pattern:** Extract transactional facts (amounts, dates, order numbers, statuses, customer expectations) into a persistent structured block included in every prompt, OUTSIDE the summarized history. The summary can compress; the facts never compress.

* **The “lost in the middle” effect:** Models reliably process information at the beginning and end of long inputs but may omit findings from middle sections. Mitigation: place key findings summaries at the beginning, use explicit section headers, put the most important data at the start and end.

* **Trimming verbose tool outputs:** A CRM lookup returns 40+ fields. Trim to the 5 relevant fields BEFORE they accumulate in context. This is a PostToolUse hook application (Chapter C) applied to context management.

* **Scratchpad files for long sessions:** Agents maintain files recording key findings. Reference the scratchpad for subsequent questions to counteract context degradation over extended sessions.

* **/compact for context recovery:** When context fills with verbose discovery output, /compact reduces usage while preserving the structured summary.

### **Build Exercise**

Students build a multi-issue customer support session: (1) The customer reports 3 separate issues in one conversation. (2) Implement a “case facts” block that persists all three issue states (order IDs, amounts, statuses, resolution progress) across turns. (3) Simulate a long conversation (20+ turns) and verify that transactional facts are preserved exactly. (4) Compare with a naive approach (no case facts extraction) and count the factual errors in turn 20\.

## **Lesson 5: Information Provenance in Multi-Source Synthesis**

**Exam mapping:** Task Statement 5.6

*Covers Sample Question 7 (task decomposition coverage gaps) and Sample Question 9 (scoped verification tools).*

### **Topics**

* **Claim-source mappings:** Subagents output structured findings with claim, evidence excerpt, source URL/document name, publication date, and relevance score. Downstream agents MUST preserve this structure through synthesis.

* **Attribution loss during summarization:** Without structured claim-source mappings, the synthesis agent compresses “According to Reuters (March 2026), adoption increased 40%” into “adoption increased significantly.” The source, date, and exact figure are lost.

* **Handling conflicting sources:** When two credible sources provide different statistics, annotate BOTH values with source attribution and methodology context. Never arbitrarily select one.

* **Temporal data:** Require publication/collection dates in all subagent outputs. Without dates, a 2023 study and a 2025 study look like contradictions when they actually reflect change over time.

* **Content-type-appropriate rendering:** Financial data as tables, news as prose, technical findings as structured lists, contested findings in explicit “well-established vs disputed” sections.

* **Scoped verification tools:** Give the synthesis agent a scoped verify\_fact tool for simple lookups (85% of cases) while complex verifications delegate through the coordinator (15% of cases). This reduces coordinator round-trips by 40%.

### **Build Exercise**

Students complete the multi-agent research system: (1) Configure subagents to output structured claim-source mappings. (2) Run a research task on “impact of AI on creative industries” and verify the coordinator decomposes broadly (visual arts, music, writing, film) — not narrowly. (3) Inject two conflicting statistics from credible sources. Verify the synthesis preserves both with attribution. (4) Add a verify\_fact tool to the synthesis agent. Measure latency reduction.

## **Lesson 6: Human Review Workflows & Confidence Calibration**

**Exam mapping:** Task Statement 5.5

### **Topics**

* **The aggregate accuracy trap:** 97% overall accuracy may mask 40% error rates on a specific document type or field. Always validate accuracy BY document type AND by field.

* **Field-level confidence scores:** The model outputs a confidence score for each extracted field (not just the document). More granular than document-level confidence.

* **Calibrating thresholds with labeled validation sets:** Don’t use arbitrary cutoffs (confidence \> 0.8 \= auto-accept). Use a labeled dataset to find the threshold where precision meets your requirements per field per document type.

* **Stratified random sampling:** Pull random samples from high-confidence extractions for ongoing error rate measurement. Detect novel error patterns that weren’t in the original validation set.

* **Review routing:** Low-confidence fields → human review. Ambiguous/contradictory source documents → human review regardless of confidence. Limited reviewer capacity → prioritize by impact.

### **Build Exercise**

Students build a human review routing system for the invoice extraction pipeline from Chapter B: (1) Add field-level confidence scores to the extraction tool. (2) Process 100 invoices from 3 document types. (3) Use a 20-invoice labeled set to calibrate confidence thresholds per field per document type. (4) Route low-confidence extractions to a simulated human review queue. (5) Implement stratified sampling that pulls 5% of high-confidence extractions for ongoing quality measurement. (6) Calculate accuracy by document type and field — identify if any segment is underperforming.

## **Lesson 7: Coordinator-Subagent Orchestration Patterns**

**Exam mapping:** Task Statements 1.2, 1.3

### **Topics**

* **Hub-and-spoke architecture:** The coordinator manages ALL inter-subagent communication. Subagents never communicate directly. This provides observability, consistent error handling, and controlled information flow.

* **Subagent context isolation:** Subagents do NOT inherit the coordinator’s conversation history. Context must be explicitly provided in the prompt. This is the \#1 multi-agent misconception.

* **The Task tool:** The mechanism for spawning subagents. The coordinator’s allowedTools must include “Task.” The Task tool accepts a prompt and tool restrictions.

* **Parallel subagent execution:** The coordinator emits multiple Task tool calls in a single response. These execute in parallel, not sequentially. Measure latency improvement vs sequential.

* **Context passing between agents:** Include complete findings from prior agents in the subagent’s prompt. Use structured data formats to separate content from metadata (source URLs, page numbers) for attribution preservation.

* **Iterative refinement loops:** The coordinator evaluates synthesis output for coverage gaps, re-delegates to search/analysis subagents with targeted queries, and re-invokes synthesis until coverage is sufficient.

* **Coordinator prompt design:** Specify research goals and quality criteria, NOT step-by-step procedural instructions. Enable subagent adaptability.

### **Capstone Build Exercise**

Students deliver the complete multi-agent research system as a polished, tested application: coordinator agent, web search subagent, document analysis subagent, synthesis subagent. With: structured error propagation (Lesson 1-2), escalation criteria (Lesson 3), context management with case facts (Lesson 4), information provenance with claim-source mappings (Lesson 5), human review routing (Lesson 6), and coordinator orchestration with parallel execution and iterative refinement (Lesson 7). This is exam Scenario 3 built end-to-end.

### **Chapter Deliverables**

* Structured error responses for 4 MCP tools with the full error taxonomy

* Escalation criteria with 5 few-shot examples and measured compliance

* A “case facts” context management system preserving transactional data across 20+ turns

* Claim-source mapping pipeline with provenance preservation through synthesis

* Human review routing system with field-level confidence calibration

* A complete multi-agent research system (exam Scenario 3\)

# **Complete Exam Coverage Matrix**

After adding these four chapters, every exam task statement is covered:

| Task | Description | Coverage |
| :---- | :---- | :---- |
| 1.1 | Agentic loop implementation | Chapter B, Lessons 1–3 |
| 1.2 | Multi-agent orchestration | Chapter D, Lesson 7 |
| 1.3 | Subagent invocation & context passing | Chapter D, Lesson 7 |
| 1.4 | Multi-step workflow enforcement | Chapter C, Lesson 4 |
| 1.5 | Agent SDK hooks | Chapter C, Lessons 2–3 |
| 1.6 | Task decomposition strategies | Chapter A, Lessons 4–5 \+ Existing Ch 36 |
| 1.7 | Session management & forking | Chapter A, Lesson 8 |
| 2.1 | Tool interface design | Chapter B, Lesson 2 \+ Existing Ch 37 |
| 2.2 | Structured error responses | Chapter D, Lessons 1–2 |
| 2.3 | Tool distribution & tool\_choice | Chapter B, Lessons 2, 4 |
| 2.4 | MCP server integration | Existing Ch 37–38 \+ Chapter A, Lesson 6 |
| 2.5 | Built-in tools (Read, Write, Bash, Grep, Glob) | Existing Ch 3 |
| 3.1 | CLAUDE.md hierarchy & scoping | Chapter A, Lesson 1 |
| 3.2 | Custom slash commands & skills | Chapter A, Lesson 3 |
| 3.3 | Path-specific rules (glob patterns) | Chapter A, Lesson 2 |
| 3.4 | Plan mode vs direct execution | Chapter A, Lesson 4 |
| 3.5 | Iterative refinement techniques | Chapter A, Lesson 5 |
| 3.6 | CI/CD pipeline integration | Chapter A, Lesson 6 |
| 4.1 | Prompt precision & false positive reduction | Chapter A, Lesson 7 \+ Chapter D, Lesson 3 |
| 4.2 | Few-shot prompting | Chapter D, Lesson 3 \+ Chapter C, Lesson 1 |
| 4.3 | Structured output via tool\_use | Chapter B, Lessons 4–5 |
| 4.4 | Validation-retry loops | Chapter B, Lesson 6 |
| 4.5 | Batch processing strategies | Chapter B, Lesson 7 |
| 4.6 | Multi-pass review architecture | Chapter A, Lesson 7 |
| 5.1 | Context preservation in long interactions | Chapter D, Lesson 4 |
| 5.2 | Escalation & ambiguity resolution | Chapter D, Lesson 3 |
| 5.3 | Error propagation across multi-agent systems | Chapter D, Lessons 1–2 |
| 5.4 | Context management in large codebases | Chapter D, Lesson 4 \+ Chapter A, Lesson 8 |
| 5.5 | Human review & confidence calibration | Chapter D, Lesson 6 |
| 5.6 | Information provenance & uncertainty | Chapter D, Lesson 5 |

## **Exam Scenario Coverage**

| Scenario | Primary Chapter Coverage |
| :---- | :---- |
| 1\. Customer Support Resolution Agent | Chapter C (hooks, enforcement) \+ Chapter D Lessons 3–4 (escalation, context) |
| 2\. Code Generation with Claude Code | Chapter A (CLAUDE.md, rules, plan mode, skills) \+ Existing Ch 3, 5 |
| 3\. Multi-Agent Research System | Chapter D (error propagation, provenance, orchestration) \+ Chapter B (API) |
| 4\. Developer Productivity with Claude | Chapter A (skills, rules) \+ Chapter B (tool design) \+ Existing Ch 3 |
| 5\. Claude Code for CI | Chapter A Lessons 6–7 (CI/CD, multi-pass review) |
| 6\. Structured Data Extraction | Chapter B Lessons 5–7 (schemas, validation-retry, batch) |

***With these four chapters, The AI Agent Factory achieves 100% certification exam coverage.***