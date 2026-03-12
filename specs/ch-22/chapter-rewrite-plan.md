# Chapter 22 Rewrite Plan — Legal Operations and Compliance

> **Status**: Draft v2 — PHPM voice/pedagogy rules added, L06 cognitive load fixed, prediction moments mandated
> **Original artifact**: `specs/drafts/chaper22_legal/Chapter22_Legal_Operations.md`
> **Branch**: `feat/ch22-revision`
> **Plugin repo**: `panaversity/agentfactory-business-plugins/legal-ops`
> **Anthropic plugin**: `anthropics/knowledge-work-plugins/legal` v1.1.0
> **Audit source**: Session audit 2026-03-11

---

## 1. GOVERNING VISION

The original artifact is a practitioner's operating manual for in-house legal teams. Every section shows the reader using plugins to produce structured legal output they can evaluate, iterate on, and deploy. The reader finishes the chapter having built a complete legal operations system — contract review, NDA triage, IP monitoring, compliance assessment, litigation hold, DSAR management, legal spend analytics, and a compliance calendar — all calibrated to their organisation's negotiation playbook and jurisdiction requirements.

**The shipped chapter partially drifts from this vision.** Lessons 1, 9, 10, and 11 teach concepts without producing deployable artifacts. L10 teaches router architecture theory (Wrapper/Override/Delegation equivalent for legal — the routing walkthrough). L11 is market analysis. These are engineering and business-school content, not practitioner output.

**The rewrite returns to the artifact.** Every lesson produces legal output.

**CRITICAL CORRECTIONS (v1)**:

1. **Two Anthropic commands are unused**: `/compliance-check` (proactive regulatory assessment for planned business actions) and `/signature-request` (e-signature routing via DocuSign MCP). These are 2 of 7 Anthropic commands that go untaught. The rewrite includes both.

2. **Two Anthropic skills are unused**: `meeting-briefing` (7 meeting types, structured prep, action tracking) and `legal-risk-assessment` (5x5 severity-by-likelihood matrix). Both are immediately practical for legal ops. The rewrite includes both.

3. **Eight MCP connectors go unexplained**: The Anthropic plugin ships with Slack, Box, Egnyte, Atlassian, MS365, DocuSign, Google Calendar, and Gmail connectors. The chapter mentions MCP in passing but never shows setup. The rewrite teaches the `~~category` placeholder system and connector configuration.

4. **`/brief` vs `/legal-brief` confusion**: The chapter inconsistently references `/brief` (Anthropic base command) and `/legal-brief` (custom extension command). The rewrite clarifies when to use each.

5. **Zero flashcard files**: Every other recent chapter has `.flashcards.yaml` sidecar files. Legal terminology is dense (DPA, SCCs, FTO, DSAR, UCTA, PDPA, DIFC, ADGM, etc.) and ideal for flashcards. The rewrite mandates flashcards for every lesson.

---

## 2. THE ONE RULE

```
EVERY LESSON ENDS WITH A DEPLOYABLE ARTIFACT.

If a lesson does not produce output the student could send, configure,
deploy, or present to their legal team — the lesson has failed.
```

Deployable artifacts include:

- A contract review with attorney-ready redlines
- A triaged NDA with routing recommendation
- A configured negotiation playbook tested against a real contract
- A compliance assessment for a planned business action
- A litigation hold package ready for custodian distribution
- A meeting briefing for a contract negotiation
- An e-signature routing with pre-flight checklist
- A DSAR acknowledgement within statutory window
- A compliance calendar dashboard with escalation logic

Deployable artifacts do NOT include:

- An explanation of the routing architecture
- A diagram of the overlay loading sequence
- A market impact analysis without hands-on exercise
- A list of GCC dual legal system differences without running a review

---

## 3. THE TWO CASE STUDIES

Every lesson uses one or both case studies. The student sees both their world (Noor Technologies — emerging market, lean legal team, cross-border complexity) and the expert model (PayGulf/Al-Rashidi — DIFC-based, regulated fintech, high-volume contracts).

### Noor Technologies (Learner's Peer — ~60%)

```
Company:        Noor Technologies (Pvt) Ltd
Location:       Karachi, Pakistan
Founded:        2020
Employees:      85
Revenue:        PKR 480M (~$1.7M USD) — SaaS, growing 40% YoY
Product:        Cloud ERP for textile manufacturers (production planning,
                supply chain, export documentation)
Markets:        Pakistan primary (70%), UAE secondary (20%), UK expansion (10%)
Legal team:     Ayesha Malik (General Counsel) + Bilal Ahmad (Legal Operations)
Contracts:      12 vendor contracts/month, 25 NDAs/month
Pain:           37 contracts in review queue, 3 missed auto-renewals, 26-day overdue DSAR
Goal:           Eliminate backlog, deploy obligation tracking, establish playbook
Jurisdictions:  Pakistani law (primary), English law (UK clients), UAE/DIFC (Gulf expansion)
```

### PayGulf Technologies (Expert Model — ~40%)

```
Company:        PayGulf Technologies Ltd
Location:       DIFC, Dubai, UAE
Founded:        2018
Employees:      120
Revenue:        AED 45M (~$12.3M USD) — fintech, DFSA-regulated
Product:        Cross-border payment platform for GCC merchants
Key contact:    Fatima Al-Rashidi, General Counsel (8 years, ex-Clifford Chance Dubai)
Legal team:     Fatima (GC) + 2 associates + 1 legal ops coordinator
Contracts:      15 vendor contracts/month, 20 NDAs/month, DFSA compliance requirements
Pain:           DIFC/mainland dual jurisdiction complexity, SAMA outsourcing rules for Saudi expansion
Jurisdictions:  DIFC law (primary), UAE mainland (secondary), Saudi law (expansion)
```

### Demo Data Principle

```
RULE: Students use their own organisation's data where possible.
Where not possible, exercises provide synthetic data for Noor Technologies.

For exercises requiring sample contracts:
- L03: Sample vendor SaaS agreement (CloudStack Inc.)
- L04: Sample cross-border MSA (NexGen/Al-Faisal)
- L05: Sample mutual NDA (Al-Madinah Cloud Solutions)
- L08: Sample litigation demand letter (CloudMesh v DataFlow)

Each sample is provided as part of the companion repo exercise data.
Students with real contracts are encouraged to use those instead.
```

---

## 4. THE ACTUAL PLUGINS — WHAT EXISTS, HOW IT'S INVOKED

### Install Both Layers in L01

**Prerequisites: Cowork Access**

This chapter requires the **Claude desktop app** with **Cowork** enabled. Cowork is available on **Pro, Max, Team, and Enterprise plans**.

