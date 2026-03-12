# Prompt Quality Audit Report

**Lesson:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Title:** Saudi Arabia -- Vision 2030, ZATCA Zakat, and Al Rajhi
**Auditor:** Claude (manual audit, no skill file)
**Date:** 2026-03-11

---

## Audit Scope

This audit examines every user-facing prompt in the lesson across **six defect types**:

1. **Fabricated or Fake Agent Output** -- Blocks labelled `**Output:**` or similar that simulate what an AI agent would produce, rather than teaching the student to generate the output themselves
2. **Missing Skill / Tool References** -- Exercise prompts that fail to name or trigger the relevant plugin skill, reducing the chance the router activates the correct product skill and jurisdiction overlay
3. **Redundant or Missing Data Injection** -- Prompts that either (a) inject data the student should compute, or (b) omit data the AI needs to produce a verifiable answer, forcing fabrication
4. **Hallucination-Prone Prompts** -- Prompts asking for specific real-company facts, regulatory circular numbers, or SAMA/ZATCA guidance details that the AI is likely to fabricate
5. **Pedagogical Weakness** -- Prompts misaligned with learning objectives, missing verification steps, or operating below the declared Bloom's level
6. **Format / Structural Issues** -- Inconsistent prompt formatting, exposed answer keys, exercise numbering mismatches, or terminology problems

---

## Prompts Inventory

| ID    | Location             | Prompt Summary                                        |
| ----- | -------------------- | ----------------------------------------------------- |
| E7-S1 | Exercise 7 Step 1    | IFRS murabaha benchmarking against Al Rajhi           |
| E7-S2 | Exercise 7 Step 2    | ZATCA zakat base computation                          |
| E7-S3 | Exercise 7 Step 3    | PIF sukuk investor classification (IFRS 9)            |
| E7-S4 | Exercise 7 Step 4    | Green sukuk -- Saudi Electricity Company              |
| E7-S5 | Exercise 7 Step 5    | Board management accounts                             |
| E7-S6 | Exercise 7 Step 6    | Error detection -- incorrect Saudi zakat              |
| TWA-1 | Try With AI Prompt 1 | ZATCA vs Hanafi Zakat -- numerical comparison         |
| TWA-2 | Try With AI Prompt 2 | Al Rajhi Bank financial statement analysis            |
| TWA-3 | Try With AI Prompt 3 | Vision 2030 Financing -- PIF sukuk portfolio strategy |

---

## Defect Type 1: Fabricated or Fake Agent Output

### Line 177 -- `**Output:**` Block After Journal Entry

**Severity: Low (Borderline -- not fabricated agent output)**

The lesson contains an `**Output:**` label on line 177, followed by:

> Zakat is recognised as an expense in the Saudi IFI's income statement. It is filed with ZATCA annually, within 120 days of fiscal year-end.

**Assessment:** This is NOT fabricated agent output. It is an explanatory annotation following journal entry templates. The same pattern appears consistently in L09 (Malaysia), L11 (UK), and L12 (Nigeria). In each case, the `**Output:**` label describes the accounting consequence of the preceding journal entry -- it is lesson exposition, not a simulated AI response.

**However**, the label `**Output:**` is ambiguous. In a book that teaches AI agent usage, `**Output:**` could be mistaken for "this is what the agent would output." A clearer label would reduce confusion.

**Recommendation:** Consider renaming to `**Accounting Effect:**` or `**Result:**` across all jurisdiction lessons to avoid confusion with agent output blocks. This is a low-priority cosmetic issue given the consistent pattern across the chapter.

**Verdict:** Not a defect. Correctly excluded from the fabricated output defect list.

---

## Defect Type 2: Missing Skill / Tool References

This is the **primary defect category** in this lesson. The Islamic Finance plugin uses a three-layer architecture: a global router, product skills, and jurisdiction overlays. Exercise prompts should include natural language that triggers the router (jurisdiction signals, framework names, product names) so the correct skill stack loads automatically.

### E7-S1 -- Adequate Triggering (No Defect)

The prompt opens with `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` -- this provides both jurisdiction and framework signals. The router should activate the Saudi jurisdiction overlay. No defect.

### E7-S2 -- Missing Jurisdiction/Framework Prefix

**Severity: Medium**

The prompt opens with `"ZATCA uses a Saudi-specific zakat base formula."` It does NOT include the `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` prefix that E7-S1 uses. The word "Saudi" and "ZATCA" are present as implicit jurisdiction signals, but the router's reliability depends on explicit jurisdiction markers. The Malaysia lesson (L09) consistently uses `"Jurisdiction: Malaysia. Framework: MFRS."` at the start of every exercise prompt.

**Recommendation:** Add `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` at the start of this prompt to match the convention established in E7-S1 and the Malaysia lesson.

### E7-S3 -- Missing Jurisdiction/Framework Prefix

**Severity: Medium**

The prompt opens with `"Alinma Bank holds SAR 2 billion of PIF sukuk."` No explicit jurisdiction or framework anchor. The implicit signal is the SAR currency and "PIF" (a Saudi entity), but these are weaker triggers than an explicit jurisdiction declaration.

**Recommendation:** Add `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` prefix.

### E7-S4 -- Missing Jurisdiction/Framework Prefix

**Severity: Medium**

Opens with `"Saudi Electricity Company issued green sukuk..."` -- "Saudi" is present but no explicit jurisdiction/framework anchor.

**Recommendation:** Add `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` prefix.

### E7-S5 -- Missing Jurisdiction/Framework Prefix

**Severity: Medium**

Opens with `"Produce Alinma Bank's monthly Islamic finance management accounts..."` -- no explicit jurisdiction or framework anchor. "Alinma Bank" is a Saudi entity but the router may not recognise company names as jurisdiction signals.

**Recommendation:** Add `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` prefix.

### E7-S6 -- Partially Adequate (Implicit Only)

**Severity: Low**

Opens with `"A Saudi Islamic bank calculated its ZATCA zakat base..."` -- "Saudi" and "ZATCA" are present as implicit signals. This is an error-detection prompt, so the jurisdiction context is less critical (the student is evaluating arithmetic, not generating new accounting treatment). Lower severity than E7-S2 through E7-S5.

### TWA-1, TWA-2, TWA-3 -- No Explicit Jurisdiction Prefix

**Severity: Low**

Try With AI prompts do not use the `"Jurisdiction: X. Framework: Y."` convention. This is acceptable for exploratory prompts that are designed to work with or without the plugin. The prompts contain adequate implicit signals ("Saudi", "ZATCA", "Al Rajhi", "SAR", "SAMA").

### Summary -- Defect Type 2

5 of 6 exercise prompts lack the explicit `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` prefix. Only E7-S1 includes it. This is the single most impactful improvement available: adding 10 words to each prompt materially increases the probability that the router correctly loads the Saudi jurisdiction overlay.

---

## Defect Type 3: Redundant or Missing Data Injection

### E7-S1 -- Missing Input Data (Forces Hallucination)

**Severity: High**

The prompt asks the AI to report Al Rajhi Bank's specific financial reporting practices: balance sheet classification, income captions, and ECL approach. No reference data is provided. The AI must either recall or fabricate Al Rajhi-specific details.

The lesson text (lines 187-191) provides the benchmark answers, but the prompt does not inject this data or instruct the student to reference it.

**Recommendation:** Either (a) inject the Al Rajhi benchmark data directly into the prompt as reference material for the AI to apply (not recall), or (b) restructure as a two-step exercise: first ask the AI, then verify against the lesson text. Option (a) is stronger because it tests the student's ability to apply a benchmark, not the AI's ability to recall financial statement captions.

### E7-S2 -- Well-Injected (No Defect)

All five financial parameters (share capital, reserves, retained earnings, fixed assets, long-term investments) are provided. The AI has everything it needs to compute the answer. The answer is verifiable against the "Check your work" section. This is the model prompt for data injection in this lesson.

