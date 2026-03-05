---
sidebar_position: 4
title: "Bronze Capstone: First Real Day"
description: "Put your AI employee through a structured evaluation with real professional tasks, testing identity, skill, connection, and clarification behavior."
keywords: [nanoclaw, capstone, evaluation, ai employee, testing, professional tasks, bronze tier]
chapter: 13
lesson: 4
duration_minutes: 45

skills:
  - name: "Integration Testing"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student executes a structured multi-task evaluation and identifies gaps between expected and actual agent behavior"
  - name: "Self-Assessment"
    proficiency_level: "A2"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student completes a rubric-based self-evaluation with evidence-backed scores and improvement priorities"

learning_objectives:
  - objective: "Execute a structured evaluation of an AI employee across multiple professional dimensions"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Exported conversation log showing 3-5 tasks with varied complexity and at least one ambiguous task"
  - objective: "Identify gaps between expected and actual agent behavior using a scoring rubric"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Completed evaluation rubric with evidence-based scores and written notes per dimension"
  - objective: "Iterate on agent responses to demonstrate improvement through follow-up interaction"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "At least one conversation thread showing initial response, feedback, and improved second response"

cognitive_load:
  new_concepts: 4
  assessment: "Structured testing methodology, rubric-based evaluation, ambiguity testing, and iterative improvement. Within B1 budget since individual components (skill, channel, identity) are already working."

differentiation:
  extension_for_advanced: "Run the same 5 tasks on day 1 and day 3 to measure improvement after tuning. Compare evaluation scores across runs."
  remedial_for_struggling: "Start with just 3 tasks: one routine, one using your skill, one ambiguous. Add complexity after the first evaluation pass."
---

# Bronze Capstone: First Real Day

In Lessons 1-3, you gave your employee an identity, a skill, and a connection to the outside world. Now you will find out if any of it actually works under real conditions.

This is not a demo. You are going to send your AI employee the kinds of tasks that a human in your profession handles on a typical workday. Some will be routine. Some will require the domain skill you built in Lesson 2. At least one will be deliberately ambiguous — the kind of request where a good employee asks for clarification instead of guessing.

The goal is not a perfect score. The goal is an honest evaluation that tells you exactly what works, what fails, and what to improve next.

## The Challenge

Send your AI employee 3-5 real professional tasks and evaluate the results using a structured rubric. At least one task must use your Lesson 2 skill, at least one must use your Lesson 3 connection, and at least one must be ambiguous enough that the employee should ask a clarifying question rather than guess.

### Acceptance Criteria

1. Conversation log exported showing all tasks and responses
2. Self-evaluation rubric completed with scores and evidence for each dimension
3. At least one response improved through follow-up iteration (you gave feedback, the employee adapted)
4. Written reflection identifying what worked, what failed, and one specific improvement to make

### Deliverables

Add these files to your `nanoclaw-employee` repo:

- `conversation-log.md` — full task/response transcript
- `evaluation.md` — completed rubric with scores and reflection

## Use Case Gallery

These examples show how different professions structure their five tasks. Adapt the pattern to your own work.

**Accountant:**
1. "Review this invoice for errors" — routine task testing basic identity and tone
2. "Categorize these expenses by tax deduction type" — tests Lesson 2 skill
3. "Email the client about their payment status" — tests Lesson 3 Gmail connection
4. "Handle this tax situation" — ambiguous, should ask: which jurisdiction? personal or business?
5. "Prepare a quarterly summary from these three invoices" — complex, combines skill + reasoning

**Teacher:**
1. "Write a welcome message for parents about the field trip" — routine tone check
2. "Plan next week's math unit on fractions for 4th graders" — tests Lesson 2 skill
3. "Post an update in the parent channel about homework policy" — tests Lesson 3 Slack connection
4. "Help with this student" — ambiguous, should ask: academic help? behavioral? what subject?
5. "Create a differentiated worksheet for my mixed-ability class" — complex, combines skill + judgment

**Consultant:**
1. "Draft a status update for the project team" — routine task
2. "Build a proposal outline for a new client engagement" — tests Lesson 2 skill
3. "Check my calendar and prep notes for tomorrow's meetings" — tests Lesson 3 connection
4. "Follow up with the client" — ambiguous, should ask: which client? about what? what tone?
5. "Analyze why this project is behind schedule and suggest recovery options" — complex reasoning

## Evaluation Rubric

Use this rubric for your `evaluation.md`. Score each dimension 1-5 and include specific evidence.

| Dimension | 1 (Poor) | 3 (Adequate) | 5 (Excellent) | Your Score | Evidence |
|-----------|----------|--------------|----------------|------------|----------|
| **Domain accuracy** | Major factual errors about your profession | Mostly correct, minor gaps | Gets professional details right consistently | | |
| **Appropriate tone** | Would embarrass you if a client saw it | Acceptable but generic | Matches the voice you defined in L01 | | |
| **Skill usage** | Did not use L02 skill when it should have | Used skill but missed nuances | Applied skill effectively with domain insight | | |
| **Connection usage** | Failed to use L03 connection | Used connection but with errors | Smooth integration with the external channel/tool | | |
| **Clarification behavior** | Guessed on ambiguous task | Asked a question but not the right one | Asked targeted clarifying questions before acting | | |
| **Iteration quality** | No improvement after feedback | Some improvement, missed key points | Meaningfully improved response based on your feedback | | |

## Hints

<details>
<summary>Level 1: Planning Your Tasks</summary>

Think about what you actually did at work this week. Pick tasks that range from routine to complex. The best test tasks are real ones — not hypothetical scenarios. If you can use actual documents, emails, or situations from your work (with sensitive details removed), the evaluation will be far more meaningful.

</details>

<details>
<summary>Level 2: Ask Your AI for Task Ideas</summary>

Before starting the evaluation, send this to Claude:

"What are 5 common daily tasks for a [your profession] that vary in complexity from routine to judgment-heavy? For each, note whether it primarily tests identity/tone, domain skill, tool usage, or ambiguity handling."

Use the response to design a balanced test set that covers all four dimensions.

</details>

<details>
<summary>Level 3: Structuring the Evaluation</summary>

Run your tasks in this specific order for the clearest signal:

1. **Task 1 — Routine:** Tests basic identity and tone. Should be something your employee handles easily.
2. **Task 2 — Skill-heavy:** Requires your Lesson 2 SKILL.md. Does the domain expertise come through?
3. **Task 3 — Connection-dependent:** Must use your Lesson 3 channel or MCP server. Does the integration work end-to-end?
4. **Task 4 — Ambiguous:** Deliberately vague. A good employee asks questions before acting. A bad one guesses.
5. **Task 5 — Complex:** Combines everything. Tests whether identity + skill + connection work together.

For the iteration test: pick the weakest response from Tasks 1-5, give specific feedback, and ask for a revised version. Compare the two.

</details>


