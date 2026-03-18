# Chapter 39 — Shared Writer's Brief

All lesson writers MUST read this brief before writing any content.

---

## Chapter Identity

Chapter 39 is the **integration chapter** of Part 3. Where every previous Part 3 chapter deployed AI for a specific domain (Finance, Sales, Supply Chain, Legal, HR, Operations), this chapter deploys AI for **the person coordinating all of those domains**. It is the chapter where domain agents stop being isolated tools and start behaving like a coordinated organisation.

The reader at this point is a **senior professional** who has already deployed domain agents in Chapters 28-38. They understand plugins, skills, agents, work.local.md configuration, and the Cowork interface. This chapter does NOT teach Cowork basics — it builds on them.

---

## Voice and Tone

- **Direct, practical, evidence-based.** Like a knowledgeable colleague briefing a peer, not a textbook lecturing a student.
- **British English** spelling throughout (organisation, prioritise, behaviour, colour).
- First-person observations from the narrator are acceptable where they add insight.
- Use the Chief of Staff analogy throughout: "The Digital Chief of Staff is not a single agent. It is the emergent result of four agents working together."
- Avoid: management consultancy jargon, empty superlatives, generic AI hype.
- Statistics and time estimates: hedge with "industry surveys suggest", "studies estimate", "typically", "in most organisations".

---

## Two-Plugin Architecture Rules

### Official `productivity` plugin (Anthropic)

- Provides: TASKS.md task tracking, CLAUDE.md + memory/ two-tier memory, dashboard.html visual board, `/start`, `/update`
- Command prefix: `/productivity:start`, `/productivity:update`
- **This is basic task and memory CRUD.** The official plugin does not do prioritisation, delegation, digests, meetings, dashboards, or agents.

### Custom `agentic-office` plugin (Panaversity)

- Provides: 9 skills + 4 agents + work.local.md template
- Command prefix: `/agentic-office:skill-name`
- **This is the professional intelligence layer.** It adds context-aware task prioritisation, delegation quality, morning briefings, meeting intelligence, executive dashboards, cross-domain context injection, and persistent agents.

### CRITICAL: Zero Trigger Overlap

- The two plugins MUST NOT compete for the same natural language triggers
- Official plugin owns: "task", "to-do", "remember", "who is", "start", "update", "sync"
- Custom plugin uses: "brain dump", "prioritise", "delegate", "daily digest", "meeting prep", "executive dashboard", "cross-domain context", "workplace memory", "person brief"
- When a lesson says "add a task", it means `/productivity:start` or task-management. When it says "run a brain dump and prioritise", it means `/agentic-office:task-intelligence`

### How to Reference Commands in Lessons

- Official: `/productivity:start`, `/productivity:update`
- Custom skills: `/agentic-office:workplace-context`, `/agentic-office:task-intelligence`, etc.
- Custom agents: activated via AGENT.md, not slash commands (except chief-of-staff which has `/agentic-office:schedule`)

---

## Case Study

All lessons use a **single, continuous case study** across the chapter. Every skill lesson MUST include REALISTIC sample output using these characters and projects.

### People

| Name               | Role                           | Key Characteristics                                                                                                                                                 |
| ------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Zia Khan**       | CEO, Panaversity / COO, PIAIC  | The reader's perspective character. Direct, evidence-based, systems thinker. Prefers bullet points for analysis, narrative for persuasion.                          |
| **Omar Farooq**    | Head of Analytics, Panaversity | Data-driven, needs lead time, pushes back on scope creep. Prefers Slack DM for routine, email for formal.                                                           |
| **Ayesha Raza**    | Senior Data Analyst            | New hire (March 2026, onboarding). Detail-oriented, prefers written briefs. Fintech background, new to edtech.                                                      |
| **Dr. Sana Mirza** | Head of Curriculum (NEW)       | Joining Monday. PhD Learning Sciences, Aga Khan University. Academic precision, evidence-based. Owns PHM framework. Relationship with Omar needs careful mediation. |

### Projects

| Project                 | Codename          | Priority | Status             | Key Detail                                                                                              |
| ----------------------- | ----------------- | -------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| AI Agent Factory (book) | AgentFactory      | P1       | IN PROGRESS        | Current focus: completing Part 3 chapters. Target: Q2 2026 curriculum launch.                           |
| Karachi Expansion       | Project Nighthawk | P2       | PLANNING / AT RISK | Facility agreement stalled 10+ days. Q3 2026 target. Escalation needed.                                 |
| Banker AI Workshops     | BankersAI         | P2       | RECURRING          | Monthly workshops. Next: Workshop #7, topic: Digital FTEs for compliance. Content review 7 days before. |

### Organisational Terms

| Term                 | Meaning                                                                | Usage                                |
| -------------------- | ---------------------------------------------------------------------- | ------------------------------------ |
| Boulders             | Quarterly strategic priorities (equivalent to OKRs)                    | Internal only                        |
| Digital FTE          | A fully configured AI agent performing a specific professional role    | All contexts                         |
| AgentFactory         | Internal codename for the AI Agent Factory book project                | Team conversations                   |
| Project Nighthawk    | Codename for the Karachi expansion                                     | Internal only; do not use externally |
| The Compass          | Strategic planning document — annual; reviewed quarterly               | Formal references                    |
| PIAIC Faisalabad SIG | AI Special Interest Group for business leaders in Faisalabad           | Zia chairs; monthly                  |
| TutorClaw            | The Digital FTE teaching agent for the curriculum                      | Technical contexts                   |
| PHM                  | Personalized Hybrid Model — seven-approach adaptive teaching framework | Core pedagogical IP                  |

