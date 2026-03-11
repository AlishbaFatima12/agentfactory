# Audit Report: L05 — The Five Laws of Outreach

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/05-the-five-laws-of-outreach.md`

**Context:** Ch23 was recently fixed in commits `4a92156b` and `75906eee`. This audit checks whether any defects remain.

## Summary

| Defect Type                         | Count | Severity |
| ----------------------------------- | ----- | -------- |
| D1: Fabricated Agent Output         | 0     | —        |
| D2: Missing Skill Name in Prompt    | 2     | LOW      |
| D3: Inline Data Injection           | 0     | —        |
| D4: Fiction-Researching Prompt      | 0     | —        |
| D5: Narrative Referencing Fabricated | 0     | —        |
| D6: Plugin/Tool Terminology         | 2     | LOW      |

**Overall: 4 low-severity issues remain. No critical defects.**

---

## Defect Details

### D1: Fabricated Agent Output — CLEAR (with note)

Lines 246-269 contain a full fabricated LinkedIn DM for Hamza Qureshi with specific content ("60% of the country's maritime trade passes through KPT", "Word count: 92/100", "Law check: 1 ✓ | 2 ✓ | 3 ✓ | 4 ✓ | 5 ✓").

**Why this is NOT a defect:** This is a deliberate anti-pattern example for teaching the Compliance Gap. The message is shown specifically so students can see a message that passes all Five Laws on content but fails on cultural appropriateness. Lines 271-273 include a `:::note Illustrative example` disclaimer. Per the skill's exception rules, anti-pattern examples used for teaching contrast are exempt.

The two Meridian Logistics outputs (lines 206-215 and 222-232) are already converted to intent tables. Clean.

### D2: Missing Skill Name in Prompt — 2 instances

| Line | Current Content (first line)                           | Recommended Fix                                                      |
| ---- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| 239  | `Draft outreach for Hamza Qureshi, COO at PakFreight…` | `Use the outreach skill to draft outreach for Hamza Qureshi, COO…`   |
| 300  | `Generate outreach for my top 3 scored prospects…`     | `Use the outreach skill to generate outreach for my top 3 scored…`   |

Both are primary exercise prompts (first prompt in their respective sections). Per skill rules, primary exercise prompts should name the skill. Follow-up prompts (line 326) and later Try With AI prompts (lines 371, 387) are correctly exempt.

### D3: Inline Data Injection — CLEAR

No instances of `Read demo-data.md`, `Read sales-marketing.local.md`, or `[Paste or reference the...]` found in any prompt block. Folder instructions approach from L01 is working as intended.

### D4: Fiction-Researching Prompt — CLEAR

The PakFreight Solutions prompt (line 239) provides the hook directly in the prompt text ("they just won a government contract for port logistics at Karachi Port Trust") rather than asking the agent to research the fictional entity via web search. The Meridian Logistics prompt (line 198) similarly provides the hook inline. No fiction-researching risk.

### D5: Narrative Referencing Fabricated Content — CLEAR

The narrative following the Compliance Gap example (lines 275-281) references structural and tonal elements ("The reference case is a UK freight operator", "The tone is formal British business English"), not specific fabricated numbers. Since the fabricated output is retained as a teaching anti-pattern (D1 exception), these structural references are appropriate and support the pedagogical intent.

### D6: Plugin/Tool Terminology — 2 instances

| Line | Current                                                                                                 | Recommended Fix                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 348  | `Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins` | `Use these prompts in Cowork or your preferred AI assistant with the Sales, Marketing, and RevOps extension plugins` |
| 348  | `Sales and RevOps extension plugins`                                                                    | `Sales, Marketing, and RevOps extension plugins`                                                                   |

Per `cowork-content.md`, Try With AI setup lines should use "Cowork" not "Claude" for Ch18+. Also, the plugin suite name is missing "Marketing."

---

## Verdict

The lesson is in good shape post-fix. The four remaining issues are all LOW severity — two missing skill names on exercise prompts and a terminology line in the Try With AI header. No critical fabricated-output defects remain. The intentional Compliance Gap anti-pattern example is correctly disclaimed.
