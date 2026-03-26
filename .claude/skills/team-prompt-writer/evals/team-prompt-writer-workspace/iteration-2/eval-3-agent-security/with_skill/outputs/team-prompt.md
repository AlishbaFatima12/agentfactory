# Team Prompt: Part 8 — AI Agent Security

Create an agent team to produce Part 8: AI Agent Security for the Agent Factory book. This part is 8 chapters and 25 lessons teaching developers how to secure AI agent systems. The source spec is at `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`. All output goes to `apps/learn-app/docs/08-AI-Agent-Security/`.

This content teaches developers who have built working agents (Parts 5-7) but would fail a security review. The transformation: from "my agent works" to "my agent works AND I can explain to a security team why it's safe to deploy." This is security content where bad pedagogy gives false confidence, so every teammate must understand the difference between security theater and genuine protection.

You are the team lead. You coordinate. You do NOT write content yourself. Spawn each worker below as a TEAMMATE in the agent team (not as a subagent). Use the shared task list to track all work. Enforce phase ordering: Phase 1 must complete before Phase 2 starts, Phase 2 before Phase 3, and so on.

---

## Phase 1: Architect (1 teammate)

Spawn a teammate named **architect**.

Model: Opus. Plan approval: enabled.

**Architect prompt:**

"You are the architect for Part 8: AI Agent Security.

