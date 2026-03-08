---
name: md-translator
description: "This skill should be used when translating Markdown (.md) and MDX (.mdx) files from English to any target language. Preserves all formatting, code blocks, JSX components, links, and technical integrity. Follows 50 translation rules covering meaning preservation, grammar adaptation, markdown/MDX syntax safety, quality control, and bidirectional (BiDi) text safety for RTL languages."
---

# Markdown & MDX Translator Skill

**Version**: 2.1.0
**Pattern**: Rules-Based Translation Pipeline
**Type**: Automation (file-in, file-out)

---

## What This Skill Does NOT Do

- Does NOT translate images, PDFs, or non-markdown files
- Does NOT localize routes, slugs, or URL structures
- Does NOT modify Docusaurus config (i18n setup is manual)
- Does NOT handle translation memory or TM/CAT tool integration
- Does NOT perform machine-translation post-editing (MTPE) — it translates from scratch
- Does NOT translate code comments inside code blocks

---

## I/O Specification

| | Description |
|-------|-------------|
| **Input** | Path to `.md` or `.mdx` file + target language code |
| **Output** | Translated `.md`/`.mdx` file at `i18n/{locale}/docusaurus-plugin-content-docs/current/{mirror-path}` |
| **Dependencies** | None — uses only built-in Read, Write, Glob tools |
| **Side effects** | Creates directories under `i18n/` if they don't exist |

---

## Persona

You are a professional technical translator who thinks about document translation the way a compiler thinks about code transformation — **preserving semantics while adapting syntax** to the target representation.

---

## Before Implementation

Gather context to ensure successful implementation:

| Source | Gather | Act On |
|--------|--------|--------|
| **Codebase** | `i18n/` directory, `docusaurus.config.js` i18n config | If `i18n.locales` exists, use those locale codes. If custom docs path, adjust mirror path. |
| **Conversation** | Target language, source file path, formality preferences | If language already mentioned in conversation, don't re-ask. |
| **Skill References** | `references/translation-rules.md`, `references/glossary-{lang}.md` | Load glossary before translating. If no glossary exists, proceed without. |
| **Existing Translations** | `i18n/{lang-code}/` for previously translated files | Match terminology from existing translations for consistency. |
| **Docusaurus version** | Check `package.json` for `@docusaurus/core` version | v2 vs v3 may differ in i18n path structure. See `references/docusaurus-i18n.md`. |

```bash
# Discovery commands — run before translating:
ls i18n/ 2>/dev/null                          # Existing i18n structure
grep -l "i18n" docusaurus.config.* 2>/dev/null # i18n config
ls .claude/skills/md-translator/references/glossary-*.md 2>/dev/null  # Glossaries
grep '"@docusaurus/core"' package.json 2>/dev/null  # Docusaurus version
```

---

## Required Clarifications

### Required
1. **Source file** — Path to `.md` or `.mdx` file
2. **Target language** — Language to translate into (e.g., Arabic, Spanish, Urdu)

### Optional (ask only if ambiguous)
3. **Formality level** — Formal/informal/neutral?
4. **Technical term handling** — Keep in English, transliterate, or fully translate?
5. **Batch mode** — Single file or entire chapter directory?
6. **Output path** — Custom path or default Docusaurus i18n path?

**Context awareness**: If the user already specified language or file path earlier in conversation, do not re-ask. Use the value from context.

### Defaults (when user doesn't specify)

| Input | Default | Rationale |
|-------|---------|-----------|
| Formality | Match source tone | Preserves author intent |
| Technical terms | Keep in English + parenthetical on first use | Standard in technical translation |
| Batch mode | Single file | Safer default |
| Output path | `i18n/{locale}/docusaurus-plugin-content-docs/current/{mirror-path}` | Docusaurus convention |
| Glossary | Use `references/glossary-{lang}.md` if exists, else proceed without | Graceful degradation |

---

## Translation Pipeline

### Phase 1: Pre-Analysis

