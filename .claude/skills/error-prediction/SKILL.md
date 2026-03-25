---
name: error-prediction
description: >
  Predicts and categorizes errors in AI outputs using an 8-category Error Taxonomy before
  and after reviewing AI-generated content. Use whenever the user wants to evaluate AI output
  quality, says "check this AI response", "is this accurate", "error check", "fact check this",
  "what did AI get wrong", "evaluate this analysis", "audit this output", or needs to
  systematically assess AI-generated content for factual errors, logical gaps, false confidence,
  missing context, correlation-causation confusion, outdated information, fabricated citations,
  or cultural blind spots. Also trigger when reviewing vendor analyses, market research, or
  any AI-assisted deliverable.
---

# Error Prediction & Taxonomy

Systematic evaluation of AI-generated content using a structured Error Taxonomy. This skill transforms vague skepticism ("don't trust AI") into precise, categorized analysis of where and how AI reasoning breaks down.

The core insight: predicting errors BEFORE seeing AI output builds a mental model of AI failure modes that is far more valuable than catching errors after the fact. Error detection is a trainable skill with specific categories, not just a feeling.

---

## Two Modes

### Coach Mode (Prediction-First)

Use when the user wants to BUILD their error detection skill. The user predicts errors before seeing the AI output, then compares predictions against reality.

**Flow:**
1. User states what correct analysis should cover (key factors, tradeoffs, data needed)
2. User predicts where AI will be STRONG
3. User predicts where AI will make ERRORS — naming specific taxonomy categories and WHY
4. User reviews AI output
5. Agent annotates line-by-line with taxonomy categories
6. Agent builds Prediction vs Reality comparison table
7. Agent scores prediction accuracy

### Output Mode (Direct Annotation)

Use when the user already has AI output and wants it evaluated immediately. Skip the prediction phase.

**Flow:**
1. User provides AI-generated content
2. Agent annotates every claim line-by-line using the 8-category taxonomy
3. Agent produces error count summary
4. Agent highlights non-obvious errors with explanations
5. Agent rates overall output reliability

**Default**: If the user provides AI output without mentioning predictions, use Output Mode. If the user mentions "predict", "before I look", "sealed prediction", or "what will AI get wrong", use Coach Mode.

---

## The Process

### Step 1: Establish Ground Truth Expectations

Before annotating, determine what a correct analysis SHOULD cover:
- What are the key factors, tradeoffs, and data points a thorough analysis requires?
- What domain expertise is needed?
- What recent developments might affect accuracy?

### Step 2: Predict AI Strengths (Coach Mode only)

Identify where AI is likely to perform well:
- Well-documented topics with clear consensus
- Structured comparisons and taxonomies
- Historical facts with multiple sources

### Step 3: Predict AI Weaknesses (Coach Mode only)

Identify where AI is likely to fail, mapped to specific taxonomy categories:
- Which categories of error are most likely given this topic?
- Why would AI struggle with this specific aspect?

### Step 4: Annotate Line-by-Line

Go through the AI output sentence by sentence. For every claim:
- If correct: mark as `[NO ERROR]`
- If problematic: mark with the taxonomy category and explain WHY it is an error

Format each annotation as:
```
> "AI's exact claim here"
[CATEGORY] Explanation of what is wrong and what the correct information/reasoning is.
```

### Step 5: Build Comparison Table (Coach Mode)

Compare predicted errors against actual errors found.

### Step 6: Produce Error Summary

Count errors by category. Identify patterns. Rate overall reliability.

---

## The Error Taxonomy

### 1. Factual Error
**Definition**: A claim that is demonstrably false.
**Example**: "Python was created in 2001" (actually 1991).
**Detection strategy**: Cross-reference specific claims (dates, numbers, names, events) against known facts. Pay special attention to statistics and quantitative claims.

