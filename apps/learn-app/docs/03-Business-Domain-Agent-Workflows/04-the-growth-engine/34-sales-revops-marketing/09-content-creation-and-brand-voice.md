---
sidebar_position: 9
title: "Content Creation and Brand Voice"
description: "Configure brand voice in your local config, produce a cornerstone LinkedIn article, audit it with /brand-review and /seo-audit, multiply it into 10 derivative assets, and build an interactive sales one-pager with create-an-asset"
keywords:
  [
    "content creation",
    "brand voice",
    "cornerstone content",
    "content multiplication",
    "brand-review",
    "seo-audit",
    "create-an-asset",
    "derivative content",
    "LinkedIn article",
    "sales one-pager",
    "content engine",
    "NexaFlow Technologies",
    "Meridian Logistics",
  ]
chapter: 34
lesson: 9
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure Brand Voice and Produce Cornerstone Content"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can define brand voice parameters (tone, content pillars, persona-specific voice) in local config and produce a cornerstone article that passes /brand-review on first or second iteration"

  - name: "Multiply Content Across Channels and Audit Quality"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can generate 10 derivative assets from one cornerstone piece, audit each for brand consistency, and identify which assets need the most iteration before publishing"

  - name: "Build Interactive Sales Assets with create-an-asset"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can use the Sales plugin's create-an-asset skill to produce a prospect-specific interactive one-pager and compare it to text-based content multiplication output"

learning_objectives:
  - objective: "Configure brand voice in local config and produce a cornerstone article that passes /brand-review audit"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a brand voice config with tone, pillars, and persona guides, then generates a LinkedIn article and iterates until /brand-review returns a passing consistency score"

  - objective: "Multiply one cornerstone article into 10 derivative assets across channels and evaluate each for brand consistency"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student generates 10 derivative assets, audits each for brand voice, and identifies the 2-3 assets requiring the most iteration (typically CEO posts and ad copy)"

  - objective: "Use create-an-asset to produce an interactive sales one-pager for a specific prospect and compare it to text-based content assets"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student builds an interactive one-pager for Meridian Logistics and articulates how the create-an-asset output differs from the text-based sales one-pager in the asset tree"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Brand voice configuration (tone, pillars, persona-specific voice)"
    - "Cornerstone content (the single source piece that feeds all distribution)"
    - "Content multiplication (1 cornerstone piece into 10 derivative assets)"
    - "/brand-review audit (brand consistency scoring and tone analysis)"
    - "/seo-audit (keyword targeting and readability check)"
    - "Interactive sales asset via create-an-asset vs text-based content"
  assessment: "6 concepts at B1 level. Brand voice and cornerstone content are the foundational pair. Content multiplication is the practical core. The two audit commands (/brand-review, /seo-audit) are operational. The interactive asset comparison is the extension. Within B1 budget of 7-10 concepts."

differentiation:
  extension_for_advanced: "Create a second cornerstone article targeting a different persona (CFO instead of VP Ops). Run /brand-review on both and compare how the same brand voice adapts across personas. Then multiply both and compare which persona's asset tree produces more READY assets on first generation."
  remedial_for_struggling: "Focus on the cornerstone article and /brand-review loop only. If you can produce an article that scores well on brand consistency and explain what you changed between iterations, you understand the core concept. Skip the 10-asset multiplication and return to it after Lesson 10."
---

# Content Creation and Brand Voice

In Lesson 8, you ran the complete prospect-to-meeting pipeline from research to follow-up. The pipeline feeds on prospects. But where do prospects come from? Content marketing. Farah is not cold-calling strangers. Her prospects found NexaFlow through an article, a case study, a newsletter, or a conference talk. The pipeline works because the top of the funnel delivers warm prospects who already recognize NexaFlow's name.

NexaFlow's content marketer, Zara, produces one LinkedIn article per week. Each article takes two days: research, outline, draft, edit, review. Meanwhile, their competitor LogiTrack publishes three articles, two case studies, and a weekly newsletter. The gap is not quality of thinking. Zara writes better than most of LogiTrack's content team. The gap is production capacity. She cannot outproduce a team of four by working harder. She needs a different operating model.

This lesson builds that operating model. You will configure NexaFlow's brand voice, produce a single cornerstone article, audit it with two base plugin commands, multiply it into 10 distribution-ready assets, and build an interactive sales one-pager with the Sales plugin.

---

## Configure Brand Voice

Before generating any content, the agent needs to know what NexaFlow sounds like. Open `sales-marketing.local.md` and add a brand voice section:

