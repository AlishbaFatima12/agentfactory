# Audit Report: Ch18 L01 — The Coordinate Trap

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/18-intent-driven-financial-architecture/01-the-coordinate-trap.md`
**Auditor**: Claude Opus 4.6 (without skill)
**Date**: 2026-03-11

---

## Summary Table of Issues Found

| #   | Issue                                                                   | Severity | Location                   | Category          |
| --- | ----------------------------------------------------------------------- | -------- | -------------------------- | ----------------- |
| 1   | "Claude in Excel" used where "Cowork" required                          | HIGH     | Line 143, 179, 189         | Terminology       |
| 2   | Teaching guide references "Claude in Excel"                             | MEDIUM   | Line 95 (YAML frontmatter) | Terminology       |
| 3   | Cognitive load assessment references "Claude in Excel and Cowork"       | LOW      | Line 70 (YAML frontmatter) | Terminology       |
| 4   | Fabricated agent output narrative in body text                          | MEDIUM   | Lines 149-153              | Prompt Quality    |
| 5   | Exercise prompt lacks "What you are learning" parity with other prompts | LOW      | Lines 172-185              | Prompt Quality    |
| 6   | No explicit skill/tool reference in exercise section                    | LOW      | Lines 172-185              | Missing Reference |
| 7   | Try With AI header says "Claude in Excel" instead of "Cowork"           | HIGH     | Line 189                   | Terminology       |

---

## Detailed Findings

### Issue 1 — "Claude in Excel" terminology in body text (HIGH)

**Location**: Line 143

```
Open Claude in Excel (or your preferred AI assistant) and give it this formula:
```

**Problem**: Per `.claude/rules/cowork-content.md`, Ch 18+ teaches Cowork, not "Claude in Excel." These are separate products. "Claude in Excel" is the Excel-specific assistant taught in Ch 17. This lesson is in Ch 18 (IDFA), which is a Cowork chapter. The parenthetical "(or your preferred AI assistant)" partially mitigates this, but the primary recommendation is wrong.

**Fix**: Replace with `Open Cowork (or your preferred AI assistant)` or use the canonical phrasing: `Use these prompts in Cowork or your preferred AI assistant.`

---

### Issue 2 — Teaching guide references "Claude in Excel" (MEDIUM)

**Location**: Line 95 (YAML frontmatter, teaching_tips)

```yaml
"The Claude in Excel exercise makes the AI opacity symptom concrete..."
```

**Problem**: Teaching guide metadata uses "Claude in Excel" to describe the exercise. While this is instructor-facing content not rendered to students, it reinforces incorrect terminology and could propagate to future content generation.

**Fix**: Change to `"The Cowork exercise makes the AI opacity symptom concrete..."`

---

### Issue 3 — Cognitive load assessment mixed terminology (LOW)

**Location**: Line 70 (YAML frontmatter, cognitive_load.assessment)

```yaml
assessment: "...Students enter from Chapter 17 with hands-on experience using Claude in Excel and Cowork..."
```

**Problem**: This line mentions both products together, which is acceptable as a cross-reference to Ch 17's product. However, the framing implies they are used interchangeably at the same level, which blurs the product boundary. This is the least severe of the terminology issues since it's a legitimate transitional reference.

**Fix**: Consider rewording to `"...Students enter from Chapter 17 with hands-on experience using spreadsheet AI tools; this lesson shifts..."` or leave as-is if the intent is to acknowledge both products explicitly.

---

### Issue 4 — Fabricated agent output narrative (MEDIUM)

**Location**: Lines 149-153

```
Watch what happens. Claude will describe the arithmetic accurately: "This formula
takes the value in B14, subtracts the product of C14 and F8, and then subtracts D3."
It may guess that B14 is revenue based on common spreadsheet layouts. But it cannot
tell you with confidence what the formula means...
```

**Problem**: The lesson predicts specific Claude output ("This formula takes the value in B14...") without marking it as an example or approximation. This is a fabricated output example — the actual agent response will vary based on model version, context window, and prompt framing. The quoted text presents a specific response as inevitable, which may not match what students actually see.

**Mitigating factor**: The text uses "will" rather than showing a formatted output block, and the pedagogical point (arithmetic confidence vs. business logic uncertainty) is valid regardless of exact wording.

**Fix**: Either (a) soften to "Claude will likely describe the arithmetic accurately — something like..." or (b) add a note: "Your exact output will differ, but the pattern will be consistent: high confidence on arithmetic, low confidence on business meaning."

---

### Issue 5 — Exercise section lacks "What you are learning" annotation (LOW)

**Location**: Lines 172-185

The "Exercise: Measure Formula Rot in a Real Model" section has a "What to look for" block but does not follow the same pedagogical pattern as the Try With AI prompts, which each have a "What you are learning" annotation. This is a minor inconsistency — the exercise is structurally different from the Try With AI prompts, so the different label is defensible, but the content under "What to look for" is more of a learning explanation than a verification checklist.

**Fix**: Optional. Could rename to "What you are learning" for consistency, or leave as-is since exercises and Try With AI prompts serve different pedagogical functions.

---

### Issue 6 — No explicit skill/tool reference in exercise (LOW)

**Location**: Lines 172-185

The exercise tells students to "Ask Claude in Excel (or your preferred AI assistant)" but does not reference any specific IDFA skill or plugin. For L01 this is acceptable — the lesson is pre-IDFA, establishing the problem before introducing the solution. No skill invocation is expected at this stage. However, the exercise does use the wrong product name (covered in Issue 1).

**Fix**: No skill reference needed for L01. Fix the product name per Issue 1.

---

### Issue 7 — Try With AI section header terminology (HIGH)

**Location**: Line 189

```
Use these prompts in Claude in Excel or your preferred AI assistant to explore...
```

**Problem**: The canonical phrasing from `.claude/rules/cowork-content.md` is: `Use these prompts in Cowork or your preferred AI assistant.` This line uses "Claude in Excel" instead of "Cowork."

**Fix**: Replace with `Use these prompts in Cowork or your preferred AI assistant to explore this lesson's concepts.`

