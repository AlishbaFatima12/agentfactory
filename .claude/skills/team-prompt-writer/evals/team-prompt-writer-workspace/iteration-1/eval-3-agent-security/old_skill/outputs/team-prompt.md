# Team Prompt: Part 8 — AI Agent Security

Create an agent team to produce Part 8: AI Agent Security for the Panaversity educational platform. This part contains 8 chapters (25 lessons) teaching developers how to secure AI agent systems. The content transforms developers from "my agent works" to "my agent works AND I can explain to a security team why it's safe to deploy."

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

**Source material**: `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`
**Output directory**: `apps/learn-app/docs/08-AI-Agent-Security/`
**Content identity**: Security-focused educational content where every concept is taught through a real or realistic incident. "Here's what happened, here's why, here's how to prevent it." The reader is a developer who has built working agents but would fail a security review. They know Python/TypeScript, understand APIs, and have deployed to cloud. They do NOT know threat modeling, formal verification, or compliance frameworks. The goal is appropriate paranoia, not fear.

**CRITICAL PEDAGOGICAL NOTE**: This is security content. Getting the pedagogy wrong gives readers false confidence, which is worse than no security training at all. Writers must never present partial defenses as complete solutions. Every defense must include its limitations. Every checklist must include "what this does NOT cover."

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself.

Use the shared task list to track all work. Enforce phase ordering via task dependencies.

| Phase | Teammate | Model | Depends On |
|-------|----------|-------|------------|
| 1 | architect | Opus | — |
| 2 | reference-builder | Opus | Phase 1 |
| 3 | writer-threat-foundations | Sonnet | Phase 2 |
| 3 | writer-tool-data | Sonnet | Phase 2 |
| 3 | writer-identity-deploy | Sonnet | Phase 2 |
| 3 | writer-testing-capstone | Sonnet | Phase 2 |
| 4 | quality-reviewer | Opus | All Phase 3 |

Total teammates: 7

---

## Phase 1: Architect (1 teammate, blocks everything)

Create a task for this teammate that blocks all Phase 2 and Phase 3 tasks.

Spawn teammate **architect** with Opus model, plan approval ENABLED.

Teammate prompt:

"You are the architect teammate for Part 8: AI Agent Security.

READ IN ORDER:

1. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` (the FULL source spec, 95 lines — you are the ONLY teammate who reads this entire document)
2. Find and read ONE existing high-quality chapter from the book at `apps/learn-app/docs/` — pick any chapter that has 3+ lessons with exercises, to understand the format, YAML frontmatter structure, and Docusaurus patterns
3. `.specify/memory/constitution.md` (project constitution for voice, standards, and identity)

DELIVERABLES — create all of these in `apps/learn-app/docs/08-AI-Agent-Security/_architecture/`:

1. **`architecture-spec.md`** — Master architecture specification containing:
   - Complete directory skeleton (every file path for all 8 chapters, 25 lessons)
   - Source-to-output mapping (which source lines map to which output files)
   - Output format template (YAML frontmatter structure, markdown patterns)
   - Component/pattern catalog: how to render incident-based teaching, attack/defend exercises, dual-language code examples (Python primary in Tabs, TypeScript secondary), security checklists, the CISO simulation exercise
   - Cross-reference map: Ch 61 builds on Part 5 agent architecture, Ch 62 references Part 1 prompt engineering (now viewed adversarially), Ch 63 references Part 5 tool design, Ch 66 references Part 6 deployment, Ch 68 capstone references Part 0 communication skills
   - Writer-to-scope assignment table (4 writers, chapter pairings, file counts)
   - Security content rules: every defense includes limitations, no false confidence, no security theater, synthetic examples only (no classified vulnerability details), exercises must work offline

2. **`shared-brief.md`** — Shared writer's brief containing:
   - Content identity: security-focused educational material for developers who built agents but would fail a security review
   - Teaching approach: incident-driven ("here's what happened, here's why, here's how to prevent it")
   - Voice and tone: technically precise, appropriately paranoid, never dismissive of threats and never fear-mongering
   - Recurring patterns: threat model > incident example > defense implementation > limitation disclosure > exercise
   - Quality bar: reader should be able to explain each threat to their manager in plain language
   - Dual-language policy: Python primary, TypeScript secondary, using Docusaurus Tabs
   - Special constraints: 0-1 em-dashes per file, no phantom component imports, exercises work offline, no real vulnerability details
   - Cross-reference protocols: how to link between chapters and to prior parts

3. **Per-writer briefs** (one file each):
   - `writer-brief-threat-foundations.md` — Ch 61 (lines 32-37) + Ch 62 (lines 39-43), 7 lessons, file paths, special notes: these chapters set the threat vocabulary for the entire part, Ch 62 L04 is a red-team exercise requiring attack+defend cycle design
   - `writer-brief-tool-data.md` — Ch 63 (lines 45-49) + Ch 64 (lines 51-53), 7 lessons, file paths, special notes: Ch 64 covers compliance basics (GDPR, CCPA, HIPAA) which must be accurate but not constitute legal advice
   - `writer-brief-identity-deploy.md` — Ch 65 (lines 55-58) + Ch 66 (lines 60-63), 6 lessons, file paths, special notes: identity confusion is a subtle threat unique to agents, deployment security must reference Part 6 patterns
   - `writer-brief-testing-capstone.md` — Ch 67 (lines 65-68) + Ch 68 (lines 70-72), 5 lessons, special notes: Ch 68 is the capstone, L01 produces a reusable security checklist, L02 is a CISO presentation simulation referencing Part 0 communication skills

4. **`apps/learn-app/docs/08-AI-Agent-Security/README.md`** — Part README following existing project README format with part overview and navigation structure.

SECURITY CONTENT ARCHITECTURE RULES (include in architecture spec):
- Every lesson teaching a defense MUST include a 'Limitations' or 'What This Does Not Cover' section
- Never present a partial mitigation as a complete solution
- Checklists must include scope disclaimers
- Compliance content (GDPR, CCPA, HIPAA) must include 'This is not legal advice' disclaimers
- Incident examples must be synthetic or publicly documented (no zero-days, no classified details)
- Exercises must work fully offline with no dependency on external vulnerable services

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE' and list all files created."

---

## Phase 2: Reference-Builder (1 teammate, blocks Phase 3)

Create a task for this teammate that depends on Phase 1 completion and blocks all Phase 3 tasks.

Spawn teammate **reference-builder** with Opus model.

Teammate prompt:

"You are the reference-builder teammate for Part 8: AI Agent Security.

Your job is to produce ONE gold-standard lesson that demonstrates ALL patterns the writers need to follow. Writers will match your output exactly.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/architecture-spec.md` (master spec from architect — directory skeleton, patterns, format)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/shared-brief.md` (identity, voice, recurring patterns)
3. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 32-37 (Chapter 61: Agent Threat Landscape — the content you will convert into the reference lesson)
4. Find and read ONE existing high-quality lesson from the book at `apps/learn-app/docs/` to confirm Docusaurus formatting patterns

DELIVERABLE:

Create `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-agents-vs-apis.md` — the first lesson of the entire part.

This reference lesson MUST demonstrate ALL of these patterns:

- Complete YAML frontmatter (title, description, sidebar_label, sidebar_position, skills, learning_objectives)
- Narrative opening that hooks through a realistic security incident (not abstract theory)
- Incident-driven teaching pattern: 'here is what happened' > 'here is why' > 'here is the defense' > 'here are the limitations of this defense'
- Dual-language code examples using Docusaurus Tabs (Python primary, TypeScript secondary)
- A 'What This Does NOT Cover' callout (security content must never give false confidence)
- Admonitions (:::tip, :::warning, :::danger) used appropriately for security context
- A 'Try With AI' section with prompts suitable for Cowork or preferred AI assistant
- Key takeaways section
- Exercises that work fully offline
- 0-1 em-dashes maximum in the entire file
- NO phantom imports (do NOT import components like Flashcards or Quiz that do not exist)

QUALITY BAR: A reader finishing this lesson should be able to explain to their manager, in two sentences, why an AI agent is fundamentally different from a traditional API from a security perspective.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — 61-agent-threat-landscape/01-agents-vs-apis.md'"

---

## Phase 3: Writers (4 teammates, all parallel)

After Phase 2 completes, spawn ALL 4 writer teammates SIMULTANEOUSLY.

Each writer teammate gets a SELF-CONTAINED prompt (inlined, no placeholders, no references to 'shared instructions').

---

### Writer: threat-foundations

Spawn teammate **writer-threat-foundations** with Sonnet model.

Teammate prompt:

"You are the writer-threat-foundations teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/architecture-spec.md` (master spec — file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/shared-brief.md` (shared context — identity, patterns, protocols)
3. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/writer-brief-threat-foundations.md` (YOUR specific brief with scope and special notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-agents-vs-apis.md` (reference lesson — match its quality, format, and patterns exactly)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 32-43 (read ONLY those lines — Chapter 61 and Chapter 62 source content)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every defense must include its limitations; never present partial solutions as complete
- Use incident-driven teaching: what happened > why > defense > limitations
- Dual-language code in Docusaurus Tabs (Python primary, TypeScript secondary)
- 0-1 em-dashes per file
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- Exercises must work fully offline
- Use only synthetic or publicly documented incidents (no zero-days)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Create these files:

Chapter 61 — Agent Threat Landscape:
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/02-agent-attack-surface.md` (L02: prompt injection, tool abuse, data leakage, identity confusion, memory poisoning)
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/03-threat-modeling-for-agents.md` (L03: STRIDE adapted for agent architectures)

Chapter 62 — Prompt Injection Defense:
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/01-direct-vs-indirect-injection.md` (L01: with real examples from production incidents)
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/02-input-sanitization.md` (L02: input sanitization and boundary markers)
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/03-output-validation.md` (L03: output validation and action gating)
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/04-red-team-exercise.md` (L04: red-team your own agent, attack + defend cycle)

SPECIAL NOTES:
- Chapter 61 sets the threat vocabulary for the ENTIRE part. Terms you define here will be referenced by every other chapter. Be precise and consistent.
- Chapter 62 L04 is a hands-on red-team exercise. Design an attack+defend cycle where the student first attacks their own agent, then builds defenses, then attacks again. This is the most important exercise in the part.
- Chapter 62 references Part 1 prompt engineering, now viewed adversarially. Frame prompts the student learned to write in Part 1 as potential attack vectors.
- Do NOT create `61-agent-threat-landscape/01-agents-vs-apis.md` — that is the reference lesson, already created.

When finished, message the team lead: 'WRITER THREAT-FOUNDATIONS DONE — 61-agent-threat-landscape/README.md, 02-agent-attack-surface.md, 03-threat-modeling-for-agents.md, 62-prompt-injection-defense/README.md, 01-direct-vs-indirect-injection.md, 02-input-sanitization.md, 03-output-validation.md, 04-red-team-exercise.md'"

---

### Writer: tool-data

Spawn teammate **writer-tool-data** with Sonnet model.

Teammate prompt:

"You are the writer-tool-data teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/architecture-spec.md` (master spec — file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/shared-brief.md` (shared context — identity, patterns, protocols)
3. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/writer-brief-tool-data.md` (YOUR specific brief with scope and special notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-agents-vs-apis.md` (reference lesson — match its quality, format, and patterns exactly)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 45-53 (read ONLY those lines — Chapter 63 and Chapter 64 source content)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every defense must include its limitations; never present partial solutions as complete
- Use incident-driven teaching: what happened > why > defense > limitations
- Dual-language code in Docusaurus Tabs (Python primary, TypeScript secondary)
- 0-1 em-dashes per file
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- Exercises must work fully offline
- Use only synthetic or publicly documented incidents (no zero-days)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Create these files:

Chapter 63 — Tool Security:
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/01-least-privilege.md` (L01: principle of least privilege for tool access)
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/02-sandboxing.md` (L02: sandboxing and execution boundaries)
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/03-rate-limiting.md` (L03: rate limiting and resource quotas)
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/04-audit-logging.md` (L04: audit logging and anomaly detection)

Chapter 64 — Data Protection:
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/01-agent-memory-access.md` (L01: what agents remember and who can access it)
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/02-pii-compliance.md` (L02: PII handling and compliance basics — GDPR, CCPA, HIPAA overview)
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/03-data-flow-mapping.md` (L03: data flow mapping for agent systems)

SPECIAL NOTES:
- Chapter 63 references Part 5 tool design. Frame tools the student built in Part 5 as potential attack vectors that need hardening.
- Chapter 64 L02 covers compliance basics (GDPR, CCPA, HIPAA). You MUST include a clear disclaimer: 'This lesson provides a developer overview of compliance concepts. It is not legal advice. Consult qualified legal counsel for your specific compliance obligations.' This is non-negotiable.
- Data flow mapping (L03) should produce a reusable artifact: a data flow diagram template the student can apply to their own agent systems.

When finished, message the team lead: 'WRITER TOOL-DATA DONE — 63-tool-security/README.md, 01-least-privilege.md, 02-sandboxing.md, 03-rate-limiting.md, 04-audit-logging.md, 64-data-protection/README.md, 01-agent-memory-access.md, 02-pii-compliance.md, 03-data-flow-mapping.md'"

---

### Writer: identity-deploy

Spawn teammate **writer-identity-deploy** with Sonnet model.

Teammate prompt:

"You are the writer-identity-deploy teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/architecture-spec.md` (master spec — file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/shared-brief.md` (shared context — identity, patterns, protocols)
3. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/writer-brief-identity-deploy.md` (YOUR specific brief with scope and special notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-agents-vs-apis.md` (reference lesson — match its quality, format, and patterns exactly)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 55-63 (read ONLY those lines — Chapter 65 and Chapter 66 source content)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every defense must include its limitations; never present partial solutions as complete
- Use incident-driven teaching: what happened > why > defense > limitations
- Dual-language code in Docusaurus Tabs (Python primary, TypeScript secondary)
- 0-1 em-dashes per file
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- Exercises must work fully offline
- Use only synthetic or publicly documented incidents (no zero-days)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Create these files:

Chapter 65 — Identity and Authorization:
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-authorization/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-authorization/01-agent-identity.md` (L01: who is the agent acting as? User delegation vs service identity)
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-authorization/02-scope-management.md` (L02: scope management and consent flows)
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-authorization/03-multi-agent-trust.md` (L03: multi-agent trust boundaries)

Chapter 66 — Deployment Security:
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/01-container-hardening.md` (L01: container hardening for agent runtimes)
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/02-secrets-management.md` (L02: secrets management and rotation)
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/03-incident-response.md` (L03: incident response for agent failures)

SPECIAL NOTES:
- Chapter 65 addresses identity confusion, a subtle threat unique to agents. The 'confused deputy' problem (agent acts with user A's permissions on behalf of user B) is the core concept. Make it concrete with a realistic multi-tenant agent scenario.
- Chapter 65 L03 (multi-agent trust) must address what happens when Agent A calls Agent B. Who is authorized? What if Agent B is compromised? This is the most architecturally complex lesson in your scope.
- Chapter 66 references Part 6 deployment patterns. Build on what students already know from Part 6 container and cloud content.
- Chapter 66 L03 (incident response) should produce a reusable incident response playbook template, not just theory. The student should walk away with something they can adapt for their own agent deployments.

When finished, message the team lead: 'WRITER IDENTITY-DEPLOY DONE — 65-identity-authorization/README.md, 01-agent-identity.md, 02-scope-management.md, 03-multi-agent-trust.md, 66-deployment-security/README.md, 01-container-hardening.md, 02-secrets-management.md, 03-incident-response.md'"

---

### Writer: testing-capstone

Spawn teammate **writer-testing-capstone** with Sonnet model.

Teammate prompt:

"You are the writer-testing-capstone teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/architecture-spec.md` (master spec — file paths, patterns, structure)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/shared-brief.md` (shared context — identity, patterns, protocols)
3. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/writer-brief-testing-capstone.md` (YOUR specific brief with scope and special notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-agents-vs-apis.md` (reference lesson — match its quality, format, and patterns exactly)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 65-72 (read ONLY those lines — Chapter 67 and Chapter 68 source content)

RULES:

- Match the reference lesson's quality, format, and patterns exactly
- Every defense must include its limitations; never present partial solutions as complete
- Use incident-driven teaching: what happened > why > defense > limitations
- Dual-language code in Docusaurus Tabs (Python primary, TypeScript secondary)
- 0-1 em-dashes per file
- NO phantom imports (do NOT import Flashcards, Quiz, or other non-existent components)
- Exercises must work fully offline
- Use only synthetic or publicly documented incidents (no zero-days)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Create these files:

Chapter 67 — Security Testing:
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/01-automated-security-testing.md` (L01: automated security testing for agents)
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/02-red-teaming.md` (L02: red teaming methodology)
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/03-continuous-monitoring.md` (L03: continuous monitoring and alerting)

Chapter 68 — Capstone:
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/README.md` (chapter README)
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/01-security-review-checklist.md` (L01: security review checklist — the deliverable they can use at work)
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/02-ciso-presentation.md` (L02: present a security assessment to a simulated CISO)

SPECIAL NOTES:
- Chapter 67 synthesizes testing approaches for all threats covered in Chapters 61-66. Reference those chapters explicitly when showing how to test for each threat type.
- Chapter 67 L02 (red teaming) builds on Ch 62 L04's attack+defend exercise but at a systematic methodology level. Do not repeat Ch 62's content; instead, show how to organize red teaming as a practice.
- Chapter 68 is the capstone for the entire part. It must pull together everything from Chapters 61-67.
- Ch 68 L01 produces a REUSABLE security review checklist. This is the most valuable single artifact in the part. It must be comprehensive, organized by threat category (matching the chapter structure), and include scope disclaimers about what it does NOT cover.
- Ch 68 L02 is a CISO presentation simulation. The student writes a security assessment and 'presents' it. Reference Part 0 communication skills. The exercise must include a rubric for self-evaluation. Frame the CISO as technically literate but time-constrained: the student has 10 minutes to convey risk posture.
- Both capstone lessons should leave the student feeling equipped but humble: they know what they know AND they know what they don't know.

When finished, message the team lead: 'WRITER TESTING-CAPSTONE DONE — 67-security-testing/README.md, 01-automated-security-testing.md, 02-red-teaming.md, 03-continuous-monitoring.md, 68-capstone/README.md, 01-security-review-checklist.md, 02-ciso-presentation.md'"

---

## Phase 4: Quality Reviewer (1 teammate, depends on ALL Phase 3 writers)

Create a task for this teammate that depends on ALL four Phase 3 writer tasks completing.

Spawn teammate **quality-reviewer** with Opus model.

Teammate prompt:

"You are the quality-reviewer teammate for Part 8: AI Agent Security.
You are part of an agent team — communicate via messages to the team lead.

Your job is to review ALL output files from the 4 writers and produce a quality report.

READ IN ORDER:

1. `.specify/memory/constitution.md` (project standards — extract ONLY universal patterns that apply to security educational content: voice, formatting, terminology consistency, exercise quality)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/architecture-spec.md` (master spec — what should exist)
3. `apps/learn-app/docs/08-AI-Agent-Security/_architecture/shared-brief.md` (shared context — quality expectations)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-agents-vs-apis.md` (reference lesson — the quality benchmark)
5. ALL output files across all 8 chapter directories under `apps/learn-app/docs/08-AI-Agent-Security/`

IMPORTANT: Extract ONLY universal quality patterns from the constitution that apply to this content type. Do not flag issues based on rules that are specific to other content types.

REVIEW CHECKLIST:

Universal checks (apply to all content):
- Voice consistency: same tone across all 25 lessons (technically precise, appropriately paranoid, never dismissive or fear-mongering)
- Formatting: YAML frontmatter complete on every lesson, Docusaurus patterns consistent
- Terminology: threat terms defined in Ch 61 used consistently across all chapters
- Continuity: cross-references between chapters are valid, progressive complexity makes sense
- Exercise quality: exercises work offline, are substantive (not checkbox work), produce reusable artifacts where specified
- Em-dash limit: 0-1 per file
- No phantom imports: no imports of Flashcards, Quiz, or other non-existent components

Security-specific checks (critical for this content type):
- False confidence prevention: every defense includes limitations, no 'do these 5 things and you are secure' patterns
- Incident grounding: every concept taught through a real or realistic incident, not abstract theory
- Limitation disclosure: every checklist includes 'what this does NOT cover'
- Compliance disclaimers: GDPR/CCPA/HIPAA content includes 'not legal advice' disclaimer
- Attack surface completeness: the six attack surfaces from Ch 61 L02 (prompt injection, tool abuse, data leakage, identity confusion, memory poisoning, plus the API-vs-agent distinction) are addressed across the part
- Synthetic examples only: no classified or actual vulnerability details
- Dual-language: Python primary, TypeScript secondary in Tabs where code appears

DELIVERABLE:

Create `apps/learn-app/docs/08-AI-Agent-Security/_architecture/quality-report.md` containing:

1. **Overall score**: Pass / Conditional Pass / Fail
2. **Per-writer summary**: For each writer, list files reviewed, quality assessment, issues found
3. **Issues list**: Each issue with file path, line reference, severity (Critical / Major / Minor), description, and suggested fix
4. **False confidence audit**: Specific list of any places where content might give readers false confidence about their security posture
5. **Cross-reference verification**: Confirm all inter-chapter references and Part references are valid

Scoring rules:
- Any Critical issue = Fail
- 3+ Major issues from same writer = Fail
- All other cases = Pass or Conditional Pass

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md, overall score: [Pass/Conditional Pass/Fail]'"

---

## Lead Coordination Rules

1. Create team with TeamCreate.
2. Create ALL tasks upfront with proper dependencies:
   - Task: architect (Phase 1) — no dependencies
   - Task: reference-builder (Phase 2) — depends on architect
   - Task: writer-threat-foundations (Phase 3) — depends on reference-builder
   - Task: writer-tool-data (Phase 3) — depends on reference-builder
   - Task: writer-identity-deploy (Phase 3) — depends on reference-builder
   - Task: writer-testing-capstone (Phase 3) — depends on reference-builder
   - Task: quality-reviewer (Phase 4) — depends on ALL four writers
3. Spawn architect teammate first. Wait for completion before spawning reference-builder.
4. Spawn reference-builder. Wait for completion before spawning writers.
5. Spawn ALL 4 writer teammates SIMULTANEOUSLY after reference-builder completes.
6. Wait for ALL 4 writers to complete before spawning quality-reviewer.
7. Do NOT write content yourself. You coordinate, review, and verify. Nothing else.
8. If a teammate appears stuck (no progress message after extended period), message them asking for status.
9. If a teammate fails or crashes, spawn a replacement with the same prompt.
10. After quality-reviewer completes:
    - If score is Fail: identify the failing writer(s), spawn fix teammates with the quality report and specific issues to address, then re-run quality review
    - If score is Conditional Pass: review the issues yourself, decide if they need fixing before proceeding
    - If score is Pass: proceed to structural verification
11. Structural verification (after quality passes):
    - `ls -R apps/learn-app/docs/08-AI-Agent-Security/` to verify directory tree
    - Count files: should be 8 chapter READMEs + 25 lesson files + 1 Part README + architecture files
    - Spot-check YAML frontmatter from one file per writer
    - `grep -r "import.*from.*@site/src/components" apps/learn-app/docs/08-AI-Agent-Security/` to check for phantom imports
    - Verify the security review checklist (Ch 68 L01) covers all threat categories from Ch 61-67
12. After all verification passes, shut down all teammates and clean up the team.
13. Report final status: total files created, any remaining issues, overall quality score.

---

## Model Preferences

| Teammate | Model | Rationale |
|----------|-------|-----------|
| architect | Opus | Needs to process full source, design architecture, and create comprehensive briefs |
| reference-builder | Opus | Gold-standard quality is critical; sets the bar for all writers |
| writer-threat-foundations | Sonnet | Execution from detailed brief; Sonnet handles well-scoped writing |
| writer-tool-data | Sonnet | Execution from detailed brief |
| writer-identity-deploy | Sonnet | Execution from detailed brief |
| writer-testing-capstone | Sonnet | Capstone requires synthesis but brief provides structure |
| quality-reviewer | Opus | Must evaluate across all files, detect subtle quality issues and false confidence patterns |

---

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write content yourself — delegate everything to teammates
- Do NOT spawn Phase 3 teammates before Phase 2 completes
- Do NOT spawn quality reviewer before ALL writers complete
- Do NOT let writer teammates read the full source draft (only architect reads it all)
- Do NOT approve architect's plan without reviewing the directory structure
- Do NOT skip quality review or verification
- Do NOT let any lesson present a defense without stating its limitations (security content rule)
- Do NOT allow compliance content without legal advice disclaimers
- Do NOT let exercises depend on external vulnerable services (must work offline)
