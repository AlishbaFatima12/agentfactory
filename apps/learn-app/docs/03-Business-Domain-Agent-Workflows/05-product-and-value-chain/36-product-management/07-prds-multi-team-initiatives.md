---
slug: /Business-Domain-Agent-Workflows/product-management/prds-multi-team-initiatives
sidebar_position: 7
title: "PRDs for Multi-Team Initiatives"
description: "Understand when a PRD is required instead of a feature spec, master the 10-section PRD template and status gates, and use /prd from the custom product-strategy plugin to produce a full initiative PRD for InsightFlow's Workflow Builder"
keywords:
  [
    "product management",
    "PRD",
    "product requirements document",
    "multi-team initiatives",
    "product-strategy plugin",
    "initiative alignment",
  ]
chapter: 36
lesson: 7
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Distinguish spec scope from PRD scope and apply the correct document format to a given initiative"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    assessment_method: "Student classifies three initiative descriptions as spec-appropriate or PRD-appropriate with correct rationale"

  - name: "Produce a 10-section PRD using /prd and evaluate commercial evidence and success metric quality"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student invokes /prd, receives a PRD, identifies whether the commercial evidence cites sources and quantities, verifies failure threshold is defined, and checks that MUST requirements would genuinely block the launch"

learning_objectives:
  - objective: "Explain the difference between a feature spec and a PRD in terms of scope, audience, and required sections"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can name three sections that appear in a PRD but not a spec and explain why each is required at initiative scale"

  - objective: "Produce a complete 10-section PRD for a multi-team initiative using the /prd command and the product-strategy plugin"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student invokes /prd with InsightFlow Workflow Builder context and receives a PRD with all 10 sections present"

  - objective: "Evaluate a PRD against the NEVER DO rules from the /prd skill spec — checking commercial evidence quality, MUST vs SHOULD scope, and failure threshold definition"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student identifies at least two quality violations in the PRD output and corrects them with follow-up prompts"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Spec vs. PRD distinction (scope, audience, purpose)"
    - "10-section PRD template"
    - "PRD status gates (DRAFT → REVIEW → REFINED → APPROVED → SHIPPED)"
    - "Failure threshold — the pre-launch definition of 'change direction'"
    - "MUST vs. SHOULD scope rule (if more than 60% are MUST, scope is too large)"
  assessment: "5 concepts build on L06 — students already know spec anatomy, so this lesson extends that knowledge to initiative scale. The most important new concept is the failure threshold, which is counterintuitive for PMs who focus on success. The 60% MUST rule provides a concrete heuristic that prevents the common trap of labelling everything as must-have."

differentiation:
  extension_for_advanced: "Take the Workflow Builder PRD and run a MUST challenge: list every MUST requirement, then ask for each one 'Would we actually not ship without this?' Downgrade any that you would ship without to SHOULD. How many remain as genuine MUSTs? Then verify the success metrics: are they specific enough that you could set up an analytics query to measure them today, before the feature ships?"
  remedial_for_struggling: "Focus on the distinction between spec and PRD by reading Section 4 (Functional Requirements) of the PRD template. Each entry in that section is essentially a feature spec rolled up to one line per feature — name, priority, description, and spec reference. The PRD does not replace the spec; it references it. Once you understand that relationship, the PRD stops feeling like duplication and starts feeling like coordination."

