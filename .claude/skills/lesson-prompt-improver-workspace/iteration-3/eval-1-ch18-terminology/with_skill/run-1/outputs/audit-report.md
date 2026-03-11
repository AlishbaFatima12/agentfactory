# Audit Report: Ch18 L01 — The Coordinate Trap

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/18-intent-driven-financial-architecture/01-the-coordinate-trap.md`
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 0 | - |
| D2: Missing Skill Name | 0 | - |
| D3: Inline Data Injection | 0 | - |
| D4: Fiction-Researching Prompt | 0 | - |
| D5: Narrative Referencing Fabricated | 0 | - |
| D6: Plugin/Tool Terminology | 4 | Medium |
| **Total** | **4** | **Medium** |

## Defect Details

### D6-1: Line 95 (YAML teaching_tips)

**Current:**
```
"The Claude in Excel exercise makes the AI opacity symptom concrete"
```

**Recommended fix:**
```
"The Cowork exercise makes the AI opacity symptom concrete"
```

**Rationale:** This is Ch 18 content. The exercise it references is in this lesson's body and should use Cowork terminology. "Claude in Excel" is the Ch 17 product name; Ch 18+ uses "Cowork" per `.claude/rules/cowork-content.md`.

---

### D6-2: Line 143 (Lesson body — "Feel the Problem" section)

**Current:**
```
Open Claude in Excel (or your preferred AI assistant) and give it this formula:
```

**Recommended fix:**
```
Open Cowork (or your preferred AI assistant) and give it this formula:
```

**Rationale:** Ch 18 teaches Cowork-based workflows. "Claude in Excel" is a separate product taught in Ch 17.

---

### D6-3: Line 179 (Exercise section)

**Current:**
```
Ask Claude in Excel (or your preferred AI assistant) to explain what the formula calculates
```

**Recommended fix:**
```
Ask your AI assistant to explain what the formula calculates
```

**Rationale:** Same terminology issue. Since this prompt already offers "or your preferred AI assistant" as an alternative, the simplest fix is to use the generic phrasing. Alternatively: `"In Cowork (or your preferred AI assistant), ask it to explain..."`.

---

### D6-4: Line 189 (Try With AI header)

**Current:**
```
Use these prompts in Claude in Excel or your preferred AI assistant to explore this lesson's concepts.
```

**Recommended fix:**
```
Use these prompts in Cowork or your preferred AI assistant.
```

**Rationale:** This matches the exact pattern specified in `.claude/rules/cowork-content.md`: `"Use these prompts in Cowork or your preferred AI assistant."`. The trailing clause "to explore this lesson's concepts" is redundant — the Try With AI section heading already establishes this context.

## Items Reviewed but Clean

### D1: Fabricated Agent Output — CLEAN

The lesson contains no code blocks pretending to show agent output with fabricated numbers or scores. The formula example (`=B14-(C14*$F$8+D$3)`) is a teaching device — student input, not agent output. The narrative description of Claude's behavior (lines 149-151) describes expected agent behavior in prose, not in a fabricated output code block. This is the correct approach.

### D2: Missing Skill Name — CLEAN (N/A)

This is L01, a conceptual foundation lesson. No IDFA skills are invoked. The prompts ask Claude to perform generic tasks (explain formulas, identify symptoms) that don't map to a specific skill. No skill name is appropriate to add.

### D3: Inline Data Injection — CLEAN (N/A)

No `Read demo-data.md` or similar patterns. The lesson uses self-contained formula examples that don't require external data files.

### D4: Fiction-Researching Prompt — CLEAN (N/A)

No fictional companies are referenced. All prompts use generic, self-contained formula examples.

### D5: Narrative Referencing Fabricated Content — CLEAN (N/A)

No fabricated output blocks exist, so no orphaned narrative references.

## Borderline Case: Line 70

**Current (YAML cognitive_load.assessment):**
```
"Students enter from Chapter 17 with hands-on experience using Claude in Excel and Cowork"
```

**Verdict: ACCEPTABLE.** This is a legitimate cross-reference describing student prerequisites. It correctly names both products — "Claude in Excel" (the Ch 17 product) and "Cowork" (the Ch 18 product) — in a context that describes what students learned in the prior chapter. This is not a Ch 18 exercise instruction misusing "Claude in Excel"; it is an accurate description of the student's prior experience with two distinct tools.

## Recommendations

1. **Fix all 4 D6 defects** — straightforward terminology replacements.
2. **No structural changes needed** — the lesson's prompt architecture is sound. Prompts are self-contained, use real (generic) formula examples, and correctly avoid fabricated agent output.
3. **This lesson is a good reference** for how to handle "Feel the Problem" exercises — it describes expected agent behavior in prose rather than fabricating an output block.
