---
sidebar_position: 3
title: "Contract Review and Redlines"
description: "Execute the seven-phase /review-contract workflow with playbook-calibrated clause analysis, interpret GREEN/YELLOW/RED classification, generate attorney-ready redlines, track post-execution obligations with /vendor-check, and query the contract repository as institutional intelligence"
keywords:
  [
    "contract review",
    "review-contract",
    "vendor-check",
    "obligation tracking",
    "redline",
    "limitation of liability",
    "three-tier classification",
    "GREEN YELLOW RED",
    "contract repository",
    "CLM",
    "contract lifecycle management",
    "Pakistan PDPA",
    "playbook calibration",
  ]
chapter: 22
lesson: 3
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Execute a Clause-by-Clause Contract Review Using the Legal Plugin"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can use /review-contract to submit a contract for review, provide the required context (party role, contract type, timeline, value, concerns), interpret the three-tier classification output (GREEN/YELLOW/RED), and explain the redline format including current text, issue, proposed replacement, fallback, rationale, and priority"

  - name: "Configure Obligation Tracking with /vendor-check"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can use /vendor-check to query a vendor's contract status, interpret obligation summaries, upcoming deadlines, overdue items, and renewal alerts, and explain how connected contract repositories enable automated obligation monitoring"

learning_objectives:
  - objective: "Execute a complete contract review using /review-contract and interpret the three-tier classification output"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can walk through the seven-step review process, explain each step's purpose, and interpret a sample output identifying GREEN, YELLOW, and RED items with their respective actions"

  - objective: "Use /vendor-check to monitor post-execution contract obligations and explain the value of the contract repository as institutional intelligence"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can demonstrate a /vendor-check query and explain how contract archive queries transform static storage into institutional memory for negotiation benchmarking"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "CLM (Contract Lifecycle Management) as an end-to-end process"
    - "The seven-step /review-contract workflow"
    - "Three-tier classification: GREEN (acceptable), YELLOW (negotiate), RED (escalate)"
    - "Redline format: current text, issue, replacement, fallback, rationale, priority"
    - "Obligation tracking and the contract repository as queryable intelligence"
  assessment: "5 concepts at B1 level -- well within the 5-7 cognitive limit. The lesson is structured in three distinct stages (review, tracking, intelligence) with worked examples at each stage providing concrete scaffolding. Cross-border analysis has been moved to Lesson 4."

differentiation:
  extension_for_advanced: "Take a real contract from your organisation and run it through the /review-contract workflow. Compare the agent's output against your own legal review. Identify where the playbook needs calibration based on the differences."
  remedial_for_struggling: "Focus on the three-tier classification system (GREEN/YELLOW/RED) and the redline format. If you can read an agent output and explain why a clause was flagged RED, what the proposed replacement text does, and what the fallback position is, you have the core skill for contract review."
---

# Contract Review and Redlines

## What CLM Actually Is

> **Concept Box: CLM (Contract Lifecycle Management)**
>
> CLM is the end-to-end process of creating, negotiating, executing, storing, monitoring, and renewing or terminating contracts. In a mature CLM system, every contract is searchable, every obligation is tracked, and every renewal date triggers an alert. For example, a company with 500 active vendor contracts and a proper CLM system knows that 23 contracts have renewal notice deadlines in the next 60 days, that 4 contracts have uncapped liability provisions flagged for renegotiation, and that the average negotiation cycle time is 11 days. Without CLM, that same company discovers missed renewals when the invoice arrives for another year of a service they intended to cancel. Why it matters: the World Commerce & Contracting Association estimates that poor contract management costs organisations 5-9% of annual revenue -- for a PKR 10 billion company, that is PKR 500 million to PKR 900 million per year lost to administrative friction.

In Lesson 2, you built a negotiation playbook — the `legal.local.md` file that calibrates every review to your organisation's positions. Now you will see exactly how that playbook drives the review output. You will run `/review-contract` against a real vendor agreement, interpret the GREEN/YELLOW/RED classification, and generate attorney-ready redlines that reflect your organisation's standards rather than generic commercial positions.

