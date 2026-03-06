---
sidebar_position: 2
title: "Installing the Plugins"
description: "How to install the Anthropic Sales and Marketing Plugins, add the Agent Factory extension for lead scoring, ICP, jurisdictions, and RevOps agents, verify correct installation, configure sales-marketing.local.md, and resolve skill collisions between base and extension plugins"
keywords:
  [
    "plugin installation",
    "Claude Sales Plugin",
    "Claude Marketing Plugin",
    "Agent Factory business plugin",
    "sales-marketing.local.md",
    "MCP connectors",
    "ICP configuration",
    "skill collision",
    "plugin verification",
    "knowledge-work-plugins",
    "agentfactory-business",
    "Cowork plugin",
    "dual-plugin architecture",
  ]
chapter: 23
lesson: 2
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Verify the Claude Sales and Marketing Plugins"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can install plugins via both installation paths, verify correct installation by confirming structured output headers (TASK/PLUGINS/ICP), and troubleshoot common installation issues"

  - name: "Configure sales-marketing.local.md for a Specific Business"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can copy the template, fill in minimum viable configuration (ICP + persona + brand voice), and verify the agent loads the configuration by checking structured output headers"

  - name: "Explain Skill Collision Resolution Between Base and Extension Plugins"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can identify which skills exist in both the Anthropic base plugins and the Agent Factory extension, describe the three resolution patterns (wrapper, override, delegation), and explain when each is appropriate"

learning_objectives:
  - objective: "Install the Claude Sales and Marketing Plugins using both the Anthropic native path and the Agent Factory business plugin catalogue, and verify correct installation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can demonstrate plugin installation and produce a verification dialogue showing structured output headers"

  - objective: "Configure the minimum viable sales-marketing.local.md file with ICP definition, persona profiles, and brand voice for a specific business"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can produce a configuration file and demonstrate that the agent loads it correctly"

  - objective: "Explain how skill collisions between base plugins and extensions are resolved and when each resolution pattern is appropriate"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can identify the overlapping skills (campaign-planning, content-creation) and describe the wrapper pattern that resolves them"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Dual-path plugin installation (Anthropic native + Agent Factory extension)"
    - "Plugin verification through structured output headers"
    - "sales-marketing.local.md as the institutional knowledge configuration"
    - "Skill collisions when base and extension plugins overlap"
    - "The ~~category connector pattern for plugin commands"
  assessment: "5 concepts at B1 level -- within the 5-7 cognitive limit. This is a procedural lesson that moves from installation to configuration to verification. The skill collision concept is the most abstract; the rest are hands-on."

differentiation:
  extension_for_advanced: "Install both plugins plus a second extension (e.g., Islamic finance or banking) and verify that the global router correctly isolates each domain. Test with an ambiguous query that could route to either domain and document how the router resolves it."
  remedial_for_struggling: "Focus on the installation commands and verification dialogue. If you can install, verify the structured headers appear, and copy the local.md template, you have the foundation for every subsequent lesson."
---

# Installing the Plugins

In Lesson 1, you mapped the One-Percent Problem and the four RevOps domains that the Sales and Marketing Plugins address. Now you will install those plugins, verify they are working, and configure the institutional knowledge file that transforms generic outputs into outputs specific to your business. This is the foundation for every lesson that follows -- the research briefs, lead scores, outreach messages, and campaigns you build in Lessons 3 through 10 all depend on the environment you configure here.

Installation is not a throwaway step. The Legal Plugin chapter (Chapter 22) made this point clearly: a plugin installed without its configuration file and jurisdiction overlays still functions, but it produces generic output against generic standards. The same principle applies here. A Sales Plugin without a configured ICP definition will research prospects against vague criteria. A Marketing Plugin without brand voice configuration will produce content that could belong to any company. The ten minutes you spend on configuration in this lesson determine the quality of everything you build for the rest of the chapter.

## Path 1: Anthropic Official Plugins (Base Layer)

The Sales and Marketing Plugins ship as first-party Anthropic plugins for the Cowork platform. These are the base layer -- competent, broadly capable, and designed to work out of the box without any extension or customisation.

