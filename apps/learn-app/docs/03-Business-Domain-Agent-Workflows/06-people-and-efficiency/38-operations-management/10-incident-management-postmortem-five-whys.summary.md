---
title: "Lesson 10 Summary: Incident Management: Post-Mortem and Five Whys"
chapter: 38
lesson: 10
type: summary
---

# Lesson 10 Summary: Incident Management: Post-Mortem and Five Whys

## Core Insight

Incidents almost never recur because of bad luck. They recur because the post-mortem identified the proximate cause and stopped there. The payment processing outage that cost 4 hours 23 minutes and £140,000 had a proximate cause (misconfigured health check threshold) and a systemic cause (migration checklists never updated for cloud-specific requirements). Fixing the threshold prevents this exact incident. Fixing the checklist prevents the entire class of migration-induced misconfigurations. Incident management is the discipline of reaching the systemic cause.

## What the /incident Command Does

The `/incident` command (custom Operations Intelligence plugin) structures post-mortems across five task types: post-mortem, Five Whys drill, incident log entry, corrective action tracker, and lessons learned brief. The primary use is the full post-mortem: a structured eight-section report covering timeline, impact, root cause analysis, contributing factors, what went well, corrective actions, lessons learned, and follow-up scheduling.

## Five Whys in Practice

The Five Whys technique starts with the proximate cause and asks "why?" five times using factual (not interpretive) answers. The payment outage drill:
- WHY 1: Failover didn't trigger → WHY 2: Threshold misconfigured → WHY 3: Set incorrectly during migration → WHY 4: Post-migration checklist didn't include threshold validation → WHY 5: Checklist was copied from on-premise playbook, never updated for cloud.

Systemic root cause: migration acceptance criteria are incomplete. Corrective action: update all migration checklists to include environment-specific validation.

## Corrective Action Quality Test

Every corrective action must pass five criteria: Specific (describes exactly what changes), Owned (one named person), Time-bound (a specific date), Root-cause-targeted (addresses WHY 4/5 not just WHY 1), Verifiable (states how completion will be confirmed). Actions that fail any criterion are good intentions, not fixes.

## Blameless Post-Mortems

Blameless means directing accountability at systems and processes, not individuals. Every question is framed as "what allowed this to happen?" not "who made the mistake?" This is not about removing accountability; it is about directing it where it produces change.

## Key Cross-Reference

The payment processing outage was caused by a change management failure (L06): the cloud migration did not require runbook validation before closing. The L10 corrective action that matters most is adding runbook validation to the L06 change acceptance criteria. Operations is a system; every lesson in this chapter connects to others.

## What's Next

Lesson 11 builds the metrics framework that tracks incident performance over time: MTTR, MTTD, corrective action completion rate, and repeat incident rate. The data from the post-mortems you conduct in this lesson becomes the input for the incident metrics in Lesson 11's operational dashboard.
