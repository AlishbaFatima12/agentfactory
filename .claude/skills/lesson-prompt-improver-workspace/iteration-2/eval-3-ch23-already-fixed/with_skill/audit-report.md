# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/05-the-five-laws-of-outreach.md`
**Chapter:** 23 — Sales, RevOps & Marketing
**Lesson:** 5 — The Five Laws of Outreach
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11

## Overall Assessment

**This lesson is CLEAN.** Fabricated outputs have already been replaced with intent tables. The one preserved code block (Hamza DM, lines 246-269) is an intentional anti-pattern example used to teach the Compliance Gap error type and is correctly excluded from defect flagging. Two minor issues found — one terminology nit (Defect 6) and one missing skill name (Defect 2).

## Defect Summary Table

| Line Range | Defect Type                       | Current Content                                                                                                       | Recommended Fix                                                                                                                                                                                                                                                                                  |
| ---------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 348        | Defect 6: Plugin/Tool Terminology | `"Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins installed."` | Change to: `"Use these prompts in Cowork or your preferred AI assistant with the Sales, Marketing, and RevOps extension plugins installed."` (two fixes: "Claude" -> "Cowork" per cowork-content.md rules, and "Sales and RevOps" -> "Sales, Marketing, and RevOps" per skill naming convention) |
| 300        | Defect 2: Missing Skill Name      | `"Generate outreach for my top 3 scored prospects..."`                                                                | Consider adding: `"Use the outreach skill to generate outreach for my top 3 scored prospects..."` — this is the main exercise prompt in the "Producing Three Outreach Messages" section                                                                                                          |

**Total defects: 2 (0 critical, 2 minor)**

---

## Detailed Analysis by Defect Type

### Defect 1: Fabricated Agent Output — CLEAN

**Status: No defects found.**

The lesson contains three code blocks that could be mistaken for fabricated output, but all are correctly handled:

1. **Lines 197-201** — Prompt block (student input). This is an instruction the student types, not fabricated output. Correctly excluded.

2. **Lines 206-215** — Intent table with `:::note Your output will vary` disclaimer. This is a properly formed intent table replacement. The table covers DM body, Word count, and Law check sections with appropriate "What to Verify" guidance. Correctly formatted per skill methodology.

3. **Lines 221-232** — Second intent table for the follow-up email exercise. Same correct pattern: intent table + disclaimer. Covers Subject line, Email body, Word count, and Law check sections. Correctly formatted.

4. **Lines 246-269** — The Hamza Qureshi LinkedIn DM. This is a **deliberate anti-pattern example** used to teach the Compliance Gap error type (lines 275-281). The message is intentionally shown as a complete output that passes all Five Laws on content quality but fails on cultural appropriateness. It is:
   - Preceded by a neutral `**Output:**` label (line 244)
   - Followed by a `:::note Illustrative example` disclaimer (lines 271-273) explaining it is shown for teaching purposes
   - Discussed extensively in the narrative as a **failure case** (lines 275-281)
   - Central to the lesson's third learning objective (Compliance Gap detection)

   **Verdict: Correctly preserved.** This is NOT a fabricated output defect — it is a worked example of a specific error type. Removing it would destroy the lesson's core teaching moment.

5. **Lines 299-309** — Prompt block (student input for the 3-prospect exercise). Not fabricated output.

6. **Lines 314-321** — Student audit checklist table. This is a framework table (scoring template), not fabricated output. Correctly excluded.

7. **Lines 325-329** — Prompt block (iteration instruction). Student input, not fabricated output.

8. **Lines 352-365** — Try With AI Prompt 1. Student input.

9. **Lines 371-380** — Try With AI Prompt 2. Student input.

10. **Lines 386-398** — Try With AI Prompt 3. Student input.

### Defect 2: Missing Skill Name in Prompt — FOUND (minor)

**Status: 1 minor issue found.**

