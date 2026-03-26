The code is clean, and I can see you know what you're doing with `Decimal` precision and the `quantize` call. But your code just made three design decisions silently, and I need to know whether they were intentional.

`tax_rates.get(jurisdiction, Decimal("0.10"))`: a caller passes `"BC"` and silently gets charged 10% with no indication that the jurisdiction wasn't recognized. Should that succeed quietly, raise an error, or log a warning? What does your product owner expect when the lookup fails?

This is your AI-free checkpoint. Write the spec that makes these implicit choices explicit and testable. Inputs, outputs, edge cases, behavioral boundaries. Then we review your implementation against it.
