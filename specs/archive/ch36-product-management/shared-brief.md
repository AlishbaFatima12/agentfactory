# Chapter 36: Product Management — Shared Writer's Brief

This brief provides shared context for all writers working on Chapter 36. Read this BEFORE your per-writer brief.

---

## Content Identity

**Audience**: B2B SaaS Product Managers (or aspiring PMs) who want to use AI agents to accelerate their workflow without sacrificing craft quality.

**Tone**: Professional PM voice. Not academic, not casual. Write like a senior PM mentoring a capable colleague — direct, opinionated, grounded in real practice. Use "you" freely. Avoid hedging on PM principles (specs need scope boundaries, acceptance criteria must be testable, etc.) while hedging on illustrative numbers.

**Central thesis**: "The PM's job is judgment. AI removes the bottleneck between judgment and the documentation that expresses it." The agent writes the first draft. The PM reviews, directs, and refines. The document reflects the PM's judgment at the quality it deserves — in a fraction of the time.

**What this chapter is NOT**: It is not a PM 101 course. It assumes the student understands what a PRD is, what user stories are, what a roadmap does. The chapter teaches how to use AI agents to produce these artifacts faster and at higher quality — and how to evaluate and refine the agent's output.

---

## Two-Plugin Architecture

### Layer 1: Official Plugin (`product-management`)

**Repository**: `knowledge-work-plugins/product-management`
**Install**: `claude plugins add knowledge-work-plugins/product-management`
**Commands**: `/write-spec`, `/roadmap-update`, `/synthesize-research`, `/stakeholder-update`, `/competitive-brief`, `/metrics-review`, `/sprint-planning`

This plugin is maintained by Anthropic. It provides the foundational PM commands. When teaching official plugin skills:

- Show the command and what it does
- Explain the skill's workflow by referencing its SKILL.md structure (what it asks, what sections it produces, what MCP connections enhance it)
- Students invoke commands directly in Cowork
- Focus teaching on **evaluating** the output, not on how the skill works internally

### Layer 2: Custom Plugin (`product-strategy`)

**Repository**: `agentfactory-business-plugins/product-strategy`
**Install**: In Cowork sidebar: Customize > Browse plugins > Personal > + > Add marketplace from GitHub > enter `https://github.com/panaversity/agentfactory-business-plugins` > find Product Strategy > Install
**Commands**: `/prd`, `/stories`, `/brief`, `/retro`, `/prioritise`, `/interview`
**Agents**: `research-intelligence`, `stakeholder-update`, `roadmap-coherence`

This plugin fills workflow gaps the official plugin does not cover. When teaching custom plugin skills:

- Show the command and the principles it enforces (from the skill spec)
- Teach the "NEVER DO THESE" rules as quality criteria
- Students invoke commands in Cowork via the custom plugin
- Focus teaching on both the **output** and the **craft principles** encoded in the skill

### How They Work Together

The two plugins complement each other across the PM workflow:

1. Custom `/brief` frames the problem → Custom `/interview` generates interview guides → Official `/synthesize-research` processes the notes
2. Official `/write-spec` produces a feature spec → Custom `/prd` wraps it into a multi-team PRD → Custom `/stories` decomposes it into user stories
3. Official `/roadmap-update` organises the roadmap → Custom `/prioritise` scores the backlog → Official `/sprint-planning` scopes the sprint
4. Official `/stakeholder-update` drafts comms → Official `/metrics-review` analyses outcomes → Custom `/retro` evaluates the cycle

---

## Practice Product: InsightFlow

All exercises across all 15 lessons use InsightFlow as the practice product. This ensures consistency and progressive building.

| Field               | Value                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------- |
| **Name**            | InsightFlow                                                                                   |
| **Description**     | B2B SaaS analytics platform that helps data analysts build dashboards and reports without SQL |
| **Stage**           | Series B, 50 employees, 200 customers                                                         |
| **Business model**  | B2B SaaS — Free / Pro ($49/user/mo) / Business ($99/user/mo) / Enterprise (custom)            |
| **Core value prop** | "InsightFlow turns raw data into decisions without requiring a data team"                     |
| **Vision**          | "Every business decision backed by real-time data intelligence"                               |

### Personas

| Persona                    | Role                                 | Goal                                              | Frustration                    |
| -------------------------- | ------------------------------------ | ------------------------------------------------- | ------------------------------ |
| **Analyst Alex** (primary) | Data analyst, 100-500 person company | Build dashboards without SQL                      | Report requests take 3+ days   |
| **VP Priya** (secondary)   | VP Engineering                       | Team performance metrics without asking data team | Needs weekly automated reports |
| **CFO Marcus** (tertiary)  | CFO                                  | Revenue dashboards for board meetings             | Accuracy and audit trail       |

### Engineering Team

- 12 engineers + 3 designers
- 2-week sprints (Monday start, Friday end)
- Linear for backlog, Notion for specs
- Sprint planning Mondays, retro every other Friday
- Velocity: ~40 story points per sprint

