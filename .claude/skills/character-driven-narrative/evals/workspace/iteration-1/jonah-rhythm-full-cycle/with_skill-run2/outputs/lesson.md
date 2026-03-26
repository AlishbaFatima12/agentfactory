<!-- Narrative fragment: Jonah Rhythm full cycle — Debugging Python Errors -->
<!-- Part 1, Chapter 15 | Density: 65% | Mentor Phase: Coach | Emotional Arc: Growing confidence -->
<!-- Pattern coverage: P5 (Jonah Rhythm full cycle), P3 (monologue breaker), P4 (voice markers both characters), P7 (progress callback) -->

Emma set her laptop on the desk and turned the screen toward James. Four lines of Python glowed against the dark terminal background, followed by a red `TypeError` that spilled across three more lines.

"Read the traceback," she said. "Tell me where the bug lives."

James leaned forward. He had seen tracebacks before; they no longer made his stomach drop the way they had in Chapter 12. But this one had two file references, and the line numbers did not match what he expected. "It says line 14, but line 14 is just a variable assignment. That can't be where it breaks."

"Can't it?"

"Okay, wait. Let me make sure I have this." He pointed at the screen. "The traceback reads bottom-up, right? So the actual crash is on line 14, but the call that triggered it started on line 8."

"Close. But not quite." Emma pulled her jacket off the chair. "Here's what I want you to do. Add a `print` call before line 14 that shows the type of every variable in that expression. Run it again. See what the traceback tells you then." She picked up her coffee mug. "I need to hop on a standup call. Fifteen minutes."

James watched her leave. He looked back at the terminal.

---

He typed the `print` statement the way Emma had described: `print(type(price), type(quantity))`. He ran the script. The output appeared above the traceback: `<class 'str'> <class 'int'>`.

A string. `price` was a string.

He stared at line 6, where `price` was assigned from the CSV row. Of course it was a string; everything that came out of a CSV was a string. He knew that. He had dealt with it two lessons ago when parsing dates. But here, buried inside a multiplication on line 14, the string slipped through because nothing converted it first.

James thought about it. At his old logistics job, they had a supplier invoice system that stored every number as text. The accountants would paste values into Excel and the sums would silently return zero because Excel treated the text-formatted cells as empty. Same category of problem: data that looked numeric but was not.

He added `price = float(price)` on line 7 and ran the script again.

Green. No traceback.

He sat back. A small grin. Four weeks ago, a `TypeError` would have sent him searching Stack Overflow for twenty minutes before he even understood the question. This time he had diagnosed it in under five by doing one thing: checking the types.

But something nagged him. The `print` statement was still sitting in his code. And the `float()` conversion was a fix for this one case, not a guardrail. What if a different column had the same problem? He would be playing whack-a-mole, adding `float()` calls wherever a string snuck through. That was not how Emma would handle it.

He opened the file again. He could wrap the conversion in a helper function, maybe `def parse_number(value)`, that handled the casting in one place. If any column needed numeric conversion, he would route it through that function. One change, one location.

He wrote the function. Four lines. He replaced the inline `float(price)` call with `parse_number(row["price"])`. He ran the tests. Still green.

He felt the difference. Not just fixing the bug, but recognizing the shape of the fix: the principle that conversion logic belongs in one place, not scattered across every line that touches the data. It was like how his old company eventually replaced those per-desk approval forms with a single online portal. Centralize the policy, stop patching individual desks.

---

The door opened. Emma set her coffee down and glanced at the terminal.

"Green," James said. "But I didn't just fix the line. I made a helper function for the type conversion so I'm not casting in six different places."

Emma looked at the code. She was quiet for a moment. "That's actually a pattern worth naming. The Single Conversion Point: all raw-to-typed transformations go through one function. Makes debugging easier because you only have one place to check when types go wrong."

"I almost didn't do it," James admitted. "The `float()` call fixed the bug. I could have stopped there."

"Most people do stop there. That's why most codebases have the same bug in eleven places." She paused. "I want to be honest: I still catch myself doing the inline fix when I'm tired. It took me years to build the reflex."

James nodded. He knew the traceback read bottom-up now. He knew `print(type(...))` was the fastest diagnostic. And he knew that fixing the symptom was not the same as fixing the structure.

"One more thing," Emma said. "Your `parse_number` function. What happens if someone passes it the string `'N/A'`?"

James opened his mouth, then closed it. He had not handled that case.

"Try it," Emma said. "I'll wait."
