---
slug: /Business-Domain-Agent-Workflows/people-hr/hr-operations-stack
sidebar_position: 2
title: "Your HR Operations Stack"
description: "Install the official Human Resources plugin and the custom hr-operations plugin, then configure hr.local.md to make every subsequent output organisation-specific"
keywords:
  [
    "people and hr",
    "hr operations",
    "hr plugin",
    "human resources plugin",
    "hr-operations plugin",
    "hr.local.md",
    "plugin installation",
    "cowork",
    "hr configuration",
    "hr stack",
  ]
chapter: 37
lesson: 2
duration_minutes: 50

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Verify Two-Plugin HR Stack in Cowork"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can install both the official Human Resources plugin and the custom hr-operations plugin in Cowork, and verify each is active by running a test command that returns a valid response"

  - name: "Configure hr.local.md to Make AI Outputs Organisation-Specific"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can complete all required sections of hr.local.md for a specific organisation (or a fictional one), including jurisdiction, policy library pointers, HR contacts, and benefits , and verify that plugin outputs reference the configured data rather than generic best practices"

  - name: "Map Plugin Commands to the Three HR Functions"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information"
    measurable_at_this_level: "Student can correctly assign each of the 14 available commands to information routing, process execution, or knowledge capture , and explain why the two-plugin architecture has zero naming collisions"

learning_objectives:
  - objective: "Install both HR plugins in Cowork and verify each is active"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student runs /policy-lookup with a test query and /jd with a test role, receiving structured outputs from each, confirming both plugins are installed and responding"

  - objective: "Explain the two-plugin architecture: what Anthropic provides and what Panaversity adds"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can list the 9 official and 5 custom commands, identify which plugin each belongs to, and explain why there is no naming collision or duplication"

  - objective: "Build a complete hr.local.md configuration for a specific organisation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a completed hr.local.md with all required sections filled in, and verifies that a /policy-lookup query returns organisation-specific (not generic) output"

cognitive_load:
  new_concepts: 3
  concepts_list:
    - "Two-plugin architecture, official plugin (Anthropic, 9 skills) + custom plugin (Panaversity, 5 skills + 4 agents)"
    - "hr.local.md: the configuration file that makes every plugin output organisation-specific"
    - "Zero-overlap design, 14 commands with no naming collisions between the two plugins"
  assessment: "3 concepts at A2/B1 level, appropriate for a setup lesson. The installation steps are procedural (low cognitive load). The hr.local.md configuration requires judgement about what to include (medium load). The architecture explanation provides the mental model students will reference throughout the chapter."

differentiation:
  extension_for_advanced: "Compare your completed hr.local.md against the plugin's template. Which fields did you fill in confidently from existing documents? Which required you to look something up? Which could you not fill in because the information does not exist in your organisation? The gaps you cannot fill are your HR documentation debt: the knowledge that exists only in people's heads. This is your institutional memory problem, made concrete."
  remedial_for_struggling: "Focus on getting one plugin working and hr.local.md partially configured. A partial configuration is better than no configuration ; it still makes outputs more specific than the generic default. You can return to complete the remaining sections after working through the later lessons."

teaching_guide:
  key_points:
    - "hr.local.md is the highest-leverage exercise in the chapter: every subsequent lesson produces better output because of it"
    - "The two-plugin architecture has zero naming collisions by design, official plugin handles general HR, custom plugin handles gaps"
    - "Installation verification matters: students who proceed without confirming both plugins work will have trouble debugging output quality later"
    - "The configuration exercise is deliberately incremental: students should not expect to complete hr.local.md in one sitting"
  misconceptions:
    - "Configuring hr.local.md is a one-time task. Correction: hr.local.md needs to be updated when policies change, statutory rates update, HR contacts change, or the organisation grows. Build the update habit from the start."
    - "The custom plugin duplicates the official plugin. Correction: the two plugins have no overlapping commands. The official plugin covers the nine most common HR tasks. The custom plugin covers five specific gaps the official plugin does not address."
    - "A default (unconfigured) plugin is fine for learning purposes. Correction: the exercises in later lessons are significantly more valuable when hr.local.md is configured. Students who skip configuration will get generic outputs that do not reflect any real organisation."
  discussion_prompts:
    - "What information in your hr.local.md did you have to guess or make up because it does not exist in any document? What does that tell you about your organisation's HR documentation?"
    - "If you had to configure hr.local.md for your current organisation, what would be the hardest section to complete? Why?"
  teaching_tips:
    - "Walk through the installation steps live before students attempt them. The Panaversity marketplace path (Add marketplace from GitHub) is less obvious than the official plugin browse path."
    - "Use the Karachi EdTech company as a shared configuration example ; it gives students a reference to compare against while building their own."
---

# Your HR Operations Stack

In Lesson 1, we identified the three problems. Ayesha Raza arrived at her new role with fifteen questions and no way to answer any of them. Her manager Omar Farooq spent time he did not have forwarding requests to HR. The HR team spent days answering questions that written documentation already answered. Explicit knowledge was inaccessible. Tacit knowledge was at risk every time a long-tenured colleague left.

This lesson installs the tools that solve those problems. By the end, you will have two plugins active in Cowork, a configuration file that makes every output specific to your organisation, and the foundation that every lesson in this chapter builds on. Everything from Lesson 3 onwards assumes this setup is complete.

## The Two-Plugin Architecture

This chapter uses two plugins with no naming collisions and no overlap. Understanding what each does , and why both are needed: is the mental model for the entire chapter.

### Official Plugin: `human-resources` (Anthropic, 9 skills)

The official Human Resources plugin provides nine skills covering the most common HR workflows. These are general-purpose; they work well for most organisations without configuration, and work better with it.

| Command                | Function                                     | Sensitivity  |
| ---------------------- | -------------------------------------------- | ------------ |
| `/policy-lookup`       | Find and explain policies in plain language  | ROUTINE      |
| `/onboarding`          | Generate onboarding plans and schedules      | ROUTINE      |
| `/draft-offer`         | Draft offer letters and employment documents | CONFIDENTIAL |
| `/interview-prep`      | Prepare interview questions and rubrics      | ROUTINE      |
| `/performance-review`  | Structure performance reviews                | CONFIDENTIAL |
| `/comp-analysis`       | Compensation analysis and benchmarking       | CONFIDENTIAL |
| `/org-planning`        | Organisational planning and restructuring    | CONFIDENTIAL |
| `/people-report`       | People analytics and reporting               | CONFIDENTIAL |
| `/recruiting-pipeline` | Recruiting pipeline management               | CONFIDENTIAL |

### Custom Plugin: `hr-operations` (Panaversity, 5 skills + 4 agents)

The custom plugin adds five skills and four persistent agents that the official plugin does not cover. The five skills handle specific HR tasks. The four agents operate autonomously in the background, connecting to your HRIS and communication systems.

| Command      | Function                                      | Sensitivity  |
| ------------ | --------------------------------------------- | ------------ |
| `/jd`        | Job descriptions with inclusive language      | ROUTINE      |
| `/match`     | Internal talent matching and succession       | CONFIDENTIAL |
| `/knowledge` | Institutional knowledge capture               | CONFIDENTIAL |
| `/reference` | Reference letters and employment verification | CONFIDENTIAL |
| `/offboard`  | Offboarding processes and knowledge transfer  | CONFIDENTIAL |

The four agents are covered in Lessons 4 and 12. For now, know they exist; they are the part of the custom plugin that operates continuously in the background.

### Why Two Plugins?

The official plugin covers nine common workflows well. The custom plugin adds five specific capabilities that the official plugin deliberately does not include, job descriptions with inclusive language screening, internal talent matching, knowledge capture, reference letters, and structured offboarding. There is no overlap. You run both, and you get 14 distinct commands across two sources.

| What          | Official Plugin | Custom Plugin           |
| ------------- | --------------- | ----------------------- |
| Source        | Anthropic       | Panaversity             |
| Skills        | 9               | 5                       |
| Agents        | 0               | 4                       |
| Configuration | N/A             | `hr.local.md`           |
| Install path  | Cowork store    | Panaversity marketplace |

## Installation

Install both plugins before proceeding. The order does not matter.

### Step 1: Install the Official `human-resources` Plugin

```
Cowork → Customize → Browse plugins → search "Human Resources" → Install
```

This is the standard Cowork store install path. The plugin appears in your active skills list once installed.

**Verify:** Type `/policy-lookup what is annual leave` in Cowork. You should receive a structured response with sections for Quick Answer, Details, Exceptions, Who to Contact, and Source. If you get an unrecognised command error, the plugin did not install correctly, return to Browse plugins and try again.

### Step 2: Install the Custom `hr-operations` Plugin

```
Cowork → Customize → + → Add marketplace from GitHub →
  panaversity/agentfactory-business-plugins → hr-operations → Install
```

This uses the Panaversity marketplace path, which is less obvious than the store browse path. You are adding a GitHub repository as a marketplace source, then installing the `hr-operations` plugin from it.

**Verify:** Type `/jd` in Cowork with a brief role description. You should receive a structured job description with an inclusive language check. If you get an unrecognised command error, the marketplace was not added correctly, return to the + → Add marketplace step.

:::tip Plugin Setup Reminder
This chapter's exercises require both plugins installed and `hr.local.md` configured. If you encounter command errors in later lessons, the most common cause is an incomplete setup here. Return to this lesson to verify.
:::

## Configure hr.local.md

`hr.local.md` is the configuration file that transforms generic plugin outputs into organisation-specific ones. Without it, `/policy-lookup` returns best-practice policy summaries. With it, `/policy-lookup` returns summaries that reference your actual leave entitlements, your specific HR contacts, and your jurisdiction's statutory rates.

This file is the most leveraged exercise in the chapter. Every plugin output throughout Lessons 3–14 is more specific, more accurate, and more useful because of what you configure here.

### Template Structure

`hr.local.md` has eight sections. Work through them in order; you do not need to complete every field on the first pass. A partial configuration is better than none.

---

**Section 1: Organisation Profile**

```markdown
## Organisation Profile

Name: [Your organisation's legal name]
Size: [Number of employees]
Sector: [e.g. Technology, EdTech, Financial Services, Healthcare]
HQ Location: [City, Country]
Additional offices: [If applicable, city and country for each]
HRIS: [e.g. Workday, BambooHR, HiBob, Sage HR , or None]
HR team size: [Number of people in HR]
HR team lead: [Name and title]
```

**What this controls:** Every plugin output that references "your organisation" or "your HR team" will use these details instead of generic placeholders.

---

**Section 2: Jurisdiction**

```markdown
## Jurisdiction

Primary employment law jurisdiction: [e.g. Pakistan (Federal + Punjab), UK (England & Wales)]
Secondary jurisdictions: [If you have employees in multiple countries, list each]
Annual leave entitlement: [e.g. 20 days + 12 public holidays (UK), 14 days minimum (Pakistan)]
Notice period (standard): [e.g. 1 month]
Notice period (senior roles): [e.g. 3 months]
Probation period: [e.g. 6 months]
Statutory sick pay: [e.g. UK SSP at current rate — [VERIFY current rate]; Pakistan: company policy varies]
```

**What this controls:** Every output touching employment rights, notice periods, or statutory rates will reference your jurisdiction's rules rather than generic or incorrect figures. This is especially important for cross-border organisations.

---

**Section 3: Policy Library**

```markdown
## Policy Library

Employee Handbook: [Location, e.g. SharePoint > HR > Handbook v2024]
Annual Leave Policy: [Location]
Remote Working Policy: [Location]
Expense Policy: [Location]
Parental Leave Policy: [Location]
Disciplinary & Grievance Policy: [Location]
Performance Management Framework: [Location]
Data Protection / Privacy Policy: [Location]
Additional policies: [List any others with location]
```

**What this controls:** When plugin outputs cite policy sources, they will reference your actual document locations rather than placeholder text.

---

**Section 4: Benefits**

```markdown
## Benefits

Annual leave: [Days, plus public holidays]
Sick pay (company policy): [Days at full pay before statutory kicks in]
Parental leave (primary carer): [Weeks at full pay, then statutory]
Parental leave (secondary carer): [Weeks at full pay]
Pension: [Provider, employer contribution %]
Health insurance: [Provider, coverage level , or "Not provided"]
Life insurance: [Provider, multiple of salary , or "Not provided"]
Learning & development budget: [Amount per year per employee]
Other benefits: [List any that are materially significant]
```

**What this controls:** Offer letter drafts, policy summaries, and onboarding materials will reference your actual benefits rather than generic examples.

---

**Section 5: HR Contacts**

```markdown
## HR Contacts

HR generalist (primary contact): [Name, email, phone]
HR generalist (backup): [Name, email , or "None"]
Payroll contact: [Name, email]
Benefits contact: [Name, email]
IT / systems access contact: [Name, email, for onboarding setup]
Legal / employment law contact: [Name, firm, email, for sensitive matters]
Occupational health contact: [Provider, referral process , or "Not available"]
Employee assistance programme: [Provider, access details , or "Not available"]
```

**What this controls:** Every escalation path in plugin outputs will reference these named contacts rather than "[Name] in HR."

---

**Section 6: Onboarding Configuration**

```markdown
## Onboarding Configuration

Pre-boarding window: [Days before start date when process begins, e.g. 14 days]
Day 1 programme: [Key activities, e.g. IT setup, HR induction, team lunch]
30-day goal framework: [What success looks like at 30 days, learning or output-focused]
60-day goal framework: [What success looks like at 60 days]
90-day goal framework: [What success looks like at 90 days]
Buddy / mentor programme: [Yes/No, and how it works if yes]
System access to provision: [List key systems, e.g. email, Slack, HRIS, expense tool]
```

**What this controls:** The `/onboarding` command will produce plans aligned to your actual onboarding structure and timelines.

---

**Section 7: Performance Review Cycle**

```markdown
## Performance Review Cycle

Formal review frequency: [e.g. Annual, Semi-annual, Quarterly]
Review months: [e.g. April and October]
Rating framework: [e.g. 1–5 scale, descriptive bands, or "Meets / Exceeds / Below"]
Competency framework: [Name of framework, or "None"]
Goal-setting methodology: [e.g. OKRs, SMART goals, or "Informal"]
360° feedback: [Yes/No]
Calibration process: [Brief description , or "None"]
Link to compensation: [Yes/No, and how]
```

**What this controls:** `/performance-review` outputs will use your rating framework, competency language, and timing rather than generic structures.

---

**Section 8: Reference Letters**

```markdown
## Reference Letters

Standard reference policy: [e.g. Factual only; confirm dates, title, and salary]
Who is authorised to provide references: [e.g. HR team only, or managers with HR approval]
What we confirm: [e.g. Employment dates, job title, salary , or "Employment dates and title only"]
What we do not confirm: [e.g. Performance or conduct details]
Reference request routing: [Where requests should be sent, email address or system]
```

**What this controls:** The `/reference` command will produce letters aligned to your reference policy, and flag any requests that exceed your stated policy.

---

### Worked Example: Karachi EdTech Company

Here is a partially completed `hr.local.md` for the EdTech company Ayesha joined, 250 employees, Karachi headquarters, growing analytics team:

```markdown
## Organisation Profile

Name: EdTech Solutions (Pvt) Ltd
Size: 250 employees
Sector: EdTech / Technology
HQ Location: Karachi, Pakistan
Additional offices: None
HRIS: HiBob
HR team size: 3
HR team lead: Nadia Akhtar, Head of People

## Jurisdiction

Primary employment law jurisdiction: Pakistan (Federal + Sindh Provincial)
Annual leave entitlement: 14 days per year (annual leave), 10 casual leave days
Notice period (standard): 1 month
Probation period: 6 months
Statutory sick pay: Per company policy, 10 days full pay per year

## HR Contacts

HR generalist (primary contact): Nadia Akhtar, nadia@edtechsolutions.pk, +92 21 XXXX XXXX
Payroll contact: Bilal Shah, payroll@edtechsolutions.pk
IT / systems access contact: IT helpdesk, it@edtechsolutions.pk

## Benefits

Annual leave: 14 days + 12 public holidays
Sick pay: 10 days at full pay per year
Parental leave (primary carer): 90 days at full pay (per applicable law)
Pension: EOBI contribution (employer + employee)
Learning & development budget: PKR 50,000 per employee per year
```

This is sufficient for most lessons. Sections left blank will use plugin defaults.

## Exercise: Build Your hr.local.md

**Type:** Configuration
**Time:** 35 minutes
**Plugin command:** `/policy-lookup`, `/jd` (verification only)
**Goal:** Produce a complete hr.local.md that makes plugin outputs organisation-specific; then verify by running two test commands

### Step 1: Choose Your Organisation

**Option A (recommended):** Use your own organisation. This produces the most useful output and gives you an artifact you can actually use.

**Option B:** Use the fictional company below, completing all fields from the information provided:

> **Brightfield Technology Ltd:** 200-person software company, London headquarters, England & Wales jurisdiction. Annual leave: 25 days + 8 public holidays. Primary carer parental leave: 26 weeks at full pay, then 13 weeks statutory. Secondary carer: 2 weeks at full pay. HR team: 2 people. HR lead: Rachel Davies, rachel@brightfieldtech.co.uk. Learning & development: £1,500 per year per employee. Performance reviews: semi-annual (April and October), 1–5 rating scale.

### Step 2: Complete Each Section

Work through the eight sections in order. For fields you cannot complete:

- If the information does not exist in your organisation → write "Not documented" (this is useful information; it is a documentation gap)
- If the information exists but you do not have access → write "See [system/person], access needed"
- If it genuinely does not apply → write "N/A"

Do not leave fields blank. Every gap is a gap in your HR documentation.

### Step 3: Verify with Two Test Commands

Once your `hr.local.md` is complete, run these two verification prompts in Cowork:

**Test 1, Policy lookup:**

```
/policy-lookup annual leave

How many days of annual leave does a full-time employee receive per year?
What is the process for booking leave? Who approves it?
```

Check the output against your `hr.local.md`. Does the entitlement figure match? Does it reference your actual policy location? Does the escalation contact match your HR contacts section?

**Test 2, Job description:**

```
/jd

Role: Data Analyst
Level: Mid-level
Department: Analytics
Location: [Your organisation's location]
Key responsibilities: analyse product data, build dashboards, present insights to stakeholders
```

Check that the output uses your organisation's location correctly and that the tone matches your sector.

**Deliverable:** A completed `hr.local.md` file (all eight sections filled or explicitly marked as gaps) plus a written note on what you found in each verification test, did the output reference your configured data?

:::note Keep This File
`hr.local.md` is used by every plugin command throughout Lessons 3–14. Keep it open or accessible as you work through the chapter. Update it whenever you encounter output that uses generic defaults instead of your organisation's specific data.
:::

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Configure hr.local.md for a fictional company and verify the output.

```
I am configuring hr.local.md for an HR plugin. Here is the company:

- Name: Apex Consulting Group
- Size: 120 employees
- Location: Karachi, Pakistan
- Jurisdiction: Pakistan (Federal + Sindh)
- Annual leave: 14 days + 12 public holidays
- Parental leave: 90 days (primary carer), 7 days (secondary carer)
- HR lead: Saima Iqbal, saima@apexcg.pk
- Performance reviews: annual, descriptive bands (Below / Meets / Exceeds)
- Learning budget: PKR 30,000 per year per employee

Generate a complete hr.local.md for this company using the standard
eight-section template. Then run a test: given this configuration, what
would the output of /policy-lookup annual leave look like for a
full-time employee at this company?
```

**What you are learning:** Completing hr.local.md for a defined company and immediately verifying the output shows whether the configuration is being used: the test is as important as the configuration itself.

**Adapt**: Identify gaps in your own organisation's HR documentation.

```
I am going to try to configure hr.local.md for my organisation. I will
go through each section and note where I can fill it in confidently,
where I need to look something up, and where the information simply
does not exist.

For each gap I find (information I cannot fill in because it is not
documented anywhere), explain:
1. What problem this gap creates in practice
2. What the risk is if an AI outputs generic defaults instead of our
   actual policy
3. What the first step would be to close this gap

My organisation: [Describe your organisation, sector, size, location,
structure]

Sections I cannot complete: [List which sections or fields you cannot fill in]
```

**What you are learning:** The gaps in hr.local.md are a direct map of your HR documentation debt: the knowledge that exists only in people's heads, not in any document.

**Apply**: Design an hr.local.md update process.

```
hr.local.md needs to be kept current as the organisation changes.
Design a maintenance process for an HR team of 3 people at a
250-person company with the following update triggers:

- Annual leave entitlement changes (policy update)
- Statutory rates change (e.g. minimum wage, sick pay, typically April)
- Key HR contacts change (someone leaves or joins the team)
- New policies are added or existing policies are significantly revised
- Organisation grows past a headcount threshold (e.g. 300 employees)

For each trigger:
1. Who is responsible for updating hr.local.md?
2. How quickly after the change should the update happen?
3. How do you verify the update produced correct plugin outputs?
4. How do you notify the team that hr.local.md has changed?

Output as a maintenance schedule and responsibility matrix.
```

**What you are learning:** A configuration file that is not maintained becomes a liability ; it produces outputs that reference outdated policies, wrong contacts, or incorrect statutory rates. The update process is part of the setup.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 3: Policy Lookup: Self-Service Policy Synthesis →](./03-policy-lookup-self-service.md)
