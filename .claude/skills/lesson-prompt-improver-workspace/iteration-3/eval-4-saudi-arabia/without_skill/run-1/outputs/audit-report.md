# Prompt Quality Audit Report

**Lesson:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Title:** Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi
**Auditor:** Claude (manual audit, no skill file)
**Date:** 2026-03-11

---

## Audit Scope

This audit examines every user-facing prompt in the lesson across **six defect types** defined by the lesson-prompt-improver skill:

1. **Fabricated Agent Output** — Code blocks pretending to show exact agent output with specific fake numbers
2. **Missing Skill Name in Prompt** — Exercise prompts that don't name which skill is being used
3. **Inline Data Injection** — Prompts that redundantly tell the agent to read data files already handled by folder instructions
4. **Fiction-Researching Prompt** — Prompts that would cause the agent to web-search fictional entities
5. **Narrative Referencing Fabricated Content** — Prose paragraphs that reference specific numbers from fabricated output blocks
6. **Plugin/Tool Terminology** — Incorrect references to plugins, tools, or platforms

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

## Defect 1: Fabricated Agent Output

**No fabricated agent output blocks found.**

The lesson does not contain any `**Output:**` or `**Sample Output:**` code blocks with fake agent-generated numbers, scores, or reports. The only code blocks in the lesson are:

- The ZATCA formula (lines 134-143) — a framework definition, not fabricated output
- Journal entry templates (lines 165-175) — accounting notation patterns, not agent output
- Try With AI prompt blocks (lines 244-269, 277-302, 308-330) — student inputs, not agent outputs

**Status: CLEAN**

---

## Defect 2: Missing Skill Name in Prompt

**Severity: Medium — affects all 6 exercise prompts and TWA prompts**

The Islamic Finance plugin contains 13 skills (1 router + 12 products) with 4 commands (`/if-journal`, `/if-compare`, `/if-screen`, `/if-zakat`). None of the exercise prompts or Try With AI prompts reference any skill by name. The prompts use generic phrasing like "Ask your AI assistant" without indicating which skill should activate.

### E7-S1 — IFRS Murabaha Benchmarking

**Line 216.** Prompt starts with: _"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA. Based on publicly available information..."_

The jurisdiction and framework anchoring is good and should trigger the router's Saudi Arabia overlay, but the prompt does not name the skill. The router skill (`islamic-finance-router`) or a product skill (likely the murabaha product skill) should be referenced.

**Recommended fix:** Add natural skill reference: "Use the Islamic Finance plugin (Saudi Arabia jurisdiction) to..." — this lets the router activate and select the correct product skill and overlay.

### E7-S2 — ZATCA Zakat Computation

**Line 220.** Prompt starts with _"ZATCA uses a Saudi-specific zakat base formula..."_

This should invoke the `/if-zakat` command or reference the zakat product skill. The prompt provides all the numerical data but does not tell the student which skill or command to use.

**Recommended fix:** "Use the `/if-zakat` command to compute the ZATCA zakat base for Alinma Bank..." — this directly invokes the domain command designed for this task.

### E7-S3 — PIF Sukuk Classification

**Line 224.** Prompt about PIF sukuk IFRS 9 classification. The sukuk product skill should be referenced.

**Recommended fix:** "Use the Islamic Finance plugin to classify PIF sukuk under IFRS 9..."

### E7-S4 — Green Sukuk

**Line 228.** Prompt about Saudi Electricity Company green sukuk. No skill referenced.

**Recommended fix:** Same pattern — "Use the Islamic Finance plugin to draft the accounting policy note..."

### E7-S5 — Board Management Accounts

**Line 232.** Monthly management accounts prompt. No skill referenced.

### E7-S6 — Error Detection

**Line 234.** Error detection prompt. No skill needed here — this is a verification exercise where the student evaluates output critically. Omitting the skill name is acceptable for error-detection steps.

### TWA-1, TWA-2, TWA-3

**Lines 244-330.** None of the three Try With AI prompts reference any skill. Per the skill defect rules, skill names should be added to at least TWA Prompt 1 (the primary/first prompt).

**Summary:** 5 exercise prompts and 1 Try With AI prompt need skill name additions. E7-S6 is exempt (error detection exercise).

---

## Defect 3: Inline Data Injection

**No inline data injection found.**

The prompts do not contain "Read demo-data.md" or similar data file injection instructions. E7-S2 provides financial data directly in the prompt (Share capital SAR 20B, etc.), which is the correct pattern for this exercise type — the data IS the prompt, not a reference to a file.