teaching_guide:
  key_points:
    - "A spec is written for the team building one feature; a PRD is written for the entire organisation aligning on a major bet — audience determines format"
    - "The failure threshold is the most important section most PMs skip — defining what would cause you to change direction before launch is harder than defining success, but far more valuable"
    - "If more than 60% of functional requirements are labelled MUST, the scope is too large — this is a forcing function, not a suggestion"
    - "The engineering lead must sign off on Section 6 (Technical Architecture Notes) before the PRD moves to REVIEW status — never skip this gate"
    - "PRD commercial evidence must cite sources and quantities — 'customers have asked for this' is not evidence; '4 enterprise deals cited SSO as a blocker in Q2' is evidence"
  misconceptions:
    - "A PRD is just a longer spec. Correction: a PRD and a spec serve different audiences and answer different questions. The spec asks 'how do we build this feature?' The PRD asks 'should we make this bet, and what does winning look like?' A PRD without commercial context, success metrics, GTM requirements, and a failure threshold is not a PRD — it is a long spec."
    - "The failure threshold is negative thinking. Correction: defining what would cause you to change direction before launch is how you prevent sunk-cost escalation. PMs who define failure thresholds in advance make better decisions at the 30-day review because they have a pre-committed standard, not a post-hoc rationalisation."
    - "Once the PRD is APPROVED, it cannot change. Correction: PRDs are living documents through the REFINED stage. The goal of the status gates is to ensure that changes are deliberate — every change to an APPROVED PRD requires a new sign-off, which prevents quiet scope creep."
  discussion_prompts:
    - "Your CEO adds three new MUST requirements to the PRD the week before sprint planning — none of which were in the original document. The PRD is now at 70% MUST. How do you handle this conversation? What do you say to the CEO? What options do you present?"
    - "The engineering lead reviews the architecture notes section and says 'this will take 3 sprints more than the current estimate.' The PRD was already APPROVED. What happens next? Who needs to be involved in the re-scoping decision?"
  teaching_tips:
    - "The Workflow Builder PRD should feel like a natural expansion of the L06 spec — it wraps the trigger configuration spec plus other features into the full initiative. If students feel like they are starting over, remind them: the spec they wrote in L06 becomes Section 4, Feature 1 of the PRD."
    - "The commercial evidence section is where many PM students struggle — they list requests without quantifying them. A useful exercise: ask students to take each commercial evidence item and ask 'would this convince the CFO to fund 8 sprints of engineering work?' If not, the evidence is too weak."
    - "Teach the failure threshold by asking the inverse question first: 'How will you know this worked?' Then ask 'How will you know this is not working — and at what point would you change direction?' The second question is harder and more important."
---

# PRDs for Multi-Team Initiatives

You have a spec for the Workflow Builder trigger configuration feature. It is tight, well-scoped, and ready for engineering review. Maria Santos, your CTO, reads it and sends you a message: "This is good for the trigger feature, but I need the bigger picture. Engineering, design, data, and the platform team are all involved in Workflow Builder. How do I know this initiative is worth 4 months of cross-team work? What does success look like? What are the launch requirements? Who is signing off on the architecture?"

The spec answers the question for one team building one feature. The PRD answers the question the CTO is asking — the question the entire organisation needs answered before it makes a major bet.

This lesson teaches you when a PRD is required instead of a spec, how to use `/prd` from the custom `product-strategy` plugin to generate a 10-section PRD, and how to evaluate the output against the quality rules that prevent the most expensive PRD failures: undefined success metrics, vague commercial evidence, and MUSTs that are not really MUSTs.

## Spec vs. PRD: The Decision Rule

The distinction is not about document length. It is about scope, audience, and what question you are answering.

| Dimension             | Feature Spec                            | PRD                                                                                                             |
| --------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Scope**             | One feature, one team, 1–3 sprints      | Multiple features, multiple teams, major platform change                                                        |
| **Audience**          | Engineering team building the feature   | Entire team + leadership + cross-functional stakeholders                                                        |
| **Question answered** | How do we build this feature correctly? | Should we make this bet, and what does winning look like?                                                       |
| **Required when**     | Always, for any feature going to sprint | Multiple teams involved, executive alignment required, new product area                                         |
| **What it adds**      | —                                       | Commercial context, GTM requirements, non-functional requirements, launch plan, dependencies, failure threshold |

**The decision rule**: Write a spec when the work involves one feature, one team, and 1–3 sprints. Write a PRD when the initiative involves multiple features, multiple teams, or requires executive sign-off.

Workflow Builder involves the engineering team, the platform team (for the automation engine), the design team (for the builder UI), and the data team (for the trigger evaluation service). It requires CEO and CPO sign-off. It is an 8-sprint initiative touching three product surfaces. This is a PRD.

## The 10-Section PRD Template

The `/prd` command from the custom `product-strategy` plugin produces a document covering all dimensions of an initiative:

| Section                             | Purpose                               | What It Contains                                                                                       |
| ----------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **1. Executive Summary**            | 3-4 sentences for senior stakeholders | What, why, when, and the headline success metric                                                       |
| **2. Business Context**             | Commercial case for the initiative    | Problem statement, commercial evidence (quantified), strategic fit, success metrics, failure threshold |
| **3. User Requirements**            | Who it serves and what they need      | Primary and secondary personas, current state, desired state, key user stories, user journey map       |
| **4. Functional Requirements**      | What to build and priority            | Feature-by-feature breakdown with MoSCoW priority, key flows, dependencies, spec references            |
| **5. Non-Functional Requirements**  | How well it must perform              | Performance, reliability, security, compliance, accessibility, internationalisation, scalability       |
| **6. Technical Architecture Notes** | High-level technical approach         | Key decisions, platform dependencies, third-party integrations, data model changes, migration needs    |
| **7. Go-to-Market Requirements**    | What must be ready at launch          | Documentation, CS enablement, sales enablement, pricing, beta programme, customer communication        |
| **8. Launch Plan**                  | How the rollout happens               | Phased rollout (beta → GA), feature flags, monitoring plan, rollback plan                              |
| **9. Dependencies and Risks**       | What could block or derail            | External dependencies table, risk register with mitigations                                            |
| **10. Open Questions**              | Unresolved decisions                  | Numbered, with owner and due date — all must resolve before REFINED status                             |

