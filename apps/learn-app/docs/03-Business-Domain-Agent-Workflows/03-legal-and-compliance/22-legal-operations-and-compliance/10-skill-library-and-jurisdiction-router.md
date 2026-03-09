---
sidebar_position: 10
title: "The Legal SKILL.md Library and Jurisdiction Router"
description: "How the Legal Plugin's hierarchical routing system works, the jurisdiction overlay concept that adapts analysis for each legal system, the router walkthrough, UK law overlay, and key escalation triggers"
keywords:
  [
    "legal skill library",
    "jurisdiction router",
    "jurisdiction overlay",
    "legal-global-router",
    "UK law overlay",
    "legal plugin routing",
    "multi-jurisdiction legal AI",
    "contract review routing",
    "legal escalation triggers",
    "Cowork legal plugin",
  ]
chapter: 22
lesson: 10
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Explain the Legal Plugin's Hierarchical Routing System"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can trace a legal query through all four router steps (task type identification, jurisdiction identification, overlay application, mandatory output header) and explain what each step contributes to the final output"

  - name: "Configure Jurisdiction Overlays for Multi-Jurisdictional Legal Review"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can describe how a jurisdiction overlay modifies the plugin's default behaviour and can identify which overlay files would be loaded for a given cross-border contract scenario"

learning_objectives:
  - objective: "Trace a legal query through the four-step routing process and explain the role of each step in producing jurisdiction-aware legal analysis"
    proficiency_level: "B2"
    bloom_level: "Understand"
    assessment_method: "Student can walk through a sample query (e.g. 'review a vendor MSA under Pakistani law') and identify the task type file loaded, the jurisdiction overlay loaded, the specific modifications applied, and the mandatory output header produced"

  - objective: "Explain how jurisdiction overlays adapt the Legal Plugin's analysis for different legal systems and identify key escalation triggers in the UK law overlay"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can compare the UK law overlay's escalation triggers with the default analysis and explain why UCTA s.2(1) makes death/personal injury limitation clauses void, why post-termination restrictions exceeding 12 months are flagged, and how UK GDPR breach notification differs from other jurisdictions"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Hierarchical routing system (legal-global-router.md)"
    - "Jurisdiction overlay as a configuration file modifying plugin behaviour"
    - "Four-step routing process (task type, jurisdiction, overlay application, output header)"
    - "Product files vs. jurisdiction files in the skill library"
    - "Key escalation triggers that vary by jurisdiction"
  assessment: "5 concepts at B2 level -- within the 5-7 cognitive limit. Students have already encountered the plugin's commands and playbook architecture in earlier lessons; this lesson reveals the internal routing logic that connects those components."

differentiation:
  extension_for_advanced: "Examine the router's handling of multi-jurisdictional contracts (where multiple overlays must be loaded simultaneously). Draft a routing rule for a contract between a UK parent company and a Pakistani subsidiary that also processes EU citizen data -- identify which overlays would load and where their escalation triggers might conflict."
  remedial_for_struggling: "Focus on the four-step routing walkthrough. If you can explain what happens at each step when someone types 'review a vendor MSA under Pakistani law,' you have the core concept. The specific overlay contents are reference material you can look up; the routing logic is the foundation."
---

# The Legal SKILL.md Library and Jurisdiction Router

The Legal Plugin's commands -- `/review-contract`, `/triage-nda`, `/vendor-check`, `/brief`, `/respond` -- are the interface. Behind them sits a structured library of SKILL.md files that determines how the plugin actually analyses legal documents. At the centre of that library is the **router**: the file that intercepts every legal query, identifies what kind of work is being requested, determines which legal system applies, and ensures every output carries the mandatory attorney-review header.

Recall from Lesson 2 that the Legal Plugin uses a two-layer architecture: Anthropic's base `legal@knowledge-work-plugins` provides the core commands and generic skills, while the Agent Factory extension `legal-ops@agentfactory-business` adds the router, jurisdiction overlays, and enhanced skills. The router is the integration point between these two layers -- it intercepts queries that the base plugin would handle generically and applies jurisdiction-specific analysis before producing output.

Understanding the router is the difference between using the Legal Plugin as a generic tool and configuring it as an institutional knowledge system. This lesson shows you exactly how the routing works, what jurisdiction overlays do, and how the pieces fit together.

## How the Router Works

The Legal Plugin uses a hierarchical routing system. At the top level sits `legal-global-router.md` -- the file that intercepts every legal query, identifies the task type, loads the correct product file, identifies the jurisdiction, loads the correct overlay, and stamps every output with the mandatory header confirming that attorney review is required.

