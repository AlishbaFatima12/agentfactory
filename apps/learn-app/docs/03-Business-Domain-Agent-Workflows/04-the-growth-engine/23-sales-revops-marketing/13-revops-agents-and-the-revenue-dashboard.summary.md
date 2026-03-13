# RevOps Agents and the Revenue Dashboard — Summary

## Core Concept

Chapter 13 uses the two real asset types in the plugin: `skills/` and `agents/`. Cowork can invoke both from natural-language prompts. The five RevOps agents handle recurring monitoring and reporting, while the `pipeline` skill handles deep deal analysis and forecasting. The lesson assumes the `demo-data.md` created in Lesson 1 is already present in the workspace, and Cowork's `/schedule` turns these prompts into timed task execution without requiring Slack or email delivery.

## Key Mental Models

- **Skills and agents are peer assets** — Cowork can invoke both from prompts; the difference is scope, not whether you typed a prompt
- **Event-driven vs schedule-driven** — the Outreach Sequencing Agent runs continuously (reacting to opens, clicks, replies, bounces); all others run on daily/weekly cadence
- **Three-dimension deal health** — /pipeline-review scores each deal on Fit + Timing + Engagement, revealing that Crescent Freight's $200K deal is HIGH risk (stalled 34 days, zero engagement) despite high Fit
- **Weighted pipeline vs forecast scenarios** — weighted pipeline ($565K) measures current state; /forecast models best ($1.33M), likely ($630K), and worst ($225K) cases against the $750K target
- **No fictional briefing asset** -- a rep's morning workflow is built from real assets that exist in the plugin: Lead Intelligence Agent, Revenue Reporting Agent, `pre-call-brief`, and sometimes Outreach Sequencing Agent
- **Cowork scheduling is the automation mechanism** -- use `/schedule` to assign one of these agent tasks to a future time; Cowork runs it in the same chapter workspace

## Critical Patterns

- Monday: Revenue Reporting Agent; Wednesday: CRM Hygiene Agent; Friday: Marketing Performance Agent; Daily: Lead Intelligence; Continuous: Outreach Sequencing; On demand: `pipeline` and `pre-call-brief`
- The executive email distills seven dashboard metrics into five bullets and 150 words — a CEO reads it in 30 seconds and gets pipeline growth, at-risk deals, forecast gap, and recommended actions
- At-risk deals require different human interventions: stalled proposals need a new champion or approach; stalled discovery needs qualification or disqualification; gone-quiet contacts need re-engagement or removal
- The Outreach Sequencing Agent inherits over-automation risk from L06 — exit conditions (reply pauses, bounce stops, opt-out stops permanently) are non-negotiable

## Common Mistakes

- Treating agent recommendations as decisions rather than inputs — the agent compares numbers, you compare strategy (e.g., CPL differences between channels targeting different personas)
- Accepting CRM-stored probabilities over objective health scores without investigating the gap — a 25-point gap between rep estimate and agent assessment means someone needs to look
- Inventing a named daily briefing asset that is not actually in the plugin instead of chaining the real agents and skills you already have
- Configuring all agents on the same schedule — different intelligence types have different freshness requirements

## Connections

- The Monday-Wednesday-Friday cadence automates the manual review rhythm established in L11
- Pipeline review uses three-dimension scoring from L03 and research context from L01-L02
- A rep's morning routine uses real plugin assets from across the chapter: Lead Intelligence Agent, Revenue Reporting Agent, `pre-call-brief`, and sequence state when needed
- The leading indicator alert concept connects forward to L14's sprint, where all components run together under time pressure
- CRM Hygiene Agent addresses data decay from L04's enrichment lesson
