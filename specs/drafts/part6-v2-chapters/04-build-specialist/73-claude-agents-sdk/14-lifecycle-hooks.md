---
sidebar_position: 14
title: "Lifecycle Hooks"
description: "Intercept agent actions at the SDK level using lifecycle hooks. Build PreToolUse hooks that block unauthorized file access, PostToolUse hooks that log audit trails, and hooks that inject guidance via systemMessage for HireFlow agents."
chapter: 73
lesson: 14
duration_minutes: 40
keywords:
  - lifecycle hooks
  - PreToolUse
  - PostToolUse
  - Stop hook
  - SessionStart
  - SessionEnd
  - UserPromptSubmit
  - permissionDecision
  - systemMessage injection
  - runtime guardrails
  - audit logging
  - hireflow
skills:
  - name: "Hook Callback Implementation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can write a hook callback with the correct async signature (input_data, tool_use_id, context) that returns either an empty dict (allow) or a dict with hookSpecificOutput containing a permissionDecision"
  - name: "Hook Type Selection"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can select the correct hook type (PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd, UserPromptSubmit) for a given interception requirement"
  - name: "SystemMessage Injection"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can return a systemMessage in a hook response to inject guidance into the agent's context when denying or modifying a tool call"
learning_objectives:
  - objective: "Write a PreToolUse hook that blocks file writes outside a specified directory and returns a denial reason"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Code exercise: implement a hook that checks file_path against an allowed directory prefix and returns permissionDecision deny with a reason string"
  - objective: "Write a PostToolUse hook that logs every tool call with timestamp, tool name, and result summary"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Code exercise: implement a hook that extracts tool metadata from input_data and appends a structured log entry to an audit file"
  - objective: "Identify which hook type fires at each point in the agent lifecycle"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Matching exercise: given six agent events, match each to the correct hook type from the six available options"
  - objective: "Use systemMessage injection to provide guidance to an agent when denying a tool call"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Code modification: add a systemMessage to an existing denial hook that explains why the action was blocked and suggests an alternative"
cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: the hook callback pattern (interception at the SDK level), and the six hook lifecycle points. Students know guardrails from Lesson 08 and permission modes from Lesson 12. This lesson shows that guardrails can be enforced at the SDK layer rather than in application code. The hook signature and return format are new but follow a consistent pattern across all six types."
differentiation:
  extension_for_advanced: "Design a hook that implements rate limiting: if the agent makes more than 10 tool calls in 60 seconds, the PreToolUse hook starts denying calls with a systemMessage explaining the throttle. How do you share state between hook invocations?"
  remedial_for_struggling: "Focus on PreToolUse with permissionDecision deny. If you can write one hook that checks a file path and returns deny with a reason, you understand the core pattern. PostToolUse and systemMessage are the same callback shape with different timing."
---

# Lifecycle Hooks

## James's Agent Goes Off-Script

James had a HireFlow scoring agent with tight tool restrictions from Lesson 12. The agent only had access to `parse_cv`, `score_candidate`, `Read`, and `Write`. Good tool scoping. But within those allowed tools, the agent found creative ways to cause problems.

The agent was supposed to write candidate scores to `candidates/scores.json`. Instead, it decided that `config/scoring-weights.json` needed "updating" based on its analysis of recent candidates. It wrote to a config file. The Write tool was in its allowed list. The permission mode was `acceptEdits`. Nothing stopped it.

```
[Agent] Analyzing scoring patterns across recent candidates...
[Agent] Updating scoring weights for better accuracy...
[Agent] Writing to config/scoring-weights.json
```

"The agent changed our scoring formula," James said. "Every candidate after this one got different scores. We did not notice for three days."

Emma read the logs. "Your tool restrictions say what the agent can use. They do not say where the agent can write. The agent had Write access. It used Write access. On the wrong file."

"So I need to restrict which files it can write to?"

"You need hooks. Tool restrictions control which tools exist. Hooks control what happens when those tools run."

## What Lifecycle Hooks Are

**Lifecycle hooks** are callback functions that the SDK calls at specific points during an agent's execution. Each hook receives data about what the agent is doing and can allow, deny, or modify the action.

In Lesson 08, you built guardrails as validation functions in your application code. Those guardrails ran before and after the agent, as part of your pipeline. Hooks are different. Hooks intercept actions at the SDK level, inside the agent loop itself. Your code does not call them directly. The SDK calls them whenever the relevant event occurs.