:::info Concept Box: Jurisdiction Overlay
A jurisdiction overlay is a configuration file that modifies the Legal Plugin's behaviour for a specific legal system. For example, the `pakistan-law.md` overlay tells the plugin: contracts in Pakistan are governed by the Contract Act 1872 (not English common law); non-competes must satisfy the reasonableness test under Section 27; trademarks are first-to-file (not first-to-use as in common law systems); the PDPA 2023 may require data localisation for sensitive personal data; and interest-bearing financing arrangements must be flagged for Islamic finance review given the 2028 Federal Shariat Court deadline. Without the overlay, the plugin would apply English or US default assumptions -- missing issues that are critical in Pakistani law. Similarly, the `uae-law.md` overlay handles the UAE's dual legal system (mainland civil law vs. DIFC/ADGM common law), Arabic language requirements for mainland courts, and the Commercial Agencies Law for distribution agreements. Why it matters: jurisdiction overlays are what make the difference between a generic legal review and one that catches the issues that actually matter in your market.
:::

## Router Walkthrough: From Query to Jurisdiction-Aware Analysis

When a user types "I need to review a vendor MSA under Pakistani law," here is exactly what happens inside the router:

```
USER QUERY: "I need to review a vendor MSA under Pakistani law"

STEP 1 — TASK TYPE IDENTIFICATION
Router scans query for pattern matches:
  "review" + "vendor MSA" -> matches: contract review, clause analysis
  Load: skills/jurisdiction-contract-review/SKILL.md

STEP 2 — JURISDICTION IDENTIFICATION
Router scans query for jurisdiction indicators:
  "Pakistani law" -> matches: Pakistan / Pakistani law / PBC / SECP / FBR
  Load: jurisdictions/pakistan-law.md

STEP 3 — OVERLAY APPLICATION
The jurisdiction-contract-review workflow now executes with Pakistan-specific
modifications active:
  - Contract formation checked against Contract Act 1872 (offer,
    acceptance, lawful consideration, free consent, competent parties,
    lawful object)
  - Non-compete clauses checked against s.27 reasonableness standard
    (void if unreasonable in scope, geography, duration)
  - Data protection clauses checked against PDPA 2023 (not UK GDPR)
  - IP clauses checked against Patents Ordinance 2000 and Trade Marks
    Ordinance 2001 (FIRST TO FILE warning activated)
  - Financing arrangements flagged for Islamic finance review
    (2028 Federal Shariat Court deadline)
  - Arbitration: note Pakistan is New York Convention signatory;
    prefer ICC or LCIA for significant international contracts
  - Tax withholding: flag FBR requirements for cross-border payments

STEP 4 — MANDATORY OUTPUT HEADER
Every output begins with:

  TASK:             Contract Review — Vendor MSA
  JURISDICTION:     Pakistani Law (Contract Act 1872)
  OVERLAY:          pakistan-law.md v1.0 loaded
  PLAYBOOK:         [Loaded: legal.local.md / Not configured]
  ATTORNEY REVIEW:  REQUIRED
```

Notice the chain: the user's natural language query triggers a specific product skill (jurisdiction-contract-review), a specific jurisdiction file (pakistan-law.md), and the combination produces analysis that is both workflow-correct and jurisdiction-correct. Without the overlay, the base plugin's generic contract-review skill would apply English or US default assumptions -- checking against the Sale of Goods Act or the UCC rather than the Contract Act 1872, and missing the Islamic finance flag entirely. The `jurisdiction-` prefix distinguishes the extension's enhanced skills from the base plugin's same-named skills.

## legal-global-router.md

The top-level routing file. Store at the root of your Cowork skills directory.

To create the router as a Cowork skill: open **Skills** → **+** → **Write skill instructions**. Set:

- **Skill name:** `legal-global-router`
- **Description:** `TOP-LEVEL ROUTER. Activate when ANY of these terms appear: contract review, NDA, non-disclosure, confidentiality, redline, legal review, IP, intellectual property, patent, trademark, copyright, trade secret, GDPR, DSAR, data subject, compliance, regulatory, governing law, indemnity, limitation of liability, termination, legal hold, discovery, litigation, cease and desist, employment agreement, service agreement, MSA, SOW.`
- **Instructions:** the routing rules below

