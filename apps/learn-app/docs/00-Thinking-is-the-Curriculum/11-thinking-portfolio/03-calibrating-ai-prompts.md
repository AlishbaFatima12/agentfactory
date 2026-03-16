---
sidebar_position: 3
title: "Calibrating and Maintaining AI Prompts"
description: "A semester-by-semester maintenance protocol for keeping Part 0's AI assessment prompts accurate as AI models evolve"
keywords:
  [
    "thinking skills",
    "Part 0",
    "instructor guide",
    "AI calibration",
    "prompt maintenance",
    "score calibration",
    "assessment maintenance",
  ]
chapter: 11
lesson: 3
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Assessment Calibration"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Instructor can identify score drift, prompt leniency, and feedback challenge patterns in aggregate student data and adjust prompts accordingly"

learning_objectives:
  - objective: "Execute a five-step semester calibration protocol to maintain accurate AI scoring across evolving AI models"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "Instructor produces calibration report showing score distribution analysis, spot-test results, feedback challenge review, and any prompt adjustments made"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (score distribution audit, prompt spot-testing, model migration) -- manageable for instructors who have already taught Part 0"

differentiation:
  extension_for_advanced: "Build a semester-over-semester calibration dashboard that tracks score distributions, drift patterns, and prompt revision history across multiple cohorts"
  remedial_for_struggling: "Start with Step 1 (Score Distribution Audit) only. If distributions look healthy, the remaining steps can be deferred to the next semester"

teaching_guide:
  lesson_type: "supplementary"
  session_group: 11
  session_title: "Instructor Calibration Protocol"
  key_points:
    - "The five Thinking Score Card dimensions are permanent -- only the prompt wording that elicits accurate scores should be tuned. Changing dimensions breaks cross-semester comparability"
    - "Calibration catches systematic bias, not individual scoring errors. Small inaccuracies wash out over 40 data points -- systematic drift (inflation, compression, blind spots) does not"
    - "When major AI models update (e.g., Claude 5, GPT-5), run the full spot-test before the semester begins -- scoring behavior can shift significantly between model generations"
    - "A 0% Feedback Challenge rate is as concerning as 30%+ -- it may mean students are too deferential to AI feedback, which undermines the critical evaluation skill Part 0 teaches"
  misconceptions:
    - "Instructors try to achieve perfect AI scoring -- the goal is consistent scoring that reliably distinguishes strong thinking from weak thinking, not precise numerical accuracy"
    - "Instructors change the Score Card dimensions when scores drift -- the dimensions are permanent anchors. Only the prompts that measure them should be tuned"
    - "Instructors assume 'it worked last semester, so skip calibration' -- AI models change between semesters even when the model name stays the same (silent updates, RLHF shifts)"
  discussion_prompts:
    - "What is the difference between score inflation and genuine student improvement? How would you distinguish them using the 5-deliverable spot-test?"
    - "If students successfully challenge AI feedback 30%+ of the time, what does that tell you about the prompts vs. what it tells you about the students?"
  teaching_tips:
    - "Keep a calibration log across semesters -- a simple spreadsheet with columns for semester, step run, findings, and changes made. This turns calibration from a chore into institutional memory"
    - "The 5-deliverable spot-test is the most efficient calibration step -- it catches most drift with minimal effort. Start here if time is limited, and defer Steps 3-5 if distributions look healthy"
    - "Step 5 (Scenario Refresh) is the only step that changes student-facing content. When replacing a dated scenario, keep the exercise structure and AI prompts identical -- only the scenario text changes"
  assessment_quick_check:
    - "Has the instructor run a score distribution audit this semester?"
    - "Do Chapter 1 averages fall in the 4-6 range, rising to 6-8 by Chapter 10?"
    - "Were the 5-deliverable spot-test results within 2 points of the instructor's independent assessment?"
---

# For Instructors: Calibrating and Maintaining AI Prompts

The AI check prompts in this part are designed for the current generation of AI tools (Claude and ChatGPT as of early 2026). AI capabilities will evolve. What counts as a rigorous evaluation today may need adjustment as models improve, change behavior, or develop new failure modes. This section provides a maintenance protocol to keep the assessment system accurate over time.

---

## Semester Calibration Protocol

<details>
<summary>Step 1 -- Score Distribution Audit (every semester)</summary>

Collect Thinking Score Card data across all students. If more than 80% score 8+ on any dimension by Chapter 3, the prompts are too lenient. If more than 50% score below 4 by Chapter 8, prompts may be too harsh.

**Healthy distribution:** Chapter 1 averages of 4-6 rising to Chapter 10 averages of 6-8, with natural variance.

</details>

<details>
<summary>Step 2 -- Prompt Spot-Testing (every semester)</summary>

Take 5 student deliverables from the previous semester (one strong, one weak, three average). Submit each to current AI models using current prompts. Compare AI scores to instructor's independent assessment.

If scores diverge by more than 2 points consistently, revise the prompt.

**Common drift patterns:** score inflation (AI becomes more generous), compression (AI stops distinguishing mediocre from good), or new blind spots.

</details>

<details>
<summary>Step 3 -- Feedback Challenge Review (every semester)</summary>

Review all Feedback Challenge Protocol submissions. If students successfully challenge AI feedback more than 30% of the time, prompts need tightening. If challenge rate is 0%, students may be too deferential -- consider adding a mandatory challenge requirement (each student must dispute at least one AI score across the 10 chapters).

</details>

<details>
<summary>Step 4 -- Model Migration (when major AI models update)</summary>

When a major new model version is released, run the full spot-test before the semester begins. New models may score differently. Adjust prompt language to maintain consistent scoring behavior.

The five Thinking Score Card dimensions are permanent -- only the prompt wording that elicits accurate scores should be tuned.

</details>

<details>
<summary>Step 5 -- Scenario Refresh (annually)</summary>

Review exercise scenarios for continued relevance. Scenarios based on emerging technology may become dated as these technologies mature. Replace settled scenarios with new dilemmas requiring genuine thinking.

The exercise structure and AI prompts remain the same -- only the scenario content changes.

</details>

---

The goal of calibration is not perfect AI scoring -- that is impossible. The goal is consistent scoring that reliably distinguishes strong thinking from weak thinking, so that the Score Card trajectory is meaningful across 40 exercises. Small inaccuracies on individual scores wash out over 40 data points. Systematic bias does not -- and that is what the calibration protocol catches.

> _The Thinking Score Card dimensions (Independent Thinking, Critical Evaluation, Reasoning Depth, Originality, Self-Awareness) are permanent. The prompts that measure them are tunable. Calibrate the instrument; do not change what it measures._

> _Knowledge is the foundation. Thinking is the building. This part teaches you to build._
