# Audit Report: Ch23 L05 — The Five Laws of Outreach

**File**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/05-the-five-laws-of-outreach.md`
**Skill**: lesson-prompt-improver
**Date**: 2026-03-11
**Context**: Post-fix audit. File was updated in commits `4a92156b` and `75906eee` to replace fabricated outputs with intent tables.

## Summary

| Defect Type | Count | Severity |
| --- | --- | --- |
| D1: Fabricated Agent Output | 0 | -- |
| D2: Missing Skill Name in Prompt | 2 | Medium |
| D3: Inline Data Injection | 0 | -- |
| D4: Fiction-Researching Prompt | 0 | -- |
| D5: Narrative Referencing Fabricated Content | 0 | -- |
| D6: Plugin/Tool Terminology | 2 | Medium |
| **Total** | **4** | |

**Additional issues**: 1 usability gap (missing prompt block).

## Defect Details

### D2-1: Missing skill name — Compliance Gap prompt (Lines 239-242)

**Current:**
```
Draft outreach for Hamza Qureshi, COO at PakFreight Solutions
in Karachi. Hook: they just won a government contract for port
logistics at Karachi Port Trust.
```

**Recommended fix:**
```
Use the outreach skill to draft outreach for Hamza Qureshi, COO
at PakFreight Solutions in Karachi. Hook: they just won a
government contract for port logistics at Karachi Port Trust.
```

**Rationale**: This is the primary exercise prompt in the "Compliance Gap" section. Per skill rules, primary exercise prompts should name the skill.

---

### D2-2: Missing skill name — Three Outreach Messages prompt (Lines 299-309)

**Current:**
```
Generate outreach for my top 3 scored prospects, one per channel:
...
```

**Recommended fix:**
```
Use the outreach skill to generate outreach for my top 3 scored
prospects, one per channel:
...
```

**Rationale**: This is the primary exercise prompt in the "Producing Three Outreach Messages" section.

---

### D6-1: Wrong platform name in Try With AI header (Line 348)

**Current:**
```
Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins installed.
```

**Recommended fix:**
```
Use these prompts in Cowork or your preferred AI assistant with the Sales, Marketing, and RevOps extension plugins installed.
```

**Rationale**: Per `.claude/rules/cowork-content.md`, Ch18+ content should reference "Cowork" not "Claude". The tool name rule is: "Use these prompts in Cowork or your preferred AI assistant."

---

### D6-2: Missing "Marketing" in plugin name (Line 348)

**Same line as D6-1.** "Sales and RevOps extension plugins" should be "Sales, Marketing, and RevOps extension plugins". This is part of the same fix as D6-1.

---

## Additional Issue (Not a Skill Defect Type)

### Usability gap: Missing prompt block after line 219

**Current (line 219):**
```
Now generate a follow-up email for the same prospect — different channel, same Five Laws:
```

This narrative instruction tells the student to generate a follow-up email, but no prompt code block follows. The intent table on lines 222-232 describes what to expect from the output, but the student has no copyable prompt. Either:

- (a) Add a prompt block: `Use the outreach skill to draft a cold email follow-up for Sarah Chen at Meridian Logistics. Same hook: Leeds warehouse expansion of 40%. Different channel, different framing.`
- (b) Make the narrative explicitly instruct the student to write their own prompt (if that's the pedagogical intent).

---

## Correctly Handled Elements

1. **Compliance Gap example (lines 246-269)**: Intentional teaching example with `:::note Illustrative example` disclaimer. Falls under the "Anti-pattern examples" exception. Correctly retained.

2. **Narrative discussing Compliance Gap example (lines 275-281)**: References specific content from the intentional example. Appropriate since the example is retained for teaching purposes.

3. **Intent tables (lines 206-216, 222-232)**: Well-structured. Follow the skill's intent table design guide: 3-4 rows, match skill output structure, include "What to Verify" column. Disclaimer notes are present and correctly scoped.

4. **Try With AI Prompt 1 (lines 352-365)**: Correctly includes skill name ("Use the outreach skill to..."). Includes audit instructions. Has "What you are learning" explanation.

5. **YAML frontmatter**: Complete with all required fields (sidebar_position, title, description, keywords, chapter, lesson, duration_minutes, skills, learning_objectives, cognitive_load, differentiation).

6. **No inline data injections**: No instances of "Read demo-data.md" or similar patterns. Folder instructions handle data references.

7. **No fiction-researching prompts**: All prompts provide hooks directly rather than asking the agent to web-search fictional entities.

## Verdict

The file is in good shape after the previous fix commits. The fabricated output replacement (D1) was done correctly -- the Compliance Gap example is appropriately retained with a disclaimer. Four medium-severity issues remain: two missing skill names in exercise prompts and a terminology fix in the Try With AI header. One usability gap (missing prompt block) is worth addressing.

**Recommended action**: Fix all 4 defects and the usability gap. Estimated effort: 5 minutes.
