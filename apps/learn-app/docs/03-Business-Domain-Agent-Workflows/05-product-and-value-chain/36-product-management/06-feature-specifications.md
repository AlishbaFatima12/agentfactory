---
slug: /Business-Domain-Agent-Workflows/product-management/feature-specifications
sidebar_position: 6
title: "Feature Specifications"
description: "Master the five-section spec anatomy and the acceptance criteria quality rules, then use /write-spec from the official product-management plugin to produce a sprint-ready feature spec for InsightFlow's Workflow Builder trigger configuration"
keywords:
  [
    "product management",
    "feature specification",
    "acceptance criteria",
    "scope boundary",
    "write-spec",
    "product requirements",
  ]
chapter: 36
lesson: 6
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Write a five-section feature spec using /write-spec with explicit scope boundary and testable acceptance criteria"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student invokes /write-spec, produces a spec with all five sections, and identifies at least two vague ACs to replace with measurable ones"

  - name: "Evaluate spec quality by testing each acceptance criterion against the four AC rules"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can identify compound ACs (with 'and'), implementation-specifying ACs, and ACs without measurable thresholds — and correct all three"

learning_objectives:
  - objective: "Distinguish between the two spec failure modes (vague spec and over-specified spec) and explain what the craft middle ground looks like"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student classifies three example specs as vague, over-specified, or well-scoped with correct rationale"

  - objective: "Produce a complete five-section feature spec using /write-spec, with an explicit OUT OF SCOPE list and independently testable acceptance criteria"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student invokes /write-spec, receives a spec, and confirms all five sections are present including a non-empty OUT OF SCOPE list"

  - objective: "Test every acceptance criterion in an AI-generated spec against the four AC quality rules and correct violations"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student applies the four AC rules to the spec output and identifies at least two violations to correct"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Two spec failure modes: vague vs. over-specified"
    - "Five-section spec anatomy (Problem, Solution, ACs, Edge Cases, Open Questions)"
    - "Scope boundary — the explicit IN/OUT OF SCOPE list"
    - "Four acceptance criteria rules (independently testable, no 'and', behavior not implementation, measurable thresholds)"
    - "Spec status tags (DRAFT → REVIEW → REFINED → SHIPPED)"
  assessment: "5 concepts at B1-B2. The AC quality rules are the densest concept — but students who did L04 already practice criteria evaluation for research outputs, so the transfer is direct. The spec anatomy is scaffold for the rest of the chapter (L07 wraps it, L08 decomposes it), making this the most load-bearing lesson in the define arc."

differentiation:
  extension_for_advanced: "Take the /write-spec output and apply all five sections to a feature you are currently working on. Then ask the agent: 'Which of these ACs would be hardest to automate in a test suite? Which contain implementation details that should be removed?' Compare the agent's analysis to your own judgment. Write a 1-paragraph note on where they diverge and why."
  remedial_for_struggling: "Start with just the PROBLEM and ACCEPTANCE CRITERIA sections. Take one feature from your backlog — or use 'bulk dashboard export for InsightFlow' — and write the problem in two sentences (who is affected, what pain they feel). Then write three ACs. Check each one: can you write a test for it? If not, rewrite. Once these two sections feel solid, add the OUT OF SCOPE list — it forces you to say what you will not build, which is often harder than saying what you will."