### The Failure Threshold — The Section Most PMs Skip

Every PRD must define a failure threshold in Section 2: the specific outcome that would cause you to change direction. This is not pessimism. It is the difference between a pre-committed standard and a post-hoc rationalisation.

Without a failure threshold, the 30-day review after launch becomes a negotiation about whether the numbers are "good enough." With one, it is a check against a standard you set before you knew the results.

**Weak**: "If adoption is low, we will reassess."

**Strong**: "If workflow automation feature adoption is below 15% of Pro and Business accounts within 60 days of GA, we will run a 2-week qualitative research sprint to understand the barrier before investing further in the initiative."

The second version gives your team a clear trigger for action. The first version gives everyone room to argue about what "low" means at the worst possible moment.

## The MUST vs. SHOULD Rule

Section 4 (Functional Requirements) uses MoSCoW priority for each feature. The `/prd` skill enforces a constraint:

> **If more than 60% of requirements are labelled MUST, the scope is too large.**

This is a forcing function, not a guideline. When everything is MUST, nothing is MUST — you have just created a list of things you are hoping to build, not a prioritised set of launch requirements. Challenge every MUST: "Would we actually not ship without this?" If you would ship without it, it is a SHOULD.

:::caution The MUST Test
For each requirement labelled MUST, ask: "If this were not ready on launch day, would we delay the entire initiative?" If the answer is "probably not," it is a SHOULD. MUSTs that are actually SHOULDs inflate the scope, slow down the first launch, and defer the learning you could get by shipping smaller.
:::

## Worked Example: InsightFlow Workflow Builder PRD

Your L06 spec defined one feature: trigger configuration. But the Workflow Builder initiative is larger — it includes the automation builder UI (the canvas where users build workflows), the action library (what workflows can do), and the trigger configuration feature from L06. These features require three teams, a full Q3, and CEO sign-off on the engineering investment.

Run `/prd` to produce the full initiative document:

```
/prd
I need a PRD for InsightFlow's Workflow Builder initiative.

Context:
- InsightFlow is a B2B SaaS analytics platform (Series B, 50 employees,
  200 customers)
- Primary persona: Analyst Alex — data analyst at 100-500 person companies,
  builds dashboards without SQL, biggest frustration is manual repetitive work
- Strategic bet: Expanding from analytics to workflow automation (Q3 priority)

Commercial evidence from L04 research synthesis:
- 8/12 interview participants cited manual workflows as primary pain point
- 31 support tickets referencing "schedule" or "automatic" in past 90 days
- L05 competitive brief: 2 competitors offer automation; InsightFlow does not

Initiative scope (3 features):
1. Automation Builder UI — canvas for building workflow sequences
   [L06 spec: trigger configuration is the enabling sub-feature]
2. Action Library — what workflows can do (refresh dashboard, send report,
   notify via email)
3. Trigger Configuration — schedule and threshold triggers (spec in L06)

Teams involved: Engineering (3 developers), Design (1 designer),
Platform team (automation engine), Data team (threshold evaluation service)
Engineering estimate: 8 sprints total across teams
Target delivery: End of Q3

Please include:
- Section 2: Quantified commercial evidence with sources
- Section 2: A specific failure threshold (not just success metrics)
- Section 4: MoSCoW priority for each feature
- Section 6: Key technical decisions (Engineering lead must review this section)
```

**Sample PRD output from `/prd`:**

