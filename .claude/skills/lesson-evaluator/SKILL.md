---
name: lesson-evaluator
description: "Deep single-lesson evaluation with critical rating (out of 10), issue identification, and fix recommendations. Checks PRIMM-AI+ quality, Track A/B alignment, concrete callback accuracy, flow/placement, beginner accessibility, and Error Taxonomy integration. Use when iteratively refining individual lessons."
---

# Lesson Evaluator Skill

Critically evaluate a single lesson file and rate it out of 10. Identify specific issues with severity ratings and actionable fix recommendations. Designed for iterative refinement: evaluate -> fix -> re-evaluate until >= 9/10.

## When to Use

- Evaluating a single lesson for quality before committing
- Iterative refinement cycles (evaluate -> fix issues -> re-evaluate)
- Checking PRIMM-AI+ exercise quality and analogy coherence
- Verifying cross-chapter references and concrete callbacks
- User says "evaluate lesson X", "rate this lesson", "check lesson X"

## Evaluation Protocol

### Step 1: Read the Full Lesson

Read the entire lesson file. Note the lesson's position in the chapter (which axiom, which part of the book, what students know at this point).

### Step 2: Score (1-10 Scale)

| Score | Meaning |
|-------|---------|
| 9-10 | Publication-ready. Minor polish only. |
| 8-8.5 | Strong. 1-2 minor issues that don't block understanding. |
| 7-7.5 | Good foundation. 2-3 issues that need fixing. |
| 6-6.5 | Needs work. Multiple issues affecting quality. |
| < 6 | Significant revision needed. |

### Step 3: Check These Dimensions

Run through each dimension. For each, note whether it passes or has issues.

#### 3.1 Flow and Placement

- **Opening narrative**: Does it connect to the previous axiom/lesson naturally?
- **Historical Background**: Is it placed where it enriches context (after the relevant content), or does it interrupt flow (between axiom definition and From Principle to Axiom)?
- **From Principle to Axiom**: Does it appear right after the axiom definition? Does it have a Docusaurus link, concrete callback, comparison table, and bridge paragraph?
- **Section ordering**: Narrative -> Axiom Defined -> From Principle to Axiom -> Content sections -> Try With AI -> PRIMM-AI+ -> Trap/Warning -> Key Takeaways -> Looking Ahead

#### 3.2 Concrete Callback Accuracy (CRITICAL)

The "From Principle to Axiom" section references a specific earlier chapter (usually Chapter 6). **You MUST verify the callback is accurate:**

1. Identify which chapter/lesson is referenced
2. Read the actual source lesson file
3. Check: Does the callback describe something that actually exists in that lesson?
4. Flag fabricated examples (e.g., referencing "typed function signatures" when the source chapter uses plain English comparisons)

**Common failure**: AI generates plausible-sounding callbacks that reference examples, stories, or concepts that don't exist in the source chapter. Always verify.

#### 3.3 PRIMM-AI+ Quality

Check each PRIMM stage:

| Stage | Check |
|-------|-------|
| **Predict [AI-FREE]** | Scenario is concrete, relatable, and genuinely predictable. Not obvious. Includes confidence score prompt. |
| **Run** | Prompt is specific enough to produce useful AI comparison. References the prediction. |
| **Answer Key** | Present as collapsible `<details>` block after Run. Analyzes both predictions (what works, what fails). Not just restating the question. |
| **Investigate** | Goes DEEP — not surface-level. Connects the analogy back to the lesson's main story/example. Applies Error Taxonomy (names the specific error type). |
| **Parsons Problem** | (If present) Steps are genuinely scrambable. Answer is not obvious from reading. Includes follow-up question about modification. |
| **Modify** | Extends the scenario meaningfully. Tests understanding, not recall. |
| **Make [Mastery Gate]** | Produces a concrete artifact. Someone else could evaluate it. "This X is your mastery gate" statement present. |
| **Verification Ladder** | (If applicable — Axioms I, V, VII, IX, X only) References the correct rung. |

**Analogy coherence**: Does the PRIMM-AI+ analogy make sense throughout all stages? Does the same scenario thread from Predict through Make, or does it jump between unrelated examples?

