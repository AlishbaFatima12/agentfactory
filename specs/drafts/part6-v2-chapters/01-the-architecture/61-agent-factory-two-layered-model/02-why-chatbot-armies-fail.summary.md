### Core Concept

Independent chatbots sharing a database are strangers sharing a fridge: everyone puts things in, nobody labels anything, and someone eventually drinks the wrong milk. Three structural failures doom the chatbot-army approach: no shared data contracts, no handoff protocols, and no governance. Adding contracts, verification, orchestration, and governance transforms a collection of chatbots into a factory.

### Key Mental Models

- **Data contracts**: Explicit definitions of the structure, types, and constraints of data passed between workers. Without them, when one chatbot changes its output format the others break silently.
- **Handoff protocols**: Defined agreements specifying who sends, who receives, what format, and what happens on failure. The chatbot army has none; it just hopes the database makes sense.
- **SaaS vs. Agent Factory paradigm**: SaaS era: apps with APIs, integration as afterthought. Agent Factory era: workers with contracts, integration as the architecture.

### Critical Patterns

- Silent failure is the most dangerous chatbot-army failure mode: the Interview Question Generator reads `grade: A`, ignores it, and generates generic questions for every candidate. Nobody detects the problem because nobody defined the contract.
- The departmental spreadsheet problem (purchasing in Excel, warehouse in Google Sheets, Monday-morning reconciliation) maps directly to chatbot armies: the fix in both cases is a shared system with defined fields and validation rules.
- The four concepts James derives independently: contracts, verification, orchestration, governance. These are exactly the ingredients of a factory.

### Common Mistakes

- Assuming agents will "figure it out from context" when data formats change across pipeline stages.
- Treating a shared database as a coordination mechanism: reading from a shared store is not a contract.
- Building chatbots first and planning to add coordination later; the cost of retrofitting verification is far higher than designing it in from the start.

### Connections

- **Builds on**: Lesson 1's workforce vs. app-collection distinction; the SmartNotes output-format change scenario introduced there.
- **Leads to**: Lesson 3's Two-Layered Model, which provides the architectural solution to the coordination problem named here; governance detail in Lesson 4.
