---
sidebar_position: 4
title: "Economic Participation in HireFlow"
description: "Map the specific locations in HireFlow's pipeline where agents could autonomously acquire resources."
chapter: 62
lesson: 4
duration_minutes: 20
keywords:
  [
    economic participation point,
    HireFlow pipeline,
    applied exercise,
    domain mapping,
    resource acquisition,
  ]

skills:
  - name: "Economic Participation Mapping"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can identify at least three economic participation points in a given agent factory pipeline and specify the resource, trigger, and budget category for each"
  - name: "Cross-Domain Transfer"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can apply the economic participation point framework to a domain outside recruitment"

learning_objectives:
  - objective: "Identify three economic participation points in HireFlow's four-FTE pipeline"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Completion of Exercise 1"
  - objective: "For each participation point, specify the resource, trigger condition, budget category, and spending envelope"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Completed participation point table"
  - objective: "Apply the economic participation framework to a domain of the reader's choosing"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Completion of Exercise 2"

cognitive_load:
  new_concepts: 1
  assessment: "Low. One new concept (economic participation point) applied to a domain the reader already knows (HireFlow). Most cognitive effort goes to application, not acquisition."

differentiation:
  extension_for_advanced: "For each participation point, write a one-sentence spending policy that an automated system could enforce. Example: 'Translation services approved up to $0.10 per document for languages in the approved list.'"
  remedial_for_struggling: "Start with Exercise 1 only. Focus on finding three participation points. The table template provides structure. If you can fill in all five columns for one point, you can do the others."
---

# Economic Participation in HireFlow

You know the principle: agents need budgets, not permissions. You know the components: resource budgets, spending envelopes, audit trails. Now you apply them.

This lesson is hands-on. You will map the specific locations in HireFlow's pipeline where economic participation could occur. These locations are called **economic participation points**: spots where an agent could autonomously acquire a resource to complete its task.

Quick recall from Chapter 61, Lesson 5: HireFlow has four Digital FTEs in a pipeline.

| FTE                              | Input                               | Output                                      |
| -------------------------------- | ----------------------------------- | ------------------------------------------- |
| **Job Spec Writer**              | Hiring manager brief                | Structured job description + scoring rubric |
| **Resume Screener**              | CV + job description                | Scored candidate profile                    |
| **Interview Question Generator** | Job description + candidate profile | Interview guide + scoring criteria          |
| **Candidate Summarizer**         | All prior data                      | Decision-ready candidate brief              |

Each FTE receives inputs and produces outputs. Between those inputs and outputs, there are moments where the FTE might need something it does not have. Those moments are economic participation points.

## What Makes a Participation Point

Not every resource need is an economic participation point. The term is specific.

An economic participation point has three characteristics:

1. **The need is triggered by data, not by design.** The FTE encounters something in its input that requires a resource not pre-configured. A Mandarin CV that needs translation. A PhD thesis that needs summarization before scoring. A job description that references an industry standard the FTE does not have in its knowledge base.

2. **The acquisition is bounded.** The resource has a known cost, a known provider, and a known scope. The FTE is not making an open-ended decision. It is selecting from approved options within a spending envelope.

3. **The outcome improves pipeline quality.** Skipping the acquisition degrades the output. The participation point exists because the alternative (skipping) is worse than the cost.

"So a participation point is not 'the agent needs tokens,'" James said. "Tokens are always needed. A participation point is 'the agent needs a _specific additional resource_ because of something in the data.'"

"Correct. Token consumption is baseline. Participation points are where the baseline is not enough."

## Emma Sets the Challenge

Emma stepped back from the whiteboard. "Here is what I want you to do. Walk through each FTE. Think about what could go wrong, what could be missing, what could be unexpected. For each one, find at least one participation point."

She picked up her coffee. "I need to check on something. I will be back in fifteen minutes. Use this template."

| FTE         | Trigger                                 | Resource Needed              | Budget Category                          | Spending Envelope          |
| ----------- | --------------------------------------- | ---------------------------- | ---------------------------------------- | -------------------------- |
| (which FTE) | (what data condition triggers the need) | (what the FTE would acquire) | (tokens / compute / API calls / storage) | (what ceiling would apply) |

James stared at the empty table. Four FTEs. Each with different inputs, different failure modes, different edge cases.

He started with the Resume Screener, because that was the FTE Emma had used in every example so far.

## Exercise 1: Map Three Participation Points in HireFlow

Fill in the template below with at least three economic participation points across HireFlow's four FTEs. For each point, specify all five columns.

If you get stuck, here are three questions to ask yourself for each FTE:

- What happens when the input is in an unexpected format?
- What happens when the FTE needs external knowledge it does not have?
- What happens when the FTE's normal processing path is too slow or too expensive for a specific input?

