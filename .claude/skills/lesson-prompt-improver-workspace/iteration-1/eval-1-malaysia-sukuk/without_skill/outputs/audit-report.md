# Prompt Quality Audit Report

**Lesson:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/09-malaysia-sukuk.md`
**Title:** Malaysia Sukuk — The World's Largest Market
**Date:** 2026-03-11
**Auditor:** Claude (without skill file)

---

## Summary

The lesson contains **8 prompts** total: 5 in the Practice Exercise (Steps 1-5) and 3 in the Try With AI section (Prompt 1, Prompt 2, Prompt 3 is a write-your-own). Overall, the prompts are well-structured and domain-specific, but several have quality issues that would reduce the effectiveness of AI responses.

**Overall Verdict:** Good foundation with fixable issues. The main problems are (1) over-stuffed prompts that try to do too much in a single turn, (2) missing constraint/format specifications that leave output quality to chance, and (3) inconsistent use of jurisdiction/framework anchoring.

---

## Issue-by-Issue Analysis

### Issue 1: Exercise Step 1 — Over-Packed Prompt with 5 Sub-Questions

**Location:** Line 239
**Severity:** Medium
**Prompt text (abbreviated):**

> "Jurisdiction: Malaysia. Framework: MFRS. I am Tenaga Nasional Berhad (issuer). Classify the sukuk musharakah under IAS 32: (1) Is it a financial liability or equity? (2) Does the fixed distribution rate create a financial liability? (3) Does the obligation to redeem at face value at maturity create a financial liability? (4) Conclude on balance sheet classification. (5) Generate the journal entry for the initial issuance of MYR 3 billion."

**Problem:** Five numbered sub-questions in a single prompt. Sub-questions (1), (2), (3), and (4) are essentially the same question asked four times — whether the instrument is liability or equity. This redundancy inflates the response without adding analytical depth. The AI will repeat itself across (1)-(4). Sub-question (5) is a different task entirely (journal entry generation) bolted onto a classification analysis.

**Recommendation:**

- Collapse (1)-(4) into a single classification question: "Apply the IAS 32 substance-over-form test. Identify each contractual feature (fixed distributions, redemption at par, purchase undertaking) and explain whether each creates a contractual obligation to deliver cash. Conclude: financial liability or equity?"
- Separate (5) into its own follow-up prompt or clearly mark it as a second output request.

---

### Issue 2: Exercise Step 2 — Performs the Calculation FOR the AI

**Location:** Line 243
**Severity:** Medium
**Prompt text (abbreviated):**

> "Distribution amount: MYR 3B x 4.75% / 4 = MYR 35.625M per quarter."

**Problem:** The prompt does the math for the AI and hands it the answer. This removes the opportunity to verify whether the AI (or the student) can derive the quarterly distribution from the annual rate and face value. It also means the student cannot catch computational errors — they are just confirming a number they already have.

**Recommendation:**

- Provide the inputs (face value, annual rate, quarterly frequency) and let the AI calculate. E.g., "The sukuk has a face value of MYR 3 billion, a distribution rate of 4.75% per annum, paid quarterly. Calculate the quarterly distribution amount and generate the entries."
- This also tests the student's ability to verify the AI's arithmetic.

---

### Issue 3: Exercise Step 3 — No Format/Output Specification

**Location:** Line 247
**Severity:** Medium
**Prompt text (abbreviated):**

> "Malaysia's Employees Provident Fund (EPF) holds MYR 500M of the sukuk in its Shariah savings portfolio. Framework: MFRS 9. (1) Business model test... (2) SPPI test... (3) Classification... (4) Calculate the effective profit rate... (5) Generate journal entries..."

**Problem:** This is the most complex prompt in the exercise — it asks for a business model test, SPPI test, classification conclusion, effective profit rate calculation, AND journal entries. But there is no output format specification. The AI might produce a wall of prose, a table, or journal entries in various formats. For a regulatory/professional context, the format matters.

**Recommendation:**

- Add format guidance: "Present the SPPI analysis as a two-column table (Cash Flow Feature | SPPI Assessment). Show journal entries in standard debit/credit format with Malaysian income labels."
- Consider splitting into two prompts: classification analysis (Steps 1-3) and quantitative outputs (Steps 4-5).

---

### Issue 4: Exercise Step 4 — Missing Scenario Specifics for Green Sukuk

**Location:** Line 251
**Severity:** Low-Medium
**Prompt text (abbreviated):**

> "Tenaga wishes to designate this sukuk as a Green Sukuk under the SC Malaysia SRI Sukuk Framework. (1) What additional disclosures... (2) What ongoing reporting obligations... (3) How does the Green designation affect the accounting... (4) Draft the Use of Proceeds section for a green sukuk financing solar generation assets."

**Problem:** Sub-question (4) asks the AI to "draft the Use of Proceeds section" but provides minimal specifics about the solar assets. What capacity? What project timeline? What geographic location? Without these, the AI will hallucinate project details. This is a prompt that invites fabrication.

**Recommendation:**

- Either provide concrete scenario details ("Tenaga is financing a 500 MW solar farm in Kedah, Malaysia, with a 3-year construction timeline and projected annual CO2 reduction of 400,000 tonnes") or reframe as a template request ("Draft a Use of Proceeds template showing the required sections and placeholder data for a solar generation project").

---

### Issue 5: Exercise Step 5 — Extremely Broad Regulatory Drafting Request

**Location:** Line 255
**Severity:** Medium-High
**Prompt text (abbreviated):**

> "Draft the accounting and financial disclosure section of the Information Memorandum for this sukuk. Required sections per SC Malaysia guidelines: (1) Summary of accounting policies... (2) Historical and projected debt coverage ratios... (3) MFRS 9 classification rationale... (4) Risks relating to accounting treatment... (5) Shariah compliance certification summary. Format for submission to Bursa Malaysia and SC Malaysia."

**Problem:** This prompt asks the AI to produce a professional regulatory document section with 5 sub-sections, including "historical and projected debt coverage ratios" — but no historical financial data has been provided for Tenaga. The AI cannot compute debt coverage ratios without balance sheet data (total debt, EBITDA, etc.). It will either hallucinate numbers or produce a generic template. Neither outcome teaches the student what a real IM section looks like.

**Recommendation:**

- Provide stub financial data: "Tenaga's most recent annual report shows total debt of MYR 45 billion, EBITDA of MYR 12 billion, and existing sukuk of MYR 20 billion. Use these figures."
- Alternatively, scope this down to only the sections the student can meaningfully evaluate from lesson content (accounting policies, MFRS 9 classification rationale, Shariah compliance summary) and drop the debt coverage ratios.

---

### Issue 6: Try With AI Prompt 1 — Strong but Missing Output Format

**Location:** Lines 273-292
**Severity:** Low
**Prompt text:** Three-sukuk SPPI test comparison.

**Problem:** This is the strongest prompt in the lesson — clear scenario, three concrete instruments, specific analytical questions, and a concluding "explain why" request. The only gap is no output format specification. Given that this is a comparison across three instruments, a table format would make the output far more useful for learning.

**Recommendation:**

- Add: "Present your analysis as a comparison table with columns: Sukuk | Cash Flow Features | SPPI Result | MFRS 9 Classification | Income Label."

---

### Issue 7: Try With AI Prompt 2 — Leading Question Reduces Learning

**Location:** Lines 298-314
**Severity:** Low-Medium
**Prompt text (abbreviated):**

> "Compare the two options across these dimensions: 1. MFRS 9 recognition and measurement — any difference? 2. IAS 32 classification — any difference? ..."
> "Conclude: is the green designation an accounting change or a disclosure and reporting change?"

**Problem:** The concluding question telegraphs the answer. The lesson text already states multiple times that green designation is a disclosure change, not an accounting change. By framing the conclusion as a binary choice where one option has been taught as correct, the prompt becomes confirmation rather than analysis. The student learns to parrot, not to reason.

**Recommendation:**

- Reframe as open-ended: "Based on your comparison, what would you advise a CFO who asks whether going green will change their financial statements? What will change and what will stay the same?"
- Alternatively, add a twist: "A board member claims that green sukuk should be measured differently because the proceeds are restricted. Evaluate this claim."

---

### Issue 8: Try With AI Prompt 3 — Good Design, Weak Verification Criteria

**Location:** Lines 318-328
**Severity:** Low
**Prompt text:** Write-your-own prompt for cross-border sukuk.

**Problem:** The "After you get the output, check:" section lists three verification questions, but the third one ("Did it address whether the issuer's MFRS 9 classification necessarily matches the investor's IFRS 9 classification?") is subtle and the lesson does not explicitly teach the answer. This is good stretch material but could frustrate students who don't know whether the answer is "yes, they always match" or "no, they can differ."

**Recommendation:**

- Add a brief hint: "Consider: MFRS 9 and IFRS 9 are functionally identical standards, so classification analysis should reach the same conclusion — but confirm this rather than assuming it."

---

### Issue 9: Inconsistent Jurisdiction Anchoring Across Prompts

**Location:** Exercise Steps 1-5 and Try With AI Prompts 1-3
**Severity:** Medium
**Pattern:**

| Prompt               | Jurisdiction Specified?           | Framework Specified?                           |
| -------------------- | --------------------------------- | ---------------------------------------------- |
| Exercise Step 1      | Yes ("Jurisdiction: Malaysia")    | Yes ("Framework: MFRS")                        |
| Exercise Step 2      | No                                | Partial ("Under MFRS 9 amortised cost")        |
| Exercise Step 3      | No                                | Yes ("Framework: MFRS 9")                      |
| Exercise Step 4      | No                                | No (references SC Malaysia but not explicitly) |
| Exercise Step 5      | No                                | No (references SC Malaysia but not explicitly) |
| Try With AI Prompt 1 | No                                | Yes ("MFRS 9")                                 |
| Try With AI Prompt 2 | Partial ("Malaysian corporation") | No                                             |
| Try With AI Prompt 3 | Write-your-own                    | N/A                                            |

**Problem:** The lesson's own teaching text emphasizes that the Islamic Finance plugin's router "starts by identifying the jurisdiction before doing any accounting" (line 328). But most prompts do not follow this pattern. Steps 2-5 rely on conversational context from Step 1's jurisdiction declaration, which works in a single chat session but fails if a student runs any step independently or in a new session.

**Recommendation:**

- Every exercise prompt should open with "Jurisdiction: Malaysia. Framework: MFRS." as Step 1 does. This is a two-second addition that makes each prompt self-contained and models the router pattern the lesson teaches.

---

### Issue 10: Exercise Data Reference May Be Incorrect

**Location:** Lines 225-227
**Severity:** Low
**Text:**

> Download `islamic-finance-exercise-data.zip` and find `exercises/ex05-malaysia-corporate-sukuk.md`

**Problem:** This is Exercise 6 in the lesson (line 229: "Practice Exercise 6") but the exercise data file is named `ex05`. This may be a numbering mismatch between the lesson's exercise count and the data package's file naming. If the files are named by lesson number (Lesson 9 = ex09), or by sequential exercise number across the chapter, `ex05` could be correct — but it's confusing.

**Recommendation:**

- Verify the exercise data file naming convention. If `ex05` is correct, add a parenthetical: "find `exercises/ex05-malaysia-corporate-sukuk.md` (Exercise 5 in the data package corresponds to this lesson's exercise)."

---

## Summary Table

| #   | Issue                                                | Location             | Severity    | Category    |
| --- | ---------------------------------------------------- | -------------------- | ----------- | ----------- |
| 1   | Over-packed prompt with redundant sub-questions      | Exercise Step 1      | Medium      | Structure   |
| 2   | Prompt pre-computes the answer for the AI            | Exercise Step 2      | Medium      | Pedagogy    |
| 3   | No output format specification on complex prompt     | Exercise Step 3      | Medium      | Format      |
| 4   | Missing scenario specifics invite hallucination      | Exercise Step 4      | Low-Medium  | Specificity |
| 5   | Requests data (debt ratios) that was never provided  | Exercise Step 5      | Medium-High | Feasibility |
| 6   | Strong prompt but missing format spec for comparison | Try With AI Prompt 1 | Low         | Format      |
| 7   | Leading conclusion telegraphs the answer             | Try With AI Prompt 2 | Low-Medium  | Pedagogy    |
| 8   | Verification criteria reference untaught concept     | Try With AI Prompt 3 | Low         | Pedagogy    |
| 9   | Inconsistent jurisdiction/framework anchoring        | All prompts          | Medium      | Consistency |
| 10  | Exercise numbering mismatch with data file           | Exercise info box    | Low         | Reference   |

---

## Priority Fixes (If Editing)

1. **High priority:** Fix Exercise Step 5 — either provide financial data or remove debt coverage ratio requirement (Issue 5)
2. **High priority:** Add jurisdiction anchoring to all exercise prompts (Issue 9)
3. **Medium priority:** Restructure Exercise Step 1 to remove redundant sub-questions (Issue 1)
4. **Medium priority:** Let the AI calculate the distribution amount in Step 2 (Issue 2)
5. **Medium priority:** Add output format specs to Steps 3 and Try With AI Prompt 1 (Issues 3, 6)
6. **Lower priority:** Add scenario details or reframe as template in Step 4 (Issue 4)
7. **Lower priority:** Reframe Try With AI Prompt 2 conclusion as open-ended (Issue 7)
8. **Lower priority:** Add hint for verification criteria in Prompt 3 (Issue 8)
9. **Lower priority:** Clarify exercise data file numbering (Issue 10)
