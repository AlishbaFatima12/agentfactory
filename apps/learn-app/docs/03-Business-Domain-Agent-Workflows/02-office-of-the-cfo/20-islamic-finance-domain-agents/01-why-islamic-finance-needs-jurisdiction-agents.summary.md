### Core Concept

Islamic finance spans 80+ countries and three distinct accounting regimes, so the same transaction produces different accounting outputs depending on jurisdiction — an AI agent must know which jurisdiction it operates in before generating any entry.

### Key Mental Models

- **Same Transaction, Different Outputs**: A murabaha in Bahrain produces "Murabaha Income" under AAOIFI FAS 2, while the identical economics in Malaysia produce "Profit from Islamic Financing" under MFRS 9 — the arithmetic is identical but the labels are compliance requirements, not preferences.
- **Three Accounting Regimes**: All jurisdictions resolve into AAOIFI Primary (Bahrain, Qatar), IFRS with Islamic Guidance (Malaysia, UAE, Saudi Arabia, UK), or Local Standards (Iran, some African jurisdictions) — reducing a 20-country problem to a three-category routing problem.

### Critical Patterns

- The Three Pillars (prohibitions of riba, gharar, maysir plus principles of asset-backing, risk-sharing, ethical screening) are universal across all jurisdictions — only the accounting reflection varies
- A router-to-product-skill-to-jurisdiction-overlay architecture solves the multi-framework problem by separating accounting mechanics from jurisdiction-specific labels
- Generic finance agents fail because they default to one framework and produce non-compliant output in every other jurisdiction

### Common Mistakes

- Using "Interest Income" in any Islamic finance context — this violates foundational Shariah terminology requirements in every jurisdiction
- Assuming a single accounting framework covers all Islamic finance work — even within the same banking group, different subsidiaries may operate under different regimes

### Connections

- **Builds on**: Chapter 19's single-jurisdiction domain agents for CA/CPA practice areas
- **Leads to**: Lesson 2's Global Standards Map, which maps all 20 reference jurisdictions to their specific regime