```
Add a brand voice configuration to sales-marketing.local.md with
the following parameters:

Tone: direct, practical, operator-level. No marketing fluff.
We write like operators talking to operators — concrete, specific,
backed by numbers.

Content pillars:
1. Operational excellence — warehouse throughput, delivery windows,
   route optimization
2. Sector intelligence — 3PL trends, regulatory changes, market shifts
3. Technology — integration patterns, automation ROI, system
   modernization

Persona-specific voice:
- VP Operations: technical depth, operational metrics,
  implementation detail
- CFO: financial impact, ROI framing, risk reduction,
  cost benchmarks
- CEO: strategic positioning, market trends, competitive advantage
```

The extension's content-creation skill reads this configuration when generating any content. Without it, the agent writes generic B2B marketing copy. With it, the agent writes like NexaFlow.

**Why this matters:** Every downstream asset inherits the brand voice config. If the config says "no marketing fluff," the LinkedIn article avoids language like "synergistic solutions." If the persona guide says "VP Operations wants metrics," the agent includes throughput numbers instead of vision statements. Brand voice is to content what ICP is to the pipeline: get it right once and everything downstream improves.

---

## Create the Cornerstone Piece

A cornerstone article is the single piece of thinking that feeds every distribution channel. Write one great article and extract 10 assets from it. Write 10 mediocre articles and you have 10 pieces of mediocre content.

```
Write a 1,200-word LinkedIn article on why 3PL operators who
survived the 2024-25 delivery cost crunch are positioned to win.
Target audience: VP Ops at mid-market logistics companies.
```

The extension's content-creation skill auto-activates and applies the brand voice config and ICP filtering. Review the output against your config:

| Check                    | What to Look For                                                                  |
| ------------------------ | --------------------------------------------------------------------------------- |
| Tone                     | Does it read like an operator talking to operators, or like a marketing brochure? |
| Content pillar alignment | Does it hit operational excellence (its primary pillar)?                          |
| Persona voice            | Is it written for VP Ops (metrics, implementation) not CEO (vision, strategy)?    |
| Specificity              | Does it cite specific operational benchmarks, or use vague "improve efficiency"?  |
| Length                   | Is it within 10% of 1,200 words?                                                  |

If the tone feels too polished or too generic, iterate on the config, not the article. The article is a symptom. The config is the cause.

---

## Brand Voice Check

Run the base Marketing plugin's brand review command on the cornerstone article:

```
/brand-review
```

This command runs without the extension. It analyses the article for brand consistency, tone alignment, and suggests adjustments.

**What to expect:** The `/brand-review` command produces a brand consistency analysis. Your output will vary, but look for these sections:

| Section           | Intent                                | What to Verify                                                      |
| ----------------- | ------------------------------------- | ------------------------------------------------------------------- |
| Consistency score | Overall brand alignment rating        | Score reflects how well the article matches your brand voice config |
| Tone analysis     | Paragraph-level tone assessment       | Flags specific paragraphs that drift from your configured tone      |
| Pillar coverage   | Content pillar alignment check        | Identifies which pillars are strong, moderate, or weak              |
| Persona match     | Audience targeting evaluation         | Confirms article targets the right persona (VP Ops vs CEO vs CFO)   |
| Recommendations   | Specific fixes to improve consistency | Each recommendation references a specific paragraph or phrase       |

:::note Your output will vary
The consistency score depends on your brand voice configuration from earlier in this lesson. The teaching point is the _iterate loop_: run `/brand-review`, apply recommendations, run again. The goal is a consistency score above 90 before moving to multiplication. If the tone feels too polished or too generic, iterate on the config, not the article: the article is a symptom, the config is the cause.
:::

---

## SEO Audit

Before distributing the cornerstone article, check its discoverability:

```
/seo-audit
```

This base Marketing plugin command evaluates keyword targeting, readability, and structural SEO. If you have a connector configured for Ahrefs or Similarweb, the audit pulls real keyword and traffic data. Without a connector, it applies general SEO best practices.

**What to act on:**

| SEO Element      | What the Audit Checks                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| Primary keyword  | Is "3PL delivery cost" (or similar) present in title and first 100 words? |
| Keyword density  | Is the primary keyword used 3-5 times without stuffing?                   |
| Readability      | Is the Flesch-Kincaid score appropriate for VP Ops (grade 10-12)?         |
| Structure        | Does the article use H2/H3 headers for scannability?                      |
| Meta description | Is there a compelling 150-character summary?                              |

Apply the SEO recommendations to the cornerstone before multiplication. Fix SEO once at the source and all 10 assets benefit.

