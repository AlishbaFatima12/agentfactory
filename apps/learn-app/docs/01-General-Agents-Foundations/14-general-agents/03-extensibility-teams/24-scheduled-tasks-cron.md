---
slug: /General-Agents-Foundations/general-agents/scheduled-tasks-cron
sidebar_position: 24
title: "Scheduled Tasks: The Loop Skill and Cron Tools"
description: "Schedule recurring checks, one-time reminders, and background polling with /loop and Claude Code's cron tools; session-scoped task automation without leaving the terminal"
keywords:
  [
    scheduled tasks,
    loop skill,
    cron,
    recurring tasks,
    reminders,
    claude code,
    automation,
    polling,
  ]
chapter: 14
lesson: 24
duration_minutes: 12

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (AI Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Using /loop for recurring prompts, managing task lifecycle with CronCreate/CronList/CronDelete, designing monitoring workflows"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA
skills:
  - name: "Scheduling Recurring Tasks with /loop"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital-Content-Creation"
    measurable_at_this_level: "Student can schedule recurring checks and one-time reminders using /loop with appropriate intervals"

  - name: "Cron Tool Lifecycle Management"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "Information-Data-Literacy"
    measurable_at_this_level: "Student can list active tasks, identify task IDs, and cancel specific tasks using CronList and CronDelete"

  - name: "Session-Scoped Task Architecture"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can explain why scheduled tasks are session-scoped and identify when to use durable alternatives"

learning_objectives:
  - objective: "Schedule a recurring check using /loop with appropriate interval and prompt"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student creates a /loop task, observes it fire, and verifies the output"
  - objective: "Explain the session-scoped nature of scheduled tasks and their constraints"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student correctly identifies that tasks do not survive session exit and cannot fire mid-response"
  - objective: "Manage the lifecycle of scheduled tasks using list and cancel operations"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student lists active tasks, identifies a specific task by ID, and cancels it"
  - objective: "Choose between session-scoped scheduling and durable alternatives based on scenario requirements"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Student correctly matches 3 scenarios to session-scoped /loop vs GitHub Actions vs Desktop scheduled tasks"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (/loop syntax, cron tool lifecycle, session scope constraints, jitter/expiry behavior); within B1 limit of 10"

differentiation:
  extension_for_advanced: "Compose /loop with Remote Control (Lesson 23) for mobile-monitored recurring checks, or with Agent Teams (Lesson 20) for multi-agent polling workflows"
  remedial_for_struggling: "Start with the default 10-minute interval (/loop check the build) before experimenting with custom intervals"

# Generation metadata
generated_by: "content-implementer v1.0.0"
created: "2026-03-14"
last_modified: "2026-03-14"
git_author: "Claude Code"
version: "1.0.0"

prerequisites:
  - "Lesson 15: Hooks and Extensibility (event-driven automation concepts)"
  - "Lesson 17: The Ralph Wiggum Loop (autonomous iteration patterns)"

teaching_guide:
  lesson_type: "core"
  session_group: 8
  session_title: "Scheduled Tasks and Remote Sessions"
  key_points:
    - "/loop is the quickest path to recurring prompts; one line, no cron syntax needed"
    - "Tasks are session-scoped: they die when you exit Claude Code, by design"
    - "Tasks fire between turns, not mid-response; they queue at low priority and wait for Claude to be idle"
    - "The 3-day expiry and 50-task limit are safety bounds, not bugs"
  misconceptions:
    - "Students think scheduled tasks persist across restarts; they do not, use Desktop scheduled tasks or GitHub Actions for persistence"
    - "Students expect seconds-precision timing; seconds are rounded up to the nearest minute (cron granularity)"
    - "Students assume tasks fire exactly on time; jitter adds up to 10% of the period (capped at 15 minutes) for recurring tasks"
  discussion_prompts:
    - "Why would Anthropic make scheduled tasks session-scoped instead of persistent? What problems does that avoid?"
    - "When would you choose /loop over a GitHub Actions cron schedule, and vice versa?"
  teaching_tips:
    - "The comparison table (IS vs IS NOT) is the anchor of this lesson; students who internalize session scope avoid all major frustration"
    - "Have students run /loop 1m tell me the time as a live demo; watching it fire in real time makes the concept concrete"
    - "The /loop + Remote Control combo is a powerful hook for students who completed Lesson 23"
  assessment_quick_check:
    - "What happens to your scheduled tasks when you exit Claude Code?"
    - "How many scheduled tasks can one session hold at once?"
    - "If you type /loop check the build without specifying an interval, how often does it fire?"
---

# Scheduled Tasks: The Loop Skill and Cron Tools

You kick off a 45-minute database migration. The terminal is running, Claude is idle, and you need to know when it finishes -- but you also need to keep working on something else. Without scheduled tasks, you alt-tab every few minutes to check progress. With one line, you hand that job to Claude:

```
/loop 5m check if the migration finished and tell me what happened
```

Claude sets up a recurring check that fires every 5 minutes in the background. You keep working. When the migration completes, Claude tells you -- no manual polling, no context switching.

In Lesson 15, you learned hooks: code that reacts to events Claude triggers. Scheduled tasks flip the relationship. Instead of waiting for an event, you _create_ events on a timer. Hooks are reactive; scheduled tasks are proactive.

---

## The /loop Skill

The `/loop` bundled skill is the quickest way to schedule a recurring prompt. Pass an optional interval and a prompt:

```
/loop 5m check if the deployment finished and tell me what happened
```

Claude parses the interval, converts it to a cron expression, schedules the job, and confirms the cadence and job ID. From that point, the prompt fires automatically at the specified interval while the session stays open.

### Interval Syntax

Intervals are flexible. You can lead with them, trail with them, or leave them out entirely:

| Form                    | Example                               | Parsed interval              |
| :---------------------- | :------------------------------------ | :--------------------------- |
| Leading token           | `/loop 30m check the build`           | every 30 minutes             |
| Trailing `every` clause | `/loop check the build every 2 hours` | every 2 hours                |
| No interval             | `/loop check the build`               | defaults to every 10 minutes |

Supported units: `s` (seconds), `m` (minutes), `h` (hours), `d` (days). One caveat: seconds are rounded up to the nearest minute because the underlying cron system has one-minute granularity. If you type `/loop 30s check the logs`, it fires every minute, not every 30 seconds.

Intervals that do not divide evenly into their unit, like `7m` or `90m`, are rounded to the nearest clean interval. Claude tells you what it picked.

### Composing with Commands

The scheduled prompt can itself be a slash command or skill invocation. This is useful for re-running a workflow you have already packaged:

```
/loop 20m /review-pr 1234
```

Each time the job fires, Claude runs `/review-pr 1234` as if you had typed it. Any skill or command that works when you type it manually works inside a `/loop`.

---

## One-Time Reminders

Not everything needs to repeat. For one-shot reminders, describe what you want in natural language:

```
remind me at 3pm to push the release branch
```

```
in 45 minutes, check whether the integration tests passed
```

Claude pins the fire time to a specific minute and hour using a cron expression, confirms when it will fire, and the task deletes itself after running once.

All times are interpreted in your local timezone. "3pm" means 3pm wherever you are running Claude Code, not UTC.

### Jitter Near Round Times

One-shot tasks scheduled for the top or bottom of the hour (`:00` or `:30`) fire up to 90 seconds early. This jitter prevents every session from hitting the API at the same wall-clock moment. If exact timing matters, pick a minute that is not `:00` or `:30` -- for example, `remind me at 3:07pm` avoids the jitter entirely.

---

## Under the Hood: CronCreate, CronList, CronDelete

The `/loop` skill is a convenience layer. Under the hood, Claude calls three tools that you can also reference directly:

| Tool         | Purpose                                                                                         |
| :----------- | :---------------------------------------------------------------------------------------------- |
| `CronCreate` | Schedule a new task. Accepts a 5-field cron expression, the prompt to run, and recurrence mode. |
| `CronList`   | List all scheduled tasks with their IDs, schedules, and prompts.                                |
| `CronDelete` | Cancel a task by ID.                                                                            |

Each scheduled task gets an 8-character ID. To see what is running:

```
what scheduled tasks do I have?
```

Claude calls `CronList` and shows the task IDs, their schedules, and the prompts they run. To cancel one:

```
cancel the deploy check job
```

Claude matches your description to a task ID and calls `CronDelete`. You can also reference the ID directly if you know it.

`CronCreate` accepts standard 5-field cron expressions (`minute hour day-of-month month day-of-week`). All fields support wildcards (`*`), single values (`5`), steps (`*/15`), ranges (`1-5`), and comma-separated lists (`1,15,30`). You rarely need to write cron expressions yourself -- `/loop` handles the conversion -- but the power is there when you want precise control:

| Expression    | Meaning                |
| :------------ | :--------------------- |
| `*/5 * * * *` | Every 5 minutes        |
| `0 * * * *`   | Every hour on the hour |
| `0 9 * * *`   | Every day at 9am local |
| `0 9 * * 1-5` | Weekdays at 9am local  |

---

## Session Scope and Limits

Scheduled tasks are deliberately session-scoped. Understanding what that means -- and what it does not mean -- prevents every common frustration:

| Scheduled Tasks ARE                         | Scheduled Tasks ARE NOT                           |
| :------------------------------------------ | :------------------------------------------------ |
| Session-scoped: live in the current process | Persistent: do not survive exit or restart        |
| Fire between turns, when Claude is idle     | Mid-response: do not interrupt active work        |
| Limited to 50 tasks per session             | Unlimited: the 50-task cap is a safety bound      |
| Subject to 3-day expiry for recurring tasks | Indefinite: forgotten loops auto-clean themselves |
| Local timezone for all time expressions     | UTC-based                                         |
| Affected by jitter (up to 10% of period)    | Exactly on time to the second                     |

### No Catch-Up for Missed Fires

If Claude is busy on a long-running request when a task comes due, the prompt fires once when Claude becomes idle -- not once per missed interval. There is no backlog. If an hourly check misses three hours because Claude was working, you get one check when it finishes, not three.

### The 3-Day Expiry

Recurring tasks automatically expire 3 days after creation. The task fires one final time, then deletes itself. This bounds how long a forgotten loop can run. If you need a recurring task to last longer, cancel and recreate it before it expires.

### Disabling the Scheduler

Set `CLAUDE_CODE_DISABLE_CRON=1` in your environment to disable the scheduler entirely. The cron tools and `/loop` become unavailable, and any already-scheduled tasks stop firing. This is useful in CI environments or shared servers where background scheduling is undesirable.

---

## Power Combos

### /loop + Remote Control (Lesson 23)

Start a Remote Control session, schedule a recurring check, then monitor from your phone:

```bash
# In tmux for persistence
tmux new -s deploy-watch
claude remote-control
```

Inside the session:

```
/loop 10m check the deployment status and summarize any errors
```

Now scan the QR code with your phone. Every 10 minutes, Claude checks the deployment and you see the results on your phone -- no laptop needed.

### /loop + Agent Teams (Lesson 20)

Schedule a recurring task that coordinates with agent teams. A parent agent can use `/loop` to periodically check on long-running subagent work:

```
/loop 15m check if any subagent tasks have completed and summarize their results
```

### For Durable Scheduling

When tasks need to survive restarts, session-scoped scheduling is the wrong tool. Use:

- **Desktop scheduled tasks** -- Claude Cowork's graphical scheduling for recurring desktop workflows
- **GitHub Actions** with a `schedule` trigger -- for unattended CI/CD automation that runs without a terminal

---

## When Scheduled Tasks Go Wrong

### 1. The Task Didn't Fire

**What it looks like**: You set up a `/loop` and nothing happens.

**Why it happens**: You exited the session, closed the terminal, or let the laptop sleep. Scheduled tasks only fire while Claude Code is running and idle.

**Fix**: Keep the session alive. For long-running monitoring, combine with tmux (Lesson 23) to prevent session death.

### 2. Hit the 50-Task Limit

**What it looks like**: Claude refuses to create a new scheduled task.

**Why it happens**: You have 50 active tasks in the session. Each `/loop` and each one-time reminder counts against this limit.

**Fix**: Ask Claude to list your tasks and cancel ones you no longer need. Old reminders that already fired are automatically cleaned up, but active loops accumulate.

### 3. Seconds Aren't Working

**What it looks like**: You typed `/loop 30s check the logs` but it fires every minute, not every 30 seconds.

**Why it happens**: The cron system has one-minute granularity. Seconds are rounded up to the nearest minute.

**Fix**: Accept minute-level precision. If you genuinely need sub-minute polling, that is a different tool (a shell `watch` command, for instance).

### 4. Tasks Didn't Survive a Restart

**What it looks like**: You restarted Claude Code and all your scheduled tasks are gone.

**Why it happens**: This is by design. Session-scoped means session-scoped.

**Fix**: Recreate the tasks, or switch to a durable alternative (Desktop scheduled tasks, GitHub Actions) for workflows that must persist.

---

### What's Next

The next section covers **Claude Cowork** -- Claude's desktop application that brings a visual interface to everything you have been doing in the terminal. Cowork has its own scheduling capabilities through Desktop scheduled tasks, which offer the persistence that session-scoped `/loop` deliberately avoids.

---

## Try With AI

**Exercise 1: Your First Scheduled Task (Predict + Run)**

Before running this, predict: how many times will this fire in 3 minutes?

```
/loop 1m tell me the current time and count how many files are in this directory
```

Watch it fire. Was your prediction correct? Remember: the first fire may have jitter, and cron has one-minute granularity.

**What you're learning:** The basic /loop lifecycle -- scheduling, observing fires, and understanding the one-minute minimum interval. Predicting before running builds intuition for timing behavior.

**Exercise 2: List, Inspect, Cancel (Investigate)**

First, create two scheduled tasks:

```
/loop 5m check git status
```

```
remind me in 10 minutes to review the diff
```

Now ask:

```
what scheduled tasks do I have?
```

Examine the output: each task has an 8-character ID, a schedule, and a prompt. Cancel just the recurring one by name or ID. Verify the reminder survived by listing tasks again.

**What you're learning:** The full CronList/CronDelete lifecycle. Understanding task IDs and selective cancellation is essential for managing multiple concurrent tasks without losing track.

**Exercise 3: Three Interval Variants (Modify)**

Try all three interval forms in sequence:

```
/loop 2m check the git log for new commits
```

```
/loop check the git log for new commits every 5 minutes
```

```
/loop check the git log for new commits
```

After each, ask Claude to list your tasks. Compare the intervals Claude chose. What did the third one (no explicit interval) default to?

**What you're learning:** The flexibility of /loop's interval parsing -- leading, trailing, and default. Understanding defaults (10 minutes) prevents surprises.

**Exercise 4: Design a Monitoring Workflow (Make)**

Design and implement a complete monitoring workflow with four parts:

1. A recurring check every 5 minutes that runs `git status` and reports any uncommitted changes
2. A one-time reminder in 15 minutes to commit your work
3. List all tasks to verify both are scheduled
4. After the reminder fires, cancel the recurring check

Run each step and verify it works before moving to the next.

**What you're learning:** Composing multiple scheduled tasks into a coherent workflow -- the same pattern you would use for deployment monitoring, PR babysitting, or build verification in real projects.

## Flashcards Study Aid

<Flashcards />
