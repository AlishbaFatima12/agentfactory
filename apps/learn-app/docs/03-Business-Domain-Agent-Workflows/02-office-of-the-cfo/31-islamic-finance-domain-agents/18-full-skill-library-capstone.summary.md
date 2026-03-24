### Core Concept

The complete Islamic finance agent deploys a 25-file SKILL.md library (12 product skills + 13 jurisdiction overlays) with a global routing skill that enforces a strict protocol (identify jurisdiction, identify product, load product skill, load jurisdiction overlay, apply product rules first then overlay modifications) and the agent capability statement defines the non-negotiable boundary: the agent executes accounting mechanics; the Shariah Supervisory Board judges permissibility.

### Key Mental Models

- **Router-to-Product-to-Overlay Architecture**: The three-layer stack (global router dispatches to product skill, then loads jurisdiction overlay) ensures the correct framework is applied before any output. If jurisdiction is not specified, the agent must ask: never defaulting to IFRS without confirmation. This pattern transfers to any domain where the same transaction has different rules by jurisdiction.
- **Knowledge Extraction Methods A and B**: Method A (interview-based) converts professional knowledge into SKILL.md instructions by asking three targeted questions about common errors, Shariah breach conditions, and audit procedures. Method B (document analysis) converts regulatory source documents into SKILL.md format by extracting framework, AAOIFI role, treatment differences, disclosures, and NEVER rules. Both methods produce deployable files, not reference documents.

### Critical Patterns

- The library audit requires evaluating structural completeness across all 25 files: governing standard specified, key accounting instructions present, NEVER rules defined, and SSB escalation triggers documented
- A 13-query multi-jurisdiction test suite validates routing correctness: each query tests that the correct framework loads, the correct income labels appear, and jurisdiction-specific disclosures are produced
- Scheduled tasks span four frequencies: daily (murabaha profit accrual, ijarah rental recognition, sukuk income accrual), monthly (IAH profit pool distribution, zakat monitoring, Shariah income check), quarterly (portfolio screening, SSB report), and annual (AAOIFI-IFRS reconciliation)
- The agent capability statement must precisely define the execution-vs-judgment boundary: the agent automates accounting, scheduling, disclosure drafting, and regulatory reporting; it does not determine whether a transaction structure is Shariah-permissible

### Common Mistakes

- Treating the capstone as a mechanical file-copying exercise: the library audit requires evaluating whether each file's instructions are structurally complete, not just confirming file existence
- Skipping the test suite: without validation across all 13 jurisdictions, the deployment is speculative; a single routing failure means incorrect framework application for an entire jurisdiction

### Connections

- **Builds on**: Every prior lesson in the chapter: products (L04-L07), jurisdictions (L08-L12), screening (L13), AAOIFI vs IFRS (L14), consolidation (L15), and fintech (L16) all feed into the deployed library
- **Leads to**: Cross-domain transfer: the router-to-product-to-overlay architecture applies to any domain with jurisdictional variation (international tax, pharmaceutical regulation, employment law), making this a reusable architectural pattern beyond Islamic finance
