# Chapter 40: Shared Writer's Brief

**All writers must read this document before starting any lesson.**

---

## 1. Content Identity

### Who This Chapter Is For

- **Entrepreneurs** building new ventures (startups, side projects)
- **Intrapreneurs** innovating within existing organisations (new product lines, internal tools, process improvements)
- Students have completed Parts 0-2 (thinking, foundations, workflow primitives) and at least some of Part 3 (business domain agents). They understand how Cowork plugins work and have used skills in prior chapters.

### Tone

- **Practical business methodology, not academic**. This is not a textbook on innovation theory — it is a hands-on workshop that happens to teach theory through application.
- Use the AP automation worked example to make every concept concrete before generalising.
- Write as a practitioner who has done this, not a professor who has studied it.
- Honest about what AI can and cannot do: "AI does not validate your idea for you. It removes the execution overhead."

### The Central Claim

> The goal of innovation is not to have a great idea. It is to convert uncertainty into validated opportunity faster than the competition. AI compresses the execution cycle by an order of magnitude without replacing the entrepreneur's judgment.

---

## 2. The DLA Stack Progression

The chapter is structured around three methodologies applied in sequence:

```
DESIGN THINKING ───► LEAN STARTUP ───► AGILE
  (L03, L04)          (L05, L06, L07)   (L13)
  Problem level        Solution level     Delivery level
```

**Cross-cutting tools** (L08-L12) can be applied at any stage but are most powerful after discovery and validation data exists.

### Why Lesson Ordering Matters

- **Discovery (L03) before Ideation (L04)**: You cannot generate good ideas without understanding the problem. The spec is explicit: "Jumping straight to Agile without Design Thinking produces well-executed solutions to the wrong problem."
- **Assumptions (L05) before MVP (L06)**: You cannot scope a minimum viable product without knowing what assumptions you are testing.
- **Market (L10) before GTM (L11) before Pitch (L12)**: Market sizing feeds the TAM/SAM/SOM slide; GTM feeds the traction narrative; both are prerequisites for a credible pitch.

Writers must reinforce these dependencies in their lesson transitions: "In Lesson 3, you defined the problem. Now you generate solutions to that problem."

---

## 3. The AP Automation Worked Example

The entire chapter uses a **B2B SaaS product for accounts payable (AP) automation** targeting CFOs of mid-market companies ($5M-$50M revenue). Key characteristics:

- **Invoice receipt** via email + WhatsApp
- **AI-powered PO matching** at 91% accuracy
- **WhatsApp-based approval workflow** (building with existing behaviour)
- **Real-time AP dashboard**
- **Pricing**: $500/month (mid-market), $350/month (SME tier)
- **3 paying pilots**, 6 LOIs, raising $500K seed

### Through-Line Rules

1. **Every skill-based lesson** (L03-L13) uses the AP example as the primary worked example
2. **Worked examples come from the spec** — the spec provides complete sample outputs for each command. Writers must use these outputs, not invent new ones.
3. **After showing the AP example**, each lesson includes a "Now do it for your own venture" prompt that uses `innov.local.md`
4. **WhatsApp is the dominant channel in the example** but lessons must note: "If WhatsApp is not dominant in your market, substitute the tool that is: Teams, WeChat, email, or Line."

---

## 4. Cross-Reference Map

| Lesson | References Back To                                           | References Forward To                                                         |
| ------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| L01    | Ch 28 (Cowork setup)                                         | L02 (plugin install)                                                          |
| L02    | L01 (DLA concepts)                                           | L03 (first skill usage)                                                       |
| L03    | L01 (Design Thinking stage)                                  | L04 (discovery → ideation), L05 (discovery → hypotheses)                      |
| L04    | L03 (problem statement)                                      | L05 (selected idea → assumptions)                                             |
| L05    | L04 (selected idea), L03 (customer data)                     | L06 (assumptions → MVP)                                                       |
| L06    | L05 (assumption map)                                         | L07 (MVP → pilot → BML)                                                       |
| L07    | L06 (MVP results)                                            | L08 (validated learning → canvas)                                             |
| L08    | L03-L07 (all discovery + validation)                         | L09 (Revenue Streams → unit economics)                                        |
| L09    | L08 (BMC cost/revenue blocks)                                | L10 (financials → market sizing validation), L12 (financials → pitch Slide 6) |
| L10    | L03 (customer segments), L09 (pricing for TAM calc)          | L11 (market → GTM), L12 (market → pitch Slide 4)                              |
| L11    | L03 (ICP from discovery), L10 (market context)               | L12 (GTM traction → pitch Slide 5)                                            |
| L12    | L08 (canvas), L09 (financials), L10 (market), L11 (traction) | L14 (fundraising agent)                                                       |
| L13    | L05 (assumption tracking), L07 (BML loop)                    | L14 (sprint agent)                                                            |
| L14    | All L03-L13 skills                                           | L15 (agents in capstone)                                                      |
| L15    | All L01-L14                                                  | L16 (reference)                                                               |
| L16    | All lessons                                                  | —                                                                             |

