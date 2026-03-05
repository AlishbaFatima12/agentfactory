---
sidebar_position: 7
title: "Capstone: Prove Professional Value"
description: "Build an autonomous report your employee generates on schedule (Silver) and design multi-group architecture for different professional contexts (Gold)"
keywords:
  [
    "capstone",
    "autonomous report",
    "data synthesis",
    "multi-group",
    "NanoClaw",
    "professional value",
    "architecture",
    "isolation",
    "scheduled reporting",
  ]
chapter: 13
lesson: 7
duration_minutes: 55

skills:
  - name: "Data Synthesis"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student builds an autonomous report that cross-references 2+ data sources, identifies patterns, and produces at least one proactive recommendation"

  - name: "Multi-Agent Architecture"
    proficiency_level: "C1"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student designs and configures a 3-group NanoClaw system with distinct identities, demonstrated isolation between groups, and documented data boundaries"

  - name: "Professional Report Design"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student evaluates report output against professional standards and determines whether they would share it with a boss or client"

learning_objectives:
  - objective: "Build an autonomous report that synthesizes multiple data sources into actionable insights"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student's report pulls from 2+ sources, contains trend analysis or anomaly detection, and includes at least one proactive recommendation"

  - objective: "Design multi-group architecture with proper isolation between contexts"
    proficiency_level: "C1"
    bloom_level: "Create"
    assessment_method: "Student configures 3 groups with distinct CLAUDE.md identities and demonstrates that non-admin groups cannot access admin data or capabilities"

  - objective: "Evaluate output quality against professional standards"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student applies a professional quality rubric to their report and honestly assesses whether it meets the bar for sharing with stakeholders"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (multi-source synthesis, proactive recommendations, group isolation, data boundaries, professional quality evaluation) appropriate for B1-C1 capstone"

differentiation:
  extension_for_advanced: "Gold path: implement 3-group architecture with strict isolation, cross-group communication protocol, and a full system architecture diagram"
  remedial_for_struggling: "Focus Silver only: build one report from two data sources. Skip the scheduling component — run it manually. The key deliverable is a report with a recommendation, not automation."
---

# Capstone: Prove Professional Value

Everything you have built so far — identity, skill, connections, scheduling, boundaries — converges here. This capstone has two tiers: Silver proves your employee delivers real professional value through autonomous reporting. Gold proves you can architect a multi-context system with proper isolation.

Both tiers test the same question: would you trust this employee's output enough to act on it? A report you would not show your boss is not a report worth generating. An architecture without real isolation is not an architecture worth building.

Choose your tier, or complete Silver first and continue to Gold.

---

## Silver Challenge: The Autonomous Report

Build a report your employee generates and delivers on schedule. The report must do more than summarize — it must synthesize data from multiple sources and make at least one recommendation you did not ask for.

### Silver Acceptance Criteria

1. The report runs on schedule and is delivered through your configured channel
2. It reads from 2 or more data sources (files, APIs, databases, web content — whatever fits your domain)
3. It contains at least one **proactive recommendation** — something the employee spotted that you did not explicitly ask about
4. It meets professional quality standards: you would share this with your boss, client, or colleague without embarrassment

### Silver Use Case Gallery

**Accountant** — Weekly cash flow report: reads bank transactions and outstanding invoices, cross-references payment timelines, flags potential cash crunch 2 weeks before it hits, recommends which invoices to follow up on first.

**Teacher** — Weekly class progress report: reads assignment submission data and recent test scores, identifies students whose performance dropped more than 15% in the last two weeks, recommends targeted intervention strategies per student.

**Consultant** — Client health dashboard: reads project milestone status and client communication frequency, flags accounts where milestone delivery is on track but communication has dropped (early warning of silent dissatisfaction), recommends proactive check-in schedule.

**Recruiter** — Pipeline report: reads application volumes and interview outcome data, identifies stages where candidates disproportionately drop out, recommends sourcing adjustments or process changes to improve conversion.

---

## Gold Challenge: Multi-Group Architecture

Design a system where different professional contexts operate with different identities, permissions, and data access — all within one NanoClaw installation.

### Gold Acceptance Criteria

All Silver criteria, plus:

1. Three groups configured with distinct `CLAUDE.md` identities: `main` (admin and control), a professional work group (domain tasks), and a client-facing group (limited scope, restricted data access)
2. Demonstrated isolation: the non-admin group cannot perform admin actions or access admin-only data
3. Data boundaries documented and tested: clear rules for what data flows between groups and what stays isolated
4. A system architecture diagram showing groups, data flows, and permission boundaries

### Gold Use Case Gallery

**Accountant** — `main` (admin: system config, all data access) + `accounting-ops` (bookkeeping, report generation, full transaction data) + `client-portal` (read-only financial summaries, no raw transaction access, no ability to modify records)

**Consultant** — `main` (admin: system config, all project data) + `research` (full data access, deep analysis, internal memos) + `client-comms` (filtered output only, no internal strategy documents, no access to other client data)

**Recruiter** — `main` (admin: pipeline management, all candidate data) + `sourcing` (job descriptions, public candidate info, outreach templates) + `hiring-manager-view` (anonymized candidate summaries, interview feedback forms, no salary data)

