---
slug: /Business-Domain-Agent-Workflows/product-management/discovery-briefs-framing-problems
sidebar_position: 3
title: "Discovery Briefs — Framing the Right Problem"
description: "Learn to reframe feature requests into structured problem briefs using the /brief command from the product-strategy plugin, and evaluate whether AI-generated briefs maintain problem-focus without smuggling in premature solutions"
keywords:
  [
    "product management",
    "discovery brief",
    "problem brief",
    "problem framing",
    "product discovery",
    "feature request reframing",
    "product-strategy plugin",
    "scope boundary",
  ]
chapter: 36
lesson: 3
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Reframe a feature request into a structured problem brief using /brief"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can take a solution-prescriptive feature request, invoke /brief to produce a problem brief, and verify that the output contains no solution proposals in the problem statement"

  - name: "Evaluate an AI-generated problem brief against the NEVER DO rules from the /brief skill spec"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can identify where an AI-generated brief smuggles in solution language, omits the 'what we do not know' section, or lacks a clear next step — and can prompt the agent to correct each violation"

learning_objectives:
  - objective: "Distinguish between solution-prescriptive and problem-focused framing in PM documentation"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can classify three example requests as solution-prescriptive or problem-focused and explain why each classification is correct"

  - objective: "Produce a complete problem brief for a feature request using the /brief command and evaluate the output against the skill spec's quality rules"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student invokes /brief with an InsightFlow feature request, receives a problem brief, and identifies at least two quality issues or confirms compliance with the NEVER DO rules"

  - objective: "Correct an AI-generated brief that violates problem-focus by editing the prompt to redirect the agent away from solution proposals"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student identifies solution language in a brief and crafts a follow-up prompt that produces a corrected version without the solution proposals"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Solution-prescriptive vs. problem-focused framing"
    - "Problem brief structure (problem → affected users → evidence → impact → unknowns → discovery questions)"
    - "The /brief command and its three brief types"
    - "NEVER DO rules as evaluation criteria for AI-generated briefs"
  assessment: "4 concepts at B1-B2 level. The distinction between solution-prescriptive and problem-focused framing is the lesson's anchor — once students grasp this, the brief structure follows logically as a format that enforces problem-focus. The /brief command is introduced after the concept is established, so the tool serves a principle the student already understands."

differentiation:
  extension_for_advanced: "Run /brief with all three brief types (Problem Brief, Discovery Brief, Initiative Brief) for the same feature request. Compare the outputs. When would you use each type? Write a decision tree: 'If you are at stage X, use brief type Y.' Then test your decision tree against three real feature requests from your backlog."
  remedial_for_struggling: "Start with the contrast table (solution-prescriptive vs. problem-focused). Take one feature request you have received recently and write just the PROBLEM section by hand — two sentences describing what is happening that should not be happening. Do not mention any feature, tool, or solution. Once you can write a clean problem statement, run /brief and compare its output to yours."

teaching_guide:
  key_points:
    - "The most common PM mistake is jumping from a feature request to a solution without understanding the problem — discovery briefs force the pause between request and response"
    - "A problem brief contains NO solution proposals — this is not a stylistic preference, it is a structural rule that prevents premature anchoring on one approach"
    - "The 'what we do not know' section is the most valuable part of the brief — it makes uncertainty explicit and defines the discovery work needed before a spec can be written"
    - "The /brief command enforces the brief format, but the PM's job is to evaluate whether the agent maintained problem-focus or smuggled in solution language"
  misconceptions:
    - "A problem brief is just a less detailed PRD. Correction: a problem brief is a fundamentally different document. A PRD describes what to build. A problem brief describes what is wrong and what we need to learn. Writing a PRD before a problem brief means you have committed to a solution before understanding the problem."
    - "Including a hypothesis in a problem brief violates the 'no solutions' rule. Correction: a hypothesis is acceptable IF it is clearly framed as a hypothesis ('We believe that X will...') not as a requirement. The rule prohibits solution proposals presented as conclusions, not directional thinking presented as testable assumptions."
    - "The AI will always produce a perfect problem brief if you give it the right prompt. Correction: the agent frequently smuggles solution language into the PROBLEM section, omits the unknowns, or writes vague discovery questions. Evaluating and correcting the output is the PM skill this lesson teaches."
  discussion_prompts:
    - "Your CEO sends you a Slack message: 'We need to add a Slack integration by Q3 — three enterprise prospects asked for it.' How would you respond? What is the problem brief version of this request? What discovery questions would you need to answer before committing to a Slack integration specifically?"
    - "You run /brief on a feature request and the output includes 'PROPOSED SOLUTION: Build a notification centre with configurable alerts' in the problem statement. The solution sounds reasonable. Why is it still wrong to include it in the problem brief? What happens if you leave it in?"
  teaching_tips:
    - "The 'build a dashboard' example is the lesson's anchor. Most students have received exactly this kind of request. Let them recognise the pattern before showing the reframe — the 'aha' moment comes from seeing their own experience reflected."
    - "When students evaluate /brief output, they often miss solution language that is disguised as context ('users need a way to...' is solution-adjacent). Teach them to look for verbs that imply a feature: 'view', 'access', 'filter', 'configure'. In a problem statement, the verbs should describe the current pain: 'wait', 'lose', 'miss', 'cannot'."
