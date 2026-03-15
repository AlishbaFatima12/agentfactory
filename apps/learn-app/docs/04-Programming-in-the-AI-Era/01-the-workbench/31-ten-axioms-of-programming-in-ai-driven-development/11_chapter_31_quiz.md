---
sidebar_position: 11
title: "Chapter 31: Ten Axioms Quiz"
description: "Assess your understanding of the ten axioms of programming in AI-driven development through scenario-based questions following James's order management journey"
keywords: ["ten axioms quiz", "agentic development assessment", "shell orchestrator", "markdown knowledge", "type safety", "composition", "observability", "verification pipeline", "version control", "test-driven generation"]
chapter: 31
lesson: 11
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Axiom Application"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can identify which axiom applies to a given software development scenario and explain why"

  - name: "Anti-Pattern Recognition"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can recognize when a development practice violates a specific axiom and name the anti-pattern"

learning_objectives:
  - objective: "Apply the ten axioms to realistic software development scenarios"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student correctly identifies the applicable axiom and its implication in at least 70% of scenario-based questions"

  - objective: "Recognize anti-patterns and traps associated with each axiom"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student identifies named traps (Green Bar Illusion, Shallow Pipeline, etc.) and explains why they are dangerous"

cognitive_load:
  new_concepts: 0
  assessment: "0 new concepts — this is a pure assessment of the 10 axioms taught in lessons 1-10"

differentiation:
  extension_for_advanced: "After completing the quiz, revisit any axiom where you scored below Competent and generate new scenarios with your AI assistant to test your understanding."
  remedial_for_struggling: "Focus on the three axiom groups separately: Structure (I-IV), Data (V-VI), Verification (VII-X). Re-read the Key Takeaways of each axiom before retaking those questions."
---

# Chapter 31: Ten Axioms of Programming in AI-Driven Development Quiz

Test your understanding of the ten axioms that govern effective AI-driven software development — from shell orchestration through production observability. These questions follow James's journey building an order management system, the same running example from the chapter lessons.