### 2. Logical Gap
**Definition**: A conclusion that does not follow from the premises given.
**Example**: "Company X grew 50% last year, so they will grow 50% next year." The past growth rate does not guarantee future performance.
**Detection strategy**: For every conclusion, trace it back to its supporting evidence. Ask: "Does the evidence ACTUALLY support this specific conclusion, or just a weaker version of it?"

### 3. False Confidence
**Definition**: Stating uncertain information with unjustified certainty.
**Example**: "This approach will definitely reduce costs by 30%" when the actual range is highly variable.
**Detection strategy**: Look for absolute language (definitely, always, never, will, guaranteed) applied to inherently uncertain predictions or estimates. Check for missing confidence intervals, caveats, or "it depends" qualifications.

### 4. Missing Context
**Definition**: Omitting crucial factors that would change the analysis if included.
**Example**: Recommending a technology stack without mentioning the team has zero experience with it.
**Detection strategy**: Ask "What important factor is NOT discussed here that a domain expert would immediately raise?" Check for missing stakeholders, constraints, risks, prerequisites, or alternative perspectives.

### 5. Correlation-Causation Confusion
**Definition**: Treating a correlation as proof of causation.
**Example**: "Countries with more ice cream sales have higher crime rates, so ice cream causes crime."
**Detection strategy**: When AI presents a relationship between two things, ask: "Is there a demonstrated causal mechanism, or just a pattern? Could a third factor explain both?"

### 6. Outdated Information
**Definition**: Using data or facts that are no longer current.
**Example**: Citing 2019 market share data in a 2026 analysis of a rapidly changing industry.
**Detection strategy**: Check dates on any statistics, market data, regulatory references, or technology capabilities. AI training data has a cutoff — recent developments may be missing or wrong.

### 7. Fabricated Citation
**Definition**: Referencing a source that does not exist.
**Example**: "According to a 2024 Harvard Business Review study..." when no such study exists.
**Detection strategy**: Be suspicious of overly specific citations (author names, journal titles, dates) that cannot be verified. AI frequently generates plausible-sounding but nonexistent references.

### 8. Cultural Blind Spot
**Definition**: Assuming one cultural, geographic, or regulatory context applies universally.
**Example**: Advising on labor law without specifying jurisdiction, defaulting to US assumptions.
**Detection strategy**: Check whether the analysis specifies its geographic/cultural scope. Ask: "Would this advice be different in a different country, culture, or regulatory environment?"

---

## Output Formats

### Annotation Format

```markdown
## Error Annotation: [Title of AI Output]

### Claim-by-Claim Analysis

> "First sentence or claim from AI output"
[NO ERROR] — Correct.

> "Second sentence or claim"
[FALSE CONFIDENCE] This states "will definitely" but the outcome depends on market conditions,
team execution, and competitor response. Should say "may" or "is likely to, depending on..."

> "Third sentence or claim"
[MISSING CONTEXT] Omits the regulatory requirement that took effect in 2025, which
fundamentally changes the cost structure described here.
```

### Prediction vs Reality Comparison Table (Coach Mode)

```markdown
| Predicted Error | Category | Did It Happen? | Actual Error Found (if different) |
|-----------------|----------|----------------|-----------------------------------|
| Will miss regulatory changes | Missing Context | YES | Missed 2025 EU AI Act requirements |
| Will cite fake study | Fabricated Citation | NO | Citations were vague but not fabricated |
| Will overstate ROI | False Confidence | YES | Stated "guaranteed 3x ROI" without evidence |

**Prediction Accuracy**: 2/3 (67%)
```

### Error Count Summary

```markdown
| Error Category                  | Count | Severity |
|---------------------------------|-------|----------|
| Factual Error                   | 2     | High     |
| Logical Gap                     | 1     | Medium   |
| False Confidence                | 4     | High     |
| Missing Context                 | 3     | High     |
| Correlation-Causation Confusion | 0     | —        |
| Outdated Information            | 1     | Medium   |
| Fabricated Citation             | 0     | —        |
| Cultural Blind Spot             | 1     | Low      |
| **Total Errors**                | **12**|          |

**Overall Reliability**: LOW — 12 errors across 8 categories, with concentration in
False Confidence and Missing Context. Do not use this analysis for decision-making
without independent verification.
```

