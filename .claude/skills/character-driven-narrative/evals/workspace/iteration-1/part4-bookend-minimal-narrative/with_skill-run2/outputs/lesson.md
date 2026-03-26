<!-- Opening bookend — insert before first technical section -->

James scrolled through the pull request he had opened that morning. Forty lines of setup code repeated across six endpoint functions: parse the config, validate the input, log the timestamp, handle the exception. He had written it correctly every time. That was the problem.

"I keep copy-pasting the same wrapper logic," he said when Emma sat down. "Six functions, six identical preambles. If I change the logging format, I change it in six places."

"So what do you want?"

He thought for a moment. "I want to write the wrapper once and attach it to any function. Like how my old company had a single onboarding checklist that applied to every new hire, no matter which department."

Emma tilted her head. "That's closer than you think. Python has a name for that: a decorator." She stood up. "You've already described what it should do. Write the spec. I'm going to refill this." She held up her empty mug and walked toward the kitchen.

---

<!-- Direct instruction section goes here -->

---

<!-- Closing bookend — insert after final technical section -->

Emma came back to find James's terminal open to a test file. Green output. He had stacked two decorators on a single function and written three tests proving they executed in the right order.

"I kept thinking decorators were magic," he said. "Some hidden language feature. But it's just a function that takes a function and returns a function. That's it."

"That's it."

"Honestly, it reminds me of how we handled contract amendments at my old job. You never touched the original document. You wrapped it in an addendum that modified the terms. The original stayed intact; the addendum changed the behavior." He paused. "I don't think I've seen that analogy in any tutorial."

Emma almost smiled. "Neither have I. That's a good one."

James closed his laptop halfway. "I spent two hours today refactoring code I wrote last week. Not because it was broken. Because I saw a pattern I could compress." He shook his head. "Six months ago I didn't know what a function was."
