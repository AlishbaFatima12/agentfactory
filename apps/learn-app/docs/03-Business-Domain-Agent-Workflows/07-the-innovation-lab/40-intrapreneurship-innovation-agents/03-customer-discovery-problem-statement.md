---
slug: /Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/customer-discovery-problem-statement
sidebar_position: 3
title: "Customer Discovery and Problem Statement"
description: "Conduct customer discovery interviews, synthesise raw notes into a Jobs-to-be-Done map, rank pains by frequency and severity, and frame the problem as a 'How Might We' statement using the /discovery skill"
keywords:
  [
    "customer discovery",
    "jobs to be done",
    "JTBD",
    "pain point ranking",
    "interview synthesis",
    "how might we",
    "HMW problem statement",
    "empathy stage",
    "design thinking",
    "discovery skill",
    "insight statements",
    "innovation agents",
  ]
chapter: 40
lesson: 3
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Synthesise Customer Discovery Interviews into a JTBD Map and Pain Ranking"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can take raw interview notes from 5+ conversations and produce a structured JTBD map (functional, emotional, related jobs), a frequency-times-severity pain ranking, and three non-obvious insight statements"

  - name: "Use the /discovery Skill to Automate Interview Synthesis and HMW Generation"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can invoke /discovery with raw interview notes and interpret the structured output, verifying JTBD categories, pain rankings, and HMW statements against their own understanding of the customer data"

  - name: "Frame a Problem Statement Using the How Might We Format"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can generate multiple HMW statements from different lenses (outcome, emotional, constraint, systemic) and select the most effective framing with a documented rationale"

learning_objectives:
  - objective: "Synthesise 5+ customer discovery interviews into a Jobs-to-be-Done map with functional, emotional, and related job categories"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given raw interview notes, student produces a JTBD map where each job is tagged with the number of interviews supporting it, and functional jobs are clearly separated from emotional and related jobs"

  - objective: "Rank customer pain points by frequency and severity to identify the highest-impact problem"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student produces a pain ranking where each pain includes interview count, severity rating, current-state description, and quantified cost , and the ranking reflects frequency times severity, not just frequency alone"

  - objective: "Generate How Might We problem statements from different lenses and select one as the primary innovation brief"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces at least 3 HMW variants from distinct lenses (outcome, emotional, constraint) and provides a rationale for the selected primary HMW that references specific discovery data"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Jobs-to-be-Done framework, functional, emotional, and related jobs"
    - "Pain ranking matrix, frequency times severity scoring"
    - "Insight statements, non-obvious, evidence-based, actionable findings"
    - "How Might We format, problem framing that opens ideation without prescribing solutions"
    - "Interview synthesis, converting raw qualitative data into structured decision inputs"
  assessment: "5 concepts at B1 level is within the 7-10 cognitive limit. The lesson builds a pipeline (interview notes -> JTBD map -> pain ranking -> insight statements -> HMW) where each stage uses the output of the previous one, providing natural scaffolding."

differentiation:
  extension_for_advanced: "Conduct 5 real customer discovery interviews for your own venture idea before running the synthesis. Compare your manual synthesis with the /discovery output: where does the skill add value, and where does it miss nuance that only you caught from the live conversation?"
  remedial_for_struggling: "Focus on two things: the JTBD map (what is the customer literally trying to do, and how do they want to feel?) and the HMW statement (frame the problem, not the solution). If you can produce a JTBD map and one HMW statement from interview notes, you have the core skill."

