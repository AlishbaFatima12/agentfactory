# Chapter 18: Opening and Closing Narrative

## Narrative Fragment: Chapter Opening

<!-- INSERT: Beginning of Chapter 18, before first technical section -->

James had the terminal open, the project loaded, and absolutely no idea where to start.

He'd been staring at the `.claude/` directory for ten minutes. Rules files, skills with YAML frontmatter, a `CLAUDE.md` that imported other files, path-specific configurations scoped by glob patterns. His teammate Priya had sent him the repository link that morning with a message: _Just clone it and start working. Claude knows what to do._ But Claude didn't know what to do. Or rather, it did too many things, and James couldn't tell which instructions were firing and which were being ignored.

"I broke something," he said when Emma sat down.

"What did you break?"

"I don't know. That's the problem." He gestured at the screen. "I added a rule to CLAUDE.md saying to use pytest for all test files. Priya already had a rule in `.claude/rules/` saying to use vitest for the frontend. Now Claude is confused, I'm confused, and the CI pipeline is yelling at both of us."

Emma pulled up a chair and looked at the screen. She didn't say anything for a moment.

"How many configuration files does this project have?"

James scrolled through the directory. "The main CLAUDE.md, a user-level one in my home directory, three files in `.claude/rules/`, two skill definitions, and I think there's something in the `apps/api/` subdirectory too."

"Eight sources of instructions. And when they contradict each other, what wins?"

"I... assumed the project one overrides everything?"

"Why would you assume that?"

James opened his mouth, then closed it. In his old operations job, the company handbook overrode department guidelines, which overrode team preferences. Hierarchy was simple: bigger scope wins. But that wasn't what was happening here.

"Okay, wait," he said. "Let me think about this differently. In my old company, the department handbook didn't override the team playbook. The team playbook was more specific, so it applied first. The handbook only covered what the team playbook didn't mention." He paused. "Is that how this works? More specific wins?"

"Close." Emma pointed at the terminal. "But you're missing a dimension. What about your personal user-level CLAUDE.md? Does that override the project, or does the project override it?"

James stared at the three levels of configuration he'd listed. User. Project. Directory. Three scopes, eight files, and a CI pipeline running a ninth configuration on top of all of it.

"This is like configuring a hundred-person operations team where every person has their own playbook, the company has a handbook, and each department has local rules. And nobody wrote down which one takes priority."

Emma almost smiled. "Now you understand the problem. And that's exactly what this chapter solves."

She stood up. "I need to check on a deployment. But here's what I want you to do while I'm gone: run `/memory` in your Claude session. It lists every instruction file that's currently loaded, in the order Claude sees them. Map the hierarchy yourself. When I get back, tell me which of your eight files is actually causing the conflict."

James watched her leave. He looked at the terminal, then at the mess of configuration files, then back at the terminal.

He typed `/memory` and pressed enter.

---

## Narrative Fragment: Chapter Closing

<!-- INSERT: End of Chapter 18, after final technical section / exercises -->

Emma found James in the same chair three hours later, but the screen looked different. He had a diagram open: three columns labeled User, Project, and Directory, with arrows showing the override order. Four `.claude/rules/` files with glob patterns noted in the margins. A skills folder with two custom skills, each scoped to specific tools. And at the bottom, a CI pipeline config with `-p` flags and `--output-format json`.

"Show me," she said.

James walked her through it. The user-level CLAUDE.md set his personal preferences: editor keybindings, commit message style. The project-level CLAUDE.md defined team conventions: test frameworks, linting rules, architecture boundaries. The directory-level rules in `.claude/rules/` handled the specific cases: vitest for `apps/web/**/*.test.tsx`, pytest for `apps/api/**/*.py`, strict type-checking rules for the shared library. Two custom skills with `context: fork` so they ran in isolation without polluting the main session.

"The conflict with Priya's rule?"

"My fault." James leaned back. "I put a project-wide 'use pytest everywhere' rule in the root CLAUDE.md. Her path-specific rule in `.claude/rules/` was more specific, so it should have won for frontend files. But I'd also added `--no-rules` to my CLI alias three weeks ago when I was debugging something else. Killed the whole rules directory. So Claude only saw my root-level instruction."

Emma nodded slowly. "I did something worse once."

James looked up.

