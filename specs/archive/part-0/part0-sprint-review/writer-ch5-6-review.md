# Sprint Review: writer-ch5-6

Reviewer: writer-ch5-6
Source: `specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md` (lines 549-752)
Lesson paths: `05-communicating-what-matters/` and `06-working-with-ai-not-for-ai/`

---

## Chapter 5: Communicating What Matters

### 01-audience-prediction.md

**Rating**: WEAK
**Missing from source**:

- Source "What You Do" paragraph names the specific default scenario inline: "Our company should migrate from a monolithic architecture to microservices." My version genericizes this to "You receive a technical decision" without naming the default scenario in the instructions paragraph. The source makes the scenario concrete in the prose before offering alternatives.
- Source AI Check prompt explicitly names the three stakeholders: "skeptical CTO, cost-conscious CFO, non-technical CEO." My version drops these specific names from the AI Check, using generic "what each stakeholder cares about." This weakens the prompt because the AI evaluator loses the stakeholder-specific context.
- Source exercise title is "Three Audiences, One Decision" -- my heading matches this, but the YAML title says "The Audience Prediction" which does not match the source exercise name.
  **Diluted**: The "What You Do" section was condensed from source's single detailed paragraph into a shorter, less specific version. Source says "write audience profiles for three stakeholders: a skeptical CTO, a cost-conscious CFO, and a non-technical CEO" -- mine says "write audience profiles for three stakeholders" without naming them in the body text.
  **Recommendation**:

1. Restore the specific scenario name in the "What You Do" paragraph: "Our company should migrate from a monolithic architecture to microservices."
2. Restore stakeholder names in the AI Check prompt to match source verbatim.
3. Consider aligning YAML title with source exercise name "Three Audiences, One Decision."

### 02-live-adaptation.md

**Rating**: WEAK
**Missing from source**:

- Source lists layers as "Layer 3 (Live Defence), Layer 4 (Contradiction Challenge)." My version drops Layer 4 entirely, listing only "Layer 3 (Live Defence)." This is a factual deviation from the source spec.
- Source says "Prepare a 3-minute pitch for the migration decision." My version says "Prepare a 3-minute pitch for the decision from Exercise 1" which is equivalent but less specific -- it does not say "migration decision."
  **Diluted**: Minor. The content is otherwise faithful.
  **Recommendation**:

1. Add Layer 4 (Contradiction Challenge) back to the Layers Used line to match source.
2. Optionally restore "migration decision" for specificity.

### 03-the-hard-conversation.md (contains: The Rewrite Diagnosis, Ex3)

**Rating**: STRONG
**Missing from source**: Nothing significant. All deliverable content, AI Check prompt, "What This Teaches You" section, and Building On reference are preserved verbatim from source.
**Diluted**: None. The content faithfully reproduces the source.
**Recommendation**: No changes needed.

### 04-communication-retrospective.md (contains: The Hard Conversation, Ex4)

**Rating**: STRONG
**Missing from source**: Nothing significant. All deliverable content, AI Check prompt, Solo Learner Alternative, "What This Teaches You" section, Chapter Deliverable, and Grading Criteria are preserved from source. Grading criteria percentages match exactly (15/25/20/25/15).
**Diluted**: None.
**Recommendation**: No changes needed.

---

## Chapter 6: Working With AI, Not For AI

### 01-three-path-comparison.md

**Rating**: WEAK
**Missing from source**:

- Source has a "Building On" callout specific to Exercise 1: "Every chapter so far. This exercise explicitly compares what you can do alone vs. with AI -- measuring the value of all previous skills." My version does not include this as a per-exercise Building On; instead it is merged into the chapter-level Building On at the top of the file. The source treats this as a distinct exercise-level callout.
- Source exercise title is "The Three-Path Problem." My version uses "The Three-Path Comparison." This is a name deviation from the source.
- Source "What You Do" paragraph names the specific default problem inline: "Design a go-to-market strategy for an AI-powered legal document review tool targeting mid-size law firms." My version genericizes to "You receive a complex business problem" and moves the scenario to tabs only. The source makes the default scenario concrete in the prose.
  **Diluted**: The "What You Do" section was restructured from source's single paragraph into a lettered list (a/b/c) with separate lines. Content is equivalent but the format differs from source style.
  **Recommendation**:

1. Add a per-exercise Building On callout matching source: "Every chapter so far. This exercise explicitly compares what you can do alone vs. with AI."
2. Consider aligning exercise name to source: "The Three-Path Problem" instead of "The Three-Path Comparison."
3. Restore the specific default scenario in the "What You Do" prose.

### 02-collaboration-log.md

**Rating**: STRONG
**Missing from source**: Nothing significant. All content preserved: What You Do, deliverable, AI Check prompt (all 6 numbered items), Deliverable Template, and What This Teaches You.
**Diluted**: None. The Deliverable Template was faithfully converted from source pipe-table to proper markdown table with collapsible details.
**Recommendation**: No changes needed.

### 03-the-override-test.md

**Rating**: STRONG
**Missing from source**: Nothing significant. All content preserved: Building On reference, What You Do, deliverable (all 5 items), AI Check prompt (all 5 numbered items), and What This Teaches You. The Building On callout is slightly expanded from source but preserves the core message.
**Diluted**: None.
**Recommendation**: No changes needed.

### 04-dependency-audit.md

**Rating**: STRONG
**Missing from source**: Nothing significant. All content preserved: What You Do, deliverable, AI Check prompt (all 6 numbered items), What This Teaches You, Chapter Deliverable, and Grading Criteria. Grading percentages match exactly (20/25/25/15/15).
**Diluted**: None.
**Recommendation**: No changes needed.

---

## Summary

| Rating       | Count | Lessons                                                                                                                   |
| ------------ | :---: | ------------------------------------------------------------------------------------------------------------------------- |
| STRONG       |   5   | 03-the-hard-conversation, 04-communication-retrospective, 02-collaboration-log, 03-the-override-test, 04-dependency-audit |
| WEAK         |   3   | 01-audience-prediction, 02-live-adaptation, 01-three-path-comparison                                                      |
| UNDERPOWERED |   0   | --                                                                                                                        |

### Top Priority Fixes

1. **02-live-adaptation.md**: Add Layer 4 (Contradiction Challenge) to Layers Used -- factual error vs source.
2. **01-audience-prediction.md**: Restore specific stakeholder names in AI Check prompt and specific scenario in What You Do prose.
3. **01-three-path-comparison.md**: Add per-exercise Building On callout and restore specific default scenario in What You Do prose.
