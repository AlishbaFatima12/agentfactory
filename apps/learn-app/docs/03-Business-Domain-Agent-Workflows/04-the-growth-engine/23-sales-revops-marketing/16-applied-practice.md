---
sidebar_position: 16
title: "Applied Practice"
description: "Six cross-lesson exercises plus a capstone that connect research, scoring, outreach, campaigns, assets, collision resolution, and agent architecture — each requiring diagnosis of Agent Output Taxonomy errors with real business data"
keywords:
  [
    "applied exercises",
    "capstone",
    "Agent Output Taxonomy",
    "cross-lesson exercises",
    "ICP calibration sprint",
    "pipeline exercise",
    "Five Laws audit",
    "campaign exercise",
    "agent architecture challenge",
    "sales exercises",
    "RevOps practice",
  ]
chapter: 23
lesson: 16
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Execute Cross-Lesson Revenue Workflows"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can connect capabilities from multiple lessons into complete workflows, executing them end-to-end with real business data"

  - name: "Diagnose Agent Output Taxonomy Errors Across Workflows"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can identify and classify all 5 Agent Output Taxonomy error types in workflow outputs, tracing each to its root cause and proposing corrections"

  - name: "Design and Defend a Complete Agent Architecture"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can deploy monitoring + reactive agents, trace coordination, and identify where human approval gates are needed"

learning_objectives:
  - objective: "Complete 3+ cross-lesson exercises that connect capabilities from different phases of the chapter"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student completes exercises and produces outputs demonstrating cross-lesson integration"

  - objective: "Identify and classify Agent Output Taxonomy errors in at least 2 exercises"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student flags 2+ errors with correct taxonomy classification and root cause analysis"

  - objective: "Complete the capstone exercise with real business data, including error diagnosis"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student selects 1 exercise, runs end-to-end with real data, and identifies 2+ Agent Output Taxonomy errors with classification"

cognitive_load:
  new_concepts: 2
  concepts_list:
    - "Cross-lesson workflow integration (connecting capabilities from different phases)"
    - "Error taxonomy as diagnostic framework (systematic classification, not ad hoc)"
  assessment: "2 new concepts only — this lesson is about application and synthesis of everything learned in L01-L15. Low new concept count is intentional."

differentiation:
  extension_for_advanced: "Complete all 6 exercises. For each, document 3+ Agent Output Taxonomy errors. Build a comprehensive error log that shows which error types are most common in which workflow stages."
  remedial_for_struggling: "Focus on Exercise 1 (ICP Calibration Sprint) and Exercise 2 (Pipeline). These use the most fundamental skills from L01-L06. If you can complete both with 1 error diagnosis each, you have demonstrated the core competency."
---

# Applied Practice

Fifteen lessons of individual capabilities. You can research a prospect, score a lead, write Five Laws-compliant outreach, build a multi-touch sequence, generate battlecards, plan campaigns, multiply content, create interactive assets, configure brand voice, compose plugin layers, resolve skill collisions, and orchestrate RevOps agents. Each of those capabilities produced a clean output when you ran it in isolation. But revenue does not come from isolated capabilities. Revenue comes from connecting them into workflows where Stage 1 feeds Stage 2 feeds Stage 3 — and where every handoff is an opportunity for errors that compound downstream.

This lesson connects what you have built. Six exercises, each spanning two or more prior lessons, each requiring you to diagnose at least one **Agent Output Taxonomy** error. The five error types from the chapter — **Hallucinated Data** (L01), **Miscalibrated Scoring** (L03), **Compliance Gap** (L04), **Over-Automation** (L05), and **Context Loss** (L06) — are your diagnostic toolkit. You learned them individually. Now apply them together, under pressure, with real pipeline data.

The capstone at the end runs an exercise of your choosing end-to-end with your actual business data. Not hypothetical. Not NexaFlow or Meridian. Yours.

---

## The Error Taxonomy Checklist

