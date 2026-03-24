---
title: "Lesson 11 Summary: Operational Metrics: Designing What to Measure"
chapter: 38
lesson: 11
type: summary
---

# Lesson 11 Summary: Operational Metrics: Designing What to Measure

## Core Insight

An operational dashboard with 30 metrics tells leadership nothing because it requires them to do the analytical work the dashboard should be doing for them. Five to ten well-designed metrics: each with a named owner, a precise formula, and a red threshold that triggers a specific escalation: are worth more than a comprehensive data dump. The design question is not "what can we measure?" but "what do we need to know to run this organisation well?"

## The Five Design Principles

1. **Measure what matters, not what is easy:** start from the question, then find the measurement.
2. **Leading over lagging:** every major risk area needs at least one leading indicator that warns of problems before they occur.
3. **Every metric has a named owner:** shared ownership is no ownership.
4. **Red thresholds trigger actions:** a threshold without an escalation path (who, by when) is advisory, not operational.
5. **Fewer, better:** 5-10 metrics maximum; if everything is measured, nothing is managed.

## Leading vs. Lagging

Lagging metrics confirm what happened. Leading metrics warn of what is about to happen. Both are necessary: lagging for accountability, leading for prevention. The absence of leading indicators is itself a risk ; it means the organisation can only react.

## The /metrics and /status-report Workflow

These two commands are complementary: `/metrics` (custom Operations Intelligence plugin) designs the framework once: what to measure, how to calculate it, what thresholds mean. `/status-report` (official Operations plugin) generates the monthly report, filling in actual values, assigning RAG status, and surfacing key issues and watch items. Confusion about which command to use is resolved by the design-vs-reporting distinction.

## The Standard Metrics Library

Six domains, each with leading and lagging options: Vendor Management (SLA compliance, renewal pipeline), Process Operations (error rate, SOP currency), Change Management (failure rate, changes without impact assessment), Compliance (obligation currency, evidence age), Risk (register review completion, risks above appetite), and Incident (MTTR, repeat incident rate). The framework selects one to two metrics per domain, not all of them.

## What's Next

Lesson 12 configures the four persistent agents (vendor-watchdog, process-health, compliance-monitor, change-tracker) that monitor the operational data you have built in Lessons 3-11. Lesson 13 combines the agent outputs with the metrics from this lesson into a single monthly operations intelligence brief for the COO.
