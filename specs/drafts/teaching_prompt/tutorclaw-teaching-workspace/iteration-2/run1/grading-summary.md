# Grading Summary: Iteration 2, Run 1

## Overall Pass Rates

| Model  | Passed | Failed | Total | Pass Rate |
|--------|--------|--------|-------|-----------|
| Opus   | 45     | 7      | 52    | 86.5%     |
| Sonnet | 41     | 11     | 52    | 78.8%     |

## Detailed Results

| Eval | Assertion | Opus | Sonnet |
|------|-----------|------|--------|
| ai-free-predict-enforcement | no_code_explanation | FAIL | PASS |
| ai-free-predict-enforcement | ai_free_redirect | PASS | PASS |
| ai-free-predict-enforcement | encouragement_present | PASS | PASS |
| ai-free-predict-enforcement | asks_for_prediction | PASS | PASS |
| ai-free-predict-enforcement | response_length_appropriate | FAIL | PASS |
| learner-first-investigate | no_explanation_given | PASS | PASS |
| learner-first-investigate | learner_first_redirect | PASS | PASS |
| learner-first-investigate | acknowledges_correct_prediction | PASS | PASS |
| learner-first-investigate | not_dismissive | PASS | PASS |
| confidence-underselling | confirms_correct | PASS | PASS |
| confidence-underselling | calibration_feedback | PASS | PASS |
| confidence-underselling | encourages_trust | PASS | PASS |
| confidence-underselling | suggests_higher_rating | PASS | FAIL |
| frustration-just-tell-me | detects_frustration | PASS | PASS |
| frustration-just-tell-me | shifts_approach | PASS | PASS |
| frustration-just-tell-me | not_just_repeating | PASS | PASS |
| frustration-just-tell-me | maintains_learning | PASS | PASS |
| frustration-just-tell-me | warm_tone | PASS | FAIL |
| advanced-make-skip-spec | enforces_spec_first | PASS | PASS |
| advanced-make-skip-spec | respects_expertise | PASS | PASS |
| advanced-make-skip-spec | explains_spec_value | PASS | PASS |
| advanced-make-skip-spec | does_not_evaluate_code | FAIL | FAIL |
| advanced-make-skip-spec | no_code_generation | PASS | PASS |
| gate-fail-shallow-explanation | identifies_gap | PASS | PASS |
| gate-fail-shallow-explanation | acknowledges_right_parts | PASS | PASS |
| gate-fail-shallow-explanation | scaffolds_with_specific_question | PASS | PASS |
| gate-fail-shallow-explanation | does_not_give_answer | PASS | PASS |
| gate-fail-shallow-explanation | not_harsh | PASS | PASS |
| urdu-code-switching | responds_in_urdu_mix | PASS | PASS |
| urdu-code-switching | english_for_technical_terms | PASS | PASS |
| urdu-code-switching | maintains_ai_free | PASS | PASS |
| urdu-code-switching | redirects_to_predict | PASS | PASS |
| cheating-detection-ai-style | probes_understanding | PASS | PASS |
| cheating-detection-ai-style | does_not_accuse | PASS | PASS |
| cheating-detection-ai-style | notes_detail_level | PASS | PASS |
| cheating-detection-ai-style | asks_specific_followup | PASS | PASS |
| run-stage-wrong-prediction | states_mismatch | PASS | PASS |
| run-stage-wrong-prediction | does_not_just_give_answer | FAIL | PASS |
| run-stage-wrong-prediction | addresses_overconfidence | PASS | PASS |
| run-stage-wrong-prediction | probes_misconception | PASS | FAIL |
| modify-mini-predict | presents_task_clearly | PASS | PASS |
| modify-mini-predict | includes_mini_predict | PASS | PASS |
| modify-mini-predict | does_not_give_new_answer | PASS | PASS |
| modify-mini-predict | concise | FAIL | FAIL |
| gate-pass-advancement | specific_acknowledgment | PASS | PASS |
| gate-pass-advancement | concise_1_2_sentences | PASS | PASS |
| gate-pass-advancement | advances_to_modify | PASS | PASS |
| gate-pass-advancement | no_re_explanation | PASS | PASS |
| session-opening | welcoming_tone | PASS | PASS |
| session-opening | asks_about_background | PASS | PASS |
| session-opening | does_not_start_coding | PASS | PASS |
| session-opening | mentions_curriculum | PASS | PASS |

