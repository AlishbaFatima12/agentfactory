---
sidebar_position: 8
title: "Litigation Support, Legal Hold, and Canned Responses"
description: "Execute litigation hold workflows with /respond, manage 7 categories of canned responses with escalation triggers, build preservation notice packages with custodian tracking, and enforce the absolute governance boundary between operational support and litigation strategy"
keywords:
  [
    "litigation support",
    "legal hold",
    "litigation hold",
    "preservation notice",
    "document preservation",
    "ESI",
    "electronically stored information",
    "custodian tracking",
    "discovery support",
    "respond command",
    "litigation governance",
    "patent infringement",
  ]
chapter: 22
lesson: 8
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure and Execute a Litigation Hold Workflow Using /respond"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can configure the /respond command with litigation-hold type, matter reference, scope, trigger event, and instructing attorney, and can interpret the agent's output including the preservation notice, custodian list, IT suspension request, and acknowledgement tracker"

  - name: "Enforce the Litigation Strategy Governance Boundary"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can distinguish between operational litigation support tasks the agent may perform (hold notices, custodian tracking, document indices, chronologies) and strategic litigation tasks that are exclusively attorney work (merit assessment, settlement positions, privilege assertions, pleadings), and can explain why this boundary is absolute"

learning_objectives:
  - objective: "Execute a litigation hold workflow using /respond, including drafting preservation notices, identifying custodians, and configuring acknowledgement tracking with escalation triggers"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can run /respond with litigation-hold parameters and produce a complete hold package (notice, custodian list, IT suspension request, tracker) ready for attorney review"

  - objective: "Explain the governance boundary between operational litigation support and strategic litigation work, identifying which tasks the agent may and may not perform"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can list at least four operational tasks the agent handles and at least four strategic tasks that are exclusively attorney work, with rationale referencing privilege and professional conduct rules"

  - objective: "Identify when a legal hold obligation is triggered and explain the consequences of failure to preserve relevant materials"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can describe at least three events that trigger preservation obligations and explain the potential sanctions for non-compliance including adverse inference instructions"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Legal hold (litigation hold) and when preservation obligations attach"
    - "The /respond litigation-hold workflow and its four outputs"
    - "Custodian identification and acknowledgement tracking with escalation"
    - "IT suspension requests for automated deletion policies"
    - "The absolute governance boundary: litigation strategy is attorney-only"
    - "Consequences of preservation failure (sanctions, adverse inference, default judgment)"
  assessment: "6 concepts at B1-B2 level -- within the acceptable range. The litigation hold concept is new but the operational workflow pattern (agent produces, attorney reviews) is established from prior lessons."

differentiation:
  extension_for_advanced: "Draft a litigation hold policy for your organisation that defines: who can trigger a hold, the standard scope categories, the acknowledgement escalation timeline, and the IT suspension checklist. Test the policy against a hypothetical regulatory investigation scenario."
  remedial_for_struggling: "Focus on two things: (1) a legal hold means 'stop deleting anything that might be relevant' and (2) the agent handles the paperwork (notices, tracking, reminders) while the attorney handles the strategy (what to argue, whether to settle, how to respond). If you understand this division, you understand the lesson."
---

# Litigation Support, Legal Hold, and Canned Responses

## When Disputes Become Real

In Lesson 5, you triaged NDAs into Tier 1/2/3. A Tier 3 NDA — one with RED flags like residuals clauses or asymmetric injunctive relief — sometimes surfaces issues that escalate to litigation. This lesson covers what happens when a dispute becomes real, and how the `/respond` command handles both litigation holds and the seven categories of routine legal correspondence that consume most legal ops time.

Every legal function hopes to avoid litigation. Most cannot. When a dispute escalates from commercial negotiation to formal proceedings — or when proceedings become reasonably foreseeable — the organisation's obligations change fundamentally. Document preservation obligations attach. Communication protocols tighten. The stakes shift from commercial compromise to legal exposure that can dwarf the original contract value.

Litigation support is the set of processes by which a legal department prepares for, manages, and responds to disputes. The Legal Plugin's `/respond` command, combined with the `/brief` command for legal research, provides structured workflow support for the two most operationally demanding phases of dispute preparation: legal hold management and document discovery support.

:::info Concept Box: Legal Hold (Litigation Hold)
A legal hold (also called a litigation hold or preservation notice) is a directive issued by an organisation's legal department requiring the preservation of all documents, electronically stored information (ESI), and other materials that may be relevant to a pending or reasonably anticipated legal dispute. Once a legal hold is triggered, the organisation must suspend routine document destruction policies (including automated deletion schedules) for all materials within the hold's scope. Failure to preserve relevant materials can result in sanctions, adverse inference instructions (where the court assumes the destroyed evidence was unfavourable), and in severe cases, default judgment. Legal holds are triggered when litigation is "reasonably anticipated" -- not when a lawsuit is actually filed. A demand letter, a regulatory investigation notice, or a significant customer complaint may all trigger the obligation.
:::