| Guardrails (Lesson 08)         | Hooks (This Lesson)                  |
| :----------------------------- | :----------------------------------- |
| Run in your pipeline code      | Run inside the SDK's agent loop      |
| You call them explicitly       | The SDK calls them automatically     |
| Operate before/after the agent | Operate during the agent's execution |
| Validate data                  | Intercept actions                    |

Both are guardrails in the broad sense. The distinction is where they execute: your code vs. the SDK runtime.

## The Six Hook Types

The SDK provides six hook points that cover the full agent lifecycle:

| Hook Type          | When It Fires                                         | What You Can Do                                              |
| :----------------- | :---------------------------------------------------- | :----------------------------------------------------------- |
| `SessionStart`     | When the agent session begins, before any processing  | Initialize logging, validate environment, set up audit trail |
| `UserPromptSubmit` | When a user prompt is submitted to the agent          | Validate or modify the prompt before the agent sees it       |
| `PreToolUse`       | Before the agent executes a tool call                 | Block the call, modify parameters, inject guidance           |
| `PostToolUse`      | After a tool call completes                           | Log results, validate output, trigger alerts                 |
| `Stop`             | When the agent decides to stop (produce final result) | Validate the final output, force continuation if incomplete  |
| `SessionEnd`       | When the session terminates                           | Clean up resources, finalize audit logs, send notifications  |

The most commonly used hooks are `PreToolUse` and `PostToolUse`. They give you control over individual tool calls without modifying the agent's configuration or instructions.

## Hook Callback Signature

Every hook callback follows the same function signature:

```python
async def my_hook(
    input_data: dict,
    tool_use_id: str,
    context: dict,
) -> dict:
    """Hook callback. Return empty dict to allow, or a dict with
    hookSpecificOutput to deny/modify."""
    return {}  # Empty dict = allow the action
```

| Parameter     | Contents                                                                                 |
| :------------ | :--------------------------------------------------------------------------------------- |
| `input_data`  | Information about the event: `hook_event_name`, `tool_input` (for tool hooks), tool name |
| `tool_use_id` | Unique identifier for this specific tool invocation                                      |
| `context`     | Session context: session ID, message history, current state                              |

The return value determines what happens next:

- **Empty dict `{}`**: Allow the action to proceed without modification
- **Dict with `hookSpecificOutput`**: Modify or deny the action

## Denying a Tool Call: PreToolUse

The most common hook pattern blocks specific tool calls based on their parameters. Here is a hook that prevents the agent from writing to any file outside the `candidates/` directory:

```python
async def restrict_write_directory(
    input_data: dict,
    tool_use_id: str,
    context: dict,
) -> dict:
    """Block writes outside the candidates/ directory."""
    tool_input: dict = input_data.get("tool_input", {})
    file_path: str = tool_input.get("file_path", "")

    if file_path and not file_path.startswith("candidates/"):
        return {
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "deny",
                "permissionDecisionReason": (
                    f"Write blocked: {file_path} is outside candidates/. "
                    f"This agent can only write to the candidates/ directory."
                ),
            }
        }

    return {}  # File is in candidates/ directory; allow the write
```

When this hook returns a denial, the SDK:

1. Stops the tool call from executing
2. Reports the denial reason back to the agent
3. Lets the agent decide what to do next (retry with a different path, or continue without the write)

The agent does not crash. It receives feedback that its action was blocked and can adjust its approach.

## Injecting Guidance: systemMessage

Sometimes blocking is not enough. You want to explain why the action was blocked and point the agent in the right direction. The `systemMessage` field injects a message into the agent's context alongside the denial:

```python
async def block_etc_writes(
    input_data: dict,
    tool_use_id: str,
    context: dict,
) -> dict:
    """Block writes to system directories and explain why."""
    tool_input: dict = input_data.get("tool_input", {})
    file_path: str = tool_input.get("file_path", "")

    if file_path.startswith("/etc"):
        return {
            "systemMessage": (
                "Remember: system directories like /etc are protected. "
                "Write your output to the candidates/ or reports/ directory instead."
            ),
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "deny",
                "permissionDecisionReason": "Writing to /etc is not allowed",
            },
        }

    return {}
```

The `systemMessage` appears in the agent's context as if it came from the system prompt. The agent reads both the denial reason and the system message. The denial reason is a short label. The system message provides richer context and alternative instructions.

| Return Field                 | Purpose                                   | When to Use                                                   |
| :--------------------------- | :---------------------------------------- | :------------------------------------------------------------ |
| `permissionDecision: "deny"` | Blocks the tool call                      | Always, when you want to prevent the action                   |
| `permissionDecisionReason`   | Short explanation visible in logs         | Always, paired with deny                                      |
| `systemMessage`              | Rich guidance injected into agent context | When you want the agent to change its approach, not just stop |

