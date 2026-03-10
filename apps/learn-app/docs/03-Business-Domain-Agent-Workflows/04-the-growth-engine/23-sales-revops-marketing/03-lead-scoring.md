---
sidebar_position: 3
title: "Scoring, Qualifying, and Keeping Data Alive"
description: "Build and evaluate the three-dimension lead scoring model using /score-lead, diagnose miscalibrated scores, understand score decay over time, and use the crm-enrichment skill to resolve conflicting data sources"
keywords:
  [
    "lead scoring",
    "score-lead",
    "three-dimension scoring",
    "fit score",
    "timing score",
    "engagement score",
    "score decay",
    "CRM enrichment",
    "crm-enrichment skill",
    "data quality",
    "miscalibrated scoring",
    "lead qualification",
  ]
chapter: 23
lesson: 3
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Interpret Three-Dimension Lead Scores and Determine Action"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can read a /score-lead output, identify which dimension drives the score, determine the correct action (outreach, nurture, monitor, disqualify), and explain their reasoning"

  - name: "Diagnose Miscalibrated Scoring"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can identify when a score contradicts domain knowledge, trace the miscalibration to a specific ICP section or scoring weight, and propose a correction"

  - name: "Manage Score Decay and CRM Enrichment"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can explain why scores decay without new signals, demonstrate re-scoring after enrichment, and resolve conflicting data sources using the crm-enrichment skill"

learning_objectives:
  - objective: "Use /score-lead to score prospects and interpret the three-dimension output (Fit 40, Timing 40, Engagement 20) to determine the correct sales action"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student scores 5 prospects and correctly classifies each with the appropriate action based on dimension analysis"

  - objective: "Diagnose miscalibrated scores by comparing agent output to domain knowledge and tracing errors to specific ICP sections"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given a score that contradicts known reality, student identifies which ICP section or weight caused the miscalibration"

  - objective: "Explain score decay and demonstrate how the crm-enrichment skill resolves conflicting data sources to maintain score accuracy"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student can show the same prospect scored at two time points and explain why the score changed, then use crm-enrichment to update stale data"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Three-dimension scoring model (Fit 40 / Timing 40 / Engagement 20)"
    - "Miscalibrated Scoring as an agent error type"
    - "Score decay over time without new signals"
    - "Lead classification levels (HOT, WARM, CULTIVATE, NOT YET)"
    - "CRM enrichment as continuous data maintenance"
    - "Conflicting data sources and resolution"
    - "Re-scoring cadence as operational discipline"
  assessment: "7 concepts at B1 level. Scoring model is the foundation; miscalibration diagnosis requires analytical thinking. Score decay introduces temporal reasoning."

differentiation:
  extension_for_advanced: "Score 10 prospects. Plot Fit vs Timing on a 2x2 grid. Which quadrant has the most prospects? What does that tell you about your pipeline health? Design a re-scoring schedule based on signal freshness."
  remedial_for_struggling: "Focus on scoring 3 prospects with /score-lead and correctly determining the action for each based on the classification. If you can explain why a high-Fit, low-Timing prospect needs monitoring rather than outreach, you have the core concept."
---

# Scoring, Qualifying, and Keeping Data Alive

In Lesson 2, you built your Ideal Customer Profile and ran `/research-prospect` to generate intelligence briefs. You now have a list of prospects with deep research behind them. The next question is the one every sales leader asks on Monday morning: **which of these prospects should my team call first?**

Your ICP tells you whether a prospect fits your business. Scoring goes further. It tells you three things at once: right company (**Fit** -- 40 points), right time (**Timing** -- 40 points), paying attention (**Engagement** -- 20 points). Most scoring models get Fit right and ignore Timing entirely. That is why pipelines fill up with prospects who match perfectly and never buy. A perfect-fit prospect in the middle of a cost-cutting freeze is not a lead. A decent-fit prospect who just closed a funding round and is hiring three sales roles is.

This lesson introduces the `/score-lead` command, shows you how to read its three-dimension output, and teaches you to catch the second agent error type in our taxonomy: **Miscalibrated Scoring**. In Lesson 1, you learned that agents hallucinate data. Here you learn that agents also miscalibrate judgment -- they produce scores that are technically correct given their inputs but wrong given what you know about the market.

## The Three-Dimension Scoring Model