## How /respond Handles Legal Hold Notices

The `/respond` command includes a litigation hold workflow that automates the administrative burden of issuing, tracking, and enforcing preservation notices across the organisation. The workflow does not make any decisions about litigation strategy -- that is exclusively attorney work. It manages the operational mechanics: identifying custodians, issuing notices, tracking acknowledgements, sending reminders, and escalating non-compliance.

```
/respond type:"litigation-hold"
         matter:"[matter name or reference]"
         scope:"[description of relevant topics, date ranges, custodians]"
         trigger:"[event that triggered the hold -- demand letter, complaint, etc.]"
         instructing-attorney:"[name of lead attorney]"
```

The agent produces:

1. **Hold notice** -- a formal preservation notice for custodian distribution, identifying the matter, the scope of materials to preserve, the categories of ESI covered (email, documents, chat messages, database records, backup tapes), and the custodian's obligations. Drafted for attorney review and approval before distribution.
2. **Custodian list** -- identified from the matter scope, cross-referenced against the organisation's directory. The agent flags custodians who have left the organisation (requiring IT coordination to preserve their data) and custodians in jurisdictions with specific preservation requirements.
3. **Acknowledgement tracker** -- a tracking log for custodian acknowledgements, with escalation triggers: 3 business days (reminder), 5 business days (manager notification), 7 business days (General Counsel notification).
4. **Suspension notice to IT** -- a request to suspend automated deletion policies for email, document management systems, and backup rotation schedules within the hold scope.

## Governance Rule: Litigation Strategy Is ALWAYS Attorney-Only

This governance rule is absolute and non-negotiable.

The agent may draft hold notices, track custodian acknowledgements, compile document indices, and prepare chronologies. The agent must **never**:

- Assess the merits of a claim or defence
- Recommend settlement positions or ranges
- Draft substantive legal arguments or pleadings
- Advise on privilege assertions or waivers
- Communicate with opposing counsel or the court
- Make any determination about which documents are responsive to a discovery request

These are attorney functions protected by legal professional privilege and governed by rules of professional conduct. The agent's role in litigation support is purely operational -- the administrative and logistical infrastructure that enables the legal team to focus on strategy rather than coordination.

## Worked Example: Triggering a Litigation Hold at DataFlow Systems

**Scenario:** DataFlow Systems Ltd, a 200-person SaaS company headquartered in London, receives a demand letter from CloudMesh Technologies Inc. (a Delaware-incorporated competitor) alleging that DataFlow's new "AutoPipeline" feature infringes CloudMesh's US Patent No. 11,432,876 relating to automated data pipeline configuration. The demand letter requests cessation of the allegedly infringing feature and damages of USD 2.4 million. DataFlow's General Counsel, Priya Sharma, determines that litigation is reasonably anticipated and instructs the legal operations team to initiate a legal hold.

**Agent dialogue:**

