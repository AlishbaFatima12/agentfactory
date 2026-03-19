# Writer Brief: Bookends (L01 + L02 + L16)

**Writer**: writer-bookends
**Lessons**: L01 (The Innovation OS), L02 (Plugin Architecture and Installation), L16 (Chapter Summary and Quick Reference)
**Total files**: 9 (3 lessons + 3 flashcards + 3 summaries)
**Exercises**: None

**Read before writing**:

1. `specs/drafts/ch40-innovation/shared-brief.md` — shared rules
2. `specs/drafts/ch40-innovation/architecture-spec.md` — master spec
3. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 1-137 (Introduction + DLA Stack + Config) and lines 1878-1950 (Summary + Quick Reference)
4. `specs/drafts/chap29_innovation/innovation-skills/README.md` — command map
5. `specs/drafts/chap29_innovation/innovation-skills/innov.local.md.template` — full template
6. `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/README.md` — reference chapter README format
7. One L01 or L02 from Ch 35 for reference format

---

## L01: The Innovation OS

**File**: `01-the-innovation-os.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/01-the-innovation-os.md`
**Duration**: 25 min
**Spec lines**: 1-137

### Content Structure

1. **Opening narrative** (2-3 paragraphs): The innovation execution gap. Great ideas die because the research, synthesis, and iteration take too long. Use the opening quote from the spec (line 4-5).

2. **The DLA Stack** (main section):
   - Design Thinking → Lean Startup → Agile
   - What each does (problem level, solution level, delivery level)
   - Why order matters (the "wrong order" failure modes from spec lines 39-41)
   - **Include the AI acceleration table** from spec lines 47-61 — this is a critical reference table

3. **AI as the DLA Accelerant**:
   - What AI does (removes execution overhead)
   - What AI does NOT do (does not make decisions, validate ideas, or judge)
   - The spec's governing principle: "AI does not tell you whether your idea is good... Those judgments remain the entrepreneur's or intrapreneur's responsibility."

4. **The Worked Example Introduction**:
   - Introduce the AP automation SaaS through-line
   - Why this example (universally recognisable, internationally portable)
   - WhatsApp as approval channel (note: substitute for your market)

5. **Intrapreneurship Context** (dedicated section):
   - Everything applies inside an organisation
   - Translation table (investors → innovation committee, etc.)
   - The additional challenge: operating within organisational constraints

6. **Try With AI** (3 prompts):
   - Reproduce: "Explain the DLA Stack and why the order matters, using a real-world example."
   - Adapt: "Apply the DLA Stack to [student's industry]. What does each stage look like for a [student's context] innovation?"
   - Apply: "I am an [entrepreneur/intrapreneur] working on [their problem]. Which DLA stage should I be in right now, and what should I do first?"

### Frontmatter Notes

- `slug: /Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/the-innovation-os`
- `sidebar_position: 1`
- `chapter: 40`, `lesson: 1`
- Skills: 2 conceptual skills (Explain the DLA Stack; Identify which DLA stage applies to a given innovation challenge)
- Bloom: Remember, Understand
- CEFR: A2
- Cognitive load: 5 concepts (DLA Stack, Design Thinking, Lean Startup, Agile, Innovation OS)

### Flashcards (10 cards)