:::tip Connector Dual-Mode
If you connected Box, Egnyte, or another document management system in Lesson 1, the agent can pull contracts directly from your storage. If not, upload the contract PDF or paste the text — both paths produce identical quality output.
:::

**Contract Lifecycle Management** is the end-to-end process by which organisations create, negotiate, execute, store, monitor, and renew or terminate contracts. In most organisations without a dedicated CLM system, this process is chaos: contracts drafted in Word, negotiated via tracked-changes email threads, executed by printing and scanning, stored in a shared drive no one can search, renewed when (and if) a calendar reminder fires.

The World Commerce & Contracting Association estimates that poor contract management costs organisations between 5% and 9% of annual revenue -- through missed renewals, unfavourable auto-renewals, untracked obligations, and failed compliance. For a $100M business, that is between $5M and $9M per year in contractual value lost to administrative friction.

The Claude Legal Plugin transforms CLM at the three stages where the value is greatest: review, obligation tracking, and institutional knowledge accumulation.

---

## Stage 1: Contract Review with `/review-contract`

The plugin's contract review workflow follows a seven-step process that mirrors how a senior lawyer approaches a new contract. As Anthropic's GitHub documentation describes it:

**Step 1 -- Accept the contract.** The agent accepts PDF, DOCX, or documents from connected document management systems via MCP connector (Google Drive, SharePoint).

**Step 2 -- Gather context.** The agent asks:

- Which party are you? (Customer / Vendor / Licensor / Licensee / Partner)
- When does this need to be finalised?
- Any specific concerns or unusual aspects to flag?
- Relevant business context that should affect the review?

This step is critical. The same limitation of liability clause means something entirely different depending on your side of the transaction. The agent's analysis changes materially based on your position.

**Step 3 -- Load the playbook.** The agent reads `legal.local.md`. If no playbook is found, it informs you and proceeds against general commercial standards, clearly labelling the review.

**Step 4 -- Clause-by-clause analysis.** The agent reads the entire contract before flagging anything -- a principle Anthropic encodes explicitly because clauses interact. An uncapped indemnity may be partially mitigated by a broad limitation of liability. An unusual IP ownership provision may be commercially reasonable given the pricing structure. Context matters.

**Step 5 -- Flag deviations using three-tier classification:**

- **GREEN** -- Acceptable. Within standard position or acceptable range.
- **YELLOW** -- Negotiate. Outside standard but within acceptable range. Agent provides primary redline and fallback.
- **RED** -- Escalate. Outside acceptable range. Requires attorney review before proceeding.

> **Concept Box: Redline**
>
> A redline is a proposed change to contract language, presented in a format that shows exactly what text to remove and what text to insert. The term comes from the historical practice of marking changes in red ink. For example, a redline might change "Liability of either party is limited to fees paid in the three months prior to the claim" to "Liability of either party is limited to the greater of (i) total fees paid or payable in the twelve months prior to the claim, or (ii) PKR 5,000,000." The Legal Plugin generates redlines as exact replacement text -- not vague suggestions -- ready for an attorney to review and send to the counterparty. Why it matters: specific, ready-to-use redlines reduce attorney review time from drafting (30+ minutes per clause) to review-and-approve (5 minutes per clause).

> **Concept Box: Limitation of Liability**
>
> A limitation of liability clause caps the maximum amount one or both parties can claim from the other for breach of contract. For example, in a SaaS agreement worth PKR 2,400,000 per year, a limitation of liability set at "12 months' fees" means neither party can claim more than PKR 2,400,000 regardless of the actual loss suffered. Carve-outs -- exceptions to the cap -- are common for IP infringement, data breaches, and confidentiality breaches. A clause that caps your vendor's liability at 3 months' fees (PKR 600,000) while leaving your liability uncapped is an asymmetric provision that the Legal Plugin would flag as RED. Why it matters: this is the single most negotiated clause in commercial contracts and the one where playbook configuration has the greatest impact on review accuracy.

