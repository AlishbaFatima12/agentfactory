# Writer Brief: Foundations (L01, L02, L03)

**Read first:** `shared-brief.md` (required context for all writers)

---

## L01: The Context Problem

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/01-the-context-problem.md`

### Source Material

- Governing spec: "Introduction: The Context Problem" + "The Four Context Failure Modes" (lines 1-41)
- Opening quote: use the Chief of Staff quote verbatim from the governing spec introduction
- Do NOT reference any plugin or skill — this is a concept-only lesson

### What This Lesson Does

Sets up the problem that the entire chapter solves. The reader arrives having deployed domain agents in Chapters 28-38. Those agents are brilliant in isolation but start every session from zero — no memory of yesterday, no knowledge of org terminology, no awareness of project priorities.

### Structure

1. **Opening narrative** — The Chief of Staff quote from the governing spec. Then: "This gap — the distance between how a sophisticated AI answers a question in the abstract and how a knowledgeable colleague answers the same question in context — is the Context Problem."
2. **What a good colleague knows vs. what a chatbot knows** — Contrast table (use governing spec's list)
3. **Failure Mode 1: Terminology Blindness** — "Boulders" vs. "OKRs", "Digital FTE" vs. "AI agent", "Project Nighthawk" vs. "the Karachi expansion". Every output requires manual translation.
4. **Failure Mode 2: People Anonymity** — Every mention of "Omar" requires re-explaining who he is, his communication style, that he needs lead time. A colleague would know after one interaction.
5. **Failure Mode 3: Project Amnesia** — No awareness of what is in flight. Every project briefing starts from scratch. No history, no decisions, no risks.
6. **Failure Mode 4: Priority Blindness** — Claude treats all requests equally. Does not know that AgentFactory is P1 and anything connected to it should be treated with elevated urgency.
7. **The common thread** — All four are information problems. The data exists. The failure is the gap between data and connected, actionable intelligence.
8. **What Chapter 39 builds** — Brief foreshadow: the Workplace Memory Architecture + 9 skills + 4 agents that close this gap.

### Exercise Design

NO exercises in this lesson — it is a concept lesson. Include 3-tier Try With AI only.

### Try With AI Prompts

- **Reproduce:** Ask Claude to write a project update for "Project Nighthawk" without any context. Note how generic and useless it is. Then provide the context from the case study and ask again. Compare.
- **Adapt:** List the top 3 terms your organisation uses that a new hire would not understand. How many sessions per week do you spend re-explaining these to AI tools?
- **Apply:** Map each of the 4 failure modes to your own organisation. Which one costs you the most time?

### Duration

25-30 minutes

### Exit Criteria

Reader can name all 4 failure modes and identify which one is present in a described scenario.

---

## L02: Two Plugins, One System

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/02-two-plugins-one-system.md`

### Source Material

- Governing spec: "The Productivity Plugin Architecture" + "Installing the Plugin" (lines 45-82)
- Official plugin: `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/README.md`
- Official plugin skills: `task-management/SKILL.md`, `memory-management/SKILL.md`, `start/SKILL.md`, `update/SKILL.md`
- Architecture spec: Section 3 (Two-Plugin Architecture Summary)

### What This Lesson Does

Install both plugins, run `/productivity:start` to set up TASKS.md + CLAUDE.md + memory/ + dashboard.html, then run `/agentic-office:setup` to create the work.local.md template. The reader finishes with both plugins active and the infrastructure ready for Lessons 3-14.

### Structure

1. **Opening** — "Chapter 39 uses two plugins working together. The first — Anthropic's official Productivity plugin — handles the basic infrastructure: task tracking, memory files, and a visual dashboard. The second — the Agentic Office plugin — adds the professional intelligence layer that transforms basic tracking into executive-grade workplace awareness."
2. **Comparison table** — Side-by-side: what each plugin provides (use architecture spec Division of Responsibility table)
3. **Install the official Productivity plugin** — Step-by-step instructions (Cowork sidebar → Customize → Browse plugins → find Productivity → Install). Include the `claude plugins add knowledge-work-plugins/productivity` alternative for Claude Code users.
4. **Run `/productivity:start`** — Walk through what it creates: TASKS.md, CLAUDE.md, memory/, dashboard.html. Show expected output.
5. **Install the Agentic Office plugin** — Step-by-step (Cowork sidebar → Customize → Browse plugins → Personal → + → Add marketplace from GitHub → `https://github.com/panaversity/agentfactory-business-plugins` → find Agentic Office → Install)
6. **Run `/agentic-office:setup`** — Creates work.local.md from template. Show the empty template structure (Layer 1-4 sections).
7. **How they work together** — The official plugin's CLAUDE.md hot cache and memory/ deep storage hold the raw data. The custom plugin's work.local.md holds the structured, four-layer professional memory. The official plugin's task-management skill handles CRUD. The custom plugin's skills handle intelligence (prioritisation, delegation, digests, meetings).
8. **Verify installation** — Quick check: run `/productivity:update` and `/agentic-office:workplace-context` to confirm both plugins respond.

