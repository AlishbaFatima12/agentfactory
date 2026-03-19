---
name: vendor-assessment
version: 1.0
description: >
  Activate for: vendor assessment, vendor review, supplier assessment,
  vendor onboarding, new vendor approval, vendor audit, annual vendor review,
  vendor scorecard, supplier evaluation, vendor qualification, approve vendor,
  vendor due diligence, vendor health check, vendor performance review,
  vendor classification, strategic supplier, bottleneck supplier.
plugin-commands: /vendor-assess
mcp-integrations: ERP, Web Search, Companies House, Creditsafe, QMS
---

## ASSESSMENT WORKFLOW

### Phase 1: Vendor Classification

Before any assessment, classify the vendor:

| Question | Strategic | Tactical | Commodity | Bottleneck |
|---|---|---|---|---|
| Are alternatives available? | No / very few | Yes — 2-3 | Many | No / very few |
| Annual spend? | High | Medium | Any | Low-Medium |
| Impact if vendor fails? | Critical | Significant | Manageable | Critical |
| Relationship depth? | Deep / long | Established | Transactional | Variable |

CLASSIFICATION DETERMINES:
- Assessment depth (number of dimensions assessed)
- Review frequency
- Risk threshold stringency
- Escalation level

### Phase 2: Six-Dimension Assessment

DIMENSION 1: COMMERCIAL
  Contract status:
  - Active contract: Yes/No; expiry date; auto-renewal clause?
  - Notice period for non-renewal: documented?
  - Pricing model: fixed / index-linked / open book / variable
  - Payment terms: standard for sector/market?
  - Volume commitments: minimum order quantities; penalty clauses?
  - IP ownership: critical for manufactured-to-spec components

  Flags:
  🔴 No contract for spend >£[configured threshold]
  🔴 Auto-renewal without documented notice window reminder
  🟡 Fixed price contract on commodity category (index exposure)
  🟡 Volume commitment with penalty below minimum forecast volume

DIMENSION 2: OPERATIONAL
  Metrics from ERP (last 12 months):
  - On-time delivery rate (OTD): [calculate from GR dates vs. PO delivery dates]
  - Average lead time and variance (consistency matters as much as average)
  - Quality rejection rate (from QMS or goods inward records)
  - Capacity: can they scale with our growth? (ask directly)
  - Business continuity: single site or multiple?

  Flags:
  🔴 OTD < [configured threshold] for tier — e.g. <90% for Strategic
  🔴 Quality rejection > [configured threshold] — e.g. >2% for direct materials
  🟡 OTD declining trend (even if above threshold — trajectory matters)
  🟡 Single production site with no documented BCP

DIMENSION 3: FINANCIAL
  For publicly listed vendors:
  - Revenue trend (last 3 years): growing / stable / declining
  - Profitability trend: EBIT margin trajectory
  - Debt to equity ratio: deteriorating?
  - Days Sales Outstanding (DSO): lengthening = cash pressure
  - Analyst commentary (if listed): any concerns raised?

  For private vendors:
  - Companies House / SECP / equivalent filings (annual accounts)
  - Credit rating from Creditsafe / D&B / Experian
  - Request audited accounts for Strategic and Bottleneck vendors annually
  - Trade references from other customers (for new vendors)

  Flags:
  🔴 Restructuring, administration, or insolvency proceedings
  🔴 Zero financial visibility on Strategic or Bottleneck vendor
  🟡 Revenue decline >15% year-on-year
  🟡 Credit rating downgrade
  🟡 EBIT margin below 3% (marginal viability risk)