### E7-S3 -- Partially Injected (Missing Parameters)

**Severity: Medium**

The prompt provides face value (SAR 2B) and duration (5-year) but omits:

- Coupon/distribution rate (needed for income accrual journal entries in sub-question 3)
- Redemption terms (at face value? at market?)
- Specific Shariah structure (ijarah? wakala? The lesson text says PIF issues ijarah sukuk but the prompt does not specify)

Without distribution rate, the AI must fabricate a rate to generate journal entries. Without structure, the SPPI analysis is under-constrained.

**Recommendation:** Add distribution rate (e.g., "fixed quarterly distribution of X%"), redemption at face value, and specify ijarah structure to match the lesson text.

### E7-S4 -- Severely Under-Injected

**Severity: High**

The prompt provides only one data point: SAR 500M holding size. Missing:

- Coupon/distribution rate
- Maturity
- Shariah structure of the green sukuk
- Distribution schedule

The AI cannot draft a concrete accounting policy note without these parameters. It will generate a generic template.

**Recommendation:** Add concrete financial parameters: structure type, distribution rate, maturity date, rating. This transforms the exercise from template generation to applied accounting.

### E7-S5 -- No Data Injected (Complete Fabrication Required)

**Severity: High**

The prompt asks for monthly management accounts with five components (murabaha income by tenor, DM income trend, sukuk portfolio position, zakat accrual, key ratios) but provides ZERO financial data. The AI must invent every number. The student has no way to verify any output.

This is the only exercise step that requires the AI to fabricate an entire output without any input constraint. Every other step provides at least some verifiable data.

**Recommendation:** Provide a data table with specific monthly figures (murabaha balances by tenor bucket, DM portfolio declining balance, sukuk holdings from Steps 2-4, zakat accrual from Step 2). The data can reference earlier exercise steps to reinforce the progressive build.

### E7-S6 -- Well-Injected (No Defect)

All data is provided inline. The deliberately flawed calculation gives the AI and student concrete numbers to work with. Verifiable against "Check your work."

### TWA-1 -- Excellently Injected (No Defect)

Complete bank data set with 9 financial parameters. Both formulas can be computed from the provided data. This is the strongest data injection in the lesson.

### TWA-2 -- No Data Injected (Hallucination-Dependent)

**Severity: Medium**

All five sub-questions ask the AI to recall specific Al Rajhi financial statement details. No reference data is provided. This is acceptable for an exploratory Try With AI prompt (lower stakes than exercise prompts), but the hallucination risk is material.

### TWA-3 -- Well-Injected (No Defect)

Specific holdings with amounts, tenors, and names provided. Sub-question 5 (SAMA concentration limits) is the only under-constrained element.

---

## Defect Type 4: Hallucination-Prone Prompts

### E7-S1 -- Al Rajhi Factual Recall

**Severity: High**

"Based on publicly available information about Al Rajhi Bank's financial reporting" explicitly asks the AI to recall specific real-company financial statement details. LLMs routinely fabricate or confuse specific line item captions, ECL presentation formats, and balance sheet structures for real companies.

**Mitigating factor:** The lesson text (lines 187-191) provides the correct answers, so a diligent student could cross-check. But the prompt does not instruct this verification.

### E7-S4 -- SAMA ESG Guidance

**Severity: High**

"What ESG/sustainability disclosures does SAMA encourage for Saudi IFIs' green sukuk holdings?" asks the AI to report specific regulatory guidance. SAMA's ESG/sustainability framework is evolving rapidly. The AI is highly likely to fabricate circular numbers, specific requirements, or dates.

**Recommendation:** Reframe as a reasoning exercise: "What categories of sustainability disclosures would be relevant for a Saudi IFI holding green sukuk? Consider: use of proceeds reporting, environmental impact metrics, and alignment with international green bond/sukuk frameworks."

### TWA-2 -- Full Al Rajhi Factual Recall

**Severity: Medium-High**

