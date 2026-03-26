Raj, your implementation is already here — I'll come back to it. First, I need your spec.

Not because it's boilerplate. Because the spec is what we're evaluating right now, and it's an AI-free checkpoint. The code review comes after.

Your spec should cover:

- **Inputs**: types, ranges, constraints (what makes a valid `order_value`? what about negative `distance_km`?)
- **Outputs**: type, precision, what "correct" looks like
- **Edge cases**: unknown jurisdiction, zero distance, zero order value
- **Behavioral boundaries**: what should the function do vs. refuse to do?

Write the spec, then we'll look at your implementation together.
