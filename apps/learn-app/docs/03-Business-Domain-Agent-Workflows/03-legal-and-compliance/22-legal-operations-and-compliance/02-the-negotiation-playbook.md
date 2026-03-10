---
sidebar_position: 2
title: "Plugin Architecture and the Playbook"
description: "Installing the Claude Legal Plugin, configuring the negotiation playbook, understanding MCP connectors, and building jurisdiction-aware legal workflows with the playbook architecture"
keywords:
  [
    "Claude Legal Plugin",
    "legal plugin installation",
    "negotiation playbook",
    "legal.local.md",
    "MCP connectors",
    "jurisdiction overlay",
    "legal-global-router",
    "DPA",
    "SCCs",
    "standard contractual clauses",
    "DIFC law",
    "UAE legal operations",
    "Agent Factory business plugin",
    "contract review configuration",
    "legal tech setup",
  ]
chapter: 22
lesson: 2
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Verify the Claude Legal Plugin"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can install the Legal Plugin via both the Cowork native path and the Agent Factory business plugin catalogue, verify correct installation by confirming structured output headers (JURISDICTION, PLAYBOOK, ATTORNEY REVIEW REQUIRED), and configure the initial legal.local.md file"

  - name: "Build a Negotiation Playbook Encoding Institutional Knowledge"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a legal.local.md playbook file with governing principles, clause positions (limitation of liability, IP ownership, indemnification, data protection, termination, governing law), NDA configuration, and jurisdiction-specific notes for at least one jurisdiction"

  - name: "Explain the Role of MCP Connectors in Legal Plugin Architecture"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can describe how MCP connects Claude to external systems (document storage, email intake, tracking dashboards) and explain the difference between the plugin as a document reviewer versus the plugin as a process manager with MCP enabled"

learning_objectives:
  - objective: "Install the Claude Legal Plugin using both the Cowork native path and the Agent Factory business plugin catalogue, and verify correct installation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can demonstrate plugin installation and produce a verification dialogue showing structured output headers"

  - objective: "Build a negotiation playbook (legal.local.md) that encodes an organisation's standard contractual positions, acceptable ranges, and escalation triggers"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can produce a complete playbook skeleton with at least four clause positions configured for their organisation's jurisdiction and risk profile"

  - objective: "Explain how the playbook transforms the Legal Plugin from a generic review tool into an institutional knowledge system"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can describe the difference between a playbook-calibrated review and a generic review, and explain why playbook configuration is the single most valuable deployment asset"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Plugin installation paths (Cowork native vs Agent Factory business plugin)"
    - "The negotiation playbook (legal.local.md) as institutional knowledge asset"
    - "MCP (Model Context Protocol) connectors for legal systems integration"
    - "DPA (Data Processing Agreement) and its role in vendor contracts"
    - "SCCs (Standard Contractual Clauses) for cross-border data transfers"
    - "Playbook clause positions: standard, acceptable range, and RED escalation triggers"
  assessment: "6 concepts at B1 level -- at the upper boundary of the 5-7 cognitive limit. The lesson progresses from installation (procedural) to playbook architecture (conceptual) to a worked example (applied), providing scaffolding for the higher concept count."

differentiation:
  extension_for_advanced: "Configure a playbook for a multi-jurisdictional organisation with positions for DIFC, ADGM, and UAE mainland contracts. Include jurisdiction-specific notes on the differences between DIFC DP Law 2020, ADGM DPR 2021, and UAE mainland PDPL for the data protection clause."
  remedial_for_struggling: "Focus on the installation verification (can you see the structured headers?) and the playbook skeleton (can you fill in limitation of liability for your organisation?). If you can install, verify, and configure one clause, you have the foundation for the full playbook."
---

# Plugin Architecture and the Playbook

## The Claude Legal Plugin: Architecture and Capabilities

### Installing the Plugin

The Legal Plugin uses a two-layer architecture. You install Anthropic's base legal plugin first (Layer 1), then add the Agent Factory jurisdiction extension on top (Layer 2). Both Cowork and Claude Code support this pattern.