teaching_guide:
  key_points:
    - "The vague spec makes engineers make product decisions; the over-specified spec makes PMs do engineering — the craft is in knowing what to specify and what to leave to the team"
    - "Every spec MUST have an explicit OUT OF SCOPE list — non-goals prevent scope creep more reliably than goals prevent scope gaps"
    - "Acceptance criteria are a contract with engineering — vague ACs mean the feature ships with ambiguous expectations, which leads to rework"
    - "The four AC rules are filters, not suggestions — 'and' in an AC means two untested requirements hiding as one"
    - "L06's spec feeds directly into L07's PRD — students who write a weak spec here will compound the weakness when wrapping it into a multi-team document"
  misconceptions:
    - "A longer spec is a better spec. Correction: spec length should match feature complexity. A 50-page spec for a two-sprint feature signals that the PM has not made decisions — they have deferred them to the document. The engineering team reads the spec; they do not study it."
    - "Acceptance criteria are the same as test cases. Correction: ACs define what must be true for the feature to ship — they describe behavior from the user's perspective, not from an engineer's test suite. Test cases are derived from ACs, but they are not the same thing. ACs belong in the spec; test cases belong in the engineering implementation."
    - "The OUT OF SCOPE list is defensive or negative. Correction: it is the most useful section in the spec for preventing scope creep. Every engineer reading 'OUT OF SCOPE: scheduled or automated exports' is saved from a week of over-building. Non-goals are as important as goals."
  discussion_prompts:
    - "You are reviewing a spec that has 12 acceptance criteria for a two-week feature. The engineering lead says it is over-specified. You believe every AC is necessary. How do you decide which to keep? What questions do you ask the engineering lead to understand their concern?"
    - "Your spec says AC7: 'Export completes in a reasonable time.' The engineering lead asks what 'reasonable' means. Write the corrected AC7 for InsightFlow's bulk export feature. What information do you need before you can write a measurable threshold?"
  teaching_tips:
    - "The 'trigger configuration' worked example is deliberately narrow — it is one feature within the Workflow Builder initiative, not the whole initiative. This models the skill of appropriate spec scoping: one spec, one problem, one team, one sprint range."
    - "When students run /write-spec, the agent almost always produces at least one compound AC. Have them find it before you point it out — the skill of reading for 'and' in ACs is a core PM habit that pays off in every spec review."
    - "The scope boundary is the hardest section to write because it requires saying no. Teach students to add the OUT OF SCOPE list last — after they have written the solution section, they will have a clearer sense of what adjacent capabilities are tempting but out of scope."
---

# Feature Specifications

The engineering lead sends you a message at 4 PM on a Thursday: "Hey, the spec for the trigger configuration feature has three open questions that are blocking us from estimating. Can you clarify by Monday?"

You open the spec. The problem section says: "Users want to configure automations." The acceptance criteria say: "Triggers should work well and be easy to configure." The open questions section is empty.

This is the vague spec — the most expensive document in software development. It is expensive not because it takes time to write, but because of what happens next. Engineering makes a dozen product decisions that should have been yours. They build something that solves their interpretation of the problem, not the user's actual problem. Six weeks and one sprint retrospective later, you have a feature that works but does not solve the problem that prompted it.

This lesson teaches you to write the kind of spec that eliminates that conversation — the spec that gives engineering what they need to build without forcing them to make product decisions. You will use `/write-spec` from the official `product-management` plugin to generate a first draft, and then you will apply the four acceptance criteria quality rules to refine it into something sprint-ready.

## The Two Failure Modes

Every weak spec fails in one of two directions:

| Failure Mode                | What It Looks Like                                                                                                         | What It Costs                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **The Vague Spec**          | "Users should be able to manage notifications." No definition of "manage." No personas. No scope boundary.                 | Engineers make product decisions. Feature ships with wrong behaviour. Rework in the next sprint.   |
| **The Over-Specified Spec** | 50 pages detailing every micro-interaction, every edge case, every pixel. Engineers spend more time reading than building. | PM made engineering decisions. Team resents the spec. Actual edge cases differ from imagined ones. |

The craft is in the middle: **complete on what matters, silent on what doesn't, and clear about which is which**. A well-scoped spec answers every product question and none of the engineering questions.

:::info The Signal for Over-Specification
If your spec tells engineers how to implement something — database schema, component names, algorithm choice — it is over-specified. ACs describe what must be true from the user's perspective, not how to achieve it. "Export completes within 10 seconds" is a behavior. "Use async job queue with Redis" is implementation. The first belongs in the spec; the second belongs in the engineering ticket.
:::

