---
name: assumption-autopsy
description: >
  Invoke when someone wants to examine, challenge, or surface the assumptions underlying their
  plan, decision, pitch, forecast, launch, or strategy. Key signals: "what am I assuming",
  "what am I not seeing", "what am I taking for granted", "assumptions baked in", "blind spots",
  "what could go wrong", "what else are we assuming", "what haven't we examined", or expressing
  nervousness about hidden risks in a specific proposal. Requires a concrete plan or decision
  to dissect -- not for generic frameworks (SWOT, decision matrices), template generation,
  monitoring setup, test plans, or open-ended pros/cons comparisons without a specific proposal.
---

# Assumption Autopsy

Every plan, solution, or strategy rests on assumptions the creator did not know they were making. The Assumption Autopsy makes these visible by combining human contextual awareness with AI structural analysis, then merging the results into a categorized risk matrix.

The core insight: humans catch contextual assumptions (cultural, personal, professional, political) that AI misses, while AI catches structural assumptions (logical, systemic, technical, economic) that humans take for granted. Category (d) -- assumptions found by neither but emerging during the merge process -- is the most valuable output.

## Two Modes

### Coach Mode (Socratic)

Use when the user wants to develop their own assumption-detection skill. Guide them through each step, asking them to produce their own lists before revealing yours. Do NOT front-load AI assumptions.

**Flow:**
1. Ask the user to state their plan/solution clearly
2. Ask them to list every assumption they can identify (wait for their response)
3. Only after they submit their list: reveal your independently-generated assumptions
4. Guide them through the 4-category merge
5. Facilitate risk assessment together

### Output Mode (Direct)

Use when the user wants a complete autopsy delivered. Run the full process internally and present the finished result.

**Flow:**
1. Receive the plan/solution (and any user-stated assumptions)
2. Generate your own independent assumption list
3. Produce the 4-category matrix
4. Deliver risk assessment and testability analysis

**Mode selection:** Default to Output Mode. Switch to Coach Mode if the user says "help me find", "teach me", "walk me through", or "I want to practice". If the user provides their own assumption list alongside their plan, treat their list as the "human" column and use Output Mode.

## The Process

### Step 1: State the Plan/Solution

Capture the plan, decision, strategy, or solution under examination. Identify:
- The goal or desired outcome
- The approach or method chosen
- The context and constraints mentioned
- What is NOT mentioned (scope boundaries, timeline, resources)

### Step 2: List Human Assumptions

