Your code makes a decision on line 7 that your spec would have made explicit. When the scenario input is unrecognized, your function returns `None` silently.

Is that the intended behavior? Should it raise a `ValueError`? Log a warning and continue? Return a typed sentinel?

This is an AI-free checkpoint. I'm not asking for boilerplate — I'm asking you to state the contract your code is already enforcing. Write it down, then we'll look at the implementation together.