The `/score-lead` command evaluates prospects across three independent dimensions. Each dimension answers a different question:

| Dimension       | Points | Question It Answers                                   |
| --------------- | ------ | ----------------------------------------------------- |
| **Fit**         | 40     | Does this company match our ICP?                      |
| **Timing**      | 40     | Is this the right moment to sell to them?             |
| **Engagement**  | 20     | Does this prospect know we exist?                     |

The weighting is deliberate. Fit and Timing carry equal weight because both are deal-breakers. A company that matches your ICP perfectly but has no budget right now will not buy. A company with urgent need but the wrong tech stack will not implement. Engagement carries less weight because it is the dimension you can change most directly through marketing and outreach.

### Why Not a Single Score?

A single composite score hides the story. A prospect scoring 72/100 could be:

- **Fit 35 + Timing 35 + Engagement 2** -- great company, great timing, but they have never heard of you
- **Fit 12 + Timing 38 + Engagement 22** -- wrong company that happens to be buying and follows your blog
- **Fit 30 + Timing 10 + Engagement 32** -- decent fit, no urgency, but very engaged with your content

Each of these prospects needs a completely different action. The composite number is the same. The three-dimension breakdown tells you what to do next.

## Worked Example: NexaFlow Prospect 001

Farhan at NexaFlow Technologies in Karachi runs `/score-lead` on a prospect from their pipeline. Here is the full annotated output:

```
/score-lead NexaFlow-prospect-001
```

**Output:**

```
PROSPECT SCORE — NexaFlow-prospect-001

TOTAL: 81/100
Classification: HOT

DIMENSION BREAKDOWN:
  Fit:        33/40
    Industry match:     10/10  (SaaS B2B — exact match)
    Company size:       10/10  (120 employees — within ICP range)
    Tech stack:          8/10  (uses 3 of 4 target platforms)
    Geography:           5/10  (MENA region — partial match)

  Timing:     40/40
    Funding signal:     15/15  (Series B announced 28 days ago)
    Hiring signal:      15/15  (3 open sales roles on LinkedIn)
    Tech investment:    10/10  (new CRM implementation in progress)

  Engagement:  8/20
    Website visits:      3/10  (1 visit, 2 pages, 45 seconds)
    Content downloads:   0/5   (no downloads)
    Event attendance:    0/5   (no events)
    Email interaction:   5/5   (opened 1 newsletter)

ACTION RECOMMENDATION: Awareness campaign before direct outreach.
High Fit + High Timing + Low Engagement = prospect matches ICP
and has budget NOW, but does not know you exist.
```

Read the dimensions, not the total. The total says 81 -- a strong score. But the dimension breakdown reveals the real story:

**Fit (33/40):** Strong match. The company is in the right industry, the right size, and uses most of the right technology. The geography deduction is minor -- MENA region is adjacent to Farhan's primary market of Pakistan and the Gulf.

**Timing (40/40):** Perfect. This prospect announced a Series B within the last month, is hiring sales roles (a signal of growth investment), and is implementing a new CRM (meaning they are actively spending on sales infrastructure). Every timing signal is green.

**Engagement (8/20):** Almost nothing. One website visit. One newsletter open. No downloads, no event attendance. This prospect does not know NexaFlow exists.

The action flows directly from the dimensions. You do not cold-call someone who has never heard of you, no matter how good the fit. High Fit plus high Timing plus low Engagement equals an awareness campaign first -- targeted content, social engagement, warm introduction through a mutual connection. Build recognition before you ask for a meeting.

### The Four Classification Levels

The `/score-lead` command classifies every prospect into one of four levels based on the total score and dimension balance:

| Classification | Total Score | Dimension Requirements           | Action                                   |
| -------------- | ----------- | -------------------------------- | ---------------------------------------- |
| **HOT**        | 75-100      | Fit >= 25 AND Timing >= 25      | Immediate outreach or awareness campaign |
| **WARM**       | 55-74       | Fit >= 20 OR Timing >= 20       | Nurture sequence with personalisation    |
| **CULTIVATE**  | 35-54       | At least one dimension above 15 | Monitor; add to newsletter and events    |
| **NOT YET**    | 0-34        | No dimension above 15           | Disqualify or defer to future quarter    |

