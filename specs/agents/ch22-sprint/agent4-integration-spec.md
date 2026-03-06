# Agent Spec: Integration

## Mission

Merge the expanded chapter (Agent 1 output) with the missing sections (Agent 2 output) into a single final governing artifact. Update the plugin router to include GCC jurisdiction. Update the plugin README with the complete file manifest. Produce one clean, unified chapter file ready for QA.

## Input Files (read all before writing)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_Legal_Operations_v2.md`: Agent 1's expanded chapter
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_missing_sections.md`: Agent 2's new sections
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/agent1-handoff.md`: Agent 1's handoff note
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/agent2-handoff.md`: Agent 2's handoff note
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/agent3-handoff.md`: Agent 3's handoff note
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/SKILL.md`: Current router (post Agent 3 edits)
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/README.md`: Current plugin README

## Output Files

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_Legal_Operations_FINAL.md`: The merged, unified chapter
- Updated `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/README.md`: Plugin README with complete file manifest including GCC overlay

## Work Order

### 1. Merge Chapter Files

- Start with Agent 1's v2 file as the base
- Insert Agent 2's missing sections at the locations marked by `<!-- INSERT: after [section name] -->` comments
- Remove all insertion markers from the final file
- Ensure section numbering and heading hierarchy is consistent
- Verify no duplicate content between v2 and missing sections

### 2. Quality Checks on Merged Chapter

- Word count must be >= 20,000
- All 12+ concept boxes must be present and placed before first use of their term
- All 8 exercises must have key learning statements
- All worked examples must have named parties and specific numbers
- Chapter title must say "Chapter 22" (not "Chapter 28")
- No placeholder text (TODO, TBD, [expand]) remaining

### 3. Update Plugin README

- Add GCC jurisdiction overlay to the file manifest
- Verify all file paths in the README match actual files on disk
- Add entry to the "How Each Folder Maps to Chapter 22 Lessons" table for GCC exercises

### 4. Verify Router Completeness

- Confirm the router (edited by Agent 3) routes to ALL jurisdiction overlays including GCC
- Confirm the router routes to ALL product skills
- If Agent 3 left any gaps, fix them

## Hard Constraints

- NEVER drop content during merge — every word from both source files must appear in the final
- NEVER rewrite sections — only integrate and fix transitions between merged sections
- NEVER change the meaning of any worked example or concept box
- ALWAYS verify the final word count
- ALWAYS check for orphaned INSERT markers

## Handoff Note

End your session with a file at `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/agent4-handoff.md` containing:
Files created or modified: [list with line counts and word counts]
Final chapter word count: [N]
Merge decisions: [list any conflict resolutions]
README updates: [list changes]
Router verification: [PASS / list issues]
Open questions for Orchestrator: [list]
