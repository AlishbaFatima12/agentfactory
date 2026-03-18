# Migration Rules: Converting Lesson Files to ExercisePrompt

## How to Identify the AI Check Prompt Section

Every exercise lesson in Part 0 contains a section that looks like this:

````markdown
````text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
[prompt text with [paste ...] placeholders]
```​
````
````

**Identification markers (all must be present):**

1. A fenced code block with language `text`
2. Title containing "AI Check Prompt" or "AI Baseline Check"
3. One or more `[paste ...]` placeholders inside the block
4. Located after the exercise instructions and before the "What This Teaches You" section

---

## How to Map [paste ...] Placeholders to PromptField Components

Each `[paste ...]` placeholder becomes one `<PromptField>` component.

### Naming Convention

The `name` prop is derived from the placeholder text:

1. Remove `[paste` prefix and `]` suffix
2. Strip leading articles ("your", "my", "the", "full", "from")
3. Convert to snake_case
4. Deduplicate by appending `_N` if needed

### Examples

| Placeholder                                          | `name` prop                                 | `placeholder` prop                              |
| ---------------------------------------------------- | ------------------------------------------- | ----------------------------------------------- |
| `[paste scenario]`                                   | `scenario`                                  | `"Paste your chosen scenario here..."`          |
| `[paste your prediction lock document]`              | `prediction_lock_document`                  | `"Paste your prediction lock document here..."` |
| `[paste]` (bare, in context "My questions: [paste]") | Derive from preceding label: `my_questions` | `"Paste your questions here..."`                |
| `[paste annotated responses]`                        | `annotated_responses`                       | `"Paste your annotated responses here..."`      |
| `[paste scores and comments]`                        | `scores_and_comments`                       | `"Paste scores and comments here..."`           |

### PromptField Rows Heuristic

| Content type                                                           | Default rows |
| ---------------------------------------------------------------------- | ------------ |
| Short identifier (scenario name, question)                             | `rows={2}`   |
| Medium content (diagnosis, single document)                            | `rows={4}`   |
| Long content (full prediction lock, reasoning receipt, multiple items) | `rows={6}`   |

---

## Conversion Template

### Before (current static prompt)

````markdown
````text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
I am a student learning question formulation. Below is a business scenario,
followed by my initial diagnosis and 10 ranked diagnostic questions.
Please evaluate:

(1) Rate each of my 10 questions on a scale of 1-10 for diagnostic power...
...

Here is the scenario: [paste scenario].
Here is my work: [paste your prediction lock document].

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```​
````
````

### After (interactive ExercisePrompt)

```mdx
<ExercisePrompt id="prediction-lock" provider={["chatgpt", "claude", "gemini"]}>

I am a student learning question formulation. Below is a business scenario,
followed by my initial diagnosis and 10 ranked diagnostic questions.
Please evaluate:

(1) Rate each of my 10 questions on a scale of 1-10 for diagnostic power...
...

Here is the scenario:

<PromptField
  name="scenario"
  placeholder="Paste your chosen scenario here..."
  rows={2}
/>

Here is my work:

<PromptField
  name="prediction_lock_document"
  placeholder="Paste your prediction lock document here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</ExercisePrompt>
```

### Key Conversion Rules

1. **Remove the fenced code block** (` ```text ... ``` `). Replace with `<ExercisePrompt>` wrapper.
2. **Remove the title** ("AI Check Prompt -- Copy and paste into..."). The ExercisePrompt component renders its own header.
3. **Keep all prompt text** exactly as-is. Do not edit the evaluation instructions, scoring criteria, or any prose.
4. **Replace each `[paste ...]`** with a `<PromptField>` on its own line, with a blank line above and below.
5. **Remove the line containing `[paste ...]`** -- the PromptField replaces it entirely. If the paste was inline (e.g., `Here is the scenario: [paste scenario].`), split: keep the label text on the line above, put the PromptField below.
6. **Set the `id` prop** to the lesson slug (filename without `.md` extension).
7. **Set `provider` prop** to `{["chatgpt", "claude", "gemini"]}` for all files (matches the 3 platforms mentioned in the spec).

