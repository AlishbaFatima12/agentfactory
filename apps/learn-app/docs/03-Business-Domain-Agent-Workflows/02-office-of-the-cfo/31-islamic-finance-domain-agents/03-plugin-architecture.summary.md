### Core Concept

The jurisdiction-aware agent uses a three-layer plugin stack (base finance, product skills (accounting mechanics), and jurisdiction overlays (labels and disclosures)) coordinated by a global router that never defaults to any framework and always asks if the jurisdiction is unclear.

### Key Mental Models

- **Separation of Concerns**: Product skills contain the arithmetic (journal entries, recognition rules, measurement methods) while jurisdiction overlays contain the compliance layer (labels, balance sheet presentation, regulatory references): this separation means adding a new jurisdiction requires only a new overlay, not modifying existing product logic.
- **Router as Controller, Not Engine**: The router contains zero accounting rules; it identifies jurisdiction and product from query signals (country names, currencies, regulator names), then loads the correct files before any output is generated.

### Critical Patterns

- Four-step routing: identify jurisdiction, identify product, load overlay, apply rules in order (product first, overlay second)
- Universal prohibited terms enforced everywhere: never "interest income," never "loans and advances" in AAOIFI jurisdictions, never "interest expense" or "net interest margin"
- Shariah compliance escalation triggers: new product structures, unconfirmed Shariah conditions, non-Shariah income items, or conventional instruments proposed as Islamic
- The fundamental limitation: the agent executes accounting entries; the Shariah Supervisory Board judges compliance: this boundary is non-negotiable

### Common Mistakes

- Letting the agent default to IFRS when no jurisdiction is specified: producing wrong output silently is worse than asking one clarifying question
- Combining product logic and jurisdiction labels in a single file: this prevents extensibility and forces edits to shared logic when adding new jurisdictions

### Connections

- **Builds on**: Lesson 2's Global Standards Map and the three-regime classification
- **Leads to**: Lessons 4-7 where individual product skills (murabaha, ijarah, sukuk, takaful) are examined in depth across jurisdictions