Before you start, keep this checklist open. Every exercise requires you to classify at least one error using the taxonomy. Knowing where to look matters as much as finding the error itself.

| Error Type | First Taught | What It Looks Like | Where It Hides |
|---|---|---|---|
| **Hallucinated Data** | L01 | Fabricated financials, wrong investor names, invented personnel | Research briefs, competitive claims |
| **Miscalibrated Scoring** | L03 | False positives, inflated totals, missing negative signals | ICP configuration gaps, overly broad criteria |
| **Compliance Gap** | L04 | Missing opt-out, wrong consent model, unverifiable competitive claims | Outreach, cross-border messaging, battlecard references |
| **Over-Automation** | L05 | Sequence continues past negative signal, agent acts without human gate | Multi-touch sequences, reactive agent triggers |
| **Context Loss** | L06 | Generic output when specific intelligence was available upstream | Follow-ups, pre-call briefs, CRM updates |

Use the exact taxonomy name when you classify an error. "The score seems wrong" is not a diagnosis. "Miscalibrated Scoring — the Fit dimension is 35/35 because the ICP has no industry filter" is a diagnosis.

---

## Exercise 1: ICP Calibration Sprint

**Connects:** L02 (ICP configuration) + L03 (lead scoring)

**Duration:** 20 minutes

### The Task

Your ICP from Lesson 2 will be tested against three prospects. Two are companies you know are strong fits for your product — the kind of account your best rep would prioritise. The third is a company you know is a poor fit — a company that your team would disqualify within minutes of reviewing.

Run `/research-prospect` for all three. Then run `/score-lead` on each.

If the ICP is well-calibrated, the two strong-fit prospects should score 75+ and the poor-fit prospect should score below 50. That is the hypothesis. Test it.

### NexaFlow Technologies, Karachi

You know NexaFlow from the chapter. Logistics-tech, 85-120 employees, scaling from 50K to 500K daily deliveries, hiring Kafka engineers. Strong fit for data infrastructure solutions. Research and score this prospect.

### Meridian Logistics, London

Meridian is the UK-based supply chain management firm from L11. They run Java Spring Boot, have 200-350 employees, and focus on European supply chain compliance. Whether Meridian is a strong or weak fit depends on your ICP. If you sell data infrastructure, Meridian's Java stack and compliance focus may not align. If you sell supply chain analytics, they are a strong match. Know your ICP before scoring.

### The Deliberate Misfit

Choose a company you know from personal experience would never buy your product. A company outside your industry, below your size threshold, or in a market you do not serve. This is your negative control. Score it.

### The Diagnosis

Compare the three scores. Answer these questions:

1. Did the two strong-fit prospects score above 75? If one scored below, which scoring dimension pulled it down? Was that dimension correct, or was it penalising a signal that your ICP should value?

2. Did the deliberate misfit score below 50? If it scored higher, trace the false positive to a specific ICP section. Which criterion was too broad? Which negative signal was missing?

3. After identifying the calibration gap, edit your ICP in `sales-marketing.local.md`. Add the missing negative signal or tighten the criterion. Re-run `/score-lead` on all three. Did the false positive drop below threshold? Did the two strong-fit prospects hold their scores?

**Error to diagnose: Miscalibrated Scoring.** Trace the false positive to a specific ICP section. The diagnosis is not "the score was wrong." The diagnosis is "the Fit dimension scored 30/35 because the ICP's industry filter accepts 'logistics' without distinguishing logistics-tech from logistics-consulting, and the misfit prospect is a logistics-consulting firm that shares the keyword but not the buying profile."

**What success looks like:** After recalibration, the false positive drops below threshold. The two ideal prospects still score correctly. You have a documented ICP change and the reasoning behind it.

---

## Exercise 2: Prospect-to-Meeting Pipeline

**Connects:** L06 (pipeline) + L04 (Five Laws) + L05 (over-automation)

