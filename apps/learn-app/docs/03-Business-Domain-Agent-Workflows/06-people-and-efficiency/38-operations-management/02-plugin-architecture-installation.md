---
slug: /Business-Domain-Agent-Workflows/operations-management/plugin-architecture-installation
sidebar_position: 2
title: "Plugin Architecture and Installation"
description: "Install the official Operations plugin and the custom Operations Intelligence plugin, configure ops.local.md, and verify both plugins are working before starting the main chapter exercises"
keywords:
  [
    "operations plugin installation",
    "operations intelligence plugin",
    "ops.local.md",
    "two-plugin architecture",
    "vendor-review command",
    "audit command",
    "Cowork plugin setup",
    "operations management",
    "operations plugin",
  ]
chapter: 38
lesson: 2
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Configure a Two-Plugin Operations Architecture in Cowork"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can install both the official Operations plugin and the custom Operations Intelligence plugin, configure the ops.local.md Organisation Context section, and verify both plugins respond correctly"

  - name: "Understand the Zero-Overlap Architecture Between Official and Custom Plugins"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can explain which capabilities are covered by each plugin without overlap and correctly classify a given operations task as belonging to the official or custom plugin"

  - name: "Configure ops.local.md to Calibrate Operations Plugin Output"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can populate the Organisation Context section of ops.local.md with their organisation's details and verify that subsequent plugin output references organisation-specific context rather than generic defaults"

learning_objectives:
  - objective: "Install both the Operations plugin (official) and the Operations Intelligence plugin (custom) in Cowork and verify both are active"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student successfully runs /vendor-review and /audit with test prompts and receives non-error responses from each"

  - objective: "Explain why the chapter uses two plugins rather than one and which capabilities each covers"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can complete the zero-overlap capability table from memory, correctly assigning each capability to official plugin, custom plugin, or neither"

  - objective: "Populate the Organisation Context section of ops.local.md and describe how this configuration shapes subsequent plugin output"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student produces a completed Organisation Context section with realistic details and can explain what would change in plugin output if this section were left blank"

cognitive_load:
  new_concepts: 3
  concepts_list:
    - "Two-plugin architecture, official plugin covers standard operations commands; custom plugin covers gaps not addressed by official"
    - "ops.local.md: the organisation-specific configuration file that calibrates all plugin output to your operational context"
    - "Auto-skills, official plugin capabilities that activate from keyword patterns in natural prompts rather than from slash commands"
  assessment: "3 concepts is appropriate for a setup lesson. Students are not learning new domain knowledge here; they are configuring a system. The cognitive focus is on the architecture pattern (why two plugins) and the configuration file (how context shapes output). Both are immediately verifiable through the exercise."

differentiation:
  extension_for_advanced: "After completing the basic installation and Organisation Context configuration, populate the Regulatory Frameworks and Risk Configuration sections of ops.local.md as well. Run /audit with your regulatory framework details and compare the output against a generic prompt with no context. Document the differences: these represent the calibration value of ops.local.md."
  remedial_for_struggling: "Focus on getting both plugins installed and the verification commands working. The ops.local.md configuration can be completed minimally, just your organisation's name, size, and jurisdiction. The configuration builds progressively through subsequent lessons; you do not need a complete file to proceed."

teaching_guide:
  key_points:
    - "The two-plugin architecture follows the zero-overlap principle: every capability is covered exactly once, by whichever plugin is best suited"
    - "ops.local.md is the lever that transforms generic AI output into organisation-specific operations intelligence"
    - "Auto-skills (compliance-tracking, risk-assessment, process-optimization) are NEVER invoked with slash commands; they activate from natural language keywords"
    - "Installation verification is non-negotiable: students who skip verification and discover broken plugins three lessons later waste significant time"
  misconceptions:
    - "Both plugins do similar things. Correction: there is zero overlap by design. Official handles vendor review, process documentation, change management, status reporting, and runbooks. Custom handles audit, contract analysis, incident management, metrics framework, and persistent agents."
    - "ops.local.md needs to be complete before starting. Correction: it is built progressively. Organisation Context is the minimum for Lesson 2. Each subsequent lesson adds the relevant section."
    - "The /audit command conflicts with the official compliance tracking. Correction: they are complementary. compliance-tracking (auto-skill) maps ongoing obligations. /audit prepares evidence packs and mock reviews for specific audit events."
  discussion_prompts:
    - "What happens to plugin output quality when ops.local.md is empty versus when it contains your specific regulatory frameworks and risk thresholds?"
    - "Why does the architecture use auto-skills (keyword-triggered) for compliance and risk, but slash commands for vendor review and audit?"
  teaching_tips:
    - "Require students to run both verification commands before continuing to Lesson 3. A non-working plugin discovered in Lesson 7 is much harder to debug than one discovered in Lesson 2."
    - "Demo the difference between a prompt with ops.local.md context and without. The contrast makes the configuration file feel immediately valuable rather than bureaucratic."
    - "Explain auto-skills with the keyword trigger analogy: the skill activates when it recognises its domain keywords in your prompt; you do not need to call it by name."
