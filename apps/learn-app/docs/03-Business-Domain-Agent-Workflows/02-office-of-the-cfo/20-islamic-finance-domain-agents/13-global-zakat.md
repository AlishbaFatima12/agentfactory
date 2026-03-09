---
slug: /Business-Domain-Agent-Workflows/islamic-finance-domain-agents/global-zakat
sidebar_position: 13
title: "Global Zakat Accounting"
description: "Compare zakat calculation methodologies across four jurisdictions — ZATCA equity-based formula (Saudi Arabia), AAOIFI/Hanafi liquid assets formula, Malaysia voluntary zakat, and Pakistan Zakat and Ushr deduction-at-source — and build a global zakat SKILL.md that routes the correct formula by jurisdiction"
keywords:
  [
    "zakat accounting",
    "ZATCA zakat",
    "AAOIFI Governance Standard 9",
    "Zakat and Ushr Ordinance",
    "nisab threshold",
    "zakatable assets",
    "institutional zakat",
    "Hanafi zakat",
    "purification",
    "non-Shariah income",
    "zakat journal entry",
    "global Islamic finance",
  ]
chapter: 20
lesson: 13
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Compare Zakat Computation Across Four Jurisdictions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can identify the correct zakat formula for a given jurisdiction, explain why the ZATCA equity-based formula and the AAOIFI/Hanafi liquid-assets formula produce different zakat obligations for the same bank, and map the accounting treatment (P&L expense vs equity appropriation vs footnote-only) by jurisdiction"

  - name: "Build a Global Zakat SKILL.md"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can draft a global zakat SKILL.md that specifies the mandatory vs voluntary status, correct formula, accounting treatment, journal entry sequence, and disclosure requirements for each of four jurisdictions, with a routing instruction that selects the correct formula automatically"

  - name: "Execute Institutional Zakat Calculations with Jurisdiction-Specific Rules"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can calculate zakat under both the ZATCA equity-based formula and the Hanafi liquid-assets formula for a given bank's balance sheet, generate the correct journal entries for each jurisdiction, and identify when Pakistan's deduction-at-source mechanism applies"

learning_objectives:
  - objective: "Analyze the differences between ZATCA equity-based zakat, AAOIFI/Hanafi liquid-assets zakat, and Pakistan deduction-at-source zakat, explaining why each produces a different obligation for the same institution"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student produces a comparison table showing the zakat base, rate, payer, and accounting treatment across four jurisdictions and explains in writing which formula produces the higher obligation for a bank with large long-term investments versus a bank with predominantly liquid assets"

  - objective: "Apply the ZATCA and Hanafi zakat formulas to a bank's balance sheet data and generate the correct journal entries for each jurisdiction"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student completes Exercise 10 Steps 2-4, producing correct zakat calculations under both formulas with appropriate journal entries and identifying the pass-through accounting for Pakistan's Zakat and Ushr deductions"

  - objective: "Create a global zakat SKILL.md that routes the correct formula, accounting treatment, and disclosure requirements by jurisdiction"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student drafts a complete SKILL.md with jurisdiction routing logic, formula specifications, journal entry templates, and disclosure requirements for four jurisdictions"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "ZATCA equity-based zakat formula (share capital + reserves - fixed assets - long-term investments)"
    - "Hanafi/AAOIFI liquid-assets zakat formula (zakatable assets - current liabilities)"
    - "Pakistan Zakat and Ushr Ordinance deduction-at-source mechanics"
    - "Nisab threshold and lunar year minimum balance rule"
    - "Zakat accounting treatment variation: P&L expense vs equity appropriation vs footnote"
    - "Non-Shariah income purification obligation"
  assessment: "6 concepts at B1 level. Students have completed jurisdiction deep-dives in Lessons 8-11 and are now applying multi-jurisdiction comparison to a universal Islamic finance obligation. The zakat topic integrates prior jurisdiction knowledge rather than introducing entirely new frameworks."

differentiation:
  extension_for_advanced: "Research the scholarly debate between the Hanafi and Shafi'i methodologies for institutional zakat. The Shafi'i methodology includes agricultural produce and livestock — irrelevant for an IFI but critical for zakat on real assets. Draft a comparative note explaining when each methodology produces a materially different result for a diversified Islamic conglomerate with both financial and agricultural holdings."
  remedial_for_struggling: "Focus on Step 1 (the comparison table) and Step 2 (Saudi ZATCA calculation) only. The ZATCA formula is the most important single piece of knowledge because Saudi Arabia is the world's largest Islamic finance market. If you can calculate ZATCA zakat and explain why it differs from the Hanafi formula, you have the core concept."
---

# Global Zakat Accounting

