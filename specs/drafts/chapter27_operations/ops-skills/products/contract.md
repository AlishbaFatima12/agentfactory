---
name: contract
version: 1.0
description: >
  Activate for: contract, contract review, contract analysis, contract
  obligation, extract obligations, SLA contract, vendor contract, supplier
  agreement, master service agreement, MSA, SOW, statement of work,
  NDA, non-disclosure, contract terms, auto-renewal clause, notice period
  contract, indemnity, liability cap, penalty clause, contract risk,
  contract summary, contract management, contract lifecycle, contract
  negotiation points, key terms, unfavourable terms.
plugin-commands: /contract
---

## CONTRACT ANALYSIS WORKFLOW

### Task Types

TYPE 1: OBLIGATION EXTRACTION
  Purpose: Extract every obligation, SLA, key date, and key term from
  a contract into a structured, searchable format.
  Input: Contract text (paste or attach)
  Output: Structured obligation table + SLA table + key dates + risk flags

TYPE 2: RISK FLAGGING
  Purpose: Identify clauses that are unfavourable or create elevated risk.
  Output: Risk-flagged clause list with severity and recommended negotiation position

TYPE 3: CONTRACT SUMMARY
  Purpose: One-page summary of a complex contract for non-legal readers.
  Output: Plain-language summary of what the contract commits both parties to

TYPE 4: RENEWAL STRATEGY INPUT
  Purpose: Extract everything needed to inform a renewal negotiation.
  Output: Current terms + performance against terms + negotiation levers

### Obligation Extraction Output Format

  CONTRACT OBLIGATIONS: [Vendor / Agreement name]
  Contract date: [Date] | Effective: [Date] | Expires: [Date]
  ════════════════════════════════════════════════════════════
  OUR OBLIGATIONS:
  | # | What we must do | By when / How often | Consequence if breached |
  |---|---|---|---|
  | [N] | [Specific obligation] | [Deadline/frequency] | [Consequence] |

  VENDOR OBLIGATIONS:
  | # | What vendor must do | Metric | Consequence |
  |---|---|---|---|
  | [N] | [SLA or obligation] | [Target] | [Credit / termination right] |

  KEY DATES:
  | Date | Event | Notice required | Action needed |
  |---|---|---|---|
  | [Date] | [e.g. Auto-renewal date] | [N days notice to prevent] | [Action] |
  | [Date] | [e.g. Price review date] | [N days] | [Action] |
  | [Date] | [e.g. Annual SLA review] | — | [Review meeting] |

  SLA TABLE:
  | Metric | Target | Measurement | Reporting | Credit if breached |
  |---|---|---|---|---|
  | [Uptime] | [99.9%] | [Monthly] | [Vendor reports by 5th] | [X% of monthly fee] |

  AUTO-RENEWAL FLAGS:
  [Any auto-renewal clause — date; notice period required to prevent; notice method]
  ════════════════════════════════════════════════════════════

### Risk Flag Categories

FLAG 1: AUTO-RENEWAL TRAPS
  Clause: Contract auto-renews with [N] days' notice required to cancel
  Risk: Missing the notice window commits to another full contract term
  Action: Add to renewal calendar immediately; set calendar alert at notice date - 30 days

FLAG 2: LIABILITY CAPS
  Clause: Vendor liability capped at [amount or period of fees]
  Risk: If vendor failure causes loss >cap, recovery is limited
  Action: Assess whether cap is adequate relative to operational dependency

FLAG 3: PRICE ESCALATION
  Clause: Annual price increase of [N]% or CPI, whichever is higher
  Risk: Budgets set at today's price understate future obligation
  Action: Model 3-year cost trajectory; include in renewal negotiation

FLAG 4: UNILATERAL CHANGE RIGHTS
  Clause: Vendor may change terms / pricing with [N] days' notice
  Risk: Terms can change without your agreement
  Action: Counter-negotiate to require mutual agreement for material changes

FLAG 5: TERMINATION FOR CONVENIENCE
  Clause: Either party may terminate with [N] days' notice (or: only vendor may)
  Risk: If one-sided in vendor's favour, dependency risk is elevated
  Action: Ensure exit plan and backup vendor are in place

FLAG 6: DATA OWNERSHIP AND RETURN
  Clause: [Absence of] explicit statement that your data remains yours and
  is returned in usable format on termination
  Risk: Data lock-in; difficulty switching vendors
  Action: Add data portability and return clause to negotiation

### Negotiation Position Framework

For each risk flag, generate a negotiation position:

  ISSUE:           [Clause description]
  OUR POSITION:    [What we want instead]
  RATIONALE:       [Why this is reasonable — business / market standard]
  ACCEPT IF:       [What compensation / alternative we would accept instead]
  WALK-AWAY IF:    [What would make this contract unacceptable]

## NEVER DO THESE

- NEVER summarise a contract without flagging auto-renewal clauses —
  these are the clauses that most often cause unintended commitments
- NEVER extract SLAs without extracting the credit/remedy for breach —
  an SLA without a consequence is a target, not a commitment
- NEVER omit a key date from the date table — missing a notice deadline
  locks the organisation into another contract term
- NEVER produce a contract summary as legal advice — explicitly note
  that material decisions should be reviewed by legal counsel
- NEVER treat "standard terms" as non-negotiable — virtually every
  term in a vendor contract is negotiable if you ask
