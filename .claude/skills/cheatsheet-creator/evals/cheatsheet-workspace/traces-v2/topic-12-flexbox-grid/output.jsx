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

export default function FlexboxGridCheatsheet() {
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
          Flexbox {"&"} Grid{" "}
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
          Container vs Item · Properties · Patterns · When to Use Which
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
          {/* Section 1 */}
          <SectionCard number="1" title="Flexbox vs Grid — When to Use">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">FLEXBOX</Tag>
              <Tag color="#5a8a3c">GRID</Tag>
              <Tag color="#7a5a8a">LAYOUT</Tag>
            </div>
            <Bullet><strong>Flexbox</strong> is one-dimensional — controls a row OR a column at a time</Bullet>
            <Bullet><strong>Grid</strong> is two-dimensional — controls rows AND columns simultaneously</Bullet>
            <Bullet>Use Flexbox for navbars, button groups, inline elements, and content-driven sizing</Bullet>
            <Bullet>Use Grid for full page layouts, card grids, dashboards, and structure-driven sizing</Bullet>
            <Bullet>They work great together — Grid for page layout, Flexbox inside each cell</Bullet>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="Flex Container Setup">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CONTAINER</Tag>
            </div>
            <Code>{`/* Activate flexbox on parent */
.container {
  display: flex;       /* block-level */
  display: inline-flex; /* inline-level */
}`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>All direct children become <strong>flex items</strong> automatically</Bullet>
              <Bullet>Items flow in a row by default (left to right in LTR)</Bullet>
              <Bullet>Items stretch to fill the cross axis height by default</Bullet>
              <Bullet>Container does NOT affect grandchildren — only direct children</Bullet>
            </div>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="Flex Direction & Wrap">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CONTAINER</Tag>
            </div>
            <RefRow cmd="flex-direction" desc="Set main axis direction" />
            <RefRow cmd="row" desc="Left to right (default)" />
            <RefRow cmd="row-reverse" desc="Right to left" />
            <RefRow cmd="column" desc="Top to bottom" />
            <RefRow cmd="column-reverse" desc="Bottom to top" />
            <div style={{ marginTop: 6 }}>
              <RefRow cmd="flex-wrap" desc="Allow items to wrap to new lines" />
              <RefRow cmd="nowrap" desc="Single line, items may shrink (default)" />
              <RefRow cmd="wrap" desc="Wrap onto multiple lines top to bottom" />
              <RefRow cmd="wrap-reverse" desc="Wrap bottom to top" />
            </div>
            <Code>{`/* Shorthand */
flex-flow: row wrap;`}</Code>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="Flex Container Alignment">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CONTAINER</Tag>
              <Tag color="#8a6a3a">ALIGNMENT</Tag>
            </div>
            <RefRow cmd="justify-content" desc="Align items along MAIN axis" />
            <RefRow cmd="align-items" desc="Align items along CROSS axis" />
            <RefRow cmd="align-content" desc="Align wrapped lines (multi-line only)" />
            <RefRow cmd="gap" desc="Space between items (row-gap, column-gap)" />
            <div style={{ marginTop: 6, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid, fontWeight: 600 }}>justify-content values:</div>
              <div style={{ fontSize: 11, color: palette.mid }}>flex-start | flex-end | center | space-between | space-around | space-evenly</div>
            </div>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="Flex Item Properties">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">ITEM</Tag>
            </div>
            <RefRow cmd="flex-grow" desc="How much item grows relative to siblings" />
            <RefRow cmd="flex-shrink" desc="How much item shrinks when space is tight" />
            <RefRow cmd="flex-basis" desc="Initial size before growing/shrinking" />
            <RefRow cmd="align-self" desc="Override container's align-items for this item" />
            <RefRow cmd="order" desc="Change visual order without changing DOM" />
            <Code>{`/* flex shorthand: grow shrink basis */
flex: 1;          /* 1 1 0% */
flex: auto;       /* 1 1 auto */
flex: none;       /* 0 0 auto */
flex: 0 1 200px;  /* custom */`}</Code>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="Flex Sizing Deep Dive">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">ITEM</Tag>
              <Tag color="#8a6a3a">SIZING</Tag>
            </div>
            <KV k="flex-basis: auto" v="Uses item's width/height as starting point" />
            <KV k="flex-basis: 0" v="Ignores content size, distributes all space by grow ratio" />
            <KV k="flex-grow: 0" v="Item won't grow beyond its basis (default)" />
            <KV k="flex-shrink: 1" v="Item will shrink if needed (default)" />
            <div style={{ marginTop: 6, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.dark }}>Sizing priority order:</div>
              <div style={{ fontSize: 11, color: palette.mid }}>min-width/max-width {'>'} flex-basis {'>'} width {'>'} content size</div>
            </div>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="Grid Container Setup">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">CONTAINER</Tag>
            </div>
            <Code>{`/* Activate grid on parent */
.container {
  display: grid;        /* block-level */
  display: inline-grid;  /* inline-level */
}`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>All direct children become <strong>grid items</strong> placed in cells</Bullet>
              <Bullet>You define the track structure (rows and columns) on the container</Bullet>
              <Bullet>Items auto-place into the next available cell by default</Bullet>
              <Bullet>Grid creates an explicit coordinate system for precise placement</Bullet>
            </div>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="Grid Template Columns & Rows">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">CONTAINER</Tag>
            </div>
            <Code>{`grid-template-columns: 200px 1fr 1fr;
grid-template-rows: auto 1fr auto;

/* Repeat notation */
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(4, minmax(150px, 1fr));

/* Named lines */
grid-template-columns: [start] 1fr [mid] 2fr [end];`}</Code>
            <KV k="fr" v="Fraction unit — distributes remaining space proportionally" />
            <KV k="auto" v="Sizes to content, gives up space to fr tracks" />
            <KV k="minmax(min, max)" v="Sets a size range for the track" />
            <KV k="fit-content(val)" v="Clamps track size to content up to val" />
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="Grid Gap & Container Alignment">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">CONTAINER</Tag>
              <Tag color="#8a6a3a">ALIGNMENT</Tag>
            </div>
            <RefRow cmd="gap" desc="Shorthand for row-gap and column-gap" />
            <RefRow cmd="row-gap" desc="Space between rows" />
            <RefRow cmd="column-gap" desc="Space between columns" />
            <RefRow cmd="justify-items" desc="Align all items horizontally in their cells" />
            <RefRow cmd="align-items" desc="Align all items vertically in their cells" />
            <RefRow cmd="justify-content" desc="Align the entire grid horizontally in container" />
            <RefRow cmd="align-content" desc="Align the entire grid vertically in container" />
            <div style={{ marginTop: 4, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>Key difference from Flexbox:</div>
              <div style={{ fontSize: 11, color: palette.mid }}>Grid has justify-items (cell-level) AND justify-content (grid-level). Flexbox only has justify-content.</div>
            </div>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="Grid Item Placement">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">ITEM</Tag>
            </div>
            <RefRow cmd="grid-column" desc="Shorthand for column start / end" />
            <RefRow cmd="grid-row" desc="Shorthand for row start / end" />
            <RefRow cmd="grid-area" desc="Shorthand: row-start / col-start / row-end / col-end" />
            <RefRow cmd="justify-self" desc="Align this item horizontally in its cell" />
            <RefRow cmd="align-self" desc="Align this item vertically in its cell" />
            <Code>{`/* Spanning multiple tracks */
grid-column: 1 / 3;      /* col 1 to 3 */
grid-column: span 2;     /* span 2 cols */
grid-row: 1 / -1;        /* full height */
grid-area: header;       /* named area */`}</Code>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="Grid Template Areas">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">CONTAINER</Tag>
              <Tag color="#2a7a7a">VISUAL</Tag>
            </div>
            <Code>{`grid-template-areas:
  "header header header"
  "nav    main   aside"
  "footer footer footer";

/* Item assignment */
.header { grid-area: header; }
.nav    { grid-area: nav; }
.main   { grid-area: main; }
.aside  { grid-area: aside; }`}</Code>
            <Bullet>Use <code>.</code> (dot) for empty cells in the area map</Bullet>
            <Bullet>Each row string must have the same number of columns</Bullet>
            <Bullet>Named areas create implicit named lines like <code>header-start</code> and <code>header-end</code></Bullet>
            <Bullet>Great for readable, visual layout definitions</Bullet>
          </SectionCard>

          {/* Section 12 — span 3 */}
          <SectionCard number="12" title="Container vs Item — Quick Reference" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>
                  Flexbox Properties
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  <div>
                    <Tag color="#3a6ea5">CONTAINER</Tag>
                    <div style={{ marginTop: 4 }}>
                      {["display: flex", "flex-direction", "flex-wrap", "flex-flow", "justify-content", "align-items", "align-content", "gap"].map((p, i) => (
                        <div key={p} style={{ fontSize: 11, color: palette.mid, padding: "2px 4px", background: i % 2 === 0 ? palette.accentPale : palette.highlight, borderRadius: 3, marginBottom: 2 }}>
                          <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: palette.accent }}>{p}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Tag color="#a53a3a">ITEM</Tag>
                    <div style={{ marginTop: 4 }}>
                      {["flex-grow", "flex-shrink", "flex-basis", "flex (shorthand)", "order", "align-self"].map((p, i) => (
                        <div key={p} style={{ fontSize: 11, color: palette.mid, padding: "2px 4px", background: i % 2 === 0 ? palette.accentPale : palette.highlight, borderRadius: 3, marginBottom: 2 }}>
                          <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: palette.accent }}>{p}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>
                  Grid Properties
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  <div>
                    <Tag color="#5a8a3c">CONTAINER</Tag>
                    <div style={{ marginTop: 4 }}>
                      {["display: grid", "grid-template-columns", "grid-template-rows", "grid-template-areas", "gap / row-gap / column-gap", "grid-auto-flow", "grid-auto-rows", "justify-items", "align-items", "justify-content", "align-content"].map((p, i) => (
                        <div key={p} style={{ fontSize: 11, color: palette.mid, padding: "2px 4px", background: i % 2 === 0 ? palette.accentPale : palette.highlight, borderRadius: 3, marginBottom: 2 }}>
                          <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: palette.accent }}>{p}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Tag color="#a53a3a">ITEM</Tag>
                    <div style={{ marginTop: 4 }}>
                      {["grid-column", "grid-row", "grid-area", "justify-self", "align-self", "order"].map((p, i) => (
                        <div key={p} style={{ fontSize: 11, color: palette.mid, padding: "2px 4px", background: i % 2 === 0 ? palette.accentPale : palette.highlight, borderRadius: 3, marginBottom: 2 }}>
                          <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: palette.accent }}>{p}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
          {/* Section 13 */}
          <SectionCard number="13" title="Flex Content Distribution">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CONTAINER</Tag>
            </div>
            {[
              { val: "flex-start", desc: "Pack items to the start of main axis" },
              { val: "flex-end", desc: "Pack items to the end of main axis" },
              { val: "center", desc: "Center items along main axis" },
              { val: "space-between", desc: "Equal space between, none at edges" },
              { val: "space-around", desc: "Equal space around each item (half at edges)" },
              { val: "space-evenly", desc: "Truly equal space between all items and edges" },
            ].map(({ val, desc }, i) => (
              <div key={val} style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 3,
                padding: "4px 8px",
                background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                borderRadius: 5,
              }}>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: palette.accent, fontWeight: 700, width: 105, flexShrink: 0 }}>{val}</code>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Flex Wrapping Strategies">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CONTAINER</Tag>
              <Tag color="#7a5a8a">PATTERNS</Tag>
            </div>
            <Bullet><strong>nowrap + min-width</strong> — items shrink but never below min-width, may overflow</Bullet>
            <Bullet><strong>wrap + flex-basis</strong> — items wrap when they hit their basis width</Bullet>
            <Bullet><strong>wrap + flex-grow</strong> — wrapped items stretch to fill remaining space on each line</Bullet>
            <Bullet><strong>align-content</strong> only works when flex-wrap is set (multi-line flex)</Bullet>
            <Code>{`/* Responsive wrap pattern */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.item {
  flex: 1 1 250px; /* grow, shrink, min 250px */
}`}</Code>
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="Grid Auto-Flow & Implicit Tracks">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">CONTAINER</Tag>
            </div>
            <RefRow cmd="grid-auto-flow" desc="Controls auto-placement direction" />
            <RefRow cmd="row" desc="Fill rows first (default)" />
            <RefRow cmd="column" desc="Fill columns first" />
            <RefRow cmd="dense" desc="Fill holes in the grid with smaller items" />
            <div style={{ marginTop: 6 }}>
              <RefRow cmd="grid-auto-rows" desc="Size of implicitly created rows" />
              <RefRow cmd="grid-auto-columns" desc="Size of implicitly created columns" />
            </div>
            <Code>{`/* Auto-size implicit rows */
grid-auto-rows: minmax(100px, auto);`}</Code>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Grid Sizing Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">CONTAINER</Tag>
              <Tag color="#8a6a3a">SIZING</Tag>
            </div>
            <KV k="fr" v="Fraction of remaining space after fixed tracks are placed" />
            <KV k="minmax(min, max)" v="Track size between min and max values" />
            <KV k="auto-fill" v="Create as many tracks as fit, even if empty" />
            <KV k="auto-fit" v="Like auto-fill but collapses empty tracks to 0" />
            <KV k="fit-content(val)" v="min(max-content, max(min-content, val))" />
            <Code>{`/* auto-fill vs auto-fit */
repeat(auto-fill, minmax(200px, 1fr))
/* Keeps empty columns */

repeat(auto-fit, minmax(200px, 1fr))
/* Collapses empties, items stretch */`}</Code>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Responsive Without Media Queries">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">GRID</Tag>
              <Tag color="#3a6ea5">FLEXBOX</Tag>
              <Tag color="#2a7a7a">RESPONSIVE</Tag>
            </div>
            <div style={{ fontSize: 12, color: palette.mid, marginBottom: 6 }}>Both systems can create responsive layouts without any media queries:</div>
            <Code>{`/* Grid: auto-fit responsive cards */
grid-template-columns:
  repeat(auto-fit, minmax(250px, 1fr));

/* Flexbox: wrapping responsive items */
display: flex;
flex-wrap: wrap;
.item { flex: 1 1 300px; }

/* Grid: RAM pattern (Repeat Auto Minmax) */
grid-template-columns:
  repeat(auto-fill, minmax(
    min(100%, 300px), 1fr
  ));`}</Code>
            <Bullet>RAM pattern handles narrow containers gracefully with <code>min()</code></Bullet>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Nesting Flex Inside Grid">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">COMBO</Tag>
            </div>
            <Bullet><strong>Grid for page structure</strong> — defines the overall layout skeleton</Bullet>
            <Bullet><strong>Flex inside grid cells</strong> — handles component-level alignment</Bullet>
            <Bullet>A grid item can simultaneously be a flex container for its children</Bullet>
            <Bullet>Use Grid for the macro layout, Flexbox for micro layout</Bullet>
            <Code>{`/* Grid page + Flex components */
.page {
  display: grid;
  grid-template: auto 1fr auto / 1fr;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</Code>
          </SectionCard>

          {/* Section 19 */}
          <SectionCard number="19" title="Common Flexbox Patterns">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">FLEXBOX</Tag>
              <Tag color="#7a5a8a">PATTERNS</Tag>
            </div>
            <KV k="Centering" v="display:flex; justify-content:center; align-items:center" />
            <KV k="Sticky footer" v="flex-direction:column; min-height:100vh; main gets flex:1" />
            <KV k="Navbar" v="justify-content:space-between; align-items:center" />
            <KV k="Input group" v="Input gets flex:1; buttons stay fixed width" />
            <Code>{`/* Perfect centering */
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`}</Code>
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Common Grid Patterns">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">GRID</Tag>
              <Tag color="#7a5a8a">PATTERNS</Tag>
            </div>
            <KV k="Holy Grail" v="header/footer rows, 3 column middle: nav, main, aside" />
            <KV k="Card grid" v="repeat(auto-fit, minmax(250px, 1fr)) — responsive cards" />
            <KV k="Dashboard" v="Named areas with varying spans for widgets" />
            <KV k="Overlap" v="Place items in same grid-area for stacking/overlap effects" />
            <Code>{`/* Holy Grail Layout */
.page {
  display: grid;
  grid-template:
    "header header header" auto
    "nav    main   aside"  1fr
    "footer footer footer" auto
    / 200px 1fr    200px;
}`}</Code>
          </SectionCard>

          {/* Section 21 */}
          <SectionCard number="21" title="Alignment Property Comparison">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">FLEXBOX</Tag>
              <Tag color="#5a8a3c">GRID</Tag>
            </div>
            {[
              { prop: "justify-content", flex: "Aligns items along main axis", grid: "Aligns entire grid in container" },
              { prop: "align-items", flex: "Aligns items along cross axis", grid: "Aligns items in their cell (block axis)" },
              { prop: "align-content", flex: "Aligns wrapped lines", grid: "Aligns entire grid vertically" },
              { prop: "justify-items", flex: "Does not exist in Flexbox", grid: "Aligns items in cell (inline axis)" },
              { prop: "align-self", flex: "Item overrides cross-axis alignment", grid: "Item overrides block-axis cell alignment" },
              { prop: "justify-self", flex: "Does not exist in Flexbox", grid: "Item overrides inline-axis cell alignment" },
            ].map(({ prop, flex, grid }, i) => (
              <div key={prop} style={{
                padding: "4px 6px", marginBottom: 3, borderRadius: 4,
                background: i % 2 === 0 ? palette.accentPale : palette.highlight,
              }}>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: palette.accent, fontWeight: 700 }}>{prop}</code>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 2 }}>
                  <div style={{ fontSize: 10, color: palette.mid }}><strong>Flex:</strong> {flex}</div>
                  <div style={{ fontSize: 10, color: palette.mid }}><strong>Grid:</strong> {grid}</div>
                </div>
              </div>
            ))}
          </SectionCard>

          {/* Section 22 */}
          <SectionCard number="22" title="Debugging Tips">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">DEVTOOLS</Tag>
            </div>
            <Bullet>Chrome/Firefox DevTools show <strong>flex/grid badges</strong> next to elements — click to toggle overlays</Bullet>
            <Bullet>Grid overlay shows line numbers, area names, and track sizes visually</Bullet>
            <Bullet>Flex overlay shows free space distribution and item basis sizes</Bullet>
            <Bullet>Use <code>outline: 1px solid red</code> on items to see actual boundaries vs perceived ones</Bullet>
            <div style={{ marginTop: 6, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.dark }}>Common pitfalls:</div>
              <div style={{ fontSize: 11, color: palette.mid }}>Forgetting min-width:0 on flex items (text overflow), not setting height on grid container, using % gap inside flex (inconsistent)</div>
            </div>
          </SectionCard>

          {/* Section 23 */}
          <SectionCard number="23" title="Browser Support & Gotchas">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">COMPAT</Tag>
            </div>
            <Bullet>Both Flexbox and Grid have <strong>full support</strong> in all modern browsers</Bullet>
            <Bullet><code>gap</code> in Flexbox is newer — supported since Safari 14.1+ (2021)</Bullet>
            <Bullet>Subgrid (grid items sharing parent tracks) only in Firefox and Safari — Chrome 117+</Bullet>
            <Bullet>Masonry layout is still experimental — Firefox flag only</Bullet>
            <div style={{ marginTop: 6, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.dark }}>IE 11 note:</div>
              <div style={{ fontSize: 11, color: palette.mid }}>IE 11 supports an old Grid spec with -ms- prefix. Flexbox works but has many bugs. IE 11 is EOL — do not support it for new projects.</div>
            </div>
          </SectionCard>

          {/* Section 24 — span 3 decision matrix */}
          <SectionCard number="24" title="Decision Matrix — Flexbox or Grid?" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Navigation Bar", when: "Use Flexbox", best: "Single row of items with spacing — justify-content handles distribution perfectly", icon: "Flex" },
                { title: "Page Layout", when: "Use Grid", best: "Header, sidebar, main, footer — grid-template-areas makes it readable and maintainable", icon: "Grid" },
                { title: "Card Gallery", when: "Use Grid", best: "Uniform card sizing with auto-fit + minmax for responsive reflow without media queries", icon: "Grid" },
                { title: "Form Row", when: "Use Flexbox", best: "Label + input + button inline — flex-grow on input lets it fill remaining space", icon: "Flex" },
                { title: "Dashboard", when: "Use Grid", best: "Widgets spanning multiple rows/columns — grid-area gives precise 2D control", icon: "Grid" },
                { title: "Button Group", when: "Use Flexbox", best: "Inline buttons with gap — simple one-axis distribution with optional wrapping", icon: "Flex" },
                { title: "Magazine Layout", when: "Use Grid", best: "Overlapping elements, varied sizes — place items in same cells for creative layouts", icon: "Grid" },
                { title: "Centering Content", when: "Use Either", best: "Both work: Flexbox with justify+align or Grid with place-items: center (fewer lines)", icon: "Both" },
              ].map(({ title, when, best, icon }) => (
                <div key={title} style={{
                  background: palette.highlight,
                  borderRadius: 8,
                  padding: "10px 12px",
                  border: `1px solid ${palette.cardBorder}`,
                }}>
                  <div style={{ marginBottom: 4 }}>
                    <Tag color={icon === "Flex" ? "#3a6ea5" : icon === "Grid" ? "#5a8a3c" : "#7a5a8a"}>{icon}</Tag>
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
        Flexbox {"&"} Grid Comparison Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Container vs Item Properties · CSS Layout Reference
        </span>
      </div>
    </div>
  );
}
