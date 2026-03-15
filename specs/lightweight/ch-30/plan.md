# Chapter 19: AI Transformation of CA/CPA Practice Areas — Chapter Plan

**Part**: 3 (Business Domain Agent Workflows)
**Position**: 6th chapter in Part 3 (follows Ch 14-18)
**Chapter number**: 19 (global)
**Filesystem path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/19-ai-transformation-ca-cpa-practice/`
**Governing artifact**: `specs/lightweight/ch-30/governing-artifact.md`
**Source data**: `specs/lightweight/ch-30/Impact of AI on CA Practice Areas - CA Domains AI Impact.csv`
**Lessons**: 16 (including README and chapter quiz)
**Jurisdiction focus**: Pakistan primary, global secondary (IFRS/US GAAP/UK callout boxes)

---

## Design Decisions

1. **Islamic Finance (Ch 20)**: Decision pending — currently planned as a SEPARATE chapter (7th in Part 3). Ch 19 ends with a teaser connecting to Ch 20.
2. **Exercise model**: Hybrid — basic exercises (1-7) embedded inline in domain/tooling lessons; advanced exercises (8-24) in dedicated Practice Lab and capstone lessons. Exercise numbers are sequential within their own series (not 1:1 with lesson numbers).
3. **Downloadables**: Full practice kit — SKILL.md templates, Cowork workflow recipes, and exercise data files.
4. **Pedagogical layer**: L2 (Collaboration) — students already know SKILL.md, Cowork, plugins, knowledge extraction (Ch 14-18). Ch 19 applies those tools to the CA/CPA profession.

---

## Student Prerequisites (from Ch 14-18)

Students arriving at Ch 19 already know:

- Enterprise agentic landscape and why AI matters for professionals (Ch 14)
- Cowork plugin anatomy: SKILL.md structure, MCP connectors, governance (Ch 15)
- Knowledge extraction method: turning expert knowledge into SKILL.md files (Ch 16)
- Finance domain agents: Claude in Excel, Cowork plugins, cross-app workflows, enterprise extensions (Ch 17)
- Intent-Driven Financial Architecture: Named Range design, IDFA methodology (Ch 18)

**Ch 19's unique contribution**: Mapping ALL 5 CA/CPA practice domains against the Gen-AI/Agentic AI spectrum, showing practitioners exactly where automation replaces routine work and where professional judgment becomes more valuable — then building the domain-specific agents for each.

---

## Lesson Breakdown (16 Lessons)

### Lesson 01: The Most Consequential AI Transformation

**Source**: Governing artifact intro (lines 1-53)
**Content**:

- Why CA/CPA profession is the most consequential AI transformation in professional services (3 reasons: regulatory severity, volume of routine work, agentic transition underway)
- The Gen-AI vs Agentic AI distinction for CA/CPA practice (concept box)
- The 5-domain overview table (ranked by AI impact)
- What this chapter builds: domain analysis → Cowork deployment → domain agents

**Pedagogical notes**:

- Opens with the framing that sets up ALL subsequent lessons
- The 5-domain ranking table is the chapter's structural backbone
- No exercise — this is conceptual scaffolding

**Key concepts introduced**: Gen-AI vs Agentic AI in professional services, the 5 CA/CPA domains, AI impact ranking

**Downloadable**: 5-domain reference table (printable one-page summary — domain name, sub-categories, Gen-AI vs Agentic use cases, AI impact rank)

---

### Lesson 02: Domain 1 — Accounting and Financial Reporting

**Source**: Governing artifact Domain 1 (lines 59-127), CSV row 1
**Content**:

- What the domain covers: bookkeeping, financial statements, corporate reporting
- Gen-AI capabilities now: financial statement drafting, disclosure drafting, accounting research
- Concept box: IFRS vs US GAAP (principles-based vs rules-based — why it matters for AI)
- Agentic capabilities approaching: autonomous financial reporting agent, autonomous transactions recording agent
- Real-world deployments: SAP Joule, Oracle Fusion Cloud ERP AI, Numeric AI
- Practitioner and service implications: role restructuring, subscription-based reporting

**Inline exercise**: Practice Exercise 1 — Automating the Month-End Close with Cowork (35 min)

**Global callout**: IFRS vs US GAAP concept box already provides global framing. Add brief UK FRS 101/102 note.

**Downloadable**: Curated deployment links — SAP Joule, Oracle Fusion Cloud ERP AI, Numeric AI (live URLs from governing artifact CSV)

---

### Lesson 03: Domain 2 — Tax and Non-Assurance Advisory

**Source**: Governing artifact Domain 2 (lines 129-197), CSV row 2
**Content**:

- What the domain covers: tax compliance, tax advisory, corporate finance, restructuring
- The bifurcation: compliance (highly automatable) vs advisory (judgment-intensive)
- Concept box: Tax Compliance vs Tax Advisory
- Gen-AI now: tax research, tax computation, due diligence analysis
- Agentic approaching: autonomous tax compliance agent, due diligence agent, restructuring simulation agent
- Real-world: Thomson Reuters CoCounsel, PwC Agent OS, Intuit Assist
- Service implications: advisory-led, AI-augmented practice model

**Inline exercise**: Practice Exercise 2 — Tax Research and Computation with Cowork (25 min)

**Pakistan primary**: Uses Pakistan tax law (ITO 2001) as worked example. Global callout: US IRC / UK HMRC equivalents.

**Downloadable**: Curated deployment links — Thomson Reuters CoCounsel, PwC Agent OS, Intuit Assist

---

### Lesson 04: Domain 3 — Assurance Services

**Source**: Governing artifact Domain 3 (lines 199-260), CSV row 3
**Content**:

- What the domain covers: external audit, internal audit, other assurance
- Concept box: Audit Materiality and Sampling — why AI changes the epistemics of audit
- Gen-AI now: audit documentation, contract analysis, risk identification
- Agentic approaching: autonomous audit agent, continuous audit agent
- Real-world: KPMG Clara, MindBridge AI
- The fundamental shift: sampling → population testing

**Inline exercise**: Practice Exercise 3 — AI-Assisted Audit Risk Assessment (30 min)

**Global callout**: ISA (International Standards on Auditing) used globally; note US PCAOB differences.

**Downloadable**: Curated deployment links — KPMG Clara, MindBridge AI

---

### Lesson 05: Domain 4 — Management Accounting and Financial Management

**Source**: Governing artifact Domain 4 (lines 263-314), CSV row 4
**Content**:

- What the domain covers: FP&A, performance management, treasury
- Connection to Ch 17-18: IDFA methodology and finance plugins apply directly here
- Gen-AI now: variance analysis, budgeting, forecasting
- Agentic approaching: autonomous FP&A agent, autonomous forecasting agent
- Real-world: Pigment AI, Oracle AI Financial Planning
- The professional shift: from model maintenance to business partnering

**Inline exercise**: Practice Exercise 4 — FP&A Workflow with Cowork (30 min)

**Note**: Explicitly connects to IDFA from Ch 18 — the Inp\_ naming conventions, Named Ranges.

**Downloadable**: Curated deployment links — Pigment AI, Oracle AI Financial Planning

---

### Lesson 06: Domain 5 — Governance, Risk and Compliance Advisory

**Source**: Governing artifact Domain 5 (lines 317-384), CSV row 5
**Content**:

- What the domain covers: governance advisory, risk management, internal controls, compliance
- Concept box: The Three Lines of Defence
- Gen-AI now: policy drafting, risk assessment, compliance reporting
- Agentic approaching: continuous controls monitoring agent, autonomous compliance agent
- Real-world: ServiceNow AI Agents, IBM Watsonx Governance
- GRC as the domain where advisory judgment is most resilient

**Inline exercise**: Practice Exercise 5 — Continuous Controls Monitoring Specification (25 min)

**Global callout**: COSO framework (US origin) used globally; note UK Corporate Governance Code, King IV (South Africa).

**Downloadable**: Curated deployment links — ServiceNow AI Agents, IBM Watsonx Governance

---

### Lesson 07: The CA/CPA Plugin Ecosystem

**Source**: Governing artifact Part 2 first half (lines 387-467)
**Content**:

- How Cowork changes CA/CPA practice: 4 core mechanisms (file access, sub-agents, scheduled tasks, plugins)
- Layer 1: knowledge-work-plugins/finance — key commands (/journal-entry, /reconciliation, /income-statement, /variance-analysis, /sox-testing)
- Concept box: What Is SOX (Section 404)
- Layer 2: financial-services-plugins — financial-analysis, equity-research, private-equity plugins
- Installation commands and setup

**Inline exercise**: Practice Exercise 6 — Full Month-End Close Workflow (45 min)

**Downloadable**: Plugin installation guide + folder structure template

---

### Lesson 08: Cowork Workflows for CA/CPA Practice

**Source**: Governing artifact Part 2 second half (lines 470-538)
**Content**:

- Worked example: Month-end close as a Cowork workflow (Day 1 morning → Day 2 complete)
- Cross-app workflow: Accounts to board pack (Excel → PowerPoint)
- How the CA/CPA's time shifts: from executing the close to owning the judgment calls
- Setting Cowork global instructions for CA/CPA context

**Pedagogical notes**: This is a walkthrough lesson — students follow along with a demonstrated workflow, not just read about it. No numbered exercise; the worked example IS the hands-on practice.

**Exercise numbering note**: No gap exists. Inline exercises 1-6 map to L02-L07, Exercise 7 maps to L10. L08 and L09 are instructional lessons (walkthrough and extension-building) without numbered exercises. The exercise numbering (1-24) is sequential within its own series, not 1:1 with lesson numbers.

---

### Lesson 09: Building Jurisdiction and Entity Extensions

**Source**: Governing artifact Part 3 first half (lines 541-581)
**Content**:

- Why generic plugins are not enough: the institutional knowledge gap
- Extension 1: Jurisdiction-specific tax rules — encoding tax code, rates, filing deadlines, penalty provisions
- Extension 2: Chart of accounts encoding — mapping account codes, documentation requirements, intercompany structure
- Pakistan-specific worked example for each extension
- Global callout: US IRC / UK HMRC / IFRS jurisdiction variants

**Downloadable**:

- Pakistan jurisdiction tax SKILL.md template
- Chart of accounts SKILL.md template
- Global variant stubs (UK, US)

---

### Lesson 10: Building Methodology and Compliance Extensions

**Source**: Governing artifact Part 3 second half (lines 583-647)
**Content**:

- Extension 3: Audit methodology standards — materiality, sampling, documentation, escalation
- Extension 4: Client-specific entity knowledge — business model, seasonal patterns, risk areas
- Extension 5: Regulatory compliance calendar — filing deadlines, information checklists, penalty matrix
- Method A interview framework reference (from Ch 16) for building extensions

**Inline exercise**: Practice Exercise 7 — Building a CA/CPA Domain Extension (35 min)

**Downloadable**:

- Audit methodology SKILL.md template
- Client entity SKILL.md template
- Compliance calendar SKILL.md template

---

### Lesson 11: Accounting & Reporting Practice Lab

**Source**: Governing artifact Block A (lines 699-910)
**Content**: Four advanced exercises, each building a complete Cowork workflow:

- Exercise 8: Autonomous Bookkeeping from Source Documents (50 min)
- Exercise 9: IFRS Financial Statements with Full Disclosure Pack (60 min)
- Exercise 10: Scheduled Month-End Close — Setup and Activation (40 min)
- Exercise 11: Multi-Entity Consolidation with Intercompany Elimination (55 min)

**Downloadable**: Exercise data files — trial balances, source document templates, hypothetical entity data

**Pedagogical notes**: Lab format — students choose 1-2 exercises to complete fully, review all four.

---

### Lesson 12: Tax & Advisory Practice Lab

**Source**: Governing artifact Block B (lines 914-1024)
**Content**: Three advanced exercises:

- Exercise 12: Corporate Tax Computation — Full Pakistan Jurisdiction Workflow (45 min)
- Exercise 13: M&A Financial Due Diligence with Plugin Commands (60 min)
- Exercise 14: Restructuring Scenario Modelling (45 min)

**Downloadable**: Hypothetical entity profiles, tax computation templates

**Pakistan primary**: Exercise 12 is Pakistan-specific (ITO 2001). Global callout: note equivalent US Form 1120 / UK CT600 workflows.

---

### Lesson 13: Assurance Practice Lab

**Source**: Governing artifact Block C (lines 1026-1131)
**Content**: Three advanced exercises:

- Exercise 15: Full External Audit Programme with /sox-testing (50 min)
- Exercise 16: Continuous Transaction Monitoring — Fraud Detection Setup (45 min)
- Exercise 17: Internal Audit Report from Working Papers (40 min)

**Downloadable**: Audit working paper templates, fraud detection rule sets, internal audit report template

---

### Lesson 14: Management Accounting & GRC Practice Lab

**Source**: Governing artifact Block D+E (lines 1134-1268)
**Content**: Four advanced exercises:

- Exercise 18: Rolling 13-Week Cash Flow Forecast (50 min)
- Exercise 19: Full Board Pack Automation — Cross-App Cowork Workflow (55 min)
- Exercise 20: Enterprise Risk Register — Build and Scheduled Maintenance (45 min)
- Exercise 21: Regulatory Compliance Calendar — Automated Weekly Monitoring (40 min)

**Downloadable**: Cash flow model template, board pack structure, risk register template, compliance calendar (Pakistan regulatory obligations)

---

### Lesson 15: Cross-Domain Capstones

**Source**: Governing artifact Block F (lines 1271-1355)
**Content**: Two cross-domain capstone exercises that integrate all 5 domains:

- Exercise 22: New Client Onboarding — Full Engagement Setup (60 min) — takes a new textile exporter client from document intake through risk assessment, analytical review, engagement scoping, fee proposal, SKILL.md extensions, and client meeting agenda
- Exercise 23: The Annual Audit Cycle — Planning to Completion (75 min across 3 sessions) — runs the complete external audit cycle:
  - **Session 1 — Planning (25 min)**: Analytical procedures on prior-year financials, materiality calculation, identify significant accounts, draft audit plan. **STOP HERE** — save working papers, resume when ready.
  - **Session 2 — Fieldwork (25 min)**: Revenue cycle testing (sampling + vouching), PPE verification, document test results and findings. **STOP HERE** — save test documentation, resume when ready.
  - **Session 3 — Completion (25 min)**: Evaluate misstatements against materiality, draft management letter, form audit opinion per ISA 700, compile final audit file.

**Pedagogical notes**: Exercise 23 is designed as a multi-session exercise (3 × 25 min) with explicit "stop and resume" markers between sessions. Students can spread it across study periods. Each session produces a self-contained deliverable. This mirrors real audit practice where planning, fieldwork, and completion are distinct phases.

**Downloadable**: New client onboarding workflow recipe, audit cycle working paper pack

---

### Lesson 16: Full Practice Deployment & Reflection

**Source**: Governing artifact Block F (lines 1358-1490) + chapter summary
**Content**: The chapter's culminating lesson (~100 min) — builds and deploys the complete AI-augmented CA/CPA practice:

- Exercise 24: Building the Full Plugin Stack — AI-Augmented Practice Deployment (90 min) — installs and verifies all plugins, builds all 5 SKILL.md extensions, configures full schedule of recurring tasks (monthly/weekly/quarterly), tests end-to-end workflow integration, writes AI practice capabilities statement, performs parallel run quality check, produces deployment documentation.
  - **Step 8 (integrated into Ex 24)**: The CA/CPA AI Transformation Audit — personal reflection as the deployment capstone: map current work across 5 domains, identify automation potential vs. judgment, write 90-day implementation plan. This replaces the former standalone "Final Exercise" — the reflection is more powerful when done immediately after building the full stack.
- Chapter synthesis (~10 min): the boundary between AI execution and professional judgment — "What is the work that only a CA/CPA could do?"
- **Chapter connection**: Teaser to Ch 20 (content TBD — see **BLOCKER** in Implementation Notes)

**Chapter Quiz** (standalone `<Quiz>` component, ~15 questions):

Uses the platform's `<Quiz>` component format (per Ch 17 pattern at `13-chapter-quiz.md`). Questions cover:

- 5 CA/CPA domains and their AI impact ranking
- Gen-AI vs Agentic AI capabilities per domain
- Cowork plugin commands and their domain applications
- Domain agent extension types and their purposes
- Professional judgment boundaries — when the agent should escalate

**Note**: The quiz uses the same `questions` array format as Ch 17 (`question`, `options`, `correctOption`, `explanation`, `source` fields). This is a standalone `<Quiz>` section within L16, not a separate lesson file — keeping it in L16 preserves the 16-lesson structure while using the correct platform component.

**Downloadable**: Practice deployment documentation template, AI capabilities statement template, 90-day implementation plan template

---

## Companion Repo: `panaversity/ca-cpa-domain-agents`

**Pattern**: Follows `panaversity/idfa-financial-architect` (Claude Code plugin + Agent Skills format per agentskills.io spec).

**Installation**: `claude plugin marketplace add panaversity/ca-cpa-domain-agents`
**Alternative**: Download ZIP → point Cowork at `exercises/` folder

### Repo Structure

```
panaversity/ca-cpa-domain-agents/
├── .claude-plugin/
│   ├── plugin.json                    # Plugin metadata (name, version, author)
│   └── marketplace.json               # Marketplace catalog entry
├── skills/                            # Agent Skills format (agentskills.io spec)
│   ├── accounting-reporting/          # Domain 1 agent
│   │   ├── SKILL.md                   # YAML frontmatter + instructions
│   │   └── references/
│   │       └── ifrs-reporting.md
│   ├── tax-advisory/                  # Domain 2 agent
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── pakistan-ito-2001.md
│   ├── assurance/                     # Domain 3 agent
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── isa-standards.md
│   ├── management-accounting/         # Domain 4 agent
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── idfa-integration.md
│   ├── grc-advisory/                  # Domain 5 agent
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── three-lines-defence.md
│   ├── pakistan-tax-jurisdiction/      # Extension 1
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── fbr-rates-calendar.md
│   ├── chart-of-accounts/             # Extension 2
│   │   ├── SKILL.md
│   │   └── assets/
│   │       └── coa-template.csv
│   ├── audit-methodology/             # Extension 3
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── materiality-sampling.md
│   ├── client-entity/                 # Extension 4 (template)
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── client-profile-guide.md
│   └── compliance-calendar/           # Extension 5
│       ├── SKILL.md
│       ├── references/
│       │   └── pakistan-obligations.md
│       └── assets/
│           └── regulatory-calendar.csv
├── exercises/                         # Exercise data files
│   ├── README.md                      # Setup guide + folder structure
│   ├── trial-balances/                # PKR IFRS trial balance (.xlsx/.csv)
│   ├── source-documents/              # Invoices, receipts, bank statements
│   ├── working-papers/                # Audit notes, testing results
│   ├── entity-profiles/               # Manufacturing co, textile exporter
│   └── consolidation/                 # Parent + subsidiary data (Ex 11)
├── workflow-recipes/                  # Cowork scheduled task specifications
│   ├── month-end-close.md            # Each recipe includes "Customize This" section
│   ├── tax-computation.md            #   with jurisdiction/entity variables to adapt
│   ├── audit-programme.md
│   ├── board-pack.md
│   ├── fraud-monitoring.md
│   └── compliance-monitoring.md
├── references/                        # Quick-reference materials
│   └── domain-quick-reference.md      # One-page: 5 domains × Gen-AI/Agentic/plugins/extensions
├── README.md
└── LICENSE
```

### Plugin Dependencies (Anthropic — students install separately)

These are real, existing Anthropic plugins referenced throughout Ch 19:

| Plugin                                          | Install Command                                                       | Commands Used                                                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `finance@knowledge-work-plugins`                | `claude plugin install finance@knowledge-work-plugins`                | `/journal-entry`, `/reconciliation`, `/income-statement`, `/variance-analysis`, `/sox-testing` |
| `financial-analysis@financial-services-plugins` | `claude plugin marketplace add anthropics/financial-services-plugins` | `/dcf`, `/comps`, `/lbo`                                                                       |
| `equity-research@financial-services-plugins`    | (same marketplace add)                                                | Earnings analysis, sector research                                                             |
| `private-equity@financial-services-plugins`     | (same marketplace add)                                                | Deal sourcing, IC memo, portfolio monitoring                                                   |
| `idfa-financial-architect`                      | `claude plugin marketplace add panaversity/idfa-financial-architect`  | IDFA Named Range methodology (Ch 18)                                                           |

### SKILL.md Format (per agentskills.io spec)

Each skill follows the Agent Skills specification:

```yaml
---
name: accounting-reporting # lowercase, hyphenated, matches directory name
description: |
  CA/CPA Domain 1 agent for accounting and financial reporting workflows.
  Use when processing trial balances, preparing financial statements,
  running reconciliations, or drafting disclosures under IFRS or US GAAP.
