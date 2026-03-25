---
slug: /General-Agents-Foundations/claude-code-teams-cicd/claude-md-configuration-hierarchy
sidebar_position: 1
title: "The CLAUDE.md Configuration Hierarchy"
description: "Build a complete CLAUDE.md hierarchy for a team monorepo with user, project, and directory scoping; use @import for modular standards; split instructions into .claude/rules/ topic files; diagnose loading issues with /memory"
keywords:
  [
    CLAUDE.md,
    configuration hierarchy,
    user instructions,
    project instructions,
    directory scope,
    import syntax,
    claude rules,
    memory command,
    team configuration,
    monorepo,
  ]
chapter: 18
lesson: 1
duration_minutes: 25

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (AI Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Building CLAUDE.md hierarchies, diagnosing configuration issues with /memory, splitting instructions into modular rules files"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA
skills:
  - name: "CLAUDE.md Hierarchy Design"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital-Content-Creation"
    measurable_at_this_level: "Student can create a three-level CLAUDE.md hierarchy for a team project, placing instructions at the correct scope (user, project, directory) based on audience and purpose"

  - name: "Modular Configuration with @import"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can use @import syntax to compose CLAUDE.md from multiple source files and explain why imports keep per-package instructions maintainable"

  - name: "Configuration Debugging with /memory"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can run /memory to list all loaded instruction files and diagnose why a teammate's instructions are not being applied"

  - name: "Rules Directory Organization"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital-Content-Creation"
    measurable_at_this_level: "Student can split a monolithic CLAUDE.md into focused .claude/rules/ topic files and explain the tradeoff between always-loaded rules and on-demand skills"

learning_objectives:
  - objective: "Create a three-level CLAUDE.md hierarchy (user, project, directory) for a team monorepo and explain what each level controls"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student creates three CLAUDE.md files at different scopes and verifies all three load using /memory"
  - objective: "Use @import syntax to compose a project CLAUDE.md from separate standards files, keeping per-package instructions modular"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student adds @import references for a README and a coding-standards file and confirms they expand at session start"
  - objective: "Split a monolithic CLAUDE.md into focused .claude/rules/ topic files and explain when to use rules vs a single CLAUDE.md"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student creates at least three .claude/rules/ files from a single large CLAUDE.md and verifies they load correctly"
  - objective: "Use /memory to diagnose why a team member is not receiving expected instructions"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Student runs /memory, identifies a missing file, and explains the root cause (wrong scope or excluded path)"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (three-level hierarchy, user vs project vs directory scope, @import syntax, .claude/rules/ directory, /memory diagnostic command); within B1 limit of 10"

differentiation:
  extension_for_advanced: "Add a managed policy CLAUDE.md at the system level (/Library/Application Support/ClaudeCode/CLAUDE.md on macOS) and use claudeMdExcludes in settings to skip irrelevant ancestor files in a large monorepo"
  remedial_for_struggling: "Start with only project-level CLAUDE.md; add user-level and directory-level files one at a time, running /memory after each to confirm loading"

# Generation metadata
generated_by: "content-implementer v2.0.0"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
version: "1.0.0"

prerequisites:
  - "Chapter 14: General Agents (Claude Code fundamentals)"
  - "Chapter 16: Spec-Driven Development with Claude Code"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 1
  session_title: "CLAUDE.md Configuration Hierarchy"
  key_points:
    - "Three levels exist: user (~/.claude/CLAUDE.md), project (./CLAUDE.md or ./.claude/CLAUDE.md), and directory (subdirectory CLAUDE.md files). More specific locations take precedence."
    - "@import uses @path/to/file syntax, resolves relative to the importing file, supports up to 5 levels of nesting, and requires a one-time approval dialog for external imports"
    - ".claude/rules/ files without a paths field load at launch with the same priority as .claude/CLAUDE.md; rules WITH paths load on demand when Claude reads matching files"
    - "/memory lists every CLAUDE.md and rules file loaded in the current session; it is the primary diagnostic tool for configuration issues"
  misconceptions:
    - "Students think user-level CLAUDE.md is shared with teammates via git; it lives in ~/.claude/ and is personal to your machine"
    - "Students confuse CLAUDE.md with settings.json; CLAUDE.md shapes Claude's behavior through instructions, settings.json enforces technical configuration (permissions, hooks, MCP servers)"
    - "Students assume directory-level CLAUDE.md files load at session start; they load on demand when Claude reads files in that subdirectory"
    - "Students expect CLAUDE.md instructions to be strictly enforced; they are context that shapes behavior, not hard enforcement like settings.json permissions"
  discussion_prompts:
    - "Your team has a monorepo with frontend (React), backend (Python), and infrastructure (Terraform) packages. Where would you put instructions that apply to all packages vs instructions specific to one?"
    - "A teammate says Claude is ignoring their coding standards. What is the first thing you would check?"
  teaching_tips:
    - "Have students create a fresh test project with mkdir and git init, then build the hierarchy step by step. Running /memory after each file creation makes the loading behavior visible."
    - "The most common exam question pattern is: 'A team member reports Claude is not following instructions. Where should you look first?' Answer: /memory to check what loaded."
    - "Emphasize that CLAUDE.md files above the working directory load in full at launch, while subdirectory CLAUDE.md files load on demand. This is a key exam distinction."
  assessment_quick_check:
    - "Name the three CLAUDE.md scope levels and where each file lives on disk"
    - "What command shows you every instruction file loaded in the current session?"
    - "A new team member's personal preferences are appearing for everyone on the team. What did they do wrong?"
---

# The CLAUDE.md Configuration Hierarchy

Your team just adopted Claude Code. Everyone is excited, until Monday morning: the frontend developer's Claude is inserting Python docstrings into React components. The backend engineer's Claude is adding TypeScript-style imports to FastAPI routes. The DevOps engineer runs Claude in the infrastructure directory and gets frontend linting rules she never asked for. Everyone configured Claude, but nobody configured it _correctly_.

The root problem is scope. Claude Code's instruction system has three levels, each designed for a different audience. Personal preferences go in one place, team standards go in another, and package-specific conventions go in a third. When instructions land at the wrong level, they leak into contexts where they do not belong. This lesson teaches you to build a complete CLAUDE.md hierarchy where every instruction lives at exactly the right scope.

---

## The Three-Level Hierarchy

Claude Code reads instructions from CLAUDE.md files placed at specific locations. Each location defines who the instructions apply to and how they are shared.

| Level         | File Location                               | Who It Affects                         | Shared via Git? | Loads When                                |
| :------------ | :------------------------------------------ | :------------------------------------- | :-------------- | :---------------------------------------- |
| **User**      | `~/.claude/CLAUDE.md`                       | You, across all projects               | No              | Session start                             |
| **Project**   | `./CLAUDE.md` or `./.claude/CLAUDE.md`      | All team members on this repo          | Yes             | Session start                             |
| **Directory** | `packages/api/CLAUDE.md` (any subdirectory) | Claude, when working in that directory | Yes             | On demand (when Claude reads files there) |

**Precedence rule**: more specific locations override broader ones. If your user-level file says "use tabs" and the project-level file says "use 2-space indentation," the project-level instruction wins because it is more specific to the current work.

Claude also walks _up_ the directory tree from your working directory. If you run Claude Code in `foo/bar/`, it loads both `foo/bar/CLAUDE.md` and `foo/CLAUDE.md`. This means ancestor directories contribute instructions automatically.

### User-Level: Your Personal Preferences

The user-level file at `~/.claude/CLAUDE.md` holds instructions that follow you across every project on your machine. This file is never committed to git; it is personal to your workstation.

Good candidates for user-level instructions:

- Your preferred code style when no project standard exists
- Personal shortcuts and workflow habits
- Editor integration preferences
- Your name and role (so Claude addresses you appropriately)

```markdown
# My Preferences

- When no project style guide exists, use 2-space indentation
- I prefer explicit error handling over silent failures
- When generating commit messages, use conventional commits format
- My name is Priya; I am a senior backend engineer
```

**What does NOT belong here**: anything your teammates need. If you put "all API routes must return JSON" in your user-level file, that instruction applies only on your machine. When a teammate runs Claude on the same project, they will not see it.

### Project-Level: Team Standards

The project-level file lives at `./CLAUDE.md` or `./.claude/CLAUDE.md` in your repository root. It is committed to git and shared with every team member who clones the repo.

This is where team-wide instructions belong: build commands, test requirements, coding standards, architectural decisions, and naming conventions.

```markdown
# Project: WidgetCorp Platform

## Build & Test

- Run `pnpm install` before first use
- Run `pnpm test` before committing
- Run `pnpm lint` to check code style

## Coding Standards

- Use TypeScript strict mode in all packages
- All API responses must include a `requestId` field
- Error responses follow RFC 7807 Problem Details format

## Architecture

- Frontend: React 19 with Server Components in packages/web/
- Backend: FastAPI in packages/api/
- Infrastructure: Terraform in packages/infra/
```

:::tip Quick Start
Run `/init` inside Claude Code to generate a starting CLAUDE.md automatically. Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers. If a CLAUDE.md already exists, `/init` suggests improvements rather than overwriting it.
:::

### Directory-Level: Package-Specific Conventions

In a monorepo, different packages have different rules. The frontend uses React conventions; the backend follows Python PEP 8; the Terraform code has its own naming patterns. Directory-level CLAUDE.md files handle this.

Place a CLAUDE.md inside any subdirectory. Claude loads it _on demand_ when it reads files in that directory, not at session start.

```
my-monorepo/
├── CLAUDE.md                    # Project-level (loads at start)
├── packages/
│   ├── web/
│   │   └── CLAUDE.md            # Frontend rules (loads on demand)
│   ├── api/
│   │   └── CLAUDE.md            # Backend rules (loads on demand)
│   └── infra/
│       └── CLAUDE.md            # Terraform rules (loads on demand)
```

Example `packages/api/CLAUDE.md`:

```markdown
# API Package Conventions

- Use FastAPI with Pydantic v2 models
- All endpoints must have OpenAPI docstrings
- Tests use pytest with fixtures in conftest.py
- Database queries use SQLAlchemy 2.0 async syntax
```

When Claude is editing a file in `packages/web/`, it picks up the frontend rules. When it switches to `packages/api/`, it picks up the backend rules. The DevOps engineer working in `packages/infra/` only sees infrastructure conventions. The scope leaking problem from the opening scenario is solved.

---

## Composing Instructions with @import

As your project CLAUDE.md grows, it becomes hard to maintain. You want to keep build instructions, coding standards, and architectural notes in separate files, especially when different people own different sections.

The `@import` syntax lets you reference external files from any CLAUDE.md. Imported files are expanded and loaded into context alongside the CLAUDE.md that references them.

```markdown
# WidgetCorp Platform

See @README.md for project overview and @package.json for available scripts.

## Standards

- Coding standards: @docs/coding-standards.md
- Git workflow: @docs/git-workflow.md
- API design guide: @docs/api-design.md
```

**Resolution rules**:

- Relative paths resolve relative to the file containing the import, not the working directory
- Absolute paths and `~` home-directory paths work too
- Imported files can import other files, up to 5 levels deep
- The first time Claude Code encounters external imports in a project, it shows an approval dialog

### Personal Imports in Shared Files

You can reference a personal file from the shared project CLAUDE.md. The import goes in the committed file, but the target lives on your machine:

```markdown
# Team Standards

@docs/coding-standards.md

# Individual Preferences

@~/.claude/my-project-preferences.md
```

Teammates who do not have `~/.claude/my-project-preferences.md` simply skip that import. This pattern lets you layer personal preferences on top of team standards without maintaining a separate file.

### When to Import vs When to Use .claude/rules/

| Approach               | Best For                                                  | Loaded                                        |
| :--------------------- | :-------------------------------------------------------- | :-------------------------------------------- |
| `@import` in CLAUDE.md | Pulling in existing docs (README, standards files)        | At session start, always                      |
| `.claude/rules/` files | Modular topic-specific rules, especially path-scoped ones | At start (no paths) or on demand (with paths) |

Use `@import` when you want to reuse an existing document as-is. Use `.claude/rules/` when you want to organize instructions into focused, independently maintainable topic files. The next section covers `.claude/rules/` in detail.

---

## Splitting Instructions into .claude/rules/

A single CLAUDE.md file works for small projects. For larger projects, the file grows past the recommended 200-line limit, adherence drops, and multiple team members editing the same file causes merge conflicts.

The `.claude/rules/` directory solves this. Place markdown files in `.claude/rules/`, each covering one topic. Files without a `paths` YAML frontmatter field load at session start with the same priority as `.claude/CLAUDE.md`.

```
my-project/
├── .claude/
│   ├── CLAUDE.md              # Brief overview, links to key resources
│   └── rules/
│       ├── code-style.md      # Indentation, naming, formatting
│       ├── testing.md         # Test conventions, coverage requirements
│       ├── security.md        # Auth patterns, input validation
│       └── api-design.md      # Endpoint naming, response format
```

Each rules file is a standalone markdown document. No special syntax is needed beyond an optional YAML frontmatter block (covered in Lesson 2 for path-specific scoping).

### Migrating a Large CLAUDE.md

Here is a before-and-after for splitting a monolithic file:

**Before** (single 350-line CLAUDE.md):

```markdown
# Project Instructions

## Build Commands

...50 lines...

## Code Style

...80 lines...

## Testing

...60 lines...

## Security

...70 lines...

## API Design

...90 lines...
```

**After** (brief CLAUDE.md + 5 rules files):

```markdown
# Project: WidgetCorp Platform

Built with TypeScript (frontend) and Python (backend).
See @README.md for project overview.

Key commands:

- `pnpm install` - install dependencies
- `pnpm test` - run all tests
- `pnpm lint` - check code style
```

The detailed sections move into `.claude/rules/code-style.md`, `.claude/rules/testing.md`, and so on. The main CLAUDE.md stays under 200 lines and focuses on orientation.

### User-Level Rules

Personal rules in `~/.claude/rules/` apply to every project on your machine, just like `~/.claude/CLAUDE.md`. Use them for preferences that are not project-specific:

```
~/.claude/rules/
├── preferences.md      # Your personal coding preferences
└── workflows.md        # Your preferred workflows
```

User-level rules load before project rules, giving project rules higher priority when they conflict.

---

## Diagnosing Configuration with /memory

You have built a hierarchy, split rules into files, and added imports. How do you verify everything loaded correctly? The `/memory` command is your diagnostic tool.

Run `/memory` inside any Claude Code session. It lists:

1. Every CLAUDE.md file loaded in the current session
2. Every `.claude/rules/` file loaded
3. Whether auto memory is enabled
4. A link to open the auto memory folder

### Common Diagnostic Scenarios

**Scenario 1: "Claude is ignoring my project's coding standards"**

Run `/memory`. Check whether the project CLAUDE.md appears in the list. If it does not, you may be running Claude Code from a directory outside the project root, or the file may be at the wrong path.

**Scenario 2: "A new team member's Claude behaves differently from everyone else's"**

The new team member may have user-level instructions (`~/.claude/CLAUDE.md`) that conflict with the project. Have them run `/memory` and compare the loaded files with another team member's list. User-level files are personal, so differences here are expected, but conflicts with project rules cause inconsistent behavior.

**Scenario 3: "Directory-level rules are not loading"**

Remember: subdirectory CLAUDE.md files load _on demand_, not at session start. They appear in `/memory` only after Claude reads a file in that subdirectory. Ask Claude to read a file in the target directory, then run `/memory` again.

**Scenario 4: "Instructions seem lost after /compact"**

CLAUDE.md files fully survive compaction. After `/compact`, Claude re-reads your CLAUDE.md from disk and re-injects it fresh. If an instruction disappeared, it was given only in conversation, not written to CLAUDE.md. Add it to the appropriate file to make it persist.

:::info Exam Connection
The certification exam tests your ability to diagnose configuration hierarchy issues (Task Statement 3.1). Sample Question 6 tests when to use path-specific rules in `.claude/rules/` vs directory-level CLAUDE.md. The key distinctions: user-level is personal (not shared), project-level is team-wide (shared via git), directory-level loads on demand (not at start). When the exam describes a "team member not receiving instructions," check the scope first.
:::

---

## CLAUDE.md vs settings.json

Students often confuse CLAUDE.md with `settings.json`. They serve different purposes:

| Concern                                     | Configure In                       |
| :------------------------------------------ | :--------------------------------- |
| Code style guidelines, naming conventions   | CLAUDE.md                          |
| Build commands, test instructions           | CLAUDE.md                          |
| Architectural decisions, patterns to follow | CLAUDE.md                          |
| Block specific tools or file paths          | `settings.json` (permissions.deny) |
| Enforce sandbox isolation                   | `settings.json` (sandbox.enabled)  |
| Configure MCP servers                       | `.mcp.json`                        |
| Environment variables for sessions          | `settings.json` (env)              |

**The distinction**: `settings.json` rules are enforced by the client regardless of what Claude decides. CLAUDE.md instructions shape Claude's behavior but are not a hard enforcement layer. Think of `settings.json` as a lock on the door and CLAUDE.md as a sign that says "please knock first."

---

## Hands-On: Build a Team Monorepo Hierarchy

This is your lesson deliverable. You will create a complete CLAUDE.md hierarchy for a simulated team monorepo.

### Step 1: Create the Project Structure

```bash
mkdir -p ~/claude-hierarchy-lab/{packages/{web,api,infra},.claude/rules}
cd ~/claude-hierarchy-lab
git init
```

### Step 2: Create the User-Level File

```bash
mkdir -p ~/.claude
```

Add to `~/.claude/CLAUDE.md` (or create it if it does not exist):

```markdown
# My Preferences

- I prefer explicit error handling over silent failures
- Use conventional commits format for commit messages
```

### Step 3: Create the Project-Level File

Create `~/claude-hierarchy-lab/CLAUDE.md`:

```markdown
# Team Monorepo

Built with TypeScript (web), Python (api), and Terraform (infra).

## Commands

- `pnpm install` - install all dependencies
- `pnpm test` - run all package tests
- `pnpm lint` - lint all packages

## Standards

- All code must pass linting before commit
- All API changes require tests
- Infrastructure changes require plan output review
```

### Step 4: Create Directory-Level Files

Create `~/claude-hierarchy-lab/packages/web/CLAUDE.md`:

```markdown
# Web Package (React)

- Use functional components with hooks
- CSS Modules for styling (no inline styles)
- All components must have PropTypes or TypeScript interfaces
```

Create `~/claude-hierarchy-lab/packages/api/CLAUDE.md`:

```markdown
# API Package (FastAPI)

- Pydantic v2 models for all request/response schemas
- Async endpoints with SQLAlchemy 2.0
- Tests use pytest fixtures in conftest.py
```

Create `~/claude-hierarchy-lab/packages/infra/CLAUDE.md`:

```markdown
# Infrastructure Package (Terraform)

- Use modules for reusable components
- All resources must have Name and Environment tags
- Remote state stored in S3 with DynamoDB locking
```

### Step 5: Add Rules Files

Create `.claude/rules/testing.md`:

```markdown
# Testing Standards

- Unit test coverage must exceed 80%
- Integration tests required for all API endpoints
- Use snapshot testing for React component rendering
```

Create `.claude/rules/security.md`:

```markdown
# Security Requirements

- Never commit secrets, API keys, or tokens
- All user input must be validated and sanitized
- Use parameterized queries for all database access
```

### Step 6: Verify with /memory

Open Claude Code in the project directory and run `/memory`. Confirm that:

1. Your user-level `~/.claude/CLAUDE.md` appears
2. The project-level `CLAUDE.md` appears
3. The `.claude/rules/testing.md` and `.claude/rules/security.md` appear
4. The directory-level files (packages/web, packages/api, packages/infra) do NOT appear yet (they load on demand)

Now ask Claude to read a file in `packages/api/`. Run `/memory` again. The `packages/api/CLAUDE.md` should now appear in the loaded files list.

---

## Try With AI

**Exercise 1: Diagnose a Broken Hierarchy (Investigate + Fix)**

Create a new project directory and set up this deliberately broken configuration:

```bash
mkdir -p ~/broken-config-lab/.claude/rules
cd ~/broken-config-lab && git init
```

Create `~/.claude/CLAUDE.md` with:

```markdown
# My Preferences

- Use 4-space indentation everywhere
- Always add JSDoc comments to functions
```

Create `~/broken-config-lab/CLAUDE.md` with:

```markdown
# Team Standards

- Use 2-space indentation
- No JSDoc comments (use TypeScript types instead)
```

Start Claude Code and paste this prompt:

```
I set up CLAUDE.md files at both the user level and project level.
The user level says "use 4-space indentation" and the project level
says "use 2-space indentation." Which instruction will you follow
when working in this project, and why? Run /memory and show me
which files are loaded.
```

**What you're learning:** How precedence works in the hierarchy. Project-level instructions are more specific than user-level, so they take priority. This is exactly the kind of question the certification exam asks: when instructions conflict across levels, which one wins?

**Exercise 2: Build an @import Network (Compose + Verify)**

In your hierarchy lab project, create three standalone documents:

```bash
mkdir -p ~/claude-hierarchy-lab/docs
```

Create `~/claude-hierarchy-lab/docs/git-workflow.md`:

```markdown
# Git Workflow

- Create feature branches from main
- Squash merge all PRs
- Delete branches after merge
```

Create `~/claude-hierarchy-lab/docs/code-review.md`:

```markdown
# Code Review Checklist

- All PRs require at least one approval
- Check for security issues before approving
- Verify tests pass in CI
```

Now update your project CLAUDE.md to import them:

```markdown
# Team Monorepo

## Workflow

@docs/git-workflow.md
@docs/code-review.md

## Commands

- `pnpm install` - install all dependencies
- `pnpm test` - run all package tests
```

Start Claude Code and paste this prompt:

```
List every instruction file loaded in this session. For each file,
tell me whether it was loaded from a CLAUDE.md, an @import,
or a .claude/rules/ file. Then show me the git workflow instructions
to prove the imports expanded correctly.
```

**What you're learning:** How `@import` composes instructions from multiple files into a single context. In real projects, different team members own different standards documents. Imports let you reference them without copying content into CLAUDE.md, keeping a single source of truth.

**Exercise 3: Split and Migrate (Refactor + Validate)**

Create a deliberately oversized CLAUDE.md with 30+ lines covering multiple topics:

```markdown
# Oversized Project Instructions

## Build

- Run npm install before first use
- Run npm run build to compile TypeScript
- Run npm run dev for development server

## Testing

- Use Jest for unit tests
- Use Playwright for e2e tests
- Test files go next to source files with .test.ts extension
- Coverage threshold is 80%
- Run npm test to execute all tests

## Linting

- ESLint with Airbnb config
- Prettier for formatting
- Run npm run lint to check
- Pre-commit hooks enforce linting

## Security

- Never log sensitive data
- Validate all API inputs with zod
- Use helmet middleware for HTTP headers
- Rate limit all public endpoints

## Database

- PostgreSQL with Prisma ORM
- Migrations in prisma/migrations/
- Seed data in prisma/seed.ts
- Always use transactions for multi-step operations
```

Start Claude Code and paste this prompt:

```
This CLAUDE.md is too large and covers too many topics. Split it into
a brief main CLAUDE.md (under 15 lines) plus separate .claude/rules/
files for each topic section. Create the files, then run /memory to
verify everything loaded correctly. Show me the final directory structure.
```

After Claude creates the files, compare the `/memory` output before and after. Every instruction should still be loaded, but now organized into maintainable topic files.

**What you're learning:** The practical skill of migrating a monolithic CLAUDE.md into modular rules files. Anthropic recommends keeping CLAUDE.md under 200 lines; longer files consume more tokens and reduce adherence. This refactoring pattern is something you will do repeatedly as projects grow.

## Flashcards Study Aid

<Flashcards />
