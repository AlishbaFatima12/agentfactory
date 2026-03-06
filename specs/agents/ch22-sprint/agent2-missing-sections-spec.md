# Agent Spec: Chapter Content — Missing Sections

## Mission

Write the content blocks identified as entirely missing from Chapter 22: GCC legal context, employment law as a Legal Ops use case, cross-border contract analysis, litigation support workflows, and a plugin installation walkthrough. Produce a single file containing all missing sections ready to be merged into the final chapter.

## Quality Standard

Your output must match the depth of Chapter 17 (Finance) and Chapter 20 (Islamic Finance). Specifically:

- Every section must have introductory prose (not just bullets)
- Every section must have at least one worked example with named parties and specific numbers
- Pakistan or GCC context must appear in at least 1 in 4 examples
- Every new legal/tech term must have a concept box before first use

## Input Files (read all before writing)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_Legal_Operations.md`: The governing artifact. Understand its structure so your sections integrate naturally.
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/uae-law.md`: UAE legal context
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/pakistan-law.md`: Pakistan legal context
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/contract-review/SKILL.md`: Contract review workflow details
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/dsar-privacy/SKILL.md`: DSAR workflow details

## Output Files

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_missing_sections.md`: All missing sections in a single file, each clearly marked with where it should be inserted in the main chapter.

## Work Order

### Section A: GCC Legal Context (insert after Part Six, before Exercises)

- Covers: Legal operations in GCC jurisdictions — UAE (mainland, DIFC, ADGM), Saudi Arabia, Bahrain, Qatar
- Minimum: 1,500 words
- Must include:
  - Concept box for DIFC (Dubai International Financial Centre)
  - Concept box for ADGM (Abu Dhabi Global Market)
  - Worked example: A Riyadh-based fintech company reviewing a vendor agreement governed by DIFC law. Named parties, specific contract value (AED), real agent dialogue.
  - The dual legal system challenge (civil law mainland vs common law free zones)
  - How the Legal Plugin handles jurisdiction complexity with overlays
  - Saudi Vision 2030 commercial law reforms and their impact on contract review
  - UAE Federal Decree-Law No. 33 of 2021 (Personal Data Protection Law)

### Section B: Employment Law as Legal Ops Use Case (insert in Part Four after Agent 5)

- Covers: Employment agreement review, contractor vs employee classification, non-compete enforcement, termination workflows
- Minimum: 800 words
- Must include:
  - Worked example: Reviewing an employment agreement for a Pakistan-based remote developer being hired by a UK company. Agent flags jurisdiction conflict, non-compete scope, IP assignment.
  - How employment contracts differ from commercial contracts in the playbook
  - Why employment law is the most jurisdiction-sensitive area of Legal Ops

### Section C: Cross-Border Contract Analysis (insert in Part One after Stage 3)

- Covers: Multi-jurisdiction contracts, conflict of laws, governing law selection strategy
- Minimum: 800 words
- Must include:
  - Worked example: A Pakistan software house (Lahore) contracting with a UAE client (Dubai mainland) with delivery in Saudi Arabia. Three jurisdictions, three legal systems.
  - How the router loads multiple jurisdiction overlays simultaneously
  - Common cross-border pitfalls the agent flags

### Section D: Litigation Support and Legal Hold (insert as new Part between current Part Three and Part Four)

- Covers: Document preservation, legal hold notices, litigation readiness, discovery support
- Minimum: 600 words
- Must include:
  - How /respond handles legal hold notices
  - Worked example: Triggering a litigation hold across an organisation using the agent
  - Governance rule: Litigation strategy is ALWAYS attorney-only

### Section E: Plugin Installation and Verification Walkthrough (insert at start, after Plugin Architecture section)

- Covers: Step-by-step installation of the legal-ops plugin, verification, first-run experience
- Minimum: 400 words
- Must include:
  - `claude plugin install legal-ops@agentfactory-business`
  - Cowork installation path
  - Verification test: "I need to review a vendor agreement under English law"
  - Expected agent response confirming plugin is active
  - Setting up legal.local.md from template

## Hard Constraints

- NEVER write a section without introductory prose explaining WHY this matters
- NEVER use a jurisdiction-specific term without a concept box or inline definition
- NEVER write a worked example without named parties, specific numbers, and agent dialogue
- ALWAYS mark each section with: `<!-- INSERT: after [section name] in main chapter -->`
- ALWAYS use "Chapter 22" (not "Chapter 28")
- ALWAYS end worked examples with the governing principle reminder

## Handoff Note

End your session with a file at `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/agent2-handoff.md` containing:
Files created or modified: [list with line counts and word counts]
Sections written: [list with word count per section]
Concept boxes added: [list each term]
Worked examples added: [list each with scenario summary]
Pakistan/GCC additions: [count and list]
Decisions made that affect downstream agents: [list]
Open questions for Orchestrator: [list]
