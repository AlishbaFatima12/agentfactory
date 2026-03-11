# Prompt Quality Audit Report

**Lesson:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Title:** Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi
**Auditor:** Claude (manual audit, no skill file)
**Date:** 2026-03-11

---

## Audit Scope

This audit examines every user-facing prompt in the lesson across **six defect types**:

1. **Vague or Under-specified Prompts** — Missing context, ambiguous instructions, or unclear deliverables
2. **Missing Jurisdiction / Framework Anchoring** — Prompts that fail to specify the regulatory framework, jurisdiction, or institutional context needed for accurate output
3. **No Verification / Error-Detection Step** — Prompts that accept AI output at face value without asking the student to verify, cross-check, or critically evaluate
4. **Hallucination-Prone Prompts** — Prompts that ask for specific factual claims (real company data, real regulatory details) without grounding, increasing risk of fabricated output
5. **Pedagogical Weakness** — Prompts that don't connect to learning objectives, lack a "what you're learning" explanation, or miss opportunities to build the target skill
6. **Format / Structural Issues** — Prompts with missing output format specifications, inconsistent structure, or poor copyability

---

## Prompts Inventory

| ID    | Location             | Prompt Summary                                       |
| ----- | -------------------- | ---------------------------------------------------- |
| E7-S1 | Exercise 7 Step 1    | IFRS murabaha benchmarking against Al Rajhi          |
| E7-S2 | Exercise 7 Step 2    | ZATCA zakat base computation                         |
| E7-S3 | Exercise 7 Step 3    | PIF sukuk investor classification (IFRS 9)           |
| E7-S4 | Exercise 7 Step 4    | Green sukuk — Saudi Electricity Company              |
| E7-S5 | Exercise 7 Step 5    | Board management accounts                            |
| E7-S6 | Exercise 7 Step 6    | Error detection — incorrect Saudi zakat              |
| TWA-1 | Try With AI Prompt 1 | ZATCA vs Hanafi Zakat — numerical comparison         |
| TWA-2 | Try With AI Prompt 2 | Al Rajhi Bank financial statement analysis           |
| TWA-3 | Try With AI Prompt 3 | Vision 2030 Financing — PIF sukuk portfolio strategy |

---

## Defect Type 1: Vague or Under-specified Prompts

### E7-S4 — Green Sukuk (Saudi Electricity Company)

**Severity: Medium**

The prompt asks: _"Draft the accounting policy note for the green sukuk investment. What IFRS 7 disclosures are required? What ESG/sustainability disclosures does SAMA encourage?"_

**Defects:**

- No specific financial data is provided for the SAR 500M holding (coupon rate, maturity, distribution dates, Shariah structure). The student is told Alinma holds SAR 500M but the prompt gives the AI no basis for drafting a concrete accounting policy note — it will generate a generic template.
- "ESG/sustainability disclosures does SAMA encourage" is open-ended with no anchoring to a specific SAMA circular or guidance paper. The AI is likely to fabricate or generalize.
- No output format specified (should it be a formal disclosure note? bullet points? a memo?).

**Recommendation:** Add concrete financial parameters (coupon, tenor, structure type) and specify an output format. Replace the vague SAMA ESG question with a reference to a specific SAMA circular or framework, or reframe as "what categories of ESG disclosures would a Saudi IFI consider."

### E7-S5 — Board Management Accounts

**Severity: Low-Medium**

The prompt asks for monthly management accounts with five components but provides no actual financial data. The AI must invent all figures for murabaha income by tenor bucket, DM income trends, sukuk portfolio positions, zakat accrual, and ratios.

**Defects:**

- Without input data, the AI will generate illustrative/fabricated numbers. The student cannot verify whether the output is correct.
- "Format for the Saudi board of directors" is vague — no specification of whether this means a formal table, a dashboard layout, or a narrative memo.
- "All figures in SAR" is the only format constraint.

**Recommendation:** Provide a data table with specific murabaha balances by tenor, DM portfolio size, sukuk holdings, and income figures for the month. This transforms the exercise from "generate plausible fiction" to "apply formatting and analytical skills to real data."

### TWA-3 — PIF Sukuk Portfolio Strategy

**Severity: Low**

The prompt is well-structured with specific holdings (SAR 5B PIF, SAR 2B SEC green, SAR 1B NHC) but asks the AI to "Note any SAMA prudential requirements for sukuk concentration limits" — this is a specific factual claim that the AI may fabricate.

**Recommendation:** Reframe as "What types of prudential limits might SAMA impose on sukuk concentration?" or provide the specific SAMA circular reference.

---

## Defect Type 2: Missing Jurisdiction / Framework Anchoring

