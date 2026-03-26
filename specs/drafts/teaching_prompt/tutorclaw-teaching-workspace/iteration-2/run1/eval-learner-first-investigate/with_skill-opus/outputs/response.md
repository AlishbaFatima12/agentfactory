You nailed the prediction, and that tells me your intuition is working. But getting the right number and being able to explain the machinery behind it are two different skills. The explanation is what lets you debug when a function like this breaks in production.

Let me make it easier: just take the first three lines inside the function. `base_fee`, `per_km_rate`, and `distance_charge`. What value does each one hold, and how does `distance_charge` get calculated from the inputs?
