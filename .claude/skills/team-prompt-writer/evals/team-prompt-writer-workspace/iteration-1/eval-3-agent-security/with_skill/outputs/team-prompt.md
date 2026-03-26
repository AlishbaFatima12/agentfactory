# Team Prompt: Part 8 — AI Agent Security

Create an agent team to produce Part 8: AI Agent Security, an 8-chapter (25 lesson) educational module that transforms developers from "my agent works" to "my agent works AND I can explain to a security team why it's safe to deploy."

**Source material**: `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`
**Output directory**: `apps/learn-app/docs/08-AI-Agent-Security/`
**Content type**: Security-focused educational content (book part)
**Team size**: 7 teammates (1 architect + 1 reference-builder + 4 writers + 1 quality reviewer)

This is security education where getting the pedagogy wrong gives readers false confidence. Every concept must be taught through a real or realistic incident, not abstract threat taxonomies. The reader should leave appropriately paranoid: aware of attack surfaces they did not know existed, equipped with concrete defenses, and honest about what remains uncertain in this fast-moving field.

---

## How to Execute This Prompt

1. `TeamCreate(team_name="agent-security")`
2. `TaskCreate(...)` for each phase with dependencies (see below)
3. For each teammate: `Agent(prompt="...", team_name="agent-security", name="<name>")`
4. Monitor via `SendMessage`
5. Shutdown: `SendMessage(to="<name>", message={"type": "shutdown_request"})` per teammate
6. `TeamDelete(team_name="agent-security")`

The `team_name` parameter on Agent() is what makes them teammates. Without it, you get independent subagents with no shared task list. **Every Agent() call MUST include `team_name="agent-security"`.**

---

## Team Lead Identity

You are the team lead for agent-security. You coordinate. You do NOT write content.

Use the shared task list (`TaskCreate`, `TaskUpdate`) to track all work. Enforce phase ordering via task dependencies. Your job is to ensure each phase completes before the next begins, verify deliverables exist, and escalate quality issues.

---

## Phase 1: Architect (1 teammate, blocks everything)

**Task**: `TaskCreate(subject="Phase 1: Architecture", description="Read full source, produce architecture spec + domain wisdom brief + per-writer briefs + README")`

**Spawn**: `Agent(prompt="<architect prompt below>", team_name="agent-security", name="architect")`

**Model**: Opus | **Plan approval**: enabled

### Architect Prompt

```
You are architect for agent-security.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION:
You design the complete architecture for Part 8: AI Agent Security, an 8-chapter
(25 lesson) security education module. Your deliverables are the foundation every
other teammate builds on. Get them wrong and 4 writers produce inconsistent content.

READ IN ORDER:

1. `.specify/memory/constitution.md` (project principles)
2. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` (FULL source spec — you are the ONLY teammate who reads this)
3. `apps/learn-app/docs/06-Building-Agent-Factories/61-introduction-to-ai-agents/README.md` (reference chapter README format)
4. `apps/learn-app/docs/06-Building-Agent-Factories/61-introduction-to-ai-agents/01-what-is-an-ai-agent.md` (reference lesson format and quality baseline)

