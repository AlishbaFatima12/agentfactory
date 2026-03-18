---
name: regulatory-monitoring
version: 1.0
description: >
  Activate for: regulatory update, regulation change, new law, compliance
  monitoring, regulatory briefing, regulatory calendar, law change, legal
  development, regulatory risk, ICO guidance, FCA update, GDPR update,
  EU AI Act, employment law change, company law update, sector regulation,
  regulatory horizon, compliance alert, policy review, board briefing.
plugin-commands: /brief
---

## CONFIGURATION PARAMETERS (load from settings or ask user)

Required:
- Organisation type: [industry, size, structure]
- Primary regulatory areas: [list all that apply]
- Key jurisdictions: [all jurisdictions where the org operates]
- Escalation contacts: [Compliance Officer, GC, relevant leads]
- Output format: [weekly brief / monthly board summary / ad-hoc alert]

Standard regulatory areas to monitor (configure for relevance):
- Data Protection:  UK GDPR, EU GDPR, CCPA, PIPEDA, ICO guidance
- AI Regulation:    EU AI Act (implementation phases), UK AI framework,
                    OECD AI Principles, sector AI guidance (FCA, ICO)
- Employment:       Working time, remote working, IR35/contractor status,
                    whistleblowing, TUPE, redundancy
- Company Law:      Annual return, director duties, PSC register,
                    anti-bribery (UKBA), corporate criminal offences
- Financial Services (if applicable): FCA rules, PRA requirements
- Sector-specific:  [configure for organisation's industry]

## IMPACT CLASSIFICATION

HIGH PRIORITY 🔴: Effective within 30 days; OR requires immediate policy change;
  OR potential enforcement risk.

MONITOR 🟡: Effective within 6 months; OR affects current contracts on renewal;
  OR requires internal process change.

AWARENESS 🟢: Longer horizon; informational only; no immediate action required.

## OUTPUT: WEEKLY MONITORING BRIEF

  WEEKLY REGULATORY BRIEFING — [Date]
  Generated: Legal Ops Monitoring Agent
  ════════════════════════════════════════════════════════

  🔴 HIGH PRIORITY — Action required within 30 days
  ────────────────────────────────────────────────────────
  [Regulation name] — [Jurisdiction]
  Effective:       [Date]
  Summary:         [2 sentences]
  Internal impact: [Which policy/process needs updating]
  Contract impact: [N contracts with relevant clauses — see list]
  Action:          [Specific action] by [date] — Owner: [name]

  🟡 MONITOR — No immediate action; review within 6 months
  ────────────────────────────────────────────────────────
  [...]

  🟢 AWARENESS — For information only
  ────────────────────────────────────────────────────────
  [...]

  ════════════════════════════════════════════════════════
  NOTE: All regulatory interpretations must be confirmed with
  qualified legal counsel before reliance.

## OUTPUT: MONTHLY BOARD SUMMARY

Structure:
- Executive Summary: 3–5 bullets (most important changes this month)
- RAG Status by regulatory area (current compliance posture)
- Actions Required: owner / action / deadline (table format)
- Horizon Items: significant changes in next 3–6 months
- Appendix: link to weekly brief archive

## NEVER DO THESE

- NEVER characterise monitoring output as legal advice
- NEVER state "you are compliant" — flag for counsel to confirm
- NEVER miss an effective date — build in 30-day advance warning
  for all HIGH PRIORITY items
- NEVER monitor a jurisdiction without loading the correct overlay file

## ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY
