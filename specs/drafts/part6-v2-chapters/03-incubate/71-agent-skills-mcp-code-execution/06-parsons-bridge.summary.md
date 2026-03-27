### Core Concept

The Parsons Bridge exercise tests whether a student can reconstruct an MCP client function from scrambled code lines. No new concepts are introduced. The exercise reveals structural understanding: whether the student knows the nesting order of async context managers, why initialization precedes tool calls, and why the guard check must come before content access.

### What the Exercise Builds

The Parsons problem contains 8 correct lines and 1 distractor (`tools = await session.list_tools()`). The distractor is valid MCP code but unnecessary when a skill already knows which tool to call. Listing tools is useful for discovery; calling a known tool does not require it, and every unnecessary network round trip adds latency across a batch.

### The Correct Ordering Rationale

The four dependency constraints that determine order:

1. Server parameters must exist before `stdio_client` can use them (D before G).
2. `stdio_client` must open before `ClientSession` can be created from its streams (G before B).
3. `session.initialize()` must complete before any `call_tool` is attempted (F before E).
4. The guard check must precede content access (I before A). Reversing this is James's Lesson 4 bug.

### Common Mistakes

- Placing `ClientSession` (B) before `stdio_client` (G): the session requires the read/write streams that `stdio_client` provides.
- Placing content access (A) before the guard check (I): accessing `parsed.content[0]` without checking first reproduces the same `IndexError` from Lesson 4.
- Including the distractor (H): the call adds an unnecessary round trip. A skill with a known tool contract does not need to discover tools at runtime.

### Connections

- **Builds on**: Lessons 2 through 5 (MCP client connection pattern and tool call guard pattern)
- **Leads to**: Lesson 7 (modifying the integration to add normalization, retry logic, and multi-tool orchestration)
