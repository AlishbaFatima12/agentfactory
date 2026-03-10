---
sidebar_position: 11
title: "Override, Delegation, and the Five Laws as Design Force"
description: "Why the extension overrides prospect-research and outreach instead of wrapping them, how the Five Laws make Override necessary, and how the sales-marketing-global-router uses Delegation to route between layers"
keywords:
  [
    "override pattern",
    "delegation pattern",
    "collision resolution",
    "Five Laws design force",
    "prospect-research skill",
    "outreach skill",
    "sales-marketing-global-router",
    "plugin architecture",
    "skill collision",
    "design reasoning",
    "base vs extension",
  ]
chapter: 23
lesson: 11
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Explain Why Override Is Necessary for outreach and prospect-research"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can explain why running both layers for outreach produces contradictions, trace the necessity to the Five Laws, and predict what breaks if Override is changed to Wrapper"

  - name: "Trace the Router's Delegation Logic"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can trace how the sales-marketing-global-router decides whether to send a query to the base or the extension based on complexity and skill availability"

  - name: "Evaluate Collision Resolution Patterns for New Skills"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Given a hypothetical new skill, student can determine whether it should use Wrapper, Override, or Delegation and defend the design reasoning"

learning_objectives:
  - objective: "Explain why prospect-research and outreach use Override and trace the design reasoning to specific technical requirements (structured scoring, Five Laws enforcement)"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can demonstrate what breaks when both layers run for outreach and explain why Five Laws cannot be enforced without extension data"

  - objective: "Trace the sales-marketing-global-router's delegation logic for different query types"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can predict which layer handles 5 different query types and explain the router's decision criteria"

  - objective: "Evaluate whether a new hypothetical skill should use Wrapper, Override, or Delegation with defended reasoning"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student correctly classifies 3 hypothetical skills and provides design reasoning for each"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Override pattern (extension REPLACES base for specific skills)"
    - "Delegation pattern (router decides which layer handles the query)"
    - "Five Laws as design force (why Override is necessary for outreach)"
    - "Duplicate output problem (what happens when both layers run)"
    - "Router decision logic (complexity-based routing)"
  assessment: "5 concepts at B2 level. Builds directly on L10's Wrapper concept. The Five Laws connection back to L04 provides the most important design insight."

differentiation:
  extension_for_advanced: "Map every skill in the extension to its collision resolution pattern. For the Overrides, identify what the base would produce if the override were removed. For the Wrappers, identify what each layer contributes. Create an architecture decision record for the plugin."
  remedial_for_struggling: "Focus on the Five Laws reveal: run base Anthropic outreach without the extension, audit against Five Laws from L04. If you can identify which Laws get violated without the extension, you understand WHY Override is necessary."
---

# Override, Delegation, and the Five Laws as Design Force

In Lesson 10, you saw how the Wrapper pattern lets both plugin layers execute together -- the base handles general research and the extension adds ICP scoring, and neither layer contradicts the other. Wrapper works when both layers contribute something distinct. This lesson covers the two cases where Wrapper fails and what the architecture does instead.

The first case is **duplicate output**. When the extension's `prospect-research` skill produces everything the base does plus three-dimension scoring, running both layers gives you two research briefs for the same prospect -- one flat, one scored, with overlapping company data and conflicting emphasis. The second case is **contradictory output**. When the extension's `outreach` skill enforces the Five Laws from Lesson 4, the base's generic outreach alongside it produces messages that violate the very constraints the extension is designed to enforce. These two cases require two different solutions: **Override** and **Delegation**.

## Override: When One Layer Replaces Another

The **Override** pattern means the extension completely replaces the base skill for a specific command. When you run `/research-prospect` with the extension active, the base `prospect-research` skill does not execute at all. The extension's version runs alone. Same for `outreach` -- the extension replaces the base's outreach generation entirely.

This sounds aggressive. Wrapper feels safer -- let both layers contribute. To understand why Override is necessary, you need to see what happens when both layers run.

### The Duplicate Output Problem: prospect-research

