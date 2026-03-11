# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/17-finance-domain-agents/04-from-assistant-to-agent.md`
**Chapter:** 17 — Finance Domain Agents
**Lesson:** 04 — From Assistant to Agent: Cowork Finance Plugins
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11

---

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 3 | CRITICAL |
| D2: Missing Skill Name in Prompt | 0 | — |
| D3: Inline Data Injection | 0 | — |
| D4: Fiction-Researching Prompt | 0 | — |
| D5: Narrative Referencing Fabricated Content | 2 | Medium |
| D6: Plugin/Tool Terminology | 0 | — |
| **Total** | **5** | |

---

## Defect Details

### D1-1: Fabricated Reconciliation Workpaper (Lines 212–218)

**Current content (first line):** `Claude reads the bank statement and trial balance from your connected folder...`

The table at lines 214–218 shows fabricated reconciliation output with specific dollar amounts ($2,180, $840, $400) and specific item counts (4 checks, 2 bank charges, 1 unidentified deposit). While the $3,420 total discrepancy is seeded by the data generation prompt (lines 139–154), the specific breakdown into three reconciling items is NOT deterministic — the student's generated data will produce different line items. This anchors students on an exact output they will not see.

**Recommended fix:** Replace the specific reconciliation table with an intent table:

```markdown
**What to expect:** The `/reconciliation` command produces a structured workpaper breaking the discrepancy into categorised reconciling items. Your output will vary based on your generated data, but look for these sections:

| Section | Intent | What to Verify |
| --- | --- | --- |
| Timing differences | Items in GL or bank but not yet matched | Confirm these resolve next period — no action needed |
| Errors requiring correction | Mispostings, missing entries | Each needs a journal entry — check these first |
| Items requiring investigation | No obvious explanation | These are close blockers — must resolve before Day 5 |

:::note Your output will vary
The specific items and amounts depend on the practice data Claude generated for you. The teaching point is categorisation: every reconciling item falls into timing, error, or investigation — and each category requires a different action.
:::
```

### D1-2: Fabricated Journal Entry Output (Lines 227–228)

**Current content:** `Claude generates the entry: debit Bank Charges Expense $840, credit Cash -- USD Operating $840, with transaction references...`

This presents a specific journal entry with exact accounts and amounts as if quoting agent output. The student's correcting entry will have different amounts (based on their generated data) and potentially different account names.

**Recommended fix:** Generalise to structural description:

```markdown
Claude generates the correcting entry with debits and credits that net to the error amount, account names matching your chart of accounts, transaction references linking back to the reconciliation, and a note flagging controller review before posting.
```

### D1-3: Fabricated Variance Analysis Results (Lines 235–236)

**Current content:** `...The CFO wants to know why revenue is $35K below budget — now you can explain: volume was on plan, but average selling price fell 7% due to promotional discounting in one product line.`

This presents specific variance results ($35K shortfall, 7% price decline, promotional discounting cause) as though quoting agent output. The student's variance analysis will produce different numbers and drivers based on their generated data.

**Recommended fix:** Generalise the example:

```markdown
The CFO wants to know why revenue is below budget — now you can explain using the volume, price, and mix decomposition. One driver will typically dominate. Identifying which driver accounts for the gap is the analytical value of running this command.
```

---

### D5-1: Narrative References Fabricated Reconciliation (Line 219)

**Current content:** `The close-management skill flags the $400 unidentified item as a blocker that must be resolved before Day 5 close activities can proceed.`

This references the specific $400 unidentified item from the fabricated table at D1-1. If that table is replaced with an intent table, this narrative becomes orphaned.

**Recommended fix:**

```markdown
The close-management skill flags any unidentified reconciling items as blockers that must be resolved before Day 5 close activities can proceed.
```

### D5-2: Narrative References Fabricated Variance (Line 236)

**Current content:** Overlaps with D1-3 above. The narrative at line 236 references specific fabricated results ("$35K below budget... average selling price fell 7%"). Already addressed by the D1-3 fix.

**Recommended fix:** Same as D1-3 — generalise to structural description rather than specific numbers.

---

## Clean Areas (No Defects Found)

### D2: Missing Skill Name in Prompt — CLEAN

All exercise prompts correctly use slash-command syntax (`/reconciliation`, `/journal-entry`, `/variance-analysis`, `/income-statement`, `/sox-testing`). This is appropriate because the exercises invoke Cowork commands, not skills. The passive skill activations (close-management, journal-entry-prep) are correctly described as automatic — no invocation needed.

### D3: Inline Data Injection — CLEAN

The "Prepare Your Practice Data" prompt (lines 139–154) is a legitimate data-generation prompt where the student specifies parameters. It is NOT a redundant "Read demo-data.md" injection. No folder-instruction-style data injection appears elsewhere in the lesson.

### D4: Fiction-Researching Prompt — CLEAN

No prompts ask the agent to research or web-search fictional entities. All exercises work with student-generated practice data or connected live data.

### D6: Plugin/Tool Terminology — CLEAN

This is Ch17, where "Claude in Excel" is the correct term for the embedded assistant product. All references to "Claude in Excel" appear in proper context (contrasting the embedded assistant with Cowork as an orchestrating agent). "Cowork" is used correctly throughout for the orchestrating agent platform.

---

## Fix Priority

1. **D1-1** (lines 212–218): Replace fabricated reconciliation table with intent table — CRITICAL
2. **D1-2** (lines 227–228): Generalise journal entry output — CRITICAL
3. **D1-3 + D5-2** (lines 235–236): Generalise variance analysis narrative — CRITICAL
4. **D5-1** (line 219): Generalise close-management blocker reference — Medium (depends on D1-1)