---

## Issues NOT Found (Positive Observations)

1. **No phantom component imports** — The file correctly uses `<Flashcards />` without an import statement, which is the correct pattern (sidecar `.flashcards.yaml` file).
2. **YAML frontmatter is complete** — All required fields present: skills, learning_objectives, cognitive_load, differentiation, teaching_guide.
3. **Three Try With AI prompts** — Meets the content quality checklist requirement. Each has a "What you are learning" annotation.
4. **Prompts are well-structured** — Each prompt is in a code block, copyable, with clear numbered instructions. No redundant data injection.
5. **No fabricated statistics** — The lesson avoids specific numbers/dates that would require fact-checking. Claims are structural/conceptual.
6. **Progressive disclosure** — The lesson correctly defers IDFA methodology to later lessons and only establishes the problem.

---

## Prioritized Recommendations

### Priority 1 — Fix "Claude in Excel" to "Cowork" (3 locations in body text)

Lines 143, 179, 189. These are student-facing content in a Cowork chapter. The terminology rule is explicit and these are clear violations.

**Suggested replacements**:

| Line | Current                                                               | Replacement                                                  |
| ---- | --------------------------------------------------------------------- | ------------------------------------------------------------ |
| 143  | `Open Claude in Excel (or your preferred AI assistant)`               | `Open Cowork (or your preferred AI assistant)`               |
| 179  | `Ask Claude in Excel (or your preferred AI assistant)`                | `Ask Cowork (or your preferred AI assistant)`                |
| 189  | `Use these prompts in Claude in Excel or your preferred AI assistant` | `Use these prompts in Cowork or your preferred AI assistant` |

### Priority 2 — Fix teaching guide terminology (1 location in YAML)

Line 95. Instructor-facing but reinforces wrong terminology.

### Priority 3 — Soften fabricated output prediction

Line 149-153. Add hedging language or a variability note so students aren't surprised when their output differs.

### Priority 4 — Evaluate cognitive load assessment wording

Line 70. Lowest priority — the cross-reference to Ch 17 is arguably valid. Decide based on whether the editorial intent is to acknowledge the Ch 17 product or to suggest both are used in Ch 18.

---

## Summary

The lesson is structurally sound — complete YAML frontmatter, three well-designed Try With AI prompts, good progressive disclosure, and no phantom imports or fabricated statistics. The primary issue is **terminology**: "Claude in Excel" appears 4 times where "Cowork" is required per project rules. This is consistent with the known terminology debt documented in `.claude/rules/cowork-content.md` (Ch 18 L01-L02 flagged as having ~12 occurrences across 4 files). Three of the four occurrences are high-priority student-facing fixes. The fabricated output narrative is a secondary concern that could be addressed with minor hedging language.
