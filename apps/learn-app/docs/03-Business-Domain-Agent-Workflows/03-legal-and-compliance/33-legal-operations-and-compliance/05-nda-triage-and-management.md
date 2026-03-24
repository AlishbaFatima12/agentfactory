---
sidebar_position: 5
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
chapter: 33
lesson: 5
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

In Lesson 3, you reviewed the CloudStack agreement clause by clause and saw RED flags on data protection and liability. NDAs are different: the question is not "what needs redlining?" but "does this need attorney time at all?" This lesson builds a three-tier triage system that routes the right NDAs to the right level of review.

:::tip Connector Dual-Mode
If you connected Box or Egnyte in Lesson 1, the agent can pull NDAs directly from your document management system. If not, upload the NDA PDF or paste the text: both paths produce identical triage output.
:::

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

### SLA Targets for NDA Response

| Tier   | Target Response Time | Attorney Involvement                       |
| ------ | -------------------- | ------------------------------------------ |
| Tier 1 | 1 business day       | None: business-unit manager approval      |
| Tier 2 | 2 business days      | Reviewing attorney (~15 min)               |
| Tier 3 | 5 business days      | Senior counsel (full review + negotiation) |

### Nine Automatic RED Flags

The following provisions trigger automatic Tier 3 escalation regardless of other clause quality:

1. **Residuals clause**: permits use of information "retained in unaided memory"
2. **No carve-out for publicly available information**: overly broad scope
3. **Non-compete provisions** of any scope
4. **Asymmetric injunctive relief**: favouring counterparty only
5. **Perpetual confidentiality**: no sunset provision
6. **Unilateral NDA where mutual expected**: without business justification
7. **Unrestricted disclosure to affiliates**: no need-to-know requirement
8. **Governing law in non-English-speaking jurisdiction**: without executive summary
9. **Survival period exceeding 7 years**: disproportionate to typical commercial risk

## Worked Example: Triaging an NDA from a Saudi Partner

Noor Technologies is exploring a partnership with Al-Madinah Cloud Solutions, a Saudi Arabian cloud infrastructure provider based in Riyadh. Al-Madinah's legal team has sent their standard mutual NDA.

:::note Prediction Moment
Read the scenario above. Before running `/triage-nda`, predict: will this NDA be classified as Tier 1 (auto-approve), Tier 2 (counsel review), or Tier 3 (escalate)? Which clauses concern you most? Write your prediction.
:::

Bilal runs the triage:

```
/triage-nda
[Upload: AlMadinah_Mutual_NDA_2026.pdf]

Context: Mutual. Prospective technology partnership -- they would provide
cloud infrastructure for our Gulf expansion. Strategic partner.
Business team wants to start technical discussions next week.
```

**What to expect:** The agent asks context questions (mutual/unilateral, purpose, counterparty type, urgency), loads the playbook, and produces a triage report. Your output will vary, but look for these sections:

| Section                            | Intent                                                                       | What to Verify                                                                                       |
| ---------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Triage tier classification         | Routes the NDA to the correct review level (Tier 1/2/3)                      | Check whether the tier matches your prediction and whether the routing recommendation is appropriate |
| GREEN/YELLOW/RED deviation summary | Counts deviations from your standard form by severity                        | Confirm the count reflects the actual clause analysis below                                          |
| GREEN clauses                      | Standard-form clauses that need no attention                                 | Should include clauses that match your playbook (term, definition scope, remedies)                   |
| YELLOW clauses                     | Deviations requiring counsel confirmation but not negotiation                | Look for governing law (Saudi vs Pakistani/English) and confidentiality period at upper range        |
| RED flag checks                    | Automatic Tier 3 triggers (residuals, non-compete, no public info carve-out) | Verify each of the nine automatic RED flags is checked                                               |
| Attorney review footer             | Governance boundary reminder                                                 | Confirm the ATTORNEY REVIEW: REQUIRED footer is present                                              |

:::note Your output will vary
The specific clause classifications, deviation counts, and proposed positions depend on your playbook configuration and the NDA text. Focus on the triage tier assignment and the deviation analysis structure. The teaching point is how the three-tier system routes NDAs to the appropriate level of review: not the specific recommendations in any single output.
:::

:::info Concept Box: Residuals Clause
A residuals clause in an NDA permits a party to use information "retained in the unaided memory" of its personnel after the NDA terminates. For example: "Nothing in this Agreement shall restrict either party from using ideas, concepts, know-how, or techniques that are retained in the unaided memories of its Representatives who have had access to Confidential Information." This sounds innocuous but creates an enormous loophole -- any information an employee can remember, they can use freely. In practice, it can render the entire NDA unenforceable for its most valuable purpose: protecting trade secrets and proprietary methodologies. The Legal Plugin automatically flags any residuals clause as a Tier 3 RED item. **Why it matters:** residuals clauses are the most commonly overlooked high-risk provision in NDAs -- they sound reasonable but can undermine the entire agreement.
:::

Compare your prediction to the output. If you predicted Tier 1 but it classified Tier 2, look at which deviations triggered the routing. The governing law deviation (Saudi law instead of Pakistani/English law) is the kind of issue that seems minor but has real enforcement implications. This gap between gut feel and systematic triage is the value of the system: it catches issues your intuition might dismiss.

Bilal reviews the output. The governing law flag is sensible: he knows from experience that English law with LCIA arbitration is the standard recommendation for cross-border deals between Pakistani and Gulf entities. He routes to the reviewing attorney with the agent's summary attached. The attorney confirms the governing law position, notes that the 5-year confidentiality period is acceptable for a strategic partnership, and the NDA is routed for signatory approval.

