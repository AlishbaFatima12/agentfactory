---
slug: /Business-Domain-Agent-Workflows/productivity-agentic-office/two-plugins-one-system
sidebar_position: 2
title: "Two Plugins, One System"
description: "Install Anthropic's official Productivity plugin and the Panaversity Agentic Office plugin, run /productivity:start to set up task and memory infrastructure, and run /agentic-office:setup to create the work.local.md template — building the complete foundation for Lessons 3-14."
keywords:
  [
    "productivity plugin",
    "agentic office plugin",
    "plugin installation",
    "work.local.md",
    "TASKS.md",
    "CLAUDE.md",
    "dashboard.html",
    "two plugins",
    "plugin setup",
    "Cowork plugins",
    "knowledge-work-plugins",
    "agentic office",
  ]
chapter: 39
lesson: 2
duration_minutes: 22

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Configure a Two-Plugin Productivity Stack in Cowork"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can install both the official Productivity plugin and the Agentic Office plugin in Cowork, run the initialisation commands for each, and verify that all expected files and directories are created — demonstrating that both plugins are active and ready"

  - name: "Distinguish Between Task/Memory Infrastructure and Professional Intelligence Layer"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can explain the division of responsibility between the two plugins — which plugin handles task CRUD and file infrastructure versus which plugin handles intelligence, prioritisation, delegation, and agent orchestration — and give a concrete example of a task that belongs to each"

learning_objectives:
  - objective: "Install both plugins and verify that /productivity:start creates TASKS.md, CLAUDE.md, memory/, and dashboard.html, and that /agentic-office:setup creates work.local.md"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can confirm all expected files exist after running both initialisation commands, and can describe what each file is for without referring to the lesson text"

  - objective: "Explain the division of responsibility between the official Productivity plugin and the custom Agentic Office plugin, with at least two concrete examples of tasks each handles"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can correctly route a described task to the right plugin (e.g., 'add a task' → official plugin; 'run a brain dump and prioritise' → custom plugin) and explain why without prompting"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Official productivity plugin — TASKS.md + CLAUDE.md + memory/ + dashboard.html infrastructure"
    - "Custom agentic-office plugin — 9 skills + 4 agents + work.local.md professional intelligence layer"
    - "Division of responsibility — task/memory CRUD vs task/meeting/delegation/digest intelligence"
    - "Zero trigger overlap — why the two plugins use different natural language triggers by design"
  assessment: "4 concepts at B1 level. This is a setup lesson — the cognitive load is intentionally lighter than the surrounding lessons. The key conceptual point (the two plugins serve different functions and must not overlap) is established here and reinforced throughout the chapter. The installation steps themselves carry low cognitive load; the conceptual framing is the lesson's real work."

differentiation:
  extension_for_advanced: "Read the official Productivity plugin's SKILL.md files for task-management and memory-management after installation. Then read the custom Agentic Office plugin's workplace-context SKILL.md. Map the exact boundary: which natural language phrases trigger each skill? Where does the official plugin end and the custom plugin begin? This mapping will help you use the two-plugin system fluently in later lessons."
  remedial_for_struggling: "Focus on getting both plugins installed and the initialisation commands run. If /productivity:start creates the four files and /agentic-office:setup creates work.local.md, you are ready for Lesson 3. The conceptual distinction between the plugins will become clear through use in Lessons 3-14 — do not worry about memorising the division of responsibility now."

