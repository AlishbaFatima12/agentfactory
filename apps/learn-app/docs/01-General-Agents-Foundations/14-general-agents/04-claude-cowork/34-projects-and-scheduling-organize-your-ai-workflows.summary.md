---
title: "Projects and Scheduling: Organize Your AI Workflows - Summary"
sidebar_label: "Summary"
sidebar_class_name: hidden
---

# Projects and Scheduling: Organize Your AI Workflows

## Key Concepts

**Cowork Projects** are persistent containers that bundle four components: instructions (standing rules for Claude), context (folders, linked projects, URLs), scheduled tasks, and memory. Projects turn one-off chats into organized workspaces where Claude remembers your preferences across tasks.

**Project Instructions** function like CLAUDE.md for Cowork users. They specify tone, format, constraints, and domain context that apply to every task in the project. Good instructions are specific enough that a new team member could follow them without asking questions.

**Project Memory** persists across tasks within a single project. Claude remembers what you told it in previous tasks and applies that knowledge to new ones. Memory is scoped per-project: it does not transfer between different projects.

**Three Ways to Create a Project**: start from scratch (new folder + instructions), import from a Claude Chat project (pulls in existing instructions and files), or use an existing folder (fastest for work that already has a directory structure).

**Scheduled Tasks** automate recurring workflows on a cadence. Create them via the `/schedule` skill (conversational) or the Scheduled sidebar (form-based). Frequency options: hourly, daily, weekly, weekdays, or manual (on-demand only).

**The Desktop Limitation**: Cowork scheduled tasks only run while your computer is awake and the app is open. Missed tasks fire automatically when the app reopens, but they are delayed, not lost.

## Scheduling Comparison (Cowork vs. Claude Code)

| Feature                     | Claude Code `/loop`           | Cowork Desktop Scheduling             |
| :-------------------------- | :---------------------------- | :------------------------------------ |
| Persistence                 | Session-scoped (dies on exit) | Survives app restarts                 |
| Best for                    | Quick polling during dev work | Recurring knowledge-work automations  |
| Expiry                      | 3-day auto-expiry             | No expiry (runs until paused/deleted) |
| Runs while computer sleeps? | No                            | No                                    |

Cloud scheduled tasks (via `/schedule` in Claude Code or claude.ai) run on Anthropic infrastructure and execute even when your machine is off.

## Practical Takeaways

1. **Write project instructions first, then test with a manual task** before scheduling anything recurring
2. **Project memory is per-project**: one big project gives maximum memory; focused projects keep contexts clean
3. **Always test a workflow manually before scheduling it** to catch instruction gaps
4. **Choose the right scheduling tier**: `/loop` for throwaway session monitoring, Cowork scheduling for persistent recurring work, cloud scheduling for must-run-even-when-offline tasks
5. **Archiving preserves files**: archived projects remove sidebar clutter but keep all local files intact
