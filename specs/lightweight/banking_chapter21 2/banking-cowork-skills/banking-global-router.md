---
name: banking-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate whenever any of these terms appear:
  IFRS 9, ECL, expected credit loss, Stage 1, Stage 2, Stage 3, SICR,
  PD, LGD, EAD, PMA, Basel III, Basel IV, CET1, RWA, capital ratio,
  LCR, NSFR, HQLA, ICAAP, stress test, AML, KYC, CDD, EDD, SAR, STR,
  transaction monitoring, sanctions, OFAC, HMT, PEP, FATF, FinCEN, NCA,
  NPL, write-off, forbearance, IRB, standardised approach, output floor.
author: Panaversity — The AI Agent Factory
---

## PURPOSE
Top-level routing controller. Determines which domain SKILL.md and
jurisdiction overlay to load before generating any banking regulatory output.
Does NOT contain regulatory rules — it routes to the files that do.

## STEP 1 — IDENTIFY JURISDICTION
Read query for: country, regulator name, or regulatory standard reference.
If no jurisdiction identifiable: ASK before proceeding.
NEVER default to any jurisdiction.

## STEP 2 — LOAD DOMAIN FILE

| Query Terms | Load |
|---|---|
| IFRS 9, ECL, PD, LGD, EAD, impairment, provision | products/ifrs9-ecl.md |
| Stage 1/2/3, SICR, staging, DPD, covenant breach | products/ifrs9-staging.md |
| Macro overlay, PIT PD, scenarios, credit cycle | products/ifrs9-scenarios.md |
| IFRS 7 disclosure, ECL note, sensitivity analysis | products/ifrs9-disclosure.md |
| CET1, RWA, capital ratio, MDA, output floor, ICAAP | products/basel-capital.md |
| SA risk weight, credit RWA, CCF, standardised approach | products/basel-rwa-credit.md |
| LCR, HQLA, liquidity coverage, run-off rate | products/liquidity-lcr.md |
| NSFR, stable funding, ASF, RSF | products/liquidity-nsfr.md |
| Stress test, capital depletion, ACS, DFAST, ICAAP | products/stress-testing.md |
| AML alert, typology, money laundering, structuring | products/aml-typologies.md |
| SAR, STR, suspicious activity report, NCA, FinCEN | products/aml-sar-drafting.md |
| CDD, EDD, KYC, source of wealth, PEP onboarding | products/aml-cdd-edd.md |
| Sanctions, OFAC, HMT, SDN, sanctioned entity | products/sanctions-screening.md |
| KYC risk rating, customer risk, risk classification | products/kyc-risk-rating.md |

## STEP 3 — LOAD JURISDICTION OVERLAY

| Jurisdiction | Load |
|---|---|
| UK / PRA / FCA | jurisdictions/uk-pra.md |
| EU / ECB / EBA / CRR | jurisdictions/eu-crr.md |
| USA / Fed / OCC / FinCEN | jurisdictions/us-federal.md |
| Australia / APRA / AUSTRAC | jurisdictions/australia-apra.md |
| Singapore / MAS | jurisdictions/singapore-mas.md |
| UAE / CBUAE | jurisdictions/uae-cbuae.md |
| Pakistan / SBP | jurisdictions/pakistan-sbp.md |

## STEP 4 — MANDATORY OUTPUT HEADER
Every banking regulatory output must begin with:
  GOVERNING STANDARD: [e.g. IFRS 9 / Basel III SA — UK PRA]
  DOMAIN: [e.g. IFRS 9 ECL — Stage Assessment]
  JURISDICTION: [e.g. United Kingdom — PRA Rulebook / UK CRR]

## UNIVERSAL RULES
- NEVER use incurred-loss thinking for IFRS 9 — it is forward-looking
- NEVER recognise Stage 3 interest on the gross carrying amount
- NEVER confuse capital (Basel) with liquidity (LCR/NSFR)
- NEVER file a SAR without specifying jurisdiction and receiving FIU
- This agent executes, flags, escalates, documents. The professional judges.