<Quiz
  title="Chapter 31: Ten Axioms of Programming in AI-Driven Development"
  questions={[
    {
      question: "James has an 80-line bash script that fetches order data from an API, transforms it with jq, filters results with grep, and writes output to a file. The script has nested if-else blocks for error handling and retry logic. Emma reviews it and says it needs restructuring. What should James do?",
      options: [
        "Keep the full script in bash and add set -euo pipefail at the top — the shell is designed to handle error propagation through exit codes and trap handlers, so the retry logic just needs proper signal handling",
        "Rewrite the entire workflow as a Python CLI application using click and requests, since Python's try/except and type hints make complex control flow more maintainable than bash conditionals",
        "Refactor the script into modular shell functions (fetch_data, transform_data, filter_results) within the same file, using local variables and return codes to isolate each concern",
        "Keep the shell as the orchestrator that pipes and coordinates tools, but extract the retry logic and complex transformations into a typed, tested Python program that the shell calls"
      ],
      correctOption: 3,
      explanation: "Axiom I (Shell as Orchestrator) distinguishes between the shell's role as coordinator and programs' role as computational engines. The shell excels at piping data between programs, but when logic grows complex (nested conditionals, retry mechanisms, state management), that logic has crossed the complexity threshold and belongs in a proper program. The shell should still orchestrate (call the program, pipe its output), but the computation itself should be a typed, tested program. Option A sounds disciplined (set -euo pipefail is good practice) but doesn't solve the fundamental issue — complex retry logic with state management exceeds what bash handles well. Option B eliminates the shell entirely when it should still orchestrate the pipeline. Option C improves readability but the complexity remains in bash where it can't be typed or tested.",
      source: "Lesson 01: Shell as Orchestrator"
    },
    {
      question: "James needs to coordinate four steps for his order system deployment: run ruff formatting, run pyright type checking, run pytest, and build a Docker image. He writes a Python script that calls subprocess.run() for each step. What architectural problem does this introduce?",
      options: [
        "The subprocess.run() calls create a process-spawning chain where each command runs in a child process of Python, which is itself a child process, adding latency and making signal propagation unreliable across the process tree",
        "The script will fail silently if any subprocess returns a non-zero exit code unless James explicitly passes check=True to each subprocess.run() call — a subtle bug that Makefile targets and shell set -e handle automatically",
        "He replaced the shell (the natural orchestrator) with a program, hiding sequential coordination logic inside Python code that is harder to inspect and modify than a Makefile or shell script",
        "The Python script couples the deployment workflow to a specific Python version and its installed packages, creating a bootstrap problem where you need a working Python environment to set up the Python environment"
      ],
      correctOption: 2,
      explanation: "Axiom I states that the shell is the natural orchestration layer — it coordinates programs. By wrapping shell orchestration inside Python (using subprocess.run), James hides the coordination logic inside a program, making it harder to read, modify, and debug. A Makefile or shell script would express this coordination more transparently: each step is visible, the flow is obvious, and any developer can understand or modify it without Python knowledge. The shell coordinates; programs compute. When your 'program' is just calling other programs in sequence, it should be shell orchestration. Option A identifies a real but minor concern — the overhead exists but isn't the architectural issue. Option C identifies a genuinely dangerous pitfall of subprocess.run() — silent failures are a real bug source — but it describes an implementation-level fix (add check=True) rather than the architectural mistake of using the wrong layer for coordination. Option D raises a valid practical concern about the bootstrap problem, but the core issue is layer confusion, not dependency management.",
      source: "Lesson 01: Shell as Orchestrator"
    },
    {
      question: "James's team stores project decisions in a Notion database, API documentation in Confluence, and coding standards in a Google Doc. When James asks Claude Code to follow the team's coding standards, the AI cannot access any of these sources. What axiom are they violating?",
      options: [
        "Knowledge is Markdown — persistent knowledge should live in version-controlled markdown files that AI agents can read directly from the repository without authentication",
        "Shell as Orchestrator — they should write a shell pipeline using each platform's API to fetch and pipe content into the AI's context before each session",
        "Version Control is Memory — they should export their Notion database, Confluence pages, and Google Docs as HTML snapshots and commit them to the repository alongside the source code",
        "Observability Extends Verification — they need a monitoring dashboard that tracks documentation freshness across all three platforms and alerts when content becomes stale"
      ],
      correctOption: 0,
      explanation: "Axiom II (Knowledge is Markdown) states that all persistent knowledge should live in markdown files because markdown is human-readable, version-controllable, AI-parseable, and tool-agnostic. Notion, Confluence, and Google Docs are proprietary silos that require API authentication, special tooling, and network access for AI to read. Markdown files (CLAUDE.md, ADRs, README.md) sit in the repository where any AI agent can read them directly with standard file access. Option B is creative but creates a fragile dependency — if any API changes or credentials expire, the pipeline breaks, and the knowledge is still locked in proprietary platforms. Option C commits files to git (good) but HTML is noisy and the source of truth remains in external platforms that can diverge from the committed snapshots. Option D monitors staleness but doesn't solve the access problem.",
      source: "Lesson 02: Knowledge is Markdown"
    },
    {
      question: "James creates a DECISIONS.md file to track architectural choices for his order system but writes entries like: 'We picked PostgreSQL because it seemed good.' Three months later, when Emma asks why they didn't choose SQLite, nobody can reconstruct the reasoning. What aspect of Axiom II did James miss?",
      options: [
        "He should have used a structured YAML or JSON schema for decisions, with required fields enforced by a linter, so that incomplete entries are caught before they're committed to the repository",
        "He should have stored each decision in its own numbered ADR file (001-database-choice.md, 002-api-framework.md) under a dedicated decisions/ directory, with cross-references between related decisions",
        "He captured the decision but not the reasoning — effective markdown knowledge must include the problem context, alternatives considered, and rationale",
        "He should have used GitHub Discussions or a wiki platform where team members can comment, ask questions, and add context collaboratively rather than relying on a static markdown file"
      ],
      correctOption: 2,
      explanation: "Axiom II requires that markdown knowledge be self-contained and complete. 'Seemed good' provides no reconstructible context — future developers (or AI agents) cannot understand the trade-offs, alternatives considered, or constraints that drove the choice. Proper markdown knowledge includes: the problem, options considered, decision made, and reasoning. An ADR (Architecture Decision Record) format captures all of this. The axiom isn't just 'use markdown files' — it's 'encode knowledge completely in markdown so it persists beyond the original author's memory.' Option A enforces structure but a linter can't judge whether reasoning is sufficient — you can fill required fields with shallow content. Option B improves organization (and ADR numbering is good practice) but individual files with 'seemed good' are just as useless as one big file with 'seemed good.' Option D enables discussion but the captured knowledge still needs to be self-contained — comments scatter context rather than consolidating it.",
      source: "Lesson 02: Knowledge is Markdown"
    },
    {
      question: "James has a 200-line bash script for his order system that parses CSV order exports, validates customer email formats with regex, handles database connections, and sends HTTP requests with retry logic. It works most of the time but has no tests and fails silently on edge cases. Which axiom guides the fix?",
      options: [
        "Shell as Orchestrator — restructure the script so bash coordinates four focused tools (csvkit for parsing, a regex validator, psql for database access, and curl with retry flags) piped together through stdin/stdout",
        "Programs Over Scripts — this script has crossed the complexity threshold and should graduate to a typed Python program with the full discipline stack (pyright, pytest, ruff, uv) and CI integration",
        "Composition Over Monoliths — split it into four smaller bash scripts (parse_csv.sh, validate_email.sh, db_connect.sh, http_request.sh) that the main script sources and calls as modular functions",
        "Tests Are the Specification — write a BATS (Bash Automated Testing System) test suite with fixtures for each CSV format, valid/invalid emails, and mock HTTP responses to validate the script's behavior"
      ],
      correctOption: 1,
      explanation: "Axiom III (Programs Over Scripts) states that production work requires proper programs with the full discipline stack: types (pyright), linting (ruff), testing (pytest), dependency management (uv), and CI integration. A 200-line bash script doing CSV parsing, email validation, database connections, and HTTP requests is well past the complexity threshold — it needs type safety for data structures, proper error handling, testable functions, and CI to catch regressions. Option A improves the orchestration layer but the fundamental problem is that complex computation (CSV parsing, email regex, retry logic) shouldn't live in bash regardless of how cleanly it's piped. Option C splits the bash into smaller files but smaller bash scripts still lack types, still can't be statically analyzed, and still resist testability. Option D shows initiative (BATS is a real framework) but testing bash at this complexity is fragile — mocking HTTP and database connections in shell is orders of magnitude harder than in Python with pytest fixtures.",
      source: "Lesson 03: Programs Over Scripts"
    },
    {
      question: "James asks Emma: 'Why do I need uv, pyright, ruff, AND pytest for my order system? Can't I just write Python and run it?' What is the best response based on Axiom III?",
      options: [
        "Focus on pyright and Pydantic together since static type analysis combined with runtime validation at API boundaries covers both development-time and production-time errors comprehensively",
        "Start with pytest since it catches the highest-impact bugs (wrong behavior), then add pyright and ruff incrementally once the test suite is stable — uv can wait until the team grows beyond one developer",
        "Each tool catches a different error category: uv prevents environment drift, pyright catches type errors statically, ruff enforces style, and pytest verifies behavior — removing any layer leaves a gap",
        "For a small order system with one developer, the full stack adds overhead that slows iteration — start with just Python and ruff for formatting, then add the other tools when complexity justifies them"
      ],
      correctOption: 2,
      explanation: "Axiom III defines the Python discipline stack as a layered defense system where each tool serves a distinct purpose: uv ensures reproducible environments (no 'works on my machine'), pyright catches type errors at analysis time (wrong argument types, missing attributes), ruff enforces consistent style (readability, common mistakes), and pytest verifies behavior (correct outputs for given inputs). Removing any layer leaves a gap — without types, you get runtime AttributeError; without tests, you get undetected logic bugs; without dependency management, you get environment drift. Option B sounds pragmatic but 'incrementally adding later' rarely happens in practice — by the time complexity demands pyright, the codebase has accumulated type errors that are painful to retrofit. Option C covers two layers well but misses dependency management (environment drift) and testing (behavioral correctness). Option D's 'add tools when complexity justifies them' is the Prototype Trap from Axiom III — complexity arrives before the tools are in place.",
      source: "Lesson 03: Programs Over Scripts"
    },
    {
      question: "James builds an OrderManager class that handles: database connections, input validation, discount logic, shipping calculation, email notifications, and error reporting. When he needs to change the shipping API provider, he must modify and retest the entire class. What axiom addresses this?",
      options: [
        "Types Are Guardrails — define a ShippingProvider protocol with type annotations so that any new provider implements the same interface, allowing James to swap implementations without touching OrderManager's internals",
        "Tests Are the Specification — write focused TDG tests for each responsibility (test_validate_order, test_calculate_shipping, test_send_notification) so changes to shipping logic are covered by their own isolated test suite",
        "Composition Over Monoliths — decompose the class into focused units (Validator, OrderRepository, ShippingCalculator, Notifier) injected through the constructor",
        "Shell as Orchestrator — split each responsibility into its own Python script (validate.py, ship.py, notify.py) coordinated by a shell pipeline that passes order data between them via JSON on stdin/stdout"
      ],
      correctOption: 2,
      explanation: "Axiom IV (Composition Over Monoliths) prescribes building from composable, focused units rather than monolithic blocks. James's OrderManager class violates this by combining six unrelated responsibilities into one unit. Following the Unix philosophy and dependency injection, each concern should be a separate component injected through the constructor, so each can be modified, tested, and replaced independently. Option A is a useful technique (protocols enable swappable implementations) but types alone don't decompose the monolith — the class still has six responsibilities even with better type annotations. Option B improves test granularity but the coupling remains in the implementation — tests organized by concern still exercise a single tightly-coupled class. Option D applies shell orchestration to what is a program-level architecture problem — splitting into scripts loses type safety and makes the system harder to test as an integrated unit.",
      source: "Lesson 04: Composition Over Monoliths"
    },
    {
      question: "James's team debates whether to build their order system as one FastAPI application with all endpoints or as multiple microservices. Following Axiom IV, which approach is correct?",
      options: [
        "Use microservices from the start — separate order-service, shipping-service, and notification-service communicate via message queues, ensuring each domain can be deployed and scaled independently",
        "It depends primarily on the test architecture — if each module has its own comprehensive test suite with mocked dependencies, either monolith or microservices will be equally maintainable long-term",
        "Use a modular monolith with separate Python packages per domain (orders/, shipping/, notifications/) but deploy as a single FastAPI application, since network boundaries between services add latency and operational complexity",
        "Start with a well-structured monolith using composable internal modules (separate routers, services, repositories) connected through dependency injection, then extract services only when specific boundaries prove necessary"
      ],
      correctOption: 3,
      explanation: "Axiom IV (Composition Over Monoliths) doesn't mean 'always use microservices' — it means build from composable units with clear interfaces. A well-structured monolith with internal modules (separate routers, services, repositories) IS composition. The key is focused interfaces and dependency injection, not deployment boundaries. Extract to separate services only when you have clear evidence: different scaling needs, different team ownership, or different deployment cadences. Option A sounds disciplined but introduces distributed system complexity (network failures, message serialization, deployment coordination) before the team has proven they need independent scaling — premature decomposition is as harmful as no decomposition. Option B correctly notes that tests matter but test architecture alone doesn't determine whether monolith or microservices is appropriate — the architectural concern is about coupling and change boundaries. Option C is close and reasonable but is too absolute in the other direction — it rules out ever extracting services, while the axiom says 'extract when boundaries prove necessary.'",
      source: "Lesson 04: Composition Over Monoliths"
    },
    {
      question: "James writes `def process_order(data)` that accepts any input — dictionaries, lists, strings, None — and uses isinstance() checks throughout to handle each case. The function frequently crashes in production when the shipping API returns an unexpected format. Which axiom provides the solution?",
      options: [
        "Types Are Guardrails — define `def process_order(order: OrderRequest) -> OrderResult` so pyright catches invalid inputs at analysis time, replacing runtime isinstance() checks with compile-time guarantees",
        "Tests Are the Specification — write TDG tests like `test_process_order_rejects_invalid_dict()` and `test_process_order_handles_api_timeout()` covering each input type the shipping API might return",
        "Observability Extends Verification — add structlog fields like `log.info('processing', input_type=type(data).__name__, source='shipping_api')` so crashes show exactly what unexpected format arrived",
        "Verification is a Pipeline — add a pyright strict-mode check and a custom ruff rule to the CI pipeline that flags any function accepting untyped `data` parameters as a code smell"
      ],
      correctOption: 0,
      explanation: "Axiom V (Types Are Guardrails) states that type systems prevent errors at compile/analysis time rather than runtime. Instead of accepting 'any' and checking types dynamically, James should declare explicit types: `def process_order(order: OrderRequest) -> OrderResult`. With the three-layer type stack (hints for documentation, Pyright for static analysis, Pydantic for runtime validation at API boundaries), invalid inputs are caught before they cause production crashes. The isinstance() pattern is a symptom of missing type discipline. Option B catches specific known cases but can't cover every possible unexpected format — the shipping API might return something no test anticipated. Option C provides excellent post-crash diagnostics (you'll know exactly what broke) but doesn't prevent the crash — it's treating symptoms rather than the disease. Option D is partially correct (pyright in CI is good practice) but flags the symptom (untyped parameters) rather than solving the root cause — the function needs to be redesigned with proper types, not just flagged by a linter.",
      source: "Lesson 05: Types Are Guardrails"
    },
    {
      question: "James's team uses Pydantic models for their order API request/response types but does not run Pyright in their CI pipeline. They catch some type errors from Pydantic validation at runtime but keep finding type mismatches in error handlers and rarely-executed code paths. What layer of the type stack are they missing?",
      options: [
        "They need stricter Pydantic validators with custom field validators, constrained types (conint, constr), and model validators that enforce business rules like 'discount percentage must be between 0 and 100'",
        "They should replace Pydantic with Python dataclasses combined with beartype for runtime type checking, which provides lighter-weight validation with less overhead than Pydantic's model initialization",
        "They need to add targeted unit tests for each error handler and rare code path using pytest parametrize to systematically cover the type combinations that Pydantic doesn't validate at the boundary",
        "They're missing the static analysis layer (Pyright in CI) which catches type mismatches across all code paths — including error handlers and untested branches — without executing the code"
      ],
      correctOption: 3,
      explanation: "Axiom V defines a three-layer type stack: type hints (documentation), Pyright (static analysis), and Pydantic (runtime validation). Pydantic validates data at boundaries (API requests, external input) but only when that code path executes. Pyright analyzes ALL code paths statically — it finds type mismatches in error handlers, rare branches, and untested paths without running the code. The team has layer 1 (hints via Pydantic models) and layer 3 (runtime validation) but is missing layer 2 (static analysis). Adding Pyright to CI would catch the type errors in rare paths that Pydantic never sees because those paths haven't been triggered yet. Option A only covers runtime boundaries. Option B changes the tool but doesn't add static analysis. Option D helps but can't cover every path the way static analysis can.",
      source: "Lesson 05: Types Are Guardrails"
    },
    {
      question: "James stores his order records as JSON files in a directory — one file per order, with fields like status, customer_id, shipping_address, and total. When Emma asks him to find 'all orders over $500 shipped to the UK that are still pending,' he realizes he must read every file and filter in Python. What axiom suggests a better approach?",
      options: [
        "Knowledge is Markdown — convert the JSON files into structured markdown tables with YAML frontmatter for each order, enabling grep-based queries and version-controlled history through git log",
        "Shell as Orchestrator — build a query pipeline using `find . -name '*.json' | xargs jq 'select(.total > 500 and .country == \"UK\" and .status == \"pending\")'` to filter orders without writing Python code",
        "Programs Over Scripts — write a proper Python CLI tool with click and type hints that loads all JSON files into Pydantic models, indexes them in memory, and provides a typed query interface",
        "Data is Relational — structured data with defined fields and query patterns belongs in a relational database (even SQLite) where SQL handles filtering, joining, and indexing natively"
      ],
      correctOption: 3,
      explanation: "Axiom VI (Data is Relational) states that SQL is the default for structured data. James's order records have defined fields, relationships (customer_id references a customers table), and query patterns (filter by total, country, status). A relational database handles this naturally: `SELECT * FROM orders WHERE total > 500 AND country = 'UK' AND status = 'pending'`. With JSON files, every query requires reading all files, parsing JSON, and filtering in application code — no indexes, no joins, no query optimization. Even SQLite provides this capability with zero server setup. Option A converts to markdown but markdown tables are not queryable — grep-based filtering is fragile and can't handle numeric comparisons like 'total > 500.' Option B is a clever shell pipeline that works for this specific query, but each new question requires a new jq expression, there are no indexes for performance, and complex joins (orders + customers) become impractical. Option C builds a proper Python tool but reinvents database functionality — in-memory indexing, query interfaces, and data loading are exactly what SQLite already provides.",
      source: "Lesson 06: Data is Relational"
    },
    {
      question: "James's order management system runs on a single server with fewer than 10,000 orders and no concurrent write requirements. His team debates between SQLite and PostgreSQL. Which does Axiom VI recommend?",
      options: [
        "PostgreSQL — it supports JSONB columns for nested shipping addresses, full-text search for order descriptions, and connection pooling that will be needed when the system scales beyond a single server",
        "SQLite — a file-based relational database requiring zero infrastructure (no server process, no connection pooling, no separate deployment), perfect for single-server applications with modest data volumes and no concurrent write pressure",
        "MongoDB — document databases map naturally to order records since each order contains nested objects (shipping address, line items, payment details) that would require multiple joined tables in SQL",
        "DuckDB — an embedded analytical database optimized for the kind of aggregate queries (total revenue, average order size, top customers) that an order management system needs for reporting"
      ],
      correctOption: 1,
      explanation: "Axiom VI provides clear guidance on SQLite vs PostgreSQL: SQLite is ideal for single-server applications with modest data volumes and no concurrent write pressure. It requires zero infrastructure (no database server, no connection management, no separate deployment) — it's just a file. PostgreSQL becomes necessary when you need concurrent writes from multiple processes, advanced features (JSONB, full-text search), or when data exceeds what a single file handles efficiently. For James's fewer than 10,000 orders on a single server, SQLite is the right choice — simpler deployment, simpler backup (copy the file), and zero operational overhead. Option A lists real PostgreSQL advantages but they're solving problems James doesn't have yet — JSONB and full-text search are premature for 10K orders on one server. Option C is tempting for nested data but violates the relational axiom — and SQLite/PostgreSQL both handle nested structures through proper table design or JSON columns. Option D is designed for analytical workloads (OLAP) not transactional order processing (OLTP) — it excels at aggregates but isn't optimized for the individual inserts and updates an order system performs.",
      source: "Lesson 06: Data is Relational"
    },
    {
      question: "James asks Claude Code to 'implement a discount calculator for the order system.' The AI generates code, but in production a customer receives a $12,000 discount on a $200 order because the percentage was applied as a multiplier instead of a fraction. How should James have approached this using Axiom VII?",
      options: [
        "Ask the AI to generate both the implementation and a comprehensive test suite simultaneously, so `test_discount_percentage()` and `calculate_discount()` are created together with consistent assumptions about how percentages work",
        "Write a detailed natural language specification: 'A 15% discount on a $200 order means $30 off, not $200 * 15 = $3000. Discounts must never exceed the order total. Round to two decimal places.' — then give this spec to the AI",
        "Write failing tests first — like `test_bulk_discount_never_exceeds_order_total()` and `test_fifteen_percent_of_200_equals_30()` — then give the AI those tests as the specification to implement against",
        "Review the AI's generated code with a checklist: verify percentage operations use division by 100, add assert statements for discount < order_total, and manually test with boundary values like 0%, 50%, and 100% discounts"
      ],
      correctOption: 2,
      explanation: "Axiom VII (Tests Are the Specification) prescribes Test-Driven Generation (TDG): write tests FIRST that define correct behavior, then prompt AI to generate implementation that passes those tests. A test like `test_fifteen_percent_of_200_equals_30()` would have caught the $12,000 bug before any customer saw it — the test defines the boundary, and any implementation that violates it fails immediately. Option A creates circular validation — when the AI generates both code and tests simultaneously, it may encode the same misunderstanding in both, so the tests pass but the behavior is wrong (the Circular Testing Trap). Option B is more specific than 'implement a discount calculator' but natural language is still interpretable — the AI might follow the examples literally while handling unlisted edge cases incorrectly. Option D catches problems but relies on manual diligence — the reviewer must understand the bug pattern to spot it, and manual checks don't persist as automated regression protection.",
      source: "Lesson 07: Tests Are the Specification"
    },
    {
      question: "James's test suite shows 53 passing tests — all green. He feels confident and deploys his order system. But in production, the shipping calculator fails for orders over $10,000 because no test ever checked that boundary. What named trap from Axiom VII did he fall into?",
      options: [
        "The Circular Testing Trap — the AI generated both the implementation and the tests, so the tests verified the code's assumptions rather than independently defining what correct behavior should be",
        "The Shallow Pipeline — his verification pyramid was incomplete because it included unit tests but lacked integration tests that would exercise the shipping calculator with realistic order values",
        "The Prototype Trap — the shipping calculator was built as a quick prototype with hardcoded assumptions about order sizes, then deployed to production without being rewritten as a proper program",
        "The Green Bar Illusion — 53 passing tests create false confidence when the test suite itself has coverage gaps, like the missing $10,000 boundary that no test ever checked despite the green bar suggesting everything works"
      ],
      correctOption: 3,
      explanation: "The Green Bar Illusion is the belief that 'all tests pass' means 'the system is correct.' It confuses test count with behavioral coverage. James's 53 tests verified 53 specific scenarios — but none tested orders above $10,000, so the boundary failure was invisible. The fix is to think about what the tests DON'T cover: edge cases, boundary values, error paths, and load conditions. A green bar means 'all specified behaviors work' — not 'all possible behaviors work.' Option B identifies a real concern (integration tests might have caught this) but the root cause isn't the pipeline's depth — it's that the specification itself (the tests) was incomplete, which is a testing problem, not a CI structure problem. Option C describes a real trap from Axiom VII but doesn't match this scenario — James's tests weren't AI-generated alongside the code, they simply didn't cover the boundary. Option D describes a different trap (Axiom III) about prototypes graduating to production — the issue here is test coverage, not code maturity.",
      source: "Lesson 07: Tests Are the Specification"
    },
    {
      question: "James fixes the $12,000 discount bug, updates the FREE_SHIPPING_THRESHOLD constant, and refactors three TDG test files — all in a single commit with the message 'fix: various updates.' During a post-mortem the next week, his team needs to find exactly when the shipping threshold changed. They cannot. Which axiom did he violate?",
      options: [
        "Knowledge is Markdown — he should have written a CHANGELOG.md entry for each change with the date, reason, and impact assessment, so the team can search the changelog independently of git history",
        "Observability Extends Verification — he should have added a structured log entry that records configuration changes at startup, like `log.info('config_loaded', free_shipping_threshold=75, previous=50)`, so runtime changes are traceable",
        "Version Control is Memory — each change should be its own atomic commit with a conventional message explaining the 'why', forming searchable project memory",
        "Tests Are the Specification — each change should have had its own test commit first (failing test for the bug, test for the new threshold, tests for the refactored modules) before the implementation commits"
      ],
      correctOption: 2,
      explanation: "Axiom VIII (Version Control is Memory) requires atomic commits — one logical change per commit — with conventional messages that explain reasoning. James mixed three unrelated changes into one commit, so `git log --grep='shipping'` finds nothing, and reverting the discount fix also reverts the threshold change. Proper practice: three separate commits — `fix(orders): cap discount to never exceed order total`, `feat(shipping): raise FREE_SHIPPING_THRESHOLD to $75`, `refactor(tests): reorganize TDG fixtures for discount module`. Option A is useful supplementary documentation but a changelog is a manual duplicate of what git history should provide natively — if commits are atomic and well-messaged, the changelog writes itself via `git log`. Option C provides valuable runtime observability but tracks when the application loads config, not when the developer changed the code — different questions answered by different systems. Option D describes a TDG-aligned workflow (test-first commits) but the fundamental problem is mixing unrelated changes in one commit, not the absence of test-first ordering.",
      source: "Lesson 08: Version Control is Memory"
    },
    {
      question: "James accidentally commits his database password in a configuration file. He immediately makes another commit removing the password and thinks the problem is solved. What does Axiom VIII's 'Permanent Record' trap warn about this situation?",
      options: [
        "He should have used `git stash` to hold the configuration file temporarily while working on it, then added it to .gitignore before unstashing — preventing the password from ever entering the commit history",
        "He needs to add the configuration file to .gitignore and run `git rm --cached config.py` to stop tracking it, then use environment variables loaded from a .env file for all credentials going forward",
        "He should have worked on a feature branch so the password commit would be isolated from main — then force-pushed the branch with the sensitive commit removed before merging the clean version",
        "Git never forgets — the password still exists in the commit history and anyone with repo access can find it via `git show <previous-commit>`, even though it was removed"
      ],
      correctOption: 3,
      explanation: "The Permanent Record is a named trap from Axiom VIII: git's greatest strength (it remembers everything) becomes a liability when secrets are committed. Deleting the password in a new commit only removes it from the current state — `git show <previous-commit>` reveals it instantly. The damage requires rotating the credential immediately and using tools like git-filter-branch or BFG Repo Cleaner to rewrite history (a destructive, complex operation). Prevention is the cure: use .env files (gitignored), environment variables, or secret managers. Option A describes good preventive practice (stash + gitignore workflow) but the question asks about what's wrong NOW — the password is already committed and stashing is for temporary work context, not a security mechanism. Option B fixes the future (stop tracking the file, use env vars) but doesn't address the existing exposure — the password is already in history even after git rm --cached. Option C isolates the commit to a branch but force-pushing a branch doesn't remove the commit from any developer who already fetched it — and if the branch was pushed to a remote before cleanup, the secret was already exposed.",
      source: "Lesson 08: Version Control is Memory"
    },
    {
      question: "James pushes his first pull request for the order management system. The CI pipeline rejects it with four failures: ruff finds a formatting error, pyright flags a type mismatch in `calculate_shipping()`, two TDG tests fail, and a dependency vulnerability is detected. Frustrated, he considers adding `--no-verify` to skip the checks. Why is this pipeline actually helping him, according to Axiom IX?",
      options: [
        "The pipeline caught four different error categories (formatting, types, logic, security) — each level of the verification pyramid catches errors the others miss",
        "The pipeline is providing signal overload — four simultaneous failures on a first PR indicates the checks should be introduced gradually, starting with tests and adding stricter checks as the codebase matures",
        "He should prioritize the two test failures and the type mismatch since they indicate behavioral and structural bugs, while formatting and dependency checks can be addressed in a follow-up PR to keep the review focused",
        "The dependency vulnerability is the most critical failure and should block the merge, while the formatting, type, and test issues should be warnings that James can address after the initial deployment"
      ],
      correctOption: 0,
      explanation: "Axiom IX (Verification is a Pipeline) states: 'If it's not in CI, it's not enforced.' The pipeline caught errors across four levels of the verification pyramid: formatting (fast, cheap), types (structural correctness), tests (behavioral correctness), and security (dependency safety). Each level catches errors the others miss — ruff won't catch logic bugs, pyright won't catch vulnerable dependencies, tests won't catch formatting drift. Skipping with --no-verify defeats the entire system. The frustration James feels is the pipeline *working* — it costs minutes now to save hours of production debugging later. Option B sounds reasonable but 'introducing checks gradually' means the codebase accumulates the exact problems those checks prevent — by the time you add pyright later, you have hundreds of type errors to fix at once. Option C prioritizes some checks over others, but the axiom's point is that each level catches different errors — formatting consistency matters because inconsistent code is harder to review, and deferred fixes often never happen. Option D inverts the priority — all four failures indicate real issues, and letting any category through creates a precedent for selective bypassing.",
      source: "Lesson 09: Verification is a Pipeline"
    },
    {
      question: "A team's CI pipeline runs only unit tests and linting. Their code always passes CI, but in production they repeatedly discover issues: a database migration was never applied, an environment variable was missing, and the API fails under concurrent requests. What named anti-pattern from Axiom IX describes their pipeline?",
      options: [
        "The Green Bar Illusion — their unit tests pass with mocked dependencies, creating false confidence that the real database, environment, and concurrent access will behave the same way as the test doubles",
        "The Shallow Pipeline — their verification pyramid covers the lower levels (format, lint, unit tests) but skips integration tests, E2E tests, and environment validation that catch deployment-level failures",
        "The Prototype Trap — their CI pipeline was set up quickly during the project's early days and never evolved to match the system's growing complexity, deployment requirements, and production environment",
        "The God Object — their single CI configuration file tries to handle all verification in one monolithic workflow instead of composing specialized pipeline stages that each verify a different architectural layer"
      ],
      correctOption: 1,
      explanation: "The Shallow Pipeline is a named trap from Axiom IX: a CI pipeline that only runs fast, cheap checks (linting, unit tests) while skipping the higher levels of the verification pyramid (integration tests, E2E tests, deployment validation). Unit tests verify isolated function behavior but cannot catch missing database migrations, environment configuration errors, or concurrency failures — these require higher-level verification. The six-level pyramid runs from format (seconds) through lint, types, unit tests, integration tests, to E2E tests (minutes) — each level catches errors invisible to the levels below. Option A is tempting because it sounds like the Green Bar Illusion (Axiom VII). The key distinction: the Green Bar Illusion is about *depth* within the testing layer (tests pass but miss edge cases), while the Shallow Pipeline is about *breadth* across verification layers (entire categories of checks are absent). Here the problem is that entire verification layers (integration, E2E, environment) are missing from the pipeline structure. Option C describes a real phenomenon (CI pipelines that don't evolve) but the Prototype Trap is an Axiom III concept about scripts graduating to programs, not about pipeline maturity. Option D applies composition thinking to CI, which is reasonable architecturally, but the problem isn't pipeline organization — it's missing verification levels.",
      source: "Lesson 09: Verification is a Pipeline"
    },
    {
      question: "James's CI pipeline is green — all 53 TDG tests pass, types check clean, linting is spotless. He deploys his order management system. At 2:47 AM, international shipping rates fail under production load. He checks the logs and finds only `print('Processing order...')` repeated thousands of times — no timestamps, no order IDs, no error context. Which observability pillar would have detected this problem earliest?",
      options: [
        "Logs — if James had used structlog with structured fields like `log.error('shipping_failed', order_id=order.id, carrier='dhl', error=str(e))`, he would see exactly which orders failed, which carrier timed out, and the specific error for each failure",
        "He needs better CI coverage — adding load tests with locust or k6 that simulate 500 concurrent international orders would have caught the shipping rate failure during the verification pipeline before deployment",
        "Metrics — a Prometheus counter like `shipping_errors_total{carrier='dhl'}` with an alert threshold would have fired the moment failure rates spiked above baseline",
        "Traces — OpenTelemetry spans across `process_order → calculate_shipping → call_carrier_api` would show exactly where each request stalled and reveal that the DHL API was timing out under concurrent load"
      ],
      correctOption: 2,
      explanation: "Axiom X (Observability Extends Verification) defines three pillars, each answering different questions. Metrics answer 'how much?' and 'how fast?' — a Prometheus counter tracking shipping errors with an alert threshold would have fired at 2:30 AM, seventeen minutes before the customer service ticket. Logs would tell James *what* failed (which orders, which errors), and traces would show *where* time was spent (the shipping API timing out under concurrent load). But metrics provide the earliest automated detection — they aggregate across all requests and trigger alerts on deviation from baselines without anyone watching. Option A provides excellent diagnostic detail (you'd know exactly what broke) but structured logs still require someone to read them — they don't trigger automated alerts the way metrics do. Option B is valid defensive engineering (load testing catches some production-like failures) but CI cannot simulate every production condition — observability catches what testing misses at runtime. Option D pinpoints the root cause beautifully (you'd see the DHL timeout) but tracing is diagnostic, not alerting — it helps after you know something is wrong, not before.",
      source: "Lesson 10: Observability Extends Verification"
    },
    {
      question: "After the 2:47 AM incident, James adds DEBUG-level logging to every function in his order system. Within a day, logs generate 2GB per hour — storage costs spike and when a new error occurs, it is buried under millions of irrelevant entries. What named trap from Axiom X did he fall into?",
      options: [
        "The Shallow Pipeline — his observability stack has logging but lacks metrics and tracing, so he's compensating with excessive log volume instead of using the right pillar for each question (how much, what happened, where)",
        "The Permanent Record — his logs capture sensitive customer data (email addresses, shipping addresses, order amounts) at DEBUG level, creating compliance and privacy risks alongside the storage cost problem",
        "The Green Bar Illusion — his 2GB of hourly logs create the appearance of comprehensive observability, but the sheer volume means critical errors pass unnoticed, giving false confidence in system health",
        "The Log Avalanche — logging everything at DEBUG level drowns signal in noise, making observability worse because important errors are buried under millions of irrelevant entries"
      ],
      correctOption: 3,
      explanation: "The Log Avalanche is a named trap from Axiom X: the overcorrection of adding maximum logging everywhere after experiencing an observability gap. James went from zero visibility (`print('Processing order...')`) to maximum noise (DEBUG on everything) — neither extreme works. Effective observability requires the right data at the right level: DEBUG for development only (off in production), INFO for normal operations, WARNING for handled anomalies, ERROR for failures requiring attention, CRITICAL for system-level emergencies. As Emma told James: 'If everything is important, nothing is.' Option A makes a valid architectural point (he should add metrics and traces too) but the immediate problem isn't missing pillars — it's that the one pillar he's using (logging) is misconfigured with excessive volume. Option B identifies a real secondary risk of DEBUG logging (sensitive data exposure) but the question focuses on the primary problem — signal drowning in noise, not privacy compliance. Option C sounds plausible but the Green Bar Illusion is specifically about test coverage creating false confidence (Axiom VII) — here the problem isn't false confidence, it's that he literally can't find errors in the noise.",
      source: "Lesson 10: Observability Extends Verification"
    },
    {
      question: "Emma's Makefile for the order system chains three programs together: a data exporter, a validator, and a report generator. She didn't write any of these programs — they come from different teams and languages. Yet her Makefile coordinates them seamlessly using pipes and exit codes. What principle of Axiom I does this demonstrate?",
      options: [
        "The shell automatically handles data format conversion between programs written in different languages, removing the need for standardized input and output formats",
        "The Makefile acts as a program that wraps three scripts in a unified interface, replacing the need for each team to maintain their own deployment process",
        "The shell's composition primitives (pipes, exit codes, redirection) let it connect programs it didn't create, enabling coordination without requiring shared language or authorship",
        "Exit codes allow the Makefile to retry failed programs automatically, providing built-in error recovery that eliminates the need for error handling inside each program"
      ],
      correctOption: 2,
      explanation: "Axiom I's composition primitives — pipes (|), exit codes (&&), and redirection (<, >, 2>) — are the shell's power. They allow the shell to route data between programs regardless of who wrote them or what language they use. The shell doesn't need to understand the programs' internals; it just connects their inputs and outputs. Option C is tempting because the shell does pass data between programs, but it doesn't convert formats automatically — programs must agree on text stream conventions. The shell routes data; it doesn't transform it.",
      source: "Lesson 01: Shell as Orchestrator"
    },
    {
      question: "James writes a bash script that starts at 15 lines of straightforward coordination but over two months grows to include a for-loop parsing CSV fields, nested if-else blocks for validation, and string manipulation for formatting output. When should he have moved this logic out of the shell?",
      options: [
        "When the script exceeded 100 lines, since shorter scripts can handle loops and conditionals effectively as long as they use functions and local variables",
        "When the script started failing intermittently, since working scripts should not be refactored until they demonstrate instability in a production environment",
        "When a second developer needed to modify the script, since collaboration requires version-controlled programs but solo developers can use scripts of any complexity",
        "When the script began performing computation — loops, string parsing, nested conditionals — because these belong in a typed, testable program regardless of line count"
      ],
      correctOption: 3,
      explanation: "Axiom I defines the complexity threshold not by line count alone but by what the script does. Loops, string parsing, nested conditionals, and data structures are computation — they belong in a proper program with a debugger, type system, and test suite. The shell should coordinate programs, not perform computation itself. Option A focuses on line count (100 lines) as the trigger, but a 30-line script with nested conditionals and string manipulation has already crossed the threshold. The nature of the work, not its length, determines when to move to a program.",
      source: "Lesson 01: Shell as Orchestrator"
    },
    {
      question: "When Claude Code helps James build his order system, it runs shell commands to list files, execute tests, and coordinate tools. It does not directly write to the Python runtime or invoke functions inside James's program. Why does the AI agent operate at the shell layer rather than the program layer?",
      options: [
        "AI agents lack the ability to execute Python code directly, so the shell is a technical limitation they work around by calling programs as external processes",
        "The shell layer maximizes capability by composing existing tools (ls, pytest, git) without writing custom code, matching Axiom I's principle that coordination belongs in the shell",
        "Operating at the shell layer allows the AI agent to run multiple programs simultaneously using background processes, which is faster than sequential Python execution",
        "The shell layer provides a security sandbox that prevents the AI agent from accessing sensitive data inside the Python runtime, protecting credentials and user information"
      ],
      correctOption: 1,
      explanation: "AI coding agents independently converged on shell orchestration because it maximizes capability while minimizing fragile custom code. The shell gives the agent access to every installed tool — formatters, type checkers, test runners, version control — through composition primitives. Option A is tempting because it frames shell usage as a limitation, but agents use the shell by design, not by constraint. Vercel's AI agent became 3.5x faster by switching to shell commands instead of custom tools, proving the shell layer is a strategic advantage.",
      source: "Lesson 01: Shell as Orchestrator"
    },
    {
      question: "James considers storing his project's coding standards in HTML because it supports rich formatting, or in plain text because it is simple. Emma explains that markdown is better than both. Which of markdown's four properties do HTML and plain text each fail to satisfy?",
      options: [
        "HTML fails AI-parseability because language models cannot process HTML tags, and plain text fails version-controllability because whitespace changes create noisy diffs",
        "HTML fails version-controllability because binary rendering data creates unreadable diffs, and plain text fails tool-agnosticism because it requires specialized editors to display properly",
        "HTML fails human-readability because tag noise makes raw files hard to scan, and plain text fails AI-parseability because it lacks structural markers like headers and sections",
        "HTML fails tool-agnosticism because it requires a browser to render properly, and plain text fails human-readability because it has no formatting for emphasis or hierarchy"
      ],
      correctOption: 2,
      explanation: "Markdown satisfies four properties simultaneously: human-readable, version-controllable, AI-parseable, and tool-agnostic. HTML fails human-readability — raw HTML is cluttered with tags like <h1>, <p>, <div> that obscure the actual content. Plain text fails AI-parseability — without structural markers (# headers, ## subheaders), AI cannot identify sections, parse specific parts, or navigate the document meaningfully. Option D is tempting because plain text does lack formatting, but readability of flat text is fine for humans — the issue is that AI cannot parse structure from unstructured text.",
      source: "Lesson 02: Knowledge is Markdown"
    },
    {
      question: "James's repository contains a CLAUDE.md file that explains the project structure, lists run commands, and states coding conventions. When Claude Code opens the project, it reads this file first. What role does this markdown file serve according to Axiom II?",
      options: [
        "It replaces the need for onboarding documentation by serving as an interactive tutorial that guides the AI through each feature of the codebase step by step",
        "It acts as a context file that answers 'how to work here' — giving the AI agent project overview, commands, and rules directly from the repository without external access",
        "It functions as a test specification that defines the expected behavior of the codebase, allowing the AI to verify whether the project meets its own stated requirements",
        "It serves as a configuration file that controls the AI agent's permissions, limiting which files it can read and which commands it can execute within the project"
      ],
      correctOption: 1,
      explanation: "Axiom II identifies context files (CLAUDE.md, README.md) as markdown documents that answer 'how to work here' — project overview, run commands, and rules — sitting in the repository alongside code. Any AI agent can read them directly with standard file access, no authentication needed. Option A is tempting because CLAUDE.md does help onboarding, but it is not an interactive tutorial — it is a static reference document. The key insight is that context files use markdown's four properties to make project knowledge accessible to both humans and AI agents.",
      source: "Lesson 02: Knowledge is Markdown"
    },
    {
      question: "James writes a note in Slack: 'We chose PostgreSQL over SQLite because we might need concurrent writes later.' Three months later, when the team debates switching databases, nobody can find this reasoning. Emma suggests writing an Architecture Decision Record instead. What makes an ADR more effective than a Slack message?",
      options: [
        "ADRs require approval from senior engineers before being merged, ensuring that architectural decisions are reviewed and validated before they become part of the record",
        "ADRs are automatically indexed by search engines and internal documentation tools, making them discoverable through keyword search across the organization's knowledge base",
        "ADRs use a structured format (Status, Context, Decision, Consequences, Alternatives) that captures complete reasoning in a findable, version-controlled markdown file in the repository",
        "ADRs are written in a formal technical style that eliminates ambiguity, while Slack messages use casual language that can be interpreted differently by different team members"
      ],
      correctOption: 2,
      explanation: "Axiom II warns that decisions in Slack are archived after 90 days, unsearchable by AI agents, and not version-controlled. ADRs solve all three problems: they use a structured format (Status, Context, Decision, Consequences, Alternatives Considered) that captures complete reasoning, live in the repository as markdown files where AI agents can read them, and are version-controlled so the decision's evolution is tracked. Option D is tempting — formality does reduce ambiguity — but the ADR's advantage is structure and location (in the repo, version-controlled), not writing style.",
      source: "Lesson 02: Knowledge is Markdown"
    },
    {
      question: "James built a Jupyter notebook that calculates shipping costs for his order system. It started as a quick exploration tool, but now three team members rely on it daily and it runs on a cron job every morning. The notebook has no tests, no type hints, and cell execution order matters. What Axiom III concept describes this situation?",
      options: [
        "The Complexity Threshold — the notebook has crossed from shell territory into program territory and should be rewritten as a Makefile that coordinates typed Python scripts",
        "The Mega-Script — the notebook grew too large and should be split into multiple smaller notebooks, each handling one step of the shipping calculation pipeline",
        "The Shallow Pipeline — the notebook bypasses the CI verification pipeline because notebooks cannot be linted, type-checked, or tested in the same way as Python modules",
        "The Prototype Trap — the notebook solved an immediate problem but graduated to production use without gaining the discipline (types, tests, error handling) that production code requires"
      ],
      correctOption: 3,
      explanation: "The Prototype Trap from Axiom III describes exactly this pattern: a script (or notebook) solves an immediate problem, someone asks to use it, and months later it has multiple users and a cron job — but no types, no tests, no error messages to debug when it fails. The fix is to extract the notebook's logic into a proper Python module with the full discipline stack. Option C is tempting because notebooks do bypass CI, but the root problem is not the pipeline's limitations — it is that the code was never designed for production use. The notebook needs to graduate to a program, not just get added to CI.",
      source: "Lesson 03: Programs Over Scripts"
    },
    {
      question: "Axiom III defines a discipline stack with four layers: uv for dependency management, ruff for style enforcement, pyright for type checking, and pytest for behavior verification. James asks why he cannot just use pytest alone since it catches the most impactful bugs. What is Emma's response?",
      options: [
        "Each layer catches a different defect class that the others miss — dependency conflicts, style violations, type mismatches, and logic errors require separate specialized tools to detect",
        "The four tools must run in a specific order where each tool's output feeds into the next, creating a verification chain that would break if any middle link were removed",
        "Running all four tools generates a compliance report that stakeholders and auditors require before production deployment, making the full stack a business requirement",
        "Using only pytest creates a false sense of security because passing tests prove the code works correctly, eliminating the need for manual code review entirely"
      ],
      correctOption: 0,
      explanation: "Axiom III's discipline stack is layered defense: uv prevents 'works on my machine' environment drift, ruff catches unused imports and formatting issues, pyright finds type mismatches in untested code paths, and pytest verifies behavioral correctness. Remove any layer and a class of defects goes undetected. Option B is tempting because the tools do run in sequence in CI, but they are independent checkers, not a chain where output feeds input. Each catches errors the others cannot — pyright will never catch wrong logic, and pytest will never catch wrong types.",
      source: "Lesson 03: Programs Over Scripts"
    },
    {
      question: "James has a small utility function that renames files in a directory. It is 12 lines long and works perfectly. Emma says it does not need the full discipline stack yet. Under Axiom III, when is bash still the appropriate tool for a task like this?",
      options: [
        "Bash is appropriate when only one developer will ever run the script, since multi-user scripts require the portability guarantees that only typed programs can provide",
        "Bash is appropriate for any task under 50 lines as long as the developer adds comments explaining each step and uses descriptive variable names throughout the script",
        "Bash is always appropriate for file operations because the shell has native file manipulation commands that are faster and more reliable than Python equivalents",
        "Bash is appropriate when the task is simple orchestration — linear coordination under 20 lines with no loops, string parsing, or complex error handling logic"
      ],
      correctOption: 3,
      explanation: "Axiom III does not say 'never use bash.' The complexity threshold defines when shell is appropriate: under 20 lines of linear coordination without loops, string parsing, nested conditionals, or complex error handling. Simple orchestration — running commands in sequence, checking exit codes, piping output — is the shell's strength. Option B focuses on line count (50 lines) and documentation as the criteria, but well-commented bash with loops and string parsing is still the wrong tool. The nature of the task, not its length or documentation, determines appropriateness.",
      source: "Lesson 03: Programs Over Scripts"
    },
    {
      question: "James's order system has a ShippingCalculator module that directly imports and calls internal methods from the InventoryManager module. When the inventory team refactors their internal data structures, James's shipping code breaks even though the shipping logic itself did not change. What principle from Axiom IV explains why this happened?",
      options: [
        "Information Hiding (Parnas 1972) — when a module exposes its internal design decisions, changes to those internals cascade as breaking changes to every module that depends on them",
        "Fractal Composition — the shipping and inventory modules should repeat the same internal structure at every level so that refactoring one automatically refactors the other",
        "The Decomposition Trap — the system was split into too many small modules, creating a web of dependencies that makes any change impossible without affecting multiple components",
        "Dependency Injection — the ShippingCalculator should receive the InventoryManager as a constructor parameter so that the shipping module controls when inventory methods are called"
      ],
      correctOption: 0,
      explanation: "Parnas's 1972 principle of Information Hiding states: break systems so each module hides a design decision from others. When a decision is hidden inside a module, changing it affects only that module. When shared across modules, changes cascade. James's ShippingCalculator imported internal methods of InventoryManager, coupling it to implementation details rather than a stable interface. Option D describes a useful technique (dependency injection) but does not explain WHY the breakage occurred — the root cause is violated information hiding, not the absence of injection.",
      source: "Lesson 04: Composition Over Monoliths"
    },
    {
      question: "Emma refactors James's order system so that the payment processing component is passed into the order pipeline as a parameter rather than hardcoded. In production it uses Stripe, in tests it uses a fake that returns predetermined responses, and in development it logs calls without charging. What Axiom IV pattern is this?",
      options: [
        "Fractal Composition — the same payment interface pattern repeats at the function level, module level, and service level, creating self-similar structure throughout the architecture",
        "Dependency Injection — swapping components by passing implementations as parameters, so the orchestration logic stays the same while the behavior changes based on context",
        "The Verification Pyramid — each environment (production, test, development) runs a different level of the verification stack to match its specific reliability requirements",
        "Information Hiding — the payment component hides its internal processing details from the order pipeline, so switching providers does not require changes to order logic"
      ],
      correctOption: 1,
      explanation: "Dependency injection composes behavior by passing implementations as parameters rather than hardcoding them. The same orchestration logic works with Stripe in production, fakes in testing, and logging in development — the pipeline does not change, only the injected component does. Option D is tempting because information hiding is also at play (the payment component does hide internals), but the specific pattern being demonstrated is injection — the ability to swap components without changing the orchestrating code.",
      source: "Lesson 04: Composition Over Monoliths"
    },
    {
      question: "After learning about composition, James enthusiastically splits every function in his order system into the smallest possible units — a function to add two numbers, a function to format a single string, a function to check if a value is None. Emma warns him he has fallen into a trap. Which one?",
      options: [
        "The God Class trap — by creating too many tiny functions, James has effectively created a coordination class that does nothing but call other functions, which is just a different form of monolith",
        "The Circular Testing Trap — each tiny function needs its own test, and the tests for trivial functions end up restating the implementation rather than specifying meaningful behavior",
        "The Prototype Trap — James is treating his production code like an experiment by constantly restructuring it instead of stabilizing the architecture and adding proper tests",
        "The Decomposition Trap — over-decomposition scatters simple logic across so many units that understanding the whole requires assembling a mental map of dozens of tiny pieces"
      ],
      correctOption: 3,
      explanation: "Axiom IV warns that the Decomposition Trap — over-decomposition — is as harmful as no decomposition. Splitting a three-line calculation into three one-line functions creates indirection without benefit. Understanding the system requires tracing through dozens of tiny pieces instead of reading straightforward code. Compose when concerns genuinely separate; leave simple things simple. Option D raises a valid testing concern, but the root problem is architectural — the decomposition itself is wrong, not the testing approach that follows from it.",
      source: "Lesson 04: Composition Over Monoliths"
    },
    {
      question: "James writes a function `def process_payment(data: dict[str, Any])` and uses the Any type for the dictionary values to 'get things working quickly.' The function accepts any data shape without complaint, and Claude Code generates code that passes dictionaries with inconsistent key names. What does Axiom V say about this approach?",
      options: [
        "The Any type is acceptable during prototyping but should be replaced with specific types before the code enters the CI pipeline, where pyright strict mode would flag it",
        "Every Any annotation is a hole where AI hallucinations pass through unchecked — it removes all type information and disables the static analysis that would catch inconsistent data shapes",
        "The Any type should be replaced with Union types that enumerate every possible value type, giving pyright enough information to verify each branch of the processing logic",
        "Using Any is fine for internal functions as long as Pydantic models validate the data at the system boundary before it reaches the function, catching inconsistencies at entry"
      ],
      correctOption: 1,
      explanation: "Axiom V identifies the Any anti-pattern: every Any in code is a hole where AI hallucinations pass through unchecked. dict[str, Any] loses all type information — pyright cannot verify that keys exist, that values have the right type, or that the AI generated consistent structures. Option D is tempting because boundary validation (Pydantic) does catch some errors, but if the internal function uses Any, the type checker cannot verify what happens after the boundary. The contract disappears inside the function, and AI-generated code within it goes unverified.",
      source: "Lesson 05: Types Are Guardrails"
    },
    {
      question: "Emma explains to James that his order system should use dataclasses for internal data structures and Pydantic models at the API boundary. James asks why he cannot use Pydantic everywhere since it does more. What is the key distinction Axiom V draws between these two tools?",
      options: [
        "Dataclasses are faster to instantiate because they skip validation overhead, while Pydantic models perform runtime validation on every field — internal data that is already trusted does not need re-validation",
        "Dataclasses support inheritance and composition patterns that Pydantic models cannot replicate, making them essential for building complex internal type hierarchies within the order system",
        "Pydantic models generate automatic API documentation from their field definitions, which is useful at boundaries but unnecessary noise for internal data structures that no external consumer sees",
        "Dataclasses are part of Python's standard library and require no external dependencies, while Pydantic adds a third-party package that increases the project's dependency surface area"
      ],
      correctOption: 0,
      explanation: "Axiom V defines the boundary vs internal distinction: Pydantic validates data at the edges where errors enter (API requests, external input, user submissions), performing runtime checks on every field. Dataclasses structure trusted internal data without validation overhead. Once data passes the Pydantic boundary, it is trusted — re-validating it internally wastes computation. Option D is tempting because the dependency concern is real, but Axiom V's reasoning is architectural (validation belongs at boundaries, not everywhere), not about minimizing dependencies.",
      source: "Lesson 05: Types Are Guardrails"
    },
    {
      question: "James asks Claude Code to generate a function for his order system without providing type annotations. The AI produces code that calls customer.get_orders() — a method that does not exist on the Customer class. If James had provided type annotations, how would the outcome differ according to Axiom V?",
      options: [
        "The AI would have generated different code because type annotations in the prompt constrain the AI's output, reducing the statistical likelihood of hallucinating nonexistent methods",
        "The AI might still hallucinate the method, but pyright would immediately flag customer.get_orders() as an error because the Customer type has no such attribute — catching it before runtime",
        "The AI would have refused to generate the function entirely, since type-annotated codebases trigger stricter generation modes that prevent the AI from inventing new method signatures",
        "The type annotations would have caused a runtime error at import time rather than at execution time, giving James faster feedback but not fundamentally preventing the hallucination"
      ],
      correctOption: 1,
      explanation: "Axiom V states that types matter MORE with AI-generated code because type annotations give the static checker (pyright) a machine-readable specification to verify against. The AI might still hallucinate customer.get_orders(), but pyright would immediately flag it as an error — the Customer type has no such attribute. Without types, the hallucination reaches runtime unchecked. Option A is tempting because types in prompts do help guide AI generation, but Axiom V's emphasis is on verification after generation, not on preventing hallucination during generation.",
      source: "Lesson 05: Types Are Guardrails"
    },
    {
      question: "James builds a search feature for his order system using an f-string: `query = f\"SELECT * FROM orders WHERE customer = '{name}'\"`. Emma immediately flags this as dangerous. A user enters `'; DROP TABLE orders; --` in the search box. What happens, and what does Axiom VI prescribe?",
      options: [
        "The query executes the DROP TABLE command, deleting all orders — Axiom VI prescribes using parameterized queries with placeholders so user input is never treated as executable SQL",
        "The query fails with a syntax error because SQLite does not allow semicolons within string literals, but Emma is right that the pattern is still unsafe for other database engines",
        "The query returns no results because the injected text does not match any customer name, but the f-string pattern should be replaced with an ORM that handles escaping automatically",
        "The database rejects the query because modern SQL databases have built-in injection protection that detects and blocks malicious patterns in string-concatenated queries"
      ],
      correctOption: 0,
      explanation: "The string concatenation trap is a critical anti-pattern from Axiom VI. When user input is inserted directly into SQL via f-strings, the database cannot distinguish between the query and the injected command. The DROP TABLE executes, deleting all data. Axiom VI prescribes parameterized queries with placeholders (? in SQLite) where user input is always treated as data, never as executable SQL. Option D is tempting — one might assume modern databases have protections — but SQL injection via string concatenation works on every database engine. Parameterized queries are the non-negotiable defense.",
      source: "Lesson 06: Data is Relational"
    },
    {
      question: "James stores customer names directly in each order record: order #101 says 'Acme Corp' and order #102 says 'Acme Corporation' for the same customer. When he queries total revenue by customer, the report shows two separate entries. What relational principle from Axiom VI does this violate?",
      options: [
        "'One Fact, One Place' — the customer name should be stored once in a customers table and referenced by customer_id in orders, so a name change applies everywhere automatically",
        "'Schema as Type Definition' — the orders table should have a CHECK constraint that validates customer names against a predefined list of approved company name formats",
        "'SQL as Declarative Language' — the report query should use GROUP BY with a fuzzy matching function to merge similar customer names into a single aggregated row",
        "'Migrations as Version Control' — a database migration should normalize existing customer names by finding and correcting all variations before adding a uniqueness constraint"
      ],
      correctOption: 0,
      explanation: "Axiom VI's 'One Fact, One Place' principle states: store each fact exactly once. Customer names belong in a customers table, referenced by customer_id in the orders table. When the name is stored once, changing it in one place updates every reference automatically. Duplicated names across records inevitably drift — 'Acme Corp' vs 'Acme Corporation' — creating inconsistency that no query can reliably resolve. Option C is tempting because fuzzy matching can merge similar names in a report, but it treats the symptom (inconsistent names) rather than the cause (duplicated storage).",
      source: "Lesson 06: Data is Relational"
    },
    {
      question: "James asks Claude Code to query his order database. The AI generates a correct 12-line SQL query that replaces James's 40-line Python loop. Emma points out that SQL's constrained vocabulary makes it particularly effective for AI-generated queries. Why does Axiom VI call SQL 'agent-native'?",
      options: [
        "SQL databases provide built-in query explanation tools (EXPLAIN) that let AI agents verify their own generated queries before execution, creating a self-checking feedback loop",
        "SQL's constrained vocabulary of roughly 30 keywords reduces hallucination opportunities compared to Python's thousands of library functions — fewer valid choices mean fewer wrong choices",
        "SQL queries return structured tabular results that AI agents can parse directly without data transformation, while Python loops produce unstructured output requiring additional processing",
        "SQL databases maintain schema metadata that AI agents can query to discover table structures automatically, eliminating the need for documentation about the data model"
      ],
      correctOption: 1,
      explanation: "Axiom VI identifies SQL as agent-native because its constrained vocabulary — roughly 30 keywords (SELECT, FROM, WHERE, JOIN, GROUP BY, etc.) — drastically reduces the space of possible hallucinations. Python has thousands of library functions an AI might misuse; SQL has a small, well-defined set of operations. Fewer valid choices mean fewer wrong choices. Option D is tempting because schema discovery is real and useful, but the 'agent-native' designation specifically refers to the constrained vocabulary advantage, not the metadata access.",
      source: "Lesson 06: Data is Relational"
    },
    {
      question: "James asks Claude Code to generate both a discount calculation function and its test suite at the same time. The AI produces code where a 15% discount multiplies the price by 0.15 (instead of subtracting 15%), and the test asserts the same wrong formula. All tests pass. What Axiom VII trap is this?",
      options: [
        "The Green Bar Illusion — the tests pass but do not cover enough edge cases, so the boundary between correct and incorrect behavior remains untested and unspecified",
        "The Circular Testing Trap — the AI encoded the same misunderstanding in both the implementation and the tests, so neither catches the other's error and everything appears correct",
        "The Annotation Illusion — the code has proper type annotations that make it look structurally sound, masking the fact that the logic is mathematically wrong despite correct types",
        "Happy-path-only testing — the tests verify the expected discount scenario but do not test edge cases like zero-percent discounts, 100-percent discounts, or negative order totals"
      ],
      correctOption: 1,
      explanation: "The Circular Testing Trap is Axiom VII's most dangerous anti-pattern: when the AI generates both code AND tests, the same misunderstanding produces wrong code AND wrong tests that validate each other. The 15% discount bug passes all tests because the test encodes the same flawed formula. This is why Axiom VII insists: you write the tests (the specification), and the AI writes the implementation. Option A is tempting because the Green Bar Illusion also involves false confidence from passing tests, but the distinction is critical — the Green Bar Illusion is about coverage gaps, while the Circular Testing Trap is about systematically wrong specifications.",
      source: "Lesson 07: Tests Are the Specification"
    },
    {
      question: "Emma explains the test pyramid to James: 70% unit tests, 20% integration tests, 10% end-to-end tests. James asks why he cannot just write end-to-end tests since they cover the most functionality per test. What does Axiom VII say about this distribution?",
      options: [
        "End-to-end tests are slow, fragile, and provide vague failure messages — unit tests are fast, precise specifications that pinpoint exactly which behavior broke and why",
        "End-to-end tests require a full production environment to run, making them impractical for the CI pipeline where fast feedback loops are essential for developer productivity",
        "End-to-end tests cannot be used with Test-Driven Generation because they exercise the entire system, while TDG requires focused tests that specify individual function behavior",
        "End-to-end tests create a maintenance burden because any UI change breaks multiple tests simultaneously, while unit tests are isolated from presentation layer changes"
      ],
      correctOption: 0,
      explanation: "Axiom VII positions unit tests as the most effective specifications in the pyramid: they are fast (milliseconds), precise (one test per behavior), and provide clear failure messages that pinpoint exactly what broke. End-to-end tests cover broad functionality but are slow (seconds to minutes), fragile (break when any component changes), and give vague failures ('order flow failed' doesn't tell you whether the discount, shipping, or payment calculation is wrong). The 70/20/10 distribution reflects this tradeoff. Option C is tempting because TDG does emphasize focused tests, but end-to-end tests can be part of a TDG workflow — they just should not dominate it.",
      source: "Lesson 07: Tests Are the Specification"
    },
    {
      question: "James finishes a coding session with Claude Code. The AI generated three functions for his order system. James reviews them visually and they look correct — clean structure, good docstrings, sensible variable names. He commits without writing tests. According to Axiom VII, what has he lost?",
      options: [
        "He has lost the ability to refactor safely, since without tests there is no automated way to verify that future changes preserve the current behavior of those three functions",
        "He has lost the performance baseline, since without test benchmarks there is no way to detect if future changes cause the functions to run slower than their original implementation",
        "He has lost persistent specification — the natural language prompts that guided the AI do not survive the session, but tests would have permanently encoded what 'correct' means for each function",
        "He has lost the audit trail, since without test coverage reports there is no documentation proving that the AI-generated code was reviewed and validated before being committed"
      ],
      correctOption: 2,
      explanation: "Axiom VII emphasizes that tests are persistent specification — they outlive the AI session. The natural language prompts James used ('implement a discount calculator') disappear when the session ends. Tests like `assert calculate_discount(200, 0.15) == 30.0` permanently encode what correct behavior means, surviving across sessions, developers, and future AI regenerations. Option A is also true (tests enable safe refactoring), but the question specifically asks what was lost from the AI session context — the answer is the persistent specification that would have captured the session's intent.",
      source: "Lesson 07: Tests Are the Specification"
    },
    {
      question: "James makes a commit with the message: 'Updated shipping calculation.' Emma reviews it and says the message is insufficient. According to Axiom VIII's conventional commit format, what should the message look like?",
      options: [
        "A timestamp and the developer's name appended to the message, so that git blame shows both who made the change and when it was committed without running a separate command",
        "A detailed paragraph explaining every line that changed in the shipping calculation, including the old values, the new values, and the mathematical formulas used in each step",
        "A reference to the GitHub issue or Jira ticket number that requested the shipping change, followed by a one-line summary that links the commit to the project management system",
        "A prefix like feat, fix, or refactor that categorizes the change at a glance, followed by a scope and a description that explains what kind of change was made to which component"
      ],
      correctOption: 3,
      explanation: "Axiom VIII prescribes conventional commit format: a structured prefix (feat, fix, refactor, test, docs) tells you what KIND of change at a glance. A properly formatted message might be: `fix(shipping): correct international rate calculation for orders over $10K`. The prefix categorizes it, the scope narrows the domain, and the description explains the change. Option B is tempting because more detail sounds better, but the diff already shows what changed line-by-line — the commit message's job is to explain the WHY and categorize the WHAT, not restate the diff.",
      source: "Lesson 08: Version Control is Memory"
    },
    {
      question: "Emma adds `Co-Authored-By: Claude <noreply@anthropic.com>` to every commit where Claude Code generated or substantially modified the code. James asks why this matters. What does Axiom VIII say about AI commit attribution?",
      options: [
        "Attribution satisfies open-source license requirements that mandate disclosure when code is generated by AI systems rather than written entirely by human developers",
        "Attribution enables accountability and audit — the team can filter AI-generated commits to review them with appropriate scrutiny and track patterns in AI-assisted contributions",
        "Attribution allows the AI provider to collect usage metrics about how their model's code performs in production, helping improve future model training and code generation quality",
        "Attribution protects the developer from liability by establishing that the code was AI-generated, shifting responsibility for any bugs or security issues to the AI provider"
      ],
      correctOption: 1,
      explanation: "Axiom VIII prescribes Co-Authored-By attribution for accountability, learning, and audit. The team can filter commits to see which were AI-assisted, review them with appropriate scrutiny, and identify patterns — for example, 'AI commits in the shipping module have a higher defect rate.' This supports informed code review rather than treating all commits identically. Option D is tempting because liability feels important, but Axiom VIII's reasoning is about enabling informed review and accountability within the team, not about legal responsibility shifting.",
      source: "Lesson 08: Version Control is Memory"
    },
    {
      question: "James writes a commit message: 'Changed FREE_SHIPPING_THRESHOLD from 50 to 75.' Emma says this describes WHAT changed but not WHY. According to Axiom VIII's WHY rule, what should the message convey instead?",
      options: [
        "The message should include the git diff statistics (files changed, insertions, deletions) so reviewers can assess the scope of the change without opening the commit details",
        "The message should explain the reasoning behind the change — for example, that shipping costs below $75 were unprofitable based on Q3 margin analysis — because the diff already shows what changed",
        "The message should list all files modified by the change so that developers working on related features can quickly identify whether the commit affects their work in progress",
        "The message should include the test results confirming the threshold change works correctly, proving that the new value was validated before the commit was created"
      ],
      correctOption: 1,
      explanation: "Axiom VIII's WHY rule states: commit messages explain WHY (the reasoning, context, and trade-offs), not WHAT (the diff already shows what changed). 'Changed threshold from 50 to 75' restates the diff — anyone can see the number change. But WHY was it changed? 'Shipping costs below $75 were unprofitable per Q3 margin analysis' gives the context that the diff cannot capture. Six months later, this reasoning tells the team whether the threshold can be changed again or whether the margin constraint still applies. Option A is tempting because scope information helps reviewers, but git already shows diff stats — the message should add information the diff cannot provide.",
      source: "Lesson 08: Version Control is Memory"
    },
    {
      question: "James sets up a CI pipeline for his order system. He puts the integration tests (which take 2 minutes) first in the pipeline, followed by ruff formatting checks (which take 3 seconds). Most failed runs wait 2 minutes before discovering a simple formatting error. According to Axiom IX, how should the pipeline be ordered?",
      options: [
        "The ordering does not matter as long as all checks must pass before merging — the pipeline is a gate, and whether it takes 2 minutes or 3 minutes total does not affect the final outcome",
        "Most critical checks first, least critical last — integration tests catch the most impactful bugs and should run first even if they are slower, because catching serious errors early is more important",
        "All checks should run in parallel rather than sequentially, so that formatting errors and test failures are discovered simultaneously regardless of individual check duration",
        "Fast checks first, slow checks last — formatting (seconds) and linting (seconds) should run before type checking (seconds) and tests (minutes), so trivial errors are caught immediately"
      ],
      correctOption: 3,
      explanation: "Axiom IX's verification pyramid runs fast, cheap checks at the base and slower, thorough checks at the top. Each level gates the next — if formatting fails in 3 seconds, there is no need to wait 2 minutes for integration tests. This ordering minimizes wasted time: most failures are caught by fast checks, and expensive checks only run on code that already passes basic standards. Option B sounds logical (catch serious bugs early) but wastes developer time on 2-minute waits for trivial errors. Option D is tempting because the final outcome is the same, but developer productivity depends on fast feedback — waiting 2 minutes to learn about a missing comma is a poor experience.",
      source: "Lesson 09: Verification is a Pipeline"
    },
    {
      question: "James's team has a CI pipeline that runs all checks, but developers can merge pull requests even when CI is red. They rely on developers' discipline to wait for green. Over time, more red merges slip through. What does Axiom IX say about this situation?",
      options: [
        "The team should require two approving code reviews in addition to CI passing, so that even if CI is bypassed, human reviewers catch the issues that the pipeline would have flagged",
        "The team should add a Slack notification that alerts the team channel when someone merges with red CI, creating social accountability that reinforces the discipline to wait for green",
        "The pipeline should automatically revert any merge that was made while CI was red, restoring the previous green state of the main branch without requiring human intervention",
        "Branch protection should make CI mandatory, not advisory — when CI fails, the merge button is disabled by infrastructure, because discipline alone cannot scale across a growing team"
      ],
      correctOption: 3,
      explanation: "Axiom IX states: 'If it's not in CI, it's not enforced.' Making CI advisory rather than mandatory creates a discipline problem that worsens as teams grow. Branch protection makes CI a hard gate — if CI fails, the merge button is disabled. Infrastructure enforces what discipline alone cannot maintain under deadline pressure, fatigue, or growing team size. Option B is tempting because social accountability works in small teams, but it does not scale — notifications become noise, and the merge still happens. The solution is a hard gate, not a soft reminder.",
      source: "Lesson 09: Verification is a Pipeline"
    },
    {
      question: "James argues that his team does not need a CI pipeline because they run all checks manually before each commit — 'I always run pytest and pyright locally before pushing.' Emma disagrees. What principle from Axiom IX does she invoke?",
      options: [
        "'If it's not in CI, it's not enforced' — manual checks depend on individual discipline and will be skipped under deadline pressure, after late-night fixes, or by new team members unfamiliar with the process",
        "'The Verification Pyramid' — manual checks only cover the top levels (tests and types) but miss the base levels (formatting and linting) that developers consider too trivial to run every time",
        "'Local CI mirrors remote CI' — the point of CI is not to replace local testing but to provide a standardized environment where OS-specific and Python-version-specific differences are eliminated",
        "'The Shallow Pipeline' — running only pytest and pyright manually is equivalent to a shallow pipeline that misses dependency auditing, security scanning, and integration testing layers"
      ],
      correctOption: 0,
      explanation: "Axiom IX's core principle is: 'If it's not in CI, it's not enforced.' James may run checks diligently today, but manual processes fail under pressure — deadline crunches, late-night hotfixes, new team members who do not know the process. CI automates enforcement so the pipeline catches issues regardless of who committed, when they committed, or how rushed they were. Option C makes a valid point about standardized environments, but the primary argument is about enforcement reliability, not environment consistency.",
      source: "Lesson 09: Verification is a Pipeline"
    },
    {
      question: "After James's 2:47 AM incident, Emma explains the feedback loop: the production failure revealed an untested edge case (international shipping under concurrent load), which led to a new load test, which was added to CI, which now catches similar failures before deployment. What does Axiom X call this cycle?",
      options: [
        "Continuous deployment — production failures trigger automatic rollbacks and re-deployment of the previous stable version, creating a self-healing cycle that minimizes downtime",
        "The verification pyramid — each production incident adds a new layer to the testing pyramid, gradually building comprehensive coverage from unit tests up through integration and end-to-end tests",
        "The observability stack — each incident adds a new monitoring dimension (logs, then metrics, then traces) until the system has complete visibility across all operational concerns",
        "The feedback loop — observe production failures, gain insight into gaps, improve verification by adding tests, verify the fix passes CI, deploy, and observe again to confirm the fix holds"
      ],
      correctOption: 3,
      explanation: "Axiom X describes the feedback loop as: observe (production failure detected) -> insight (untested edge case identified) -> improve (add load test) -> verify (fix passes CI) -> deploy -> observe (confirm fix holds under production load) -> repeat. Each cycle makes the verification system stronger. Option B is tempting because the pyramid does grow, but the feedback loop is broader — it encompasses observation, insight, improvement, and re-observation, not just test additions.",
      source: "Lesson 10: Observability Extends Verification"
    },
    {
      question: "Emma reviews James's complete order management system and notes that he has implemented nine of the ten axioms but skipped observability. She warns that the system is incomplete. According to Axiom X, why is no single axiom sufficient on its own?",
      options: [
        "Each axiom covers a specific phase of the development lifecycle — from code structure through deployment to production — and skipping any one leaves a gap that the others cannot fill",
        "The axioms are ordered by importance, with observability being the capstone that validates all previous axioms, making it the most critical single axiom to implement correctly",
        "The axioms create redundant verification layers so that any three axioms together provide sufficient coverage, but implementing all ten provides the maximum possible protection",
        "Each axiom addresses a different programming language or tool in the development stack, and skipping one means that tool is used without the discipline the axiom prescribes"
      ],
      correctOption: 0,
      explanation: "Axiom X's 'Complete System' concept states that all ten axioms work together — shell orchestrates programs (I), knowledge lives in markdown (II), programs are disciplined (III), composed from units (IV), types enforce contracts (V), data is relational (VI), tests specify behavior (VII), git remembers everything (VIII), the pipeline verifies (IX), and production is observed (X). Skip any one and a gap opens that the others cannot cover. Option B is tempting because observability is the final axiom, but it is not a capstone of importance — it is one link in a chain, and any broken link weakens the whole system.",
      source: "Lesson 10: Observability Extends Verification"
    },
    {
      question: "James's order system passes all tests and the CI pipeline is green. He deploys to production. Three days later, a rarely-triggered code path causes incorrect tax calculations for orders from a specific region. No test anticipated this edge case. What distinction does Axiom X draw between tests and observability?",
      options: [
        "Tests are unnecessary once observability is in place, because structured logging and metrics can detect any failure that tests would have caught, with the added benefit of real production data",
        "Tests catch anticipated errors before deployment (known edge cases, defined specifications), while observability catches unanticipated errors during production (real-world conditions no test predicted)",
        "Tests verify code logic while observability verifies infrastructure, so the tax calculation error would require a new test but the observability system would detect unrelated server-level failures",
        "Tests run in an isolated environment while observability monitors the integrated system, so the tax error was caused by environment differences that only production observability could have detected"
      ],
      correctOption: 1,
      explanation: "Axiom X draws a clear line: pre-deployment verification (tests, types, CI) catches anticipated errors — the edge cases you thought of and wrote specifications for. Post-deployment verification (logs, metrics, traces) catches unanticipated errors — the failures that emerge under real-world conditions no test predicted. The tax calculation error for a specific region was unanticipated — no test covered it because nobody anticipated the edge case. Observability detects it in production through error logging and metric anomalies. Option A is dangerously wrong — tests and observability are complementary, not substitutes. Each catches what the other cannot.",
      source: "Lesson 10: Observability Extends Verification"
    }
  ]}
