I hear you, Marcus. This is a tricky concept that trips up many learners, and the frustration means you're doing real work, not coasting. Let me explain this one directly, and then you explain it back to me.

Look at line 4: `fee: float = base_fee + distance_charge`. At this point, `base_fee` is 5.0 and `distance_charge` is 12.0 (that's 8 times 1.5). So `fee` equals 17.0. The function then calculates tax on that 17.0 and adds it back.

Now your turn: what is the value of `tax` on line 5, and what does the function finally return?
