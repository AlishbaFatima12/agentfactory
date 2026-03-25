---
slug: /General-Agents-Foundations/claude-code-teams-cicd/chapter-quiz
sidebar_position: 10
title: "Chapter 18: Claude Code for Teams, CI/CD & Advanced Configuration Quiz"
proficiency_level: B1
layer: 2
estimated_time: "30 mins"
chapter_type: Assessment
chapter: 18
lesson: 10
running_example_id: claude-code-teams-quiz
---

# Chapter 18: Claude Code for Teams, CI/CD & Advanced Configuration Quiz

Test your mastery of Claude Code's configuration hierarchy, custom skills, path-specific rules, plan mode, iterative refinement, CI/CD integration, multi-pass review architecture, and session management. This assessment is aligned to the **Claude Certified Architect: Foundations** exam, covering Domain 3 (Claude Code Configuration & Workflows), Task Statement 4.6 (Multi-Pass Review), and Task Statement 1.7 (Session Management).

<Quiz
title="Chapter 18: Claude Code Teams & CI/CD Assessment"
questionsPerBatch={25}
questions={[
{
question: "A new developer joins your team and reports that Claude Code is not following the project's coding standards, even though all other team members see them consistently applied. You confirm the standards are documented. Where is the most likely misconfiguration?",
options: [
"The standards are in ~/.claude/CLAUDE.md on another developer's machine, not in the project repository",
"The standards are in a .claude/skills/ file that the new developer has not explicitly invoked yet",
"The standards are in the project's CLAUDE.md but the developer's personal ~/.claude/CLAUDE.md overrides them",
"The standards are in a .claude/rules/ file with a paths field that does not match the files the developer is editing"
],
correctOption: 0,
explanation: "Task 3.1: The most common cause of a team member not receiving instructions is that the configuration lives in the wrong scope. User-level files (~/.claude/CLAUDE.md) are personal and not shared via version control. If someone documented standards there instead of in the project-level .claude/CLAUDE.md or root CLAUDE.md, only that developer's machine would have them. Option B is unlikely because skills are on-demand tools, not always-loaded standards. Option C is incorrect because personal CLAUDE.md adds to project instructions; it does not override them. Option D describes path-scoped rules, which would affect all team members equally, not just one developer. The fix is to move the standards to the project-level CLAUDE.md so they are version-controlled and shared automatically.",
source: "Lesson 1: The CLAUDE.md Configuration Hierarchy"
},
{
question: "Your team's monorepo has three packages: frontend/, backend/, and shared/. Each package needs different coding conventions, but all packages share a common commit message format. How should you organize the CLAUDE.md configuration?",
options: [
"Put the commit message format in the project-level CLAUDE.md and package-specific conventions in directory-level CLAUDE.md files within each package folder",
"Put everything in a single project-level CLAUDE.md with sections for each package, relying on Claude to infer which section applies",
"Create three separate .claude/rules/ files with paths fields matching each package directory",
"Put all conventions in ~/.claude/CLAUDE.md so every developer has them regardless of which project they work on"
],
correctOption: 0,
explanation: "Task 3.1: The three-level hierarchy is designed exactly for this scenario. Universal standards (commit format) belong in the project-level CLAUDE.md where they apply to all work. Package-specific conventions belong in directory-level CLAUDE.md files (frontend/CLAUDE.md, backend/CLAUDE.md, shared/CLAUDE.md) where they load only when Claude is working in that directory. Option B consolidates everything but relies on inference rather than explicit scoping, which is unreliable. Option C uses path-specific rules, which work for cross-cutting concerns like test conventions but are less natural for directory-specific standards. Option D places project standards in user scope, making them invisible to teammates and mixing project context with personal preferences.",
source: "Lesson 1: The CLAUDE.md Configuration Hierarchy"
},
{
question: "Your project's CLAUDE.md has grown to 500 lines covering testing standards, API conventions, deployment procedures, security rules, and style guidelines. Claude Code occasionally ignores instructions buried in the middle of the file. What is the most effective restructuring approach?",
options: [
"Split the monolithic file into focused .claude/rules/ topic files (testing.md, api-conventions.md, security.md) so each loads as a separate context block",
"Move the most critical rules to the top of CLAUDE.md and add bold formatting to make them stand out",
"Use @import to reference external standards files, keeping CLAUDE.md itself short with only the most critical constraints",
"Duplicate the most important rules at both the top and bottom of CLAUDE.md to ensure they appear in Claude's attention"
],
correctOption: 0,
explanation: "Task 3.1: Splitting a monolithic CLAUDE.md into .claude/rules/ topic files is the recommended approach for large instruction sets. Each file loads as a discrete context block, reducing the 'lost in the middle' effect where instructions buried in long documents get less attention. Option B improves the single-file structure but does not solve the fundamental problem of a 500-line context dump. Option C is valid for including external standards but keeps everything in a single file at load time. Option D wastes context tokens on duplication without addressing the root organizational issue. The .claude/rules/ directory also enables path-specific loading via YAML frontmatter, which is not possible with a monolithic file.",
source: "Lesson 1: The CLAUDE.md Configuration Hierarchy"
},
{
question: "You suspect that Claude Code is not loading all of your configuration files. A teammate recently added a new .claude/rules/ file, but Claude's behavior has not changed. Which command would you use to diagnose the loading issue?",
options: [
"Run /memory to list all loaded instruction files and verify which configuration files Claude has in context",
"Run claude --version to check if the installation is up to date with the latest configuration features",
"Open .claude/config.json to verify that the rules directory is enabled in settings",
"Run cat .claude/rules/*.md to manually verify the file contents are correct"
],
correctOption: 0,
explanation: "Task 3.1: The /memory command shows which instruction files Claude Code has loaded in the current session, making it the diagnostic tool for configuration issues. If the new rules file does not appear in /memory output, you know it is not being loaded, and you can investigate why (wrong directory, YAML frontmatter error, path pattern mismatch, etc.). Option B checks installation version but does not diagnose configuration loading. Option C references a configuration file that does not control rules directory loading. Option D verifies file contents but does not tell you whether Claude actually loaded them into its context.",
source: "Lesson 1: The CLAUDE.md Configuration Hierarchy"
},
{
question: "Your team wants to selectively include different standards files for different packages in a monorepo. The frontend package needs React conventions and the backend needs FastAPI conventions, but both need the shared testing standards. Which CLAUDE.md feature enables this modular composition?",
options: [
"@import syntax in each package's directory-level CLAUDE.md to reference specific standards files",
"Path-specific rules with glob patterns matching package directories",
"A single project-level CLAUDE.md with conditional sections wrapped in package markers",
"Skills in .claude/skills/ that load the appropriate conventions on demand"
],
correctOption: 0,
explanation: "Task 3.1: The @import syntax allows each package's CLAUDE.md to selectively include only the relevant standards files. frontend/CLAUDE.md can @import ../standards/react.md and ../standards/testing.md, while backend/CLAUDE.md can @import ../standards/fastapi.md and ../standards/testing.md. This keeps each package's context focused while sharing common standards. Option B works for file-type conventions but is less natural for per-package standards. Option C does not exist as a feature; CLAUDE.md has no conditional sections. Option D requires manual invocation and is for task-specific workflows, not always-loaded standards.",
source: "Lesson 1: The CLAUDE.md Configuration Hierarchy"
},
{
question: "Your codebase has distinct areas with different coding conventions: React components use functional style with hooks, API handlers use async/await with specific error handling, and test files spread throughout the codebase must all follow the same conventions regardless of location. What is the most maintainable way to ensure Claude automatically applies the correct conventions when generating code?",
options: [
"Create rule files in .claude/rules/ with YAML frontmatter specifying glob patterns to conditionally apply conventions based on file paths",
"Consolidate all conventions in the root CLAUDE.md file under headers for each area, relying on Claude to infer which section applies",
"Create skills in .claude/skills/ for each code type that include the relevant conventions in their SKILL.md files",
"Place a separate CLAUDE.md file in each subdirectory containing that area's specific conventions"
],
correctOption: 0,
explanation: "Task 3.3: Path-specific rules with glob patterns (e.g., **/\*.test.tsx for all test files, src/api/**/_ for API handlers) allow conventions to be automatically applied based on file paths regardless of directory location. This is essential for test files spread across many directories. Option B relies on inference rather than explicit matching, making it unreliable. Option C requires manual skill invocation, contradicting the need for automatic application. Option D cannot easily handle files spread across many directories, since you would need a CLAUDE.md in every directory containing test files. This matches exam sample Question 6, which tests exactly this scenario.",
source: "Lesson 2: Path-Specific Rules with Glob Patterns"
},
{
question: "You create a .claude/rules/testing.md file with YAML frontmatter paths containing three glob patterns: **/\*.test.ts, **/*.test.tsx, and \*\*/*.spec.ts. When would Claude Code load the instructions in this file?",
options: [
"Only when Claude is editing or generating files that match the glob patterns (test and spec files)",
"At the start of every session, regardless of which files Claude is working on",
"Only when a developer explicitly invokes the testing rules via a slash command",
"When Claude reads any TypeScript file, since the patterns include .ts extensions"
],
correctOption: 0,
explanation: "Task 3.3: Path-scoped rules with YAML frontmatter paths fields load conditionally. Claude Code evaluates the glob patterns and loads the rule file only when it is editing files that match those patterns. This means testing conventions load when working on test files but do not consume context tokens during unrelated work. Option B describes always-loaded rules (files without a paths field). Option C describes skills/commands, not rules. Option D is incorrect because the patterns specifically match *.test.ts and *.spec.ts, not all .ts files. The glob patterns must match the full filename pattern, not just the extension.",
source: "Lesson 2: Path-Specific Rules with Glob Patterns"
},
{
question: "A team lead asks you to create rules ensuring that all Terraform files follow specific conventions. Terraform files exist in infrastructure/, modules/, and environments/ directories across the repository. What glob pattern in .claude/rules/terraform.md would correctly match all of them?",
options: [
"paths: [\"\*\*/_.tf\"] to match all .tf files regardless of directory location",
"paths: [\"infrastructure/**/*\", \"modules/**/*\", \"environments/**/*\"] to match each directory explicitly",
"paths: [\"*.tf\"] to match Terraform files in any directory",
"paths: [\"terraform/**/*\"] to match all files under a terraform root directory"
],
correctOption: 0,
explanation: "Task 3.3: The glob pattern **/_.tf matches all files with the .tf extension anywhere in the repository, regardless of which directory they are in. This is the correct approach when the convention applies to a file type, not a directory location. Option B would work but is brittle: if a new directory contains .tf files, you must update the rule. It also matches non-Terraform files in those directories. Option C uses _.tf without the ** prefix, which only matches files in the root directory, not nested directories. Option D assumes all Terraform files live under a terraform/ directory, which does not match the stated structure.",
source: "Lesson 2: Path-Specific Rules with Glob Patterns"
},
{
question: "You have a .claude/rules/ file for API conventions (paths: [\"src/api/**/*\"]) and a separate file for database conventions (paths: [\"src/db/**/*\"]). A developer asks: 'What happens when I am editing a file in src/api/ that also imports from src/db/?' Which rules load?",
options: [
"Only the API conventions load, because rules activate based on the file being edited, not its imports",
"Both rule files load because Claude detects the cross-dependency between the directories",
"Neither file loads because the overlapping context creates an ambiguity Claude cannot resolve",
"The API conventions load first, then the database conventions load when Claude follows the import"
],
correctOption: 0,
explanation: "Task 3.3: Path-scoped rules activate based on the file Claude is currently editing, not on that file's import graph or dependencies. If you are editing src/api/users.ts, the API conventions rule loads because the file path matches src/api/**/\*. The database conventions do not load even though the file imports from src/db/, because the paths field evaluates against the file being edited. Option B would require Claude to analyze import graphs before loading rules, which is not how the feature works. Option C is incorrect because there is no ambiguity. Option D describes a sequential loading behavior that does not exist.",
source: "Lesson 2: Path-Specific Rules with Glob Patterns"
},
{
question: "Your team is debating between placing React conventions in a directory-level CLAUDE.md file (src/components/CLAUDE.md) versus a path-specific rule (.claude/rules/react.md with paths: [\"src/components/**/_\"]). Some React components also exist in src/pages/. Which approach is more appropriate?",
options: [
"Path-specific rules, because they can match React files across multiple directories with glob patterns like \*\*/_.tsx",
"Directory-level CLAUDE.md in src/components/, because it keeps conventions close to the code they govern",
"Both approaches simultaneously, so components in src/pages/ get the rules from the path pattern while src/components/ gets them from the directory CLAUDE.md",
"A single project-level CLAUDE.md entry, because React conventions should apply everywhere"
],
correctOption: 0,
explanation: "Task 3.3: When conventions apply to files spread across multiple directories, path-specific rules are the correct choice. A glob pattern like **/\*.tsx or src/{components,pages}/**/*.tsx catches React files regardless of location. Option B would only cover src/components/ and miss React components in src/pages/. Option C creates redundancy and potential inconsistency between the two mechanisms. Option D applies React conventions to all code including non-React files like Python backend code, wasting context and potentially causing confusion.",
source: "Lesson 2: Path-Specific Rules with Glob Patterns"
},
{
question: "You want to create a custom /review command that runs your team's standard code review checklist. This command should be available to every developer when they clone or pull the repository. Where should you create this command file?",
options: [
"In .claude/commands/ in the project repository, so it is version-controlled and shared with all team members",
"In ~/.claude/commands/ in each developer's home directory for personal command access",
"In the CLAUDE.md file at the project root, adding the review checklist as a section",
"In .claude/skills/ with a SKILL.md file containing the review instructions"
],
correctOption: 0,
explanation: "Task 3.2: Project-scoped commands in .claude/commands/ are version-controlled and automatically available to every developer who clones or pulls the repository. This is the exact mechanism for team-wide command sharing. Option B places commands in the user directory, which is personal and not shared via version control. Option C puts instructions in CLAUDE.md, which provides always-loaded context but does not create an invocable /review command. Option D creates a skill rather than a command; while skills also create slash commands, the question specifically asks for a command, and skills add complexity (frontmatter, supporting files) that is unnecessary for a simple review checklist. This matches exam sample Question 4.",
source: "Lesson 3: Custom Skills with Frontmatter"
},
{
question: "You are building a skill that performs a comprehensive codebase analysis, generating verbose output as it reads dozens of files. You want this analysis to run without polluting the main conversation context. Which SKILL.md frontmatter field achieves this?",
options: [
"context: fork, which runs the skill in an isolated sub-agent that returns only a summary to the main conversation",
"allowed-tools: [Read, Grep, Glob], which restricts the skill to read-only operations",
"argument-hint: \"path to analyze\", which prompts the user for the target directory",
"context: isolated, which creates a sandboxed environment for the skill execution"
],
correctOption: 0,
explanation: "Task 3.2: The context: fork frontmatter option runs a skill in an isolated sub-agent. The sub-agent performs all its work (reading files, analyzing code, generating verbose output) in a separate context, then returns only a summary to the main conversation. This prevents dozens of file reads from consuming the main session's context window. Option B restricts tool access but does not isolate the context. Option C provides parameter hints but has nothing to do with context isolation. Option D uses a non-existent value; the correct value is fork, not isolated.",
source: "Lesson 3: Custom Skills with Frontmatter"
},
{
question: "Your team wants a /security-audit skill that can read files and search the codebase but must never modify or delete anything. Which frontmatter configuration ensures this restriction?",
options: [
"allowed-tools: [Read, Grep, Glob] to restrict the skill to read-only tools, preventing any file write operations",
"context: fork to run the skill in isolation where write operations are sandboxed",
"argument-hint: \"--read-only\" to signal that the skill should not make modifications",
"permissions: read-only in the SKILL.md frontmatter to enforce file system restrictions"
],
correctOption: 0,
explanation: "Task 3.2: The allowed-tools frontmatter field restricts which tools Claude can use during skill execution. By listing only Read, Grep, and Glob, you prevent the skill from using Write, Edit, or Bash, making it effectively read-only. This is a hard restriction, not a suggestion. Option B isolates context but does not restrict which tools the sub-agent can use; a forked skill can still write files. Option C provides a hint for parameters, not a security restriction. Option D uses a non-existent frontmatter field; permissions is not a valid SKILL.md option.",
source: "Lesson 3: Custom Skills with Frontmatter"
},
{
question: "A developer creates a personal variant of the team's /deploy skill with additional safety checks specific to their workflow. They want this personal version to be available only to them without affecting the team's shared skill. Where should they place this skill?",
options: [
"In ~/.claude/skills/ with a different name than the team's skill, so it does not conflict with the shared version",
"In .claude/skills/ with a modified SKILL.md, committing the changes to a personal branch",
"In ~/.claude/commands/ as a command file that wraps the team's skill with extra checks",
"In .claude/skills/ with the same name, relying on their local changes not being committed"
],
correctOption: 0,
explanation: "Task 3.2: Personal skill customization uses ~/.claude/skills/ in the developer's home directory. By using a different name (e.g., /my-deploy instead of /deploy), the personal skill coexists with the team's shared version without conflict. Option B modifies the shared skill directory and creates version control headaches. Option C creates a command rather than a skill, losing access to frontmatter features like context: fork. Option D risks accidentally committing personal changes and creates an inconsistent state where the local file differs from the repository.",
source: "Lesson 3: Custom Skills with Frontmatter"
},
{
question: "Your team has both a CLAUDE.md rule stating 'always use TypeScript strict mode' and a /migrate-to-strict skill that converts JavaScript files to TypeScript. A developer asks when each should be used. Which explanation correctly distinguishes skills from CLAUDE.md?",
options: [
"CLAUDE.md instructions load automatically in every session for universal standards; skills are invoked on demand for specific task workflows",
"CLAUDE.md is for documentation that developers read; skills are for instructions that Claude reads and executes",
"CLAUDE.md applies only during code generation; skills apply during code review and analysis tasks",
"CLAUDE.md rules are suggestions that Claude may ignore; skills are strict requirements Claude must follow"
],
correctOption: 0,
explanation: "Task 3.2: The fundamental distinction is loading behavior. CLAUDE.md content loads automatically at session start and applies to all work, making it ideal for universal standards. Skills load only when explicitly invoked via their slash command, making them ideal for specific task workflows that are not needed in every session. Option B incorrectly suggests CLAUDE.md is for humans; both mechanisms provide instructions to Claude. Option C is incorrect because CLAUDE.md applies to all Claude activities, not just code generation. Option D is wrong because both CLAUDE.md and skills provide guidance Claude follows; neither is merely a suggestion.",
source: "Lesson 3: Custom Skills with Frontmatter"
},
{
question: "You have been assigned to restructure the team's monolithic application into microservices. This will involve changes across dozens of files and requires decisions about service boundaries and module dependencies. Which approach should you take?",
options: [
"Enter plan mode to explore the codebase, understand dependencies, and design an implementation approach before making changes",
"Start with direct execution and make changes incrementally, letting the implementation reveal the natural service boundaries",
"Use direct execution with comprehensive upfront instructions detailing exactly how each service should be structured",
"Begin in direct execution mode and only switch to plan mode if you encounter unexpected complexity during implementation"
],
correctOption: 0,
explanation: "Task 3.4: Plan mode is designed for complex tasks involving large-scale changes, multiple valid approaches, and architectural decisions. Monolith-to-microservices restructuring is the textbook case: it affects dozens of files, requires decisions about service boundaries, and has multiple valid decomposition strategies. Plan mode enables safe codebase exploration and design before committing to changes, preventing costly rework. Option B risks costly rework when dependencies are discovered late. Option C assumes you already know the right structure without exploring the code. Option D ignores that the complexity is already known from the task description. This matches exam sample Question 5.",
source: "Lesson 4: Plan Mode vs Direct Execution"
},
{
question: "A developer is fixing a single-file bug where a date validation function allows invalid leap year dates. The stack trace points to line 47 in validators.ts. Which execution mode is appropriate?",
options: [
"Direct execution, because the scope is clear (single file, known line), and plan mode would add unnecessary overhead",
"Plan mode, because any bug fix could have unexpected ripple effects across the codebase",
"The Explore subagent first to investigate whether the bug has wider implications before choosing a mode",
"Plan mode to understand how date validation is used throughout the application before fixing the bug"
],
correctOption: 0,
explanation: "Task 3.4: Direct execution is appropriate for well-scoped, unambiguous changes. A single-file bug fix with a clear stack trace and known location is the ideal case: the implementation path is obvious and there are no architectural decisions to make. Option B is overly cautious; not every bug fix requires investigation. Option C adds unnecessary overhead for a clear bug. Option D would be appropriate if the validation function were used in unexpected ways, but the question states the scope is clear. The key decision factor is scope clarity: if you know exactly what to change and where, direct execution is faster and equally effective.",
source: "Lesson 4: Plan Mode vs Direct Execution"
},
{
question: "During a multi-phase library migration affecting 45+ files, you want to investigate which modules depend on the old library before planning your migration order. However, this investigation will generate verbose output from reading many files. How should you handle this?",
options: [
"Use the Explore subagent to investigate dependencies in isolation, keeping the main conversation context clean for the actual migration planning",
"Enter plan mode and investigate directly, since plan mode is designed for complex tasks with many files",
"Read all 45+ files in the main conversation to build a complete picture before starting the migration",
"Create a custom skill with context: fork to run the dependency analysis in a separate context"
],
correctOption: 0,
explanation: "Task 3.4: The Explore subagent isolates verbose discovery output and returns only a summary to the main conversation. This preserves main context for the actual migration planning and implementation. Option B uses plan mode for investigation but does not address the context consumption problem; reading 45+ files in plan mode still fills the main context window. Option C directly consumes the main context with verbose file reads, potentially exhausting it before the actual migration begins. Option D is creative but unnecessary; the Explore subagent is the built-in mechanism for exactly this pattern, and creating a custom skill adds overhead.",
source: "Lesson 4: Plan Mode vs Direct Execution"
},
{
question: "A colleague insists that plan mode should always be used because 'planning is always better than jumping in.' Under which scenario would this advice lead to worse outcomes?",
options: [
"Adding a single validation check to an existing function, where plan mode adds unnecessary overhead without providing architectural insights",
"Migrating a database schema that affects 30 tables across multiple services",
"Choosing between three different caching strategies for a new feature",
"Refactoring a monolithic test suite into isolated unit tests per module"
],
correctOption: 0,
explanation: "Task 3.4: Plan mode has overhead: it takes time to explore, design, and create a plan. For simple, well-scoped changes like adding a validation check, this overhead provides no benefit because there are no architectural decisions, no multiple valid approaches, and no multi-file dependencies to discover. The developer wastes time planning what could be done in seconds. Options B, C, and D all involve complexity, multiple valid approaches, or multi-file changes where plan mode's exploration and design phase prevents costly mistakes.",
source: "Lesson 4: Plan Mode vs Direct Execution"
},
{
question: "You want Claude to combine plan mode investigation with direct execution implementation. What is the recommended workflow?",
options: [
"Use plan mode or the Explore subagent to investigate and design an approach, then switch to direct execution to implement the planned changes",
"Run plan mode and direct execution simultaneously in two parallel sessions working on the same files",
"Enter plan mode, create the plan, export it to a file, start a fresh session, and load the plan as context for direct execution",
"Use direct execution throughout but paste the plan into CLAUDE.md so it loads automatically"
],
correctOption: 0,
explanation: "Task 3.4: The most powerful Claude Code pattern combines investigation (plan mode or Explore subagent) with implementation (direct execution). You investigate to understand the codebase and design an approach, then switch to direct execution to implement the plan. This happens within the same session. Option B risks file conflicts and is not how Claude Code works. Option C adds unnecessary complexity; mode switching within a session preserves context. Option D misuses CLAUDE.md for temporary task-specific planning, cluttering the always-loaded context.",
source: "Lesson 4: Plan Mode vs Direct Execution"
},
{
question: "You ask Claude to 'normalize dates in the CSV processing pipeline,' but the output is inconsistent: some dates become YYYY-MM-DD, others become MM/DD/YYYY, and timestamps are handled differently across runs. What is the most effective way to get consistent results?",
options: [
"Provide 2-3 concrete input/output examples showing exactly how each date format should be transformed",
"Add more detail to the prose description: 'normalize all dates to ISO 8601 format, handling timestamps and partial dates'",
"Write a CLAUDE.md rule specifying the project's date format standard for all future transformations",
"Ask Claude to first analyze all date formats in the pipeline before attempting any normalization"
],
correctOption: 0,
explanation: "Task 3.5: Concrete input/output examples are the most effective technique for communicating expected transformations. Prose descriptions like 'normalize dates' are ambiguous because 'normalize' means different things in different contexts. Examples eliminate ambiguity by showing Claude exactly what the input looks like and what the output should be. For instance: '03/15/2024 -> 2024-03-15, March 15 2024 -> 2024-03-15, 2024-03-15T10:30:00Z -> 2024-03-15'. Option B adds detail but remains open to interpretation. Option C sets a standard but does not demonstrate edge cases. Option D delays the work without improving the transformation specification.",
source: "Lesson 5: Iterative Refinement Techniques"
},
{
question: "You are building a data migration function with many edge cases: null values, malformed entries, unicode characters, and duplicate records. Rather than describing all edge cases upfront, you want Claude to handle them iteratively. Which refinement technique is most appropriate?",
options: [
"Write a comprehensive test suite covering all edge cases first, then share test failures with Claude to iterate until all tests pass",
"Provide 2-3 input/output examples covering the most common cases and hope Claude infers the edge cases",
"Describe all edge cases in a detailed prose specification before Claude starts implementing",
"Ask Claude to implement the function, then manually test each edge case and report issues one at a time"
],
correctOption: 0,
explanation: "Task 3.5: Test-driven iteration is the ideal technique for edge-case-heavy functions. By writing tests first, you define the expected behavior precisely and create an automated feedback loop. You share the failing tests with Claude, it modifies the implementation, you run the tests again, and repeat until all pass. This is faster and more reliable than describing edge cases in prose, because tests are unambiguous and automatically verifiable. Option B relies on inference for edge cases, which is unreliable. Option C front-loads all specification, which is time-consuming and may still miss cases. Option D works but is slow because manual testing lacks the automated feedback loop.",
source: "Lesson 5: Iterative Refinement Techniques"
},
{
question: "You need to implement a cache invalidation strategy for an e-commerce application, but you are not deeply familiar with the caching domain. Before implementing, you want Claude to help you think through the design. Which refinement technique should you use?",
options: [
"The interview pattern: ask Claude to pose questions about your requirements, constraints, and edge cases before implementing",
"Provide concrete I/O examples of cache hits and misses so Claude understands the expected behavior",
"Write a test suite for the cache layer and iterate by sharing test failures with Claude",
"Enter plan mode and have Claude explore the codebase to understand existing caching patterns"
],
correctOption: 0,
explanation: "Task 3.5: The interview pattern is designed for unfamiliar domains where you do not know all the considerations upfront. By asking Claude to pose questions ('What happens when inventory changes during a user's session? Should cache warming happen at startup or lazily? What is the acceptable staleness window?'), you surface design considerations you might not have anticipated. Option B is premature because you do not yet know all the cases to exemplify. Option C jumps to implementation before understanding the design. Option D explores existing code but does not help you think through a new cache design.",
source: "Lesson 5: Iterative Refinement Techniques"
},
{
question: "You have five independent bugs to fix in a module. Three are formatting issues and two are logic errors. The formatting fixes do not interact with each other or with the logic fixes, but the two logic fixes modify overlapping code paths. How should you communicate these to Claude?",
options: [
"Send the three formatting fixes in one message and the two logic fixes in a separate single message, because the logic fixes interact but the formatting fixes do not",
"Send all five fixes in a single message so Claude has the full picture of everything that needs to change",
"Send each fix as a separate sequential message so Claude can focus on one issue at a time",
"Send the formatting fixes first, commit, then send the logic fixes in a second message"
],
correctOption: 0,
explanation: "Task 3.5: The decision between single-message and sequential iteration depends on whether fixes interact. Independent issues (the three formatting fixes) can be communicated together because their resolutions do not affect each other. Interacting issues (the two logic fixes on overlapping code paths) should be communicated together in one message so Claude considers both when modifying the shared code. Option B mixes interacting and independent issues unnecessarily. Option C is inefficient for independent fixes and risks the logic fixes being addressed without knowledge of each other. Option D adds an unnecessary commit boundary between unrelated categories.",
source: "Lesson 5: Iterative Refinement Techniques"
},
{
question: "You are implementing iterative refinement on a string transformation function. After providing I/O examples, Claude produces correct output for your examples but fails on inputs you did not exemplify. What should you do?",
options: [
"Add the failing inputs as additional I/O examples and share them with Claude to refine the implementation",
"Rewrite the prose description to be more comprehensive, covering every possible input pattern",
"Switch to the interview pattern so Claude can ask about edge cases you missed in your examples",
"Write a test suite to formalize all expected behaviors, then use test-driven iteration to fix remaining issues"
],
correctOption: 3,
explanation: "Task 3.5: When I/O examples are insufficient, escalating to test-driven iteration provides the strongest guarantee of correctness. A test suite formalizes all expected behaviors (including the failing cases) and creates an automated feedback loop: Claude modifies the implementation, tests run, failures guide the next iteration. Option A adds examples incrementally, which works but lacks the systematic coverage of a test suite. Option B returns to prose, which was the original problem. Option C delays implementation further; at this point you know the edge cases, you just need Claude to handle them. The progression from examples to tests is a natural refinement escalation.",
source: "Lesson 5: Iterative Refinement Techniques"
},
{
question: "Your pipeline script runs `claude \"Analyze this pull request for security issues\"` but the job hangs indefinitely. Logs indicate Claude Code is waiting for interactive input. What is the correct approach to run Claude Code in an automated pipeline?",
options: [
"Add the -p flag: claude -p \"Analyze this pull request for security issues\" to run in non-interactive mode",
"Set the environment variable CLAUDE_HEADLESS=true before running the command",
"Redirect stdin from /dev/null: claude \"Analyze this pull request\" < /dev/null",
"Add the --batch flag: claude --batch \"Analyze this pull request for security issues\""
],
correctOption: 0,
explanation: "Task 3.6: The -p (or --print) flag is the documented way to run Claude Code in non-interactive mode. It processes the prompt, outputs the result to stdout, and exits without waiting for user input. This is exactly what CI/CD pipelines require. Option B references a non-existent environment variable. Option C is a Unix workaround that does not properly address Claude Code's command syntax. Option D references a non-existent --batch flag. The -p flag is fundamental to any CI integration and is the first thing you need to know for automated Claude Code usage. This matches exam sample Question 10.",
source: "Lesson 6: Claude Code in CI/CD Pipelines"
},
{
question: "Your CI pipeline needs Claude Code to produce machine-parseable output that can be automatically posted as inline PR comments. Which CLI flags produce structured output conforming to a defined schema?",
options: [
"--output-format json combined with --json-schema to produce structured output matching a specific JSON schema",
"--format json to switch from human-readable text output to JSON format",
"--structured-output with a schema file path to enforce output structure",
"-p with the prompt requesting JSON output, then parsing the response text as JSON"
],
correctOption: 0,
explanation: "Task 3.6: The --output-format json flag switches Claude Code's output to JSON format, and --json-schema provides a schema that the structured output must conform to. The response includes a structured*output field containing the schema-compliant data. Option B uses a non-existent --format flag. Option C uses a non-existent --structured-output flag. Option D relies on prompt-based JSON output, which is less reliable than schema-enforced structured output and may include non-JSON text around the response.",
source: "Lesson 6: Claude Code in CI/CD Pipelines"
},
{
question: "Your automated code review pipeline runs on every PR commit. After a developer pushes a fix addressing review feedback, the pipeline re-runs and posts the same comments again, creating duplicates. How should you prevent this?",
options: [
"Include prior review findings in the context for the next run, instructing Claude to report only new or still-unresolved issues",
"Delete all previous comments before each new pipeline run to start with a clean slate",
"Cache the review results and skip the pipeline entirely if the previous run found no critical issues",
"Configure the pipeline to run only on the initial PR creation, not on subsequent commits"
],
correctOption: 0,
explanation: "Task 3.6: The recommended approach is to feed previous review comments back into the next Claude Code run as context, with instructions to report only new or still-unresolved issues. This avoids duplicates while still catching new problems introduced by the fix. Option B loses history and confuses developers who already addressed previous feedback. Option C skips reviews on potentially problematic commits. Option D misses issues introduced by later commits, defeating the purpose of continuous review.",
source: "Lesson 6: Claude Code in CI/CD Pipelines"
},
{
question: "You are writing a CLAUDE.md file that CI-invoked Claude Code will use during automated test generation. Which content would most improve the quality of generated tests?",
options: [
"Testing standards, existing test fixtures, and the naming conventions used in the test suite, so Claude generates tests consistent with the existing suite",
"A general instruction to 'write comprehensive tests for all changed code in the pull request'",
"The full source code of the application under test, so Claude has complete context for test generation",
"Links to the team's testing documentation wiki pages for reference during generation"
],
correctOption: 0,
explanation: "Task 3.6: CLAUDE.md serves as CI context, providing the information Claude needs to generate high-quality, consistent output. Specific testing standards (assertion libraries, mocking patterns), available fixtures, and naming conventions help Claude generate tests that match the existing suite rather than introducing inconsistent patterns. Option B is vague and produces inconsistent results. Option C is impractical for large applications and wastes context. Option D is useless because CI-invoked Claude Code cannot browse external links. The key insight is that CLAUDE.md should provide actionable, specific context, not generic instructions.",
source: "Lesson 6: Claude Code in CI/CD Pipelines"
},
{
question: "Your team wants to reduce API costs for automated analysis. Currently, real-time Claude calls power two workflows: (1) a blocking pre-merge check that must complete before developers can merge, and (2) a technical debt report generated overnight for review the next morning. Your manager proposes switching both to the Message Batches API for its 50% cost savings. How should you evaluate this proposal?",
options: [
"Use batch processing for the technical debt reports only; keep real-time calls for pre-merge checks since batch has no guaranteed latency SLA",
"Switch both workflows to batch processing with status polling to check for completion",
"Keep real-time calls for both workflows to avoid batch result ordering issues",
"Switch both to batch processing with a timeout fallback to real-time if batches take too long"
],
correctOption: 0,
explanation: "Task 3.6: The Message Batches API offers 50% cost savings but has processing times up to 24 hours with no guaranteed latency SLA. This makes it unsuitable for blocking pre-merge checks where developers wait for results, but ideal for overnight batch jobs like technical debt reports. Option B is wrong because relying on 'often faster' completion is not acceptable for blocking workflows. Option C reflects a misconception; batch results can be correlated using custom_id fields. Option D adds unnecessary complexity when the simpler solution is matching each API to its appropriate use case. This matches exam sample Question 11.",
source: "Lesson 6: Claude Code in CI/CD Pipelines"
},
{
question: "Your CI pipeline provides existing test files to Claude Code when generating new tests. Why is this important?",
options: [
"So Claude avoids suggesting test scenarios already covered by the existing suite, preventing duplicate test coverage",
"So Claude can copy the test file structure and naming patterns for consistent formatting",
"So Claude can verify that existing tests still pass after generating new test code",
"So Claude can identify which existing tests are obsolete and should be replaced"
],
correctOption: 0,
explanation: "Task 3.6: Providing existing test files in context prevents Claude from suggesting duplicate test scenarios. Without this context, Claude might generate tests for cases already covered, wasting effort and cluttering the test suite. While consistent formatting (Option B) is a secondary benefit, the primary reason is avoiding redundant coverage. Option C describes test execution, not generation context. Option D is a separate task (test maintenance) unrelated to the purpose of providing existing tests during generation.",
source: "Lesson 6: Claude Code in CI/CD Pipelines"
},
{
question: "A pull request modifies 14 files across the stock tracking module. Your single-pass review analyzing all files together produces inconsistent results: detailed feedback for some files, superficial comments for others, obvious bugs missed, and contradictory feedback flagging a pattern as problematic in one file while approving identical code elsewhere in the same PR. How should you restructure the review?",
options: [
"Split into focused passes: analyze each file individually for local issues, then run a separate integration-focused pass examining cross-file data flow",
"Require developers to split large PRs into smaller submissions of 3-4 files before the automated review runs",
"Switch to a higher-tier model with a larger context window to give all 14 files adequate attention in one pass",
"Run three independent review passes on the full PR and only flag issues that appear in at least two of the three runs"
],
correctOption: 0,
explanation: "Task 4.6: Splitting reviews into focused passes directly addresses the root cause: attention dilution when processing many files at once. Per-file analysis ensures consistent depth across all files, while a separate cross-file integration pass catches issues like inconsistent patterns, broken data flow, and API contract mismatches. Option B shifts burden to developers without improving the system. Option C misunderstands that larger context windows do not solve attention quality issues. Option D would suppress detection of real bugs by requiring consensus, and some issues may only be caught intermittently. This matches exam sample Question 12.",
source: "Lesson 7: Multi-Pass Review Architecture"
},
{
question: "After Claude Code generates a new authentication module, you ask it in the same session to review the code for security issues. The review reports no concerns. A separate team member's independent review later finds a JWT validation bypass. What explains this discrepancy?",
options: [
"Self-review limitations: the generator session retains its reasoning context, making it less likely to question its own design decisions",
"The generator session was biased toward finding only syntax errors, not logical security flaws",
"Claude Code's review capabilities degrade after generating large amounts of code in the same session",
"The original prompt did not include security review criteria, so Claude defaulted to surface-level analysis"
],
correctOption: 0,
explanation: "Task 4.6: Self-review is fundamentally limited because the same session retains the reasoning context from generation. The model is less likely to question decisions it just made because those decisions still 'make sense' within the context of its own reasoning. An independent Claude instance (without the generator's context) approaches the code fresh and is more effective at catching subtle issues like a JWT validation bypass. Option B incorrectly narrows the bias. Option C suggests capability degradation, which is not the mechanism. Option D blames the prompt rather than the fundamental self-review limitation.",
source: "Lesson 7: Multi-Pass Review Architecture"
},
{
question: "You are designing a multi-pass review workflow for a 20-file pull request. The review should catch both file-local bugs and cross-file integration issues. How should you structure the passes?",
options: [
"Run per-file local analysis passes for each file (checking for bugs, security issues, and code quality), then run a separate cross-file integration pass examining data flow and API contracts between files",
"Run a single comprehensive pass that examines all 20 files together with instructions to check for both local and cross-file issues",
"Run two passes: one checking for bugs and another checking for style, each examining all 20 files",
"Run the review in 4 batches of 5 files each, with no separate integration pass"
],
correctOption: 0,
explanation: "Task 4.6: The multi-pass architecture splits reviews into per-file local analysis (focused depth) and cross-file integration passes (focused breadth). Per-file passes ensure consistent attention to each file's bugs, security issues, and code quality. The integration pass examines how files interact: data flow, API contract consistency, import dependencies, and cross-file patterns. Option B produces the inconsistent results described in the previous question. Option C splits by concern type but not by file granularity, still suffering from attention dilution. Option D batches files but misses cross-file issues between batches.",
source: "Lesson 7: Multi-Pass Review Architecture"
},
{
question: "Your automated review system produces findings with confidence scores, but developers report that they waste time investigating false positives in certain categories (minor style, local patterns) while missing genuine bugs flagged with low confidence. How should you improve the review criteria?",
options: [
"Write specific review criteria that define which issues to report (bugs, security vulnerabilities) and which to skip (minor style, local patterns), replacing vague instructions with categorical definitions",
"Increase the confidence threshold so only high-confidence findings are reported to developers",
"Add more few-shot examples of genuine bugs to the review prompt so Claude learns to distinguish real issues",
"Temporarily disable the categories producing the most false positives to restore developer trust"
],
correctOption: 0,
explanation: "Task 4.6: Specific categorical review criteria ('report: potential null dereferences, SQL injection vectors, race conditions; skip: naming preferences, import ordering, comment style') produce more precise results than confidence-based filtering. Vague instructions like 'be conservative' or 'only report high-confidence findings' fail because confidence scores do not reliably correlate with issue severity. Option B loses genuine bugs that happen to have low confidence. Option C helps but does not address the fundamental need for explicit criteria. Option D is a valid interim measure but does not fix the underlying problem of vague criteria.",
source: "Lesson 7: Multi-Pass Review Architecture"
},
{
question: "Your review system flags an issue with 'high confidence' in the null safety category but the finding is a false positive. Developers begin ignoring all null safety findings. How should you address this trust erosion?",
options: [
"Temporarily disable the null safety category while improving its prompts, then re-enable it with concrete code examples for each severity level to achieve consistent classification",
"Lower the confidence threshold for null safety findings so only the highest-confidence ones are shown",
"Add a feedback button so developers can mark false positives and the system learns over time",
"Keep all categories enabled but add a disclaimer that null safety findings may contain false positives"
],
correctOption: 0,
explanation: "Task 4.6: High false positive rates in specific categories undermine developer trust in accurate categories too. Temporarily disabling the problematic category, improving its prompts with concrete code examples (showing what constitutes a real null safety issue vs. a safe pattern), and re-enabling with better precision restores trust. Option B applies a blunt threshold without fixing the underlying classification quality. Option C requires infrastructure for feedback collection that does not exist in a basic pipeline. Option D acknowledges the problem without fixing it, further eroding trust.",
source: "Lesson 7: Multi-Pass Review Architecture"
},
{
question: "You are writing review criteria for your multi-pass system. Which criteria specification would produce the most precise and actionable findings?",
options: [
"'Report: potential null dereferences where a variable could be undefined at the call site. Skip: style preferences like naming conventions and import ordering. For each finding, include the file path, line number, the specific risk, and a suggested fix.'",
"'Be conservative. Only report issues you are highly confident about. Flag anything that could be a security risk.'",
"'Review this code thoroughly and report any bugs, style issues, performance problems, or security vulnerabilities you find.'",
"'Focus on bugs and security. Be strict about error handling. Provide detailed explanations for each finding.'"
],
correctOption: 0,
explanation: "Task 4.6: Effective review criteria are specific and categorical: they define exactly what to report, what to skip, and what format to use. Option A specifies a concrete issue type (null dereferences), exclusions (style preferences), and output format (file, line, risk, fix). Option B relies on confidence self-assessment, which is poorly calibrated. Option C is a kitchen-sink request that produces inconsistent, diluted results. Option D is better than B and C but still lacks concrete examples and explicit skip criteria, leaving too much room for interpretation.",
source: "Lesson 7: Multi-Pass Review Architecture"
},
{
question: "You are implementing confidence self-reporting in your review output schema. Each finding includes a confidence field alongside the issue description. How should you use these confidence scores to route human attention?",
options: [
"Route low-confidence findings to human review for validation while auto-applying or auto-posting high-confidence findings, using confidence to prioritize limited reviewer capacity",
"Filter out all low-confidence findings entirely so reviewers only see high-confidence issues",
"Treat all findings equally regardless of confidence, since the model's self-reported confidence is unreliable",
"Sort findings by confidence in descending order but show all of them to reviewers"
],
correctOption: 0,
explanation: "Task 4.6: Confidence self-reporting enables calibrated review routing. Low-confidence findings get human validation (catching genuine issues the model was uncertain about), while high-confidence findings are auto-posted or auto-applied (reducing reviewer workload). This prioritizes limited human attention where it adds the most value. Option B discards potentially genuine issues. Option C wastes reviewer time on findings the model is certain about. Option D improves ordering but does not reduce the review burden.",
source: "Lesson 7: Multi-Pass Review Architecture"
},
{
question: "You are working on a complex bug investigation that spans multiple days. On day one, you make significant progress identifying the root cause. You need to continue tomorrow without re-explaining all the context. Which approach preserves your investigation state?",
options: [
"Use --resume with a named session (claude --resume bug-investigation) to continue the session with preserved conversation context",
"Copy your findings into a text file and paste them into a new session tomorrow",
"Leave the terminal open overnight so the session persists until you return",
"Add your investigation notes to CLAUDE.md so they load automatically in the next session"
],
correctOption: 0,
explanation: "Task 1.7: Named sessions with --resume allow you to create persistent investigation sessions that survive terminal closure. Running claude --resume bug-investigation on day two picks up exactly where you left off with full conversation context. Option B requires manual effort and loses the nuanced context of the conversation. Option C is fragile (terminal could close, computer could sleep) and wastes resources. Option D misuses CLAUDE.md for temporary investigation state, cluttering the always-loaded project context.",
source: "Lesson 8: Session Management: Resume, Fork, and Recovery"
},
{
question: "You want to compare two different refactoring approaches from the same starting point: approach A (extract microservices) and approach B (modularize the monolith). How can you explore both without either approach contaminating the other's context?",
options: [
"Use fork_session to create parallel exploration branches from the shared baseline, exploring each approach independently",
"Open two separate terminal windows and start new Claude sessions in each one",
"Use plan mode to explore approach A, then use /compact to clear the context before exploring approach B",
"Create two separate git branches and run Claude in each branch directory"
],
correctOption: 0,
explanation: "Task 1.7: fork_session (or /branch) creates independent exploration branches from a shared baseline. Both branches start with the same context (your codebase understanding and investigation so far) but diverge independently. Option B loses the shared context because each session starts fresh. Option C risks contamination because /compact summarizes rather than removing context. Option D addresses file state but not conversation context; you would still need separate sessions. Session forking is specifically designed for this parallel exploration pattern.",
source: "Lesson 8: Session Management: Resume, Fork, and Recovery"
},
{
question: "After a lengthy investigation session with many file reads, Claude's responses start becoming less precise, referencing 'typical patterns' instead of the specific classes it discovered earlier. What is happening and how should you address it?",
options: [
"Context degradation from verbose tool results filling the context window. Use /compact with targeted instructions to preserve critical findings while reclaiming context space.",
"Claude's model is experiencing inference drift from too many sequential requests. Restart the session completely.",
"The investigation files have changed since they were read, making Claude's cached references stale. Re-read the key files.",
"Claude has reached its maximum session length and needs a fresh session to continue working effectively."
],
correctOption: 0,
explanation: "Task 1.7: Context degradation occurs when tool results (file reads, search outputs) accumulate in the context window, consuming tokens disproportionately to their relevance. Claude starts referencing general patterns because the specific details are being pushed out or lost in the noise. /compact reduces context usage by summarizing earlier conversation turns. The key technique is providing custom instructions to /compact (e.g., 'preserve the list of affected classes and the root cause analysis') so critical findings survive the compaction. Option B misidentifies the cause. Option C addresses stale data, not context overflow. Option D assumes a hard limit that can be managed with /compact.",
source: "Lesson 8: Session Management: Resume, Fork, and Recovery"
},
{
question: "You resume a session from yesterday. Since then, a teammate has refactored the database module that your session previously analyzed. What should you do before continuing?",
options: [
"Inform the resumed session about the specific changes to the database module so it can update its understanding and re-analyze only the affected areas",
"Start a completely fresh session because any resumed session with stale file reads will produce unreliable results",
"Re-read all files the session previously analyzed to refresh Claude's understanding of the entire codebase",
"Run /compact to clear the stale information and force Claude to re-read files on demand"
],
correctOption: 0,
explanation: "Task 1.7: When resuming a session after external changes, the best approach is to inform the session about what specifically changed. This allows Claude to update its understanding efficiently, re-analyzing only the affected areas rather than re-reading everything. Option B is too aggressive; the session's context about unchanged code is still valid. Option C wastes time re-reading files that have not changed. Option D removes context but does not provide the new information Claude needs.",
source: "Lesson 8: Session Management: Resume, Fork, and Recovery"
},
{
question: "A developer has been working in a session for hours with many file reads and tool outputs. They need to continue the investigation but the context is degraded. Should they resume the existing session or start fresh?",
options: [
"Start fresh with a written summary of key findings, because stale tool results in the existing session will cause unreliable analysis",
"Resume the session and use /compact to reclaim space, since the conversation context is still valid",
"Resume the session and re-read all previously read files to refresh the stale tool results",
"Start fresh without any context transfer, trusting Claude to rediscover the same findings"
],
correctOption: 0,
explanation: "Task 1.7: When tool results are stale (file contents have changed or search results are outdated), resumption is unreliable because Claude's understanding is based on old data. A fresh session with a concise summary of key findings provides Claude with accurate starting context. The summary preserves the investigation's high-level conclusions while allowing Claude to read current file states. Option B keeps stale data even after compaction. Option C re-reads files but the stale conversation context may conflict with new reads. Option D wastes time rediscovering known findings.",
source: "Lesson 8: Session Management: Resume, Fork, and Recovery"
},
{
question: "Your team's CI pipeline runs Claude Code for automated review, but reviewers complain the reviews lack project context and produce generic feedback. The pipeline uses claude -p \"Review this PR for issues\". What is missing?",
options: [
"A project-level CLAUDE.md with testing standards, review criteria, and coding conventions that gives CI-invoked Claude Code the project context it needs",
"The --verbose flag to enable Claude's more detailed analysis mode in CI",
"A custom /ci-review skill that provides review-specific instructions beyond what the prompt contains",
"The --context flag pointing to the repository root so Claude can read project files"
],
correctOption: 0,
explanation: "Tasks 3.1 and 3.6: Claude Code in CI reads the project's CLAUDE.md just like interactive sessions. Without a CLAUDE.md containing testing standards, review criteria, and project-specific conventions, CI Claude Code lacks the context to provide project-relevant feedback and defaults to generic analysis. Option B references a non-existent flag. Option C would help but requires manual invocation, which is not how -p mode works; CLAUDE.md loads automatically. Option D is unnecessary because Claude Code automatically reads project files from the working directory.",
source: "Lessons 1 and 6"
},
{
question: "You are designing a CI workflow that generates tests and then reviews the generated code. A colleague suggests running both in the same Claude session for efficiency. Why is this a poor approach?",
options: [
"The generator session retains its reasoning context, making its self-review less effective at catching issues in its own generated code",
"CI pipelines cannot maintain persistent Claude sessions between sequential workflow steps",
"Running generation and review in one session doubles the API cost compared to two separate sessions",
"The generated test files are not saved to disk until the session ends, so the review cannot access them"
],
correctOption: 0,
explanation: "Tasks 3.6 and 4.6: Session context isolation is critical in CI. The session that generated code retains its reasoning context, making it less likely to question its own decisions during review. An independent review instance (a separate -p invocation) approaches the generated code without the generator's biases, catching subtle issues the generator would rationalize. Option B is technically incorrect; the point is that you should not maintain the same session, not that you cannot. Option C is incorrect; cost scales with tokens, not sessions. Option D misunderstands how Claude Code works; file changes are saved during the session.",
source: "Lessons 6 and 7"
},
{
question: "You have a .claude/rules/security.md file with paths: [\"**/*.ts\"] containing security review rules. You also have a CLAUDE.md section covering general coding standards. When a developer edits a TypeScript file, which instructions does Claude have?",
options: [
"Both the always-loaded CLAUDE.md instructions and the path-triggered security rules, because path-specific rules add to the base context rather than replacing it",
"Only the path-triggered security rules, because path-specific rules override CLAUDE.md when they match",
"Only the CLAUDE.md instructions, because path-specific rules require explicit invocation via a slash command",
"The CLAUDE.md instructions first, then the security rules load after the first edit is saved"
],
correctOption: 0,
explanation: "Tasks 3.1 and 3.3: Path-specific rules are additive. CLAUDE.md loads at session start and remains in context throughout. Path-scoped rules load additionally when Claude edits matching files. They do not replace or override existing instructions. This means a developer editing TypeScript gets both universal standards from CLAUDE.md and TypeScript-specific security rules from the path-scoped file. Option B incorrectly suggests override behavior. Option C confuses rules with skills. Option D describes a sequential loading that does not match actual behavior; path rules load when matching files are involved, not after saves.",
source: "Lessons 1 and 2"
},
{
question: "A team is using Claude Code with a complex CLAUDE.md, four path-specific rules files, three custom skills, and named sessions. A new team member asks for the correct mental model of how these features relate. Which description is most accurate?",
options: [
"CLAUDE.md and rules provide always-on or conditionally-loaded context that shapes behavior; skills provide on-demand workflows invoked explicitly; sessions provide persistence and parallel exploration across time",
"CLAUDE.md is for project settings, rules are for file-specific settings, skills are for automated tasks, and sessions are for saving conversation history",
"All four features are different ways to provide instructions to Claude, and choosing between them is primarily a matter of personal preference",
"CLAUDE.md is the primary mechanism and the others are optional extensions that few teams actually need in practice"
],
correctOption: 0,
explanation: "This integration question tests understanding of the full configuration ecosystem. CLAUDE.md provides always-loaded universal context. Path-specific rules provide conditionally-loaded context based on file patterns. Skills provide on-demand task-specific workflows invoked via slash commands. Sessions provide persistence (resume), parallel exploration (fork), and context management (compact). Each feature addresses a different need, and they compose together. Option B oversimplifies each feature's role. Option C incorrectly suggests they are interchangeable. Option D dismisses critical features that are central to team workflows.",
source: "Lessons 1-8"
},
{
question: "Your organization is setting up Claude Code for a 50-person engineering team. They need universal coding standards, language-specific conventions for TypeScript and Python, a team-wide /deploy command, personal developer preferences, and CI integration. Design the configuration architecture.",
options: [
"Project CLAUDE.md for universal standards; .claude/rules/ files with glob patterns for language-specific conventions; .claude/commands/deploy.md for the team command; ~/.claude/CLAUDE.md for personal preferences; CLAUDE.md CI context for pipeline integration",
"A single comprehensive CLAUDE.md containing all standards, conventions, commands, and CI context in one version-controlled file",
"Multiple CLAUDE.md files in each language directory, with the deploy command documented as a CLAUDE.md section, and personal preferences in .env files",
"A custom MCP server that dynamically loads the appropriate configuration based on which files Claude is editing"
],
correctOption: 0,
explanation: "This integration question tests the ability to compose all configuration mechanisms for a real team scenario. Project CLAUDE.md handles universal standards (shared, always loaded). Path-specific .claude/rules/ handles language conventions (loaded only when editing matching files, reducing token usage). .claude/commands/ handles team commands (version-controlled, available to all). ~/.claude/CLAUDE.md handles personal preferences (not shared, per-developer). CLAUDE.md also provides CI context automatically. Option B creates a massive, hard-to-maintain single file. Option C misuses CLAUDE.md for commands and .env for preferences. Option D is over-engineered for what the built-in features handle natively.",
source: "Lessons 1-6"
},
{
question: "Your GitHub Actions workflow runs Claude Code to generate test suggestions for each PR. The workflow posts suggestions as PR comments. After several weeks, developers complain that Claude keeps suggesting tests for scenarios that your test suite already covers thoroughly. What should you change in the workflow?",
options: [
"Provide existing test files in the Claude Code context so it can see what scenarios are already covered and avoid duplicating them",
"Add a post-processing step that compares Claude's suggestions against existing test names and filters out duplicates",
"Switch to a more capable model that can infer existing test coverage from the source code alone",
"Limit Claude's test generation to only new files that have no existing test files alongside them"
],
correctOption: 0,
explanation: "Task 3.6: Providing existing test files in context is the recommended approach for avoiding duplicate test suggestions. When Claude can see what the test suite already covers, it focuses on gaps rather than repeating existing scenarios. This is more reliable than post-processing (Option B), which requires brittle name matching. Option C misidentifies the problem as model capability; even the most capable model cannot know what tests exist without seeing them. Option D is too restrictive, missing legitimate test gaps in files that already have some tests but not comprehensive coverage.",
source: "Lesson 6: Claude Code in CI/CD Pipelines"
},
{
question: "Your multi-pass review system processes a 25-file PR. The per-file passes complete successfully, finding 12 local issues. The cross-file integration pass then contradicts two of those findings, stating that what appeared to be bugs in isolation are actually correct behavior when considering the data flow between files. How should the system handle these contradictions?",
options: [
"Trust the cross-file pass for findings about inter-file behavior, because it has the broader context needed to evaluate how files interact",
"Trust the per-file passes because they analyzed each file more deeply and the cross-file pass may have attention dilution issues",
"Flag both the original findings and the contradictions for human review, since automated systems cannot reliably resolve conflicting analysis",
"Re-run the per-file passes with the cross-file context included to get a unified assessment"
],
correctOption: 0,
explanation: "Task 4.6: The multi-pass architecture assigns different responsibilities to each pass. Per-file passes are authoritative for local issues (unused variables, null dereferences within a single function). Cross-file passes are authoritative for inter-file behavior (data flow, API contract compliance, pattern consistency across files). When the cross-file pass says a local 'bug' is actually correct cross-file behavior, it has the necessary context that the per-file pass lacked. Option B incorrectly prioritizes depth over relevant context. Option C is overly cautious for a well-designed system. Option D undermines the separation of concerns that makes multi-pass effective.",
source: "Lesson 7: Multi-Pass Review Architecture"
}
]} />
