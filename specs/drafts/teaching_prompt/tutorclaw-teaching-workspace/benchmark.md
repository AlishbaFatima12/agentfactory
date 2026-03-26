# TutorClaw Teaching Skill — Eval Benchmark Report

## Executive Summary

**Skill pass rate: 100%** (36/36 assertions) across Claude Opus and Sonnet
**Baseline pass rate: 88.9%** (32/36 assertions) without skill on Claude Opus
**Delta: +11.1pp** — The skill eliminates 4 failure modes that raw Opus exhibits
**Reliability: 100%** — All 8 evals produce consistent behavior across 2 independent runs
**Cross-model: Opus and Sonnet produce identical assertion outcomes** when given the skill

---

## Detailed Results: Run 1

### Pass Rates by Variant

| Variant | Assertions Passed | Total | Pass Rate |
|---|---|---|---|
| **Opus + Skill** | 36 | 36 | **100.0%** |
| **Sonnet + Skill** | 36 | 36 | **100.0%** |
| **Opus (no skill)** | 32 | 36 | **88.9%** |
| Gemini (skill) | 1 eval only | — | N/A (CLI failure) |

### Per-Eval Assertion Results

#### Eval 1: AI-Free Predict Enforcement

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| no_code_explanation | PASS | PASS | PASS |
| ai_free_redirect | PASS | PASS | PASS |
| encouragement_present | PASS | PASS | PASS |
| asks_for_prediction | PASS | PASS | PASS |
| response_length_appropriate | PASS | **FAIL** (18 lines, code block) | PASS |

**Baseline failure:** Without the skill, Opus writes ~200 words with markdown formatting and a numbered list. The skill constrains responses to 2-4 sentences per the Predict prompt guidelines.

#### Eval 2: Learner-First Investigate

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| no_explanation_given | PASS | PASS | PASS |
| learner_first_redirect | PASS | PASS | PASS |
| acknowledges_correct_prediction | PASS | PASS | PASS |
| not_dismissive | PASS | PASS | PASS |

**Note:** Baseline also passes all assertions. Opus has strong natural learner-first instincts.

#### Eval 3: Confidence Underselling

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| confirms_correct | PASS | PASS | PASS |
| calibration_feedback | PASS | PASS | PASS |
| encourages_trust | PASS | PASS | PASS |
| suggests_higher_rating | PASS | PASS | PASS |

**Note:** Non-discriminating eval. Both with-skill and baseline handle confidence calibration well. Consider adding harder variants (e.g., subtle underselling, multiple consecutive instances).

#### Eval 4: Frustration Detection

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| detects_frustration | PASS | PASS | PASS |
| shifts_approach | PASS | PASS | PASS |
| not_just_repeating | PASS | PASS | PASS |
| maintains_learning | PASS | PASS | PASS |
| warm_tone | PASS | PASS | PASS |

**Note:** Another non-discriminating eval. Opus handles frustration well natively. The skill's value here is in the SPECIFIC approach shift (Direct Instruction with retrieval), while baseline makes ad-hoc choices.

#### Eval 5: Advanced Make Skip-Spec (DISCRIMINATING)

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| enforces_spec_first | PASS | **FAIL** | PASS |
| respects_expertise | PASS | PASS | PASS |
| explains_spec_value | PASS | PASS | PASS |
| does_not_evaluate_code | PASS | **FAIL** | PASS |
| no_code_generation | PASS | PASS | PASS |

**Critical baseline failures:** Without the skill, Opus reviews the code immediately (identifying 5 specific gaps: negative distance, default tax rate, unused parameter, rounding, production concerns) and THEN asks for the spec. The skill enforces the pedagogical sequence: spec first, code review after. This is the strongest signal of skill value for maintaining PRIMM stage discipline.

#### Eval 6: Gate Fail Shallow Explanation

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| identifies_gap | PASS | PASS | PASS |
| acknowledges_right_parts | PASS | PASS | PASS |
| scaffolds_with_specific_question | PASS | PASS | PASS |
| does_not_give_answer | PASS | PASS | PASS |
| not_harsh | PASS | PASS | PASS |

**Note:** Non-discriminating. Opus handles gate failures well natively.

#### Eval 7: Urdu Code-Switching

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| responds_in_urdu_mix | PASS | PASS | PASS |
| english_for_technical_terms | PASS | PASS | PASS |
| maintains_ai_free | PASS | PASS | PASS |
| redirects_to_predict | PASS | PASS | PASS |

**Note:** All variants handle Urdu code-switching well. The baseline was given an explicit translation hint in the prompt, which may account for its good performance.

#### Eval 8: Cheating Detection (DISCRIMINATING)

| Assertion | Opus+Skill | Opus Baseline | Sonnet+Skill |
|---|---|---|---|
| probes_understanding | PASS | PASS | PASS |
| does_not_accuse | PASS | **FAIL** | PASS |
| notes_detail_level | PASS | PASS | PASS |
| asks_specific_followup | PASS | PASS | PASS |

**Critical baseline failure:** Without the skill, Opus says "it feels like it might have come from somewhere else rather than from your own understanding." This is a direct accusation that violates the pedagogical principle of never accusing. The skill produces: "That is very detailed. Can you explain what 'Fee Aggregation' means in your own words?" — a tactful probe that tests understanding without damaging trust.

---

## Discriminating vs Non-Discriminating Evals