All five sub-questions require the AI to recall specific details about Al Rajhi's published financial statements. Question 4 (Equity of Investment Account Holders) goes beyond what the lesson text covers, increasing fabrication risk.

### TWA-3 Sub-question 5 -- SAMA Prudential Requirements

**Severity: Medium**

"Note any SAMA prudential requirements for sukuk concentration limits" requests specific regulatory facts the AI may fabricate.

**Recommendation:** Reframe as "What types of concentration risk limits might a central bank impose on a bank's sukuk portfolio?" -- tests conceptual understanding without requiring SAMA-specific recall.

### E7-S3 Sub-question 2 -- PIF Sukuk Shariah Structure

**Severity: Low-Medium**

"What is the Shariah structure of PIF sukuk?" asks for factual recall about a real issuer's instrument structure. PIF has issued multiple tranches with different structures. Without specifying which tranche, the AI may conflate details from different issuances.

---

## Defect Type 5: Pedagogical Weakness

### E7-S4 -- Not Aligned to Any Learning Objective

**Severity: Medium**

The three learning objectives in the frontmatter cover: (1) ZATCA zakat, (2) Al Rajhi benchmarking, (3) PIF sukuk + management accounts. Green sukuk accounting is listed in `cognitive_load.concepts_list` but has no corresponding learning objective or assessment method.

**Recommendation:** Either add a fourth learning objective for green sukuk/ESG disclosures, or explicitly connect Step 4 to the existing PIF sukuk objective by reframing it as "Apply the same IFRS 9 classification from Step 3 to the green sukuk holding."

### E7-S5 -- Below Declared Bloom's Level

**Severity: Medium**

The learning objective targets B1/Apply, but without input data the exercise operates at Remember level (recognising what management accounts look like) rather than Apply level (producing management accounts from source data).

**Recommendation:** Provide financial input data so the student applies formatting and analytical skills rather than generating illustrative fiction.

### E7-S4 -- No Verification Step

**Severity: Medium**

Step 4 has no corresponding entry in "Check your work." The student generates an accounting policy note, IFRS 7 disclosures, and SAMA ESG guidance with no way to verify correctness.

**Recommendation:** Add a verification element: "The accounting policy note should confirm IFRS 9 classification (from Step 3 principles). The IFRS 7 disclosure should cover: fair value basis, credit risk, maturity analysis."

### E7-S1 -- No Embedded Verification

**Severity: Low-Medium**

The student accepts the AI's characterisation of Al Rajhi practices without being directed to verify. The lesson text provides the answers (lines 187-191), but the prompt does not say "compare the AI's response against the benchmark in the lesson text."

**Recommendation:** Add a substep: "Compare the AI's answer against the Al Rajhi benchmarks described earlier in this lesson. Note any discrepancies."

### Exercise Arc -- Strong Overall

**Severity: None (Positive)**

The six-step progression (benchmark -> compute -> classify -> expand -> synthesize -> verify) is pedagogically well-structured. Step 6 (error detection) is an excellent capstone that builds critical evaluation skills. The "Check your work" section provides concrete numerical verification for Steps 2, 3, 5, and 6.

### Try With AI -- Strong Overall

**Severity: None (Positive)**

All three prompts have "What you are learning" explanations. The progression from computational (TWA-1) to analytical (TWA-2) to strategic (TWA-3) is well-designed. TWA-1 is exemplary.

---

## Defect Type 6: Format / Structural Issues

### Exercise Prompts Not in Code Blocks

**Severity: Medium**

Exercise prompts (E7-S1 through E7-S6) use italic markdown (`_"..."_`). Try With AI prompts use code blocks. This inconsistency affects copyability -- italic text is harder to select and copy cleanly into Cowork or another AI assistant than code blocks.

The Malaysia lesson (L09) and UK lesson (L11) use the same inconsistent pattern (italic for exercises, code blocks for Try With AI), so this is a chapter-wide convention rather than a Saudi lesson-specific defect.

