---
slug: /Business-Domain-Agent-Workflows/ai-transformation-ca-cpa-practice/assurance-practice-lab
sidebar_position: 13
title: "Assurance Practice Lab"
description: "Three advanced exercises applying AI agents to assurance services — build a full external audit programme, deploy continuous fraud detection monitoring, and produce an internal audit report from working papers"
keywords:
  [
    "audit programme",
    "external audit",
    "SOX testing",
    "fraud detection",
    "continuous monitoring",
    "internal audit report",
    "ISA standards",
    "working papers",
    "assurance services",
    "CA/CPA practice lab",
  ]
chapter: 19
lesson: 13
duration_minutes: 70

# HIDDEN SKILLS METADATA
skills:
  - name: "Build Complete Audit Programmes Using AI Agents"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can construct a full external audit programme for a specific financial statement area using Cowork plugin commands, converting SOX-oriented control testing output into ISA-compliant substantive procedures with appropriate risk assessment and sample sizes"

  - name: "Design Fraud Detection Monitoring Workflows"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can design detection rules for common fraud schemes in the purchase-to-pay cycle, implement them in a monitoring workbook, calibrate escalation thresholds, and deploy a scheduled monitoring task — distinguishing between genuine anomalies and false positives"

  - name: "Produce Professional Internal Audit Deliverables"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Communication"
    measurable_at_this_level: "Student can take raw internal audit working papers, classify findings by risk rating, draft formal finding descriptions using the 5-C structure, evaluate management responses, and produce a complete internal audit report with executive summary and audit committee presentation"

learning_objectives:
  - objective: "Build a complete external audit programme for revenue recognition by converting SOX-oriented plugin output into ISA-compliant substantive procedures, demonstrating the critical distinction between control tests and substantive procedures"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces an audit programme that correctly identifies IFRS 15 performance obligations, significant risks under ISA 315, and substantive procedures distinct from SOX control tests — with appropriate sample sizes and working paper templates"

  - objective: "Design and deploy a continuous transaction monitoring workflow for fraud detection, including detection rules, escalation thresholds, and scheduled automated reporting"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces a monitoring workbook with detection rules that flag seeded anomalies, calibrates escalation thresholds with professional justification, and deploys a scheduled monitoring task"

  - objective: "Transform raw internal audit working papers into a complete Internal Audit Report using the 5-C finding structure, with risk-rated findings, evaluated management responses, and board-ready executive summary"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a report with correctly classified findings (Critical/High/Medium/Low), 5-C formatted descriptions, assessed management responses, and an executive summary with overall audit opinion"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "SOX control testing vs ISA substantive procedures — different frameworks for different engagements"
    - "IFRS 15 performance obligations and revenue recognition risk assessment"
    - "ISA 240 fraud risk framework applied to purchase-to-pay cycle"
    - "Fraud detection rule design — duplicate payments, ghost vendors, threshold manipulation"
    - "Escalation threshold calibration — balancing detection sensitivity with alert fatigue"
    - "5-C finding structure — Condition, Criteria, Cause, Consequence, Corrective action"
    - "Internal audit opinion formation — Satisfactory, Needs Improvement, Unsatisfactory"
  assessment: "7 concepts at B1-B2 level. Students select 1-2 exercises from three, so effective cognitive load per session is 3-4 concepts. Prior lessons covered audit domain analysis (L04), plugin commands (L07), and workflow patterns (L08). This lab applies those foundations to complete professional deliverables."

differentiation:
  extension_for_advanced: "Complete all three exercises. In Exercise 15, extend the audit programme to cover a second financial statement area (e.g., trade receivables or inventory). In Exercise 16, design an additional detection rule for a fraud scheme not covered in the ISA 240 brainstorm. In Exercise 17, draft a management letter addressing systemic control weaknesses."
  remedial_for_struggling: "Focus on Exercise 17 (Internal Audit Report) — it has the clearest input-output relationship. Read the hypothetical working papers carefully before engaging Cowork. If the 5-C structure is unfamiliar, ask Cowork to explain each component with an example before applying it to the findings."

