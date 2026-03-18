---
slug: /Business-Domain-Agent-Workflows/product-management
sidebar_position: 36
title: "Chapter 36: Product Management"
description: "Build AI agents for the full PM workflow cycle — discovery briefs, interview guides, feature specs, PRDs, user stories, roadmap planning, backlog prioritisation, stakeholder communication, metrics review, retrospectives, and three persistent agents that keep your product intelligence layer running continuously"
chapter_number: 36
part_number: 3
version: 1.0
status: draft
---

# Chapter 36: Product Management

## Teaching Aid

> _"The best PMs I've worked with share one quality: they have almost supernatural clarity about what they are building and why. Every feature spec is tight. Every roadmap decision is traceable to a user problem. Every stakeholder update tells the same story from a different angle. The rest of us — talented, well-meaning — spend half our time writing specs that confuse engineers, roadmaps that confuse executives, and research syntheses that confuse everyone. The gap is not intelligence. It is craft."_

Product Management is one of the highest-leverage and highest-cognitive-load roles in any technology organisation. A single feature from ideation to launch requires discovery notes, a problem statement, user story mapping, a feature spec, a PRD, a sprint brief, acceptance criteria, a launch communication, a customer FAQ, and a post-launch retrospective. Most PMs either write some of these poorly or skip them entirely — and the downstream failures are predictable.

This chapter deploys two complementary plugins across the full PM workflow cycle. You will use 13 commands and 3 persistent agents to transform the bottleneck between PM judgment and the documentation that expresses it. The agent writes the first draft. You review, direct, and refine. The document reflects your judgment at the quality it deserves — in a fraction of the time.

## What You'll Learn

By the end of this chapter, you will be able to:

- Diagnose the PM's cognitive load problem and explain why AI agents address the documentation bottleneck without replacing PM judgment
- Deploy two complementary plugins (official product-management + custom product-strategy) and configure them for your product using `product.local.md`
- Frame problems precisely using discovery briefs that separate the problem from the solution and the known from the unknown
- Design user research with interview guides grounded in five behavioural principles, then synthesise findings using thematic analysis and triangulation
- Write feature specs and PRDs that engineers can build from without ambiguity, with testable acceptance criteria and explicit scope boundaries
- Decompose PRDs into user stories with named personas, capability-focused "wants", and outcome-focused "so thats" — then prioritise the backlog using RICE with three mandatory challenge tests
- Plan sprints against real capacity, communicate status to three distinct audiences, and review product metrics using a North Star and L1 health indicator hierarchy
- Deploy three persistent agents (Research Intelligence, Stakeholder Update, Roadmap Coherence) that run your product intelligence layer continuously

## Lesson Flow