In Lessons 8-11, you built jurisdiction-specific SKILL.md overlays for Saudi Arabia, Malaysia, Pakistan, and Bahrain. Now you will apply those overlays to the one Islamic finance obligation that is universal across all jurisdictions: zakat.

Zakat is the obligatory Islamic alms payment — 2.5% of qualifying wealth above the nisab threshold, calculated on a lunar year basis. Every Islamic financial institution in every jurisdiction must address it. What surprises even experienced practitioners is that the **same bank** produces a **different zakat obligation** depending on which jurisdiction's formula governs. The ZATCA equity-based formula used in Saudi Arabia starts from shareholders' equity. The AAOIFI/Hanafi formula used in most other jurisdictions starts from liquid trade assets. For a bank with substantial long-term investments and fixed assets, these two formulas can produce materially different numbers from identical balance sheet data.

This lesson builds a global zakat comparison framework, works through the calculation under each jurisdiction's rules, and then encodes the routing logic into a global zakat SKILL.md that an AI agent can activate before generating any zakat output.

---

## The Global Zakat Landscape

Zakat treatment for Islamic financial institutions varies by jurisdiction across three dimensions: whether it is mandatory or voluntary, which formula governs, and how it appears in the financial statements.

| Jurisdiction     | Mandatory?                      | Formula                        | Payer                                 | Accounting Treatment                                     |
| ---------------- | ------------------------------- | ------------------------------ | ------------------------------------- | -------------------------------------------------------- |
| **Saudi Arabia** | Mandatory (ZATCA)               | Equity-based                   | IFI pays to ZATCA                     | P&L expense (replaces income tax for Saudi-owned equity) |
| **Pakistan**     | Mandatory (deduction at source) | Ordinance-specified            | Bank deducts as agent                 | Pass-through — not the IFI's expense                     |
| **Bahrain**      | Voluntary (institutional)       | AAOIFI GS9 / Hanafi            | IFI may pay on behalf of shareholders | Disclosure in annual report                              |
| **Malaysia**     | Voluntary                       | AAOIFI GS9 / Hanafi or Shafi'i | IFI voluntary                         | Disclosure in annual report                              |

The accounting treatment column is where most practitioners encounter their first surprise. In Saudi Arabia, zakat is a **P&L expense** — it replaces income tax for Saudi-owned companies. In Pakistan, the bank is merely an **agent** collecting zakat from depositors and remitting it to the Central Zakat Administration — the deduction never hits the bank's income statement. In Malaysia and Bahrain, institutional zakat is **voluntary**, and many IFIs pay it as a discretionary act endorsed by their Shariah Supervisory Board.

---

## The Two Competing Formulas

The ZATCA zakat calculation method — base formula, adjustment items, journal entries, and the distinction between equity-based and liquid-assets-based approaches — was covered in detail in [Lesson 10](./10-saudi-arabia.md). This lesson focuses on comparing the ZATCA method with the Hanafi, Malaysian, and Bahraini approaches and building a skill that routes to the correct formula by jurisdiction.

The critical distinction: the ZATCA formula starts from the **equity side** of the balance sheet (share capital + reserves + retained earnings, minus fixed assets and long-term investments). The AAOIFI/Hanafi formula starts from the **asset side** (liquid trade assets minus current liabilities). For the same bank, these two starting points produce different zakat obligations.

### Why the Two Formulas Produce Different Results

Consider a bank with: Share capital $10B, retained earnings $5B, reserves $3B, fixed assets $2B, long-term investments $8B, liquid assets $12B, current liabilities $6B.

|                    | ZATCA Formula                                | Hanafi Formula           |
| ------------------ | -------------------------------------------- | ------------------------ |
| **Starting point** | Equity: $10B + $5B + $3B = $18B              | Liquid assets: $12B      |
| **Deductions**     | Fixed assets $2B + LT investments $8B = $10B | Current liabilities: $6B |
| **Zakat base**     | $18B − $10B = **$8B**                        | $12B − $6B = **$6B**     |
| **Zakat at 2.5%**  | **$200M**                                    | **$150M**                |

The ZATCA formula produces a **higher** obligation here because the bank's equity exceeds its net liquid assets. For a bank with predominantly liquid assets and minimal fixed assets, the Hanafi formula might produce the higher number. The practitioner must know which formula governs before calculating.

---

## Pakistan: Zakat and Ushr Ordinance 1980

Pakistan's mechanism is structurally different from both Saudi Arabia and the Hanafi institutional model. Under the Zakat and Ushr Ordinance, banks **deduct zakat at source** from qualifying deposit accounts:

- **Which accounts:** Savings accounts, Profit and Loss Sharing (PLS) accounts, and other qualifying deposit accounts
- **When:** On the first day of Ramadan each lunar year
- **Rate:** 2.5% of the account balance on that date (if balance exceeds nisab)
- **Exemptions:** Account holders may submit a declaration form to claim exemption

The bank acts as a **wakeel** (agent) for the Central Zakat Administration. The deduction is **not the IFI's own zakat** — it is a pass-through.

**Journal entry in the bank's books:**

```
On deduction date:
Dr: Depositor's Account               [Zakat amount]
Cr: Zakat Payable — Central Zakat Admin [Same]

On remittance:
Dr: Zakat Payable — Central Zakat Admin [Amount]
Cr: Cash / Remittance Account          [Amount]
```

This entry never touches the bank's income statement. It is a liability-to-liability movement from the depositor's account to the Zakat Fund.

---

## Non-Shariah Income Purification

Across all jurisdictions, when an IFI receives income from non-Shariah-compliant sources — penalty charges that cannot be retained, inadvertent interest income, or dividends from companies with non-halal revenue — the income **cannot be retained**. It must be donated to charity (sadaqah).

**Journal entry (all jurisdictions):**

```
Dr: Non-Shariah Income Received        [Amount]
Cr: Charity Payable — Purification     [Amount]
```

In AAOIFI disclosures, the amount and recipient charity must be disclosed and confirmed by the SSB.

---

:::info Exercise Requirements

