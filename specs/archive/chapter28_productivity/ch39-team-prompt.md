# Chapter 39: Productivity & The Agentic Office — Team Prompt

Create an agent team to produce Chapter 39 of The AI Agent Factory book AND its companion plugin. This chapter is in Part 3, Section VI — People & Efficiency. It teaches readers to build a complete agentic office using two complementary plugins: the official Anthropic `productivity` plugin (installed) and a custom `agentic-office` plugin (built by this team).

**IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.**

**Source material:** `specs/drafts/chapter28_productivity/Chapter28_Productivity_Agentic_Office.md` (governing spec) + `specs/drafts/chapter28_productivity/productivity-skills/` (18 supporting files)

**Chapter output directory:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/`

**Plugin output directory:** `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/agentic-office/`

**What this content IS:** The integration chapter of Part 3 — it connects all domain agents from Chapters 28-38 into a coherent agentic office. It teaches senior professionals (chiefs of staff, executives, knowledge workers) to build a Digital Chief of Staff using workplace memory, task intelligence, meeting intelligence, delegation tracking, and 4 autonomous agents. Every lesson produces a working workflow, not theory.

---

## You Are the Team Lead

You coordinate. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies. You manage 8 teammates across 6 phases.

---

## PHASE 1: ARCHITECT (1 teammate, blocks everything)

**Task:** `ch39-architecture`
**Depends on:** nothing
**Model:** Opus

Spawn one teammate with this prompt:

---

"You are the architect teammate for Chapter 39: Productivity & The Agentic Office.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/Chapter28_Productivity_Agentic_Office.md` (FULL governing spec — only you read this entirely)
2. `specs/drafts/chapter28_productivity/productivity-skills/README.md` (skills library overview)
3. `specs/drafts/chapter28_productivity/productivity-skills/products/` (all 10 product skill specs)
4. `specs/drafts/chapter28_productivity/productivity-skills/agents/` (all 4 agent specs)
5. `specs/drafts/chapter28_productivity/productivity-skills/work.local.md.template` (the template)
6. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-operations-and-supply-chain/35-supply-chain-procurement/README.md` (reference chapter README format)
7. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-operations-and-supply-chain/35-supply-chain-procurement/01-why-supply-chains-break.md` (reference lesson format — YAML frontmatter, sections, Try With AI)
8. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/34-sales-revops-marketing/README.md` (reference for multi-plugin pattern)
9. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/README.md` (official productivity plugin — what it already provides)
10. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/skills/task-management/SKILL.md` (official task-management skill — understand what NOT to overlap)
11. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/skills/memory-management/SKILL.md` (official memory-management skill — understand what NOT to overlap)
12. `.specify/memory/constitution.md` (project constitution)

DELIVERABLES — write ALL of these to `specs/drafts/chapter28_productivity/architecture/`:

### 1. `architecture-spec.md` — Master Architecture Spec

Include:

