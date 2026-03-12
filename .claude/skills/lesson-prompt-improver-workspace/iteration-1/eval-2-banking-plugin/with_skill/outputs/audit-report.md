# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/02-plugin-architecture.md`
**Lesson:** Chapter 21, Lesson 2 — The Banking Plugin Architecture
**Date:** 2026-03-11
**Auditor:** lesson-prompt-improver skill

---

## Summary

| Defect Type                         | Count | Severity |
| ----------------------------------- | ----- | -------- |
| Defect 1: Fabricated Agent Output   | 0     | --       |
| Defect 2: Missing Skill Name        | 1     | Medium   |
| Defect 3: Inline Data Injection     | 0     | --       |
| Defect 4: Fiction-Researching       | 0     | --       |
| Defect 5: Narrative Ref. Fabricated | 0     | --       |
| Defect 6: Plugin/Tool Terminology   | 1     | Low      |
| **Total**                           | **2** |          |

**Overall assessment:** This lesson is in good shape. It is an architecture walkthrough with no fabricated agent output blocks. The two issues found are minor.

---

## Detailed Findings

### Finding 1: Missing Skill Name in Prompt 1 (Defect 2 — Medium)

**Line range:** 248-261

**Current content (first line):**

```
I have the banking plugin installed. Here is my query:
```

**Issue:** Prompt 1 is the primary exercise prompt but does not name a skill. Since this prompt asks the agent to trace routing and perform an ECL calculation, it should reference the banking router or the `ifrs9-ecl` skill so the student knows which skill activates.

**Recommended fix:**

```
Use the banking plugin's ECL skill to answer this query:

"Calculate the ECL for a UK mortgage portfolio with 5,000
accounts. Average PD is 1.5%, average LGD is 18%, and
average EAD is GBP 200,000. All accounts are Stage 1."

Walk me through:
1. Which pillar does the router detect?
2. Which skill(s) does it load?
3. What calculation does the skill perform?
4. What is the portfolio-level 12-month ECL?

Show the arithmetic step by step.
```

**Rationale:** Per the skill's Defect 2 pattern, the style should be "Use the X skill to..." in natural language, applied to primary exercise prompts only. Prompts 2 and 3 are follow-up prompts and do not need skill names added.

**Note:** There is a judgment call here. Prompts 2 and 3 are _meta-prompts_ asking the agent to explain routing architecture rather than invoking a product skill directly. Adding skill names to those would be awkward since they ask about the routing system itself rather than triggering a specific calculation. The recommendation is to fix only Prompt 1.

---

### Finding 2: Incorrect Platform Name in Try With AI Header (Defect 6 — Low)

**Line:** 243

**Current content:**

```
Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.
```

**Issue:** Per `.claude/rules/cowork-content.md`, chapters 18+ should reference "Cowork" rather than "Claude" when referring to the collaborative workspace. The standard phrasing is "Use these prompts in Cowork or your preferred AI assistant."

**Recommended fix:**

```
Use these prompts in Cowork or your preferred AI assistant to explore this lesson's concepts.
```

**Rationale:** Consistent terminology across Part 3. "Claude" is the general model; "Cowork" is the specific tool students use for these exercises.

---

## Items Reviewed and Found Clean

### Defect 1 — Fabricated Agent Output: CLEAN

The lesson contains two query trace sections (lines 149-159 and 161-176) that describe what the router and skills _would_ do. These are **not** fabricated output blocks because:

1. All numbers come from the query parameters themselves (12,000 accounts, 300 downgrades, $200M provision, 25% tax rate) — these are student-generated data, not fabricated agent output.
2. The arithmetic derivations ($200M provision -> $150M after-tax at 25%) are deterministic consequences of the stated parameters.
3. The descriptions explain the architecture's behavior (routing decisions, skill loading) rather than pretending to show formatted agent output with decorated blocks.
4. No `**Output:**` or `**Sample Output:**` labels precede these sections.
5. No formatted report blocks with `══════` or `────────` decorations.

These fall squarely under the skill's exception for "Student-generated data: Output from prompts where the student explicitly tells the agent what data to generate (the prompt contains the parameters)."

### Defect 3 — Inline Data Injection: CLEAN

No references to "Read demo-data.md" or similar data file injections in any prompt block. This lesson uses self-contained query parameters rather than external data files.

### Defect 4 — Fiction-Researching Prompt: CLEAN

All three prompts use hypothetical scenarios with explicit parameters (PD, LGD, EAD, provision amounts, tax rates). No prompt asks the agent to "research" or "pull current data" on fictional entities. The scenarios are pedagogically grounded — students provide all inputs.

### Defect 5 — Narrative Referencing Fabricated Content: CLEAN

Since no fabricated output blocks exist, there are no orphaned narrative references to specific fabricated numbers. The narrative following the query traces references the query's own parameters, which remain valid.

---

## Recommendations Summary

| #   | Line | Defect                       | Fix                                                        | Effort  |
| --- | ---- | ---------------------------- | ---------------------------------------------------------- | ------- |
| 1   | 248  | Defect 2: Missing Skill Name | Add "Use the banking plugin's ECL skill to..." to Prompt 1 | Trivial |
| 2   | 243  | Defect 6: Terminology        | Change "Claude" to "Cowork"                                | Trivial |

Both fixes are trivial single-line edits. No structural changes required. The lesson's architecture walkthrough content, skill library table, query traces, and worked example are all clean.
