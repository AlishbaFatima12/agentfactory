# Part 5: Building OpenClaw Apps (TutorClaw) — Team Prompt

Create an agent team to design and write Part 5 of _The AI Agent Factory_: "Building OpenClaw Apps." Students build TutorClaw, a real AI tutoring product, component by component on the OpenClaw platform. Every chapter teaches a concept AND produces a working, eval-tested TutorClaw component.

**Source material:**

- Architecture paper: `specs/drafts/tutorclaw architecture and part 5 chapters/TutorClaw_Arch4_MCP_First_v2_final.md`
- Architecture Decisions chapter draft: `specs/drafts/tutorclaw architecture and part 5 chapters/alternative 4 - final/part5_book_chapters/Architecture_Decisions_MCP_Final.docx`
- Economics Stack chapter draft: `specs/drafts/tutorclaw architecture and part 5 chapters/alternative 4 - final/part5_book_chapters/Economics_Stack_MCP_Final.docx`
- Architecture v1 paper: `specs/drafts/tutorclaw architecture and part 5 chapters/alternative 4 - final/TutorClaw_Architecture4_OpenClaw_Native_v1.docx`

**Existing content (keep Ch 56 as-is):**

- Ch 56 (DONE): `apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/`
- Ch 57 README (outline only): `apps/learn-app/docs/05-Building-OpenClaw-Apps/57-building-openclaw-apps/README.md`

**Output directory:** `apps/learn-app/docs/05-Building-OpenClaw-Apps/`

**Reference lesson for format:** `apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/01-ai-employee-moment.md`

**Constitution:** `.specify/memory/constitution.md`

You are the team lead. You coordinate. You do NOT write content yourself. Spawn each worker below as a TEAMMATE in the agent team (not as a subagent). Use the shared task list to track all work. Enforce phase ordering: Phase 1 must complete before Phase 2 starts, Phase 2 before Phase 3, and so on.

---

## Phase 1: Architect (1 teammate)

Spawn a teammate named **architect**. Model: Opus. Mode: plan.

**Prompt:**

"You are the architect for Part 5: Building OpenClaw Apps.

Your job: design the complete chapter structure for Part 5, where students build TutorClaw (a real AI tutoring product) component by component on OpenClaw. Every chapter teaches a concept AND produces a working, eval-tested TutorClaw component.

READ IN ORDER:

1. The TutorClaw Architecture 4 paper: `specs/drafts/tutorclaw architecture and part 5 chapters/TutorClaw_Arch4_MCP_First_v2_final.md`
2. The Architecture Decisions chapter draft (use `textutil -convert txt -stdout` to read): `specs/drafts/tutorclaw architecture and part 5 chapters/alternative 4 - final/part5_book_chapters/Architecture_Decisions_MCP_Final.docx`
3. The Economics Stack chapter draft (use textutil): `specs/drafts/tutorclaw architecture and part 5 chapters/alternative 4 - final/part5_book_chapters/Economics_Stack_MCP_Final.docx`
4. Ch 57 README: `apps/learn-app/docs/05-Building-OpenClaw-Apps/57-building-openclaw-apps/README.md`
5. Ch 56 (reference for quality and format): `apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/01-ai-employee-moment.md`
6. Constitution: `.specify/memory/constitution.md`

THE TUTORCLAW PRODUCT (from Architecture 4 paper):
TutorClaw has three components:

1. MCP Server (Python MCP SDK, SSE transport) with 9 tools: register_learner, get_learner_state, get_chapter_content, get_pedagogical_guidance, submit_code, assess_progress, get_next_exercise, update_progress, get_upgrade_url
2. Cloudflare R2 + Workers: zero-egress content delivery with two-tier access (Ch 1-5 free, Ch 6-30 key-gated)
3. Shim Skill: ~50-line Markdown file with PRIMM-Lite fallback + MCP config

Plus: PostgreSQL for learner state, Docker sandbox for code execution, Stripe for monetization (free/paid/premium tiers).

