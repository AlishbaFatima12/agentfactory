---
sidebar_position: 4
title: "Write the HireFlow Concept Paper"
description: "Apply the 10-80-10 Rule to write a concept paper for HireFlow, using your Factory Blueprint from Chapter 64."
chapter: 65
lesson: 4
duration_minutes: 45
keywords:
  [
    concept paper,
    HireFlow,
    10-80-10 rule,
    applied exercise,
    factory blueprint,
    advisory board pattern,
  ]

skills:
  - name: "Concept Paper Writing"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can produce a structured concept paper from a Factory Blueprint using the 10-80-10 method"
  - name: "AI-Assisted Validation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can classify AI feedback as substantive, missing, stylistic, or contradictory, and act accordingly"

learning_objectives:
  - objective: "Write the HireFlow concept paper by applying the 10-80-10 Rule to the Factory Blueprint from Chapter 64"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Concept paper production"
  - objective: "Run at least one advisory board validation loop and classify the feedback"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Feedback classification table"

cognitive_load:
  new_concepts: 0
  assessment: "Low (no new concepts). High in application effort. This lesson applies everything from Lessons 1-3."

differentiation:
  extension_for_advanced: "Run three full advisory board loops. Track how the feedback changes across loops and identify the exact point of crystallization."
  remedial_for_struggling: "Focus on sections 1-3 of the template. Complete the full paper in a follow-up session."
---

# Write the HireFlow Concept Paper

Emma looked at James's screen. His HireFlow blueprint was open. His research notes (three bullet points from the scoring model investigation) were in a separate tab. The 10-80-10 diagram from Lesson 2 was on the whiteboard behind him.

"You have everything you need," she said. "The research is done. The blueprint is your domain knowledge. The Advisory Board Pattern is your validation method."

James opened a new document. "Where do I start?"

"With the template. Then fill it in. Then submit it to the advisory board." She stood up. "I have a meeting. Write the first draft while I am gone. All six sections. Do not wait for me to review it before submitting to the advisory board."

"What if I get stuck?"

"You have four chapters of context. If you get stuck, reread your blueprint." She picked up her laptop. "I will be back in an hour."

James watched her leave. He looked at the blank document. Then he looked at the template.

## The Concept Paper Template

Every concept paper follows this structure. Fill in each section using your Factory Blueprint (Chapter 64) and your targeted research findings.

### Section 1: Problem Statement

**What to write:** The business problem this factory solves. Not the technical solution. The human pain.

**Where the content comes from:** Your Domain Decomposition Step 1 (Ch 64, Lesson 2): the workflow you analyzed, the bottleneck you identified.

**HireFlow example seed:** "Technical hiring at scale breaks when human reviewers cannot maintain consistent evaluation across hundreds of applications per role. Scoring drift, reviewer fatigue, and inconsistent criteria produce hiring decisions that are defensible by process but unreliable by outcome."

### Section 2: Proposed Solution

**What to write:** The factory's approach in one paragraph. Not the technical architecture. The strategy.

**Where the content comes from:** Your Factory Blueprint's workflow map and FTE role list.

**HireFlow example seed:** "HireFlow is a four-FTE recruitment factory that standardizes the pipeline from job specification through candidate recommendation. Each FTE handles one stage: specification writing, resume screening, interview preparation, and candidate summarization. Data contracts between FTEs enforce consistency. Human review gates preserve judgment at critical decision points."

### Section 3: Domain Evidence

**What to write:** Evidence that this approach fits the domain. This is where your targeted research (the first 10%) goes. Cite specific findings.

**Where the content comes from:** Your research notes from the first 10%.

**What to include:**

- Evidence that confirms your blueprint's assumptions
- Evidence that revised your blueprint's assumptions (and how you adapted)
- Gaps that remain unresolved (honest acknowledgment, not hidden weaknesses)

### Section 4: FTE Justification

**What to write:** For each FTE, argue why it deserves to be a separate worker rather than a feature of another FTE.

**Where the content comes from:** Your Role Specifications from Ch 64.

**Test each FTE against three criteria:**

| Criterion               | Question                                                                 | If "no"                           |
| ----------------------- | ------------------------------------------------------------------------ | --------------------------------- |
| **Distinct Input**      | Does this FTE receive data from a different source than adjacent FTEs?   | Merge with adjacent FTE           |
| **Distinct Expertise**  | Does this FTE require a meaningfully different skill than adjacent FTEs? | Merge with adjacent FTE           |
| **Independent Failure** | Can this FTE fail without breaking the adjacent FTE?                     | They are coupled, not independent |

If all three criteria pass, the FTE is justified. If any fails, reconsider the decomposition.

### Section 5: Risk Assessment

**What to write:** The three to five biggest risks to this factory, and the mitigation for each.

**Where the content comes from:** Your Human Review Gates and Failure Modes from Ch 64, plus any risks surfaced by your research.

**Structure each risk as:**

```
Risk: [what can go wrong]
Impact: [what happens to the pipeline if it goes wrong]
Mitigation: [how the factory design addresses it]
Residual risk: [what remains after mitigation]
```

### Section 6: Success Criteria

**What to write:** Measurable outcomes. Not "HireFlow works well." Specific numbers.

**Where the content comes from:** Your Success Criteria section from Ch 64, sharpened with research evidence.

**HireFlow example metrics:**

- Screening consistency: score variance < 5% for the same candidate across repeated runs
- Pipeline throughput: process 50 candidates per job posting within 24 hours
- Human override rate: < 15% of automated decisions overridden by human reviewers
- Time-to-shortlist: reduce from 5 business days (manual) to 4 hours (factory)

## Writing the Draft

James started with Section 1. The problem statement was straightforward. He had lived it. In his old operations role, hiring five people had taken three months because each resume went through three reviewers who all used different criteria. The senior manager spent more time reconciling conflicting reviews than reading resumes.