Imagine both layers execute when you run `/research-prospect NexaFlow Technologies Karachi`. The base produces its standard research brief -- company overview, key personnel, financial signals, technology stack, engagement signals. You saw this output in Lesson 1. The extension produces its own research brief that includes everything the base produces **plus** the ICP Match Assessment, three-dimension Fit/Timing/Engagement scoring, and the Recommended Approach section.

Here is what the combined output looks like:

```
══════════════════════════════════════
  BASE PLUGIN OUTPUT
══════════════════════════════════════

COMPANY OVERVIEW
  Founded:        2021
  Headquarters:   Clifton, Karachi
  Employees:      85-120 (estimated from LinkedIn)
  Industry:       Logistics Technology

KEY PERSONNEL
  CEO: Farhan Ahmed — Stanford MBA 2018
  CTO: Mehreen Qazi — prev. Careem (Dubai)
  VP Sales: Bilal Hussain — joined Oct 2025

FINANCIAL SIGNALS
  Funding: Series A closed Jun 2025, PKR 850M

[... 40 more lines of company data ...]

══════════════════════════════════════
  EXTENSION OUTPUT
══════════════════════════════════════

PROSPECT RESEARCH BRIEF
  NexaFlow Technologies — Karachi, Pakistan

ICP MATCH ASSESSMENT
  Match Score: 82/100 — STRONG FIT

COMPANY OVERVIEW
  Founded:        2021
  Headquarters:   Clifton, Karachi
  Employees:      85-120 (estimated from LinkedIn)
  Industry:       Logistics Technology

KEY PERSONNEL
  CEO: Farhan Ahmed — Stanford MBA 2018
  CTO: Mehreen Qazi — prev. Careem (Dubai)
  VP Sales: Bilal Hussain — joined Oct 2025

FINANCIAL SIGNALS
  Funding: Series A closed Jun 2025, PKR 850M

SCORING
  Fit: 33/40 | Timing: 40/40 | Engagement: 8/20

RECOMMENDED APPROACH
  Entry Point: Data pipeline bottleneck
  Lead With: PostgreSQL scaling diagnosis
  Decision Maker: Mehreen Qazi (CTO)

[... full scored brief ...]
```

**Output:**

Two research briefs for the same prospect. The company overview, key personnel, and financial signals appear twice -- once from the base and once from the extension. A sales rep reading this output would scroll through 80+ lines of duplicate data to find the scoring section buried at the bottom.

Worse than the duplication is the emphasis conflict. The base brief presents all financial signals with equal weight -- it has no ICP to tell it what matters. The extension brief highlights Kafka job postings and the data team expansion because those match the ICP's technology signals. A rep reading both briefs gets two different stories about the same company: a generic overview and a focused assessment. Which one do they trust? Which one do they share with their manager?

**Override eliminates the problem.** When `prospect-research` is an Override skill, the extension runs alone. One brief. One emphasis. One set of recommendations. The extension includes everything the base would have produced -- company overview, personnel, financials, technology stack -- plus the scoring and tactical recommendations. Nothing is lost. The duplication and the conflicting emphasis are gone.

### The Five Laws Reveal: Why outreach Must Be Override

The `prospect-research` override is about efficiency -- removing redundancy. The `outreach` override is about necessity. The Five Laws from Lesson 4 cannot be enforced if both layers run.

To see why, run the base Anthropic outreach without the extension loaded. You already did this in Lesson 4. Here is the output again, with the Five Laws audit:

```
Base outreach (no extension):

Subject: Helping logistics companies optimise routes

Hi Tariq,

I hope this email finds you well. I wanted to reach out because
we work with logistics companies across South Asia to help them
optimise their delivery routes and reduce operational costs.

Our platform leverages advanced algorithms to provide scalable
route optimisation for last-mile delivery networks. Companies
like yours typically see a 20-40% reduction in delivery costs
within the first quarter.

I would love to schedule a quick call to discuss how we can help
NexaFlow achieve similar results. Would you also like to see a
case study from a similar company?

Looking forward to hearing from you.

Best regards,
Amir
```

Now audit against the Five Laws:

