# Writer Brief: Communicate + Automate (L11 + L12 + L13 + L14 + L15)

**Writer scope:** Execution, communication, measurement, and automation — the final arc from sprint planning through retrospective and persistent agents. L14 is the capstone-style lesson.

**Read before writing:**

1. `specs/drafts/ch36-product-management/shared-brief.md` — shared rules
2. `specs/drafts/ch36-product-management/architecture-spec.md` — full architecture

---

## Files to Create

### L11: Sprint Planning & Capacity

**Files:**

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/11-sprint-planning-capacity.md`
- `11-sprint-planning-capacity.flashcards.yaml`
- `11-sprint-planning-capacity.summary.md`

**Skill spec file to read:**

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/sprint-planning/SKILL.md` — official sprint-planning skill

**Content notes:**

- Official plugin only — `/sprint-planning`
- Sprint plan structure: goal, capacity table, sprint backlog (P0/P1/P2), risks, definition of done, key dates
- Capacity planning: subtract overhead (meetings, on-call, PTO), plan to 70-80% capacity
- One clear sprint goal — if you cannot state it in one sentence, the sprint is unfocused
- Carryover from previous sprints — understand why before re-committing
- Worked example: Plan Sprint 1 of InsightFlow's Workflow Builder using the prioritised backlog from L10
- Exercise: Run `/sprint-planning` for InsightFlow Sprint 1. Evaluate: Is load below 80% of capacity? Are stretch items identified? Are dependencies flagged?
- Duration: 35 min
- Bloom's level: Apply (B1-B2)

### L12: Stakeholder Communication

**Files:**

- `12-stakeholder-communication.md`
- `12-stakeholder-communication.flashcards.yaml`
- `12-stakeholder-communication.summary.md`

**Spec source:** Lines 744–845 of governing spec (Part Six: Communication)

**Skill spec file to read:**

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/stakeholder-update/SKILL.md` — official stakeholder-update skill

**Content notes:**

- Official plugin only — `/stakeholder-update`
- Three audience versions from the same status data: Executive (brief, outcome-focused, <300 words), Engineering (technical, links, priorities), Customer (value language, no internal jargon)
- Status framework: Green/Yellow/Red with rules for when to change status
- Risk communication: ROAM framework (Resolved, Owned, Accepted, Mitigated)
- Decision documentation: ADR format (Context, Decision, Consequences, Alternatives)
- Worked example: Generate three versions of InsightFlow's weekly update from Sprint 1 progress
- Exercise: Run `/stakeholder-update` for InsightFlow (weekly, exec audience). Then run it again for engineering audience. Compare the two outputs — what changes? What stays the same?
- Duration: 40 min
- Bloom's level: Apply → Analyze (B1-B2)
- Key insight: every audience gets a version calibrated to them. Never send the same version to different audiences.

### L13: Metrics, OKRs & Product Analytics

**Files:**

- `13-metrics-okrs-product-analytics.md`
- `13-metrics-okrs-product-analytics.flashcards.yaml`
- `13-metrics-okrs-product-analytics.summary.md`

**Skill spec file to read:**

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/metrics-review/SKILL.md` — official metrics-review skill

**Content notes:**

- Official plugin only — `/metrics-review`
- Product metrics hierarchy: North Star → L1 Health Indicators (acquisition, activation, engagement, retention, monetization, satisfaction) → L2 Diagnostic Metrics
- InsightFlow North Star: "Weekly active teams creating or editing dashboards"
- OKR framework: Objectives (qualitative, aspirational) + Key Results (quantitative, measurable, 2-4 per objective)
- Review cadences: weekly (15-30 min, catch issues), monthly (30-60 min, trends), quarterly (60-90 min, strategic)
- Dashboard design principles: start with the question, hierarchy of information, fewer metrics more insight
- Worked example: Run a monthly metrics review for InsightFlow using illustrative post-Sprint 1 data
- Exercise: Define InsightFlow's North Star and 5 L1 metrics. Run `/metrics-review` with provided sample data. Evaluate: does every metric have a comparison? Are anomalies explained?
- Duration: 45 min
- Bloom's level: Analyze → Evaluate (B2)

