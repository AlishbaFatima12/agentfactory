---
sidebar_position: 5
title: "Make Your Employee Proactive"
description: "Transform your reactive AI employee into a proactive one by designing and deploying a scheduled task that monitors, analyzes, and delivers domain-relevant information without being asked."
keywords: [nanoclaw, scheduled tasks, proactive, automation, monitoring, ai employee, silver tier]
chapter: 13
lesson: 5
duration_minutes: 40

skills:
  - name: "Autonomous Task Design"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student designs and deploys a scheduled task that produces domain-relevant output on a recurring basis without manual triggering"
  - name: "Schedule Optimization"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student explains why their chosen schedule interval matches their professional work rhythm and adjusts timing based on practical constraints"

learning_objectives:
  - objective: "Design a proactive monitoring task aligned with a specific professional workflow"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Working scheduled task configuration with documented rationale for what to monitor, when, and why"
  - objective: "Configure scheduled execution with appropriate intervals for the chosen domain"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Demonstrated recurring task that fires at the configured interval and delivers output to a channel"
  - objective: "Validate autonomous output quality using real domain data"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Written assessment of at least one scheduled output comparing it against what a human professional would produce"

cognitive_load:
  new_concepts: 4
  assessment: "Scheduled task design, interval selection, autonomous output quality, and proactive vs reactive paradigm. B1-B2 appropriate since students have a working employee from Bronze tier."

differentiation:
  extension_for_advanced: "Add a second scheduled task that depends on the output of the first. For example: daily scan triggers a weekly summary that aggregates the daily findings."
  remedial_for_struggling: "Start with a simple daily greeting message delivered at a fixed time. Once that works, evolve it to include one piece of domain-relevant information."
---

# Make Your Employee Proactive

In the Bronze tier, your employee waited for you to send a message before doing anything. Every real employee you have ever worked with eventually learned to anticipate — checking things before you ask, flagging problems before they become urgent, preparing information you will need before you need it.

This is the difference between an assistant and an employee. An assistant responds. An employee monitors, anticipates, and acts. The shift from reactive to proactive is what makes your AI employee genuinely useful rather than merely convenient.

Your challenge is to identify the single recurring task that would save you the most time if it happened automatically, then make your employee do it on a schedule.

## The Challenge

Design and deploy at least one scheduled task that runs on a recurring basis (daily, weekly, or custom interval), produces domain-relevant output, and delivers it through one of your configured channels.

### Acceptance Criteria

1. At least one scheduled task is running and fires at the configured interval
2. The task produces output that is genuinely relevant to your professional domain — not placeholder text or generic summaries
3. The output uses real data from your work context (files, sources, or domain knowledge from your skill)
4. You can explain why you chose this specific schedule interval and how it fits your actual work rhythm

### Deliverable

Create a `scheduler-config.md` file in your repo documenting:
- What the task monitors or produces
- The schedule interval and why you chose it
- A sample output from at least one execution
- Your assessment of whether this output would actually save you time

## Use Case Gallery

| Profession | Scheduled Task | Interval | What It Delivers |
|------------|---------------|----------|-----------------|
| **Accountant** | Scan expense folder for new receipts | Daily, 8 AM | List of new items with amounts, flagging anything over $500 for manual review |
| **Teacher** | Compile lesson prep status for the week | Monday, 7 AM | Summary of which lessons are ready, which have gaps, and suggested priorities |
| **Consultant** | Summarize client project progress | Friday, 5 PM | Per-client status with hours spent, milestones hit, and overdue items highlighted |
| **Doctor** | Check patient follow-up schedule | Daily, 7 AM | List of patients due for follow-up, sorted by urgency, with days since last contact |

The best scheduled task is one you currently do manually on a regular basis. If you find yourself checking the same thing every morning or preparing the same report every Friday, that is your candidate.

## Hints

<details>
<summary>Level 1: Where to Look</summary>

NanoClaw supports scheduled tasks through its task management system. Check the `/setup` documentation and the NanoClaw repository for how to configure recurring jobs. Look at how existing scheduled tasks are defined — the pattern is: specify WHAT to do, WHEN to do it, and WHERE to send the output.

</details>

<details>
<summary>Level 2: Ask Your AI</summary>

Send this to Claude or your AI employee:

"What recurring task would save me the most time if automated? I'm a [your profession]. Consider my work rhythm — when during the day or week do I most need information delivered proactively? What data source would this task need to monitor?"

Use the answer to narrow your choice before building.

</details>

<details>
<summary>Level 3: Design Framework</summary>

Break your scheduled task into four decisions:

1. **WHAT to monitor:** The data source or condition your employee checks (a folder, a calendar, a list, a status)
2. **WHEN to check:** The interval that matches your work rhythm (daily at 8 AM? Monday mornings? Every Friday evening?)
3. **WHAT to report:** The output format — what information and how it is structured (bullet list? table? prioritized flags?)
4. **WHERE to deliver:** Which channel receives the output (WhatsApp? Slack? Gmail? The channel from Connect Your Employee to the World?)

Configure the task in NanoClaw using its scheduling capabilities. Start with a short interval for testing (every few minutes), verify the output looks right, then switch to the production schedule.

</details>

