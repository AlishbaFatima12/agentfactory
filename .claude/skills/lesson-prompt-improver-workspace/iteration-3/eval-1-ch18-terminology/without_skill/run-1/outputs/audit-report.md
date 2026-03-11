# Audit Report: Ch18 L01 — The Coordinate Trap

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/18-intent-driven-financial-architecture/01-the-coordinate-trap.md`

**Auditor**: Claude (without skill)
**Date**: 2026-03-11

---

## Summary

5 terminology violations found. 0 fabricated outputs. 0 inline data injection issues. 0 fiction-researching prompts. 0 missing skill names (lesson is pre-skill, L01). 1 narrative reference concern (minor).

**Overall severity**: Medium — the lesson content and pedagogy are sound, but 4 of 5 "Claude in Excel" references in body/exercise text violate the Cowork terminology rule for Ch 18+. One reference in YAML metadata is contextually correct (cross-reference to Ch 17 product).

---

## Issue 1: Terminology — "Claude in Excel" used where "Cowork" required (4 violations)

**Rule violated**: `.claude/rules/cowork-content.md` — Ch 18+ must use "Cowork", not "Claude in Excel". The two are separate products. Ch 17 teaches Claude in Excel; Ch 18+ teaches Cowork-based workflows.

### Violation 1a — Line 95 (teaching_guide > teaching_tips)

```
"The Claude in Excel exercise makes the AI opacity symptom concrete..."
```

**Should be**: "The Cowork exercise makes the AI opacity symptom concrete..."

### Violation 1b — Line 143 (body text, "Feel the Problem" section)

```
Open Claude in Excel (or your preferred AI assistant) and give it this formula:
```

**Should be**: "Open Cowork (or your preferred AI assistant) and give it this formula:"

### Violation 1c — Line 179 (Exercise section, step 2)

```
Ask Claude in Excel (or your preferred AI assistant) to explain...
```

**Should be**: "Ask Cowork (or your preferred AI assistant) to explain..."

### Violation 1d — Line 189 (Try With AI intro)

```
Use these prompts in Claude in Excel or your preferred AI assistant to explore this lesson's concepts.
```

**Should be**: "Use these prompts in Cowork or your preferred AI assistant to explore this lesson's concepts."

(The cowork-content rule specifies the exact phrasing: `"Use these prompts in Cowork or your preferred AI assistant."`)

### Contextually Correct Reference — Line 70 (YAML cognitive_load > assessment)

```
"Students enter from Chapter 17 with hands-on experience using Claude in Excel and Cowork"
```

This is a legitimate cross-reference to the Ch 17 product alongside Cowork. Both product names are correctly used here — Claude in Excel refers to the Ch 17 tool, and Cowork refers to the Ch 18 tool. **No change needed.**

---

## Issue 2: Fabricated Agent Outputs — None Found

The lesson does not include any fabricated/pre-written agent responses. The prompts in "Try With AI" ask students to run them live and observe the results. The "What you are learning" sections describe expected behavior patterns (e.g., "The agent will describe the arithmetic with high confidence and the business logic with low confidence") but do not fabricate specific agent text. This is the correct approach.

---

## Issue 3: Missing Skill Names — N/A

This is Lesson 1 of the chapter. Per the cowork-content rules, L01-L02 are conceptual/introductory lessons. Skill invocation (auto-activation or explicit) begins at L03. No skill references are expected or required in this lesson.

---

## Issue 4: Inline Data Injection — None Found

The prompts use generic formula examples (`=B14-(C14*$F$8+D$3)`, `=SUM(B4:B15)`, etc.) that are self-contained within the prompt text. No external data files are injected inline. The exercise ("Measure Formula Rot in a Real Model") correctly asks students to use their own models rather than fabricating sample data.

---

## Issue 5: Fiction-Researching Prompts — None Found

All three Try With AI prompts ask students to analyze formulas (either provided generics or from their own models). None ask the agent to research or generate fictional case studies, company data, or industry statistics.

---

## Issue 6: Narrative Referencing Fabricated Content — Minor Concern

**Line 151**: "Watch what happens. Claude will describe the arithmetic accurately..."

This paragraph predicts agent behavior without fabricating specific output text. It describes the expected pattern (arithmetic confidence vs. business-rule hedging) rather than quoting fabricated agent responses. This is acceptable but borderline — if Claude's behavior changes, this paragraph could become inaccurate. **No action required**, but worth noting for future review.

---

## Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **High** | 4x "Claude in Excel" terminology violations (lines 95, 143, 179, 189) | Replace with "Cowork" per cowork-content.md rules |
| **None** | Line 70 cross-reference to Ch 17 | Keep as-is — legitimate dual-product reference |
| **Low** | Line 151 predicted agent behavior | Monitor for accuracy; no immediate action |

---

## Checklist Summary

| Check | Result | Details |
|-------|--------|---------|
| Fabricated agent outputs | PASS | No pre-written agent responses |
| Missing skill names | N/A | L01 is pre-skill lesson |
| Inline data injection | PASS | Formulas are self-contained examples |
| Fiction-researching prompts | PASS | All prompts analyze provided/student formulas |
| Narrative references fabricated content | PASS (minor note) | Predicts behavior patterns, does not fabricate quotes |
| Terminology (Cowork vs Claude in Excel) | **FAIL** | 4 violations in body/exercises/Try With AI |
