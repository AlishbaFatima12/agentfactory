# Ch 20 Islamic Finance Domain Agents — Prompt Quality Audit

## Summary

- Total lessons audited: 18
- Lessons with defects: 0
- Lessons clean: 18
- Total defects found: 0
- Total defects fixed: 0

## Defect Breakdown

| Type                         | Count | Fixed |
| ---------------------------- | ----- | ----- |
| D1: Fabricated Output        | 0     | 0     |
| D2: Missing Skill Name       | 0     | 0     |
| D3: Inline Data Injection    | 0     | 0     |
| D4: Fiction-Researching      | 0     | 0     |
| D5: Narrative Ref Fabricated | 0     | 0     |
| D6: Terminology              | 0     | 0     |

## Notes on Audit Decisions

### D1 — `**Output:**` markers (not defects)

Four lessons (09, 10, 11, 12) use `**Output:**` labels after journal entry code blocks. These are **not fabricated agent output** — they are instructional notes explaining the accounting result of the journal entries shown above them (e.g., "Zakat is recognised as an expense in the Saudi IFI's income statement"). They contain no fake numbers, no pretend agent reports, and no decorated output blocks. Standard accounting pedagogy, not D1 defects.

### D2 — Skill name pattern

This chapter uses a plugin-based skill architecture (islamic-finance plugin with 25 skill files) rather than named individual skills invoked in prompts. Exercise prompts instruct the AI assistant with explicit jurisdiction and framework context (e.g., "Jurisdiction: Bahrain. Framework: AAOIFI FAS 2.") which triggers the plugin's routing logic. This is the correct pattern for this chapter — adding "Use the X skill to..." would be redundant since the plugin router activates automatically from jurisdiction/product signals.

### D3 — No demo-data dependency

This chapter uses downloadable exercise data zips from the plugin repository (`islamic-finance-exercise-data.zip`), not folder-instruction-based `demo-data.md` files. No inline data injection pattern exists to clean up.

### D4 — No fiction-researching

All exercises use well-defined parameters (specific amounts, jurisdictions, and frameworks) rather than asking the agent to research fictional entities. Real institutions (Al Rajhi Bank, Tenaga Nasional, Jaiz Bank, Julius Berger) are used as context, but the prompts never ask the agent to "research" them — they provide the scenario data directly.

### D6 — Terminology clean

Zero occurrences of "Claude in Excel" found across all 18 lesson files. The chapter correctly uses "Cowork or your preferred AI assistant" or "Cowork or Claude (any plan)" throughout.

## Per-Lesson Details

### 01-why-islamic-finance-needs-jurisdiction-agents.md

- Status: Clean
- Defects: None

### 02-global-standards-map.md

- Status: Clean
- Defects: None

### 03-plugin-architecture.md

- Status: Clean
- Defects: None

### 04-murabaha.md

- Status: Clean
- Defects: None

### 05-ijarah-imb.md

- Status: Clean
- Defects: None

### 06-sukuk.md

- Status: Clean
- Defects: None

### 07-takaful-ifrs17.md

- Status: Clean
- Defects: None

### 08-trade-partnership-finance.md

- Status: Clean
- Defects: None

### 09-malaysia-sukuk.md

- Status: Clean
- Defects: None (see D1 note above re: `**Output:**` marker at line 165)

### 10-saudi-arabia.md

- Status: Clean
- Defects: None (see D1 note above re: `**Output:**` marker at line 177)

### 11-uk-islamic-banking.md

- Status: Clean
- Defects: None (see D1 note above re: `**Output:**` marker at line 157)

### 12-nigeria-sovereign-sukuk.md

- Status: Clean
- Defects: None (see D1 note above re: `**Output:**` marker at line 178)

### 13-global-zakat.md

- Status: Clean
- Defects: None

### 14-shariah-screening.md

- Status: Clean
- Defects: None

### 15-aaoifi-vs-ifrs-capstone.md

- Status: Clean
- Defects: None

### 16-cross-border-consolidation.md

- Status: Clean
- Defects: None

### 17-islamic-fintech.md

- Status: Clean
- Defects: None

### 18-full-skill-library-capstone.md

- Status: Clean
- Defects: None
