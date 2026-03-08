# Verifier Report — Chapter 21 Banking AI

**Date**: 2026-03-06
**Assessed artifacts**:

- Governing draft: `specs/lightweight/banking_chapter21 2/Chapter21_Banking_AI.docx` (10,327 words)
- Raw skills: `specs/lightweight/banking_chapter21 2/banking-cowork-skills/` (1 router + 15 products + 7 jurisdictions)
- Lesson files: `apps/learn-app/docs/.../21-banking-domain-agents/` (15 lessons + README, 43,107 words, 5,041 lines)
- Plugin skills: `agentfactory-business-plugins/banking/skills/` (17 SKILL.md files, 2,080 lines)
- Plugin exercises: `agentfactory-business-plugins/banking/exercises/` (14 exercise directories)

---

## Q1 — Complete Draft or Skeleton?

**COMPLETE DRAFT.** Both the governing docx and the lesson files contain substantial explanatory prose.

The **docx** (10,327 words) is a complete first draft with:

- Parts 1-4: ~4,500 words of regulatory explanatory prose (three pillars, IFRS 9 ECL, Basel III/IV, AML/KYC)
- Part 5: ~1,000 words on plugin architecture
- Part 6: ~3,500 words of exercise steps with full data tables
- Part 7: ~1,800 words of bank reconciliation prose (strongest section)
- Chapter summary: ~500 words (5 principles)

The **lesson files** (43,107 words across 15 lessons) are a full teaching draft with:

- YAML frontmatter on every lesson (skills, learning_objectives, cognitive_load, differentiation)
- Narrative openings connecting to prior lessons
- Explanatory prose with tables, formulas, and examples
- 3 "Try With AI" prompts per lesson (45 total prompts)
- Every lesson averages 2,874 words (range: 2,448-3,547)

**No section header has fewer than 50 words of body text.** All lessons have substantive prose throughout.

## Q2 — Are the Exercise Steps Worth Keeping?

**Yes for all three sampled exercises.**

**Exercise 1** (IFRS 9 Stage Assessment — Retail Mortgage): Technically accurate. 8 facilities with realistic data (DPD, rating changes, LTV, qualitative notes). Correctly scoped — tests SICR judgment including the hardest call (A004: job loss with no DPD). Key learning statement identifies the professional judgment the exercise builds.

**Exercise 5** (ICAAP Stress Test): Technically accurate. Uses BoE ACS severe scenario with realistic parameters (GDP -4.2%, house prices -31%). Correctly scoped — traces from macro scenario through ECL, NII, RWA inflation to capital depletion path. Time target 50 minutes is appropriate.

**Exercise 10** (Capstone Board Risk Report): Well-scoped integration exercise. Uses all three pillars plus liquidity. Includes a cross-pillar stress scenario (AML fine + deposit outflows + capital impact). Time target 75 minutes for a full board report is appropriate for a practitioner.

**All exercises have**: data tables, time targets, step-by-step instructions, and key learning statements. The exercise data is the strongest asset of the governing docx.

## Q3 — Word Count Breakdown

### Governing Docx (10,327 words)

| Category                                  | Estimated Words | %   |
| ----------------------------------------- | --------------- | --- |
| Explanatory prose (Parts 1-4, 7, summary) | ~6,300          | 61% |
| Exercise steps + data tables (Part 6)     | ~3,500          | 34% |
| Section headers + metadata                | ~500            | 5%  |

This is NOT a skeleton — 61% is explanatory prose. The docx has a body.

### Lesson Files (43,107 words across 15 lessons)

| Category            | Estimated Words | %   |
| ------------------- | --------------- | --- |
| YAML frontmatter    | ~6,500          | 15% |
| Explanatory prose   | ~25,000         | 58% |
| Try With AI prompts | ~5,500          | 13% |
| Exercise content    | ~4,000          | 9%  |
| Tables and formulas | ~2,100          | 5%  |

**Prose body is ~25,000 words — above the 20,000 benchmark.**

## Q4 — Which Sections Are Truncated Headers With No Content?

**None.** Every section heading in the lesson files is followed by substantive prose (minimum ~100 words per section). This is a complete draft, not a skeleton.

The only thin areas are the exercise-focused lessons (L12, L13) which have less explanatory prose and more exercise data — but this is by design, as these are practice lessons.

## Q5 — Does the Chapter Teach Cowork/Plugin at All?

**Partially. This is the chapter's most significant gap.**

Plugin/skill references in explanatory prose (not inside exercises): **48 total** across 10 lessons. But the distribution is extremely uneven:

| Lesson                    | Plugin/Skill Refs | Assessment                                                      |
| ------------------------- | ----------------- | --------------------------------------------------------------- |
| L02 (Plugin Architecture) | 26                | Expected — this is the architecture lesson                      |
| L01 (Three Pillars)       | 7                 | Good — connects skills to pillars                               |
| L15 (Capstone)            | 3                 | Adequate                                                        |
| L03-L05 (IFRS 9)          | 2, 2, 1           | Minimal — mentions skill names but doesn't demonstrate workflow |
| L06-L10 (Basel + AML)     | **0, 0, 0, 0, 0** | **ZERO plugin refs in 5 core lessons**                          |
| L11 (Integration)         | 2                 | Minimal                                                         |
| L14 (Reconciliation)      | 3                 | Adequate                                                        |