---

## Content Multiplication

The cornerstone is written, brand-reviewed, and SEO-audited. Now multiply it:

```
From this cornerstone article, create an asset tree with
10 derivative content pieces across these channels:
1. LinkedIn article (the cornerstone — already done)
2. CEO social posts (3 short-form variants)
3. Newsletter excerpt
4. Social media carousel (slide-by-slide outline)
5. Cold email hook (first line for outreach sequences)
6. Sales one-pager (text summary for proposals)
7. Ad copy (5 headline/body variants)
8. Email subject lines (8 variants for A/B testing)
9. Webinar outline (30-minute talk structure)
10. FAQ post (questions the article anticipates)
```

The extension's content-creation skill handles the multiplication, applying brand voice and ICP filtering to every derivative.

**What to review across all 10 assets:**

Not every asset will pass brand voice on first generation. The pattern Zara has learned:

| Asset Type       | Typical First-Generation Quality | Why                                                      |
| ---------------- | -------------------------------- | -------------------------------------------------------- |
| Newsletter       | READY                            | Closest to cornerstone format                            |
| LinkedIn article | READY                            | The cornerstone itself                                   |
| FAQ post         | READY                            | Extracts directly from article structure                 |
| Sales one-pager  | NEEDS EDITING                    | Tends to add marketing language the brand voice forbids  |
| Webinar outline  | NEEDS EDITING                    | Structure good but talking points need operator depth    |
| Cold email hook  | NEEDS EDITING                    | Defaults to generic hooks without prospect specificity   |
| Social carousel  | NEEDS EDITING                    | Slide count good but each slide needs tightening         |
| CEO social posts | NEEDS EDITING                    | CEO voice is distinct from brand voice: requires tuning |
| Ad copy          | REDO on 2-3 variants             | Compression loses brand nuance                           |
| Subject lines    | REDO on 3-4 variants             | Short-form writing is hardest for AI to get brand-right  |

Run `/brand-review` on any asset rated NEEDS EDITING or REDO. The assets requiring the most iteration are the ones furthest from the cornerstone format. Short-form content (subject lines, ad copy, CEO posts) loses brand nuance because compression strips context.

Before finalizing any content piece, scan the output for every banned word (leverage, synergy, robust, seamless, game-changing, etc.) and replace with concrete alternatives: "solution" becomes the actual product name, "robust" becomes the specific quality being described. If the prompt specifies a particular CTA, use that exact CTA; do not substitute a generic alternative.

---

## Build an Interactive Sales Asset

Content multiplication produces text-based assets. But Meridian Logistics is evaluating NexaFlow alongside competitors. A text summary will not differentiate NexaFlow in a competitive evaluation. Meridian's procurement team wants something they can click through, share internally, and use to justify a shortlist decision.

Use the Sales plugin's `create-an-asset` skill:

```
Create an interactive one-pager for Meridian Logistics showing
how NexaFlow solves their warehouse scaling problem. Include their
specific metrics: 3 UK distribution centres, 12% YoY volume growth,
current WMS approaching capacity at 850K parcels/month.
```

The `create-an-asset` skill produces an interactive HTML deliverable: not a flat document but something with expandable sections, embedded calculations, or comparison tables that Meridian's team can navigate.

**What to expect:** The `create-an-asset` skill produces an interactive HTML deliverable. Your output will vary, but look for these sections:

| Section                 | Intent                                  | What to Verify                                         |
| ----------------------- | --------------------------------------- | ------------------------------------------------------ |
| Asset metadata          | File name, type, format, file size      | Single-page HTML with no external dependencies         |
| The Challenge           | Prospect-specific problem statement     | Uses YOUR prospect's metrics from demo-data.md         |
| How We Solve It         | Expandable product capabilities section | Capabilities mapped to the prospect's specific pain    |
| Prospect-Specific ROI   | Auto-calculated savings or impact       | Numbers derived from prospect data, not generic claims |
| Implementation Timeline | Week-by-week rollout plan               | Realistic for the prospect's scale and complexity      |
| Next Step               | Clear CTA with calendar link or contact | Low-friction action the prospect can take immediately  |

:::note Your output will vary
The one-pager content depends entirely on which prospect you chose and what data exists in your demo-data.md. The teaching point is the _comparison_ between text-based content multiplication (volume play: seconds to produce for every prospect) and interactive assets (precision play: minutes to produce for high-value shortlist deals).
:::

**Compare the two sales assets:**

