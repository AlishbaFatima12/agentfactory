# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/10-saudi-arabia.md`
**Auditor:** lesson-prompt-improver skill (eval run)
**Date:** 2026-03-11

---

## Summary Table of Defects Found

| #   | Line Range | Defect Type                       | Current Content (first line)                               | Recommended Fix                                                                                                                                                                            |
| --- | ---------- | --------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 177-179    | Defect 1: Fabricated Agent Output | `**Output:** Zakat is recognised as an expense...`         | Remove the `**Output:**` label; this is explanatory narrative, not agent output — but the label makes it look like fabricated agent output. Rephrase as inline prose or a `:::info` block. |
| 2   | 214-216    | Defect 2: Missing Skill Name      | `Ask your AI assistant: "Jurisdiction: Saudi Arabia..."`   | Add skill name: "Use the **islamic-finance** skill..." or "Use the **jurisdiction-overlay** skill..."                                                                                      |
| 3   | 218-220    | Defect 2: Missing Skill Name      | `Ask: "ZATCA uses a Saudi-specific zakat base formula..."` | Add skill name to primary prompt for Step 2                                                                                                                                                |
| 4   | 222-224    | Defect 2: Missing Skill Name      | `Ask: "Alinma Bank holds SAR 2 billion of PIF sukuk..."`   | Add skill name to primary prompt for Step 3                                                                                                                                                |
| 5   | 226-228    | Defect 2: Missing Skill Name      | `Ask: "Saudi Electricity Company issued green sukuk..."`   | Add skill name to primary prompt for Step 4                                                                                                                                                |
| 6   | 230-232    | Defect 2: Missing Skill Name      | `Ask: "Produce Alinma Bank's monthly Islamic finance..."`  | Add skill name to primary prompt for Step 5                                                                                                                                                |
| 7   | 234        | Defect 2: Missing Skill Name      | `Review this deliberately flawed calculation...`           | Add skill name to primary prompt for Step 6                                                                                                                                                |

**Total defects found: 7** (1 borderline Defect 1 labelling issue, 6 Defect 2 missing skill names)

---

## Detailed Analysis by Defect Type

### Defect 1: Fabricated Agent Output — FOUND (borderline)

**Lines 177-179:**

```
**Output:**

Zakat is recognised as an expense in the Saudi IFI's income statement. It is filed with ZATCA annually, within 120 days of fiscal year-end.
```

**Analysis:** This is NOT a fabricated agent output with fake numbers, scores, or company-specific metrics. It is factual explanatory text about ZATCA filing requirements. However, the `**Output:**` label is problematic because:

1. It follows the journal entry code blocks (lines 163-175), creating the visual pattern "prompt block followed by Output:" which exactly matches the fabricated output detection pattern.
2. A student could mistake this for showing what the agent will produce.

**Recommendation (LOW priority):** Remove the `**Output:**` label and integrate this as regular prose or an `:::info` admonition. The content itself is correct and educational — only the label is misleading.

**Correctly EXCLUDED from Defect 1 (no action needed):**

- **Lines 134-144 — ZATCA formula code block:** This is a framework definition (mathematical formula), NOT fabricated agent output. The formula `Zakat Base = Share Capital + Statutory Reserves + ...` defines the framework students need to learn. **Correctly excluded per exception: "Framework tables: Scoring models, classification tiers, routing rules — these define the framework, not fake agent output."**

- **Lines 148-161 — ZATCA vs AAOIFI/Hanafi comparison table:** This is a comparison table showing structural differences between two zakat methodologies. **Correctly excluded per exception: "Comparison tables: Side-by-side structural comparisons."**

- **Lines 163-175 — Journal entry code blocks:** These are template journal entries with `[Calculated amount]` and `[Same]` placeholders, not specific fabricated numbers. They show the accounting structure. **Correctly excluded per exception: "Student-generated data / framework definitions."**

- **Lines 244-269 — Try With AI Prompt 1 code block:** This is a prompt block (student input), not fabricated output. **Correctly excluded per exception: "Prompt blocks: Instructions the student types — these are inputs, not fabricated outputs."**