### E7-S1 — IFRS Murabaha Benchmarking

**Severity: Low**

The prompt includes "Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA." — this is well-anchored. However, it relies on "Based on publicly available information about Al Rajhi Bank's financial reporting" which implicitly asks the AI to recall or fabricate specific Al Rajhi disclosures (see Defect Type 4).

**No action needed for jurisdiction anchoring itself — this is the best-anchored prompt in the exercise.**

### E7-S3 — PIF Sukuk Classification

**Severity: Low**

The prompt asks "What is the Shariah structure of PIF sukuk?" without specifying which tranche or issuance. PIF has issued multiple sukuk with different structures (ijarah, mudarabah, wakala). The prompt should specify or acknowledge this.

**Recommendation:** Add "Assuming ijarah structure" or ask the student to identify the structure from the exercise data file, or explicitly state which tranche.

### E7-S6 — Error Detection

**Severity: None**

Well-anchored. The prompt provides the specific jurisdiction context (Saudi, ZATCA) and the specific numbers. The error detection framing is pedagogically strong.

### TWA-1 — ZATCA vs Hanafi Comparison

**Severity: None**

Excellent anchoring. Provides complete bank data, specifies both frameworks, and asks for a structured comparison. This is the strongest prompt in the lesson.

### TWA-2 — Al Rajhi Financial Statement Analysis

**Severity: Low**

The prompt asks about Al Rajhi's specific financial statement structure but does not specify a reporting year. Al Rajhi's presentation may have evolved over time. Without a year anchor, the AI may blend information from different periods or fabricate specifics.

**Recommendation:** Add "Based on Al Rajhi's most recent annual report" or specify a year.

---

## Defect Type 3: No Verification / Error-Detection Step

### E7-S1 — IFRS Murabaha Benchmarking

**Severity: Medium**

The prompt asks the AI to summarize Al Rajhi's practices and apply them to Alinma. There is no verification step — the student accepts the AI's characterization of Al Rajhi's practices without cross-checking against the actual published annual report.

**Recommendation:** Add a verification substep: "Download Al Rajhi Bank's most recent annual report from alrajhibank.com.sa. Compare the AI's response against the actual balance sheet line items and income statement captions. Note any discrepancies."

### E7-S3 — PIF Sukuk Classification

**Severity: Medium**

The prompt asks the AI to classify PIF sukuk under IFRS 9 and calculate mark-to-market impact. The "Check your work" section at the bottom provides partial verification ("should pass the SPPI test if distributions are fixed"), but this verification is outside the prompt itself — the student might not connect the two.

**Recommendation:** Embed the verification within the prompt flow: add a substep asking the student to verify the SPPI conclusion against the criteria taught in the lesson text, or to check the OCI calculation using the formula: duration x yield change x face value.

### E7-S4 — Green Sukuk

**Severity: High**

No verification step at all. The student asks for an accounting policy note, IFRS 7 disclosures, and SAMA ESG guidance — all of which the AI may fabricate. There is no "Check your work" reference for this step either.

**Recommendation:** Add verification: "Compare your accounting policy note against the IFRS 7 disclosure checklist. Does the note cover: (a) fair value measurement basis, (b) credit risk exposure, (c) maturity analysis? For ESG disclosures, check whether SAMA has issued specific guidance by searching sama.gov.sa."

### E7-S5 — Board Management Accounts

**Severity: Medium**

No verification step. The student generates management accounts with AI-invented data and has no way to assess whether the format, ratios, or conventions are correct for a Saudi board presentation.

**Recommendation:** Provide a reference management accounts template or checklist of required elements, so the student can verify completeness.

### TWA-1, TWA-2, TWA-3

**Severity: Low**

Try With AI prompts have "What you are learning" explanations but no explicit verification steps. This is acceptable for exploratory prompts (vs. exercise prompts), but TWA-2 in particular asks for specific factual claims about Al Rajhi that should be verified.

---

## Defect Type 4: Hallucination-Prone Prompts

### E7-S1 — IFRS Murabaha Benchmarking Against Al Rajhi

**Severity: High**

This is the highest hallucination risk prompt in the lesson. It asks: _"Based on publicly available information about Al Rajhi Bank's financial reporting: (1) How does Al Rajhi classify murabaha receivables? (2) What income line item caption does Al Rajhi use? (3) How does Al Rajhi apply IFRS 9 ECL?"_

The AI is being asked to recall specific financial statement line items from a real company's published reports. LLMs frequently fabricate or confuse specific captions, line items, and presentation formats when asked about real companies' financial statements. The student has no way to distinguish accurate recall from plausible fabrication.

