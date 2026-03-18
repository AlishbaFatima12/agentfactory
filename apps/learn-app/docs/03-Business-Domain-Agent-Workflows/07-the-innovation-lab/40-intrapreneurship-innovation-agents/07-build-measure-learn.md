---
slug: /Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/build-measure-learn
sidebar_position: 7
title: "Build-Measure-Learn"
description: "Analyse pilot results against your assumption map, identify which assumptions were validated or invalidated, classify unexpected learnings, and make a data-driven pivot-or-persevere decision using the /validate skill"
keywords:
  [
    "build measure learn",
    "BML loop",
    "pivot or persevere",
    "pilot analysis",
    "validated learning",
    "invalidated assumption",
    "pivot types",
    "lean startup",
    "evidence quality",
    "zoom-in pivot",
    "customer segment pivot",
    "innovation agents",
  ]
chapter: 40
lesson: 7
duration_minutes: 35

# HIDDEN SKILLS METADATA
skills:
  - name: "Conduct a Build-Measure-Learn analysis on pilot data to produce validated or invalidated assumption status"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can take pilot results (adoption rates, payment data, accuracy metrics, customer feedback) and produce a structured BML analysis where each critical assumption is assigned VALIDATED/INVALIDATED/INCONCLUSIVE with specific evidence rather than subjective impressions"

  - name: "Identify the correct pivot type when a critical assumption is invalidated"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can match the nature of an invalidated assumption to the appropriate pivot type from the eight-type taxonomy (zoom-in, zoom-out, customer segment, customer need, platform, business architecture, technology, channel) and articulate what is preserved and what changes in the pivot"

learning_objectives:
  - objective: "Map pilot results to specific assumptions and classify each as VALIDATED, INVALIDATED, or INCONCLUSIVE"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student produces a BML analysis where each of the three critical assumptions from the MVP is assigned a status with specific evidence ('2 of 3 pilots signed at $500' not 'customers were interested in paying')"

  - objective: "Apply the evidence quality hierarchy to assess whether pilot data constitutes genuine validation"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student correctly categorises evidence types: payment or sustained usage = VALIDATED; stated intent or interest = ANECDOTAL. Student can identify which AP pilot results meet the VALIDATED threshold and which do not."

  - objective: "Select the appropriate pivot type for an invalidated assumption and articulate what validated learning is preserved"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Given an invalidated assumption, student identifies the relevant pivot type and specifies: what the pivot changes, what learning from the MVP is preserved, and what must be re-tested in the next iteration"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "BML loop — Build, Measure, Learn as a closed feedback system"
    - "Eight pivot types — taxonomy for classifying direction changes after assumption failure"
    - "Evidence quality hierarchy — seven levels from payment+renewal down to stated problem awareness"
    - "Pivot decision checklist — four conditions that must be met before recommending a pivot"
  assessment: "4 concepts at B1 level. This lesson applies prior concepts (assumption mapping from L05) rather than introducing entirely new frameworks. The BML analysis is the culmination of Lessons 5 and 6 — students are not learning a new system, they are completing one."

differentiation:
  extension_for_advanced: "After completing the AP pilot BML analysis, model the impact of the unexpected learnings on the business model. The 30% handwritten invoice rate changes the technical complexity and potentially the pricing. The remittance email request suggests a new feature. How do you decide which unexpected learning to act on first? What criteria would you use?"
  remedial_for_struggling: "Focus on one assumption at a time. For each critical assumption in your MVP, ask three questions: (1) What did we specifically measure? (2) Does that measurement meet the VALIDATED threshold (payment or sustained usage)? (3) If not, what is the status — INVALIDATED or INCONCLUSIVE? Do not move to pivot analysis until you have answered these three questions for each assumption."