teaching_guide:
  key_points:
    - "The two plugins are complementary, not competing. The official plugin owns the infrastructure (TASKS.md, CLAUDE.md, memory/, dashboard.html). The custom plugin owns the intelligence layer (prioritisation, delegation, digests, meetings, agents). Both are required."
    - "The zero trigger overlap rule is critical. The official plugin responds to 'task', 'remember', 'start', 'update', 'sync'. The custom plugin uses 'brain dump', 'prioritise', 'delegate', 'daily digest', 'meeting prep', 'workplace memory', 'person brief'. Never mix these."
    - "The work.local.md file created by /agentic-office:setup is empty at this point — it is a template waiting to be filled. The real work is in Lessons 3-5, where the reader populates all four layers. The installation lesson's job is to create the infrastructure."
    - "Dashboard.html is a local file that the official plugin maintains. It is a board view of tasks and memory — useful but separate from the RAG-based executive dashboard introduced in Lesson 10."
  misconceptions:
    - "The two plugins do the same thing and you only need one. Correction: they serve fundamentally different functions. The official plugin is infrastructure — without it, there is no TASKS.md for the intelligence layer to work with. The custom plugin is intelligence — without it, the infrastructure is just files."
    - "work.local.md replaces CLAUDE.md. Correction: they serve different purposes. CLAUDE.md is the official plugin's hot cache — optimised for fast retrieval of working memory during a session. work.local.md is the custom plugin's four-layer professional memory — optimised for structured organisational context. Both exist in the same system."
    - "Installing the plugins once is sufficient. Correction: the plugins need to be activated in each Cowork session, but the files they create (TASKS.md, CLAUDE.md, memory/, work.local.md) persist between sessions. This is the point — the data persists even when the session ends."
  discussion_prompts:
    - "The official plugin's /update command can sync from external tools — Slack, email, calendar, Asana, Linear, Notion. If you connected these to your Cowork session, what would the morning /productivity:update scan look like? What would it surface that you currently have to find manually?"
    - "After installing both plugins and running the initialisation commands, what does your session know about you that it did not know before? What does it still not know — and where will that information come from?"
  teaching_tips:
    - "Walk through the installation steps in real time if possible — Cowork plugin installation is straightforward but the sidebar navigation can confuse readers who are new to it."
    - "When showing the files created by /productivity:start, emphasise that dashboard.html is a local file that opens in the browser — not a cloud dashboard. This prevents confusion about data residency."
    - "The work.local.md template shown after /agentic-office:setup should feel like a preview of the next three lessons. The reader should leave this lesson curious about what goes into each section — that curiosity is the motivation for the work in L03-L05."
---

# Two Plugins, One System

Chapter 39 uses two plugins working together. The first — Anthropic's official Productivity plugin — handles the basic infrastructure: task tracking, memory files, and a visual dashboard. The second — the Agentic Office plugin — adds the professional intelligence layer that transforms basic tracking into executive-grade workplace awareness.

They are not competing tools. They are the storage layer and the intelligence layer of the same system. You need both.

This lesson installs both plugins, runs the initialisation commands, and verifies that the full infrastructure is in place before Lesson 3 begins the real work.

## The Division of Responsibility

Before installing anything, it is worth being precise about what each plugin does — and what it deliberately does not do.

| Concern                        | Official `productivity`                       | Custom `agentic-office`                                                      |
| ------------------------------ | --------------------------------------------- | ---------------------------------------------------------------------------- |
| Task list CRUD                 | `/productivity:start`, `/productivity:update` | —                                                                            |
| Memory hot cache               | CLAUDE.md (working session memory)            | —                                                                            |
| Memory deep storage            | memory/ directory                             | —                                                                            |
| Visual dashboard               | dashboard.html (board view)                   | —                                                                            |
| Four-layer professional memory | —                                             | work.local.md                                                                |
| Task intelligence              | —                                             | Brain dump → P1/P2/P3 sort                                                   |
| Delegation quality             | —                                             | Delegation records + handoff comms                                           |
| Morning digest                 | —                                             | Daily briefing assembly                                                      |
| Meeting support                | —                                             | Three-phase model (before/during/after)                                      |
| Executive dashboard            | —                                             | RAG status across all projects                                               |
| Cross-domain context           | —                                             | Context loading for other domain agents                                      |
| Persistent agents              | —                                             | 4 agents (Chief of Staff, Memory Keeper, Meeting Intelligence, Work Tracker) |

