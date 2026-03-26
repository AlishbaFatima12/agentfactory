---
sidebar_position: 13
title: "File Checkpointing and Recovery"
description: "Enable file checkpointing in the Claude Agent SDK to capture snapshots of agent work, then rewind to a previous checkpoint when an agent makes a destructive mistake during HireFlow candidate processing."
chapter: 73
lesson: 13
duration_minutes: 35
keywords:
  - file checkpointing
  - agent recovery
  - rewind
  - checkpoint UUID
  - session resumption
  - UserMessage
  - ResultMessage
  - error recovery
  - hireflow
skills:
  - name: "Checkpoint Configuration"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can configure enable_file_checkpointing, permission_mode, and extra_args to produce checkpoint UUIDs during an agent session"
  - name: "Checkpoint Rewind Implementation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can capture a checkpoint UUID from UserMessage, store the session_id from ResultMessage, and call rewind_files to restore file state"
  - name: "Recovery Strategy Design"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can explain why checkpointing is necessary for file-modifying agents and describe the relationship between supervision patterns and checkpointing as complementary safety layers"
learning_objectives:
  - objective: "Enable file checkpointing in a ClaudeAgentOptions configuration and verify that checkpoint UUIDs appear in the message stream"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Configuration exercise: write a ClaudeAgentOptions with checkpointing enabled and print every UserMessage UUID to confirm the pipeline produces snapshots"
  - objective: "Capture checkpoint UUIDs and session IDs from the agent message stream for later recovery"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Code completion: fill in the message-handling loop that stores the first UserMessage UUID and the ResultMessage session_id"
  - objective: "Rewind an agent session to a specific checkpoint to recover from a destructive file operation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Scenario exercise: given a session_id and checkpoint_id, write the resumption code that reconnects and calls rewind_files"
  - objective: "Explain why extra_args with replay-user-messages is required for checkpoint UUIDs to appear"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Short answer: describe what happens when you enable checkpointing but omit the extra_args parameter, and why the UUIDs are absent"
cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: file checkpointing as an SDK feature, and session resumption via resume parameter. Students already know ClaudeAgentOptions from Lesson 02 and permission modes from Lesson 12. The message stream (UserMessage, ResultMessage) was introduced in Lesson 04. This lesson adds the UUID and session_id fields to those familiar message types."
differentiation:
  extension_for_advanced: "Design a multi-checkpoint strategy where your agent captures a checkpoint before each tool call. If any tool call produces invalid output, rewind to the checkpoint before that specific call rather than rewinding to the session start. How does the number of checkpoints affect storage and resumption time?"
  remedial_for_struggling: "Focus on the three-step pattern: enable checkpointing, capture the UUID, call rewind_files. If you can explain those three steps in order, you understand the core mechanism. The session resumption details follow naturally."
---

# File Checkpointing and Recovery

## James Loses a Report

James built a candidate processing agent for HireFlow. The agent reads a CV, scores the candidate, and writes a summary report to `reports/candidate-summary.md`. Straightforward pipeline. He ran it against five candidates on a Tuesday afternoon.

The first four candidates processed without issues. On the fifth candidate, the agent encountered a malformed CV (missing the work experience section). Instead of reporting the error cleanly, the agent overwrote the summary report with a partial result. Four complete candidate summaries, gone. Replaced by a half-finished analysis of candidate five.

```python
from claude_agent_sdk import ClaudeSDKClient, ClaudeAgentOptions

# James's original configuration: no checkpointing
options = ClaudeAgentOptions(
    permission_mode="acceptEdits",
    allowed_tools=[
        "mcp__hiring__parse_cv",
        "mcp__hiring__score_candidate",
        "Read",
        "Write",
    ],
    max_turns=10,
)

async with ClaudeSDKClient(options) as client:
    await client.query(
        "Process the CV at candidates/chen-wei.pdf. "
        "Append the results to reports/candidate-summary.md."
    )
    async for message in client.receive_response():
        pass  # No checkpointing. No recovery path.
```

James stared at the output directory. The report file existed, but it contained only the failed fifth analysis. The previous four summaries were not backed up anywhere.

"I have to rerun the entire batch," James said. "Four API calls, four scoring rounds, all repeated because I cannot undo one file write."

Emma looked at the code. "The agent has Write access. It can overwrite any file in its working directory. Your supervision patterns from Lesson 09 catch bad decisions before they happen. But what about bad executions that slip through? You need a way to undo."

## What File Checkpointing Does

