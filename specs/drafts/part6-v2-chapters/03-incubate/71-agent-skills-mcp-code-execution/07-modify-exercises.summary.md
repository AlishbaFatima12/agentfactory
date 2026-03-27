### Core Concept

Three graduated modifications extend the `screen_candidate` function from Lesson 4. Each targets a distinct production concern: output format normalization (Modification A), transient failure recovery (Modification B), and multi-tool orchestration for a second skill (Modification C). The same guard pattern repeats across every tool call in every modification.

### What Each Modification Teaches

- **Modification A (score normalization)**: The MCP tool returns raw float strings (`"0.73"`). The dashboard expects integers on a 0-100 scale. One to three changed lines convert the output. The deeper lesson: the `isError` guard checks the protocol layer; it does not validate the meaning or format of a successful response. Content validation is a separate step.
- **Modification B (retry with backoff)**: A reusable helper wraps `session.call_tool` with configurable retries and a fixed delay. If the tool succeeds on the first call, no delay occurs. If it fails both attempts, the last result is returned for error reporting. The helper is extracted so any tool call can use it without duplicating logic.
- **Modification C (Interview Question Generator)**: Wiring a second skill to two tools (`get_template` and `parse_cv`) reveals that the guard pattern applies equally regardless of which tool is called. James writes the function without guards; Emma corrects it. The partial result pattern appears: if `get_template` succeeds but `parse_cv` fails, the template data is included in the return value so the caller can still prepare generic questions.

### Critical Patterns

- Exponential backoff (increasing delays between retries) is the production standard for preventing retries from overwhelming a struggling server. The fixed 1-second delay in Modification B is a simplification; Chapter 72 Agent SDKs handle retry policies at the framework level.
- Graceful degradation appears in Modification C: return everything collected before the failure rather than discarding it.

### Common Mistakes

- Repeating domain logic inside the skill function (Axiom I violation: all logic belongs in the MCP tool).
- Adding guards to `parse_cv` but forgetting them on `get_template` in Modification C (James's mistake).
- Using `return` instead of `continue` in batch contexts; this stops the pipeline instead of isolating the failure.

### Connections

- **Builds on**: Lesson 4 guard pattern; Lesson 5 Axiom I and batch isolation
- **Leads to**: Lesson 8 Make capstone building the Candidate Summarizer with four tool calls and graceful degradation