**Duration:** 30 minutes

### The Task

Run the complete prospect-to-meeting pipeline for one prospect. All eight stages from L06, in sequence:

1. `/research-prospect` — generate the research brief
2. `/score-lead` — score the prospect
3. Qualification decision — your judgment, not the agent's
4. `outreach` skill — generate Five Laws-compliant outreach
5. `pre-call-brief` — prepare for the meeting
6. Meeting notes — write hypothetical meeting notes based on what you know about the prospect
7. `/call-summary` — summarise the meeting
8. `pipeline` skill — update the CRM record

At every stage, document the data flow. Write down what intelligence arrived from the previous stage and what intelligence the current stage produced.

### NexaFlow Path (Karachi Pipeline)

Use NexaFlow Technologies for this pipeline. You already have a research brief and scoring output from earlier lessons. Build on what exists rather than starting from scratch. If you are running this fresh, start from `/research-prospect NexaFlow Technologies Karachi` and work through every stage.

For Stage 6 (meeting notes), use the hypothetical meeting data from L06: Mehreen confirmed PostgreSQL is hitting limits at 120K deliveries/day, they have not chosen Kafka yet, budget requires CEO approval above $3K/month, and the funding was a seed round from Sarmayacar, not a Series A.

### The Diagnosis

Two errors hide in this pipeline. Find both.

**Error 1: Context Loss.** After running the full pipeline, generate a follow-up email using the `follow-up` skill. Compare the follow-up to the call summary. Does the follow-up reference specific meeting findings — the 120K daily delivery limit, the Kafka vs Redpanda evaluation, the Eid timeline, Usman as technical contact? Or does it default to "Great speaking with you, I will send over some information"? If it defaults to generic language, you have Context Loss. The intelligence existed upstream. The follow-up did not consume it.

**Error 2: Over-Automation.** Review the 5-touch outreach sequence you would build after the initial message. Now imagine the prospect responds to Touch 1 with: "Thanks, but we just signed a contract with a competitor last week. Timing is not right." Does the sequence continue to Touch 2? It should not. But if you built the sequence using `/build-sequence` without stop rules, Touches 2 through 5 are queued. The agent does not read the prospect's response and halt the sequence. That is Over-Automation — the system continues past a signal that a human would recognise as "stop."

**What success looks like:** A complete pipeline trace from research through CRM update, with every stage's data flow documented. Two annotated errors — Context Loss in the follow-up, Over-Automation in the sequence — with specific evidence and proposed fixes.

---

## Exercise 3: Five Laws Audit and Competitive Outreach

**Connects:** L04 (Five Laws) + L07 (battlecards) + L05 (outreach sequences)

**Duration:** 20 minutes

### The Task

Generate a competitive battlecard for NexaFlow's primary competitor using the `competitive-intelligence` skill. Then write Five Laws-compliant outreach that references the competitive intelligence. Audit every word.

### Step 1: Generate the Battlecard

```
Use the competitive-intelligence skill to generate a battlecard
for [NexaFlow's primary competitor in the Karachi logistics-tech
market]. Include pricing comparison, feature comparison, and
known weaknesses.
```

Read the battlecard. Identify at least two claims about the competitor that you cannot independently verify. Mark them. These are potential Hallucinated Data — the agent fabricated competitive intelligence because it had insufficient public data about a private company in an emerging market.

### Step 2: Write the Competitive Outreach

Now use the `outreach` skill to write a message to Mehreen Qazi that references the competitive battlecard. The outreach should position your solution against the competitor.

### Step 3: Audit

Audit the outreach against the Five Laws. Separately, audit the competitive claims in the outreach against the battlecard. Ask these questions:

1. Does the outreach reference a specific competitor weakness? Can you verify that weakness from a public source?

