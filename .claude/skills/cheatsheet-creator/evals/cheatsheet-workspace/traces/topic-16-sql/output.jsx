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
  const pages = ["Page 1: Core SQL & DDL", "Page 2: Advanced & Admin"];

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
          Cross-Dialect Reference · Syntax Differences · Migration Guide — 2026 Edition
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
          {/* Section 1 — Data Types */}
          <SectionCard number="1" title="Data Types Comparison">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PostgreSQL</Tag>
              <Tag color="#5a8a3c">MySQL</Tag>
            </div>
            {[
              { pg: "SERIAL", my: "INT AUTO_INCREMENT", use: "Auto-increment integer" },
              { pg: "BIGSERIAL", my: "BIGINT AUTO_INCREMENT", use: "Auto-increment big int" },
              { pg: "BOOLEAN", my: "TINYINT(1) / BOOL", use: "True/false values" },
              { pg: "TEXT", my: "TEXT / LONGTEXT", use: "Variable-length strings" },
              { pg: "JSONB", my: "JSON", use: "JSON data (PG: binary, indexed)" },
              { pg: "UUID", my: "CHAR(36) / BINARY(16)", use: "UUID storage" },
              { pg: "TIMESTAMPTZ", my: "TIMESTAMP / DATETIME", use: "Date + time + zone" },
              { pg: "BYTEA", my: "BLOB / LONGBLOB", use: "Binary data" },
              { pg: "ARRAY[]", my: "JSON (no native array)", use: "Array column" },
            ].map(({ pg, my, use }, i) => (
              <div
                key={pg}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 4,
                  padding: "4px 6px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                  fontSize: 10.5,
                }}
              >
                <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3a6ea5", fontWeight: 600, fontSize: 10 }}>{pg}</code>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5a8a3c", fontWeight: 600, fontSize: 10 }}>{my}</code>
                <span style={{ color: palette.mid, gridColumn: "span 2", fontSize: 10 }}>{use}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 2 — CREATE TABLE */}
          <SectionCard number="2" title="CREATE TABLE">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PostgreSQL</Tag>
            </div>
            <Code>{`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}</Code>
            <div style={{ display: "flex", gap: 4, marginTop: 8, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">MySQL</Tag>
            </div>
            <Code>{`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`}</Code>
            <Bullet><strong>MySQL requires</strong> ENGINE and CHARSET; PG uses UTF-8 by default</Bullet>
            <Bullet><strong>PG</strong> uses <code>SERIAL</code>; MySQL uses <code>AUTO_INCREMENT</code></Bullet>
          </SectionCard>

          {/* Section 3 — ALTER TABLE */}
          <SectionCard number="3" title="ALTER TABLE">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Column modifications differ significantly between dialects.
            </div>
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`ALTER TABLE t ADD COLUMN age INT;
ALTER TABLE t DROP COLUMN age;
ALTER TABLE t RENAME COLUMN old TO new;
ALTER TABLE t ALTER COLUMN age TYPE BIGINT;
ALTER TABLE t ALTER COLUMN age SET DEFAULT 0;
ALTER TABLE t RENAME TO t2;`}</Code>
            <div style={{ marginTop: 8 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`ALTER TABLE t ADD COLUMN age INT;
ALTER TABLE t DROP COLUMN age;
ALTER TABLE t CHANGE old new INT;
ALTER TABLE t MODIFY age BIGINT;
ALTER TABLE t ALTER age SET DEFAULT 0;
RENAME TABLE t TO t2;`}</Code>
            <Bullet><strong>PG</strong> uses <code>RENAME COLUMN</code> + <code>ALTER TYPE</code></Bullet>
            <Bullet><strong>MySQL</strong> uses <code>CHANGE</code> (rename+retype) or <code>MODIFY</code> (retype only)</Bullet>
          </SectionCard>

          {/* Section 4 — String Functions */}
          <SectionCard number="4" title="String Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Strings</Tag>
            </div>
            {[
              { op: "Concatenate", pg: "'a' || 'b'", my: "CONCAT('a','b')" },
              { op: "Length", pg: "LENGTH(s) / CHAR_LENGTH(s)", my: "LENGTH(s) / CHAR_LENGTH(s)" },
              { op: "Substring", pg: "SUBSTRING(s FROM 2 FOR 3)", my: "SUBSTRING(s, 2, 3)" },
              { op: "Trim", pg: "TRIM(s)", my: "TRIM(s)" },
              { op: "Replace", pg: "REPLACE(s, 'a', 'b')", my: "REPLACE(s, 'a', 'b')" },
              { op: "Regex match", pg: "s ~ '^pattern$'", my: "s REGEXP '^pattern$'" },
              { op: "Position", pg: "POSITION('x' IN s)", my: "LOCATE('x', s)" },
              { op: "Pad left", pg: "LPAD(s, 10, '0')", my: "LPAD(s, 10, '0')" },
            ].map(({ op, pg, my }, i) => (
              <div
                key={op}
                style={{
                  padding: "4px 6px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                  fontSize: 10.5,
                }}
              >
                <strong style={{ color: palette.dark, fontSize: 11 }}>{op}</strong>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 1 }}>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3a6ea5", fontSize: 9.5 }}>{pg}</code>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5a8a3c", fontSize: 9.5 }}>{my}</code>
                </div>
              </div>
            ))}
            <Bullet><strong>PG</strong> uses <code>||</code> for concat; MySQL uses <code>CONCAT()</code></Bullet>
          </SectionCard>

          {/* Section 5 — Date & Time */}
          <SectionCard number="5" title="Date & Time Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PostgreSQL</Tag>
              <Tag color="#5a8a3c">MySQL</Tag>
            </div>
            {[
              { op: "Current timestamp", pg: "NOW() / CURRENT_TIMESTAMP", my: "NOW() / CURRENT_TIMESTAMP" },
              { op: "Current date", pg: "CURRENT_DATE", my: "CURDATE()" },
              { op: "Extract part", pg: "EXTRACT(YEAR FROM ts)", my: "YEAR(ts) / EXTRACT(YEAR FROM ts)" },
              { op: "Date arithmetic", pg: "ts + INTERVAL '1 day'", my: "ts + INTERVAL 1 DAY" },
              { op: "Date diff", pg: "ts1 - ts2 (returns interval)", my: "DATEDIFF(ts1, ts2) (returns int)" },
              { op: "Format", pg: "TO_CHAR(ts, 'YYYY-MM-DD')", my: "DATE_FORMAT(ts, '%Y-%m-%d')" },
              { op: "Truncate", pg: "DATE_TRUNC('month', ts)", my: "DATE(ts) / LAST_DAY(ts)" },
              { op: "Parse string", pg: "TO_TIMESTAMP('...', fmt)", my: "STR_TO_DATE('...', fmt)" },
            ].map(({ op, pg, my }, i) => (
              <div
                key={op}
                style={{
                  padding: "4px 6px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                  fontSize: 10.5,
                }}
              >
                <strong style={{ color: palette.dark, fontSize: 11 }}>{op}</strong>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 1 }}>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3a6ea5", fontSize: 9.5 }}>{pg}</code>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5a8a3c", fontSize: 9.5 }}>{my}</code>
                </div>
              </div>
            ))}
            <Bullet><strong>Key diff:</strong> PG uses <code>INTERVAL '1 day'</code> (quoted), MySQL uses <code>INTERVAL 1 DAY</code> (unquoted)</Bullet>
          </SectionCard>

          {/* Section 6 — INSERT Syntax */}
          <SectionCard number="6" title="INSERT & UPSERT">
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`-- Basic insert
INSERT INTO users (name, email)
VALUES ('Alice', 'a@b.com');

-- Multi-row
INSERT INTO users (name, email) VALUES
  ('Alice', 'a@b.com'),
  ('Bob', 'b@b.com');

-- Upsert (ON CONFLICT)
INSERT INTO users (email, name)
VALUES ('a@b.com', 'Alice')
ON CONFLICT (email)
DO UPDATE SET name = EXCLUDED.name;`}</Code>
            <div style={{ marginTop: 8 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`-- Upsert (ON DUPLICATE KEY)
INSERT INTO users (email, name)
VALUES ('a@b.com', 'Alice')
ON DUPLICATE KEY UPDATE
  name = VALUES(name);

-- MySQL 8.0.19+ alias syntax:
INSERT INTO users (email, name)
VALUES ('a@b.com', 'Alice') AS new
ON DUPLICATE KEY UPDATE
  name = new.name;`}</Code>
            <Bullet><strong>PG</strong> uses <code>EXCLUDED.col</code>; MySQL uses <code>VALUES(col)</code></Bullet>
          </SectionCard>

          {/* Section 7 — UPDATE & DELETE */}
          <SectionCard number="7" title="UPDATE & DELETE">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              JOIN syntax in UPDATE/DELETE statements differs sharply.
            </div>
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`-- Update with join
UPDATE orders SET status = 'done'
FROM customers
WHERE orders.cust_id = customers.id
  AND customers.tier = 'vip';

-- Delete with join
DELETE FROM orders
USING customers
WHERE orders.cust_id = customers.id
  AND customers.active = false;

-- Delete with LIMIT (not supported)
-- Use: DELETE FROM t WHERE id IN
--   (SELECT id FROM t LIMIT 100);`}</Code>
            <div style={{ marginTop: 8 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`-- Update with join
UPDATE orders o
JOIN customers c ON o.cust_id = c.id
SET o.status = 'done'
WHERE c.tier = 'vip';

-- Delete with LIMIT
DELETE FROM orders
WHERE status = 'old'
LIMIT 1000;`}</Code>
            <Bullet><strong>PG</strong> uses <code>FROM</code>/<code>USING</code> for joins; MySQL uses standard <code>JOIN</code></Bullet>
            <Bullet><strong>MySQL</strong> supports <code>DELETE ... LIMIT</code>; PG does not</Bullet>
          </SectionCard>

          {/* Section 8 — SELECT Essentials */}
          <SectionCard number="8" title="SELECT Essentials">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">PostgreSQL</Tag>
              <Tag color="#5a8a3c">MySQL</Tag>
            </div>
            <KV k="LIMIT/OFFSET" v="Both dialects support LIMIT n OFFSET m" />
            <KV k="DISTINCT ON" v="PG-only: DISTINCT ON (col) — pick first row per group" />
            <KV k="Backtick quoting" v='MySQL: `col` — PG: "col" (double quotes)' />
            <KV k="ILIKE" v="PG: case-insensitive LIKE; MySQL LIKE is case-insensitive by default (utf8 collation)" />
            <Code>{`-- PG: DISTINCT ON
SELECT DISTINCT ON (dept_id) *
FROM employees ORDER BY dept_id, salary DESC;

-- MySQL equivalent
SELECT * FROM (
  SELECT *, ROW_NUMBER() OVER
    (PARTITION BY dept_id ORDER BY salary DESC) rn
  FROM employees
) t WHERE rn = 1;`}</Code>
            <Bullet><strong>MySQL</strong> quotes identifiers with <code>`backticks`</code>; <strong>PG</strong> uses <code>"double quotes"</code></Bullet>
            <Bullet><strong>PG</strong> is case-sensitive for LIKE by default; use <code>ILIKE</code> for case-insensitive</Bullet>
          </SectionCard>

          {/* Section 9 — Joins & Subqueries */}
          <SectionCard number="9" title="Joins & Subqueries">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              JOIN types are mostly identical. Key differences in advanced joins.
            </div>
            <Bullet><strong>INNER, LEFT, RIGHT, CROSS JOIN</strong> — identical syntax in both</Bullet>
            <Bullet><strong>FULL OUTER JOIN</strong> — PG supports natively; MySQL requires UNION of LEFT + RIGHT</Bullet>
            <Bullet><strong>LATERAL JOIN</strong> — PG: <code>LEFT JOIN LATERAL (...) ON true</code></Bullet>
            <Bullet><strong>MySQL 8.0.14+</strong> supports <code>LATERAL</code> derived tables</Bullet>
            <Tag color="#3a6ea5">PG Only</Tag>
            <Code>{`-- LATERAL join (correlated subquery as table)
SELECT d.name, e.top_salary
FROM departments d
LEFT JOIN LATERAL (
  SELECT MAX(salary) AS top_salary
  FROM employees
  WHERE dept_id = d.id
) e ON true;`}</Code>
            <div style={{ marginTop: 6 }}>
              <Tag color="#5a8a3c">MySQL</Tag>
            </div>
            <Code>{`-- FULL OUTER JOIN workaround
SELECT * FROM a LEFT JOIN b ON a.id = b.id
UNION
SELECT * FROM a RIGHT JOIN b ON a.id = b.id;`}</Code>
          </SectionCard>

          {/* Section 10 — Aggregation & Grouping */}
          <SectionCard number="10" title="Aggregation & Grouping">
            <Bullet><strong>GROUP BY</strong> — identical in both dialects</Bullet>
            <Bullet><strong>HAVING</strong> — identical syntax: <code>HAVING COUNT(*) &gt; 5</code></Bullet>
            <Bullet><strong>FILTER (PG only)</strong> — <code>COUNT(*) FILTER (WHERE active)</code></Bullet>
            <Bullet><strong>MySQL equivalent</strong> — <code>COUNT(IF(active, 1, NULL))</code></Bullet>
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`SELECT dept,
  COUNT(*) FILTER (WHERE active) AS active_ct,
  AVG(salary) FILTER (WHERE tenure > 2) AS avg_sal
FROM employees GROUP BY dept;

-- GROUPING SETS (PG supports fully)
SELECT dept, role, COUNT(*)
FROM employees
GROUP BY GROUPING SETS ((dept), (role), ());`}</Code>
            <div style={{ marginTop: 6 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`SELECT dept,
  COUNT(IF(active, 1, NULL)) AS active_ct,
  AVG(IF(tenure > 2, salary, NULL)) AS avg_sal
FROM employees GROUP BY dept;

-- ROLLUP (MySQL 8.0+)
SELECT dept, role, COUNT(*)
FROM employees
GROUP BY dept, role WITH ROLLUP;`}</Code>
          </SectionCard>

          {/* Section 11 — Indexes & Performance */}
          <SectionCard number="11" title="Indexes & Performance">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Performance</Tag>
            </div>
            <KV k="B-tree" v="Default index type in both dialects" />
            <KV k="GIN / GiST" v="PG-only: for JSONB, arrays, full-text, geo" />
            <KV k="FULLTEXT" v="MySQL: FULLTEXT index for text search" />
            <KV k="Hash index" v="PG: CREATE INDEX ... USING hash; MySQL: MEMORY engine only" />
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`CREATE INDEX CONCURRENTLY idx_email
  ON users (email);
CREATE INDEX idx_data ON docs
  USING gin (data jsonb_path_ops);
EXPLAIN ANALYZE SELECT * FROM users
  WHERE email = 'x@y.com';`}</Code>
            <div style={{ marginTop: 6 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`CREATE INDEX idx_email ON users (email);
-- No CONCURRENTLY option
ALTER TABLE docs ADD FULLTEXT(content);
EXPLAIN SELECT * FROM users
  WHERE email = 'x@y.com';`}</Code>
            <Bullet><strong>PG</strong> supports <code>CONCURRENTLY</code> — non-blocking index creation</Bullet>
            <Bullet><strong>MySQL</strong> <code>EXPLAIN</code> output format differs; use <code>EXPLAIN FORMAT=JSON</code></Bullet>
          </SectionCard>

          {/* Section 12 — Quick Dialect Detector */}
          <SectionCard number="12" title="Quick Dialect Detector" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Spot which dialect you're looking at — or catch yourself before writing the wrong syntax.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "SERIAL / BIGSERIAL", when: "PostgreSQL", best: "MySQL uses AUTO_INCREMENT instead", icon: "PG" },
                { title: "AUTO_INCREMENT", when: "MySQL", best: "PG uses SERIAL or GENERATED AS IDENTITY", icon: "MY" },
                { title: "ILIKE operator", when: "PostgreSQL", best: "MySQL LIKE is case-insensitive by default", icon: "PG" },
                { title: "`backtick` identifiers", when: "MySQL", best: 'PG uses "double quotes" for identifiers', icon: "MY" },
                { title: "ON CONFLICT DO UPDATE", when: "PostgreSQL", best: "MySQL uses ON DUPLICATE KEY UPDATE", icon: "PG" },
                { title: "ENGINE=InnoDB", when: "MySQL", best: "PG has no storage engine selection", icon: "MY" },
                { title: ":: cast operator", when: "PostgreSQL", best: "MySQL uses CAST(x AS type)", icon: "PG" },
                { title: "IFNULL() function", when: "MySQL", best: "PG uses COALESCE() (both support COALESCE)", icon: "MY" },
              ].map(({ title, when, best, icon }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 900,
                      marginBottom: 4,
                      color: icon === "PG" ? "#3a6ea5" : "#5a8a3c",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {icon}
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
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
          {/* Section 13 — Window Functions */}
          <SectionCard number="13" title="Window Functions">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Both dialects support window functions (MySQL 8.0+). Syntax is nearly identical.
            </div>
            <Code>{`-- Works in both PG and MySQL 8.0+
SELECT name, dept, salary,
  ROW_NUMBER() OVER (
    PARTITION BY dept ORDER BY salary DESC
  ) AS rank,
  LAG(salary) OVER (ORDER BY hire_date) AS prev,
  SUM(salary) OVER (
    ORDER BY hire_date
    ROWS BETWEEN UNBOUNDED PRECEDING
    AND CURRENT ROW
  ) AS running_total
FROM employees;`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="ROW_NUMBER()" desc="Sequential number within partition" />
              <RefRow cmd="RANK()" desc="Rank with gaps on ties" />
              <RefRow cmd="DENSE_RANK()" desc="Rank without gaps" />
              <RefRow cmd="NTILE(n)" desc="Distribute rows into n buckets" />
              <RefRow cmd="LAG(col, n)" desc="Value from n rows before" />
              <RefRow cmd="LEAD(col, n)" desc="Value from n rows after" />
              <RefRow cmd="FIRST_VALUE()" desc="First value in window frame" />
              <RefRow cmd="NTH_VALUE()" desc="Nth value in frame (both support)" />
            </div>
          </SectionCard>

          {/* Section 14 — CTEs & Recursive Queries */}
          <SectionCard number="14" title="CTEs & Recursive Queries">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Advanced</Tag>
            </div>
            <Bullet><strong>WITH</strong> syntax is identical in both (MySQL 8.0+)</Bullet>
            <Bullet><strong>PG</strong> CTEs were optimization fences before v12; now can be inlined</Bullet>
            <Bullet><strong>MySQL</strong> always inlines CTEs (may re-execute them)</Bullet>
            <Code>{`-- Recursive CTE (both dialects)
WITH RECURSIVE tree AS (
  SELECT id, name, parent_id, 1 AS depth
  FROM categories WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id, t.depth+1
  FROM categories c
  JOIN tree t ON c.parent_id = t.id
)
SELECT * FROM tree;`}</Code>
            <div style={{ marginTop: 6 }}>
              <Tag color="#3a6ea5">PG Only</Tag>
            </div>
            <Code>{`-- Writable CTE (PG only)
WITH deleted AS (
  DELETE FROM old_logs
  WHERE ts < NOW() - INTERVAL '90 days'
  RETURNING *
)
INSERT INTO archive SELECT * FROM deleted;`}</Code>
          </SectionCard>

          {/* Section 15 — JSON Operations */}
          <SectionCard number="15" title="JSON Operations">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              JSON support is vastly different. PG's JSONB is more powerful.
            </div>
            {[
              { op: "Access key", pg: "data->>'name'", my: "data->>'$.name' / JSON_EXTRACT" },
              { op: "Nested path", pg: "data->'addr'->>'city'", my: "data->>'$.addr.city'" },
              { op: "Contains", pg: "data @> '{\"a\":1}'", my: "JSON_CONTAINS(data, '1', '$.a')" },
              { op: "Array element", pg: "data->0", my: "JSON_EXTRACT(data, '$[0]')" },
              { op: "Build object", pg: "jsonb_build_object('k','v')", my: "JSON_OBJECT('k','v')" },
              { op: "Aggregate", pg: "jsonb_agg(col)", my: "JSON_ARRAYAGG(col)" },
            ].map(({ op, pg, my }, i) => (
              <div
                key={op}
                style={{
                  padding: "4px 6px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 4,
                  marginBottom: 2,
                  fontSize: 10.5,
                }}
              >
                <strong style={{ color: palette.dark, fontSize: 11 }}>{op}</strong>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 1 }}>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3a6ea5", fontSize: 9.5 }}>{pg}</code>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5a8a3c", fontSize: 9.5 }}>{my}</code>
                </div>
              </div>
            ))}
            <Bullet><strong>PG JSONB</strong> supports GIN indexing for fast lookups; MySQL JSON is stored as text</Bullet>
            <Bullet><strong>PG</strong> has <code>jsonb_set()</code>, <code>jsonb_insert()</code> for mutation</Bullet>
          </SectionCard>

          {/* Section 16 — ENUM & Custom Types */}
          <SectionCard number="16" title="ENUM & Custom Types">
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`-- PG: Create a reusable type
CREATE TYPE status AS ENUM
  ('active', 'inactive', 'banned');

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  status status DEFAULT 'active'
);

