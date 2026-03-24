---
slug: /General-Agents-Foundations/claude-code-teams-cicd/path-specific-rules-with-glob-patterns
sidebar_position: 2
title: "Path-Specific Rules with Glob Patterns"
description: "Create .claude/rules/ files with YAML frontmatter paths field and glob patterns to load conventions conditionally; compare path-scoped rules vs directory-level CLAUDE.md for cross-cutting standards"
keywords:
  [
    path-specific rules,
    glob patterns,
    claude rules,
    YAML frontmatter,
    conditional loading,
    token efficiency,
    cross-cutting conventions,
    test conventions,
    API conventions,
    configuration,
  ]
chapter: 18
lesson: 2
duration_minutes: 20

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (AI Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Creating path-scoped rules, designing glob patterns, comparing path rules vs directory CLAUDE.md, verifying conditional loading"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA
skills:
  - name: "Path-Scoped Rule Creation"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital-Content-Creation"
    measurable_at_this_level: "Student can create a .claude/rules/ file with YAML frontmatter paths field containing glob patterns and verify it loads only when Claude edits matching files"

  - name: "Glob Pattern Design"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can write glob patterns matching files by extension, directory, and combinations using **, *, and brace expansion"

  - name: "Configuration Strategy Selection"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can explain when to use path-specific rules vs directory-level CLAUDE.md and select the right approach for a given convention"

  - name: "Token-Efficient Configuration"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information-Data-Literacy"
    measurable_at_this_level: "Student can explain why path-scoped rules reduce token usage compared to always-loaded rules and why this matters for instruction adherence"

learning_objectives:
  - objective: "Create four .claude/rules/ files with YAML frontmatter paths fields containing glob patterns for different file types"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student creates rules files for tests, API endpoints, components, and infrastructure code, each with correct glob patterns"
  - objective: "Write glob patterns using **, *, and brace expansion to match files by extension, directory, and combination"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student matches test files across all directories, API files in a specific subtree, and multiple extensions with a single pattern"
  - objective: "Verify that path-scoped rules load conditionally by editing matching and non-matching files"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student demonstrates a rule loading when editing a matching file and absent when editing a non-matching file, using /memory to confirm"
  - objective: "Compare path-specific rules with directory-level CLAUDE.md and select the right approach for cross-cutting vs location-specific conventions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student correctly identifies that test conventions spanning multiple directories need path rules, while package-specific conventions belong in directory CLAUDE.md"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (YAML frontmatter paths field, glob pattern syntax, conditional loading behavior, path rules vs directory CLAUDE.md tradeoff); within B1 limit of 10"

differentiation:
  extension_for_advanced: "Create rules with multiple overlapping glob patterns and test precedence; use symlinks to share rules across projects; build a rule that uses brace expansion to match both test and story files"
  remedial_for_struggling: "Start with a single path-scoped rule for test files (**/*.test.ts); verify it loads before creating additional rules"

# Generation metadata
generated_by: "content-implementer v2.0.0"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
version: "1.0.0"

prerequisites:
  - "Lesson 1: The CLAUDE.md Configuration Hierarchy"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 1
  session_title: "Path-Specific Rules with Glob Patterns"
  key_points:
    - "Path-scoped rules use YAML frontmatter with a paths field containing an array of glob patterns; rules without paths load unconditionally at session start"
    - "Path-scoped rules trigger when Claude reads files matching the pattern, not on every tool use; this is how conditional loading works"
    - "The key advantage of path rules over directory-level CLAUDE.md: conventions that span multiple directories (test files, config files) can be captured in a single rule file"
    - "Token efficiency: path-scoped rules only enter the context window when relevant, keeping context cleaner for unrelated work"
  misconceptions:
    - "Students think path-scoped rules load when they open the rule file itself; they load when Claude reads files matching the patterns"
    - "Students assume glob patterns are regex; they use simpler syntax (** for directory traversal, * for filename matching, {} for alternatives)"
    - "Students confuse .claude/rules/ with .claude/commands/ or .claude/skills/; rules are always-on or path-triggered instructions, not invocable actions"
    - "Students think path-scoped rules replace directory CLAUDE.md entirely; both serve different purposes and can coexist"
  discussion_prompts:
    - "Your team has test files spread across 15 directories. Would you put a CLAUDE.md in each directory or create one path-scoped rule? What are the maintenance implications?"
    - "When would you choose a directory-level CLAUDE.md over a path-scoped rule, even if the convention only applies to one file type?"
  teaching_tips:
    - "The glob pattern table is the reference students will return to; spend time on ** (recursive directory match) vs * (single level) since this distinction appears on the exam"
    - "Have students create a rule with a narrow pattern first (specific file), then broaden it (directory, then recursive) to build intuition for glob matching"
    - "The exam's Sample Question 6 directly tests path-specific rules. Walk through it: when test conventions apply across all directories, path rules win over directory CLAUDE.md"
  assessment_quick_check:
    - "What YAML frontmatter field makes a .claude/rules/ file load conditionally?"
    - "Write a glob pattern that matches all Python files in any subdirectory of src/"
    - "When does a path-scoped rule enter the context window: at session start, or when Claude reads a matching file?"
---

# Path-Specific Rules with Glob Patterns

Your team's CLAUDE.md tells Claude how to write code. The problem: it tells Claude _everything_ for _every_ file. When you are editing a Terraform module, Claude's context window holds React component rules, Python testing conventions, and API design standards that are irrelevant to the current task. Every irrelevant instruction consumes tokens and dilutes the instructions that actually matter.

In Lesson 1, you learned that directory-level CLAUDE.md files scope instructions to specific packages. That works when conventions are location-specific: React rules in `packages/web/`, Python rules in `packages/api/`. But some conventions cut across directories. Test files live everywhere: `packages/web/tests/`, `packages/api/tests/`, `packages/infra/tests/`. Configuration files appear at every level. You would need a CLAUDE.md in every directory to cover them all.

Path-specific rules solve this. A single rule file with a glob pattern like `**/*.test.tsx` applies to every test file in the repository, regardless of where it lives. The rule loads only when Claude reads a matching file, keeping the context clean when Claude works on something else.

---

## Anatomy of a Path-Scoped Rule

A path-scoped rule is a markdown file in `.claude/rules/` with YAML frontmatter containing a `paths` field. The `paths` field holds an array of glob patterns. When Claude reads a file matching any pattern, the rule loads into context.

```markdown
---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
  - "**/*.spec.ts"
---

# Test Conventions

- Use `describe` blocks to group related tests
- Each test must have a single, clear assertion
- Use `beforeEach` for shared setup, never duplicate across tests
- Mock external services; never make real HTTP calls in unit tests
- Name test files to match source: `UserService.ts` -> `UserService.test.ts`
```

**What happens**: when Claude reads or edits a file like `src/services/UserService.test.ts`, this rule loads into context. When Claude works on `src/services/UserService.ts` (no `.test.` in the name), this rule stays out of context.

Rules _without_ a `paths` field load unconditionally at session start, exactly like project-level CLAUDE.md instructions:

```markdown
# Code Style (no frontmatter = always loaded)

- Use 2-space indentation
- Maximum line length: 100 characters
- Trailing commas in multiline structures
```

---

## Glob Pattern Syntax

Glob patterns are simpler than regular expressions. You need three constructs for nearly every pattern:

| Construct | Meaning                                         | Example                                             |
| :-------- | :---------------------------------------------- | :-------------------------------------------------- |
| `*`       | Matches any characters within a single filename | `*.ts` matches `app.ts`, `index.ts`                 |
| `**`      | Matches any number of directories (recursive)   | `**/utils/` matches `src/utils/`, `lib/core/utils/` |
| `{}`      | Matches any of the comma-separated alternatives | `*.{ts,tsx}` matches `app.ts`, `Button.tsx`         |

### Common Pattern Library

Here are the patterns you will use most often:

| Pattern                               | What It Matches                                         |
| :------------------------------------ | :------------------------------------------------------ |
| `**/*.ts`                             | All TypeScript files in any directory                   |
| `**/*.test.tsx`                       | All React test files in any directory                   |
| `src/**/*`                            | All files under the `src/` directory                    |
| `src/api/**/*.ts`                     | TypeScript files in the API subtree                     |
| `*.md`                                | Markdown files in the project root only                 |
| `**/*.md`                             | Markdown files in any directory                         |
| `src/components/*.tsx`                | React components in one specific directory (not nested) |
| `**/*.{ts,tsx}`                       | All TypeScript and TSX files everywhere                 |
| `**/migrations/**/*`                  | All files inside any `migrations/` directory            |
| `**/{Dockerfile,docker-compose*.yml}` | Docker config files anywhere                            |

### Pattern Gotchas

**`*.ts` vs `**/_.ts`**: The single `_`does not cross directory boundaries.`_.ts`matches`app.ts`in the project root.`\*\*/_.ts` matches TypeScript files in every directory. This is the most common mistake.

**Leading paths matter**: `src/**/*` matches files under `src/` but not `lib/src/`. If you want to match a directory name regardless of where it appears, use `**/src/**/*`.

**Multiple patterns combine with OR logic**: when you list multiple patterns in the `paths` array, a file matching _any_ of them triggers the rule.

---

## Building Four Rule Files

This is your lesson deliverable. You will create four path-scoped rule files, each targeting a different concern that cuts across directories.

### Rule 1: Test Conventions

Tests live in every package. One rule covers them all.

Create `.claude/rules/testing.md`:

```markdown
---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
  - "**/*.spec.ts"
  - "**/*.spec.tsx"
---

# Testing Conventions

- Group related tests with `describe` blocks
- One assertion per test for clear failure messages
- Use `beforeEach` for shared setup
- Mock external HTTP calls; never hit real endpoints in unit tests
- Colocate test files next to source: `Button.tsx` -> `Button.test.tsx`
- Name test descriptions as sentences: "should return 404 when user not found"
```

### Rule 2: API Endpoint Conventions

API routes follow different conventions than UI code. Scope them to the API directory.

Create `.claude/rules/api-conventions.md`:

```markdown
---
paths:
  - "src/api/**/*"
  - "packages/api/**/*"
---

# API Development Rules

- All endpoints must validate input with zod schemas
- Use the standard error response format (RFC 7807 Problem Details)
- Include OpenAPI documentation comments on every handler
- Return appropriate HTTP status codes (201 for creation, 204 for deletion)
- Log request IDs for traceability; never log request bodies
```

### Rule 3: React Component Conventions

UI components have their own patterns. Scope to component and page directories.

Create `.claude/rules/react-components.md`:

```markdown
---
paths:
  - "**/*.tsx"
  - "**/*.jsx"
---

# React Component Rules

- Use functional components with hooks (no class components)
- Props interfaces must be exported and named `{ComponentName}Props`
- Use CSS Modules for styling; no inline styles except dynamic values
- Components over 100 lines should be split into smaller components
- Use `React.memo` only when profiling shows a performance issue
```

### Rule 4: Infrastructure Conventions

Terraform and Docker files need their own rules.

Create `.claude/rules/infrastructure.md`:

```markdown
---
paths:
  - "**/*.tf"
  - "**/*.tfvars"
  - "**/Dockerfile"
  - "**/docker-compose*.yml"
---

# Infrastructure Rules

- All Terraform resources must have `Name` and `Environment` tags
- Use Terraform modules for any resource group used more than once
- Dockerfiles must pin base image versions (no `latest` tag)
- Docker Compose services must include health checks
- Never hardcode secrets; use environment variables or secret managers
```

---

## Verifying Conditional Loading

Creating the files is half the work. You need to verify they load correctly, and _only_ when expected.

### Test 1: Confirm a Rule Loads for Matching Files

1. Start Claude Code in your project directory
2. Ask Claude to read a test file: "Read `src/services/UserService.test.ts`"
3. Run `/memory`
4. Verify `.claude/rules/testing.md` appears in the loaded files list

### Test 2: Confirm a Rule Does NOT Load for Non-Matching Files

1. In the same session, run `/memory` before Claude reads any `.tf` files
2. Verify `.claude/rules/infrastructure.md` does NOT appear
3. Ask Claude to read a Terraform file: "Read `packages/infra/main.tf`"
4. Run `/memory` again
5. Now `.claude/rules/infrastructure.md` should appear

### Test 3: Verify Multiple Patterns

1. Ask Claude to read a `.tsx` component file
2. Run `/memory`
3. Both `.claude/rules/react-components.md` (matches `**/*.tsx`) and `.claude/rules/testing.md` (if the file also matches `**/*.test.tsx`) should load as appropriate

This step-by-step verification builds confidence that your rules are scoped correctly. In a team setting, you would run these checks after any change to rule files.

---

## Path Rules vs Directory CLAUDE.md: When to Use Each

Both path-specific rules and directory-level CLAUDE.md files scope instructions. They solve different problems.

| Scenario                                       | Use Path-Specific Rule                                | Use Directory CLAUDE.md                      |
| :--------------------------------------------- | :---------------------------------------------------- | :------------------------------------------- |
| Test conventions across all packages           | `**/*.test.{ts,tsx}`                                  | Requires a CLAUDE.md in every test directory |
| React-only conventions in a monorepo           | `**/*.{tsx,jsx}`                                      | Only if all React code is in one directory   |
| Package-specific build commands                | Not a good fit (build commands are location-specific) | `packages/web/CLAUDE.md`                     |
| Database migration rules                       | `**/migrations/**/*`                                  | Only if all migrations are in one directory  |
| Python conventions across the whole repo       | `**/*.py`                                             | Requires CLAUDE.md in every Python directory |
| Infrastructure-specific naming for one package | Could work, but overly broad                          | `packages/infra/CLAUDE.md`                   |

**The decision rule**: if the convention follows a _file type_ regardless of location, use a path-scoped rule. If the convention follows a _directory_ (a specific package, module, or workspace), use a directory-level CLAUDE.md.

### Combining Both Approaches

The two approaches work together. A real project might have:

```
my-project/
├── .claude/
│   ├── CLAUDE.md                    # Project overview, build commands
│   └── rules/
│       ├── code-style.md            # Always loaded (no paths)
│       ├── testing.md               # Loads for test files
│       ├── api-conventions.md       # Loads for API files
│       └── react-components.md      # Loads for TSX/JSX files
├── packages/
│   ├── web/
│   │   └── CLAUDE.md                # Web-specific build, deploy instructions
│   ├── api/
│   │   └── CLAUDE.md                # API-specific database, ORM instructions
│   └── infra/
│       └── CLAUDE.md                # Terraform state, provider instructions
```

The project CLAUDE.md and `code-style.md` rule load at session start. The path-scoped rules load when Claude touches matching files. The directory CLAUDE.md files load when Claude works in that package. Every instruction enters context only when it is relevant.

### Token Efficiency

Why does conditional loading matter? CLAUDE.md content consumes tokens in the context window. Every token spent on irrelevant instructions is a token unavailable for your actual work. When context gets crowded with irrelevant rules, Claude may struggle to follow the instructions that matter for the current task.

Path-scoped rules keep context lean. If you have 500 lines of rules across all your `.claude/rules/` files but only 50 lines match the files Claude is currently editing, only those 50 lines enter context. The other 450 lines stay on disk until they are needed.

:::info Exam Connection
Sample Question 6 directly tests when to use `.claude/rules/` with glob patterns vs directory-level CLAUDE.md. The exam scenario describes test conventions that must apply across all directories in a monorepo. The correct answer is path-specific rules with a glob pattern like `**/*.test.ts`, because directory-level CLAUDE.md files would require a copy in every directory and create a maintenance burden. Remember: path rules for cross-cutting conventions by file type, directory CLAUDE.md for location-specific conventions.
:::

---

## Sharing Rules Across Projects with Symlinks

If your team maintains multiple repositories with similar conventions, you can share rule files using symlinks. The `.claude/rules/` directory supports symlinks; they are resolved and loaded normally.

```bash
# Create a shared rules directory on your machine
mkdir -p ~/shared-claude-rules

# Create a shared security rule
cat > ~/shared-claude-rules/security.md << 'EOF'
# Security Standards (Shared)

- Never commit secrets, API keys, or tokens
- Validate all user input at system boundaries
- Use parameterized queries for database access
- Apply rate limiting to all public endpoints
EOF

# Symlink into each project
ln -s ~/shared-claude-rules/security.md my-project-a/.claude/rules/security.md
ln -s ~/shared-claude-rules/security.md my-project-b/.claude/rules/security.md
```

Symlinked rules can include YAML frontmatter with paths, making shared rules path-scoped in every project they are linked into.

---

## Try With AI

**Exercise 1: Pattern Matching Challenge (Predict + Verify)**

Create a `.claude/rules/` file with this frontmatter:

```markdown
---
paths:
  - "src/**/*.{ts,tsx}"
  - "lib/**/*.ts"
---

# TypeScript Rules

- Use strict mode
- No any types
```

Start Claude Code and paste this prompt:

```
I have a path-scoped rule that matches "src/**/*.{ts,tsx}" and "lib/**/*.ts".
For each of these files, predict whether the rule will load:

1. src/index.ts
2. src/components/Button.tsx
3. lib/utils/format.ts
4. test/helpers.ts
5. src/styles/main.css
6. lib/core/types.tsx

After predicting, read one file that should match and one that should
not match, then run /memory to verify the rule loaded (or didn't).
```

**What you're learning:** How to read glob patterns and predict which files they match. The key distinctions: `src/**/*.{ts,tsx}` matches `.ts` and `.tsx` in any subdirectory of `src/`, but not `.css` files. `lib/**/*.ts` matches `.ts` but not `.tsx` in `lib/`. Pattern 4 (`test/helpers.ts`) is the trickiest: it matches neither pattern because `test/` is not `src/` or `lib/`. This kind of pattern reading is exactly what the exam tests.

**Exercise 2: Design Rules for a Real Project (Analyze + Create)**

Start Claude Code and paste this prompt:

```
I have a monorepo with this structure:

my-app/
├── apps/
│   ├── web/          (React frontend)
│   ├── mobile/       (React Native)
│   └── admin/        (React admin panel)
├── packages/
│   ├── shared-ui/    (shared component library)
│   ├── api-client/   (generated API types)
│   └── config/       (shared ESLint, TSConfig)
├── services/
│   ├── auth/         (Go auth service)
│   └── payments/     (Go payments service)
└── terraform/
    ├── staging/
    └── production/

Design four .claude/rules/ files with path patterns for:
1. Test conventions (applies to all test files in JS/TS and Go)
2. React component conventions (applies to all three React apps AND shared-ui)
3. Go service conventions (applies to both Go services)
4. Terraform conventions (applies to both staging and production)

For each rule, show me the YAML frontmatter with paths and explain
why you chose those specific patterns over directory-level CLAUDE.md files.
```

Review Claude's answer. Check whether the glob patterns actually match the intended files and nothing else. Pay attention to whether Claude correctly uses `**` for recursive matching vs `*` for single-level matching.

**What you're learning:** The design skill of choosing glob patterns for a real monorepo. The hardest part is not the syntax; it is deciding the right level of specificity. A pattern like `**/*.go` matches all Go files but might catch generated files you want to exclude. A pattern like `services/auth/**/*.go` is precise but means adding a new service requires updating the rule. This tradeoff between coverage and precision is what you face in real projects.

**Exercise 3: Compare Approaches Side by Side (Evaluate + Decide)**

Start Claude Code and paste this prompt:

```
I need to enforce these three conventions in my monorepo:

Convention A: "All database queries must use parameterized statements"
  - Applies to: Python files in services/api/ and services/worker/

Convention B: "All test files must use the shared test fixtures from conftest.py"
  - Applies to: test files in every package (15+ directories)

Convention C: "The admin panel must never import from the payments module"
  - Applies to: only files in apps/admin/

For each convention, recommend whether I should use:
(a) A path-specific rule in .claude/rules/
(b) A directory-level CLAUDE.md

Explain the tradeoff for each choice. Then create the files
(whichever approach you recommend) with the correct content.
```

After Claude creates the files, evaluate the recommendations. Convention A could go either way (few specific directories). Convention B clearly benefits from path rules (many directories). Convention C is location-specific, making directory CLAUDE.md the natural fit. Check whether Claude's reasoning matches yours.

**What you're learning:** The decision framework for choosing between path rules and directory CLAUDE.md. There is no single correct answer for every case; the tradeoff depends on how many directories the convention spans, how often those directories change, and whether the convention follows file types or locations. Developing this judgment is more valuable than memorizing syntax.

## Flashcards Study Aid

<Flashcards />
