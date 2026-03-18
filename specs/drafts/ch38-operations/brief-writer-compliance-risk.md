# Writer Brief: Compliance + Audit + Risk (L07 + L08 + L09)

**Scope:** Three lessons covering compliance tracking, audit preparation, and operational risk
**Writer:** compliance-risk writer

---

## Files to Create

### L07 — Compliance Tracking: Obligations and Evidence

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/07-compliance-tracking-obligations-evidence.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/07-compliance-tracking-obligations-evidence.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/07-compliance-tracking-obligations-evidence.summary.md`

### L08 — Audit Preparation: Evidence and Mock Review

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/08-audit-preparation-evidence-mock-review.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/08-audit-preparation-evidence-mock-review.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/08-audit-preparation-evidence-mock-review.summary.md`

### L09 — Operational Risk Register That Works

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/09-operational-risk-register-that-works.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/09-operational-risk-register-that-works.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/09-operational-risk-register-that-works.summary.md`

**Total: 9 files**

---

## Spec Line Ranges to Read

- **L07:** Governing spec lines 497-628 (Part Four: Compliance Tracking)
- **L08:** Governing spec lines 630-640 (Audit Preparation) + `ops-skills/products/audit.md` (full file — primary source for /audit skill)
- **L09:** Governing spec lines 643-764 (Part Five: Operational Risk)

Also read:

- `ops-skills/products/compliance.md` — for compliance skill depth (though this is official auto-skill territory)
- `ops-skills/products/risk.md` — for risk skill depth (though this is official auto-skill territory)
- Global router standards: Risk Scoring (lines 66-91), Compliance Status (lines 109-120)

---

## L07: Compliance Tracking — Obligations and Evidence

**Duration:** 45 min
**Plugin command:** Official auto-skill `compliance-tracking` (triggered by natural prompts, NOT as slash command)
**Core content:**

1. **Opening narrative** — The compliance visibility problem. Everyone knows obligations exist. Nobody has a complete, current, verified view. Compliance drift happens silently: a regulation changes, the control isn't updated. An employee leaves, taking knowledge of how a control works.
2. **The compliance obligation map** — Structure from the spec: regulatory obligations (by framework), contractual obligations, standards obligations. Each obligation has: description, owner, control, evidence, status.
3. **Compliance status standard** — Five statuses from the global router:
   - CURRENT: Control effective, evidence current, no gaps
   - REVIEW NEEDED: Evidence aging, control not recently tested
   - PARTIAL: Control exists but incomplete, evidence gaps
   - GAP: No effective control, evidence absent
   - URGENT: Active breach risk, immediate action required
   - **Rule:** Never mark CURRENT without evidence. No evidence = PARTIAL at best.
4. **Worked example** — Map compliance obligations for a UK professional services firm (matching the chapter's running context). Show regulatory (UK GDPR, Companies Act, AML), contractual (client SLAs), and standards (ISO 27001) obligations.
5. **Evidence inventory** — For each CURRENT obligation, verify: what evidence exists, where it is stored, how old it is.
6. **Remediation planning** — For gaps and partials, prioritise by regulatory consequence, business risk, and effort.

**Exercise:** Choose a regulatory framework (UK GDPR recommended if uncertain). List obligations, map each with owner/control/evidence/status. Run the compliance mapping prompt naturally:

```
Map our compliance obligations for a UK professional services firm.
We are subject to UK GDPR, Companies Act, and AML regulations.
Known gaps: [student's honest assessment]
```

Then run evidence inventory for CURRENT obligations and remediation planning for gaps.

**CRITICAL: Auto-skill activation.** Students prompt naturally. The `compliance-tracking` auto-skill activates from keywords like "compliance", "obligations", "regulatory". Do NOT write `/compliance-tracking` anywhere in this lesson.

**What to evaluate (include in exercise):**

- Has the output identified obligations the student missed?
- Is the status classification honest (not everything marked CURRENT)?
- Is evidence cited for every CURRENT obligation (per the standard)?
- Are GAP obligations flagged with appropriate urgency?

**Cross-references:**

- Back reference: "Include the contractual obligations you extracted in Lesson 4 — these are part of your compliance landscape."
- Forward reference: "The compliance-monitor agent in Lesson 12 will track these obligations continuously, alerting you when reviews are due and evidence is aging."

---

## L08: Audit Preparation — Evidence and Mock Review

**Duration:** 40 min
**Plugin command:** Custom `/audit`
**Core content:**

1. **Opening narrative** — The audit that reveals you cannot locate your own evidence is harder to recover from than the audit that reveals a control gap. This lesson teaches structured audit preparation.
2. **Audit types** — Internal, External, Regulatory, Customer, Certification. Each has different preparation requirements.
3. **Pre-audit preparation plan** — Week-by-week timeline. Evidence inventory (for each focus area: obligation/control, evidence required, location, age, status). Gaps to close before audit (priority 1 and 2 with dates).
4. **Mock audit / review** — Simulate the auditor's approach. Questions as auditor would phrase them. Ideal answers. Evidence to present. Gaps identified.
5. **Audit response framework** — When findings arrive: finding classification (Critical/Major/Minor/Observation). Response structure: finding, response, root cause, action, owner, target date, evidence of completion.
   - **Key point:** Audit responses demonstrate governance maturity. Defensive responses damage the relationship. Specific, accountable, evidenced responses demonstrate maturity.
6. **Worked example** — Preparing for an annual regulatory visit or ISO surveillance audit using the compliance map from L07.

**Exercise:** Using the compliance map from L07, prepare for an audit:

1. Run `/audit` to generate a preparation plan for a specific upcoming audit
2. Run `/audit` to conduct a mock review on the highest-risk obligation
3. Draft an audit response for a hypothetical finding

**What to evaluate (include in exercise):**

- Does the preparation plan include an evidence inventory with gap status?
- Are mock audit questions realistic for the chosen regulatory body?
- Does the audit response acknowledge the finding (not argue with it)?
- Is every action in the response specific, owned, and time-bound?

**Cross-references:**

- Back reference: "Use the compliance obligation map from Lesson 7 as the foundation for your audit preparation."

---

## L09: Operational Risk Register That Works

**Duration:** 45 min
**Plugin command:** Official auto-skill `risk-assessment` (triggered by natural prompts, NOT as slash command)
**Core content:**

1. **Opening narrative** — Why risk registers fail. Created for an audit, filed in a folder, updated annually by the same person. A useful register is live, owned by people closest to each risk, updated when circumstances change, connected to controls and evidence, and drives decisions.
2. **Risk scoring methodology** — From the global router: Likelihood (1-5) x Impact (1-5). Score ranges: Low (1-4), Medium (5-9), High (10-16), Critical (17-25). Rule: never describe a risk as "low" without a score.
3. **Risk appetite** — Define explicitly before building the register. What disruption can we tolerate? What types of risk concern us most? What is our tolerance for compliance breaches?
4. **Building the register** — Brainstorm by category (vendor, process, technology, compliance, business continuity, people). Score inherent risks. Identify controls. Score residual risks.
5. **Worked example** — Full risk register with 5-6 risks from the spec (single-source vendor, key-person dependency, ERP migration, regulatory breach, data security). Show inherent and residual scores.
6. **Mitigation plans** — For top 3 risks, specific actions with owners and target dates.
7. **Escalation matrix** — What threshold triggers Operations Manager, COO, Board escalation.

**Exercise:** Build a risk register for your operations function (15+ risks). Define risk appetite. Score all risks inherent and residual. Create mitigation plans for top 3. Define escalation matrix. Prompt naturally:

```
Build a risk register for our operations function. Key areas:
vendor dependencies, process reliance on key staff, regulatory
compliance, data security, business continuity.
Risk appetite: medium. We can tolerate disruption for 4 hours;
cannot tolerate regulatory breach.
```

**CRITICAL: Auto-skill activation.** Students prompt naturally. The `risk-assessment` auto-skill activates from keywords like "risk", "risk register", "risk assessment". Do NOT write `/risk-assessment` anywhere.

**What to evaluate (include in exercise):**

- Does every risk have BOTH inherent and residual scores?
- Are controls described specifically (not "we have controls in place")?
- Are residual scores lower than inherent (controls should reduce risk)?
- For risks above appetite, are mitigation plans specific, owned, and time-bound?
- Is the escalation matrix clear about who gets notified at what threshold?

**Cross-references:**

- Forward reference: "The risk metrics in Lesson 11 will draw directly from this register, tracking which risks are above appetite and whether mitigation actions are completing on time."

---

## Exit Criteria

This writer's work is DONE when:

- 9 files created (3 lessons x 3 sidecars)
- All YAML frontmatter complete per architecture spec template
- L07 teaches compliance mapping with the five-status standard; uses natural prompts (no `/compliance-tracking`)
- L08 teaches audit preparation with mock review and response framework using `/audit`
- L09 teaches risk register construction with the 5x5 scoring methodology; uses natural prompts (no `/risk-assessment`)
- Every exercise has a "What to evaluate" section
- Cross-references connect L07 -> L08 and L07 -> L12 (compliance-monitor agent)
- No `import` statements in any file
- `<Flashcards />` tag present at bottom of each lesson
- `:::note Keep This File` reminders where outputs carry forward
