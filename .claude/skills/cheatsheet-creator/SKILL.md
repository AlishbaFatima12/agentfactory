---
name: cheatsheet-creator
description: Create beautiful, comprehensive React (.jsx) cheatsheet artifacts on any topic. Use this skill whenever the user asks for a "cheatsheet", "cheat sheet", "reference card", "quick reference", "workflow guide", "one-pager", or any visual summary of a topic. Also trigger when the user says "make a cheatsheet like...", "create a reference for...", "summarize X as a visual guide", or "I need a printable guide for...". This skill produces polished, multi-page interactive React components with a warm editorial design system. Always use this skill for any cheatsheet or visual reference request — even partial ones like "give me a quick ref for Git commands".
allowed_tools: Read, Write, Bash, WebSearch, WebFetch, create_file, present_files
---

# Cheatsheet Creator Skill

You create beautiful, information-dense, interactive React (.jsx) cheatsheet artifacts. Every cheatsheet follows a strict design system for visual consistency and professional quality.

## When This Skill Activates

Any request for a cheatsheet, reference card, quick-reference, workflow guide, or visual topic summary.

## Workflow

### Step 1 — Research the Topic

Before writing any code, understand the topic deeply:

1. If the topic is a technology/tool, web-search for the latest features, commands, and best practices to ensure the cheatsheet is current and complete.
2. **Verify specific syntax against official docs.** Do NOT rely on memory for CLI flags, API syntax, configuration directives, or version-specific features. If you haven't confirmed a command or syntax via web search, search before including it.
3. **Check for deprecations.** Features that were deprecated or sunset in the last 2 years should be flagged or omitted. Web-search "[feature] deprecated" for any feature you're unsure about.
4. Identify the **core workflows** a professional does with this topic. Aim for 12–16 focused sections across 1–2 pages. Prioritize the 80/20 — the 20% of features that cover 80% of daily use.
5. Group sections into logical pages if content exceeds 12 sections.

