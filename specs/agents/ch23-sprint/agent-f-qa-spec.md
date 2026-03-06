# Agent Spec: QA Agent

## Mission (one sentence)

Run comprehensive quality assurance against all outputs from Agents A-E, producing a pass/fail report with specific violations and fix assignments.

## Quality Standard

QA must be thorough and specific. Every violation must reference exact file:line. No vague "needs improvement" — say exactly what's wrong and how to fix it.

## Input Files (read all)

- All files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/` (10 lessons + README + _category_.json)
- All files in `specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-plugin/` (full plugin directory)
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/03-legal-and-compliance/01-the-moment-legal-ai-grew-up.md` (frontmatter reference)

## Output Files

- `specs/drafts/chap23_sales_revops_marketing/qa-report.md`

## QA Checklist

### Chapter QA

- [ ] Total word count across all 10 lessons >= 20,000 (run `wc -w` on each file)
- [ ] Every lesson has FULL YAML frontmatter: sidebar_position, title, description, keywords, chapter (=23), lesson, duration_minutes, skills (with proficiency_level, category, bloom_level, digcomp_area, measurable_at_this_level), learning_objectives (with objective, proficiency_level, bloom_level, assessment_method), cognitive_load (new_concepts, assessment), differentiation (extension_for_advanced, remedial_for_struggling)
- [ ] Concept boxes: every technical term defined before first use (grep for bold terms, check if defined earlier)
- [ ] Exercises: count with "What you need" sections vs. total (must be 100%)
- [ ] Exercises: every exercise has key learning statement + time target + numbered steps + verifiable output
- [ ] Examples: every lesson has at least one worked example with specific numbers
- [ ] Pakistan/GCC context: present in at least 3 of 10 lessons (30%)
- [ ] No section is a pure bullet list where prose is needed (check Parts 7-8 especially)
- [ ] No `import` statements for non-existent components (grep for `import.*@site`)
- [ ] Each lesson has 3 "Try With AI" prompts with `**What you're learning:**`
- [ ] Chapter summary in lesson 10 accurately lists all 10 lessons
- [ ] README.md has correct table listing all 10 lessons
- [ ] _category_.json exists with correct label and position

### SKILL.md QA (run for EVERY file in plugin directory)

- [ ] YAML frontmatter: name, version, description, plugin-commands present
- [ ] Description field: contains trigger keywords AND negative trigger phrases ("NOT for...")
- [ ] Line count: <= 500 lines per file
- [ ] NEVER DO section: present and contains >= 3 specific prohibitions
- [ ] Output format block: present (shows agent what to produce)
- [ ] Global router references ALL products AND agents

### Jurisdiction Overlay QA

- [ ] Files exist for: US, EU/UK, Pakistan, GCC (4 files minimum)
- [ ] Each file has: YAML frontmatter, governing framework, key regulations with dates, escalation triggers
- [ ] Each file cites specific statutes with years (CAN-SPAM 2003, GDPR 2018, etc.)

### Plugin Structure QA

- [ ] plugin.json exists and is valid JSON
- [ ] CLAUDE.md exists with scope boundary
- [ ] LICENSE exists
- [ ] commands/ has at least 4 command files
- [ ] skills/ has all 19 skills in correct `skills/{name}/SKILL.md` format
- [ ] workflow-recipes/ has at least 4 files
- [ ] Every file referenced in global router actually exists

## QA Output Format

```
QA REPORT -- Chapter 23 Sprint
Date: [date]
Status: PASS / FAIL / CONDITIONAL PASS

CHAPTER: [PASS/FAIL]
  Word count: [total] ([per-lesson breakdown])
  Frontmatter: [N/10 complete]
  Concept boxes: [N terms defined / N terms used]
  Exercises: [N/8 with all criteria]
  Regional coverage: [N/10 lessons with Pakistan/GCC]
  Violations: [list each with file:line]

SKILL.md FILES: [N/N passed]
  [filename]: [PASS / list violations]

JURISDICTION FILES: [4/4 or N/4]
  [filename]: [PASS / list violations]

PLUGIN STRUCTURE: [PASS/FAIL]
  Missing components: [list]

REQUIRED FIXES BEFORE COMMIT:
  1. [fix] -> assign to [Agent X]
  2. [fix] -> assign to [Agent X]

ADVISORY (nice-to-have, not blocking):
  1. [suggestion]
```

## Hard Constraints

- NEVER: Mark as PASS if any lesson is missing YAML frontmatter fields
- NEVER: Mark as PASS if word count < 20,000
- NEVER: Mark as PASS if any SKILL.md is missing NEVER DO section
- NEVER: Skip reading a file — read every single output file
- ALWAYS: Report exact word counts per file
- ALWAYS: Report specific file:line for each violation
- ALWAYS: Assign every REQUIRED FIX to a specific agent (A/B/C/D/E)