### Exercise Design

This is a setup lesson — the exercise IS the installation and verification.

### Try With AI Prompts

- **Reproduce:** Run `/productivity:start` and verify all four files/directories are created. Run `/agentic-office:setup` and verify work.local.md is created.
- **Adapt:** If you already have a task list in another tool (Asana, Linear, Notion), try running `/productivity:update` to see if it detects your existing tasks.
- **Apply:** Open dashboard.html in your browser. What does the empty dashboard look like? What will it look like when we have populated it in later lessons?

### Duration

20-25 minutes

### Exit Criteria

Both plugins installed, all infrastructure files created, reader has verified both plugins respond to commands.

---

## L03: Workplace Memory Architecture

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/03-workplace-memory-architecture.md`

### Source Material

- Governing spec: "Part One: Workplace Memory — The Four Layers" (lines 85-256) — especially Layer 1 (Personal) and Layer 4 (Organisational)
- Product spec: `products/memory.md` — TYPE 1 (Add Person), TYPE 3 (Add Term), TYPE 6 (Terminology Query)
- Template: `work.local.md.template` — Layer 1 and Layer 4 sections
- Plugin skill: `workplace-context` (maps from products/memory.md)

### What This Lesson Does

Teaches the 4-layer memory architecture conceptually, then has the reader BUILD Layers 1 (Personal) and 4 (Organisational) in work.local.md. Layers 2 (Team) and 3 (Projects) are built in L04 and L05 respectively — this lesson establishes the foundation.

### Structure

1. **Opening** — "The difference between a brilliant new hire and an experienced colleague is not intelligence. It is context." (From governing spec, line 89)
2. **The four layers** — Explain each layer's purpose with a table:
   - Layer 1: Personal — who you are, how you work
   - Layer 2: Team — who your people are, how to work with them
   - Layer 3: Projects — what is in flight, what matters, what is at risk
   - Layer 4: Organisational — terminology, structure, culture, unwritten rules
3. **Why memory matters more than intelligence** — The new hire vs. experienced colleague analogy
4. **Build Layer 1: Personal** — Walk through filling in the personal section of work.local.md using the case study (Zia Khan's profile). Show the YAML format. Then have the reader fill in their own.
5. **Build Layer 4: Organisational** — Walk through the terminology dictionary, meeting rhythm, culture, and unwritten rules using the case study. Show the Boulders, Digital FTE, Project Nighthawk entries. Emphasis: "The unwritten rules section is the highest-value section in the entire file."
6. **Test it** — Run `/agentic-office:workplace-context` with a query: "Describe our organisation, our key terminology, and our working culture using only what you know from work.local.md." Compare output with and without the memory layers.
7. **Sample output** — Show realistic workplace-context skill output using the case study data. Must use Boulders, CLEAR values, Executive Weekly, etc.

### Exercise Design

- Build Layer 1 (Personal): 15 minutes — fill in own profile
- Build Layer 4 (Organisational): 25 minutes — terminology dictionary (target 15-20 entries), meeting rhythm, culture/unwritten rules
- Test: run the workplace-context query and evaluate output

### Try With AI Prompts

- **Reproduce:** Fill in Layer 1 using the case study character (Zia). Then query: "What do you know about how I work?" Verify the output matches.
- **Adapt:** Fill in your own Layer 1. Ask: "Based on my working style, how should you format a project status update for me?" Does it match your preferences?
- **Apply:** List 10 terms your organisation uses that an outsider would not understand. For each, write: the term, what it means, when to use it, when NOT to use it. Add them to Layer 4.

### Duration

40-45 minutes

### Exit Criteria

Reader has Layers 1 and 4 of work.local.md populated with their own data. Workplace-context skill produces organisation-specific output.

:::note Keep This File
Your work.local.md is progressive — Lessons 4 and 5 build on what you create here. Do not start a new file.
:::
