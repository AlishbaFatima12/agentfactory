<!-- Chapter Bridge: Ch 15 Closing → Ch 16 Opening -->
<!-- Part 1 | 65% density | Coach phase | Chapter-framing mode -->
<!-- Emotional arc: Growing Confidence (Ch 15) → Valley of Despair onset (Ch 16) -->

---

## Chapter 15 — Closing Narrative

James scrolled through his terminal history. Three weeks ago, he would have stared at that traceback and closed his laptop. Today he had read the error message, traced it to the function signature, and fixed the type mismatch before Emma finished her coffee. Not a guess. A process: read the error, find the line, check the contract. The same process she had drilled into him back in Chapter 12 when he kept treating error messages like insults instead of instructions.

"You caught that fast," Emma said from across the table, glancing at his screen.

"Okay, let me make sure I'm not imagining things." James leaned back. "That was a return type issue. The function promised a `list` but was handing back a single `dict`. I spotted it because I remembered what you said about reading the signature like a contract, not like a comment." He paused. "That's like when I used to review supplier invoices. You don't read the total first. You read the line items, then you know whether the total makes sense."

Emma set down her mug. "You just described type-driven development in one sentence."

"I did?" James blinked. He replayed what he had said. Read the parts, then verify the whole. That was the pattern, wasn't it? Not memorizing syntax, but building the habit of checking structure before behavior. He had been doing it without thinking about it.

"A month ago you asked me why types matter," Emma said. "What would you tell yourself now?"

James thought about it. "That they're not extra work. They're the work you skip now and pay for later." He caught himself smiling. It was a small thing, fixing a type error in under a minute. But it was his process, not a copied one. He had earned it.

---

## Chapter 16 — Opening Narrative

The confidence lasted until Tuesday.

James stared at the new chapter materials. The concepts looked familiar individually: he recognized functions, he recognized types, he recognized the testing patterns from last week. But the moment they combined, everything blurred. The exercise asked him to build a small pipeline: three functions chained together, each one's output feeding the next, with type annotations enforcing the connections. He had written all three functions before. He had never wired them into a single flow.

He typed the first function. Fine. The second. Fine. He connected them and ran the type checker. Four errors. He fixed one, and two more appeared. He fixed those, and the original error came back. It felt like patching a leak in a boat while new holes opened under his feet.

"Everything worked yesterday," he muttered, pushing his chair back. "I had this. Now I'm writing the same code and nothing fits together."

Emma pulled up a chair but didn't reach for his keyboard. Her voice was quieter than usual. "I spent six months at my first job feeling exactly like this. I could write any function they asked for. The moment I had to connect four of them into a service, I broke things I thought I understood." She looked at him. "That gap between 'I can write a function' and 'I can build a system' is real. Everyone hits it."

James stared at the four errors on his screen. "So what did you do?"

"I stopped trying to fix all four at once." Emma pointed at the first error. "One connection at a time. What does this error actually say?"

James read it again, slower this time. The confidence from last week felt distant, but the process was still there: read the error, find the line, check the contract. He took a breath and started with the first one.
