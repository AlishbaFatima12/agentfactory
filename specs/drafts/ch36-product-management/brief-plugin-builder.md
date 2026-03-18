# Writer Brief: Plugin Builder (product-strategy plugin)

**Writer scope:** Build the complete `product-strategy` plugin at `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/`. This includes 6 skills, 3 agents, plugin config, evals, CLAUDE.md, README, and product.local.md template.

**Read before writing:**

1. `specs/drafts/ch36-product-management/shared-brief.md` — shared rules
2. `specs/drafts/ch36-product-management/architecture-spec.md` — full architecture
3. Reference plugin: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — follow this structure exactly

---

## Plugin Structure

```
product-strategy/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── prd/
│   │   └── SKILL.md
│   ├── stories/
│   │   └── SKILL.md
│   ├── brief/
│   │   └── SKILL.md
│   ├── retro/
│   │   └── SKILL.md
│   ├── prioritise/
│   │   └── SKILL.md
│   └── interview/
│       └── SKILL.md
├── agents/
│   ├── research-intelligence.md
│   ├── stakeholder-update.md
│   └── roadmap-coherence.md
├── product.local.md.template
├── evals/
│   ├── evals.json
│   └── cases/
│       ├── brief-problem.txt
│       ├── brief-discovery.txt
│       ├── prd-workflow-builder.txt
│       ├── stories-from-spec.txt
│       ├── prioritise-rice.txt
│       ├── interview-guide.txt
│       ├── retro-sprint.txt
│       ├── routing-brief.txt
│       ├── routing-prd.txt
│       ├── routing-stories.txt
│       ├── negative-no-solution-in-brief.txt
│       ├── negative-compound-ac.txt
│       ├── negative-vague-persona.txt
│       └── negative-no-scope-boundary.txt
├── CLAUDE.md
└── README.md
```

