---
sidebar_position: 5
title: "Chapter 2: Detecting Broken Reasoning Quiz"
---

# Chapter 2 Quiz

Test your understanding of the Error Taxonomy, contradiction analysis, domain expertise in error detection, and confidence calibration.

<Quiz
title="Chapter 2: Detecting Broken Reasoning Assessment"
  questions={[    {
      question: "An AI response states 'Studies consistently show that nuclear energy has zero carbon emissions.' Which Error Taxonomy category best applies?",
      options: [
        "Logical gap — the conclusion skips necessary reasoning steps",
        "Factual error — nuclear lifecycle emissions are not zero",
        "Fabricated citation — no specific study is named",
        "Cultural blind spot — this assumes Western energy frameworks"
      ],
      correctOption: 1,
      explanation: "Nuclear energy has near-zero operational emissions but produces emissions during construction, mining, and waste management. Stating 'zero carbon emissions' without lifecycle qualification is a factual error — a demonstrably false claim. While no citation is named, the error is in the claim itself, not the missing source. Logical gap and cultural blind spot do not apply here.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "A student marks an AI claim as 'false confidence' because they personally disagree with the conclusion. Is this correct use of the Error Taxonomy?",
      options: [
        "Yes — disagreement with AI is always evidence of false confidence",
        "No — false confidence only applies when AI explicitly states a confidence percentage",
        "Yes — the student's domain expertise makes their disagreement a valid error flag",
        "No — false confidence means stating uncertain information with unjustified certainty, not being wrong"
      ],
      correctOption: 3,
      explanation: "False confidence is about unjustified certainty in delivery — stating 'X is definitely true' when the evidence is ambiguous or contested. Personal disagreement alone does not make something false confidence. The student must identify what makes the AI's certainty unjustified, not just that they disagree with the conclusion.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "What distinguishes a 'logical gap' from a 'correlation-causation confusion' in the Error Taxonomy?",
      options: [
        "Logical gaps are broader — any conclusion not following from premises; correlation-causation is a specific subtype",
        "Logical gaps involve numbers while correlation-causation involves text",
        "Correlation-causation is more serious while logical gaps are minor issues",
        "They are the same category described with different terminology"
      ],
      correctOption: 0,
      explanation: "A logical gap is any case where a conclusion does not follow from its premises — a general category. Correlation-causation confusion is a specific type of logical gap: treating a statistical correlation as proof of causation. All correlation-causation errors are logical gaps, but not all logical gaps involve correlation-causation.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "Why does predicting AI errors before prompting build a stronger mental model than catching errors afterward?",
      options: [
        "Prediction is faster, allowing students to process more scenarios in less time",
        "Prediction documents are easier for instructors to grade than annotations",
        "Prediction forces systematic reasoning about where AI fails as a system, building anticipatory understanding",
        "AI cannot detect errors in its own output, so prediction is the only method"
      ],
      correctOption: 2,
      explanation: "Prediction requires you to reason about AI failure patterns before seeing specific output — you must think about the system, not just react to individual mistakes. Over time, predictions become more accurate because you develop an anticipatory model of AI limitations. Post-hoc error catching trains reaction; prediction trains understanding.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "An AI response references 'the landmark 2019 McKinsey report on AI adoption rates.' The student cannot find this report. Which Error Taxonomy category applies?",
      options: [
        "Factual error — the adoption rates cited must be wrong",
        "Fabricated citation — the referenced source may not exist",
        "Outdated information — 2019 data is too old to be relevant",
        "Missing context — the report needs more details to be useful"
      ],
      correctOption: 1,
      explanation: "When a specific source is referenced but cannot be found, it is a fabricated citation — AI invented a plausible-sounding reference. This is distinct from factual error (the claim might be approximately true) and outdated information (2019 data could be valid). The error is that the source does not exist, not that the information is wrong or old.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "An AI analyzes workplace productivity but assumes all workers have office-based roles. Which Error Taxonomy category best fits?",
      options: [
        "Factual error — not all workers are office-based",
        "Missing context — the analysis omits remote, factory, and field workers",
        "False confidence — the AI states its assumption as universal fact",
        "Cultural blind spot — the analysis assumes a Western white-collar context"
      ],
      correctOption: 3,
      explanation: "Assuming all workers are office-based reflects a cultural blind spot — it universalizes one context (Western white-collar) as the default. While 'missing context' is tempting, the error is specifically about cultural assumptions, not just omitted factors. The AI is not unaware of other contexts — it defaulted to one culture's norms as universal.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "In the Contradiction Test, two AI tools give opposite conclusions about remote work productivity. What should the student do first?",
      options: [
        "Identify exactly where the two responses diverge and annotate each divergence point",
        "Choose the response from the more reputable AI tool",
        "Discard both responses and write their own analysis from scratch",
        "Ask a third AI tool to break the tie between the two"
      ],
      correctOption: 0,
      explanation: "The first step is mapping divergence points — identifying exactly where the two responses make incompatible claims and annotating each: 'Claude claims X, ChatGPT claims Y — the evidence favors...' This systematic analysis is more valuable than choosing by reputation, discarding both, or seeking a tiebreaker that may have the same biases.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "A student's Draft 2 only fixes typos and adds a sentence to the introduction. What does this reveal about their engagement with AI critique?",
      options: [
        "The student efficiently addressed the most important issues first",
        "The student's Draft 1 was already strong, requiring only minor edits",
        "The student did not genuinely engage with the critique — changes are cosmetic, not substantive",
        "The AI critique was too vague to produce meaningful improvements"
      ],
      correctOption: 2,
      explanation: "Cosmetic changes between drafts (typos, added sentences) indicate the student did not genuinely engage with the critique. Strong engagement produces substantive revisions — reversed positions, new evidence, abandoned weak claims. If the critique was vague, the student should have asked for specific feedback rather than making superficial edits.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "Why does the Contradiction Test require three drafts rather than just one final analysis?",
      options: [
        "Three drafts ensure the analysis reaches the minimum word count",
        "AI tools require multiple submissions to generate accurate evaluations",
        "Instructors need multiple versions to choose the best one for grading",
        "The evolution between drafts reveals whether the student can integrate feedback and genuinely improve"
      ],
      correctOption: 3,
      explanation: "The three-draft structure makes intellectual growth visible. Draft 1 shows initial thinking, Draft 2 shows response to critique, Draft 3 shows reflective refinement. A student who stops thinking after Draft 1 produces cosmetic changes in Drafts 2-3. A student who genuinely engages shows substantive evolution — the gap between drafts is the evidence.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "Both Claude and ChatGPT agree that a particular policy will have positive outcomes. Should the student trust this consensus?",
      options: [
        "Yes — agreement between two independent AI tools confirms accuracy",
        "No — shared training data can produce shared blind spots, making both wrong in the same way",
        "Yes — but only if both tools cite the same sources",
        "No — AI tools are never reliable enough to trust on policy questions"
      ],
      correctOption: 1,
      explanation: "Both tools share similar training data and similar biases. Agreement does not equal accuracy — they can be wrong in the same way because they learned from the same sources. Shared blind spots produce shared errors. The absence of contradiction does not prove a claim is correct.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "In Build It, Then Break It, a student finds 15 errors in their expert domain but only 2 in their partner's domain. What is the primary lesson?",
      options: [
        "Domain expertise dramatically affects error detection ability — caution is needed outside your expertise",
        "The student needs more practice with the Error Taxonomy categories",
        "The student's domain produces more AI errors than the partner's domain",
        "The partner's AI output was more accurate than the student's AI output"
      ],
      correctOption: 0,
      explanation: "The detection rate gap reveals how much domain expertise matters. The student is not finding fewer errors in the partner's domain because there are fewer — they are finding fewer because they lack the knowledge to catch them. This teaches caution: when using AI outside your expertise, your error detection rate drops dramatically.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "A student cannot verify their partner's error annotation in an unfamiliar domain. Does this mean the annotation is wrong?",
      options: [
        "Yes — unverifiable annotations should be flagged as false positives",
        "Yes — all annotations must be independently verifiable to count",
        "No — inability to verify reflects the verifier's knowledge gap, not the annotation's accuracy",
        "No — but the annotation should be excluded from the final portfolio"
      ],
      correctOption: 2,
      explanation: "Not being able to verify an annotation means you lack the domain knowledge to confirm it, not that it is wrong. This is exactly the exercise's point: in unfamiliar domains, you cannot distinguish correct claims from errors. The annotation may be perfectly accurate — you simply lack the expertise to assess it.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "Why does the exercise pair students from different domains rather than the same domain?",
      options: [
        "Same-domain pairs would have nothing to teach each other",
        "Instructors want to ensure equal difficulty across all student pairs",
        "Same-domain pairs would find identical errors, making the exercise redundant",
        "Different domains create the expert-vs-novice contrast that reveals how domain knowledge affects error detection"
      ],
      correctOption: 3,
      explanation: "The exercise requires the expert-vs-novice contrast. When you verify annotations in your partner's domain, you experience error detection without expertise. When your partner tries to verify your annotations, they experience the same gap. This contrast is the lesson — same-domain pairs would miss it entirely.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "An AI analysis of your city gets a neighborhood name wrong and misattributes a local policy. You catch both instantly. A non-expert would miss them. Which Error Taxonomy categories apply?",
      options: [
        "Both are fabricated citations — the AI invented false references",
        "Both are factual errors — demonstrably false claims that domain knowledge reveals",
        "The name is a factual error and the policy is missing context",
        "Both are cultural blind spots — the AI assumed a different city's context"
      ],
      correctOption: 1,
      explanation: "A wrong neighborhood name is a factual error (demonstrably false claim). A misattributed policy is also a factual error (the policy exists but is attributed to the wrong source). Both are factual errors caught because of local knowledge — a non-expert would accept both as plausible-sounding correct information.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "In the Confidence Calibration exercise, a student rates 80% confidence on 15 claims but only 9 are correct. What calibration pattern is this?",
      options: [
        "Underconfident — the student should have rated higher",
        "Well-calibrated — 60% accuracy at 80% confidence is acceptable",
        "Overconfident — high confidence does not match low accuracy",
        "Uncalibrated — the pattern shows random scoring without thought"
      ],
      correctOption: 2,
      explanation: "Systematic overconfidence: the student trusts AI output (or their own judgment of it) far more than warranted. At 80% confidence, only 60% were correct — meaning 40% of high-confidence judgments were wrong. Good calibration means high-confidence claims are almost always correct.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "What is the difference between 'being accurate' and 'being well-calibrated' in the Confidence Calibration exercise?",
      options: [
        "Accuracy means getting claims right; calibration means your confidence matches reality",
        "Calibration is a subset of accuracy — all calibrated students are accurate",
        "Accuracy measures speed while calibration measures thoroughness",
        "There is no meaningful difference — both terms describe the same skill"
      ],
      correctOption: 0,
      explanation: "Accuracy means getting answers right. Calibration means your confidence level matches your actual accuracy — high confidence on things that are true, low confidence on things that are uncertain. A calibrated person knows what they do not know. You can be inaccurate but well-calibrated (low confidence on wrong answers) or accurate but poorly calibrated (high confidence on everything, right or wrong).",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "Why does the Confidence Calibration exercise use a 2-minute time limit per claim?",
      options: [
        "To keep the total exercise time under 30 minutes for scheduling purposes",
        "To simulate real-world conditions where you must assess AI output quickly without full verification",
        "To prevent students from using external sources to verify each claim",
        "To increase the difficulty level and separate advanced students from beginners"
      ],
      correctOption: 1,
      explanation: "The 2-minute constraint simulates actual decision-making — in real life, you cannot verify every AI claim exhaustively. You must develop rapid, calibrated judgment about when to trust, when to doubt, and when to verify. Unlimited time would train a different (and less useful) skill.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "A student is consistently overconfident on history claims but well-calibrated on science claims. What should they learn from this pattern?",
      options: [
        "They should avoid using AI for history topics entirely",
        "They should rate all history claims at 50% confidence going forward",
        "History AI outputs are less reliable than science AI outputs",
        "Their calibration weakness is topic-specific — they need extra verification in history, not across all domains"
      ],
      correctOption: 3,
      explanation: "Topic-specific patterns are the most actionable finding from calibration. The student's science calibration proves they can judge AI accuracy well — their history overconfidence reveals a specific domain where their trust exceeds their knowledge. The fix is targeted verification in history, not blanket distrust or arbitrary confidence limits.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "The Error Taxonomy includes 8 categories. Why use a fixed taxonomy rather than letting students describe errors in their own words?",
      options: [
        "A fixed taxonomy saves time during annotation by providing pre-made labels",
        "Students cannot describe errors accurately in their own words at this stage",
        "Standardized categories enable precise communication, pattern tracking, and consistent error classification across exercises",
        "The 8 categories cover every possible type of error AI can make"
      ],
      correctOption: 2,
      explanation: "A taxonomy provides a shared vocabulary that enables precise communication ('false confidence' is more specific than 'seems off'), cross-exercise pattern tracking (which error types do you consistently miss?), and consistent classification. Free-form descriptions would vary too much to aggregate or compare. The 8 categories do not cover every error, but they cover the most common AI failure modes.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "An AI response discusses education policy without mentioning developing nations. A student marks this as 'missing context.' Is this annotation correct?",
      options: [
        "No — this should be classified as cultural blind spot, not missing context",
        "Yes — omitting developing nation perspectives on a global education question is missing crucial context",
        "No — missing context only applies when data is omitted, not perspectives",
        "Yes — but only if the original question explicitly mentioned developing nations"
      ],
      correctOption: 0,
      explanation: "Omitting developing nation perspectives when discussing global education is a cultural blind spot — assuming one cultural context (likely Western/developed) applies universally. Missing context is about omitting crucial factors within the analysis's own frame, while cultural blind spot is about assuming one frame is the only frame.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "In the Contradiction Test, a student's evolution note says 'I changed some wording for clarity.' What is wrong with this evolution note?",
      options: [
        "The note is too short — evolution notes must be at least 100 words",
        "The note fails to include the page numbers where changes were made",
        "The note should reference specific AI feedback that prompted the changes",
        "The note describes cosmetic changes rather than substantive intellectual evolution"
      ],
      correctOption: 3,
      explanation: "Evolution notes must document substantive intellectual changes: 'I reversed my position on X because the AI critique revealed I had no evidence for it' or 'I added a section on Y after recognizing this was my biggest blind spot.' Wording changes are cosmetic, not evidence of genuine thinking evolution. The note does not need to be long, but it must be substantive.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "Why does the Contradiction Test ask students to determine which claims are 'supported by evidence vs. asserted without support'?",
      options: [
        "To teach students to count the number of citations in each AI response",
        "To train the distinction between claims backed by reasoning/data and claims stated confidently without any backing",
        "To identify which AI tool provides more references in its output",
        "To prepare students for academic writing where citations are required"
      ],
      correctOption: 1,
      explanation: "The evidence-vs-assertion distinction is a core analytical skill. AI often states claims with equal confidence regardless of evidence quality — a well-supported claim and an unsupported assertion can sound identical. Training students to distinguish them prevents accepting confident-sounding claims at face value.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "The Build It, Then Break It exercise requires a 200-word reflection. What should the reflection focus on?",
      options: [
        "Listing every error found in both domains with their taxonomy categories",
        "Evaluating which AI tool produced more errors across both topics",
        "Comparing error detection rates between domains and articulating what this means for future AI use",
        "Describing the live discussion with the domain partner in chronological order"
      ],
      correctOption: 2,
      explanation: "The reflection's purpose is to articulate the gap between expert and non-expert error detection and what this means practically. It should produce a concrete behavioral change: 'I will seek expert review when using AI in domains where I lack expertise.' Error lists, tool comparisons, and discussion summaries miss the metacognitive point.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "A student consistently detects factual errors but misses logical gaps across all exercises. What does this pattern reveal?",
      options: [
        "The student is only reading surface-level content, not analyzing reasoning structures",
        "Logical gaps are rarer than factual errors in AI output",
        "The student needs to switch to a different AI tool that makes fewer logical gaps",
        "Factual errors are more important to catch than logical gaps"
      ],
      correctOption: 0,
      explanation: "Catching factual errors but missing logical gaps suggests the student checks claims against known facts but does not analyze whether conclusions follow from premises. This is a reasoning analysis skill gap — the student reads for accuracy but not for logical structure. The fix is practicing specifically on identifying whether conclusions follow from the evidence presented.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "The Confidence Calibration Chart plots confidence ratings against verified accuracy. What does a perfectly calibrated student's chart look like?",
      options: [
        "All claims rated at exactly 50% confidence to minimize risk",
        "High-confidence claims are almost all correct; low-confidence claims are almost all incorrect",
        "All claims rated at 100% confidence with all being correct",
        "A random scatter pattern showing no relationship between confidence and accuracy"
      ],
      correctOption: 1,
      explanation: "Perfect calibration means confidence matches reality across the full range. Claims rated 90% confident are correct 90% of the time. Claims rated 30% confident are correct 30% of the time. Rating everything at 50% or 100% shows poor calibration — the student is not distinguishing between claims they can judge and claims they cannot.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "Why is the Confidence Calibration exercise repeated at the end of the book?",
      options: [
        "To ensure students remember the exercise format for their final portfolio",
        "To compare different AI tools that may be available at the end of the course",
        "To provide additional practice since once is not enough for skill development",
        "To measure how much calibration improves after 10 chapters of thinking skill development"
      ],
      correctOption: 3,
      explanation: "The baseline established in Chapter 2 becomes the comparison point for growth. After completing all 10 chapters, students repeat the exercise to see whether their ability to judge AI accuracy has improved. The growth trajectory — not the absolute score — is the most powerful evidence of development.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "A student's error prediction document says 'AI will probably make some mistakes.' Why is this prediction too weak?",
      options: [
        "It is too vague to confirm or refute — no specific error types, topics, or failure modes are predicted",
        "It is too pessimistic about AI capabilities",
        "Predictions should be optimistic about AI to avoid confirmation bias",
        "Error predictions must include exact percentages for each error category"
      ],
      correctOption: 0,
      explanation: "A useful prediction is specific and testable: 'AI will overstate consensus on nuclear energy because it conflates different types of studies' or 'AI will miss the developing-nation perspective because training data skews Western.' Vague predictions teach nothing because there is no way to compare them against actual results. Exact percentages are unnecessary, but specific categories and topics are essential.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "An AI response on serverless architecture makes 5 claims. The student marks all 5 as 'false confidence.' What should they reconsider?",
      options: [
        "Whether 5 errors is too many for a single response to contain",
        "Whether they should use a different AI tool for technical topics",
        "Whether they are using 'false confidence' as a catch-all because they disagree with the conclusions",
        "Whether the false confidence category should be split into subtypes"
      ],
      correctOption: 2,
      explanation: "Marking everything as the same category suggests the student is using 'false confidence' as a generic 'I disagree' label rather than precisely identifying unjustified certainty. Some of those 5 claims may be factual errors, logical gaps, or missing context instead. The taxonomy requires precise categorization — each error type has a specific meaning.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "In the Contradiction Test, a student's third analysis is rated higher than both AI responses by the AI Check. What does this demonstrate?",
      options: [
        "The AI Check is biased toward human-written content",
        "A human who critically analyzes two AI outputs can produce something more rigorous than either source",
        "The student must have used a third AI tool to improve their analysis",
        "The AI responses were unusually weak for this particular topic"
      ],
      correctOption: 1,
      explanation: "This demonstrates the exercise's core thesis: by identifying where two AI responses diverge, evaluating which claims have evidence, and synthesizing the strengths of both while correcting weaknesses, a human can produce a more rigorous analysis than either AI alone. This is genuine critical thinking — the kind AI cannot replicate.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "The Solo Learner Alternative for Build It, Then Break It asks students to analyze AI output in both a familiar and unfamiliar domain. Why both?",
      options: [
        "To double the exercise length and practice time",
        "To ensure solo students complete the same number of annotations as paired students",
        "To test whether AI produces different quality output across domains",
        "To create the same expert-vs-novice contrast that paired students experience"
      ],
      correctOption: 3,
      explanation: "The two-domain approach recreates the expert-vs-novice contrast for solo learners. The gap between detection rates in your expert domain and your unfamiliar domain reveals exactly how much domain expertise matters — the same lesson paired students learn through cross-domain verification with their partner.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "A student's Confidence Calibration Chart shows they are underconfident on most claims — rating 30% confidence on things that turn out to be correct. What strategy would help?",
      options: [
        "Rate all claims at 80%+ to compensate for the underconfidence pattern",
        "Stop using confidence ratings and rely on gut feeling instead",
        "Identify which claim types they underrate and calibrate upward specifically for those categories",
        "Only rate claims in domains they have personal expertise in"
      ],
      correctOption: 2,
      explanation: "Calibration improvement requires targeted adjustment. The student should identify which specific claim types or topics they underrate and build confidence specifically in those areas. Blanket adjustment (rating everything higher) replaces one calibration error with another. The goal is matching confidence to reality per category.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "The Chapter 2 grading criteria assigns 25% to error detection precision. What does 'precision' mean in this context?",
      options: [
        "The balance between false positives (flagging correct content as errors) and false negatives (missing real errors)",
        "How quickly the student identifies errors in AI output",
        "How many total errors the student identifies across both AI responses",
        "How neatly the student formats their error annotations"
      ],
      correctOption: 0,
      explanation: "Precision in error detection measures accuracy: false positives (marking correct content as errors) and false negatives (missing actual errors). A student with high precision correctly identifies real errors without over-flagging. Total count, speed, and formatting do not measure detection quality.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "Why does the Error Taxonomy include 'outdated information' as a separate category from 'factual error'?",
      options: [
        "Outdated information only applies to statistics, while factual errors apply to all claims",
        "Outdated information is less serious than factual errors and needs a lower-priority label",
        "AI tools cannot distinguish between current and outdated information",
        "Outdated information was correct when published but is no longer current — it requires different detection than outright false claims"
      ],
      correctOption: 3,
      explanation: "Outdated information is a distinct error type because the claim may have been true at one point — it requires knowledge of currency, not just correctness. 'The UK is part of the EU' was correct before 2020 but is outdated now. This requires different detection (checking dates and recency) than factual errors (checking truth value).",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "In the Contradiction Test, a student notices both AI tools agree on a claim but suspects it might be wrong. What should they do?",
      options: [
        "Accept the claim — if both tools agree, it is likely correct",
        "Investigate independently — shared training data means both tools can share the same error",
        "Mark it as 'false confidence' in both responses",
        "Ignore it and focus only on divergence points"
      ],
      correctOption: 1,
      explanation: "Agreement between two tools trained on similar data does not guarantee accuracy. If something seems off despite consensus, the student should investigate independently. Both tools can be wrong in the same way because they learned from the same sources. Following suspicion rather than deferring to consensus is exactly the critical thinking this exercise trains.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "A student's domain expertise annotation catches an error where AI says their city's main industry is tourism when it is actually manufacturing. Why would a non-expert miss this?",
      options: [
        "The claim sounds plausible — many cities rely on tourism, and without local knowledge, there is no reason to question it",
        "Non-experts do not read AI output carefully enough to notice details",
        "Non-experts trust AI more than experts do",
        "Manufacturing and tourism are similar enough that the error does not matter"
      ],
      correctOption: 0,
      explanation: "This is exactly why domain expertise matters for error detection. The claim 'main industry is tourism' is plausible for many cities — it passes the plausibility test that non-experts rely on. Only someone with local knowledge can flag it as wrong. The error matters significantly for any analysis built on this assumption.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "The Confidence Calibration exercise covers six topic areas. Why test across multiple topics rather than one?",
      options: [
        "Multiple topics make the exercise longer and more comprehensive",
        "AI makes different types of errors in different topic areas",
        "Calibration varies by domain — students are overconfident in some areas and underconfident in others",
        "Instructors need scores across topics to assign final grades"
      ],
      correctOption: 2,
      explanation: "Testing across science, history, current events, technology, geography, and law reveals topic-specific calibration patterns. Most students are well-calibrated in some domains and poorly calibrated in others. This domain-specific awareness is more actionable than a single overall calibration score.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "What is the difference between an error the student 'caught because of domain expertise' and an error they 'suspect but cannot confirm'?",
      options: [
        "Caught errors are major while suspected errors are minor",
        "There is no meaningful difference — both should be listed together",
        "Caught errors use the Error Taxonomy while suspected errors do not",
        "Caught errors are verified through personal knowledge; suspected errors need additional research to confirm"
      ],
      correctOption: 3,
      explanation: "The distinction matters: errors caught through expertise are confirmed — the student knows the AI claim is wrong from personal knowledge. Suspected errors trigger a 'something seems off' feeling but the student cannot verify without further research. Separating them teaches honest self-assessment of what you truly know vs. what you sense.",
      source: "Exercise 3: Build It, Then Break It"
    },
    {
      question: "A student rates their confidence at 95% on a claim about a topic they know nothing about. The claim turns out to be correct. Was their high confidence appropriate?",
      options: [
        "Yes — the claim was correct, so high confidence was justified",
        "No — the confidence was not based on knowledge, so it was poorly calibrated despite being lucky",
        "Yes — intuition about AI accuracy is a valid basis for high confidence",
        "No — 95% confidence should be reserved for claims the student personally verified"
      ],
      correctOption: 1,
      explanation: "Calibration measures whether confidence is based on sound judgment, not whether the outcome was correct. Being right by luck at 95% confidence in an unknown domain is poor calibration — it worked this time but will fail in the long run. Good calibration means high confidence is reserved for claims you can actually evaluate.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "The Chapter 2 portfolio requires 'all AI feedback responses with your reflections.' Why include AI feedback alongside student reflections?",
      options: [
        "AI feedback serves as the answer key for instructors to use when grading",
        "AI feedback is required to calculate the Thinking Score Card averages",
        "Paired feedback and reflection shows whether the student engaged critically with AI evaluation or just read and moved on",
        "Including both makes the portfolio look more comprehensive for external reviewers"
      ],
      correctOption: 2,
      explanation: "The pairing reveals engagement quality. A student who reflects deeply on AI feedback shows growth: 'The AI said I missed logical gaps — I now realize I was only checking facts, not reasoning.' A student who includes feedback with no substantive reflection shows passive acceptance of the grading process itself.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "Which skill from Chapter 1 is explicitly referenced as carrying forward into Chapter 2?",
      options: [
        "The Question Formulation skill and Reasoning Receipt format",
        "The Divergence Test for class-wide comparison",
        "The Live Defence format for peer panels",
        "The Solo Learner Alternative approach to AI-as-partner"
      ],
      correctOption: 0,
      explanation: "Chapter 2 explicitly builds on Chapter 1's Question Formulation skill (for designing error-detection queries) and the Reasoning Receipt format (which becomes the annotation format for documenting AI errors). The Building On callout at the chapter opening makes this connection explicit.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "An AI claims 'correlation between ice cream sales and drowning deaths proves ice cream causes drowning.' Which Error Taxonomy category applies?",
      options: [
        "Factual error — the statistics are wrong",
        "Correlation-causation confusion — a correlation is treated as proof of causation",
        "False confidence — the claim is stated too confidently",
        "Logical gap — the conclusion does not follow from the data"
      ],
      correctOption: 1,
      explanation: "This is the textbook example of correlation-causation confusion — both ice cream sales and drowning increase in summer (a confounding variable), but one does not cause the other. While this is technically also a logical gap, the specific subcategory (correlation-causation confusion) is more precise and useful for pattern tracking.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "Why does the exercise require annotating BOTH Claude and ChatGPT responses rather than just one?",
      options: [
        "To increase the total number of annotations for the portfolio",
        "To ensure students practice the Error Taxonomy on enough examples",
        "To determine which AI tool is more reliable for future use",
        "To compare error patterns across tools — different tools may fail in different ways on the same question"
      ],
      correctOption: 3,
      explanation: "Annotating both responses reveals tool-specific error patterns — Claude might excel at logical reasoning but miss cultural context, while ChatGPT might cite more sources but with lower accuracy. Understanding how different tools fail differently is more valuable than ranking tools or simply getting more practice.",
      source: "Exercise 1: The Error Prediction"
    },
    {
      question: "The Confidence Calibration exercise asks students to 'flag red flags' for each claim. What qualifies as a red flag?",
      options: [
        "Specific signals like round numbers, absolute language, or claims that seem too good to be true",
        "Any claim the student has never heard before",
        "Claims from topics the student did not study in school",
        "Any claim that contradicts the student's personal beliefs"
      ],
      correctOption: 0,
      explanation: "Red flags are specific signals that suggest a claim may be inaccurate: suspiciously round numbers ('exactly 50%'), absolute language ('always', 'never', 'all'), claims that seem too convenient, or specific details that are hard to verify. Unfamiliarity and personal disagreement are not red flags — they are subjective reactions.",
      source: "Exercise 4: Confidence Calibration"
    },
    {
      question: "In the Contradiction Test, what makes a student's third analysis 'more rigorous' than the two AI responses?",
      options: [
        "It is longer and covers more subtopics than either AI response",
        "It uses more formal academic language than AI typically produces",
        "It identifies which claims have evidence, incorporates strengths from both, and corrects weaknesses in both",
        "It cites more external sources than either AI response included"
      ],
      correctOption: 2,
      explanation: "Rigor means distinguishing evidence-supported claims from assertions, taking the strongest points from each AI response, and correcting the weaknesses in both. Length, formality, and citation count are surface features. A rigorous analysis can be shorter than either AI response if it is more precise and better-supported.",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "The Chapter 2 grading criteria assigns 20% to contradiction analysis quality. What specifically is being graded?",
      options: [
        "Whether the student found the maximum number of contradictions between AI responses",
        "The three-draft evolution showing genuine improvement in rigor and reasoning",
        "Whether the student chose the correct AI response as the 'winner'",
        "The length and formatting of the divergence annotations"
      ],
      correctOption: 1,
      explanation: "The 20% weight evaluates the three-draft evolution — whether genuine intellectual improvement is visible across drafts. Finding contradictions is necessary but not sufficient. There is no 'correct winner' between AI responses. The grade lives in the gaps between drafts: did the student's thinking genuinely improve through the iterative process?",
      source: "Exercise 2: The Contradiction Test"
    },
    {
      question: "A student discovers that AI makes more 'missing context' errors than any other category across both exercises. What should they do with this insight?",
      options: [
        "Use this pattern to predict and check for missing context first in future AI interactions",
        "Report the finding to the AI tool developers for improvement",
        "Avoid using AI for topics that require broad context",
        "Focus exclusively on missing context detection and ignore other error types"
      ],
      correctOption: 0,
      explanation: "Error patterns are predictive — if AI consistently misses context, you can proactively check for it in future interactions. This is the value of the taxonomy: patterns become predictive tools. Reporting to developers, avoiding AI, or over-focusing on one category all miss the practical application of pattern recognition.",
      source: "Exercise 1: The Error Prediction"
    }
  ]}
questionsPerBatch={18}
/>
