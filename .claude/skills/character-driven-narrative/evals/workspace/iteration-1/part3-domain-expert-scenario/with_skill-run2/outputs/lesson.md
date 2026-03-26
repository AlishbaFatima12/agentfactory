# The Three Layers

<!-- NARRATIVE OPENER: Insert before the first technical section (after frontmatter, before "In Lesson 2, you saw...") -->

Priya Deshmukh, the CFO of a 200-person logistics company, dropped a one-page brief on the conference table. "Last quarter, an analyst inserted a row in our revenue model. Nothing looked wrong. The formulas still produced numbers. But three of those numbers were pulling from the wrong cells, and we did not catch it until the board presentation." She pointed at the brief. "I need a three-year gross profit waterfall. But I need it built so that moving a row can never break a formula again. Can you do that?"

James looked at the brief. Four assumptions in plain English: starting revenue, a growth rate, a COGS percentage, and an efficiency improvement. He had seen the damage that coordinate-based formulas could do (Lesson 1 had made that visceral). He understood the difference between a formula that reads cell addresses and one that reads business logic (Lesson 2 had shown him both). What he did not have yet was the architecture: the systematic way to guarantee that Priya's requirement, "moving a row can never break a formula," was structurally enforced rather than manually policed.

---

<!-- DIRECT INSTRUCTION: The entire technical body of the lesson goes here unchanged. -->
<!-- All sections from "Three Layers, Three Rules" through "Try With AI" remain as-is. -->
<!-- No character dialogue appears in the middle. -->

---

<!-- NARRATIVE CLOSER: Insert after the final technical section (after "Try With AI" or before "Flashcards Study Aid") -->

Two days later, James sent Priya the model. She opened it, clicked on a calculation cell, and saw `=Revenue_Y2 * COGS_Pct_Y2`. She did not need a walkthrough. She did not need to trace cell references. She read the formula the way she would read a sentence. "This is what I have been asking every analyst for," she said. "A model that explains itself." James almost mentioned that he had needed to correct three of the agent's Named Ranges before the naming conventions were right, but he kept it to himself. The architecture was the point, not the debugging. Priya's next question was already about Year 4 projections, and the model was built to handle exactly that.
