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
  const pages = ["Page 1: Core Filters", "Page 2: Advanced"];

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
          Filters · Functions · Transforms · Recipes — 2026 Edition
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

      {/* Page 1: Core Filters */}
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
          {/* Section 1 — What is jq? */}
          <SectionCard number="1" title="What is jq?">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CLI</Tag>
              <Tag color="#5a8a3c">JSON</Tag>
              <Tag color="#7a5a8a">UNIX</Tag>
              <Tag color="#2a7a7a">PIPES</Tag>
            </div>
            <Bullet>Lightweight command-line JSON processor — like <code>sed</code> for JSON</Bullet>
            <Bullet>Takes JSON input from stdin or file and applies filters to transform it</Bullet>
            <Bullet>Zero dependencies, single binary, available on all major platforms</Bullet>
            <Bullet>Turing-complete functional language with its own type system</Bullet>
            <Bullet>Essential for shell scripting, API debugging, and data wrangling</Bullet>
          </SectionCard>

          {/* Section 2 — Invocation Patterns */}
          <SectionCard number="2" title="Invocation Patterns">
            <Code>{`# Pipe JSON into jq
curl -s api.example.com | jq '.data'

# Read from file
jq '.users[]' data.json

# Raw string output (no quotes)
jq -r '.name' data.json

# Compact output (one line)
jq -c '.' data.json`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="-r" desc="Raw output — strips surrounding quotes" />
              <RefRow cmd="-c" desc="Compact — one-line output, no pretty printing" />
              <RefRow cmd="-e" desc="Exit with error if output is false or null" />
              <RefRow cmd="-S" desc="Sort object keys alphabetically" />
              <RefRow cmd="--arg k v" desc={"Bind $k to string value v"} />
            </div>
          </SectionCard>

          {/* Section 3 — Identity & Basic Filters */}
          <SectionCard number="3" title="Identity & Basic Filters">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The dot is jq{"'"}s identity operator — it means {"\""}the current input.{"\""}
            </div>
            <RefRow cmd="." desc="Identity — return entire input unchanged" />
            <RefRow cmd=".foo" desc="Access object key named foo" />
            <RefRow cmd=".foo.bar" desc="Nested key access (chained dots)" />
            <RefRow cmd={'.["key"]'} desc="Bracket notation for special-char keys" />
            <RefRow cmd=".foo?" desc="Optional access — suppress errors if missing" />
            <Code>{`echo '{"a":{"b":1}}' | jq '.a.b'
# Output: 1`}</Code>
          </SectionCard>

          {/* Section 4 — Array Access */}
          <SectionCard number="4" title="Array Access">
            <RefRow cmd=".[0]" desc="First element of array" />
            <RefRow cmd=".[-1]" desc="Last element of array" />
            <RefRow cmd=".[2:5]" desc="Slice — elements at index 2, 3, 4" />
            <RefRow cmd=".[:3]" desc="First 3 elements" />
            <RefRow cmd=".[-2:]" desc="Last 2 elements" />
            <RefRow cmd=".[]" desc="Iterate all elements (produces multiple outputs)" />
            <Code>{`echo '[10,20,30,40]' | jq '.[1:3]'
# Output: [20, 30]

echo '[10,20,30]' | jq '.[]'
# Output: 10  20  30 (separate values)`}</Code>
          </SectionCard>

          {/* Section 5 — Pipes & Combinators */}
          <SectionCard number="5" title="Pipes & Combinators">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Pipes chain filters like Unix shell — output of left feeds into right.
            </div>
            <RefRow cmd="a | b" desc="Pipe output of filter a into filter b" />
            <RefRow cmd="a, b" desc="Comma — run both filters, output both results" />
            <RefRow cmd="(expr)" desc="Grouping — evaluate expression as one unit" />
            <RefRow cmd="a // b" desc="Alternative — b if a is false or null" />
            <Code>{`# Chain: get names from users array
jq '.users[] | .name' data.json

# Multiple outputs with comma
jq '.name, .age' data.json

# Default value with alternative
jq '.nickname // .name' data.json`}</Code>
          </SectionCard>

          {/* Section 6 — Constructing Objects & Arrays */}
          <SectionCard number="6" title="Constructing Output">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">OBJECTS</Tag>
              <Tag color="#3a6ea5">ARRAYS</Tag>
            </div>
            <Code>{`# Build new object
jq '{name: .user, id: .uid}' data.json

# Shorthand (key matches filter)
jq '{name, age}' data.json

# Collect iterator into array
jq '[.items[] | .name]' data.json

# Dynamic keys
jq '{(.key): .value}' data.json`}</Code>
            <Bullet><strong>{"{ }"}</strong> constructs a new JSON object from filter expressions</Bullet>
            <Bullet><strong>{"[ ]"}</strong> wraps iterator output back into a single array</Bullet>
            <Bullet>Parenthesized keys <code>(.expr)</code> enable dynamic property names</Bullet>
            <Bullet>Shorthand <code>{'{name}'}</code> is equivalent to <code>{'{name: .name}'}</code></Bullet>
          </SectionCard>

          {/* Section 7 — Built-in Operators */}
          <SectionCard number="7" title="Built-in Operators">
            <RefRow cmd="length" desc="String/array/object length" />
            <RefRow cmd="keys" desc="Array of an object's keys (sorted)" />
            <RefRow cmd="values" desc="Array of an object's values" />
            <RefRow cmd="has(k)" desc={'True if object has key k'} />
            <RefRow cmd="in(obj)" desc="True if input key exists in obj" />
            <RefRow cmd="type" desc={'Returns type: "number", "string", "array", etc.'} />
            <RefRow cmd="empty" desc="Produce no output (skip current item)" />
            <RefRow cmd="error(msg)" desc="Abort with error message" />
          </SectionCard>

          {/* Section 8 — String Functions */}
          <SectionCard number="8" title="String Functions">
            <RefRow cmd="split(s)" desc={'Split string by separator s'} />
            <RefRow cmd="join(s)" desc={'Join array into string with separator s'} />
            <RefRow cmd="test(re)" desc="True if string matches regex" />
            <RefRow cmd="match(re)" desc="Return match object with offset and captures" />
            <RefRow cmd="capture(re)" desc="Return named capture groups as object" />
            <RefRow cmd="gsub(re; s)" desc="Replace all matches of regex with s" />
            <RefRow cmd="ascii_downcase" desc="Lowercase entire string" />
            <RefRow cmd="ltrimstr(s)" desc="Remove prefix s from string" />
            <Code>{`echo '"hello world"' | jq 'split(" ")'
# Output: ["hello", "world"]

echo '"foo-bar"' | jq 'gsub("-"; "_")'
# Output: "foo_bar"`}</Code>
          </SectionCard>

          {/* Section 9 — Array Functions */}
          <SectionCard number="9" title="Array Functions">
            <RefRow cmd="map(f)" desc="Apply filter f to every element" />
            <RefRow cmd="select(f)" desc="Keep elements where f is truthy" />
            <RefRow cmd="sort" desc="Sort array (numbers or strings)" />
            <RefRow cmd="sort_by(f)" desc="Sort by result of filter f" />
            <RefRow cmd="group_by(f)" desc="Group into sub-arrays by f" />
            <RefRow cmd="unique" desc="Remove duplicate values" />
            <RefRow cmd="unique_by(f)" desc="Deduplicate by filter f" />
            <RefRow cmd="flatten" desc="Flatten nested arrays one level" />
            <RefRow cmd="first, last" desc="First or last element of array" />
            <Code>{`jq '[.[] | select(.age > 21)]' users.json
jq 'sort_by(.name)' users.json`}</Code>
          </SectionCard>

          {/* Section 10 — Conditionals & Comparisons */}
          <SectionCard number="10" title="Conditionals & Comparisons">
            <Code>{`# if-then-else (else is required)
jq 'if .age >= 18 then "adult"
     else "minor" end'

# elif chains
jq 'if .x > 0 then "pos"
     elif .x == 0 then "zero"
     else "neg" end'`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="==, !=" desc="Equality and inequality" />
              <RefRow cmd={"<, >, <=, >="} desc="Numeric / string comparison" />
              <RefRow cmd="and, or, not" desc="Boolean logic operators" />
              <RefRow cmd="null" desc="Null literal — falsy in conditionals" />
            </div>
          </SectionCard>

          {/* Section 11 — Reduce & Foreach */}
          <SectionCard number="11" title="Reduce & Foreach">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Accumulate values across an iterator, similar to fold/reduce in functional programming.
            </div>
            <Code>{`# Sum all numbers in array
jq 'reduce .[] as $x (0; . + $x)'

# Build object from array of pairs
jq 'reduce .[] as $p ({};
  . + {($p.k): $p.v})'

# Count items matching condition
jq '[.[] | select(.active)] | length'`}</Code>
            <Bullet><strong>reduce</strong> takes an iterator, initial accumulator, and update expression</Bullet>
            <Bullet>The accumulator <code>.</code> inside reduce refers to the running total, not input</Bullet>
            <Bullet><strong>foreach</strong> is like reduce but emits intermediate values</Bullet>
            <Bullet><strong>limit(n; expr)</strong> takes only the first n outputs from expr</Bullet>
          </SectionCard>

          {/* Section 12 — Type Conversions & Math */}
          <SectionCard number="12" title="Type Conversions & Math">
            <RefRow cmd="tonumber" desc={'Convert string "42" to number 42'} />
            <RefRow cmd="tostring" desc={"Convert number 42 to string"} />
            <RefRow cmd="ascii" desc="Convert char to/from ASCII code point" />
            <RefRow cmd="@base64" desc="Encode string as base64" />
            <RefRow cmd="@base64d" desc="Decode base64 to string" />
            <RefRow cmd="@uri" desc="Percent-encode for URLs" />
            <RefRow cmd="@csv" desc="Format array as CSV row" />
            <RefRow cmd="@tsv" desc="Format array as TSV row" />
            <div style={{ marginTop: 6 }}>
              <Bullet><code>add</code> sums an array of numbers or concatenates strings</Bullet>
              <Bullet><code>min</code>, <code>max</code>, <code>min_by(f)</code>, <code>max_by(f)</code> for extremes</Bullet>
            </div>
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
          {/* Section 13 — Variable Binding */}
          <SectionCard number="13" title="Variable Binding">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Bind intermediate results to variables with <code>as</code> to reuse them downstream.
            </div>
            <Code>{`# Bind and reuse
.bar as $x | .baz | . + $x

# Destructuring bind
. as {name: $n, age: $a} |
  "\\($n) is \\($a)"

# Multiple bindings
.a as $x | .b as $y | $x + $y

# --arg from command line
jq --arg name "Jo" '.user == $name'`}</Code>
            <Bullet>Variables are immutable once bound — jq is functional</Bullet>
            <Bullet><code>{"$ENV"}</code> accesses shell environment variables</Bullet>
            <Bullet><code>--argjson k v</code> binds a JSON value (not string) to <code>{"$k"}</code></Bullet>
            <Bullet><code>--slurpfile k f</code> binds file contents as array to <code>{"$k"}</code></Bullet>
          </SectionCard>

          {/* Section 14 — Path Expressions */}
          <SectionCard number="14" title="Path Expressions">
            <RefRow cmd="path(f)" desc="Return array path to values matched by f" />
            <RefRow cmd="paths" desc="All paths in the input as arrays" />
            <RefRow cmd="leaf_paths" desc="Paths to all scalar (leaf) values" />
            <RefRow cmd="getpath(p)" desc="Get value at array path p" />
            <RefRow cmd="setpath(p;v)" desc="Set value at array path p to v" />
            <RefRow cmd="delpaths(ps)" desc="Delete values at multiple paths" />
            <Code>{`echo '{"a":{"b":1}}' | jq 'path(.a.b)'
# Output: ["a","b"]

echo '{"a":1}' | jq 'getpath(["a"])'
# Output: 1`}</Code>
          </SectionCard>

          {/* Section 15 — Recursion */}
          <SectionCard number="15" title="Recursion & Walking">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">DEEP</Tag>
              <Tag color="#7a5a8a">RECURSIVE</Tag>
            </div>
            <RefRow cmd=".." desc="Recurse into all values at every depth" />
            <RefRow cmd="recurse(f)" desc="Apply f recursively until no results" />
            <RefRow cmd="walk(f)" desc="Apply f to every value bottom-up" />
            <RefRow cmd="env" desc="Access all environment variables as object" />
            <Code>{`# Find all "id" values at any depth
jq '.. | .id? // empty'

# Recursively convert keys to lowercase
jq 'walk(if type == "object"
  then with_entries(.key |=
    ascii_downcase)
  else . end)'`}</Code>
          </SectionCard>

          {/* Section 16 — Object Manipulation */}
          <SectionCard number="16" title="Object Manipulation">
            <RefRow cmd="to_entries" desc={'Convert {k:v} to [{key:k, value:v}]'} />
            <RefRow cmd="from_entries" desc={'Convert [{key:k, value:v}] back to {k:v}'} />
            <RefRow cmd="with_entries(f)" desc="Transform each {key,value} pair with f" />
            <RefRow cmd="+ (objects)" desc="Merge objects (right wins on conflict)" />
            <RefRow cmd="* (objects)" desc="Recursive merge of objects" />
            <RefRow cmd="del(.key)" desc="Remove a key from object" />
            <Code>{`# Rename keys
jq 'with_entries(.key |= "prefix_"+.)'

# Remove null-valued keys
jq 'with_entries(select(.value != null))'`}</Code>
          </SectionCard>

          {/* Section 17 — String Interpolation */}
          <SectionCard number="17" title="String Interpolation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              {"jq uses \\(...) for string interpolation — not ${...} like shell."}
            </div>
            <Code>{`# Basic interpolation
jq '"Name: \\(.name), Age: \\(.age)"'

# Inside complex expressions
jq '"Total: \\(.items | length) items"'

# Multi-line with @text
jq '"Line1\\nLine2"'

# Combining with format strings
jq '@html "<b>\\(.name)</b>"'`}</Code>
            <Bullet>Always wrap interpolated expressions in <code>{"\\(...)"}</code> inside jq strings</Bullet>
            <Bullet>Works anywhere inside a jq string literal</Bullet>
            <Bullet>The expression inside parentheses is a full jq filter</Bullet>
            <Bullet>Cannot be nested — use variable binding for complex cases</Bullet>
          </SectionCard>

          {/* Section 18 — try/catch & Error Handling */}
          <SectionCard number="18" title="Error Handling">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">ERRORS</Tag>
              <Tag color="#5a8a3c">SAFETY</Tag>
            </div>
            <Code>{`# Suppress errors with try
jq '[.[] | try .name]'

# try-catch pattern
jq 'try .foo.bar catch "default"'

# Optional operator (?)
jq '.items[]?.name'

# Null propagation
jq '.a.b.c? // "fallback"'`}</Code>
            <Bullet><strong>try</strong> runs a filter and suppresses any errors</Bullet>
            <Bullet><strong>try-catch</strong> catches the error message as a string</Bullet>
            <Bullet>The <strong>?</strong> suffix on any filter suppresses errors silently</Bullet>
            <Bullet><strong>//</strong> (alternative) provides default when result is null or false</Bullet>
          </SectionCard>

          {/* Section 19 — Practical Recipes */}
          <SectionCard number="19" title="Practical Recipes" span={2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                  Flatten nested API response
                </div>
                <Code>{`jq '.data.results[] |
  {id, name: .profile.name,
   email: .contact.email}'`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                  Group and count by field
                </div>
                <Code>{`jq 'group_by(.status) |
  map({status: .[0].status,
       count: length})'`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                  Merge multiple JSON files
                </div>
                <Code>{`jq -s 'reduce .[] as $f
  ({}; . * $f)' *.json`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                  CSV to JSON conversion
                </div>
                <Code>{`jq -R 'split(",") |
  {name:.[0], age:.[1]|tonumber,
   city:.[2]}' data.csv`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                  Find duplicates by key
                </div>
                <Code>{`jq 'group_by(.email) |
  map(select(length > 1)) |
  flatten'`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                  Transform keys recursively
                </div>
                <Code>{`jq 'walk(if type == "object"
  then with_entries(
    .key |= gsub("_"; "-"))
  else . end)'`}</Code>
              </div>
            </div>
          </SectionCard>

          {/* Section 20 — Slurp & Stream Modes */}
          <SectionCard number="20" title="Slurp & Stream Modes">
            <RefRow cmd="-s / --slurp" desc="Read entire input as one array" />
            <RefRow cmd="-n / --null-input" desc="Don't read input; start with null" />
            <RefRow cmd="--jsonargs" desc="Remaining args are JSON values" />
            <RefRow cmd="--rawfile k f" desc="Bind raw file contents to $k as string" />
            <Code>{`# Slurp multiple objects into array
cat *.json | jq -s '.'

# Generate JSON from nothing
jq -n '{name: "new", items: []}'

# Process line-delimited JSON
jq -c '.name' <<< '{"name":"a"}
{"name":"b"}'`}</Code>
          </SectionCard>

          {/* Section 21 — Streaming & Large Files */}
          <SectionCard number="21" title="Streaming & Large Files">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">PERFORMANCE</Tag>
              <Tag color="#8a6a3a">BIG DATA</Tag>
            </div>
            <Code>{`# Stream parse (memory efficient)
jq --stream 'select(.[0][-1] == "name") | .[1]'

# Truncate stream to path
jq 'tostream | select(.[0]|length<=2) |
  fromstream(.)'

# Process huge file line by line
jq -cn --stream 'fromstream(1|truncate_stream(inputs))'`}</Code>
            <Bullet><strong>--stream</strong> parses JSON as path-value pairs for huge files</Bullet>
            <Bullet><strong>tostream</strong> converts value to stream form within a filter</Bullet>
            <Bullet><strong>fromstream</strong> reassembles stream back into values</Bullet>
            <Bullet><strong>truncate_stream</strong> strips leading path elements from a stream</Bullet>
          </SectionCard>

          {/* Section 22 — Defining Functions */}
          <SectionCard number="22" title="Defining Functions">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              jq supports user-defined functions with <code>def</code> for reusable logic.
            </div>
            <Code>{`# Simple function
def double: . * 2;
[1,2,3] | map(double)

# Function with argument
def addval(x): . + x;
5 | addval(3)  # => 8

# Recursive function
def tree: .name,
  (.children[]? | "  " + tree);`}</Code>
            <Bullet>Functions are defined with <code>def name(args): body;</code></Bullet>
            <Bullet>Arguments are filters, not values — they are re-evaluated each use</Bullet>
            <Bullet>Functions can be recursive — jq optimizes tail recursion</Bullet>
            <Bullet>Place definitions at the start of your jq program, before the main filter</Bullet>
          </SectionCard>

          {/* Section 23 — Common Gotchas */}
          <SectionCard number="23" title="Common Gotchas">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">WATCH OUT</Tag>
            </div>
            {[
              { trap: "Shell quoting", fix: "Use single quotes around jq filters to prevent shell expansion" },
              { trap: "Null propagation", fix: "null | .foo returns null silently — use ? or // to handle" },
              { trap: "Iterator vs array", fix: ".[] produces multiple outputs; wrap in [...] to get one array" },
              { trap: "String concat", fix: "Use + to join strings, not comma — comma produces two outputs" },
              { trap: "Semicolons in args", fix: "Function args are separated by ; not , inside jq" },
            ].map(({ trap, fix }, i) => (
              <div
                key={trap}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <span style={{ fontWeight: 800, color: palette.dark, fontSize: 12 }}>{trap}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}> — {fix}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 24 — Quick Decision Guide */}
          <SectionCard number="24" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "select()", when: "Filter items", best: "Keep array elements matching a condition", icon: "🔍" },
                { title: "map()", when: "Transform all", best: "Apply same operation to every element", icon: "🔄" },
                { title: "reduce", when: "Accumulate", best: "Sum, build objects, aggregate across items", icon: "📊" },
                { title: "group_by()", when: "Categorize", best: "Bucket items by a shared field value", icon: "📁" },
                { title: "with_entries()", when: "Reshape keys", best: "Rename, filter, or transform object keys", icon: "🔑" },
                { title: "walk()", when: "Deep transform", best: "Modify values at every level of nesting", icon: "🌳" },
                { title: "--stream", when: "Huge files", best: "Process GB-scale JSON without loading all into memory", icon: "📡" },
                { title: "try-catch", when: "Handle errors", best: "Gracefully handle missing fields or bad data", icon: "🛡️" },
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
        jq Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on jq 1.7+ · stedolan.github.io/jq
        </span>
      </div>
    </div>
  );
}