2. If the competitive claim is unverifiable, does including it in outreach create a legal risk? Making false claims about a competitor in commercial communication is actionable in most jurisdictions. Even if the Five Laws are satisfied — specific reference, prospect-first, single ask, word limit, no jargon — a fabricated competitive claim is a **Compliance Gap** that the Five Laws framework does not catch.

3. Does the outreach need the competitive reference at all? Would a version without the competitive angle — one that focuses entirely on the prospect's pain point — be equally effective and carry zero legal risk?

**Error to diagnose: Compliance Gap.** The Five Laws audit may pass. The outreach may be specific, prospect-first, single-ask, concise, and jargon-free. But if it includes an unverifiable claim about a competitor, it has a compliance gap that exists outside the Five Laws framework. The Five Laws govern outreach quality. They do not govern factual accuracy of competitive intelligence.

**What success looks like:** A battlecard with annotated hallucinated claims. An outreach message with a law-by-law Five Laws audit. A separate compliance audit that evaluates the competitive claims independent of the Five Laws. A recommendation on whether to include or remove the competitive reference.

---

## Exercise 4: Campaign and Content Factory

**Connects:** L08 (campaigns and content multiplication)

**Duration:** 20 minutes

### The Task

Plan a campaign for Meridian Logistics using `/plan-campaign`. Then multiply one piece of campaign content into eight formats using the `content-creation` skill. Audit the results with `/seo-audit`.

### Step 1: Plan the Campaign

Meridian Logistics is a 200-350 employee supply chain management firm in London. They are your target for a European supply chain analytics offering. Budget: GBP 15,000 for a 60-day campaign targeting VP Operations and CTO personas at mid-market logistics companies across the UK and EU.

```
/plan-campaign
Goal: Generate 30 qualified leads for supply chain analytics
Audience: VP Operations and CTO at mid-market logistics (100-500 employees)
Geography: UK + EU
Budget: GBP 15,000
Timeline: 60 days
```

Review the campaign brief. Does the channel allocation make sense for a GBP 15,000 budget? If the agent allocates 40% to paid search and 30% to trade conferences, that may not be realistic — a single UK logistics trade show booth can cost GBP 5,000-8,000, which would consume half the budget for one channel.

### Step 2: Multiply Content

Take the campaign's cornerstone blog post (or generate one using the `content-creation` skill). Multiply it into 8 formats:

1. LinkedIn post
2. Email newsletter section
3. Twitter/X thread
4. Short video script
5. Infographic outline
6. Webinar abstract
7. Sales one-pager
8. Podcast talking points

Now evaluate the outputs. Are they genuinely different content adapted for each format? Or are they the same 300 words reformatted with different headers? A LinkedIn post should be conversational and use first-person. A sales one-pager should lead with ROI metrics. A podcast outline should be structured as conversational questions. If all eight outputs read like the blog post with minor formatting changes, the multiplication produced quantity without quality.

### Step 3: SEO Audit

Run `/seo-audit` on the top 3 content pieces (blog post, LinkedIn post, email newsletter). How many pass? What are the common failures — missing meta descriptions, keyword stuffing, thin content, duplicate content across formats?

**Error to watch for: Hallucinated Data.** The campaign brief may include market sizing data — "the UK supply chain analytics market is worth GBP X billion." The content multiplication may include statistics — "companies that adopt supply chain analytics see a Y% reduction in logistics costs." Are those numbers real? Check the source. If the agent fabricated market data to make the campaign brief more convincing, that is Hallucinated Data embedded in marketing collateral. Every downstream asset that references the fabricated statistic inherits the error.

**What success looks like:** A campaign brief with realistic channel allocation. Eight content pieces where at least 5 are genuinely adapted for their format. SEO audit results with specific improvement recommendations. At least one hallucination flagged in the campaign brief or content output.

---

## Exercise 5: Sales Asset Workshop and Brand Voice Consistency

**Connects:** L09 (sales assets and brand voice) + L05 (outreach sequences)

**Duration:** 20 minutes

### The Task

