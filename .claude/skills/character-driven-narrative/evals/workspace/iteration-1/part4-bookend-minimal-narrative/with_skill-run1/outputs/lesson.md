<!-- NARRATIVE OPENING — insert before direct instruction -->

James pulled up the diff on his second monitor. Ravi's pull request had four functions that all started the same way: check permissions, log the call, validate the input. Four times. He had been about to approve it when something stopped him.

"Every function has the same fifteen-line preamble," he said, not quite to Emma, not quite to himself. "That's like when my old ops team had the same three approval steps copy-pasted into every procurement workflow. We made a template. One change fixed all of them."

Emma looked over. "So what would you do here?"

"Wrap the repeated logic in something reusable. A function that takes a function." He paused. "Wait. That's a decorator, isn't it. I've seen the `@` syntax in pytest fixtures but I never thought about what it actually does."

"What do you think it does?"

James stared at the code. "It takes my function, adds behavior around it, and hands back a new function that looks the same from the outside." He frowned. "Like putting a case on a phone. Same phone, new capabilities, same interface."

Emma almost smiled. "That's a better explanation than most tutorials give." She stood up. "You've got the intuition. Now build it. I want to see a decorator that logs every call to any function you wrap. I'll be back in twenty."

---

<!-- DIRECT INSTRUCTION GOES HERE -->

---

<!-- NARRATIVE CLOSING — insert after direct instruction -->

When Emma came back, James had his terminal open. Three decorators: one for logging, one for input validation, one that cached return values. He had stacked all three on a single function.

"It reads like a table of contents," he said. "Log it. Validate it. Cache it. Then the function body is just the business logic. Nothing else."

Emma sat down and read the code. "You composed them."

"I almost didn't. I started writing one big decorator that did all three things. Then I realized that was the same mistake as Ravi's PR: coupling things that change for different reasons." He closed the diff tab. "Decorators aren't just syntax. They're a design decision about where behavior lives."

Emma nodded. "You sound like someone who reviews code for a living."

James looked at the terminal. Three green tests. A week ago he would have needed her to explain what `@wraps` did and why `functools` mattered. Today he had looked it up, tested it, and caught an edge case with argument forwarding before she returned.

"Maybe I am," he said.