Notice that classification depends on both the total score and the dimension balance. A prospect with Fit 38 and Timing 0 would score 38 total but would not classify as CULTIVATE under the dimension requirements -- a zero-Timing prospect with no engagement is not worth monitoring.

## Introducing Miscalibrated Scoring

In Lesson 1, you learned that agents produce **Hallucinated Data** -- fabricated facts that look plausible. Here you meet the second agent error type: **Miscalibrated Scoring**.

Miscalibrated Scoring is more dangerous than hallucinated data because it looks correct. The agent follows its scoring logic perfectly. Every calculation checks out. But the score contradicts what you know about the market.

### The Startup That Scored 85% Fit

Farhan's ICP defines NexaFlow's ideal customer as "B2B SaaS companies with 50-500 employees." He runs `/score-lead` on a 12-person startup that launched six months ago:

```
/score-lead NexaFlow-prospect-007
```

**Output:**

```
PROSPECT SCORE — NexaFlow-prospect-007

TOTAL: 74/100
Classification: WARM

DIMENSION BREAKDOWN:
  Fit:        34/40
    Industry match:     10/10  (SaaS B2B — exact match)
    Company size:        9/10  (12 employees — flagged as
                                "early-stage but within sector")
    Tech stack:         10/10  (modern stack, all 4 platforms)
    Geography:           5/10  (Lahore — same country)

  Timing:     32/40
    Funding signal:     10/15  (seed round 3 months ago)
    Hiring signal:       7/15  (hiring 2 engineers)
    Tech investment:    15/15  (greenfield — building from scratch)

  Engagement: 8/20
    ...
```

Farhan immediately spots the problem. A 12-person startup scoring 34/40 on Fit? His ICP says 50-500 employees. A 12-person company is below the minimum. They cannot afford NexaFlow's pricing. They do not have the team to implement the product. They will churn within three months.

The agent gave a high score because the ICP's firmographic section has a gap. It specifies "B2B SaaS" as the industry criterion and "50-500 employees" as the size criterion, but the scoring weights treat industry match (10 points) and size match (10 points) as independent. The startup got full marks on industry and nearly full marks on size because the scoring model's thresholds allow a gradual curve rather than a hard cutoff at 50 employees.

**The score is technically correct given the ICP. The ICP is wrong.**

### Tracing the Miscalibration

To diagnose a miscalibrated score:

1. **Identify the contradiction.** The score says HOT or WARM. Your experience says no.
2. **Isolate the dimension.** Which dimension is inflated? In this case, Fit.
3. **Trace to the ICP section.** The firmographic section's employee-count threshold is too soft. It allows a gradual curve instead of a hard minimum.
4. **Propose the correction.** Change the ICP: "Minimum 50 employees. Companies below 50 employees score 0/10 on company size regardless of other fit criteria."

After Farhan updates the ICP's firmographic section and re-runs `/score-lead`, the startup's Fit drops from 34/40 to 24/40 and its classification changes from WARM to CULTIVATE. The scoring model now reflects the business reality that sub-50-employee companies are not viable customers.

:::tip Miscalibration Is Feedback, Not Failure
When you find a miscalibrated score, you have found a gap in your ICP configuration. The agent did its job correctly -- it scored against the rules you gave it. The problem is in the rules. Every miscalibration you diagnose and fix makes the scoring model more accurate for every future prospect.
:::

## Score Decay: When Data Ages Out

Scores are not permanent. They are snapshots of a moment. Without new signals, scores decay -- especially Timing, which is the most time-sensitive dimension.

### The Same Prospect, Three Months Later

Farhan re-scores NexaFlow-prospect-001 three months after the initial assessment. No new interactions have occurred. No new signals have entered the system.

| Dimension      | Original Score | Score After 3 Months | Change  | Reason                                      |
| -------------- | -------------- | -------------------- | ------- | ------------------------------------------- |
| **Fit**        | 33/40          | 33/40                | 0       | Company attributes have not changed          |
| **Timing**     | 40/40          | 12/40                | -28     | Funding news is now 4 months old; hiring signals stale; CRM project assumed complete |
| **Engagement** | 8/20           | 8/20                 | 0       | No new interactions to add or subtract       |
| **Total**      | 81/100         | 53/100               | -28     |                                              |
| **Classification** | HOT        | CULTIVATE            | Dropped | Below 55 threshold; Timing below 25         |

