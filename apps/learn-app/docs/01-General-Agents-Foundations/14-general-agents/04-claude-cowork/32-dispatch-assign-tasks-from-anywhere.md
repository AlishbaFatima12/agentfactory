---
slug: /General-Agents-Foundations/general-agents/dispatch-assign-tasks-from-anywhere
title: "Dispatch: Assign Tasks from Anywhere"
sidebar_position: 32
chapter: 14
lesson: 32
duration_minutes: 30
chapter_type: Practical
running_example_id: dispatch-mobile

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Students send real tasks from their phone to Claude on their desktop, observe autonomous execution, and iterate on multi-step task design"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA (Institutional Integration Layer)
skills:
  - name: "Remote Task Delegation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can send a task from a mobile device to Claude on their desktop and verify that the task was executed correctly"

  - name: "Multi-Step Task Design"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can decompose a complex goal into a multi-step Dispatch task and evaluate whether Claude broke it down correctly"

  - name: "Cross-Device AI Workflow"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can explain how Dispatch maintains persistent context across devices and sessions, and identify which tasks route to Code vs Cowork"

learning_objectives:
  - objective: "Send a task from the Claude mobile app that executes autonomously on the desktop"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates a completed Dispatch task visible on both mobile and desktop"
  - objective: "Design multi-step tasks that Claude breaks into subtasks and executes sequentially"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student compares Claude's task breakdown against their own expected breakdown"
  - objective: "Combine Dispatch with plugins and connectors to complete research-and-summarize workflows"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student triggers a Dispatch task that uses at least one plugin or connector and produces an output file"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (Dispatch persistent thread, mobile-to-desktop task routing, Code vs Cowork routing, push notifications for approval, Dispatch + plugins) - within B1 limit of 7"

differentiation:
  extension_for_advanced: "Set up a Dispatch workflow that chains computer use with a plugin: e.g., 'open my dashboard app, screenshot it, analyze the data, write a summary memo'"
  remedial_for_struggling: "Focus on sending one simple task (rename a file, write a short document) and confirming it completed before attempting multi-step tasks"

# Generation metadata
generated_by: "writer-dispatch agent"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
workflow: "manual"
version: "1.0.0"

# Legacy compatibility (Docusaurus)
prerequisites:
  - "Completion of Lesson 26: Getting Started with Cowork"
  - "Claude Desktop app installed on macOS or Windows"
  - "Claude mobile app installed on iOS or Android"
  - "Pro or Max subscription plan"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 9
  session_title: "Remote Task Assignment with Dispatch"
  key_points:
    - "Dispatch is a persistent conversation thread that lives in the Cowork tab; it retains context across tasks so Claude remembers what you asked last time"
    - "Claude automatically routes tasks: development work (fix bugs, run tests, open PRs) goes to Code sessions; knowledge work (research, documents, spreadsheets) stays in Cowork"
    - "The mobile-to-desktop chain means instructions from your phone trigger real actions on your computer, including reading, moving, or deleting local files and using connected services"
    - "Push notifications on mobile tell you when a task finishes or when Claude needs your approval to continue"
  misconceptions:
    - "Students think Dispatch is a separate app or product: it is a feature within the Cowork tab of the Claude Desktop and mobile apps"
    - "Students assume they can create multiple Dispatch threads: Dispatch maintains a single continuous conversation, not multiple parallel threads"
    - "Students expect Dispatch to work when their desktop computer is asleep: the desktop must be awake and the Claude app must be running for Dispatch tasks to execute"
  discussion_prompts:
    - "You are commuting and remember three things you need Claude to handle before you arrive at the office. How would you structure those as Dispatch tasks versus sending them as a single message?"
    - "What safety precautions would you take before enabling Dispatch to access your local files from your phone?"
  teaching_tips:
    - "Have students pair up: one sends a Dispatch task from their phone while the other watches the desktop session appear in real time"
    - "Demonstrate the Code vs Cowork routing by sending one development task ('fix this bug') and one knowledge task ('summarize this document') and showing where each lands"
    - "The 'wow moment' is watching a task you typed on the train appear as a completed file on your desktop: time the demo so students see the full round trip"
  assessment_quick_check:
    - "What is the difference between a Dispatch task and a regular Cowork session?"
    - "Name two conditions that must be true for a Dispatch task to execute on your desktop"
    - "Why does Dispatch route 'fix the login bug' to Code but 'write a project brief' to Cowork?"
