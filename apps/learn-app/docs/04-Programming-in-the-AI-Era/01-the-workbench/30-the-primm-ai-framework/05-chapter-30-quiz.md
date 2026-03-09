---
sidebar_position: 5
title: "Chapter 30: The PRIMM-AI+ Framework Quiz"
---

# Chapter 30: The PRIMM-AI+ Framework Quiz

Test your understanding of the PRIMM-AI+ framework — the teaching method that governs all programming instruction in this book. This assessment covers all 4 lessons in Chapter 30.

<Quiz
  title="Chapter 30: The PRIMM-AI+ Framework Assessment"
  questionsPerBatch={18}
  questions={[
{
question: "A student opens a Python program and immediately asks AI to explain every line before reading it themselves. Which PRIMM stage did they skip entirely?",
options: ["Investigate — they should have traced variables first", "Run — they should have executed the code first", "Predict — they should have formed their own mental model first", "Make — they should have written their own version first"],
correctOption: 2,
explanation: "Predict requires you to study the code and form your own mental model before any external help. By asking AI to explain immediately, the student bypassed the prediction step that builds comprehension. Investigate comes after Run, not before Predict. Run executes code but the student hasn't predicted yet. Make is the final creation stage, not relevant here. The Predict stage is always AI-free because forming your own hypothesis is what builds understanding.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "PRIMM was tested with 493 students across 13 schools. What was the key finding of this research?",
options: ["Students using PRIMM outperformed those who learned without it", "Students completed assignments faster with the PRIMM method", "Students preferred PRIMM over traditional lecture-based instruction", "Students retained syntax rules longer using the PRIMM approach"],
correctOption: 0,
explanation: "The research by Sentance, Waite, and Kallia found that PRIMM learners outperformed control groups, especially in classes with mixed skill levels. The study measured understanding, not speed of completion. Student preference was not the primary measured outcome. Syntax retention was not the focus — comprehension and code-reading ability were the measured skills.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "In the pre-AI era, the development bottleneck was writing code from scratch. What shifted this bottleneck in the AI era?",
options: ["Verifying and understanding AI-generated code became the bottleneck", "Testing code became the primary time-consuming activity", "Deploying code to production servers became the main challenge", "Managing version control across large teams became the constraint"],
correctOption: 0,
explanation: "AI made code production nearly free — a prompt generates working functions in seconds. The bottleneck shifted from writing code to verifying whether AI-generated code is correct, safe, and does what was intended. Testing is part of verification but not the full picture. Deployment and version control are operational concerns, not the comprehension bottleneck that PRIMM addresses.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "A student predicts a program will print 'Hello Sarah' but the actual output is 'Hello, Sarah!' with a comma and exclamation mark. What does PRIMM say about this gap?",
options: ["The student failed and should restart the lesson entirely", "The gap indicates a fundamental misunderstanding requiring remediation", "The student should ask AI to explain before attempting again", "The gap is the most valuable learning signal revealing hidden assumptions"],
correctOption: 3,
explanation: "The prediction-reality gap is PRIMM's learning engine. Close-but-not-exact predictions reveal specific assumptions the student didn't know they were making — like how punctuation in string concatenation works. This is not failure requiring a restart; it's the mechanism that drives learning. Remediation overstates the issue — the student was close. Asking AI first would bypass the learning that comes from analyzing the gap yourself.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "PRIMM has a 4:1 ratio of understanding stages to writing stages. Why is this ratio significant in the AI era?",
options: ["It matches the shift where verification is expensive and production is cheap", "It ensures students spend most time practicing Python syntax rules", "It prevents students from using AI tools during their coursework", "It guarantees students will memorize all programming constructs faster"],
correctOption: 0,
explanation: "Four of five PRIMM stages (Predict, Run, Investigate, Modify) build verification skills, and only one (Make) involves writing from scratch. This matches the AI era where code production is cheap but verification is expensive. The ratio has nothing to do with syntax memorization or preventing AI use. PRIMM does not aim to help students memorize faster — it builds the comprehension skills that make verification possible.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "During the Investigate stage, a student asks AI: 'What would happen if I swapped the order of two variables in the message line?' What cognitive skill is this building?",
options: ["Systematic edge-case exploration that builds deeper mental models", "Speed optimization for faster code production in timed scenarios", "Syntax memorization through repetitive exposure to patterns", "Debugging skills for finding errors in production environments"],
correctOption: 0,
explanation: "Asking 'what if' questions during Investigate builds systematic exploration skills — testing assumptions about how code behaves under different conditions. This is not memorization; it's active hypothesis testing. Speed optimization is irrelevant to the Investigate stage. While this skill relates to debugging, the primary purpose during Investigate is building mental models through targeted questioning, not fixing production bugs.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "A student wants to add a second print line to a program. The Modify stage says to attempt it yourself first. What is the pedagogical reason for this requirement?",
options: ["It prevents the AI from generating incorrect code solutions", "Modification builds skills that creation requires using a safety net", "It saves AI API tokens by reducing unnecessary code generation", "It proves the student can type code without external assistance"],
correctOption: 1,
explanation: "Modification is easier on your brain than creation because you have a working reference, a known structure, and a safety net. By modifying existing code, you build the skills that writing from scratch (Make) requires. This isn't about preventing AI errors or saving tokens. Typing ability is irrelevant — the goal is understanding how changes affect program behavior, which prepares you for independent creation.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "A student writes a prediction on paper: 'Welcome to the Agent Factory, Sarah!' with confidence score 4. Why does PRIMM require this to be written, not just thought?",
options: ["Written records help teachers grade student performance accurately", "Spoken predictions are harder for AI assistants to process later", "Paper predictions can be shared with study groups more easily", "Writing forces commitment and makes vague guesses visible as gaps"],
correctOption: 3,
explanation: "A vague sense of 'it probably prints a greeting' is not a prediction. Writing forces you to commit to a specific, checkable answer — you can prove it right or wrong. This commitment is what transforms passive observation into active hypothesis testing. Teacher grading is not the primary purpose. AI processing of predictions is irrelevant. Sharing with study groups is a side benefit, not the core reason.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "In the Make stage, students write a specification before writing code. Which earlier chapter's concept does this directly apply?",
options: ["Spec-Driven Development from Chapter 5 applied to learning exercises", "Context Engineering from Chapter 4 applied to code generation", "The Agent Factory paradigm from Chapter 1 applied to projects", "Version control workflows from Part 2 applied to code management"],
correctOption: 0,
explanation: "The Make stage uses Spec-Driven Development directly: define what the program should do (inputs, outputs, edge cases) before writing a single line of code. This is Chapter 5's core concept applied to learning. Context Engineering (Chapter 4) is about managing AI context, not specification. The Agent Factory paradigm is about building AI agents, not writing specs. Version control is a separate workflow concern.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "A developer can produce fifty lines of working Python in ten seconds using AI but cannot explain what line twelve does. According to the chapter, what is the core problem?",
options: ["They have working code but zero comprehension — copying, not programming", "The developer lacks the syntax knowledge to read Python fluently", "The AI generated code that is too complex for beginners", "The AI tool needs better documentation for generated code output"],
correctOption: 0,
explanation: "This is the comprehension crisis: having working code without understanding. As Emma tells James, 'You are not programming. You are copying.' The problem is not code complexity or syntax knowledge — it's the absence of the verification skill needed to read, understand, and judge AI-generated code. Better AI documentation would not solve the core issue of the developer's missing comprehension.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "A student rates their prediction confidence as 3 out of 5, meaning 'think I know but could be wrong.' After running the code, their prediction is exactly correct — but they cannot explain WHY line 4 produces its result. What should happen next?",
options: ["They should celebrate and move directly to the Make stage", "They should investigate why their confidence was lower than their accuracy", "They should increase their score to 5 and proceed to Modify", "They should repeat the prediction with a different program immediately"],
correctOption: 1,
explanation: "The student got the right output but cannot explain why a specific line works — that is underconfidence combined with a genuine understanding gap. Investigation helps close both: analyzing why line 4 works builds real comprehension, and discovering that their intuition was correct recalibrates confidence. Skipping to Make bypasses Investigate and Modify. Retroactively changing the score defeats the purpose of confidence tracking. Repeating with a different program skips the investigation that would improve both understanding and calibration.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "PRIMM was created by Sentance and Waite in 2017 for secondary school classrooms. Why does the chapter argue it matters MORE in the AI era?",
options: ["Schools have adopted it widely so it has institutional momentum", "Student attention spans have decreased requiring more structured methods", "Teaching budgets have been cut requiring cheaper instructional methods", "AI made code production free, making comprehension the scarce bottleneck skill"],
correctOption: 3,
explanation: "Before AI, writing code was slow and expensive — the bottleneck was production. AI made production nearly free, shifting the bottleneck to comprehension. PRIMM's emphasis on reading and understanding code is now more critical than when it was invented. Institutional adoption, attention spans, and budgets are not the argument the chapter makes — the argument is about the economic shift in what skill is scarce.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "A student completes all five PRIMM stages on a four-line program. They started by reading someone else's code and ended by writing their own. What does this progression demonstrate?",
options: ["The student mastered Python syntax through repetitive drilling exercises", "The student can now write any Python program without assistance needed", "Programming ability grows through comprehension first then creation afterward", "The student memorized the greeting program pattern for future reuse"],
correctOption: 2,
explanation: "PRIMM's core thesis is that comprehension enables creation. The five-stage progression from reading (Predict) to writing (Make) demonstrates that understanding builds the foundation for independent production. This is not about syntax mastery or memorizing patterns — it's about building mental models. One completed cycle does not mean the student can write any program; it means they've practiced the method that builds capability over time.",
source: "Lesson 1: The PRIMM Framework"
},
{
question: "PRIMM-AI adds an AI coding assistant to the five stages. What gap does PRIMM-AI+ close that basic PRIMM-AI leaves open?",
options: ["PRIMM-AI lacks code execution capabilities that PRIMM-AI+ provides", "PRIMM-AI has no way to generate code examples for student practice", "PRIMM-AI+ adds structural safeguards preventing students from skipping stages", "PRIMM-AI cannot be used with modern AI tools like Claude or Copilot"],
correctOption: 2,
explanation: "Basic PRIMM-AI defines AI roles at each stage but nothing prevents students from asking AI to explain code during Predict or write solutions during Make. PRIMM-AI+ adds nine enhancements (checkpoints, gates, permissions) that enforce the boundaries. PRIMM-AI can execute code and generate examples fine. It works with any AI tool. The specific gap is that boundaries are implied in PRIMM-AI but enforced in PRIMM-AI+.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "During the Predict stage, a student asks AI: 'What will this code print?' According to the AI Permissions Table, why is this wrong?",
options: ["The AI might give an incorrect answer about the output", "It bypasses the mental model building that prediction requires", "The student should use a different AI tool for predictions", "The AI is not capable of predicting code output accurately"],
correctOption: 1,
explanation: "The AI Permissions Table marks this as a Wrong Interaction because it asks AI to do the predicting instead of the student. The student's brain does zero work — they read an answer instead of building a mental model. Whether the AI answer is correct is irrelevant; the problem is that the student skipped the thinking. Tool choice doesn't matter. AI can predict output accurately — the issue is pedagogical, not technical.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "A student sees the [AI-FREE] marker during an exercise but worries about getting stuck without AI help. How does the chapter frame these checkpoints?",
options: ["They reveal your actual understanding versus what you merely recognize", "They are penalties for students who rely too heavily on tools", "They are optional challenges only for advanced and confident students", "They are timed exercises measuring how fast you can work alone"],
correctOption: 0,
explanation: "AI-free checkpoints are diagnostic, not punitive. They reveal whether you truly understand something or merely recognize it when AI explains it. There is a large gap between those two states. They are not penalties, optional challenges, or timed exercises. Every student encounters them because the diagnostic value applies equally to beginners and experienced learners.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "A student finishes reading a program and says 'I get it, let me jump to modifying it.' The mastery gate blocks this. What must the student demonstrate first?",
options: ["They must explain HOW the program works, not just WHAT it does", "They must have run the program at least three times successfully", "They must have asked AI five investigation questions about the code", "They must have memorized every variable name used in the program"],
correctOption: 0,
explanation: "The mastery gate before Modify requires explaining how the program works — not just what it outputs. 'It prints a greeting' is what; 'It joins two strings with a comma separator using the + operator' is how. Running three times, asking five questions, and memorizing variables are not gate requirements. The gate tests depth of understanding, ensuring you can explain the mechanics before attempting changes.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "During Investigate, a student says 'I think I understand it' but cannot write anything down. Which mandatory artifact option addresses this situation directly?",
options: ["A trace table showing variable values after each line executes", "A failure note documenting where they got stuck and what confused them", "A plain-English explanation of how the program works overall", "A comparison chart between their prediction and the actual output"],
correctOption: 1,
explanation: "A failure note saying 'I do not understand why str(score) is needed' is the most valuable artifact when you're stuck — it gives you an exact target for AI investigation questions. A trace table requires understanding the program well enough to trace it. A plain-English explanation requires more understanding than the student currently has. A prediction comparison belongs to the Run stage, not Investigate.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "Rule 2 states: 'Never trust an explanation you have not tested.' A student asks AI to explain a function, reads the answer, and accepts it. What professional habit does this skip?",
options: ["Writing documentation for the function before using it", "Following the coding style guide for consistent formatting", "Asking a second AI model to confirm the first explanation given", "The verification instinct that senior engineers apply to all assumptions"],
correctOption: 3,
explanation: "Rule 2 builds the verification instinct — the habit of testing every claim by running code yourself. Senior engineers test assumptions; junior engineers trust documentation. The student accepted an AI explanation without verifying it by running the code. Documentation and style guides are unrelated. Asking a second AI doesn't verify anything — only running the code does.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "A student uses AI during Make to write their entire program from a prompt. They submit working code but learned nothing new. Which PRIMM-AI+ rule did they violate?",
options: ["Rule 1: Never run code you have not predicted beforehand", "Rule 3: Always modify existing code before creating from scratch", "Rule 4: Write the specification before writing any code first", "Rule 5: Use AI as a partner for learning, not a crutch"],
correctOption: 3,
explanation: "Rule 5 distinguishes partner from crutch: after an AI interaction, do you understand more than before? If you have working code but the same understanding — that's a crutch. The student produced output without learning. Rule 1 is about predicting before running. Rule 3 is about modification before creation. Rule 4 is about writing specs first. All are important, but the core violation here is using AI as a ghostwriter.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "The AI Permissions Table shows that during Modify, AI may provide 'a minimal hint or targeted diff.' A student asks: 'Add a second print line to this program for me.' Why is this a Wrong Interaction?",
options: ["It asks AI to write the modification instead of providing a hint", "The student should ask for a complete rewrite instead of one line", "AI cannot add print lines to programs due to technical limitations", "The modification is too simple for AI assistance to be warranted"],
correctOption: 0,
explanation: "The moment AI writes the modification, you are in Make territory without having done the thinking that Modify requires. Your hands must produce the change; AI evaluates it afterward. Asking for a complete rewrite is even worse, not better. AI can technically add print lines — the restriction is pedagogical. Simplicity is irrelevant; the rule applies to all modifications regardless of complexity.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "A student completes a full PRIMM-AI+ cycle: predicted with confidence score, ran and compared, investigated after their own explanation, modified independently, and built from a written spec. What role did AI play throughout?",
options: ["AI was absent — the student worked entirely without assistance", "AI alternated between generating examples and writing solutions directly", "Partner at every stage with clear boundaries, ghostwriter at none", "AI only participated during the Run stage to execute the code"],
correctOption: 2,
explanation: "AI served as partner at every stage — generating code to predict, executing programs, answering investigation questions, comparing modifications, reviewing specifications — but never as ghostwriter. The student did the thinking at each stage with AI supporting, not replacing. AI was not absent; it participated throughout. It didn't write solutions or only execute code. The key is boundaries, not exclusion.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "Rule 3 says 'Modify before you make.' A student wants to skip modification and go straight to building a new program. What cognitive advantage of modification are they missing?",
options: ["Modification uses less AI tokens than creating from scratch does", "Modification requires no understanding of the original code at all", "Modification provides a working reference and known structure as safety net", "Modification is faster than creation so it saves total learning time"],
correctOption: 2,
explanation: "When you modify an existing program, you have a working reference, a known structure, and a safety net. When you create from scratch, you have nothing. Modification builds the skills that creation requires. Token usage is irrelevant to the pedagogical argument. Modification absolutely requires understanding the original code. Speed is not the justification — cognitive scaffolding is.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "The nine-enhancement table lists PRIMM-AI+ additions. A student asks: 'Why do I need mastery gates if I already have AI-free checkpoints?' What is the difference between these two enhancements?",
options: ["Checkpoints are for beginners while mastery gates are for advanced students", "Checkpoints restrict tool access; mastery gates require demonstrated understanding to proceed", "There is no difference — they are two names for the same concept", "Checkpoints apply only to Predict while mastery gates apply only to Make"],
correctOption: 1,
explanation: "AI-free checkpoints restrict when AI tools can be used (tool access). Mastery gates require demonstrated understanding before proceeding to the next stage (proof of learning). They complement each other: checkpoints ensure you work without AI at key moments, gates ensure you actually learned before moving on. They are not the same concept, not skill-level dependent, and both apply across multiple stages.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "A student asks AI: 'Explain everything about this code' during the Investigate stage without first writing their own explanation. What PRIMM-AI+ principle did they violate?",
options: ["The AI-free checkpoint requiring own explanation before engaging AI", "The mastery gate requiring a written prediction before running code", "The rule requiring specifications before any code implementation begins", "The trace artifact requirement to produce a visible investigation result"],
correctOption: 0,
explanation: "Investigate requires you to write your own explanation first, then ask AI specific questions. The student skipped the AI-free checkpoint by asking AI to explain everything before providing their own attempt. The mastery gate for written predictions is before Run, not Investigate. Specifications are for Make stage. Trace artifacts are what you produce during Investigate, but the violation here is skipping the 'your explanation first' checkpoint.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "PRIMM-AI+ is described as 'tool-agnostic.' A student uses GitHub Copilot instead of Claude Code. Do the PRIMM-AI+ boundaries still apply?",
options: ["No — PRIMM-AI+ was designed specifically for Claude Code only", "Yes — the method is the constant and the AI tool is the variable", "Only partially — some rules work with Copilot but others do not", "No — different AI tools require fundamentally different learning methods"],
correctOption: 1,
explanation: "PRIMM-AI+ boundaries work the same way regardless of which AI coding assistant you use. The method is the constant, the AI tool is the variable. The book uses Claude Code because it integrates with SDD, but every principle transfers. PRIMM-AI+ is not Claude-specific, doesn't partially apply, and doesn't require different methods per tool.",
source: "Lesson 2: PRIMM-AI+: AI as Your Learning Partner"
},
{
question: "The Verification Ladder has five steps. A student is currently at Step 1 (Prediction). What does this step require them to do?",
options: ["Write automated tests that verify code behavior against specifications", "Monitor running programs to catch problems after deployment finishes", "Read the code and commit to an answer before running it", "Run all checks including types, tests, and formatting together"],
correctOption: 2,
explanation: "Step 1 (Prediction) means reading code and committing to an answer before running it — the same predict-then-verify habit built throughout PRIMM-AI+. Automated tests are Step 3. Monitoring in production is Step 5. Running all checks together is Step 4 (Pipeline). Students start at Step 1 and progress through the remaining steps as they advance through the book.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "A student predicts a program's output with confidence 5 (certain) but gets it completely wrong. The chapter calls this 'the most dangerous state.' Why?",
options: ["High confidence is always bad because it indicates overlearning and complacency", "The student will lose motivation and may consider dropping the course", "Wrong answers always indicate the student needs to restart from Lesson 1", "False confidence leads to shipping bugs because you trust code you do not understand"],
correctOption: 3,
explanation: "False confidence — being certain and wrong — is dangerous because in professional practice, it means looking at AI-generated code, thinking 'looks right,' and shipping bugs. Confidence scoring trains you to know when you know and when you don't. High confidence itself is not bad when accurate. Wrong answers don't require restarting. Motivation loss is possible but not why the chapter calls it 'most dangerous.'",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "A student's code fails: they wrote name + score but score is a number, not text. Using the error taxonomy, what kind of bug is this?",
options: ["A logic error because the code runs but produces wrong output", "A specification error because they built the wrong feature entirely", "A type error because they gave the wrong kind of data to the operator", "An orchestration error because the lines execute in the wrong order"],
correctOption: 2,
explanation: "This is a type error — the + operator expects text on both sides, but score is a number. Python cannot join a string and an integer with +. A logic error would mean the code runs but gives wrong results. A specification error means building the wrong thing entirely. An orchestration error means lines execute in the wrong order. The fix is str(score) to convert the number to text.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "A student built a greeting program when the assignment asked for a profile card. The code works perfectly for greetings. Using the error taxonomy, what kind of bug is this?",
options: ["A type error because the output format does not match expectations", "A specification error because they built the wrong thing entirely", "A data error because the program breaks with unexpected input values", "A logic error because the greeting logic produces incorrect output text"],
correctOption: 1,
explanation: "This is a specification error — the code does exactly what the student asked it to do, but they asked for the wrong thing. The program works correctly as a greeting but the task required a profile card. A type error involves wrong data kinds. A data error involves unusual inputs breaking the code. A logic error means wrong results — but this program's results are correct for the wrong specification.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "In the professional practice mapping, the Predict stage maps to 'reading AI-generated code and predicting whether it is correct.' What does the Run stage map to professionally?",
options: ["Writing documentation for the codebase after features ship", "Deploying code directly to production servers without any testing", "Conducting performance benchmarks to optimize application response time", "Running automated tests and comparing results to expected behavior"],
correctOption: 3,
explanation: "Run maps to running automated tests and comparing results to expected behavior — the same predict-then-verify pattern at professional scale. Writing documentation is not a Run analog. Deploying without testing contradicts the verification principle. Performance benchmarking is a specific activity, not the general professional equivalent of Run's compare-and-verify pattern.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "The chapter-end rubric has five dimensions. A student scores 'Developing' on Prediction Accuracy and Explanation Quality. What does the chapter recommend?",
options: ["Move forward and revisit these dimensions in the next chapter", "Skip ahead to Make exercises to build confidence through creation", "Continue to the next chapter since Developing is an acceptable score", "Revisit those concepts before moving forward to the next chapter"],
correctOption: 3,
explanation: "If you score Developing on Prediction Accuracy or Explanation Quality, the chapter recommends revisiting those concepts before moving forward. Competent is the target, not Developing. Moving forward, skipping to Make, or accepting Developing on these two critical dimensions risks carrying gaps into increasingly complex material.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "The Verification Ladder connects learning predictions to production observability. What is the key insight about the predict-then-verify habit?",
options: ["It is a beginner exercise that professionals outgrow with experience", "It is only useful during formal education and training programs specifically", "It powers every step of the ladder from learning exercises to production", "It is replaced by automated testing once students learn programming fundamentals"],
correctOption: 2,
explanation: "The predict-then-verify habit is not a beginner exercise you outgrow — it powers every step of the Verification Ladder from Step 1 (Prediction) through Step 5 (Observability). Senior engineers do the same thing; they just call it code review and testing. The habit grows with you. It's not limited to education and is not replaced by automation — it's the foundation that makes testing meaningful.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "After each prediction, students record four things. What is the purpose of recording 'your revised explanation' as the fourth item?",
options: ["It creates documentation that teachers can use for grading purposes", "It makes visible what you now understand that you did not understand before", "It provides training data for improving AI model prediction accuracy", "It satisfies the mandatory trace artifact requirement for Investigate stage"],
correctOption: 1,
explanation: "The revised explanation captures learning: what you now understand that you didn't before. This makes the learning visible and concrete, not just a vague sense of 'I get it now.' It's not for teacher grading or AI training data. The four-item protocol (prediction, confidence, result, revised explanation) is part of confidence scoring, not the Investigate trace artifact requirement.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "A student tries to print a variable before creating it in their code. Using the error taxonomy, what kind of bug is this?",
options: ["An orchestration error because the pieces run in the wrong order", "A type error because the variable has no type assigned to it", "A logic error because the print statement has incorrect arguments", "A data error because the variable contains unexpected input values"],
correctOption: 0,
explanation: "This is an orchestration error — the pieces run in the wrong order. The student tried to use a variable before it was created, so the program fails because the required dependency doesn't exist yet. A type error involves wrong data kinds. A logic error means wrong results, not wrong execution order. A data error involves unusual inputs, not ordering problems.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "The PRIMM-AI+ at a Glance table shows that during Investigate, AI is allowed 'after your explanation.' What artifact must the student produce at this stage?",
options: ["A written specification defining what the program should do next", "A confidence score rating from one to five for their prediction", "A trace table, plain-English explanation, or failure note as visible evidence", "A modified version of the code with at least one change implemented"],
correctOption: 2,
explanation: "During Investigate, the student must produce a visible artifact: a trace table, plain-English explanation, or failure note. This prevents 'I think I understand it' without proof. A specification is for the Make stage. A confidence score is for the Predict stage. A modified version is for the Modify stage. The artifact requirement ensures investigation produces evidence, not just a feeling.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "The professional practice mapping shows that Make maps to 'building and delivering a complete solution from requirements.' What additional insight does the chapter add about professional Make?",
options: ["Professionals skip the Make stage entirely and rely on AI output", "In professional practice AI writes code from YOUR specification, making spec quality critical", "Professional Make requires writing all code manually without any AI assistance", "Make only applies during learning and has no professional equivalent whatsoever"],
correctOption: 1,
explanation: "While learning, you write the code yourself to build the skill. In professional practice, AI writes the code from YOUR specification — which is why learning to write clear specifications matters more than learning to type code fast. Professionals don't skip Make or write everything manually. Make absolutely has a professional equivalent — it's the most consequential stage in production work.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "Worked examples are complete programs students study before writing their own. Where do they fit in the PRIMM-AI+ sequence?",
options: ["Only during the Make stage as reference material for creation", "Only during the Modify stage as templates for code changes", "Between Investigate and Modify as structural comprehension checks", "During Predict and Investigate as code to analyze and trace through"],
correctOption: 3,
explanation: "Worked examples fit at Predict (you study the example and commit to a prediction) and Investigate (you trace through it and produce artifacts). They are not Make-stage reference material or Modify templates. The bridge between Investigate and Modify is where Parsons problems fit, not worked examples. The key insight is that studying complete code before writing builds understanding without requiring invention.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "A Parsons problem gives students four scrambled lines of code to reorder. What specific skill does this test that a simple 'explain this code' question does not?",
options: ["Whether the student can type code faster than their classmates", "Structural understanding of WHY the code must be ordered a specific way", "Whether the student has memorized the correct syntax for each line", "How many programming languages the student can recognize at a glance"],
correctOption: 1,
explanation: "Parsons problems test structural understanding — whether you know not just what each line does, but why the order matters. Reordering requires reasoning about data flow: which variables must exist before others can use them. This is deeper than explaining what code does. It doesn't test typing speed, syntax memorization, or language recognition. It tests whether you understand the program's architecture.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "In classroom mode, the teacher orchestrates PRIMM-AI+ and controls AI permissions. What replaces human collaboration in solo mode?",
options: ["Unstructured AI interaction without any specific learning boundaries", "Independent study with no AI involvement at any stage throughout", "Peer study groups organized through online collaboration platforms", "Structured AI interaction after passing through AI-free checkpoints first"],
correctOption: 3,
explanation: "In solo mode, you replace human collaboration with structured AI interaction — but only after passing through the AI-free checkpoint at each stage. This is not unstructured AI use; the checkpoints, confidence scoring, and mastery gates provide accountability. Solo mode is not AI-free; AI is essential but bounded. Online study groups would be classroom mode, not solo mode.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "The chapter says 'This book is designed for solo mode.' What is the primary self-accountability mechanism that replaces the teacher catching you skipping steps?",
options: ["The table of contents that shows lesson order and prerequisites clearly", "The code examples that are simple enough to understand without guidance", "External deadlines and assignment due dates set by the curriculum plan", "Confidence scoring that makes self-deception visible without a teacher present"],
correctOption: 3,
explanation: "Confidence scoring is especially important in solo mode because it makes self-deception visible. There is no classmate to challenge your assumptions, so you must challenge them yourself through honest self-assessment. The table of contents and simple examples help but don't enforce accountability. External deadlines are not part of the book's self-paced design. Confidence scoring is the explicit self-honesty tool.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "The five-step lesson architecture starts with Predict and ends with Make. Step 1 combines which two teaching methods?",
options: ["Worked example method combined with the AI-free checkpoint for prediction", "Live coding method combined with peer instruction for group discussion", "Parsons problems combined with trace artifact production for verification", "Peer instruction combined with modification exercises for active practice"],
correctOption: 0,
explanation: "Step 1 presents a compact, complete program (worked example) and asks students to write their prediction and confidence score without AI assistance (AI-free checkpoint). Live coding maps to Investigate and Modify. Parsons problems bridge Investigate and Modify. Peer instruction spans all stages but is not the primary Step 1 method. The combination of worked example + AI-free prediction defines Step 1.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "In the chapter-level PRIMM-AI+ pattern, what comes between the core investigation lessons and the modification exercises?",
options: ["A capstone project requiring students to build something entirely new", "A review lesson summarizing all concepts covered in the chapter", "Parsons problems that test structural understanding as a bridge", "A live coding demonstration by the instructor showing advanced techniques"],
correctOption: 2,
explanation: "The chapter-level pattern places Parsons problems (Structural Bridge) between core lessons (Investigate) and exercises (Modify). This tests structural understanding before students attempt free modifications. A capstone comes at the end, not the middle. Review lessons are not part of the PRIMM-AI+ pattern. Live coding demonstrations fit within Investigate/Modify but are not the structural bridge element.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "Live coding involves an instructor writing code in real time while narrating their thinking. In solo mode, how can students simulate this experience?",
options: ["By watching pre-recorded coding tutorials on video platforms online", "By asking AI to walk through adding a feature step by step with reasoning", "By reading the textbook examples without any AI interaction at all", "By typing the code examples from memory without looking at references"],
correctOption: 1,
explanation: "In solo mode, your AI assistant can serve a similar role to live coding when you ask it to walk through adding a feature step by step, explaining its reasoning as it goes — including mistakes and corrections. Pre-recorded tutorials lack interactivity. Reading without AI misses the narrated-thinking element. Typing from memory is a memorization exercise, not live coding simulation.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "Peer instruction means thinking individually first, then discussing with a partner. In solo mode, AI becomes the 'peer.' What rule ensures the student thinks before engaging AI?",
options: ["The mastery gate requiring demonstrated understanding before proceeding onward", "The AI Permissions Table restricting what topics AI can discuss with students", "The AI-free checkpoint ensuring own answer is committed before AI engagement", "The mandatory trace artifact requiring visible evidence of investigation work"],
correctOption: 2,
explanation: "The AI-free checkpoint ensures you commit your own answer first, then engage AI. This preserves the core peer instruction dynamic: individual thinking, then discussion. The mastery gate checks understanding before stage transitions, not before peer interaction. The AI Permissions Table defines allowed interactions per stage. Trace artifacts are investigation outputs, not peer instruction safeguards.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "The chapter states: 'You will never be dropped into a Make exercise cold.' What structural guarantee ensures this?",
options: ["Every Make exercise has four stages of preparation behind it from PRIMM", "Make exercises always include starter code that students can copy directly", "Teachers review all Make exercises before students attempt them independently", "AI automatically generates the solution if the student gets stuck completely"],
correctOption: 0,
explanation: "By the time a chapter asks you to write code from scratch (Make), you will have predicted, run, investigated, and modified programs using the same concepts. Four stages of preparation stand behind every Make exercise. Starter code would undermine independent creation. Teacher review is classroom mode, not the structural guarantee. AI generating solutions would violate the Make stage's partner-not-ghostwriter principle.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "The four teaching methods summary table shows where each method fits. Which method spans all five PRIMM-AI+ stages rather than mapping to specific ones?",
options: ["Worked examples that provide complete programs for students to study", "Peer instruction involving individual thinking then group discussion together", "Parsons problems requiring students to reorder scrambled code lines correctly", "Live coding with real-time narrated thinking including mistakes and debugging"],
correctOption: 1,
explanation: "Peer instruction fits across all stages — you can share predictions, discuss investigation findings, compare modifications, and review Make specifications with peers (or AI in solo mode). Worked examples map to Predict and Investigate specifically. Parsons problems bridge Investigate and Modify. Live coding maps to Investigate and Modify. Only peer instruction spans the entire sequence.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "The goal of confidence scoring is NOT to always rate yourself 5. What IS the actual goal according to the chapter?",
options: ["Minimizing the total number of wrong predictions you make overall", "Achieving consistent scores of 4 or higher across all predictions made", "Having your confidence scores accurately predict your actual accuracy rate", "Always rating yourself 1 to avoid the dangers of overconfidence entirely"],
correctOption: 2,
explanation: "The goal is calibration — your confidence scores should accurately predict your actual accuracy. If you rate 5, you should be right most of the time; if you rate 2, you should expect to be wrong often. Minimizing wrong predictions or always scoring high misses the point. Always rating 1 is underconfidence, which is also a calibration problem. The skill is knowing when you know and when you don't.",
source: "Lesson 3: The PRIMM-AI+ Toolkit"
},
{
question: "A student encounters a Parsons problem: four scrambled lines including city, temp, label, and print. To solve it correctly, what must they reason about?",
options: ["Which lines have the fewest characters to place them at the top", "The alphabetical order of variable names used throughout the program", "The visual indentation patterns that make the code look most readable", "Data flow — which variables must exist before other lines can use them"],
correctOption: 3,
explanation: "Parsons problems require reasoning about data flow: city must exist before label can use it, temp must exist before label can use it, and label must exist before print can display it. Character count is irrelevant to correctness. Alphabetical ordering of variable names has no bearing on execution order. Indentation matters for some languages but data dependencies determine the correct sequence here.",
source: "Lesson 4: The Complete Teaching and Learning System"
},
{
question: "The chapter-level PRIMM-AI+ pattern ends with a capstone exercise. Which PRIMM stage does this capstone map to, and what methodology does it use?",
options: ["Investigate stage using systematic trace tables and variable tracking", "Modify stage using iterative refinement of existing working programs", "Predict stage using confidence scoring and written prediction protocols", "Make stage using Spec-Driven Development with AI as code reviewer"],
correctOption: 3,
explanation: "The capstone maps to Make with Spec-Driven Development — students build something new from a specification they write, with AI serving as reviewer not ghostwriter. Investigate uses trace tables but is not the capstone. Modify changes existing programs but is not the final element. Predict uses confidence scoring but comes at the chapter opening, not the end.",
source: "Lesson 4: The Complete Teaching and Learning System"
}
]}
/>