```markdown
## STEP 1 — IDENTIFY TASK TYPE AND LOAD PRODUCT FILE

Contract Review -> skills/jurisdiction-contract-review/SKILL.md
NDA Triage -> skills/jurisdiction-nda-triage/SKILL.md
IP Research / Monitoring -> skills/ip-protection/SKILL.md
Regulatory Monitoring -> skills/regulatory-monitoring/SKILL.md
DSAR / Privacy -> skills/dsar-privacy/SKILL.md
Legal Spend -> skills/legal-spend/SKILL.md
Compliance Calendar -> skills/compliance-calendar/SKILL.md
Contract Intake -> skills/contract-intake-agent/SKILL.md
General Brief -> use /legal-brief command directly

## STEP 2 — IDENTIFY JURISDICTION AND LOAD OVERLAY

English law / UK -> references/jurisdictions/uk-law.md
EU / Continental Europe -> references/jurisdictions/eu-law.md
USA -> references/jurisdictions/us-law.md
Pakistan / Pakistani law -> references/jurisdictions/pakistan-law.md
UAE / DIFC / ADGM -> references/jurisdictions/uae-law.md
GCC / Saudi / Bahrain / Kuwait / Oman / Qatar -> references/jurisdictions/gcc-law.md
Multi-jurisdictional -> load all relevant overlays;
escalate to international counsel

## STEP 3 — MANDATORY OUTPUT HEADER (every legal output)

TASK: [e.g. Contract Review — Vendor MSA]
JURISDICTION: [e.g. Pakistani Law]
PLAYBOOK: [Loaded / Not configured — using general standards]
ATTORNEY REVIEW REQUIRED: YES

## UNIVERSAL RULES — APPLY TO ALL LEGAL OUTPUTS

- NEVER provide legal advice — provide legal analysis; flag for
  attorney review
- NEVER approve a contract for execution — human authorised signatory
  required without exception
- NEVER skip a RED escalation — RED always requires attorney review
  before any further action
- NEVER omit the playbook check — if no playbook found, state
  explicitly: "reviewed against general commercial standards"
- NEVER send any legal output directly to a counterparty —
  attorney review and approval required first
- This agent analyses, flags, drafts, and routes.
  The attorney advises and decides. Always.
```

The router's skill mapping (Step 1) connects each query type to the correct SKILL.md workflow — the `jurisdiction-` prefixed skills for contract review and NDA triage, and the extension's unique skills for everything else. The jurisdiction mapping (Step 2) connects each legal system to the overlay that modifies the analysis. Step 3 ensures that no matter what path the query takes through the system, the output is always clearly marked for attorney review.

## Jurisdiction Overlay Files

Each jurisdiction overlay contains the legal framework specifics, escalation triggers, and analytical modifications that the router applies when that jurisdiction is identified. Here is the UK law overlay as a representative example.

**jurisdictions/uk-law.md (excerpt):**

```markdown
## UK Law Overlay

### Governing Framework

- General contract law principles (offer, acceptance,
  consideration, intention to create legal relations)
- Consumer Rights Act 2015 (B2C contracts: unfair terms, implied
  terms, 14-day cooling off)
- Unfair Contract Terms Act 1977 (UCTA): reasonableness test for
  limitation of liability clauses in B2B contracts
- UK GDPR + Data Protection Act 2018
- Intellectual Property: CDPA 1988 (copyright), Patents Act 1977,
  Trade Marks Act 1994

### Key Escalation Triggers for UK Context

- Any clause attempting to limit liability for death or personal injury
  caused by negligence: VOID under UCTA s.2(1); flag RED immediately
- Limitation of liability clauses between businesses: must satisfy
  UCTA reasonableness test; always flag for attorney review if
  novel structure
- Post-termination restrictions (non-compete, non-solicit): English
  courts will only enforce if reasonable in scope, duration, and
  geographic reach; flag any clause exceeding 12 months

### Data Protection (UK GDPR)

- Controller / processor distinction: always establish which party
  is controller; determine if DPA required
- International transfers: UK adequacy decisions may differ from EU;
  check current status before relying on EU SCCs
- Breach notification: 72 hours to ICO (controllers); without
  undue delay to controller (processors)
```

Notice how the overlay changes what the router flags. Under the UK overlay, a limitation of liability clause that excludes liability for death or personal injury caused by negligence is not merely flagged YELLOW for negotiation -- it is flagged RED immediately because UCTA s.2(1) makes such clauses void as a matter of law. A generic review without the overlay might flag it as aggressive drafting. The UK overlay flags it as legally unenforceable -- a fundamentally different analysis that changes what the reviewing attorney needs to do.

Similarly, the post-termination restriction threshold of 12 months reflects English court practice. In other jurisdictions, longer restrictions may be enforceable. The overlay encodes the jurisdiction-specific standard, so the agent's flags are calibrated to the law that actually applies.

## The Library Structure

