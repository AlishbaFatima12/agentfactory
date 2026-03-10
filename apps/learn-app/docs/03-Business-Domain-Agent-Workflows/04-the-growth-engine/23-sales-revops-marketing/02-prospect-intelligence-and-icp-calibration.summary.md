# Prospect Intelligence and ICP Calibration — Summary

## Core Concept

An ICP built from closed-won deal analysis replaces gut instinct with measurable dimensions. By analysing 20 historical deals, you extract the patterns that top reps know implicitly — employee size sweet spots, trigger events, buyer personas — and encode them into a configuration file that every rep and every agent command can use. The ICP is a calibration instrument: you validate it by scoring known deals and adjust when scores contradict outcomes.

## Key Mental Models

- **Closed-won analysis as the ICP source**: The 20 best deals contain the signal; the ICP is derived from data, not assumed from intuition
- **Five ICP dimensions**: Firmographics (industry, size, geography), Technographics (tech signals), Timing signals (trigger events ranked by priority), Persona profiles (decision maker, economic buyer, champion), Negative signals (hard and soft disqualifiers)
- **ICP validation through retrospective scoring**: Score 5 known deals against the ICP; if closed-won deals do not score HOT (60+), the ICP is wrong, not the deals
- **Data availability variance**: UK prospects have richer public data (Companies House filings, LinkedIn activity, press) than Pakistan/Gulf prospects, which means higher hallucination risk in data-scarce markets
- **Competitive positioning via /competitive-brief**: Understand where you win and where competitors win, encoded into sales-marketing.local.md for downstream use

## Critical Patterns

- The persona-icp skill auto-activates from ICP-related prompts — no explicit invocation needed
- When validating, check two things immediately: (1) employee range should encompass 18 of 20 deals, (2) high-priority timing signals should map to the trigger events from the analysis
- ICP gaps surface when a technographic signal is too narrow (e.g., "legacy TMS" misses companies with modern stacks that still need workflow automation)
- Prospect ranking by Total = Fit + Timing + Data Availability reveals that data-rich prospects in secondary geographies can outrank data-poor prospects in primary markets

## Common Mistakes

- Building an ICP from assumption rather than closed-won data ("mid-size 3PL, growing fast" is Farah's intuition, not a calibrated profile)
- Not widening the ICP when known deals score below 60 — the deals are correct, the ICP definition is wrong
- Treating the ICP as a finished document rather than a calibration instrument that improves with every scoring cycle
- Ignoring data availability differences across markets — trusting a thin Karachi brief as much as a rich London brief

## Connections

- Builds directly on the demo dataset and hallucination detection from **L01**
- Completes the sales-marketing.local.md skeleton started in **L01** with full ICP YAML, competitor intel, and sales methodology
- The ICP dimensions feed directly into the three-dimension scoring model in **L03** (Fit draws from firmographics, technographics, and persona)
- Competitive positioning configured here is referenced automatically by outreach drafts in **L05** and battlecards in **L07**
- Data availability variance informs enrichment priorities in **L04**