**Recommendation:** Convert exercise prompts to code blocks for consistency and copyability. This is a chapter-wide change, not lesson-specific.

### E7-S6 -- Answer Key Exposed in Prompt Paragraph

**Severity: Medium**

Step 6 includes the answer directly in the same paragraph as the prompt: "The bank omitted statutory reserves (should be added) and failed to deduct fixed assets and long-term investments (both should be deducted from the equity-based ZATCA formula)."

A student reading the exercise sees the answer before they can attempt the error detection. This defeats the pedagogical purpose of the exercise.

**Recommendation:** Move the answer to a collapsed `<details>` block or relocate it entirely to the "Check your work" section (which already partially covers this at line 236).

### Exercise Data File Numbering Mismatch

**Severity: Low**

The exercise references `exercises/ex06-saudi-ifi-alinma.md` from the zip, but the lesson calls it "Practice Exercise 7." The Malaysia lesson uses `ex05` for "Exercise 6." The numbering scheme (exercise data files starting at ex01, lesson exercises starting at a different number) could confuse students.

**Recommendation:** Add a brief note: "Exercise data file numbering follows the chapter-wide data pack sequence."

### Frontmatter Quality

**Severity: None (Positive)**

The YAML frontmatter is comprehensive: skills (3), learning_objectives (3), cognitive_load with 6 concepts, differentiation (extension + remedial), and teaching_guide (key_points, misconceptions, discussion_prompts, teaching_tips, assessment_checks). Well-aligned with lesson content.

---

## Summary Table

### Defects by Type

| Defect Type                | High  | Medium | Low   | None  |
| -------------------------- | ----- | ------ | ----- | ----- |
| 1. Fabricated Agent Output | 0     | 0      | 0     | 1     |
| 2. Missing Skill/Tool Refs | 0     | 4      | 1     | 1     |
| 3. Missing/Redundant Data  | 3     | 1      | 0     | 3     |
| 4. Hallucination-Prone     | 2     | 2      | 1     | 0     |
| 5. Pedagogical Weakness    | 0     | 3      | 1     | 2     |
| 6. Format / Structural     | 0     | 2      | 1     | 1     |
| **Totals**                 | **5** | **12** | **4** | **8** |

### Defects by Prompt

| Prompt | Defects Found | Highest Severity | Primary Issue                                |
| ------ | ------------- | ---------------- | -------------------------------------------- |
| E7-S1  | 3             | High             | Hallucination (Al Rajhi recall), no data     |
| E7-S2  | 1             | Medium           | Missing jurisdiction prefix                  |
| E7-S3  | 3             | Medium           | Missing jurisdiction prefix + missing params |
| E7-S4  | 5             | High             | Missing data, hallucination, no LO alignment |
| E7-S5  | 3             | High             | No data injection at all                     |
| E7-S6  | 2             | Medium           | Exposed answer key                           |
| TWA-1  | 0             | --               | Strongest prompt in the lesson               |
| TWA-2  | 2             | Medium-High      | Full hallucination-dependent factual recall  |
| TWA-3  | 1             | Medium           | SAMA regulatory factual claim                |

### Correctly Excluded (Not Defects)

The following elements were reviewed and correctly determined NOT to be defects:

- **`**Output:**` block (line 177):** Explanatory annotation about accounting effect of journal entries. Same pattern used across L09, L11, L12. Not fabricated agent output.
- **ZATCA formula code block (lines 134-144):** Lesson exposition, not a prompt or simulated output.
- **ZATCA vs AAOIFI comparison table (lines 150-157):** Framework reference table for student learning, not fabricated data.
- **Journal entry templates (lines 165-175):** Standard accounting notation with `[Calculated amount]` placeholders, not fabricated specific numbers.
- **Al Rajhi benchmark bullet points (lines 187-191):** Lesson reference material, not embedded in a prompt.

---

## Prioritised Recommendations

### Priority 1 (High Impact, Low Effort): Add Jurisdiction Prefix to E7-S2 through E7-S5

