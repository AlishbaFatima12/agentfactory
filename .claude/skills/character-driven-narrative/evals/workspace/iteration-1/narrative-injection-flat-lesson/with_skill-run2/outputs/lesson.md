## Using Claude Code

James opened his laptop and stared at the desktop. He had installed Claude Code the night before, following the setup guide line by line. Now it sat there, a CLI tool with a blinking cursor, and he had no idea where to start.

"You look stuck," Emma said, dropping into the chair across from him.

"I installed it. I ran through the checklist. But it's just... a terminal." He gestured at the screen. "There's no button that says 'do the thing.' At my old company, every tool had a dashboard. A sidebar. Something to click."

"Open your terminal. Type `claude`."

James typed it. The interface loaded.

"That's it?" he said. "That's the whole tool?"

"That's the whole tool. No dashboard. No sidebar." Emma leaned back. "What's the first thing you'd do if someone handed you a new piece of software at work and said 'figure it out'?"

James thought for a second. "I'd look for a help menu."

"Try it."

Claude Code is a CLI tool that runs in your terminal. To start it, type `claude` in your terminal.

### Basic Commands

The most common commands are:

- `/help` — Shows available commands
- `/clear` — Clears conversation history
- `/compact` — Summarizes and compresses context
- `/cost` — Shows token usage for the session

James typed `/help` and scanned the output. Four commands stood out.

"Okay, `/help` and `/clear` I get. Those are obvious," he said. "But `/compact`? What does 'summarizes and compresses context' actually mean?"

"How big is your terminal's memory?"

"I don't know. Big?"

"Finite. Every message you send, every file you read, every response you get back: it all eats context. `/compact` takes everything so far and squeezes it down so you can keep working without hitting the wall."

James nodded slowly. "So it's like when my old team used to do a five-minute standup at the start of every meeting instead of replaying the entire last meeting. Catch everyone up in shorthand."

"Close enough." Emma paused. "And `/cost`?"

"Shows token usage. Tokens are like... words? Roughly?"

"Roughly. It's how the model meters what you've spent in a session. If you're burning through tokens on long files, `/cost` tells you before you're surprised."

James typed `/cost`. The number was small. "That'll change," Emma said.

### Reading Files

"All right," James said. "So I have this config file I've been meaning to look at. How do I get Claude Code to open it? Is there a `read` command, or do I pass a flag, or..."

Emma held up a hand. "Describe what you want."

"What?"

"Just tell it. 'Read my config file.' In plain language."

Claude Code can read any file on your machine. Simply ask it to read a file and it will use the Read tool automatically. You do not need to specify the tool -- just describe what you want.

James typed: _Read the file at config.yaml and tell me what each section does._

The response came back in seconds, with the file contents and a breakdown of every section.

"Wait, I didn't pick a tool. I didn't say 'use Read.' How did it know?"

"It matched your intent to the right tool. You said 'read,' it used Read." Emma shrugged. "You don't tell a colleague which hand to use when you ask them to grab a file off the shelf."

"Okay, but what if I want it to do something more specific? Like only read part of the file?"

"Then say that. 'Read lines 40 through 60 of config.yaml.' It'll figure it out."

James tried it. It worked. He sat back, the beginning of a grin on his face. "I actually expected that to be harder."

"Most people do."

### Making Edits

James scrolled through the config output. "There's a typo in line 12. `databse` instead of `database`. Can I just... tell it to fix that?"

"Try it."

"What if it breaks something?"

Emma leaned forward. "What did you do at your old job when someone handed you a contract revision?"

"Read the redline. Checked every change before signing."

"Same thing. Tell Claude Code what to change. It'll show you the diff. You review it before accepting."

To edit files, describe the change you want. Claude Code will use the Edit tool to make precise string replacements. Always review the diff before accepting.

James described the fix. Claude Code showed him the diff: one line, one word, `databse` replaced with `database`.

"That's clean," James said. "But hold on, I need to be honest. I half-expected it to rewrite the whole file. In my last job, our automated tools would 'fix' one thing and silently change three others."

Emma almost smiled. "I've had that happen. Shipped a config change once that was supposed to update one timeout value. The tool reformatted the entire file. Broke two services downstream." She tapped the screen where the diff was displayed. "That's why you read the diff. Every time. Not most times."

James accepted the change. One word. Nothing else touched.

---

"Four commands, reading files, making edits," James said, counting on his fingers. "That's it so far?"

"That's the foundation. Everything else builds on those three interactions: you ask, it acts, you verify." Emma stood up and grabbed her coffee. "Try something on your own. Pick a file you've been meaning to clean up. Read it, find what's wrong, fix it. I'll check your work in fifteen minutes."

James pulled up his project directory. He had a README that hadn't been updated in two months. He typed his first prompt without anyone watching over his shoulder.

When Emma came back, he had three clean diffs waiting for review. Two were correct. The third had changed a heading he hadn't intended to touch.

"Caught it before I accepted," he said.

"Good. That instinct, checking before accepting, is the whole skill. The commands will get more complex. That habit stays the same." She set down her coffee. "Next section, we'll talk about how Claude Code handles context, the thing that `/compact` was managing. You'll need to understand that before your sessions get longer."
