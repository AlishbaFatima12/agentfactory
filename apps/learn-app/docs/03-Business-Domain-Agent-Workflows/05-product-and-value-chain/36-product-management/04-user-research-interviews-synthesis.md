---
slug: /Business-Domain-Agent-Workflows/product-management/user-research-interviews-synthesis
sidebar_position: 4
title: "User Research — Interviews & Synthesis"
description: "Design user interviews with the /interview command, apply five behavioral design principles to evaluate the guide quality, then run /synthesize-research to turn simulated interview notes into prioritised product insights."
keywords:
  [
    "user research",
    "interview guide",
    "research synthesis",
    "jobs to be done",
    "JTBD",
    "thematic analysis",
  ]
chapter: 36
lesson: 4
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Design a user interview guide using /interview and evaluate it against the five behavioral design principles"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student invokes /interview for an InsightFlow research question, receives an interview guide, and identifies at least two principle violations or confirms compliance with all five"

  - name: "Synthesise interview notes using /synthesize-research and distinguish behavioral observations from stated preferences in the output"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student runs /synthesize-research with provided interview notes, reviews the synthesis output, and correctly identifies which findings are behavioral vs stated and whether the 'what NOT to build' guidance is present"

learning_objectives:
  - objective: "Apply the five interview design principles (behavior over opinion, past over hypothetical, problem before solution, silence is data, why five times) to evaluate an AI-generated interview guide"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student reviews an /interview output against all five principles and identifies at least one violation or provides a justified 'all compliant' verdict"

  - objective: "Use /synthesize-research to process interview notes and extract prioritised product insights with evidence"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs /synthesize-research with the provided mock interview transcripts and produces a synthesis with at least 3 prioritised findings and a 'what NOT to build' section"

  - objective: "Execute the custom-to-official plugin handoff: /interview output → simulated interviews → /synthesize-research input"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student describes why the handoff sequence matters and what is lost if research synthesis runs without a structured interview guide"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Five behavioral interview design principles"
    - "Interview guide structure (Opening, Warm-Up, Core Discovery, Wrap-Up)"
    - "Thematic analysis (familiarisation, coding, theme development, review, refinement)"
    - "Behavioral vs stated preference distinction in synthesis"
    - "Custom-to-official plugin handoff"
  assessment: "5 concepts across a 45-minute lesson at B1-B2 level. The lesson is structured so the first half (interview design) and second half (synthesis) are taught sequentially with a simulated handoff in between. The cognitive load is appropriate because the two halves reinforce each other — the interview principles directly improve what /synthesize-research has to work with."

differentiation:
  extension_for_advanced: "Design an interview guide for a second research question from the L03 problem brief's discovery questions (pick a different question from the one used in the exercise). Compare the two guides — how does the research question shape the guide structure? Then write a brief analysis of which discovery question would yield the strongest signal if answered: which one would most change your product direction?"
  remedial_for_struggling: "Focus on just Principles 1 and 2 (behavior over opinion, past over hypothetical). Take the /interview output and highlight every question that asks what a user would do in the future or what they think about something. Rewrite those questions to ask about the past. This single change improves interview quality more than any other principle."

teaching_guide:
  key_points:
    - "The most common interview mistake is asking hypothetical future questions ('Would you use this feature?'). Users are poor predictors of their own future behaviour but excellent reporters of their past behaviour. The /interview skill enforces past-tense framing — the PM's job is to verify the skill maintained that discipline."
    - "The handoff between /interview and /synthesize-research is the lesson's structural core: a well-designed interview guide produces structured notes that /synthesize-research can process efficiently. A poorly designed guide produces notes full of opinions and hypotheticals that are hard to synthesise into behavioral insights."
    - "The 'what NOT to build' section in the synthesis is as valuable as the product recommendations. Research that does not explicitly say what to deprioritise leaves the PM with a list of opportunities and no criteria for choosing between them."
    - "Behavioral vs stated preference is a critical distinction: what users say they want and what their behavior reveals they need are often different. A synthesis that conflates them produces misleading product direction."
  misconceptions:
    - "More interview questions are better — you can always skip some. Correction: more questions mean less depth. A 45-minute interview that goes deep on one specific recent experience produces better product insight than one that covers 20 questions superficially. The /interview skill's default 45-minute guide is deliberately constrained."
    - "If multiple users mention the same feature, that is evidence to build it. Correction: stated feature requests are hypothetical future behaviour. The synthesis should ask: what behavior are users exhibiting that makes them ask for this feature? That behavior is the evidence. The feature request is their proposed solution to a problem — which may or may not be the right solution."
    - "The synthesis command will tell you what to build. Correction: /synthesize-research tells you what users are experiencing, what they are struggling with, and what patterns appear across multiple participants. It does not tell you what to build — it tells you what problems to solve. What to build is a product judgment call that requires combining the research with strategic context."
  discussion_prompts:
    - "You have 12 interview transcripts. Five users mention wanting a Slack integration. Three mention wanting better email notifications. Two mention wanting a mobile app. How do you weigh these findings? What additional information would you need before any of them became a product decision?"
    - "An interview participant says: 'I would definitely use a bulk export feature — it would save me so much time.' You note this as a finding. Then you review the session recording and notice the participant navigated to the export button twice during the interview and did not complete either export. How do you reconcile what they said with what they did? Which piece of evidence is more valuable?"
  teaching_tips:
    - "The mock interview transcripts provided in the exercise are intentionally mixed — some include behavioral observations ('she navigated to the export button twice'), some include stated preferences ('I would use this'), and some include both. Teach students to flag each observation type before running /synthesize-research."
    - "When evaluating the synthesis output, focus specifically on the 'WHAT WE HEARD BUT SHOULD NOT BUILD' section. This is the hardest section for AI to produce well — it requires drawing a conclusion about scope that goes against the literal content of what users said. If the section is missing, teach students to prompt for it explicitly."
---

# User Research — Interviews & Synthesis

You have a problem brief. You know what you are trying to learn. Now comes the part that most product teams skip: actually going out to learn it.

Not because they do not want to talk to users — most PMs do want to. The obstacle is structural. Designing a good interview guide takes two to three hours. Running five interviews takes a full work week when you count scheduling, note-taking, and the synthesis that should follow. And the synthesis itself — turning five sets of interview notes into a coherent, evidence-based product direction — is another four to six hours of structured thinking.

Total investment to do user research properly: one to two weeks of work. Total investment when one interview falls through and another runs long and you still have three sprint planning meetings to run: zero. Research gets deprioritised until the next quarter, when the same conditions apply.

This lesson changes that equation. The `/interview` command (from the custom `product-strategy` plugin) designs a research-grade interview guide in minutes. The `/synthesize-research` command (from the official `product-management` plugin) turns your interview notes into structured product insights. The PM's job shifts from writing the guide and doing the synthesis to directing the research and evaluating the outputs — which is where judgment matters most.

## The Five Interview Design Principles

Good user research is not about asking a lot of questions. It is about asking the right kind of questions in the right order. The `/interview` skill enforces five principles that distinguish research-grade interview design from the common failure modes.

| Principle | What it means | Right | Wrong |
| --- | --- | --- | --- |
| **Behavior over opinion** | Ask what users DO, not what they THINK | "Walk me through the last time you exported a report" | "How important is exporting to you?" |
| **Past over hypothetical** | Ask about actual past experiences | "Tell me about the last time you built a dashboard from scratch" | "Would you use a template library?" |
| **Problem before solution** | Do not mention features or solutions in the first half of the interview | "What happens when you need data your team does not have?" | "Would a real-time refresh feature solve this problem?" |
| **Silence is data** | When a participant pauses or struggles, wait at least 5 seconds | [silent pause after "What was difficult about that step?"] | "So I guess the difficult part was the export step?" |
| **Why five times** | When something interesting comes up, ask why — then why again | "Why does that happen?" → "And why is that the way it works?" | "Got it. And what happens next?" |

:::caution The Hypothetical Question Trap
"Would you use feature X?" is the most common bad question in user research. Users are consistently optimistic about their future behavior — they say yes to features they will never use. The research literature is clear: stated intention is a weak predictor of actual behavior. Ask about the past, not the future.
:::

## The Interview Guide Structure

The `/interview` command produces a 45-minute guide by default. Each segment serves a specific purpose:

| Segment | Duration | Purpose | What it produces |
| --- | --- | --- | --- |
| **Opening** | 5 min | Build rapport; set expectations; get consent | Participant is relaxed and clear on the format |
| **Warm-up** | 5-10 min | Understand who this person is and how they work | Context for interpreting everything that follows |
| **Core Discovery** | 20-25 min | Understand the specific problem area in depth | The behavioral observations that become insights |
| **Wrap-up** | 5 min | Catch anything missed; leave door open | Surprises; referrals to other participants |

The Core Discovery segment is the research. Everything else is scaffolding that makes the Core Discovery segment work. An interview that skips warm-up and jumps to the main questions gets technically correct responses from a participant who does not yet trust the interviewer — which is a different kind of interview than the one you intended to run.

## Worked Example: Interview Guide for InsightFlow

