# Chapter 33 Plugin Surface Duplication Audit

Date: 2026-03-14

Scope:
- Anthropic base plugin: `anthropics/knowledge-work-plugins/legal`
- Panaversity extension plugin: `panaversity/agentfactory-business-plugins/legal-ops`
- Chapter 33 curriculum surface in `apps/learn-app/docs/.../33-legal-operations-and-compliance/`

Working assumption:
- In Cowork, same-named skills and commands collapse into the same user-facing slash surface.
- Because of that, same-name Anthropic skills and Panaversity commands should be treated as duplicate public entrypoints even if they live in different folders.

Open runtime question:
- This audit does not prove command precedence in Cowork when both plugins are installed.
- Recommendations below assume that ambiguous same-name entrypoints are unacceptable even if precedence is deterministic.

## Decision Rules

1. If Anthropic and Panaversity expose the same slash name, assign one canonical owner.
2. If Panaversity changes the behavior of a same-name command, rename it or remove it.
3. Panaversity should focus on extension value: jurisdiction routing, overlays, legal ops agents, and supporting materials.
4. Chapter 33 should teach one public command name per capability.

## Command Matrix

| Capability | Chapter 33 Usage | Anthropic Surface | Panaversity Surface | Relationship | Recommendation |
| --- | --- | --- | --- | --- | --- |
| `/review-contract` | Heavy; core lesson flow; used across L01, L02, L03, L04, L10, L13, L14 | `skills/review-contract/SKILL.md` | `commands/review-contract.md` plus `skills/jurisdiction-contract-review/SKILL.md` | Duplicate public entrypoint; Panaversity adds routing/overlay layer to the same core workflow | Anthropic should own `/review-contract`. Remove Panaversity's duplicate public command and make Panaversity an internal router/overlay extension to that workflow. |
| `/triage-nda` | Heavy; core lesson flow; used across L05, L10, L14 | `skills/triage-nda/SKILL.md` | `commands/triage-nda.md` plus `skills/jurisdiction-nda-triage/SKILL.md` | Duplicate public entrypoint; Panaversity adapts the same workflow with jurisdiction handling | Anthropic should own `/triage-nda`. Remove Panaversity's duplicate public command and keep only extension logic. |
| `/vendor-check` | Heavy; taught as obligation dashboard in L03, L09, L14 | `skills/vendor-check/SKILL.md` | `commands/vendor-check.md` routing to `skills/compliance-calendar/SKILL.md` | Same name, different meaning. Anthropic checks vendor agreement status across systems; Panaversity produces a compliance calendar dashboard. | Do not keep the Panaversity command under this name. Rename the Panaversity workflow or remove the command and teach it as a distinct legal ops capability. |
| `/brief` | Heavy; used for benchmarking, IP research, regulatory monitoring, legal spend | `skills/brief/SKILL.md` | No same-name command, but Panaversity introduces `/legal-brief` for overlapping research use cases | Boundary blur rather than direct name collision | Pick one research command surface. Either keep Anthropic `/brief` as canonical everywhere or intentionally migrate Panaversity research flows to `/legal-brief` and rewrite Chapter 33 accordingly. |
| `/respond` | Heavy; L08 and L14 | `skills/legal-response/SKILL.md` | None | Anthropic-only | Keep Anthropic as canonical. Chapter is aligned here. |
| `/compliance-check` | Heavy; L06 and L14 | `skills/compliance-check/SKILL.md` | None | Anthropic-only | Keep Anthropic as canonical. Chapter is aligned here. |
| `/signature-request` | Medium; L04 and L14 | `skills/signature-request/SKILL.md` | None | Anthropic-only | Keep Anthropic as canonical. Chapter is aligned here. |
| `/legal-brief` | Low explicit usage, but intended as Panaversity research entrypoint | None | `commands/legal-brief.md` routing to router, IP, regulatory, spend, and DSAR skills | Panaversity-only, but conceptually overlaps with Anthropic `/brief` | Keep only if Panaversity owns a separate research surface. Otherwise remove and fold the content into Anthropic `/brief` usage plus hidden routing. |
| `/contract-intake` | Mentioned in L14 sprint table and flashcards | None | No command shipped; nearest surface is `skills/contract-intake-agent/SKILL.md` | Documentation drift | Either add a real `/contract-intake` command or remove the slash reference from Chapter 33 and teach this as a skill/agent only. |
| `/compliance-calendar` | Mentioned in L14 sprint table and flashcards | None | No command shipped; nearest surface is `skills/compliance-calendar/SKILL.md` | Documentation drift | Either add a real `/compliance-calendar` command or remove the slash reference from Chapter 33 and use the actual supported entrypoint. |
| `/legal-hold` | Mentioned in L14 sprint table and flashcards | None; Anthropic uses `/respond type:"litigation-hold"` | No command shipped | Documentation drift | Replace `/legal-hold` in Chapter 33 with `/respond type:"litigation-hold"` unless a real command is added. |

