---
sidebar_position: 2
title: "The Simulation Protocol"
description: "A three-step method for testing agent skills in conversation: design scenarios, run simulations, evaluate outputs."
chapter: 68
lesson: 2
duration_minutes: 20
keywords:
  [
    simulation protocol,
    scenario design,
    skill testing,
    conversation testing,
    validation loop,
  ]

skills:
  - name: "Applying the Simulation Protocol"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can execute the three-step simulation protocol for a single agent skill and record the results"
  - name: "Evaluating Agent Skill Output"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can compare an agent skill's actual output against defined validation criteria and identify gaps"

learning_objectives:
  - objective: "Describe the three steps of the simulation protocol and explain what each step produces"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Chapter quiz MCQ"
  - objective: "Run a single agent skill in Claude Code with a designed scenario and evaluate the output"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Hands-on exercise in Lesson 4"

cognitive_load:
  new_concepts: 3
  assessment: "Medium. Three related concepts (simulation protocol, scenario, evaluation criteria) introduced through a concrete example. Cognitive load managed by running the first simulation before formalizing the method."

differentiation:
  extension_for_advanced: "After reading Emma's protocol description, write down the protocol steps from memory before looking back. Then run your Resume Screener skill with the career changer scenario and compare your evaluation with James's findings."
  remedial_for_struggling: "Focus on the three steps in the protocol diagram. For each step, answer: what do I need as input? What do I produce as output? If you can answer those six questions, you understand the protocol."
---

# The Simulation Protocol

Emma drew three boxes on the whiteboard, connected by arrows.

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  1. DESIGN       │────→│  2. RUN          │────→│  3. EVALUATE     │
│  Scenarios       │     │  Simulation      │     │  Output          │
│                  │     │                  │     │                  │
│  What inputs     │     │  Give the skill  │     │  Compare actual  │
│  will test the   │     │  a scenario in   │     │  output against  │
│  skill's range?  │     │  conversation    │     │  validation      │
│                  │     │                  │     │  criteria        │
└──────────────────┘     └──────────────────┘     └──────────────────┘
         │                                                  │
         │              ┌──────────────────┐                │
         └──────────────│  FIX + RETEST    │←───────────────┘
                        │  If output fails │
                        │  criteria, revise│
                        │  the skill and   │
                        │  run again       │
                        └──────────────────┘
```

"Three steps," Emma said. "Design, run, evaluate. And a loop: if the output fails your criteria, fix the skill and run the scenario again."

"That looks like testing," James said.

"It is testing. The difference is what you are testing. In Chapter 67, you tested whether the skill's instructions were clear and complete. Here, you test whether the skill produces correct outputs when given real inputs. Writing and execution are different validation targets."

## Step 1: Design Scenarios

"A **scenario** is a specific test input for your skill," Emma said. "Not a vague description. A concrete input with enough detail that you could hand it to a real hiring manager and they would recognize it as realistic."

She wrote on the whiteboard:

**Bad scenario:** "A strong candidate"

**Good scenario:** "Priya Sharma. 5 years Python, 2 years team lead at a fintech startup. Strong open-source portfolio (3 projects with 500+ stars). No university degree. Asking for senior engineer title."

James nodded. "The bad one does not test anything because it does not have enough detail to reveal edge cases."

"Exactly. A scenario must be specific enough that the skill's handling of details becomes visible. If the input is vague, the output will be vague, and you learn nothing."

"How many scenarios do I need?"

"At minimum, three categories. We will cover scenario design in depth in Lesson 3. For now, let us focus on running one."

## Step 2: Run the Simulation

"Running a simulation means giving the skill a scenario in conversation," Emma said. "Open Claude Code. Paste your skill as context. Then provide the scenario as input."

"That is it? Paste the skill and give it input?"

"That is it. The simulation environment is a conversation. No servers, no code, no infrastructure. You are testing the intelligence in isolation."

She showed James the pattern:

```
Prompt structure for simulation:

1. System context: Paste the full agent skill text
2. User input: Provide the scenario (candidate profile, job brief, etc.)
3. Instruction: "Process this input according to your skill instructions
   and produce the specified output."