license: Apache-2.0
metadata:
  author: panaversity
  version: "1.0"
  chapter: "19"
  domain: "1"
---
# Accounting and Financial Reporting Agent

[Instructions for the agent...]
```

### What Students Build vs. What They Download

| Artifact             | Download (reference)      | Student builds (during exercises)       |
| -------------------- | ------------------------- | --------------------------------------- |
| 5 domain SKILL.md    | Reference implementations | Customized to their practice            |
| 5 extension SKILL.md | Pakistan templates        | Their jurisdiction's version            |
| 6 workflow recipes   | Reference specifications  | Customized to their schedule/thresholds |
| Exercise data files  | Pre-built data sets       | N/A (used as inputs)                    |

### Workflow Recipe "Customize This" Sections

Every workflow recipe in `workflow-recipes/` must include a `## Customize This` section at the bottom listing the variables a practitioner should adapt:

```markdown
## Customize This

| Variable              | Default (Pakistan)                      | What to change                       |
| --------------------- | --------------------------------------- | ------------------------------------ |
| Jurisdiction          | Pakistan (FBR, SECP)                    | Your local tax authority + regulator |
| Currency              | PKR                                     | Your reporting currency              |
| Filing deadlines      | Sep 30 (corporate), Dec 31 (individual) | Your jurisdiction's deadlines        |
| Materiality threshold | 2% of revenue                           | Your firm's policy                   |
```