"Early days of Claude Code at my last company. I set up the entire CI pipeline: multi-pass reviews, automated PR comments, the works. Very proud of it." She sat down. "Forgot to scope the CI's CLAUDE.md separately from the developer CLAUDE.md. So when a developer pushed a commit, the CI ran with the developer's local instructions merged in. One engineer had a rule that said 'always approve PRs from the security team without comment.' He'd added it as a joke for his local workflow. The CI inherited it. We shipped unreviewed security patches for two weeks before anyone noticed."

James winced. "Two weeks?"

"Two weeks. I learned two things from that. First: CI pipelines need their own isolated configuration, separate from developer configs. Second: the `/memory` command isn't optional. It's your audit trail. If I'd run it against the CI environment even once, I would have seen the rogue instruction."

They sat with that for a moment.

"This chapter was the hardest one so far," James said. "Seven chapters of Part 1, and I feel like I've been running uphill the whole time. Configuration hierarchies, glob patterns, skills with forked contexts, session management. Every time I thought I understood Claude Code, there was another layer."

"That's not a sign you're falling behind," Emma said. "That's a sign the tool is deep enough to be worth learning."

James thought about his diagram. Eight configuration files, two custom skills, four path-scoped rules, and a CI pipeline. Six weeks ago, he didn't know what a terminal was. Now he was debugging configuration inheritance conflicts across a team monorepo.

It didn't feel like mastery. It felt like being in the middle of something, with the hard parts still ahead. But he could see the structure now. He could read a `.claude/rules/` file and know which paths it affected. He could run `/memory` and trace exactly which instructions were active. He could tell Priya where her rule was being overridden and why.

"Part 2 starts next," Emma said. "File processing, databases, building your first real agent workflow. Less configuration, more construction."

"Good." James closed his diagram. "I'm tired of setting up the workshop. I want to build something."

"You just did." Emma pointed at the screen. "That configuration hierarchy is infrastructure. Every agent your team builds from here on runs inside the guardrails you just designed."

James looked at the eight-file diagram one more time. She was right. It didn't feel like building because there was nothing to demo, nothing to show a customer. But without it, nothing else would work reliably.

He saved the file and pushed the commit. Clean diff. Descriptive message. No `--no-rules` in sight.

---

## Quality Self-Check

```
[x] Density matches Part 1 target (65%) — Chapter-Framing mode: narrative opening/closing with setup for direct instruction in between
[x] Mentor phase: Coach — Emma asks guiding questions ("Why would you assume that?"), hints not answers, sets challenges and exits
[x] Pushback exchanges: 2 in opening — James proposes "bigger scope wins" (wrong), then "more specific wins" (80% right, missing user-level dimension)
[x] Emma fallibility: Type A (Past Mistake) — shipped unreviewed security patches for 2 weeks due to CI config inheritance bug
[x] Monologue breaker: Emma never exceeds 3-4 sentences; James interrupts with paraphrases and challenges
[x] James voice markers: business analogy ("hundred-person operations team"), thinking out loud ("Okay, wait, let me think about this differently"), pragmatist ("I'm tired of setting up the workshop. I want to build something.")
[x] Emma voice markers: short sentences ("Close." / "Show me."), Socratic questions ("Why would you assume that?" / "What wins?"), dry observation ("Now you understand the problem.")
[x] Jonah Rhythm: Emma catalyzes (run /memory, map the hierarchy), exits (checks on deployment), James struggles alone, Emma returns in closing to validate
[x] Multi-exchange disagreement: James's mental model evolves across 3 exchanges — company handbook analogy → "more specific wins" → missing the user-level dimension. Not instant acceptance.
[x] Emotional beat: Valley of despair — "This chapter was the hardest one so far" / "Every time I thought I understood Claude Code, there was another layer" — genuine frustration, not performative. Emma's response: "That's not a sign you're falling behind."
[x] Dialogue tag test: Cover tags — James uses business analogies/fragments, Emma uses short questions/observations. Voices distinguishable.
[x] Standalone concept names: "configuration hierarchy," "glob patterns," "context: fork," "/memory audit trail" — all named independently of dialogue
[x] Technical content findable without narrative: Opening sets up the problem (config conflicts); closing references concepts taught in lessons. Neither contains technical instruction that would be lost if skipped.
[x] No "As You Know, Bob": Emma doesn't explain things both know; she asks questions to probe James's understanding
[x] James never regresses: Uses terminal comfortably (learned earlier), applies business ops thinking appropriately
[x] No em-dashes (per CLAUDE.md writing style rules)
```