---

# Discovery Briefs — Framing the Right Problem

Someone walks up to your desk and says: "We need to build a dashboard for our enterprise customers." You hear this and your instinct is to start scoping — what data do we show? What filters? What layout? Within ten minutes you are sketching wireframes. Within an hour you have a ticket in Linear.

Stop. What is the actual problem?

Maybe enterprise customers are churning because they cannot prove ROI to their CFO. Maybe the sales team is losing deals because prospects cannot see how the product performs at scale. Maybe customer success managers are spending four hours a week manually pulling metrics for quarterly business reviews. Each of these is a different problem. Each leads to a different solution — and only one of those solutions might be a dashboard. If you start building the dashboard without understanding which problem you are solving, you will ship a feature that looks right but solves nothing.

This lesson teaches you to pause between the request and the response. The tool is the **problem brief** — a structured document that reframes "build X" into "here is what is actually wrong, who it affects, and what we need to learn before we decide what to build." You will use the `/brief` command from the custom `product-strategy` plugin to generate briefs, and — critically — you will learn to evaluate whether the AI's output actually maintains problem-focus or quietly smuggles in the solution you were trying to avoid.

## Solution-Prescriptive vs. Problem-Focused

Every feature request arrives in one of two forms. Recognising which form you are dealing with is the first PM skill this lesson builds.

| Dimension             | Solution-Prescriptive                               | Problem-Focused                                                                      |
| --------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Sounds like**       | "We need a dashboard"                               | "Enterprise customers cannot demonstrate ROI"                                        |
| **Verbs used**        | Build, add, create, integrate, launch               | Struggle, lose, wait, miss, churn                                                    |
| **Anchoring risk**    | High — the team converges on the named solution     | Low — the team explores the problem space                                            |
| **Discovery outcome** | Validates the proposed solution (confirmation bias) | Discovers the right solution (evidence-based)                                        |
| **Example**           | "Add a Slack integration"                           | "Customers miss critical alerts because notifications only exist inside the product" |

Most feature requests arrive solution-prescriptive. This is natural — stakeholders think in terms of features because features are concrete and easy to communicate. But the PM's job is to translate "build X" into "because of Y" before committing engineering resources.

:::info The Cost of Skipping the Reframe
A B2B SaaS team that ships a feature without understanding the problem typically discovers the misalignment 6-8 weeks after launch, when adoption data shows the feature is not solving the issue customers actually had. At that point, the team has spent a full quarter on a solution to the wrong problem — and the real problem is still unsolved.
:::

## The Problem Brief Structure

The `/brief` command produces three types of briefs. This lesson focuses on the **Problem Brief** — the document you write at the start of discovery, before any solution work begins.

A problem brief has seven sections, and each one serves a specific purpose:

| Section                     | Purpose                                                       | What belongs here                                                                              | What does NOT belong here                                     |
| --------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **THE PROBLEM**             | State what is happening that should not be happening          | Observable pain, current behaviour, gap between expectation and reality                        | Feature names, solution proposals, implementation details     |
| **WHO IS AFFECTED**         | Identify the persona(s) and quantify the audience             | Persona name, segment, approximate count                                                       | "All users" (too vague)                                       |
| **EVIDENCE**                | Ground the problem in data, not opinion                       | Support tickets, NPS verbatim, behavioural data, lost deal notes, research quotes with sources | Anecdotes without sources, assumptions presented as data      |
| **IMPACT OF NOT SOLVING**   | Make the cost of inaction concrete                            | Revenue at risk, churn projections, competitive exposure, team time wasted                     | Vague urgency ("this is important")                           |
| **WHAT WE DO NOT KNOW YET** | Make uncertainty explicit                                     | Open questions, untested assumptions, gaps in evidence                                         | Nothing — this section must always be present                 |
| **HYPOTHESIS** (optional)   | State a directional bet as a testable assumption              | "We believe that X will solve Y. We will know when Z."                                         | "We should build X" (that is a requirement, not a hypothesis) |
| **DISCOVERY QUESTIONS**     | Define what research must answer before a spec can be written | 3-5 specific, answerable questions                                                             | "Explore user needs" (too vague to act on)                    |

:::caution The Most Important Section
The **WHAT WE DO NOT KNOW YET** section is what separates a problem brief from a stakeholder request dressed up in a template. If your brief does not have this section — or if the section says "N/A" — it is not a problem brief. It is a solution proposal wearing a problem brief's clothing. Acknowledging uncertainty is strength, not weakness.
:::

## Worked Example: Reframing "Build a Dashboard" for InsightFlow

Here is the feature request that arrived in your InsightFlow Slack channel from Aisha Patel, Head of Sales:

> "We need a dashboard for enterprise customers. Three prospects in the last month asked for reporting capabilities during demos. Can we get this on the Q3 roadmap?"

This is classic solution-prescriptive framing. Aisha has identified a real signal (prospects asking about reporting) and jumped to a solution (dashboard). Your job is to uncover what is actually going wrong.

Run `/brief` with the request:

```
/brief
type: "problem"
context: "InsightFlow is a B2B SaaS analytics platform. We are Series B,
50 employees, 200 customers. Our primary persona is Analyst Alex — data
analysts at 100-500 person companies who build dashboards without SQL.

Feature request from Head of Sales: 'We need a dashboard for enterprise
customers. Three prospects asked for reporting capabilities during demos.
Can we get this on the Q3 roadmap?'

Reframe this as a problem brief. Do not propose solutions."
```

**Sample output from `/brief`:**

```
Product Brief: Enterprise Reporting Gap
Type:          Problem Brief
Date:          2026-03-18
Author:        [PM]
Team:          Product, Sales, Customer Success

THE PROBLEM
Enterprise prospects are evaluating InsightFlow but cannot assess
whether the platform meets their reporting and governance requirements
during the sales process. Three enterprise prospects in the past 30
days requested reporting capabilities that InsightFlow does not
currently surface during demos. Sales cannot demonstrate how
InsightFlow handles the reporting workflows that enterprise buyers
evaluate as table-stakes — leading to stalled deals or lost
opportunities at the enterprise tier.

WHO IS AFFECTED
- Enterprise prospects (companies with 500+ employees) evaluating
  InsightFlow during the sales cycle
- Estimated 15-20 enterprise opportunities per quarter based on
  current pipeline
- Secondary: existing enterprise customers (12 accounts) who may
  have similar unmet needs but have not yet voiced them

EVIDENCE
- 3 enterprise prospects raised reporting capabilities as a gap
  during demos in the past 30 days (source: Aisha Patel, Head of Sales)
- Deal sizes for these opportunities: illustrative range $50K-$120K ARR
- Current enterprise win rate unknown — no segmented data available
- No support tickets from existing enterprise customers on this topic
  (but absence of complaints ≠ absence of need)

IMPACT OF NOT SOLVING
- Enterprise deals continue to stall or lose to competitors who
  demonstrate reporting capabilities in the sales process
- InsightFlow's expansion from analytics to workflow automation
  (the Q3 strategic bet) may lack credibility at the enterprise
  tier without visible reporting maturity
- Sales team workarounds (manual report exports, custom demos)
  consume approximately 4-6 hours per enterprise opportunity

WHAT WE DO NOT KNOW YET
- What specific reporting capabilities did these prospects ask for?
  "Reporting" could mean scheduled email reports, embedded analytics,
  compliance audit trails, or executive dashboards — each is a
  different product surface
- Are these prospects representative of the enterprise segment, or
  are they outliers with unusual requirements?
- Do our 12 existing enterprise customers have the same need? Have
  they built workarounds we do not know about?
- What do competitors offer in this space? Is this table-stakes or
  a differentiator?

DISCOVERY QUESTIONS
1. What specific reporting workflows did each of the three prospects
   describe? (Interview Sales — Aisha Patel, AEs on those deals)
2. What reporting capabilities do our top 3 competitors demonstrate
   in enterprise sales cycles? (Competitive analysis)
3. Do our existing 12 enterprise customers use workarounds for
   reporting needs? (Customer Success interviews — 5 minimum)
4. What is the minimum reporting surface needed to unblock enterprise
   sales — and is that the same as what existing customers need?
5. Would reporting capabilities change the deal economics enough to
   justify Q3 prioritisation over workflow automation?
```