- **Lines 276-302 — Try With AI Prompt 2 code block:** Prompt block. **Correctly excluded.**

- **Lines 308-330 — Try With AI Prompt 3 code block:** Prompt block. **Correctly excluded.**

- **Lines 214-234 — Exercise prompt blocks (Steps 1-6):** All are student-typed prompts with specific data parameters. The student explicitly tells the agent what data to use (e.g., "Share capital SAR 20B, Statutory reserves SAR 4.5B..."). **Correctly excluded per exception: "Student-generated data: Output from prompts where the student explicitly tells the agent what data to generate (the prompt contains the parameters)."**

- **Lines 236 — "Check your work" block:** This provides verification answers (SAR 20.9B zakat base, SAR 522.5M obligation). This is an answer key for student self-checking, not fabricated agent output. It tells students what the correct answer IS, not what the agent will say. **Correctly excluded — this is pedagogical verification, not fabricated output.**

- **Lines 117-125 — Saudi Accounting Framework table:** Framework definition table. **Correctly excluded.**

---

### Defect 2: Missing Skill Name in Prompt — FOUND (6 instances)

**Context:** Chapter 20 uses the Islamic Finance Domain Agents plugin, which contains skills including jurisdiction overlays and product-level skills. The exercise box at line 202 references the plugin but individual exercise prompts do not name the skill being invoked.

**Exercise Step 1 (Lines 214-216):**

- Current: `Ask your AI assistant: "Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA..."`
- Issue: No skill name. Student doesn't know which skill to activate.
- Fix: `Use the islamic-finance skill: "Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA..."`

**Exercise Step 2 (Lines 218-220):**

- Current: `Ask: "ZATCA uses a Saudi-specific zakat base formula..."`
- Fix: Add skill reference at the beginning of the prompt.

**Exercise Step 3 (Lines 222-224):**

- Current: `Ask: "Alinma Bank holds SAR 2 billion of PIF sukuk..."`
- Fix: Add skill reference.

**Exercise Step 4 (Lines 226-228):**

- Current: `Ask: "Saudi Electricity Company issued green sukuk..."`
- Fix: Add skill reference.

**Exercise Step 5 (Lines 230-232):**

- Current: `Ask: "Produce Alinma Bank's monthly Islamic finance management accounts..."`
- Fix: Add skill reference.

**Exercise Step 6 (Line 234):**

- Current: `Review this deliberately flawed calculation...`
- Fix: Add skill reference.

**Per the skill methodology:** "Only add skill names to **primary exercise prompts** (the first prompt in a section and Try With AI Prompt 1). Don't add to every follow-up prompt in a flow."

**Interpretation for this lesson:** Each numbered step (1-6) is a separate task, not a follow-up in a single flow. Each step addresses a different topic (murabaha benchmarking, zakat computation, PIF sukuk, green sukuk, management accounts, error detection). Therefore each step IS a primary exercise prompt and should include the skill name.

**Try With AI prompts (Lines 244-330):** These are open-ended exploration prompts that do not reference a specific plugin skill. The Try With AI section says "Use these prompts in Cowork or your preferred AI assistant" (line 240), which is correct per cowork-content.md. Since these are meant to work with any AI assistant (not just the plugin), missing skill names here are acceptable and may be intentional. However, **Prompt 1 should ideally include a skill name** per the rule "the first prompt in a section and Try With AI Prompt 1."

---

### Defect 3: Inline Data Injection — CLEAN

**Analysis:** No instances of `Read demo-data.md`, `Read sales-marketing.local.md`, or `[Paste or reference the...]` found anywhere in the lesson. The exercise prompts embed data directly in the prompt text (e.g., "Share capital SAR 20B, Statutory reserves SAR 4.5B...") rather than referencing external data files via inline injection. This is the correct pattern for Ch 20, which uses exercise data files downloaded separately (line 203: `exercises/ex06-saudi-ifi-alinma.md`).

**Status: No defects.**

---

### Defect 4: Fiction-Researching Prompt — CLEAN

**Analysis:** The lesson uses real entities throughout:

