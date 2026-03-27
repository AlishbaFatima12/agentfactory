### Core Concept

A trace table records program state at each execution step, converting "I think I understand" into "I can prove what happens." For MCP client code, tracing reveals what each variable holds at each step and where failures propagate. The skill-tool contract formalizes the expectations that a skill has about its tools; every implicit assumption in that contract is a place where integration can fail without explanation.

### Key Mental Models

- **Trace table**: Step-by-step record of variable states through an async function. For MCP code, it tracks connection setup, tool calls, data extraction, and return values as discrete, provable steps.
- **Skill-tool contract**: The set of expectations a skill holds about the tools it calls. Specifies three things: input expectations (what the tool accepts), output format (what structure the result takes), and failure modes (how the tool signals errors).
- **Three contract violation categories**: (1) Registration failure (tool does not exist on the server), (2) Format change (tool output structure changed), (3) Partial data (valid but incomplete results such as a null email field).

### Critical Patterns

- Step 2 of the trace (opening `stdio_client`) is where connection failures surface. If the server process cannot start, the function fails here with an `OSError` and never reaches session creation or tool calls.
- `cv_data` at step 6 is a JSON string. The trace table makes this explicit; without it, a reader might assume `parse_cv` returns a Python dict.
- Silent assumptions are the most common source of runtime integration failures. James's code assumes the server is running, that `parse_cv` returns valid JSON, and that `score_candidate` is registered. None of these are checked.

### Common Mistakes

- Assuming "connection failed" means the tool returned an error. Connection failures prevent the session from being created and surface before any tool call is made.
- Conflating contract format violations with bugs. When `parse_cv` changes its output shape, the downstream tool receives wrong data silently; no exception is raised.
- Treating partial data (missing experience section, null email) as a tool bug rather than a contract boundary that the skill must handle.

### Connections

- **Builds on**: Lesson 2 `screen_candidate` code and the data bridge concept
- **Leads to**: Lesson 4 (identifying the specific orchestration bug when a tool call fails and result access crashes the function)
