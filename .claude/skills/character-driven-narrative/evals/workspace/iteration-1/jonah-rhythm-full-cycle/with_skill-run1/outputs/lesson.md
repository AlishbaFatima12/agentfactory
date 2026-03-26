<!-- Narrative fragment: Jonah Rhythm full cycle for a Python debugging lesson -->
<!-- Part 1, Chapter 15 | Density: 65% | Mentor Phase: Coach | Emotional arc: Growing confidence -->
<!-- Patterns used: #5 Jonah Rhythm (full cycle), #3 Monologue Breaker, #4 Voice Markers, #2 Emma Fallibility (Type A), #7 Emotional Beat (progress callback) -->

## Finding the Bug

Emma pulled up a short script on the shared screen. Four functions, maybe thirty lines total. "This calculates shipping costs for three weight tiers," she said. "It has a bug. One of the tiers returns the wrong price." She closed her laptop and stood up. "Find it. I have a standup in fifteen minutes."

"Wait, you're not going to tell me which tier?"

"You have `print()`. You have the input values. You don't need me for this." She picked up her notebook. "Start with what you know works and move toward what you don't."

The door clicked shut.

---

James stared at the terminal. Thirty lines. He had debugged smaller scripts before, back in Chapter 13, when Emma walked him through reading tracebacks. But those had error messages. Red text screaming at him. This one ran clean. No traceback. Just a wrong number somewhere in the output.

He ran the script. Three prices printed: 5.99, 12.50, 18.75. The problem was that he did not know which one was wrong. He pulled up the requirements comment at the top of the file:

```
# Light (0-5 kg): $5.99
# Medium (5-15 kg): $11.50
# Heavy (15+ kg): $18.75
```

12.50 versus 11.50. Medium tier. Off by a dollar.

Okay. That narrowed it. He scrolled to the `calculate_medium` function and read it line by line. The base rate was 8.00. The per-kilo surcharge was 0.45. The weight in the test call was 10 kilograms. He grabbed a scrap of paper from his desk, a habit from his operations days when reconciling supplier invoices.

8.00 plus 0.45 times 10 equals 12.50. That matched the output. But the spec said 11.50. So either his hand math was wrong or the formula was wrong.

He recalculated. 8.00 plus 4.50 equaled 12.50. The code was doing exactly what it said. The math itself was correct for the numbers in the function. Which meant the numbers in the function did not match the pricing spec.

He added a `print()` call inside `calculate_medium`:

```python
print(f"DEBUG: base={base_rate}, surcharge={per_kilo}, weight={weight}")
```

The output confirmed it: `base=8.00, surcharge=0.45, weight=10`. He opened the spec comment again. The expected output for 10 kg was 11.50. Working backward: 11.50 minus 8.00 equaled 3.50. 3.50 divided by 10 equaled 0.35.

The surcharge was supposed to be 0.35 per kilo, not 0.45.

James sat back. He had found it. Not by guessing, not by changing random numbers. By isolating the layer where expected output diverged from actual output and tracing backward to the bad value. It felt like reconciling a purchase order against an invoice, finding the one line item where the supplier quoted a different unit price. Same method, different domain.

He almost smiled. Three weeks ago he would have stared at this for twenty minutes, then asked Emma. Today it took him four.

But something nagged at him. He had found _what_ was wrong. He had not figured out _why_ it was wrong. Was it a typo? A copy-paste error from another tier? Did someone update the spec and forget to update the function? The fix was obvious: change 0.45 to 0.35. But the root cause mattered if he wanted to prevent it from happening again.

He did not have an answer for that part.

---

Emma came back, coffee in hand. "Show me."

"Medium tier surcharge is 0.45 in the code but 0.35 in the spec." James pointed at his debug output and the hand calculation on the scrap of paper. "The base rate is fine. Just the per-kilo rate is off by ten cents."

"How did you find it?"

"Compared actual output to the spec, worked backward from the expected result. Same thing I used to do with supplier invoices: if the total is wrong, decompose it until you find the line that doesn't match."

Emma nodded. "Good process. What didn't you figure out?"

James hesitated. "Why the number was wrong in the first place. I can fix the symptom. I don't know how to prevent the next one."

"That's the right question." She set down her coffee. "I once spent two hours fixing a billing bug. Changed the rate, shipped it, moved on. A week later the same bug came back because the rate was being pulled from a config file I never updated. I fixed the shadow, not the source."

"So where do I look?"

"Where does the surcharge _come from_? Trace it one level deeper. Is it hardcoded? Is it read from a file? Is it derived from another value?"

James scrolled up. The surcharge was hardcoded on line 14. No config file, no derivation. A plain number typed by a human. "It's just... a literal. Someone typed 0.45 instead of 0.35."

"Now you know three things." Emma held up three fingers. "The bug. The fix. The prevention: constants like pricing belong in a single source of truth, not scattered across functions. Change it in one place, it updates everywhere."

James thought about it. That was how his old company handled contract rates: one master sheet, every department pulled from it. "So basically, a named constant or a config dictionary at the top of the file. One place to update."

"Now you're debugging like an engineer, not just fixing like a technician."

He looked at the terminal. The fix would take ten seconds. But the lesson, the one about tracing a value to its source and asking _why_ it was wrong, not just _what_ was wrong, that was the part that would stick.
