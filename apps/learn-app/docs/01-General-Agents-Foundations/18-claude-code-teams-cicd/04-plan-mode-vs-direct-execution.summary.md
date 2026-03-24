---
title: "Summary: Plan Mode vs Direct Execution"
sidebar_position: 4.5
---

# Summary: Plan Mode vs Direct Execution

## Mental Model: Measure Twice, Cut Once

Direct execution is cutting immediately. Plan mode is measuring first. For a single cut (fixing a typo), measuring is wasteful overhead. For restructuring a cabinet (splitting a monolith), measuring prevents expensive rework.

The question is never "which is better?" It is "how complex is this task?"

## Three Execution Modes

| Mode             | What Happens                                               | Best For                                         |
| :--------------- | :--------------------------------------------------------- | :----------------------------------------------- |
| Direct execution | Claude implements immediately, no approval step            | Clear scope, obvious approach, few files         |
| Plan mode        | Claude investigates and proposes before changing anything  | Multiple approaches, many files, architecture    |
| Explore first    | Isolated subagent investigates, returns summary, then plan | Unknown codebase state, need investigation first |

## Entering Plan Mode

- Type `/plan` from the prompt
- Use **Shift+Tab** to toggle between plan mode and direct execution

In plan mode, Claude reads files, analyzes dependencies, and proposes a plan. No files change until you approve and switch to direct execution.

## The Explore Subagent: Investigation Without Cost

**The problem**: Asking Claude to investigate 20 files fills your context with file contents. When you then ask Claude to plan, it has less room to think.

**The solution**: The Explore subagent runs investigation in an isolated context. It reads 20 files, then returns a 2-paragraph summary to your main conversation. Your context stays clean for the actual work.

| Without Explore                    | With Explore               |
| :--------------------------------- | :------------------------- |
| Investigation fills 60% of context | Summary uses 5% of context |
| 40% remaining for planning         | 95% remaining for planning |
| Shallow plan                       | Thorough plan              |

## The Power Pattern: Explore, Plan, Execute

1. **Explore**: Subagent investigates in isolation, returns summary
2. **Plan**: Using the summary, enter plan mode to design the approach
3. **Execute**: Switch to direct execution, implement the approved plan

**Example**: Migrating from moment.js to dayjs. Explore finds 47 imports across 3 usage categories. Plan proposes batch migration by category. Execute implements the plan batch by batch.

## Decision Tree

```
Is the scope clear and narrow?
  YES --> Is the approach obvious?
    YES --> DIRECT EXECUTION
    NO  --> PLAN MODE
  NO  --> Do I understand the current codebase state?
    YES --> PLAN MODE
    NO  --> EXPLORE first, then PLAN MODE
```

## Quick Classification

| Task                                 | Mode                    |
| :----------------------------------- | :---------------------- |
| Fix a typo                           | Direct execution        |
| Add input validation to one endpoint | Direct execution        |
| Rename a variable across 3 files     | Direct execution        |
| Split a 2000-line file into modules  | Plan mode               |
| Migrate to a new framework           | Explore, then plan mode |
| Replace a library across 30+ files   | Explore, then plan mode |
| Redesign the database schema         | Plan mode               |
| Choose between three approaches      | Plan mode               |

## Why Plan Mode Saves Time on Complex Tasks

Without plan mode: implement 7 files, hit a design problem at file 8, undo 7 files, restart. Total: 20 minutes with 10 minutes wasted.

With plan mode: plan for 3 minutes, catch the design problem on paper, adjust, implement correctly. Total: 9 minutes, zero rework.

The 3-minute planning overhead is far cheaper than the 10-minute rework cost. This math only works for complex tasks. For a typo fix, the 3-minute overhead is pure waste.

## Common Mistakes

1. **Using plan mode for everything** -- Plan mode on a typo fix is like writing an architecture document for changing a lightbulb. Match the mode to the task complexity.

2. **Skipping plan mode for complex restructuring** -- When Claude starts editing files immediately on a multi-file restructuring, you lose visibility into the architectural decisions being made. Those decisions get buried in the diff.

3. **Not using Explore before planning** -- If you do not understand the current state, plan mode cannot design a good approach. Explore first to build the foundation for planning.

4. **Thinking plan mode is slower** -- For complex tasks, plan mode is faster because it prevents rework. The overhead is an investment, not a cost.

## Self-Check Questions

1. A developer needs to fix a null pointer exception with a clear stack trace. Plan mode or direct execution?
2. A team wants to migrate from REST to GraphQL. What execution mode(s) should they use?
3. What does the Explore subagent return to your main conversation: the full investigation output, or a summary?
4. You are about to restructure a monolith into microservices. Why is direct execution risky here?

<details>
<summary>Answers</summary>

1. Direct execution. One file, one bug, clear fix. Plan mode adds overhead with no benefit.
2. Explore first (understand all REST endpoints and usage patterns), then plan mode (design the GraphQL schema and migration strategy), then execute.
3. A summary. The full output stays in the subagent's isolated context. This is why Explore preserves your main context for the actual work.
4. Claude makes architectural decisions (service boundaries, data ownership) silently during implementation. You do not see or approve those decisions until the diff. Plan mode surfaces them for discussion before any files change.

</details>

## Exam Prep: Task Statement 3.4

- Q5: Monolith-to-microservices = plan mode (multiple valid approaches, architectural decisions)
- Single-file bug fix with clear stack trace = direct execution
- Explore subagent returns a summary, not the full output
- Plan mode prevents rework on complex tasks (saves time, does not waste it)
- Enter plan mode with `/plan` or Shift+Tab
- The power pattern: Explore --> Plan --> Execute