| Law | Status | Violation |
|-----|--------|-----------|
| **Law 1: Specific Verifiable Reference** | **FAIL** | No specific reference to NexaFlow. "Logistics companies across South Asia" could be sent to 500 companies unchanged. Nothing the prospect can verify. |
| **Law 2: Lead with Prospect** | **FAIL** | First substantive sentence begins with "I wanted to reach out because _we_ work with..." -- the sender, not the prospect. |
| **Law 3: One Ask** | **FAIL** | Two asks: "schedule a quick call" and "Would you also like to see a case study?" |
| **Law 4: Hard Word Limits** | PASS | 118 words. Within the 150-word cold email limit. |
| **Law 5: Zero Jargon** | **FAIL** | "leverages" (banned) and "scalable" (banned). Two violations from the banned-words list. |

Four of five laws violated. Now understand _why_ each law fails:

**Law 1 fails because the base lacks ICP-matched research.** A Specific Verifiable Reference requires intelligence about the prospect -- their Series B announcement, their Lahore warehouse leases, their Kafka job postings. The base outreach skill has no access to the extension's structured research data. Without the ICP-filtered `/research-prospect` output feeding into the outreach generation, the base defaults to generic positioning. It cannot produce a reference the prospect can verify because it does not know what to reference.

**Law 2 fails because the base has no prospect-first template.** The extension's outreach skill is architecturally constrained to begin with a prospect fact. The base skill has no such constraint. It follows standard email conventions -- greeting, sender introduction, value proposition -- which puts the sender before the prospect.

**Law 3 fails because the base does not enforce ask limits.** The extension's outreach skill counts calls to action and rejects drafts with more than one. The base skill generates natural-sounding emails, and natural-sounding emails often contain multiple asks because that is what most email training data looks like.

**Law 5 fails because the base has no banned-words filter.** The extension's outreach skill checks every word against the 17-word banned list from Lesson 4. The base skill generates fluent business English, and fluent business English is full of words like "leverage" and "scalable."

### What Happens If Both Layers Run

Now imagine Wrapper mode for outreach. Both the base and the extension execute. You get two outputs:

1. The base's 118-word generic email with four law violations
2. The extension's 108-word Five Laws-compliant email with zero violations

Which email does the agent send? In Wrapper mode, the outputs are merged or concatenated. But these outputs cannot be merged. They contradict each other. The base says "I wanted to reach out because _we_ work with logistics companies." The extension says "Your Series B announcement on March 3rd and the three warehouse leases filed in Lahore this month suggest NexaFlow is scaling." One opens with the sender. The other opens with the prospect. You cannot combine them into a single coherent message.

**This is the structural argument for Override.** The Five Laws are hard constraints. A message either satisfies them or it does not. A message cannot half-satisfy Law 2 by opening with the sender sometimes and the prospect other times. The extension's outreach skill is designed from the ground up to enforce all five laws. Running the base alongside it introduces violations that the extension cannot clean up because the violations are in the base output, not in the extension's output.

Override is not a preference. It is a structural necessity created by the Five Laws. If you changed `outreach` from Override to Wrapper, every outreach message would contain a law-compliant section and a law-violating section in the same output. Your reps would receive contradictory guidance from a single command.

### The Design Force

Notice the reasoning chain:

1. Lesson 4 established the Five Laws as hard constraints on outreach
2. The extension's `outreach` skill enforces those constraints
3. The base's outreach skill does not -- and cannot -- enforce them because it lacks the ICP data and the constraint architecture
4. Running both layers produces contradictory output
5. Override is the only pattern that preserves the Five Laws as hard constraints

The Five Laws are the **design force** behind the Override pattern for `outreach`. The laws were not designed to justify Override -- they were designed to produce effective outreach. Override is the consequence of taking them seriously as engineering requirements rather than writing guidelines. When a constraint is hard, the system enforcing it must have full control of the output. Wrapper mode distributes control between two layers. Override concentrates it.

The same logic applies to `prospect-research`, though less dramatically. The three-dimension scoring model from Lesson 3 requires structured data from the ICP configuration. The base produces flat intelligence. The extension produces scored intelligence. Running both produces duplicate data with conflicting emphasis. Override removes the duplication and concentrates the scoring logic in a single layer.

## Delegation: When the Router Decides

**Override** replaces the base for specific skills. **Delegation** is different. It lets the `sales-marketing-global-router` decide which layer handles each query based on what the query needs.

