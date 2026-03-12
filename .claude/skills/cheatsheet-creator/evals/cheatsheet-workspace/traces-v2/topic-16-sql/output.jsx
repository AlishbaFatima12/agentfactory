import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
  mid: "#5a3e2b",
  codeBg: "#2c1810",
  codeText: "#f0dcc8",
  tagBg: "#c0582a",
  tagText: "#fff",
  highlight: "#fff3e6",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      borderRadius: 6,
      padding: "8px 11px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 11,
      lineHeight: 1.5,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 6,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: color || palette.tagBg,
      color: palette.tagText,
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 4,
      marginBottom: 3,
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 6,
      marginBottom: 3,
      fontSize: 12.5,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>○</span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "4px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: palette.accent,
        fontWeight: 700,
        width: 150,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 10,
      padding: "14px 16px 14px 16px",
      gridColumn: span > 1 ? `span ${span}` : undefined,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 4,
        height: "100%",
        background: palette.accent,
        borderRadius: "10px 0 0 10px",
      }}
    />
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 26,
          height: 26,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 13,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 800,
          color: palette.dark,
          fontFamily: "'Georgia', serif",
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function SQLCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core SQL & Types", "Page 2: Advanced Patterns"];

  return (
    <div
      style={{
        background: palette.bg,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
          padding: "22px 28px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Georgia', serif",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: -0.5,
            color: "#fff",
          }}
        >
          PostgreSQL vs MySQL{" "}
          <span style={{ color: palette.accentLight }}>SQL Cheatsheet</span>
        </h1>
        <div
          style={{
            color: palette.codeText,
            fontSize: 12,
            marginTop: 6,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Syntax Differences · Data Types · Functions · Administration — 2026 Edition
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
          <Tag color="#3a6ea5">PostgreSQL</Tag>
          <Tag color="#2a7a7a">MySQL</Tag>
          <Tag color="#7a5a8a">Both</Tag>
          <Tag color="#a53a3a">Gotcha</Tag>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}>
          {pages.map((label, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                background: page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "7px 18px",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Page 1 */}
      {page === 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 1 — Quick Dialect Overview */}
          <SectionCard number="1" title="Quick Dialect Overview">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG 16+</Tag>
              <Tag color="#2a7a7a">MySQL 8+</Tag>
            </div>
            <Bullet><strong>PostgreSQL</strong> — stricter SQL standard compliance, rich type system, advanced indexing</Bullet>
            <Bullet><strong>MySQL</strong> — faster simple reads, wider hosting support, InnoDB default engine</Bullet>
            <Bullet><strong>Quoting</strong> — PG uses double-quotes for identifiers; MySQL uses backticks</Bullet>
            <Bullet><strong>Case sensitivity</strong> — PG identifiers fold to lowercase; MySQL depends on OS filesystem</Bullet>
            <Bullet><strong>Boolean</strong> — PG has native <code>BOOLEAN</code>; MySQL uses <code>TINYINT(1)</code></Bullet>
          </SectionCard>

          {/* Section 2 — String Data Types */}
          <SectionCard number="2" title="String Data Types">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <RefRow cmd="VARCHAR(n)" desc="Variable-length string (both)" />
            <RefRow cmd="TEXT" desc="Unlimited text — PG: no perf penalty; MySQL: stored off-row" />
            <RefRow cmd="CHAR(n)" desc="Fixed-length, space-padded (both)" />
            <RefRow cmd="BYTEA / BLOB" desc="PG: BYTEA; MySQL: BLOB / LONGBLOB" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><Tag color="#a53a3a">Gotcha</Tag> PG has no <code>TINYTEXT</code>, <code>MEDIUMTEXT</code>, <code>LONGTEXT</code> — just use <code>TEXT</code></Bullet>
            </div>
          </SectionCard>

          {/* Section 3 — Numeric Data Types */}
          <SectionCard number="3" title="Numeric Data Types">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <RefRow cmd="SMALLINT" desc="2 bytes, -32768 to 32767 (both)" />
            <RefRow cmd="INTEGER / INT" desc="4 bytes, ~2.1 billion range (both)" />
            <RefRow cmd="BIGINT" desc="8 bytes (both)" />
            <RefRow cmd="SERIAL" desc="PG auto-increment; MySQL uses AUTO_INCREMENT" />
            <RefRow cmd="NUMERIC(p,s)" desc="Exact decimal — PG: also DECIMAL; MySQL: DECIMAL(p,s)" />
            <RefRow cmd="REAL / FLOAT" desc="PG: REAL (4B), DOUBLE PRECISION (8B); MySQL: FLOAT / DOUBLE" />
          </SectionCard>

          {/* Section 4 — Date & Time Types */}
          <SectionCard number="4" title="Date & Time Types">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <RefRow cmd="DATE" desc="Calendar date, no time (both)" />
            <RefRow cmd="TIME" desc="Time of day (both)" />
            <RefRow cmd="TIMESTAMP" desc="PG: without TZ; MySQL: auto-converts to UTC" />
            <RefRow cmd="TIMESTAMPTZ" desc="PG only — timestamp with time zone (preferred)" />
            <RefRow cmd="DATETIME" desc="MySQL only — no TZ conversion, 8 bytes" />
            <RefRow cmd="INTERVAL" desc="PG only — duration arithmetic; MySQL has no equivalent type" />
          </SectionCard>

          {/* Section 5 — JSON & Array Types */}
          <SectionCard number="5" title="JSON & Array Types">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <Bullet><strong>PG JSON</strong> — <code>JSON</code> (text storage) and <code>JSONB</code> (binary, indexable, preferred)</Bullet>
            <Bullet><strong>MySQL JSON</strong> — single <code>JSON</code> type, binary storage, supports indexing via generated columns</Bullet>
            <Bullet><strong>PG Arrays</strong> — native <code>INTEGER[]</code>, <code>TEXT[]</code>; MySQL has no array type</Bullet>
            <Bullet><strong>PG JSONB operators</strong> — <code>@&gt;</code>, <code>?</code>, <code>?|</code>, <code>?&amp;</code>, <code>#&gt;</code> for containment and path queries</Bullet>
            <Code>{`-- PG: JSONB access
SELECT data->>'name' FROM t;
SELECT data @> '{"active":true}' FROM t;

-- MySQL: JSON access
SELECT JSON_EXTRACT(data, '$.name') FROM t;
SELECT data->'$.name' FROM t;`}</Code>
          </SectionCard>

          {/* Section 6 — CREATE TABLE */}
          <SectionCard number="6" title="CREATE TABLE Syntax">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <Code>{`-- PostgreSQL
CREATE TABLE users (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- MySQL
CREATE TABLE users (
  id   INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  created_at DATETIME DEFAULT NOW()
) ENGINE=InnoDB;`}</Code>
            <Bullet><Tag color="#a53a3a">Gotcha</Tag> MySQL needs <code>ENGINE=InnoDB</code> for transactions; PG always supports them</Bullet>
            <Bullet>PG prefers <code>GENERATED ALWAYS AS IDENTITY</code> over <code>SERIAL</code> in modern usage</Bullet>
          </SectionCard>

          {/* Section 7 — ALTER TABLE */}
          <SectionCard number="7" title="ALTER TABLE">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <Code>{`-- Add column (both similar)
ALTER TABLE t ADD COLUMN age INT;

-- Rename column
ALTER TABLE t RENAME COLUMN old TO new; -- PG
ALTER TABLE t CHANGE old new INT;       -- MySQL

-- Change type
ALTER TABLE t ALTER COLUMN c TYPE TEXT;          -- PG
ALTER TABLE t MODIFY COLUMN c TEXT;              -- MySQL

-- Drop column (both)
ALTER TABLE t DROP COLUMN c;`}</Code>
            <Bullet><Tag color="#a53a3a">Gotcha</Tag> MySQL <code>CHANGE</code> requires re-specifying the full column type</Bullet>
            <Bullet>PG <code>ALTER TYPE</code> may need <code>USING</code> clause for type cast: <code>ALTER COLUMN c TYPE INT USING c::INT</code></Bullet>
          </SectionCard>

          {/* Section 8 — INSERT Syntax */}
          <SectionCard number="8" title="INSERT Syntax">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Both</Tag>
            </div>
            <Code>{`-- Standard INSERT (both)
INSERT INTO users (name, email)
VALUES ('Alice', 'a@b.com');

-- Multi-row INSERT (both)
INSERT INTO users (name, email) VALUES
  ('Bob', 'b@b.com'),
  ('Carol', 'c@b.com');

-- INSERT ... RETURNING (PG only)
INSERT INTO users (name) VALUES ('Dave')
RETURNING id, name;

-- MySQL: use LAST_INSERT_ID() instead
INSERT INTO users (name) VALUES ('Dave');
SELECT LAST_INSERT_ID();`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> <code>RETURNING</code> clause returns inserted rows — extremely useful</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Use <code>LAST_INSERT_ID()</code> as a separate query</Bullet>
          </SectionCard>

          {/* Section 9 — UPDATE & DELETE */}
          <SectionCard number="9" title="UPDATE & DELETE">
            <Code>{`-- Standard UPDATE (both)
UPDATE users SET name = 'Alice B'
WHERE id = 1;

-- UPDATE with JOIN
-- PG
UPDATE orders SET status = 'shipped'
FROM customers
WHERE orders.cust_id = customers.id
  AND customers.tier = 'premium';

-- MySQL
UPDATE orders
JOIN customers ON orders.cust_id = customers.id
SET orders.status = 'shipped'
WHERE customers.tier = 'premium';`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Uses <code>FROM</code> clause for join-based updates</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Uses <code>JOIN ... SET</code> syntax for join-based updates</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> <code>DELETE ... RETURNING *</code> is supported; MySQL has no equivalent</Bullet>
            <Bullet>Both support <code>DELETE FROM t WHERE ...</code> and <code>TRUNCATE TABLE t</code></Bullet>
          </SectionCard>

          {/* Section 10 — SELECT Essentials */}
          <SectionCard number="10" title="SELECT Essentials">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Both</Tag>
              <Tag color="#a53a3a">Gotcha</Tag>
            </div>
            <Code>{`-- Pagination
SELECT * FROM t LIMIT 10 OFFSET 20; -- Both

-- PG also supports:
SELECT * FROM t FETCH FIRST 10 ROWS ONLY;

-- Aliasing (both)
SELECT name AS user_name FROM t;

-- DISTINCT ON (PG only)
SELECT DISTINCT ON (dept) * FROM emp
ORDER BY dept, salary DESC;`}</Code>
            <Bullet><code>LIMIT / OFFSET</code> syntax is identical in both dialects</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> <code>DISTINCT ON</code> picks first row per group — MySQL has no equivalent</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Non-deterministic <code>GROUP BY</code> allowed with <code>ONLY_FULL_GROUP_BY</code> disabled</Bullet>
            <Bullet><Tag color="#a53a3a">Gotcha</Tag> PG requires <code>ORDER BY</code> columns to match <code>DISTINCT ON</code> leading columns</Bullet>
          </SectionCard>

          {/* Section 11 — String Functions */}
          <SectionCard number="11" title="String Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <RefRow cmd="||  /  CONCAT()" desc="PG: || operator; MySQL: CONCAT() function (|| is OR)" />
            <RefRow cmd="LENGTH()" desc="Both — PG: char count; MySQL: byte count (use CHAR_LENGTH)" />
            <RefRow cmd="SUBSTRING()" desc="Both support SUBSTRING(s FROM n FOR len)" />
            <RefRow cmd="ILIKE / LOWER()" desc="PG: ILIKE for case-insensitive; MySQL: default CI collation" />
            <RefRow cmd="REGEXP" desc="PG: ~ operator or REGEXP_MATCHES; MySQL: REGEXP" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><Tag color="#a53a3a">Gotcha</Tag> <code>||</code> in MySQL is logical OR by default, not concatenation</Bullet>
            </div>
          </SectionCard>

          {/* Section 12 — Date/Time Functions */}
          <SectionCard number="12" title="Date & Time Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <RefRow cmd="NOW()" desc="Both — current timestamp" />
            <RefRow cmd="CURRENT_DATE" desc="Both — today's date" />
            <RefRow cmd="EXTRACT()" desc="PG: EXTRACT(EPOCH FROM ts); MySQL: EXTRACT(YEAR FROM ts)" />
            <RefRow cmd="DATE_TRUNC()" desc="PG only — truncate to precision; MySQL: use DATE_FORMAT()" />
            <RefRow cmd="+ INTERVAL" desc="PG: ts + INTERVAL '1 day'; MySQL: ts + INTERVAL 1 DAY" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><Tag color="#a53a3a">Gotcha</Tag> PG intervals are quoted strings: <code>{"'1 day'"}</code>; MySQL intervals are unquoted: <code>1 DAY</code></Bullet>
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2 */}
      {page === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 13 — Aggregates & GROUP BY */}
          <SectionCard number="13" title="Aggregates & GROUP BY">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Both</Tag>
            </div>
            <RefRow cmd="COUNT(*)" desc="Count all rows (both)" />
            <RefRow cmd="SUM() / AVG()" desc="Numeric aggregation (both)" />
            <RefRow cmd="ARRAY_AGG()" desc="PG: collect into array; MySQL: GROUP_CONCAT()" />
            <RefRow cmd="STRING_AGG()" desc="PG: join strings with separator; MySQL: GROUP_CONCAT()" />
            <Code>{`-- PG: STRING_AGG
SELECT dept, STRING_AGG(name, ', ')
FROM emp GROUP BY dept;

-- MySQL: GROUP_CONCAT
SELECT dept, GROUP_CONCAT(name SEPARATOR ', ')
FROM emp GROUP BY dept;`}</Code>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> <code>GROUP_CONCAT</code> has a default max of 1024 bytes — increase with <code>group_concat_max_len</code></Bullet>
          </SectionCard>

          {/* Section 14 — Window Functions */}
          <SectionCard number="14" title="Window Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Both</Tag>
              <Tag color="#5a8a3c">SQL Standard</Tag>
            </div>
            <Code>{`-- Both support the same window syntax
SELECT name, dept, salary,
  ROW_NUMBER() OVER (
    PARTITION BY dept ORDER BY salary DESC
  ) AS rank
FROM employees;`}</Code>
            <RefRow cmd="ROW_NUMBER()" desc="Sequential integer per partition (both)" />
            <RefRow cmd="RANK()" desc="Rank with gaps on ties (both)" />
            <RefRow cmd="DENSE_RANK()" desc="Rank without gaps on ties (both)" />
            <RefRow cmd="LAG() / LEAD()" desc="Access previous/next row value (both)" />
            <RefRow cmd="NTILE(n)" desc="Divide rows into n buckets (both)" />
          </SectionCard>

          {/* Section 15 — CTEs & Recursive Queries */}
          <SectionCard number="15" title="CTEs & Recursive Queries">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Both</Tag>
              <Tag color="#5a8a3c">SQL Standard</Tag>
            </div>
            <Code>{`-- Standard CTE (both)
WITH active AS (
  SELECT * FROM users
  WHERE active = true
)
SELECT * FROM active;

-- Recursive CTE (both)
WITH RECURSIVE tree AS (
  SELECT id, name, parent_id, 1 AS depth
  FROM categories WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id, t.depth+1
  FROM categories c JOIN tree t ON c.parent_id = t.id
)
SELECT * FROM tree;`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Supports <code>MATERIALIZED</code> / <code>NOT MATERIALIZED</code> CTE hints</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Recursive CTEs available since MySQL 8.0 only</Bullet>
            <Bullet><Tag color="#a53a3a">Gotcha</Tag> PG defaults CTEs as optimization fences (pre-v12); use <code>NOT MATERIALIZED</code> if needed</Bullet>
            <Bullet>Both require <code>UNION ALL</code> in the recursive term — <code>UNION</code> also works but is slower</Bullet>
          </SectionCard>

          {/* Section 16 — Subqueries & LATERAL */}
          <SectionCard number="16" title="Subqueries & LATERAL">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <Code>{`-- Correlated subquery (both)
SELECT * FROM orders o
WHERE total > (
  SELECT AVG(total) FROM orders
  WHERE cust_id = o.cust_id
);

-- LATERAL join (PG; MySQL 8.0.14+)
SELECT d.name, top3.*
FROM departments d,
LATERAL (
  SELECT * FROM employees e
  WHERE e.dept_id = d.id
  ORDER BY salary DESC LIMIT 3
) top3;`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Full <code>LATERAL</code> support since PG 9.3</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> <code>LATERAL</code> derived tables since MySQL 8.0.14</Bullet>
            <Bullet>Both support <code>EXISTS</code>, <code>IN</code>, <code>ANY</code>, <code>ALL</code> subquery operators</Bullet>
            <Bullet><Tag color="#a53a3a">Gotcha</Tag> MySQL historically had poor subquery optimization — 8.0+ greatly improved this</Bullet>
          </SectionCard>

          {/* Section 17 — UPSERT */}
          <SectionCard number="17" title="UPSERT / Merge">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Major Difference</Tag>
            </div>
            <Code>{`-- PostgreSQL: ON CONFLICT
INSERT INTO users (email, name)
VALUES ('a@b.com', 'Alice')
ON CONFLICT (email) DO UPDATE
SET name = EXCLUDED.name;

-- ON CONFLICT DO NOTHING
INSERT INTO users (email, name)
VALUES ('a@b.com', 'Alice')
ON CONFLICT DO NOTHING;

-- MySQL: ON DUPLICATE KEY
INSERT INTO users (email, name)
VALUES ('a@b.com', 'Alice')
ON DUPLICATE KEY UPDATE
name = VALUES(name);`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Uses <code>EXCLUDED</code> pseudo-table for new values</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Uses <code>VALUES(col)</code> for new values (deprecated in 8.0.20+; use alias)</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL 8.0.19+</Tag> Also supports <code>AS new_row</code> alias syntax</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Supports <code>RETURNING</code> with upsert for the final row state</Bullet>
          </SectionCard>

          {/* Section 18 — Indexing */}
          <SectionCard number="18" title="Indexing">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <Code>{`-- B-tree index (both)
CREATE INDEX idx_name ON users (name);

-- Unique index (both)
CREATE UNIQUE INDEX idx_email ON users (email);

-- PG: partial index
CREATE INDEX idx_active ON users (email)
WHERE active = true;

-- PG: GIN index (for JSONB, arrays, full-text)
CREATE INDEX idx_data ON t USING GIN (data);

-- PG: expression index
CREATE INDEX idx_lower ON users (LOWER(email));

-- MySQL: prefix index
CREATE INDEX idx_name ON users (name(10));`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Supports B-tree, Hash, GIN, GiST, BRIN, SP-GiST index types</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> B-tree and Hash (for MEMORY engine); InnoDB is always B-tree</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> <code>CONCURRENTLY</code> flag builds indexes without locking writes</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> InnoDB supports online DDL — most index adds are non-blocking</Bullet>
          </SectionCard>

          {/* Section 19 — Constraints & Keys */}
          <SectionCard number="19" title="Constraints & Keys">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Both</Tag>
            </div>
            <Code>{`-- Primary key (both)
CREATE TABLE t (
  id INT PRIMARY KEY
);

-- Foreign key (both)
ALTER TABLE orders ADD CONSTRAINT fk_cust
FOREIGN KEY (cust_id) REFERENCES customers(id)
ON DELETE CASCADE;

-- CHECK constraint
ALTER TABLE t ADD CONSTRAINT chk_age
CHECK (age >= 0 AND age <= 150);`}</Code>
            <Bullet><Tag color="#a53a3a">Gotcha</Tag> MySQL ignored <code>CHECK</code> constraints before 8.0.16 — they parsed but did nothing</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Supports <code>EXCLUDE</code> constraints using GiST for range overlaps</Bullet>
            <Bullet><code>NOT NULL</code>, <code>UNIQUE</code>, <code>DEFAULT</code> work identically in both</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Foreign keys require InnoDB engine — MyISAM silently ignores them</Bullet>
          </SectionCard>

          {/* Section 20 — Views & Materialized Views */}
          <SectionCard number="20" title="Views & Materialized Views">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <Code>{`-- Standard view (both)
CREATE OR REPLACE VIEW active_users AS
SELECT * FROM users WHERE active = true;

-- Materialized view (PG only)
CREATE MATERIALIZED VIEW mv_stats AS
SELECT dept, COUNT(*), AVG(salary)
FROM employees GROUP BY dept;

-- Refresh materialized view (PG only)
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_stats;`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Materialized views cache query results on disk — must be refreshed manually</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Has no materialized views — simulate with tables + triggers or scheduled events</Bullet>
            <Bullet>Both support <code>CREATE OR REPLACE VIEW</code> for updating view definitions</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> <code>CONCURRENTLY</code> refreshes without locking reads — requires a unique index</Bullet>
          </SectionCard>

          {/* Section 21 — Stored Procedures & Functions */}
          <SectionCard number="21" title="Procedures & Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Major Difference</Tag>
            </div>
            <Code>{`-- PostgreSQL function
CREATE OR REPLACE FUNCTION greet(nm TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN 'Hello, ' || nm;
END;
$$ LANGUAGE plpgsql;

-- MySQL function
DELIMITER //
CREATE FUNCTION greet(nm VARCHAR(100))
RETURNS VARCHAR(200) DETERMINISTIC
BEGIN
  RETURN CONCAT('Hello, ', nm);
END //
DELIMITER ;`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Uses dollar-quoting <code>$$</code> — no delimiter changes needed</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Requires <code>DELIMITER</code> change in CLI client to use <code>;</code> inside body</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Supports PL/pgSQL, PL/Python, PL/Perl, PL/v8 (JavaScript)</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Only supports SQL and a limited procedural language</Bullet>
          </SectionCard>

          {/* Section 22 — User & Permissions */}
          <SectionCard number="22" title="User & Permission Management">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PG</Tag>
              <Tag color="#2a7a7a">MySQL</Tag>
            </div>
            <Code>{`-- PG: create user/role
CREATE ROLE app_user LOGIN PASSWORD 'secret';
GRANT SELECT, INSERT ON users TO app_user;
GRANT USAGE ON SCHEMA public TO app_user;

-- MySQL: create user
CREATE USER 'app_user'@'%' IDENTIFIED BY 'secret';
GRANT SELECT, INSERT ON mydb.users TO 'app_user'@'%';
FLUSH PRIVILEGES;`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Roles unify users and groups; <code>LOGIN</code> attribute enables connection</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Users are <code>{'user@host'}</code> pairs — <code>{'%'}</code> means any host</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> Schema-level <code>GRANT USAGE</code> required before table grants take effect</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> <code>FLUSH PRIVILEGES</code> needed after direct grant table edits (not after <code>GRANT</code>)</Bullet>
          </SectionCard>

          {/* Section 23 — Backup & Restore CLI */}
          <SectionCard number="23" title="Backup & Restore CLI">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">CLI</Tag>
            </div>
            <Code>{`# PostgreSQL
pg_dump mydb > backup.sql
pg_dump -Fc mydb > backup.dump   # custom format
pg_restore -d mydb backup.dump
psql mydb < backup.sql

# MySQL
mysqldump mydb > backup.sql
mysqldump --single-transaction mydb > backup.sql
mysql mydb < backup.sql`}</Code>
            <Bullet><Tag color="#3a6ea5">PG</Tag> <code>pg_dump -Fc</code> creates compressed custom format — supports parallel restore</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> Always use <code>--single-transaction</code> for InnoDB hot backups</Bullet>
            <Bullet><Tag color="#3a6ea5">PG</Tag> <code>pg_dumpall</code> backs up all databases including roles and tablespaces</Bullet>
            <Bullet><Tag color="#2a7a7a">MySQL</Tag> <code>mysqldump --all-databases</code> for full instance backup</Bullet>
          </SectionCard>

          {/* Section 24 — Quick Decision Matrix */}
          <SectionCard number="24" title="When Syntax Differs: Quick Lookup" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Auto-Increment", pg: "SERIAL / GENERATED ALWAYS AS IDENTITY", my: "INT AUTO_INCREMENT", tip: "PG prefers IDENTITY in modern code" },
                { title: "Upsert", pg: "ON CONFLICT ... DO UPDATE SET x = EXCLUDED.x", my: "ON DUPLICATE KEY UPDATE x = VALUES(x)", tip: "Completely different syntax" },
                { title: "String Concat", pg: "|| operator", my: "CONCAT() function", tip: "|| is logical OR in MySQL!" },
                { title: "Case-Insensitive", pg: "ILIKE operator", my: "Default — collation is CI", tip: "MySQL CI by default" },
                { title: "Returning Rows", pg: "INSERT ... RETURNING *", my: "LAST_INSERT_ID()", tip: "PG can return full rows" },
                { title: "LIMIT Offset", pg: "LIMIT n OFFSET m", my: "LIMIT n OFFSET m", tip: "Same syntax — rare agreement" },
                { title: "Bool Type", pg: "BOOLEAN (true/false)", my: "TINYINT(1) (0/1)", tip: "PG has real booleans" },
                { title: "Schema vs DB", pg: "Schemas within database", my: "DATABASE = SCHEMA (synonyms)", tip: "Fundamentally different model" },
              ].map(({ title, pg, my, tip }, i) => (
                <div
                  key={title}
                  style={{
                    background: i % 2 === 0 ? palette.highlight : palette.accentPale,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: "#3a6ea5", fontWeight: 600 }}>PG: {pg}</div>
                  <div style={{ fontSize: 10.5, color: "#2a7a7a", fontWeight: 600, marginTop: 2 }}>MY: {my}</div>
                  <div style={{ fontSize: 10, color: palette.mid, marginTop: 3, fontStyle: "italic" }}>{tip}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 0 18px",
          fontSize: 12,
          color: palette.mid,
          fontFamily: "'Georgia', serif",
        }}
      >
        PostgreSQL vs MySQL SQL Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Covers PostgreSQL 16+ and MySQL 8.0+ syntax differences
        </span>
      </div>
    </div>
  );
}