### Current Challenge (Used Throughout)

InsightFlow is expanding from analytics to **workflow automation** — the biggest strategic bet of the year. This challenge drives exercises:

- L03: Problem brief for workflow automation
- L06: Feature spec for the automation builder
- L07: PRD for the full workflow automation initiative
- L08: User stories for the automation builder
- L09: Roadmap update adding workflow automation
- L10: Prioritising workflow automation vs other backlog items

### Stakeholder Map

| Name         | Role          | Cares About                | Communication Style        |
| ------------ | ------------- | -------------------------- | -------------------------- |
| Sarah Chen   | CEO           | Revenue + market position  | Executive summary, 1 page  |
| David Park   | CPO           | Product strategy + quality | Detailed, technical OK     |
| Maria Santos | CTO           | Technical architecture     | Technical precision        |
| James Wilson | Head of CS    | Customer commitments       | Practical, customer impact |
| Aisha Patel  | Head of Sales | Deal-blocking features     | Short, commercial framing  |

---

## Exercise Progression Chain

Exercises build on each other. Each lesson produces an artifact that feeds into subsequent lessons.

```
L02: product.local.md (populates all commands)
  └→ L03: Problem Brief (Workflow Automation)
      └→ L04: Interview Guide → Research Synthesis
          └→ L05: Competitive Brief (competitors in workflow automation)
              └→ L06: Feature Spec (Automation Builder)
                  └→ L07: PRD (Workflow Automation Initiative)
                      └→ L08: User Stories (Automation Builder epic)
                          ├→ L09: Roadmap (Q3 with Workflow Automation)
                          └→ L10: Prioritised Backlog (RICE scoring)
                              └→ L11: Sprint Plan (Sprint 1 of Automation)
                                  └→ L12: Stakeholder Updates (3 versions)
                                      └→ L13: Metrics Review (launch data)
                                          └→ L14: Retro + Agents
```

**Critical rule**: Every lesson that produces an artifact must include a `:::note Keep This File` admonition reminding students to keep their Cowork session between lessons.

---

## Sidecar File Rules

Every `.md` lesson file gets TWO sidecar files:

### `<slug>.flashcards.yaml`

```yaml
- question: "What is the purpose of ..."
  answer: "..."
- question: "When should you use ... vs ...?"
  answer: "..."
```

- 10-15 cards per lesson
- Cover: key concepts, command purposes, quality criteria, "NEVER DO" rules from skill specs
- No `import` statement needed — build system pairs them automatically

### `<slug>.summary.md`

```markdown
## Summary: <Lesson Title>

- **Key concept**: <1 sentence>
- **Command(s) used**: `/<command>`
- **Artifact produced**: <what the student built>
- **Quality criteria**: <the main quality rule from this lesson>
- **Next lesson**: <what comes next and how this feeds it>
```

---

## Cowork Terminology (MANDATORY)

Per `.claude/rules/cowork-content.md`:

| Wrong                  | Right         |
| ---------------------- | ------------- |
| "Claude in Excel"      | "Cowork"      |
| "Claude Cowork"        | "Cowork"      |
| "Claude in Cowork"     | "Cowork"      |
| "Open Claude in Excel" | "Open Cowork" |

**Exception**: References to Ch 28 (which teaches "Claude in Excel" as a separate product) are correct as-is.

**Try With AI setups**: Always use `"Use these prompts in Cowork or your preferred AI assistant."`

---

## Fact Verification Flags

- All InsightFlow numbers are **illustrative** — use hedging language: "a company like InsightFlow might see...", "illustrative figures"
- PM framework descriptions (RICE, MoSCoW, Kano, etc.) are well-established — no verification needed
- Any real-world adoption statistics, market sizes, or company data require WebSearch verification before publication
- Quotes attributed to named individuals require verification; quotes attributed to generic roles ("a CPO at a Series B company") are fine as illustrative

---

## Forbidden Patterns

1. **No `import` statements** for `@site/src/components/Flashcards` or `@site/src/components/Quiz`
2. **No "Claude in Excel"** when referring to Cowork (Ch 36 teaches Cowork, not Claude in Excel)
3. **No solution proposals in Problem Briefs** (L03 — this is a core PM principle)
4. **No vague acceptance criteria** ("fast", "user-friendly") — always measurable
5. **No exercises without evaluation criteria** — every exercise must teach the student to assess the agent's output
6. **No plugin trees showing dev artifacts** (evals, tests, examples) — show only what students install

---

## Writing Quality Bar

Each lesson must have:

1. Full YAML frontmatter (all fields from the template in architecture-spec.md)
2. Compelling narrative opening (2-3 paragraphs, real-world PM scenario)
3. Deep evidence throughout (tables, frameworks, concrete InsightFlow examples)
4. Three "Try With AI" prompts (Reproduce → Adapt → Apply)
5. Five-step exercise with explicit plugin and command identification
6. Teaching guide metadata (key_points, misconceptions, discussion_prompts, teaching_tips)
