---
sidebar_position: 2
title: "Self-Provisioning Factories"
description: "Why factories that dynamically source their own resources outcompete those that consume only what humans allocate."
chapter: 62
lesson: 2
duration_minutes: 18
keywords:
  [
    self-provisioning,
    resource allocation,
    dynamic sourcing,
    outcome contracts,
    competitive advantage,
    trust infrastructure,
  ]

skills:
  - name: "Self-Provisioning Architecture"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can compare human-allocated and self-provisioning factories and explain why self-provisioning creates competitive advantage"
  - name: "Outcome Contract Design"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can distinguish between API key access and an outcome contract, and explain what each governs"
  - name: "Trust Infrastructure Analysis"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Safety"
    measurable_at_this_level: "Can identify what trust infrastructure components are missing in a given scenario"

learning_objectives:
  - objective: "Compare human-allocated and self-provisioning factory architectures"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Comparison table in applied exercise"
  - objective: "Explain why self-provisioning creates competitive advantage for agent factories"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Chapter quiz scenario question"
  - objective: "Identify the three components of trust infrastructure and explain what each enables"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Chapter quiz identification question"

cognitive_load:
  new_concepts: 3
  assessment: "Moderate. Three new concepts (self-provisioning, outcome contract, trust infrastructure) introduced through a concrete business scenario the reader can follow step by step."

differentiation:
  extension_for_advanced: "Research the concept of 'autonomous procurement' in supply chain management. How do the constraints on autonomous purchasing agents in logistics compare to the spending envelopes described here?"
  remedial_for_struggling: "Focus on the two-column comparison table in the Concept Crystallization section. If you can explain each row in your own words, you understand the lesson."
---

# Self-Provisioning Factories

In Lesson 1, James learned that AI agents are beginning to make economic decisions: evaluating costs, selecting providers, and purchasing resources within governed boundaries. That was one example in one company. This lesson asks the bigger question: what happens when the architecture of your factory is _designed_ for this capability?

## The Scenario

Emma drew a timeline on the whiteboard. "Let me give you a scenario. Your hiring manager assigns HireFlow a task: reduce time-to-hire for senior engineers by 30% over the next quarter."

"That is an outcome," James said. "Not a to-do list."

"Correct. Now, under a human-allocated model, what happens?"

James thought about it. "I pre-allocate resources. The Resume Screener gets a token budget. The Question Generator gets access to a specific assessment library. The Summarizer gets storage for candidate briefs. Everything is fixed."

"What happens when the Resume Screener processes a CV in Mandarin and needs a translation service it does not have access to?"

"It skips the candidate. Or it fails. Or it queues it for me."

"And if that candidate is the best match?"

"We lose them."

"Now imagine a different version of HireFlow. Same task: reduce time-to-hire by 30%. But this time, the factory operates under an **outcome contract**: an agreement that specifies what the factory must deliver, not the exact resources it must use to get there."

## Consuming vs. Sourcing

James leaned forward. "Wait, so basically, instead of me deciding every resource in advance, I set the goal and a budget, and the factory figures out how to achieve it?"

"Within constraints. The factory does not get unlimited access. It gets a resource budget and a spending envelope. Within those boundaries, it can acquire what it needs."

"That sounds dangerous."

"More dangerous than a factory that goes silent every time it encounters something unexpected?"

James opened his mouth. Closed it. Opened it again. "Okay, but who decides what the factory can buy? Who approves new services?"

"Policy does. Written, auditable policy. Not a human approving each transaction in real time. Think about how your old company handled purchasing."

James remembered. Below a certain dollar amount, department managers could buy what they needed. Above that amount, they needed approval. Everything was logged. Finance reviewed the logs monthly. Nobody asked the CEO to approve a box of pens.

"So the factory has a purchasing policy. Spend up to X per pipeline run. Access pre-approved service categories. Log everything."

"Now you are thinking about self-provisioning."

**Self-provisioning** is the capability of a factory to dynamically source its own resources rather than consuming only what humans allocate in advance. A self-provisioning factory does not replace human governance. It moves governance from per-transaction approval to policy-based oversight.

The self-provisioning concept connects directly to the Two-Layered Model from Chapter 61. The Factory Layer operates within governance boundaries. Self-provisioning extends those boundaries to include resource acquisition, not just resource consumption.

## The Multi-Exchange: Is This Over-Engineering?

