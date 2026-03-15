### Core Concept

The three lines of defence model assigns specific AML accountability — the first line (customer-facing business) performs CDD at onboarding, the second line (financial crime compliance) designs the framework and makes SAR filing decisions, and the third line (internal audit) provides independent assurance — with a hard boundary where AI agents can automate screening, data gathering, and risk scoring, but must never make risk acceptance decisions or file SARs because those carry personal criminal liability.

### Key Mental Models

- **CDD vs EDD as Risk-Proportionate Scrutiny**: Standard Customer Due Diligence (identity verification, source of funds, risk rating) is sufficient for low-risk domestic customers, but Enhanced Due Diligence is mandatory when any elevated risk indicator is present — PEP status, high-risk jurisdiction (FATF grey/black list), complex ownership structures, or high-value transactions — and a single trigger is sufficient to require EDD.
- **The Agent Boundary in AML**: AI can automate identity document verification, PEP screening, adverse media screening, sanctions list screening, transaction monitoring alert generation, and risk scoring — but risk acceptance decisions, EDD conclusions, SAR filing decisions, overriding risk scores, and customer relationship exit decisions require human judgment because they carry legal and criminal liability.

### Critical Patterns

- PEP status extends to family members (spouse, children, parents, siblings) and close associates (business partners, joint beneficial owners), with many jurisdictions applying ongoing enhanced monitoring indefinitely for former PEPs
- Beneficial ownership identification uses a 25% threshold — any natural person holding 25% or more of shares, voting rights, or control — and for complex structures, the bank must trace through multiple layers of holding companies and trusts
- The SAR filing decision carries personal criminal liability for the MLRO; tipping-off (informing anyone that a SAR has been or may be filed) is a criminal offence under POCA 2002 s333A, punishable by up to two years' imprisonment

### Common Mistakes

- Treating PEP status as an indication of criminality — it means elevated corruption and bribery risk requiring enhanced scrutiny, not that the person has done anything wrong
- Allowing an AI agent to make customer onboarding accept/reject decisions or to communicate AML concerns to customers — both cross the hard boundary into human-judgment territory with criminal liability implications

### Connections

- **Builds on**: Lessons 6-8's solvency pillar, shifting to the third regulatory pillar — financial crime compliance — which protects the bank against being used as a conduit for illicit activity
- **Leads to**: Lesson 10's transaction monitoring and SAR filing workflow, covering the operational mechanics of financial crime detection during the customer relationship
