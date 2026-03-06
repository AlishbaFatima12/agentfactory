---
sidebar_position: 4
title: "NDA Triage and Management"
description: "Build a three-tier NDA triage system that reduces attorney NDA time from 12+ hours per month to 3-4 hours, with a full Saudi NDA worked example showing Al-Madinah Cloud Solutions triage in action"
keywords:
  [
    "NDA triage",
    "triage-nda",
    "non-disclosure agreement",
    "NDA automation",
    "three-tier triage",
    "NDA playbook",
    "standard approval",
    "counsel review",
    "NDA bottleneck",
    "legal triage system",
    "residuals clause",
    "Saudi NDA",
  ]
chapter: 22
lesson: 4
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure a Three-Tier NDA Triage System"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can add NDA-specific configuration to legal.local.md defining Tier 1 automatic approval criteria, Tier 2 counsel review triggers, and Tier 3 escalation conditions, then test the configuration against sample NDAs"

  - name: "Run NDA Triage and Interpret Routing Output"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can run /triage-nda, provide context, interpret the triage report output including tier classification and deviation list, and explain the routing recommendation"

learning_objectives:
  - objective: "Configure NDA triage criteria in legal.local.md defining automatic approval, counsel review, and escalation conditions"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a playbook NDA section with criteria for all three tiers and can explain why each criterion is assigned to its tier"

  - objective: "Run /triage-nda against a sample NDA, interpret the triage report, and explain the routing recommendation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates running the triage, identifies the tier classification, and can explain each deviation flagged in the report"

  - objective: "Calculate the attorney time savings from implementing NDA triage and articulate the business case"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student can calculate current attorney hours spent on NDAs, projected hours after triage, and document the reduction"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "The NDA bottleneck (volume vs. attorney time)"
    - "Three-tier triage (Tier 1: auto-approve, Tier 2: counsel review, Tier 3: full review)"
    - "NDA playbook configuration (standard form reference, tier criteria)"
    - "The triage report format (counterparty, tier, summary, deviations)"
    - "Residuals clauses as automatic Tier 3 escalation"
    - "Cross-border NDA considerations (governing law, arbitration)"
  assessment: "6 concepts at B1 level -- within the 7-10 cognitive limit for this tier. The three-tier system is intuitive and builds directly on the GREEN/YELLOW/RED classification from Lesson 3."

differentiation:
  extension_for_advanced: "Build a four-NDA test set (standard form, minor deviation, moderate deviation, serious red flags) and run /triage-nda against each. Document whether the triage matches your expectations and refine your configuration."
  remedial_for_struggling: "Focus on the three tiers and their target percentages: Tier 1 (60-70% auto-approve), Tier 2 (20-30% counsel review), Tier 3 (10-15% full review). If you can classify a sample NDA into the correct tier, you understand the system."
---

# NDA Triage and Management

In Lesson 3, you learned the contract review workflow for complex agreements. Now you will tackle the highest-volume, lowest-complexity contract type in most legal departments: the Non-Disclosure Agreement.

:::info Concept Box: NDA (Non-Disclosure Agreement)
An NDA -- also called a confidentiality agreement, mutual CA, or CDA -- is a contract in which one or both parties agree not to disclose specified confidential information. For example, before NexaByte Solutions (Karachi) evaluates a cloud infrastructure provider for a potential PKR 50 million migration, both companies sign a mutual NDA so they can share technical specifications, pricing, and customer data without fear of disclosure. A typical mutual NDA defines "Confidential Information," specifies a term (usually 2-5 years), includes carve-outs for publicly available information, and sets out remedies for breach. Organisations receive 10-50 NDAs per month; without a triage system, every one requires attorney review regardless of risk level. **Why it matters:** NDAs are high-volume, low-complexity contracts that consume disproportionate attorney time -- the perfect candidate for AI-assisted triage.
:::

Non-Disclosure Agreements are the gateway contract of business development. Every prospective partnership, vendor evaluation, acquisition conversation, and strategic discussion begins with an NDA. In an active organisation, these arrive at 10-50 per month. Each technically requires legal review. In practice, the majority are standard mutual NDAs presenting no material risk -- but without a triage system, they all land in the same queue as the genuinely complex agreements.

The result: legal becomes the bottleneck that slows business development. The `/triage-nda` command eliminates this bottleneck with a three-tier routing system that matches legal attention to actual risk level.

## The Three-Tier Triage System

**Tier 1 -- Standard Approval** _(no attorney review required)_

NDAs substantially identical to your standard form, or deviating only within pre-approved ranges. The agent confirms the NDA meets the threshold and routes for business-unit manager approval. Target: 60-70% of incoming NDAs.

**Tier 2 -- Counsel Review** _(attorney review, no negotiation expected)_

NDAs with deviations falling within acceptable range but requiring attorney confirmation. Agent flags the specific deviations and routes to designated reviewing attorney with a pre-populated summary. Target: 20-30%.

**Tier 3 -- Full Review** _(attorney review + likely negotiation)_

