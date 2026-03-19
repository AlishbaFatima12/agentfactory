# Summary: Process Documentation — SOPs and Runbooks

## What This Lesson Covers

Process documentation fails not when it is created, but when the organisation stops maintaining it. This lesson teaches the structured creation of two types of process documentation — SOPs (governance-focused) and runbooks (execution-focused) — and the design discipline that keeps them accurate over time.

## The Three-Stage Failure Cycle

Process documents follow a predictable decay pattern. Stage 1: the document is created and reflects current reality. Stage 2: the process changes (system upgrade, team restructure, policy update) but the document is not updated because nobody owns that update. Stage 3: the document diverges far enough from reality that it actively misleads — new employees follow it and make errors; auditors find discrepancies. The root cause is not poor writing; it is absence of document ownership. Document Control — specifically the review date and named reviewer — is the mechanism that prevents this.

## SOP vs Runbook — The Core Distinction

SOPs (Standard Operating Procedures) are governance documents. They answer: who is responsible, what controls apply, what approvals are required. Their audience is managers, auditors, compliance reviewers, and new employees. Created with `/process-doc`.

Runbooks are execution documents. They answer: exactly what do I do next, and what if it fails? Their audience is the person doing the task today. Created with `/runbook`.

Many processes need both. The monthly payment run needs an SOP (audit-level governance) and a runbook (exact SAP transactions, bank portal steps, failure procedures).

## SOP Quality Standards

A trustworthy SOP has five qualities: named roles in every step (not "the team"), single action per step, controls embedded at specific risk points (not listed generically at the start), explicit error handling for every step that can fail, and a Document Control section with version, effective date, author, and next review date.

## The Engineer Review Test

The definitive quality gate: give the document to someone who knows the systems but has not performed this specific process and ask them to follow it. Every point where they ask a clarifying question is a documentation gap.

## Connection to Later Lessons

The SOP library built in this lesson is referenced directly in Lesson 6 (Change Management). When assessing the impact of a change, the first question is: which documented processes does this change affect? Keeping process documentation current means change impact assessment can be systematic rather than guesswork.
