---
name: prd
version: 1.0
description: >
  Activate for: PRD, product requirements document, product requirements,
  full requirements, initiative doc, initiative requirements, platform change,
  new product, product launch, major release, quarterly initiative, program
  brief, product vision doc, comprehensive requirements, cross-functional
  alignment doc, launch plan requirements.
plugin-commands: /prd
---

## PRD WORKFLOW

### When to Write a PRD (vs. a Feature Spec)

Write a SPEC when:   One feature, one team, one-to-three sprints
Write a PRD when:    Multiple features, multiple teams, major platform
                     change, new product area, or executive alignment required

### PRD Sections — Full Template

SECTION 1: EXECUTIVE SUMMARY
  [3–4 sentences only]
  What: [What are we building — in plain language]
  Why:  [What commercial or user problem does it solve]
  When: [Target delivery — quarter, not date unless confirmed]
  Win:  [How we will know it worked — headline metric]

SECTION 2: BUSINESS CONTEXT
  Problem statement:
    [The specific user pain or business gap — with evidence]

  Commercial evidence (use what is available):
  - Lost deals: "[N] deals cited [issue] as blocker in [period]"
  - Customer requests: "[N] requests logged; [source]"
  - Competitive gap: "[Competitor] offers [feature]; we do not"
  - Revenue opportunity: "[Estimate] ARR blocked or at risk"
  - Support cost: "[N] tickets / [hours] PM support time per [period]"

  Strategic fit:
    [How this initiative connects to the company/product strategy.
    One sentence. If you cannot write this sentence, the initiative
    may not belong in the roadmap.]

  Success metrics:
    Primary (measure at 6–12 months post-launch):
      [Specific, measurable outcome: not "improve NPS" but "enterprise NPS
      from 42 to 52 within 6 months of launch"]

    Secondary (measure at 30–90 days):
      [Leading indicators: adoption rate; support volume change;
       sales cycle impact]

    Failure threshold:
      [What outcome would cause us to reconsider or change direction?
       Define before launch, not after.]

SECTION 3: USER REQUIREMENTS
  Primary persona:
    Name:              [Persona name from product.local.md]
    Role:              [Job title / function]
    Current state:     [How they handle this today — the workaround]
    Desired state:     [What "10/10" looks like for them]
    Key user stories:  [Top 3 as "As a... I want... So that..."]

  Secondary persona (if applicable):
    [Same structure — brief]

  User journey map:
    Current state:     [Step-by-step of how they do it today]
    Pain points:       [Where the friction is in the current flow]
    Future state:      [Step-by-step with the new product in place]

SECTION 4: FUNCTIONAL REQUIREMENTS
  For each feature/capability in scope:

  Feature [N]: [Name]
    Priority:      MUST / SHOULD / COULD (MoSCoW)
    Description:   [What it does]
    Key flows:     [Primary user flows]
    Dependencies:  [Other features or teams this depends on]
    Spec ref:      [Link to individual spec if exists]

  Rule: Every item labelled MUST must ship before launch.
  If more than 60% of items are labelled MUST, the scope is too large.

SECTION 5: NON-FUNCTIONAL REQUIREMENTS
  Performance:
    [Page load time; API response time; export generation time — with numbers]

  Reliability:
    [Uptime SLA; error rate tolerance; recovery time objective]

  Security:
    [Authentication requirements; data encryption; audit requirements;
     penetration testing if required]

  Compliance:
    [GDPR / CCPA data handling; SOC 2 implications; HIPAA if applicable;
     sector-specific regulations]

  Accessibility:
    [WCAG standard; keyboard navigation; screen reader requirements]

  Internationalisation:
    [Languages supported; character set handling; RTL support if needed]

  Scalability:
    [Expected load at launch; growth assumptions; capacity planning notes]

SECTION 6: TECHNICAL ARCHITECTURE NOTES
  [High-level approach — not implementation detail]
  - Key technical decisions already made
  - Platform or infrastructure dependencies
  - Third-party integrations required
  - Data model changes (high level)
  - Migration requirements (existing users / data)
  - Feature flags required

  Note: This section is written by PM in collaboration with engineering.
  It must be reviewed and confirmed by the engineering lead before
  the PRD is marked as REVIEW-ready.

SECTION 7: GO-TO-MARKET REQUIREMENTS
  Documentation:
    [Customer-facing docs required; doc owner; due date]

  Customer Success enablement:
    [What CS needs to know before launch; training requirements]

  Sales enablement:
    [What sales needs to demo/discuss this feature; talking points]

  Pricing:
    [Is this in the current plan? New tier? Add-on? Pricing team review needed?]

  Beta programme:
    [Which customers; how many; invite criteria; beta start date; GA date]

  Customer communication:
    [Announcement channel; timing; who sends it]

  Press / analyst:
    [If applicable — flag for marketing team]

SECTION 8: LAUNCH PLAN
  Phased rollout:
    Phase 1 — Beta:  [Audience; dates; success gates for Phase 2]
    Phase 2 — GA:    [Full availability; announcement plan]
    Rollback plan:   [How to undo if critical bug discovered post-launch]

  Feature flags:
    [Required flags; rollout percentages; sunset plan]

  Monitoring:
    [What metrics are watched in the first 48 hours post-launch;
     who is on-call; escalation path]

SECTION 9: DEPENDENCIES AND RISKS
  External dependencies:
  | Dependency | Owner | Status | Risk if delayed |
  |---|---|---|---|
  | [Third party / platform team] | [Name] | [On track / TBD] | [Impact] |

  Top risks:
  | Risk | Likelihood | Impact | Mitigation |
  |---|---|---|---|
  | [Risk description] | H/M/L | H/M/L | [Specific mitigation action] |

SECTION 10: OPEN QUESTIONS
  [Same format as spec — numbered; owner; due date]
  All questions must be resolved before PRD moves to REFINED status.

APPENDICES (include as available)
  A. Competitive analysis
  B. User research excerpts
  C. Technical discovery notes
  D. Prior art / related specs

### PRD Status Gates

  DRAFT:    All sections present; some may be incomplete
  REVIEW:   All sections complete; open questions have owners and dates;
            engineering lead has confirmed architecture notes
  REFINED:  All open questions resolved; effort estimated by engineering;
            GTM requirements confirmed by CS/Sales
  APPROVED: CPO/CEO sign-off; ready for sprint planning
  SHIPPED:  Feature live; success metrics being tracked

## NEVER DO THESE

- NEVER approve a PRD for sprint planning without engineering lead
  sign-off on the architecture notes section
- NEVER mark a PRD REVIEW-ready with empty sections —
  a gap in the PRD is a gap in the product thinking
- NEVER define success metrics after launch — they must be in the PRD
  before the first sprint starts
- NEVER omit the failure threshold — knowing when to change direction
  is as important as knowing when to celebrate
- NEVER list a MUST requirement you would actually ship without —
  if you would ship without it, it is a SHOULD