## The Five-Section Spec Anatomy

A complete feature spec has exactly five sections. Each one has a job:

| Section                         | Job                                               | What Belongs Here                                                              |
| ------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| **The Problem**                 | State the user pain with evidence                 | Who is affected, what they experience today, what evidence grounds the problem |
| **The Solution**                | Define what you are building and what you are not | Key user flows, explicit scope boundary (IN/OUT OF SCOPE list)                 |
| **Acceptance Criteria**         | Define "done" for engineering                     | Numbered, independently testable, behavior not implementation                  |
| **Edge Cases and Error States** | Define non-happy-path behavior                    | What happens when things go wrong — in a table                                 |
| **Open Questions**              | Surface unresolved decisions                      | Numbered, each with an owner and a due date                                    |

The OUT OF SCOPE list in the Solution section deserves special attention. This is not a placeholder — it is one of the most valuable things you will write. Every line you add to OUT OF SCOPE is a scope creep conversation you will never have to have.

## The Four Acceptance Criteria Rules

Acceptance criteria are the contract between PM and engineering. Weak ACs are the most common cause of feature rework. Apply these four rules to every AC before marking a spec REVIEW-ready:

| Rule                            | What It Catches                               | Example Violation                                        | Corrected                                                              |
| ------------------------------- | --------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Independently testable**      | ACs that depend on other ACs being true first | "User can see the export button after selecting charts"  | Separate into two ACs                                                  |
| **No "and"**                    | Compound requirements hiding as one           | "Export completes and a toast notification appears"      | Split: AC1 = export completes; AC2 = toast appears                     |
| **Behavior not implementation** | ACs that specify how, not what                | "Use async export service for selections over 10 charts" | "Export completes within 30 seconds for selections of 11-50 charts"    |
| **Measurable thresholds**       | Vague quality requirements                    | "Export is fast"                                         | "Export completes within 10 seconds for selections of up to 10 charts" |

:::caution The "And" Rule Is Not Optional
A single AC with "and" contains two requirements. If only one passes in the test suite, you cannot tell whether the feature is ready to ship. Split every compound AC. This is not pedantry — it is how you prevent "it mostly works" from becoming the standard for shipping.
:::

## Worked Example: InsightFlow Workflow Builder — Trigger Configuration

Your L04 research synthesis identified a clear user problem: Analyst Alex needs to automate dashboard refreshes and report deliveries, but today every automation requires manual triggering — she logs in every Monday morning to run the same sequence. The research evidence pointed to a specific sub-problem: users cannot configure what event triggers an automation to start.

This is the right scope for a spec: one problem, one feature, one team, one sprint range. You are not speccing the entire Workflow Builder — you are speccing the trigger configuration surface, which is the enabling foundation that all other automation features depend on.

Run `/write-spec` with this context:

```
/write-spec
I need a spec for InsightFlow's Workflow Builder trigger configuration feature.

Context:
- InsightFlow is a B2B SaaS analytics platform (Series B, 50 employees, 200 customers)
- Primary persona: Analyst Alex — data analyst at 100-500 person companies,
  builds dashboards without SQL, biggest frustration is manual repetitive work
- Problem (from L04 research synthesis): Analyst Alex cannot configure what
  event starts an automation — she must trigger every workflow manually
- This is a sub-feature of the Workflow Builder initiative
- Engineering estimate: 2 sprints, 1 developer
- Dependencies: Workflow Builder data model (being built in parallel)

Please produce a five-section spec. Include an explicit OUT OF SCOPE list
in the Solution section. Make all acceptance criteria independently testable
and measurable.
```

**Sample output from `/write-spec`:**

