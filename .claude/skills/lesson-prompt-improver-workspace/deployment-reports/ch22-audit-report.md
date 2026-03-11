# Ch 22 Legal Operations and Compliance — Prompt Quality Audit

## Summary

- Total lessons audited: 14
- Lessons with defects: 12
- Lessons clean: 2
- Total defects found: 30
- Total defects fixed: 30

## Defect Breakdown

| Type                         | Count | Fixed |
| ---------------------------- | ----- | ----- |
| D1: Fabricated Output        | 25    | 25    |
| D2: Missing Skill Name       | 0     | 0     |
| D3: Inline Data Injection    | 0     | 0     |
| D4: Fiction-Researching      | 0     | 0     |
| D5: Narrative Ref Fabricated | 0     | 0     |
| D6: Terminology              | 5     | 5     |

## Notes on Defect Distribution

D1 was the dominant defect type across this chapter. Nearly every lesson contained fabricated agent output blocks — code-fenced blocks pretending to show exact `/review-contract`, `/compliance-check`, `/nda-triage`, or other skill output with specific clause text, scores, and regulatory citations. Each was replaced with an intent table (| Section | Intent | What to Verify |) plus a `:::note Your output will vary` disclaimer.

D5 (narrative referencing fabricated content) was addressed inline as part of D1 fixes. Where the narrative paragraph following a fabricated block quoted specific numbers or scores from the fake output, the text was generalised to reference the structural review process rather than citing fabricated specifics. These are counted within the D1 fixes rather than separately because the narrative adjustments were minor (1-2 sentences each) and always co-located with the D1 block they referenced.

D6 affected 5 lessons (L03, L05, L07, L10, L11) which used "Use these prompts in Claude or your preferred AI assistant" instead of "Use these prompts in Cowork or your preferred AI assistant" in their Try With AI sections. All 5 were corrected.

D2 (missing skill name) was not flagged because this chapter's prompts invoke skills via slash commands (`/review-contract`, `/compliance-check`, `/nda-triage`) directly in the prompt blocks — the skill names are already present.

D3/D4 were not present — this chapter does not use a shared demo-data.md file or folder instructions pattern for data injection.

## Per-Lesson Details

### 01-the-legal-operations-revolution.md

- Status: Fixed
- Defects:
  - D1 (lines ~100-155): Fabricated `/review-contract` output showing 6 clauses with specific RED/YELLOW/GREEN flags, scores, and legal citations for a CloudStack SaaS agreement. Replaced with intent table (6 rows: contract header, limitation of liability, auto-renewal, IP ownership, data processing, holistic risk summary) + disclaimer.
  - D5: Narrative paragraph after the fabricated block quoted specific flag counts. Generalised to reference the structural review process.

### 02-the-negotiation-playbook.md

- Status: Fixed
- Defects:
  - D1 (lines ~118-165): Fabricated side-by-side comparison of two playbook positions showing specific clause text and redline language. Replaced with structural comparison table (4 dimensions: playbook position, agent action, escalation trigger, why this matters) + disclaimer.

### 03-contract-review-and-redlines.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~93-155): Fabricated `/review-contract` output with clause-by-clause analysis and specific redline text. Replaced with intent table (7 rows) + disclaimer.
  - D1 #2 (lines ~186-220): Fabricated redline comparison output showing original vs. proposed clause text. Replaced with intent table (4 rows) + disclaimer.
  - D1 #3 (lines ~258-290): Fabricated cross-border overlay output with jurisdiction-specific flags. Replaced with intent table (5 rows) + disclaimer.
  - D6: Changed "Use these prompts in Claude or your preferred AI assistant" to "Use these prompts in Cowork or your preferred AI assistant."

### 04-cross-border-contracts-and-e-signatures.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~100-160): Fabricated cross-border `/review-contract` output with dual jurisdiction overlay analysis. Replaced with intent table (6 rows: governing law, dispute resolution, currency/payment, data protection, force majeure, holistic risk) + disclaimer.
  - D1 #2 (lines ~213-271): Fabricated `/signature-request` pre-signature verification output showing entity verification, signature block alignment, and routing. Replaced with intent table (7 rows: final form confirmation, entity name verification, signature block alignment, exhibits/schedules check, internal approvals routing, routing recommendation, post-execution steps) + disclaimer.

### 05-nda-triage-and-management.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~95-155): Fabricated `/nda-triage` output for Al-Madinah scenario with specific clause deviations and triage tier classification. Replaced with intent table (6 rows: triage tier classification, GREEN/YELLOW/RED deviation summary, GREEN clauses, YELLOW clauses, RED flag checks, attorney review footer) + disclaimer.
  - D1 #2 (lines ~200-230): Fabricated generic triage sample output with deviation summary. Replaced with intent table (4 rows: triage tier classification, deviation summary, clause-by-clause deviations, attorney review footer) + disclaimer.
  - D6: Changed "Use these prompts in Claude or your preferred AI assistant" to "Use these prompts in Cowork or your preferred AI assistant."

### 06-compliance-check-and-legal-risk-assessment.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~105-195): Fabricated `/compliance-check` output with regulation checklist, risk analysis, and priority actions. Replaced with intent table (6 rows: recommendation header, applicable regulations, requirements checklist, risk analysis, priority actions, attorney review footer) + disclaimer. Calibration paragraph generalised.
  - D1 #2 (lines ~230-270): Fabricated risk matrix output with per-risk severity/likelihood scores. Replaced with intent table (4 rows: per-risk scores, risk score calculation, action recommendation, summary) + disclaimer.
  - D1 #3 (lines ~300-345): Fabricated PayGulf compliance output with SAMA and PDPL regulatory analysis. Replaced with intent table (5 rows: recommendation header, SAMA outsourcing rules, Saudi PDPL requirements, DFSA regulatory requirements, industry-specific standards) + disclaimer.
  - Note: PayGulf risk scoring table (lines ~323-328) correctly identified as a framework/scoring model exception and NOT flagged.