-- Add a value (PG 9.1+)
ALTER TYPE status ADD VALUE 'suspended'
  AFTER 'inactive';`}</Code>
            <div style={{ marginTop: 8 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`-- MySQL: Inline ENUM (per column)
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status ENUM('active','inactive','banned')
    DEFAULT 'active'
);

-- Add a value: requires column modify
ALTER TABLE users MODIFY status
  ENUM('active','inactive','banned',
       'suspended');`}</Code>
            <Bullet><strong>PG ENUMs</strong> are reusable types across tables; <strong>MySQL ENUMs</strong> are per-column</Bullet>
            <Bullet><strong>PG</strong> also supports composite types, domains, and range types</Bullet>
          </SectionCard>

          {/* Section 17 — Auto-Increment & Sequences */}
          <SectionCard number="17" title="Auto-Increment & Sequences">
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`-- SERIAL (legacy, pre-PG 10)
CREATE TABLE t (id SERIAL PRIMARY KEY);

-- IDENTITY (PG 10+, SQL standard)
CREATE TABLE t (
  id INT GENERATED ALWAYS AS IDENTITY
    PRIMARY KEY
);

-- Manual sequence
CREATE SEQUENCE my_seq START 1000;
SELECT nextval('my_seq');
SELECT currval('my_seq');
SELECT setval('my_seq', 5000);`}</Code>
            <div style={{ marginTop: 8 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`CREATE TABLE t (
  id INT AUTO_INCREMENT PRIMARY KEY
);