This ensures recipes are immediately actionable for non-Pakistan practitioners without rewriting the entire specification.

### Domain Quick Reference (`references/domain-quick-reference.md`)

A single-page reference mapping all 5 domains to their key components:

| Domain                    | Plugin Commands                                    | SKILL.md Extensions                     | Workflow Recipes                        | Key Exercises |
| ------------------------- | -------------------------------------------------- | --------------------------------------- | --------------------------------------- | ------------- |
| 1. Accounting & Reporting | /journal-entry, /reconciliation, /income-statement | accounting-reporting, chart-of-accounts | month-end-close                         | Ex 1, 8-11    |
| 2. Tax & Advisory         | /dcf, /comps                                       | tax-advisory, pakistan-tax-jurisdiction | tax-computation                         | Ex 2, 12-14   |
| 3. Assurance              | /sox-testing                                       | assurance, audit-methodology            | audit-programme                         | Ex 3, 15-17   |
| 4. Management Accounting  | /variance-analysis                                 | management-accounting, client-entity    | board-pack                              | Ex 4, 18-19   |
| 5. GRC Advisory           | —                                                  | grc-advisory, compliance-calendar       | compliance-monitoring, fraud-monitoring | Ex 5, 20-21   |

Students download this as L01's companion — it serves as the chapter's structural map throughout.

