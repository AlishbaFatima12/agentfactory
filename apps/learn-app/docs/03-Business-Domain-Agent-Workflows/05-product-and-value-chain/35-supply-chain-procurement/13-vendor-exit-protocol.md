---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/vendor-exit-protocol
sidebar_position: 13
title: "Vendor Exit Protocol"
description: "Build a complete vendor exit plan for a high-risk bottleneck vendor: immediate actions, emergency RFQ, internal and external communication plans, and the structural change recommendation that prevents the same crisis recurring"
keywords:
  [
    "vendor exit",
    "exit protocol",
    "emergency sourcing",
    "alternative vendor",
    "emergency RFQ",
    "vendor risk",
    "bottleneck vendor",
    "supply chain crisis",
    "exit planning",
    "vendor-assess exit mode",
    "supply disruption",
    "procurement risk management",
  ]
chapter: 35
lesson: 13
duration_minutes: 35

# HIDDEN SKILLS METADATA
skills:
  - name: "Execute Vendor Exit Assessment Using /vendor-assess Exit Mode"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can invoke /vendor-assess in exit-planning mode with a specific scenario and produce a structured exit plan with immediate actions, short-term mitigation, transition plan, and financial exposure assessment"

  - name: "Design a Full Vendor Exit Communication Plan"
    proficiency_level: "B2"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "Communication"
    measurable_at_this_level: "Student can identify all required communications (internal and external) for a vendor exit scenario, determine the sequence and timing of each, and draft the appropriate communication type using /vendor-communicate"

  - name: "Conduct Post-Mortem Analysis to Identify Structural Supply Chain Improvements"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can assess whether a vendor exit scenario was predictable from earlier signals, identify what monitoring would have given earlier warning, and propose a structural change that reduces the probability of recurrence"

learning_objectives:
  - objective: "Invoke /vendor-assess in exit-planning mode to generate a structured exit plan including immediate actions, short-term mitigation, and transition plan for a 60-day exit scenario"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student runs /vendor-assess with exit-planning parameters for the highest-risk Bottleneck vendor from Exercise 1 and produces a plan that addresses all five required elements: immediate actions, short-term mitigation, transition plan, communication requirements, and financial exposure"

  - objective: "Design the complete communication plan for a vendor exit: internal stakeholders, exiting vendor, and emergency alternative vendors"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student produces three distinct communications (internal operations brief, formal vendor notice, emergency RFQ outreach) appropriate to each audience, with correct timing sequence and authority levels"

  - objective: "Identify the monitoring gaps that allowed a vendor risk to escalate undetected and propose the structural change that would prevent recurrence"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student's post-mortem answers include specific monitoring capabilities (agent configuration, assessment frequency) that would have given earlier warning, and a structural recommendation (alternative vendor qualification) with an implementation timeline"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Exit triggers: four categories: financial distress, quality failure, geopolitical event, strategic sourcing change"
    - "/vendor-assess exit mode: immediate actions, short-term mitigation, transition plan, financial exposure"
    - "Emergency RFQ: qualification criteria, timeline compression, bridge arrangement commercial terms"
    - "Post-mortem framework: predictability assessment, monitoring gap identification, structural change recommendation"
  assessment: "4 concepts at B2 level: manageable because exit planning applies vendor assessment skills (L03-L04) and vendor communication skills (L11) from earlier in the chapter. The new work is the 60-day timeline structure and the post-mortem discipline. Exercise 8 anchors all four concepts in a single continuous scenario."

differentiation:
  extension_for_advanced: "Research the legal framework for emergency sourcing under force majeure. If a vendor's closure is triggered by a force majeure event (natural disaster, government action), how does that change your rights regarding outstanding orders, tooling ownership, and IP transfer? Draft the legal checklist your procurement team should complete in the first 48 hours of a force majeure exit scenario."
  remedial_for_struggling: "Focus on the timeline structure: Days 1-7 are about financial exposure and securing information (what do we owe, what do they owe, where are our assets?). Days 8-30 are about bridge supply (can we stretch existing stock? Is there any emergency source?). Days 31-60 are about permanent replacement. If you understand those three phases, you have the exit protocol framework."