```
PRODUCT REQUIREMENTS DOCUMENT: InsightFlow Workflow Builder
════════════════════════════════════════════════════════════
Version: 1.0 DRAFT | Date: 2026-03-18 | PM: [Name]

SECTION 1: EXECUTIVE SUMMARY
InsightFlow is building Workflow Builder — an automation layer that lets
analysts automate the repetitive data workflows they currently run manually.
The commercial case is grounded in Q1 research: 8 of 12 interviewed users
cited manual workflows as their primary friction. This is InsightFlow's
largest Q3 investment: 8 sprints across three teams. Success means 20%+
of Pro and Business accounts have activated at least one automated workflow
within 90 days of GA.

SECTION 2: BUSINESS CONTEXT

Problem statement:
  Analyst Alex must manually trigger every analytics workflow — dashboard
  refreshes, scheduled reports, metric monitors — at the time they are
  needed. This converts a product that should be an always-on analytics
  layer into a tool that requires manual intervention for each output.

Commercial evidence:
  - User research: 8/12 discovery interviews cited manual triggering as
    primary pain (source: L04 research synthesis, Q1 2026)
  - Support tickets: 31 tickets referencing "schedule" or "automatic"
    in past 90 days (source: Support ticket analysis, March 2026)
  - Competitive gap: 2 direct competitors offer workflow automation;
    InsightFlow does not (source: L05 competitive brief)
  - Customer interviews: "I log in every Monday just to press the same
    button" (Analyst at regional logistics company, Q1 interview)

Strategic fit:
  Workflow automation is InsightFlow's Q3 strategic bet — the expansion
  from a reporting tool into an always-on analytics layer. Without
  automation, InsightFlow competes on dashboard quality; with automation,
  it competes on business operations value.

Success metrics:
  Primary (90 days post-GA):
    20%+ of Pro and Business accounts have activated at least one
    automated workflow
  Secondary (30 days post-GA):
    - 50%+ of users who build a workflow activate a trigger (not just
      use manual trigger)
    - Support tickets referencing manual workflow friction decrease
      by 40% vs. Q1 baseline

  Failure threshold:
    If automated workflow activation is below 10% of eligible accounts
    at 60 days post-GA, we will pause further Workflow Builder investment
    and run a 2-week qualitative research sprint to identify the
    adoption barrier before continuing.

SECTION 3: USER REQUIREMENTS

Primary persona: Analyst Alex
  Current state: Logs in manually to trigger dashboard refreshes and
    report exports. Repeats the same sequence every Monday morning.
    No way to configure events to start workflows automatically.
  Desired state: Configures workflows once, activates schedule or
    threshold triggers, and receives automated outputs without logging in.
  Key user stories:
    1. As Analyst Alex, I want to configure a weekly schedule trigger so
       that my Monday morning dashboard refresh happens automatically
    2. As Analyst Alex, I want to build a sequence of workflow steps so
       that I can chain data refresh → report export → email notification
    3. As Analyst Alex, I want to see the status of my running automations
       so that I know whether my Monday report ran without checking manually

Secondary persona: VP Priya
  Current state: Requests reports from Alex 2-3 times per week.
    Has no visibility into whether scheduled reports are running.
  Desired state: Receives automated weekly team performance reports
    without requesting them.
  Key user story:
    As VP Priya, I want to receive an automated weekly report in my
    inbox so that I have team metrics before my Monday standup without
    asking Alex for them.

SECTION 4: FUNCTIONAL REQUIREMENTS

Feature 1: Automation Builder UI
  Priority:      MUST
  Description:   Visual canvas where users create and edit workflow sequences
  Key flows:     Create workflow → add steps → configure each step → save
  Dependencies:  Platform team: automation engine API
  Spec ref:      [Separate spec — design in progress]

Feature 2: Action Library
  Priority:      MUST
  Description:   Library of available workflow actions (refresh dashboard,
                 export to PDF, send email report)
  Key flows:     Browse actions → configure action parameters → add to workflow
  Dependencies:  Data team: export service; Email service
  Spec ref:      [Separate spec — to be written in sprint 1]

Feature 3: Trigger Configuration
  Priority:      MUST
  Description:   Schedule and threshold triggers for automatic workflow start
  Key flows:     Configure trigger → set parameters → activate → monitor status
  Dependencies:  Platform team: trigger evaluation service
  Spec ref:      L06 feature spec (trigger configuration) — REVIEW v1.0

Feature 4: Workflow History and Status
  Priority:      SHOULD
  Description:   Log of workflow runs — success, failure, timestamp
  Key flows:     View workflow → see run history → investigate failure
  Dependencies:  Features 1-3 complete
  Spec ref:      [Pending]

Feature 5: Workflow Sharing (team access)
  Priority:      COULD
  Description:   Share a workflow with other team members for co-editing
  Key flows:     Share workflow → set access level → collaborator edits
  Dependencies:  Feature 1 complete; Auth team
  Spec ref:      [Pending — likely v2]

Note: 3 of 5 requirements are MUST (60% — at the limit). Challenge every
MUST before moving to REVIEW: would we genuinely not launch without it?

SECTION 5: NON-FUNCTIONAL REQUIREMENTS

Performance:
  - Workflow trigger evaluation completes within 15 minutes of condition met
  - Builder canvas loads within 3 seconds on standard connection
  - Workflow execution does not degrade InsightFlow dashboard load time

Security:
  - Workflow credentials (email service, external destinations) stored
    encrypted at rest
  - Workflow actions scoped to the user's existing data permissions —
    no elevation of privilege via automation

Compliance:
  - Email notification outputs must comply with GDPR data handling
    (customer data in email body requires review)
  - SOC 2 Type II: automation actions logged in audit trail

SECTION 6: TECHNICAL ARCHITECTURE NOTES
  [NOTE: This section must be reviewed and confirmed by Maria Santos
   (CTO / Engineering Lead) before PRD moves to REVIEW status]

  Key decisions (preliminary):
  - Automation engine: dedicated microservice (not embedded in core API)
    to allow independent scaling
  - Trigger evaluation: polling-based for schedule triggers (every 5 min);
    event-based for data threshold triggers (hook from data pipeline)
  - Action execution: async job queue with retry logic
  - Data model: new Workflow entity linked to existing User and Dashboard
    entities; no changes to existing data model

  Open: Platform team has not confirmed automation engine timeline.
  Open: Data team has not confirmed threshold trigger hook feasibility.

... [Sections 7-10 continue with GTM, Launch Plan, Dependencies, Questions]
════════════════════════════════════════════════════════════
```

