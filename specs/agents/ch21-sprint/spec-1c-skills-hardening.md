# Agent Spec: Team 1C — Skills Library Hardening

## Mission

Add NEVER DO sections, negative triggers, professional disclaimers, and expand all thin product SKILL.md files to >= 120 lines in the banking plugin.

## Quality Standard

For each file:

1. **Negative triggers**: Add "NOT for:" phrases to the YAML description field. Minimum 2 per file.
   Example: `NOT for: general accounting queries outside banking, personal finance advice, investment recommendations`
2. **NEVER DO section**: >= 3 specific prohibitions relevant to the skill's domain.
   Example: `NEVER apply IFRS 9 staging without confirming jurisdiction first`
3. **Professional disclaimer**: Last line of every file must be:
   `ALL OUTPUTS REQUIRE REVIEW BY A QUALIFIED PROFESSIONAL BEFORE USE IN REGULATORY FILINGS OR BUSINESS DECISIONS.`
4. **Depth expansion**: Files below 120 lines need more domain content — additional decision trees, tables, worked examples in the skill, or edge cases.

## Input Files

- `specs/agents/ch21-sprint/02-audit-report.md`: Skills Library Audit section
- All files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/skills/*/SKILL.md`

## Output

- Modified SKILL.md files in-place in the plugin repo
- Router file (banking-global-router) does NOT need changes

## Work Order

### Files needing NEVER DO section (currently 0 NEVER statements):

1. `aml-cdd-edd/SKILL.md` (146 lines) — add >= 3 NEVER rules for CDD/EDD
2. `aml-sar-drafting/SKILL.md` (127 lines) — add >= 3 NEVER rules for SAR drafting
3. `aml-typologies/SKILL.md` (174 lines) — add >= 3 NEVER rules for typology assessment
4. `basel-rwa-credit/SKILL.md` (105 lines) — add >= 3 NEVER rules for credit RWA
5. `ifrs9-disclosure/SKILL.md` (96 lines) — add >= 3 NEVER rules for disclosure
6. `ifrs9-scenarios/SKILL.md` (85 lines) — add >= 3 NEVER rules for scenario framework
7. `ifrs9-staging/SKILL.md` (75 lines) — add >= 3 NEVER rules for staging
8. `kyc-risk-rating/SKILL.md` (104 lines) — add >= 3 NEVER rules for risk rating
9. `liquidity-nsfr/SKILL.md` (81 lines) — add >= 3 NEVER rules for NSFR
10. `stress-testing/SKILL.md` (95 lines) — add >= 3 NEVER rules for stress testing

### Files needing negative triggers in description:

ALL 16 product files except liquidity-lcr (which has 2 weak matches).
Add to each YAML description: `NOT for: [2-3 specific exclusions]`

### Files needing output format block (currently missing):

1. `aml-typologies/SKILL.md` — add output template for alert disposition
2. `basel-capital/SKILL.md` — add output template for capital ratio report
3. `basel-rwa-credit/SKILL.md` — add output template for RWA calculation
4. `liquidity-lcr/SKILL.md` — add output template for LCR report
5. `liquidity-nsfr/SKILL.md` — add output template for NSFR report
6. `stress-testing/SKILL.md` — add output template for stress test results
7. `basel-rwa-market/SKILL.md` — add output template for FRTB calculation

### Files needing expansion to >= 120 lines:

1. `ifrs9-staging/SKILL.md` (75 → 120+) — add cure conditions detail, qualitative SICR examples
2. `liquidity-nsfr/SKILL.md` (81 → 120+) — add RSF/ASF factor tables, worked example
3. `ifrs9-scenarios/SKILL.md` (85 → 120+) — add governance requirements, satellite model detail
4. `stress-testing/SKILL.md` (95 → 120+) — add capital depletion path template, management actions
5. `ifrs9-disclosure/SKILL.md` (96 → 120+) — add IFRS 7 table templates
6. `ifrs9-ecl/SKILL.md` (101 → 120+) — add discount factor treatment, portfolio segmentation
7. `basel-capital/SKILL.md` (103 → 120+) — add AT1 trigger mechanics, buffer stacking
8. `kyc-risk-rating/SKILL.md` (104 → 120+) — add scoring methodology detail
9. `liquidity-lcr/SKILL.md` (105 → 120+) — add Level 2 cap worked example
10. `basel-rwa-credit/SKILL.md` (105 → 120+) — add CCF table, mortgage LTV detail

### Professional disclaimer — add to ALL 16 product files:

`ALL OUTPUTS REQUIRE REVIEW BY A QUALIFIED PROFESSIONAL BEFORE USE IN REGULATORY FILINGS OR BUSINESS DECISIONS.`

## Hard Constraints

- Do NOT modify the YAML `name:` or `version:` fields
- Do NOT change the YAML `standard:` field
- Keep each file <= 500 lines (max)
- NEVER DO items must be specific to the domain (not generic "be careful" statements)
- Negative triggers must prevent real false-activation scenarios
- Expansion content must be technically accurate banking regulation — do not pad with generic prose
- Work in the plugin repo: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/`

## Handoff Note

Write to: `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch21-sprint/handoff-1c-skills-hardening.md`