-- Set start value
ALTER TABLE t AUTO_INCREMENT = 1000;

-- Get last inserted ID
SELECT LAST_INSERT_ID();`}</Code>
            <Bullet><strong>PG</strong> has standalone sequences; MySQL has only <code>AUTO_INCREMENT</code></Bullet>
            <Bullet><strong>PG 10+</strong> prefers <code>GENERATED AS IDENTITY</code> over <code>SERIAL</code></Bullet>
          </SectionCard>

          {/* Section 18 — UPSERT / Conflict Handling */}
          <SectionCard number="18" title="UPSERT & Conflict Handling">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Common Gotcha</Tag>
            </div>
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`-- Upsert with conflict target
INSERT INTO inventory (sku, qty)
VALUES ('ABC', 10)
ON CONFLICT (sku)
DO UPDATE SET qty = inventory.qty
  + EXCLUDED.qty;

-- Conflict on constraint name
ON CONFLICT ON CONSTRAINT uq_sku
DO NOTHING;

-- RETURNING (get affected rows)
INSERT INTO t (name) VALUES ('x')
ON CONFLICT DO NOTHING
RETURNING id, name;`}</Code>
            <div style={{ marginTop: 8 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`-- ON DUPLICATE KEY UPDATE
INSERT INTO inventory (sku, qty)
VALUES ('ABC', 10)
ON DUPLICATE KEY UPDATE
  qty = qty + VALUES(qty);

