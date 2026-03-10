---
sidebar_position: 6
title: "Compliance Check and Legal Risk Assessment"
description: "Use /compliance-check for proactive regulatory assessment of planned business actions, build a 5x5 legal risk matrix with the legal-risk-assessment skill, and distinguish proactive from reactive compliance workflows"
keywords:
  [
    "compliance check",
    "legal risk assessment",
    "5x5 risk matrix",
    "proactive compliance",
    "regulatory assessment",
    "PDPA 2023",
    "UAE PDPL",
    "UK GDPR",
    "risk scoring",
    "compliance assessment",
    "severity likelihood matrix",
    "risk classification",
  ]
chapter: 22
lesson: 6
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Run Proactive Compliance Assessments with /compliance-check"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can describe a planned business action to /compliance-check, interpret the assessment output (Proceed / Proceed with conditions / Requires review), identify applicable regulations, and explain the difference between proactive and reactive compliance"

  - name: "Build a Legal Risk Matrix Using the 5x5 Framework"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can score risks using the 5x5 severity-by-likelihood matrix, classify results into GREEN/YELLOW/ORANGE/RED bands, and produce a prioritised risk register for a planned business action"

  - name: "Distinguish Proactive, Reactive, and Monitoring Compliance Workflows"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can explain when to use /compliance-check (proactive), /review-contract (reactive), and /brief topic:regulatory (monitoring), and can select the correct tool for a given compliance scenario"

learning_objectives:
  - objective: "Run /compliance-check against a planned business action, interpret the regulatory assessment output, and identify applicable regulations across multiple jurisdictions"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a compliance assessment for a business action, identifies at least three applicable regulations, and explains the assessment recommendation"

  - objective: "Score legal risks using the 5x5 severity-by-likelihood matrix and classify each risk into GREEN, YELLOW, ORANGE, or RED bands"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a risk matrix with at least four risks scored and colour-classified, and can explain why each risk received its severity and likelihood ratings"

  - objective: "Select the correct compliance tool (/compliance-check, /review-contract, or /brief) based on whether the compliance need is proactive, reactive, or monitoring"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given three compliance scenarios, student correctly identifies which tool to use and explains the reasoning"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Proactive compliance vs. reactive compliance vs. regulatory monitoring"
    - "/compliance-check command and its output structure"
    - "The 5x5 severity-by-likelihood risk matrix"
    - "Risk score calculation (Severity x Likelihood)"
    - "Four-band risk classification (GREEN/YELLOW/ORANGE/RED)"
    - "Priority actions as compliance output"
  assessment: "6 concepts at B1 level -- within the 7-10 cognitive limit. The lesson builds on the GREEN/YELLOW/RED classification introduced in L03 and extends it to a quantified risk framework. The compliance-check command follows the same input-output pattern students used with /review-contract and /triage-nda."

differentiation:
  extension_for_advanced: "Run /compliance-check for a real planned initiative at your organisation. Build a complete risk matrix with at least six risks, score each using the 5x5 framework, and draft a one-page pre-launch compliance memo summarising the assessment, the risk matrix, and your recommended priority actions."
  remedial_for_struggling: "Focus on two things: (1) the difference between proactive and reactive compliance -- if you can explain when to use /compliance-check vs. /review-contract, you understand the core distinction; (2) the 5x5 matrix -- if you can calculate Severity x Likelihood and classify the result into GREEN/YELLOW/ORANGE/RED, you can build a risk matrix for any scenario."
---

# Compliance Check and Legal Risk Assessment

Noor Technologies has built its Cloud ERP platform for Pakistani textile manufacturers. Now Ayesha Malik wants to launch a new feature: AI-powered document processing that reads Urdu-language invoices, bills of lading, and export documentation. The feature will extract business names, addresses, shipment data, and financial figures automatically. Target market: Pakistan domestic customers with UAE and UK export partners.

