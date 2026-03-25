---
slug: /General-Agents-Foundations/general-agents/projects-and-scheduling
sidebar_position: 34
title: "Projects and Scheduling: Organize Your AI Workflows"
description: "Create Cowork projects with persistent memory and custom instructions, then schedule recurring tasks that run on autopilot; the organizational backbone of your Digital FTE"
keywords:
  [
    cowork projects,
    scheduled tasks,
    recurring automation,
    project memory,
    custom instructions,
    digital FTE,
    cowork scheduling,
    AI workflow organization,
  ]
chapter: 14
lesson: 34
duration_minutes: 20

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (AI Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Creating projects with custom instructions, observing project memory across tasks, scheduling recurring automations within project scope"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA
skills:
  - name: "Cowork Project Organization"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a Cowork project from scratch, set custom instructions, add files and context, and observe project memory persisting across tasks"

  - name: "Cowork Scheduled Task Design"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a recurring scheduled task in Cowork using /schedule or the sidebar UI, set frequency and scope, and manage the task lifecycle"

  - name: "Cross-Interface Scheduling Comparison"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can compare Cowork desktop scheduling with Claude Code session-scoped /loop and cloud scheduled tasks, choosing the right tier for a given scenario"

learning_objectives:
  - objective: "Create a Cowork project with custom instructions and added context files"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student creates a project, adds instructions, and demonstrates Claude following those instructions in a new task"
  - objective: "Observe and verify project memory persisting across separate tasks"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student runs two tasks in the same project and confirms Claude remembers context from the first task in the second"
  - objective: "Schedule a recurring task in Cowork and manage its lifecycle"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student creates a scheduled task, verifies it appears in the Scheduled section, and pauses or edits it"
  - objective: "Compare Cowork scheduling with Claude Code /loop and choose the right tier for a scenario"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Student correctly matches 3 scenarios to Cowork desktop scheduling vs /loop vs cloud scheduling"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (project creation, custom instructions, project memory, scheduled tasks, scheduling tiers); within B1 limit of 10"

differentiation:
  extension_for_advanced: "Import a Claude Chat project into Cowork and compare how instructions transfer; then create a scheduled task that uses a plugin connector for automated data gathering"
  remedial_for_struggling: "Start by creating one project with a single instruction line, run two tasks in it, and observe memory before attempting scheduling"

# Generation metadata
generated_by: "content-implementer v2.0.0"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
workflow: "manual"
version: "1.0.0"

prerequisites:
  - "Lesson 26: Getting Started with Cowork"
  - "Lesson 27: Cowork in Action (practical workflow experience)"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 9
  session_title: "Cowork Projects and Scheduled Automation"
  key_points:
    - "Projects are Cowork's organizational backbone: custom instructions, persistent memory, and scoped context in one container"
    - "Project memory is scoped per-project; Claude remembers across tasks within a project but not across different projects"
    - "Custom instructions in a project are the Cowork equivalent of CLAUDE.md; they shape every task Claude runs in that project"
    - "Scheduled tasks only run while the computer is awake and Cowork is open; missed tasks fire when the app reopens"
  misconceptions:
    - "Students expect project memory to work across different projects; memory is scoped to the project where it was created"
    - "Students assume scheduled tasks run in the cloud; Cowork desktop scheduling requires the machine to be awake and the app open"
    - "Students confuse project instructions with chat system prompts; project instructions persist and apply to every task, not just one conversation"
  discussion_prompts:
    - "How does project memory change the way you would break down a multi-day task compared to one-off Cowork chats?"
    - "When would you choose Cowork desktop scheduling over Claude Code /loop, and when would you want cloud scheduling instead?"
  teaching_tips:
    - "Run the project memory exercise live: create a project, run a task that mentions a preference, then start a fresh task and ask Claude what it remembers; the surprise factor is high"
    - "The scheduling comparison table is the anchor for students who completed Lesson 24; connect the concepts explicitly"
    - "Have students write their own project instructions before showing examples; this surfaces their assumptions about what instructions should contain"
  assessment_quick_check:
    - "What happens to project memory when you archive a project?"
    - "If your laptop sleeps during a scheduled task's run time, what happens?"
    - "Name two things that project instructions can specify for Claude's behavior"
---

# Projects and Scheduling: Organize Your AI Workflows

Every workflow you built in the previous lessons disappeared when you closed the chat. You typed instructions each time, re-explained your preferences, and started from scratch. Projects fix that. A Cowork project bundles your instructions, files, and context into a persistent workspace where Claude remembers what you told it yesterday.

Scheduling goes further. Instead of opening Cowork and typing "summarize my weekly data" every Monday, you tell Claude to do it automatically. The task runs on a recurring cadence, and the results wait for you when you arrive.

Together, projects and scheduling turn Cowork from a tool you use into an employee that works on your behalf.

---

## Part 1: Projects

### What a Project Contains

A Cowork project is a container with four parts:

| Component           | What It Does                                                                    |
| :------------------ | :------------------------------------------------------------------------------ |
| **Instructions**    | Rules Claude follows for every task in this project (tone, format, constraints) |
| **Context**         | Local folders, linked Chat projects, or URLs that Claude can reference          |
| **Scheduled tasks** | Recurring automations scoped to this project                                    |
| **Memory**          | Claude remembers context from previous tasks within this project                |

Instructions are the most important part. They work like a CLAUDE.md file for Cowork users: every task Claude runs in this project follows these rules, without you repeating them.

### Create Your First Project

Open Cowork. In the left sidebar, click **Projects**, then **+ New project**. You have three options:

**Option 1: Start from Scratch**

1. Name your project (example: "Weekly Reports")
2. Choose a folder on your computer where project files will live
3. Write your instructions (we will do this in the next step)
4. Click **Create**

**Option 2: Import from a Claude Chat Project**

1. Click "Search projects in Chat..." and find an existing project
2. Cowork pulls in the project's instructions and files automatically
3. Name the Cowork project, choose a save location, and click **Create**

This is useful if you have been using Claude on the web and want to bring your work into Cowork's agentic environment.

**Option 3: Use an Existing Folder**

1. Select a folder already on your computer (example: your `~/Reports` directory)
2. Cowork uses that folder as context, so Claude can read and write files in it
3. Add instructions and click **Create**

This is the fastest path for work that already has a folder structure.

### Write Project Instructions

Project instructions shape how Claude behaves in every task within the project. Think of them as standing orders for your Digital FTE.

Open your new project, click the project name at the top to open settings, and find the **Instructions** field. Write instructions that specify:

- **Tone**: "Write in plain English. No jargon unless the audience is technical."
- **Format**: "Always use bullet points for action items. Include a one-line summary at the top of every output."
- **Constraints**: "Never delete files without asking first. Always show me the proposed changes before executing."
- **Domain knowledge**: "This project tracks our Q2 marketing campaign. The budget is $50,000 and the target audience is small business owners."

Here is an example you can paste and modify:

```
You are helping me manage weekly team reports.

Rules:
- Use bullet points, not paragraphs
- Start every report with a one-sentence executive summary
- Flag any metric that changed more than 20% week-over-week
- When working with files, always show me what you plan to do before executing

Context:
- Reports cover the marketing team (6 people)
- We track: leads generated, conversion rate, ad spend, content published
- Reports go to the VP of Marketing every Monday morning
```

Save the instructions. Every task you run in this project now follows these rules.

### Add Context to Your Project

Context tells Claude what files and information it can reference. In your project settings, you can add:

- **Local folders**: Claude can read (and write to) these directories
- **Linked Chat projects**: Pull in context from your Claude web projects
- **URLs**: Reference web pages that Claude can fetch for background information

For the "Weekly Reports" project, you might add your `~/Reports` folder so Claude can read last week's data and write this week's report directly.

### Observe Project Memory

This is where projects become powerful. Run a task in your project:

```
My name is Alex and I prefer tables over bullet points for data.
Also, our Q2 target for leads is 500.
```

Claude acknowledges your preferences. Now start a **new task** in the same project (click "+ New task" in the sidebar). In this fresh task, ask:

```
What do you know about my preferences and our Q2 targets?
```

Claude remembers. It knows your name, your formatting preference, and the leads target, even though this is a completely new task. That is project memory: Claude retains context from previous tasks within the same project and applies it to future work.

:::note Project Memory Scope
Memory is scoped per-project. Claude remembers everything within a project, but it does not carry memory from one project to another. If you create a separate "Budget Planning" project, Claude starts fresh there with no knowledge of your "Weekly Reports" preferences.
:::

### Archive and Manage Projects

When a project is complete (the campaign ended, the quarter closed), you can archive it. Archiving removes the project from your sidebar but preserves all local files and folders on your computer. Nothing is deleted.

To archive: open project settings and click **Archive project**. Archived projects can be restored later if you need them again.

---

## Part 2: Scheduling

### Why Schedule Tasks?

The workflows from Lesson 27 (organizing downloads, generating reports, analyzing content) were one-shot operations. You typed a prompt, Claude did the work, you got the result. But many workflows repeat on a predictable cadence:

- Summarize unread emails every morning
- Compile a weekly report from data files every Monday
- Organize the Downloads folder every Friday
- Track industry news and send a briefing daily

Scheduling turns these one-shot workflows into recurring automations that run without you lifting a finger.

### Create a Scheduled Task: Method 1 (the /schedule Skill)

Open Cowork and start a new task. Type:

```
/schedule
```

Cowork launches the scheduling skill. It asks you to describe what you want automated. Type your task description:

```
Every Monday at 8am, read the CSV files in my ~/Reports/weekly-data folder,
calculate the week-over-week changes for leads, conversion rate, and ad spend,
and write a summary report to ~/Reports/weekly-summaries/.
```

Claude may ask clarifying questions (which metrics matter most? what format for the report?). Answer them. Claude then shows you a summary: the task name, the schedule, and what it will do. Click **Schedule** to activate it.

### Create a Scheduled Task: Method 2 (the Sidebar UI)

For more control, use the dedicated scheduling interface:

1. Click **Scheduled** in the left sidebar
2. Click **+ New task** in the upper right
3. Fill in the form:

| Field                | What to Enter                                                             |
| :------------------- | :------------------------------------------------------------------------ |
| **Task name**        | "Weekly Marketing Report"                                                 |
| **Task description** | Brief summary of what this task does                                      |
| **Prompt**           | The full instructions Claude should follow (same detail as a normal task) |
| **Frequency**        | Hourly, Daily, Weekly, Weekdays only, or Manual (on-demand only)          |
| **Model**            | Optional: choose a specific Claude model                                  |
| **Working folder**   | Optional: the folder Claude should operate in                             |

4. Click **Save**

The task appears in your Scheduled section. You can see upcoming runs, past run history, and edit or pause the task at any time.

### Frequency Options

| Frequency    | When It Runs                                         |
| :----------- | :--------------------------------------------------- |
| **Hourly**   | Every hour                                           |
| **Daily**    | Once per day                                         |
| **Weekly**   | Once per week                                        |
| **Weekdays** | Monday through Friday                                |
| **Manual**   | Only when you click "Run now" (useful for on-demand) |

### The Critical Limitation

Scheduled tasks in Cowork only run while two conditions are met:

1. **Your computer is awake** (not sleeping or shut down)
2. **The Cowork app is open** (it can be in the background, but it must be running)

If your laptop sleeps at 8am on Monday when the weekly report was supposed to run, the task does not execute. When you open your laptop and Cowork starts up again, the missed task fires automatically and you receive a notification. The task is delayed, not lost.

This is an important constraint. If you need tasks that run even when your computer is off, you need cloud scheduling (covered in the comparison below).

### Manage Your Scheduled Tasks

Click **Scheduled** in the sidebar to see all your tasks. From here you can:

- **View run history**: See when each task last ran and what it produced
- **Edit**: Change the prompt, frequency, or working folder
- **Pause/Resume**: Temporarily disable a task without deleting it
- **Run now**: Execute a scheduled task immediately, regardless of its schedule
- **Delete**: Remove a task permanently

### Build a Weekly Report Automation

Let's build a practical example end-to-end. You will create a project and a scheduled task that work together.

**Step 1: Create the project.**

Create a new project called "Marketing Reports" with these instructions:

```
You are my weekly report assistant.

Rules:
- Start every report with a one-sentence executive summary
- Use tables for numerical data, bullet points for insights
- Flag any metric that changed more than 20% week-over-week
- Save reports as markdown files named YYYY-MM-DD-weekly-report.md

Data sources:
- CSV files in the weekly-data/ subfolder contain raw metrics
- Previous reports in the weekly-summaries/ subfolder show historical context
```

Add your working folder as context.

**Step 2: Test the workflow manually first.**

Before scheduling, run a task in your project:

```
Read the most recent CSV file in weekly-data/ and generate this week's report
following the project instructions. Save it to weekly-summaries/.
```

Review the output. Does it follow your instructions? Are the tables formatted correctly? Is the executive summary useful? Refine your project instructions if needed.

**Step 3: Schedule the task.**

Once the manual run produces good results, click **Scheduled** in the sidebar, then **+ New task**:

- **Name**: "Weekly Marketing Report"
- **Frequency**: Weekly
- **Prompt**: "Read the most recent CSV file in weekly-data/ and generate this week's report following the project instructions. Save it to weekly-summaries/."
- **Working folder**: Your project's folder

Click **Save**. Every week, Claude generates your report automatically. The results wait in your weekly-summaries folder when you arrive Monday morning.

---

## Cowork Scheduling vs. Claude Code Scheduling

If you completed Lesson 24, you already know Claude Code's `/loop` skill and its scheduling tiers. Cowork offers the same concept through a different interface. Here is how they compare:

| Feature                   | Claude Code `/loop`                  | Cowork Desktop Scheduling               |
| :------------------------ | :----------------------------------- | :-------------------------------------- |
| **Interface**             | Terminal command                     | Visual sidebar + `/schedule` skill      |
| **Persistence**           | Session-scoped (dies on exit)        | Survives app restarts                   |
| **Frequency options**     | Any cron expression                  | Hourly, daily, weekly, weekdays, manual |
| **Runs while you sleep?** | No (session must be open)            | No (machine must be awake, app open)    |
| **Best for**              | Quick polling during active dev work | Recurring knowledge-work automations    |
| **Task limit**            | 50 per session                       | No documented limit                     |
| **Expiry**                | 3-day auto-expiry for recurring      | No expiry (runs until paused/deleted)   |

The key insight: `/loop` is for developers doing quick, throwaway monitoring during a coding session. Cowork scheduling is for knowledge workers building persistent, recurring automations for ongoing work. Same concept (Claude runs a task on a schedule), different audience and persistence model.

For tasks that must run even when your computer is off, both interfaces fall short. Cloud scheduled tasks (available through Claude Code's `/schedule` command or the claude.ai web interface) run on Anthropic's infrastructure and execute regardless of whether your machine is on.

---

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Exercise 1: Design Your Project Instructions**

> "I want to create a Cowork project for [describe your work area: weekly reporting, content writing, research, client management, etc.]. Help me write project instructions that specify: (1) the tone and format Claude should use, (2) constraints on what Claude should and should not do, (3) domain context that Claude needs to know. Make the instructions specific enough that a new team member could follow them without asking questions."

**What you're learning:** Project instructions are standing orders, not one-time prompts. Writing good instructions is a design skill: too vague and Claude improvises in ways you don't want; too rigid and Claude cannot adapt to variations in your tasks. This exercise builds the habit of thinking about instructions as persistent infrastructure, not throwaway text.

**Exercise 2: Test Project Memory**

> "I just created a Cowork project. In my first task, I told Claude three specific things: my name, a formatting preference, and a key metric target. Now I'm in a new task in the same project. Ask Claude what it remembers about me. Then ask: what happens to this memory if I create a different project? Why is memory scoped per-project instead of global?"

**What you're learning:** Project memory is what makes projects more than folders. Understanding its scope (per-project, not global) helps you decide how to organize your work. One big project with everything in it gives Claude maximum memory, but mixed contexts; several focused projects keep things clean but memory stays separate.

**Exercise 3: Schedule Your First Recurring Task**

> "I want to automate a task I currently do manually every [day/week/month]. The task is: [describe it]. Help me: (1) write the Cowork prompt for this task, (2) choose the right frequency, (3) identify what could go wrong if my laptop is asleep when the task is supposed to run, and (4) decide whether I need Cowork desktop scheduling, Claude Code /loop, or cloud scheduling based on my requirements."

**What you're learning:** Choosing the right scheduling tier is a design decision, not just a feature toggle. This exercise forces you to think about reliability requirements (does it matter if the task is delayed?), persistence (does it survive a restart?), and interface preference (terminal vs. visual). The comparison table from this lesson becomes a practical decision tool.

---

## What's Next

You have organized your work into projects with persistent memory and set up recurring automations. The next lessons explore more Cowork capabilities that extend your Digital FTE's reach even further.

## Flashcards Study Aid

<Flashcards />
