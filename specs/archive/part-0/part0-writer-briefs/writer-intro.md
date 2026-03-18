# Writer Brief: writer-intro

## Scope

You own the **introduction**, **portfolio/post-assessment**, and **instructor guide** sections of Part 0.

## Task ID: #3

## Source Draft Lines

- **Lines 1-137**: Introduction (Why This Part Comes First), Six Layers, Forward Map, Thinking Score Card, Feedback Challenge Protocol, Solo Learners section, Scaling section, Thinking Baseline
- **Lines 1165-1234**: Thinking Portfolio summary, Post-Assessment, Growth Map, Instructor Guide (Calibrating AI Prompts)

## Files to Create

### 01-introduction/ (3 files)

1. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/01-introduction/01-why-this-part-comes-first.md`**
   - sidebar_position: 1
   - Source: Lines 19-116 (Why This Part Comes First + Six Layers + How Layers Work Together + AI Feedback Protocol + Feedback Challenge Protocol + Solo Learners + Scaling)
   - Special handling:
     - Six Layers: Each layer is a pipe-table in the source. Convert each to a `:::note` admonition with the layer name as title. The "How the Layers Work Together" prose paragraph follows after all six.
     - Feedback Challenge Protocol: Convert to `:::warning Feedback Challenge Protocol` with numbered steps
     - Solo Learner section: Convert to regular prose section with heading
     - Three-Tier Assessment: Convert to `<details>` collapsible
     - Motivational taglines in pipe-tables: Convert to `> *italic blockquote*`
     - The "litmus test" pipe-table: Convert to blockquote

2. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/01-introduction/02-forward-map-and-score-card.md`**
   - sidebar_position: 2
   - Source: Lines 58-86 (Forward Map + Thinking Score Card + Score Tracking Table)
   - Special handling:
     - Forward Map: The source has this as one massive pipe-table with all 10 chapters in prose form. Restructure into a proper markdown table with columns: Chapter | Core Skill | Where It's Used Next
     - Thinking Score Card definition: `:::note The Thinking Score Card` with the 5 dimensions
     - Score Tracking Table: `<details>` collapsible with 40-row table template

3. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/01-introduction/03-thinking-baseline.md`**
   - sidebar_position: 3
   - Source: Lines 117-136 (Thinking Baseline)
   - Special handling:
     - Baseline Task: `:::info Thinking Baseline Task` admonition with the 5 tasks
     - AI Baseline Check: Code block with copy button
     - "Do not try to perform well" note: `> *italic blockquote*`

### 12-thinking-portfolio/ (2 files)

4. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/12-thinking-portfolio/01-portfolio-assembly.md`**
   - sidebar_position: 1
   - Source: Lines 1165-1199 (Thinking Portfolio + Post-Assessment)
   - Special handling:
     - Portfolio items (1-10): Convert to a numbered list with chapter cross-links
     - Post-Assessment Task: `:::info Post-Assessment Task` admonition
     - AI Post-Assessment Check: Code block with copy button

5. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/12-thinking-portfolio/02-growth-map.md`**
   - sidebar_position: 2
   - Source: Lines 1201-1208 (Growth Map)
   - Special handling:
     - Growth Map Template: `<details>` collapsible
     - Final tagline: `> *italic blockquote*`
     - Include a transition paragraph pointing to Part 1

### 13-instructor-guide/ (1 file)

6. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/13-instructor-guide/01-calibrating-ai-prompts.md`**
   - sidebar_position: 1
   - Source: Lines 1220-1234 (Semester Calibration Protocol)
   - Special handling:
     - Calibration Protocol: `<details>` collapsible sections for each step
     - Final note about Score Card dimensions being permanent: `> *italic blockquote*`

## Cross-References Needed

Your files are referenced BY every other chapter (as the foundation). Specifically:

- The Six Layers definition is referenced contextually in every exercise's "Layers Used" line
- The Thinking Score Card is referenced in every AI Check prompt
- The Feedback Challenge Protocol is referenced when students disagree with AI
- The Forward Map is referenced by "Building On" admonitions in later chapters

You do NOT need "Building On" admonitions in your own files (the introduction has no predecessors).

## Chapter-Specific Patterns

- **No Tabs component needed** (no scenario selectors in introduction/portfolio)
- **No `import` statements needed**
- Heavy use of `:::note`, `:::info`, `:::warning` admonitions
- Heavy use of `<details>` collapsibles
- Use markdown tables for structured content

## Exit Criteria

- [ ] All 6 files created with full YAML frontmatter
- [ ] Six Layers properly converted from pipe-tables to admonitions
- [ ] Forward Map restructured from prose-blob to navigable table
- [ ] All AI Check prompts in code blocks with copy button
- [ ] Score Card definition and tracking table included
- [ ] Feedback Challenge Protocol in warning admonition
- [ ] Post-Assessment mirrors Baseline structure exactly
- [ ] Growth Map template in collapsible section
- [ ] Instructor calibration protocol in collapsible sections
- [ ] No emojis in output
- [ ] All motivational taglines as blockquotes
