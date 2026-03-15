---
slug: /Business-Domain-Agent-Workflows/legal-operations-and-compliance
sidebar_position: 33
title: "Chapter 33 — Legal Operations & Compliance"
slides:
  source: "https://pub-80f166e40b854371ac7b05053b435162.r2.dev/books/ai-native-dev/static/slides/part-3/chapter-33/legal-ops-blueprint.pdf"
  title: "Legal Operations Blueprint"
  height: 700
description: "Build jurisdiction-aware legal AI workflows for contract review, NDA triage, compliance assessment, IP protection, litigation hold, meeting prep, DSAR management, legal spend analysis, and compliance calendar tracking using Anthropic's Legal Plugin and the Agent Factory Legal Ops extension with 1 agent, 6 skills, and 6 jurisdiction overlays"
chapter_number: 33
part_number: 3
version: 3.0
status: draft
---

# Chapter 33 — Legal Operations & Compliance

## 📚 Teaching Aid

### Giving a Two-Person Legal Team the Operational Capacity of Six

Ayesha Malik has 37 contracts waiting for review. Three auto-renewals slipped past her last quarter — one for a cloud provider that cost PKR 4.8M she wanted to renegotiate. A data subject access request sits 26 days overdue. Her single Legal Ops associate spends 60% of his time forwarding contracts to the right person, chasing signatures, and sending deadline reminders.

This chapter builds the system that eliminates that backlog. You install two plugin layers, configure a negotiation playbook calibrated to your organisation's positions, and work through every agent and skill the plugins provide — producing attorney-ready contract reviews, triaged NDAs, compliance assessments, litigation hold packages, meeting briefings, and a compliance calendar with automated escalation. Every lesson ends with a deployable artifact.

> **The governing principle:** The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.

### Prerequisites

This chapter requires the **Claude desktop app** with **Cowork** enabled (Pro, Max, Team, or Enterprise plan).

1. **Install the Claude desktop app** from [claude.ai/download](https://claude.ai/download).
2. **Open the Cowork tab** in the Claude desktop app.
3. **Install Layer 1 — Anthropic's Legal Plugin**: Cowork sidebar → **Customize** → **Browse plugins** → find **Legal** → **Install**. This gives you `/review-contract`, `/triage-nda`, `/vendor-check`, `/brief`, `/respond`, `/compliance-check`, `/legal-risk-assessment`, `/meeting-briefing`, `/legal-response`, `/signature-request`.
4. **Install Layer 2 — Agent Factory Legal Ops extension** (ours): Cowork sidebar → **Customize** → **Browse plugins** → **Personal** → **+** → **Add marketplace from GitHub** → enter `https://github.com/panaversity/agentfactory-business-plugins` → find **Legal Ops** → **Install**. This gives you 1 agent (contract-intake) and 6 skills (legal-global-router, compliance-calendar, dsar-privacy, ip-protection, legal-spend, regulatory-monitoring) with 6 jurisdiction overlays.
5. **Connect a working folder** for practice files (e.g., `legal-practice/`).
6. **Verify**: ask about a legal topic involving a specific jurisdiction (e.g., "Review this UK vendor agreement") — the router skill should auto-activate and load the appropriate jurisdiction overlay.

### Lesson Map

| #   | Lesson                                               | Key Focus                                                                                  |
| --- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | The Legal Operations Revolution                      | Install both plugins; first `/review-contract`; governing principle; five bottlenecks      |
| 2   | The Negotiation Playbook                             | Build `legal.local.md`; before/after comparison; MCP connector categories                  |
| 3   | Contract Review and Redlines                         | Seven-phase `/review-contract`; GREEN/YELLOW/RED; obligation tracking; benchmarking        |
| 4   | Cross-Border Contracts and E-Signatures              | Five cross-border pitfalls; multi-overlay analysis; `/signature-request`; DocuSign routing |
| 5   | NDA Triage and Management                            | `/triage-nda`; three-tier routing; 9 RED flags; SLA targets; calibration                   |
| 6   | Compliance Check and Legal Risk Assessment           | `/compliance-check`; `legal-risk-assessment` skill; 5×5 matrix; proactive vs reactive      |
| 7   | Intellectual Property Protection                     | Patent landscape; trademark monitoring; FTO scaffolding; OSS licence hierarchy             |
| 8   | Litigation Support, Legal Hold, and Canned Responses | Legal hold workflow; `/respond`; 7 response categories; escalation triggers                |
| 9   | Meeting Prep and Vendor Management                   | `meeting-briefing` skill; 7 meeting types; `/vendor-check` deep dive; action tracking      |
| 10  | Legal Ops Agents: Intake and Monitoring              | Contract Intake Agent; Regulatory Monitoring Agent; Gmail/Atlassian/Slack MCP              |
| 11  | Legal Ops Agents: Calendar, Spend, DSAR              | Compliance calendar; legal spend analytics; DSAR 30-day workflow; Calendar MCP             |
| 12  | Employment Law and Contractor Classification         | Employment contract review; 4 critical differences; contractor vs employee classification  |
| 13  | GCC Legal Systems and Cross-Border Practice          | DIFC/ADGM/mainland; multi-jurisdiction review; quantified transformation model             |
| 14  | The Legal Operations Sprint                          | 8 exercises with exact prompts; all agents/skills; four principles; quick reference        |

### Case Studies

| Case Study                      | Role                  | Purpose                                                                  |
| ------------------------------- | --------------------- | ------------------------------------------------------------------------ |
| **Noor Technologies, Karachi**  | Learner's peer (~60%) | Emerging market SaaS, 2-person legal team, Pakistan/UAE/UK jurisdictions |
| **PayGulf Technologies, Dubai** | Expert model (~40%)   | DIFC-regulated fintech, DFSA compliance, high-volume cross-border        |