Before Ayesha writes a single line of marketing copy, she needs to know what regulations apply. Not after launch. Not when a regulator sends a letter. Before the product reaches a single customer.

In Lesson 3, you reviewed an existing CloudStack contract. That was reactive -- the contract already existed and needed assessment. In Lesson 5, you triaged an incoming NDA. That was also reactive -- the NDA arrived and needed routing. This lesson is different. You will assess a planned business action _before_ it creates legal exposure.

## Three Compliance Modes

The Legal Plugin provides three distinct tools for compliance work. Each serves a different purpose:

| Tool                      | Mode           | When to Use                                                | Example                                              |
| ------------------------- | -------------- | ---------------------------------------------------------- | ---------------------------------------------------- |
| `/review-contract`        | **Reactive**   | An agreement exists and needs legal review                 | CloudStack SaaS MSA arrives for signature            |
| `/brief topic:regulatory` | **Monitoring** | You need to track external regulatory changes              | "What PDPA enforcement actions happened this month?" |
| `/compliance-check`       | **Proactive**  | You plan to do something and need to know what rules apply | Noor wants to launch AI document processing          |

Reactive compliance responds to documents that land on your desk. Monitoring tracks changes in the regulatory environment. Proactive compliance assesses your own planned actions before they create exposure. Most legal teams spend 90% of their time on reactive work. The `/compliance-check` command shifts that balance.

:::info Concept Box: Proactive Compliance
**Proactive compliance** is the practice of assessing regulatory requirements _before_ launching a product, entering a market, or changing a business process. For example, before Noor Technologies launches AI document processing for textile exporters, proactive compliance identifies that the Pakistan Personal Data Protection Act 2023 requires consent for processing personal data, that UAE PDPL applies to data from UAE export partners, and that UK GDPR applies to data from UK partners -- all before a single document is processed. Proactive compliance costs hours. Reactive enforcement costs millions. **Why it matters:** a PKR 25 million PDPA penalty or a UK GDPR fine of up to 4% of global turnover dwarfs the cost of a pre-launch assessment.
:::

## Prediction Moment

Before running `/compliance-check`, make your prediction. Noor's AI document processing feature will handle Urdu invoices containing business names, addresses, and shipment data for customers in Pakistan, UAE, and UK.

Write down your answers:

1. Will the assessment say **Proceed**, **Proceed with conditions**, or **Requires review**?
2. Which specific regulations will it flag?
3. How many jurisdictions will the assessment cover?

Hold your predictions. You will compare them to the output in a moment.

## Running /compliance-check

Bilal opens Cowork and runs the assessment:

```
/compliance-check

Planned action: Launch AI-powered document processing service for
Pakistani textile manufacturers. The service will process Urdu-language
invoices, bills of lading, and export documentation containing business
names, addresses, and shipment data. Target market: Pakistan domestic
with UAE and UK export customers.

Processing details:
- Input: scanned PDFs and digital documents in Urdu and English
- Data extracted: company names, addresses, phone numbers, shipment
  values, customs reference numbers, bank details for payment
- Storage: cloud infrastructure in Pakistan
- Access: Noor Technologies employees + customer portal access
- Third parties: OCR processing via cloud API (US-based provider)
```

**Expected output:**

