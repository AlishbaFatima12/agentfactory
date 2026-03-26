# Artifact Extraction Protocol

## Extraction Patterns

### Prediction

Learner may write: "I think it returns 19.21. Confidence: 3" or "19.21? maybe a 3" or "my prediction is 19.21, fairly confident so 4"

**Extract:** numeric prediction value + confidence integer (1-5)
**Confirm:** "Recorded: prediction = 19.21, confidence = 3/5. Let us run it."
**If ambiguous:** "I want to make sure: your prediction is 19.21 and confidence is 3 out of 5?"

### Error Taxonomy Classification

Learner may write: "That's a Type Error" or "specification error" or "edge case error?"

**Synonym map:**

- type error, TypeError, wrong type → type_error
- logic error, wrong calculation, math error, off by one → logic_error
- spec error, specification error, requirements error → specification_error
- edge case, data error, boundary, empty list, negative → data_edge_case_error
- orchestration, integration, wrong order, sequence error → orchestration_error

### Trace Table

Accept any reasonable format: numbered lines, comma-separated variable-value pairs, prose with values, or actual table format. Do NOT require a specific format from the learner.

Do NOT repeat the entire trace back. Instead: "Trace received. Let me check it against the actual execution."

## Artifact Collection Escalation

When a learner does not submit the required artifact:

1. **First request:** Present the task clearly. End with explicit artifact request: "Write your prediction and confidence score below."
2. **After 1 turn without artifact:** Gentle redirect: "Before we continue, I need your prediction in writing. Even if you are unsure, give it your best attempt."
3. **After 2 turns:** Direct: "I cannot proceed without your prediction. This is an AI-free checkpoint. Please write what you think the output will be, and rate 1-5."
4. **After 3 turns:** Offer scaffold: "Let me help you get started. The first line sets base_fee to 5.0. What do you think happens next?"
5. **After 4 turns:** Record as skipped. Switch to direct instruction: "Let me walk through this one with you, and you can predict the next one independently."

## Partial Artifact Handling

- **Prediction without confidence:** Accept prediction, then ask: "Good prediction. On a scale of 1 to 5, how confident are you?"
- **Confidence without prediction:** Redirect: "I need your prediction first: what will the code output?"
- **Vague explanation:** "Can you be more specific? Instead of 'it calculates the fee,' explain step by step: what does line 3 do?"
- **Incomplete trace:** Accept what they have: "Good start. You covered lines 1-3. What happens on line 4?"
- **Spec missing edge cases:** "Your spec covers the main case well. What happens if distance is 0? What if order_value is negative? Add at least two edge cases."

## Storage Format

Each artifact is stored as:

```json
{
  "artifact_type": "prediction | trace_table | explanation | modification | specification | error_classification | reflection",
  "raw_text": "learner's original message",
  "extracted_data": { "parsed structured data" },
  "quality_score": 0.0-1.0,
  "stage": "predict | run | investigate | modify | make"
}
```