- **Al Rajhi Bank** — real, world's largest Islamic bank (lines 183-190)
- **Alinma Bank** — real Saudi Islamic bank, listed on Tadawul (lines 212-234)
- **PIF (Public Investment Fund)** — real Saudi sovereign wealth fund (lines 192-198)
- **Saudi Electricity Company** — real Saudi utility company (lines 226-228)
- **ZATCA** — real Saudi government authority (lines 128-181)

No fictional companies are used. No prompts ask the agent to "research" or "pull current data" on fictional entities. The exercise data in prompts is explicitly provided by the student (SAR amounts, capital structure), not discovered via web search.

**Status: No defects.**

---

### Defect 5: Narrative Referencing Fabricated Content — CLEAN

**Analysis:** Since there are no fabricated output blocks with specific fake numbers (Defect 1 finding was a borderline labelling issue, not a numbers-based fabrication), there is no narrative that references specific scores or metrics from a now-removed fabricated block.

The "Check your work" section (line 236) references specific numbers (SAR 20.9B, SAR 522.5M), but these are **correct answers derived from the exercise prompt's own input data** — they are deterministic calculations the student can verify, not references to fabricated agent output.

The "What you are learning" paragraphs after each Try With AI prompt (lines 272, 304, 332) reference structural concepts ("the two formulas can produce materially different zakat obligations," "Al Rajhi's financial statements are the de facto benchmark") rather than specific fabricated numbers.

**Status: No defects.**

---

### Defect 6: Plugin/Tool Terminology — CLEAN

**Analysis:**

- **Line 202:** `Islamic Finance Domain Agents` — correct plugin name.
- **Line 210:** `Cowork or Claude (any plan)` — correct terminology. Uses "Cowork" not "Claude in Excel."
- **Line 240:** `Use these prompts in Cowork or your preferred AI assistant` — matches the exact pattern prescribed in cowork-content.md.
- **No instances of "Claude in Excel"** anywhere in the file.
- **No instances of "sales-marketing plugins"** or other incorrect plugin terminology.

Searched for: "Claude in Excel", "sales-marketing plugin", "Claude Cowork", "Claude in Cowork" — none found.

**Status: No defects.**

---

## Priority-Ordered Recommendations

### Priority 1 (Defect 2 — Missing Skill Names): 6-7 fixes needed

Add the Islamic Finance Domain Agents skill name to each of the 6 primary exercise prompts in Practice Exercise 7. The natural language pattern should be:

```
Use the islamic-finance skill: "[existing prompt text]"
```

Also consider adding a skill name to Try With AI Prompt 1 (line 244).

**Effort:** Low (text insertion only, no structural changes).
**Impact:** Medium — students will know which skill to activate, improving exercise success rate.

### Priority 2 (Defect 1 — Misleading "Output:" Label): 1 fix needed

Remove the `**Output:**` label from line 177 and integrate the text as regular prose or an `:::info` block. Suggested rewrite:

```markdown
Zakat is recognised as an expense in the Saudi IFI's income statement. It is filed with ZATCA annually, within 120 days of fiscal year-end.
```

(Simply remove the `**Output:**` label and the blank line 178.)

**Effort:** Trivial.
**Impact:** Low — prevents misinterpretation of explanatory text as fabricated agent output.

---

## Overall Assessment

This lesson is **high quality** with minimal prompt defects. The main issue is the systematic absence of skill names in exercise prompts (Defect 2), which is a common pattern across Ch 20 jurisdiction lessons. The lesson correctly:

- Uses real entities (Al Rajhi, Alinma, PIF, Saudi Electricity Company, ZATCA)
- Embeds exercise data directly in prompts rather than via inline data injection
- Uses correct Cowork/plugin terminology throughout
- Provides deterministic verification answers rather than fabricated agent outputs
- Structures Try With AI with proper "What you are learning" explanations
- Uses framework tables and comparison tables appropriately (not flagged as fabricated output)

**Defect density: 7 defects / 341 lines = 0.021 defects per line (low)**
**Critical defects (Defect 1 fabricated output): 0 true positives, 1 borderline labelling issue**
