---
sidebar_position: 0
title: "The Project Brief"
description: "Frame your AI employee project, choose an achievement tier, and set up your repository structure using the NanoClaw platform you installed in Chapter 7"
keywords: ["NanoClaw", "AI employee", "project scoping", "WhatsApp agent", "Layer 3 design", "project tiers"]
chapter: 13
lesson: 0
duration_minutes: 20

skills:
  - name: "Project Scoping"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can decompose a multi-lesson project into tiered deliverables with clear scope boundaries and time estimates"

  - name: "Tier-Based Planning"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can assess their own goals and available time to select an appropriate project tier, justifying the choice against alternatives"

learning_objectives:
  - objective: "Select an achievement tier based on personal goals and available time"
    proficiency_level: "A2"
    bloom_level: "Evaluate"
    assessment_method: "Student documents tier choice with rationale in their project repository README"

  - objective: "Map a Layer 3 design to concrete project deliverables"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Student annotates their Layer 3 design from Ch 7 L10, identifying which skills and MCP servers they will implement first"

  - objective: "Set up a project repository with the correct directory structure"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student creates a GitHub repository matching the specified structure with a README that states profession, tier, and timeline"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (tier selection, deliverable mapping, repo structure, design-to-implementation bridge) well within A2 range of 5-7"

differentiation:
  extension_for_advanced: "Gold tier students plan multi-group architecture with isolation boundaries upfront, sketching a system diagram before writing any configuration"
  remedial_for_struggling: "Students unsure of their Layer 3 design revisit Ch 7 L10 and use the acceptance criteria and use case gallery to refine their design for their profession"
---

# The Project Brief

In Chapter 7 Lesson 10, you installed NanoClaw, connected it to WhatsApp, and designed a Layer 3 blueprint for your profession. You sketched out agent skills, MCP servers, and the domain expertise your AI employee would need. That blueprint has been sitting in your notes, waiting.

Now you build it. Over the next several lessons, you will turn that design into a working AI employee that responds to real messages, thinks like a domain expert, and handles professional tasks through WhatsApp. This is not a tutorial where you follow instructions step by step. Each lesson gives you a challenge, acceptance criteria, and hints if you get stuck. You bring your profession, your expertise, and your Layer 3 design.

The result is something you can actually use: an AI employee built for YOUR work, running on YOUR machine, accessible from YOUR phone.

## What You Are Building

Your AI employee is a NanoClaw instance configured for your specific profession. It receives messages via WhatsApp (and optionally other channels), processes them using Claude with your domain knowledge encoded as skills, and responds with profession-appropriate expertise.

By the end of the Bronze tier, your employee will have a professional identity, at least one domain skill, a working communication channel, and a logged conversation proving it works. Silver adds proactive behavior, trust boundaries, and a domain-specific report. Gold extends the architecture to multiple isolated groups.

## Choose Your Tier

| Tier | Lessons | Time | What You Build |
|------|---------|------|----------------|
| **Bronze** | L00 through L04 | ~3 hours | Identity + one skill + WhatsApp connection + proof of work |
| **Silver** | L00 through L07 | ~5 hours | Bronze + scheduled tasks + permission boundaries + domain report |
| **Gold** | L00 through L07 (Gold path) | ~8 hours | Silver + multi-group architecture with per-group isolation |

Pick the tier that matches your time and ambition. Every tier produces something functional. You can always return for the next tier later.

## Your Blueprint

Pull out your Layer 3 design from Chapter 7 Lesson 10. This is your blueprint for everything that follows. It should contain:

- **3+ Agent Skills** you planned for your profession (the domain expertise to encode)
- **3+ MCP Servers** you identified (the external connections your employee needs)
- **Domain vocabulary and rules** specific to your field

If your design is missing any of these, revisit it now and fill the gaps before moving forward.

Review your design and mark which skill you will implement first. Choose the one that would deliver the most value in a single conversation -- that is your Bronze target.

## Acceptance Criteria

1. You have chosen a tier (Bronze, Silver, or Gold) and can explain why
2. Your Layer 3 design from Ch 7 L10 is reviewed, with your first skill identified
3. Your GitHub repository exists with the structure below

## Set Up Your Project Repository

Create a repository called `nanoclaw-employee` on GitHub. Initialize it with this structure:

```
nanoclaw-employee/
  groups/
    global/
      CLAUDE.md           (shared rules across all groups)
    main/
      CLAUDE.md           (profession-specific identity)
  .claude/
    skills/
      (your skills will go here)
  README.md               (profession, tier choice, timeline)
  conversation-log.md     (you will fill this in L04)
  evaluation.md           (you will fill this in L04)
```

Your README should state your profession, your chosen tier, and when you plan to complete each lesson.

## Use Case Gallery

What does a completed AI employee look like across different professions? Here are four examples at each tier.

**Accountant**
- Bronze: An employee that reviews invoice descriptions, flags missing fields, and checks tax line calculations via WhatsApp
- Silver: Sends a daily summary of outstanding invoices every morning at 8am, refuses to file any document without CPA review
- Gold: Separate groups for "Client A" and "Client B" with isolated financial data per client

**Teacher**
- Bronze: An employee that drafts lesson activity ideas aligned to curriculum standards when you message it a topic
- Silver: Sends weekly curriculum gap analysis every Sunday evening, flags any request to generate student grades
- Gold: Separate groups for "Grade 5 Math" and "Grade 5 Science" with isolated planning contexts

**Real Estate Agent**
- Bronze: An employee that researches comparable properties and summarizes listing details when you send an address
- Silver: Monitors new listings daily and sends morning alerts for properties matching client criteria, refuses to state property values as facts
- Gold: Separate groups for each client with isolated search histories and preferences

**Freelance Designer**
- Bronze: An employee that tracks project briefs, extracts deliverable deadlines, and flags revision requests when you forward client messages
- Silver: Sends a weekly capacity report every Monday, refuses to commit to timelines without checking current workload
- Gold: Separate groups per client with isolated project contexts and communication logs

