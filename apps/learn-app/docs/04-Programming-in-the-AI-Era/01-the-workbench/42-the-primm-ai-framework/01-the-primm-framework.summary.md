### Core Concept
PRIMM (Predict, Run, Investigate, Modify, Make) is a research-validated five-stage framework that inverts traditional programming instruction by teaching you to read and understand code before you write it. In the AI era where code generation is nearly free, PRIMM's 4:1 ratio of comprehension to production stages directly addresses the bottleneck shift from writing code to verifying code.

### Key Mental Models
- **The Prediction-Reality Gap**: Committing to a specific prediction before running code transforms passive observation into active hypothesis testing. Every wrong prediction exposes an assumption you didn't know you were making, which is where learning happens.
- **The Comprehension Bottleneck**: Pre-AI era bottleneck was production (typing, syntax recall, API lookup). AI era bottleneck is verification (reading, predicting, tracing). PRIMM's structure matches the new economics.
- **Recursive PRIMM Application**: Use the Predict-Run cycle to verify your own newly-written code. The method you used to learn someone else's code becomes the method you use to validate what you build.
- **Investigation as Systematic Probing**: Tracing variables (simulating computer execution in your head), testing edge cases (empty strings, swapped order), and using AI to answer questions about code you're reading rather than code you want written.

### Key Facts
- **Research basis**: Created by Sue Sentance and Jane Waite in 2017, tested with 493 students across 13 schools in England. Students using PRIMM outperformed those who didn't.
- **Four of five stages build understanding**: Predict, Run, Investigate, Modify focus on comprehension. Only Make involves writing from scratch.
- **Confidence scoring scale**: Rate predictions 1-5 before seeing results to build calibration (knowing when you know vs. when you don't).
- **Global adoption**: Used in England, Germany, USA, Hong Kong, Norway, Argentina, Australia, and Turkey since 2017.

### Critical Patterns
- Predict before running (AI-free) to create a checkable hypothesis, then compare actual output to expose gaps in your mental model
- Verify every AI explanation by running the code yourself during Investigation stage
- Write a specification first before attempting the Make stage ("Given a name and role, print them separated by a dash")
- Start modification tasks simple (change one value) and progressively increase complexity (add second output line)

### Common Mistakes
- Skipping prediction and going straight to running code, which turns active learning into passive observation
- Vague predictions ("it probably prints a greeting") instead of specific, checkable predictions
- Using AI to generate code in Make stage instead of for targeted questions when stuck ("How do I join two strings?" not "Write me a badge program")
- Stopping investigation after getting the prediction right instead of probing mechanics (what happens with empty input, swapped order, etc.)
- Assuming working AI-generated code equals understanding (the trap of speed without comprehension)

### Connections
- **Builds on**: No programming prerequisites. This is the entry point for learning to read code with the comprehension skills that matter most in the AI era.
- **Leads to**: Lesson 2 introduces PRIMM-AI+, which adds AI permissions at each stage, checkpoints for honesty, and mastery gates that earn the right to proceed with AI assistance.
