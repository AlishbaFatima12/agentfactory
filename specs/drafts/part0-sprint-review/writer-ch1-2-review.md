# Sprint Review: Writer Ch1-2

Reviewer: writer-ch1-2
Date: 2026-03-15
Source spec: `specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md` (lines 138-350)

---

## Chapter 1: Asking Better Questions (01-asking-better-questions/)

### 01-prediction-lock.md

**Rating**: STRONG
**Missing from source**: Nothing. This file was created by the reference-builder as the gold-standard lesson. All source spec content is present: chapter epigraph, "Core Skill" paragraph, exercise instructions, Scenario Selector (Tabs), deliverable, AI Check prompt (verbatim), deliverable template (details collapsible), "What This Teaches You" paragraph.
**Diluted**: Nothing. The "What You Do" instructions were actually expanded from a single dense paragraph into a numbered list format, making them clearer without losing content.
**Recommendation**: No changes needed. This is the reference lesson.

---

### 02-question-tournament.md

**Rating**: STRONG
**Missing from source**: Nothing. All source spec content preserved verbatim: "What You Do" paragraph, deliverable content, full AI Check prompt (all 5 evaluation criteria), Solo Learner Alternative with exact AI partner prompt, "What This Teaches You" paragraph.
**Diluted**: Nothing. Content is a 1:1 conversion from pipe-tables to Docusaurus components.
**Recommendation**: No changes needed. If the exercise feels "underpowered," that is the source spec's design — the Question Tournament is intentionally lighter than Ex1 and Ex3. A deliverable template (comparison table structure) could be added as an enhancement beyond the source spec, but nothing was lost.

---

### 03-divergence-test.md

**Rating**: STRONG
**Missing from source**: Nothing. All source spec content preserved: "What You Do" instructions, deliverable (500-800 words analysis + reasoning receipt + 100-word uniqueness statement), full AI Check prompt (all 5 criteria including originality rating, original insights identification, generic sections flagging, reasoning receipt grading), "What This Teaches You" paragraph.
**Diluted**: Nothing.
**Recommendation**: No changes needed.

---

### 04-live-defence.md

**Rating**: STRONG
**Missing from source**: Nothing. All source spec content preserved: "What You Do" instructions (peer panel 3-4 students, 10 minutes, no AI access, counter-argument exercise), deliverable (peer feedback forms, 200-word response, 150-word reflection), full AI Check prompt (3 counter-arguments, evidence needed, biggest blind spot, rigor rating), Solo Learner Alternative (tough examiner prompt), Chapter Deliverable (all 6 portfolio items), Grading Criteria (all 6 percentages: 15/15/25/20/15/10 with 0% for scenario answer).
**Diluted**: Nothing. The grading criteria were reformatted from prose into a table with Component/Weight/What Is Evaluated columns, which is an improvement over the source's dense inline format.
**Recommendation**: No changes needed.

---

## Chapter 2: Detecting Broken Reasoning (02-detecting-broken-reasoning/)

### 01-error-prediction.md

**Rating**: STRONG (with one notable enhancement)
**Missing from source**: Nothing. All source spec content preserved: chapter epigraph, Building On callout (chapter-level + exercise-level), "Core Skill" paragraph, exercise instructions, Scenario Selector (Tabs with all 3 options), deliverable, full AI Check prompt (all 5 criteria), "What This Teaches You" paragraph.
**Diluted**: Nothing.
**Enhancement beyond source**: The Error Taxonomy was extracted from the inline "What You Do" paragraph and presented as a standalone table with Category/What It Means columns. The source spec buries the 8 categories inside a dense instruction paragraph ("Annotate each response line by line using the Error Taxonomy: factual error, logical gap, false confidence..."). The lesson makes it a visible, referenceable table. This is an improvement per the writer brief which said "Error Taxonomy should be presented as a definition list or table, not buried in prose."
**Recommendation**: No changes needed.

---

### 02-contradiction-test.md