WHAT MAKES THIS CONTENT SPECIAL:
This is security education. The stakes are different from a typical programming chapter.
Wrong security advice is actively dangerous: it creates false confidence. Every concept
must be grounded in a real or realistic incident ("here's what happened, here's why,
here's how to prevent it"). Abstract threat models without concrete examples are a
quality failure, not merely a style preference.

The reader has built and deployed agents in Parts 5-7 but has NEVER thought adversarially
about their own systems. The transformation is from builder to builder-who-can-defend.

DELIVERABLES (write all to `apps/learn-app/docs/08-AI-Agent-Security/`):

1. **Master Architecture Spec** (`architecture-spec.md`):
   - Complete directory skeleton (every file path for all 8 chapters, 25 lessons)
   - Chapter naming convention: `61-agent-threat-landscape/`, `62-prompt-injection-defense/`,
     `63-tool-security/`, `64-data-protection/`, `65-identity-and-authorization/`,
     `66-deployment-security/`, `67-security-testing/`, `68-capstone/`
   - Lesson file naming: `NN-slug.md` + `NN-slug.summary.md` per lesson
   - YAML frontmatter template (title, sidebar_position, description, proficiency_level,
     cognitive_load, estimated_time, learning_objectives, skills)
   - Source-to-output mapping (which source lines map to which chapters)
   - Writer-to-scope assignment table (4 writers, zero file overlap)

2. **Domain Wisdom Brief** (`domain-wisdom-brief.md`):
   - CORE CONCEPTS (the 5 ideas that must land):
     (1) Agent attack surfaces are fundamentally different from API attack surfaces
         (autonomous action, tool access, memory, identity delegation)
     (2) Defense in depth: prompt layer + tool layer + data layer + identity layer +
         deployment layer, each with distinct threat models
     (3) Security is a tradeoff, not a checklist (shipping speed vs protection, and
         being honest about where you chose speed)
     (4) Red-team thinking: the attacker's perspective reveals what defender's checklists miss
     (5) Compliance frameworks (GDPR, CCPA, HIPAA) are enablers that force good architecture,
         not bureaucratic obstacles
   - QUALITY DIMENSIONS ranked for this content:
     (a) Technical accuracy: wrong security advice is worse than no advice
     (b) Incident authenticity: every concept earnable through a real/realistic scenario
     (c) Practical applicability: exercises that transfer directly to production systems
     (d) Appropriate paranoia calibration: not fearful, not dismissive, but clear-eyed
     (e) Pedagogical honesty: explicitly stating what this content does NOT cover and
         what remains unsolved in the field
   - COMMON PITFALLS (what mediocre agent security content looks like):
     (a) Security theater: teaching checkbox compliance without real protection
     (b) Copy-paste web security: treating agents like REST APIs (they're not)
     (c) False confidence: "do these 5 things and you're secure"
     (d) Fear-based teaching: listing threats without actionable defenses
     (e) Ignoring economics: pretending security has no cost or schedule impact
     (f) Stale examples: using yesterday's CVEs instead of agent-specific scenarios
   - DECISION FRAMEWORKS (for writer judgment calls):
     (a) "Incident first, principle second": start with what went wrong, then
         derive the general lesson. Never start with a taxonomy.
     (b) "Authenticity over comprehensiveness": one real scenario deeply analyzed
         beats five theoretical threats superficially listed
     (c) "Name the tradeoff": when a defense has a cost (performance, complexity,
         user friction), say so. Hiding costs erodes trust.
     (d) "The reader is the defender AND the attacker": exercises should require
         both perspectives. Build then break. Break then fix.
     (e) "Honest boundaries": state clearly what this lesson does NOT protect
         against. Security content that implies completeness is dangerous.

3. **Per-Writer Briefs** (one file per writer):
   - `writer-a-brief.md`: Chapters 61-62 (Threat Landscape + Prompt Injection, 7 lessons)
     * Chapter-specific quality notes: Ch 61 must establish that agent threats are
       categorically different from API threats, not just "more" threats. Ch 62 must
       use real prompt injection examples (synthetic, not actual exploits) and the
       red-team exercise (L04) must genuinely challenge the student.
     * Source lines: 1-42
   - `writer-b-brief.md`: Chapters 63-64 (Tool Security + Data Protection, 7 lessons)
     * Chapter-specific quality notes: Ch 63 must go beyond "use permissions" to show
       how tool abuse chains create emergent vulnerabilities. Ch 64 compliance overview
       must be practical (what to actually implement), not legal summary.
     * Source lines: 43-54
   - `writer-c-brief.md`: Chapters 65-66 (Identity/Auth + Deployment Security, 6 lessons)
     * Chapter-specific quality notes: Ch 65 identity confusion is the hardest concept
       in this part — who is the agent acting as? Ch 66 must connect to Part 6 deployment
       patterns the reader already knows.
     * Source lines: 55-66
   - `writer-d-brief.md`: Chapters 67-68 (Security Testing + Capstone, 5 lessons)
     * Chapter-specific quality notes: Ch 67 automated testing must produce runnable
       test suites, not theoretical frameworks. Ch 68 capstone security review checklist
       must be a real deliverable the reader can use at work tomorrow.
     * Source lines: 67-81
   - Each brief includes: exact file paths to create, exit criteria, and content-specific notes

4. **Output Directory README** (`README.md`):
   - Standard chapter README format (match reference at Part 6 Ch 61)
   - Part overview, learning journey, chapter summaries, prerequisites

RULES:
- Match the reference chapter format (YAML frontmatter, heading structure, section patterns)
- Every chapter directory must be created with its README
- Use global chapter numbers from the source spec (61-68)
- All code examples in Python (primary) and TypeScript (secondary)
- Em-dash limit: 0-1 per file
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'ARCHITECT DONE — [list all files created]'
```

---

## Phase 2: Reference-Builder (1 teammate, blocks Phase 3)

**Task**: `TaskCreate(subject="Phase 2: Reference Lesson", description="Build one gold-standard lesson demonstrating all patterns", dependencies=["Phase 1"])`

**Spawn**: `Agent(prompt="<reference-builder prompt below>", team_name="agent-security", name="reference-builder")`

**Model**: Opus

### Reference-Builder Prompt

```
You are reference-builder for agent-security.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION:
Build ONE gold-standard lesson that every writer will use as their quality benchmark.
This lesson demonstrates every pattern: YAML frontmatter, incident-first teaching,
defense techniques, exercises with attacker+defender perspectives, and honest
boundary-setting.

WHAT YOU'RE BUILDING AND WHY:
Part 8 teaches developers to secure AI agent systems. This reference lesson sets the
quality bar for 24 other lessons. If you get this right, four parallel writers have a
clear target. If you get this wrong, they each invent their own interpretation of
"good security content" and the part becomes inconsistent.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/08-AI-Agent-Security/domain-wisdom-brief.md` (quality framework)
3. `apps/learn-app/docs/06-Building-Agent-Factories/61-introduction-to-ai-agents/01-what-is-an-ai-agent.md` (existing reference for lesson FORMAT baseline)
4. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 33-36 (Chapter 61 L01 source content)

DELIVERABLE:
Create `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md`
and its summary file `01-why-agents-are-different.summary.md`.

This lesson covers "Why agents are different from APIs (autonomous action, tool access, memory)."

PATTERN CHECKLIST (the reference must demonstrate ALL of these):

- [ ] Complete YAML frontmatter (title, sidebar_position, description, proficiency_level,
      cognitive_load, estimated_time, learning_objectives, skills, generated_by, source_spec)
- [ ] Opens with an incident or scenario (not a definition)
- [ ] Teaches the concept through the incident (incident first, principle second)
- [ ] Includes a comparison table (agent vs API attack surfaces)
- [ ] Has a concrete code example in Python showing the difference
- [ ] TypeScript secondary example where appropriate
- [ ] "Try With AI" or exercise section with BOTH attacker and defender perspectives
- [ ] Explicitly states what this lesson does NOT cover (honest boundaries)
- [ ] Connects backward (what reader built in Parts 5-7) and forward (what comes next in Ch 61-62)
- [ ] Em-dash count: 0-1 in the entire file
- [ ] Summary file follows the `.summary.md` convention from existing lessons

QUALITY FRAMEWORK:
- Technical accuracy: every claim about agent vs API differences must be precisely correct.
  Agents are not "more vulnerable APIs"; they have categorically different attack surfaces
  because of autonomous action, tool access, persistent memory, and identity delegation.
- Incident authenticity: the opening scenario should feel like something that actually happened
  in a real engineering team. Synthetic but plausible. Not contrived.
- Appropriate paranoia: the reader should finish this lesson thinking "I never considered
  that my agent could do X without my knowledge." Not "agents are too dangerous to build."

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Starting with "In this lesson, you'll learn..." instead of an incident
- Listing threats without showing WHY agents create them (autonomous action, tool access, etc.)
- A "Try With AI" section that's just "ask Claude to list agent security risks"
- No honest boundaries section: implying this lesson covers agent security comprehensively

RULES:
- Match reference lesson format from Ch 61 L01 (YAML frontmatter structure, heading depth, section patterns)
- All exercises must work offline (no external vulnerable services)
- No actual vulnerability details (use synthetic examples)
- Em-dash limit: 0-1 per file
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'REFERENCE-BUILDER DONE — [file list]'
```

---

## Phase 3: Writers (4 teammates, all parallel)

**Task per writer**: `TaskCreate(subject="Phase 3: Writer [A/B/C/D]", description="Write chapters [X-Y]", dependencies=["Phase 2"])`

**Spawn ALL 4 writer teammates SIMULTANEOUSLY after Phase 2 completes.**

---

### Writer A: Chapters 61-62 (Threat Landscape + Prompt Injection)

**Spawn**: `Agent(prompt="<writer-a prompt below>", team_name="agent-security", name="writer-a")`

```
You are writer-a for agent-security.
You are part of an agent team — communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the gateway into agent security. Your two chapters (61: Agent Threat
Landscape, 62: Prompt Injection Defense) take a developer who has built working agents
and show them the attack surfaces they never knew existed. Chapter 61 establishes WHY
agent security is a distinct discipline (not web security with extra steps). Chapter 62
dives into the most common and best-understood attack vector: prompt injection.

The reader starts your chapters thinking "my agent works fine." They finish thinking
"my agent has attack surfaces I've never considered, and I now know how to defend against
the most common one." This is the foundational shift that makes the rest of Part 8 land.

YOUR CHAPTERS IN CONTEXT:
These are the FIRST two chapters of Part 8. The reader arrives from Parts 5-7 where they
built and deployed agents. They know Python/TypeScript, understand APIs, and have deployed
to cloud. They do NOT know threat modeling, adversarial thinking, or that their agents
have fundamentally different attack surfaces than the APIs they've built before.

After your chapters, they move to Ch 63-64 (Tool Security + Data Protection) where they
apply adversarial thinking to specific subsystems. Your chapters must give them the mental
model; later chapters give them the specific defenses.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/08-AI-Agent-Security/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/learn-app/docs/08-AI-Agent-Security/writer-a-brief.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (reference lesson — match format AND depth)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 32-42 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Technical accuracy: agent threats must be precisely distinguished from API threats.
  Do not describe generic web vulnerabilities; describe what is UNIQUE to autonomous,
  tool-using, memory-having systems.
- Incident authenticity: every lesson opens with or centers on a realistic incident.
  Ch 62 especially: use real-world prompt injection patterns (synthetic versions, not
  actual exploits) from production incidents.
- Practical applicability: Ch 62 L04 (red-team exercise) must be a genuine attack+defend
  cycle the reader can run locally. Not a thought experiment.
- Appropriate paranoia: readers should feel informed, not afraid. "Now I see the surface"
  not "agents are too risky to build."

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Chapter 61 that reads like a web security textbook with "agent" find-and-replaced in
- Threat taxonomy without concrete incident examples for each threat
- Prompt injection lesson that only covers direct injection and treats indirect as a footnote
- Red-team exercise (62-L04) that's a checklist instead of a genuine adversarial challenge
- Any lesson that says "do these N things and you're protected" without naming what remains

WHEN IN DOUBT:
- Incident first, principle second. Start with what went wrong, derive the lesson.
- Authenticity over comprehensiveness. One real scenario deeply analyzed beats five
  theoretical threats superficially listed.
- Name the tradeoff. If a defense has a cost, say so.
- The reader is both attacker and defender. Exercises should require both perspectives.

YOUR SCOPE:

Chapter 61: Agent Threat Landscape (3 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/02-the-agent-attack-surface.md`
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/02-the-agent-attack-surface.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/03-threat-modeling-for-agents.md`
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/03-threat-modeling-for-agents.summary.md`

NOTE: L01 (01-why-agents-are-different.md) was created by reference-builder.
You write L02 and L03 only, plus the chapter README.

Chapter 62: Prompt Injection Defense (4 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/01-direct-vs-indirect-injection.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/01-direct-vs-indirect-injection.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/02-input-sanitization-and-boundary-markers.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/02-input-sanitization-and-boundary-markers.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/03-output-validation-and-action-gating.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/03-output-validation-and-action-gating.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/04-red-team-your-own-agent.md`
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/04-red-team-your-own-agent.summary.md`

Source lines 32-42 from the source spec.

RULES:
- Match the reference lesson (61-L01) in format, depth, and quality
- All code examples in Python (primary) and TypeScript (secondary)
- All exercises must work offline (no dependency on external vulnerable services)
- No actual vulnerability details (use synthetic examples)
- Em-dash limit: 0-1 per file
- YAML frontmatter is mandatory on every lesson file
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER A DONE — [file list]'
```

---

### Writer B: Chapters 63-64 (Tool Security + Data Protection)

**Spawn**: `Agent(prompt="<writer-b prompt below>", team_name="agent-security", name="writer-b")`

```
You are writer-b for agent-security.
You are part of an agent team — communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the infrastructure defense layer. Your two chapters (63: Tool Security,
64: Data Protection) teach developers to lock down the two subsystems agents interact
with most: external tools and stored data. Chapter 63 covers how tool access creates
emergent vulnerabilities when an agent chains tools in unintended ways. Chapter 64 covers
what agents remember, who can access it, and what compliance frameworks actually require.

The reader arrives from Ch 61-62 understanding that agents have unique attack surfaces
and knowing how to defend against prompt injection. Your chapters apply that adversarial
mindset to specific subsystems: "Now that you think like an attacker, let's secure
the tools your agent uses and the data it handles."

YOUR CHAPTERS IN CONTEXT:
These are the middle infrastructure chapters. The reader knows agent threat models (Ch 61)
and prompt injection defense (Ch 62). They do NOT yet know about identity/authorization
(Ch 65) or deployment security (Ch 66). Your chapters focus on the WHAT: what tools and
data are at risk. The WHO (identity) and WHERE (deployment) come next.

Ch 63 builds directly on Part 5 tool design. The reader designed tools for functionality;
now they revisit them for security. Ch 64 introduces compliance (GDPR, CCPA, HIPAA) for
the first time. These are NOT legal summaries; they are practical architectural constraints.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/08-AI-Agent-Security/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/learn-app/docs/08-AI-Agent-Security/writer-b-brief.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (reference lesson — match format AND depth)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 43-54 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Technical accuracy: tool abuse chains are subtle (agent uses File tool to read config,
  then uses HTTP tool to exfiltrate). Examples must show the CHAIN, not just individual
  tool misuse. Compliance content must be architecturally precise, not legally vague.
- Incident authenticity: each lesson opens with a scenario where tool access or data
  handling went wrong. Not "imagine if..." but "here's what happened when..."
- Practical applicability: sandboxing examples must use real isolation mechanisms
  (containers, subprocess boundaries). Compliance lessons must produce auditable artifacts
  (data flow maps, PII inventories).
- Appropriate paranoia: tool access is powerful and necessary. The goal is controlled
  access, not no access.

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Tool security that only covers "check permissions" without showing emergent abuse chains
- Compliance lessons that read like legal summaries instead of architectural guidance
- Data protection without a concrete data flow mapping exercise
- Rate limiting taught as "add a decorator" without explaining what you're actually defending against
- Audit logging taught without explaining what to look FOR in the logs

WHEN IN DOUBT:
- Incident first, principle second. Start with what went wrong, derive the lesson.
- Show the chain, not the link. Vulnerabilities compound; show how.
- Compliance is architecture. GDPR isn't paperwork; it's "where does PII flow?"
- Name what you're NOT covering. Data protection is vast; be honest about scope.

YOUR SCOPE:

Chapter 63: Tool Security (4 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/01-least-privilege-for-tool-access.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/01-least-privilege-for-tool-access.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/02-sandboxing-and-execution-boundaries.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/02-sandboxing-and-execution-boundaries.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/03-rate-limiting-and-resource-quotas.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/03-rate-limiting-and-resource-quotas.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/04-audit-logging-and-anomaly-detection.md`
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/04-audit-logging-and-anomaly-detection.summary.md`

Chapter 64: Data Protection (3 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/01-what-agents-remember.md`
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/01-what-agents-remember.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/02-pii-handling-and-compliance.md`
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/02-pii-handling-and-compliance.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/03-data-flow-mapping.md`
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/03-data-flow-mapping.summary.md`

Source lines 43-54 from the source spec.

RULES:
- Match the reference lesson (61-L01) in format, depth, and quality
- All code examples in Python (primary) and TypeScript (secondary)
- All exercises must work offline (no dependency on external vulnerable services)
- No actual vulnerability details (use synthetic examples)
- Em-dash limit: 0-1 per file
- YAML frontmatter is mandatory on every lesson file
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER B DONE — [file list]'
```

---

### Writer C: Chapters 65-66 (Identity/Auth + Deployment Security)

**Spawn**: `Agent(prompt="<writer-c prompt below>", team_name="agent-security", name="writer-c")`

```
You are writer-c for agent-security.
You are part of an agent team — communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the system-level security layer. Your two chapters (65: Identity and
Authorization, 66: Deployment Security) address WHO the agent acts as and WHERE it runs
safely. Chapter 65 tackles the hardest conceptual problem in agent security: identity
confusion. When an agent acts on behalf of a user, who is responsible? When agents
communicate with each other, how do they establish trust? Chapter 66 connects security
to the deployment practices the reader learned in Part 6, now viewed through a security lens.

The reader arrives from Ch 63-64 understanding tool and data security. Your chapters
complete the defense-in-depth stack by adding identity controls and deployment hardening.
After your chapters, they move to testing and the capstone.

YOUR CHAPTERS IN CONTEXT:
These chapters sit at the system architecture level. The reader has learned attack surfaces
(Ch 61), prompt defense (Ch 62), tool security (Ch 63), and data protection (Ch 64).
They understand WHAT to protect and HOW at the application layer. Your chapters address
the system-level questions: WHO has authority, and WHERE are the security boundaries?

Ch 65 introduces a concept most developers have never considered: the agent as a distinct
principal. Not the user. Not the service. A new entity with delegated authority, scope
limits, and trust boundaries. This is the hardest concept in Part 8.

Ch 66 connects directly to Part 6 deployment chapters. The reader already knows Docker,
secrets management basics, and cloud deployment. Your chapter reframes those skills through
security: container hardening, secrets rotation, and incident response for agent-specific failures.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/08-AI-Agent-Security/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/learn-app/docs/08-AI-Agent-Security/writer-c-brief.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (reference lesson — match format AND depth)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 55-66 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Technical accuracy: identity delegation is nuanced. User-delegated authority vs service
  identity vs agent-as-principal are three distinct models. Do not conflate them.
  Container hardening must use real Dockerfile directives, not generic advice.
- Incident authenticity: identity confusion incidents are among the most damaging in
  agent systems. Show how an agent with overly broad delegated authority caused harm.
  Show how secrets leaked from an un-hardened container.
- Practical applicability: scope management must produce implementable consent flows.
  Incident response must produce a runnable playbook, not a theoretical framework.
- Appropriate paranoia: identity is complex but solvable. Deployment hardening is
  achievable with known tools. Don't make it seem impossible.

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Identity chapter that only covers "use OAuth" without addressing agent-as-principal
- Multi-agent trust boundaries described abstractly without showing a concrete trust
  topology diagram or code
- Deployment security that repeats Part 6 content instead of adding security perspective
- Incident response as a list of steps without a realistic incident scenario to walk through
- Secrets management as "use a vault" without showing rotation, access policies, or
  what happens when a secret is compromised

WHEN IN DOUBT:
- The agent is a new kind of principal. Not a user, not a service. Teach this distinction.
- Connect to what they already know. Part 6 deployment is foundation; this adds security.
- Name the tradeoff. Tighter identity controls mean more friction. Say so.
- Honest boundaries. Multi-agent trust is an open research area. State what's known.

YOUR SCOPE:

Chapter 65: Identity and Authorization (3 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-and-authorization/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-and-authorization/01-who-is-the-agent-acting-as.md`
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-and-authorization/01-who-is-the-agent-acting-as.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-and-authorization/02-scope-management-and-consent.md`
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-and-authorization/02-scope-management-and-consent.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-and-authorization/03-multi-agent-trust-boundaries.md`
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-and-authorization/03-multi-agent-trust-boundaries.summary.md`

Chapter 66: Deployment Security (3 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/01-container-hardening.md`
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/01-container-hardening.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/02-secrets-management-and-rotation.md`
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/02-secrets-management-and-rotation.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/03-incident-response.md`
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/03-incident-response.summary.md`

Source lines 55-66 from the source spec.

RULES:
- Match the reference lesson (61-L01) in format, depth, and quality
- All code examples in Python (primary) and TypeScript (secondary)
- All exercises must work offline (no dependency on external vulnerable services)
- No actual vulnerability details (use synthetic examples)
- Em-dash limit: 0-1 per file
- YAML frontmatter is mandatory on every lesson file
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER C DONE — [file list]'
```

---

### Writer D: Chapters 67-68 (Security Testing + Capstone)

**Spawn**: `Agent(prompt="<writer-d prompt below>", team_name="agent-security", name="writer-d")`

```
You are writer-d for agent-security.
You are part of an agent team — communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the verification and synthesis layer. Your two chapters (67: Security
Testing, 68: Capstone) complete the arc by teaching readers to verify their defenses
and synthesize everything into a professional security assessment. Chapter 67 gives them
automated testing, red teaming, and monitoring tools. Chapter 68 produces the two most
valuable deliverables in the entire part: a security review checklist they can use at
work tomorrow, and the ability to present a security assessment to a CISO.

The reader arrives from Ch 61-66 with defense-in-depth knowledge across prompt, tool,
data, identity, and deployment layers. Your chapters answer: "How do I PROVE my defenses
work?" and "How do I COMMUNICATE security posture to stakeholders?"

YOUR CHAPTERS IN CONTEXT:
These are the final chapters. Everything converges here. The reader has built defenses
across all layers. Now they need to:
1. Test those defenses systematically (Ch 67)
2. Synthesize everything into a professional deliverable (Ch 68)

Ch 67 references Part 0 communication skills (explaining threats to non-technical
stakeholders) and connects the red-team methodology introduced in Ch 62 L04 to a
full testing program.

Ch 68 is the capstone. The security review checklist (L01) must be a real, usable
artifact, not a pedagogical exercise. The CISO presentation (L02) must feel like
genuine professional practice, not a classroom simulation.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/architecture-spec.md` (structure, patterns, file paths)
2. `apps/learn-app/docs/08-AI-Agent-Security/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/learn-app/docs/08-AI-Agent-Security/writer-d-brief.md` (YOUR scope, line ranges, chapter notes)
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (reference lesson — match format AND depth)
5. `.claude/skills/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 67-81 (your assigned source material ONLY)

QUALITY FRAMEWORK:
- Technical accuracy: automated testing must produce RUNNABLE test suites. Not pseudocode.
  Not "here's how you would test." Actual pytest/jest tests the reader can execute.
  The security checklist must cover all layers taught in Part 8.
- Incident authenticity: Ch 67 red teaming must include realistic attack scenarios that
  test defenses from Ch 62-66. Not generic penetration testing.
- Practical applicability: the security review checklist (68-L01) is THE deliverable of
  Part 8. It must be something a developer can print, bring to a security review meeting,
  and use to evaluate an agent system. Real professional artifact.
- Synthesis quality: the CISO presentation (68-L02) must teach communication, not just
  security. How to explain agent-specific risks to someone who understands traditional
  security but not agents.

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Automated testing that describes test types but doesn't show runnable tests
- Red teaming as a generic methodology instead of agent-specific attack scenarios
- Monitoring that lists tools to install without showing what alerts to create
- Security checklist that's too generic (could apply to any software, not agent-specific)
- CISO presentation exercise that's "write a summary of what you learned" instead of
  a structured security assessment with risk ratings and remediation priorities
- Capstone that doesn't reference and synthesize ALL previous chapters

WHEN IN DOUBT:
- The checklist is a professional deliverable. Would you hand this to your VP of Engineering?
- The CISO presentation bridges technical depth and executive communication.
- Testing proves defenses work; it doesn't teach defenses (that's Ch 62-66's job).
- Honest boundaries: no test suite catches everything. Say what it misses.

YOUR SCOPE:

Chapter 67: Security Testing (3 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/01-automated-security-testing.md`
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/01-automated-security-testing.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/02-red-teaming-methodology.md`
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/02-red-teaming-methodology.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/03-continuous-monitoring-and-alerting.md`
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/03-continuous-monitoring-and-alerting.summary.md`

Chapter 68: Capstone (2 lessons)
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/README.md`
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/01-security-review-checklist.md`
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/01-security-review-checklist.summary.md`
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/02-present-to-a-ciso.md`
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/02-present-to-a-ciso.summary.md`

Source lines 67-81 from the source spec.

RULES:
- Match the reference lesson (61-L01) in format, depth, and quality
- All code examples in Python (primary) and TypeScript (secondary)
- All exercises must work offline (no dependency on external vulnerable services)
- No actual vulnerability details (use synthetic examples)
- Em-dash limit: 0-1 per file
- YAML frontmatter is mandatory on every lesson file
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER D DONE — [file list]'
```

---

## Phase 4: Quality Reviewer (1 teammate, depends on ALL Phase 3)

**Task**: `TaskCreate(subject="Phase 4: Quality Review", description="Review all outputs against domain wisdom brief and quality framework", dependencies=["Phase 3: Writer A", "Phase 3: Writer B", "Phase 3: Writer C", "Phase 3: Writer D"])`

**Spawn**: `Agent(prompt="<quality-reviewer prompt below>", team_name="agent-security", name="quality-reviewer")`

**Model**: Opus

### Quality Reviewer Prompt

```
You are quality-reviewer for agent-security.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION:
Review ALL content produced by 4 writers and 1 reference-builder for Part 8: AI Agent
Security. Your review determines whether this content is safe to publish. This is
security education: false confidence is worse than no content at all.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/domain-wisdom-brief.md` (quality framework — this is your scoring rubric)
2. `apps/learn-app/docs/08-AI-Agent-Security/architecture-spec.md` (structural expectations)
3. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (reference lesson — the quality bar)
4. ALL lesson files across all 8 chapter directories

EVALUATION DIMENSIONS (score each lesson 1-5):

1. **Technical Accuracy** (weight: 3x)
   Does every security claim hold up? Are agent-specific threats precisely distinguished
   from generic web threats? Are defense techniques correctly described? Would a security
   engineer find errors?
   - Score 1-2: Contains incorrect security advice (BLOCKING)
   - Score 3: Technically correct but imprecise
   - Score 4: Accurate and precise
   - Score 5: Accurate, precise, and nuanced (acknowledges edge cases)

2. **Incident Authenticity** (weight: 2x)
   Does each lesson teach through realistic incidents? Are scenarios plausible and
   specific to agent systems? Or are they generic "imagine if..." constructions?
   - Score 1-2: No incidents, or generic non-agent scenarios
   - Score 3: Incidents present but feel contrived
   - Score 4: Realistic, agent-specific scenarios
   - Score 5: Scenarios that reveal attack surfaces the reader genuinely wouldn't have considered

3. **Practical Applicability** (weight: 2x)
   Can the reader use what they learned tomorrow? Are exercises runnable? Are deliverables
   (especially the Ch 68 checklist) professional-grade?
   - Score 1-2: Theoretical only, no actionable takeaways
   - Score 3: Some exercises, but not runnable as-is
   - Score 4: Exercises work and produce useful artifacts
   - Score 5: Produces artifacts the reader would actually bring to a security review

4. **Paranoia Calibration** (weight: 1x)
   Does the content create appropriate awareness without fear or false confidence?
   - Score 1: Creates false confidence ("do X and you're safe")
   - Score 2: Creates fear ("agents are too dangerous")
   - Score 3: Neutral but without clear stance
   - Score 4: Appropriately calibrated awareness
   - Score 5: Reader finishes with clear mental model of what's defended, what's not

5. **Honest Boundaries** (weight: 1x)
   Does each lesson state what it does NOT cover? Does the content acknowledge uncertainty
   in this fast-moving field?
   - Score 1-2: Implies completeness (DANGEROUS for security content)
   - Score 3: Mentions limitations briefly
   - Score 4: Clear boundary statements per lesson
   - Score 5: Boundaries are specific, honest, and point to further resources

6. **Structural Compliance** (weight: 1x)
   YAML frontmatter, em-dash count, lesson format, summary files, code language
   (Python primary, TypeScript secondary), offline exercises.

DELIVERABLE:
Write `apps/learn-app/docs/08-AI-Agent-Security/quality-review.md` with:

1. **Summary scores**: per-writer weighted average across all dimensions
2. **Per-lesson scores**: every lesson scored on every dimension
3. **Blocking issues**: anything scored 1-2 on Technical Accuracy or Honest Boundaries
   (these MUST be fixed before publication)
4. **Improvement suggestions**: specific, actionable fixes with file paths and line references
5. **Cross-chapter consistency**: do chapters reference each other correctly? Does the
   learning progression make sense? Do later chapters build on earlier concepts?
6. **Capstone quality**: special section on Ch 68 deliverables (checklist and CISO presentation)
   — are these genuinely professional-grade?

CRITICAL GATE:
- If ANY lesson scores 1-2 on Technical Accuracy: FLAG AS BLOCKING. Wrong security
  advice is actively dangerous.
- If ANY lesson implies completeness without honest boundaries: FLAG AS BLOCKING.
  Security content that creates false confidence fails its purpose.

RULES:
- Be specific. "This lesson is weak" is not useful. "L02 line 45 claims X but Y is
  more accurate because Z" is useful.
- Score against the domain wisdom brief, not generic quality standards.
- The reference lesson (61-L01) is the quality bar. Everything should match or exceed it.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-review.md'
```

---

## Lead Coordination Rules

1. `TeamCreate(team_name="agent-security")`
2. `TaskCreate` for each phase with dependencies:
   - Phase 1 (architect): no dependencies
   - Phase 2 (reference-builder): depends on Phase 1
   - Phase 3 (all 4 writers): each depends on Phase 2
   - Phase 4 (quality-reviewer): depends on all 4 Phase 3 tasks
3. `Agent(prompt="...", team_name="agent-security", name="<name>")` per teammate
4. Do NOT write content yourself. You coordinate only.
5. Wait for Phase 1 to complete before spawning Phase 2.
6. Wait for Phase 2 to complete before spawning Phase 3 writers.
7. Spawn ALL 4 writers simultaneously when Phase 2 completes.
8. Wait for ALL 4 writers to complete before spawning Phase 4 quality reviewer.
9. After quality review, run structural verification:
   - Verify all 25 lesson files + 25 summary files exist
   - Verify all 8 chapter READMEs exist
   - Verify Part 8 README exists
   - Verify architecture-spec.md and domain-wisdom-brief.md exist
   - Verify zero file path conflicts (no duplicate file names across chapters)
   - Verify em-dash count per file (0-1 allowed)
10. Graceful shutdown: `SendMessage(to="<name>", message={"type": "shutdown_request"})` per teammate
11. `TeamDelete(team_name="agent-security")`

---

## Anti-Patterns

- Do NOT call `Agent()` without `team_name` parameter. That spawns subagents, not teammates. Every `Agent()` call must include `team_name="agent-security"`.
- Do NOT write content yourself. You are the lead; you coordinate.
- Do NOT spawn Phase 3 before Phase 2 completes. Writers need the reference lesson.
- Do NOT spawn quality reviewer before ALL writers complete. Partial reviews miss cross-chapter issues.
- Do NOT let writers read the full source. Only the architect reads the entire source spec. Writers read only their assigned line ranges.
- Do NOT skip the quality reviewer phase. Security content without review is dangerous.
- Do NOT treat quality review as optional for security content. False confidence kills.

---

## File Manifest

Total files to produce: **67 files**

```
apps/learn-app/docs/08-AI-Agent-Security/
├── README.md                                    (architect)
├── architecture-spec.md                         (architect)
├── domain-wisdom-brief.md                       (architect)
├── writer-a-brief.md                            (architect)
├── writer-b-brief.md                            (architect)
├── writer-c-brief.md                            (architect)
├── writer-d-brief.md                            (architect)
├── quality-review.md                            (quality-reviewer)
├── 61-agent-threat-landscape/
│   ├── README.md                                (writer-a)
│   ├── 01-why-agents-are-different.md           (reference-builder)
│   ├── 01-why-agents-are-different.summary.md   (reference-builder)
│   ├── 02-the-agent-attack-surface.md           (writer-a)
│   ├── 02-the-agent-attack-surface.summary.md   (writer-a)
│   ├── 03-threat-modeling-for-agents.md          (writer-a)
│   └── 03-threat-modeling-for-agents.summary.md  (writer-a)
├── 62-prompt-injection-defense/
│   ├── README.md                                (writer-a)
│   ├── 01-direct-vs-indirect-injection.md       (writer-a)
│   ├── 01-direct-vs-indirect-injection.summary.md (writer-a)
│   ├── 02-input-sanitization-and-boundary-markers.md (writer-a)
│   ├── 02-input-sanitization-and-boundary-markers.summary.md (writer-a)
│   ├── 03-output-validation-and-action-gating.md (writer-a)
│   ├── 03-output-validation-and-action-gating.summary.md (writer-a)
│   ├── 04-red-team-your-own-agent.md            (writer-a)
│   └── 04-red-team-your-own-agent.summary.md    (writer-a)
├── 63-tool-security/
│   ├── README.md                                (writer-b)
│   ├── 01-least-privilege-for-tool-access.md    (writer-b)
│   ├── 01-least-privilege-for-tool-access.summary.md (writer-b)
│   ├── 02-sandboxing-and-execution-boundaries.md (writer-b)
│   ├── 02-sandboxing-and-execution-boundaries.summary.md (writer-b)
│   ├── 03-rate-limiting-and-resource-quotas.md  (writer-b)
│   ├── 03-rate-limiting-and-resource-quotas.summary.md (writer-b)
│   ├── 04-audit-logging-and-anomaly-detection.md (writer-b)
│   └── 04-audit-logging-and-anomaly-detection.summary.md (writer-b)
├── 64-data-protection/
│   ├── README.md                                (writer-b)
│   ├── 01-what-agents-remember.md               (writer-b)
│   ├── 01-what-agents-remember.summary.md       (writer-b)
│   ├── 02-pii-handling-and-compliance.md        (writer-b)
│   ├── 02-pii-handling-and-compliance.summary.md (writer-b)
│   ├── 03-data-flow-mapping.md                  (writer-b)
│   └── 03-data-flow-mapping.summary.md          (writer-b)
├── 65-identity-and-authorization/
│   ├── README.md                                (writer-c)
│   ├── 01-who-is-the-agent-acting-as.md         (writer-c)
│   ├── 01-who-is-the-agent-acting-as.summary.md (writer-c)
│   ├── 02-scope-management-and-consent.md       (writer-c)
│   ├── 02-scope-management-and-consent.summary.md (writer-c)
│   ├── 03-multi-agent-trust-boundaries.md       (writer-c)
│   └── 03-multi-agent-trust-boundaries.summary.md (writer-c)
├── 66-deployment-security/
│   ├── README.md                                (writer-c)
│   ├── 01-container-hardening.md                (writer-c)
│   ├── 01-container-hardening.summary.md        (writer-c)
│   ├── 02-secrets-management-and-rotation.md    (writer-c)
│   ├── 02-secrets-management-and-rotation.summary.md (writer-c)
│   ├── 03-incident-response.md                  (writer-c)
│   └── 03-incident-response.summary.md          (writer-c)
├── 67-security-testing/
│   ├── README.md                                (writer-d)
│   ├── 01-automated-security-testing.md         (writer-d)
│   ├── 01-automated-security-testing.summary.md (writer-d)
│   ├── 02-red-teaming-methodology.md            (writer-d)
│   ├── 02-red-teaming-methodology.summary.md    (writer-d)
│   ├── 03-continuous-monitoring-and-alerting.md  (writer-d)
│   └── 03-continuous-monitoring-and-alerting.summary.md (writer-d)
└── 68-capstone/
    ├── README.md                                (writer-d)
    ├── 01-security-review-checklist.md          (writer-d)
    ├── 01-security-review-checklist.summary.md  (writer-d)
    ├── 02-present-to-a-ciso.md                  (writer-d)
    └── 02-present-to-a-ciso.summary.md          (writer-d)
```
