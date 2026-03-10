---
sidebar_position: 4
title: "Cross-Border Contracts and E-Signatures"
description: "Analyse cross-border contracts with multi-overlay jurisdiction review, navigate the five cross-border pitfalls, and route documents for e-signature using /signature-request with pre-flight verification"
keywords:
  [
    "cross-border contracts",
    "e-signatures",
    "signature-request",
    "multi-jurisdiction review",
    "conflict of laws",
    "New York Convention",
    "DocuSign MCP",
    "Arabic prevails risk",
    "cross-border pitfalls",
    "multi-overlay loading",
    "private international law",
    "tax withholding",
    "data transfer mechanisms",
    "pre-signature checklist",
    "post-execution obligations",
  ]
chapter: 22
lesson: 4
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Analyse Cross-Border Contracts Using Multi-Overlay Loading"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can identify when a contract involves multiple jurisdictions (governing law, party jurisdictions, performance jurisdictions), explain how the router loads multiple overlays simultaneously, and apply the five cross-border pitfalls checklist to a real contract scenario"

  - name: "Apply the Five Cross-Border Pitfalls Checklist"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can name the five cross-border pitfalls (mandatory local law conflicts, arbitration enforceability gaps, data transfer mechanism gaps, tax withholding obligations, language precedence), identify which pitfalls apply to a given cross-border contract, and explain why each matters for the reviewing attorney"

  - name: "Route Finalised Contracts for E-Signature with Pre-Flight Verification"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can use /signature-request to route a finalised contract for execution, complete the five-point pre-signature checklist, and explain the post-execution steps (repository storage, obligation extraction)"

learning_objectives:
  - objective: "Identify cross-border contract risks that single-jurisdiction reviews miss and apply the five-pitfall checklist to a multi-jurisdictional contract"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given a contract involving three jurisdictions, student identifies at least three cross-border pitfalls and explains which jurisdiction overlay catches each issue"

  - objective: "Explain how multi-overlay loading produces a more complete contract review than a single-jurisdiction analysis"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can walk through the five-step overlay loading sequence and describe what each step adds to the analysis that would be missed in a single-jurisdiction review"

  - objective: "Use /signature-request to route a finalised contract for e-signature after completing the pre-flight verification checklist"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can demonstrate the /signature-request workflow, complete all five pre-signature checks, and describe the post-execution steps including obligation extraction"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Conflict of laws (private international law) as a legal discipline"
    - "Multi-overlay loading: the five-step jurisdiction loading sequence"
    - "The five cross-border pitfalls (mandatory local law, arbitration, data transfer, tax, language)"
    - "New York Convention and arbitral award enforceability"
    - "Arabic prevails risk in GCC contracts"
    - "/signature-request command and the e-signature routing workflow"
    - "Pre-signature checklist: the five-point verification before execution"
  assessment: "7 concepts at B1 level -- at the upper boundary of the 5-7 cognitive limit. The lesson structures these into three distinct stages (pitfalls framework, worked example, e-signature closure) with a major worked example providing concrete scaffolding. Two concepts (conflict of laws, New York Convention) are definitional and scaffold the analytical concepts that follow."

differentiation:
  extension_for_advanced: "Take a real cross-border contract from your organisation and run it through the multi-overlay review. Map each pitfall the agent flags to the specific jurisdiction overlay that caught it. Identify any pitfalls the agent missed that you know about from experience."
  remedial_for_struggling: "Focus on the five cross-border pitfalls and the pre-signature checklist. If you can name the five pitfalls and explain why entity name mismatch is the most common execution error, you have the core skills for cross-border contract management."
---

# Cross-Border Contracts and E-Signatures

In Lesson 3 you reviewed a vendor SaaS agreement clause by clause, watched the agent classify each provision as GREEN, YELLOW, or RED, and saw how Bilal at Noor Technologies used the output to cut review time from four hours to forty minutes. That worked because the contract had one governing law, one jurisdiction, and one set of regulatory requirements. Most of Noor Technologies' contracts are not that simple.

