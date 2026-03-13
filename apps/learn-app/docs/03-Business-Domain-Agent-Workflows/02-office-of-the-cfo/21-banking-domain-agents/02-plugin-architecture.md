---
slug: /Business-Domain-Agent-Workflows/banking-domain-agents/plugin-architecture
sidebar_position: 2
title: "The Banking Plugin Architecture — 17 Skills, Three Pillars"
description: "Walk through the banking plugin's 17-skill architecture — 1 router + 16 product skills spanning IFRS 9, Basel, AML, and reconciliation — and trace a query through the pillar-aware routing system"
keywords:
  [
    "banking plugin",
    "banking router",
    "IFRS 9 skills",
    "Basel skills",
    "AML skills",
    "pillar-aware routing",
    "banking AI architecture",
    "skill chaining",
    "bank-ecl command",
    "bank-capital command",
    "bank-recon command",
    "bank-aml command",
  ]
chapter: 21
lesson: 2
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Trace a Query Through the Pillar-Aware Routing Architecture"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can take a sample banking query and trace the routing through the architecture — identifying which pillar the router selects, which product skills load, and how cross-pillar queries chain multiple skills"

  - name: "Explain the Banking Plugin's Separation of Concerns"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Literacy"
    measurable_at_this_level: "Student can explain why the architecture separates routing from calculation, why skills are organised by pillar, and how the four commands map to the three pillars"

learning_objectives:
  - objective: "Install the banking plugin and verify activation by routing a sample query"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student installs the plugin, issues a banking query, and confirms the router identifies the correct pillar and skill"

  - objective: "Trace a query through the pillar-aware routing architecture, identifying which skills load and why"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a cross-pillar banking query, student can name the router decision, the product skills loaded, and explain what would go wrong if a skill were missing"

  - objective: "Explain the separation of concerns between the router, pillar skills, and cross-pillar orchestration"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can articulate why calculation logic lives in product skills while routing logic lives in the router, and can explain how this separation enables adding new skills without modifying existing ones"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "The 17-skill architecture (1 router + 16 product skills)"
    - "Pillar-aware routing (router detects IFRS 9, Basel, AML, or cross-pillar)"
    - "Skill chaining for cross-pillar queries"
    - "The 4 domain commands (/bank-ecl, /bank-capital, /bank-recon, /bank-aml)"
    - "SessionStart hook (pillar detection) and PostToolUse hook (regulatory label validation)"
    - "The banking skill library file structure"
  assessment: "6 concepts at B1 level — within the 7-10 cognitive limit for this tier. The lesson is a walkthrough of the plugin's architecture using concrete file listings and query traces, keeping cognitive load manageable through concrete examples rather than abstract theory."

differentiation:
  extension_for_advanced: "Compare the banking plugin's pillar-aware routing with Chapter 20's jurisdiction-aware routing. Both use a router to select specialised skills, but they route on different dimensions (pillar vs jurisdiction). Could a banking plugin also need jurisdiction-aware routing? Under what circumstances?"
  remedial_for_struggling: "Focus on two things: the skill library table (which skills exist) and the query trace (how a query flows through the router to the right skill). If you can look at a banking question and predict which skill(s) the router will load, you understand the architecture."
---

# The Banking Plugin Architecture — 17 Skills, Three Pillars

In Lesson 1, you learned that every bank is simultaneously governed by three regulatory pillars — Accounting (IFRS 9), Solvency (Basel), and Financial Crime (AML). Now you will examine the plugin architecture that translates those three pillars into agent capabilities. The banking plugin contains 17 skills — 1 router and 16 product skills — organised by pillar, with four domain commands that provide direct entry points.

## Installing the Banking Plugin

The banking plugin installs the same way as the Islamic finance plugin from Chapter 20.

**Claude Code CLI:**

```bash
claude plugin install banking@agentfactory-business
```

**Verify installation:** Start a new session and say "I need to calculate the ECL for a corporate loan portfolio." The agent should reference IFRS 9 staging and ask for PD, LGD, and EAD inputs. If it treats this as a general question rather than routing to the `ifrs9-ecl` skill, the plugin is not active.

## The 17-Skill Library

