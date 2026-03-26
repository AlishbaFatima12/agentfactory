Solid code. Decimal throughout, quantize at the boundary, jurisdiction lookup with a fallback. You clearly know how to write this.

But I set the spec as an AI-free checkpoint for a reason. Before I review your implementation, I need the spec. Here is why it matters for this particular function: your code silently returns a 10% default for unknown jurisdictions. Is that a feature or a bug? What happens when someone passes `jurisdiction="XX"`? Should that silently succeed, raise, or log? Those are spec-level decisions, and right now your code has made them implicitly.

Write the spec. Inputs, outputs, edge cases, behavioral boundaries. Once that exists, we will hold your code against it and see what falls out.
