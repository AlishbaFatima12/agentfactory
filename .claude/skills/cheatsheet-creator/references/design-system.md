# Cheatsheet Design System Reference

This document contains the exact design system for all cheatsheets. Copy these components verbatim into every cheatsheet you generate, then compose sections using them.

## Color Palette

```javascript
const palette = {
  bg: "#faf5ef", // Page background — warm parchment
  card: "#fff8f0", // Card background — cream
  cardBorder: "#e8d5c4", // Card border — soft tan
  accent: "#c0582a", // Primary accent — burnt orange
  accentLight: "#e87a45", // Lighter accent — for hover/active states
  accentPale: "#f5ddd0", // Pale accent — alternating row backgrounds
  dark: "#2c1810", // Primary text — espresso
  mid: "#3d2518", // Secondary text — rich espresso brown (darkened for readability)
  codeBg: "#2c1810", // Code block background — espresso
  codeText: "#fff", // Code block text — white for maximum readability
  tagBg: "#c0582a", // Default tag background
  tagText: "#fff", // Tag text — always white
  highlight: "#fff3e6", // Highlight background — soft peach
};
```

Never change these colors. They are the identity of the cheatsheet brand.

### Accessibility: Dark Surface Contrast Rules

The cheatsheet toolbar and header use dark backgrounds (`palette.codeBg` / `palette.dark`). When placing text on these dark surfaces:

- **Code block text** on dark backgrounds: use `#fff` (white) for maximum readability
- **Body/instructional text** on dark backgrounds: use `#e0d8cc` or lighter (must achieve ≥4.5:1 contrast ratio against the dark surface)
- **Active/interactive elements**: use `#fff` (white)
- **Disabled/muted text**: use at least `#b8a898` (never below 4.5:1)
- **Copper accent colors** (`palette.accent`, `palette.accentLight`): reserve for headings, active states, and interactive highlights only — NOT for body text on dark
- The light palette colors (`palette.mid`, `palette.dark`) are for use on light card backgrounds only — never on the dark toolbar/header

### Accessibility: Light Mode Readability Rules

On light card backgrounds (`palette.card`, `palette.bg`, `palette.highlight`):

- **Body text** (`palette.mid = #3d2518`): Must achieve ≥9:1 contrast on card backgrounds for small text readability
- **Bold/strong terms**: Use `palette.dark` (`#2c1810`) for maximum emphasis — the darkest brown in the palette
- **Minimum font sizes**: Body text ≥10.5px, code blocks ≥10px, reference descriptions ≥10px. Never go below 9px for any text
- **Inline `<code>`**: Use `palette.accent` (`#c0582a`) which achieves ~5:1 on cream — acceptable for bold monospace but never for body text
- **Never use `palette.accent` for body text** on light backgrounds — it's too light for non-bold, non-monospace text at small sizes

## Font Stack

- **Headings:** `"'Georgia', serif"` — weight 800-900, letter-spacing: -0.3px
- **Body:** `"'Segoe UI', 'Helvetica Neue', sans-serif"` — weight 400-600
- **Code:** `"'JetBrains Mono', 'Fira Code', 'Courier New', monospace"` — weight 400

## Required Imports

Every cheatsheet begins with exactly this import:

```jsx
import { useState } from "react";
```

No other imports. No external libraries. No Tailwind.

---

## Primitive Components

Copy all of these into every cheatsheet. Do not modify their styles.

### Code — Dark code block

```jsx
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
```

Usage: Wrap multi-line code, CLI commands, config snippets, file structures.

### Tag — Colored badge pill

```jsx
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
```

Usage: Category labels, status badges, version indicators, difficulty levels.
Use varied colors for different categories. **ONLY use these approved secondary colors — never invent new hex values:**

- Green: `"#5a8a3c"`
- Blue: `"#3a6ea5"`
- Purple: `"#7a5a8a"`
- Gold: `"#8a6a3a"`
- Teal: `"#2a7a7a"`
- Red: `"#a53a3a"`
- Default (burnt-orange): omit the `color` prop to use `palette.tagBg`

These 7 colors (6 secondary + default) are the ONLY allowed Tag colors. Do not use any other hex values.

### Bullet — Circle-prefixed list item

```jsx
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
```

Usage: Feature lists, best practices, tips, guidelines. Supports inline `<code>` and `<strong>` inside.

### KV — Key-value pair

```jsx
const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);
```

Usage: Definitions, parameter descriptions, quick facts, pricing tiers.

### RefRow — Two-column command reference