| Eval | Discriminates? | What Skill Adds |
|---|---|---|
| 1. AI-free predict | Partially | Response conciseness (2-4 sentences vs wall of text) |
| 2. Learner-first | No | Opus does this natively |
| 3. Confidence | No | Opus does this natively |
| 4. Frustration | No | Skill provides structured escalation, but outcome similar |
| 5. **Advanced Make** | **YES** | Enforces spec-first gate; prevents premature code review |
| 6. Gate fail | No | Opus does this natively |
| 7. Urdu | No | Both handle code-switching well |
| 8. **Cheating** | **YES** | Prevents accusation; enforces tactful probing |

**Conclusion:** The skill's primary value is in enforcing pedagogical CONSTRAINTS that Opus would otherwise violate: stage discipline (spec before code review) and cheating detection protocol (probe without accusing). These are the scenarios where natural model behavior diverges from pedagogical best practice.

---

## Reliability: Run 1 vs Run 2

All 8 evals were re-run on both Opus and Sonnet. Behavioral consistency assessed by comparing response structure, assertion compliance, and strategy choices.

| Eval | Opus Consistent? | Key Variation |
|---|---|---|
| AI-free predict | YES | Wording differs, all assertions pass both runs |
| Learner-first | YES | Nearly identical structure (63 words each) |
| Confidence | YES | Same calibration feedback, same "at least a 4" |
| Frustration | MOSTLY | Run 1: gives answer directly. Run 2: reframes question. Both valid per skill escalation. |
| Advanced make | YES | Both runs enforce spec-first, both probe jurisdiction default |
| Gate fail | YES | Both identify WHAT vs HOW, both scaffold with specific question |
| Urdu | YES | Both in Roman Urdu, both maintain AI-FREE |
| Cheating | YES | Nearly identical (32-33 words, both probe "Fee Aggregation") |

**Reliability score: 8/8 (100%) behavioral consistency**

The frustration eval shows slight strategy variation (different escalation steps) but both are valid per the skill's edge-case protocol. All other evals produce structurally consistent responses.

---

## Response Size Comparison

| Eval | Opus+Skill (words) | Opus Baseline (words) | Ratio |
|---|---|---|---|
| AI-free predict | 92 | 200+ | 0.46x |
| Learner-first | 63 | 130+ | 0.48x |
| Confidence | 74 | 80 | 0.93x |
| Frustration | 97 | 100 | 0.97x |
| Advanced make | 117 | 280+ | 0.42x |
| Gate fail | 64 | 90 | 0.71x |
| Urdu | 75 | 80 | 0.94x |
| Cheating | 33 | 120 | 0.28x |

**Average: Skill responses are ~60% the size of baseline.** The skill constrains verbosity per the "shorter is better" principle. Most dramatic in cheating detection (33 vs 120 words) and AI-free predict (92 vs 200 words).

---

## Cross-Model Comparison

| Dimension | Opus + Skill | Sonnet + Skill |
|---|---|---|
| Pass rate | 100% (36/36) | 100% (36/36) |
| Avg response length | 77 words | 62 words |
| Urdu quality | Full Roman Urdu with scaffolding | Shorter but functional Urdu |
| Frustration handling | Detailed worked example | Concise direct instruction |
| Cheating detection | 33 words, probes "Fee Aggregation" | 28 words, probes "step 3" |

**Sonnet is slightly more concise but equally compliant.** Both models follow all skill constraints. The skill successfully normalizes behavior across model capabilities.

---

## Gemini CLI Results

7/8 evals produced empty (0-byte) files due to shell argument length limits with the `gemini -p` flag. The one successful eval (confidence-underselling) produced a valid 254-byte response that passed all 4 assertions.

**Recommendation:** Retry Gemini with file-based prompts (`gemini < prompt_file.txt`) rather than inline `-p` flags.

---

## Analyst Observations

### 1. Non-discriminating evals (3, 4, 6) should be harder
Confidence calibration, frustration detection, and gate failure remediation pass without the skill. These test behaviors that Opus already does well. To make them discriminating, add scenarios where the SPECIFIC skill framework matters: e.g., confidence calibration where the model should recommend a specific number (not just "higher"), or frustration where the escalation step matters.

### 2. The skill's primary value is CONSTRAINT enforcement
The two discriminating evals (5: spec-first, 8: cheating) both test scenarios where the model's natural instinct is WRONG. Opus naturally wants to help (review code immediately) and be honest (call out suspected cheating). The skill overrides these instincts with pedagogically correct behavior.

### 3. Conciseness is a secondary but significant benefit
Skill responses average 60% the length of baseline. For a WhatsApp-based tutor (TutorClaw context), this matters: shorter messages fit mobile screens, cost fewer tokens, and keep the learner active rather than reading.

### 4. The skill is model-agnostic at the assertion level
Opus and Sonnet produce identical pass rates. The skill's instructions are clear enough that model capability differences don't affect compliance.

---

## Verdict

**The skill is effective and ready for deployment.** It adds measurable value over raw model behavior on the two hardest pedagogical challenges (stage discipline and cheating tact), while normalizing behavior across models and enforcing conciseness.

**Recommended next steps:**
1. Add harder variants of non-discriminating evals
2. Retry Gemini with file-based prompts
3. Test with weaker models (Haiku, Ollama local) where the skill's value should be even higher
4. Run multi-turn conversation evals (not just single-turn) to test stage transition handling
