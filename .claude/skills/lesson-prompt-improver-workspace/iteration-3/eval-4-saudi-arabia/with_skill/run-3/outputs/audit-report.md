# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Chapter:** 20 — Islamic Finance Domain Agents
**Lesson:** 10 — Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi
**Audited by:** lesson-prompt-improver skill (iteration-3, run-3)
**Date:** 2026-03-11

---

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 0 | — |
| D2: Missing Skill Name in Prompt | 2 | Medium |
| D3: Inline Data Injection | 0 | — |
| D4: Fiction-Researching Prompt | 0 | — |
| D5: Narrative Referencing Fabricated Content | 0 | — |
| D6: Plugin/Tool Terminology | 0 | — |
| **Total** | **2** | **Medium** |

Additionally: 1 minor labelling issue (not a defect per skill definition, but noted for quality).

---

## Defect Details

### D2-1: Missing Skill Name — Exercise Step 1 (Line 214)

**Current content (first line):**
```
"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA. Based on publicly available information about Al Rajhi Bank's financial reporting..."
```

**Issue:** This is the first prompt in the exercise section (primary exercise prompt). Per the skill rules, primary exercise prompts should name the skill being used so students know which skill activates.

**Recommended fix:** Prepend the skill name in natural language style. The Islamic Finance Domain Agents plugin contains jurisdiction-specific skills — the prompt should reference the appropriate skill (e.g., the Saudi Arabia jurisdiction overlay or the IFRS benchmarking skill).

**Example:**
```
"Use the Islamic finance accounting skill. Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA. Based on publicly available information about Al Rajhi Bank's financial reporting..."
```

**Note:** The exact skill name depends on the plugin's skill architecture. The fix should reference the actual skill name from the Islamic Finance Domain Agents plugin.

---

### D2-2: Missing Skill Name — Try With AI Prompt 1 (Line 245)

**Current content (first line):**
```
Compare the ZATCA zakat calculation with the Hanafi/AAOIFI
methodology for the same Saudi Islamic bank.
```

**Issue:** Try With AI Prompt 1 should name the skill being used, per skill rules.

**Recommended fix:** Add skill name at the start:
```
Use the Islamic finance accounting skill to compare the ZATCA zakat
calculation with the Hanafi/AAOIFI methodology for the same
Saudi Islamic bank.
```

---

### Minor Issue: Misleading "Output:" Label (Line 177)

**Current content:**
```
**Output:**

Zakat is recognised as an expense in the Saudi IFI's income statement. It is filed with ZATCA annually, within 120 days of fiscal year-end.
```

**Issue:** The label `**Output:**` suggests this is showing agent output, but it is actually a factual statement about accounting treatment. This is NOT a fabricated output defect (no code block, no fake numbers, no pretend agent response), but the label could cause confusion during automated or rapid scanning.

**Recommended fix:** Relabel to clarify this is an accounting note, not agent output:
```
**Accounting treatment:**

Zakat is recognised as an expense in the Saudi IFI's income statement. It is filed with ZATCA annually, within 120 days of fiscal year-end.
```

---

## Defect-by-Defect Analysis

### D1: Fabricated Agent Output — CLEAN

No fabricated agent output found. All code blocks in the lesson are:
- **ZATCA formula** (lines 134-144): Framework definition — exception applies
- **Journal entries** (lines 165-175): Standard accounting entry templates — exception applies
- **Exercise prompts** (lines 216-234): Student-typed instructions with explicit parameters — exception applies (student-generated data)
- **Try With AI prompts** (lines 245-330): Student-typed prompts — these are inputs, not fabricated outputs

The "Check your work" section (line 236) contains specific calculated answers derived from the student's own input parameters. This is an answer key, not fabricated agent output.

### D2: Missing Skill Name — 2 DEFECTS

Per the skill rules, skill names should be added to:
1. **Primary exercise prompts** (first prompt in a section) — Step 1 is missing skill name
2. **Try With AI Prompt 1** — missing skill name

Steps 2-6 and Try With AI Prompts 2-3 are follow-ups and do NOT require skill names per the rule.

### D3: Inline Data Injection — CLEAN

No instances of "Read demo-data.md", "Read sales-marketing.local.md", or "[Paste or reference the...]" found. The lesson uses a zip file download for exercise data (line 203) and provides parameters directly in prompts.

### D4: Fiction-Researching Prompt — CLEAN

All entities referenced are real: Alinma Bank, Al Rajhi Bank, ZATCA, PIF, Saudi Electricity Company, SAMA, NHC. No prompts ask the agent to web-search fictional companies.

### D5: Narrative Referencing Fabricated Content — CLEAN

No fabricated output blocks exist (D1 clean), so no orphaned narrative references. The "Check your work" section references numbers that come from the student's own prompt parameters, which is pedagogically appropriate.

### D6: Plugin/Tool Terminology — CLEAN

- Line 202: "**Plugin:** Islamic Finance Domain Agents" — correct
- Line 210: "Cowork or Claude (any plan)" — correct (uses "Cowork", not "Claude in Excel")
- Line 240: "Use these prompts in Cowork or your preferred AI assistant" — correct per cowork-content.md
- No instances of "Claude in Excel" (correct for Ch 20)
- No instances of "sales-marketing plugins"

---

## Overall Assessment

This lesson is in **good shape** for prompt quality. The two D2 defects (missing skill names) are medium-severity and straightforward to fix. The minor "Output:" labelling issue is cosmetic. No critical defects (fabricated outputs) were found — the lesson uses real entities, provides calculation parameters directly in prompts, and includes an appropriate answer key.

**Priority:** Low. Fix the two D2 defects and the labelling issue when next editing this file. No urgent remediation needed.
