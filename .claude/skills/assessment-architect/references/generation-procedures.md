# Question Generation Procedures: Autonomous Reasoning Framework

This document contains the detailed procedural knowledge for autonomous question generation. Referenced during generation by Decision Framework and Background Task execution.

---

## Decision Tree for Question Type Selection

**For EACH extracted concept, use this decision tree to select question type:**

```
DECISION 1: Is this an exact value, definition, or factual recall?
  → YES: Precision Recall
        (Read distractor-generation-strategies.md Section 1A)
        (Distractors: off-by-one, unit errors, adjacent values)
  → NO: Go to Decision 2

DECISION 2: Does this concept pair/contrast with another concept?
  → YES: Conceptual Distinction
        (Read distractor-generation-strategies.md Section 2A-2C)
        (Distractors: surface-level confusion, reverse logic, common misconceptions)
  → NO: Go to Decision 3

DECISION 3: Does this require evaluating multiple criteria or constraints?
  → YES: Decision Matrix
        (Read distractor-generation-strategies.md Section 3A-3C)
        (Distractors: missing constraint, wrong priority, calculation error)
  → NO: Go to Decision 4

DECISION 4: Does this involve system components, flows, or architecture?
  → YES: Architecture Analysis
        (Read distractor-generation-strategies.md Section 4A-4C)
        (Distractors: wrong component role, swapped relationships, incomplete flow)
  → NO: Go to Decision 5

DECISION 5: Does this require calculation, comparison, or quantitative reasoning?
  → YES: Economic/Quantitative
        (Read distractor-generation-strategies.md Section 5A-5B)
        (Distractors: common calculation errors, unit conversion mistakes, off-by-factor)
  → NO: Go to Decision 6

DECISION 6: Does this require applying a framework or specification?
  → YES: Specification Design
        (Read distractor-generation-strategies.md Section 6A-6B)
        (Distractors: misapplied framework, partial application, alternative framework)
  → NO: Go to Decision 7

DECISION 7: Does this require judgment, trade-offs, or weighing alternatives?
  → YES: Critical Evaluation
        (Read distractor-generation-strategies.md Section 7A-7B)
        (Distractors: incomplete analysis, biased judgment, ignoring tradeoff)
  → NO: Go to Decision 8

DECISION 8: Does this require integrating multiple concepts into synthesis?
  → YES: Strategic Synthesis
        (Read distractor-generation-strategies.md Section 8A-8B)
        (Distractors: fragmented synthesis, wrong integration, missing connection)
  → NO: Research Extension (default for novel scenarios)
        (Read distractor-generation-strategies.md Section 9A)
        (Distractors: plausible extrapolations, related but wrong conclusions)
```

### Implementation During Generation

```python
# For each concept extracted:
question_type = decision_tree(concept)
strategy_section = get_strategy_section(question_type)  # e.g., "1A", "2B", "3A"
distractor_instructions = read_file("references/distractor-generation-strategies.md")
relevant_section = extract_section(distractor_instructions, strategy_section)
# Generate question using specific strategy from that section
```

---

## Background Task Implementation Template

**Each background task executes this template** (generates 20 questions for its range):

```
BACKGROUND TASK: Generate Batch [N] (Questions [Start]-[End])

SETUP:
├── Read shared questions_progress.json
├── Identify batch budget:
│   └── For EACH question type:
│       (total_target × target_percent / 100) / 5
│       = budget_per_batch per type
│   └── Example: Precision Recall = 10 total, 10%, so 2 per batch
├── Identify already-generated counts per batch
└── Calculate available budget for THIS batch

GENERATION LOOP (for Q[Start] through Q[End]):

  For EACH question in batch:
    1. EXTRACT CONCEPT
       └── Select testable concept from assigned lesson range
       └── Note: Complexity (factual/procedural/conceptual/evaluative)
       └── Note: Source section (for explanations)

    2. DECIDE QUESTION TYPE (AUTONOMY POINT)
       └── Use decision tree (above)
       └── Check budget: If type = Precision_Recall and batch budget exhausted, pick next type
       └── Verify type selection aligns with Bloom level target

    3. READ DISTRACTOR STRATEGY
       └── Use decision tree result → get strategy_section (e.g., "2A")
       └── Read references/distractor-generation-strategies.md [section]
       └── Extract specific procedure for this type

    4. GENERATE QUESTION
       ├── Formulate correct answer (simple, clear, 12-15 words target)
       ├── Generate 3 distractors per type-specific strategy
       ├── All options within ±3 words (check lengths)
       ├── All options at similar detail level (specificity balance)
       └── Verify distractors are ≥5% plausible

    5. VALIDATE CONTINUOUSLY (AUTONOMY POINT)
       ├── Update local position distribution: A/B/C/D counts
       ├── Check: Is position distribution still balanced?
       │   └── If B > 30% of batch so far → Force next Q answer to A/C/D
       │   └── If A+D < 40% of batch so far → Prefer next Q answer to A/D
       ├── Check: Are option lengths consistent?
       │   └── Collect word counts: [14, 18, 12, 15] vs median = 14.5
       │   └── If current question: [8, 8, 8, 20] → Rewrite to [10, 10, 10, 12]
       ├── Check: Type distribution still on track?
       │   └── Precision_Recall budget: If used 2 of 2, next questions CANNOT be Precision Recall
       └── Update questions_progress.json atomically with:
           - Current Q position in batch
           - Updated position counts (A/B/C/D)
           - Updated type counts
           - Current option lengths

    6. STORE QUESTION
       └── Record: [question, A, B, C, D, correct_answer, source_section, bloom_level, question_type]

  END LOOP

FINALIZATION:
├── Validate batch: All 20 questions generated
├── Check psychometric-standards.md thresholds:
│   ├── DIF (Difficulty Index) within tier range
│   ├── DIS (Discrimination Index) > 0.30
│   ├── DF (Distractor Functionality) ≥ 5%
│   └── Option length distribution acceptable (within ±3 words)
├── Update questions_progress.json: batch status = "complete"
└── Return questions to main session
```

