### Core Concept

Transaction monitoring systems detect suspicious activity by matching transaction patterns against known money laundering typologies — rules-based systems use static thresholds (generating 95-99% false positive rates) while ML approaches (peer group analysis, network analysis, behavioural anomaly detection) reduce false positives by 50-70% — and when suspicion is confirmed, the end-to-end SAR filing workflow (alert, triage, investigation, MLRO review, filing) must respect the tipping-off prohibition that makes it a criminal offence to disclose SAR-related information.

### Key Mental Models

- **Rules vs ML as Complementary, Not Competing**: Rules-based TM is transparent and auditable (a regulator can examine exactly why an alert fired) but suffers from static thresholds, no adaptive learning, and extreme false positive rates. ML approaches detect novel typologies and adapt to customer segments but require model governance, explainability, and back-testing. Most production deployments use a hybrid — rules for known typologies, ML for anomaly detection.
- **Tipping-Off as a Criminal Law Constraint on AI Design**: An AI agent operating in banking must never include SAR status in customer-facing output, never include investigation status in general audit trails, never respond to customer queries about restrictions with AML-specific language, and must log all SAR-related data in restricted-access systems — because any disclosure constitutes tipping-off, a criminal offence punishable by up to two years' imprisonment.

### Critical Patterns

- Common typologies: structuring (deposits just below reporting thresholds), round-tripping (funds leave and return through intermediaries), velocity (unusually high transaction frequency), geographic (high-risk jurisdictions), and PEP-related (transfers involving politically exposed persons)
- The alert-to-SAR pipeline flows through triage (L1 analyst, 5-10 minutes), investigation (L2 analyst, 2-8 hours), MLRO review (personal liability), and filing with the national authority (UK NCA, US FinCEN, Australia AUSTRAC)
- Filing timelines vary by jurisdiction: UK "as soon as practicable," US within 30 days, Australia within 3 business days

### Common Mistakes

- Designing AI chatbots or automated letters that reference AML investigations, financial crime reviews, or account restrictions with specific compliance language — each constitutes tipping-off
- Assuming ML-based TM eliminates the need for rules — regulators require both interpretability and evidence that ML does not create blind spots, and rules remain necessary for well-understood typologies

### Connections

- **Builds on**: Lesson 9's three lines of defence, CDD/EDD, and the agent boundary — this lesson covers the operational mechanics of what happens during the ongoing customer relationship
- **Leads to**: Lesson 11's cross-pillar integration, where AML triggers cascade into IFRS 9 stage migration and Basel capital impact
