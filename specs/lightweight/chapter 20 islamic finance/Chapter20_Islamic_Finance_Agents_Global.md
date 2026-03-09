# Chapter 20: Islamic Finance Domain Agents — A Global Practice Guide

---

*"Islamic finance is not a Muslim-only market. It is a $4.5 trillion global industry present in more than 80 countries, governed by at least five different accounting frameworks, structured around eight distinct product families, and growing at 10% per year. The CA/CPA who understands it commands a practice niche that is simultaneously under-served, rapidly expanding, and impossible to enter without preparation. The AI tools that automate it are not optional efficiency gains — they are the enabling condition for any individual practitioner to maintain competence across the product complexity and jurisdictional diversity that global Islamic finance demands."*

---

## Why Islamic Finance Is a Global Profession, Not a Regional Specialisation

The framing of Islamic finance as a Pakistani or Middle Eastern concern has never been accurate. Dubai Islamic Bank operates in the UAE, Egypt, Saudi Arabia, Turkey, Pakistan, Indonesia, and Kenya. Maybank Islamic is headquartered in Kuala Lumpur and serves clients across Southeast Asia, the Middle East, and Europe. HSBC Amanah operated in more than a dozen countries before being restructured. The sukuk market is globally traded. Islamic funds are distributed from Luxembourg to Singapore. Green sukuk backed by Malaysian assets are bought by European pension funds. Sovereign sukuk from Indonesia are listed on the London Stock Exchange.

The industry has reached a scale that makes this global reach unremarkable. Total global Islamic finance assets reached approximately $5.4 trillion as of 2024, with forecasts projecting growth to $9.75 trillion by 2029 — a compound annual growth rate of approximately 10%. The industry spans more than 80 countries, though it remains highly concentrated: nearly 95% of all Shariah-compliant assets are held within just 10 markets.

The geographic distribution tells the practitioner where to focus. The Gulf Cooperation Council region accounts for roughly 50% of global Islamic finance assets, with GCC assets expected to exceed $5 trillion by 2029. Southeast Asia, led by Malaysia and Indonesia, constitutes the second-largest market at approximately 20% of total assets. Asia Pacific led the global market in 2024 at approximately 42% of global Islamic finance market share, supported by strong demand in Malaysia, Indonesia, and Pakistan. The Middle East and Africa region is the next major hub.

The profession is responding. The Big Four accounting firms all have dedicated Islamic finance practices. The Institute of Chartered Accountants of Pakistan, the Malaysian Institute of Accountants, the Institute of Chartered Accountants in England and Wales, and the Association of Chartered Certified Accountants all provide Islamic finance learning resources. The Chartered Institute of Management Accountants has published Islamic finance competency frameworks. AAOIFI itself offers professional qualifications.

What the profession does not yet have is an AI-augmented workflow infrastructure that handles the most significant practical challenge in global Islamic finance practice: **jurisdictional variability in accounting standards**. The same murabaha transaction is accounted for differently in Bahrain (AAOIFI mandatory), Malaysia (MFRS/IFRS with Islamic interpretation guidance from MASB), Saudi Arabia (IFRS), the UAE (IFRS), and the UK (IFRS under FRS 101/102). An AI agent operating without jurisdiction-specific SKILL.md instructions will apply one framework to all five — which means it will be wrong in at least four of them, and wrong in different ways.

This chapter builds the AI-augmented global Islamic finance practice. It maps the regulatory landscape across the five major global hubs, establishes the accounting treatment for the eight principal Islamic finance products, provides a complete jurisdiction-by-jurisdiction standards reference, and — centrally — shows how Anthropic Cowork and jurisdiction-specific SKILL.md extensions convert the profession's most complex multi-standard challenge into a manageable, auditable workflow.

---

> **🔑 THE THREE PILLARS OF ISLAMIC FINANCE — THE UNIVERSAL FOUNDATION**
>
> Every Islamic finance product in every jurisdiction is built on the same foundational prohibitions and principles. Understanding these is the prerequisite to understanding why accounting treatment must differ from conventional finance.
>
> **The Three Prohibitions:**
> - **Riba** (ربا): The prohibition of interest in all forms — any predetermined return on the mere lending of money, however named.
> - **Gharar** (غرر): The prohibition of excessive uncertainty or ambiguity in contracts.
> - **Maysir** (ميسر): The prohibition of speculation and gambling.
>
> **The Three Principles:**
> - **Asset-backing:** Every financing transaction must be linked to a real underlying asset, service, or profit-sharing arrangement.
> - **Risk-sharing:** Profit entitles the recipient only if they have borne corresponding risk.
> - **Ethical screening:** Financing may not be provided for prohibited activities.
>
> These principles are universal across all jurisdictions. What varies — and what drives the accounting complexity — is how each jurisdiction's regulatory and accounting authorities have determined these principles should be reflected in financial statements.

---

# Part One: The Global Islamic Finance Landscape — Five Regional Hubs

---

## Hub 1: The GCC — The Global Centre of Gravity

The Gulf Cooperation Council — Saudi Arabia, UAE, Bahrain, Qatar, Kuwait, and Oman — accounts for the largest concentration of Islamic finance assets globally. Despite being six countries with a combined land mass smaller than Texas, the GCC hosts some of the world's largest Islamic financial institutions: Al Rajhi Bank (Saudi Arabia), Dubai Islamic Bank (UAE), Kuwait Finance House (Kuwait), Qatar Islamic Bank (Qatar), and Bank Muscat's Islamic window (Oman).

The GCC is also where the most consequential accounting standards debate plays out. The six GCC states have adopted different frameworks:

**Saudi Arabia — IFRS primary, AAOIFI supplemental:**
Saudi Arabia's Zakat, Tax and Customs Authority (ZATCA) and SAMA (Saudi Arabian Monetary Authority) require listed companies and licensed banks to apply IFRS as adopted in the Kingdom. In countries such as Kuwait and Saudi Arabia, Islamic banks' financial statements are prepared in accordance with IFRS. Al Rajhi Bank — the world's largest Islamic bank by capital — prepares IFRS-compliant financial statements. AAOIFI standards are referenced by many Saudi IFIs for Shariah compliance disclosures and supplementary notes, but are not the primary accounting framework.

**Bahrain — AAOIFI primary:**
Bahrain, where AAOIFI is headquartered, is one of the few jurisdictions globally where AAOIFI accounting standards are mandatorily applied by Islamic financial institutions. In Bahrain, where AAOIFI is based, Islamic financial institutions are required to use AAOIFI accounting standards. The Central Bank of Bahrain's rulebook incorporates AAOIFI requirements directly. Bahrain Islamic Bank, Ithmaar Banking Group, and Al Baraka Banking Group all prepare AAOIFI-primary financial statements. This makes Bahrain the global reference case for AAOIFI accounting in practice.

**UAE — IFRS primary, DIFC exceptions:**
The UAE Central Bank requires banks to apply IFRS. Dubai Islamic Bank — the world's second largest Islamic bank — prepares IFRS financial statements. The Dubai International Financial Centre (DIFC) is a separate financial free zone where AAOIFI standards may be used voluntarily by IFIs operating under DIFC regulation. In the DIFC, AAOIFI Shariah standards have been used voluntarily as basis of internal guidelines by leading Islamic financial institutions.

**Qatar — AAOIFI primary:**
Qatar also requires Islamic financial institutions to use AAOIFI accounting standards. Qatar Islamic Bank, Masraf Al Rayan, and Qatar International Islamic Bank apply AAOIFI as their primary framework. Qatar's approach parallels Bahrain's and provides the second major reference case for pure AAOIFI accounting in practice.

**Kuwait — IFRS:**
Kuwait Finance House — the third largest Islamic bank globally — applies IFRS. The Central Bank of Kuwait's regulatory framework is IFRS-based.

**Oman — IFRS with AAOIFI supplemental:**
AAOIFI Shari'ah standards have been made part of mandatory regulatory requirement in Oman for Shariah compliance purposes, but financial reporting follows IFRS. Bank Nizwa and Alizz Islamic Bank apply IFRS with AAOIFI Shariah standards governing product structures.

**The GCC Practitioner's Reality:** A CA/CPA working on a GCC-wide Islamic finance engagement must be capable of switching accounting frameworks as they cross borders. The same diminishing musharaka home finance product is accounted for under AAOIFI FAS in a Bahrain subsidiary and under IFRS 9 in a UAE subsidiary of the same banking group. An AI agent working on this engagement must be told which jurisdiction it is operating in before generating a single journal entry.

---

## Hub 2: Southeast Asia — Malaysia's Global Leadership

Malaysia is the world's most developed Islamic finance ecosystem outside the GCC. It is the global leader in sukuk issuance — Malaysia has consistently been the world's single largest issuer of sukuk by volume, accounting for approximately 35-40% of global sukuk issuance annually. It has the world's most sophisticated Islamic capital market regulatory framework. Its central bank, Bank Negara Malaysia (BNM), has been the global reference standard for Islamic banking regulation since the 1980s.

**Malaysia's accounting framework** is distinctive: Malaysia uses the Malaysian Financial Reporting Standards (MFRS), which are substantively equivalent to IFRS issued by the IASB. The Malaysian Accounting Standards Board (MASB) adopts IFRS Standards as Malaysian standards, typically with identical text and minimal effective date differences.

For Islamic finance specifically, the MASB's approach evolved significantly over time. The MASB ceased its policy of issuing separate Islamic accounting standards. Instead, it determined that conventional MFRS (IFRS-equivalent) could be applied to Islamic financial transactions with appropriate additional disclosures. This means Malaysian Islamic banks apply MFRS 9 (equivalent to IFRS 9) to murabaha receivables, MFRS 16 (equivalent to IFRS 16) to ijarah arrangements, and so forth — but with supplementary guidance from MASB on how the standards apply to Islamic contract structures.

The Malaysian Accounting Standards Board works with Bank Negara Malaysia, the Securities Commission, and industry practitioners to develop Shariah-compliant accounting guidance. The key challenge lies in determining whether Islamic contracts should be treated as sales, leases, or financial instruments.

The practical result is that Malaysia's major Islamic banks — Maybank Islamic, CIMB Islamic, Bank Islam Malaysia Berhad, Public Islamic Bank — prepare MFRS-compliant financial statements that look very similar to IFRS financial statements of conventional banks, with additional Islamic finance disclosures. AAOIFI is used as Shariah guidance for product structuring, but not as the primary accounting framework.

**BNM's Takaful reporting** deserves special note. BNM has published the Financial Reporting for Takaful Operators Policy Document, setting out revised requirements applicable for takaful operators to ensure alignment with MFRS 17 Insurance Contracts and MFRS 9 Financial Instruments requirements. For takaful operators, the disclosure requirements have been strengthened to reflect the specificities of takaful, aligned with MASB recommendations and the latest ruling by the Shariah Advisory Council relating to the application of MFRS 17 to takaful businesses.

**Indonesia — the world's largest Muslim-majority country — is the other major Southeast Asian hub.** Bank Syariah Indonesia (BSI), formed by the merger of three state-owned Islamic banks, is Indonesia's dominant Islamic banking institution. Bank Syariah Indonesia's net profit climbed 33% in 2024, mirroring growing middle-class demand. Indonesia applies PSAK (Indonesian Financial Accounting Standards), which are closely aligned to IFRS. The Indonesian Accounting Institute (IAI) has issued specific PSAK guidance for Islamic finance (PSAK 59 for Islamic banking, subsequently superseded by various updated standards). AAOIFI Shari'ah standards have been used as basis of national Shari'ah guidelines in Indonesia.

---

## Hub 3: South Asia — Pakistan, Bangladesh, and the Subcontinental Market

South Asia has over 800 million Muslims — approximately 45% of the global Muslim population — and an Islamic finance market that is growing rapidly from a base that is still modest relative to the GCC and Southeast Asia.

**Pakistan** has undergone the most radical regulatory transformation in global Islamic finance in recent years. The Federal Shariat Court's April 2022 ruling declared all riba unconstitutional, and Parliament has mandated full conversion of the banking system to Islamic finance by January 2028. As at December 2024, Islamic banking accounted for approximately 24.9% of total banking sector deposits and was growing at over 20% annually. The accounting framework is a hybrid: listed Islamic banks apply IFRS as required by the Companies Act 2017 and SECP, with AAOIFI standards supplementally where IFRS does not address specific Islamic transactions. The SBP's Shariah Governance Framework (revised November 2024) provides the regulatory overlay.

**Bangladesh** has a significant Islamic banking sector — Islami Bank Bangladesh Limited is one of the country's largest private banks. Bangladesh applies local accounting standards (BFRS — Bangladesh Financial Reporting Standards) that are closely aligned to IFRS, with additional Bangladesh Bank guidance for Islamic banking operations. AAOIFI standards serve as supplementary Shariah guidance.

---

## Hub 4: Africa — Frontier Markets and Sovereign Sukuk

Africa's Islamic finance market is the most underappreciated globally and arguably the highest-growth opportunity. The continent has over 600 million Muslims and significant unbanked populations for whom the ethical, asset-backed principles of Islamic finance offer a compelling alternative to conventional banking products they may have cultural or religious reasons to avoid.

**Sovereign sukuk have become a significant infrastructure financing tool across Africa.** Nigeria, Senegal, Ivory Coast, and South Africa are using sovereign sukuk to fund infrastructure projects. The African Islamic finance market is projected to generate significant revenue for investment banks, with the significant $100 billion annual infrastructure funding gap in Africa creating a substantial opportunity for sukuk to emerge as a key financing solution.

**Nigeria** is the largest African Islamic finance market. The Central Bank of Nigeria's Islamic banking regulatory framework was established in 2011. Jaiz Bank, Nigeria's first fully-fledged non-interest bank, operates under CBN's Non-Interest Banking Framework. The Nigerian sukuk programme, managed by the Debt Management Office, has issued multiple tranches of sovereign sukuk for road infrastructure. Nigeria applies IFRS for financial reporting with supplementary AAOIFI Shariah guidance.

