---
name: sealed-decision
description: >
  Structures decision-making under uncertainty by forcing a clear recommendation with calibrated
  confidence, ranked information gaps, and specific reversal triggers before seeking additional
  input. Use whenever the user faces a decision with incomplete information, says "should I",
  "what should we do about", "help me decide", "I'm torn between", "decision framework",
  "not sure which way to go", "weigh the options", or needs to make a call with imperfect data.
  Also trigger for hiring decisions, technology selection, investment choices, strategic pivots,
  go/no-go decisions, or any situation where waiting for perfect information is itself a decision.
---

# Sealed Decision

Most decisions are made with incomplete information. The skill is not finding perfect data — it is deciding well with what you have, knowing exactly what would change your mind, and calibrating your confidence honestly.

This skill structures decision-making under uncertainty into a repeatable framework: commit to a recommendation, document your reasoning, calibrate your confidence, rank what you do not know by how much it matters, and define the specific conditions under which you would reverse course.

---

## Two Modes

### Coach Mode (User Commits First)

The user makes their decision BEFORE receiving AI input. The AI then evaluates:

1. Is the recommendation reasonable given available information?
2. Is the confidence level calibrated (not over/underconfident)?
3. Are the missing information gaps ranked by decision impact (not by category)?
4. Is the reversal trigger specific and testable (not vague)?
5. What decision would the AI make with the same incomplete information?

Use Coach Mode when the user says "evaluate my decision", "rate my thinking", or presents a completed decision document.

### Output Mode (Structure the Decision)

The AI helps the user structure a decision they are facing. Walk through each component systematically:

1. Clarify the decision context and constraints (timeline, stakeholders, irreversibility)
2. Force a single clear recommendation sentence
3. Draw out the reasoning (200-300 words addressing key tradeoffs)
4. Calibrate confidence with explicit justification
5. Identify and rank the top 3 missing information items by decision impact
6. Define a specific, testable reversal trigger

Use Output Mode when the user says "help me decide", "should I", or presents a situation needing a decision.

---

## The Process

### Step 1: State the Decision Context

Identify:
- What decision must be made
- What is the timeline/deadline
- Who are the stakeholders
- What makes this decision hard (competing priorities, incomplete data, high stakes)
- What is the cost of deciding wrong vs. the cost of not deciding

### Step 2: Make a Clear Recommendation

One sentence. No hedging. No "it depends." Pick a direction.

Bad: "We should probably consider maybe going with option A if the market conditions are favorable."
Good: "Acquire the strategic buyer's $5M offer and negotiate a 12-month team retention clause."

### Step 3: Document Reasoning (200-300 Words)

Address the key tradeoffs explicitly. Acknowledge what you are giving up. Explain why the chosen path is better given what you know now — not what you wish you knew.

The reasoning should make someone who disagrees understand WHY you decided this way, even if they would decide differently.

### Step 4: Assign Confidence Level (0-100%)

The confidence percentage must match the actual uncertainty:
- 90-100%: Almost certain. Very little could change this.
- 70-89%: Confident but acknowledge meaningful unknowns.
- 50-69%: Genuine toss-up with a slight lean. This is often the honest answer.
- 30-49%: Leaning one way but could easily be wrong.
- Below 30%: Guessing. Say so.

**Calibration check**: A well-calibrated 55% confidence is more valuable than a poorly-calibrated 90%. The skill is knowing how much you know.

Always state WHY you chose that percentage: "65% because the market data supports this direction, but the competitor's pricing is unknown and could invalidate my core assumption."

### Step 5: Rank Missing Information by Decision Impact

List exactly 3 items. Rank them by HOW MUCH THEY WOULD CHANGE YOUR DECISION, not by how much information is missing.

Bad ranking (by category):
1. More market data
2. More customer feedback
3. More financial analysis

Good ranking (by decision impact):
1. Competitor's actual pricing — if below $50/month, my recommendation reverses (IMPACT: changes decision)
2. Customer churn rate for last quarter — if above 15%, timeline must accelerate (IMPACT: changes urgency)
3. Integration cost estimate from engineering — if above $500K, financial case weakens (IMPACT: changes confidence)

Each item must state: what is missing AND what impact knowing it would have on the decision.

### Step 6: Define a Reversal Trigger

A reversal trigger is a specific, testable condition under which you would change your recommendation. It must be concrete enough that two people could independently agree whether it has been met.

Bad (vague): "I would change my mind if the market shifts."
Bad (vague): "I would change my mind if things don't work out."
Bad (vague): "I would reconsider if new information emerges."

Good (specific): "I would change my recommendation if competitor pricing is confirmed below $50/month for equivalent features."
Good (specific): "I would reverse this decision if Q3 revenue drops below $2M, indicating the market thesis is wrong."
Good (specific): "I would change course if more than 3 of the 5 key engineers decline the retention offer within 2 weeks."

The reversal trigger is the most important element. It separates someone who has thought deeply about their decision from someone who is guessing.