-- REPLACE INTO (deletes + re-inserts)
REPLACE INTO inventory (sku, qty)
VALUES ('ABC', 10);
-- Warning: REPLACE resets auto_increment`}</Code>
            <Bullet><strong>PG</strong> has <code>RETURNING</code> clause — MySQL has no equivalent</Bullet>
            <Bullet><strong>MySQL's REPLACE</strong> triggers DELETE+INSERT (foreign keys affected!)</Bullet>
          </SectionCard>

          {/* Section 19 — Views & Materialized Views */}
          <SectionCard number="19" title="Views & Materialized Views">
            <Bullet><strong>Regular views</strong> — identical syntax in both dialects</Bullet>
            <Code>{`-- Both dialects
CREATE OR REPLACE VIEW active_users AS
SELECT * FROM users WHERE active = true;`}</Code>
            <div style={{ marginTop: 6 }}><Tag color="#3a6ea5">PG Only</Tag></div>
            <Code>{`-- Materialized view (PG only)
CREATE MATERIALIZED VIEW mv_stats AS
SELECT dept, COUNT(*), AVG(salary)
FROM employees GROUP BY dept;

-- Refresh data
REFRESH MATERIALIZED VIEW
  CONCURRENTLY mv_stats;

-- Requires unique index for CONCURRENTLY
CREATE UNIQUE INDEX ON mv_stats (dept);`}</Code>
            <Bullet><strong>MySQL</strong> has no materialized views — simulate with tables + scheduled events</Bullet>
            <Bullet><strong>PG</strong> materialized views can be refreshed <code>CONCURRENTLY</code> (non-blocking)</Bullet>
            <Bullet>Both dialects support <code>WITH CHECK OPTION</code> for updatable views</Bullet>
          </SectionCard>

          {/* Section 20 — Stored Procedures & Functions */}
          <SectionCard number="20" title="Stored Procedures & Functions">
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`-- Function (returns value)
CREATE FUNCTION add_tax(price NUMERIC)
RETURNS NUMERIC AS $$
BEGIN
  RETURN price * 1.1;
