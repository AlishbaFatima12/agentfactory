---
slug: /Business-Domain-Agent-Workflows/operations-management
sidebar_position: 38
title: "Chapter 38: Operations Management"
description: "Build AI agents for operations intelligence — vendor management, contract analysis, process documentation, change management, compliance tracking, audit preparation, risk registers, incident post-mortems, operational metrics, and four persistent agents that run your operations monitoring continuously"
chapter_number: 38
part_number: 3
version: 1.0
status: draft
---

# Chapter 38: Operations Management

## Teaching Aid

> _"Operations is the function nobody notices when it works and everybody blames when it doesn't. The vendor invoice arrives late, the process fails at step seven, the regulatory change lands and nobody has updated the controls, the critical system goes down and two people have the runbook in their head. Operations teams spend the majority of their time managing the consequences of invisible problems -- problems that were always visible if anyone had been watching."_
> -- Chief Operating Officer, 400-person professional services firm

Every organisation has an operations function, even if it does not call it that. Someone manages vendor contracts. Someone documents -- or fails to document -- how critical processes work. Someone tracks whether the organisation is complying with its regulatory obligations. Someone coordinates change when systems, processes, or structures are modified.

The problem is not that these activities do not happen. The problem is that they happen **reactively, inconsistently, and invisibly**. The Operations Intelligence Gap is the delta between what an organisation should know about its own operations and what it actually knows. This chapter closes that gap with two coordinated plugins and four persistent agents.

## What You'll Learn

By the end of this chapter, you will be able to:

- Diagnose the three operational failure modes (vendor sprawl, process rot, compliance drift) and explain why AI agents address each one
- Deploy a two-plugin operations architecture -- the official Operations plugin for base workflows and the custom Operations Intelligence plugin for audit, contract, incident, and metrics capabilities
- Conduct vendor portfolio audits, extract contract obligations, and flag auto-renewal traps and pricing risks
- Write SOPs that meet quality standards (named roles, embedded controls, error handling) and run process gap analyses
- Perform change impact assessments with stakeholder mapping, communication plans, and rollback strategies
- Map compliance obligations with evidence inventory and conduct mock audits
- Build operational risk registers with 5x5 scoring, mitigation plans, and escalation matrices
- Run incident post-mortems using Five Whys root cause analysis and produce specific, owned, verifiable corrective actions
- Design operational metrics frameworks with leading and lagging indicators, red thresholds, and one-page dashboards
- Deploy four persistent agents that monitor your vendor portfolio, SOP library, compliance obligations, and change pipeline continuously

## Lesson Flow