teaching_guide:
  lesson_type: "lab"
  session_group: 4
  session_title: "Assurance Practice Lab"
  key_points:
    - "The /sox-testing command produces technically competent output — but it produces control tests, not substantive procedures. The professional value is knowing which framework to apply to which engagement."
    - "Fraud detection rules must balance sensitivity (catching real fraud) with specificity (avoiding alert fatigue). Threshold calibration is a professional judgment that requires business context."
    - "The 5-C finding structure is the industry standard for internal audit reporting. The agent can draft findings reliably; the professional judgment is in risk classification and evaluating whether management responses adequately address the identified risks."
    - "Lab format: students choose 1-2 exercises to complete fully and review all three for professional context."
  misconceptions:
    - "Students may assume SOX testing and ISA external audit procedures are interchangeable — they serve fundamentally different purposes (management's internal assessment vs independent external assurance)"
    - "Students may think more detection rules always means better fraud detection — excessive rules create alert fatigue that causes genuine fraud to be dismissed alongside false positives"
    - "Students may treat the agent's risk classification as final — the CA/CPA must apply professional judgment to classify findings, especially borderline cases between High and Critical"
  discussion_prompts:
    - "Exercise 15 asks you to convert SOX control tests into ISA substantive procedures. What is the fundamental difference between testing whether a control works and testing whether a financial statement balance is correct?"
    - "In Exercise 16, you calibrate escalation thresholds. What happens if your thresholds are too sensitive? What happens if they are not sensitive enough? Which failure mode is more dangerous?"
    - "Exercise 17 requires you to form an overall audit opinion. Can an agent form this opinion for you? What information beyond the individual finding scores would you need to decide between Needs Improvement and Unsatisfactory?"
  teaching_tips:
    - "Encourage students to attempt the SOX-to-ISA conversion in Exercise 15 Step 3 before checking Cowork's response — the learning is in recognising the framework mismatch, not in the converted procedures themselves"
    - "For Exercise 16, have students predict which of the five seeded anomalies will be hardest to detect before running the monitoring workbook — this builds intuition about detection rule design"
    - "For Exercise 17, point students to the management response evaluation (Step 3) as the highest-value professional skill — this is where a CA/CPA adds the most value beyond what the agent can produce"
  assessment_checks:
    - question: "What is the key difference between a SOX control test and an ISA substantive procedure?"
      expected_response: "A SOX control test evaluates whether a specific internal control is operating effectively — it tests the control, not the financial data. An ISA substantive procedure tests whether a financial statement balance or disclosure is materially correct — it tests the data directly. SOX serves management's internal assessment; ISA external audit serves independent assurance for financial statement users."
    - question: "Why is escalation threshold calibration a professional judgment, not a technical setting?"
      expected_response: "Because the right threshold depends on the specific company's transaction patterns, risk appetite, and the audit committee's tolerance for false positives versus missed fraud. Rules that flag too little miss genuine fraud. Rules that flag too much create alert fatigue, causing real fraud to be dismissed alongside false positives. Only someone who understands the business can calibrate this balance."
    - question: "What is the 5-C structure for internal audit findings?"
      expected_response: "Condition (what was found), Criteria (what should be happening per policy or standard), Cause (why the gap exists), Consequence (what could happen as a result), and Corrective action (what management has agreed to do). The structure ensures every finding is documented with full context for the audit committee."
---

# Assurance Practice Lab

> _"The value of an audit is not in the procedures performed. It is in the judgment applied to what the procedures reveal."_

In Lesson 4, you mapped the assurance domain across the Gen-AI and Agentic AI spectrum — understanding how AI transforms external audit, internal audit, and other assurance services. In Lessons 7 and 8, you installed the finance plugins and walked through Cowork workflows. Now you will apply those tools to three complete assurance engagements that test where AI executes reliably and where your professional judgment remains irreplaceable.

This lab contains three exercises. Each builds a complete professional deliverable: an external audit programme, a continuous fraud detection system, and an internal audit report. Choose one or two exercises to complete fully. Review all three to understand the range of assurance work that AI agents can support — and the professional boundaries they cannot cross.

:::info Lab Format
**Choose 1-2 exercises to complete fully.** Each exercise is self-contained with its own time estimate and deliverables. Review all three for professional context even if you only complete one or two.

**Requirements for all exercises:** Cowork (Team or Enterprise) with `finance@knowledge-work-plugins` installed.

**Companion files:** Use the working paper templates from the exercise zip: `exercises/working-papers/audit-planning-template.md` and `exercises/working-papers/revenue-testing-template.md`. Exercise 16 also uses `exercises/source-documents/`.
:::

---

## Exercise 15: Full External Audit Programme with `/sox-testing` (50 min)

**What you'll build:** A complete audit programme for revenue recognition — from risk assessment through substantive procedures to working paper templates — converting SOX-oriented plugin output into ISA-compliant procedures.