Economics: $50-70/month infra, $0 LLM cost (learner's own API key), 99.5% gross margin.

DESIGN CONSTRAINTS:

- Ch 56 is DONE and stays as-is (11 lessons about using OpenClaw)
- New chapters start at Ch 57
- Each chapter must produce a WORKING component with an EVAL that proves it works
- The build is incremental: each chapter adds to the previous
- Students are coming from Part 4 (Python proficiency) and Ch 56 (OpenClaw user experience)
- Part 6 teaches agent SDKs, MCP fundamentals, databases, etc. from scratch. Part 5 can reference Part 6 for deeper dives but must be self-contained enough to build TutorClaw
- Two existing chapter drafts (Architecture Decisions, Economics Stack) should be incorporated as chapters, adapted to book format with lessons
- Everything is eval-driven: every component has automated tests

DELIVERABLES:

1. **Master Architecture Spec** at `specs/drafts/part5-architecture-spec.md`:
   - Complete chapter list (Ch 57 through Ch N) with titles and descriptions
   - Per-chapter: what TutorClaw component is built, what concept is taught, what eval proves it works
   - Directory skeleton (chapter folders, lesson files within each)
   - Build dependency chain (which chapters depend on which)
   - How the Architecture Decisions and Economics Stack drafts fit in

2. **Domain Wisdom Brief** at `specs/drafts/part5-domain-wisdom.md`:
   - Core concepts that MUST land (Platform Inversion, MCP-first architecture, IP protection via server-side, Economics of inverted models, eval-driven development)
   - Quality dimensions: technical accuracy (code must run), practical applicability (real product), economic literacy (why each decision), eval integration (every chapter tested)
   - Common pitfalls: abstractness without building, skipping evals, MCP code too complex for beginners, not connecting chapters to larger product
   - Decision framework: 'Ship a working component every chapter. If too big, split. Every component has an eval.'
   - Learning journey: from OpenClaw user (Ch 56) to OpenClaw app developer (capstone)

3. **Per-Writer Briefs** at `specs/drafts/part5-writer-brief-{name}.md`:
   - One brief per writer (expect 3 writers)
   - Exact chapter assignments, file paths, lesson counts
   - Chapter-specific quality notes
   - Exit criteria

4. **Output directory README** update at `apps/learn-app/docs/05-Building-OpenClaw-Apps/README.md`

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — [file list]'"

---

## Phase 2: Reference-Builder (1 teammate)

Spawn a teammate named **reference-builder**. Model: Opus.

**Prompt:**

"You are the reference-builder for Part 5: Building OpenClaw Apps.

Your job: produce ONE gold-standard chapter (the first programming chapter after Ch 56) that demonstrates ALL patterns: YAML frontmatter, narrative opening, code blocks with type annotations, eval sections, James/Emma dialogue, and the 'build-test-verify' rhythm that every subsequent chapter follows.

READ IN ORDER:

1. Architecture spec: `specs/drafts/part5-architecture-spec.md`
2. Domain wisdom brief: `specs/drafts/part5-domain-wisdom.md`
3. Your writer brief (for the reference chapter): `specs/drafts/part5-writer-brief-reference.md` (architect will create this)
4. Reference lesson for format: `apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/01-ai-employee-moment.md`
5. The TutorClaw Architecture 4 paper (for technical accuracy): `specs/drafts/tutorclaw architecture and part 5 chapters/TutorClaw_Arch4_MCP_First_v2_final.md`

QUALITY BAR:

- Full YAML frontmatter (skills, learning_objectives, cognitive_load, differentiation, teaching_guide)
- Narrative opening that connects to TutorClaw product vision
- Every code block: runnable Python with type annotations, passes ruff + pyright
- Every component built: has an eval (test) that proves it works
- James/Emma dialogue: James is past syntax mistakes, makes architectural/design mistakes
- No em-dashes as default punctuation (0-1 per file, use colons for definitions)
- No forbidden phrases ('simply', 'obviously', 'just remember')

WHAT MEDIOCRE LOOKS LIKE (avoid this):

- Tutorial-style 'do this, then this' without explaining WHY
- Code that works but has no eval/test to verify it
- Abstract architecture discussion without producing a working artifact
- James making syntax errors (he's a Part 5 learner, past that)

Output the gold-standard chapter to the path specified in the architecture spec.
Execute autonomously without asking for confirmation.
When finished, message the team lead: 'REFERENCE-BUILDER DONE — [file path]'"

---

## Phase 3: Writers (3 teammates, all parallel)

Spawn ALL 3 writer teammates SIMULTANEOUSLY after Phase 2 completes.

### Writer: writer-architecture

**Prompt:**

"You are writer-architecture for Part 5: Building OpenClaw Apps.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the conceptual foundation chapters of Part 5. Students have used OpenClaw (Ch 56). Now they need to understand the paradigm shift: building ON a platform is fundamentally different from building infrastructure. The Architecture Decisions chapter teaches real-world architectural reasoning through TutorClaw's six pivots. The Economics Stack teaches how inverted economics create 99.5% margins. These chapters give students the mental model before they write code.

YOUR CHAPTERS IN CONTEXT:
These are the bridge between 'I used OpenClaw' (Ch 56) and 'I'm building on OpenClaw' (the MCP/coding chapters). The reader needs to understand WHY MCP-first architecture wins before they build it. Two existing chapter drafts (Architecture Decisions, Economics Stack) provide the source material; your job is to adapt them into lesson format with proper YAML frontmatter, narrative openings, and the book's pedagogical patterns.

READ IN ORDER:

1. `specs/drafts/part5-architecture-spec.md` (chapter structure and file paths)
2. `specs/drafts/part5-domain-wisdom.md` (quality dimensions and decision framework)
3. `specs/drafts/part5-writer-brief-architecture.md` (YOUR specific chapters and notes)
4. The reference chapter produced by reference-builder (path in architecture spec)
5. The Architecture Decisions and Economics Stack docx drafts (use textutil to read)

QUALITY FRAMEWORK:

- Economic literacy: every architecture decision explained with cost/benefit numbers
- Real-world grounding: these are REAL decisions Panaversity made, not hypotheticals
- Forward connection: every concept taught here must be applied in later coding chapters

WHAT MEDIOCRE LOOKS LIKE (avoid this):

- Presenting Architecture 4 as inevitable (it was the sixth design, not the first)
- Listing costs without explaining the reasoning behind each choice
- No exercises that force students to apply the thinking to their own ideas

WHEN IN DOUBT:

- Authenticity over elegance: the six pivots included dead ends, and that's the point
- Numbers over hand-waving: always include the dollar amounts and margin percentages
- Connect every concept to a later chapter where it becomes code

YOUR SCOPE:

- Chapters assigned in your writer brief (expect 2-3 chapters covering architecture and economics)
- Create complete lesson files with full YAML frontmatter
- Match reference chapter format

RULES:

- Match the reference chapter in format, depth, and quality
- Full YAML frontmatter on every lesson file
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER ARCHITECTURE DONE — [file list]'"

### Writer: writer-mcp-build

**Prompt:**

"You are writer-mcp-build for Part 5: Building OpenClaw Apps.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the core build chapters where students construct TutorClaw's MCP server, tool by tool. This is where theory becomes code. Students build the 9 MCP tools that make TutorClaw work: registration, learner state, content delivery, pedagogical guidance, code execution, assessment, progress tracking, and monetization. Each tool is built, tested with an eval, and connected to the growing TutorClaw product. By the end of your chapters, students have a working MCP server that can tutor.

YOUR CHAPTERS IN CONTEXT:
After the architecture/economics chapters, students understand WHY they're building what they're building. Your chapters are the heart of Part 5: the hands-on coding that produces TutorClaw's brain. Students have Python proficiency (Part 4) and OpenClaw experience (Ch 56). They'll learn MCP by building MCP tools. After your chapters, the infrastructure writer adds R2, Workers, Stripe, and the shim skill.

READ IN ORDER:

1. `specs/drafts/part5-architecture-spec.md` (chapter structure and file paths)
2. `specs/drafts/part5-domain-wisdom.md` (quality dimensions and decision framework)
3. `specs/drafts/part5-writer-brief-mcp-build.md` (YOUR specific chapters and notes)
4. The reference chapter (path in architecture spec)
5. TutorClaw Architecture 4 paper, Sections 4.2 and 4.5 (MCP tool specs and implementation code): `specs/drafts/tutorclaw architecture and part 5 chapters/TutorClaw_Arch4_MCP_First_v2_final.md`

QUALITY FRAMEWORK:

- Working code: every code block must be runnable Python with type annotations
- Eval-driven: every MCP tool has a test that verifies it works (pytest)
- Incremental: each chapter adds tools to the same server, building on previous
- James's mistakes are architectural: vague tool schemas, missing input validation, no error handling on R2 calls, trusting raw learner input in system prompts

WHAT MEDIOCRE LOOKS LIKE (avoid this):

- Dumping all 9 MCP tools in one chapter (they must be built incrementally)
- Code that 'explains' MCP without producing a working tool students can test
- Skipping the eval step after each tool ('it works' is not an eval)
- MCP tool implementations that don't match the Architecture 4 paper specs

WHEN IN DOUBT:

- Build one tool per lesson, test it, move on. Simplest working version first.
- Use the Architecture 4 paper's implementation code as the target, but build toward it incrementally
- If a tool is complex (get_pedagogical_guidance, submit_code), split across two lessons

YOUR SCOPE:

- Chapters assigned in your writer brief (expect 3-5 chapters covering MCP server construction)
- Every lesson produces a working, tested MCP tool
- Match reference chapter format

RULES:

- Match the reference chapter in format, depth, and quality
- Full YAML frontmatter on every lesson file
- All Python code has full type annotations, passes ruff + pyright
- Every lesson includes an eval/test section
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER MCP-BUILD DONE — [file list]'"

### Writer: writer-infrastructure

**Prompt:**

"You are writer-infrastructure for Part 5: Building OpenClaw Apps.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the chapters that complete TutorClaw: Cloudflare R2 content delivery, Worker-based access control, the shim skill for offline fallback, Stripe monetization, PostgreSQL learner state, the code execution sandbox, and the capstone that assembles everything into a running product. These chapters turn the MCP server (built in earlier chapters) into a complete, deployable product with real economics.

YOUR CHAPTERS IN CONTEXT:
Students have built the MCP server with its 9 tools. Now they need the infrastructure those tools connect to: R2 stores the content, Workers gate access, PostgreSQL persists learner state, Docker runs code sandboxes, Stripe handles payments. The shim skill provides the offline fallback. The capstone chapter wires everything together and runs end-to-end evals. After your chapters, students have a complete TutorClaw that could serve real learners.

READ IN ORDER:

1. `specs/drafts/part5-architecture-spec.md` (chapter structure and file paths)
2. `specs/drafts/part5-domain-wisdom.md` (quality dimensions and decision framework)
3. `specs/drafts/part5-writer-brief-infrastructure.md` (YOUR specific chapters and notes)
4. The reference chapter (path in architecture spec)
5. TutorClaw Architecture 4 paper, Sections 4.3-4.4, 6, and 8 (R2, shim skill, message flow, economics): `specs/drafts/tutorclaw architecture and part 5 chapters/TutorClaw_Arch4_MCP_First_v2_final.md`

QUALITY FRAMEWORK:

- Working infrastructure: R2 uploads, Worker deploys, Stripe test mode works
- Eval-driven: content gating tested (free vs paid), Stripe webhook tested, end-to-end flow tested
- Economic awareness: students understand the cost of each component ($0 R2, $0 Workers, $10 PostgreSQL)
- Security consciousness: API key validation, tier enforcement, no IP leakage

WHAT MEDIOCRE LOOKS LIKE (avoid this):

- Describing R2/Workers/Stripe without students actually deploying them
- Capstone that just 'describes' the full system instead of running end-to-end tests
- Skipping the shim skill (it's the resilience layer that makes free tier always-on)
- No cost analysis connecting back to the Economics Stack chapter

WHEN IN DOUBT:

- Every chapter produces a deployed/running component, not just code
- The capstone must include a full end-to-end eval: simulated WhatsApp message through the entire stack
- Connect every cost to the Economics Stack chapter's numbers

YOUR SCOPE:

- Chapters assigned in your writer brief (expect 3-5 chapters covering R2, Workers, shim, Stripe, database, sandbox, capstone)
- Every lesson produces a working, tested infrastructure component
- Match reference chapter format

RULES:

- Match the reference chapter in format, depth, and quality
- Full YAML frontmatter on every lesson file
- Infrastructure code (Cloudflare Workers in JS/TS, Python for everything else)
- Every lesson includes an eval/test section
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER INFRASTRUCTURE DONE — [file list]'"

---

## Phase 4: Quality Reviewer (1 teammate)

Spawn a teammate named **quality-reviewer**. Model: Opus.

**Prompt:**

"You are the quality-reviewer for Part 5: Building OpenClaw Apps.

READ IN ORDER:

1. `specs/drafts/part5-domain-wisdom.md` (quality dimensions)
2. `specs/drafts/part5-architecture-spec.md` (expected structure)
3. The reference chapter (path in architecture spec)
4. ALL chapter outputs from all writers (paths in architecture spec)

EVALUATE against these dimensions:

1. **Eval Coverage**: Does every chapter have a test/eval that proves the component works?
2. **Incremental Build**: Does each chapter clearly build on the previous? Can a student follow the progression?
3. **Technical Accuracy**: Does the code match the Architecture 4 paper specifications? Are MCP tools correct?
4. **YAML Completeness**: Full frontmatter on every lesson (skills, learning_objectives, cognitive_load, differentiation)?
5. **Economic Thread**: Do architecture and infrastructure chapters connect to real cost numbers?
6. **Format Consistency**: Do all chapters match the reference chapter's format and depth?
7. **No Em-Dashes**: Check for em-dash overuse (max 0-1 per file)
8. **No Forbidden Phrases**: 'simply', 'obviously', 'just remember', 'don't worry about'

DELIVERABLE: Quality report at `specs/drafts/part5-quality-report.md`:

- Per-writer scores (1-10 for each dimension)
- Specific issues with file:line references
- Required fixes (blocking) vs suggested improvements (non-blocking)
- Overall assessment: PASS, PASS WITH FIXES, or FAIL

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'QUALITY-REVIEWER DONE — specs/drafts/part5-quality-report.md'"

---

## Lead Coordination Rules

1. Create the agent team, then spawn teammates for each phase
2. Create tasks with phase dependencies (Phase 1 blocks Phase 2, Phase 2 blocks Phase 3, Phase 3 blocks Phase 4)
3. Do NOT write content yourself. Coordinate only.
4. Wait for each phase to complete before spawning the next
5. After quality review, run structural verification:
   - `ls` the output directory tree
   - Compare file count against architect's skeleton
   - Spot-check YAML frontmatter from each writer
6. If quality review returns FAIL or PASS WITH FIXES, create fix tasks and assign to relevant writers
7. Shut down all teammates gracefully when done

## Anti-Patterns

- Do NOT spawn subagents. Use agent team teammates.
- Do NOT write content yourself. Delegate to teammates.
- Do NOT spawn Phase 3 before Phase 2 completes.
- Do NOT spawn quality reviewer before ALL writers complete.
- Do NOT let writers read the full Architecture 4 paper (only architect does that). Writers read their assigned sections.
- Do NOT skip the quality reviewer phase.