The exercise data reference (`exercises/ex06-saudi-ifi-alinma.md`) is correctly placed in the `:::info Exercise Requirements` block (lines 200-204), not inside the prompt code blocks.

**Status: CLEAN**

---

## Defect 4: Fiction-Researching Prompt

**Severity: Medium-High — affects 2 prompts**

### E7-S1 — Al Rajhi Financial Statement Research

**Line 216.** The prompt asks: _"Based on publicly available information about Al Rajhi Bank's financial reporting: (1) How does Al Rajhi classify murabaha receivables on its balance sheet? (2) What income line item caption does Al Rajhi use for murabaha income? (3) How does Al Rajhi apply IFRS 9 ECL to its murabaha portfolio?"_

While Al Rajhi Bank is a real entity (not fictional), this prompt pattern is fiction-researching-adjacent: it asks the agent to recall or research specific financial statement line items from a real company's published reports. The agent will either:
- Fabricate plausible-sounding captions (hallucination)
- Attempt web search and return outdated or inaccurate results
- Return generic IFRS presentation guidance dressed up as Al Rajhi-specific information

The lesson text itself (lines 187-191) provides the benchmark answers, but the prompt does not reference this text as grounding material.

**Recommended fix:** Provide the Al Rajhi benchmark data directly in the prompt as reference material. Change from "Based on publicly available information" to providing the benchmark and asking the agent to apply it: "Al Rajhi Bank classifies murabaha receivables as financing assets at amortised cost, uses 'Income from Murabaha and Instalment Sales' as its income caption, and applies IFRS 9 three-stage ECL. Using these Al Rajhi benchmarks, review Alinma Bank's accounting policies..."

### E7-S4 — SAMA ESG Disclosures

**Line 228.** Sub-question: _"What ESG/sustainability disclosures does SAMA encourage for Saudi IFIs' green sukuk holdings?"_

This asks the agent to report on specific evolving regulatory guidance. The agent is likely to fabricate SAMA circular numbers, dates, or specific requirements.

**Recommended fix:** Reframe as analytical: "What categories of sustainability disclosures would be relevant for a Saudi IFI holding green sukuk? Consider: use of proceeds reporting, environmental impact metrics, alignment with green bond/sukuk standards."

### TWA-2 — Al Rajhi Financial Statement Analysis

**Lines 277-302.** The entire prompt asks the agent to describe Al Rajhi's specific financial statement structure across 5 dimensions. Same fiction-researching pattern as E7-S1, but expanded.

**Recommended fix:** Provide key reference data within the prompt, or reframe questions 4-5 as analytical reasoning questions rather than factual recall about a specific company.

---

## Defect 5: Narrative Referencing Fabricated Content

**No narrative referencing fabricated content found.**

There are no fabricated output blocks in this lesson, so there are no orphaned narrative references. The "Check your work" section (lines 236) references verifiable mathematical results (SAR 20.9B zakat base, SAR 522.5M obligation) that come from the input data in the prompt, not from fabricated agent output.

**Status: CLEAN**

---

## Defect 6: Plugin/Tool Terminology

**Severity: Low — 1 minor issue**

### "Cowork or Claude (any plan)" — Line 210

The phrase "Cowork or Claude (any plan)" is an acceptable platform reference per `cowork-content.md` rules. The terminology is correct: "Cowork" is used (not "Claude in Excel"), and the lesson is in Ch 20 (not Ch 17).

### Try With AI Header — Line 240

"Use these prompts in Cowork or your preferred AI assistant to explore this lesson's concepts." — This follows the correct pattern from `cowork-content.md`.

### Plugin Reference — Line 202

"**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)" — Consistent with other lessons in the chapter (L04, L09 use identical phrasing).

### Exercise Data Reference — Line 203

The zip file reference uses the correct `agentfactory-business-plugins` repo path.

### Minor Issue: "Ask your AI assistant" — Lines 214, 218, 222, 226, 232

The phrasing "Ask your AI assistant:" is used for all exercise prompts. While not technically wrong, the chapter README establishes the plugin as the primary tool. "Ask your AI assistant" is generic and does not reinforce the plugin context. Other lessons in the chapter use the same pattern, so this is a chapter-wide convention rather than a per-lesson defect.

**Status: MOSTLY CLEAN — no terminology violations, one minor convention note**

---

## Summary of Findings

| Defect Type                          | Defects Found | Severity     |
| ------------------------------------ | ------------- | ------------ |
| 1. Fabricated Agent Output           | 0             | N/A          |
| 2. Missing Skill Name in Prompt      | 6             | Medium       |
| 3. Inline Data Injection             | 0             | N/A          |
| 4. Fiction-Researching Prompt        | 3             | Medium-High  |
| 5. Narrative Referencing Fabricated   | 0             | N/A          |
| 6. Plugin/Tool Terminology           | 0             | N/A          |
| **Total**                            | **9**         |              |

