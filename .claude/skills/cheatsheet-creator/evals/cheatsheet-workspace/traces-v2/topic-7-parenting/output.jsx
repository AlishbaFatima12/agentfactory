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

export default function ChildDevelopmentMilestonesCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Age-by-Age Milestones", "Page 2: Deep Dives & Resources"];

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
          Child Development Milestones{" "}
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
          Birth to 5 Years · Motor · Language · Social · Cognitive — 2026 Edition
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
          {/* Section 1 */}
          <SectionCard number="1" title="How to Use This Guide">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">MOTOR</Tag>
              <Tag color="#3a6ea5">LANGUAGE</Tag>
              <Tag color="#7a5a8a">SOCIAL</Tag>
              <Tag color="#8a6a3a">COGNITIVE</Tag>
            </div>
            <Bullet>Milestones are <strong>averages</strong> — healthy kids hit them at different times</Bullet>
            <Bullet>Each age section covers the four domains shown above</Bullet>
            <Bullet>{"\"Red flag\" items are worth mentioning to your pediatrician"}</Bullet>
            <Bullet>Premature babies: adjust for corrected age until age 2</Bullet>
            <Bullet>Ranges overlap — a skill listed at 9 months may appear anywhere from 7-11 months</Bullet>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="0–3 Months: The Newborn">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">MOTOR</Tag>
              <Tag color="#3a6ea5">LANGUAGE</Tag>
            </div>
            <KV k="Lifts head" v="Briefly during tummy time by 1 month, steady by 3 months" />
            <KV k="Follows objects" v="Tracks moving faces and toys by 2 months" />
            <KV k="Coos & gurgles" v="First social sounds appear around 6-8 weeks" />
            <KV k="Social smile" v="Real smiles in response to faces by 6-8 weeks" />
            <Bullet>Startles at loud noises (Moro reflex is normal)</Bullet>
            <Bullet>Recognizes parent voices and calms when held</Bullet>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="4–6 Months: The Explorer">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">MOTOR</Tag>
              <Tag color="#8a6a3a">COGNITIVE</Tag>
            </div>
            <KV k="Rolls over" v="Back to tummy and tummy to back by 5-6 months" />
            <KV k="Reaches & grabs" v="Deliberately grasps toys, transfers hand to hand" />
            <KV k="Babbles" v="Consonant sounds like ba-ba, da-da (no meaning yet)" />
            <KV k="Laughs out loud" v="Genuine belly laughs by 4 months" />
            <Bullet>Sits with support, then briefly alone by 6 months</Bullet>
            <Bullet>Puts everything in mouth — this is learning, not misbehaving</Bullet>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="7–9 Months: The Mover">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">MOTOR</Tag>
              <Tag color="#7a5a8a">SOCIAL</Tag>
            </div>
            <KV k="Sits independently" v="Stable sitting without support by 7-8 months" />
            <KV k="Crawls" v="Army crawl to hands-and-knees (some skip crawling entirely)" />
            <KV k="Stranger anxiety" v="Clings to caregivers, wary of unfamiliar faces" />
            <KV k="Pincer grasp emerging" v="Picks up small items with thumb and finger" />
            <Bullet>Responds to own name consistently</Bullet>
            <Bullet>Plays peekaboo — understands object permanence</Bullet>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="10–12 Months: Almost a Toddler">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">LANGUAGE</Tag>
              <Tag color="#8a6a3a">COGNITIVE</Tag>
            </div>
            <KV k="Pulls to stand" v="Uses furniture to pull up, cruises along edges" />
            <KV k="First words" v="Mama, dada with meaning; may have 1-3 other words" />
            <KV k="Points" v="Uses index finger to request or show you things" />
            <KV k="Waves bye-bye" v="Imitates social gestures like clapping and waving" />
            <Bullet>Understands simple instructions like {"\"give me the ball\""}</Bullet>
            <Bullet>Drops and throws things on purpose — cause and effect experiments</Bullet>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="12–18 Months: New Walker">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">MOTOR</Tag>
              <Tag color="#3a6ea5">LANGUAGE</Tag>
            </div>
            <KV k="Walking" v="Most walk independently by 12-15 months (up to 18 is normal)" />
            <KV k="Vocabulary" v="Around 5-20 words by 18 months; understands much more" />
            <KV k="Scribbles" v="Holds crayons in fist, makes marks on paper" />
            <KV k="Stacking" v="Builds towers of 2-3 blocks" />
            <Bullet>Feeds self with fingers, starts using a spoon (messy but learning)</Bullet>
            <Bullet>Says {"\"no\""} — a lot — this is healthy autonomy developing</Bullet>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="18–24 Months: Little Talker">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">LANGUAGE</Tag>
              <Tag color="#7a5a8a">SOCIAL</Tag>
            </div>
            <KV k="Word explosion" v="50+ words by 24 months; starts combining two words" />
            <KV k="Runs" v="Awkward at first but gaining speed and confidence" />
            <KV k="Parallel play" v="Plays alongside other kids but not truly together yet" />
            <KV k="Simple pretend play" v="Feeds a doll, talks on a toy phone" />
            <Bullet>Follows 2-step instructions: {"\"Pick up the cup and bring it here\""}</Bullet>
            <Bullet>Tantrums are peak — big feelings, tiny vocabulary</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>YOUR KID IS HERE!</div>
              <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>
                At 2, expect: 50+ words, 2-word phrases, running, climbing, big emotions, fierce independence, and lots of {"\"me do it!\""} moments.
              </div>
            </div>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="2–3 Years: Toddler Peak">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">COGNITIVE</Tag>
              <Tag color="#7a5a8a">SOCIAL</Tag>
            </div>
            <KV k="Sentences" v="3-4 word sentences by age 3; strangers understand ~75%" />
            <KV k="Jumps" v="Both feet off the ground; kicks a ball forward" />
            <KV k="Toilet readiness" v="Shows interest 2-3 yrs; most train between 2.5-3.5" />
            <KV k="Sorts shapes & colors" v="Matches basic shapes; names 1-2 colors" />
            <Bullet>Imaginative play explodes — invisible friends, elaborate scenarios</Bullet>
            <Bullet>Asks {"\"why?\""} constantly — this means cognition is thriving</Bullet>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="3–4 Years: The Preschooler">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">LANGUAGE</Tag>
              <Tag color="#8a6a3a">COGNITIVE</Tag>
            </div>
            <KV k="Full sentences" v="5-6 word sentences; tells simple stories" />
            <KV k="Counts to 10" v="Rote counting; understands concept of 1-3 items" />
            <KV k="Draws a person" v="Head with 2-4 body parts (circle people are normal)" />
            <KV k="Cooperative play" v="Takes turns, plays games with rules, has friends" />
            <Bullet>Pedals a tricycle; catches a bounced ball</Bullet>
            <Bullet>Understands same/different, bigger/smaller concepts</Bullet>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="4–5 Years: Pre-K Ready">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">MOTOR</Tag>
              <Tag color="#8a6a3a">COGNITIVE</Tag>
            </div>
            <KV k="Writes some letters" v="Copies letters; may write own name" />
            <KV k="Hops on one foot" v="Better balance; skips, does somersaults" />
            <KV k="Tells stories" v="Recounts events with beginning, middle, and end" />
            <KV k="Counts to 20+" v="Understands quantity; basic addition with objects" />
            <Bullet>Uses scissors; draws recognizable pictures</Bullet>
            <Bullet>Understands time concepts: yesterday, tomorrow, before lunch</Bullet>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="The Four Development Domains">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every milestone falls into one of these four areas:
            </div>
            {[
              { tag: "MOTOR", color: "#5a8a3c", desc: "Gross motor (walking, jumping) and fine motor (grasping, drawing)" },
              { tag: "LANGUAGE", color: "#3a6ea5", desc: "Words, sentences, understanding speech, and communication gestures" },
              { tag: "SOCIAL", color: "#7a5a8a", desc: "Emotions, relationships, play skills, empathy, and self-regulation" },
              { tag: "COGNITIVE", color: "#8a6a3a", desc: "Problem-solving, memory, attention, counting, and cause-and-effect" },
            ].map(({ tag, color, desc }, i) => (
              <div key={tag} style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 5,
                padding: "5px 8px",
                background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                borderRadius: 5,
              }}>
                <Tag color={color}>{tag}</Tag>
                <span style={{ fontSize: 11.5, color: palette.mid, flex: 1 }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="When to Talk to Your Pediatrician">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              These are not diagnoses — just signals to bring up at your next visit:
            </div>
            <Bullet><strong>By 12 months:</strong> No babbling, no gestures (pointing, waving)</Bullet>
            <Bullet><strong>By 18 months:</strong> No single words; not walking</Bullet>
            <Bullet><strong>By 24 months:</strong> Fewer than 50 words; no 2-word phrases</Bullet>
            <Bullet><strong>By 36 months:</strong> Speech hard to understand; no pretend play</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Remember:</strong> Early intervention is incredibly effective. Asking your doctor is never overreacting — it is good parenting.
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
          {/* Section 13 */}
          <SectionCard number="13" title="Language Milestones Timeline">
            {[
              { age: "2 mo", skill: "Coos, makes vowel sounds" },
              { age: "6 mo", skill: "Babbles with consonants (ba, da, ma)" },
              { age: "9 mo", skill: "Imitates speech sounds; mama/dada without meaning" },
              { age: "12 mo", skill: "1-3 real words; understands ~50 words" },
              { age: "18 mo", skill: "10-20 words; points at things to name them" },
              { age: "24 mo", skill: "50+ words; 2-word combos (more milk, go car)" },
              { age: "3 yr", skill: "3-4 word sentences; asks questions; 200+ words" },
              { age: "4 yr", skill: "Tells stories; uses past tense; 1,000+ words" },
            ].map(({ age, skill }, i) => (
              <div key={age} style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 4,
                padding: "4px 8px",
                background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                borderRadius: 5,
              }}>
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 38, flexShrink: 0 }}>{age}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{skill}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Motor Skills Progression">
            {[
              { age: "2 mo", skill: "Lifts head on tummy; moves arms and legs" },
              { age: "4 mo", skill: "Pushes up on elbows; grasps a rattle" },
              { age: "6 mo", skill: "Sits with support; rolls both ways" },
              { age: "9 mo", skill: "Crawls; pulls to stand; pincer grasp" },
              { age: "12 mo", skill: "First steps; stacks 2 blocks; drinks from cup" },
              { age: "18 mo", skill: "Walks well; scribbles; stacks 3-4 blocks" },
              { age: "2 yr", skill: "Runs; kicks ball; turns pages one at a time" },
              { age: "3 yr", skill: "Pedals trike; draws circle; uses scissors" },
            ].map(({ age, skill }, i) => (
              <div key={age} style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 4,
                padding: "4px 8px",
                background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                borderRadius: 5,
              }}>
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 38, flexShrink: 0 }}>{age}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{skill}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="Social-Emotional Growth">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">SOCIAL</Tag>
              <Tag color="#2a7a7a">EMOTIONAL</Tag>
            </div>
            <KV k="0-6 months" v="Social smile; laughs; recognizes caregivers" />
            <KV k="6-12 months" v="Stranger anxiety; attachment to primary caregiver" />
            <KV k="12-24 months" v="Parallel play; tantrums begin; says no often" />
            <KV k="2-3 years" v="Empathy emerges; names feelings; plays pretend with others" />
            <KV k="3-5 years" v="Friendships; sharing; negotiating; managing disappointment" />
            <Bullet>Tantrums peak around 18-30 months and are completely normal</Bullet>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title={"Cognitive & Problem-Solving"}>
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">COGNITIVE</Tag>
            </div>
            <KV k="Object permanence" v="Knows hidden objects still exist (7-9 months)" />
            <KV k="Cause and effect" v="Drops toys to see what happens (10-12 months)" />
            <KV k="Sorting" v="Groups by shape, color, and size (2-3 years)" />
            <KV k="Counting" v="Rote to 10 by age 3; meaningful counting to 5 by age 4" />
            <Bullet>Puzzles: 3-piece (18 mo), 6-piece (2 yr), 12+ piece (3-4 yr)</Bullet>
            <Bullet>Memory games become possible around age 3-4</Bullet>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Sleep Expectations by Age">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Total sleep in 24 hours (including naps):
            </div>
            <KV k="Newborn" v="14-17 hours in short bursts (no schedule yet)" />
            <KV k="4-12 months" v="12-16 hours; 2-3 naps consolidating to 2" />
            <KV k="1-2 years" v="11-14 hours; transitions from 2 naps to 1" />
            <KV k="3-5 years" v="10-13 hours; most drop the nap by age 3-4" />
            <Bullet>Sleep regressions are common at 4 mo, 8 mo, 12 mo, 18 mo, and 2 yr</Bullet>
            <Bullet>Consistent bedtime routines matter more than the exact bedtime</Bullet>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title={"Feeding & Nutrition Milestones"}>
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">FEEDING</Tag>
            </div>
            <KV k="0-6 months" v="Breast milk or formula only; no solids needed" />
            <KV k="6 months" v="Introduce solids — purees or soft finger foods (BLW)" />
            <KV k="9-12 months" v="Finger foods; sippy cup; 3 meals + snacks" />
            <KV k="12+ months" v="Whole milk OK; family foods; self-feeding with spoon" />
            <Bullet>Picky eating is normal and peaks around 2-3 years</Bullet>
            <Bullet>Offer variety without pressure — you decide what, they decide how much</Bullet>
          </SectionCard>

          {/* Section 19 */}
          <SectionCard number="19" title={"Play Stages & What They Mean"}>
            {[
              { stage: "Unoccupied", age: "0-3 mo", desc: "Random movements; exploring own body" },
              { stage: "Solitary", age: "3-18 mo", desc: "Plays alone; not aware of others playing" },
              { stage: "Onlooker", age: "18-24 mo", desc: "Watches other children play with interest" },
              { stage: "Parallel", age: "2-3 yr", desc: "Plays beside others with same toys, not together" },
              { stage: "Associative", age: "3-4 yr", desc: "Plays with others loosely; sharing and talking" },
              { stage: "Cooperative", age: "4-5 yr", desc: "Organized play with roles, rules, and shared goals" },
            ].map(({ stage, age, desc }, i) => (
              <div key={stage} style={{
                display: "flex", alignItems: "center", gap: 6, marginBottom: 4,
                padding: "4px 8px",
                background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                borderRadius: 5,
              }}>
                <span style={{ fontWeight: 800, color: palette.dark, fontSize: 11, width: 70, flexShrink: 0 }}>{stage}</span>
                <span style={{ fontWeight: 600, color: palette.accent, fontSize: 10, width: 46, flexShrink: 0 }}>{age}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Screen Time Guidelines (AAP)">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">LIMITS</Tag>
              <Tag color="#2a7a7a">AAP 2024</Tag>
            </div>
            <KV k="Under 18 months" v="Avoid screens except video calls with family" />
            <KV k="18-24 months" v="High-quality programs only; always watch together" />
            <KV k="2-5 years" v="1 hour/day max of quality content (PBS, Sesame Street)" />
            <KV k="All ages" v="No screens during meals or 1 hour before bed" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Key insight:</strong> What matters most is not the screen itself but what it replaces — active play, reading, and conversation.
              </div>
            </div>
          </SectionCard>

          {/* Section 21 */}
          <SectionCard number="21" title="Activities to Boost Development">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">FREE</Tag>
              <Tag color="#3a6ea5">EASY</Tag>
            </div>
            <Bullet><strong>Read aloud daily</strong> — single biggest language booster at every age</Bullet>
            <Bullet><strong>Narrate your day</strong> — {"\"Now we're putting on your shoes\""} builds vocabulary</Bullet>
            <Bullet><strong>Floor time</strong> — get down at their level for 15+ min of child-led play</Bullet>
            <Bullet><strong>Outdoor play</strong> — sand, water, climbing builds motor skills and sensory processing</Bullet>
            <Bullet><strong>Music and singing</strong> — builds rhythm, memory, and language patterns</Bullet>
            <Bullet><strong>Messy play</strong> — finger paint, playdough, water pouring develops fine motor</Bullet>
          </SectionCard>

          {/* Section 22 */}
          <SectionCard number="22" title="Common Myths Debunked">
            <KV k={"\"Einstein didn't talk until 4\""} v="Late talking should always be evaluated, regardless of anecdotes" />
            <KV k={"\"Walkers help kids walk\""} v="They can actually delay walking and are a safety hazard" />
            <KV k={"\"Boys talk later\""} v="Small average difference exists, but late talking still warrants evaluation" />
            <KV k={"\"More screen time = smarter\""} v="Educational apps show minimal benefit under age 2; interaction matters" />
            <KV k={"\"Bilingual kids talk late\""} v="Total word count across languages is usually on track" />
          </SectionCard>

          {/* Section 23 */}
          <SectionCard number="23" title={"Trusted Resources & Tools"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Evidence-based places to learn more:
            </div>
            <KV k="CDC Milestones App" v="Free tracker with photos and tips for each milestone" />
            <KV k="AAP HealthyChildren.org" v="American Academy of Pediatrics — articles by age" />
            <KV k="Zero to Three (zerotothree.org)" v="Brain development and behavior guidance" />
            <KV k="Pathways.org" v="Free milestone checklists and activity suggestions" />
            <Bullet>ASQ (Ages and Stages Questionnaire) — ask your pediatrician about this screening tool</Bullet>
          </SectionCard>

          {/* Section 24 */}
          <SectionCard number="24" title="Quick-Glance Milestone Matrix" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "6 Months", when: "Sits · Babbles · Laughs", best: "Tummy time, peek-a-boo, rattles, reading board books", icon: "👶" },
                { title: "12 Months", when: "Walks · First words · Points", best: "Stacking toys, naming objects, clapping games, push toys", icon: "🧒" },
                { title: "2 Years", when: "Runs · 50+ words · Pretend play", best: "Playdough, crayons, sand play, simple puzzles, reading daily", icon: "🏃" },
                { title: "4 Years", when: "Tells stories · Hops · Draws people", best: "Board games, bike riding, imaginative play, letter tracing", icon: "🎨" },
              ].map(({ title, when, best, icon }) => (
                <div key={title} style={{
                  background: palette.highlight,
                  borderRadius: 8,
                  padding: "10px 12px",
                  border: `1px solid ${palette.cardBorder}`,
                }}>
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
        Child Development Milestones Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on CDC, AAP, and WHO developmental milestone guidelines
        </span>
      </div>
    </div>
  );
}
