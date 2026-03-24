---
title: "Summary: Custom Skills with Frontmatter"
sidebar_position: 3.5
---

# Summary: Custom Skills with Frontmatter

## Mental Model: Wiki Pages That Execute

Team knowledge usually lives in wikis nobody reads. Skills turn that knowledge into slash commands that live inside Claude Code, version-controlled alongside your source code. Type `/review` and your team's code review checklist runs automatically. Every developer who clones the repo gets it.

## Two Systems, One Mechanism

**Commands** (`.claude/commands/review.md`) and **skills** (`.claude/skills/review/SKILL.md`) both create `/slash-commands`. They have been merged into the same system. The difference:

| Feature          | Command (`.claude/commands/`) | Skill (`.claude/skills/`)               |
| :--------------- | :---------------------------- | :-------------------------------------- |
| Slash command    | Yes                           | Yes                                     |
| YAML frontmatter | Supported                     | Supported                               |
| Supporting files | No (single file)              | Yes (directory with templates, scripts) |
| `$ARGUMENTS`     | Yes                           | Yes                                     |

**When to use which**: Start with commands for simple single-file instructions. Move to skills when you need supporting files or directory structure.

## Three Frontmatter Power Features

### 1. `context: fork` -- Isolated Execution

Runs the skill in a separate subagent. Verbose output stays out of your main conversation. Your context stays clean.

**Use for**: Scanning many files, auditing, exploratory investigations, brainstorming.
**Do not use for**: Reference knowledge skills (subagent cannot see your conversation), interactive back-and-forth.

### 2. `allowed-tools` -- Restricted Tool Access

Limits which tools Claude can use during skill execution. Creates read-only or limited-access skills.

| Pattern                             | What It Allows                |
| :---------------------------------- | :---------------------------- |
| `Read, Grep, Glob`                  | Read-only file access         |
| `Bash(git log*), Bash(git diff*)`   | Git history inspection only   |
| `Read, Grep, Glob, Bash(npm test*)` | Read files and run tests only |

**Key insight**: `allowed-tools` restricts the default set. It does not grant new permissions.

### 3. `argument-hint` -- Parameter Prompting

Shows autocomplete hints when developers type the slash command. Access individual arguments with `$0`, `$1`, `$2`.

```
/migrate-component SearchBar React Vue
# $0 = SearchBar, $1 = React, $2 = Vue
```

## Where Skills Live (Scope)

| Scope    | Path                               | Who Gets It                   |
| :------- | :--------------------------------- | :---------------------------- |
| Personal | `~/.claude/skills/<name>/SKILL.md` | You, across all your projects |
| Project  | `.claude/skills/<name>/SKILL.md`   | Everyone who clones the repo  |
| Project  | `.claude/commands/<name>.md`       | Everyone who clones the repo  |

**Priority when names collide**: enterprise > personal > project. If you create a personal skill with the same name as a project skill, your version wins on your machine.

## Invocation Control

| Field                            | You Can Invoke | Claude Can Invoke | Use For                                   |
| :------------------------------- | :------------- | :---------------- | :---------------------------------------- |
| (default)                        | Yes            | Yes               | General-purpose skills                    |
| `disable-model-invocation: true` | Yes            | No                | Side-effect skills (deploy, commit)       |
| `user-invocable: false`          | No             | Yes               | Background knowledge (legacy system docs) |

## Skills vs CLAUDE.md Decision Rule

- **Always applies to every task?** --> CLAUDE.md or `.claude/rules/`
- **On-demand action with specific trigger?** --> Skill
- **Produces verbose output?** --> Skill with `context: fork`
- **Needs restricted tool access?** --> Skill with `allowed-tools`

Think of CLAUDE.md as the constitution (always in effect) and skills as laws (invoked when applicable).

## Common Mistakes

1. **Putting on-demand workflows in CLAUDE.md** -- A code review checklist does not need to load on every interaction. Make it a skill so it only runs when invoked.

2. **Not using `context: fork` for verbose skills** -- A codebase audit that scans hundreds of files will flood your conversation context. Fork it.

3. **Thinking `allowed-tools` grants permissions** -- It restricts the default tool set. `Read, Grep, Glob` means Claude can ONLY read, not write or run commands.

4. **Forgetting `disable-model-invocation` for dangerous skills** -- A `/deploy` skill should never be auto-invoked by Claude. Add `disable-model-invocation: true`.

## Self-Check Questions

1. Where do you put a `/review` command so every team member who clones the repo gets it?
2. What frontmatter field prevents a skill from polluting your main conversation with verbose output?
3. You want a skill that analyzes dependencies but cannot modify any files. What frontmatter field do you use and what value?
4. When would you use `user-invocable: false`?

<details>
<summary>Answers</summary>

1. `.claude/commands/review.md` or `.claude/skills/review/SKILL.md` in the project repository (committed to git).
2. `context: fork` -- runs the skill in an isolated subagent, returning only a summary.
3. `allowed-tools: Read, Grep, Glob` -- restricts Claude to read-only file access.
4. When the skill provides background knowledge that Claude should know but is not a meaningful action for a developer to invoke (e.g., legacy system documentation).

</details>

## Exam Prep: Task Statement 3.2

- Q4: Team-shared commands go in `.claude/commands/` or `.claude/skills/` in the project repo
- Know the three frontmatter fields: `context: fork`, `allowed-tools`, `argument-hint`
- `context: fork` = isolated subagent, not a remote server
- `allowed-tools` restricts (does not grant) tool access
- Skills vs CLAUDE.md: universal standards = CLAUDE.md, on-demand actions = skills
