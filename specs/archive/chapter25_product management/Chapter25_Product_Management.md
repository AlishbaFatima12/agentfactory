# Chapter 25: Product Management

> *"The best PMs I've worked with share one quality: they have almost supernatural clarity about what they are building and why. Every feature spec is tight. Every roadmap decision is traceable to a user problem. Every stakeholder update tells the same story from a different angle. The rest of us — talented, well-meaning — spend half our time writing specs that confuse engineers, roadmaps that confuse executives, and research syntheses that confuse everyone. The gap is not intelligence. It is craft."*
> — CPO, Series B SaaS company, 2025

---

## Introduction: The PM's Cognitive Load Problem

Product Management is one of the highest-leverage and highest-cognitive-load roles in any technology organisation. A senior PM is simultaneously:

- A **researcher** — synthesising user interviews, support tickets, NPS data, and behavioral analytics into a coherent picture of what users actually need
- A **writer** — producing feature specs tight enough that engineers can build from them without ambiguity, PRDs comprehensive enough that no edge case is missed
- A **strategist** — maintaining a roadmap that reflects business priorities, technical constraints, user needs, and market reality simultaneously
- A **communicator** — translating the same product decisions for engineers (technical precision), executives (business outcomes), customers (value language), and the market (positioning)
- A **decision-maker** — prioritising a backlog that is always longer than the capacity to execute, with incomplete information and competing stakeholder pressures

The volume of writing and synthesis required to do all of this at high quality is staggering. A single feature from ideation to launch might require: discovery notes, a problem statement, user story mapping, a technical spec, a PRD, a sprint brief, an acceptance criteria document, a launch communication, a customer FAQ, internal training notes, and a post-launch retrospective.

Most PMs either write some of these poorly (because there isn't time to write them well) or skip them entirely (because there isn't time to write them at all). The result is the most common failure modes in product development: engineers who built the wrong thing because the spec was ambiguous; executives who lost confidence because the roadmap narrative was unclear; users who couldn't figure out how to use the feature because the documentation was an afterthought.

The Claude Product Management Plugin, available at `claude.com/plugins/product-management` and maintained in the `knowledge-work-plugins/product-management` GitHub repository, addresses this cognitive load directly. It is not a project management tool — Claude does not manage your Jira board. It is a writing and synthesis intelligence layer: it takes the thinking you have already done and produces the documents, analyses, and communications that your thinking deserves.

---

## The PM Plugin Architecture

### Installing the Plugin

```
Platform:  Claude Cowork
Path:      Cowork → Plugins → Browse
Plugin:    Product Management
URL:       https://claude.com/plugins/product-management
GitHub:    https://github.com/anthropics/knowledge-work-plugins/tree/main/product-management
```

### Plugin Commands

| Command | Function |
|---|---|
| `/spec` | Write or improve a feature specification |
| `/prd` | Generate a full Product Requirements Document |
| `/roadmap` | Plan, structure, or communicate a roadmap |
| `/research` | Synthesise user research into insights and recommendations |
| `/stories` | Generate user stories from a feature concept or spec |
| `/brief` | Create a product brief or discovery brief |
| `/update` | Draft stakeholder updates (exec, engineering, customer) |
| `/retro` | Structure a product retrospective or post-mortem |
| `/prioritise` | Apply a prioritisation framework to a backlog |
| `/interview` | Generate user interview guides and synthesis frameworks |

### The `product.local.md` Configuration File

Every output from the plugin is calibrated by the organisation's product configuration. This file encodes:

- Product vision and mission statement
- Target personas (primary and secondary users)
- Engineering team structure and sprint cadence
- Stakeholder map (who needs what information in what format)
- Terminology glossary (what you call things in your product)
- Quality bar and definition of done
- Current roadmap themes

Well-configured, this file transforms generic PM outputs into documents that sound like they were written by someone who has worked in your product team for two years.

---

## Part One: Feature Specifications — Writing Specs That Actually Get Built

### Why Specs Fail

The two most common failure modes in feature specifications:

**Failure Mode 1: The Vague Spec**
"Users should be able to manage their notification preferences." What does "manage" mean? Which notifications? What preferences are available? What is the default state? What happens to existing users when this launches? The engineer makes a dozen decisions that should have been the PM's decisions, or stops and asks questions, losing a sprint's worth of momentum.

**Failure Mode 2: The Over-Specified Spec**
Fifty pages that nobody reads. Every edge case documented to death. The engineer spends more time cross-referencing the spec than building the feature. Half the edge cases documented were thought up by the PM in isolation and bear no resemblance to what users actually encounter.

The craft of spec writing is in the middle: complete on what matters, silent on what doesn't, and clear about which is which.

### The Anatomy of a Good Feature Spec

A complete feature spec contains exactly five things:

1. **The Problem** — What user pain is this solving? Whose pain? Evidenced by what? One paragraph.
2. **The Solution** — What are we building? What are the key user flows? What does it do and what does it not do (the scope boundary)?
3. **Acceptance Criteria** — How will engineering know when it is done? What must be true for this to ship?
4. **Edge Cases and Error States** — What happens when things go wrong? What are the non-happy-path behaviors?
5. **Open Questions** — What is not decided yet? Who owns each open question and by when?

### The `/spec` Workflow

```
/spec
> Agent: Please describe the feature you need a spec for.
>        Provide as much or as little context as you have —
>        I'll ask questions for anything missing.

> User: We need a bulk export feature for our analytics dashboard.
        Users have been requesting the ability to export multiple
        charts at once to PDF for their board reports. Currently
        they can only export one chart at a time. We've had 47
        support requests about this in the last quarter. Target
        users are our enterprise admin personas. The engineering
        estimate is 2-3 sprints for one developer.
```

**Sample Feature Spec Output:**

```
FEATURE SPEC: Bulk Chart Export
════════════════════════════════════════════════════════════
Status:      DRAFT v1.0
Author:      [PM name]
Eng lead:    [To be assigned]
Sprint:      [Target sprint]
Effort:      2–3 sprints (1 developer)

── THE PROBLEM ──────────────────────────────────────────────
Enterprise admins regularly compile analytics data into board-level
reports. Today, exporting multiple charts requires one export action
per chart — a friction-heavy, time-consuming process. This has
generated 47 support requests in Q1 2026, making it the second
most-requested missing feature among enterprise admin personas.
The workaround (screenshot + paste) produces inconsistent visual
quality and is frequently cited in NPS verbatim feedback.

User evidence:
  - 47 support tickets (Q1 2026) referencing chart export friction
  - NPS open-text: "Export is painful for monthly board decks"
  - Customer interview (March 2026, ACME Corp): "I spend 40 minutes
    manually exporting before every board meeting"

── THE SOLUTION ─────────────────────────────────────────────
Allow users to select multiple charts from the analytics dashboard
and export them as a single, formatted PDF.

KEY USER FLOWS:

Flow 1 — Bulk selection and export:
  1. User enters "export mode" via new "Export" button in dashboard header
  2. Chart tiles display selection checkboxes in export mode
  3. User selects 1–N charts (no hard maximum; guidance below)
  4. User clicks "Export selected ([N] charts)"
  5. Export options dialog: choose page layout (1 per page / 2 per page);
     choose page size (A4 / Letter); add optional title page
  6. PDF generated; auto-download begins; success toast shown
  7. Export mode exits automatically after successful export

Flow 2 — Save as export preset (nice-to-have; defer to v2):
  Allow users to save a named selection of charts as a preset
  for recurring reports. Excluded from v1 scope.

SCOPE BOUNDARY (explicit):
  IN SCOPE:     PDF export of standard chart types (bar, line, pie,
                scatter, table widget)
  OUT OF SCOPE: PNG/SVG/CSV export (separate feature request backlog)
  OUT OF SCOPE: Scheduled or automated exports (future feature)
  OUT OF SCOPE: Sharing exports directly to Slack/email from product
  OUT OF SCOPE: Export preset saving (deferred to v2)

── ACCEPTANCE CRITERIA ──────────────────────────────────────
The feature is complete when:

  AC1: User can enter export mode from any dashboard view
  AC2: All chart types in scope display selection checkboxes in export mode
  AC3: User can select any combination of charts across the visible dashboard
  AC4: Export dialog presents layout and page size options
  AC5: Generated PDF renders each chart at full resolution (no pixelation)
  AC6: PDF includes chart titles and axis labels (as displayed on screen)
  AC7: Export completes within 10 seconds for selections of up to 10 charts
  AC8: Export completes within 30 seconds for selections of 11–50 charts
  AC9: User receives a clear error message if export fails
  AC10: Export mode does not affect live dashboard data or user session
  AC11: Feature is accessible (keyboard navigable; screen reader compatible)

── EDGE CASES AND ERROR STATES ─────────────────────────────
| Scenario | Expected Behavior |
|---|---|
| User selects 0 charts and clicks export | Export button disabled; tooltip: "Select at least one chart" |
| Export selection > 50 charts | Warning dialog: "Large exports may take longer. Continue?" |
| Chart data changes during export generation | Export uses data snapshot at time of export initiation |
| User navigates away during export | Export continues in background; toast notification on completion |
| PDF generation fails (server error) | Error toast: "Export failed. Please try again or contact support." |
| Chart has no data (empty state) | Chart included in PDF with empty state message as displayed |
| Dashboard in filtered state | Export reflects current filter state; filter parameters noted in PDF |

── OPEN QUESTIONS ───────────────────────────────────────────
| # | Question | Owner | Due |
|---|---|---|---|
| 1 | What is the max PDF file size we should allow? Unlimited may create very large files for 50-chart exports | [Eng lead] | [Sprint start] |
| 2 | Should the optional title page auto-populate the dashboard name? | [PM] | [Before design review] |
| 3 | Should export mode be available on mobile/tablet viewports? | [PM + Design] | [Before design review] |
| 4 | Do we need audit logging for exports (enterprise compliance)? | [PM + Customer Success] | [Sprint start] |

── DESIGN NOTES ─────────────────────────────────────────────
No designs created yet. Design review requested for Sprint [N-1].
Reference: [Link to any existing export UI patterns in design system]
════════════════════════════════════════════════════════════
```

