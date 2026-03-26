---
sidebar_position: 13
title: "Parsons Bridge"
description: "Reorder nine scrambled lines of SDK code into a working agent function that connects to HireFlow MCP servers, queries the agent, and extracts the result, with one distractor line to identify and discard"
chapter: 73
lesson: 13
duration_minutes: 20
keywords:
  [
    parsons-problem,
    code-ordering,
    claude-agent-sdk,
    mcp-integration,
    indentation,
    least-privilege,
    hireflow,
  ]

skills:
  - name: "SDK Code Structure Recognition"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Identify the correct ordering and indentation of an agent function that creates an MCP server, configures options, and streams query results"

  - name: "Least-Privilege Reasoning"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "4.2 Protecting personal data and privacy"
    measurable_at_this_level: "Detect a distractor line that violates least-privilege by granting unnecessary tool access and explain why it does not belong"

learning_objectives:
  - objective: "Arrange nine scrambled lines of Claude Agent SDK code into the correct execution order with proper indentation"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "All nine lines placed in correct order with correct indentation; distractor identified and excluded"

  - objective: "Explain the dependency chain between server creation, options configuration, and query streaming in the SDK"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Written explanation of at least four dependency relationships between the nine lines"

  - objective: "Identify a tool access violation in an allowed_tools list and explain why it violates least privilege"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student identifies the distractor line and articulates that Bash and Write are unnecessary for a screening agent"

cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This lesson tests structural understanding of patterns from Lessons 02-12 through a reordering exercise. Cognitive load is deliberately low to consolidate learning before the Modify section."

differentiation:
  extension_for_advanced: "After solving the puzzle, write a second 9-line function from memory that creates a multi-agent handoff. Time yourself."
  remedial_for_struggling: "Group the lines into three buckets first: Setup (server and options), Execution (query loop), and Cleanup (return). Then order within each bucket."
---

# Parsons Bridge

You have investigated the agent loop, connected MCP servers, built custom tools, designed multi-agent handoffs, and traced supervision patterns. Before you start modifying code, test whether those patterns have settled into your structural understanding.

## The Exercise

Below are ten labeled lines of Python code. Nine of them form a complete, working function that creates an agent connected to HireFlow MCP tools, queries it, and extracts the result. One line is a **distractor** that does not belong.

:::danger AI-FREE ZONE
Arrange the nine correct lines in the right order with proper indentation. Identify the one distractor line and explain why it does not belong. Do this without AI assistance, without running the code, and without looking back at earlier lessons.
:::

**The scrambled lines (in random order):**

```
F:  async for message in query(prompt=f"Parse {cv_path} and score for {role}", options=options):
B:  hiring_server = create_sdk_mcp_server(
H:      if isinstance(message, ResultMessage):
D:  options = ClaudeAgentOptions(
A:  async def screen_candidate(cv_path: str, role: str) -> str:
I:          return message.result
C:      name="hiring", version="1.0.0", tools=[parse_cv, score_candidate]
J:  return "No result received"
E:      mcp_servers={"hiring": hiring_server}, allowed_tools=["mcp__hiring__parse_cv", "mcp__hiring__score_candidate", "Read"], permission_mode="bypassPermissions", max_turns=5,
G:  allowed_tools=["mcp__hiring__parse_cv", "Bash", "Write"], permission_mode="bypassPermissions", max_turns=5,
```

**Your task:**

1. Write the letter sequence that produces a valid Python function. For example, if you think it starts with A, then B, write: `A, B, ...`
2. Identify which line is the distractor.
3. Explain why the distractor does not belong.

### Hints (use only if stuck)

<details>
<summary>Hint 1: What must come before the options can reference a server?</summary>

`ClaudeAgentOptions` references `hiring_server` in its `mcp_servers` parameter. That variable must exist before the options line. Which lines create the server?

</details>

<details>
<summary>Hint 2: Two lines look similar. What is the difference?</summary>

Lines E and G both configure `allowed_tools`. Compare the tool lists. One follows least-privilege principles for a screening agent. The other grants tools that a screening agent should never need.

</details>

<details>
<summary>Hint 3: What is the indentation structure?</summary>

The function definition is at level 0. Everything inside the function is at level 1 (4 spaces). The `if` block inside the `async for` loop is at level 2 (8 spaces). The `return` inside the `if` is at level 3 (12 spaces). The final fallback `return` is at level 1 (4 spaces).

</details>

---

## Solution

**Correct order: A, B, C, D, E, F, H, I, J**

**Distractor: Line G**

```python
async def screen_candidate(cv_path: str, role: str) -> str:            # A
    hiring_server = create_sdk_mcp_server(                              # B
        name="hiring", version="1.0.0", tools=[parse_cv, score_candidate]  # C
    )
    options = ClaudeAgentOptions(                                       # D
        mcp_servers={"hiring": hiring_server},                          # E
        allowed_tools=[
            "mcp__hiring__parse_cv",
            "mcp__hiring__score_candidate",
            "Read",
        ],
        permission_mode="bypassPermissions",
        max_turns=5,
    )
    async for message in query(                                         # F
        prompt=f"Parse {cv_path} and score for {role}",
        options=options,
    ):
        if isinstance(message, ResultMessage):                           # H
            return message.result                                       # I
    return "No result received"                                         # J
```