| Lesson                                                       | Title                                            | Duration | What You'll Walk Away With                                                           |
| ------------------------------------------------------------ | ------------------------------------------------ | -------- | ------------------------------------------------------------------------------------ |
| [L01](./01-three-operational-failure-modes.md)               | The Three Operational Failure Modes              | 25 min   | Why operations fail: vendor sprawl, process rot, and compliance drift                |
| [L02](./02-plugin-architecture-installation.md)              | Plugin Architecture and Installation             | 30 min   | Both plugins installed, `ops.local.md` configured, all commands accessible           |
| [L03](./03-vendor-management-portfolio-view.md)              | Vendor Management -- The Portfolio View          | 40 min   | Vendor portfolio audit, SLA scorecards, renewal pipeline analysis                    |
| [L04](./04-contract-analysis-obligation-extraction.md)       | Contract Analysis and Obligation Extraction      | 40 min   | Contract obligations extracted, risk flags identified, negotiation positions drafted |
| [L05](./05-process-documentation-sops-runbooks.md)           | Process Documentation -- SOPs and Runbooks       | 45 min   | Two complete SOPs (one new, one updated), process gap analysis                       |
| [L06](./06-change-management-impact-rollback.md)             | Change Management -- Impact and Rollback         | 40 min   | Full change request package: impact assessment, comms plan, rollback plan            |
| [L07](./07-compliance-tracking-obligations-evidence.md)      | Compliance Tracking -- Obligations and Evidence  | 45 min   | Compliance obligation map with evidence inventory and remediation priorities         |
| [L08](./08-audit-preparation-evidence-mock-review.md)        | Audit Preparation -- Evidence and Mock Review    | 40 min   | Audit preparation plan, mock review completed, response framework ready              |
| [L09](./09-operational-risk-register-that-works.md)          | Operational Risk Register That Works             | 45 min   | Risk register with inherent/residual scores, mitigation plans, escalation matrix     |
| [L10](./10-incident-management-postmortem-five-whys.md)      | Incident Management -- Post-Mortem and Five Whys | 45 min   | Post-mortem with systemic root cause, owned corrective actions, lessons learned      |
| [L11](./11-operational-metrics-designing-what-to-measure.md) | Operational Metrics -- Designing What to Measure | 40 min   | 5-10 metrics with thresholds, leading/lagging analysis, monthly report template      |
| [L12](./12-persistent-agents-deployment-schedule.md)         | Persistent Agents -- Deployment and Schedule     | 45 min   | All 4 agents configured and scheduled with escalation contacts                       |
| [L13](./13-operations-intelligence-brief.md)                 | Operations Intelligence Brief                    | 35 min   | Monthly intelligence brief synthesising agent outputs and metrics                    |
| [L14](./14-capstone-end-to-end-operations-sprint.md)         | Capstone -- End-to-End Operations Sprint         | 90 min   | Full operations intelligence layer deployed in a single sprint                       |
| [L15](./15-chapter-summary-quick-reference.md)               | Chapter Summary and Quick Reference              | 15 min   | All commands, all agents, key frameworks, and the chapter's central insight          |

## Chapter Contract

By the end of this chapter, you should be able to answer these five questions:

1. What are the three operational failure modes, and how does the two-plugin architecture (official Operations + custom Operations Intelligence) address each one?
2. How does the compliance status standard (Current, Review Needed, Partial, Gap, Urgent) drive evidence-based obligation tracking, and why can an obligation never be marked Current without evidence?
3. How does the Five Whys root cause analysis move from the proximate cause (what broke) to the systemic cause (why it was able to break), and why must corrective actions target the systemic cause?
4. What is the difference between leading and lagging indicators in operational metrics, and why does every major risk area need at least one leading indicator?
5. How do the four persistent agents (Vendor Watchdog, Process Health, Compliance Monitor, Change Tracker) work together to maintain continuous operational intelligence?

### Prerequisites: Cowork Access

This chapter requires **Cowork** (set up in Chapter 28) and two plugins.

1. **Install the Operations plugin (official).** In the Cowork sidebar: **Customize** -> **Browse plugins** -> find **Operations** -> click **Install**.
2. **Install the Operations Intelligence plugin (custom).** In the Cowork sidebar: **Customize** -> **Browse plugins** -> **Personal** -> click **+** -> **Add marketplace from GitHub** -> enter `https://github.com/panaversity/agentfactory-business-plugins` -> find **Operations Intelligence** -> click **Install**.
3. **Connect a working folder** for practice files, same as Chapter 28.

## After Chapter 38

When you finish this chapter, your perspective shifts:

1. **You see operations as an intelligence function.** Every vendor overspend, every process failure, every compliance gap, every change disaster was a signal that existed in the data before it became a crisis. The question is whether anyone -- or any agent -- was watching.
2. **You have a working two-plugin architecture.** Vendor management, contract analysis, process documentation, change management, compliance tracking, audit preparation, risk registers, incident post-mortems, and operational metrics are all installed, configured, and deployable.
3. **You understand the boundaries.** The agents monitor, classify, score, and brief. They do not make decisions about which vendor to retain, how to communicate a difficult change, or when to accept a risk. Those judgments remain human. What changes is the quality of information available when those judgments are made.
4. **You can extend.** The compliance tracking framework transfers to any domain with regulatory obligations. The risk register pattern works for any function managing uncertainty. The incident post-mortem structure applies wherever learning from failure creates value.

Start with [Lesson 1: The Three Operational Failure Modes](./01-three-operational-failure-modes.md).
