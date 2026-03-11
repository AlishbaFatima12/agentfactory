# Audit Report: Ch18 L01 — The Coordinate Trap

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/18-intent-driven-financial-architecture/01-the-coordinate-trap.md`
**Audited with**: `lesson-prompt-improver` skill (6 defect types)
**Date**: 2026-03-11

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 0 | -- |
| D2: Missing Skill Name in Prompt | 0 | -- |
| D3: Inline Data Injection | 0 | -- |
| D4: Fiction-Researching Prompt | 0 | -- |
| D5: Narrative Referencing Fabricated Content | 0 | -- |
| D6: Plugin/Tool Terminology | 5 | Medium |
| **Total** | **5** | **Medium** |

## Defect Details

### D6-1: "Claude in Excel" in teaching_guide (line 95)

**Line 95** (YAML frontmatter, teaching_tips):
```
"The Claude in Excel exercise makes the AI opacity symptom concrete — students see the agent struggle in real time, which is more persuasive than any explanation"
```

**Issue**: Ch18 is a Cowork chapter. Per `.claude/rules/cowork-content.md`, "Claude in Excel" and "Cowork" are separate products. Ch17 correctly uses "Claude in Excel" because that chapter teaches that product. Ch18+ must use "Cowork" when referring to the working environment.

**Recommended fix**:
```
"The Cowork exercise makes the AI opacity symptom concrete — students see the agent struggle in real time, which is more persuasive than any explanation"
```

---

### D6-2: "Claude in Excel" in cognitive_load assessment (line 70)

**Line 70** (YAML frontmatter, cognitive_load.assessment):
```
"Students enter from Chapter 17 with hands-on experience using Claude in Excel and Cowork; this lesson shifts from examining the structural flaw..."
```

**Issue**: This line mentions both "Claude in Excel" and "Cowork" — which is actually a legitimate cross-reference to Ch17's product alongside Cowork. However, the phrasing implies the student uses "Claude in Excel" as a current tool alongside Cowork. Since Ch18 is a Cowork chapter, the preferred framing would clarify that students are transitioning FROM Claude in Excel (Ch17) TO Cowork-based workflows.

**Recommended fix**:
```
"Students enter from Chapter 17 with hands-on experience using Claude in Excel; this lesson shifts to the Cowork environment to examine the structural flaw..."
```

**Note**: This is a borderline case. The original phrasing could be read as a legitimate cross-reference ("experience using [Ch17 tool] and [Ch18 tool]"). The fix makes the transition explicit. Severity: Low.

---

### D6-3: "Claude in Excel" in exercise instructions (line 143)

**Line 143** (body text, section "Feel the Problem"):
```
Open Claude in Excel (or your preferred AI assistant) and give it this formula:
```

**Issue**: This is the primary exercise instruction. Ch18 should direct students to Cowork, not Claude in Excel. The "(or your preferred AI assistant)" parenthetical follows the wrong product name.

**Recommended fix** (per cowork-content.md pattern):
```
Open Cowork (or your preferred AI assistant) and give it this formula:
```

---

### D6-4: "Claude in Excel" in exercise instructions (line 179)

**Line 179** (body text, exercise "Measure Formula Rot in a Real Model"):
```
Ask Claude in Excel (or your preferred AI assistant) to explain what the formula calculates...
```

**Issue**: Same pattern as D6-3. Exercise instruction names the wrong product for Ch18.

**Recommended fix**:
```
Ask Cowork (or your preferred AI assistant) to explain what the formula calculates...
```

---

### D6-5: "Claude in Excel" in Try With AI header (line 189)

**Line 189** (Try With AI section header text):
```
Use these prompts in Claude in Excel or your preferred AI assistant to explore this lesson's concepts.
```

**Issue**: The Try With AI setup line names the wrong product. Per cowork-content.md, the correct pattern for Ch18+ is: `"Use these prompts in Cowork or your preferred AI assistant."`

**Recommended fix**:
```
Use these prompts in Cowork or your preferred AI assistant to explore this lesson's concepts.
```

---

## Defects NOT Found (Clean Areas)

### D1: Fabricated Agent Output — CLEAN

No code blocks in this lesson pretend to show exact agent output with specific fake numbers. The lesson uses a formula example (`=B14-(C14*$F$8+D$3)`) as a pedagogical input, not a fabricated output. The narrative describes what the agent *would* do in general terms ("Claude will describe the arithmetic accurately") without presenting a mock output block. This is correct design.

### D2: Missing Skill Name in Prompt — NOT APPLICABLE

This is Lesson 1 (conceptual foundation). No domain skills are being invoked in the prompts. The prompts ask Claude to analyze formulas — this is a general capability, not a skill-specific invocation. No skill name is warranted.

### D3: Inline Data Injection — CLEAN

No prompts contain `Read demo-data.md` or similar injection patterns. This lesson uses self-contained formula examples rather than referencing external data files.

### D4: Fiction-Researching Prompt — CLEAN

No prompts ask the agent to research fictional companies. The formulas are generic coordinate examples, not tied to fictional entities.

### D5: Narrative Referencing Fabricated Content — CLEAN

No paragraphs reference specific numbers or scores from a fabricated output block (since no fabricated outputs exist in this lesson).

## Recommendations

1. **Fix all 5 D6 instances** — Replace "Claude in Excel" with "Cowork" in lines 95, 70, 143, 179, and 189. This is a straightforward terminology fix aligned with the cowork-content.md rule that Ch18+ uses "Cowork."

2. **Line 70 requires judgment** — The cognitive_load assessment mentions both products. The fix should clarify the Ch17-to-Ch18 transition rather than simply replacing one product name, since students genuinely did use Claude in Excel in Ch17.

3. **No structural prompt issues** — The lesson's prompt architecture is sound. The three Try With AI prompts are well-designed: each targets a different skill (formula interpretation, symptom identification, audit chain tracing), each has a clear "What you are learning" explanation, and none contain fabricated outputs.

## Compliance with Cowork Content Rules

| Rule | Status |
| --- | --- |
| "Cowork" not "Claude in Excel" for Ch18+ | FAIL (5 violations) |
| Exercise pattern: Prompt -> Verify -> Extend | PARTIAL (exercise at line 172 follows this; Try With AI prompts are standalone analysis prompts, appropriate for L01 conceptual lesson) |
| Named Ranges verification via prompts | N/A (L01 does not use Named Ranges yet) |
| Plugin setup in chapter README, not lessons | N/A (no plugin referenced in L01) |
| Skill invocation format | N/A (no skills invoked in L01) |