```
FEATURE SPEC: Workflow Builder — Trigger Configuration
════════════════════════════════════════════════════════════
Status:   DRAFT v1.0
Author:   [PM]
Eng lead: [To be assigned]
Sprint:   [Target sprint]
Effort:   2 sprints (1 developer)

── THE PROBLEM ──────────────────────────────────────────────
Analyst Alex builds automation workflows in InsightFlow but cannot
configure what event starts a workflow — every workflow must be
triggered manually. This blocks the primary use case: automatic
Monday morning report delivery that was identified as the top
automation pain point in Q1 research interviews (8 of 12 interview
participants described manual triggers as the biggest friction
in their analytics workflow). Without event-based triggers,
Workflow Builder delivers only partial value — the "automation"
still requires human action to start.

Research evidence:
- 8/12 interview participants cited manual triggering as primary pain
  (source: L04 research synthesis, InsightFlow Q1 discovery)
- Support ticket analysis: 31 tickets referencing "schedule" or
  "automatic" in the past 90 days
- Customer interview (Analyst at regional logistics company):
  "I log in every Monday just to press the same button"

── THE SOLUTION ─────────────────────────────────────────────
Allow users to configure one or more trigger conditions that
automatically start a Workflow Builder workflow when met.

KEY USER FLOWS:

Flow 1 — Schedule-based trigger setup:
  1. User opens Workflow Builder and selects a workflow
  2. User opens "Trigger" configuration panel
  3. User selects "Schedule" trigger type
  4. User configures recurrence (daily / weekly / monthly; time;
     timezone)
  5. User activates the trigger
  6. Workflow runs automatically at the configured time

Flow 2 — Data threshold trigger setup:
  1. User opens Workflow Builder and selects a workflow
  2. User opens "Trigger" configuration panel
  3. User selects "Data threshold" trigger type
  4. User selects a metric and sets a threshold condition
     (e.g. "Revenue > $50,000")
  5. User activates the trigger
  6. Workflow runs automatically when the condition is met

SCOPE BOUNDARY:
  IN SCOPE:   Schedule-based triggers (daily, weekly, monthly)
  IN SCOPE:   Data threshold triggers (numeric metric comparison)
  IN SCOPE:   Manual trigger (existing behaviour — must still work)
  OUT OF SCOPE: Webhook / external event triggers (future feature)
  OUT OF SCOPE: Complex multi-condition logic (AND/OR) — v2
  OUT OF SCOPE: Trigger history / audit log (separate initiative)
  OUT OF SCOPE: Trigger-based notifications (separate feature)
  OUT OF SCOPE: Real-time streaming triggers (architecture not ready)

── ACCEPTANCE CRITERIA ──────────────────────────────────────
AC1: User can open the Trigger configuration panel from any
     workflow in Workflow Builder
AC2: Trigger panel displays at least two trigger type options
     (Schedule, Data Threshold)
AC3: User can configure a schedule trigger with daily, weekly,
     and monthly recurrence options
AC4: User can set a specific time and timezone for schedule triggers
AC5: User can select any InsightFlow metric as the threshold
     condition source
AC6: User can set a numeric comparison condition (greater than /
     less than / equals) for data threshold triggers
AC7: Schedule trigger activates the workflow within 5 minutes of
     the configured time
AC8: Data threshold trigger activates the workflow within 15 minutes
     of the threshold condition being met
AC9: User can activate, deactivate, and edit an existing trigger
     without deleting the workflow
AC10: An active trigger displays its status (active / paused /
      last run time) in the workflow list view
AC11: Manual trigger continues to work regardless of whether an
      automatic trigger is configured

── EDGE CASES AND ERROR STATES ─────────────────────────────
| Scenario | Expected Behaviour |
|---|---|
| User tries to save schedule trigger without setting time | Save blocked; error: "Please set a trigger time before activating" |
| Data source for threshold trigger is deleted | Trigger deactivated automatically; user notified via in-app message |
| Schedule trigger fires but workflow has a runtime error | Trigger records failure; user sees failure status; next schedule run proceeds normally |
| User sets daily trigger for a time that has already passed today | System asks: "Run today at [time] or start tomorrow?" |
| Two triggers configured — both fire simultaneously | Workflow runs once; second trigger event queued for next evaluation |
| User deactivates trigger while workflow is running | Running workflow completes; trigger deactivated after completion |

── OPEN QUESTIONS ───────────────────────────────────────────
| # | Question | Owner | Due |
|---|---|---|---|
| 1 | What is the minimum polling frequency for data threshold triggers? More frequent = higher infrastructure cost | [Eng lead] | [Sprint planning] |
| 2 | Should trigger history be surfaced to the user in v1, or is status (active / last run) sufficient? | [PM] | [Before design review] |
| 3 | Does the data threshold trigger need to support non-numeric conditions (e.g. "status = complete")? | [PM] | [Before sprint start] |
════════════════════════════════════════════════════════════
```

