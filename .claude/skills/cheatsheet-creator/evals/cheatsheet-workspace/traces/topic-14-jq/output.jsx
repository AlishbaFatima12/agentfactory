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
          Filters · Functions · Patterns · Command-Line JSON Processing
        </div>
      </div>

      {/* Content Grid */}
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
        {/* Section 1 — Identity & Basic Access */}
        <SectionCard number="1" title="Identity & Field Access">
          <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
            The dot is your starting point. Everything builds from here.
          </div>
          <RefRow cmd="." desc="Identity — returns the entire input unchanged" />
          <RefRow cmd=".foo" desc="Access field 'foo' on the input object" />
          <RefRow cmd=".foo.bar" desc="Nested access — equivalent to piping" />
          <RefRow cmd=".foo?" desc="Optional access — no error if foo is null/missing" />
          <RefRow cmd={`.["key"]`} desc="Bracket notation — required for special chars" />
          <RefRow cmd={`.["a-b"]`} desc='Keys with hyphens, spaces, etc. need brackets' />
          <Code>{`# These are equivalent:
echo '{"name":"jq"}' | jq '.name'
echo '{"name":"jq"}' | jq '.["name"]'
# => "jq"`}</Code>
        </SectionCard>

        {/* Section 2 — Array Operations */}
        <SectionCard number="2" title="Array Operations">
          <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
            <Tag>Index</Tag><Tag color="#3a6ea5">Slice</Tag><Tag color="#5a8a3c">Iterate</Tag>
          </div>
          <RefRow cmd=".[0]" desc="First element of array" />
          <RefRow cmd=".[-1]" desc="Last element of array" />
          <RefRow cmd=".[2:5]" desc="Slice from index 2 to 4 (exclusive end)" />
          <RefRow cmd=".[:3]" desc="First 3 elements" />
          <RefRow cmd=".[]" desc="Iterate: emit each element as separate output" />
          <RefRow cmd="[.[] | f]" desc="Collect filtered results back into an array" />
          <Code>{`echo '[1,2,3,4,5]' | jq '.[2:4]'
# => [3, 4]
echo '[1,2,3]' | jq '[.[] | . * 2]'
# => [2, 4, 6]`}</Code>
        </SectionCard>

        {/* Section 3 — Command-Line Flags */}
        <SectionCard number="3" title="Command-Line Flags">
          <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
            Essential flags you'll use in every pipeline.
          </div>
          <RefRow cmd="-r" desc="Raw output — no quotes around strings" />
          <RefRow cmd="-e" desc="Exit 1 if last output is false/null" />
          <RefRow cmd="-s" desc="Slurp — read all inputs into one array" />
          <RefRow cmd="-n" desc="Null input — don't read stdin (use with --argjson)" />
          <RefRow cmd="-c" desc="Compact output — no pretty-printing" />
          <RefRow cmd="-S" desc="Sort object keys in output" />
          <RefRow cmd="--arg k v" desc="Pass string variable $k with value v" />
          <RefRow cmd="--argjson k v" desc="Pass JSON variable $k with value v" />
          <Code>{`# Pass a variable into a filter
jq --arg name "Alice" '.[] | select(.name == $name)' data.json

# Slurp multiple files into one array
jq -s '.' file1.json file2.json`}</Code>
        </SectionCard>

        {/* Section 4 — Pipe, Comma & Parentheses */}
        <SectionCard number="4" title="Pipe, Comma & Grouping">
          <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
            Composing filters is how jq gets its power.
          </div>
          <KV k="Pipe |" v="Feed output of left filter into right filter" />
          <KV k="Comma ," v="Run both filters on same input, emit both outputs" />
          <KV k="Parens ()" v="Group a sub-expression as a single filter" />
          <KV k="Semicolon ;" v="Separates arguments inside function calls" />
          <Code>{`# Pipe chains
.users[] | .name | ascii_upcase

# Comma generates multiple outputs
.name, .age, .email

# Parens for grouping
(.price * .qty) as $total | {$total}

# Multiple results collected
[.[] | .name, .id]`}</Code>
        </SectionCard>

        {/* Section 5 — Object Construction */}
        <SectionCard number="5" title="Object Construction & Output">
          <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
            <Tag color="#7a5a8a">Build</Tag><Tag color="#2a7a7a">Format</Tag>
          </div>
          <Bullet><strong>Shorthand:</strong> <code>{`{name, age}`}</code> is sugar for <code>{`{name: .name, age: .age}`}</code></Bullet>
          <Bullet><strong>Computed keys:</strong> <code>{`{(.key): .value}`}</code> — parens around key expression</Bullet>
          <Bullet><strong>String interpolation:</strong> <code>{`"Hello \\(.name)"`}</code> — backslash-paren inside strings</Bullet>
          <Bullet><strong>Add objects:</strong> <code>{`{a:1} + {b:2}`}</code> merges into <code>{`{a:1, b:2}`}</code></Bullet>
          <Code>{`# Build new objects from input
.[] | {name, city: .address.city}

# String interpolation
.[] | "\\(.name) is \\(.age) years old"

# Format strings
.ts | strftime("%Y-%m-%d")
.data | @base64     # base64 encode
.arr | @csv         # CSV format
.arr | @tsv         # tab-separated`}</Code>
        </SectionCard>

        {/* Section 6 — Comparison & Logic */}
        <SectionCard number="6" title="Comparison & Logic">
          <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
            Booleans, comparisons, and the alternative operator.
          </div>
          <RefRow cmd="==  !=" desc="Equality and inequality (deep comparison)" />
          <RefRow cmd="<  >  <=  >=" desc="Numeric/string ordering" />
          <RefRow cmd="and  or  not" desc="Boolean combinators" />
          <RefRow cmd="//" desc="Alternative — use right side if left is false/null" />
          <Code>{`# Alternative operator (like ?? in JS)
.name // "unnamed"
.config.timeout // 30

# Combining conditions
.[] | select(.age > 18 and .active == true)

# Negation
.[] | select(.role != "admin")
.[] | select(.deleted | not)`}</Code>
        </SectionCard>

        {/* Section 7 — String Functions */}
        <SectionCard number="7" title="String Functions">
          <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
            <Tag color="#3a6ea5">Search</Tag><Tag color="#5a8a3c">Transform</Tag><Tag color="#8a6a3a">Split/Join</Tag>
          </div>
          <RefRow cmd="length" desc="String length in characters" />
          <RefRow cmd="split(s)" desc='Split into array: "a,b" | split(",") => ["a","b"]' />
          <RefRow cmd="join(s)" desc='Join array: ["a","b"] | join("-") => "a-b"' />
          <RefRow cmd="test(re)" desc="Boolean regex test — true if pattern matches" />
          <RefRow cmd="match(re)" desc="Return match object with offset, length, captures" />
          <RefRow cmd="capture(re)" desc="Return named captures as object" />
          <RefRow cmd="gsub(re; s)" desc="Global substitution — replace all matches" />
          <RefRow cmd="ascii_downcase" desc="Lowercase entire string" />
          <RefRow cmd="ltrimstr(s)" desc='Remove prefix: "hello" | ltrimstr("he") => "llo"' />
          <RefRow cmd="startswith(s)" desc="Boolean check for string prefix" />
        </SectionCard>

        {/* Section 8 — Array/Iteration Functions */}
        <SectionCard number="8" title="Array & Iteration Functions">
          <RefRow cmd="map(f)" desc="Apply filter f to each element, return array" />
          <RefRow cmd="select(f)" desc="Keep element only if f returns true" />
          <RefRow cmd="sort_by(f)" desc="Sort array by expression f" />
          <RefRow cmd="group_by(f)" desc="Group into sub-arrays by expression f" />
          <RefRow cmd="unique_by(f)" desc="Deduplicate by expression f" />
          <RefRow cmd="flatten" desc="Flatten nested arrays by one level" />
          <RefRow cmd="min_by(f)" desc="Element with minimum value of f" />
          <RefRow cmd="max_by(f)" desc="Element with maximum value of f" />
          <RefRow cmd="limit(n; f)" desc="Emit only first n outputs from filter f" />
          <RefRow cmd="first(f)" desc="Emit only the first output of filter f" />
          <RefRow cmd="range(n)" desc="Generate numbers 0 through n-1" />
          <RefRow cmd="indices(s)" desc="All indices where s occurs in array/string" />
        </SectionCard>

        {/* Section 9 — Object Functions */}
        <SectionCard number="9" title="Object Functions">
          <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
            Inspecting, transforming, and reshaping objects.
          </div>
          <RefRow cmd="keys" desc="Array of keys, sorted alphabetically" />
          <RefRow cmd="values" desc="Array of values in key order" />
          <RefRow cmd="has(k)" desc='Check if key exists: {a:1} | has("a") => true' />
          <RefRow cmd="in(obj)" desc='Check if key in object: "a" | in({a:1}) => true' />
          <RefRow cmd="to_entries" desc='Convert {a:1} to [{key:"a", value:1}]' />
          <RefRow cmd="from_entries" desc='Convert [{key:"a", value:1}] back to {a:1}' />
          <RefRow cmd="with_entries(f)" desc="to_entries | map(f) | from_entries shorthand" />
          <RefRow cmd="del(.foo)" desc="Remove a field from an object" />
          <Code>{`# Rename all keys to uppercase
with_entries(.key |= ascii_upcase)

# Filter object to specific keys
{name, email}     # keep only these
del(.password)    # remove specific key`}</Code>
        </SectionCard>

        {/* Section 10 — Conditionals & Reduce */}
        <SectionCard number="10" title="Conditionals & Reduce">
          <Bullet><strong>if-then-else:</strong> always include <code>else</code> and <code>end</code></Bullet>
          <Bullet><strong>try-catch:</strong> suppress errors or provide fallbacks</Bullet>
          <Bullet><strong>reduce:</strong> fold array into a single accumulated value</Bullet>
          <Bullet><strong>foreach:</strong> like reduce but emits intermediate states</Bullet>
          <Code>{`# if-then-else (else is required)
if .age >= 18 then "adult" else "minor" end

# Nested conditions
if .x > 0 then "pos"
elif .x == 0 then "zero"
else "neg" end

# try-catch
try .foo.bar catch "fallback"
try (.x / .y) catch "div error"

# reduce
reduce .[] as $x (0; . + $x)
# => sum of array

# reduce to build object
reduce .[] as $item ({};
  .[$item.key] = $item.value
)`}</Code>
        </SectionCard>

        {/* Section 11 — Advanced Patterns */}
        <SectionCard number="11" title="Advanced Patterns">
          <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
            <Tag color="#7a5a8a">Recurse</Tag><Tag color="#2a7a7a">Paths</Tag><Tag color="#a53a3a">Assign</Tag>
          </div>
          <KV k=".." v="Recursive descent — emit every value at every depth" />
          <KV k="path(f)" v="Output the path (array of keys/indices) to matching values" />
          <KV k="getpath(p)" v='Get value at path: getpath(["a","b"]) => .a.b' />
          <KV k="setpath(p;v)" v="Set value at a specific path" />
          <KV k="env" v="Access environment variables as an object" />
          <KV k="$ENV.NAME" v="Access a specific env var" />
          <KV k="input" v="Read next JSON input (use with -n flag)" />
          <KV k="debug" v="Print value to stderr, pass through unchanged" />
          <Code>{`# Find all strings anywhere in the structure
[.. | strings]

# Update nested value in place
.config.timeout |= . + 10

# Update with assignment
.users[0].name = "Alice"

# Walk entire structure
walk(if type == "string"
  then ascii_downcase else . end)`}</Code>
        </SectionCard>

        {/* Section 12 — Real-World Recipes */}
        <SectionCard number="12" title="Real-World Recipes" span={3}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
            }}
          >
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Filter & Reshape API Data
              </div>
              <Code>{`.results[]
| select(.status == "active")
| {id, name, email}`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Extract active users, keep only relevant fields
              </div>
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Convert JSON to CSV
              </div>
              <Code>{`.[] | [.name, .age, .city]
| @csv`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Use <code style={{ color: palette.accent }}>-r</code> flag for unquoted output piped to a file
              </div>
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Group & Count
              </div>
              <Code>{`group_by(.department)
| map({
  dept: .[0].department,
  count: length
})`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Aggregate records by category with counts
              </div>
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Merge Multiple Files
              </div>
              <Code>{`jq -s '
  map(.users[])
  | group_by(.id)
  | map(add)
' a.json b.json`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Slurp files, combine arrays, merge by key
              </div>
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Update Config In-Place
              </div>
              <Code>{`jq '.version = "2.0"
  | .features.dark = true
' config.json > tmp.json
&& mv tmp.json config.json`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Modify JSON files with field assignment
              </div>
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Search Nested Keys
              </div>
              <Code>{`.. | objects
| select(has("error"))
| .error`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Recursive descent to find deeply nested fields
              </div>
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Flatten & Unique
              </div>
              <Code>{`[.teams[].members[].role]
| unique
| sort`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Collect all unique values from nested arrays
              </div>
            </div>
            <div
              style={{
                background: palette.highlight,
                borderRadius: 8,
                padding: "10px 12px",
                border: `1px solid ${palette.cardBorder}`,
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                Curl + jq Pipeline
              </div>
              <Code>{`curl -s https://api.example.com \\
| jq -r '.items[]
  | "\\(.id)\\t\\(.name)"'`}</Code>
              <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 6 }}>
                Fetch API, extract fields, tab-separated for scripts
              </div>
            </div>
          </div>
        </SectionCard>
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
          jq 1.7+ · stedolan.github.io/jq · Command-line JSON processor
        </span>
      </div>
    </div>
  );
}