---

## Quality Checks

Before finalizing any error annotation, verify:

1. **Every claim annotated**: No sentence in the AI output was skipped. Each is marked `[NO ERROR]` or tagged with a category.
2. **Category correctly applied**: Each error is tagged with the RIGHT taxonomy category, not just "this is wrong." Review: is this really a Factual Error or is it actually False Confidence?
3. **Explanation provided**: Every error tag includes a specific explanation of WHY it is wrong and what the correct information/reasoning should be. Never just label without explaining.
4. **False positives checked**: Re-read items marked as errors. Are you flagging something because you disagree with it, or because it is objectively an error? Disagreement is not the same as error.
5. **False negatives checked**: Re-read items marked `[NO ERROR]`. Did you give the AI a pass on vague or hedge-y language that actually conceals an error? Did you miss subtle logical gaps?
6. **Non-obvious errors identified**: At least one error should be something that is not immediately obvious — something that sounds plausible but fails under scrutiny. If all your errors are surface-level, look deeper.
7. **Error count is plausible**: A typical AI-generated analysis of a complex topic contains 5-15 errors. If you found 0, you missed errors. If you found 30+, you may be over-flagging.
8. **Severity assessed**: Not all errors are equal. A fabricated citation is more damaging than a minor missing context. Note severity.
9. **Pattern identification**: Look for clusters. If 5 of 12 errors are False Confidence, that is a pattern worth calling out — it suggests the AI was asked for certainty on an uncertain topic.

---

## When Evaluating Existing Reviews

When asked to assess someone else's error analysis (e.g., a student's annotations):

1. **Check for false positives**: Items the reviewer marked as errors that are actually correct. This is the most common mistake — reviewers who are learning the taxonomy over-flag.
2. **Check for false negatives**: Errors the reviewer missed entirely. Focus on the non-obvious categories (Logical Gap, Missing Context, Cultural Blind Spot) which are harder to catch than Factual Errors.
3. **Check for miscategorization**: Errors that exist but are tagged with the wrong category. Example: tagging "This will definitely work" as Factual Error when it is actually False Confidence.
4. **Rate detection accuracy**: (Correct annotations / Total claims) as a percentage.
5. **Identify blind spots**: Which error categories does this reviewer consistently miss? This is the most actionable feedback.
6. **Assess prediction quality** (Coach Mode): Were their predictions specific and testable, or vague? Did they predict the right categories even if the specific instances differed?

---

## Thinking Scorecard

When evaluating error prediction and annotation work, assess these dimensions:

| Dimension | Level 1 (Developing) | Level 2 (Competent) | Level 3 (Advanced) |
|-----------|----------------------|---------------------|---------------------|
| **Prediction Specificity** | Vague predictions ("AI will make mistakes") | Category-specific predictions ("AI will show False Confidence on ROI claims") | Category + mechanism predictions ("AI will show False Confidence on ROI because training data lacks post-2024 market corrections") |
| **Taxonomy Accuracy** | Frequently miscategorizes errors | Correct category 70%+ of the time | Correct category 90%+ with nuanced edge cases handled |
| **Detection Depth** | Catches only obvious factual errors | Catches factual errors + false confidence + missing context | Catches subtle logical gaps, cultural blind spots, and correlation-causation issues |
| **False Positive Control** | Flags disagreements as errors | Distinguishes disagreement from error most of the time | Only flags genuine errors with clear evidence |
| **Pattern Recognition** | Lists errors individually | Groups errors by category and notes frequency | Identifies root causes ("AI was asked for certainty on uncertain topic, producing 5 False Confidence errors") |