### Culture

- Values: CLEAR (Curious, Learner, Empathetic, Accountable, Resilient)
- Decision-making: Evidence first, then judgment. "Disagree and commit" — once decided, full execution.
- Communication: Async-first. Slack for daily, email for formal, WhatsApp for urgent.
- Unwritten rules: "Let's take this offline" = politically sensitive, do not minute. Data requests to Omar need 3 business days. Zia reviews chapters personally. Workshop content reviewed 7 days before delivery.

### Meeting Rhythm

| Meeting          | Frequency | Day/Time         | Format                     |
| ---------------- | --------- | ---------------- | -------------------------- |
| Executive Weekly | Weekly    | Monday 09:00 PKT | 30 min standing, no slides |
| Chapter Review   | Bi-weekly | Friday 14:00 PKT | Review + feedback          |
| Banker Workshop  | Monthly   | Last Saturday    | Full day                   |

---

## Cross-References to Other Chapters

When referencing other Part 3 chapters, use these mappings:

| Domain       | Chapter                            | Reference Pattern                                   |
| ------------ | ---------------------------------- | --------------------------------------------------- |
| Finance      | Ch 28 (Finance Domain Agents)      | "The finance agent from Chapter 28..."              |
| IDFA         | Ch 29 (IDFA Financial Architect)   | "The IDFA methodology from Chapter 29..."           |
| CA/CPA       | Ch 30 (CA/CPA Practice)            | "Chapter 30's accounting workflows..."              |
| Sales        | Ch 34 (Sales, RevOps & Marketing)  | "The revenue engine from Chapter 34..."             |
| Supply Chain | Ch 35 (Supply Chain & Procurement) | "Chapter 35's supply chain intelligence..."         |
| HR           | Ch 37 (planned)                    | "HR domain agents (Chapter 37)..."                  |
| Operations   | Ch 38 (planned)                    | "The operations intelligence layer (Chapter 38)..." |
| Productivity | Ch 39 (this chapter)               | Current chapter                                     |
| Capstone     | Ch 40                              | "Chapter 40 synthesises everything..."              |

---

## Sample Output Requirements

Every skill lesson (L03-L14) MUST include at least one REALISTIC sample output block using the case study data. The output must:

1. Use the case study people by name (Zia, Omar, Ayesha, Dr. Sana Mirza)
2. Reference real projects (AgentFactory, Project Nighthawk, BankersAI)
3. Use organisational terminology (Boulders, Digital FTE, The Compass)
4. Follow the exact output format from the corresponding product spec file
5. Feel like something a real Chief of Staff would produce — specific, actionable, contextual

**Bad example:** "Project A is on track. Person B has a task due Friday."
**Good example:** "AgentFactory is on track — Chapter 39 draft due Thursday. Omar's analytics brief for the investor deck is due next Monday; no confirmation received yet — chase by 10:00."

---

## Try With AI Requirements

Every lesson MUST include a `:::tip Try With AI` section with three tiers:

1. **Reproduce** — Apply the lesson's skill to the case study data (or a simplified version)
2. **Adapt** — Modify the scenario for the reader's own organisation
3. **Apply** — Extend to a new situation the lesson did not cover directly

Each prompt:

- Must be in a copyable code block
- Must include a `**What you are learning:**` explanation after the prompt
- Must use the framing: "Use these prompts in Cowork or your preferred AI assistant."
- Must NOT reference specific platform UI elements (no "click the sidebar")

---

## Technical Constraints

### NO Phantom Imports

- `<Flashcards />` is a VALID JSX tag — include it at the end of each lesson. No import statement needed.
- Do NOT add `import` statements for `@site/src/components/Flashcards` or `@site/src/components/Quiz`. These do not exist as importable components.

### Flashcards Section

Every lesson ends with:

```markdown
## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson {N+1}: {Title} →](./{NN}-{slug}.md)
```

### Fact Claims

- Hedge all statistics: "industry surveys suggest", "studies estimate", "typically"
- Do NOT state exact percentages without a source citation
- The "35-55% of time in meetings" figure from the governing spec is acceptable with hedging

### Plugin Command Format

- Official: `/productivity:start`, `/productivity:update`
- Custom: `/agentic-office:workplace-context`, `/agentic-office:task-intelligence`, `/agentic-office:delegation`, etc.
- NEVER use bare `/task` or `/memory` without the plugin prefix — these are ambiguous in a two-plugin system

### Lesson Length Targets

| Lesson Type             | Target Word Count | Duration  |
| ----------------------- | ----------------- | --------- |
| Concept (L01)           | 2,000-2,500       | 25-30 min |
| Install/Config (L02)    | 1,500-2,000       | 20-25 min |
| Skill lessons (L03-L11) | 2,500-3,500       | 35-45 min |
| Agent lessons (L12-L13) | 2,500-3,000       | 35-40 min |
| Capstone (L14)          | 3,500-4,500       | 75-90 min |
| Summary (L15)           | 1,500-2,000       | 15-20 min |