teaching_guide:
  key_points:
    - "Discovery must happen BEFORE ideation; you cannot generate good solutions without understanding the problem"
    - "Jobs-to-be-Done separates what the customer does (functional) from how they want to feel (emotional), both drive product decisions"
    - "Pain ranking uses frequency TIMES severity, not frequency alone: a rare but catastrophic pain can outrank a common annoyance"
    - "HMW statements should be specific enough to focus ideation but open enough not to prescribe a solution"
    - "The /discovery skill accelerates synthesis but does NOT replace the actual customer conversation"
  misconceptions:
    - "Customer discovery means asking customers what they want. Correction: discovery asks customers what they DO and how they FEEL, not what features they want. Feature requests are solutions; discovery seeks problems."
    - "More interviews always means better data. Correction: 5 well-conducted interviews with the right segment reveal more than 50 surveys. Depth of understanding matters more than sample size at the discovery stage."
    - "If customers mention a pain, it is validated. Correction: acknowledgement of pain is not the same as willingness to pay. A customer saying 'yes, that's annoying' does not mean they will buy a solution. Validation requires evidence of willingness to act."
  discussion_prompts:
    - "Think about the last product you adopted at work. Did the team that built it understand your actual workflow , or did they build what they assumed you needed? What signals would have told them the difference?"
    - "Why do most product teams skip discovery and jump straight to building? What organisational incentives push teams toward premature solutions?"
  teaching_tips:
    - "Start with the emotional jobs; they are the most memorable and most often overlooked. When students understand that a CFO's real job is 'not being blamed for AP errors,' the framework clicks."
    - "Use the AP automation example throughout: the CFO interview data is vivid and relatable. Ask students to predict the top pain before revealing the ranking."
---

# Customer Discovery and Problem Statement

Your AP automation product idea feels strong. You have spent two weeks building wireframes. The login screen looks clean, the dashboard is responsive, and the PO matching algorithm is clever. There is only one problem: you have not spoken to a single CFO. You are building a solution to a problem you have imagined.

This is the most common failure mode in innovation. Teams fall in love with their solution before they understand the problem. The Design Thinking methodology exists to prevent this , and the Empathy stage is where it starts.

In Lesson 1, you learned that the DLA Stack begins with Design Thinking at the problem level. This lesson puts that principle into practice. You will learn how to conduct customer discovery interviews, how to synthesise raw interview notes into structured insight, and how to frame the problem using the "How Might We" format: the input that drives everything else in this chapter.

## Why Discovery Comes First

The order matters. In this chapter, discovery (this lesson) comes before ideation (Lesson 4), and ideation comes before assumptions (Lesson 5). Every subsequent lesson depends on what you learn here.

| Without Discovery                          | With Discovery                             |
| ------------------------------------------ | ------------------------------------------ |
| Build what you assume customers want       | Build what customers demonstrate they need |
| Feature list driven by founder's intuition | Feature list driven by ranked pain points  |
| Problem statement is a guess               | Problem statement is grounded in evidence  |
| Pivot feels like failure                   | Pivot is a data-driven direction change    |

The `/discovery` skill accelerates the synthesis and framing stages. It does not replace the most important step: the actual conversation with the customer.

## The Jobs-to-be-Done Framework

When you interview a customer, you are not asking what features they want. You are asking what they are trying to accomplish; their _jobs to be done_. The JTBD framework, popularised by Clayton Christensen, separates customer needs into three categories:

**Functional Jobs:** What the customer is literally trying to do. For a CFO managing accounts payable: pay suppliers accurately, reconcile invoices against purchase orders, close the books on time.

**Emotional Jobs:** How the customer wants to feel. The same CFO: in control of cash flow, confident in front of the auditor, not blamed for errors that were not their fault.

**Related Jobs:** Adjacent tasks that get pulled into the primary job. The CFO again: training new finance staff on the AP process, managing vendor disputes, preparing AP reports for the board.

| Job Category | Question to Ask                                            | What It Reveals                                                       |
| ------------ | ---------------------------------------------------------- | --------------------------------------------------------------------- |
| Functional   | "Walk me through how an invoice gets paid, step by step." | The actual workflow, not the imagined one                             |
| Emotional    | "What is the most stressful part of month-end for you?"    | The pain they feel, not just the pain they report                     |
| Related      | "What other tasks get pulled into your AP process?"        | Scope that your product might need to address , or explicitly exclude |

The distinction matters because products that solve functional jobs but ignore emotional jobs fail at adoption. A CFO who feels anxious about auditor visits will not be satisfied by a tool that merely processes invoices faster; they need a tool that gives them audit confidence.

## Interview Synthesis: From Raw Notes to Insight Map

After conducting discovery interviews, you face a synthesis challenge. Ten 45-minute conversations produce hours of notes. The raw data is valuable but unusable in its current form. You need to convert it into structured insight that drives decisions.

The synthesis pipeline has four stages:

```
Raw Interview Notes
       │
       ▼
JTBD Map (functional + emotional + related jobs)
       │
       ▼
Pain Ranking (frequency × severity matrix)
       │
       ▼
Insight Statements ("We discovered that...")
       │
       ▼
HMW Problem Statements (5 variants, 1 selected)
```

### Pain Ranking: Frequency Times Severity

Not all pains are equal. A pain mentioned by 9 out of 10 interviewees but rated "minor annoyance" is less important than a pain mentioned by 6 out of 10 but rated "this nearly shut us down." The ranking must account for both dimensions.

| Rank | Pain                                   | Frequency | Severity           | Score |
| ---- | -------------------------------------- | --------- | ------------------ | ----- |
| 1    | Invoice reconciliation errors          | 9/10      | HIGH (7/10)        | 63    |
| 2    | No real-time AP visibility             | 8/10      | HIGH (6/10)        | 48    |
| 3    | WhatsApp approvals with no audit trail | 7/10      | MEDIUM-HIGH (5/10) | 35    |
| 4    | Manual vendor payment timing           | 6/10      | MEDIUM (4/10)      | 24    |
| 5    | Manual board reporting                 | 5/10      | MEDIUM-LOW (3/10)  | 15    |

The top-ranked pain, invoice reconciliation errors, drives the product direction. But notice that rank 3 (WhatsApp approvals) carries a design constraint: any solution must work with the behaviour that already exists.

### Insight Statements: The Non-Obvious Findings

An insight statement captures something you would _not_ have known without conducting discovery. It is the return on your interview investment.

**Weak insight:** "Customers want their AP process to be faster."
This is obvious. Everyone wants everything faster. It tells you nothing about what to build.

**Strong insight:** "We discovered that the core AP problem is not payment execution; it is reconciliation and audit trail. CFOs are not struggling to send money; they are struggling to prove that the right money was sent for the right reason, approved by the right person."

A strong insight passes four tests:

1. **Non-obvious:** You would not have guessed this before discovery
2. **Specific:** Names the customer segment and the context
3. **Actionable:** Implies a direction for what to build (or not build)
4. **Evidence-based:** References how many interviews support it

## Using `/discovery` for Interview Synthesis

The `/discovery` skill automates the synthesis pipeline. You provide raw interview notes; the skill produces the JTBD map, pain ranking, insight statements, and HMW problem statements.

**Worked example.** You have completed 10 CFO interviews about AP processes. You type:

```
/discovery
I have completed 10 customer discovery interviews with CFOs of
mid-market companies about their AP processes. Here are my
condensed notes from all 10:
[Paste interview notes]

Produce:
1. A Jobs-to-be-Done map (functional, emotional, related jobs)
2. Top 5 pain points ranked by frequency and severity
3. Top 3 insight statements ("We discovered that...")
4. The most vivid customer quote per pain point
5. What we still need to learn
```

**What to expect.** The skill produces a structured synthesis. Here is a condensed version of the output for the AP automation interviews:

```
CUSTOMER DISCOVERY SYNTHESIS
Product: AP Automation | Interviews: 10 CFOs, mid-market companies
════════════════════════════════════════════════════════════
JOBS-TO-BE-DONE MAP:

 FUNCTIONAL JOBS:
 - Pay suppliers accurately, on time, with clean audit trail (10/10)
 - Reconcile payments against POs and delivery notes (9/10)
 - Manage cash flow by timing payments (8/10)
 - Close the books monthly without AP being the bottleneck (8/10)

 RELATED JOBS:
 - Resolve vendor disputes (8/10)
 - Train new finance staff on the AP process (6/10)

 EMOTIONAL JOBS:
 - In control; no surprise payments, no missed vendors (9/10)
 - Confident in front of the auditor (8/10)
 - Not blamed for cash flow problems caused by AP errors (5/10)

TOP 5 PAIN POINTS (frequency x severity):

 RANK 1: Invoice reconciliation errors (9/10; HIGH severity 7/10)
 Current state: Manual matching to POs in Excel. Average 3-5
 errors per month. One CFO estimated 40 person-hours/month
 on error correction alone.

 RANK 2: No real-time AP visibility (8/10; HIGH 6/10)
 Current state: CFOs cannot see outstanding payables without
 pulling an Excel report that is always out of date.

 RANK 3: WhatsApp approval without audit trail (7/10; MED-HIGH 5/10)
 Current state: Approvals happen on WhatsApp. No audit trail.
 Cannot prove who approved what.

INSIGHT STATEMENTS:
 "We discovered that the core AP problem is not payment execution
 ; it is reconciliation and audit trail."
 "We discovered that WhatsApp is the de facto AP workflow tool,
  not by design, but by default."
 "We discovered that finance team turnover makes the AP problem
  worse: knowledge lives in people's heads, not documented processes."

VIVID QUOTES:
 "My auditor visits are the most stressful two weeks of my year,
  and 80% of the stress is AP-related.": CFO, $20M manufacturer

WHAT WE STILL NEED TO LEARN:
 1. What are CFOs actually willing to pay?
 2. Who makes the purchase decision, CFO alone or jointly with CEO?
 3. What is the integration requirement with existing ERPs?
════════════════════════════════════════════════════════════
```

