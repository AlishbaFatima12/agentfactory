<!-- Narrative fragment: Jonah Rhythm full cycle — Debugging Python errors -->
<!-- Part 1, Chapter 15 | Density: 65% | Mentor phase: Coach | Emotional arc: Growing confidence -->
<!-- Patterns applied: P5 (Jonah Rhythm), P3 (Monologue Breaker), P4 (Voice Markers), P7 (Emotional Beat) -->

## Tracking Down the Bug

Emma pulled up the traceback on James's screen and read it once, top to bottom. "You have a `TypeError` on line 14. The function expects an integer, but it's getting a string." She tapped the line number. "What's your first move?"

"I'd just fix line 14," James said. "Cast it to `int` and move on."

"That would silence the error. But would it fix the bug?"

James frowned. He hadn't thought about the difference.

"The traceback is a map, not a diagnosis," Emma said. "It shows you where Python gave up. The actual problem started earlier." She stood up and reached for her jacket. "I need to sit in on the platform standup. Read the traceback again, but this time start from the bottom and work up. Each frame is a breadcrumb. Find the frame where good data turned into bad data. That's your real bug."

She paused at the door. "Don't fix anything yet. Just find it."

---

James stared at the terminal. Six frames in the traceback, stacked like a chain of blame. He started at the bottom, the way Emma said.

Frame 6: `calculate_total(price)` — that was line 14, where the `TypeError` fired. The function wanted a number. It got `"29.99"`. Okay. So the string came from somewhere upstream.

Frame 5: `process_order(item)` — this function pulled `price` from a dictionary. James opened the file and found the line. `price = item["price"]`. Nothing wrong there, assuming the dictionary had the right type. But who built the dictionary?

He scrolled up to frame 4. `parse_csv_row(row)`. There it was. The CSV reader returned every field as a string. No conversion anywhere. The data left `parse_csv_row` as text and traveled through two more functions before something finally complained.

James leaned back. "Okay, so the real bug isn't on line 14. It's in the parser. Line 14 is just where Python ran out of patience."

He thought about it. In his old operations job, this happened constantly: a supplier would submit an invoice with the wrong format, and nobody caught it until accounting tried to run the totals three weeks later. The fix was never in accounting. The fix was at intake.

_The traceback's bottom frame is like accounting's error report. The parser is like the intake desk._

He opened `parse_csv_row` and added `int(row["price"])` right where the data first entered the system. Then he ran the script.

A new error. `ValueError: invalid literal for int() with base 10: '29.99'`.

James stared at it. Twenty-nine ninety-nine. That was a float, not an integer. He changed `int` to `float`.

Green. No errors. But something nagged at him. He had fixed the symptom in the right place this time, at the intake point, but he'd guessed the type. What if another row had a price like `"free"` or an empty string? His fix would break again.

He wrote a quick test in his head: what happens when `row["price"]` is `""`? He tried it. `ValueError` again. So his fix was brittle. It handled the happy path but nothing else.

James opened his notebook and wrote:

> Bug location: `parse_csv_row`, not `calculate_total`.
> Fix: convert at intake, not at point of failure.
> Problem: no validation. `float()` crashes on bad input.
> Need: error handling or input validation before conversion.

He had the shape of the real solution, even if the code wasn't complete.

---

Twenty minutes later, Emma dropped into the chair next to him. "Show me."

"The bug wasn't on line 14. It was in `parse_csv_row`. The CSV reader returns strings, and nothing converted them before they hit `calculate_total`."

"Good. Where'd you put the fix?"

"In the parser. Right where the data enters the system." James pulled up the file. "But I have a problem. My conversion works for `'29.99'`, but if the field is empty or says something like `'free'`, it blows up."

Emma nodded. "So you found the bug, found the right layer to fix it, and identified the gap in your fix. That's three steps further than most people get on their first traceback."

"I still don't know how to handle the bad input, though."

"You will. That's a try/except block, and we'll get there next lesson." She pointed at his notebook. "That log you wrote, the one that separates location from fix from remaining problem, keep doing that. I know engineers with ten years of experience who still skip that step and end up chasing the same bug twice."

James looked at his notes. Two weeks ago, a traceback would have sent him straight to Stack Overflow. Today he'd traced the data flow himself, found the real source, and identified what he still didn't know. The answer wasn't complete, but the process was his.

"I actually predicted where the bug was before I confirmed it," he said. "Frame 4 felt wrong as soon as I read it."

Emma almost smiled. "That's called intuition. It comes from reading tracebacks, not from skipping them."