## Logging with PostToolUse

A `PostToolUse` hook fires after every tool call completes. This is the natural place for audit logging. The hook receives the same `input_data` structure plus the tool's output.

```python
import json
from datetime import datetime, timezone


async def audit_log_tool_calls(
    input_data: dict,
    tool_use_id: str,
    context: dict,
) -> dict:
    """Log every tool call to an audit file."""
    log_entry: dict = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "tool_use_id": tool_use_id,
        "hook_event": input_data.get("hook_event_name", "unknown"),
        "tool_input": input_data.get("tool_input", {}),
    }

    with open("audit/tool-calls.jsonl", "a") as f:
        f.write(json.dumps(log_entry) + "\n")

    return {}  # PostToolUse hooks typically allow (logging only)
```

This hook never denies anything. It observes and records. Every tool call in the session gets a timestamped entry in `audit/tool-calls.jsonl`. When James's agent rewrites a config file, the audit trail shows exactly when it happened and what parameters were passed.

## HireFlow Hooks: Three Patterns

Emma designed three hooks for the HireFlow scoring pipeline. Each addresses a different risk that tool restrictions alone cannot prevent.

### Pattern 1: Directory Boundary (PreToolUse)

The scoring agent should only access files inside `candidates/`. This hook blocks reads and writes to any other path.

```python
ALLOWED_DIRECTORIES: list[str] = ["candidates/", "reports/"]


async def enforce_directory_boundary(
    input_data: dict,
    tool_use_id: str,
    context: dict,
) -> dict:
    """Restrict file operations to allowed directories."""
    tool_input: dict = input_data.get("tool_input", {})
    file_path: str = tool_input.get("file_path", "")

    if not file_path:
        return {}  # No file path in this tool call; not a file operation

    path_allowed: bool = any(
        file_path.startswith(d) for d in ALLOWED_DIRECTORIES
    )

    if not path_allowed:
        return {
            "systemMessage": (
                f"You attempted to access {file_path}. "
                f"You may only access files in: {', '.join(ALLOWED_DIRECTORIES)}. "
                f"If you need data from another location, ask the user."
            ),
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "deny",
                "permissionDecisionReason": (
                    f"Access denied: {file_path} is outside allowed directories"
                ),
            },
        }

    return {}
```

### Pattern 2: Audit Trail (PostToolUse)

Every tool call gets logged with a timestamp and result summary. This log becomes the forensic record when something goes wrong three days later.

```python
import json
from datetime import datetime, timezone


async def log_tool_execution(
    input_data: dict,
    tool_use_id: str,
    context: dict,
) -> dict:
    """Append a structured log entry after each tool execution."""
    log_entry: dict = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "tool_use_id": tool_use_id,
        "event": input_data.get("hook_event_name", "unknown"),
        "tool_input_summary": {
            k: str(v)[:200]  # Truncate long values for readability
            for k, v in input_data.get("tool_input", {}).items()
        },
    }

    with open("audit/hireflow-agent.jsonl", "a") as f:
        f.write(json.dumps(log_entry) + "\n")

    return {}
```

### Pattern 3: Rejection Guard (PreToolUse with systemMessage)

No agent should reject a candidate without human review. If the scoring agent attempts to call `reject_candidate`, the hook blocks it and explains the policy.

```python
async def require_human_review_for_rejection(
    input_data: dict,
    tool_use_id: str,
    context: dict,
) -> dict:
    """Block automatic candidate rejection. Require human review."""
    tool_input: dict = input_data.get("tool_input", {})
    tool_name: str = input_data.get("tool_name", "")

    if tool_name == "mcp__hiring__reject_candidate":
        candidate_name: str = tool_input.get("candidate_name", "unknown")
        return {
            "systemMessage": (
                f"Rejecting {candidate_name} requires human approval. "
                f"Instead of rejecting directly, write your rejection "
                f"recommendation to reports/pending-rejections.json with "
                f"your reasoning. A human reviewer will make the final call."
            ),
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "deny",
                "permissionDecisionReason": (
                    "Candidate rejection requires human review"
                ),
            },
        }

    return {}
```

This hook does not just block the rejection. The `systemMessage` redirects the agent to write a recommendation instead. The agent adapts: it writes to `pending-rejections.json` with its reasoning, and a human reviewer makes the decision.

"The agent does not know about the hook before it fires," Emma said. "It discovers the constraint when it tries the action. The system message teaches it the alternative in real time."

James looked at the three hooks. "So the directory boundary prevents wandering. The audit trail catches everything. And the rejection guard enforces human oversight."