He wrote the problem statement in four sentences. Then he moved to Section 2 and summarized HireFlow's approach using the workflow map from his blueprint.

Section 3 was where he stalled. He stared at the cursor blinking on an empty line. The research findings were in his notes, but connecting them to the blueprint felt like trying to argue a case he half believed. He read his three bullet points again. Then he read them a third time. The room was quiet. He almost opened a new tab to message Emma, but stopped himself. She had said to write without waiting. He picked the easiest finding first, the one about rubric-based scoring, and forced himself to type the opening sentence. The rest came easier after that.

Section 3 was harder. His research had found three things: first, that technical hiring typically uses rubric-based scoring (spectrum, not binary), which contradicted his original scoring model. Second, that CV parsing at scale requires handling at least PDF, DOCX, and plain text formats. Third, that structured interviews in technical hiring follow competency frameworks, not the free-form question lists he had designed.

He wrote all three findings into the Domain Evidence section, noting how each one required a revision to his original blueprint.

Section 4 took the longest. For each FTE, he checked the three criteria. The Job Spec Writer and Resume Screener passed all three: different inputs, different skills, independent failure modes. But the Interview Question Generator made him pause. Its input came from the Resume Screener's output AND the Job Spec Writer's output. It did not have a distinct input source in the way the others did. He wrote a note: "Interview Question Generator receives from two sources. Justify: the synthesis of two data streams IS the distinct expertise. The Generator's value is in combining screening results with job specifications to produce targeted questions. Neither upstream FTE performs this synthesis."

Section 5 was four risks. The top one: "Scoring drift across candidates within a single batch. If the LLM's scoring calibration shifts mid-batch, early candidates may be scored differently than late candidates even with identical qualifications."

Section 6 mapped directly from his blueprint's success criteria, sharpened with specific numbers from his research.

He looked at the clock. Forty minutes. Six sections. A complete first draft.

## Running the Advisory Board

James opened three browser tabs. He pasted the full concept paper into each and added the role-specific prompts from Lesson 3.

**Tab 1 (Domain Challenger):** "You are an expert in technical recruitment at scale. Review this concept paper and identify where my understanding of the domain is wrong, incomplete, or based on assumptions that experienced recruiters would challenge."

**Tab 2 (Logic Auditor):** "You are a critical reviewer. Find logical weaknesses in this concept paper: contradictions between sections, unsupported claims, circular arguments, or conclusions that do not follow from the evidence."

**Tab 3 (Gap Finder):** "You are reviewing this concept paper for completeness. What topics does it NOT address but should? What edge cases are ignored? What stakeholders are not considered?"

He submitted all three and waited.

The Domain Challenger flagged his scoring model: "Rubric-based scoring in technical hiring typically includes weighted criteria rather than simple percentage matching. Your paper acknowledges spectrum scoring but does not specify how weights are determined or calibrated."

The Logic Auditor found a contradiction: "Section 2 states that human review gates 'preserve judgment at critical decision points,' but Section 4 argues each FTE should have 'independent failure.' If a human gate can halt the pipeline between FTEs, the FTEs are not truly independent in failure."

The Gap Finder identified a missing topic: "No discussion of candidate data privacy. The factory processes personal information (CVs, contact details, employment history). What data retention policy applies? What happens to candidate data after the hiring decision?"

James classified each piece of feedback:

| Source            | Feedback                             | Type            | Action                                                               |
| ----------------- | ------------------------------------ | --------------- | -------------------------------------------------------------------- |
| Domain Challenger | Scoring weights unspecified          | Substantive     | Add weight determination method to Section 4                         |
| Logic Auditor     | Independence vs. gates contradiction | Substantive     | Clarify: FTEs are independently deployable, gates are pipeline-level |
| Gap Finder        | Missing data privacy section         | Missing section | Add Section 5a: Data Privacy                                         |

He revised the paper and resubmitted.

On the second loop, the Domain Challenger rated it 9.2 and suggested adding a paragraph on multi-region hiring differences. The Logic Auditor rated it 9.4 and found no contradictions. The Gap Finder rated it 9.3 and suggested expanding the risk section with a scenario for bias in screening.

He revised again. Third loop.

The Domain Challenger rated it 9.6: "Consider mentioning seasonal hiring volume spikes." The Logic Auditor rated it 9.7: "The argument is coherent. Section 4's independence clarification is well-handled." The Gap Finder rated it 9.5: "Comprehensive. You might add a brief note on integration with existing ATS platforms."

The feedback had shifted. "Seasonal hiring volume spikes" was a nice-to-have, not a structural gap. "Integration with existing ATS" was a future consideration, not a missing foundation. The Logic Auditor had nothing substantive left.

Substance had become style. The paper had crystallized.

## When Emma Came Back

Emma set down her coffee and looked at James's screen. The concept paper was open. Three tabs of advisory board feedback were minimized. A feedback classification table sat in a separate window.

"Three loops?" she asked.

"Three loops. First one had real problems: scoring weights, a contradiction about independence, and a missing privacy section. Second one had medium issues: regional hiring, bias scenarios. Third one was polish."

She scrolled through the paper. "The FTE justification section is stronger than I expected. The independence-versus-gates distinction is well argued."

"The Logic Auditor caught that. I would not have seen it myself."

Emma nodded. "That is the point. Your domain knowledge built the paper. The advisors found what you could not see. And you decided what to act on. That is the 10-80-10 in practice."

## What Comes Next

You have a concept paper. In the next lesson, we look at where it sits in the bigger picture: how it connects to Chapter 66's Domain Mastery Gate and Chapter 67's skill extraction. The concept paper is not the end of Phase 1. It is the beginning of the end.