Focus on: DLA Stack definition, what each methodology addresses (problem/solution/delivery), wrong-order failure modes, AI as accelerant (what it does/doesn't do), intrapreneurship translation terms

### Summary (200-300 words)

What: DLA Stack overview. Key takeaways: 3 methodologies in sequence, AI accelerates but doesn't decide, works for entrepreneurs and intrapreneurs. Next: Install the plugin (L02).

---

## L02: Plugin Architecture and Installation

**File**: `02-plugin-architecture-installation.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/02-plugin-architecture-installation.md`
**Duration**: 20 min
**Spec lines**: 74-137 (config section) + innovation-skills/README.md

### Content Structure

1. **Opening** (1-2 paragraphs): The plugin is your Innovation OS toolkit. 10 commands covering every DLA stage + 4 persistent agents.

2. **Plugin Architecture**:
   - Directory structure (show only what the student installs — NOT dev artifacts)
   - The 10-command map table from README.md
   - How commands map to DLA stages (the DLA flow diagram from README)

3. **Installation**:
   - Follow Ch 35 L02 pattern exactly
   - Cowork sidebar: Customize → Browse plugins → Personal → + → Add marketplace from GitHub → `https://github.com/panaversity/agentfactory-business-plugins` → find **Innovation** → Install
   - Verify installation: "Tell me about the innovation plugin. What commands are available?"

4. **The innov.local.md Template**:
   - What it is (venture context configuration)
   - Why it matters (makes every output specific to YOUR venture)
   - Walk through the sections: venture, key_assumptions, customer_profiles, business_model_canvas, financial_model, competitive_landscape, fundraising, intrapreneurship
   - **Do NOT fill it in yet** — that is L15 (capstone). For now, copy the template and understand the structure.
   - Note: if you already have a venture in mind, you can start filling in the `venture:` section

5. **Try With AI** (3 prompts):
   - Reproduce: "List all 10 innovation plugin commands and briefly describe what each one does."
   - Adapt: "Which innovation plugin commands would I use most at the [IDEA / DISCOVERY / VALIDATION] stage?"
   - Apply: "I am starting a [their venture type]. Set up my innov.local.md venture section with my project: [their description]."

### Frontmatter Notes

- `slug: /Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/plugin-architecture-installation`
- `sidebar_position: 2`
- `chapter: 40`, `lesson: 2`
- Skills: 2 technical skills (Install and verify the innovation plugin; Navigate the innov.local.md template structure)
- Bloom: Apply
- CEFR: A2
- Cognitive load: 3 concepts (plugin structure, 10-command map, innov.local.md template)

### Flashcards (10 cards)

Focus on: What each of the 10 commands does, DLA stage mapping, innov.local.md purpose, what "stage-aware" means

### Summary

What: Plugin installed, commands mapped, template understood. Next: First skill usage — customer discovery (L03).

---

## L16: Chapter Summary and Quick Reference

**File**: `16-chapter-summary-quick-reference.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/16-chapter-summary-quick-reference.md`
**Duration**: 15 min
**Spec lines**: 1878-1950

### Content Structure

1. **The Central Insight** (from spec lines 1878-1913):
   - Reproduce the spec's summary text nearly verbatim — it is well-written
   - Key message: AI compresses the innovation cycle without replacing the entrepreneur's judgment

2. **What This Chapter Built** (14-item list from spec lines 1892-1905):
   - DLA Stack, customer discovery, assumption map, MVP scoping, BML analysis, BMC, unit economics, financial modelling, pitch deck narrative, competitive intelligence, GTM strategy, 4 innovation agents, 8 exercises, innov.local.md

3. **For Intrapreneurs Specifically** (from spec lines 1907-1911):
   - Same tools, different audience (innovation committee instead of investors)

4. **Key Frameworks Table** (from spec lines 1925-1929):
   | Framework | Stage | Core Question |
   |---|---|---|
   | Design Thinking | Problem discovery | What is the real problem worth solving? |
   | Lean Startup | Solution validation | Is this the right solution? |
   | Agile | Delivery | How do we build this effectively? |

5. **Key Canvas Tools Table** (from spec lines 1933-1939)

6. **Command Quick Reference** (all 10 commands with one-line descriptions)

7. **Agent Quick Reference** (all 4 agents with weekly/on-demand tasks)

8. **Key References Table** (from spec lines 1943-1949) — WebSearch-verify all URLs before publishing

9. **Closing quote** from spec line 1913

### Frontmatter Notes

- `slug: /Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/chapter-summary-quick-reference`
- `sidebar_position: 16`
- `chapter: 40`, `lesson: 16`
- Skills: None (reference material)
- Bloom: Remember
- CEFR: A2
- Cognitive load: 0 new concepts

### Flashcards (12 cards)

Focus on: DLA Stack recap, all 10 commands, all 4 agents, key distinction (AI accelerates execution, does not replace judgment)

### Summary

What: Complete reference for Chapter 40. Key takeaways: DLA Stack, 10 commands, 4 agents, innov.local.md.

---

## Exit Criteria

- [ ] L01 introduces the DLA Stack with the AI acceleration table
- [ ] L02 installs the plugin and walks through innov.local.md (without filling it in)
- [ ] L16 reproduces the spec's summary, includes all reference tables, all URLs verified
- [ ] All 9 files written (3 lessons + 3 flashcards + 3 summaries)
- [ ] No `import` statements for non-existent components
- [ ] "Cowork" terminology throughout (never "Claude in Excel")
- [ ] Full YAML frontmatter on all 3 lessons