### Key Autonomous Decisions Per Question

1. **Which question type to use** (via decision tree based on concept characteristics)
2. **Which distractor strategy section to read** (from decision tree result)
3. **When to force answer position** (based on real-time distribution check - if B > 30%, force A/C/D)
4. **When to force different type** (based on budget check - if Precision Recall budget exhausted, pick next type)
5. **When to adjust option lengths** (if median length drifts, rewrite to maintain ±3 word parity)

---

## Parallel Batch Coordination Logic

**Budget Calculation Example** (for 100-question exam with target distributions):

```
Total questions: 100
Question type targets:
  - Precision Recall: 10%
  - Conceptual Distinction: 15%
  - Decision Matrix: 12.5%
  - Architecture Analysis: 12.5%
  - Economic/Quantitative: 10%
  - Specification Design: 10%
  - Critical Evaluation: 12.5%
  - Strategic Synthesis: 10%
  - Research Extension: 7.5%

Batch strategy: 5 batches × 20 questions each

Budget per batch:
  - Precision Recall: 10 total / 5 batches = 2 per batch
  - Conceptual Distinction: 15 total / 5 batches = 3 per batch
  - Decision Matrix: 12.5 total / 5 batches = 2.5 (round: 2-3 across batches)
  - Architecture Analysis: 12.5 total / 5 batches = 2.5
  - Economic/Quantitative: 10 total / 5 batches = 2 per batch
  - Specification Design: 10 total / 5 batches = 2 per batch
  - Critical Evaluation: 12.5 total / 5 batches = 2.5
  - Strategic Synthesis: 10 total / 5 batches = 2 per batch
  - Research Extension: 7.5 total / 5 batches = 1.5 (round: 1-2 across batches)

During Batch 2 generation:
  - Read questions_progress.json
  - Check: Batches 1 already generated 20 questions
  - Precision Recall used in Batch 1: 2 of 2 budget
  - Current batch budget still available: 2 of 2
  - As Batch 2 generates Q21-Q40:
    - Q21: Extract concept → Decide type (Decision Tree) → Check budget: Precision Recall available (2/2 remaining) ✓
    - Q22-Q27: Generate other types
    - Q28: Extract concept → Decide type → Check budget: Precision Recall now at 2/2 USED
    - Q29-Q40: CANNOT be Precision Recall (budget exhausted), must pick other type
```

---

## Continuous Validation Triggers

**After EACH question**, check these conditions:

| Condition | Check | Action |
|-----------|-------|--------|
| **Position Bias** | Position A/B/C/D distribution | If B > 30% of batch: Force next answer to A/C/D |
| **Length Bias** | Option word counts | If max - min > 3 words: Rewrite to compress/expand |
| **Type Distribution** | Question type budget per batch | If budget exhausted for type: Pick different type |
| **Bloom Distribution** | Bloom level counts | If Bloom level exceeds batch target: Adjust next Q complexity |
| **Distractor Quality** | Would any distractor be selected by <5%? | If yes: Enhance distractor or replace |

**After EVERY 10 QUESTIONS** (mid-batch checkpoint):

| Metric | Reference | Action if Off-Track |
|--------|-----------|---------------------|
| **DIF** (Difficulty Index) | psychometric-standards.md | Adjust difficulty of next 10 Q |
| **DIS** (Discrimination Index) | psychometric-standards.md | Review distractor quality |
| **DF** (Distractor Functionality) | psychometric-standards.md | Enhance weak distractors |
| **Option Lengths** | bias-detection-guide.md | Normalize lengths in next batch |

---

## MIT Professional Standards Enforcement

**Tier-Specific Rigor** (per academic-rigor-tiers.md):

| Tier | Target Pass % | DIF Range | Bloom Focus | Question Type Emphasis |
|------|---------------|-----------|------------|------------------------|
| **T1** (Foundational) | 70% | 50-80% | Remember/Understand (60%) | Precision Recall (+15%) |
| **T2** (Intermediate) | 65% | 50-65% | Analyze (25%) | Conceptual Distinction (+7%) |
| **T3** (Advanced) | 40% | 30-50% | Evaluate (25%) | Critical Evaluation (+7%) |
| **T4** (PhD Qualifying) | 25% | 15-30% | Create (25%) | Research Extension (+5%) |

**Psychometric Standards** (per psychometric-standards.md):

- **DIF** (Difficulty Index): % who select correct answer
- **DIS** (Discrimination Index): >0.30 (distinguish high/low performers)
- **DF** (Distractor Functionality): Each distractor selected by ≥5%
- **KR-20** (Internal Consistency): Tier-specific targets (T1: ≥0.75, T2: ≥0.70, T3: ≥0.65)

---

## When to Read Each Reference File

| File | When | Purpose |
|------|------|---------|
| `academic-rigor-tiers.md` | Step 4 (Distribute Adaptively) | Select tier, read tier-specific distributions |
| `distractor-generation-strategies.md` | Step 5, per question (Decision 3 in Background Task) | Read section matching question type for specific distractor procedure |
| `psychometric-standards.md` | Step 5, after every 10 questions | Validate DIF, DIS, DF, KR-20 metrics, adjust next batch if needed |
| `bias-detection-guide.md` | Step 5, continuous validation | Check length/position/specificity bias after each question |
| `generation-procedures.md` (this file) | Step 5, Background Task execution | Reference decision tree and budget calculation logic |

