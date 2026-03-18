---
slug: /Business-Domain-Agent-Workflows/product-management/chapter-summary-quick-reference
sidebar_position: 15
title: "Chapter Summary & Quick Reference"
description: "A complete reference for Chapter 36 — all 13 commands across both plugins, the three PM agents, key frameworks, and the consolidated 'NEVER DO' quality rules from every skill spec"
keywords:
  [
    "product management",
    "quick reference",
    "PM commands",
    "plugin commands",
    "PM frameworks",
    "chapter summary",
    "product-management plugin",
    "product-strategy plugin",
  ]
chapter: 36
lesson: 15
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Navigate the full Chapter 36 command library across both plugins to select the right command for a given PM task"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can identify the correct command and plugin for any PM task described in the quick reference table without referring back to individual lessons"

learning_objectives:
  - objective: "Recall the purpose and plugin source of all 13 Chapter 36 commands without referencing individual lessons"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Student can correctly match all 13 commands to their plugin source and one-line purpose in the quick reference table"

cognitive_load:
  new_concepts: 0
  concepts_list: []
  assessment: "No new concepts — this is a pure reference lesson. Cognitive load is minimal. The value is consolidation: bringing together 15 lessons of material into a single navigable reference."

differentiation:
  extension_for_advanced: "Use this reference page as the basis for a product.local.md custom commands section. For each of the 13 commands, write a one-sentence 'when I use this' rule specific to your product context. These personalised rules, added to product.local.md, will pre-configure each command's context so outputs are immediately specific to your product."
  remedial_for_struggling: "Work through the PM workflow cycle diagram one step at a time. For each step, find the corresponding command in the quick reference table. Then open that lesson and re-read the 'What You Built' section. The goal is to rebuild the mental model of the full cycle before using these commands on a real product."

teaching_guide:
  key_points:
    - "The two-plugin architecture is the chapter's structural insight: the official product-management plugin provides foundational PM workflows, the custom product-strategy plugin fills workflow gaps the official plugin does not cover"
    - "No single command covers the full PM cycle — the commands form a chain, with each lesson's output feeding the next"
    - "The NEVER DO rules are the quality standards encoded in each skill — they are as important as the commands themselves"
  misconceptions:
    - "The official plugin is better than the custom plugin. Correction: They serve different purposes. The official plugin covers foundational workflows; the custom plugin covers discovery and strategy gaps. Use both based on the task, not based on which is 'official'."
  discussion_prompts:
    - "You are onboarding a new PM onto your team. They have 30 minutes. Which three commands would you show them first, and why? Your answer reveals which parts of the PM workflow are highest-leverage for your specific product context."
  teaching_tips:
    - "This page is a navigation aid — refer students back to it when they are unsure which command to use for a new PM task. It should be the first stop before searching through individual lessons."
---

# Chapter Summary & Quick Reference

Chapter 36 taught you to deploy AI agents across the full product management workflow cycle — from discovery through retrospective. This page consolidates everything into a single reference: commands, agents, frameworks, and quality rules.

## The PM Workflow Cycle

Product management is a cycle, not a sequence. Each phase produces artifacts that feed the next:

```
DISCOVER → RESEARCH → DEFINE → PLAN → EXECUTE → COMMUNICATE → MEASURE → REFLECT
   │           │          │        │        │           │            │         │
 /brief    /interview  /write-  /road-   /sprint-  /stake-    /metrics-   /retro
            /synth-    spec     map-      planning  holder-     review
            esise-     /prd    update               update
            research  /stories
                      /prio-
                      ritise
```

The cycle feeds back: `/retro` findings update `product.local.md`, which improves every subsequent command's output.

## Two-Plugin Architecture

| Plugin               | Layer              | Repository                                       | Install                                                                                                                                                                                          |
| -------------------- | ------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `product-management` | Layer 1 — Official | `knowledge-work-plugins/product-management`      | `claude plugins add knowledge-work-plugins/product-management`                                                                                                                                   |
| `product-strategy`   | Layer 2 — Custom   | `agentfactory-business-plugins/product-strategy` | Cowork sidebar: Customize > Browse plugins > Personal > + > Add marketplace from GitHub > enter `https://github.com/panaversity/agentfactory-business-plugins` > find Product Strategy > Install |

## All 13 Commands — Quick Reference

### Official product-management Plugin (7 commands)