/>

## Answer Key

| Question | Correct Answer | Axiom Tested |
|----------|---------------|--------------|
| 1 | D | Axiom I: Shell as Orchestrator |
| 2 | B | Axiom I: Shell as Orchestrator |
| 3 | A | Axiom II: Knowledge is Markdown |
| 4 | C | Axiom II: Knowledge is Markdown |
| 5 | B | Axiom III: Programs Over Scripts |
| 6 | A | Axiom III: Programs Over Scripts |
| 7 | C | Axiom IV: Composition Over Monoliths |
| 8 | D | Axiom IV: Composition Over Monoliths |
| 9 | A | Axiom V: Types Are Guardrails |
| 10 | C | Axiom V: Types Are Guardrails |
| 11 | D | Axiom VI: Data is Relational |
| 12 | B | Axiom VI: Data is Relational |
| 13 | C | Axiom VII: Tests Are the Specification |
| 14 | A | Axiom VII: Tests Are the Specification |
| 15 | B | Axiom VIII: Version Control is Memory |
| 16 | D | Axiom VIII: Version Control is Memory |
| 17 | A | Axiom IX: Verification is a Pipeline |
| 18 | B | Axiom IX: Verification is a Pipeline |
| 19 | C | Axiom X: Observability Extends Verification |
| 20 | D | Axiom X: Observability Extends Verification |
| 21 | A | Axiom I: Shell as Orchestrator |
| 22 | B | Axiom I: Shell as Orchestrator |
| 23 | B | Axiom I: Shell as Orchestrator |
| 24 | A | Axiom II: Knowledge is Markdown |
| 25 | B | Axiom II: Knowledge is Markdown |
| 26 | A | Axiom II: Knowledge is Markdown |
| 27 | A | Axiom III: Programs Over Scripts |
| 28 | A | Axiom III: Programs Over Scripts |
| 29 | A | Axiom III: Programs Over Scripts |
| 30 | A | Axiom IV: Composition Over Monoliths |
| 31 | B | Axiom IV: Composition Over Monoliths |
| 32 | B | Axiom IV: Composition Over Monoliths |
| 33 | B | Axiom V: Types Are Guardrails |
| 34 | A | Axiom V: Types Are Guardrails |
| 35 | B | Axiom V: Types Are Guardrails |
| 36 | A | Axiom VI: Data is Relational |
| 37 | A | Axiom VI: Data is Relational |
| 38 | B | Axiom VI: Data is Relational |
| 39 | B | Axiom VII: Tests Are the Specification |
| 40 | A | Axiom VII: Tests Are the Specification |
| 41 | C | Axiom VII: Tests Are the Specification |
| 42 | A | Axiom VIII: Version Control is Memory |
| 43 | B | Axiom VIII: Version Control is Memory |
| 44 | B | Axiom VIII: Version Control is Memory |
| 45 | A | Axiom IX: Verification is a Pipeline |
| 46 | A | Axiom IX: Verification is a Pipeline |
| 47 | A | Axiom IX: Verification is a Pipeline |
| 48 | A | Axiom X: Observability Extends Verification |
| 49 | A | Axiom X: Observability Extends Verification |
| 50 | B | Axiom X: Observability Extends Verification |

