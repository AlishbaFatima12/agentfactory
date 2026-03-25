---
slug: /General-Agents-Foundations/claude-code-teams-cicd/session-management-resume-fork-recovery
sidebar_position: 8
title: "Session Management: Resume, Fork, and Recovery"
description: "Use named sessions with --resume for multi-day investigations, fork_session for parallel exploration branches, and /compact for context management; know when to resume vs start fresh"
keywords:
  [
    session management,
    claude code,
    resume session,
    fork session,
    compact,
    context window,
    session state,
    named sessions,
    parallel exploration,
    exam task 1.7,
  ]
chapter: 18
lesson: 8
duration_minutes: 20

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (AI Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Managing persistent sessions, forking parallel explorations, compacting context, choosing resume vs fresh start"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA
skills:
  - name: "Named Session Management"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital-Content-Creation"
    measurable_at_this_level: "Student can create, name, resume, and navigate between named Claude Code sessions for ongoing investigations"

  - name: "Session Forking for Parallel Exploration"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can fork a session to create parallel exploration branches that compare two approaches from the same baseline"

  - name: "Context Window Management"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Information-Data-Literacy"
    measurable_at_this_level: "Student can identify when context is degrading, use /compact to reclaim space, and customize compaction behavior"

  - name: "Resume vs Fresh Start Decision"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can evaluate whether to resume a session (context mostly valid) or start fresh with a summary (stale tool results, changed files)"

learning_objectives:
  - objective: "Use --resume with named sessions to continue a multi-day investigation without re-explaining context"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student names a session, exits, resumes it by name, and continues working with preserved context"
  - objective: "Use fork_session or /branch to create parallel exploration branches that compare two refactoring approaches from the same baseline"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student forks a session, explores approach A in one branch and approach B in another, then compares results"
  - objective: "Use /compact to reduce context in verbose sessions, with custom instructions to preserve critical information"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs /compact with targeted instructions and verifies that key context survives the compaction"
  - objective: "Choose between resumption and fresh start based on whether context is still valid or tool results have gone stale"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student correctly identifies scenarios where resume is appropriate vs where fresh start with summary is better, and explains the reasoning"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (named sessions with --resume, session forking with /branch, /compact for context management, resume vs fresh start decision, informing resumed sessions about changes); within B1-B2 limit"

differentiation:
  extension_for_advanced: "Combine session forking with worktrees (--worktree) to create fully isolated parallel explorations with separate file states, not just separate conversation contexts"
  remedial_for_struggling: "Start with just --continue (resume most recent) and /rename before learning --resume by name and forking"

# Generation metadata
generated_by: "content-implementer v2.0.0"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
version: "1.0.0"

prerequisites:
  - "Lesson 1: The CLAUDE.md Configuration Hierarchy"
  - "Lesson 4: Plan Mode vs Direct Execution"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 4
  session_title: "Session Management: Resume, Fork, and Recovery"
  key_points:
    - "Named sessions with --resume let you treat investigations like branches: separate, persistent contexts you can return to by name"
    - "Session forking (/branch) creates independent exploration branches from a shared baseline, perfect for comparing two approaches"
    - "/compact summarizes conversation history to free context space; custom instructions control what survives the compaction"
    - "Resume when context is mostly valid (same files, same problem, picking up where you left off). Start fresh when tool results are stale (files changed externally, significant time gap)"
    - "When resuming after file changes, tell Claude which files changed so it re-reads them rather than relying on stale cached content"
  misconceptions:
    - "Students think resuming always restores full context perfectly: tool results in the history may reference file states that no longer exist"
    - "Students confuse forking with worktrees: forking creates a new conversation branch (same files), worktrees create separate file system copies"
    - "Students assume /compact deletes information: it summarizes and compresses, preserving key decisions and file states while freeing token space"
  discussion_prompts:
    - "When would resuming a session be worse than starting fresh? What makes context 'stale'?"
    - "How is session forking similar to git branching? How is it different?"
  teaching_tips:
    - "The multi-day investigation exercise is the best way to teach --resume: have students start an investigation, close the terminal, and resume the next day (or after a break)"
    - "Show the session picker interactively: students should see how /resume lists sessions, how naming helps, and how forked sessions are grouped under their root"
    - "The stale context demo is important: make a file change outside Claude, resume, and show that Claude still references the old version until you tell it about the change"
  assessment_quick_check:
    - "What is the difference between --continue and --resume?"
    - "When should you start a fresh session with a summary instead of resuming?"
    - "How do you tell a resumed session about files that changed while it was inactive?"
---

# Session Management: Resume, Fork, and Recovery

You have been debugging a race condition for two hours. You have read 15 files, identified three suspect code paths, and narrowed the problem to a timing issue between the cache invalidation and the database write. Then your laptop battery dies. When you open the terminal again, all that context is gone. You start over, re-reading the same 15 files, re-explaining the same problem. An hour of work, duplicated.

Sessions solve this. Claude Code saves every conversation locally. You can name sessions, resume them days later, fork them into parallel exploration branches, and compact them when the context window fills up. Instead of treating each terminal session as disposable, you treat sessions like persistent workspaces: named, resumable, and branchable.

This lesson teaches you how to manage sessions across multi-day investigations, when to resume and when to start fresh, how to fork sessions for parallel exploration, and how to keep context healthy with `/compact`.

:::tip Exam Connection
**Task Statement 1.7** tests session state management. The exam expects you to know when `--resume` is appropriate, when a fresh start with a structured summary beats resumption, and how `fork_session` enables parallel exploration. This lesson covers all of these scenarios.
:::

---

## Named Sessions with --resume

By default, Claude Code saves your conversation when you exit. You can pick up where you left off with two commands:

```bash
# Resume the most recent conversation in this directory
claude --continue

# Open a session picker to choose from recent sessions
claude --resume
```

`--continue` is fast: it resumes whatever you were last doing. `--resume` is flexible: it opens an interactive picker showing all recent sessions for the current project, with metadata like time elapsed, message count, and git branch.

But both have the same problem: they rely on you recognizing which session is which from the first few words of a prompt. When you have five active sessions across different tasks, "explain this function" and "fix the login bug" are not helpful labels.

**Named sessions fix this.** Give sessions descriptive names and resume them by name:

```bash
# Start a named session
claude -n race-condition-investigation

# ... work on the investigation, then exit

# Resume by name (days later, if needed)
claude --resume race-condition-investigation
```

You can also name a session mid-conversation:

```
/rename race-condition-investigation
```

The name appears on the prompt bar and in the session picker. Treat session names like branch names: descriptive enough that you know what the session is about without opening it.

### The Session Picker

When you run `claude --resume` without a name (or `/resume` inside a session), an interactive picker opens. Key shortcuts:

| Shortcut       | Action                                            |
| :------------- | :------------------------------------------------ |
| Up/Down arrows | Navigate between sessions                         |
| Enter          | Resume the highlighted session                    |
| P              | Preview the session content                       |
| R              | Rename the highlighted session                    |
| /              | Search to filter sessions                         |
| B              | Filter to sessions from your current git branch   |
| A              | Toggle between current directory and all projects |

Forked sessions (created with `/branch` or `/rewind`) appear grouped under their root session, making it easy to find related conversations.

### What Gets Preserved

When you resume a session, Claude restores:

- The full message history (your prompts, Claude's responses, tool calls and results)
- The model and configuration from the original session
- All tool usage context (file reads, command outputs, code changes)

This means Claude "remembers" what files it read, what decisions it made, and what approach it was taking. You can pick up mid-investigation without re-explaining anything.

---

## When to Resume vs When to Start Fresh

Resuming is not always the right choice. The critical question is: **is the context still valid?**

### Resume When:

- **You are picking up the same investigation.** The files have not changed, the problem is the same, and you want to continue from where you stopped.
- **You need to iterate on a solution.** Claude proposed an approach, you tried it overnight, and now you want to report back with the results.
- **The session is recent.** A few hours or a day has passed, and the codebase has not changed significantly.

```bash
# Yesterday you were investigating the race condition
claude --resume race-condition-investigation
```

```
I let the stress test run overnight. It failed 3 times out of 10,000 runs.
The failures all show the same pattern: cache read happens between
the database write and the cache invalidation. Here are the timestamps
from the logs: [paste logs]
```

Claude still has the full context of your investigation. It knows which files it read, which code paths it identified as suspect, and what approach you were trying. No need to re-explain any of that.

### Start Fresh When:

- **Files changed significantly since the last session.** Claude's cached file contents are now wrong. It will reference code that no longer exists.
- **Stale tool results.** Claude ran `git log` or `npm test` in the previous session, and those results are now outdated. It may base decisions on test results that no longer reflect reality.
- **The approach fundamentally changed.** You decided to take a completely different direction. The old session's context is more distracting than helpful.
- **Significant time has passed.** After a week, so much may have changed that resuming carries more risk of stale context than benefit.

When starting fresh, write a summary of what you learned and paste it into the new session:

```bash
# Start a clean session
claude
```

```
I am continuing a race condition investigation from a previous session.
Here is what I found:

PROBLEM: Race condition between cache invalidation and database write
in src/services/orderService.ts.

SUSPECT CODE PATHS:
1. OrderService.update() at line 145 writes to DB then invalidates cache
2. CacheManager.get() at line 67 can read stale cache between those two operations
3. The window is ~2ms under normal load, ~50ms under stress

WHAT I TRIED:
- Added mutex around the write+invalidate: fixed race but caused 40% latency increase
- The mutex approach is not viable for production

NEXT STEPS:
- Investigate write-through cache pattern instead of invalidation
- Check if Redis supports atomic write+invalidate

Please read @src/services/orderService.ts and @src/cache/cacheManager.ts
(both files changed since my last session) and continue from here.
```

This fresh-start-with-summary approach gives Claude clean context focused on what matters. No stale tool results, no outdated file contents, no accumulated corrections from dead-end approaches.

### The Decision Framework

| Factor                            | Resume              | Fresh Start                        |
| :-------------------------------- | :------------------ | :--------------------------------- |
| Files changed since last session? | No or minor changes | Significant changes                |
| Tool results still valid?         | Yes                 | No (tests, git log, etc. outdated) |
| Time since last session?          | Hours to ~1 day     | Days to weeks                      |
| Approach changed?                 | Same direction      | Different direction                |
| Context window health?            | Not near limit      | Near limit with irrelevant history |

---

## Informing Resumed Sessions About Changes

When you resume a session after files have changed externally (another developer pushed commits, CI ran, you edited files manually), Claude still holds the _old_ file contents in its context. It will reference code that may have moved, been renamed, or been deleted.

The fix: tell Claude what changed.

```bash
claude --resume race-condition-investigation
```

```
Since our last session, two things changed:
1. src/services/orderService.ts was refactored: the update() method
   moved from line 145 to line 178, and a new validateOrder() method
   was added before it.
2. src/cache/cacheManager.ts has a new write-through mode (added by
   another developer in PR #542).

Please re-read both files before continuing.
```

By telling Claude _which_ files changed and _what_ changed, you prompt it to re-read those files and update its understanding. Without this, Claude might reference line 145 of `orderService.ts` when the relevant code is now at line 178.

For larger changes, you can be more concise:

```
Since my last session, 8 files changed (PR #540 and #542 merged).
Re-read @src/services/ and @src/cache/ before continuing the investigation.
```

---

## Forking Sessions for Parallel Exploration

Sometimes you reach a decision point in an investigation: should you try approach A or approach B? Both look promising, and you will not know which is better until you try. In a single session, you would try A, then undo everything and try B. Session forking lets you try both simultaneously from the same starting point.

Use `/branch` to create a fork:

```
/branch
```

This creates a new session that starts with a copy of the current conversation history. The original session continues unchanged. You now have two independent branches from the same baseline.

**Example: Comparing two refactoring approaches**

You are refactoring an authentication module. You have spent 30 minutes understanding the current code. Now you want to compare two approaches:

**Session 1 (original):** Try the middleware-based approach

```
Let's try approach A: refactor the auth checks into Express middleware.
Start with the login route and propagate the pattern to the other routes.
```

**Session 2 (forked with /branch):** Try the decorator-based approach

```
Let's try approach B: refactor the auth checks using TypeScript decorators.
Start with the login handler and propagate the pattern to the other handlers.
```

Both sessions have the full context of your 30-minute investigation. Neither wastes time re-reading files or re-understanding the codebase. You compare the results and continue with whichever approach works better.

### Fork vs Worktree

Forking and worktrees serve different purposes:

| Feature           | Fork (/branch)                                               | Worktree (--worktree)                                  |
| :---------------- | :----------------------------------------------------------- | :----------------------------------------------------- |
| What is separated | Conversation context only                                    | Conversation context AND file system                   |
| File changes      | Both branches edit the same files (be careful)               | Each worktree has its own copy of the codebase         |
| Use case          | Exploring ideas in conversation before committing to changes | Actually implementing competing approaches in parallel |
| Risk              | File edits in one branch may conflict with the other         | Safe; fully isolated file states                       |

If you are just _thinking_ about approaches (reading code, planning, comparing options), fork is sufficient. If you are _writing_ code for both approaches, use worktrees to avoid file conflicts:

```bash
# Fully isolated parallel exploration
claude --worktree approach-a
# In another terminal:
claude --worktree approach-b
```

---

## Context Management with /compact

Every file Claude reads, every command it runs, every response it gives consumes context window tokens. In a long investigation, the context fills up. When it fills up, Claude's performance degrades: it starts "forgetting" earlier instructions, misses connections between distant parts of the conversation, and makes more mistakes.

Claude Code automatically compacts conversation history when you approach the context limit. But you can also compact manually at any time:

```
/compact
```

This summarizes the conversation history, preserving key decisions, file states, and the current direction of work while freeing up token space. The original messages are replaced with a compressed summary.

### Custom Compaction Instructions

By default, `/compact` decides what to keep and what to summarize. You can guide it:

```
/compact Focus on the database migration changes and the test failures.
Preserve the full list of modified files and the exact error messages.
```

This tells Claude what to prioritize when compacting. Information you mark as important is more likely to survive the compression.

You can also set permanent compaction rules in your CLAUDE.md:

```markdown
# In CLAUDE.md

When compacting, always preserve:

- The full list of files modified in this session
- Any test commands and their output
- Architecture decisions and their rationale
```

### Partial Compaction with /rewind

Sometimes you only want to compact part of the conversation. Press `Esc` twice (or run `/rewind`), select a message checkpoint, and choose **Summarize from here**. This condenses messages from that point forward while keeping earlier context intact.

This is useful when the early part of a session (the investigation, the plan) is still valuable, but the middle section (a failed approach, verbose debugging output) is just noise.

### When to Compact

| Signal                                            | Action                                                    |
| :------------------------------------------------ | :-------------------------------------------------------- |
| Claude starts contradicting earlier statements    | `/compact` to clean up noisy context                      |
| You see "context window getting full" warnings    | `/compact` with custom instructions                       |
| You finished a subtask and are starting a new one | `/clear` (full reset) if unrelated, `/compact` if related |
| Claude asks you something you already answered    | Context is too noisy; compact or start fresh              |

---

## Side Questions with /btw

Sometimes you need a quick answer that has nothing to do with your current investigation. Checking a syntax detail, looking up a function signature, verifying a config option. You do not want this cluttering your investigation's context.

Use `/btw`:

```
/btw what is the syntax for a TypeScript mapped type with readonly properties?
```

The answer appears in a dismissible overlay. It never enters the conversation history. Your investigation context stays clean.

---

## A Multi-Day Investigation Workflow

Here is how all these session management tools fit together in a realistic multi-day workflow:

**Day 1: Start the investigation**

```bash
claude -n memory-leak-investigation
```

```
We have a memory leak in production. The heap grows 50MB/hour under load.
Read @src/server.ts and @src/services/ to understand the architecture,
then suggest where to start investigating.
```

Claude reads the codebase, proposes investigation paths. You follow one path, identify some suspects. End of day.

**Day 2: Resume and continue**

```bash
claude --resume memory-leak-investigation
```

```
I ran the heap profiler overnight with your suggested configuration.
Here are the results: [paste heap snapshot summary].
The biggest retained objects are EventEmitter listeners in the WebSocket handler.

Since yesterday, @src/services/websocketHandler.ts was changed by PR #601.
Please re-read that file before continuing.
```

Claude picks up with all the context from Day 1, re-reads the changed file, and continues the investigation.

**Day 2 (afternoon): Fork to compare approaches**

```
I think the fix is either:
A) Remove listeners in the disconnect handler
B) Use WeakRef for the listener callbacks

Let me try both.
```

Run `/branch`. In the original session, explore approach A. In the forked session, explore approach B.

**Day 3: Compact and converge**

The original session has a lot of history. Compact it:

```
/compact Keep the memory leak diagnosis, the heap profiler results,
and approach A's implementation. Discard the early exploration that
led nowhere.
```

Compare both approaches, pick the winner, implement and test it.

**Day 3 (end): Clean closure**

```
The fix is in place and tests pass. Let's commit.
```

The session has a clear name, a complete investigation history, and a clean resolution. If the bug comes back in two weeks, you can resume this session to review what you tried.

---

## Try With AI

**Exercise 1: The Named Session Workflow (Create + Resume + Navigate)**

Start a Claude Code session with a descriptive name:

```bash
claude -n session-management-practice
```

Ask Claude to read 2-3 files from your project and summarize what they do. Then exit the session (Ctrl+C or type `/exit`).

Now resume by name:

```bash
claude --resume session-management-practice
```

Ask Claude a question that depends on the files it read in the first part (for example, "based on the files you read earlier, which one would you modify to add feature X?"). Verify that Claude still has the context from the first part.

Now run `/resume` (without arguments) to open the session picker. Find your named session in the list. Press P to preview it. Press B to filter by branch.

**What you're learning:** Named sessions let you create persistent workspaces for ongoing investigations. The resume mechanism preserves full context including file reads and tool results. The session picker provides quick access to all your sessions. This is the foundation for multi-day workflows.

**Exercise 2: Fork and Compare (Branch + Explore + Decide)**

Start a Claude Code session and ask Claude to analyze a file in your project:

```
Read @path/to/some/file and suggest two different ways to improve it.
Don't make any changes yet.
```

Once Claude proposes two approaches, fork the session:

```
/branch
```

In the original session, ask Claude to implement approach 1. In the forked session (access it via `/resume`), ask Claude to implement approach 2.

Compare the results. Which approach produced cleaner code? Which was easier to implement?

**What you're learning:** Session forking lets you explore parallel paths from the same baseline without redoing the analysis phase. Both branches start with identical context. This is faster than starting a second investigation from scratch, especially when the analysis phase took significant time.

**Exercise 3: The Stale Context Problem (Resume + Diagnose + Fix)**

Start a named session and ask Claude to read a specific file:

```bash
claude -n stale-context-demo
```

```
Read @path/to/some/file.ts and summarize what the main function does.
```

Exit the session. Now edit that file manually (add a comment, rename a variable, or add a new function). Resume the session:

```bash
claude --resume stale-context-demo
```

Ask Claude about the change you made _without telling it that the file changed_:

```
What is the new function I added to that file?
```

Claude will not know about it because it has stale cached content. Now tell Claude about the change:

```
The file changed since our last session. I added a new function called
processItems. Please re-read @path/to/some/file.ts and then tell me
what processItems does.
```

**What you're learning:** Resumed sessions carry stale tool results. When files change between sessions, Claude references outdated content until you explicitly tell it to re-read. This is why the exam tests the "fresh start with summary" pattern: when many files have changed, starting fresh is more reliable than resuming with stale context.

## Flashcards Study Aid

<Flashcards />
