### Core Concept
CI/CD automates verification of all changes through a pipeline of formatting, linting, type checking, tests, and security audits. If the pipeline fails, the code doesn't ship — no exceptions.

### Key Mental Models
- **The Verification Pyramid**: Fast, cheap checks at the base (formatting 1s, linting 2s) catch common issues; slower, thorough checks at the top (integration tests 30-120s, security audits 5-15s) catch deeper problems. Each level gates the next — if formatting fails, no need to wait for tests.
- **Local CI mirrors remote CI**: `make ci` runs the same checks as GitHub Actions in seconds instead of minutes. Catch issues locally before pushing, so the remote pipeline becomes a safety net rather than a bottleneck.
- **The Shallow Pipeline trap**: A green badge that only checks formatting is false confidence. The pipeline must verify all layers — formatting, linting, types, tests, security — or passing means almost nothing.

### Key Facts
- Martin Fowler published "Continuous Integration" in 2000, describing daily integration verified by automated builds to prevent "integration hell" from multi-week merges
- CruiseControl (2001) was one of the first CI servers; Jenkins (2011) made it mainstream; GitHub Actions (2019) made it accessible to every project with a repository
- James's first push after adopting Axioms I-VIII failed on four checks he'd never run: formatter caught tabs-vs-spaces, linter found unused imports, type checker discovered Optional[float] vs float mismatch, pip-audit flagged a vulnerable dependency
- CI pipeline with caching cut James's verification from three minutes to forty-five seconds

### Critical Patterns
- AI generates faster than humans can review (500 lines in 30 seconds). The pipeline catches issues eyes miss: unused imports, type mismatches, vulnerable dependencies
- AI makes confident-looking mistakes with perfect docstrings and clean structure but wrong logic. The pipeline doesn't care how polished code looks — it checks whether it works
- Makefile provides single command (`make ci`) that mirrors CI pipeline. Individual targets (`make format`, `make lint`, `make typecheck`) for fast iteration
- Branch protection makes CI mandatory, not advisory. If CI fails, the merge button is disabled — infrastructure enforces what discipline alone cannot

### Common Mistakes
- **"Works on My Machine" trap**: Code passes locally because of specific Python version, OS, or packages from previous experiments. CI runs in standardized environment — local success means nothing without it
- **"I Already Tested It" illusion**: Running pytest and seeing green doesn't mean you ran formatter, linter, type checker, or security audit. Manual verification is inherently incomplete
- **Normalizing failures**: "That test is flaky, just re-run it" becomes "CI is red but not related to my change" becomes pipeline permanently red and ignored. Most dangerous anti-pattern — CI must always be green on main
- **The Shallow Pipeline**: CI that only checks formatting and linting (Levels 1-2) creates false confidence. Green badge means code is consistently formatted, not that it's correct, type-safe, or secure

### Connections
- **Builds on**: Axiom VII (Tests Are the Specification) gives you tests; Axiom IX runs them automatically. Axiom VIII (Version Control is Memory) gives you commits; Axiom IX verifies them before they reach main
- **Leads to**: Axiom X (Observability Extends Verification) monitors code AFTER it ships, catching failures under production load that tests never anticipated
- **Foundation for**: Complete verification chain from pre-deployment (tests define correctness, pipeline proves it) to post-deployment (observability confirms it in production)