Generate a sales asset for NexaFlow. Then configure brand voice. Then audit your outreach from Exercise 2 against the brand voice standard.

### Step 1: Generate the Asset

Use `create-an-asset` to build an interactive ROI calculator for NexaFlow. The calculator should let a prospect input their current daily delivery volume, their target volume, their current infrastructure cost, and their timeline. It should output estimated cost savings and time-to-value.

Review the asset. Is it genuinely interactive? Can you edit the input fields? Does the output change when you change the inputs? Or is it a static HTML page with hardcoded numbers?

### Step 2: Configure Brand Voice

Define your brand voice in `sales-marketing.local.md` with at least these parameters:

- **Audience:** Technical buyers (CTOs, VP Engineering) at mid-market companies
- **Tone:** Direct, data-driven, zero superlatives
- **Forbidden words:** "revolutionary," "cutting-edge," "leverage," "synergy," "disrupt"
- **Signature phrases:** Specific to your product positioning

### Step 3: Cross-Channel Audit

Run `/brand-review` on three pieces of content you have produced in this chapter:

1. The NexaFlow outreach from Exercise 2
2. The ROI calculator from Step 1
3. The Meridian campaign blog post from Exercise 4

Does the brand voice hold across all three? Does the outreach say "leverage our platform" while the brand voice forbids "leverage"? Does the ROI calculator use superlatives ("revolutionary savings") while the brand voice says "zero superlatives"? Does the blog post match the direct, data-driven tone?

**Error to watch for: Context Loss.** The brand voice configuration lives in `sales-marketing.local.md`. The `outreach` skill and `create-an-asset` skill may or may not reference the brand voice section when generating output. If the outreach uses forbidden words that are defined in the brand voice configuration, the skill did not consume the brand voice context. That is Context Loss — the configuration exists, but the generating skill did not use it.

**What success looks like:** An interactive ROI calculator with editable inputs. A configured brand voice with specific parameters. A cross-channel audit showing where brand consistency holds and where it breaks. At least one Context Loss instance identified where a skill ignored brand voice configuration.

---

## Exercise 6: Agent Architecture Challenge

**Connects:** L13 (RevOps agents) + L14 (skill library architecture) + L15 (extending plugins)

**Duration:** 30 minutes

### The Task

Design and deploy a two-agent RevOps system: one monitoring agent and one reactive agent. Then trace their coordination and identify where human gates are needed.

### Step 1: Deploy the Monitoring Agent

The **Lead Intelligence Agent** from L13 monitors your pipeline for buying signals — job postings, funding announcements, technology changes, executive moves. Configure it to watch three prospects from your pipeline.

Run it. What signals does it detect? Are the signals real or hallucinated? Check at least one signal against a public source. If the agent reports "NexaFlow posted a Senior Kafka Engineer role on LinkedIn" — is that posting real? Can you find it?

### Step 2: Deploy the Reactive Agent

The **Outreach Sequencing Agent** from L13 reacts to Lead Intelligence signals by initiating outreach sequences. When Lead Intelligence flags a buying signal, Outreach Sequencing starts a sequence.

Configure the reactive agent to watch Lead Intelligence output. Set it to trigger a 3-touch sequence when a prospect shows a technology hiring signal.

### Step 3: Trace the Coordination

Now watch the two agents work together. Lead Intelligence detects a signal. Outreach Sequencing starts a sequence. Trace the full flow:

1. What signal did Lead Intelligence detect?
2. Is that signal verified or hallucinated? (**Hallucinated Data** check)
3. What sequence did Outreach Sequencing trigger?
4. Does the sequence reference the specific signal? Or is it generic? (**Context Loss** check)
5. If the signal was hallucinated, the entire sequence is based on fabricated intelligence. The outreach references a job posting that does not exist. The prospect receives a message about a hiring need they do not have. That is worse than a cold email — it is a warm email based on a lie.

### Step 4: Identify Human Gates

