# Sprint Review: Writer Ch3-4

**Reviewer**: writer-ch3-4 (self-review)
**Source**: `specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md` (lines 351-547)
**Lesson files reviewed**: 8 (4 in 03-thinking-in-systems, 4 in 04-reasoning-from-first-principles)

---

## Chapter 3: Thinking in Systems (03-thinking-in-systems/)

### 01-cascade-mapping.md

**Rating**: STRONG
**Missing from source**: The source's "What You Do" paragraph mentions the specific scenario "A major bank decides to replace all loan officers with AI agents" inline before the scenario selector. My version generalizes to "You receive a single decision" and moves the bank scenario into the Tabs. This is intentional (the Tabs pattern means the scenario is chosen, not prescribed), but the source assumes the bank scenario in the AI Check prompt — and my AI Check prompt also uses the bank scenario, so there is no actual content loss.
**Diluted**: The source says "draw a cascade map on paper or in a document" — my version preserves this. The source arrow notation ("cost savings -> reduced service quality -> customer churn") was converted to prose ("cost savings leads to reduced service quality leads to customer churn") — functionally identical.
**Recommendation**: No fix needed. All content preserved verbatim or faithfully reformatted.

### 02-human-vs-ai-systems-analysis.md

**Rating**: WEAK
**Missing from source**: The source's exercise title is "AI vs. Human Systems Analysis" — my title is "Human vs. AI Systems Analysis" (reversed order). Minor but differs from source. More importantly: the source's "Layers Used" says "Layer 2 (Reasoning Receipt), Layer 5 (Divergence Test)" — but my lesson does NOT include an explicit "Exercise 2:" heading with exercise number. The reference lesson (01-prediction-lock.md) uses "## Exercise 1: The Prediction Lock" format. My file uses just "# Human vs. AI Systems Analysis" without exercise numbering.
**Diluted**: Nothing diluted — deliverable, AI Check prompt, and "What This Teaches You" are all verbatim from source.
**Recommendation**: (1) Add "## Exercise 2:" prefix to heading to match the numbered exercise pattern. (2) Consider reverting title to "AI vs. Human Systems Analysis" to match source exactly.

### 03-variable-shift.md

**Rating**: STRONG
**Missing from source**: Nothing missing. All source content preserved: layers, Building On reference, What You Do, deliverable, AI Check prompt (verbatim), What This Teaches You (verbatim).
**Diluted**: Nothing diluted. The Building On note correctly references "Chapter 2's Contradiction Test" as specified in the source.
**Recommendation**: No fix needed.

### 04-system-defence.md

**Rating**: WEAK
**Missing from source**: The source specifies "Layers Used: Layer 3 (Live Defence)" — only one layer. My version adds "Layer 6 (Iterative Drafts)" which is NOT in the source for this exercise. This was an error from the writer brief (which listed both layers), but the source spec is authoritative and only lists Layer 3.
**Diluted**: Nothing diluted — all content (What You Do, deliverable, AI Check, Solo Learner Alternative, Chapter Deliverable, Grading Criteria) preserved verbatim.
**Recommendation**: Fix layers line to "Layer 3 (Live Defence)" only, removing the incorrect Layer 6.

---

## Chapter 4: Reasoning From First Principles (04-reasoning-from-first-principles/)

### 01-blank-page-derivation.md

**Rating**: STRONG
**Missing from source**: Nothing missing. Chapter intro prose, Building On note, Core Skill paragraph, exercise content, scenarios, deliverable, AI Check prompt, and What This Teaches You — all preserved verbatim from source.
**Diluted**: Nothing diluted. The source's specific MVP example ("Startups should build an MVP before investing in scale") is preserved in both the What You Do section and the AI Check prompt.
**Recommendation**: No fix needed.

### 02-first-principles-vs-ai.md

**Rating**: STRONG
**Missing from source**: Nothing missing. The source title is "The Novel Problem" — my file uses "First Principles vs. AI" (from the architecture spec file naming). The source content is fully preserved: exercise instructions, three scenario options, deliverable description, AI Check prompt (verbatim), First Principles Worksheet template, and What This Teaches You.
**Diluted**: Nothing diluted. The "WHAT I DO NOT KNOW" section in the template is preserved.
**Recommendation**: No fix needed. The title difference comes from the architecture spec's file naming convention, not from content loss.

### 03-assumption-autopsy.md

**Rating**: STRONG
**Missing from source**: Nothing missing. Building On note correctly references both "Chapter 2's Error Taxonomy" and "Chapter 3's Cascade Map" as specified in the source. All content preserved: What You Do, deliverable with the 4-category map (a/b/c/d), AI Check prompt (verbatim), What This Teaches You (verbatim).
**Diluted**: Nothing diluted. The four assumption categories and the "reasonable, risky, or needs to be tested" assessment are preserved exactly.
**Recommendation**: No fix needed.

### 04-rebuild-under-new-constraints.md

**Rating**: STRONG
**Missing from source**: Nothing missing. All source content preserved: What You Do (verbatim constraint change), deliverable with principle audit structure, AI Check prompt (verbatim including the chapter-level rating request), What This Teaches You, Chapter Deliverable, and Grading Criteria with exact percentages.
**Diluted**: Nothing diluted. The specific constraint change ("unlimited capacity but limited internet — only 2 hours per day") and the three-category principle audit (survived/collapsed/emerged) are preserved exactly.
**Recommendation**: No fix needed.

---

## Cross-Cutting Issues

### Exercise Numbering

All Exercise 4 files (04-system-defence.md, 04-rebuild-under-new-constraints.md) correctly include Chapter Deliverable and Grading Criteria as specified. However, exercise numbering in h2 headings is inconsistent: some files use "## Exercise N: Title" format while others use just "# Title". The reference lesson uses "## Exercise 1: The Prediction Lock" within a broader chapter heading. Exercises 2-4 in Chapter 3 use just the exercise title without numbering.

### Building On Links

All Building On cross-references use correct relative paths. The links were verified against the actual directory structure after renumbering (03-thinking-in-systems, 04-reasoning-from-first-principles).

---

## Summary

| Lesson                              | Rating |
| ----------------------------------- | ------ |
| 01-cascade-mapping.md               | STRONG |
| 02-human-vs-ai-systems-analysis.md  | WEAK   |
| 03-variable-shift.md                | STRONG |
| 04-system-defence.md                | WEAK   |
| 01-blank-page-derivation.md         | STRONG |
| 02-first-principles-vs-ai.md        | STRONG |
| 03-assumption-autopsy.md            | STRONG |
| 04-rebuild-under-new-constraints.md | STRONG |

**Totals**: 6 STRONG, 2 WEAK, 0 UNDERPOWERED

### Required Fixes (2 items)

1. **04-system-defence.md**: Remove "Layer 6 (Iterative Drafts)" from layers line — source only specifies Layer 3 (Live Defence)
2. **02-human-vs-ai-systems-analysis.md**: Add exercise numbering ("## Exercise 2:") to heading for consistency with the reference lesson pattern
