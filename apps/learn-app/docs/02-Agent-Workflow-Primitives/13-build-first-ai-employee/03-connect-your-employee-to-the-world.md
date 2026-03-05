---
sidebar_position: 3
title: "Connect Your Employee to the World"
description: "Add a communication channel or MCP server to your NanoClaw AI employee, extending its reach beyond WhatsApp into the tools your profession actually uses."
keywords: [nanoclaw, channels, mcp, telegram, gmail, slack, discord, integration, ai employee]
chapter: 13
lesson: 3
duration_minutes: 35

skills:
  - name: "Channel Integration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student successfully adds a new communication channel or MCP server and demonstrates a working interaction through it"
  - name: "Data Boundary Analysis"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student documents what data crosses the container boundary and identifies potential exposure points"

learning_objectives:
  - objective: "Integrate a new communication channel or MCP server with a running NanoClaw instance"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Demonstrated working send/receive or tool call through the new connection"
  - objective: "Document data flow across container boundaries for the chosen integration"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Written data flow description identifying what enters and exits the container"
  - objective: "Justify connection choice based on professional domain requirements"
    proficiency_level: "A2"
    bloom_level: "Evaluate"
    assessment_method: "Written rationale connecting the chosen integration to specific professional tasks"

cognitive_load:
  new_concepts: 3
  assessment: "Channel configuration, MCP server integration, and data boundary awareness. Within B1 budget of 3-5 concepts since students already understand NanoClaw architecture from Ch 7 L10."

differentiation:
  extension_for_advanced: "Add both a channel AND an MCP server. Map the full data flow for each, comparing what crosses the boundary."
  remedial_for_struggling: "Start with a channel using NanoClaw's built-in /add-* commands. These have guided setup flows that walk you through each step."
---

# Connect Your Employee to the World

In Lesson 2, you gave your employee domain expertise through a custom skill. Now you will give it reach — the ability to communicate and act through the tools your profession actually uses.

Your AI employee can think, but it can only talk through WhatsApp. A real employee needs access to the platforms where your work happens. An accountant needs email for client invoices. A teacher needs Slack for parent communication. A developer needs GitHub for code review workflows. The connection you add here should be the single highest-value integration for your specific profession.

You have two paths: add a **communication channel** (Telegram, Gmail, Slack, Discord) using NanoClaw's built-in `/add-*` commands, or add an **MCP server** that gives your employee access to domain-specific tools and data sources.

## The Challenge

Add the one connection that would create the most value for your AI employee's professional role. Then document exactly what data crosses the container boundary when that connection is active.

### Acceptance Criteria

1. Your new connection is working — demonstrated through a real send/receive interaction or a successful tool call
2. You have documented what data crosses the container boundary (what goes in, what comes out, what is stored)
3. You can explain in one paragraph why you chose this specific connection over alternatives

### Deliverable

Add a section to your repo's `README.md` or create a `connection-notes.md` file documenting your choice, the data boundary analysis, and a screenshot or log showing the working connection.

## Use Case Gallery

Pick the path that matches your profession, or adapt one to fit:

| Profession | Connection | Why This One | Path |
|------------|------------|-------------|------|
| **Accountant** | Gmail | Client invoice processing, payment status updates, receipt collection | Channel |
| **Teacher** | Slack | Parent-teacher communication, assignment reminders, classroom updates | Channel |
| **Developer** | GitHub MCP | Code review workflows, issue triage, PR summaries | MCP Server |
| **Consultant** | Google Calendar MCP | Meeting preparation, schedule analysis, client appointment management | MCP Server |

Your profession probably suggests a different connection entirely. That is the point — choose what matters for YOUR work.

## Hints

<details>
<summary>Level 1: Where to Look</summary>

Run `/help` in your NanoClaw WhatsApp group to see all available commands, including the `/add-*` commands for channels. For MCP servers, check the NanoClaw repository's documentation on MCP configuration. Your Layer 3 design from Chapter 7 already lists the MCP servers you planned — start there.

</details>

<details>
<summary>Level 2: Ask Your AI</summary>

Send this to your AI employee or Claude:

"Which communication channel or data source would give the highest ROI for a [your profession] assistant? Consider: frequency of use, time saved per interaction, and whether it enables tasks that were previously impossible."

Use the answer to confirm or adjust your choice before committing to the setup.

</details>

<details>
<summary>Level 3: Step-by-Step Guidance</summary>

**For channels:** Use the built-in commands — `/add-telegram`, `/add-gmail`, `/add-slack`, or `/add-discord`. Each command starts a guided setup flow. Follow the prompts, complete the authentication, and test with a simple message.

**For MCP servers:** Add the server configuration to your NanoClaw MCP settings. You will need the server's npm package or docker image, plus any required API keys. Test with a simple request that exercises the new connection — for example, ask your employee to read your latest calendar event or fetch a GitHub issue.

**For the data boundary analysis:** Ask yourself three questions: (1) What data does my employee send OUT through this connection? (2) What data comes IN from this connection? (3) Is any of this data stored inside the container?

</details>