**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)
**Exercise data:** Download [`islamic-finance-exercise-data.zip`](https://github.com/panaversity/agentfactory-business-plugins/releases/latest) and find `exercises/ex09-global-zakat-comparison.md`
:::

## Exercise 10: Global Zakat Comparison

**What you will build:** A global zakat comparison framework across four jurisdictions, with calculations under each formula and a deployable global zakat SKILL.md.

**Requirements:** Cowork or your preferred AI assistant, spreadsheet capability. 40 minutes.

### Step 1 — Build the Global Comparison Framework

In Cowork, say:

```
Compare the institutional zakat frameworks across four jurisdictions:
(1) Saudi Arabia — ZATCA mandatory, equity-based formula
(2) Pakistan — Zakat and Ushr Ordinance 1980, deduction at source
(3) Malaysia — voluntary, AAOIFI GS9 / Hanafi methodology
(4) Bahrain — voluntary, AAOIFI GS9

Build a comparison table covering: Legal basis, Calculation method,
Rate, Filing deadline, Regulator, Accounting treatment (P&L expense
vs pass-through vs equity appropriation vs footnote-only).
Save to /outputs/zakat-comparison.xlsx.
```

Review the output. Confirm each jurisdiction's treatment matches the rules from your jurisdiction SKILL.md overlays built in Lessons 8-11.

### Step 2 — Saudi ZATCA Zakat Computation

Apply the ZATCA formula to Al Rajhi Bank scale:

```
Apply the ZATCA zakat base formula to a Saudi IFI with these figures:
Share capital SAR 40B, retained earnings SAR 28B, statutory reserves
SAR 18B, fixed assets SAR 6B, long-term investments SAR 45B.

(1) Calculate the ZATCA zakat base
(2) Calculate the zakat obligation at 2.5%
(3) Generate the journal entry
(4) Note: for a bank with 80% Saudi ownership and 20% foreign
ownership, how is the zakat/tax split calculated?
```

Check: the zakat base should be (40 + 28 + 18) − (6 + 45) = SAR 35B. Zakat = SAR 875M. The foreign-owned 20% pays income tax at 20% on its share of profits instead.

### Step 3 — Malaysia Voluntary Zakat (Hanafi Methodology)

```
Apply the Hanafi methodology to Maybank Islamic scale:
Zakatable assets: cash MYR 12B, murabaha receivables (net) MYR 85B,
sukuk investments MYR 32B. Non-zakatable: fixed assets MYR 4B,
long-term investments MYR 8B. Current liabilities: MYR 45B.

(1) Calculate net zakatable wealth
(2) Apply the nisab check (gold nisab equivalent approximately
MYR 25,000 — clearly exceeded)
(3) Calculate the 2.5% zakat obligation
(4) Compare the result to what ZATCA would produce for the same
balance sheet — which formula gives the higher number here?
(5) Draft the zakat disclosure note for Maybank Islamic's annual report
```

Check: Zakatable assets = 12 + 85 + 32 = MYR 129B. Minus current liabilities MYR 45B = MYR 84B. Zakat = MYR 2.1B.

### Step 4 — Pakistan Zakat and Ushr Deduction

```
Pakistan's Zakat and Ushr Ordinance requires banks to deduct zakat
at source from savings and investment accounts on the first day of
Ramadan.

(1) What is the deduction rate?
(2) From which account types is zakat deducted?
(3) How does the Islamic bank account for the zakat collected as
agent — is it the bank's own expense?
(4) Generate the journal entries for: (a) deduction from depositors'
accounts; (b) remittance to the Central Zakat Administration
(5) A depositor with PKR 5M in a PLS account on the first of Ramadan
— calculate the zakat deducted, assuming the balance exceeds nisab
```

Check: The bank deducts 2.5% × PKR 5M = PKR 125,000. This is a pass-through — the bank's P&L is not affected. The entry debits the depositor's account and credits Zakat Payable.

### Step 5 — Create the Global Zakat Skill in Cowork

Create a global zakat skill in Cowork using **Write skill instructions** in the Skills panel:

- **Skill name:** `global-zakat-calculator`
- **Description:** Activate when any query mentions zakat, zakatable assets, ZATCA, nisab, or purification for an Islamic financial institution. Route to the correct jurisdiction formula before calculating.
- **Instructions:** Enter the routing rules you built in Steps 1-4 as When/action pairs:
  - When jurisdiction is Saudi Arabia → apply the ZATCA equity-based formula, book as P&L expense
  - When jurisdiction is Pakistan → apply Zakat and Ushr Ordinance deduction-at-source, book as pass-through
  - When jurisdiction is Malaysia or Bahrain → apply AAOIFI GS9 / Hanafi liquid-assets formula, disclose in annual report
  - Include journal entry templates for each jurisdiction
  - Include disclosure note content for each jurisdiction

Click **Create**.

**Check your work:** Test the skill by asking a zakat question about a Saudi IFI — the agent must apply the ZATCA equity-based formula, not the Hanafi liquid-assets formula. Then ask about a Pakistan bank's zakat — the agent must recognise the deduction-at-source mechanism and never book it as the bank's own expense. The skill's routing logic ensures the correct formula is selected before generating any output.

---

## Try With AI

### Prompt 1: Zakat Arbitrage Analysis

```
I am advising an Islamic banking group with subsidiaries in Saudi
Arabia (ZATCA mandatory) and Malaysia (voluntary Hanafi). The group
has identical balance sheet structures in both subsidiaries.

Calculate the zakat obligation under each jurisdiction's formula
for this balance sheet: Share capital $2B, retained earnings $800M,
reserves $400M, fixed assets $300M, long-term investments $1.5B,
liquid trade assets $3B, current liabilities $1.2B.

Which jurisdiction produces the higher zakat obligation? By how much?
What is the commercial implication for the group's capital allocation
between the two jurisdictions?
```

**What you are learning:** The two formulas can produce materially different zakat obligations from identical balance sheet data. This is not arbitrage in the Shariah sense — zakat is obligatory regardless — but it has real capital planning implications for multi-jurisdiction Islamic banking groups.

### Prompt 2: Non-Shariah Income Purification Workflow

```
An Islamic bank in Bahrain received BHD 450,000 of inadvertent
interest income during the year from a correspondent banking
relationship with a conventional bank. The SSB has confirmed this
income is non-Shariah-compliant.

(1) What is the accounting treatment?
(2) Generate the journal entries
(3) Can the purification amount be deducted from the bank's zakat base?
(4) Draft the mandatory AAOIFI disclosure note for the annual report
(5) What internal controls should the bank implement to prevent
recurrence?
```

**What you are learning:** Non-Shariah income purification is a separate obligation from zakat. The purification amount must be donated to charity and **cannot** be offset against the bank's zakat obligation or included in retained earnings. The internal controls question connects accounting treatment to operational governance.

### Prompt 3: Pakistan 2028 Conversion Impact on Zakat

```
Pakistan has mandated full conversion of the banking system to
Islamic finance by January 2028. Currently, conventional banks
do not deduct zakat from depositors' accounts — only Islamic banks
and Islamic banking windows do so under the Zakat and Ushr Ordinance.

When the entire banking system converts:
(1) Will zakat deduction at source apply to ALL bank accounts?
(2) What operational challenges will conventional banks face in
implementing the Ramadan-day deduction mechanism?
(3) What is the estimated aggregate zakat collection impact if
all PKR 30 trillion of banking deposits become subject to deduction?
(4) How should a bank preparing for conversion build the zakat
deduction capability into its core banking system?
```

**What you are learning:** Pakistan's 2028 full conversion mandate is the most significant structural change in global Islamic finance. The zakat deduction-at-source mechanism — currently applicable only to Islamic banks — will scale to the entire banking system. The operational and systems implications are substantial, and the CA/CPA advising banks on conversion must understand both the Shariah requirement and the systems architecture needed to implement it.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 14: Shariah Portfolio Screening →](./14-shariah-screening.md)
