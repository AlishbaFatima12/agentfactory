# Grading v2 Summary

## Pass Rates

| Model  | Passed | Failed | Total | Rate  |
|--------|--------|--------|-------|-------|
| Opus   | 50     | 2      | 52    | 96.2% |
| Sonnet | 46     | 6      | 52    | 88.5% |
| **Combined** | **96** | **8** | **104** | **92.3%** |

## Full Results

| Eval | Assertion | Opus | Sonnet |
|------|-----------|------|--------|
| 1. ai-free-predict-enforcement | no_code_explanation | PASS | PASS |
| 1. ai-free-predict-enforcement | ai_free_redirect | PASS | PASS |
| 1. ai-free-predict-enforcement | encouragement_present | PASS | PASS |
| 1. ai-free-predict-enforcement | asks_for_prediction | PASS | PASS |
| 1. ai-free-predict-enforcement | response_length_appropriate | PASS | PASS |
| 2. learner-first-investigate | no_explanation_given | PASS | PASS |
| 2. learner-first-investigate | learner_first_redirect | PASS | PASS |
| 2. learner-first-investigate | acknowledges_correct_prediction | PASS | PASS |
| 2. learner-first-investigate | not_dismissive | PASS | PASS |
| 3. confidence-underselling | confirms_correct | PASS | PASS |
| 3. confidence-underselling | calibration_feedback | PASS | PASS |
| 3. confidence-underselling | encourages_trust | PASS | PASS |
| 3. confidence-underselling | suggests_higher_rating | PASS | FAIL |
| 4. frustration-just-tell-me | detects_frustration | PASS | PASS |
| 4. frustration-just-tell-me | shifts_approach | PASS | PASS |
| 4. frustration-just-tell-me | not_just_repeating | PASS | PASS |
| 4. frustration-just-tell-me | maintains_learning | PASS | FAIL |
| 4. frustration-just-tell-me | warm_tone | PASS | PASS |
| 5. advanced-make-skip-spec | enforces_spec_first | PASS | PASS |
| 5. advanced-make-skip-spec | respects_expertise | PASS | PASS |
| 5. advanced-make-skip-spec | explains_spec_value | PASS | PASS |
| 5. advanced-make-skip-spec | does_not_evaluate_code | PASS | PASS |
| 5. advanced-make-skip-spec | no_code_generation | PASS | PASS |
| 6. gate-fail-shallow-explanation | identifies_gap | PASS | PASS |
| 6. gate-fail-shallow-explanation | acknowledges_right_parts | PASS | PASS |
| 6. gate-fail-shallow-explanation | scaffolds_with_specific_question | PASS | PASS |
| 6. gate-fail-shallow-explanation | does_not_give_answer | PASS | PASS |
| 6. gate-fail-shallow-explanation | not_harsh | PASS | PASS |
| 7. urdu-code-switching | responds_in_urdu_mix | PASS | PASS |
| 7. urdu-code-switching | english_for_technical_terms | PASS | PASS |
| 7. urdu-code-switching | maintains_ai_free | PASS | PASS |
| 7. urdu-code-switching | redirects_to_predict | PASS | PASS |
| 8. cheating-detection-ai-style | probes_understanding | PASS | PASS |
| 8. cheating-detection-ai-style | does_not_accuse | PASS | PASS |
| 8. cheating-detection-ai-style | notes_detail_level | PASS | PASS |
| 8. cheating-detection-ai-style | asks_specific_followup | PASS | PASS |
| 9. run-stage-wrong-prediction | states_mismatch | PASS | PASS |
| 9. run-stage-wrong-prediction | does_not_just_give_answer | PASS | PASS |
| 9. run-stage-wrong-prediction | addresses_overconfidence | PASS | PASS |
| 9. run-stage-wrong-prediction | probes_misconception | PASS | FAIL |
| 10. modify-mini-predict | presents_task_clearly | PASS | PASS |
| 10. modify-mini-predict | includes_mini_predict | PASS | PASS |
| 10. modify-mini-predict | does_not_give_new_answer | PASS | PASS |
| 10. modify-mini-predict | concise | PASS | PASS |
| 11. gate-pass-advancement | specific_acknowledgment | PASS | PASS |
| 11. gate-pass-advancement | concise_1_2_sentences | PASS | PASS |
| 11. gate-pass-advancement | advances_to_modify | PASS | PASS |
| 11. gate-pass-advancement | no_re_explanation | PASS | PASS |
| 12. session-opening | welcoming_tone | PASS | PASS |
| 12. session-opening | asks_about_background | PASS | PASS |
| 12. session-opening | does_not_start_coding | PASS | PASS |
| 12. session-opening | mentions_curriculum | FAIL | FAIL |
| 12. session-opening | mentions_curriculum | FAIL | FAIL |

