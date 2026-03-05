---
sidebar_position: 8
title: "Project Review"
description: "Evaluate your AI employee build against tier-specific acceptance criteria, reflect on the gap between design and implementation, and identify next steps"
keywords:
  [
    "assessment",
    "self-evaluation",
    "portfolio",
    "checklist",
    "NanoClaw",
    "AI employee",
    "reflection",
    "deliverables",
  ]
chapter: 13
lesson: 8
duration_minutes: 25

skills:
  - name: "Self-Assessment"
    proficiency_level: "B1"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student evaluates their completed work against published acceptance criteria and honestly identifies gaps between intended and actual outcomes"

  - name: "Portfolio Documentation"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student compiles all project deliverables into a documented portfolio structure with evidence of completion at their chosen tier"

learning_objectives:
  - objective: "Evaluate completed work against tier-specific acceptance criteria"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student completes the submission checklist for their tier and honestly marks items as done or incomplete with notes"

  - objective: "Reflect on the gap between design and implementation"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student compares their Layer 3 design from Ch 7 L10 with what they actually built and articulates what changed and why"

  - objective: "Identify concrete next steps for advancing to a higher tier"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student lists specific actions needed to move from their current tier to the next, with realistic time estimates"

cognitive_load:
  new_concepts: 2
  assessment: "2 concepts (self-evaluation against criteria, gap analysis between plan and execution) — deliberately light to focus on reflection, not new learning"

differentiation:
  extension_for_advanced: "Write a 1-page 'lessons learned' document that someone starting this project could use to avoid your mistakes and accelerate their build."
  remedial_for_struggling: "Focus on the Bronze checklist only. For any incomplete items, write one sentence explaining what blocked you and what you would need to complete it."
---

# Project Review

In Lesson 0, you received a project brief. In Lessons 1 through 7, you built a working AI employee for your profession. Now you evaluate what you actually produced.

This assessment is not a test — it is an honest inventory. The checklist below tells you exactly what a completed build looks like at each tier. Check what you finished, note what you did not, and decide what comes next.

## Submission Checklist

Review your `nanoclaw-employee/` repository against the criteria for your tier. Check each item you completed.

### Bronze Tier

- [ ] `groups/main/CLAUDE.md` with profession-specific identity — not a generic assistant, but an employee that knows your domain vocabulary, common tasks, and professional standards (L01)
- [ ] Custom `SKILL.md` in `.claude/skills/` with 5 or more domain decision rules — rules that encode how a professional in your field makes judgment calls, not just task instructions (L02)
- [ ] Working channel or MCP connection documented — your employee can communicate through at least one external channel beyond the terminal (L03)
- [ ] `conversation-log.md` with 3 to 5 real professional tasks — actual work you delegated, not toy examples, with the employee's responses and your assessment of quality (L04)
- [ ] `evaluation.md` with completed rubric and honest reflection — did the employee perform at the level of a junior colleague, an intern, or not yet useful? (L04)

### Silver Tier (All Bronze items, plus)

- [ ] `scheduler-config.md` with scheduled task design — what runs, when, and why that cadence matters for your profession (L05)
- [ ] `hitl-boundaries.md` with 4 or more categorized actions — each with domain-specific reasoning for why it is auto-approve, needs-approval, or never-automate (L06)
- [ ] `domain-report-sample.md` — an actual report your employee generated autonomously, pulling from 2 or more data sources, containing at least one proactive recommendation (L07)

### Gold Tier (All Silver items, plus)

- [ ] 3 groups configured with distinct `CLAUDE.md` files — `main` (admin), a professional work group, and a client-facing or external group, each with different identity and permissions (L07)
- [ ] Isolation test results documented — evidence that the non-admin group cannot perform admin actions or access restricted data (L07)
- [ ] System architecture diagram — showing the three groups, their data access boundaries, and communication flows between them (L07)

## Reflection

Pull up your Layer 3 design from Chapter 7 Lesson 10. That design listed the skills you planned to build and the MCP servers you planned to connect. Compare it with what you actually built.

Consider these questions:

**How much of your Layer 3 design did you implement?** Count the skills you designed versus the skills you built. Count the MCP connections you planned versus the ones that work. The gap between plan and execution is normal — the question is whether you understand why the gap exists.

**What would take your employee from its current tier to the next?** If you completed Bronze, what specific work would get you to Silver? If you completed Silver, what is the hardest part of Gold? Be concrete — "add scheduling" is vague, "build a weekly cash flow report skill that reads bank CSV and invoice spreadsheet" is actionable.

**What surprised you about encoding your professional expertise into an AI system?** Most people discover that the hardest part is not the technology — it is articulating the judgment calls they make unconsciously every day. What did you know that you did not know you knew?
