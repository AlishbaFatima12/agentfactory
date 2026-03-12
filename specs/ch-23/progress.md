# Feature: Ch 23 Prompt & Context Architecture Fix

## Current Phase

Implementation

## Session Log

| Date       | Phase          | Work Done                                                                                             | Next Steps                          |
| ---------- | -------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 2026-03-11 | Research       | Scanned all 14 lessons, identified broken patterns, tested real Cowork output                         | Design fix approach                 |
| 2026-03-11 | Specification  | Designed 3-layer context architecture, wrote spec                                                     | Implementation                      |
| 2026-03-11 | Implementation | Fixed L01 (research prompt, expected output, hallucination detection, Try With AI). Committed 73f4cdf | Revert L02-L13, folder instructions |

## Task Status

### Phase 1: Revert Over-Engineering (L02-L13)

- [ ] Task 1: Unstage skill-creator files from git index
- [ ] Task 2: Revert L02 "Read demo-data.md" additions (7 prompts)
- [ ] Task 3: Revert L03 "Read demo-data.md" additions (4 prompts)
- [ ] Task 4: Revert L04 "Read demo-data.md" additions (3 prompts)
- [ ] Task 5: Revert L05 "Read demo-data.md" additions (5 prompts)
- [ ] Task 6: Revert L06 "Read demo-data.md" additions (2 prompts)
- [ ] Task 7: Revert L07 "Read demo-data.md" additions (8 prompts)
- [ ] Task 8: Revert L08 "Read demo-data.md" additions (7 prompts)
- [ ] Task 9: Revert L09 "Read demo-data.md" additions (4 prompts)
- [ ] Task 10: Revert L10 "Read demo-data.md" additions (4 prompts)
- [ ] Task 11: Revert L11 "Read demo-data.md" additions (3 prompts)
- [ ] Task 12: Revert L12 "Read demo-data.md" additions (6 prompts)
- [ ] Task 13: Revert L13 "Read demo-data.md" additions (7 prompts)

### Phase 2: Folder Instruction Setup (L01)

- [ ] Task 14: Add folder instruction setup step to L01 (after demo-data.md, before research prompt)
- [ ] Task 15: Write the folder instruction block content (company identity, ICP, data refs)

### Phase 3: Skill Names in Key Prompts (L01-L08)

- [ ] Task 16: Audit which skills exist in sales-marketing plugin
- [ ] Task 17: Add natural skill names to L01-L08 key prompts
- [ ] Task 18: Remove placeholder text from L02 ("[Paste or reference...]")

### Phase 4: Clean Up

- [ ] Task 19: Fix L14 terminology ("sales-marketing plugins" → proper name)
- [ ] Task 20: Clean git state, commit on appropriate branch

## Blocked Items

None currently.
