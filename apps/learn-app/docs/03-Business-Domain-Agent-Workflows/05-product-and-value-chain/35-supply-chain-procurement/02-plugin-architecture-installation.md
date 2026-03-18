---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/plugin-architecture-installation
sidebar_position: 2
title: "Plugin Architecture and Installation"
description: "Install the supply-chain plugin, understand its 8 skills and 5 persistent agents, configure supply-chain.local.md for your organisation, and connect the MCP integrations that give Claude access to your operational data"
keywords:
  [
    "supply chain plugin",
    "Cowork plugin installation",
    "supply-chain.local.md",
    "MCP integration",
    "vendor-assess skill",
    "invoice-reconcile skill",
    "supplier-risk skill",
    "logistics-brief skill",
    "spend-analysis skill",
    "supply-chain plugin commands",
    "persistent agents supply chain",
  ]
chapter: 35
lesson: 2
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Install a Cowork Plugin from the Marketplace and Verify Activation"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can install the supply-chain plugin via the Cowork sidebar, verify the installation by listing available commands, and confirm the plugin appears in the active plugins list"

  - name: "Configure supply-chain.local.md for Organisational Policy"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can populate the supply-chain.local.md template with their organisation's currency, vendor tiers, invoice tolerance thresholds, and risk review frequencies, and verify the configuration is active in a test command"

learning_objectives:
  - objective: "Install the supply-chain plugin and verify all 8 commands are available in Cowork"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student runs a verification prompt and sees all 8 commands listed with their one-line descriptions, confirming the plugin is active"

  - objective: "Explain the purpose of the 3 renamed commands and the collision avoidance rationale"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can state which 3 commands were renamed (/invoice-reconcile, /vendor-communicate, /supply-network-design), name their original spec names, and explain why renaming prevents conflicts with Anthropic-owned command surfaces"

  - objective: "Create an initial supply-chain.local.md configuration with organisation-specific defaults"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student completes the supply-chain.local.md template with their organisation's currency, vendor classification tier counts, and at least one custom invoice tolerance threshold, then verifies the configuration is reflected in a /vendor-assess test run"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Plugin installation via Cowork marketplace"
    - "supply-chain.local.md as the organisational policy layer"
    - "8 skills and their one-line purpose mapping"
    - "5 persistent agents and their monitoring roles"
    - "MCP integration points (ERP, AP, logistics, financial databases)"
  assessment: "5 concepts at A2-B1 level. This is a setup and orientation lesson — the primary cognitive work is understanding the architecture before using it. No new frameworks; the goal is familiarity with the plugin's components before Lesson 3 begins using them."

differentiation:
  extension_for_advanced: "Read the plugin's README.md after installation to understand the SKILL.md structure for each of the 8 skills. Pick one skill (e.g., vendor-assessment) and read its SKILL.md. How does the skill encode organisational policy? What parameters would you change for your organisation? How does supply-chain.local.md override the skill defaults?"
  remedial_for_struggling: "Focus on getting the plugin installed and running one verification command before reading further. If installation fails, work through the troubleshooting steps before continuing. You do not need to understand the full plugin architecture to proceed — just confirm the commands are available and the plugin responds."

teaching_guide:
  key_points:
    - "supply-chain.local.md is the key personalisation layer — it is what makes the plugin work for your organisation rather than a generic template"
    - "The 3 command renames exist to avoid conflicts with Anthropic-owned command surfaces — students must always use the renamed versions"
    - "MCP integration is what gives the plugin access to live operational data — without it, the plugin operates on data the student provides manually"
    - "The 5 persistent agents automate the monitoring work that the skills perform manually — agents are introduced here but activated properly in Lesson 12"
  misconceptions:
    - "I need to configure everything in supply-chain.local.md before I can use the plugin. Correction: The plugin works with defaults. supply-chain.local.md adds your organisation's specifics. Start with what you know; add the rest as you work through the lessons."
    - "The plugin will automatically connect to my ERP once installed. Correction: MCP integration requires explicit configuration — you specify the MCP server endpoints. Installation gives you the skills; MCP connection gives the skills access to your live data."
    - "/reconcile is the right command for invoice reconciliation. Correction: The command is /invoice-reconcile — the original /reconcile name was renamed to avoid collision with Anthropic-owned surfaces."
  discussion_prompts:
    - "Looking at the 8 commands, which one addresses the structural failure that costs your organisation the most? Which failure from Lesson 1 would you tackle first?"
    - "What data sources would you want to connect via MCP to make this plugin most useful for your organisation?"
  teaching_tips:
    - "Walk students through the installation live — have them run the verification command immediately after installing to confirm the plugin is active before proceeding"
    - "The supply-chain.local.md template deserves 5 minutes of discussion: what organisational knowledge goes into it and why that knowledge changes how every skill behaves"
    - "Emphasise that MCP integration is optional for the exercises — students can provide data manually in prompts throughout Lessons 3-13, then add MCP connectivity when they deploy"
