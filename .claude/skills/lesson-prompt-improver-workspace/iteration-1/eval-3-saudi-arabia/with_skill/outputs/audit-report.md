# Prompt Quality Audit Report

**Lesson:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Title:** Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi
**Chapter:** 20 — Islamic Finance Domain Agents
**Lesson:** 10
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11

---

## Summary

| Defect Type                                        | Count | Severity   |
| -------------------------------------------------- | ----- | ---------- |
| Defect 1: Fabricated Agent Output                  | 0     | --         |
| Defect 2: Missing Skill Name in Prompt             | 6     | Medium     |
| Defect 3: Inline Data Injection                    | 0     | --         |
| Defect 4: Fiction-Researching Prompt               | 0     | --         |
| Defect 5: Narrative Referencing Fabricated Content | 0     | --         |
| Defect 6: Plugin/Tool Terminology                  | 0     | --         |
| **Total**                                          | **6** | **Medium** |

**Overall Assessment:** This lesson is in good shape. There are zero critical defects (no fabricated agent output blocks). The only defect type found is Defect 2 — missing skill names in exercise prompts. The lesson uses real institutions (Al Rajhi Bank, Alinma Bank, PIF, Saudi Electricity Company, ZATCA) with factually grounded data, the Try With AI prompts are well-constructed with learning explanations, and terminology is correct throughout.

---

## Defect-by-Defect Analysis

### Defect 1: Fabricated Agent Output (CRITICAL)

**Status: CLEAN**

No fabricated agent output blocks found. The lesson contains code blocks, but they are all legitimate:

- **Lines 134-143:** ZATCA zakat formula definition — this is a framework/formula specification, not fabricated output.
- **Lines 165-168, 172-175:** Journal entry templates with `[Calculated amount]` placeholders — these are accounting templates, not fabricated output.
- **Lines 244-269:** Try With AI Prompt 1 — this is a prompt block (student input), not output.
- **Lines 276-302:** Try With AI Prompt 2 — prompt block.
- **Lines 308-330:** Try With AI Prompt 3 — prompt block.

All code blocks are either formulas, journal entry templates, or student prompts. No blocks pretend to show exact agent output with fake numbers.

**Note on line 177-179:** The text `**Output:**` followed by "Zakat is recognised as an expense..." is a narrative explanation of accounting treatment, not a fabricated agent output block. It describes the real-world outcome of the journal entry. This is borderline labelling — the word "Output" could be confused with agent output — but the content itself is factual accounting guidance, not a fabricated AI response.

**Recommendation:** Consider relabelling `**Output:**` on line 177 to `**Accounting treatment:**` or `**Recognition:**` to avoid ambiguity with the "agent output" concept. This is a minor clarity improvement, not a defect fix.

---

### Defect 2: Missing Skill Name in Prompt

**Status: 6 INSTANCES FOUND**

The exercise prompts (Steps 1-6 in Exercise 7) and the Try With AI prompts do not name which skill from the Islamic Finance Domain Agents plugin should be activated. Chapter 20 teaches the Islamic Finance plugin which has a router skill and 12 product-level skills. Students should know which skill is being invoked.

| Line Range | Location           | Current Prompt Opening                                                                                                                                  | Recommended Fix                                                                                           |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 216        | Exercise 7, Step 1 | _"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA. Based on publicly available information about Al Rajhi Bank's financial reporting..."_ | Prefix with: _"Use the saudi-arabia jurisdiction skill. Jurisdiction: Saudi Arabia..."_                   |
| 220        | Exercise 7, Step 2 | _"ZATCA uses a Saudi-specific zakat base formula. Apply this formula to Alinma Bank..."_                                                                | Prefix with: _"Use the saudi-arabia jurisdiction skill. ZATCA uses a Saudi-specific..."_                  |
| 224        | Exercise 7, Step 3 | _"Alinma Bank holds SAR 2 billion of PIF sukuk..."_                                                                                                     | Prefix with: _"Use the saudi-arabia jurisdiction skill. Alinma Bank holds SAR 2 billion..."_              |
| 228        | Exercise 7, Step 4 | _"Saudi Electricity Company issued green sukuk to fund renewable energy projects..."_                                                                   | Prefix with: _"Use the saudi-arabia jurisdiction skill. Saudi Electricity Company issued green sukuk..."_ |
| 232        | Exercise 7, Step 5 | _"Produce Alinma Bank's monthly Islamic finance management accounts..."_                                                                                | Prefix with: _"Use the saudi-arabia jurisdiction skill. Produce Alinma Bank's monthly..."_                |
| 234        | Exercise 7, Step 6 | _"A Saudi Islamic bank calculated its ZATCA zakat base as..."_                                                                                          | Prefix with: _"Use the saudi-arabia jurisdiction skill. A Saudi Islamic bank calculated..."_              |