The prospect has not changed. They are the same company, the same size, the same industry. But the data has aged. The Series B announcement that made Timing perfect is now four months old -- the funding has been deployed, the hiring decisions have been made, the CRM implementation is probably complete. The window may have closed.

This is **score decay**: the natural erosion of Timing and Engagement signals when no new data enters the system. Fit is the most stable dimension because company attributes (industry, size, tech stack) change slowly. Timing is the most volatile because market signals have a short half-life.

### Decay Rates by Dimension

| Dimension      | Half-Life     | Why                                                    |
| -------------- | ------------- | ------------------------------------------------------ |
| **Fit**        | 6-12 months   | Companies change industry, size, and stack slowly      |
| **Timing**     | 30-90 days    | Funding rounds, hiring signals, and tech investments have short windows |
| **Engagement** | 60-120 days   | A website visit from 4 months ago means little today   |

Half-life means the score loses roughly half its value over that period. A Timing score of 40 decays to approximately 20 after 60 days without new signals.

## Resolving Conflicting Data with CRM Enrichment

Score decay is one problem. **Conflicting data** is another.

Farhan runs the `crm-enrichment` skill on NexaFlow-prospect-001 to update stale records. The skill pulls from multiple sources and discovers a conflict:

```
crm-enrichment NexaFlow-prospect-001
```

**Output:**

```
CRM ENRICHMENT REPORT — NexaFlow-prospect-001

UPDATED FIELDS:
  Employee count:
    LinkedIn:     520 employees
    Crunchbase:   180 employees
    Company website: "200+ team members"
    CRM (current):   120 employees
    CONFLICT DETECTED — sources disagree by >2x

  Revenue estimate:
    Crunchbase:   $12M ARR
    PitchBook:    $18M ARR (post-Series B projection)
    CONFLICT DETECTED — sources disagree by >30%

  Office locations:
    LinkedIn:     Karachi, Dubai, London
    Company site: Karachi, Dubai
    MINOR DISCREPANCY — LinkedIn may include remote workers

RECOMMENDED RESOLUTION:
  Employee count: Use LinkedIn (520) — most frequently
    updated by employees themselves. Crunchbase (180)
    likely reflects pre-Series B headcount. Company
    website ("200+") is a marketing approximation.
  Revenue: Flag for manual verification. ARR estimates
    from third-party sources vary significantly. Request
    from prospect during qualification call.
  Offices: Use company website (Karachi, Dubai) as
    authoritative. Note London presence as unconfirmed.

SCORING IMPACT:
  If employee count updated to 520:
    Company size score changes from 10/10 to 10/10
    (still within 50-500+ ICP range)
  If revenue updated to $12-18M:
    No scoring impact (revenue not a direct
    scoring dimension in current ICP)
```

### Why Sources Conflict

CRM data conflicts are normal, not exceptional. Every source has a different update frequency and a different incentive:

| Source          | Update Frequency | Incentive                  | Common Problem                        |
| --------------- | ---------------- | -------------------------- | ------------------------------------- |
| LinkedIn        | Real-time        | Employees update profiles  | Includes contractors and remote staff |
| Crunchbase      | Quarterly        | Investors update rounds    | Lags behind rapid growth              |
| Company website | Irregular        | Marketing team updates     | Rounded numbers, aspirational claims  |
| Your CRM        | When reps enter  | Reps enter what they learn | Stale the moment it is entered        |

The `crm-enrichment` skill does not pick a source automatically. It flags the conflict, shows you the sources, and recommends a resolution with reasoning. You make the call. For employee counts, LinkedIn is usually the most current because employees update their own profiles. For revenue, no third-party source is reliable -- you verify during the qualification call.

### The Enrichment-Rescore Cycle

After enrichment, you re-score. This is the discipline that keeps your pipeline data alive:

1. **Enrich** -- Run `crm-enrichment` on prospects with stale data (last enrichment > 30 days)
2. **Resolve conflicts** -- Accept the recommended resolution or override with your judgment
3. **Re-score** -- Run `/score-lead` with the updated data
4. **Reclassify** -- Update the prospect's classification (HOT, WARM, CULTIVATE, NOT YET)
5. **Act** -- Adjust your outreach based on the new classification

This cycle should run on a cadence:

| Classification | Re-scoring Cadence | Why                                                          |
| -------------- | ------------------ | ------------------------------------------------------------ |
| **HOT**        | Weekly             | Active opportunities; Timing signals change fast             |
| **WARM**       | Bi-weekly          | Nurture targets; need to catch Timing upgrades               |
| **CULTIVATE**  | Monthly            | Long-term pipeline; monitor for status changes               |
| **NOT YET**    | Quarterly          | Low priority; check if circumstances have changed            |

## Failure Analysis: Five Prospects, Five Verdicts

Here are five scored prospects. Your job is to determine which scores you trust and which need human override.

### Prospect A: Perfect Fit, Zero Timing

| Dimension  | Score  | Details                                                    |
| ---------- | ------ | ---------------------------------------------------------- |
| Fit        | 38/40  | Enterprise SaaS, 300 employees, perfect tech stack         |
| Timing     | 2/40   | No funding, no hiring, announced 15% layoffs last quarter  |
| Engagement | 5/20   | Attended one webinar 6 months ago                          |
| **Total**  | 45/100 | Classification: CULTIVATE                                  |

**Verdict:** Score is correct. This is the right company at the wrong moment. Monitor quarterly. When they stabilise and start hiring again, Timing will recover and the classification will upgrade.

### Prospect B: Wrong Company, Buying Now

| Dimension  | Score  | Details                                                    |
| ---------- | ------ | ---------------------------------------------------------- |
| Fit        | 15/40  | Manufacturing sector (outside ICP), 2000 employees (too large) |
| Timing     | 35/40  | $50M digital transformation budget announced, RFP issued   |
| Engagement | 12/20  | Downloaded 3 whitepapers, attended demo                    |
| **Total**  | 62/100 | Classification: WARM                                       |

**Verdict:** Score is correct, but the action is wrong. WARM classification suggests a nurture sequence. In reality, this prospect is outside your ICP and spending the rep's time on a low-Fit account takes them away from higher-probability opportunities. Override: mark as NOT YET unless your team explicitly decides to pursue out-of-ICP enterprise deals.

### Prospect C: Conflicting Sources

| Dimension  | Score  | Details                                                    |
| ---------- | ------ | ---------------------------------------------------------- |
| Fit        | 28/40  | LinkedIn says 400 employees; CRM says 45; Crunchbase says 90 |
| Timing     | 25/40  | Moderate signals; new product launch announced             |
| Engagement | 10/20  | Regular newsletter reader, visited pricing page twice      |
| **Total**  | 63/100 | Classification: WARM                                       |

**Verdict:** Score is unreliable. The employee count conflict (400 vs 45 vs 90) means the Fit score could be anywhere from 15/40 to 35/40. Run `crm-enrichment` to resolve the conflict before acting on this score.

### Prospect D: Agent Says HOT, You Say No

| Dimension  | Score  | Details                                                    |
| ---------- | ------ | ---------------------------------------------------------- |
| Fit        | 36/40  | Strong ICP match across all criteria                       |
| Timing     | 30/40  | Recent funding, hiring signals                             |
| Engagement | 15/20  | Downloaded case study, attended 2 webinars, replied to email |
| **Total**  | 81/100 | Classification: HOT                                        |

But you know this company. They evaluate every vendor in the market and never buy. They have been in "evaluation mode" for two years. Three of your competitors have told you the same thing.

**Verdict:** Miscalibrated. The scoring model has no way to capture "chronic evaluator" behaviour because that signal does not exist in the ICP or in any data source the agent can access. This is domain knowledge that lives in your team's experience. Override the classification from HOT to CULTIVATE. Consider adding a CRM field for "evaluation history" so this institutional knowledge persists.

### Prospect E: Everything Aligns

| Dimension  | Score  | Details                                                    |
| ---------- | ------ | ---------------------------------------------------------- |
| Fit        | 35/40  | SaaS B2B, 200 employees, 4/4 tech stack match             |
| Timing     | 38/40  | Series A closed 3 weeks ago, hired VP Sales last month     |
| Engagement | 18/20  | 5 website visits, downloaded ROI calculator, booked demo   |
| **Total**  | 91/100 | Classification: HOT                                        |

