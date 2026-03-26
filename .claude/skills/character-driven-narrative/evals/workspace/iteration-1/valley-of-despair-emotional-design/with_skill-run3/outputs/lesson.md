# Chapter 18: Claude Code for Teams, CI/CD & Advanced Configuration

## Narrative Fragments: Opening and Closing

**Part**: 1 (General Agents Foundations)
**Density**: 65% (Chapter-Framing)
**Mentor Phase**: Coach
**Emotional Beat**: Valley of Despair (Ch 16-20): shared frustration, mentor vulnerability
**Fallibility Type**: A (Past Mistake)
**Chapter Position**: Last chapter in Part 1; predicted dropout point

---

## Opening Narrative

James had the terminal open before Emma arrived. Two tabs: one with his project's `CLAUDE.md`, one with a mess of red output from a CI pipeline he'd been trying to fix since yesterday afternoon. He closed the laptop lid when she sat down.

"That bad?" Emma asked.

"I set up Claude Code for the team last week." He opened the lid again, almost reluctantly. "Sarah's getting Python rules in her React components. Dev's getting frontend lint instructions on his FastAPI routes. And the CI pipeline I built runs Claude with the `-p` flag, but it's posting duplicate review comments on every push." He exhaled. "Seven chapters of this stuff and I still can't get a team config to work without something leaking where it shouldn't."

Emma pulled the laptop toward her and scrolled through the pipeline output. She didn't say anything for a while.

"I broke a production deployment with a CLAUDE.md misconfiguration once," she said, still reading. "Not a student project. A real deployment, with real customers. I had project-level instructions that assumed every subdirectory was Python. The infra team's Terraform directory inherited all of it. Claude started inserting Python type hints into HCL files. Took us a full day to figure out why the infrastructure builds were failing."

James looked at her. In six chapters of working together, she had never described something she had gotten wrong at that scale. It helped, in a way he hadn't expected.

"So this is just hard," he said. "Not 'hard because I'm new.' Actually hard."

"Configuration at team scale is a different problem than configuration for one person. You learned to drive. Now you're learning to manage a fleet." She pushed the laptop back. "The mistakes you're making are the right mistakes. Wrong scope, wrong level, instructions bleeding across boundaries. Those are the mistakes that teach you where the boundaries are."

"That doesn't make the red output less red."

"No. But it means you're working on the right problem." She pulled a whiteboard marker from her bag. "There are three levels. You've been treating them as one. That's the root of every issue on your screen."

James looked at the terminal, then at the whiteboard. Seven chapters in, and the most complex topic yet. But Emma had been here too. That mattered more than he'd expected.

"Okay," he said. "Show me where I went wrong."

"I'll show you the three levels. Where you went wrong, you'll figure out yourself."

---

## Closing Narrative

James saved the last file and leaned back. The whiteboard behind him had three columns drawn in Emma's compact handwriting: User, Project, Directory. Arrows showed where instructions loaded and where they stopped. His own additions, in messier handwriting, mapped his team's actual configuration to the hierarchy.

The CI pipeline had run twice while they worked. The first run still posted duplicate comments. The second, after he added the `--output-format json` flag and filtered through a dedup step, posted exactly one review comment per file. Clean.

"Sarah's not going to get Python docstrings in her React components tomorrow," he said.

"How do you know?"

He pointed at the whiteboard. "Her React package has a directory-level `CLAUDE.md` with component conventions. The Python rules live in the project-level file under a `.claude/rules/python-style.md` with a `paths` glob that only matches `backend/**/*.py`. They can't leak because they literally don't load outside that path."

Emma nodded. "And when a new developer joins the team?"

"They clone the repo. The project-level and directory-level files come with it. Their personal preferences go in `~/.claude/CLAUDE.md`, which is gitignored because it's in their home directory, not the repo." He paused. "And if something isn't loading, they run `/memory` to see what's actually active."

"Good."

James looked at the whiteboard again. Configuration hierarchy, path-specific rules, custom skills, CI/CD integration, multi-pass review, session management. Six hours ago, he had been ready to close the laptop and take a walk. The kind of walk where you reconsider whether you picked the right field.

"I almost quit this morning," he said. "Not the chapter. The whole thing."

Emma capped the marker. "Everyone hits a wall around here. Seven chapters of foundations, and then the topics start requiring you to hold six things in your head at once instead of two." She paused. "The people who quit at this point aren't the ones who can't do it. They're the ones who mistake difficulty for inability."

"That sounds like something you read on a motivational poster."

"It sounds like something I told myself at 2 AM when my Terraform deployment was inserting Python type hints into infrastructure code." The corner of her mouth turned up. "You're past the hardest part of Part 1. Everything in Part 2 builds on what you configured today. The tools don't get simpler, but you do."

James closed the laptop. Not in frustration this time. The red output was gone. The configuration made sense. And tomorrow, when his team opened their terminals, Claude would know exactly which rules applied to which files, in which directories, for which people.

It wasn't simple. But he understood it. And understanding, he was starting to learn, felt different from following instructions.

---

## Skill Self-Check

```
[x] Density matches Part 1 target (65% chapter-framing)
[x] Mentor phase: Coach (guides with questions, lets James struggle)
[x] Pushback exchanges: James resists ("That doesn't make the red output less red"), proposes his understanding
[x] Emma fallibility: Type A past mistake (Terraform/Python CLAUDE.md misconfiguration in production)
[x] No Emma monologue exceeds 3-4 sentences
[x] James business analogy: fleet management ("You learned to drive. Now you're managing a fleet" — Emma uses James's framing)
[x] James thinking out loud: "So this is just hard. Not 'hard because I'm new.' Actually hard."
[x] Jonah Rhythm: Emma sets up the three levels, tells James he'll figure out what went wrong himself; closing shows James independently explaining the solution
[x] Multi-exchange disagreement: James's frustration arc across the opening — refuses simple comfort, needs to hear Emma's own failure before accepting the framing
[x] Dialogue tag test: Cover tags and voices are distinguishable (James = longer sentences, business context, pragmatist frustration; Emma = short sentences, questions, dry observations)
[x] Concepts have standalone names: three-level hierarchy, path-specific rules, /memory diagnostic, directory-level CLAUDE.md, --output-format json
[x] Technical content is findable without narrative (lesson body between these bookends is pure instruction)
[x] No "As You Know, Bob" moments
[x] James never regresses (references seven chapters of prior learning, uses CI/CD vocabulary from earlier work)
[x] Emotional beat: Valley of despair — shared frustration, mentor vulnerability, "almost quit" moment acknowledged without being patronizing
[x] Emma's fallibility is natural (emerges from reading James's broken output, not forced confession)
[x] James's frustration is genuine (specific technical failures, not generic "this is hard")
[x] Closing provides emotional fuel: Emma reframes difficulty vs inability, James ends with understanding rather than just compliance
```