| Command                | Lesson | Purpose                                                                                                | When to Use                                                            |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `/write-spec`          | L06    | Write a feature specification with problem, requirements, acceptance criteria, and edge cases          | You have a feature to define — after research, before the PRD          |
| `/roadmap-update`      | L09    | Plan, structure, and communicate the product roadmap in engineering, executive, and customer formats   | Roadmap planning cycles, quarterly reviews, stakeholder alignment      |
| `/synthesize-research` | L04    | Synthesise raw user research (interview notes, support data, surveys) into structured product insights | After user interviews, surveys, or support ticket analysis             |
| `/stakeholder-update`  | L12    | Generate audience-calibrated stakeholder updates: executive, engineering, and customer versions        | Weekly status, launch announcements, escalations, risk communication   |
| `/competitive-brief`   | L05    | Research and structure competitive intelligence into a positioning-focused brief                       | Before PRD or roadmap planning when competitive landscape matters      |
| `/metrics-review`      | L13    | Review and analyse product metrics with trend analysis and recommended actions                         | Weekly/monthly/quarterly review cycles; investigating metric anomalies |
| `/sprint-planning`     | L11    | Plan a sprint by scoping work against real team capacity, setting goals, and drafting the sprint plan  | Sprint planning at the start of every sprint                           |

### Custom product-strategy Plugin (6 commands)

| Command       | Lesson | Purpose                                                                                                                           | When to Use                                                        |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `/brief`      | L03    | Create a problem brief, discovery brief, or initiative brief — reframe feature requests into structured problem-focused documents | Discovery phase: before committing to any solution                 |
| `/interview`  | L04    | Generate interview guides and synthesis frameworks for user research                                                              | Before user interviews or focus groups                             |
| `/prd`        | L07    | Generate a Product Requirements Document for multi-team initiatives — wraps a feature spec into a team-alignment document         | After the feature spec, when multiple teams need to coordinate     |
| `/stories`    | L08    | Generate user stories with acceptance criteria from a PRD or feature spec                                                         | After PRD, before sprint planning                                  |
| `/prioritise` | L10    | Apply RICE, MoSCoW, ICE, or Now/Next/Later scoring to a backlog                                                                   | Backlog grooming, quarterly planning, sprint composition decisions |
| `/retro`      | L14    | Structure a product retrospective with four questions, metric quality ratings, and specific process improvement commitments       | 4-12 weeks post-feature launch; sprint retrospectives              |

## Three PM Agents — Quick Reference

| Agent                   | Plugin           | Schedule                         | Purpose                                                                                                    | Escalation Threshold                                                                       |
| ----------------------- | ---------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `research-intelligence` | product-strategy | Monday 8 AM (weekly)             | Monitor user signals (support, NPS, feature requests), synthesise weekly digest, surface emerging problems | Any theme in support + NPS + feature requests simultaneously → escalate immediately        |
| `stakeholder-update`    | product-strategy | Friday 2 PM (weekly) + triggered | Generate three-version update queue for PM review: executive, engineering, customer-facing                 | Any customer-committed feature status change → immediate draft, queue for PM               |
| `roadmap-coherence`     | product-strategy | Wednesday 9 AM (weekly)          | Three coherence checks: backlog orphan detection, roadmap coverage, sprint alignment                       | Sprint >30% off-roadmap → alert PM + EM; NOW item no spec <3 sprints to target → immediate |

**Deploying agents:** Use `/schedule` in Cowork to configure each agent's schedule, data sources, and escalation thresholds.

## Key Frameworks Reference

| Framework               | Command               | When to Use                            | Key Rule                                                                                                                        |
| ----------------------- | --------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **RICE scoring**        | `/prioritise`         | Backlog prioritisation                 | Reach × Impact × Confidence ÷ Effort. Default to RICE when you have enough data.                                                |
| **MoSCoW**              | `/prioritise`         | Sprint scope decisions, MVP definition | Must Have / Should Have / Could Have / Won't Have. Use when scope is the constraint.                                            |
| **ICE scoring**         | `/prioritise`         | Fast backlog triage                    | Impact × Confidence × Ease. Use when you need a quick first-pass prioritisation.                                                |
| **Now/Next/Later**      | `/roadmap-update`     | Roadmap communication                  | Now (committed, current quarter) / Next (strong intent, next quarter) / Later (directional, future). Never use dates for Later. |
| **ROAM**                | `/stakeholder-update` | Risk communication                     | Resolved / Owned / Accepted / Mitigated. Every risk in a stakeholder update must be ROAM-classified.                            |
| **70/20/10 allocation** | `/prioritise`         | Roadmap theme allocation               | 70% core product improvement, 20% expansion, 10% exploratory. Prevents any single theme from consuming the full roadmap.        |

## Consolidated NEVER DO Rules