teaching_guide:
  key_points:
    - "VALIDATED means customers paid or sustained usage — not enthusiasm, not 'they said they would use it'"
    - "Unexpected learnings are often more valuable than the expected ones — they reveal assumptions you did not know you were making"
    - "The pivot decision checklist prevents premature pivots driven by impatience rather than data"
    - "A good pivot preserves validated learning — it changes direction, not everything"
    - "Inconclusive is a valid result — it means you ran the test but cannot draw a conclusion, and you need to redesign the test"
  misconceptions:
    - "If the pilot was mostly successful, you persevere. Correction: the pivot-or-persevere decision is assumption-by-assumption, not overall. You can persevere on the business model while pivoting on the channel."
    - "Unexpected findings are noise. Correction: unexpected findings are often the most valuable signal in a pilot. The AP pilot's discovery that 30% of invoices were handwritten was not in the original assumption map — but it fundamentally changed the V1 roadmap."
    - "One pilot is enough to validate an assumption. Correction: the pivot decision checklist requires at least 2 iterations of the same test before drawing a conclusion. One pilot is a data point; a pattern requires multiple tests."
  discussion_prompts:
    - "In the AP pilot, Pilot 3 had only 45% adoption — well below the 70% success criterion. Should the team pivot on adoption, or investigate why Pilot 3 was different? What additional data would you need?"
    - "The unexpected finding about remittance emails is a customer-discovered feature request. How do you decide whether to add it to V1 or keep it for V2? What criteria would you use?"
  teaching_tips:
    - "The AP pilot data is rich enough to run a full BML analysis. Walk students through each assumption status before revealing the recommendation — have them predict the persevere/pivot decision based on the data."
    - "The 30% handwritten invoice finding is a teaching moment for unexpected learnings: the team had assumed this was a rare edge case, but it was nearly a third of all invoices. This changes the accuracy target significantly."
---

# Build-Measure-Learn

You built the MVP. You ran the pilot. You have data.

Now comes the step that most teams get wrong: interpreting what the data actually says versus what you hoped it would say. Six weeks of working with pilot customers creates emotional investment. You know the customers' names. You saw the product working. It is psychologically difficult to look at the adoption numbers objectively when you want them to be higher.

The Build-Measure-Learn analysis exists to separate the learning from the emotion. It maps pilot results to specific assumptions, classifies evidence against a quality standard, and produces a structured pivot-or-persevere recommendation — before the team has a chance to rationalise their way to the conclusion they want.

In Lesson 6, you designed the MVP and pre-agreed the success and failure criteria. Now you apply those criteria to the pilot results.

## The Build-Measure-Learn Loop

The BML loop is not a process you do once at the end of a pilot. It is a continuous feedback system where each iteration produces specific learnings that update the venture's assumption stack.

```
BUILD ──► MEASURE ──► LEARN
  ▲                      │
  └──────────────────────┘
       (next iteration)
```

**Build**: The smallest thing that tests the critical assumptions — your MVP from Lesson 6.

**Measure**: Specific metrics mapped to success criteria. Not vanity metrics ("total sign-ups") but learning metrics ("percentage of invoices processed through the system by Week 4").

**Learn**: Three types of output — validated assumptions, invalidated assumptions, and unexpected learnings. All three matter. Unexpected learnings reveal assumptions you did not know you were making.

## Evidence Quality: What Counts as Validation

Before interpreting pilot results, you need a shared standard for what constitutes validation. Without this standard, teams drift toward motivated reasoning — finding evidence that the pilot succeeded regardless of what the data says.

The evidence hierarchy runs from most to least reliable:

| Level | Evidence Type | What It Means |
| --- | --- | --- |
| 1 | Customer paid AND renewed | Revealed preference over time — the strongest signal |
| 2 | Customer paid once | Revealed preference at a moment in time |
| 3 | Customer signed a letter of intent with specific terms | Serious intent with terms attached |
| 4 | Customer used the product N times without prompting | Behavioural adoption without hand-holding |
| 5 | Customer said they would pay a specific amount in an interview | Stated intent — useful but not validated |
| 6 | Customer said the problem is real and painful | Problem acknowledgment — not solution validation |
| 7 | Multiple people described the same problem | Signal that the problem exists — not that your solution works |