**Verdict:** Score is trustworthy. All three dimensions are strong. Timing signals are fresh (weeks, not months). Engagement shows deliberate buying behaviour (ROI calculator, demo booking). This is the prospect your best rep should call today.

**Pattern recognition across the five:** Trust the score when all three dimensions tell a consistent story. Question the score when any single dimension seems inflated, when data sources conflict, or when your domain knowledge contradicts the agent's output. The agent scores against the data and rules it has. You score against everything you know.

## Hands-On: Score Your Own Pipeline

Take five real prospects your team is currently working. For each one:

**Step 1: Write your gut score first.**

Before running the agent, estimate each prospect's Fit, Timing, and Engagement from your own knowledge. Write the numbers down. Do not skip this step -- it establishes your baseline for comparison.

| Prospect | Your Gut: Fit (/40) | Your Gut: Timing (/40) | Your Gut: Engagement (/20) |
| -------- | -------------------- | ---------------------- | -------------------------- |
| 1        |                      |                        |                            |
| 2        |                      |                        |                            |
| 3        |                      |                        |                            |
| 4        |                      |                        |                            |
| 5        |                      |                        |                            |

**Step 2: Run `/score-lead` on all five.**

Compare the agent's scores to your gut scores. Where they agree, the scoring model is aligned with your market knowledge. Where they disagree, one of two things is true: either you have information the agent lacks (domain knowledge override), or the agent has data you missed (agent-assisted discovery).

**Step 3: For every disagreement, decide who is right.**

- If you are right and the agent is wrong, trace the miscalibration to the ICP section that needs correction.
- If the agent is right and you were wrong, ask what data the agent used that you did not consider. This is the agent teaching you something about your own pipeline.

**Step 4: Establish your re-scoring cadence.**

Based on the classifications:

| Prospect | Classification | Re-Score Cadence | Next Re-Score Date |
| -------- | -------------- | ---------------- | ------------------ |
| 1        |                |                  |                    |
| 2        |                |                  |                    |
| 3        |                |                  |                    |
| 4        |                |                  |                    |
| 5        |                |                  |                    |

**Step 5: Run `crm-enrichment` on any prospect with stale data.**

If the last enrichment was more than 30 days ago, refresh the data. Resolve any conflicts the skill surfaces. Re-score after enrichment.

## Try With AI

Use these prompts in Claude or your preferred AI assistant.

### Prompt 1: Diagnose a Miscalibrated Score

```
I have a lead scoring model with three dimensions:
Fit (40 points), Timing (40 points), Engagement (20 points).

A prospect scored 78/100 — classified as HOT:
  Fit: 32/40 (B2B SaaS, 25 employees, perfect tech stack)
  Timing: 38/40 (seed funding 2 months ago, hiring 4 roles)
  Engagement: 8/20 (visited website twice)

My ICP says ideal company size is 50-500 employees.
This prospect has 25 employees.

Walk me through the diagnosis:
1. Which dimension is miscalibrated and why?
2. What ICP section caused the miscalibration?
3. What specific change to the ICP would fix this?
4. After the fix, what would the new score approximately be?
5. Would the classification change?
```

**What you are learning:** Miscalibration diagnosis is the skill that separates operators who trust scores blindly from operators who use scores as decision inputs. By tracing a scoring error back to a specific ICP section, you build the ability to continuously improve your scoring model -- each correction makes every future score more accurate.

### Prompt 2: Design a Re-Scoring Cadence

```
I manage a pipeline of 200 prospects across four classifications:
  HOT: 15 prospects
  WARM: 45 prospects
  CULTIVATE: 90 prospects
  NOT YET: 50 prospects

My team has capacity to re-score 30 prospects per week.

Help me design a re-scoring schedule:
1. How often should each classification be re-scored?
2. Given my team's capacity, is this sustainable?
3. What happens if we skip re-scoring for HOT prospects
   for 3 weeks? Model the score decay.
4. Which classification should I enrich (not just re-score)
   and why?
5. How do I handle the backlog when a CULTIVATE prospect
   suddenly shows Timing signals?
```

**What you are learning:** Re-scoring is an operational discipline, not a one-time task. By designing a cadence that matches your team's capacity to your pipeline size, you learn to treat lead scoring as a living system that requires maintenance -- the same way a CRM requires data hygiene. The capacity constraint forces you to prioritise, which is the real skill.
