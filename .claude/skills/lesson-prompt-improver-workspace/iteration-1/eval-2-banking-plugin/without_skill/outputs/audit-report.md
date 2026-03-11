# Prompt Defect Audit Report

**Lesson:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/02-plugin-architecture.md`
**Title:** The Banking Plugin Architecture -- 17 Skills, Three Pillars
**Date:** 2026-03-11
**Auditor:** Claude (without skill)

---

## Executive Summary

The lesson is structurally sound and pedagogically well-sequenced. The primary defect category is **fabricated outputs** -- the lesson presents specific agent outputs as though they are deterministic, when in reality the AI agent's responses will vary per invocation. There are also minor issues with prompt specificity in the "Try With AI" section. No factual errors were found in the banking domain content itself (IFRS 9 staging logic, Basel CET1 mechanics, and pillar routing concepts are all accurate).

**Defects found:** 7 total (2 High, 3 Medium, 2 Low)

---

## Defect 1: Fabricated Output in Single-Pillar Query Trace (HIGH)

**Location:** Lines 149-159 ("Tracing a Query: Single-Pillar")

**Problem:** The lesson presents a specific AI agent output as fact:

> "The skill classifies the 300 downgraded accounts as Stage 2 (significant increase in credit risk, not yet defaulted) and the remaining 11,700 as Stage 1 (no SICR since origination). The output includes the SICR rationale and the measurement implication: Stage 2 accounts now require lifetime ECL instead of 12-month ECL."

This is written as though the agent will always produce exactly this output. In reality, the agent's response format, level of detail, and exact phrasing will vary. The classification logic itself (300 downgraded = Stage 2) is technically correct for the given scenario, but the lesson is presenting a fabricated "expected output" as deterministic agent behavior.

**Why it matters:** Students will compare their actual agent output against this fabricated output and may conclude their plugin is malfunctioning if the response differs in format or phrasing.

**Recommendation:** Reframe as "the skill should classify..." or "the expected classification is..." rather than asserting "the skill classifies" and "the output includes." Alternatively, label this section explicitly as "Expected Outcome" rather than presenting it as a live trace.

---

## Defect 2: Fabricated Output in Cross-Pillar Query Trace (HIGH)

**Location:** Lines 162-176 ("Tracing a Query: Cross-Pillar")

**Problem:** The lesson fabricates specific chained output:

> "The IFRS 9 skill confirms the $200 million provision increase reduces pre-tax profit by $200 million. After tax at (for example) 25%, retained earnings fall by $150 million. The Basel skill then recalculates: CET1 capital decreases by $150 million, and the CET1 ratio falls by $150M / total RWA."

While the arithmetic is correct (200M \* (1-0.25) = 150M post-tax), this is presented as what the agent actually outputs. The agent may not show this step-by-step chain, may format it differently, or may ask clarifying questions before producing any numbers. The lesson presents a fabricated multi-skill interaction as though it is a guaranteed output sequence.

**Why it matters:** This is the lesson's key architectural demonstration. If students run the same query and get a differently structured response (or get asked clarifying questions by the SessionStart hook), they will be confused about whether the cross-pillar chaining is working correctly.

**Recommendation:** Present this as a "walkthrough of the expected reasoning" rather than a live trace. Consider adding a note: "Your agent's exact response may differ in format, but should arrive at the same conclusion." Or better, restructure the section as a conceptual flow diagram rather than a simulated transcript.

---

## Defect 3: Try With AI Prompt 1 -- Asks Agent to Narrate Its Own Routing (MEDIUM)

**Location:** Lines 246-261 ("Prompt 1: Single-Pillar Routing")

**Problem:** The prompt asks:

```
1. Which pillar does the router detect?
2. Which skill(s) does it load?
```

These questions ask the AI to explain its own internal routing mechanism. The agent may or may not be able to introspect on which skill files were loaded. If the banking plugin skills are loaded silently (as Claude plugins typically operate), the agent will likely fabricate an explanation of its routing process rather than reporting actual internal state. The student has no way to verify whether the agent's description of its own routing is accurate.

**Why it matters:** Students are asked to "trace the routing yourself" to verify understanding, but the agent's self-report of its routing is not verifiable. This creates a false confidence loop.

**Recommendation:** Restructure the prompt to focus on observable outputs rather than internal routing mechanics. For example: "Given this input, what pillar does this query fall under? What calculation would the ECL skill perform? Show the arithmetic." The student can then verify the pillar classification and arithmetic against the lesson content, without relying on the agent's self-report of internal state.

---

## Defect 4: Try With AI Prompt 2 -- Same Introspection Issue (MEDIUM)

**Location:** Lines 266-284 ("Prompt 2: Cross-Pillar Routing")

**Problem:** Same issue as Defect 3. The prompt asks:

```
1. Which pillars are involved?
2. Which skills does the router chain, and in what order?
3. What does each skill contribute to the answer?
```

Questions 2 and 3 ask the agent to describe its own internal skill-chaining behavior. The agent will produce a plausible-sounding but unverifiable narrative about which skills it loaded and in what order.

**Recommendation:** Reframe to: "Walk me through the calculation. First calculate the post-tax provision impact, then calculate the CET1 ratio change. Explain which regulatory framework governs each step." This tests the same cross-pillar understanding but relies on verifiable arithmetic rather than unverifiable introspection.

---

## Defect 5: Try With AI Prompt 3 -- Asks Agent to Recite Plugin Metadata (MEDIUM)

**Location:** Lines 288-301 ("Prompt 3: Skill Inventory")

**Problem:** The prompt asks the agent to "List all 16 product skills in the banking plugin, grouped by pillar." This invites the agent to either (a) read the plugin's skill files and regurgitate metadata, or (b) fabricate a skill list from the conversation context. If the student has already read the lesson's skill table, this prompt adds no new learning -- it just asks the agent to repeat information the student already has. If the agent hallucinates a different skill list, it creates confusion.

The chaining question at the end ("which skills would be chained if I asked...") is more pedagogically valuable but is buried after the inventory recitation.

**Recommendation:** Remove or shorten the inventory portion (students already have the table in the lesson). Lead with the chaining question: "A borrower has defaulted -- what is the provision impact, the capital impact, and do we need to file a SAR? Walk through each pillar's contribution and which skills would be involved." This tests architectural understanding without rote recitation.

---

## Defect 6: "Try With AI" Header Uses Non-Standard Phrasing (LOW)

**Location:** Line 243

**Problem:** The section header says "Use these prompts in Claude or your preferred AI assistant." Per the project's cowork-content rules, the standard phrasing for non-Cowork lessons is "Use these prompts in Cowork or your preferred AI assistant." However, this chapter is a Claude Code CLI chapter (install command is `claude plugin install`), so "Claude" may be intentionally correct here. The inconsistency is minor but worth flagging.

**Recommendation:** Verify whether Ch 21 is intended as a Claude Code CLI chapter (in which case "Claude" is correct) or a Cowork chapter (in which case it should say "Cowork"). The README shows both CLI and Cowork install paths, suggesting students may use either. Consider: "Use these prompts in Claude Code, Cowork, or your preferred AI assistant."

---

## Defect 7: Worked Example Table Implies Deterministic Multi-Step Workflow (LOW)

**Location:** Lines 222-235 ("Worked Example: Monthly IFRS 9 ECL Workflow")

**Problem:** The 6-step table presents a deterministic workflow sequence (staging -> PD/LGD/EAD -> scenarios -> ECL -> disclosure -> capital impact). The note "The `/bank-ecl` command runs steps 1-5 automatically" implies the command will always execute these steps in this exact order. In practice, the agent may combine steps, skip steps if data is missing, or request clarification before proceeding.

**Why it matters:** Low severity because this is framed as a "worked example" rather than a live trace, so students are less likely to compare it against actual output. But the claim about `/bank-ecl` running steps 1-5 "automatically" is a testable assertion that may not hold if the plugin's command implementation differs.

**Recommendation:** Add a qualifying note: "The exact sequence may vary depending on the data provided and the agent's clarifying questions, but the logical flow follows this pattern."

---

## Domain Accuracy Check

The following domain claims were verified and found to be **accurate**:

| Claim                                                            | Verdict                                |
| ---------------------------------------------------------------- | -------------------------------------- |
| IFRS 9 stages are 1 (performing), 2 (SICR), 3 (default)          | Correct                                |
| 2-notch downgrade triggers SICR / Stage 2                        | Correct (common quantitative trigger)  |
| Stage 2 requires lifetime ECL vs 12-month ECL                    | Correct per IFRS 9.5.5.3               |
| CET1 ratio = CET1 capital / RWA                                  | Correct                                |
| Provision increase reduces retained earnings and thus CET1       | Correct                                |
| Tax shield: post-tax impact = provision \* (1 - tax rate)        | Correct                                |
| CECL is the US equivalent (distinct from IFRS 9 ECL)             | Correct                                |
| SessionStart hook for pillar detection is a valid plugin pattern | Correct per Claude plugin architecture |
| PostToolUse hook for output validation is a valid plugin pattern | Correct per Claude plugin architecture |

No factual errors were found in the banking regulatory content.

---

## YAML Frontmatter Check

| Field               | Present | Notes                       |
| ------------------- | ------- | --------------------------- |
| slug                | Yes     |                             |
| sidebar_position    | Yes     |                             |
| title               | Yes     |                             |
| description         | Yes     |                             |
| keywords            | Yes     |                             |
| chapter             | Yes     |                             |
| lesson              | Yes     |                             |
| duration_minutes    | Yes     |                             |
| skills              | Yes     | 2 skills defined            |
| learning_objectives | Yes     | 3 objectives defined        |
| cognitive_load      | Yes     | 6 concepts, within B1 limit |
| differentiation     | Yes     | Both extension and remedial |

Frontmatter is complete and well-structured.

---

## Structural Check

| Element                       | Present | Notes                                               |
| ----------------------------- | ------- | --------------------------------------------------- |
| Opening narrative hook        | Yes     | Connects to Lesson 1's three-pillar framework       |
| Tables for structured content | Yes     | 4 tables used effectively                           |
| Try With AI section           | Yes     | 3 prompts with learning explanations                |
| Flashcards                    | Yes     | `<Flashcards />` tag present                        |
| Next lesson link              | Yes     | Points to 03-ifrs9-staging-ecl.md (verified exists) |
| Code blocks for install       | Yes     |                                                     |

---

## Summary of Recommendations

| #   | Severity | Issue                                                           | Fix                                                                |
| --- | -------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1   | HIGH     | Single-pillar trace presents fabricated output as deterministic | Reframe as "expected outcome" or "the classification should be..." |
| 2   | HIGH     | Cross-pillar trace presents fabricated chained output           | Present as conceptual walkthrough, add variability note            |
| 3   | MEDIUM   | Prompt 1 asks agent to introspect on routing (unverifiable)     | Focus on observable outputs and arithmetic                         |
| 4   | MEDIUM   | Prompt 2 asks agent to describe internal skill chaining         | Reframe around verifiable calculation steps                        |
| 5   | MEDIUM   | Prompt 3 asks agent to recite known skill list                  | Lead with the chaining scenario question instead                   |
| 6   | LOW      | "Claude or your preferred AI assistant" vs standard phrasing    | Consider "Claude Code, Cowork, or your preferred AI assistant"     |
| 7   | LOW      | Worked example implies deterministic step sequence              | Add qualifying note about variability                              |

---

## Overall Assessment

**Quality rating:** 7/10

The lesson does an excellent job of teaching the banking plugin's architecture through concrete examples and progressive complexity (single-pillar -> cross-pillar -> full workflow). The domain content is accurate and well-structured. The primary weakness is the fabricated output pattern: both query traces and all three Try With AI prompts present or invite AI outputs that are either fabricated or unverifiable. Fixing the two HIGH-severity items (reframing traces as expected outcomes rather than live outputs) and restructuring the prompts to focus on verifiable arithmetic rather than agent introspection would significantly improve the lesson's reliability when students actually use it with the plugin.