**VALIDATED** requires Level 1, 2, or 4. Paying customers and unprompted usage are the only behaviours that reveal genuine value.

"They said they loved it" is Level 5 at best. Enthusiasm without payment is not validation. This is the most common misreading of pilot results: teams hear positive feedback and call the assumption validated. The test of validation is not what customers say — it is what they do.

## The AP Automation Pilot Results

After eight weeks of build and four weeks of pilot operation, you run the BML analysis:

```
/validate
Our MVP ran for 6 weeks with 3 pilot customers. Here is what we measured:

Payments and pricing:
- Pilot 1 and Pilot 2 signed at $500/month
- Pilot 3 signed at $350/month (this pilot is a smaller company,
  lower revenue, requested a lower tier)

AI accuracy:
- Overall accuracy: 91% (target was >90% — just met)
- Accuracy on handwritten invoices: 87%
- Unexpected finding: approximately 30% of invoices were handwritten —
  higher than our estimate of 10-15%

Adoption:
- Pilot 1: 89% of invoices processed through the system by Week 4
- Pilot 2: 71% of invoices processed through the system by Week 4
- Pilot 3: 45% of invoices processed through the system by Week 4
  (Note: Pilot 3 had 3 new finance staff join in the 6-week period)

Qualitative feedback:
- All 3 CFOs: "I would be comfortable showing this to my auditor"
- Unexpected request from 2 CFOs: automated vendor payment remittance
  emails — they had to send these manually; they expected them to be
  part of the system

Conduct a build-measure-learn analysis:
1. Which assumptions were validated / invalidated / inconclusive?
2. What unexpected learnings emerged?
3. Pivot, persevere, or pivot on a specific element?
4. V1 priorities based on what we learned
```

**Sample BML analysis output:**

```
BUILD-MEASURE-LEARN ANALYSIS
Pilot: MVP | Period: 8-week build + 4-week pilot | 3 customers
════════════════════════════════════════════════════════════
WHAT WE TESTED:
 Learning goal: A-001 (price), A-002 (AI accuracy), A-005 (adoption)
 Method: Paid pilot with 3 mid-market CFOs
 Sample: 3 customers; approximately 4 weeks of invoice processing data

WHAT WE MEASURED:
 Pricing ($500/month target): 2/3 at $500; 1 at $350 — PARTIAL
 AI accuracy (>90% target): 91% overall; 87% handwritten — PARTIAL
 Adoption (>70% by Week 4): 89%/71%/45% — MIXED

ASSUMPTION OUTCOMES:
 A-001 (CFOs pay $500/month):
   Status: PARTIALLY VALIDATED
   Evidence: 2 of 3 pilots paid $500/month (Level 2 — paid once).
     1 pilot required $350 — this is a different customer segment
     (smaller company, lower revenue), not a pricing failure.
   Confidence: MEDIUM — 3 pilots is a small sample. The pattern suggests
     $500 works for the target segment ($5M-$50M); need 3-5 more to confirm.
   Update: Consider a formal pricing tier ($500/month mid-market;
     $350/month SME under $5M revenue) to avoid losing deals.

 A-002 (AI accuracy >90% on invoice formats):
   Status: PARTIALLY VALIDATED
   Evidence: 91% overall meets the MVP threshold. 87% on handwritten
     invoices misses the target — but handwritten invoices were 30% of
     volume, not the 10-15% assumed.
   Confidence: MEDIUM — 3 customer data sets. Directionally positive;
     needs larger sample to confirm.
   Implication: Handwritten invoice accuracy is a more critical problem
     than assumed. V1 must address this; not a V2 deprioritisation.

 A-005 (adoption >70% by Week 4):
   Status: MIXED
   Evidence: 89% (Pilot 1) and 71% (Pilot 2) validate the assumption.
     45% (Pilot 3) does not — but the context is confounding: 3 new
     finance staff in 6 weeks is an unusually high disruption.
   Confidence: MEDIUM — the adoption failure in Pilot 3 may be a
     people/change management issue, not a product issue.
   Next step: Re-measure Pilot 3 adoption after staff onboarding
     stabilises (Week 8-10) before concluding adoption fails.

UNEXPECTED LEARNINGS:
 1. Handwritten invoices are ~30% of volume (assumed: 10-15%)
    Implication: Handwritten OCR accuracy is a TIER 2 assumption,
    not a V2 feature. Must be addressed in V1.

 2. Remittance email automation is expected behaviour
    Implication: Customers assumed remittance emails were included.
    This is a simple feature with high perceived value — a quick win
    for V1 that removes a manual step for the CFO.

PIVOT OR PERSEVERE:
 Recommendation: PERSEVERE with two specific additions.
 Rationale: The critical assumptions held on 2/3 metrics. The failures
   are explainable and actionable — not fundamental product-market fit
   problems. There is no evidence of a TIER 1 invalidation.

 Next steps before V1 build:
   1. Re-test Pilot 3 adoption at Week 8-10
   2. Add handwritten invoice accuracy improvement to V1 sprint 1
   3. Add remittance email automation to V1 sprint 1 (quick win)
   4. Formalise pricing tier ($500/$350) in next 3 outreach conversations

 innov.local.md updates:
   - A-001: Update to ANECDOTAL with pricing tier insight
   - A-002: Update to ANECDOTAL with handwritten accuracy note
   - A-005: INCONCLUSIVE pending Pilot 3 re-measurement
   - New assumption: A-011: Handwritten OCR accuracy >90% achievable
     with V1 model improvement (currently ASSUMED)
════════════════════════════════════════════════════════════
```