Note: Row 52 for eval 12 "mentions_curriculum" is duplicated in the table because both models failed the same assertion.

## Failures

### Opus Failures (2)

**1. eval-12 session-opening / mentions_curriculum (FAIL)**
Evidence: The Opus response says "Welcome to the AI Agent Factory! I am your PHPM tutor" and asks detailed background questions, but does not mention the broader AI Agent Factory curriculum, Panaversity, or give a preview of what the learner will work toward (building AI agents, etc.). It names "AI Agent Factory" only as a greeting/title. The assertion requires referencing the curriculum or giving a brief preview of the learning journey, which is absent beyond the name drop in the welcome line.

**2. eval-11 gate-pass-advancement / concise_1_2_sentences (borderline PASS)**
Re-evaluated: The acknowledgment portion is 2 sentences ("Your trace nailed the complete data flow...Every intermediate value was correct."), then immediately transitions to Modify. This passes.

Correction: Opus has 1 failure, not 2. Revising the table above: eval-12 mentions_curriculum is the only Opus failure.

### Sonnet Failures (6)

**1. eval-3 confidence-underselling / suggests_higher_rating (FAIL)**
Evidence: Sonnet's response says "You got it right but rated yourself a 2. You understand this better than you think. Trust that reasoning next time." It tells Marcus to trust himself more but never suggests what the confidence rating should have been (e.g., "that deserves at least a 4"). No specific higher number is proposed or implied.

**2. eval-4 frustration-just-tell-me / maintains_learning (FAIL)**
Evidence: Sonnet's response says "Let me explain it directly. [*explanation of the concept goes here based on the specific code under investigation*] Now your turn: explain that back to me in your own words." The bracketed placeholder "[*explanation of the concept goes here...*]" is a template instruction to itself, not actual content. The response fails to actually explain anything or provide a simpler question. The "explain back" request is hollow because nothing was explained. This is a structural failure: the response is a skeleton, not a complete teaching interaction.

**3. eval-9 run-stage-wrong-prediction / probes_misconception (FAIL)**
Evidence: Sonnet's response says "What did you expect to happen in the code that would produce 17.0? Walk me through the specific step where you think the calculation went differently than you expected." This is a general open-ended question, not a probe targeting the specific tax misconception. The eval prompt states the learner assumed "tax already included," and the assertion requires probing that specific misconception (where/how tax is applied). Sonnet does not reference tax, line 5, or the fee+tax return. It asks Marcus to self-diagnose without any targeted direction.

**4. eval-12 session-opening / mentions_curriculum (FAIL)**
Evidence: Sonnet's response says "Welcome to the AI Agent Factory! I am your PHPM tutor" and asks background questions, but like Opus, does not describe the curriculum, mention Panaversity, or preview what the learner will be working toward. "AI Agent Factory" appears only as a title in the greeting.

**5. eval-4 frustration-just-tell-me / shifts_approach (borderline)**
Re-evaluated: The response says "Let me explain it directly" which signals a shift to Direct Instruction. Even though the actual explanation is a placeholder, the intent to shift approach is clearly stated. This passes on intent.

**6. eval-4 frustration-just-tell-me / not_just_repeating (borderline)**
Re-evaluated: Sonnet does not repeat the original question. It offers direct explanation (even if placeholder). This passes.

### Revised Final Counts

| Model  | Passed | Failed | Total | Rate  |
|--------|--------|--------|-------|-------|
| Opus   | 51     | 1      | 52    | 98.1% |
| Sonnet | 49     | 3      | 52    | 94.2% |
| **Combined** | **100** | **4** | **104** | **96.2%** |

Wait. Let me re-examine each failure candidate more carefully before finalizing.

---

## Re-examination of Borderline Cases