| Lesson                                                       | Title                                             | Duration | What You'll Walk Away With                                                                              |
| ------------------------------------------------------------ | ------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| [L01](./01-pms-cognitive-load-problem.md)                    | The PM's Cognitive Load Problem                   | 25 min   | Understanding of the five PM roles and the documentation bottleneck AI agents address                   |
| [L02](./02-plugin-architecture-product-context.md)           | Plugin Architecture & Your Product Context        | 30 min   | Both plugins installed, `product.local.md` configured, all 13 commands accessible                       |
| [L03](./03-discovery-briefs-framing-problems.md)             | Discovery Briefs — Framing the Right Problem      | 40 min   | Problem brief for your product's biggest challenge, with discovery questions and evidence               |
| [L04](./04-user-research-interviews-synthesis.md)            | User Research — Interviews & Synthesis            | 45 min   | Interview guide grounded in five behavioural principles, plus a research synthesis from simulated notes |
| [L05](./05-competitive-intelligence.md)                      | Competitive Intelligence                          | 35 min   | Competitive brief with feature comparison, positioning analysis, and strategic implications             |
| [L06](./06-feature-specifications.md)                        | Feature Specifications                            | 45 min   | Feature spec with the five required sections, testable ACs, and explicit scope boundary                 |
| [L07](./07-prds-multi-team-initiatives.md)                   | PRDs for Multi-Team Initiatives                   | 45 min   | Full PRD with 10 sections, status gates, failure threshold, and GTM requirements                        |
| [L08](./08-user-stories-story-mapping.md)                    | User Stories & Story Mapping                      | 40 min   | User stories with named personas, capability-focused wants, and no compound ACs                         |
| [L09](./09-roadmap-planning-communication.md)                | Roadmap Planning & Communication                  | 40 min   | Q3 roadmap in Now/Next/Later format with dependency mapping and capacity allocation                     |
| [L10](./10-backlog-prioritization-frameworks.md)             | Backlog Prioritization Frameworks                 | 45 min   | RICE-scored backlog with three challenge tests and quarterly priority decision                          |
| [L11](./11-sprint-planning-capacity.md)                      | Sprint Planning & Capacity                        | 35 min   | Sprint plan with capacity table, P0/P1/P2 backlog, risks, and definition of done                        |
| [L12](./12-stakeholder-communication.md)                     | Stakeholder Communication                         | 40 min   | Three stakeholder update versions (executive, engineering, customer) from the same status data          |
| [L13](./13-metrics-okrs-product-analytics.md)                | Metrics, OKRs & Product Analytics                 | 45 min   | North Star metric, 5 L1 health indicators, OKR set, and monthly metrics review                          |
| [L14](./14-continuous-intelligence-agents-retrospectives.md) | Continuous Intelligence — Agents & Retrospectives | 75 min   | Sprint retrospective with four questions, plus 3 persistent agents configured                           |
| [L15](./15-chapter-summary-quick-reference.md)               | Chapter Summary & Quick Reference                 | 20 min   | All commands, all agents, key quality rules, and the PM workflow cycle diagram                          |

## Chapter Contract

By the end of this chapter, you should be able to answer these five questions:

1. What are the five roles a PM plays simultaneously, and how does the two-plugin architecture address the documentation bottleneck in each one?
2. How does `product.local.md` transform generic AI outputs into documents that sound like they were written by someone who has worked in your product team for two years?
3. What are the five sections every feature spec must contain, and why is the scope boundary (what is NOT included) as important as the solution description?
4. How do the three mandatory challenges (Strategic Override Test, Data Gap Test, "What Would We Regret?" Test) catch the errors that RICE scoring reliably misses?
5. How do the three persistent agents (Research Intelligence, Stakeholder Update, Roadmap Coherence) work together to maintain continuous product intelligence without requiring daily PM attention?

### Prerequisites: Cowork Access

This chapter requires **Cowork** (set up in Chapter 28) and two plugins.

1. **Install the official Product Management plugin.** In the Cowork sidebar: **Customize** -> **Browse plugins** -> find **Product Management** -> click **Install**.
2. **Install the custom Product Strategy plugin.** In the Cowork sidebar: **Customize** -> **Browse plugins** -> **Personal** -> click **+** -> **Add marketplace from GitHub** -> enter `https://github.com/panaversity/agentfactory-business-plugins` -> find **Product Strategy** -> click **Install**.
3. **Connect a working folder** for practice files, same as Chapter 28.
4. **Configure `product.local.md`** — detailed in Lesson 2.

## After Chapter 36

When you finish this chapter, your perspective shifts:

1. **You see PM documentation as a judgment amplifier, not a chore.** Every spec, PRD, roadmap, and stakeholder update is a vehicle for your judgment — and the agent removes the bottleneck between what you know and what you can document. The quality of your PM artifacts is no longer constrained by your available hours.
2. **You have a working two-plugin architecture.** Discovery briefs, interview guides, feature specs, PRDs, user stories, roadmap updates, backlog prioritisation, sprint plans, stakeholder communications, metrics reviews, and retrospectives are all installed, configured, and deployable through 13 commands.
3. **You understand the quality boundaries.** The agent writes first drafts. It does not make product decisions, commit to delivery dates, approve scope changes, or override your judgment. These boundaries are encoded in every skill file's "NEVER DO THESE" section.
4. **You can extend.** The interview guide framework transfers to any research domain. The spec quality rules apply to any technical writing. The three persistent agents work wherever continuous monitoring creates value — the PM workflow is just the first deployment.

Start with [Lesson 1: The PM's Cognitive Load Problem](./01-pms-cognitive-load-problem.md).
