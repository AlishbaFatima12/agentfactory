# Diagnostic Categories for Chapter Design

These 7 categories must be evaluated for every Part 3 business domain chapter.
Not all categories apply to every chapter type — see the adaptation table in SKILL.md.

## Category 1: Layer 1 Collision Audit

**Applies to**: Plugin chapters only

For each planned skill, check against Anthropic's knowledge-work-plugins:

```
┌──────────────────┬───────────────────────┬──────────────┬────────────────┐
│  Planned Skill   │  Layer 1 Candidate    │  Collision?  │ Pattern Needed │
├──────────────────┼───────────────────────┼──────────────┼────────────────┤
│ [skill-name]     │ [L1 skill or "None"]  │ [Yes/No]     │ [Coexist/      │
│                  │                       │              │  Rename/New]   │
└──────────────────┴───────────────────────┴──────────────┴────────────────┘
```

**Collision types**:

- **Name collision**: Same command name, different domain (dangerous — user gets wrong skill)
- **Semantic overlap**: Similar concept, different scope (usually safe to coexist)
- **No collision**: Unique skill

**Resolution patterns**:

- **Coexist**: Different names already, different domains. No action needed.
- **Rename**: Same name or too-generic name. Prefix with domain noun (e.g., `/reconcile` → `/invoice-reconcile`)
- **Override**: Our domain-specific version replaces their generic one (rare — only when our skill is strictly better for all use cases)

**Present as**: Collision table + recommended action for each + one binding question about the most dangerous collision.

## Category 2: Component Classification

**Applies to**: All chapters with specs that mention "agents" or "subagents"

The spec may describe components as "agents" that are actually:

- **Plugin skills** (SKILL.md files invoked by command)
- **Plugin agents** (agents/\*.md files with autonomous behavior)
- **Lesson content** (conceptual architecture taught in lessons, not shipped)

**Key diagnostic question**: Can the runtime environment (Cowork) actually run these components today?

| Spec Component | Classification             | Runtime Reality      | Ship as Plugin? |
| -------------- | -------------------------- | -------------------- | --------------- |
| [component]    | Skill / Agent / Conceptual | Works / Doesn't work | Yes / No        |

**Watch for**: Specs written by domain experts who use "agent" loosely to mean
"automated process." Verify each against the actual plugin agent format
(https://code.claude.com/docs/en/sub-agents).

## Category 3: Jurisdiction/Overlay Decision

**Applies to**: Plugin chapters in regulated domains

**Question**: Is this domain's compliance jurisdiction-dependent enough to warrant
overlay files?

| Factor                                        | Score                       |
| --------------------------------------------- | --------------------------- |
| Single regulator per country (like banking)?  | High → overlays             |
| Fragmented regulation (like supply chain)?    | Low → local.md only         |
| Does the spec mention specific country rules? | If yes → consider overlays  |
| Do exercises need jurisdiction context?       | If yes → overlays add value |

**Options**:

- **Option A**: Skip overlays. Use `local.md` config where user fills in their rules. Faster, simpler.
- **Option B**: Build 3-5 overlays for major markets. Adds context but more plugin scope.

**Banking precedent**: 10 overlays (PRA, CRR, Basel, APRA, MAS, CBUAE, SBP, etc.)
**Legal-ops precedent**: 6 overlays (UK, EU, US, Pakistan, UAE, GCC)
**CA/CPA precedent**: No overlays (entity extensions instead)

## Category 4: Exercise-to-Lesson Mapping

**Applies to**: All chapters

Map every exercise in the spec to a lesson. Identify:

| Spec Exercise | Lesson | Merge Candidate?            | Duration | Dependencies              |
| ------------- | ------ | --------------------------- | -------- | ------------------------- |
| [Exercise N]  | L[XX]  | [Yes: merge with Ex M / No] | [min]    | [References Ex Y results] |

**Watch for**:

- Exercises that teach the same skill from different angles → merge candidates
- Exercises that reference results from prior exercises → cross-reference chain
- The most complex exercise → capstone candidate
- Target lesson count: 13-15 (consistent with Banking, CA/CPA, Legal-ops)

## Category 5: Pedagogical Approach

**Applies to**: All chapters

Where does this chapter sit in the book progression? What do students already know?

| Approach               | When to Use                                                 | Example              |
| ---------------------- | ----------------------------------------------------------- | -------------------- |
| **"Use the plugin"**   | Early in Part 3; students learning plugins                  | Banking (ch 32)      |
| **"Build the system"** | Students already know plugins; build skills first           | CA/CPA (ch 30)       |
| **Hybrid**             | Late in Part 3; build core skills, then install full plugin | Supply Chain (ch 35) |

**Inversion question**: How could building a full N-skill plugin CAUSE worse
teaching outcomes? If the answer is "students just run commands without understanding,"
then the chapter needs a build-first component.

## Category 6: Fact Verification

**Applies to**: All chapters

Audit every external claim in the spec:

| Claim                      | Source        | Verifiable?             | Action                 |
| -------------------------- | ------------- | ----------------------- | ---------------------- |
| [Statistic or attribution] | [Source name] | [Yes/Suspect/Synthetic] | [Keep/VERIFY/Rephrase] |

**Rules from failure history**:

- content-implementer has hallucinated stats before
- Never publish statistics without WebSearch verification
- Synthetic scenarios (fictional companies) are fine — label them clearly
- Real sources need citation or hedging language

## Category 7: Missing Inputs

**Applies to**: All chapters

What must the user decide before team prompt generation?

Typical missing inputs:

- Collision resolution pattern for each contested skill
- Whether to ship agents as plugin files or teach conceptually
- Jurisdiction overlay decision
- Exercise-to-lesson mapping confirmation
- Reference chapter selection
- Target lesson count

Present as a numbered checklist. Each item should be a clear question with
your recommended answer.
