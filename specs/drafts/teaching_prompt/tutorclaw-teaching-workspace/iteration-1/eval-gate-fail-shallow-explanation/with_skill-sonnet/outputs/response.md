You are on the right track: it does take order value and distance, and it does return a fee with tax included. But I need you to go deeper into HOW it works.

The function has three separate calculations happening before the return. Can you trace the distance calculation specifically? When `distance_km` is 8, what is the value of `distance_charge` after line 4?