Noor Technologies sells Cloud ERP to textile manufacturers across three markets: Pakistan (70% of revenue), UAE (20%), and the UK (10%). When Ayesha Malik reviews a contract with a Dubai-based buyer for software delivered in Riyadh, she is not operating in one legal system. She is operating in three simultaneously -- Pakistani law governs her company's obligations, UAE law governs the buyer, and Saudi law governs the place of performance. A single-jurisdiction review catches the issues in one system and misses the issues at the intersections.

Those intersections are where the most expensive mistakes hide.

## The Five Cross-Border Pitfalls

Before running any cross-border review, know what you are looking for. These five pitfalls recur in every multi-jurisdictional contract and are encoded as escalation triggers across the Legal Plugin's jurisdiction overlays.

> **Concept Box: Conflict of Laws (Private International Law)**
>
> **Conflict of laws** is the body of rules that determines which jurisdiction's law applies when a legal dispute involves elements from more than one country. Three questions arise in every cross-border contract: (1) Which court has jurisdiction? (2) Which country's substantive law governs? (3) Will a judgment or arbitral award from one country be enforced in another? A governing law clause answers question 2 but leaves questions 1 and 3 open. Why it matters: a contract governed by UAE law, between a Pakistani vendor and a Dubai buyer, with performance in Saudi Arabia, creates three separate conflict-of-laws analyses -- and a single-jurisdiction review addresses only one.

**Pitfall 1: Governing law vs. mandatory local law conflicts.** A contract governed by English law does not override mandatory local employment law, consumer protection law, or data localisation requirements in the jurisdiction where services are performed. The governing law clause resolves which law interprets the contract -- it does not exempt the parties from local regulatory obligations.

**Pitfall 2: Arbitration enforceability gaps.** Not all jurisdictions enforce foreign arbitral awards equally. The agent checks whether party and performance jurisdictions are New York Convention signatories and flags non-signatory jurisdictions as RED.

> **Concept Box: New York Convention**
>
> The **New York Convention** (formally the Convention on the Recognition and Enforcement of Foreign Arbitral Awards, 1958) is a treaty signed by 172 countries that requires courts in signatory states to enforce arbitral awards made in other signatory states. Pakistan, the UAE, Saudi Arabia, and the UK are all signatories. Why it matters: if your dispute resolution clause specifies arbitration in a New York Convention signatory state, the resulting award is enforceable across all 172 member countries. If a party or performance jurisdiction is not a signatory, enforcement becomes uncertain. The agent flags this gap automatically.

**Pitfall 3: Data transfer mechanism gaps.** A Data Processing Addendum referencing EU Standard Contractual Clauses may be insufficient for transfers to jurisdictions not covered by EU adequacy decisions. When data flows across three jurisdictions, each jurisdiction's data protection framework must be satisfied independently.

**Pitfall 4: Tax withholding obligations.** Cross-border service agreements frequently trigger withholding tax in the jurisdiction where services are consumed. Pakistan's Federal Board of Revenue (FBR) imposes withholding tax on payments to foreign parties. Saudi Arabia imposes 5% withholding tax on payments to non-resident service providers. The agent flags these for tax counsel -- it does not provide tax advice, but it ensures the issue is not overlooked in the negotiation.

**Pitfall 5: Language precedence (Arabic prevails risk).** In jurisdictions where Arabic is the official court language -- UAE mainland and Saudi Arabia -- an English-language contract may need a certified Arabic translation, and the Arabic version may prevail in court if there is a discrepancy. A contract worth AED 1.8 million can turn on a translation nuance.

## How Multi-Overlay Loading Works

When the agent identifies a contract involving multiple jurisdictions, the router executes an expanded loading sequence:

```
STEP 1 — Identify primary governing law       → Load primary overlay
STEP 2 — Identify party jurisdictions          → Load party jurisdiction overlays
STEP 3 — Identify performance jurisdictions    → Load performance jurisdiction overlays
STEP 4 — Cross-reference escalation triggers   → Flag conflicts between overlays
STEP 5 — Output combined analysis              → Jurisdiction-specific notes per clause
```

> **Concept Box: Multi-Overlay Loading**
>
> **Multi-overlay loading** is the Legal Plugin's method for analysing contracts that touch more than one jurisdiction. Instead of applying a single jurisdiction's legal framework, the router loads an overlay file for each relevant jurisdiction and cross-references them clause by clause. The result is a combined analysis that flags issues existing in one jurisdiction but not another -- precisely the issues that human reviewers, expert in one legal system, are most likely to miss. Why it matters: a UAE-law overlay alone would not flag Pakistan's FBR withholding tax obligation. A Pakistan overlay alone would not flag the Arabic-prevails risk in UAE mainland courts. Multi-overlay loading catches both.

