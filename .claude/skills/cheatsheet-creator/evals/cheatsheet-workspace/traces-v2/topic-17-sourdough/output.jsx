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

export default function SourdoughBreadCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Starter & Dough", "Page 2: Shape & Bake"];

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
          Sourdough Bread{" "}
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
          Starter Maintenance · Mixing · Fermentation · Shaping · Baking
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

      {/* Page 1: Starter & Dough */}
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
          <SectionCard number="1" title="Sourdough Essentials">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Natural</Tag>
              <Tag color="#3a6ea5">Wild Yeast</Tag>
              <Tag color="#7a5a8a">Fermented</Tag>
              <Tag color="#8a6a3a">Artisan</Tag>
            </div>
            <Bullet><strong>Sourdough</strong> uses wild yeast and lactobacilli bacteria instead of commercial yeast</Bullet>
            <Bullet><strong>Fermentation</strong> develops flavor, texture, and improves digestibility of wheat</Bullet>
            <Bullet><strong>Timing is everything</strong> — temperature controls fermentation speed more than any other variable</Bullet>
            <Bullet><strong>Patience required</strong> — a typical loaf takes 24-48 hours from start to finish</Bullet>
            <Bullet><strong>No two bakes are identical</strong> — ambient temp, humidity, and flour age all affect outcomes</Bullet>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="Starter Anatomy">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A healthy starter is a living ecosystem of wild yeast and lactic acid bacteria.
            </div>
            <KV k="Wild Yeast" v="Saccharomyces — produces CO2 gas for rise" />
            <KV k="LAB Bacteria" v="Lactobacillus — creates lactic and acetic acids for flavor" />
            <KV k="Flour" v="Provides sugars (starch) as food for microorganisms" />
            <KV k="Water" v="Hydrates flour, enables enzymatic activity" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Peak activity</strong> — starter doubles in 4-6 hours after feeding at 75-78°F</Bullet>
              <Bullet><strong>Mature starter</strong> — at least 14 days old with consistent rise/fall pattern</Bullet>
            </div>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="Daily Starter Maintenance">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Consistent feeding builds a strong, predictable starter.
            </div>
            <KV k="Active Baking" v="Feed every 12 hours at room temp (1:5:5 ratio)" />
            <KV k="Weekly Baking" v="Feed once daily, refrigerate between bakes" />
            <KV k="Fridge Storage" v="Feed once per week, discard all but 25g" />
            <KV k="Standard Ratio" v="1 part starter : 5 parts flour : 5 parts water (by weight)" />
            <Code>{`Daily Feed (room temp):
25g  starter (discard rest)
125g flour (mix of whole wheat + AP)
125g water (room temp, filtered)

Weekly Feed (fridge):
25g  starter
100g all-purpose flour
100g water`}</Code>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="Starter Health Signals">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Learn to read what your starter is telling you.
            </div>
            {[
              { signal: "Doubles in 4-6 hrs", meaning: "Healthy and active — ready to bake", status: "GOOD" },
              { signal: "Smells tangy/yogurty", meaning: "Balanced acid production — ideal flavor", status: "GOOD" },
              { signal: "Hooch (dark liquid)", meaning: "Hungry — needs more frequent feeding", status: "WARNING" },
              { signal: "Smells like acetone", meaning: "Starving — feed 2x daily for 3 days", status: "WARNING" },
              { signal: "Pink/orange streaks", meaning: "Contamination — discard and start fresh", status: "BAD" },
              { signal: "No rise after feeding", meaning: "Weak culture — switch to whole grain feeds", status: "FIX" },
            ].map(({ signal, meaning, status }, i) => (
              <div
                key={signal}
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
                <Tag color={status === "GOOD" ? "#5a8a3c" : status === "WARNING" ? "#8a6a3a" : status === "BAD" ? "#a53a3a" : "#3a6ea5"}>
                  {status}
                </Tag>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11.5, width: 120, flexShrink: 0 }}>{signal}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{meaning}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title={"Baker's Math & Hydration"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              All ingredients are expressed as a percentage of total flour weight.
            </div>
            <KV k="Flour" v="Always 100% — the baseline for all calculations" />
            <KV k="Water" v="65-80% — higher = more open crumb, harder to handle" />
            <KV k="Salt" v="2% — controls fermentation, strengthens gluten" />
            <KV k="Starter (levain)" v="15-20% — more starter = faster fermentation" />
            <Code>{`Example: 75% hydration loaf
  Flour:    500g (100%)
  Water:    375g  (75%)
  Salt:      10g   (2%)
  Starter:  100g  (20%)
  ─────────────────────
  Total:    985g dough`}</Code>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="Flour Selection Guide">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Protein</Tag>
              <Tag color="#5a8a3c">Whole Grain</Tag>
              <Tag color="#3a6ea5">White</Tag>
              <Tag color="#7a5a8a">Specialty</Tag>
            </div>
            <KV k="Bread Flour (12-14%)" v="Best for structure — strong gluten network, tall rise" />
            <KV k="All-Purpose (10-12%)" v="Good default — slightly softer crumb, easier to shape" />
            <KV k="Whole Wheat" v="Adds flavor and nutrition — use 10-30% of total flour" />
            <KV k="Rye Flour" v="Boosts fermentation — use 5-15%, too much makes sticky dough" />
            <Bullet><strong>Blend tip:</strong> 80% bread flour + 10% whole wheat + 10% rye gives great flavor with manageable handling</Bullet>
            <Bullet><strong>Fresh-milled flour</strong> ferments faster — reduce starter percentage or shorten bulk</Bullet>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="Mixing & Autolyse">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Autolyse hydrates flour and begins gluten development before kneading.
            </div>
            <Bullet><strong>Step 1:</strong> Mix flour and water only — no salt, no starter yet</Bullet>
            <Bullet><strong>Step 2:</strong> Rest 30-60 minutes covered at room temperature</Bullet>
            <Bullet><strong>Step 3:</strong> Add levain, mix until incorporated (squish through fingers)</Bullet>
            <Bullet><strong>Step 4:</strong> Rest 20 min, then add salt with a splash of water, pinch and fold to combine</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <KV k="Why autolyse?" v="Enzymes break down starches, gluten forms passively — less kneading needed" />
              <KV k="Skip if" v="Using a stand mixer — just mix everything together on low for 5 min" />
            </div>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="Bulk Fermentation">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Critical Phase</Tag>
              <Tag color="#8a6a3a">4-6 Hours</Tag>
            </div>
            <Bullet><strong>Goal:</strong> Dough should rise 50-75% in volume (not double!)</Bullet>
            <Bullet><strong>Stretch and fold</strong> every 30 min for first 2 hours (4 sets total)</Bullet>
            <Bullet><strong>Then rest undisturbed</strong> — let fermentation do its work for remaining time</Bullet>
            <Bullet><strong>Dough is ready when:</strong> jiggly, domed top, visible bubbles on sides, feels airy</Bullet>
            <Bullet><strong>Coil folds</strong> work better for high-hydration doughs above 78%</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <KV k="Under-fermented" v="Dense crumb, tight irregular holes, gummy texture" />
              <KV k="Over-fermented" v="Flat loaf, sour taste, blowouts during baking" />
            </div>
          </SectionCard>

          {/* Section 9 — Timing Reference (span 3) */}
          <SectionCard number="9" title="Temperature vs. Timing Reference" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Temperature is the single biggest variable. Use this reference to adjust your schedule.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { temp: "65°F / 18°C", bulk: "8-10 hours", proof: "14-18 hours", note: "Very slow — deep tangy flavor, good for overnight room-temp bulk" },
                { temp: "72°F / 22°C", bulk: "5-7 hours", proof: "10-14 hours", note: "Cool kitchen — forgiving schedule, great for beginners" },
                { temp: "78°F / 25°C", bulk: "4-5 hours", proof: "3-4 hours (or fridge)", note: "Ideal target — balanced flavor, predictable timing" },
                { temp: "85°F / 30°C", bulk: "2.5-3.5 hours", proof: "1.5-2.5 hours", note: "Summer heat — watch closely, easy to over-ferment" },
              ].map(({ temp, bulk, proof, note }) => (
                <div
                  key={temp}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>{temp}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>
                    Bulk: {bulk}
                  </div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>
                    Proof: {proof}
                  </div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 5 }}>{note}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Shape & Bake */}
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
          {/* Section 10 */}
          <SectionCard number="10" title="Preshaping & Bench Rest">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Preshaping organizes the dough and builds surface tension before final shaping.
            </div>
            <Bullet><strong>Flour the surface lightly</strong> — too much flour prevents the dough from gripping</Bullet>
            <Bullet><strong>Dump dough out</strong> gently, avoid degassing — use a wet bench scraper</Bullet>
            <Bullet><strong>Drag toward you</strong> on unfloured surface to build tension on the smooth top</Bullet>
            <Bullet><strong>Bench rest 20-30 min</strong> uncovered — the dough relaxes for easier final shaping</Bullet>
            <Bullet><strong>Ready when</strong> the dough spreads slightly but holds a mounded shape</Bullet>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="Final Shaping Techniques">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Boule</Tag>
              <Tag color="#3a6ea5">Batard</Tag>
              <Tag color="#7a5a8a">Technique</Tag>
            </div>
            <KV k="Boule (round)" v="Flip seam-up, fold edges to center like an envelope, flip seam-down, drag on counter to tighten" />
            <KV k="Batard (oval)" v="Flip seam-up, fold top down 2/3, fold sides in, roll toward you, seal seam" />
            <KV k="Surface tension" v="The key to oven spring — tight skin on top traps gas during baking" />
            <KV k="Seam side" v="Place seam-side UP in banneton (it will be seam-side DOWN when you flip to bake)" />
            <Bullet><strong>Use a bench scraper</strong> to handle sticky dough — wet hands also help</Bullet>
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="Cold Retard (Overnight Proof)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Refrigerating the shaped dough slows fermentation and develops complex flavor.
            </div>
            <Bullet><strong>Place shaped dough</strong> seam-side up in a floured banneton or lined bowl</Bullet>
            <Bullet><strong>Cover tightly</strong> with plastic wrap or place inside a sealed plastic bag</Bullet>
            <Bullet><strong>Refrigerate 8-16 hours</strong> at 38-40°F — longer = more sour flavor</Bullet>
            <Bullet><strong>Bake straight from fridge</strong> — cold dough is easier to score and holds shape better</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <KV k="Min time" v="8 hours — shorter won't develop enough flavor" />
              <KV k="Max time" v="48 hours possible if bulk was on the short side" />
              <KV k="Sweet spot" v="12-16 hours — best balance of flavor and structure" />
            </div>
          </SectionCard>

          {/* Section 13 */}
          <SectionCard number="13" title="The Poke Test & Readiness">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Judging when your dough is properly proofed — the most common mistake point.
            </div>
            {[
              { poke: "Springs back fast", level: "Under-proofed", action: "Let it proof longer — tight crumb and blowouts if baked now" },
              { poke: "Springs back slowly", level: "Ready to bake", action: "Indent fills about halfway — ideal proof level" },
              { poke: "Stays indented", level: "Over-proofed", action: "Reshape gently and proof again briefly, or bake immediately" },
              { poke: "Dough feels airy/fragile", level: "Way over", action: "Structure is degraded — consider reshaping into focaccia instead" },
            ].map(({ poke, level, action }, i) => (
              <div
                key={poke}
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
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11, width: 105, flexShrink: 0 }}>{poke}</span>
                <Tag color={level === "Ready to bake" ? "#5a8a3c" : level === "Under-proofed" ? "#3a6ea5" : "#a53a3a"}>{level}</Tag>
                <span style={{ fontSize: 10.5, color: palette.mid }}>{action}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Scoring Patterns & Technique">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>Lame</Tag>
              <Tag color="#5a8a3c">Ear</Tag>
              <Tag color="#7a5a8a">Design</Tag>
              <Tag color="#2a7a7a">Steam</Tag>
            </div>
            <Bullet><strong>Use a razor lame</strong> — kitchen knives drag and deflate the dough</Bullet>
            <Bullet><strong>Score at 30-45° angle</strong> for an ear (that flap that lifts during baking)</Bullet>
            <Bullet><strong>Score 1/4 to 1/2 inch deep</strong> — too shallow won't open, too deep deflates</Bullet>
            <Bullet><strong>Move quickly and confidently</strong> — hesitation causes ragged, uneven cuts</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <KV k="Single slash" v="Classic, reliable — best for beginners" />
              <KV k="Cross/hashtag" v="Even expansion, rustic look" />
              <KV k="Leaf/wheat" v="Decorative — score shallow so designs stay visible" />
            </div>
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="Oven Setup & Baking Method">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Heat</Tag>
              <Tag color="#2a7a7a">Dutch Oven</Tag>
            </div>
            <Bullet><strong>Preheat 1 hour</strong> at 500°F / 260°C with Dutch oven inside (lid on)</Bullet>
            <Bullet><strong>Flip dough onto parchment</strong> — score immediately, transfer to hot pot</Bullet>
            <Bullet><strong>Bake covered 20 min</strong> at 450°F / 230°C — steam from the lid creates crust</Bullet>
            <Bullet><strong>Remove lid, bake 20-25 min</strong> more until deep golden brown (205°F internal)</Bullet>
            <Bullet><strong>Cool on wire rack</strong> at least 1 hour — cutting early ruins the crumb structure</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <KV k="No Dutch oven?" v="Use an inverted roasting pan as a lid over a baking stone" />
            </div>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Baking Day Timeline">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Minute-by-minute guide for bake day (assuming overnight cold retard).
            </div>
            {[
              { time: "T-60 min", step: "Preheat oven to 500°F with Dutch oven inside" },
              { time: "T-0 min", step: "Remove dough from fridge, flip onto parchment paper" },
              { time: "T+1 min", step: "Score the dough quickly with a lame or razor blade" },
              { time: "T+2 min", step: "Lower into hot Dutch oven, cover with lid" },
              { time: "T+3 min", step: "Reduce oven to 450°F — start 20-minute covered timer" },
              { time: "T+23 min", step: "Remove lid — bake uncovered for 20-25 more minutes" },
              { time: "T+45 min", step: "Check color — deep golden to mahogany, internal temp 205°F" },
              { time: "T+46 min", step: "Transfer to wire rack — do NOT cut for at least 1 hour" },
            ].map(({ time, step }, i) => (
              <div
                key={time}
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 60, flexShrink: 0 }}>{time}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{step}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Troubleshooting Common Issues">
            <KV k="Dense, gummy crumb" v="Under-fermented bulk — let it go longer, look for 50-75% rise" />
            <KV k="Flat loaf, no spring" v="Over-proofed or weak shaping — tighten preshape, shorten proof" />
            <KV k="Huge holes at top" v="Under-proofed — gas gets trapped under tight skin, can't distribute" />
            <KV k="Too sour" v="Reduce cold retard time, feed starter more often, use less whole grain" />
            <KV k="Not sour enough" v="Longer cold retard (24-36 hrs), add 5-10% rye, use cooler bulk temp" />
            <KV k="Pale, soft crust" v="Oven not hot enough or not enough steam — preheat longer, check seal on Dutch oven" />
            <KV k="Burnt bottom" v="Place a baking sheet on the rack below, or double-stack sheet pans" />
          </SectionCard>

          {/* Section 18 — Full Process Timeline (span 3) */}
          <SectionCard number="18" title="Full Process: Start to Finish" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              A complete sourdough timeline — two scheduling options depending on when you want fresh bread.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "Evening Mix Schedule",
                  when: "Bread ready next afternoon",
                  best: "6 PM: Feed starter. 10 PM: Mix dough + autolyse. 10:30 PM-midnight: Stretch & folds every 30 min. Midnight: Shape, into fridge. Next day 12 PM: Preheat. 1 PM: Score & bake. 2 PM: Fresh bread!",
                  icon: "A",
                },
                {
                  title: "Morning Mix Schedule",
                  when: "Bread ready same evening",
                  best: "6 AM: Feed starter. 10 AM: Mix dough + autolyse. 10:30 AM-12:30 PM: Stretch & folds. 3 PM: Preshape. 3:30 PM: Final shape, into fridge. 8 PM: Preheat. 9 PM: Score & bake. 10 PM: Fresh bread!",
                  icon: "B",
                },
                {
                  title: "Weekend Warrior",
                  when: "Minimal weekday effort",
                  best: "Fri evening: Feed starter. Sat 9 AM: Mix dough. Sat 9 AM-2 PM: Bulk + folds. Sat 3 PM: Shape, into fridge. Sun 9 AM: Preheat. Sun 10 AM: Bake. Sun 11 AM: Fresh bread for brunch!",
                  icon: "C",
                },
                {
                  title: "Key Checkpoints",
                  when: "What to watch for",
                  best: "Starter: Peaked and domed, passes float test. Post-bulk: Jiggly, 50-75% bigger, bubbles visible. Post-shape: Holds shape, smooth surface tension. Post-score: Clean cuts that open slightly.",
                  icon: "!",
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
                      fontSize: 16,
                      marginBottom: 4,
                      fontWeight: 900,
                      color: palette.accent,
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {icon}
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 5, lineHeight: 1.5 }}>{best}</div>
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
        Sourdough Bread Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          From starter to loaf — your complete timing and technique reference
        </span>
      </div>
    </div>
  );
}