The banking plugin contains 1 router and 16 product skills spanning all three regulatory pillars plus a reconciliation domain. The router auto-activates whenever it detects banking terminology in a query — terms like "ECL," "CET1," "RWA," "SAR," "KYC," "LCR," or "NSFR."

| Pillar             | Skill Name            | What It Calculates                                         |
| ------------------ | --------------------- | ---------------------------------------------------------- |
| **IFRS 9**         | `ifrs9-ecl`           | Expected Credit Loss calculation (12-month and lifetime)   |
|                    | `ifrs9-staging`       | Stage 1/2/3 classification and SICR assessment             |
|                    | `ifrs9-scenarios`     | Macroeconomic scenario design and probability-weighted ECL |
|                    | `ifrs9-disclosure`    | IFRS 9 disclosure note drafting and reconciliation tables  |
| **Basel**          | `basel-capital`       | CET1, AT1, Tier 2 capital classification and deductions    |
|                    | `basel-rwa-credit`    | Credit risk RWA under Standardised and IRB approaches      |
|                    | `basel-rwa-market`    | Market risk RWA calculation                                |
|                    | `liquidity-lcr`       | Liquidity Coverage Ratio (HQLA / net cash outflows)        |
|                    | `liquidity-nsfr`      | Net Stable Funding Ratio                                   |
|                    | `stress-testing`      | Stress test scenario design and capital impact             |
| **AML**            | `aml-typologies`      | Money laundering pattern identification and red flags      |
|                    | `aml-sar-drafting`    | Suspicious Activity Report narrative generation            |
|                    | `aml-cdd-edd`         | Customer Due Diligence and Enhanced Due Diligence          |
|                    | `sanctions-screening` | Sanctions list screening and match analysis                |
|                    | `kyc-risk-rating`     | Customer risk rating and periodic review                   |
| **Reconciliation** | `bank-reconciliation` | Nostro/vostro, suspense, GL-to-sub-ledger reconciliation   |

The **router** (`banking-global-router`) sits above all 16 product skills. It reads the query, determines which pillar or pillars are involved, and loads the appropriate skills before any calculation begins.

## The Four Domain Commands

The plugin provides four shortcut commands that bypass the router and go directly to the most common workflows:

| Command         | Pillar         | What It Does                                                                          |
| --------------- | -------------- | ------------------------------------------------------------------------------------- |
| `/bank-ecl`     | IFRS 9         | Runs the full ECL workflow: staging, PD/LGD/EAD, scenario weighting, disclosure       |
| `/bank-capital` | Basel          | Runs the capital stack: CET1 classification, deductions, RWA, capital ratios          |
| `/bank-recon`   | Reconciliation | Runs reconciliation: nostro, suspense clearing, GL matching, provision reconciliation |
| `/bank-aml`     | AML            | Runs AML workflow: typology screening, CDD/EDD, risk rating, SAR drafting if needed   |

These commands are convenience shortcuts. The router handles the same queries automatically — the commands simply guarantee the correct skill chain loads without requiring the router to parse the query.

## How the Router Works

The banking router operates differently from the Islamic finance router in Chapter 20. Where the Islamic finance router routes by **jurisdiction** (Bahrain vs Malaysia vs UK), the banking router routes by **pillar** (IFRS 9 vs Basel vs AML). The routing protocol has three steps.

**Step 1 — Detect the pillar.** The router reads the query for pillar signals:

| Signal Terms                                                           | Maps to Pillar |
| ---------------------------------------------------------------------- | -------------- |
| ECL, provision, staging, SICR, PD, LGD, EAD, impairment                | IFRS 9         |
| CET1, capital ratio, RWA, leverage ratio, LCR, NSFR, buffer            | Basel          |
| SAR, suspicious, KYC, CDD, EDD, sanctions, PEP, transaction monitoring | AML            |
| Nostro, vostro, suspense, reconciliation, GL matching                  | Reconciliation |

If the query contains signals from multiple pillars, the router identifies it as a **cross-pillar query** and chains the relevant skills.

**Step 2 — Load the skill chain.** Based on the pillar detection, the router loads one or more product skills. A single-pillar query loads one skill. A cross-pillar query loads multiple skills in dependency order — for example, an IFRS 9 provision increase that affects Basel capital loads `ifrs9-ecl` first (to calculate the provision), then `basel-capital` (to recalculate the CET1 ratio with the reduced retained earnings).

