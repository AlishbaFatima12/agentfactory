---
name: companion-repo
description: >-
  Create and publish a companion GitHub repository for a book chapter.
  Use when: (1) a chapter needs downloadable exercise data, SKILL.md files,
  workflow recipes, or reference materials, (2) user says "create companion repo",
  "make the repo", "set up downloads", or references /companion-repo.
  Supports two modes: (A) standalone chapter repo under panaversity org,
  (B) plugin inside a marketplace monorepo (e.g., agentfactory-business-plugins).
  Produces auto-built downloadable zips, a learner-friendly README, and injects
  clickable links into all lesson exercise Requirements lines.
user-invocable: true
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# Companion Repo Skill

Create, populate, and publish a companion GitHub repository for a chapter, then link it seamlessly into lesson files so learners can download exactly what they need.

## When to Use

- A chapter has exercises requiring data files (trial balances, datasets, templates)
- A chapter produces SKILL.md agent files that learners should clone/download
- A chapter has workflow recipes, reference materials, or plugin metadata
- Pattern: any chapter with 3+ exercises needing external files

## Mode Selection

**Mode A: Standalone Repo** (default, e.g., Ch30 `ca-cpa-practice-agents`)

- One repo per chapter under `panaversity/` org
- Plugin metadata optional
- Simple: clone/download and use

**Mode B: Marketplace Plugin** (e.g., Ch31 `agentfactory-business-plugins/islamic-finance/`)

- Plugin lives in a subfolder of a shared marketplace monorepo
- Requires `.claude-plugin/plugin.json`, `marketplace.json` at repo root
- Install via: `claude plugin install <plugin>@<marketplace>`
- Skills/commands/hooks auto-discovered by Claude Code
- Per-plugin CI/CD workflows with namespaced tags: `{plugin}-v{semver}`

**When to use Mode B:**

- Chapter ships 5+ skills that form a coherent agent capability
- Skills need to auto-activate (not just be reference material)
- Chapter includes commands (slash-command workflows)
- Chapter benefits from hooks (auto-validation, session startup)
- Future chapters will share the same marketplace repo

**Reference docs for Mode B:**

- Plugin anatomy: https://code.claude.com/docs/en/plugins-reference
- SKILL.md spec: https://agentskills.io/specification
- Scripts in skills: https://agentskills.io/skill-creation/using-scripts
- Eval patterns: https://developers.openai.com/blog/eval-skills/

## Inputs Required

Before invoking, gather:

1. **Chapter number and title** — e.g., "Chapter 30: AI Transformation of CA/CPA Practice Areas"
2. **Mode** — A (standalone repo) or B (marketplace plugin)
3. **Repo name** — Mode A: short, kebab-case (e.g., `ca-cpa-domain-agents`). Mode B: marketplace repo + plugin subfolder (e.g., `agentfactory-business-plugins/islamic-finance`)
4. **Content directories** — which of these apply:
   - `skills/` — SKILL.md agent files (Mode B: must follow Agent Skills spec)
   - `commands/` — slash-command workflows (Mode B only)
   - `hooks/` — automation hooks (Mode B only)
   - `exercises/` — data files for practice labs
   - `workflow-recipes/` — scheduled task specifications
   - `references/` — quick-reference lookup materials
   - `.claude-plugin/` — Claude plugin manifest (Mode B required)
5. **Jurisdiction defaults** — primary jurisdiction for all examples (e.g., Pakistan/PKR)
6. **Lesson directory path** — where the chapter's .md lesson files live
7. **Content source** — where the scaffold content already exists (e.g., `specs/ch-31/`)

## Execution Steps

### Mode Check

If Mode B (marketplace plugin), skip to **Phase 1B** below. Otherwise continue with Phase 1A.

### Phase 1A: Create Standalone Repo (Mode A)

```bash
# 1. Verify GitHub auth and org access
gh auth status
gh org list | grep panaversity

# 2. Create public repo
gh repo create panaversity/{repo-name} \
  --public \
  --description "{Chapter N} companion: {brief description}" \
  --license Apache-2.0

# 3. Clone locally
cd /tmp && rm -rf {repo-name}
gh repo clone panaversity/{repo-name}
```

### Phase 1B: Add Plugin to Marketplace Repo (Mode B)

```bash
# 1. Verify GitHub auth
gh auth status
gh org list | grep panaversity

# 2. Clone or update the marketplace repo
MARKETPLACE_REPO="agentfactory-business-plugins"  # or whatever the marketplace is
cd /tmp && rm -rf ${MARKETPLACE_REPO}
gh repo clone panaversity/${MARKETPLACE_REPO} || {
  # Create if doesn't exist
  gh repo create panaversity/${MARKETPLACE_REPO} \
    --public \
    --description "Business domain agent plugins from The AI Agent Factory" \
    --license Apache-2.0
  gh repo clone panaversity/${MARKETPLACE_REPO}
}

# 3. Create plugin subfolder
PLUGIN_NAME="{plugin-name}"  # e.g., "islamic-finance"
mkdir -p /tmp/${MARKETPLACE_REPO}/${PLUGIN_NAME}

# 4. Create/update marketplace.json at repo root if needed
```

