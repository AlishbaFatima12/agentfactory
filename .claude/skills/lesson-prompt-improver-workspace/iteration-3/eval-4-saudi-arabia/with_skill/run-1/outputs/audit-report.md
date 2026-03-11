# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Chapter:** 20 — Islamic Finance Domain Agents
**Lesson:** 10 — Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi
**Audit date:** 2026-03-11
**Auditor:** lesson-prompt-improver skill (iteration-3, run-1)

---

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 0 | — |
| D2: Missing Skill Name in Prompt | 4 | Medium |
| D3: Inline Data Injection | 0 | — |
| D4: Fiction-Researching Prompt | 0 | — |
| D5: Narrative Referencing Fabricated Content | 0 | — |
| D6: Plugin/Tool Terminology | 0 | — |
| **Total defects** | **4** | |

**Additional finding:** 1 misleading label (`**Output:**` on line 177) that mimics the fabricated output pattern but contains legitimate explanatory text. Not counted as a defect but recommended for cleanup.

---

## Defect Details

### D2: Missing Skill Name in Prompt (4 instances)

Per the skill rules, skill names should be added to **primary exercise prompts** (first prompt in exercise) and **all Try With AI primary prompts**. Follow-up prompts within a flow do not need skill names.

| # | Line Range | Location | Current Content (first line) | Recommended Fix |
| --- | --- | --- | --- | --- |
| 1 | 216 | Exercise 7 Step 1 (primary) | `"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA..."` | Add skill name: `"Use the saudi-arabia jurisdiction skill. Jurisdiction: Saudi Arabia..."` |
| 2 | 245-270 | Try With AI Prompt 1 (primary) | `"Compare the ZATCA zakat calculation with the Hanafi/AAOIFI..."` | Add skill name: `"Use the saudi-arabia jurisdiction skill to compare the ZATCA zakat calculation..."` |
| 3 | 277-302 | Try With AI Prompt 2 (primary) | `"Al Rajhi Bank is the world's largest Islamic bank by capital..."` | Add skill name: `"Use the saudi-arabia jurisdiction skill. Al Rajhi Bank is the world's largest..."` |
| 4 | 309-331 | Try With AI Prompt 3 (primary) | `"A Saudi Islamic bank is building its sukuk investment portfolio..."` | Add skill name: `"Use the saudi-arabia jurisdiction skill. A Saudi Islamic bank is building..."` |

**Note on skill name:** The Islamic Finance Domain Agents plugin uses a router skill with jurisdiction overlays. The appropriate skill reference for Saudi Arabia exercises should match the plugin's actual skill naming convention (e.g., `saudi-arabia` jurisdiction overlay). Verify the exact skill name against the plugin's `skills/` directory before applying fixes.

**Steps 2-6 are follow-ups** within the same exercise flow — no skill name needed per the rule "Don't add to every follow-up prompt in a flow."

---

### Additional Finding: Misleading `**Output:**` Label

| Line | Current | Recommendation |
| --- | --- | --- |
| 177 | `**Output:**` followed by explanatory text about zakat expense recognition | Replace `**Output:**` with a more accurate label such as `**Accounting treatment:**` or `**Recognition:**` to avoid confusion with fabricated agent output patterns |

This is not a defect per the six-type taxonomy but is a readability/consistency concern. The `**Output:**` label is the exact detection pattern for Defect 1 (fabricated agent output), and while the content itself is legitimate pedagogical explanation (not a fabricated code block), the label creates ambiguity during audits and could confuse students into thinking an agent produced this text.

---

## Defects NOT Found (Clean Areas)

### D1: Fabricated Agent Output — CLEAN

The lesson correctly uses:
- **Framework definitions** (ZATCA formula, lines 134-144) — defines the formula, not fake agent output
- **Template journal entries** (lines 165-175) — shows the accounting pattern
- **Student-provided input data** in prompts (Exercise Steps 2-5 contain specific numbers the student feeds to the agent)
- **Answer key** in "Check your work" section (line 236) — provides correct answers for self-verification

All of these are exceptions per the skill's exception list. No fabricated agent output blocks exist.

### D3: Inline Data Injection — CLEAN

No instances of `Read demo-data.md`, `Read sales-marketing.local.md`, or `[Paste or reference the...]` found. Exercise data is referenced via a download link (line 203) and specific numbers are embedded directly in prompts where needed.

### D4: Fiction-Researching Prompt — CLEAN

All entities referenced in prompts are real:
- **Al Rajhi Bank** — Tadawul-listed, world's largest Islamic bank
- **Alinma Bank** — Tadawul-listed Saudi Islamic bank
- **Saudi Electricity Company** — real issuer of green sukuk
- **PIF (Public Investment Fund)** — real Saudi sovereign wealth fund

Where prompts reference specific financial data for these real entities, the data is provided by the student in the prompt (e.g., "Share capital SAR 20B"), not discovered via web search. No fiction-researching risk.

### D5: Narrative Referencing Fabricated Content — CLEAN

No fabricated output blocks exist (D1 clean), so no orphaned narrative references.

### D6: Plugin/Tool Terminology — CLEAN

- Line 202: "Plugin" used correctly (it is a plugin)
- Line 210: "Cowork" used correctly
- Line 240: "Cowork or your preferred AI assistant" matches the recommended pattern from `cowork-content.md`
- No instances of "Claude in Excel" (correct for Ch 20)
- No incorrect terminology found

---

## Recommended Fix Order

1. **D2 fixes (4 instances):** Add skill name to Exercise 7 Step 1 and all three Try With AI prompts. Verify exact skill name against the Islamic Finance Domain Agents plugin's `skills/` directory first.
2. **Label cleanup (1 instance):** Replace `**Output:**` on line 177 with `**Accounting treatment:**` or similar.

**Estimated fix time:** 10 minutes (straightforward text additions).

---

## Overall Assessment

This lesson is in good shape. The prompt architecture follows correct patterns:
- Exercise data is student-provided (no fabricated outputs)
- Real entities are used throughout (no fiction-researching risk)
- Cowork terminology is correct
- No inline data injection

The only systematic defect is missing skill names on primary prompts (D2), which is a medium-severity issue affecting discoverability of the correct skill for students.