Step 4 is where the real value emerges. Cross-referencing means the agent compares each clause against every loaded overlay and flags conflicts -- a data protection clause that satisfies UAE PDPL but violates Pakistan's PDPA, or an IP assignment clause that works under UAE law but fails under Pakistan's copyright framework.

## Worked Example: NexGen Solutions (Lahore) and Al-Faisal Digital (Dubai) -- Saudi Delivery

Noor Technologies' sister company, NexGen Solutions, has received a Master Services Agreement from Al-Faisal Digital Enterprises LLC in Dubai. NexGen will develop a custom logistics management platform deployed in Riyadh. Contract value: AED 1,850,000 (approximately PKR 140 million). Term: 18 months. Governing law: UAE law. Dispute resolution: Dubai International Arbitration Centre (DIAC).

Before running the review, predict: which of the five cross-border pitfalls will the agent flag? Three jurisdictions are involved -- Pakistan (vendor), UAE (buyer), Saudi Arabia (performance). Think about where data will flow, where money will flow, and where disputes will be resolved.

Run the review:

```
/review-contract
[Upload: NexGen_AlFaisal_MSA_v2.pdf]

Context: We are the vendor (NexGen Solutions, Pakistan).
Contract value: AED 1,850,000. 18-month development engagement.
Client is Dubai mainland. Delivery in Riyadh.
```

**Expected output:**