:::note Your output will vary
The specific wording depends on the notes you provide. The teaching point is the structure: JTBD map with frequency counts, pain ranking by frequency times severity, non-obvious insight statements grounded in data. Verify the logic of the synthesis , not the exact phrasing.
:::

## The "How Might We" Problem Statement

With synthesis complete, you convert insights into a problem statement that guides ideation. The "How Might We" (HMW) format is specific enough to focus your team but open enough not to prescribe a solution.

You generate HMW statements from the synthesis using `/discovery`:

```
/discovery
Based on the customer discovery synthesis above, generate 5
alternative problem statement framings using the "How Might We"
format. Each should capture a different lens on the problem.
Then recommend which one to use as the primary innovation brief
and why.
```

**Sample output: five lenses on the same problem:**

| HMW   | Lens           | Statement                                                                                                                                                                                      |
| ----- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HMW-1 | Audit Trail    | "How might we give mid-market CFOs a complete, real-time audit trail of every AP decision, from invoice receipt to payment, without adding steps to their existing WhatsApp-based workflow?" |
| HMW-2 | Reconciliation | "How might we eliminate AP reconciliation errors so that month-end close is not driven by error correction?"                                                                                   |
| HMW-3 | Confidence     | "How might we give CFOs the confidence to face their auditor without AP anxiety, knowing that every invoice, approval, and payment is documented, searchable, and defensible?"                |
| HMW-4 | Constraint     | "How might we bring structure and compliance to the WhatsApp-based AP workflow that CFOs already use, rather than asking them to change their behaviour?"                                     |
| HMW-5 | Training       | "How might we make AP process knowledge self-documenting so that finance team turnover stops being the primary cause of AP errors?"                                                            |

**Recommended primary: HMW-3 (Confidence)**. It captures the most emotionally resonant theme from discovery, audit anxiety was mentioned in 8 of 10 interviews. It frames the problem as a desired state (confidence) rather than a feature (audit trail), which keeps ideation open. It creates a testable north star: "Did this make the CFO confident in front of their auditor?"

**Secondary: HMW-4 (Constraint)**. Any solution must work with existing WhatsApp behaviour, not against it.

:::info Five Lenses for HMW Generation
A strong HMW set covers multiple lenses: **Solution** (what the product does), **Outcome** (what the customer achieves), **Emotional** (how the customer feels), **Constraint** (the behaviour they already have), and **Systemic** (the root cause, not the symptom). If all your HMW statements sound the same, you are looking at the problem from only one angle.
:::

:::note For Intrapreneurs
If you are innovating inside an existing organisation, your "customers" may be internal users, colleagues in another department, field teams, or existing external customers. The discovery process is identical: interview them, map their jobs to be done, rank their pains, and frame the problem. The difference is access: you can often reach internal customers faster (they are down the hall), but you face a different bias; they may tell you what they think management wants to hear rather than what they actually experience. Probe for workarounds: "Show me how you actually do this, not how the process manual says you should."
:::

## Exercise: Customer Discovery Synthesis Sprint

**Type:** Design Thinking, Empathise + Define
**Time:** 75 minutes
**Goal:** Synthesise real or realistic customer discovery interviews into an insight map, pain ranking, and HMW problem statement

This exercise is the foundation for every subsequent exercise in this chapter. The problem statement you produce here drives ideation (Lesson 4), assumptions (Lesson 5), and everything after.

