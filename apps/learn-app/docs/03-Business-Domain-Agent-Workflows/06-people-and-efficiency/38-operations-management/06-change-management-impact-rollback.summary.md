# Summary: Change Management: Impact and Rollback

## What This Lesson Covers

Changes that are technically correct can fail operationally. This lesson teaches the three causes of change failure, a four-level classification system, and the structured change package, impact assessment, communication plan, and rollback plan that prevents operational change failure.

## The Three Causes of Change Failure

Every significant change failure traces back to at least one root cause: incomplete impact assessment (the change was assessed in isolation, missing downstream dependencies), insufficient communication (affected people found out too late or in the wrong format), or no rollback plan (when things went wrong, nobody had a structured way to revert, and the rollback was improvised under pressure).

## Change Classification

Four levels determine approval authority and assessment depth: Standard (single team, manager approval), Significant (multi-team, department head), Major (organisation-wide, exec sponsor), and Critical (core systems or regulatory compliance, board-level). Under-classification, assessing a Significant change with Standard rigour to move faster: is the most common classification error.

## Impact Assessment

The `/change-request` command produces a full impact package: stakeholder impact map, integration risk register, timeline risks, change readiness assessment, and recommended rollback plan. The integration risk register is the most commonly incomplete section: the change owner knows their own system, not every upstream and downstream dependency. Every integration that sends to, receives from, or shares data with the changed system must be mapped.

## Communication Planning

An effective communication plan specifies what to say, what NOT to say, and what is being lost (not just gained) for each audience at each milestone. Resistance to change grows primarily from surprise, people who are informed early and honestly resist change far less than people who are blindsided.

## Rollback Plans

A rollback plan that says "we will revert if things go wrong" is not a plan. A real rollback plan answers three questions before go-live: what is "critical failure" (defined as observable conditions, not vague judgement), who has authority to make the rollback call, and what is actually reversible at each phase. Post-go-live rollback is often limited, data migrations, user training, and customer communications cannot simply be undone. The plan must reflect what is actually reversible.

## Connection to Later Lessons

The change log built in this lesson is monitored by the change-tracker agent in Lesson 12, which flags stale approvals, missing impact assessments, and overdue post-implementation reviews. The incident in Lesson 10 traces its root cause to a change management failure: a direct illustration of what happens when the three failure causes are not addressed before go-live.
