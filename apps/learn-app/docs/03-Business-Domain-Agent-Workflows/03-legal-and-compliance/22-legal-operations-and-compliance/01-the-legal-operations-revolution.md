---
sidebar_position: 1
title: "The Legal Operations Revolution"
description: "Install the Anthropic Legal Plugin and Agent Factory Legal Ops extension in Cowork, configure MCP connectors, run your first contract review with GREEN/YELLOW/RED classification, and discover the governing principle of legal AI through output"
keywords:
  [
    "legal AI",
    "Claude Legal Plugin",
    "legal operations",
    "contract review AI",
    "Cowork legal plugin",
    "Anthropic legal tech",
    "legal ops automation",
    "ABA Model Rules",
    "SRA Code of Conduct",
    "GREEN YELLOW RED",
    "attorney review required",
    "negotiation playbook",
    "Noor Technologies",
    "legal plugin installation",
  ]
chapter: 22
lesson: 1
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Verify Legal Plugins in Cowork"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can install both plugin layers (Anthropic Legal base + Agent Factory Legal Ops extension), verify installation by running /review-contract, and confirm structured output with ATTORNEY REVIEW: REQUIRED header"

  - name: "Run and Interpret a Contract Review with GREEN/YELLOW/RED Classification"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can upload a vendor agreement, run /review-contract, read the three-tier classification output, and identify which clauses are GREEN (acceptable), YELLOW (negotiate), and RED (escalate to attorney)"

  - name: "Discover the Governing Principle of Legal AI Deployment"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can articulate the principle that the agent reviews, triages, drafts, and flags while the licensed attorney advises, decides, and signs, discovered through reading the output header rather than being told"

learning_objectives:
  - objective: "Install the Anthropic Legal Plugin and Agent Factory Legal Ops extension in Cowork and verify correct two-layer installation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates successful installation by running /review-contract and receiving structured output with the ATTORNEY REVIEW: REQUIRED header"

  - objective: "Run a contract review against a sample vendor SaaS agreement and interpret the GREEN/YELLOW/RED clause classification"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Student uploads a contract, predicts the overall assessment before running /review-contract, then compares their prediction against the actual output and identifies at least one RED flag they did not expect"

  - objective: "Explain why legal AI requires a strict boundary between agent analysis and attorney decision-making, referencing the output header and professional conduct rules"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student reads the ATTORNEY REVIEW: REQUIRED header in their own output and can state the governing principle in their own words, naming at least one professional conduct framework (ABA Model Rules or SRA Code of Conduct)"

cognitive_load:
  new_concepts: 6
  assessment: "6 concepts (two-layer plugin architecture, Cowork plugin installation, MCP connectors, GREEN/YELLOW/RED classification, ATTORNEY REVIEW: REQUIRED header, five pre-AI bottlenecks) at the upper boundary of A2 range. Installation is procedural and low-load. The contract review output introduces classification and the governing principle through discovery. Concepts build sequentially: install before run, run before interpret, interpret before discover the principle."

differentiation:
  extension_for_advanced: "Run /review-contract on a real vendor agreement from your own organisation. Compare the GREEN/YELLOW/RED distribution against the CloudStack sample. Note which clause types your organisation's contracts flag differently and why."
  remedial_for_struggling: "Focus on installing both plugins and running /review-contract on the sample text. If you can see the ATTORNEY REVIEW: REQUIRED header and identify at least one RED clause, you have the foundation for Lesson 2."
---

# The Legal Operations Revolution

Ayesha Malik has 37 contracts waiting for review. She is the General Counsel at Noor Technologies, an 85-person cloud ERP company in Karachi that builds production planning and export documentation software for textile manufacturers. Her legal team is two people: Ayesha and Bilal Ahmad, her Legal Operations associate. Three vendor auto-renewals slipped past them last quarter -- one for a cloud infrastructure provider that cost PKR 4.8M she had been planning to renegotiate. A data subject access request from a former European client has been sitting unanswered for 26 days. The GDPR clock gives her 30.

