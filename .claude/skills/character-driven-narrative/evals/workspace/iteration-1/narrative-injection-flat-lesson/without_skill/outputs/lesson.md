## Using Claude Code

James stared at the terminal prompt blinking on his screen. After fifteen years in corporate finance, the black rectangle felt like a portal to a different world. He had GUIs for everything: Excel, Salesforce, Slack. This was just... a cursor.

"You look like I handed you a blank spreadsheet with no column headers," Emma said, pulling up a chair beside him.

"Worse," James said. "At least a spreadsheet has cells. This is just... nothing."

Emma smiled. "That nothing is the most powerful interface you'll use in this program. Claude Code is a CLI tool that runs in your terminal. To start it, type `claude` in your terminal."

James typed the command and watched the session initialize. "Okay. It's running. Now what?"

"Now you learn the handful of commands that will become second nature within a week."

### Basic Commands

The most common commands are:

- `/help` -- Shows available commands
- `/clear` -- Clears conversation history
- `/compact` -- Summarizes and compresses context
- `/cost` -- Shows token usage for the session

"Four commands?" James asked. "That's it?"

"Those are your daily drivers," Emma said. "Think of `/help` as your safety net. When you forget something, it catches you. `/clear` is a fresh start, like closing all your browser tabs and beginning again. `/compact` is the one most people underestimate."

"What does it do, exactly?"

"Conversations with Claude Code accumulate context. After a long session, that context gets heavy. `/compact` summarizes everything so far and compresses it, so you keep the important parts without the overhead." She pointed at the last command on the list. "And `/cost` tells you how many tokens you've burned. It is your session meter."

James nodded slowly. "So `/compact` is like archiving old emails to keep your inbox manageable."

"Exactly that analogy. You're already thinking in the right patterns."

### Reading Files

"Here's where it starts to feel like magic," Emma said. "Ask Claude Code to read a file. Any file on your machine."

James hesitated. "I just... ask? In plain English?"

"In plain English."

Claude Code can read any file on your machine. Simply ask it to read a file and it will use the Read tool automatically. You do not need to specify the tool -- just describe what you want.

James typed: _Show me the contents of my config file._ Claude Code opened the file and displayed it line by line.

"I didn't tell it which tool to use," James said, sitting back.

"You don't need to," Emma said. "Describe the outcome you want. Claude Code selects the right tool. That's the mental shift: you stop thinking about how and start thinking about what."

### Making Edits

"Reading is one thing," James said. "But what about changing files? I'm used to opening a file, scrolling to the line, editing, saving. There's a visual feedback loop."

"The feedback loop still exists. It just looks different."

To edit files, describe the change you want. Claude Code will use the Edit tool to make precise string replacements. Always review the diff before accepting.

"Precise string replacements," Emma repeated, leaning forward. "Not 'rewrite the whole file.' Claude Code finds the exact text you want to change and replaces it. Then it shows you a diff: what was there before, what's there now. You review it, and only then do you accept."

"So nothing changes until I approve?"

"Nothing changes until you approve. That diff review step is your seatbelt. Never skip it, especially early on. You'll develop an instinct for scanning diffs quickly, but right now, read every line."

James made the edit, reviewed the diff, and accepted. The file updated.

---

Emma closed her laptop halfway and turned to face him. "You just read files, edited files, and managed a session, all without leaving the terminal. How does it feel?"

James thought about it honestly. "Like I learned four things but they connect to everything else."

"That's the right feeling," Emma said. "What you covered today is the surface, but it's the surface that every deeper skill rests on. Next, we'll look at how Claude Code handles project context: how it understands your codebase, not just individual files. That's where the real leverage starts."

James saved his notes and typed `/cost` one more time, just to see the meter. Old habits from finance: always know what you've spent.