END;
$$ LANGUAGE plpgsql;

-- Procedure (PG 11+, no return)
CREATE PROCEDURE archive_old()
LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO archive
  SELECT * FROM logs
  WHERE ts < NOW() - INTERVAL '1 year';
  DELETE FROM logs
  WHERE ts < NOW() - INTERVAL '1 year';
  COMMIT;
END $$;
CALL archive_old();`}</Code>
            <div style={{ marginTop: 6 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`DELIMITER //
CREATE FUNCTION add_tax(price DECIMAL)
RETURNS DECIMAL DETERMINISTIC
BEGIN
  RETURN price * 1.1;
END //

CREATE PROCEDURE archive_old()
BEGIN
  INSERT INTO archive
  SELECT * FROM logs
  WHERE ts < NOW()-INTERVAL 1 YEAR;
  DELETE FROM logs
  WHERE ts < NOW()-INTERVAL 1 YEAR;
END //
DELIMITER ;
CALL archive_old();`}</Code>
          </SectionCard>

          {/* Section 21 — Transactions & Locking */}
          <SectionCard number="21" title="Transactions & Locking">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Transaction syntax is similar, but defaults and locking differ.
            </div>
            <KV k="Auto-commit" v="Both default to auto-commit ON" />
            <KV k="BEGIN" v="PG: BEGIN or START TRANSACTION; MySQL: START TRANSACTION" />
            <KV k="Savepoints" v="Both: SAVEPOINT sp1; ROLLBACK TO sp1;" />
            <KV k="Isolation" v="PG default: Read Committed; MySQL/InnoDB: Repeatable Read" />
            <Code>{`-- Row locking (both)