**Accuracy anti-hallucination rules (CRITICAL — accuracy is the #1 quality differentiator):**

These are the specific patterns that cause accuracy failures. Follow every rule:

- **Never invent functions, flags, or features.** Before including any function name, CLI flag, or API method, web-search for it on the official docs site. If you can't find it, DO NOT include it. The most dangerous error is a plausible-sounding function that doesn't exist (e.g., writing `jq` has `ascii` when it actually has `explode`/`implode`, or a CSS property that doesn't exist).
- **Never fabricate statistics or percentages.** Do not write specific numbers like "80% of the time" or "93% of communication is body language" unless you've verified the exact figure via web search. If a source gives a different number, use the source's number. If you can't find the exact stat, describe it qualitatively instead (e.g., "most of the time" rather than "80%").
- **Verify default values and ranges.** Defaults and acceptable ranges are extremely hallucination-prone. Always web-search for the exact default value (e.g., `jq flatten` flattens ALL levels by default, not one level; `ffmpeg atempo` range is 0.5–2.0, not 0.5–100). If you write "default is X" or "range is X–Y", you must have confirmed it.
- **Verify filter/transform behavior.** For any tool that processes data (jq, sed, awk, ffmpeg filters, regex engines), web-search the exact behavior of each operation. Describe what it actually does, not what the name suggests.
- **Cross-dialect claims need per-dialect verification.** When comparing dialects (SQL, regex engines, etc.), verify each claim for each dialect separately. Don't assume behavior is the same across MySQL/PostgreSQL/SQLite or across JS/Python/PCRE regex engines.
- **Non-technical topics need source verification too.** For psychology, negotiation, cooking, parenting — verify claims against the original source (book, medical guideline, established reference). Don't paraphrase from memory in ways that change the specifics.

### Curation Philosophy (CRITICAL — this determines whether the output is useful or not)

The #1 failure mode is producing a **reference dump** — listing every feature, flag, and option. Reference dumps score high on raw completeness but are unusable. A great cheatsheet is a **workflow guide** that teaches professionals HOW to work, not just WHAT exists.

**Workflow-oriented vs Reference-oriented:**

| Reference Dump (BAD)                          | Workflow Guide (GOOD)                                      |
| --------------------------------------------- | ---------------------------------------------------------- |
| "Installation" listing 4 install methods      | "Quick Start" showing THE recommended path + first command |
| "All Slash Commands" listing every command    | "Daily Workflow" showing the 5 commands you use constantly |
| "Configuration Options" listing every setting | "Project Setup" showing the config that matters on day 1   |
| 24 sections covering every feature            | 12-16 sections covering the workflows that matter          |
| Organized by feature category                 | Organized by task/workflow                                 |

**The curation test:** For every section ask: "Would a working professional look at this section at their desk?" If the answer is "only during initial setup" or "only for rare edge cases" — cut it or fold it into a broader section.

**What to leave out:**

- Rarely-used features that users would Google anyway
- Exhaustive option lists (show the 3-5 most common, not all 20)
- Features that are self-explanatory from the UI
- Deep configuration that only matters for advanced users (unless the prompt asks for it)

**What to include instead:**

- Decision guides: "When to use X vs Y"
- Workflow patterns: "Daily workflow", "Project setup flow", "Debugging flow"
- Mental models: Architecture diagrams, layer explanations
- Best practices and anti-patterns
- The 80/20 — the 20% of features that cover 80% of use cases

### Step 2 — Plan the Sections

Write a section plan before coding. **Think in workflows, not features.**

**Planning process:**

1. Identify the 3-5 core workflows a professional does with this topic (e.g., for a CLI tool: setup, daily use, debugging, team collaboration, advanced patterns)
2. For each workflow, identify what the professional needs to know
3. Group into sections of 4-8 items each
4. Add 1-2 cross-cutting sections (decision guides, best practices, architecture)
5. Target **12-16 sections** on 1-2 pages. 12 focused sections > 24 scattered ones.

Each section needs:

- A number (1, 2, 3...)
- A short punchy title **that implies action** (e.g., "Daily Workflow" not "Commands", "Project Setup" not "Configuration")
- The key content (bullets, code blocks, tables, tags, key-value pairs)
- Estimated density (light / medium / heavy)

Balance the grid: mix heavy code-block sections with lighter bullet-point sections so the layout feels even.

**Section title quality check:** Read your section titles as a list. Do they tell a story? A professional should be able to read just the titles and understand the tool's workflow. Bad: "Installation, Commands, Settings, Features, API". Good: "Quick Start, Daily Workflow, Project Setup, Debugging, Team Patterns".

### Step 3 — Build the React Component

Read the design system reference file at `references/design-system.md` — it contains the exact color palette, component library, and layout rules. Follow it precisely.

**Critical rules:**

- Output a single `.jsx` file with a default export
- Use only inline styles (no CSS files, no Tailwind classes that need compilation)
- Import only `{ useState } from "react"` — no other dependencies
- The component must have zero required props
- All content is hardcoded in the component (not fetched)
- Always define ALL primitive components (Code, Tag, Bullet, KV, RefRow, SectionCard) even if some are unused — this keeps the structure consistent across all cheatsheets

**JSX Escaping Hazards (CRITICAL — these cause render failures):**

JSX has strict rules about special characters. Violating these produces silent parse errors that completely break the cheatsheet. Follow these rules exactly:

1. **`${...}` in JSX text children** — NEVER write `${var}` directly inside JSX text. Always wrap in a string expression: `{'${var}'}` or put inside a template literal inside a `<Code>` block.
2. **Quotes in JSX attribute values** — NEVER use backslash escapes like `title='That\'s right'`. Instead use curly-brace expressions: `title={"That's right"}` or switch quote types: `title="That's right"`.
3. **Regex special characters in JSX text** — `\d`, `\w`, `\s`, `\b` etc. must be inside template literals within `<Code>` components or wrapped in `{'\\d'}` string expressions. NEVER place raw backslash sequences in JSX text.
4. **Angle brackets `<` `>` in text** — Use `{'<'}` or `{'>'}`or `&lt;` / `&gt;`. Raw `<` in text children is interpreted as an opening tag.
5. **Literal curly braces in text** — Use `{'{'}` and `{'}'}` for literal braces outside of template literals.
6. **Ampersands** — Use `{'&'}` or `&amp;` if needed.

**When in doubt, wrap any special character in a `{'...'}` string expression.** This is always safe.

**Responsive Design (REQUIRED):**

Every cheatsheet must be mobile-responsive. Since inline styles cannot use `@media` queries, add an embedded `<style>` tag at the start of the component's return JSX. See `references/design-system.md` for the exact responsive pattern. The grid must collapse from 3 columns → 2 columns (at 900px) → 1 column (at 600px).

### Step 4 — Content Quality Checklist

Before finishing, verify EVERY item:

- [ ] Every section has real, accurate, useful content (no placeholder text)
- [ ] Code examples are syntactically correct and runnable
- [ ] Commands/shortcuts are verified against current versions
- [ ] **MINIMUM DENSITY:** Every section has at least 4 substantive content items (Bullet, KV, RefRow, Code block, or styled data row). If a section only has 2-3 items, either add more content or merge it into another section. "Overview" and "intro" sections are NOT exempt — they need density too. **Common fix for code-heavy sections:** a Code block alone counts as 1 item — always pair it with 3+ Bullet or KV items explaining what the code does, common variations, or gotchas.
- [ ] Keyboard shortcuts, CLI commands, and config snippets use the `<Code>` component
- [ ] Tags/badges are used for categories, labels, and status indicators — **only use colors from the design system palette** (the 6 secondary Tag colors: green #5a8a3c, blue #3a6ea5, purple #7a5a8a, gold #8a6a3a, teal #2a7a7a, red #a53a3a, or the default burnt-orange). Never invent new hex colors.
- [ ] The cheatsheet would genuinely help a professional working with this topic
- [ ] **WORKFLOW ORIENTATION:** Read your section titles as a list. Do they describe workflows/tasks or just feature categories? If more than 2 sections are pure feature lists (e.g., "All Commands", "Configuration Options"), restructure them around HOW a professional uses those features. Apply the curation test to every section.
- [ ] **CURATION CHECK:** Count your sections. If you have more than 16, ask: "Which sections would a professional NEVER look up at their desk?" Cut or merge those. 12 focused sections > 18 scattered ones.
- [ ] **RESPONSIVE:** Verify the `<style>` tag with media queries is present and the grid uses `className="cheatsheet-grid"`.
- [ ] **JSX SAFETY:** Scan for unescaped `${}`, backslash sequences in JSX text, quotes-in-quotes in attributes, and raw `<`/`>` in text content. Any of these will silently break rendering.
- [ ] **CONTENT ACCURACY — Final verification pass.** Re-read the entire cheatsheet and for each section ask: "Is there any function name, flag, default value, numeric claim, or behavioral description I did NOT verify via web search?" If yes, search for it now or remove it. Pay special attention to:
  - Function/method names that might not exist (search "[tool] [function name]")
  - Default values and numeric ranges (search "[tool] [feature] default")
  - Statistics or percentages (verify exact figures from original source)
  - Filter/transform behavior descriptions (search "[tool] [filter] behavior")
  - Cross-dialect differences (verify each dialect separately)

### Step 5 — Save and Present

Save the file to `/mnt/user-data/outputs/{topic}-cheatsheet.jsx` and present it to the user.

## Design System Summary

The full design system is in `references/design-system.md`. Here's the quick summary:

**Palette:** Warm parchment background (#faf5ef), cream cards (#fff8f0), burnt-orange accent (#c0582a), dark espresso text (#2c1810).

**Layout:** CSS Grid, 3 columns (responsive: 2 at 900px, 1 at 600px), 12px gap. Pages toggled via useState tabs.

**Components used inside sections:**

- `<Code>` — dark code blocks with monospace font
- `<Tag>` — colored badge pills for categories
- `<Bullet>` — circle-prefixed list items
- `<KV>` — bold key + description pairs
- `<RefRow>` — two-column command reference rows with bottom border

**Section card:** Numbered square badge (burnt-orange), title in Georgia serif, left accent stripe, cream background with subtle border.

**Typography:** Georgia serif for headings, system sans-serif for body, JetBrains Mono/Fira Code for code.

Always read `references/design-system.md` for the full component code before generating a cheatsheet.