**Try With AI prompts (lines 244-330):** These three prompts also lack skill names. However, per the skill's rule — "Only add skill names to **primary exercise prompts** (the first prompt in a section and Try With AI Prompt 1)" — only Try With AI Prompt 1 (line 244) needs the skill name added.

| Line Range | Location             | Current Prompt Opening                                                      | Recommended Fix                                                                                  |
| ---------- | -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 244-269    | Try With AI Prompt 1 | `Compare the ZATCA zakat calculation with the Hanafi/AAOIFI methodology...` | Prefix with: `Use the saudi-arabia jurisdiction skill to compare the ZATCA zakat calculation...` |

**Note on skill name:** The exact skill name should match the plugin's skill directory. The Islamic Finance plugin has 13 jurisdiction overlays. The Saudi Arabia overlay skill name needs to be verified against the actual plugin. I've used `saudi-arabia jurisdiction skill` as the natural language reference — the implementer should confirm the exact skill name from the plugin manifest.

**Scope note:** Per the skill rules, follow-up prompts within a flow (Steps 2-6 in Exercise 7) may not strictly need skill names since they continue the same session context. However, each step in this exercise is independently executable (students could run any step in isolation), so adding the skill name to each primary step prompt is the safer approach.

---

### Defect 3: Inline Data Injection

**Status: CLEAN**

No instances of `Read demo-data.md`, `Read sales-marketing.local.md`, or `[Paste or reference the...]` found in any prompt blocks. This lesson uses exercise-specific data files (referenced via the `:::info Exercise Requirements` block on lines 200-204) with a download link pattern, not inline data injection.

The exercise data file reference on line 203 (`exercises/ex06-saudi-ifi-alinma.md`) is a proper setup instruction in an admonition block, not an inline injection inside a prompt.

---

### Defect 4: Fiction-Researching Prompt

**Status: CLEAN**

All entities referenced in prompts are real:

- **Al Rajhi Bank** — real, world's largest Islamic bank
- **Alinma Bank** — real Saudi Islamic bank (Tadawul-listed)
- **PIF (Public Investment Fund)** — real Saudi sovereign wealth fund
- **Saudi Electricity Company** — real (Tadawul-listed)
- **ZATCA** — real Saudi government authority
- **SAMA** — real Saudi central bank
- **NHC (National Housing Company)** — real Saudi government entity

No prompts ask the agent to web-research fictional entities. The financial figures used in prompts (e.g., "Share capital SAR 20B") are simplified exercise data explicitly provided in the prompt, not claims about real company financials that would require verification.

---

### Defect 5: Narrative Referencing Fabricated Content

**Status: CLEAN**

Since there are no fabricated output blocks (Defect 1 is clean), there are no orphaned narrative references. The "Check your work" section (line 236) references specific numbers, but these are answer-key values derived from the exercise data provided in the prompts — not from fabricated agent output. This is legitimate pedagogical scaffolding (providing expected answers for self-assessment).

---

### Defect 6: Plugin/Tool Terminology

**Status: CLEAN**

- **Line 202:** `**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)` — correct plugin name.
- **Line 210:** `**Requirements:** Cowork or Claude (any plan).` — correct Cowork terminology.
- **Line 240:** `Use these prompts in Cowork or your preferred AI assistant` — correct phrasing per `.claude/rules/cowork-content.md`.
- No instances of "Claude in Excel" found (correct — this is Ch 20, not Ch 17).
- No instances of incorrect plugin terminology.

---

## Recommended Fixes — Priority Order

### Priority 1: Add skill names to exercise prompts (Defect 2)

**Effort:** Low (text additions to 7 prompt locations)
**Impact:** Medium — students will know which plugin skill to activate

For Exercise 7 Steps 1-6, prefix each prompt's italic text with `Use the saudi-arabia jurisdiction skill.` in natural language (not slash-command style).

For Try With AI Prompt 1, prefix the code block content with `Use the saudi-arabia jurisdiction skill to` and adjust the sentence flow.

### Priority 2 (Optional): Relabel "Output:" on line 177

**Effort:** Trivial (one word change)
**Impact:** Low — reduces potential confusion between accounting "output" and agent "output"

Change `**Output:**` to `**Accounting treatment:**` or `**Recognition:**`.

---

## Comparison With Other Lesson Patterns

This lesson follows strong patterns:

- Exercise data provided via download link in an admonition block (not inline injection)
- All entities are real institutions (no fiction-researching risk)
- Try With AI prompts include `**What you are learning:**` explanations
- Prompts use code blocks for copyability
- "Check your work" section provides answer-key values derived from exercise inputs
- Correct Cowork terminology throughout
- No fabricated agent output blocks

The only systematic gap is the missing skill names in prompts, which is a common Defect 2 pattern across Chapter 20 jurisdiction lessons.