---

## 5. Exercise Dependency Chain

```
Ex 2 (L03: Discovery) ──► Ex 1 (L04: Ideation) ──► Ex 3.1 (L05: Assumptions)
                                                          │
                                                          ▼
                                                    Ex 3.2 (L06: MVP)
                                                          │
                                                          ▼
                                            Ex 4 (L08: BMC) ──► Ex 5 (L09: Financials)
                                                   │                    │
                                                   ▼                    ▼
                                            Ex 7 (L11: GTM)    Ex 6 (L12: Pitch Deck)
                                                   │
                                                   ▼
                                            Ex 8 (L15: innov.local.md)
```

Each exercise builds on outputs from prior exercises. Writers must include "From Exercise N, you have..." preambles that tell students what prior artifacts they need.

---

## 6. Sidecar File Rules

### Flashcards (`.flashcards.yaml`)

- 10-15 cards per lesson
- Format: `question:` / `answer:` pairs in YAML list
- Focus on key concepts, frameworks, definitions, and distinctions
- Do NOT include the AP automation specifics — flashcards should be about the methodology, not the example

### Summaries (`.summary.md`)

- 200-300 words
- Structure: "What you learned" (2-3 sentences), "Key takeaways" (3-5 bullet points), "Next" (1 sentence linking to next lesson)
- Plain markdown, no frontmatter needed

---

## 7. Fact Verification Flags

Writers must WebSearch-verify OR hedge the following types of claims:

1. **Statistics**: Any percentage, number, or adoption figure
2. **Dates**: When frameworks were introduced (Kraljic 1983, BMC by Osterwalder, Lean Startup by Ries)
3. **URLs**: All references in the Quick Reference table must be verified as live
4. **Market data**: WhatsApp usage figures, SaaS industry benchmarks
5. **Attribution**: Who coined what term

**Hedging format**: "approximately", "as of 2025", "according to [source]", or omit the specific number entirely if unverifiable.

---

## 8. Cowork Terminology

- The tool is called **Cowork**. Never "Claude in Excel", "Claude Cowork", "Claude in Cowork".
- **"Claude in Excel"** is a SEPARATE product taught in Chapter 28. Do not conflate.
- When writing Try With AI setups: `"Use these prompts in Cowork or your preferred AI assistant."`
- Plugin invocation: Students type `/idea`, `/discovery`, etc. — just the slash and skill name.
- Three activation methods exist (auto-activation, explicit `/command`, Instructions pane) but L03-L13 use simple natural prompts that may auto-activate skills. L14 (Agents) can mention explicit invocation.

---

## 9. Router Distribution Guide

**There is no router skill in the plugin.** Router logic is distributed into each skill's YAML `description` field as trigger phrases. See `architecture-spec.md` Section 6 for the complete trigger phrase mapping.

Additionally, each skill SKILL.md must include these universal rules from the governing spec's router:

1. **Load innov.local.md** at start of every invocation (or continue without it and prompt user to build it)
2. **Stage-aware calibration**: Check `venture.stage` and warn if the user is at the wrong DLA stage for this skill
3. **DLA progression warnings**: Flag if the user is skipping a DLA stage (building before validating, validating before discovering)
4. **Assumption tracking**: Surface the most critical untested assumption in every output
5. **Financial reasoning** (financials/canvas/pitch/market only): Unit economics first; churn is the most dangerous assumption; always show runway; never project without stating assumptions
6. **Pitch quality** (pitch only): Every claim needs a source; never use banned phrases

---

## 10. Intrapreneurship Dual-Track

Every lesson must acknowledge the intrapreneurship context. Implementation approaches:

- **L01**: Dedicated section explaining the dual-track explicitly
- **L03-L13**: Each lesson includes a `:::note For Intrapreneurs` callout with the contextual translation (e.g., "Your 'investors' are your innovation committee. Your 'market' is your organisation's existing customer base.")
- **L15**: The capstone `innov.local.md` template has an explicit `intrapreneurship:` section with internal approval pathways, stakeholder mapping, and budget/headcount constraints

---

## 11. Quality Checklist (Every Lesson)

Before submitting any lesson, verify:

- [ ] Full YAML frontmatter (all fields from template in architecture-spec.md)
- [ ] Narrative opening (2-3 paragraphs with real-world hook)
- [ ] AP worked example with complete sample output from the governing spec
- [ ] Try With AI section (3 prompts: Reproduce → Adapt → Apply)
- [ ] Intrapreneurship note (where applicable)
- [ ] No `import` statements for non-existent components
- [ ] No "Claude in Excel" terminology (use "Cowork")
- [ ] Cross-references to dependency lessons
- [ ] Flashcard sidecar (10-15 cards)
- [ ] Summary sidecar (200-300 words)
- [ ] All statistics hedged or WebSearch-verified