**Your table:**

| FTE | Trigger | Resource Needed | Budget Category | Spending Envelope |
| --- | ------- | --------------- | --------------- | ----------------- |
|     |         |                 |                 |                   |
|     |         |                 |                 |                   |
|     |         |                 |                 |                   |

Take ten minutes. Write your answers before reading further.

---

### Reference Answers

When Emma came back, James had filled in three rows. Here is what he had, alongside Emma's feedback.

**Point 1: Resume Screener + Foreign Language CV**

| FTE             | Trigger                                | Resource Needed              | Budget Category | Spending Envelope                           |
| --------------- | -------------------------------------- | ---------------------------- | --------------- | ------------------------------------------- |
| Resume Screener | CV submitted in a non-English language | Translation service API call | API calls       | $0.10 per document, approved languages only |

Emma nodded. "Good first instinct. One thing to add: the spending envelope should specify what happens when the language is not on the approved list. Does the pipeline pause? Does it queue the CV for human review?"

"Queue for human review," James said. "Pausing the whole pipeline because of one CV is too aggressive."

"Agreed. That is a policy decision, and you made a reasonable one."

**Point 2: Interview Question Generator + Industry Standard Reference**

| FTE                          | Trigger                                                             | Resource Needed                     | Budget Category    | Spending Envelope                             |
| ---------------------------- | ------------------------------------------------------------------- | ----------------------------------- | ------------------ | --------------------------------------------- |
| Interview Question Generator | Job description references a compliance standard (e.g., SOX, HIPAA) | Access to regulatory knowledge base | API calls + tokens | $0.50 per lookup, max 3 lookups per candidate |

"This one is more subtle," Emma said. "The trigger is not format. It is content. The job description mentions a standard. The Question Generator needs to understand that standard to generate relevant technical questions."

"I almost missed it," James said. "I was thinking about format problems. But the Generator could produce terrible questions about SOX compliance if it does not know what SOX requires."

"Exactly. And notice that this participation point involves two budget categories: the API call to the knowledge base, plus the tokens to process the response. Your spending envelope accounts for both."

**Point 3: Candidate Summarizer + Reference Verification**

| FTE                  | Trigger                                             | Resource Needed                     | Budget Category | Spending Envelope                              |
| -------------------- | --------------------------------------------------- | ----------------------------------- | --------------- | ---------------------------------------------- |
| Candidate Summarizer | Candidate lists references with contact information | Third-party reference check service | API calls       | $5.00 per reference check, max 2 per candidate |

"This is the most expensive one," James said. "A reference check service costs real money. Not fractions of a cent like a translation API."

"Which is why the spending envelope matters. Two checks per candidate, capped at five dollars each. If the service costs more, the Summarizer flags it for human review instead of proceeding."

Emma studied the table. "You found three good ones. Notice something about your three points?"

James looked. "They are all triggered by data. Not by design flaws. The pipeline is working correctly. The data is just... varied."

"That is the nature of economic participation. It happens at the boundary between what you planned for and what the real world sends you."

## Exercise 2: Map Two Participation Points in Your Own Domain

In Chapter 61, Lesson 5, you identified a domain for your own agent factory. If you have not done that exercise, pick a domain now: customer support, content moderation, inventory management, invoice processing, or anything you know well.

For your domain, identify two economic participation points using the same template:

| FTE / Agent | Trigger | Resource Needed | Budget Category | Spending Envelope |
| ----------- | ------- | --------------- | --------------- | ----------------- |
|             |         |                 |                 |                   |
|             |         |                 |                 |                   |

Ask yourself the same three questions:

- What happens when the input is in an unexpected format?
- What happens when the agent needs external knowledge it does not have?
- What happens when the agent's normal processing path is too slow or too expensive?

:::tip USING AI FOR THIS EXERCISE
After you have filled in the table yourself, show it to Claude Code and ask: "What economic participation points did I miss? For each one I found, is the spending envelope realistic?" Compare the AI's suggestions with your own analysis. Where do they agree? Where do they differ?
:::

There is no single correct answer. The goal is to practice recognizing where the boundary between planned resources and real-world variation creates a need for autonomous acquisition.

## What You Built

You now have a concrete map of where economic participation would occur in HireFlow's pipeline. This is not theoretical. When you build the orchestrator in Chapter 84, each participation point becomes a location where the budget tracker increments counters and the spending envelope checks limits. When you build security in Chapter 87, each participation point becomes an attack surface where budget abuse could occur.

The table you filled in is the bridge between the concept (agents as economic actors) and the implementation (budget tracking, spending envelopes, audit trails in running code).

In Lesson 5, you will reflect on the chapter as a whole and take the chapter quiz.
