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
        width: 140,
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

export default function JqCheatsheet() {
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
          jq{" "}
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
          Command-Line JSON Processor · Filters · Transforms · Queries — v1.8
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

      {/* Page Content */}
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
        {page === 0 && (
          <>
            {/* Section 1: What is jq? */}
            <SectionCard number="1" title="What is jq?">
              <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
                A lightweight command-line JSON processor. Pipe JSON in, get transformed JSON out.
              </div>
              <Bullet><strong>Filters</strong> take input and produce output — everything is a filter</Bullet>
              <Bullet><strong>Generators</strong> produce multiple outputs (e.g., <code>.[]</code> yields each element)</Bullet>
              <Bullet>Uses <strong>Oniguruma</strong> regex engine (Perl v5.8 compatible)</Bullet>
              <Bullet>Current stable version: <strong>1.8</strong> (latest as of 2025)</Bullet>
              <Code>{`# Basic usage
echo '{"name":"Jo"}' | jq '.name'
# => "Jo"

curl api.example.com | jq '.'`}</Code>
            </SectionCard>

            {/* Section 2: Identity & Field Access */}
            <SectionCard number="2" title="Identity & Field Access">
              <RefRow cmd="." desc="Identity — pass input through unchanged" />
              <RefRow cmd=".foo" desc={"Access object key \"foo\""} />
              <RefRow cmd=".foo.bar" desc="Nested field access" />
              <RefRow cmd={'.["key"]'} desc="Bracket notation (special chars in key)" />
              <RefRow cmd=".foo?" desc="Optional access — suppress errors if not object" />
              <RefRow cmd=".foo // null" desc="Alternative — default if .foo is false/null" />
              <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
                <Bullet>Missing keys return <code>null</code>, not an error</Bullet>
                <Bullet>Use <code>.["key with spaces"]</code> for non-identifier keys</Bullet>
              </div>
            </SectionCard>

            {/* Section 3: Array Indexing & Slicing */}
            <SectionCard number="3" title="Array Indexing & Slicing">
              <RefRow cmd=".[0]" desc="First element (zero-indexed)" />
              <RefRow cmd=".[-1]" desc="Last element" />
              <RefRow cmd=".[2:5]" desc="Slice from index 2 to 4 (exclusive end)" />
              <RefRow cmd=".[3:]" desc="From index 3 to end" />
              <RefRow cmd=".[:4]" desc="First 4 elements" />
              <Bullet>Out-of-range indices return <code>null</code></Bullet>
              <Bullet>Slicing works on both arrays and strings</Bullet>
              <Code>{`echo '"hello"' | jq '.[1:3]'
# => "el"`}</Code>
            </SectionCard>

            {/* Section 4: Iteration & Recursion */}
            <SectionCard number="4" title="Iteration & Recursion">
              <RefRow cmd=".[]" desc="Iterate all values (array elements or object values)" />
              <RefRow cmd=".foo[]" desc={'Chain: .foo then .[]'} />
              <RefRow cmd=".[]?" desc="Optional iterate — no error on non-iterable" />
              <RefRow cmd=".." desc="Recursive descent — all values at all depths" />
              <Bullet><code>.[]</code> on an object yields <strong>values only</strong> (not keys)</Bullet>
              <Bullet>Use <code>keys[]</code> to iterate object keys</Bullet>
              <Code>{`echo '[1,[2,[3]]]' | jq '.. | numbers'
# => 1, 2, 3`}</Code>
            </SectionCard>

            {/* Section 5: Pipe & Comma */}
            <SectionCard number="5" title="Pipe, Comma & Parentheses">
              <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
                Composing filters is the core of jq. Pipe chains them; comma runs them in parallel.
              </div>
              <KV k="|" v="Pipe — feed output of left filter into right filter" />
              <KV k="," v="Comma — produce outputs of both expressions (concatenate generators)" />
              <KV k="()" v="Parentheses — group expressions for precedence" />
              <Code>{`# Pipe: chain filters
.users[] | .name

# Comma: multiple outputs
.name, .age

# Parens: precedence
(.a + .b) * .c`}</Code>
            </SectionCard>

            {/* Section 6: Types & Type Checking */}
            <SectionCard number="6" title="Types & Type Checking">
              <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
                <Tag color="#3a6ea5">null</Tag>
                <Tag color="#5a8a3c">boolean</Tag>
                <Tag color="#7a5a8a">number</Tag>
                <Tag color="#8a6a3a">string</Tag>
                <Tag color="#2a7a7a">array</Tag>
                <Tag color="#a53a3a">object</Tag>
              </div>
              <RefRow cmd="type" desc={'Returns type as string: "number", "string", etc.'} />
              <RefRow cmd="length" desc="String chars, array elements, object keys, |n| for numbers" />
              <RefRow cmd="utf8bytelength" desc="Byte count in UTF-8 encoding" />
              <RefRow cmd="tostring" desc="Convert to string (strings pass through)" />
              <RefRow cmd="tonumber" desc="Parse string/number to number" />
              <div style={{ marginTop: 6 }}>
                <Bullet><strong>Type selectors:</strong> <code>arrays</code>, <code>objects</code>, <code>strings</code>, <code>numbers</code>, <code>booleans</code>, <code>nulls</code>, <code>values</code>, <code>scalars</code>, <code>iterables</code></Bullet>
              </div>
            </SectionCard>

            {/* Section 7: String Functions */}
            <SectionCard number="7" title="String Functions">
              <RefRow cmd="ascii_downcase" desc="Lowercase (ASCII a-z only)" />
              <RefRow cmd="ascii_upcase" desc="Uppercase (ASCII a-z only)" />
              <RefRow cmd="split(s)" desc={'Split string on separator s'} />
              <RefRow cmd="join(s)" desc="Join array into string with separator s" />
              <RefRow cmd="ltrimstr(s)" desc="Remove prefix s if present" />
              <RefRow cmd="rtrimstr(s)" desc="Remove suffix s if present" />
              <RefRow cmd="startswith(s)" desc="Boolean: starts with s?" />
              <RefRow cmd="endswith(s)" desc="Boolean: ends with s?" />
              <RefRow cmd="trim" desc="Remove leading/trailing whitespace (v1.8+)" />
              <RefRow cmd="explode" desc={'String to array of Unicode codepoints'} />
              <RefRow cmd="implode" desc="Array of codepoints back to string" />
              <Bullet>No <code>ascii</code> function exists — use <code>explode</code>/<code>implode</code> for codepoint work</Bullet>
            </SectionCard>

            {/* Section 8: String Interpolation */}
            <SectionCard number="8" title="String Interpolation">
              <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
                {'Embed expressions inside strings with \\(expr) syntax.'}
              </div>
              <Code>{`# Basic interpolation
"Hello \\(.name), age \\(.age)"

# With expressions
"Total: \\(.items | length) items"

# Nested interpolation (yes, it works!)
"\\("Dear \\(.name)")"

# With format strings
@uri "https://api.io/\\(.path)"
@html "<b>\\(.title)</b>"`}</Code>
              <Bullet>Any valid jq expression works inside <code>{'\\()'}</code></Bullet>
              <Bullet>Nesting is supported: inner <code>{'\\()'}</code> inside outer <code>{'\\()'}</code></Bullet>
              <Bullet>Format strings with interpolation escape only the interpolated parts</Bullet>
              <Bullet>Use <code>tojson</code> / <code>fromjson</code> for JSON encode/decode</Bullet>
            </SectionCard>

            {/* Section 9: Object Construction & Manipulation */}
            <SectionCard number="9" title="Object Construction">
              <Code>{`# Build objects
{name: .user, age: .years}

# Shorthand (key = field name)
{name, age}    # same as {name: .name, age: .age}

# Computed keys
{(.key): .value}

# Variable as key
{$var}   # {var: $var_value}`}</Code>
              <RefRow cmd="keys" desc="Sorted array of keys" />
              <RefRow cmd="keys_unsorted" desc="Keys in original order" />
              <RefRow cmd="values" desc="Array of all values" />
              <RefRow cmd="has(k)" desc="Boolean: key exists?" />
              <RefRow cmd="to_entries" desc={'To [{key, value}, ...]'} />
              <RefRow cmd="from_entries" desc={'From [{key, value}, ...] to object'} />
              <RefRow cmd="with_entries(f)" desc="to_entries | map(f) | from_entries" />
            </SectionCard>

            {/* Section 10: Arithmetic & Operators */}
            <SectionCard number="10" title="Arithmetic & Operators">
              {[
                { op: "+", desc: "Add numbers, concat strings/arrays, merge objects (right wins)" },
                { op: "-", desc: "Subtract numbers; array difference" },
                { op: "*", desc: "Multiply numbers; recursive object merge" },
                { op: "/", desc: "Divide numbers; split string on separator" },
                { op: "%", desc: "Modulo" },
              ].map(({ op, desc }, i) => (
                <div key={op} style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}>
                  <code style={{ fontWeight: 900, color: palette.accent, fontSize: 13, width: 28, fontFamily: "'JetBrains Mono', monospace" }}>{op}</code>
                  <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
                </div>
              ))}
              <Bullet><code>null</code> is identity for <code>+</code>: <code>null + "x"</code> gives <code>"x"</code></Bullet>
              <Bullet><code>"a/b/c" / "/"</code> splits to <code>["a","b","c"]</code></Bullet>
            </SectionCard>

            {/* Section 11: Comparison & Logic */}
            <SectionCard number="11" title="Comparison & Logic">
              <RefRow cmd="==  !=" desc="Equal / not equal" />
              <RefRow cmd={"<  >  <=  >="} desc="Ordering (by JSON type, then value)" />
              <RefRow cmd="and" desc="Logical AND (false/null are falsy)" />
              <RefRow cmd="or" desc="Logical OR" />
              <RefRow cmd="not" desc="Logical NOT (filter, not operator)" />
              <RefRow cmd="a // b" desc="Alternative: a unless false/null, then b" />
              <div style={{ marginTop: 6 }}>
                <Bullet><strong>Type ordering:</strong> null {'<'} false {'<'} true {'<'} numbers {'<'} strings {'<'} arrays {'<'} objects</Bullet>
                <Bullet><code>and</code>, <code>or</code>, <code>not</code> always produce <code>true</code>/<code>false</code></Bullet>
              </div>
            </SectionCard>

            {/* Section 12: Conditionals & Error Handling */}
            <SectionCard number="12" title="Conditionals & Errors">
              <Code>{`# If-then-else (else is optional)
if .age >= 18 then "adult"
elif .age >= 13 then "teen"
else "child" end

# Try-catch
try .foo.bar catch "fallback"

# try without catch = suppress errors
try .foo.bar

# select — keep or discard
.[] | select(.active == true)`}</Code>
              <Bullet><code>if</code> treats <code>false</code> and <code>null</code> as falsy; everything else is truthy</Bullet>
              <Bullet><code>?</code> suffix is shorthand for <code>try</code>: <code>.foo?</code> = <code>try .foo</code></Bullet>
              <Bullet><code>select(cond)</code> passes input through if cond is truthy, otherwise produces nothing</Bullet>
              <Bullet><code>empty</code> produces zero outputs (useful for filtering)</Bullet>
            </SectionCard>
          </>
        )}

        {page === 1 && (
          <>
            {/* Section 13: map, select & Filtering */}
            <SectionCard number="13" title="map, select & Filtering">
              <Code>{`# map — apply filter to each element
[1,2,3] | map(. * 2)        # [2,4,6]

# map_values — apply to values (object or array)
{"a":1,"b":2} | map_values(. + 10)

# select — filter elements
.[] | select(.price < 100)

# Combine: filter then transform
[.[] | select(.active) | .name]`}</Code>
              <KV k="map(f)" v="Equivalent to [.[] | f]" />
              <KV k="map_values(f)" v="Preserves keys for objects, applies f to each value" />
              <KV k="select(cond)" v="Output input only if cond is truthy" />
              <KV k="empty" v="Produce zero outputs — used to discard values" />
            </SectionCard>

            {/* Section 14: sort, group, unique */}
            <SectionCard number="14" title="sort_by, group_by, unique_by">
              <Code>{`# Sort by field
.users | sort_by(.age)

# Group by field (returns array of arrays)
.items | group_by(.category)

# Unique values
[1,2,1,3] | unique           # [1,2,3]

# Unique by field
.users | unique_by(.email)`}</Code>
              <RefRow cmd="sort" desc="Sort by JSON value ordering" />
              <RefRow cmd="sort_by(f)" desc="Sort by result of expression f" />
              <RefRow cmd="group_by(f)" desc="Group into sub-arrays by f result" />
              <RefRow cmd="unique" desc="Sorted array with duplicates removed" />
              <RefRow cmd="unique_by(f)" desc="One element per unique f result" />
              <RefRow cmd="reverse" desc="Reverse array order" />
              <RefRow cmd="min / max" desc="Smallest / largest element" />
              <RefRow cmd="min_by(f) / max_by(f)" desc="Min/max by expression result" />
            </SectionCard>

            {/* Section 15: Regex Functions */}
            <SectionCard number="15" title="Regex Functions">
              <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
                <Tag color="#3a6ea5">Oniguruma</Tag>
                <Tag color="#7a5a8a">PCRE-like</Tag>
              </div>
              <RefRow cmd="test(re)" desc="Boolean: does input match regex?" />
              <RefRow cmd="test(re; flags)" desc={'With flags: "ix" (ignore case, extended)'} />
              <RefRow cmd="match(re)" desc={'Object: {offset, length, string, captures}'} />
              <RefRow cmd="capture(re)" desc={'Object of named captures: {"name": "value"}'} />
              <RefRow cmd="scan(re)" desc="Emit stream of all matching substrings" />
              <RefRow cmd="sub(re; rep)" desc="Replace first match" />
              <RefRow cmd="gsub(re; rep)" desc="Replace all matches" />
              <Code>{`# Named capture groups
"2024-03-15" | capture(
  "(?<y>\\\\d+)-(?<m>\\\\d+)-(?<d>\\\\d+)"
)
# => {"y":"2024","m":"03","d":"15"}`}</Code>
            </SectionCard>

            {/* Section 16: Path Functions */}
            <SectionCard number="16" title="Path Functions">
              <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
                Paths are arrays of keys/indices representing locations in a JSON structure.
              </div>
              <RefRow cmd="path(expr)" desc="Get path array(s) matching expression" />
              <RefRow cmd="getpath(p)" desc="Get value at path array p" />
              <RefRow cmd="setpath(p; v)" desc="Set value at path p to v" />
              <RefRow cmd="delpaths(ps)" desc="Delete multiple paths (array of path arrays)" />
              <RefRow cmd="paths" desc="All paths (as arrays) to every value" />
              <RefRow cmd="paths(f)" desc="Paths where filter f is true" />
              <RefRow cmd="leaf_paths" desc="Paths to scalar/leaf values" />
              <Code>{`{"a":{"b":1}} | getpath(["a","b"])
# => 1

{"a":1} | setpath(["b"]; 2)
# => {"a":1,"b":2}`}</Code>
            </SectionCard>

            {/* Section 17: reduce & foreach */}
            <SectionCard number="17" title="reduce & foreach">
              <Code>{`# reduce — accumulate a single result
reduce .[] as $x (0; . + $x)
# Sums all elements

# foreach — emit intermediate values
foreach .[] as $x (0; . + $x)
# Emits running totals: 1, 3, 6, ...

# foreach with extract
foreach .[] as $item (
  0; . + $item; [., $item]
)`}</Code>
              <KV k="reduce EXPR as $var (INIT; UPDATE)" v="Thread state through iterations, output final value" />
              <KV k="foreach EXPR as $var (INIT; UPDATE)" v="Like reduce but emits each intermediate state" />
              <KV k="foreach ... (INIT; UPDATE; EXTRACT)" v="Custom extraction at each step" />
              <Bullet>Both bind each output of EXPR to <code>$var</code> and update state with <code>.</code></Bullet>
            </SectionCard>

            {/* Section 18: Advanced Iteration */}
            <SectionCard number="18" title="Advanced Iteration">
              <RefRow cmd="while(cond; update)" desc="Repeat update while cond true, emit all states" />
              <RefRow cmd="until(cond; next)" desc="Repeat next until cond true, emit final state" />
              <RefRow cmd="repeat(f)" desc="Apply f repeatedly until error" />
              <RefRow cmd="recurse(f)" desc="Apply f recursively, emit all values" />
              <RefRow cmd="recurse" desc={'Shorthand for recurse(.[]?)'} />
              <RefRow cmd="walk(f)" desc="Apply f bottom-up to every component" />
              <RefRow cmd="limit(n; expr)" desc="Output first n results of expr" />
              <RefRow cmd="first(expr)" desc="Output only the first result" />
              <RefRow cmd="last(expr)" desc="Output only the last result" />
              <RefRow cmd="isempty(expr)" desc="True if expr produces no outputs" />
              <RefRow cmd="range(n)" desc="Emit 0, 1, 2, ..., n-1" />
              <RefRow cmd="range(a; b; step)" desc="Emit a, a+step, ..., up to b" />
            </SectionCard>

            {/* Section 19: Math Functions */}
            <SectionCard number="19" title="Math Functions">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                {[
                  "floor — round down",
                  "ceil — round up",
                  "round — nearest int",
                  "abs — absolute value",
                  "fabs — float absolute value",
                  "sqrt — square root",
                  "log — natural log",
                  "log10 — base-10 log",
                  "pow(b;e) — exponentiation",
                  "exp — e^x",
                  "sin / cos / tan",
                  "asin / acos / atan",
                ].map(item => (
                  <div key={item} style={{ fontSize: 11.5, color: palette.mid }}>○ {item}</div>
                ))}
              </div>
              <div style={{ marginTop: 8 }}>
                <KV k="infinite" v="Positive infinity value" />
                <KV k="nan" v="NaN value" />
                <KV k="isinfinite / isnan / isnormal" v="Test for special float values" />
                <KV k="add" v="Sum an array: [1,2,3] | add => 6" />
              </div>
            </SectionCard>

            {/* Section 20: flatten, transpose & Array Ops */}
            <SectionCard number="20" title="flatten, transpose & Arrays">
              <Code>{`# flatten — ALL levels (no args = fully recursive)
[[1,[2]],[[3]]] | flatten     # [1,2,3]

# flatten(n) — limit depth
[[1,[2]],[[3]]] | flatten(1)  # [1,[2],[3]]

# transpose — matrix transpose
[[1,2],[3,4]] | transpose     # [[1,3],[2,4]]

# add — concatenate arrays or sum numbers
[[1,2],[3,4]] | add           # [1,2,3,4]`}</Code>
              <RefRow cmd="flatten" desc="Recursively flatten ALL nested array levels" />
              <RefRow cmd="flatten(n)" desc="Flatten only n levels deep" />
              <RefRow cmd="transpose" desc="Transpose matrix (pads with nulls)" />
              <RefRow cmd="indices(val)" desc="All positions of val in array/string" />
              <RefRow cmd="contains(b)" desc="True if input contains b (recursive)" />
              <RefRow cmd="inside(b)" desc="Inverse of contains: input inside b?" />
              <RefRow cmd="combinations" desc="All combinations of array elements" />
            </SectionCard>

            {/* Section 21: I/O & Debugging */}
            <SectionCard number="21" title="I/O & Debugging">
              <RefRow cmd="input" desc="Read next JSON input (use with -n flag)" />
              <RefRow cmd="inputs" desc="Read all remaining JSON inputs" />
              <RefRow cmd="debug" desc="Print input to stderr, pass through" />
              <RefRow cmd="debug(msg)" desc="Print msg to stderr, pass through" />
              <RefRow cmd="stderr" desc="Write input to stderr as-is" />
              <RefRow cmd="error(msg)" desc="Raise error with message" />
              <RefRow cmd="halt" desc="Stop execution, exit 0" />
              <RefRow cmd="halt_error(n)" desc="Stop, write to stderr, exit code n" />
              <RefRow cmd="$ENV / env" desc="Object of all environment variables" />
              <RefRow cmd="$__loc__" desc={'Current source {file, line}'} />
              <RefRow cmd="builtins" desc="Array of all builtin names with arities" />
            </SectionCard>

            {/* Section 22: SQL-Style Operators */}
            <SectionCard number="22" title="SQL-Style Operators">
              <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
                Higher-level operators for set operations and indexing.
              </div>
              <Code>{`# INDEX — build lookup object
[.[] | {key: .id, value: .}] | from_entries
# Equivalent:
INDEX(.[]; .id)

# IN — membership test
.items[] | select(IN(.id; "a","b","c"))

# JOIN — join stream to index
JOIN($idx; .items[]; .category)`}</Code>
              <KV k="INDEX(stream; expr)" v="Build object keyed by expr from stream" />
              <KV k="IN(stream)" v="Test if input appears in stream" />
              <KV k="IN(s; expr)" v="Test if expr result appears in stream s" />
              <KV k="JOIN(idx; stream; expr)" v="Join stream to index by expr" />
            </SectionCard>

            {/* Section 23: Format Strings */}
            <SectionCard number="23" title="Format Strings">
              <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
                @-prefixed filters for encoding/escaping output.
              </div>
              {[
                { fmt: "@base64", desc: "Base64 encode" },
                { fmt: "@base64d", desc: "Base64 decode" },
                { fmt: "@uri", desc: "Percent-encode for URLs" },
                { fmt: "@urid", desc: "Percent-decode URLs (v1.8+)" },
                { fmt: "@html", desc: "HTML entity escape" },
                { fmt: "@csv", desc: "Format array as CSV row" },
                { fmt: "@tsv", desc: "Format array as TSV row" },
                { fmt: "@sh", desc: "Shell-safe quoting (single quotes)" },
                { fmt: "@json", desc: "JSON encode (like tojson)" },
                { fmt: "@text", desc: "Identity (no transformation)" },
              ].map(({ fmt, desc }, i) => (
                <div key={fmt} style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 4,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}>
                  <code style={{ fontWeight: 700, color: palette.accent, fontSize: 11, width: 80, fontFamily: "'JetBrains Mono', monospace" }}>{fmt}</code>
                  <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
                </div>
              ))}
              <Bullet>No <code>@base32</code> in jq — use external tools for base32</Bullet>
            </SectionCard>

            {/* Section 24: CLI Flags & Invocation */}
            <SectionCard number="24" title="CLI Flags & Invocation">
              <RefRow cmd="-r / --raw-output" desc="Output raw strings (no JSON quotes)" />
              <RefRow cmd="-n / --null-input" desc="Don't read input; use with input/inputs" />
              <RefRow cmd="-c / --compact" desc="Compact output (no pretty-print)" />
              <RefRow cmd="-e / --exit-status" desc="Exit 1 if last output is false/null" />
              <RefRow cmd="-s / --slurp" desc="Read all inputs into single array" />
              <RefRow cmd="-S / --sort-keys" desc="Sort object keys in output" />
              <RefRow cmd="--arg k v" desc={'Set $k to string v'} />
              <RefRow cmd="--argjson k v" desc={'Set $k to parsed JSON v'} />
              <RefRow cmd="--slurpfile k f" desc={'Set $k to array of JSON values from file f'} />
              <RefRow cmd="--rawfile k f" desc={'Set $k to raw file contents as string'} />
              <RefRow cmd="-f / --from-file" desc="Read filter from file instead of argument" />
            </SectionCard>
          </>
        )}
      </div>

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
        jq Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on jq 1.8 Manual — jqlang.org/manual
        </span>
      </div>
    </div>
  );
}
