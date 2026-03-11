# Prompt Quality Audit Report: Ch17 L04 — From Assistant to Agent

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/17-finance-domain-agents/04-from-assistant-to-agent.md`
**Auditor**: Claude Opus 4.6 (no skill loaded)
**Date**: 2026-03-11
**Defect types checked**: Fabricated output, missing tool references, redundant data injection, terminology inconsistencies, structural issues, pedagogical gaps

---

## Summary Table

| #   | Issue                                                                                                                        | Type                      | Severity   | Lines              | Recommendation                                                                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Fabricated reconciliation output table with exact dollar amounts                                                             | Fabricated output         | **HIGH**   | 216-219            | Remove or reframe as "example of what you might see" with disclaimer                                                                                   |
| 2   | Fabricated journal entry output with specific debits/credits                                                                 | Fabricated output         | **HIGH**   | 228                | Reframe as illustrative rather than literal agent output                                                                                               |
| 3   | Fabricated variance analysis narrative ("volume was on plan, but ASP fell 7%")                                               | Fabricated output         | **MEDIUM** | 236                | Move to exercise context; label as "example interpretation"                                                                                            |
| 4   | Practice data prompt hard-codes exact totals that reconciliation output later "discovers"                                    | Redundant data injection  | **HIGH**   | 139-153 vs 216-219 | The $3,420 discrepancy is planted in the data generation prompt AND shown as "discovered" output — breaks the illusion of agent intelligence           |
| 5   | Title says "Cowork Finance Plugins" but body references `knowledge-work-plugins/finance` as if it is a specific named plugin | Terminology inconsistency | **MEDIUM** | 4, 172             | Clarify whether "knowledge-work-plugins/finance" is the real plugin name or a placeholder; if real, use consistently; if pedagogical fiction, state so |
| 6   | Worked Example presents Day 1-7 close workflow as deterministic agent output with no hedging                                 | Fabricated output         | **MEDIUM** | 200-254            | Add framing: "The following walkthrough illustrates a typical session" — not "Claude will produce exactly this"                                        |
| 7   | Close-management skill described as "flagging whether items are resolved... who owns them" with no basis shown               | Missing tool reference    | **LOW**    | 204, 220, 254      | Show what close-management skill activation looks like in practice, or soften claims about its automatic behavior                                      |
| 8   | Exercise 5 step 5 claims journal-entry-prep skill "should activate automatically" on paste                                   | Fabricated output         | **MEDIUM** | 268                | Passive skill activation is probabilistic, not guaranteed — reword to "may activate" with fallback instruction                                         |
| 9   | Six skills listed by name but no reference to where students can inspect their SKILL.md files                                | Missing tool reference    | **LOW**    | 182                | Add a pointer: "You can browse the skill definitions in the plugin's `skills/` directory"                                                              |
| 10  | `/reconciliation bank-USD 2025-03` syntax presented without explaining the argument format                                   | Missing tool reference    | **LOW**    | 129-130, 209       | Explain the argument pattern: `[account-identifier] [period]`                                                                                          |
| 11  | Exercise 7 introduces `/sox-testing procure-to-pay` — a new argument never mentioned in the five-command table               | Missing tool reference    | **LOW**    | 293                | Add a note that `procure-to-pay` is a `[process]` argument, referencing the command signature from the table                                           |
| 12  | Stale `</output>` tag at end of file (line 379)                                                                              | Structural                | **LOW**    | 379                | Remove — this is a rendering artifact                                                                                                                  |

---

## Detailed Findings

### 1. FABRICATED RECONCILIATION OUTPUT (HIGH)

**Lines 216-219.** The lesson presents a reconciliation output table as if it is actual agent output:

> | 4 checks issued in March, clearing in April | Timing difference | $2,180 | None -- resolves next period |
> | 2 bank service charges not posted to GL | Error requiring correction | $840 | Journal entry needed |
> | 1 unidentified deposit | Requires investigation | $400 | Research before Day 5 |

This is fiction. No agent was run to produce this. The amounts ($2,180 + $840 + $400 = $3,420) are reverse-engineered from the data injection prompt at line 145, which explicitly seeds a "$3,420 discrepancy." The lesson presents planted data as if the agent discovered it.

**Impact**: Students who run the exercise with generated data will get _different_ numbers and categories. When their output does not match the lesson's fabricated table, they will think they did something wrong.

**Recommendation**: Either (a) remove the specific table and say "Claude will produce a structured workpaper categorizing each reconciling item — review the categories and confirm whether you agree with each classification," or (b) keep the table but label it explicitly: "For example, a reconciliation might produce output like this:" — making clear it is illustrative, not literal.

### 2. FABRICATED JOURNAL ENTRY (HIGH)

**Line 228.** "Claude generates the entry: debit Bank Charges Expense $840, credit Cash -- USD Operating $840."

This is the same planted data from issue 1. The $840 was seeded in the practice data prompt and then presented as a "discovery." The journal entry format is also presented as guaranteed output rather than illustrative.

**Recommendation**: Same as issue 1 — reframe as illustrative or remove specific amounts.

### 3. FABRICATED VARIANCE NARRATIVE (MEDIUM)

**Line 236.** "volume was on plan, but average selling price fell 7% due to promotional discounting in one product line."

The practice data prompt (lines 147-149) seeds "$465K against a $500K budget, broken down by three product lines with unit volumes and average selling prices." The 7% figure and "promotional discounting" explanation are invented by the lesson author, not produced by any agent run.

**Recommendation**: Label as an example interpretation: "For instance, the analysis might reveal that volume was on plan while ASP declined due to discounting — the exact drivers will depend on your data."

### 4. REDUNDANT DATA INJECTION — THE CORE DEFECT (HIGH)

**Lines 139-153 vs 216-219.** This is the most significant structural problem in the lesson. The pattern is:

1. **Data generation prompt** (line 145): "a $3,420 discrepancy against the bank statement"
2. **Reconciliation "output"** (lines 216-219): Shows three items totaling exactly $3,420

The student is told to ask Claude to generate data with a specific discrepancy, then told the reconciliation command "discovers" that exact discrepancy. This is circular — the agent is not demonstrating analytical capability, it is regurgitating planted data.

The same pattern repeats for variance analysis:

- Data prompt plants "$465K against $500K budget"
- Worked example "discovers" "$35K below budget" (line 236)

**Impact**: This undermines the lesson's central claim that Cowork is an intelligent agent rather than a tool. If students notice the circularity, it erodes trust in the lesson. If they don't notice, they develop a false understanding of what agent reconciliation actually involves.

**Recommendation**: Two options:

**(A) Decouple data generation from the worked example.** Have the data generation prompt produce realistic data WITHOUT specifying the discrepancy amount. Then the worked example says: "Claude identifies the reconciling items — review the categorization and verify the amounts against your source documents." This makes the agent's analytical work genuine.

**(B) Keep the seeded data but be transparent.** Say: "We seeded a $3,420 discrepancy so you know what to expect. In production, you would not know the answer in advance — the reconciliation command is how you discover it." This preserves the pedagogical scaffold while being honest about what is happening.

Option A is stronger pedagogically. Option B is faster to implement.

### 5. PLUGIN NAME AMBIGUITY (MEDIUM)

**Line 4** (title): "Cowork Finance Plugins"
**Line 172**: "The `knowledge-work-plugins/finance` plugin"
**Line 117** (prerequisites): "Find the **Finance** plugin and click **Install**"

Three different names for the same thing. Is the plugin called "Finance" in the Cowork UI but `knowledge-work-plugins/finance` in its repo path? If so, this should be stated once and then used consistently. If `knowledge-work-plugins/finance` is a real GitHub repo path, it should be linked. If it is pedagogical fiction, it should not be presented as if it exists.

**Recommendation**: Pick one user-facing name ("Finance plugin") and one technical name (the repo/package path). Introduce both once, then use the user-facing name throughout the lesson body and the technical name only when discussing architecture.

### 6. DETERMINISTIC FRAMING OF WORKED EXAMPLE (MEDIUM)

**Lines 200-254.** The worked example presents a 7-day close as if the agent will produce exactly these outputs in this sequence. Phrases like "Claude reads... runs the reconciliation... produces a structured workpaper" (line 212) present probabilistic agent behavior as deterministic.

**Recommendation**: Add a framing paragraph before the walkthrough: "The following illustrates a typical close workflow. Your actual outputs will vary depending on your data, connected systems, and how you phrase your prompts. The structure and types of deliverables, however, will be consistent."

### 7. CLOSE-MANAGEMENT SKILL — CLAIMS WITHOUT EVIDENCE (LOW)

**Lines 204, 220, 254.** The close-management skill is described as automatically tracking "task owners, deadlines, and dependencies" (line 204) and "flagging whether items are resolved, whether they block downstream tasks" (line 220). These are strong claims about passive skill behavior with no example of what the activation looks like.

**Recommendation**: Either show a brief example of close-management skill output (even a 2-3 line snippet), or soften the language: "The close-management skill is designed to track close status — in practice, it provides contextual reminders about open items and downstream dependencies."

### 8. SKILL AUTO-ACTIVATION PRESENTED AS GUARANTEED (MEDIUM)

**Line 268.** "The journal-entry-prep skill should activate automatically... no `/journal-entry` command needed."

Per the project's own rules in `cowork-content.md`: "Skill invocation is up to the agent — none of the three methods guarantee the agent will use the skill." This exercise step contradicts that rule by presenting auto-activation as expected behavior.

**Recommendation**: Reword to: "The journal-entry-prep skill may activate automatically. If it does, notice how its review standards differ from running the `/journal-entry` command. If it does not activate, try adding context: 'Review this journal entry for documentation gaps.'"

### 9. SKILL NAMES WITHOUT INSPECTION PATH (LOW)

**Line 182.** Six skill names are listed but students are not told where to find or read the actual SKILL.md files.

**Recommendation**: Add: "You can browse each skill's definition in the plugin's `skills/` directory — open any `SKILL.md` to see the exact instructions Claude follows when that skill activates."

### 10. COMMAND ARGUMENT FORMAT UNEXPLAINED (LOW)

**Lines 129-130, 209.** `/reconciliation bank-USD 2025-03` is presented without explaining the argument format. The command table (lines 174-181) shows `[account] [period]` but does not explain what valid account identifiers look like or what period formats are accepted.

**Recommendation**: Add a brief note after the command table: "Account identifiers match your chart of accounts (e.g., `bank-USD`, `AR-trade`). Period formats follow `YYYY-MM` for monthly and `YYYY-QN` for quarterly."

### 11. UNDOCUMENTED COMMAND ARGUMENT (LOW)

**Line 293.** `/sox-testing procure-to-pay 2025-Q1` uses `procure-to-pay` as a process argument, but this value appears nowhere in the command table or prior discussion.

**Recommendation**: Add a note: "The `[process]` argument can be any auditable business process — `revenue-recognition`, `procure-to-pay`, `payroll`, etc."

### 12. STALE OUTPUT TAG (LOW)

**Line 379.** The file ends with `</output>` which is not valid MDX/Markdown and appears to be a rendering artifact from content generation.

**Recommendation**: Remove the tag.

---

## Priority Matrix

### Must Fix (before publish)

| #   | Issue                                                     | Effort                                                   |
| --- | --------------------------------------------------------- | -------------------------------------------------------- |
| 4   | Redundant data injection — the circular discovery pattern | Medium (rewrite data prompt OR add transparency framing) |
| 1   | Fabricated reconciliation table                           | Low (add "example" framing)                              |
| 2   | Fabricated journal entry                                  | Low (add "example" framing)                              |
| 12  | Stale `</output>` tag                                     | Trivial                                                  |

### Should Fix

| #   | Issue                                         | Effort                          |
| --- | --------------------------------------------- | ------------------------------- |
| 8   | Skill auto-activation presented as guaranteed | Low (reword one sentence)       |
| 6   | Deterministic framing of worked example       | Low (add one framing paragraph) |
| 3   | Fabricated variance narrative                 | Low (reframe)                   |
| 5   | Plugin name inconsistency                     | Low (editorial pass)            |

### Nice to Fix

| #   | Issue                                          | Effort  |
| --- | ---------------------------------------------- | ------- |
| 7   | Close-management skill claims without evidence | Low     |
| 9   | Missing skill inspection path                  | Trivial |
| 10  | Command argument format unexplained            | Trivial |
| 11  | Undocumented command argument                  | Trivial |

---

## Overall Assessment

The lesson has strong structural design — the five-command framework, the skills-vs-commands distinction, and the day-by-day close walkthrough are well-conceived. The pedagogical architecture is sound.

The primary defect is the **circular data injection pattern**: the lesson tells students to generate data with specific known discrepancies, then presents the agent "discovering" those exact discrepancies as if it performed independent analysis. This is the lesson's most significant credibility risk. A student who notices the circularity will question whether the agent is actually doing useful work or just echoing back what it was told.

Secondary defects cluster around **fabricated output** presented as literal agent output rather than illustrative examples. These are fixable with framing language ("for example, you might see...") without rewriting the content.

The terminology inconsistencies and missing references are minor polish issues that do not affect comprehension but should be cleaned up for production quality.