### Cowork Installation

In the Claude desktop app, open the **Cowork** tab.

**Sales Plugin:** Click **Customize** then **Browse plugins**, find `knowledge-work-plugins/sales`, and click **Install**. This installs six sales skills (prospect-research, lead-scoring, crm-enrichment, outreach, sequence, pre-call-brief) and three sales commands (`/research`, `/score`, `/enrich`).

**Marketing Plugin:** Repeat the process for `knowledge-work-plugins/marketing`. This installs five marketing skills (campaign-planning, content-creation, copywriting, performance-analysis, content-calendar) and seven marketing commands (`/campaign`, `/content`, `/copy`, `/persona`, `/analyze`, `/calendar`, and `/brief`).

### Claude Code (CLI) Installation

If you use Claude Code in the terminal:

```bash
# Install the base Sales Plugin
claude plugin install sales@knowledge-work-plugins

# Install the base Marketing Plugin
claude plugin install marketing@knowledge-work-plugins
```

**Output:**

```
Installed sales@knowledge-work-plugins (v1.2.0)
  6 skills loaded, 3 commands registered
Installed marketing@knowledge-work-plugins (v1.2.0)
  5 skills loaded, 7 commands registered
```

### What the Base Layer Provides

With only the base layer installed, you have 11 skills and 10 commands covering the full sales-and-marketing workflow. These are capable but generic -- they review prospects against broadly defined criteria, score leads without your specific ICP dimensions, and produce outreach that follows good practices but does not reflect your organisation's voice or competitive positioning. Think of the base layer as a capable new hire who knows the discipline but has not yet learned your company.

> **The `~~category` Connector Pattern:** Plugin commands use the `~~category` syntax to namespace themselves within Cowork. When you type `/research` in a Cowork session with the sales plugin loaded, the system resolves it as `~~sales/research`. This prevents collisions when multiple plugins register commands with similar names. If you have both the sales and marketing plugins loaded and type `/brief`, Cowork may ask you to disambiguate: `~~sales/brief` (pre-call preparation) or `~~marketing/brief` (campaign brief). In Claude Code, the same resolution happens through the plugin manifest, and the global router (installed with the extension) handles disambiguation automatically.

---

## Path 2: Agent Factory Extension Plugin

The base plugins give you a capable generalist. The extension plugin transforms that generalist into a specialist who knows your market, your ICP, your jurisdiction, and your competitive landscape.

### Installation

**Cowork:** Click **Customize** then **Browse plugins** then **Personal** then **+** then **Add marketplace from GitHub** and enter `https://github.com/panaversity/agentfactory-business-plugins`. Find **sales-revops-marketing** and click **Install**.

**Claude Code:**

```bash
claude plugin install sales-revops-marketing@agentfactory-business
```

**Output:**

```
Installed sales-revops-marketing@agentfactory-business (v1.0.0)
  19 skills loaded (14 product + 5 agent), 4 commands registered
  4 jurisdiction overlays available (US, EU, Pakistan, GCC)
  Configuration template: sales-marketing.local.md.template
```

### Other Agents (GitHub Copilot, VS Code, Codex, Cursor)

