# Lesson 14 Summary — Capstone: End-to-End Operations Sprint

## What This Lesson Covers

Lesson 14 is the chapter's proof-of-mastery exercise: a 90-minute sprint deploying a complete operations intelligence layer from a standing start. Students run nine phases in sequence, apply a quality gate after each phase, and synthesise all outputs into a COO-ready intelligence brief. The sprint exercises every plugin command from Lessons 3-13 in a single end-to-end workflow.

## The Three Scenarios

Students choose one scenario before beginning the sprint:

- **Scenario A (Subsidiary Acquisition):** Inherit an unknown vendor portfolio, new jurisdiction compliance obligations, and integration risks. Stresses vendor management and compliance mapping.
- **Scenario B (ERP Migration):** The largest change in the organisation's history — 47 vendor integration dependencies, 12 SOPs referencing the old system, already slipped three weeks. Stresses change management and process documentation.
- **Scenario C (Regulatory Change):** FCA guidance update affecting 8 compliance obligations, 60-day compliance deadline, one GAP obligation already open. Stresses compliance mapping and audit preparation.

## The Nine Sprint Phases

| Phase                    | Commands                       | Source Lessons |
| ------------------------ | ------------------------------ | -------------- |
| 1: Vendor audit          | `/vendor-review` + `/contract` | L03 + L04      |
| 2: Process documentation | `/process-doc` + `/runbook`    | L05            |
| 3: Change assessment     | `/change-request`              | L06            |
| 4: Compliance map        | Natural prompt (auto-skill)    | L07            |
| 5: Audit preparation     | `/audit`                       | L08            |
| 6: Risk register         | Natural prompt (auto-skill)    | L09            |
| 7: Incident post-mortem  | `/incident`                    | L10            |
| 8: Metrics framework     | `/metrics` + `/status-report`  | L11            |
| 9: Agent deployment      | Agent configs (custom plugin)  | L12            |
| Final brief              | Synthesis                      | L13            |

## Quality Gates

After each phase, output is evaluated against the quality criteria from its source lesson. Quality gates exist because mistakes compound in a sprint — a Phase 1 omission (missed vendor obligation) creates a Phase 4 gap (incomplete compliance map) and a Phase 6 gap (missing risk entry). Catching problems at their phase prevents cascade failures.

## The Final Brief Standard

The final brief must synthesise nine phases into a coherent story — not nine separate outputs listed in order. The executive summary must be one page and decision-ready. The top 3 recommended actions must be specific, owned, and time-bound. The cross-phase intelligence section must surface connections that individual phase outputs cannot reveal.

## What Completion Demonstrates

A student who completes this sprint with complete quality gate assessments and a coherent final brief has demonstrated operational mastery: they can enter any organisation, rapidly deploy an operations intelligence layer, and produce the COO-level synthesis that drives decisions. That is the chapter's central claim — and this capstone is the proof.