The boundary is precise by design. The official plugin responds to natural language triggers like "add a task," "remember this," "who is," and "start." The custom plugin responds to triggers like "brain dump," "prioritise," "delegate," "daily digest," and "workplace memory." There is no overlap — the two plugins never compete for the same input.

:::info Why Two Plugins?
The official Productivity plugin is Anthropic's supported infrastructure layer — it handles the file system, the dashboard, and basic task and memory operations. It is well-maintained and reliable. The custom Agentic Office plugin builds the professional intelligence layer on top of that infrastructure — adding the context-aware reasoning, delegation quality, meeting intelligence, and agent orchestration that transform basic tracking into a Digital Chief of Staff. Separating infrastructure from intelligence means each plugin stays focused, maintainable, and upgradeable independently.
:::

## Install the Official Productivity Plugin

**In Cowork:**

1. Open the Cowork sidebar
2. Navigate to **Customize → Browse plugins**
3. Find **Productivity** in the plugin list
4. Click **Install**

**In Claude Code (alternative):**

```
claude plugins add knowledge-work-plugins/productivity
```

Once installed, the plugin makes four skills available: `task-management`, `memory-management`, and the `/productivity:start` and `/productivity:update` commands.

## Run `/productivity:start`

The first command initialises your task and memory infrastructure. Run it now:

```
/productivity:start
```

Claude will create four things:

| Created          | Purpose                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| `TASKS.md`       | The task list — Claude reads and writes to this file; add tasks naturally and the skill keeps it structured |
| `CLAUDE.md`      | The hot cache — Claude's working session memory, loaded at the start of every conversation                  |
| `memory/`        | The deep storage directory — longer-form memory files that persist between sessions                         |
| `dashboard.html` | A local HTML file providing a board view of your tasks and a live view of Claude's workplace knowledge      |

After running `/productivity:start`, you will be prompted for some initial context: your role, your team, your current priorities. This seeds the initial CLAUDE.md with your working memory. Answer these questions — they will save you time in later lessons.

**Expected output (abbreviated):**

```
✓ Created TASKS.md
✓ Created CLAUDE.md
✓ Created memory/ directory
✓ Created dashboard.html — open in your browser to see your workspace

Tell me about your work context to get started:
What is your role and organisation?
Who are your key team members?
What are your current top priorities?
```

Open `dashboard.html` in your browser. At this point it will be sparse — a few placeholder sections for tasks and memory. By Lesson 10, it will show a fully populated executive dashboard. For now, it confirms that the official plugin infrastructure is working.

## Install the Agentic Office Plugin

The Agentic Office plugin is hosted in the Panaversity business plugins marketplace.

**In Cowork:**

1. Open the Cowork sidebar
2. Navigate to **Customize → Browse plugins → Personal**
3. Click the **+** button
4. Select **Add marketplace from GitHub**
5. Enter: `https://github.com/panaversity/agentfactory-business-plugins`
6. Find **Agentic Office** in the plugin list
7. Click **Install**

Once installed, nine skills become available: `workplace-context`, `workplace-search`, `task-intelligence`, `delegation`, `digest`, `meeting-intelligence`, `progress-tracker`, `context-loader`, and `executive-brief`. Four agents also become available: `chief-of-staff`, `memory-keeper`, `meeting-intelligence-agent`, and `work-tracker`.

## Run `/agentic-office:setup`

The setup command creates your workplace memory template:

```
/agentic-office:setup
```

This creates `work.local.md` from the plugin's template — an empty four-layer configuration file structured for your professional context.

**The four layers in the template:**

```
## Layer 1: Personal
  name, role, working_style, decision_making, current_focus,
  working_hours, primary_tools, communication_preference

## Layer 2: Team (People)
  people:
    - name, role, reports_to, communication, current_focus,
      priorities, note, sensitivity

## Layer 3: Projects
  projects:
    - name, codename, status, priority, owner, description,
      current_milestone, next_milestone, at_risk, decisions,
      key_contacts

## Layer 4: Organisational Memory
  terminology: { "Term": "Definition" }
  meeting_rhythm: [ recurring meetings ]
  culture: { values, decision_making, communication, unwritten_rules }
```