## Skill Matrix

| Skill / Capability | Anthropic Equivalent | Relationship | Recommendation |
| --- | --- | --- | --- |
| `review-contract` | `jurisdiction-contract-review` | Same core job; Panaversity adds jurisdiction overlay logic | Keep only one public command name. Panaversity should extend the Anthropic workflow, not shadow it. |
| `triage-nda` | `jurisdiction-nda-triage` | Same core job; Panaversity adds jurisdiction overlay logic | Keep only one public command name. Panaversity should extend the Anthropic workflow, not shadow it. |
| `vendor-check` | `compliance-calendar`, partial `contract-intake-agent` | Partial overlap, but not the same product behavior | Do not map these to the same public name. |
| `brief` | `legal-brief`, `ip-protection`, `regulatory-monitoring`, `legal-spend`, `dsar-privacy` | Anthropic owns general legal research; Panaversity adds domain-specific research modules | Decide whether Panaversity becomes an internal router behind Anthropic `/brief` or a distinct `/legal-brief` product. Do not teach both casually. |
| `legal-risk-assessment` | None | Anthropic-only | Keep Anthropic-only. |
| `meeting-briefing` | None | Anthropic-only | Keep Anthropic-only. |
| `legal-response` | Partial DSAR overlap via `dsar-privacy` | Different responsibilities. Anthropic handles templated responses and legal holds; Panaversity handles DSAR/privacy workflow detail. | Keep both, but document boundaries clearly. |
| `signature-request` | None | Anthropic-only | Keep Anthropic-only. |
| `legal-global-router` | None | Panaversity-only extension | Keep. This is real extension value. |
| `ip-protection` | Partial use of Anthropic `/brief` for research pattern | Panaversity-only domain extension | Keep, but fix how Chapter 33 names and invokes it. |
| `regulatory-monitoring` | Partial overlap with Anthropic `/brief` and `/compliance-check` | Panaversity-only domain extension | Keep, but decide whether entrypoint is `/brief` or `/legal-brief`. |
| `dsar-privacy` | Partial overlap with Anthropic `/respond` and `compliance-check` | Panaversity-only DSAR/privacy depth | Keep, but document when to use it vs `/respond`. |
| `legal-spend` | None | Panaversity-only | Keep. |
| `compliance-calendar` | Partial overlap with Anthropic `vendor-check` upcoming actions | Panaversity-only legal ops specialization | Keep, but not under `/vendor-check`. |
| `contract-intake-agent` | None | Panaversity-only | Keep. |

## Highest-Risk Conflicts

### 1. `/vendor-check` is a semantic collision, not just a duplicate name

Anthropic meaning:
- Vendor relationship search across CLM, CRM, email, documents, and chat.
- Agreement inventory, gap analysis, and upcoming actions.

Panaversity meaning:
- Obligation extraction and compliance calendar dashboard.
- Escalation timeline, overdue tracking, renewal reminders.

This is the cleanest example of why same-name ownership must be resolved before Chapter 33 is finalized.

### 2. `/review-contract` and `/triage-nda` are near-duplicate surfaces

Panaversity is not a file-for-file copy, but it clearly wraps or adapts the same legal workbench pattern:
- gather context
- load playbook
- review/triage
- classify
- escalate

That makes these capabilities layered extensions, not independent products. The public slash name should still have one owner.

### 3. Research workflows are split across `/brief` and `/legal-brief`

Chapter 33 currently teaches Anthropic `/brief` for:
- negotiation benchmarking
- regulatory monitoring
- patent landscape research
- trademark monitoring
- legal spend analysis