---

# Dispatch: Assign Tasks from Anywhere

You are on the train. You remember that a report needs updating before tomorrow's meeting. You pull out your phone, type "Update the Q3 revenue report with the latest numbers from the finance folder and email me when it's done," and put your phone away. By the time you reach the office, the report is sitting on your desktop, finished.

That is Dispatch. You tell Claude what to do from wherever you are, and Claude works on it using your desktop computer. No remote desktop app. No VPN. No laptop in your backpack. Just a message from your phone and an AI employee that gets to work.

---

## What Dispatch Is

Dispatch is a persistent conversation thread inside the Cowork tab. Unlike regular Cowork sessions (which are one-off conversations), Dispatch keeps a single continuous thread. Claude remembers what you asked last time, what files you worked on, and what your preferences are. Think of it as a running dialogue with your AI employee that never resets.

When you send a task through Dispatch, Claude decides how to handle it:

| Task Type            | Where It Runs                                            | Examples                                                          |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------------------- |
| **Development work** | Code session (appears in Code tab with a Dispatch badge) | Fix a bug, run tests, update dependencies, open a PR              |
| **Knowledge work**   | Cowork                                                   | Write a memo, research a topic, organize files, generate a report |

You do not need to specify which environment to use. Claude reads your task and routes it automatically.

---

## Step 1: Set Up Dispatch

You need four things before your first Dispatch task:

1. **Claude Desktop app** (latest version) on macOS or Windows, downloaded from claude.com/download
2. **Claude mobile app** (latest version) on iOS or Android
3. **Pro or Max subscription** (Dispatch is not available on free, Team, or Enterprise plans)
4. **Both devices signed into the same Claude account**

### Pair Your Devices

1. Open the Claude Desktop app on your computer
2. Click the **Cowork** tab in the left sidebar
3. Click **Dispatch** in the left panel
4. Select **Get started** on the introductory screen
5. Toggle your preferences for file access and computer wake settings
6. Click **Finish setup**

Now open the Claude mobile app on your phone. Navigate to Cowork and tap **Dispatch**. You should see the same thread on both devices.

:::caution Your Desktop Must Stay Awake
Dispatch tasks execute on your desktop computer. If your computer is asleep or the Claude app is closed, tasks will queue but will not execute until the desktop is active again.
:::

---

## Step 2: Send Your First Task

Pick up your phone. Open the Claude mobile app, go to Dispatch, and type:

> Create a file called "dispatch-test.md" on my desktop with the content: "This file was created by Claude via Dispatch from my phone. The time is [current time]."

Send it. Now watch your desktop.

Within seconds, you should see activity in the Cowork tab. Claude reads your instruction, creates the file, and confirms completion. A push notification arrives on your phone when the task finishes.

Go find the file on your desktop. It exists. You created it from your phone without touching your computer.

**What just happened:** Your phone sent a message to Dispatch. Claude, running on your desktop, received it, executed the file creation using Cowork's local file access, and notified you on mobile when finished.

---

## Step 3: Send a Multi-Step Task

Single-step tasks are useful, but the real power appears when you give Claude something complex. From your phone, type:

> I need to prepare for tomorrow's team meeting. Do these three things:
>
> 1. Look in my Documents/meeting-notes folder and find the most recent meeting notes
> 2. Summarize the key action items from those notes
> 3. Create a new file called "meeting-prep.md" with the summary and a suggested agenda for tomorrow based on the unfinished action items

Send it and watch your desktop. Notice how Claude:

- **Reads your multi-step instruction** and plans an approach
- **Explores your file system** to find the right folder and files
- **Reads the content** of the most recent notes
- **Synthesizes** the information into a summary
- **Creates the output file** with both the summary and a suggested agenda

The result is a meeting prep document you can review when you sit down at your desk.

:::tip Approval Notifications
If Claude encounters a step that requires your permission (like deleting files or accessing a new app), you receive a push notification on your phone. You can approve or deny directly from the notification without going to your desktop.
:::

---

## Step 4: Use Dispatch with Plugins and Connectors

Dispatch has access to everything your Cowork environment has: plugins, connectors, file access, and (if enabled) computer use. This means you can chain capabilities together from your phone.

If you have connectors set up (Lesson 29 covered plugins and connectors), try this from your phone:

> Research the latest developments in [a topic you care about] using the web. Summarize the top 5 findings in a document called "research-summary.md" in my Documents folder. Include source links for each finding.

