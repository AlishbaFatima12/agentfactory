### Core Concept

Bank reconciliation ensures every number in every system agrees (covering five categories (nostro, suspense, inter-company, securities/trade, regulatory)) using a matching hierarchy from exact through fuzzy to unmatched residual, with AI automating Level 1-3 matching (handling 70-85% of items) while humans investigate breaks, and every unresolved break aged against escalation SLAs that reach CFO notification at 16 days and write-off assessment at 30 days.

### Key Mental Models

- **Four-Way IFRS 9 Provision Reconciliation**: ECL model output, risk system, general ledger, and regulatory disclosure must all agree on the closing provision balance: when they disagree, the break reveals timing issues (model ran before staging update), booking lags (GL journal not yet posted), or rounding differences (regulatory disclosure rounds to nearest GBP 0.5M), and each break has a specific resolution path.
- **Break Classification as Root Cause Analysis**: Every unmatched item is classified as mirror-only (in bank's records but not correspondent's), statement-only (on correspondent's statement but not in bank's records), amount mismatch (same transaction, different amounts), duplicate (recorded twice), or timing (same transaction, different dates): classification drives the resolution action.

### Critical Patterns

- Nostro reconciliation matches the bank's mirror ledger against the correspondent bank's statement, where mismatches can mask failed payments, duplicated entries, or unauthorised debits
- Suspense items must be cleared within strict SLA timelines (typically 30 days maximum) because aged items can hide errors, fraud, or unbooked losses that distort the financial position
- Provision movement tie-out: Opening Provision + New Charges - Write-offs + Recoveries +/- FX Translation = Closing Provision: all four sources must produce the same closing balance
- AI automation operates at three levels: Level 1 (auto-matching, 70-85% of items), Level 2 (exception intelligence with hypotheses), Level 3 (continuous intra-day reconciliation)

### Common Mistakes

- Applying a flat ageing SLA regardless of amount: a GBP 2.1M item aged 1 day presents more risk than a GBP 250 item aged 35 days, suggesting amount-weighted escalation rules
- Treating reconciliation as an operational checklist rather than a risk management discipline: write-offs of aged suspense items trigger IFRS 9 impacts (reducing retained earnings and CET1), connecting back to the cross-pillar cascade

### Connections

- **Builds on**: Lessons 3-13's three regulatory pillars, validating the data integrity assumption that underlies every calculation in those lessons
- **Leads to**: Lesson 15's full skill library capstone, which assembles all skills into an operational banking agent with scheduled tasks and a Board Risk Report