```
TASK:         Contract Review — Master Services Agreement
JURISDICTION: UAE Law (mainland overlay loaded)
              CROSS-BORDER DETECTED:
              - Vendor jurisdiction: Pakistan (pakistan-law overlay loaded)
              - Performance jurisdiction: Saudi Arabia (saudi-law overlay loaded)
PLAYBOOK:     Loaded (your organisation's negotiation playbook)
ATTORNEY REVIEW REQUIRED: YES

CROSS-BORDER ALERT: This contract involves three jurisdictions.
I will analyse against all three overlays and flag inter-jurisdictional
conflicts.

CLAUSE:     Data Protection (Section 9)
STATUS:     RED — ESCALATE
CURRENT:    "Each party shall comply with applicable data protection
             laws in performance of this Agreement."
ISSUE:      Three different data protection regimes apply simultaneously:
            (1) UAE PDPL (Federal Decree-Law No. 45 of 2021) for UAE
                resident data processed by Al-Faisal
            (2) Pakistan PDPA 2023 for personal data of Pakistani
                developers and any Pakistani resident data
            (3) Saudi PDPL (Royal Decree M/19 of 2021) for data
                processed in the Riyadh deployment
            The current clause is too vague to satisfy any of these
            frameworks. No DPA is attached. No cross-border transfer
            mechanism is specified for Pakistan→UAE or UAE→Saudi
            data flows.
REDLINE:    "Each party shall comply with all applicable data protection
             laws, including the UAE Federal Decree-Law No. 45 of 2021,
             the Pakistan Personal Data Protection Act 2023, and the
             Saudi Arabia Personal Data Protection Law. The parties
             shall execute the Data Processing Addendum attached as
             Schedule [X], which shall specify: (a) categories of
             personal data processed; (b) lawful basis for processing;
             (c) cross-border transfer mechanisms; (d) data localisation
             obligations; and (e) breach notification timelines
             applicable in each jurisdiction."
RATIONALE:  "Multi-jurisdictional data processing requires jurisdiction-
             specific compliance. A blanket compliance clause is
             insufficient for regulatory enforcement purposes."
PRIORITY:   Must-have

CLAUSE:     Tax and Withholding (Section 14)
STATUS:     RED — ESCALATE
CURRENT:    "All fees are exclusive of applicable taxes."
ISSUE:      Pakistan FBR imposes withholding tax on payments for
            services rendered by Pakistani entities to foreign parties.
            Saudi Arabia imposes 5% withholding tax on payments to
            non-resident service providers. Neither obligation is
            addressed. NexGen may receive net payments significantly
            below the stated AED 1,850,000 if withholding is not
            allocated.
REDLINE:    [Recommend escalation to tax counsel in Pakistan and
             Saudi Arabia before proposing specific language.
             The commercial impact may exceed AED 200,000.]
PRIORITY:   Must-have — escalate to tax counsel

CLAUSE:     Intellectual Property (Section 7)
STATUS:     YELLOW — NEGOTIATE
CURRENT:    "All work product developed under this Agreement shall be
             the exclusive property of Al-Faisal upon payment."
ISSUE:      Pakistan IP law (Copyright Ordinance 1962) treats computer
            programs as literary works. Under Pakistani law, copyright
            vests in the author (developer) unless assigned in writing.
            The current clause may be insufficient as a valid assignment
            under Pakistani copyright law — a standalone IP assignment
            deed executed under Pakistani law is recommended.
            Additionally, NexGen's pre-existing IP (frameworks,
            libraries, development tools) is not carved out.
REDLINE:    "All Deliverables (as defined in Schedule A) developed
             specifically for Al-Faisal under this Agreement shall
             be assigned to Al-Faisal upon full payment, by way of a
             separate IP Assignment Deed in the form set out in
             Schedule [Y]. NexGen retains all right, title, and
             interest in its Pre-Existing IP (as defined in
             Schedule A), and grants Al-Faisal a perpetual,
             non-exclusive licence to use such Pre-Existing IP
             solely as embedded in the Deliverables."
FALLBACK:   If Al-Faisal resists a separate assignment deed, propose
            a warranty that NexGen has full authority to assign and
            that the assignment is effective under Pakistani law.
RATIONALE:  "Protects both parties: Al-Faisal receives clean IP
             ownership of custom work; NexGen retains its platform
             and development tools for future engagements."
PRIORITY:   Nice-to-have (the separate deed); Must-have (the
            pre-existing IP carve-out)

CLAUSE:     Governing Law and Dispute Resolution (Section 18)
STATUS:     YELLOW — NEGOTIATE
CURRENT:    "This Agreement is governed by the laws of the United Arab
             Emirates. Disputes shall be resolved by DIAC arbitration
             in Dubai."
ISSUE:      UAE mainland law (Civil Code, Federal Law No. 5 of 1985):
            (1) Courts may reduce liquidated damages deemed excessive
                (Art. 390)
            (2) Good faith obligations (Art. 246) are broader than
                common law jurisdictions
            (3) Arabic is the official court language — if arbitration
                fails and litigation is required, the Arabic version
                of the contract may prevail
            DIAC arbitration is reasonable for this value. Both UAE
            and Pakistan are New York Convention signatories, so the
            award is enforceable in both jurisdictions. Saudi Arabia
            is also a signatory.
REDLINE:    Add: "The English language version of this Agreement shall
            prevail in the event of any conflict with any translated
            version. Arbitration proceedings shall be conducted in
            English."
RATIONALE:  "Ensures both parties can participate in dispute resolution
             proceedings without translation disadvantage."
PRIORITY:   Must-have

HOLISTIC RISK SUMMARY
Total: 2 GREEN | 2 YELLOW | 2 RED
Most material risk: Unaddressed cross-border data protection compliance
                    across three jurisdictions without a DPA.
Recommendation: NEGOTIATE — address the 2 RED items (data protection
                DPA and tax withholding) before execution. Both require
                specialist counsel.
Negotiation priority: (1) Data protection DPA, (2) Tax withholding,
                      (3) IP assignment mechanics, (4) Language precedence.

ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

### Mapping the Pitfalls

Compare your prediction against the output. The agent flagged four of the five pitfalls:

| Pitfall                       | Status | Where It Appeared                                               |
| ----------------------------- | ------ | --------------------------------------------------------------- |
| Mandatory local law conflicts | RED    | Data Protection -- three frameworks apply simultaneously        |
| Arbitration enforceability    | GREEN  | DIAC with New York Convention coverage -- no gap                |
| Data transfer mechanism gaps  | RED    | No cross-border transfer mechanisms for Pakistan-UAE-Saudi flow |
| Tax withholding obligations   | RED    | Pakistan FBR + Saudi 5% withholding -- AED 200,000+ exposure    |
| Language precedence           | YELLOW | Arabic prevails risk in UAE mainland courts                     |

The arbitration clause was GREEN because all three jurisdictions are New York Convention signatories. If one jurisdiction were not a signatory -- say the performance jurisdiction were a non-signatory state -- that GREEN would become RED. The pitfall framework helps you evaluate the output: you know what to look for even before the agent reports.

> **The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.**

---

## Closing the Loop: /signature-request

In Lesson 3 you reviewed a contract. In this lesson you reviewed a cross-border contract with multi-overlay analysis. Both workflows end with a negotiation priority list and "ATTORNEY REVIEW REQUIRED." But what happens after the attorney completes the review, the redlines are negotiated, and both parties agree on final terms?

The contract needs to be executed. The `/signature-request` command closes the contract lifecycle loop -- from review through negotiation to execution.

### The Pre-Signature Checklist

Before routing any contract for signature, five checks prevent the most common execution errors. Entity name mismatch is the single most frequent cause of contracts requiring re-execution -- a costly and embarrassing delay.

```
/signature-request
[Upload: NexGen_AlFaisal_MSA_FINAL.pdf]