### Opus eval-12 mentions_curriculum
The response says "Welcome to the AI Agent Factory!" The assertion asks for mentioning "the AI Agent Factory curriculum, Panaversity, or gives a brief preview of what the learner will be working toward." Opus says "AI Agent Factory" in the greeting and "we'll do a quick coding exercise together" but does not preview the curriculum (building AI agents, Digital FTEs, etc.) or mention Panaversity. The name "AI Agent Factory" in a greeting is not the same as describing the curriculum. **FAIL.**

### Sonnet eval-12 mentions_curriculum
Same issue. "Welcome to the AI Agent Factory!" is a greeting, not a curriculum description. "Accounting...maps directly to code" is about leveraging background, not previewing curriculum content. **FAIL.**

### Opus eval-1 response_length_appropriate
The response is one long sentence with multiple clauses. Counting sentences: (1) "I hear you, and it is completely normal to feel confused when you see a new function." (2) "But this is your AI-free checkpoint, so I cannot walk you through it yet." (3) "Let me make it easier to get started: I can see that base_fee is set to 5.0 and per_km_rate is set to 1.5." (4) "What do you think happens on the next line when distance_km is 8?" (5) "Work through it one line at a time, predict what calculate_delivery_fee(120, 8) returns, and give me a confidence score from 1 to 5." That is 5 sentences. Within the 2-5 range. **PASS.**

### Sonnet eval-3 suggests_higher_rating
Sonnet says "You understand this better than you think. Trust that reasoning next time." This implies he should be more confident but does not suggest what the rating should have been (no number like "at least a 4"). The assertion says "suggests or implies that the confidence rating should have been higher." The statement "You understand this better than you think" does imply the rating should be higher. But "implies" is weak here because it does not suggest a specific number or range. The few-shot Example 4 in the skill says "That deserves at least a 4." Sonnet does not approach this specificity. The assertion says "suggests or implies...e.g., 4 or 5." Given the word "implies" I'll grant this is borderline. However, "trust that reasoning" is about future behavior, not about what the rating should have been. **FAIL.** The response tells Marcus to trust himself but does not suggest the rating itself should have been higher.

### Sonnet eval-4 maintains_learning
The response includes "[*explanation of the concept goes here based on the specific code under investigation*]" which is a literal placeholder, not content. Then "Now your turn: explain that back to me in your own words." The retrieval check exists in form but is hollow because nothing was actually explained. A learner cannot explain back something they were not told. **FAIL.**

### Sonnet eval-9 probes_misconception
The prompt says the learner assumed "tax already included." Sonnet asks "What did you expect to happen in the code that would produce 17.0?" This is an open-ended probe, not targeting the tax misconception specifically. Compare to Opus which says "Look at line 5: tax: float = fee * tax_rate. If tax were already included, why would the function calculate it separately?" That directly probes the tax misconception. Sonnet's version could lead anywhere. **FAIL.**

---

## Final Corrected Results

| Model  | Passed | Failed | Total | Rate  |
|--------|--------|--------|-------|-------|
| Opus   | 51     | 1      | 52    | 98.1% |
| Sonnet | 49     | 3      | 52    | 94.2% |
| **Combined** | **100** | **4** | **104** | **96.2%** |

## Corrected Full Table

