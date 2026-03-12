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
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>
      ○
    </span>
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
      }}
    >
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
  const pages = ["Page 1: Foundations", "Page 2: Applied"];

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
          Syntax · Patterns · Lookarounds · Flags · Common Recipes — Universal
          Edition
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 14,
          }}
        >
          {pages.map((label, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                background:
                  page === i
                    ? palette.accentLight
                    : "rgba(255,255,255,0.12)",
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
          {/* Section 1: Character Classes */}
          <SectionCard number="1" title="Character Classes">
            <RefRow cmd="." desc="Any character except newline" />
            <RefRow cmd="\d" desc="Digit [0-9]" />
            <RefRow cmd="\D" desc="Non-digit [^0-9]" />
            <RefRow cmd="\w" desc="Word char [a-zA-Z0-9_]" />
            <RefRow cmd="\W" desc="Non-word character" />
            <RefRow cmd="\s" desc="Whitespace [ \t\n\r\f\v]" />
            <RefRow cmd="\S" desc="Non-whitespace" />
            <RefRow cmd="[abc]" desc="Any of a, b, or c" />
            <RefRow cmd="[^abc]" desc="Not a, b, or c" />
            <RefRow cmd="[a-z]" desc="Range: a through z" />
            <RefRow cmd="[a-zA-Z]" desc="Any letter" />
          </SectionCard>

          {/* Section 2: Anchors & Boundaries */}
          <SectionCard number="2" title="Anchors & Boundaries">
            <RefRow cmd="^" desc="Start of string (or line with m flag)" />
            <RefRow cmd="$" desc="End of string (or line with m flag)" />
            <RefRow cmd="\b" desc="Word boundary" />
            <RefRow cmd="\B" desc="Non-word boundary" />
            <RefRow cmd="\A" desc="Start of string (never line)" />
            <RefRow cmd="\Z" desc="End of string (before final \n)" />
            <RefRow cmd="\z" desc="Absolute end of string" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Tip:</strong>{" "}
                {`\\b matches between \\w and \\W. Use \\bword\\b to match whole words only.`}
              </div>
            </div>
          </SectionCard>

          {/* Section 3: Quantifiers */}
          <SectionCard number="3" title="Quantifiers">
            <RefRow cmd="*" desc="0 or more (greedy)" />
            <RefRow cmd="+" desc="1 or more (greedy)" />
            <RefRow cmd="?" desc="0 or 1 (optional)" />
            <RefRow cmd="{3}" desc="Exactly 3" />
            <RefRow cmd="{2,5}" desc="Between 2 and 5" />
            <RefRow cmd="{3,}" desc="3 or more" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Lazy:</strong> Append{" "}
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: palette.accent,
                  }}
                >
                  ?
                </code>{" "}
                to any quantifier for non-greedy matching:{" "}
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: palette.accent,
                  }}
                >
                  {"*? +? ?? {2,5}?"}
                </code>
              </div>
            </div>
          </SectionCard>

          {/* Section 4: Greedy vs Lazy */}
          <SectionCard number="4" title="Greedy vs Lazy Matching">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Greedy matches as much as possible; lazy matches as little as
              possible.
            </div>
            <Code>{`Input: <em>hello</em> <em>world</em>

Greedy:  <.*>   → "<em>hello</em> <em>world</em>"
Lazy:    <.*?>  → "<em>"

Greedy:  ".+"   → "hello</em> <em>world"
Lazy:    ".+?"  → "hello"`}</Code>
            <Bullet>
              <strong>Default is greedy</strong> — quantifiers grab the longest
              possible match
            </Bullet>
            <Bullet>
              <strong>Lazy (non-greedy)</strong> — add <code>?</code> after
              quantifier for shortest match
            </Bullet>
          </SectionCard>

          {/* Section 5: Groups & Capturing */}
          <SectionCard number="5" title="Groups & Capturing">
            <RefRow cmd="(abc)" desc="Capture group" />
            <RefRow cmd="(?:abc)" desc="Non-capturing group" />
            <RefRow cmd="(?<name>abc)" desc="Named capture group" />
            <RefRow cmd="(a|b)" desc="Alternation inside group" />
            <RefRow cmd="(?P<name>...)" desc="Named group (Python syntax)" />
            <Code>{`/(\\d{4})-(\\d{2})-(\\d{2})/
Match "2024-03-15"
  Group 1: "2024"
  Group 2: "03"
  Group 3: "15"`}</Code>
          </SectionCard>

          {/* Section 6: Backreferences */}
          <SectionCard number="6" title="Backreferences">
            <RefRow cmd="\1" desc="Reference to group 1" />
            <RefRow cmd="\2" desc="Reference to group 2" />
            <RefRow cmd="\k<name>" desc="Reference to named group" />
            <RefRow cmd="$1" desc="Group 1 in replacement string" />
            <RefRow cmd="$&" desc="Entire match in replacement" />
            <Code>{`# Find repeated words
/(\\b\\w+)\\s+\\1\\b/

# Swap first/last name
s/(\\w+) (\\w+)/$2, $1/`}</Code>
          </SectionCard>

          {/* Section 7: Lookahead & Lookbehind */}
          <SectionCard number="7" title="Lookahead & Lookbehind">
            <RefRow cmd="(?=...)" desc="Positive lookahead" />
            <RefRow cmd="(?!...)" desc="Negative lookahead" />
            <RefRow cmd="(?<=...)" desc="Positive lookbehind" />
            <RefRow cmd="(?<!...)" desc="Negative lookbehind" />
            <Code>{`# Price without $ sign
/(?<=\\$)\\d+\\.\\d{2}/

# Word NOT followed by "ing"
/\\b\\w+(?!ing)\\b/

# Password: has digit + uppercase
/^(?=.*\\d)(?=.*[A-Z]).{8,}$/`}</Code>
          </SectionCard>

          {/* Section 8: Alternation & Logic */}
          <SectionCard number="8" title="Alternation & Logic">
            <RefRow cmd="a|b" desc="Match a or b" />
            <RefRow cmd="(a|b|c)" desc="Group alternation" />
            <RefRow cmd="(?:a|b)" desc="Non-capturing alternation" />
            <Bullet>
              <strong>Alternation has lowest precedence</strong> — use groups to
              scope it
            </Bullet>
            <Bullet>
              <code>cat|dog</code> matches {"\"cat\" or \"dog\""}, not{" "}
              {"\"ca(t|d)og\""}
            </Bullet>
            <Bullet>
              Engine tries alternatives <strong>left to right</strong> and stops
              at first match
            </Bullet>
            <Code>{`# Match file extensions
/\\.(jpg|jpeg|png|gif|svg)$/i

# Match protocols
/^(https?|ftp|ssh):\\/\\//`}</Code>
          </SectionCard>

          {/* Section 9: Flags / Modifiers */}
          <SectionCard number="9" title="Flags / Modifiers">
            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <Tag>JS</Tag>
              <Tag color="#5a8a3c">Python</Tag>
              <Tag color="#3a6ea5">PCRE</Tag>
            </div>
            <RefRow cmd="g" desc="Global — find all matches" />
            <RefRow cmd="i" desc="Case-insensitive matching" />
            <RefRow cmd="m" desc="Multiline — ^ $ match line start/end" />
            <RefRow cmd="s" desc="Dotall — dot matches newline too" />
            <RefRow cmd="u" desc="Unicode mode (JS/PCRE)" />
            <RefRow cmd="x" desc="Extended — allows comments & whitespace" />
            <RefRow cmd="d" desc="Indices — capture group positions (JS)" />
            <Code>{`/pattern/gim       # JS
re.compile(r"...", re.I|re.M)  # Python`}</Code>
          </SectionCard>

          {/* Section 10: Special Characters to Escape */}
          <SectionCard number="10" title="Characters to Escape">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              These metacharacters must be escaped with{" "}
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: palette.accent,
                }}
              >
                \
              </code>{" "}
              to match literally:
            </div>
            <div
              style={{
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
                marginBottom: 8,
              }}
            >
              {[
                ".",
                "^",
                "$",
                "*",
                "+",
                "?",
                "(",
                ")",
                "[",
                "]",
                "{",
                "}",
                "|",
                "\\",
              ].map((c) => (
                <Tag key={c} color="#7a5a8a">
                  {c}
                </Tag>
              ))}
            </div>
            <Bullet>
              Inside <code>[ ]</code> character class, only <code>\</code>,{" "}
              <code>]</code>, <code>^</code>, <code>-</code> need escaping
            </Bullet>
            <Bullet>
              <strong>Tip:</strong> In character classes, <code>.</code>,{" "}
              <code>*</code>, <code>+</code> are literal (no escape needed)
            </Bullet>
            <Bullet>
              Use raw strings in Python (<code>r"..."</code>) to avoid double-escaping backslashes
            </Bullet>
            <Bullet>
              <code>{`\\Q...\\E`}</code> quotes everything between as literal (PCRE/Java)
            </Bullet>
          </SectionCard>

          {/* Section 11: POSIX Classes */}
          <SectionCard number="11" title="POSIX & Unicode Classes">
            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#3a6ea5">POSIX</Tag>
              <Tag color="#2a7a7a">Unicode</Tag>
            </div>
            <RefRow cmd="[:alpha:]" desc="Alphabetic characters" />
            <RefRow cmd="[:digit:]" desc="Digits [0-9]" />
            <RefRow cmd="[:alnum:]" desc="Alphanumeric [alpha + digit]" />
            <RefRow cmd="[:space:]" desc="Whitespace characters" />
            <RefRow cmd="[:upper:]" desc="Uppercase letters" />
            <RefRow cmd="[:lower:]" desc="Lowercase letters" />
            <RefRow cmd="[:punct:]" desc="Punctuation characters" />
            <div style={{ marginTop: 6 }}>
              <KV k={"\\p{L}"} v="Any Unicode letter" />
              <KV k={"\\p{N}"} v="Any Unicode number" />
              <KV k={"\\p{Emoji}"} v="Emoji characters (with u flag)" />
            </div>
          </SectionCard>

          {/* Section 12: Inline Modifiers & Atomic Groups */}
          <SectionCard number="12" title="Inline & Advanced Syntax">
            <RefRow cmd="(?i)" desc="Turn on case-insensitive inline" />
            <RefRow cmd="(?-i)" desc="Turn off case-insensitive inline" />
            <RefRow cmd="(?i:abc)" desc="Case-insensitive for group only" />
            <RefRow cmd="(?>...)" desc="Atomic group (no backtrack)" />
            <RefRow cmd="(?#...)" desc="Inline comment" />
            <Code>{`# Conditional pattern (PCRE)
(?(1)yes|no)  # if group 1 matched

# Branch reset (PCRE)
(?|( a)|( b))  # both in group 1

# Subroutine call (PCRE)
(?1)  # re-match group 1 pattern`}</Code>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Applied */}
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
          {/* Section 13: Common Patterns */}
          <SectionCard number="13" title="Common Patterns" span={2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <div>
                <KV k="Email" v="" />
                <Code>{`[a-zA-Z0-9._%+-]+@
[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}`}</Code>
              </div>
              <div>
                <KV k="URL" v="" />
                <Code>{`https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+
[\\w.,@?^=%&:/~+#-]*`}</Code>
              </div>
              <div>
                <KV k="IPv4 Address" v="" />
                <Code>{`\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b`}</Code>
              </div>
              <div>
                <KV k="ISO Date (YYYY-MM-DD)" v="" />
                <Code>{`\\d{4}-(?:0[1-9]|1[0-2])-
(?:0[1-9]|[12]\\d|3[01])`}</Code>
              </div>
              <div>
                <KV k="Phone (US)" v="" />
                <Code>{`\\(?\\d{3}\\)?[-.\\s]?\\d{3}
[-.\\s]?\\d{4}`}</Code>
              </div>
              <div>
                <KV k="Hex Color" v="" />
                <Code>{`#(?:[0-9a-fA-F]{3}){1,2}\\b`}</Code>
              </div>
            </div>
          </SectionCard>

          {/* Section 14: JavaScript Methods */}
          <SectionCard number="14" title="JavaScript Methods">
            <RefRow cmd=".test(str)" desc="Returns true/false" />
            <RefRow cmd=".exec(str)" desc="Returns match array or null" />
            <RefRow cmd="str.match(re)" desc="All matches (with g) or first" />
            <RefRow cmd="str.matchAll(re)" desc="Iterator of all matches" />
            <RefRow cmd="str.replace()" desc="Replace first or all (with g)" />
            <RefRow cmd="str.replaceAll()" desc="Replace all occurrences" />
            <RefRow cmd="str.search(re)" desc="Index of first match or -1" />
            <RefRow cmd="str.split(re)" desc="Split string by pattern" />
            <Code>{`const re = /(?<year>\\d{4})/;
const m = re.exec("2024-03");
m.groups.year  // "2024"
m.index        // 0`}</Code>
          </SectionCard>

          {/* Section 15: Python Methods */}
          <SectionCard number="15" title="Python re Module">
            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <Tag color="#5a8a3c">Python</Tag>
            </div>
            <RefRow cmd="re.search()" desc="Find first match anywhere" />
            <RefRow cmd="re.match()" desc="Match at start of string only" />
            <RefRow cmd="re.fullmatch()" desc="Match entire string" />
            <RefRow cmd="re.findall()" desc="List of all matches" />
            <RefRow cmd="re.finditer()" desc="Iterator of match objects" />
            <RefRow cmd="re.sub()" desc="Replace matches" />
            <RefRow cmd="re.split()" desc="Split by pattern" />
            <RefRow cmd="re.compile()" desc="Pre-compile for reuse" />
            <Code>{`import re
m = re.search(r'(?P<y>\\d{4})', s)
m.group('y')    # named group
m.span()        # (start, end)`}</Code>
          </SectionCard>

          {/* Section 16: Character Class Tricks */}
          <SectionCard number="16" title="Character Class Tricks">
            <Bullet>
              <code>[^\\n]</code> matches any character except newline (same as{" "}
              <code>.</code> without <code>s</code> flag)
            </Bullet>
            <Bullet>
              <code>[\\s\\S]</code> matches <strong>any character including newline</strong> — works everywhere
            </Bullet>
            <Bullet>
              <code>[\\d\\D]</code> also matches everything — useful when <code>.</code> won't do
            </Bullet>
            <Bullet>
              <code>[-abc]</code> — put hyphen first or last to match it literally
            </Bullet>
            <Bullet>
              <code>[\\]]</code> — escape closing bracket inside a class
            </Bullet>
            <Bullet>
              <code>[a-z&&[^aeiou]]</code> — intersection: consonants only (Java)
            </Bullet>
            <Code>{`# Match any whitespace/non-ws
[\\s\\S]*     # like .* with s flag

# ASCII-only digits (not Unicode)
[0-9] vs \\d  # \\d may match more

# Negated ranges
[^a-zA-Z]    # anything not a letter`}</Code>
          </SectionCard>

          {/* Section 17: Substitution & Replacement */}
          <SectionCard number="17" title="Replacement Syntax">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Special tokens available in replacement strings:
            </div>
            <RefRow cmd="$1 or \1" desc="First capture group" />
            <RefRow cmd="$2 or \2" desc="Second capture group" />
            <RefRow cmd="$&" desc="Entire matched string" />
            <RefRow cmd="$`" desc="Text before the match" />
            <RefRow cmd="$'" desc="Text after the match" />
            <RefRow cmd="$+" desc="Last captured group (Perl)" />
            <RefRow cmd="$$" desc="Literal dollar sign" />
            <Code>{`# JS: Wrap matches in tags
str.replace(/(\\w+)/g, '<b>$1</b>')

# Python: Use \\g<name> for named
re.sub(r'(?P<w>\\w+)', r'<b>\\g<w></b>', s)

# Callback (JS)
str.replace(/\\d+/g, m => m * 2)`}</Code>
          </SectionCard>

          {/* Section 18: Performance Tips */}
          <SectionCard number="18" title="Performance Tips">
            <Bullet>
              <strong>Anchor when possible</strong> — <code>^</code> prevents engine from
              retrying at every position
            </Bullet>
            <Bullet>
              <strong>Be specific</strong> — <code>[0-9]</code> is faster than{" "}
              <code>.</code> with backtracking
            </Bullet>
            <Bullet>
              <strong>Avoid nested quantifiers</strong> — <code>(a+)+</code> causes
              catastrophic backtracking
            </Bullet>
            <Bullet>
              <strong>Use non-capturing groups</strong> — <code>(?:...)</code> when you
              don't need the match
            </Bullet>
            <Bullet>
              <strong>Compile once</strong> — reuse compiled regex objects in loops
            </Bullet>
            <Bullet>
              <strong>Atomic groups</strong> — <code>(?>...)</code> prevent backtracking
              into the group
            </Bullet>
            <Bullet>
              <strong>Possessive quantifiers</strong> — <code>{"a++"}</code> never gives back
              matched chars (Java/PCRE)
            </Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Danger:</strong>{" "}
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: palette.accent,
                  }}
                >
                  {"(a|a)+"}
                </code>
                {" "}and{" "}
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: palette.accent,
                  }}
                >
                  {"(a+)+"}
                </code>
                {" "}cause exponential time on non-matching input. Always test with worst-case strings.
              </div>
            </div>
          </SectionCard>

          {/* Section 19: Quick Decision Guide */}
          <SectionCard number="19" title="Regex Engine Flavors at a Glance" span={3}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {[
                {
                  title: "JavaScript",
                  when: "Web & Node.js",
                  best: "Named groups, matchAll, lookbehind (ES2018+). No atomic groups or possessive quantifiers.",
                  icon: "JS",
                },
                {
                  title: "Python re",
                  when: "Scripts & Data",
                  best: "Named groups (?P<>), re.VERBOSE for readable patterns. No possessive or atomic.",
                  icon: "PY",
                },
                {
                  title: "PCRE / PHP",
                  when: "Full Featured",
                  best: "Atomic groups, possessive quantifiers, recursion, conditionals, branch reset. Gold standard.",
                  icon: "PC",
                },
                {
                  title: "POSIX ERE",
                  when: "Shell & grep -E",
                  best: "No lookahead/behind, no lazy quantifiers. Use grep -P for PCRE or switch tools.",
                  icon: "SH",
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
                  <div
                    style={{
                      fontSize: 14,
                      marginBottom: 4,
                      fontWeight: 900,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: palette.accent,
                    }}
                  >
                    {icon}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: palette.dark,
                    }}
                  >
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
                  <div
                    style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}
                  >
                    {best}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Section 20: Testing & Debugging */}
          <SectionCard number="20" title="Testing & Debugging">
            <Bullet>
              <strong>regex101.com</strong> — test with PCRE, JS, Python, Go engines with explanation
            </Bullet>
            <Bullet>
              <strong>regexr.com</strong> — visual regex editor with community patterns
            </Bullet>
            <Bullet>
              <strong>debuggex.com</strong> — railroad diagram visualization
            </Bullet>
            <Bullet>
              Build incrementally — start simple, add complexity one piece at a time
            </Bullet>
            <Bullet>
              Test edge cases: empty strings, very long input, Unicode, and special chars
            </Bullet>
            <Bullet>
              Use <code>x</code> flag (verbose/extended) to add comments to complex patterns
            </Bullet>
            <Code>{`# Python verbose mode
re.compile(r"""
  ^(?P<proto>https?)  # protocol
  ://                 # separator
  (?P<host>[\\w.-]+)   # hostname
  (?::(?P<port>\\d+))? # optional port
""", re.VERBOSE)`}</Code>
          </SectionCard>

          {/* Section 21: Escape Sequences */}
          <SectionCard number="21" title="Escape Sequences">
            <RefRow cmd="\t" desc="Tab character" />
            <RefRow cmd="\n" desc="Newline (line feed)" />
            <RefRow cmd="\r" desc="Carriage return" />
            <RefRow cmd="\f" desc="Form feed" />
            <RefRow cmd="\v" desc="Vertical tab" />
            <RefRow cmd="\0" desc="Null character" />
            <RefRow cmd="\xFF" desc="Hex character (2 digits)" />
            <RefRow cmd="\uFFFF" desc="Unicode char (4 digits)" />
            <RefRow cmd={`\\u{1F600}`} desc="Unicode code point (ES6+)" />
            <RefRow cmd="\cX" desc="Control character (Ctrl+X)" />
          </SectionCard>

          {/* Section 22: Useful One-Liners */}
          <SectionCard number="22" title="Useful One-Liners" span={2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 6,
              }}
            >
              {[
                { label: "Trim whitespace", pat: `s/^\\s+|\\s+$//g` },
                { label: "Remove HTML tags", pat: `s/<[^>]*>//g` },
                { label: "Extract numbers", pat: `/-?\\d+\\.?\\d*/g` },
                { label: "CamelCase to snake", pat: `s/([A-Z])/\\_$1/g` },
                { label: "Duplicate lines", pat: `/^(.*)$\\n\\1$/m` },
                { label: "Validate hex color", pat: `/^#([0-9a-f]{3}){1,2}$/i` },
                { label: "Match balanced quotes", pat: `/"([^"\\\\]|\\\\.)*"/` },
                { label: "Non-empty lines", pat: `/^.+$/gm` },
              ].map(({ label, pat }, i) => (
                <div
                  key={label}
                  style={{
                    padding: "5px 8px",
                    background:
                      i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                    marginBottom: 2,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: palette.dark,
                      marginBottom: 2,
                    }}
                  >
                    {label}
                  </div>
                  <code
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10.5,
                      color: palette.accent,
                    }}
                  >
                    {pat}
                  </code>
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
          Covers PCRE, JavaScript (ES2024), and Python 3.x flavors
        </span>
      </div>
    </div>
  );
}