Where in this two-agent system does a human need to approve before the system acts? Map every decision point:

| Decision Point | Current: Agent or Human? | Should Be: Agent or Human? | Why? |
|---|---|---|---|
| Detect buying signal | Agent | Agent | Monitoring is low-risk, high-volume |
| Verify signal accuracy | ? | Human | Hallucinated signals trigger false outreach |
| Initiate outreach sequence | ? | ? | Depends on signal confidence |
| Continue past Touch 2 | ? | Human | Over-Automation risk after initial touches |
| Escalate to account executive | ? | Human | AE time is expensive, needs justified allocation |

**Error to diagnose: Over-Automation.** The two-agent system has no human gate between "signal detected" and "sequence started." Lead Intelligence flags a signal. Outreach Sequencing acts on it immediately. If the signal is hallucinated, the outreach fires before anyone checks. If the prospect recently said "not interested," the sequence fires anyway because Lead Intelligence does not check CRM disposition — it checks buying signals. A human between detection and action would catch both cases.

**What success looks like:** Two agents deployed and coordinated. A signal trace from detection through outreach. At least one hallucination check on a detected signal. A human gate map showing where the system needs approval checkpoints. A documented Over-Automation risk with a proposed architectural fix.

---

## Capstone: Your Revenue Engine, End-to-End

**Duration:** 45-60 minutes

Select one of the six exercises above. Run it end-to-end with your real business data.

Not NexaFlow. Not Meridian. Your actual prospects, your actual ICP, your actual competitors, your actual brand voice.

### Requirements

1. **Real data.** Use prospects currently in your pipeline. Use your actual ICP configuration. Use competitors you face in deals. If you do not have an active pipeline, use the last 3 companies that evaluated your product.

2. **Full execution.** Do not skip stages. If you choose Exercise 2 (Prospect-to-Meeting Pipeline), run all eight stages. If you choose Exercise 1 (ICP Calibration Sprint), score all three prospects and recalibrate.

3. **Error diagnosis.** Identify and classify at least 2 Agent Output Taxonomy errors. Use the exact taxonomy name. Trace each error to its root cause. Propose a specific fix.

4. **Written deliverable.** Produce a brief report (one page is sufficient) that includes:
   - Which exercise you ran
   - The real business data you used (prospect names, ICP parameters)
   - The workflow stages you executed
   - The 2+ errors you found, classified by taxonomy
   - The root cause of each error
   - The fix you would implement

### Choosing Your Exercise

Pick based on where your sales process needs the most work:

| If Your Priority Is... | Choose | Because |
|---|---|---|
| Targeting accuracy | Exercise 1: ICP Calibration Sprint | Forces you to test your ICP against real prospects |
| End-to-end pipeline execution | Exercise 2: Prospect-to-Meeting Pipeline | Tests every stage with real data |
| Competitive positioning | Exercise 3: Five Laws Audit + Competitive Outreach | Validates your competitive intelligence |
| Marketing scale | Exercise 4: Campaign + Content Factory | Tests content quality at volume |
| Brand consistency | Exercise 5: Sales Asset Workshop | Audits your brand voice across channels |
| Systems architecture | Exercise 6: Agent Architecture Challenge | Validates your agent coordination design |

### What the Capstone Tests

The capstone is not about producing a perfect pipeline output. Agents will hallucinate. Scores will miscalibrate. Context will be lost. Sequences will over-automate. Compliance gaps will appear.

The capstone tests whether you can **operate the system, evaluate its output, and catch its mistakes before they reach the prospect.** That is the skill. Not prompting. Not configuring. Diagnosing. Every lesson in this chapter built one piece of that diagnostic capability. The capstone assembles the full toolkit and deploys it against real revenue.

### Evaluation Criteria