**Kenya** has two dedicated Islamic banks (First Community Bank, Gulf African Bank) and several Islamic banking windows of conventional banks. The Capital Markets Authority of Kenya has issued sukuk regulatory guidelines. Kenya applies IFRS.

**South Africa** has a small but sophisticated Islamic finance market — Al Baraka Bank, HBZ Bank's Islamic window, and Absa's Islamic banking unit. The National Treasury has explored sovereign sukuk issuance. South Africa applies IFRS. In South Africa, AAOIFI Shari'ah standards have been used voluntarily as basis of internal guidelines by leading Islamic financial institutions.

**Egypt** has a large but underdeveloped Islamic banking sector relative to its 100-million-plus Muslim population. Faisal Islamic Bank of Egypt is one of the oldest dedicated Islamic banks globally, established in 1979. Egypt applies IFRS with Egyptian Accounting Standards supplementally.

---

## Hub 5: Western Markets — Islamic Finance Without a Muslim Majority

The most structurally interesting Islamic finance markets — from a CA/CPA perspective — are the non-Muslim-majority Western markets that have deliberately built Islamic finance infrastructure to attract capital and serve Muslim minority populations.

**United Kingdom** is the leading Western Islamic finance centre. Five fully-fledged Islamic banks operate in the UK: Al Rayan Bank (the largest UK Islamic bank), Gatehouse Bank, QIB (UK), Al Ahli United Bank (UK), and Bank of London and the Middle East (BLME). The UK government has issued sovereign sukuk. The London Stock Exchange hosts listings of Malaysian, UAE, and other international sukuk. HM Treasury has issued specific guidance on the taxation of Islamic finance products to ensure Shariah-compliant structures are treated equivalently to their conventional counterparts for tax purposes.

UK Islamic banks apply IFRS as required by the Prudential Regulation Authority and the Financial Conduct Authority. In the United Kingdom, all financial institutions, including Islamic banks, are required to use IFRS. AAOIFI is used for Shariah compliance disclosures but has no mandatory accounting status in the UK.

**Luxembourg** has positioned itself as the European hub for Islamic investment funds and sukuk listings. Several Malaysian and GCC sukuk are listed on the Luxembourg Stock Exchange. Luxembourg-domiciled Islamic funds apply IFRS and Luxembourg GAAP.

**United States** has no Islamic banks but a growing market for Shariah-compliant mortgage products (offered by entities like Devon Bank and Guidance Residential using diminishing musharaka and declining balance structures) and Islamic investment funds. US entities apply US GAAP, with AAOIFI providing Shariah compliance guidance only.

**Turkey** has an active Islamic banking sector — Katılım Bankası (Participation Banks) including Kuveyt Türk, Türkiye Finans, Albaraka Türk, and Ziraat Katılım. Turkey applies TFRS (Turkish Financial Reporting Standards, IFRS-equivalent) with Banking Regulation and Supervision Agency (BDDK) guidance for participation banks.

---

## The Global Standards Map — The Critical Reference for AI Agents

The table below is the most important single reference in this chapter. Every AI agent working on Islamic finance must be told which cell of this table governs before it produces any accounting output.

| Jurisdiction | Primary Standard | AAOIFI Role | Islamic Finance Regulator | Unique Features |
|---|---|---|---|---|
| **Saudi Arabia** | IFRS (as adopted by KSA) | Supplemental Shariah guidance | SAMA | ZATCA Zakat treatment for IFIs |
| **Bahrain** | AAOIFI FAS mandatory | Primary | Central Bank of Bahrain | Pure AAOIFI jurisdiction; reference case |
| **UAE** | IFRS | Voluntary in DIFC | Central Bank of UAE | DIFC has separate regulatory space |
| **Qatar** | AAOIFI FAS mandatory | Primary | Qatar Central Bank | Pure AAOIFI alongside Bahrain |
| **Kuwait** | IFRS | Supplemental | Central Bank of Kuwait | Kuwait Finance House as reference case |
| **Oman** | IFRS | Mandatory Shariah standard | Central Bank of Oman | AAOIFI Shariah mandatory; IFRS accounting |
| **Malaysia** | MFRS (IFRS-equivalent) | Voluntary Shariah guidance | Bank Negara Malaysia | MASB Islamic application guidance; world sukuk leader |
| **Indonesia** | PSAK (IFRS-aligned) | National Shariah guidelines | OJK (Financial Services Authority) | PSAK 59 Islamic banking standards |
| **Pakistan** | IFRS (listed entities) | Mandatory Shariah + supplemental accounting | State Bank of Pakistan | Full riba elimination mandate by 2028 |
| **Bangladesh** | BFRS (IFRS-aligned) | Supplemental | Bangladesh Bank | Large Islamic banking sector |
| **Nigeria** | IFRS | Supplemental | Central Bank of Nigeria | CBN Non-Interest Banking Framework |
| **Kenya** | IFRS | Voluntary | Central Bank of Kenya | Growing Islamic banking windows |
| **South Africa** | IFRS | Voluntary | SARB / FSCA | NHA amendments for Islamic mortgages |
| **Egypt** | IFRS / Egyptian AS | Supplemental | Central Bank of Egypt | Large population, underdeveloped sector |
| **United Kingdom** | IFRS | Voluntary | PRA / FCA | HMRC Islamic finance tax equivalence rules |
| **Turkey** | TFRS (IFRS-equivalent) | Supplemental | BDDK | Participation banking regulatory framework |
| **United States** | US GAAP | Voluntary | OCC / FDIC / State regulators | No Islamic banks; Shariah-compliant mortgages |
| **Luxembourg** | IFRS / Luxembourg GAAP | Voluntary | CSSF | European Islamic fund and sukuk listing hub |
| **Jordan** | AAOIFI partial | Supplemental | Central Bank of Jordan | AAOIFI partially adopted |
| **Iran** | Iranian Accounting Standards | N/A — full Islamic banking | Central Bank of Iran | Entire banking system Islamic since 1983 |
| **Sudan** | AAOIFI | Mandatory | Central Bank of Sudan | Full Islamic banking system |

---

> **📊 CONCEPT BOX: The Three Accounting Regimes in Global Islamic Finance**
>
> Despite the complexity of the table above, global Islamic finance accounting resolves into three practical regimes:
>
> **Regime 1 — AAOIFI Primary** (Bahrain, Qatar, Sudan, and partial Jordan/Pakistan)
> The IFI uses AAOIFI Financial Accounting Standards as its primary framework. Murabaha is a trading transaction (FAS 2). Ijarah assets stay on the lessor's balance sheet (FAS 32). Musharaka is a partnership investment (FAS 4). The financial statements look structurally different from IFRS statements. Non-performing finance facilities follow AAOIFI FAS 30.
>
> **Regime 2 — IFRS Primary with Islamic Interpretation Guidance** (Malaysia, Indonesia, UAE, Saudi Arabia, Kuwait, UK, Turkey, Pakistan listed entities, Africa)
> The IFI uses IFRS (or local IFRS-equivalent) as its primary framework. IFRS 9 governs financial instruments — murabaha receivables are assessed under the business model test and SPPI test. IFRS 16 governs leases — ijarah arrangements are assessed as operating or finance leases. Supplementary AAOIFI Shariah disclosures are added in the notes. The financial statements look similar to those of conventional banks with additional Islamic disclosure sections.
>
> **Regime 3 — Local Standards** (Iran, Bangladesh, and some African jurisdictions)
> A local standard-setter has issued standards that incorporate both Islamic jurisprudence and local regulatory requirements. Accounting treatment may differ materially from both AAOIFI and IFRS.
>
> **The AI agent instruction:** The first line of every Islamic finance accounting task must specify which regime applies. Before generating any journal entry or financial statement presentation, the agent must know: "I am in Bahrain under AAOIFI FAS" or "I am in Malaysia under MFRS" or "I am in the UK under IFRS." This single instruction changes the output materially.

---

# Part Two: The Eight Islamic Finance Products — Global Accounting Treatment

---

## Product 1: Murabaha (مرابحة) — Cost-Plus Deferred Sale

Murabaha is the most widely used Islamic finance product globally, estimated at 40-60% of total Islamic banking financing in most markets. The commercial structure is consistent worldwide: a bank purchases an asset and sells it to a customer at a disclosed mark-up with deferred payment. The accounting treatment, however, varies by jurisdiction.

**AAOIFI Regime (Bahrain, Qatar):** Under AAOIFI FAS 2, murabaha is a trading transaction. The bank recognises a murabaha receivable — not a loan — at the full selling price. Deferred murabaha income is recognised using the effective profit rate method. The income statement shows "murabaha income" — never "interest income." Impairment is assessed under AAOIFI FAS 30.

**IFRS Regime (Malaysia, UAE, Saudi Arabia, UK, and most of the world):** Under IFRS 9, the murabaha receivable is assessed as a financial asset. The business model test (held-to-collect or other) and the SPPI test (do cash flows represent solely principal and a return consistent with a basic lending arrangement?) determine classification. Most murabaha receivables pass the SPPI test and are classified at amortised cost, measured using the effective interest rate method. The income presentation under IFRS is typically "profit from Islamic financing" rather than "interest income" — but the measurement method is identical to IFRS 9 effective interest rate amortisation.

**The Malaysia distinction:** Under MASB guidance, murabaha is typically recognised as a financing transaction, with receivables recorded and profit markups amortized over time using the effective profit rate method. Malaysia effectively applies IFRS 9 measurement to murabaha while using the term "effective profit rate" rather than "effective interest rate" — reflecting Shariah characterisation without departing from IFRS measurement.

**The substance debate:** In the UK, IFRS preparers apply IFRS 9 without modification to murabaha. The FCA does not require Islamic-specific accounting terminology. Al Rayan Bank's financial statements present murabaha income using IFRS 9 effective interest rate mechanics.

**The four-step journal entry sequence** is arithmetically identical under both AAOIFI FAS 2 and IFRS 9 — the numbers are the same. What differs is the label on the income line, the classification of the receivable on the balance sheet, and the supplementary Shariah disclosures. An AI agent must know which label system applies, because the difference between "murabaha income" (trading terminology) and "profit from Islamic financing" (IFRS 9 amortised cost terminology) is a compliance issue in AAOIFI jurisdictions, not merely a presentational preference.

---

> **📊 CONCEPT BOX: The Murabaha Accounting Entry Sequence — Universal Structure**
>
> This sequence applies in all jurisdictions; only the labels change:
>
> **Step 1 — Bank purchases asset:**
> Dr: Murabaha Asset (inventory) | [Cost]
> Cr: Cash / Payable to Supplier | [Cost]
>
> **Step 2 — Bank sells asset to customer at mark-up:**
> Dr: Murabaha Receivable | [Cost + Mark-up]
> Cr: Murabaha Asset | [Cost]
> Cr: Deferred Murabaha Income | [Mark-up]
>
> **Step 3 — Periodic profit recognition (effective profit/interest rate method):**
> Dr: Deferred Murabaha Income | [period allocation]
> Cr: Murabaha Income / Profit from Islamic Financing | [period allocation]
>
> **Step 4 — Customer instalment payment:**
> Dr: Cash | [instalment]
> Cr: Murabaha Receivable | [instalment]
>
> **AAOIFI label:** "Murabaha Income" — Step 3 credit in AAOIFI regimes (Bahrain, Qatar)
> **IFRS label:** "Profit from Islamic Financing" or "Financing Income" — Step 3 credit in IFRS regimes
> **NEVER use:** "Interest Income" in any Islamic finance jurisdiction, under any framework

---

## Product 2: Ijarah (إجارة) — Islamic Lease

Ijarah is an Islamic lease. Ijarah Muntahia Bittamleek (IMB) is a lease ending in ownership — the Islamic equivalent of a finance lease. The lessor retains ownership throughout and bears the risks and rewards of ownership. At the end of an IMB, ownership transfers to the lessee by gift or nominal sale.

**AAOIFI FAS 32 (Bahrain, Qatar):** AAOIFI's revised ijarah standard (FAS 32, which superseded FAS 8) requires the lessor to maintain the ijarah asset on its balance sheet at all times, depreciated over the asset's useful life. AAOIFI's rejection of the "finance lease" concept stems from its Shariah Board's position that in all circumstances the risks and rewards of underlying ijarah assets must remain with the lessor during the ijarah term. The lessee recognises only the periodic rental expense — no right-of-use asset, no lease liability.

**IFRS 16 (all IFRS jurisdictions):** Under IFRS 16, lessees must capitalise virtually all leases with a right-of-use (ROU) asset and a corresponding lease liability, measured at the present value of future lease payments. The lessor assesses whether the lease is an operating lease or a finance lease, with different accounting treatment for each. For an IMB arrangement assessed as a finance lease by the lessor, the lessor derecognises the underlying asset and recognises a net investment in the lease.

**The Malaysia situation:** Malaysian Islamic banks acting as lessors apply MFRS 16 (identical to IFRS 16). A Malaysian bank providing IMB home finance therefore derecognises the financed property (if assessed as a finance lease) and recognises a lease receivable — the opposite of AAOIFI FAS 32 treatment where the asset stays on the lessor's books. This has a material balance sheet impact.

**The lessee's position (all IFRS jurisdictions):** A corporate client in any IFRS jurisdiction that finances equipment or property under an IMB arrangement from an Islamic bank must assess the IMB under IFRS 16 for its own financial statements. The Shariah structure of the arrangement does not exempt it from IFRS 16 assessment. If the lessee controls use of the underlying asset, it must recognise an ROU asset and lease liability — regardless of whether the IFI is accounting for the transaction under AAOIFI or IFRS.

---

## Product 3: Diminishing Musharaka (مشاركة المتناقصة) — The Global Home Finance Standard

