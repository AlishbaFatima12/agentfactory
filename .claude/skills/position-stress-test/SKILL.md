---
name: position-stress-test
description: >
  Tests the robustness of a position or decision through structured commitment, stakeholder impact
  analysis, and multi-round adversarial challenge. Use whenever the user needs to defend a
  decision, says "stress test this", "challenge my thinking", "devil's advocate", "poke holes
  in this", "is this defensible", "ADR review", "defend this decision", or has a position they
  want to pressure-test before committing. Also trigger for architecture decisions, strategy
  reviews, hiring decisions, policy proposals, or any high-stakes commitment that needs
  adversarial validation. Works for ethical dilemmas, business decisions, and technical choices.
---

# Position Stress Test

Tests decisions through adversarial pressure. Combines structured position commitment with
stakeholder impact analysis and multi-round adversarial challenge to reveal whether a position
is grounded in reasoning or merely in habit.

Based on the Position Lock and Adversarial Defence exercises from Chapter 7 (Reasoning Through
Dilemmas).

---

## Two Modes

### Coach Mode (Default)

The user states their position first and defends it themselves. AI provides the adversarial
pressure but does NOT help write the defence. This tests genuine understanding.

**When to use**: The user wants to sharpen their own thinking. They say things like "challenge
me", "poke holes in this", "stress test my decision."

**Flow**:
1. User provides their position
2. AI guides them through the Position Lock structure (if not already complete)
3. AI delivers adversarial counter-arguments (3 rounds)
4. User writes each defence without AI assistance
5. AI evaluates at the end

### Output Mode

AI runs the full stress test autonomously, producing the complete analysis as output. The user
receives a finished Position Lock + Adversarial Defence document.

**When to use**: The user wants the analysis done FOR them. They say things like "stress test
this decision for me", "run a stress test on this proposal", "give me the adversarial case."

**Flow**:
1. User provides their position or decision
2. AI produces the complete stress test document (both sides)

---

## The Process

### Phase 1: Position Lock

Before any adversarial pressure, the position must be crystallised.

**Required elements:**

1. **Position Statement** (1 sentence)
   - Clear, specific, defensible. Not "I think we should consider..." but "We should build our
     own auth system instead of using Auth0."

2. **Three Strongest Arguments** (with evidence)
   - Each argument needs a claim AND supporting evidence or reasoning
   - Arguments should be distinct (not three versions of the same point)
   - Format:
     ```
     ARGUMENT 1:
       Claim: [specific claim]
       Evidence/Reasoning: [why this claim holds]
     ```

3. **Stakeholder Cost Matrix**
   - Every group affected by the decision
   - Includes uncomfortable costs (groups harmed, not just groups helped)
   - Must include groups the decision-maker might prefer to ignore

   | Stakeholder Group | Impact Description | Benefit / Harm | Magnitude (L/M/H) |
   |---|---|---|---|
   | [group] | [specific impact] | Benefit / Harm | L / M / H |

4. **Confidence Percentage** (0-100%)
   - Must match the strength of the arguments
   - 95% confidence with weak arguments = overconfidence
   - 40% confidence with honest reasoning = well-calibrated

5. **Reversal Trigger**
   - Specific, testable condition that would change the decision
   - Bad: "If it doesn't work out"
   - Good: "If Auth0's enterprise tier drops below $500/month AND our auth system takes more
     than 3 sprints to build"

### Phase 2: Adversarial Defence

Three rounds of increasingly deep counter-arguments.

**Round 1: Surface Attacks**
- Target the most obvious weaknesses in the position
- 3 counter-arguments, each attacking a different vulnerability
- Tone: aggressive, specific, not balanced

**Round 2: Structural Attacks**
- Target the defence responses from Round 1
- Find contradictions between arguments
- Press on the weakest part of the stakeholder analysis
- Escalate depth -- go beyond surface objections

**Round 3: Foundation Attacks**
- Challenge the fundamental values or assumptions underlying the position
- Present the strongest possible case for the opposite position
- Surface hidden assumptions the defender may not have examined

**After each round (Coach Mode):**
- User writes defence WITHOUT AI assistance
- Position Tracker updated: Held / Shifted / Reversed with reasoning

**Position Tracker:**

| Round | Position Status | Reasoning |
|---|---|---|
| Start | [Original position] | |
| After Round 1 | Held / Shifted / Reversed | [What changed and why] |
| After Round 2 | Held / Shifted / Reversed | [What changed and why] |
| After Round 3 | Held / Shifted / Reversed | [What changed and why] |