NDAs with RED deviations, unusual structures (unilateral where mutual expected), unusually broad confidential information scope, or concerning jurisdiction choices. Routes to senior counsel with a detailed risk summary. Target: 10-15%.

## Worked Example: Triaging an NDA from a Saudi Partner

Noor Technologies is exploring a partnership with Al-Madinah Cloud Solutions, a Saudi Arabian cloud infrastructure provider based in Riyadh. Al-Madinah's legal team has sent their standard mutual NDA. Bilal runs the triage:

```
Bilal: /triage-nda
[Upload: AlMadinah_Mutual_NDA_2026.pdf]

Agent: A few context questions before I review:
1. Mutual or unilateral?
2. Purpose?
3. Counterparty type?
4. Urgency?
5. Any known concerns?

Bilal: Mutual. Prospective technology partnership -- they would provide
cloud infrastructure for our Gulf expansion. Strategic partner.
Business team wants to start technical discussions next week.

Agent: Loading playbook... Found: Noor Technologies NDA Playbook v2.1.
Reading NDA...

NDA TRIAGE REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Counterparty:   Al-Madinah Cloud Solutions (Riyadh, KSA)
Date:           22 March 2026
Playbook:       Noor Technologies NDA Playbook v2.1

TRIAGE TIER:    2 — Counsel Review Required
Attorney time:  ~15 minutes

SUMMARY: 3 GREEN · 2 YELLOW · 0 RED
RECOMMENDATION: Route to reviewing attorney — no negotiation expected.

DEVIATIONS FROM STANDARD FORM:
🟢 Term: 3 years — matches our standard
🟢 Definition of Confidential Information: standard mutual definition
    with appropriate carve-outs — acceptable
🟢 Remedies: mutual injunctive relief — standard

🟡 Governing law: Laws of the Kingdom of Saudi Arabia, Riyadh courts
   — Our standard is Pakistani law or English law. Saudi commercial
   courts are developing but less established for cross-border disputes
   than DIFC or English courts.
   PROPOSED POSITION: Suggest amendment to English law with LCIA
   arbitration (both Pakistan and KSA are New York Convention
   signatories — arbitral awards enforceable in both jurisdictions).
   FALLBACK: Accept Saudi law if counterparty adds SCCA (Saudi Centre
   for Commercial Arbitration) arbitration clause.

🟡 Confidentiality period: 5 years post-termination (our standard:
   3 years). Within acceptable range (2-5 years per playbook) but
   at upper limit.
   NOTE: Accept without negotiation — 5 years is commercially
   reasonable for a strategic technology partnership where trade
   secrets may be shared.

RESIDUALS CLAUSE CHECK: ✅ No residuals clause present
NON-COMPETE CHECK: ✅ No non-compete provisions
PUBLIC INFO CARVE-OUT: ✅ Present and standard

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

:::info Concept Box: Residuals Clause
A residuals clause in an NDA permits a party to use information "retained in the unaided memory" of its personnel after the NDA terminates. For example: "Nothing in this Agreement shall restrict either party from using ideas, concepts, know-how, or techniques that are retained in the unaided memories of its Representatives who have had access to Confidential Information." This sounds innocuous but creates an enormous loophole -- any information an employee can remember, they can use freely. In practice, it can render the entire NDA unenforceable for its most valuable purpose: protecting trade secrets and proprietary methodologies. The Legal Plugin automatically flags any residuals clause as a Tier 3 RED item. **Why it matters:** residuals clauses are the most commonly overlooked high-risk provision in NDAs -- they sound reasonable but can undermine the entire agreement.
:::

Bilal reviews the output. The governing law flag is sensible -- he knows from experience that English law with LCIA arbitration is the standard recommendation for cross-border deals between Pakistani and Gulf entities. He routes to the reviewing attorney with the agent's summary attached. The attorney confirms the governing law position, notes that the 5-year confidentiality period is acceptable for a strategic partnership, and the NDA is routed for signatory approval.

Total attorney time: 12 minutes. Without the triage system, this NDA would have waited in the general review queue for 2-3 days, potentially delaying the partnership kickoff.

## Configuring NDA Triage in the Playbook

Add an NDA-specific section to `legal.local.md`:

```markdown
## NDA Configuration

### Standard Form Reference

Standard mutual NDA: [filename or document ID]
Standard unilateral (disclosing): [filename]
Standard unilateral (receiving): [filename]

### Tier 1 -- Automatic Approval Criteria

The following deviations may be approved without attorney review:

- Definition of Confidential Information: minor category additions
  acceptable if our standard definition is retained
- Term: 2-5 years (our standard is 3 years)
- Post-term survival: 2-5 years
- Minor formatting differences with no substantive impact

### Tier 2 -- Route to Counsel (flag, do not block)

- Governing law: counterparty's jurisdiction instead of ours
- Notice provisions: different address/format requirements
- Definition of Representatives: broader than standard
- Non-solicitation: if mutual and limited to directly involved employees

### Tier 3 -- Escalate (senior counsel required)

