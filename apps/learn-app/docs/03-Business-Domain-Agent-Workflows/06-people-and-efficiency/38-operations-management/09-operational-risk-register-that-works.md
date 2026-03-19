---
slug: /Business-Domain-Agent-Workflows/operations-management/operational-risk-register-that-works
sidebar_position: 9
title: "Operational Risk Register That Works"
description: "Build a risk register that drives decisions rather than documents compliance — with inherent and residual scoring, control effectiveness ratings, mitigation plans, and a clear escalation matrix"
keywords:
  [
    "risk register",
    "operational risk",
    "risk assessment",
    "inherent risk",
    "residual risk",
    "risk scoring",
    "risk mitigation",
    "risk appetite",
    "risk escalation matrix",
    "operations management",
    "operations plugin",
    "risk management",
  ]
chapter: 38
lesson: 9
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Build an Operational Risk Register Using the risk-assessment Auto-Skill"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can build a risk register with at least 10 risks, applying the 5x5 scoring matrix to produce both inherent and residual scores, and identifying controls with appropriate effectiveness ratings"

  - name: "Distinguish Inherent and Residual Risk Using Control Effectiveness"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can explain why residual risk must be lower than inherent risk only when a control is rated STRONG, and can identify when an AI-generated register has incorrectly reduced residual scores for weak or untested controls"

  - name: "Write Specific, Measurable Mitigation Plans for Above-Appetite Risks"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can produce a mitigation plan that specifies the action, named owner, target date, and expected residual score reduction — not a vague statement of intent"

learning_objectives:
  - objective: "Build a risk register for an operations function using natural-language prompts that activate the risk-assessment auto-skill, applying the 5x5 scoring methodology to at least 10 risks"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student's register includes inherent and residual scores for all risks, with control effectiveness ratings that justify the delta between inherent and residual"

  - objective: "Evaluate whether an AI-generated risk register correctly applies the residual scoring rule — that residual risk can only be lower than inherent when a control is STRONG and tested"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student identifies at least one risk where the AI has over-reduced the residual score and can articulate why (untested control, weak control rated as strong, or missing evidence)"

  - objective: "Produce a mitigation plan for the three highest-scoring risks that includes a specific action, named owner, target date, and target residual score"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student's mitigation plans meet the four-element standard (action, owner, date, target score) and the planned actions would plausibly reduce the residual score to within appetite"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "5x5 risk scoring — Likelihood (1–5) x Impact (1–5) producing four score bands"
    - "Inherent vs residual risk — scoring before controls and after controls as distinct steps"
    - "Control effectiveness rating — STRONG/MODERATE/WEAK/ABSENT and why ABSENT means inherent equals residual"
    - "Risk appetite definition — explicitly defining tolerance before building the register"
    - "Escalation matrix — defining specific score triggers for Operations Manager, COO, and Board"
  assessment: "5 concepts at B2 level is appropriate. Students have seen risk matrices informally in earlier chapters; this lesson formalises the framework. The inherent/residual distinction is the conceptual core and requires careful attention. The escalation matrix is procedural and less demanding."

differentiation:
  extension_for_advanced: "After completing the exercise, test the register's usefulness as a management tool: take your three highest-scoring risks and build a quarterly risk review agenda for your COO. Each agenda item should show: risk name, score at last review, score now, whether mitigation actions are on track, and any new information that changes the assessment. A risk register that supports quarterly review is demonstrably more useful than one that does not."
  remedial_for_struggling: "Focus on two things: (1) the difference between inherent and residual — inherent is 'what would happen with no controls at all'; residual is 'what remains after our controls are applied.' (2) The rule that residual can only be lower than inherent if you can name a specific STRONG control that reduces it. If the control is untested or weak, the residual score stays close to inherent. With those two concepts, you can build a useful register."

