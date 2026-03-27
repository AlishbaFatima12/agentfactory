### Core Concept

An MCP client integration follows a three-component setup pattern before any tool call can be made: `StdioServerParameters` locates the server, `stdio_client` opens the transport, and `ClientSession` manages the conversation. Reading code that connects these components and predicting its output is the first skill required for writing such code independently.

### Key Mental Models

- **Where, connect, talk**: Every MCP client starts with the same three steps. `StdioServerParameters` is the phone number. `stdio_client` is dialing. `ClientSession` is the conversation itself.
- **Data bridge**: The output of one tool call becomes the input of the next. In `screen_candidate`, `cv_data` extracted from `parse_cv`'s result is passed directly as an argument to `score_candidate`. Without this bridge, the second tool has nothing to evaluate.
- **Sequential, not parallel**: Two `await` calls chained in order execute one after the other. The first call must complete before the second begins; `cv_data` from call 1 is only available after call 1 resolves.

### Critical Patterns

- `parsed.content[0].text` returns a JSON string, not a Python dict. `json.loads` is needed to convert it, but the raw string is what gets passed to the second tool call.
- The `async with` blocks nest in a fixed dependency order: `stdio_client` must open before `ClientSession` can be created from the streams it provides.
- `session.initialize()` is not a formality. It exchanges capability information with the server. A server that does not support a tool would signal that here, before any `call_tool` is attempted.

### Common Mistakes

- Assuming the two tool calls run in parallel because both use `await` (they are sequential; each waits for the previous result).
- Misreading the type of `cv_data` as a Python dict when it is a JSON string.
- Overlooking the dependency between the two calls; predicting `score_candidate` outputs correctly requires knowing what `parse_cv` returns.

### Connections

- **Builds on**: Chapter 70 `parse_cv` tool behavior, Chapter 69 FastMCP `@mcp.tool()` decorator pattern
- **Leads to**: Lesson 3 (trace table analysis of the same function, including edge cases and failure modes)
