---
title: "Chapter 23 — Sales, RevOps & Marketing"
sidebar_position: 0
---

# Chapter 23 — Sales, RevOps & Marketing

### Scaling the Judgment of Your Top 1% Across the Entire Organisation

Every sales team has a top 1%. They close more, retain more, and generate more pipeline from fewer touches. They are not the most charismatic or the most experienced — they are the most prepared. This chapter teaches you to operate a coordinated set of Claude plugins so that every rep on the team works with the research depth, personalisation quality, and timing precision of your best closer.

The chapter spans three interconnected domains — sales execution, revenue operations (RevOps), and marketing — because the handoff between marketing-generated leads and sales-worked pipeline is where most revenue is lost. A unified plugin architecture means the prospect intelligence built by marketing enrichment flows directly into the sales rep's research brief, with no re-entry, no data loss, and no context switching.

Every lesson delivers a working workflow where you evaluate real agent output with your domain expertise, diagnose errors using the Agent Output Taxonomy, and configure the system for your business.

### Prerequisites

Install the three plugin layers before starting Lesson 1:

```bash
claude plugin install sales@knowledge-work-plugins
claude plugin install marketing@knowledge-work-plugins
claude plugin install sales-revops-marketing@agentfactory-business
```

### Lesson Map

| #   | Lesson                                       | Key Focus                                                                                   |
| --- | -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1   | The Revenue Engine                           | Install dual plugins; `/research-prospect`; hallucinated data detection; local config       |
| 2   | Prospect Intelligence and ICP Calibration    | `persona-icp` skill; 8-section calibration; progressive connector intro                     |
| 3   | Scoring, Qualifying, and Keeping Data Alive  | `/score-lead`; three-dimension scoring; score decay; `crm-enrichment`                       |
| 4   | The Five Laws of Outreach                    | Five Laws as constraints; 17 banned words; `outreach` skill; design force for Override      |
| 5   | Multi-Touch Sequences and Copywriting        | `/build-sequence`; `follow-up`; `copywriting` skills; over-automation; WhatsApp B2B         |
| 6   | The Prospect-to-Meeting Workflow             | End-to-end pipeline; `pre-call-brief`; `/call-summary`; context loss; garbage propagation   |
| 7   | Morning Briefing and Competitive Battlecards | `daily-briefing`; `competitive-intelligence` battlecards; intel-to-outreach                 |
| 8   | Campaign Strategy and the Content Engine     | `/plan-campaign`; `content-creation`; `/seo-audit`; `/email-sequence`; ABM; attribution     |
| 9   | Sales Assets and Brand Voice                 | `create-an-asset` interactive HTML; `brand-voice`; `/brand-review` cross-channel            |
| 10  | Wrappers and Progressive Enhancement         | Wrapper pattern; progressive connectors; zero-connector exercise; design reasoning          |
| 11  | Override, Delegation, and the Five Laws      | Override necessity; Five Laws as design force; `sales-marketing-global-router`; delegation   |
| 12  | Outreach Compliance and Regional Context     | CAN-SPAM, GDPR, PECA; jurisdiction overlays; cultural mismatch; ethical outreach            |
| 13  | Monitoring and Reporting Agents              | `lead-intelligence-agent`; `crm-hygiene-agent`; `marketing-performance-agent`; schedule     |
| 14  | Reactive Agents and State Machines           | `outreach-sequencing-agent`; event-driven state machine; branch conditions; stop rules      |
| 15  | Agent Orchestration and the Skill Library    | `sales-marketing-global-router`; cross-agent coordination; jurisdiction overlays; extension  |
| 16  | Applied Practice                             | 6 cross-lesson exercises + capstone; Agent Output Taxonomy diagnostics; real business data   |

### Agent Output Taxonomy

Errors are introduced progressively across lessons. By L16, you can diagnose all five:

| Error Type             | Introduced | Diagnostic Question                                        |
| ---------------------- | ---------- | ---------------------------------------------------------- |
| Hallucinated Data      | L01        | "Can you verify this claim from the research brief?"       |
| Miscalibrated Scoring  | L03        | "Does this score match what you know about this prospect?" |
| Compliance Gap         | L04        | "Is this outreach legal in the prospect's jurisdiction?"   |
| Over-Automation        | L05        | "Should the agent have stopped before touch #5?"           |
| Context Loss           | L06        | "Did the follow-up reference the research brief?"          |

### Case Studies

| Case Study                         | Role                  | Purpose                                              |
| ---------------------------------- | --------------------- | ---------------------------------------------------- |
| **NexaFlow Technologies, Karachi** | Learner's peer (~60%) | Emerging market, PKR budgets, relationship-heavy B2B |
| **Meridian Logistics, London**     | Expert model (~40%)   | Enterprise, GDPR, mature RevOps                      |
