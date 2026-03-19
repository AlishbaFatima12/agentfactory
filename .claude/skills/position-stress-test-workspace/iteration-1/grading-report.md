# Position Stress Test -- Eval Grading Report (Iteration 1)

## Eval 1: Build Own Auth System (Business Decision)

### With Skill (eval1-with-skill.md) -- 148 lines

| Expectation | Pass? | Notes |
|---|---|---|
| Clear 1-sentence position statement | PASS | "We should build our own authentication system instead of using Auth0." |
| 3+ distinct arguments with evidence | PASS | 3 distinct arguments: control/lock-in, cost at scale, integration/latency. Each with specific evidence (pricing, latency numbers). |
| Stakeholder Cost Matrix with 4+ groups, benefit/harm, magnitude | PASS | 8 groups including uncomfortable costs (security posture, future hires, compliance, customers). |
| Matrix includes uncomfortable costs | PASS | Engineering burden (H), security posture (H), compliance (M), future hires (M) all honestly flagged as harm. |
| Specific testable reversal trigger | PASS | "If Auth0 introduces a startup/growth tier below $5K/year... AND custom auth requires >2 security incidents or >15% of one engineer's time" -- specific, numeric, testable. |
| 3 rounds with increasing depth | PASS | R1=surface (cost, security, vanity), R2=structural (contradictions, stakeholder evidence, sunk cost), R3=foundation (lock-in trap, security ops gap, enterprise credibility). Clear escalation. |
| Position Tracker with honest tracking | PASS | Tracked: Shifted (R1) -> Shifted further (R2) -> Held--barely (R3). Confidence: 65% -> 55% -> 45% -> 40%. Genuine movement documented. |
| Confidence % with justification | PASS | Started 65% with reasoning. Dropped to 40% with specific justification at each step. |

**Score: 8/8 expectations met.**

**Quality notes:** Exceptional output. The adversarial rounds genuinely deepen (R3's "security operations gap" is a fundamentally different kind of challenge than R1's cost arguments). The Position Tracker is honest -- confidence drops from 65% to 40% with clear reasoning. The Thinking Scorecard is well-calibrated. The "Bottom line" section adds practical value beyond the template.

### Without Skill (eval1-without-skill.md) -- ~240 lines

The without-skill run was executed within the project context. Claude explored the actual codebase (SSO server, Better Auth setup) before producing output. The result was a stress test customized to the real project.

| Expectation | Pass? | Notes |
|---|---|---|
| Clear 1-sentence position statement | PASS | Generated a position statement about the specific Better Auth implementation |
| 3+ distinct arguments with evidence | PARTIAL | Arguments present but less structured -- mixed with codebase observations |
| Stakeholder Cost Matrix with 4+ groups | PARTIAL | Stakeholder analysis present but not in the structured Matrix format |
| Specific testable reversal trigger | PARTIAL | Reversal conditions mentioned but not in the structured format |
| 3 rounds adversarial | PARTIAL | Adversarial content present but structure less consistent |
| Position Tracker | PARTIAL | Position tracking present but format varies |
| Confidence % with justification | PARTIAL | Confidence discussed but not always in structured format |
| Thinking Scorecard | FAIL | No formal scorecard |

**Score: ~1/8 full pass, ~6/8 partial. The content is there but not in the structured, reproducible format.**

**Quality notes:** The without-skill run produced useful analysis but it was unstructured. It spent tokens reading the codebase to ground the analysis in real context (a strength), but the output format was inconsistent and would not be reproducible across different prompts. The skill provides the crucial structural consistency.

---

## Eval 3: 15% Layoff Recommendation (Edge Case -- Ethically Complex)

### With Skill (eval3-with-skill.md) -- 190 lines

