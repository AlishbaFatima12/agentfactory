# Ch 21 Banking Domain Agents — Prompt Quality Audit

## Summary

- Total lessons audited: 15
- Lessons with defects: 9
- Lessons clean: 6
- Total defects found: 18
- Total defects fixed: 18

## Defect Breakdown

| Type                         | Count | Fixed |
| ---------------------------- | ----- | ----- |
| D1: Fabricated Output        | 9     | 9     |
| D2: Missing Skill Name       | 0     | 0     |
| D3: Inline Data Injection    | 0     | 0     |
| D4: Fiction-Researching      | 0     | 0     |
| D5: Narrative Ref Fabricated | 9     | 9     |
| D6: Terminology              | 0     | 0     |

## Notes on Defect Distribution

All 9 D1 defects follow the same pattern: each lesson with a "Using the Banking Plugin" section contained a fabricated agent output block (code fenced with specific fake numbers, formatted reports with regulatory headers) preceded by "The agent routes through [skill] and responds:" followed by a code block. Each D1 was paired with a D5 — the narrative paragraph after the fabricated output referenced specific details from the fake output.

D2 (missing skill name) was not flagged because the plugin usage prompts in these lessons are not exercise prompts — they are worked examples where the user provides all parameters directly to the agent. The skill routing happens automatically via the banking router.

D3/D4 were not present — this chapter does not use a shared demo-data.md file or folder instructions pattern.

D6 was not present — no incorrect terminology ("Claude in Excel" vs "Cowork") was found. The chapter correctly uses "Claude or your preferred AI assistant" in Try With AI sections and "Cowork" in Lesson 15's skill-building context.

## Per-Lesson Details

### 01-the-three-pillars.md

- Status: Clean
- Defects: None

### 02-plugin-architecture.md

- Status: Clean
- Defects: None

### 03-ifrs9-staging-ecl.md

- Status: Fixed
- Defects:
  - D1 (lines 242-263): Fabricated `ifrs9-staging` + `ifrs9-ecl` output with specific GBP amounts, staging results, and ECL calculations. Replaced with intent table (4 rows: governing standard, staging result, ECL calculation, provision impact) + disclaimer.
  - D5 (line 265): Narrative referenced specific staging trigger and PD term structure from fabricated output. Generalised to reference the review process without citing specific numbers.

### 04-ifrs9-pd-lgd-ead.md

- Status: Fixed
- Defects:
  - D1 (lines 322-348): Fabricated `ifrs9-ecl` output showing PD calibration, LGD, EAD, and ECL with specific GBP values. Replaced with intent table (4 rows: PD calibration, LGD, EAD, ECL result) + disclaimer.
  - D5 (line 350): Narrative referenced specific CCA value (1.3) and CCF (60%) from fabricated output. Generalised to reference CCA and CCF review without citing specific numbers.

### 05-ifrs9-macro-pma.md

- Status: Fixed
- Defects:
  - D1 (lines 266-296): Fabricated `ifrs9-scenarios` output showing weighted ECL calculation and PMA draft with specific GBP amounts and methodology. Replaced with intent table (4 rows: probability-weighted ECL, non-linearity analysis, PMA draft, governance requirements) + disclaimer.
  - D5 (line 298): Narrative referenced specific scenario weights and PMA quantum. Generalised to reference review process without citing specific values.

### 06-basel-capital-ratios.md

- Status: Fixed
- Defects:
  - D1 (lines 270-296): Fabricated `basel-capital` output showing capital stack, ratios, and buffer assessment with specific GBP values and percentages. Replaced with intent table (3 rows: capital stack, capital ratios, buffer assessment) + disclaimer.
  - D5 (line 298): Narrative referenced specific AT1 CoCo criteria verification. Kept the review focus but removed dependency on fabricated output specifics.

### 07-basel-rwa-risk-weights.md

- Status: Fixed
- Defects:
  - D1 (lines 269-299): Fabricated `basel-rwa-credit` output showing SA RWA by asset class, output floor calculation, and CET1 ratios under three approaches. Replaced with intent table (3 rows: SA RWA calculation, output floor, CET1 ratios) + disclaimer.
  - D5 (line 301): Narrative referenced specific A-rated corporate weights and 4.9pp floor impact. Generalised to reference rating validation and floor impact consistency.

### 08-basel-leverage-liquidity.md

- Status: Fixed
- Defects:
  - D1 (lines 265-290): Fabricated `liquidity-lcr` output showing HQLA classification, net cash outflows, and LCR with specific GBP amounts. Replaced with intent table (3 rows: HQLA classification, net cash outflows, LCR result) + disclaimer.
  - D5 (line 292): Narrative referenced specific covered bond qualification and run-off rate confirmation. Kept the review focus, no specific numbers removed.

### 09-aml-three-lines.md

- Status: Fixed
- Defects:
  - D1 (lines 282-310): Fabricated `aml-cdd-edd` + `kyc-risk-rating` output showing risk factors, rating, and EDD requirements for the Azura Power Holdings scenario. Replaced with intent table (4 rows: risk factors, risk rating, CDD/EDD classification, EDD requirements) + disclaimer.
  - D5 (line 312): Narrative referenced specific PEP screening result and risk rating confirmation. Kept the review focus, no specific numbers removed.

### 10-aml-tm-ml-sar.md

- Status: Fixed
- Defects:
  - D1 (lines 305-336): Fabricated `aml-typologies` + `aml-sar-drafting` output showing structuring typology match and SAR narrative draft with specific GBP amounts and deposit patterns. Replaced with intent table (4 rows: typology match, behavioural anomaly, SAR narrative draft, tipping-off reminder) + disclaimer.
  - D5 (line 338): Narrative referenced specific typology match and narrative accuracy. Kept the review focus, no specific numbers removed.

### 11-pillar-integration.md

- Status: Clean
- Defects: None. The cross-pillar cascade info block (lines 93-120) is a conceptual framework explanation, not a fabricated agent output. The worked example data (lines 128-215) is exercise data with explicit parameters, not fake agent output.

### 12-exercises-ifrs9.md

- Status: Clean
- Defects: None. Exercise data tables provide parameters for student calculation, not fabricated outputs.

### 13-exercises-basel-aml.md

- Status: Clean
- Defects: None. Exercise data tables and investigation scenarios, not fabricated outputs.

### 14-reconciliation-nostro-suspense.md

- Status: Fixed
- Defects:
  - D1 (lines 334-365): Fabricated `bank-reconciliation` output showing matched items, break classifications, and ageing escalation with specific GBP amounts. Replaced with intent table (4 rows: matched items, breaks, hypotheses, ageing and escalation) + disclaimer.
  - D5 (line 367): Narrative referenced specific GBP 1,500 discrepancy investigation. Generalised to reference fee schedule checking and adjustment posting without citing specific amounts.

### 15-full-skill-library-capstone.md

- Status: Clean
- Defects: None. Skill-building instructions, exercise data, and capstone scenario — no fabricated agent outputs.