### Evaluating the Output

Before you accept this brief, check it against the `/brief` skill's quality rules:

**Check 1 — No solution proposals in THE PROBLEM section.** Read the problem statement again. Does it mention dashboards, features, or specific product changes? In this output, the problem section describes the _gap_ (prospects cannot assess reporting capabilities) without prescribing _what to build_. This is correct.

**Check 2 — WHAT WE DO NOT KNOW section is present and substantive.** The section lists four specific unknowns, each framed as a question. It does not say "N/A" or "we need more research." This is correct.

**Check 3 — Discovery questions are specific and answerable.** Each question names who to talk to or what method to use. "What specific reporting workflows did each prospect describe?" is answerable. "Explore user needs" would not be. This is correct.

**Check 4 — No decision or next step is missing.** The brief implies the next step (answer the discovery questions) but does not state it explicitly. You might add: "NEXT STEP: Run a 1-week discovery sprint to answer questions 1-3 before Q3 planning." This is a minor gap — prompt the agent to add it.

:::note Keep This File
Lessons 3-14 build one continuous product management cycle for InsightFlow. Keep your Cowork session and working folder between lessons. The problem brief you produce in this lesson's exercise feeds directly into Lesson 4, where you will use `/interview` to create an interview guide that addresses your discovery questions.
:::

## The Three Brief Types

The `/brief` command supports three brief types. This lesson focuses on the Problem Brief, but understanding all three helps you choose the right format at each stage:

| Brief Type           | When to Use                                                                           | Key Rule                                                     | Output                                                     |
| -------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| **Problem Brief**    | At the start of discovery — you know something is wrong but have not investigated yet | No solution proposals                                        | A framing document that aligns the team on the problem     |
| **Discovery Brief**  | Before a research sprint — you need to scope what the team will investigate           | Must include ranked questions with explicit success criteria | A research plan with methods, sample, and expected outputs |
| **Initiative Brief** | Before writing a PRD — you need executive alignment on a major bet                    | Must include "the bet," rough effort, and decision needed    | A one-page framing document for stakeholder sign-off       |

The progression is: Problem Brief (what is wrong?) → Discovery Brief (how will we investigate?) → Initiative Brief (should we commit resources?) → PRD (what will we build?). Each document answers the question that the previous one raised.

## Exercise: Reframe a Feature Request

**Plugin:** Custom product-strategy
**Command:** `/brief`
**Time:** 20 minutes

**Step 1 — Read the feature request**

Your VP of Engineering, Maria Santos, sends this request:

> "We need to add real-time collaboration to InsightFlow. Two of our biggest customers say their analysts waste time because they cannot edit dashboards simultaneously. I want this scoped for Q3."

Identify what makes this request solution-prescriptive. What is the solution being proposed? What is the underlying problem that is not yet articulated?

**Step 2 — Run /brief to produce a problem brief**

```
/brief
type: "problem"
context: "InsightFlow is a B2B SaaS analytics platform, Series B,
50 employees, 200 customers. Primary persona: Analyst Alex — data
analysts at 100-500 person companies who build dashboards without SQL.

Feature request from VP Engineering: 'We need to add real-time
collaboration to InsightFlow. Two of our biggest customers say their
analysts waste time because they cannot edit dashboards simultaneously.
I want this scoped for Q3.'

Reframe this as a problem brief. Do not propose solutions."
```

**Step 3 — Evaluate the output against the NEVER DO rules**

Check each section:

- Does THE PROBLEM section contain solution language? Look for verbs like "add," "build," "integrate," or "enable." If the agent wrote "InsightFlow needs real-time editing capabilities," that is solution language — the problem statement should describe the pain (analysts waste time on conflicting edits) not the fix.
- Is the WHAT WE DO NOT KNOW section substantive? If it says "N/A" or is missing, the brief fails. Prompt the agent: "The WHAT WE DO NOT KNOW section is missing. Add at least three specific unknowns about this problem."
- Are the discovery questions specific and answerable? "Understand collaboration needs" is too vague. "How many hours per week do analysts at [Customer A] and [Customer B] spend resolving conflicting dashboard edits?" is answerable.

**Step 4 — Refine the brief**

If the output has quality issues, send a follow-up prompt:

```
Review this problem brief against these rules:
1. THE PROBLEM section must contain no solution proposals — only
   observable pain and current behaviour
2. WHAT WE DO NOT KNOW must list at least 3 specific unknowns
3. DISCOVERY QUESTIONS must be answerable with a named method
   (interview, data pull, competitive analysis)
4. Add a NEXT STEP section recommending the first action

Fix any violations.
```

**Step 5 — Extend: try a second feature request**

Run `/brief` on a feature request from your own product backlog (or use this one if you do not have a product):

> "Customers keep asking for a mobile app."

This request is maximally vague. The resulting problem brief should surface how little you actually know — the WHAT WE DO NOT KNOW section should be the longest section in the brief. If the agent produces a brief where the problem and evidence sections are longer than the unknowns, something is wrong.

## What You Built

You produced a **problem brief** — a structured document that reframes a solution-prescriptive feature request into a problem-focused investigation. The brief aligns your team on what is wrong, who is affected, what evidence exists, and what you still need to learn — without committing to a specific solution.

You also practised the evaluation skill that separates a PM from someone who accepts the first output an AI produces: checking for solution language in the problem statement, verifying that unknowns are explicit, and ensuring discovery questions are specific enough to act on.

The problem brief you created feeds directly into Lesson 4, where you will use `/interview` to create an interview guide that addresses your discovery questions, and `/synthesize-research` to process the interview findings into evidence for a feature spec.

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

```
Here is a feature request for InsightFlow:

"Our onboarding takes too long. New users take 3 weeks to build their
first dashboard. We need to add templates — pre-built dashboards they
can clone and customise."

Reframe this as a problem brief using the problem brief format:
THE PROBLEM, WHO IS AFFECTED, EVIDENCE, IMPACT OF NOT SOLVING,
WHAT WE DO NOT KNOW YET, DISCOVERY QUESTIONS.

Rules:
- THE PROBLEM section must not mention templates or any specific solution
- WHAT WE DO NOT KNOW must have at least 3 items
- DISCOVERY QUESTIONS must name the research method for each question
```

**What you're learning:** Practising the reframe on a request where the solution (templates) sounds obviously right — which makes it harder to resist including it in the problem statement. The discipline is the same regardless of how good the proposed solution sounds.

**Prompt 2 — Adapt** (change the context):

```
Take this feature request from a different product domain:

"Our e-commerce platform needs a recommendation engine. Customers
browse an average of 12 products but only purchase 1.2. A recommendation
engine would increase basket size."

Reframe this as a problem brief. The problem is NOT "we need a
recommendation engine" — the problem is the gap between browsing
behaviour and purchase behaviour. What do we not know about why
customers browse 12 items but buy 1.2?
```

**What you're learning:** Applying problem-focused framing outside the InsightFlow context. The principle is domain-independent: the PM's job is always to understand the problem before the solution, regardless of the product.

**Prompt 3 — Apply** (connect to your domain):

```
Think of a feature request you have received recently — from a
stakeholder, customer, or your own idea. Write it down as it was
originally phrased.

Now reframe it as a problem brief. Focus on:
1. What is the observable pain? (Not "users need X" — what are users
   currently experiencing that is wrong?)
2. What evidence do you have? (Be honest — if you have none, say so)
3. What do you NOT know? (List at least 3 genuine unknowns)
4. What are the 3 discovery questions you would need to answer before
   writing a spec?

Compare your problem brief to the original feature request. What
assumptions were hidden in the original phrasing that are now visible?
```

**What you're learning:** The ultimate test — applying problem-focused framing to your own work. The goal is to surface assumptions that were invisible in the original feature request but become obvious in the problem brief format.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 4: User Research — Interviews & Synthesis →](./04-user-research-interviews-synthesis.md)