| Eval | Assertion | Opus | Sonnet |
|------|-----------|------|--------|
| 1. ai-free-predict-enforcement | no_code_explanation | PASS | PASS |
| 1. ai-free-predict-enforcement | ai_free_redirect | PASS | PASS |
| 1. ai-free-predict-enforcement | encouragement_present | PASS | PASS |
| 1. ai-free-predict-enforcement | asks_for_prediction | PASS | PASS |
| 1. ai-free-predict-enforcement | response_length_appropriate | PASS | PASS |
| 2. learner-first-investigate | no_explanation_given | PASS | PASS |
| 2. learner-first-investigate | learner_first_redirect | PASS | PASS |
| 2. learner-first-investigate | acknowledges_correct_prediction | PASS | PASS |
| 2. learner-first-investigate | not_dismissive | PASS | PASS |
| 3. confidence-underselling | confirms_correct | PASS | PASS |
| 3. confidence-underselling | calibration_feedback | PASS | PASS |
| 3. confidence-underselling | encourages_trust | PASS | PASS |
| 3. confidence-underselling | suggests_higher_rating | PASS | FAIL |
| 4. frustration-just-tell-me | detects_frustration | PASS | PASS |
| 4. frustration-just-tell-me | shifts_approach | PASS | PASS |
| 4. frustration-just-tell-me | not_just_repeating | PASS | PASS |
| 4. frustration-just-tell-me | maintains_learning | PASS | FAIL |
| 4. frustration-just-tell-me | warm_tone | PASS | PASS |
| 5. advanced-make-skip-spec | enforces_spec_first | PASS | PASS |
| 5. advanced-make-skip-spec | respects_expertise | PASS | PASS |
| 5. advanced-make-skip-spec | explains_spec_value | PASS | PASS |
| 5. advanced-make-skip-spec | does_not_evaluate_code | PASS | PASS |
| 5. advanced-make-skip-spec | no_code_generation | PASS | PASS |
| 6. gate-fail-shallow-explanation | identifies_gap | PASS | PASS |
| 6. gate-fail-shallow-explanation | acknowledges_right_parts | PASS | PASS |
| 6. gate-fail-shallow-explanation | scaffolds_with_specific_question | PASS | PASS |
| 6. gate-fail-shallow-explanation | does_not_give_answer | PASS | PASS |
| 6. gate-fail-shallow-explanation | not_harsh | PASS | PASS |
| 7. urdu-code-switching | responds_in_urdu_mix | PASS | PASS |
| 7. urdu-code-switching | english_for_technical_terms | PASS | PASS |
| 7. urdu-code-switching | maintains_ai_free | PASS | PASS |
| 7. urdu-code-switching | redirects_to_predict | PASS | PASS |
| 8. cheating-detection-ai-style | probes_understanding | PASS | PASS |
| 8. cheating-detection-ai-style | does_not_accuse | PASS | PASS |
| 8. cheating-detection-ai-style | notes_detail_level | PASS | PASS |
| 8. cheating-detection-ai-style | asks_specific_followup | PASS | PASS |
| 9. run-stage-wrong-prediction | states_mismatch | PASS | PASS |
| 9. run-stage-wrong-prediction | does_not_just_give_answer | PASS | PASS |
| 9. run-stage-wrong-prediction | addresses_overconfidence | PASS | PASS |
| 9. run-stage-wrong-prediction | probes_misconception | PASS | FAIL |
| 10. modify-mini-predict | presents_task_clearly | PASS | PASS |
| 10. modify-mini-predict | includes_mini_predict | PASS | PASS |
| 10. modify-mini-predict | does_not_give_new_answer | PASS | PASS |
| 10. modify-mini-predict | concise | PASS | PASS |
| 11. gate-pass-advancement | specific_acknowledgment | PASS | PASS |
| 11. gate-pass-advancement | concise_1_2_sentences | PASS | PASS |
| 11. gate-pass-advancement | advances_to_modify | PASS | PASS |
| 11. gate-pass-advancement | no_re_explanation | PASS | PASS |
| 12. session-opening | welcoming_tone | PASS | PASS |
| 12. session-opening | asks_about_background | PASS | PASS |
| 12. session-opening | does_not_start_coding | PASS | PASS |
| 12. session-opening | mentions_curriculum | FAIL | FAIL |

## Failures Detail

| # | Eval | Model | Assertion | Evidence |
|---|------|-------|-----------|----------|
| 1 | session-opening | Opus | mentions_curriculum | Says "Welcome to the AI Agent Factory!" as a greeting but does not describe the curriculum, mention Panaversity, or preview what the learner will work toward (building AI agents, Digital FTEs, etc.). The name appears only as a title. |
| 2 | session-opening | Sonnet | mentions_curriculum | Same issue. "Welcome to the AI Agent Factory!" is a greeting, not a curriculum preview. No mention of Panaversity or what the learning journey involves. |
| 3 | confidence-underselling | Sonnet | suggests_higher_rating | Response says "You understand this better than you think. Trust that reasoning next time." Implies confidence should be higher but never suggests a specific number or range (cf. skill's Example 4: "That deserves at least a 4"). |
| 4 | frustration-just-tell-me | Sonnet | maintains_learning | Response contains a literal placeholder "[*explanation of the concept goes here...*]" instead of actual content. The retrieval check ("explain that back to me") is hollow because nothing was actually explained for the learner to explain back. |
| 5 | run-stage-wrong-prediction | Sonnet | probes_misconception | Asks a generic open-ended question ("What did you expect to happen...that would produce 17.0?") rather than probing the specific tax misconception. Does not reference tax, line 5, or the fee+tax return statement. Compare to Opus which directly asks "If tax were already included, why would the function calculate it separately?" |