The **`sales-marketing-global-router`** is the skill that intercepts every command and decides how to route it. For Wrapper skills, it sends the query to both layers. For Override skills, it sends it to the extension only. For Delegation skills, it evaluates the query and routes it to whichever layer is best suited.

### How the Router Decides

The router uses two criteria:

**Criterion 1: Complexity.** Does this query require ICP-specific data, multi-dimension scoring, or Five Laws enforcement? If yes, the extension handles it. If no, the base is sufficient.

**Criterion 2: Skill availability.** Does the extension have a skill for this query? If the query involves a capability that only exists in the base (like a generic knowledge lookup that the extension has not customised), the base handles it.

Here are five example queries and how the router routes each one:

| Query | Routed To | Reason |
|-------|-----------|--------|
| "What is NexaFlow's tech stack?" | **Base** | Simple factual lookup. No ICP scoring needed. The base's `prospect-research` skill handles informational queries without the overhead of three-dimension scoring. |
| "Score this prospect against our ICP and recommend an action" | **Extension** | Requires ICP configuration, three-dimension scoring, and classification logic. The base cannot produce this output. |
| "Write a cold email to Tariq at NexaFlow" | **Extension** | Outreach is Override. The extension handles all outreach generation to enforce the Five Laws. |
| "What are the GDPR requirements for cold email to UK prospects?" | **Base** | Compliance knowledge query. The base has general regulatory knowledge. The extension adds jurisdiction-specific overlays, but for a general question the base is sufficient. |
| "Build a 5-touch sequence for NexaFlow with ICP-calibrated messaging" | **Extension** | Multi-step outreach with ICP calibration. Requires extension's scoring data and Five Laws enforcement at each touch point. |

**Observe the pattern.** The router sends simple, factual, single-layer queries to the base. It sends complex, multi-dimension, ICP-dependent queries to the extension. This is not a binary switch -- it is a judgment about what each query needs.

### Why Delegation Is Not Override

You might ask: why not make everything Override? If the extension is better, why ever use the base?

Three reasons.

**First, the extension does not cover everything.** The base Anthropic plugins include capabilities that the Agent Factory extension has not customised -- general market research, competitive landscape analysis, regulatory knowledge. For these queries, the base is the only option. Overriding it with nothing would mean the command fails.

**Second, the base is faster for simple queries.** Loading ICP configuration, running three-dimension scoring, and checking Five Laws compliance adds processing time. For a simple question like "What industry is NexaFlow in?" the base returns the answer immediately. The extension would load the ICP, compute a match score, and generate tactical recommendations -- none of which the user asked for.

**Third, Delegation preserves the base as a fallback.** If the extension encounters an error or the local configuration file is misconfigured, the router can fall back to the base for any query. Override has no fallback -- if the extension fails, the command fails. Delegation maintains graceful degradation.

### The Router in Action: Meridian Logistics

Sarah at Meridian Logistics in London runs a query through the router. Watch the routing decisions:

```
Query: "Research Meridian's competitor TruckFlow and compare their
supply chain offering to ours"

Router analysis:
  - Involves competitor research (base capability)
  - Involves comparison to "ours" (requires ICP configuration)
  - Multi-step query (research + compare)

Routing decision: EXTENSION
Reason: The comparison requires ICP data to determine what
  "ours" means. Without the local configuration, the base
  cannot compare TruckFlow's offering against Meridian's
  specific competitive advantages.
```

```
Query: "What logistics conferences are happening in London
in Q2 2026?"

Router analysis:
  - Factual lookup
  - No ICP data required
  - Single-step query

Routing decision: BASE
Reason: Conference listings are public information. No scoring,
  no ICP filtering, no Five Laws enforcement needed. The base
  returns the answer faster.
```

```
Query: "Generate a follow-up email for the TruckFlow prospect
we researched last week"

Router analysis:
  - Outreach generation (Override skill)
  - Follow-up requires previous research context
  - Five Laws enforcement required

Routing decision: EXTENSION (Override)
Reason: All outreach is Override. The router does not evaluate
  complexity for Override skills — it routes directly to the
  extension.
```

The third example reveals an important detail. **Override skills bypass the router's complexity analysis.** The router does not ask "is this a simple or complex outreach query?" For Override skills, the answer is always the extension. Delegation applies only to skills where the router has a genuine choice between layers.

## Choosing the Right Pattern for a New Skill

You now have three collision resolution patterns in your toolkit:

| Pattern | When to Use | Example |
|---------|-------------|---------|
| **Wrapper** | Both layers contribute something distinct. No overlap, no contradiction. | `campaign-planning`: base provides campaign structure, extension adds ICP-targeted messaging and budget localisation |
| **Override** | The extension includes everything the base does, plus additions. Or the extension enforces constraints the base cannot satisfy. | `prospect-research`: extension includes base data plus scoring. `outreach`: extension enforces Five Laws the base cannot. |
| **Delegation** | Some queries need the extension, others do not. The router decides per query. | `sales-marketing-global-router`: routes simple lookups to base, complex ICP-dependent queries to extension |

The decision process is straightforward:

1. **Does the extension add to the base without replacing any of it?** Use Wrapper.
2. **Does the extension replace what the base does entirely?** Use Override.
3. **Does it depend on the query?** Use Delegation.

### Three Hypothetical Skills

Test your understanding. For each new skill below, decide: Wrapper, Override, or Delegation? There is no single correct answer for all three -- the reasoning matters more than the choice.

#### Skill 1: Meeting Scheduler

A new `meeting-scheduler` skill integrates with calendar tools to propose meeting times after outreach gets a positive reply. The base Anthropic plugin has a basic calendar integration that checks available slots. The extension would add ICP-aware scheduling: priority prospects get preferred time slots, meeting duration adjusts based on the prospect's classification (HOT prospects get 30 minutes, WARM get 15), and the meeting invitation includes a personalised agenda drawn from the research brief.

**Consider:** Does the extension replace the base's calendar logic, or does it add ICP context on top of it? If the base handles the calendar API and the extension handles the personalisation, what pattern is that?

<details>
<summary>Reasoning</summary>

**Wrapper is the strongest choice.** The base handles calendar availability (a mechanical task -- checking slots, resolving conflicts, sending invites). The extension adds ICP-driven personalisation (a contextual task -- adjusting duration, prioritising time slots, writing agendas). Both layers contribute something distinct. The base does what the extension cannot: interact with the calendar API. The extension does what the base cannot: apply ICP context. Neither layer contradicts the other.

You could argue for Override if the extension reimplemented the calendar integration with ICP awareness built in. But that duplicates the base's calendar API logic unnecessarily. Wrapper keeps responsibilities separate and lets each layer do what it does best.

</details>

#### Skill 2: Quarterly Pipeline Review

A `quarterly-review` skill analyses 90 days of pipeline data and produces a performance report. The base has no pipeline review capability -- this is entirely new functionality introduced by the extension.

**Consider:** If the base has no competing skill, is there a collision to resolve?

<details>
<summary>Reasoning</summary>

**No collision resolution needed.** There is no base skill to collide with. The extension introduces `quarterly-review` as a new capability that does not exist in the base. The router recognises it as an extension-only skill and routes all `quarterly-review` queries directly to the extension.

This is a common pattern in extensions: some skills override, some wrap, and some are entirely new. The router handles all three. When a skill exists only in the extension, Delegation is technically the mechanism (the router checks skill availability), but there is no design decision to make -- the extension is the only option.

</details>

#### Skill 3: Competitor Monitoring

A `competitor-monitoring` skill tracks competitor activity -- product launches, pricing changes, hiring patterns, customer wins. The base Anthropic plugin has a `competitive-intelligence` skill that performs general competitive analysis. The extension would add ICP context: highlighting competitors who are winning prospects that match your ICP, tracking pricing changes that affect your competitive positioning, and alerting when a competitor hires in your target geography.

**Consider:** Does the extension's competitor monitoring replace the base's competitive intelligence, or does it add a layer? What happens if a rep asks "What has TruckFlow been up to lately?" versus "Which competitors are winning our ICP-matched prospects?"

<details>
<summary>Reasoning</summary>

**Delegation is the strongest choice.** The general query ("What has TruckFlow been up to?") is a factual lookup that the base's `competitive-intelligence` skill handles well. No ICP data needed. The specific query ("Which competitors are winning ICP-matched prospects?") requires the extension's ICP configuration and three-dimension scoring to determine which lost prospects were truly ICP-matched.