```
COMPLIANCE ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organisation:     Noor Technologies (Pvt) Ltd
Assessment Date:  [Date]
Planned Action:   AI-powered document processing for textile exporters
Playbook:         Noor Technologies Playbook v2.1

RECOMMENDATION:   PROCEED WITH CONDITIONS
                  4 regulatory requirements must be addressed before launch

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APPLICABLE REGULATIONS
──────────────────────────────────────────────────────────
1. Pakistan PDPA 2023 (Personal Data Protection Act)
   Applies because: Processing personal data of Pakistani residents
   Key requirements:
   - Lawful basis for processing (consent or legitimate interest)
   - Data subject rights (access, correction, erasure)
   - Data breach notification within 72 hours
   - Cross-border transfer safeguards for data sent to US OCR provider
   - Potential data localisation requirement (verify with counsel)
   Penalty: Up to PKR 25 million

2. UAE PDPL (Federal Decree-Law No. 45 of 2021)
   Applies because: Processing data of UAE-based export partners
   Key requirements:
   - Consent or contractual necessity for processing
   - Data processing register
   - Cross-border transfer mechanism (UAE→Pakistan)
   - Right to erasure and data portability
   Penalty: Up to AED 5 million

3. UK GDPR (UK General Data Protection Regulation)
   Applies because: Processing data of UK-based export partners
   Key requirements:
   - Lawful basis under Article 6
   - International data transfer mechanism (UK→Pakistan)
   - Data Protection Impact Assessment (DPIA) required for
     large-scale processing of personal data using new technology
   - ICO registration
   Penalty: Up to £17.5 million or 4% of global turnover

4. Pakistan Electronic Transactions Ordinance 2002
   Applies because: Electronic processing of commercial documents
   Key requirements:
   - Legal recognition of electronic records
   - Integrity requirements for digitally processed documents
   - Retention obligations for original documents

──────────────────────────────────────────────────────────

REQUIREMENTS CHECKLIST
──────────────────────────────────────────────────────────
☐ Data Processing Impact Assessment (UK GDPR — mandatory for
  AI-based processing at scale)
☐ Cross-border transfer mechanism for Pakistan→US data flow
  (OCR provider)
☐ Cross-border transfer mechanism for UAE→Pakistan data flow
☐ Privacy policy updated to cover AI document processing
☐ Consent mechanism for personal data extraction
☐ Data retention policy for processed documents
☐ Processor agreement with US-based OCR provider
☐ ICO registration (UK operations)
☐ Internal data processing register

RISK ANALYSIS
──────────────────────────────────────────────────────────
HIGH:   Cross-border data transfer to US OCR provider without
        adequate safeguards — affects all three jurisdictions
MEDIUM: No DPIA conducted — UK GDPR requires this for AI
        processing at scale
MEDIUM: UAE data processing register not established
LOW:    Pakistan ETO document retention — verify current
        retention policy covers electronic originals

PRIORITY ACTIONS (before launch)
──────────────────────────────────────────────────────────
1. Execute processor agreement with OCR provider (addresses
   cross-border transfer for all 3 jurisdictions)
2. Conduct DPIA (UK GDPR requirement, good practice for all)
3. Establish UAE data processing register
4. Update privacy policy and consent mechanisms
5. Verify Pakistan data localisation position with counsel

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

### Calibration

Compare your prediction to the output.

Most students predict "Proceed" because the service processes business documents, not sensitive personal data. The assessment returns "Proceed with conditions" because business documents contain personal data -- names, addresses, phone numbers, bank details -- that trigger data protection requirements in three jurisdictions.

If you predicted all three data protection regimes (PDPA 2023, UAE PDPL, UK GDPR), you have strong regulatory awareness. If you missed the Electronic Transactions Ordinance, that is exactly the value of proactive assessment -- it surfaces regulations you did not anticipate.

:::warning The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.
A compliance assessment is a structured starting point for attorney review, not a substitute for legal advice. The assessment identifies applicable regulations and flags requirements. Your attorney confirms the analysis, verifies the regulatory interpretation, and signs off on the compliance plan.
:::

## The Legal Risk Assessment Framework

The compliance assessment identifies _what_ regulations apply. The **legal risk assessment** quantifies _how much risk_ each compliance gap creates. The Legal Plugin includes a `legal-risk-assessment` skill that uses a **5x5 severity-by-likelihood matrix** -- the same framework used by enterprise risk management teams worldwide.

:::info Concept Box: 5x5 Risk Matrix
A **5x5 risk matrix** plots the **severity** of a risk (how bad it would be) against its **likelihood** (how probable it is). Each axis runs from 1 to 5. The risk score is Severity multiplied by Likelihood, producing a number from 1 to 25. This score determines the risk classification: GREEN (1-4, acceptable), YELLOW (5-9, monitor), ORANGE (10-15, mitigate), RED (16-25, escalate immediately). For example, a risk with Severity 4 (Major -- 10-25% of relevant value) and Likelihood 3 (Possible) scores 12, classified as ORANGE -- requiring active mitigation before proceeding. **Why it matters:** the matrix transforms subjective legal judgment ("this feels risky") into quantified assessment ("this is a 12/25 ORANGE risk requiring mitigation before launch").
:::

### The Severity Scale

| Score | Level      | Financial Impact         | Description                                                |
| ----- | ---------- | ------------------------ | ---------------------------------------------------------- |
| 1     | Negligible | <1% of relevant value    | Minor administrative issue, no regulatory consequence      |
| 2     | Minor      | 1-5% of relevant value   | Procedural gap, correctable without external impact        |
| 3     | Moderate   | 5-10% of relevant value  | Regulatory notice likely, remediation required             |
| 4     | Major      | 10-25% of relevant value | Enforcement action probable, material financial impact     |
| 5     | Critical   | >25% of relevant value   | Criminal liability, licence revocation, existential threat |

### The Likelihood Scale

| Score | Level          | Probability | Description                            |
| ----- | -------------- | ----------- | -------------------------------------- |
| 1     | Remote         | <5%         | Requires exceptional circumstances     |
| 2     | Unlikely       | 5-20%       | Possible but not expected              |
| 3     | Possible       | 20-50%      | Could occur under normal conditions    |
| 4     | Likely         | 50-80%      | Expected to occur without intervention |
| 5     | Almost Certain | >80%        | Will occur unless actively prevented   |

### Risk Score Classification

| Score Range | Band   | Action Required                                                   |
| ----------- | ------ | ----------------------------------------------------------------- |
| 1-4         | GREEN  | Accept -- monitor during normal operations                        |
| 5-9         | YELLOW | Monitor -- include in quarterly risk review                       |
| 10-15       | ORANGE | Mitigate -- active risk reduction required before proceeding      |
| 16-25       | RED    | Escalate -- stop and address immediately, senior counsel required |

### Applying the Matrix to Noor's AI Product Launch

Take the four risks from the compliance assessment and score them:

```
Assess the legal risks of launching AI document processing for
Pakistani textile manufacturers. Use the compliance assessment
above and score each risk using the 5x5 severity-by-likelihood
matrix.
```

**Expected output:**

```
LEGAL RISK MATRIX — Noor Technologies AI Document Processing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RISK 1: Cross-border data transfer to US OCR provider
        without adequate safeguards
