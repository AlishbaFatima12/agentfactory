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
        width: 160,
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
  const pages = ["Page 1: Core Syntax", "Page 2: Advanced Features"];

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
          PostgreSQL {"<>"} MySQL{" "}
          <span style={{ color: palette.accentLight }}>Cheatsheet</span>
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
          Side-by-Side Syntax · DDL · DML · Functions · Administration
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
          {/* Section 1: Database & Schema Navigation */}
          <SectionCard number="1" title="Database & Schema Navigation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              How each engine switches context and organizes objects.
            </div>
            <div style={{ marginBottom: 6 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`USE my_database;
SHOW DATABASES;
SHOW TABLES;`}</Code>
            <div style={{ marginTop: 8, marginBottom: 6 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`\\c my_database
SET search_path TO my_schema;
\\dt`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>MySQL</strong> — database and schema are synonymous</Bullet>
              <Bullet><strong>PostgreSQL</strong> — databases contain schemas; default schema is <code>public</code></Bullet>
              <Bullet>PG <code>search_path</code> controls unqualified name resolution order</Bullet>
              <Bullet>MySQL <code>USE</code> has no PG SQL equivalent; use <code>\c</code> in psql or reconnect</Bullet>
            </div>
          </SectionCard>

          {/* Section 2: CREATE TABLE & Auto-Increment */}
          <SectionCard number="2" title={"CREATE TABLE & Auto-Increment"}>
            <div style={{ marginBottom: 6 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  active TINYINT(1) DEFAULT 1
);`}</Code>
            <div style={{ marginTop: 8, marginBottom: 6 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`CREATE TABLE users (
  id INT GENERATED ALWAYS AS IDENTITY
    PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  active BOOLEAN DEFAULT TRUE
);`}</Code>
            <Bullet>PG also supports older <code>SERIAL</code> pseudo-type (creates implicit sequence)</Bullet>
            <Bullet><code>GENERATED ALWAYS AS IDENTITY</code> is SQL-standard (PG 10+)</Bullet>
            <Bullet>MySQL <code>BOOLEAN</code> is alias for <code>TINYINT(1)</code>; PG has native <code>BOOLEAN</code></Bullet>
            <Bullet>PG accepts <code>TRUE</code>/<code>FALSE</code>; MySQL stores as 1/0</Bullet>
          </SectionCard>

          {/* Section 3: Data Types That Differ */}
          <SectionCard number="3" title="Data Types That Differ">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Types where the syntax or behavior diverges between engines.
            </div>
            {[
              { type: "Auto-increment", pg: "GENERATED AS IDENTITY / SERIAL", my: "AUTO_INCREMENT" },
              { type: "Boolean", pg: "BOOLEAN (native)", my: "TINYINT(1)" },
              { type: "Text (unlimited)", pg: "TEXT", my: "TEXT / LONGTEXT" },
              { type: "Binary JSON", pg: "JSONB", my: "JSON (binary internally)" },
              { type: "Arrays", pg: "INT[], TEXT[] (native)", my: "No native array type" },
              { type: "UUID", pg: "UUID (native type)", my: "CHAR(36) or BINARY(16)" },
              { type: "Enum", pg: "CREATE TYPE ... AS ENUM", my: "ENUM('a','b') inline" },
            ].map(({ type, pg, my }, i) => (
              <div
                key={type}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  fontSize: 11,
                }}
              >
                <span style={{ fontWeight: 800, color: palette.dark, width: 90, flexShrink: 0 }}>{type}</span>
                <span style={{ color: "#5a8a3c", flex: 1 }}>{pg}</span>
                <span style={{ color: "#3a6ea5", flex: 1 }}>{my}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 4: INSERT & UPSERT */}
          <SectionCard number="4" title={"INSERT & UPSERT"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Standard INSERT is identical. UPSERT syntax differs significantly.
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag> <Tag color="#7a5a8a">PG 9.5+</Tag>
            </div>
            <Code>{`INSERT INTO users (id, name, email)
VALUES (1, 'Ada', 'ada@ex.com')
ON CONFLICT (id) DO UPDATE
  SET name = EXCLUDED.name,
      email = EXCLUDED.email;`}</Code>
            <div style={{ marginTop: 8, marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag> <Tag color="#7a5a8a">8.0.19+ alias syntax</Tag>
            </div>
            <Code>{`INSERT INTO users (id, name, email)
VALUES (1, 'Ada', 'ada@ex.com')
  AS new_row
ON DUPLICATE KEY UPDATE
  name = new_row.name,
  email = new_row.email;`}</Code>
            <Bullet>PG <code>EXCLUDED</code> references the proposed row; MySQL uses row alias (8.0.19+)</Bullet>
            <Bullet>Older MySQL <code>VALUES(col)</code> syntax is deprecated since 8.0.20</Bullet>
            <Bullet>PG lets you target a specific constraint: <code>ON CONFLICT ON CONSTRAINT pk_name</code></Bullet>
            <Bullet>MySQL fires on any unique key violation — less precise</Bullet>
          </SectionCard>

          {/* Section 5: UPDATE & DELETE Joins */}
          <SectionCard number="5" title={"UPDATE & DELETE with Joins"}>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`UPDATE orders o
  JOIN customers c ON o.cust_id = c.id
SET o.status = 'vip'
WHERE c.tier = 'gold';

DELETE o FROM orders o
  JOIN customers c ON o.cust_id = c.id
WHERE c.active = 0;`}</Code>
            <div style={{ marginTop: 8, marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`UPDATE orders
SET status = 'vip'
FROM customers
WHERE orders.cust_id = customers.id
  AND customers.tier = 'gold';

DELETE FROM orders
USING customers
WHERE orders.cust_id = customers.id
  AND customers.active = FALSE;`}</Code>
            <Bullet>MySQL uses <code>JOIN</code> syntax directly in UPDATE/DELETE</Bullet>
            <Bullet>PG uses <code>FROM</code> (UPDATE) and <code>USING</code> (DELETE) clauses</Bullet>
            <Bullet>Both support subquery-based approaches as a portable alternative</Bullet>
            <Bullet>PG returns actual <code>BOOLEAN</code>; MySQL compares against 0/1</Bullet>
          </SectionCard>

          {/* Section 6: String Functions & Operators */}
          <SectionCard number="6" title={"String Functions & Operators"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Concatenation and case handling differ the most.
            </div>
            <RefRow cmd={"Concatenation"} desc={"PG: 'a' || 'b'  MySQL: CONCAT('a','b')"} />
            <RefRow cmd={"Concat w/ sep"} desc={"Both: CONCAT_WS(',', a, b)"} />
            <RefRow cmd={"Case search"} desc={"PG: ILIKE '%foo%'  MySQL: LIKE (ci by default)"} />
            <RefRow cmd={"Length"} desc={"PG: LENGTH() or CHAR_LENGTH()  MySQL: same"} />
            <RefRow cmd={"Substring"} desc={"Both: SUBSTRING(str, pos, len)"} />
            <RefRow cmd={"Replace"} desc={"Both: REPLACE(str, from, to)"} />
            <RefRow cmd={"Trim"} desc={"Both: TRIM(), LTRIM(), RTRIM()"} />
            <div style={{ marginTop: 6 }}>
              <Bullet>MySQL <code>LIKE</code> is case-insensitive with default <code>utf8mb4_0900_ai_ci</code> collation</Bullet>
              <Bullet>PG <code>LIKE</code> is always case-sensitive; use <code>ILIKE</code> for case-insensitive</Bullet>
              <Bullet>MySQL does not support the <code>||</code> operator for concatenation by default</Bullet>
              <Bullet>Both support <code>POSITION()</code>, <code>LEFT()</code>, <code>RIGHT()</code>, <code>UPPER()</code>, <code>LOWER()</code></Bullet>
            </div>
          </SectionCard>

          {/* Section 7: Date & Time Functions */}
          <SectionCard number="7" title={"Date & Time Functions"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 4 }}>
              Both support <code>NOW()</code> and <code>CURRENT_TIMESTAMP</code>, but interval syntax differs.
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL intervals</Tag>
            </div>
            <Code>{`SELECT NOW() + INTERVAL '7 days';
SELECT NOW() - INTERVAL '3 hours';
SELECT AGE(born_date);
SELECT EXTRACT(YEAR FROM created_at);
SELECT date_trunc('month', created_at);`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL intervals</Tag>
            </div>
            <Code>{`SELECT NOW() + INTERVAL 7 DAY;
SELECT NOW() - INTERVAL 3 HOUR;
SELECT TIMESTAMPDIFF(YEAR, born, NOW());
SELECT EXTRACT(YEAR FROM created_at);
SELECT DATE_FORMAT(created_at, '%Y-%m');`}</Code>
            <Bullet>PG interval uses quoted string: <code>{"INTERVAL '7 days'"}</code></Bullet>
            <Bullet>MySQL interval uses bare value + keyword: <code>INTERVAL 7 DAY</code></Bullet>
            <Bullet>PG has <code>AGE()</code> and <code>date_trunc()</code>; MySQL has <code>TIMESTAMPDIFF()</code> and <code>DATE_FORMAT()</code></Bullet>
          </SectionCard>

          {/* Section 8: ALTER TABLE */}
          <SectionCard number="8" title="ALTER TABLE Differences">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Column modification syntax is the biggest divergence.
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`ALTER TABLE users
  ALTER COLUMN name TYPE TEXT;
ALTER TABLE users
  ALTER COLUMN name SET NOT NULL;
ALTER TABLE users
  ADD COLUMN age INT;
ALTER TABLE users
  DROP COLUMN age;
ALTER TABLE users
  RENAME COLUMN name TO full_name;`}</Code>
            <div style={{ marginTop: 8, marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`ALTER TABLE users
  MODIFY COLUMN name TEXT NOT NULL;
ALTER TABLE users
  ADD COLUMN age INT;
ALTER TABLE users
  DROP COLUMN age;
ALTER TABLE users
  RENAME COLUMN name TO full_name;`}</Code>
            <Bullet>PG modifies attributes independently (<code>TYPE</code>, <code>SET NOT NULL</code>, <code>SET DEFAULT</code>)</Bullet>
            <Bullet>MySQL <code>MODIFY COLUMN</code> requires respecifying all column attributes at once</Bullet>
            <Bullet>PG uses double quotes for identifiers; MySQL uses backticks</Bullet>
            <Bullet>Both support <code>RENAME COLUMN</code> (MySQL 8.0+)</Bullet>
          </SectionCard>

          {/* Section 9: LIMIT, OFFSET & Pagination */}
          <SectionCard number="9" title={"LIMIT, OFFSET & Pagination"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Standard syntax is identical. MySQL has an alternate form.
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#2a7a7a">Both</Tag>
            </div>
            <Code>{`SELECT * FROM users
ORDER BY id
LIMIT 10 OFFSET 20;`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL only</Tag>
            </div>
            <Code>{`-- Alternate comma syntax (offset, count)
SELECT * FROM users
ORDER BY id
LIMIT 20, 10;`}</Code>
            <Bullet>Comma syntax is MySQL-only: <code>LIMIT offset, count</code> (note reversed order)</Bullet>
            <Bullet>Both support SQL-standard <code>FETCH FIRST n ROWS ONLY</code> (PG 8.4+, MySQL 8.0+)</Bullet>
            <Bullet>For large offsets, prefer keyset pagination: <code>WHERE id {'>'} last_seen_id</code></Bullet>
            <Bullet>Always use <code>ORDER BY</code> with pagination — results are otherwise non-deterministic</Bullet>
          </SectionCard>

          {/* Section 10: TRUNCATE & Data Cleanup */}
          <SectionCard number="10" title={"TRUNCATE & Data Cleanup"}>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`TRUNCATE TABLE users;
-- Resets AUTO_INCREMENT
-- Implicit commit (DDL operation)
-- No CASCADE option`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`TRUNCATE TABLE users
  RESTART IDENTITY CASCADE;
-- RESTART IDENTITY resets sequences
-- CASCADE truncates FK-dependent tables
-- Can truncate multiple tables at once`}</Code>
            <Bullet>PG <code>TRUNCATE</code> is transactional (can be rolled back)</Bullet>
            <Bullet>MySQL <code>TRUNCATE</code> is a DDL statement — commits immediately, cannot be rolled back</Bullet>
            <Bullet>PG supports <code>RESTART IDENTITY</code> / <code>CONTINUE IDENTITY</code></Bullet>
            <Bullet>MySQL always resets <code>AUTO_INCREMENT</code> on truncate — no option to preserve</Bullet>
          </SectionCard>

          {/* Section 11: Indexes */}
          <SectionCard number="11" title="Index Syntax">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Both support B-tree indexes. PG has more index types.
            </div>
            <Code>{`-- Both: standard index
CREATE INDEX idx_email ON users (email);

-- Both: unique index
CREATE UNIQUE INDEX idx_email
  ON users (email);`}</Code>
            <div style={{ marginTop: 6 }}>
              <RefRow cmd="PG: GIN index" desc="For JSONB, arrays, full-text search" />
              <RefRow cmd="PG: GiST index" desc="Geometric data, range types, full-text" />
              <RefRow cmd="PG: BRIN index" desc="Block range — huge tables with natural order" />
              <RefRow cmd="MySQL: FULLTEXT" desc="Full-text search on TEXT/VARCHAR columns" />
            </div>
            <Bullet>PG supports partial indexes: <code>{"CREATE INDEX ... WHERE active = TRUE"}</code></Bullet>
            <Bullet>PG supports expression indexes: <code>{"CREATE INDEX ... ON (LOWER(email))"}</code></Bullet>
            <Bullet>MySQL 8.0+ supports functional indexes (expression-based)</Bullet>
            <Bullet>PG <code>CREATE INDEX CONCURRENTLY</code> avoids locking the table</Bullet>
          </SectionCard>

          {/* Section 12: Quick Comparison Table */}
          <SectionCard number="12" title="Quick Syntax Lookup" span={2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
              {[
                { op: "Current time", pg: "NOW() / CURRENT_TIMESTAMP", my: "NOW() / CURRENT_TIMESTAMP" },
                { op: "If null", pg: "COALESCE(a, b)", my: "COALESCE(a, b) or IFNULL(a, b)" },
                { op: "Conditional", pg: "CASE WHEN ... END", my: "CASE WHEN ... END or IF(cond,t,f)" },
                { op: "Cast type", pg: "CAST(x AS INT) or x::INT", my: "CAST(x AS SIGNED)" },
                { op: "String concat", pg: "'a' || 'b'", my: "CONCAT('a', 'b')" },
                { op: "Regex match", pg: "col ~ '^pattern'", my: "col REGEXP '^pattern'" },
                { op: "Random row", pg: "ORDER BY RANDOM()", my: "ORDER BY RAND()" },
                { op: "Table exists?", pg: "\\dt or information_schema", my: "SHOW TABLES LIKE 'name'" },
                { op: "Show structure", pg: "\\d tablename", my: "DESCRIBE tablename" },
                { op: "Identifier quote", pg: 'Double quotes "col"', my: "Backticks `col`" },
              ].map(({ op, pg, my }, i) => (
                <div
                  key={op}
                  style={{
                    display: "contents",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: palette.dark,
                      fontSize: 11,
                      padding: "4px 6px",
                      background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                      borderRadius: i === 0 ? "5px 0 0 0" : undefined,
                    }}
                  >
                    {op}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: palette.mid,
                      padding: "4px 6px",
                      background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {pg}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: palette.mid,
                      padding: "4px 6px",
                      background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {my}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8, fontSize: 10, color: palette.mid }}>
              <span><strong>Columns:</strong> Operation | PostgreSQL | MySQL</span>
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
          {/* Section 13: JSON Operations */}
          <SectionCard number="13" title="JSON Operations">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">PG: JSONB</Tag>
              <Tag color="#3a6ea5">MySQL: JSON</Tag>
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`SELECT data->'user'->>'name'
FROM events;
-- -> returns JSON, ->> returns text
SELECT * FROM events
WHERE data @> '{"type":"click"}';
-- @> containment operator (JSONB only)
CREATE INDEX ON events
  USING GIN (data);`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`SELECT JSON_EXTRACT(data, '$.user.name')
FROM events;
-- Or shorthand: data->>'$.user.name'
SELECT * FROM events
WHERE JSON_CONTAINS(data,
  '{"type":"click"}');`}</Code>
            <Bullet>PG <code>JSONB</code> supports GIN indexes for fast containment queries</Bullet>
            <Bullet>MySQL cannot directly index JSON; use generated columns + functional indexes</Bullet>
            <Bullet>PG operators: <code>{'->'}</code>, <code>{'->>'}</code>, <code>{'@>'}</code>, <code>{'?'}</code>, <code>{'#>'}</code></Bullet>
            <Bullet>MySQL relies on functions: <code>JSON_EXTRACT</code>, <code>JSON_CONTAINS</code>, <code>JSON_SET</code></Bullet>
          </SectionCard>

          {/* Section 14: Window Functions */}
          <SectionCard number="14" title="Window Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">PG: all versions</Tag>
              <Tag color="#3a6ea5">MySQL: 8.0+ only</Tag>
            </div>
            <Code>{`-- Identical syntax in both engines:
SELECT name, dept,
  salary,
  ROW_NUMBER() OVER (
    PARTITION BY dept ORDER BY salary DESC
  ) AS rank_in_dept,
  SUM(salary) OVER (
    PARTITION BY dept
  ) AS dept_total,
  LAG(salary) OVER (
    ORDER BY hire_date
  ) AS prev_salary
FROM employees;`}</Code>
            <Bullet>PostgreSQL has had window functions since version 8.4 (2009)</Bullet>
            <Bullet>MySQL added window functions in 8.0 (2018) — not available in 5.7 or earlier</Bullet>
            <Bullet>Supported in both: <code>ROW_NUMBER</code>, <code>RANK</code>, <code>DENSE_RANK</code>, <code>NTILE</code>, <code>LAG</code>, <code>LEAD</code></Bullet>
            <Bullet>Both support <code>ROWS BETWEEN</code> and <code>RANGE BETWEEN</code> frame clauses</Bullet>
            <Bullet>Named windows also work in both: <code>WINDOW w AS (PARTITION BY dept)</code></Bullet>
          </SectionCard>

          {/* Section 15: CTEs (Common Table Expressions) */}
          <SectionCard number="15" title="CTEs (WITH Queries)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              CTE syntax is identical. Optimization behavior differs.
            </div>
            <Code>{`-- Same syntax in both:
WITH active_users AS (
  SELECT * FROM users
  WHERE active = TRUE
)
SELECT * FROM active_users
WHERE created_at > '2024-01-01';`}</Code>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: palette.dark, marginBottom: 4 }}>Optimization Differences</div>
              <Bullet><strong>PG 11 and earlier</strong> — CTEs are always materialized (optimization fence). Outer WHERE cannot be pushed into the CTE.</Bullet>
              <Bullet><strong>PG 12+</strong> — non-recursive, side-effect-free CTEs referenced once are inlined by the planner. Use <code>AS MATERIALIZED</code> to force old behavior.</Bullet>
              <Bullet><strong>MySQL 8.0+</strong> — the optimizer can merge CTEs or materialize them. Non-recursive CTEs can be merged into the outer query if treated like derived tables.</Bullet>
              <Bullet>Both support recursive CTEs with <code>WITH RECURSIVE</code></Bullet>
            </div>
          </SectionCard>

          {/* Section 16: User & Privilege Management */}
          <SectionCard number="16" title={"User & Privilege Management"}>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`CREATE USER 'app'@'%'
  IDENTIFIED BY 'secret';
GRANT SELECT, INSERT
  ON mydb.* TO 'app'@'%';
-- No FLUSH PRIVILEGES needed after
-- GRANT (auto-reloads since 5.7.2+)
REVOKE INSERT
  ON mydb.* FROM 'app'@'%';`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`CREATE USER app
  WITH PASSWORD 'secret';
GRANT SELECT, INSERT
  ON ALL TABLES IN SCHEMA public
  TO app;
REVOKE INSERT
  ON ALL TABLES IN SCHEMA public
  FROM app;`}</Code>
            <Bullet>MySQL users include host: <code>{"'user'@'host'"}</code>; PG users are host-independent</Bullet>
            <Bullet>PG access control is in <code>pg_hba.conf</code>, separate from <code>CREATE USER</code></Bullet>
            <Bullet><strong>MySQL:</strong> <code>FLUSH PRIVILEGES</code> is only needed after direct manipulation of grant tables (INSERT/UPDATE on mysql.user). GRANT/REVOKE auto-reload.</Bullet>
            <Bullet>PG <code>CREATE USER</code> is shorthand for <code>CREATE ROLE ... WITH LOGIN</code></Bullet>
          </SectionCard>

          {/* Section 17: EXPLAIN & Query Plans */}
          <SectionCard number="17" title={"EXPLAIN & Query Plans"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Both have EXPLAIN, but output format and detail differ.
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`EXPLAIN ANALYZE
SELECT * FROM users
WHERE email = 'a@b.com';
-- Runs the query, shows actual times
-- Options: BUFFERS, VERBOSE, FORMAT JSON`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`EXPLAIN
SELECT * FROM users
WHERE email = 'a@b.com';
-- Does NOT execute — estimates only
EXPLAIN ANALYZE  -- MySQL 8.0.18+
SELECT * FROM users
WHERE email = 'a@b.com';
-- Actually executes (like PG)`}</Code>
            <Bullet>PG <code>EXPLAIN ANALYZE</code> always executes the query and reports actual row counts and timing</Bullet>
            <Bullet>MySQL plain <code>EXPLAIN</code> only estimates; <code>EXPLAIN ANALYZE</code> added in 8.0.18</Bullet>
            <Bullet>PG supports <code>EXPLAIN (FORMAT JSON)</code> for machine-readable plans</Bullet>
            <Bullet>Use <code>EXPLAIN (ANALYZE, BUFFERS)</code> in PG to see I/O detail</Bullet>
          </SectionCard>

          {/* Section 18: Transactions & Isolation */}
          <SectionCard number="18" title={"Transactions & Isolation"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Transaction syntax is mostly identical. Defaults differ.
            </div>
            <Code>{`-- Both:
BEGIN;  -- or START TRANSACTION;
UPDATE accounts SET bal = bal - 100
  WHERE id = 1;
UPDATE accounts SET bal = bal + 100
  WHERE id = 2;
COMMIT;  -- or ROLLBACK;`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="PG default isolation" v="READ COMMITTED" />
              <KV k="MySQL default isolation" v="REPEATABLE READ" />
              <KV k="Set isolation" v="SET TRANSACTION ISOLATION LEVEL ..." />
              <KV k="PG savepoints" v="SAVEPOINT sp1; ROLLBACK TO sp1;" />
            </div>
            <Bullet>MySQL InnoDB uses MVCC with REPEATABLE READ and gap locking</Bullet>
            <Bullet>PG uses MVCC with READ COMMITTED; supports true SERIALIZABLE</Bullet>
            <Bullet>MySQL DDL statements cause implicit commits and cannot be rolled back</Bullet>
            <Bullet>PG DDL is transactional — <code>CREATE TABLE</code> inside a transaction can be rolled back</Bullet>
          </SectionCard>

          {/* Section 19: Arrays & Set-Returning (PG only) */}
          <SectionCard number="19" title={"Arrays (PG) & Workarounds (MySQL)"}>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL — native arrays</Tag>
            </div>
            <Code>{`CREATE TABLE posts (
  id INT PRIMARY KEY,
  tags TEXT[]
);
INSERT INTO posts VALUES
  (1, ARRAY['sql','pg']);
SELECT * FROM posts
  WHERE 'sql' = ANY(tags);
SELECT unnest(tags) FROM posts;`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL — JSON workaround</Tag>
            </div>
            <Code>{`CREATE TABLE posts (
  id INT PRIMARY KEY,
  tags JSON
);
INSERT INTO posts VALUES
  (1, '["sql","mysql"]');
SELECT * FROM posts
  WHERE JSON_CONTAINS(tags, '"sql"');`}</Code>
            <Bullet>PG array operators: <code>@{'>'}</code> (contains), <code>{'&&'}</code> (overlap), <code>ANY()</code>, <code>ALL()</code></Bullet>
            <Bullet>PG arrays support GIN indexing for fast lookups</Bullet>
            <Bullet>MySQL <code>JSON_TABLE()</code> (8.0+) converts JSON arrays to rows — similar to PG <code>unnest()</code></Bullet>
            <Bullet>For simple tag/list storage, PG arrays are more efficient and ergonomic</Bullet>
          </SectionCard>

          {/* Section 20: Materialized Views */}
          <SectionCard number="20" title="Materialized Views">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">PG: native support</Tag>
              <Tag color="#a53a3a">MySQL: not available</Tag>
            </div>
            <Code>{`-- PostgreSQL only:
CREATE MATERIALIZED VIEW monthly_stats AS
  SELECT date_trunc('month', created_at)
    AS month,
    COUNT(*) AS total
  FROM orders
  GROUP BY 1;

-- Refresh (full rebuild):
REFRESH MATERIALIZED VIEW monthly_stats;
-- Concurrent refresh (no read lock):
REFRESH MATERIALIZED VIEW CONCURRENTLY
  monthly_stats;`}</Code>
            <Bullet>MySQL has no native materialized views — use scheduled events + tables as workaround</Bullet>
            <Bullet><code>CONCURRENTLY</code> requires a unique index on the materialized view</Bullet>
            <Bullet>Materialized views cache expensive query results — great for dashboards and reporting</Bullet>
            <Bullet>Regular views (non-materialized) work identically in both engines</Bullet>
          </SectionCard>

          {/* Section 21: Full-Text Search */}
          <SectionCard number="21" title="Full-Text Search">
            <div style={{ marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`ALTER TABLE articles
  ADD FULLTEXT(title, body);
SELECT * FROM articles
WHERE MATCH(title, body)
  AGAINST('database' IN BOOLEAN MODE);`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`SELECT * FROM articles
WHERE to_tsvector('english', title
  || ' ' || body)
  @@ to_tsquery('english', 'database');
-- Index for performance:
CREATE INDEX ON articles USING GIN (
  to_tsvector('english', title || body)
);`}</Code>
            <Bullet>MySQL: simple <code>FULLTEXT</code> index + <code>MATCH ... AGAINST</code> syntax</Bullet>
            <Bullet>PG: more powerful with <code>tsvector</code>/<code>tsquery</code>, language-aware stemming, ranking</Bullet>
            <Bullet>PG supports <code>ts_rank()</code> and <code>ts_headline()</code> for relevance scoring and snippet highlighting</Bullet>
            <Bullet>Both support boolean operators. MySQL: <code>+word -excluded</code>. PG: <code>{'word & !excluded'}</code></Bullet>
          </SectionCard>

          {/* Section 22: Stored Procedures & Functions */}
          <SectionCard number="22" title="Stored Procedures & Functions">
            <div style={{ marginBottom: 4 }}>
              <Tag color="#3a6ea5">MySQL</Tag>
            </div>
            <Code>{`DELIMITER //
CREATE PROCEDURE get_user(IN uid INT)
BEGIN
  SELECT * FROM users WHERE id = uid;
END //
DELIMITER ;
CALL get_user(1);`}</Code>
            <div style={{ marginTop: 6, marginBottom: 4 }}>
              <Tag color="#5a8a3c">PostgreSQL</Tag>
            </div>
            <Code>{`CREATE FUNCTION get_user(uid INT)
RETURNS SETOF users AS $$
  SELECT * FROM users WHERE id = uid;
$$ LANGUAGE SQL;
SELECT * FROM get_user(1);`}</Code>
            <Bullet>MySQL requires <code>DELIMITER</code> change in CLI for procedures with semicolons</Bullet>
            <Bullet>PG uses dollar-quoting (<code>$$</code>) — no delimiter change needed</Bullet>
            <Bullet>PG supports multiple languages: SQL, PL/pgSQL, PL/Python, PL/Perl, PL/V8</Bullet>
            <Bullet>PG added <code>CREATE PROCEDURE</code> (with transactions) in PG 11. Before that, only functions.</Bullet>
          </SectionCard>

          {/* Section 23: Useful Admin Commands */}
          <SectionCard number="23" title="Admin Commands Side-by-Side">
            <RefRow cmd="Show version" desc={"PG: SELECT version();  MySQL: SELECT VERSION();"} />
            <RefRow cmd="List databases" desc={"PG: \\l  MySQL: SHOW DATABASES;"} />
            <RefRow cmd="List tables" desc={"PG: \\dt  MySQL: SHOW TABLES;"} />
            <RefRow cmd="Describe table" desc={"PG: \\d tablename  MySQL: DESCRIBE tablename;"} />
            <RefRow cmd="Show processes" desc={"PG: pg_stat_activity  MySQL: SHOW PROCESSLIST;"} />
            <RefRow cmd="Kill query" desc={"PG: pg_cancel_backend(pid)  MySQL: KILL id;"} />
            <RefRow cmd="Table size" desc={"PG: pg_total_relation_size()  MySQL: information_schema"} />
            <RefRow cmd="Config file" desc={"PG: postgresql.conf  MySQL: my.cnf / my.ini"} />
          </SectionCard>

          {/* Section 24: Migration Gotchas */}
          <SectionCard number="24" title="Migration Gotchas" span={2}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Common pitfalls when switching between the two engines.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { title: "Quoting Identifiers", desc: "PG uses double quotes for identifiers. MySQL uses backticks. Unquoted identifiers are lowercased in PG, preserved in MySQL." },
                { title: "Case Sensitivity", desc: "PG string comparisons are case-sensitive by default. MySQL depends on collation — usually case-insensitive (ci)." },
                { title: "Boolean Values", desc: "PG has native TRUE/FALSE. MySQL uses 1/0 (TINYINT). Watch for WHERE active = TRUE vs WHERE active = 1." },
                { title: "GROUP BY Strictness", desc: "PG requires all non-aggregated columns in GROUP BY. MySQL with ONLY_FULL_GROUP_BY disabled allows non-grouped columns (risky)." },
                { title: "DDL in Transactions", desc: "PG: DDL is transactional, can be rolled back. MySQL: DDL auto-commits, cannot be rolled back." },
                { title: "Empty String vs NULL", desc: "Both treat them differently (unlike Oracle). But MySQL's loose mode historically allowed '' in NOT NULL columns more freely." },
              ].map(({ title, desc }, i) => (
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
                  <div style={{ fontSize: 11, color: palette.mid, lineHeight: 1.5 }}>{desc}</div>
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
        PostgreSQL {"<>"} MySQL Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Verified against PostgreSQL 17 and MySQL 8.x/9.x documentation
        </span>
      </div>
    </div>
  );
}