Total attorney time: 12 minutes. Without the triage system, this NDA would have waited in the general review queue for 2-3 days, potentially delaying the partnership kickoff.

> **The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.**

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

**What to expect:** The agent produces a triage report with the same structure as the Al-Madinah worked example. Your output will vary, but look for these sections:

| Section                     | Intent                                                         | What to Verify                                                                             |
| --------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Triage tier classification  | Assigns the NDA to Tier 1, 2, or 3 based on deviation severity | Check that the tier matches the deviations found                                           |
| Deviation summary           | Counts GREEN, YELLOW, and RED deviations                       | Confirm the count is consistent with the clause-by-clause analysis                         |
| Clause-by-clause deviations | Compares each NDA clause to your standard form                 | Verify each deviation is correctly classified and includes a proposed position or fallback |
| Attorney review footer      | Governance boundary reminder                                   | Confirm the footer is present                                                              |

:::note Your output will vary
The specific deviations depend on the NDA you upload and your playbook configuration. Focus on whether the triage tier is justified by the deviations found, and whether each deviation includes a clear recommendation.
:::

## Flashcards Study Aid

<Flashcards />

## Try With AI

**Setup:** Use these prompts in Cowork or your preferred AI assistant.

### Prompt 1: Reproduce

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

### Prompt 2: Adapt

```
I am running /triage-nda on a mutual NDA from a potential
technology partner based in Singapore. My company is
headquartered in London, UK.

The NDA has these provisions:
- Term: 2 years
- Governing law: Laws of the Republic of Singapore
- Dispute resolution: Singapore International Arbitration
  Centre (SIAC)
- Confidentiality period: 3 years post-termination
- Confidential information: broad mutual definition including
  "business plans, customer lists, pricing strategies, and
  technical specifications"
- Representatives: includes "affiliates, subsidiaries, and
  their respective advisors" without a need-to-know qualifier
- No residuals clause
- Non-solicitation of employees: 12-month restriction
  post-termination

Run /triage-nda with the appropriate jurisdiction skill active.
Produce a full NDA Triage Report and verify:
1. Does the agent apply Singapore's data protection regime
   (PDPA 2012) rather than defaulting to UK GDPR for the
   confidential information definition?
2. Does it flag the broad Representatives clause correctly?
3. Does it assess the non-solicitation restriction under
   Singapore's approach to restraint of trade (which differs
   from English common law)?
4. Does the cross-border enforcement analysis correctly
   reference SIAC's reputation and the New York Convention
   enforceability of Singapore arbitral awards in the UK?
```

**What you are learning:** Testing a UK-Singapore jurisdiction pair forces the agent to apply a different data protection regime and restraint-of-trade analysis than the lesson's Pakistan-Saudi example. Verifying the agent's output against the correct jurisdiction-specific rules builds your ability to spot when the agent defaults to generic analysis instead of applying the loaded overlay.

### Prompt 3: Apply

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

:::info PayGulf Comparison

PayGulf Technologies processes approximately 20 NDAs per month with fintech counterparties: payment gateways, banking API providers, card scheme partners, and merchant acquirers. The volume is comparable to Noor Technologies, but PayGulf's triage thresholds are materially tighter because of its DFSA-regulated status.

A standard technology company triaging an NDA asks: does this deviate from our standard form? A DFSA-regulated entity must also ask: does this counterparty handle payment data, and if so, does the NDA adequately protect information that falls under both confidentiality obligations and PCI DSS requirements? An NDA with a payment gateway provider that would be Tier 1 (auto-approve) for Noor Technologies may be Tier 2 (counsel review) for PayGulf, because the counterparty processes cardholder data and the NDA must address data handling practices that the DFSA requires PayGulf to oversee in its outsourcing arrangements.

PayGulf's triage configuration adds three RED flags beyond the standard nine. First, any NDA with a counterparty that processes, stores, or transmits payment card data must include provisions addressing PCI DSS compliance obligations: without these, the NDA is incomplete for regulatory purposes. Second, counterparty due diligence on data handling practices is required by DFSA outsourcing rules whenever confidential information includes customer payment data. Third, any NDA breach involving payment system data may trigger mandatory reporting obligations to the DFSA and potentially to card schemes: the NDA must not contain provisions that would prevent or delay such reporting.

The practical effect: what Noor classifies as Tier 1 auto-approve, PayGulf may classify as Tier 2 review. Fatima's team reviews more NDAs than a non-regulated company of similar size: but the regulatory cost of getting an NDA wrong is proportionally higher. The triage system does not reduce attorney involvement to zero; it ensures attorney time is spent on the NDAs where regulatory exposure is real.

:::

## What You Built

1. A three-tier NDA triage system with SLA targets (Tier 1: 1 business day, Tier 2: 2 days, Tier 3: 5 days with attorney review)
2. Nine automatic RED flag triggers that route NDAs to Tier 3 regardless of other content
3. A calibrated triage configuration targeting 60% Tier 1, 25% Tier 2, 15% Tier 3 distribution
4. A cross-border NDA review (Al-Madinah worked example) demonstrating jurisdiction overlay integration
5. Understanding of the residuals clause trap and why context-dependent decisions require human judgment

---

Continue to [Lesson 6: Compliance Check and Legal Risk Assessment ->](./06-compliance-check-and-legal-risk-assessment.md)
