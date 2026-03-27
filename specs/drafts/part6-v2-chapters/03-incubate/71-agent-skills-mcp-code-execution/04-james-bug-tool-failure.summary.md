### Core Concept

An orchestration error occurs when the control flow between components is wrong, even though each component works correctly in isolation. The missing guard in James's `screen_candidate` function is a textbook example: the MCP server times out under load (expected behavior), Python raises `IndexError` on an empty list (expected behavior), and the skill fails because it never connected those two facts with a check.

### Key Mental Models

- **Tool call guard pattern**: Two checks after every `call_tool` call: `if result.isError or not result.content`. The first check catches server-reported errors. The second catches empty responses from timeouts and connection drops. Both are necessary because a tool can report `isError=False` with an empty content list.
- **Pipeline failure cascade**: A single missing guard in a batch processor allows one candidate's slow CV to crash the entire pipeline. Every subsequent candidate never gets scored. The failure is not in the tool; it is in the skill that assumed success without checking.
- **Orchestration error vs. data error**: Data errors (Chapter 70 Lesson 4) live inside the tool. Orchestration errors live in the glue between components. When individual tool tests pass but the pipeline crashes, look for orchestration errors, not tool bugs.

### Critical Patterns

- James's comment `# The agent should handle this... right?` is a documented silent assumption. The agent does not handle it. Nothing does.
- Emma's fix adds two guard blocks, one after `parse_cv` and one after `score_candidate`. Each returns a structured dict with `error`, `cv`, and `score` keys rather than crashing.
- A tool call guard is not optional on difficult paths; it is required on every tool call. "The server worked fine in testing" is not a substitute.

### Common Mistakes

- Assuming the MCP server or the AI model will catch failed tool calls internally (they do not; that is the skill's responsibility).
- Treating the `isError` check alone as sufficient. A server under load can return `isError=False` with an empty `content` list due to a partial timeout.
- Debugging orchestration failures by investigating the tool rather than the calling skill.

### Connections

- **Builds on**: Lesson 3 skill-tool contract and connection failure modes; Chapter 70 Lesson 4 data error classification
- **Leads to**: Lesson 5 (batch processing with per-candidate failure isolation and semantic contract violations)