### Iterating the Spec with the Agent

The spec above is a first draft from a minimal brief. The agent then supports iterative refinement:

```
> User: The engineering lead raised a concern: they want to know
        if we need to support charts inside nested dashboard groups.
        Also, our design system already has a multi-select pattern —
        can you add a design system reference note?

> Agent: [Updates spec — adds nested groups scenario to edge cases;
          adds design system reference; flags it as a resolved
          open question or updates AC as needed]
```

This is the workflow that saves hours: the PM thinks, the agent writes, the PM reviews and directs refinement, the agent updates. The document stays current. The PM never loses thinking in a first-draft rewrite.

### Configuring Spec Standards in SKILL.md

```markdown
## Feature Spec Standards

### Mandatory Sections (all specs must include)
1. The Problem (with user evidence — minimum 1 data point)
2. The Solution (key user flows; explicit scope boundary)
3. Acceptance Criteria (numbered; testable; unambiguous)
4. Edge Cases and Error States (table format)
5. Open Questions (with owner and due date)

### Acceptance Criteria Rules
- Each AC must be independently testable
- No AC may contain "and" — split compound ACs into separate items
- ACs must specify the system behavior, not the implementation
- Performance ACs must include measurable thresholds (not "fast")

### Spec Status Tags
DRAFT:    Working document; not ready for engineering estimation
REVIEW:   Ready for engineering and design review
REFINED:  Estimation complete; ready for sprint planning
SHIPPED:  Feature live in production

### Terminology Glossary (load from product.local.md)
Always use product-specific terminology consistently across all specs.
[Configured in product.local.md — see template]
```

---

## Part Two: Product Requirements Documents — The Full Source of Truth

### PRD vs. Spec: What Is the Difference?

A **feature spec** is tactical: it describes one feature in enough detail to build it. It is written for the engineering team building that feature.

A **PRD (Product Requirements Document)** is strategic: it describes a complete product area, release, or initiative — the business context, the full user journey, all features in scope, the technical requirements, the go-to-market implications, the success metrics, and the dependencies. It is written for alignment across the entire team and leadership.

For a two-sprint feature, a spec is sufficient. For a major platform change, a new product line launch, or an enterprise tier introduction, a PRD is required.

### The `/prd` Workflow

```
/prd
> Agent: What product initiative needs a PRD?

> User: We're building an enterprise SSO feature for our B2B SaaS product.
        This is a major unlocker for enterprise sales — we've lost 4 deals
        this quarter citing SSO as a blocker. Scope: SAML 2.0 and OIDC
        support; admin provisioning console; role mapping from IdP groups
        to product roles. Target: Q3 release. Engineering: ~8 sprints
        across 2 developers + platform team involvement.
```

The `/prd` command produces a comprehensive document covering:

```
PRODUCT REQUIREMENTS DOCUMENT: Enterprise SSO
════════════════════════════════════════════════════════════
Version: 1.0 DRAFT | Date: [Date] | PM: [Name]

EXECUTIVE SUMMARY
[3–4 sentences: what we're building, why it matters commercially,
 what the expected business outcome is, and when it ships]

BUSINESS CONTEXT
Problem statement:      [Commercial impact of current gap]
Evidence:               [Lost deals, customer requests, competitive data]
Strategic fit:          [How this connects to company/product strategy]
Success metrics:        [How we'll know this worked — 6–12 months post-launch]
  Primary:              [e.g. "4+ enterprise deals citing SSO unblocked in H2"]
  Secondary:            [e.g. "Enterprise NPS +15 points"; "SSO adoption >70%
                          of enterprise accounts within 90 days of launch"]

USER REQUIREMENTS
Primary persona:        [Enterprise IT Admin — needs, goals, current workaround]
Secondary persona:      [End user provisioned via SSO — what changes for them]
User stories:           [Key user stories in "As a... I want... so that..." format]
User journey maps:      [Current state → Future state for each primary persona]

FUNCTIONAL REQUIREMENTS
[Feature-by-feature breakdown with scope, priority (must/should/could),
 and dependencies]

NON-FUNCTIONAL REQUIREMENTS
Performance:            [Latency targets; uptime SLA]
Security:               [Auth standards; data handling; audit requirements]
Compliance:             [SOC 2; GDPR implications; enterprise security review]
Accessibility:          [WCAG standards; keyboard navigation requirements]
Internationalisation:   [i18n requirements; character set handling]

TECHNICAL ARCHITECTURE NOTES
[High-level technical approach; platform team dependencies;
 third-party integrations; data model changes]

GO-TO-MARKET REQUIREMENTS
Documentation:          [Customer-facing docs required before launch]
Training:               [CS team; sales team enablement]
Pricing:                [Is SSO included in current enterprise tier?]
Announcement:           [Customer comms; press if applicable]
Beta programme:         [Which customers invited to beta; timeline]

LAUNCH PLAN
Phased rollout:         [Beta → GA; rollback plan]
Feature flags:          [Required; scope; sunset plan]
Customer migration:     [For customers migrating from workaround solutions]

DEPENDENCIES AND RISKS
[External dependencies; internal dependencies; top 3 risks with mitigations]

OPEN QUESTIONS
[Same format as spec — numbered; owner; due date]

APPENDICES
A. Competitive analysis: [SSO implementation at key competitors]
B. Customer interview excerpts: [Quotes supporting the requirements]
C. Technical discovery notes: [From engineering kickoff]
════════════════════════════════════════════════════════════
```

---

## Part Three: Roadmap Planning and Communication

### The Two Roadmap Problems

**Problem 1: The Roadmap as Commitment List**
Many roadmaps are just a list of features with delivery dates. This creates two problems: it communicates nothing about strategy (why are we building these things?), and it creates false precision (delivery dates for software are almost always wrong, and a roadmap that shows exact dates trains stakeholders to treat it as a contract).

**Problem 2: The Roadmap as Vision Board**
The opposite failure: a roadmap so high-level ("Q3: Improve collaboration features") that it communicates nothing useful to engineers, gives customers nothing to get excited about, and gives leadership nothing to plan around.

The discipline is in the middle: strategic clarity without false precision.

### The Now-Next-Later Framework

The most robust roadmap format for most product teams:

