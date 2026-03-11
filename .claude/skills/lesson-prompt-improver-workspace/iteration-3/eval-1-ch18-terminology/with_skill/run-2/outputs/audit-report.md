# Audit Report: Ch18 L01 — The Coordinate Trap

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/18-intent-driven-financial-architecture/01-the-coordinate-trap.md`
**Skill used**: `lesson-prompt-improver`
**Audit scope**: All 6 defect types, priority order

---

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 0 | — |
| D2: Missing Skill Name | 0 (N/A) | — |
| D3: Inline Data Injection | 0 | — |
| D4: Fiction-Researching Prompt | 0 | — |
| D5: Narrative Referencing Fabricated | 0 | — |
| D6: Plugin/Tool Terminology | 4 | Medium |

**Total defects: 4** (all terminology)

---

## Defect Details

### D6: Plugin/Tool Terminology — "Claude in Excel" used in Ch18 Cowork chapter

Per `.claude/rules/cowork-content.md`, Ch18+ is a Cowork chapter. "Claude in Excel" is a separate product taught in Ch17. All references in Ch18 should say "Cowork" unless they are explicit cross-references to the Ch17 product.

| # | Line | Current Content | Recommended Fix |
| --- | --- | --- | --- |
| 1 | 95 | `"The Claude in Excel exercise makes the AI opacity symptom concrete"` | Change to `"The Cowork exercise makes the AI opacity symptom concrete"` |
| 2 | 143 | `Open Claude in Excel (or your preferred AI assistant)` | Change to `Open Cowork (or your preferred AI assistant)` |
| 3 | 179 | `Ask Claude in Excel (or your preferred AI assistant)` | Change to `Ask Cowork (or your preferred AI assistant)` |
| 4 | 189 | `Use these prompts in Claude in Excel or your preferred AI assistant` | Change to `Use these prompts in Cowork or your preferred AI assistant` |

**Note on line 70** (YAML frontmatter `cognitive_load.assessment`): The text `"Students enter from Chapter 17 with hands-on experience using Claude in Excel and Cowork"` correctly names both products in the context of describing what students bring from Ch17. This is a legitimate cross-reference and does NOT need fixing.

---

## Defect-by-Defect Analysis

### D1: Fabricated Agent Output — CLEAN

The lesson contains five code blocks:
- Lines 111-113: Formula example (`=B14-(C14*$F$8+D$3)`) — student input, not agent output
- Lines 145-147: Same formula repeated for the exercise — student input
- Lines 193-206: Try With AI Prompt 1 — prompt block (student types this)
- Lines 211-232: Try With AI Prompt 2 — prompt block
- Lines 238-253: Try With AI Prompt 3 — prompt block

None contain fabricated agent output with specific numbers, scores, or decorated report formatting. The lesson deliberately avoids showing "what Claude will say" and instead tells students to observe the response themselves (lines 149-153).

### D2: Missing Skill Name — NOT APPLICABLE

This is L01, a conceptual introduction lesson. No Cowork plugin skills exist at this point in the chapter progression — students have not installed any plugins yet. The exercises ask students to interact with a general-purpose AI assistant to explore coordinate formulas, not to invoke a specific skill. The YAML frontmatter `skills` entries are pedagogical metadata (Bloom's taxonomy classifications), not Cowork plugin skills that would be invoked with `/skill-name`.

Adding a skill name here would be incorrect — there is no skill to reference.

### D3: Inline Data Injection — CLEAN

No `Read demo-data.md`, `Read sales-marketing.local.md`, or `[Paste or reference the...]` patterns found. The lesson uses self-contained formula examples.

### D4: Fiction-Researching Prompt — CLEAN

No prompts ask students to research fictional companies. The exercise on line 172-185 asks students to use their own real models, and the Try With AI prompts use self-contained formula examples.

### D5: Narrative Referencing Fabricated Content — CLEAN

No fabricated output blocks exist, so no orphaned narrative references. Lines 149-153 use predictive language ("Watch what happens. Claude will describe...") which is appropriate pedagogical guidance about what to observe, not references to specific fabricated content.

---

## Recommended Fix Sequence

1. Fix all 4 D6 terminology issues (lines 95, 143, 179, 189) — replace "Claude in Excel" with "Cowork"
2. No other fixes needed

**Estimated effort**: < 5 minutes (four string replacements)

---

## Context Notes

- The `part3-chapters.md` reference file notes Ch18 as "NOT STARTED" for audit, with "L03-L12 terminology fixed". This means L01-L02 and L13+ were not included in the previous terminology pass.
- This lesson is a clean conceptual introduction with well-structured prompts. The only issue is the terminology debt from before the Cowork naming convention was established.
- Line 95 is in hidden YAML frontmatter (`teaching_guide.teaching_tips`), so it is not student-facing but should still be corrected for consistency.