**Teacher** — `main` (admin: all student records, system config) + `curriculum` (lesson planning, assessment design, aggregate performance data) + `parent-portal` (individual student progress only, no class-wide data, no internal notes)

---

## Hints

<details>
<summary>Level 1 — Think about data sources and audience</summary>

**For Silver:** What two data sources, when cross-referenced, would give you the most valuable insight in your profession? The power of synthesis is in the combination — bank data alone is accounting, but bank data plus outstanding invoices is cash flow forecasting.

**For Gold:** Think about who interacts with your work. You have internal operations, client-facing outputs, and administrative control. Each of those contexts needs different data access and different behavior. Who should never see what?

</details>

<details>
<summary>Level 2 — Ask your AI to help design the system</summary>

**For Silver:**

```
Design a weekly [your profession] report that combines [data source A]
and [data source B]. The report should:
1. Summarize key metrics from each source
2. Cross-reference the two sources to find patterns or anomalies
3. Generate at least one proactive recommendation
4. Format the output for delivery via [your channel]

Include the specific data fields to read from each source and the
logic for generating recommendations.
```

**For Gold:**

```
Design a 3-group NanoClaw architecture for a [your profession]:
- Group 1 (main): admin and system control
- Group 2 ([work-context]): day-to-day professional tasks
- Group 3 ([external-context]): limited external-facing access

For each group, specify:
1. The CLAUDE.md identity and personality
2. What data it CAN access
3. What data it CANNOT access
4. What actions it CAN perform
5. What actions are blocked

Then describe how to test that isolation actually works.
```

</details>

<details>
<summary>Level 3 — Step-by-step implementation guide</summary>

**Silver implementation:**

1. Create a skill that performs your report logic: (a) read source A, (b) read source B, (c) cross-reference for patterns, (d) generate recommendations, (e) format the report, (f) deliver via your channel
2. Configure the scheduler to run this skill on your desired cadence (e.g., every Monday at 8am)
3. Run it manually first and review the output. Iterate on the skill until the report quality meets your standard
4. Enable the schedule and let it run autonomously. Save the output as `domain-report-sample.md`

**Gold implementation:**

1. Create three group directories: `groups/main/`, `groups/[work-group]/`, `groups/[external-group]/`
2. Write a distinct `CLAUDE.md` for each group with different identity, permitted actions, and data access rules
3. Test isolation: from the non-admin group, attempt an admin action (like modifying system config). Verify it fails or is refused
4. Test data boundaries: from the external group, attempt to access internal-only data. Verify it is not available
5. Create a system architecture diagram showing the three groups, their data access, and the boundaries between them
6. Document all test results

</details>

## Try With AI

Use these prompts to design, build, and evaluate your capstone work.

```
I need to build an automated weekly report for my role as a [your profession].

My two data sources are:
- Source A: [describe — e.g., "bank transaction CSV exported weekly"]
- Source B: [describe — e.g., "outstanding invoices tracked in a spreadsheet"]

Design a NanoClaw skill that:
1. Reads both sources
2. Cross-references them (what specific comparison creates insight?)
3. Identifies anomalies or trends (what counts as unusual in my domain?)
4. Generates one proactive recommendation based on the data
5. Formats the output as a professional report

Write the SKILL.md file for this report-generation skill.
```

**What you're learning:** How to decompose a professional reporting task into a reusable skill. The AI helps with the structure, but you provide the domain judgment — what counts as an "anomaly" in accounting is completely different from teaching or consulting. The resulting skill encodes your professional expertise into an executable asset.

```
Here is my report output. Evaluate it as if you were my [boss/client/colleague]:

[Paste your generated report here]

Score it on:
1. Clarity: Can a non-technical reader understand the key findings?
2. Actionability: Does it tell me what to DO, not just what happened?
3. Accuracy: Are the cross-references logically sound?
4. Professionalism: Would you share this in a meeting without editing?

Be honest. If this report is not ready for professional use, tell me
exactly what to fix.
```

**What you're learning:** How to evaluate AI-generated professional output against real-world standards. The gap between "technically correct" and "professionally useful" is where your domain expertise matters most. You are teaching the AI your quality bar while it gives you structured feedback on dimensions you might overlook.

```
I'm designing a 3-group NanoClaw architecture for my profession.

Group 1 (main): admin — full system control
Group 2 ([name]): [describe purpose and scope]
Group 3 ([name]): [describe purpose and scope]

For each group, write the CLAUDE.md file that enforces:
- Identity: who this group "is" and how it communicates
- Permissions: what it can and cannot do
- Data access: what it can and cannot see
- Boundaries: explicit rules for what stays within this group

Then write 3 isolation test cases I can run to verify the boundaries
actually work. Each test should attempt something the group should NOT
be able to do.
```

**What you're learning:** How to translate organizational trust boundaries into technical architecture. Every organization has implicit rules about who sees what — this prompt forces you to make those rules explicit and testable. The AI helps with the CLAUDE.md syntax; you provide the organizational knowledge about what separation actually matters.

## Flashcards Study Aid

<Flashcards />
