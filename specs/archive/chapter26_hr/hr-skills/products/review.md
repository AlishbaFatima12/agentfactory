---
name: review
version: 1.0
description: >
  Activate for: performance review, performance appraisal, annual review,
  half-year review, mid-year review, 360 feedback, 360-degree feedback,
  peer feedback, upward feedback, review prep, prepare review, write review,
  review template, feedback template, performance framework, performance
  management, goal setting, OKR review, development plan, capability review,
  PIP, performance improvement plan, calibration, rating.
plugin-commands: /review
sensitivity: CONFIDENTIAL — contains assessment of individual employees
---

## PERFORMANCE REVIEW WORKFLOW

### Review Types

TYPE 1: MANAGER-WRITTEN REVIEW (most common)
  Input: Manager's raw notes / observations about an employee
  Output: Structured review with evidenced strengths, specific development
  areas, career development section, and H1/H2 goals

TYPE 2: 360° FEEDBACK SYNTHESIS
  Input: Raw responses from multiple reviewers (peers, reports, cross-functional)
  Output: Synthesised themes with frequency and direction; outlier flagging;
  recommendation on what to include in the formal review

TYPE 3: REVIEW FRAMEWORK DESIGN
  Input: Organisation's review cycle requirements and constraints
  Output: Review framework document, manager guide, rating scale (if needed)

TYPE 4: 360° TEMPLATE CREATION
  Input: Role being reviewed; dimensions to assess; reviewer types
  Output: Structured questionnaire (max 5 questions; rating + open-text mix)

TYPE 5: PERFORMANCE IMPROVEMENT PLAN (PIP)
  ⚠️ SENSITIVE: Always flag for HR review before use
  Input: Performance concerns with evidence; prior feedback given; support offered
  Output: Draft PIP structure only — must be reviewed by HR BP before discussion

### Manager Review — Quality Standards

STRENGTHS SECTION — must be:
  ✓ Specific: not "good communicator" but "presented the Q3 analytics
    review to the CFO team clearly, received positive feedback"
  ✓ Evidenced: at least one concrete example per strength
  ✓ Connected to role impact: why does this strength matter for the role
    and the organisation?

DEVELOPMENT SECTION — must be:
  ✓ Behavioural: describes observable behaviour, NOT personality
    WRONG: "needs to be more confident" (personality judgment)
    RIGHT: "in the last two stakeholder presentations, Bilal used
    technical language that lost the non-technical audience; the
    recommendation was not adopted because the value wasn't clear"
  ✓ Evidenced: at least one specific observation per development area
  ✓ Forward-looking: every development area has a specific next action
    with a timeline and support offered
  ✓ Limited: maximum 2 development areas per review cycle
    (more than 2 dilutes focus and demoralises)

CAREER DEVELOPMENT SECTION — must be:
  ✓ Honest: if promotion is 12+ months away, say so
  ✓ Specific: readiness plan with quarterly milestones
  ✓ Two-way: "we want to invest in X" not just "you need to improve Y"
  ✓ No false promises: "if performance continues at this level, promotion
    in Q4 is realistic" — not "you'll definitely be promoted in Q4"

GOALS SECTION — must be:
  ✓ SMART: Specific / Measurable / Achievable / Relevant / Time-bound
  ✓ Maximum 3–4 goals per cycle (more dilutes focus)
  ✓ At least one goal focused on development (not just delivery)

### The Vague-to-Specific Conversion

When manager provides vague input, convert before writing:

  INPUT: "She could be more proactive"
  CONVERSION QUESTION: "What specific situations have you observed
  where a more proactive approach would have made a difference?"
  OUTPUT: "In Q3, two opportunities to flag emerging data quality issues
  were identified by other team members rather than by Ayesha, despite
  Ayesha having the closest visibility of the data. At the level of Senior
  Analyst, the expectation is that anomalies are surfaced proactively."

  INPUT: "He's technically strong"
  CONVERSION QUESTION: "What specific technical achievement in this
  review period is the strongest evidence of this?"
  OUTPUT: "Bilal's approach to the API gateway architecture — specifically
  the decision to implement circuit breakers at the service boundary — has
  proven correct as traffic has scaled. This was his recommendation against
  an alternative approach and it was the right call."

### 360° Synthesis Rules

When synthesising multiple reviewer responses:
1. Categorise by theme (not by reviewer)
2. For each theme: count occurrences; note direction (praise / concern)
3. Classify signal strength:
   - Consistent (3+ reviewers, same direction): include in formal review
   - Moderate (2 reviewers or mixed signals): include as "area to explore"
   - Outlier (1 reviewer, significantly different from others): flag but
     do not include in formal review without investigation
4. Separate: what reviewers said about behaviour vs. outcomes vs. relationships
5. Flag anonymity risk: if only 1–2 reviewers in a category, their identity
   may be guessable — flag for HR decision on whether to include

### Review Output Format

  PERFORMANCE REVIEW: [Employee Name] — [Period]
  Manager: [Name] | Date: [Date] | [CONFIDENTIAL]
  ════════════════════════════════════════════════════════════

  PERFORMANCE SUMMARY
  [2–3 sentences: the overall narrative of this person's performance
  this period — honest, balanced, specific]

  STRENGTHS — WITH EVIDENCE
  1. [Strength name]
     [Specific evidence — what did they do and what was the outcome]
     [Why it matters for the role]

  2. [Strength name]
     [Evidence and impact]

  DEVELOPMENT AREAS — SPECIFIC AND ACTIONABLE
  1. [Behaviour description — not personality]
     Observation: [Specific instance(s)]
     Why it matters: [Connection to role expectations at this level]
     Development action: [Specific; time-bound; with support offered]

  [Maximum 2 development areas]

  CAREER DEVELOPMENT
  [Employee's stated ambition or trajectory]
  [Honest assessment of readiness and timeline]
  [Readiness plan: quarterly milestones with manager's commitment]

  GOALS FOR [NEXT PERIOD]
  1. [SMART goal — delivery focus]
  2. [SMART goal — delivery focus]
  3. [SMART goal — development focus]

  [SUMMARY RATING: [Enter per company framework — not generated by agent]]
  ════════════════════════════════════════════════════════════

## NEVER DO THESE

- NEVER describe a development area as a personality trait —
  always translate to observable behaviour
- NEVER include more than 2 development areas — this is a limit
  that protects the employee's ability to focus
- NEVER make a specific promotion promise in a review document
  ("you will be promoted in Q4") — use "if performance continues,
  promotion in Q4 is realistic"
- NEVER generate a PIP without including: "This document requires
  HR Business Partner review before use in any employee conversation"
- NEVER include 360° feedback from a single reviewer without
  flagging the anonymity and sample size risk to the manager
- NEVER omit goals for the next period — a review without forward
  goals is a judgment without direction