**Mitigating factor:** The lesson text itself provides the benchmark answers (lines 187-191), so a diligent student could cross-check. But the prompt does not instruct them to do so.

**Recommendation:** Either (a) provide the Al Rajhi benchmark data directly in the prompt as reference material, asking the AI to apply it rather than recall it, or (b) add an explicit verification step against the lesson text or the actual annual report.

### E7-S4 — Green Sukuk SAMA ESG Disclosures

**Severity: High**

"What ESG/sustainability disclosures does SAMA encourage for Saudi IFIs' green sukuk holdings?" — This asks the AI to report on specific regulatory guidance from SAMA. SAMA's ESG framework is evolving and the AI is highly likely to fabricate specific circular numbers, dates, or requirements.

**Recommendation:** Reframe as a reasoning exercise: "What categories of sustainability disclosures would be relevant for a Saudi IFI holding green sukuk? Consider: use of proceeds reporting, environmental impact metrics, alignment with green bond/sukuk frameworks." This tests the student's analytical thinking without requiring the AI to recall specific SAMA guidance.

### TWA-2 — Al Rajhi Financial Statement Analysis

**Severity: Medium-High**

The entire prompt asks the AI to describe Al Rajhi's specific financial statement structure — balance sheet line items, income statement captions, ECL presentation, and equity of investment account holders treatment. All five sub-questions request specific factual claims about a real company's published reports.

**Mitigating factor:** The lesson text provides some of this information (lines 187-191), but the Try With AI prompt goes further (e.g., question 4 about equity of investment account holders) into territory the lesson text does not cover.

**Recommendation:** Provide key reference data within the prompt itself, or reframe questions 4-5 as analytical/reasoning questions rather than factual recall.

### TWA-3 — SAMA Prudential Requirements

**Severity: Medium**

Sub-question 5 asks the AI to "Note any SAMA prudential requirements for sukuk concentration limits." This is a specific regulatory factual claim that the AI may fabricate.

**Recommendation:** Reframe as "What types of concentration risk limits might a central bank impose on a bank's sukuk portfolio?" — this tests understanding of prudential concepts without requiring specific SAMA regulation recall.

---

## Defect Type 5: Pedagogical Weakness

### E7-S4 — Green Sukuk

**Severity: Medium**

This step is the weakest pedagogically in the exercise. It does not clearly connect to any of the three learning objectives listed in the frontmatter. The learning objectives cover: (1) ZATCA zakat, (2) Al Rajhi benchmarking, (3) PIF sukuk classification + management accounts. Green sukuk accounting is a tangential topic that appears in the cognitive_load concepts list but is not assessed by any learning objective.

**Recommendation:** Either (a) add a learning objective for green sukuk / ESG disclosures, or (b) reframe Step 4 to connect more explicitly to one of the existing objectives (e.g., "Apply the same IFRS 9 classification framework from Step 3 to the green sukuk holding").

### E7-S5 — Board Management Accounts

**Severity: Low-Medium**

The management accounts step is pedagogically valuable (bridges financial reporting to management advisory) but suffers from the lack of input data. Without real numbers to work with, the student is learning "what a management accounts template looks like" rather than "how to produce management accounts from source data." The former is a Remember-level activity; the latter is Apply-level, which matches the B1/Apply learning objective.

**Recommendation:** Provide input data so the exercise operates at the Apply level as intended.

### Overall Exercise Structure

**Severity: Low**

The exercise follows a logical progression (benchmark → compute → classify → expand → synthesize → verify) with Step 6 serving as an error-detection capstone. This is a strong pedagogical arc. The "Check your work" section provides concrete verification anchors for Steps 2, 3, 5, and 6.

### Try With AI Section

**Severity: None**

All three Try With AI prompts have "What you are learning" explanations. Each targets a different skill dimension (numerical computation, financial statement analysis, portfolio strategy). The progression from computational to analytical to strategic is well-designed.

---

## Defect Type 6: Format / Structural Issues

### E7-S1 through E7-S5 — Not in Code Blocks

**Severity: Medium**

Exercise prompts (Steps 1-5) are presented in italic markdown (`_"..."_`) rather than code blocks. This makes them harder to copy-paste into Cowork or another AI assistant. The Try With AI prompts correctly use code blocks for copyability.

**Inconsistency:** The lesson uses two different formatting conventions for prompts within the same file — italicized quotes for exercise prompts and code blocks for Try With AI prompts.

**Recommendation:** Convert exercise prompts to code blocks for consistency and copyability, matching the Try With AI format.

### E7-S6 — Mixed Instruction and Prompt

**Severity: Low**

