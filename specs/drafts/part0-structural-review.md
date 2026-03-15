# Part 0 Structural Review

## Directory-by-Directory Audit

### 01-introduction

**Files present (3 lessons, 9 files total):**

- `01-why-this-part-comes-first.md` + `.flashcards.yaml` + `.summary.md`
- `02-forward-map-and-score-card.md` + `.flashcards.yaml` + `.summary.md`
- `03-thinking-baseline.md` + `.flashcards.yaml` + `.summary.md`

| Check                                          | Status  | Notes                                                                                   |
| ---------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| README.md                                      | MISSING | No README or _category_.json. Docusaurus will use the folder name as the sidebar label. |
| Sidecar files (.flashcards.yaml + .summary.md) | PASS    | All 3 lessons have both sidecars                                                        |
| Quiz file                                      | N/A     | Introduction is not an exercise chapter                                                 |
| YAML frontmatter                               | PASS    | All 3 files have complete frontmatter                                                   |
| sidebar_position sequential                    | PASS    | 1, 2, 3 (no conflicts)                                                                  |
| Cross-reference links                          | PASS    | Links to other chapters verified                                                        |

**Issues:** 1 (missing README)

---

### 02-asking-better-questions (Chapter 1)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-prediction-lock.md` + `.flashcards.yaml` + `.summary.md`
- `02-question-tournament.md` + `.flashcards.yaml` + `.summary.md`
- `03-divergence-test.md` + `.flashcards.yaml` + `.summary.md`
- `04-live-defence.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_01_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                                                                              |
| --------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| README.md                   | PASS       | Present, sidebar_position: 0                                                       |
| Sidecar files               | PARTIAL    | 4 exercises have both sidecars. Quiz MISSING both .flashcards.yaml and .summary.md |
| Quiz file                   | PASS       | Present (`05_chapter_01_quiz.md`)                                                  |
| YAML frontmatter            | PASS       | All files have frontmatter                                                         |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5                                                                   |
| Quiz naming                 | UNDERSCORE | `05_chapter_01_quiz.md` (underscore pattern with chapter number)                   |

**Issues:** 2 (quiz missing sidecar files)

---

### 03-detecting-broken-reasoning (Chapter 2)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-error-prediction.md` + `.flashcards.yaml` + `.summary.md`
- `02-contradiction-test.md` + `.flashcards.yaml` + `.summary.md`
- `03-build-it-break-it.md` + `.flashcards.yaml` + `.summary.md`
- `04-confidence-calibration.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_02_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                      |
| --------------------------- | ---------- | -------------------------- |
| README.md                   | PASS       |                            |
| Sidecar files               | PARTIAL    | Quiz MISSING both sidecars |
| Quiz file                   | PASS       |                            |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5           |
| Quiz naming                 | UNDERSCORE | `05_chapter_02_quiz.md`    |

**Issues:** 2 (quiz missing sidecar files)

---

### 04-thinking-in-systems (Chapter 3)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-cascade-mapping.md` + `.flashcards.yaml` + `.summary.md`
- `02-human-vs-ai-systems-analysis.md` + `.flashcards.yaml` + `.summary.md`
- `03-variable-shift.md` + `.flashcards.yaml` + `.summary.md`
- `04-system-defence.md` + `.flashcards.yaml` + `.summary.md`
- `05-chapter-quiz.md` (sidebar_position: 5)

| Check                       | Status                | Notes                                                                                      |
| --------------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| README.md                   | PASS                  |                                                                                            |
| Sidecar files               | PARTIAL               | Quiz MISSING both sidecars                                                                 |
| Quiz file                   | PASS                  |                                                                                            |
| sidebar_position sequential | PASS                  | 0, 1, 2, 3, 4, 5                                                                           |
| Quiz naming                 | HYPHEN (INCONSISTENT) | `05-chapter-quiz.md` -- no chapter number in filename; uses hyphens instead of underscores |

**Issues:** 3 (quiz missing sidecars + quiz naming inconsistent)

---

### 05-reasoning-from-first-principles (Chapter 4)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-blank-page-derivation.md` + `.flashcards.yaml` + `.summary.md`
- `02-first-principles-vs-ai.md` + `.flashcards.yaml` + `.summary.md`
- `03-assumption-autopsy.md` + `.flashcards.yaml` + `.summary.md`
- `04-rebuild-under-new-constraints.md` + `.flashcards.yaml` + `.summary.md`
- `05-chapter-quiz.md` (sidebar_position: 5)