teaching_guide:
  key_points:
    - "Exit scenarios are the stress test of the procurement operating system: everything that was neglected becomes urgent at exit"
    - "The 60-day clock starts from vendor notification, not from your decision to exit"
    - "Financial exposure must be assessed in the first 48 hours: outstanding orders, prepayments, tooling ownership, IP"
    - "Emergency sourcing compresses timelines but cannot compress qualification: safety and compliance requirements remain"
    - "A post-mortem that produces no structural change is an incomplete post-mortem"
  misconceptions:
    - "Exit planning is only needed when a vendor fails. Correction: planned exits (strategic sourcing consolidation, vendor rationalisation) require just as disciplined a protocol as emergency exits. The difference is lead time, not process."
    - "The exiting vendor is adversarial. Correction: in most scenarios, the exiting vendor wants a professional handover. They have tooling, documentation, and IP that you need. A factual, professional communication plan that respects the vendor's transition interests will recover these assets more reliably than an adversarial approach."
    - "Emergency sourcing means accepting a lower-quality supplier. Correction: emergency sourcing means compressing the timeline, not waiving qualification requirements. A bridge arrangement with a temporary source (at a premium) buys time for proper qualification of a permanent alternative."
  discussion_prompts:
    - "Your classification register from Exercise 1 shows a Bottleneck vendor with no qualified alternative. You have known about this for three months. You still do not have an alternative qualified. What procurement system failure does this represent: and how does it connect to the escalation design in Lesson 12's agent configuration?"
    - "In an exit scenario, the operations team wants to immediately begin using an unqualified alternative vendor to avoid a production stop. Your quality team says the qualification minimum is 8 weeks. What is the correct procurement response: and what is the risk of each option?"
  teaching_tips:
    - "Exercise 8 should feel uncomfortable if students have not qualified a backup for their Bottleneck vendor from Exercise 1. That discomfort is intentional: it is the lesson. The exercise reveals the consequence of treating a Bottleneck vendor as a Commodity."
    - "The post-mortem step (Step 5) is the most important step in the exercise. If students treat it as a tick-box, push them to be specific: what exactly was the signal that could have been detected earlier? What is the exact agent configuration change that would have surfaced it?"
---

# Vendor Exit Protocol

The test of your procurement operating system is not how it performs when everything is working. It is how it performs when you receive an unexpected notification at 9:47am on a Monday morning.

The notification reads: your highest-risk Bottleneck vendor: the one supplying the sole-source component that your production line depends on: has announced it is closing its manufacturing operation. The closure date is in 60 days.

You have no qualified alternative. Your safety stock will last three weeks. Qualification of a new supplier takes a minimum of 90 days under normal circumstances. The maths is bad: you have 60 days to find a solution and 90 days of minimum requirements to meet.

This scenario is preventable. In most cases, financial distress signals exist weeks or months before a vendor closes. Geopolitical risk escalates gradually. Quality failures compound over time. The question is whether your monitoring system: specifically the Vendor Health Monitor deployed in Lesson 12: was watching closely enough to give you earlier warning. The second question is whether you qualified an alternative in the time that warning gave you.

This lesson assumes you did not get the early warning. The 60-day clock has started.

## Exit Triggers

Vendor exits are driven by four distinct trigger categories, each with a different risk profile and response timeline:

| Trigger                | Typical Warning Period          | Primary Risk                             | Required Response                                                 |
| ---------------------- | ------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| **Financial distress** | Weeks to months: signals exist | Receivership before transition completes | Immediate financial exposure assessment; secure outstanding stock |
| **Quality failure**    | Compounding over months         | Production halt; liability; regulatory   | Stop new orders immediately; emergency qualification              |
| **Geopolitical event** | Variable: can be sudden        | Supply route disruption; force majeure   | Activate contingency routing; assess inventory                    |
| **Strategic sourcing** | Planned: within your control   | Transition cost; relationship damage     | Managed communication; phased handover                            |

The 60-day scenario in this lesson falls under financial distress with operational closure: the most time-pressured exit trigger.

## Using `/vendor-assess` in Exit Mode

The `/vendor-assess` skill includes an exit planning mode that generates the full structured exit plan when you specify the exit trigger and timeline.

```
/vendor-assess type:"exit-planning"
               vendor:"[Vendor name]"
               category:"[Category]"
               exit-trigger:"operational closure announced"
               timeline:"60 days"
               dependency:"sole-source"
```

**The skill produces five output sections:**

**1. Immediate actions (Days 1-7)**

- Confirm outstanding purchase orders and their delivery status
- Assess prepayments and amounts at risk
- Inventory of company-owned tooling, moulds, and IP in the vendor's possession
- Secure all technical documentation, specifications, and quality records
- Initiate preliminary alternative sourcing search

**2. Short-term mitigation (Days 8-30)**

- Emergency RFQ for the affected category
- Assess current safety stock vs. production requirements
- Identify any temporary bridge supply options (even at premium cost)
- Communicate internally to operations, production planning, and finance
- Issue formal transition notice to the exiting vendor