**Step 1, Conduct or construct 5 interviews (30 minutes).**

Option A (preferred): Conduct 5 real conversations (30 minutes each) with people who experience your chosen problem. Take structured notes.

Option B: If you cannot conduct real interviews in the time available, construct realistic notes based on your best knowledge of 5 different types of people who have this problem. Be honest about what is assumption versus knowledge.

For each interview, note:

- **Who:** Role and context
- **Current solution:** How they solve this today
- **Key pains mentioned:** Specific frustrations; use their words
- **Key gains desired:** What success looks like for them
- **Surprising things:** Anything unexpected
- **Quotes:** Verbatim if possible

**Step 2, Synthesise using `/discovery` (20 minutes).**

Paste your raw notes into Cowork with the `/discovery` command:

```
/discovery
Synthesise these 5 customer discovery interviews.
[Paste your notes, raw format is fine]

Produce:
1. Jobs-to-be-Done map (functional, emotional, related jobs)
2. Pain ranking (frequency x severity matrix)
3. Three "We discovered that..." insight statements
4. The most vivid customer quote per pain
5. What we still need to learn
6. A revised "How Might We" problem statement based on what we learned
```

**Step 3, Evaluate the synthesis (15 minutes).**

Review the `/discovery` output against your own understanding of the interviews. Ask yourself:

- Does the JTBD map capture the jobs you heard? Are any missing?
- Does the pain ranking match your intuition from the conversations? If not, is the skill's ranking or your intuition more accurate?
- Are the insight statements genuinely non-obvious , or are they just summaries of what customers said?
- Does the HMW statement frame a problem worth solving, or does it prescribe a solution?

If the synthesis misses something important, correct it:

```
The synthesis missed a key finding: [describe what was missed
and which interviews support it]. Please revise the JTBD map
and pain ranking to include this.
```

**Step 4, Problem statement validation (10 minutes).**

Compare your HMW statement to the problem you thought you were solving when you started. Did the customer data change your understanding? Write a short paragraph explaining what shifted , or confirming that your initial framing held up.

**Deliverable:** A 5-interview synthesis containing: JTBD map, pain ranking matrix, 3 insight statements, revised HMW problem statement, and a reflection on what you learned. Save this deliverable; you will use it as input for the Idea Generation Sprint in Lesson 4 and the Assumption Stack in Lesson 5.

:::note Keep This File
The synthesis and HMW statement you produce here feeds directly into the exercises in Lessons 4, 5, and 8. Keep it in your Cowork session: each subsequent lesson builds on this foundation.
:::

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce:** Run the chapter's worked example:

```
Generate a customer discovery interview guide for:
Product: AP automation SaaS
Target: CFO, mid-market company ($5M-$50M revenue)
Stage: Problem discovery (not solution validation)
Duration: 45 minutes
Goal: Understand their current AP process, pain points, and
what a solution would need to do to be worth paying for.
Style: Jobs-to-be-done framework; no leading questions
```

**What you are learning:** An interview guide structures the conversation so you discover what customers do and feel, not what they think you want to hear. Notice the protocol notes: listen 80%, never mention your product, probe workarounds.

**Adapt:** Modify for a different context:

```
Generate a customer discovery interview guide for:
Product: [Your product idea or problem area]
Target: [Your target customer, be specific about role and context]
Stage: Problem discovery
Duration: 30 minutes
Goal: Understand how they currently handle [the problem]
and what frustrates them most.
Style: Jobs-to-be-done framework; no leading questions
```

**What you are learning:** Adapting the interview structure to your own domain forces you to define who your customer actually is and what you want to learn from them: two decisions most teams skip.

**Apply:** Synthesise your own data:

```
I have conducted [N] interviews about [problem area]. Here are
my notes:
[Paste your actual interview notes]

Synthesise into:
1. Jobs-to-be-Done map (functional, emotional, related jobs)
2. Pain ranking (frequency x severity)
3. Three insight statements
4. A "How Might We" problem statement
5. What I still need to learn
```

**What you are learning:** Running your real data through the synthesis pipeline reveals patterns you missed in the individual conversations. The JTBD map and pain ranking give you a structured foundation for every subsequent lesson in this chapter.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 4: Hundred Ideas, One Hour →](./04-hundred-ideas-one-hour.md)
