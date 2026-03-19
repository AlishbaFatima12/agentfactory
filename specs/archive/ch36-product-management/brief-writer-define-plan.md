# Writer Brief: Define & Plan (L06 + L07 + L08 + L09 + L10)

**Writer scope:** The definition and planning arc — from feature specs through prioritised backlog. This is the most command-dense section of the chapter.

**Read before writing:**

1. `specs/drafts/ch36-product-management/shared-brief.md` — shared rules
2. `specs/drafts/ch36-product-management/architecture-spec.md` — full architecture

---

## Files to Create

### L06: Feature Specifications

**Files:**

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/36-product-management/06-feature-specifications.md`
- `06-feature-specifications.flashcards.yaml`
- `06-feature-specifications.summary.md`

**Spec source:** Lines 69–251 of governing spec (Part One: Feature Specifications)

**Skill spec file to read:**

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/write-spec/SKILL.md` — official write-spec skill

**Content notes:**

- Official plugin only — `/write-spec`
- Teach the two failure modes: the vague spec vs. the over-specified spec
- The anatomy of a good spec: Problem, Solution (with scope boundary), Acceptance Criteria, Edge Cases, Open Questions
- AC enforcement rules: independently testable, no "and", behavior not implementation, measurable thresholds
- Scope boundary rule: every spec MUST have an explicit OUT OF SCOPE list
- Worked example: spec for InsightFlow's Workflow Builder "trigger configuration" feature (a subset of the full initiative)
- Exercise: Run `/write-spec` for a different InsightFlow feature (e.g., "bulk dashboard export"), evaluate against the five-section anatomy
- Duration: 45 min
- Bloom's level: Apply → Evaluate (B1-B2)
- References L04's research synthesis as evidence for the Problem section

### L07: PRDs for Multi-Team Initiatives

**Files:**

- `07-prds-multi-team-initiatives.md`
- `07-prds-multi-team-initiatives.flashcards.yaml`
- `07-prds-multi-team-initiatives.summary.md`

**Spec source:** Lines 252–343 of governing spec (Part Two: PRDs)

**Skill spec file to read:**

- `specs/drafts/chapter25_product management/pm-skills/products/prd.md` — custom PRD skill

**Content notes:**

- Custom plugin only — `/prd`
- When to write a PRD vs. a spec (multiple features, multiple teams, executive alignment)
- The 10-section PRD template: Executive Summary, Business Context, User Requirements, Functional Requirements, Non-Functional Requirements, Technical Architecture Notes, GTM Requirements, Launch Plan, Dependencies and Risks, Open Questions
- Status gates: DRAFT → REVIEW → REFINED → APPROVED → SHIPPED
- Worked example: Full PRD for InsightFlow's Workflow Builder initiative (wraps the L06 spec into the broader multi-team document)
- Exercise: Run `/prd` for the Workflow Builder. Evaluate: Does every MUST requirement actually need to ship? Is the failure threshold defined? Does the engineering lead need to sign off on architecture notes?
- Duration: 45 min
- Bloom's level: Apply → Evaluate (B2)

### L08: User Stories & Story Mapping

**Files:**

- `08-user-stories-story-mapping.md`
- `08-user-stories-story-mapping.flashcards.yaml`
- `08-user-stories-story-mapping.summary.md`

**Spec source:** Lines 615–743 of governing spec (Part Five: User Stories)

**Skill spec file to read:**

- `specs/drafts/chapter25_product management/pm-skills/products/stories.md` — custom stories skill

**Content notes:**

- Custom plugin only — `/stories`
- Story anatomy: As a [SPECIFIC PERSONA], I want to [CAPABILITY], So that [USER OUTCOME]
- Quality test for each part: persona from product.local.md (not "a user"), capability not UI element, user outcome not system action
- AC format: independently testable, no "and", include error states
- Sizing: ideal = 1-3 days by one engineer; >7 ACs = split
- Epic / Story / Sub-task hierarchy: PMs own epics and stories, engineers own sub-tasks
- Story generation from spec: identify flows → identify personas → one story per persona-flow → derive ACs
- Worked example: Generate stories from L07's PRD for the Workflow Builder
- Exercise: Run `/stories` on the PRD, evaluate against the quality test, split any oversized stories
- Duration: 40 min
- Bloom's level: Apply → Analyze (B1-B2)