**Reflection** (after all rounds):
- Which counter-argument was hardest to answer and why?
- Did the position change? If so, at what exact moment?
- What does this reveal about the structure of the reasoning?

---

## Output Formats

### Full Stress Test Report

```
POSITION STRESS TEST
====================

POSITION STATEMENT:
[1 sentence]

ARGUMENTS:
1. [Claim] -- [Evidence]
2. [Claim] -- [Evidence]
3. [Claim] -- [Evidence]

STAKEHOLDER COST MATRIX:
| Stakeholder Group | Impact | Benefit/Harm | Magnitude |
|---|---|---|---|
| ... | ... | ... | ... |

CONFIDENCE: [X]%
REVERSAL TRIGGER: [specific, testable condition]

---

ADVERSARIAL DEFENCE (3 ROUNDS)

ROUND 1 - SURFACE ATTACKS:
  Counter-arguments: [3 attacks]
  Defence: [responses]
  Position: [Held/Shifted/Reversed] -- [reasoning]

ROUND 2 - STRUCTURAL ATTACKS:
  Counter-arguments: [deeper attacks]
  Defence: [responses]
  Position: [Held/Shifted/Reversed] -- [reasoning]

ROUND 3 - FOUNDATION ATTACKS:
  Counter-arguments: [fundamental challenges]
  Defence: [responses]
  Position: [Held/Shifted/Reversed] -- [reasoning]

---

POSITION TRACKER:
| Round | Status | Reasoning |
|---|---|---|
| Start | [Original] | |
| R1 | [Status] | [Why] |
| R2 | [Status] | [Why] |
| R3 | [Status] | [Why] |

REFLECTION:
Hardest counter-argument: [which and why]
Final confidence: [X]% (was [Y]%)

THINKING SCORECARD:
| Dimension | Score (1-10) | Justification |
|---|---|---|
| Argument Strength | | |
| Stakeholder Awareness | | |
| Intellectual Courage | | |
| Confidence Calibration | | |
| Position Tracking Honesty | | |
```

---

## Quality Checks

Before finalising any stress test output, verify:

1. **Position statement is exactly 1 sentence** -- not a paragraph, not hedged with "I think maybe"
2. **Three arguments are distinct** -- not three phrasings of the same point
3. **Each argument has evidence/reasoning** -- not just assertions
4. **Stakeholder Cost Matrix includes uncomfortable costs** -- groups harmed, groups ignored, not just groups that benefit
5. **Stakeholder Matrix has at least 4 groups** -- fewer suggests incomplete analysis
6. **Reversal trigger is specific and testable** -- contains concrete conditions, numbers, or timeframes; not vague "if things change"
7. **Confidence percentage has justification** -- explains why this number, not just stated
8. **3 rounds of adversarial challenge with increasing depth** -- Round 3 must be deeper than Round 1
9. **Position Tracker is honest** -- "Held" on every round with no reasoning change is suspicious
10. **Reflection identifies the hardest counter-argument** -- with genuine analysis of WHY it was hard

---

## When Evaluating Existing Positions

When asked to assess someone else's decision defence (e.g., "evaluate this ADR", "is this
decision well-defended?"):

1. Extract their position statement (or note its absence)
2. Identify their stated arguments
3. Build the Stakeholder Cost Matrix they should have built
4. Run the 3-round adversarial challenge against their position
5. Assess: Would this position survive scrutiny?
6. Score using the Thinking Scorecard

---

## Thinking Scorecard

| Dimension | What It Measures | Signs of High Score | Signs of Low Score |
|---|---|---|---|
| **Argument Strength** | Are the 3 arguments logically sound, evidence-based, and distinct? | Specific evidence, addresses root causes, each argument independent | Vague assertions, circular reasoning, arguments overlap |
| **Stakeholder Awareness** | Does the matrix capture ALL affected groups including uncomfortable ones? | 5+ groups, includes harmed parties, acknowledges ignored groups | Only lists beneficiaries, misses obvious affected parties |
| **Intellectual Courage** | Does the defender engage with hard counter-arguments or deflect? | Directly addresses strongest objections, concedes valid points | Restates original position louder, ignores inconvenient evidence |
| **Confidence Calibration** | Does the confidence % match the actual strength of the position? | Confidence adjusts with new evidence, honest about uncertainty | 95% confidence despite weak arguments, or 10% despite strong ones |
| **Position Tracking Honesty** | Is the Held/Shifted/Reversed tracking genuine? | Documents exact moments of doubt, explains reasoning for shifts | "Held" on everything with no engagement, or flip-flops without reasoning |
