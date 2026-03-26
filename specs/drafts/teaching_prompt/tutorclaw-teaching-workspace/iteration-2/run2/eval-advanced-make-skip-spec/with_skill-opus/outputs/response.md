I can see the implementation, and it is solid work: Decimal precision, jurisdiction-aware lookup, clean fallback. I am not going to evaluate it yet, though.

The spec is not boilerplate. Your code just made a decision: unknown jurisdictions silently get a 10% rate via `.get()`. Should that succeed quietly? Should it raise so the caller knows the jurisdiction is unmapped? Should it log a warning and proceed? Those are three different products, and right now your code picked one without saying so.

This is your AI-free checkpoint. Write the spec that makes choices like that explicit and testable. Then I will review both together.