- **Line 197-201** (Meridian DM prompt): `"Use the outreach skill to draft a LinkedIn DM..."` — skill name present. CLEAN.
- **Line 239-241** (Hamza prompt): `"Draft outreach for Hamza Qureshi..."` — no skill name, but this is the Compliance Gap teaching exercise. The absence is acceptable because the prompt is designed to show what happens when the student runs a straightforward request. Adding "Use the outreach skill to..." would not change the teaching, but the skill name is implicitly understood from context. **Borderline — no fix needed.**
- **Lines 300-309** (3-prospect prompt): `"Generate outreach for my top 3 scored prospects..."` — **No skill name.** This is the primary exercise prompt in the "Producing Three Outreach Messages" section. Per skill methodology, primary exercise prompts should include the skill name. Recommended fix: `"Use the outreach skill to generate outreach for my top 3 scored prospects..."` **Minor defect.**
- **Line 352-365** (Try With AI Prompt 1): `"Use the outreach skill to draft a LinkedIn DM..."` — skill name present. CLEAN.
- **Lines 371-380** (Try With AI Prompt 2): `"Take the Meridian Logistics outreach from Prompt 1 and adapt it..."` — follow-up prompt, no skill name needed per skill rules ("Don't add to every follow-up prompt in a flow"). CLEAN.
- **Lines 386-398** (Try With AI Prompt 3): `"Draft outreach for a real prospect..."` — this is a different context (student's own pipeline), not a follow-up. However, the outreach skill is implicitly understood from the entire lesson context and the Try With AI preamble. **Borderline — acceptable.**

### Defect 3: Inline Data Injection — CLEAN

**Status: No defects found.**

No occurrences of `Read demo-data.md`, `Read sales-marketing.local.md`, or `[Paste or reference the...]` in any prompt blocks. The lesson correctly relies on folder instructions set in L01 for data context.

### Defect 4: Fiction-Researching Prompt — CLEAN

**Status: No defects found.**

The lesson's prompts reference fictional entities (Meridian Logistics, PakFreight Solutions) but do so correctly:

- The Meridian DM prompt (line 197) says "Hook: they just expanded their Leeds warehouse capacity by 40%" — providing the data directly in the prompt rather than asking the agent to web-search for it.
- The Hamza prompt (line 239) says "Hook: they just won a government contract for port logistics at Karachi Port Trust" — again, providing the data.
- The 3-prospect prompt (line 300) references "your top 3 scored prospects from the scoring exercise in Lesson 3" — drawing from demo-data already loaded via folder instructions.

No prompts ask the agent to "research" or "pull current data" on fictional companies via web search.

### Defect 5: Narrative Referencing Fabricated Content — CLEAN

**Status: No defects found.**

The narrative around intent tables is correctly generalised:

- Lines 216-217: `"Run the audit yourself — do not trust the agent's self-check alone. If all five laws pass, the skill is consuming your research brief effectively."` — references structural outcome (pass/fail), not specific numbers.
- Lines 275-281: The Compliance Gap discussion references the Hamza DM example that is intentionally preserved (not a removed fabricated block). The narrative correctly analyses the preserved example, discussing the UK reference case, tone, and cultural mismatch — all visible in the preserved code block. No orphaned references.
- Lines 330-331: `"Iterate until all three messages pass all five laws."` — structural reference. CLEAN.

### Defect 6: Plugin/Tool Terminology — FOUND (minor)

**Status: 1 defect found.**

**Line 348:**

```
Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins installed.
```

Two issues in this line:

1. **"Claude" should be "Cowork"** — Per `.claude/rules/cowork-content.md`, the Try With AI setup line should read `"Use these prompts in Cowork or your preferred AI assistant."` This is Ch 23, which is in the Ch 18+ range where "Cowork" is the correct term. "Claude" is too generic (could mean claude.ai, Claude CLI, etc.) and doesn't match the established pattern.

2. **"Sales and RevOps extension plugins"** — The correct terminology per the skill's Defect 6 detection pattern is `"Sales, Marketing, and RevOps extension plugins"`. The current text omits "Marketing" from the plugin suite name.

**Recommended fix for line 348:**

```
Use these prompts in Cowork or your preferred AI assistant with the Sales, Marketing, and RevOps extension plugins installed.
```

---

## Correctly Excluded Items (Not Flagged)

The following items were explicitly evaluated and correctly determined to NOT be defects:

| Item                                 | Lines   | Why Excluded                                                                                                                                                                                                        |
| ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intent table (Meridian DM)           | 206-215 | Proper intent table replacement with `:::note` disclaimer                                                                                                                                                           |
| Intent table (follow-up email)       | 221-232 | Proper intent table replacement with `:::note` disclaimer                                                                                                                                                           |
| Hamza DM anti-pattern example        | 246-269 | Deliberate teaching example for Compliance Gap error type. Labelled with `:::note Illustrative example` disclaimer. Discussed as a failure case in the narrative. Central to the lesson's third learning objective. |
| Student audit checklist              | 314-321 | Framework table — defines the student's audit method, not fabricated output                                                                                                                                         |
| Five Laws summary table              | 155-161 | Framework table — defines word limits per channel                                                                                                                                                                   |
| Banned words table                   | 172-189 | Framework table — reference material, not output                                                                                                                                                                    |
| Agent Error Taxonomy table           | 286-292 | Framework table — classification of error types                                                                                                                                                                     |
| Violation/What Farah writes examples | 104-148 | Illustrative contrasts for teaching each law — not agent output                                                                                                                                                     |
| All prompt code blocks               | Various | Student input, not agent output                                                                                                                                                                                     |

---

## Priority-Ordered Recommendations

| Priority | Defect                                                                       | Fix              | Effort     |
| -------- | ---------------------------------------------------------------------------- | ---------------- | ---------- |
| 1        | Line 348: "Claude" -> "Cowork" and add "Marketing" to plugin name (Defect 6) | Single line edit | 30 seconds |
| 2        | Line 300: Add "Use the outreach skill to..." prefix (Defect 2)               | Single line edit | 30 seconds |

---

## Verdict

**Lesson quality: HIGH.** The fabricated-output-to-intent-table conversion has already been completed correctly. The Hamza DM is properly preserved as a teaching anti-pattern with appropriate disclaimers. Two minor terminology/skill-name issues remain — both are single-line fixes.