```

"The key is that you provide the full skill text, not a summary," Emma said. "The skill text is what the agent will read in production. You are testing the exact instructions."

James opened Claude Code. He pasted his Resume Screener skill and provided a scenario: a candidate with three years of Python experience, a computer science degree, and clean employment history. A straightforward match.

The output came back in fifteen seconds. A JSON object with a score of 82, a summary paragraph, five dimension scores, and zero flagged concerns.

"That looks right," James said. "Strong candidate, high score, no red flags."

"Good. The happy path works. Now try this one."

Emma handed him a second scenario:

> **Candidate:** Raj Patel. Career changer from management consulting to software engineering. Four years at McKinsey. Completed a six-month coding bootcamp. Built three full-stack projects during the program. No computer science degree. One-year employment gap between leaving McKinsey and starting the bootcamp (travelled Southeast Asia). Asking for mid-level engineer role.

James pasted the scenario. The output came back: score 34. The summary flagged "no formal CS education," "limited professional engineering experience," and "significant employment gap."

"Thirty-four?" James frowned. "This person has McKinsey on their resume. Four years of analytical work. Three full-stack projects."

"What did your scoring rubric do with the consulting experience?"

James reread the skill output. The technical match dimension scored 2 out of 10 because the candidate had no professional engineering roles. The experience depth dimension scored 3 out of 10 because four years at McKinsey did not count as engineering experience. The growth trajectory scored 7 out of 10 because of the bootcamp and projects.

"It treated the consulting experience as irrelevant. But a hiring manager would see transferable skills: analytical thinking, client communication, structured problem-solving."

"Your skill does not know that. The instructions say 'evaluate technical experience.' Consulting is not technical in the narrow sense, so the skill discounts it."

## Step 3: Evaluate the Output

"Now you evaluate," Emma said. "Compare the actual output against what a correct output should look like."

She drew a simple table:

| Criterion                       | Expected                                                      | Actual                                               | Pass/Fail |
| ------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------- | --------- |
| Score range reasonable          | 55-70 (strong transferable skills, limited direct experience) | 34                                                   | **Fail**  |
| Career gap handled contextually | Gap explained by travel, not a red flag                       | Flagged as "significant employment gap"              | **Fail**  |
| Transferable skills recognized  | Consulting experience adds value to analytical dimensions     | Consulting experience ignored                        | **Fail**  |
| Output format correct           | JSON with all required fields                                 | All fields present                                   | Pass      |
| Summary readable                | Clear, balanced paragraph                                     | Clear but biased against non-traditional backgrounds | **Fail**  |

"Four out of five criteria failed," James said.

"And now you know exactly what to fix. Your skill needs instructions for handling career changers: how to evaluate transferable skills, how to weigh bootcamp projects against traditional experience, how to contextualize employment gaps."

James stared at the evaluation table. "Wait, so basically... the simulation just told me more about my skill's weaknesses in sixty seconds than I learned from reading it for an hour."

"Reading tests your understanding of the instructions. Simulation tests whether the instructions produce correct behavior. Different questions, different methods."

## The Fix-and-Retest Loop

"What do I do now?" James asked.

"Fix the Resume Screener skill. Add instructions for transferable skills and contextual gap evaluation. Then run the same scenario again and check whether the output improves."

"And if it still fails?"

"Fix and retest. The loop continues until the output meets your criteria for that scenario. Then you move to the next scenario."

Emma picked up her bag. "I have a standup. Run the career changer scenario again after you revise the skill. Then try these two." She wrote on the whiteboard:

> **Scenario B:** Overqualified candidate. 15 years experience, VP-level at a Fortune 500, applying for a senior IC role. Why?

> **Scenario C:** Entry-level candidate. Bootcamp graduate, impressive portfolio projects, zero months of professional experience. First job application.

"When I come back, I want to see your evaluation table for all three. Not just pass/fail. I want to see what you expected, what you got, and what you changed."

She left.

## James Works Alone

James stared at the three scenarios. The career changer had already exposed gaps. The overqualified candidate would test whether the skill handled unusual situations: why would a VP apply for an IC role? Was it a career downshift, a geographic move, a sign of trouble? His skill's instructions said nothing about evaluating motivation.

He opened the Resume Screener skill and started revising. He added a paragraph about transferable skills: "When evaluating candidates with non-engineering backgrounds, assess transferable competencies including analytical reasoning, structured problem-solving, project management, and communication. Weight these as partial credit in the technical match dimension, not as zeros."

He added a sentence about contextual gap evaluation: "Employment gaps should be evaluated in context. Gaps explained by education, travel, caregiving, or career transitions carry different weight than unexplained gaps. Flag unexplained gaps for reviewer attention; do not automatically penalize explained gaps."

He saved the revision and ran the career changer scenario again. Score: 58. The summary now mentioned "strong transferable analytical skills from consulting background" and classified the employment gap as "career transition, not a concern." Better. Still not perfect: the technical match score was 4 out of 10, which felt low for someone with three full-stack projects. But it was moving in the right direction.

He moved to the overqualified candidate. Score: 91. The skill treated fifteen years of experience as a strong positive across every dimension. It said nothing about the unusual situation. A hiring manager would have questions: is this person going to leave in six months? Are they overqualified for the role's growth trajectory? Is the salary expectation misaligned?

James realized the skill needed instructions for anomaly detection: when the candidate profile does not match the expected pattern for the role level, flag it for human review instead of producing a high confidence score.

He revised again and retested.

When Emma came back twenty minutes later, James had an evaluation table with three rows. Two passed. One still needed work.

"The entry-level candidate is tricky," he said. "Zero professional experience but strong projects. My skill gives a 41 because the experience dimensions score low. But the projects should count for something."

Emma looked at the table. "What would a hiring manager do?"

"Separate evaluation: one track for experienced candidates, one for entry-level. Different weighting."

"Good. That is a skill design decision, not a simulation finding. Simulation told you the problem. Solving it requires going back to the skill itself." She paused. "And that is the loop. Simulate, find the gap, revise, retest."

:::tip Key Insight
The simulation protocol has three steps: design, run, evaluate. But the real learning happens in the evaluation step, when you compare what you expected against what you got. That comparison reveals the gap between what you think your skill does and what it actually does. The gap is where the skill gets better.
:::

## What You Have Now

After one simulation session, James has:

1. **A revised Resume Screener skill** with improved instructions for transferable skills, contextual gap evaluation, and anomaly detection
2. **An evaluation table** documenting three scenarios, their expected outcomes, actual outcomes, and pass/fail status
3. **A concrete list of remaining issues** to address before the skill is production-ready

He has not written a single line of production code. He has not configured an MCP server. He has not touched a database. But his skill is measurably better than it was an hour ago.

That is the power of simulation-driven validation: rapid iteration on intelligence, with zero infrastructure overhead.

In Lesson 3, you will learn how to design a complete scenario bank so you can simulate all four HireFlow skills systematically.