Location: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/product-strategy/`

---

## Files to Create

### 1. `.claude-plugin/plugin.json`

Follow supply-chain plugin.json format:

```json
{
  "name": "product-strategy",
  "version": "1.0.0",
  "description": "Product strategy plugin for PMs. 6 skills covering PRDs, user stories, discovery briefs, interview guides, backlog prioritisation, and product retrospectives. 3 persistent agents for research intelligence, stakeholder updates, and roadmap coherence. Complements the official product-management plugin with workflow gaps.",
  "author": {
    "name": "Panaversity",
    "url": "https://github.com/panaversity"
  },
  "homepage": "https://agentfactory.panaversity.org",
  "repository": "https://github.com/panaversity/agentfactory-business-plugins",
  "license": "Apache-2.0",
  "keywords": [
    "product-management",
    "product-strategy",
    "prd",
    "user-stories",
    "discovery-brief",
    "interview-guide",
    "prioritisation",
    "retrospective",
    "domain-agent"
  ]
}
```

### 2. Skills (6 SKILL.md files)

**Source for each skill:** The corresponding file in `specs/drafts/chapter25_product management/pm-skills/products/`. Transform from the spec's flat format to the SKILL.md directory format.

Each SKILL.md must have:

- YAML frontmatter: `name`, `description` (activation trigger phrases), `argument-hint`
- Workflow section
- Output format section
- "NEVER DO THESE" section (from source)
- Reference to `product.local.md` for context loading

**Skills to create:**

| Skill        | Source File                        | Command       | Key Differentiator                                                                                             |
| ------------ | ---------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| `brief`      | `pm-skills/products/brief.md`      | `/brief`      | Three brief types: Problem, Discovery, Initiative. NO solutions in Problem Brief.                              |
| `interview`  | `pm-skills/products/interview.md`  | `/interview`  | Five principles: behavior>opinion, past>hypothetical, problem before solution, silence is data, "why" 5x       |
| `prd`        | `pm-skills/products/prd.md`        | `/prd`        | 10-section template. Status gates: DRAFT→REVIEW→REFINED→APPROVED→SHIPPED. Failure threshold mandatory.         |
| `stories`    | `pm-skills/products/stories.md`    | `/stories`    | Story anatomy quality test. No "a user". No UI elements in "want". No system actions in "so that".             |
| `prioritise` | `pm-skills/products/prioritise.md` | `/prioritise` | Framework selection + three mandatory challenges (Strategic Override, Data Gap, "What Would We Regret?")       |
| `retro`      | `pm-skills/products/retro.md`      | `/retro`      | Four retro questions. Every improvement → specific testable process change. product.local.md update mandatory. |

### 3. Agents (3 agent files)

**Source for each agent:** The corresponding file in `specs/drafts/chapter25_product management/pm-skills/agents/`. Transform to agent definition format.

| Agent                   | Source File                             | Purpose                                                                | Trigger                                         |
| ----------------------- | --------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------- |
| `research-intelligence` | `agents/research-intelligence-agent.md` | Weekly user signal monitoring (support, NPS, feature requests)         | Scheduled (weekly) + threshold-based escalation |
| `stakeholder-update`    | `agents/stakeholder-update-agent.md`    | Automated three-version stakeholder updates with PM review gate        | Scheduled (weekly) + status change triggers     |
| `roadmap-coherence`     | `agents/roadmap-coherence-agent.md`     | Drift detection: backlog orphans, spec coverage gaps, sprint alignment | Scheduled (weekly) + threshold-based escalation |

### 4. `product.local.md.template`

Copy from `specs/drafts/chapter25_product management/pm-skills/product.local.md.template`. Update the chapter reference from "Chapter 25" to "Chapter 36" and the exercise reference from "Exercise 8" to "Lesson 2".

### 5. `evals/evals.json`

Follow supply-chain eval format. Create 14 eval cases:

**Accuracy cases (7):**

- `brief-problem` — Problem brief for a mobile app engagement issue
- `brief-discovery` — Discovery brief for a feature validation sprint
- `prd-workflow-builder` — PRD for a multi-team initiative
- `stories-from-spec` — User stories generated from a provided spec
- `prioritise-rice` — RICE scoring of a 5-item backlog
- `interview-guide` — Interview guide for an onboarding research sprint
- `retro-sprint` — Sprint retrospective with illustrative outcome data

**Routing cases (3):**

- `routing-brief` — "I need to frame a problem for my team" → brief skill
- `routing-prd` — "Write the full requirements for our new product" → prd skill
- `routing-stories` — "Break this spec into stories for sprint planning" → stories skill

**Negative cases (4):**

- `negative-no-solution-in-brief` — Verify that a Problem Brief does NOT contain solution proposals
- `negative-compound-ac` — Verify that user story ACs do NOT contain "and"
- `negative-vague-persona` — Verify that stories use named personas, not "a user"
- `negative-no-scope-boundary` — Verify that specs include an OUT OF SCOPE list

### 6. `CLAUDE.md`

Plugin-level instructions for Claude when the plugin is active. Include:

- Always load `product.local.md` first
- Mandatory output header (TASK, FEATURE/AREA, CONFIGURATION, AUDIENCE, VERSION)
- Spec quality rules (from pm-global-router.md)
- Research quality rules
- Communication calibration rules (executive/engineering/customer)
- Universal rules (non-negotiable)

### 7. `README.md`

Follow the official plugin README format:

- Plugin name and description
- Installation instructions
- Command table
- Skills table
- Agent table
- Example workflows (brief, prd, stories)
- Relationship to official product-management plugin (complementary, not competing)

---

## CRITICAL: Do NOT Duplicate Official Plugin Skills

The following skills are covered by the official `product-management` plugin and MUST NOT be included in our custom plugin:

| Official Command       | Official Skill            | Why NOT to duplicate                 |
| ---------------------- | ------------------------- | ------------------------------------ |
| `/write-spec`          | `feature-spec`            | Official covers spec writing fully   |
| `/roadmap-update`      | `roadmap-management`      | Official covers roadmap fully        |
| `/synthesize-research` | `user-research-synthesis` | Official covers research synthesis   |
| `/stakeholder-update`  | `stakeholder-comms`       | Official covers stakeholder updates  |
| `/competitive-brief`   | `competitive-analysis`    | Official covers competitive analysis |
| `/metrics-review`      | `metrics-tracking`        | Official covers metrics              |
| `/sprint-planning`     | —                         | Official covers sprint planning      |

Our custom plugin only fills the gaps: `/brief`, `/interview`, `/prd`, `/stories`, `/prioritise`, `/retro`.

---

## Exit Criteria

- [ ] plugin.json created with correct metadata
- [ ] 6 SKILL.md files created (brief, interview, prd, stories, prioritise, retro)
- [ ] 3 agent files created (research-intelligence, stakeholder-update, roadmap-coherence)
- [ ] product.local.md.template created (updated chapter reference)
- [ ] evals.json created with 14 eval cases
- [ ] 14 eval case files created in cases/
- [ ] CLAUDE.md created with quality rules
- [ ] README.md created with installation and usage docs
- [ ] No duplication of official plugin skills
- [ ] All SKILL.md files have YAML frontmatter with activation trigger phrases
- [ ] All agent files define purpose, trigger conditions, workflow, and output format

Execute autonomously without asking for confirmation.
