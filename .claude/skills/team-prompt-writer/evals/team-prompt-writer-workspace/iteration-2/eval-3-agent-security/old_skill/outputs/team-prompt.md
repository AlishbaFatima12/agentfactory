# Team Prompt: Part 8 — AI Agent Security

Create an agent team to produce Part 8: AI Agent Security for the Agent Factory book. This part has 8 chapters and 25 lessons teaching developers how to build secure AI agent systems. The reader has built working agents in Parts 5-7 but has not thought deeply about adversarial inputs, data exfiltration, privilege escalation, or compliance. The transformation: from "my agent works" to "my agent works AND I can explain to a security team why it's safe to deploy."

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates; do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

**Source material**: `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`
**Output directory**: `apps/learn-app/docs/08-AI-Agent-Security/`
**Content identity**: Technical security content for developers. Incident-first pedagogy: every concept taught through a real or realistic security incident (what happened, why, how to prevent it). Dual-language code examples (Python primary, TypeScript secondary). All exercises must work offline. No actual vulnerability details; use synthetic examples only. Em-dash limit: 0-1 per file.

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself. Use the shared task list to track all work. Enforce phase ordering via task dependencies.

**Team**: 7 teammates total
- Phase 1: 1 architect (blocks everything)
- Phase 2: 1 reference-builder (blocks Phase 3)
- Phase 3: 4 writers (all parallel)
- Phase 4: 1 quality reviewer (after all writers complete)

---

## Phase 1: Architect (1 teammate, blocks all other phases)

