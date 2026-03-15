# Legal Ops Agents: Intake and Monitoring — Summary

## Core Concept

Legal Ops Agents are persistent, multi-step workflows that manage entire legal processes end-to-end -- fundamentally different from document tools that produce a single output and stop. The lesson introduces the agent paradigm through two concrete implementations: the Contract Intake Agent (receives contracts, classifies, triages, routes, tracks, escalates, files, and monitors obligations) and the Regulatory Monitoring Agent (scans regulatory changes daily, assesses impact, and produces weekly GC briefings). The key insight is that coordination overhead -- chasing, tracking, escalating, reporting -- consumes 40-60% of legal operations capacity, and automating it transforms the legal function structurally.

## Key Mental Models

- **Agent vs. document tool**: A document tool takes one input and produces one output (e.g., contract in, redline report out). An agent maintains state, makes routing decisions, tracks progress over time, escalates when deadlines approach, and manages the process end-to-end
- **Contract Intake Agent five-step workflow**: Receive document and extract metadata, classify document type, apply triage and routing (Tier 1/2/3), track progress with SLA enforcement, on execution save/remind/monitor
- **Triage tier SLA rules**: Tier 1 = 1 business day (no attorney), Tier 2 = 2 business days (attorney review), Tier 3 = 5 business days (full review); URGENT flag halves all timelines
- **Regulatory Monitoring Agent weekly briefing**: RAG status per regulatory area -- RED (immediate action), YELLOW (monitor/plan), GREEN (no action required)
- **Coordination overhead elimination**: The attorney's time is spent exclusively on the 20% of work requiring professional judgment; everything else is handled by the agent
- **Lean legal team multiplier**: For mid-sized companies with 2-3 person legal teams (common in Pakistan and GCC), agents give operational capacity of a team twice the size

## Critical Patterns

- The Contract Intake Agent routes by document type: NDA/Mutual CA to `/triage-nda`, Vendor/MSA to `/review-contract`, Employment/Contractor to HR Legal queue, Unknown to GC queue with extracted key terms
- Communication templates are standardised: business unit acknowledgement, counsel notification, GC RED escalation -- each with specific content requirements
- The Regulatory Monitoring Agent searches official sources (ICO, FCA, SEC, EC) and cross-references against executed contracts to flag which may need amendment
- RAG status categorisation: HIGH PRIORITY (action within 30 days), MONITOR (review within 6 months), AWARENESS (information only)
- The agent's "NEVER DO THESE" safety rules include: never approve a contract for execution, never route RED to Tier 1, never skip metadata extraction, never send legal advice to business units

## Common Mistakes

- Treating Legal Ops Agents as better document tools -- the value is in process management (routing, tracking, escalating), not faster document review
- Not defining document type routing rules -- without explicit classification, the agent cannot route correctly
- Skipping metadata extraction -- counterparty name, contract type, value, governing law are required for compliance logging
- Ignoring the URGENT flag logic -- when business deadlines are tight, standard SLAs must be halved and GC must be notified immediately
- Confusing the agent's routing decisions with legal advice -- the agent sends timelines and classifications to business units, never legal analysis

## Connections

- Builds on every single-task workflow from **L03** through **L09** -- the Intake Agent orchestrates `/review-contract`, `/triage-nda`, and other commands into an end-to-end process
- The triage tier system reuses the classification framework from **L03** (GREEN/YELLOW/RED) and **L05** (Tier 1/2/3)
- The Regulatory Monitoring Agent's weekly briefing connects to the compliance obligations tracked by the Compliance Calendar Agent in **L11**
- The Cowork skill creation pattern (Skills > + > Write skill instructions) is used to make the Contract Intake Agent persistent across sessions
- Three more Legal Ops Agents (Compliance Calendar, Legal Spend Analytics, DSAR) are built in **L11** using the same agent pattern established here