### L14: Continuous Intelligence — Agents & Retrospectives

**Files:**

- `14-continuous-intelligence-agents-retrospectives.md`
- `14-continuous-intelligence-agents-retrospectives.flashcards.yaml`
- `14-continuous-intelligence-agents-retrospectives.summary.md`

**Spec source:** Lines 946–1097 of governing spec (Part Eight: Continuous Intelligence)

**Skill spec files to read:**

- `specs/drafts/chapter25_product management/pm-skills/products/retro.md` — custom retro skill
- `specs/drafts/chapter25_product management/pm-skills/agents/research-intelligence-agent.md`
- `specs/drafts/chapter25_product management/pm-skills/agents/stakeholder-update-agent.md`
- `specs/drafts/chapter25_product management/pm-skills/agents/roadmap-coherence-agent.md`

**Content notes:**

- Custom plugin — `/retro` command + 3 persistent agents
- **Part 1: Retrospective** — The four retro questions: Did it solve the problem? Did we build it as intended? Were the metrics right? What would we do differently?
- Data required before running a retro: outcome data (4-12 weeks post-launch), delivery data, team data
- Process improvement format: every "what went wrong" → specific, testable process change (not vague intention)
- product.local.md updates from retro findings — if nothing changes, the retro was a waste of time
- Worked example: Run `/retro` for InsightFlow's Workflow Builder Sprint 1 using illustrative outcome data
- **Part 2: Three Persistent Agents** — Teach each agent's purpose, trigger conditions, workflow, and output format:
  1. **Research Intelligence Agent** — weekly user signal monitoring (support tickets, NPS, feature requests), cross-channel escalation rules
  2. **Stakeholder Update Agent** — automated three-version weekly updates with PM review gate, triggered customer-committed feature alerts
  3. **Roadmap Coherence Agent** — three weekly checks (backlog orphan detection, roadmap coverage, sprint alignment), escalation when off-roadmap work exceeds 30%
- Exercise: Run `/retro` for InsightFlow Sprint 1, then discuss which of the three agents would have caught issues earlier
- Duration: 45 min
- Bloom's level: Evaluate → Create (B2-C1)
- This is the capstone-style lesson — it ties the entire PM cycle together

### L15: Chapter Summary & Quick Reference

**Files:**

- `15-chapter-summary-quick-reference.md`
- `15-chapter-summary-quick-reference.flashcards.yaml`
- `15-chapter-summary-quick-reference.summary.md`

**Spec source:** Lines 1500–1622 of governing spec (Summary section)

**Content notes:**

- No new concepts — pure reference
- Command quick reference table: all commands from both plugins, one-line purpose, which plugin, which lesson
- Agent quick reference: all 3 agents, purpose, trigger, output
- The PM workflow cycle diagram (text-based): Discover → Research → Define → Plan → Execute → Communicate → Measure → Reflect → (cycle back)
- Key quality rules consolidated: the "NEVER DO" rules across all skills
- product.local.md section reference
- Links to all 14 prior lessons
- Duration: 15 min
- Bloom's level: Remember (A2)

---

## Exit Criteria

- [ ] 5 lesson files created (L11-L15) with full YAML frontmatter
- [ ] 5 flashcards.yaml sidecar files (10-15 cards each)
- [ ] 5 summary.md sidecar files
- [ ] All lessons use InsightFlow consistently
- [ ] L11 uses L10's prioritised backlog as input
- [ ] L12 generates three audience versions from the same data
- [ ] L13 defines InsightFlow's North Star and L1 metrics
- [ ] L14 covers both `/retro` command AND all 3 persistent agents
- [ ] L14 references the full exercise chain (L03-L13) in its retrospective
- [ ] L15 consolidates all commands, agents, and quality rules into reference tables
- [ ] No "Claude in Excel" — use "Cowork" only
- [ ] No import statements for non-existent components
- [ ] All Try With AI sections have 3 prompts (Reproduce → Adapt → Apply)

Execute autonomously without asking for confirmation.