```
You: /respond type:"litigation-hold"
     matter:"CloudMesh v DataFlow -- Patent Infringement Claim"
     scope:"All documents, emails, Slack messages, code commits, design
            documents, product specifications, and meeting notes relating
            to the AutoPipeline feature, including all prior art research,
            development history, and competitor analysis. Date range:
            January 2024 to present. Include all backup and archive
            copies."
     trigger:"Demand letter from CloudMesh Technologies Inc. received
              14 March 2026, alleging infringement of US Patent
              No. 11,432,876."
     instructing-attorney:"Priya Sharma, General Counsel"

Agent:

LITIGATION HOLD -- INITIATED
Matter:     CloudMesh v DataFlow -- Patent Infringement Claim
Reference:  LH-2026-003
Trigger:    Demand letter received 14 March 2026
Attorney:   Priya Sharma, General Counsel
Status:     DRAFT -- Awaiting attorney approval before distribution

PRESERVATION NOTICE (Draft for Attorney Review)

TO:         [Custodian Name]
FROM:       Legal Department -- DataFlow Systems Ltd
DATE:       [Date]
RE:         LEGAL HOLD NOTICE -- Preserve All Documents
            Matter: CloudMesh v DataFlow (LH-2026-003)

This notice requires you to preserve all documents and electronically
stored information within the scope described below. This obligation
is immediate and supersedes any routine document retention or
deletion policies.

SCOPE OF PRESERVATION:
You must preserve all documents, emails, Slack messages, Teams
messages, code repositories, design documents, product specifications,
meeting notes, calendar entries, and any other records (electronic or
physical) relating to:
- The "AutoPipeline" feature (all versions)
- Data pipeline configuration technology
- Any competitor analysis of CloudMesh Technologies
- Any prior art research relating to automated pipeline configuration

DATE RANGE: 1 January 2024 to present (and ongoing until this
hold is lifted by the Legal Department in writing).

YOUR OBLIGATIONS:
1. Do NOT delete, destroy, or modify any documents within scope
2. Do NOT alter any automated deletion settings for in-scope data
3. Preserve all backup copies and archived materials
4. If in doubt about whether a document is in scope, PRESERVE IT
5. Acknowledge receipt of this notice within 3 business days by
   replying to legal-hold@dataflow.com

Failure to comply with this notice may expose the company to
sanctions in legal proceedings. If you have questions, contact
the Legal Department immediately.

[Signature block -- Attorney]

RECOMMENDED CUSTODIANS:
Based on the matter scope, the following departments and
individuals should receive this notice:
1. Engineering -- AutoPipeline development team (lead + all
   contributors)
2. Product Management -- product manager for AutoPipeline
3. Design -- UX/UI designers who worked on AutoPipeline
4. Executive -- CTO, VP Engineering (decision-makers for the feature)
5. Legal -- any prior correspondence regarding CloudMesh or
   pipeline patents
6. Marketing -- any public-facing materials about AutoPipeline
7. Sales -- any customer-facing materials or demos
8. IT -- administrator access to preserve backups and archives

NOTE: Any custodians who have left DataFlow since January 2024
must be identified. Their data (email archives, documents, code
contributions) must be preserved by IT before any account
decommissioning proceeds.

IT SUSPENSION REQUEST (Draft):
Suspend all automated deletion for:
- Email: all custodian mailboxes within scope
- Slack: channels #autopipeline, #engineering, #product
- Code repositories: autopipeline-*, pipeline-config-*
- Document storage: all folders tagged "AutoPipeline"
- Backups: suspend rotation for tapes/snapshots from Jan 2024+

ACKNOWLEDGEMENT TRACKING:
Custodian acknowledgements will be tracked with the following
escalation schedule:
- Day 3: Automated reminder to non-responding custodians
- Day 5: Escalation to custodian's manager
- Day 7: Escalation to General Counsel

NEXT STEPS: Route this entire package to Priya Sharma (GC) for
review and approval before any distribution.

ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
LITIGATION STRATEGY IS EXCLUSIVELY ATTORNEY WORK
```

The agent has produced the operational infrastructure -- the notice, the custodian list, the IT suspension request, and the tracking mechanism -- in minutes rather than the hours this typically requires. Priya Sharma reviews the package, adjusts the custodian list based on her knowledge of who was involved in the feature's development, approves the notice language, and instructs distribution. The strategic decisions -- whether to engage US patent litigation counsel, whether to conduct a freedom-to-operate analysis, whether to respond to the demand letter or wait -- remain exclusively hers.

> **The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.**

## Canned Responses and `/respond`

Beyond litigation holds, the `/respond` command handles seven categories of routine legal correspondence. Each category has a structured template, jurisdiction-appropriate language, and built-in escalation triggers that stop the templated response when human judgment is required.

### The Seven Response Categories

| Category               | Command                                  | Typical Use                                        |
| ---------------------- | ---------------------------------------- | -------------------------------------------------- |
| Discovery hold         | `/respond type:"discovery-hold"`         | Preservation notices to custodians                 |
| Privacy inquiry        | `/respond type:"privacy-inquiry"`        | Routine privacy questions from employees/customers |
| DSAR response          | `/respond type:"dsar"`                   | Data subject access request acknowledgement        |
| Vendor question        | `/respond type:"vendor-question"`        | Contract term clarifications, renewal queries      |
| NDA request            | `/respond type:"nda-request"`            | Standard NDA routing for incoming requests         |
| Subpoena/legal process | `/respond type:"legal-process"`          | Acknowledgement and routing of legal process       |
| Insurance notification | `/respond type:"insurance-notification"` | Incident notification to carriers                  |

### Universal Escalation Triggers

The agent stops the templated response and routes to an attorney when any of these conditions are detected:

- **Potential litigation** — the inquiry suggests the sender is considering legal action
- **Regulator inquiry** — the communication comes from a regulatory body
- **Binding commitments** — the response would create contractual obligations
- **Criminal liability** — the situation involves potential criminal exposure
- **Media attention** — the matter involves or may attract press coverage
- **Unprecedented situation** — no template exists for this type of inquiry

:::note Prediction Moment
Before running `/respond type:"discovery-hold"` for the DataFlow scenario, predict: what sections will the template include? What will it refuse to include — and why? The governance boundary means the agent will produce the operational infrastructure but will not touch litigation strategy.
:::

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Execute a Litigation Hold for a Regulatory Investigation