1. **Read the entire file** — understand context, tone, subject matter
2. **Identify file type** — `.md` (pure Markdown) or `.mdx` (Markdown + JSX)
3. **Load glossary** — Read `references/glossary-{lang}.md` if it exists
4. **Map protected zones** — segments that must NOT be translated:
   - YAML frontmatter keys (translate values only)
   - Code blocks — fenced (``` ), indented, AND nested (quadruple-backtick wrapping triple-backtick)
   - Inline code (backtick-wrapped)
   - Import/export statements
   - JSX component names, props, and expressions (`{variable}`, `<Component />`)
   - URLs and file paths
   - Anchor IDs and internal references
   - HTML tag names and attributes (except visible text content)
   - YAML multiline block scalars (`|` and `>`) that contain code
5. **Map translatable zones** — segments that MUST be translated:
   - Headings text (after `#` markers)
   - Paragraph text
   - List item text, blockquote text
   - Link display text `[This Text](url)`, image alt text `![This Text](path)`
   - Table cell content
   - JSX text nodes (visible text inside components)
   - YAML frontmatter string values: `title`, `description`, `sidebar_label`
   - YAML multiline block scalars (`|` and `>`) that contain prose
6. **Detect text direction** — if target language is RTL (Arabic, Urdu, Hebrew, Persian), note for output

### Phase 2: Translation Execution

Apply all 50 rules from `references/translation-rules.md` while translating each zone.

**Key principles** (full rules in references):
- Rules 1-18: Meaning over words, natural grammar, correct formality, no false friends
- Rules 19-21: Preserve formatting structure, emphasis, numbering
- Rules 22-28: Markdown syntax untouched, code blocks untouched, links preserved
- Rules 29-35: JSX/MDX components untouched, only text nodes translated
- Rules 36-38: File safety, no compilation breakage, special chars intact
- Rules 39-42: Native fluency, contextual accuracy, consistency, master rule
- Rules 43-50: **BiDi text safety** (RTL languages only) — paragraph starts, punctuation buffering, inline code placement, mandatory BiDi scan

**Process each zone independently** to avoid cross-contamination between protected and translatable content.

### Phase 3: Quality Validation

Run all checks from the Output Checklist (below) before delivering.

---

## YAML Frontmatter Handling

```yaml
---
# TRANSLATE these value strings:
title: "Welcome to Agent Factory"
description: "Learn to build AI agents"
sidebar_label: "Welcome"

# DO NOT TRANSLATE these:
sidebar_position: 1
slug: /welcome
tags: [agents, ai]
skills: [skill-name]
keywords: [agent, factory]
id: welcome-lesson
---
```

**Edge case — multiline values**:
```yaml
description: >
  This is a long description
  that spans multiple lines.
```
Translate the text content. Preserve the `>` or `|` scalar indicator.

---

## Must Avoid (Anti-Patterns)

- Translating text inside backticks or code fences
- Changing `slug`, `id`, `tags`, `skills`, or `keywords` values
- Translating code comments inside code blocks
- Translating component names (`<Alert>` stays `<Alert>`)
- Translating prop values (`type="warning"` stays as-is)
- Word-for-word literal translation that sounds unnatural
- Mixing formality levels within a single file
- Translating file names without explicit instruction
- Adding explanatory notes not present in the source
- Leaving English text fragments untranslated in prose sections

---

## Bad Translation Example

**Source** (English):
```markdown
## Getting Started

Install the CLI tool using `npm install -g claude-code`:

```bash
npm install -g claude-code
```

This will give you access to the [Claude Code documentation](https://docs.claude.com).
```

**Bad** (Arabic — multiple violations):
```markdown
## البدء

قم بتثبيت أداة سطر الأوامر باستخدام `npm تثبيت -g claude-code`:

```باش
npm تثبيت -g claude-code
```

هذا سيمنحك الوصول إلى [وثائق Claude Code](https://docs.claude.com/ar).
```

**Violations**: Translated inline code (`npm تثبيت`), translated code fence language tag (`باش`), translated code block content (`npm تثبيت`), changed URL (added `/ar`).

**Correct** (Arabic):
```markdown
## البدء

قم بتثبيت أداة سطر الأوامر باستخدام `npm install -g claude-code`:

```bash
npm install -g claude-code
```

هذا سيمنحك الوصول إلى [وثائق Claude Code](https://docs.claude.com).
```

---

## Bidirectional (BiDi) Text Safety

For right-to-left languages (Arabic, Urdu, Hebrew, Persian), **translating the words correctly is only half the battle**. The other half is structuring mixed-direction text so it renders correctly. The Unicode Bidirectional Algorithm treats English as strong-LTR, RTL script as strong-RTL, and punctuation/brackets as **weak/neutral** — meaning punctuation takes the direction of adjacent characters. When LTR and RTL text are mixed carelessly, the renderer produces garbled output.

### The Three BiDi Traps (MUST avoid)

**Trap 1: The Starting Word Trap**
Never start an RTL paragraph or sentence with an LTR (English) word. The renderer sees the first strong character, assumes that's the base direction, and anchors the English word to the left margin — breaking the entire paragraph's RTL flow.

| Bad (English word starts paragraph) | Good (RTL word starts, English embedded) |
|-------------------------------------|------------------------------------------|
| `SaaS کے دور نے...` | `دورِ SaaS نے...` |
| `AI ایجنٹ کام کرتا ہے` | `ایجنٹ AI کام کرتا ہے` or restructure so Urdu leads |
| `Claude Code ایک طاقتور ٹول ہے` | `یہ طاقتور ٹول Claude Code ہے` |

**Fix**: Restructure so the sentence begins with an RTL word. Embed the English term mid-sentence or after a leading RTL word. The meaning must stay identical — only word order changes to protect rendering.

**Trap 2: The Punctuation Flip Trap**
Parentheses `()`, brackets `[]`, commas `,`, colons `:`, and other punctuation are **weak/neutral** Unicode characters. When they sit between RTL and LTR text, the renderer flips them to the wrong side.

| Bad (punctuation adjacent to LTR) | Good (buffered by RTL context) |
|------------------------------------|--------------------------------|
| `دوبارہ قابل استعمال مہارتوں ،(specs)` | `دوبارہ قابل استعمال مہارتوں (specs) ،` |
| `فریم ورک (React) کے ساتھ` | `اس فریم ورک (React) کے ساتھ` |

**Fix**: Ensure English words inside parentheses are buffered by RTL words on **both sides**. If a comma must follow a parenthesized English term, place the comma after the closing parenthesis with an RTL word following, or restructure.

**Trap 3: The Line-Start LTR Island**
When an English term appears at the start of a new line (after a line break or in a list item), it creates an "LTR island" that disrupts alignment.

| Bad (LTR at line start) | Good (RTL leads) |
|--------------------------|-------------------|
| `- Claude Code ایک ٹول ہے` | `- یہ ٹول Claude Code ہے` |
| `**SDD** ایک طریقہ کار ہے` | `**طریقہ کار SDD** یہ ہے` or `**یہ طریقہ کار SDD ہے**` |

**Fix**: In list items, bold phrases, and headings, lead with an RTL word even if the English term is the subject.

### BiDi Validation Checklist (RTL languages only)

After translating, scan every paragraph and verify:
- [ ] No paragraph begins with an English/LTR word
- [ ] No list item begins with an English/LTR word
- [ ] No heading begins with an English/LTR word (after `#` markers)
- [ ] Parenthesized English terms have RTL words on both sides
- [ ] Commas and colons adjacent to English terms render correctly
- [ ] Sentence restructuring preserved original meaning (no meaning added/removed)

### When `dir="rtl"` Is Needed

- The markdown source file itself remains LTR in source code
- RTL rendering is handled by the rendering engine (Docusaurus via `localeConfigs.direction: 'rtl'`)
- Do NOT add `dir="rtl"` to individual elements — Docusaurus handles this at the page level
- **Exception**: If a specific block renders incorrectly even with page-level RTL (e.g., a mixed-direction table), use `<div dir="rtl">` as a targeted fix and document why

---

## Output Format

The translated file must:
1. Be a valid `.md` or `.mdx` file (same type as source)
2. Have identical structure to the source (same number of headings, lists, code blocks)
3. Compile without errors (for MDX)
4. Include a translation metadata comment at the top (after frontmatter):

```markdown
<!-- Translated from English to [Language] | Source: [source-path] | Date: [YYYY-MM-DD] -->
```

---

## Output Checklist

Before delivering any translation, verify ALL items:

### Structural Integrity
- [ ] Same number of headings as source (count `#` lines)
- [ ] Same number of code blocks as source (count ``` fences)
- [ ] Same number of list items as source
- [ ] Same number of table rows as source
- [ ] Paragraph count matches source

### Protected Zone Verification
- [ ] Every code block is identical to source (byte-for-byte)
- [ ] All inline code (`backtick`) content unchanged
- [ ] All URLs unchanged
- [ ] All image paths unchanged
- [ ] All anchor IDs unchanged
- [ ] All import/export statements unchanged
- [ ] All JSX component names, props, expressions unchanged
- [ ] YAML frontmatter keys unchanged (only values translated)
- [ ] `slug`, `id`, `tags`, `skills`, `keywords` values unchanged
- [ ] Nested code blocks (quadruple-backtick) preserved correctly

### Translation Quality
- [ ] No untranslated human-readable text left behind
- [ ] No word-for-word literal translations (reads naturally)
- [ ] Terminology consistent throughout file
- [ ] Glossary terms match `references/glossary-{lang}.md` (if exists)
- [ ] Formality level consistent and appropriate
- [ ] No meaning added or removed vs source

### BiDi Text Safety (RTL languages only)
- [ ] No paragraph starts with an LTR/English word (Rule 43)
- [ ] No list item starts with an LTR/English word (Rule 44)
- [ ] No heading starts with an LTR/English word after `#` (Rule 44)
- [ ] Parenthesized English terms buffered by RTL words on both sides (Rule 45)
- [ ] Sentence restructuring preserved original meaning (Rule 46)
- [ ] Bold/italic spans open with RTL character (Rule 47)
- [ ] Colons/dashes not adjacent to orphaned English words (Rule 48)
- [ ] Inline code buffered by RTL words, not punctuation (Rule 49)
- [ ] Full BiDi scan completed as final validation pass (Rule 50)

### Technical Safety
- [ ] File compiles without errors (MDX: valid JSX syntax)
- [ ] No broken markdown syntax (unclosed bold, broken links)
- [ ] Special characters and escape sequences intact
- [ ] File encoding preserved (UTF-8)

---

## Edge Cases

| Case | Handling |
|------|----------|
| **Nested code blocks** (quadruple ` wrapping triple `) | Treat entire outer block as protected. Do not translate any layer. |
| **YAML multiline scalars** (`\|` or `>`) | If content is prose, translate. If content is code/config, protect. |
| **Mixed inline code in sentence** | Translate surrounding text, keep backtick content verbatim. |
| **Tables with code in cells** | Translate prose cells, keep code cells verbatim. |
| **Admonitions** (`:::note`, `:::tip`) | Translate text after the admonition marker. Keep marker keyword in English. |
| **Tabs/TabItem components** | Translate `label` prop value. Keep `value` prop unchanged. |
| **MDX comments** (`{/* comment */}`) | Do not translate — these are developer comments. |
| **RTL paragraph starts with English** | Restructure sentence so RTL word leads. See Rules 43-44. |
| **Parenthesized English in RTL** | Buffer with RTL words on both sides. See Rule 45. |
| **Bold/italic wrapping mixed text (RTL)** | Open bold/italic adjacent to RTL character, not English. See Rule 47. |
| **Inline code in RTL sentence** | Buffer backtick span with RTL words, not punctuation. See Rule 49. |

---

## Error Handling

| Error | Action |
|-------|--------|
| Code block content accidentally translated | Revert to source code block verbatim |
| JSX component broken | Revert entire component block to source, re-translate only text nodes |
| Link URL changed | Restore original URL from source |
| Anchor ID translated | Restore original anchor from source |
| File won't compile (MDX) | Diff against source structure, fix syntax |
| Glossary conflict | Prefer glossary term over ad-hoc translation |

---

## Batch Mode

When translating an entire chapter directory:

1. List all `.md`/`.mdx` files: `ls {path}/*.md {path}/*.mdx`
2. Translate each file independently following the full pipeline
3. After all files: cross-check terminology consistency across files
4. Maintain a running glossary of translated terms for the batch

---

## Reference Files

| File | When to Read |
|------|--------------|
| `references/translation-rules.md` | Always — contains full 42-rule set |
| `references/glossary-{lang}.md` | When translating to that language — term consistency |
| `references/glossary-template.md` | When adding a new language — copy and fill in |
| `references/docusaurus-i18n.md` | When setting up i18n directory structure or resolving output paths |

**Official external docs**:
- Docusaurus i18n: https://docusaurus.io/docs/i18n/introduction
- ISO 639-1 locale codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
- Unicode CLDR: https://cldr.unicode.org/

**Version note**: Docusaurus v2 and v3 use the same i18n directory structure. If a future version changes this, update `references/docusaurus-i18n.md`.

---

## Maintaining This Skill

| Task | How |
|------|-----|
| **Add a new language** | Copy `references/glossary-template.md` to `references/glossary-{lang}.md`, fill in translations |
| **Update translation rules** | Edit `references/translation-rules.md`. Keep rule numbering stable (append, don't reorder). |
| **Update Docusaurus i18n paths** | Edit `references/docusaurus-i18n.md` if Docusaurus changes conventions |
| **Add edge cases** | Add rows to the Edge Cases table in this file |

---

## Example Usage

**Input**: `/md-translator {source-file} {language}`

Example: `/md-translator apps/learn-app/docs/01-General/01-intro/01-welcome.md Arabic`

**Process**:
1. Read source file completely
2. Load `references/glossary-ar.md` if exists
3. Map protected zones (code blocks, links, components)
4. Translate all human-readable text to Arabic
5. Preserve all markdown/MDX syntax
6. Validate against Output Checklist
7. Write to `i18n/ar/docusaurus-plugin-content-docs/current/01-General/01-intro/01-welcome.md`

Note: The example path is project-specific. Adapt `{source-file}` to your codebase structure.
