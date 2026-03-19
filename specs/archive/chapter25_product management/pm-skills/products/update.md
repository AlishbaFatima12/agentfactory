---
name: update
version: 1.0
description: >
  Activate for: stakeholder update, product update, executive update,
  engineering update, customer update, release note, launch announcement,
  product newsletter, sprint update, status update, quarterly update,
  weekly update, customer email, feature announcement, internal launch
  brief, sales enablement, support brief, customer FAQ, CS update,
  what's new, changelog, product news.
plugin-commands: /update
---

## UPDATE WORKFLOW

### Update Types

TYPE 1: EXECUTIVE STATUS UPDATE (weekly or ad hoc)
  Audience: CEO, CPO, board
  Length:   Max 300 words / 1 page
  Tone:     Direct; outcome-focused; no jargon

  FORMAT:
  ─────────────────────────────────────────────────────────
  PRODUCT STATUS — [Date]
  Status: [🟢 ON TRACK / 🟡 WATCH ITEM / 🔴 AT RISK]

  [1 sentence: what is the headline situation this week]

  PROGRESS:
  [2–3 bullet points: what moved forward]

  WATCH ITEM (if any — maximum one):
  [What is the risk; why; what is being done]

  RECOMMENDATION:
  [One specific action or decision requested from this audience]
  ─────────────────────────────────────────────────────────

TYPE 2: ENGINEERING SPRINT UPDATE
  Audience: Engineering team, EM
  Length:   As long as needed for clarity; structured
  Tone:     Precise; technical detail welcome; decision-oriented

  FORMAT:
  ─────────────────────────────────────────────────────────
  [FEATURE/SPRINT] CONTEXT — [Date]

  SINCE LAST UPDATE:
  [What was resolved, completed, or changed that affects this sprint]

  CURRENT PRIORITY ORDER:
  P1: [Item] — [Why P1] — [Spec/ticket reference]
  P2: [Item]
  Stretch: [Item — only if P1 and P2 complete]

  OPEN QUESTIONS / DECISIONS NEEDED FROM ENGINEERING:
  [Q1]: [Question] — needed by [date]
  [Q2]: [Question] — needed by [date]

  CONSTRAINTS (hard vs. flexible):
  Hard: [Things that cannot change]
  Flexible: [Things that can be negotiated if capacity requires]
  ─────────────────────────────────────────────────────────

TYPE 3: CUSTOMER EMAIL / FEATURE ANNOUNCEMENT
  Audience: Customers (all, segment, or named accounts)
  Length:   Max 200 words for mass email; up to 400 for named accounts
  Tone:     Friendly; practical; value-focused; no false promises

  FORMAT:
  ─────────────────────────────────────────────────────────
  Subject: [Value-focused subject — what they can now do]

  Hi [First name / team],

  [Opening: acknowledge what they've been waiting for / what's new]

  [2–3 short paragraphs: what it does; how to access it; what's next]

  [Optional: call to action — beta signup / feedback request / demo]

  [Sign-off: name, title, product team]
  ─────────────────────────────────────────────────────────

TYPE 4: INTERNAL LAUNCH BRIEF (all-hands or company-wide)
  Audience: All internal teams (CS, Sales, Support, Engineering, Marketing)
  Length:   1–2 pages
  Tone:     Informative; practical; gives each team what they need

  SECTIONS:
  - What we shipped (plain language; no jargon)
  - Who it affects (customer segments and internal teams)
  - What CS/Support should know (FAQs; edge cases; escalation path)
  - What Sales should know (how to position; what it solves)
  - When customers will see it (rollout timeline)
  - Where to learn more (docs link; demo recording; Slack channel)

TYPE 5: RELEASE NOTE
  Audience: Customers (in-app or changelog)
  Length:   50–150 words
  Format:   Lead with what they can now do; one key benefit; how to start

TYPE 6: CUSTOMER FAQ
  Audience: Customers or CS team
  Format:   5–8 most likely questions with direct answers
  Rule:     Answers must be honest about what the feature does AND
            what it does not do — over-promising in FAQs generates
            support tickets and damages trust

TYPE 7: SALES ENABLEMENT
  Audience: Sales team
  Length:   1 page max
  Sections:
  - The problem this solves (in prospect language)
  - How to position it in discovery (questions to ask)
  - What objections it removes
  - What it does NOT solve (so reps don't over-sell)
  - One-liner for the pitch deck

### Translation Rules (same reality → different languages)

When producing multiple versions of the same update:
  Feature name:   Internal name / Technical name → Customer value language
  "Sprint 3 of 4": → "Development progressing well; on track for Q3"
  "Tech debt":   → "Performance and reliability improvements"
  "Breaking change": → Not mentioned to customers until migration path ready
  Status "watch item": → Customer version: omit if < 2 weeks risk;
                          include if > 2 weeks risk with confident framing

## NEVER DO THESE

- NEVER include exact delivery dates in customer emails unless
  100% confirmed with engineering and no dependencies remain
- NEVER translate a "🔴 AT RISK" status into customer language
  without PM decision on what to communicate and how
- NEVER use internal codenames or ticket numbers in external comms
- NEVER include a "watch item" as the only content of an exec update —
  pair every risk with what is being done about it
- NEVER produce a Sales enablement doc that omits what the feature
  does NOT solve — reps who over-sell create churn