**3. Transition plan (Days 31-60 and beyond)**

- Qualification process for emergency alternative supplier
- Tool and IP transfer from exiting vendor (completed by Day 45)
- Bridge supply arrangements to cover qualification period
- Formal handover with full documentation

**4. Communication requirements**

- Internal: operations, production planning, finance, executive team
- Exiting vendor: formal notice, transition requirements, tool recovery schedule
- Emergency alternatives: urgent outreach letters, brief specifications, timeline

**5. Financial exposure**

- Value of outstanding orders at risk (if vendor enters receivership before completion)
- Prepayments outstanding
- Tool and IP value at risk
- Premium cost of bridge supply and emergency qualification

:::info Days 1-7: Financial and Asset Security First
The first week is not about finding a replacement: it is about protecting your financial position. Outstanding orders, prepayments, and company-owned tooling at the vendor's premises are at risk. If the vendor enters formal insolvency (administration, receivership), recovery becomes legally complex. The first priority is to complete or cancel outstanding orders, recover prepayments where possible, and create an inventory of all assets that must be retrieved.
:::

## Emergency RFQ

When you need a qualified alternative supplier in a compressed timeframe, the standard procurement process is not optional: it is abbreviated. The quality and safety requirements remain; the timeline for competitive tender does not.

```
/vendor-assess type:"emergency-rfq"
               category:"[Category]"
               specification:"[Key technical requirements]"
               timeline:"Qualified alternative supplier needed within 45 days"
               volume:"[Annual volume and monthly demand]"
               qualification-minimum:"[Your minimum requirements — e.g. ISO 9001 + sample approval]"
```

The emergency RFQ output provides:

- A list of potential alternative suppliers to contact for the category (based on category and specification data)
- Minimum qualification requirements: what must be met before any first order can be placed
- Commercial terms appropriate to a short-term bridge arrangement (typically no long-term commitment, premium acceptance, accelerated qualification audit)
- Evaluation criteria for selecting among candidates

:::caution Qualification requirements cannot be waived
Emergency sourcing compresses the timeline, not the standards. If your process requires ISO 9001 certification and sample approval before a supplier can receive a first order, those requirements apply to an emergency source as much as a routine one. The bridge arrangement buys time to complete proper qualification: not a waiver of it. Accepting an unqualified source creates product liability, regulatory, and insurance exposure that outlasts the supply emergency.
:::

## The Communication Plan

A vendor exit requires three distinct communications, each with a different audience, tone, and purpose. All three use the `/vendor-communicate` skill covered in Lesson 11.

### Communication 1: Internal (Operations, Production, Finance)

**What:** A factual brief on the supply disruption, impact assessment, and actions underway
**When:** Within 24-48 hours of confirmed notification
**Tone:** Calm, factual, action-oriented: the function of this communication is to prevent reactive decisions before the procurement team has a plan in place

Include: what has happened, timeline of the disruption, current inventory position, immediate actions procurement is taking, what other teams need to do (production scheduling adjustments, finance review of prepayments), next update timing.

### Communication 2: To the Exiting Vendor

**What:** A formal transition notice acknowledging the closure, confirming outstanding orders, and stating transition requirements
**When:** Within the first week, after the internal financial assessment is complete
**Tone:** Professional and firm: the vendor is a counterparty, not an adversary. A cooperative exit is in both parties' interest.

Critical elements:

- Formal acknowledgement of the closure notification
- Status of all outstanding purchase orders (which are to be fulfilled, which to be cancelled with refund)
- Complete inventory of company-owned tooling, moulds, and intellectual property currently at the vendor's premises: with specific return-by dates
- Technical documentation transfer requirements (drawings, specifications, quality records)
- Any warranty obligations the vendor retains for goods already delivered

Use `/vendor-communicate type:"exit-notice"` with the tooling and IP inventory as explicit line items.

### Communication 3: To Emergency Alternative Vendors

**What:** A brief, urgent outreach to potential alternative suppliers
**When:** Within the first two weeks, based on the emergency RFQ output
**Tone:** Urgent, professional, factual: these are commercial conversations, not distress signals

Include: what category you are sourcing, the volume, your minimum qualification requirements, your timeline, and the contact for immediate follow-up. Do not reveal that you are in an emergency situation: communicate as a professional procurement team running a sourcing event with a specific timeline.

## Post-Mortem: The Questions That Matter

After the immediate crisis is managed, the procurement post-mortem determines whether this scenario recurs. It requires honest answers to three questions:

**1. Could this have been predicted?**

Review the signals that existed before the notification arrived: Was there financial news about this vendor in the months prior? Were OTD trends declining? Were there quality issues or partial deliveries that the Vendor Health Monitor would have flagged: if it had been configured for this vendor?

If this vendor was classified as Bottleneck in your classification register but not included in the Vendor Health Monitor's watch list, that is the monitoring gap. The Bottleneck quadrant exists precisely because sole-source, low-spend vendors are overlooked.

**2. What monitoring would have given you earlier warning?**

Identify the specific signal: financial news, OTD trend, quality rejection trend: that would have given you 30, 60, or 90 days of additional lead time. Then state the exact agent configuration change that would have surfaced it.

For example: "The vendor's parent company published restructuring news 8 weeks ago. Configuring the Vendor Health Monitor with daily financial news scans for this vendor would have triggered a hot alert at that point. Eight weeks earlier, we could have had an alternative qualification process underway."

**3. What structural change prevents recurrence?**

A post-mortem that produces no structural change is an incomplete post-mortem. The structural change for a Bottleneck vendor with no alternatives is always the same: qualify an alternative. State the specific action, the responsible owner, and the completion date.

In most cases: "Qualify one alternative supplier for [category] within 90 days. Owner: [Category Manager]. Success criteria: approved supplier on vendor master, first sample delivery received and passed."

## Exercise: Build a Vendor Exit Protocol (Exercise 8)

**Type:** Risk Management
**Time:** 45 minutes
**Plugin commands:** `/vendor-assess`, `/vendor-communicate`
**Goal:** Complete vendor exit plan for a 60-day Bottleneck vendor closure scenario

:::note Prerequisites
This exercise uses the vendor classification register you built in [Exercise 1 (Lesson 3)](./03-vendor-classification-kraljic.md). You will select your highest-risk Bottleneck vendor from that register. If you have not completed Exercise 1, do so before continuing.
:::

### Step 1; Scenario Definition

From your classification register (Exercise 1), identify the Bottleneck vendor with the highest risk rating: the one that scored highest on supply risk with no qualified alternative. For the exercise, assume you have received notification at 9:47am today that this vendor is closing their manufacturing operation in 60 days.

Confirm your scenario parameters:

- Vendor name and category
- Annual spend and volume
- Dependency type (sole-source / no backup)
- Current safety stock in days of production

### Step 2; Exit Assessment

Run the exit planning assessment:

```
/vendor-assess type:"exit-planning"
               vendor:"[Your vendor name from Exercise 1]"
               category:"[Category]"
               exit-trigger:"operational closure announced"
               timeline:"60 days"
               dependency:"sole-source"
               safety-stock:"[Current days of stock]"
               annual-volume:"[Your volume data]"
```

Review the output. Does it include:

- [ ] Immediate actions with Day 1-7 timeline
- [ ] Short-term mitigation for Days 8-30
- [ ] Transition plan for Days 31-60
- [ ] Communication requirements (internal and external)
- [ ] Financial exposure: outstanding orders, prepayments, tooling at risk

If any element is missing or unclear, prompt for it specifically.

### Step 3; Emergency Sourcing Sprint

Launch the emergency RFQ for the vacated category:

```
/vendor-assess type:"emergency-rfq"
               category:"[Category]"
               specification:"[Key technical requirements for this component/material]"
               timeline:"Qualified alternative needed within 45 days"
               volume:"[Monthly demand]"
               qualification-minimum:"ISO 9001, sample approval, capacity confirmation"
```

Review the potential alternatives list. For each candidate:

- Is it a realistic alternative for your specific specification?
- What is the fastest path to qualification?
- What bridge arrangement terms are appropriate while qualification runs?

### Step 4; Communication Plan

Draft the three required communications:

**Communication A: Internal brief**

```
/vendor-communicate type:"internal-notice"
                    audience:"Operations Director, Head of Production, Finance Director"
                    subject:"Supply disruption — [Category]: [Vendor name] — 60-day closure"
                    situation:"[Vendor] has announced closure of manufacturing in 60 days"
                    current-stock:"[X days' production coverage]"
                    procurement-actions:"Exit assessment complete; emergency RFQ launched;
                                         alternative sources being contacted"
                    finance-actions:"Review outstanding POs and prepayments with [vendor]
                                     — [£X] at risk"
                    next-update:"[Date]"
```

**Communication B: Transition notice to exiting vendor**