| Dimension         | Text One-Pager (from multiplication) | Interactive One-Pager (create-an-asset)        |
| ----------------- | ------------------------------------ | ---------------------------------------------- |
| Format            | Flat text, PDF-ready                 | Interactive HTML with expandable sections      |
| Prospect-specific | Generic: works for any logistics co | Specific: prospect's metrics, locations, pain |
| Shareable         | Email attachment                     | Link or embedded in proposal                   |
| Differentiation   | Low: competitors send similar PDFs  | High: interactive format stands out           |
| Production time   | 30 seconds (from multiplication)     | 2 minutes (from create-an-asset)               |

The text one-pager from content multiplication is a volume play: produce it for every prospect in seconds. The interactive one-pager from `create-an-asset` is a precision play: produce it for high-value enterprise prospects where differentiation justifies the extra two minutes.

---

## Review Against Brand Voice

With all assets generated, do a final brand consistency sweep. For each asset, ask: does this sound like NexaFlow or like a generic vendor?

The assets most likely to drift:

1. **CEO social posts**; CEO voice is personal and strategic. The agent defaults to the company brand voice, which is operational. Fix by adding "Write in the CEO's voice: strategic, forward-looking, competitive positioning" to the prompt.

2. **Ad copy**; Compression strips context. A 15-word headline cannot carry the same operator depth as a 1,200-word article. Fix by running `/brand-review` on each variant and discarding any that score below 75.

3. **Subject lines**; Same compression problem as ad copy. Fix by generating 15 variants and keeping the 8 that pass brand review.

Everything else should pass with minor edits. The cornerstone carries the brand voice DNA. Assets closest to the cornerstone format (newsletter, FAQ) inherit it naturally. Assets furthest from it (short-form, CEO voice) need targeted iteration.

---

## What You Built

1. Brand voice configuration in `sales-marketing.local.md` (tone, pillars, persona guides)
2. 1 cornerstone LinkedIn article; SEO-audited and brand-reviewed
3. 10 derivative assets across channels: each evaluated for brand consistency
4. 1 interactive sales one-pager for Meridian Logistics via `create-an-asset`: deployable with a proposal
5. Content multiplication skill: 1 piece of thinking becomes 10 distribution-ready assets
6. Used base `/brand-review`, `/seo-audit` commands and the `create-an-asset` Sales plugin skill

## Flashcards Study Aid

<Flashcards />

## Try With AI

Use these prompts in Claude or your preferred AI assistant to practise the content creation skills from this lesson.

### Prompt 1 (Reproduce)

```
Write a cornerstone article for NexaFlow targeting VP Ops at
mid-market logistics companies. Topic: how real-time route
optimization reduces last-mile delivery costs.

After generating:
1. Run /brand-review and note the consistency score
2. Fix any recommendations and run /brand-review again
3. Create the 10-asset derivative tree from the article
4. How many assets pass brand voice on first generation?
   Which need the most iteration?
```

**What you are learning:** The full content production loop: cornerstone creation, brand audit, iteration, and multiplication. Tracking first-generation pass rates teaches you which asset types reliably inherit brand voice and which always need iteration. This calibrates your expectations so you budget editing time correctly.

### Prompt 2 (Adapt)

```
Use create-an-asset to build an interactive one-pager for a
DIFFERENT prospect — pick Atlas Cargo, Crescent Freight, or
Pinnacle Distribution from your Lesson 1 dataset.

Compare the interactive one-pager to the text-based sales
one-pager from your asset tree:
- Which is more personalised?
- Which took longer to produce?
- Which would you send for a first meeting vs a shortlist eval?
```

**What you are learning:** The difference between volume content (text multiplication for the pipeline) and precision content (interactive assets for high-value deals). By comparing the two for the same prospect, you develop judgment about when each format earns its production cost. Most prospects get the text version. Shortlist prospects get the interactive version.

### Prompt 3 (Apply)

```
Write a cornerstone piece for your own business or a business
you know well. Define your brand voice config first (tone,
pillars, persona guides).

Run /seo-audit and /brand-review on the cornerstone. Then
create 5 derivative assets and audit each for brand consistency.

For each asset, rate:
- READY: could publish as-is
- NEEDS EDITING: close but needs tweaks
- REDO: not usable, needs regeneration

What is your brand voice pass rate? Which assets drift most?
```

**What you are learning:** How to apply the content engine to your own context. The brand voice config is the critical variable: if your pass rate is low, the config needs tightening (more specific tone guidance, clearer pillar definitions, sharper persona distinctions). If your pass rate is high, your config is doing its job. This diagnostic skill transfers to any business, not just NexaFlow.
