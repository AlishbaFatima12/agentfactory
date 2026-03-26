## Using Claude Code

James opened a fresh terminal and stared at the blinking cursor. He had spent the last two weeks reading about AI agents, studying specs, watching Emma diagram architectures on whiteboards. Now the cursor was waiting for him to do something.

"Type `claude`," Emma said, pulling up a chair beside him.

He typed it. A new interface loaded inside the terminal, no browser, no desktop app.

"Wait, it just runs here? In the terminal?" James leaned back. "At my old job we had a whole procurement process for new software. Installations, IT tickets, license keys. This is just... a command."

"That's the point. It lives where your code lives."

James thought about that. Every other tool he'd learned so far had its own window, its own interface to memorize. This one sat inside the same terminal where he already ran Git and Python. "Okay, let me make sure I have this. It's not a separate application. It's a CLI tool that works right alongside everything else I'm already doing."

"Right. And it stays in context because it can see your project files, your directory structure, your git history. It's not guessing what you're working on."

"That sounds useful, but also a little terrifying," James said. "How do I know what it can do without accidentally breaking something?"

Emma almost smiled. "Start with the four commands you'll use every session."

### Basic Commands

The most common commands are:

- `/help` -- Shows available commands
- `/clear` -- Clears conversation history
- `/compact` -- Summarizes and compresses context
- `/cost` -- Shows token usage for the session

James scanned the list. "So `/help` is my safety net. If I forget everything else, that one gets me back on track."

"Exactly."

"And `/clear` is just starting over? Like closing all my browser tabs and pretending Monday didn't happen?"

"Close. It clears the conversation history, not your files. Nothing on disk changes."

"Okay, but what about `/compact`?" James frowned. "Why would I want to compress context? Isn't more context better?"

Emma paused. "Not always. Long conversations accumulate noise. Old questions, dead ends, corrections. `/compact` strips that down to what matters. Think of it like cleaning your desk at the end of each day so you can find things tomorrow."

"And `/cost`?"

"Tokens cost money. `/cost` shows you what the session has used so far."

"That's like checking the meter in a taxi," James said. "Good to know before the ride gets expensive."

### Reading Files

Claude Code can read any file on your machine. Simply ask it to read a file and it will use the Read tool automatically. You do not need to specify the tool -- just describe what you want.

James squinted at the screen. "Hold on. I don't have to say 'use the Read tool'? I just say 'read my config file' in plain English?"

"Try it."

He typed: _Show me what's in pyproject.toml_. Claude Code opened the file and displayed its contents.

"Okay, but how does it know which tool to use? What if I say 'look at' instead of 'read'?"

"What do you think?"

James tried it. Same result. "It figured out what I meant from context. So the tool selection is invisible. I describe the goal, it picks the method."

"Now you're getting it. You talk to it like a colleague, not like a command line."

James sat with that for a moment. At his old company, every system had its own syntax, its own special keywords. Miss one flag and the whole thing failed. This felt different: describe what you want, let the tool figure out how.

### Making Edits

To edit files, describe the change you want. Claude Code will use the Edit tool to make precise string replacements. Always review the diff before accepting.

"Always review the diff," James read aloud. "You really mean always?"

"I shipped a broken import to production once because I accepted a change without reading it," Emma said. "Cost the team half a day tracking down why the server wouldn't start. The diff was six lines. I would have caught it in ten seconds."

James looked at her. She didn't talk about her own mistakes often. "So the diff is like... the final inspection before a shipment leaves the warehouse. You don't skip it just because the packing looked right."

"That's a good way to put it. I never framed it that way." She stood up. "You have the four commands, you know how to read files, you know how to request edits. Try building something small. I need to check on a deployment. I'll be back in fifteen minutes."

James watched her leave. He looked at the terminal. The cursor blinked. He typed `/help` just to see the full list, then started reading through the options one by one. Three commands in, he realized he already knew what most of them did from the conversation. The ones he didn't recognize, he could ask about.

He opened a Python file he'd been working on, described a change to Claude Code, and watched the diff appear. Six lines, just like Emma's story. He read each one before accepting.

When Emma came back, James had made four edits and checked every diff.

"How did it go?" she asked.

"I caught a weird indentation on the third one. Fixed it before accepting."

Emma nodded. "That's the habit. Review every diff, catch the small things before they become big things." She pulled up her chair again. "Next section, we'll look at how Claude Code handles more complex operations: multi-file edits, running commands, and working with your project structure."

James closed the diff viewer. Four commands, file reading, careful edits. It wasn't much, but it was a foundation he understood, not one he'd memorized from a tutorial and would forget by Thursday.
