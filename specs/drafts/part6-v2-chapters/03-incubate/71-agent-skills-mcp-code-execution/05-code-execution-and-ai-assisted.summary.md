### Core Concept

Batch processing skills use `continue` instead of `return` to isolate failures per candidate. When one candidate's tool call fails, the loop records the failure and moves on; the rest of the batch proceeds. But tool call guards only protect against crashes. A separate category of failure passes every guard: semantic contract violations, where data flows correctly but carries the wrong meaning.

### Key Mental Models

- **Axiom I: Shell as Orchestrator**: The skill contains no domain logic. It decides which tools to call, in what order, and how to handle failures. CV parsing and candidate scoring happen inside MCP tools. If parsing logic appears inside the skill function, it violates Axiom I.
- **Write-execute-analyze cycle**: Each tool call follows three steps: construct parameters (write), invoke the tool (execute), check the result and decide next action (analyze). The analyze step of one cycle feeds the write step of the next.
- **Semantic contract violation**: When two tools agree on data type but disagree on meaning or format. Scores on a 1-10 scale passed to a ranker expecting 0-100. Skills named in lowercase compared against requirements in title case. No exception is raised. No guard fires. The results are silently wrong.

### Critical Patterns

- Bob's empty CV causes `parse_cv` to fail. The `continue` statement skips to the next candidate. `score_candidate` never runs for Bob, and the batch results list records `status: "parse_failed"` for him.
- A skill that counts computation lines versus coordination lines reveals the ratio. The `screen_batch` function does almost no computation. Every meaningful operation happens inside an MCP tool.
- Semantic violations require a different defense than tool call guards. Explicit format specifications in the skill-tool contract, validated with test cases that check output values (not just output existence), are the correct defense.

### Common Mistakes

- Writing CV parsing or scoring logic inside the skill function (violates Axiom I; belongs in the MCP server).
- Assuming that guards protect against all failures. Guards check for crashes; semantic violations produce correct-looking results with wrong meaning.
- Using the same guard pattern for semantic validation (the guard pattern only checks `isError` and empty content, not whether the content matches expected format).

### Connections

- **Builds on**: Lesson 4 tool call guard pattern; skill-tool contract from Lesson 3
- **Leads to**: Lesson 6 Parsons problem reconstructing the MCP client pattern from scrambled lines