Diminishing musharaka (DM) is the dominant Islamic home finance product across the GCC, Malaysia, Pakistan, and now increasingly in the UK and other Western markets. The structure — bank and customer co-own a property, customer pays rent on bank's share while gradually buying it out — is universally recognised across Shariah jurisdictions.

**AAOIFI FAS 4 (Bahrain, Qatar):** The bank's share is a partnership investment in the jointly owned property. Rental income is earned on the bank's ownership share and diminishes as that share reduces. The equity schedule tracks the declining ownership precisely.

**IFRS 9 substance analysis (all IFRS jurisdictions):** IFRS 9's substance-over-form principle requires assessment of whether the DM arrangement's economic substance is that of a financial asset — a series of contractual cash flows that represent principal and a return consistent with a lending arrangement. In Malaysia, the UK, and most IFRS jurisdictions, banks that offer DM products apply IFRS 9 to the arrangement, presenting it as a financing receivable. The "rental income" and "equity purchase" cash flows are reclassified as financing income under the effective interest rate method.

**UK-specific treatment:** Al Rayan Bank's diminishing musharaka home finance is presented in its financial statements under IFRS 9, with the bank's share presented as a financial asset at amortised cost. The bank's published materials explain to customers that the arrangement is a co-ownership structure — but the IFRS financial statements reflect the economic substance as a financing transaction.

---

## Product 4: Mudaraba (مضاربة) — Investment Partnership

Mudaraba governs investment accounts in Islamic banks globally. Depositors (rabb ul mal) provide capital; the bank (mudarib) manages it; profits are shared in a pre-agreed ratio; losses are borne by the capital provider unless due to negligence.

The accounting treatment of investment account holders' (IAH) funds is one of the most debated issues in global Islamic finance accounting:

**AAOIFI position:** AAOIFI requires IAH funds to be presented separately from the bank's own equity and from conventional liabilities — as a distinct category on the balance sheet. This presentation reflects the reality that IAH funds are not guaranteed deposits (Shariah prohibits capital guarantees in mudaraba) and are not equity of the bank.

**IFRS position:** Under IFRS, IAH funds meet the definition of a financial liability (a contractual obligation to return cash) because in practice — and due to regulatory requirements in most jurisdictions — banks do not let IAH depositors suffer losses. If capital protection is practically guaranteed, IAS 32 requires liability treatment. This creates a tension with Shariah characterisation that remains unresolved in global standards.

**Jurisdiction variations:**
- In Bahrain (AAOIFI): IAH funds appear as a separate balance sheet category below liabilities, titled "Equity of Investment Account Holders."
- In Malaysia (MFRS): IAH funds are generally recognised as financial liabilities under MFRS 9/132, consistent with the economic substance view.
- In the UK (IFRS): Al Rayan Bank classifies its investment account deposits as financial liabilities.

---

## Product 5: Musharaka (مشاركة) — Joint Venture Finance

Musharaka is used globally for project finance, working capital financing, and sukuk structuring. The accounting follows AAOIFI FAS 4 in AAOIFI jurisdictions and IFRS 11/IFRS 9 analysis in IFRS jurisdictions, with the classification depending on whether the arrangement constitutes a joint operation, joint venture, or financial asset under IFRS 11.

---

## Product 6: Salam (سلم) and Istisna'a (استصناع)

**Salam** (advance payment for future commodity delivery) is used for agricultural finance in Pakistan, Sudan, and parts of Southeast Asia. Under AAOIFI FAS 7, the advance payment is a salam receivable at cost. Under IFRS, it is assessed as a financial asset or contract asset depending on whether delivery has occurred.

**Istisna'a** (manufacturing/construction contract finance) is used globally for construction and infrastructure projects. AAOIFI FAS 10 requires percentage-of-completion revenue recognition. IFRS 15 applies the same over-time revenue recognition method — the outputs are arithmetically comparable, though AAOIFI requires explicit Shariah disclosure of milestone specifications to satisfy the gharar prohibition.

The **parallel istisna'a** structure is especially important in GCC infrastructure financing, where Islamic banks serve as intermediaries between project owners and construction companies. The netting versus gross presentation question is material for the bank's capital ratios.

---

## Product 7: Sukuk (صكوك) — Global Islamic Capital Markets

Sukuk is the most globally traded Islamic finance instrument, present in virtually every Islamic finance jurisdiction and traded in international markets by conventional and Islamic investors alike. Global sukuk issuance in 2024 exceeded $250 billion annually.