- **Now** — What we are building in this sprint or quarter. Specific, with detailed specs. These are commitments.
- **Next** — What we are planning to build in the following quarter. Directional, with problem statements. These are intentions.
- **Later** — Themes and opportunities we are exploring beyond that. Strategic, with user problems not solutions. These are signals, not promises.

### The `/roadmap` Workflow

```
/roadmap
> Agent: What aspect of roadmap planning or communication do you need?

> User: I need to communicate our Q3 roadmap to three different audiences:
        the engineering team (planning), the exec team (quarterly business review),
        and our enterprise customers (external communication).
        Our Q3 themes are: (1) enterprise security features — SSO + audit logs,
        (2) reporting improvements — bulk export + scheduled reports,
        (3) platform stability — technical debt sprint + performance improvements.
        We're a B2B SaaS company serving 300 enterprise accounts.
```

**Sample Roadmap Communication Output (three versions):**

**Version 1: Engineering Team (Planning)**

```
Q3 2026 ROADMAP — ENGINEERING PLANNING VIEW
════════════════════════════════════════════════════════════
Theme 1: Enterprise Security (6 sprints, 2 developers)
  ▶ SSO — SAML 2.0 + OIDC          [Sprints 1–4]  Status: PRD complete
  ▶ Audit logging — admin actions   [Sprints 3–5]  Status: Spec in progress
  ▶ Role permission granularity     [Sprint 6]     Status: Discovery phase
  Dependencies: Platform team (auth service); Security review (Sprint 3)

Theme 2: Reporting Improvements (4 sprints, 1 developer)
  ▶ Bulk chart export — PDF         [Sprints 1–2]  Status: Spec complete ✅
  ▶ Scheduled report delivery       [Sprints 3–4]  Status: Discovery phase
  Dependencies: Data pipeline team (export service); Design (Sprint 1)

Theme 3: Platform Stability (2 sprints, shared team)
  ▶ Technical debt sprint           [Sprint 5]     Status: Tech lead scoping
  ▶ Dashboard load time optimisation[Sprint 6]     Status: Performance audit
  Dependencies: None (internal)

PLANNING NOTES:
  → SSO is Q3 priority 1 — 4 deals blocked. Do not defer.
  → Scheduled reports is a stretch goal — cut if SSO runs over.
  → Performance sprint is non-negotiable — agreed with CTO at Q2 retro.
  Capacity assumption: 3 developers full-time; 1 on-call rotation shared.
════════════════════════════════════════════════════════════
```

**Version 2: Executive Team (QBR)**

```
Q3 2026 ROADMAP — EXECUTIVE SUMMARY
════════════════════════════════════════════════════════════
OUR Q3 BET: "Make the product enterprise-ready at scale"

We are concentrating Q3 on the features that unlock our next tier of
enterprise growth. The commercial case is clear: SSO alone unblocks
4 deals currently stalled in Q2 pipeline worth $340K ARR combined.

WHAT WE'RE BUILDING AND WHY:

Enterprise Security (priority 1)
  → SSO + audit logging: eliminates the most common enterprise
    sales blocker; enables IT admin self-service for large accounts
  → Expected business outcome: $340K+ ARR unblocked; enterprise
    win rate improvement H2

Reporting Improvements (priority 2)
  → Bulk export + scheduled reports: addresses top customer request
    (47 support tickets Q1); directly tied to NPS improvement target
  → Expected business outcome: enterprise NPS +10 points;
    reduction in premium support load

Platform Stability (priority 3)
  → Technical debt + performance: reduces engineering operational
    cost; improves reliability metrics for enterprise SLAs
  → Expected business outcome: p95 load time <2 seconds;
    incident rate reduction

WHAT WE ARE NOT BUILDING IN Q3:
  Mobile app redesign (H1 2027), AI-powered insights (Q4 2026),
  API v3 (Q4 2026). [Deferral rationale in appendix]

SUCCESS METRICS WE'LL REVIEW AT Q4 QBR:
  → 4+ enterprise deals citing SSO unblocked and closed
  → Enterprise NPS: 42 → 52
  → Dashboard p95 load: 4.2s → <2s
════════════════════════════════════════════════════════════
```

**Version 3: Enterprise Customers (External)**

```
PRODUCT UPDATE: What's Coming in Q3 2026
════════════════════════════════════════════════════════════
We've been listening. The most consistent feedback from enterprise
teams in 2026 has been about security, reporting efficiency, and
performance. Q3 is our answer.

ENTERPRISE SECURITY
Single Sign-On (SSO) arrives in Q3. Your IT team will be able to
connect [Product] to your existing identity provider via SAML 2.0
or OIDC — meaning your users get in with the credentials they already
have, and your IT team gets the centralised control they need.

Alongside SSO, we're introducing admin audit logging — a full
activity record for all administrative actions in your account.

If you're currently evaluating [Product] and SSO is a requirement:
contact your account manager. We have a limited beta programme
opening in [Month].

SMARTER REPORTING
The most requested reporting feature — bulk chart export to PDF — is
coming in Q3. Select the charts you need, export once, and get a
formatted PDF ready for your board deck.

Scheduled report delivery follows: set your reports to arrive in
your inbox before your Monday morning meeting, automatically.

FASTER PERFORMANCE
We know some enterprise accounts with large dashboards have seen
slower load times. A dedicated performance sprint in Q3 will
significantly improve this.

We'll share specific timing and beta access details in our monthly
product newsletter. [Link to newsletter signup]
════════════════════════════════════════════════════════════
```

The same roadmap, three versions, each calibrated for its audience — without rewriting from scratch.

---

## Part Four: User Research Synthesis

### The Research Synthesis Problem

User research is expensive to collect and consistently under-used. The gap between "we conducted 12 interviews" and "we have clear product direction from those interviews" requires hours of synthesis work: reviewing notes, identifying themes, connecting themes to product decisions, separating signal from noise, and communicating findings in a way that actually influences prioritisation.

Most PMs either skip this work (research never gets synthesised, so it never influences decisions) or do it in a way that is disconnected from product planning (a research report that gets filed and forgotten).

The `/research` command turns raw research material — interview notes, survey data, support ticket themes, session recordings — into structured insight that directly connects to product decisions.

### The `/research` Workflow

```
/research
> Agent: What research material would you like to synthesise?

> User: I have notes from 8 customer interviews conducted this week.
        The goal was to understand how enterprise admins currently
        handle user access management and what their biggest pain points
        are. Here are the notes:

[Paste or upload interview notes]
```

**Sample Research Synthesis Output:**