Bilal spends 60% of his time on administrative coordination -- forwarding contracts to the right person, chasing signatures, sending deadline reminders by email. Forty percent of his time goes to actual legal work. That ratio is inverted from what Ayesha needs. She needs Bilal reviewing clause language and flagging risk. Instead he is a human router.

This chapter gives Ayesha's two-person team the operational capacity of six. By the end of this lesson you will have installed two plugin layers, run your first contract review with structured risk classification, and discovered the single principle that governs every legal AI workflow in this chapter.

## Install Both Plugins

This chapter uses two plugin layers in Cowork: the **Anthropic Legal Plugin** (base) and the **Agent Factory Legal Ops extension** (ours). The base plugin provides seven commands and six skills for contract review, NDA triage, compliance, briefings, and templated responses. The extension adds nine skills, four commands, and six jurisdiction overlays for cross-border legal work.

**Prerequisites:** The Claude desktop app with Cowork enabled. Cowork is available on Pro, Max, Team, and Enterprise plans.

**Step 1.** Open the Claude desktop app and select the **Cowork** tab. If you do not see it, check your subscription at [claude.ai/settings](https://claude.ai/settings).

**Step 2.** Install the Anthropic Legal Plugin. In the Cowork sidebar, click **Customize**, then **Browse plugins**. Find **Legal** and click **Install**.

**Step 3.** Install the Agent Factory Legal Ops extension. In the Cowork sidebar: **Customize**, then **Browse plugins**, then **Personal**, then click the **+** button. Select **Add marketplace from GitHub** and enter:

```
https://github.com/panaversity/agentfactory-business-plugins
```

Find **Legal Ops** in the marketplace list and click **Install**.

**Step 4.** Connect a working folder. Click **Work in a folder** and select or create a folder on your computer for this chapter's practice files (for example, `legal-practice/`). This gives the agent a place to read and write sample legal documents.

**Step 5.** Verify the installation. Type `/review-contract` in the Cowork chat. The command should auto-complete. If it does not appear, return to **Customize** and confirm both plugins show as installed.

## Connect Your Tools (Optional)

Cowork can read and create Office, PDF, and text files directly through built-in file skills -- no connectors needed for document review. If your workflows need to reach enterprise systems, open **Customize** and select **Connectors** to link your tools.

| Category          | Recommended Server          | What It Enables                                                |
| ----------------- | --------------------------- | -------------------------------------------------------------- |
| **Email**         | Gmail                       | Agent reads your legal inbox for intake and correspondence     |
| **Calendar**      | Google Calendar              | Agent reads meeting context for briefing prep                  |
| **Chat**          | Slack                       | Agent posts alerts and escalation notices to your channels     |
| **Cloud storage** | Box or Egnyte               | Agent accesses your document management system                 |
| **E-signature**   | DocuSign                    | Agent routes documents for e-signature (Lesson 4 onward)      |
| **Project tracker** | Atlassian (Jira/Confluence) | Agent logs matters and tracks obligations                     |
| **CRM**           | Salesforce or HubSpot       | Agent cross-references vendor and client records               |
| **Office suite**  | Microsoft 365               | Agent reads and creates Word, Excel, and PowerPoint files      |

**Minimum recommended:** Gmail and Google Calendar. Both are free and unlock meeting prep and email-based intake in later lessons.

If you have these accounts, connect them now. If you do not, skip this section entirely. Both paths produce the same quality output -- with connectors the agent reads live data, without them you upload documents and provide context in prompts.

## Your First Contract Review

Upload or paste the following sample vendor SaaS agreement into Cowork. This is a standard agreement from CloudStack Inc., a cloud infrastructure vendor, to Noor Technologies.

```
MASTER SERVICES AGREEMENT

This Master Services Agreement ("Agreement") is entered into as of
March 1, 2026, by and between CloudStack Inc., a Delaware corporation
("Provider"), and Noor Technologies (Pvt) Ltd, a company incorporated
under the laws of Pakistan ("Customer").

1. SERVICES
Provider shall provide cloud infrastructure services as described
in the applicable Service Order Form(s).

2. TERM AND RENEWAL
Initial term: 24 months from the Effective Date.
Auto-renewal: This Agreement shall automatically renew for successive
12-month periods unless either party provides written notice of
non-renewal at least 30 days prior to the end of the then-current term.

3. FEES AND PAYMENT
Customer shall pay all fees set forth in the Service Order Form within
45 days of invoice date. Late payments accrue interest at 1.5% per month.

4. LIMITATION OF LIABILITY
Provider's total aggregate liability under this Agreement shall not
exceed the fees paid by Customer in the three (3) months immediately
preceding the claim. In no event shall Provider be liable for any
indirect, incidental, special, consequential, or punitive damages.

5. INDEMNIFICATION
Customer shall indemnify, defend, and hold harmless Provider against
all claims, damages, and expenses arising from Customer's use of
the Services.

6. DATA PROTECTION
Provider shall process Customer Personal Data in accordance with
applicable data protection laws. Provider may transfer data to
any jurisdiction where Provider maintains facilities.

7. INTELLECTUAL PROPERTY
All intellectual property developed by Provider in connection with
the Services shall remain the sole property of Provider, including
any customisations or configurations created for Customer.

8. TERMINATION
Either party may terminate for material breach upon 30 days' written
notice if the breach remains uncured. Upon termination, Customer
shall pay all outstanding fees. Provider shall have no obligation
to return or migrate Customer data after termination.

9. GOVERNING LAW
This Agreement shall be governed by the laws of the State of Delaware,
without regard to conflict of laws principles. Any disputes shall be
resolved by binding arbitration in Wilmington, Delaware.

10. ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the parties.
```

**Prediction moment.** Read the agreement above before running the command. Predict: will the overall assessment be "proceed," "proceed with modifications," or "escalate to attorney"? Write your prediction down.

Now run:

```
/review-contract
```

**Expected output:**

```
══════════════════════════════════════════════════════════════
     ATTORNEY REVIEW: REQUIRED
     Contract Review — CloudStack Inc. MSA
     Generated: 2026-03-11
══════════════════════════════════════════════════════════════

OVERALL ASSESSMENT: PROCEED WITH MODIFICATIONS
7 clauses require attention before execution.

─────────────────────────────────────────────────────────────
CLAUSE-BY-CLAUSE ANALYSIS
─────────────────────────────────────────────────────────────

GREEN — Acceptable as Written
┌──────────────────────────────────────────────────────────┐
│ § 1. Services         Standard service description       │
│ § 10. Entire Agreement  Standard integration clause      │
└──────────────────────────────────────────────────────────┘

YELLOW — Negotiate Before Signing
┌──────────────────────────────────────────────────────────┐
│ § 2. Auto-Renewal     30-day notice is short for a       │
│                       24-month commitment. Industry       │
│                       standard: 60-90 days.              │
│                                                          │
│ § 3. Late Payment     1.5% per month (18% annualised)    │
│                       exceeds typical commercial rates.   │
│                       Recommend: cap at SBP policy rate   │
│                       + 2%.                               │
│                                                          │
│ § 5. Indemnification  One-sided. Customer indemnifies     │
│                       Provider but not vice versa.        │
│                       Recommend: mutual indemnification.  │
└──────────────────────────────────────────────────────────┘

RED — Escalate to Attorney
┌──────────────────────────────────────────────────────────┐
│ § 4. Liability Cap    3 months' fees is significantly     │
│                       below market standard (12 months).  │
│                       On a PKR 4.8M annual contract,      │
│                       this caps liability at PKR 1.2M.    │
│                       RECOMMENDATION: Reject. Negotiate   │
│                       to 12 months' fees minimum.         │
│                                                          │
│ § 6. Data Transfer    "Any jurisdiction where Provider    │
│                       maintains facilities" has no        │
│                       restrictions. Potential PDPA 2023   │
│                       conflict for Pakistani data         │
│                       subjects. Requires adequacy         │
│                       assessment or SCCs.                 │
│                                                          │
│ § 7. IP Ownership     All IP including "customisations    │
│                       or configurations created for       │
│                       Customer" belongs to Provider.      │
│                       This means custom integrations      │
│                       built for Noor are not yours.       │
│                       RECOMMENDATION: Carve out           │
│                       customer-specific configurations.   │
│                                                          │
│ § 8. Data on          No obligation to return or migrate  │
│      Termination      Customer data. Combined with § 7,   │
│                       Customer loses both IP and data     │
│                       upon termination.                   │
│                       RECOMMENDATION: Add 90-day data     │
│                       migration period, data return in    │
│                       standard format.                    │
│                                                          │
│ § 9. Governing Law    Delaware law + Wilmington           │
│                       arbitration. Pakistani company      │
│                       forced to litigate in US.           │
│                       RECOMMENDATION: Negotiate to        │
│                       Pakistan-seated arbitration or      │
│                       English law neutral venue.          │
└──────────────────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════
```

**Calibration.** Compare your prediction to the actual output. Most students predict "proceed" because the agreement looks standard at first read. The RED flags surprise them. Five of ten clauses require attention. The liability cap, data transfer, IP ownership, data on termination, and governing law clauses each carry material risk that a quick manual read could miss.

Notice the header at the top of the output: **ATTORNEY REVIEW: REQUIRED**. That header appears on every output the Legal Plugin produces. It is not optional and it cannot be removed.

## The Five Bottlenecks

Before this plugin existed, how would Ayesha handle 37 contracts with a two-person team? Think about it for a moment. She would triage by urgency, review the most critical ones herself, delegate simpler NDAs to Bilal, and let the rest sit in the queue. Some would auto-renew without scrutiny. Compliance gaps would go unnoticed until an incident forced attention. Knowledge about past deals and standard positions would live in Ayesha's inbox, inaccessible to Bilal.

These five bottlenecks appear in virtually every legal department that operates without automation:

| Bottleneck                        | The Problem                                                                                                        | Plugin Command That Addresses It |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| **Contract review queues**        | Standard vendor agreements sit unreviewed for days because every clause needs attorney time                          | `/review-contract`               |
| **NDA backlogs**                  | Incoming confidentiality agreements pile up while the team handles higher-priority matters                           | `/triage-nda`                    |
| **Compliance monitoring gaps**    | Regulatory changes tracked manually with no systematic process for identifying which policies need updating          | `/compliance-check`              |
| **Knowledge management failures** | Institutional knowledge about past deals and standard positions locked in individual email inboxes                   | Negotiation playbook (Lesson 2)  |
| **Reporting blind spots**         | No visibility into contract pipeline, approval cycle times, or clause-level risk exposure                            | `/brief`                         |

The contract review you ran a moment ago addressed the first bottleneck. A review that would have taken Ayesha 45 minutes of close reading produced a structured risk analysis in under two minutes. Multiply that across 37 contracts.

## The Governing Principle

Look at the output header again: **ATTORNEY REVIEW: REQUIRED**.

Why does the agent refuse to approve the contract? Why does it classify and recommend rather than decide?

The answer is the principle that governs every workflow in this chapter:

> **The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.**

This is not a limitation of current AI capability. It is the correct architecture for legal deployment, and it is built into the plugin itself.

The legal profession has specific rules of professional conduct that create this boundary. The **ABA Model Rules of Professional Conduct** in the United States require competence (Rule 1.1) and supervision of nonlawyer assistants (Rule 5.3) -- including AI tools. ABA Formal Opinion 512 (2024) confirmed that generative AI falls under Rule 5.3: lawyers must review AI outputs with the same diligence they would apply to work from a junior associate.

The **SRA Code of Conduct** in England and Wales requires solicitors to maintain competence and legal knowledge (paragraph 3.2 and 3.4) and effectively supervise all work undertaken for the client (paragraph 3.5(b)). The SRA's guidance states that solicitors may use AI tools but remain personally responsible for all work product.

In Pakistan, the Pakistan Bar Council and provincial bar councils regulate legal practice under the Legal Practitioners and Bar Councils Act, 1973. In the UAE, Federal Decree-Law No. 34 of 2022 governs advocates, while DIFC and ADGM have their own practitioner regulations.

In every jurisdiction, the principle holds: the agent assists, the licensed professional decides.

| What the Agent Does                  | What the Attorney Does             |
| ------------------------------------ | ---------------------------------- |
| Reviews contracts clause-by-clause   | Makes the commercial judgment call |
| Classifies risk as GREEN/YELLOW/RED  | Decides which RED items to accept  |
| Drafts redline suggestions           | Reviews and sends the redline      |
| Flags regulatory compliance issues   | Interprets the regulatory impact   |
| Produces briefings and summaries     | Signs off on advice to business    |

## What You Built

1. Both plugins installed and verified -- Anthropic Legal Plugin (base) and Agent Factory Legal Ops extension
2. MCP connectors configured for enterprise tools (optional)
3. First contract review output with GREEN/YELLOW/RED clause classification on the CloudStack vendor agreement
4. Understanding of the governing principle -- discovered through the ATTORNEY REVIEW: REQUIRED header, not told as a lecture
5. Five pre-AI bottlenecks identified and mapped to the plugin commands that address each

## Try With AI

**Setup:** Use these prompts in Cowork with the Legal Plugin and Legal Ops extension installed.

### Prompt 1: Reproduce

```
/review-contract
```

Upload or paste the CloudStack vendor agreement from this lesson. Compare your output to the reference output above. The structure should match -- GREEN/YELLOW/RED classification with clause-by-clause analysis. The specific recommendations may vary between runs, which is itself a reason the attorney review header exists.

**What you are learning:** How the `/review-contract` command structures a clause-by-clause risk analysis into three tiers. GREEN clauses need no attention. YELLOW clauses are negotiation points. RED clauses require attorney escalation before the agreement can proceed. This triage structure is the foundation of every contract workflow in this chapter.

### Prompt 2: Adapt

```
Review the CloudStack agreement, but assume Noor Technologies is
governed by English law rather than Pakistani law. What changes
in the RED flags? Specifically: does the governing law clause
(Section 9) still flag RED, and does the data transfer clause
(Section 6) flag differently under UK GDPR versus PDPA 2023?
```

**What you are learning:** Jurisdiction changes the risk analysis. A governing law clause that is RED for a Pakistani company (forced to litigate in Delaware) may be YELLOW for a UK company (English law is often acceptable as neutral ground). The data transfer clause may flag differently because UK GDPR has specific adequacy decisions that PDPA 2023 does not yet have. Recognising how jurisdiction shifts risk classification is the foundation for the cross-border work in Lesson 4.

### Prompt 3: Apply

```
I am a [your role] at [your organisation]. We recently signed or
are reviewing a vendor agreement. Describe the agreement in 2-3
sentences — the vendor, the service, the approximate annual value,
and the governing law.

Based on this description, which of the five bottlenecks (contract
review queues, NDA backlogs, compliance gaps, knowledge management
failures, reporting blind spots) is the biggest problem in your
legal workflow today? Explain why, and identify which Legal Plugin
command would address it first.
```

**What you are learning:** The five bottlenecks are not abstract categories. They map to specific pain in your own organisation. Identifying your primary bottleneck determines which plugin command you configure first and which lesson in this chapter delivers the most immediate value to your team.