You could argue for Override if you believe the extension should handle all competitor queries. But that forces every simple competitive lookup through the ICP scoring pipeline, adding latency without value. Delegation lets the router match the tool to the task: base for general intelligence, extension for ICP-filtered analysis.

</details>

## Hands-On: Map Your Own Configuration

Open your plugin configuration and list every point where the extension overlaps with the base. For each overlap, determine the collision resolution pattern and verify your understanding by testing.

**Step 1: List the overlaps.**

Run the verification command from Lesson 10:

```
claude plugin list --verbose --show-collisions
```

This shows every skill where both the base and extension have a definition. For each collision, the output indicates the resolution pattern: Wrapper, Override, or Delegation.

**Step 2: For each Override skill, test the base alone.**

Disable the extension:

```
claude plugin disable sales-revops-marketing@agentfactory-business
```

Run the Override skill's command. For `outreach`, generate a cold email for one of your prospects. Audit the output against the Five Laws. Count the violations.

Re-enable the extension:

```
claude plugin enable sales-revops-marketing@agentfactory-business
```

Run the same command. Audit the output again. The difference between the two audits is the case for Override.

**Step 3: For each Delegation skill, test both routes.**

Run a simple query that should route to the base. Then run a complex query that should route to the extension. Verify that the router made the correct decision by checking whether the output includes ICP scoring (extension) or just factual data (base).

**Step 4: Evaluate the design choices.**

For each collision, ask yourself: do you agree with the pattern chosen? Is there an overlap where you would change Override to Wrapper, or Wrapper to Delegation? If so, what changes about the output? What is gained and what is lost?

Write your findings in a brief architecture note. For each collision, record: the skill name, the current pattern, your assessment, and your reasoning. This is the kind of document that makes plugin decisions traceable for your team.

## Try With AI

Use these prompts in Claude or your preferred AI assistant.

### Prompt 1: Trace a Five Laws Violation to an Architecture Decision

```
I have a dual-layer plugin architecture for sales. The base layer
handles general outreach. The extension layer enforces Five Laws:

Law 1: Specific Verifiable Reference
Law 2: Lead with Prospect
Law 3: One Ask
Law 4: Hard Word Limits (150 cold / 300 warm)
Law 5: Zero Jargon (17 banned words)

I am debating whether the extension's outreach skill should use
Override (replace the base entirely) or Wrapper (run alongside
the base and merge outputs).

Argue both sides:
1. What is the case FOR Wrapper? What would the merged output
   look like? Is there anything the base contributes that the
   extension does not?
2. What is the case FOR Override? What contradictions arise if
   both layers run? Which specific Five Laws get violated in
   merged output?
3. Give your recommendation and explain which argument wins.
```

**What you are learning:** Debating both sides of an architecture decision forces you to articulate the trade-offs rather than accepting the pattern as given. The exercise builds the skill of defending design decisions -- the same skill you need when a colleague asks "Why does this skill override the base instead of wrapping it?" and expects a specific, reasoned answer rather than "because that is how we set it up."

### Prompt 2: Design a Collision Resolution Strategy for a New Extension

```
I am building a new plugin extension for [describe your business
domain — e.g., recruiting, consulting, real estate].

My extension adds these skills:
1. [Skill that enhances existing base capability]
2. [Skill that replaces existing base capability]
3. [Skill that is entirely new — no base equivalent]

For each skill, recommend: Wrapper, Override, or Delegation.

For each recommendation:
- What happens if both layers run? Show the output conflict.
- What happens if only the extension runs? What is gained/lost?
- What happens with Delegation? How does the router decide?

Then design the router logic: what criteria should the router
use to decide between layers? Give me 5 example queries and
the routing decision for each.
```

**What you are learning:** Designing collision resolution for your own domain forces you to apply the patterns rather than recognise them in someone else's architecture. The exercise reveals which pattern decisions are obvious (a skill with no base equivalent needs no collision resolution) and which require genuine judgment (should a skill that enhances AND partially replaces use Wrapper or Delegation?). The router design exercise builds the habit of thinking about architecture as a set of routing decisions, not a set of files.