```
RESEARCH SYNTHESIS: Enterprise Access Management Discovery
════════════════════════════════════════════════════════════
Method:       Customer interviews (n=8)
Conducted:    [Date range]
Goal:         Understand enterprise admin access management workflows
              and pain points

── TOP INSIGHTS ─────────────────────────────────────────────

INSIGHT 1: Manual provisioning is the primary time cost, not access policy
  Evidence (6/8 interviews):
  - "I spend 20 minutes every time someone new joins onboarding them
    into our tools. It's not complex — it's just time." (Participant 4)
  - "New starter access setup is my personal backlog. I always have
    3 or 4 people waiting." (Participant 7)
  Product implication: Auto-provisioning from HR system / IdP group
  membership would address the most acute pain. SSO alone (without
  SCIM provisioning) only partially solves this.
  Priority signal: 🔴 HIGH — 6/8 participants; acute time cost

INSIGHT 2: Role mismatch between IdP groups and product roles creates confusion
  Evidence (5/8 interviews):
  - Participants use between 3–12 IdP groups; product has 4 fixed roles
  - "I have to maintain a translation table. It's always out of date."
  - "Engineering has 6 sub-groups but they all get 'editor' in [product]"
  Product implication: Custom role mapping from IdP groups to product
  roles (beyond 1-to-1 mapping) is a significant differentiator vs.
  current market standard.
  Priority signal: 🟡 MEDIUM-HIGH — 5/8 participants; workarounds exist

INSIGHT 3: Audit logging is a procurement requirement, not a daily-use feature
  Evidence (4/8 interviews):
  - No participant currently reviews audit logs regularly
  - All 4 confirmed audit log availability was a checkbox on their
    vendor security questionnaire
  - "I'll never look at it. But if I can't show it to our InfoSec team,
    we can't buy it."
  Product implication: Audit log must exist and must be exportable for
  InfoSec review. UX quality of the audit log UI is LOW priority relative
  to its existence and export capability.
  Priority signal: 🟡 MEDIUM — procurement requirement; not a use feature

INSIGHT 4 (UNEXPECTED): Several admins manage multiple [Product] instances
  Evidence (3/8 interviews):
  - 3 participants manage 2–4 separate [Product] workspaces
  - Current experience: log in and out; no unified admin view
  - "I'm managing four teams. Four logins. Four separate setups."
  Product implication: Multi-workspace admin view is an unaddressed pain
  not currently on our roadmap. Small but potentially high-value feature
  for enterprise IT admins managing multiple business units.
  Priority signal: 🟢 OPPORTUNITY — not critical to Q3 but warrants
  a discovery ticket for Q4 consideration

── WHAT WE HEARD BUT SHOULD NOT BUILD (NOW) ────────────────
- Automated deprovisioning: mentioned by 2 participants; high complexity;
  risk of accidental access removal; defer to v2 with safeguards
- Custom permission levels per feature: 1 participant; very niche;
  do not build

── RECOMMENDED PRODUCT ACTIONS ─────────────────────────────
Priority 1: Confirm SSO + SCIM provisioning (not SSO alone) for Q3
Priority 2: Add custom IdP-to-product role mapping to SSO spec
Priority 3: Scope audit log as export-first (CSV/JSON); de-prioritise
            rich UI for the UI itself
Priority 4: Create discovery ticket — multi-workspace admin panel (Q4)

── METHODOLOGY NOTES ────────────────────────────────────────
8 interviews; 45–60 minutes each; mix of enterprise accounts
(>500 employees: 5; 100–500: 3). All participants are primary IT admins.
Limitation: Sample skews toward customers who agreed to interview — may
not represent non-engaged enterprise accounts.
Raw notes available at: [Link]
════════════════════════════════════════════════════════════
```

### Interview Guide Generation

Before conducting research, the `/interview` command generates structured guides:

```
/interview
> User: Create an interview guide for discovery around how enterprise
        customers currently manage user offboarding. We want to understand
        the current process, pain points, and what "good" looks like.
        Interview length: 45 minutes. Audience: IT admins at companies
        with 100–1,000 employees.
```

Output: a complete 45-minute interview guide with opening, warm-up questions, main discovery questions (with follow-up probes), and wrap-up — calibrated to avoid leading questions and to surface genuine behavior rather than self-reported preferences.

---

## Part Five: User Stories — From Concept to Sprint-Ready

### User Stories and the Spec Relationship

User stories sit between the feature concept and the full spec. They are the PM's tool for communicating user intent to the team before the technical solution is decided. Well-written user stories:

- State the **who** (specific persona, not "user")
- State the **what** (the capability, not the UI solution)
- State the **why** (the outcome, not the feature)
- Include **acceptance criteria** that engineering can test

### The `/stories` Workflow

```
/stories
> Agent: What feature or area do you need user stories for?

> User: The SSO feature. We need stories for the admin setup flow
        and the end-user login flow. The admin configures SSO;
        end users then log in using it. SAML 2.0 and OIDC both
        need to be covered.
```

**Sample User Stories Output:**

```
USER STORIES: Enterprise SSO
════════════════════════════════════════════════════════════

EPIC: Enterprise SSO Configuration and Authentication

── ADMIN CONFIGURATION STORIES ─────────────────────────────

Story 1: SAML 2.0 Provider Setup
  As an Enterprise IT Admin,
  I want to configure SAML 2.0 SSO by entering our IdP's metadata URL,
  So that I can enable single sign-on for my organisation without
  manually configuring individual SAML attributes.

  Acceptance Criteria:
  - Admin can enter an IdP metadata URL and auto-populate SAML configuration
  - Admin can alternatively upload an IdP metadata XML file
  - System validates the configuration and displays a test result
    before activation
  - Configuration is saved as draft until explicitly activated
  - Admin receives confirmation email when SSO is activated

Story 2: OIDC Provider Setup
  As an Enterprise IT Admin,
  I want to configure OIDC SSO by entering our IdP's client credentials,
  So that I can enable single sign-on using modern identity providers
  (Okta, Azure AD, Google Workspace) without SAML complexity.

  Acceptance Criteria:
  - Admin can enter Client ID, Client Secret, and Discovery URL
  - System validates credentials with a live test before activation
  - Admin can set whether OIDC login replaces or supplements
    password-based login

Story 3: Role Mapping from IdP Groups
  As an Enterprise IT Admin,
  I want to map my IdP user groups to product roles,
  So that users are automatically assigned the correct permissions
  when they log in via SSO without manual role assignment.

  Acceptance Criteria:
  - Admin can create a mapping from any IdP group attribute
    to any product role
  - Multiple IdP groups can map to a single product role
  - Admin can preview the expected role assignment before activation
  - Role mapping applies at every login (not just first login)
  - Users without a matching group mapping receive a configurable
    default role (not an error)

── END-USER LOGIN STORIES ───────────────────────────────────

Story 4: SSO Login Flow — New User
  As an employee at a company with SSO enabled,
  I want to be prompted to log in via my company's identity provider,
  So that I can access [Product] without creating a separate password.

  Acceptance Criteria:
  - Login page detects company domain and shows SSO login option
  - User is redirected to IdP, authenticates, and returned to product
  - First SSO login creates a user account automatically (JIT provisioning)
  - User is notified their account has been created via SSO

Story 5: SSO Login Flow — Existing User
  As an existing user whose company has just enabled SSO,
  I want my existing account to be linked to SSO automatically,
  So that I do not lose my history and settings when SSO is enabled.

  Acceptance Criteria:
  - Account matching is by verified email address
  - User is presented with a one-time account linking confirmation
    on first SSO login after enablement
  - All existing data, settings, and permissions are preserved

── ADMIN MANAGEMENT STORIES ─────────────────────────────────

Story 6: SSO Testing Before Activation
  As an Enterprise IT Admin,
  I want to test the SSO configuration with a test user before
  activating it for my whole organisation,
  So that I can verify it works correctly without disrupting
  current users.

  Acceptance Criteria:
  - Admin can designate up to 5 test user emails for pilot testing
  - Test users can log in via SSO while all other users use
    existing authentication
  - Admin sees a real-time success/failure log during test phase

Story 7: SSO Deactivation / Fallback
  As an Enterprise IT Admin,
  I want to be able to disable SSO and return to password authentication,
  So that my team can still access the product if our IdP experiences
  an outage.

  Acceptance Criteria:
  - Admin can disable SSO from the admin console at any time
  - Password-based login is re-enabled immediately on disablement
  - All users receive an email notification of the change
  - Admin can configure an emergency bypass code for themselves
════════════════════════════════════════════════════════════
```

---

## Part Six: Stakeholder Updates — One Reality, Many Languages

### The Stakeholder Translation Problem

Every product decision needs to be communicated to multiple audiences simultaneously. Each audience has different context, different priorities, and different risk tolerances. The CEO wants to know if we're on track to hit the revenue milestone. The engineering lead wants to know if the spec changes they were told about last week are final. The enterprise customer wants to know if the SSO feature they were promised for Q3 is still on schedule.

The PM is the translator. The same underlying reality — "SSO is tracking to schedule; one dependency on the platform team is a risk item; confidence is high" — becomes three different messages for three different audiences.

### The `/update` Workflow

```
/update
> Agent: Who is this update for, and what is the underlying situation?

> User: Three versions needed:
        1. Executive team — CEO and CPO — for the weekly product review
        2. Engineering team — sprint planning context
        3. Customer email — to our top 10 enterprise accounts who are
           waiting on SSO
        Situation: SSO development is on track. Sprint 2 of 4 completed.
        The platform team dependency (auth service migration) is complete —
        that was the main risk and it's resolved. New risk: one of the
        two engineers assigned to SSO is on medical leave starting next week.
        We're backfilling with a contractor but there may be a 1-week delay.
        Best estimate: on time or 1 week late. We'll know by end of Sprint 3.
```

**Version 1: Executive Update:**

