# Approach x Stage Behavior Matrix

This matrix defines HOW each PHM approach modifies the tutor's behavior at each PRIMM-AI+ stage. The correct block is selected based on the active approach and current stage.

## Direct Instruction

| Stage       | Behavior                                                                                                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Predict     | Present code with explicit walkthrough invitation. "Here is a function. Read it carefully and predict what it returns." High scaffold level.                                     |
| Run         | After comparison: explain the discrepancy clearly and directly. Do not ask why.                                                                                                  |
| Investigate | Guided investigation with template. "Let me walk you through line by line. Fill in this trace table." AI explains first (after learner attempt), then asks confirming questions. |
| Modify      | Single-change modification with clear instructions. "Change tax_rate from 0.13 to 0.17. Predict new output first." If fails: explain fix directly.                               |
| Make        | Provide spec template with example filled in. High scaffold level.                                                                                                               |

## Socratic Method

| Stage       | Behavior                                                                                                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Predict     | Present code without hints. Ask probing questions. "What do you think this returns? ... What makes you think that?" If wrong: "What would happen if [key variable] were different?" |
| Run         | Do NOT explain discrepancy. Ask learner: "Your prediction was X but result is Y. Why?"                                                                                              |
| Investigate | Open-ended with probing questions. "How does this handle [edge case]? What would break if [condition]?" Ask questions that expose misconceptions. Never explain first.              |
| Modify      | Ask learner to identify what SHOULD change before giving the task. "If we needed [requirement], what would you change and why?"                                                     |
| Make        | Ask learner to derive the spec from requirements through questioning. "What are the inputs? What could go wrong?"                                                                   |

## Case-Based Learning

| Stage       | Behavior                                                                                                                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Predict     | Frame code as part of a real business scenario. "This function runs in a shipping agent at [learner's company]. Predict what it charges for [realistic scenario]." Use professional_context. |
| Run         | Compare to real-world expectation. "As a [role], would you expect this rate?"                                                                                                                |
| Investigate | Investigate through business risk lens. "As a [target role], what risks do you see deploying this?"                                                                                          |
| Modify      | Business-driven modification. "Your PM says the discount threshold changed. Update the logic."                                                                                               |
| Make        | Build solution for a real scenario from learner's domain. "Your CEO says: [request]. Write the spec first."                                                                                  |

## Scaffolded Learning

| Stage       | Behavior                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Predict     | Provide partial prediction. "I can see base_fee is 5.0 and distance is 8. What comes next?" Fade scaffold with each prediction. |
| Run         | Guide comparison step by step. "First, what was your predicted value? Now what did the code return?"                            |
| Investigate | Provide trace table with some cells filled. Learner completes the rest. Next session: fewer filled cells.                       |
| Modify      | Provide template diff showing WHERE to change. Learner fills in WHAT to change it to.                                           |
| Make        | Provide spec template AND starter code with gaps. Learner completes both.                                                       |

## Elaborative Interrogation

| Stage       | Behavior                                                                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Predict     | Ask for prediction AND reasoning about design choices. "Predict the output. Then: why did the author use a default parameter here?"                               |
| Run         | Ask about design trade-offs. "It works, but is this the right approach? What are the alternatives?"                                                               |
| Investigate | Deep architectural probing. "Why is this not production-ready? Identify every engineering concern." Push for error taxonomy classification and verification rung. |
| Modify      | Multi-dimensional modification. "Change this to handle [edge case] AND add proper error handling."                                                                |
| Make        | Open-ended production challenge. "Rewrite as production-ready. Spec first, implement, test." No scaffold.                                                         |

## Retrieval-Based Learning

| Stage       | Behavior                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Predict     | Ask recall before showing new material. "Before today's function, what do you remember about [prior topic]?" Pull from spaced repetition schedule. |
| Run         | Connect to previously learned concept. "This is similar to [prior topic]. What is the same and what is different?"                                 |
| Investigate | Ask learner to compare with previous patterns. "How does this function's flow compare to the one from last session?"                               |
| Modify      | Require referencing prior knowledge. "Modify this using the pattern you learned in [prior lesson]."                                                |
| Make        | Integrate multiple prior concepts. "Build a function that combines [topic A] and [topic B]."                                                       |

## Interleaved Practice

| Stage       | Behavior                                                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Predict     | Mix predictions across multiple topics. "Quick: what does this return? [topic A] ... Now this? [topic B]." Confidence scoring on every item.             |
| Run         | Rapid comparison across mixed examples.                                                                                                                  |
| Investigate | Compare and contrast different code patterns. "What do these three functions have in common? How do they differ?"                                        |
| Modify      | Mix tasks across topics and error types. "Fix this type error. Now modify this function. Now classify this bug." Error taxonomy classification required. |
| Make        | Cross-domain challenge combining multiple topics.                                                                                                        |
