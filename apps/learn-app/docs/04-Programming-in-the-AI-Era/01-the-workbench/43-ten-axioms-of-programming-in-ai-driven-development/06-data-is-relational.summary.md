### Core Concept
Structured data follows relational patterns by nature — when entities have attributes and connections, you have relational data whether or not you store it relationally. SQL is the default for persistent structured data because it enforces relationships that formats like JSON cannot.

### Key Mental Models
- **Relational Structure**: Entities (tables) have attributes (typed columns) and relationships (foreign keys). James's JSON file contained relational data but couldn't enforce it — customer names duplicated across orders with no constraint preventing "Acme Corp" vs "Acme Corporation" inconsistency.
- **SQL as Declarative Language**: You say WHAT you want, not HOW to get it. The database optimizer chooses the execution strategy. Emma's 12-line SQL query replaced James's 40-line Python loop and ran in 3ms instead of 11 seconds.
- **SQLite vs PostgreSQL Decision Framework**: Single-writer/embedded = SQLite. Multi-user/networked = PostgreSQL. SQLite is not a toy — it's the most deployed database in the world (every smartphone, browser, OS).
- **ORM Serves You, Not Reverse**: Use ORM for CRUD operations and schema management. Use raw SQL when you need query plan control or when ORM syntax becomes more complex than the SQL itself. Test: Can you explain the SQL your ORM generates?

### Key Facts
- Edgar Codd's 1970 "A Relational Model of Data" separated logical structure from physical storage, enabling query optimization that James's manual loops could never match
- Larry Ellison read Codd's paper and founded Oracle in 1977 — the relational model won because systems that understand relationships outperform those that don't
- SQL has survived object databases (1990s), XML (2000s), NoSQL (2010s), and graph databases (2020s) for general-purpose structured data
- SQL's constrained vocabulary (~30 keywords) makes it more agent-native than Python (thousands of functions) — fewer hallucination opportunities

### Critical Patterns
- **Schema as Type Definition**: SQL constraints (NOT NULL, UNIQUE, CHECK, FOREIGN KEY) are data-level guardrails like Axiom V's type annotations — they make invalid states unrepresentable
- **One Fact, One Place**: Customer name stored once in customers table, referenced by customer_id everywhere else. Change the name once, every order reflects it automatically. Duplication creates inconsistency.
- **SQL for AI Agents**: Schemas give AI exact specification of what data exists, what types each column holds, how tables relate. Keep `schema.sql` in docs/ directory as "system prompt for your database."
- **Migrations as Version Control**: Every schema change versioned, reversible, reproducible, auditable. Alembic migration files live in git alongside code.

### Common Mistakes
- **The JSON Graveyard**: Projects accumulate JSON files (orders.json, customers.json) with no way to express relationships. Loading everything into memory, manual loops for queries, duplicated strings for relationships.
- **The String Concatenation Trap**: SQL injection via f-strings. `'; DROP TABLE orders; --` in a search box deletes the table. Always use parameterized queries (?placeholders). Non-negotiable safety requirement.
- **NoSQL as Default**: Fighting relational data with document model creates complexity that relational databases handle natively. Start relational; move to NoSQL only for genuinely non-relational data (logs, events).
- **No Migrations**: Manual schema changes, inconsistent environments, no rollback. Use Alembic or equivalent — schema evolution must be tracked like code.

### Connections
- **Builds on**: Axiom V (Types Are Guardrails) — SQL schemas are type definitions for data; Principle 5 (Persisting State in Files) — refined for structured data with relationships
- **Leads to**: Axiom VII (Tests Define Correctness) — types catch structural errors, SQL enforces relationships, but tests catch logical errors (wrong values with right types)
- **Foundation for**: Agent-native data access — SQL's declarative nature and constrained vocabulary make it superior to ad-hoc Python loops for AI-generated queries
