# CRM Enrichment and Data Decay; Summary

## Core Concept

CRM data decays at roughly 30% per year: job changes, company moves, email bounces: making scores unreliable and causing reps to waste hours on wrong numbers and dead addresses. The crm-enrichment skill refreshes prospect records by pulling current data from public sources, and the primary value is catching timing signals (contracts, promotions, RFPs) that change classifications before they expire. Enrichment without a schedule is a one-time cleanup; enrichment with a schedule is a living system.

## Key Mental Models

- **Three field categories**: Changed (data has been updated: triggers re-scoring), Confirmed (data is still accurate: no action needed), Stale (data has not been checked and may be wrong)
- **Enrichment reveals timing, not fit**: Fit changes slowly (company size, industry evolve over months). Timing changes fast (contracts, promotions, RFPs appear and disappear within weeks). The primary enrichment value is catching timing signals before they go cold
- **The Hidden HOT Lead**: A CULTIVATE prospect sitting quietly in the pipeline while buying signals (government contracts, promotions, RFPs) light up unseen. Without enrichment, competitors respond to those signals first
- **Tier-based enrichment schedule**: HOT leads = weekly, WARM = bi-weekly, CULTIVATE = monthly, Tier 1 accounts = monthly. Cadence matches how fast timing signals decay at each classification level
- **Triggered enrichment**: Pricing page visits, case study downloads, funding announcements, LinkedIn title changes, and RFP appearances trigger immediate enrichment within 24 hours, regardless of scheduled cadence

## Critical Patterns

- Read enrichment reports in three layers: confirmed fields (no update needed), changed fields (affect scoring), new signals (timing intelligence that was sitting unseen)
- After enrichment, always re-score the prospect: classification changes from timing refreshes are common
- Track enrichment runs in a log (date, prospect, fields changed, timing delta, action taken) to measure stale rates across the pipeline
- Extrapolate sample stale rates across total CRM size to quantify the cost of decay in wasted rep hours per month

## Common Mistakes

- Treating enrichment as a data hygiene exercise rather than a revenue exercise: the prospect whose timing score jumped most is the one your competitor is also noticing
- Waiting for the scheduled enrichment cycle when a triggered event (pricing page visit, RFP posting) demands immediate action
- Not re-scoring after enrichment: updated fields mean the old classification may be wrong
- Ignoring the engagement dimension when timing signals are strong: a CULTIVATE-to-WARM prospect with an active RFP deserves immediate attention even with low engagement

## Connections

- Operationalises the scoring model from **L03**: enrichment changes timing scores, which changes classifications, which changes routing
- Builds on the ICP validation from **L02**: enrichment checks whether prospect data still matches ICP dimensions
- The enrichment schedule is added to sales-marketing.local.md, extending the configuration file started in **L01** and completed in **L02**
- Refreshed, current data feeds into the outreach quality in **L05**: stale data produces generic outreach, current data produces specific references that pass Law 1
- The cost-of-decay calculation (stale rate x total contacts x wasted hours) provides the business justification for the enrichment system