SELECT * FROM accounts
WHERE id = 1 FOR UPDATE;

-- PG: Advisory locks
SELECT pg_advisory_lock(42);
-- ... do work ...
SELECT pg_advisory_unlock(42);

-- PG: SKIP LOCKED (job queues)
SELECT * FROM tasks
WHERE status = 'pending'
FOR UPDATE SKIP LOCKED LIMIT 1;`}</Code>
            <Bullet><strong>MySQL 8.0+</strong> also supports <code>SKIP LOCKED</code> and <code>NOWAIT</code></Bullet>
            <Bullet><strong>PG</strong> has advisory locks — lightweight app-level locking</Bullet>
          </SectionCard>

          {/* Section 22 — User & Permission Management */}
          <SectionCard number="22" title="User & Permission Management">
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`CREATE ROLE app_user LOGIN
  PASSWORD 'secret';
GRANT SELECT, INSERT ON users
  TO app_user;
GRANT USAGE ON SCHEMA public
  TO app_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT SELECT ON TABLES TO app_user;
REVOKE DELETE ON users FROM app_user;`}</Code>
            <div style={{ marginTop: 6 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`CREATE USER 'app_user'@'%'
  IDENTIFIED BY 'secret';
GRANT SELECT, INSERT ON mydb.users
  TO 'app_user'@'%';