### Special Cases

**Bare `[paste]` with preceding label**: When the placeholder is just `[paste]` on a line like `My questions: [paste].`, the label provides the name:

```mdx
My questions:

<PromptField
  name="my_questions"
  placeholder="Paste your questions here..."
  rows={4}
/>
```

**Multiple `[paste]` on adjacent lines**: Common in Ch 9 (information-drop) and Ch 7 (adversarial-defence). Each gets its own PromptField, each on its own line:

```mdx
Original decision:

<PromptField
  name="original_decision"
  placeholder="Paste your original decision here..."
  rows={4}
/>

Post-consultation decision:

<PromptField
  name="post_consultation_decision"
  placeholder="Paste your post-consultation decision here..."
  rows={4}
/>
```

**Deliverable template `[paste]` in `<details>` blocks**: Do NOT convert these. Only convert the AI Check Prompt code block. The deliverable template is a reference, not an interactive element.

**thinking-baseline.md**: Uses "AI Baseline Check" title instead of "AI Check Prompt". Same conversion rules apply. ID: `thinking-baseline`.

---

## Complete File List with Field Counts

### Chapter 1: Asking Better Questions (4 files)

| #   | File                                                   | Fields | Field Names                                                  |
| --- | ------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| 1   | `01-asking-better-questions/01-prediction-lock.md`     | 2      | scenario, prediction_lock_document                           |
| 2   | `01-asking-better-questions/02-question-tournament.md` | 4      | scenario, my_questions, partners_questions, comparison_table |
| 3   | `01-asking-better-questions/03-divergence-test.md`     | 3      | scenario, analysis, reasoning_receipt                        |
| 4   | `01-asking-better-questions/04-live-defence.md`        | 2      | scenario, analysis                                           |

### Chapter 2: Detecting Broken Reasoning (4 files)

| #   | File                                                         | Fields | Field Names                                                                      |
| --- | ------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------- |
| 5   | `02-detecting-broken-reasoning/01-error-prediction.md`       | 2      | annotated_responses, predictions                                                 |
| 6   | `02-detecting-broken-reasoning/02-contradiction-test.md`     | 5      | question, ai_response_1, ai_response_2, divergence_annotations, analysis_draft_1 |
| 7   | `02-detecting-broken-reasoning/03-build-it-break-it.md`      | 2      | ai_analysis, annotations                                                         |
| 8   | `02-detecting-broken-reasoning/04-confidence-calibration.md` | 1      | calibration_table                                                                |

### Chapter 3: Thinking in Systems (4 files)

| #   | File                                                        | Fields | Field Names                                                           |
| --- | ----------------------------------------------------------- | ------ | --------------------------------------------------------------------- |
| 9   | `03-thinking-in-systems/01-cascade-mapping.md`              | 1      | cascade_map                                                           |
| 10  | `03-thinking-in-systems/02-human-vs-ai-systems-analysis.md` | 5      | scenario, original_map, claude_analysis, chatgpt_analysis, merged_map |
| 11  | `03-thinking-in-systems/03-variable-shift.md`               | 4      | original_merged_map, variable_shift, revised_map, change_log          |
| 12  | `03-thinking-in-systems/04-system-defence.md`               | 3      | final_map, partners_critique, reflection                              |

### Chapter 4: Reasoning from First Principles (4 files)

| #   | File                                                                     | Fields | Field Names                       |
| --- | ------------------------------------------------------------------------ | ------ | --------------------------------- |
| 13  | `04-reasoning-from-first-principles/01-blank-page-derivation.md`         | 1      | argument                          |
| 14  | `04-reasoning-from-first-principles/02-first-principles-vs-ai.md`        | 1      | worksheet                         |
| 15  | `04-reasoning-from-first-principles/03-assumption-autopsy.md`            | 2      | solution, assumption_map          |
| 16  | `04-reasoning-from-first-principles/04-rebuild-under-new-constraints.md` | 2      | principle_audit, rebuilt_solution |

