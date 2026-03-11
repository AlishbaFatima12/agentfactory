# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Chapter:** 20 — Islamic Finance Domain Agents
**Lesson:** 10 — Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi
**Date:** 2026-03-11
**Auditor:** lesson-prompt-improver skill (iteration 3, run 2)

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

**Overall assessment:** This lesson is in good shape. No critical fabricated output defects. The only defects are missing skill names on primary exercise and Try With AI prompts. There is also one minor labeling issue (an `**Output:**` label on a factual paragraph that is not agent output).

---

## Defect Details

### D1: Fabricated Agent Output — NONE FOUND

The lesson does not contain fabricated agent output blocks. Key observations:

- **Lines 177-179:** An `**Output:**` label precedes "Zakat is recognised as an expense in the Saudi IFI's income statement. It is filed with ZATCA annually, within 120 days of fiscal year-end." This is a factual accounting statement, NOT a fabricated agent output. However, the `**Output:**` label is misleading and could be mistaken for agent output. **Recommendation:** Change `**Output:**` to a more descriptive label like a paragraph without the label, or incorporate the text into the preceding section as a continuation of the accounting treatment explanation.
- **Lines 214-236 (Exercise Steps 1-6):** Prompts contain explicit data inputs (SAR 20B, SAR 4.5B, etc.) that the student provides — these are student-generated data inputs, which are an explicit exception per the skill rules.
- **Line 236 ("Check your work"):** Provides expected numerical answers for verification. This is an answer key, not fabricated output.

### D2: Missing Skill Name in Prompt — 2 INSTANCES

Per skill rules, primary exercise prompts (first prompt in exercise section) and Try With AI Prompt 1 should include the skill name. Follow-up prompts in a flow do not need skill names.

| Line Range | Current Content (first line) | Recommended Fix |
| --- | --- | --- |
| 214-216 | Step 1: "Ask your AI assistant: _Jurisdiction: Saudi Arabia..._" | Add skill name: "Use the islamic-finance-accounting skill to..." or reference the appropriate skill from the Islamic Finance Domain Agents plugin. Style: natural language, NOT `/skill-name`. |
| 244-270 | Try With AI Prompt 1: "Compare the ZATCA zakat calculation with the Hanafi/AAOIFI methodology..." | Add skill name at the start of the prompt code block: "Use the islamic-finance-accounting skill to compare the ZATCA zakat calculation..." |

**Note:** The exact skill name depends on the Islamic Finance Domain Agents plugin's skill roster (13 skills including a router). The jurisdiction-specific accounting analysis likely maps to either the router skill or a dedicated Saudi Arabia jurisdiction overlay. The content author should verify the correct skill name from the plugin's `skills/` directory.

Steps 2-6 and Try With AI Prompts 2-3 are follow-up prompts in their respective flows and do not require skill names per the rule (only primary/first prompts need them).

### D3: Inline Data Injection — NONE FOUND

No `Read demo-data.md`, `Read sales-marketing.local.md`, or `[Paste or reference the...]` patterns found. The exercise uses self-contained data with explicit values provided in the prompt text itself, plus a download reference to exercise data at line 203.

### D4: Fiction-Researching Prompt — NONE FOUND

All entities referenced in prompts are real:
- **Al Rajhi Bank** — real (world's largest Islamic bank, Tadawul-listed)
- **Alinma Bank** — real (Saudi Islamic bank, Tadawul-listed)
- **PIF** (Public Investment Fund) — real Saudi sovereign wealth fund
- **Saudi Electricity Company** — real (Tadawul-listed)
- **NHC** (National Housing Company) — real Saudi entity
- **ZATCA** — real Saudi government authority

No prompts ask the agent to "research" or "pull current data" on fictional entities.

### D5: Narrative Referencing Fabricated Content — NONE FOUND

No fabricated output blocks exist (D1 clean), so no orphaned narrative references.

### D6: Plugin/Tool Terminology — NONE FOUND

All terminology is correct:
- Line 202: "**Plugin:** Islamic Finance Domain Agents" — correct
- Line 210: "Cowork or Claude (any plan)" — correct (not "Claude in Excel")
- Line 240: "Use these prompts in Cowork or your preferred AI assistant" — correct
- No "Claude in Excel" references in this Ch 20 lesson (correct for Ch 18+)
- No "sales-marketing plugins" terminology

---

## Minor Issues (Not Defects)

### Misleading `**Output:**` Label (Line 177)

The `**Output:**` label at line 177 precedes a factual paragraph about zakat accounting treatment. This is lesson content, not agent output. The label pattern matches the D1 detection heuristic (`**Output:**` before content) and could confuse both auditing tools and students.

**Recommendation:** Remove the `**Output:**` label and integrate the sentence into the surrounding text, or replace it with a more descriptive heading. For example:

```markdown
# Before (line 177-179)
**Output:**

Zakat is recognised as an expense in the Saudi IFI's income statement...

# After
Zakat is recognised as an expense in the Saudi IFI's income statement...
```

---

## Recommended Fixes (Priority Order)

1. **[Medium]** Add skill name to Exercise Step 1 prompt (line 214-216)
2. **[Medium]** Add skill name to Try With AI Prompt 1 (line 244)
3. **[Low]** Remove misleading `**Output:**` label (line 177)

---

## Comparison to Ch 23 Baseline

This lesson is significantly cleaner than the Ch 23 lessons were before their rewrite. The Ch 23 lessons had:
- Multiple fabricated output blocks with specific fake metrics
- Missing skill names across all prompts
- Inline data injection patterns
- Fiction-researching prompts (NexaFlow fictional company)
- Orphaned narrative references to fabricated content

This Saudi Arabia lesson avoids all of those patterns. The exercise design is strong — prompts provide explicit data inputs and the "Check your work" section gives expected answers without fabricating agent-formatted output. The only gaps are the missing skill names on primary prompts.
