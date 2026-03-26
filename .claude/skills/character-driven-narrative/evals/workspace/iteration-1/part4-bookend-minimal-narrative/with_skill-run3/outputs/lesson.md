<!-- NARRATIVE OPENING — insert before the first technical heading -->

James typed `git log --oneline` and scrolled through the last dozen commits. He had written every one of them in the past week: class definitions, test suites, type annotations. Real code, reviewed and merged. He closed the terminal and opened a new file. A decorator. He had seen the `@` syntax in three different codebases now and copied it each time without understanding what it actually did.

"I keep using decorators like recipes," he said. "Copy the `@`, paste it above the function, and hope it works. It's like when I was in operations and someone handed me a macro-enabled spreadsheet. I ran the macros, but if one broke, I just called whoever built it."

Emma leaned back. "So what changed?"

"I started reading the macros. Then I started writing them." He paused. "I think this is the same thing. I need to stop copying `@login_required` and understand what the `@` actually does to my function."

"You already know what it does. You just haven't said it out loud yet."

James looked at the screen. A function that takes a function and returns a function. He had written higher-order functions in Chapter 44. He had passed callbacks. "Wait. A decorator is just a function that wraps another function. The `@` is syntax sugar for reassigning the name."

Emma picked up her coffee. "Go prove it. Write a decorator from scratch, no copying. I'll be back in fifteen."

---

<!-- DIRECT INSTRUCTION SECTION GOES HERE -->
<!-- The entire technical lesson body (decorators, @wraps, class decorators, -->
<!-- metaprogramming patterns, exercises) lives between these two rules. -->
<!-- A reader who skips both bookends loses no technical content. -->

---

<!-- NARRATIVE CLOSING — insert after the last technical section -->

When Emma came back, James had three decorators written, tested, and passing. One logged function calls. One measured execution time. One validated input types at runtime. He had also broken one by forgetting `@wraps` and spent ten minutes debugging why his function's name disappeared.

"I broke the name," he said. "The wrapper replaced the original function's identity. `@wraps` copies the metadata back."

"Good. You found that yourself." Emma sat down. "Here's the real question. You've built decorators, properties, descriptors. At what point does metaprogramming stop being useful and start being clever for its own sake?"

James thought about it. "When the person reading your code has to understand the metaprogramming before they can understand the business logic. That's the line." He shrugged. "Same rule we had for inheritance versus composition. If it makes the system harder to reason about, it's not saving anyone time."

Emma almost smiled. "That's not something I told you."

"No," James said. "It isn't."
