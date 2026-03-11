# Prompt Quality Audit Report

**Lesson:** Ch17 L04 — From Assistant to Agent: Cowork Finance Plugins
**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/17-finance-domain-agents/04-from-assistant-to-agent.md`
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11
**Context:** Ch17 lesson. "Claude in Excel" is the CORRECT product name for Ch17's embedded assistant. This lesson teaches the architectural shift from Claude in Excel to Cowork, so both terms are used intentionally.

---

## Summary Table

| Line Range | Defect Type                              | Current Content                                                                                    | Recommended Fix                                             |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 213-219    | 1 — Fabricated Agent Output (BORDERLINE) | Reconciliation table with specific dollar amounts ($2,180, $840, $400) presented as command output | See detailed analysis — recommend KEEP with minor reframing |

**Total defects found: 0 actionable (1 borderline, assessed as acceptable)**

---

## Detailed Analysis by Defect Type

### Defect 1: Fabricated Agent Output — BORDERLINE / CLEAN

**Lines examined:** 200-254 (Worked Example: The Month-End Close), 213-219 (reconciliation table)

**Candidate:** The reconciliation table at lines 213-219 shows specific reconciling items with exact dollar amounts:

```
| Item                                        | Category                   | Amount | Action Required              |
| ------------------------------------------- | -------------------------- | ------ | ---------------------------- |
| 4 checks issued in March, clearing in April | Timing difference          | $2,180 | None -- resolves next period |
| 2 bank service charges not posted to GL     | Error requiring correction | $840   | Journal entry needed         |
| 1 unidentified deposit                      | Requires investigation     | $400   | Research before Day 5        |
```

**Assessment: KEEP — not a defect.** Three factors justify this:

1. **Student-generated data exception applies.** The practice data prompt (lines 139-154) explicitly seeds the $3,420 discrepancy. The reconciliation table items ($2,180 + $840 + $400 = $3,420) are internally consistent with data the student told the agent to create. This matches the skill's exception: "Student-generated data: Output from prompts where the student explicitly tells the agent what data to generate (the prompt contains the parameters)."

2. **Cohesive worked example, not isolated output block.** The table is embedded within a 7-day worked example narrative (lines 200-254) that tells a single coherent story. It is NOT preceded by "Output:" or "Sample Output:". It flows naturally as part of the teaching narrative. The numbers serve the story — the $840 bank charges become the Day 4 journal entry, the $400 unidentified item becomes the Day 5 blocker. Removing specifics would destroy the narrative thread.

3. **Framework-adjacent purpose.** The table primarily teaches reconciling item categories (timing difference, error, investigation required) and the action required for each. The specific dollar amounts are secondary to the structural teaching point. It functions closer to a framework table than a fabricated agent report.

**Risk if left as-is:** Low. Students who run `/reconciliation` on their practice data will get different exact categorizations, but the structural pattern (timing differences, errors, investigation items) will match. The lesson does not say "you will see this exact output" — it says "The $3,420 discrepancy breaks down as:" within a narrative walkthrough.

**If tightening were desired (optional, not recommended):** Add a single sentence after line 219: _"Your reconciliation output will show the same total discrepancy but may categorise individual items differently — focus on the categories, not the exact line items."_ This would cost 1 line and add minimal value given the existing narrative framing.

---

### Defect 2: Missing Skill Name in Prompt — CLEAN

**Lines examined:** All prompt blocks (128-130, 139-154, 209, 224-225, 233, 239, 249, 304-322, 328-345, 351-368)

**Finding:** No defects. All exercise prompts use explicit slash commands (`/reconciliation`, `/journal-entry`, `/variance-analysis`, `/income-statement`, `/sox-testing`), which ARE the skill/command invocations. The skill's detection pattern targets prompts starting with generic verbs without naming the skill — none of this lesson's exercise prompts match that pattern.

The Try With AI prompts (Prompts 1-3) are conceptual exploration prompts, not skill-invocation exercises. Prompt 1 asks about plugin architecture. Prompt 2 asks for a workflow walkthrough. Prompt 3 gives the student a scenario to work through. These appropriately omit skill names because they test understanding, not command execution.

The practice data generation prompt (lines 139-154) is a general-purpose data creation task. No specific skill applies — the student is asking Claude to create spreadsheets. No skill name needed.

---

### Defect 3: Inline Data Injection — CLEAN

**Lines examined:** All prompt blocks

**Finding:** No instances of "Read demo-data.md", "Read sales-marketing.local.md", or "[Paste or reference the...]" found anywhere in the lesson. This lesson uses a different data pattern: students generate practice data into a connected Cowork folder (lines 136-156), and commands read from that folder. There are no folder-instruction-based data injection references to remove.

---

### Defect 4: Fiction-Researching Prompt — CLEAN

**Lines examined:** All prompt blocks and exercise instructions

**Finding:** No prompts ask the agent to "research" or "pull current data" on fictional entities. The lesson works with either student-generated practice data (created in the connected folder) or live ERP data. All entity references are generic ("a mid-market company," "the March close") rather than named fictional companies.

---

### Defect 5: Narrative Referencing Fabricated Content — CLEAN (conditional on Defect 1 assessment)

**Lines examined:** 220, 227-228, 236

**Finding:** Several narrative lines reference specific numbers from the worked example:

- Line 220: "The close-management skill flags the $400 unidentified item as a blocker"
- Line 228: "debit Bank Charges Expense $840, credit Cash -- USD Operating $840"
- Line 236: "$35K below budget" and "7% due to promotional discounting in one product line"

**Assessment: CLEAN.** Since the Defect 1 candidate (reconciliation table) was assessed as acceptable, these narrative references are not orphaned. They are part of the same cohesive 7-day worked example. The numbers flow naturally through the story: $3,420 discrepancy decomposes into items, the $840 error becomes a journal entry, the $400 item becomes a blocker. If the reconciliation table were ever converted to an intent table, these narrative lines WOULD need generalization — but that conversion is not recommended.

---

### Defect 6: Plugin/Tool Terminology — CLEAN

**Lines examined:** All 60+ occurrences of "Claude in Excel," "Cowork," and "plugin" across the file

**Finding:** Terminology is correct throughout. Specific observations:

- **"Claude in Excel" used correctly** in contexts describing the embedded assistant product (lines 5, 32, 52, 83, 95, 108). These describe what students used in L01-L03 (the Excel sidebar experience). This is the correct product name for Ch17.

- **"Cowork" used correctly** in contexts describing the orchestrating agent platform (lines 4, 8, 106, 110, 112, 113, 116, 117, 119, 124, 160, 167, 258, 268, 274, 288, 300, 305, 317, 324, 330, 347). This lesson introduces Cowork as the scope expansion.

- **Both terms used together correctly** in the assistant-to-agent comparison (lines 32, 52, 83, 95, 98-99). The lesson's entire pedagogical point is the contrast between these two products.

- **"plugin" used correctly** to refer to the `knowledge-work-plugins/finance` package (lines 9, 117, 167, 172, 185, 202, 296). No incorrect references to "sales-marketing plugins" or other wrong terminology.

- **No "Claude in Excel (via Cowork)" or other hybrid terms** found. The lesson cleanly distinguishes the two products.

---

## Content Correctly Excluded from Audit

The following content was examined and correctly excluded per skill exceptions:

| Content                                     | Lines                       | Exclusion Reason                                                              |
| ------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------- |
| Five Commands table                         | 174-181                     | **Framework table** — defines the command structure, not fabricated output    |
| Skills vs Commands info box                 | 162-168                     | **Framework definition** — explains the conceptual distinction                |
| Category Placeholders info box              | 184-186                     | **Framework definition** — explains the abstraction pattern                   |
| GL Reconciliation explainer                 | 188-193                     | **Domain knowledge reference** — defines categories of reconciling items      |
| Month-End Close explainer                   | 194-198                     | **Domain knowledge reference** — defines close phases                         |
| Practice data generation prompt             | 139-154                     | **Student input** — prompt block (input, not output) with explicit parameters |
| All `/command` exercise prompts             | 209, 224-225, 233, 239, 249 | **Prompt blocks** — instructions the student types (inputs)                   |
| Try With AI prompts 1-3                     | 304-322, 328-345, 351-368   | **Prompt blocks** — conceptual exploration inputs                             |
| Reconciliation categories in worked example | 213-219                     | **Student-generated data** — amounts trace to seeded practice data parameters |

---

## Priority-Ordered Recommendations

1. **No mandatory changes required.** The lesson is clean across all six defect types. The single borderline item (Defect 1, reconciliation table) is justified by the student-generated data exception and its role in a cohesive worked example.

2. **Optional enhancement (low priority):** If the team wants extra safety against students expecting exact output from `/reconciliation`, add a one-line disclaimer after the reconciliation table (line 219):

   > _Your reconciliation output will show the same total discrepancy but may categorise individual items differently — the categories (timing, error, investigation) are the teaching point, not the specific line items._

   This is a belt-and-suspenders addition, not a defect fix.

3. **No terminology changes needed.** All "Claude in Excel" and "Cowork" references are correctly scoped for Ch17 L04's pedagogical purpose (teaching the architectural shift between the two products).

---

## Audit Metadata

- **Defects found:** 0 actionable, 1 borderline (assessed as acceptable)
- **Lines audited:** 379 (full file)
- **Prompt blocks examined:** 9
- **Framework tables excluded:** 2
- **Domain knowledge blocks excluded:** 2
- **Terminology instances checked:** 60+
