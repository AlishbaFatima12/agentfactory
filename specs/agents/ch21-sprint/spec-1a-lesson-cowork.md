# Agent Spec: Team 1A — Lesson Cowork Sections + Worked Examples

## Mission

Add a "Using the Banking Plugin" section with a worked user→agent dialogue to every core teaching lesson (L03-L10, L14) that currently lacks Cowork integration.

## Quality Standard

Each "Using the Banking Plugin" section must contain:

- The specific skill name(s) that handle this lesson's topic
- An actual worked example: a named professional at a named bank types a specific prompt, and the agent responds with structured output
- The professional name should be realistic (e.g., "Sarah Chen, Head of Credit Risk at Meridian Commercial Bank")
- The agent response should show the GOVERNING STANDARD / DOMAIN / JURISDICTION header from the router
- End with one sentence explaining what the professional reviews vs what the agent calculated

## Input Files

- `specs/agents/ch21-sprint/02-audit-report.md`: Gap C1 (zero plugin refs in L06-L10) and C2 (zero worked examples)
- All lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/`
- Plugin router: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/skills/banking-global-router/SKILL.md`

## Output

- Modified lesson files in-place (L03 through L10, L14)
- Each gets a new "## Using the Banking Plugin" section inserted BEFORE the "## Try With AI" section

## Work Order

### L03 (ifrs9-staging-ecl.md)

Skill: `ifrs9-staging` + `ifrs9-ecl`
Worked example: A credit risk analyst stages a portfolio and calculates ECL
Insert before: line with "## Try With AI"

### L04 (ifrs9-pd-lgd-ead.md)

Skill: `ifrs9-ecl`
Worked example: Modeller builds PD/LGD/EAD parameters for a specific loan
Insert before: "## Try With AI"

### L05 (ifrs9-macro-pma.md)

Skill: `ifrs9-scenarios`
Worked example: Economist runs 4-scenario overlay with PMA review
Insert before: "## Try With AI"

### L06 (basel-capital-ratios.md)

Skill: `basel-capital`
Worked example: Capital manager calculates CET1 ratio with buffer assessment
Insert before: "## Try With AI"

### L07 (basel-rwa-risk-weights.md)

Skill: `basel-rwa-credit`
Worked example: Risk analyst applies SA risk weights to a loan book
Insert before: "## Try With AI"

### L08 (basel-leverage-liquidity.md)

Skill: `liquidity-lcr` + `liquidity-nsfr`
Worked example: Treasury manager calculates LCR under stress
Insert before: "## Try With AI"

### L09 (aml-three-lines.md)

Skill: `aml-cdd-edd` + `kyc-risk-rating`
Worked example: KYC analyst onboards a high-risk corporate client
Insert before: "## Try With AI"

### L10 (aml-tm-ml-sar.md)

Skill: `aml-typologies` + `aml-sar-drafting`
Worked example: AML analyst investigates an alert and drafts SAR narrative
Insert before: "## Try With AI"

### L14 (reconciliation-nostro-suspense.md)

Skill: `bank-reconciliation`
Worked example: Reconciliation officer runs nostro matching with break investigation
Insert before: "## Try With AI"

## Hard Constraints

- Each worked example must show the GOVERNING STANDARD / DOMAIN / JURISDICTION header
- Each worked example must use a DIFFERENT named professional and bank (9 total across 9 lessons)
- Do NOT modify any existing content — only INSERT new sections
- Do NOT add import statements for any React components
- Keep each "Using the Banking Plugin" section to 150-250 words (tight, not bloated)
- Use backtick skill names that match actual plugin directory names exactly:
  ifrs9-ecl, ifrs9-staging, ifrs9-scenarios, ifrs9-disclosure, basel-capital,
  basel-rwa-credit, basel-rwa-market, liquidity-lcr, liquidity-nsfr, stress-testing,
  aml-typologies, aml-sar-drafting, aml-cdd-edd, sanctions-screening, kyc-risk-rating,
  bank-reconciliation

## Handoff Note

Write to: `specs/agents/ch21-sprint/handoff-1a-lesson-cowork.md`