| Check                       | Status                | Notes                                                   |
| --------------------------- | --------------------- | ------------------------------------------------------- |
| README.md                   | PASS                  |                                                         |
| Sidecar files               | PARTIAL               | Quiz MISSING both sidecars                              |
| Quiz file                   | PASS                  |                                                         |
| sidebar_position sequential | PASS                  | 0, 1, 2, 3, 4, 5                                        |
| Quiz naming                 | HYPHEN (INCONSISTENT) | `05-chapter-quiz.md` -- same inconsistency as Chapter 3 |

**Issues:** 3 (quiz missing sidecars + quiz naming inconsistent)

---

### 06-communicating-what-matters (Chapter 5)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-audience-prediction.md` + `.flashcards.yaml` + `.summary.md`
- `02-live-adaptation.md` + `.flashcards.yaml` + `.summary.md`
- `03-the-hard-conversation.md` + `.flashcards.yaml` + `.summary.md`
- `04-communication-retrospective.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_05_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                      |
| --------------------------- | ---------- | -------------------------- |
| README.md                   | PASS       |                            |
| Sidecar files               | PARTIAL    | Quiz MISSING both sidecars |
| Quiz file                   | PASS       |                            |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5           |
| Quiz naming                 | UNDERSCORE | `05_chapter_05_quiz.md`    |

**Issues:** 2 (quiz missing sidecar files)

---

### 07-working-with-ai-not-for-ai (Chapter 6)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-three-path-comparison.md` + `.flashcards.yaml` + `.summary.md`
- `02-collaboration-log.md` + `.flashcards.yaml` + `.summary.md`
- `03-the-override-test.md` + `.flashcards.yaml` + `.summary.md`
- `04-dependency-audit.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_06_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                      |
| --------------------------- | ---------- | -------------------------- |
| README.md                   | PASS       |                            |
| Sidecar files               | PARTIAL    | Quiz MISSING both sidecars |
| Quiz file                   | PASS       |                            |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5           |
| Quiz naming                 | UNDERSCORE | `05_chapter_06_quiz.md`    |

**Issues:** 2 (quiz missing sidecar files)

---

### 08-reasoning-through-dilemmas (Chapter 7)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-position-lock.md` + `.flashcards.yaml` + `.summary.md`
- `02-adversarial-defence.md` + `.flashcards.yaml` + `.summary.md`
- `03-stakeholder-swap.md` + `.flashcards.yaml` + `.summary.md`
- `04-cost-matrix.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_07_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                      |
| --------------------------- | ---------- | -------------------------- |
| README.md                   | PASS       |                            |
| Sidecar files               | PARTIAL    | Quiz MISSING both sidecars |
| Quiz file                   | PASS       |                            |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5           |
| Quiz naming                 | UNDERSCORE | `05_chapter_07_quiz.md`    |

**Issues:** 2 (quiz missing sidecar files)

---

### 09-building-something-from-nothing (Chapter 8)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-blank-page-sprint.md` + `.flashcards.yaml` + `.summary.md`
- `02-creation-log.md` + `.flashcards.yaml` + `.summary.md`
- `03-the-originality-test.md` + `.flashcards.yaml` + `.summary.md`
- `04-three-draft-evolution.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_08_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                      |
| --------------------------- | ---------- | -------------------------- |
| README.md                   | PASS       |                            |
| Sidecar files               | PARTIAL    | Quiz MISSING both sidecars |
| Quiz file                   | PASS       |                            |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5           |
| Quiz naming                 | UNDERSCORE | `05_chapter_08_quiz.md`    |

**Issues:** 2 (quiz missing sidecar files)

---

### 10-deciding-under-uncertainty (Chapter 9)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-sealed-decision.md` + `.flashcards.yaml` + `.summary.md`
- `02-ai-consultation.md` + `.flashcards.yaml` + `.summary.md`
- `03-information-drop.md` + `.flashcards.yaml` + `.summary.md`
- `04-decision-audit.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_09_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                      |
| --------------------------- | ---------- | -------------------------- |
| README.md                   | PASS       |                            |
| Sidecar files               | PARTIAL    | Quiz MISSING both sidecars |
| Quiz file                   | PASS       |                            |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5           |
| Quiz naming                 | UNDERSCORE | `05_chapter_09_quiz.md`    |

**Issues:** 2 (quiz missing sidecar files)

---

### 11-learning-how-to-learn (Chapter 10)

**Files present (4 exercises + quiz + README = 6 .md files, 14 files total):**

- `README.md` (sidebar_position: 0)
- `01-learning-plan.md` + `.flashcards.yaml` + `.summary.md`
- `02-72-hour-sprint.md` + `.flashcards.yaml` + `.summary.md`
- `03-teach-it-back.md` + `.flashcards.yaml` + `.summary.md`
- `04-strategy-retrospective.md` + `.flashcards.yaml` + `.summary.md`
- `05_chapter_10_quiz.md` (sidebar_position: 5)

| Check                       | Status     | Notes                      |
| --------------------------- | ---------- | -------------------------- |
| README.md                   | PASS       |                            |
| Sidecar files               | PARTIAL    | Quiz MISSING both sidecars |
| Quiz file                   | PASS       |                            |
| sidebar_position sequential | PASS       | 0, 1, 2, 3, 4, 5           |
| Quiz naming                 | UNDERSCORE | `05_chapter_10_quiz.md`    |

**Issues:** 2 (quiz missing sidecar files)

---

### 12-thinking-portfolio

**Files present (2 lessons, 6 files total):**

- `01-portfolio-assembly.md` + `.flashcards.yaml` + `.summary.md`
- `02-growth-map.md` + `.flashcards.yaml` + `.summary.md`

| Check                       | Status  | Notes                           |
| --------------------------- | ------- | ------------------------------- |
| README.md                   | MISSING | No README or _category_.json    |
| Sidecar files               | PASS    | Both lessons have both sidecars |
| Quiz file                   | N/A     | Not an exercise chapter         |
| sidebar_position sequential | PASS    | 1, 2 (but starts at 1, not 0)   |

**Issues:** 1 (missing README)

---

### 13-instructor-guide

**Files present (1 lesson, 3 files total):**

- `01-calibrating-ai-prompts.md` + `.flashcards.yaml` + `.summary.md`

| Check                       | Status  | Notes                              |
| --------------------------- | ------- | ---------------------------------- |
| README.md                   | MISSING | No README or _category_.json       |
| Sidecar files               | PASS    | Lesson has both sidecars           |
| Quiz file                   | N/A     | Not an exercise chapter            |
| sidebar_position sequential | PASS    | 1 (single file, starts at 1 not 0) |

**Issues:** 1 (missing README)

---

## Issues Found

### 1. Missing README files (3 directories)

| #   | Directory               | Severity | Suggested Fix                                                                                                         |
| --- | ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | `01-introduction`       | Medium   | Add a README.md with sidebar_position: 0 and title "Introduction" to control sidebar label and provide a landing page |
| 2   | `12-thinking-portfolio` | Medium   | Add a README.md with sidebar_position: 0 and title "Thinking Portfolio"                                               |
| 3   | `13-instructor-guide`   | Medium   | Add a README.md with sidebar_position: 0 and title "Instructor Guide"                                                 |

**Impact:** Without README.md or _category_.json, Docusaurus auto-generates the sidebar category label from the folder name (e.g., "01-introduction" becomes "01 Introduction"). The 10 exercise chapter directories all have README.md files that control their labels (e.g., "Chapter 1: Asking Better Questions"). These 3 directories will display raw folder names in the sidebar.

---

### 2. Quiz files missing sidecar files (10 quizzes x 2 sidecars = 20 missing files)

| #    | Directory                           | Missing Files                                                        | Severity |
| ---- | ----------------------------------- | -------------------------------------------------------------------- | -------- |
| 4-23 | All 10 exercise chapter directories | Every quiz file is missing both `.flashcards.yaml` and `.summary.md` | Low      |

**Details:** All 10 quiz files (`05_chapter_01_quiz.md` through `05_chapter_10_quiz.md`) are missing both sidecar files. Every non-quiz lesson file has both sidecars. This is a consistent omission across all chapters, suggesting it was a deliberate decision or a systematic gap in the production pipeline.

**Impact:** No flashcards or summaries will be generated for quiz pages. This may be intentional (quizzes are assessments, not teaching content), but for consistency every .md file should have sidecars.

---

### 3. Quiz file naming inconsistency (2 patterns across 10 files)

| #   | Pattern                                                 | Files   | Chapters                   |
| --- | ------------------------------------------------------- | ------- | -------------------------- |
| 24  | Underscore with chapter number: `05_chapter_NN_quiz.md` | 8 files | Ch 1, 2, 5, 6, 7, 8, 9, 10 |
| 25  | Hyphen without chapter number: `05-chapter-quiz.md`     | 2 files | Ch 3, 4                    |

**Details:**

- 8 quizzes use underscore delimiters with embedded chapter number: `05_chapter_01_quiz.md`, `05_chapter_02_quiz.md`, `05_chapter_05_quiz.md` through `05_chapter_10_quiz.md`
- 2 quizzes use hyphen delimiters with no chapter number: `05-chapter-quiz.md` (in directories 04 and 05)
- The underscore-pattern files were likely produced by a different writer batch than the hyphen-pattern files (chapters 3-4 were written together)

**Impact:** Functional -- both patterns work in Docusaurus and all have `sidebar_position: 5`. But the inconsistency is a maintenance concern and looks unprofessional in the file tree.

**Suggested fix:** Rename the 2 hyphen-pattern files to match the majority pattern:

- `04-thinking-in-systems/05-chapter-quiz.md` -> `05_chapter_03_quiz.md`
- `05-reasoning-from-first-principles/05-chapter-quiz.md` -> `05_chapter_04_quiz.md`

---

### 4. sidebar_position gaps in non-README directories

| #   | Directory               | Issue                                                                     | Severity |
| --- | ----------------------- | ------------------------------------------------------------------------- | -------- |
| 26  | `01-introduction`       | Positions start at 1 (no position 0 -- expected since there is no README) | Low      |
| 27  | `12-thinking-portfolio` | Positions start at 1 (same reason)                                        | Low      |
| 28  | `13-instructor-guide`   | Position starts at 1 (same reason)                                        | Low      |

**Impact:** If READMEs are added with sidebar_position: 0, the gap resolves. Without them, starting at 1 is fine -- Docusaurus does not require position 0.

---

### 5. Cross-reference links

| #   | Issue                               | Severity |
| --- | ----------------------------------- | -------- |
| --  | All cross-reference links validated | PASS     |

Every `](../path/file.md)` link in Part 0 resolves to an existing file. No broken links found.

---

### 6. YAML frontmatter completeness

| #   | Issue                               | Severity |
| --- | ----------------------------------- | -------- |
| --  | All .md files have YAML frontmatter | PASS     |

All 47 lesson/exercise .md files have complete frontmatter. Quiz files have minimal but valid frontmatter (sidebar_position + title).

---

### 7. No _category_.json files anywhere

| #   | Issue                                         | Severity |
| --- | --------------------------------------------- | -------- |
| 29  | No directory in Part 0 uses `_category_.json` | Info     |

All 13 directories rely on README.md for sidebar configuration (10 have them, 3 do not). This is internally consistent. No directory uses `_category_.json` as an alternative. The 3 directories without README.md have no sidebar configuration at all.

---

## Summary

| Category                                                       | Count  | Severity |
| -------------------------------------------------------------- | ------ | -------- |
| Missing README.md files                                        | 3      | Medium   |
| Missing quiz sidecar files (.flashcards.yaml + .summary.md)    | 20     | Low      |
| Quiz file naming inconsistency (2 of 10 use different pattern) | 2      | Low      |
| sidebar_position gaps (in dirs without README)                 | 3      | Low      |
| Broken cross-reference links                                   | 0      | --       |
| YAML frontmatter issues                                        | 0      | --       |
| **TOTAL ISSUES**                                               | **28** |          |

### By type:

- **Missing files:** 23 (3 READMEs + 20 quiz sidecars)
- **Naming inconsistency:** 2 (quiz filenames)
- **Configuration gaps:** 3 (sidebar_position starting at 1 instead of 0)
- **Broken links:** 0
- **Frontmatter issues:** 0

### Priority actions:

1. **Add 3 README.md files** for `01-introduction`, `12-thinking-portfolio`, `13-instructor-guide` (controls sidebar labels)
2. **Rename 2 quiz files** to match the majority `05_chapter_NN_quiz.md` pattern
3. **Decide on quiz sidecar policy** -- either generate sidecars for all 10 quizzes or document that quizzes intentionally omit them