```jsx
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
```

Usage: Keyboard shortcuts, CLI commands, API endpoints, function signatures. The `cmd` column width (130px) can be adjusted between 100-160px if needed for the content.

---

## Layout Components

### SectionCard — The primary content container

```jsx
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
```

Props:

- `number` — Section number displayed in the badge (string)
- `title` — Section heading text
- `span` — How many grid columns to span (default 1, use 2 or 3 for wide sections)
- `children` — Section content composed from primitive components

### Highlight Box — Emphasized content area inside a section

Use this inline style block for tips, warnings, or grouped secondary content:

```jsx
<div
  style={{
    marginTop: 8,
    padding: "6px 8px",
    background: palette.highlight,
    borderRadius: 6,
  }}
>
  {/* Content here */}
</div>
```

### Alternating Row — For lists of items with visual rhythm

```jsx
<div
  style={{
    padding: "5px 8px",
    background: i % 2 === 0 ? palette.accentPale : palette.highlight,
    borderRadius: 5,
    marginBottom: 5,
  }}
>
  {/* Row content */}
</div>
```

### Two-Column Grid Inside a Section

```jsx
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
  {items.map((item) => (
    <div key={item} style={{ fontSize: 11.5, color: palette.mid }}>
      ○ {item}
    </div>
  ))}
</div>
```

---

## Page Structure

### Overall Page Layout

```jsx
export default function TopicCheatsheet() {
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
      {/* Page Content */}
      {/* Footer */}
    </div>
  );
}
```

### Header

```jsx
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
    Topic Name <span style={{ color: palette.accentLight }}>Cheatsheet</span>
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
    Subtitle · Key Areas · Separated by Dots — Year Edition
  </div>
  {/* Page Tabs (only if multi-page) */}
  <div
    style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}
  >
    {pages.map((label, i) => (
      <button
        key={i}
        onClick={() => setPage(i)}
        style={{
          background:
            page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
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
```

### Content Grid

```jsx
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
  {/* SectionCards go here */}
</div>
```

Each page should have 9-12 SectionCards arranged in the 3-column grid. Use `span={2}` or `span={3}` sparingly — at most one wide section per page, usually for summary tables or decision matrices.

### Footer

```jsx
<div
  style={{
    textAlign: "center",
    padding: "14px 0 18px",
    fontSize: 12,
    color: palette.mid,
    fontFamily: "'Georgia', serif",
  }}
>
  Topic Cheatsheet — Created {new Date().getFullYear()}
  <br />
  <span style={{ fontSize: 10.5, color: palette.mid }}>
    Source attribution or version note
  </span>
</div>
```

---

## Content Composition Patterns

### Pattern A — Intro text + Bullets

Good for: best practices, tips, feature overviews.

```jsx
<SectionCard number="1" title="Getting Started">
  <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
    Brief introductory sentence about this section.
  </div>
  <Bullet>First important point</Bullet>
  <Bullet>
    Second point with <code>inline code</code>
  </Bullet>
  <Bullet>
    <strong>Bold lead</strong> followed by explanation
  </Bullet>
</SectionCard>
```

### Pattern B — Code block + KV pairs

Good for: installation, config, setup instructions.

```jsx
<SectionCard number="2" title="Installation">
  <Code>{`npm install something
cd project && npm start`}</Code>
  <div style={{ marginTop: 8 }}>
    <KV k="Requires" v="Node 18+" />
    <KV k="License" v="MIT" />
  </div>
</SectionCard>
```

### Pattern C — Tags + Code + Bullets

Good for: API references, feature categories.

```jsx
<SectionCard number="3" title="API Methods">
  <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
    <Tag>GET</Tag>
    <Tag color="#5a8a3c">POST</Tag>
    <Tag color="#a53a3a">DELETE</Tag>
  </div>
  <Code>{`GET /api/users/:id
POST /api/users { name, email }`}</Code>
  <Bullet>All endpoints require authentication</Bullet>
</SectionCard>
```

### Pattern D — RefRow table

Good for: commands, shortcuts, quick lookups.

```jsx
<SectionCard number="4" title="Keyboard Shortcuts">
  <RefRow cmd="Ctrl+S" desc="Save current file" />
  <RefRow cmd="Ctrl+P" desc="Quick open file" />
  <RefRow cmd="Ctrl+Shift+P" desc="Command palette" />
</SectionCard>
```

### Pattern E — Alternating rows

Good for: hierarchies, layer architectures, priority lists.

