---
slug: /Business-Domain-Agent-Workflows/islamic-finance-domain-agents/full-skill-library-capstone
sidebar_position: 17
title: "Full Islamic Finance Agent — SKILL.md Library Build"
description: "Deploy the complete 25-file Islamic finance SKILL.md library — 12 product skills and 13 jurisdiction overlays — with the global routing skill, scheduled tasks, a multi-jurisdiction test suite, and the agent capability statement that draws the line between agent execution and SSB judgment"
keywords:
  [
    "Islamic finance SKILL.md",
    "skill library build",
    "global routing skill",
    "AAOIFI IFRS agent",
    "jurisdiction overlay",
    "knowledge extraction method",
    "multi-jurisdiction test suite",
    "Islamic finance agent",
    "scheduled finance tasks",
    "agent capability statement",
    "SSB judgment boundary",
    "Shariah compliance agent",
    "Islamic banking automation",
    "agent capstone",
  ]
chapter: 20
lesson: 17
duration_minutes: 90

# HIDDEN SKILLS METADATA
skills:
  - name: "Deploy Complete Multi-Jurisdiction Skill Library"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can audit, verify, and deploy a 25-file SKILL.md library (12 products + 13 jurisdictions) with a global routing skill, confirming that each file is structurally complete, the routing logic correctly maps jurisdictions to overlays, and the library handles the three accounting regimes"

  - name: "Execute Knowledge Extraction Methods A and B"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can apply Method A (interview-based knowledge extraction) to produce a product SKILL.md from their own professional knowledge, and Method B (document analysis) to produce a jurisdiction overlay SKILL.md from a regulatory source document — then verify both against the routing logic"

  - name: "Design Multi-Jurisdiction Test Suite"
    proficiency_level: "C1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can design and execute a 13-query test suite that validates the routing logic across all jurisdictions, verifying that each query loads the correct overlay, applies the correct labels, and produces output consistent with the jurisdiction's governing framework"

learning_objectives:
  - objective: "Audit and deploy a complete 25-file SKILL.md library with the global routing skill, verifying structural completeness and routing correctness"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student completes Exercise 14 Steps 1-2 — auditing the full library, building/verifying the routing skill, and confirming the four-question routing protocol"

  - objective: "Apply Knowledge Extraction Methods A (interview) and B (document analysis) to produce and verify SKILL.md files for Islamic finance products and jurisdictions"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student completes Exercise 14 Steps 3-4 — producing a murabaha product skill via Method A and jurisdiction overlays via Method B, then validating against the routing logic"

  - objective: "Design and execute a multi-jurisdiction test suite that validates the complete routing and overlay system across all 13 jurisdictions"
    proficiency_level: "C1"
    bloom_level: "Evaluate"
    assessment_method: "Student completes Exercise 14 Step 6 — running 13 test queries and verifying correct framework, labels, and disclosures in each output"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Skill library audit (structural completeness check across 25 files)"
    - "Global routing skill architecture (jurisdiction to product to overlay dispatch)"
    - "Method A knowledge extraction (interview-based SKILL.md creation)"
    - "Method B document analysis (regulatory source to SKILL.md conversion)"
    - "Scheduled task deployment (daily, monthly, quarterly, annual Islamic finance cycles)"
    - "Multi-jurisdiction test suite design (13 queries validating routing logic)"
    - "Agent capability statement (defining the execution-vs-judgment boundary)"
  assessment: "7 concepts at B2-C1 level — this is the agent-building capstone and intentionally integrates all prior learning. Students arrive having completed 14 product and jurisdiction exercises plus the consolidation and fintech lessons. The cognitive load is manageable because each concept builds on a specific prior lesson rather than introducing entirely new material."

differentiation:
  extension_for_advanced: "Add a 14th jurisdiction overlay — Jordan, Iran, or Sudan — to the library. Research the regulatory framework, determine the AAOIFI/IFRS/local standard regime, and produce the overlay SKILL.md using Method B. Add a 14th test query to the test suite and verify routing."
  remedial_for_struggling: "Focus on Steps 1-2 (audit and routing) and Step 6 (test suite). If you can confirm the library structure, explain the routing logic, and run three test queries (one AAOIFI, one IFRS, one MFRS jurisdiction) that produce correct output, you have demonstrated the core capability."