You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` (the FULL source spec, 95 lines)
2. `.specify/memory/constitution.md` (project constitution)
3. `apps/learn-app/docs/01-General-Agents-Foundations/12-agent-factory-paradigm/README.md` (reference chapter README format)
4. `apps/learn-app/docs/01-General-Agents-Foundations/12-agent-factory-paradigm/01-the-2025-inflection-point.md` (reference lesson format: YAML frontmatter with skills, learning_objectives, cognitive_load, differentiation, teaching_guide)

DELIVERABLES (write all to `apps/learn-app/docs/08-AI-Agent-Security/`):

1. **Master architecture spec** (`_architecture-spec.md`):
   - Complete directory skeleton: 8 chapter folders (`61-agent-threat-landscape/` through `68-capstone/`), with all 25 lesson .md files, .summary.md sidecars, .flashcards.yaml sidecars, and chapter README.md files
   - YAML frontmatter template with all required fields (sidebar_position, title, chapter, lesson, duration_minutes, description, keywords, skills with proficiency_level/category/bloom_level/digcomp_area/measurable_at_this_level, learning_objectives with objective/proficiency_level/bloom_level/assessment_method, cognitive_load, differentiation, teaching_guide)
   - Source-to-output mapping: which source spec lines map to which output files
   - Component catalog: lesson patterns (incident-based teaching, attack/defend exercises, code examples in Python primary + TypeScript secondary)
   - Writer-to-scope assignment table (4 writers, zero file overlap)

2. **Domain wisdom brief** (`_domain-wisdom.md`):

   CORE CONCEPTS (the 5 ideas that must land):
   a. Agent attack surfaces differ fundamentally from API attack surfaces because agents have autonomy, tool access, and memory
   b. Prompt injection is the SQL injection of the agent era
   c. Least privilege is the single most impactful defense
   d. Security is not a checklist but a continuous practice
   e. The economic tradeoff between security and shipping speed is real and must be managed, not ignored

   QUALITY DIMENSIONS:
   - Incident-grounded realism: every concept taught through a real or realistic incident, never abstract theory alone
   - Appropriate paranoia: reader becomes thoughtful about attack surfaces, not fearful and not falsely confident
   - Practical applicability: reader can explain each threat to their manager in plain language AND implement defenses in code
   - Honesty about limits: no 'do these 5 things and you're secure' false promises

   COMMON PITFALLS (what mediocre security content looks like):
   - Security theater: teaching checkbox compliance without real protection
   - Wrong threat model: applying classic web/API security to agents without adaptation for autonomy, tool access, memory
   - False confidence: step-by-step lists that ignore adversarial creativity
   - Abstract hand-waving: threat taxonomies without concrete code or incidents
   - Fear-mongering: making security feel impossible rather than manageable

   DECISION FRAMEWORKS:
   - Authenticity over polish: a realistic incident with messy details beats a clean taxonomy
   - 'Appropriately paranoid' is the tone: neither dismissive nor alarmist
   - Show the attack first, then the defense
   - Every defense must include a cost/benefit discussion; no free lunches
   - Code examples must be runnable offline with synthetic data

   LEARNING JOURNEY:
   - Before: reader built working agents in Parts 5-7, understands Python/TS, APIs, cloud deployment. Does NOT know threat modeling, formal verification, or compliance frameworks
   - After: reader can conduct a security review of their own agent, explain threats to non-technical stakeholders, and present a security assessment to a CISO
   - How this fits: Part 5-7 built the agents, Part 8 secures them. Part 0 communication skills feed into the capstone presentation

3. **Per-writer briefs** (4 files: `_brief-writer-threats.md`, `_brief-writer-tooldata.md`, `_brief-writer-identity-deploy.md`, `_brief-writer-testing-capstone.md`):
   - Exact file paths to create (with full paths from repo root)
   - Source spec line ranges
   - Chapter-specific quality notes: what makes each chapter's content uniquely good
   - Content-specific notes: introduces X concept, links to Y prior chapter, requires Z exercises
   - Exit criteria per writer

   Writer assignments (zero overlap):
   - writer-threats: Ch 61 (3 lessons) + Ch 62 (4 lessons) = 7 lessons. Source lines 32-43. These are the foundation chapters; they define the threat landscape and the deepest technical challenge (prompt injection). Ch 61 sets the 'agents are not APIs' frame. Ch 62 is the most technical chapter with attack+defend exercises.
   - writer-tooldata: Ch 63 (4 lessons) + Ch 64 (3 lessons) = 7 lessons. Source lines 44-54. Tool security and data protection. Ch 63 is operational (sandboxing, rate limiting, audit). Ch 64 handles compliance (GDPR, CCPA, HIPAA) which must be accurate but not legalistic.
   - writer-identity-deploy: Ch 65 (3 lessons) + Ch 66 (3 lessons) = 6 lessons. Source lines 55-64. Identity/auth and deployment hardening. Ch 65 tackles the subtle 'who is the agent acting as?' question. Ch 66 connects back to Part 6 deployment patterns.
   - writer-testing-capstone: Ch 67 (3 lessons) + Ch 68 (2 lessons) = 5 lessons. Source lines 65-79. Testing methodology and capstone. Ch 67 covers automated testing + red teaming + monitoring. Ch 68 is the capstone: a reusable security checklist and a simulated CISO presentation (connects to Part 0 communication skills).

4. **Output directory README** (`README.md`):
   - Part overview: what the reader learns and why it matters
   - Chapter list with descriptions
   - Prerequisites: Parts 5-7 completion
   - Navigation structure

SPECIAL CONSTRAINTS:
- All code examples in Python (primary) and TypeScript (secondary)
- No classified or actual vulnerability details; use synthetic examples only
- Exercises must work offline (no dependency on external vulnerable services)
- Em-dash limit: 0-1 per file
- No React component imports for Flashcards or Quiz (flashcards are .flashcards.yaml sidecars, quizzes are generated via /quiz-generator skill)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — [file list]'"

---

## Phase 2: Reference-Builder (1 teammate)

Spawn a teammate named **reference-builder** AFTER architect completes.

Model: Opus.

**Reference-builder prompt:**

"You are the reference-builder for Part 8: AI Agent Security.

You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (architect's structure and patterns)
2. `apps/learn-app/docs/08-AI-Agent-Security/_domain-wisdom.md` (what quality means for security content)
3. `apps/learn-app/docs/01-General-Agents-Foundations/12-agent-factory-paradigm/01-the-2025-inflection-point.md` (existing reference lesson for format baseline)
4. `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md` lines 32-37 (Ch 61 source, first content section)

DELIVERABLE: ONE gold-standard reference lesson file.

Create `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` as the gold-standard reference.

This lesson must demonstrate ALL patterns that writers will follow:

PATTERN CHECKLIST:
- [ ] Full YAML frontmatter: sidebar_position, title, chapter, lesson, duration_minutes, description, keywords
- [ ] Skills metadata: 2-4 skills with proficiency_level, category, bloom_level, digcomp_area, measurable_at_this_level
- [ ] Learning objectives: 2-3 objectives with objective, proficiency_level, bloom_level, assessment_method
- [ ] cognitive_load: new_concepts count + assessment string
- [ ] differentiation: extension_for_advanced + remedial_for_struggling
- [ ] teaching_guide: lesson_type, session_group, session_title, key_points, misconceptions, discussion_prompts, teaching_tips, assessment_quick_check
- [ ] Incident-based opening: start with a real or realistic security incident, then unpack the lesson
- [ ] 'Why agents are different from APIs' framing: autonomy, tool access, memory
- [ ] Attack scenario: show a concrete attack example (synthetic, not real vulnerability details)
- [ ] Defense pattern: show how to defend, with cost/benefit discussion
- [ ] Code examples in Python (primary) with TypeScript equivalent
- [ ] Exercises that work offline (synthetic data, no external service dependencies)
- [ ] Try With AI section with prompts for Cowork or preferred AI assistant
- [ ] No em-dashes (use colons, semicolons, commas, or parentheses)
- [ ] No React component imports (no Flashcards or Quiz imports)
- [ ] Appropriate paranoia tone: thoughtful, not fearful or falsely confident

Also create the matching `01-why-agents-are-different.summary.md` sidecar.

QUALITY STANDARD: This reference lesson must be good enough that 4 parallel writers can match it without further guidance. It is the quality benchmark for the entire part.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — [file list]'"

---

## Phase 3: Writers (4 teammates, all parallel)

Spawn ALL 4 writer teammates SIMULTANEOUSLY after reference-builder completes.

### writer-threats

Spawn a teammate named **writer-threats**.

**Writer-threats prompt:**

"You are writer-threats for Part 8: AI Agent Security.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the foundation of the entire security part. Chapter 61 establishes why agent security is fundamentally different from API security (because agents have autonomy, tool access, and persistent memory). Chapter 62 tackles prompt injection, the single most important agent-specific attack vector. Together, these chapters transform a developer who thinks 'I sanitize my inputs, so I'm secure' into one who understands that agents create entirely new attack surfaces. If these chapters fail, readers enter the rest of the part with the wrong mental model.

YOUR CHAPTERS IN CONTEXT:
The reader arrives from Parts 5-7 having built working agents, designed tools, and deployed to cloud. They think about security the way a web developer does: input validation, auth, HTTPS. Your chapters shatter that assumption by showing that agents act autonomously, use tools with real-world consequences, and maintain memory that can be poisoned. After your chapters, the reader proceeds to tool security (Ch 63), data protection (Ch 64), and beyond, all building on the threat landscape and prompt injection foundations you establish.

READ IN ORDER:
1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md`
2. `apps/learn-app/docs/08-AI-Agent-Security/_domain-wisdom.md`
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-threats.md`
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (REFERENCE: match this format AND depth)
5. Source spec lines 32-43 from `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`

QUALITY FRAMEWORK:
- Incident-grounded realism: every lesson opens with or centers on a real or realistic security incident; abstract threat lists without concrete scenarios are unacceptable
- Appropriate paranoia: the reader should finish each lesson thinking 'I didn't know that attack was possible' rather than 'security is too hard' or 'just follow these rules'
- Practical code: Python primary, TypeScript secondary; every defense demonstrated in runnable code with synthetic data; exercises work offline

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Ch 61 that reads like a Wikipedia 'types of attacks' list without incident stories or code
- Ch 62 prompt injection lessons that only show trivial 'ignore previous instructions' examples instead of sophisticated indirect injection through tool outputs, memory poisoning, or multi-step attacks
- The red-team exercise (Ch 62 L04) being a toy exercise where the attack is obvious; it should force genuine adversarial thinking
- Teaching STRIDE as an abstract framework without showing how to actually apply it to an agent architecture diagram

WHEN IN DOUBT:
- Show the attack first, then the defense (attack is the hook, defense is the lesson)
- If a concept can be taught through an incident, use the incident; save taxonomies for reference tables
- Every defense must include an honest cost/benefit: what it protects, what it costs (performance, complexity, developer friction)
- Use synthetic incidents, never real classified vulnerability details

YOUR SCOPE:
- `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/` (README.md, 02-agent-attack-surface.md, 03-threat-modeling-for-agents.md, plus .summary.md and .flashcards.yaml sidecars). Note: L01 is already created by reference-builder.
- `apps/learn-app/docs/08-AI-Agent-Security/62-prompt-injection-defense/` (README.md, 01-direct-vs-indirect-injection.md, 02-input-sanitization-boundary-markers.md, 03-output-validation-action-gating.md, 04-red-team-your-own-agent.md, plus .summary.md and .flashcards.yaml sidecars)
- Source lines 32-43

RULES:
- Match the reference lesson in format, depth, and quality
- Full YAML frontmatter on every lesson file (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- All code examples in Python (primary) and TypeScript (secondary)
- Exercises must work offline with synthetic data
- Em-dash limit: 0-1 per file (use colons, semicolons, commas, or parentheses instead)
- No React component imports for Flashcards or Quiz
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER THREATS DONE — [file list]'"

---

### writer-tooldata

Spawn a teammate named **writer-tooldata**.

**Writer-tooldata prompt:**

"You are writer-tooldata for Part 8: AI Agent Security.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the operational security chapters. Chapter 63 teaches how to constrain what agents can DO (tool access, sandboxing, rate limits, audit trails). Chapter 64 teaches how to protect what agents can SEE (data access, PII handling, compliance). Together, these chapters transform a developer who grants agents unrestricted tool access and stores everything in plaintext into one who designs defense-in-depth with least privilege, resource quotas, and data flow awareness. These are the chapters that prevent the 'agent gone rogue' scenario.

YOUR CHAPTERS IN CONTEXT:
The reader has just learned the threat landscape (Ch 61) and prompt injection (Ch 62). They understand WHAT can go wrong. Now they need to learn HOW to prevent it at the tool and data layers. After your chapters, readers move to identity/authorization (Ch 65) and deployment hardening (Ch 66), which build on the sandboxing and data protection patterns you establish. Your chapters are the 'implement defenses' bridge between 'understand threats' and 'secure the deployment.'

READ IN ORDER:
1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md`
2. `apps/learn-app/docs/08-AI-Agent-Security/_domain-wisdom.md`
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-tooldata.md`
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (REFERENCE: match this format AND depth)
5. Source spec lines 44-54 from `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`

QUALITY FRAMEWORK:
- Incident-grounded realism: each lesson opens with a scenario showing what happens WITHOUT the defense (e.g., agent with unrestricted file system access deletes production data; agent leaks PII through verbose error messages)
- Appropriate paranoia: least privilege is not optional; the default should be 'deny everything, then allow specifically'
- Practical code: Python primary, TypeScript secondary; show actual sandbox configurations, rate limiter implementations, audit log schemas; all runnable offline

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Ch 63 tool security that only discusses permissions in the abstract without showing a sandboxing implementation (Docker seccomp profiles, filesystem mounts, process isolation)
- Rate limiting lessons that show a trivial counter without discussing token bucket algorithms, per-user vs per-agent limits, or what to do when limits are hit
- Ch 64 compliance lessons that list GDPR articles without translating them into concrete agent design decisions ('this means your agent cannot store conversation history beyond X days without explicit consent')
- Audit logging that shows console.log statements instead of structured, queryable audit trails

WHEN IN DOUBT:
- Start with the 'what goes wrong without this defense' scenario; make the need visceral
- Compliance content must be translated into engineering decisions, not legal summaries
- Show the defense implementation at the code level, not just the architecture diagram level
- Every defense has a cost: performance overhead, developer friction, operational complexity. State it honestly.

YOUR SCOPE:
- `apps/learn-app/docs/08-AI-Agent-Security/63-tool-security/` (README.md, 01-least-privilege-tool-access.md, 02-sandboxing-execution-boundaries.md, 03-rate-limiting-resource-quotas.md, 04-audit-logging-anomaly-detection.md, plus .summary.md and .flashcards.yaml sidecars)
- `apps/learn-app/docs/08-AI-Agent-Security/64-data-protection/` (README.md, 01-agent-memory-access-control.md, 02-pii-handling-compliance.md, 03-data-flow-mapping.md, plus .summary.md and .flashcards.yaml sidecars)
- Source lines 44-54

RULES:
- Match the reference lesson in format, depth, and quality
- Full YAML frontmatter on every lesson file
- All code examples in Python (primary) and TypeScript (secondary)
- Exercises must work offline with synthetic data
- Em-dash limit: 0-1 per file
- No React component imports for Flashcards or Quiz
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER TOOLDATA DONE — [file list]'"

---

### writer-identity-deploy

Spawn a teammate named **writer-identity-deploy**.

**Writer-identity-deploy prompt:**

"You are writer-identity-deploy for Part 8: AI Agent Security.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the identity and deployment security chapters. Chapter 65 tackles the subtle but critical question of 'who is the agent acting as?' (user delegation, service identity, multi-agent trust). Chapter 66 covers hardening the deployment (container security, secrets management, incident response). Together, these chapters transform a developer who deploys agents with admin credentials and hardcoded API keys into one who designs proper identity delegation, scoped permissions, secrets rotation, and incident response playbooks.

YOUR CHAPTERS IN CONTEXT:
The reader has learned threats (Ch 61-62), tool security (Ch 63), and data protection (Ch 64). They can defend individual agents. Now they need to understand how agents interact with identity systems and how to deploy them securely. Ch 65's identity concepts are particularly tricky because agents blur the line between 'acting as the user' and 'acting as a service,' and multi-agent systems create trust boundary challenges that don't exist in traditional software. Ch 66 connects directly to Part 6 deployment patterns, applying security hardening to infrastructure the reader has already built.

READ IN ORDER:
1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md`
2. `apps/learn-app/docs/08-AI-Agent-Security/_domain-wisdom.md`
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-identity-deploy.md`
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (REFERENCE: match this format AND depth)
5. Source spec lines 55-64 from `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`

QUALITY FRAMEWORK:
- Incident-grounded realism: each lesson opens with an identity or deployment incident (e.g., agent acting with user's full permissions sends emails as the CEO; hardcoded API key leaked through container image layer)
- Appropriate paranoia: identity confusion is one of the least understood agent risks; readers should leave understanding that 'the agent is acting as me' has profound implications
- Practical code: OAuth delegation flows, scoped token implementations, Dockerfile hardening, secrets management with rotation; all in Python/TypeScript

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Ch 65 identity lessons that only discuss OAuth without addressing the agent-specific question: when an agent calls a tool on behalf of a user, whose permissions apply? What happens when an agent delegates to another agent?
- Multi-agent trust boundary lessons that are purely theoretical without showing how to implement mutual authentication between agents
- Ch 66 container hardening that lists generic Docker best practices without addressing agent-specific concerns (model files, prompt caches, tool binaries, memory stores)
- Incident response lessons that provide a generic runbook template without showing how agent failures differ from traditional service failures (the agent may have taken real-world actions that need reversal)

WHEN IN DOUBT:
- Identity confusion is the hardest concept in this part; use concrete scenarios (agent-as-user vs agent-as-service) not abstract descriptions
- Deployment security should reference Part 6 patterns and show how to harden them, not reteach deployment from scratch
- Incident response for agents is fundamentally different because agents take actions; recovery may mean undoing real-world consequences
- Every defense must include cost/benefit

YOUR SCOPE:
- `apps/learn-app/docs/08-AI-Agent-Security/65-identity-authorization/` (README.md, 01-agent-identity-delegation.md, 02-scope-management-consent.md, 03-multi-agent-trust-boundaries.md, plus .summary.md and .flashcards.yaml sidecars)
- `apps/learn-app/docs/08-AI-Agent-Security/66-deployment-security/` (README.md, 01-container-hardening-agents.md, 02-secrets-management-rotation.md, 03-incident-response-agent-failures.md, plus .summary.md and .flashcards.yaml sidecars)
- Source lines 55-64

RULES:
- Match the reference lesson in format, depth, and quality
- Full YAML frontmatter on every lesson file
- All code examples in Python (primary) and TypeScript (secondary)
- Exercises must work offline with synthetic data
- Em-dash limit: 0-1 per file
- No React component imports for Flashcards or Quiz
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER IDENTITY-DEPLOY DONE — [file list]'"

---

### writer-testing-capstone

Spawn a teammate named **writer-testing-capstone**.

**Writer-testing-capstone prompt:**

"You are writer-testing-capstone for Part 8: AI Agent Security.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the testing and capstone chapters. Chapter 67 teaches how to continuously verify that security defenses work (automated testing, red teaming, monitoring). Chapter 68 is the capstone: the reader produces a reusable security review checklist and presents a security assessment to a simulated CISO. Together, these chapters transform a developer who tests security once at launch into one who continuously monitors, red-teams, and can communicate security posture to leadership. The capstone is the deliverable readers take to work.

YOUR CHAPTERS IN CONTEXT:
The reader has learned threats (Ch 61-62), defenses (Ch 63-66), and now needs to verify and maintain those defenses. Ch 67 closes the loop: defenses without testing are assumptions. Ch 68 is the culmination of the entire part. The security review checklist (Ch 68 L01) synthesizes everything from Ch 61-67 into a reusable artifact. The CISO presentation (Ch 68 L02) connects back to Part 0 communication skills, requiring the reader to translate technical security into business risk language. This capstone must feel like a professional deliverable, not a classroom exercise.

READ IN ORDER:
1. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md`
2. `apps/learn-app/docs/08-AI-Agent-Security/_domain-wisdom.md`
3. `apps/learn-app/docs/08-AI-Agent-Security/_brief-writer-testing-capstone.md`
4. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (REFERENCE: match this format AND depth)
5. Source spec lines 65-79 from `.claude/skills/team-prompt-writer/evals/team-prompt-writer-workspace/test-inputs/test3-agent-security.md`