---

# Plugin Architecture and Installation

The vendor portfolio audit in Lesson 3 will not work without the Operations plugin installed. The audit preparation in Lesson 8 will not work without the Operations Intelligence plugin installed. The operations intelligence brief in Lesson 13 draws on tools from both. Getting the architecture in place before any exercises begin is not a preliminary step; it is the foundation that everything else is built on.

This lesson installs both plugins, explains why the architecture uses two rather than one, and configures the baseline context file that calibrates all subsequent plugin output to your organisation. It ends with two verification commands. By the end of this lesson, you have a working operations intelligence environment and a context file you will expand progressively across all subsequent lessons.

## Why Two Plugins?

The official Operations plugin (from Anthropic's knowledge-work-plugins collection) covers the standard operational workflows that most operations professionals need: vendor evaluation, process documentation, change management, status reporting, and runbooks. These are well-defined tasks with established patterns that a general-purpose plugin handles well.

The custom Operations Intelligence plugin (from the Panaversity business plugins collection) covers the gaps. Audit preparation has specific evidence-packaging requirements that differ from general compliance tracking. Contract obligation extraction requires deeper analysis than vendor evaluation covers. Incident post-mortems follow a structured methodology (Five Whys, corrective action tracking) that has no official equivalent. The metrics framework requires designing what to measure before generating reports, which is a different task from the reporting itself.

The two plugins are designed with **zero overlap**: every capability is covered exactly once, by the plugin best suited to it.

| Capability                    | Official Plugin Command      | Custom Plugin Command |
| ----------------------------- | ---------------------------- | --------------------- |
| Vendor evaluation             | `/vendor-review`             | -                     |
| Contract obligation analysis  | -                            | `/contract`           |
| Process documentation         | `/process-doc` + `/runbook`  | -                     |
| Change impact + rollback      | `/change-request`            | -                     |
| Status reports + KPIs         | `/status-report`             | -                     |
| Audit preparation + evidence  | -                            | `/audit`              |
| Incident post-mortem + RCA    | -                            | `/incident`           |
| Metrics framework design      | -                            | `/metrics`            |
| Compliance obligation mapping | `compliance-tracking` (auto) | -                     |
| Risk register + assessment    | `risk-assessment` (auto)     | -                     |
| Persistent monitoring agents  | -                            | 4 agents              |

:::info Auto-Skills Are Not Slash Commands
The official plugin includes three capabilities that activate automatically from keyword patterns in your prompts; you do not invoke them with a slash command. `compliance-tracking` activates when your prompt contains words like "compliance", "obligation", or "regulatory". `risk-assessment` activates on "risk", "risk register", or "mitigation". `process-optimization` activates on "optimize", "bottleneck", or "efficiency".

**Never type `/compliance-tracking` or `/risk-assessment` as a command.** These are not commands; they are background knowledge layers that activate from natural language. Lessons 7 and 9 explain how to write prompts that trigger them reliably.
:::

## Step 1: Install the Official Operations Plugin

1. Open **Cowork** and click **Customize** in the sidebar.
2. Select **Browse plugins**.
3. Search for **Operations** (from `knowledge-work-plugins` by Anthropic).
4. Click **Install**.

The Operations plugin adds six commands to your Cowork session:

| Command           | Function                                                   |
| ----------------- | ---------------------------------------------------------- |
| `/vendor-review`  | Vendor portfolio audit, SLA scorecards, renewal calendar   |
| `/process-doc`    | Process documentation, SOPs, RACI matrices, flowcharts    |
| `/runbook`        | Operational runbook creation and maintenance               |
| `/change-request` | Change impact assessment, communications plan, rollback    |
| `/status-report`  | Status reports with KPIs, risks, and action items          |
| `/capacity-plan`  | Resource capacity planning (not used in this chapter)      |

## Step 2: Install the Custom Operations Intelligence Plugin

1. In the Cowork sidebar, click **Customize**.
2. Select **Browse plugins** → **Personal**.
3. Click **+** → **Add marketplace from GitHub**.
4. Enter: `https://github.com/panaversity/agentfactory-business-plugins`
5. Find **Operations Intelligence** in the list and click **Install**.

The Operations Intelligence plugin adds four commands and four persistent agents:

| Type    | Name                 | Function                                                              |
| ------- | -------------------- | --------------------------------------------------------------------- |
| Command | `/audit`             | Audit preparation, evidence packs, mock review, response framework    |
| Command | `/contract`          | Contract obligation extraction, risk flagging, renewal strategy       |
| Command | `/incident`          | Post-mortem, Five Whys RCA, corrective action tracking                |
| Command | `/metrics`           | Operational metrics framework, dashboard design, reporting templates  |
| Agent   | vendor-watchdog      | Weekly vendor monitoring, renewals, SLA breaches, unapproved spend   |
| Agent   | process-health       | Monthly SOP currency review, orphaned process detection               |
| Agent   | compliance-monitor   | Weekly obligation review, evidence aging, regulatory change alerts    |
| Agent   | change-tracker       | Weekly change pipeline, impact assessment compliance, PIR tracking    |

## Step 3: Verify Both Plugins

Before configuring `ops.local.md`, verify that both plugins are responding correctly. Run each verification command below and confirm you receive a structured response , not an error.

**Verify the official plugin:**

```
/vendor-review
Evaluate a hypothetical SaaS project management tool for a 200-person
UK professional services firm. Annual cost: £18,000. Renewal in 4 months.
Usage: active across 3 departments. SLA: 99.5% uptime, <4hr support response.
This is a verification test, please provide a brief vendor evaluation.
```

**What to expect:** A structured vendor evaluation with cost assessment, performance rating, and renewal recommendation. If you receive an error or an unformatted response, the plugin is not correctly installed, repeat Step 1.

**Verify the custom plugin:**

```
/audit
Prepare a brief audit readiness check for an ISO 27001 surveillance audit.
Organisation: 200-person UK professional services firm. Last audit: 18 months ago.
This is a verification test, please provide a brief readiness summary.
```

**What to expect:** A structured audit readiness summary with evidence requirements and gap assessment. If you receive an error, repeat Step 2.

:::caution Verify Before Continuing
Do not proceed to Lesson 3 until both verification commands return structured responses. A missing or broken plugin discovered mid-exercise is difficult to diagnose and wastes time. Two minutes of verification now saves thirty minutes of debugging later.
:::

## Step 4: Configure ops.local.md

Every plugin in this chapter uses `ops.local.md`: the organisation-specific configuration file that calibrates output to your operational context. Without it, plugin commands produce generic best-practice responses. With it, `/vendor-review` knows your renewal cycle and spend thresholds; `/audit` knows your regulatory frameworks and last audit dates; `compliance-tracking` knows which obligations apply to your organisation.

The file has seven sections. In this lesson, you populate the first section, **Organisation Context:**, as a minimum. You will add subsequent sections progressively as you reach the relevant lessons.

### Creating ops.local.md

In your Cowork session, create a new file named `ops.local.md` and populate the Organisation Context section:

```
# ops.local.md: Operations Configuration

## Organisation Context

Organisation name: [Your organisation name]
Size: [Number of employees]
Type: [Industry / sector, e.g., professional services, manufacturing, retail]
Primary jurisdiction: [UK / UAE / Pakistan / other]
Secondary jurisdictions: [If applicable]
Primary currency: [GBP / USD / PKR / AED]
Financial year end: [Month]

## Vendor Portfolio
[Leave blank; you will populate this in Lesson 3]

## Regulatory Frameworks
[Leave blank; you will populate this in Lesson 7]

## Risk Configuration
[Leave blank; you will populate this in Lesson 9]

## Change Management
[Leave blank; you will populate this in Lesson 6]

## Process Library
[Leave blank; you will populate this in Lesson 5]

## Operational Metrics
[Leave blank; you will populate this in Lesson 11]
```

:::note Building ops.local.md Progressively
You do not need to complete ops.local.md before continuing. Each lesson that introduces a new capability also introduces the relevant ops.local.md section. By the end of Lesson 11, your configuration file will be complete and fully calibrated to your organisation. The capstone in Lesson 14 uses the completed file as its foundation.
:::

### Using the Official Firm Profile

If you are working through the exercises using the chapter's fictional firm (a 200-person UK professional services company), use these values for Organisation Context:

```
Organisation name: [Do not invent a name; use "your organisation" language]
Size: 200 employees
Type: Professional services (consulting/advisory)
Primary jurisdiction: UK
Secondary jurisdictions: UAE, Pakistan (where relevant to exercises)
Primary currency: GBP
Financial year end: March
```

## Exercise: Install, Verify, Configure (Exercise 0)

**Type:** Setup
**Time:** 20 minutes
**Plugin commands:** `/vendor-review` (verify), `/audit` (verify)
**Goal:** Both plugins installed, both verification commands returning structured responses, Organisation Context section of ops.local.md complete

### Step 1: Install both plugins

Follow Steps 1 and 2 above. Confirm installation by checking that `/vendor-review` and `/audit` appear in your Cowork command list.

### Step 2: Run verification commands

Run both verification prompts from Step 3 above. Confirm each produces a structured response.

**What to evaluate:**

- Does `/vendor-review` return a structured vendor assessment with at least cost, performance, and renewal sections?
- Does `/audit` return a structured audit readiness summary with evidence requirements?
- Are both responses organisation-relevant (even though you used a hypothetical scenario)?
- Does either response produce an error or fall back to generic output that ignores the plugin?

### Step 3: Create and populate ops.local.md

Create `ops.local.md` in your Cowork session and complete the Organisation Context section using your actual organisation's details or the fictional firm profile above. Leave subsequent sections as placeholders.

### Step 4: Confirm context calibration

Run the following prompt to verify that ops.local.md is being read:

```
What do you know about my organisation based on my ops.local.md file?
Summarise the Organisation Context section and explain how it will
shape the output of /vendor-review and /audit in subsequent exercises.
```

**What to evaluate:**

- Does the response correctly reflect your Organisation Context entries?
- Does it explain specifically how jurisdiction and firm size would influence output?
- If the response is generic (no reference to your specific entries), check that ops.local.md is saved correctly in your Cowork session.

**Deliverable:** A Cowork session with both plugins active, both verification commands confirmed, and `ops.local.md` with a populated Organisation Context section.

:::note You Will Return to ops.local.md
As you complete each lesson, you will add the corresponding section to `ops.local.md`. By Lesson 11, the file will be fully populated. Keep it open in your Cowork session throughout the chapter.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
I have just installed the Operations plugin and the Operations Intelligence
plugin. Explain the zero-overlap principle: for each of the following
operational tasks, tell me whether to use the official plugin (and which
command), the custom plugin (and which command), or a natural language
prompt that triggers an auto-skill:

1. Audit a vendor's SLA performance before contract renewal
2. Prepare evidence packs for an external ISO 27001 audit
3. Write an SOP for an onboarding process
4. Map all GDPR obligations and assess current controls
5. Run a post-mortem for a production incident
6. Generate a monthly operations status report for the board
```

**What you are learning:** Mapping task types to the correct plugin and command is the core operational skill before any exercises. A precise classification of all six tasks confirms you have understood the two-plugin architecture.

**Adapt**: Modify the scenario to match your organisation.

```
My organisation is a [describe your type of organisation, size, industry,
jurisdiction]. Based on our ops.local.md configuration:

Which three /vendor-review scenarios are most immediately relevant
to our vendor portfolio?

Which regulatory frameworks should I include in the Regulatory Frameworks
section of ops.local.md?

Which of the four agents (vendor-watchdog, process-health, compliance-monitor,
change-tracker) should I prioritise configuring first, given our operations
profile?
```

**What you are learning:** Prioritising which plugin capabilities to focus on first based on your organisation's specific profile is a judgment call that this prompt forces you to make explicitly. The AI's recommendations will only be as good as the context you have provided in ops.local.md.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
I am the operations lead for a 500-person manufacturing firm that has
never used AI operations tools before. I am writing a memo to the COO
explaining why we are adopting a two-plugin operations architecture.

The COO has asked two specific questions:
1. "Why do we need two plugins? Can't one tool do everything?"
2. "What is the minimum configuration we need before this is useful?"

Draft the COO memo. The answer to question 1 must reference the
zero-overlap principle. The answer to question 2 must reference
ops.local.md and the progressive configuration approach.
```

**What you are learning:** Translating a technical architecture decision (two plugins, zero overlap) into a business justification tests whether you have understood the *why* behind the architecture , not just the how. This is the kind of communication operations leads are asked to produce regularly.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 3: Vendor Management. The Portfolio View →](./03-vendor-management-portfolio-view.md)