### Chapter 5: Communicating What Matters (4 files)

| #   | File                                                              | Fields | Field Names                                          |
| --- | ----------------------------------------------------------------- | ------ | ---------------------------------------------------- |
| 17  | `05-communicating-what-matters/01-audience-prediction.md`         | 3      | decision, audience_profiles, ai_generated_briefs     |
| 18  | `05-communicating-what-matters/02-live-adaptation.md`             | 4      | pitch, unexpected_concern, adaptation, peer_feedback |
| 19  | `05-communicating-what-matters/03-the-hard-conversation.md`       | 3      | original_email, diagnosis, rewrite                   |
| 20  | `05-communicating-what-matters/04-communication-retrospective.md` | 3      | scenario, peer_feedback, reflection                  |

### Chapter 6: Working With AI, Not For AI (4 files)

| #   | File                                                        | Fields | Field Names                                                                    |
| --- | ----------------------------------------------------------- | ------ | ------------------------------------------------------------------------------ |
| 21  | `06-working-with-ai-not-for-ai/01-three-path-comparison.md` | 5      | problem, solo_solution, pure_ai_solution, collaboration_solution, comparison   |
| 22  | `06-working-with-ai-not-for-ai/02-collaboration-log.md`     | 2      | strategy, collaboration_log                                                    |
| 23  | `06-working-with-ai-not-for-ai/03-the-override-test.md`     | 4      | original_analysis, error_identification, corrected_analysis, redesigned_prompt |
| 24  | `06-working-with-ai-not-for-ai/04-dependency-audit.md`      | 4      | question, claude_recommendation, chatgpt_recommendation, arbitration_brief     |

### Chapter 7: Reasoning Through Dilemmas (4 files)

| #   | File                                                      | Fields | Field Names                                                |
| --- | --------------------------------------------------------- | ------ | ---------------------------------------------------------- |
| 25  | `07-reasoning-through-dilemmas/01-position-lock.md`       | 2      | dilemma, position_lock                                     |
| 26  | `07-reasoning-through-dilemmas/02-adversarial-defence.md` | 3      | dilemma, position_and_arguments, defence_summary           |
| 27  | `07-reasoning-through-dilemmas/03-stakeholder-swap.md`    | 3      | dilemma, personal_position, assigned_position              |
| 28  | `07-reasoning-through-dilemmas/04-cost-matrix.md`         | 3      | original_position_lock, adversarial_exchange, draft_1_memo |

### Chapter 8: Building Something from Nothing (4 files)

| #   | File                                                             | Fields | Field Names                                              |
| --- | ---------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| 29  | `08-building-something-from-nothing/01-blank-page-sprint.md`     | 2      | problem, draft_1                                         |
| 30  | `08-building-something-from-nothing/02-creation-log.md`          | 3      | draft_1, draft_2, creation_log                           |
| 31  | `08-building-something-from-nothing/03-the-originality-test.md`  | 2      | scenario, draft_2                                        |
| 32  | `08-building-something-from-nothing/04-three-draft-evolution.md` | 5      | draft_1, draft_2, draft_3, evolution_tracker, reflection |

### Chapter 9: Deciding Under Uncertainty (4 files)

| #   | File                                                   | Fields | Field Names                                                                                          |
| --- | ------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------- |
| 33  | `09-deciding-under-uncertainty/01-sealed-decision.md`  | 2      | scenario, decision_document                                                                          |
| 34  | `09-deciding-under-uncertainty/02-ai-consultation.md`  | 3      | original_decision, consultation_log, updated_decision                                                |
| 35  | `09-deciding-under-uncertainty/03-information-drop.md` | 5      | original_decision, post_consultation_decision, new_information, post_drop_decision, process_document |
| 36  | `09-deciding-under-uncertainty/04-decision-audit.md`   | 2      | complete_decision_trail, self_audit                                                                  |