Context: This is the finalised NexGen-AlFaisal MSA after negotiation.
Both parties have agreed to all terms. Route for execution.
```

**Expected output:**

```
PRE-SIGNATURE VERIFICATION
─────────────────────────────────────────────────────────────

☑ Final form confirmed
  Version: v4.2 (FINAL) — matches last redline exchange
  No tracked changes or comments remaining

☑ Entity names verified
  Party 1: "NexGen Solutions (Pvt.) Ltd."
    ✓ Matches SECP registration exactly
    ✓ Consistent throughout document (checked 14 occurrences)
  Party 2: "Al-Faisal Digital Enterprises LLC"
    ✓ Matches Dubai DED registration
    ✓ Consistent throughout document (checked 11 occurrences)

☑ Signature blocks aligned with authorised signers
  Party 1: Khalid Farooq, CEO — confirmed authorised signatory
  Party 2: Mohammed Al-Faisal, Managing Director — confirmed

☑ All exhibits and schedules attached
  Schedule A: Statement of Work and Deliverables — PRESENT
  Schedule B: Data Processing Addendum — PRESENT
  Schedule C: IP Assignment Deed — PRESENT
  Schedule D: Payment Milestones — PRESENT

☑ Internal approvals completed
  Board resolution required: NO (below threshold)
  GC sign-off: REQUIRED — route to legal@nexgen.pk
  Finance sign-off: REQUIRED — route to cfo@nexgen.pk

─────────────────────────────────────────────────────────────

ROUTING RECOMMENDATION:
  DocuSign connector: NOT CONNECTED
  → Generating manual execution instructions:

  1. Print 2 original counterparts (wet ink execution)
  2. Each party executes both counterparts
  3. Each party retains one fully executed original
  4. Scanned copy to legal@nexgen.pk for repository

  Alternative: Connect DocuSign MCP for digital execution.
  Run: claude plugin install docusign-mcp
  Benefits: Audit trail, timestamp, automated repository filing

POST-EXECUTION STEPS (automated when contract is filed):
  → Contract saved to repository with reference 2026-04-XX-XXXX
  → Obligations extracted:
    • 15 payment milestones over 18 months
    • Quarterly data processing audit rights
    • SOC 2 Type II report due within 60 days
    • Non-renewal notice deadline: [date calculated]
  → Calendar reminders set for all deadlines
  → /vendor-check enabled for this contract

─────────────────────────────────────────────────────────────
ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

### With and Without the DocuSign Connector

The `/signature-request` command works in two modes. With the DocuSign MCP connector installed, the agent routes the document directly for digital signatures, creates an audit trail, and files the executed contract automatically. Without the connector, the agent generates manual execution instructions -- print, sign, scan, file. Both paths end with the same result: the contract enters the repository and obligations are extracted for tracking.

| Feature               | With DocuSign MCP        | Without Connector           |
| --------------------- | ------------------------ | --------------------------- |
| Signature method      | Digital (e-signature)    | Wet ink (print and sign)    |
| Audit trail           | Automatic (timestamped)  | Manual (scanned copy)       |
| Repository filing     | Automatic on completion  | Manual upload required      |
| Obligation extraction | Triggered automatically  | Triggered on manual filing  |
| Time to execute       | Minutes (remote signing) | Days (courier or in-person) |

