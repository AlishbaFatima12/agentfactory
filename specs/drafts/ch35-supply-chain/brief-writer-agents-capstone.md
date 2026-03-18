# Writer Brief: Agents + Comms + Exit + Capstone (L11 + L12 + L13 + L14)

## Scope

You write 4 lesson files + their 8 sidecars. These lessons cover vendor communications, persistent agents, vendor exit, and the capstone — the culmination of the chapter where everything comes together.

## Files to Create

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/
├── 11-vendor-communications-disputes.md
├── 11-vendor-communications-disputes.flashcards.yaml
├── 11-vendor-communications-disputes.summary.md
├── 12-persistent-agents-schedule.md
├── 12-persistent-agents-schedule.flashcards.yaml
├── 12-persistent-agents-schedule.summary.md
├── 13-vendor-exit-protocol.md
├── 13-vendor-exit-protocol.flashcards.yaml
├── 13-vendor-exit-protocol.summary.md
├── 14-capstone-end-to-end-procurement.md
├── 14-capstone-end-to-end-procurement.flashcards.yaml
└── 14-capstone-end-to-end-procurement.summary.md
```

## What to Read

1. **Shared brief**: `specs/drafts/ch35-supply-chain/shared-brief.md`
2. **Architecture spec**: `specs/drafts/ch35-supply-chain/architecture-spec.md` — Sections 5-7, 9
3. **Reference lesson (L03)**: The gold standard
4. **Spec product file**: `products/vendor-communication.md`
5. **Spec agent files**: ALL 5 files in `agents/`

### Spec Line Ranges

| Lesson | Read These Spec Lines                                                                    |
| ------ | ---------------------------------------------------------------------------------------- |
| L11    | vendor-communication.md product file (all 5 communication types)                         |
| L12    | Lines 662-770 (Five Core Agents) + Lines 1195-1244 (Exercise 7) + all 5 agent spec files |
| L13    | Lines 1247-1306 (Exercise 8: Vendor Exit Protocol)                                       |
| L14    | All exercises (lines 772-1306) for capstone integration                                  |

## Content-Specific Notes

### L11: Vendor Communications and Disputes (35 min, Applied)

- **Command**: `/vendor-communicate` (RENAMED from `/communicate`)
- Five communication types from the vendor-communication.md product file:
  1. Invoice Dispute Notice
  2. Corrective Action Request (CAR)
  3. Contract Non-Renewal Notice
  4. Emergency Supply Assurance Request
  5. Vendor Exit Notice (Planned Transition)
- Communication standards: professional, factual, constructive tone. State facts, reference PO numbers, clear required action, deadline
- Authority levels: who signs what (category manager, CPO, CPO + Legal)
- **No exercise** — the communication templates are used throughout other exercises (Ex 2 dispute letters, Ex 3 risk escalation, Ex 8 exit notices)
- **Try With AI**: (1) Draft a dispute notice for a price variance on a recent invoice, (2) Write a CAR for a supplier whose OTD has dropped below 85%, (3) Draft an emergency supply assurance request based on a news event about the student's critical supplier
- Skills metadata: Applied/Soft, B1, Apply level

### L12: Persistent Agents and Schedule (40 min, Systems)

- **Commands**: All 5 agents + `/schedule`
- This is the lesson where individual skills become a system. Each agent automates a workflow the student has already performed manually in L03-L11
- The 5 agents:
  1. **Vendor Health Monitor** — continuous vendor surveillance (daily news scan, weekly OTD trend, Tier 2 signals)
  2. **Invoice Reconciliation Agent** — AP inbox -> four-stage automated workflow
  3. **Procurement Calendar Agent** — contract renewals, certification expiry, compliance deadlines
  4. **Logistics Intelligence Agent** — carrier SLA tracking, fuel index monitoring, disruption alerts
  5. **Spend Intelligence Agent** — monthly category analytics, commodity price triggers, maverick spend
- For each agent: purpose, trigger, workflow, output format, escalation rules
- Scheduling via `/schedule` — how to set daily, weekly, monthly cadences
- **Exercise (Ex 7)**: Lines 1195-1244 — build the supply chain intelligence dashboard
  - Define metrics, configure agent parameters, generate first weekly executive brief
  - Design escalation alerts for the CPO
  - Uses `/supply-chain-brief` for the executive dashboard output
- **Try With AI**: (1) Configure the Vendor Health Monitor for the student's top 5 vendors, (2) Design the weekly executive brief format for the student's CPO, (3) Define the escalation criteria that would interrupt leadership on a Sunday evening
- Skills metadata: Systems/Technical, B2, Create/Evaluate level

### L13: Vendor Exit Protocol (35 min, Risk Management)

- **Command**: `/vendor-assess` (exit mode)
- Vendor exit is the test of the procurement operating system — not how it works when everything is fine, but how it performs under pressure
- Exit triggers: financial distress, quality failure, geopolitical event, strategic sourcing change
- Exit assessment: immediate actions (days 1-7), short-term mitigation (days 8-30), transition plan (days 31-60+)
- Alternative sourcing sprint: emergency RFQ process
- Communication plan: internal (ops, production, finance) + to exiting vendor + to alternative vendors
- Post-mortem: could this have been predicted? What monitoring would have given earlier warning?
- **Exercise (Ex 8)**: Lines 1247-1306 — build a vendor exit protocol
  - **References Ex 1**: Select highest-risk bottleneck vendor from the classification register (L03)
  - Scenario: vendor closing manufacturing operation in 60 days
  - Full exit plan, emergency RFQ, communication plan, structural change recommendation
- **Try With AI**: (1) Simulate an exit scenario for the student's highest-risk bottleneck vendor, (2) Draft the internal communication for a strategic vendor exit, (3) Design the structural changes that would prevent this scenario recurring
- Skills metadata: Applied/Strategic, B2, Evaluate/Create level

### L14: Capstone — End-to-End Procurement (90 min, Capstone)

- **All commands and agents used**
- This is the integration lesson — the student runs through a complete procurement cycle using everything they have built
- Capstone scenario: a new vendor category needs to be brought under management
  - Phase 1: Classify vendors in the category (L03 skills)
  - Phase 2: Assess the top vendors (L04 skills)
  - Phase 3: Configure and test reconciliation rules (L05 + L06 skills)
  - Phase 4: Run risk assessment on critical vendors (L07 skills)
  - Phase 5: Analyse logistics and spend for the category (L08 + L10 skills)
  - Phase 6: Deploy agents for continuous monitoring (L12 skills)
  - Phase 7: Generate the first weekly executive brief (L12 skills)
- The capstone should take ~90 minutes and produce a complete, deployable procurement operating system for one category
- **Exercise structure**: One continuous scenario, not separate exercises. Each phase builds on the prior phase's output
- **Deliverable**: Complete procurement intelligence system for one spend category: classification register, vendor assessments, reconciliation rules, risk dashboard, agent configuration, and first executive brief
- **Try With AI**: Embedded in the capstone phases (no separate Try With AI section — the whole lesson is hands-on)
- Skills metadata: Applied/Strategic, B2-C1, Create/Evaluate level

## Exit Criteria

- [ ] 4 lesson files with complete YAML frontmatter
- [ ] 8 sidecar files
- [ ] L11 uses renamed command: `/vendor-communicate`
- [ ] L12 covers all 5 agents with purpose, trigger, workflow, output format
- [ ] L13 references Ex 1 classification register (cross-reference with link)
- [ ] L14 integrates all skills and agents into one continuous scenario
- [ ] L14 is ~90 minutes duration (longest in chapter)
- [ ] Each lesson has 3 Try With AI prompts (except L14 which is fully hands-on)
- [ ] "Cowork" terminology used throughout
- [ ] No `import` statements for non-existent components
