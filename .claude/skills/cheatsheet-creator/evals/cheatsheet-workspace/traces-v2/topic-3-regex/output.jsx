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
        width: 130,
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

export default function RegexCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Foundations", "Page 2: Advanced"];

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
          Regular Expressions{" "}
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
          Pattern Matching {'·'} Search {'&'} Replace {'·'} Text Processing — 2026 Edition
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

      {/* Page 1: Foundations */}
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
          {/* Section 1 — Basic Metacharacters */}
          <SectionCard number="1" title="Metacharacters">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Core Syntax</Tag>
              <Tag color="#7a5a8a">Essential</Tag>
            </div>
            <RefRow cmd="." desc="Match any character (except newline)" />
            <RefRow cmd="^" desc="Start of string / line" />
            <RefRow cmd="$" desc="End of string / line" />
            <RefRow cmd="|" desc="Alternation (logical OR)" />
            <RefRow cmd={'\\'}  desc="Escape next metacharacter" />
            <RefRow cmd="()" desc="Group subexpression" />
            <RefRow cmd="[]" desc="Character class (match one of)" />
          </SectionCard>

          {/* Section 2 — Shorthand Character Classes */}
          <SectionCard number="2" title="Shorthand Classes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Shorthand</Tag>
              <Tag color="#a53a3a">Negated</Tag>
            </div>
            <RefRow cmd={'\\d'} desc="Digit [0-9]" />
            <RefRow cmd={'\\D'} desc="Non-digit [^0-9]" />
            <RefRow cmd={'\\w'} desc="Word char [a-zA-Z0-9_]" />
            <RefRow cmd={'\\W'} desc="Non-word char" />
            <RefRow cmd={'\\s'} desc="Whitespace [ \\t\\n\\r\\f]" />
            <RefRow cmd={'\\S'} desc="Non-whitespace" />
            <RefRow cmd={'\\b'} desc="Word boundary" />
            <RefRow cmd={'\\B'} desc="Non-word boundary" />
          </SectionCard>

          {/* Section 3 — Custom Character Classes */}
          <SectionCard number="3" title="Character Classes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Square brackets define custom sets of characters to match.
            </div>
            <RefRow cmd="[abc]" desc="Match a, b, or c" />
            <RefRow cmd="[^abc]" desc="NOT a, b, or c" />
            <RefRow cmd="[a-z]" desc="Lowercase letter range" />
            <RefRow cmd="[A-Z0-9]" desc="Uppercase or digit" />
            <RefRow cmd={'[\\s\\S]'} desc="Any character (incl. newline)" />
            <Bullet>Hyphen is literal at start/end: <code>[a-]</code> or <code>[-a]</code></Bullet>
            <Bullet>Caret <code>^</code> negates only at start: <code>[^x]</code></Bullet>
          </SectionCard>

          {/* Section 4 — Quantifiers */}
          <SectionCard number="4" title="Quantifiers">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Greedy</Tag>
              <Tag color="#2a7a7a">By Default</Tag>
            </div>
            <RefRow cmd="*" desc="0 or more" />
            <RefRow cmd="+" desc="1 or more" />
            <RefRow cmd="?" desc="0 or 1 (optional)" />
            <RefRow cmd={'{n}'} desc="Exactly n times" />
            <RefRow cmd={'{n,}'} desc="n or more times" />
            <RefRow cmd={'{n,m}'} desc="Between n and m times" />
            <Code>{`a{3}     → "aaa"
a{2,4}   → "aa", "aaa", "aaaa"
colou?r  → "color" or "colour"`}</Code>
          </SectionCard>

          {/* Section 5 — Greedy vs Lazy */}
          <SectionCard number="5" title="Greedy vs Lazy">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Append <code>?</code> to any quantifier to make it lazy (match as few as possible).
            </div>
            <RefRow cmd="*?" desc="0 or more (lazy)" />
            <RefRow cmd="+?" desc="1 or more (lazy)" />
            <RefRow cmd="??" desc="0 or 1 (lazy)" />
            <RefRow cmd={'{n,m}?'} desc="Between n and m (lazy)" />
            <Code>{`Greedy:  <.+>   on "<b>hi</b>"  → "<b>hi</b>"
Lazy:    <.+?>  on "<b>hi</b>"  → "<b>"`}</Code>
            <Bullet><strong>Possessive</strong> (some engines): <code>*+</code> <code>++</code> — greedy, no backtracking</Bullet>
          </SectionCard>

          {/* Section 6 — Anchors & Boundaries */}
          <SectionCard number="6" title="Anchors & Boundaries">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Zero-width assertions: they match a position, not a character.
            </div>
            <RefRow cmd="^" desc="Start of string (or line with m flag)" />
            <RefRow cmd="$" desc="End of string (or line with m flag)" />
            <RefRow cmd={'\\b'} desc="Word boundary" />
            <RefRow cmd={'\\B'} desc="Non-word boundary" />
            <RefRow cmd={'\\A'} desc="Absolute start of string (PCRE/Python)" />
            <RefRow cmd={'\\Z'} desc="Absolute end of string (PCRE/Python)" />
            <Code>{`\\bcat\\b → matches "cat" not "catch"
^Hello   → matches "Hello" at line start`}</Code>
          </SectionCard>

          {/* Section 7 — Groups & Capturing */}
          <SectionCard number="7" title="Groups & Capturing">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Capture</Tag>
              <Tag color="#7a5a8a">Non-Capture</Tag>
              <Tag color="#5a8a3c">Named</Tag>
            </div>
            <RefRow cmd="(abc)" desc="Capturing group" />
            <RefRow cmd="(?:abc)" desc="Non-capturing group" />
            <RefRow cmd={'(?<name>abc)'} desc="Named capturing group" />
            <RefRow cmd={'\\1, \\2'} desc="Backreference to group 1, 2" />
            <RefRow cmd={'\\k<name>'} desc="Backreference by name" />
            <Code>{`(\\w+)\\s\\1    → matches "the the"
(?<year>\\d{4})-(?<mo>\\d{2})`}</Code>
          </SectionCard>

          {/* Section 8 — Lookahead & Lookbehind */}
          <SectionCard number="8" title="Lookahead & Lookbehind">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Zero-width assertions that check context without consuming characters.
            </div>
            <RefRow cmd="(?=abc)" desc="Positive lookahead" />
            <RefRow cmd="(?!abc)" desc="Negative lookahead" />
            <RefRow cmd={'(?<=abc)'} desc="Positive lookbehind" />
            <RefRow cmd={'(?<!abc)'} desc="Negative lookbehind" />
            <Code>{`\\d+(?= dollars)   → "100" in "100 dollars"
(?<=\\$)\\d+        → "50" in "$50"
(?!.*cat)          → fail if "cat" ahead`}</Code>
            <Bullet>Lookbehinds must be fixed-width in most engines (except .NET, Python)</Bullet>
          </SectionCard>

          {/* Section 9 — Flags / Modifiers */}
          <SectionCard number="9" title="Flags / Modifiers">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">Inline</Tag>
              <Tag color="#8a6a3a">Per-Engine</Tag>
            </div>
            <RefRow cmd="g" desc="Global — find all matches, not just first" />
            <RefRow cmd="i" desc="Case-insensitive matching" />
            <RefRow cmd="m" desc="Multiline — ^ and $ match line boundaries" />
            <RefRow cmd="s" desc="Dotall — dot matches newline too" />
            <RefRow cmd="x" desc="Extended — ignore whitespace, allow comments" />
            <RefRow cmd="u" desc="Unicode — full Unicode support (JS/Python)" />
            <Code>{`/hello/gi         → JS global case-insensitive
(?im)^start       → inline flags (PCRE)`}</Code>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced */}
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
          {/* Section 10 — Common Patterns */}
          <SectionCard number="10" title="Common Patterns">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Copy-Paste Ready</Tag>
            </div>
            <KV k="Email" v="basic validation pattern" />
            <Code>{`[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}`}</Code>
            <KV k="URL" v="http/https with path" />
            <Code>{`https?://[\\w.-]+(?:\\.[a-zA-Z]{2,})(?:/[\\w./-]*)?`}</Code>
            <KV k="IPv4" v="0.0.0.0 to 255.255.255.255" />
            <Code>{`\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b`}</Code>
            <KV k="Date" v="YYYY-MM-DD format" />
            <Code>{`\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])`}</Code>
          </SectionCard>

          {/* Section 11 — Substitution & Replace */}
          <SectionCard number="11" title="Substitution Patterns">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Used in the replacement string of search-and-replace operations.
            </div>
            <RefRow cmd="$1, $2" desc="Captured group reference (JS)" />
            <RefRow cmd={'\\1, \\2'} desc="Captured group reference (Python/PCRE)" />
            <RefRow cmd="$&" desc="Entire matched text (JS)" />
            <RefRow cmd="$`" desc="Text before match (JS)" />
            <RefRow cmd="$'" desc="Text after match (JS)" />
            <RefRow cmd={'${name}'} desc="Named group ref (JS)" />
            <Code>{`// JS: swap first/last name
"John Smith".replace(
  /(\\w+) (\\w+)/, "$2, $1"
)  → "Smith, John"`}</Code>
          </SectionCard>

          {/* Section 12 — Escape Sequences */}
          <SectionCard number="12" title="Escape Sequences">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Precede with backslash to match literal metacharacters.
            </div>
            <RefRow cmd={'\\.'} desc="Literal period" />
            <RefRow cmd={'\\*'} desc="Literal asterisk" />
            <RefRow cmd={'\\+'} desc="Literal plus sign" />
            <RefRow cmd={'\\?'} desc="Literal question mark" />
            <RefRow cmd={'\\('} desc="Literal parenthesis" />
            <RefRow cmd={'\\['} desc="Literal square bracket" />
            <RefRow cmd={'\\{'} desc="Literal curly brace" />
            <RefRow cmd={'\\|'} desc="Literal pipe" />
            <Bullet><strong>Must escape:</strong> <code>{'.\\ * + ? | ^ $ ( ) [ ] { }'}</code></Bullet>
          </SectionCard>

          {/* Section 13 — POSIX Classes */}
          <SectionCard number="13" title="POSIX Classes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">POSIX</Tag>
              <Tag color="#8a6a3a">grep / sed</Tag>
            </div>
            <RefRow cmd="[:alpha:]" desc="Alphabetic characters" />
            <RefRow cmd="[:digit:]" desc="Digits [0-9]" />
            <RefRow cmd="[:alnum:]" desc="Alphanumeric" />
            <RefRow cmd="[:space:]" desc="Whitespace characters" />
            <RefRow cmd="[:upper:]" desc="Uppercase letters" />
            <RefRow cmd="[:lower:]" desc="Lowercase letters" />
            <RefRow cmd="[:punct:]" desc="Punctuation characters" />
            <Bullet>Use inside brackets: <code>[[:alpha:]]</code> not <code>[:alpha:]</code></Bullet>
          </SectionCard>

          {/* Section 14 — JavaScript Regex */}
          <SectionCard number="14" title="JavaScript Methods">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">JS</Tag>
              <Tag color="#2a7a7a">Built-in</Tag>
            </div>
            <RefRow cmd=".test(str)" desc="Returns true/false" />
            <RefRow cmd=".exec(str)" desc="Returns match array or null" />
            <RefRow cmd="str.match(re)" desc="All matches (with g flag)" />
            <RefRow cmd="str.matchAll(re)" desc="Iterator of all match objects" />
            <RefRow cmd="str.replace(re, s)" desc="Replace first (or all with g)" />
            <RefRow cmd="str.search(re)" desc="Index of first match, or -1" />
            <RefRow cmd="str.split(re)" desc="Split string by pattern" />
            <Code>{`const re = /(?<yr>\\d{4})/;
const m = re.exec("2026");
m.groups.yr  // "2026"`}</Code>
          </SectionCard>

          {/* Section 15 — Python Regex */}
          <SectionCard number="15" title="Python re Module">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Python</Tag>
              <Tag>import re</Tag>
            </div>
            <RefRow cmd="re.search(p, s)" desc="First match anywhere in string" />
            <RefRow cmd="re.match(p, s)" desc="Match at start of string only" />
            <RefRow cmd="re.findall(p, s)" desc="List of all matches" />
            <RefRow cmd="re.finditer(p, s)" desc="Iterator of match objects" />
            <RefRow cmd="re.sub(p, r, s)" desc="Replace all occurrences" />
            <RefRow cmd="re.split(p, s)" desc="Split by pattern" />
            <RefRow cmd="re.compile(p)" desc="Compile for reuse" />
            <Code>{`import re
m = re.search(r'(\\d+)', 'age 42')
m.group(1)  # '42'`}</Code>
          </SectionCard>

          {/* Section 16 — Common Pitfalls */}
          <SectionCard number="16" title="Common Pitfalls">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Watch Out</Tag>
            </div>
            <Bullet><strong>Catastrophic backtracking:</strong> nested quantifiers like <code>(a+)+</code> can freeze the engine on non-matching input</Bullet>
            <Bullet><strong>Greedy by default:</strong> <code>{'<.*>'}</code> matches the longest possible span, not the first tag — use <code>{'<.*?>'}</code></Bullet>
            <Bullet><strong>Forgetting anchors:</strong> <code>{'\\d+'}</code> matches digits <em>anywhere</em> — use <code>{'^\\d+$'}</code> for full-string validation</Bullet>
            <Bullet><strong>Unescaped dots:</strong> a bare <code>.</code> matches any character — escape as <code>{'\\.'}</code> for literal period</Bullet>
            <Bullet><strong>Multiline confusion:</strong> <code>^</code> and <code>$</code> only match line boundaries with the <code>m</code> flag</Bullet>
            <Bullet><strong>Raw strings in Python:</strong> always use <code>{"r'...'"}</code> to avoid double-escaping backslashes</Bullet>
          </SectionCard>

          {/* Section 17 — Special Constructs */}
          <SectionCard number="17" title="Special Constructs">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Advanced</Tag>
              <Tag color="#2a7a7a">PCRE</Tag>
            </div>
            <RefRow cmd="(?:...)" desc="Non-capturing group" />
            <RefRow cmd="(?>...)" desc="Atomic group (no backtrack)" />
            <RefRow cmd="(?#...)" desc="Inline comment" />
            <RefRow cmd="(?i:abc)" desc="Inline flag scoped to group" />
            <RefRow cmd={'(?P<n>...)'} desc="Python named group" />
            <RefRow cmd="(?(1)y|n)" desc="Conditional: if group 1 matched" />
            <Bullet>Atomic groups and conditionals are PCRE/Python — not available in basic JS</Bullet>
          </SectionCard>

          {/* Section 18 — Quick Decision Guide */}
          <SectionCard number="18" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "Validate Input",
                  when: "Form fields, CLI args",
                  best: "Anchor with ^...$ and use .test() or re.match()",
                  icon: "✓",
                },
                {
                  title: "Extract Data",
                  when: "Parsing logs, scraping",
                  best: "Named groups + .exec() or re.findall()",
                  icon: "⟨⟩",
                },
                {
                  title: "Search & Replace",
                  when: "Refactoring, cleanup",
                  best: "Capture groups + $1 backrefs in replacement",
                  icon: "↔",
                },
                {
                  title: "Split Text",
                  when: "Tokenizing, CSV parsing",
                  best: "str.split(regex) with non-capturing groups",
                  icon: "⊞",
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
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: palette.accent,
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {when}
                  </div>
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
        Regular Expressions Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Compatible with JavaScript, Python, PCRE, and most regex engines
        </span>
      </div>
    </div>
  );
}