- Unilateral NDA where mutual expected (without business justification)
- Residuals clause: allowing use of information "retained in
  unaided memory"
- Injunctive relief: asymmetric provisions favouring counterparty
- No carve-out for publicly available information
- Non-compete provisions of any scope
- Disclosure to affiliates: unrestricted (we require need-to-know)
- Governing law: non-English-speaking jurisdiction without summary
- Perpetual confidentiality obligations (no sunset)
```

## Running the Triage

```
/triage-nda
> Agent: Please share the NDA for review.
[Upload: Counterparty_NDA_v1.pdf]

> Agent: A few context questions:
> 1. Mutual disclosure or primarily one-directional?
> 2. Purpose: vendor evaluation, partnership, M&A, or other?
> 3. Any specific concerns or deadline constraints?

> User: Mutual. Prospective technology partner. Need to respond Friday.
```

**Sample output:**

```
NDA TRIAGE REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Counterparty:  Acme Corp
Reviewed:      [Date]
Playbook:      [Organisation] NDA Playbook v1.0

TRIAGE TIER:   2 — Counsel Review Required
Attorney time: ~15 minutes

SUMMARY: 1 GREEN · 2 YELLOW · 0 RED
RECOMMENDATION: Route to [Reviewing Attorney] — no negotiation
  expected to be required.

DEVIATIONS FROM STANDARD FORM:
🟢 Term: 5 years (standard: 3 years) — within acceptable range
🟡 Governing law: State of Delaware (standard: England & Wales)
   — commercially reasonable for US-incorporated counterparty;
   note for counsel
🟡 Representatives: includes "advisors and consultants" without
   need-to-know qualifier — propose adding qualifier; fallback:
   accept if counterparty adds "engaged in connection with the
   Permitted Purpose"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Design Your NDA Triage Configuration

```
I need to configure NDA triage criteria for a 200-person
technology company. We receive approximately 30 NDAs per month.
Our standard form is a 3-year mutual NDA governed by English law.

Design the NDA Configuration section for my legal.local.md.
For each tier, provide:

Tier 1 (automatic approval):
- List specific deviations that are safe to auto-approve
- Explain why each is low-risk

Tier 2 (counsel review):
- List deviations requiring attorney confirmation
- Estimate attorney review time per deviation

Tier 3 (escalate to senior counsel):
- List red-flag conditions
- Explain the specific risk each represents

Then calculate: if 65% of NDAs are Tier 1, 25% are Tier 2,
and 10% are Tier 3, what is my total attorney NDA time per
month? Compare to 30 NDAs x 35 minutes without triage.
```

**What you are learning:** Designing triage criteria forces you to make explicit risk judgments that most organisations leave implicit. The calculation at the end quantifies the business case -- the difference between 17+ hours of attorney time and 3-4 hours is the capacity released for higher-value legal work.

### Prompt 2: Triage a Cross-Border NDA

```
I am running /triage-nda on a mutual NDA from a potential
technology partner based in Riyadh, Saudi Arabia. My company
is headquartered in Lahore, Pakistan.

The NDA has these provisions:
- Term: 3 years
- Governing law: Laws of the Kingdom of Saudi Arabia
- Dispute resolution: Riyadh commercial courts
- Confidentiality period: 5 years post-termination
- Confidential information: standard mutual definition
- Remedies: mutual injunctive relief
- No residuals clause
- No non-compete

Produce a full NDA Triage Report with:
1. Tier classification and rationale
2. GREEN/YELLOW/RED flags for each provision
3. Proposed positions for any YELLOW flags
4. Fallback positions if counterparty rejects the initial proposal
5. Cross-border enforcement considerations (mention the
   New York Convention and how arbitral awards work between
   Pakistan and KSA)
```

**What you are learning:** Cross-border NDAs introduce governing law and enforcement considerations that domestic NDAs do not. The agent's ability to flag jurisdiction-specific issues and propose alternatives (LCIA arbitration, SCCA arbitration) with enforcement rationale demonstrates how the triage system handles complexity beyond simple clause matching.

### Prompt 3: The Residuals Clause Trap

```
In NDA triage, one of the most commonly escalated clauses
is the "residuals clause" -- a provision allowing parties to
use information "retained in the unaided memory of their
personnel."

Explain:
1. What a residuals clause actually permits
2. Why it is controversial (what risk does it create?)
3. Why it should always trigger Tier 3 escalation
4. What a reasonable counterproposal looks like
5. In what commercial context might you accept a residuals
   clause (if any)?

Use a concrete scenario: we are sharing our product roadmap
under NDA with a potential integration partner who is also
a partial competitor.
```

**What you are learning:** The residuals clause illustrates why NDA triage cannot be purely mechanical. The same clause that is acceptable when sharing marketing materials with an agency becomes a serious risk when sharing product roadmaps with a competitor. Tier 3 escalation ensures human judgment is applied to these context-dependent decisions.

---

Continue to [Lesson 5: Intellectual Property Protection ->](./05-intellectual-property-protection.md)