Step 6 mixes the prompt with instructor-facing answer guidance in the same paragraph: _"The bank omitted statutory reserves (should be added) and failed to deduct fixed assets and long-term investments..."_ This answer key text is visible to the student alongside the prompt, which defeats the purpose of the error-detection exercise.

**Recommendation:** Move the answer key text into the "Check your work" section at the bottom (which already partially covers this), or place it in a collapsed `<details>` block.

### Exercise Data Reference

**Severity: Low**

The exercise references `exercises/ex06-saudi-ifi-alinma.md` from the exercise data zip, but the exercise number in the filename (`ex06`) does not match the exercise number in the lesson (`Exercise 7`). This could confuse students.

**Recommendation:** Align the exercise data filename with the lesson exercise number, or add a note explaining the numbering difference.

### Frontmatter — Teaching Guide

**Severity: None**

The teaching_guide section is comprehensive with key_points, misconceptions, discussion_prompts, teaching_tips, and assessment_checks. This is well-structured.

---

## Summary of Findings

| Defect Type                       | High  | Medium | Low   | None  |
| --------------------------------- | ----- | ------ | ----- | ----- |
| 1. Vague / Under-specified        | 0     | 1      | 2     | 0     |
| 2. Missing Jurisdiction Anchoring | 0     | 0      | 3     | 3     |
| 3. No Verification Step           | 1     | 3      | 1     | 0     |
| 4. Hallucination-Prone            | 2     | 2      | 0     | 0     |
| 5. Pedagogical Weakness           | 0     | 2      | 1     | 1     |
| 6. Format / Structural            | 0     | 1      | 2     | 1     |
| **Totals**                        | **3** | **9**  | **9** | **5** |

### Defects by Prompt

| Prompt | Defects Found | Highest Severity                       |
| ------ | ------------- | -------------------------------------- |
| E7-S1  | 3             | High (hallucination)                   |
| E7-S2  | 0             | — (cleanest prompt)                    |
| E7-S3  | 2             | Medium                                 |
| E7-S4  | 4             | High (hallucination + no verification) |
| E7-S5  | 3             | Medium                                 |
| E7-S6  | 1             | Low                                    |
| TWA-1  | 0             | — (strongest prompt)                   |
| TWA-2  | 2             | Medium-High                            |
| TWA-3  | 2             | Medium                                 |

### Top 5 Priority Fixes

1. **E7-S4 (Green Sukuk):** Highest defect density. Add financial parameters, reframe SAMA ESG question as analytical rather than factual recall, add verification step, connect to a learning objective. (4 defects, 1 High)

2. **E7-S1 (Al Rajhi Benchmarking):** Provide Al Rajhi benchmark data in the prompt rather than asking the AI to recall it, or add explicit verification against the lesson text / actual annual report. (3 defects, 1 High)

3. **E7-S5 (Management Accounts):** Provide input financial data so the exercise operates at Apply level. Add output format specification and verification checklist. (3 defects)

4. **Exercise Prompts Format:** Convert all exercise prompts from italic quotes to code blocks for copyability, matching Try With AI format. (Affects E7-S1 through E7-S6)

5. **E7-S6 (Error Detection):** Move the answer key from the prompt paragraph into a collapsed details block or the Check Your Work section. (1 defect, Low — but easy fix with high pedagogical impact)

### Strengths

- **TWA-1 (ZATCA vs Hanafi)** is an exemplary prompt: complete data, dual-framework comparison, specific deliverables, clear audience framing, and an excellent "What you are learning" explanation.
- **E7-S2 (ZATCA Zakat Computation)** is the cleanest exercise prompt: provides all necessary data, specifies four concrete deliverables, and has a verifiable numerical answer in "Check your work."
- **E7-S6 (Error Detection)** is a strong pedagogical pattern — giving students deliberately flawed output to evaluate builds critical thinking.
- **Lesson text quality** is high — the expository content is well-structured, factually grounded, and provides the reference framework students need.
- **Frontmatter metadata** is comprehensive and well-aligned with lesson content.
- **"Check your work" section** provides concrete verification anchors with specific numbers.

---

## Overall Assessment

**Grade: B+**

The lesson has strong foundational content and several well-crafted prompts (TWA-1, E7-S2, E7-S6). The primary weaknesses are: (1) hallucination risk in prompts that ask the AI to recall specific real-company financial statement details (E7-S1, TWA-2), (2) a weak green sukuk step (E7-S4) that lacks data, verification, and learning objective alignment, and (3) inconsistent prompt formatting between exercises and Try With AI sections. The ZATCA zakat content — the lesson's core pedagogical contribution — is excellently handled throughout.
