# Audit Report: L05 — The Five Laws of Outreach

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/05-the-five-laws-of-outreach.md`

**Chapter:** 23 (Sales, RevOps & Marketing) — marked DONE in prompt quality tracker

**Audit date:** 2026-03-11

**Skill version:** lesson-prompt-improver v1 (iteration-3 eval)

---

## Summary

| Defect Type | Count | Severity | Lines |
| --- | --- | --- | --- |
| D1: Fabricated Agent Output | 0 | — | — |
| D2: Missing Skill Name in Prompt | 2 | Minor | 239-242, 300-309 |
| D3: Inline Data Injection | 0 | — | — |
| D4: Fiction-Researching Prompt | 0 | — | — |
| D5: Narrative Referencing Fabricated | 0 | — | — |
| D6: Plugin/Tool Terminology | 2 | Minor | 348 |

**Total defects found: 4 (0 critical, 4 minor)**

---

## Detailed Findings

### D1: Fabricated Agent Output — CLEAN

Two intent tables are properly implemented:

1. **Lines 205-215:** Meridian LinkedIn DM intent table with `:::note Your output will vary` disclaimer. Correctly structured with Section/Intent/What to Verify columns.
2. **Lines 221-232:** Follow-up email intent table with `:::note Your output will vary` disclaimer. Correctly structured.

**One intentional illustrative example retained (lines 246-269):** The PakFreight LinkedIn DM is shown as a deliberate teaching example for the Compliance Gap concept. It is properly disclaimed with `:::note Illustrative example` (lines 271-273), and the subsequent narrative (lines 275-281) explicitly analyzes WHY the message is wrong despite passing all Five Laws. This correctly falls under the anti-pattern exception — the output exists to be critiqued, not to set expectations.

### D2: Missing Skill Name in Prompt — 2 ISSUES

**Issue 1 — Lines 239-242 (Compliance Gap prompt):**

```
Draft outreach for Hamza Qureshi, COO at PakFreight Solutions
in Karachi. Hook: they just won a government contract for port
logistics at Karachi Port Trust.
```

This is the first prompt in the "Compliance Gap" section. The narrative at line 236 says "Take the same outreach skill and draft a message," but the prompt code block itself does not name the skill. Per the skill rules, primary exercise prompts should be self-contained with the skill name.

**Recommended fix:**

```
Use the outreach skill to draft outreach for Hamza Qureshi, COO
at PakFreight Solutions in Karachi. Hook: they just won a
government contract for port logistics at Karachi Port Trust.
```

**Issue 2 — Lines 300-309 (Three Outreach Messages prompt):**

```
Generate outreach for my top 3 scored prospects, one per channel:
...
```

This is the first prompt in the "Producing Three Outreach Messages" section. Should include the skill name.

**Recommended fix:**

```
Use the outreach skill to generate outreach for my top 3 scored
prospects, one per channel:
...
```

**Mitigating factor:** Both prompts have the skill mentioned in surrounding narrative, so students will likely understand which skill to use. The issue is that prompt code blocks should be self-contained and copy-paste ready.

### D3: Inline Data Injection — CLEAN

No instances of "Read demo-data.md", "Read sales-marketing.local.md", or "[Paste or reference the...]" found in prompt blocks. Folder instructions (set in L01) handle data file references correctly.

### D4: Fiction-Researching Prompt — CLEAN

The PakFreight prompt (line 239) and the Meridian prompt (line 197) both provide the hook data inline rather than asking the agent to research fictional entities. The three-prospect prompt (line 300) references the student's own scored prospects from L03, not fictional entities. No prompts would trigger web searches for fictional companies.

### D5: Narrative Referencing Fabricated — CLEAN

Lines 275-281 reference specific details from the PakFreight illustrative example (lines 246-269), which is intentionally retained for teaching. No orphaned narrative references to removed fabricated content.

The intent tables at lines 205-215 and 221-232 have properly generalized narrative guidance. Lines 217-218 ("Run the audit yourself...") and lines 331 ("Iterate until all three messages pass...") reference structural patterns, not specific fabricated numbers.

### D6: Plugin/Tool Terminology — 2 ISSUES (same line)

**Issue 1 — Line 348:**

```
Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins installed.
```

Per `cowork-content.md`, Try With AI setups should use: "Use these prompts in Cowork or your preferred AI assistant." The current wording says "Claude" instead of "Cowork."

**Recommended fix:**

```
Use these prompts in Cowork or your preferred AI assistant with the Sales, Marketing, and RevOps extension plugins installed.
```

**Issue 2 — Same line 348:**

"Sales and RevOps extension plugins" is missing "Marketing." The correct terminology per the skill is "Sales, Marketing, and RevOps extension plugins."

---

## Overall Assessment

This lesson is in good shape post-fix. The two commits (`4a92156b` and `75906eee`) successfully addressed the critical defects. The intent tables are well-designed with appropriate Section/Intent/What to Verify columns, and the `:::note Your output will vary` disclaimers are well-written.

The remaining 4 minor issues are:

1. **Two missing skill names in prompt blocks** (D2) — low risk since narrative context provides the skill name, but fixing makes prompts copy-paste ready.
2. **Two terminology issues on a single line** (D6) — "Claude" should be "Cowork" and "Marketing" is missing from the plugin list name.

**Recommendation:** Fix all 4 minor issues. Total effort: ~2 minutes of edits across 3 locations.

---

## Appendix: Lines Audited

- YAML frontmatter: lines 1-81 (not in audit scope for prompt defects)
- Lesson narrative: lines 82-98
- Five Laws framework: lines 99-191
- Drafting Outreach for Meridian: lines 193-232 (2 intent tables)
- The Compliance Gap: lines 234-293 (1 illustrative example, properly disclaimed)
- Producing Three Outreach Messages: lines 295-331
- What You Built: lines 333-338
- Flashcards: lines 340-344
- Try With AI: lines 346-401 (3 prompts)