"Each hook is a single function with one responsibility. You can combine them, remove them, or swap them without changing the agent's instructions or tool configuration."

## Predict: What Does the Agent See?

:::exercise Predict Before You Run
The scoring agent calls `reject_candidate` for a candidate who scored 3.2. The `require_human_review_for_rejection` hook fires and returns a denial with a `systemMessage`.

From the agent's perspective, what happens? Does the agent:

(a) Crash with an error?
(b) Receive the denial reason and stop?
(c) Receive the denial reason AND the system message, then decide what to do next?
(d) Retry the same tool call automatically?

Record your prediction.
:::

**Answer**: (c). The agent receives both the denial reason ("Candidate rejection requires human review") and the system message (explaining the alternative). The agent then uses its normal reasoning to decide the next step. In most cases, it follows the guidance in the system message and writes to `pending-rejections.json` instead. The agent does not crash, does not stop, and does not retry blindly. It adapts based on the feedback.

## Predict: Hook Ordering

:::exercise Predict Before You Run
The agent calls the Write tool to save a file at `candidates/scores.json`. Two hooks are registered:

1. `enforce_directory_boundary` (PreToolUse): Checks if the path starts with `candidates/`
2. `log_tool_execution` (PostToolUse): Logs every tool call

Which hooks fire? In what order?

Record your prediction.
:::

**Answer**: First, `enforce_directory_boundary` fires (PreToolUse). The path `candidates/scores.json` starts with `candidates/`, so the hook returns an empty dict (allow). The Write tool executes. After execution completes, `log_tool_execution` fires (PostToolUse) and logs the call. Both hooks fire, in order: PreToolUse then PostToolUse.

If the path had been `config/weights.json`, only `enforce_directory_boundary` would fire. It would return a denial. The Write tool would not execute. `log_tool_execution` would not fire because PostToolUse only runs after successful tool execution.

## Connection to Guardrails

Lesson 08 taught you to build guardrails as validation functions in your pipeline code. You wrote `validate_cv_text` to check inputs before the agent, and `validate_parsed_data` to check outputs after the agent. Those guardrails run in your code, at the pipeline level.

Hooks run inside the SDK, at the tool-call level. The difference matters:

| Dimension   | Pipeline Guardrails (Lesson 08)           | SDK Hooks (This Lesson)                       |
| :---------- | :---------------------------------------- | :-------------------------------------------- |
| Scope       | Before/after the entire agent run         | Before/after each individual tool call        |
| Granularity | Coarse: validate the input or output once | Fine: inspect every tool call the agent makes |
| Access      | Your data structures                      | SDK's internal data (tool_input, tool_use_id) |
| Control     | Accept/reject the whole run               | Allow/deny/modify individual actions          |

For HireFlow, you use both. Pipeline guardrails validate that the CV is well-formed before the agent starts. SDK hooks ensure the agent stays within its boundaries during execution. Pipeline guardrails are the perimeter fence. Hooks are the security cameras inside the building.

## Try With AI

:::tip Practice with Your AI Assistant
Use these prompts in Claude Code or your preferred AI assistant:

1. "Write a PreToolUse hook that blocks any Bash command containing `rm` or `del`. Return a denial with a systemMessage explaining that file deletion is not permitted."

2. "Write a PostToolUse hook that calculates the elapsed time for each tool call and logs a warning if any call takes more than 30 seconds."

3. "I have an agent with three tools: parse_cv, score_candidate, and send_email. Design a set of hooks that: (a) blocks send_email for candidates with scores below 5.0, (b) logs every tool call, and (c) injects a reminder about data privacy before any parse_cv call."

4. "Explain the difference between using `permissionDecision: deny` alone vs. combining it with a `systemMessage`. When would you use each approach?"
   :::

## Key Takeaways

- **Lifecycle hooks** intercept agent actions at the SDK level using six hook types: SessionStart, UserPromptSubmit, PreToolUse, PostToolUse, Stop, and SessionEnd
- Every hook uses the same callback signature: `async def hook(input_data, tool_use_id, context) -> dict`
- Return an empty dict `{}` to allow an action; return a dict with `hookSpecificOutput` containing `permissionDecision: "deny"` to block it
- Use `systemMessage` to inject guidance into the agent's context when denying an action, so the agent can adapt rather than just fail
- PreToolUse hooks are runtime guardrails that operate inside the SDK, complementing the pipeline-level guardrails from Lesson 08
- PostToolUse hooks enable audit logging, giving you a forensic record of every tool call
- Hooks have one responsibility each: directory boundaries, audit trails, and policy enforcement should be separate hooks, not combined into one
