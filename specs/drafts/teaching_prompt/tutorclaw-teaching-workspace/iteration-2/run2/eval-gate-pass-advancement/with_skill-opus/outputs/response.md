Your trace nailed the complete data flow: distance_charge = 8 * 1.5 = 12.0, fee = 5.0 + 12.0 = 17.0, tax = 17.0 * 0.13 = 2.21, and the rounded return of 19.21. Sharp catch on order_value being unused, too.

Now let's modify this function. Change `per_km_rate` from 1.5 to 2.0. Before you run it, predict: what does `calculate_delivery_fee(120, 8)` return with that change? Give me your predicted value and confidence (1-5).
