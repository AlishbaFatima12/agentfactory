# Litigation Support, Legal Hold, and Canned Responses; Summary

## Core Concept

When a dispute escalates from commercial negotiation to formal proceedings -- or becomes reasonably foreseeable -- the organisation's obligations change fundamentally. The `/respond` command automates the operational mechanics of litigation holds (issuing preservation notices, tracking custodian acknowledgements, sending IT suspension requests) while enforcing an absolute governance boundary: litigation strategy is exclusively attorney work. The lesson also covers seven categories of canned responses with built-in escalation triggers that stop templated responses when human judgment is required.

## Key Mental Models

- **Legal hold (litigation hold)**: A directive requiring preservation of all documents and ESI that may be relevant to a pending or reasonably anticipated dispute -- triggered when litigation is "reasonably anticipated," not when a lawsuit is actually filed
- **Four outputs of /respond litigation-hold**: Hold notice (for custodian distribution), custodian list (cross-referenced against directory), acknowledgement tracker (3/5/7 day escalation), IT suspension notice (automated deletion policies)
- **The absolute governance boundary**: The agent handles operational tasks (notices, tracking, indices, chronologies); the attorney handles strategic tasks (merit assessment, settlement positions, privilege assertions, pleadings) -- this boundary is non-negotiable
- **Preservation failure consequences**: Spoliation of evidence, adverse inference instructions (court assumes destroyed evidence was unfavourable), monetary sanctions, and in severe cases, default judgment
- **Seven canned response categories**: Discovery hold, privacy inquiry, DSAR, vendor question, NDA request, subpoena/legal process, insurance notification
- **Universal escalation triggers**: Potential litigation, regulator inquiry, binding commitments, criminal liability, media attention, unprecedented situation -- any of these stops the template and routes to an attorney

## Critical Patterns

- Litigation holds are triggered by events signalling reasonable anticipation of litigation: demand letters, regulatory investigation notices, significant customer complaints
- The preservation notice must specify: matter, scope of materials, ESI categories (email, documents, chat, database records, backups), and custodian obligations
- Custodian acknowledgement escalation: Day 3 (reminder), Day 5 (manager notification), Day 7 (General Counsel notification)
- IT suspension requests must cover all systems: email retention, chat platforms, code repositories, document storage, backup rotation
- Departed employees require special handling -- their data (email archives, documents, code contributions) must be preserved by IT before account decommissioning

## Common Mistakes

- Waiting for a lawsuit to be filed before issuing a legal hold -- the obligation attaches when litigation is "reasonably anticipated," which includes demand letters and regulatory notices
- Allowing the agent to assess litigation merits or recommend settlement positions -- these are attorney functions protected by legal professional privilege
- Issuing a hold notice without identifying departed custodians -- their data may already be on deletion schedules
- Not suspending automated deletion policies (email retention, backup rotation) -- routine IT policies can destroy relevant evidence
- Confusing operational support with strategic decisions -- compiling a chronology of code commits is operational; determining which documents are responsive to discovery is strategic

## Connections

- Tier 3 NDA issues from **L05** (residuals clauses, asymmetric injunctive relief) sometimes escalate to the litigation scenarios covered here
- The governance boundary established here (operational vs. strategic) is the strongest form of the attorney-review principle from **L03** and **L07**
- The `/respond` command's canned response categories handle routine correspondence that would otherwise consume legal ops capacity -- connecting to the efficiency themes across the chapter
- The DSAR response category introduced here is expanded into a full agent workflow in **L11**
- The preservation notice workflow becomes one component of the Contract Intake Agent's capabilities in **L10**, where litigation-related documents trigger automatic hold procedures
