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

export default function FlexboxGridCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Properties & Axes", "Page 2: Patterns & Recipes"];

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
          Flexbox vs Grid{" "}
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
          Container vs Item · Alignment · Layout Patterns — 2026 Edition
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
          {/* 1 — When to Use Which */}
          <SectionCard number="1" title="When to Use Which">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Flexbox and Grid solve different layout problems. Pick the right tool.
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Flexbox</Tag>
              <Tag color="#5a8a3c">Grid</Tag>
            </div>
            <Bullet><strong>Flexbox</strong> — 1D layout (row OR column at a time)</Bullet>
            <Bullet><strong>Grid</strong> — 2D layout (rows AND columns together)</Bullet>
            <Bullet><strong>Flexbox</strong> — content-driven sizing, items dictate layout</Bullet>
            <Bullet><strong>Grid</strong> — layout-driven sizing, grid dictates placement</Bullet>
            <Bullet>Use <strong>Flexbox</strong> for navbars, button groups, card rows</Bullet>
            <Bullet>Use <strong>Grid</strong> for page layouts, dashboards, galleries</Bullet>
            <Bullet>They <strong>nest beautifully</strong> — Grid for page, Flex for components</Bullet>
          </SectionCard>

          {/* 2 — Flex Container Properties */}
          <SectionCard number="2" title="Flex Container Properties">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Container</Tag>
            </div>
            <RefRow cmd="display" desc="flex | inline-flex" />
            <RefRow cmd="flex-direction" desc="row | row-reverse | column | column-reverse" />
            <RefRow cmd="flex-wrap" desc="nowrap | wrap | wrap-reverse" />
            <RefRow cmd="justify-content" desc="Align along main axis" />
            <RefRow cmd="align-items" desc="Align along cross axis" />
            <RefRow cmd="align-content" desc="Align wrapped lines (multi-line only)" />
            <RefRow cmd="gap" desc="Space between items (row-gap, column-gap)" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                Shorthand: <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>flex-flow: row wrap</code> = direction + wrap
              </div>
            </div>
          </SectionCard>

          {/* 3 — Grid Container Properties */}
          <SectionCard number="3" title="Grid Container Properties">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Container</Tag>
            </div>
            <RefRow cmd="display" desc="grid | inline-grid" />
            <RefRow cmd="grid-template-columns" desc="Define column track sizes" />
            <RefRow cmd="grid-template-rows" desc="Define row track sizes" />
            <RefRow cmd="grid-template-areas" desc="Named layout regions" />
            <RefRow cmd="justify-items" desc="Align items inline (row axis)" />
            <RefRow cmd="align-items" desc="Align items block (column axis)" />
            <RefRow cmd="justify-content" desc="Align grid in container (row)" />
            <RefRow cmd="align-content" desc="Align grid in container (col)" />
            <RefRow cmd="gap" desc="row-gap + column-gap shorthand" />
            <RefRow cmd="grid-auto-flow" desc="row | column | dense" />
          </SectionCard>

          {/* 4 — Flex Item Properties */}
          <SectionCard number="4" title="Flex Item Properties">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Item</Tag>
            </div>
            <RefRow cmd="order" desc="Reorder item (default 0)" />
            <RefRow cmd="flex-grow" desc="How much item grows (0 = don't)" />
            <RefRow cmd="flex-shrink" desc="How much item shrinks (1 = default)" />
            <RefRow cmd="flex-basis" desc="Initial size before growing/shrinking" />
            <RefRow cmd="align-self" desc="Override container's align-items" />
            <Code>{`/* The flex shorthand */
flex: <grow> <shrink> <basis>;
flex: 1;       /* = 1 1 0% — grow, shrink, no base */
flex: auto;    /* = 1 1 auto — grow, shrink, content-sized */
flex: none;    /* = 0 0 auto — fixed size */
flex: 0 0 200px; /* fixed 200px, no grow/shrink */`}</Code>
          </SectionCard>

          {/* 5 — Grid Item Properties */}
          <SectionCard number="5" title="Grid Item Properties">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Item</Tag>
            </div>
            <RefRow cmd="grid-column" desc="start / end (or span N)" />
            <RefRow cmd="grid-row" desc="start / end (or span N)" />
            <RefRow cmd="grid-area" desc="Named area or row/col shorthand" />
            <RefRow cmd="justify-self" desc="Align this item inline (row axis)" />
            <RefRow cmd="align-self" desc="Align this item block (col axis)" />
            <RefRow cmd="place-self" desc="align-self / justify-self shorthand" />
            <Code>{`/* Spanning and placement */
grid-column: 1 / 3;      /* cols 1-2 */
grid-column: span 2;     /* span 2 cols */
grid-row: 1 / -1;        /* full height */
grid-area: header;       /* named area */
grid-area: 1 / 1 / 3 / 4; /* r1/c1 to r3/c4 */`}</Code>
          </SectionCard>

          {/* 6 — The Alignment Matrix */}
          <SectionCard number="6" title="The Alignment Matrix">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The #1 confusion: which alignment property goes where.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: 2 }}>
              <div style={{ padding: "4px 8px", fontWeight: 800, fontSize: 11, color: palette.dark }}></div>
              <div style={{ padding: "4px 8px", fontWeight: 800, fontSize: 11, color: "#3a6ea5", textAlign: "center" }}>Main Axis</div>
              <div style={{ padding: "4px 8px", fontWeight: 800, fontSize: 11, color: "#a53a3a", textAlign: "center" }}>Cross Axis</div>

              <div style={{ padding: "4px 8px", fontWeight: 700, fontSize: 11, color: palette.accent, background: palette.accentPale, borderRadius: 4 }}>Container</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.accentPale, borderRadius: 4, textAlign: "center" }}>justify-content</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.accentPale, borderRadius: 4, textAlign: "center" }}>align-items</div>

              <div style={{ padding: "4px 8px", fontWeight: 700, fontSize: 11, color: palette.accent, background: palette.highlight, borderRadius: 4 }}>Item</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.highlight, borderRadius: 4, textAlign: "center" }}>—</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.highlight, borderRadius: 4, textAlign: "center" }}>align-self</div>

              <div style={{ padding: "4px 8px", fontWeight: 700, fontSize: 11, color: "#5a8a3c", background: palette.accentPale, borderRadius: 4 }}>Grid Container</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.accentPale, borderRadius: 4, textAlign: "center" }}>justify-items</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.accentPale, borderRadius: 4, textAlign: "center" }}>align-items</div>

              <div style={{ padding: "4px 8px", fontWeight: 700, fontSize: 11, color: "#5a8a3c", background: palette.highlight, borderRadius: 4 }}>Grid Item</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.highlight, borderRadius: 4, textAlign: "center" }}>justify-self</div>
              <div style={{ padding: "4px 8px", fontSize: 11, color: palette.mid, background: palette.highlight, borderRadius: 4, textAlign: "center" }}>align-self</div>
            </div>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                Remember: justify = inline (row), align = block (column). Flex has NO justify-self.
              </div>
            </div>
          </SectionCard>

          {/* 7 — Flex Direction & Axes */}
          <SectionCard number="7" title="Flex Direction & Axes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The main axis follows <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>flex-direction</code>. Cross axis is perpendicular.
            </div>
            {[
              { dir: "row", main: "Left → Right", cross: "Top → Bottom" },
              { dir: "row-reverse", main: "Right → Left", cross: "Top → Bottom" },
              { dir: "column", main: "Top → Bottom", cross: "Left → Right" },
              { dir: "column-reverse", main: "Bottom → Top", cross: "Left → Right" },
            ].map(({ dir, main, cross }, i) => (
              <div
                key={dir}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <code style={{ fontWeight: 700, color: palette.accent, fontSize: 11, width: 100, fontFamily: "'JetBrains Mono', monospace" }}>{dir}</code>
                <span style={{ fontSize: 11, color: palette.dark, width: 100 }}>{main}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{cross}</span>
              </div>
            ))}
            <Bullet><code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>justify-content</code> always works along the <strong>main</strong> axis</Bullet>
            <Bullet><code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>align-items</code> always works along the <strong>cross</strong> axis</Bullet>
          </SectionCard>

          {/* 8 — Grid Sizing Functions */}
          <SectionCard number="8" title="Grid Sizing Functions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Container</Tag>
              <Tag color="#2a7a7a">Sizing</Tag>
            </div>
            <RefRow cmd="fr" desc="Fractional unit — share remaining space" />
            <RefRow cmd="minmax(a, b)" desc="Size between min a and max b" />
            <RefRow cmd="auto" desc="Size to content" />
            <RefRow cmd="min-content" desc="Smallest size without overflow" />
            <RefRow cmd="max-content" desc="Size at widest content" />
            <RefRow cmd="fit-content(x)" desc="Clamp between min-content and x" />
            <Code>{`/* Common patterns */
grid-template-columns: 1fr 2fr 1fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-template-columns: minmax(200px, 1fr) 3fr;`}</Code>
          </SectionCard>

          {/* 9 — Grid Template Areas */}
          <SectionCard number="9" title="Grid Template Areas">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Container</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Name regions in your grid for readable, visual layouts.
            </div>
            <Code>{`/* Container defines the map */
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
}

/* Items claim their area */
.header { grid-area: header; }
.nav    { grid-area: nav; }
.main   { grid-area: main; }
.aside  { grid-area: aside; }
.footer { grid-area: footer; }`}</Code>
            <Bullet>Use <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>.</code> for empty cells in the template</Bullet>
            <Bullet>Each row must have the same number of columns</Bullet>
          </SectionCard>

          {/* 10 — justify-content Values */}
          <SectionCard number="10" title="justify-content Values">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Controls distribution along the main axis. Works on both Flex and Grid containers.
            </div>
            {[
              { val: "flex-start", desc: "Pack to start (default in flex)" },
              { val: "flex-end", desc: "Pack to end" },
              { val: "center", desc: "Center all items" },
              { val: "space-between", desc: "Even space, no edges" },
              { val: "space-around", desc: "Even space, half-size edges" },
              { val: "space-evenly", desc: "Truly even space everywhere" },
              { val: "stretch", desc: "Stretch items (Grid default)" },
            ].map(({ val, desc }, i) => (
              <div
                key={val}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                }}
              >
                <code style={{ fontWeight: 700, color: palette.accent, fontSize: 11, width: 110, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{val}</code>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* 11 — align-items Values */}
          <SectionCard number="11" title="align-items Values">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Controls alignment along the cross axis. Container property in both Flex and Grid.
            </div>
            {[
              { val: "stretch", desc: "Fill container height (default)" },
              { val: "flex-start", desc: "Align to top / start" },
              { val: "flex-end", desc: "Align to bottom / end" },
              { val: "center", desc: "Vertically center" },
              { val: "baseline", desc: "Align text baselines" },
            ].map(({ val, desc }, i) => (
              <div
                key={val}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                }}
              >
                <code style={{ fontWeight: 700, color: palette.accent, fontSize: 11, width: 110, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{val}</code>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                Override per-item with <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>align-self</code> (both Flex and Grid items)
              </div>
            </div>
          </SectionCard>

          {/* 12 — Container vs Item Quick Ref */}
          <SectionCard number="12" title="Container vs Item — Quick Reference" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Tag color="#3a6ea5">Flexbox</Tag>
                  <span style={{ fontSize: 12, fontWeight: 700, color: palette.dark }}>Container vs Item</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  <div style={{ background: palette.accentPale, borderRadius: 6, padding: "8px 10px" }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: palette.accent, marginBottom: 4 }}>CONTAINER</div>
                    <div style={{ fontSize: 11, color: palette.mid, lineHeight: 1.6 }}>
                      display<br />flex-direction<br />flex-wrap<br />flex-flow<br />justify-content<br />align-items<br />align-content<br />gap / row-gap / column-gap
                    </div>
                  </div>
                  <div style={{ background: palette.highlight, borderRadius: 6, padding: "8px 10px" }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#7a5a8a", marginBottom: 4 }}>ITEM</div>
                    <div style={{ fontSize: 11, color: palette.mid, lineHeight: 1.6 }}>
                      order<br />flex-grow<br />flex-shrink<br />flex-basis<br />flex (shorthand)<br />align-self
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Tag color="#5a8a3c">Grid</Tag>
                  <span style={{ fontSize: 12, fontWeight: 700, color: palette.dark }}>Container vs Item</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  <div style={{ background: palette.accentPale, borderRadius: 6, padding: "8px 10px" }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: palette.accent, marginBottom: 4 }}>CONTAINER</div>
                    <div style={{ fontSize: 11, color: palette.mid, lineHeight: 1.6 }}>
                      display<br />grid-template-*<br />grid-auto-rows<br />grid-auto-columns<br />grid-auto-flow<br />justify-items<br />align-items<br />justify-content<br />align-content<br />gap / row-gap / column-gap<br />place-items / place-content
                    </div>
                  </div>
                  <div style={{ background: palette.highlight, borderRadius: 6, padding: "8px 10px" }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#7a5a8a", marginBottom: 4 }}>ITEM</div>
                    <div style={{ fontSize: 11, color: palette.mid, lineHeight: 1.6 }}>
                      grid-column<br />grid-row<br />grid-area<br />justify-self<br />align-self<br />place-self<br />order
                    </div>
                  </div>
                </div>
              </div>
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
          {/* 13 — Centering Things */}
          <SectionCard number="13" title="Centering Things">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The most common layout need. Both Flexbox and Grid make it trivial.
            </div>
            <Code>{`/* Flexbox centering */
.parent {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center;     /* vertical */
}

/* Grid centering — even shorter */
.parent {
  display: grid;
  place-items: center; /* both axes! */
}

/* Single child shortcut */
.parent { display: grid; }
.child  { margin: auto; } /* centers both ways */`}</Code>
            <Bullet><code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>place-items: center</code> is Grid-only, the shortest centering trick</Bullet>
            <Bullet><code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>margin: auto</code> works in both Flex and Grid</Bullet>
          </SectionCard>

          {/* 14 — Common Flex Patterns */}
          <SectionCard number="14" title="Common Flex Patterns">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Flexbox</Tag>
              <Tag color="#8a6a3a">Recipes</Tag>
            </div>
            <Code>{`/* Navbar: logo left, links right */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Equal-width columns */
.cols { display: flex; }
.cols > * { flex: 1; }

/* Sticky footer */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex: 1; } /* pushes footer down */

/* Input with button */
.input-group { display: flex; }
input { flex: 1; }
button { flex: none; }`}</Code>
          </SectionCard>

          {/* 15 — Common Grid Patterns */}
          <SectionCard number="15" title="Common Grid Patterns">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Grid</Tag>
              <Tag color="#8a6a3a">Recipes</Tag>
            </div>
            <Code>{`/* Responsive card grid */
.cards {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* Holy grail layout */
.page {
  display: grid;
  grid-template:
    "head head head" auto
    "nav  main side" 1fr
    "foot foot foot" auto
    / 200px 1fr 200px;
  min-height: 100vh;
}

/* Dashboard with featured item */
.dash {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.featured { grid-column: span 2; }`}</Code>
          </SectionCard>

          {/* 16 — auto-fill vs auto-fit */}
          <SectionCard number="16" title="auto-fill vs auto-fit">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Grid</Tag>
              <Tag color="#2a7a7a">Responsive</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Both create responsive grids without media queries, but behave differently with few items.
            </div>
            <Code>{`/* auto-fill: keeps empty tracks */
repeat(auto-fill, minmax(200px, 1fr))

/* auto-fit: collapses empty tracks */
repeat(auto-fit, minmax(200px, 1fr))`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="auto-fill" v="Creates as many tracks as fit, even if empty. Items don't stretch to fill." />
              <KV k="auto-fit" v="Collapses empty tracks to 0. Items stretch to fill the row." />
              <KV k="Few items?" v="auto-fit stretches them wide; auto-fill leaves gaps" />
              <KV k="Many items?" v="Both behave identically — all tracks are filled" />
            </div>
          </SectionCard>

          {/* 17 — Flex Wrapping */}
          <SectionCard number="17" title="Flex Wrapping Deep Dive">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Container</Tag>
            </div>
            <Code>{`/* Enable wrapping */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* Cards that wrap responsively */
.card {
  flex: 1 1 300px; /* grow, shrink, min-width */
  max-width: 400px;
}`}</Code>
            <Bullet><code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>flex-wrap: nowrap</code> is default — items will shrink or overflow</Bullet>
            <Bullet><code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>align-content</code> only works when wrapping creates multiple lines</Bullet>
            <Bullet>Use <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>flex-basis</code> (not <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>width</code>) to set the wrap breakpoint</Bullet>
            <Bullet>Last-row alignment issues? Consider Grid instead</Bullet>
          </SectionCard>

          {/* 18 — Grid Auto-Flow & Implicit Tracks */}
          <SectionCard number="18" title="Implicit Tracks & Auto-Flow">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Container</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Items beyond your template create implicit tracks. Control their size and flow direction.
            </div>
            <RefRow cmd="grid-auto-rows" desc="Size for rows created beyond template" />
            <RefRow cmd="grid-auto-columns" desc="Size for extra columns" />
            <RefRow cmd="grid-auto-flow" desc="row (default) | column | dense" />
            <Code>{`/* Auto-sized implicit rows */
.grid {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}

/* Dense packing — fills holes */
.grid { grid-auto-flow: dense; }`}</Code>
            <Bullet><strong>dense</strong> fills gaps left by spanning items — order may change visually</Bullet>
          </SectionCard>

          {/* 19 — Nesting Flex & Grid */}
          <SectionCard number="19" title="Nesting Flex Inside Grid">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Grid</Tag>
              <Tag color="#3a6ea5">Flexbox</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The most powerful pattern: Grid for page layout, Flex for component internals.
            </div>
            <Code>{`/* Grid: page-level layout */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
}

/* Flex: component-level layout */
.card {
  display: flex;
  flex-direction: column;
}
.card-body { flex: 1; }
.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}`}</Code>
            <Bullet>A grid item can also be a flex container</Bullet>
            <Bullet>Use Grid for the 2D "skeleton", Flex for 1D component flow</Bullet>
          </SectionCard>

          {/* 20 — Gap Property */}
          <SectionCard number="20" title="The Gap Property">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Flexbox</Tag>
              <Tag color="#5a8a3c">Grid</Tag>
              <Tag color="#2a7a7a">Both</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Works identically in both Flexbox and Grid. Replaces margin hacks.
            </div>
            <RefRow cmd="gap: 12px" desc="Equal gap in both directions" />
            <RefRow cmd="gap: 8px 16px" desc="row-gap 8px, column-gap 16px" />
            <RefRow cmd="row-gap: 8px" desc="Vertical gap only" />
            <RefRow cmd="column-gap: 16px" desc="Horizontal gap only" />
            <Bullet>Gap only creates space <strong>between</strong> items, never at edges</Bullet>
            <Bullet>No more <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>margin</code> + negative-margin hacks for gutters</Bullet>
            <Bullet>Supported in Flexbox since 2021 — safe in all modern browsers</Bullet>
            <Bullet>Old syntax: <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>grid-gap</code> is deprecated, use <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>gap</code></Bullet>
          </SectionCard>

          {/* 21 — place-* Shorthands */}
          <SectionCard number="21" title="place-* Shorthands (Grid)">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Grid</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Grid has shorthand properties that combine align + justify in one line.
            </div>
            <RefRow cmd="place-items" desc="align-items / justify-items" />
            <RefRow cmd="place-content" desc="align-content / justify-content" />
            <RefRow cmd="place-self" desc="align-self / justify-self" />
            <Code>{`/* These are equivalent */
place-items: center;
/* same as */
align-items: center;
justify-items: center;

/* Different values per axis */
place-items: start center;
/* align-items: start */
/* justify-items: center */`}</Code>
            <Bullet><strong>place-items</strong> and <strong>place-content</strong> are Container properties</Bullet>
            <Bullet><strong>place-self</strong> is an Item property — overrides per element</Bullet>
          </SectionCard>

          {/* 22 — Gotchas & Tips */}
          <SectionCard number="22" title="Common Gotchas & Tips">
            <Bullet><strong>Flex items shrink by default</strong> — <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>flex-shrink: 1</code> means items can get smaller than their content</Bullet>
            <Bullet><strong>min-width: auto</strong> in flex — items won't shrink below content size. Fix: set <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>min-width: 0</code> or <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>overflow: hidden</code></Bullet>
            <Bullet><strong>Grid items stretch by default</strong> — <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>justify-items: stretch</code> is the Grid default</Bullet>
            <Bullet><strong>Margin auto in Flex</strong> absorbs extra space — useful for pushing items apart</Bullet>
            <Bullet><strong>order</strong> changes visual order but not tab/screen-reader order — accessibility concern</Bullet>
            <Bullet><strong>100% height</strong> — Grid items fill row height by default; Flex items need <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>align-items: stretch</code></Bullet>
            <Bullet><strong>Flex column + height</strong> — in column direction, <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>justify-content</code> becomes vertical, <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>align-items</code> becomes horizontal</Bullet>
          </SectionCard>

          {/* 23 — Decision Guide */}
          <SectionCard number="23" title="Decision Guide — Which Layout to Use" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Navigation Bar", when: "Use Flexbox", best: "1D row with space-between alignment, items have varying widths", icon: "NAV" },
                { title: "Card Grid", when: "Use Grid", best: "Equal-size cards in rows and columns, auto-fill for responsiveness", icon: "GRID" },
                { title: "Form Layout", when: "Use Grid", best: "Label-input pairs align perfectly in 2D columns, easy responsive", icon: "FORM" },
                { title: "Button Group", when: "Use Flexbox", best: "Inline row of buttons with gap, natural sizing per content", icon: "BTN" },
                { title: "Page Layout", when: "Use Grid", best: "Header/sidebar/main/footer with template-areas for readability", icon: "PAGE" },
                { title: "Media Object", when: "Use Flexbox", best: "Image + text side-by-side, text fills remaining space with flex: 1", icon: "IMG" },
                { title: "Dashboard", when: "Use Grid", best: "Mixed-size widgets with spanning, dense auto-flow fills gaps", icon: "DASH" },
                { title: "Centering", when: "Use Either", best: "Flex: justify + align center. Grid: place-items center. Both work.", icon: "CTR" },
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
                  <div style={{ fontSize: 13, marginBottom: 4, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace", color: palette.accent }}>{icon}</div>
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
        Flexbox vs Grid Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          CSS Flexbox & Grid Layout — Container vs Item Property Reference
        </span>
      </div>
    </div>
  );
}
