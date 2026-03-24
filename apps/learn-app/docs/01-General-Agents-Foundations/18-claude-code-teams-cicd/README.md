---
title: "Chapter 18: Claude Code for Teams, CI/CD & Advanced Configuration"
sidebar_position: 18
description: "Transform Claude Code from a solo productivity tool into shared engineering infrastructure with team configuration, path-specific rules, custom skills, CI/CD pipelines, and multi-pass review workflows"
keywords:
  [
    claude code,
    CLAUDE.md,
    teams,
    ci/cd,
    path-specific rules,
    custom skills,
    plan mode,
    iterative refinement,
    multi-pass review,
    session management,
  ]
---

# Chapter 18: Claude Code for Teams, CI/CD & Advanced Configuration

Claude Code becomes exponentially more valuable when it is configured for a team, embedded in automated pipelines, and equipped with path-aware conventions. This chapter transforms Claude Code from a solo developer tool into shared engineering infrastructure.

## What You'll Learn

By the end of this chapter, you'll be able to:

- Configure the three-level CLAUDE.md hierarchy (user, project, directory) and diagnose team configuration issues
- Create path-specific rules with glob patterns in `.claude/rules/` YAML frontmatter
- Build custom skills with `context: fork`, `allowed-tools`, and `argument-hint` frontmatter
- Choose between plan mode and direct execution based on task characteristics
- Apply iterative refinement techniques (concrete examples, test-driven iteration, interview pattern)
- Integrate Claude Code into CI/CD pipelines with `-p`, `--output-format json`, and `--json-schema`
- Design multi-pass review architectures that overcome single-session attention limitations
- Manage sessions with `--resume`, `/branch`, and `/compact`

## Lessons

1. **[The CLAUDE.md Configuration Hierarchy](./01-claude-md-configuration-hierarchy.md):** Three-level hierarchy (user, project, directory), @import syntax for modular configs, .claude/rules/ directory, /memory diagnostic command, CLAUDE.md vs settings.json
2. **[Path-Specific Rules with Glob Patterns](./02-path-specific-rules-with-glob-patterns.md):** YAML frontmatter `paths` field for conditional rule loading, glob syntax (`**/*.test.tsx`, `src/api/**/*`), token efficiency through selective loading, decision framework for path rules vs directory CLAUDE.md
3. **[Custom Skills with Frontmatter](./03-custom-skills-with-frontmatter.md):** Commands vs skills, `context: fork` for isolated execution, `allowed-tools` for restricting tool access, `argument-hint` for parameter prompts, skills vs CLAUDE.md decision framework, invocation control
4. **[Plan Mode vs Direct Execution](./04-plan-mode-vs-direct-execution.md):** When to use plan mode (multi-file, architectural) vs direct execution (single-file, obvious), the Explore subagent for isolated investigation, the Explore-Plan-Execute power pattern
5. **[Iterative Refinement Techniques](./05-iterative-refinement-techniques.md):** Concrete I/O examples for unambiguous transformations, test-driven iteration (you write tests, Claude implements), interview pattern for unfamiliar domains, single-message vs sequential iteration
6. **[Claude Code in CI/CD Pipelines](./06-claude-code-in-cicd-pipelines.md):** The `-p` flag for non-interactive mode, `--output-format json` + `--json-schema` for structured output, CLAUDE.md as CI context, session isolation, avoiding duplicate PR comments, real-time vs Batch API, GitHub Actions integration
7. **[Multi-Pass Review Architecture](./07-multi-pass-review-architecture.md):** Self-review limitations (retained reasoning bias), per-file local analysis passes + cross-file integration pass, specific review criteria over vague instructions, confidence self-reporting for calibrated routing
8. **[Session Management: Resume, Fork, and Recovery](./08-session-management-resume-fork-recovery.md):** Named sessions with `--resume`, `/branch` for parallel exploration, `/compact` for context management, informing resumed sessions about external changes, when to resume vs start fresh

## Prerequisites

- Chapter 14: General Agents (Claude Code fundamentals)
- Chapter 16: Spec-Driven Development with Claude Code

## Chapter Deliverables

- A complete CLAUDE.md hierarchy for a team monorepo
- Four path-specific rule files with glob patterns
- Three custom skills with `context: fork`, `allowed-tools`, and `argument-hint`
- A working CI/CD pipeline with Claude Code integration (`-p`, `--output-format json`)
- A multi-pass review workflow script

## Certification Exam Coverage

This chapter is the primary teaching chapter for **Domain 3** of the Claude Certified Architect: Foundations exam (20% of total score) and covers Task Statement 4.6 from Domain 4.

### Domain 3: Claude Code Configuration & Workflows (20%)

| Task Statement | Topic                                                                                   | Lesson |
| :------------- | :-------------------------------------------------------------------------------------- | :----- |
| 3.1            | CLAUDE.md hierarchy (user/project/directory), @import, .claude/rules/, /memory          | L1     |
| 3.2            | Custom skills (context:fork, allowed-tools, argument-hint), commands vs skills          | L3     |
| 3.3            | Path-specific rules (.claude/rules/ with YAML glob patterns)                            | L2     |
| 3.4            | Plan mode vs direct execution, Explore subagent                                         | L4     |
| 3.5            | Iterative refinement (concrete I/O examples, test-driven, interview pattern)            | L5     |
| 3.6            | CI/CD pipelines (-p flag, --output-format json, --json-schema, CLAUDE.md as CI context) | L6     |

### Domain 4: Task Statement 4.6

| Task Statement | Topic                                                                                                        | Lesson |
| :------------- | :----------------------------------------------------------------------------------------------------------- | :----- |
| 4.6            | Multi-pass review: self-review limits, per-file + cross-file passes, session isolation, confidence reporting | L7     |

### Exam Scenarios Covered

- **Scenario 2**: Code Generation with Claude Code (CLAUDE.md configuration, custom commands, plan mode)
- **Scenario 5**: Claude Code for CI (automated reviews, test generation, -p flag, structured output)

### Exam Sample Questions Directly Covered

| Question | Topic                                                                 | Lesson |
| :------- | :-------------------------------------------------------------------- | :----- |
| Q4       | Custom /review command placement (.claude/commands/ for team sharing) | L3     |
| Q5       | When to use plan mode (monolith restructuring = plan mode)            | L4     |
| Q6       | Path-specific rules (.claude/rules/ with glob patterns)               | L2     |
| Q10      | Running Claude Code in CI (-p flag for non-interactive mode)          | L6     |
| Q11      | Batch API vs real-time (batch for overnight, real-time for blocking)  | L6     |
| Q12      | Multi-pass review (per-file + cross-file integration pass)            | L7     |

### Exam Preparation Exercise

- **Exercise 2**: Configure Claude Code for a Team Development Workflow (maps directly to L1-L3 and L6)