## Per-Eval Summary

| Eval | Opus (pass/total) | Sonnet (pass/total) |
|------|-------------------|---------------------|
| ai-free-predict-enforcement | 3/5 | 5/5 |
| learner-first-investigate | 4/4 | 4/4 |
| confidence-underselling | 4/4 | 3/4 |
| frustration-just-tell-me | 5/5 | 4/5 |
| advanced-make-skip-spec | 4/5 | 4/5 |
| gate-fail-shallow-explanation | 5/5 | 5/5 |
| urdu-code-switching | 4/4 | 4/4 |
| cheating-detection-ai-style | 4/4 | 4/4 |
| run-stage-wrong-prediction | 3/4 | 3/4 |
| modify-mini-predict | 3/4 | 3/4 |
| gate-pass-advancement | 4/4 | 4/4 |
| session-opening | 4/4 | 4/4 |

## Key Findings

### Shared Failures (Both Models)

1. **advanced-make-skip-spec / does_not_evaluate_code**: Both models failed this assertion. Both provided detailed analysis of the code's fallback behavior, Decimal boundaries, and design decisions before a spec existed. The assertion requires deferring all code evaluation until after the spec. Both models interpreted "enforce spec-first" as "show why the spec matters by pointing out code problems," which is a reasonable teaching move but violates the strict assertion that code should not be evaluated without a spec.

2. **modify-mini-predict / concise**: Both models exceeded the 2-4 sentence limit. Opus used 5 sentences with a business scenario framing. Sonnet used a structured format with a bold header, intro line, bullet points, and a closing instruction. Both added context that pushed past the conciseness target.

### Opus-Only Failures

3. **ai-free-predict-enforcement / no_code_explanation**: Opus revealed variable values (`base_fee` is 5.0, `per_km_rate` is 1.5) and guided the learner through the calculation by asking "What do you think happens on the next line when distance_km is 8?" This effectively scaffolds the code walkthrough, which violates the AI-FREE checkpoint. Sonnet's pure redirect was the correct approach here.

4. **ai-free-predict-enforcement / response_length_appropriate**: Opus produced a single long run-on sentence with multiple clauses that effectively functions as 5+ sentences of content. Exceeded the 2-5 sentence target under strict reading.

5. **run-stage-wrong-prediction / does_not_just_give_answer**: Opus walked through the logic directly: "Look at line 5: tax: float = fee * tax_rate... the return statement is fee + tax, not just fee." This explains WHY 19.21 is correct rather than asking the learner to figure it out. The rhetorical questions do not change the fact that the explanation is given.

### Sonnet-Only Failures

6. **confidence-underselling / suggests_higher_rating**: Sonnet said "You understand this better than you think" but never suggested a specific higher confidence number. Opus explicitly said "that deserves at least a 4." The assertion requires suggesting what the rating should have been.

7. **frustration-just-tell-me / warm_tone**: Sonnet's response contains a placeholder: `[*explanation of the concept goes here based on the specific code under investigation*]`. This is a template, not a genuine tutoring response. A real learner would see this placeholder text, which is not warm or functional.

8. **run-stage-wrong-prediction / probes_misconception**: Sonnet asked generically "Walk me through the specific step where you think the calculation went differently." This does not probe the specific tax misconception (that tax was already included in the base fee). Opus asked directly about line 5 and the separate tax calculation, targeting the misconception precisely.

### Pattern Analysis

- **Opus tends to over-explain**: 4 of 7 failures stem from providing too much information (explaining code at AI-FREE, walking through logic at RUN stage, giving too much context in Modify). Opus's teaching instinct to scaffold is strong but sometimes violates restriction boundaries.

- **Sonnet tends to under-specify**: 3 of its unique failures stem from being too terse or generic (no specific confidence number, placeholder text instead of actual content, generic probe instead of targeted misconception question).

- **Both models struggle with the "defer evaluation" constraint**: When a learner shows code, both models naturally want to engage with it. Deferring evaluation until after a spec is unnatural for both.

- **Perfect evals (both models)**: learner-first-investigate, gate-fail-shallow-explanation, urdu-code-switching, cheating-detection-ai-style, gate-pass-advancement, session-opening. These 6 evals (24 assertions) passed cleanly for both models.
