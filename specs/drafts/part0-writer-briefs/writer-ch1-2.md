# Writer Brief: writer-ch1-2

## Scope

You own **Chapter 1: Asking Better Questions** and **Chapter 2: Detecting Broken Reasoning**.

## Task ID: #4

## Source Draft Lines

- **Chapter 1 (Lines 138-237)**: Core Skill intro, Exercise 1 (Prediction Lock), Exercise 2 (Question Tournament), Exercise 3 (Divergence Test), Exercise 4 (Live Defence), Chapter Deliverable, Grading Criteria
- **Chapter 2 (Lines 239-350)**: Core Skill intro, Building On callout, Exercise 1 (Error Prediction), Exercise 2 (Contradiction Test), Exercise 3 (Build It Break It), Exercise 4 (Confidence Calibration), Chapter Deliverable, Grading Criteria

## Files to Create

### 02-asking-better-questions/ (4 files)

1. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/02-asking-better-questions/01-prediction-lock.md`**
   - sidebar_position: 1, chapter: 2, lesson: 1
   - Layers: Layer 1, Layer 2
   - Source: Lines ~149-171
   - Has: Scenario Selector (Tabs), Deliverable Template, AI Check prompt
   - Needs `import Tabs` and `import TabItem`
   - **This is the first exercise in the book** — set the tone. The Prediction Lock format introduced here is referenced in 4+ later chapters.

2. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/02-asking-better-questions/02-question-tournament.md`**
   - sidebar_position: 2, chapter: 2, lesson: 2
   - Layers: Layer 3, Layer 5
   - Source: Lines ~173-192
   - Has: Solo Learner Alternative, AI Check prompt
   - No Tabs needed

3. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/02-asking-better-questions/03-divergence-test.md`**
   - sidebar_position: 3, chapter: 2, lesson: 3
   - Layers: Layer 5, Layer 2
   - Source: Lines ~194-210
   - Has: AI Check prompt
   - No Tabs, no Solo Alternative

4. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/02-asking-better-questions/04-live-defence.md`**
   - sidebar_position: 4, chapter: 2, lesson: 4
   - Layers: Layer 3, Layer 4
   - Source: Lines ~212-237
   - Has: Solo Learner Alternative, AI Check prompt, Chapter Deliverable, Grading Criteria
   - Grading percentages: Prediction 15%, Tournament 15%, Divergence 25%, Defence 20%, Counter-argument 15%, Reflection 10%

### 03-detecting-broken-reasoning/ (4 files)

5. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/03-detecting-broken-reasoning/01-error-prediction.md`**
   - sidebar_position: 1, chapter: 3, lesson: 1
   - Layers: Layer 1, Layer 2
   - Source: Lines ~253-274
   - Has: Scenario Selector (Tabs), AI Check prompt
   - Building On: Chapter 1's Prediction Lock
   - Needs `import Tabs` and `import TabItem`
   - Introduces the **Error Taxonomy** (factual error, logical gap, false confidence, missing context, correlation-causation confusion, outdated information, fabricated citation, cultural blind spot) — this taxonomy is referenced in Ch 3, 5, 6, 9

6. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/03-detecting-broken-reasoning/02-contradiction-test.md`**
   - sidebar_position: 2, chapter: 3, lesson: 2
   - Layers: Layer 4, Layer 6
   - Source: Lines ~276-294
   - Building On: Chapter 1's Reasoning Receipt
   - Has: AI Check prompt
   - Three-draft structure (Draft 1, Draft 2, Draft 3)

7. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/03-detecting-broken-reasoning/03-build-it-break-it.md`**
   - sidebar_position: 3, chapter: 3, lesson: 3
   - Layers: Layer 5, Layer 3
   - Source: Lines ~296-320 (approximate)
   - Has: Solo Learner Alternative, AI Check prompt

8. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/03-detecting-broken-reasoning/04-confidence-calibration.md`**
   - sidebar_position: 4, chapter: 3, lesson: 4
   - Layers: Layer 6
   - Source: Lines ~322-350 (approximate)
   - Has: AI Check prompt, Chapter Deliverable, Grading Criteria
   - Introduces **Confidence Calibration** — referenced in Ch 9

## Cross-References (Building On)

**Chapter 1** has NO "Building On" — it is the first chapter.

**Chapter 2** has:

- Chapter-level: "You will use the Question Formulation skill from Chapter 1..."
  - Link: `../02-asking-better-questions/01-prediction-lock.md`
- Ex1: "Chapter 1's Prediction Lock. You predicted question quality there; now you predict error types."
  - Link: `../02-asking-better-questions/01-prediction-lock.md`
- Ex2: "Chapter 1's Reasoning Receipt format."
  - Link: `../02-asking-better-questions/01-prediction-lock.md`

## Chapter-Specific Patterns

- **Ch 1 Ex1 and Ch 2 Ex1** both use Scenario Selectors (Tabs) — need MDX imports
- **Ch 1** has the heaviest deliverable template (Prediction Lock Template) — use `<details>` collapsible
- **Ch 2 Ex2** has three-draft structure — make sure Draft 1/2/3 progression is clear in deliverable requirements
- **Error Taxonomy** in Ch 2 Ex1 should be presented as a definition list or table, not buried in prose

## Exit Criteria

- [ ] All 8 files created with full YAML frontmatter
- [ ] Scenario Selectors use proper `<Tabs>` component with correct imports
- [ ] All AI Check prompts in code blocks verbatim from source
- [ ] All Building On references use correct relative links
- [ ] Error Taxonomy clearly presented (table format recommended)
- [ ] Solo Learner Alternatives in `:::tip` admonitions
- [ ] Chapter Deliverables in `:::info` at end of Exercise 4 files
- [ ] Grading Criteria in `<details>` collapsibles
- [ ] No emojis in output