These rules are encoded in the skill specs. They are the quality standards that separate a useful AI-generated PM artifact from a mediocre one.

### Discovery (/brief)

- Never include solution proposals in a problem brief's PROBLEM section
- Never omit the WHAT WE DO NOT KNOW section — if it says N/A, the brief is not a brief
- Never write vague discovery questions — each must name a research method and be answerable

### Specifications (/write-spec)

- Never write acceptance criteria that are not independently testable
- Never include "fast", "user-friendly", or other unmeasurable adjectives in ACs
- Never omit the scope boundary section (what is explicitly NOT in this spec)

### Stakeholder Updates (/stakeholder-update)

- Never send the same version to different audiences
- Never bury risks inside good news — lead with risks when they are important
- Never use Yellow as a failure signal — it is good risk management

### Metrics (/metrics-review)

- Never present a metric without a comparison (previous period, target, or benchmark)
- Never attribute a metric change as certain — correlation is not causation
- Never produce a review that does not lead to at least one recommended action

### Retrospectives (/retro)

- Never run a retro without outcome data
- Never produce vague process improvements ("communicate better")
- Never close a retro without at least one product.local.md update

### Agents

- Never auto-send any stakeholder communication without PM review and approval
- Never surface a single user complaint as a signal — three is a pattern, five is a signal
- Never classify maintenance or bug fixes as off-roadmap work

## product.local.md — Your PM Configuration File

`product.local.md` is the context file that makes every command specific to your product. It is introduced in L02 and updated throughout the chapter — especially after retrospectives.

**Required sections:**

| Section              | What to Include                                                          |
| -------------------- | ------------------------------------------------------------------------ |
| Product Identity     | Name, description, stage, core value proposition                         |
| Personas             | 2-3 personas with goal, frustration, and behavioural signals             |
| Team Structure       | Engineering size, sprint cadence, backlog tool, velocity                 |
| Stakeholder Map      | Each stakeholder's name, role, key question, communication preference    |
| Terminology Glossary | What you call users, product entities, deprecated terms to avoid         |
| Quality Standards    | Definition of "ready for sprint", "launch-ready", accessibility standard |
| PM Process Rules     | Quality rules accumulated from retrospectives (updated each retro)       |

**Template location:** `product.local.md.template` in the product-strategy plugin directory.

## Lesson Map

| Lesson | Title                                             | Plugin   | Command(s)                            |
| ------ | ------------------------------------------------- | -------- | ------------------------------------- |
| L01    | The PM's Cognitive Load Problem                   | —        | None                                  |
| L02    | Plugin Architecture & Product Context             | Both     | Setup + product.local.md              |
| L03    | Discovery Briefs — Framing the Right Problem      | Custom   | `/brief`                              |
| L04    | User Research — Interviews & Synthesis            | Both     | `/interview` + `/synthesize-research` |
| L05    | Competitive Intelligence                          | Official | `/competitive-brief`                  |
| L06    | Feature Specifications                            | Official | `/write-spec`                         |
| L07    | PRDs for Multi-Team Initiatives                   | Custom   | `/prd`                                |
| L08    | User Stories & Story Mapping                      | Custom   | `/stories`                            |
| L09    | Roadmap Planning & Communication                  | Official | `/roadmap-update`                     |
| L10    | Backlog Prioritization Frameworks                 | Custom   | `/prioritise`                         |
| L11    | Sprint Planning & Capacity                        | Official | `/sprint-planning`                    |
| L12    | Stakeholder Communication                         | Official | `/stakeholder-update`                 |
| L13    | Metrics, OKRs & Product Analytics                 | Official | `/metrics-review`                     |
| L14    | Continuous Intelligence — Agents & Retrospectives | Custom   | `/retro` + `/schedule`                |
| L15    | Chapter Summary & Quick Reference                 | —        | Reference                             |
| L16    | Chapter Quiz                                      | —        | 50 questions                          |

## The Central Thesis

> "The PM's job is judgment. AI removes the bottleneck between judgment and the documentation that expresses it."

The best PMs in this chapter did not use AI to replace their thinking. They used AI to express their thinking at the quality it deserves — in a fraction of the time. The agent writes the first draft. The PM reviews, directs, and refines. The output reflects the PM's judgment, not the agent's defaults.

What does not change: the PM's job is judgment. Which user problem matters most. Which solution deserves to be built. What to say no to. AI does not make those calls. It removes the friction between the call and the document that communicates it.

## Flashcards Study Aid

<Flashcards />

---

Proceed to [Lesson 16: Chapter Quiz →](./16-chapter-quiz.md)
