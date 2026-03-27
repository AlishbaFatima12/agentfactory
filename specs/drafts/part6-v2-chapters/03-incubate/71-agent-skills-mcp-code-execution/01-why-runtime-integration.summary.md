### Core Concept

Validated skills and working MCP servers produce no value when disconnected. Runtime integration is the code that connects a skill's decision-making to its tool calls during execution. Without it, intelligence and execution remain two separate halves of a system that never cooperates.

### Key Mental Models

- **Brain and hands**: A skill without tool access is a brain in a jar. A server with no skill calling it is hands that cannot feel. The integration is the wiring between them.
- **Five-step tool call sequence**: Every skill follows the same loop: (1) read context, (2) decide action, (3) call tool, (4) process result, (5) decide next action. This loop repeats until the skill has enough information to return a final output.
- **Checkpoint inventory**: Before writing integration code, map every skill to the tools it needs. The inventory makes wiring explicit and surfaces gaps before they become bugs.

### Critical Patterns

- The tool call sequence is a loop, not a single call. A skill may call `parse_cv` in step 3, process the result in step 4, then re-enter step 2 to decide whether to call `score_candidate` next.
- Step 4 (process result) is not overhead. Partial tool responses pass the timeout check but contain incomplete data. A skill that skips verification in step 4 will silently pass empty skills lists or null fields to the next tool.
- Chapter 71 closes the Incubate phase. Phase 1 (Explore) answered "what should agents do?". Phase 2 (Incubate) answers "can the pieces work?". Runtime integration is the final Incubate test.

### Common Mistakes

- Assuming that running both skill code and server code in separate terminals means they are connected (they are not; connection requires explicit client code).
- Treating step 4 as optional because tools "passed their tests" earlier in isolation.
- Starting integration without a checkpoint inventory, which hides which skill-to-tool wires still need building.

### Connections

- **Builds on**: Chapter 67 (four HireFlow skills), Chapters 69-70 (MCP servers with `parse_cv`, `extract_skills`, `extract_experience`, `list_templates`, `get_template`, `validate_job_spec`)
- **Leads to**: Lesson 2 (reading and predicting a concrete skill that calls an MCP tool for the first time)
