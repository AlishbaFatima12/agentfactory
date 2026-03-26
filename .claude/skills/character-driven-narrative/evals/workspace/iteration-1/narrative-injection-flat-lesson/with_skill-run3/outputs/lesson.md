## Using Claude Code

James dropped into the chair next to Emma and set his laptop on the table. "I keep hearing people talk about Claude Code. I've been using the web interface for everything. What am I missing?"

Emma didn't look up from her terminal. "Open a terminal."

"I have a terminal open."

"Type `claude`."

James typed it. A new session started directly in his terminal window. No browser. No tabs. No copy-pasting between windows.

"Wait, so basically... it's Claude, but it lives in my terminal? Right where my code already is?"

"Where your files are. Where your git history is. Where your project context is." Emma turned to face him. "What's the first thing you do when you start a new task at work?"

James thought about it. "I open the project folder. I look at what's already there."

"Claude Code does the same thing. It sees your files. It reads them. It edits them. You talk to it in natural language and it uses the right tools automatically."

"Okay, but how do I even know what it can do? Like, is there a menu?"

Emma almost smiled. "There's something better."

### Basic Commands

"Type `/help`."

James typed it. A list of available commands appeared.

"Four commands cover ninety percent of what you'll need day to day," Emma said.

The most common commands are:

- `/help` -- Shows available commands
- `/clear` -- Clears conversation history
- `/compact` -- Summarizes and compresses context
- `/cost` -- Shows token usage for the session

James scrolled through the list. "What's `/compact` actually doing? Like, is it deleting things?"

"Not deleting. Compressing. Think of it like your old quarterly reports."

"What do you mean?"

"You had a hundred pages of transaction records. When you sent the summary to your VP, did you send the hundred pages?"

"No, I sent a two-page executive summary with the key numbers."

"That's `/compact`. Claude summarizes the conversation so far and keeps the essential context. The raw history is gone, but the understanding stays."

James nodded slowly. "Okay, let me make sure I have this. `/clear` is throwing away the conversation entirely. `/compact` is writing the executive summary and shredding the originals."

"Close." Emma paused. "One difference: `/clear` gives you a completely blank slate. `/compact` gives you a shorter conversation that still remembers what you've discussed. Which one would you use after finishing a task and starting something totally unrelated?"

"Clear. Because the old context would just be noise."

"And if you're halfway through a big task and the conversation is getting long?"

"Compact. Keep the summary, lose the weight." James leaned back. "That's actually less confusing than I expected."

### Reading Files

"Here's where it gets interesting," Emma said. "Ask it to read a file. Any file in your project."

"What do I type? Is there a special syntax, like `read file.py` or something?"

"Just ask it. In English."

James frowned. "That seems too simple. What if it reads the wrong file?"

"What if it does? You'll see exactly what it read. Try it."

Claude Code can read any file on your machine. Simply ask it to read a file and it will use the Read tool automatically. You do not need to specify the tool; just describe what you want.

James tried it. He typed "show me the contents of main.py" and Claude Code displayed the file. No path flags. No command syntax.

"Okay, that worked. But here's my thing: at my old job, every tool had a different way of doing the same basic operation. Open a file in the CRM: three clicks and a dropdown. Open it in the project tracker: search bar, filter, scroll. Here I just... said what I wanted?"

"Now you're seeing it." Emma pulled up her own terminal. "The tools exist underneath. Read, Edit, Grep, Glob. Claude Code picks the right one based on what you describe. You don't manage the tools; you describe the outcome."

"I've spent my whole career learning which buttons to click for each system. You're telling me that layer just... goes away?"

"For a lot of tasks, yes. Not all. You'll still need to understand what the tools do, because when something goes wrong, you need to know where to look. But the default interaction is: say what you want, review what it did."

### Making Edits

Emma stood up. "I need to check on a deploy. Try making an edit to a file before I get back. Describe the change in plain language. When it shows you the diff, read it carefully before you accept." She picked up her coffee. "I'll be back in ten minutes."

James stared at the terminal. He had a Python file open from the reading exercise. There was a function with a hardcoded string that should probably be a parameter. He typed: "Change the greeting function to accept a name parameter instead of using the hardcoded string."

Claude Code proposed an edit. A diff appeared: red lines for what would be removed, green lines for what would be added. The function signature changed from `def greeting():` to `def greeting(name: str):`, and the hardcoded `"Hello, World"` became `f"Hello, {name}"`.

To edit files, describe the change you want. Claude Code will use the Edit tool to make precise string replacements. Always review the diff before accepting.

James reviewed the diff line by line. The change was clean. He accepted it.

Then he tried something bigger. "Rename the function from `greeting` to `welcome_message` everywhere in the file."

The diff showed every occurrence updated: the function definition, the docstring, two call sites. Nothing missed.

He was about to accept when he paused. One of the call sites passed no arguments. But the new function signature required a `name` parameter. That would break.

James rejected the edit. He revised his prompt: "Rename the function from `greeting` to `welcome_message` everywhere, and for the call on line 24 that passes no arguments, add a default parameter of 'World' to the function signature."

A new diff appeared. This time it was right.

When Emma came back, James showed her the terminal. "I caught a bug in its suggestion."

"What kind?"

"It renamed everything correctly, but one call site didn't pass the new required parameter. So I rejected it and asked again with the fix included."

Emma set down her coffee. "That's the whole workflow. Describe, review, decide. The review step isn't optional. I once accepted a rename without checking and it updated a string inside a comment that happened to match the old function name. Broke nothing, but it was sloppy. I should have caught it."

James looked at her. She didn't usually admit mistakes like that. It helped, somehow, knowing that even she had to review carefully.

"So the rule is: never accept a diff you haven't read."

"The rule is: the AI proposes. You decide. That's true for reads, for edits, for everything."

---

James closed his laptop halfway. Four commands, file reading, and editing. No special syntax, no memorized flags. Just describing what he wanted and reviewing what he got.

It felt different from every tool he'd learned before. Not because it was more powerful, but because the interface was a conversation instead of a control panel. He still had to think. He still had to check the work. But the translation layer between what he wanted and how to ask for it had gotten thinner.

He opened his laptop again. He had more files to look at, and now he knew how to ask.
