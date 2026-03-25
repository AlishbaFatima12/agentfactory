# Part 0 → Thinking Skills Extraction — Team Prompt

## Mission

Extract 8 eval-driven Claude Code skills from Part 0 "Thinking is the Curriculum" lessons. Each skill is a reusable thinking framework for daily engineering/business work.

## POC Reference

`/diagnostic-questions` (from Ch 1) — proven pattern with Two Modes, 6-step Process, Quality Checks, Thinking Scorecard.

## Team: 8 Parallel Agents

| Agent | Skill Name                    | Source Lesson(s) | Core Framework                                                        |
| ----- | ----------------------------- | ---------------- | --------------------------------------------------------------------- |
| 1     | `cascade-mapping`             | Ch 3 L1          | Decision → 5 domains → 1st/2nd/3rd order → feedback loops             |
| 2     | `assumption-autopsy`          | Ch 4 L3          | Self-list → AI comparison → 4-category merge → risk assess            |
| 3     | `error-prediction`            | Ch 2 L1          | Sealed prediction → AI response → 8-category taxonomy → comparison    |
| 4     | `contradiction-test`          | Ch 2 L2          | Two AI responses → divergence ID → 3-draft synthesis                  |
| 5     | `position-stress-test`        | Ch 7 L1+L2       | Position lock → stakeholder matrix → 3-round adversarial defence      |
| 6     | `sealed-decision`             | Ch 9 L1          | Commit recommendation → confidence % → info gaps → reversal trigger   |
| 7     | `three-path-comparison`       | Ch 6 L1          | Solo (45m) → Pure AI (20m) → Collab (30m) → comparison analysis       |
| 8     | `first-principles-derivation` | Ch 4 L1          | Best practice → contrarian argument → failure conditions → principles |

## Per-Agent Process (skill-creator loop)

1. **Read** source lesson ONCE, extract thinking framework
2. **Draft** SKILL.md following diagnostic-questions structural pattern
3. **Create** evals/evals.json with 3 test cases + two-tier assertions
4. **Run** 2 test cases (spawn with-skill + without-skill subagents)
5. **Grade** results against expectations
6. **Report** pass rates + skill quality assessment

## Shared Structural Pattern

```yaml
---
name: <skill-name>
description: >
  <3-4 sentences. Pushy trigger phrases. Domain-agnostic.>
---
```

Body: Title → Two Modes → The Process → Output Formats → Quality Checks → Evaluating Existing Work → Thinking Scorecard

## Eval Pattern (Two-Tier)

- **Structural** (deterministic): "Output contains [section]", "Has N+ items"
- **Quality** (LLM-judge): "Reasoning covers [dimension] at depth 7+/10"

## Output Locations

- Skill: `.claude/skills/<name>/SKILL.md`
- Evals: `.claude/skills/<name>/evals/evals.json`
- Workspace: `.claude/skills/<name>-workspace/iteration-1/`

## Exit Criteria Per Agent

- SKILL.md matches diagnostic-questions structure
- evals.json with 3 test cases + assertions
- 2+ test cases run and graded
- Summary with pass rates
