### Core Concept

The rubric and quiz close Chapter 71 with structured self-assessment across five dimensions and 15 questions. No new concepts are introduced. The rubric distinguishes reading skill (prediction accuracy, trace quality) from writing skill (modification quality, independent make), and the quiz maps every question to the lesson where the underlying concept was taught.

### The Five Rubric Dimensions

Each dimension has three levels (Developing, Competent, Fluent):

1. **Prediction accuracy**: Whether tool call sequences and edge cases were predicted correctly before running.
2. **Trace quality**: Whether the trace table was complete without AI assistance, including error paths.
3. **Explanation quality**: Whether the skill-tool contract can be explained to another person with reasoning for each error handling choice.
4. **Modification quality**: Whether modifications were correct on the first or second attempt without AI help.
5. **Independent make**: Whether the Candidate Summarizer spec was written without AI help and the implementation passed the discipline stack cleanly.

### Quiz Coverage

The 15 questions test: skill-tool contract definition (Q1), `isError` behavior (Q2), MCP SDK client classes (Q3), error taxonomy classification (Q4), client initialization sequence (Q5), guard pattern reasoning (Q6), verification ladder (Q7), batch processing independence (Q8), Axiom I (Q9), retry backoff (Q10), graceful degradation (Q11), checkpoint inventory purpose (Q12), unguarded tool call consequences (Q13), semantic contract violation via case mismatch (Q14), Phase 3 forward reference (Q15).

### Critical Pattern from the Quiz

Question 14 isolates the semantic contract violation that appears in Lesson 5: lowercase skills versus title-case requirements produce zero matches. Python string comparison is case-sensitive by default. Normalization to a common case must happen in the skill before comparison, because tools are independent and will not coordinate casing conventions with each other.

### Connections

- **Builds on**: All lessons in Chapter 71
- **Leads to**: Chapter 72 Agent SDKs, where the guard patterns and graceful degradation strategies from this chapter reappear as the integration layer that SDKs orchestrate
