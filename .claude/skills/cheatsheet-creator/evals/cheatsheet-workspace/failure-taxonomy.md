# Failure Taxonomy — Cheatsheet Creator Skill

Based on structural + Babel parse analysis of 17 traces.

## Observed Failure Modes

### F1: JSX Syntax Errors (Babel Parse Failures)
- **Frequency:** 2/17 traces (12%)
- **Severity:** CRITICAL — prevents rendering entirely
- **Traces affected:** topic-4 (ffmpeg), topic-6 (negotiation)
- **Root causes:**
  - **F1a: Unescaped `${}` in JSX text** — ffmpeg trace has `\${f%.avi}` in a `<Bullet>` child, which JSX interprets as an expression. Should be inside a template literal or use `{'${f%.avi}'}`.
  - **F1b: Backslash escapes in JSX attribute strings** — negotiation trace has `title='Getting to "That\'s Right"'`. JSX attribute strings don't support `\'`. Should use `title={'Getting to "That\'s Right"'}` or `title="Getting to &quot;That's Right&quot;"`.
- **Note:** Initial naive brace-counter flagged 10/17 as failing, but Babel confirms only 2 have real parse errors. The brace counter was confused by `{}` inside template literals in Code blocks.
- **Fixability:** PROMPT FIX — add JSX escaping rules for special characters in content

### F2: Thin Sections (< 4 content primitives detected)
- **Frequency:** 15/17 traces flagged by checker (88%)
- **Actual frequency:** ~6/17 traces with genuinely thin sections (~35%)
- **Severity:** MEDIUM — degrades quality but doesn't break rendering
- **Root cause:** Two sub-patterns:
  - **F2a: FALSE POSITIVE** — Decision guide / comparison sections use `.map()` over arrays of objects rendered as styled divs. These sections have rich content (often 6-10 items) but don't use named primitives (Bullet/KV/RefRow), so the counter misses them. ~60% of flagged sections are this pattern.
  - **F2b: REAL** — Some sections genuinely have only 2-3 items, especially "overview" or "intro" sections. Seen in: Docker (Old vs New comparison), ffmpeg (Encoding Presets), Regex (Greedy vs Lazy).
- **Fixability:** PROMPT FIX for F2b (reinforce minimum density). F2a needs checker update.

### F3: Non-Palette Colors
- **Frequency:** 2/17 traces (12%)
- **Severity:** LOW — minor brand inconsistency
- **Traces affected:** topic-15 (Tailwind: #3b82f6, #60a5fa), topic-7 (Parenting)
- **Root cause:** Model invents Tag colors that look nice but aren't in the allowed set. The design system provides 6 secondary Tag colors but the model ignores them.
- **Fixability:** PROMPT FIX — reinforce allowed Tag colors more explicitly

### F4: Placeholder Text (ALL FALSE POSITIVES)
- **Frequency:** 5/17 flagged, 0/17 real
- **Details:** Checker catches "TODO" in vim commands, "example.com" in jq API examples, "your project" in Tailwind descriptions, "Your Name" in git config examples
- **Fixability:** FIX CHECKER only

### F5: Missing Component Definitions (Non-Technical Topics)
- **Frequency:** 3/17 traces (18%)
- **Traces affected:** topic-5 (cognitive biases), topic-6 (negotiation), topic-7 (parenting)
- **Details:** Non-technical topics correctly omit Code and RefRow. The design system says "copy all into every cheatsheet" but this is wasteful for non-tech topics.
- **Fixability:** DESIGN SYSTEM UPDATE — explicitly say "include all primitives even if unused, to keep structure consistent" OR "omit unused primitives for non-technical topics"

### F6: Content Primitive Diversity (Low for Non-Tech)
- **Frequency:** 3/17 traces (18%)
- **Severity:** ACCEPTABLE — non-technical topics correctly use Bullet/KV/Tag only
- **Fixability:** Won't fix

## Failure Priority Matrix

| # | Failure Mode | Freq | Severity | Fixability | Priority |
|---|-------------|------|----------|------------|----------|
| F1 | JSX syntax errors | 12% | CRITICAL | Prompt fix | **P0** |
| F2b | Genuinely thin sections | ~35% | MEDIUM | Prompt fix | **P1** |
| F3 | Non-palette colors | 12% | LOW | Prompt fix | **P2** |
| F5 | Missing components (non-tech) | 18% | LOW | Design update | **P3** |
| F4 | Placeholder FP | 29% | N/A | Fix checker | Checker |
| F2a | Decision guide FP | ~60% | N/A | Fix checker | Checker |
| F6 | Low diversity (non-tech) | 18% | N/A | Acceptable | Won't fix |

## Specific JSX Hazards Identified

These patterns cause JSX parse errors and need explicit skill guidance:

1. **Dollar-brace `${...}` in JSX text children** — Always wrap in `{'...'}` string expression
2. **Quotes in attribute values** — Never use `\'` in JSX attributes; use curly-brace expressions instead
3. **Regex backslashes in JSX text** — `\d`, `\w`, etc. need to be inside template literals or string expressions
4. **Angle brackets `<` `>` in text** — Use `{'<'}` or `&lt;` / `&gt;`
5. **Ampersands in text** — Use `{'&'}` or `&amp;`
6. **Curly braces in text** — Use `{'{'}` and `{'}'}` for literal braces outside template literals