## Scoring Guide

| Score | Proficiency Level | Interpretation |
|-------|------------------|----------------|
| 45-50 | B2 (Advanced) | Strong understanding of all ten axioms and their practical application |
| 35-44 | B1 (Intermediate) | Good understanding with some gaps in applying axioms to real scenarios |
| 25-34 | A2 (Elementary) | Basic understanding of axioms but needs more practice with application |
| 0-24 | A1 (Beginner) | Review the lessons and work through the "Try With AI" exercises |

## Next Steps

Based on your performance, focus on the group where you missed the most questions. The ten axioms fall into three groups (the same groups introduced in the chapter overview):

- **Axioms I-IV (Structure)**: If you missed questions 1-20, review shell orchestration (the complexity threshold between shell and program), markdown knowledge (complete reasoning, not just decisions), the Python discipline stack (uv, pyright, ruff, pytest), and composition patterns (composable monolith vs. microservices). These axioms govern how your code is organized. Questions 1-8 cover the foundational concepts, while questions 21-32 probe deeper into composition primitives, the complexity threshold, information hiding, dependency injection, and the decomposition trap.
- **Axioms V-VI (Data)**: If you missed questions 21-30, study the three-layer type stack (hints, Pyright, Pydantic) and relational data modeling (SQLite vs. PostgreSQL). These axioms make sure information stays correct as it moves through your system. Questions 9-12 cover foundational type and data concepts, while questions 33-38 explore the Any type trap, dataclass vs. Pydantic boundaries, AI hallucination verification, SQL injection, normalization, and SQL as an agent-native language.
- **Axioms VII-X (Verification)**: If you missed questions 31-50, revisit Test-Driven Generation (the Circular Testing Trap, the test pyramid, and persistent specification), git as memory (conventional commits, Co-Authored-By attribution, the WHY rule), CI/CD pipelines (pipeline ordering, branch protection, and enforcement vs. discipline), and observability practices (the feedback loop, the complete system, and pre- vs. post-deployment verification). These axioms create a chain of verification — from writing the first test to monitoring the live system.

Remember: The ten axioms build upon each other — shell orchestrates programs (I, III), programs are composed (IV) with types (V) and relational data (VI), tested via TDG (VII), tracked in git (VIII), verified in CI (IX), and monitored in production (X). Master each group before advancing to the next.