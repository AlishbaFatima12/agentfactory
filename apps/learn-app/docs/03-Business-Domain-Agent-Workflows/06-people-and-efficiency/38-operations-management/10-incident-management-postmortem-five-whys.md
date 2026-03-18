---
slug: /Business-Domain-Agent-Workflows/operations-management/incident-management-postmortem-five-whys
sidebar_position: 10
title: "Incident Management — Post-Mortem and Five Whys"
description: "Conduct a structured incident post-mortem using the /incident command, apply Five Whys root cause analysis to reach systemic causes, and produce corrective actions that prevent recurrence"
keywords:
  [
    "incident management",
    "post-mortem",
    "five whys",
    "root cause analysis",
    "corrective actions",
    "incident post-mortem",
    "blameless culture",
    "MTTR",
    "MTTD",
    "operations management",
    "operations plugin",
    "incident command",
  ]
chapter: 38
lesson: 10
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Conduct a Structured Incident Post-Mortem Using the /incident Command"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can run /incident with a complete incident timeline and impact description, interpret the post-mortem output, and verify that all required sections are present and actionable"

  - name: "Apply Five Whys Root Cause Analysis to Reach Systemic Causes"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can drill from a proximate cause through five why iterations to identify the systemic root cause, and explain why the corrective action must target WHY 4 or WHY 5 rather than WHY 1"

  - name: "Evaluate Corrective Action Quality Against Five Criteria"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can assess each corrective action against the specific/owned/time-bound/root-cause-targeted/verifiable criteria and identify which actions fail and why"

learning_objectives:
  - objective: "Run /incident with a P1 incident timeline and interpret all sections of the post-mortem output"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs /incident with the payment processing outage scenario and verifies the output contains a complete timeline, impact assessment, root cause analysis, and corrective actions with owners and due dates"

  - objective: "Apply the Five Whys technique to move from proximate cause to systemic root cause"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student drills the health check threshold failure through five why iterations and identifies the systemic cause as incomplete migration acceptance criteria — not the misconfigured threshold itself"

  - objective: "Evaluate whether each corrective action is specific, owned, time-bound, root-cause-targeted, and verifiable"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student applies the five-criteria quality test to a set of corrective actions and correctly identifies which ones fail and on which criteria"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Post-mortem structure — the standardised format for capturing what happened, why, and what changes"
    - "Five Whys — systematic root cause analysis that moves from proximate to systemic cause"
    - "Corrective action quality criteria — the five tests that separate useful actions from good intentions"
    - "Blameless culture — framing incidents as system failures, not individual errors"
    - "MTTD and MTTR — leading and lagging indicators that track incident response performance"
  assessment: "5 concepts at B1/B2 level is appropriate. The Five Whys technique is intuitive once explained but requires practice — the exercise provides direct application. Blameless culture is a mindset shift that needs explicit framing."

differentiation:
  extension_for_advanced: "After completing the post-mortem exercise, run a second /incident pass requesting a Lessons Learned Brief — a one-page organisation-wide communication suitable for all-staff sharing. Then evaluate whether the lessons learned are genuinely transferable to other teams or written narrowly for the incident team only. Rewrite any lessons that fail this test."
  remedial_for_struggling: "Focus on two things: (1) the Five Whys technique — keep asking 'why?' until you reach something that a process or governance change could fix, and (2) the corrective action quality test — if the action sounds like 'be more careful', it fails. A good corrective action describes a specific system change that makes the mistake structurally harder to repeat."