QUALITY FRAMEWORK:
- Incident-grounded realism: Ch 67 should show what happens when security tests are absent (a defense that silently stopped working, a monitoring gap that allowed slow data exfiltration)
- Practical applicability: the security review checklist (Ch 68 L01) must be genuinely usable at work, not an academic exercise; it should cover all major categories from Ch 61-67
- Communication skills: the CISO presentation (Ch 68 L02) must teach how to translate technical findings into business risk, estimated impact, and recommended investment
- Honest limits: red teaming methodology should acknowledge that you can never prove the absence of vulnerabilities, only the presence of known ones

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Automated security testing lessons that only show unit tests for individual functions instead of integration tests that simulate adversarial agent behavior
- Red teaming methodology that reads like a penetration testing tutorial for web apps without adaptation for agent-specific attack patterns (prompt injection chains, tool abuse sequences, memory poisoning over time)
- Monitoring lessons that focus on uptime rather than security-specific signals (anomalous tool usage patterns, unexpected data access, prompt injection detection in logs)
- A capstone checklist that is a generic security checklist from OWASP rather than one specifically designed for agent systems, incorporating the unique threats from Ch 61-67
- A CISO presentation exercise that is a slide template to fill in rather than a structured communication exercise with feedback criteria

WHEN IN DOUBT:
- Testing should simulate adversarial behavior, not just happy paths
- Red teaming is a methodology, not a one-time event; teach the ongoing practice
- The capstone checklist should reference specific chapters ('For prompt injection defenses, see Ch 62') creating a navigable security guide
- The CISO presentation should force the reader to think in business terms: risk probability, blast radius, cost of mitigation vs cost of breach