Add `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA."` to the start of exercise prompts S2-S5. This matches the convention in E7-S1 and the Malaysia lesson (L09), and materially improves the probability that the plugin router loads the correct jurisdiction overlay.

**Effort:** 4 lines changed. 5 minutes.

### Priority 2 (High Impact, Medium Effort): Inject Financial Data into E7-S4 and E7-S5

E7-S4 (green sukuk) needs: structure type, distribution rate, maturity, rating.
E7-S5 (management accounts) needs: a data table with murabaha balances by tenor, DM portfolio figures, sukuk income, and prior-step results as inputs.

Without this data, these prompts produce unverifiable fabricated output. With it, they become Apply-level exercises matching the B1/Apply learning objective.

**Effort:** Write two data tables. 30 minutes.

### Priority 3 (High Impact, Medium Effort): Restructure E7-S1 to Reduce Hallucination

Either inject the Al Rajhi benchmark data from lines 187-191 directly into the prompt, or restructure as: "Using the Al Rajhi benchmarks described in this lesson, evaluate Alinma Bank's accounting policies." This shifts the AI's task from factual recall to analytical application.

**Effort:** Rewrite one prompt. 15 minutes.

### Priority 4 (Medium Impact, Low Effort): Hide E7-S6 Answer Key

Move the inline answer ("The bank omitted statutory reserves...") into a `<details>` block or consolidate it into the "Check your work" section. The current layout exposes the answer before the student attempts the error detection.

**Effort:** Move one paragraph. 5 minutes.

### Priority 5 (Medium Impact, Low Effort): Reframe SAMA ESG Question in E7-S4

Replace "What ESG/sustainability disclosures does SAMA encourage?" with a reasoning-based question: "What categories of sustainability disclosures would be relevant for a Saudi IFI holding green sukuk?" This eliminates the hallucination risk while preserving the learning goal.

**Effort:** Rewrite one sub-question. 5 minutes.

### Priority 6 (Low Impact, Chapter-Wide): Convert Exercise Prompts to Code Blocks

Convert italic exercise prompts to code blocks for copyability. This is a chapter-wide change affecting all jurisdiction lessons, not Saudi-specific.

**Effort:** Format change across 6 steps. 10 minutes per lesson, ~60 minutes chapter-wide.

---

## Strengths

- **TWA-1 (ZATCA vs Hanafi)** is an exemplary prompt: complete data, dual-framework comparison, clear deliverables, audience framing, and an excellent "What you are learning" explanation. This should be the reference standard for future data-driven comparison prompts.
- **E7-S2 (ZATCA zakat computation)** is the cleanest exercise prompt: all data provided, four concrete deliverables, verifiable answer in "Check your work."
- **E7-S6 (Error detection)** is a strong pedagogical pattern -- deliberately flawed output builds critical evaluation skills. This pattern should be replicated in other jurisdiction lessons.
- **"Check your work" section** provides specific numerical anchors for verification (SAR 20.9B zakat base, SAR 522.5M obligation).
- **Lesson exposition quality** is high -- the ZATCA zakat formula, comparison table, and Al Rajhi benchmark section provide clear reference material.
- **Frontmatter metadata** is comprehensive and well-aligned with lesson content.
- **Cognitive load assessment** is accurate -- 6 new concepts at B1 with clear student progression from L09 Malaysia.

---

## Overall Assessment

**Grade: B**

The lesson has excellent expository content and two exemplary prompts (TWA-1, E7-S2). The core pedagogical contribution -- the ZATCA zakat formula and its distinction from AAOIFI/Hanafi -- is handled exceptionally well. The primary weaknesses are: (1) inconsistent jurisdiction/framework prefixing across exercise prompts (only 1 of 6 includes the full prefix), (2) three exercise steps (E7-S1, E7-S4, E7-S5) that either require AI hallucination or produce unverifiable output due to missing input data, and (3) an exposed answer key in E7-S6. Priorities 1-3 would elevate this lesson to an A-.
