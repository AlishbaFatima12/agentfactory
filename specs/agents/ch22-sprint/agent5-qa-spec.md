# Agent Spec: QA

## Mission

Run the full QA checklist against all Chapter 22 output files (final chapter, all SKILL.md files, router, README). Produce a structured QA report. Flag any remaining violations for targeted fixes. Output PASS, FAIL, or CONDITIONAL PASS.

## Input Files (read all before checking)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_Legal_Operations_FINAL.md`: The merged final chapter
- Every SKILL.md in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/*/SKILL.md`
- Every jurisdiction overlay in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/README.md`
- All handoff notes in `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/`

## Output Files

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/qa-report.md`

## QA Checklists

### Chapter QA Checklist

Run each check. Report actual values.

```
CHAPTER CHECKS
[ ] Word count >= 20,000 — actual: [N]
[ ] Concept boxes (🔑 or "Key Concept") — count: [N] / 12 minimum
[ ] Every legal/tech term has concept box BEFORE first use — violations: [list any]
[ ] Key learning statements — [N] of 8 exercises have "The key learning:"
[ ] Worked examples in every major Part (1-6) — [N] sections with real examples
[ ] Named parties in worked examples — [list any without named companies/people]
[ ] Specific numbers in worked examples — [list any without contract values/timelines]
[ ] Agent dialogue in worked examples — [list any without input/output shown]
[ ] Pakistan/GCC context — [N]% of examples (target: >= 20%)
[ ] No pure bullet-list-only sections (every section has introductory prose)
[ ] Chapter uses "Chapter 22" throughout — search for "Chapter 28": [count]
[ ] No placeholder text — search for TODO, TBD, [expand], [add]: [count]
[ ] Chapter summary matches actual chapter content
[ ] Plugin install path present: claude plugin install legal-ops@agentfactory-business
```

### SKILL.md QA Checklist (run for EVERY file)

```
FILE: [filename]
[ ] YAML frontmatter complete: name, version, description, plugin-commands
[ ] Description: trigger keywords present
[ ] Description: negative trigger phrases present ("NOT for: ...")
[ ] NEVER DO section: present with >= 3 specific prohibitions
[ ] Output format block: present and specific (shows exact output structure)
[ ] Line count: <= 500 — actual: [N]
[ ] "ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY" present
```

### Jurisdiction Overlay QA (run for EVERY overlay)

```
FILE: [filename]
[ ] Line count >= 80 — actual: [N]
[ ] Covers: governing framework, key statutes, escalation triggers
[ ] Data protection section present
[ ] IP section present (where applicable)
[ ] Contract-specific provisions present
```

### Router QA

```
[ ] Routes to every product skill file (9 skills)
[ ] Routes to every jurisdiction overlay (6 files including GCC)
[ ] NEVER DO section present with >= 3 prohibitions
[ ] Negative triggers in description
[ ] Mandatory output header format defined
```

### Plugin README QA

```
[ ] File manifest matches actual files on disk
[ ] All install commands correct
[ ] Chapter reference says "Chapter 22"
[ ] GCC jurisdiction listed
```

## Report Format

Write the QA report exactly in this format:

```markdown
# QA REPORT — Chapter 22 Legal Operations Sprint

Date: [date]
Status: [PASS / FAIL / CONDITIONAL PASS]

## CHAPTER

Status: [PASS / FAIL]
Word count: [N]
Concept boxes: [N] found
Key learning statements: [N] of 8
Pakistan/GCC coverage: [N]%
Violations: [list each — or "none"]

## SKILL.md FILES: [N] of [N] passed

[For each file:]
[filename]: [PASS / list specific violations]

## JURISDICTION OVERLAYS: [N] of [N] passed

[For each file:]
[filename]: [PASS / list specific violations]

## ROUTER

Status: [PASS / FAIL]
Violations: [list — or "none"]

## PLUGIN README

Status: [PASS / FAIL]
Violations: [list — or "none"]

## REQUIRED FIXES BEFORE COMMIT (if any)

Fix 1: [exact description] — assign to: [agent name or "orchestrator"]
Fix 2: ...

## SIGN-OFF

[APPROVED FOR COMMIT / BLOCKED — fixes required]
```

## Hard Constraints

- NEVER mark a SKILL.md as PASS if its description field has no negative trigger phrases
- NEVER mark the chapter as PASS if word count < 20,000
- NEVER mark the chapter as PASS if any exercise lacks a key learning statement
- NEVER skip any file — read and check every single one
- ALWAYS report actual numbers, not just pass/fail
- ALWAYS list specific violations with file names and line numbers where possible

## Handoff Note

The QA report IS the handoff note for this agent. No separate handoff file needed.