### Evaluating the Output

Apply the four AC rules systematically:

**Check 1 — No "and" in any AC.** Scan every AC. AC10 contains "active / paused / last run time" — these are three pieces of information. Is displaying all three one testable requirement, or three? In this case, the status display is a single UI component with three data points — one AC is appropriate. But if an AC said "Trigger activates the workflow and sends an email notification," that is two ACs hiding as one.

**Check 2 — All ACs are measurable.** AC7 says "within 5 minutes" and AC8 says "within 15 minutes." These are measurable. If the output had said "triggers fire promptly," you would prompt: "Define 'promptly' with a specific time threshold based on the infrastructure capabilities."

**Check 3 — No implementation details in ACs.** Check that none of the ACs reference database operations, API calls, or internal service names. If the agent wrote "AC7: Scheduler service triggers workflow within 5 minutes via cron job," you would correct it to remove "via cron job."

**Check 4 — Edge cases cover error states, not just scenarios.** The edge case table includes what happens when the trigger fires but the workflow fails — this is the most important error state. If the agent omitted this, you would add it.

:::note Keep This File
Lessons 3-14 build one continuous product management cycle for InsightFlow. Keep your Cowork session and working folder between lessons. The trigger configuration spec you produce in this exercise feeds directly into Lesson 7, where you will expand it into a full PRD for the entire Workflow Builder initiative.
:::

## Spec Status Tags

Every spec should carry a status that tells the team where it is in the review process:

| Status      | Meaning                                        | What Must Be True                                           |
| ----------- | ---------------------------------------------- | ----------------------------------------------------------- |
| **DRAFT**   | Working document; not ready for estimation     | All five sections present; some incomplete                  |
| **REVIEW**  | Ready for engineering and design review        | All sections complete; open questions have owners and dates |
| **REFINED** | Estimation complete; ready for sprint planning | All open questions resolved; effort estimated               |
| **SHIPPED** | Feature live in production                     | Success metrics being tracked                               |

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

```
Write a feature spec for InsightFlow's bulk dashboard export feature.

Context:
- Analyst Alex needs to export multiple charts to PDF for her Monday
  board report. Today she can only export one chart at a time.
- Evidence: 47 support tickets in Q1 referencing export friction
- Engineering estimate: 2 sprints, 1 developer

Include all five sections:
1. The Problem (with the support ticket evidence)
2. The Solution (key user flows + explicit IN/OUT OF SCOPE list)
3. Acceptance Criteria (independently testable, no "and", measurable
   where performance is concerned)
4. Edge Cases and Error States (table format)
5. Open Questions (with suggested owners)
```

**What you're learning:** Practicing the five-section anatomy on a new feature. The export feature is deliberately simple — it lets you focus on spec structure rather than domain complexity. Notice whether the agent writes any compound ACs (with "and") or vague ACs (without measurable thresholds).

**Prompt 2 — Adapt** (change the context):

```
A product manager at a project management SaaS needs a spec for
their "AI task summariser" feature:

- Problem: Team leads spend 2+ hours per week reviewing individual
  task updates to write project status reports
- Solution proposed: AI scans open tasks and generates a one-paragraph
  weekly summary per project
- Target users: Team leads at 20-100 person companies
- Engineering estimate: 3 sprints

Write the five-section spec. When writing the OUT OF SCOPE list,
include at least 4 items — what adjacent capabilities would be
tempting to include but should be deferred to v2?
```

