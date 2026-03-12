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

export default function CognitiveBiasesCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Biases", "Page 2: Advanced & Debiasing"];

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
          Cognitive Biases{" "}
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
          Decision Making · Critical Thinking · Mental Models — Essential Edition
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

      {/* Page 1: Core Biases */}
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
          {/* Section 1 — What Are Cognitive Biases? */}
          <SectionCard number="1" title="What Are Cognitive Biases?">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Systematic patterns of deviation from rational judgment. Your brain takes
              mental shortcuts (heuristics) that often lead to predictable errors.
            </div>
            <Bullet>
              <strong>Not stupidity</strong> — biases affect everyone, including experts and
              scientists
            </Bullet>
            <Bullet>
              <strong>Evolved shortcuts</strong> — most biases were adaptive in ancestral
              environments but misfire in modern contexts
            </Bullet>
            <Bullet>
              <strong>Awareness helps</strong> — knowing a bias exists reduces its effect by
              roughly 30% (studies vary)
            </Bullet>
            <Bullet>
              <strong>System 1 vs System 2</strong> — Kahneman's framework: fast intuitive
              thinking (bias-prone) vs slow deliberate reasoning
            </Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                KEY INSIGHT
              </div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                You cannot eliminate biases — but you can design decision processes that
                compensate for them.
              </div>
            </div>
          </SectionCard>

          {/* Section 2 — Anchoring Bias */}
          <SectionCard number="2" title="Anchoring Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#3a6ea5">Negotiation</Tag>
            </div>
            <KV k="Definition" v="Over-relying on the first piece of information encountered when making decisions" />
            <KV k="Classic study" v="Tversky & Kahneman — random number on a wheel influenced UN country estimates" />
            <Bullet>Salary negotiations are heavily shaped by whoever states a number first</Bullet>
            <Bullet>Retail pricing uses high anchor prices to make sale prices seem like deals</Bullet>
            <Bullet>First impressions in interviews anchor all subsequent evaluation</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Generate your own estimate before seeing others;
              consider multiple reference points
            </Bullet>
          </SectionCard>

          {/* Section 3 — Confirmation Bias */}
          <SectionCard number="3" title="Confirmation Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#7a5a8a">Reasoning</Tag>
            </div>
            <KV k="Definition" v="Seeking, interpreting, and remembering information that confirms pre-existing beliefs" />
            <Bullet>
              <strong>Selective search</strong> — we Google for evidence that supports what we
              already believe
            </Bullet>
            <Bullet>
              <strong>Biased interpretation</strong> — ambiguous data is read as supporting our
              view
            </Bullet>
            <Bullet>
              <strong>Memory distortion</strong> — we better recall facts that confirm our
              position
            </Bullet>
            <Bullet>
              <strong>Belief perseverance</strong> — even after evidence is debunked, the original
              belief persists
            </Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Actively seek disconfirming evidence; assign a
              {"'"}devil{"'"}s advocate{"'"} in team decisions
            </Bullet>
          </SectionCard>

          {/* Section 4 — Availability Heuristic */}
          <SectionCard number="4" title="Availability Heuristic">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Judgment</Tag>
              <Tag color="#3a6ea5">Risk</Tag>
            </div>
            <KV k="Definition" v="Judging probability by how easily examples come to mind, not by actual frequency" />
            <Bullet>Plane crashes feel more likely than car accidents because they make vivid news</Bullet>
            <Bullet>Lottery winners are memorable; the millions of losers are invisible</Bullet>
            <Bullet>Recent events are weighted far more heavily than base rates</Bullet>
            <Bullet>Media exposure dramatically distorts our risk perception</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Check base rates and actual statistics before
              trusting your gut estimate of probability
            </Bullet>
          </SectionCard>

          {/* Section 5 — Sunk Cost Fallacy */}
          <SectionCard number="5" title="Sunk Cost Fallacy">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#5a8a3c">Business</Tag>
            </div>
            <KV k="Definition" v="Continuing an endeavor because of previously invested resources (time, money, effort) that cannot be recovered" />
            <Bullet>
              <strong>The Concorde fallacy</strong> — British and French governments kept funding
              the supersonic jet long after it was clear it would never be profitable
            </Bullet>
            <Bullet>Staying in a bad job because you{"'"}ve been there 10 years</Bullet>
            <Bullet>Finishing a terrible movie because you paid for the ticket</Bullet>
            <Bullet>Escalation of commitment in failed projects and relationships</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Ask {"\""}If I were starting fresh today with no
              prior investment, would I choose this?{"\""}
            </Bullet>
          </SectionCard>

          {/* Section 6 — Dunning-Kruger Effect */}
          <SectionCard number="6" title="Dunning-Kruger Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Self-Assessment</Tag>
              <Tag color="#2a7a7a">Expertise</Tag>
            </div>
            <KV k="Definition" v="Low-ability individuals overestimate their competence; high-ability individuals underestimate theirs" />
            {[
              { stage: "Novice", confidence: "Very High", competence: "Very Low" },
              { stage: "Beginner", confidence: "Falling", competence: "Low" },
              { stage: "Intermediate", confidence: "Low (Valley)", competence: "Medium" },
              { stage: "Expert", confidence: "Moderate", competence: "High" },
            ].map(({ stage, confidence, competence }, i) => (
              <div
                key={stage}
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 12, width: 80 }}>{stage}</span>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11.5, width: 80 }}>{confidence}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{competence}</span>
              </div>
            ))}
            <Bullet>
              <strong>Countermeasure:</strong> Seek calibrated feedback; test your knowledge
              against objective measures
            </Bullet>
          </SectionCard>

          {/* Section 7 — Framing Effect */}
          <SectionCard number="7" title="Framing Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Judgment</Tag>
              <Tag color="#7a5a8a">Communication</Tag>
            </div>
            <KV k="Definition" v="Drawing different conclusions from the same information depending on how it is presented" />
            <Bullet>
              <strong>Gain frame:</strong> {"\""}90% survival rate{"\""} — people choose the
              treatment
            </Bullet>
            <Bullet>
              <strong>Loss frame:</strong> {"\""}10% mortality rate{"\""} — people avoid the
              treatment (same data!)
            </Bullet>
            <Bullet>Politicians frame tax cuts as {"\""}relief{"\""} or {"\""}giveaways{"\""} to shift perception</Bullet>
            <Bullet>Product pricing: {"\""}Save $5{"\""} vs {"\""}Get $5 off{"\""} vs {"\""}5% discount{"\""} trigger different responses</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Restate the problem in multiple frames before
              deciding; flip gains to losses and vice versa
            </Bullet>
          </SectionCard>

          {/* Section 8 — Loss Aversion */}
          <SectionCard number="8" title="Loss Aversion">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#5a8a3c">Finance</Tag>
            </div>
            <KV k="Definition" v="Losses feel roughly 2x as painful as equivalent gains feel pleasurable" />
            <KV k="Key ratio" v="Most studies find a loss-to-gain ratio of approximately 1.5:1 to 2.5:1" />
            <Bullet>Investors hold losing stocks too long, hoping to avoid realizing the loss</Bullet>
            <Bullet>Endowment effect: once you own something, you value it more and resist giving it up</Bullet>
            <Bullet>Free trials exploit this — losing access feels worse than never having it</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Frame decisions in terms of opportunity costs rather
              than losses; set stop-loss rules in advance
            </Bullet>
          </SectionCard>

          {/* Section 9 — Overconfidence Bias */}
          <SectionCard number="9" title="Overconfidence Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#7a5a8a">Self-Assessment</Tag>
            </div>
            <KV k="Definition" v="Excessive confidence in one's own answers, judgments, and predictions" />
            <Bullet>
              <strong>Overprecision</strong> — 90% confidence intervals contain the true answer
              only about 50% of the time
            </Bullet>
            <Bullet>
              <strong>Overestimation</strong> — we think we perform better than we actually do on
              tasks
            </Bullet>
            <Bullet>
              <strong>Overplacement</strong> — 93% of US drivers rate themselves {"\""}above
              average{"\""}
            </Bullet>
            <Bullet>Forecasters, doctors, and executives are particularly susceptible</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Track your predictions and review accuracy;
              widen your confidence intervals
            </Bullet>
          </SectionCard>

          {/* Section 10 — Status Quo Bias */}
          <SectionCard number="10" title="Status Quo Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">Inertia</Tag>
              <Tag color="#5a8a3c">Business</Tag>
            </div>
            <KV k="Definition" v="Preference for the current state of affairs; any change is perceived as a loss" />
            <Bullet>Default options in retirement plans dramatically affect savings rates (opt-in vs opt-out)</Bullet>
            <Bullet>Companies resist adopting new processes even when clearly superior</Bullet>
            <Bullet>Voters tend to re-elect incumbents regardless of performance</Bullet>
            <Bullet>Organ donation rates swing from 12% to 99% based solely on default checkbox</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Periodically zero-base your decisions — pretend you
              are choosing fresh with no defaults
            </Bullet>
          </SectionCard>

          {/* Section 11 — Bandwagon Effect */}
          <SectionCard number="11" title="Bandwagon Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Social</Tag>
              <Tag color="#8a6a3a">Group Dynamics</Tag>
            </div>
            <KV k="Definition" v="Adopting beliefs or behaviors because many other people do, regardless of underlying evidence" />
            <Bullet>
              <strong>Asch conformity</strong> — people gave obviously wrong answers to match the
              group (75% conformed at least once)
            </Bullet>
            <Bullet>Tech adoption curves are partly driven by {"\""}everyone else is using it{"\""}
            </Bullet>
            <Bullet>Investment bubbles form when people buy because others are buying</Bullet>
            <Bullet>Social proof in marketing ({"\""}10,000 customers can{"'"}t be wrong{"\""}) exploits this directly</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Evaluate evidence independently before checking
              what others think; use anonymous voting in teams
            </Bullet>
          </SectionCard>

          {/* Section 12 — Hindsight Bias */}
          <SectionCard number="12" title="Hindsight Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Memory</Tag>
              <Tag color="#8a6a3a">Judgment</Tag>
            </div>
            <KV k="Definition" v='The "I knew it all along" effect — believing past events were predictable after learning the outcome' />
            <Bullet>After market crashes, everyone claims they saw it coming</Bullet>
            <Bullet>Medical malpractice juries judge decisions with full knowledge of outcomes</Bullet>
            <Bullet>Creates false confidence in our ability to predict future events</Bullet>
            <Bullet>Prevents learning from mistakes — if you {"\""}knew all along,{"\""} there is nothing to learn</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Record predictions before outcomes are known;
              conduct pre-mortems, not just post-mortems
            </Bullet>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced & Debiasing */}
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
          {/* Section 13 — Bias Quick-Reference Matrix */}
          <SectionCard number="13" title="Bias Quick-Reference Matrix" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Information Filters", when: "Gathering data", best: "Confirmation, Availability, Anchoring — you see what you expect to see", icon: "🔍" },
                { title: "Social Pressure", when: "Group decisions", best: "Bandwagon, Groupthink, Authority Bias — the crowd overrides your logic", icon: "👥" },
                { title: "Loss & Risk", when: "Evaluating trade-offs", best: "Loss Aversion, Sunk Cost, Status Quo — fear of loss dominates", icon: "⚖️" },
                { title: "Self-Deception", when: "Assessing yourself", best: "Overconfidence, Dunning-Kruger, Hindsight — you trust yourself too much", icon: "🪞" },
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
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Section 14 — Groupthink */}
          <SectionCard number="14" title="Groupthink">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Social</Tag>
              <Tag color="#a53a3a">Team Risk</Tag>
            </div>
            <KV k="Definition" v="Desire for harmony in a group overrides realistic appraisal of alternatives" />
            <Bullet>
              <strong>Bay of Pigs</strong> — JFK's advisors suppressed doubts, leading to a
              disastrous invasion plan
            </Bullet>
            <Bullet>Symptoms: illusion of invulnerability, self-censorship, pressure on dissenters</Bullet>
            <Bullet>High-cohesion teams with strong leaders are most vulnerable</Bullet>
            <Bullet>Unanimous agreement should trigger alarm, not celebration</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Assign rotating devil{"'"}s advocates; use anonymous
              input before discussion; leader speaks last
            </Bullet>
          </SectionCard>

          {/* Section 15 — Peak-End Rule */}
          <SectionCard number="15" title="Peak-End Rule">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Memory</Tag>
              <Tag color="#2a7a7a">Experience</Tag>
            </div>
            <KV k="Definition" v="People judge experiences based on the most intense moment (peak) and the final moment (end), not the average" />
            <Bullet>A painful medical procedure feels better if pain tapers off gently at the end</Bullet>
            <Bullet>Vacations are remembered by highlights and the last day, not total duration</Bullet>
            <Bullet>Customer service recoveries at the end of an interaction shape overall satisfaction</Bullet>
            <Bullet>Duration neglect: a 30-minute ordeal and a 60-minute ordeal feel equally bad if peaks and ends match</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Design experiences to end on a high note; be
              aware that memories differ from lived experiences
            </Bullet>
          </SectionCard>

          {/* Section 16 — Halo Effect */}
          <SectionCard number="16" title="Halo Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Perception</Tag>
              <Tag color="#8a6a3a">Judgment</Tag>
            </div>
            <KV k="Definition" v="One positive trait (attractiveness, success, charisma) creates a positive impression that colors all other judgments" />
            <Bullet>Attractive people are perceived as more intelligent, competent, and trustworthy</Bullet>
            <Bullet>A company with a great product is assumed to have great culture, ethics, and leadership</Bullet>
            <Bullet>Performance reviews are heavily influenced by one standout trait or recent success</Bullet>
            <Bullet>Reverse halo (Horn Effect): one negative trait taints all other evaluations</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Evaluate traits independently using structured
              criteria; use rubrics and scorecards for hiring
            </Bullet>
          </SectionCard>

          {/* Section 17 — Survivorship Bias */}
          <SectionCard number="17" title="Survivorship Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#5a8a3c">Business</Tag>
            </div>
            <KV k="Definition" v="Focusing on successes (survivors) while ignoring failures, leading to false conclusions about what causes success" />
            <Bullet>
              <strong>WWII planes</strong> — Abraham Wald realized you should armor where returning
              planes were NOT hit (the ones hit there never returned)
            </Bullet>
            <Bullet>Startup advice from billionaires ignores thousands who did the same things and failed</Bullet>
            <Bullet>Mutual fund performance looks great because failed funds are quietly closed</Bullet>
            <Bullet>{"\""}College dropouts become billionaires{"\""} ignores millions of dropouts who don{"'"}t</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Always ask {"\""}What does the graveyard of failures
              look like?{"\""} — study failures, not just successes
            </Bullet>
          </SectionCard>

          {/* Section 18 — Planning Fallacy */}
          <SectionCard number="18" title="Planning Fallacy">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Business</Tag>
              <Tag color="#2a7a7a">Time</Tag>
            </div>
            <KV k="Definition" v="Systematically underestimating the time, cost, and risk of future actions while overestimating their benefits" />
            <Bullet>Software projects: average overrun is 66% in time and 33% in cost</Bullet>
            <Bullet>Sydney Opera House: estimated 7 years and $7M, took 16 years and $102M</Bullet>
            <Bullet>Students estimated 34 days to finish thesis; actual average was 56 days</Bullet>
            <Bullet>Optimism bias and anchoring on best-case scenarios drive the effect</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Use reference class forecasting — base estimates on
              how long similar past projects actually took, not your plan
            </Bullet>
          </SectionCard>

          {/* Section 19 — Recency & Primacy Bias */}
          <SectionCard number="19" title="Recency & Primacy Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Memory</Tag>
              <Tag color="#8a6a3a">Sequence</Tag>
            </div>
            <KV k="Primacy" v="First items in a sequence are remembered best and disproportionately influence impressions" />
            <KV k="Recency" v="Last items in a sequence are most easily recalled and given extra weight" />
            <Bullet>Interview candidates seen first or last have an unfair advantage</Bullet>
            <Bullet>Annual performance reviews overweight the last 2 months of work</Bullet>
            <Bullet>Investors overreact to the most recent quarter of earnings data</Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Use structured evaluation criteria applied
              consistently; randomize presentation order; take notes in real-time
            </Bullet>
          </SectionCard>

          {/* Section 20 — Fundamental Attribution Error */}
          <SectionCard number="20" title="Attribution Errors">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Social</Tag>
              <Tag color="#7a5a8a">Perception</Tag>
            </div>
            <KV k="Fundamental Attribution Error" v="Attributing others' behavior to character while attributing your own to circumstances" />
            <Bullet>Colleague is late: {"\""}They{"'"}re irresponsible.{"\""} You{"'"}re late: {"\""}Traffic was terrible.{"\""}</Bullet>
            <Bullet>Judging poor people as lazy while ignoring systemic barriers</Bullet>
            <Bullet>
              <strong>Actor-observer asymmetry</strong> — we see our own behavior as situational
              but others{"'"} as dispositional
            </Bullet>
            <Bullet>
              <strong>Self-serving bias</strong> — success is skill (internal), failure is bad luck
              (external)
            </Bullet>
            <Bullet>
              <strong>Countermeasure:</strong> Before judging someone, ask {"\""}What situation
              might explain this behavior?{"\""}
            </Bullet>
          </SectionCard>

          {/* Section 21 — Debiasing Toolkit */}
          <SectionCard number="21" title="Debiasing Toolkit" span={2}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Practical techniques to reduce bias in your decisions. No technique is
              perfect, but combining several dramatically improves judgment quality.
            </div>
            <RefRow cmd="Pre-mortem" desc="Imagine the decision already failed. List reasons why. Surfaces hidden risks." />
            <RefRow cmd="Red team" desc="Assign people to argue against the proposal. Defeats groupthink." />
            <RefRow cmd="Base rates" desc="Check statistical base rates before trusting intuition on probability." />
            <RefRow cmd="Outside view" desc="Look at how similar decisions played out for others (reference class forecasting)." />
            <RefRow cmd="Decision journal" desc="Record reasoning BEFORE outcomes. Review to calibrate future judgment." />
            <RefRow cmd="10/10/10 rule" desc="How will you feel about this in 10 minutes, 10 months, 10 years?" />
            <RefRow cmd="Blind evaluation" desc="Remove identifying info (names, schools) from candidates to reduce halo effects." />
            <RefRow cmd="Consider opposite" desc="Force yourself to argue for the opposite conclusion before deciding." />
          </SectionCard>

          {/* Section 22 — Bias Categories at a Glance */}
          <SectionCard number="22" title="Bias Categories">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              All 20 biases in this guide grouped by type.
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#a53a3a">Information</Tag>
              <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>
                Confirmation, Availability, Anchoring, Framing
              </div>
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#3a6ea5">Social</Tag>
              <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>
                Bandwagon, Groupthink, Attribution Error, Halo
              </div>
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#5a8a3c">Loss / Risk</Tag>
              <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>
                Loss Aversion, Sunk Cost, Status Quo
              </div>
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#7a5a8a">Self-Assessment</Tag>
              <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>
                Overconfidence, Dunning-Kruger
              </div>
            </div>
            <div style={{ marginBottom: 4 }}>
              <Tag color="#8a6a3a">Memory</Tag>
              <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>
                Hindsight, Recency, Primacy, Peak-End, Survivorship
              </div>
            </div>
            <div>
              <Tag color="#2a7a7a">Planning</Tag>
              <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>
                Planning Fallacy, Overconfidence
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
        Cognitive Biases Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on Kahneman, Tversky, Thaler, Ariely & behavioral economics research
        </span>
      </div>
    </div>
  );
}
