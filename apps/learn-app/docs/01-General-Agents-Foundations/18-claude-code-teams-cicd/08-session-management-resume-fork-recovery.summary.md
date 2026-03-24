# Summary: Session Management - Resume, Fork, and Recovery

## Core Insight

Sessions are persistent workspaces, not disposable terminals. Naming, resuming, forking, and compacting sessions lets you treat multi-day investigations like version-controlled branches: you can pick up where you left off, explore parallel approaches, and manage context as a finite resource.

## Key Commands

| Command / Flag                       | What it does                                                                |
| :----------------------------------- | :-------------------------------------------------------------------------- |
| `claude -n investigation-name`       | Start a named session                                                       |
| `claude --continue`                  | Resume the most recent session in this directory                            |
| `claude --resume`                    | Open the session picker (interactive list)                                  |
| `claude --resume investigation-name` | Resume a specific named session                                             |
| `/rename new-name`                   | Rename the current session mid-conversation                                 |
| `/branch`                            | Fork the session: creates a new branch from the current conversation        |
| `/compact`                           | Summarize conversation history to free context space                        |
| `/compact Focus on X`                | Compact with custom instructions about what to preserve                     |
| `/btw question`                      | Side question in a dismissible overlay; does not enter conversation history |
| `/rewind`                            | Select a checkpoint and summarize from there (partial compaction)           |

## Resume vs Fresh Start

This is the most important decision in session management. The question: **is the context still valid?**

| Factor                            | Resume              | Fresh Start with Summary           |
| :-------------------------------- | :------------------ | :--------------------------------- |
| Files changed since last session? | No or minor changes | Significant changes                |
| Tool results still valid?         | Yes                 | No (tests, git log, etc. outdated) |
| Time since last session?          | Hours to ~1 day     | Days to weeks                      |
| Approach changed?                 | Same direction      | Different direction                |
| Context window health?            | Not near limit      | Near limit with irrelevant history |

**When starting fresh**, write a structured summary: PROBLEM, SUSPECT CODE PATHS, WHAT I TRIED, NEXT STEPS. Paste it into the new session with instructions to re-read changed files.

## Stale Context Problem

When you resume after external file changes, Claude still holds old file contents in its context. It will reference code that has moved, been renamed, or been deleted.

**Fix:** Tell Claude which files changed and what changed. Ask it to re-read before continuing.

## Session Forking

- `/branch` creates a new session from the current conversation baseline
- Both branches have identical context; neither wastes time re-reading or re-analyzing
- Use case: comparing two refactoring approaches from the same understanding
- **Fork vs worktree**: fork separates conversation only (same files); worktree separates both conversation and file system (fully isolated)

| Exploring ideas (reading, planning) | Fork is sufficient                    |
| :---------------------------------- | :------------------------------------ |
| Writing code for both approaches    | Use worktrees to avoid file conflicts |

## Context Management with /compact

- Every file read, command run, and response consumes context tokens
- When context fills up, Claude "forgets" earlier instructions and makes more mistakes
- `/compact` summarizes history, preserving key decisions while freeing token space
- Custom instructions guide what survives: `/compact Focus on the migration changes and test failures`
- Permanent compaction rules can be set in CLAUDE.md

**When to compact:**

- Claude starts contradicting earlier statements
- "Context window getting full" warnings appear
- You finished a subtask and are starting a related one
- Claude asks you something you already answered

## Common Mistakes

- Assuming resume always restores full context perfectly. Tool results in the history may reference file states that no longer exist.
- Confusing forking with worktrees. Forking creates a new conversation branch (same files); worktrees create separate file system copies.
- Assuming `/compact` deletes information. It summarizes and compresses; key decisions and file states survive.
- Resuming after significant file changes without telling Claude what changed, leading to stale references.

## Exam Connection (Task 1.7)

The exam tests session state management. Key testable points: named session resumption with `--resume`, `fork_session` for parallel exploration, when to choose fresh start with summary over resumption (stale tool results, changed files), and informing resumed sessions about changes for targeted re-analysis.
