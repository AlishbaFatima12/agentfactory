# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/17-finance-domain-agents/04-from-assistant-to-agent.md`
**Chapter:** 17 — Finance Domain Agents
**Lesson:** 04 — From Assistant to Agent: Cowork Finance Plugins
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 1 (borderline) | Low — mitigated by student-seeded data |
| D2: Missing Skill Name | 0 | — |
| D3: Inline Data Injection | 0 | — |
| D4: Fiction-Researching Prompt | 0 | — |
| D5: Narrative Referencing Fabricated | 1 (conditional on D1) | Low |
| D6: Plugin/Tool Terminology | 0 | — |

**Overall assessment:** This lesson is largely clean. The one borderline defect involves a worked-example table whose numbers are partially student-seeded but partially fabricated in their breakdown.

## Detailed Findings

### D1: Fabricated Agent Output — BORDERLINE (Lines 212–219)

**Current content (lines 212–219):**

```markdown
Claude reads the bank statement and trial balance from your connected folder (or queries your ERP if connected), runs the reconciliation against the GL, and produces a structured workpaper. The $3,420 discrepancy breaks down as:

| Item                                        | Category                   | Amount | Action Required              |
| ------------------------------------------- | -------------------------- | ------ | ---------------------------- |
| 4 checks issued in March, clearing in April | Timing difference          | $2,180 | None -- resolves next period |
| 2 bank service charges not posted to GL     | Error requiring correction | $840   | Journal entry needed         |
| 1 unidentified deposit                      | Requires investigation     | $400   | Research before Day 5        |
```

**Analysis:**

The practice data prompt (lines 139–154) seeds the following:
- Total discrepancy: $3,420 (explicit)
- Category types: timing differences, a bank charge not posted to GL, one unidentified item (explicit)
- Specific amounts per item ($2,180, $840, $400): NOT seeded — fabricated
- Specific counts (4 checks, 2 bank charges): NOT seeded — fabricated

The student's prompt tells Claude to create data with a $3,420 discrepancy and to include "timing differences, a bank charge not yet posted to the GL, and one unidentified item." The categories are therefore student-determined, but the exact item count and dollar breakdown are fabricated. The agent could produce different breakdowns that still sum to $3,420.

**Verdict:** Borderline D1. The skill's exception for "student-generated data" partially applies (the categories and total are seeded) but the specific breakdown is fabricated. This is a **low-severity** finding because:
1. The table is in a narrative "Worked Example" section, not an exercise output
2. Students will generate their own data and see their own breakdown
3. The teaching point is the categorisation pattern, not the specific numbers

**Recommended fix (optional):** Convert to an intent table with a note:

```markdown
**What to expect:** The reconciliation workpaper categorises each discrepancy. Your breakdown will reflect your practice data, but look for these categories:

| Category               | Intent                                        | What to Verify                                              |
| ---------------------- | --------------------------------------------- | ----------------------------------------------------------- |
| Timing differences     | Items that will resolve in the next period     | Confirm these are genuinely timing-related, not errors      |
| Errors                 | Items requiring correcting journal entries     | Verify the account and amount before drafting the entry     |
| Items needing research | Unexplained items requiring investigation      | These must be resolved before close activities can proceed  |

:::note Your output will vary
The specific items, counts, and amounts depend on the practice data Claude generated for you. The total should match the $3,420 discrepancy you specified. Focus on whether the categorisation is correct, not whether the exact numbers match this example.
:::
```

**Trade-off:** The current version reads better as a narrative walkthrough. Converting to an intent table would make it more accurate but less engaging as a story. Given that this is a "Worked Example" (not an exercise output block), the current approach is defensible.

### D5: Narrative Referencing Fabricated Content — CONDITIONAL (Lines 219–220, 228)

**Dependent on D1 disposition.** If the D1 table is kept as-is (accepted under the student-seeded exception), then these narrative references are acceptable:

- **Line 219–220:** "The close-management skill flags the $400 unidentified item as a blocker that must be resolved before Day 5 close activities can proceed."
- **Line 228:** "debit Bank Charges Expense $840, credit Cash -- USD Operating $840"

If D1 is fixed with an intent table, these lines would need generalisation:
- Line 219–220 → "The close-management skill flags any unresolved items as blockers that must be resolved before Day 5 close activities can proceed."
- Line 228 → "Claude generates the correcting entry for the bank charges: debit Bank Charges Expense, credit Cash, with transaction references and a note that the entry requires controller review before posting."

## Defects Not Found

### D2: Missing Skill Name — CLEAN

Exercises use explicit `/command-name` invocations (correct for commands). Try With AI prompts are conceptual/educational, not triggering specific skills. No skill-name additions needed.

### D3: Inline Data Injection — CLEAN

No instances of `Read demo-data.md` or similar patterns. The lesson uses a self-contained practice data generation approach (student creates their own data via prompt on lines 139–154). Exercises reference "the data you generated" — clean pattern.

### D4: Fiction-Researching Prompt — CLEAN

No prompts ask the agent to web-search fictional entities. All exercises operate on local student-generated data via plugin commands.

### D6: Plugin/Tool Terminology — CLEAN

"Claude in Excel" is used correctly in Ch17 (it refers to the specific product taught in this chapter). "Cowork" is used correctly when referring to the Cowork platform. The lesson correctly describes the architectural shift between the two products.

## Recommendation

**No action required.** The borderline D1 finding is low-severity and defensible given the student-seeded data pattern. If the team adopts a strict interpretation of D1 (any specific fabricated numbers, even in narrative worked examples), then apply the optional fix above. Otherwise, this lesson passes the audit.