**Requirements:** Cowork with `finance@knowledge-work-plugins` installed. Understanding of IFRS 15 revenue recognition and ISA 315 risk assessment.

**Audit context:** External audit of a Pakistan software company. Revenue recognised from three streams: (a) SaaS subscriptions — monthly recurring revenue, recognised monthly over the subscription period; (b) Implementation services — recognised on percentage-of-completion basis; (c) Annual maintenance contracts — recognised straight-line over the contract period. Total revenue: PKR 280M. Auditor's materiality: PKR 5.6M (2% of revenue).

### Steps

1. **Revenue risk assessment.** Ask Cowork to analyse the three revenue streams. For each stream, identify: (a) the IFRS 15 performance obligation; (b) the point or period of revenue recognition; (c) the specific risk of material misstatement — what could go wrong and in which direction (overstatement or understatement).

2. **Significant risk identification.** Ask Cowork which of the three revenue streams represents a "significant risk" under ISA 315 that requires specific audit procedures beyond standard substantive testing. Require a justified answer.

3. **Run the SOX testing command and convert to ISA procedures.** Execute:

   ```
   /sox-testing revenue-recognition-implementation-services
   ```

   Review the output. Then ask Cowork: "This control testing programme is for US SOX Section 404. I am performing an external audit under ISAs, not SOX. What adjustments are required to convert this into an ISA-compliant substantive procedures programme? What is the key difference between a control test and a substantive procedure?"

   This is the most important step. The `/sox-testing` command produces technically competent output — but for the wrong framework. Your professional value is recognising the mismatch and directing the agent to produce the right type of procedures for your engagement.

4. **Build the complete substantive procedures programme.** For each revenue stream, ask Cowork to produce a specific procedure. For SaaS subscription revenue: design a substantive procedure that tests whether revenue has been recognised in the correct period. Include: the population to test, the evidence to inspect, the comparison to perform, and the conclusion to document. Repeat for implementation services and maintenance contracts.

5. **Design the cut-off test.** Ask Cowork to design a cut-off test for all three revenue streams. Specify the date range (two weeks before and after year-end), the population, the evidence to obtain, and what a cut-off error looks like in each stream.

6. **Build the working paper template.** Ask Cowork to create an audit working paper template at `/working-papers/revenue-audit-programme.xlsx` with: risk assessment, planned procedures with sample sizes and hours, results section, and sign-off section.

7. **Analytical procedures.** Ask Cowork to design analytical procedures for revenue that would flag anomalies before detailed testing — monthly revenue trend analysis, revenue per employee as a reasonableness check, and deferred revenue movement analysis.

8. **Produce the audit planning memo.** Ask Cowork to produce a revenue audit planning memo documenting the risk assessment, significant risks, planned approach, key procedures, sample sizes with rationale, and auditor assignments.

**Check your work:**

- Your substantive procedures programme is distinct from the SOX control testing output — it tests financial statement balances, not controls
- Each revenue stream has a specific procedure with defined population, evidence, and conclusion
- The cut-off test covers all three streams with specific date ranges
- The working paper template includes all four sections (risk, procedures, results, sign-off)

:::tip Global Perspective
**IFRS**: This exercise uses IFRS 15 (Revenue from Contracts with Customers) — the global standard adopted in 140+ countries including Pakistan.
**US GAAP / ASC 606**: Substantially converged with IFRS 15. Key difference: US GAAP provides more detailed implementation guidance. SOX Section 404 requirements are US-specific.
**UK FRS 102**: Section 23 (Revenue) — simpler standard for entities not applying full IFRS. UK audit follows ISA (UK) with additional ethical requirements from the FRC.
:::

---

## Exercise 16: Continuous Transaction Monitoring — Fraud Detection Setup (45 min)

**What you'll build:** A complete continuous transaction monitoring workflow for a manufacturing company's purchase-to-pay cycle — from fraud risk identification through detection rules to automated scheduled monitoring.

