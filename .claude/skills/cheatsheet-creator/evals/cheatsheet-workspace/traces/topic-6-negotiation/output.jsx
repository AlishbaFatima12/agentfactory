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
          Never Split the Difference · Chris Voss · Pre-Call Quick Reference
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
          {/* 1 — Core Philosophy */}
          <SectionCard number="1" title="Core Philosophy">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Negotiation is not about being right — it's about understanding the other side so deeply they feel heard.
            </div>
            <Bullet><strong>Tactical empathy</strong> is the foundation of every technique in this book</Bullet>
            <Bullet>People want to be <strong>understood and accepted</strong>, not just heard</Bullet>
            <Bullet>Logic alone fails — emotions drive decisions, then logic justifies them</Bullet>
            <Bullet>Your goal is to make the other side say <strong>"That's right"</strong> (not "You're right")</Bullet>
            <Bullet>Negotiation is a <strong>discovery process</strong>, not a battle of arguments</Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                KEY INSIGHT
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                "He who has learned to disagree without being disagreeable has discovered the most valuable secret of negotiation."
              </div>
            </div>
          </SectionCard>

          {/* 2 — Mirroring */}
          <SectionCard number="2" title="Mirroring">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">RAPPORT</Tag>
              <Tag color="#5a8a3c">EASY</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Repeat the last 1–3 words (or critical words) the other person said, using an inquisitive tone.
            </div>
            <Bullet><strong>How:</strong> Repeat their words, then go silent. Let them elaborate.</Bullet>
            <Bullet><strong>Why it works:</strong> Triggers a deep instinct to elaborate and connect</Bullet>
            <Bullet>Buys you time to think without awkward pauses</Bullet>
            <Bullet>Use with the late-night FM DJ voice for maximum effect</Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                EXAMPLE
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Them: "We can't do that because of the budget timeline."<br />
                You: "The budget timeline...?" (then silence)
              </div>
            </div>
          </SectionCard>

          {/* 3 — Labeling */}
          <SectionCard number="3" title="Labeling Emotions">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">EMPATHY</Tag>
              <Tag>CORE</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Identify and verbalize the other side's feelings to validate and diffuse them.
            </div>
            {[
              { phrase: "It seems like...", use: "Neutral observations about their state" },
              { phrase: "It sounds like...", use: "Acknowledging what they've expressed" },
              { phrase: "It looks like...", use: "Responding to visible frustration or hesitation" },
              { phrase: "It feels like...", use: "Deeper emotional acknowledgment" },
            ].map(({ phrase, use }, i) => (
              <div
                key={phrase}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12 }}>{phrase}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}> {use}</span>
              </div>
            ))}
            <Bullet><strong>Never say "I"</strong> — keep focus on them. "It seems" not "I think"</Bullet>
            <Bullet>After labeling, <strong>go silent</strong> and let them respond</Bullet>
          </SectionCard>

          {/* 4 — The Accusation Audit */}
          <SectionCard number="4" title="The Accusation Audit">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">DEFUSE</Tag>
              <Tag color="#8a6a3a">PRE-CALL</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              List every negative thing the other side could think about you — then say it first.
            </div>
            <Bullet><strong>Purpose:</strong> Takes the sting out before they weaponize it</Bullet>
            <Bullet><strong>When:</strong> Open tough conversations, deliver bad news, make big asks</Bullet>
            <Bullet>Start with: <em>"You're probably going to think I'm being unreasonable..."</em></Bullet>
            <Bullet>Or: <em>"This is going to sound harsh..."</em></Bullet>
            <Bullet>People almost always respond with <strong>"No, it's not that bad"</strong></Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                PRO TIP
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Write your accusation audit BEFORE the call. List 3–5 worst-case assumptions they might have about you.
              </div>
            </div>
          </SectionCard>

          {/* 5 — Calibrated Questions */}
          <SectionCard number="5" title="Calibrated Questions">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>CORE</Tag>
              <Tag color="#2a7a7a">CONTROL</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Open-ended "How" and "What" questions that give the illusion of control while guiding the conversation.
            </div>
            <KV k="How am I supposed to do that?" v="Pushes back without saying no" />
            <KV k="What about this is important to you?" v="Reveals true priorities" />
            <KV k="How can we solve this problem?" v="Makes them collaborate" />
            <KV k="What happens if we don't reach a deal?" v="Surfaces consequences" />
            <KV k="How would you like me to proceed?" v="Gives them control feeling" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                AVOID
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Never ask "Why?" — it sounds accusatory. Rephrase as "What makes you...?" or "What led you to...?"
              </div>
            </div>
          </SectionCard>

          {/* 6 — "No"-Oriented Questions */}
          <SectionCard number="6" title={'"No"-Oriented Questions'}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">PSYCHOLOGY</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              "No" makes people feel safe and in control. Design questions where "No" moves the conversation forward.
            </div>
            <Bullet><strong>"Is now a bad time to talk?"</strong> — better than "Do you have a minute?"</Bullet>
            <Bullet><strong>"Have you given up on this project?"</strong> — re-engages silent counterparts</Bullet>
            <Bullet><strong>"Would it be ridiculous to...?"</strong> — lets them say no, then consider it</Bullet>
            <Bullet><strong>"Is it a bad idea to...?"</strong> — frames your proposal gently</Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                WHY IT WORKS
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                "Yes" creates commitment anxiety. "No" creates safety. People who feel safe open up more.
              </div>
            </div>
          </SectionCard>

          {/* 7 — Voice & Tone */}
          <SectionCard number="7" title="Voice & Tone Control">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Your voice is the most powerful tool. Voss identifies three negotiator voices:
            </div>
            {[
              {
                voice: "Late-Night FM DJ",
                desc: "Slow, calm, downward-inflecting. Use for labels, mirrors, and tough points.",
                when: "Default voice",
              },
              {
                voice: "Positive/Playful",
                desc: "Upbeat, encouraging, smiling. Use for rapport building and easy exchanges.",
                when: "Building trust",
              },
              {
                voice: "Direct/Assertive",
                desc: "Firm and declarative. Use sparingly — only for clear boundaries.",
                when: "Rare, last resort",
              },
            ].map(({ voice, desc, when }, i) => (
              <div
                key={voice}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12 }}>{voice}</span>
                  <Tag color={i === 0 ? "#3a6ea5" : i === 1 ? "#5a8a3c" : "#a53a3a"}>{when}</Tag>
                </div>
                <div style={{ fontSize: 11.5, color: palette.mid, marginTop: 2 }}>{desc}</div>
              </div>
            ))}
            <Bullet>Smile while talking — it changes your vocal tone even on phone calls</Bullet>
          </SectionCard>

          {/* 8 — Tactical Silence */}
          <SectionCard number="8" title="Tactical Silence">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">DISCIPLINE</Tag>
              <Tag color="#5a8a3c">EASY</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              After you mirror, label, or ask a calibrated question — stop talking. Silence is your most underrated weapon.
            </div>
            <Bullet><strong>The 4-second rule:</strong> Wait at least 4 seconds after a label or mirror</Bullet>
            <Bullet>Silence makes people uncomfortable — they fill it with information</Bullet>
            <Bullet>Resist the urge to rescue them from the awkwardness</Bullet>
            <Bullet>Pair with the FM DJ voice: speak slowly, then stop completely</Bullet>
            <Bullet>In email/text: delay your responses. Don't react instantly.</Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                REMEMBER
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                The person who is most comfortable with silence has the most power.
              </div>
            </div>
          </SectionCard>

          {/* 9 — Types of "Yes" */}
          <SectionCard number="9" title='The Three Types of "Yes"'>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Not all agreement is real. Learn to distinguish genuine commitment from surface compliance.
            </div>
            {[
              {
                type: "Counterfeit Yes",
                desc: "They say yes to get you to go away. No intention to follow through.",
                signal: "Quick, unthinking agreement",
              },
              {
                type: "Confirmation Yes",
                desc: "Reflexive, innocent agreement to a factual statement. Low value.",
                signal: "\"Yes, that's correct\"",
              },
              {
                type: "Commitment Yes",
                desc: "True agreement with intent to act. This is the only yes that matters.",
                signal: "Detailed, specific follow-up",
              },
            ].map(({ type, desc, signal }, i) => (
              <div
                key={type}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12 }}>{type}</span>
                  <span style={{ fontSize: 10, color: palette.mid, fontStyle: "italic" }}>{signal}</span>
                </div>
                <div style={{ fontSize: 11.5, color: palette.mid, marginTop: 2 }}>{desc}</div>
              </div>
            ))}
            <Bullet><strong>Test commitment:</strong> Use the Rule of Three — get them to agree three different ways</Bullet>
            <Bullet>Ask "How" and "What" follow-ups to confirm they mean it</Bullet>
          </SectionCard>

          {/* 10 — "That's Right" */}
          <SectionCard number="10" title='Getting to "That\'s Right"'>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>BREAKTHROUGH</Tag>
              <Tag color="#5a8a3c">GOAL</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              "That's right" is the two most powerful words in negotiation. It means they feel truly understood.
            </div>
            <Bullet><strong>Summarize</strong> their position back to them using labels + paraphrasing</Bullet>
            <Bullet>Combine: their world (facts) + how they feel about those facts</Bullet>
            <Bullet><strong>"That's right"</strong> = breakthrough moment. They've lowered their guard.</Bullet>
            <Bullet><strong>"You're right"</strong> = danger sign. They're dismissing you to end the conversation.</Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                FORMULA
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Summary = Paraphrase (their words) + Label (their emotion). Deliver it, then pause.
              </div>
            </div>
          </SectionCard>

          {/* 11 — Common Mistakes */}
          <SectionCard number="11" title="Mistakes to Avoid">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">WARNING</Tag>
            </div>
            {[
              { mistake: "Splitting the difference", why: "Compromise = lose-lose. Both sides get a bad deal." },
              { mistake: "Talking too much", why: "Your job is to listen. Aim for 70/30 listen/talk ratio." },
              { mistake: "Arguing your case", why: "Logic doesn't persuade. Understanding their emotions does." },
              { mistake: "Rushing to close", why: "Speed signals desperation. Slow is smooth, smooth is fast." },
              { mistake: "Treating it as zero-sum", why: "There are always creative solutions that expand the pie." },
              { mistake: "Using \"I understand\"", why: "It sounds dismissive. Use labels instead: \"It seems like...\"" },
            ].map(({ mistake, why }, i) => (
              <div
                key={mistake}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <span style={{ fontWeight: 700, color: palette.accent, fontSize: 12 }}>{mistake}</span>
                <div style={{ fontSize: 11.5, color: palette.mid }}>{why}</div>
              </div>
            ))}
          </SectionCard>

          {/* 12 — Pre-Call Checklist */}
          <SectionCard number="12" title="Pre-Call Checklist">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">PREP</Tag>
              <Tag color="#3a6ea5">ESSENTIAL</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Run through this before every negotiation call:
            </div>
            {[
              "Write your accusation audit (3-5 items)",
              "Define your goal + best alternative (BATNA)",
              "Prepare 3-5 calibrated questions",
              "Identify their likely emotional state",
              "List what \"that's right\" would sound like from them",
              "Set your Ackerman plan (if price negotiation)",
              "Rehearse your opening label",
              "Remind yourself: listen more, talk less",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 4,
                }}
              >
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 18 }}>
                  {i + 1}.
                </span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{item}</span>
              </div>
            ))}
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
          {/* 13 — Bending Reality */}
          <SectionCard number="13" title="Bending Reality">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">ADVANCED</Tag>
              <Tag color="#2a7a7a">LEVERAGE</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Use cognitive biases ethically to reshape how the other side perceives the deal.
            </div>
            <KV k="Loss aversion" v="People fear losing more than they value gaining. Frame around what they'll lose." />
            <KV k="Anchoring" v="Set an extreme anchor first to make your real ask seem reasonable." />
            <KV k="Deadlines" v="Deadlines are rarely real. Theirs create pressure; challenge them." />
            <KV k="Fairness" v="The F-word of negotiation. If they say 'fair,' label it: 'It seems like you feel this hasn't been fair.'" />
            <KV k="Prospect theory" v="A certain gain is preferred over a probable larger gain. Use certainty as leverage." />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                FAIRNESS SCRIPT
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Open with: "I want you to feel like you're being treated fairly at all times. If at any point you feel I'm being unfair, please stop me."
              </div>
            </div>
          </SectionCard>

          {/* 14 — The Ackerman Model */}
          <SectionCard number="14" title="The Ackerman Model">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">PRICE</Tag>
              <Tag color="#8a6a3a">SYSTEM</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A systematic approach to price/salary negotiation. Set your target price, then follow this pattern:
            </div>
            {[
              { step: "1st Offer", pct: "65%", desc: "Start at 65% of your target. Anchor aggressively." },
              { step: "2nd Offer", pct: "85%", desc: "Increase to 85%. Show you're moving, but reluctantly." },
              { step: "3rd Offer", pct: "95%", desc: "Move to 95%. Use precise non-round number." },
              { step: "Final Offer", pct: "100%", desc: "Land on your target. Add a non-monetary item to show you're at your limit." },
            ].map(({ step, pct, desc }, i) => (
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 14, width: 38, textAlign: "center" }}>
                  {pct}
                </span>
                <div>
                  <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12 }}>{step}</span>
                  <div style={{ fontSize: 11, color: palette.mid }}>{desc}</div>
                </div>
              </div>
            ))}
            <Bullet><strong>Use precise numbers</strong> ($37,263 not $37,000) — they feel researched</Bullet>
            <Bullet>Each increase should be <strong>smaller than the last</strong> — signals you're reaching your limit</Bullet>
          </SectionCard>

          {/* 15 — Black Swans */}
          <SectionCard number="15" title="Black Swans">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">ADVANCED</Tag>
              <Tag>KEY CONCEPT</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Unknown unknowns — hidden pieces of information that, if revealed, would change everything.
            </div>
            <Bullet><strong>Every negotiation has 3–5 Black Swans</strong> — facts the other side hasn't revealed</Bullet>
            <Bullet>They are <strong>leverage multipliers</strong> — finding one can flip the entire dynamic</Bullet>
            <Bullet>Discovered through patient listening, labels, and calibrated questions — never direct asks</Bullet>
            <Bullet>Pay attention to what they say <strong>off-the-cuff</strong> or when they think the negotiation has paused</Bullet>
            <Bullet>Meet face-to-face whenever possible — Black Swans hide in body language and unguarded moments</Bullet>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                THREE TYPES OF LEVERAGE
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                <strong>Positive:</strong> You can give them what they want. <strong>Negative:</strong> You can hurt them. <strong>Normative:</strong> Use their own standards against them.
              </div>
            </div>
          </SectionCard>

          {/* 16 — The Rule of Three */}
          <SectionCard number="16" title="The Rule of Three">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">VERIFICATION</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Get them to agree to the same thing three different ways in one conversation. This filters counterfeit yes from commitment yes.
            </div>
            <Bullet><strong>Round 1:</strong> Initial agreement on the point</Bullet>
            <Bullet><strong>Round 2:</strong> A summary/label — "So it seems like we're aligned on..."</Bullet>
            <Bullet><strong>Round 3:</strong> A calibrated "How" question — "How will we implement this?"</Bullet>
            <Bullet>If they get frustrated by round 3, the first "yes" was probably counterfeit</Bullet>
            <Bullet>Watch for body language shifts or tone changes between rounds</Bullet>
          </SectionCard>

          {/* 17 — The 7-38-55 Rule */}
          <SectionCard number="17" title="Reading Between the Lines">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">AWARENESS</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Pay more attention to how things are said than what is said.
            </div>
            <KV k="7% Words" v="The actual content of what someone says" />
            <KV k="38% Tone" v="How they say it — pitch, speed, volume" />
            <KV k="55% Body" v="Facial expressions, gestures, posture" />
            <Bullet>When words and tone conflict, <strong>trust the tone</strong></Bullet>
            <Bullet>Use labels to surface the incongruence: "I heard you say yes, but it seems like there's hesitation"</Bullet>
            <Bullet>On phone calls, tone is everything — slow down and listen for micro-pauses</Bullet>
            <Bullet>Pronouns reveal power: "We" = team buy-in. "I" = decision maker. "They" = deflecting</Bullet>
          </SectionCard>

          {/* 18 — Dealing with Hard Bargainers */}
          <SectionCard number="18" title="Handling Hard Bargainers">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">TOUGH</Tag>
              <Tag color="#8a6a3a">CONFLICT</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              When the other side plays aggressive or tries to dominate:
            </div>
            <Bullet><strong>Never match aggression</strong> — respond with the FM DJ voice and labels</Bullet>
            <Bullet><strong>"How am I supposed to do that?"</strong> — the magic pushback question</Bullet>
            <Bullet>If they use deadlines, ask: "What happens if this deadline passes?"</Bullet>
            <Bullet>If they anchor absurdly, don't counter — pivot to non-price terms</Bullet>
            <Bullet>If they won't engage: <strong>"Have you given up on this?"</strong> (no-oriented question)</Bullet>
            <Bullet>If they threaten: label it — "It seems like you feel strongly that this needs to happen your way"</Bullet>
          </SectionCard>

          {/* 19 — Email & Written Negotiation */}
          <SectionCard number="19" title="Email & Text Tactics">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">WRITTEN</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Adapt Voss's techniques to written communication:
            </div>
            <Bullet><strong>Use calibrated questions</strong> the same way — "What does success look like?"</Bullet>
            <Bullet><strong>Strategic delay:</strong> Don't reply instantly. Create productive tension.</Bullet>
            <Bullet><strong>Short sentences.</strong> They force the other side to do the mental work.</Bullet>
            <Bullet>Use their name early — it triggers attention and personal connection</Bullet>
            <Bullet>End with a calibrated question, not a statement — it invites collaboration</Bullet>
            <Bullet>If ghosted, send a one-line no-oriented email: "Have you given up on this project?"</Bullet>
          </SectionCard>

          {/* 20 — Negotiator Types */}
          <SectionCard number="20" title="The Three Negotiator Types">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Identify the other side's type and adapt your approach:
            </div>
            {[
              {
                type: "Analyst",
                traits: "Methodical, data-driven, hates surprises",
                approach: "Give them data. Use silence. Don't rush them.",
              },
              {
                type: "Accommodator",
                traits: "Relationship-focused, chatty, seeks approval",
                approach: "Build rapport first. Listen to their stories. Then calibrate.",
              },
              {
                type: "Assertive",
                traits: "Direct, time-conscious, wants to win",
                approach: "Let them talk first. Mirror. Use their need to be heard.",
              },
            ].map(({ type, traits, approach }, i) => (
              <div
                key={type}
                style={{
                  padding: "6px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Tag color={i === 0 ? "#3a6ea5" : i === 1 ? "#5a8a3c" : "#a53a3a"}>{type}</Tag>
                  <span style={{ fontSize: 11, color: palette.mid, fontStyle: "italic" }}>{traits}</span>
                </div>
                <div style={{ fontSize: 11.5, color: palette.dark, marginTop: 3, fontWeight: 500 }}>{approach}</div>
              </div>
            ))}
            <Bullet>Know <strong>your own type</strong> too — it reveals your blind spots</Bullet>
          </SectionCard>

          {/* 21 — Key Phrases Toolkit */}
          <SectionCard number="21" title="Key Phrases Toolkit" span={2}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Copy-paste these into your mental toolkit. Each phrase serves a specific tactical purpose.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { phrase: "It seems like...", purpose: "Label their emotion" },
                { phrase: "How am I supposed to do that?", purpose: "Pushback without confrontation" },
                { phrase: "What about this is important to you?", purpose: "Reveal hidden priorities" },
                { phrase: "That's right.", purpose: "Confirm understanding (seek this)" },
                { phrase: "Have you given up on this?", purpose: "Re-engage silent counterpart" },
                { phrase: "Would it be ridiculous to...?", purpose: "Float ideas safely" },
                { phrase: "I want to make sure you feel treated fairly.", purpose: "Defuse fairness attacks" },
                { phrase: "How does this affect everybody else?", purpose: "Expand the frame" },
                { phrase: "What are we trying to accomplish?", purpose: "Reset the conversation" },
                { phrase: "What's the biggest challenge you face?", purpose: "Find their real pain" },
              ].map(({ phrase, purpose }, i) => (
                <div
                  key={i}
                  style={{
                    padding: "5px 8px",
                    background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                  }}
                >
                  <div style={{ fontWeight: 700, color: palette.dark, fontSize: 11.5 }}>"{phrase}"</div>
                  <div style={{ fontSize: 10.5, color: palette.mid }}>{purpose}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 22 — Quick Decision Guide */}
          <SectionCard number="22" title="Technique Quick-Pick Guide">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              What to reach for based on what's happening:
            </div>
            {[
              { situation: "They seem upset", use: "Label their emotion" },
              { situation: "They're not talking", use: "Mirror + Silence" },
              { situation: "They gave a weak yes", use: "Rule of Three" },
              { situation: "They're demanding", use: "Calibrated question" },
              { situation: "Opening a tough convo", use: "Accusation audit" },
              { situation: "Price negotiation", use: "Ackerman model" },
              { situation: "They said 'fair'", use: "Label + fairness script" },
              { situation: "They ghosted you", use: "No-oriented email" },
            ].map(({ situation, use }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: 11.5, color: palette.dark, fontWeight: 600 }}>{situation}</span>
                <span style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>{use}</span>
              </div>
            ))}
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
          Based on "Never Split the Difference" by Chris Voss & Tahl Raz
        </span>
      </div>
    </div>
  );
}