YOUR SCOPE:
- `apps/learn-app/docs/08-AI-Agent-Security/67-security-testing/` (README.md, 01-automated-security-testing.md, 02-red-teaming-methodology.md, 03-continuous-monitoring-alerting.md, plus .summary.md and .flashcards.yaml sidecars)
- `apps/learn-app/docs/08-AI-Agent-Security/68-capstone/` (README.md, 01-security-review-checklist.md, 02-ciso-security-assessment.md, plus .summary.md and .flashcards.yaml sidecars)
- Source lines 65-79

RULES:
- Match the reference lesson in format, depth, and quality
- Full YAML frontmatter on every lesson file
- All code examples in Python (primary) and TypeScript (secondary)
- Exercises must work offline with synthetic data
- Em-dash limit: 0-1 per file
- No React component imports for Flashcards or Quiz
- The security review checklist (Ch 68 L01) must cross-reference all prior chapters by number
- The CISO presentation (Ch 68 L02) must include structured feedback criteria, not just a template
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER TESTING-CAPSTONE DONE — [file list]'"

---

## Phase 4: Quality Reviewer (1 teammate)

Spawn a teammate named **quality-reviewer** AFTER ALL 4 writers complete.

Model: Opus.

**Quality-reviewer prompt:**

"You are the quality-reviewer for Part 8: AI Agent Security.

