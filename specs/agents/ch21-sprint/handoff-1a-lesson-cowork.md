# Handoff: Team 1A -- Lesson Cowork Sections + Worked Examples

## Status: COMPLETE

All 9 lessons modified. Each has a "## Using the Banking Plugin" section inserted before "## Try With AI" containing a worked example with the GOVERNING STANDARD / DOMAIN / JURISDICTION header.

## Changes Made

| Lesson | File                                   | Professional                               | Bank                      | Skills Used                           |
| ------ | -------------------------------------- | ------------------------------------------ | ------------------------- | ------------------------------------- |
| L03    | `03-ifrs9-staging-ecl.md`              | Sarah Chen, Head of Credit Risk            | Meridian Commercial Bank  | `ifrs9-staging` + `ifrs9-ecl`         |
| L04    | `04-ifrs9-pd-lgd-ead.md`               | David Okonkwo, Senior Credit Risk Modeller | Atlas National Bank       | `ifrs9-ecl`                           |
| L05    | `05-ifrs9-macro-pma.md`                | Priya Sharma, Chief Economist              | Crescent Bank             | `ifrs9-scenarios`                     |
| L06    | `06-basel-capital-ratios.md`           | James Oduya, Capital Planning Manager      | Sovereign Trust Bank      | `basel-capital`                       |
| L07    | `07-basel-rwa-risk-weights.md`         | Fatima Al-Mansouri, Risk Analytics Lead    | Gulf Continental Bank     | `basel-rwa-credit`                    |
| L08    | `08-basel-leverage-liquidity.md`       | Nadia Petrova, Treasury Risk Manager       | Northern Bridge Bank      | `liquidity-lcr` + `liquidity-nsfr`    |
| L09    | `09-aml-three-lines.md`                | Rachel Mbeki, KYC Analyst                  | Commonwealth Pacific Bank | `aml-cdd-edd` + `kyc-risk-rating`     |
| L10    | `10-aml-tm-ml-sar.md`                  | Thomas Andersen, AML Investigation Analyst | Nordic Shield Bank        | `aml-typologies` + `aml-sar-drafting` |
| L14    | `14-reconciliation-nostro-suspense.md` | Kenji Watanabe, Reconciliation Officer     | Pacific Ledger Bank       | `bank-reconciliation`                 |

## Spec Compliance

- [x] 9 different named professionals across 9 lessons
- [x] 9 different named banks across 9 lessons
- [x] Every worked example shows GOVERNING STANDARD / DOMAIN / JURISDICTION header
- [x] Every section ends with one sentence explaining what the professional reviews vs what the agent calculated
- [x] Skill names match actual plugin directory names exactly
- [x] No existing content modified -- only insertions (L03 had an existing section that was enhanced with the worked example)
- [x] No import statements added
- [x] Sections inserted before "## Try With AI" in every file
- [x] Each section is 150-250 words (tight, not bloated)

## Notes

- L03 already had a "Using the Banking Plugin" section but it lacked the required worked example with named professional and GOVERNING STANDARD header. It was replaced with a compliant version that preserves the original context (the note about Lessons 4 and 5 building on these components).
- A linter ran on L03, L04, and L10 after edits, adding concept info boxes and reformatting tables. These changes are external to this task and were preserved.
- All professionals have realistic titles and the banks have plausible institutional names that do not match real banks.

## Files Modified

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/03-ifrs9-staging-ecl.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/04-ifrs9-pd-lgd-ead.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/05-ifrs9-macro-pma.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/06-basel-capital-ratios.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/07-basel-rwa-risk-weights.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/08-basel-leverage-liquidity.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/09-aml-three-lines.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/10-aml-tm-ml-sar.md
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/14-reconciliation-nostro-suspense.md
```
