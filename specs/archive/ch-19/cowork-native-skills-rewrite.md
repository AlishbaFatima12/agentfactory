# Ch 19: Cowork-Native Skill Creation Rewrite

## Design Decision

**Date**: 2026-03-09
**Scope**: L08-L09 (and cross-references in L10-L14 practice labs)
**Status**: Approved — ready for implementation

## Problem

L08-L09 teach students to write raw SKILL.md files with YAML frontmatter (`license: Apache-2.0`, `metadata:`, `version:`). This is a developer workflow, not a Cowork workflow. Students were using Cowork plugins hands-on in L07, then abruptly switch to file authoring in L08. The context shift is jarring and unmotivated.

## Solution: Cowork-Native Skill Creation

Cowork has three built-in skill creation methods (confirmed via screenshots in `cowork-skills/`):

1. **Create with Claude** — conversational skill building (AI helps you write it)
2. **Write skill instructions** — simple form: Skill name, Description, Instructions
3. **Upload a skill** — import a pre-built skill file

### Form Field Mapping

| Old YAML field                      | Cowork form field                      |
| ----------------------------------- | -------------------------------------- |
| `name:`                             | Skill name                             |
| `description:`                      | Description                            |
| Markdown body                       | Instructions                           |
| `license:`, `metadata:`, `version:` | Not needed — Cowork manages internally |

## What Changes

### L08 (Jurisdiction and Entity Extensions)

**Keep**: The actual knowledge content — tax rules, chart of accounts, "When [condition], [action]" pattern, escalation clauses, Pakistan worked examples, Global Perspective callouts, Try With AI prompts

**Remove**: All YAML frontmatter blocks from worked examples

**Reframe as**:

- Show the **Write skill instructions** form with the three fields populated
- Show alternative: **Create with Claude** for collaborative skill building
- Show alternative: **Upload a skill** using companion repo reference skills
- Exercise: Create your jurisdiction's tax skill in Cowork via any of the three methods, test against exercise data, refine

**New progression within lesson**:

1. "Try it conversationally first" — tell Cowork your jurisdiction rules in chat (ephemeral)
2. "Make it a skill" — use Write skill instructions form to persist it (Skill name: `pakistan-tax-jurisdiction`, Description: trigger conditions, Instructions: the When/action rules)
3. "Start from a reference" — Upload the companion repo's Pakistan default, then customize for your jurisdiction
4. "Build one collaboratively" — use Create with Claude for the chart of accounts skill

### L09 (Methodology and Compliance Extensions)

**Same treatment**: Reframe Extensions 3-5 (audit methodology, client entity, compliance calendar) using Cowork-native methods. Remove YAML, show form fields and conversational creation.

### L10-L14 (Practice Labs)

**Check**: Any references to "your SKILL.md extension" or "the extension you built in L08-L09" should be reframed as "the Cowork skill you created in L08-L09". The skills are the same — just created through Cowork's UI, not as files.

### Quiz (L16)

**Check**: Any questions referencing YAML frontmatter or file-based skill creation need updating to reference Cowork's skill creation UI.

### README

**Check**: References to "production-ready SKILL.md files" should become "production-ready Cowork skills".

## What Stays the Same

- The 5-extension architecture (jurisdiction tax, chart of accounts, audit methodology, client entity, compliance calendar)
- The "When [condition], [action]" instruction format
- The Pakistan worked examples (content)
- The Global Perspective callouts for US/UK/IFRS jurisdictions
- The escalation rules pattern
- The companion repo reference skills (now framed as uploadable skills)
- The Try With AI prompts (minor reframing)
- The exercise data and month-end close workflow

## Companion Repo Impact

The `panaversity/ca-cpa-practice-agents` reference skills under `reference-skills/` are already valid — they can be uploaded directly via Cowork's "Upload a skill" feature. No changes needed to the repo itself. The lesson just reframes how students use them: "upload and customize" instead of "study and recreate."

## Screenshots

Reference screenshots showing Cowork's skill creation UI are in `cowork-skills/`:

- Skills panel with user-created skills (cfo-variance-bridge, etc.)
- "+" dropdown showing Create with Claude / Write skill instructions / Upload a skill
- Write skill instructions form (name, description, instructions fields)