```jsx
<SectionCard number="5" title="Architecture Layers">
  {[
    { l: "L1", name: "Presentation", desc: "UI components" },
    { l: "L2", name: "Business", desc: "Domain logic" },
    { l: "L3", name: "Data", desc: "Persistence" },
  ].map(({ l, name, desc }, i) => (
    <div
      key={l}
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
      <span
        style={{
          fontWeight: 900,
          color: palette.accent,
          fontSize: 12,
          width: 24,
        }}
      >
        {l}
      </span>
      <span
        style={{
          fontWeight: 700,
          color: palette.dark,
          fontSize: 12,
          width: 80,
        }}
      >
        {name}
      </span>
      <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
    </div>
  ))}
</SectionCard>
```

### Pattern F — Full-width decision guide

Good for: comparison tables, decision matrices, summary cards.

```jsx
<SectionCard number="6" title="When to Use What" span={3}>
  <div
    style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}
  >
    {items.map(({ title, when, best, icon }) => (
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
        <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>
          {best}
        </div>
      </div>
    ))}
  </div>
</SectionCard>
```

---

## Responsive Design

Since inline styles cannot use `@media` queries, add an embedded `<style>` tag inside the component for responsive breakpoints. This is self-contained and doesn't violate the "no CSS files" rule.

### Required Responsive Pattern

Add this `<style>` tag at the start of the component's return JSX, wrapping everything in a Fragment:

```jsx
return (
  <>
    <style>{`
      @media (max-width: 900px) {
        .cheatsheet-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 600px) {
        .cheatsheet-grid { grid-template-columns: 1fr !important; }
        .cheatsheet-grid > div { grid-column: span 1 !important; }
      }
    `}</style>
    <div
      style={
        {
          /* main wrapper */
        }
      }
    >
      ...
    </div>
  </>
);
```

Add `className="cheatsheet-grid"` to every content grid div:

```jsx
<div className="cheatsheet-grid" style={{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 12,
  padding: "16px 18px",
  maxWidth: 1050,
  margin: "0 auto",
}}>
```

**Key rules:**

- The `<style>` tag is inside the JSX, not a separate CSS file — this is allowed
- Use `!important` to override inline styles from the `style` prop
- At 600px and below, force ALL sections to single column (override `span={2}` and `span={3}`)
- Use `className="cheatsheet-grid"` on EVERY content grid (each page's grid)
- Wrap the entire return in a Fragment `<>...</>` to accommodate both `<style>` and the main wrapper

---

## Rules and Constraints

1. **Single file only.** Every cheatsheet is one `.jsx` file with a default export.
2. **Inline styles only.** No CSS imports, no Tailwind, no styled-components. (Embedded `<style>` tags for responsive breakpoints are the only exception.)
3. **Only `useState` from React.** No other hooks or libraries.
4. **Zero required props.** The component is completely self-contained.
5. **All data is hardcoded.** No fetching, no localStorage, no external data.
6. **Target 12-16 sections** across all pages. 12 focused, workflow-oriented sections are better than 24 scattered reference sections. Only go above 16 if every section genuinely earns its place for a working professional.
7. **Maximum 2 pages.** If content exceeds 16 sections, prioritize and condense rather than adding a page.
8. **Every section must be substantive.** Minimum 4 content items per section — this means 4+ Bullet, KV, RefRow, Code blocks, or styled data rows. Sections with only 2-3 items should be merged into adjacent sections or expanded. No exceptions for "overview" or "intro" sections.
9. **Code examples must be correct.** Verify syntax, commands, and API signatures.
10. **Use web search** for any topic where you need to verify current commands, versions, or features.
11. **Section numbers are sequential** across pages (Page 1: 1-12, Page 2: 13-16).
12. **One `span={3}` section max per page** (for decision guides or summary tables).
13. **Define ALL primitive components** (Code, Tag, Bullet, KV, RefRow, SectionCard) at the top of every cheatsheet, even for non-technical topics that may not use all of them. This ensures structural consistency.
14. **Only use palette colors.** Every hex color in the file must come from the `palette` object or the approved Tag secondary colors. Never invent new hex values.
15. **JSX escaping.** All special characters (`${}`, `\`, `<`, `>`, `{`, `}`, quotes) in text content must be properly escaped for JSX. See SKILL.md for the complete escaping rules. This is the #1 cause of render failures.
16. **Responsive design is required.** Every cheatsheet must include the `<style>` tag with media queries and use `className="cheatsheet-grid"` on content grids. See the Responsive Design section above.
