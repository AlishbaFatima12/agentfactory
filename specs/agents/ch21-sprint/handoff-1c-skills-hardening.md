# Team 1C Skills Hardening -- Completion Handoff

## Status: COMPLETE

All 11 SKILL.md files in `banking/skills/*/SKILL.md` have been hardened with negative triggers, NEVER DO sections, professional disclaimers, output format blocks, and expansion content as required.

## Summary of Changes

### Files Modified by This Agent (6 files)

| File                           | Lines Before | Lines After | Added                                                                                  |
| ------------------------------ | ------------ | ----------- | -------------------------------------------------------------------------------------- |
| `aml-cdd-edd/SKILL.md`         | 146          | 176         | Negative triggers, NEVER DO (5 items), disclaimer                                      |
| `aml-sar-drafting/SKILL.md`    | 127          | 153         | Negative triggers, NEVER DO (5 items), disclaimer                                      |
| `aml-typologies/SKILL.md`      | 174          | 216         | Negative triggers, NEVER DO (5 items), output format block, disclaimer                 |
| `basel-rwa-credit/SKILL.md`    | 105          | 179         | Negative triggers, NEVER DO (5 items), output format block, worked example, disclaimer |
| `basel-rwa-market/SKILL.md`    | 268          | 311         | Output format block, disclaimer                                                        |
| `bank-reconciliation/SKILL.md` | 223          | 230         | Disclaimer                                                                             |

### Files Already Fully Hardened (found pre-completed by linter/user, 5 files)

| File                           | Lines | Status                                                                                             |
| ------------------------------ | ----- | -------------------------------------------------------------------------------------------------- |
| `kyc-risk-rating/SKILL.md`     | 173   | Already had: negative triggers, NEVER DO (4 items), output format, disclaimer, scoring example     |
| `sanctions-screening/SKILL.md` | 134   | Already had: negative triggers, NEVER DO (5 items). Added: disclaimer                              |
| `liquidity-lcr/SKILL.md`       | 159   | Already had: negative triggers, NEVER DO (6 items), output format, disclaimer, cap-binding example |
| `ifrs9-ecl/SKILL.md`           | 178   | Already had: negative triggers, NEVER DO (7 items), output format, disclaimer                      |
| `basel-capital/SKILL.md`       | 165   | Already had: negative triggers, NEVER DO (6 items), output format, disclaimer                      |

Note: `sanctions-screening` needed only the disclaimer line added; all other content was already in place.

### Previously Completed by Team 1C (5 files -- not touched)

| File                        | Lines | Status         |
| --------------------------- | ----- | -------------- |
| `ifrs9-staging/SKILL.md`    | 154   | Fully hardened |
| `liquidity-nsfr/SKILL.md`   | 165   | Fully hardened |
| `ifrs9-scenarios/SKILL.md`  | 191   | Fully hardened |
| `stress-testing/SKILL.md`   | 193   | Fully hardened |
| `ifrs9-disclosure/SKILL.md` | 186   | Fully hardened |

## Constraints Verified

- [x] No YAML `name:` or `version:` fields modified
- [x] No YAML `standard:` fields changed
- [x] All files >= 120 lines
- [x] All files <= 500 lines (max is `basel-rwa-market` at 311)
- [x] All NEVER DO items are domain-specific (not generic)
- [x] All negative triggers prevent real false-activation scenarios
- [x] All expansion content is technically accurate banking regulation
- [x] Every file was read before editing

## NEVER DO Section Summary

| File                | # Prohibitions | Domain Focus                                                                                                                                   |
| ------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| aml-cdd-edd         | 5              | SDD approval, PEP source of wealth, BO establishment, PEP tenure, ongoing monitoring                                                           |
| aml-sar-drafting    | 5              | Legal determinations, tipping-off, vague language, innocent explanation, consent SAR moratorium                                                |
| aml-typologies      | 5              | Undocumented closure, isolated typology, geographic dismissal, ML-only disposition, TF thresholds                                              |
| basel-rwa-credit    | 5              | Domestic currency sovereign, Basel IV LTV, CCF step, SME factor, output floor                                                                  |
| kyc-risk-rating     | 4              | Dimension omission, mandatory override bypass, composite vs override, refresh deferral                                                         |
| basel-rwa-market    | 7              | Pre-FRTB VaR, DRC aggregation, correlation scenarios, IMA scope, PLA failures, banking book RWs, RRAO                                          |
| sanctions-screening | 5              | Transaction release, customer tip-off, fuzzy matching, 50% rule, ownership chain                                                               |
| liquidity-lcr       | 6              | Level 2B discretion, Level 2 cap, inflow cap, encumbered assets, double-counting, operational deposits                                         |
| ifrs9-ecl           | 7              | Incurred loss, single scenario, TTC PD, current collateral value, Stage 3 interest, discount factor, PMA misuse                                |
| basel-capital       | 6              | IFRS provision deduction, goodwill, sovereign RW, output floor, capital vs liquidity, AT1 triggers                                             |
| bank-reconciliation | 8              | Nostro breaks, unidentified credits, GL-risk mismatch, manual journals, forced matches, suspense aging, unexplained diffs, write-off confusion |