Severity:    4 (Major — potential enforcement across 3 jurisdictions)
Likelihood:  4 (Likely — transfer occurs with every document processed)
Score:       16 — RED
Action:      STOP. Execute processor agreement with US provider before
             any data flows. Include Standard Contractual Clauses for
             UK GDPR, and equivalent mechanisms for PDPA and UAE PDPL.

RISK 2: No DPIA conducted for AI processing at scale
Severity:    3 (Moderate — ICO enforcement notice, remediation order)
Likelihood:  3 (Possible — depends on ICO enforcement priorities
             for Pakistan-based processors serving UK customers)
Score:       9 — YELLOW
Action:      MONITOR. Conduct DPIA before UK market launch. Can proceed
             with Pakistan-only launch while DPIA is in progress.

RISK 3: UAE data processing register not established
Severity:    2 (Minor — administrative penalty, correctable)
Likelihood:  4 (Likely — UAE PDPL enforcement increasing since 2024)
Score:       8 — YELLOW
Action:      MONITOR. Establish register before processing UAE partner
             data. Low complexity, high compliance value.

RISK 4: Document retention gap under Pakistan ETO
Severity:    2 (Minor — procedural gap, no personal data impact)
Likelihood:  2 (Unlikely — ETO enforcement is minimal for B2B)
Score:       4 — GREEN
Action:      ACCEPT. Update retention policy to cover electronic
             originals. Include in next policy review cycle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUMMARY: 1 RED | 2 YELLOW | 1 GREEN
