# Audit Report: Ch23 L05 — The Five Laws of Outreach

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/05-the-five-laws-of-outreach.md`

**Auditor**: Claude (without skill)
**Date**: 2026-03-11
**Scope**: Prompt quality, fabricated outputs, terminology, tool/skill references, data injection patterns

---

## Summary Table of Issues

| #   | Issue                                                | Severity | Lines        | Category                  |
| --- | ---------------------------------------------------- | -------- | ------------ | ------------------------- |
| 1   | Fabricated agent output in Compliance Gap section    | HIGH     | 247-269      | Fabricated Output         |
| 2   | "extension" vs "plugin" terminology inconsistency    | MEDIUM   | 79, 281, 348 | Terminology               |
| 3   | Try With AI intro says "Claude" not "Cowork"         | MEDIUM   | 348          | Terminology (Cowork rule) |
| 4   | Missing prompt for follow-up email exercise          | MEDIUM   | 219-232      | Missing Prompt            |
| 5   | No `:::note Illustrative example` on Farah examples  | LOW      | 103-149      | Consistency               |
| 6   | Compliance Gap example uses first-person narration   | LOW      | 277-281      | Voice Consistency         |
| 7   | "Try With AI" Prompt 1 duplicates main lesson prompt | LOW      | 352-365      | Redundancy                |

---

## Detailed Findings

### Issue 1 (HIGH): Fabricated Agent Output in Compliance Gap Section

**Lines 247-269.** The Compliance Gap section contains a fully fabricated agent output block:

```
LinkedIn DM — Hamza Qureshi, COO, PakFreight Solutions

Hi Hamza,

PakFreight's Karachi Port Trust contract win last month positions
you as the lead logistics partner for government freight at
Pakistan's busiest port — 60% of the country's maritime trade
passes through KPT.
...
Word count: 92/100
Law check: 1 + | 2 + | 3 + | 4 + | 5 +
```

This is a hardcoded example message presented in a code block as literal agent output. While there IS a `:::note Illustrative example` disclaimer on lines 271-273, the output itself is still a fabricated artifact that:

- Invents a specific stat ("60% of the country's maritime trade passes through KPT") that may not be accurate
- Invents a UK freight operator reference case ("cut compliance processing time by 40%")
- Presents a fake word count audit ("92/100") and law check pass table

**Mitigating factor**: The `:::note Illustrative example` callout does disclaim it. However, the fabricated statistics within the example could be mistaken for real data. The prior two exercises (Meridian DM and Meridian email) correctly use intent tables instead of fabricated output, making this one inconsistent.

**Recommendation**: This is the one remaining fabricated output in the lesson. It was likely preserved intentionally because it serves as the setup for the Compliance Gap teaching moment -- the student needs to see a specific message to analyze its cultural mismatches. If it must stay as a worked example, the fabricated statistics ("60%", "40%") should either be flagged as illustrative within the example itself, or replaced with vaguer phrasing that does not make verifiable factual claims. Alternatively, convert this to an intent table + have the student generate it, then provide analysis prompts that guide them to discover the cultural mismatch themselves.

---

### Issue 2 (MEDIUM): "Extension" vs "Plugin" Terminology Inconsistency

The chapter README and L01 establish a three-layer architecture: **Sales plugin**, **Marketing plugin**, and **Sales RevOps Marketing plugin** (the third one installed from the agentfactory-business-plugins marketplace). The README consistently calls all three "plugins."

However, L05 uses "extension" in three places:

- **Line 79** (frontmatter `extension_for_advanced`): "Run the same outreach prompt WITHOUT the extension loaded." -- This is a YAML field name, so "extension" is ambiguous. Does it mean the RevOps plugin or something else?
- **Line 281**: "the extension was built on UK and US business communication patterns" -- Should be "the plugin" or "the RevOps plugin."
- **Line 348**: "with the Sales and RevOps extension plugins installed" -- Mixed term "extension plugins." The README says "Sales plugin" + "Marketing plugin" + "Sales RevOps Marketing plugin." This line also omits the Marketing plugin.

The chapter uses "extension" and "plugin" interchangeably across multiple lessons (confirmed by grep across all 14 lessons). This is a chapter-wide pattern, not unique to L05, but it should be flagged here.

**Recommendation**: Standardize to "plugin" throughout. The README uses "plugin" exclusively. Line 281 should say "the plugin was built on..." and line 348 should say "with the Sales, Marketing, and RevOps plugins installed."

---

### Issue 3 (MEDIUM): Try With AI Section Says "Claude" Instead of "Cowork"

**Line 348:**

> Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins installed.

Per `.claude/rules/cowork-content.md`, the correct pattern for Try With AI setups is:

> "Use these prompts in Cowork or your preferred AI assistant."

The lesson requires plugin installation, which is a Cowork feature. Saying "Claude" is both incorrect per the terminology rules and misleading (bare Claude does not have plugin support). Several other Ch23 lessons have the same issue (L04, L14), while others correctly say "Claude or your preferred AI assistant" for plugin-free prompts (L08, L09, L10, L11). The distinction: when plugins are needed, the instruction should reference Cowork.

**Recommendation**: Change to: "Use these prompts in Cowork or your preferred AI assistant with the Sales, Marketing, and RevOps plugins installed."

---

### Issue 4 (MEDIUM): Missing Prompt for Follow-Up Email Exercise

**Lines 219-232.** After the Meridian DM exercise, the lesson says:

> "Now generate a follow-up email for the same prospect -- different channel, same Five Laws:"

Then immediately presents an intent table describing expected output sections. But there is no copyable prompt block for the student to use. Compare with:

- The Meridian DM exercise (lines 197-201): Has a proper ` ``` ` code block with a copyable prompt.
- The Compliance Gap exercise (lines 238-242): Has a proper code block.
- The three-message exercise (lines 300-309): Has a proper code block.

