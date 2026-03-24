---
title: "Summary: Path-Specific Rules with Glob Patterns"
sidebar_position: 2.5
---

# Summary: Path-Specific Rules with Glob Patterns

## Mental Model: Rules That Follow File Types

Lesson 1 taught directory-level CLAUDE.md files that scope instructions to a location. But some conventions follow file types, not locations. Test files live in 15 directories. Config files appear everywhere. You cannot put a CLAUDE.md in every directory.

Path-specific rules solve this: a single `.claude/rules/` file with glob patterns applies to matching files regardless of where they live. The rule loads only when Claude reads a matching file, keeping context clean otherwise.

## Core Pattern: YAML Frontmatter with `paths`

```yaml
---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
---
# Test Conventions
- One assertion per test
- Mock external HTTP calls
```

- Rules **with** `paths`: load on demand when Claude reads matching files
- Rules **without** `paths`: load unconditionally at session start

## Glob Pattern Quick Reference

| Construct | Meaning                      | Example                              |
| :-------- | :--------------------------- | :----------------------------------- |
| `*`       | Any characters in a filename | `*.ts` matches `app.ts`              |
| `**`      | Any number of directories    | `**/*.ts` matches `src/lib/app.ts`   |
| `{}`      | Comma-separated alternatives | `*.{ts,tsx}` matches both extensions |

**The critical gotcha**: `*.ts` matches files in the root directory only. `**/*.ts` matches TypeScript files in every directory. This `*` vs `**` distinction is the most common mistake and appears on the exam.

## Common Patterns You Will Use

| Pattern                               | Matches                              |
| :------------------------------------ | :----------------------------------- |
| `**/*.test.ts`                        | All test files everywhere            |
| `src/api/**/*`                        | All files in the API subtree         |
| `**/*.{ts,tsx}`                       | All TypeScript and TSX files         |
| `**/Dockerfile`                       | Dockerfiles in any directory         |
| `**/{Dockerfile,docker-compose*.yml}` | Docker config files anywhere         |
| `*.md`                                | Markdown in project root only        |
| `**/migrations/**/*`                  | All files inside any migrations/ dir |

## Decision Framework: Path Rules vs Directory CLAUDE.md

| The convention follows... | Use this approach              | Example                                |
| :------------------------ | :----------------------------- | :------------------------------------- |
| A file type               | Path-specific rule             | Test conventions: `**/*.test.{ts,tsx}` |
| A specific directory      | Directory-level CLAUDE.md      | `packages/web/CLAUDE.md`               |
| Everything (universal)    | `.claude/rules/` without paths | Code style, naming conventions         |

**Decision rule**: If the convention applies wherever a file type appears, use a path rule. If it applies to one specific package or directory, use a directory CLAUDE.md.

## Common Mistakes

1. **Using `*.ts` when you mean `**/_.ts`** -- The single `_` does not cross directory boundaries. This matches root-level files only.

2. **Expecting path-scoped rules to load at session start** -- They load when Claude reads a matching file. Check with `/memory` after Claude reads a file, not before.

3. **Putting location-specific rules in path patterns** -- Build commands for one package should go in that package's CLAUDE.md, not in a glob pattern that might match files in other packages.

4. **Not combining both approaches** -- Path rules and directory CLAUDE.md files work together. Use path rules for cross-cutting conventions (test patterns, security rules) and directory CLAUDE.md for package-specific details (build commands, ORM setup).

## Why Token Efficiency Matters

Path-scoped rules only enter the context window when relevant. If you have 500 lines of rules across all files but only 50 lines match the current task, only those 50 lines consume tokens. Fewer irrelevant instructions means better adherence to the instructions that matter.

## Self-Check Questions

1. You want test conventions to apply to `.test.ts` files in 15 directories. Do you create 15 CLAUDE.md files or one path-specific rule?
2. What is the difference between `*.ts` and `**/*.ts`?
3. A path-scoped rule for `src/api/**/*` is not loading. You are editing `src/api/routes/users.ts`. What should you check first?
4. When does a path-scoped rule enter the context window?

<details>
<summary>Answers</summary>

1. One path-specific rule with `paths: ["**/*.test.ts"]`. It matches all test files regardless of directory.
2. `*.ts` matches TypeScript files in the root directory only. `**/*.ts` matches TypeScript files in any directory at any depth.
3. Run `/memory` to confirm the rule file is in `.claude/rules/`. Check that the glob pattern actually matches the file path. Verify Claude has read the file (rules trigger on read, not just file existence).
4. When Claude reads a file matching one of the glob patterns in the `paths` field. Not at session start, and not when Claude uses other tools.

</details>

## Exam Prep: Task Statement 3.3

- Sample Question 6 directly tests path-specific rules vs directory CLAUDE.md
- Test conventions spanning multiple directories = path-specific rules (not directory CLAUDE.md in every folder)
- `**` crosses directory boundaries; `*` does not -- this is tested
- Path-scoped rules reduce irrelevant context and improve adherence
- Multiple patterns in `paths` array combine with OR logic
- Rules load when Claude reads matching files, not at session start