### Evaluating the PRD Output

**Check 1 — Commercial evidence is quantified with sources.** The output cites "8/12 interviews" and "31 support tickets" with sources (L04 synthesis, support ticket analysis). If the agent produced "many customers have requested this," prompt: "Quantify the commercial evidence. How many users? From what source? In what time period?"

**Check 2 — Failure threshold is defined.** The sample defines a specific number (10% activation at 60 days) and a specific action (research sprint, not "reconsider"). If the output only has success metrics, prompt: "Add a failure threshold to Section 2. Define the specific outcome that would cause us to pause investment and the action we would take."

**Check 3 — Section 6 has engineering lead sign-off pending.** The output correctly flags that the CTO must confirm architecture notes before REVIEW. If the agent omitted this flag, add it.

**Check 4 — No more than 60% of requirements are MUST.** The sample has 3 of 5 at MUST — exactly at the limit. Challenge Feature 1 (Builder UI): "Would we not launch Workflow Builder without the visual canvas?" If trigger configuration could ship as a simplified workflow tool without a visual builder, that changes the scope.

:::note Keep This File
Lessons 3-14 build one continuous product management cycle for InsightFlow. Keep your Cowork session and working folder between lessons. The Workflow Builder PRD you produce in this exercise feeds directly into Lesson 8, where you will use `/stories` to decompose the PRD's user requirements into sprint-ready user stories.
:::

## PRD Status Gates

The PRD moves through five status gates, each with explicit requirements:

| Status       | What Must Be True Before This Status                                                                  |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| **DRAFT**    | All 10 sections present; some may be incomplete                                                       |
| **REVIEW**   | All sections complete; open questions have owners and dates; engineering lead has confirmed Section 6 |
| **REFINED**  | All open questions resolved; effort estimated by engineering; GTM requirements confirmed by CS/Sales  |
| **APPROVED** | CPO/CEO sign-off; ready for sprint planning                                                           |
| **SHIPPED**  | Feature live; success metrics being actively tracked                                                  |

The engineering lead sign-off on Section 6 is non-negotiable for REVIEW status. A PRD that goes to APPROVED without CTO confirmation of architecture notes has an unverified technical foundation — the most common source of PRD-to-sprint failures.

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

```
Write Section 2 (Business Context) of a PRD for InsightFlow's
SOC 2 compliance initiative.

Context:
- InsightFlow is a B2B SaaS, Series B, 200 customers
- Problem: Enterprise prospects (500+ employees) require SOC 2 Type II
  certification before procurement can approve a contract
- Commercial evidence: 3 enterprise deals stalled in procurement in Q2,
  each citing SOC 2 as a blocker (source: Sales pipeline review)
- Engineering estimate: 6 sprints across engineering + security consultant

Requirements for Section 2:
1. Problem statement with the specific commercial pain
2. Commercial evidence — quantified, with sources
3. Strategic fit — one sentence
4. Success metrics (primary at 6 months, secondary at 30 days)
5. Failure threshold — the specific outcome that would cause us to
   change direction, and what action we would take
```

