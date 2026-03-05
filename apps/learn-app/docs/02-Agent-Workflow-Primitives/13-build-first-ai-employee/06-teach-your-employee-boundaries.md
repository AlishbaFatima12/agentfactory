---
sidebar_position: 6
title: "Teach Your Employee Boundaries"
description: "Define what your AI employee can do autonomously versus what requires your explicit approval, creating a human-in-the-loop workflow for sensitive professional actions"
keywords:
  [
    "human in the loop",
    "HITL",
    "approval workflow",
    "permission boundaries",
    "trust boundaries",
    "autonomous actions",
    "NanoClaw",
    "AI safety",
    "risk assessment",
  ]
chapter: 13
lesson: 6
duration_minutes: 40

skills:
  - name: "HITL Workflow Design"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student designs and implements a working human-in-the-loop approval system with domain-specific action categories and testable boundary enforcement"

  - name: "Risk Assessment"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student categorizes professional actions by risk level with reasoned justifications tied to their specific domain, not generic caution"

learning_objectives:
  - objective: "Design a human-in-the-loop approval system for sensitive domain actions"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a working boundary table with 4+ action categories and implements approval enforcement in CLAUDE.md"

  - objective: "Categorize professional actions by risk level with domain-specific reasoning"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student's boundary table includes reasoned justifications for each category that reflect real professional consequences, not generic caution"

  - objective: "Test approval workflows to verify boundary enforcement"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student triggers a restricted action and documents the employee stopping to ask permission before proceeding"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (reversible vs irreversible actions, permission categories, approval workflow mechanics, domain-specific risk reasoning) within B1-B2 limit"

differentiation:
  extension_for_advanced: "Design escalation tiers: some actions auto-approve with logging, some require approval within 1 hour, some require immediate approval. Implement time-based auto-reject for unresponded approvals."
  remedial_for_struggling: "Start with just two categories: auto-approve and needs-approval. Pick the three most obvious actions for each. Get the boundary table working before adding nuance."
---

# Teach Your Employee Boundaries

In Make Your Employee Proactive lesson, you made your employee proactive — it can now act without waiting for you. That is powerful, and it is dangerous. An employee that sends a client email without review, submits a filing with the wrong numbers, or deletes a production file is worse than one that does nothing at all.

This lesson is about trust architecture. Every real manager answers the same question for every new hire: what can you do on your own, and what do you bring to me first? Your AI employee needs the same clarity. The difference is that your employee follows boundaries with perfect consistency — it will never "just this once" skip the approval step. But only if you define those boundaries precisely.

You will build a permission boundary system that separates autonomous actions from gated ones, grounded in the real consequences of your profession.

## The Challenge

Create a boundary system where your employee knows exactly which actions it can take independently and which require your explicit approval before proceeding.

### Acceptance Criteria

1. A permission boundary table with 4 or more action categories, each labeled as **auto-approve**, **needs approval**, or **never automate**
2. A working approval workflow: your employee attempts a sensitive action, stops, asks for your permission, and either proceeds or halts based on your response
3. Domain-specific reasoning for every boundary — your justifications must reference real professional consequences, not generic caution like "this could be risky"

## Use Case Gallery

These examples show how boundaries differ across professions. Yours will reflect your domain.

**Accountant**
- Auto-approve: categorize expenses, reconcile bank feeds, generate draft reports
- Needs approval: submit tax filings, transfer funds over $100, send financial summaries to clients
- Never automate: sign legal documents, authorize payroll disbursements

**Teacher**
- Auto-approve: draft lesson plans, grade objective questions, organize student data
- Needs approval: send communications to parents, modify final grades, flag safeguarding concerns
- Never automate: make disciplinary decisions, share student records externally

**Recruiter**
- Auto-approve: screen resumes against job requirements, schedule internal meetings, draft outreach templates
- Needs approval: send rejection emails, schedule candidate interviews, share candidate profiles with hiring managers
- Never automate: make hiring commitments, negotiate salary terms

**Consultant**
- Auto-approve: research tasks, summarize meeting notes, draft internal memos
- Needs approval: send client deliverables, commit to project timelines, share proprietary frameworks
- Never automate: sign contracts, provide legal or regulatory advice

## Hints

<details>
<summary>Level 1 — Look at your work through a risk lens</summary>

Think about your daily professional actions and sort them by one question: **is this reversible?**

An expense categorization can be re-categorized. A sent email cannot be unsent. A draft report can be edited before sharing. A filed tax return triggers legal obligations.

Reversible actions are generally safe to automate. Irreversible actions — especially those involving money, legal commitments, external communications, or permanent records — need a human gate.

</details>

<details>
<summary>Level 2 — Ask your AI to map your domain</summary>

Open a conversation with your AI employee and try this prompt:

```
For a [your profession], list 12 common daily actions. Categorize each as:
- AUTO: safe to do without asking (reversible, internal, low stakes)
- REVIEW: do it but show me before sending/submitting (moderate stakes, external-facing)
- BLOCK: never do this without explicit approval (irreversible, legal, financial, reputational)

For each action, explain the specific professional consequence if it went wrong.
```

Use the AI's output as a starting point, then adjust based on your own risk tolerance and professional standards.

</details>

<details>
<summary>Level 3 — Implement and test the boundary system</summary>

**Step 1:** Create your boundary table in a file called `hitl-boundaries.md`:

| Action | Category | Reasoning |
|--------|----------|-----------|
| Categorize expenses | Auto | Reversible; internal only; no client impact |
| Send client invoice | Review | External-facing; wrong amount damages trust |
| Submit tax filing | Block | Legal obligation; penalties for errors; irreversible once filed |
| ... | ... | ... |

**Step 2:** Encode these boundaries in your `groups/main/CLAUDE.md`. Add a rules section that instructs the employee:

- For AUTO actions: proceed and log what you did
- For REVIEW actions: draft the output, show it to me, and wait for my "approved" or "rejected" before sending
- For BLOCK actions: never attempt these — inform me that the action requires my direct involvement

**Step 3:** Test by triggering a REVIEW action. Ask your employee to do something in the "needs approval" category. Verify that it stops and asks. Then approve it and verify it proceeds. Then trigger it again and reject it — verify it halts.

Document your test results alongside your boundary table.

</details>