"I still think this is over-engineering," James said. "HireFlow is a recruitment tool. Four FTEs. It screens resumes and generates questions. Why does it need to buy things?"

"It does not need to buy things today. The question is: does your architecture make it impossible to buy things tomorrow?"

"What is wrong with 'impossible for now, and we add it later'?"

Emma drew two architecture diagrams. The first showed resource allocation as arrows flowing from "Human Admin" to each FTE. The second showed the same FTEs with a "Resource Manager" component between the admin and the FTEs, with arrows flowing both ways.

"In the first architecture, every resource decision passes through a human. To add self-provisioning later, you need to insert a resource manager, rewire every FTE's resource access, add audit logging to every acquisition, and retrofit spending limits into a system that was never designed for them."

"That sounds like four months of work," James said. He was thinking of the logging retrofit at his old company.

"In the second architecture, the Resource Manager exists from day one. It starts in pass-through mode: every resource comes from human allocation, same as the first diagram. But the infrastructure is there. When you later want the Resume Screener to access a translation service on demand, you add it to the approved service list and set a spending limit. One configuration change."

James stared at the two diagrams. "So the Resource Manager is free when you build it from the start, and expensive when you add it after."

"That is the point."

## What Exists, and What Is Missing

Not everything needed for self-provisioning factories exists today. Emma divided the whiteboard into two columns.

"The primitives are in place," she said. "APIs for purchasing cloud services. Credential management systems that grant and revoke access programmatically. Decision-making frameworks that constrain agent choices to approved options. These are building blocks that already work."

"So what is missing?"

"**Trust infrastructure**: the systems that make economic participation safe and accountable."

Trust infrastructure has three components:

**Payment rails.** Agents need secure, auditable mechanisms for executing financial transactions. Today, most agent "purchases" go through human-configured API keys with billing attached. For agents to participate as economic actors, they need payment channels that are agent-native: programmable, rate-limited, and revocable in real time.

"So like a corporate card with real-time spend limits," James said, "except the cardholder is software."

"Exactly. And just like a corporate card, you can freeze it instantly."

**Liability frameworks.** When an agent makes a bad purchase, who is responsible? The agent operator? The service provider? The policy author? Liability frameworks define responsibility chains for autonomous economic decisions. Without them, organizations cannot delegate purchasing authority to agents.

James thought about a vendor dispute at his old company. "We spent three months arguing with a SaaS provider about who was liable for a data breach. And that was two humans who signed a contract. If one side is an agent, who do you even sue?"

"That is why liability frameworks have to be solved before autonomous procurement scales."

**Verification systems.** Every resource acquisition must be logged, auditable, and reversible. The audit trail from Lesson 1 is one component. Verification systems also include receipt validation (did the agent get what it paid for?), value assessment (did the acquisition improve the outcome?), and anomaly detection (is this spending pattern normal?).

"So payment rails let the agent spend, liability frameworks assign blame when something goes wrong, and verification systems prove what actually happened." James counted them on his fingers. "You need all three or the whole thing falls apart."

"None of those exist as complete, standardized systems yet," Emma said. "They are being built. Pieces exist in different organizations. But there is no 'plug in trust infrastructure' library you can install."

James nodded slowly. "So we are in a transition. The building blocks exist. The governance frameworks do not. And the factories we build now need to be ready for when they do."

"That is the architectural decision."

## The Competitive Argument

Emma stepped back from the whiteboard. "One more thing. The reason this matters is not philosophical. It is competitive."

"How?"

"A factory that can only use pre-allocated resources scales with human attention. Every new capability, every edge case, every unexpected resource need requires a human to make a decision and configure the system. That factory scales linearly with headcount."

James raised an eyebrow. "And a self-provisioning factory?"

"Scales with policy. Write one policy for 'approved translation services under $0.05 per page,' and every FTE that encounters a foreign-language document can resolve it autonomously. No human in the loop for each individual case."

"Policy scales. Human approval does not."

"That is the competitive advantage. Not that agents buy things. That the factory adapts to new situations within governed boundaries, without waiting for a human to notice that something went wrong."

:::tip KEY INSIGHT
The competitive advantage of self-provisioning is not that agents buy things. It is that the factory adapts to new situations within governed boundaries, without waiting for a human to intervene. Policy scales. Per-transaction approval does not.
:::

In Lesson 3, you will learn the core design principle that makes self-provisioning possible: agents need budgets, not permissions. You will see the specific components (resource budgets, spending envelopes, audit trails) that turn the concept into architecture.