Panaversity ships `/legal-brief` for:
- regulatory monitoring
- IP analysis
- legal spend
- DSAR/privacy research

That is one of the most important ownership decisions in the chapter.

## Chapter / Plugin Drift

The chapter currently teaches several names that do not exist as shipped plugin surfaces:

| Chapter Name | Actual Shipped Surface | Issue |
| --- | --- | --- |
| `/contract-intake` | `contract-intake-agent` skill only | Slash command referenced in chapter, but no command file exists. |
| `/compliance-calendar` | `compliance-calendar` skill only | Slash command referenced in chapter, but no command file exists. |
| `/legal-hold` | Anthropic `/respond type:"litigation-hold"` | Chapter invents a dedicated slash command that does not exist. |
| `legal-spend-analytics` | `legal-spend` | Chapter uses a different skill name than the plugin. |
| `ip-protection-config` | `ip-protection` | Chapter uses a different skill/config name than the plugin. |

Additional repo drift:
- `legal-ops/.claude-plugin/plugin.json` says "5 jurisdiction overlays".
- `legal-ops/README.md` and the actual tree show 6 overlays including GCC.

## Suggested Ownership Decisions

### Option A: Anthropic Owns Shared Commands

Use Anthropic as canonical for:
- `/review-contract`
- `/triage-nda`
- `/vendor-check`
- `/brief`
- `/respond`
- `/compliance-check`
- `/signature-request`
- `legal-risk-assessment`
- `meeting-briefing`

Use Panaversity for:
- `legal-global-router`
- jurisdiction overlays
- `ip-protection`
- `regulatory-monitoring`
- `dsar-privacy`
- `legal-spend`
- `compliance-calendar`
- `contract-intake-agent`
- exercises, evals, workflow recipes

Implications:
- Remove or rename Panaversity's duplicate public commands.
- Rewrite Chapter 33 so each shared capability points to Anthropic's canonical command.
- Expose Panaversity as the behind-the-scenes extension layer plus a small set of clearly unique entrypoints.

### Option B: Panaversity Owns a Separate Legal Ops Surface

Keep Panaversity as a visibly separate product, but then:
- Rename all colliding commands.
- Stop teaching Anthropic and Panaversity capabilities under the same slash names.
- Accept that Chapter 33 becomes a two-command-system chapter.

This is cleaner technically than ambiguous collision, but it is worse pedagogically and likely worse for student UX.

### Recommended Path

Option A is the better Chapter 33 design:
- one canonical owner per public command
- Panaversity as extension, not shadow plugin
- Chapter text aligned to actual shipped surfaces

## Actual Content Review Pairs

If the team wants to make a final keep/remove decision by reading the real files side by side, review these pairs first:

| Priority | Anthropic File | Panaversity File(s) | Why |
| --- | --- | --- | --- |
| 1 | `legal/skills/vendor-check/SKILL.md` | `legal-ops/commands/vendor-check.md`, `legal-ops/skills/compliance-calendar/SKILL.md` | Same name, different product behavior. |
| 2 | `legal/skills/review-contract/SKILL.md` | `legal-ops/commands/review-contract.md`, `legal-ops/skills/jurisdiction-contract-review/SKILL.md` | Same public command, layered workflow overlap. |
| 3 | `legal/skills/triage-nda/SKILL.md` | `legal-ops/commands/triage-nda.md`, `legal-ops/skills/jurisdiction-nda-triage/SKILL.md` | Same public command, layered workflow overlap. |
| 4 | `legal/skills/brief/SKILL.md` | `legal-ops/commands/legal-brief.md`, `legal-ops/skills/ip-protection/SKILL.md`, `legal-ops/skills/regulatory-monitoring/SKILL.md`, `legal-ops/skills/legal-spend/SKILL.md`, `legal-ops/skills/dsar-privacy/SKILL.md` | Decide whether there is one research surface or two. |

## Recommended Next Actions

1. Decide canonical owner for `/review-contract`, `/triage-nda`, `/vendor-check`, and research (`/brief` vs `/legal-brief`).
2. Remove or rename duplicate Panaversity public commands based on that decision.
3. Rewrite Chapter 33 so every referenced command or skill actually exists.
4. Add one runtime validation pass in Cowork/Claude Code with both plugins installed to confirm slash precedence and auto-activation behavior.
