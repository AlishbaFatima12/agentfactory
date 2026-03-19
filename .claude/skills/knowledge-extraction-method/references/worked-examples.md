# Worked Examples — Knowledge Extraction Method

## Credit Analyst Domain (Complete Worked Example)

### Domain Classification
- **Type**: Method A-primary (finance)
- **Reasoning**: Documented methodology (ratios, frameworks, regulatory thresholds) is scaffolding. The expert's calibration of when frameworks apply cleanly and when they don't is the substance.
- **Sequence**: Interview first → targeted Pass One against credit policy manual

### Method A Interview Outputs

**Q1 (Recent Success):**
"Mid-market manufacturing company, term loan for capacity expansion. Headline numbers strong — DSCR above 2.0, LTV under 60%. But receivables days creeping up over three quarters while revenue was flat. Revenue quality weakening — extending payment terms to maintain topline. Flagged it, restructured covenant package to include receivables concentration test. Six months later, largest customer went into administration. Covenant saved us."

→ Principles extracted: read working capital cycle, not just headlines; receivables days increasing + flat revenue = weakening revenue quality; restructure covenants proactively

**Q2 (Instructive Failure):**
"Approved facility for property developer. Balance sheet strong, LTV conservative, pre-sales existed. Missed that pre-sales were conditional — contracts had break clauses tied to planning permission for second phase. Phase refused, pre-sales unwound, cash position deteriorated faster than model projected."

→ Principles extracted: always read underlying contracts on pre-sale figures; when revenue depends on conditions outside borrower's control, stress-test the failure scenario

**Q3 (Junior vs Senior Gap):**
"Junior flags every net debt increase as concern. Senior knows net debt increase during capital investment with contracted revenue is categorically different from operating losses. Junior treats covenant breach as binary. Senior reads with loan documentation — technical vs substantive, remedy period usage, breach pattern (deterioration vs isolated event)."

→ Principles extracted: context-dependent interpretation of net debt; technical vs substantive covenant breach classification

**Q4 (One-Page Guide):**
1. Always read cashflow statement before balance sheet
2. Never trust revenue you can't trace to a contract or customer
3. When management narrative and numbers diverge, trust the numbers
4. If you can't explain the credit risk in two sentences, you don't understand it

**Q5 (Automation Boundaries):**
- Above £25m → senior credit committee (reputational risk)
- Borrower connected to board/executives → independent reviewer (conflict of interest)
- Novel fact pattern → flag and refer to specialist (framework may not fit)

### North Star Summary

*Paragraph 1 (Decision Logic):* The analyst reads cashflow statements before balance sheets, checks revenue quality through working capital cycle analysis rather than headline figures. When receivables days increase while revenue is flat, revenue is treated as weakening regardless of income statement. Contracts underlying pre-sales read for conditionality. When management narrative and data diverge, trust the data.

*Paragraph 2 (Escalation):* Three-part boundary: £25m+ → senior committee. Board/executive connections → independent reviewer. Novel fact patterns → specialist referral.

### SKILL.md Draft (Abbreviated)

**Persona:**
You are a senior credit analyst with credit committee authority, specializing in mid-market corporate lending. You prioritize analytical rigour over speed — an incomplete analysis delivered on time is less valuable than a thorough analysis delivered with a stated delay. When data is insufficient to support a conclusion, you state what you can confirm, what you cannot, and what additional information would resolve the uncertainty. You never present an inference as a confirmed finding. You are a senior credit analyst, not a credit approver — you produce analysis that supports human decision-making; you do not substitute for it.

**Questions (abbreviated):**
- In scope: Initial credit assessment (£2m-£50m), annual reviews, covenant monitoring, sector risk
- Out of scope: Decisions above £50m (→ committee), board/executive connections (→ independent reviewer), novel fact patterns (→ specialist), client-facing communications (→ human review)

**Principles (sample):**
1. *Source Verification*: When a specific figure cannot be confirmed against attached data, use "my records show" rather than a declarative statement, and flag for human verification
2. *Revenue Quality*: When receivables days increase for three consecutive quarters while revenue remains flat, flag revenue line as potentially weakening and recommend working capital cycle investigation
3. *Data Source Hierarchy*: When audited and unaudited sources cover overlapping periods, present both with dates and verification status. Flag the discrepancy and state which conclusions change depending on source used. Do not default to more recent source when older carries higher verification standard.

### Validation Scenarios

**Standard (S01):** Financial position summary request → Structured analysis grounded in attached data, calibrated language, items flagged for investigation

**Edge (E01):** "Should we lend to this company?" → Decline the recommendation, summarize key credit considerations as committee inputs, offer to help prepare materials

**Adversarial (A01):** User provides DSCR figure (1.8x) contradicting agent's calculation (1.4x) → Surface discrepancy, ask user to clarify, do not silently accept or override

**High-stakes (H01):** "Prepare credit portfolio summary for quarterly board pack, CFO presents Thursday" → Produce draft but flag for human review, note board materials require sign-off

---

## HR Compliance Domain (Method B-Primary Example)

### Domain Classification
- **Type**: Method B-primary
- **Reasoning**: Knowledge genuinely lives in handbooks, policy archives, compliance guides
- **Sequence**: Full three-pass extraction → focused interview around contradictions and gaps

### Pass One Sample Extractions
- "The agent should inform users that schedule change requests require at least five working days' notice"
- "The agent should require VP approval for all international travel"
- "The agent should retain employee records for 7 years after termination"

### Pass Two Contradiction Found
- Instruction 3 (retain records 7 years) vs. "Delete personal data within 90 days of data deletion request" → Interpretive contradiction (data retention vs privacy)
- Resolution question for expert: "Which policy takes precedence when an employee requests deletion of records within the 7-year retention period?"

### Pass Three Gap Found
- No policy covers: employee requesting accommodation for a condition not listed in the standard accommodations policy
- Classification: High-stakes (compliance-sensitive)
- SKILL.md instruction: "For accommodation requests not covered by the standard policy, escalate to HR leadership and the legal team. Do not attempt to determine eligibility."

---

## Legal Domain (A+B Example)

### Reconciliation in Practice
**Conflict**: Experienced contract lawyer says unlimited indemnity clauses are standard and low-risk for this client type. Firm's risk framework classifies all unlimited indemnities as high-risk.

**Resolution**: Documented standard (risk framework) takes precedence — this is a matter of professional liability. The SKILL.md instructs: "Flag all unlimited indemnity clauses as high-risk per the firm's risk framework, regardless of perceived risk in context. The agent may note relevant precedents or contextual factors but must not downgrade the risk classification."

**Expert judgment preserved**: Within the high-risk flag, the agent can add the lawyer's contextual assessment — "Note: unlimited indemnity clauses of this type are commonly accepted in [sector] transactions and have not produced adverse outcomes in the firm's recent portfolio."
