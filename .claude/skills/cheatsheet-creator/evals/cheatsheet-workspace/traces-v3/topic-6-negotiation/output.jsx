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

export default function NegotiationCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Techniques", "Page 2: Advanced Tactics"];

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
          Never Split the Difference{" "}
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
          Chris Voss · FBI Negotiation · Tactical Empathy · Pre-Call Reference
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
          {/* Section 1: Tactical Empathy */}
          <SectionCard number="1" title="Tactical Empathy">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Foundation</Tag>
              <Tag color="#5a8a3c">Mindset</Tag>
            </div>
            <Bullet>
              <strong>Not sympathy</strong> — understanding their feelings and mindset in the moment, then using that understanding strategically
            </Bullet>
            <Bullet>
              Goal is to make the other person feel <em>heard</em>, which lowers defensiveness and builds trust
            </Bullet>
            <Bullet>
              Listen for what is <em>behind</em> their words — the fears, desires, and constraints they haven{"'"}t stated
            </Bullet>
            <Bullet>
              Empathy is not agreement — you can understand someone{"'"}s position without conceding to it
            </Bullet>
            <Bullet>
              Turn listening into a martial art: the more they talk, the more leverage you gather
            </Bullet>
          </SectionCard>

          {/* Section 2: Mirroring */}
          <SectionCard number="2" title="Mirroring">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Technique</Tag>
              <Tag color="#2a7a7a">Rapport</Tag>
            </div>
            <Bullet>
              <strong>Repeat the last 1-3 words</strong> (or critical words) your counterpart just said
            </Bullet>
            <Bullet>
              Use a calm, curious tone with slight upward inflection
            </Bullet>
            <Bullet>
              Then go silent — let the other person fill the space and elaborate
            </Bullet>
            <Bullet>
              Creates connection by signaling that you are paying attention and want to understand
            </Bullet>
            <Bullet>
              Buys you time to think while they keep talking and revealing information
            </Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700, marginBottom: 3 }}>EXAMPLE</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Them: {"\""}We need this delivered by Friday.{"\""}
                <br />
                You: {"\""}By Friday?{"\""}
                <br />
                Them: {"\""}Well, actually the real deadline is Monday, but...{"\""}
              </div>
            </div>
          </SectionCard>

          {/* Section 3: Labeling */}
          <SectionCard number="3" title="Labeling Emotions">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Technique</Tag>
              <Tag color="#5a8a3c">De-escalation</Tag>
            </div>
            <Bullet>
              Name the emotion you observe: <strong>{"\""}It seems like...{"\""},  {"\""}It sounds like...{"\""},  {"\""}It looks like...{"\""}
              </strong>
            </Bullet>
            <Bullet>
              <strong>Never start with {"\""}I{"\""}:</strong> {"\""}I{"'"}m hearing that...{"\""} makes it about you and triggers defensiveness
            </Bullet>
            <Bullet>
              Validates their feelings — once someone feels understood, they become more open and collaborative
            </Bullet>
            <Bullet>
              Labeling negative emotions <em>diffuses</em> them; labeling positive emotions <em>reinforces</em> them
            </Bullet>
            <Bullet>
              After labeling, pause. Let the label sink in and let them respond
            </Bullet>
          </SectionCard>

          {/* Section 4: Voice Tones */}
          <SectionCard number="4" title="The Three Voice Tones">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Voss identifies three voices available to negotiators. Your voice sets the emotional frame for the entire conversation.
            </div>
            {[
              {
                name: "Positive/Playful",
                when: "Default voice",
                desc: "Relaxed, encouraging, with a smile. The voice of connection and rapport building. Use this most of the time.",
              },
              {
                name: "Late-Night FM DJ",
                when: "Strategic moments",
                desc: "Deep, soft, slow, reassuring. Inflect downward to convey calm authority and control. Use at key pressure points.",
              },
              {
                name: "Direct/Assertive",
                when: "Use rarely",
                desc: "Signals dominance and can feel like a slap in the face. People push back against it. Use sparingly if at all.",
              },
            ].map(({ name, when, desc }, i) => (
              <div
                key={name}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontWeight: 800, color: palette.dark, fontSize: 12 }}>{name}</span>
                  <Tag color={i === 0 ? "#5a8a3c" : i === 1 ? "#3a6ea5" : "#a53a3a"}>{when}</Tag>
                </div>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>{desc}</div>
              </div>
            ))}
          </SectionCard>

          {/* Section 5: The Accusation Audit */}
          <SectionCard number="5" title="The Accusation Audit">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>Pre-Call Prep</Tag>
              <Tag color="#8a6a3a">Disarm</Tag>
            </div>
            <Bullet>
              <strong>Before the negotiation,</strong> list every negative thing your counterpart might think or say about you
            </Bullet>
            <Bullet>
              Open by addressing those accusations head-on using labels
            </Bullet>
            <Bullet>
              Unexpressed negative emotions fester — get them out in the open to diffuse them
            </Bullet>
            <Bullet>
              Be bold and exhaustive — it{"'"}s better to over-prepare than be blindsided
            </Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700, marginBottom: 3 }}>EXAMPLE PHRASES</div>
              <div style={{ fontSize: 11, color: palette.mid, lineHeight: 1.6 }}>
                {"\""}You{"'"}re probably thinking we{"'"}re going to lowball you...{"\""}
                <br />
                {"\""}It might seem like we{"'"}re being unfair here...{"\""}
                <br />
                {"\""}This is going to sound harsh...{"\""}
              </div>
            </div>
          </SectionCard>

          {/* Section 6: "No" is the Start */}
          <SectionCard number="6" title={"\"No\" is the Start, Not the End"}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Principle</Tag>
            </div>
            <Bullet>
              <strong>Stop trying to get people to say {"\""}yes{"\""}</strong> — being pushed for yes makes people defensive
            </Bullet>
            <Bullet>
              {"\""}No{"\""} makes people feel safe and in control — it{"'"}s protection, not rejection
            </Bullet>
            <Bullet>
              After they say no, ask: {"\""}What about this doesn{"'"}t work for you?{"\""} to uncover their real concerns
            </Bullet>
            <Bullet>
              A quick {"\""}yes{"\""} is often counterfeit — people say it to get rid of you
            </Bullet>
            <Bullet>
              Trigger {"\""}no{"\""} intentionally: {"\""}Have you given up on this project?{"\""} forces them to re-engage
            </Bullet>
          </SectionCard>

          {/* Section 7: "That's Right" */}
          <SectionCard number="7" title={"\"That's Right\" — The Breakthrough"}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Goal</Tag>
              <Tag color="#7a5a8a">Signal</Tag>
            </div>
            <Bullet>
              <strong>{"\""}That{"'"}s right{"\""}:</strong> the sweetest two words in negotiation — signals genuine understanding and buy-in
            </Bullet>
            <Bullet>
              Trigger it by summarizing their position so well that they can only respond {"\""}that{"'"}s right{"\""}
            </Bullet>
            <Bullet>
              Use a combination of labeling + paraphrasing their world back to them
            </Bullet>
            <Bullet>
              <strong>{"\""}You{"'"}re right{"\""} is a trap:</strong> it{"'"}s a polite brush-off meaning {"\""}shut up and go away{"\""} — no real commitment follows
            </Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <KV k={"\"That's right\""} v="Genuine breakthrough — they feel truly understood" />
              <KV k={"\"You're right\""} v="Dismissal — they want you to stop talking" />
              <KV k={"\"Yes\""} v="Often counterfeit — verify with Rule of Three" />
            </div>
          </SectionCard>

          {/* Section 8: Calibrated Questions */}
          <SectionCard number="8" title="Calibrated Questions">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Technique</Tag>
              <Tag color="#2a7a7a">Control</Tag>
            </div>
            <Bullet>
              Open-ended questions starting with <strong>{"\""}How{"\""}  or  {"\""}What{"\""}</strong> — give them the illusion of control
            </Bullet>
            <Bullet>
              Avoid closed questions (can, is, are, do, does) that invite a simple yes/no
            </Bullet>
            <Bullet>
              When they make a demand you can{"'"}t meet, the go-to question is: <strong>{"\""}How am I supposed to do that?{"\""}
              </strong>
            </Bullet>
            <Bullet>
              Makes them solve your problem for you while feeling empowered
            </Bullet>
            <RefRow cmd={'"How does this affect your team?"'} desc="Uncovers hidden constraints" />
            <RefRow cmd={'"What is the biggest challenge you face?"'} desc="Reveals priorities" />
            <RefRow cmd={'"How can I help make this better for us?"'} desc="Collaborative framing" />
            <RefRow cmd={'"What are we trying to accomplish?"'} desc="Resets the conversation" />
          </SectionCard>

          {/* Section 9: The Rule of Three */}
          <SectionCard number="9" title="The Rule of Three">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Verification</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Getting a {"\""}yes{"\""} once means nothing. Get them to confirm their commitment three times in different ways to verify it{"'"}s genuine.
            </div>
            <Bullet>
              <strong>Three kinds of yes:</strong> counterfeit (to get rid of you), confirmation (reflexive), and commitment (real)
            </Bullet>
            <Bullet>
              Use a mix of calibrated questions, summaries, and labels to get three separate affirmations
            </Bullet>
            <Bullet>
              Example flow: direct yes, then a {"\""}that{"'"}s right,{"\""} then a {"\""}how{"\""} explanation of implementation
            </Bullet>
            <Bullet>
              If they can{"'"}t reaffirm three times, the deal may not hold — dig deeper before proceeding
            </Bullet>
          </SectionCard>

          {/* Section 10: Quick Pre-Call Checklist */}
          <SectionCard number="10" title="Pre-Call Checklist" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "1. Accusation Audit",
                  when: "Before the call",
                  best: "List every negative thought they might have about you. Prepare labels to address them upfront.",
                },
                {
                  title: "2. Set Your Target",
                  when: "Before the call",
                  best: "Know your ideal outcome and your walk-away point. Prepare your Ackerman plan if bargaining on price.",
                },
                {
                  title: "3. Prepare Questions",
                  when: "Before the call",
                  best: "Write 3-5 calibrated \"How\" and \"What\" questions. Have \"How am I supposed to do that?\" ready.",
                },
                {
                  title: "4. Mindset Check",
                  when: "Right before dialing",
                  best: "Positive/playful voice as default. Smile while you talk. Slow down. Listen more than you speak.",
                },
              ].map(({ title, when, best }) => (
                <div
                  key={title}
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

      {/* Page 2: Advanced Tactics */}
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
          {/* Section 11: The Ackerman Model */}
          <SectionCard number="11" title="The Ackerman Bargaining Model">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Price Negotiation</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A systematic offer/counteroffer framework. Set your target price first, then follow these steps:
            </div>
            {[
              { step: "1st Offer", pct: "65% of target", note: "Extreme anchor — shocks them and resets expectations" },
              { step: "2nd Offer", pct: "85% of target", note: "Shows movement but still leaves room" },
              { step: "3rd Offer", pct: "95% of target", note: "Diminishing increments signal you're reaching your limit" },
              { step: "Final Offer", pct: "100% of target", note: "Use a precise, non-round number (e.g., $37,893)" },
            ].map(({ step, pct, note }, i) => (
              <div
                key={step}
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 60 }}>{step}</span>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11.5, width: 90 }}>{pct}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{note}</span>
              </div>
            ))}
            <Bullet>
              <strong>On the final offer,</strong> throw in a non-monetary item to signal you{"'"}re truly at your limit
            </Bullet>
          </SectionCard>

          {/* Section 12: Bending Reality */}
          <SectionCard number="12" title="Bending Their Reality">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Psychology</Tag>
              <Tag color="#8a6a3a">Leverage</Tag>
            </div>
            <Bullet>
              <strong>Anchor their emotions first</strong> — empathy before numbers. Start with their fears and frustrations, not your demands
            </Bullet>
            <Bullet>
              <strong>Let them go first on price</strong> when possible — their number reveals information you can use
            </Bullet>
            <Bullet>
              Use <strong>ranges</strong> instead of exact numbers — citing a range (with your target at the low end) feels less aggressive
            </Bullet>
            <Bullet>
              <strong>Use odd, precise numbers</strong> — $4,751 feels researched and firm; $5,000 feels arbitrary and negotiable
            </Bullet>
            <Bullet>
              <strong>Loss aversion is powerful:</strong> frame what they stand to lose by not acting, not just what they gain
            </Bullet>
          </SectionCard>

          {/* Section 13: Deadlines */}
          <SectionCard number="13" title="Deadlines & Time Pressure">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Leverage</Tag>
            </div>
            <Bullet>
              <strong>Deadlines are often arbitrary</strong> — almost never the immovable walls people claim they are
            </Bullet>
            <Bullet>
              People make concessions as deadlines approach — the closer the deadline, the more flexible they become
            </Bullet>
            <Bullet>
              <strong>Reveal your own deadlines</strong> — hiding them puts you under silent pressure and leads to worse deals
            </Bullet>
            <Bullet>
              Never let urgency push you into a bad agreement — no deal is better than a bad deal
            </Bullet>
            <Bullet>
              The phrase {"\""}never split the difference{"\""} means: don{"'"}t compromise just to reach a deal. A bad compromise satisfies nobody
            </Bullet>
          </SectionCard>

          {/* Section 14: Black Swans */}
          <SectionCard number="14" title="Black Swans">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">Discovery</Tag>
              <Tag color="#3a6ea5">Advanced</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Hidden pieces of information that, if discovered, would completely transform the negotiation. Voss says there are typically three in any negotiation.
            </div>
            <Bullet>
              <strong>Unknown unknowns</strong> — things you don{"'"}t even know to ask about
            </Bullet>
            <Bullet>
              Discovered through active listening, face-to-face interaction, and building rapport
            </Bullet>
            <Bullet>
              Pay attention to moments that don{"'"}t make sense — those are clues to hidden motivations
            </Bullet>
            <Bullet>
              Ask yourself: {"\""}Why are they acting this way?{"\""} — the answer may reveal a Black Swan
            </Bullet>
            <Bullet>
              Get face time whenever possible — Black Swans are far easier to spot in person than over email
            </Bullet>
          </SectionCard>

          {/* Section 15: Three Negotiator Types */}
          <SectionCard number="15" title="Three Negotiator Types">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Know your counterpart{"'"}s type to adapt your approach. Effective negotiators use elements of all three.
            </div>
            {[
              {
                type: "Analyst",
                traits: "Methodical, diligent, hates mistakes, needs time to process",
                tip: "Give them data. Don't rush. Silence means they're thinking, not stalling.",
              },
              {
                type: "Accommodator",
                traits: "Relationship-focused, friendly, values collaboration",
                tip: "Build rapport first. Beware: they may agree to things they can't deliver.",
              },
              {
                type: "Assertive",
                traits: "Direct, decisive, time-is-money, wants to be heard",
                tip: "Let them talk first. Use mirrors and labels. They need to feel respected.",
              },
            ].map(({ type, traits, tip }, i) => (
              <div
                key={type}
                style={{
                  padding: "6px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ fontWeight: 800, color: palette.dark, fontSize: 12 }}>{type}</div>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>{traits}</div>
                <div style={{ fontSize: 11, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{tip}</div>
              </div>
            ))}
          </SectionCard>

          {/* Section 16: The 7-38-55 Rule */}
          <SectionCard number="16" title="Reading Beyond Words">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Awareness</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Voss references the 7-38-55 rule (from psychologist Albert Mehrabian) to emphasize congruence — but note: this ratio applies specifically to communication of feelings and attitudes, not all communication.
            </div>
            <KV k="7% Words" v="The literal content of what is said" />
            <KV k="38% Tone" v="How it's said — pace, pitch, inflection" />
            <KV k="55% Body language" v="Facial expressions, posture, gestures" />
            <Bullet>
              <strong>Key application:</strong> when words and tone/body language don{"'"}t match, trust the nonverbal signals — the person may be lying or uncommitted
            </Bullet>
            <Bullet>
              On phone calls (no body language), pay extra attention to tone, pace, and hesitation
            </Bullet>
          </SectionCard>

          {/* Section 17: Dealing With Liars */}
          <SectionCard number="17" title="Spotting & Handling Deception">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Defense</Tag>
              <Tag color="#7a5a8a">Awareness</Tag>
            </div>
            <Bullet>
              Use <strong>calibrated questions</strong> to force them to elaborate — liars struggle with detailed follow-ups
            </Bullet>
            <Bullet>
              Watch for incongruence between words and tone — hesitation, over-explaining, or overly emphatic agreement
            </Bullet>
            <Bullet>
              Apply the <strong>Rule of Three:</strong> make them affirm the same thing three different ways — it{"'"}s very hard to maintain a lie across multiple confirmations
            </Bullet>
            <Bullet>
              Use your own name to build connection — {"\""}first-person pronoun{"\""} use increases with honesty; excessive {"\""}I{"\""} usage can signal deception
            </Bullet>
            <Bullet>
              Pay attention to pronouns: if they distance themselves from a commitment ({"\""}the team will...{"\""} vs {"\""}I will...{"\""}) it may signal lack of buy-in
            </Bullet>
          </SectionCard>

          {/* Section 18: Getting Implementation Right */}
          <SectionCard number="18" title="Guarantee Execution">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Implementation</Tag>
            </div>
            <Bullet>
              An agreement without execution is worthless — the deal isn{"'"}t done at {"\""}yes,{"\""} it{"'"}s done at implementation
            </Bullet>
            <Bullet>
              Ask {"\""}How{"\""} questions about implementation: {"\""}How will we know we{"'"}re on track?{"\""} {"\""}What happens if things go off plan?{"\""}
            </Bullet>
            <Bullet>
              Make them articulate the plan in their own words — people try harder to implement solutions they believe are theirs
            </Bullet>
            <Bullet>
              Identify all the stakeholders who can say no — the person at the table may not be the only decision-maker
            </Bullet>
            <Bullet>
              Ask: {"\""}How does this affect everyone else?{"\""} and {"\""}What do your colleagues see as the main challenge?{"\""}
            </Bullet>
          </SectionCard>

          {/* Section 19: Email & Async Negotiation */}
          <SectionCard number="19" title="Email & Async Tips">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Channel</Tag>
            </div>
            <Bullet>
              Avoid negotiating over email when possible — you lose tone and body language, making misunderstandings likely
            </Bullet>
            <Bullet>
              If you must use email, use labels and calibrated questions in writing — {"\""}It seems like this timeline is a concern...{"\""}
            </Bullet>
            <Bullet>
              Send short, direct emails — force them to a call or meeting for complex discussions
            </Bullet>
            <Bullet>
              Use intentional non-response strategically — silence provokes action from the other side
            </Bullet>
            <Bullet>
              When stuck, try a one-sentence email: {"\""}Have you given up on this?{"\""} — designed to trigger a {"\""}no{"\""} response and re-engage
            </Bullet>
          </SectionCard>

          {/* Section 20: Key Phrases Quick Reference */}
          <SectionCard number="20" title="Key Phrases Quick Reference" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, marginBottom: 6 }}>Labels & Mirrors</div>
                <RefRow cmd={'"It seems like..."'} desc="Core labeling phrase — names an emotion" />
                <RefRow cmd={'"It sounds like..."'} desc="Alternative label opener" />
                <RefRow cmd={'"It looks like..."'} desc="Visual/situational label" />
                <RefRow cmd={"[Mirror last words]"} desc="Repeat 1-3 words + silence" />
                <RefRow cmd={'"That\'s right."'} desc="What you want to hear from them" />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, marginBottom: 6 }}>Calibrated Questions</div>
                <RefRow cmd={'"How am I supposed to do that?"'} desc="The #1 calibrated question" />
                <RefRow cmd={'"What about this is important to you?"'} desc="Uncovers underlying priorities" />
                <RefRow cmd={'"How can we solve this?"'} desc="Collaborative problem-solving frame" />
                <RefRow cmd={'"What happens if you do nothing?"'} desc="Reveals urgency and stakes" />
                <RefRow cmd={'"Have you given up on this?"'} desc="Re-engagement trigger (triggers 'no')" />
              </div>
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
        Never Split the Difference Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on {"\""}Never Split the Difference{"\""} by Chris Voss and Tahl Raz
        </span>
      </div>
    </div>
  );
}