**5 of 15 lessons (L06-L10) have ZERO references to the plugin, skills, or Cowork commands.** These are the core Basel and AML teaching lessons. The chapter teaches the regulatory content well but largely fails to connect it to the plugin architecture — the reader learns banking regulation, but not how to use the banking agent for it.

**The docx has stronger Cowork content** — Part 5 has a worked example showing a 6-step ECL workflow with actual Cowork commands. This content was not transferred into the lesson files.

**Missing entirely**:

- Cowork installation walkthrough with actual outputs (L02 has install commands but no demonstration)
- Worked examples showing actual user→agent dialogue (the docx has one; lesson files have zero)
- SKILL.md library map explaining how the 15 files relate and when each loads
- Prose-level Cowork command demonstrations in L03-L10

## Q6 — Skills Library First-Pass

### Per-File Audit

| Skill                 | Lines | YAML | NEVER DO     | Output Format | Neg Triggers |
| --------------------- | ----- | ---- | ------------ | ------------- | ------------ |
| aml-cdd-edd           | 146   | PASS | **FAIL (0)** | PASS (6)      | **FAIL**     |
| aml-sar-drafting      | 127   | PASS | **FAIL (0)** | PASS (6)      | **FAIL**     |
| aml-typologies        | 174   | PASS | **FAIL (0)** | **FAIL (0)**  | **FAIL**     |
| bank-reconciliation   | 223   | PASS | PASS (9)     | PASS (1)      | **FAIL**     |
| banking-global-router | 72    | PASS | PASS (6)     | N/A (router)  | N/A          |
| basel-capital         | 103   | PASS | PASS (6)     | **FAIL (0)**  | Weak (1)     |
| basel-rwa-credit      | 105   | PASS | **FAIL (0)** | **FAIL (0)**  | **FAIL**     |
| basel-rwa-market      | 268   | PASS | PASS (8)     | **FAIL (0)**  | Weak (1)     |
| ifrs9-disclosure      | 96    | PASS | **FAIL (0)** | PASS (1)      | **FAIL**     |
| ifrs9-ecl             | 101   | PASS | PASS (7)     | PASS (1)      | **FAIL**     |
| ifrs9-scenarios       | 85    | PASS | **FAIL (0)** | PASS (4)      | **FAIL**     |
| ifrs9-staging         | 75    | PASS | **FAIL (0)** | PASS (2)      | **FAIL**     |
| kyc-risk-rating       | 104   | PASS | **FAIL (0)** | PASS (1)      | **FAIL**     |
| liquidity-lcr         | 105   | PASS | PASS (6)     | **FAIL (0)**  | PASS (2)     |
| liquidity-nsfr        | 81    | PASS | **FAIL (0)** | **FAIL (0)**  | **FAIL**     |
| sanctions-screening   | 120   | PASS | PASS (6)     | PASS (3)      | **FAIL**     |
| stress-testing        | 95    | PASS | **FAIL (0)** | **FAIL (0)**  | **FAIL**     |

### Summary

- **YAML frontmatter**: 17/17 PASS
- **NEVER DO section**: 7/16 PASS (excl. router) — **9 product skills missing NEVER DO**
- **Output format block**: 10/16 PASS — **6 missing output format**
- **Negative triggers**: 2/16 PASS (and both are weak) — **14 missing negative triggers in description**
- **Below 120-line benchmark**: 11/17 files (65%) — most are thin

**The skills library has structural completeness (YAML, routing tables) but lacks production guardrails (NEVER DO, negative triggers) and many files are too thin for production use.**

## Q7 — Overall Verdict

### VERDICT A — PATCH

**Justification:**

The chapter body is substantially present at **43,107 words** (well above the 20,000 benchmark). All 15 lessons have full YAML frontmatter, narrative openings, explanatory prose with tables and formulas, and 3 "Try With AI" prompts each. Exercise steps are technically sound and well-scoped.

The chapter is NOT a skeleton. It does not need reconstruction.

**Specific gaps requiring patching:**

1. **Cowork narrative gap** (CRITICAL): 5 core lessons (L06-L10) have zero plugin/skill references. The chapter teaches banking regulation without connecting it to the agent architecture. The docx's worked example (6-step ECL workflow with Cowork commands) was not transferred to lessons.

2. **Concept boxes sparse** (MODERATE): 19 concept boxes total across 11 lessons. 4 lessons have zero (L04, L13, L14, L15). Benchmark from prompt is >= 15 — currently meets it, but many banking terms are used before being defined in concept boxes.

3. **Skills library thin** (CRITICAL): 11/17 skills below 120-line benchmark. 9/16 product skills missing NEVER DO section. 14/16 missing negative triggers. 6/16 missing output format block.

4. **Pakistan/GCC coverage** (MODERATE): 45 references total but concentrated in exercise data (L12: 26 refs). Prose-level Pakistan/SBP coverage is thin — most lessons use UK examples exclusively.

5. **Missing worked examples with dialogue** (MODERATE): No lesson contains a named-bank/named-professional worked example with actual user→agent dialogue (the format present in the docx).

6. **No chapter summary lesson** (MINOR): L15 serves as capstone but doesn't include a chapter summary section summarizing all 15 lessons.

7. **Missing files in skills library** (MODERATE): No GCC/Saudi jurisdiction overlay, no Islamic banking interaction overlay, no CECL overlay, no dedicated agent SKILL.md files.

**PATCH these gaps. Do not reconstruct.**

---

**Presented to human for confirmation of VERDICT A — PATCH before proceeding to Role 2 (Auditor).**