The full SKILL.md library follows this hierarchy:

```
skills/
├── legal-global-router/            (top-level router)
│   └── references/jurisdictions/
│       ├── uk-law.md               (English common law overlay)
│       ├── eu-law.md               (EU civil law overlay)
│       ├── us-law.md               (US federal/state overlay)
│       ├── pakistan-law.md          (Pakistani law overlay)
│       ├── uae-law.md              (UAE dual system overlay)
│       └── gcc-law.md              (GCC states overlay)
├── jurisdiction-contract-review/   (clause-by-clause workflow + jurisdiction awareness)
├── jurisdiction-nda-triage/        (three-tier NDA classification + jurisdiction awareness)
├── ip-protection/                  (patent/trademark/copyright monitoring)
├── regulatory-monitoring/          (weekly regulatory brief)
├── dsar-privacy/                   (DSAR response workflow)
├── legal-spend/                    (legal spend analysis)
├── compliance-calendar/            (obligation tracking)
└── contract-intake-agent/          (end-to-end contract intake routing)
legal.local.md                      (your negotiation playbook)
```

The `jurisdiction-` prefixed skills extend the base plugin's contract-review and nda-triage with jurisdiction overlay awareness -- they are named differently to avoid collision with the base plugin's same-named skills. Each jurisdiction file defines the legal framework modifications for a specific legal system. The `legal.local.md` playbook adds your organisation's institutional knowledge on top. The router combines these three layers -- workflow, jurisdiction, and institution -- into every analysis the plugin produces.

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Trace a Multi-Step Routing Decision

```
I am learning about the Legal Plugin's routing system. Walk me
through what happens internally when a user types:

"I need to triage three incoming NDAs — two are under English law
and one is under UAE law with a DIFC entity."

For each step of the router:
1. What task type is identified and which product file loads?
2. What jurisdictions are identified and which overlays load?
3. How does the router handle the fact that two different
   jurisdictions appear in a single query?
4. What does the mandatory output header look like for each NDA?

Explain why the DIFC NDA would be analysed differently from a
mainland UAE NDA, even though both are "UAE."
```

**What you are learning:** The router does not simply match keywords -- it must decompose multi-part queries and apply the correct overlay to each part. Understanding how the router handles mixed-jurisdiction batches reveals the design principle: each document gets its own jurisdiction-specific analysis, even when submitted together.

### Prompt 2: Design an Overlay for Your Jurisdiction

```
I want to understand how jurisdiction overlays work by designing
one. Help me create a jurisdiction overlay for [your country]
following this structure:

1. Governing Framework: What are the primary contract law statutes?
   What is the consideration doctrine (or equivalent)?
2. Key Escalation Triggers: What clauses are void or unenforceable
   as a matter of law in this jurisdiction? (e.g., penalty clauses,
   non-competes, liability exclusions)
3. Data Protection: What is the primary data protection law? What
   are the breach notification requirements? What are the cross-
   border transfer rules?
4. IP Framework: Is the trademark system first-to-file or first-
   to-use? What are the key patent statutes?
5. Dispute Resolution: What arbitration conventions apply? What
   is the standard choice of forum for international contracts?

Compare my overlay with the UK overlay structure to ensure I have
not missed any critical category.
```

**What you are learning:** Building an overlay forces you to identify the specific legal features that distinguish your jurisdiction from the plugin's defaults. This is the Knowledge Extraction Method applied to legal systems -- the same process your organisation uses to build its playbook, applied here to the jurisdiction layer.

### Prompt 3: Escalation Trigger Comparison

```
Compare the escalation triggers for limitation of liability clauses
across three jurisdictions:

1. UK (UCTA reasonableness test, s.2(1) void for death/personal injury)
2. UAE mainland (Civil Code Art. 390, judicial reduction of penalties)
3. Pakistan (Contract Act 1872, Section 74 reasonable compensation)

For each jurisdiction:
- When does the router flag RED vs. YELLOW?
- What makes a clause unenforceable vs. merely aggressive?
- What specific language in a limitation clause would trigger
  different flag levels in each jurisdiction?

Then explain why these differences mean the same contract clause
could be GREEN in one jurisdiction and RED in another.
```

**What you are learning:** Escalation triggers are not universal -- they reflect the specific legal rules of each jurisdiction. The same limitation of liability clause that is perfectly enforceable in one system may be void in another. Understanding this variation is why the overlay system exists: a single set of thresholds cannot produce accurate flags across different legal systems.

---

Continue to [Lesson 11: GCC Legal Context and Market Outlook ->](./11-gcc-legal-context-and-market-outlook.md)