**What you're learning:** Applying the scope discipline in a different domain. The "tempting to include" framing forces you to think about what a thoughtful PM would leave out — which is often harder than specifying what to include.

**Prompt 3 — Apply** (connect to your domain):

```
Think of a feature you are currently working on or planning.
Write a five-section spec for it.

When you finish, review your acceptance criteria against these four rules:
1. Is each AC independently testable?
2. Does any AC contain "and"? If so, split it.
3. Does any AC specify implementation rather than behavior?
4. Does any AC contain vague quality language (fast, intuitive,
   user-friendly)? Replace with measurable thresholds.

How many ACs need revision after applying these rules?
```

**What you're learning:** The real test of the lesson — applying spec discipline to your own work. Most experienced PMs find 2-3 ACs that fail at least one of the four rules when they apply this filter to something they wrote themselves.

## Exercise: Write a Spec for InsightFlow's Custom Alert Feature

**Plugin:** Official product-management
**Command:** `/write-spec`
**Time:** 30 minutes

**Step 1 — Review the context**

From your L04 research synthesis: VP Priya's secondary frustration was that she only discovers metric anomalies after the fact, when someone sends her a screenshot of a bad number. She needs alerts — but the research revealed she doesn't need a notification centre. She needs threshold-based email alerts for a small number of KPIs she watches every week.

**Step 2 — Run /write-spec**

```
/write-spec
Feature: Custom metric alerts for InsightFlow

Context:
- InsightFlow is a B2B SaaS analytics platform (Series B, 50 employees,
  200 customers)
- Secondary persona: VP Priya — VP Engineering, wants team performance
  metrics without asking the data team, needs weekly automated reports
- Problem (from L04 research): Priya discovers metric anomalies after
  the fact, by screenshot from a colleague. She wants threshold-based
  alerts for 5-10 KPIs she watches weekly.
- Engineering estimate: 1-2 sprints, 1 developer
- Constraint: Do not spec a full notification centre — scope to
  threshold-based email alerts only

Write a five-section spec with explicit OUT OF SCOPE list.
Make all ACs independently testable and measurable.
```

**Step 3 — Evaluate the output**

Apply all four AC rules:

- Find every AC that contains "and." Split them.
- Find every AC with vague quality language ("quickly," "easily," "promptly"). Replace with measurable thresholds.
- Find any AC that specifies implementation (mentions API endpoints, database operations, or service names). Rewrite as behavior.
- Verify the OUT OF SCOPE list has at least 3 items. If not, prompt: "What adjacent alert capabilities should be explicitly out of scope for v1?"

**Step 4 — Refine one section**

Ask the agent to improve the edge cases section:

```
The edge cases table needs two more scenarios:
1. What happens when an alert fires but the metric data is stale
   (not updated in the last 24 hours)?
2. What happens when a user deletes a metric that an alert is
   configured against?

Add these to the edge cases table with expected behavior.
```

**Step 5 — Move to REVIEW status**

Check whether all five sections are complete and all open questions have owners. If yes, update the spec header to `Status: REVIEW v1.0`. If not, identify what is missing and prompt the agent to complete it.

## What You Built

You produced a five-section feature spec with an explicit scope boundary — a document that gives engineering everything they need to build without making product decisions for them. You also applied the four AC quality rules to the agent's output, catching the compound and vague criteria that would have created ambiguity at the sprint boundary.

This spec feeds directly into Lesson 7, where you will expand it (and the L05 competitive positioning context) into a full PRD for the Workflow Builder initiative — the multi-team document that wraps your feature-level spec into a broader commercial and engineering alignment document.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 7: PRDs for Multi-Team Initiatives →](./07-prds-multi-team-initiatives.md)