**File checkpointing** captures snapshots of your project's file state at specific points during an agent session. When the agent makes a destructive change (overwriting a report, deleting data, corrupting a config file), you can rewind to a checkpoint before the damage occurred.

The mechanism works in three stages:

1. **Enable**: Set `enable_file_checkpointing=True` in your `ClaudeAgentOptions`
2. **Capture**: Read `UserMessage.uuid` values from the message stream as checkpoints
3. **Rewind**: Resume the session and call `client.rewind_files(checkpoint_id)` to restore file state

Checkpointing does not prevent mistakes. It provides a recovery path after mistakes happen. Supervision (Lesson 09) prevents bad decisions. Checkpointing undoes bad executions. They are complementary safety layers.

## Enabling Checkpointing

The configuration requires three settings:

```python
from claude_agent_sdk import ClaudeSDKClient, ClaudeAgentOptions

options = ClaudeAgentOptions(
    enable_file_checkpointing=True,
    permission_mode="acceptEdits",
    extra_args={"replay-user-messages": None},  # Required for checkpoint UUIDs
)
```

| Setting                                     | Purpose                                                               |
| :------------------------------------------ | :-------------------------------------------------------------------- |
| `enable_file_checkpointing=True`            | Tells the SDK to snapshot file state at each turn                     |
| `permission_mode="acceptEdits"`             | Allows the agent to write files (so there is something to checkpoint) |
| `extra_args={"replay-user-messages": None}` | Required for the SDK to include UUIDs in `UserMessage` objects        |

:::warning The extra_args Trap
If you set `enable_file_checkpointing=True` but omit `extra_args={"replay-user-messages": None}`, checkpointing is technically active but you will never see checkpoint UUIDs in the message stream. The `UserMessage.uuid` field will be `None` for every message. You cannot rewind without a UUID. Both settings are required.
:::

## Capturing Checkpoint UUIDs

During an agent session, the SDK streams messages back to your code. Two message types carry the data you need for recovery:

- **`UserMessage`**: Contains a `.uuid` field. This UUID identifies a checkpoint in the file history.
- **`ResultMessage`**: Contains a `.session_id` field. This ID lets you reconnect to the session later.

```python
from claude_agent_sdk import (
    ClaudeSDKClient,
    ClaudeAgentOptions,
    UserMessage,
    ResultMessage,
)

options = ClaudeAgentOptions(
    enable_file_checkpointing=True,
    permission_mode="acceptEdits",
    extra_args={"replay-user-messages": None},
)

checkpoint_id: str | None = None
session_id: str | None = None

async with ClaudeSDKClient(options) as client:
    await client.query(
        "Process the CV at candidates/chen-wei.pdf. "
        "Append the results to reports/candidate-summary.md."
    )
    async for message in client.receive_response():
        # Capture the first checkpoint UUID
        if isinstance(message, UserMessage) and message.uuid and not checkpoint_id:
            checkpoint_id = message.uuid
            print(f"Checkpoint captured: {checkpoint_id}")

        # Capture the session ID for later resumption
        if isinstance(message, ResultMessage) and not session_id:
            session_id = message.session_id
            print(f"Session ID: {session_id}")

print(f"Recovery data: checkpoint={checkpoint_id}, session={session_id}")
```

The first `UserMessage` with a non-`None` UUID becomes your earliest recovery point. Every subsequent `UserMessage` with a UUID represents a later checkpoint. Capturing the first one gives you the ability to rewind to the beginning of the agent's work.

:::tip Multiple Checkpoints
For a longer agent session, you might want to capture multiple checkpoints. Store them in a list:

```python
checkpoints: list[str] = []

async for message in client.receive_response():
    if isinstance(message, UserMessage) and message.uuid:
        checkpoints.append(message.uuid)
```

This gives you fine-grained recovery. You can rewind to any point in the agent's execution, not just the start.
:::

## Rewinding to a Checkpoint

When you detect a problem (corrupted file, wrong output, accidental overwrite), you rewind by resuming the session and calling `rewind_files`:

```python
if checkpoint_id and session_id:
    # Resume the session using the stored session_id
    resume_options = ClaudeAgentOptions(
        enable_file_checkpointing=True,
        resume=session_id,
    )

    async with ClaudeSDKClient(resume_options) as client:
        # Send an empty prompt to open the connection
        await client.query("")
        async for message in client.receive_response():
            # Rewind file state to the captured checkpoint
            await client.rewind_files(checkpoint_id)
            break  # Exit after rewind

    print(f"Files restored to checkpoint {checkpoint_id}")
```