### Plugin Installation and Verification Walkthrough

The Legal Plugin ships as a first-party Anthropic plugin for the Cowork platform. If you are building on the Agent Factory curriculum -- and particularly if you are extending the plugin with jurisdiction overlays, custom playbooks, or domain-specific SKILL.md files -- you will also install the Agent Factory extension from the Panaversity business plugin catalogue. This section walks through installation on both platforms, verification, and initial configuration so that your environment is production-ready before you begin the exercises in this chapter.

#### Why Installation Matters More Than You Think

Most professionals skip installation documentation. In legal AI, that is a mistake. The Legal Plugin's behaviour changes materially depending on three factors determined at installation time: (1) whether a negotiation playbook is found, (2) which jurisdiction overlays are loaded, and (3) whether MCP connectors to your document management system are configured. A plugin installed without these elements will still function -- but it will review contracts against generic commercial standards rather than your organisation's institutional knowledge. The difference between a generic review and a playbook-calibrated review is the difference between a tool and a competitive advantage.

#### Cowork Installation

In the Claude desktop app, open the **Cowork** tab.

**Layer 1 (Base):** In the Cowork sidebar, click **Customize** → **Browse plugins**, find `knowledge-work-plugins/legal`, and click **Install**. This installs Anthropic's base Legal Plugin with five core commands (`/review-contract`, `/triage-nda`, `/vendor-check`, `/brief`, `/respond`) and six generic skills covering contract review, NDA triage, IP research, regulatory monitoring, compliance tracking, and incident response. The base plugin reviews against general commercial standards -- it has no jurisdiction overlays and no routing system until you add Layer 2.

**Layer 2 (Agent Factory Extension):** Still in Cowork, click **Customize** → **Browse plugins** → **Personal** → click **+** → **Add marketplace from GitHub** → enter `https://github.com/panaversity/agentfactory-business-plugins` → find **legal-ops** → click **Install**. This adds the jurisdiction overlay system, the legal-global-router, and the full SKILL.md library developed in this chapter.

#### Claude Code (CLI) Installation

If you use Claude Code in the terminal:

```bash
# Layer 1: Install Anthropic's base Legal Plugin
claude plugin install legal@knowledge-work-plugins

# Layer 2: Install the Agent Factory jurisdiction extension
/plugin marketplace add panaversity/agentfactory-business-plugins
/plugin install legal-ops@agentfactory-business
```

Claude Code reads the SKILL.md files from both plugins and makes them available in every session. When a conversation mentions a contract review, NDA, or any trigger phrase listed in the router, Claude activates the correct skill and jurisdiction overlay automatically.

#### Other Agents (GitHub Copilot, VS Code, Codex, Cursor)