| Criterion | What We Are Looking For |
|---|---|
| **Execution completeness** | All stages of the chosen exercise were run — no stages skipped |
| **Data authenticity** | Real prospects, real ICP, real competitors — not hypothetical |
| **Error identification** | 2+ errors found and correctly classified by Agent Output Taxonomy |
| **Root cause analysis** | Each error traced to a specific cause (not "the agent was wrong") |
| **Proposed fix** | Each error has a concrete, implementable fix |

A report with 2 well-diagnosed errors is stronger than a report with 5 vaguely described problems. Precision matters more than volume.

---

## Error Frequency by Workflow Stage

After completing your exercises, this reference shows where each error type most commonly appears. Use it to guide your diagnostic focus.

| Workflow Stage | Most Common Error | Second Most Common | Why |
|---|---|---|---|
| Research (L01) | Hallucinated Data | — | Agent fills data gaps with fabrication |
| Scoring (L03) | Miscalibrated Scoring | Hallucinated Data | ICP gaps + hallucinated inputs compound |
| Outreach (L04) | Compliance Gap | Over-Automation | Legal requirements exist outside content quality |
| Sequences (L05) | Over-Automation | Context Loss | No stop rules + personalisation decay |
| Pipeline (L06) | Context Loss | Miscalibrated Scoring | Handoff points lose intelligence |
| Campaigns (L08) | Hallucinated Data | Compliance Gap | Market stats fabricated, regional rules missed |
| Assets (L09) | Context Loss | Hallucinated Data | Brand voice not consumed, ROI figures invented |
| Agent Coordination (L13-L15) | Over-Automation | Hallucinated Data | No human gates + fabricated signals |

The pattern: early stages tend toward fabrication errors (Hallucinated Data, Miscalibrated Scoring). Late stages tend toward flow errors (Context Loss, Over-Automation). Compliance Gaps appear wherever the output touches a prospect — outreach, campaigns, and any agent-generated communication.

---

## Try With AI

**Setup:** Open Claude Code with your sales-marketing plugins installed and `sales-marketing.local.md` configured with your real business data.

**Prompt 1:**

```
I just ran my full prospect-to-meeting pipeline for [Prospect Name].
Here is the output from each stage:

[Paste your Stage 1-8 outputs]

Review the full pipeline. For each stage, identify:
1. What intelligence arrived from the upstream stage
2. What intelligence was generated fresh
3. What intelligence was available upstream but NOT used (Context Loss)
4. What claims cannot be independently verified (Hallucinated Data)

Then classify every error you find using the Agent Output Taxonomy:
Hallucinated Data, Miscalibrated Scoring, Compliance Gap,
Over-Automation, or Context Loss. For each error, trace the root
cause and propose a fix.
```

**What you are learning:** Using AI to audit AI output. The agent reviewing the pipeline did not produce the pipeline — it is evaluating it. This is a second-pass diagnostic pattern: run a workflow with one agent, then review the output with a fresh agent context. The reviewing agent will catch errors that the producing agent cannot see because the producing agent was optimising for generation, not evaluation.

**Prompt 2:**

```
Here is my ICP configuration from sales-marketing.local.md:

[Paste your ICP YAML]

And here are the scores for 3 prospects:
- Prospect A (strong fit): [score]
- Prospect B (strong fit): [score]
- Prospect C (deliberate misfit): [score]

Prospect C scored [X], which is higher than expected for a
company I know is a poor fit. Diagnose the miscalibration.
Which ICP section is too broad? What negative signal is missing?
Propose specific edits to the ICP that would drop Prospect C
below 50 without affecting the scores for Prospects A and B.
```

**What you are learning:** Collaborative ICP refinement. You bring the domain knowledge (which prospect is a misfit and why). The agent brings systematic analysis of the ICP configuration. Neither can solve this alone — you know the prospect is wrong-fit but may not see which ICP criterion is too broad; the agent can trace the scoring logic but does not know which prospect is genuinely wrong-fit. This is the convergence pattern: your judgment plus the agent's analysis produces a better ICP than either could produce independently.