**Task name**: `architecture-spec`
**Model**: Opus
**Plan approval**: enabled (review the architect's plan before they write)

Spawn this teammate with the following prompt:

```
"You are the architect teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` (the FULL source spec, 95 lines)
2. An existing high-quality chapter from the book for format reference — run `ls apps/learn-app/docs/01-General-Agents-Foundations/` and read one chapter's README and 2 lessons
3. `.specify/memory/constitution.md` (project constitution)

DELIVERABLES — write ALL of these to `apps/learn-app/docs/08-AI-Agent-Security/`:

1. **Master architecture spec** (`_architecture-spec.md`):
   - Complete directory skeleton: every file path for 8 chapters + 25 lessons
   - Chapter folder naming: `61-agent-threat-landscape/`, `62-prompt-injection-defense/`, `63-tool-security/`, `64-data-protection/`, `65-identity-and-authorization/`, `66-deployment-security/`, `67-security-testing/`, `68-capstone/`
   - Lesson file naming convention (match existing book pattern)
   - YAML frontmatter template for security lessons (skills, objectives, duration)
   - Docusaurus component catalog: which components to use (tabs for Python/TypeScript code, admonitions for security warnings, collapsible sections for incident case studies)
   - Source-to-output mapping: which source lines map to which output files
   - Writer-to-scope assignment table (4 writers, chapter pairings below)
   - Cross-reference map: how chapters link to each other and to Parts 0, 1, 5, 6

2. **Shared writer's brief** (`_shared-brief.md`):
   - Content identity: security content for developers who can build agents but would fail a security review
   - Pedagogical pattern: incident-first (incident → root cause → defense → exercise)
   - Tone: appropriately paranoid, not fearful; practical, not academic
   - Recurring patterns: threat model diagrams, attack/defend pairs, security checklists
   - Code example protocol: Python primary with Tabs component, TypeScript secondary
   - Cross-reference conventions: how to link between chapters and to earlier parts
   - Quality bar: every concept taught through a realistic incident; reader should be able to explain each threat to their manager
   - Constraints: no real vulnerability details (synthetic only), exercises work offline, 0-1 em-dashes per file, no phantom imports

3. **Per-writer briefs** (one file per writer):
   - `_brief-writer-threats.md`: Writer-threats scope (Ch 61 + Ch 62, source lines 32-43, 7 lessons)
   - `_brief-writer-tools.md`: Writer-tools scope (Ch 63 + Ch 64, source lines 44-54, 7 lessons)
   - `_brief-writer-identity.md`: Writer-identity scope (Ch 65 + Ch 66, source lines 55-64, 6 lessons)
   - `_brief-writer-testing.md`: Writer-testing scope (Ch 67 + Ch 68, source lines 65-73, 5 lessons)
   - Each brief: exact file paths to create, source line ranges, chapter-specific cross-references, exit criteria

4. **Part README** (`README.md`):
   - Part 8 overview following the existing book README format
   - Navigation structure for 8 chapters
   - Prerequisites (completed Parts 5-7)

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — [list of files created]'"
```

**Lead action**: Review the architect's plan before approving. Verify the directory skeleton covers all 25 lessons and all 8 chapter folders. Confirm writer briefs have zero file overlap.

---

## Phase 2: Reference-Builder (1 teammate, blocks Phase 3)

**Task name**: `reference-lesson`
**Depends on**: `architecture-spec`
**Model**: Opus

Spawn this teammate AFTER Phase 1 completes, with the following prompt:

```
"You are the reference-builder teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (master spec from architect)
2. `apps/learn-app/docs/08-AI-Agent-Security/_shared-brief.md` (shared brief from architect)
3. The source spec lines 33-36 from `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` (Chapter 61, Lesson 1: 'Why agents are different from APIs')
4. An existing high-quality lesson from the book — read the lesson the architect referenced, or run `ls apps/learn-app/docs/01-General-Agents-Foundations/12-agent-factory-paradigm/` and pick a lesson

DELIVERABLE: ONE gold-standard reference lesson

Write Chapter 61, Lesson 1 ('Why agents are different from APIs') as the gold-standard reference. This lesson must demonstrate EVERY pattern that writers will replicate:

- Complete YAML frontmatter (title, description, sidebar_position, skills, learning_objectives, estimated_time)
- Narrative opening with a realistic security incident (not a dry definition)
- Conceptual explanation: why agents differ from traditional APIs (autonomous action, tool access, persistent memory)
- Tabs component for Python/TypeScript code examples
- Admonition for security warning (:::danger or :::caution)
- Collapsible section for extended incident case study (:::details)
- Attack surface diagram or table
- 'Try With AI' section with prompts
- Key takeaways section
- Cross-references to Part 5 agent architecture
- 0-1 em-dashes total
- NO phantom imports (do NOT import components that don't exist like Flashcards or Quiz)

This lesson is the quality benchmark. All 4 writers will match it exactly.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'REFERENCE-BUILDER DONE — [file path]'"
```

**Lead action**: Read the reference lesson. Verify it contains YAML frontmatter, narrative opening, Tabs for code, admonitions, cross-references, and Try With AI section. If any pattern is missing, message the reference-builder to add it before proceeding.

---

## Phase 3: Writers (4 teammates, all parallel)

Spawn ALL 4 writer teammates SIMULTANEOUSLY after Phase 2 completes. Each writer gets a self-contained prompt (no placeholders, fully inlined).

### Writer-Threats (Ch 61 + Ch 62)

**Task name**: `writer-threats`
**Depends on**: `reference-lesson`
**Model**: Sonnet

```
"You are the writer-threats teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (master spec with file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_shared-brief.md` (shared context: identity, tone, patterns, constraints)
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-threats.md` (YOUR specific brief with line ranges and exit criteria)
4. The reference lesson created by the reference-builder in Chapter 61 (quality benchmark, match it exactly)
5. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 32-43 (read ONLY those lines, not the full doc)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every lesson opens with a realistic security incident, not a dry definition
- Use Tabs component for Python/TypeScript code examples
- Use admonitions (:::danger, :::caution) for security warnings
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- 0-1 em-dashes per file
- All exercises must work offline (no external vulnerable service dependencies)
- Use synthetic examples only (no real vulnerability details)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Chapter 61: Agent Threat Landscape (3 lessons)
- `61-agent-threat-landscape/README.md` (chapter README)
- `61-agent-threat-landscape/01-why-agents-are-different.md` — SKIP if reference-builder already created this; verify and move on
- `61-agent-threat-landscape/02-agent-attack-surface.md` (prompt injection, tool abuse, data leakage, identity confusion, memory poisoning)
- `61-agent-threat-landscape/03-threat-modeling-for-agents.md` (STRIDE adapted for agent architectures)

Chapter 62: Prompt Injection Defense (4 lessons)
- `62-prompt-injection-defense/README.md` (chapter README)
- `62-prompt-injection-defense/01-direct-vs-indirect-injection.md` (with real-world-style examples from production incidents)
- `62-prompt-injection-defense/02-input-sanitization-boundary-markers.md`
- `62-prompt-injection-defense/03-output-validation-action-gating.md`
- `62-prompt-injection-defense/04-exercise-red-team-your-agent.md` (attack + defend cycle exercise)

Special notes:
- Ch 61 L01 may already exist as the reference lesson; check first and skip if so
- Ch 62 references Part 1 prompt engineering (now viewed adversarially); include cross-references
- The red-team exercise in Ch 62 L04 is a capstone for the first two chapters; it should integrate concepts from both Ch 61 and Ch 62
- Cross-reference Ch 61 to Part 5 agent architecture

When finished, message the team lead: 'WRITER THREATS DONE — [file list]'"
```

### Writer-Tools (Ch 63 + Ch 64)

**Task name**: `writer-tools`
**Depends on**: `reference-lesson`
**Model**: Sonnet

```
"You are the writer-tools teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (master spec with file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_shared-brief.md` (shared context: identity, tone, patterns, constraints)
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-tools.md` (YOUR specific brief with line ranges and exit criteria)
4. The reference lesson created by the reference-builder in Chapter 61 (quality benchmark, match it exactly)
5. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 44-54 (read ONLY those lines, not the full doc)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every lesson opens with a realistic security incident, not a dry definition
- Use Tabs component for Python/TypeScript code examples
- Use admonitions (:::danger, :::caution) for security warnings
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- 0-1 em-dashes per file
- All exercises must work offline (no external vulnerable service dependencies)
- Use synthetic examples only (no real vulnerability details)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Chapter 63: Tool Security (4 lessons)
- `63-tool-security/README.md` (chapter README)
- `63-tool-security/01-least-privilege-tool-access.md` (principle of least privilege for tool access)
- `63-tool-security/02-sandboxing-execution-boundaries.md`
- `63-tool-security/03-rate-limiting-resource-quotas.md`
- `63-tool-security/04-audit-logging-anomaly-detection.md`

Chapter 64: Data Protection (3 lessons)
- `64-data-protection/README.md` (chapter README)
- `64-data-protection/01-agent-memory-access-control.md` (what agents remember and who can access it)
- `64-data-protection/02-pii-handling-compliance.md` (GDPR, CCPA, HIPAA overview)
- `64-data-protection/03-data-flow-mapping.md` (data flow mapping for agent systems)

Special notes:
- Ch 63 references Part 5 tool design; include cross-references to where students originally built their tools
- Ch 63 L01 should establish the principle of least privilege as a recurring theme for the rest of the chapter
- Ch 64 L02 compliance content must be accurate but practical, not legalese; use developer-friendly language
- Data flow mapping in Ch 64 L03 should produce a reusable artifact (a template the reader can apply to their own agents)

When finished, message the team lead: 'WRITER TOOLS DONE — [file list]'"
```

### Writer-Identity (Ch 65 + Ch 66)

**Task name**: `writer-identity`
**Depends on**: `reference-lesson`
**Model**: Sonnet

```
"You are the writer-identity teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (master spec with file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_shared-brief.md` (shared context: identity, tone, patterns, constraints)
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-identity.md` (YOUR specific brief with line ranges and exit criteria)
4. The reference lesson created by the reference-builder in Chapter 61 (quality benchmark, match it exactly)
5. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 55-64 (read ONLY those lines, not the full doc)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every lesson opens with a realistic security incident, not a dry definition
- Use Tabs component for Python/TypeScript code examples
- Use admonitions (:::danger, :::caution) for security warnings
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- 0-1 em-dashes per file
- All exercises must work offline (no external vulnerable service dependencies)
- Use synthetic examples only (no real vulnerability details)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Chapter 65: Identity and Authorization (3 lessons)
- `65-identity-and-authorization/README.md` (chapter README)
- `65-identity-and-authorization/01-agent-identity-delegation.md` (user delegation vs service identity)
- `65-identity-and-authorization/02-scope-management-consent.md` (scope management and consent flows)
- `65-identity-and-authorization/03-multi-agent-trust-boundaries.md`

Chapter 66: Deployment Security (3 lessons)
- `66-deployment-security/README.md` (chapter README)
- `66-deployment-security/01-container-hardening.md` (container hardening for agent runtimes)
- `66-deployment-security/02-secrets-management-rotation.md`
- `66-deployment-security/03-incident-response.md` (incident response for agent failures)

Special notes:
- Ch 65 L01 is conceptually critical: the question "who is the agent acting as?" underlies most authorization bugs; make this vivid with a confused-deputy incident
- Ch 65 L03 on multi-agent trust boundaries connects back to agent team patterns from Part 5
- Ch 66 references Part 6 deployment; cross-reference the deployment chapter where students first containerized their agents
- Ch 66 L02 secrets management should include practical rotation patterns, not just "use a vault"
- Ch 66 L03 incident response should produce a reusable runbook template

When finished, message the team lead: 'WRITER IDENTITY DONE — [file list]'"
```

### Writer-Testing (Ch 67 + Ch 68)

**Task name**: `writer-testing`
**Depends on**: `reference-lesson`
**Model**: Sonnet

```
"You are the writer-testing teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (master spec with file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_shared-brief.md` (shared context: identity, tone, patterns, constraints)
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-testing.md` (YOUR specific brief with line ranges and exit criteria)
4. The reference lesson created by the reference-builder in Chapter 61 (quality benchmark, match it exactly)
5. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 65-73 (read ONLY those lines, not the full doc)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every lesson opens with a realistic security incident, not a dry definition
- Use Tabs component for Python/TypeScript code examples
- Use admonitions (:::danger, :::caution) for security warnings
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- 0-1 em-dashes per file
- All exercises must work offline (no external vulnerable service dependencies)
- Use synthetic examples only (no real vulnerability details)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Chapter 67: Security Testing (3 lessons)
- `67-security-testing/README.md` (chapter README)
- `67-security-testing/01-automated-security-testing.md` (automated security testing for agents)
- `67-security-testing/02-red-teaming-methodology.md`
- `67-security-testing/03-continuous-monitoring-alerting.md`

Chapter 68: Capstone (2 lessons)
- `68-capstone/README.md` (chapter README)
- `68-capstone/01-security-review-checklist.md` (the deliverable they can use at work)
- `68-capstone/02-present-security-assessment.md` (present a security assessment to a simulated CISO)

Special notes:
- Ch 67 L02 red teaming connects back to Ch 62 L04's red-team exercise, but at a more systematic/methodological level
- Ch 67 L03 monitoring should produce a practical alerting configuration, not abstract theory
- Ch 68 is the capstone for the entire part; it must integrate concepts from ALL preceding chapters (61-67)
- Ch 68 L01 security review checklist is the reader's primary deliverable: a practical, reusable artifact they take to work
- Ch 68 L02 CISO presentation references Part 0 communication skills; the reader must translate technical findings into business risk language
- The capstone should feel like the culmination, not a rushed ending

When finished, message the team lead: 'WRITER TESTING DONE — [file list]'"
```

---

## Phase 4: Quality Reviewer (1 teammate, after ALL writers complete)

**Task name**: `quality-review`
**Depends on**: `writer-threats`, `writer-tools`, `writer-identity`, `writer-testing`
**Model**: Opus

Spawn this teammate AFTER all 4 writers have reported done:

```
"You are the quality-reviewer teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `.specify/memory/constitution.md` (project constitution — extract ONLY universal patterns that apply to security content: voice, formatting, terminology standards)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (master architecture spec)
3. `apps/learn-app/docs/08-AI-Agent-Security/_shared-brief.md` (shared writer's brief)
4. The reference lesson from Phase 2 (quality benchmark)
5. ALL output files in `apps/learn-app/docs/08-AI-Agent-Security/` — every README and every lesson across all 8 chapters

IMPORTANT: Extract ONLY universal quality patterns from the constitution that apply to this content type (security lessons). Do not enforce patterns that are specific to other content types.

UNIVERSAL CHECKS (apply to every file):
- Voice consistency: same tone and register across all 4 writers (appropriately paranoid, practical, incident-first)
- Formatting: YAML frontmatter complete and consistent (title, description, sidebar_position, skills, objectives)
- Terminology: consistent use of security terms across chapters (e.g., 'prompt injection' not sometimes 'prompt attack')
- Continuity: cross-references between chapters are accurate and bidirectional where appropriate
- Exercise quality: exercises are practical, work offline, and use synthetic examples
- Em-dash compliance: 0-1 em-dashes per file
- No phantom imports: no imports for Flashcards, Quiz, or other non-existent components
- Reference match: each lesson follows the reference lesson's structure and component patterns

CONTENT-SPECIFIC CHECKS (security content):
- Incident-first pedagogy: every concept taught through a realistic incident (not abstract threat models)
- Attack/defend balance: threats are paired with concrete defenses, not just warnings
- Dual-language code: Python primary with TypeScript secondary in Tabs where the architect specified
- Progressive complexity: concepts build across chapters (Ch 61 foundations → Ch 68 capstone integration)
- Cross-reference accuracy: Ch 61→Part 5, Ch 62→Part 1, Ch 63→Part 5, Ch 66→Part 6, Ch 68→Part 0
- Capstone integration: Ch 68 actually references and integrates concepts from Ch 61-67, not just its own content
- Practical artifacts: security checklist (Ch 68 L01) and incident response runbook (Ch 66 L03) are genuinely reusable

DELIVERABLE: Write a quality report to `apps/learn-app/docs/08-AI-Agent-Security/_quality-report.md`

Report format:
- Overall score: Pass / Conditional Pass / Fail
- Per-writer summary (2-3 sentences each): what worked, what needs fixing
- Issues list: file path, issue description, severity (Critical/Major/Minor), suggested fix
- Cross-cutting findings: patterns that appear across multiple writers

If overall score is Fail, clearly state which issues must be fixed before the content ships.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'QUALITY REVIEWER DONE — [report path]'"
```

---

## Lead Coordination Rules

1. **Create team** with TeamCreate. Name it `part8-agent-security`.
2. **Create all tasks upfront** with dependencies: `architecture-spec` → `reference-lesson` → all 4 writer tasks → `quality-review`.
3. **Phase 1**: Spawn architect teammate. Review their plan before approving. Verify the directory skeleton covers all 8 chapters, 25 lessons, and 8 READMEs. Confirm zero file overlap between writer briefs.
4. **Phase 2**: After architect reports done, spawn reference-builder teammate. Read the reference lesson when complete. Verify it contains all required patterns (YAML frontmatter, incident opening, Tabs for code, admonitions, Try With AI, cross-references).
5. **Phase 3**: After reference-builder reports done, spawn ALL 4 writer teammates SIMULTANEOUSLY. Wait for all 4 to report done.
6. **Phase 4**: After all writers report done, spawn quality reviewer. Wait for quality report.
7. **Quality gate**: Read the quality report. If the overall score is Fail, identify which writers need fixes, message them with specific issues, and wait for fixes. Then re-run quality review if needed.
8. **Do NOT write content yourself.** You coordinate, review, and verify. All content comes from teammates.
9. **Teammate recovery**: If a teammate appears stuck (no progress after a reasonable time), message them asking for status. If still stuck, spawn a replacement teammate with the same prompt.
10. **Post-quality structural verification** (after quality review passes):
    - `ls -R apps/learn-app/docs/08-AI-Agent-Security/` and verify the directory tree matches the architect's skeleton
    - Count total files: expect 8 READMEs + 25 lessons + architecture artifacts = ~37+ files
    - Spot-check YAML frontmatter from one lesson per writer (4 spot checks)
    - `grep -r "import.*Flashcards\|import.*Quiz" apps/learn-app/docs/08-AI-Agent-Security/` to catch phantom imports
    - `grep -r "—" apps/learn-app/docs/08-AI-Agent-Security/ | head -20` to spot-check em-dash compliance
11. **Cleanup**: After verification passes, shut down all teammates and delete the team.
12. **Report to user**: Provide final summary with file count, quality score, and any remaining notes.

---

## Model Preferences

| Teammate          | Model  | Rationale                                             |
| ----------------- | ------ | ----------------------------------------------------- |
| Architect         | Opus   | Needs to process full source and produce complex spec |
| Reference-Builder | Opus   | Sets quality bar for all writers                      |
| Writer-Threats    | Sonnet | Parallel execution, well-scoped work                  |
| Writer-Tools      | Sonnet | Parallel execution, well-scoped work                  |
| Writer-Identity   | Sonnet | Parallel execution, well-scoped work                  |
| Writer-Testing    | Sonnet | Parallel execution, well-scoped work                  |
| Quality Reviewer  | Opus   | Needs to evaluate all output and cross-cut analysis   |

---

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents. This is a TEAM with TEAMMATES.
- Do NOT write content yourself. Delegate everything to teammates.
- Do NOT spawn Phase 3 teammates before Phase 2 completes.
- Do NOT spawn the quality reviewer before ALL Phase 3 writers complete.
- Do NOT let writer teammates read the full source draft (only the architect reads it all).
- Do NOT approve the architect's plan without reviewing the directory structure.
- Do NOT skip quality review or structural verification after writers finish.
- Do NOT skip the em-dash and phantom import checks during verification.
