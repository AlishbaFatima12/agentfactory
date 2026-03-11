# Part 3 — Prompt Quality Fix Status

Track chapter-by-chapter status of prompt architecture fixes across Part 3 (Business Domain Agent Workflows).

## Status Key

- **DONE**: All 6 defect types audited and fixed
- **PARTIAL**: Some defects fixed, others remain
- **NOT STARTED**: No audit performed yet

## Chapter Status

| Ch  | Title                                | Lessons | Status      | Notes                                                                                                                    |
| --- | ------------------------------------ | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| 14  | Enterprise Agentic Landscape         | 20      | NOT STARTED | Foundations chapter — may have fewer prompt defects                                                                      |
| 15  | Enterprise Agent Blueprint           | 22      | NOT STARTED | Foundations chapter                                                                                                      |
| 16  | The Knowledge Extraction Method      | 22      | NOT STARTED | Foundations chapter                                                                                                      |
| 17  | Finance Domain Agents                | 24      | NOT STARTED | Uses "Claude in Excel" correctly (separate product)                                                                      |
| 18  | Intent-Driven Financial Architecture | 24      | NOT STARTED | Cowork-based; L03-L12 terminology fixed                                                                                  |
| 19  | AI Transformation CA/CPA Practice    | 32      | NOT STARTED | Cowork-native rewrite done for L08-L09                                                                                   |
| 20  | Islamic Finance Domain Agents        | 36      | NOT STARTED | Known fabricated outputs in L09-L12                                                                                      |
| 21  | Banking Domain Agents                | 32      | NOT STARTED | Known fabricated output in L02                                                                                           |
| 22  | Legal Operations and Compliance      | 29      | NOT STARTED | Full chapter rewrite merged (PR #849)                                                                                    |
| 23  | Sales, RevOps & Marketing            | 29      | DONE        | Fixed in two commits: `4a92156b` (L01-L04, folder instructions, skill names) and `75906eee` (L05-L13 fabricated outputs) |

## Priority Order

1. **Ch 20** (36 lessons, confirmed defects in L09-L12) — highest lesson count, confirmed issues
2. **Ch 21** (32 lessons, confirmed defect in L02) — confirmed issues
3. **Ch 22** (29 lessons) — recently rewritten, may be clean
4. **Ch 18** (24 lessons) — terminology partially fixed
5. **Ch 19** (32 lessons) — Cowork-native rewrite may have addressed some
6. **Ch 17** (24 lessons) — "Claude in Excel" usage is intentional here
7. **Ch 14-16** (64 lessons total) — foundations, likely fewer prompt-specific defects

## Defect Type Coverage

| Defect                               | Ch23 Fix                                           | Applicable to Other Chapters                               |
| ------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------- |
| D1: Fabricated Output                | All converted to intent tables                     | Ch 20, 21 confirmed; others need audit                     |
| D2: Missing Skill Name               | Added to L02-L08 primary prompts                   | Depends on chapter's skill architecture                    |
| D3: Inline Data Injection            | Reverted L02-L13, added folder instructions in L01 | Ch23-specific pattern; other chapters may have equivalents |
| D4: Fiction-Researching              | Fixed via folder instructions                      | Ch23-specific (NexaFlow fictional company)                 |
| D5: Narrative Referencing Fabricated | Generalised in L05-L13                             | Follows from D1 fixes                                      |
| D6: Plugin/Tool Terminology          | Fixed in L14                                       | Ch 18-22 need audit per cowork-content.md                  |