The student is told to "generate" but has no prompt to copy. They must infer what to type.

**Recommendation**: Add a prompt block between line 219 and the intent table:

```
Draft a follow-up email for Sarah Chen at Meridian Logistics.
Same hook: Leeds warehouse expansion of 40%. This is a cold email,
not a LinkedIn DM. Include a subject line. Run the Five Laws audit.
```

---

### Issue 5 (LOW): Farah's Examples Are Not Flagged as Illustrative

**Lines 103-149.** The Five Laws section contains worked examples attributed to "Farah" -- e.g., the Series B announcement reference, the 14 Pakistani cities reference, the Leeds logistics details. These are teaching examples, not agent output, so they do not need `:::note Illustrative example` callouts. However, they do contain invented specifics:

- "Series B announcement on March 3rd"
- "three DevOps roles posted this week"
- "logistics network across 14 Pakistani cities handles 50,000+ shipments monthly"
- "three new warehouse leases in Lahore"

These are clearly pedagogical (Farah is a fictional character established in the lesson narrative), so the risk is low. A student reading carefully will understand these are teaching illustrations.

**No action needed** -- the fictional framing (Farah's practice) is sufficient context. Noting for completeness.

---

### Issue 6 (LOW): Compliance Gap Analysis Uses Omniscient Narrator Voice

**Lines 275-281.** The Compliance Gap analysis section shifts into a prescriptive voice:

> "The reference case is a UK freight operator. The tone is formal British business English. The sign-off is a dash followed by a first name -- a Western LinkedIn convention."

This is well-written teaching prose that walks the student through the cultural mismatch. However, it presents the analysis as fact rather than guiding the student to discover it. The lesson's own stated pedagogy (line 89) says "You will learn the laws through practice" and the Meridian exercises successfully use the "generate, then audit yourself" pattern.

For the Compliance Gap, the student is told to "read it again as Hamza would read it" (line 275) but then immediately given the complete analysis rather than space to attempt it.

**Recommendation (optional)**: Consider adding a brief pause prompt before the analysis -- something like "Before reading further, list three things that might feel wrong to Hamza." This would make the discovery moment more active. The current approach is acceptable but less consistent with the lesson's practice-first pedagogy.

---

### Issue 7 (LOW): Try With AI Prompt 1 Duplicates the Main Lesson Prompt

**Lines 352-365.** Prompt 1 in the Try With AI section is nearly identical to the Meridian DM prompt on lines 197-201:

- Main lesson: "Use the outreach skill to draft a LinkedIn DM for Sarah Chen at Meridian Logistics. Hook: they just expanded their Leeds warehouse capacity by 40%."
- Try With AI Prompt 1: Same text with the addition of "and posted 8 new operations roles" and explicit Five Laws audit instructions.

The additions (8 new roles, explicit law names) do add value. But a student who completed the main lesson has already done this exact exercise. Prompt 1 would be more valuable if it used a different prospect or a different channel to reinforce the skill in a new context.

**Recommendation**: Consider changing Prompt 1 to use the Hamza Qureshi / PakFreight prospect from the Compliance Gap section, which would let the student practice the dual audit (content + cultural) rather than repeating the Meridian DM.

---

## Items Checked and Found Clean

| Check                                | Result                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| YAML frontmatter complete            | PASS -- all required fields present (skills, learning_objectives, cognitive_load, differentiation)            |
| Skills metadata well-formed          | PASS -- 3 skills with proper CEFR levels, Bloom's taxonomy, DigComp areas                                     |
| Learning objectives measurable       | PASS -- all 3 objectives have specific assessment methods                                                     |
| Flashcards component present         | PASS -- `<Flashcards />` tag on line 344, sidecar `.flashcards.yaml` exists                                   |
| No phantom imports                   | PASS -- no `import` statements in the file                                                                    |
| Cross-lesson references accurate     | PASS -- L2 (research brief), L3 (scoring), L4 (enrichment), L12 (jurisdiction) all correctly referenced       |
| Agent Error Taxonomy consistent      | PASS -- Hallucinated Data (L1), Miscalibrated Scoring (L3), Compliance Gap (L5) matches README taxonomy table |
| Rule 9 safety callout present        | PASS -- lines 91-93                                                                                           |
| Case study usage (NexaFlow/Meridian) | PASS -- NexaFlow at ~60%, Meridian at ~40%, matches README case study split                                   |
| Word limit table complete            | PASS -- 5 channels with limits and rationale                                                                  |
| Banned words table complete          | PASS -- 17 words with reasons and alternatives                                                                |
| Cognitive load assessment reasonable | PASS -- 8 concepts acknowledged as upper boundary, mitigation explained                                       |
| No "Claude in Excel" misuse          | PASS -- term does not appear in the file                                                                      |

---

## Prioritized Recommendations

### Must Fix (before publish)

1. **Issue 4**: Add the missing prompt block for the follow-up email exercise. Students need a copyable prompt for every generation task.

2. **Issue 3**: Change "Claude" to "Cowork" in the Try With AI intro (line 348). The lesson requires plugins, which are a Cowork feature.

### Should Fix (quality improvement)

3. **Issue 2**: Standardize "extension" to "plugin" on lines 79, 281, and 348 to match the README's terminology. This is a chapter-wide issue but should be corrected in this lesson at minimum.

4. **Issue 1**: The Compliance Gap fabricated output (lines 247-269) is the one remaining hardcoded example. It has a disclaimer, which mitigates the risk. However, the fabricated statistics inside it ("60% of maritime trade", "40% compliance processing time reduction") are presented as facts within the example. Either:
   - (a) Add a note within the example that statistics are illustrative, OR
   - (b) Replace with an intent table + discovery prompt (consistent with the Meridian exercises), OR
   - (c) Accept as-is given the disclaimer already present.

### Nice to Have

5. **Issue 6**: Add a brief reflection pause before the Compliance Gap analysis to make the discovery more active.

6. **Issue 7**: Differentiate Try With AI Prompt 1 from the main lesson prompt by using a different prospect.