**Step 3 — Apply hooks.** Two hooks run on every query:

- **SessionStart hook** — Confirms the pillar context and asks clarifying questions if the pillar cannot be determined. Like the Islamic finance router, it never defaults. If the query says "calculate the provision" without specifying IFRS 9 or US CECL, the router asks.
- **PostToolUse hook** — Validates that the output uses correct regulatory terminology. An IFRS 9 output must reference "Expected Credit Loss," not "Allowance for Loan Losses" (the US term). A Basel output must reference "CET1" and "RWA," not informal terms.

## Tracing a Query: Single-Pillar

To see the architecture in action, trace a single-pillar query through the router.

**Query:** "A UK bank's residential mortgage portfolio has 12,000 accounts. 300 accounts have had rating downgrades exceeding 2 notches since origination. Classify these accounts into IFRS 9 stages."

**Step 1 — Pillar detection:** The router detects "IFRS 9 stages," "rating downgrades," and "origination" — all IFRS 9 signals. Single-pillar query.

**Step 2 — Skill loaded:** The router loads `ifrs9-staging`. This skill contains the SICR criteria (quantitative triggers like 2-notch downgrades, qualitative triggers like watchlist status, backstop triggers like 30+ days past due) and the stage classification rules.

**Step 3 — Output:** The skill classifies the 300 downgraded accounts as Stage 2 (significant increase in credit risk, not yet defaulted) and the remaining 11,700 as Stage 1 (no SICR since origination). The output includes the SICR rationale and the measurement implication: Stage 2 accounts now require lifetime ECL instead of 12-month ECL.

## Tracing a Query: Cross-Pillar

Now trace a cross-pillar query — the more complex routing scenario.

**Query:** "A regulator asks: what is the CET1 capital impact of your Q4 IFRS 9 provision increase of $200 million?"

**Step 1 — Pillar detection:** The router detects "CET1 capital" (Basel signal) and "IFRS 9 provision" (IFRS 9 signal). This is a cross-pillar query spanning two pillars.

**Step 2 — Skill chain loaded:** The router loads two skills in order:

1. `ifrs9-ecl` — to understand the provision increase and its components
2. `basel-capital` — to recalculate the CET1 ratio with the reduced retained earnings

**Step 3 — Chained output:** The IFRS 9 skill confirms the $200 million provision increase reduces pre-tax profit by $200 million. After tax at (for example) 25%, retained earnings fall by $150 million. The Basel skill then recalculates: CET1 capital decreases by $150 million, and the CET1 ratio falls by $150M / total RWA. The output quantifies both the accounting impact and the capital impact in a single response.

This chaining is what single-pillar agents cannot do. An IFRS 9-only agent would calculate the provision but stop there. A Basel-only agent would need the provision number as input — it could not calculate it independently. The router chains them so the output flows from one skill to the next.

## The Plugin File Structure

The banking plugin follows the same directory structure as the Islamic finance plugin from Chapter 20:

```
.claude/skills/
├── banking-global-router/
│   └── SKILL.md              # Router: pillar detection, skill chaining
├── ifrs9-ecl/
│   └── SKILL.md              # ECL calculation engine
├── ifrs9-staging/
│   └── SKILL.md              # Stage classification and SICR
├── ifrs9-scenarios/
│   └── SKILL.md              # Macro scenario design
├── ifrs9-disclosure/
│   └── SKILL.md              # Disclosure note drafting
├── basel-capital/
│   └── SKILL.md              # Capital stack and ratios
├── basel-rwa-credit/
│   └── SKILL.md              # Credit risk RWA
├── basel-rwa-market/
│   └── SKILL.md              # Market risk RWA
├── liquidity-lcr/
│   └── SKILL.md              # LCR calculation
├── liquidity-nsfr/
│   └── SKILL.md              # NSFR calculation
├── stress-testing/
│   └── SKILL.md              # Stress test scenarios
├── aml-typologies/
│   └── SKILL.md              # ML pattern identification
├── aml-sar-drafting/
│   └── SKILL.md              # SAR narrative generation
├── aml-cdd-edd/
│   └── SKILL.md              # CDD/EDD procedures
├── sanctions-screening/
│   └── SKILL.md              # Sanctions list matching
├── kyc-risk-rating/
│   └── SKILL.md              # Customer risk rating
└── bank-reconciliation/
    └── SKILL.md              # Reconciliation procedures
```