FLUSH PRIVILEGES;
REVOKE DELETE ON mydb.users
  FROM 'app_user'@'%';`}</Code>
            <Bullet><strong>PG</strong> uses roles (no user/host distinction); <strong>MySQL</strong> users are <code>'user'@'host'</code></Bullet>
            <Bullet><strong>MySQL</strong> needs <code>FLUSH PRIVILEGES</code> after direct grant table edits</Bullet>
            <Bullet><strong>PG</strong> has <code>ALTER DEFAULT PRIVILEGES</code> for future objects</Bullet>
          </SectionCard>

          {/* Section 23 — Import/Export & CLI */}
          <SectionCard number="23" title="Import/Export & CLI Tools">
            <Tag color="#3a6ea5">PostgreSQL</Tag>
            <Code>{`# Dump entire database
pg_dump mydb > backup.sql
pg_dump -Fc mydb > backup.dump  # custom

# Restore
psql mydb < backup.sql
pg_restore -d mydb backup.dump

# Copy CSV
\\copy users TO '/tmp/u.csv' CSV HEADER
\\copy users FROM '/tmp/u.csv' CSV HEADER

# Connect
psql -h host -U user -d mydb`}</Code>
            <div style={{ marginTop: 6 }}><Tag color="#5a8a3c">MySQL</Tag></div>
            <Code>{`# Dump entire database