### Chapter 10: Learning How to Learn (4 files)

| #   | File                                                    | Fields | Field Names                                                                 |
| --- | ------------------------------------------------------- | ------ | --------------------------------------------------------------------------- |
| 37  | `10-learning-how-to-learn/01-learning-plan.md`          | 1      | learning_plan                                                               |
| 38  | `10-learning-how-to-learn/02-72-hour-sprint.md`         | 3      | analysis, learning_log, midpoint_reflection                                 |
| 39  | `10-learning-how-to-learn/03-teach-it-back.md`          | 3      | teaching_materials, questions_and_responses, peer_feedback                  |
| 40  | `10-learning-how-to-learn/04-strategy-retrospective.md` | 3      | original_learning_plan, strategy_retrospective, personal_learning_framework |

### Chapter 11: Thinking Portfolio (2 files with submission)

| #   | File                                             | Fields | Field Names                                                    |
| --- | ------------------------------------------------ | ------ | -------------------------------------------------------------- |
| --  | `11-thinking-portfolio/01-portfolio-assembly.md` | 3      | baseline_responses, baseline_scores, post_assessment_responses |
| --  | `11-thinking-portfolio/02-growth-map.md`         | 1      | ai_thinking_growth_summary                                     |

Note: `11-thinking-portfolio/03-calibrating-ai-prompts.md` has NO submission config and is excluded.

### Standalone

| #   | File                   | Fields | Field Names |
| --- | ---------------------- | ------ | ----------- |
| --  | `thinking-baseline.md` | 1      | responses   |

**Total: 41 files, 113 PromptField instances**

---

## Complexity Groups

### Simple (1-2 fields) -- 18 files

Direct substitution. One or two `[paste]` placeholders, straightforward.

Files: 01/01, 01/04, 02/01, 02/03, 02/04, 03/01, 04/01, 04/02, 04/03, 04/04, 06/02, 07/01, 08/01, 08/03, 09/01, 09/04, 10/01, thinking-baseline

### Medium (3-4 fields) -- 16 files

Multiple fields but linear layout (no nested structures).

Files: 01/02, 01/03, 02/02 (5 -- borderline), 03/03, 03/04, 05/01, 05/02, 05/03, 05/04, 06/03, 06/04, 07/03, 07/04, 08/02, 09/02, 10/02, 10/03, 10/04, 11/01

### Complex (5-6+ fields) -- 7 files

Many fields, some with adjacent `[paste]` lines or multi-part prompts.

Files: 02/02, 03/02, 06/01, 07/02 (has multi-round structure), 08/04, 09/03, 11/02 (only 1 field but from a different section)

**Note**: Ch 7 L02 (adversarial-defence) has 9 `[paste]` occurrences but most are in the deliverable template `<details>` block. The AI Check Prompt itself has 3 fields. The deliverable template `[paste]` entries are NOT converted.

---

## Validation Checklist (per file)

After converting each file:

- [ ] `<ExercisePrompt>` wraps the entire prompt (not just one paragraph)
- [ ] `id` matches the filename slug
- [ ] `provider` is `{["chatgpt", "claude", "gemini"]}`
- [ ] All `[paste ...]` in the AI Check Prompt block are converted to `<PromptField>`
- [ ] `[paste ...]` in `<details>` deliverable templates are left untouched
- [ ] No text was added or removed from the prompt evaluation instructions
- [ ] The "Finally, complete the Thinking Score Card..." section is inside the ExercisePrompt
- [ ] The fenced code block (` ```text ... ``` `) is removed
- [ ] MDX compiles without errors (no unclosed tags, no import statements added)
- [ ] PromptField names are unique within each ExercisePrompt
