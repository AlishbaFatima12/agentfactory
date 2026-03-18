# Writer Brief: Incident + Metrics (L10 + L11)

**Scope:** Two lessons covering incident management and operational metrics
**Writer:** incident-metrics writer

---

## Files to Create

### L10 — Incident Management: Post-Mortem and Five Whys

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/10-incident-management-postmortem-five-whys.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/10-incident-management-postmortem-five-whys.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/10-incident-management-postmortem-five-whys.summary.md`

### L11 — Operational Metrics: Designing What to Measure

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/11-operational-metrics-designing-what-to-measure.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/11-operational-metrics-designing-what-to-measure.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/11-operational-metrics-designing-what-to-measure.summary.md`

**Total: 6 files**

---

## Spec Line Ranges to Read

- **L10:** Governing spec lines 768-893 (Part Six: Incident Management) + `ops-skills/products/incident.md` (full file — primary source for /incident skill)
- **L11:** Governing spec lines 1481-1549 (Exercise 7: Metrics Dashboard) + `ops-skills/products/metrics.md` (full file — primary source for /metrics skill)

---

## L10: Incident Management — Post-Mortem and Five Whys

**Duration:** 45 min
**Plugin command:** Custom `/incident`
**Core content:**

1. **Opening narrative** — The payment processing outage from the spec (lines 778-893). 4 hours 23 minutes. 2,400 declined transactions. 847 complaints. The root cause: a health check threshold misconfigured during a migration 4 months ago. The runbook referenced old IP addresses. The lesson: every incident has a systemic root cause that the proximate fix does not address.
2. **Post-mortem structure** — Full output format from the incident skill spec: Incident ID, timeline (specific times), impact (users, transactions, revenue, regulatory, reputational), root cause analysis, contributing factors, what went well, corrective actions, lessons learned.
3. **The Five Whys technique** — From the skill spec's example: ask "why?" five times. Move from proximate cause (WHY 1: failover didn't trigger) to systemic cause (WHY 5: migration checklists never updated for cloud). The corrective action must target the systemic cause, not just the proximate fix.
4. **Corrective action quality test** — Five criteria from the skill spec:
   - Specific (not "improve the runbook process")
   - Owned (one named person, not "the team")
   - Time-bound (a date, not "ASAP")
   - Addresses root cause (WHY 4 or 5, not WHY 1)
   - Verifiable (how will we confirm it's done?)
5. **Incident severity classification** — P1 (Critical), P2 (Major), P3 (Minor). Post-mortem requirements by severity.
6. **Blameless culture** — Frame every question as "what in our systems allowed this?" not "who made the mistake?" Blame produces defensiveness; systems thinking produces learning.

**Exercise:** Conduct a full post-mortem for a real or realistic incident (the payroll system scenario from the spec is a good default). Run `/incident` with timeline, impact, and root cause hypothesis. Then drill with Five Whys. Test every corrective action against the quality criteria.

**What to evaluate (include in exercise):**

- Does the timeline use specific times (not "eventually" or "shortly after")?
- Does the root cause analysis reach the systemic level (not stop at the proximate event)?
- Is every corrective action specific, owned, time-bound, root-cause-targeted, and verifiable?
- Does the post-mortem include "what went well" (every incident has positives)?
- Would the lessons learned be useful to someone outside this team?

**Cross-references:**

- Connection to L05: "If the post-mortem identifies SOPs that need updating, use the `/runbook` workflow from Lesson 5 to make the corrections."
- Forward reference: "The incident metrics in Lesson 11 (MTTR, MTTD, corrective action completion rate, repeat incident rate) track the patterns you identify here."

---

## L11: Operational Metrics — Designing What to Measure

**Duration:** 40 min
**Plugin commands:** Custom `/metrics` + Official `/status-report`
**Core content:**

1. **Opening narrative** — An operational report with 30 metrics tells leadership nothing. 5-10 well-chosen metrics that tell the operational story clearly are worth more than a data dump nobody reads. This lesson teaches how to design what to measure.
2. **Five metrics design principles** from the skill spec:
   - Measure what matters, not what is easy
   - Leading indicators over lagging (leading = what is about to happen; lagging = what happened)
   - Every metric has a named owner
   - Red thresholds trigger actions (without a red threshold, a metric is a thermometer, not an alarm)
   - Fewer, better (5-10 metrics max)
3. **Metric definition structure** — Name, what it measures, why it matters, type (leading/lagging), formula, data source, frequency, owner, thresholds (green/amber/red), trend direction.
4. **Standard operations metrics library** — Organized by domain from the skill spec: Vendor Management (4 metrics), Process Operations (4), Change Management (4), Compliance (4), Risk (4), Incident (4). For each domain, identify which are leading and which are lagging.
5. **Dashboard design** — One-page operational report format: headline status, metric table with RAG and trend, key issues (red only), watch items (amber), completed actions, upcoming.
6. **Using `/metrics` and `/status-report` together** — `/metrics` designs the framework (which metrics, how defined, what thresholds). `/status-report` generates the periodic report that fills in the actual values.

**Exercise:** Design a metrics framework for your operations function. Define 5-10 metrics with full definition (name, formula, source, owner, thresholds). Ensure at least one leading indicator per major risk area. Run `/metrics` to design the framework. Then run `/status-report` to generate a sample monthly report using the framework.

**What to evaluate (include in exercise):**

- Does every metric have a defined red threshold (not just a target)?
- Is there at least one leading indicator for each major risk area?
- Is every metric owned by a named person (not "the team")?
- Is the formula precise enough that two people would calculate the same number?
- Would a COO be able to act on this dashboard in under 5 minutes?

**Cross-references:**

- Back references: "The metrics you define here should reference the operational data you have been building: vendor SLA compliance from Lesson 3, SOP currency from Lesson 5, change failure rate from Lesson 6, compliance obligation currency from Lesson 7, risk register review completion from Lesson 9, and incident MTTR from Lesson 10."
- Forward reference: "The operations intelligence brief in Lesson 13 draws directly from these metrics plus the agent outputs from Lesson 12."

---

## Exit Criteria

This writer's work is DONE when:

- 6 files created (2 lessons x 3 sidecars)
- All YAML frontmatter complete per architecture spec template
- L10 teaches the Five Whys technique with the corrective action quality test
- L11 teaches metrics design with the leading/lagging distinction and the 5-principle framework
- L11 demonstrates `/metrics` and `/status-report` working together
- Every exercise has a "What to evaluate" section
- Cross-references connect L10 to L05 (SOPs) and L11 to L13 (intelligence brief)
- No `import` statements in any file
- `<Flashcards />` tag present at bottom of each lesson