This file is empty now. Lessons 3, 4, and 5 will populate it layer by layer. By the end of Lesson 5, work.local.md will contain everything Claude needs to operate as a knowledgeable colleague — your working style, your key people, your active projects, your organisational terminology and culture.

:::note Keep This File
work.local.md is your primary configuration asset for the rest of the chapter. Every lesson from here builds on it. Do not start a new file or delete this one.
:::

## How the Two Plugins Work Together

The official plugin's CLAUDE.md and memory/ files hold the raw working data. The custom plugin's work.local.md holds the structured, four-layer professional context.

Here is how they interact in practice:

**A task is added** → Official plugin's `task-management` skill writes it to TASKS.md. The task is stored and queryable.

**A brain dump is processed** → Custom plugin's `task-intelligence` skill reads the brain dump, pulls project context from work.local.md (Layer 3), and produces a P1/P2/P3 classified list. The classified tasks are written back to TASKS.md via the official plugin.

**A morning digest is assembled** → Custom plugin's `digest` skill reads today's tasks from TASKS.md (via official plugin), pulls the day's meetings from calendar context, reads current priorities from work.local.md Layer 1, and assembles a briefing that references the real people, projects, and priorities from Layer 2, 3, and 4.

The official plugin maintains the files. The custom plugin makes those files intelligent.

## Verify Both Plugins Are Active

With both plugins installed and initialised, run a quick verification:

```
/productivity:update
```

You should see the official plugin triage any stale tasks and check memory for gaps. If you connected external tools (Slack, email, calendar) during setup, it will scan those sources.

Then:

```
/agentic-office:workplace-context
> What do you currently know about my organisation?
```

At this point, the response will be limited — work.local.md is empty. The skill will acknowledge this and offer to help you begin filling it in. This is the correct behaviour. It confirms the plugin is active and reading from work.local.md.

Both commands responding is your verification that the system is ready.

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Verify your plugin installation with these two commands and observe what each plugin knows.

```
/productivity:start
```

After running, confirm: TASKS.md, CLAUDE.md, memory/, and dashboard.html all exist. Then:

```
/agentic-office:setup
```

Confirm: work.local.md exists and contains the four-layer template structure.

**What you are learning:** The installation and initialisation steps are a one-time investment. After this lesson, both plugins run in every subsequent Cowork session — the infrastructure persists, the memory files persist, and every lesson from here builds on this foundation.

**Adapt**: If you already have a task list in another tool, test what the official plugin can see.

```
/productivity:update --comprehensive
```

If you have connected Slack, email, calendar, or a project management tool (Asana, Linear, Notion, Monday, ClickUp), the comprehensive update will scan for missed action items and suggest new memory entries. If you have not connected external tools, the update will work from what you have shared in the session.

**What you are learning:** The official plugin's MCP connectors are optional but powerful — they reduce the manual work of keeping TASKS.md current. Even without connectors, the plugin works well when you add tasks naturally in conversation. The connectors automate what the plugin can already do manually.

**Apply**: Open dashboard.html in your browser and observe the empty dashboard structure.

```
Open the dashboard.html file that /productivity:start created.
What sections does the empty dashboard have?
What data would need to exist for each section to be useful?
Which sections will be populated after Lesson 3?
Which sections require Lessons 10-14 to complete?
```

Ask Claude this question about the dashboard structure. The answer will give you a preview of the chapter's arc — the empty dashboard is a map of what you are building.

**What you are learning:** The dashboard starts empty because the memory starts empty. As you fill work.local.md in Lessons 3-5 and deploy skills in Lessons 6-11, the dashboard fills in. By Lesson 10, what is currently an empty template will be a real-time view of your professional context. The empty dashboard is motivating, not discouraging — it shows exactly what the chapter is building.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 3: Workplace Memory Architecture →](./03-workplace-memory-architecture.md)