### 07-intellectual-property-protection.md

- Status: Fixed
- Defects:
  - D1 (lines ~120-185): Fabricated patent landscape analysis output with white spaces, FTO flags, and prior art candidates. Replaced with intent table (6 rows: landscape summary, white spaces, FTO flags, prior art candidates, jurisdiction-specific notes, governance footer) + disclaimer. D5 narrative after the block generalised.
  - D6: Changed "Use these prompts in Claude or your preferred AI assistant" to "Use these prompts in Cowork or your preferred AI assistant."

### 08-litigation-support-legal-hold-and-canned-responses.md

- Status: Fixed
- Defects:
  - D1 (lines ~110-215): Fabricated litigation hold dialogue showing preservation notice, custodian identification, IT suspension request, and acknowledgement tracker. Replaced with intent table (6 rows: hold initiation header, preservation notice, recommended custodians, IT suspension request, acknowledgement tracker, governance footer) + disclaimer.

### 09-meeting-prep-and-vendor-management.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~95-195): Fabricated meeting briefing output with background, open issues, talking points, and preparation gaps. Replaced with intent table (6 rows: meeting header/preparation level, background/team, open issues with positions, talking points/sequencing, red lines, preparation gaps) + disclaimer.
  - D1 #2 (lines ~230-285): Fabricated vendor obligation dashboard with 30/60/90-day views and SLA monitoring. Replaced with intent table (5 rows: obligation summary, 30/60/90-day views, overdue items, renewal calendar, SLA monitoring) + disclaimer.
  - D1 #3 (lines ~300-330): Fabricated action items output with follow-up cadence. Replaced with intent table (3 rows: action item table, follow-up cadence rules, next steps) + disclaimer.
  - D1 #4 (lines ~350-410): Fabricated PayGulf board briefing with executive summary, risk highlights, and budget analysis. Replaced with intent table (7 rows: executive summary, risk highlights, regulatory updates, contract pipeline, compliance posture, budget vs. actuals, preparation gaps) + disclaimer.

### 10-legal-ops-agents-intake-and-monitoring.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~110-175): Fabricated intake agent output showing 5-step document processing pipeline. Replaced with intent table (5 rows: document reception, document type classification, metadata extraction, triage and routing, progress tracking) + disclaimer.
  - D1 #2 (lines ~220-310): Fabricated regulatory monitoring briefing with HIGH/MONITOR/AWARENESS classifications and RAG status. Replaced with intent table (5 rows: HIGH PRIORITY items, MONITOR items, AWARENESS items, RAG status summary, governance footer) + disclaimer.
  - D6: Changed "Use these prompts in Claude or your preferred AI assistant" to "Use these prompts in Cowork or your preferred AI assistant."

### 11-legal-ops-agents-calendar-spend-dsar.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~95-150): Fabricated compliance calendar escalation chain with 60/30/14/7/1/0/+1-day notifications. Replaced with intent table (7 rows: 60-day, 30-day, 14-day, 7-day, 1-day, day-of, day-after) + disclaimer.
  - D1 #2 (lines ~185-250): Fabricated legal spend analysis with per-firm breakdown and anomaly detection. Replaced with intent table (5 rows: spend summary, per-firm breakdown, RED anomalies, YELLOW anomalies, governance footer) + disclaimer.
  - D1 #3 (lines ~280-300): Fabricated DSAR acknowledgement letter with specific dates and reference numbers. Replaced with narrative description + disclaimer.
  - D1 #4 (lines ~320-360): Fabricated DSAR redaction assessment with MUST DISCLOSE/REDACT/ATTORNEY REVIEW categories. Replaced with intent table (3 rows: MUST DISCLOSE, REDACT, ATTORNEY REVIEW REQUIRED) + disclaimer.
  - D1 #5 (lines ~380-400): Fabricated DSAR completion log with specific dates and processing steps. Replaced with narrative description.
  - D6: Changed "Use these prompts in Claude or your preferred AI assistant" to "Use these prompts in Cowork or your preferred AI assistant."

### 12-employment-law-and-contractor-classification.md

- Status: Fixed
- Defects:
  - D1 (lines ~100-200): Fabricated employment `/review-contract` output with clause-by-clause employment-specific analysis covering jurisdiction header, employment contract alert, employer registration, non-compete, IP assignment, tax/social security, and holistic risk summary. Replaced with intent table (7 rows: jurisdiction header with CROSS-BORDER DETECTED, employment contract alert, employer registration/structure clause, non-compete clause, IP assignment clause, tax and social security, holistic risk summary) + disclaimer.

### 13-gcc-legal-systems-and-cross-border-practice.md

- Status: Fixed
- Defects:
  - D1 #1 (lines ~106-112): Borderline fabricated jurisdiction header code block (~7 lines) showing zone identification output. Replaced with narrative description summarising what the header should show.
  - D1 #2 (lines ~150-181): Fabricated data processing clause analysis with dual data protection regime assessment, specific redline text, and SAMA regulatory overlay for the PayStream/CloudVault scenario. Replaced with intent table (7 rows: clause identification and RED status, dual data protection regime analysis, data localisation flag, unspecified DR facility risk, SAMA regulatory overlay, proposed redline language, priority classification) + disclaimer.

### 14-the-legal-operations-sprint.md

- Status: Clean
- Defects: None. Capstone sprint lesson with exercise prompts, sprint planning tables, and reflection questions — no fabricated agent outputs.