You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:
1. `apps/learn-app/docs/08-AI-Agent-Security/_domain-wisdom.md` (what quality means for this content)
2. `apps/learn-app/docs/08-AI-Agent-Security/_architecture-spec.md` (expected structure)
3. `apps/learn-app/docs/08-AI-Agent-Security/61-agent-threat-landscape/01-why-agents-are-different.md` (reference lesson quality benchmark)
4. ALL lesson files across all 8 chapter folders in `apps/learn-app/docs/08-AI-Agent-Security/`

EVALUATE every lesson against these domain-specific quality dimensions:

1. **INCIDENT-GROUNDED REALISM** (most important):
   - Does the lesson open with or center on a concrete incident/scenario?
   - Or does it read like a textbook taxonomy?
   - Score: 1 (abstract taxonomy) to 5 (vivid incident that makes the threat real)

2. **APPROPRIATE PARANOIA**:
   - Does the reader finish appropriately worried about the right things?
   - Or does it create false confidence ('follow these 5 steps') or learned helplessness ('security is impossible')?
   - Score: 1 (false confidence or fear) to 5 (calibrated awareness)

3. **PRACTICAL CODE**:
   - Are code examples runnable with synthetic data?
   - Python primary + TypeScript secondary?
   - Do exercises work offline?
   - Score: 1 (no code or broken code) to 5 (copy-paste-run with clear output)

