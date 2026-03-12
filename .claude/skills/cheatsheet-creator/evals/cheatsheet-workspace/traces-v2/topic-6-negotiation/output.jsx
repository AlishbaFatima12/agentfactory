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

export default function NegotiationCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Techniques", "Page 2: Advanced & Applied"];

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
          Negotiation Techniques{" "}
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
          Never Split the Difference · Chris Voss · Quick Pre-Call Reference
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

      {/* Page 1: Core Techniques */}
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
          {/* Section 1 - The Voss Method at a Glance */}
          <SectionCard number="1" title="The Voss Method at a Glance">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Negotiation is not arguing — it is the art of letting the other side have your way.
            </div>
            <Bullet><strong>Listen deeply</strong> — your goal is information, not persuasion</Bullet>
            <Bullet><strong>Slow it down</strong> — rushing creates resistance and missed signals</Bullet>
            <Bullet><strong>Make them feel safe</strong> — people reveal truth when fear is removed</Bullet>
            <Bullet><strong>Seek &quot;That{"'"}s right&quot;</strong> — not &quot;you{"'"}re right&quot; (which means go away)</Bullet>
            <Bullet><strong>Embrace &quot;No&quot;</strong> — it starts the real negotiation, not ends it</Bullet>
          </SectionCard>

          {/* Section 2 - Tactical Empathy */}
          <SectionCard number="2" title="Tactical Empathy">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CORE SKILL</Tag>
              <Tag color="#5a8a3c">EMOTIONAL</Tag>
            </div>
            <Bullet><strong>Not sympathy</strong> — understanding their feelings without necessarily agreeing</Bullet>
            <Bullet>Recognize the other side{"'"}s perspective and vocalize that recognition</Bullet>
            <Bullet>Pay attention to shifts in tone, pauses, and emotional undercurrents</Bullet>
            <Bullet>Demonstrates respect and builds trust without conceding anything</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>KEY INSIGHT</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Empathy is not about being nice. It{"'"}s a tool for understanding what the other side truly needs so you can influence the situation.
              </div>
            </div>
          </SectionCard>

          {/* Section 3 - Mirroring */}
          <SectionCard number="3" title="Mirroring (Isopraxis)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Repeat the last 1–3 critical words (or key phrase) the other person said, then go silent.
            </div>
            <Bullet><strong>Creates connection</strong> — triggers a subconscious bond of similarity</Bullet>
            <Bullet><strong>Buys time</strong> — gives you space to think while they elaborate</Bullet>
            <Bullet><strong>Draws out info</strong> — people feel compelled to expand on mirrored words</Bullet>
            <Bullet><strong>Pair with silence</strong> — wait at least 4 seconds after mirroring</Bullet>
            <Code>{`Them: "We need this delivered by Friday."
 You: "By Friday?"
[Pause 4+ seconds — let them fill the silence]
Them: "Well, ideally Friday, but Monday works too."`}</Code>
          </SectionCard>

          {/* Section 4 - Labeling Emotions */}
          <SectionCard number="4" title="Labeling Emotions">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Name the emotion you detect. This diffuses negatives and reinforces positives.
            </div>
            <RefRow cmd="It seems like..." desc="Primary labeling stem — safe and neutral" />
            <RefRow cmd="It sounds like..." desc="When responding to something they said" />
            <RefRow cmd="It looks like..." desc="When reading body language or context" />
            <RefRow cmd="It feels like..." desc="For deeper emotional undercurrents" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>NEVER SAY</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                &quot;What I{"'"}m hearing is...&quot; — the word &quot;I&quot; makes it about you, not them. Always use &quot;It&quot; to keep focus on their experience.
              </div>
            </div>
          </SectionCard>

          {/* Section 5 - The Accusation Audit */}
          <SectionCard number="5" title="The Accusation Audit">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">PRE-EMPTIVE</Tag>
              <Tag color="#a53a3a">HIGH IMPACT</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              List every terrible thing the other side could say about you — before they do.
            </div>
            <Bullet>Front-loads negatives so they have less power when spoken</Bullet>
            <Bullet>Disarms the counterpart by showing self-awareness</Bullet>
            <Bullet>Often triggers them to say &quot;No, that{"'"}s not true at all&quot; — in your favor</Bullet>
            <Bullet>Use before salary asks, price increases, or delivering bad news</Bullet>
            <Code>{`"You're probably going to think I'm being
 greedy here..."
"This is going to sound harsh..."
"You may feel like I haven't been fair..."`}</Code>
          </SectionCard>

          {/* Section 6 - Getting to "That's Right" */}
          <SectionCard number="6" title={"Getting to \"That's Right\""}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The two most powerful words in a negotiation. It means they feel fully understood.
            </div>
            {[
              { phrase: "That's right", meaning: "Breakthrough — they feel deeply heard, real progress begins", good: true },
              { phrase: "You're right", meaning: "Dismissal — they want you to stop talking, no real buy-in", good: false },
              { phrase: "That's right, and...", meaning: "Strong alignment — they're building on your understanding", good: true },
              { phrase: "I'll try", meaning: "Polite refusal — they have no intention of following through", good: false },
            ].map(({ phrase, meaning, good }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <span style={{ fontWeight: 900, color: good ? "#5a8a3c" : "#a53a3a", fontSize: 12, width: 14, flexShrink: 0 }}>
                  {good ? "\u2713" : "\u2717"}
                </span>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12, width: 100, flexShrink: 0 }}>
                  &quot;{phrase}&quot;
                </span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{meaning}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 7 - Calibrated Questions */}
          <SectionCard number="7" title="Calibrated Questions">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">HOW</Tag>
              <Tag color="#2a7a7a">WHAT</Tag>
              <Tag color="#a53a3a">AVOID WHY</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Open-ended questions that give the illusion of control while steering the conversation.
            </div>
            <RefRow cmd="How am I supposed to do that?" desc="The #1 calibrated question — challenges without attacking" />
            <RefRow cmd="What about this is important to you?" desc="Reveals underlying motivations" />
            <RefRow cmd="How can we solve this problem?" desc="Makes them work on your behalf" />
            <RefRow cmd="What happens if we do nothing?" desc="Highlights consequences without threatening" />
            <RefRow cmd="How does this affect everyone else?" desc="Forces them to consider broader impact" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>AVOID &quot;WHY&quot;</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                &quot;Why&quot; sounds accusatory in every language. Replace with &quot;What made you...&quot; or &quot;How did you decide...&quot;
              </div>
            </div>
          </SectionCard>

          {/* Section 8 - Voice Tones */}
          <SectionCard number="8" title="The Three Voice Tones">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              How you say it matters more than what you say. 93% of communication is tone and body language.
            </div>
            {[
              { tone: "Late-Night FM DJ", use: "Default tone — calm, slow, downward-inflecting. Creates authority and trust. Use most of the time.", pct: "~80%" },
              { tone: "Positive/Playful", use: "Relaxed, encouraging, smiling voice. Use to build rapport and when relationship is strong.", pct: "~15%" },
              { tone: "Direct/Assertive", use: "Declarative, no uptick. Use rarely — only for immovable points. Overuse creates pushback.", pct: "~5%" },
            ].map(({ tone, use, pct }, i) => (
              <div
                key={i}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 800, color: palette.dark, fontSize: 12 }}>{tone}</span>
                  <Tag color="#8a6a3a">{pct}</Tag>
                </div>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>{use}</div>
              </div>
            ))}
          </SectionCard>

          {/* Section 9 - The Power of "No" */}
          <SectionCard number="9" title={"The Power of \"No\""}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              &quot;No&quot; is not rejection — it{"'"}s protection. Let them say it early and often.
            </div>
            <Bullet><strong>No = safety</strong> — people feel in control when they can say no</Bullet>
            <Bullet><strong>No starts negotiation</strong> — it opens the door to the real discussion</Bullet>
            <Bullet><strong>Trigger a &quot;No&quot;</strong> — ask a question designed for a no answer to lower defenses</Bullet>
            <Bullet><strong>Mislabel intentionally</strong> — force a corrective &quot;No&quot; that reveals true position</Bullet>
            <Code>{`Instead of: "Do you have a few minutes to talk?"
 Ask: "Is now a bad time to talk?"
 (A "No" here = "Yes, I can talk")`}</Code>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced & Applied */}
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
          {/* Section 10 - Bending Reality */}
          <SectionCard number="10" title="Bending Reality">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">ANCHORING</Tag>
              <Tag color="#8a6a3a">FRAMING</Tag>
            </div>
            <Bullet><strong>Loss aversion</strong> — people will fight harder to avoid losses than to gain something new</Bullet>
            <Bullet><strong>Anchor emotions</strong> — start with an accusation audit, then present your offer as a relief</Bullet>
            <Bullet><strong>Let them go first</strong> — if you{"'"}re unsure of the range, let them anchor (then recalibrate)</Bullet>
            <Bullet><strong>Use odd numbers</strong> — a price of $4,751 feels calculated and firm; $5,000 feels arbitrary</Bullet>
            <Bullet><strong>Leverage deadlines</strong> — deadlines are almost always flexible; the other side has them too</Bullet>
          </SectionCard>

          {/* Section 11 - The Ackerman Model */}
          <SectionCard number="11" title="The Ackerman Bargaining Model">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A systematic, step-by-step approach to haggling that prevents emotional concessions.
            </div>
            {[
              { step: "1", action: "Set your target price (your goal)", detail: "Research thoroughly before entering negotiation" },
              { step: "2", action: "First offer: 65% of target", detail: "Extreme anchor — expect shock and pushback" },
              { step: "3", action: "Second offer: 85% of target", detail: "Use calibrated questions before raising" },
              { step: "4", action: "Third offer: 95% of target", detail: "Use empathy, show you're at your limit" },
              { step: "5", action: "Final offer: 100% (exact, non-round)", detail: "Add a non-monetary item to show you're tapped out" },
            ].map(({ step, action, detail }, i) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 12, width: 18, flexShrink: 0 }}>{step}</span>
                <div>
                  <div style={{ fontWeight: 700, color: palette.dark, fontSize: 12 }}>{action}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid }}>{detail}</div>
                </div>
              </div>
            ))}
          </SectionCard>

          {/* Section 12 - Black Swans */}
          <SectionCard number="12" title="Black Swans">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">GAME CHANGER</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Unknown unknowns that, once discovered, completely change the negotiation dynamics.
            </div>
            <Bullet><strong>Three types:</strong> leverage you don{"'"}t know you have, things that matter to them that you can{"'"}t see, hidden constraints</Bullet>
            <Bullet><strong>Found through listening</strong> — they{"'"}re revealed in off-hand comments, inconsistencies, and what{"'"}s not said</Bullet>
            <Bullet><strong>Get face time</strong> — Black Swans are almost never discovered over email; meet in person or by video</Bullet>
            <Bullet><strong>Look for &quot;crazy&quot;</strong> — if their position seems irrational, you{"'"}re missing a Black Swan that explains their logic</Bullet>
          </SectionCard>

          {/* Section 13 - Body Language & Delivery */}
          <SectionCard number="13" title={"Body Language & the 7-38-55 Rule"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Albert Mehrabian{"'"}s research: when words and tone conflict, people trust tone and body.
            </div>
            {[
              { pct: "7%", channel: "Words", desc: "The actual content of what you say" },
              { pct: "38%", channel: "Tone of Voice", desc: "Pace, pitch, volume, inflection" },
              { pct: "55%", channel: "Body Language", desc: "Facial expressions, posture, gestures" },
            ].map(({ pct, channel, desc }, i) => (
              <div
                key={channel}
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 14, width: 36, flexShrink: 0 }}>{pct}</span>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12, width: 100, flexShrink: 0 }}>{channel}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
              </div>
            ))}
            <Bullet><strong>Watch for incongruence</strong> — when words and body language mismatch, label it: &quot;It seems like something is bothering you&quot;</Bullet>
          </SectionCard>

          {/* Section 14 - Dealing with Hard Bargainers */}
          <SectionCard number="14" title="Dealing with Hard Bargainers">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Three negotiator types — identify theirs and adapt your approach.
            </div>
            <KV k="Analyst" v="Methodical, data-driven, hates surprises. Give them time, use data, be precise. Silence means they're thinking." />
            <KV k="Accommodator" v="Relationship-focused, talkative, values rapport. Build the relationship first, but don't mistake friendliness for agreement." />
            <KV k="Assertive" v="Direct, competitive, values respect. Let them talk first, mirror aggressively, use calibrated questions to slow them down." />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>GOLDEN RULE OF NEGOTIATION</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Treat them the way they need to be treated, not the way you want to be treated.
              </div>
            </div>
          </SectionCard>

          {/* Section 15 - Salary & Contract Negotiation */}
          <SectionCard number="15" title={"Salary & Contract Negotiation"}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">PRACTICAL</Tag>
              <Tag color="#3a6ea5">CAREER</Tag>
            </div>
            <Bullet><strong>Be pleasantly persistent</strong> on non-salary terms — title, vacation, start date, signing bonus</Bullet>
            <Bullet><strong>Anchor with a range</strong> — &quot;Top people in this role earn $90K–$120K&quot; (your target is the bottom of that range)</Bullet>
            <Bullet><strong>Use the Ackerman model</strong> for any back-and-forth on numbers</Bullet>
            <Bullet><strong>Define success metrics</strong> — &quot;What does it take to be successful here?&quot; sets up future raises</Bullet>
            <Bullet><strong>Spark interest in your success</strong> — make them feel invested in hiring you specifically</Bullet>
          </SectionCard>

          {/* Section 16 - Pre-Call Checklist */}
          <SectionCard number="16" title="Pre-Call Checklist">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">PREPARATION</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Run through this list 5 minutes before every negotiation call.
            </div>
            {[
              "What is my target outcome? (Be specific)",
              "What is my best alternative if this fails (BATNA)?",
              "Write an accusation audit — list their complaints/fears",
              "Prepare 3–5 calibrated questions (How/What)",
              "Identify their negotiator type (Analyst/Accommodator/Assertive)",
              "Set my opening tone (Late-Night FM DJ voice)",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 6,
                  marginBottom: 4,
                  fontSize: 12,
                  color: palette.mid,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: palette.accent, fontWeight: 700, fontSize: 11, width: 18, flexShrink: 0 }}>{i + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 17 - Common Mistakes */}
          <SectionCard number="17" title="Common Mistakes to Avoid">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">ANTI-PATTERNS</Tag>
            </div>
            <Bullet><strong>Rushing to &quot;yes&quot;</strong> — a fast yes is often a counterfeit yes with no follow-through</Bullet>
            <Bullet><strong>Talking too much</strong> — the more you talk, the less you learn and the more you reveal</Bullet>
            <Bullet><strong>Making it about you</strong> — using &quot;I&quot; statements in labels, not listening to understand</Bullet>
            <Bullet><strong>Splitting the difference</strong> — leads to a lose-lose; never compromise just to be fair</Bullet>
            <Bullet><strong>Ignoring tone</strong> — a great script in the wrong voice tone will backfire completely</Bullet>
          </SectionCard>

          {/* Section 18 - Quick Decision Guide */}
          <SectionCard number="18" title="Which Technique When?" span={2}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {[
                { title: "Opening a Conversation", when: "First 2 minutes", best: "Accusation Audit + Late-Night DJ voice. Disarm tension before it builds." },
                { title: "They Seem Upset", when: "Emotional resistance", best: "Label the emotion: \"It seems like you're frustrated.\" Pause. Let them vent." },
                { title: "Need More Information", when: "You're in the dark", best: "Mirror their key words. Ask calibrated How/What questions. Go silent." },
                { title: "Haggling on Price", when: "Numbers stage", best: "Use the Ackerman Model. Start at 65%. Use odd, precise numbers." },
                { title: "They Won't Budge", when: "Deadlock/impasse", best: "\"How am I supposed to do that?\" Forces them to solve your problem." },
                { title: "Closing the Deal", when: "Final agreement", best: "Get a \"That's right.\" Confirm with \"How\" questions to ensure implementation." },
              ].map(({ title, when, best }, i) => (
                <div
                  key={i}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
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
        Negotiation Techniques Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on &quot;Never Split the Difference&quot; by Chris Voss
        </span>
      </div>
    </div>
  );
}