### L09: Roadmap Planning & Communication

**Files:**

- `09-roadmap-planning-communication.md`
- `09-roadmap-planning-communication.flashcards.yaml`
- `09-roadmap-planning-communication.summary.md`

**Spec source:** Lines 344–495 of governing spec (Part Three: Roadmaps)

**Skill spec file to read:**

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/product-management/skills/roadmap-update/SKILL.md` — official roadmap-update skill

**Content notes:**

- Official plugin only — `/roadmap-update`
- Four roadmap frameworks: Now/Next/Later, Quarterly Themes, OKR-Aligned, Timeline/Gantt
- When to use each (Now/Next/Later for external comms, Timeline for engineering planning)
- Dependency mapping: technical, team, external, knowledge, sequential
- Capacity planning: 70% features / 20% tech health / 10% unplanned
- Communicating roadmap changes: acknowledge → explain → show tradeoff → show new plan → acknowledge impact
- Worked example: Build InsightFlow's Q3 roadmap with Workflow Builder as the primary initiative, using Now/Next/Later format
- Exercise: Run `/roadmap-update` to create InsightFlow's Q3 roadmap. Then simulate a dependency slip and run `/roadmap-update` again to reprioritise.
- Duration: 40 min
- Bloom's level: Apply → Evaluate (B2)

### L10: Backlog Prioritization Frameworks

**Files:**

- `10-backlog-prioritization-frameworks.md`
- `10-backlog-prioritization-frameworks.flashcards.yaml`
- `10-backlog-prioritization-frameworks.summary.md`

**Spec source:** Lines 846–945 of governing spec (Part Seven: Prioritisation)

**Skill spec file to read:**

- `specs/drafts/chapter25_product management/pm-skills/products/prioritise.md` — custom prioritise skill

**Content notes:**

- Custom plugin only — `/prioritise`
- Framework selection: RICE (rank many features), Value vs. Effort (quick 2x2), Kano (customer demand vs. complexity), MoSCoW (stakeholder communication)
- RICE deep dive: Reach × Impact × Confidence ÷ Effort, with scoring assumptions shown
- The three mandatory challenges: Strategic Override Test, Data Gap Test, "What Would We Regret?" Test
- Single feature evaluation framework for yes/no decisions
- Worked example: RICE-score InsightFlow's backlog of 8 features (including Workflow Builder sub-features from L08 stories)
- Exercise: Run `/prioritise` on the InsightFlow backlog, run all three challenges, produce the quarterly priority decision
- Duration: 45 min
- Bloom's level: Evaluate → Create (B2-C1)
- Key insight: scoring assumptions matter more than scores. A RICE score from bad data is worse than no score.

---

## Exit Criteria

- [ ] 5 lesson files created (L06-L10) with full YAML frontmatter
- [ ] 5 flashcards.yaml sidecar files (10-15 cards each)
- [ ] 5 summary.md sidecar files
- [ ] All lessons use InsightFlow "Workflow Builder" feature consistently
- [ ] L06 references L04's research synthesis as evidence
- [ ] L07 wraps L06's spec into a PRD
- [ ] L08 decomposes L07's PRD into stories
- [ ] L09 uses L08's stories in the roadmap
- [ ] L10 prioritises L08's story backlog
- [ ] Each exercise specifies plugin (official vs. custom) and exact command
- [ ] No "Claude in Excel" — use "Cowork" only
- [ ] No import statements for non-existent components
- [ ] All Try With AI sections have 3 prompts (Reproduce → Adapt → Apply)

Execute autonomously without asking for confirmation.