---

## Implementation Notes

### BLOCKER: Ch 20 Identity

**Status**: UNRESOLVED — must be decided before L16 content generation.

The governing artifact ends with "Continue to Chapter 20: Legal and Compliance Domain Agents →" but `specs/chapter 20 islamic finance/` contains Islamic Finance content. Options:

1. Ch 20 = Legal & Compliance, Ch 21 = Islamic Finance
2. Ch 20 = Islamic Finance (Rehan's folder), Legal & Compliance elsewhere
3. Combined chapter

**Impact on L16**: The chapter teaser/connection text in L16 cannot be written until this is resolved. All other lessons (L01-L15) can proceed independently.

**Action**: Escalate to Rehan before L16 enters content generation.

### Plugin Availability Disclaimer

All Anthropic plugin references (`knowledge-work-plugins/finance`, `financial-services-plugins`) were verified as real repositories at time of planning (March 2026). However:

- Plugin availability, command names, and installation methods may change
- Content generation should include a disclaimer in L07: _"Plugin commands and installation steps shown here reflect the current Cowork ecosystem. Check the plugin repository for the latest version before installing."_
- Exercise instructions should use command names as **examples** rather than hard-coding them as the only path — include fallback instructions for manual execution if plugins are unavailable

### Content Generation

- Each lesson MUST be generated via `content-implementer` subagent (per CLAUDE.md rules)
- Reference lesson for quality standard: Ch 17 lessons (same Part 3, same domain-agent pattern)
- All lessons require full YAML frontmatter with skills, learning_objectives, proficiency levels

### Pakistan-Primary, Global-Secondary Pattern

- All worked examples use PKR, Pakistan regulations (ITO 2001, SECP, FBR, SBP)
- Every lesson with jurisdiction-specific content includes a "Global Perspective" callout box
- Global callouts cover: IFRS (worldwide), US GAAP + IRC (US), FRS + HMRC (UK)
- Never present Pakistan as the only option — always "Pakistan is our worked example; your jurisdiction has equivalent requirements"

### Concept Boxes (from governing artifact)

The following concept boxes appear in the governing artifact and should be preserved:

1. Gen-AI vs Agentic AI (Lesson 01)
2. IFRS vs US GAAP (Lesson 02)
3. Tax Compliance vs Tax Advisory (Lesson 03)
4. Audit Materiality and Sampling (Lesson 04)
5. Three Lines of Defence (Lesson 06)
6. What Is SOX (Lesson 07)
7. Cowork's Key Architecture (Lesson 08)

### Exercise Timing

- Inline exercises (Lessons 02-07, 10): 25-45 minutes each
- Practice Lab exercises (Lessons 11-14): 40-60 minutes each, students choose 1-2 per lab
- Cross-domain capstones (Lesson 15): Ex 22 (60 min) + Ex 23 (75 min across 3 sessions)
- Full practice deployment (Lesson 16): Ex 24 with integrated reflection (~100 min) + chapter quiz (~15 min)
- Total exercise time: ~16 hours across all 24 exercises (Final Exercise merged into Ex 24 Step 8)

### Connection to Ch 20

**Note**: The governing artifact ends with "Continue to Chapter 20: Legal and Compliance Domain Agents →" — which differs from the `specs/chapter 20 islamic finance/` folder that contains Islamic Finance content. This suggests Rehan may envision:

- Ch 20 = Legal and Compliance Domain Agents (a different chapter)
- Islamic Finance = a separate chapter beyond Ch 20, OR folded into Ch 19/20

**Decision**: PENDING — needs clarification from Rehan on:

1. Is Ch 20 "Legal and Compliance" or "Islamic Finance"?
2. If both exist, what's the chapter ordering?
3. Does Islamic Finance warrant its own chapter (recommended) or fold into one of these?

**Current plan accommodates**: Lesson 16 ends with a teaser to whatever Ch 20 turns out to be.