**The issuer landscape:**
- **Sovereign sukuk:** Malaysia (world's largest), Saudi Arabia (Vision 2030 financing), UAE, Indonesia, Pakistan, Turkey, UK, Nigeria, Senegal, Egypt, and others use sukuk for government financing.
- **Corporate sukuk:** Issued across all major markets, typically ijarah or musharaka structures.
- **Green sukuk:** Sustainable sukuk grew by 17% in issuance in Q1 2024 from Q1 2023, driven by sustainability sukuk from GCC banks. Malaysia, UAE, and Saudi Arabia are the leading green sukuk issuers.

**Accounting by structure:**
- *Ijarah sukuk (most common):* The underlying assets remain on the issuer's balance sheet; sukuk proceeds are a financial liability. Investors classify at amortised cost if SPPI is met.
- *Musharaka/Mudaraba sukuk:* The SPPI test typically fails for equity-linked sukuk; investor classification is FVTPL under IFRS 9.
- *Wakala sukuk:* Increasingly common in Malaysia and the GCC; the wakeel (agent) manages a pool of assets on behalf of sukuk holders.

**AAOIFI Standard 62 — the industry's most watched proposal:** Draft AAOIFI Standard 62, which would shift sukuk from asset-based to asset-backed, has seen deadlines extended amid industry debate. The distinction is profound: asset-based sukuk are secured by assets but are ultimately claims on the issuer's creditworthiness; asset-backed sukuk would require genuine asset transfer and recourse only to the assets. The adoption of Standard 62 would fundamentally restructure the global sukuk market.

**The purchase undertaking controversy:** The most contested issue in global sukuk accounting is whether an issuer's purchase undertaking at face value — the promise to repurchase the underlying assets at maturity for the original price — converts a sukuk into conventional debt for accounting purposes. IFRS preparers in Malaysia, the UAE, and Saudi Arabia have generally concluded that ijarah sukuk with fixed repurchase undertakings are financial liabilities under IAS 32. AAOIFI Standard 59 permits purchase undertakings for ijarah sukuk but prohibits them for equity-based sukuk.

---

## Product 8: Takaful (تكافل) — Islamic Insurance

Takaful operates in over 30 countries. The global takaful industry is led by Malaysia (the world's most developed takaful regulatory framework), Saudi Arabia (the world's largest takaful market by premium volume, where all insurance is technically takaful due to Cooperative Insurance Companies regulations), UAE, Bahrain, Kuwait, and Qatar.

**The global takaful accounting challenge** is that IFRS 17 Insurance Contracts — effective for most jurisdictions from 2023 onwards — was designed for conventional insurance and requires careful interpretation for takaful structures. BNM's Financial Reporting for Takaful Operators Policy Document sets out requirements for alignment with MFRS 17 Insurance Contracts and MFRS 9, with disclosure requirements strengthened to reflect specificities of takaful, aligned with the latest ruling by the Shariah Advisory Council.

The fundamental takaful accounting question under IFRS 17 is: who is the insurer — the takaful operator (who manages), or the participants (who bear the risk collectively)? The answer determines whether IFRS 17 applies to the operator's own financial statements or to the participants' fund. Malaysia's Shariah Advisory Council has issued a ruling on this, and BNM's policy document reflects it. Other jurisdictions are still working through the analysis.

---

# Part Three: Cowork and the Multi-Jurisdiction Islamic Finance Plugin Architecture

---

## The Fundamental Problem: One Transaction, Five Different Accounting Outputs

Consider a murabaha transaction: a bank purchases industrial equipment for $1 million and sells it to a customer at a 20% mark-up over 24 months.

The same commercial transaction produces materially different accounting outputs depending on jurisdiction:

| Jurisdiction | Framework | Income Label | Receivable Label | Balance Sheet Category |
|---|---|---|---|---|
| Bahrain | AAOIFI FAS 2 | Murabaha Income | Murabaha Receivables | Financing Receivables (not "Loans") |
| Qatar | AAOIFI FAS 2 | Murabaha Income | Murabaha Receivables | Financing Receivables |
| Malaysia | MFRS 9 (IFRS 9) | Profit from Islamic Financing | Islamic Financing | Loans and Advances (with Islamic sub-classification) |
| UAE | IFRS 9 | Financing Income | Islamic Financing Receivables | Loans and Advances |
| Saudi Arabia | IFRS 9 as adopted | Murabaha Income (by convention) | Murabaha Receivables | Loans and Advances |
| UK | IFRS 9 | Profit from Home Finance | Islamic Finance Receivables | Loans and Advances |

An AI agent without jurisdiction-specific instructions will pick one of these and apply it uniformly. The Cowork Islamic finance plugin architecture prevents this by building a jurisdiction-aware SKILL.md layer that the agent activates before generating any output.

---

## The Plugin Stack Architecture

### Base Layer: knowledge-work-plugins/finance

The base finance plugin from Chapter 17 provides `/journal-entry`, `/reconciliation`, `/income-statement`, `/variance-analysis`, and `/sox-testing` commands. These remain the foundation. Install with:

```bash
claude plugin install finance@knowledge-work-plugins
```

### Jurisdiction Layer: SKILL.md Files

The Islamic finance SKILL.md library has two dimensions: **product SKILL.md files** (product-specific accounting rules) and **jurisdiction overlay SKILL.md files** (jurisdiction-specific presentation and disclosure requirements). The agent applies the product file first, then the jurisdiction overlay.

```
/skills/
  /products/
    murabaha.md              — FAS 2 / IFRS 9 dual-track rules
    ijarah-imb.md            — FAS 32 / IFRS 16 dual-track rules
    musharaka-dm.md          — FAS 4 / IFRS 9 analysis
    mudaraba.md              — FAS 3 / IAS 32 IAH classification
    musharaka-full.md        — FAS 4 / IFRS 11 joint arrangement analysis
    sukuk-issuer.md          — FAS 33 / IAS 32 issuer classification
    sukuk-investor.md        — FAS 25 / IFRS 9 SPPI test
    salam.md                 — FAS 7 / IFRS 9 and IFRS 15
    istisna-a.md             — FAS 10 / IFRS 15 over-time recognition
    takaful.md               — AAOIFI governance / IFRS 17
    zakat.md                 — Institutional zakat calculation
    shariah-screening.md     — Portfolio screening and purification
  /jurisdictions/
    bahrain-aaoifi.md        — Full AAOIFI FAS mandatory, CBB rulebook
    qatar-aaoifi.md          — Full AAOIFI FAS mandatory, QCB framework
    malaysia-mfrs.md         — MFRS / MASB Islamic guidance, BNM policy docs
    indonesia-psak.md        — PSAK Islamic banking standards, OJK framework
    saudi-ifrs.md            — IFRS as adopted KSA, SAMA rules, ZATCA zakat
    uae-ifrs.md              — IFRS, CBUAE rules, DIFC options
    kuwait-ifrs.md           — IFRS, CBK framework
    oman-ifrs.md             — IFRS accounting, AAOIFI Shariah mandatory
    pakistan-ifrs.md         — IFRS (listed), AAOIFI supplemental, SBP SGF
    uk-ifrs.md               — IFRS, PRA/FCA rules, HMRC tax equivalence
    nigeria-ifrs.md          — IFRS, CBN Non-Interest Banking Framework
    turkey-tfrs.md           — TFRS, BDDK participation banking framework
    gcc-crossborder.md       — Multi-jurisdiction GCC engagement rules
```

### Global Routing Instruction

The Cowork global instruction for any Islamic finance engagement:

```
Before any Islamic finance accounting output, confirm:
(1) Which jurisdiction? [Bahrain / Qatar / Malaysia / UAE / Saudi Arabia / UK / other]
(2) Which product? [Murabaha / Ijarah / DM / Mudaraba / Sukuk / other]
(3) Which entity type? [IFI (Islamic Financial Institution) / Corporate Client / Investor]
(4) Which framework? [AAOIFI FAS / MFRS / IFRS / Local GAAP]
Load the corresponding jurisdiction overlay SKILL.md and product SKILL.md before proceeding.
If jurisdiction is not specified, ask before proceeding.
NEVER default to IFRS without confirming the jurisdiction requires it.
NEVER use the term "interest income" in any Islamic finance output.
```

---

## Worked Example: Multi-Jurisdiction Sukuk Investor Accounting

**The scenario:** A single institutional investor holds sukuk issued in three jurisdictions:
- PKR 500M Government of Pakistan Ijarah Sukuk (GIS)
- USD 50M UAE corporate ijarah sukuk
- MYR 100M Malaysian government sukuk

The investor is a Bahrain-based Islamic bank (AAOIFI primary).

**Cowork prompt:**

*"I hold three sukuk positions. I am a Bahrain-based Islamic bank applying AAOIFI FAS as my primary framework. Classify each sukuk under AAOIFI FAS 25 and determine the measurement basis. For each: (1) What is the AAOIFI FAS 25 classification category? (2) What is the monthly income recognition journal entry? (3) What AAOIFI-specific disclosures are required?"*

With the `sukuk-investor.md` and `bahrain-aaoifi.md` SKILL.md files active, the agent:
- Applies AAOIFI FAS 25 categories (not IFRS 9 categories)
- Labels income as "income from sukuk" not "interest income" or "fair value gains"
- Generates AAOIFI-compliant disclosure notes including the asset-backing analysis for each sukuk
- Flags that the GIS is classified as an ijarah-based sukuk with amortised cost treatment under AAOIFI FAS 25

Without the jurisdiction overlay, the same prompt would produce an IFRS 9 SPPI analysis with "interest income" labels — correct for a UAE bank, wrong for Bahrain.

---

# Part Four: Jurisdiction-Specific SKILL.md Extensions

---

## Extension 1: Bahrain and Qatar — The AAOIFI Reference Implementation

The Bahrain and Qatar SKILL.md files encode the full AAOIFI FAS mandatory regime. Key instructions unique to these jurisdictions:

```
Primary accounting framework: AAOIFI Financial Accounting Standards.
For all murabaha transactions: apply FAS 2. Income = "Murabaha Income." Receivable = "Murabaha Receivables."
For all ijarah transactions: apply FAS 32. Lessor retains asset on balance sheet. Depreciate over useful life, not lease term.
For all musharaka/mudaraba: apply FAS 4/FAS 3 respectively. Equity of Investment Account Holders = separate balance sheet category.
For impairment: apply AAOIFI FAS 30. Stage classification may parallel IFRS 9 ECL staging but must be labelled per AAOIFI.
For Zakat: AAOIFI Governance Standard 9. Calculate on net zakatable assets. Disclose in Shariah compliance report.
For non-Shariah income: classify as charity payable (sadaqah). Disclose separately. Do not include in retained earnings.
NEVER present murabaha receivables as "loans and advances."
NEVER calculate or label income as "net interest margin" or "net interest income."
Mandatory SSB disclosures: include SSB composition, SSB report, fatwa references for new products.
CBB Rulebook (Bahrain) / QCB Instructions (Qatar): additional prudential disclosures as required.
```

---

## Extension 2: Malaysia — MFRS with Islamic Application Guidance

The Malaysia SKILL.md encodes the MASB and BNM overlay on standard MFRS:

```
Primary accounting framework: Malaysian Financial Reporting Standards (MFRS) — IFRS-equivalent.
Apply MFRS 9 (= IFRS 9) to Islamic financing receivables. Business model test and SPPI test apply.
For murabaha: MFRS 9 amortised cost. Income = "Profit from Islamic Financing" — NOT "interest income."
For ijarah/IMB: MFRS 16 (= IFRS 16). Assess lessor accounting — operating or finance lease.
Takaful: apply MFRS 17 with BNM Financial Reporting for Takaful Operators Policy Document overlay.
Investment accounts (mudaraba): assess as financial liabilities under MFRS 132 unless BNM policy specifies otherwise.
Sukuk: apply MFRS 9 SPPI test. Government Investment Issues (GII) and Government of Malaysia Sukuk Musharakah — classify as amortised cost if held-to-collect.
BNM disclosures: all Islamic financing disclosures must comply with BNM's Financial Reporting Policy Document.
Shariah Supervisory Board: SAC (Shariah Advisory Council of BNM) rulings take precedence over individual SSB opinions for Malaysian IFIs.
Securities Commission Malaysia: Islamic capital market products governed by SC Guidelines on Islamic Capital Market Products and Services.
Use Bahasa Malaysia or English; dual-language disclosures for domestic regulatory submissions.
```

---

## Extension 3: Saudi Arabia — IFRS with KSA-Specific Rules

```
Primary accounting framework: IFRS as adopted in the Kingdom of Saudi Arabia.
Apply IFRS 9 to Islamic financing. Income characterisation: "Murabaha Income" is acceptable by convention in KSA — not "interest income."
Zakat: ZATCA (Zakat, Tax and Customs Authority) rules govern zakat assessment. Islamic banks pay zakat on zakatable net worth at 2.5% p.a.
SAMA rules: Capital adequacy under Basel III framework applied to Islamic banks. Non-performing financing: SAMA NPL definitions apply.
Vision 2030 financing: Saudi sovereign sukuk, NHC (National Housing Company) sukuk — ijarah structures. Account as per IFRS 9 issuer treatment.
Al Rajhi Bank reference: world's largest Islamic bank. Financial statements IFRS-compliant. Reference for KSA Islamic banking presentation standards.
SDAIA (Saudi Data & Artificial Intelligence Authority): fintech and AI in banking subject to SAMA fintech regulatory sandbox.
```

---

## Extension 4: United Kingdom — IFRS with HMRC Tax Equivalence

```
Primary accounting framework: IFRS (FRS 101 or FRS 102 for smaller entities).
PRA/FCA rulebooks apply to all UK-authorised Islamic banks. No separate Islamic banking prudential framework — same capital requirements as conventional banks.
HMRC Islamic Finance Guidance: murabaha, diminishing musharaka, and other Islamic products receive tax treatment equivalent to their conventional counterparts. Murabaha profit = interest for tax purposes. This is statutory under Finance Act 2005 (as amended).
Al Rayan Bank / Gatehouse Bank / BLME as reference cases: IFRS-compliant financial statements. Murabaha receivables classified as financial assets under IFRS 9.
UK sukuk: HMRC Alternative Finance Investment Bonds — sovereign sukuk. Tax treatment specified in Finance Act 2007.
AAOIFI: no mandatory status. Used only for internal Shariah compliance governance.
FCA financial promotions: Islamic banking products must describe themselves accurately — cannot claim "no interest" without regulatory compliance guidance on consumer understanding.
UK Waqf and Islamic charitable structures: separate Charity Commission requirements.
```

---

## Extension 5: Africa — Frontier Market Jurisdictional Guidance

**Nigeria:**
```
CBN Non-Interest Banking Framework (2011): governs all non-interest (Islamic) banking operations.
BOFIA (Banks and Other Financial Institutions Act) as amended: applies to Jaiz Bank and all non-interest banking windows.
Apply IFRS as adopted in Nigeria. FRCN (Financial Reporting Council of Nigeria) oversight.
Jaiz Bank reference: first fully-fledged non-interest bank in Nigeria. IFRS financial statements.
Nigerian Sukuk: Debt Management Office sovereign sukuk programme. Ijarah structure backed by federal road assets.
SEC Nigeria: Islamic capital market instruments regulated under Investments and Securities Act.
```

**Kenya:**
```
Central Bank of Kenya Islamic banking guidelines: govern First Community Bank and Gulf African Bank.
Apply IFRS as adopted in Kenya. Institute of Certified Public Accountants of Kenya (ICPAK) oversight.
CBK Prudential Guidelines for Islamic financial institutions: chapter on non-interest banking.
Kenya sukuk: Capital Markets Authority guidelines for sukuk issuance.
```

---

# Part Five: Extensive Exercises — Multi-Jurisdiction and Global Scope

---

> **Before You Begin: Global Setup**
>
> All exercises in this section require the base finance plugin and Islamic finance SKILL.md library:
>
> ```bash
> claude plugin install finance@knowledge-work-plugins
> ```
>
> Set the global Cowork instruction:
> *"I am a professional accountant working on Islamic finance engagements across multiple jurisdictions. For every task, confirm the jurisdiction and applicable accounting framework before generating any output. Always specify in your response which jurisdiction and standard govern the output. NEVER label income as 'interest income' in any Islamic finance context. Load the appropriate jurisdiction overlay and product SKILL.md before proceeding."*
>
> Create folder structure:
> ```
> /Islamic-Finance-Global/
>   /bahrain-aaoifi/
>   /malaysia-mfrs/
>   /uae-ifrs/
>   /saudi-ifrs/
>   /uk-ifrs/
>   /nigeria/
>   /cross-jurisdiction/
>   /skills/products/
>   /skills/jurisdictions/
> ```

---

### Exercise 1: Murabaha Income Schedule — Bahrain (AAOIFI) vs. Malaysia (MFRS/IFRS 9)

**Domain:** Islamic Accounting — Murabaha
**Jurisdictions:** Bahrain (AAOIFI FAS 2) and Malaysia (MFRS 9)
**What you need:** Cowork, Claude in Excel. 35 minutes.

**Scenario:** An Islamic banking group has subsidiaries in both Bahrain and Malaysia. Both subsidiaries enter identical murabaha transactions: cost to bank BHD/MYR 500,000; mark-up 18% p.a.; tenure 18 months; monthly equal instalments.

**Step 1 — Build the Bahrain AAOIFI schedule.** Say: *"I am working on a Bahrain entity. Primary framework: AAOIFI FAS 2. Build a complete murabaha amortisation schedule for this transaction at /outputs/murabaha-bahrain.xlsx. Columns: Month, Opening Murabaha Receivable, Monthly Instalment, Principal Portion, Profit Portion (labelled 'Murabaha Income' not 'interest'), Deferred Murabaha Income Released, Closing Murabaha Receivable. Show the total Murabaha Income recognised over the facility life."*

**Step 2 — Build the Malaysia MFRS schedule.** Say: *"Now I am working on the Malaysian subsidiary. Primary framework: MFRS 9 (equivalent to IFRS 9). Build the identical schedule at /outputs/murabaha-malaysia.xlsx. Use the effective interest rate / effective profit rate method. Label the income 'Profit from Islamic Financing' — NOT 'interest income' and NOT 'murabaha income.' Show how MFRS 9 amortised cost measurement applies."*

**Step 3 — Compare the two schedules numerically.** Ask: *"Compare the two schedules. Are the numbers — opening receivable, period allocation, closing receivable — arithmetically identical? If yes, explain in one paragraph why two different accounting standards produce the same numbers but require different labels. If no, explain any numerical difference."*

**Step 4 — Generate journal entries for Month 1 under each framework.** Ask: *"Generate Month 1 journal entries for both the Bahrain entity (AAOIFI FAS 2) and the Malaysian entity (MFRS 9). Show all four entries for each. Note every labelling difference between the two sets of entries — both where the debit/credit is identical and where it differs."*

**Step 5 — Produce the disclosure notes for each.** Ask: *"Draft the murabaha receivable disclosure note for each entity's annual financial statements: (a) Bahrain — AAOIFI FAS 2 disclosure with the murabaha receivable movement table, deferred murabaha income movement table, and Shariah compliance accounting policy; (b) Malaysia — MFRS 7/MFRS 9 disclosure for Islamic financing receivables. Note the structural differences between the two disclosure sets."*

**Key learning:** The numbers are the same. The labels, the balance sheet presentation, and the disclosure structure are different. This exercise demonstrates why the SKILL.md jurisdiction overlay is not about changing mathematics — it is about ensuring the correct accounting language is used in the correct regulatory context. A Bahrain AAOIFI auditor reviewing financial statements that label murabaha income as "profit from Islamic financing" will raise a standards departure finding. A Malaysia MFRS auditor reviewing financial statements that label murabaha income as "Murabaha Income" without MFRS 9 measurement disclosures will equally raise findings. The correct output in each case is different, and only jurisdiction-specific agent instruction ensures the right output in each context.

**Target time:** 35 minutes.

---

### Exercise 2: Ijarah Accounting Across Four Jurisdictions

**Domain:** Islamic Accounting — Ijarah/IMB
**Jurisdictions:** Bahrain (AAOIFI FAS 32), Malaysia (MFRS 16), UAE (IFRS 16), UK (IFRS 16)
**What you need:** Cowork, Claude in Excel. 50 minutes.

**Scenario:** An Islamic bank provides equipment financing under an IMB structure in four jurisdictions. In each case: Asset cost $2,000,000. Monthly rental $40,000 (implies approximately 18% p.a.). Tenure 5 years. Ownership transfer at end by nominal sale.

**Step 1 — AAOIFI FAS 32 (Bahrain).** Ask: *"Jurisdiction: Bahrain. Framework: AAOIFI FAS 32. I am the LESSOR. Account for this IMB transaction: (1) Recognise the ijarah asset at cost. (2) Depreciate over the asset's useful life (assume 10 years, not the 5-year lease term). (3) Recognise monthly rental income. (4) Calculate the bank's annual profit: rental income minus annual depreciation. Build the 5-year schedule at /bahrain-aaoifi/imb-schedule.xlsx."*

**Step 2 — MFRS 16 (Malaysia).** Ask: *"Jurisdiction: Malaysia. Framework: MFRS 16. I am the LESSOR. Assess whether this IMB is a finance lease or operating lease under MFRS 16. Justify the classification. Then: for a finance lease — derecognise the asset, recognise a net investment in the lease, build the 5-year finance income schedule at /malaysia-mfrs/imb-schedule.xlsx."*

**Step 3 — IFRS 16 (UAE and UK) — the LESSEE.** Ask: *"Now I am the corporate CUSTOMER in the UAE (IFRS jurisdiction). The bank is providing the IMB. I must account for this from the lessee's perspective under IFRS 16. Incremental borrowing rate: 18% p.a. Calculate: (1) Present value of lease payments = right-of-use asset and initial lease liability. (2) Build the 5-year amortisation table: opening liability, monthly finance charge, monthly rental payment, closing liability. (3) Annual depreciation on ROU asset (straight-line over 5 years). (4) Total annual P&L charge: depreciation + finance charge. Build at /uae-ifrs/imb-lessee.xlsx."*

**Step 4 — Cross-jurisdiction balance sheet comparison.** Ask: *"Produce a comparison table showing the balance sheet presentation of this same transaction in each of the four jurisdictions at the end of Year 1: (a) Bahrain bank (AAOIFI): asset line, accumulated depreciation, net book value; (b) Malaysia bank (MFRS 16 finance lease): net investment in lease; (c) UAE corporate lessee (IFRS 16): right-of-use asset, lease liability; (d) UK corporate lessee (IFRS 16): same as UAE. Explain in one paragraph why the same transaction produces four structurally different balance sheet presentations."*

**Step 5 — Audit risk memo.** Ask: *"Draft a one-page audit risk memo identifying the top three accounting risks in an Islamic bank that operates IMB products in both Bahrain (AAOIFI) and Malaysia (MFRS 16). How would you ensure the consolidated group financial statements correctly reflect both sets of individual entity accounts?"*

**Key learning:** Step 2 and Step 3 are the most professionally important. In Malaysia under MFRS 16, the Islamic bank acting as finance lessor derecognises the leased asset and recognises a receivable — the asset disappears from the bank's books. Under AAOIFI FAS 32, the same asset stays on the bank's books throughout. These are not marginal differences. For a bank with $5 billion of IMB assets, the difference between AAOIFI and MFRS 16 treatment can be several billion dollars of assets either on or off the balance sheet — with direct regulatory capital consequences.

**Target time:** 50 minutes.

---

### Exercise 3: GCC Sukuk Issuance — Multi-Jurisdiction Accounting

**Domain:** Islamic Capital Markets — Sukuk
**Jurisdictions:** UAE (issuer), Malaysia (investor 1), Bahrain (investor 2), UK (investor 3)
**What you need:** Cowork, Claude in Excel. 60 minutes.

**Scenario:** Abu Dhabi National Energy Company (ADNEC) issues a $500 million 5-year ijarah sukuk. Underlying assets: UAE power generation infrastructure leased to ADNEC. Rental/distribution rate: 5.25% p.a. semi-annual. ADNEC provides a purchase undertaking at face value. Listed on Nasdaq Dubai and London Stock Exchange.

**Step 1 — UAE issuer accounting (IFRS).** Ask: *"Jurisdiction: UAE. Framework: IFRS. I am ADNEC (the issuer). Account for the sukuk issuance: (1) Does ADNEC derecognise the underlying power assets transferred to the SPV? Apply IFRS 9 derecognition criteria — has ADNEC transferred substantially all risks and rewards of the assets? Note the impact of the purchase undertaking at face value on the derecognition analysis. (2) Should the sukuk be classified as a financial liability or equity under IAS 32? (3) Generate the journal entry for initial recognition of the sukuk proceeds."*

**Step 2 — Bahrain investor accounting (AAOIFI).** Ask: *"Jurisdiction: Bahrain. Framework: AAOIFI FAS 25. Investor holds $50M of the sukuk. Classify this investment under AAOIFI FAS 25. What are the measurement categories? Apply the relevant category. Generate: (1) Journal entry for initial recognition; (2) Semi-annual income recognition entry; (3) Year-end measurement entry."*

**Step 3 — Malaysia investor accounting (MFRS 9).** Ask: *"Jurisdiction: Malaysia. Framework: MFRS 9. Same investor holds MYR 80M (equivalent $18M) of the sukuk. Apply the SPPI test: do the cash flows of this ijarah sukuk — semi-annual distributions and principal at maturity — represent solely payments of principal and a return consistent with a basic lending arrangement? Note the impact of the purchase undertaking (which fixes the repayment amount) on the SPPI analysis. Conclude: amortised cost, FVOCI, or FVTPL? Justify."*

**Step 4 — UK investor accounting (IFRS).** Ask: *"Jurisdiction: UK. Framework: IFRS 9. Same investor holds $25M. Apply the same SPPI test. Does the fact that this sukuk is listed on the London Stock Exchange, and the investor is an ICAEW-regulated fund manager, change any aspect of the accounting? Generate the IFRS 9 journal entries for initial recognition and the first semi-annual distribution."*

**Step 5 — Comparison and Shariah compliance analysis.** Ask: *"Produce a comparison table: Bahrain (AAOIFI FAS 25), Malaysia (MFRS 9), and UK (IFRS 9) investor accounting for the same $500M sukuk. For each: (1) Measurement basis; (2) Income label; (3) Balance sheet classification; (4) Impairment approach. Then answer: Is the purchase undertaking at face value a Shariah compliance concern? If AAOIFI Draft Standard 62 (asset-backed sukuk) were adopted, would ADNEC's sukuk pass the test? What structural change would be required?"*

**Key learning:** Steps 1 and 5 are the most professionally significant. The purchase undertaking analysis in Step 1 is the issue that determines whether ADNEC derecognises its power infrastructure or retains it — a potentially multi-billion dollar balance sheet difference. The AAOIFI Draft Standard 62 discussion in Step 5 is not academic: if Standard 62 is adopted, many existing sukuk structures will become non-compliant, requiring restructuring. The CA/CPA advising either the issuer or any of the three investors must understand the Standard 62 risk as a contingent accounting event.

**Target time:** 60 minutes.

---

### Exercise 4: Global Takaful Operator — IFRS 17 and Wakala Model

**Domain:** Takaful Accounting — IFRS 17 Global Application
**Jurisdictions:** Malaysia (MFRS 17), UAE (IFRS 17), UK (IFRS 17)
**What you need:** Cowork, Claude in Excel. 50 minutes.

**Scenario:** Etiqa Takaful Berhad (Malaysia) is preparing its first IFRS 17 financial statements. It operates a family takaful (life) and general takaful business under the wakala model. A UAE takaful operator and a UK takaful operator face the same transition.

**Step 1 — The IFRS 17 application question for takaful.** Ask: *"The fundamental IFRS 17 question for a wakala model takaful operator: The operator collects contributions from participants and manages a Participants' Fund. Under Shariah, participants collectively bear the insurance risk — not the operator. The operator earns a wakala fee for management. (1) Does the operator have insurance contracts on its own books for IFRS 17 purposes? (2) Is the Participants' Fund subject to IFRS 17? (3) What is BNM Malaysia's ruling on this question per the Financial Reporting for Takaful Operators Policy Document? How does Malaysia's approach compare to the UAE and UK, where similar BNM-level guidance does not yet exist?"*

**Step 2 — Malaysia (MFRS 17).** Ask: *"Jurisdiction: Malaysia. Framework: MFRS 17 with BNM overlay. Build Etiqa Takaful's income statement under MFRS 17 for its general takaful book: Gross written contributions: MYR 850M. Wakala fee (30% of contributions): MYR 255M. Claims incurred: MYR 410M. Retakaful (reinsurance) ceded: MYR 125M. Investment income on Participants' Fund: MYR 68M. Show: (a) Operator's own income statement — only the wakala fee and management expenses; (b) Participants' Fund statement — contributions, claims, retakaful, investment income."*

**Step 3 — Qard obligation.** Ask: *"In a given year, claims in the Participants' Fund exceed total contributions and investment income by MYR 45M. The Participants' Risk Fund is in deficit. Under Shariah, the operator must provide a qard hasan (interest-free loan) to restore solvency. (1) Generate the journal entries in both the operator's books and the Participants' Fund. (2) How is the qard recognised on the operator's balance sheet — as a receivable, an expense, or a contingent liability? (3) Under what circumstances would the qard be impaired or written off? (4) What is the IAS 37 / MFRS 137 analysis for the operator's contingent qard obligation before a deficit actually materialises?"*

**Step 4 — UAE comparison.** Ask: *"Jurisdiction: UAE. The UAE Insurance Authority (now the Financial and Supervisory Bureau) has not issued specific IFRS 17 takaful guidance equivalent to BNM's. A UAE takaful operator must apply IFRS 17 without a regulatory overlay. Apply the IFRS 17 Premium Allocation Approach (PAA) to the same transaction. Is the PAA an eligible simplification for this general takaful book (coverage period less than 12 months for most policies)? Show how PAA presentation differs from the BNM-guided Malaysia treatment."*

**Step 5 — Global takaful agent SKILL.md.** Ask: *"Draft the takaful product SKILL.md and the three jurisdiction overlays (Malaysia, UAE, UK). The product SKILL.md must resolve: (1) Operator vs. Participants' Fund — which entity holds the IFRS 17 insurance contracts? (2) Wakala fee revenue recognition; (3) Qard accounting trigger and initial recognition; (4) Surpluses and deficits in the Participants' Fund — distribution or retention? The jurisdiction overlays must specify any regulator-issued guidance that modifies the base IFRS 17 treatment."*

**Key learning:** The qard obligation in Step 3 is the most structurally important issue in takaful accounting — and the one most likely to generate an IAS 37 provision controversy. If the operator's obligation to provide qard whenever the Participants' Fund is in deficit is a present obligation arising from a past event (the original wakala contract), IAS 37 requires a provision even before a deficit occurs. Malaysian MFRS 137 / BNM guidance provides some direction. UAE and UK operators must reach their own technical conclusions. This is precisely the kind of complex, jurisdiction-specific professional judgment that benefits from a well-structured SKILL.md — not to make the judgment automatically, but to ensure the agent surfaces the issue and escalates it correctly.

**Target time:** 50 minutes.

---

### Exercise 5: Malaysia Sukuk Issuance — World's Largest Market

**Domain:** Islamic Capital Markets — Malaysia
**What you need:** Cowork, Claude in Excel and Word. 55 minutes.

Malaysia is the world's single largest sukuk market. This exercise works through a Malaysian corporate sukuk from structuring to financial statements.

**Scenario:** Tenaga Nasional Berhad (Malaysia's national electricity company) issues MYR 3 billion in 5-year sukuk musharakah. The sukuk is backed by Tenaga's electricity generation assets. Distribution rate: 4.75% p.a. quarterly. Malaysia's Securities Commission has approved the sukuk structure. RAM Ratings has assigned a rating of AAA.

**Step 1 — Issuer classification (MFRS 9 / IAS 32).** Ask: *"Jurisdiction: Malaysia. Framework: MFRS. I am Tenaga Nasional Berhad (issuer). Classify the sukuk musharakah under IAS 32: (1) Is it a financial liability (contractual obligation to deliver cash) or equity? (2) Does the fixed distribution rate create a financial liability? (3) Does the obligation to redeem at face value at maturity create a financial liability? (4) Conclude on balance sheet classification. (5) Generate the journal entry for the initial issuance of MYR 3 billion."*

**Step 2 — Quarterly distribution accounting.** Ask: *"Generate the quarterly distribution entries for Year 1 (four quarters). Distribution amount: MYR 3B × 4.75% ÷ 4 = MYR 35.625M per quarter. Under MFRS 9 amortised cost: (1) Is this distribution classified as a finance cost (P&L) or an equity distribution? (2) How does it appear in the income statement? (3) How does it affect the sukuk carrying value?"*

**Step 3 — Investor accounting — Employees Provident Fund (EPF).** Ask: *"Malaysia's Employees Provident Fund (EPF) holds MYR 500M of the sukuk in its Shariah savings portfolio. Framework: MFRS 9. (1) Business model test: EPF holds to collect contractual cash flows — which model? (2) SPPI test: do the cash flows represent solely principal and a Shariah-compliant return? (3) Classification: amortised cost or FVOCI? (4) Effective profit rate — calculate the discount rate equating initial price to all future cash flows. (5) Journal entries for initial recognition and first quarterly income."*

**Step 4 — Green sukuk overlay.** Ask: *"Tenaga wishes to designate this sukuk as a 'Green Sukuk' in accordance with the Securities Commission Malaysia's Sustainable and Responsible Investment (SRI) Sukuk Framework. (1) What additional disclosures are required in the offering circular? (2) What ongoing reporting obligations apply — use of proceeds reporting, impact reporting? (3) How does the Green designation affect the accounting — any difference in recognition or measurement? (4) Draft the Use of Proceeds section of the offering circular for a green sukuk financing solar generation assets."*

**Step 5 — SC Malaysia regulatory submission.** Ask: *"Draft the accounting and financial disclosure section of the Information Memorandum for this sukuk. Required sections per SC Malaysia's guidelines: (1) Summary of accounting policies for sukuk financing; (2) Historical and projected debt coverage ratios; (3) MFRS 9 classification rationale; (4) Risks relating to accounting treatment; (5) Shariah compliance certification summary. Format for submission to Bursa Malaysia and SC Malaysia."*

**Key learning:** Malaysia's SRI Sukuk Framework in Step 4 is a globally watched development. The convergence of Islamic finance's asset-backed, ethical principles with the global sustainable finance movement (ESG/green bonds) is one of the highest-growth developments in the Islamic capital markets industry. Sustainable sukuk grew by 17% in issuance in Q1 2024, mostly driven by GCC banks. A CA/CPA who can handle both the MFRS 9 accounting and the SRI Sukuk Framework disclosure requirements occupies a practice niche that currently has very few qualified practitioners.

**Target time:** 55 minutes.

---

### Exercise 6: Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi Benchmarking

**Domain:** Islamic Accounting — Saudi Arabia
**What you need:** Cowork, Claude in Excel and Word. 55 minutes.

**Scenario:** Al Rajhi Bank, the world's largest Islamic bank, has reported IFRS financial statements for years. A smaller Saudi IFI — Alinma Bank — is reviewing its accounting policies for murabaha, DM home finance, and zakat. Your firm is engaged to review the consistency of Alinma's accounting with Al Rajhi's IFRS benchmark.

**Step 1 — IFRS Murabaha benchmarking.** Ask: *"Jurisdiction: Saudi Arabia. Framework: IFRS as adopted in KSA. Al Rajhi Bank presents its murabaha and other Islamic financing under IFRS 9. Based on publicly available information about Al Rajhi's financial reporting: (1) How does Al Rajhi classify murabaha receivables on its balance sheet? (2) What income line item caption does Al Rajhi use for murabaha income? (3) How does Al Rajhi apply IFRS 9 ECL to its murabaha portfolio? Summarise these benchmark practices and apply them to Alinma Bank's accounting policy review."*

**Step 2 — ZATCA zakat computation.** Ask: *"Saudi Arabian IFIs pay zakat to ZATCA (Zakat, Tax and Customs Authority). The zakat base for a Saudi bank differs from the standard Hanafi institutional zakat calculation. ZATCA uses a Saudi-specific zakat base formula. (1) What is the ZATCA zakat base formula for Saudi banks? (Include: share capital + reserves + retained earnings – fixed assets – long-term investments). (2) Apply this formula to Alinma Bank: Share capital SAR 20B, Statutory reserves SAR 4.5B, Retained earnings SAR 3.2B, Fixed assets SAR 1.8B, Long-term sukuk investments SAR 5.0B. Calculate the ZATCA zakat obligation at 2.5%. (3) Generate the journal entry. (4) Note the difference between ZATCA zakat and institutional AAOIFI Governance Standard 9 zakat."*

**Step 3 — Vision 2030 sukuk accounting.** Ask: *"Saudi Arabia's Public Investment Fund (PIF) has issued multiple tranches of sukuk to fund Vision 2030 projects. Alinma Bank holds SAR 2 billion of PIF sukuk. (1) Classify the PIF sukuk under IFRS 9 — business model and SPPI analysis. (2) What is the Shariah structure of PIF sukuk? (Ijarah, musharakah, or wakala?) (3) Generate the journal entries for initial recognition and quarterly income accrual. (4) If global sukuk market yields rise by 100 bps, and Alinma holds the PIF sukuk at FVOCI: calculate the mark-to-market impact on OCI for SAR 2B face value, 5-year duration sukuk."*

**Step 4 — Green sukuk — Saudi Electricity Company.** Ask: *"Saudi Electricity Company issued a green sukuk in 2024 to fund renewable energy projects. Alinma Bank is a co-arranger and holds SAR 500M of the sukuk. (1) Draft the accounting policy note for the green sukuk investment in Alinma's financial statements. (2) What IFRS 7 disclosures are required for the sukuk holding? (3) What ESG/sustainability disclosures does SAMA encourage for Saudi IFIs' green sukuk holdings?"*

**Step 5 — Management accounts for the board.** Ask: *"Produce Alinma Bank's monthly Islamic finance management accounts: (1) Murabaha income — broken down by tenor bucket (less than 1 year, 1-3 years, over 3 years); (2) Home finance (DM) income — showing declining rental income trend as portfolio matures; (3) Sukuk portfolio — income and mark-to-market position; (4) Zakat accrual; (5) Key ratios: Net Financing Margin, NPF ratio, Coverage ratio. Format for the Saudi board of directors. All figures in SAR."*

**Key learning:** The ZATCA zakat formula in Step 2 is one of the most practical pieces of Saudi Islamic finance knowledge for an international practitioner. It is not the same as AAOIFI institutional zakat, and it is not the same as Hanafi fiqh zakat calculation. ZATCA has its own administratively determined formula, and Saudi IFIs pay zakat under ZATCA rules rather than self-determining their obligation under scholarly interpretation. The CA/CPA advising a Saudi IFI — or auditing one — must know which formula governs.

**Target time:** 55 minutes.

---

### Exercise 7: UK Islamic Bank — IFRS, PRA/FCA, and HMRC

**Domain:** Islamic Finance — Western Markets
**What you need:** Cowork, Claude in Word and Excel. 50 minutes.

**Scenario:** Al Rayan Bank (UK) is the largest UK Islamic bank. It offers Shariah-compliant home finance (diminishing musharaka), savings accounts (mudaraba), business finance (murabaha), and buy-to-let finance (ijarah). A new client — a UK property developer — is seeking Islamic construction finance.

**Step 1 — Diminishing musharaka home finance — IFRS 9 treatment.** Ask: *"Jurisdiction: UK. Framework: IFRS (FRS 101 for large companies). Al Rayan Bank provides DM home finance. The bank's share of a jointly purchased property: £500,000. Monthly rental on bank's share: £1,750 (approximately 4.2% p.a.). Monthly equity purchase: £1,000. (1) Apply IFRS 9 to this arrangement — business model and SPPI tests. (2) Classify the bank's share: financial asset at amortised cost, FVOCI, or joint asset (IAS 40 investment property)? (3) Is this a financial instrument (loan in economic substance) or a property co-ownership arrangement? (4) Generate the IFRS 9 journal entries for Month 1."*

**Step 2 — HMRC tax treatment.** Ask: *"UK HMRC treats Islamic finance products as tax-equivalent to their conventional counterparts under Finance Act 2005 (Alternative Finance Arrangements). (1) For the DM home finance: how does HMRC characterise the rental income and equity purchase payments for the bank's tax computation? (2) For the customer: how does HMRC treat the rental payments — as capital repayment (like mortgage principal) or rental expense? (3) Is there SDLT (Stamp Duty Land Transfer) relief for Islamic mortgages? (4) Draft a client advisory note explaining the HMRC treatment of DM home finance to the property developer."*

**Step 3 — Construction finance (istisna'a parallel structure).** Ask: *"The property developer needs £8M of construction finance. Al Rayan Bank offers this via a diminishing musharaka construction facility where the bank and developer co-fund construction, the developer manages construction as the bank's agent (wakeel), and on completion the developer begins buying out the bank's equity. (1) Is this structure an istisna'a, a construction DM, or a wakala? (2) How is the bank's construction-period investment recognised under IFRS 9? (3) When does the bank begin recognising financing income — from draw-down or from completion? (4) How does this compare to a conventional UK construction facility under IFRS 9?"*

**Step 4 — PRA/FCA regulatory capital treatment.** Ask: *"Under UK Prudential Regulation Authority (PRA) rules, all UK authorised banks apply Basel III capital requirements regardless of whether they are Islamic or conventional. (1) What is the credit risk-weighted asset (RWA) for the DM home finance — what risk weight does the PRA apply to residential mortgage exposures? (2) Does the Shariah structure of the DM arrangement change the RWA classification compared to a conventional mortgage? (3) What PRA returns must Al Rayan Bank submit that are the same as conventional bank returns? (4) Are there any PRA modifications or concessions for Islamic banks?"*

**Step 5 — Client report: Islamic vs. conventional construction finance.** Ask: *"Draft a client-facing advisory report for the UK property developer comparing: (1) Conventional construction finance (interest-bearing loan, LIBOR/SONIA + spread) vs. Al Rayan's Islamic construction DM facility; (2) Cost comparison — total payments over the 2-year construction period and 5-year buy-out; (3) HMRC treatment differences; (4) IFRS 16 lessee accounting if the developer is a UK listed company — does the construction period DM create an IFRS 16 right-of-use asset? (5) Shariah compliance certification requirement — what is the developer's obligation if they wish to describe their financing as 'Shariah-compliant' in their own investor communications?"*

**Key learning:** Step 4 is the most practically significant for UK Islamic banking practice. Al Rayan Bank is regulated by the PRA under exactly the same Basel III framework as Barclays and HSBC. It has no capital concessions for its Islamic structure. This means a Shariah-compliant home finance portfolio and a conventional mortgage portfolio are treated identically for regulatory capital purposes — the Shariah compliance determines the product design and customer contract, not the bank's regulatory burden. The CA/CPA advising UK Islamic banks must be equally at home with PRA capital requirements and Islamic finance accounting.

**Target time:** 50 minutes.

---

### Exercise 8: Nigeria Sovereign Sukuk — Infrastructure Finance Accounting

**Domain:** Islamic Capital Markets — Africa
**What you need:** Cowork, Claude in Excel and Word. 45 minutes.

Nigeria's Debt Management Office has issued multiple tranches of sovereign sukuk to finance road infrastructure. The N250 billion (2017), N100 billion (2018), and subsequent tranches have established Nigeria as Africa's most active sovereign sukuk issuer.

**Scenario:** The Federal Government of Nigeria (FGN) issues a N300 billion 7-year ijarah sukuk. Underlying assets: national road infrastructure. Distribution rate: 13.0% p.a. semi-annual. The sukuk is co-arranged by Stanbic IBTC and First City Monument Bank.

**Step 1 — FGN issuer accounting.** Ask: *"Jurisdiction: Nigeria. Framework: IFRS as adopted by the FGN (Federal Government of Nigeria Financial Reporting Guidelines). The FGN is the originator and issuer. (1) Does the FGN derecognise the road assets transferred to the sukuk SPV? Apply the IFRS 9 derecognition analysis — has the FGN transferred substantially all risks and rewards of the roads? (2) Does the purchase undertaking at par undermine derecognition? (3) How should the sukuk proceeds be classified — financial liability or other? (4) Generate the journal entries for: sukuk issuance, semi-annual distribution, and maturity repurchase."*

**Step 2 — Jaiz Bank investor accounting.** Ask: *"Jaiz Bank (Nigeria's first fully-fledged non-interest bank) holds N5 billion of the sukuk. Jaiz applies IFRS under CBN Non-Interest Banking Framework. (1) Classify under IFRS 9 — SPPI test; (2) Generate initial recognition entry; (3) Semi-annual distribution entry; (4) Year-end expected credit loss provision — what Stage would you assign to a FGN sukuk? Justify."*

**Step 3 — Sukuk programme reporting to CBN.** Ask: *"The CBN Non-Interest Banking Framework requires Jaiz Bank to submit quarterly returns on its sukuk portfolio. Draft the CBN non-interest banking regulatory return disclosures for the sukuk holding: (1) Classification of sukuk by structure type (ijarah, musharakah, etc.); (2) Maturity profile; (3) Credit quality assessment; (4) Income earned in the quarter; (5) Compliance with CBN investment concentration limits."*

**Step 4 — Infrastructure project accounting for the road.** Ask: *"The sukuk proceeds fund road construction across six states. The construction is contracted to Julius Berger Nigeria PLC. From Julius Berger's perspective as a Nigerian IFRS contractor: (1) Is this an IFRS 15 construction contract (over-time or point-in-time revenue recognition)? (2) What distinguishes an istisna'a construction contract from a conventional IFRS 15 contract for accounting purposes? (3) Does Julius Berger need to know the sukuk structure? Or does the sukuk structure only affect the government's accounting, not the contractor's?"*

**Step 5 — African Islamic finance landscape note.** Ask: *"Draft a 500-word professional briefing note on the African sovereign sukuk market for a practitioner new to the continent. Cover: the five most active African sukuk issuers (Nigeria, Senegal, Ivory Coast, South Africa, Egypt); the typical sukuk structures used; the accounting frameworks in each country; the infrastructure gap opportunity that sukuk is addressing; and the key risks unique to African sovereign sukuk (currency risk, political risk, construction risk on the underlying assets)."*

**Key learning:** Step 4 is deliberately placed to make a point: the road contractor Julius Berger accounts for its construction work under IFRS 15, exactly as it would for a conventional government construction contract. The sukuk structure is entirely irrelevant to Julius Berger. This illustrates a principle that is easy to miss: Islamic finance structures change the financing side of a transaction; they do not automatically change the accounting for every party involved in the commercial ecosystem around the transaction. Only the parties to the sukuk structure — the issuer, the SPV, and the sukuk investors — are accounting for the Islamic finance aspect.

**Target time:** 45 minutes.

---

### Exercise 9: Global Zakat — Institutional Calculation Across Jurisdictions

**Domain:** Zakat Accounting — Global
**Jurisdictions:** Saudi Arabia (ZATCA), Malaysia (voluntary AAOIFI), Pakistan (Zakat and Ushr Ordinance), UK (voluntary)
**What you need:** Cowork, Claude in Excel. 40 minutes.

Zakat is universal in Islamic finance, but its calculation and accounting treatment is jurisdiction-specific in ways that surprise even experienced practitioners.

**Step 1 — Build a global zakat comparison framework.** Ask: *"Compare the institutional zakat frameworks across four jurisdictions: (1) Saudi Arabia — ZATCA mandatory, specific balance-sheet formula; (2) Pakistan — Zakat and Ushr Ordinance 1980, deduction at source on bank accounts; (3) Malaysia — voluntary, based on AAOIFI Governance Standard 9 or Hanafi methodology; (4) UK — entirely voluntary, no regulatory obligation. Build a comparison table at /outputs/zakat-comparison.xlsx covering: Legal basis, Calculation method, Rate, Filing deadline, Regulator, Accounting treatment (P&L charge vs. equity appropriation vs. footnote-only)."*

**Step 2 — Saudi ZATCA zakat.** Ask: *"Apply the ZATCA zakat base formula to Al Rajhi Bank's 2023 position (use publicly available data or estimated figures): Share capital SAR 40B, retained earnings SAR 28B, statutory reserves SAR 18B, fixed assets SAR 6B, long-term investments SAR 45B. (1) Calculate the ZATCA zakat base; (2) Calculate the zakat obligation at 2.5%; (3) Generate the journal entry; (4) Note: how does ZATCA zakat interact with income tax? (In Saudi Arabia, zakat generally replaces income tax for Saudi-owned companies.)"*

**Step 3 — Malaysia voluntary zakat.** Ask: *"Maybank Islamic Berhad calculates and pays institutional zakat voluntarily under a fatwa approved by its Shariah supervisory board. Apply the Hanafi methodology (net zakatable assets minus current liabilities): Zakatable assets: cash MYR 12B, murabaha receivables (net) MYR 85B, sukuk investments MYR 32B. Non-zakatable: fixed assets MYR 4B, long-term investments MYR 8B. Current liabilities: MYR 45B. (1) Calculate the net zakatable wealth; (2) Apply the nisab check (assume gold nisab equivalent MYR 25,000 — clearly exceeded for a major bank); (3) Calculate the 2.5% zakat obligation; (4) How does this compare to the ZATCA formula? (5) Draft the zakat disclosure note for Maybank Islamic's annual report."*

**Step 4 — Pakistan Zakat and Ushr.** Ask: *"Pakistan's Zakat and Ushr Ordinance 1980 requires Islamic banks to deduct zakat at source from savings and investment accounts on the first day of Ramadan (the lunar year's first day). (1) What is the deduction rate? (2) From which account types is zakat deducted? (3) Where do the collected zakat funds go — NADRA / Central Zakat Fund? (4) How does the Islamic bank account for the zakat collected as agent? (5) What is the journal entry in the bank's books for zakat collected and remitted?"*

**Step 5 — Build the global zakat SKILL.md.** Ask: *"Draft the global zakat SKILL.md covering all four jurisdictions. The SKILL.md must specify: (1) When zakat is mandatory vs. voluntary by jurisdiction; (2) Which formula to use in each jurisdiction; (3) Whether zakat is a P&L expense, an equity appropriation, or a footnote-only disclosure; (4) The journal entry sequence for each jurisdiction; (5) The disclosure note content for each jurisdiction; (6) The trigger condition for the agent: if the user mentions zakat and a specific jurisdiction, automatically load the correct jurisdiction's zakat instructions."*

**Key learning:** The ZATCA formula produces a materially different zakat obligation than the AAOIFI/Hanafi formula for the same bank. ZATCA's formula starts from equity (share capital + reserves + retained earnings) and deducts fixed assets and long-term investments — it is fundamentally an equity-based measure. The AAOIFI/Hanafi formula focuses on liquid trade wealth — it is a liquid assets minus current liabilities measure. For a bank with a large fixed asset base and substantial long-term investments, ZATCA may produce a lower zakat obligation than the Hanafi formula; for a bank with predominantly liquid assets, ZATCA may produce a higher obligation. The practitioner advising a Saudi IFI must know ZATCA rules; the practitioner advising a Malaysian IFI chooses the formula endorsed by the IFI's Shariah board.

**Target time:** 40 minutes.

---

### Exercise 10: Shariah Portfolio Screening — Global Standards for Islamic Funds

**Domain:** Shariah Compliance — Portfolio Screening
**Jurisdictions:** Malaysia (SC SRI Framework), Saudi Arabia (Tadawul Shariah screen), Bahrain/AAOIFI, MSCI Islamic Index
**What you need:** Cowork, Claude in Excel. 45 minutes.

**Scenario:** Saturna Capital (a US-based Islamic fund manager) manages the Amana Income Fund, which invests globally in Shariah-compliant equities. The fund holds positions in 45 companies across Malaysia, Saudi Arabia, UAE, UK, and the US.

**Step 1 — Build the global screening framework.** Ask: *"Build a Shariah equity screening workbook at /outputs/global-shariah-screen.xlsx. The fund applies the most conservative of four screening frameworks: (1) Securities Commission Malaysia SRI Sukuk / SC Shariah screen; (2) Saudi Tadawul Shariah compliant list; (3) AAOIFI Shariah Standard 21 (Financial Papers); (4) MSCI Islamic Index Methodology. Key financial ratios — debt screen (33%), non-permissible income screen (5%), cash + interest-bearing securities screen (33%). Sector exclusions: conventional financial services, alcohol, tobacco, gambling, weapons, adult entertainment, pork. For each of the 45 companies, identify which of the four screens they pass and fail."*

**Step 2 — Purification calculation.** Ask: *"For all holdings where the company has non-Shariah income between 0% and 5% of total revenue, calculate the purification obligation. The fund received total dividends of USD 4.2M this quarter. Weighted average non-Shariah income ratio across the portfolio: 1.8%. (1) Calculate the purification amount; (2) Which charities are eligible recipients? (3) Generate the journal entry in the fund's books: Debit Purification Expense, Credit Purification Payable; (4) How is this disclosed in the fund's annual report and in communications to unitholders?"*

**Step 3 — Screening divergence analysis.** Ask: *"Three companies in the fund portfolio pass the SC Malaysia screen but fail the MSCI Islamic screen: (1) A Malaysian plantation company (palm oil — halal, but SC Malaysia includes it in its Shariah-compliant list while MSCI excludes it due to environmental concerns); (2) A Saudi financial services company that MSCI rates as non-compliant due to debt ratio but SC Malaysia approves; (3) A UK tech company that SC Malaysia excludes due to non-permissible income ratio of 6.2% but MSCI includes due to a different non-permissible income definition. How should the fund manager resolve these divergences? Which screen takes precedence?"*

**Step 4 — Quarterly SSB report.** Ask: *"Draft the quarterly Shariah Supervisory Board report for Saturna Capital's Amana Income Fund. Required sections: (1) Portfolio compliance status — % compliant, % borderline, % non-compliant; (2) Changes from prior quarter — newly non-compliant stocks requiring divestment; (3) Purification calculation and recommended distribution; (4) Stocks under board review; (5) Recommended actions. Format the report for a three-member global SSB (one scholar each from USA, Malaysia, and Saudi Arabia)."*

**Step 5 — Set up the quarterly Cowork screening task.** Write a `/schedule` task: *"On the first Monday following each calendar quarter-end: fetch the updated SC Malaysia Shariah list from /inputs/sc-malaysia-shariah-list.csv; fetch MSCI Islamic Index quarterly update from /inputs/msci-islamic-update.csv; compare to current portfolio holdings in /inputs/amana-holdings.xlsx; identify all screening changes; flag newly non-compliant holdings for immediate divestment alert; calculate purification obligation from quarterly dividend data; produce SSB quarterly report at /outputs/amana-ssb-report-[quarter].docx; send priority alert for any material compliance breaches."*

**Key learning:** The screening divergence in Step 3 is the most professionally important. Different Shariah screening methodologies produce different inclusion/exclusion decisions for the same company. A sophisticated Islamic fund manager — and their SSB — must have a documented policy for which methodology governs, and how conflicts are resolved. The CA/CPA conducting the fund's compliance review must understand not just one screening methodology but the full landscape. The Cowork agent cannot resolve the scholarly disagreement; it can surface it and report it systematically for the SSB to adjudicate.

**Target time:** 45 minutes.

---

### Exercise 11: AAOIFI vs. IFRS Full Comparative Financial Statements — Bahrain IFI

**Domain:** Islamic Accounting — Standards Reconciliation
**Jurisdiction:** Bahrain (AAOIFI primary), with IFRS comparison
**What you need:** Cowork, Claude in Excel. 90 minutes.
**This is the capstone accounting exercise of the chapter.**

**Entity:** ABC Islamic Bank (Bahrain) — a hypothetical mid-size Islamic bank with total assets of USD 8 billion.

Product mix: murabaha 45%, ijarah/IMB 30%, musharaka/mudaraba 20%, other 5%.
Liabilities: current accounts 15%, equity of investment account holders 65%, equity 20%.

**Step 1 — AAOIFI financial statements.** Ask: *"Jurisdiction: Bahrain. Framework: AAOIFI FAS mandatory. Build the complete AAOIFI financial statements for ABC Islamic Bank at /outputs/abc-bahrain-aaoifi.xlsx: (1) Statement of Financial Position — no 'loans and advances' line; use 'Murabaha Receivables,' 'Ijarah Assets,' 'Musharaka Investments'; (2) Statement of Income — 'Income from Murabaha,' 'Income from Ijarah,' 'Income from Musharaka/Mudaraba' — no 'Net Interest Income'; (3) Statement of Changes in Equity of Investment Account Holders — separate from bank's own equity; (4) Statement of Cash Flows."*

**Step 2 — IFRS reconciliation.** Ask: *"Identify the five most material accounting differences between AAOIFI and IFRS treatment for ABC Islamic Bank. For each: (a) AAOIFI treatment and presentation; (b) IFRS treatment and presentation; (c) USD impact on: assets, liabilities, equity, net income. Produce a reconciliation table at /outputs/abc-aaoifi-ifrs-reconciliation.xlsx."*

**Step 3 — IFRS financial statements.** Apply the reconciling adjustments. Produce IFRS financial statements at /outputs/abc-bahrain-ifrs.xlsx. The IFRS statements should comply with IAS 1 and IFRS 7.

**Step 4 — Key ratio comparison.** Ask: *"Calculate these ratios under both AAOIFI and IFRS: Net Financing Margin, Return on Assets, Return on Equity, NPF/NPL ratio, Equity of IAH to Total Assets. For which ratios is the difference material (>5%)? Explain why."*

**Step 5 — External auditor workpaper.** Ask: *"Draft the auditor's assessment of the five most significant audit risks at ABC Islamic Bank, specifically those that arise from or are exacerbated by the AAOIFI/IFRS framework tension. For each risk: source, assessment (high/medium/low), primary audit procedure, and the conclusion that must be documented in the working papers."*

**Step 6 — Build the master SKILL.md for Bahrain AAOIFI entities.** Ask: *"Based on all work in this exercise, draft the comprehensive Bahrain-AAOIFI jurisdiction overlay SKILL.md. It must cover: mandatory FAS reference list (FAS 2, 3, 4, 7, 8/32, 10, 25, 30, 33); balance sheet presentation requirements; income statement line item requirements; IAH fund treatment; SSB disclosure requirements; CBB Rulebook references; non-Shariah income treatment (charity payable); zakat disclosure requirements. Format as a complete, deployable SKILL.md file."*

**Key learning:** The ratio comparison in Step 4 is where the accounting framework choice becomes financially material. The AAOIFI treatment of investment account holders' funds as a separate balance sheet category (not a liability) inflates the apparent equity of the bank under AAOIFI relative to IFRS — which classifies IAH funds as financial liabilities. This directly affects the Return on Equity calculation: under AAOIFI, the equity base is larger and the ROE appears lower; under IFRS, the equity base is smaller and the ROE appears higher. For an investor comparing a Bahraini AAOIFI-reporting bank with a UAE IFRS-reporting bank, this framework difference can produce a multi-percentage-point difference in reported ROE that is entirely an accounting artefact, not a performance difference.

**Target time:** 90 minutes.

---

### Exercise 12: Cross-Border Islamic Banking Group — Consolidated Reporting Challenge

**Domain:** Islamic Accounting — Consolidation
**Jurisdictions:** Bahrain (parent), UAE (subsidiary 1), Malaysia (subsidiary 2), Pakistan (subsidiary 3)
**What you need:** Cowork, Claude in Excel. 75 minutes.

**Scenario:** Al Baraka Banking Group (Bahrain) operates in 16 countries. This exercise simplifies to a four-entity group: parent in Bahrain (AAOIFI), subsidiary in UAE (IFRS), subsidiary in Malaysia (MFRS), subsidiary in Pakistan (IFRS with SBP overlay).

**Step 1 — Identify consolidation adjustments.** Ask: *"What are the top five accounting policy differences that arise when consolidating a Bahrain AAOIFI entity (parent) with IFRS subsidiaries? For each: (1) The AAOIFI parent's treatment; (2) The IFRS subsidiary's treatment; (3) The consolidation adjustment required to achieve a uniform group accounting policy; (4) Whether the group consolidation should be AAOIFI or IFRS — and why."*

**Step 2 — IAH funds in consolidation.** Ask: *"The most complex consolidation issue is the treatment of Investment Account Holder (IAH) funds. The Bahrain parent presents IAH funds as a separate balance sheet category. The UAE and Malaysian subsidiaries present mudaraba investment accounts as financial liabilities. (1) Which treatment should the group adopt for consolidated financial statements? (2) If the group adopts AAOIFI treatment, what reclassification adjustment is required for the IFRS subsidiaries? (3) Generate the consolidation adjustment journal entry."*

**Step 3 — Intra-group murabaha.** Ask: *"The Bahrain parent provides a $200M murabaha facility to the UAE subsidiary to fund the subsidiary's lending operations. In the parent's books (AAOIFI): murabaha receivable. In the subsidiary's books (IFRS): inter-company payable. (1) Is this a genuine murabaha transaction (bank purchases and sells an asset) or an inter-company funding arrangement? (2) Should this be eliminated on consolidation as an intra-group transaction? (3) If eliminated, what are the consolidation adjustments? (4) Is there a Shariah compliance issue with intra-group murabaha — can one Islamic bank make a murabaha to another Islamic bank in the same group?"*

**Step 4 — Transfer pricing and Shariah.** Ask: *"The Pakistan subsidiary pays a mudarib fee to the Bahrain parent for investment management services. (1) Is a mudarib fee between group companies an arm's-length transaction from a Shariah perspective? (2) What Pakistan FBR (Federal Board of Revenue) transfer pricing rules apply to intra-group Islamic finance transactions? (3) How should the mudarib fee be documented to satisfy both Shariah compliance and Pakistan tax authority requirements?"*

**Step 5 — Group consolidated financial statements.** Ask: *"Produce the consolidated group financial statements summary (statement of financial position and income statement only) after all consolidation adjustments. Present under IFRS (as the primary framework for the consolidated group, even though Bahrain uses AAOIFI). Add supplementary AAOIFI disclosures in the notes for Bahrain regulatory compliance. Draft the accounting policy note explaining the dual-framework approach."*

**Key learning:** This exercise models the real challenge facing every Islamic banking group that operates across both AAOIFI jurisdictions (Bahrain, Qatar) and IFRS jurisdictions. Al Baraka, Islamic Development Bank Group, Bahrain Islamic Bank, and others face exactly this consolidation complexity. The accounting solution — IFRS primary for consolidated group with AAOIFI supplementary disclosures for Bahrain — is the pragmatic industry answer. The professional who can construct and audit this reconciliation is working at the frontier of global Islamic accounting practice.

**Target time:** 75 minutes.

---

### Exercise 13: Islamic Fintech and Digital Banking — Accounting for New Structures

**Domain:** Islamic Finance Innovation
**Jurisdictions:** Malaysia, UAE, UK
**What you need:** Cowork, Claude. 40 minutes.

Bank Aladin in Indonesia reached 3.2 million users by mid-2024 on the back of fully Shariah-compliant digital banking. Islamic fintech is one of the fastest-growing segments of the global Islamic finance industry, with digital murabaha, robo-advisers for Shariah-compliant portfolios, and P2P Islamic lending platforms emerging across all major markets.

**Step 1 — Digital murabaha platform.** Ask: *"A Malaysia-based Islamic fintech (HelloGold) offers a digital murabaha product: the platform (acting as the bank's agent/wakeel) purchases gold at spot price and immediately sells it to the customer at a mark-up with deferred payment, entirely via a mobile app. No physical delivery of gold occurs. (1) Is this a valid murabaha or a commodity murabaha (tawarruq)? (2) Under MFRS 9, how is the fintech's receivable from the customer classified? (3) What BNM/SC Malaysia licensing does the fintech require? (4) How does the revenue recognition differ between the fintech platform (earning a wakala fee) and the bank (earning murabaha income)?"*

**Step 2 — Robo-adviser for Islamic portfolios.** Ask: *"Wahed Invest (UK and US-registered) provides a Shariah-compliant robo-advisory investment platform. (1) What accounting treatment applies to the management fees earned by Wahed? (IFRS 15 performance obligations analysis) (2) What Shariah screening methodology must Wahed apply to its portfolio? (3) The purification obligation — does Wahed calculate and execute purification on behalf of clients, or is it the client's responsibility? (4) From a UK FCA perspective, is Wahed's offering regulated as a collective investment scheme, an investment adviser, or a portfolio manager?"*

**Step 3 — P2P Islamic lending.** Ask: *"A UK Islamic P2P platform matches Muslim savers (who want Shariah-compliant returns) with Muslim SME borrowers (who want Shariah-compliant financing). The platform uses murabaha structures. (1) Who is the IFI in this arrangement — the platform, or each individual saver? (2) Does the platform need FCA authorisation as a bank or as a peer-to-peer lending platform? (3) How does each saver account for their murabaha receivable — under IFRS 9 at amortised cost? (4) What Shariah compliance governance does the platform need — a full SSB, a single scholar, or a fatwa from an established institution?"*

**Step 4 — Green sukuk fintech.** Ask: *"A UAE-based climate fintech issues 'impact sukuk' to retail investors via a mobile app. The sukuk funds solar rooftop installations on UAE residential properties. Distribution comes from the solar energy revenue. (1) Is this an ijarah sukuk (investors own the solar panels, lease them to homeowners) or a musharaka sukuk (investors co-own the project)? (2) How are the retail investors' holdings accounted for under IFRS 9? (3) What ADGM (Abu Dhabi Global Market) regulatory framework applies? (4) Draft the accounting policy for the sukuk SPV."*

**Key learning:** Islamic fintech structures compress centuries of jurisprudence into a mobile app UX flow — and in doing so, they raise accounting questions that the standard-setters have not yet definitively resolved. The P2P lending question in Step 3 is particularly live in UK regulatory practice: the FCA P2P authorisation framework was not designed with Islamic finance structures in mind, and the question of who is the "IFI" in a distributed murabaha is genuinely open. The CA/CPA who is first to develop well-reasoned technical positions on these questions will be the sought-after adviser as the Islamic fintech market scales.

**Target time:** 40 minutes.

---

### Exercise 14: Full Islamic Finance Domain Agent — Global SKILL.md Library Build

**Domain:** Islamic Finance Agent Architecture
**What you need:** Cowork, 90 minutes across multiple sessions.
**This is the agent-building capstone for Chapter 20.**

This exercise builds the complete global Islamic finance SKILL.md library — all product files and all jurisdiction overlay files — and deploys them as an integrated, jurisdiction-aware Islamic finance domain agent.

**Step 1 — Audit the full skills library required.**

```
/skills/products/ (12 files):
  murabaha.md
  ijarah-imb.md
  musharaka-dm.md
  mudaraba.md
  musharaka-full.md
  sukuk-issuer.md
  sukuk-investor.md
  salam.md
  istisna-a.md
  takaful-ifrs17.md
  zakat-global.md
  shariah-screening-global.md

/skills/jurisdictions/ (13 files):
  bahrain-aaoifi.md        — AAOIFI primary (reference case)
  qatar-aaoifi.md          — AAOIFI primary
  malaysia-mfrs.md         — MFRS / BNM overlay
  indonesia-psak.md        — PSAK Islamic standards
  saudi-ifrs.md            — IFRS + ZATCA zakat
  uae-ifrs.md              — IFRS + CBUAE
  kuwait-ifrs.md           — IFRS + CBK
  oman-ifrs.md             — IFRS + AAOIFI Shariah mandatory
  pakistan-ifrs.md         — IFRS + SBP Shariah Governance Framework
  uk-ifrs.md               — IFRS + HMRC tax equivalence + PRA/FCA
  nigeria-ifrs.md          — IFRS + CBN Non-Interest Banking
  turkey-tfrs.md           — TFRS + BDDK participation banking
  gcc-crossborder.md       — Multi-jurisdiction GCC engagement rules
```

**Step 2 — Build the global routing master SKILL.md.** This is the top-level file that controls which product and jurisdiction files are loaded:

```yaml
---
name: islamic-finance-global-router
description: >
  Activate whenever any Islamic finance term appears in a query:
  murabaha, ijarah, musharaka, mudaraba, sukuk, takaful, zakat,
  AAOIFI, FAS, Shariah-compliant, Islamic banking, non-interest banking,
  halal finance, riba, gharar. 
  Before any output: identify jurisdiction and product, then load appropriate
  product SKILL.md and jurisdiction overlay SKILL.md.
---

## Routing Rules
Step 1: Identify jurisdiction from query context.
  - If no jurisdiction specified: ask the user before proceeding.
  - NEVER assume IFRS without confirming jurisdiction.
  - AAOIFI jurisdictions (mandatory): Bahrain, Qatar, Sudan.
  - MFRS jurisdictions: Malaysia.
  - IFRS jurisdictions: UAE, Saudi Arabia, Kuwait, Oman (accounting only), UK, Nigeria, Kenya, South Africa, Turkey.
  - Local standards: Iran, Bangladesh.

Step 2: Identify product from query context.
  - Load the corresponding product SKILL.md.

Step 3: Load the jurisdiction overlay SKILL.md.

Step 4: Apply product rules first, then jurisdiction overlay modifications.

Step 5: Before generating any journal entry or financial statement:
  - Confirm the governing standard in the response header.
  - Label income consistently with jurisdiction requirements.
  - NEVER use "interest income" in any Islamic finance context.
  - NEVER use "loans and advances" in AAOIFI regime outputs.
```

**Step 3 — Method A knowledge extraction for murabaha (AAOIFI regime).** Interview yourself: (a) What are the three most common AAOIFI FAS 2 errors in a Bahraini IFI's books? (b) What Shariah compliance conditions, if breached, would invalidate the murabaha accounting treatment? (c) What do you always check when reviewing a murabaha receivable aging report?

Convert to SKILL.md instructions. Ask Claude to review for gaps. Save as `/skills/products/murabaha.md`.

**Step 4 — Method B (document analysis) for all jurisdiction overlays.** For each of the 13 jurisdiction files: provide the relevant regulatory source (CBB rulebook excerpt, BNM policy document summary, SBP SGF key requirements, HMRC Islamic finance guidance summary) and ask Claude to extract the key accounting and disclosure rules into SKILL.md instruction format.

**Step 5 — Deploy all scheduled Islamic finance tasks.** Configure:

```
Daily:
/schedule murabaha-profit-recognition
/schedule ijarah-rental-recognition
/schedule sukuk-income-accrual

Monthly:
/schedule profit-pool-distribution      [mudaraba IAH calculation]
/schedule zakat-monitoring              [minimum balance tracking]
/schedule shariah-income-check         [non-Shariah income % check]

Quarterly:
/schedule shariah-portfolio-screen     [with jurisdiction-specific screen]
/schedule ssb-quarterly-report

Annual:
/schedule aaoifi-ifrs-reconciliation   [for Bahrain/Qatar groups with IFRS subsidiaries]
```

**Step 6 — Multi-jurisdiction test suite.** Run 13 test queries — one per jurisdiction — confirming the routing logic correctly loads the right overlay for each. Verify that: Bahrain output uses AAOIFI labels, Malaysia output uses MFRS 9 "profit from Islamic financing" labels, UK output includes HMRC tax equivalence note.

**Step 7 — Document the Islamic finance agent capability statement.** Produce a one-page capability statement for client engagements. The final paragraph must read:

*"This agent automates the mechanical accounting, schedule generation, disclosure drafting, and regulatory reporting workflows across 13 Islamic finance jurisdictions. It does not make Shariah compliance judgments. The question of whether a specific transaction structure is Shariah-permissible, whether a borderline equity screening case passes or fails the fund's adopted methodology, or whether a new product innovation complies with the relevant fatwa — these are judgments for qualified Shariah scholars on the institution's Shariah Supervisory Board. The agent's role is to execute, flag, escalate, and document. The SSB's role is to judge."*

**Target time:** 90 minutes.

---

> **Chapter 20 Exercise Map**
>
> | Exercise | Product/Domain | Jurisdictions | Key SKILL.md | Time |
> |---|---|---|---|---|
> | 1 | Murabaha | Bahrain vs. Malaysia | murabaha.md + bahrain/malaysia overlay | 35 min |
> | 2 | Ijarah/IMB | Bahrain, Malaysia, UAE, UK | ijarah-imb.md + 4 overlays | 50 min |
> | 3 | Sukuk issuance | UAE (issuer), Malaysia/Bahrain/UK (investors) | sukuk-issuer.md + sukuk-investor.md | 60 min |
> | 4 | Takaful / IFRS 17 | Malaysia, UAE, UK | takaful-ifrs17.md + overlays | 50 min |
> | 5 | Malaysia sukuk | Malaysia (world leader) | sukuk-issuer.md + malaysia-mfrs.md | 55 min |
> | 6 | Saudi IFI | Saudi Arabia | saudi-ifrs.md + zakat-global.md | 55 min |
> | 7 | UK Islamic bank | United Kingdom | uk-ifrs.md + musharaka-dm.md | 50 min |
> | 8 | Nigeria sovereign sukuk | Nigeria (Africa) | nigeria-ifrs.md + sukuk-issuer.md | 45 min |
> | 9 | Zakat — global | Saudi, Malaysia, Pakistan, UK | zakat-global.md | 40 min |
> | 10 | Shariah screening | Malaysia, Saudi, MSCI, AAOIFI | shariah-screening-global.md | 45 min |
> | 11 | AAOIFI vs. IFRS full comparison | Bahrain | bahrain-aaoifi.md (capstone) | 90 min |
> | 12 | Cross-border consolidation | Bahrain, UAE, Malaysia, Pakistan | gcc-crossborder.md | 75 min |
> | 13 | Islamic fintech | Malaysia, UAE, UK | Multiple | 40 min |
> | 14 | Full SKILL.md library build | Global (all jurisdictions) | All 25 files | 90 min |
>
> **Total practice time: approximately 20 hours.**

---

## Chapter Summary

Islamic finance is a $4.5 trillion global industry present in more than 80 countries. It is governed by at least three distinct accounting regimes — AAOIFI FAS mandatory (Bahrain, Qatar), MFRS/IFRS with Islamic application guidance (Malaysia, Indonesia, Pakistan), and IFRS without specific Islamic modification (UAE, Saudi Arabia, UK, most of Africa) — and local standard variations in jurisdictions like Iran and Bangladesh. It encompasses eight major product families, each with product-specific accounting treatment that differs materially from conventional equivalents. It is growing at approximately 10% per annum globally and at significantly higher rates in frontier markets like Africa and in Western markets as the ethical finance convergence with ESG draws non-Muslim institutional investors.

The central theme of this chapter is jurisdiction-aware AI. The generic finance plugins from Chapters 17 and 19 apply IFRS by default to every transaction. For Bahrain and Qatar — where AAOIFI is mandatory — that default is wrong on every Islamic finance accounting question. For Malaysia — where MFRS applies but with MASB Islamic application guidance — the default is partially right but incomplete. For the UK — where IFRS applies fully but HMRC tax equivalence rules change the tax treatment — the default is right for accounting but incomplete for advisory work. The jurisdiction-aware SKILL.md layer built in this chapter is what converts a generic financial accounting agent into a deployable Islamic finance domain agent.

Five structural insights from this chapter deserve to be carried forward:

**One: The accounting numbers are often identical across frameworks; the labels and disclosures differ.** A murabaha schedule under AAOIFI FAS 2 and under IFRS 9 produces the same amortisation figures. The difference is in what those figures are called, how they are presented, and what supplementary disclosures are required. An AI agent that gets the calculation right but the labels wrong produces a compliance error.

**Two: The IFRS/AAOIFI convergence project is unfinished.** AAOIFI is actively reviewing its standards to identify and remove deviations that do not conflict with IASB, aiming to align the two frameworks more closely. Despite these efforts, significant differences remain in the classification, recognition, measurement, and presentation of Islamic finance products. The practitioner working today must navigate the current divergence, not the eventual convergence.

**Three: Sukuk accounting has one unresolved structural risk.** Draft AAOIFI Standard 62's proposed shift from asset-based to asset-backed sukuk would, if adopted, require restructuring of a significant portion of the global sukuk market. Any practitioner advising on sukuk issuance or investment in 2025–2027 must assess the Standard 62 risk as a material contingent event.

**Four: Islamic fintech is creating accounting questions the standards haven't answered.** Digital murabaha, P2P Islamic lending, impact sukuk through mobile apps — these structures are scaling faster than the standard-setters can respond. The CA/CPA who develops well-reasoned technical positions now will be the sought-after adviser as the sector grows.

**Five: The agent executes; the SSB judges.** No SKILL.md file and no AI agent can determine whether a specific transaction structure is Shariah-permissible. Shariah compliance is a scholarly function, not an accounting function. The value of the AI-augmented Islamic finance practice is not that it automates judgment — it is that it automates execution, freeing the CA/CPA's time for the judgment work that only qualified professionals can perform, and ensuring that the escalation to the Shariah Supervisory Board happens consistently, systematically, and with complete supporting documentation.

The practitioner who masters both the global standard landscape and the Cowork toolkit to navigate it is working at the frontier of a profession that is simultaneously ancient in its jurisprudential roots and cutting-edge in its AI implementation challenge.

---

*Continue to Chapter 21: Banking and Financial Institution Domain Agents →*