The extension plugin contains standard SKILL.md files. For agents that do not support the Claude Code plugin format, download the skills from the [GitHub repository](https://github.com/panaversity/agentfactory-business-plugins/tree/main/legal-ops) and place them in the platform's custom instructions path:

| Agent          | Path                                         |
| -------------- | -------------------------------------------- |
| GitHub Copilot | `.github/copilot-instructions.md`            |
| VS Code        | `.vscode/copilot-instructions.md`            |
| Codex (OpenAI) | Project instructions or system prompt        |
| Cursor         | `.cursorrules` or project-level instructions |

#### What Each Layer Provides

The base plugin provides the core legal workflows. The extension adds what the base plugin lacks: a routing system that identifies jurisdictions automatically, six overlay files that adapt every analysis for UK, EU, US, Pakistani, UAE, and GCC law, and seven additional skills covering areas the base plugin does not address (contract intake routing, DSAR management, legal spend analytics, and compliance calendar tracking). The two layers work together -- the extension's router intercepts queries, loads the appropriate base workflow, and applies the jurisdiction-specific overlay before producing output.

> **Concept Box: Two-Layer Plugin Architecture**
>
> The Legal Plugin uses a two-layer architecture. **Layer 1** is Anthropic's `legal@knowledge-work-plugins` -- the base plugin with five commands and six generic skills that review against general commercial standards. **Layer 2** is Panaversity's `legal-ops@agentfactory-business` -- the extension that adds the legal-global-router (jurisdiction-aware dispatch), six jurisdiction overlays (UK, EU, US, Pakistan, UAE, GCC), and seven unique skills (jurisdiction-contract-review, jurisdiction-nda-triage, ip-protection, regulatory-monitoring, dsar-privacy, legal-spend, compliance-calendar, contract-intake-agent). The extension's contract review and NDA triage skills are named `jurisdiction-contract-review` and `jurisdiction-nda-triage` to avoid collision with the base plugin's same-named skills -- they add jurisdiction overlay awareness on top of the base workflows. Install both layers; the router handles dispatch automatically.

After installation, verify the plugin is active:

```
You: I need to review a vendor agreement under English law.

Agent: I can help with that. I'll use the contract review workflow.

TASK:         Contract Review -- Vendor Agreement
JURISDICTION: English Law (UK overlay loaded)
PLAYBOOK:     Not configured -- reviewing against general commercial standards
ATTORNEY REVIEW REQUIRED: YES

Before I begin, I need some context:
1. Which party are you? (Customer / Vendor / Licensor / Licensee / Partner)
2. What is the contract type?
3. When does this need to be finalised?
4. Approximate contract value?
5. Any specific clauses of concern?
6. Relevant business context?
```

If you see the structured header with `JURISDICTION`, `PLAYBOOK`, and `ATTORNEY REVIEW REQUIRED` fields, the plugin is active and the router is dispatching correctly.

#### Setting Up legal.local.md

The plugin ships with a template file. Copy it to your working directory and begin customising:

```bash
cp .claude/skills/legal-ops/templates/legal.local.md.template legal.local.md
```

Open `legal.local.md` and configure the minimum viable playbook:

1. **Governing Principles** -- Set your primary role (Customer / Vendor / Licensee), risk tolerance, and default relationship context.
2. **Clause Positions** -- For each of the six priority clauses (limitation of liability, IP ownership, indemnification, data protection, termination, governing law), set your standard position, acceptable range, and RED escalation triggers.
3. **NDA Configuration** -- Define your Tier 1 / Tier 2 / Tier 3 thresholds.

The playbook skeleton later in this lesson provides the exact format. Exercise 1 walks through the full creation process with expert interview methodology.

> **The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.**

---

> **Concept Box: MCP (Model Context Protocol)**
>
> MCP is Anthropic's open protocol that allows Claude to connect to external tools, databases, and services. In the Legal Plugin, MCP connectors link Claude to Google Drive (contract storage), Gmail/Outlook (email intake), Google Sheets/Notion (tracking dashboards), and external databases (patent registries, regulatory sources). For example, when the Contract Intake Agent receives a vendor MSA uploaded to a designated SharePoint folder, MCP is the protocol that enables Claude to detect the upload, read the document, and log it in your tracking system -- all without manual intervention. Why it matters: without MCP, the Legal Plugin is a document reviewer; with MCP, it becomes a process manager connected to your organisation's actual systems.

The plugin ships with five primary slash commands, each representing a distinct legal workflow:

| Command            | Function                                                                |
| ------------------ | ----------------------------------------------------------------------- |
| `/review-contract` | Clause-by-clause review against your negotiation playbook               |
| `/triage-nda`      | Rapid NDA pre-screening with routing recommendation                     |
| `/vendor-check`    | Vendor agreement status and obligation monitoring                       |
| `/brief`           | Legal briefings, topic research, regulatory updates, incident response  |
| `/respond`         | Templated responses for DSARs, discovery holds, routine legal inquiries |

---

## The Playbook Architecture

The most important configuration element in the Legal Plugin is the **negotiation playbook** -- the organisation-specific file that defines your standard positions, acceptable ranges, and escalation triggers for each major clause type.

> **Concept Box: Playbook (Negotiation Playbook)**
>
> A playbook is a structured configuration file (`legal.local.md`) that encodes your organisation's standard contractual positions, acceptable negotiation ranges, and hard limits for each clause type. For example, a playbook might specify: "Limitation of liability: standard position is 12 months' fees (PKR 24,000,000 on a PKR 2,000,000/month contract); acceptable range is 6-24 months; escalate to GC if cap falls below 6 months." Without a playbook, the plugin reviews against generic commercial standards. With one, every review reflects your actual risk tolerance and negotiation history. Why it matters: the playbook is the difference between a generic AI review and an institutional knowledge system -- it is the single most valuable configuration asset in your Legal Plugin deployment.

The playbook lives in a local settings file, typically `legal.local.md`. Without it, the plugin reviews against "widely-accepted commercial standards" and labels outputs accordingly. With it, the plugin becomes an institutional knowledge system encoding your organisation's accumulated negotiation experience into every review it performs.

This is the Knowledge Extraction Method (Chapter 16) applied to legal: the expert knowledge that lives in your senior counsel's head -- what your organisation will and will not accept on limitation of liability, which indemnity carve-outs are non-negotiable, how aggressively to push back on IP ownership clauses -- becomes a structured, testable, deployable asset.

---

## Worked Example: Building a Playbook at a UAE Fintech

Fatima Al-Rashidi is Legal Operations Manager at PayGulf Technologies, a 120-person fintech company headquartered in DIFC, Dubai, with a subsidiary in Abu Dhabi's ADGM. PayGulf processes payments for 2,300 merchants across the UAE and is expanding into Saudi Arabia and Bahrain. Fatima's legal team handles approximately 15 vendor contracts and 20 NDAs per month.

Fatima opens the `legal.local.md.template` and begins configuring PayGulf's playbook. Here is how she fills in the key sections, with the reasoning that drives each position:

**Organisation Profile:**

```markdown
Primary role in contracts: CUSTOMER (we buy SaaS tools and cloud infrastructure)
Industry sector: Financial Services / Payments
Risk tolerance: Conservative (DFSA-regulated entity)
Primary jurisdictions: DIFC (primary), ADGM, UAE Mainland, England and Wales
Company type: DIFC-registered LLC
```

**Limitation of Liability -- DIFC/UAE Context:**

```markdown
STANDARD POSITION: Mutual cap at 12 months' fees paid/payable
ACCEPTABLE RANGE: 6-24 months' fees, mutual
ESCALATE (RED) IF: Uncapped liability on either side
Cap below AED 500,000 (approx. USD 136,000) regardless of fee structure
Asymmetric carve-outs favouring counterparty
NOTES: UAE Civil Code Art. 390 allows courts to REDUCE agreed penalties.
For mainland UAE contracts, do not rely on liquidated damages
clauses as deterrent -- the court may adjust them downward.
For DIFC-governed contracts, English common law penalty
principles apply (Cavendish v Makdessi). Always specify DIFC
as governing law for significant vendor agreements.
```

**Data Protection -- Multi-Zone Complexity:**

```markdown
STANDARD POSITION: DPA compliant with DIFC DP Law 2020; SCCs for transfers
outside DIFC; 72-hour breach notification
ACCEPTABLE RANGE: Breach notification up to 96 hours; ADGM DPR 2021 also acceptable
ESCALATE (RED) IF: No DPA offered; vendor stores data in jurisdiction without
adequacy determination; retention exceeds project term + 1 year;
mainland UAE PDPL applies but vendor has no UAE Data Office registration
NOTES: CRITICAL: Determine whether contract falls under DIFC DP Law 2020,
ADGM DPR 2021, or UAE mainland PDPL BEFORE reviewing DPA clauses.
Different frameworks, different regulators, different penalties
(DIFC: up to USD 100,000; mainland: up to AED 20,000,000).
```

> **Concept Box: DPA (Data Processing Agreement/Addendum)**
>
> A DPA is a contract (or contractual addendum) between a data controller and a data processor, required by data protection laws whenever one party processes personal data on behalf of another. For example, when PayGulf uses a cloud-based customer support tool that stores merchant email addresses, the tool vendor is a data processor and a DPA is required specifying what data is processed, for what purpose, retention periods, breach notification timelines, and deletion obligations on termination. Under DIFC DP Law 2020, failure to have a DPA in place can result in fines up to USD 100,000. Why it matters: a missing DPA is one of the most common compliance gaps in vendor agreements -- and one of the easiest for the Legal Plugin to catch automatically.

> **Concept Box: SCCs (Standard Contractual Clauses)**
>
> SCCs are pre-approved contractual terms for transferring personal data from a jurisdiction with strong data protection (e.g., EU, UK, DIFC) to a jurisdiction without an adequacy decision. For example, if PayGulf transfers merchant data from DIFC to a cloud server in India, SCCs provide the legal mechanism that makes the transfer lawful. The EU adopted new SCCs in June 2021; the UK has its own International Data Transfer Agreement (IDTA). DIFC and ADGM each have their own approved transfer mechanisms. Why it matters: using the wrong SCCs for your jurisdiction -- or none at all -- can result in regulatory enforcement action and fines.

**Governing Law -- The DIFC Advantage:**

```markdown
STANDARD POSITION: DIFC law, DIFC Courts
ACCEPTABLE RANGE: English law with DIFC Courts or LCIA arbitration;
ADGM law for financial services contracts
ESCALATE (RED) IF: Mainland UAE law for any contract above AED 1,000,000
(Arabic version prevails in mainland courts -- translation
risk on English-language contracts)
Any jurisdiction without established commercial law framework
NOTES: DIFC Courts are English-language, internationally recognised,
and judgments are enforceable in 30+ jurisdictions.
For Saudi expansion contracts, DIFC law + LCIA arbitration is
standard. For Bahrain, English law + LCIA is recommended.
```

Fatima saves this as `legal.local.md` in her Cowork skills directory. Every subsequent `/review-contract` and `/triage-nda` command now reviews against PayGulf's actual positions -- not generic standards. When the next vendor sends a mainland-UAE-governed SaaS agreement with no DPA, the agent will flag it RED and explain exactly why: "Mainland UAE law specified as governing law for a contract value of AED 2,400,000. Recommend DIFC law. Arabic version would prevail in mainland courts if dispute arises. Additionally, no DPA offered despite vendor processing merchant personal data -- required under UAE PDPL (Federal Decree-Law No. 45 of 2021)."

---

## The Playbook Skeleton

Use this template as the starting point for your organisation's playbook. Every clause position follows the same structure: standard position, acceptable range, RED escalation triggers, and jurisdiction-specific notes.

```markdown
# [Organisation] Legal Negotiation Playbook

# Version: 1.0 | Last Updated: [Date] | Owner: [General Counsel]

## Governing Principles

- We are typically: CUSTOMER / VENDOR / LICENSEE [choose primary]
- Risk tolerance: Conservative / Moderate / Balanced
- Relationship context: [New vendor / Strategic partner / Commodity]

## Clause Positions

### Limitation of Liability

STANDARD POSITION: Mutual cap at 12 months' fees paid/payable
ACCEPTABLE RANGE: 6-24 months' fees, mutual
ESCALATE (RED) IF: Uncapped liability; asymmetric carve-outs favouring
counterparty; cap below 6 months' fees
NOTES: IP indemnity carve-outs acceptable if reciprocal

### Intellectual Property Ownership

STANDARD POSITION: Each party retains pre-existing IP; work product
developed on our systems = our IP
ACCEPTABLE RANGE: Joint ownership of jointly developed materials
(with prior written approval only)
ESCALATE (RED) IF: Vendor claims ownership of deliverables created using
our data; broad licence-back without compensation
NOTES: Open-source components must be identified and
licence-compatible

### Indemnification

STANDARD POSITION: Mutual indemnification for third-party IP
infringement and gross negligence / wilful misconduct
ACCEPTABLE RANGE: Standard mutual with proportional contribution
ESCALATE (RED) IF: One-sided indemnification; uncapped IP indemnity;
indemnity triggered by our use of deliverables
as intended

### Data Protection and Privacy

STANDARD POSITION: GDPR/UK GDPR-compliant DPA; SCCs for international
transfers; 72-hour breach notification
ACCEPTABLE RANGE: Breach notification up to 96 hours
ESCALATE (RED) IF: No DPA offered; non-standard SCCs; retention periods
exceeding project term + 2 years; no deletion on
termination

### Termination

STANDARD POSITION: Either party may terminate for convenience on
30 days' notice
ACCEPTABLE RANGE: 14-60 days; termination for cause on 10 days'
notice with cure period
ESCALATE (RED) IF: No termination for convenience; auto-renewal without
notice; penalties exceeding 3 months' fees

### Governing Law and Jurisdiction

STANDARD POSITION: [Your jurisdiction] law and courts
ACCEPTABLE RANGE: Counterparty jurisdiction if major strategic partner;
ICC arbitration for international contracts
ESCALATE (RED) IF: Non-English governing law without translated summary;
exotic jurisdictions with no established commercial
law framework
```

---

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Building Your First Playbook Clause

```
I am configuring a Legal Plugin negotiation playbook for a
[describe your organisation: size, industry, primary jurisdiction].

Help me build the "Limitation of Liability" clause position using
this structure:

- STANDARD POSITION: [what we ideally want]
- ACCEPTABLE RANGE: [what we can live with]
- ESCALATE (RED) IF: [hard limits that require attorney review]
- NOTES: [jurisdiction-specific considerations]

Ask me questions about my organisation's risk tolerance, typical
contract values, and past negotiation outcomes to calibrate each
field. Then produce the complete clause position ready to paste
into legal.local.md.
```

**What you are learning:** The playbook is not a template you fill in abstractly -- it encodes real institutional knowledge. The questions the AI asks you mirror the expert interview methodology used by legal operations professionals to extract negotiation positions from senior counsel. Learning to answer these questions is learning to articulate your organisation's risk profile.

### Prompt 2: Comparing Generic vs Playbook-Calibrated Reviews

```
I want to understand the difference between a generic contract
review and a playbook-calibrated review.

Here is a contract clause:
"The total aggregate liability of Vendor shall not exceed the fees
paid by Customer in the three (3) months immediately preceding
the event giving rise to the claim."

Show me two analyses of this clause:
1. A generic review against "widely-accepted commercial standards"
2. A playbook-calibrated review where the playbook specifies:
   - Standard position: 12 months' fees
   - Acceptable range: 6-24 months
   - RED escalation if cap below 6 months

For each analysis, show the classification (GREEN/YELLOW/RED),
the issue identified, and the proposed redline language.
```

**What you are learning:** The playbook does not just change the label from YELLOW to RED -- it changes the specificity and quality of the entire analysis. A generic review says "this seems low." A playbook-calibrated review says "this is PKR 1,200,000 against your minimum of PKR 4,800,000 -- 75% below your floor -- and here is the exact replacement language."

### Prompt 3: MCP Connectors for Legal Systems

```
I am setting up MCP connectors for a Legal Plugin deployment.
My organisation uses:
- Google Drive for contract storage
- Gmail for contract intake
- Google Sheets for tracking deadlines

Explain:
1. What each MCP connector enables the Legal Plugin to do
2. The difference between the plugin WITHOUT these connectors
   (document reviewer) vs WITH them (process manager)
3. A specific workflow example: a vendor uploads a contract to
   a shared Drive folder, and the agent automatically detects,
   reviews, and logs it
```

**What you are learning:** MCP connectors transform the Legal Plugin from a tool you invoke manually into a system that monitors, processes, and tracks legal documents automatically. Understanding this distinction is essential for designing workflows that reduce manual intervention rather than just speeding up existing manual steps.

---

Continue to [Lesson 3: Contract Lifecycle Management ->](./03-contract-lifecycle-management.md)