```
I am General Counsel at a 200-person fintech company. This
morning I received the following notice:

"The Financial Conduct Authority hereby notifies your firm
that it has commenced an investigation into potential breaches
of the Consumer Duty rules (FCA PS22/9) in relation to your
automated lending product 'QuickLend'. The investigation
covers the period from 1 January 2025 to present. You are
required to preserve all documents and communications relating
to the design, testing, deployment, marketing, and customer
outcomes of the QuickLend product."

47 employees across Product, Engineering, Marketing, Compliance,
and Customer Support may have relevant documents. Our data is
spread across Gmail, Slack (channels: #quicklend, #lending-ops,
#compliance-reviews), GitHub (quicklend-* repositories),
Confluence (Product and Compliance spaces), and Salesforce
(customer complaint records).

Run the litigation hold workflow using /respond and verify:
1. Are the custodian notifications correctly scoped to the
   FCA's investigation period (1 January 2025 to present)?
2. Does the preservation scope cover ALL the ESI categories
   the FCA notice requires — including Salesforce customer
   complaint data, which is easy to overlook?
3. Does the IT suspension request address automated deletion
   policies for each system (Gmail retention, Slack message
   retention, GitHub branch cleanup)?
4. Does the custodian acknowledgement escalation timeline
   account for the regulatory urgency (FCA investigations
   typically expect immediate preservation)?

What you are checking: The FCA investigation scenario is more
complex than a standard demand letter — the scope is defined
by the regulator, not by you. Verify that the agent's output
matches the investigation scope exactly, rather than defaulting
to a generic preservation template.
```

**What you are learning:** A regulatory investigation imposes externally defined preservation obligations -- you do not get to choose the scope the way you might with a commercial dispute. Running the workflow against a specific FCA notice tests whether you can verify the agent's output against a defined regulatory requirement, which is a fundamentally different skill from designing a policy from scratch.

### Prompt 2: Preservation Failure Consequences

```
A 200-person technology company received a patent infringement
demand letter 6 months ago but never issued a formal litigation
hold. The company's routine data retention policy automatically
deleted emails older than 90 days and rotated backup tapes
monthly. The plaintiff has now filed a lawsuit and requested
discovery of all documents relating to the allegedly infringing
feature.

Explain:
1. What is "spoliation of evidence" and has it occurred here?
2. What is an "adverse inference instruction" and could the
   court impose one?
3. What are the possible sanctions (monetary, evidentiary,
   case-dispositive)?
4. How would the outcome differ if the company had used
   /respond to issue a litigation hold on the day the demand
   letter arrived?
5. Draft a remediation plan: what should the company do NOW
   to mitigate the damage?

Reference actual case law if possible (e.g., Zubulake v. UBS
Warburg, Pension Committee v. Banc of America Securities).
```

**What you are learning:** Understanding the consequences of failing to preserve evidence makes the litigation hold workflow concrete rather than abstract. The sanctions regime -- monetary penalties, adverse inference instructions, even default judgment -- demonstrates why the operational infrastructure the agent provides (notices, tracking, IT suspension) is not administrative overhead but litigation risk management.

### Prompt 3: Operational vs. Strategic -- Where Is the Line?

```
In a patent infringement dispute, classify each of the
following tasks as either OPERATIONAL (the agent can handle)
or STRATEGIC (attorney-only). For each, explain your reasoning:

1. Drafting the preservation notice for custodians
2. Deciding whether to engage outside patent litigation counsel
3. Tracking which custodians have acknowledged the hold notice
4. Assessing whether the patent claims actually cover our product
5. Compiling a chronological index of all code commits to the
   disputed feature
6. Recommending a settlement range
7. Sending a reminder to a custodian who hasn't acknowledged
8. Determining which documents are privileged
9. Drafting an IT suspension request for backup rotation
10. Deciding whether to file a declaratory judgment action

For the operational items, describe what the agent's output
would look like. For the strategic items, explain what
professional conduct rule or legal principle makes them
attorney-only.
```

**What you are learning:** The operational/strategic distinction is the most important governance concept in litigation support. Items 1, 3, 5, 7, and 9 are operational -- the agent produces the infrastructure. Items 2, 4, 6, 8, and 10 are strategic -- they require legal judgment, create privilege, or involve court-facing decisions. Correctly classifying these tasks is the skill that makes litigation AI safe and effective.

## What You Built

1. A litigation hold package with hold notice, custodian list, acknowledgement tracker, and IT suspension request
2. Seven canned response categories configured for /respond (DSRs, discovery holds, privacy inquiries, vendor questions, NDA requests, subpoena/legal process, insurance notifications)
3. Universal escalation triggers identifying when to stop templated response and involve an attorney
4. The operational vs. strategic governance distinction for litigation support tasks
5. Understanding of ESI preservation obligations and the duty to preserve electronically stored information

---

Continue to [Lesson 9: Meeting Prep and Vendor Management ->](./09-meeting-prep-and-vendor-management.md)