## Pivot Types: Eight Ways to Change Direction

When the BML analysis produces an INVALIDATED assumption, the next question is: which type of pivot is appropriate? Not all direction changes are the same. Identifying the pivot type prevents overcorrection — changing everything when only one dimension needs to change.

**Zoom-in pivot** — One feature of the product becomes the whole product.
Use when: one aspect of the MVP is getting disproportionate engagement. ("They love the WhatsApp approval workflow but ignore the dashboard.")

**Zoom-out pivot** — The whole product becomes one feature of a larger product.
Use when: the product is not sufficient to solve the problem on its own. ("AP automation needs to be part of a broader finance operations platform.")

**Customer segment pivot** — Same product; different customer.
Use when: the product works, but for a different customer than expected. ("The SME segment at $350/month is responding better than the mid-market at $500/month.")

**Customer need pivot** — Same customer; different problem.
Use when: you know the customer well but chose the wrong problem to solve. ("CFOs need help with vendor payment terms negotiation more than AP automation.")

**Platform pivot** — Application becomes a platform, or vice versa.
Use when: the product is more valuable as infrastructure for others to build on. ("Give banks and ERP vendors API access to the AP matching engine.")

**Business architecture pivot** — High-margin, low-volume becomes low-margin, high-volume (or reverse).
Use when: unit economics only work at a scale you cannot reach with your current go-to-market. ("The $500/month model needs to be a $50/month volume play.")

**Technology pivot** — Same positioning; different technology.
Use when: the current technology cannot achieve the required accuracy, scale, or cost. ("AI matching is not reaching 90% accuracy; switch to rule-based matching with human review.")

**Channel pivot** — Same product; different distribution.
Use when: the product works but the channel is too expensive or too slow. ("Direct sales to CFOs takes 3 months; partner with accounting firms for reseller distribution.")

### The Pivot Decision Checklist

Before recommending a pivot, verify four conditions:

1. **Two iterations minimum** — Have you run at least two tests of the same approach? One failure is a data point. A pattern requires multiple tests.
2. **Behaviour over opinion** — Is the invalidation based on what customers did, or what they said? Customers who say "I wouldn't use this" sometimes do. Customers who do not use it after four weeks are telling you something behavioural.
3. **Team readiness** — Is the team emotionally ready for a pivot? A pivot decided under stress often targets the wrong dimension.
4. **Preserved learning** — What is still true? A good pivot preserves the learning from the MVP and changes only the dimension that is broken.

