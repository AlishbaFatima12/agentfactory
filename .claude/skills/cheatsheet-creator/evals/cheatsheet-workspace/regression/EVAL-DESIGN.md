# Eval Harness Design

## Why These 6 Dimensions?

Every eval dimension connects to a real user outcome. If a cheatsheet fails on any of these, users won't use it — and that's lost value.

### Accuracy (weight: 0.25) — "Will this get me in trouble?"

A cheatsheet with wrong syntax is **worse than no cheatsheet**. A user who copies `jq ascii` (doesn't exist) or runs `ffmpeg -vol 512` (deprecated) wastes more time than if they'd just Googled it.

**What we measure:** Are CLI commands, function names, default values, syntax examples, and factual claims correct and current?

**Why 0.25 weight:** Wrong information actively harms users. A beautiful, well-organized cheatsheet with bad commands destroys trust in the entire product.

### Workflow Orientation (weight: 0.20) — "Does this teach me HOW to work?"

The #1 failure mode is producing a **reference dump** — listing every feature, flag, and option. A great cheatsheet is a **workflow guide** organized around tasks, not features. This dimension was added after observing that high-scoring cheatsheets on all other dimensions were still unusable because they read like documentation indexes.

**What we measure:** Are sections organized around workflows/tasks vs feature categories? Is there smart curation (80/20 rule)? Decision guides present? Action-oriented section titles?

**Why 0.20 weight:** A reference dump with perfect accuracy and completeness is still a poor cheatsheet. This dimension directly separates "would bookmark" from "would never revisit."

### Completeness (weight: 0.15) — "Does this cover what I need?"

If someone asks for a SQL cheatsheet comparing Postgres and MySQL, and it only covers Postgres — that's a failed delivery regardless of quality. But completeness now rewards **smart curation** over exhaustive coverage — covering the 80/20 deeply is better than covering everything shallowly.

**What we measure:** Does the cheatsheet cover the essential workflows the user's prompt implies? Is depth balanced? Does it include useful extras without filler?

**Why 0.15 weight (reduced from 0.25):** Completeness used to reward exhaustiveness, which incentivized reference dumps. With the workflow orientation dimension now measuring curation quality, completeness focuses narrowly on "are the essentials covered?"

### Usability (weight: 0.15) — "Can I actually use this at my desk?"

A cheatsheet is a reference tool. If you can't scan it and find what you need in seconds, it fails its core purpose.

**What we measure:** Organization, scannability, information density, practical value, audience fit, visual variety of content primitives.

**Why 0.15 weight:** A cheatsheet that's correct and well-curated but poorly organized is still useful — just slower to use.

### Render (weight: 0.15) — "Does it actually show up?"

If the JSX doesn't render, nothing else matters. But render failures are binary — it either works or it doesn't — so there's less nuance to weight heavily.

**What we measure:** Does the component render in a browser without errors? No horizontal overflow? Content actually visible?

**Why 0.15 weight:** Critical as a gate (score of 1 = automatic fail), but once it renders, the weight doesn't need to be high. It's table stakes.

### Efficiency (weight: 0.10) — "Is the output well-structured?"

Structural quality of the JSX — section count, content density, palette compliance, component definitions. This is a proxy for "did the skill follow its own rules?"

**What we measure:** 13 automated checks including JSX parseability, section count (12-16), minimum content per section (4+ items), sequential numbering, color palette compliance, content primitive diversity.

**Why 0.10 weight:** Structural issues are usually cosmetic or minor. A cheatsheet with 11 sections instead of 12 is still useful. This dimension catches sloppiness, not deal-breakers.

## The 4 Grading Channels

Each channel uses the right tool for its job — no single approach can grade all dimensions well.

### Channel A: Puppeteer Headless Chrome (→ Render score)

**What it does:** Launches headless Chrome, injects the JSX with React + Babel, renders the component, checks for errors.

**Checks:**

- Does `window.renderJSX()` succeed without throwing?
- Is the rendered HTML larger than 100 bytes? (i.e., something actually rendered)
- Is the page body taller than 500px? (i.e., substantial content)
- Any horizontal overflow? (broken layout)
- Any console errors?

**Cost:** ~2 seconds per trace. Free (no API calls).

**Score mapping:**

- 5 = Renders perfectly, substantial content
- 4 = Renders but short
- 3 = Renders with overflow or console errors
- 2 = Partial render
- 1 = Failed to render

### Channel B: Claude + Web Search (→ Accuracy score)

**What it does:** Sends the JSX to a Claude subprocess with web search enabled. Claude selects 5-8 high-risk claims and verifies each against official documentation.

**Prioritization (what to verify first):**

1. Commands/syntax users would copy-paste (highest impact if wrong)
2. Version-specific or time-sensitive features (most likely outdated)
3. Suspiciously specific or uncommon claims (most likely hallucinated)
4. Security configs where errors have consequences

**Grader prompt:** `graders/accuracy-grader.md`

**Output:** Structured JSON with per-claim verdicts (correct/incorrect/outdated/unverifiable), evidence, and severity ratings.

**Cost:** ~60 seconds per trace. Uses Claude API (sonnet model) + web search tool calls.

**Score rubric:**

- 5 = All verified claims correct
- 4 = 1-2 minor inaccuracies (wrong flag name, outdated but functional syntax)
- 3 = 1 significant error or 3+ minor ones
- 2 = Multiple errors that would mislead users
- 1 = Major factual errors throughout

### Channel C: Claude Quality Judge (→ Usability + Completeness + Workflow Orientation scores)

**What it does:** Sends the JSX to a Claude subprocess that evaluates it as a reader — no tools, just reading the source and judging against rubrics.

**Usability factors:**

- Organization — logical grouping, basics-to-advanced flow
- Scannability — clear titles, consistent formatting, not walls of text
- Information density — not too sparse, not too overwhelming
- Practical value — would a professional bookmark this?
- Audience fit — tone and depth match the prompt
- Visual variety — good mix of Code, Tag, Bullet, KV, RefRow

**Completeness factors:**

- Core coverage — essential workflows and knowledge areas
- Prompt alignment — addresses what was specifically asked for
- Smart curation — 80/20 rule, depth over breadth
- Obvious gaps — missing workflows any reasonable cheatsheet should have
- Depth balance — all included subtopics at appropriate depth

**Workflow Orientation factors:**

- Task-oriented structure — sections around workflows vs feature categories
- Curation quality — 80/20 focus, not trying to list everything
- Decision support — "When to use X vs Y" sections
- Progressive disclosure — most-used patterns first, edge cases omitted
- Action-oriented titles — "Quick Start" not "Installation"

**Grader prompt:** `graders/quality-grader.md`

**Output:** Structured JSON with separate usability, completeness, and workflow_orientation scores + notes.

**Cost:** ~30 seconds per trace. Uses Claude API (sonnet model), no tools.

### Channel D: Structural Checks (→ Efficiency score)

**What it does:** Runs 13 automated checks against the JSX source using Babel AST parsing and regex analysis.

**The 13 checks:**

1. JSX parseable (Babel)
2. Has `export default function`
3. Only `useState` imported (no other dependencies)
4. Palette object defined
5. All 6 required components defined (Code, Tag, Bullet, KV, RefRow, SectionCard)
6. Section count between 12-24
7. Sequential section numbering
8. Minimum 4 content items per section
9. Color palette compliance (only approved hex values)
10. Maximum 2 `span={3}` sections
11. Content primitive diversity (at least 2 types used)
12. No placeholder text (Lorem ipsum, FIXME, TBD)
13. File size within range (100-1500 lines)

**Template literal stripping:** Checks 3, 9, and others strip content inside backtick strings before checking, so code examples inside `<Code>` blocks don't trigger false positives (e.g., a regex example containing `#ff0000` won't fail the color palette check).

