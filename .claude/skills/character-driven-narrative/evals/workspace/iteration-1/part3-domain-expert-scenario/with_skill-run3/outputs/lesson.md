# The Three Layers

<!-- NARRATIVE OPENER: Insert before the first technical section ("In Lesson 2, you saw the difference...") -->

James was staring at the GP Waterfall intent statement when Priya Menon, the CFO he'd been shadowing for the last two weeks, dropped a printed spreadsheet on his desk. "This model has been handed off four times in the last eighteen months," she said. "Every time, the new analyst spends three days figuring out what the formulas do. Then they add their own section and make it worse."

He scanned the sheet. Columns ran to AZ. Cell references like `=B14-(C14*$F$8)` were everywhere. He could not tell which numbers were inputs and which were calculated. "How do you know what's safe to change?"

Priya sat down. "That is exactly the problem. You don't. When I joined, I changed one growth rate assumption and broke seventeen formulas in three other tabs. Nobody discovered it until the board deck went out with wrong numbers." She tapped the intent statement in front of him. "Three-year Gross Profit Waterfall. Four assumptions. You are going to build this one so the next analyst who opens it can read every formula like a sentence, and so a Finance Domain Agent can operate on it without guessing. The architecture for that has three layers. Figure out what they are, why they have to stay separate, and what goes wrong when they don't."

She stood up. "I have a budget committee in forty-five minutes. Show me what you built when I get back."

---

<!-- DIRECT INSTRUCTION: The entire middle of the lesson is direct instruction, unchanged from the existing content. No character dialogue appears between the opener and closer. -->

<!-- NARRATIVE CLOSER: Insert after the "Capability Preview: Intent Synthesis" section and before "Try With AI" -->

---

When Priya returned, James turned his laptop toward her. Four Named Ranges, each with the `Inp_` prefix. No formulas in the Assumptions layer. She scrolled through it in silence for about ten seconds. "I can read every name without asking you what it means," she said. "That has never happened with a first draft in this department." She paused. "Now build the Calculations layer. And if I see a single cell address in a formula, we are starting over."