teaching_guide:
  key_points:
    - "The proximate cause is never the root cause — fixing the thing that broke without fixing why it was able to break guarantees recurrence in a slightly different form"
    - "The Five Whys technique is a discipline: each answer to 'why' must be factual, not interpretive — you are tracing a causal chain, not assigning blame"
    - "Corrective actions that target WHY 1 (fix the health check threshold) are symptomatic; corrective actions that target WHY 4 or 5 (update migration acceptance criteria) are systemic"
    - "Blameless culture is not about removing accountability — it is about directing accountability at systems and processes rather than individuals"
    - "The L06 cross-reference is central to this lesson: the payment outage was caused by a poorly managed change (runbook not updated post-migration). The L06 change management process, had it been followed, would have prevented this incident."
  misconceptions:
    - "Post-mortems are for P1 incidents only. Correction: P2 incidents also require mandatory post-mortems; P3 requires a log entry. The pattern of P3 incidents often reveals systemic issues more clearly than a single P1."
    - "Five Whys always produces exactly five iterations. Correction: 'Five' is a heuristic, not a rule. Some root causes emerge at WHY 3; some require WHY 7. Stop when you reach something a process or governance change can address."
    - "A corrective action assigned to 'the team' is better than nothing. Correction: shared ownership is no ownership. The corrective action will not be completed. Every CA must have exactly one named person."
  discussion_prompts:
    - "Think about an incident or failure in your own work context. If you applied Five Whys to it, what systemic cause do you think you would find? Does that change what the 'fix' should be?"
    - "The payment outage had a root cause that was 4 months old — a migration checklist that was never updated. What does this suggest about the relationship between change management and incident management?"
  teaching_tips:
    - "The L06 cross-reference is a teaching moment: the runbook was not updated after a cloud migration because the change management process did not require runbook validation as an acceptance criterion. That is a L06 failure (change management) that became a L10 incident. Connecting these two lessons helps students see operations as a system, not a collection of independent processes."
    - "When teaching Five Whys, model the difference between interpretive and factual answers. 'The engineer was tired' is interpretive and leads to blame. 'The runbook referenced old IP addresses' is factual and leads to a system fix."
---

# Incident Management — Post-Mortem and Five Whys

It is 09:15 on a Tuesday morning. The monitoring alert fires: payment processing latency is spiking. By 09:18, the on-call engineer has been paged and the incident is declared P1. She opens the runbook and starts the failover procedure. Three minutes in, something is wrong. The IP addresses in the runbook do not match the current environment. They are from the pre-migration setup — the cloud migration completed four months ago, and nobody updated the runbook afterwards.

What follows is 3.5 hours of manual troubleshooting that should have taken 20 minutes. By the time the system is restored at 13:38, 2,400 transactions have been declined, 847 customers have complained, the incident has trended on social media, and the organisation's finance team is calculating a revenue impact of approximately £140,000. The immediate cause was a misconfigured health check threshold. The real cause was a change management process that did not require runbook validation before closing an infrastructure migration. That gap was created in Lesson 6 — and it ended up here.

This is the essential truth about incidents: they are almost never caused by the thing that breaks. The proximate cause — the database failover that did not trigger — is real. But the systemic cause — the migration acceptance checklist that never required health check validation — is what made the environment vulnerable. Fixing the threshold (the proximate cause) prevents the immediate recurrence. Fixing the migration checklist (the systemic cause) prevents the entire class of related incidents. The difference between these two corrective actions is the difference between incident response and incident management.