OVERALL: PROCEED WITH CONDITIONS — address RED item before launch
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

The risk matrix transforms the compliance assessment from a checklist into a prioritised action plan. Risk 1 is RED -- it must be resolved before launch. Risks 2 and 3 are YELLOW -- they need attention but do not block a phased rollout. Risk 4 is GREEN -- handle it in the normal course of business.

## Worked Example: PayGulf Compliance Assessment

Fatima Al-Rashidi at PayGulf Technologies faces a different compliance question. PayGulf wants to launch a cross-border payment feature allowing Saudi merchants to accept payments from UAE customers through the PayGulf platform.

```
/compliance-check

Planned action: Launch cross-border payment feature for Saudi
merchants. Saudi-based merchants will accept payments from UAE
customers through the PayGulf platform (DIFC-regulated). Payment
processing involves: customer payment data (card details, bank
accounts) flowing from UAE to DIFC infrastructure, transaction
records stored in DIFC, settlement to Saudi merchant bank accounts.

Regulatory context: PayGulf is DFSA-regulated (DIFC).
Expanding service to Saudi Arabia for the first time.
```

**Expected output:**

```
COMPLIANCE ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organisation:     PayGulf Technologies Ltd (DIFC)
Planned Action:   Cross-border payment feature — Saudi merchants

RECOMMENDATION:   REQUIRES REVIEW
                  Regulatory complexity exceeds standard assessment.
                  Specialist counsel required for SAMA and DFSA matters.

APPLICABLE REGULATIONS
──────────────────────────────────────────────────────────
1. SAMA (Saudi Arabian Monetary Authority) — Outsourcing Rules
   Applies because: Saudi merchants outsourcing payment
   processing to a DIFC-regulated entity
   Key requirements:
   - SAMA approval for outsourcing material functions
   - Saudi data localisation (transaction data must be
     stored or mirrored in Saudi Arabia)
   - Contingency planning and exit strategy
   - Annual audit requirements

2. Saudi PDPL (Royal Decree M/19 of 2021)
   Applies because: Processing personal data of Saudi residents
   Key requirements:
   - Data localisation — personal data of Saudi citizens
     must be stored in Saudi Arabia unless exempted
   - Cross-border transfer requires adequate protection
   - Consent requirements for financial data processing

3. DFSA Regulations (Dubai Financial Services Authority)
   Applies because: PayGulf is DFSA-regulated
   Key requirements:
   - Notification of material change in business model
   - Cross-border activity approval
   - Systems and controls for new payment corridor

4. PCI DSS v4.0 (Payment Card Industry Data Security Standard)
   Applies because: Processing card payment data
   Key requirements:
   - Encryption of cardholder data in transit and at rest
   - Annual PCI compliance assessment
   - Incident response plan for payment data breaches
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
```

Fatima applies the risk matrix to PayGulf's four identified risks:

| Risk                                   | Severity                                | Likelihood                                         | Score  | Band       | Action                                                                  |
| -------------------------------------- | --------------------------------------- | -------------------------------------------------- | ------ | ---------- | ----------------------------------------------------------------------- |
| SAMA outsourcing approval not obtained | 5 (Critical -- licence risk)            | 4 (Likely -- SAMA enforces actively)               | **20** | **RED**    | Stop. Engage SAMA regulatory counsel before any Saudi operations        |
| Saudi data localisation gap            | 4 (Major -- enforcement + data seizure) | 4 (Likely -- PDPL enforcement increasing)          | **16** | **RED**    | Stop. Architect Saudi data mirror before processing any Saudi data      |
| DFSA notification of material change   | 3 (Moderate -- regulatory action)       | 3 (Possible -- depends on DFSA assessment)         | **9**  | **YELLOW** | Monitor. File notification before launch. DFSA response time: 4-6 weeks |
| PCI DSS compliance for new corridor    | 3 (Moderate -- payment processing risk) | 2 (Unlikely -- existing PCI programme covers most) | **6**  | **YELLOW** | Monitor. Extend current PCI scope to cover Saudi corridor               |

