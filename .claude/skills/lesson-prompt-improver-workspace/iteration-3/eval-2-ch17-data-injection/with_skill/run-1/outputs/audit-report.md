# Audit Report: Ch17 L04 — From Assistant to Agent: Cowork Finance Plugins

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/17-finance-domain-agents/04-from-assistant-to-agent.md`
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11

## Summary

| Defect Type                          | Count | Severity |
| ------------------------------------ | ----- | -------- |
| D1: Fabricated Agent Output          | 3     | CRITICAL |
| D2: Missing Skill Name in Prompt     | 0     | —        |
| D3: Inline Data Injection            | 0     | —        |
| D4: Fiction-Researching Prompt       | 0     | —        |
| D5: Narrative Referencing Fabricated  | 3     | MEDIUM   |
| D6: Plugin/Tool Terminology          | 0     | —        |
| **Total**                            | **6** |          |

## Defect Details

### D1-1: Fabricated Reconciliation Workpaper (Lines 212–219) — CRITICAL

The month-end close walkthrough presents a fabricated reconciliation output table with specific dollar amounts and item counts that the agent will NOT reproduce exactly.

**Current content (line 212–219):**
```
Claude reads the bank statement and trial balance from your connected folder (or queries your ERP if connected), runs the reconciliation against the GL, and produces a structured workpaper. The $3,420 discrepancy breaks down as:

| Item                                        | Category                   | Amount | Action Required              |
| ------------------------------------------- | -------------------------- | ------ | ---------------------------- |
| 4 checks issued in March, clearing in April | Timing difference          | $2,180 | None -- resolves next period |
| 2 bank service charges not posted to GL     | Error requiring correction | $840   | Journal entry needed         |
| 1 unidentified deposit                      | Requires investigation     | $400   | Research before Day 5        |
```

**Why it is a defect:** The student's practice data prompt (lines 139–154) specifies a $3,420 total discrepancy, but does NOT specify the breakdown. The agent will decompose it differently each run — different item counts, different dollar splits, different categorisations. Presenting this table as "the" output anchors students on wrong expectations.

**Note on borderline judgment:** The practice data prompt does specify "timing differences, a bank charge not yet posted to the GL, and one unidentified item" — so the *categories* are seeded. However, the specific counts (4 checks, 2 charges), dollar amounts ($2,180, $840, $400), and descriptions are fabricated. The table should be converted to an intent table.

**Recommended fix:** Replace with intent table:

```markdown
**What to expect:** The command produces a structured workpaper decomposing the $3,420 discrepancy into categorised reconciling items. Your output will vary, but look for these sections:

| Section              | Intent                                              | What to Verify                                                       |
| -------------------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| Timing differences   | Items in GL but not yet at the bank (or vice versa) | These should resolve next period — no journal entry needed           |
| Errors               | Amounts posted incorrectly or not posted at all     | Each error needs a correcting journal entry — check the amounts      |
| Items to investigate | No obvious explanation — highest priority            | Must be resolved before Day 5; check if the close-management skill flags them as blockers |

