# Prompt Quality Audit Report

**Lesson:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/09-malaysia-sukuk.md`
**Title:** Malaysia Sukuk — The World's Largest Market
**Chapter:** 20 (Islamic Finance Domain Agents)
**Auditor:** lesson-prompt-improver skill
**Date:** 2026-03-11

---

## Summary

| Defect Type                                        | Count | Severity |
| -------------------------------------------------- | ----- | -------- |
| Defect 1: Fabricated Agent Output                  | 1     | CRITICAL |
| Defect 2: Missing Skill Name in Prompt             | 6     | Medium   |
| Defect 3: Inline Data Injection                    | 0     | —        |
| Defect 4: Fiction-Researching Prompt               | 0     | —        |
| Defect 5: Narrative Referencing Fabricated Content | 1     | Medium   |
| Defect 6: Plugin/Tool Terminology                  | 0     | —        |
| **Total**                                          | **8** |          |

---

## Defect Details

### Defect 1: Fabricated Agent Output (CRITICAL)

| Line Range | Current Content (first line)                                                    | Recommended Fix          |
| ---------- | ------------------------------------------------------------------------------- | ------------------------ |
| 165-168    | `**Output:** The distribution is a **finance cost in the income statement**...` | See recommendation below |

**Analysis:** Lines 165-168 are labelled `**Output:**` and present a definitive statement about how the distribution appears in financial statements. While this is more explanatory than a typical fake agent report with scores and decorated formatting, the `**Output:**` label follows the detection pattern for Defect 1. However, this is a borderline case — it reads more like a teaching explanation than a fabricated agent output block. The content describes what MFRS 9 requires (which is factually deterministic), not a variable agent response.

**Recommendation:** This is an edge case. The content is factual and deterministic (MFRS 9 rules), not variable agent output. However, the `**Output:**` label could mislead students into thinking this is what the agent will literally produce. Two options:

1. **Minimal fix (recommended):** Relabel from `**Output:**` to `**Key point:**` or `**Accounting treatment:**` to avoid confusion with agent output. The content itself is correct and pedagogically valuable — it does not need an intent table because it is not agent output; it is a teaching explanation of the accounting rule.

2. **Full intent table replacement:** Overkill for this case, since the content is not fabricated variable output but a deterministic accounting rule explanation.

---

### Defect 2: Missing Skill Name in Prompt

The Islamic Finance plugin uses a router architecture with product skills and jurisdiction overlays. Exercise prompts should reference the relevant skill so students know what the agent is activating. The chapter's Lesson 3 establishes the three-layer architecture (router > product skill > jurisdiction overlay), yet the exercise prompts in this lesson use generic "Ask your AI assistant" phrasing with no skill reference.

| Line Range | Prompt Location                     | Current Opening                                               | Recommended Fix                                                                                                                   |
| ---------- | ----------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 237-239    | Exercise 6, Step 1 (primary prompt) | `Ask your AI assistant:` + `"Jurisdiction: Malaysia..."`      | Add skill reference: `Use the sukuk-accounting skill. Jurisdiction: Malaysia...`                                                  |
| 241-243    | Exercise 6, Step 2                  | `Ask:` + `"Generate the quarterly distribution entries..."`   | No change needed — this is a follow-up prompt in the same flow                                                                    |
| 245-247    | Exercise 6, Step 3                  | `Ask:` + `"Malaysia's Employees Provident Fund..."`           | No change needed — follow-up prompt                                                                                               |
| 249-251    | Exercise 6, Step 4                  | `Ask:` + `"Tenaga wishes to designate..."`                    | No change needed — follow-up prompt                                                                                               |
| 253-255    | Exercise 6, Step 5                  | `Ask:` + `"Draft the accounting and financial disclosure..."` | No change needed — follow-up prompt                                                                                               |
| 271-292    | Try With AI, Prompt 1               | `I hold three different Malaysian sukuk...`                   | Add skill reference: `Use the sukuk-accounting skill. I hold three different Malaysian sukuk...`                                  |
| 296-314    | Try With AI, Prompt 2               | `A Malaysian corporation is deciding...`                      | No change needed — not the first prompt in a section, and this prompt is conceptual comparison, likely best handled by the router |

**Note on skill name:** The chapter uses product skill names like `murabaha`, `ijarah`, `sukuk`, etc. The sukuk product skill would be the correct reference for this lesson's prompts. Based on the plugin architecture (Lesson 3), the skill name should follow the natural language pattern: "Use the sukuk-accounting skill" or "Use the sukuk skill." The router will also pick up `Jurisdiction: Malaysia` and load the Malaysia overlay automatically.

**Recommendation:** Add skill name to the two primary prompt entry points only:

1. **Exercise 6, Step 1** (line 239): Change `"Jurisdiction: Malaysia. Framework: MFRS. I am Tenaga Nasional Berhad (issuer). Classify the sukuk musharakah under IAS 32..."` to `"Use the sukuk-accounting skill. Jurisdiction: Malaysia. Framework: MFRS. I am Tenaga Nasional Berhad (issuer). Classify the sukuk musharakah under IAS 32..."`

2. **Try With AI, Prompt 1** (line 274): Add `Use the sukuk-accounting skill.` as the first line of the code block.

Do NOT add skill names to Steps 2-5 (follow-up prompts in the same flow) or to Try With AI Prompts 2 and 3 (Prompt 2 is a conceptual comparison better routed generically; Prompt 3 is a write-your-own exercise where adding a skill name defeats the purpose).

---

### Defect 3: Inline Data Injection

**No instances found.** The lesson correctly references the exercise data file via the `:::info Exercise Requirements` block (lines 223-227) with a download link, rather than injecting inline data reads into prompts. The exercise prompts reference a specific scenario (Tenaga Nasional Berhad) with parameters embedded directly in the prompt text, which is appropriate — the student is providing the parameters, not asking the agent to read a file.

---

### Defect 4: Fiction-Researching Prompt

**No instances found.** Tenaga Nasional Berhad is a real Malaysian corporation (Malaysia's national electricity company), not a fictional entity from demo-data. EPF is a real institution. All entities referenced in prompts are real-world entities with publicly available information. No prompts ask the agent to "research" or "pull current data" on fictional entities.

---

### Defect 5: Narrative Referencing Fabricated Content

| Line Range | Current Content (first line)                                                                                                                 | Recommended Fix                                                                                                                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 167-168    | `This is because the sukuk is classified as a financial liability, and distributions on financial liabilities are expenses under IFRS/MFRS.` | If Defect 1 is fixed by relabelling (not removing), this narrative remains valid and no change is needed. Only becomes orphaned if the "Output" block is fully replaced with an intent table. |

**Recommendation:** Since the Defect 1 recommendation is to relabel (not replace with intent table), this narrative stays intact. No action needed unless Defect 1 fix changes.

---

### Defect 6: Plugin/Tool Terminology

**No instances found.** The lesson correctly uses "Cowork" (line 234, 269) and does not reference "Claude in Excel." The plugin is correctly named "Islamic Finance Domain Agents" (line 225). No terminology issues detected.

---

## Overall Assessment

This lesson is in **good shape** relative to the six defect types. The primary issues are:

1. **One borderline fabricated output label** (lines 165-168) — easily fixed by relabelling from "Output:" to "Key point:" or "Accounting treatment:"
2. **Missing skill names on two primary prompts** — Exercise 6 Step 1 and Try With AI Prompt 1 should reference the sukuk-accounting skill

The lesson avoids the most damaging patterns: no fabricated agent reports with fake scores, no fiction-researching prompts, no inline data injection, and correct Cowork terminology. The exercise design is strong — real-world entity (Tenaga Nasional), real institutional investor (EPF), and a progressive 5-step structure building from classification through regulatory submission.

---

## Recommended Fixes (Priority Order)

| Priority | Fix                                                               | Effort                        | Lines Affected |
| -------- | ----------------------------------------------------------------- | ----------------------------- | -------------- |
| 1        | Relabel `**Output:**` to `**Accounting treatment:**` on line 165  | Trivial (1 line)              | 165            |
| 2        | Add `Use the sukuk-accounting skill.` to Exercise 6 Step 1 prompt | Trivial (prepend to line 239) | 239            |
| 3        | Add `Use the sukuk-accounting skill.` to Try With AI Prompt 1     | Trivial (prepend to line 274) | 274            |

**Estimated total fix time:** Under 5 minutes.
