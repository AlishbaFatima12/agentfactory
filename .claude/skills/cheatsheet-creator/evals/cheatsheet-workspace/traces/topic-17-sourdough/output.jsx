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
  const pages = ["Page 1: Starter & Dough", "Page 2: Baking & Fixes"];

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
          Starter Maintenance · Dough Process · Baking · Troubleshooting
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

      {/* Page 1: Starter & Dough Fundamentals */}
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
          {/* Section 1: Starter Basics */}
          <SectionCard number="1" title="Starter Basics">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A sourdough starter is a live culture of wild yeast and lactic acid bacteria maintained with flour and water.
            </div>
            <KV k="Ratio" v="Equal parts flour and water by weight (1:1:1 — starter:flour:water)" />
            <KV k="Age to use" v="At least 7–14 days old before first bake" />
            <KV k="Container" v="Glass jar, loosely covered (not airtight)" />
            <KV k="Best flour" v="Unbleached all-purpose or whole wheat to start" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Healthy signs:</strong> doubles in 4–6 hours, smells tangy/yeasty, bubbly throughout</Bullet>
              <Bullet><strong>Unhealthy signs:</strong> pink/orange streaks, foul smell, no rise after 12+ hours</Bullet>
            </div>
          </SectionCard>

          {/* Section 2: Feeding Schedule */}
          <SectionCard number="2" title="Feeding Schedule">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              How often you feed depends on where you store your starter.
            </div>
            {[
              { method: "Counter", freq: "Every 12 hours", ratio: "1:1:1", note: "Best for daily bakers" },
              { method: "Counter (warm)", freq: "Every 8 hours", ratio: "1:1:1", note: "Above 78°F / 26°C" },
              { method: "Fridge", freq: "Once a week", ratio: "1:2:2", note: "Feed, wait 1hr, refrigerate" },
              { method: "Pre-bake revival", freq: "2–3 feeds", ratio: "1:1:1", note: "12hrs apart before baking" },
            ].map(({ method, freq, ratio, note }, i) => (
              <div
                key={method}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: 12, color: palette.dark }}>{method}</strong>
                  <Tag>{freq}</Tag>
                </div>
                <div style={{ fontSize: 11, color: palette.mid }}>
                  Ratio: {ratio} · {note}
                </div>
              </div>
            ))}
          </SectionCard>

          {/* Section 3: Float Test & Readiness */}
          <SectionCard number="3" title="Float Test & Readiness">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Your starter must be at peak activity before mixing into dough.
            </div>
            <Bullet><strong>Float test:</strong> drop a spoonful into water — if it floats, it's ready</Bullet>
            <Bullet><strong>Visual peak:</strong> has doubled, dome is just starting to flatten</Bullet>
            <Bullet><strong>Timing:</strong> typically 4–6 hours after feeding at 75°F / 24°C</Bullet>
            <Bullet><strong>Smell:</strong> pleasantly sour and yeasty, not like acetone or alcohol</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>
                Common mistake
              </div>
              <Bullet>Using starter too early (before peak) results in a dense, under-risen loaf</Bullet>
              <Bullet>Using starter too late (collapsed) gives overly sour, slack dough</Bullet>
            </div>
          </SectionCard>

          {/* Section 4: Baker's Percentages */}
          <SectionCard number="4" title="Baker's Percentages">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              All ingredients are expressed as a percentage of total flour weight. Flour is always 100%.
            </div>
            <KV k="Flour" v="100% (this is your base — everything is relative to this)" />
            <KV k="Water" v="65–80% (higher = more open crumb, harder to handle)" />
            <KV k="Salt" v="2% (flavor and gluten strength)" />
            <KV k="Starter" v="15–25% (more starter = faster fermentation)" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>
                Hydration guide
              </div>
              <Bullet><strong>65%:</strong> Stiff dough, tight crumb, easy to shape — great for beginners</Bullet>
              <Bullet><strong>72%:</strong> Medium — balanced crumb and handling</Bullet>
              <Bullet><strong>78%+:</strong> Wet, open crumb — requires strong shaping skills</Bullet>
            </div>
          </SectionCard>

          {/* Section 5: Flour Types & Their Roles */}
          <SectionCard number="5" title="Flour Types & Their Roles">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Different flours change texture, flavor, and fermentation speed.
            </div>
            {[
              { flour: "Bread Flour", protein: "12–14%", role: "Strong gluten, great oven spring, chewy texture" },
              { flour: "All-Purpose", protein: "10–12%", role: "Versatile, softer crumb, easier to find" },
              { flour: "Whole Wheat", protein: "13–14%", role: "Nutty flavor, faster fermentation, absorbs more water" },
              { flour: "Rye", protein: "8–10%", role: "Boosts fermentation, tangy flavor, use 5–20% in blends" },
              { flour: "Spelt", protein: "12–13%", role: "Sweet flavor, delicate gluten, reduce hydration 5%" },
            ].map(({ flour, protein, role }, i) => (
              <div
                key={flour}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <strong style={{ fontSize: 12, color: palette.dark }}>{flour}</strong>
                  <Tag color="#5a8a3c">{protein}</Tag>
                </div>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>{role}</div>
              </div>
            ))}
          </SectionCard>

          {/* Section 6: Equipment Essentials */}
          <SectionCard number="6" title="Equipment Essentials">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>Must Have</Tag>
              <Tag color="#5a8a3c">Nice to Have</Tag>
              <Tag color="#3a6ea5">Optional</Tag>
            </div>
            <Bullet><strong>Kitchen scale</strong> — weighing is non-negotiable for consistency <Tag>Must Have</Tag></Bullet>
            <Bullet><strong>Dutch oven</strong> — traps steam for crispy crust and oven spring <Tag>Must Have</Tag></Bullet>
            <Bullet><strong>Banneton basket</strong> — shapes loaf during cold proof <Tag>Must Have</Tag></Bullet>
            <Bullet><strong>Bench scraper</strong> — for shaping and dividing dough <Tag>Must Have</Tag></Bullet>
            <Bullet><strong>Lame or razor blade</strong> — for scoring the dough <Tag color="#5a8a3c">Nice to Have</Tag></Bullet>
            <Bullet><strong>Instant-read thermometer</strong> — check dough temp and internal doneness <Tag color="#5a8a3c">Nice to Have</Tag></Bullet>
            <Bullet><strong>Spray bottle</strong> — extra steam if not using Dutch oven <Tag color="#3a6ea5">Optional</Tag></Bullet>
          </SectionCard>

          {/* Section 7: Autolyse Phase */}
          <SectionCard number="7" title="Autolyse Phase">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Mixing flour and water before adding starter and salt. Lets gluten develop passively.
            </div>
            <KV k="What" v="Mix only flour + water, rest before adding starter and salt" />
            <KV k="Duration" v="30 minutes to 2 hours (longer for whole grains)" />
            <KV k="Why" v="Easier gluten development, better extensibility, improved crumb" />
            <KV k="Temp" v="Use warm water (80–85°F / 27–29°C) to hit target dough temp" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Skip autolyse</strong> if using a high-rye formula (rye lacks gluten)</Bullet>
              <Bullet>Some bakers add starter during autolyse, salt later — both approaches work</Bullet>
            </div>
          </SectionCard>

          {/* Section 8: Mixing & Inoculation */}
          <SectionCard number="8" title="Mixing & Inoculation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Combining all ingredients and beginning gluten development.
            </div>
            <Bullet><strong>Add starter</strong> to autolysed dough — pinch and fold to distribute evenly</Bullet>
            <Bullet><strong>Rest 15 minutes,</strong> then add salt with a splash of reserved water</Bullet>
            <Bullet><strong>Pinch and fold</strong> (Rubaud method) for 3–5 minutes until salt is fully incorporated</Bullet>
            <Bullet><strong>Target dough temp:</strong> 75–78°F / 24–26°C — this controls your entire timeline</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>
                Temperature tip
              </div>
              <Bullet>Desired dough temp = (target × 3) minus (room temp + flour temp + friction)</Bullet>
              <Bullet>Use warmer water in winter, cooler water in summer to hit 76°F / 24°C</Bullet>
            </div>
          </SectionCard>

          {/* Section 9: Bulk Fermentation */}
          <SectionCard number="9" title="Bulk Fermentation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The most critical phase — this is where timing matters most.
            </div>
            <KV k="What happens" v="Yeast produces CO₂, bacteria produce acids, gluten strengthens" />
            <KV k="Goal" v="Dough rises 50–75% (NOT double — that's over-fermented)" />
            <KV k="Container tip" v="Use a straight-sided clear container to track rise easily" />
            {[
              { temp: "70°F / 21°C", time: "6–8 hours", note: "Cool room, slow and forgiving" },
              { temp: "75°F / 24°C", time: "4–5 hours", note: "Ideal sweet spot for most bakers" },
              { temp: "78°F / 26°C", time: "3–4 hours", note: "Warm room, watch closely" },
              { temp: "82°F+ / 28°C+", time: "2–3 hours", note: "Danger zone — easy to over-ferment" },
            ].map(({ temp, time, note }, i) => (
              <div
                key={temp}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                  marginTop: i === 0 ? 6 : 0,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: 12, color: palette.dark }}>{temp}</strong>
                  <Tag color="#3a6ea5">{time}</Tag>
                </div>
                <div style={{ fontSize: 11, color: palette.mid }}>{note}</div>
              </div>
            ))}
          </SectionCard>

          {/* Section 10: Stretch & Fold Technique */}
          <SectionCard number="10" title="Stretch & Fold Technique">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Builds gluten strength during bulk fermentation without traditional kneading.
            </div>
            {[
              { step: "Round 1", when: "30 min after mixing", action: "4 folds (N-S-E-W), wet hands, gentle pull" },
              { step: "Round 2", when: "30 min later", action: "Same technique, dough should feel tighter" },
              { step: "Round 3", when: "30 min later", action: "Dough resists more — good sign" },
              { step: "Round 4", when: "30 min later (optional)", action: "Only if dough still feels slack" },
              { step: "Rest", when: "Remaining bulk time", action: "Hands off — let fermentation do the work" },
            ].map(({ step, when, action }, i) => (
              <div
                key={step}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <strong style={{ fontSize: 12, color: palette.dark, width: 62, flexShrink: 0 }}>{step}</strong>
                  <Tag color="#7a5a8a">{when}</Tag>
                </div>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>{action}</div>
              </div>
            ))}
          </SectionCard>

          {/* Section 11: The Poke Test */}
          <SectionCard number="11" title="The Poke Test">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A simple way to gauge if bulk fermentation is complete.
            </div>
            <Bullet><strong>How:</strong> flour your finger, poke dough about ½ inch deep</Bullet>
            <Bullet><strong>Springs back quickly</strong> — under-fermented, needs more time</Bullet>
            <Bullet><strong>Springs back slowly</strong> — perfect, ready to shape</Bullet>
            <Bullet><strong>Doesn't spring back</strong> — over-fermented, consider baking same-day</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>
                Other visual cues of done bulk
              </div>
              <Bullet>Dough is puffy, jiggly, with visible bubbles on surface and sides</Bullet>
              <Bullet>Volume has increased 50–75% from starting point</Bullet>
              <Bullet>Dough feels airy and pillowy, not dense or tight</Bullet>
            </div>
          </SectionCard>

          {/* Section 12: Full Day Timelines (span 3) */}
          <SectionCard number="12" title="Full Day Timelines" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Two complete schedules from feeding starter to finished loaf. Pick the one that fits your day.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {/* Same-day bake */}
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>
                  Same-Day Bake (long day)
                </div>
                {[
                  { time: "6:00 AM", step: "Feed starter (1:1:1)" },
                  { time: "10:00 AM", step: "Autolyse — mix flour + water" },
                  { time: "10:30 AM", step: "Add starter + salt, mix well" },
                  { time: "11:00–1:00 PM", step: "Stretch & folds every 30 min" },
                  { time: "1:00–3:30 PM", step: "Hands-off bulk fermentation" },
                  { time: "3:30 PM", step: "Pre-shape, bench rest 20 min" },
                  { time: "4:00 PM", step: "Final shape, into banneton" },
                  { time: "4:15 PM", step: "Proof at room temp 1–1.5 hrs" },
                  { time: "5:15 PM", step: "Preheat oven + Dutch oven to 500°F" },
                  { time: "5:45 PM", step: "Score and bake covered 20 min" },
                  { time: "6:05 PM", step: "Remove lid, bake 20–25 min at 450°F" },
                  { time: "6:30 PM", step: "Cool on wire rack 1 hour — don't cut!" },
                ].map(({ time, step }, i) => (
                  <div
                    key={time + step}
                    style={{
                      display: "flex",
                      gap: 8,
                      padding: "4px 8px",
                      background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                      borderRadius: 5,
                      marginBottom: 3,
                      alignItems: "center",
                    }}
                  >
                    <strong style={{ fontSize: 11, color: palette.accent, width: 100, flexShrink: 0 }}>{time}</strong>
                    <span style={{ fontSize: 11.5, color: palette.mid }}>{step}</span>
                  </div>
                ))}
              </div>
              {/* Overnight cold retard */}
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>
                  Overnight Cold Retard (most popular)
                </div>
                {[
                  { time: "Day 1 · 8:00 AM", step: "Feed starter (1:1:1)" },
                  { time: "Day 1 · 12:00 PM", step: "Autolyse — mix flour + water" },
                  { time: "Day 1 · 12:30 PM", step: "Add starter + salt, mix well" },
                  { time: "Day 1 · 1:00–3:00", step: "Stretch & folds every 30 min" },
                  { time: "Day 1 · 3:00–6:00", step: "Hands-off bulk fermentation" },
                  { time: "Day 1 · 6:00 PM", step: "Pre-shape, bench rest 20 min" },
                  { time: "Day 1 · 6:30 PM", step: "Final shape, into banneton" },
                  { time: "Day 1 · 6:45 PM", step: "Cover and refrigerate (35–38°F)" },
                  { time: "Day 2 · 8:00 AM", step: "Preheat oven + Dutch oven to 500°F" },
                  { time: "Day 2 · 9:00 AM", step: "Score cold dough, bake covered 20 min" },
                  { time: "Day 2 · 9:20 AM", step: "Remove lid, bake 20–25 min at 450°F" },
                  { time: "Day 2 · 9:45 AM", step: "Cool 1 hour — fresh bread for brunch!" },
                ].map(({ time, step }, i) => (
                  <div
                    key={time + step}
                    style={{
                      display: "flex",
                      gap: 8,
                      padding: "4px 8px",
                      background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                      borderRadius: 5,
                      marginBottom: 3,
                      alignItems: "center",
                    }}
                  >
                    <strong style={{ fontSize: 11, color: palette.accent, width: 110, flexShrink: 0 }}>{time}</strong>
                    <span style={{ fontSize: 11.5, color: palette.mid }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Shaping, Baking & Troubleshooting */}
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
          {/* Section 13: Pre-Shaping */}
          <SectionCard number="13" title="Pre-Shaping">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The first rough shape before the final tight shape. Builds initial surface tension.
            </div>
            <Bullet><strong>Dump dough</strong> onto unfloured surface — the stick helps create tension</Bullet>
            <Bullet><strong>Use bench scraper</strong> to gently push and tuck into a rough round</Bullet>
            <Bullet><strong>Don't degas</strong> — be gentle, preserve the bubbles from bulk</Bullet>
            <Bullet><strong>Bench rest:</strong> 15–25 minutes uncovered until dough relaxes</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Too sticky?</strong> Lightly flour the top only, never the bottom contact point</Bullet>
              <Bullet><strong>Rest test:</strong> dough should spread slightly but not pancake flat</Bullet>
            </div>
          </SectionCard>

          {/* Section 14: Final Shaping */}
          <SectionCard number="14" title="Final Shaping">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Creates the tight skin that gives your loaf structure and oven spring.
            </div>
            <KV k="Boule (round)" v="Flip dough, fold edges to center, flip seam-down, drag toward you on counter" />
            <KV k="Batard (oval)" v="Fold top down, sides in like envelope, roll tight, seal seam" />
            <KV k="Surface tension" v="Dough should feel taut — if it tears, it's too tight" />
            <KV k="Into banneton" v="Place seam-side UP in floured banneton (rice flour works best)" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Key skill:</strong> use the friction of the counter to build tension, not force</Bullet>
              <Bullet>If dough is very wet, do two rounds of shaping with a 5 min rest between</Bullet>
            </div>
          </SectionCard>

          {/* Section 15: Cold Retard (Proofing) */}
          <SectionCard number="15" title="Cold Retard (Proofing)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Slow overnight proof in the fridge develops flavor and makes scoring easier.
            </div>
            <KV k="Temperature" v="35–38°F / 2–3°C (standard fridge)" />
            <KV k="Minimum time" v="8 hours (overnight is ideal)" />
            <KV k="Maximum time" v="48 hours (flavor gets more sour but still works)" />
            <KV k="Cover" v="Plastic bag, shower cap, or beeswax wrap — prevent dry skin" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>
                Why cold retard is worth it
              </div>
              <Bullet>Better flavor — acids develop slowly, more complexity</Bullet>
              <Bullet>Better scoring — cold dough holds cuts cleanly</Bullet>
              <Bullet>Better schedule — bake when it suits you, not the dough</Bullet>
            </div>
          </SectionCard>

          {/* Section 16: Scoring Patterns */}
          <SectionCard number="16" title="Scoring Patterns">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Scoring controls where the dough expands in the oven. Without it, the loaf bursts randomly.
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>Beginner</Tag>
              <Tag color="#5a8a3c">Intermediate</Tag>
              <Tag color="#7a5a8a">Decorative</Tag>
            </div>
            <Bullet><strong>Single ear:</strong> one long slash at 30° angle — classic, creates an ear <Tag>Beginner</Tag></Bullet>
            <Bullet><strong>Cross:</strong> two perpendicular slashes — even expansion <Tag>Beginner</Tag></Bullet>
            <Bullet><strong>Square:</strong> four-sided box on top — rustic look <Tag color="#5a8a3c">Intermediate</Tag></Bullet>
            <Bullet><strong>Wheat stalk:</strong> central line with angled branches <Tag color="#7a5a8a">Decorative</Tag></Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Depth:</strong> ¼ to ½ inch deep — too shallow won't open, too deep collapses</Bullet>
              <Bullet><strong>Speed:</strong> use swift, confident strokes — hesitation causes dragging</Bullet>
            </div>
          </SectionCard>

          {/* Section 17: Oven Setup & Steam */}
          <SectionCard number="17" title="Oven Setup & Steam">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Steam in the first minutes is what creates a crispy, blistered crust with good oven spring.
            </div>
            <KV k="Best method" v="Pre-heat Dutch oven with lid for 45–60 minutes at 500°F / 260°C" />
            <KV k="Why Dutch oven" v="Traps steam from the dough itself — no extra equipment" />
            <KV k="Parchment sling" v="Lower dough on parchment into pot — prevents burns and sticking" />
            <KV k="Rack position" v="Lower third of oven for best bottom heat" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>
                No Dutch oven? Alternatives:
              </div>
              <Bullet>Baking stone + steam tray with boiling water below</Bullet>
              <Bullet>Spray oven walls with water right after loading (careful of glass!)</Bullet>
              <Bullet>Place ice cubes on a sheet pan on the bottom rack</Bullet>
            </div>
          </SectionCard>

          {/* Section 18: Baking Timeline */}
          <SectionCard number="18" title="Baking Timeline">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Two-stage bake: covered for spring, uncovered for crust.
            </div>
            {[
              { phase: "Preheat", temp: "500°F / 260°C", time: "45–60 min", note: "Oven AND Dutch oven must be fully heated" },
              { phase: "Load & Score", temp: "—", time: "2–3 min", note: "Score cold dough, lower into pot quickly" },
              { phase: "Covered Bake", temp: "450°F / 230°C", time: "20 min", note: "Drop temp after loading, steam is trapped" },
              { phase: "Uncover", temp: "450°F / 230°C", time: "20–25 min", note: "Remove lid, bake until deeply golden" },
              { phase: "Cooling", temp: "Wire rack", time: "60 min minimum", note: "Interior is still cooking — resist cutting!" },
            ].map(({ phase, temp, time, note }, i) => (
              <div
                key={phase}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: 12, color: palette.dark }}>{phase}</strong>
                  <div>
                    <Tag color="#3a6ea5">{time}</Tag>
                    {temp !== "—" && <Tag color="#8a6a3a">{temp}</Tag>}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>{note}</div>
              </div>
            ))}
          </SectionCard>

          {/* Section 19: Visual Doneness Cues */}
          <SectionCard number="19" title="Visual Doneness Cues">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              How to tell your loaf is perfectly baked without cutting it open.
            </div>
            <Bullet><strong>Color:</strong> deep mahogany brown — darker than you think is right</Bullet>
            <Bullet><strong>Knock test:</strong> tap the bottom — should sound hollow, not dull</Bullet>
            <Bullet><strong>Internal temp:</strong> 205–210°F / 96–99°C measured in the center</Bullet>
            <Bullet><strong>Weight:</strong> feels lighter than expected — moisture has evaporated</Bullet>
            <Bullet><strong>Crust:</strong> should feel hard and crisp when first out of the oven</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>
                Cooling is baking
              </div>
              <Bullet>Cutting into hot bread releases steam, making the crumb gummy</Bullet>
              <Bullet>Wait at least 1 hour — 2 hours is even better for whole grain loaves</Bullet>
            </div>
          </SectionCard>

          {/* Section 20: Troubleshooting: Dense Crumb */}
          <SectionCard number="20" title="Fix: Dense or Gummy Crumb">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The most common sourdough problem. Multiple causes, easy to fix.
            </div>
            <KV k="Weak starter" v="Starter wasn't at peak — rebuild with 2–3 consistent feeds" />
            <KV k="Under-fermented" v="Bulk was too short or too cold — extend time or use warmer spot" />
            <KV k="Low hydration" v="Try increasing water by 3–5% for a more open crumb" />
            <KV k="Cut too soon" v="Always wait 1+ hours before slicing" />
            <KV k="Insufficient folds" v="Do at least 3 rounds of stretch & folds in the first 1.5 hours" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Quick test:</strong> if your dough didn't rise 50%+ during bulk, fermentation was insufficient</Bullet>
            </div>
          </SectionCard>

          {/* Section 21: Troubleshooting: Flat Loaf */}
          <SectionCard number="21" title="Fix: Flat or Spreading Loaf">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Your loaf spreads sideways instead of rising up. Here's why and how to fix it.
            </div>
            <KV k="Over-fermented" v="Bulk went too long — gluten broke down. Shorten bulk time." />
            <KV k="Weak shaping" v="Not enough surface tension — practice tighter shaping" />
            <KV k="High hydration" v="Reduce water by 3–5% until your shaping skills improve" />
            <KV k="Warm proof" v="Room-temp proof too long — switch to cold retard method" />
            <KV k="Old flour" v="Check flour freshness — weak gluten from stale flour" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Shape test:</strong> after shaping, a good loaf holds its shape on the counter for 10+ minutes without spreading</Bullet>
            </div>
          </SectionCard>

          {/* Section 22: Temperature & Time Chart */}
          <SectionCard number="22" title="Temperature & Time Chart">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Key temperatures and durations for every stage of the process.
            </div>
            {[
              { stage: "Starter feeding", temp: "70–78°F / 21–26°C", time: "4–8 hrs to peak" },
              { stage: "Desired dough temp", temp: "75–78°F / 24–26°C", time: "—" },
              { stage: "Autolyse", temp: "Room temp", time: "30 min – 2 hrs" },
              { stage: "Bulk fermentation", temp: "75°F / 24°C ideal", time: "4–6 hrs" },
              { stage: "Cold retard", temp: "35–38°F / 2–3°C", time: "8–48 hrs" },
              { stage: "Oven preheat", temp: "500°F / 260°C", time: "45–60 min" },
              { stage: "Covered bake", temp: "450°F / 230°C", time: "20 min" },
              { stage: "Uncovered bake", temp: "450°F / 230°C", time: "20–25 min" },
              { stage: "Internal done temp", temp: "205–210°F / 96–99°C", time: "—" },
              { stage: "Cooling", temp: "Wire rack", time: "60 min minimum" },
            ].map(({ stage, temp, time }, i) => (
              <div
                key={stage}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                }}
              >
                <strong style={{ fontSize: 11, color: palette.dark, width: 120, flexShrink: 0 }}>{stage}</strong>
                <span style={{ fontSize: 11, color: palette.accent, fontWeight: 600, width: 130, flexShrink: 0 }}>{temp}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{time}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 23: Seasonal Adjustments */}
          <SectionCard number="23" title="Seasonal Adjustments">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Room temperature changes everything. Adjust your process with the seasons.
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Winter</Tag>
              <Tag color="#a53a3a">Summer</Tag>
            </div>
            <KV k="Winter water temp" v="Use 90–95°F / 32–35°C water to compensate for cold flour and room" />
            <KV k="Winter bulk" v="May need 6–8+ hours — use oven with light on as a warm spot" />
            <KV k="Summer water temp" v="Use 65–70°F / 18–21°C water to slow things down" />
            <KV k="Summer bulk" v="Can be as short as 3 hours — watch dough, not clock" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Golden rule:</strong> Watch the dough, not the clock. Times are guidelines — visual and tactile cues are what matter.</Bullet>
              <Bullet><strong>Proofer hack:</strong> microwave with a cup of boiling water makes a consistent warm box</Bullet>
            </div>
          </SectionCard>

          {/* Section 24: Quick Reference Ratios (span 3) */}
          <SectionCard number="24" title="Quick Reference: Common Formulas" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Ready-to-use recipes by weight. All based on 500g total flour. Scale up or down proportionally.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "Beginner Loaf",
                  tag: "65% hydration",
                  items: ["Bread flour: 500g", "Water: 325g", "Salt: 10g", "Starter: 100g"],
                  note: "Easy to handle, forgiving",
                },
                {
                  title: "Everyday Country",
                  tag: "72% hydration",
                  items: ["Bread flour: 450g", "Whole wheat: 50g", "Water: 360g", "Salt: 10g", "Starter: 100g"],
                  note: "Great all-around loaf",
                },
                {
                  title: "Rustic Whole Grain",
                  tag: "78% hydration",
                  items: ["Bread flour: 350g", "Whole wheat: 150g", "Water: 390g", "Salt: 10g", "Starter: 125g"],
                  note: "Nutty, hearty, more sour",
                },
                {
                  title: "High Hydration",
                  tag: "82% hydration",
                  items: ["Bread flour: 500g", "Water: 410g", "Salt: 10g", "Starter: 100g"],
                  note: "Open crumb, advanced shaping",
                },
              ].map(({ title, tag, items, note }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginBottom: 4 }}>
                    {title}
                  </div>
                  <Tag color="#5a8a3c">{tag}</Tag>
                  <div style={{ marginTop: 6 }}>
                    {items.map((item) => (
                      <div key={item} style={{ fontSize: 11, color: palette.mid, marginBottom: 2 }}>
                        <span style={{ color: palette.accent, fontWeight: 700 }}>○</span> {item}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: palette.accent,
                      fontWeight: 600,
                      marginTop: 6,
                      fontStyle: "italic",
                    }}
                  >
                    {note}
                  </div>
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
          From Starter to Loaf — A Complete Timing & Process Guide
        </span>
      </div>
    </div>
  );
}