**Requirements:** Cowork with `finance@knowledge-work-plugins` installed. Transaction data in Excel format (use [sample data](https://github.com/panaversity/ca-cpa-practice-agents/tree/main/exercises/source-documents) or your own).

### Steps

1. **Fraud risk brainstorm.** Ask Cowork to identify the ten most common fraud schemes in the purchase-to-pay cycle of a manufacturing company, using the ISA 240 fraud risk framework. For each scheme: (a) how it appears in transaction data; (b) what pattern, threshold, or anomaly indicates it; (c) what data field or combination of fields to examine.

2. **Design detection rules.** For the three highest-risk schemes from Step 1, ask Cowork to write specific detection rules. For duplicate payment fraud: write a rule that flags any payment where the vendor name and amount match another payment within 90 days, OR the invoice number appears more than once across any vendor, OR the same amount is paid to the same vendor within 7 days. Write this as both an Excel formula and a plain-English monitoring rule. Repeat for ghost vendor fraud and expense reimbursement manipulation.

3. **Build the monitoring workbook.** Ask Cowork to create an Excel workbook at `/outputs/transaction-monitor.xlsx` with four sheets: raw transaction data, duplicate payment analysis, vendor analysis (flagging vendors added in the last 6 months with no PO history), and exception summary with fraud risk ratings (High/Medium/Low) and recommended actions.

4. **Test with seeded anomalies.** Add five artificial anomalies to the transaction data: two duplicate payments, one round-number payment to a new vendor, one payment just below the approval threshold, and one payment to a vendor address matching an employee address. Run the monitoring workbook. Confirm all five are flagged. Note any false positives.

5. **Set escalation thresholds.** Ask Cowork to recommend escalation thresholds based on the exception volume from Step 4. Determine: (a) the normal exception count per week for a company this size; (b) the count that indicates either genuine fraud risk or a poorly designed rule; (c) what qualifies as High vs Medium vs Low risk.

   This is the highest-value professional judgment in the exercise. Rules that flag too little fail to detect fraud. Rules that flag too much create alert fatigue — and alert fatigue causes genuine fraud to be dismissed alongside false positives.

6. **Write the scheduled monitoring task.** Write and activate a `/schedule` task: every Monday at 8:00 AM, read the latest transaction export, run all detection rules, produce an exception report, and send an immediate alert if any High-risk exceptions are present or if more than 10 exceptions of any level are found.

7. **Write the internal audit SKILL.md.** Ask Cowork to draft a SKILL.md for a continuous fraud monitoring agent. Include: the ten fraud schemes to monitor, detection rules for each, escalation logic, and the two conditions that should always cause the agent to stop and alert the Chief Internal Auditor immediately.

**Check your work:**

- All five seeded anomalies are detected by your monitoring workbook
- False positive rate is documented and acceptable
- Escalation thresholds are justified with reference to the company's transaction volume
- The scheduled task includes both automatic reporting and conditional alerting
- The SKILL.md captures the full monitoring framework for reuse

---

## Exercise 17: Internal Audit Report from Working Papers (40 min)

**What you'll build:** A complete Internal Audit Report — from raw working papers to board-ready executive summary and audit committee presentation.

**Requirements:** Cowork with `finance@knowledge-work-plugins` installed. Working paper files (create the files below or use [samples](https://github.com/panaversity/ca-cpa-practice-agents/tree/main/exercises/working-papers)).

**Set up the working papers.** Create a folder `/inputs/audit-working-papers/` containing three files:

**testing-results.txt:**

> We tested 25 payment transactions. 3 exceptions found: (1) Two payments of PKR 85,000 and PKR 120,000 approved by the same manager who also raised the PO — segregation of duties failure; (2) One payment of PKR 340,000 made without a supporting invoice — only a WhatsApp message from the vendor. The vendor is a related party. Value at risk: PKR 340,000.

**process-notes.txt:**

> Purchase-to-pay process relies on a single ERP system. Approval workflow is electronic but can be bypassed by the system administrator. No compensating control for system administrator access. Verbal confirmation obtained that administrator has no procurement authority — not documented.

**management-response.txt:**

> Finance Manager confirmed the related party transaction was approved verbally by the CEO. Invoice was requested from vendor but not yet received. Segregation of duties exceptions: management states dual approval is impractical given small team size. Compensating control proposed: monthly reconciliation of all payments by CFO.

### Steps

1. **Classify findings by risk.** Ask Cowork to read the working papers and classify each finding using standard internal audit risk ratings: Critical (immediate action, significant financial or reputational risk), High (prompt action, significant control weakness), Medium (action within 90 days), Low (best practice improvement). Require justification for each rating.

2. **Draft finding descriptions using the 5-C structure.** For each finding, ask Cowork to produce a formal description: Condition (what was found), Criteria (what should be happening), Cause (why the gap exists), Consequence (what could happen), and Corrective action (what management has agreed to do).

3. **Evaluate management responses.** Ask Cowork to review the management responses and assess whether each proposed corrective action adequately remediates the identified risk. For findings where the response is inadequate, draft a stronger recommendation.

   This is where your professional judgment matters most. The agent can assess response adequacy against a checklist. You assess whether the response addresses the root cause — and whether "dual approval is impractical given small team size" is an acceptable justification or an insufficient response to a segregation of duties failure.

4. **Produce the Executive Summary.** Ask Cowork to produce a one-page summary: overall audit opinion (Satisfactory/Needs Improvement/Unsatisfactory) with justification, findings count by risk category, the most significant finding in plain language, and the most important recommended action.

5. **Build the complete report.** Ask Cowork to produce the Internal Audit Report at `/outputs/internal-audit-report.docx` with: title page, executive summary, audit scope and methodology, findings in 5-C format with risk ratings and management responses, summary table, and appendix of testing details.

6. **Prepare the Audit Committee presentation.** Ask Cowork to produce a three-slide presentation: Slide 1 — audit scope and overall opinion; Slide 2 — the two highest-risk findings with recommended actions; Slide 3 — 90-day action plan with owners and completion dates.

**Check your work:**

- Each finding has a justified risk rating (Critical/High/Medium/Low)
- All findings use the 5-C structure completely
- Management responses are evaluated for adequacy — not just accepted at face value
- The Executive Summary contains an overall audit opinion with clear justification
- The presentation distils the full report into three slides suitable for board-level review

:::tip Global Perspective
**IIA Standards**: The Institute of Internal Auditors' International Standards for the Professional Practice of Internal Auditing apply globally. The 5-C finding structure and risk rating methodology used in this exercise follow IIA guidance.
**US SOX Context**: In the US, internal audit findings related to financial reporting controls may trigger SOX Section 302/404 disclosure requirements.
**UK FRC**: The UK Financial Reporting Council sets additional requirements for internal audit functions in listed companies through the UK Corporate Governance Code.
:::

---

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to explore assurance concepts beyond the exercises above.

### Prompt 1: Audit Framework Comparison

```
I am a CA/CPA performing an external audit. Explain the practical
differences between:

1. Testing a control (SOX Section 404 approach)
2. Performing a substantive procedure (ISA approach)
3. Performing an analytical procedure (ISA 520)

For each: what question does it answer, what evidence does it
produce, and when would I choose it over the others?

Use a revenue recognition example to illustrate all three.
```

**What you are learning:** The distinction between control testing, substantive testing, and analytical procedures is fundamental to audit methodology. Understanding which approach answers which question prevents the common mistake of applying SOX-oriented control testing to an ISA external audit engagement — the exact professional judgment tested in Exercise 15.

### Prompt 2: Fraud Detection Rule Design

```
I am designing a continuous monitoring system for a company's
expense reimbursement process. Design five detection rules that
would flag potential fraud or policy violations.

For each rule:
1. What specific pattern does it detect?
2. What data fields are required?
3. What is the expected false positive rate (high/medium/low)?
4. What should happen when the rule triggers — automatic block,
   alert to manager, or flag for periodic review?

Then explain how I should calibrate the sensitivity of these rules
for a company with 200 employees submitting approximately 500
expense claims per month.
```

**What you are learning:** Fraud detection rule design requires balancing sensitivity (catching genuine fraud) with specificity (avoiding alert fatigue). By designing rules for a specific process and calibrating their sensitivity, you develop the professional judgment to distinguish between rules that protect the organisation and rules that create so much noise they become useless.

### Prompt 3: Audit Opinion Formation

```
I have completed an internal audit of a company's purchase-to-pay
process. My findings are:

- 1 Critical finding (related party payment without documentation)
- 2 High findings (segregation of duties failures)
- 3 Medium findings (process documentation gaps)
- 1 Low finding (best practice improvement)

Management has provided responses to all findings but the response
to the Critical finding is inadequate — they claim verbal CEO
approval is sufficient.

Help me:
1. Form an overall audit opinion (Satisfactory / Needs Improvement
   / Unsatisfactory) with detailed justification
2. Draft the key paragraph of the Executive Summary that
   communicates this opinion to the Audit Committee
3. Identify the one question the Audit Committee will ask, and
   prepare my answer

Write from the perspective of the Head of Internal Audit presenting
to a board that expects clear, direct communication.
```

**What you are learning:** Forming an audit opinion is the highest-value professional judgment in internal audit. The agent can summarise findings and draft language — but the opinion itself requires weighing the severity of findings against the adequacy of management responses and the organisation's risk appetite. This prompt helps you practise the judgment that distinguishes a competent auditor from a mechanical report writer.


## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 14: Management Accounting & GRC Practice Lab →](./14-management-accounting-grc-practice-lab.md)
