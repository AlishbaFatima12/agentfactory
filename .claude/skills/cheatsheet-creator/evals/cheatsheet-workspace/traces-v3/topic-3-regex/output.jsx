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
  const pages = ["Page 1: Core Syntax", "Page 2: Advanced & Engines"];

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
          Patterns &middot; Quantifiers &middot; Lookarounds &middot; Engine Differences — 2026 Edition
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

      {/* Page 1: Core Syntax */}
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
          {/* Section 1: Literal & Meta Characters */}
          <SectionCard number="1" title="Literals & Metacharacters">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Most characters match themselves literally. These special characters must be escaped with a backslash to match literally.
            </div>
            <RefRow cmd={'.\\ ^ $ | ? * + ( ) [ ] { }'} desc="The metacharacters" />
            <RefRow cmd={'\\.'} desc="Escaped dot — matches literal period" />
            <RefRow cmd={'\\\\'}desc="Escaped backslash — matches literal \\" />
            <Bullet><strong>Inside character classes</strong> only <code>{']\\ ^ -'}</code> need escaping</Bullet>
            <Bullet>Use <code>{'\\Q...\\E'}</code> (Java/PCRE) to quote a literal string</Bullet>
          </SectionCard>

          {/* Section 2: Character Classes */}
          <SectionCard number="2" title="Character Classes">
            <RefRow cmd={"[abc]"} desc="Match a, b, or c" />
            <RefRow cmd={"[^abc]"} desc="Match anything except a, b, or c" />
            <RefRow cmd={"[a-z]"} desc="Range: any lowercase letter" />
            <RefRow cmd={"[a-zA-Z0-9]"} desc="Combined ranges" />
            <RefRow cmd={"[\\[\\]]"} desc="Escaped brackets inside class" />
            <Bullet><code>-</code> is literal at start/end of class: <code>[a-]</code> or <code>[-a]</code></Bullet>
            <Bullet><code>^</code> is literal unless first: <code>[a^b]</code> matches a, ^, or b</Bullet>
          </SectionCard>

          {/* Section 3: Shorthand Classes */}
          <SectionCard number="3" title="Shorthand Classes">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">ASCII Mode</Tag>
              <Tag color="#7a5a8a">Unicode Mode</Tag>
            </div>
            <RefRow cmd={'\\d'} desc={"Digit: [0-9]"} />
            <RefRow cmd={'\\D'} desc={"Non-digit: [^0-9]"} />
            <RefRow cmd={'\\w'} desc={"Word char: [a-zA-Z0-9_] (ASCII mode)"} />
            <RefRow cmd={'\\W'} desc={"Non-word char: [^a-zA-Z0-9_]"} />
            <RefRow cmd={'\\s'} desc={"Whitespace: [ \\t\\n\\r\\f\\v] + more"} />
            <RefRow cmd={'\\S'} desc={"Non-whitespace"} />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Unicode-aware mode</strong> (Python default, JS <code>/u</code>): <code>{'\\w'}</code> also matches accented letters, CJK, etc.</Bullet>
              <Bullet><code>{'\\s'}</code> always matches <code>{' \\t \\n \\r \\f \\v'}</code>. In Unicode mode (JS, Python default) it also matches non-breaking spaces and other Unicode separators</Bullet>
            </div>
          </SectionCard>

          {/* Section 4: Anchors & Boundaries */}
          <SectionCard number="4" title="Anchors & Boundaries">
            <RefRow cmd={"^"} desc={"Start of string (or line with /m flag)"} />
            <RefRow cmd={"$"} desc={"End of string (or line with /m flag)"} />
            <RefRow cmd={'\\b'} desc={"Word boundary"} />
            <RefRow cmd={'\\B'} desc={"Non-word boundary"} />
            <RefRow cmd={'\\A'} desc={"Absolute start of string (not in JS)"} />
            <RefRow cmd={'\\Z'} desc={"End of string or before final \\n (not in JS)"} />
            <RefRow cmd={'\\z'} desc={"Absolute end of string (not in JS)"} />
            <Bullet><code>{'\\b'}</code> matches between a <code>{'\\w'}</code> and <code>{'\\W'}</code> character (or string boundary)</Bullet>
          </SectionCard>

          {/* Section 5: Quantifiers */}
          <SectionCard number="5" title="Quantifiers">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Greedy</Tag>
              <Tag color="#3a6ea5">Lazy</Tag>
              <Tag color="#a53a3a">Possessive</Tag>
            </div>
            <RefRow cmd={"*"} desc={"0 or more (greedy)"} />
            <RefRow cmd={"+"} desc={"1 or more (greedy)"} />
            <RefRow cmd={"?"} desc={"0 or 1 (greedy)"} />
            <RefRow cmd={"{n}"} desc={"Exactly n times"} />
            <RefRow cmd={"{n,}"} desc={"n or more times"} />
            <RefRow cmd={"{n,m}"} desc={"Between n and m times"} />
            <Bullet>Append <code>?</code> for lazy/non-greedy: <code>{'*?  +?  ??  {n,m}?'}</code></Bullet>
            <Bullet>Append <code>+</code> for possessive (Java, PCRE — not JS): <code>{'*+  ++  ?+'}</code></Bullet>
            <Bullet><strong>Possessive</strong> quantifiers never backtrack — faster but may miss matches</Bullet>
          </SectionCard>

          {/* Section 6: Groups & Capturing */}
          <SectionCard number="6" title="Groups & Capturing">
            <RefRow cmd={"(abc)"} desc={"Capturing group"} />
            <RefRow cmd={"(?:abc)"} desc={"Non-capturing group"} />
            <RefRow cmd={'(?<name>abc)'} desc={"Named group (JS, Java, PCRE)"} />
            <RefRow cmd={'(?P<name>abc)'} desc={"Named group (Python syntax)"} />
            <RefRow cmd={"(?>abc)"} desc={"Atomic group (Java, PCRE — not JS)"} />
            <Bullet><code>{'\\1'}</code>, <code>{'\\2'}</code> — backreference to captured group by number</Bullet>
            <Bullet><code>{'\\k<name>'}</code> — backreference by name (JS, Java, PCRE)</Bullet>
            <Bullet><code>{'(?P=name)'}</code> — backreference by name (Python)</Bullet>
          </SectionCard>

          {/* Section 7: Alternation & Conditionals */}
          <SectionCard number="7" title="Alternation & Conditionals">
            <RefRow cmd={"a|b"} desc={"Match a or b"} />
            <RefRow cmd={"(a|b)c"} desc={"ac or bc — groups constrain scope"} />
            <RefRow cmd={"(?:a|b)c"} desc={"Same, non-capturing"} />
            <Bullet>Alternation has <strong>lowest precedence</strong> — use groups to constrain it</Bullet>
            <Bullet><code>{'cat|dog'}</code> matches the whole word <code>cat</code> OR the whole word <code>dog</code>, not <code>ca</code>(t|d)<code>og</code></Bullet>
            <Bullet>The engine tries alternatives <strong>left to right</strong> and stops at the first match</Bullet>
            <Bullet>In PCRE/Python: <code>{'(?(1)yes|no)'}</code> — conditional on group 1 having matched</Bullet>
          </SectionCard>

          {/* Section 8: Lookahead & Lookbehind */}
          <SectionCard number="8" title="Lookahead & Lookbehind">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Zero-Width</Tag>
              <Tag color="#3a6ea5">Non-Consuming</Tag>
            </div>
            <RefRow cmd={"(?=abc)"} desc={"Positive lookahead"} />
            <RefRow cmd={"(?!abc)"} desc={"Negative lookahead"} />
            <RefRow cmd={"(?<=abc)"} desc={"Positive lookbehind"} />
            <RefRow cmd={"(?<!abc)"} desc={"Negative lookbehind"} />
            <Bullet>Lookaheads are <strong>unlimited length</strong> in all engines</Bullet>
            <Bullet>Lookarounds match a position, not characters — they don{"'"}t consume input</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.dark, marginBottom: 4 }}>Lookbehind length restrictions by engine:</div>
              <KV k="JavaScript (V8)" v="Variable-length (full regex allowed)" />
              <KV k=".NET" v="Variable-length (full regex allowed)" />
              <KV k="Java 13+" v="Variable-length (but may be buggy with unbounded quantifiers)" />
              <KV k="Python re" v="Fixed-length only" />
              <KV k="PCRE2 10.43+" v="Variable-length with an upper bound" />
              <KV k="Perl / older PCRE" v="Fixed-length only" />
            </div>
          </SectionCard>

          {/* Section 9: Flags / Modifiers */}
          <SectionCard number="9" title="Flags / Modifiers">
            <RefRow cmd={"i"} desc={"Case-insensitive matching"} />
            <RefRow cmd={"g"} desc={"Global — find all matches (JS)"} />
            <RefRow cmd={"m"} desc={"Multiline — ^ and $ match line boundaries"} />
            <RefRow cmd={"s"} desc={"Dotall — . matches newlines too"} />
            <RefRow cmd={"u"} desc={"Unicode — full Unicode matching (JS)"} />
            <RefRow cmd={"x"} desc={"Extended — ignore whitespace, allow # comments"} />
            <Bullet>JS syntax: <code>/pattern/flags</code></Bullet>
            <Bullet>Python: <code>{'re.compile(r"pattern", re.IGNORECASE | re.DOTALL)'}</code></Bullet>
            <Bullet>Inline modifiers: <code>{'(?i)'}</code> enables case-insensitive for the rest of the pattern (Java, PCRE, Python)</Bullet>
          </SectionCard>

          {/* Section 10: Common Patterns */}
          <SectionCard number="10" title="Common Patterns">
            <Code>{`# Email (simplified)
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}

# IPv4 address
(?:\\d{1,3}\\.){3}\\d{1,3}

# URL (http/https)
https?://[^\\s/$.?#][^\\s]*

# ISO date (YYYY-MM-DD)
\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])`}</Code>
            <Bullet>These are <strong>practical patterns</strong>, not RFC-strict validators</Bullet>
            <Bullet>For production use, prefer dedicated parsers (URL, email) over regex</Bullet>
            <Bullet>Always test with edge cases before deploying to production</Bullet>
          </SectionCard>

          {/* Section 11: The Dot & Special Escapes */}
          <SectionCard number="11" title="The Dot & Special Escapes">
            <RefRow cmd={"."} desc={"Any char except newline (unless /s flag)"} />
            <RefRow cmd={'\\t'} desc={"Tab"} />
            <RefRow cmd={'\\n'} desc={"Newline (line feed)"} />
            <RefRow cmd={'\\r'} desc={"Carriage return"} />
            <RefRow cmd={'\\f'} desc={"Form feed"} />
            <RefRow cmd={'\\v'} desc={"Vertical tab"} />
            <RefRow cmd={'\\0'} desc={"Null character"} />
            <RefRow cmd={'\\xHH'} desc={"Hex character (e.g., \\x41 = A)"} />
            <RefRow cmd={'\\uHHHH'} desc={"Unicode code point (JS, Java)"} />
            <Bullet>With <code>/s</code> (dotall), <code>.</code> matches newlines too</Bullet>
          </SectionCard>

          {/* Section 12: Unicode & Properties */}
          <SectionCard number="12" title="Unicode & Properties">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">JS /u flag</Tag>
              <Tag color="#2a7a7a">Python 3</Tag>
              <Tag color="#3a6ea5">Java</Tag>
            </div>
            <RefRow cmd={'\\p{L}'} desc={"Any Unicode letter"} />
            <RefRow cmd={'\\p{N}'} desc={"Any Unicode number"} />
            <RefRow cmd={'\\p{Lu}'} desc={"Uppercase letter"} />
            <RefRow cmd={'\\p{Ll}'} desc={"Lowercase letter"} />
            <RefRow cmd={'\\p{Script=Greek}'} desc={"Greek script characters"} />
            <Bullet>JS requires <code>/u</code> or <code>/v</code> flag for <code>{'\\p{...}'}</code> to work</Bullet>
            <Bullet>Python 3 <code>re</code> module: use <code>{'\\w'}</code> for Unicode word chars (default), or <code>re.ASCII</code> flag for ASCII-only</Bullet>
            <Bullet>Java: <code>{'\\p{IsLatin}'}</code>, <code>{'\\p{InGreek}'}</code> — uses <code>Is</code>/<code>In</code> prefix convention</Bullet>
            <Bullet>.NET: full Unicode category and block support built in</Bullet>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced & Engine-Specific */}
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
          {/* Section 13: JavaScript Regex API */}
          <SectionCard number="13" title="JavaScript Regex API">
            <Code>{`// Test for match (boolean)
/pattern/.test(str)

// First match with details
str.match(/pattern/)

// All matches (requires /g flag!)
str.matchAll(/pattern/g)

// Replace first / all
str.replace(/pat/, 'new')
str.replace(/pat/g, 'new')
str.replaceAll(/pat/g, 'new')`}</Code>
            <Bullet><code>matchAll()</code> and <code>replaceAll()</code> <strong>require the <code>/g</code> flag</strong> — throws TypeError without it</Bullet>
            <Bullet><code>match()</code> with <code>/g</code> returns array of all match strings (no capture groups)</Bullet>
            <Bullet><code>matchAll()</code> returns an iterator of full match objects including groups</Bullet>
          </SectionCard>

          {/* Section 14: JS Named Group Replacement */}
          <SectionCard number="14" title="JS Named Group Replacement">
            <Code>{`// Named groups in replace use $<name>
'2026-03-11'.replace(
  /(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/,
  '$<m>/$<d>/$<y>'
)
// => '03/11/2026'

// Numbered groups use $1, $2, ...
'hello world'.replace(
  /(hello) (world)/,
  '$2 $1'
)
// => 'world hello'`}</Code>
            <Bullet>Named replacement syntax is <code>{'$<name>'}</code> — NOT <code>{'${name}'}</code></Bullet>
            <Bullet>In a replacer function, named groups are in the <code>groups</code> parameter (last arg)</Bullet>
            <Bullet><code>{'$&'}</code> inserts the full match, <code>{"$`"}</code> inserts text before match</Bullet>
            <Bullet>Use <code>{'$$'}</code> to insert a literal dollar sign in replacement string</Bullet>
          </SectionCard>

          {/* Section 15: Python re Module */}
          <SectionCard number="15" title="Python re Module">
            <Code>{`import re

re.search(r'pattern', string)
re.match(r'pattern', string)   # anchored at start
re.findall(r'pattern', string) # list of matches
re.finditer(r'pattern', string)# iterator
re.sub(r'pat', 'repl', string) # replace
re.split(r'pat', string)       # split`}</Code>
            <Bullet><strong>Always use raw strings</strong> (<code>r"..."</code>) for patterns to avoid backslash issues</Bullet>
            <Bullet>Named group replacement uses <code>{'\\g<name>'}</code> syntax in <code>re.sub()</code></Bullet>
            <Bullet><code>re.match()</code> only matches at the start of string — use <code>re.search()</code> for anywhere</Bullet>
            <Bullet>Python named groups use <code>{'(?P<name>...)'}</code> — note the <code>P</code></Bullet>
          </SectionCard>

          {/* Section 16: Greedy vs Lazy */}
          <SectionCard number="16" title="Greedy vs Lazy Matching">
            <Code>{`# Greedy: matches as MUCH as possible
<.*>   on "<b>bold</b>"
       matches: "<b>bold</b>"

# Lazy: matches as LITTLE as possible
<.*?>  on "<b>bold</b>"
       matches: "<b>" then "</b>"`}</Code>
            <Bullet><strong>Greedy</strong> (<code>{'*  +  ?'}</code>) — expands first, backtracks to find a match</Bullet>
            <Bullet><strong>Lazy</strong> (<code>{'*?  +?  ??'}</code>) — starts minimal, expands as needed</Bullet>
            <Bullet><strong>Possessive</strong> (<code>{'*+  ++  ?+'}</code>) — never backtracks (Java, PCRE, Python 3.11+)</Bullet>
            <Bullet>When possible, prefer specific character classes (<code>{'[^>]*'}</code>) over lazy dot-star</Bullet>
          </SectionCard>

          {/* Section 17: Backreferences */}
          <SectionCard number="17" title="Backreferences in Patterns">
            <Code>{`# Match repeated word
\\b(\\w+)\\s+\\1\\b
# Matches: "the the", "is is"

# Named backreference
(?P<word>\\w+)\\s+(?P=word)   # Python
(?<word>\\w+)\\s+\\k<word>    # JS, Java`}</Code>
            <Bullet>Backreferences match the <strong>same text</strong> previously captured, not the same pattern</Bullet>
            <Bullet><code>{'\\1'}</code> through <code>{'\\9'}</code> are backrefs; beyond 9, use <code>{'\\k<name>'}</code> or named groups</Bullet>
            <Bullet>Backreferences inside character classes <code>{'[\\1]'}</code> don{"'"}t work — they match the literal character</Bullet>
            <Bullet>Avoid backreferences in performance-critical code — they prevent many optimizations</Bullet>
          </SectionCard>

          {/* Section 18: Replacement Strings by Engine */}
          <SectionCard number="18" title="Replacement Strings by Engine">
            {[
              { engine: "JavaScript", numbered: "$1, $2", named: "$<name>", full: "$&" },
              { engine: "Python", numbered: "\\1, \\2", named: "\\g<name>", full: "\\g<0>" },
              { engine: "Java", numbered: "$1, $2", named: "${name}", full: "$0" },
              { engine: "PCRE/PHP", numbered: "$1 or \\1", named: "${name}", full: "$0" },
            ].map(({ engine, numbered, named, full }, i) => (
              <div
                key={engine}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 70 }}>{engine}</span>
                <span style={{ fontSize: 10.5, color: palette.mid, flex: 1 }}>
                  <strong>Num:</strong> <code>{numbered}</code>{" · "}
                  <strong>Named:</strong> <code>{named}</code>{" · "}
                  <strong>Full:</strong> <code>{full}</code>
                </span>
              </div>
            ))}
            <Bullet>JS uses <code>{'$<name>'}</code> — not <code>{'${name}'}</code> (that{"'"}s JS template literal syntax, not regex)</Bullet>
            <Bullet>Python uses <code>{'\\g<name>'}</code> — the <code>{'\\g<>'}</code> wrapper disambiguates from literal text</Bullet>
          </SectionCard>

          {/* Section 19: Lookaround Recipes */}
          <SectionCard number="19" title="Lookaround Recipes">
            <Code>{`# Password: 8+ chars, uppercase, digit
^(?=.*[A-Z])(?=.*\\d).{8,}$

# Number with commas (1,000,000)
\\d{1,3}(?=(?:\\d{3})+(?!\\d))

# Extract value after label
(?<=Price: )\\d+\\.\\d{2}

# Word NOT preceded by "un"
(?<!un)happy`}</Code>
            <Bullet>Stack multiple lookaheads at <code>^</code> for password-style rules</Bullet>
            <Bullet>Lookaheads are great for <strong>formatting without replacing</strong> (e.g., comma insertion)</Bullet>
            <Bullet>Negative lookbehind is perfect for excluding specific prefixes</Bullet>
            <Bullet>All lookaheads support variable length in every engine</Bullet>
          </SectionCard>

          {/* Section 20: Atomic Groups & Possessive */}
          <SectionCard number="20" title="Atomic Groups & Performance">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Backtracking</Tag>
              <Tag color="#5a8a3c">Optimization</Tag>
            </div>
            <Code>{`# Atomic group (Java, PCRE, Python 3.11+)
(?>abc|ab)c    # tries "abc" only

# Possessive quantifier (same engines)
a++b           # never backtracks on a+

# Catastrophic backtracking example:
(a+)+b  on "aaaaaaaac"  # exponential!`}</Code>
            <Bullet><strong>Atomic groups</strong> <code>{'(?>...)'}</code> discard backtrack positions once matched</Bullet>
            <Bullet>Possessive <code>++</code> is shorthand for <code>{'(?>a+)'}</code></Bullet>
            <Bullet>Python 3.11+ added both <code>{'(?>...)'}</code> and possessive quantifiers to the <code>re</code> module</Bullet>
            <Bullet>Use these to prevent <strong>catastrophic backtracking</strong> (ReDoS attacks)</Bullet>
          </SectionCard>

          {/* Section 21: Named Group Syntax by Engine */}
          <SectionCard number="21" title="Named Group Syntax by Engine">
            {[
              { engine: "JavaScript", define: "(?<name>...)", backref: "\\k<name>", repl: "$<name>" },
              { engine: "Python", define: "(?P<name>...)", backref: "(?P=name)", repl: "\\g<name>" },
              { engine: "Java", define: "(?<name>...)", backref: "\\k<name>", repl: "${name}" },
              { engine: "PCRE/PHP", define: "(?<name>...) or (?P<name>...)", backref: "\\k<name> or (?P=name)", repl: "${name}" },
              { engine: ".NET", define: "(?<name>...) or (?'name'...)", backref: "\\k<name>", repl: "${name}" },
            ].map(({ engine, define, backref, repl }, i) => (
              <div
                key={engine}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ fontWeight: 900, color: palette.accent, fontSize: 11 }}>{engine}</div>
                <div style={{ fontSize: 10.5, color: palette.mid }}>
                  <strong>Define:</strong> <code>{define}</code>
                </div>
                <div style={{ fontSize: 10.5, color: palette.mid }}>
                  <strong>Backref:</strong> <code>{backref}</code> · <strong>Replace:</strong> <code>{repl}</code>
                </div>
              </div>
            ))}
          </SectionCard>

          {/* Section 22: Inline Modifiers & Non-Capturing Features */}
          <SectionCard number="22" title="Inline Modifiers & Comments">
            <RefRow cmd={"(?i)"} desc={"Case-insensitive from here on"} />
            <RefRow cmd={"(?i:abc)"} desc={"Case-insensitive for abc only"} />
            <RefRow cmd={"(?-i)"} desc={"Turn off case-insensitive"} />
            <RefRow cmd={"(?imsx)"} desc={"Enable multiple flags at once"} />
            <RefRow cmd={"(?#comment)"} desc={"Inline comment (PCRE, Python)"} />
            <Bullet>With <code>/x</code> (extended) flag: whitespace is ignored and <code>#</code> starts a comment</Bullet>
            <Bullet>JS has limited inline modifier support — prefer <code>/flags</code> syntax</Bullet>
            <Bullet>Scoped modifiers <code>{'(?i:...)'}</code> are supported in Java, PCRE, .NET, Python</Bullet>
            <Bullet>Use <code>/x</code> mode for long, complex patterns to improve readability</Bullet>
          </SectionCard>

          {/* Section 23: Engine Comparison */}
          <SectionCard number="23" title="Engine Comparison" span={2}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {[
                {
                  title: "JavaScript",
                  features: "Variable-length lookbehind, Unicode properties (/u), named groups, no atomic groups, no possessive quantifiers, no conditionals",
                  best: "Web, Node.js",
                },
                {
                  title: "Python re",
                  features: "Fixed-length lookbehind only, Unicode-aware by default, (?P<>) named groups, atomic groups & possessive (3.11+), conditionals",
                  best: "Scripting, data processing",
                },
                {
                  title: "Java",
                  features: "Variable-length lookbehind (13+, may be buggy), possessive quantifiers, atomic groups, Unicode properties, conditionals (not supported)",
                  best: "Enterprise, Android",
                },
                {
                  title: "PCRE2",
                  features: "Bounded variable-length lookbehind (10.43+), \\K (lookbehind alternative), atomic groups, possessive quantifiers, recursion, conditionals, callouts",
                  best: "PHP, grep -P, nginx",
                },
                {
                  title: ".NET",
                  features: "Full variable-length lookbehind, balancing groups, .NET named group syntax, atomic groups, conditionals",
                  best: "C#, PowerShell",
                },
                {
                  title: "Perl",
                  features: "Fixed-length lookbehind, \\K, possessive quantifiers, atomic groups, recursion, code interpolation (?{...}), conditionals",
                  best: "Text processing, sysadmin",
                },
              ].map(({ title, features, best }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{best}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{features}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Section 24: Quick Debugging Tips */}
          <SectionCard number="24" title="Quick Debugging Tips">
            <Bullet>Use <strong>regex101.com</strong> — shows match steps, explains patterns, tests in multiple engines</Bullet>
            <Bullet>Start simple: build your pattern <strong>one piece at a time</strong> and test each addition</Bullet>
            <Bullet>Watch out for <strong>greedy vs lazy</strong> — most unexpected behavior comes from greedy <code>.*</code></Bullet>
            <Bullet>If performance is slow, check for <strong>nested quantifiers</strong> like <code>{'(a+)+'}</code> — a ReDoS risk</Bullet>
            <Bullet>Remember that <code>{'\\b'}</code> depends on <code>{'\\w'}</code> definition — different in Unicode vs ASCII mode</Bullet>
            <Bullet>Always anchor patterns (<code>^...$</code>) when validating entire strings, not searching within them</Bullet>
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
          Covers JavaScript, Python, Java, PCRE, .NET, and Perl engines
        </span>
      </div>
    </div>
  );
}