teaching_guide:
  key_points:
    - "A useful risk register is live, owned by people closest to each risk, connected to controls and evidence, and drives decisions — not an annual compliance document"
    - "Inherent risk must be scored before considering controls — otherwise the organisation underestimates the exposure that controls are managing"
    - "An untested control is, at best, MODERATE — rating it STRONG without testing evidence is a false sense of security"
    - "The escalation matrix is what converts a risk register from a document to a management tool — without it, nobody knows when to act"
  misconceptions:
    - "A low residual score means the risk is managed. Correction: residual risk is only genuinely low if the controls that produce it are STRONG and have been tested. If the controls are WEAK or MODERATE, the residual score may be aspirational rather than actual."
    - "Risk registers should only include risks you are comfortable discussing. Correction: a risk register that excludes uncomfortable risks — key-person dependency on the CEO, a customer concentration risk, or a compliance gap — is a political document. It does not help the organisation manage its actual risk profile."
    - "The risk-assessment auto-skill is invoked with /risk-assessment. Correction: it activates from natural-language keywords like 'risk', 'risk register', 'risk assessment'. Students prompt naturally — no slash command."
  discussion_prompts:
    - "What would it mean for your organisation's risk culture if the COO reviewed the risk register and said 'this looks fine' when it showed only medium risks? Is that a sign of a well-managed organisation or a poorly designed register?"
    - "A risk has an inherent score of 15 (HIGH) and a residual score of 4 (LOW). The control is 'verbal process knowledge with informal cross-training.' Is the residual score of 4 credible? What would it take for that residual score to be justified?"
  teaching_tips:
    - "Start by asking students to list the risks they would be embarrassed to discuss in a board meeting. Those are often the highest-impact risks — and the ones most likely to be missing from the register. Opening with this exercise sets up the 'a risk register that only contains comfortable risks is a political document' principle."
    - "The inherent/residual distinction is the hardest concept. Use the insurance analogy: inherent risk is 'what would happen if you drove with no insurance and no brakes'; residual risk is 'what remains after the brakes and the insurance.' The controls are the brakes and the insurance — their effectiveness determines how much risk actually remains."
---

# Operational Risk Register That Works

Your organisation has a risk register. It was created three years ago during an ISO 27001 implementation, reviewed once the following year by the same person who created it, and has not been touched since. The scores have not changed. The controls listed are the same. Several of the named risk owners have left the organisation. Two of the controls listed as STRONG were never actually tested — they were described in a procedure document that may or may not reflect what happens in practice.

This is not unusual. Most risk registers document the risk profile at the time they were created, not the current risk profile. They were created for an audit, filed in a folder, and their annual update consists of confirming that nothing major has changed — a self-assessment made by someone who has not independently verified whether the controls are still working, whether new risks have emerged, or whether the organisation's risk appetite has evolved.

A useful risk register is structurally different. It is live — updated when circumstances change, not on a calendar. It is owned by the people closest to each risk, not maintained centrally by one person. It connects every risk to a specific control with a specific effectiveness rating, and every control to specific evidence of its effectiveness. It has a clear escalation path that defines exactly what trigger causes a risk to move from the operations manager's desk to the COO's desk to the board's agenda. And it drives decisions: when the ERP migration timeline slips, the risk register reflects the changed likelihood score immediately, not at the next annual review.

This lesson teaches you to build that kind of risk register — using structured AI assistance that applies the 5x5 scoring methodology, distinguishes between inherent and residual risk, rates control effectiveness honestly, and produces mitigation plans that are specific enough to be acted on.