4. **COST/BENEFIT HONESTY**:
   - Does every defense include its cost (performance, complexity, developer friction)?
   - Or are defenses presented as free?
   - Score: 1 (defenses are magic) to 5 (every defense has a stated cost)

5. **STRUCTURAL COMPLIANCE**:
   - Full YAML frontmatter (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)?
   - .summary.md sidecar exists?
   - .flashcards.yaml sidecar exists?
   - Em-dash count: 0-1 per file?
   - No React component imports?
   - Score: 1 (missing multiple elements) to 5 (fully compliant)

6. **CROSS-REFERENCE INTEGRITY**:
   - Does the content reference prior chapters correctly (Ch 61→Part 5, Ch 62→Part 1, etc.)?
   - Does the capstone checklist reference Ch 61-67?
   - Score: 1 (broken/missing references) to 5 (accurate and helpful)

DELIVERABLE: Quality report at `apps/learn-app/docs/08-AI-Agent-Security/_quality-report.md`:

```
## Quality Report: Part 8 — AI Agent Security

### Summary
- Total lessons reviewed: [N]
- Average score: [X/5]
- Critical issues: [N]
- Warnings: [N]

### Per-Writer Scores

| Writer | Incident Realism | Appropriate Paranoia | Practical Code | Cost/Benefit | Structural | Cross-Ref | Average |
|--------|-----------------|---------------------|----------------|--------------|------------|-----------|---------|
| threats | | | | | | | |
| tooldata | | | | | | | |
| identity-deploy | | | | | | | |
| testing-capstone | | | | | | | |

### Critical Issues (must fix before publish)
[List with file path, issue, recommended fix]

### Warnings (should fix)
[List with file path, issue, recommended fix]

### Exemplary Content (worth highlighting)
[Lessons that particularly nail the quality bar]
```