**Cost:** <100ms per trace. Free (no API calls).

**Score mapping:**

- 5 = 18+ sections, 3+ primitive types, zero check failures
- 4 = 15+ sections, ≤2 thin sections, ≤2 total failures
- 3 = 12+ sections, ≤4 total failures
- 2 = 10+ sections
- 1 = JSX parse error or missing components

## Composite Score

```
composite = Σ(dimension_score × weight) / Σ(weights)
```

**Pass criteria:**

- Composite ≥ 3.5
- No single dimension below 2

A trace can have a high composite but still fail if any dimension scores 1 (e.g., perfect content but doesn't render).

## Running Evals

```bash
# Full eval — all channels, all traces (~20 min for 17 traces)
node eval-harness.mjs --v2

# Fast eval — no LLM calls (~30 seconds)
node eval-harness.mjs --v2 --skip-llm

# Single channel
node eval-harness.mjs --v2 --channel B

# Single trace
node eval-harness.mjs ../traces-v3/topic-14-jq

# Multiple channels
node eval-harness.mjs --v2 --channel B,C
```

## How Errors Found Here Feed Back Into the Skill

The eval harness doesn't just score — it produces **actionable evidence** for skill improvement:

1. **Channel B** returns `verified_claims` with specific wrong items → these become anti-hallucination rules in SKILL.md
2. **Channel C** returns notes explaining why usability or completeness scored low → these inform section planning guidance
3. **Channel D** identifies structural patterns (thin sections, missing components) → these become checklist items
4. **Channel A** catches render failures → these inform JSX escaping rules

Example: Channel B found that jq's `ascii` function doesn't exist. This led to the rule: "Never invent functions — web-search each one before including it." That single rule took jq's accuracy from 2 to 5.