:::note For Intrapreneurs
Inside an existing organisation, the pivot decision has an additional variable: organisational appetite. An intrapreneur whose pilot showed mixed adoption results faces a different decision than a startup founder. The question is not just "should we pivot?" but "can we get internal sponsorship to continue at all?" The BML analysis gives you the evidence to make the case — either for the pivot or for another iteration. The evidence quality standard is the same: behaviour over statements, payment (or budget approval) over enthusiasm.
:::

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce** — Run the AP pilot BML analysis:

```
/validate
Our AP automation MVP ran for 6 weeks with 3 pilot customers.
Results:
- 2 of 3 pilots at $500/month; 1 pilot at $350/month
- AI matching accuracy: 91% overall; 87% on handwritten invoices
  (handwritten invoices were ~30% of volume — higher than expected)
- Invoice adoption by Week 4: Pilot 1: 89%; Pilot 2: 71%; Pilot 3: 45%
  (Pilot 3 had 3 new finance staff during the pilot period)
- All 3 CFOs: "I would be comfortable showing this to my auditor"
- Unexpected: 2 CFOs requested automated vendor remittance emails
  (not in MVP; they had to send manually)

Critical assumptions we were testing:
- A-001: CFOs pay $500/month (target: 3 signed pilots at $500)
- A-002: AI accuracy >90% (target: >90% overall accuracy)
- A-005: Finance team adoption (target: >70% of invoices through
  system by Week 4 of pilot)

Produce: Assumption outcome per assumption (VALIDATED/INVALIDATED/
INCONCLUSIVE), unexpected learnings with implications, and
pivot-or-persevere recommendation.
```

**What you are learning:** Notice that the BML analysis does not declare the pilot a success or failure overall — it assesses each assumption independently. Pilot 3's 45% adoption and the handwritten invoice finding are both important signals, but they point to different actions. The analysis separates them so you can act on each specifically.

**Adapt** — Analyse a different pilot outcome:

```
/validate
Our marketplace MVP ran for 4 weeks.
Results:
- Designer side: 12 designers signed up; 8 completed their first project
- Buyer side: 25 businesses signed up; 6 paid for projects ($99–$299)
- Match time: Average 31 hours (target was <24 hours)
- Buyer satisfaction: 5/6 paying buyers rated project "good" or "excellent"
- Unexpected: 3 buyers asked about a monthly retainer model

Assumptions tested:
- A-001: Businesses pay $99+ for on-demand design work
- A-002: Matching takes <24 hours with curated shortlist
- A-003: Designers accept 70% revenue share

Produce: BML analysis with assumption status, pivot-or-persevere, V1 priorities.
```

**What you are learning:** A marketplace pilot produces different assumption status patterns than a SaaS pilot — both the supply side (designers) and demand side (buyers) must validate. Notice that 6 paying buyers from 25 sign-ups (24% conversion) raises new questions: is the sign-up to payment conversion too low, or is 24% strong for a new marketplace?

**Apply** — Analyse your own pilot results:

```
/validate
I ran a pilot with these results:
[Describe your pilot setup]
[Paste your metrics — adoption, payment, usage, feedback]
[Note any unexpected findings]

My critical assumptions were:
- A-001: [Description and target]
- A-002: [Description and target]
- A-003: [Description and target]

Produce: BML analysis with assumption status, unexpected learning
implications, and pivot-or-persevere recommendation.
```

**What you are learning:** Comparing the AI's pivot recommendation to your own intuition about the results reveals whether you are interpreting the data objectively or through the lens of what you hoped would happen. If your instinct says "persevere" but the evidence points to an invalidated TIER 1 assumption, the BML analysis is doing its job.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 8: Business Model Canvas →](./08-business-model-canvas.md)