The L03 problem brief identified this as a priority discovery question:

> *"What specific reporting workflows did each of the three enterprise prospects describe? And do our existing enterprise customers have the same need?"*

That question requires interviews. Run `/interview` to generate the guide:

```
/interview
context: "InsightFlow is a B2B SaaS analytics platform for data analysts
at 100-500 person companies. Primary persona: Analyst Alex, who builds
dashboards without SQL and whose biggest frustration is report requests
taking 3+ days.

Research question: How do analysts at mid-size companies currently
handle reporting workflows — specifically, what are the manual steps,
what tools do they use, and where do they get blocked?

Interview audience: Data analysts and analytics managers at companies
with 100-500 employees who currently build or receive reports.
Interview length: 45 minutes."
```

**Sample /interview output (Core Discovery segment):**

```
INTERVIEW GUIDE: Analyst Reporting Workflows
════════════════════════════════════════════════════════════
Purpose:      Understand how analysts currently handle reporting —
              the workflows, tools, blockers, and workarounds
Participants: Data analysts and analytics managers; 100-500 person
              companies; moderate to high technical skill
Duration:     45 minutes
Interviewer:  [Name]
Note-taker:   [Name or "interviewer only"]

OPENING (5 minutes)
"Thanks for taking the time today. I'm [name], a PM at InsightFlow.
I'm here to learn from you — there are no right or wrong answers.
I'm interested in how you work with data and reports, not in testing
you on our product. Is it okay if I take notes? Before we start —
any questions for me?"

WARM-UP (8 minutes)
- "Can you tell me a bit about your role and what a typical day
  looks like for you?"
- "How does working with data and reports fit into your day-to-day?"
- "How long have you been in this role? Has the way you handle
  reporting changed over that time?"

CORE DISCOVERY (22 minutes)

Opening question:
"I'd like to understand how you currently handle reporting at your
company. Can you walk me through the last report you built or
delivered — as concretely as possible? Start from the moment
someone asked for it."

Follow-up depth questions (follow the story):
- "What prompted that request?"
- "What tools were involved in that process?"
- "What was the hardest step? Walk me through it."
- "How long did that typically take you?"
- "What do you do when you get stuck or the data is not where
  you need it to be?"

Workaround probe (always ask):
"What did you do before you had [tool they mentioned]?
[Wait] Do you still use any part of that workaround today?"

Frequency and importance probe:
"How often do you go through a process like this?
When this takes longer than expected, what is the downstream impact?"

WRAP-UP (5 minutes)
- "Is there anything about reporting at your company that we have
  not talked about that you think I should understand?"
- "If you could change one thing about your current reporting
  workflow, what would it be?"
- "Is there someone else on your team who approaches this differently
  that I should talk to?"
════════════════════════════════════════════════════════════
```

### Evaluating the Guide

Check the Core Discovery section against the five principles:

**Principle 1 — Behavior over opinion**: The opening question asks participants to walk through a specific recent experience. It does not ask how important reporting is to them. Compliant.

**Principle 2 — Past over hypothetical**: "Walk me through the last report you built" is a past-tense behavioral anchor. No hypothetical questions appear in the Core Discovery segment. Compliant.

**Principle 3 — Problem before solution**: The guide does not mention InsightFlow features, templates, or product capabilities in the discovery questions. Compliant.

**Principle 4 — Silence is data**: The guide does not explicitly instruct on silence — this is a gap. Add a note: "When participants pause, wait at least 5 seconds before asking a follow-up."

**Principle 5 — Why five times**: The depth questions include "What was the hardest step?" and follow-ups but do not explicitly chain "why" sequences. Add: "After any strong observation, ask: 'Why does that happen?' then 'And why is that?'"

This guide passes four of five checks. The two gaps are minor — add notes to the guide and run the interviews.

## From Guide to Notes to Synthesis

The `/interview` output is the input to the research process, not the end of it. The sequence is:

```
/interview → Guide → Run 5+ interviews → Structured notes → /synthesize-research → Insights
```

The note-taking template produced by `/interview` is designed to feed `/synthesize-research` efficiently. Each note-taking session captures:
- Key observations (what the participant did or experienced)
- Notable quotes (verbatim, with participant ID)
- Surprises / unexpected findings
- Follow-up questions for subsequent interviews

Five sets of structured notes produced from a consistent interview guide give `/synthesize-research` the raw material it needs to run thematic analysis across participants.

## Research Synthesis Methodology

`/synthesize-research` applies thematic analysis to interview notes. Understanding the methodology helps you evaluate whether the output reflects genuine patterns or surface-level clustering.

