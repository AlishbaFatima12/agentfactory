# The Three Layers

<!-- NARRATIVE OPENER: Scenario framing (Part 3, 25% density, Consultant phase) -->
<!-- CFO domain expert carries context. Emma appears only if James explicitly asks. -->

James had the Gross Profit Waterfall open on his screen when the CFO stopped by his desk. She did not sit down. "I hear you're learning the new modelling framework."

"IDFA," James said. "I understand the problem: coordinate references, Formula Rot, all of that. But I don't see how you actually build a model that avoids it. Every spreadsheet I've ever touched starts with someone typing a number into a cell and writing a formula that points at it."

The CFO set a single sheet of paper on his desk. One paragraph, handwritten. "That is the intent statement for next quarter's board model. Three-year Gross Profit Waterfall. Revenue, COGS, growth rates, efficiency gains. Four assumptions." She tapped the paper. "Before you write a single formula, I want to see a layer that contains nothing but named inputs. No arithmetic. No cell references. Just the four assumptions from that paragraph, each with a name I can read." She checked her watch. "I have a meeting at two. Show me what you have when I get back."

James looked at the paragraph. He had built dozens of models in his previous role, but he had always started with the formula, not the inputs. Starting with a layer of pure assumptions, isolated from any calculation, felt like building a foundation before knowing what the house looked like. He pulled up a blank spreadsheet and read the paragraph again.

---

<!-- DIRECT INSTRUCTION BEGINS — entire lesson body follows here, self-contained -->
<!-- The existing technical content of Lesson 3 goes in this section unchanged. -->
<!-- No character dialogue appears in the middle. Readers who skip the opener lose no technical content. -->

In Lesson 2, you saw the difference between a formula that reads `=B14-(C14*$F$8)` and one that reads `=Revenue_Y3 - COGS_Y3`. The first is a coordinate. The second is a business rule. Now you will learn the architecture that makes the second kind of formula possible, and makes the first kind unnecessary.

[... existing direct instruction content of Lesson 3 continues here unchanged ...]

---

<!-- NARRATIVE CLOSER: 1 paragraph, scenario resolution -->

The CFO came back at ten past two. James turned his screen toward her: four Named Ranges, each with the `Inp_` prefix, no formulas anywhere in the layer. She read the names out loud. "Inp_Rev_Y1. Inp_Rev_Growth. Inp_COGS_Pct_Y1. Inp_COGS_Efficiency." She nodded once. "I can read every assumption without clicking a single cell. That is what I needed to see before you build the rest." She turned to leave, then paused. "Lesson 4 is the Calculations layer. When you build it, I do not want to see a single cell address in any formula. Only names." James looked at the Assumptions layer on his screen. For the first time, a spreadsheet felt like it had a blueprint instead of a pile of parts.