**marketplace.json template:**

```json
{
  "name": "{marketplace-name}",
  "description": "Business domain agent plugins from The AI Agent Factory — Part 3",
  "plugins": [
    {
      "name": "{plugin-name}",
      "description": "{plugin description}",
      "source": "./{plugin-name}",
      "version": "1.0.0"
    }
  ]
}
```

**Plugin manifest (`.claude-plugin/plugin.json`):**

```json
{
  "name": "{plugin-name}",
  "version": "1.0.0",
  "description": "{detailed description with activation keywords}",
  "author": {
    "name": "Panaversity",
    "url": "https://github.com/panaversity"
  },
  "homepage": "https://agentfactory.panaversity.org",
  "repository": "https://github.com/panaversity/{marketplace-repo}",
  "license": "Apache-2.0",
  "keywords": ["{domain}", "{keywords}"]
}
```

**Skill files MUST follow Agent Skills spec (https://agentskills.io/specification):**

- Each skill in `skills/{skill-name}/SKILL.md`
- Required frontmatter: `name` (must match directory, lowercase+hyphens) + `description` (activation keywords)
- Optional: `references/`, `scripts/`, `assets/` subdirectories
- Keep SKILL.md under 500 lines. Move detailed content to `references/`

**Commands** go in `commands/{command-name}.md` (slash-command markdown files).

**Hooks** go in `hooks/hooks.json` (see https://code.claude.com/docs/en/plugins-reference).

**Per-plugin CI/CD workflow** (`.github/workflows/{plugin-name}-release.yml`):

- Trigger on tag `{plugin-name}-v*`
- Validate plugin structure (plugin.json, SKILL.md frontmatter, hooks.json syntax)
- Build zips from plugin subdirectory
- Create GitHub Release with namespaced tag

Continue to Phase 2 (content population) — same for both modes, just adjust the target directory.

### Phase 2: Populate Content

```bash
# Copy scaffold content (if exists)
cp -R {content-source}/* /tmp/{repo-name}/
cp -R {content-source}/.claude-plugin /tmp/{repo-name}/ 2>/dev/null || true

# Remove auto-generated LICENSE (we have our own)
rm -f /tmp/{repo-name}/LICENSE
```

Then write/verify these files:

#### LICENSE (Apache-2.0)

Full Apache-2.0 text with `Copyright {year} Panaversity` at the bottom.

#### README.md (Learner-Friendly)

Must include ALL of these sections in this order:

````markdown
# {Repo Title}

Companion repository for **Chapter {N}: {Title}** from [The AI Agent Factory](https://learn.panaversity.org) by Panaversity.

{One-sentence description.}

---

## Quick Start

### Option A: Download ZIP (Recommended for learners)

1. Go to the [Releases page](https://github.com/panaversity/{repo-name}/releases/latest)
2. Download the zip you need:

| Download                      | What's Inside  | Use With            |
| ----------------------------- | -------------- | ------------------- |
| **`{repo-name}-full.zip`**    | Everything     | {capstone exercise} |
| `{repo-name}-skills-only.zip` | SKILL.md files | {relevant lessons}  |
| ...                           | ...            | ...                 |

3. Unzip into your project:

```bash
unzip {repo-name}-full.zip -d my-project/
```
````

### Option B: Clone the repo

```bash
git clone https://github.com/panaversity/{repo-name}.git
```

### Option C: Claude Plugin Marketplace

```bash
claude plugin marketplace add panaversity/{repo-name}
```

---

## What's in This Repo

{Directory tree with annotations}

---

## How Each Folder Maps to Chapter {N} Lessons

| Folder | Lessons | What You Do |
| ------ | ------- | ----------- |
| ...    | ...     | ...         |

---

## Customizing for Your Jurisdiction

| Variable | {Primary} Default | Your Value      |
| -------- | ----------------- | --------------- |
| Currency | {currency}        | _your currency_ |
| ...      | ...               | ...             |

---

## Prerequisites

{Previous chapters needed}

## License

Apache-2.0.

````

**README quality bar**: A CA/CPA professional who has never used GitHub should be able to go from "I opened this page" to "I have the files I need" in under 2 minutes using Option A.

#### .github/workflows/release-zips.yml

```yaml
name: Build Downloadable Zips

on:
  push:
    tags:
      - 'v*'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-zips:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Create download zips
        run: |
          mkdir -p dist

          # Full repo zip
          zip -r dist/{repo-name}-full.zip \
            {directories} README.md LICENSE \
            -x '*.git*'

          # One zip per major directory
          # Skills only
          zip -r dist/{repo-name}-skills-only.zip skills/ -x '*.git*'
          # Exercises only
          zip -r dist/{repo-name}-exercise-data.zip exercises/ -x '*.git*' -x '*/.gitkeep'
          # Workflow recipes
          zip -r dist/{repo-name}-workflow-recipes.zip workflow-recipes/ -x '*.git*'
          # References
          zip -r dist/{repo-name}-references.zip references/ -x '*.git*'

          ls -lh dist/

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          files: dist/*.zip
          body: |
            ## Chapter {N} Companion Materials

            | File | Contents | For |
            |------|----------|-----|
            | `{repo-name}-full.zip` | Everything | Complete setup |
            {one row per zip}

            ### Quick Start
            1. Download `{repo-name}-full.zip`
            2. Unzip into your project
            3. Follow {capstone exercise reference}
````

**Zip naming convention**: `{repo-name}-{category}.zip` — always lowercase, hyphenated.

**Only create zips for directories that exist.** Don't zip empty directories.

### Phase 3: Commit, Push, Release

```bash
cd /tmp/{repo-name}

# Stage and commit
git add -A
git commit -m "feat: Ch {N} companion repo — {summary}

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

# Push
git push origin main

# Create release tag (triggers zip workflow)
git tag v1.0.0
git push origin v1.0.0

# Wait for workflow and verify
sleep 30
gh run list --repo panaversity/{repo-name} --limit 1
gh release view v1.0.0 --repo panaversity/{repo-name}
```

### Phase 4: Inject Links into Lessons

This is the critical learner-experience step. **Every lesson with an exercise must link to the companion repo.**

```bash
# 1. Find all exercise Requirements lines
grep -rn "Requirements:" {lesson-directory}/*.md

# 2. For each, inject a clickable link
```

**Link injection rules:**

- **If the exercise needs data files**: Add to the Requirements line:
  `Download {specific file description} from the [companion repository](https://github.com/panaversity/{repo-name}/releases/latest) — use \`{zip-name}.zip\` and find \`{path/to/file}\`.`

- **If the exercise needs SKILL.md references**: Add:
  `For reference implementations, see the [companion repository](https://github.com/panaversity/{repo-name}) under \`skills/\`.`

- **If it's the capstone exercise**: Add to the "What you need" line:
  `Download the full companion materials from the [companion repository](https://github.com/panaversity/{repo-name}/releases/latest) — use \`{repo-name}-full.zip\` for everything in one package.`

- **Lessons with no exercises** (overview, theory): No link needed.

**Verification after injection:**

```bash
# Every lesson with exercises should have at least one clickable link
for f in {lesson-directory}/[0-9]*.md; do
  name=$(basename "$f")
  links=$(grep -c "github.com/panaversity/{repo-name}" "$f" || true)
  exercises=$(grep -c "Requirements:" "$f" || true)
  echo "$links links | $exercises exercises | $name"
done
```

Any lesson with `exercises > 0` and `links == 0` is a failure. Fix it.

### Phase 5: Verify

Checklist before marking complete:

```
□ Repo exists at https://github.com/panaversity/{repo-name}
□ README has Quick Start with 3 options (zip/clone/marketplace)
□ README has "How Each Folder Maps to Lessons" table
□ README has "Customizing for Your Jurisdiction" table
□ Release v1.0.0 exists with all zip assets
□ All zips downloadable (check asset count matches expectation)
□ Every lesson with exercises has clickable companion repo link
□ Links point to /releases/latest (not a hardcoded version)
□ No bare repo names without clickable URLs in lesson files
```

## Quality Bar

**The learner test**: A domain professional (CA/CPA, lawyer, doctor) who has never used GitHub before should be able to:

1. Read the lesson's Requirements line
2. Click the link
3. Download the right zip
4. Find the right file inside it
5. Start the exercise

If any step requires GitHub knowledge beyond "click download", the link text is insufficient. Fix it.

## Anti-Patterns

- **Bare repo names**: `panaversity/ca-cpa-domain-agents` without a URL — a non-developer won't know what to do with this
- **Links to repo root**: Point to `/releases/latest` for downloads, repo root only for browsing/cloning
- **"See the companion repo"**: Vague. Specify which zip and which file path inside it
- **Missing jurisdiction table**: Every companion repo with jurisdiction-specific content must have the customization table
- **Hardcoded version in links**: Use `/releases/latest` not `/releases/tag/v1.0.0`
