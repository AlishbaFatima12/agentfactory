# Writer Brief: writer-ch3-4

## Scope

You own **Chapter 3: Thinking in Systems** and **Chapter 4: Reasoning From First Principles**.

## Task ID: #5

## Source Draft Lines

- **Chapter 3 (Lines ~351-440)**: Core Skill intro, Exercise 1 (Cascade Mapping), Exercise 2 (Human vs. AI Systems Analysis), Exercise 3 (Variable Shift), Exercise 4 (System Defence), Chapter Deliverable, Grading Criteria
- **Chapter 4 (Lines ~441-530)**: Core Skill intro, Exercise 1 (Blank Page Derivation), Exercise 2 (First Principles vs. AI), Exercise 3 (Assumption Autopsy), Exercise 4 (Rebuild Under New Constraints), Chapter Deliverable, Grading Criteria

**Important**: Line numbers are approximate. Use chapter headings (`# **Chapter 3: Thinking in Systems**` and `# **Chapter 4: Reasoning From First Principles**`) as authoritative boundaries.

## Files to Create

### 04-thinking-in-systems/ (4 files)

1. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/04-thinking-in-systems/01-cascade-mapping.md`**
   - sidebar_position: 1, chapter: 4, lesson: 1
   - Layers: Layer 6 (Iterative Drafts)
   - Building On: Chapter 2's Error Taxonomy
   - Has: Scenario Selector (Tabs — if present in source), AI Check prompt
   - Introduces **Cascade Map** technique — referenced in Ch 7, 8, 9
   - Needs `import Tabs` and `import TabItem` if scenario selector present

2. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/04-thinking-in-systems/02-human-vs-ai-systems-analysis.md`**
   - sidebar_position: 2, chapter: 4, lesson: 2
   - Layers: Layer 3 (Live Defence)
   - Has: Solo Learner Alternative, AI Check prompt

3. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/04-thinking-in-systems/03-variable-shift.md`**
   - sidebar_position: 3, chapter: 4, lesson: 3
   - Layers: Layer 6 (Iterative Drafts)
   - Has: AI Check prompt

4. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/04-thinking-in-systems/04-system-defence.md`**
   - sidebar_position: 4, chapter: 4, lesson: 4
   - Layers: Layer 3 (Live Defence), Layer 6 (Iterative Drafts)
   - Has: Solo Learner Alternative, AI Check prompt, Chapter Deliverable, Grading Criteria

### 05-reasoning-from-first-principles/ (4 files)

5. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/05-reasoning-from-first-principles/01-blank-page-derivation.md`**
   - sidebar_position: 1, chapter: 5, lesson: 1
   - Layers: Layer 1 (Predict Before You Prompt), Layer 5 (Divergence Test)
   - Building On: Chapter 1's Prediction Lock
   - Has: Scenario Selector (Tabs — if present), AI Check prompt

6. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/05-reasoning-from-first-principles/02-first-principles-vs-ai.md`**
   - sidebar_position: 2, chapter: 5, lesson: 2
   - Layers: Layer 6 (Iterative Drafts)
   - Has: AI Check prompt
   - Three-draft comparison structure

7. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/05-reasoning-from-first-principles/03-assumption-autopsy.md`**
   - sidebar_position: 3, chapter: 5, lesson: 3
   - Layers: Layer 2 (Reasoning Receipt), Layer 4 (Contradiction Challenge)
   - Building On: Chapter 2's Error Taxonomy + Chapter 3's Cascade Map
   - Has: AI Check prompt
   - Introduces **Assumption Autopsy** — referenced in Ch 8, 9

8. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/05-reasoning-from-first-principles/04-rebuild-under-new-constraints.md`**
   - sidebar_position: 4, chapter: 5, lesson: 4
   - Layers: Layer 6 (Iterative Drafts)
   - Has: AI Check prompt, Chapter Deliverable, Grading Criteria
   - Introduces **Rebuild Under Constraints** pattern — referenced in Ch 7, 9

## Cross-References (Building On)

**Chapter 3**:

- Chapter-level or Ex1: References Chapter 2's Error Taxonomy (systems errors build on error detection)
  - Link: `../03-detecting-broken-reasoning/01-error-prediction.md`

**Chapter 4**:

- Ex1: Building On Chapter 1's Prediction Lock
  - Link: `../02-asking-better-questions/01-prediction-lock.md`
- Ex3: Building On Chapter 2's Error Taxonomy + Chapter 3's Cascade Map
  - Links: `../03-detecting-broken-reasoning/01-error-prediction.md` and `../04-thinking-in-systems/01-cascade-mapping.md`

## Chapter-Specific Patterns

- **Cascade Map** (Ch 3 Ex1) is a visual technique — the exercise likely asks students to draw/diagram. Ensure the deliverable format captures this (could be a table structure or described diagram format)
- **Variable Shift** (Ch 3 Ex3) tests what happens when you change one variable in a system — the three-draft structure (before shift, after shift, reflection) should be clearly delineated
- **Blank Page Derivation** (Ch 4 Ex1) is the constraint where students derive something from scratch with NO reference material — emphasize the "no AI, no references" constraint
- **Assumption Autopsy** (Ch 4 Ex3) has a unique deliverable: a merged assumption map with categories (a) found by you only, (b) found by AI only, (c) found by both, (d) found by neither but identified during merge

## Exit Criteria

- [ ] All 8 files created with full YAML frontmatter
- [ ] Cascade Map technique clearly introduced (will be referenced by later chapters)
- [ ] Assumption Autopsy clearly introduced (will be referenced by later chapters)
- [ ] All AI Check prompts in code blocks verbatim from source
- [ ] All Building On references use correct relative links
- [ ] Solo Learner Alternatives in `:::tip` admonitions where present
- [ ] Chapter Deliverables in `:::info` at end of Exercise 4 files
- [ ] Grading Criteria in `<details>` collapsibles
- [ ] No emojis in output