teaching_guide:
  lesson_type: "agent-capstone"
  session_group: 5
  session_title: "Agent-Building Capstone"
  key_points:
    - "This capstone integrates every lesson in the chapter — the products, jurisdictions, consolidation patterns, and fintech reasoning all feed into the deployed library"
    - "The five chapter insights in the closing section are the conceptual takeaways that should persist after the technical details fade"
    - "The agent capability statement in Step 7 is the single most important deliverable — it defines what the agent does and what it does not do, and that boundary is the professional's value proposition"
    - "The test suite validates the system — without it, deployment is speculative"
  misconceptions:
    - "Students may treat the capstone as a mechanical file-copying exercise — the audit in Step 1 requires evaluating structural completeness, not just confirming file existence"
    - "Students may skip the test suite (Step 6) — this is the validation that distinguishes a deployed system from a collection of files"
    - "Students may write the capability statement (Step 7) as marketing copy rather than a precise boundary definition — the final paragraph about SSB judgment must be technically accurate"
---

# Full Islamic Finance Agent — SKILL.md Library Build

In Lesson 16, you applied established accounting frameworks to fintech structures that the standards did not anticipate. Now you step back and look at the complete system. Over the preceding sixteen lessons, you have worked through every major Islamic finance product, explored jurisdiction-specific variations across thirteen countries, navigated cross-border consolidation, and reasoned through emerging fintech structures. This final lesson deploys the complete infrastructure.

This is the agent-building capstone. You will audit the full 25-file SKILL.md library, build and verify the global routing skill, apply both Knowledge Extraction methods, deploy the scheduled task architecture, validate the system with a multi-jurisdiction test suite, and produce the agent capability statement that defines the boundary between what the agent executes and what the Shariah Supervisory Board judges.

---

## The Complete Library Architecture

The Islamic finance SKILL.md library has three layers:

```
Layer 1: Global Router
  islamic-finance-global-router.md
    ↓ Routes to appropriate product + jurisdiction

Layer 2: Product Skills (12 files)
  products/
    murabaha.md          ijarah-imb.md         musharaka-dm.md
    mudaraba.md          musharaka-full.md      sukuk-issuer.md
    sukuk-investor.md    salam.md              istisna-a.md
    takaful-ifrs17.md    zakat-global.md       shariah-screening-global.md

Layer 3: Jurisdiction Overlays (13 files)
  jurisdictions/
    bahrain-aaoifi.md    qatar-aaoifi.md       malaysia-mfrs.md
    indonesia-psak.md    saudi-ifrs.md         uae-ifrs.md
    kuwait-ifrs.md       oman-ifrs.md          pakistan-ifrs.md
    uk-ifrs.md           nigeria-ifrs.md       turkey-tfrs.md
    gcc-crossborder.md
```

The routing logic follows a strict protocol: (1) identify jurisdiction, (2) identify product, (3) load product skill, (4) load jurisdiction overlay, (5) apply product rules first, then overlay modifications. If jurisdiction is not specified, the agent must ask before proceeding.

---

:::info Capstone Requirements