After `rewind_files` completes, every file in the agent's working directory is restored to the state it was in when that checkpoint was created. Any writes, edits, or deletions that happened after that checkpoint are undone.

| Component                            | Role                                                             |
| :----------------------------------- | :--------------------------------------------------------------- |
| `resume=session_id`                  | Reconnects to the original session instead of starting a new one |
| `client.query("")`                   | Opens the connection (required before calling `rewind_files`)    |
| `client.rewind_files(checkpoint_id)` | Restores all files to the state captured at that UUID            |

## Emma's Version: HireFlow with Recovery

Emma rewrote James's candidate processing pipeline with checkpointing. Same agent, same task, same tools. The difference is a recovery path when things go wrong.

```python
from claude_agent_sdk import (
    ClaudeSDKClient,
    ClaudeAgentOptions,
    UserMessage,
    ResultMessage,
)


async def process_candidate_with_recovery(cv_path: str) -> dict[str, str | None]:
    """Process a candidate CV with file checkpointing enabled.

    Returns a dict with checkpoint_id and session_id for recovery.
    """
    options = ClaudeAgentOptions(
        enable_file_checkpointing=True,
        permission_mode="acceptEdits",
        extra_args={"replay-user-messages": None},
        allowed_tools=[
            "mcp__hiring__parse_cv",
            "mcp__hiring__score_candidate",
            "Read",
            "Write",
        ],
        max_turns=10,
    )

    checkpoint_id: str | None = None
    session_id: str | None = None

    async with ClaudeSDKClient(options) as client:
        await client.query(
            f"Process the CV at {cv_path}. "
            f"Append the results to reports/candidate-summary.md."
        )
        async for message in client.receive_response():
            if isinstance(message, UserMessage) and message.uuid and not checkpoint_id:
                checkpoint_id = message.uuid

            if isinstance(message, ResultMessage) and not session_id:
                session_id = message.session_id

    return {"checkpoint_id": checkpoint_id, "session_id": session_id}


async def rewind_to_checkpoint(
    checkpoint_id: str, session_id: str
) -> None:
    """Rewind file state to a previous checkpoint."""
    resume_options = ClaudeAgentOptions(
        enable_file_checkpointing=True,
        resume=session_id,
    )

    async with ClaudeSDKClient(resume_options) as client:
        await client.query("")
        async for message in client.receive_response():
            await client.rewind_files(checkpoint_id)
            break

    print(f"Files restored to checkpoint {checkpoint_id}")
```

Usage in the HireFlow batch pipeline:

```python
import os

candidates = [
    "candidates/sarah-chen.pdf",
    "candidates/marcus-johnson.pdf",
    "candidates/priya-patel.pdf",
    "candidates/chen-wei.pdf",
    "candidates/alex-rivera.pdf",
]

for cv_path in candidates:
    recovery = await process_candidate_with_recovery(cv_path)

    # Verify the report file still looks correct
    report_path = "reports/candidate-summary.md"
    if os.path.exists(report_path):
        with open(report_path) as f:
            content = f.read()

        # Simple integrity check: report should not be empty
        # and should contain results for all processed candidates so far
        if len(content) < 50:
            print(f"Report corrupted after processing {cv_path}")
            if recovery["checkpoint_id"] and recovery["session_id"]:
                await rewind_to_checkpoint(
                    recovery["checkpoint_id"],
                    recovery["session_id"],
                )
                print(f"Rewound. Retrying {cv_path}...")
            else:
                print("No checkpoint available. Manual recovery needed.")
```

"The checkpoint does not prevent the corruption," Emma said. "It lets you detect it and recover. Your verification logic after each candidate is the detection layer. The checkpoint is the recovery layer."

James looked at the two functions. "So `process_candidate_with_recovery` always returns a checkpoint, even when nothing goes wrong?"

"Correct. You pay a small overhead to capture checkpoints on every run. You only use them when something fails. Think of it like version control for agent sessions: every commit costs a little, but the first time you need to revert, the cost pays for itself."

## The Checkpoint Flow Diagram

The complete checkpoint lifecycle follows this sequence:

```
1. Configure       enable_file_checkpointing=True
                   extra_args={"replay-user-messages": None}
                          |
                          v
2. Run Agent       client.query("Process this CV...")
                          |
                          v
3. Capture         UserMessage.uuid -> checkpoint_id
                   ResultMessage.session_id -> session_id
                          |
                          v
4. Verify          Check output files for correctness
                          |
              +-----------+-----------+
              |                       |
        Files OK                Files Corrupted
              |                       |
              v                       v
5a. Continue               5b. Resume session (resume=session_id)
    processing                 Call rewind_files(checkpoint_id)
                               Retry the operation
```