:::tip Plugin Setup Reminder
This exercise requires the **Operations** plugin (official) and the
**Operations Intelligence** plugin (custom). If you have not installed them,
follow the instructions in the [Chapter 38 prerequisites](./README.md#prerequisites)
before continuing.
:::

## Why Post-Mortems Fail

Most organisations have an incident process. When something goes wrong, it is logged, resolved, and closed. The learning step — the part where the organisation asks "how do we prevent this happening again?" — is optional in practice even when it is mandatory on paper.

The result is predictable: the same incident happens again. The same root cause is identified. The same corrective actions are agreed. Six months later the same thing happens a third time. The post-mortem report is archived. The corrective actions are incomplete. The next engineer on call opens the same outdated runbook.

Post-mortems fail for three consistent reasons:

| Failure Mode                    | What Happens                                                       | Why It Persists                                                     |
| ------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| **Blame instead of analysis**   | Discussion focuses on who made the error; defensiveness shuts down learning | The instinct to find fault is natural; the blameless approach requires deliberate practice |
| **Proximate cause only**        | The "fix" addresses what broke, not why it was able to break       | WHY 1 is obvious; WHY 5 requires sustained inquiry                  |
| **Weak corrective actions**     | Actions are vague, unowned, or set to "ASAP"                       | Nobody tests whether the action is specific enough to actually close the gap |
| **No follow-up meeting**        | CA review is skipped; nobody confirms completion                   | The incident is resolved; urgency dissipates                        |

The `/incident` command structures the post-mortem to prevent these failures. It produces a complete report — timeline, impact, root cause analysis, corrective actions, lessons learned — and applies the Five Whys technique to move from proximate to systemic cause.

## The Post-Mortem Structure

A well-formed post-mortem contains eight sections. Each section serves a specific purpose:

| Section                | Purpose                                                              | Common Failure                                         |
| ---------------------- | -------------------------------------------------------------------- | ------------------------------------------------------ |
| **Incident Summary**   | 2-3 sentences for leadership; what happened, how long, what impact  | Too technical; too long; lacks impact quantification   |
| **Timeline**           | Specific times from first sign to resolution; includes MTTD gap     | Vague ("eventually", "shortly after"); times omitted   |
| **Impact**             | Users, transactions, revenue, regulatory, reputational              | Incomplete; financial impact missing or speculative    |
| **Root Cause Analysis**| Proximate → systemic; uses Five Whys format                         | Stops at WHY 1; doesn't reach systemic cause           |
| **Contributing Factors** | What made the incident worse; not the root cause but amplifiers  | Conflated with root cause; incomplete                  |
| **What Went Well**     | Specific positives that should be protected                          | Skipped entirely; "nothing went well" is almost never true |
| **Corrective Actions** | Specific, owned, time-bound actions targeting the systemic cause     | Vague; assigned to "the team"; no date                 |
| **Lessons Learned**    | Transferable principles for the whole organisation                   | Team-specific; not generalisable; not shared           |

## Five Whys — From Proximate to Systemic

The Five Whys technique applies a simple discipline: answer "why?" and then ask "why?" about the answer. Repeat until you reach something that a process or governance change can address.

The technique has one rule: every answer must be factual, not interpretive. "The engineer was tired" is interpretive and leads to blame. "The runbook referenced old IP addresses" is factual and leads to a system fix. This distinction is the practical expression of blameless culture — not that nobody is accountable, but that accountability is directed at systems and processes rather than individual errors.

Here is the Five Whys analysis for the payment processing outage:

```
FIVE WHYS ROOT CAUSE ANALYSIS
Incident: Payment processing system unavailable for 4 hours 23 minutes

WHY 1: Why was the payment system unavailable?
→ Database failover did not trigger automatically.

WHY 2: Why did the failover not trigger?
→ Health check threshold was misconfigured — set at 95% latency
  (should be 80%). The threshold never triggered the failover.

WHY 3: Why was the threshold misconfigured?
→ It was incorrectly set during the cloud migration 4 months ago
  and was not caught during post-migration testing.

WHY 4: Why was the incorrect configuration not caught during testing?
→ The post-migration testing checklist did not include
  health check threshold validation.

WHY 5: Why was health check validation not in the checklist?
→ The checklist was copied from the on-premise playbook and
  never updated for cloud-specific requirements.

SYSTEMIC ROOT CAUSE:
Infrastructure migration checklists are not reviewed and updated
for environment-specific requirements. The acceptance criteria
for migrations are incomplete and do not require validation of
cloud-specific configurations.

CORRECTIVE ACTION (correct — targets WHY 5):
Update all infrastructure migration acceptance checklists to include
environment-specific validation steps, including health check threshold
validation. Validate all active checklists against current environment.

CORRECTIVE ACTION (wrong — targets WHY 1):
Fix the health check threshold to 80%.
[This prevents THIS incident from recurring. It does not prevent
the next migration from producing the same class of error.]
```

:::caution Do Not Stop at WHY 1
Fixing the threshold is necessary. It is not sufficient. The next migration will produce a different misconfiguration for a different component — and the checklist will still not catch it. The systemic fix (updating the acceptance criteria) closes the class of vulnerability, not just this instance of it. Both corrective actions are needed; only the systemic one prevents recurrence.
:::

## The Corrective Action Quality Test

A corrective action that passes the post-mortem but fails in practice is a good intention, not a fix. Apply five criteria before accepting any corrective action:

| Criterion            | Question to Ask                                                    | FAIL example                                | PASS example                                                                                                |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Specific**         | Can you describe exactly what will be different when this is done? | "Improve the runbook process"               | "All runbooks validated against current environment; sign-off logged by Head of Ops; validation added to change acceptance checklist" |
| **Owned**            | Is there one named person (not "the team") accountable?            | "IT will handle it"                         | "Head of Infrastructure — [Name]"                                                                           |
| **Time-bound**       | Is there a specific date (not "ASAP" or "soon")?                   | "As soon as possible"                       | "By [specific date — reflects P1 priority: within 1 week]"                                                 |
| **Root-cause-targeted** | Does this action close the systemic gap (WHY 4 or 5)?           | Action targets WHY 1 only                   | Action targets WHY 5: migration checklist governance                                                        |
| **Verifiable**       | How will we confirm this is actually done?                         | "The team will be more careful"             | "Updated checklist document committed; Change Approval Board sign-off on process change"                    |

Run every corrective action through these five criteria. If any criterion fails, the action is not ready to assign.

## Running the Post-Mortem with `/incident`

**Worked example.** The payment processing outage is resolved. As Head of Operations, you are conducting the post-mortem. You type:

```
/incident
Conduct a post-mortem for the following incident:

Incident type: Payment processing system outage
Severity: P1
Date and duration: [Date], 09:15–13:38 (4 hours 23 minutes)
Impact: Approximately 2,400 transactions declined; estimated £140,000
in failed transactions; 847 customer complaints received; social media
trending for 2 hours.

Timeline:
- 09:15: Monitoring alert fires — payment processing latency spike
- 09:18: On-call engineer paged; P1 declared
- 09:25: Engineer opens runbook — discovers IP addresses are from
  pre-migration environment (cloud migration completed 4 months ago)
- 09:25–12:45: Manual failover attempts; runbook errors cause repeated
  failures; DBA team escalated at 10:30
- 11:00: First customer communication sent
- 12:45: DBA team identifies correct failover procedure
- 13:38: System restored
- 14:15: All-clear communication to customers

Initial root cause hypothesis: Health check threshold misconfigured
during cloud migration (set at 95%; should be 80%). Runbook not updated
after migration — referenced old IP addresses and procedures.

What went well: P1 paging worked (engineer responded within 3 min).
DBA escalation resolved the issue effectively. Customer communications
once sent were accurate.

Contributing factors: Single on-call engineer; customer communication
required manager approval (manager unreachable for 45 min); monitoring
threshold too high (warning signs visible 23 min before outage).
```

**What to expect:** The output should contain all eight post-mortem sections, with specific timestamps in the timeline, a root cause analysis that uses Five Whys format, and corrective actions with named owners and due dates.

| Output Element              | What to Verify                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| **Timeline specificity**    | All times are specific (HH:MM); no "eventually" or "shortly after"                         |
| **MTTD measurement**        | The gap between 09:15 (alert fires) and 09:18 (P1 declared) = 3-min MTTD                  |
| **Root cause depth**        | RCA reaches systemic level — not just "threshold misconfigured" but "why it was misconfigured and not caught" |
| **Corrective action count** | At least 4-6 CAs covering the proximate fix AND the systemic gaps                          |
| **CA quality**              | Each CA has one named owner, a specific date, and a verifiable outcome                     |
| **What went well**          | At least 2-3 positives that should be protected                                            |

**What to evaluate:**

- Does the timeline use specific times throughout? Are there any vague phrases that need replacing?
- Does the root cause analysis reach WHY 4 or 5 — the systemic level — or does it stop at the proximate event?
- Is every corrective action specific, owned, time-bound, root-cause-targeted, and verifiable? Apply the five-criteria test to each one.
- Does the post-mortem include "what went well"? A complete post-mortem is a learning document, not just a failure document.
- Would the lessons learned be useful to someone outside the incident team? Are they transferable principles or team-specific details?

## Blameless Post-Mortems

The blameless approach is not about removing accountability. It is about directing accountability correctly. Individual error is almost always a symptom of a system that made that error possible or likely. Fixing the individual does not fix the system.

In practice, blameless means framing every post-mortem question in terms of systems and processes, not people:

| Blame framing                                                | Blameless framing                                                                |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| "Why did the engineer not check the runbook was current?"    | "What in our update process allowed the runbook to remain outdated for 4 months?" |
| "Why did the manager not respond to approve communications?" | "What in our P1 communication procedure depends on a single approver being reachable?" |
| "Why was the monitoring threshold set incorrectly?"          | "What in our migration acceptance process allowed a misconfigured threshold to reach production?" |

The right-hand column produces actionable system changes. The left-hand column produces defensiveness, incomplete disclosure, and the same incident six months later.

:::note Connection to Lesson 6 — Change Management
The payment processing outage has a change management root cause. The cloud migration that introduced the misconfigured health check threshold and the outdated runbook was an infrastructure change. Had the change management process from Lesson 6 required runbook validation as an acceptance criterion, the runbook would have been updated before the migration closed — and this incident would not have occurred.

This is the direct connection between L06 and L10: poor change management creates future incidents. When your post-mortem corrective actions include process changes, check whether those changes should be additions to the L06 change management acceptance criteria.
:::

## Incident Severity Classification

The `/incident` command applies severity classifications configured in `ops.local.md`. The defaults:

| Severity    | Criteria                                                                                   | Post-Mortem Requirement              |
| ----------- | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| **P1 — Critical** | Service unavailable; >50% of users/transactions affected; revenue impact >threshold; regulatory notification likely | Mandatory; within 5 business days   |
| **P2 — Major**    | Significant degradation; >20% affected; customer-visible; no regulatory notification      | Mandatory; within 10 business days  |
| **P3 — Minor**    | Limited impact; <20% affected; no revenue impact; workaround available                    | Optional; log entry required         |

The payment processing outage is unambiguously P1: 2,400 declined transactions, £140,000 revenue impact, customer-visible. The post-mortem is mandatory and should be distributed to leadership, IT, operations, and communications.

## Exercise: Payment Processing Outage Post-Mortem (Exercise 6)

**Type:** Incident management
**Time:** 30 minutes
**Plugin command:** `/incident`
**Goal:** Conduct a full post-mortem for the payment processing outage, drill the Five Whys to the systemic root cause, and produce corrective actions that pass all five quality criteria

### Step 1 — Classify the Incident

Before running `/incident`, determine the severity classification using the criteria above. For this incident:

- Service availability: payment processing fully unavailable
- Users affected: 2,400 transaction attempts declined
- Revenue impact: £140,000
- Regulatory: review whether the payment processor SLA triggers notification requirements
- Reputational: social media trending; 847 complaints

Confirm the P1 classification and note the post-mortem deadline (within 5 business days).

### Step 2 — Run the Post-Mortem

```
/incident
Conduct a full P1 incident post-mortem.

Incident: Payment processing system outage
Date: [today's date — use as the incident date]
Duration: 09:15–13:38 (4 hours 23 minutes)

Impact:
- ~2,400 customer transactions declined during outage
- Estimated £140,000 in failed transactions
- 847 customer complaints received
- Social media trending for 2 hours

Timeline:
- 09:15: Monitoring alert fires (payment processing latency spike)
- 09:18: On-call engineer paged; incident declared P1
- 09:25: Engineer begins runbook procedure; discovers IP addresses
  reference pre-migration environment (cloud migration completed
  4 months ago; runbook never updated)
- 09:25–12:45: Engineer attempts manual failover; repeated failures
  due to runbook errors; DBA team escalated at 10:30
- 11:00: First customer communication sent (1hr 45min after outage start)
- 12:45: DBA team identifies correct procedure
- 13:38: System fully restored
- 14:15: All-clear communication sent to customers

Root cause hypothesis:
1. Health check threshold set at 95% during cloud migration
   (correct threshold is 80%); failover never triggered automatically
2. Runbook not updated post-migration; referenced old IP addresses
3. No runbook validation required in migration acceptance criteria

Contributing factors:
- Single on-call engineer for P1 (no immediate backup)
- Customer communications required manager sign-off;
  manager unreachable for 45 min
- Monitoring alert threshold too high; warning signs visible
  23 min before full outage

What went well:
- P1 paging worked; engineer responded within 3 minutes
- DBA escalation resolved technical issue effectively
- Customer communications once sent were accurate and clear
- All complaints received personal response within 4 hours
```

### Step 3 — Drill the Five Whys

After running the post-mortem, run a second `/incident` invocation to drill deeper:

```
/incident
Apply Five Whys root cause analysis to this incident.
Starting point: "Database failover did not trigger automatically."

Run the Five Whys until you reach the systemic root cause
(the organisational gap that allowed this class of failure to exist).
Then identify: (1) what corrective action targets only WHY 1,
and (2) what corrective action targets WHY 4 or 5. Explain
why the systemic action is more valuable than the proximate fix.
```

### Step 4 — Test the Corrective Actions

Review every corrective action from your post-mortem output. For each one, apply the quality test:

| Corrective Action | Specific? | Owned by one named person? | Has a specific date? | Targets root cause (WHY 4/5)? | Verifiable? |
| ----------------- | --------- | -------------------------- | -------------------- | ----------------------------- | ----------- |
| CA-001: [name]    | ☐         | ☐                          | ☐                    | ☐                             | ☐           |
| CA-002: [name]    | ☐         | ☐                          | ☐                    | ☐                             | ☐           |
| CA-003: [name]    | ☐         | ☐                          | ☐                    | ☐                             | ☐           |

For any corrective action that fails one or more criteria, rewrite it until it passes all five.

**What to evaluate:**

- Does the timeline use specific times (HH:MM) throughout? Are there any vague phrases?
- Does the root cause analysis reach the systemic level — not just "threshold misconfigured" but "why it was misconfigured and not caught"?
- Is every corrective action specific, owned by one named person, time-bound with a specific date, targeting the systemic root cause, and verifiable?
- Does the post-mortem include "what went well"? Are the positives specific enough to be genuinely protective?
- Would the lessons learned be useful to someone in a different team who was not involved in this incident?

**Deliverable:** A complete P1 post-mortem with the Five Whys analysis attached, all corrective actions passing the five-criteria quality test, and a CA review meeting scheduled for 4 weeks after the post-mortem date.

:::note Connection to Lesson 5 — Process Documentation
If your post-mortem identifies SOPs or runbooks that need updating, use the `/runbook` workflow from Lesson 5 to make the corrections. In the payment processing outage, the runbook that caused the 3.5-hour delay is exactly the kind of document the L05 SOP library should capture. An updated, validated runbook is one of the corrective actions.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
Conduct a post-mortem for the following incident:

A payroll system failed to process this month's payroll run.
Duration: 6 hours (discovered at 07:00 Monday; resolved by 13:00).
Impact: 340 employees received pay 2 days late; 2 employees had
direct debits fail due to the delay; 1 regulatory notification
may be required (late payment reporting obligations).

Timeline:
- 07:00: Payroll team discovers processing failed overnight
- 07:15: IT helpdesk ticket raised
- 08:30: IT identifies issue: a scheduled job failed due to
  a permissions change made on Friday
- 08:30–11:30: Permissions change reversed; reprocessing begins
- 13:00: Payroll processing complete; payments initiated
- Employees notified at 13:30

Root cause hypothesis: A Friday infrastructure change removed
permissions required by the payroll batch job. The change was
not tested against payroll processing. The payroll job runs
Monday morning.

Apply Five Whys from "the scheduled job failed" and produce
corrective actions that target the systemic root cause.
```

**What you are learning:** The payroll failure has the same structural pattern as the payment outage: a change (Friday permissions change) that was not tested against dependent processes (payroll batch job). Recognising this pattern — change → untested dependency → Monday morning failure — is the diagnostic skill this lesson builds.

**Adapt**: Modify the scenario to match your organisation.

```
Conduct a post-mortem for a real or realistic incident from
your organisation. Choose an incident where the initial fix
did not prevent recurrence (the same thing, or something
similar, happened again).

Describe:
- What happened and for how long
- The initial fix that was applied
- Why the same type of incident recurred

Run Five Whys from the proximate cause of the recurrence.
What systemic root cause does WHY 4 or 5 reveal that the
initial fix did not address?
```

**What you are learning:** Recurring incidents are diagnostic. The first occurrence reveals a proximate cause; the recurrence reveals that the systemic cause was not addressed. Applying Five Whys to a recurring incident is often more revealing than applying it to the first occurrence, because the recurrence proves the initial fix was insufficient.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
You are reviewing six months of post-mortem corrective actions
from your operations team. You have identified a pattern:
60% of corrective actions are marked complete, but 40% of those
closed actions have been reopened because the incident recurred.

Propose a corrective action quality protocol for your organisation.
Your protocol should answer:
1. How do we verify that a corrective action is actually done
   (not just declared done)?
2. What criteria distinguish a CA that closes the systemic gap
   from one that only addresses the proximate cause?
3. How do we track corrective actions across post-mortems to
   identify patterns (same root cause recurring in different incidents)?
4. Who is responsible for the CA review meeting, and what happens
   if owners do not attend?
```

**What you are learning:** A corrective action protocol addresses the meta-level failure: not just this incident's CAs, but the organisation's ability to close the loop systematically. This is the difference between incident response (fix what is broken) and incident management (change the system so it breaks less).
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 11: Operational Metrics — Designing What to Measure →](./11-operational-metrics-designing-what-to-measure.md)