**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)
**Full materials:** Download [`islamic-finance-full.zip`](https://github.com/panaversity/agentfactory-business-plugins/releases/latest) for everything in one package.
:::

## Exercise 14: Full SKILL.md Library Build (90 min)

### Step 1 — Audit the Full Skills Library

Verify the complete 25-file library exists and is structurally complete. For each file, confirm:

```
Audit the Islamic finance SKILL.md library. For each of the 25
files (12 products + 13 jurisdictions), verify:

(1) The file exists and is non-empty
(2) It specifies the governing standard (AAOIFI FAS number or
    IFRS standard)
(3) It includes the key accounting instructions (recognition,
    measurement, presentation, disclosure)
(4) It includes the "NEVER" rules — what the agent must never do
    in this context (e.g., "NEVER use interest income" for any
    product, "NEVER use Loans and Advances" for AAOIFI jurisdictions)
(5) It includes the SSB escalation triggers — what questions must
    be escalated to the Shariah Supervisory Board

Report any gaps or incomplete files.
```

### Step 2 — Build/Verify the Global Routing Master SKILL.md

The routing skill is the control layer that ensures the correct product and jurisdiction files are loaded:

```yaml
---
name: islamic-finance-global-router
description: >
  Activate whenever any Islamic finance term appears in a query:
  murabaha, ijarah, musharaka, mudaraba, sukuk, takaful, zakat,
  AAOIFI, FAS, Shariah-compliant, Islamic banking, non-interest
  banking, halal finance, riba, gharar.
  Before any output: identify jurisdiction and product, then load
  appropriate product SKILL.md and jurisdiction overlay SKILL.md.
---

## Routing Rules
Step 1: Identify jurisdiction from query context.
  - If no jurisdiction specified: ask the user before proceeding.
  - NEVER assume IFRS without confirming jurisdiction.
  - AAOIFI jurisdictions (mandatory): Bahrain, Qatar, Sudan.
  - MFRS jurisdictions: Malaysia.
  - IFRS jurisdictions: UAE, Saudi Arabia, Kuwait, Oman, UK,
    Nigeria, Kenya, South Africa, Turkey.

Step 2: Identify product from query context.
  - Load the corresponding product SKILL.md.

Step 3: Load the jurisdiction overlay SKILL.md.

Step 4: Apply product rules first, then jurisdiction overlay.

Step 5: Before generating any journal entry or financial statement:
  - Confirm the governing standard in the response header.
  - Label income consistently with jurisdiction requirements.
  - NEVER use "interest income" in any Islamic finance context.
  - NEVER use "loans and advances" in AAOIFI regime outputs.
```

Verify the routing logic handles edge cases: what happens when a query mentions two jurisdictions (consolidation)? When a product is not in the library (new fintech structure)? When the jurisdiction uses a local standard not in the library (Iran, Bangladesh)?

### Step 3 — Method A Knowledge Extraction for Murabaha (AAOIFI Regime)

Method A is interview-based knowledge extraction — converting your own professional knowledge into SKILL.md instructions.

Interview yourself with these three questions:

1. **What are the three most common AAOIFI FAS 2 errors in a Bahraini IFI's books?** (This captures the "what to watch for" instructions.)
2. **What Shariah compliance conditions, if breached, would invalidate the murabaha accounting treatment?** (This captures the SSB escalation triggers.)
3. **What do you always check when reviewing a murabaha receivable aging report?** (This captures the audit procedure instructions.)

Convert your answers to SKILL.md instruction format. Ask your AI assistant to review for gaps. Save the result.

### Step 4 — Method B Document Analysis for Jurisdiction Overlays

Method B converts regulatory source documents into SKILL.md instructions. For each jurisdiction overlay, provide the relevant regulatory source and extract the key rules:

```
I am building a jurisdiction overlay SKILL.md for [JURISDICTION].
Here are the key regulatory requirements from [SOURCE DOCUMENT]:

[PASTE KEY REQUIREMENTS]

Extract the following into SKILL.md instruction format:
(1) Primary accounting framework and governing body
(2) AAOIFI role (mandatory / supplemental / voluntary)
(3) Key accounting treatment differences from default IFRS
(4) Required Shariah disclosures
(5) Regulatory-specific requirements (capital adequacy, reporting
    frequencies, unique local rules)
(6) NEVER rules — what must never appear in this jurisdiction's
    output
(7) SSB escalation triggers specific to this jurisdiction
```

### Step 5 — Deploy All Scheduled Islamic Finance Tasks

Configure the full scheduled task architecture:

| Frequency     | Task                        | What It Does                                                                              |
| ------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| **Daily**     | Murabaha profit recognition | Calculates and records daily profit accrual on all active murabaha facilities             |
| **Daily**     | Ijarah rental recognition   | Records daily rental income on operating ijarah portfolio                                 |
| **Daily**     | Sukuk income accrual        | Accrues daily income on sukuk investment portfolio                                        |
| **Monthly**   | Profit pool distribution    | Calculates IAH profit-sharing pool and distributes to mudaraba account holders            |
| **Monthly**   | Zakat monitoring            | Tracks minimum balance positions against zakat nisab thresholds                           |
| **Monthly**   | Shariah income check        | Calculates non-Shariah-compliant income as percentage of total — flags if above threshold |
| **Quarterly** | Shariah portfolio screen    | Re-screens investment portfolio against adopted Shariah methodology                       |
| **Quarterly** | SSB quarterly report        | Produces quarterly Shariah compliance report for SSB review                               |
| **Annual**    | AAOIFI-IFRS reconciliation  | For groups with both AAOIFI and IFRS entities — produces full reconciliation              |

### Step 6 — Multi-Jurisdiction Test Suite

Run 13 test queries — one per jurisdiction — confirming the routing logic correctly loads the right overlay for each. Each query should be a simple murabaha income recognition question, and you verify three things in the output:

| #   | Test Query Jurisdiction | Verify Framework    | Verify Income Label                         | Verify Key Disclosure           |
| --- | ----------------------- | ------------------- | ------------------------------------------- | ------------------------------- |
| 1   | Bahrain                 | AAOIFI FAS 2        | "Murabaha Income"                           | AAOIFI FAS 2 disclosure notes   |
| 2   | Qatar                   | AAOIFI FAS 2        | "Murabaha Income"                           | QCB regulatory note             |
| 3   | Malaysia                | MFRS 9              | "Profit from Islamic Financing"             | MASB Islamic guidance reference |
| 4   | Indonesia               | PSAK                | "Pendapatan Murabahah" or local equivalent  | OJK regulatory note             |
| 5   | Saudi Arabia            | IFRS as adopted KSA | "Murabaha Income" (convention)              | ZATCA zakat reference           |
| 6   | UAE                     | IFRS                | "Financing Income"                          | CBUAE regulatory note           |
| 7   | Kuwait                  | IFRS                | "Financing Income"                          | CBK framework reference         |
| 8   | Oman                    | IFRS                | "Financing Income"                          | AAOIFI Shariah compliance note  |
| 9   | Pakistan                | IFRS + SBP          | "Income from Islamic Financing"             | SBP SGF reference               |
| 10  | UK                      | IFRS                | "Profit from Home Finance"                  | HMRC tax equivalence note       |
| 11  | Nigeria                 | IFRS                | "Non-Interest Income"                       | CBN NIBF reference              |
| 12  | Turkey                  | TFRS                | "Katilim Hesabi Geliri" or local equivalent | BDDK participation banking note |
| 13  | GCC Cross-Border        | IFRS consolidated   | Uniform group labelling                     | Dual-framework policy note      |

A test failure in any jurisdiction means the routing logic or the overlay file has a gap that must be fixed before deployment.

### Step 7 — Document the Agent Capability Statement

Produce a one-page capability statement suitable for client engagements. The statement should cover:

- The products and jurisdictions the agent handles
- The routing architecture that ensures correct framework application
- The scheduled tasks that automate recurring accounting workflows
- The quality controls (test suite, SSB escalation triggers, NEVER rules)

The final paragraph must define the boundary:

> _"This agent automates the mechanical accounting, schedule generation, disclosure drafting, and regulatory reporting workflows across 13 Islamic finance jurisdictions. It does not make Shariah compliance judgments. The question of whether a specific transaction structure is Shariah-permissible, whether a borderline equity screening case passes or fails the fund's adopted methodology, or whether a new product innovation complies with the relevant fatwa — these are judgments for qualified Shariah scholars on the institution's Shariah Supervisory Board. The agent's role is to execute, flag, escalate, and document. The SSB's role is to judge."_

---

## Five Key Insights From Chapter 20

These five structural insights from this chapter deserve to be carried forward into every future engagement:

**One: The accounting numbers are often identical across frameworks; the labels and disclosures differ.** A murabaha schedule under AAOIFI FAS 2 and under IFRS 9 produces the same amortisation figures. The difference is in what those figures are called, how they are presented, and what supplementary disclosures are required. An AI agent that gets the calculation right but the labels wrong produces a compliance error.

**Two: The IFRS/AAOIFI convergence project is unfinished.** AAOIFI is reviewing its standards to remove deviations that do not conflict with IFRS. Despite these efforts, significant differences remain. The practitioner working today must navigate the current divergence, not the eventual convergence.

**Three: Sukuk accounting has one unresolved structural risk.** Draft AAOIFI Standard 62's proposed shift from asset-based to asset-backed sukuk would, if adopted, require restructuring of a significant portion of the global sukuk market. Any practitioner advising on sukuk in 2025-2027 must assess the Standard 62 risk as a material contingent event.

**Four: Islamic fintech is creating accounting questions the standards have not answered.** Digital murabaha, P2P Islamic lending, impact sukuk through mobile apps — these structures are scaling faster than the standard-setters can respond. The CA/CPA who develops well-reasoned technical positions now will be the sought-after adviser as the sector grows.

**Five: The agent executes; the SSB judges.** No SKILL.md file and no AI agent can determine whether a specific transaction structure is Shariah-permissible. Shariah compliance is a scholarly function, not an accounting function. The value of the AI-augmented Islamic finance practice is that it automates execution, freeing the professional's time for the judgment work that only qualified practitioners can perform.

---

## Chapter Contract — Revisited

Return to the five questions from the Chapter 20 README. You should now be able to answer each from direct experience:

1. **What are the three accounting regimes?** You worked through all three — AAOIFI primary (L04-L06, L14), IFRS with Islamic guidance (L08-L11), and applied them comparatively in every exercise.

2. **How does the router-to-product-to-overlay architecture work?** You built and tested it in this lesson — the global router dispatches to the correct product and jurisdiction files before any output is generated.

3. **Why do AAOIFI and IFRS produce different balance sheet presentations?** You produced both side-by-side in L14 and reconciled them in L15's consolidation exercise.

4. **How would you build a jurisdiction overlay for a new country?** You applied Method A and Method B in Steps 3-4 of this exercise — interview-based and document-based knowledge extraction.

5. **Where is the boundary between agent execution and SSB judgment?** You defined it in the capability statement — the agent handles accounting mechanics, the SSB handles Shariah permissibility.

---

## Try With AI

### Prompt 1: Extend the Library

```
I need to add a new jurisdiction to the Islamic finance SKILL.md
library: [CHOOSE ONE: Jordan, Sudan, Iran, Bangladesh, Egypt, or
Kenya].

Research the jurisdiction and produce:
1. The jurisdiction overlay SKILL.md file — following the same
   structure as the existing overlays
2. The routing logic update — what line must be added to the
   global router for this jurisdiction?
3. A test query for this jurisdiction — a murabaha income
   recognition question that validates the overlay produces
   correct framework, labels, and disclosures
4. One unique regulatory requirement for this jurisdiction that
   does not exist in any of the 13 existing overlays
```

**What you are learning:** The library is designed to be extensible. Adding a jurisdiction is not a custom development project — it is Method B document analysis applied to a new regulatory source, followed by a test query to validate. This is the pattern for extending any domain agent library to new contexts.

### Prompt 2: Cross-Domain Transfer

```
The router-to-product-to-overlay architecture used in this chapter
handles jurisdictional variation in Islamic finance. Identify another
professional domain where the same pattern would solve the same
problem:

1. Name the domain (e.g., international tax, pharmaceutical
   regulation, employment law)
2. What is the equivalent of the "product" layer? (e.g., tax
   treaty types, drug classifications, contract types)
3. What is the equivalent of the "jurisdiction overlay"? (e.g.,
   country-specific tax rules, national drug authorities,
   employment law variations)
4. What would the routing logic look like?
5. What is the equivalent of the SSB boundary — what judgment
   cannot be automated in this domain?

Design the skill library structure for this domain.
```

**What you are learning:** The architectural contribution of this chapter is not limited to Islamic finance. The router-to-product-to-overlay pattern transfers to any domain where the same transaction or process has different rules by jurisdiction. Tax, legal, healthcare, and regulatory compliance all share this structure. Recognising the pattern across domains is the meta-skill that makes you an architect, not just a domain specialist.

---

Return to [Chapter 20 Overview](./README.md) to review the Chapter Contract questions.
