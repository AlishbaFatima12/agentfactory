# When the Traceback Talks Back

Emma pulled up a chair next to James and set her laptop on the desk. The screen showed a short Python script and, below it, a wall of red text.

"Alright, here's a real one," she said. "A function that's supposed to read a CSV of quarterly sales figures and return the top three products by revenue. It runs, but the numbers it spits out are wrong. The traceback only fires on certain input files." She pointed at the error. "Your job: figure out why the output is silently wrong on most files, and why it explodes on this one. Start from the traceback and work backward."

James leaned in, scanning the screen. A `TypeError: unsupported operand type(s) for +: 'int' and 'str'` sat at the bottom of the stack trace.

"One more thing," Emma added, already standing. "Read every line of that traceback before you touch the code. The traceback is a map, not a wall. I have a architecture review across the hall; I'll be back in about twenty minutes."

She left. The room got quieter.

---

James stared at the traceback. His first instinct was to Google the error message, but Emma's instruction echoed: read every line first. He started from the bottom and worked up.

The `TypeError` pointed to line 24, inside a list comprehension that summed revenue values. He opened the CSV in a text editor. The revenue column looked like numbers, but a few rows had dollar signs and commas baked in: `$1,250.00` instead of `1250.00`. Strings masquerading as numbers.

"So it works when every row is clean, and blows up when even one row has formatting," he muttered.

He added a `print()` call above line 24 to inspect the values before summation. Sure enough, most entries came through as floats, but the formatted ones stayed as strings. The `csv.reader` didn't care; it handed back whatever was in the cell.

That explained the crash. But Emma had said the output was also _silently wrong_ on files that didn't crash. James opened a second CSV, one that ran without errors. He added the same `print()` call. Every value was a float this time, but the function returned `['Widget A', 'Widget C', 'Widget B']` when the correct ranking, by his manual check in a calculator, should have been `['Widget C', 'Widget A', 'Widget B']`.

He stared at the sorting logic. The function used `sorted()` with a lambda, but the lambda pulled from a dictionary that was built inside a loop. James traced the loop by hand, pencil on a sticky note, writing each key-value pair as it would be inserted. Halfway through, he saw it: the loop overwrote duplicate product names instead of accumulating their totals. A product appearing in two quarters got only its last quarter's revenue, not the sum.

"Dict overwrites," he said aloud. "It's not adding, it's replacing."

He changed the assignment to use `dict.get()` with a default of zero, then added the new value to whatever was already stored. He ran the clean CSV again. The ranking matched his manual calculation now.

The crash-prone CSV still needed handling. James wrote a small helper function that stripped dollar signs and commas, then wrapped the `float()` conversion in a `try/except ValueError` so a truly unparseable cell would get logged and skipped rather than blow up the whole run. He re-ran both files. Clean output, correct rankings, no crash.

He sat back, satisfied but not certain. The `try/except` felt like a band-aid. What if silently skipping a bad row hid a bigger data problem?

---

Emma came back, coffee in hand. She looked at his screen, scrolling through the changes without saying anything for a moment.

"Good. You found both bugs, not just the loud one. That's the real skill: the crash gets your attention, but the silent corruption is where the damage lives." She tapped the `try/except` block. "You're right to feel uneasy about this. Swallowing the exception keeps the program running, but in a production pipeline you'd want that logged to a monitoring system so someone investigates the data source. A silent skip is fine for exploration; it's dangerous for automation."

She pointed at his `dict.get()` fix. "Clean solution. The other option is `collections.defaultdict(float)`, which handles the zero-initialization for you. Worth knowing, but what you wrote is more explicit, and explicit wins when you're learning."

James nodded. "The traceback-as-map thing helped. I almost skipped straight to the error message, but reading the full chain showed me exactly which function call was the entry point."

"That's the habit," Emma said. "Most people treat tracebacks like a fire alarm: loud, scary, and they just want it to stop. But every frame in that stack is a sentence in a story. Read the story."