DIMENSION 4: COMPLIANCE
  Certifications required (configure by category in local settings):
  - Quality: ISO 9001 / sector-specific (IATF 16949 for automotive, etc.)
  - Environmental: ISO 14001 (if required by your policy)
  - Data: GDPR compliance + DPA for any data-sharing arrangement
  - Modern Slavery Act statement (UK vendors > £36M turnover)
  - Sanctions screening: verified against OFAC, EU, UK HMT lists
  - Trade compliance: export licences, import documentation
  - ESG/ethical sourcing: modern slavery, conflict minerals (sector-specific)

  Flags:
  🔴 Active sanctions match — immediate escalation; stop all activity
  🔴 Required certification expired with no renewal in progress
  🟡 Certification expiring within 90 days — request renewal evidence
  🟡 No modern slavery statement (UK statutory requirement above threshold)

DIMENSION 5: STRATEGIC
  - Dependency: sole-source / dual-source / approved panel
  - Switching timeline: how long to qualify and onboard an alternative?
  - Switching cost: tooling, qualification, ramp-up period
  - Relationship investment: what have we and they invested in this relationship?
  - Innovation: are they bringing improvements and ideas?
  - Strategic alignment: do their long-term plans align with ours?

  Flags:
  🔴 Sole-source with switching timeline >6 months and no backup qualified
  🟡 No alternative vendor qualified or in qualification for critical category
  🟡 Vendor has indicated desire to exit the relationship or market segment

DIMENSION 6: GEOPOLITICAL / SUSTAINABILITY
  - Country risk: political stability; trade restriction risk; sanctions exposure
  - Currency risk: contract currency vs. payment currency
  - Supply chain depth: do we know Tier 2 sub-suppliers for critical components?
  - Carbon footprint and Scope 3 reporting (increasingly mandatory)
  - Ethical sourcing: conflict minerals, child labour risk by geography
  - Single-geography concentration: are all our suppliers for this category
    in the same country or region?

  Flags:
  🔴 Vendor in sanctioned country or subject to active export restrictions
  🟡 All suppliers for a critical category in a single high-risk geography
  🟡 No Tier 2 supplier mapping for Strategic vendors

### Assessment Output Format

  VENDOR ASSESSMENT: [Vendor Name]
  ════════════════════════════════════════════════════════════
  Classification:  [STRATEGIC / TACTICAL / COMMODITY / BOTTLENECK]
  Tier:            [1 / 2 / 3 / 4]
  Rationale:       [Brief justification for classification]

  ── COMMERCIAL ──────────────────────────────────────────────
  [Findings and flags per item above]

  ── OPERATIONAL ─────────────────────────────────────────────
  OTD (12M):     [X]%   Threshold: [X]%   Status: [✅ / ⚠️ / ❌]
  Lead time avg: [X] days  Variance: ±[X] days
  Quality rej:   [X]%   Threshold: [X]%   Status: [✅ / ⚠️ / ❌]

  ── FINANCIAL ───────────────────────────────────────────────
  [Findings and flags]

  ── COMPLIANCE ──────────────────────────────────────────────
  [Certifications status; sanctions clear/flag; DPA status]

  ── STRATEGIC ───────────────────────────────────────────────
  [Dependency level; switching timeline; backup vendor status]

  ── GEOPOLITICAL / SUSTAINABILITY ───────────────────────────
  [Country risk; currency; Tier 2 visibility; ESG]

  RISK SUMMARY
  🔴 CRITICAL: [list]
  🟡 MODERATE: [list]
  🟢 LOW:      [list]

  RECOMMENDED ACTIONS — RANKED BY URGENCY
  [N]. [Priority] [Action] — [Owner] — by [Date]
  ════════════════════════════════════════════════════════════

## NEVER DO THESE

- NEVER classify a sole-source supplier as low-risk because spend is low
- NEVER complete a financial assessment with fabricated data —
  if data unavailable: flag explicitly as "financial visibility: NONE"
  and recommend requesting audited accounts
- NEVER conduct a sanctions screening check manually —
  always use an authoritative list (OFAC, EU, UK HMT)
- NEVER close an assessment without a recommended action list
- NEVER skip the Tier 2 visibility check for Strategic vendors