---

# Plugin Architecture and Installation

Lesson 1 diagnosed the three structural failures. This lesson installs the solution. The supply-chain plugin gives Claude 8 specialist skills for every major supply chain workflow, plus 5 persistent agents that run the monitoring layer continuously. By the end of this lesson, you will have the plugin active, configured for your organisation, and verified with a test command.

## What the Plugin Contains

The supply-chain plugin is a focused collection of tools built around the workflows described in Lesson 1:

```
supply-chain/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── vendor-assessment/SKILL.md
│   ├── supplier-risk/SKILL.md
│   ├── invoice-reconciliation/SKILL.md
│   ├── vendor-communication/SKILL.md
│   ├── logistics-brief/SKILL.md
│   ├── spend-analysis/SKILL.md
│   ├── network-design/SKILL.md
│   └── supply-chain-brief/SKILL.md
├── agents/
│   ├── vendor-health-monitor.md
│   ├── invoice-reconciliation-agent.md
│   ├── spend-intelligence-agent.md
│   ├── procurement-calendar-agent.md
│   └── logistics-intelligence-agent.md
└── README.md
```

No router skill — each of the 8 skills is directly addressable. No jurisdiction overlays — supply chain policy is organisation-specific rather than jurisdiction-specific, and is configured via `supply-chain.local.md`.

## Installing the Plugin

Open Cowork and navigate to the plugin marketplace in the sidebar.

**Option 1 — Marketplace install:**

```
claude plugin install supply-chain@agentfactory-business
```

**Option 2 — GitHub install (if not yet in marketplace):**

```
claude plugin install github:panaversity/agentfactory-business-plugins/supply-chain
```

After installation, verify the plugin is active:

```
List all available supply-chain plugin commands with a one-line description of each.
```

You should see all 8 commands listed. If the plugin is not active, check the Cowork sidebar under Settings → Plugins to confirm it appears in the installed list.

:::tip Plugin Setup Reminder
If you encounter issues during installation, confirm you have Cowork open (not the standard Claude interface) and that you are running the installation command in the chat input — not in a terminal. Plugin commands are Cowork-specific.
:::

## The 8 Skills — What They Do

| Command                  | What It Does                                                          | Addresses (from Lesson 1)                |
| ------------------------ | --------------------------------------------------------------------- | ---------------------------------------- |
| `/vendor-assess`         | Six-dimension vendor assessment and Kraljic classification            | Vendor Blind Spot                        |
| `/supplier-risk`         | Continuous multi-dimension risk brief for a named supplier            | Vendor Blind Spot                        |
| `/invoice-reconcile`     | Three-way match invoice reconciliation with tolerance rules           | Reconciliation Swamp                     |
| `/vendor-communicate`    | Vendor communications — dispute notices, CARs, exit letters           | Reconciliation Swamp / Vendor Blind Spot |
| `/logistics-brief`       | Carrier performance analysis and lane efficiency review               | Static Optimisation Trap                 |
| `/spend-analysis`        | Spend analytics — price consistency, vendor consolidation, benchmarks | Static Optimisation Trap                 |
| `/supply-chain-brief`    | Weekly executive supply chain intelligence dashboard                  | All three failures                       |
| `/supply-network-design` | Supply chain network scenario modelling (MCP-connected)               | Static Optimisation Trap                 |

:::note The 3 Renamed Commands
Three commands in this plugin use names that differ from the original specification. The names were changed to avoid collision with Anthropic-owned command surfaces:

| Spec Name         | Plugin Name              | Why Changed                                                         |
| ----------------- | ------------------------ | ------------------------------------------------------------------- |
| `/reconcile`      | `/invoice-reconcile`     | Avoids collision with a potential generic `/reconcile` surface      |
| `/communicate`    | `/vendor-communicate`    | Avoids collision with a potential generic `/communicate` surface    |
| `/network-design` | `/supply-network-design` | Avoids collision with a potential generic `/network-design` surface |

Always use the plugin names. If you type `/reconcile` in Cowork, you may get unexpected behaviour. Use `/invoice-reconcile`.
:::

## The 5 Persistent Agents — What They Monitor

| Agent                          | Monitoring Role                                                                           | Schedule                    |
| ------------------------------ | ----------------------------------------------------------------------------------------- | --------------------------- |
| `vendor-health-monitor`        | Continuous supplier financial health, delivery performance, and news monitoring           | Daily                       |
| `invoice-reconciliation-agent` | Automated three-way match processing and exception triage                                 | On invoice receipt / hourly |
| `spend-intelligence-agent`     | Price consistency monitoring, vendor consolidation opportunities, contract renewal alerts | Weekly                      |
| `procurement-calendar-agent`   | Contract renewals, review cycles, compliance deadlines, vendor review scheduling          | Daily                       |
| `logistics-intelligence-agent` | Carrier performance trends, lane cost drift, route optimisation opportunities             | Weekly                      |

The agents automate the continuous monitoring work that Lessons 3–13 teach you to do manually. They are introduced here so you understand the architecture; you will activate and configure them properly in [Lesson 12](./12-persistent-agents-schedule.md).

## Configuring supply-chain.local.md

The plugin ships with sensible defaults. `supply-chain.local.md` is where you override those defaults with your organisation's specifics. Think of it as the plugin's institutional memory — the policies, thresholds, and classifications that make every skill behave correctly for your context.

Create or open `supply-chain.local.md` in Cowork's Instructions pane (Settings → Instructions → New file) and populate the template:

```markdown
# Supply Chain Local Configuration

## Organisation

- **Name**: [Your organisation name]
- **Industry**: [Manufacturing / Retail / Services / Healthcare / etc.]
- **Primary currency**: [GBP / USD / EUR / PKR / etc.]
- **ERP system**: [SAP / Oracle / Dynamics / NetSuite / Other]

## Vendor Classification Defaults

- **Total active vendors**: [Approximate number]
- **Strategic tier (Tier 1)**: [Approximate count] vendors
- **Tactical tier (Tier 2)**: [Approximate count] vendors
- **Commodity tier (Tier 3)**: [Approximate count] vendors
- **Bottleneck tier (Tier 4)**: [Approximate count] vendors

## Invoice Reconciliation Thresholds

- **Standard tolerance**: [e.g., 2% or £50 — whichever is less]
- **Strategic vendor tolerance**: [e.g., 1% — tighter threshold for high-value relationships]
- **Auto-approve below**: [e.g., £25 discrepancy — resolve without escalation]
- **Escalate above**: [e.g., £500 discrepancy — requires manager approval]

## Supplier Risk Review Frequencies

- **Strategic vendors**: Quarterly + event-triggered
- **Tactical vendors**: Bi-annual
- **Commodity vendors**: Annual
- **Bottleneck vendors**: Quarterly

## Key Contacts

- **Head of Procurement / CPO**: [Name, if relevant for brief generation]
- **AP Team Lead**: [Name, if relevant for escalation routing]
- **Logistics Manager**: [Name, if relevant for carrier reviews]

## MCP Integrations (Active)

- **ERP**: [Connected / Not yet configured]
- **Accounts Payable**: [Connected / Not yet configured]
- **Logistics / TMS**: [Connected / Not yet configured]
- **Financial databases**: [Connected / Not yet configured]
```

You will refine this configuration as you work through each lesson. For now, complete what you know. The classification counts and invoice thresholds are what the skills use most immediately — start there.

## Connecting MCP Integrations

The plugin's full value comes from connecting Claude to your live operational data. Without MCP, you provide data manually in prompts. With MCP, the skills pull current data from your systems automatically.

The five key MCP integration points:

| System                                    | What It Provides                                    | MCP Server                            |
| ----------------------------------------- | --------------------------------------------------- | ------------------------------------- |
| **ERP** (SAP, Oracle, Dynamics, NetSuite) | Purchase orders, goods receipts, vendor master data | Vendor-specific MCP server or Pipe17  |
| **Accounts Payable**                      | Invoice records, payment status, dispute logs       | AP system MCP or Pipe17               |
| **Logistics / TMS**                       | Shipment records, carrier performance, route data   | Freight platform API / MCP            |
| **Supplier portal**                       | Delivery confirmations, quality certificates        | Portal API                            |
| **Financial databases**                   | Supplier financial health, credit ratings           | Companies House, D&B, Creditsafe APIs |

:::info Web Search MCP
The Web Search MCP is also valuable for this plugin — specifically for the `vendor-health-monitor` agent's external monitoring: supplier news, commodity price changes, regulatory updates, geopolitical risk signals. If you have Web Search MCP enabled in Cowork, it is automatically available to the plugin's agents.
:::

For the exercises in Lessons 3–13, you do not need MCP connected. Each exercise provides sample data in the prompt. When you deploy the plugin for real operational use, MCP connection is what converts it from a demonstration tool to a live intelligence layer.

## Verify Your Installation

Run these three prompts to confirm the plugin is correctly installed and configured:

**Verification 1 — Plugin active:**

```
List all commands available from the supply-chain plugin.
For each command, provide a one-line description of when to use it.
```

**Verification 2 — Configuration loaded:**

```
What are my current invoice reconciliation thresholds?
Show me the configuration that will govern tolerance rules in /invoice-reconcile.
```

**Verification 3 — First skill test:**

```
/vendor-assess
Vendor: Test Vendor Ltd
Category: Office supplies
Annual spend: £12,000
Dependency: Low — 8 alternatives available in market
Jurisdiction: UK
Relationship: New — first assessment
```

You expect to see a Tier 3 (Commodity) classification for this test vendor — low spend, low supply risk, many alternatives. If the classification output looks structured and includes tier reasoning, the skill is working.

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
I have just installed the supply-chain plugin. I want to verify it is
working correctly. Please:

1. List all 8 plugin commands with their one-line descriptions
2. Confirm which 3 commands were renamed from their original spec names
   and explain why
3. Tell me what information I need to provide in supply-chain.local.md
   before using /invoice-reconcile for the first time
```

**What you are learning:** Verifying a plugin installation before using it confirms you understand the architecture — not just that the install command ran. The command naming question reinforces the collision-avoidance pattern you will use throughout this chapter.

**Adapt**: Modify the scenario to match your organisation.

```
I am configuring supply-chain.local.md for [describe your organisation:
industry, approximate vendor count, primary currency, ERP system].

Based on that context:
1. What invoice reconciliation thresholds would you recommend as starting
   defaults for a business of this type?
2. How many vendors would you expect in each Kraljic tier for this industry?
3. What are the two most important MCP integrations to prioritise first,
   and why?
```

**What you are learning:** The right defaults for supply-chain.local.md depend on your industry and scale. A manufacturer processing 5,000 invoices monthly needs tighter automation thresholds than a services firm processing 200. This prompt helps you think through your own configuration before completing it.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
A CPO wants to deploy the supply-chain plugin across a global manufacturing
organisation with:
- 3 regional procurement teams (EMEA, Americas, APAC)
- Different currencies and ERP instances per region
- Centralised strategic vendor management, regional tactical/commodity management
- Different invoice tolerance policies by region (UK: £50 threshold, US: $75, APAC: variable)

1. How should supply-chain.local.md be structured to handle multi-region configuration?
2. Should there be one shared plugin installation or region-specific instances?
3. Which commands would benefit most from region-specific configuration, and which
   can use global defaults?
```

**What you are learning:** Enterprise plugin deployment introduces configuration complexity that a single supply-chain.local.md file may not address cleanly. Thinking through multi-region configuration reveals the boundaries of the local configuration approach — and where organisational governance decisions need to be made before the plugin is deployed.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 3: Vendor Classification — The Kraljic Matrix →](./03-vendor-classification-kraljic.md)