#### 3.4 Track A vs Track B Alignment

**Track B** (Chapters 30-31): Conceptual reasoning, real-world scenarios, plain-English exercises. NO code, NO professional tools (Makefiles, pytest, SQL, Docker, git commands).

**Track A** (Chapters 33+): Code exercises with actual programming.

Check:
- All exercises use real-world analogies students understand
- No Try With AI prompts assume Python/bash/tool knowledge beyond what's been taught
- PRIMM-AI+ exercises are fully conceptual (for Ch 30-31)
- If code examples exist in the lesson body (for illustration), they have a `:::tip` explaining students don't need to know the syntax yet

#### 3.5 Beginner Accessibility

- Are there code blocks (Python, TOML, YAML, bash) without a `:::tip` explaining that students don't need to know the syntax yet?
- Are there references to tools (uv, pyright, ruff, pytest) without noting when students will learn them?
- Does the lesson assume knowledge students don't have at this chapter position?
- Reference points: bash covered in Chapter 11 (Part 2), uv setup in Chapter 32, Python syntax in Chapter 33

#### 3.6 Error Taxonomy Integration

Every PRIMM-AI+ Investigate section should apply the Error Taxonomy, naming one of:
- **Type error**: wrong data type/format
- **Logic error**: correct types but wrong reasoning
- **Specification error**: ambiguous or missing requirements
- **Data/edge-case error**: unexpected inputs not handled
- **Orchestration error**: responsibilities tangled or miscoordinated

#### 3.7 Try With AI Prompts

- Are there 3 prompts?
- Does each target a different skill/aspect?
- Does each have a "What you're learning" explanation?
- Are prompts appropriate for the student's knowledge level (Track B for Ch 30-31)?
- Do prompts build in difficulty (simple -> complex -> apply to your domain)?

#### 3.8 Key Takeaways and Looking Ahead

- Do Key Takeaways summarize the lesson's main points (not introduce new ideas)?
- Does Looking Ahead connect to the next axiom/lesson naturally?
- Is the progression thread maintained (what was learned, what comes next)?

### Step 4: Issue Report

For each issue found, report:

```
**Issue N (SEVERITY)**: [Title]
- **Location**: Line X or section name
- **Problem**: What's wrong
- **Fix**: Specific action to take
```

Severity levels:
- **HIGH**: Factual inaccuracy, fabricated callback, Track A in Track B, missing answer key
- **MEDIUM**: Flow interruption, shallow Investigate, missing `:::tip` for code blocks
- **MEDIUM-LOW**: Weak analogy, generic Modify question
- **LOW**: Minor wording, stylistic preference

### Step 5: Final Rating

```
**Rating: X/10**

Strengths:
- [What works well]

Issues: [N] total ([H] high, [M] medium, [L] low)
```

## Iterative Refinement Pattern

After fixes are applied:
1. Re-read the full lesson
2. Verify each fix actually resolved the issue
3. Check for new issues introduced by fixes
4. Re-rate
5. Target: >= 9/10 before committing

## Cross-Reference Verification Sources

| Axiom | References | Source File to Verify |
|-------|-----------|----------------------|
| I | Ch 6, Principle 1 (Bash is the Key) | `06-seven-principles/01-bash-is-the-key.md` |
| II | Ch 6, Principle 5 (Persisting State) | `06-seven-principles/05-persisting-state-in-files.md` |
| III | Ch 6, Principle 2 (Code as Universal Interface) | `06-seven-principles/02-code-as-universal-interface.md` |
| IV | Ch 6, Principle 4 (Small Reversible Decomposition) | `06-seven-principles/04-small-reversible-decomposition.md` |
| V | Ch 6, Principle 3 (Verification) | `06-seven-principles/03-verification-as-core-step.md` |
| VI | (varies) | Verify against actual source |
| VII | (varies) | Verify against actual source |
| VIII | Ch 6, Principle 5 or Ch 12 | Verify against actual source |
| IX | Ch 6, Principle 3 (Verification) | `06-seven-principles/03-verification-as-core-step.md` |
| X | (varies) | Verify against actual source |
