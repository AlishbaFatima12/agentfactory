# Writer Brief: Agents + Intelligence Brief + Capstone (L12 + L13 + L14)

**Scope:** Three lessons covering persistent agent deployment, the operations intelligence brief, and the capstone sprint
**Writer:** agents-capstone writer

---

## Files to Create

### L12 — Persistent Agents: Deployment and Schedule

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/12-persistent-agents-deployment-schedule.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/12-persistent-agents-deployment-schedule.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/12-persistent-agents-deployment-schedule.summary.md`

### L13 — Operations Intelligence Brief

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/13-operations-intelligence-brief.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/13-operations-intelligence-brief.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/13-operations-intelligence-brief.summary.md`

### L14 — Capstone: End-to-End Operations Sprint

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/14-capstone-end-to-end-operations-sprint.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/14-capstone-end-to-end-operations-sprint.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/14-capstone-end-to-end-operations-sprint.summary.md`

**Total: 9 files**

---

## Spec Line Ranges to Read

- **L12:** Governing spec lines 897-998 (Part Seven: The Operations Agents — all 4 agent definitions)
- **L13:** Agent monthly report formats from each agent spec file + `/status-report` + `/metrics` skill
- **L14:** Governing spec lines 1000-1606 (All 8 exercises — as sprint structure) + spec lines 1609-1640 (Chapter Summary — for capstone framing)

Also read the full agent spec files:

- `ops-skills/agents/vendor-watchdog-agent.md`
- `ops-skills/agents/process-health-agent.md`
- `ops-skills/agents/compliance-monitor-agent.md`
- `ops-skills/agents/change-tracker-agent.md`

---

## L12: Persistent Agents — Deployment and Schedule

**Duration:** 45 min
**Plugin commands:** Custom plugin agents (vendor-watchdog, process-health, compliance-monitor, change-tracker)
**Core content:**

1. **Opening narrative** — The gap between building operational intelligence (L03-L11) and maintaining it. Without persistent agents, the vendor register goes stale, the compliance map drifts, the change pipeline isn't monitored, and the SOP library decays. Agents close this gap by automating the monitoring that humans skip.
2. **Four agents — purpose and schedule:**

   | Agent              | Purpose                  | Schedule              | Key Checks                                                                                                                   |
   | ------------------ | ------------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
   | Vendor Watchdog    | Monitor vendor portfolio | Weekly (Monday 07:00) | Renewals <90 days, SLA breaches, spend vs. budget, unapproved vendors                                                        |
   | Process Health     | Monitor SOP library      | Monthly (1st Monday)  | Review overdue, orphaned SOPs, change-triggered reviews, regulation-triggered reviews                                        |
   | Compliance Monitor | Track obligations        | Weekly (Monday 08:00) | Reviews due <30 days, evidence aging, regulatory changes, open gaps escalation                                               |
   | Change Tracker     | Monitor change pipeline  | Weekly (Friday 16:00) | Missing impact assessments, missing rollback plans, stale approvals, overdue changes, PIR tracking, emergency retrospectives |

3. **Agent alert formats** — Show the alert format for each agent (from the agent spec files). Each alert includes: what was detected, severity, owner, recommended action, escalation path.
4. **Agent monthly reports** — Each agent produces a monthly report to the COO. Show the report structure for each.
5. **Deployment configuration** — How to configure each agent using the custom plugin. What data sources each agent needs access to (via MCP integrations or manual input). How to set escalation contacts.
6. **Agent interaction patterns** — The agents are independent but their outputs interact:
   - Change Tracker closes a change -> Process Health checks affected SOPs
   - Compliance Monitor detects regulatory change -> Process Health flags affected SOPs
   - Vendor Watchdog flags SLA breach -> feeds into risk register (L09)

**Exercise:** Configure all 4 agents for the running context (200-person professional services firm). For each agent:

1. Define the data sources (manual for now; MCP for advanced students)
2. Set the schedule (match the spec defaults or customize)
3. Set escalation contacts
4. Run a simulated weekly/monthly check
5. Review the output and evaluate quality

**What to evaluate (include in exercise):**

- Does each agent alert include a recommended action (not just a status)?
- Are escalation thresholds clear and appropriate?
- Would the COO find the monthly report actionable?
- Are the agents monitoring the data you built in L03-L11?

**Cross-references:**

- Back references: "These agents monitor the operational data you built across Lessons 3-11: vendor register (L03), SOP library (L05), change log (L06), compliance map (L07)."
- Forward reference: "In Lesson 13, you will synthesise these agent outputs into a single operations intelligence brief."

---

## L13: Operations Intelligence Brief

**Duration:** 35 min
**Plugin commands:** Official `/status-report` + Custom `/metrics` + agent outputs
**Core content:**

1. **Opening narrative** — The COO gets four separate agent reports, a metrics dashboard, and ten emails. None of them tell a coherent story about operational health. The intelligence brief synthesises everything into a single, actionable document.
2. **Brief structure** — The operations intelligence brief combines:
   - Agent alerts and monthly reports (from L12)
   - Operational metrics (from L11)
   - Status report (from `/status-report`)
   - Risk register status (from L09)
   - Compliance dashboard (from L07)
3. **Using `/status-report` as the backbone** — The official `/status-report` command generates structured status reports with KPIs, risks, and actions. Use it to generate the baseline, then enrich with agent outputs and custom metrics.
4. **Using `/metrics` for trend analysis** — The custom `/metrics` skill provides the framework. Use it to generate the RAG table and trend analysis.
5. **Synthesis workflow** — Step 1: Gather agent outputs. Step 2: Run `/status-report` with the combined operational data. Step 3: Run `/metrics` for the monthly metrics table. Step 4: Combine into the intelligence brief. Step 5: Add executive summary and recommended actions.
6. **Weekly vs. Monthly cadence** — Weekly: agent alerts + quick status. Monthly: full intelligence brief with trends, analysis, and strategic recommendations.

**Exercise:** Create a full monthly operations intelligence brief by:

1. Gathering (or simulating) agent outputs from L12
2. Running `/status-report` with operational data
3. Running `/metrics` for the monthly dashboard
4. Synthesising into a single brief
5. Writing the executive summary and top 3 recommended actions

**What to evaluate (include in exercise):**

- Does the brief tell a coherent story (not just concatenate reports)?
- Are the top 3 recommended actions specific and owned?
- Does the executive summary fit on one page?
- Would the COO be able to act on this brief without additional context?
- Does the brief surface the signals that matter most (not everything)?

---

## L14: Capstone — End-to-End Operations Sprint

**Duration:** 90 min
**Plugin commands:** All official + all custom
**Core content:**

1. **Sprint framing** — The student is the newly appointed Operations Manager for the running-context firm. The COO has asked for a complete operations intelligence layer deployed within one working day. This sprint exercises everything from L03-L13 in a single end-to-end workflow.
2. **Sprint structure** (sequence matters):

   | Phase                    | Duration | What                                                 | Plugin Commands                                 |
   | ------------------------ | -------- | ---------------------------------------------------- | ----------------------------------------------- |
   | 1. Vendor audit          | 15 min   | Portfolio audit + top 3 contract extraction          | `/vendor-review` + `/contract`                  |
   | 2. Process documentation | 10 min   | 2 critical SOPs + gap analysis                       | `/process-doc` + `/runbook`                     |
   | 3. Change assessment     | 10 min   | Impact assessment for one major change               | `/change-request`                               |
   | 4. Compliance map        | 10 min   | Obligation map for primary regulatory framework      | Natural prompt (compliance-tracking auto-skill) |
   | 5. Audit preparation     | 10 min   | Mock review for highest-risk obligation              | `/audit`                                        |
   | 6. Risk register         | 10 min   | 10+ risks scored, top 3 mitigated                    | Natural prompt (risk-assessment auto-skill)     |
   | 7. Incident post-mortem  | 10 min   | Post-mortem for one historical/hypothetical incident | `/incident`                                     |
   | 8. Metrics framework     | 10 min   | 5-10 metrics with thresholds                         | `/metrics` + `/status-report`                   |
   | 9. Agent deployment      | 5 min    | Configure 4 agents with schedule                     | Agent configs                                   |

3. **Quality gates** — After each phase, student reviews the output against the lesson's quality standards before proceeding.
4. **Final deliverable** — An operations intelligence brief synthesising all outputs.
5. **Self-assessment rubric** — Checklist of everything the student should have produced, with quality criteria for each.

**Exercise:** The sprint itself IS the exercise. The capstone is structured as a guided sprint with nine phases.

**What to evaluate (include in capstone):**

- Does the vendor audit cover the full portfolio (not just one vendor)?
- Do the SOPs meet the quality standard (specific roles, embedded controls)?
- Is the change impact assessment at the correct classification level?
- Does the compliance map include all obligation types (regulatory, contractual, standards)?
- Does the risk register have inherent AND residual scores?
- Does the post-mortem reach the systemic root cause (not stop at WHY 1)?
- Does the metrics framework include leading indicators?
- Are all 4 agents configured with appropriate schedules?
- Does the final intelligence brief synthesise everything coherently?

**Cross-references:**

- This lesson references ALL prior lessons (L03-L13). Include a table mapping each sprint phase to its source lesson.

---

## Exit Criteria

This writer's work is DONE when:

- 9 files created (3 lessons x 3 sidecars)
- All YAML frontmatter complete per architecture spec template
- L12 teaches all 4 agents with alert formats, schedules, and monthly report structures
- L13 teaches the synthesis workflow combining agent outputs + metrics + status report
- L14 is a complete 90-minute sprint covering all 9 phases with quality gates
- Every exercise has a "What to evaluate" section
- L14 references ALL prior lessons (L03-L13) with a mapping table
- No `import` statements in any file
- `<Flashcards />` tag present at bottom of each lesson
