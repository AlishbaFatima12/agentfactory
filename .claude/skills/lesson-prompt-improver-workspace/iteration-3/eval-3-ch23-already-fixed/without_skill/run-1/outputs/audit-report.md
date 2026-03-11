# Audit Report: Ch23 L05 — The Five Laws of Outreach

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/05-the-five-laws-of-outreach.md`
**Auditor:** Claude (without skill)
**Date:** 2026-03-11

---

## 1. Fabricated Agent Outputs

### Finding: One fabricated output remains (lines 247-269)

The Compliance Gap section (lines 244-269) contains a fully fabricated agent output block — a complete LinkedIn DM for Hamza Qureshi at PakFreight Solutions, including a fake word count ("92/100") and fake law check line ("Law check: 1 + | 2 + | 3 + | 4 + | 5 +").

There is an `:::note Illustrative example` disclaimer (lines 271-273) that frames this as a teaching example. This partially mitigates the issue — the disclaimer acknowledges the output is fabricated. However, it still presents fabricated agent output in a code block formatted identically to real agent output, which can confuse students about what agents actually produce.

**Severity:** Medium. The disclaimer helps, but the fabricated output is presented in a code block with exact word counts and law-check formatting that mimics real agent output. The intent-table pattern used elsewhere in this file (lines 206-211, 223-228) is a better approach — it was applied to the Meridian DM and follow-up email sections but not to the Compliance Gap example.

**Recommendation:** Replace the fabricated code block (lines 247-269) with an intent table describing what the student should expect, followed by a description of the compliance gap diagnostic. The teaching point (culturally mismatched message passes content laws) can be made without fabricating specific output text.

---

## 2. Missing Skill Names

### Finding: Skill name is present but inconsistent

The lesson references the `outreach` skill by name (lines 89, 203, 236) using inline code formatting. This is good. However:

- Line 89: "`outreach` skill" — correct
- Line 203: "`outreach` skill" — correct
- Line 236: "outreach skill" — missing backtick formatting

The skill name format is consistent enough for functionality but has a minor formatting inconsistency at line 236.

**Severity:** Low (cosmetic).

---

## 3. Inline Data Injection

### Finding: No inline data injection issues

The prompts correctly reference data from prior lessons rather than injecting raw data inline:

- Line 197-201: References "Sarah Chen at Meridian Logistics" and the Leeds warehouse expansion hook from prior lessons
- Lines 239-242: Provides prospect context (Hamza Qureshi) as scenario setup, not raw data injection
- Lines 300-309: References "top 3 scored prospects from Lesson 3" — points to prior work, does not inject data

No issues found in this category.

---

## 4. Fiction-Researching Prompts

### Finding: No fiction-researching prompts

All prompts ask the agent to draft outreach or audit existing output. None ask the agent to "research" fictional companies. The prompts correctly use previously established lesson data (Meridian Logistics from L02, scoring from L03, enrichment from L04).

No issues found in this category.

---

## 5. Narrative Referencing Fabricated Content

### Finding: Narrative references the fabricated Compliance Gap output

Lines 275-281 directly analyze the fabricated output from lines 247-269:

- "The reference case is a UK freight operator" — references fabricated content
- "The tone is formal British business English" — references fabricated content
- "The sign-off is a dash followed by a first name" — references fabricated content

This narrative analysis depends on the specific fabricated text. If the fabricated output is replaced with an intent table, this narrative would need to be generalized to describe the *pattern* of compliance gaps rather than analyzing specific fabricated text.

**Severity:** Medium. The narrative is pedagogically strong — it teaches a real diagnostic skill. But it is tightly coupled to fabricated output. The teaching could be restructured to describe what compliance gaps look like in general terms, with the student discovering the specific issues in their own output.

---

## 6. Terminology Issues

### Finding: One terminology issue

Line 348: "Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins installed."

Per the cowork-content rules, the standard phrasing should be "Use these prompts in Cowork or your preferred AI assistant." However, this chapter (Ch 23) is listed as "Low" priority in the terminology debt table (1 occurrence), and the lesson does not appear to be a Cowork-native lesson — it references "extension plugins" rather than Cowork's Instructions pane. The correct terminology depends on whether this chapter's exercises are designed for Cowork or for Claude Code with plugins.

**Severity:** Low. Needs clarification on the intended platform for Ch 23 exercises.

### Finding: "extension" vs "skill" terminology

- Line 79: "WITHOUT the extension loaded" — should this be "without the skill loaded" or "without the plugin installed"?
- Line 281: "The agent has no jurisdiction or cultural awareness loaded" — fine, this describes agent state
- Line 203: "The `outreach` skill auto-activates" — correct skill terminology
- Line 348: "extension plugins" — mixed terminology; should be either "skills" or "plugins"

The lesson mixes "extension" and "skill" terminology. The dominant pattern in the lesson is "skill" (lines 89, 203, 236), but "extension" appears twice (lines 79, 348).

**Severity:** Low-Medium. Inconsistent terminology may confuse students about whether "extension" and "skill" are the same thing.

---

## 7. Other Issues

### 7a. Try With AI section missing skill name in prompts

The three Try With AI prompts (lines 352-364, 371-380, 386-398) do not include the `outreach` skill name in the prompt text. The main lesson prompts reference it (line 198: "Use the outreach skill"), but the Try With AI prompts don't consistently do so:

- Prompt 1 (line 353): "Use the outreach skill" — correct
- Prompt 2 (line 372): "Take the Meridian Logistics outreach from Prompt 1" — no skill reference (acceptable, it's a continuation)
- Prompt 3 (line 387): "Draft outreach for a real prospect" — no skill invocation

**Severity:** Low. Prompt 3 should probably include "Use the outreach skill" to ensure the skill activates.

### 7b. Frontmatter closing delimiter

The YAML frontmatter closing `---` is at line 81, which is correct.

### 7c. Flashcards component

Line 344: `<Flashcards />` — present and correct per project conventions.

---

## Summary

| Category | Issues Found | Severity |
|---|---|---|
| Fabricated agent outputs | 1 (Compliance Gap code block, lines 247-269) | Medium |
| Missing skill names | 0 (minor formatting inconsistency at line 236) | Low |
| Inline data injection | 0 | None |
| Fiction-researching prompts | 0 | None |
| Narrative referencing fabricated content | 1 (lines 275-281 analyze fabricated output) | Medium |
| Terminology issues | 2 ("extension" vs "skill" inconsistency; Try With AI platform phrasing) | Low-Medium |

### Overall Assessment

The lesson is in good shape after the intent-table fixes. The main remaining issue is the fabricated Compliance Gap output block (lines 247-269) and the narrative that analyzes it (lines 275-281). This is the one section where the prior fix (replacing fabricated outputs with intent tables) was not applied — likely because the fabricated output serves a specific pedagogical purpose (demonstrating a compliance gap). The `:::note Illustrative example` disclaimer mitigates the concern but does not fully resolve it. The teaching point could be restructured to use the intent-table pattern with guidance for students to discover the compliance gap in their own output.