:::tip Plugin Setup Reminder
This exercise requires the **Operations** plugin (official) and the **Operations Intelligence** plugin (custom). If you have not installed them, follow the instructions in the [Chapter 38 prerequisites](./README.md#prerequisites) before continuing.
:::

## Why Risk Registers Fail

Before building the register, understand the three ways they fail — so you can evaluate the AI output against these failure modes.

| Failure Mode                     | What It Looks Like                                                        | Why It Persists                                             |
| -------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Static, not live**             | Scores unchanged from last year; no updates when circumstances change     | Nobody owns the update process; it feels like admin         |
| **Residual scores not credible** | Inherent score 15, residual score 3, control: "verbal knowledge"          | Organisation conflates control existence with effectiveness |
| **No escalation path**           | Board sees the register at year-end; nobody acted on the HIGH score in Q2 | Escalation criteria are vague or missing                    |
| **Missing uncomfortable risks**  | Key-person risk, regulatory gap, customer concentration all absent        | Register was built as a compliance exercise, not management |
| **Mitigation plans are vague**   | "Improve vendor management" with no owner, date, or target score          | Nobody made mitigations specific enough to hold accountable |

## The 5x5 Risk Scoring Methodology

Every risk in the register carries two scores — inherent and residual — each derived from the same matrix.

**Scoring matrix:**

| Likelihood / Impact    | 1 (Negligible) | 2 (Minor) | 3 (Moderate) | 4 (Major) | 5 (Critical) |
| ---------------------- | -------------- | --------- | ------------ | --------- | ------------ |
| **5 (Almost certain)** | 5              | 10        | 15           | 20        | 25           |
| **4 (Likely)**         | 4              | 8         | 12           | 16        | 20           |
| **3 (Possible)**       | 3              | 6         | 9            | 12        | 15           |
| **2 (Unlikely)**       | 2              | 4         | 6            | 8         | 10           |
| **1 (Rare)**           | 1              | 2         | 3            | 4         | 5            |

**Score bands:**

| Score | Classification | Default Treatment                               |
| ----- | -------------- | ----------------------------------------------- |
| 1–4   | LOW            | ACCEPT — monitor only                           |
| 5–9   | MEDIUM         | ACCEPT or MITIGATE — depending on appetite      |
| 10–16 | HIGH           | MITIGATE — mitigation plan required             |
| 17–25 | CRITICAL       | ESCALATE + MITIGATE — immediate action required |

**The inherent/residual distinction:** Inherent risk is scored as if no controls exist — the raw exposure if nothing is being done about it. Residual risk is scored after controls are applied. The gap between the two represents the risk reduction your controls are achieving.

:::caution The Untested Control Rule
An untested control is, at best, MODERATE effectiveness. Residual risk can only be lower than inherent when a control is STRONG — reliably tested and evidenced. A control that "exists on paper" but has never been tested is, for risk scoring purposes, WEAK. An untested backup vendor agreement does not reduce single-source vendor risk; it reduces the documentation of single-source vendor risk.
:::

## Defining Risk Appetite

Risk appetite must be defined before building the register. It answers: what disruption can we tolerate, what types of risk concern us most, and what is our threshold for escalation?

**Worked example.** You are the Operations Manager at a 200-person UK professional services firm. Before building the register:

```
Define our risk appetite for the operations risk register.
Organisation: 200-person UK professional services firm.
We can tolerate:
- Operational disruption for up to 4 hours before client impact
- Cost overruns up to 10% of operational budget
- Minor SLA breaches (1-2 per quarter)

We cannot tolerate:
- Regulatory breach (FCA, AML, UK GDPR) — zero tolerance
- Data security breach affecting client data
- Key person failure lasting more than 2 weeks without continuity

Risk appetite classification: MEDIUM overall.
Translate this into score thresholds for: LOW, MEDIUM, HIGH, CRITICAL.
Also define escalation triggers for: Operations Manager, COO, Board.
```

## Building the Register

The `risk-assessment` auto-skill activates from keywords like "risk", "risk register", "risk assessment", and "mitigation" in natural-language prompts. Students never type `/risk-assessment` — they describe the risk landscape they want to map.

**Worked example.** You type:

```
Build a risk register for our operations function.
Organisation: 200-person UK professional services firm.
Risk appetite: medium. Tolerate disruption <4hrs; cannot tolerate
regulatory breach or data security breach.

Key risk areas:
- Vendor: 3 critical single-source vendors (ERP, cloud, payroll)
- Process: 2 staff hold institutional knowledge not documented elsewhere
- Regulatory: AML PEP screening gap (being remediated — 4 months lapsed)
- Technology: ERP migration underway (active project)
- Data security: ISO 27001 certified; last pen test 14 months ago
- Business continuity: primary office; no tested remote-work BCP

Score each risk with inherent (before controls) and residual (after
controls) using Likelihood 1-5 x Impact 1-5. Rate each control
STRONG/MODERATE/WEAK/ABSENT. Residual must be lower than inherent
only where control is STRONG.
```

**What to expect:** A structured risk register with each risk scored at inherent and residual levels, controls rated for effectiveness, and a risk dashboard showing total counts by classification.

A well-formed risk register output:

```
OPERATIONAL RISK REGISTER
Organisation: [Firm] | Function: Operations | Date: [Date]
Risk appetite: MEDIUM | Review cycle: Quarterly
════════════════════════════════════════════════════════════

RISK SCORING:
  Likelihood: 1 (Rare) → 5 (Almost certain)
  Impact:     1 (Negligible) → 5 (Critical)
  LOW: 1–4 | MEDIUM: 5–9 | HIGH: 10–16 | CRITICAL: 17–25

─── RISK OPS-001: Single-Source Vendor Failure ─────────────
Category:    Vendor
Description: 3 critical vendors (ERP, cloud, payroll) are sole-source
             with no pre-approved alternative. Failure of any one
             would halt operations.

Inherent:    Likelihood 3 × Impact 5 = 15 (HIGH)
Controls:    SLA in contract (MODERATE); regular performance reviews (WEAK);
             annual BCP test — not completed this year (WEAK)
Residual:    Likelihood 3 × Impact 4 = 12 (HIGH — controls are WEAK;
             minimal reduction from inherent)

Within appetite: NO
Treatment:   MITIGATE
Mitigation:  Pre-qualify backup vendor for each of 3 critical vendors.
             Target: reduce Likelihood from 3 to 2 (residual → 8, MEDIUM)
             Owner: Operations Manager | Deadline: Q2
Escalation:  Any P1 incident at a sole-source vendor >4hr → COO

─── RISK OPS-002: Key Person Dependency ───────────────────
Category:    Process / People
Description: 2 staff hold critical process knowledge not documented.
             Departure would cause 4–12 weeks operational disruption.

Inherent:    Likelihood 3 × Impact 4 = 12 (HIGH)
Controls:    Verbal process knowledge (ABSENT — not a control);
             informal cross-training (WEAK)
Residual:    Likelihood 3 × Impact 4 = 12 (HIGH — ABSENT/WEAK controls;
             inherent = residual)

Within appetite: NO
Treatment:   MITIGATE
Mitigation:  Knowledge capture programme: document both roles' processes
             as SOPs using /process-doc. Cross-training schedule within
             8 weeks. Target: residual → Likelihood 2 × Impact 3 = 6
             Owner: COO | Deadline: Q3
Escalation:  Either employee gives notice → immediate COO notification

─── RISK OPS-003: ERP Migration Failure ───────────────────
Category:    Technology
Description: Active ERP migration. Go-live failure or extended disruption
             would halt finance operations for estimated 3–10 days.

Inherent:    Likelihood 3 × Impact 5 = 15 (HIGH)
Controls:    Project governance — weekly review (STRONG);
             parallel run planned (MODERATE — not yet started);
             rollback plan documented (STRONG)
Residual:    Likelihood 2 × Impact 4 = 8 (MEDIUM — STRONG governance
             and rollback plan reduce likelihood and impact)

Within appetite: YES (borderline)
Treatment:   ACCEPT — with monitoring
Escalation:  Go-live delay >4 weeks → COO + Board notification

─── RISK OPS-004: FCA Regulatory Breach (AML) ─────────────
Category:    Compliance
Description: AML PEP screening lapsed 4 months. Manual screening
             in place; not validated against provider standards.

Inherent:    Likelihood 4 × Impact 5 = 20 (CRITICAL — gap active)
Controls:    Manual screening (WEAK — unvalidated);
             MLRO oversight (MODERATE)
Residual:    Likelihood 3 × Impact 5 = 15 (HIGH — until AML gap resolved)

Within appetite: NO — zero tolerance for regulatory breach
Treatment:   MITIGATE — URGENT
Mitigation:  New PEP screening provider contracted (from L07 remediation).
             Validate manual screening against new provider.
             Target: residual → 5 once screening reinstated
             Owner: MLRO | Deadline: within 5 business days
Escalation:  Zero tolerance — any regulatory breach = immediate Board

─── RISK OPS-005: Data Security Breach ────────────────────
Category:    Technology / Compliance
Description: Unauthorised access to client or employee personal data.
             ICO (72hr) and FCA notification obligations apply.

Inherent:    Likelihood 3 × Impact 5 = 15 (HIGH)
Controls:    ISO 27001 controls (STRONG — certified);
             pen test 14 months ago (MODERATE — due for renewal);
             MFA (STRONG); incident response plan (STRONG)
Residual:    Likelihood 2 × Impact 4 = 8 (MEDIUM — mostly STRONG
             controls; pen test currency reduces confidence)

Within appetite: YES
Treatment:   ACCEPT — schedule pen test renewal
Escalation:  Any confirmed breach → DPO + CCO + COO; ICO within 72hr

── RISK DASHBOARD ──────────────────────────────────────────
  Total risks tracked:  12 (5 shown above; remainder in full register)
  🔴 CRITICAL (17–25):  1  — OPS-004 (AML — URGENT ACTION REQUIRED)
  🔴 HIGH (11–16):      3  — OPS-001, OPS-002, pending ERP deterioration
  🟡 MEDIUM (6–10):     5
  🟢 LOW (1–5):         3

  IMMEDIATE ACTIONS:
  1. OPS-004: AML PEP screening — resolve within 5 business days
  2. OPS-002: Knowledge capture — start this week
  3. OPS-001: Backup vendor pre-qualification — Q2 deadline
════════════════════════════════════════════════════════════
```

## Evaluating the Risk Register Output

**What to evaluate:**

| Evaluation Point               | What to Check                                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Inherent scoring**           | Were risks scored without considering controls? An inherent score of 2 for a key-person dependency is suspicious.                                |
| **Residual vs control rating** | Does residual decrease from inherent only where controls are STRONG? WEAK or ABSENT controls should not significantly reduce the residual score. |
| **Control honesty**            | Are controls described specifically (not "we have good processes")? A STRONG rating without evidence is not valid.                               |
| **Uncomfortable risks**        | Does the register include the risks nobody wants to discuss? Key person, regulatory gaps, customer concentration?                                |
| **Mitigation specificity**     | Are mitigations specific (action + owner + date + target score)? "Improve vendor management" is not a mitigation plan.                           |
| **Escalation clarity**         | Does the escalation matrix define specific score thresholds, not vague criteria like "if serious"?                                               |

:::caution The Comfortable Risk Register
A risk register that shows only MEDIUM and LOW risks, with most residual scores well below inherent, is almost certainly a political document. It may reflect what the organisation wants its risk profile to look like, not what it is. When reviewing AI-generated risk output, ask: "Would a board member who knew this organisation say these scores are realistic?" If the answer is no, push back.
:::

## Writing Specific Mitigation Plans

A mitigation plan is only useful if it will actually reduce the residual risk score. Before accepting any mitigation:

1. **Will the action reduce likelihood, impact, or both?** "Improve monitoring" probably reduces neither.
2. **By how much?** Quantify the expected score change — not "it will help."
3. **By when?** A target date is not optional.
4. **Who is accountable?** One named person, not "the operations team."
5. **How will we know it worked?** The evidence of completion must be measurable.

| Weak Mitigation (unacceptable) | Strong Mitigation (required)                                                                                    |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| "Improve vendor management"    | "Pre-qualify backup vendor for ERP by Q2. Target: Likelihood 3→2, score 15→10."                                 |
| "Reduce key person dependency" | "Document [Role]'s 6 core processes as SOPs using /process-doc by [date]. Owner: COO. Target: residual 12→6."   |
| "Monitor AML compliance"       | "Contract new PEP screening provider within 5 business days. Validate against provider standards. Owner: MLRO." |

## Defining the Escalation Matrix

An escalation matrix converts the risk register from a management document into a management tool by answering: at what threshold does a risk stop being the operations manager's problem and become the COO's, then the board's?

```
Define an escalation matrix for our operational risk register.
Risk appetite: MEDIUM. Escalation levels: Operations Manager,
COO, Board.

Define score-based triggers for each level, including:
- When a new risk is identified
- When an existing risk score changes
- When a mitigation action misses its deadline
- Zero-tolerance scenarios (regulatory breach, data breach)
```

**What a useful escalation matrix looks like:**

| Level                  | Trigger                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Operations Manager** | Any new risk with inherent score ≥ 10; any risk score increase of 3+ since last review                                   |
| **COO**                | Any risk with residual score > appetite threshold for >30 days; any CRITICAL risk; any mitigation deadline missed        |
| **Board**              | Any CRITICAL risk for >60 days without improvement; any materialised risk with significant impact; any regulatory breach |

:::note Forward Reference
The risk metrics in Lesson 11 draw directly from this register — tracking which risks are above appetite, whether mitigation actions are completing on time, and how the overall risk profile is trending. The compliance-monitor persistent agent in Lesson 12 monitors the regulatory compliance risks in this register and alerts when review dates pass. Keep this register in your Cowork session.
:::

## Exercise: Build the Operations Risk Register (Exercise 5)

**Type:** Risk management
**Time:** 40 minutes
**Plugin skill:** Official `risk-assessment` auto-skill (activated by natural prompts — no slash command)
**Goal:** A complete operational risk register with at least 10 risks, inherent and residual scores, control effectiveness ratings, mitigation plans for the top three risks, and a defined escalation matrix

### Step 1 — Define Your Risk Appetite

Before prompting, define your risk appetite explicitly:

```
Define our risk appetite for operations risk management.
Organisation: 200-person UK professional services firm.

What we can tolerate: [list — e.g., 4-hour disruption, 10% cost overrun]
What we cannot tolerate: [list — e.g., regulatory breach, data breach]
Overall appetite: MEDIUM

Generate: score thresholds for LOW/MEDIUM/HIGH/CRITICAL, and
escalation triggers for Operations Manager, COO, and Board.
```

### Step 2 — Build the Risk Register

```
Build a risk register for our operations function.
Risk appetite (defined above): MEDIUM.

Key risk areas to cover:
1. Vendor: 3 single-source critical vendors (ERP, cloud, payroll)
2. Process: 2 staff with undocumented institutional knowledge
3. Regulatory: AML PEP screening gap (being resolved — use your
   L07 compliance map status)
4. Technology: active ERP migration
5. Data security: ISO 27001 certified; pen test 14 months ago
6. Business continuity: office-dependent; no tested remote BCP
7. Financial: FX exposure if any international contracts
8. People: attrition risk in operations team
9. [Add 2 more risks relevant to your organisation]

For each risk: category, description, inherent score (L×I, before
controls), controls with STRONG/MODERATE/WEAK/ABSENT rating,
residual score (L×I, after controls — only lower than inherent
if controls are STRONG), within-appetite status, treatment
decision, escalation trigger.

Include a risk dashboard summary.
```

### Step 3 — Evaluate the Output

**What to evaluate:**

- Does every risk have both an inherent and a residual score?
- Are controls described specifically — not "we have controls in place"?
- Are residual scores lower than inherent only where controls are rated STRONG?
- For any residual score significantly lower than inherent, can you verify that the cited control is actually tested and effective?
- Is the AML gap (OPS-004 in the worked example) scored as CRITICAL at inherent, given the active breach risk?
- Does the risk dashboard total match the risk count in the register?
- Are there risks in your register that you find uncomfortable to discuss? If all risks feel comfortable, the register may be missing something.

### Step 4 — Write Mitigation Plans for the Top Three

For your three highest-scoring residual risks:

```
Write detailed mitigation plans for these three risks:
[Paste the three highest-scoring risks from your register]

For each plan:
1. Specific action (not vague — what exactly changes)
2. Will the action reduce likelihood, impact, or both?
3. By how much? (Target residual score)
4. Owner (one named role, not "the team")
5. Target completion date
6. How we will know it worked (measurable evidence)
```

### Step 5 — Define the Escalation Matrix

```
Define a complete escalation matrix for our risk register.
Three levels: Operations Manager, COO, Board.
Include: score-based triggers, timeline triggers (risk above
appetite for >N days), deadline-miss triggers, and zero-tolerance
scenarios (regulatory breach, data breach).
```

**What to evaluate:**

- Does every risk have both inherent and residual scores?
- Are controls described specifically, not generically?
- Are residual scores lower than inherent only where controls are rated STRONG?
- For risks above appetite, are mitigation plans specific: action + owner + date + target score?
- Is the escalation matrix clear about who gets notified at what threshold — no vague language like "if serious"?

**Deliverable:** A risk register with at least 10 risks scored at inherent and residual levels, control effectiveness ratings, mitigation plans for the three highest-scoring risks, and an escalation matrix with explicit score-based triggers.

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
Build a risk register for a small HR consultancy. 8 employees.
Mainly regulatory and people risks.

Key risk areas:
- Key person: founder handles all client relationships
- Regulatory: UK GDPR for employee and client data
- Commercial: 60% revenue from one client
- Data: all client data in cloud (no local backup)
- Business continuity: home-office based, no physical office

Risk appetite: LOW for regulatory breach; MEDIUM for commercial.

Score each risk inherent and residual (5x5 matrix). Rate controls
STRONG/MODERATE/WEAK/ABSENT. Provide a risk dashboard and
escalation triggers.
```

**What you are learning:** Applying the register to a small organisation highlights how risk profile depends on structure — not size. An 8-person consultancy may have fewer risks but they are concentrated: one key-person failure or one regulatory breach is disproportionately impactful. Notice how customer concentration (60% revenue from one client) is a risk that is easy to omit from operations-framed registers.

**Adapt**: Modify the scenario to match your organisation.

```
Build a risk register for my operations function.
Organisation: [size] [type] in [jurisdiction].
Risk appetite: [your appetite definition — what you can and cannot tolerate].

Key risk areas: [list your actual risk areas — be honest about
which ones you find uncomfortable to discuss].

For each risk: score inherent and residual (5x5). Rate controls
STRONG/MODERATE/WEAK/ABSENT. Residual should only be lower than
inherent where controls are STRONG and tested.
Generate a risk dashboard and escalation matrix.
```

**What you are learning:** Applying the register to your own organisation requires honest assessment of your controls. If you find yourself marking controls as STRONG, ask: when was this control last tested, and do I have evidence of that test? If the answer is "I am not sure," the control is MODERATE at best.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
My risk register shows 4 risks above appetite. My COO has asked
me to present a quarterly risk review at next month's board meeting.

For each of the 4 above-appetite risks, prepare a board-ready
risk summary:
1. Risk name and description (2 sentences maximum)
2. Current residual score (trend: improving/stable/deteriorating)
3. Controls in place and their effectiveness rating
4. Mitigation plan status (on track / delayed / completed)
5. Decision required from the board (if any)

Format as a table suitable for inclusion in a board pack.
Also write a 1-paragraph opening statement for the COO presenting
this agenda item: what the board needs to understand about the
firm's risk posture, and what the COO is asking for.
```

**What you are learning:** Translating a detailed risk register into a board-ready communication requires calibrating for the audience. Boards do not need to see every risk — they need to see the above-appetite risks, understand whether mitigation is working, and know if any decision is required from them. This prompt also tests your ability to represent trends, not just snapshots: is the risk improving or deteriorating?
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 10: Incident Management — Post-Mortem and Five Whys →](./10-incident-management-postmortem-five-whys.md)