In Coach Mode, prompt the user to list their assumptions across these dimensions:
- **Market/audience assumptions** (who wants this, why, how much they'll pay)
- **Technical assumptions** (what's feasible, what tools exist, performance expectations)
- **Resource assumptions** (time, money, people, skills available)
- **Environmental assumptions** (competitors, regulations, market conditions)
- **Behavioral assumptions** (how people will act, adopt, respond)
- **Temporal assumptions** (sequencing, deadlines, what comes first)

In Output Mode with user-provided assumptions, use their list directly. In Output Mode without user assumptions, generate a representative "human perspective" list noting it as AI-generated.

### Step 3: Identify AI Assumptions

Generate your own independent assumption list. Focus on structural and systemic assumptions humans commonly miss:
- **Logical dependencies** (X requires Y, but Y was never discussed)
- **Scale assumptions** (works at current size, but what about 10x?)
- **Failure mode assumptions** (assumes nothing breaks, no edge cases)
- **Integration assumptions** (assumes components work together seamlessly)
- **Knowledge assumptions** (assumes certain expertise exists)
- **Measurement assumptions** (assumes you can track what matters)
- **Survivorship bias** (assumes success patterns apply to your situation)

Generate at least 5-8 assumptions. Push beyond the obvious.

### Step 4: Merge into 4-Category Matrix

Categorize every assumption discovered:

| Category | Label | Description |
|----------|-------|-------------|
| **(a)** | Human Only | Found by the human but not by AI. Often contextual, cultural, political, or personal assumptions. |
| **(b)** | AI Only | Found by AI but not by human. Often structural, systemic, logical, or scale-related assumptions. |
| **(c)** | Both | Found independently by both. These are the most obvious assumptions -- if both found them, they are visible. |
| **(d)** | Emerged During Merge | Found by neither independently, but surfaced through the synthesis process. These are the highest-value discoveries. |

**Category (d) generation:** Actively look for assumptions that emerge from the interaction between items. When you see a human assumption and an AI assumption side by side, ask: "What assumption connects these two that neither of us stated?" Spend deliberate effort here -- this is where the real value is.

### Step 5: Risk-Assess Each Assumption

For every assumption in the matrix, assign:

| Risk Level | Definition | Action |
|------------|------------|--------|
| **Reasonable** | Safe to proceed with. Evidence supports this. Low consequence if wrong. | Monitor but do not block. |
| **Risky** | Could derail the plan if wrong. Moderate-to-high consequence. Limited evidence. | Mitigate before proceeding. |
| **Needs Testing** | Unknown whether true. High consequence if wrong. Can be validated. | Design a test before committing. |

### Step 6: Identify Testable Assumptions

For each assumption marked "Needs Testing" or "Risky", provide:
- **What to test**: The specific claim to validate
- **How to test**: A concrete, low-cost method (survey, prototype, data analysis, expert interview, small experiment)
- **Test timeline**: How long the test would take
- **Decision threshold**: What result would change your plan?

## Output Formats

### 4-Category Assumption Matrix

```markdown
## Assumption Matrix

### (a) Found by Human Only
| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | [assumption text] | Contextual/Cultural/Personal | Reasonable/Risky/Needs Testing |

### (b) Found by AI Only
| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | [assumption text] | Structural/Systemic/Logical | Reasonable/Risky/Needs Testing |

### (c) Found by Both
| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | [assumption text] | [type] | Reasonable/Risky/Needs Testing |

### (d) Emerged During Merge
| # | Assumption | Triggered By | Risk Level |
|---|-----------|-------------|------------|
| 1 | [assumption text] | [which (a)+(b) items sparked this] | Reasonable/Risky/Needs Testing |
```

### Risk Assessment Summary

```markdown
## Risk Assessment

| Assumption | Category | Risk Level | If Wrong, Impact | Testable? | Test Method |
|-----------|----------|------------|-----------------|-----------|-------------|
| [name]    | (a/b/c/d)| Risky      | [consequence]   | Yes       | [method]    |

### Critical Path Assumptions
[List the 3-5 assumptions that, if wrong, would invalidate the entire plan]

### Recommended Test Sequence
1. [Test X first -- fastest to run, highest impact on decision]
2. [Test Y second -- depends on X result]
3. [Test Z -- longer timeline, do in parallel]
```

## Quality Checks

Before delivering an Assumption Autopsy, verify:

1. **All 4 categories populated** -- If category (a) or (d) is empty, you have not pushed hard enough. Revisit.
2. **At least 3 assumptions the user missed** -- Category (b) should have substantive items, not trivial ones.
3. **Risk levels assigned to every assumption** -- No assumption left unrated.
4. **Testability identified** -- Every "Risky" or "Needs Testing" assumption has a concrete test method.
5. **Category (d) has genuine emergent items** -- These should not be restatements of (a) or (b) items. They emerge from synthesis.
6. **Contextual vs structural pattern noted** -- Explicitly state which side (human vs AI) caught which type.
7. **Critical path assumptions identified** -- Which 3-5 assumptions, if wrong, kill the plan?
8. **Assumption types are diverse** -- Cover market, technical, resource, behavioral, temporal, and environmental dimensions.
9. **Test sequence is prioritized** -- Fastest/cheapest tests first, ordered by decision impact.
10. **No circular assumptions** -- Assumption A does not depend on Assumption B which depends on A.

## When Evaluating Existing Assumptions

If the user provides an existing assumption list for evaluation (rather than a plan to autopsy):

1. **Completeness check** -- What categories of assumptions are missing entirely? (Use the dimension list from Step 2 and Step 3)
2. **Depth check** -- Are assumptions surface-level ("customers want this") or deep ("customers with X profile in Y market segment during Z economic conditions want this at price point P")?
3. **Independence check** -- Are any assumptions actually the same assumption restated? Are any dependent on each other?
4. **Testability check** -- Which assumptions are testable and which are articles of faith?
5. **Risk ordering** -- Rank assumptions by consequence-of-being-wrong, not by likelihood-of-being-wrong
6. **Missing structural assumptions** -- Add the systemic/logical/scale assumptions they likely missed
7. **Missing contextual assumptions** -- Flag if they missed cultural, political, or personal context assumptions

## Thinking Scorecard

Rate the assumption autopsy quality across these dimensions:

| Dimension | Level 1 (Novice) | Level 2 (Developing) | Level 3 (Proficient) | Level 4 (Expert) |
|-----------|-----------------|---------------------|---------------------|-----------------|
| **Assumption Breadth** | Lists 1-3 obvious assumptions | Covers 4-6 assumptions across 2-3 dimensions | Covers 7-10 assumptions across 4+ dimensions | 10+ assumptions across all dimension types with interconnections mapped |
| **Category (d) Quality** | No emerged assumptions | 1 emerged assumption, basic | 2-3 emerged assumptions showing genuine synthesis | 4+ emerged assumptions revealing deep structural insights |
| **Risk Discrimination** | All assumptions rated same level | Some differentiation but inconsistent criteria | Clear criteria applied consistently; critical path identified | Nuanced risk assessment with conditional dependencies and cascading failure analysis |
| **Testability Design** | No test methods proposed | Vague tests ("do research") | Specific tests with methods and timelines | Tests with decision thresholds, cost estimates, and sequencing logic |
| **Self-Awareness** | Cannot identify own blind spots | Recognizes blind spots after AI reveals them | Predicts what types of assumptions they will miss | Articulates their systematic blind spot pattern and compensates proactively |
