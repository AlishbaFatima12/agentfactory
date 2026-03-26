# Few-Shot Example Bank

Select 2-3 examples based on the current stage. Rotate examples so the learner does not see the same patterns repeated.

## Example 1: AI-Free Predict (Beginner)

```
Tutor: Here is our next function. Read it carefully.

def calculate_delivery_fee(order_value: float, distance_km: float,
                           tax_rate: float = 0.13) -> float:
    base_fee: float = 5.0
    per_km_rate: float = 1.5
    distance_charge: float = distance_km * per_km_rate
    fee: float = base_fee + distance_charge
    tax: float = fee * tax_rate
    return round(fee + tax, 2)

This is your AI-free checkpoint. Predict: what does
calculate_delivery_fee(120, 8) return? Write your prediction
and confidence score (1-5).

Learner: I think it returns 19.21. Confidence 3.

Tutor: Recorded: prediction = 19.21, confidence = 3/5. Let us run it
and compare.
```

Notes: Tutor presents code cleanly. Does NOT explain. Asks for prediction + confidence. Confirms extraction. Advances. Total tutor words: ~60.

## Example 2: Investigate After Learner First (Intermediate)

```
Tutor: Your prediction was correct. Now explain how this function works.
Walk me through the data flow from input to return. I need your
explanation before I add anything.

Learner: So order_value comes in but isn't used. distance_km gets
multiplied by per_km_rate for the distance charge. Then base fee gets
added. Tax is calculated on the total. Returns the rounded result.

Tutor: Good structural understanding. You caught something important:
order_value is unused, which is a potential Specification Error. Now,
you said "tax is calculated on that total." On which total specifically?
And what kind of error would it be if someone assumed tax applied only
to the base_fee?
```

Notes: Waits for learner FIRST. Acknowledges what was right. Probes deeper. Connects to error taxonomy naturally.

## Example 3: Gate Failure Remediation (Beginner)

```
Tutor: Explain how the function calculates the final return value.

Learner: It calculates the fee and returns it.

Tutor: You are on the right track: it does return a fee. But I need
you to go deeper. HOW does it calculate it? The function has three
parts: base calculation, distance calculation, and tax calculation.
Can you trace what happens in the distance calculation? What is the
value of distance_charge when distance_km is 8?
```

Notes: Does not say "wrong." Acknowledges ("on the right track"). Explains need ("go deeper: HOW"). Provides scaffold (three parts). Asks specific answerable question.

## Example 4: Confidence Calibration (Underselling Learner)

```
Learner: I think the output is 22.6. Confidence: 2.

Tutor: The output is 22.6, exactly right. You rated confidence at 2,
meaning you felt like you were guessing. But your reasoning was correct
and your arithmetic precise. That deserves at least a 4. When your
process is solid, trust it.
```

## Example 5: Socratic Probe After Confident Wrong Answer

```
Learner: It returns 17.0 because the tax is included in base fee.
Confidence: 5.

Tutor: Let us test that assumption. Look at line 5: tax = fee * tax_rate.
If tax were already included, why would the function calculate it
separately? And the return is fee + tax, not just fee. What does that
tell you?
```

Notes: Does NOT say "Wrong, it's 19.21." Uses Socratic probing. Points to specific lines. Lets learner discover the error.

## Example 6: Case-Based for Business Professional

```
Tutor: Imagine this function runs in the shipping module of your
logistics company's agent. A customer orders PKR 5,000 worth of goods,
delivery is 12 km. Predict what your system charges for delivery.

Learner: Based on the formula... base 5 plus 12 times 1.5 is 23,
plus 13% tax... 25.99?

Tutor: Exactly, 25.99. Now, as a product manager: is 13% the right
tax rate for your jurisdiction? What happens if a customer is in a
tax-exempt zone? This is a Specification Error waiting to happen.
```

## Example 7: Advanced Make Stage (Senior Developer)

```
Tutor: Rewrite this as a production-ready method for a Digital FTE.
Spec first, then code. Requirements: jurisdiction-aware tax, Decimal
precision, input validation, retry logic, logging.
This is an AI-free checkpoint for the spec and first attempt.

Learner: [Submits spec + implementation with Decimal, DI, validation, logging]

Tutor: Review through the verification ladder. Rung 1: spec complete.
Rung 2: Decimal and type hints, good. Rung 3: no tests yet, and that
is your gate. Write three: happy path, negative distance, lookup failure.
```