**What you're learning:** Writing the commercial case for a compliance initiative — which is harder than writing it for a feature, because the value is in sales unblocking rather than user adoption. Notice how the failure threshold changes when the initiative is compliance-driven rather than feature-driven.

**Prompt 2 — Adapt** (change the context):

```
A PM at a legal tech SaaS is writing a PRD for their "AI Contract
Summary" feature — a feature that automatically generates a plain-
English summary of uploaded contracts.

Multiple teams are involved: engineering, legal review team (who
must validate AI accuracy), compliance, and sales.

Write the Functional Requirements section (Section 4) for this PRD:
- List 6-8 requirements
- Apply MoSCoW priority to each
- Check: if more than 60% are MUST, challenge each MUST with
  "Would we not launch without this?"
- Include the scope note (what stays in and out of scope)
```

**What you're learning:** Applying the 60% MUST rule in a different domain. Legal tech frequently over-specifies must-haves due to regulatory anxiety. The exercise forces a discipline that applies across all regulated-industry PRDs.

**Prompt 3 — Apply** (connect to your domain):

```
Think of a current or planned initiative that involves more than one
team or requires executive alignment. Write the first two sections
of a PRD for it:

Section 1: Executive Summary (3-4 sentences: what, why, when,
headline metric)

Section 2: Business Context
- Problem statement with evidence (be honest about how much evidence
  you actually have)
- Commercial evidence (quantified — if you cannot quantify it, write
  "Evidence gap: [what you need to find out]")
- Failure threshold (the specific number or outcome that would cause
  you to change direction)

After writing, ask yourself: would this commercial case convince your
CFO to fund the initiative? If not, what evidence is missing?
```

**What you're learning:** The real test — applying PRD discipline to your own work. The commercial evidence section is where most PMs discover how thin their evidence base actually is. That is the point of writing it before the initiative is approved, not after.

## Exercise: PRD for InsightFlow's Workflow Builder

**Plugin:** Custom product-strategy
**Command:** `/prd`
**Time:** 35 minutes

**Step 1 — Assemble context from prior lessons**

You have evidence from three prior lessons to ground this PRD:

- L04 research synthesis: 8/12 interviews cited manual workflows as primary pain
- L05 competitive brief: 2 competitors offer automation; InsightFlow does not
- L06 spec: Trigger configuration (REVIEW v1.0)

**Step 2 — Run /prd**

```
/prd
InsightFlow Workflow Builder initiative.

[Use the context from the worked example above, including the
three-feature scope, team dependencies, and Q3 timeline.]

Produce all 10 PRD sections. In Section 6, include a note that the
engineering lead must review and confirm architecture notes before
REVIEW status.
```

**Step 3 — Evaluate: does every MUST actually need to ship?**

For each requirement labelled MUST in Section 4, ask the test question: "If this were not ready on launch day, would we delay the entire initiative?" If any MUST would not actually block the launch, downgrade it to SHOULD and note why.

**Step 4 — Evaluate: is the failure threshold specific enough?**

Read the failure threshold in Section 2. Ask: "Would this threshold resolve a disagreement in the post-launch review, or would it be open to interpretation?" If it is open to interpretation, make it more specific: add a number, a timeframe, and a named action.

**Step 5 — Identify what needs engineering sign-off**

List the open questions in Section 6 that the engineering lead must answer before Section 6 is confirmed. If the PRD currently has two open technical questions in Section 6, set up a review meeting request in your calendar system for the sprint before the PRD moves to REVIEW. This is the step most PMs skip — and it is what causes PRD-to-sprint failures.

## What You Built

You produced a 10-section PRD for InsightFlow's Workflow Builder initiative — the multi-team document that wraps your L06 feature spec into the broader commercial and engineering alignment needed for a major strategic bet. You evaluated the commercial evidence quality, tested MUSTs against the 60% rule, and verified that a failure threshold was defined before launch.

This PRD feeds directly into Lesson 8, where you will use `/stories` from the custom `product-strategy` plugin to decompose the user requirements in Sections 3 and 4 into sprint-ready user stories for the engineering team.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 8: User Stories & Story Mapping →](./08-user-stories-story-mapping.md)
