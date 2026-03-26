# TutorClaw Teaching Skill — Final Assessment

## Production Summary

| Metric | Value |
|---|---|
| Source | Teaching.md (1,260 lines, 15K tokens) |
| Skill package | ~500 lines (SKILL.md + 4 reference files) |
| Evals | 12 scenarios, 52 assertions |
| Total runs executed | 80+ across 2 iterations, 2 models, 2 runs each |
| Models tested | Claude Opus, Claude Sonnet, Gemini CLI |

## Final Pass Rates (Independent Grader, Iteration 2)

| Model | Pass Rate | Failures | Key Pattern |
|---|---|---|---|
| **Opus** | **86.5%** (45/52) | 7 | Over-explains: scaffolds too much at AI_FREE, reveals values |
| **Sonnet** | **78.8%** (41/52) | 11 | Under-specifies: misses concrete numbers, produces placeholders |

## Iteration Progression

| | Iter 1 Opus | Iter 1 Sonnet | Iter 2 Opus | Iter 2 Sonnet |
|---|---|---|---|---|
| Evals | 8 | 8 | 12 | 12 |
| Assertions | 36 | 36 | 52 | 52 |
| **Strict grader** | 83.3% | 80.6%* | **86.5%** | **78.8%** |
| **Key fix (Eval 5)** | 5/5 | 3/5 | 5/5 | **5/5** (fixed) |

*Iter 1 Sonnet was 94.4% on self-grading, 80.6% on strict independent grading with Gemini included.

## Failure Analysis

### Category 1: Assertion Calibration Issues (not real skill failures)

| Failure | Affected | Issue |
|---|---|---|
| modify-mini-predict / concise | Both | Assertion says "2-4 sentences" but Modify has no such limit in the skill; the 2-4 guideline is for Predict only |
| advanced-make / does_not_evaluate_code | Both | Assertion conflicts with skill instruction to "probe implicit design decisions"; analyzing design IS engaging with code |

**Action needed**: Fix 2 assertions, not the skill.

### Category 2: Real Skill Boundary Issues

| Failure | Affected | Root Cause |
|---|---|---|
| ai-free-predict / no_code_explanation | Opus | Skill says "scaffold" but also says AI_FREE = "nothing"; Opus resolves the conflict by scaffolding with variable values, which effectively explains the code |
| run-stage-wrong-prediction / does_not_just_give_answer | Opus | Socratic approach at Run says "don't explain"; Opus points to specific lines with rhetorical questions that effectively explain |

**Action needed**: Clarify in skill: "At AI_FREE, scaffolding may narrow the question but MUST NOT reveal variable values from the code. At Run stage with Socratic approach, point the learner to the relevant area without explaining the mechanism."

### Category 3: Model-Specific Failures

| Failure | Model | Issue |
|---|---|---|
| confidence / suggests_higher_rating | Sonnet | Doesn't suggest specific number (says "better than you think" without "at least a 4") |
| frustration / warm_tone | Sonnet | Produces placeholder text instead of actual explanation |
| wrong-prediction / probes_misconception | Sonnet | Generic probe instead of targeting specific tax misconception |

**Action needed**: These are Sonnet limitations under the current skill. Could add more explicit templates/examples, but risk over-constraining.

## What the Skill Does Well (6 Perfect Evals, Both Models)

| Eval | Both Pass | Why It Works |
|---|---|---|
| Learner-first investigate | 4/4 | AFTER_LEARNER_FIRST is clear and unambiguous |
| Gate fail shallow explanation | 5/5 | HOW vs WHAT distinction + scaffold guidance is precise |
| Urdu code-switching | 4/4 | Language matching + AI_FREE is well-specified |
| Cheating detection | 4/4 | Edge-cases.md protocol is specific and actionable |
| Gate pass advancement | 4/4 | "1-2 sentences, then advance" is simple and clear |
| Session opening | 4/4 | First-session script is explicit |

## What the Skill Constrains vs Baseline

| Behavior | With Skill | Without Skill (Baseline) |
|---|---|---|
| Cheating detection | Tactful probe, no accusation | Openly accuses |
| Spec-first enforcement | Defers code review | Reviews code immediately |
| Response conciseness | ~80 words avg | ~150 words avg |
| AI-free enforcement | Structured redirect with phrase | Ad-hoc redirect, verbose |

## Remaining Work

1. Fix 2 assertion calibration issues (modify concise, advanced-make evaluate)
2. Clarify AI_FREE scaffold boundary in SKILL.md (no variable values)
3. Strengthen Run stage Socratic instructions (point to area, don't explain mechanism)
4. Add few-shot examples for Sonnet's weak spots (confidence numbers, misconception probing)
5. Retry Gemini CLI with file-based prompts

## Verdict

**The skill is effective and near-production-ready.** It achieves 86.5% on strict independent grading with Opus and clears all the hardest pedagogical constraints (cheating tact, spec-first, gate enforcement, learner-first). The remaining failures are boundary cases where the skill's instructions create genuine tension (scaffold vs AI_FREE) that needs one more round of precision editing.

The 6 perfect-scoring evals demonstrate the skill's core strength: when instructions are unambiguous and specific, both models follow them perfectly. The failures cluster where instructions create tension between competing goals.