---

## Output Format

### Decision Document Template

```
DECISION DOCUMENT

Decision Context: [What must be decided, timeline, constraints]

RECOMMENDATION: [One clear sentence. No hedging.]

REASONING (200-300 words):
[Address key tradeoffs. Acknowledge what you are giving up.
Explain why this path given what you know now.]

CONFIDENCE: [X]%
Why this level: [Explicit justification tied to evidence and unknowns]

MISSING INFORMATION (ranked by decision impact):
#1: [What is missing] — Impact: [How knowing this would change the decision]
#2: [What is missing] — Impact: [How knowing this would change the decision]
#3: [What is missing] — Impact: [How knowing this would change the decision]

REVERSAL TRIGGER:
I would change my recommendation if: [Specific, testable condition]
```

---

## Quality Checks

Before finalizing any decision document, verify all of these:

1. **Recommendation is actionable**: Someone could execute it without asking "but what exactly should I do?" If it starts with "consider" or "evaluate", it is not a recommendation.

2. **Recommendation is a single sentence**: No compound sentences with "and also" or multi-paragraph hedging. One clear direction.

3. **Confidence percentage matches the stated uncertainty**: If reasoning describes major unknowns but confidence is 90%, something is miscalibrated. If reasoning says "we have strong evidence" but confidence is 40%, that is also miscalibrated.

4. **Information gaps are ranked by decision impact, not by category**: "More market data" is a category. "Competitor pricing for the mid-tier plan" is a specific gap with measurable impact. Each gap must state what would change if known.

5. **Reversal trigger is specific and testable**: Apply the "two strangers" test — could two people who have never met independently agree on whether this trigger has been met? "If things change" fails. "If Q3 revenue is below $2M" passes.

6. **Reasoning addresses tradeoffs**: The reasoning must acknowledge what is being given up, not just argue for the chosen path. One-sided reasoning suggests the decision was not actually hard.

7. **Reasoning is 200-300 words**: Too short means shallow analysis. Too long means inability to synthesize. The constraint is the skill.

---

## When Evaluating Existing Decisions

When reviewing someone else's decision document (Coach Mode), score each dimension:

### Scoring Rubric

| Dimension | Strong (8-10) | Adequate (5-7) | Weak (1-4) |
|-----------|--------------|----------------|------------|
| Recommendation Clarity | One sentence, actionable, unambiguous | Clear but slightly hedged | Vague, multi-part, or non-committal |
| Confidence Calibration | % matches reasoning and evidence quality | % roughly appropriate | % disconnected from stated uncertainty |
| Info Gap Prioritization | Ranked by decision impact with specific items | Some impact ranking, some generic | Listed by category, no impact analysis |
| Reversal Trigger Specificity | Specific, testable, passes "two strangers" test | Somewhat specific but could be sharper | Vague ("if things change") |
| Reasoning Quality | Addresses tradeoffs, 200-300 words, synthesized | Covers main points, may miss tradeoffs | One-sided, too short/long, or superficial |

### Evaluation Output

For each dimension:
- Score (1-10)
- One-sentence justification with specific evidence from the document
- One specific improvement suggestion

Then provide:
- Overall assessment (1-2 sentences)
- The single most impactful improvement the author could make
- What decision you would make with the same information (for comparison)

---

## Thinking Scorecard

When this skill is used in the context of the Agent Factory book (Part 0), apply these thinking dimensions:

| Dimension | What It Measures | Indicators of Strength |
|-----------|-----------------|----------------------|
| Recommendation Clarity | Can the reader execute this without further questions? | Single sentence, specific action, no hedging |
| Confidence Calibration | Does the % honestly reflect what is known vs. unknown? | Justification matches evidence quality |
| Info Gap Prioritization | Are gaps ranked by decision impact, not volume? | Each gap states what would change if known |
| Reversal Trigger Specificity | Could two strangers agree whether the trigger was met? | Concrete numbers, dates, or observable events |
| Reasoning Quality | Does the reasoning address tradeoffs and synthesize? | Acknowledges costs of chosen path, 200-300 words |

---

## Common Anti-Patterns

| Anti-Pattern | What It Looks Like | Fix |
|-------------|-------------------|-----|
| The Non-Decision | "We should gather more data before deciding" | Force a recommendation NOW. Gathering data IS a decision — name its cost. |
| The Hedge | "We should probably lean toward option A" | Remove qualifiers. State the recommendation as a commitment. |
| The Kitchen Sink | 7 missing information items, all generic | Limit to 3. Rank by impact. Each must state what changes if known. |
| The Unfalsifiable Trigger | "I'd change my mind if this doesn't work" | Apply the "two strangers" test. Make it measurable. |
| The Overconfident Brief | 95% confidence with 3 major unknowns | Calibrate confidence to actual uncertainty. 55% is often honest. |
| The Underconfident Brief | 30% confidence when evidence strongly favors one option | Low confidence should be justified by specific uncertainty, not general anxiety. |