```
/vendor-communicate type:"exit-notice"
                    vendor:"[Vendor name]"
                    contact:"[Vendor CEO or Operations Director]"
                    situation:"Acknowledge closure notification; formal transition process"
                    outstanding-orders:"[PO list with status — fulfil / cancel]"
                    tooling-recovery:"[List of company-owned assets at vendor premises
                                       with required return dates]"
                    documentation-transfer:"[Technical drawings, specifications, quality
                                            records — required by Day 30]"
                    transition-period:"[Date range]"
```

**Communication C: Emergency outreach to alternative vendors**

```
/vendor-communicate type:"emergency-rfq-outreach"
                    audience:"Procurement Director, [Potential alternative vendor name]"
                    category:"[Category]"
                    specification-summary:"[Key requirements — 3-5 lines]"
                    volume:"[Annual volume and monthly demand]"
                    timeline:"First sample delivery required within 45 days"
                    qualification-requirements:"[Your minimum approval criteria]"
                    contact:"[Your name, title, direct contact]"
```

### Step 5; Post-Mortem

After completing the exit planning scenario, answer these questions in writing:

1. **Was this predictable?** Review the history of this vendor in your classification register. Were there signals: declining OTD, financial news, quality issues: that existed before today? If your Vendor Health Monitor had been configured for this vendor, would it have flagged a warning in the past 90 days?

2. **What monitoring would have given earlier warning?** Identify the specific data point (financial news scan, OTD trend, Tier 2 supply signal) that would have provided 30-90 days of additional lead time. State the exact configuration change to the Vendor Health Monitor that would have surfaced it.

3. **What structural change prevents recurrence?** Write one specific, measurable action with a completion date:
   - "Qualify one alternative supplier for [category] within [X] days. Owner: [Name]. Success criteria: approved on vendor master; first sample received and passed."

**Deliverable:** Complete exit plan for the 60-day scenario including `/vendor-assess` exit planning output, emergency RFQ documentation, three drafted communications (internal, vendor transition, alternative vendor outreach), and a post-mortem with at least one specific structural change recommendation with owner and completion date.

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
I need to build a vendor exit plan for the following scenario:

Vendor: MicroTech Components Ltd
Category: Custom-designed microcontrollers for our IoT product line
Annual spend: £340K
Dependency: Sole-source — no other manufacturer produces to our
            specification without an 18-month retooling process
Exit trigger: MicroTech has announced it is ceasing operations
              in the microcontroller market in 90 days to focus
              on different product lines.
Current safety stock: 6 weeks of production

Generate the exit plan: immediate actions (Days 1-7), short-term
mitigation (Days 8-30), transition plan (Days 31-90), and financial
exposure assessment.
```

**What you are learning:** The exit planning output reveals the dependency structure that should have driven earlier action. A sole-source dependency with an 18-month retooling timeline cannot be resolved in 90 days: the exit assessment produces a bridge-and-qualify strategy because the structural problem (no alternative) cannot be fixed within the exit window.

**Adapt**: Modify the scenario to match your organisation.

```
Identify the highest-risk vendor in your own organisation —
the one whose failure or exit would cause the greatest operational
disruption with the least mitigation available.

Build a hypothetical exit scenario for that vendor:
- What exit trigger is most likely (financial distress, quality
  failure, strategic decision)?
- What is your current safety stock position?
- What communication would you need to send internally within
  48 hours of notification?
- What structural change would have made this scenario significantly
  less urgent — and why hasn't it been done?
```

**What you are learning:** The most uncomfortable part of this exercise is the last question. Most procurement teams know which vendors they should have qualified an alternative for. The gap between knowing and acting is often visible to the CPO only when it is too late.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
Your Vendor Health Monitor sends an alert:
"PrecisionCast Ltd — your sole-source bottleneck vendor for
custom-cast housings — has had three consecutive weeks of OTD
below 80%. In the most recent week, OTD was 65%. No financial
news. No quality rejections. Partial deliveries have increased
to 45% of weekly shipments."

This is not an exit notification. The vendor has not announced
closure. But the operational pattern is concerning.

Answer: (1) Does this require exit planning to begin now?
(2) What is the first communication you send — and to whom?
(3) What procurement actions should be underway within 5 business
days of this alert?
(4) At what point (what signal) would this become a formal exit
scenario?
```

**What you are learning:** Exit planning begins before the exit notification arrives. When a Bottleneck vendor shows systematic operational decline, the responsible procurement action is to begin the alternative qualification process immediately: even if the vendor relationship has not formally ended. The goal is to have an alternative ready before you need it, not after.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 14: Capstone; End-to-End Procurement →](./14-capstone-end-to-end-procurement.md)
