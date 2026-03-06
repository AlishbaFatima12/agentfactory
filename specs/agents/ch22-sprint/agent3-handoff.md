# Agent 3 Handoff -- Skills Fix (All 9 SKILL.md Files)

## Files Modified

| File                           | Before | After | Changes                                                                                                                                                    |
| ------------------------------ | ------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compliance-calendar/SKILL.md   | 104    | 104   | +negative triggers in description                                                                                                                          |
| contract-intake-agent/SKILL.md | 172    | 173   | +negative triggers in description                                                                                                                          |
| contract-review/SKILL.md       | 131    | 172   | +negative triggers, +complete output format block (redline + risk summary)                                                                                 |
| dsar-privacy/SKILL.md          | 145    | 238   | +negative triggers, +3 output format blocks (acknowledgement, discovery, response)                                                                         |
| ip-protection/SKILL.md         | 123    | 145   | +negative triggers, +IP Research Brief output format block                                                                                                 |
| legal-global-router/SKILL.md   | 70     | 93    | +negative triggers, +NEVER DO section (5 prohibitions), +output header format block, +6 GCC routing rows, +attorney disclaimer, deduplicated Step 3 header |
| legal-spend/SKILL.md           | 93     | 152   | +negative triggers, +benchmarking comparison method, +4 new anomaly rules, +quarterly spend report output format                                           |
| nda-triage/SKILL.md            | 103    | 103   | +negative triggers in description                                                                                                                          |
| regulatory-monitoring/SKILL.md | 97     | 142   | +negative triggers, +monthly board summary output format, +source configuration section                                                                    |

## File Created

| File                                                    | Lines | Content                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| legal-global-router/references/jurisdictions/gcc-law.md | 217   | Saudi Arabia (PDPL, Commercial Court Law, Vision 2030, Saudisation), Bahrain (PDPL, CBB, Commercial Companies Law), Kuwait (Commercial Code, Civil Code, Agency Law), Oman (Commercial Companies Law, Foreign Capital Investment Law), Qatar (QFC, Commercial Companies Law, Data Protection), common GCC patterns (Islamic law/riba, gharar, Sharia-compliant clauses, Arabic language requirements), escalation triggers |

## Negative Triggers Added (all 9 files)

1. contract-review: NOT for NDA-only triage, IP research, regulatory monitoring, DSAR processing, general legal advice, litigation strategy
2. nda-triage: NOT for full contract review, IP matters, regulatory monitoring, DSAR processing, employment agreements
3. ip-protection: NOT for contract review, NDA triage, regulatory monitoring, DSAR processing, patent filing, trademark registration
4. regulatory-monitoring: NOT for contract review, NDA triage, IP research, DSAR processing, legal advice on regulatory interpretation
5. dsar-privacy: NOT for contract review, NDA triage, IP matters, regulatory monitoring, legal advice on data protection interpretation, erasure execution
6. legal-spend: NOT for contract review, NDA triage, IP research, regulatory monitoring, DSAR processing, budget approval
7. compliance-calendar: NOT for contract review, NDA triage, IP research, DSAR processing, setting compliance policy
8. contract-intake-agent: NOT for IP research, regulatory monitoring, DSAR processing, contract execution, legal advice
9. legal-global-router: NOT for direct legal advice, court filings, litigation strategy, attorney-client privileged communications, contract execution

## Output Format Blocks Added

1. ip-protection: IP Research Brief format (type, technology, jurisdictions, findings, recommended actions)
2. contract-review: Redline output format (CLAUSE/STATUS/CURRENT/ISSUE/REDLINE/FALLBACK/RATIONALE/PRIORITY) + Holistic Risk Summary format
3. dsar-privacy: Three stage formats -- acknowledgement letter, internal data discovery request, response letter
4. legal-global-router: Mandatory output header format block (TASK/JURISDICTION/PLAYBOOK/OVERLAY/ATTORNEY REVIEW/ESCALATION/DATE)
5. legal-spend: Quarterly spend report format (executive summary, spend by matter type, panel firm performance, anomalies, forecast)
6. regulatory-monitoring: Monthly board summary format (executive summary, RAG status table, actions required table, horizon items)

## Router Updates

- Added 6 GCC jurisdiction routing rows: Saudi Arabia/KSA, Bahrain/CBB, Kuwait, Oman, Qatar/QFC, GCC/Gulf States
- Added NEVER DO section with 5 prohibitions
- Added mandatory output header format block
- Deduplicated Step 3 header (removed bare text version, kept formatted code block version)
- Added standalone "ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY" line

## QA Self-Check

| File                  | YAML OK | Neg Triggers | NEVER DO (>=3) | Output Format | <=500 lines | Attorney Disclaimer | PASS |
| --------------------- | ------- | ------------ | -------------- | ------------- | ----------- | ------------------- | ---- |
| compliance-calendar   | Y       | Y            | Y (5)          | Y             | Y (104)     | Y                   | PASS |
| contract-intake-agent | Y       | Y            | Y (6)          | Y (templates) | Y (173)     | Y                   | PASS |
| contract-review       | Y       | Y            | Y (6)          | Y (added)     | Y (172)     | Y                   | PASS |
| dsar-privacy          | Y       | Y            | Y (6)          | Y (added 3)   | Y (238)     | Y                   | PASS |
| ip-protection         | Y       | Y            | Y (4)          | Y (added)     | Y (145)     | Y                   | PASS |
| legal-global-router   | Y       | Y            | Y (5)          | Y (added)     | Y (93)      | Y                   | PASS |
| legal-spend           | Y       | Y            | Y (4)          | Y (expanded)  | Y (152)     | Y                   | PASS |
| nda-triage            | Y       | Y            | Y (4)          | Y             | Y (103)     | Y                   | PASS |
| regulatory-monitoring | Y       | Y            | Y (4)          | Y (expanded)  | Y (142)     | Y                   | PASS |
| gcc-law.md (overlay)  | Y       | N/A          | N/A            | N/A           | Y (217)     | Y                   | PASS |

Note: legal-global-router has no `plugin-commands` field -- this is correct because it is a router, not a product skill. It routes to product skills which have their own commands.

## Open Questions for Orchestrator

1. The legal-global-router originally had a Step 3 with bare-text output header AND I added a formatted code block version per spec. I deduplicated by removing the bare-text version and keeping the formatted one. Verify this is the desired outcome.
2. The legal-spend file uses "GENERAL COUNSEL" instead of "LICENSED ATTORNEY" in its final disclaimer line ("ALL OUTPUTS REQUIRE REVIEW BY GENERAL COUNSEL BEFORE ACTION"). This was pre-existing. The quarterly report output format I added uses "GENERAL COUNSEL" for consistency with the existing file. Should this be changed to "LICENSED ATTORNEY" for uniformity across all skills?
3. The GCC overlay references the UAE overlay (`uae-law.md`) for UAE-specific details to avoid duplication. The router keeps the UAE row pointing to `uae-law.md` separately from the GCC entries. This maintains the existing UAE overlay structure.
