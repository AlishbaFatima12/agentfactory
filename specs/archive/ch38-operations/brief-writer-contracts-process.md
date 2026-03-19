# Writer Brief: Contracts + Process + Change (L04 + L05 + L06)

**Scope:** Three lessons covering contract analysis, process documentation, and change management
**Writer:** contracts-process writer

---

## Files to Create

### L04 — Contract Analysis and Obligation Extraction

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/04-contract-analysis-obligation-extraction.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/04-contract-analysis-obligation-extraction.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/04-contract-analysis-obligation-extraction.summary.md`

### L05 — Process Documentation: SOPs and Runbooks

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/05-process-documentation-sops-runbooks.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/05-process-documentation-sops-runbooks.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/05-process-documentation-sops-runbooks.summary.md`

### L06 — Change Management: Impact and Rollback

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/06-change-management-impact-rollback.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/06-change-management-impact-rollback.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/06-change-management-impact-rollback.summary.md`

**Total: 9 files**

---

## Spec Line Ranges to Read

- **L04:** Governing spec lines 201-210 (Contract Obligation Extraction) + `ops-skills/products/contract.md` (full file — this is your primary source for /contract skill depth)
- **L05:** Governing spec lines 213-370 (Part Two: Process Documentation) + `ops-skills/products/sop.md` and `ops-skills/products/process.md`
- **L06:** Governing spec lines 373-494 (Part Three: Change Management) + `ops-skills/products/change.md`

---

## L04: Contract Analysis and Obligation Extraction

**Duration:** 40 min
**Plugin command:** Custom `/contract`
**Core content:**

1. **Opening narrative** — A vendor contract auto-renewed because nobody tracked the notice deadline. The auto-renewal clause was buried on page 17 of a 22-page MSA. The annual cost: 180,000 for a service the team had mostly stopped using six months ago. This lesson teaches the structured extraction that prevents this.
2. **Four task types** from the contract skill spec:
   - Obligation extraction (our obligations + vendor obligations + key dates + SLAs)
   - Risk flagging (auto-renewal traps, liability caps, price escalation, unilateral changes, termination, data ownership)
   - Contract summary (plain-language one-pager for non-legal readers)
   - Renewal strategy input
3. **Worked example** — Run `/contract` with a realistic vendor contract scenario. Show the obligation extraction output format (tables of Our Obligations, Vendor Obligations, Key Dates, SLA Table, Auto-Renewal Flags).
4. **Risk flag categories** — The six flag types from the skill spec. Teach students to look for each.
5. **Negotiation position framework** — For each risk flag: issue, our position, rationale, accept if, walk-away if.

**Exercise:** Extract obligations from 3 vendor contracts (one high-value, one with auto-renewal trap, one with SLA breaches). For each, identify risk flags and draft a negotiation position for the highest-risk clause.

**What to evaluate (include in exercise):**

- Does the output separate our obligations from vendor obligations?
- Are all key dates extracted (especially notice periods)?
- Are auto-renewal clauses explicitly flagged?
- Would a procurement manager find this actionable without reading the full contract?

**Cross-references:**

- Reference L03: "Use the vendor register from Lesson 3 to select your highest-value vendors for contract analysis."
- Forward reference: "You will use these contract obligations in Lesson 7 (Compliance) when mapping your organisation's obligation landscape."

---

## L05: Process Documentation — SOPs and Runbooks

**Duration:** 45 min
**Plugin commands:** Official `/process-doc` + `/runbook`
**Core content:**

1. **Opening narrative** — The three-stage process documentation failure: document is created, process changes, document diverges from reality. By stage 3, the document causes confusion rather than clarity.
2. **SOP quality standards** — From the global router spec: Purpose, Scope, Roles (specific titles, not "the team"), Inputs, Steps (numbered, one action per step), Controls (at each risk point), Error handling, Document control.
3. **The `/process-doc` workflow** — Use for initial process documentation. Walked example: document a client onboarding process or monthly payment run.
4. **The `/runbook` workflow** — Use for operational runbooks (step-by-step procedures for recurring tasks). Show how runbooks differ from SOPs: runbooks are execution-focused, SOPs are governance-focused.
5. **Process gap analysis** — Use `/process-doc` with a gap-analysis approach to identify where current processes break down.
6. **Version control and change notification** — Every SOP includes Document Control. Show the update workflow.

**Exercise:** Write two SOPs — one from scratch (for a process that exists only in someone's head) and one updating an existing outdated document. Then run a gap analysis on one process area. The "engineer review test" — show the SOP to someone unfamiliar with the process and ask if they could follow it.

**What to evaluate (include in exercise):**

- Does every step have a named role (not "the team")?
- Does every step do exactly one thing?
- Are controls embedded at the specific risk points, not just listed in the introduction?
- Is error handling included for each step that can fail?
- Does the Document Control section include version, date, author, and review date?

**Cross-references:**

- Forward reference: "Keep this SOP library in your Cowork session. Lesson 6 (Change Management) will reference your SOPs when mapping the impact of changes on documented processes."

**Auto-skill note:** The `process-optimization` auto-skill may activate if students use natural-language prompts about process improvement. This is fine — let it happen naturally. Do NOT invoke it as a slash command.

---

## L06: Change Management — Impact and Rollback

**Duration:** 40 min
**Plugin command:** Official `/change-request`
**Core content:**

1. **Opening narrative** — The three causes of change failure: incomplete impact assessment (assessed in isolation), insufficient communication (people found out too late), and no rollback plan (when things went wrong, nobody could revert).
2. **Change classification** — Standard, Significant, Major, Critical. From the global router spec. Each classification determines the approval authority and assessment requirements.
3. **The `/change-request` workflow** — Impact assessment with a realistic ERP migration scenario. Show the full output: change classification, stakeholder impact map, integration risk register, timeline risks, rollback plan, change readiness assessment.
4. **Communication planning** — Message by audience, channel, timing, key messages for each milestone.
5. **Rollback planning** — Phase-specific rollback strategies. Define "critical failure" in advance. Rollback decision authority.
6. **Post-implementation review** — The review that closes the loop. Questions: Did the change achieve its objective? Unexpected impacts? Were risk predictions accurate?

**Exercise:** Complete a full change request package for a real or realistic change (system migration, process redesign, or regulatory-driven change). Includes: impact assessment, communication plan, rollback plan, and post-implementation review template.

**What to evaluate (include in exercise):**

- Is the change classified at the correct level (not under-classified)?
- Does the impact assessment cover ALL affected teams, not just the primary one?
- Are integration risks identified for every connected system?
- Is the rollback plan realistic (not "we will figure it out")?
- Does the communication plan include what NOT to say?

**Cross-references:**

- Forward reference: "The change-tracker agent in Lesson 12 will monitor the change pipeline you build here, flagging stale approvals, missing impact assessments, and overdue post-implementation reviews."

---

## Exit Criteria

This writer's work is DONE when:

- 9 files created (3 lessons x 3 sidecars)
- All YAML frontmatter complete per architecture spec template
- L04 teaches the four contract analysis task types with worked examples
- L05 teaches SOP creation using both `/process-doc` and `/runbook`
- L06 teaches change impact assessment with all four change classifications
- Every exercise has a "What to evaluate" section
- Cross-references point forward to later lessons correctly
- No `import` statements in any file
- `<Flashcards />` tag present at bottom of each lesson
- `:::note Keep This File` reminders where outputs carry forward