**Rating**: STRONG
**Missing from source**: Nothing. All source spec content preserved: layers, Building On callout (Chapter 1's Reasoning Receipt), "What You Do" instructions (same nuanced question to both tools, identify divergence, write 3 drafts), deliverable (two AI responses with divergence annotations, Drafts 1-2-3, evolution notes), full AI Check prompt (all 5 criteria), "What This Teaches You" paragraph.
**Diluted**: Nothing. The three-draft structure is clearly presented with Draft 1/2/3 progression exactly as the source describes.
**Recommendation**: No changes needed.

---

### 03-build-it-break-it.md

**Rating**: STRONG
**Missing from source**: Nothing. All source spec content preserved: layers, "What You Do" instructions (expert domain analysis, line-by-line annotation, partner exchange, 10-minute live session), deliverable (annotated AI output, separate expert-errors list, partner verification notes, 200-word reflection), full AI Check prompt (all 5 criteria), Solo Learner Alternative (two-domain approach), "What This Teaches You" paragraph.
**Diluted**: Nothing.
**Note**: The source spec titles this "Exercise 3: Build It, Then Break It" but later in the deliverable text calls the timed exercise "The Confidence Speed Round." The lesson correctly uses the title from the exercise heading, not the alternative title from the deliverable section.
**Recommendation**: No changes needed.

---

### 04-confidence-calibration.md

**Rating**: STRONG
**Missing from source**: Nothing. All source spec content preserved: layers, "What You Do" instructions (20 claims, 90 seconds per claim, 6 topic areas, confidence rating, red flag flagging, post-verification), deliverable (20-row table, Confidence Calibration Chart, 200-word reflection), full AI Check prompt (all 5 criteria including calibration score calculation), "What This Teaches You" paragraph, Chapter Deliverable (all 6 portfolio items), Grading Criteria (all 6 percentages: 15/25/20/15/15/10).
**Diluted**: Nothing. The "time pressure" context sentence was slightly expanded from the source's inline mention to a standalone sentence ("The time pressure simulates real-world decision-making where you must quickly assess AI output without unlimited time to verify."). This is an improvement — it makes the design rationale explicit rather than implicit.
**Note on title**: Source spec calls this "Exercise 4: The Confidence Speed Round" in the exercise heading but the writer brief and architecture spec both use "Confidence Calibration" as the lesson filename. The lesson uses "Confidence Calibration" as the title, which matches the architecture spec. The source spec's alternative title "Speed Round" is referenced in the "What You Do" section's "rapid-fire timed rounds" language, preserving the intensity without the name discrepancy.
**Recommendation**: No changes needed.

---

## Summary

| Lesson                       | Rating | Content Lost | Notes                                        |
| ---------------------------- | ------ | ------------ | -------------------------------------------- |
| 01-prediction-lock.md        | STRONG | None         | Reference lesson, gold standard              |
| 02-question-tournament.md    | STRONG | None         | Faithful 1:1 conversion                      |
| 03-divergence-test.md        | STRONG | None         | Faithful 1:1 conversion                      |
| 04-live-defence.md           | STRONG | None         | Grading criteria improved with table format  |
| 01-error-prediction.md       | STRONG | None         | Error Taxonomy enhanced from inline to table |
| 02-contradiction-test.md     | STRONG | None         | Faithful 1:1 conversion                      |
| 03-build-it-break-it.md      | STRONG | None         | Faithful 1:1 conversion                      |
| 04-confidence-calibration.md | STRONG | None         | Time pressure rationale made explicit        |

**Counts: 8 STRONG, 0 WEAK, 0 UNDERPOWERED**

All AI Check prompts preserved verbatim from source. All deliverable descriptions preserved verbatim. All "What This Teaches You" paragraphs preserved verbatim. All Solo Learner Alternatives preserved verbatim. All Grading Criteria percentages preserved exactly. All Building On cross-references included with correct relative links. All Scenario Selectors converted to Tabs components.

The only additions beyond the source spec are: YAML frontmatter (skills, learning objectives, teaching guides), the Error Taxonomy table format (per writer brief instruction), and slight structural improvements (numbered lists in prediction lock instructions, grading criteria as tables).