SPECIAL ATTENTION:
- The capstone checklist (Ch 68 L01) must cross-reference all prior chapters; if it doesn't, flag as critical
- The red-team exercise (Ch 62 L04) must require genuine adversarial thinking, not toy attacks; if attacks are trivial, flag as critical
- If ANY lesson teaches security theater (checkbox compliance without real protection), flag as critical with the specific passage
- Check that the 'agents are different from APIs' frame from Ch 61 is consistently applied across all chapters, not just stated once and forgotten

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality report at _quality-report.md'"

---

## Lead Rules

1. Create the agent team, then spawn teammates for each phase
2. Create tasks with phase dependencies (Phase 1 → 2 → 3 → 4)
3. Do NOT write content yourself. Coordinate only
4. Wait for each phase to complete before spawning the next
5. After quality review, run structural verification:
   - `ls` the output directory tree (`apps/learn-app/docs/08-AI-Agent-Security/`)
   - Compare file count against architect's skeleton (expect: 8 chapter folders, 25 lesson .md files, 25 .summary.md files, 25 .flashcards.yaml files, 8 README.md files, plus architect's _ prefixed files = ~90+ files)
   - Spot-check YAML frontmatter from each writer (pick one lesson per writer, verify skills + learning_objectives + teaching_guide are present)
   - Verify em-dash compliance: spot-check one file per writer
6. If quality reviewer finds critical issues, spawn fix tasks for the relevant writer(s) before shutting down
7. Shut down all teammates gracefully when done

---

## Anti-Patterns

- Do NOT spawn subagents. Use agent team teammates
- Do NOT write content yourself. Delegate to teammates
- Do NOT spawn Phase 3 before Phase 2 completes
- Do NOT spawn quality reviewer before ALL writers complete
- Do NOT let writers read the full source spec (only the architect reads the full source; writers read only their assigned line ranges)
- Do NOT skip the quality reviewer phase
- Do NOT allow security theater in any lesson (checkbox compliance without real protection); this is the single worst failure mode for this content