```
SSO STATUS UPDATE — Week of [Date]

Status:    🟡 ON TRACK WITH WATCH ITEM

Progress:  Sprint 2 of 4 complete. Core SAML implementation and admin
           console are done. Remaining work: OIDC support, role mapping,
           and end-to-end testing.

Good news: The platform team dependency (auth service migration) resolved
           ahead of schedule. That was our main risk — it's gone.

Watch item: [Engineer name] on medical leave from [date]. We've engaged
           a contractor who starts [date]. There's a possible 1-week
           slippage. We'll have a firm answer by end of Sprint 3 ([date]).

Recommendation: No action needed this week. Flag for the board deck
           if slippage materialises — the 4 pipeline deals depend on
           Q3 delivery. Will update at next week's review.
```

**Version 2: Engineering Team Update:**

```
SSO SPRINT 3 CONTEXT — [Date]

Quick update before sprint planning:

1. Platform team auth migration is done ✅ — unblocks everything in
   Tickets SSO-47 through SSO-52. You can proceed without the async
   coordination overhead from Sprint 2.

2. [Engineer name] on medical leave from [date]. [Contractor name]
   joins [date] — they've been briefed and have repo access. The
   overlap is intentional.

Sprint 3 priority order (unchanged):
   1. OIDC provider support (SSO-53 through SSO-58)
   2. Role mapping from IdP groups (SSO-59 through SSO-61)
   3. Testing framework — do not defer to Sprint 4

If Sprint 3 shows a capacity gap with the contractor ramp-up,
flag to me by [midpoint date] and we'll discuss scope options.
The OIDC support is the hard priority; role mapping can slip to
Sprint 4 if needed.
```

**Version 3: Customer Email:**

```
Subject: SSO Update — [Product Name] Q3 Delivery

Hi [Name],

Quick update on SSO, which I know is a priority for your team.

Development is progressing well. We're two sprints into a four-sprint
build and tracking to our Q3 commitment. I'll share beta access details
in the next few weeks as we approach the testing phase.

If you have specific IdP requirements (Okta, Azure AD, Google Workspace,
or others) you'd like us to validate during beta testing, let me know —
we're building our beta participant list now and I'd like to include
your team if you're interested.

I'll be in touch with a beta invitation or a timeline update by [date].

[Name]
[Title]
```

---

## Part Seven: Backlog Prioritisation — Frameworks That Scale

### Why Prioritisation Is Hard

Every PM has a backlog longer than their capacity to execute. Prioritisation is the decision of what to build now, what to build later, and — crucially — what to never build. The last category is the hardest and the most important.

The problem with most prioritisation frameworks (RICE, ICE, MoSCoW, Kano) is not that they are wrong. It is that they require accurate data that often does not exist, and they can be gamed by whoever is most enthusiastic about a particular feature.

The `/prioritise` command supports honest prioritisation: it applies frameworks with explicit assumptions, surfaces the data gaps, and makes the value judgments visible rather than hiding them in a score.

### The `/prioritise` Workflow

```
/prioritise
> Agent: What backlog or set of items do you need to prioritise?
>        What framework would you like to use, or should I recommend one?

> User: I have 8 backlog items competing for Q4. Apply RICE scoring.
        Context: we're a Series B B2B SaaS, ~300 enterprise customers,
        10-person engineering team.

        Items:
        1. AI-powered insights in dashboard (customer request: moderate;
           effort: very high; confidence in impact: low — new capability)
        2. API v3 — breaking change needed for platform scalability
           (customer request: high from developer customers; effort: high;
           confidence: high)
        3. Mobile app — significant customer requests from field sales users
           (customer request: high; effort: very high; confidence: moderate)
        4. Scheduled reports (effort: medium; confidence: high — completing
           Q3 reporting theme)
        5. Audit log export improvements (customer request: low; effort: low;
           confidence: high — completes enterprise security theme)
        6. Data connector for Salesforce CRM (customer request: high;
           effort: medium; confidence: high)
        7. Custom dashboard layout (customer request: moderate; effort: medium;
           confidence: moderate)
        8. Sub-account / multi-workspace admin (discovery interviews identified
           this; not yet quantified; effort: medium-high; confidence: low)
```

**Sample Prioritisation Output:**

```
RICE PRIORITISATION — Q4 BACKLOG
════════════════════════════════════════════════════════════
RICE Score = (Reach × Impact × Confidence) ÷ Effort
Scores are relative — use for ranking, not absolute value.

Assumptions and scoring notes at bottom of table.

| # | Item | Reach | Impact | Confidence | Effort | RICE | Rank |
|---|---|---|---|---|---|---|---|
| 4 | Scheduled reports | 60% | 2 | 90% | 2 | 54 | 🥇 1 |
| 5 | Audit log export | 40% | 2 | 90% | 1 | 72 | 🥇 1* |
| 6 | Salesforce connector | 50% | 3 | 80% | 3 | 40 | 🥈 2 |
| 2 | API v3 | 30% | 3 | 85% | 5 | 15 | 🥉 3 |
| 7 | Custom dashboard layout | 45% | 1 | 60% | 2 | 13 | 4 |
| 1 | AI-powered insights | 50% | 3 | 25% | 8 | 5 | 5 |
| 8 | Multi-workspace admin | 20% | 3 | 30% | 4 | 5 | 5= |
| 3 | Mobile app | 35% | 3 | 50% | 10 | 5 | 5= |

*Audit log export ranks #1 on RICE due to very low effort; consider
 bundling with Scheduled reports as a single Q4 enterprise theme.

SCORING NOTES (assumptions made explicit):
  Reach: % of active accounts likely to use within 90 days
  Impact: 1=minor; 2=moderate; 3=significant improvement
  Confidence: PM confidence in impact estimate
  Effort: person-sprints (1=~1 sprint; 5=~5 sprints; 8=~8+ sprints)

RICE RECOMMENDATION: Build in this order:
  Q4 Priority 1: Scheduled reports + Audit log export
    → Completes the Q3 enterprise theme; high confidence; manageable effort
    → Sequels to features already launched; fast adoption expected

  Q4 Priority 2: Salesforce connector
    → High customer demand; moderate confidence; fits capacity after P1

  Q4 Stretch: API v3 (if capacity remains after P1+P2)
    → Important for platform health but high effort; start design in Q4
      even if build extends to Q1 2027

FRAMEWORK LIMITATIONS (be honest about these):
  AI-powered insights: RICE scores it low due to low confidence and
    high effort — but strategic potential is not captured in the score.
    Recommend a 2-sprint discovery spike before Q4 to improve confidence.

  Mobile app: RICE says 5. The business case may be different if mobile
    is key to a major enterprise deal. One named deal check: does any
    deal currently in pipeline have mobile as a requirement?

  Multi-workspace admin: Score is low partly because we don't have data.
    The discovery interviews flagged this as high-value for a specific
    segment. Recommend a 2-week research sprint before scoring.
════════════════════════════════════════════════════════════
```

---

## Part Eight: Product Retrospectives and Post-Mortems

### Why Retros Are Usually Useless