| Phase | What it does | What to look for in the output |
| --- | --- | --- |
| **Familiarisation** | Reviews all notes to understand the landscape | Does the synthesis reflect the range of experiences, not just the most common? |
| **Initial coding** | Tags each observation with descriptive codes | Are codes behavioral ("waited 3 days for data") or attitudinal ("frustrated with the process")? |
| **Theme development** | Groups codes into candidate themes | Do themes reflect what participants did, or what they said they wanted? |
| **Theme review** | Checks themes have sufficient evidence | Is each theme supported by at least 3 participants? |
| **Theme refinement** | Defines and names themes clearly | Is the finding statement one clear, specific sentence? |

The key quality check for any synthesis output: **does each finding describe observed behavior, or does it summarise stated preferences?**

Behavioral finding: "Participants spent an average of 40-60 minutes reformatting exported data in Excel before sharing reports — a step all five participants described as unavoidable."

Stated preference finding: "Users want better export options."

The first is evidence. The second is the users' proposed solution to the problem the first describes.

## Exercise: Interview Guide + Research Synthesis

**Plugin (Part 1):** Custom product-strategy
**Command (Part 1):** `/interview`
**Plugin (Part 2):** Official product-management
**Command (Part 2):** `/synthesize-research`
**Time:** 30 minutes

---

**Step 1 — Generate the interview guide for your L03 discovery question**

From your L03 problem brief's discovery questions, use the following (or your own):

> *"How do analysts at mid-size companies currently handle reporting when they do not have direct database access?"*

Run `/interview`:

```
/interview
context: "InsightFlow is a B2B SaaS analytics platform. Primary persona:
Analyst Alex — data analyst at a 100-500 person company, builds dashboards
without SQL, biggest frustration is report requests take 3+ days.

Research question: How do analysts currently handle reporting when they
do not have direct database access? What are the manual steps, what
tools do they use, and where do they get blocked?

Audience: Data analysts at 100-500 person companies with limited SQL access.
Interview length: 45 minutes."
```

**Step 2 — Evaluate the guide against the five principles**

For each of the five principles, find one question in the Core Discovery segment and assess: compliant, partial, or violation. If you find a violation, write the corrected question.

Focus on two things:
- Does any question in Core Discovery ask about the future? ("Would you...", "Do you think you would...")
- Does the guide mention InsightFlow features or propose any solution before the wrap-up?

**Step 3 — Run /synthesize-research with mock interview notes**

Use these simulated interview excerpts (three participants):

```
--- PARTICIPANT A (Analytics Manager, 200-person SaaS company) ---
Key observations:
- Builds 3-4 reports per week; each takes 45-90 minutes
- Process: pull data from Salesforce → copy to Google Sheets →
  pivot table → format → send via email
- "The pivot table step is where I lose time. The data is never
  clean enough for the pivot to work on the first try."
- Showed me her Sheets folder: 47 files named "monthly-report",
  "monthly-report-v2", "monthly-report-final", etc.
- Does NOT use InsightFlow for this process even though company
  has a subscription
Notable quotes:
- "If someone needs a number, they Slack me. I build the report.
  They don't know how I got it and they don't care."
- "I would love to not be the human middleware between Salesforce
  and a spreadsheet."
Surprises:
- Has a company InsightFlow subscription but has never connected
  it to Salesforce — was never shown how during onboarding.
```

```
--- PARTICIPANT B (Data Analyst, 400-person retail company) ---
Key observations:
- Primary job is building the "weekly business review" dashboard
  for leadership — takes 3 hours every Monday
- Uses 4 tools: BigQuery (data pull) → dbt (transformation) →
  Sheets (formatting) → Slides (presentation layer)
- "The Slides step is the one that kills me. Every week I'm
  copying numbers from Sheets into the same 12-slide deck."
- Tried to automate with Google Apps Script — "it worked for
  two weeks and then broke when the schema changed"
Notable quotes:
- "I have a skill that the company needs. The company is using
  me to do copy-paste."
- "I've asked for a BI tool three times. Finance keeps saying
  the ROI isn't there."
Surprises:
- Reports to the Head of Finance, not a data or engineering team.
  Has no path to getting technical tools approved.
```

```
--- PARTICIPANT C (Marketing Analyst, 150-person B2B company) ---
Key observations:
- Builds pipeline reports for Sales every Friday
- Data lives in HubSpot; exports to CSV; manipulates in Excel
- "The export breaks about once a month. HubSpot changes something
  and my macros stop working."
- Showed me her Excel file: 23 sheets, colour-coded by quarter
Notable quotes:
- "Every analyst I know has a version of this file."
- "I don't want a fancy BI tool. I want the data to be
  in the right place when I need it."
Surprises:
- Uses InsightFlow for a different team's data but considers
  it "a different workflow" — has not thought about using it
  for the pipeline report.
```