## Predict: What Happens Without extra_args?

:::exercise Predict Before You Run
James enables checkpointing but forgets the `extra_args` parameter:

```python
options = ClaudeAgentOptions(
    enable_file_checkpointing=True,
    permission_mode="acceptEdits",
    # Missing: extra_args={"replay-user-messages": None}
)
```

What value will `checkpoint_id` have after the agent finishes? What happens when he tries to call `rewind_files(None)`?

Record your prediction before reading the answer.
:::

**Answer**: Every `UserMessage.uuid` in the stream will be `None`. The `checkpoint_id` variable stays `None` because the `if message.uuid and not checkpoint_id` condition never triggers. If James then calls `rewind_files(None)`, the SDK raises an error because `None` is not a valid checkpoint identifier.

The `extra_args={"replay-user-messages": None}` flag tells the SDK to include replay metadata (including UUIDs) in the message stream. Without it, the SDK still creates checkpoints internally, but your code cannot reference them because it never receives the UUIDs.

## Predict: Checkpoint Granularity

:::exercise Predict Before You Run
Emma's pipeline processes five candidates sequentially. She captures the first `UserMessage.uuid` for each candidate.

After candidate 3 corrupts the report, she rewinds to the checkpoint captured during candidate 3's processing. What happens to the reports from candidates 1 and 2?

Record your prediction.
:::

**Answer**: The reports from candidates 1 and 2 are preserved. Each call to `process_candidate_with_recovery` creates a new `ClaudeSDKClient` session. The checkpoint captured during candidate 3's session only covers files modified during that session. Rewinding to that checkpoint restores files to their state at the start of candidate 3's processing, which includes the completed reports from candidates 1 and 2.

This is why Emma processes candidates sequentially with separate sessions rather than running all five in a single session. If she ran all five in one session and rewound to a checkpoint, she might lose work from candidates processed after that checkpoint.

## Connection to Supervision Patterns

In Lesson 09, you built supervision tiers that prevent agents from making dangerous decisions. A scoring agent that produces a borderline result gets routed to human review before any action is taken. Supervision catches problems before they happen.

Checkpointing catches problems after they happen. These are complementary layers:

| Safety Layer                | When It Helps                                     | HireFlow Example                                             |
| :-------------------------- | :------------------------------------------------ | :----------------------------------------------------------- |
| Supervision (Lesson 09)     | Agent is about to make a bad decision             | Score below threshold triggers human review before rejection |
| Guardrails (Lesson 08)      | Agent receives bad input or produces bad output   | Malformed CV rejected before processing                      |
| Checkpointing (this lesson) | Agent executes correctly but the outcome is wrong | Report overwritten; rewind to pre-corruption state           |

No single layer catches everything. Supervision cannot prevent a well-reasoned write to the wrong file. Guardrails cannot validate outputs that look structurally correct but contain wrong data. Checkpointing cannot prevent the mistake, but it can undo it.

"Defense in depth," Emma said. "Each layer catches what the others miss."

## Try With AI

:::tip Practice with Your AI Assistant
Use these prompts in Claude Code or your preferred AI assistant:

1. "Write a Python function that runs a Claude agent with file checkpointing enabled. The function should return the first checkpoint UUID and the session ID."

2. "Given this checkpoint UUID and session ID, write the code to resume the session and rewind files to that checkpoint."

3. "I have a batch pipeline that processes 10 files sequentially. Design a checkpointing strategy that lets me recover from a failure at any point without reprocessing earlier files."

4. "Explain why `extra_args={'replay-user-messages': None}` is required for checkpointing to work. What happens if I omit it?"
   :::

## Key Takeaways

- **File checkpointing** creates snapshots of your project's file state during agent sessions
- Three required settings: `enable_file_checkpointing=True`, `permission_mode="acceptEdits"`, and `extra_args={"replay-user-messages": None}`
- Capture `UserMessage.uuid` for checkpoint IDs and `ResultMessage.session_id` for session resumption
- Rewind with `resume=session_id` to reconnect, then `client.rewind_files(checkpoint_id)` to restore
- Checkpointing complements supervision (Lesson 09) and guardrails (Lesson 08): supervision prevents bad decisions, guardrails reject bad data, checkpointing undoes bad executions
- Process batch items in separate sessions so that rewinding one session does not affect completed work from earlier sessions