:::note Your output will vary
The practice data includes timing differences, a bank charge not posted to the GL, and an unidentified item — but the agent's specific dollar breakdown, item counts, and descriptions will differ each time. The teaching point is the categorisation framework (timing vs error vs investigation), not the specific numbers.
:::
```

---

### D1-2: Fabricated Journal Entry Output (Line 228) — CRITICAL

Inline fabricated output embedded in narrative prose.

**Current content (line 228):**
```
Claude generates the entry: debit Bank Charges Expense $840, credit Cash -- USD Operating $840, with transaction references and a note that this entry requires controller review before posting.
```

**Why it is a defect:** The $840 amount comes from the fabricated reconciliation table above. The specific account names ("Bank Charges Expense", "Cash -- USD Operating") are also fabricated — the agent may use different account naming conventions depending on the practice data.

**Recommended fix:**
```
Claude generates a correcting journal entry for the bank charges: a debit to an expense account and a credit to the cash account, with transaction references and a note that the entry requires controller review before posting. Verify the debit/credit structure balances and the accounting rationale matches the reconciling item.
```

---

### D1-3: Fabricated Variance Analysis Output (Lines 236–237) — CRITICAL

Inline fabricated output presenting specific variance results.

**Current content (lines 236–237):**
```
Claude decomposes the revenue variance into volume, price, and mix drivers across your product lines. The CFO wants to know why revenue is $35K below budget — now you can explain: volume was on plan, but average selling price fell 7% due to promotional discounting in one product line.
```

**Why it is a defect:** The practice data prompt (line 149) specifies "$465K against a $500K budget" (a $35K shortfall), but the specific decomposition ("volume was on plan, average selling price fell 7%, promotional discounting in one product line") is fabricated. The agent will produce a different decomposition each time.

**Recommended fix:**
```
Claude decomposes the revenue variance into volume, price, and mix drivers across your product lines. The practice data has Q1 revenue below budget — the decomposition shows which driver accounts for the gap. Examine the output: is the shortfall driven by fewer units sold (volume), lower prices (price), or a shift toward lower-margin products (mix)? This is the narrative you would present to the CFO.
```

---

### D5-1: Narrative References Fabricated Reconciliation (Lines 220–221) — MEDIUM

**Current content (lines 220–221):**
```
The close-management skill flags the $400 unidentified item as a blocker that must be resolved before Day 5 close activities can proceed.
```

**Why it is a defect:** References the specific "$400 unidentified item" from the fabricated table. Once the table is replaced with an intent table, this narrative is orphaned.

**Recommended fix:**
```
The close-management skill flags unidentified reconciling items as blockers that must be resolved before Day 5 close activities can proceed.
```

---

### D5-2: Narrative References Fabricated Journal Entry (Line 228) — MEDIUM

This is the same line as D1-2. The narrative around the journal entry references the fabricated $840 amount. Already addressed by D1-2 fix above.

---

### D5-3: Narrative References Fabricated Variance (Line 236) — MEDIUM

This is the same passage as D1-3. The narrative around the variance analysis references the fabricated $35K shortfall and 7% price decline. Already addressed by D1-3 fix above.

---

## Non-Defects (Examined and Cleared)

### Practice Data Prompt (Lines 139–154) — NOT a defect

The prompt where students ask Claude to generate practice data with specific parameters ($892,000 deposits, $876,580 withdrawals, $3,420 discrepancy, $465K vs $500K budget). This is student-generated data — the prompt contains the parameters. Per skill exceptions: "Student-generated data: Output from prompts where the student explicitly tells the agent what data to generate" — this is correct usage.

### Command Invocations in Exercises (Lines 260–296) — NOT a defect

Exercises 5–7 correctly use `/command-name` format for Cowork plugin commands. Commands are the correct invocation pattern for this chapter (not skills with "Use the X skill to..." phrasing). No D2 defect.

### Try With AI Prompts (Lines 304–370) — NOT a defect

Prompt 1 is conceptual (no command invocation needed). Prompt 2 references commands by day. Prompt 3 is a reconciliation reasoning exercise with student-specified data (the prompt contains the reconciling items). All three are correctly structured.

### "Claude in Excel" References (Frontmatter) — NOT a defect

Five occurrences of "Claude in Excel" in YAML frontmatter and teaching metadata. All correctly contrast Ch17's embedded assistant product with Cowork. Per `cowork-content.md`: "Ch 17 correctly uses 'Claude in Excel' because that chapter teaches that product."

### Plugin Command Table (Lines 174–181) — NOT a defect

The five-command table describes what each command produces in general terms. These are framework descriptions (what the command IS), not fabricated output of what the command SAID. Cleared under the "Framework tables" exception.

### GL Reconciliation and Month-End Close Explainers (Lines 188–199) — NOT a defect

Educational reference content defining accounting concepts. Not agent output.

## Priority-Ordered Fix List

| Priority | Defect | Line Range | Fix Type                | Effort |
| -------- | ------ | ---------- | ----------------------- | ------ |
| 1        | D1-1   | 212–219    | Replace table with intent table + disclaimer | Medium |
| 2        | D1-2   | 228        | Generalise inline narrative | Small  |
| 3        | D1-3   | 236–237    | Generalise inline narrative | Small  |
| 4        | D5-1   | 220–221    | Generalise to structural reference | Small  |
| 5        | D5-2   | 228        | Covered by D1-2 fix    | —      |
| 6        | D5-3   | 236        | Covered by D1-3 fix    | —      |

## Observations

1. **The D1 defects are concentrated in the month-end close walkthrough (lines 200–254).** This is a narrative "worked example" section that tells a story about a 7-day close. Converting the fabricated outputs to intent tables while preserving the narrative flow will require careful editing — the walkthrough reads as a connected story, not isolated exercises.

2. **The D1 and D5 defects are intertwined.** Three of the D5 defects are in the same sentences as D1 defects. Fixing D1 automatically fixes D5 in those cases. Only D5-1 (line 220–221) is a standalone fix.

3. **The practice data prompt creates an interesting tension.** The student specifies enough parameters that the agent's output IS somewhat constrained — the $3,420 will always be $3,420, and there will always be timing differences, bank charges, and an unidentified item. The defect is in the *specific decomposition* (counts, amounts per category), not the general structure. Intent tables should preserve the category-level expectations while removing the specific numbers.

4. **No D2/D3/D4/D6 defects.** The lesson correctly uses Cowork plugin commands (not standalone skills), doesn't inject data files redundantly, doesn't research fictional entities, and uses Ch17-appropriate terminology.