- Complete directory skeleton for `39-productivity-agentic-office/` (README.md + 15 lesson files)
- Complete directory skeleton for `agentic-office/` plugin (skills, agents, template, evals, plugin.json)
- Source-to-output mapping: which sections of the governing spec map to which lessons
- YAML frontmatter template with all required fields (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- Lesson numbering: `01-the-context-problem.md` through `15-summary-quick-reference.md`
- Plugin file naming: skill directories, agent files, template
- Two-plugin architecture diagram (what official covers vs what custom covers)

### 2. `shared-brief.md` — Shared Writer's Brief

Include:

- Chapter identity: 'This is the integration chapter of Part 3. The reader is a senior professional building their agentic office.'
- Voice: direct, practical, evidence-based. Like a knowledgeable colleague briefing a peer. Use Panaversity/PIAIC case study throughout.
- Two-plugin rules: official `productivity` = basic task/memory CRUD. Custom `agentic-office` = professional intelligence layer. ZERO trigger word overlap.
- Case study characters: Zia Khan (CEO), Omar Farooq (Head of Analytics), Ayesha Raza (new hire), Dr. Sana Mirza (Head of Curriculum — new)
- Case study projects: AI Agent Factory (P1), Project Nighthawk/Karachi Expansion (P2), BankersAI Workshop (P2)
- Case study terminology: Boulders, Digital FTE, AgentFactory, The Compass, PIAIC Faisalabad SIG, TutorClaw, PHM
- Cross-reference mapping (CURRENT numbering): Finance=Ch28, Sales=Ch34, Supply Chain=Ch35, HR=Ch37 (planned), Operations=Ch38 (planned), Productivity=Ch39, Capstone=Ch40
- Sample output format: every skill-based lesson must include a REALISTIC sample output showing what the command produces (use case study data)
- Try With AI format: Always 3 tiers (Reproduce/Adapt/Apply), each with copyable prompts in code blocks and 'What you are learning:' explanation
- NO phantom imports: Do NOT add `import` statements for components that don't exist. `<Flashcards />` JSX tag is valid (no import needed). No `import Quiz` or `import Flashcards`.
- Fact claims: hedge statistics with 'industry surveys suggest' or 'studies estimate' — do not present unverified numbers as definitive
- Exercises use plugin command syntax: `/agentic-office:skill-name` or `/productivity:skill-name`

### 3. Per-writer briefs — one file per writer:

- `writer-foundations-brief.md` — L01, L02, L03
- `writer-skills-a-brief.md` — L04, L05, L06, L07
- `writer-skills-b-brief.md` — L08, L09, L10, L11
- `writer-agents-brief.md` — L12, L13, L14, L15

Each brief must contain:

- Exact file paths to create
- Source material references (which governing spec sections + which product/agent skill files to use as content blueprint)
- Lesson-specific notes (concepts, skills used, exercise design, sample outputs to include)
- Exit criteria (what 'done' means)

### 4. `plugin-builder-brief.md` — Plugin Builder Brief

Include:

- Full file inventory for `agentic-office/` plugin
- Source mapping: which spec file → which plugin file
- Naming rules: skill names 1-64 chars, lowercase+hyphens, match directory name
- Trigger word constraints: list EVERY trigger word from official plugin that is OFF-LIMITS
- Agent frontmatter requirements: name, description, tools, background: true, skills list
- Eval design: at minimum 9 golden file cases (one per skill)
- Validation checklist reference: `.claude/skills/chapter-design-pipeline/references/plugin-validation-checklist.md`
- 3 canonical docs to fetch BEFORE writing: https://code.claude.com/docs/en/plugins-reference, https://agentskills.io/specification, https://code.claude.com/docs/en/sub-agents

### 5. README.md for the chapter

Write directly to: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/README.md`

Follow the reference README format from Ch 35. Include:

- Title, sidebar_position, slides placeholder
- Chapter overview (from governing spec introduction)
- Prerequisites: Cowork access, install 2 plugins (official productivity + custom agentic-office)
- Lesson map table (15 lessons with key focus)
- Case studies table
- Agent Output Taxonomy (error types discovered progressively)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — [list of files created]'"

---

## PHASE 2: REFERENCE-BUILDER (1 teammate, blocks Phase 3)

**Task:** `ch39-reference-lesson`
**Depends on:** `ch39-architecture`
**Model:** Opus

Spawn one teammate with this prompt:

---

"You are the reference-builder teammate for Chapter 39: Productivity & The Agentic Office.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/architecture/architecture-spec.md` (architecture from Phase 1)
2. `specs/drafts/chapter28_productivity/architecture/shared-brief.md` (shared writer's brief)
3. `specs/drafts/chapter28_productivity/Chapter28_Productivity_Agentic_Office.md` lines covering Part Two: Task Management (the /task section — approximately lines 259-335)
4. `specs/drafts/chapter28_productivity/productivity-skills/products/task.md` (task skill blueprint)
5. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-operations-and-supply-chain/35-supply-chain-procurement/06-invoice-reconciliation.md` (high-quality reference lesson with skill-based exercise)

DELIVERABLE: ONE gold-standard lesson file:

Write: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/06-task-intelligence.md`

This is L06: Task Intelligence. It demonstrates ALL patterns that every lesson in this chapter must follow:

1. Complete YAML frontmatter with ALL required fields:
   - sidebar_position, title, description, keywords, chapter: 39, lesson: 6, duration_minutes
   - skills (with proficiency_level, category, bloom_level, digcomp_area, measurable_at_this_level)
   - learning_objectives (with proficiency_level, bloom_level, assessment_method)
   - cognitive_load (new_concepts count + list + assessment)
   - differentiation (extension_for_advanced, remedial_for_struggling)
   - teaching_guide (key_points, misconceptions, discussion_prompts, teaching_tips)

2. Narrative opening (2-3 paragraphs):
   - Real-world scenario using case study (Zia's brain dump of tasks)
   - Why task intelligence matters beyond basic task CRUD
   - Roadmap of what the lesson covers

3. Content body with:
   - H2 sections explaining concepts (brain dump pattern, P1/P2/P3 classification, critical path)
   - Comparison table: official task-management (CRUD) vs our task-intelligence (ANALYSIS)
   - Full sample output showing P1/P2/P3 classification using case study data
   - Info/note/caution boxes where appropriate

4. Exercise section:
   - Type: Applied Practice
   - Time: 60 minutes
   - Uses `/agentic-office:task-intelligence` command
   - Step-by-step: brain dump → paste into command → review P1/P2/P3 → identify critical path
   - Clear deliverable

5. Try With AI section (exactly 3 tiers):
   - Reproduce: basic brain dump capture
   - Adapt: modify to reader's own tasks
   - Apply: cross-domain task planning
   - Each with copyable prompt in code block + 'What you are learning:' explanation

6. Flashcards footer:

   ```
   ## Flashcards Study Aid

   <Flashcards />

   ---

   Continue to [Lesson 7: Delegation as a Discipline →](./07-delegation-as-a-discipline.md)
   ```

7. NO phantom imports. No `import` statements at all. `<Flashcards />` is used as a JSX tag without import.

This lesson is the QUALITY BENCHMARK. Every other writer must match it exactly in format, depth, and quality.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — 06-task-intelligence.md'"

---

## PHASE 3: PLUGIN-BUILDER + WRITERS (5 teammates, all parallel)

After Phase 2 completes, spawn ALL 5 teammates SIMULTANEOUSLY.

### 3A: PLUGIN-BUILDER

**Task:** `ch39-plugin-build`
**Depends on:** `ch39-reference-lesson`
**Model:** Opus

"You are the plugin-builder teammate for Chapter 39.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/architecture/architecture-spec.md` (architecture spec)
2. `specs/drafts/chapter28_productivity/architecture/plugin-builder-brief.md` (YOUR specific brief)
3. `specs/drafts/chapter28_productivity/architecture/shared-brief.md` (shared context)
4. `.claude/skills/chapter-design-pipeline/references/plugin-validation-checklist.md` (validation checklist)

THEN FETCH these 3 canonical docs via WebFetch:

- https://code.claude.com/docs/en/plugins-reference
- https://agentskills.io/specification
- https://code.claude.com/docs/en/sub-agents

THEN READ the source blueprints: 5. `specs/drafts/chapter28_productivity/productivity-skills/products/` — ALL 10 product files (content blueprints for 9 custom skills — task, memory, digest, brief, meeting, delegate, search, context, track) 6. `specs/drafts/chapter28_productivity/productivity-skills/agents/` — ALL 4 agent files (content blueprints) 7. `specs/drafts/chapter28_productivity/productivity-skills/work.local.md.template` (template to include)

ALSO READ the official plugin to understand what to NOT overlap: 8. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/skills/task-management/SKILL.md` 9. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/skills/memory-management/SKILL.md` 10. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/skills/start/SKILL.md` 11. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/skills/update/SKILL.md`

ALSO READ the reference plugin for structure: 12. `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/sales-revops-marketing/` — ls the structure, read plugin.json, one SKILL.md, one agent.md

YOUR SCOPE — build the entire `agentic-office` plugin at `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/agentic-office/`:

```
agentic-office/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── workplace-context/SKILL.md    (from products/memory.md — RENAMED, new triggers)
│   ├── task-intelligence/SKILL.md    (from products/task.md — RENAMED, new triggers)
│   ├── digest/SKILL.md               (from products/digest.md)
│   ├── brief/SKILL.md                (from products/brief.md)
│   ├── meeting-intelligence/SKILL.md (from products/meeting.md)
│   ├── delegation/SKILL.md           (from products/delegate.md)
│   ├── progress-tracker/SKILL.md     (from products/track.md — RENAMED)
│   ├── workplace-search/SKILL.md     (from products/search.md — RENAMED)
│   ├── context-loader/SKILL.md       (from products/context.md — RENAMED)
│   └── setup/SKILL.md               (NEW — setup command)
├── agents/
│   ├── chief-of-staff.md             (from agents/chief-of-staff-agent.md)
│   ├── memory-keeper.md              (from agents/memory-keeper-agent.md)
│   ├── meeting-intelligence-agent.md (from agents/meeting-intelligence-agent.md)
│   └── work-tracker.md              (from agents/work-tracker-agent.md)
├── work.local.md.template            (copy from source, verify complete)
├── evals/
│   ├── run.py                        (evaluation runner — follow banking plugin pattern)
│   └── cases/                        (9 golden file cases, one per skill)
├── README.md
└── LICENSE                           (Apache-2.0)
```

RULES:

1. ZERO trigger word overlap with official productivity plugin. OFF-LIMITS triggers: 'task', 'to-do', 'todo', 'what\'s on my plate', 'add task', 'complete task', 'remember', 'who is', 'add to memory', 'memory'. Use DIFFERENT trigger words for our skills.

2. Skill names: 1-64 chars, lowercase + hyphens only, must match directory name, no consecutive hyphens.

3. Skill descriptions: 1-1024 chars, must include trigger phrases.

4. Skill body: under 500 lines.

5. Agent frontmatter MUST include: name, description, tools (list what tools the agent needs), background: true, skills (list skills the agent uses from this plugin).

6. plugin.json: name 'agentic-office', version '1.0.0', author 'Panaversity — The AI Agent Factory'.

7. work.local.md references in skills: use `work.local.md` (NOT `work.local.md.template` — the template is what gets copied to create the working file).

8. .mcp.json: Create an EMPTY .mcp.json (just `{}`) — our plugin references the official productivity plugin's MCP connectors, doesn't duplicate them.

9. setup skill: Creates work.local.md from `${CLAUDE_PLUGIN_ROOT}/work.local.md.template`, configures agent integration section, opens with orientation message.

10. Each skill MUST reference work.local.md for context loading (STEP 2 or equivalent in each skill).

11. After writing ALL files, validate against the plugin-validation-checklist.md. Run /skill-validator on each SKILL.md.

12. Evals: create run.py following the pattern from `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/evals/run.py`. Create 9 golden file cases (one per skill) that test basic routing and output format.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'PLUGIN-BUILDER DONE — [list of all files created]'"

---

### 3B: WRITER-FOUNDATIONS (L01, L02, L03)

**Task:** `ch39-write-foundations`
**Depends on:** `ch39-reference-lesson`

"You are the writer-foundations teammate for Chapter 39: Productivity & The Agentic Office.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/architecture/architecture-spec.md` (master spec)
2. `specs/drafts/chapter28_productivity/architecture/shared-brief.md` (shared context)
3. `specs/drafts/chapter28_productivity/architecture/writer-foundations-brief.md` (YOUR brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/06-task-intelligence.md` (reference lesson — match this quality exactly)
5. `specs/drafts/chapter28_productivity/Chapter28_Productivity_Agentic_Office.md` — read ONLY: Introduction (lines 1-42), The Productivity Plugin Architecture (lines 43-83), Part One: Workplace Memory (lines 85-257)
6. `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/README.md` (official plugin — for L02)
7. `specs/drafts/chapter28_productivity/productivity-skills/products/memory.md` (for L03 content)
8. `specs/drafts/chapter28_productivity/productivity-skills/work.local.md.template` (for L03 content)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports — no `import` statements. `<Flashcards />` used as JSX tag without import
- All chapter cross-references use CURRENT numbering (Finance=Ch28, Sales=Ch34, Supply Chain=Ch35, HR=Ch37, Operations=Ch38, Productivity=Ch39, Capstone=Ch40)
- Use Panaversity/PIAIC case study throughout
- Execute autonomously without asking for confirmation

YOUR SCOPE:

**L01: `01-the-context-problem.md`**

- Concept lesson — the 4 failure modes (terminology blindness, people anonymity, project amnesia, priority blindness)
- Opening: Chief of Staff quote from governing spec
- NO plugin usage yet — pure concept
- Try With AI: ask Claude to draft a meeting prep for 'Executive Weekly at Panaversity' without any context → observe generic output → contrast with what a contextual colleague would produce
- End with: 'Chapter 39 closes this gap.'

**L02: `02-two-plugins-one-system.md`**

- Install official productivity plugin → run /productivity:start → see TASKS.md, CLAUDE.md, memory/, dashboard.html created
- Install custom agentic-office plugin → run /agentic-office:setup → see work.local.md template created
- Teach what each plugin covers (table comparing them) — zero overlap
- Exercise: verify both systems are running, explore dashboard.html
- Try With AI: run /productivity:update to see what the official plugin does → then preview what the agentic-office will add

**L03: `03-workplace-memory-architecture.md`**

- Concept: the 4-layer memory model (Personal, Team, Project, Organisational)
- Teach Layer 1 (Personal) and Layer 4 (Org: terminology + culture + meeting rhythm + unwritten rules)
- Use work.local.md.template as reference — show what each layer looks like
- Skill: /agentic-office:workplace-context
- Exercise: write Personal layer (15 min) + 10 terminology entries + meeting rhythm + 3 unwritten rules (25 min) → test with /agentic-office:context-loader
- This is 'the most important exercise in the chapter' — emphasise this

When finished, message the team lead: 'WRITER-FOUNDATIONS DONE — 01-the-context-problem.md, 02-two-plugins-one-system.md, 03-workplace-memory-architecture.md'"

---

### 3C: WRITER-SKILLS-A (L04, L05, L07)

**Task:** `ch39-write-skills-a`
**Depends on:** `ch39-reference-lesson`

NOTE: L06 was written by reference-builder. This writer does L04, L05, L07.

"You are the writer-skills-a teammate for Chapter 39: Productivity & The Agentic Office.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/architecture/architecture-spec.md` (master spec)
2. `specs/drafts/chapter28_productivity/architecture/shared-brief.md` (shared context)
3. `specs/drafts/chapter28_productivity/architecture/writer-skills-a-brief.md` (YOUR brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/06-task-intelligence.md` (reference lesson)
5. `specs/drafts/chapter28_productivity/Chapter28_Productivity_Agentic_Office.md` — read ONLY: Part One lines 118-257 (Team/Project memory layers), Part Two lines 259-395 (Task Management + Delegation)
6. `specs/drafts/chapter28_productivity/productivity-skills/products/memory.md` (for L04/L05)
7. `specs/drafts/chapter28_productivity/productivity-skills/products/search.md` (for L05)
8. `specs/drafts/chapter28_productivity/productivity-skills/products/delegate.md` (for L07)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports
- Current chapter numbering (Ch 28-40)
- Use case study throughout
- Execute autonomously without asking for confirmation

YOUR SCOPE:

**L04: `04-building-your-people-memory.md`**

- Concept: Team memory layer — communication styles, sensitivities, relationship dynamics
- Skill: /agentic-office:workplace-context
- Show example person entries using case study (Omar, Ayesha, Dr. Sana Mirza) from governing spec
- Exercise: add 5-8 stakeholders → generate person brief for 3 people → evaluate accuracy
- Include full sample person brief output from governing spec (the 3-person brief)

**L05: `05-projects-and-priorities.md`**

- Concept: Project memory layer — codenames, P1/P2/P3, status, decisions, risks
- Skills: /agentic-office:workplace-context + /agentic-office:workplace-search
- Show example project entries using case study (AgentFactory P1, Nighthawk P2, BankersAI P2)
- Exercise: add 5-10 projects → test /agentic-office:workplace-search 'What do we know about Project Nighthawk?' → verify cross-layer results
- Include full sample search output from governing spec
- Mark: 'work.local.md foundation is now complete'

**L07: `07-delegation-as-a-discipline.md`**

- Concept: delegation quality standard (deliverable + owner + deadline + context + format + follow-up)
- Skill: /agentic-office:delegation
- Show the delegation quality checklist from governing spec
- Show handoff communication calibrated to delegatee's style (Omar example)
- Exercise: take 3 tasks from L06 → create delegation records → review handoff messages
- Include full sample delegation record output from governing spec

When finished, message the team lead: 'WRITER-SKILLS-A DONE — 04-building-your-people-memory.md, 05-projects-and-priorities.md, 07-delegation-as-a-discipline.md'"

---

### 3D: WRITER-SKILLS-B (L08, L09, L10, L11)

**Task:** `ch39-write-skills-b`
**Depends on:** `ch39-reference-lesson`

"You are the writer-skills-b teammate for Chapter 39: Productivity & The Agentic Office.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/architecture/architecture-spec.md` (master spec)
2. `specs/drafts/chapter28_productivity/architecture/shared-brief.md` (shared context)
3. `specs/drafts/chapter28_productivity/architecture/writer-skills-b-brief.md` (YOUR brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/06-task-intelligence.md` (reference lesson)
5. `specs/drafts/chapter28_productivity/Chapter28_Productivity_Agentic_Office.md` — read ONLY: Part Three (Daily Digest, lines 436-524), Part Four (Meeting Intelligence, lines 527-637), Part Five (Dashboard, lines 640-731), Part Six (Cross-Domain Integration, lines 734-828)
6. `specs/drafts/chapter28_productivity/productivity-skills/products/digest.md` (for L08)
7. `specs/drafts/chapter28_productivity/productivity-skills/products/meeting.md` (for L09)
8. `specs/drafts/chapter28_productivity/productivity-skills/products/dashboard.md` (for L10)
9. `specs/drafts/chapter28_productivity/productivity-skills/products/track.md` (for L10)
10. `specs/drafts/chapter28_productivity/productivity-skills/products/context.md` (for L11)
11. `specs/drafts/chapter28_productivity/productivity-skills/products/search.md` (for L11)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports
- Current chapter numbering (Ch 28-40)
- Use case study throughout
- Execute autonomously without asking for confirmation

YOUR SCOPE:

**L08: `08-the-daily-digest.md`**

- Concept: critical path thinking, digest design, 5-minute morning brief, Monday/Friday variants
- Skill: /agentic-office:digest
- Show full sample daily digest from governing spec (the Zia Khan morning brief)
- Show digest configuration YAML from work.local.md
- Exercise: define morning needs → design format → configure in work.local.md → generate first /agentic-office:digest → review
- Teach: Monday brief variant, Friday close variant

**L09: `09-meeting-intelligence.md`**

- Concept: three-phase meeting model (before/during/after), D/A/F/Q/R note-taking, stakeholder-aware prep
- Skill: /agentic-office:meeting-intelligence
- Show full sample meeting prep brief from governing spec (Executive Weekly)
- Show full sample meeting synthesis from governing spec (decisions D-001/002/003, actions A-001/002/003)
- Show the D/A/F/Q/R note-taking template
- Exercise: full cycle — prep real meeting → notes → synthesis → update work.local.md

**L10: `10-the-executive-dashboard.md`**

- Concept: RAG status, cross-domain metrics, executive overview vs task board
- Skill: /agentic-office:progress-tracker
- Show full sample executive dashboard from governing spec
- Show dashboard configuration YAML from work.local.md
- IMPORTANT: contrast with official plugin's dashboard.html (visual task board = daily management, our dashboard = weekly executive review)
- Exercise: configure dashboard → generate → 5-minute test

**L11: `11-cross-domain-intelligence.md`**

- Concept: context injection from other Part 3 domain agents, cross-domain search
- Skills: /agentic-office:context-loader + /agentic-office:workplace-search
- Show the cross-domain context brief from governing spec (Finance + HR + Ops for analytics budget discussion)
- Reference: Ch 28 (Finance), Ch 34 (Sales), Ch 37 (HR — planned), Ch 38 (Operations — planned)
- Exercise: cross-domain scenario → load multi-domain context → identify gaps → update integration protocols in work.local.md

When finished, message the team lead: 'WRITER-SKILLS-B DONE — 08-the-daily-digest.md, 09-meeting-intelligence.md, 10-the-executive-dashboard.md, 11-cross-domain-intelligence.md'"

---

### 3E: WRITER-AGENTS (L12, L13, L14, L15)

**Task:** `ch39-write-agents`
**Depends on:** `ch39-reference-lesson`

"You are the writer-agents teammate for Chapter 39: Productivity & The Agentic Office.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/architecture/architecture-spec.md` (master spec)
2. `specs/drafts/chapter28_productivity/architecture/shared-brief.md` (shared context)
3. `specs/drafts/chapter28_productivity/architecture/writer-agents-brief.md` (YOUR brief)
4. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/06-task-intelligence.md` (reference lesson)
5. `specs/drafts/chapter28_productivity/Chapter28_Productivity_Agentic_Office.md` — read ONLY: Part Eight (The Four Productivity Agents, lines 921-1037), Exercises 7-8 (lines 1444-1641), Chapter Summary (lines 1644-1709)
6. `specs/drafts/chapter28_productivity/productivity-skills/agents/chief-of-staff-agent.md` (for L12)
7. `specs/drafts/chapter28_productivity/productivity-skills/agents/memory-keeper-agent.md` (for L13)
8. `specs/drafts/chapter28_productivity/productivity-skills/agents/meeting-intelligence-agent.md` (for L13)
9. `specs/drafts/chapter28_productivity/productivity-skills/agents/work-tracker-agent.md` (for L13)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- NO phantom imports
- Current chapter numbering (Ch 28-40)
- Use case study throughout
- Execute autonomously without asking for confirmation

YOUR SCOPE:

**L12: `12-the-digital-chief-of-staff.md`**

- Concept: agent architecture, /schedule for daily digest delivery, threshold monitoring, escalation protocols
- Agent: chief-of-staff (background: true)
- Show agent configuration from governing spec
- Teach /schedule: '/schedule daily at 07:00 /agentic-office:digest' — explain Cowork requirement (app must be running)
- Show escalation protocol (Level 1: digest flag, Level 2: explicit message, Level 3: COO-level)
- Exercise: configure agent → set up /schedule → test threshold breach detection

**L13: `13-the-supporting-agents.md`**

- Concept: trigger-based agents, delegation lifecycle, weekly maintenance, meeting audit
- Agents: memory-keeper, meeting-intelligence-agent, work-tracker
- Show each agent's triggers, daily/weekly tasks, configuration
- Show sample Memory Keeper update proposal from governing spec
- Show Work Tracker delegation lifecycle (confirmation → check-in → overdue → escalation)
- Exercise: configure all 3 → test triggers → review weekly audit outputs

**L14: `14-the-complete-agentic-office.md`**

- CAPSTONE lesson — wires everything together
- All skills + all agents + both plugins
- Show full agent_integrations configuration from work.local.md template
- Show trigger events configuration
- Exercise: complete work.local.md → full smoke test (/agentic-office:digest, /agentic-office:progress-tracker, /agentic-office:workplace-search 'what is at risk?') → define maintenance cadence
- This is the integration exercise for ALL of Part 3

**L15: `15-summary-quick-reference.md`**

- Chapter recap: 2 plugins, 9 skills, 4 agents, work.local.md architecture
- Plugin command reference table (official + custom)
- Agent reference table (4 agents with purpose, triggers, schedule)
- work.local.md section reference (7 sections)
- The closing quote: 'The goal was never to replace the people in your organisation. It was to give the people in your organisation an AI that actually knows where they work.'
- NOTE: Quiz will be added in post-production (Phase 5C)

When finished, message the team lead: 'WRITER-AGENTS DONE — 12-the-digital-chief-of-staff.md, 13-the-supporting-agents.md, 14-the-complete-agentic-office.md, 15-summary-quick-reference.md'"

---

## PHASE 4: QUALITY REVIEWER (1 teammate, depends on ALL Phase 3)

**Task:** `ch39-quality-review`
**Depends on:** `ch39-write-foundations`, `ch39-write-skills-a`, `ch39-write-skills-b`, `ch39-write-agents`, `ch39-plugin-build`
**Model:** Opus

"You are the quality-reviewer teammate for Chapter 39: Productivity & The Agentic Office.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/drafts/chapter28_productivity/architecture/architecture-spec.md` (architecture)
2. `specs/drafts/chapter28_productivity/architecture/shared-brief.md` (shared context)
3. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/06-task-intelligence.md` (reference lesson — quality benchmark)
4. ALL 15 lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/` (read each ONCE)
5. Plugin files at `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/agentic-office/` (read plugin.json + 3 random SKILL.md files + 1 agent file)

REVIEW CHECKLIST:

1. **YAML frontmatter completeness** — every lesson has ALL required fields (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
2. **Voice consistency** — direct, practical, colleague-to-peer tone throughout
3. **Case study consistency** — same characters, projects, terminology across all lessons
4. **Two-plugin clarity** — every lesson makes clear which plugin provides which capability, no confusion
5. **Try With AI** — every lesson has exactly 3 tiers (Reproduce/Adapt/Apply) with copyable prompts
6. **Sample outputs** — every skill-based lesson includes realistic sample output using case study data
7. **No phantom imports** — grep for 'import.\*@site/src/components' — must return nothing
8. **Cross-references** — all chapter numbers use current numbering (Ch 28-40), planned chapters noted as such
9. **Progression** — lessons build naturally (L01 concept → L02 install → L03-05 memory → L06-07 tasks/delegation → L08-11 intelligence → L12-13 agents → L14 capstone → L15 summary)
10. **Navigation** — every lesson ends with 'Continue to [Lesson N: Title →](./NN-slug.md)'
11. **Flashcards** — every lesson has `<Flashcards />` section (no import statement)
12. **Plugin trigger overlap** — verify NO trigger words from official plugin appear in custom skills (spot-check 3 skills)
13. **Agent frontmatter** — verify all 4 agents have: name, description, tools, background: true

DELIVERABLE: Write quality report to `specs/drafts/chapter28_productivity/architecture/quality-report.md`

Format:

- Overall score: PASS / CONDITIONAL PASS / FAIL
- Per-writer summary (foundations, skills-a, skills-b, agents, plugin-builder)
- Issues list (severity: Critical / Important / Minor)
- For each Critical/Important issue: file, line, what's wrong, how to fix

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md [PASS/CONDITIONAL PASS/FAIL]'"

---

## PHASE 5: POST-PRODUCTION (SAME team — DO NOT shut down)

After quality review passes (fix any Critical issues first), proceed with post-production. The team is STATEFUL — reuse existing teammates who have context.

### Phase 5A: Summaries

**Task:** `ch39-summaries`
**Depends on:** `ch39-quality-review`

Reuse writer teammates (they have lesson context). Each writer generates summaries for their lessons using `/summary-generator`:

Message writer-foundations: "Generate .summary.md sidecars for your 3 lessons (L01, L02, L03) using /summary-generator on each .md file. Place adjacent to lesson files."

Message writer-skills-a: "Generate .summary.md sidecars for your 3 lessons (L04, L05, L07) using /summary-generator."

Message writer-skills-b: "Generate .summary.md sidecars for your 4 lessons (L08, L09, L10, L11) using /summary-generator."

Message writer-agents: "Generate .summary.md sidecars for your 4 lessons (L12, L13, L14, L15) using /summary-generator. Also generate summary for L06 (reference lesson)."

### Phase 5B: Flashcards

**Task:** `ch39-flashcards`
**Depends on:** `ch39-summaries`

Same teammates generate flashcards using `/generate-flashcards`:

Message each writer: "Generate .flashcards.yaml sidecars for each of your lessons using /generate-flashcards. Place adjacent to lesson files."

Writer-agents also handles L06 flashcards.

### Phase 5C: Chapter Quiz

**Task:** `ch39-quiz`
**Depends on:** `ch39-flashcards`

Spawn a NEW teammate (quiz-writer) — needs full chapter context:

"You are the quiz-writer teammate for Chapter 39.
You are part of an agent team — communicate via messages to the team lead.

Read ALL 15 lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/`.

Then invoke /quiz-generator to create a 50-question interactive quiz. Write the output to `16-quiz.md` in the chapter directory. The quiz should cover:

- Workplace memory architecture (L01-L05)
- Task intelligence and delegation (L06-L07)
- Digest, meeting, dashboard (L08-L10)
- Cross-domain and agents (L11-L13)
- Integration patterns (L14)

Execute autonomously. When finished, message the team lead: 'QUIZ-WRITER DONE — 16-quiz.md'"

### Phase 5D: Slides

**Task:** `ch39-slides`
**Depends on:** `ch39-quiz`

Spawn a NEW teammate (slides-writer):

"You are the slides-writer teammate for Chapter 39.
You are part of an agent team — communicate via messages to the team lead.

Read the chapter README and 3-4 key lessons (L01, L06, L12, L14) to understand the chapter arc.

1. Use /notebooklm-slides to generate slide content for the chapter
2. Use /upload-chapter-slides to upload the PDF to CDN and update the README frontmatter with slides metadata

Execute autonomously. When finished, message the team lead: 'SLIDES-WRITER DONE — slides uploaded, README updated'"

### Phase 5E: Plugin Validation

**Task:** `ch39-plugin-validation`
**Depends on:** `ch39-quality-review`

Message plugin-builder: "Run final validation:

1. Validate every SKILL.md against plugin-validation-checklist.md
2. Run /skill-validator on each of the 9 SKILL.md files
3. Verify all 4 agent files have correct frontmatter
4. Verify plugin.json is valid JSON with correct name
5. Run evals: `python evals/run.py --list` then `python evals/run.py`
6. Cross-file consistency: skill dir names match SKILL.md names, agent skills references resolve
7. Report results. When finished, message: 'PLUGIN-VALIDATION DONE — [pass/fail details]'"

---

## PHASE 6: FINAL VERIFICATION (Lead runs this — NOT a teammate)

After ALL post-production tasks complete, run these checks yourself:

```bash
# File inventory
ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/*.md | wc -l
# Expected: 16+ (README + 15 lessons + quiz)

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/*.summary.md | wc -l
# Expected: 15 summary sidecars

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/*.flashcards.yaml | wc -l
# Expected: 15 flashcard sidecars

ls apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/*quiz* | wc -l
# Expected: 1 quiz file

# No phantom imports
grep -r "import.*@site/src/components" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/
# Expected: nothing

# YAML frontmatter spot-check (3 random lessons)
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/03-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/09-*.md
head -50 apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/12-*.md

# Plugin checks
ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/agentic-office/skills/*/SKILL.md | wc -l
# Expected: 10 (9 skills + setup)

ls /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/agentic-office/agents/*.md | wc -l
# Expected: 4 agent files

cat /Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/agentic-office/.claude-plugin/plugin.json
# Verify valid JSON

# README slides frontmatter
grep "slides:" apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/README.md
```

Only after ALL checks pass: shut down all teammates, delete the team, report to user.

---

## LEAD COORDINATION RULES

1. Create the team with TeamCreate. Name: `ch39-productivity`.
2. Create ALL tasks upfront with correct dependencies (Phase 1 → 2 → 3 → 4 → 5 → 6).
3. Do NOT write content yourself — delegate everything to teammates.
4. Do NOT spawn Phase 2 before Phase 1 completes.
5. Do NOT spawn Phase 3 teammates before Phase 2 completes.
6. Do NOT spawn quality reviewer before ALL Phase 3 teammates complete.
7. If a teammate gets stuck (no message for 10+ minutes), message them: 'Status check — are you blocked?'
8. If a teammate fails, spawn a replacement with the same prompt.
9. Quality review gate: if FAIL → identify Critical issues → message relevant writer to fix → re-run quality review.
10. Post-production: reuse existing teammates where possible (they have context).
11. After Phase 6 verification passes, send shutdown_request to ALL teammates.
12. Delete the team with TeamDelete.
13. Report to user: chapter file count, plugin file count, quality score, any remaining issues.

---

## MODEL PREFERENCES

| Teammate           | Model  | Rationale                                   |
| ------------------ | ------ | ------------------------------------------- |
| Architect          | Opus   | Reads full 83KB spec, produces architecture |
| Reference-Builder  | Opus   | Sets quality benchmark                      |
| Plugin-Builder     | Opus   | Complex multi-file plugin with validation   |
| Writer-Foundations | Sonnet | Content production (3 files)                |
| Writer-Skills-A    | Sonnet | Content production (3 files)                |
| Writer-Skills-B    | Sonnet | Content production (4 files)                |
| Writer-Agents      | Sonnet | Content production (4 files)                |
| Quality-Reviewer   | Opus   | Needs to assess quality across all files    |
| Quiz-Writer        | Sonnet | Quiz generation                             |
| Slides-Writer      | Sonnet | Slide generation                            |

---

## ANTI-PATTERNS TO AVOID

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 3 teammates before Phase 2 completes
- Do NOT spawn quality reviewer before ALL writers AND plugin-builder complete
- Do NOT let writer teammates read the full governing spec (only architect reads it all)
- Do NOT skip quality review or verification
- Do NOT shut down the team after content writing — post-production needs the same teammates
- Do NOT duplicate MCP connectors in the custom plugin (reference official plugin's)
- Do NOT use trigger words from the official productivity plugin in custom skill descriptions