The extension plugin contains standard SKILL.md files. For agents that do not support the Claude plugin format, download the skills from the [GitHub repository](https://github.com/panaversity/agentfactory-business-plugins/tree/main/sales-revops-marketing) and place them in the platform's custom instructions path:

| Agent          | Path                                         |
| -------------- | -------------------------------------------- |
| GitHub Copilot | `.github/copilot-instructions.md`            |
| VS Code        | `.vscode/copilot-instructions.md`            |
| Codex (OpenAI) | Project instructions or system prompt        |
| Cursor         | `.cursorrules` or project-level instructions |

### What the Extension Adds

The extension provides capabilities the base plugins lack entirely:

**Lead Scoring Model with Three Dimensions.** The base plugin scores leads on a single generic dimension. The extension introduces a three-dimension model -- fit (does this company match your ICP?), timing (are external signals indicating buying readiness?), and engagement (has the prospect interacted with your content or responded to outreach?) -- with configurable weights and routing thresholds (HOT, WARM, Cultivate, Not Yet).

**ICP Configuration System.** The base plugin has no structured ICP definition. The extension reads `sales-marketing.local.md` for firmographic criteria, technographic signals, timing signals, persona profiles, brand voice, competitive intelligence, and CRM pipeline configuration. Every command consults this file before producing output.

**Four Jurisdiction Overlays.** Outreach compliance differs by market. The extension ships overlays for US (CAN-SPAM, CCPA), EU (GDPR, ePrivacy Directive), Pakistan (PECA 2016, PTA regulations), and GCC (UAE data protection, Saudi PDPL). The global router loads the appropriate overlay based on the prospect's location.

**Five RevOps Agents.** The extension includes five autonomous agents: Lead Intelligence (monitors timing signals and alerts reps), CRM Hygiene (automated enrichment and decay prevention), Outreach Sequencing (manages multi-touch campaigns), Marketing Performance (weekly analytics and optimisation), and Revenue Reporting (pipeline dashboards and forecast). These agents are the orchestration layer you build in Lesson 9.

**The Five Laws Framework.** Every outreach skill in the extension applies the Five Laws of Outreach before finalising any message. You learn these Laws in Lesson 5.

**Pipeline Analysis.** The extension adds structured deal health assessment, stuck-deal identification, and forecast gap analysis -- capabilities absent from the base plugin.

---

## Verification Dialogue

After installing both layers, verify the entire stack is active. Start a new session and type a query that should trigger the sales workflow:

```
You: I need to research a prospect -- Fatima Zahoor, VP of Supply Chain
     at Crescent Logistics in Lahore. We are preparing for a discovery call
     next week.

Agent: I'll produce a prospect research brief for Fatima Zahoor.

TASK:          Prospect Research -- Crescent Logistics
ICP MATCH:     UNVERIFIED (sales-marketing.local.md not yet configured)
CONFIGURATION: Not configured -- using general B2B research framework
VERIFY DATA:   All prospect data should be verified before outreach

Before I build the full brief, I need some context:
1. What does your company sell?
2. What is your primary market?
3. Who is your typical buyer (title and level)?
4. What is the approximate deal size?
5. What prompted this outreach?
```

If you see the structured header with `TASK`, `ICP MATCH`, `CONFIGURATION`, and `VERIFY DATA` fields, both plugins are loaded and the global router is dispatching correctly. The `CONFIGURATION: Not configured` line tells you the extension is active but has not yet found a `sales-marketing.local.md` file. That is expected -- you will create it in the next section.

If the agent responds without the structured header -- just a plain-text answer -- the extension is not loaded. Verify the installation path and restart the session.

---

## Standalone vs Supercharged: Why the Extension Matters

The same query produces materially different output depending on whether the extension is loaded and configured. Here is the difference:

| Dimension             | Standalone (Base Only)                  | Supercharged (Base + Extension + Configuration)                                                      |
| --------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Research depth**    | General web search and LinkedIn summary | ICP-calibrated research targeting your specific firmographic and timing criteria                     |
| **Lead scoring**      | Single-dimension generic score          | Three-dimension score (fit + timing + engagement) with configurable routing thresholds               |
| **Outreach quality**  | Follows general best practices          | Applies Five Laws framework, brand voice, persona-specific tone, and jurisdiction compliance overlay |
| **Campaign planning** | Generic channel recommendations         | Budget-localised, ICP-targeted, persona-calibrated campaigns with regional channel preferences       |
| **Compliance**        | General disclaimers                     | Jurisdiction-specific compliance (CAN-SPAM, GDPR, PECA, GCC data protection) applied automatically   |
| **Pipeline analysis** | Not available                           | Structured deal health, stuck-deal identification, forecast gap analysis                             |
| **RevOps automation** | Not available                           | Five autonomous agents handling enrichment, sequencing, analytics, and reporting                     |

The extension does not replace the base -- it enhances every command through the global router. When you run `/research` with the extension loaded, the router intercepts the request, loads the prospect-research skill from the extension (which wraps the base skill), applies the ICP configuration from `sales-marketing.local.md`, selects the appropriate jurisdiction overlay, and produces output that reflects all of these layers. The base skill does the heavy lifting; the extension provides the specificity.

> **Concept Box: Global Router**
>
> The `sales-marketing-global-router` is the routing skill that sits between your query and the 19 product skills. When you say "research this prospect," the router identifies the task type (prospect research), loads the correct skill, checks for jurisdiction context, loads the ICP configuration, and dispatches. The router also handles skill collisions between base and extension plugins (covered later in this lesson). You do not interact with the router directly -- it activates automatically. Its presence is what transforms a collection of individual skills into a coordinated system.

---

## Setting Up sales-marketing.local.md

The extension ships with a template file. Copy it to your working directory and begin configuring:

```bash
cp .claude/skills/sales-revops-marketing/sales-marketing.local.md.template \
   sales-marketing.local.md
```

**Output:**

```
sales-marketing.local.md created (237 lines)
```

Open `sales-marketing.local.md` and configure the minimum viable settings. You do not need to fill in every field today -- the template is comprehensive, and you will refine it throughout this chapter. For now, configure three sections:

### 1. ICP Definition (Minimum Viable)

Fill in the firmographic criteria, at least three positive timing signals, and at least two negative-fit criteria. This is the targeting foundation that makes `/research` and `/score` specific to your business.

```markdown
## ICP Definition

### Firmographic Criteria -- POSITIVE FIT

Company size (employees): 50-500
Revenue range: PKR 500M-PKR 5B (USD 1.8M-USD 18M)
Geography: Pakistan, UAE, Saudi Arabia, Bahrain
Industries (ranked):

1. Logistics and supply chain
2. Manufacturing
3. Retail and distribution
   Technology maturity: Mid-tech (some cloud, some legacy)
```

### 2. At Least One Persona Profile

Define your primary buyer persona -- the role you sell to most often. Include motivation, fear, and buying trigger. These fields shape how `/outreach` and `/sequence` calibrate tone and messaging.

```markdown
### Primary Persona -- The VP of Operations

Typical title: VP Operations / Director of Logistics / COO
Seniority: Senior
Motivation: Scale throughput without proportional headcount growth
Fear: Operational failure during a growth phase
Buying trigger: Won a major new contract and needs to scale delivery
capacity within 90 days
Tone for outreach: Peer-level, operational, data-driven
Avoid in outreach: Feature lists, jargon, anything that sounds like marketing
```

### 3. Brand Voice Basics

Set the tone, language, and POV that all content and outreach should follow. These settings feed into `/content`, `/copy`, `/outreach`, and `/campaign`.

```markdown
## Brand Voice Configuration

Tone: Direct, confident, practical -- peer-level, not corporate
Language: Operational and specific; no marketing jargon
POV: We take positions; we do not hedge every statement
Data: Always support claims with data; label estimates as such
```

Save the file. Every subsequent plugin command will now reference this configuration. The `CONFIGURATION` line in the output header will change from `Not configured` to `Loaded: sales-marketing.local.md`.

---

## Worked Example: NexaFlow Karachi

NexaFlow is the 40-person SaaS company in Karachi you met in Lesson 1. They sell fleet management and route optimisation software to logistics operators across Pakistan and the GCC. Their sales lead, Tariq, is setting up the plugins for the first time.

**Step 1: Install both layers.**

```bash
# Base layer
claude plugin install sales@knowledge-work-plugins
claude plugin install marketing@knowledge-work-plugins

# Extension layer
claude plugin install sales-revops-marketing@agentfactory-business
```

**Output:**

```
Installed sales@knowledge-work-plugins (v1.2.0)
Installed marketing@knowledge-work-plugins (v1.2.0)
Installed sales-revops-marketing@agentfactory-business (v1.0.0)
  19 skills loaded, 4 commands registered, 4 jurisdiction overlays
```

**Step 2: Copy and configure the template.**

```bash
cp .claude/skills/sales-revops-marketing/sales-marketing.local.md.template \
   sales-marketing.local.md
```

Tariq fills in NexaFlow's ICP -- logistics operators with 100-2,000 employees across Pakistan and GCC, mid-tech maturity, hiring dispatchers or fleet managers (a signal of scaling pressure). He adds two personas: the VP of Operations (decision-maker) and the Head of IT (technical evaluator). He configures brand voice as "direct, operational, Urdu business English acceptable for Pakistan outreach, formal English for GCC."

**Step 3: Verify with a test query.**

```
Tariq: Research Ahmed Al-Rashid, Director of Cold Chain Operations at
       Gulf Fresh Distribution in Sharjah. We're targeting them for our
       GCC expansion.

Agent:
TASK:          Prospect Research -- Gulf Fresh Distribution
ICP MATCH:     STRONG (logistics, 800 employees, GCC, mid-tech)
CONFIGURATION: Loaded: sales-marketing.local.md (NexaFlow -- Karachi)
VERIFY DATA:   All prospect data should be verified before outreach
JURISDICTION:  GCC overlay loaded (UAE data protection applies)

-- PROSPECT PROFILE -----------------------------------------
Name:     Ahmed Al-Rashid
Title:    Director, Cold Chain Operations
Company:  Gulf Fresh Distribution (Sharjah, UAE)
...
```

The structured header now shows `ICP MATCH: STRONG` because Gulf Fresh matches NexaFlow's firmographic criteria. `CONFIGURATION: Loaded` confirms the local file is active. `JURISDICTION: GCC` confirms the extension's jurisdiction overlay is routing correctly. The base plugin handles the research; the extension adds the ICP scoring, jurisdiction awareness, and NexaFlow-specific context.

---

## Skill Collisions: When Base and Extension Overlap

Two skills exist in both the Anthropic base plugins and the Agent Factory extension: **campaign-planning** and **content-creation**. The base marketing plugin includes these as general-purpose skills. The extension includes them as enhanced versions with ICP calibration, persona targeting, jurisdiction compliance, and brand voice enforcement.

When both plugins are loaded, the global router must decide which version to invoke. Three resolution patterns exist:

### Pattern 1: Wrapper (Default)

The extension skill wraps the base skill, adding layers of specificity before and after execution. When you run `/campaign`, the router loads the extension's `campaign-planning` skill, which internally calls the base campaign-planning skill for the core logic, then applies ICP targeting, budget localisation, persona calibration, and jurisdiction-specific channel recommendations on top. The base skill does the structural work; the extension adds the organisational intelligence.

This is the default pattern and covers the vast majority of cases. You do not need to configure it -- the router applies it automatically.

### Pattern 2: Override

The extension skill replaces the base skill entirely. This happens when the base skill's approach is fundamentally incompatible with the extension's requirements. For example, if the base `content-creation` skill produces content without checking brand voice configuration, and brand voice enforcement is a hard requirement for your organisation, the extension can override rather than wrap.

Override is configured in the router's skill manifest. For the standard Sales and Marketing plugins, no overrides are active by default -- wrapper is sufficient.

### Pattern 3: Delegation

The router decides which skill to invoke based on the query context. A simple request ("write a LinkedIn post about our product") routes to the base skill. A complex request with ICP and persona context ("write a LinkedIn post targeting VP of Operations personas in the logistics sector, calibrated to our brand voice, compliant with GCC data protection") routes to the extension. Delegation is useful when you want the base skill's speed for simple tasks and the extension's depth for complex ones.

> **Concept Box: Skill Collision Resolution**
>
> A skill collision occurs when two loaded plugins register skills with the same name or overlapping trigger patterns. The global router resolves collisions using one of three patterns: **wrapper** (extension enhances base), **override** (extension replaces base), or **delegation** (router chooses based on query complexity). In the Sales and Marketing plugins, campaign-planning and content-creation are the two collision points, and both resolve via the wrapper pattern by default. This means the base skill always executes -- the extension just adds ICP, persona, jurisdiction, and brand voice layers around it.

### How to Identify Collisions

If you want to see which skills are loaded and whether any collisions exist, you can ask the agent directly:

```
You: List all loaded sales and marketing skills and flag any
     that exist in both the base plugin and the extension.

Agent:
SKILLS LOADED: 25 total (11 base + 19 extension - 5 overlapping)

Collisions (resolved via wrapper):
  campaign-planning:   base (marketing) + extension (sales-revops-marketing)
  content-creation:    base (marketing) + extension (sales-revops-marketing)
  ...
```

**Output:**

The agent lists all skills, groups them by source, and flags the collisions with their resolution pattern. If you see `wrapper` next to each collision, the system is working as designed.

---

## Try With AI

### Prompt 1: Install and Verify

```
I want to install the Claude Sales and Marketing Plugins and verify
they are working correctly. Walk me through the installation of:

1. The base Sales Plugin (knowledge-work-plugins/sales)
2. The base Marketing Plugin (knowledge-work-plugins/marketing)
3. The Agent Factory extension (sales-revops-marketing@agentfactory-business)

After installation, verify by running a test query: "Research a prospect
named Sarah Chen, Head of Revenue Operations at DataBridge Analytics in
Singapore." Show me the structured output header and explain what each
field means.

If any field shows "Not configured" or "UNVERIFIED," explain what I
need to do to fix it.
```

**What you are learning:** This prompt walks you through the full installation and verification workflow. The structured output header is your diagnostic tool -- it tells you exactly what is loaded, what is configured, and what is missing. Learning to read these headers is the operational skill that prevents you from running commands against an incomplete setup. Every field in the header corresponds to a configuration decision you have made (or have not made yet).

### Prompt 2: Compare Standalone vs Supercharged Output

```
I want to see the difference between the base Sales Plugin alone and
the base plus the Agent Factory extension.

Run this query twice:
"Score this lead: Meridian Logistics, 800 employees, UK-based 3PL,
 contact is Jane Smith, VP Operations, recently won a major contract
 with a national retailer."

First, show me the output as if only the base plugin were loaded
(generic scoring, no ICP, no three-dimension model).

Then show me the output as if the full extension were loaded with an
ICP configured for a logistics software company targeting mid-size
3PLs in the UK.

Highlight every difference between the two outputs and explain which
differences come from the ICP configuration, which from the three-
dimension scoring model, and which from the jurisdiction overlay.
```

**What you are learning:** This prompt makes the value of the extension tangible by putting the two outputs side by side. A generic score might say "this looks like a good lead." A configured score says "fit: 38/40, timing: 35/40, engagement: 12/20 -- total 85/100 -- HOT: route to sales immediately." The specificity gap between these outputs is exactly the gap between a tool and a competitive advantage. Understanding what creates that gap -- ICP configuration, scoring dimensions, jurisdiction awareness -- teaches you why configuration time is not overhead but investment.

### Prompt 3: Map Skills to Your Business

```
I have installed both the base Sales and Marketing Plugins and the
Agent Factory extension. I now have 25 skills loaded.

Here is my business context:
- Company: [your company name]
- Product: [what you sell]
- Market: [primary geography and sector]
- Team size: [number of sales reps + marketers]
- Current tools: [CRM, email platform, other tools]
- Biggest pain: [your top sales/marketing challenge]

Given this context:
1. Which 5 skills should I configure and deploy first? Rank them
   by impact on my biggest pain.
2. For each skill, what section of sales-marketing.local.md does it
   depend on most? (ICP? Persona? Brand voice? Competitive intel?)
3. Which skills can I skip entirely because they do not apply to my
   business model?
4. Are there any skill collisions I should resolve differently from
   the default wrapper pattern?

Present this as a deployment roadmap with a clear priority order.
```

**What you are learning:** This prompt teaches you to think about plugin deployment as a strategic decision, not a technical checkbox. Not every skill matters equally to every business. A company with a strong brand voice but weak prospecting should prioritise research and scoring skills. A company with excellent research but generic outreach should prioritise the outreach and Five Laws skills. The skill you deploy first should be the one that addresses your biggest constraint -- and identifying that constraint is itself a diagnostic skill you are practising here.

---

Continue to [Lesson 3: Prospect Research and ICP ->](./03-prospect-research-and-icp.md)