### Defects by Prompt

| Prompt | Defects | Types                           | Highest Severity |
| ------ | ------- | ------------------------------- | ---------------- |
| E7-S1  | 2       | Missing skill name, Fiction-researching | Medium-High |
| E7-S2  | 1       | Missing skill name              | Medium           |
| E7-S3  | 1       | Missing skill name              | Medium           |
| E7-S4  | 2       | Missing skill name, Fiction-researching | Medium-High |
| E7-S5  | 1       | Missing skill name              | Medium           |
| E7-S6  | 0       | —                               | — (clean)        |
| TWA-1  | 1       | Missing skill name              | Medium           |
| TWA-2  | 1       | Fiction-researching             | Medium-High      |
| TWA-3  | 0       | —                               | — (clean)        |

### Top Priority Fixes

1. **E7-S1 (Al Rajhi Benchmarking):** Highest impact fix. Provide Al Rajhi benchmark data directly in the prompt as reference material instead of asking the agent to recall it. Add skill name. (2 defects: missing skill name + fiction-researching)

2. **E7-S4 (Green Sukuk SAMA ESG):** Reframe the SAMA ESG sub-question as analytical reasoning rather than factual recall about specific SAMA guidance. Add skill name. (2 defects: missing skill name + fiction-researching)

3. **TWA-2 (Al Rajhi Financial Statement Analysis):** Provide key reference data within the prompt or reframe questions 4-5 as reasoning exercises. (1 defect: fiction-researching)

4. **E7-S2, E7-S3, E7-S5 (Missing skill names):** Add natural skill name references following the "Use the Islamic Finance plugin to..." or "Use the `/if-zakat` command to..." pattern. (3 defects: missing skill name)

5. **TWA-1 (Missing skill name):** Add skill name to the primary Try With AI prompt. (1 defect: missing skill name)

### Strengths

- **Zero fabricated output blocks** — the lesson does not contain any fake agent output, which is the most critical defect type.
- **Zero inline data injection** — exercise data is correctly handled via the Exercise Requirements info box, not via in-prompt file references.
- **Zero narrative orphans** — no prose references specific numbers from fabricated content.
- **Correct terminology throughout** — "Cowork" used correctly, plugin references consistent with chapter conventions.
- **E7-S2 (ZATCA Zakat Computation)** is an exemplary prompt: provides all necessary data inline, specifies four concrete deliverables, and has verifiable numerical answers in "Check your work."
- **E7-S6 (Error Detection)** is strong pedagogically — deliberate errors with a well-defined expected correction.
- **TWA-1 (ZATCA vs Hanafi)** is the strongest Try With AI prompt: complete bank data, dual-framework comparison, structured deliverables.
- **"Check your work" section** provides concrete numerical verification anchors.

---

## Additional Observations (Outside Six Defect Types)

These are notable quality issues that fall outside the six defined defect types but affect prompt quality:

### Exercise Prompt Format Inconsistency

Exercise prompts (E7-S1 through E7-S6) use italic markdown (`_"..."_`) while Try With AI prompts use code blocks. Code blocks are more copyable. This is a chapter-wide convention, not specific to this lesson.

### E7-S5 Missing Input Data

The management accounts prompt (line 232) asks the agent to produce monthly accounts with five components but provides no financial data. The agent will invent all figures. This is a prompt quality issue (under-specification) but does not map to the six defined defect types.

### E7-S6 Answer Key Visible to Student

Step 6 (line 234) includes the answer explanation in the same paragraph as the prompt: "The bank omitted statutory reserves (should be added) and failed to deduct fixed assets and long-term investments..." This spoils the error-detection exercise. The answer should be in a collapsed `<details>` block or only in the "Check your work" section.

### Exercise Number Mismatch

The exercise data file is `ex06-saudi-ifi-alinma.md` but the lesson labels it "Practice Exercise 7." This numbering mismatch could confuse students.

---

## Overall Assessment

**Grade: B+**

The lesson is clean on the three most critical defect types (fabricated output, inline data injection, narrative orphans) and has correct terminology throughout. Its primary weaknesses are: (1) missing skill names across all exercise prompts — students do not know which plugin skill or command to invoke, and (2) fiction-researching prompts that ask the agent to recall specific Al Rajhi Bank financial statement details instead of providing that data as grounding material. The ZATCA zakat content is excellently handled with complete data, verifiable calculations, and strong pedagogical scaffolding.