PayGulf's assessment is more severe than Noor's. Two RED risks -- both requiring resolution before any Saudi operations begin. This is the output you want to see _before_ launch, not after SAMA sends an enforcement notice.

## What You Built

1. Compliance assessment for Noor Technologies' AI document processing launch, identifying four applicable regulations across three jurisdictions
2. Risk matrix with four risks scored using the 5x5 severity-by-likelihood framework -- 1 RED, 2 YELLOW, 1 GREEN
3. Priority actions list for pre-launch compliance, ordered by risk score
4. PayGulf comparison assessment demonstrating how regulated entities face higher compliance thresholds (2 RED risks vs. Noor's 1 RED)

## Try With AI

**Setup:** Use these prompts in Cowork or your preferred AI assistant with the Legal and Legal Ops plugins installed.

### Prompt 1: Reproduce

```
/compliance-check

Planned action: Launch AI-powered document processing service for
Pakistani textile manufacturers. Will process Urdu-language invoices,
bills of lading, and export documentation containing business names,
addresses, and shipment data. Target market: Pakistan domestic with
UAE/UK export customers. OCR processing via US-based cloud API.
```

**What you are learning:** How `/compliance-check` structures a regulatory assessment into applicable regulations, a requirements checklist, risk analysis, and priority actions. Compare your output to the reference in this lesson. The regulation list should be consistent across runs. The priority ordering may vary -- that variation shows you where professional judgment shapes compliance planning.

### Prompt 2: Adapt to a Different Jurisdiction

```
/compliance-check

Planned action: A DIFC-based fintech company plans to offer
automated invoice factoring to SMEs in Saudi Arabia. The service
will process invoice data (company names, amounts, payment terms,
bank details) from Saudi merchants, store data in DIFC cloud
infrastructure, and make factoring decisions using an AI credit
scoring model.

Score the top 4 risks using the 5x5 severity-by-likelihood matrix.
Classify each as GREEN (1-4), YELLOW (5-9), ORANGE (10-15), or
RED (16-25).
```

**What you are learning:** Changing the jurisdiction pair (DIFC to Saudi Arabia) and the business action (invoice factoring with AI credit scoring) tests whether you can apply the same compliance framework to a different scenario. SAMA's outsourcing rules and Saudi PDPL data localisation should appear again -- but the AI credit scoring model introduces new regulatory considerations (algorithmic fairness, explainability requirements) that the document processing scenario did not trigger.

### Prompt 3: Apply to Your Organisation

```
Think of a product launch, market expansion, or business process
change that your organisation is planning or has recently completed.

Run /compliance-check with a detailed description of the planned
action, including:
- What data will be processed
- Which jurisdictions are involved
- What third parties are involved
- What technology is being used

Then score the top 4 risks using the 5x5 matrix. For each risk,
write one sentence explaining your severity rating and one sentence
explaining your likelihood rating.

Compare your risk scores to the agent's risk analysis. Where you
disagree with the agent's assessment, explain why your organisation's
specific context changes the risk level.
```

**What you are learning:** Applying compliance assessment to your own organisation forces you to evaluate the agent's output against your institutional knowledge. The agent identifies regulations based on jurisdiction and data type. You calibrate severity and likelihood based on your organisation's specific circumstances -- its regulatory history, its existing compliance infrastructure, and its risk appetite. The gap between the agent's generic assessment and your calibrated one is where professional judgment lives.