mysqldump mydb > backup.sql
mysqldump --single-transaction mydb > b.sql

# Restore
mysql mydb < backup.sql

# Load CSV
LOAD DATA INFILE '/tmp/u.csv'
  INTO TABLE users
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\\n'
  IGNORE 1 ROWS;

# Connect
mysql -h host -u user -p mydb`}</Code>
            <Bullet><strong>PG</strong> uses <code>pg_dump</code>/<code>pg_restore</code>; MySQL uses <code>mysqldump</code>/<code>mysql</code></Bullet>
          </SectionCard>

          {/* Section 24 — Gotchas & Migration Tips */}
          <SectionCard number="24" title="Gotchas & Migration Tips" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              The most common mistakes when switching between PostgreSQL and MySQL.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "Case Sensitivity",
                  when: "String comparison",
                  best: "PG: case-sensitive by default. MySQL: depends on collation (usually case-insensitive).",
                  icon: "!",
                },
                {
                  title: "Boolean Values",
                  when: "TRUE / FALSE",
                  best: "PG: real BOOLEAN. MySQL: TINYINT(1), 0/1. Both accept TRUE/FALSE keywords.",
                  icon: "!",
                },
                {
                  title: "GROUP BY strictness",
                  when: "SELECT non-aggregated cols",
                  best: "PG: must include in GROUP BY or aggregate. MySQL: ONLY_FULL_GROUP_BY mode (on by default 5.7+).",
                  icon: "!",
                },
                {
                  title: "Empty string vs NULL",
                  when: "Inserting '' into NOT NULL",
                  best: "Both treat '' as distinct from NULL. Oracle conflates them — PG/MySQL do not.",
                  icon: "=",
                },
                {
                  title: "Type casting",
                  when: "Converting types",
                  best: "PG: value::type or CAST(). MySQL: CAST() or CONVERT(). The :: syntax is PG-only.",
                  icon: "::",
                },
                {
                  title: "Schema vs Database",
                  when: "Namespace isolation",
                  best: "PG: database > schema > table. MySQL: database = schema (synonyms).",
                  icon: "NS",
                },
                {
                  title: "RETURNING clause",
                  when: "Get inserted/updated rows",
                  best: "PG: INSERT/UPDATE/DELETE ... RETURNING *. MySQL: no equivalent; use LAST_INSERT_ID().",
                  icon: "RET",
                },
                {
                  title: "TRUNCATE behavior",
                  when: "Emptying tables",
                  best: "PG: TRUNCATE is transactional (can rollback). MySQL: TRUNCATE is auto-committed.",
                  icon: "TX",
                },
              ].map(({ title, when, best, icon }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 14, marginBottom: 4, fontWeight: 900, color: palette.accent, fontFamily: "'JetBrains Mono', monospace" }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
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
          Cross-dialect reference · PostgreSQL 16 · MySQL 8.0+
        </span>
      </div>
    </div>
  );
}