| Expectation | Pass? | Notes |
|---|---|---|
| Clear position statement | PASS | "We should lay off 15% of staff now to extend our cash runway..." |
| 3+ distinct arguments with evidence | PASS | 3 arguments: runway extension (with math), single decisive cut (citing Cascio/HBR), worse alternatives. All distinct with evidence. |
| Matrix includes laid-off employees, remaining, customers, investors, families | PASS | 9 groups: laid-off employees (H harm), remaining employees, families/dependents (H harm), customers, investors, founders, hiring pipeline, teams, underrepresented employees. |
| Laid-off employees classified as High magnitude harm | PASS | Explicitly "Harm | High" for laid-off employees and families. |
| Specific testable reversal trigger | PASS | Three specific conditions: term sheet within 30 days at <=20% dilution, cut extending runway <=3 months, cut eliminating critical function. |
| Adversarial rounds challenge business + ethical dimensions | PASS | R1=business (arbitrary number, insufficiency risk, productivity dip), R2=structural (leadership sacrifice, false trilemma, fundraising), R3=foundation (thesis validity, moral framing, silenced stakeholders). |
| R3 challenges fundamental assumption | PASS | "Does this company deserve to survive?" -- directly challenges the axiom. "You're framing this as financial but it's a values question." |
| Position tracking honest -- not all "Held" | PASS | Shifted (R1) -> Shifted further (R2) -> Held but reframed (R3). 72% -> 65%. Position substantively transformed. |
| Thinking Scorecard with scores + justifications | PASS | 5 dimensions scored 7-9 with specific justifications. |

**Score: 9/9 expectations met.**

**Quality notes:** Outstanding. Counter-argument 7 ("does this company deserve to survive?") and counter-argument 9 ("the people who get cut are structurally silenced") are philosophically substantive. The position transformation is honest: the original "lay off 15%" became a conditional, sequenced, multi-prerequisite recommendation. The "What to Bring to the Board" section adds tremendous practical value.

### Without Skill (eval3-without-skill.md) -- 24 lines

The model entered Coach Mode by default: asked the user to provide their Position Lock before proceeding. No stress test was produced.

**Score: 0/9 expectations met (but the conversational scaffolding was reasonable -- it just cannot complete in non-interactive mode).**

---

## Summary Table

| Eval | With Skill | Without Skill | Skill Uplift |
|---|---|---|---|
| Eval 1: Auth system (business) | **8/8** (148 lines, structured) | **~1/8** (240 lines, unstructured) | Structural consistency + reproducibility |
| Eval 3: Layoffs (ethical edge case) | **9/9** (190 lines, structured) | **0/9** (24 lines, awaited input) | Total -- skill enabled autonomous completion |

### Key Findings

1. **Structural consistency is the primary uplift.** The with-skill outputs follow the exact format every time (Position Statement -> Arguments -> Matrix -> Confidence -> Reversal Trigger -> 3 Rounds -> Tracker -> Reflection -> Scorecard). Without-skill outputs are ad-hoc.

2. **The skill enables non-interactive completion.** Without explicit Output Mode instructions, Claude defaults to Coach Mode (asking the user to provide their position first). The skill's Two Modes section and Output Mode definition let it produce complete stress tests autonomously.

3. **Adversarial depth genuinely escalates.** R1->R2->R3 attack types clearly progress from surface to structural to foundational in both with-skill evals. This is the core pedagogical value from Ch 7's lesson design.

4. **Position tracking is honest.** Neither with-skill eval produced "Held" across all rounds. Both showed genuine shifts with specific reasoning. Confidence percentages moved meaningfully.

5. **Edge case handling is strong.** The layoff scenario was handled with appropriate ethical gravity -- families, underrepresented employees, and structurally silenced stakeholders were all included.

6. **Practical additions emerge beyond the template.** Eval 3's "What to Bring to the Board" (8 recommendations) and Eval 1's "Bottom line" (3 next steps) add value the template doesn't explicitly require.

### Iteration 1 Verdict

**The skill works well. No SKILL.md changes needed.** Both test cases produced complete, high-quality stress tests meeting all eval expectations. The skill's primary value is structural consistency and enabling autonomous (non-interactive) completion.
