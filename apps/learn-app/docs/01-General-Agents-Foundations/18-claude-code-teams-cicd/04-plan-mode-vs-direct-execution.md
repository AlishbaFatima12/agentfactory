---
slug: /General-Agents-Foundations/claude-code-teams-cicd/plan-mode-vs-direct-execution
sidebar_position: 4
title: "Plan Mode vs Direct Execution"
description: "Choose between plan mode for complex multi-file tasks and direct execution for simple changes; use the Explore subagent to investigate before committing to an approach"
keywords:
  [
    claude code,
    plan mode,
    direct execution,
    explore subagent,
    multi-file changes,
    architectural decisions,
    microservice restructuring,
    context management,
  ]
chapter: 18
lesson: 4
duration_minutes: 25

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (AI Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Using plan mode for complex tasks, direct execution for simple changes, Explore subagent for investigation, combining modes in a workflow"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA
skills:
  - name: "Plan Mode Selection"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can evaluate a task description and determine whether plan mode or direct execution is the appropriate approach"

  - name: "Explore Subagent Usage"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can use the Explore subagent to investigate a codebase question without consuming main conversation context"

  - name: "Multi-Mode Workflow Composition"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can design a workflow that combines plan mode (investigation) with direct execution (implementation) and justify the mode transitions"

learning_objectives:
  - objective: "Use plan mode to investigate and design an approach for a complex multi-file restructuring task"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student enters plan mode, creates a plan for restructuring, and explains why plan mode was the right choice"
  - objective: "Use direct execution for a single-file bug fix and explain why plan mode would be wasteful"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student fixes a bug directly and articulates the overhead plan mode would add"
  - objective: "Use the Explore subagent to investigate a codebase question without exhausting main conversation context"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student delegates an investigation to the Explore subagent and receives a summary"
  - objective: "Build a decision tree that maps task characteristics to the correct execution mode"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student correctly classifies 6 scenarios using the decision tree and explains each choice"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (plan mode mechanics, direct execution tradeoffs, Explore subagent isolation, combined-mode workflows); within B1 limit of 10"

differentiation:
  extension_for_advanced: "Design a custom subagent that uses plan mode with preloaded skills for a domain-specific investigation workflow"
  remedial_for_struggling: "Start with the decision tree and practice classifying scenarios before attempting multi-mode workflows"

# Generation metadata
generated_by: "writer-skills agent"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
version: "1.0.0"

prerequisites:
  - "Lesson 1: The CLAUDE.md Configuration Hierarchy"
  - "Lesson 3: Custom Skills with Frontmatter"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 2
  session_title: "Plan Mode and Execution Strategies"
  key_points:
    - "Plan mode is for tasks with architectural implications, multiple valid approaches, or multi-file changes; it lets Claude explore before committing"
    - "Direct execution is for well-scoped, unambiguous changes where the implementation path is clear"
    - "The Explore subagent isolates investigation output so your main conversation context stays clean for the actual implementation"
    - "The most powerful pattern combines investigation (plan mode or Explore) with implementation (direct execution)"
  misconceptions:
    - "Students think plan mode is always better; for simple tasks it adds overhead without benefit"
    - "Students confuse plan mode with being slower; plan mode prevents costly rework on complex tasks, making the total time shorter"
    - "Students think the Explore subagent is just a convenience; it is essential for preventing context exhaustion on large codebases"
  discussion_prompts:
    - "Have you ever started implementing something, gotten halfway through, and realized your approach was wrong? How would plan mode have helped?"
    - "When would you combine Explore + plan mode versus going straight to plan mode?"
  teaching_tips:
    - "The monolith-to-microservices example is the exam anchor; make sure students can explain why that specific scenario demands plan mode"
    - "Have students try fixing a typo in plan mode to feel the overhead; then try restructuring 10 files without it to feel the chaos"
    - "The decision tree is the deliverable students will reference after this lesson; invest time getting it right"
  assessment_quick_check:
    - "A developer needs to rename a variable across 3 files. Plan mode or direct execution?"
    - "A team wants to migrate from REST to GraphQL. Plan mode or direct execution?"
    - "What does the Explore subagent return to your main conversation: the full investigation output, or a summary?"
---

# Plan Mode vs Direct Execution

You are staring at a monolith. 45 files, tightly coupled, shared state everywhere. The team wants to split it into three microservices. You open Claude Code, type "split this into microservices," and Claude starts editing files. Ten minutes later, you have 15 modified files, a broken build, and no idea whether Claude's approach is even the right one. Should the user service own the session table, or should the auth service? Claude already made the choice for you, buried in file 7 of 15.

Now rewind. Same monolith, but this time you enter plan mode first. Claude reads the codebase, identifies the service boundaries, proposes three options for the session table ownership, and presents a plan. You discuss, adjust, agree. _Then_ Claude executes. Same result, but this time you understand the architecture before a single file changes.

That is the difference between plan mode and direct execution. Plan mode is for tasks where the approach matters as much as the implementation. Direct execution is for tasks where the approach is obvious and you just need it done.

---

## When Each Mode Shines

### Plan Mode: Think Before You Act

Plan mode tells Claude to investigate, explore options, and propose an approach _before making any changes_. Claude reads files, analyzes dependencies, considers tradeoffs, and presents a plan. No files are modified until you approve.

**Plan mode is for tasks where:**

- Multiple valid approaches exist (and choosing wrong is expensive)
- The change spans many files and the sequence matters
- Architectural decisions must be made before implementation
- You need to understand the current state before changing it

**Concrete examples:**

| Task                                        | Why plan mode                                                       |
| :------------------------------------------ | :------------------------------------------------------------------ |
| Migrate a monolith to microservices         | Multiple service boundary options, sequence dependencies            |
| Replace a library used in 45+ files         | Need to map all usage patterns before choosing a migration strategy |
| Redesign the database schema                | Must understand all downstream consumers first                      |
| Choose between three integration approaches | Each has different infrastructure requirements                      |

You can enter plan mode in two ways:

1. **Type `/plan`** to enter plan mode from the prompt
2. **Use Shift+Tab** to toggle between plan mode and direct execution

While in plan mode, Claude investigates and proposes but does not execute. You review the plan, ask questions, request changes. When you are satisfied, switch to direct execution and Claude implements the plan.

### Direct Execution: Just Do It

Direct execution is the default mode. Claude reads your request, figures out the implementation, and does it. No planning phase, no approval step.

**Direct execution is for tasks where:**

- The scope is clear and narrow (one file, one function, one bug)
- The implementation approach is obvious
- There is only one reasonable way to do it
- The change is small enough to review after the fact

**Concrete examples:**

| Task                                                  | Why direct execution                       |
| :---------------------------------------------------- | :----------------------------------------- |
| Fix a null pointer exception with a clear stack trace | One file, one line, one fix                |
| Add a date validation check to a form field           | Single function addition, obvious approach |
| Update an error message to be more descriptive        | Trivial change, no design decisions        |
| Rename a poorly-named variable across a few files     | Mechanical change, no judgment needed      |

Direct execution is faster for these tasks. Entering plan mode for a typo fix is like writing an architecture document for changing a lightbulb.

---

## The Explore Subagent: Investigate Without Cost

Here is a problem. You want to understand how the authentication flow works before you plan any changes to it. You ask Claude to investigate. Claude reads 20 files, traces the flow through middleware, finds three edge cases, and reports back. Useful information, but now your conversation context is full of file contents from the investigation. When you ask Claude to implement the fix, it has less room to think because the investigation consumed the context window.

The Explore subagent solves this. It runs the investigation in an isolated context, then returns a summary to your main conversation. Your context stays clean for the actual work.

### How It Works

The Explore subagent is a specialized agent optimized for codebase exploration. It has read-only tools (Read, Grep, Glob) and is designed to investigate and report, not modify.

You can use it in two ways:

**1. Claude delegates automatically.** When you ask a broad investigation question, Claude may spawn an Explore subagent on its own:

```
How does the payment processing flow work in this codebase?
```

Claude recognizes this is an investigation, spawns Explore to trace the flow, and presents the summary.

**2. You invoke it through a skill with `context: fork`.** As you learned in Lesson 3, adding `context: fork` with `agent: Explore` to a skill forces it to run in an isolated Explore subagent:

```yaml
---
name: trace-flow
description: Trace a data flow through the codebase
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob
---
Trace the $ARGUMENTS flow through this codebase.
Map every file involved, identify the entry point,
and document each transformation step.
```

### Why Context Isolation Matters

Consider a multi-phase task: investigate the current auth system, then redesign it.

**Without Explore:**

1. You ask Claude to investigate (20 files read into context)
2. Context is now 60% full of investigation output
3. You ask Claude to plan the redesign
4. Claude has 40% context remaining, may miss connections or produce a shallow plan

**With Explore:**

1. Explore subagent investigates (20 files read into its own isolated context)
2. Summary returns to your conversation (5% of context used)
3. You ask Claude to plan the redesign
4. Claude has 95% context remaining, produces a thorough plan

The summary is the key. Explore reads 20 files; you receive a 2-paragraph summary with the essential findings. The raw file contents never enter your main conversation.

---

## Combining Modes: The Power Pattern

The most effective workflow for complex tasks combines investigation and execution in sequence:

### Pattern: Explore, Plan, Execute

```
Step 1: Explore (isolated investigation)
   └─ Explore subagent reads the codebase, returns a summary

Step 2: Plan (design the approach)
   └─ Using the summary, enter plan mode to design the implementation

Step 3: Execute (implement the plan)
   └─ Switch to direct execution, implement the approved plan
```

**Real example: Library migration**

Your team needs to migrate from `moment.js` to `dayjs` across the codebase. Here is how you would approach it:

**Step 1: Explore.** Ask Claude to investigate all moment.js usage:

```
How is moment.js used in this codebase? I need to know every import,
every usage pattern, and any places where moment-specific features
(like timezone or locale) are used.
```

Claude spawns Explore, which traces all usage patterns and returns a summary: "47 files import moment. 38 use basic formatting (direct dayjs equivalent). 6 use timezone conversions (requires dayjs-timezone plugin). 3 use relative time (requires dayjs-relativeTime plugin)."

**Step 2: Plan.** Enter plan mode with the investigation results:

```
/plan
Based on that investigation, plan the migration from moment.js to dayjs.
Consider: migration order, which dayjs plugins we need, how to handle
the 6 timezone files differently from the 38 basic files, and a testing
strategy.
```

Claude proposes: migrate basic files first (38 files, mechanical replacement), then timezone files (6 files, need plugin setup), then relative time files (3 files, different API). Test each batch before moving to the next.

**Step 3: Execute.** Approve the plan and switch to direct execution:

```
Approved. Start with the 38 basic formatting files.
```

Claude implements the plan, file by file, following the approved approach.

---

## The Decision Tree

Here is the complete decision framework. For any task, walk through these questions:

```
Is the task well-scoped?
├── YES: Is it a single file or a few files?
│   ├── YES: Is the implementation obvious?
│   │   ├── YES ──► DIRECT EXECUTION
│   │   └── NO ──► PLAN MODE (need to consider approaches)
│   └── NO: Does it span many files?
│       └── YES ──► PLAN MODE (need to coordinate changes)
└── NO: Is the scope unclear?
    └── YES: Do I understand the current codebase state?
        ├── YES ──► PLAN MODE (know the state, need to design)
        └── NO ──► EXPLORE first, then PLAN MODE
```

**Quick reference:**

| Signal                              | Mode                         |
| :---------------------------------- | :--------------------------- |
| "Fix this bug" (with stack trace)   | Direct execution             |
| "Add a field to this form"          | Direct execution             |
| "Restructure the project"           | Plan mode                    |
| "Migrate to a new framework"        | Explore, then plan mode      |
| "How does X work? Then change it."  | Explore, then plan or direct |
| "Split this monolith into services" | Explore, then plan mode      |
| "Update this error message"         | Direct execution             |
| "Choose between approaches A, B, C" | Plan mode                    |

:::tip Exam Connection
**Exam Q5** presents a scenario where a developer needs to restructure a monolith into microservices. The correct answer is plan mode. The exam tests whether you can identify that multi-file architectural changes with multiple valid approaches require investigation and planning before execution. A single-file bug fix with a clear stack trace is direct execution.
:::

:::tip Permission Mode Complements Execution Mode
The execution mode (plan vs direct) controls what Claude investigates before acting. The **permission mode** controls how much autonomy Claude has when executing. For long-running tasks where you approve a plan and then want uninterrupted implementation, consider **auto mode** (`claude --enable-auto-mode`, then Shift+Tab). Auto mode uses a safety classifier to block destructive actions while allowing routine file edits and test runs through automatically. This pairs well with the Explore-Plan-Execute pattern: you approve the plan, then auto mode lets Claude implement it without pausing for permission on every file. See Chapter 14, Lesson 14 for the full permission modes spectrum.
:::

---

## When Plan Mode Saves Time (Not Wastes It)

A common misconception: "plan mode is slower because it adds a planning step." For simple tasks, yes, it adds overhead. But for complex tasks, plan mode _saves_ time by preventing costly rework.

**Without plan mode on a complex task:**

1. Claude starts implementing (5 minutes)
2. Hits a design problem at file 8 of 20 (realization)
3. Must undo 7 files of work to take a different approach (10 minutes wasted)
4. Restarts implementation (5 minutes)
5. Total: 20 minutes, with 10 minutes of rework

**With plan mode on a complex task:**

1. Claude plans the approach (3 minutes)
2. You spot the design problem in the plan (no wasted work)
3. Claude adjusts the plan (1 minute)
4. Claude implements the approved plan (5 minutes)
5. Total: 9 minutes, zero rework

The planning overhead (3 minutes) is far less than the rework cost (10 minutes). This is why the exam emphasizes plan mode for architectural tasks: it is not about being cautious, it is about being efficient.

---

## Hands-On: Experience All Three Modes

This is your lesson deliverable. You will use direct execution, plan mode, and the Explore subagent on the same project to feel the difference.

### Setup: Create a Practice Project

```bash
mkdir -p ~/mode-comparison-lab/src/{api,utils,models}
cd ~/mode-comparison-lab
git init
```

Create three source files to work with.

Create `~/mode-comparison-lab/src/api/users.ts`:

```typescript
export function getUser(id: string) {
  const user = db.query("SELECT * FROM users WHERE id = " + id);
  return user;
}

export function createUser(name: string, email: string) {
  db.query(
    "INSERT INTO users (name, email) VALUES ('" + name + "', '" + email + "')",
  );
  return { success: true };
}
```

Create `~/mode-comparison-lab/src/utils/format.ts`:

```typescript
export function formatDate(d: any) {
  return d.toISOString().split("T")[0];
}

export function formatCurrency(amount: any) {
  return "$" + amount;
}
```

Create `~/mode-comparison-lab/src/models/user.ts`:

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
}
```

### Step 1: Direct Execution (Simple Fix)

Open Claude Code in the project directory:

```bash
cd ~/mode-comparison-lab
claude
```

Type this prompt (direct execution, the default mode):

```
The formatDate function in src/utils/format.ts has no type safety.
Add a Date type annotation to the parameter d.
```

**What to observe**: Claude fixes the type immediately. No plan, no discussion. One file, one obvious change. This is what direct execution is for.

**Verification**: Open `src/utils/format.ts` and confirm `d` now has a `Date` type annotation.

### Step 2: Plan Mode (Multi-File Restructuring)

Now try a complex task. Press **Shift+Tab** to enter plan mode (or type `/plan`). You should see the mode indicator change.

Type this prompt in plan mode:

```
The API files have SQL injection vulnerabilities. Restructure the project to:
1. Add input validation for all user-facing functions
2. Replace string concatenation SQL with parameterized queries
3. Add proper error handling with typed error responses
4. Add a validation utility module