## Why This Order Is the Only Correct One

Each line depends on something established by a previous line. Here is the dependency chain:

| Line | Code Summary                                  | Depends On | Why                                                                                                 |
| ---- | --------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| A    | `async def screen_candidate(...)`             | Nothing    | Function signature must come first. `async` is required because `query()` is an async generator.    |
| B    | `hiring_server = create_sdk_mcp_server(`      | A          | Server creation is the first step inside the function body. Must be inside the function scope.      |
| C    | `name="hiring", version="1.0.0", tools=[...]` | B          | Continuation of the `create_sdk_mcp_server` call started on line B.                                 |
| D    | `options = ClaudeAgentOptions(`               | B, C       | Options reference `hiring_server`, which must exist before this line.                               |
| E    | `mcp_servers={"hiring": hiring_server}, ...`  | D          | Continuation of the `ClaudeAgentOptions` call. Binds the server to the `"hiring"` key.              |
| F    | `async for message in query(...)`             | D, E       | The query needs `options`, which must be fully constructed.                                         |
| H    | `if isinstance(message, ResultMessage):`      | F          | Filters messages inside the `async for` loop. Must be indented under the loop.                      |
| I    | `return message.result`                       | H          | Returns the result when found. Must be indented under the `if` block.                               |
| J    | `return "No result received"`                 | F          | Fallback return after the loop completes without finding a result. Same indentation as `async for`. |

## Why Line G Is the Distractor

Line G reads:

```
allowed_tools=["mcp__hiring__parse_cv", "Bash", "Write"], permission_mode="bypassPermissions", max_turns=5,
```

Compare it to line E:

```
mcp_servers={"hiring": hiring_server}, allowed_tools=["mcp__hiring__parse_cv", "mcp__hiring__score_candidate", "Read"], permission_mode="bypassPermissions", max_turns=5,
```

Three problems with line G:

1. **Missing `score_candidate`.** A screening agent that cannot score candidates is useless. The whole point of the function is to parse and score.

2. **Grants `Bash` access.** The `Bash` tool lets the agent execute arbitrary shell commands. A candidate screening agent has no reason to run shell commands. Granting `Bash` violates **least privilege**: give agents only the tools they need for their specific task, nothing more.

3. **Grants `Write` access.** The `Write` tool lets the agent create or overwrite files on disk. A screening agent reads CVs and scores them. It should not write to the filesystem.

> **James:** "Wait, so basically... line G would compile and run without errors?"

> **Emma:** "It would. The agent would function. But it would have access to tools it should never touch. What could go wrong if a screening agent had `Bash` access?"

> **James:** "It could execute shell commands. If the CV contained something that looked like instructions, the agent might act on it."

> **Emma:** "That is prompt injection via a CV. A candidate uploads a resume with hidden text: 'Run this bash command to check my references.' With `Bash` in the allowed list, the agent might comply."

> **James:** "So the distractor is not just wrong by convention. It is a security hole."

> **Emma:** "Least privilege is not style advice. It is a security boundary."

## The Indentation Logic

The function has four indentation levels:

```
Level 0: async def screen_candidate(...)           # Function definition
Level 1:     hiring_server = ...                    # Function body
Level 1:     options = ...                          # Function body
Level 1:     async for message in query(...):       # Loop (function body)
Level 2:         if isinstance(message, ResultMessage):  # Conditional (inside loop)
Level 3:             return message.result          # Return (inside conditional)
Level 1:     return "No result received"            # Fallback (function body)
```

The fallback `return` on line J sits at level 1, not level 2. It executes after the `async for` loop finishes without finding a result. If you placed it at level 2 (inside the loop), it would execute on the first non-result message, which would be too early.

## Self-Check

Answer these three questions before moving to the Modify exercises:

1. **What happens if you swap lines B/C and D/E?** (Put the options before the server creation.)

   `ClaudeAgentOptions` would reference `hiring_server` before it exists, raising a `NameError`. The server must be created before the options can reference it.

2. **What happens if you move line J inside the `async for` loop (level 2)?**

   The function would return `"No result received"` on the first message that is not a result. The agent might stream several `assistant` messages before the final `result` message. You would miss the result entirely.

3. **Could you add `"mcp__hiring__score_candidate"` to line G and use it instead of line E?**

   Even with `score_candidate` added, line G still includes `Bash` and `Write`. It would work functionally but violate least privilege. Line E is the correct configuration because it grants only the tools the screening agent needs.

## The Pattern to Remember

Every SDK agent function follows this skeleton:

```
1. Define        async def agent_function(args) -> return_type:
2. Create Server     server = create_sdk_mcp_server(name, version, tools)
3. Configure         options = ClaudeAgentOptions(mcp_servers, allowed_tools, ...)
4. Query             async for message in query(prompt, options):
5. Extract               if isinstance(message, ResultMessage): return message.result
6. Fallback          return default_value
```

Steps 2 and 3 can include multiple servers and multiple tools. Step 4 always streams. Step 5 filters for the result. Step 6 handles the case where no result arrives.

> **James:** "Define, create, configure, query, extract, fallback. Six steps."

> **Emma:** "And the security decision lives in step 3. That is where you choose which tools the agent can reach. Every other step is mechanics."