1. **Install the Claude desktop app** if you have not already — download it from [claude.ai/download](https://claude.ai/download) for macOS or Windows.
2. **Switch to the Cowork tab.** Open the Claude desktop app and select the **Cowork** tab. If you do not see it, your plan may not include Cowork — check your subscription at [claude.ai/settings](https://claude.ai/settings).
3. **Install the Legal plugin (Anthropic base).** In the Cowork sidebar, click **Customize** → **Browse plugins**. Find the **Legal** plugin and click **Install**. The plugin bundles 7 commands, 6 skills, and connector definitions into a single package.
4. **Install the Legal Ops extension (ours).** In the Cowork sidebar: **Customize** → **Browse plugins** → **Personal** → click **+** → **Add marketplace from GitHub** → enter `https://github.com/panaversity/agentfactory-business-plugins` → find **Legal Ops** → click **Install**. This adds jurisdiction overlays, enhanced routing, and 9 additional skills.
5. **Connect a working folder.** Click **Work in a folder** and select (or create) a folder on your computer for this chapter's practice files (e.g., `legal-practice/`). This gives Claude a place to read and write sample legal documents.
6. **Enable connectors for enterprise data (optional).** Cowork can read and create Office, PDF, and text files directly through built-in file skills — no connectors needed for these. From the **Customize** menu, select **Connectors** only if your workflows need to reach enterprise systems like your CLM, CRM, or document management system.

**Verify the install:** Type `/review-contract` in the Cowork chat. You should see the command auto-complete. If it does not appear, return to **Customize** → **Browse plugins** and confirm both plugins show as installed.

### What Actually Ships — Complete Inventory

#### Legal Plugin (Anthropic base — `knowledge-work-plugins/legal` v1.1.0)

**7 Commands** (slash-invoked, explicit workflows):

| Command               | Invocation           | What It Does                                                               | Used In |
| --------------------- | -------------------- | -------------------------------------------------------------------------- | ------- |
| review-contract       | `/review-contract`   | Clause-by-clause review against playbook, GREEN/YELLOW/RED flags, redlines | L03     |
| triage-nda            | `/triage-nda`        | NDA pre-screening, three-tier routing (Tier 1/2/3)                         | L05     |
| vendor-check          | `/vendor-check`      | Vendor agreement status, obligations, renewal calendar                     | L09     |
| brief                 | `/brief`             | Daily/topic/incident briefings from connected sources                      | L07,L10 |
| respond               | `/respond`           | Templated responses for DSARs, discovery holds, routine inquiries          | L08     |
| **compliance-check**  | `/compliance-check`  | **Proactive compliance assessment for planned business actions** (NEW)     | **L06** |
| **signature-request** | `/signature-request` | **Route documents for e-signature via DocuSign MCP** (NEW)                 | **L04** |

**6 Skills** (auto-activate when prompt matches description):

| Skill                     | Triggers On                      | What It Does                                                        | Used In |
| ------------------------- | -------------------------------- | ------------------------------------------------------------------- | ------- |
| contract-review           | "Review this contract..."        | Playbook-calibrated clause analysis, deviation classification       | L03     |
| nda-triage                | "Screen this NDA..."             | Three-tier classification, automatic RED flags                      | L05     |
| compliance                | "Check GDPR compliance..."       | Privacy regulation navigation, DPA review, DSAR handling            | L06,L11 |
| **legal-risk-assessment** | "Assess the risk of..."          | **5x5 severity-by-likelihood framework, escalation criteria** (NEW) | **L06** |
| **meeting-briefing**      | "Prepare for my meeting with..." | **7 meeting types, structured prep, action tracking** (NEW)         | **L09** |
| canned-responses          | "Draft a response to..."         | 7 response categories, escalation triggers, templates               | L08     |

#### Legal-Ops Extension Plugin (ours — `legal-ops@agentfactory-business` v1.0.0)

**4 Commands** (slash-invoked):

| Command          | Invocation         | What It Does                                               |
| ---------------- | ------------------ | ---------------------------------------------------------- |
| /review-contract | `/review-contract` | Enhanced: adds jurisdiction overlay to base review         |
| /triage-nda      | `/triage-nda`      | Enhanced: adds jurisdiction overlay to base triage         |
| /vendor-check    | `/vendor-check`    | Routes to compliance-calendar skill                        |
| /legal-brief     | `/legal-brief`     | Enhanced: routes to jurisdiction-aware research/monitoring |

**9 Skills** (router-coordinated):

| Skill                          | Relationship to Base             | What It Adds Beyond Base                            |
| ------------------------------ | -------------------------------- | --------------------------------------------------- |
| `legal-global-router`          | —                                | Routes task + jurisdiction, mandatory output header |
| `jurisdiction-contract-review` | **Enhances** → `contract-review` | Jurisdiction overlay, multi-overlay loading         |
| `jurisdiction-nda-triage`      | **Enhances** → `nda-triage`      | Jurisdiction overlay, regional RED flags            |
| `ip-protection`                | **Unique**                       | Patent landscape, TM, FTO, copyright/OSS            |
| `regulatory-monitoring`        | **Unique**                       | Weekly briefs, board summaries, RAG status          |
| `dsar-privacy`                 | **Unique**                       | 30-day statutory workflow, 6-stage process          |
| `legal-spend`                  | **Unique**                       | Invoice analysis, anomaly detection, benchmarking   |
| `compliance-calendar`          | **Unique**                       | 60-30-14-7-1 day escalation, obligation tracking    |
| `contract-intake-agent`        | **Unique**                       | End-to-end intake → triage → execution → monitor    |

**6 Jurisdiction Overlays:**

| Overlay           | Covers                                                                 |
| ----------------- | ---------------------------------------------------------------------- |
| `uk-law.md`       | English law, UCTA, UK GDPR, Employment Rights Act, Bribery Act         |
| `eu-law.md`       | GDPR, EU AI Act, Commercial Agents Directive, member state variants    |
| `us-law.md`       | UCC, CCPA/BIPA, state non-compete variation, CISG exclusion            |
| `pakistan-law.md` | Contract Act 1872, PDPA 2023, Islamic finance (2028), first-to-file TM |
| `uae-law.md`      | Mainland/DIFC/ADGM dual system, PDPL, Arabic language precedence       |
| `gcc-law.md`      | Saudi PDPL, Saudisation, Bahrain/Kuwait/Oman/Qatar frameworks          |

### How the Student Invokes Things

```
TWO INVOCATION PATTERNS:

1. EXPLICIT COMMANDS (base plugin — ~60% of interactions)
   Student types: /review-contract
   → Base plugin command activates → context gathering → clause analysis

   Student types: /compliance-check
   → Base plugin command activates → regulatory assessment produced

   Student types: /signature-request
   → Base plugin command activates → pre-signature checklist → DocuSign routing

   Note: commands are invoked by name only — no plugin prefix needed.

2. NATURAL LANGUAGE (extension router — ~40% of interactions)
   Student types: "Review this vendor MSA under Pakistani law"
   → Router auto-activates → jurisdiction-contract-review + pakistan-law overlay

   Student types: "What regulatory changes affect us this week?"
   → Router auto-activates → regulatory-monitoring skill

   Student types: "Track obligations for CloudStack Inc."
   → Router auto-activates → compliance-calendar skill
```

### Connectors — MCP Server Integrations

The base plugin ships with `.mcp.json` and `CONNECTORS.md` that pre-configure MCP servers for real enterprise tools. Skills use `~~category` placeholders (e.g., `~~cloud storage`, `~~CLM`) that resolve at runtime to whatever MCP server the student has connected.

**This changes the chapter from "agent reviews text" to "agent connects to your systems."**

#### Legal Plugin Connectors (8 MCP servers)

| Category        | Placeholder         | Pre-configured Server       | Alternatives                |
| --------------- | ------------------- | --------------------------- | --------------------------- |
| Calendar        | `~~calendar`        | Google Calendar             | Microsoft 365               |
| Chat            | `~~chat`            | Slack                       | Microsoft Teams             |
| Cloud storage   | `~~cloud storage`   | Box, Egnyte                 | Dropbox, SharePoint, GDrive |
| CLM             | `~~CLM`             | —                           | Ironclad, Agiloft           |
| CRM             | `~~CRM`             | —                           | Salesforce, HubSpot         |
| Email           | `~~email`           | Gmail                       | Microsoft 365               |
| E-signature     | `~~e-signature`     | DocuSign                    | Adobe Sign                  |
| Office suite    | `~~office suite`    | Microsoft 365               | Google Workspace            |
| Project tracker | `~~project tracker` | Atlassian (Jira/Confluence) | Linear, Asana               |

#### How Connectors Affect the Chapter

With connectors, the student can:

- **L01**: Connect Gmail + Calendar + Slack as baseline tools
- **L03**: Pull contracts from Box/Egnyte/SharePoint (real document management)
- **L04**: Route signed documents through DocuSign (real e-signature flow)
- **L09**: Pull meeting context from Google Calendar + Slack + email (real meeting prep)
- **L10**: Contract Intake Agent receives from Gmail, routes to Slack, logs to Atlassian
- **L11**: DSAR discovery searches real email, CRM, document systems

Without connectors, everything still works — skills produce high-quality analysis using whatever context the student provides (pasted text, uploaded PDFs). The connectors upgrade "paste the contract" to "the agent pulls the contract from your SharePoint folder."

#### Connector Setup in L01

L01 should show connector setup as an optional but recommended step:

```
OPTIONAL: Connect your tools (any of these enhance the experience)
- Gmail: the agent accesses your legal inbox for intake and correspondence
- Google Calendar: the agent reads meeting context for briefing prep
- Slack: the agent posts alerts and escalation notices to your channels
- Box/Egnyte: the agent accesses your document management system
- DocuSign: the agent routes documents for e-signature (L04 onward)
- Atlassian: the agent logs matters in Jira/Confluence

Students without accounts: everything works using uploaded documents and pasted text.
Students with accounts: the agent operates on your real data.
```

#### Connector Design Rule for Lessons

```
RULE: Every exercise that uses a connector MUST work in BOTH modes:
- WITH connector: "The agent pulls the NDA from your Box folder"
- WITHOUT connector: "Upload the NDA PDF or paste the text"

Never write an exercise that REQUIRES a connector. Always show the
upload/paste fallback. Show the connector path as the "if connected" upgrade.
```

---

## 5. LESSON MAP

| #   | Title                                                | Produces                                                                             | New Content?                                         |
| --- | ---------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| 01  | The Legal Operations Revolution                      | Plugins installed, connectors configured, first contract review output               | **REWRITE** (add hands-on)                           |
| 02  | The Negotiation Playbook                             | Configured `legal.local.md` playbook, tested against real/sample contract            | **REFINE** (add connectors depth)                    |
| 03  | Contract Review and Redlines                         | Reviewed contract with attorney-ready redlines and risk summary                      | KEEP (minor refine)                                  |
| 04  | Cross-Border Contracts and E-Signatures              | Cross-border review with multi-overlay analysis + e-signature routing                | **NEW** (split from L03 + /signature-request)        |
| 05  | NDA Triage and Management                            | Triaged NDA with tier routing recommendation                                         | KEEP                                                 |
| 06  | Compliance Check and Legal Risk Assessment           | Compliance assessment for business action + risk matrix                              | **NEW** (/compliance-check + legal-risk-assessment)  |
| 07  | Intellectual Property Protection                     | IP research brief (patent landscape, TM monitoring, FTO scaffolding)                 | KEEP                                                 |
| 08  | Litigation Support, Legal Hold, and Canned Responses | Litigation hold package + canned response templates + escalation checklist           | REFINE (add canned-responses depth, absorb from L06) |
| 09  | Meeting Prep and Vendor Management                   | Meeting briefing for negotiation + vendor obligation dashboard                       | **NEW** (meeting-briefing + /vendor-check depth)     |
| 10  | Legal Ops Agents: Intake and Monitoring              | Configured intake agent workflow + first regulatory brief                            | KEEP                                                 |
| 11  | Legal Ops Agents: Calendar, Spend, DSAR              | Compliance calendar dashboard + DSAR acknowledgement + spend report                  | KEEP                                                 |
| 12  | Employment Law and Contractor Classification         | Employment contract review with jurisdiction-specific flags                          | **REWRITE** (add deployable)                         |
| 13  | GCC Legal Systems and Cross-Border Practice          | Multi-jurisdiction review (PayStream/CloudVault) + quantified transformation         | **REWRITE** (add deployable)                         |
| 14  | The Legal Operations Sprint                          | Complete sprint: playbook → review → triage → compliance → hold → agents → dashboard | **REWRITE** (expanded capstone)                      |

**Net change**: 12 → 14 lessons (+2 new, 4 rewritten, 2 refined, 6 kept)

---

## 6. LESSON-BY-LESSON SPECIFICATION

### General Rules (Apply to ALL Lessons)

```
RULE 1:  Open with a business scenario, not a concept definition.
         The first paragraph is a story — a GC drowning in contracts,
         a legal ops coordinator chasing missed renewals, a DSAR deadline
         approaching with no process. Never open with "In this lesson..."

RULE 2:  Show the command first. Explain the concept after.
         Type "/review-contract" and upload a vendor MSA. See the
         GREEN/YELLOW/RED output. THEN explain what a playbook is.
         Never teach playbook theory abstractly first.

RULE 3:  Every code block is a prompt the student can copy and paste.
         No pseudocode. No "replace [X] with your value."
         Prompts use the Noor/PayGulf case study data exactly.

RULE 4:  Every lesson ends with "What You Built" — a numbered list
         of deployable artifacts the student now has.

RULE 5:  Governance boundaries are DISCOVERED, not taught.
         The student runs /review-contract. The output includes
         "ATTORNEY REVIEW: REQUIRED" and RED escalation items.
         The lesson asks: "Why does the output refuse to approve
         the contract?" The student discovers the governance boundary.

RULE 6:  Three "Try With AI" prompts per lesson.
         Prompt 1: Reproduce the exercise with the case study data.
         Prompt 2: Adapt the exercise to a different jurisdiction.
         Prompt 3: Apply to the student's own organisation.

RULE 7:  Case study split: Noor Technologies in the main text (~60%).
         PayGulf/Al-Rashidi in the expert sidebar or comparison table (~40%).

RULE 8:  No plugin architecture theory.
         Never mention: routing architecture internals, overlay loading
         sequence diagrams, skill collision resolution, SKILL.md file format.
         The extension is a tool. Teach how to USE it, not how it WORKS.
         When the jurisdiction overlay changes the output, say:
         "Because the contract is governed by Pakistani law, the review
         now flags Section 27 non-compete reasonableness." Do not explain
         the overlay loading mechanism.

RULE 9:  "The agent reviews, triages, drafts, and flags.
          The licensed attorney advises, decides, and signs."
         This governing principle appears in EVERY lesson where legal
         output is generated. It is not optional. It is not a footnote.

RULE 10: Include COMPLETE sample outputs from the original artifact.
         The Noor Technologies contract review (GREEN/YELLOW/RED table),
         the NDA triage report (Tier classification), the DSAR workflow —
         these are NOT references to be summarised. They are included
         VERBATIM so the student can compare their own output.

RULE 11: Flashcards are MANDATORY for every lesson.
         Every lesson gets a `.flashcards.yaml` sidecar file.
         Legal terminology is dense. Students need spaced repetition
         for: DPA, SCCs, FTO, DSAR, UCTA, PDPA, DIFC, ADGM, etc.
         Use /generate-flashcards after content is complete.

RULE 12: Connector dual-mode for every exercise.
         WITH connector: "The agent pulls the contract from Box"
         WITHOUT connector: "Upload the contract PDF or paste the text"
         Both paths produce identical quality output.

RULE 13: Voice constraints (from PHPM — universally applicable).
         Sentences: 15-25 words average, maximum 40. One concept per sentence.
         Paragraphs: 3-5 sentences, never exceed 6.
         After command output blocks: 1-2 sentences only, then move on.
         Terminology: bold on first use, define immediately, use 3+ times
         in next 2 paragraphs.
         NEVER SAY: "Simply", "Obviously", "Clearly", "Of course",
         "As we all know", "It's easy to see", "Don't worry about X for now."
         ENCOURAGED: "Notice that...", "Here is what this means in practice:",
         "If this feels unfamiliar, that is normal — it clicks after you
         run it yourself."

RULE 14: Vocabulary budget — maximum 5-8 new legal terms per lesson.
         Legal terminology is dense. Flashcards help with retention AFTER
         the lesson. The budget prevents cognitive overload DURING the lesson.
         Each new term: bold on first use, defined in same or next sentence,
         used at least 3 times before lesson ends.
         If a lesson needs more than 8 new terms, split the lesson.

RULE 15: Prediction moments — at least one per lesson.
         Before the student runs a command for the first time in a lesson,
         ask them to predict the output:
         "Before running /review-contract, predict: which clauses will
         the plugin flag as RED? Which will be GREEN? Write your predictions,
         then run the command."
         This transfers PRIMM's core insight (predict before answer) to
         legal operations. Passive "run and see" becomes active "reason
         about the legal issues, then verify with the tool."
         Prediction does NOT require AI-free marking — the student is
         reasoning about law, not avoiding AI assistance.

RULE 16: Backward references — at least one per lesson.
         Each lesson explicitly connects to a prior lesson's output
         or concept. Examples:
         "In L03, you reviewed CloudStack's liability cap and saw it
         flagged RED. Now you will negotiate that clause."
         "The playbook you built in L02 drives the analysis you see here."
         This prevents lessons from feeling like isolated workshops.
```

---

### L01 — The Legal Operations Revolution

**Duration**: 25 min
**Replaces**: Current L01 (The Moment Legal AI Grew Up)
**Produces**: Both plugins installed, connectors configured, first contract review output
**What changes**: Current L01 is conceptual overview with zero hands-on. New L01 installs plugins and runs first command within 5 minutes.

#### Opening Scene

The "37 Contracts" story: Ayesha Malik, General Counsel at Noor Technologies (Karachi), has 37 vendor contracts waiting for review. Three auto-renewals slipped past her last quarter — one for a cloud provider that cost PKR 4.8M she wanted to renegotiate. A DSAR from an ex-employee sits 26 days overdue. Her single Legal Ops associate, Bilal, spends 60% of his time on administrative routing — forwarding contracts to the right person, chasing signatures, sending deadline reminders.

#### Structure

```
1. THE 37 CONTRACTS (narrative opening — 3 paragraphs, no headers)
   - Ayesha's backlog: 37 contracts, 3 missed auto-renewals, 1 overdue DSAR
   - Bilal's wasted time: 60% admin coordination, 40% actual legal work
   - The promise: AI gives a 2-person legal team the operational capacity of 6

2. INSTALL BOTH PLUGINS (Cowork UI — step-by-step)
   - Prerequisites: Claude desktop app with Cowork enabled
   - Install Anthropic Legal Plugin (base):
     Cowork sidebar → Customize → Browse plugins → find Legal → Install
   - Install Agent Factory Legal Ops extension (ours):
     Cowork sidebar → Customize → Browse plugins → Personal → + →
     Add marketplace from GitHub → enter agentfactory-business-plugins URL →
     find Legal Ops → Install
   - Connect a working folder for practice files
   - Verify: type /review-contract — should auto-complete
   - Upload or paste any vendor agreement and run /review-contract
   - Expected output: structured review with GREEN/YELLOW/RED flags
   - Note mandatory output header: ATTORNEY REVIEW: REQUIRED
   - Ask: "Why does the output refuse to approve the contract?"
     → Student discovers governing principle through output

2B. CONNECT YOUR TOOLS (optional — recommended)
   - From Customize menu → Connectors
   - Table: 8 connector categories with what each enables
   - Minimum recommended: Gmail + Google Calendar (both free)
   - Optional: Box/Egnyte (document storage), DocuSign (e-signatures),
     Slack (alerts), Atlassian (matter tracking)
   - "If connected, the agent works with your real systems.
     If not, you upload documents and provide context in prompts.
     Both paths produce the same quality output."

3. YOUR FIRST CONTRACT REVIEW
   - Upload sample vendor SaaS agreement (CloudStack Inc.)
     OR paste the demo contract text
   - PREDICTION MOMENT: "Read the first page of the CloudStack agreement.
     Before running /review-contract, predict: will the overall assessment
     be 'proceed', 'proceed with modifications', or 'escalate to attorney'?
     Write your prediction."
   - /review-contract
   - Show COMPLETE expected output (Noor Technologies review from artifact)
   - CALIBRATION: "Compare your prediction. Most students predict 'proceed'
     because the contract looks standard. The RED flags surprise them."
   - Student reads the three-tier classification
   - Identifies: what is GREEN, what is YELLOW, what is RED

4. THE FIVE BOTTLENECKS (discovery-based)
   - Ask: "Before this plugin existed, how would Ayesha handle
     37 contracts with a two-person team?"
   - Student identifies the five pre-AI bottlenecks through reasoning:
     (1) review queues, (2) NDA backlogs, (3) compliance gaps,
     (4) knowledge management, (5) reporting blind spots
   - Table: Each bottleneck + which plugin command addresses it

5. THE GOVERNING PRINCIPLE
   - Ask: "Look at the output header. What does 'ATTORNEY REVIEW: REQUIRED' mean?"
   - Explain: "The agent reviews, triages, drafts, and flags.
     The licensed attorney advises, decides, and signs."
   - This is not a limitation. It is the correct architecture.
   - ABA Model Rules, SRA Code of Conduct, Pakistan Bar Council context

6. WHAT YOU BUILT
   - Both plugins installed and verified
   - MCP connectors configured (optional)
   - First contract review output with GREEN/YELLOW/RED classification
   - Understanding of governing principle (discovered, not lectured)
   - Five bottlenecks mapped to plugin capabilities
```

**Flashcards**: GREEN/YELLOW/RED classification, governing principle, five bottlenecks, DPA, plugin vs. extension distinction

---

### L02 — The Negotiation Playbook

**Duration**: 25 min
**Replaces**: Current L02 (Plugin Architecture and the Playbook)
**Produces**: Configured `legal.local.md` playbook tested against a real contract
**What changes**: Current L02 explains architecture. New L02 builds the playbook AND shows connector categories.

#### Structure

```
1. THE PLAYBOOK IS THE PRODUCT (narrative opening)
   - Fatima Al-Rashidi at PayGulf: same plugin, radically different output
   - Without playbook: generic review against "widely-accepted standards"
   - With playbook: every review reflects PayGulf's DFSA risk tolerance
   - "The plugin is infrastructure. Your playbook is the product."

2. BUILD YOUR PLAYBOOK (hands-on — from template)
   - Copy legal.local.md.template → legal.local.md
   - Fill in Organisation Profile section (using Noor Technologies)
   - Fill in 6 priority clause positions:
     1. Limitation of Liability (STANDARD: 12-month mutual cap)
     2. IP Ownership (STANDARD: each party retains pre-existing)
     3. Indemnification (STANDARD: mutual for third-party IP infringement)
     4. Data Protection (STANDARD: PDPA 2023 compliance, DPA required)
     5. Termination (STANDARD: 30-day convenience termination)
     6. Governing Law (STANDARD: Pakistani law, ICC arbitration fallback)
   - Fill in NDA Configuration (standard form, Tier 1/2/3 criteria)

3. TEST YOUR PLAYBOOK (comparison exercise)
   - Re-run /review-contract on the SAME CloudStack agreement from L01
   - Compare: output WITHOUT playbook vs. WITH playbook
   - Key difference: specific redline text matches Noor's positions
   - PayGulf sidebar: Fatima's playbook for DIFC law + DFSA regulations

4. MCP CONNECTOR CATEGORIES (reference section)
   - The ~~category placeholder system
   - Table: 9 connector categories → what each enables
   - How to swap providers (e.g., Box → SharePoint, Gmail → MS365)
   - "Category-agnostic design means you choose your tools,
     not the plugin. Any MCP server in a category works."

5. CONCEPT BOXES
   - DPA (Data Processing Agreement) — legal requirement, when needed
   - SCCs (Standard Contractual Clauses) — cross-border data transfers
   - Playbook vs. generic standards — why calibration matters

6. WHAT YOU BUILT
   - Configured legal.local.md with 6 clause positions + NDA config
   - Tested playbook against sample contract (before/after comparison)
   - Understanding of MCP connector architecture
```

**Flashcards**: Playbook purpose, 6 clause positions, DPA, SCCs, ~~category system, DFSA

---

### L03 — Contract Review and Redlines

**Duration**: 30 min
**Replaces**: Current L03 (Contract Lifecycle Management) — domestic review portion only
**Produces**: Reviewed contract with attorney-ready redlines and holistic risk summary
**What changes**: Cross-border content moves to L04. This lesson focuses on domestic single-jurisdiction review.

#### Structure

```
1. THE SEVEN-PHASE /review-contract WORKFLOW
   - BACKWARD REF: "In L02, you built a negotiation playbook. Now you will
     see exactly how that playbook drives the review output."
   - Phase 1: Context gathering (which party, contract type, deadline, value)
   - Phase 2: Playbook loading
   - Phase 3: Full contract read (holistic — clauses interact)
   - Phase 4: Clause-by-clause analysis (10 priority clauses)
   - Phase 5: Three-tier flag classification (GREEN/YELLOW/RED)
   - Phase 6: Redline generation (exact replacement text)
   - Phase 7: Holistic risk summary

2. WORKED EXAMPLE: Noor Technologies Reviews CloudStack SaaS Agreement
   - Full review output with GREEN/YELLOW/RED table
   - RED: Limitation of Liability (3-month cap vs. 12-month playbook standard)
   - RED: Data Protection (no DPA, no PDPA 2023 compliance)
   - YELLOW: Governing Law (Delaware vs. Pakistani law standard)
   - GREEN: IP Ownership (standard SaaS position)
   - Show redline format: CLAUSE | STATUS | CURRENT | ISSUE | REDLINE | FALLBACK

3. OBLIGATION TRACKING (/vendor-check)
   - After execution: /vendor-check CloudStack Inc.
   - Show obligation dashboard: upcoming dates, overdue items, renewal calendar
   - Set reminders for auto-renewal notice deadline

4. CONTRACT REPOSITORY AS INTELLIGENCE
   - /brief topic:"limitation of liability benchmarking"
   - Query: "What are our liability cap outcomes across 34 SaaS contracts?"
   - Output: institutional benchmarking by contract value tier

5. CONCEPT BOXES
   - Redline: proposed change to contract language
   - Limitation of Liability: mutual cap, carve-outs, asymmetry risks
   - CLM (Contract Lifecycle Management): end-to-end process

6. WHAT YOU BUILT
   - Complete contract review with redlines for CloudStack agreement
   - Obligation tracking dashboard for post-execution monitoring
   - Institutional benchmarking query against contract repository
```

**Flashcards**: 7 review phases, GREEN/YELLOW/RED criteria, redline format, 10 priority clauses, CLM definition

---

### L04 — Cross-Border Contracts and E-Signatures

**Duration**: 25 min
**New lesson** (split from current L03 cross-border section + NEW /signature-request)
**Produces**: Cross-border review with multi-overlay analysis + e-signature routing
**Why new**: Current L03 at 35 min is overloaded. Cross-border analysis deserves its own lesson. Adding /signature-request closes the CLM execution loop.

#### Structure

```
1. THE FIVE CROSS-BORDER PITFALLS
   1. Governing law vs. mandatory local law conflicts
   2. Arbitration enforceability gaps
   3. Data transfer mechanism gaps
   4. Tax withholding obligations
   5. Language precedence (Arabic version prevails risk)

2. MULTI-OVERLAY LOADING
   - Step 1: Identify primary governing law → load primary overlay
   - Step 2: Identify party jurisdictions → load party overlays
   - Step 3: Identify performance jurisdictions → load performance overlays
   - Step 4: Cross-reference escalation triggers
   - Step 5: Combined analysis output

3. WORKED EXAMPLE: NexGen (Lahore) & Al-Faisal Digital (Dubai) — Saudi Delivery
   - Three jurisdictions: Pakistan vendor, UAE buyer, Saudi performance
   - RED: Data Protection (3 frameworks simultaneously)
   - RED: Tax withholding (Pakistan FBR + Saudi 5%)
   - YELLOW: IP Assignment (Pakistan copyright vests in author)
   - YELLOW: Governing Law (Arabic prevails risk)

4. CLOSING THE LOOP: /signature-request (NEW)
   - After negotiation resolves → route for e-signature
   - Pre-signature checklist:
     ☐ Final form confirmed
     ☐ Entity names match exactly (most common error)
     ☐ Signature blocks align with authorised signers
     ☐ All exhibits/schedules attached
     ☐ Internal approvals completed
   - Route to DocuSign (if connected) or generate manual execution instructions
   - Post-signature: contract saved to repository, obligations extracted

5. CONCEPT BOXES
   - Conflict of Laws (Private International Law)
   - New York Convention (international arbitration enforcement)
   - Multi-overlay loading (why jurisdiction-aware review matters)

6. WHAT YOU BUILT
   - Cross-border review with three-jurisdiction analysis
   - Five-pitfall checklist applied to real example
   - E-signature routing with pre-flight verification
   - Post-execution obligation extraction
```

**Flashcards**: 5 cross-border pitfalls, New York Convention, multi-overlay, Arabic prevails risk, e-signature pre-flight checklist

---

### L05 — NDA Triage and Management

**Duration**: 20 min
**Replaces**: Current L04 (minimal changes — lesson is strong)
**Produces**: Triaged NDA with tier routing recommendation

#### Structure

```
KEEP current L04 structure with these additions:
- BACKWARD REF: "In L03, you reviewed a full vendor agreement clause by
  clause. NDAs are simpler — the question is not 'what needs redlining?'
  but 'does this need attorney time at all?'"
- PREDICTION MOMENT: "Read the Al-Madinah NDA. Before running /triage-nda,
  predict: Tier 1 (auto-approve), Tier 2 (review), or Tier 3 (escalate)?
  Which clauses concern you most?"
- Add connector dual-mode for NDA upload (Box/Egnyte vs. paste)
- Add SLA targets table (Tier 1: 1 day, Tier 2: 2 days, Tier 3: 5 days)
- Add 9 automatic RED flags list (residuals, no carve-outs, non-compete, etc.)
- Ensure worked example (Al-Madinah) produces complete triage report
- Add calibration after triage: "If you predicted Tier 1 but it classified
  Tier 2, look at which RED flags triggered. This gap is the value of
  systematic triage over gut feel."
```

**Flashcards**: Three-tier system, 9 automatic RED flags, NDA definition, residuals clause, Tier SLA targets

---

### L06 — Compliance Check and Legal Risk Assessment

**Duration**: 25 min
**New lesson** (uses two previously untaught Anthropic features)
**Produces**: Compliance assessment for a planned business action + risk matrix
**Why new**: `/compliance-check` is distinct from contract review (reactive) and regulatory monitoring (external). It's proactive internal compliance — "before we launch this, what do we need to worry about?"

#### Structure

```
1. PROACTIVE VS. REACTIVE COMPLIANCE (narrative opening)
   - Noor Technologies wants to launch AI-powered document processing
     for Pakistani textile exporters. Before launch: what regulations apply?
   - /review-contract = reactive (reviews existing contracts)
   - /brief topic:regulatory = monitoring (tracks external changes)
   - /compliance-check = proactive (assesses planned actions)
   - BACKWARD REF: "In L03, you reviewed an existing CloudStack contract.
     That was reactive — the contract already existed. Now you assess a
     planned action BEFORE it creates legal exposure."

2. PREDICTION MOMENT (before first /compliance-check)
   - "Before running /compliance-check, predict: will the assessment say
     Proceed, Proceed with conditions, or Requires review? Which
     regulations will it flag? Write your predictions."

3. /compliance-check IN ACTION
   - Describe planned action: "Launch AI document processing service
     for Pakistani textile manufacturers. Will process Urdu-language
     invoices, bills of lading, and export documentation containing
     business names, addresses, and shipment data. Target market:
     Pakistan domestic with UAE/UK export customers."
   - Output: quick assessment (Proceed/Proceed with conditions/Requires review)
   - Applicable regulations table (PDPA 2023, UAE PDPL, UK GDPR)
   - Requirements checklist
   - Risk analysis with severity levels
   - Priority actions
   - CALIBRATION: "Compare your prediction to the output. If you missed
     a regulation, that is exactly the value of proactive assessment —
     it surfaces what you did not anticipate."

4. LEGAL RISK ASSESSMENT FRAMEWORK (Anthropic skill — NEW)
   - 5x5 severity-by-likelihood matrix
   - Severity: 1 (Negligible) to 5 (Critical — >25% of relevant value)
   - Likelihood: 1 (Remote) to 5 (Almost Certain)
   - Score = Severity x Likelihood → GREEN (1-4), YELLOW (5-9), ORANGE (10-15), RED (16-25)
   - Apply to Noor's AI product launch risks

5. WORKED EXAMPLE: PayGulf Compliance Assessment
   - PayGulf plans cross-border payment feature for Saudi merchants
   - /compliance-check: SAMA outsourcing rules, Saudi PDPL data localisation,
     DFSA requirements, PCI DSS compliance
   - Risk matrix: 4 risks scored and classified

6. WHAT YOU BUILT
   - Compliance assessment for AI product launch
   - Risk matrix with 4 risks scored (GREEN/YELLOW/ORANGE/RED)
   - Priority actions list for pre-launch compliance
```

**Flashcards**: /compliance-check vs /review-contract vs /brief, 5x5 matrix, risk score ranges, proactive vs reactive compliance

---

### L07 — Intellectual Property Protection

**Duration**: 20 min
**Replaces**: Current L05 (minimal changes — lesson is strong)
**Produces**: IP research brief (patent landscape, TM monitoring, FTO scaffolding)

#### Structure

```
KEEP current L05 structure with these additions:
- Reinforce governance boundary: FTO preliminary research ≠ FTO opinion
- Add OSS licence hierarchy table (GPL v3 → MIT/BSD)
- Add ESCALATION: GPL/AGPL in proprietary product → IP counsel immediately
- Ensure SpectraAI worked example produces complete patent landscape output
```

**Flashcards**: FTO vs. FTO opinion, Nice Classification, prior art, patent landscape, OSS licence hierarchy, first-to-file vs. first-to-use

---

### L08 — Litigation Support, Legal Hold, and Canned Responses

**Duration**: 30 min
**Replaces**: Current L06 (refined — add canned responses depth + full /respond treatment)
**Produces**: Litigation hold package + canned response templates + escalation checklist
**What changes**: Absorbs the canned-responses/`/respond` treatment (moved from L06 for cognitive load). Litigation holds and templated responses are natural partners — both deal with high-stakes situations requiring precise, auditable communication.

#### Structure

```
KEEP current L06 structure with these additions:

1. CANNED RESPONSES AND /respond (7 categories — moved from L06)
   - DSRs, discovery holds, privacy inquiries, vendor questions,
     NDA requests, subpoena/legal process, insurance notifications
   - Universal escalation triggers (stop templated response when):
     potential litigation, regulators inquire, binding commitments,
     criminal liability, media attention, unprecedented situation
   - Show: /respond type:"discovery-hold" for a litigation hold notice
   - Show: /respond type:"privacy-inquiry" for a routine privacy question
   - PREDICTION MOMENT: "Before running /respond type:'discovery-hold',
     predict: what sections will the template include? What will it
     refuse to include (and why)?"

2. BACKWARD REF: "In L05, you triaged NDAs into Tier 1/2/3. A Tier 3 NDA
   (RED flags) sometimes surfaces issues that escalate to litigation.
   This lesson covers what happens when it does."

3. Expand discovery hold workflow with /respond integration
   - Show escalation triggers specific to discovery holds:
     criminal liability, unclear scope, conflicting prior holds
   - Add litigation hold tracking dashboard concept

4. Ensure DataFlow Systems worked example produces complete hold package:
   hold notice + custodian list + acknowledgement tracker + IT suspension
```

**Flashcards**: Legal hold triggers, ESI categories, custodian acknowledgement, litigation strategy boundary (agent MUST NOT), discovery hold vs. litigation hold, 7 canned response categories, universal escalation triggers

---

### L09 — Meeting Prep and Vendor Management

**Duration**: 25 min
**New lesson** (uses previously untaught Anthropic meeting-briefing skill + /vendor-check depth)
**Produces**: Meeting briefing for contract negotiation + vendor obligation dashboard
**Why new**: `meeting-briefing` is one of the most practical Anthropic skills — 7 meeting types, 5-step prep methodology, action tracking. Combined with `/vendor-check`, this teaches the full vendor relationship management workflow.

#### Structure

```
1. THE UNPREPARED NEGOTIATION (narrative opening)
   - Bilal (Noor Technologies Legal Ops) walks into a contract renegotiation
     with CloudStack. He doesn't know: current contract terms, prior negotiation
     history, upcoming obligations, or CloudStack's recent compliance changes.
   - Fatima (PayGulf) prepares for every vendor meeting with a structured brief.
   - This lesson teaches Fatima's approach using AI.
   - BACKWARD REF: "In L03, you reviewed the CloudStack agreement and found
     RED flags on liability cap and data protection. In L04, you learned
     cross-border pitfalls. Now you prepare to NEGOTIATE those issues."

2. PREDICTION MOMENT (before first meeting-briefing)
   - "Before asking the AI to prepare your CloudStack briefing, list the
     3 most important things you would want to know walking into this
     negotiation. Then run the briefing and compare your list to
     the AI's preparation."

3. meeting-briefing SKILL (Anthropic — NEW)
   - 7 meeting types: deal review, board/committee, vendor call, team sync,
     client meeting, regulatory discussion, litigation/dispute
   - 5-step methodology:
     1. Identify context (type, participants, agenda, legal team role)
     2. Assess preparation needs based on type
     3. Gather context from connected sources (calendar, email, chat, docs)
     4. Synthesise into structured briefing
     5. Identify preparation gaps

   - Prompt: "Prepare for my contract renegotiation meeting with CloudStack Inc.
     Meeting is Thursday at 14:00. I need to discuss liability cap (currently 3 months,
     we want 12), missing DPA, and governing law. I'm the customer's legal ops."
   - Output: structured briefing with background, open issues, talking points,
     red lines, prior negotiation history (if connected to docs/email)

4. /vendor-check DEEP DIVE
   - /vendor-check CloudStack Inc.
   - Full output: obligations summary, upcoming deadlines (30/60/90 day),
     overdue items, renewal calendar, SLA monitoring
   - Cross-reference with meeting briefing: what do we need to raise Thursday?

5. ACTION ITEM TRACKING
   - Post-meeting: meeting-briefing captures action items
   - Priority/ownership/deadline/dependencies
   - Distribution to relevant parties
   - Follow-up cadence: daily (high), weekly (medium), monthly (low)

6. WORKED EXAMPLE: PayGulf Board Meeting Prep
   - Fatima prepares for quarterly board meeting
   - Brief includes: risk highlights, regulatory updates, contract pipeline,
     compliance posture, pending litigation (if any)
   - Different meeting type = different preparation template

7. WHAT YOU BUILT
   - Meeting briefing for CloudStack renegotiation
   - Vendor obligation dashboard with 30/60/90 day view
   - Action item tracking system
   - Board meeting briefing template
```

**Flashcards**: 7 meeting types, 5-step prep methodology, vendor obligation tracking, action item priority levels, meeting prep vs. ad-hoc review

---

### L10 — Legal Ops Agents: Intake and Monitoring

**Duration**: 25 min
**Replaces**: Current L07 (minimal changes — lesson is strong)
**Produces**: Configured intake agent workflow + first regulatory brief

#### Structure

```
KEEP current L07 structure with these additions:
- Show connector integration: intake agent receives from Gmail MCP,
  logs to Atlassian MCP, sends alerts to Slack MCP
- Dual-mode: WITH connectors vs. manual workflow
- Ensure Contract Intake Agent worked example produces:
  classification + metadata + routing + templates (A/B/C)
- Ensure Regulatory Monitoring Agent produces:
  RAG-status weekly brief with RED/AMBER/GREEN items
```

**Flashcards**: Agent vs. tool distinction, 5-step intake workflow, document type classification table, RAG status definitions, coordination overhead (40-60%)

---

### L11 — Legal Ops Agents: Calendar, Spend, DSAR

**Duration**: 30 min
**Replaces**: Current L08 (minimal changes — lesson is strong)
**Produces**: Compliance calendar dashboard + DSAR acknowledgement + spend report

#### Structure

```
KEEP current L08 structure with these additions:
- Compliance Calendar: show MCP integration with Google Calendar for reminders
- DSAR: show connector path (search real CRM, email, HR systems via MCP)
- Legal Spend: show anomaly detection rules clearly (10 flags)
- Ensure all three agents produce complete output:
  - Calendar: 60/30/14/7/1 day escalation for Gulf Digital Solutions
  - Spend: Quarterly report with anomaly flags
  - DSAR: 30-day workflow with statutory windows table
```

**Flashcards**: DSAR definition, statutory response windows (UK/EU/CCPA), 6-stage DSAR workflow, escalation timeline (60-30-14-7-1), billing anomaly types, redaction categories

---

### L12 — Employment Law and Contractor Classification

**Duration**: 25 min
**Replaces**: Current L09 (REWRITE — add deployable artifact)
**Produces**: Employment contract review with jurisdiction-specific flags
**What changes**: Current L09 is conceptual analysis. New L12 runs a contract through the plugin.

#### Structure

```
1. WHY EMPLOYMENT LAW IS DIFFERENT (discovery-based)
   - Upload Brightpath/Usman employment agreement
   - /review-contract
   - Output: RED flags that DON'T appear in commercial contracts
   - Ask: "Why does the plugin flag the non-compete as RED in Pakistan
     but would flag it as GREEN in DIFC?"
   - Student discovers: employment law is jurisdiction-specific

2. FOUR CRITICAL DIFFERENCES
   1. Mandatory terms override playbook positions
   2. Non-compete enforceability is jurisdiction-dependent
   3. Contractor vs. employee classification is tax/regulatory risk
   4. IP assignment requires jurisdiction-specific treatment

3. CONTRACTOR VS. EMPLOYEE (5 indicators exercise)
   - Upload sample contractor agreement for Usman Tariq
   - Plugin flags classification indicators
   - Student evaluates: is this really a contractor or an employee?
   - Substance-over-form test: FBR (Pakistan), HMRC (UK), IRS (US)

4. WORKED EXAMPLE: Brightpath (UK) Hires Usman (Pakistan)
   - Run the complete review
   - 3 RED escalations: no Pakistan entity, non-compete scope, tax compliance
   - 1 YELLOW: IP assignment mechanics
   - Student produces: recommendation memo with three options
     (subsidiary, EoR, contractor — with risks for each)

5. WHAT YOU BUILT
   - Employment contract review with 3 RED + 1 YELLOW flags
   - Contractor vs. employee classification analysis
   - Recommendation memo with options for Brightpath
```

**Flashcards**: 4 critical differences, 5 classification indicators, substance-over-form, EOBI (Pakistan), Section 27 non-compete, work-for-hire (UK vs. Pakistan)

---

### L13 — GCC Legal Systems and Cross-Border Practice

**Duration**: 30 min
**Replaces**: Current L10 (router architecture) + L11 (GCC context) — merged and made practical
**Produces**: Multi-jurisdiction review output + quantified transformation model
**What changes**: Remove all router architecture theory. Make GCC content hands-on. Add quantification exercise.

#### Structure

```
1. THE GCC DUAL LEGAL SYSTEM (discovery-based)
   - Upload PayStream/CloudVault vendor agreement (DIFC ↔ Saudi)
   - /review-contract
   - Output shows: DIFC and Saudi overlays both loaded
   - Ask: "Why does the output show two different data protection frameworks?"
   - Student discovers: UAE has multiple legal systems within one country

2. IDENTIFY YOUR LEGAL ZONE (practical table)
   - Mainland UAE: civil law, Arabic courts, Art. 390 penalty reduction
   - DIFC: common law, English courts, internationally enforceable
   - ADGM: English law applied directly, Abu Dhabi equivalent
   - Exercise: classify 5 scenarios → which zone applies?

3. WORKED EXAMPLE: PayStream (UAE) + CloudVault (DIFC) — Riyadh Deployment
   - Run through /review-contract with UAE + Saudi overlays
   - Dual data protection: DIFC DP Law 2020 + Saudi PDPL
   - SAMA outsourcing implications (financial services)
   - Data localisation obligations
   - Complete review output with jurisdiction-specific notes

4. WHAT CHANGES, WHAT DOES NOT CHANGE
   - Table: function-by-function before/after (contract review, NDA triage,
     regulatory monitoring, DSAR, institutional knowledge)
   - What does NOT change: attorney obligation, privilege, judgment, responsibility
   - QUANTIFICATION EXERCISE:
     Students fill in their own numbers:
     "How many contracts/month? How many NDAs? How many DSARs?"
     Calculate: current hours → plugin hours → monthly hours saved
     Reference model: 78-123 hours/month saved for 150-250 person company

5. THE PLUGIN IS INFRASTRUCTURE, YOUR PLAYBOOK IS THE PRODUCT
   - Market impact: commoditised vs. differentiated legal tech
   - Organisations with no playbook = better tool
   - Organisations with mature playbook = transformed legal function
   - Central insight: institutional knowledge does not get commoditised

6. WHAT YOU BUILT
   - Multi-jurisdiction review (DIFC + Saudi) with dual overlay
   - 5-scenario zone classification exercise completed
   - Personal transformation model (hours saved, cost impact)
   - Understanding of infrastructure vs. institutional knowledge
```

**Flashcards**: DIFC vs. ADGM vs. mainland, Art. 390 (penalty reduction), Arabic prevails risk, Saudi PDPL data localisation, SAMA outsourcing, before/after hours

---

### L14 — The Legal Operations Sprint

**Duration**: 35 min
**Replaces**: Current L12 (REWRITE — expanded capstone with ALL commands)
**Produces**: Complete legal ops toolkit sprint output
**What changes**: Current L12 has 8 exercises but 6 are only referenced (not detailed). New L14 is a capstone sprint using every command and skill taught.

#### Structure

```
1. THE SPRINT FORMAT
   - 8 exercises, each producing a deployable artifact
   - All exercises use Cowork with both plugins installed
   - Every exercise has: scenario, exact prompts, expected output, evaluation criteria

2. EXERCISE 1: BUILD YOUR NEGOTIATION PLAYBOOK (45-60 min)
   - Expert interview (5 questions — provided verbatim)
   - Document extraction from 3 contracts
   - Draft playbook from template
   - Test: /review-contract on known contract, compare to actual negotiation
   - Refine and re-test
   - DELIVERABLE: Validated legal.local.md

3. EXERCISE 2: CONTRACT REVIEW SPRINT (45 min)
   - 3 contracts, 15 minutes each
   - /review-contract for each
   - Produce: GREEN/YELLOW/RED classification + priority negotiation order
   - DELIVERABLE: 3 reviewed contracts with attorney-ready summaries

4. EXERCISE 3: NDA TRIAGE SYSTEM (30 min)
   - Configure Tier 1/2/3 criteria in playbook
   - /triage-nda on 5 sample NDAs
   - Calibrate: target 60% Tier 1, 25% Tier 2, 15% Tier 3
   - DELIVERABLE: Calibrated NDA triage configuration

5. EXERCISE 4: COMPLIANCE ASSESSMENT (30 min)
   - /compliance-check on a planned business initiative
   - Risk matrix (5x5) for top 4 risks identified
   - Priority actions list
   - DELIVERABLE: Compliance assessment + risk matrix

6. EXERCISE 5: MEETING PREP AND E-SIGNATURE (30 min)
   - meeting-briefing for a contract negotiation
   - Post-negotiation: /signature-request to route for execution
   - DELIVERABLE: Meeting brief + e-signature routing

7. EXERCISE 6: DSAR RESPONSE PROCESS (30 min)
   - Trace 30-day workflow for sample DSAR
   - Identify jurisdiction-specific response windows
   - Produce: acknowledgement letter + discovery request
   - DELIVERABLE: DSAR acknowledgement within statutory window

8. EXERCISE 7: LEGAL OPS DASHBOARD (30 min)
   - /vendor-check for all active vendors
   - Compliance calendar with escalation logic
   - Legal spend report with anomaly detection
   - DELIVERABLE: Legal ops dashboard (calendar + spend + pipeline)

9. EXERCISE 8: FULL PIPELINE (60 min — optional capstone)
   - Contract arrives via email/upload
   - Contract Intake Agent classifies → routes
   - /review-contract with jurisdiction overlay
   - Negotiate → /signature-request
   - Post-execution → /vendor-check → compliance calendar
   - DELIVERABLE: End-to-end contract lifecycle completed

10. FOUR PRINCIPLES OF LEGAL AI DEPLOYMENT
    1. The agent reviews, attorneys decide
    2. Institutional knowledge drives differentiation
    3. Process-level agents eliminate coordination overhead
    4. Jurisdiction-aware analysis is non-negotiable for cross-border work

11. QUICK REFERENCE
    - All 7 Anthropic commands with usage
    - All 6 Anthropic skills with trigger patterns
    - All 4 extension commands with routing
    - All 9 extension skills with capabilities
    - All 6 jurisdiction overlays with coverage
    - All 8 MCP connectors with categories
```

**Flashcards**: Four principles, command quick reference, skill activation patterns, connector categories

---

## 7. COMMANDS AND SKILLS COVERAGE MATRIX

Every Anthropic feature is now used. Every extension feature is taught.

### Anthropic Commands (7/7 — was 5/7)

| Command                | Lesson(s)               | Status   |
| ---------------------- | ----------------------- | -------- |
| /review-contract       | L01,L03,L04,L12,L13,L14 | Existing |
| /triage-nda            | L05,L14                 | Existing |
| /vendor-check          | L03,L09,L14             | Existing |
| /brief                 | L03,L07,L10             | Existing |
| /respond               | L08,L11                 | Existing |
| **/compliance-check**  | **L06,L14**             | **NEW**  |
| **/signature-request** | **L04,L14**             | **NEW**  |

### Anthropic Skills (6/6 — was 4/6)

| Skill                     | Lesson(s)   | Status              |
| ------------------------- | ----------- | ------------------- |
| contract-review           | L03,L04     | Existing            |
| nda-triage                | L05         | Existing            |
| compliance                | L06,L11     | Existing            |
| canned-responses          | L08,L11     | Existing (deepened) |
| **legal-risk-assessment** | **L06,L14** | **NEW**             |
| **meeting-briefing**      | **L09,L14** | **NEW**             |

### Extension Skills (9/9)

| Skill                        | Lesson(s)       | Status   |
| ---------------------------- | --------------- | -------- |
| legal-global-router          | L01-L14         | Existing |
| jurisdiction-contract-review | L03,L04,L12,L13 | Existing |
| jurisdiction-nda-triage      | L05             | Existing |
| ip-protection                | L07             | Existing |
| regulatory-monitoring        | L10             | Existing |
| dsar-privacy                 | L11             | Existing |
| legal-spend                  | L11             | Existing |
| compliance-calendar          | L09,L11         | Existing |
| contract-intake-agent        | L10             | Existing |

### MCP Connectors (8/8 — was 0/8 taught)

| Connector       | Lesson(s)   | Usage                                 |
| --------------- | ----------- | ------------------------------------- |
| Gmail           | L01,L10     | Intake agent email reception          |
| Google Calendar | L01,L09,L11 | Meeting context, compliance reminders |
| Slack           | L01,L10,L11 | Alerts, escalation notices            |
| Box             | L01,L03     | Document management, contract storage |
| Egnyte          | L01,L03     | Alternative document storage          |
| MS365           | L01         | Office suite, email alternative       |
| DocuSign        | L01,L04,L14 | E-signature routing                   |
| Atlassian       | L01,L10     | Matter tracking, project management   |

### Flashcards (14/14 — was 0/12)

Every lesson gets a `.flashcards.yaml` sidecar file. Total: 14 files.

---

## 8. WHAT GETS CUT

| Removed Content                                                          | Reason                                                    |
| ------------------------------------------------------------------------ | --------------------------------------------------------- |
| L10 router architecture walkthrough (4-step diagram)                     | Plugin architecture theory — teach through DOING          |
| L10 SKILL.md library structure explanation                               | Skill file format is for plugin developers, not legal ops |
| L10 legal-global-router.md authoring exercise                            | Students don't author router files; they USE the plugin   |
| L11 market impact analysis (standalone)                                  | Merged into L13 as context for quantification exercise    |
| L11 "Above the Law perspective" / "Artificial Lawyer perspective" quotes | Market commentary without deployable output               |
| L01 lengthy "Five Bottlenecks" theoretical treatment                     | Condensed; discovered through first review output         |
| L02 "Two-Layer Architecture" diagram                                     | Explained by comparison: generic vs. playbook-calibrated  |

---

## 9. IMPLEMENTATION SEQUENCE

```
PHASE 1: New lessons (L04, L06, L09)
- Write 3 new lessons with full YAML frontmatter, 3 Try With AI each
- Generate .flashcards.yaml for each

PHASE 2: Rewritten lessons (L01, L02, L12, L13, L14)
- Rewrite 5 lessons following new structure
- Generate .flashcards.yaml for each

PHASE 3: Refined lessons (L03, L05, L07, L08, L10, L11)
- Add connector dual-mode to exercises
- Add missing features (canned-responses depth in L08, etc.)
- Generate .flashcards.yaml for each

PHASE 4: Companion repo
- Create synthetic exercise data (sample contracts, NDAs, employment agreements)
- Publish as companion repo for downloadable exercise materials

PHASE 5: Quality gates
- /content-evaluation-framework on each lesson
- /fact-check-lesson on each lesson (especially legal terminology, statute references)
- /generate-flashcards for all 14 lessons
- educational-validator on complete chapter
```

---

## 10. SCORECARD TARGETS

| Dimension                       | Current | Target |
| ------------------------------- | ------- | ------ |
| Spec compliance                 | 85%     | 95%+   |
| Anthropic plugin utilisation    | 70%     | 100%   |
| Custom plugin utilisation       | 90%     | 95%+   |
| Deployable artifacts per lesson | 75%     | 100%   |
| Flashcards/Assessment           | 40%     | 100%   |
| MCP/Connector depth             | 50%     | 90%+   |
| Total lessons                   | 12      | 14     |
| Commands taught                 | 5/7     | 7/7    |
| Skills taught                   | 4/6     | 6/6    |
| Connectors taught               | 0/8     | 8/8    |
