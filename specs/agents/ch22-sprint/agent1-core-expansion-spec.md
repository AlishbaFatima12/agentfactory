# Agent Spec: Chapter Content — Core Expansion

## Mission

Expand Chapter 22 Legal Operations spec from 9,339 words to >=20,000 words by adding concept boxes, worked examples, key learning statements, and Pakistan/GCC context throughout the existing structure.

## Quality Standard

Your output must match the depth of Chapter 17 (Finance) and Chapter 20 (Islamic Finance) in this book.

Specifically:

- Concept boxes must use the 🔑 marker and contain: definition in plain English, a concrete example with numbers, and "why it matters" in one sentence
- Worked examples must use: a named fictional company, a named person with a job title, specific numbers (contract values, clause terms, timelines), and real back-and-forth dialogue with the agent
- Never write a section as a pure bullet list where equivalent sections in Ch 17/20 use prose — match the register
- Pakistan or GCC context must appear in at least 1 in 4 examples
- Every exercise must end with: "**The key learning:** [one sentence naming the professional judgment the exercise builds]"

## Input Files (read all before writing)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_Legal_Operations.md`: The governing chapter draft. Read in full. This is your source text to expand.
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/legal-cowork-skills/`: Read the README and at least 3 product files (contract-review.md, nda-triage.md, dsar-privacy.md) for deep context on what the skills actually do.

## Output Files

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chaper22_legal/Chapter22_Legal_Operations_v2.md`: The expanded chapter. Must preserve ALL existing content — you are adding, not replacing.

## Work Order

### Introduction + Governing Principle (currently 407 words — target 1,200)

- Add 🔑 concept boxes for: NDA, CLM, ABA Model Rules, SRA Code of Conduct
- Add a worked example: a named GC (General Counsel) at a 200-person Pakistani software company encountering the Legal Plugin for the first time
- Expand the "State of Legal Operations in 2026" with a GCC/Pakistan angle: legal ops adoption in the Gulf, Pakistan's Contract Act 1872 context
- Known gap: 0 Pakistan/GCC references in entire chapter

### Plugin Architecture + Playbook (currently 550 words — target 1,500)

- Add 🔑 concept boxes for: MCP, DPA, SCCs, playbook
- Add a worked example: a named Legal Ops Manager at a UAE fintech company building their first playbook from the template — show the actual filling-in process with specific clause positions for UAE/DIFC law
- The playbook skeleton already exists — add explanatory prose around each clause position (what these ranges actually mean in practice)

### Part One: CLM (currently 827 words — target 2,500)

- Add 🔑 concept box for: CLM, redline, limitation of liability
- Add a FULL worked example for /review-contract: a named company (e.g., "Noor Technologies, Karachi") reviewing a vendor SaaS agreement. Show the actual agent dialogue, the context questions, the GREEN/YELLOW/RED output, and the redline for the most important clause. Use PKR values.
- Expand Stage 2 (obligation tracking) with a worked example showing /vendor-check output
- Expand Stage 3 (contract repository as intelligence) with a concrete query and result

### Part Two: NDA (currently 598 words — target 1,800)

- Add 🔑 concept box for: NDA, residuals clause
- Add a worked example: show the full triage flow for a real NDA from a Saudi partner — Tier 2 classification with specific deviations flagged. Use SAR values.
- Expand the playbook configuration section with explanatory prose

### Part Three: IP (currently 364 words — target 1,200)

- Add 🔑 concept boxes for: FTO (Freedom to Operate), prior art, Nice classification
- Add a worked example: a Lahore-based AI startup running /brief for patent landscape analysis. Show the query and structured output.

### Part Four: Legal Ops Agents (currently 1,594 words — target 4,000)

- This is the chapter's most important section per the spec: "This section is the most important in the chapter"
- Add 🔑 concept box for: Legal Ops Agent (vs document tool)
- Expand each of the 5 agents with at minimum:
  - Agent 1 (Contract Intake): a worked example showing the full workflow from email receipt to routing decision. Use a Dubai company.
  - Agent 2 (Regulatory Monitoring): expand from 87-word summary to full treatment with sample weekly briefing output for a Pakistan/UK dual-jurisdiction company
  - Agent 3 (Compliance Calendar): expand with worked example of escalation logic firing — show what happens at 30/14/7/1 day marks
  - Agent 4 (Legal Spend): expand from current thin treatment with a worked example showing anomaly detection in outside counsel invoices
  - Agent 5 (DSAR): the Sarah Johnson example exists but needs expansion — add the full 30-day timeline with specific dates and actions

### Part Five: SKILL.md Library (currently 349 words — target 1,200)

- Add explanatory prose before the router code block
- Add 🔑 concept box for: jurisdiction overlay
- Show how the router actually works with a concrete query: "I need to review a vendor MSA under Pakistani law" → router loads contract-review.md + pakistan-law.md

### Part Six: Market Context (currently 436 words — target 800)

- Already reasonable — light expansion only
- Add one paragraph about the GCC legal tech market

### Exercises (currently 3,185 words — target 4,500)

- Every exercise needs: "**The key learning:** [one sentence]"
- Add "**What you need:**" section to each exercise listing prerequisites
- Add Pakistan/GCC context to at least 2 exercises (e.g., Exercise 1 playbook for a UAE company, Exercise 4 IP monitoring for a Pakistan AI company)

### Chapter Summary (currently 329 words — target 600)

- Light expansion — add reference to plugin install path: `claude plugin install legal-ops@agentfactory-business`

## Hard Constraints

- NEVER write a concept box without a concrete numerical example
- NEVER write an exercise without a key learning statement
- NEVER use a jurisdiction-specific term (PDPA, UCTA, DSAR) without a concept box or inline definition
- ALWAYS use "Chapter 22" — never "Chapter 28"
- ALWAYS preserve ALL existing content — add to it, do not delete or rewrite existing sections
- Pakistan/GCC context must appear in >= 20% of worked examples
- Every concept box format:

> 🔑 **[Term]**
> [Plain English definition]. [Concrete example with numbers]. [Why it matters in one sentence.]

## Handoff Note

End your session with a file at `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/agent1-handoff.md` containing:
Files created or modified: [list with line counts and word counts]
Decisions made that affect downstream agents: [list]
Sections where you diverged from spec and why: [list]
Open questions for Orchestrator: [list]