**Step 6 -- Generate redline suggestions.** For each YELLOW and RED item, the agent generates specific proposed language -- not vague guidance, but exact text ready to insert. Each suggestion follows this format (per Anthropic's official documentation):

```
CLAUSE:     Limitation of Liability (Section 12.3)
STATUS:     YELLOW
CURRENT:    "Liability of either party is limited to fees paid in
             the three months prior to the claim."
ISSUE:      Cap is below our acceptable range. Current value = GBP 45,000
            on this contract.
REDLINE:    "Liability of either party is limited to the greater of
             (i) total fees paid or payable in the twelve months prior
             to the claim, or (ii) GBP [floor amount]."
FALLBACK:   If counterparty resists 12 months, propose 6 months with
            a floor of GBP [2x annual value].
RATIONALE:  "Standard commercial practice; proposed cap reflects total
             value at risk under the agreement."
PRIORITY:   Nice-to-have
```

**Step 7 -- Holistic risk summary.** Overall risk assessment: GREEN/YELLOW/RED item counts, the single most material risk, recommended action (approve / negotiate / escalate / decline), and priority negotiation order.

---

### Worked Example: Noor Technologies Reviews a Vendor SaaS Agreement

Noor Technologies is a 180-person software company headquartered in Karachi, Pakistan. Their Head of Legal Operations, Bilal Hussain, has received a SaaS agreement from CloudStack Inc., a US-based project management tool vendor. The annual contract value is PKR 4,800,000 (approximately USD 17,000). Noor Technologies is the customer.

:::note Prediction Moment
Before Bilal runs `/review-contract`, predict: which clauses will the plugin flag as RED? Which will be GREEN? Read the contract description above — a US-based SaaS vendor, PKR 4.8M annual value, Pakistani customer. Write your predictions, then compare them to the output below.
:::

Bilal opens Cowork and begins the review:

```
Bilal: /review-contract
[Upload: CloudStack_MSA_v3.1.pdf]

Agent: I'll review this contract for you. First, a few context questions:

1. Which party are you? (Customer / Vendor / Licensor / Licensee / Partner)
2. What is the contract type?
3. When does this need to be finalised?
4. Approximate contract value?
5. Any specific clauses of concern?
6. Relevant business context?

Bilal: We are the Customer. SaaS agreement for project management software.
Need to finalise by end of month -- about 3 weeks. Annual value PKR 4,800,000
(approx USD 17,000). Concerned about data residency -- our client data will
be in this system and we need to comply with Pakistan's PDPA 2023.
New vendor -- first engagement.

Agent: Loading playbook... Found: NexaByte Legal Playbook v2.1.
Jurisdiction overlay loaded: pakistan-law.md (based on your organisation profile).

Reading full contract before analysis...

[After full contract read]

TASK:             Contract Review -- Vendor SaaS MSA
JURISDICTION:     Governing law specified: State of Delaware, USA
PLAYBOOK:         Loaded: Noor Technologies Playbook v2.1
ATTORNEY REVIEW:  REQUIRED -- all outputs must be reviewed by a licensed attorney
ESCALATION:       Yes -- see RED items below

------------------------------------------------------------

CLAUSE-BY-CLAUSE ANALYSIS

CLAUSE:     Limitation of Liability (Section 9.1)
STATUS:     RED
CURRENT:    "The total aggregate liability of CloudStack shall not exceed
             the fees paid by Customer in the three (3) months immediately
             preceding the event giving rise to the claim."
ISSUE:      Cap is PKR 1,200,000 (3 months' fees). Your playbook minimum
            is 12 months' fees (PKR 4,800,000). Asymmetric: no cap
            stated for Customer's liability. Additionally, no carve-outs
            specified -- data breach liability would be subject to this cap.
REDLINE:    "The total aggregate liability of either party shall not exceed
             the greater of (i) the fees paid or payable under this Agreement
             in the twelve (12) months immediately preceding the event giving
             rise to the claim, or (ii) PKR 5,000,000, except that this
             limitation shall not apply to (a) breaches of Section [Data
             Protection], (b) IP infringement indemnities, or (c) liability
             arising from gross negligence or wilful misconduct."
FALLBACK:   If 12 months rejected, propose 6 months with a floor of
            PKR 3,000,000 and mandatory carve-outs for data breach
            and IP indemnity.
RATIONALE:  "3-month cap creates material risk given the sensitive nature
             of data processed. Standard commercial practice for SaaS
             agreements in our market is 12 months' fees with mutual
             application."
PRIORITY:   Must-have

CLAUSE:     Data Protection (Section 11)
STATUS:     RED
CURRENT:    "CloudStack shall comply with all applicable data protection
             laws." [No DPA attached. No data residency provisions.
             No breach notification timeline. No deletion on termination.]
ISSUE:      Pakistan PDPA 2023 requires: (1) sensitive personal data may
            need to be stored in Pakistan (verify with counsel); (2) data
            subject rights including access, correction, erasure; (3)
            cross-border transfer safeguards. Current clause is a bare
            compliance statement with no operational substance.
            ESCALATION TRIGGER: SaaS contract processing personal data
            of Pakistani residents without PDPA-compliant DPA.
REDLINE:    "CloudStack shall execute the Data Processing Addendum attached
             as Schedule [X] prior to processing any Customer Personal Data.
             The DPA shall specify: (a) categories of data processed, (b)
             purposes of processing, (c) data residency requirements
             including any Pakistan data localisation obligations under
             PDPA 2023, (d) 72-hour breach notification to Customer,
             (e) deletion of all Customer Personal Data within 30 days
             of termination, and (f) cooperation with data subject
             requests within applicable response windows."
FALLBACK:   None -- a DPA is a legal requirement, not a negotiation position.
RATIONALE:  "PDPA 2023 compliance is mandatory. Processing personal data
             without a DPA exposes both parties to regulatory risk.
             Penalties under PDPA: up to PKR 25 million."
PRIORITY:   Must-have -- do not proceed without DPA

CLAUSE:     Governing Law (Section 14.1)
STATUS:     YELLOW
CURRENT:    "This Agreement shall be governed by the laws of the State
             of Delaware, United States."
ISSUE:      Your playbook standard is Pakistani law for domestic
            contracts, English law for significant international
            contracts. Delaware law is acceptable for a US-headquartered
            vendor but note: enforcement of Delaware judgments in
            Pakistan requires a fresh suit (Pakistan does not have a
            reciprocal enforcement treaty with the US for civil
            judgments). Consider ICC arbitration as alternative.
REDLINE:    "This Agreement shall be governed by the laws of England
             and Wales. Any dispute shall be finally resolved by
             arbitration under the ICC Rules, with the seat of
             arbitration in London and the language of arbitration
             being English."
FALLBACK:   Accept Delaware law if vendor adds ICC arbitration clause
            (Pakistan is a New York Convention signatory -- arbitral
            awards are enforceable).
RATIONALE:  "English law is commonly accepted for international
             commercial contracts involving Pakistani parties and
             is enforceable in Pakistani courts. ICC arbitration
             provides neutral, internationally enforceable
             dispute resolution."
PRIORITY:   Nice-to-have

CLAUSE:     IP Ownership (Section 7)
STATUS:     GREEN
CURRENT:    "CloudStack retains all IP rights in the Platform.
             Customer retains all IP rights in Customer Data."
ISSUE:      Standard SaaS position -- vendor owns platform, customer
            owns data. Consistent with playbook.
PRIORITY:   No action required

------------------------------------------------------------

HOLISTIC RISK SUMMARY

Total: 3 GREEN | 2 YELLOW | 2 RED
Single most material risk: No Data Processing Addendum despite processing
  personal data of Pakistani residents -- PDPA 2023 compliance gap.
Recommendation: NEGOTIATE -- do not execute without DPA and liability
  cap revision. Route RED items to reviewing attorney.
Priority negotiation order:
  1. Data protection (DPA) -- legal requirement
  2. Limitation of liability -- material financial risk
  3. Governing law -- enforcement practicality

------------------------------------------------------------
ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

Bilal reviews the output. The RED on data protection is exactly right -- he knows from his PDPA compliance work that a bare "comply with applicable laws" clause is insufficient. He forwards the output to Ayesha (the GC), who reviews the redlines, adjusts the liability floor from PKR 5,000,000 to PKR 4,800,000 (matching exactly 12 months' fees for cleaner negotiation optics), and sends the marked-up contract to CloudStack's legal team.

Total time: 25 minutes (Bilal's review) + 15 minutes (Ayesha's attorney review) = 40 minutes. The same review without the plugin would have taken Ayesha 3-4 hours of her own time.

---

## Stage 2: Obligation Tracking with `/vendor-check`

A signed contract is the beginning of a legal relationship, not the end of legal work. Contracts contain obligations -- deliverables, payments, notices, audits, SLA thresholds, renewal windows -- and those obligations need active tracking. The `/vendor-check` command queries your connected contract repository and produces:

- **Obligations summary** -- what each party must do and when
- **Upcoming deadlines** -- obligations due in the next 30/60/90 days
- **Overdue items** -- obligations with no recorded completion
- **Renewal calendar** -- auto-renewal dates, notice windows, recommended action dates
- **SLA monitoring** -- if connected to your performance management system, current SLA performance against contractual thresholds

```
/vendor-check [vendor name or contract reference]
```

### Worked Example: Tracking Obligations After Execution

After the CloudStack agreement is negotiated and executed, Bilal runs:

```
/vendor-check CloudStack Inc.

Agent:
VENDOR STATUS -- CloudStack Inc.
------------------------------------------------------------
Contract:       SaaS MSA -- Project Management Platform
Reference:      2026-03-15-0047
Executed:       15 March 2026
Term:           12 months (auto-renewal with 60-day notice)
Annual value:   PKR 4,800,000
Governing law:  English law, ICC arbitration (London)

UPCOMING OBLIGATIONS (next 90 days):
  15 May 2026  -- CloudStack to provide SOC 2 Type II report
                   (Section 11.4) -- Owner: Vendor
  30 May 2026  -- Noor Technologies quarterly data processing
                   audit right window opens (DPA Section 5)
                   -- Owner: Bilal Hussain
  15 Jun 2026  -- Q2 invoice due -- PKR 1,200,000 -- Owner: Finance

RENEWAL ALERT:
  Last date to give non-renewal notice: 15 January 2027
    (60 days before 15 March 2027 auto-renewal)
    Calendar reminder set: 1 January 2027

NO OVERDUE ITEMS
------------------------------------------------------------
```

---

## Stage 3: The Contract Repository as Intelligence

The most underused asset in most legal departments is the archive of executed contracts. These documents contain years of negotiated positions, accepted compromises, and market data about what counterparties will and will not agree to. Connected via MCP to your document management system, the agent transforms this archive from static storage into queryable intelligence:

```
/brief topic:"limitation of liability benchmarking"
      scope:"all executed software vendor contracts 2022-2025"
```

The agent searches your archive and returns: the range of liability caps accepted and achieved, which counterparties accepted your standard position, which required negotiation, and at what compromise position RED escalations were ultimately resolved. This is institutional memory that currently lives nowhere -- not in any system, not in any document. The agent builds it automatically.

### Worked Example: Querying the Contract Repository

Bilal wants to prepare for a negotiation with a large enterprise vendor. He queries Noor Technologies' contract archive:

```
/brief topic:"limitation of liability benchmarking"
      scope:"all executed vendor SaaS contracts, 2024-2026"
      output:"ranges by contract value tier"

Agent:
LIABILITY CAP BENCHMARKING -- Noor Technologies
------------------------------------------------------------
Source: 34 executed SaaS contracts (2024-2026)

By contract value tier:
  < PKR 2,000,000/yr:   Average cap: 6 months' fees (100% mutual)
  PKR 2M-10M/yr:        Average cap: 10.4 months' fees (94% mutual)
  > PKR 10,000,000/yr:  Average cap: 12 months' fees (88% mutual)
                         2 contracts have uncapped IP indemnity carve-outs

Position outcomes:
  Started at our standard (12 months): 34/34 (100%)
  Achieved 12 months:                  22/34 (65%)
  Settled at 6-11 months:              10/34 (29%)
  Settled below 6 months:              2/34 (6%) -- both strategic
                                       partners with board-approved exceptions

Most resistant counterparties: US enterprise vendors (average 7.2 months
  on first offer; all moved to 9+ months after pushback with rationale).
------------------------------------------------------------
```

This data is invaluable. When Bilal negotiates with the next vendor who insists on a 3-month cap, he has evidence: "Our executed contract portfolio shows that 94% of our SaaS vendors with comparable contract values accept a 6-12 month mutual cap. We would be pleased to discuss this further." That is not a negotiating position pulled from a textbook -- it is institutional intelligence derived from actual outcomes.

> **The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.**

:::tip Cross-Border Contracts
When your contracts involve parties, performance, or data flows across multiple jurisdictions, the review gets more complex. Lesson 4 covers cross-border analysis in depth — including multi-overlay loading, the five cross-border pitfalls, and e-signature routing with `/signature-request`.
:::

---

## What You Built

1. A complete contract review with GREEN/YELLOW/RED classification and attorney-ready redlines for the CloudStack SaaS agreement
2. An obligation tracking dashboard showing upcoming deadlines, renewal alerts, and overdue items via `/vendor-check`
3. An institutional benchmarking query against Noor Technologies' contract repository — evidence-based negotiation positions derived from 34 executed contracts

---

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Apply Contract Review to a Different Agreement Type

```
I am practising with the Claude Legal Plugin. The lesson walked
through a cross-border services agreement. Now I want to test
my skills on a different contract type.

Here is a SaaS subscription agreement (you are the customer):

- Vendor: a US-incorporated cloud analytics platform
- Annual value: GBP 72,000
- Governing law: State of California
- These four clauses need review:
  1. Auto-renewal with 90-day non-renewal notice window
     (your standard is 60 days)
  2. Vendor may modify the service "at any time with 30 days'
     notice" including removing features you rely on
  3. Indemnification is one-way (vendor indemnifies for IP
     infringement only; no indemnification for data breaches)
  4. Data processing addendum references "applicable law" but
     does not specify UK GDPR or include SCCs for international
     transfers

Run /review-contract with your jurisdiction skill active (use
UK law or your own jurisdiction). For each clause, provide the
GREEN/YELLOW/RED classification, a proposed redline, and a
fallback position.

What you are checking: Did the agent flag the service modification
clause as a material risk (it should — the vendor can remove
features you depend on with only 30 days' notice)? Did it
identify the international data transfer gap in the DPA? Compare
the agent's classification against your own judgment — where do
you agree and where would you override?
```

**What you are learning:** Applying contract review to a SaaS subscription agreement tests whether you can transfer the classification framework to a different contract type. The service modification clause is the kind of risk that a generic review might miss but a jurisdiction-aware review with a mature playbook should catch -- it has real business impact even though it is not a traditional "legal risk" clause.

### Prompt 2: Obligation Tracking After Execution

```
A company has just executed a 12-month SaaS agreement with these
key terms:
- Annual value: $120,000, paid quarterly
- Auto-renewal with 60-day notice for non-renewal
- Vendor must provide SOC 2 Type II report within 60 days of execution
- Customer has quarterly data processing audit rights
- 72-hour breach notification requirement
- Vendor must delete all customer data within 30 days of termination

Design the obligation tracking output that /vendor-check should
produce for this contract. Include:
- All upcoming obligations with dates and owners
- The renewal alert with recommended action date
- Any calendar reminders that should be set automatically
```

**What you are learning:** A signed contract is the beginning, not the end, of legal work. Designing the obligation tracking output teaches you to think about contracts as ongoing relationships with active requirements -- the mindset that prevents missed renewals, overlooked audit rights, and compliance gaps.

### Prompt 3: Apply to Your Organisation

```
Take a real vendor agreement from your organisation (or use a
sample SaaS agreement you can find online). Run /review-contract
with your playbook active.

Before running: predict which clauses will be flagged RED
and which will be GREEN. Write your predictions.

After running: compare the agent's classification against
your predictions. Where do you agree? Where did the agent
catch something you missed? Where would you override the
agent's classification based on your knowledge of the
commercial relationship?

This comparison — agent output vs. your judgment — is exactly
what attorney review means in practice.
```

**What you are learning:** The real test of the contract review workflow is applying it to your own agreements. The prediction-then-comparison exercise builds the judgment calibration that makes you effective at reviewing agent output — knowing when to accept the classification and when to override it based on context the agent does not have.

---

Continue to [Lesson 4: Cross-Border Contracts and E-Signatures ->](./04-cross-border-contracts-and-e-signatures.md)
