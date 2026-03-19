---
name: research
version: 1.0
description: >
  Activate for: research synthesis, synthesise research, user research,
  customer research, interview synthesis, NPS analysis, support ticket themes,
  user feedback, feature request analysis, app store reviews, survey results,
  usability findings, discovery synthesis, what users say, user insight,
  research insight, research findings, customer voice, VOC, voice of customer.
plugin-commands: /research
---

## RESEARCH SYNTHESIS WORKFLOW

### Research Material Types Supported

- Customer / user interview notes (structured or unstructured)
- Support ticket themes or verbatim exports
- NPS verbatim responses
- Feature request votes and comments (Canny, ProductBoard, UserVoice)
- App store reviews
- Survey open-text responses
- Session recording observations
- Usability testing notes
- Sales call notes (what prospects say about their problems)
- Win/loss interview summaries

### Phase 1: Methodology Capture

Before synthesising, document:
  Method:     [Interviews / tickets / NPS / mixed]
  Sample:     [n=X; who are they — role, company size, tenure]
  Period:     [When was this data collected?]
  Goal:       [What question were we trying to answer?]
  Limitation: [What might this sample miss or over-represent?]

Rule: A synthesis without a methodology note is an opinion, not research.

### Phase 2: Pattern Extraction

Read all material and extract:
  - Recurring themes (appear in >25% of sources)
  - Notable outliers (appear rarely but with high intensity or specificity)
  - Contradictions (users say X but data shows Y)
  - Unexpected findings (things that were not anticipated)

For each theme: count the evidence (n=X of Y participants mentioned this)
Do not overweight vivid quotes — a memorable quote from 1 participant
is weaker signal than a mundane theme from 7.

### Phase 3: Insight Structure

For each insight, produce:

  INSIGHT [N]: [Name — short, specific]
  ─────────────────────────────────────────────────────────
  Pattern:     [What we observed across the research material]
  
  Evidence:    [Specific data points — quotes attributed to participant
               number not name; ticket counts; survey percentages]
               "[Quote]" — Participant [N], [brief context]
               "[Quote]" — Participant [N], [brief context]
               [N] of [total] participants mentioned this theme.
  
  Product      [What this means for product decisions — specific]
  implication: [If we don't act: what continues to happen?]
               [If we act: what could improve?]
  
  Signal       🔴 HIGH — [X/Y participants; acute / systemic / blocking]
  strength:    🟡 MEDIUM — [appears frequently; workarounds exist]
               🟢 LOW — [minority signal; monitor; low urgency]
               ⚪ AMBIGUOUS — [conflicting signals; need more research]
  
  Recommended  [Specific product action: create discovery ticket /
  action:       update existing spec / reprioritise backlog item /
                no action — monitor]
  ─────────────────────────────────────────────────────────

### Phase 4: Mandatory "Do Not Build" Section

Every research synthesis must include:

  WHAT WE HEARD BUT SHOULD NOT BUILD (now)
  [Items users mentioned that are NOT recommended for the roadmap]
  [With rationale: low signal / high complexity / conflicting evidence /
   already solved differently / deferred with reason]

  This section prevents PM confirmation bias: a synthesis that only
  surfaces what confirms the existing roadmap is not a synthesis —
  it is a post-hoc justification.

### Phase 5: Recommended Product Actions

Summarise all insights into a prioritised action list:

  RECOMMENDED ACTIONS (ranked):
  Priority 1: [Action] — [Basis: insight N; signal: HIGH]
  Priority 2: [Action] — [Basis: insight N; signal: MEDIUM]
  Discovery:  [Action — needs more research before product decision]

### Research Output Format

  RESEARCH SYNTHESIS: [Study name / area]
  ════════════════════════════════════════════════════════════
  Method:     [Type] | Sample: n=[X] | Period: [dates]
  Goal:       [The question this research was trying to answer]

  TOP INSIGHTS

  INSIGHT 1: [Name]
  [Full insight block — see structure above]

  INSIGHT 2: [Name]
  [Full insight block]

  [Continue for all HIGH and MEDIUM signal insights]

  UNEXPECTED FINDINGS
  [Anything the research revealed that was not anticipated]
  [This is often the most valuable section]

  WHAT WE HEARD BUT SHOULD NOT BUILD
  [List with rationale]

  RECOMMENDED PRODUCT ACTIONS
  [Ranked action list]

  METHODOLOGY NOTE
  [Sample; method; limitation; raw notes location]
  ════════════════════════════════════════════════════════════

## NEVER DO THESE

- NEVER produce a synthesis without a methodology note
- NEVER rely on a single compelling quote to establish a theme —
  one vivid story is not signal; it is an anecdote
- NEVER omit the "do not build" section — it is where confirmation
  bias is most easily hidden
- NEVER label a finding as HIGH signal if fewer than 3 independent
  sources corroborate it
- NEVER confuse what users say they want with what their behaviour reveals
  they need — if the two contradict, flag both and note the contradiction
- NEVER recommend a product action without connecting it to a specific insight