Claude uses your configured connectors to search the web, reads the results, synthesizes them, and writes the output file. All from a message you typed while waiting for coffee.

### Combining Dispatch with Code Sessions

Dispatch can also spawn Code sessions for development tasks. Try:

> Open a Code session in my project at ~/Documents/my-project. Run the test suite and create a summary of any failing tests.

This task routes to a Code session (you will see it appear in the Code tab with a **Dispatch** badge). Claude opens the project, runs your tests, and reports back through the Dispatch thread. You can follow along on your phone or check the Code session on your desktop later.

---

## How Context Persists

Unlike regular Cowork sessions, Dispatch maintains memory across tasks. If you sent the meeting prep task earlier, you can now type:

> Add a section to the meeting-prep.md file about the budget discussion we had last week.

Claude remembers the file it created, where it lives, and what it contains. It also remembers your preferences over time: how you like documents formatted, which folders you use most, what level of detail you prefer.

This persistent context is what makes Dispatch feel like a real assistant rather than a tool you have to re-explain everything to each time.

---

## What Dispatch Cannot Do

Be aware of these limitations:

| Limitation                              | Details                                                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Single thread only**                  | You cannot create multiple parallel Dispatch conversations. It is one continuous thread.                             |
| **Desktop must be awake**               | Your computer must be on and the Claude app running. Closing the lid stops execution.                                |
| **Pro or Max plan required**            | Not available on free, Team, or Enterprise plans.                                                                    |
| **Computer use is outside the sandbox** | If you enable computer use through Dispatch, Claude operates on your actual desktop, not in a sandboxed environment. |

### Safety Considerations

Instructions from your phone trigger real actions on your computer. Before enabling Dispatch with full file access:

- **Review which folders Dispatch can access** in your Cowork settings
- **Understand that file operations are real**: creating, moving, and deleting files from your phone affects your actual file system
- **Test with low-stakes tasks first** (like creating a text file) before sending tasks that modify important data
- **Use the approval workflow**: keep permissions set so Claude asks before destructive operations

---

## Try With AI

**Your First Remote Workflow:**

> "I want to test Dispatch end-to-end. From my phone, send Claude this task: 'Create a folder called dispatch-demo in my Documents folder. Inside it, create three files: priorities.md listing my top 3 work priorities this week, schedule.md with a rough daily schedule for the week, and questions.md listing things I need to follow up on.' After Claude completes it, check the results on your desktop and evaluate: did Claude make reasonable guesses about your priorities, or did it ask for clarification?"

**What you're learning:** End-to-end Dispatch workflow, from mobile task assignment through autonomous execution to desktop verification. You are testing whether your task description was specific enough for Claude to act on without further input.

**Chain Dispatch with Your Tools:**

> "Think of a weekly task you do that involves gathering information from one place and producing a document in another. Examples: pulling metrics from a dashboard and writing a summary, collecting notes from a folder and creating an action list, or reviewing recent files and writing a status update. Write the Dispatch message you would send from your phone to automate this task. Be specific about input sources, output format, and where to save the result."

**What you're learning:** Task design for remote delegation. The skill is decomposing a real workflow into a single Dispatch message that contains enough context for Claude to execute without follow-up questions. Vague tasks produce vague results; specific tasks produce useful output.

**Dispatch vs Direct Cowork:**

> "Compare these two approaches to the same task. Approach A: sit at your desktop, open Cowork, and interactively guide Claude through organizing your Downloads folder. Approach B: send a Dispatch message from your phone saying 'Organize my Downloads folder by file type into subfolders: documents, images, archives, installers. Delete anything older than 6 months that is clearly temporary. Create a summary of what you did.' What are the tradeoffs? When would you choose interactive Cowork, and when would you choose Dispatch?"

**What you're learning:** Choosing the right interaction mode for the task. Interactive Cowork gives you real-time control and the ability to steer mid-execution. Dispatch gives you fire-and-forget convenience. The right choice depends on whether the task needs your judgment during execution or just a clear specification upfront.

---

## What's Next

You have sent tasks from your phone and watched Claude execute them on your desktop. The next lesson takes this further: Computer Use lets Claude interact with your screen directly, clicking buttons, filling forms, and operating apps that have no API. If Dispatch is telling your AI employee what to do, Computer Use is watching it sit at your desk and do the work.

## Flashcards Study Aid

<Flashcards />