The typical product retrospective produces three columns on a whiteboard (what went well / what didn't / what to improve), a list of action items that nobody owns, and no connection to future product decisions. It feels productive. It rarely changes anything.

A useful product retro answers different questions:

1. Did the feature solve the problem we intended to solve? (Were we right about the user need?)
2. Did we build it the way we intended? (Were the specs and stories accurate enough?)
3. Did we measure the right outcomes? (Are the metrics we defined actually moving?)
4. What would we do differently if we were starting again today?

The `/retro` command structures retrospectives that connect to future decisions.

### The `/retro` Workflow

```
/retro
> Agent: What feature or initiative are we retrospecting on?

> User: The bulk chart export feature we shipped 6 weeks ago.
        Data: 2,100 exports in first 6 weeks. 34% of enterprise accounts
        have used it at least once. NPS question on export: average 7.2/10.
        Support tickets about export: 12 (mostly about PDF formatting).
        Original goal: address 47 support requests about export friction;
        improve enterprise NPS. Engineering: delivered 1 week late vs. plan.
```

**Sample Retro Output:**

```
PRODUCT RETROSPECTIVE: Bulk Chart Export
Shipped: [Date] | Retro date: [+6 weeks]
════════════════════════════════════════════════════════════

DID IT SOLVE THE PROBLEM?

Original problem: Export friction causing support load and NPS drag
Target outcome:   Reduce export-related support; improve enterprise NPS

Evidence:
  ✅ 34% enterprise account adoption in 6 weeks — strong early adoption
  ✅ 2,100 exports — active use, not just discovery
  ⚠️ NPS on export: 7.2/10 — users like it but it's not excellent
  ⚠️ 12 new support tickets about PDF formatting — new problem introduced
  ✅ Export-related support tickets (old kind): 47 in Q1 → 8 in 6 weeks

VERDICT: Solved the core problem well. Introduced a partial new problem
(PDF formatting). Net positive — but not finished.

DID WE BUILD IT AS INTENDED?

Process reflection:
  ✅ Spec was accurate — engineering reported low ambiguity in sprint 1
  ⚠️ 1-week delivery delay — auth dependency underestimated in planning
  ✅ Edge cases were well-specified — no edge case bugs in first 6 weeks
  ❌ Accessibility (AC11) not completed to standard — keyboard navigation
     deferred; must ship in next sprint

WERE THE METRICS RIGHT?

Original success metrics:
  Reduction in export support tickets: ✅ Measurable; measurably improved
  Enterprise NPS improvement:          ⚠️ Too early to see in aggregate NPS;
                                       export-specific NPS is better proxy
  Adoption rate:                       Not defined pre-launch; we were lucky
                                       to have a good number

RECOMMENDATIONS FOR NEXT FEATURE:
→ Define adoption rate target before launch (not after)
→ Set a specific NPS floor for any feature before shipping ("not shipping
  if export NPS < 7"; we got 7.2 — close call)

WHAT WOULD WE DO DIFFERENTLY?

  → Spec: include PDF formatting requirements more precisely —
    this was the gap that generated 12 new tickets
  → Planning: model auth service dependencies with platform team
    before sprint planning (avoid the 1-week slip)
  → Accessibility: treat AC11 as a hard launch gate, not a nice-to-have

FOLLOW-ON ACTIONS
  1. Fix accessibility gap (keyboard nav) — Sprint [N] — [Engineer]
  2. Investigate PDF formatting tickets — identify top 3 formatting issues
     — [PM] — [date]
  3. Consider v2: scheduled exports — now that bulk export has adoption,
     scheduled delivery is the logical next value add
════════════════════════════════════════════════════════════
```

---

## Part Nine: The Product Management Agents

### Three Core PM Agents

The most powerful application of AI in product management is not one-off commands but persistent agents that manage the ongoing intelligence and communication layer — keeping research current, keeping stakeholders informed, and surfacing the signals that indicate a product decision needs to be revisited.

---

#### Agent 1: The Research Intelligence Agent

**Purpose:** Continuously monitor user signals — support tickets, NPS verbatim, user interviews, feature request forums, app store reviews — and synthesise them into a weekly research digest. Surface emerging patterns before they become crises.

**Weekly workflow:**
1. Pull support ticket themes from last 7 days (MCP: Zendesk/Intercom)
2. Pull NPS verbatim responses from last 7 days (MCP: Delighted/Typeform)
3. Pull feature request votes/comments (MCP: Canny/ProductBoard)
4. Synthesise: what are the top 3 user pain signals this week?
5. Compare to prior week: are any signals trending up? (emerging problem)
6. Flag: any signal that has appeared 3+ weeks in a row (systemic issue)
7. Route: if a signal exceeds threshold → generate a formal insight for the team

**Alert trigger:**
Any single support theme that represents >15% of this week's ticket volume
AND has not been flagged previously → immediate research brief for PM team.

---

#### Agent 2: The Stakeholder Update Agent

**Purpose:** Ensure the right people always have the right version of product status information. No stakeholder should discover important product news through the grapevine.

**Weekly workflow:**
1. PM updates a shared status document (or the agent pulls from project tracking via MCP)
2. Agent generates three versions of the weekly product update:
   - Executive summary (CEO, CPO, board if relevant)
   - Team update (engineering, design, QA)
   - Customer-facing (for Customer Success to share with relevant accounts)
3. Each version is calibrated to its audience from the same status inputs
4. PM reviews and approves; agent distributes via MCP (email/Slack)

**Trigger-based:**
Any status change to a feature marked as customer-committed → immediate draft
of customer communication to CS team for review and distribution.

---

#### Agent 3: The Roadmap Coherence Agent

**Purpose:** Maintain coherence between the roadmap, the backlog, the current specs, and the stated product strategy. Surface when a backlog item was added that doesn't connect to a roadmap theme; flag when a roadmap commitment has no corresponding spec; alert when a sprint is filling with work that doesn't match quarterly priorities.

**Weekly check:**
- Any new backlog items added this week without a roadmap theme tag → flag to PM
- Any roadmap item due this quarter without a spec in REVIEW status → flag to PM
- Any sprint with >30% of points from non-roadmap items → alert to PM and EM

This agent prevents the most common cause of roadmap drift: ad hoc work accumulating in sprints without anyone noticing until the quarterly roadmap is 30% delivered.

---

## Exercises

Each exercise produces a deployable output. Complete them in sequence to build a production-quality PM workflow system.

---

### Exercise 1: Write Your First Complete Feature Spec

**Type:** Applied Practice
**Time:** 60 minutes
**Plugin commands:** `/spec`, `/stories`
**Goal:** Produce a spec that an engineer would rate 8/10 or higher on clarity

**Step 1 — Choose a feature.**

Select a real feature your product team is currently considering or has recently discussed. It should be small enough to be one-team, one-sprint work — not a major platform change. Good examples: a new filter option, an export improvement, a notification setting, a dashboard widget.

If you are doing this as a classroom exercise, use this scenario: "Users have been requesting the ability to pin their most-used reports to the top of the reports list. Currently reports are sorted by last modified date only."

**Step 2 — Write a raw brief.**

Before using the agent, spend 10 minutes writing your own unstructured brief: what is the problem, who has it, what are you thinking of building, what are you not building. Do not worry about format — this is your thinking, not a document.

**Step 3 — Generate the spec.**

```
/spec
> User: [Paste your raw brief]
```

Review the output against the five-section standard:
1. Does the Problem section have user evidence (at least one data point)?
2. Does the Solution section have an explicit scope boundary?
3. Are all Acceptance Criteria independently testable?
4. Does the edge cases table cover the 3 most likely failure scenarios?
5. Do all Open Questions have owners and due dates?

For any section scoring below standard: iterate with the agent.

**Step 4 — Generate user stories.**

```
/stories
> User: Generate user stories for this feature: [paste spec or describe feature]
        Target: 3-5 stories covering the primary user flows.
        Include acceptance criteria for each story.
```

Review: are the stories written from the user perspective (not the system perspective)? Does the "so that..." clause of each story connect to a user outcome?

**Step 5 — Engineer review simulation.**

Show the spec and stories to an engineer (or a colleague playing the role of an engineer). Ask them:
1. "Could you build this from these materials without asking me any questions?"
2. "What is the one thing that is most ambiguous?"
3. "Are there any edge cases you'd expect to handle that aren't addressed?"

Incorporate the feedback. The target: the engineer can estimate and start without a lengthy spec review meeting.

**Deliverable:** A complete feature spec (five sections, all populated) and 3–5 user stories with acceptance criteria, refined through at least one round of engineering feedback.

---

### Exercise 2: Write a PRD for a Major Initiative

**Type:** Strategic Documentation
**Time:** 90 minutes
**Plugin commands:** `/prd`, `/roadmap`
**Goal:** Produce a PRD comprehensive enough to align engineering, design, and leadership

**Step 1 — Choose your initiative.**

Select a significant product initiative: either one your organisation is currently planning, or use this scenario: "Your B2B SaaS product needs to launch an API — a public API that allows customers to integrate your product data with their own tools. This is a major request from technical customers and a competitive requirement. You've never offered a public API before."

**Step 2 — Discovery audit.**

Before writing the PRD, identify what you know and what you don't. For each PRD section:
- Business context: Do you have the commercial data (lost deals, customer requests)?
- User requirements: Have you talked to users who would use this?
- Functional requirements: Are the features in scope decided?
- Non-functional: Have you discussed performance/security requirements with engineering?
- Go-to-market: Have you engaged Sales and CS on the rollout plan?

Document the gaps explicitly — they become the PRD's open questions.

**Step 3 — Generate the PRD.**

```
/prd
> User: [Describe your initiative with all the context you have]
        Please flag wherever assumptions are being made due to
        missing information — I want the gaps visible.
```

**Step 4 — Stakeholder review pass.**

Review the PRD from three perspectives:
- Engineering lead: "Is there anything here that would prevent us from starting estimation?"
- Design: "Is the user journey clear enough to start wireframes?"
- CPO/CEO: "Does the business case section justify the resource investment?"

For each perspective: identify the one most important gap and address it.

**Step 5 — Success metrics.**

The most commonly underdeveloped section of a PRD is success metrics. For your PRD:
- Define at least one primary metric (what you will present at the QBR 6 months post-launch)
- Define at least one leading indicator (what you will check at 30 days to know if you're on track)
- Define the threshold below which you would consider the feature a failure and do something different

```
/prd section:"success-metrics"
> User: Help me define rigorous success metrics for [initiative].
        Context: [describe product, customer base, expected usage]
```

**Deliverable:** A complete PRD with all sections populated, explicit gaps flagged and owned, and a success metrics section with primary KPI, leading indicator, and failure threshold defined.

---

### Exercise 3: Research Synthesis Sprint

**Type:** Research and Insight
**Time:** 75 minutes
**Plugin commands:** `/research`, `/interview`
**Goal:** Transform raw research material into product-actionable insights

**Step 1 — Gather your raw material.**

Pull together research material from the last 30–90 days. This might include:
- Notes from 3–5 customer interviews (even informal ones count)
- Support ticket themes from your helpdesk system
- NPS verbatim comments
- Feature request votes from Canny/ProductBoard/UserVoice
- App store reviews (if applicable)

If you have no research material, pull 20 support tickets from the last 30 days and use those.

**Step 2 — Baseline hypothesis.**

Before synthesising, write down: "I expect the top 3 user pain signals to be: [1], [2], [3]." This is your bias check — the synthesis may confirm or challenge your assumptions.

**Step 3 — Synthesise.**

```
/research
> User: Please synthesise the following research material into
        product insights. For each insight: what is the pattern,
        what is the evidence, what does it imply for the product,
        and how strong is the signal?

[Paste your research material]
```

**Step 4 — Bias check.**

Compare the synthesis output to your baseline hypothesis from Step 2:
- Did anything surprise you?
- Are there signals that contradict your existing roadmap assumptions?
- Are there problems in the synthesis that you would have been tempted to explain away without the structured output?

The most valuable research syntheses are the ones that challenge what the PM already believes.

**Step 5 — Product actions.**

For each insight rated 🔴 HIGH or 🟡 MEDIUM:
- Is there already a backlog item addressing this? (If so: does the spec reflect what the research now reveals?)
- Should there be a backlog item? (If not: create a discovery ticket)
- Does this change the prioritisation of anything on the roadmap?

**Step 6 — Interview guide for next round.**

Based on the synthesis, identify the one most important question that remains unanswered:

```
/interview
> User: Create an interview guide for a 30-minute discovery interview
        to explore [the unanswered question from your synthesis].
        Target persona: [describe]. Goal: [specific question to answer].
```

**Deliverable:** Structured synthesis of your research material (insights with evidence, product implications, and signal strength), bias check analysis, updated backlog actions from insights, and interview guide for the next research round.

---

### Exercise 4: Roadmap Communication for Three Audiences

**Type:** Communication and Stakeholder Management
**Time:** 60 minutes
**Plugin commands:** `/roadmap`, `/update`
**Goal:** Produce the same roadmap in three versions, each perfect for its audience

**Step 1 — Define the underlying reality.**

Write a single paragraph describing your current roadmap reality in plain language: what are the themes, what are the priority 1 items, what is the big risk, what is on track, what is behind.

**Step 2 — Executive version.**

```
/roadmap audience:"executive"
> User: [Paste your underlying reality paragraph]
        Audience: CEO and board. Context: quarterly business review.
        The key question they have is: "Are we on track to hit our
        H2 product commitments?"
```

Review: does the executive version lead with business outcomes (not features)? Does it have a clear status signal (on track / watch item / at risk)? Is it short enough to read in 90 seconds?

**Step 3 — Engineering version.**

```
/roadmap audience:"engineering"
> User: [Same underlying reality]
        Audience: Engineering team. Context: sprint planning.
        They need: priority order, dependency clarity, open questions
        they need to resolve this sprint.
```

Review: does the engineering version have the technical specificity engineers need? Are dependencies named? Are the open questions they own clearly theirs?

**Step 4 — Customer version.**

```
/roadmap audience:"customer"
> User: [Same underlying reality]
        Audience: Our top 20 enterprise customers. Format: email.
        Goal: maintain confidence; invite beta interest.
        Constraint: do not make delivery date commitments.
```

Review: is the customer version in value language (what it does for them, not what it is technically)? Does it invite engagement without over-promising?

**Step 5 — Test against a real stakeholder.**

Show one of your three versions to the actual audience it is intended for. Ask: "Does this give you what you need? What question does it leave unanswered?" Refine based on the feedback.

**Deliverable:** Three roadmap communications (executive, engineering, customer) from the same underlying reality, each reviewed against audience-specific criteria, one refined based on real stakeholder feedback.

---

### Exercise 5: Backlog Prioritisation Session

**Type:** Strategic Prioritisation
**Time:** 60 minutes
**Plugin commands:** `/prioritise`
**Goal:** Apply RICE (or another framework) honestly to your real backlog

**Step 1 — List your backlog items.**

Pull your 6–10 highest-priority backlog items that are competing for the next quarter. For each item, note:
- What it is (brief description)
- Why users want it (the user problem)
- How much customer demand evidence you have (quantify if possible: support tickets, request votes, interview mentions)
- Your estimate of engineering effort (in sprints or story points)
- Your confidence that it will have meaningful impact (honest percentage)

**Step 2 — Apply RICE.**

```
/prioritise framework:"RICE"
> User: [Describe your backlog items with the context above]
        Please score each item, show your assumptions explicitly,
        and identify where the scoring is uncertain due to data gaps.
```

**Step 3 — Challenge the model.**

After reviewing the RICE output, do the following challenges:

**Challenge 1: The Strategic Override Test**
Is there any item that scored low on RICE that you would build anyway for strategic reasons (competitive necessity, CEO commitment, technical enablement)? If yes: make that override explicit and document the reason. Hidden overrides are where backlogs go wrong.

**Challenge 2: The Data Gap Test**
For each item where confidence is below 50%: what would you need to know to raise confidence above 70%? Is that information gettable in a 2-week discovery spike? If so: should you do the spike before committing to the build?

**Challenge 3: The "What Would We Regret?" Test**
Ignore the RICE scores for a moment. Which item, if you shipped nothing else this quarter, would your best customers be most grateful for? Does it match the top RICE scorer? If not: why the gap?

**Step 4 — Define the quarter.**

From the prioritisation output and the three challenges:
- Name your Q[N] priority 1 item (the thing that absolutely ships)
- Name your priority 2 item (ships if P1 goes smoothly)
- Name your stretch goal (ships if capacity allows)
- Name the one item you are explicitly NOT building this quarter and why

Document the decisions and the reasoning. The reasoning is what lets you defend the roadmap when someone asks why their request isn't in Q[N].

**Deliverable:** RICE-scored backlog with explicit assumptions, three challenge responses, defined quarterly priority order (P1/P2/stretch), and documented rationale for the one item explicitly deferred.

---

### Exercise 6: Full Launch Communication Package

**Type:** Go-to-Market Communication
**Time:** 60 minutes
**Plugin commands:** `/update`, `/spec`
**Goal:** Produce all the written materials needed to launch a feature

For a feature you are currently building or have recently shipped:

**Step 1 — Internal launch brief.**

```
/update type:"internal-launch-brief"
> User: Feature: [Name]. Ships: [date]. Audience: whole company.
        What it does: [description]. Why it matters: [user problem solved].
        Who should know before launch: [Sales, CS, Support, Engineering].
        Any edge cases CS/Support should know about: [list].
```

**Step 2 — Customer-facing release note.**

```
/update type:"release-note"
> User: Feature: [Name]. Audience: all customers (in-app notification
        and email). Tone: friendly, practical. Max 150 words.
        Lead with: what they can now do that they couldn't before.
```

**Step 3 — Customer FAQ.**

```
/update type:"customer-faq"
> User: Feature: [Name]. The 5 most likely questions customers will ask.
        Include: how to access it; what it does and doesn't do;
        what happens to existing data; how to get help.
```

**Step 4 — Support team brief.**

```
/update type:"support-brief"
> User: Feature: [Name]. Audience: customer support team.
        Include: what the feature does, common issues to expect,
        how to reproduce common problems, escalation path.
```

**Step 5 — Sales enablement note.**

```
/update type:"sales-enablement"
> User: Feature: [Name]. Audience: sales team. 1 page.
        Include: what prospect problem this solves, how to position
        it in a discovery call, what objections it removes,
        what it does not solve (so reps don't over-sell).
```

Review all five outputs together. The test: could every person who interacts with this feature (support, sales, the customer) get what they need from these materials without asking the PM?

**Deliverable:** Complete five-document launch communication package (internal brief, release note, FAQ, support brief, sales enablement), reviewed for coverage completeness.

---

### Exercise 7: Product Retrospective

**Type:** Reflection and Learning
**Time:** 45 minutes
**Plugin commands:** `/retro`
**Goal:** Conduct a retrospective that produces actionable changes to your PM process

**Step 1 — Choose a feature to retro.**

Select a feature shipped 4–12 weeks ago. You need: the original spec/PRD (what you planned), the actual delivery (what shipped), and any available adoption/impact data.

**Step 2 — Data gathering.**

Before running the retro with the agent, gather:
- Original success metrics (from the spec or PRD)
- Actual outcome data: adoption rate, support tickets, NPS feedback, any metric movement
- Delivery data: on time or late? Any scope changes during development?
- Team feedback: did engineering or design have any significant friction with the spec?

**Step 3 — Run the retro.**

```
/retro
> User: Feature: [Name]. Shipped: [date].
        Original goals: [list]
        Actual outcomes: [data]
        Delivery: [on time / late / scope changed — describe]
        Team feedback: [any significant friction points]
        Please structure this as: Did it solve the problem? /
        Did we build it as intended? / Were the metrics right? /
        What would we do differently?
```

**Step 4 — PM process learnings.**

The most important output of a product retro is not the feature assessment — it is the process learning. From the retro output, identify:

- One thing to change in how you write specs
- One thing to change in how you define success metrics
- One thing to change in how you plan and manage engineering dependencies

Write these as specific, testable commitments: not "write better specs" but "all ACs must be independently testable — if I can write 'and' in an AC, I must split it."

**Step 5 — Update your SKILL.md.**

Take the process learnings and add them to your `product.local.md` configuration file:

```markdown
## PM Process Standards (from retrospective learning)

Spec quality:
  [Learning 1 — specific rule added]
  [Learning 2 — specific rule added]

Success metrics:
  [Learning 1 — specific rule added]
```

**Deliverable:** Complete feature retrospective with four-section assessment, three specific PM process improvement commitments, and updated `product.local.md` rules.

---

### Exercise 8: Configure product.local.md

**Type:** Configuration
**Time:** 90 minutes
**Goal:** Build the organisation-specific configuration file that makes all PM outputs specific to your product context

This is the most leveraged PM exercise in the chapter. Every other exercise output gets better when this configuration is complete. An hour spent here saves hours across every subsequent interaction.

Work through the configuration template (provided in the Chapter 25 SKILL.md library) and populate:

**Section 1: Product Identity**
- Product name, description (what it actually does, not marketing language)
- Stage and growth context (Series A SaaS vs. mature enterprise vs. consumer app)
- Core value proposition (one sentence your best customers would use)

**Section 2: Personas**
For each of your 2–3 primary personas:
- Name and role
- Their primary goal (the job they are trying to do)
- Their biggest frustration with your product today
- How they would describe a "10/10 week" using your product
- What they look like in your user data (behavioral signals)

**Section 3: Team Structure**
- Engineering team size and sprint cadence
- Design team involvement model
- How the backlog is managed (tool + process)
- Sprint capacity and velocity (approximate)

**Section 4: Stakeholder Map**
For each major stakeholder:
- Name and role
- What they care about most (their key question)
- Their communication preference (format, frequency, detail level)
- What would concern them most in a product update

**Section 5: Terminology Glossary**
- What do you call your users? (customers / users / members / accounts?)
- What is your product's equivalent of a "workspace" / "project" / "team"?
- What terminology should never appear in specs (deprecated terms, internal codenames)?
- Any domain-specific language that needs consistent use across all outputs?

**Section 6: Quality Standards**
- Your definition of "ready for sprint" (what must be true for a spec to enter sprint planning?)
- Your definition of "launch-ready" (what must be true before a feature goes to production?)
- Your accessibility standard
- Your performance bar (what load time is unacceptable?)

**Test:** Run `/spec` with a brief description of any feature. Review the output — does it sound like it was written by someone who has worked in your product team? If not, what configuration information is missing? Add it and re-test.

**Deliverable:** A complete `product.local.md` configuration file, validated by running at least three commands (`/spec`, `/update`, `/roadmap`) and confirming the outputs are product-context-specific rather than generic.

---

## Chapter Summary: The PM's Multiplier

**The Central Insight**

The limiting resource in product management is not intelligence or judgment — it is time. The PM who can write clear specs, synthesise research, communicate roadmaps, and keep stakeholders informed at the quality that the work demands needs to do all of this while also doing the discovery, the prioritisation conversations, the engineering partnering, and the customer relationships that no AI can do for them.

The Product Management Plugin removes the bottleneck that is not the thinking — it is the writing. The PM thinks. The agent writes the first draft. The PM reviews and directs. The document reflects the PM's judgment at the quality the PM's judgment deserves, in a fraction of the time.

**What this chapter built:**

1. Feature specifications that engineers can build from without ambiguity
2. PRDs comprehensive enough to align an entire cross-functional team
3. Roadmaps in three languages: engineering, executive, and customer
4. Research synthesis that turns raw data into product decisions
5. User stories that connect user intent to testable engineering outcomes
6. Stakeholder updates calibrated to each audience from the same inputs
7. Prioritisation frameworks applied honestly, with data gaps visible
8. Retrospectives that produce process improvements, not just assessments
9. Three persistent agents managing research, communication, and roadmap coherence

**What does not change:**

The PM's job is fundamentally about judgment: which user problem matters most, which solution deserves to be built, which stakeholder needs to be heard, what to say no to. AI does not make those judgments. It removes the friction between judgment and documentation — so that the PM's judgment is expressed in work that actually changes what gets built.

The best PMs will use AI to produce sharper specs, richer research syntheses, and clearer roadmap communications. The gap between them and the rest will narrow as the rest gain access to the same tools. What will remain is the quality of the judgment underneath — and the discipline to configure the tools to express that judgment accurately.

---

> *Part 3 continues with Chapter 26: Customer Support & Success →*

---

## Quick Reference

### Plugin Commands

| Command | Use |
|---|---|
| `/spec` | Write or refine a feature specification |
| `/prd` | Generate a Product Requirements Document |
| `/roadmap` | Plan, structure, or communicate a roadmap |
| `/research` | Synthesise user research into insights |
| `/stories` | Generate user stories with acceptance criteria |
| `/brief` | Create a product brief or discovery brief |
| `/update` | Draft stakeholder updates (exec, eng, customer) |
| `/retro` | Structure a product retrospective |
| `/prioritise` | Apply a prioritisation framework to a backlog |
| `/interview` | Generate interview guides and synthesis frameworks |

### Key Resources

| Resource | URL |
|---|---|
| Product Management Plugin | claude.com/plugins/product-management |
| GitHub Plugin Repo | github.com/anthropics/knowledge-work-plugins/tree/main/product-management |