Each SKILL.md file follows the standard format from Chapter 15 — YAML frontmatter with `name` and `description`, followed by the skill's calculation rules, decision logic, and output templates. The key difference from Chapter 20 is the routing dimension: instead of routing by jurisdiction, the banking router routes by pillar.

## Worked Example: Monthly IFRS 9 ECL Workflow

To see how multiple skills chain in a real workflow, consider the monthly ECL calculation that every IFRS 9 bank performs:

| Step | Action                              | Skill Used         | Output                                    |
| ---- | ----------------------------------- | ------------------ | ----------------------------------------- |
| 1    | Classify all exposures into stages  | `ifrs9-staging`    | Stage 1/2/3 assignment for each facility  |
| 2    | Calculate PD, LGD, EAD per facility | `ifrs9-ecl`        | Component-level ECL inputs                |
| 3    | Apply macroeconomic scenarios       | `ifrs9-scenarios`  | Probability-weighted ECL per scenario     |
| 4    | Calculate final ECL                 | `ifrs9-ecl`        | Portfolio-level ECL provision             |
| 5    | Draft disclosure notes              | `ifrs9-disclosure` | Stage migration table, ECL reconciliation |
| 6    | Assess capital impact               | `basel-capital`    | Updated CET1 ratio after provision        |

The `/bank-ecl` command runs steps 1-5 automatically. Step 6 requires the `/bank-capital` command or a cross-pillar query that the router chains.

:::tip Connection to Chapter 20
The banking plugin's pillar-aware routing and the Islamic finance plugin's jurisdiction-aware routing are two instances of the same architectural pattern: a router that detects context, loads specialised skills, and chains outputs. If you mastered the three-layer architecture in Chapter 20, the banking plugin's architecture is the same pattern applied to a different routing dimension.
:::

## Try With AI

**Setup:** Use these prompts in Cowork or your preferred AI assistant.

### Prompt 1: Reproduce

```
I have the banking plugin installed. Here is my query:

"Calculate the ECL for a UK mortgage portfolio with 5,000
accounts. Average PD is 1.5%, average LGD is 18%, and
average EAD is GBP 200,000. All accounts are Stage 1."

Walk me through:
1. Which pillar does the router detect?
2. Which skill(s) does it load?
3. What calculation does the skill perform?
4. What is the portfolio-level 12-month ECL?

Show the arithmetic step by step.
```

**What you are learning:** Single-pillar routing is the simplest case — one pillar, one skill, one calculation. By tracing the routing yourself, you verify that you understand both the architecture and the underlying calculation. This prepares you for Lesson 3, where you build the ECL formula in depth.

### Prompt 2: Adapt

```
A regulator sends a bank this question:

"Your IFRS 9 Stage 2 provisions increased by $150 million
this quarter. What is the impact on your CET1 ratio,
assuming a 25% tax rate and total RWA of $80 billion?"

Walk me through the routing:
1. Which pillars are involved?
2. Which skills does the router chain, and in what order?
3. What does each skill contribute to the answer?
4. Calculate the CET1 ratio impact.

Then explain: why can't a single-pillar agent answer
this question?
```

**What you are learning:** Cross-pillar routing is the banking plugin's distinctive capability. By tracing a cross-pillar query, you see why the router chains skills rather than loading them independently — and why the output from one skill becomes the input to the next.

### Prompt 3: Apply

```
List all 16 product skills in the banking plugin, grouped
by pillar. For each skill, give me:
1. The skill name
2. One sentence describing what it calculates
3. Which command (/bank-ecl, /bank-capital, /bank-recon,
   or /bank-aml) includes it in its chain

Then answer: which skills would be chained if I asked
"A borrower has defaulted — what is the provision impact,
the capital impact, and do we need to file a SAR?"
```

**What you are learning:** The skill inventory is your reference map for the rest of this chapter. By cataloguing all 16 skills and their pillar assignments, you build the mental model that the router uses — and you can predict which skills any banking query will activate.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 3: IFRS 9 ECL — Staging and the ECL Formula →](./03-ifrs9-staging-ecl.md)