Run `/synthesize-research` with these notes:

```
/synthesize-research

Research type: User interviews (n=3)
Research question: How do analysts currently handle reporting when they
do not have direct database access?

[Paste the three participant notes above]

Synthesise into: key findings by frequency and impact, behavioral
observations vs stated preferences, and a section on what we should
NOT build based on this evidence.
```

**Step 4 — Evaluate the synthesis output**

Check the synthesis against these quality criteria:

1. **Behavioral vs stated**: Does the output distinguish between what participants did (copy data to Sheets every Monday, macros break monthly) and what they said they wanted (a BI tool, automated reports)?

2. **Finding specificity**: Is each finding a clear, specific statement? "Participants spent 45-90 minutes per report reformatting exported data" is specific. "Users struggle with reporting" is not.

3. **What NOT to build**: Is there a section that explicitly identifies what the research does NOT support building right now? (If absent, prompt: "Add a section on what this research suggests we should NOT build in the short term and why.")

4. **Insight 1 (InsightFlow-specific)**: Two of the three participants have InsightFlow subscriptions but do not use InsightFlow for the workflow being researched. Does the synthesis flag this as a finding? It should — this is the highest-priority product insight in the notes.

**Step 5 — Extend: prompt for persona development**

```
Based on this research synthesis, draft a persona profile for the analyst
who does reporting without direct database access. Use this structure:

- Name and one-line description
- Who they are (role, company, tools used)
- What they are trying to accomplish (goals and jobs to be done)
- Key pain points (top 3 frustrations or workarounds)
- What they value in a solution
- 2-3 representative quotes from the interviews

Then: does this persona overlap with or diverge from InsightFlow's
existing primary persona (Analyst Alex)? What does this tell us
about whether our current persona description is accurate?
```

:::note Keep This File
The research synthesis you produced in this exercise becomes the evidence layer for your L06 feature spec. When you write a spec for the automation builder, the synthesis provides the behavioral data that grounds your problem statement.
:::

## What You Built

You ran the full user research cycle — from interview guide design through research synthesis — using both plugins in sequence. The `/interview` output (custom plugin) designed a behaviorally-grounded guide. The `/synthesize-research` output (official plugin) turned structured notes into prioritised, evidence-based insights.

You also practiced the evaluation skill that makes research useful rather than just documented: distinguishing behavioral findings from stated preferences, checking whether the synthesis acknowledges what to NOT build, and verifying that the most counter-intuitive insight (participants have InsightFlow subscriptions but do not use InsightFlow for this workflow) made it into the output.

The synthesis connects forward to Lesson 6: when you write a feature spec for InsightFlow's automation builder, this research is your problem statement's evidence.

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

```
I am a PM at a project management tool. I want to understand how
engineering managers currently run their weekly standup and sprint
progress reviews.

Using the five behavioral interview design principles (behavior over
opinion, past over hypothetical, problem before solution, silence is
data, why five times), design a 30-minute interview guide for
engineering managers at companies with 20-100 engineers.

For each question in the Core Discovery segment, label which principle
it is designed to apply.
```

**What you're learning:** Labelling the principle each question applies makes the discipline explicit. Most PMs know the principles in theory; mapping them to specific questions builds the habit of applying them in practice.

**Prompt 2 — Adapt** (change the context):

```
Here are two interview questions for a fitness app:

Question A: "Would you use a feature that tracks your sleep
and automatically adjusts your workout plan?"

Question B: "Tell me about the last week when you felt your
workout plan wasn't working. Walk me through what was happening."

Explain why Question A violates the behavioral interview design
principles. Rewrite it as a behaviorally-grounded question.

Then: which of the two questions is more likely to produce
insights that lead to a good product decision? Why?
```

**What you're learning:** The contrast between a hypothetical and a behavioral question illustrates the principle more vividly than a definition does. Question A produces optimistic self-prediction; Question B produces evidence.

**Prompt 3 — Apply** (connect to your domain):

```
Think of a user research question your team is currently trying to
answer (or has recently tried to answer).

Design one interview question for each of the five behavioral
principles. Then identify which principles your team's current
research practice applies consistently and which it routinely violates.

What would change about your research output if you applied
all five principles every time?
```

**What you're learning:** Applying the principles to your own research practice reveals which ones are habits and which are gaps. The principle most teams violate is almost always the same: asking hypothetical questions and treating the answers as evidence.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 5: Competitive Intelligence →](./05-competitive-intelligence.md)