If your organisation uses DocuSign or a similar e-signature platform, connecting it eliminates the manual steps. If not, the manual path works -- the key point is that obligations are extracted and tracked regardless of how the contract is executed.

### Post-Execution: What Happens Next

Once the contract is filed in the repository -- whether through DocuSign auto-filing or manual upload -- the agent extracts obligations and sets up monitoring automatically. This connects directly to the `/vendor-check` workflow you learned in Lesson 3. The contract moves from "negotiated and signed" to "actively monitored" without any additional configuration.

Run `/vendor-check NexGen-AlFaisal` after execution and you will see the same structured obligation tracking output: upcoming deadlines, payment milestones, audit rights, and renewal alerts.

---

## What You Built

1. Five-pitfall checklist for cross-border contracts -- governing law conflicts, arbitration gaps, data transfer gaps, tax withholding, language precedence
2. Multi-overlay contract review with three-jurisdiction analysis (Pakistan vendor, UAE buyer, Saudi performance)
3. Pitfall-to-output mapping -- you can read a cross-border review and identify which pitfall triggered each RED or YELLOW classification
4. E-signature routing with pre-flight verification using `/signature-request`
5. Post-execution obligation extraction connecting the signed contract to `/vendor-check` monitoring

## Try With AI

**Setup:** Use these prompts in Cowork or your preferred AI assistant with the Legal Plugin installed.

### Prompt 1: Reproduce

```
Review this cross-border contract scenario:

Vendor: A software company incorporated in Karachi, Pakistan
Buyer: A technology company in Dubai, UAE (mainland)
Performance: Software deployed and used in Riyadh, Saudi Arabia
Governing law: UAE law
Dispute resolution: DIAC arbitration in Dubai
Contract value: AED 1,850,000

Identify all five cross-border pitfalls and classify each as
GREEN (no issue), YELLOW (negotiate), or RED (escalate).
For each classification, explain which jurisdiction creates the risk.
```

**What you are learning:** Applying the five-pitfall framework systematically. Compare the agent's output to the worked example in this lesson. The classifications should be similar -- data protection and tax withholding as RED, IP and language precedence as YELLOW, arbitration as GREEN. If they differ, examine why. Differences reveal how the agent weights risks, which teaches you to calibrate your own judgment.

### Prompt 2: Adapt Jurisdiction

```
Change the worked example: the vendor is now in Lahore, Pakistan,
the buyer is in London, UK, and the software is deployed in
Dubai, UAE (DIFC free zone, not mainland).

Which of the five cross-border pitfalls change classification?
Specifically:
1. Does the arbitration analysis change? (UK vs UAE vs Pakistan)
2. Does the language precedence risk change? (DIFC uses English)
3. Does the data transfer analysis change? (UK GDPR vs UAE PDPL)

Compare the output to the Pakistan-UAE-Saudi scenario.
Which combination has more RED items?
```

**What you are learning:** Jurisdiction combinations change risk profiles. DIFC (common law, English-language) produces different results from UAE mainland (civil law, Arabic court language). UK GDPR creates different data transfer requirements from Saudi PDPL. Running the same framework against different jurisdictions builds the pattern recognition that lets you anticipate issues before the agent flags them.

### Prompt 3: Apply to Your Organisation

```
Take a real cross-border contract from your organisation — or
describe a cross-border arrangement you are currently negotiating.

Identify:
1. The governing law
2. All party jurisdictions
3. All performance jurisdictions
4. Which of the five cross-border pitfalls apply
5. Which pitfall you consider the highest risk and why

Then run /review-contract with the contract uploaded.
Compare the agent's risk assessment against your own analysis.
Where do you agree? Where does the agent flag something you missed?
Where do you see a risk the agent did not catch?
```

**What you are learning:** The discipline of systematic cross-border risk identification before relying on the agent. Your own analysis, informed by the five-pitfall framework, becomes the benchmark against which you evaluate the agent's output. The agent catches jurisdiction-specific issues you might miss. You catch business context the agent cannot know. Together, the review is more complete than either alone.
