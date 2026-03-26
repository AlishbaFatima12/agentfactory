Your code made a decision: when the jurisdiction lookup fails, fall back to `0.10`. That decision has consequences a caller cannot see.

Three questions your implementation answers silently, but a spec would answer explicitly:

1. **The fallback contract**: is `0.10` a valid rate, a safe default, or a lie? If a jurisdiction is unknown, is silently charging 10% the right behavior, or should this raise so the caller can decide?

2. **The Decimal boundary**: where does `Decimal` enter? If the jurisdiction table stores `float` rates and you wrap them at the lookup site, you may have already lost precision before `Decimal` can help. Your spec would have forced you to define the canonical type at every boundary.

3. **The observable behavior question**: what can a test assert when the lookup fails? Right now the fallback is invisible to the caller. Is that intentional?

This is your AI-free checkpoint. Write the spec: inputs, outputs, the fallback behavior and its justification, and the two edge cases your code handles implicitly. Then we review it together.
