---
name: islamic-finance-global-router
version: 1.0
description: >
  Activate whenever any of these terms appear in a query:
  murabaha, ijarah, musharaka, mudaraba, sukuk, takaful, zakat,
  AAOIFI, FAS, Shariah-compliant, Islamic banking, Islamic finance,
  non-interest banking, halal finance, riba, gharar, maysir,
  profit-sharing, diminishing musharaka, istisna'a, salam,
  Investment Account Holder, IAH, PER, IRR, SSB, Shariah Supervisory Board,
  wakala, mudarib, rabb ul mal, musharakah, ijarah muntahia bittamleek,
  commodity murabaha, tawarruq, GIS, sukuk al-ijarah, green sukuk.
author: Panaversity — The AI Agent Factory
jurisdiction: Global (multi-jurisdiction router)
version_date: 2025
---

## PURPOSE
This is the top-level routing controller for the Cowork Islamic Finance Plugin Stack.
It determines which product SKILL.md and which jurisdiction overlay SKILL.md to load
before generating any Islamic finance accounting output.

It does NOT contain accounting rules itself. It routes to the files that do.

---

## ROUTING PROTOCOL — EXECUTE BEFORE ANY OUTPUT

### Step 1: Identify the Jurisdiction

Read the user query and conversation context for jurisdiction signals:
- Country name (Bahrain, Malaysia, UAE, Saudi Arabia, UK, Pakistan, Nigeria, etc.)
- Currency (BHD, MYR, AED, SAR, GBP, PKR, NGN)
- Regulator name (CBB, BNM, CBUAE, SAMA, PRA/FCA, SBP, CBN)
- Stock exchange (Bahrain Bourse, Bursa Malaysia, DFM/ADX, Tadawul, LSE, PSX, NSE)
- Standard reference (AAOIFI FAS, MFRS, IFRS as adopted in KSA, TFRS, BFRS)

**If no jurisdiction is identifiable: ASK before proceeding.**
Do NOT assume a default jurisdiction. Do NOT assume IFRS.

### Step 2: Identify the Product

Map query terms to product SKILL.md files:

| Query Terms | Load Product File |
|---|---|
| murabaha, cost-plus, deferred sale, commodity murabaha, tawarruq, FAS 2 | products/murabaha.md |
| ijarah, IMB, lease, ijarah muntahia bittamleek, FAS 8, FAS 32 | products/ijarah-imb.md |
| diminishing musharaka, DM, home finance, co-ownership, musharakah mutanaqisah | products/musharaka-dm.md |
| mudaraba, investment account, IAH, PER, IRR, mudarib, rabb ul mal, FAS 3 | products/mudaraba.md |
| musharaka, joint venture, partnership, FAS 4 | products/musharaka-full.md |
| sukuk issuer, sukuk issuance, sukuk structuring, SPV, trust deed | products/sukuk-issuer.md |
| sukuk investor, sukuk holding, sukuk classification, SPPI sukuk | products/sukuk-investor.md |
| salam, forward purchase, advance payment commodity, FAS 7 | products/salam.md |
| istisna'a, construction finance, manufacturing contract, FAS 10 | products/istisna-a.md |
| takaful, Islamic insurance, wakala model, participants fund, qard | products/takaful-ifrs17.md |
| zakat, zakatable, nisab, ZATCA, sadaqah, purification | products/zakat-global.md |
| shariah screen, halal stocks, prohibited sectors, purification, PSX screen | products/shariah-screening-global.md |

### Step 3: Load the Jurisdiction Overlay

| Jurisdiction | Load Overlay File |
|---|---|
| Bahrain | jurisdictions/bahrain-aaoifi.md |
| Qatar | jurisdictions/qatar-aaoifi.md |
| Malaysia | jurisdictions/malaysia-mfrs.md |
| Indonesia | jurisdictions/indonesia-psak.md |
| Saudi Arabia, KSA | jurisdictions/saudi-ifrs.md |
| UAE, Dubai, Abu Dhabi, DIFC, ADGM | jurisdictions/uae-ifrs.md |
| Kuwait | jurisdictions/kuwait-ifrs.md |
| Oman | jurisdictions/oman-ifrs.md |
| Pakistan | jurisdictions/pakistan-ifrs.md |
| UK, United Kingdom, England | jurisdictions/uk-ifrs.md |
| Nigeria | jurisdictions/nigeria-ifrs.md |
| Turkey | jurisdictions/turkey-tfrs.md |
| GCC cross-border, multi-GCC | jurisdictions/gcc-crossborder.md |

### Step 4: Apply Rules in Order

1. Apply product SKILL.md rules first (accounting mechanics)
2. Apply jurisdiction overlay modifications (labels, presentation, disclosure)
3. Confirm governing standard in response header before output

---

## UNIVERSAL RULES — APPLY IN ALL JURISDICTIONS

### Prohibited Terms — NEVER USE in any Islamic finance output
- "interest income" — replace with jurisdiction-appropriate income label
- "loans and advances" — in AAOIFI jurisdictions; use "financing receivables" or product name
- "interest expense" — replace with "profit distributed to investment account holders" or "financing cost"
- "net interest margin (NIM)" — replace with "net financing margin" or "net profit margin"
- "interest rate" — replace with "profit rate" or "effective profit rate"

### Mandatory Shariah Compliance Escalation
When any of these conditions arise, flag for Shariah Supervisory Board review
and DO NOT process the accounting entry without noting the escalation:
- A new product structure not previously covered by an existing fatwa
- A transaction where the Shariah structural requirements may not have been met
  (e.g., murabaha where asset purchase by bank cannot be confirmed)
- A non-Shariah income item that must be treated as charity (sadaqah)
- Any transaction involving interest-based conventional financial instruments
  being proposed as Islamic finance

### The Fundamental Limitation
This agent automates execution, schedule generation, journal entries,
disclosure drafting, and regulatory reporting. It does NOT make Shariah
compliance judgments. Determinations of whether a specific transaction
structure is permissible are the exclusive function of qualified Shariah
scholars on the institution's Shariah Supervisory Board.

---

## RESPONSE FORMAT

Every Islamic finance accounting output must begin with:

```
GOVERNING FRAMEWORK: [e.g., AAOIFI FAS 2 — Bahrain]
PRODUCT: [e.g., Murabaha]
JURISDICTION: [e.g., Bahrain — CBB Rulebook applies]
```

This header ensures traceability and prevents framework confusion
in multi-jurisdiction or cross-border engagements.
