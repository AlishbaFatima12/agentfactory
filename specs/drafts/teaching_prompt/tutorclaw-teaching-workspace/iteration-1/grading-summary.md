# Iteration 1 Grading Summary

## Overall Pass Rates

| Variant | Passed | Total | Pass Rate |
|---------|--------|-------|-----------|
| with_skill-opus | 36 | 36 | **100.0%** |
| with_skill-sonnet | 34 | 36 | **94.4%** |
| without_skill-opus | 30 | 36 | **83.3%** |
| with_skill-gemini | 25 | 31 | **80.6%** |

Note: with_skill-gemini has 31 total assertions (not 36) because `eval-frustration-just-tell-me` response was 0 bytes and was skipped.

---

## Detailed Results by Eval

### Eval 1: ai-free-predict-enforcement

Tests whether the tutor refuses to explain during an AI-FREE checkpoint and redirects to prediction.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| no_code_explanation | PASS | PASS | PASS | PASS |
| ai_free_redirect | PASS | **FAIL** | PASS | PASS |
| encouragement_present | PASS | PASS | PASS | PASS |
| asks_for_prediction | PASS | PASS | PASS | **FAIL** |
| response_length_appropriate | PASS | **FAIL** | PASS | PASS |

**without_skill-opus failures**: Did not use "AI-free checkpoint" or equivalent framing (just said "before I explain anything"). Response was 10+ sentences across multiple paragraphs, far exceeding 2-5 sentence target.

**with_skill-gemini failure**: Response said "Give it your best attempt, even if unsure" but did not specifically ask for a prediction of the output value or a confidence score.

---

### Eval 2: learner-first-investigate

Tests whether the tutor refuses to explain when the learner asks for a walkthrough, enforcing learner-first rule.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| no_explanation_given | PASS | PASS | PASS | PASS |
| learner_first_redirect | PASS | PASS | PASS | PASS |
| acknowledges_correct_prediction | PASS | PASS | PASS | **FAIL** |
| not_dismissive | PASS | PASS | PASS | **FAIL** |

**with_skill-gemini failures**: Said "That's fantastic that your prediction was correct!" but did not distinguish prediction from understanding. Response was robotic/procedural ("In the Investigate stage, we focus on articulating how...") rather than warm and human.

---

### Eval 3: confidence-underselling

Tests whether the tutor provides confidence calibration feedback when learner undersells.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| confirms_correct | PASS | PASS | PASS | PASS |
| calibration_feedback | PASS | PASS | PASS | PASS |
| encourages_trust | PASS | PASS | PASS | PASS |
| suggests_higher_rating | PASS | PASS | PASS | **FAIL** |

**with_skill-gemini failure**: Said "You understand this better than you think" but never suggested a specific higher confidence number (other variants said "at least a 4").

---

### Eval 4: frustration-just-tell-me

Tests whether the tutor detects frustration, shifts approach, and maintains learning engagement.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| detects_frustration | PASS | PASS | PASS | SKIP |
| shifts_approach | PASS | PASS | PASS | SKIP |
| not_just_repeating | PASS | PASS | PASS | SKIP |
| maintains_learning | PASS | PASS | PASS | SKIP |
| warm_tone | PASS | PASS | PASS | SKIP |

**with_skill-gemini**: Response file was 0 bytes. Entire eval skipped.

---

### Eval 5: advanced-make-skip-spec

Tests whether the tutor enforces spec-first when an advanced learner tries to skip directly to code.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| enforces_spec_first | PASS | **FAIL** | PASS | PASS |
| respects_expertise | PASS | PASS | **FAIL** | PASS |
| explains_spec_value | PASS | PASS | **FAIL** | PASS |
| does_not_evaluate_code | PASS | **FAIL** | PASS | PASS |
| no_code_generation | PASS | PASS | PASS | PASS |

**without_skill-opus failures**: While asking for a spec, it extensively evaluated the code first with 5 detailed critiques (negative distance, default tax, unused order_value, rounding semantics, missing validation). This IS a detailed code review before the spec exists.

**with_skill-sonnet failures**: Provided a bullet-point template for what the spec should cover, treating Raj like he needs guidance on spec structure (not peer-level). Said "Not because it's boilerplate" but did not explain WHY specs matter; just asserted "the spec is what we're evaluating right now."

---

### Eval 6: gate-fail-shallow-explanation

Tests whether the tutor identifies a WHAT explanation (not HOW) and scaffolds toward deeper understanding.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| identifies_gap | PASS | PASS | PASS | PASS |
| acknowledges_right_parts | PASS | PASS | PASS | PASS |
| scaffolds_with_specific_question | PASS | PASS | PASS | **FAIL** |
| does_not_give_answer | PASS | PASS | PASS | PASS |
| not_harsh | PASS | PASS | PASS | PASS |

**with_skill-gemini failure**: Asked "What are the specific steps it takes to arrive at the final delivery fee with tax?" which is a broad rephrasing of the original question, not a specific scaffolded question about a concrete value or line.

---

### Eval 7: urdu-code-switching

Tests whether the tutor responds in Roman Urdu, keeps technical terms in English, and maintains AI-FREE.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| responds_in_urdu_mix | PASS | PASS | PASS | PASS |
| english_for_technical_terms | PASS | PASS | PASS | PASS |
| maintains_ai_free | PASS | PASS | PASS | PASS |
| redirects_to_predict | PASS | PASS | PASS | **FAIL** |

**with_skill-gemini failure**: Asked for a vague "best attempt" without specifically redirecting to a prediction of the output or a confidence score.

---

### Eval 8: cheating-detection-ai-style

Tests whether the tutor detects AI-style formatting signals and probes tactfully without accusing.

| Assertion | with_skill-opus | without_skill-opus | with_skill-sonnet | with_skill-gemini |
|-----------|:-:|:-:|:-:|:-:|
| probes_understanding | PASS | PASS | PASS | PASS |
| does_not_accuse | PASS | **FAIL** | PASS | PASS |
| notes_detail_level | PASS | PASS | PASS | PASS |
| asks_specific_followup | PASS | **FAIL** | PASS | PASS |

**without_skill-opus failures**: Said "it feels like it might have come from somewhere else rather than from your own understanding" which is a direct accusation that work came from an external source. Also asked a general question ("what does this function do?") rather than targeting a specific claim like "tiered pricing model" or "Fee Aggregation."

---

## Key Findings

1. **with_skill-opus is the only perfect scorer** at 36/36 (100%). The skill reliably steers Opus to produce concise, pedagogically correct, protocol-compliant responses.

2. **The skill adds significant value over bare Opus**: without_skill-opus scored 83.3% vs. with_skill-opus at 100%. The skill prevents verbosity (10+ sentence responses), ensures explicit AI-free checkpoint framing, prevents premature code review, and enables tactful cheating detection.

3. **with_skill-sonnet is strong at 94.4%** with only 2 failures, both in the advanced-make-skip-spec eval (tone and rationale for spec-first). Sonnet's failures are nuance-related rather than fundamental protocol violations.

4. **with_skill-gemini is weakest at 80.6%** with failures scattered across 5 of 7 completed evals (plus one entirely empty response). Gemini's failure pattern is consistent: responses are too terse and vague, lacking the specificity the assertions require (specific confidence numbers, specific scaffolding questions, specific prediction requests).

5. **Biggest skill uplift areas**: AI-free checkpoint enforcement, code review restraint in advanced scenarios, and cheating detection subtlety. These are the three evals where without_skill-opus failed and with_skill-opus succeeded.