Show me your plan before making any changes.
```

**What to observe**: Claude reads the files, identifies the specific vulnerabilities, and proposes a plan with file-by-file changes. You see the architectural decisions (where to put validation, what error types to create) _before_ any code changes.

**Verification**: Review the plan. Do you agree with where Claude wants to put the validation utilities? Would you organize it differently? Discuss with Claude, then approve or adjust the plan. Only then switch to direct execution (Shift+Tab) and let Claude implement.

### Step 3: Explore Subagent (Investigation)

For this step, you need a project with enough files to investigate. Use your hierarchy lab from Lesson 1, or clone any open-source project. Type this prompt:

```
How are errors handled across this codebase? Trace every error handling
pattern you find and tell me whether they are consistent.
```

**What to observe**: Claude may spawn an Explore subagent to do the investigation. After it completes, you get a concise summary rather than 20 files of raw content in your conversation. Check your context usage -- it should be minimal despite a thorough investigation.

**Verification**: Run `/context` to see how much of your context window was consumed. Compare this to what would happen if Claude had read all those files directly into your conversation.

---

## Summary

Three execution strategies, each optimized for different task profiles:

1. **Direct execution**: clear scope, obvious approach, small change. Just do it.
2. **Plan mode**: multiple approaches, many files, architectural decisions. Think first, then do.
3. **Explore subagent**: unknown codebase state, need investigation before planning. Investigate in isolation, then plan or execute.

The power pattern combines all three: Explore to understand, plan to design, execute to implement. Match the mode to the task, not the other way around.

---

## Try With AI

**Exercise 1: Feel the Difference (Experience + Compare)**

This exercise works best with a real project, but you can use any codebase.

First, try direct execution on a complex question:

```
Restructure the src/ directory to separate business logic from
infrastructure. Move database access, HTTP handlers, and external
API calls into an infrastructure/ directory. Keep domain models
and business rules in domain/.
```

Watch what happens. Claude starts moving files immediately. After it finishes (or after you stop it), note: Did you agree with every decision Claude made? Did you even see the decisions before they were implemented?

Now, start a fresh session and try the same task in plan mode:

```
/plan
Restructure the src/ directory to separate business logic from
infrastructure. Move database access, HTTP handlers, and external
API calls into an infrastructure/ directory. Keep domain models
and business rules in domain/.
```

Compare the experiences. In plan mode, Claude proposes which files go where and you can discuss before anything moves. In direct execution, Claude makes those decisions silently.

**What you're learning:** The visceral difference between planning and executing. For a restructuring task, plan mode lets you see and approve the architectural decisions (which files are "business logic" vs "infrastructure") before implementation. Direct execution buries those decisions in the diff. The exam tests this: architectural restructuring is a plan mode task.

**Exercise 2: Explore Before You Plan (Investigate + Design)**

Pick a part of your codebase you do not fully understand (or clone any open-source project). Ask Claude to investigate it using the Explore subagent:

```
How does error handling work across this codebase? I want to know:
what patterns are used, whether they're consistent, and where the
gaps are.
```

After Claude returns the summary, check your context usage with `/context`. Note how much of your context window was consumed.

Now enter plan mode and design an improvement:

```
/plan
Based on that error handling analysis, design a consistent error
handling strategy for this project. Propose specific patterns,
show before/after examples, and outline the migration order.
```

**What you're learning:** The Explore-then-Plan workflow. Explore does the heavy reading in isolation, returning only a summary. Your context stays clean for the planning phase, where you need Claude to think deeply about design. Without Explore, the investigation output would consume context that the planning phase needs. This is how you handle multi-phase tasks without running out of room.

**Exercise 3: Build Your Decision Tree (Classify + Justify)**

Paste this prompt into Claude Code:

```
I have 8 tasks. For each one, tell me whether I should use direct
execution, plan mode, or Explore-then-plan. Explain your reasoning
using the decision tree from Lesson 4.

1. Fix a typo in the README: "recieve" should be "receive"
2. Migrate the project from JavaScript to TypeScript
3. Add input validation to the /api/users endpoint
4. Split a 2000-line file into smaller modules
5. Investigate why the test suite takes 10 minutes, then optimize it
6. Update a dependency from v2 to v3 (breaking changes)
7. Add a "last modified" timestamp to the database schema
8. Replace the homegrown ORM with SQLAlchemy across 30+ files
```

Review Claude's answers. The exam-critical scenarios are: task 2 (language migration = plan mode), task 4 (restructuring = plan mode), task 5 (unknown state = Explore first), and task 8 (library replacement across many files = Explore then plan). Tasks 1, 3, and 7 are direct execution. Task 6 depends on how many breaking changes there are.

**What you're learning:** The decision tree for matching tasks to execution modes. The exam tests this with scenarios like "monolith to microservices" (plan mode) and "single-file bug fix" (direct execution). Practice classifying tasks until the pattern is automatic: unclear scope or many files = plan mode; obvious change in few files = direct execution; unknown state = Explore first.

## Flashcards Study Aid

<Flashcards />
