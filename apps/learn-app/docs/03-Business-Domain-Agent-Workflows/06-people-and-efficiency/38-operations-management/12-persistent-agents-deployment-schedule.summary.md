# Lesson 12 Summary: Persistent Agents: Deployment and Schedule

## What This Lesson Covers

Lessons 3-11 built the operational data layer: vendor register, contract obligations, SOP library, change log, compliance map, risk register, incident post-mortems, and metrics dashboard. Lesson 12 deploys the monitoring layer that prevents this data from drifting: four persistent agents that run on fixed schedules and alert when something needs attention.

## The Four Agents

| Agent              | Schedule                 | Primary Monitoring Domain                              |
| ------------------ | ------------------------ | ------------------------------------------------------ |
| Vendor Watchdog    | Every Monday 07:00       | Renewals, SLA breaches, spend variances, unapproved vendors |
| Compliance Monitor | Every Monday 08:00       | Obligation review dates, evidence currency, regulatory changes, open gaps |
| Change Tracker     | Every Friday 16:00       | Impact assessments, rollback plans, stale approvals, PIRs, emergency retrospectives |
| Process Health     | First Monday of month    | SOP review schedule, orphaned SOPs, change-triggered reviews, regulation-triggered reviews |

## The Critical Distinction: Official vs. Custom Plugin

The official Operations plugin is designed for on-demand use; you invoke commands when you want output. The custom Operations Intelligence plugin provides the persistent automation layer: agents that run without being invoked and deliver alerts without being asked. No official plugin has persistent agents.

## The Alert Quality Standard

Every agent alert must contain a specific recommended action. Status alone ("contract renewing soon") is insufficient. A quality alert specifies what to do, by when, who must act, and when escalation occurs. The Vendor Watchdog's renewal alert includes service description, annual value, renewal date, notice period, notice deadline, named owner, required action, and escalation rule, giving the recipient everything they need to act without seeking additional information.

## Agent Interdependencies

The four agents form a coordinated network with defined interaction chains:

- **Compliance Monitor → Process Health:** Regulatory changes detected by the Compliance Monitor trigger Process Health checks on SOPs that embed affected controls
- **Change Tracker → Process Health:** Changes closed in the change log trigger Process Health cross-referencing to identify SOPs that reference the changed system
- **Vendor Watchdog → Risk Register:** SLA breaches flagged by the Vendor Watchdog should generate operational risk entries (manual update to the risk register built in Lesson 9)

Agents alert; humans act. No agent updates status automatically, particularly for compliance obligations, where automated status changes create audit liability.

## Configuration Requirements

Each agent requires: data sources (paths or MCP integrations), schedule confirmation, escalation thresholds, and named alert recipients. Configuration lives in `ops.local.md`. Agents produce generic output without specific configuration; organisation-specific configuration is what makes alerts actionable rather than generic.

## What This Enables

Lesson 13 (Operations Intelligence Brief) synthesises the agent outputs, metrics dashboard, and `/status-report` into a single COO-level brief. The agents in Lesson 12 are the data source for that synthesis.
