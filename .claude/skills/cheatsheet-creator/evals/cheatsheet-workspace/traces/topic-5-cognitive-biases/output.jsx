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

export default function CognitiveBiasesCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Decision Biases", "Page 2: Group & Advanced Biases"];

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

      {/* Page 1: Core Decision Biases */}
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
          {/* Section 1: What Are Cognitive Biases? */}
          <SectionCard number="1" title="What Are Cognitive Biases?">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Systematic patterns of deviation from rationality in judgment. Your brain takes mental shortcuts (heuristics) that are usually helpful but can lead to predictable errors.
            </div>
            <KV k="Origin" v="Kahneman & Tversky, 1970s research on judgment under uncertainty" />
            <KV k="Count" v="Over 180 catalogued, but ~20 drive most real-world decision errors" />
            <KV k="Key Insight" v="Biases aren't stupidity — they're features of fast cognition that misfire in specific contexts" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700 }}>Why This Matters</div>
              <div style={{ fontSize: 11.5, color: palette.mid, marginTop: 2 }}>
                Awareness alone reduces bias impact by 20-30% in studies. Structured debiasing techniques can improve decision accuracy by up to 50%.
              </div>
            </div>
          </SectionCard>

          {/* Section 2: Confirmation Bias */}
          <SectionCard number="2" title="Confirmation Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#3a6ea5">Belief</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The tendency to search for, interpret, and recall information that confirms pre-existing beliefs while ignoring contradicting evidence.
            </div>
            <Bullet><strong>Selective search</strong> — you Google for evidence that supports your view, not challenges it</Bullet>
            <Bullet><strong>Biased interpretation</strong> — ambiguous data gets read as confirming your position</Bullet>
            <Bullet><strong>Memory distortion</strong> — you recall confirming evidence more easily than disconfirming</Bullet>
            <Bullet><strong>Antidote:</strong> actively seek disconfirming evidence; assign a "devil's advocate" role in team decisions</Bullet>
          </SectionCard>

          {/* Section 3: Anchoring Effect */}
          <SectionCard number="3" title="Anchoring Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#8a6a3a">Estimation</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The first piece of information you encounter (the "anchor") disproportionately influences subsequent judgments.
            </div>
            <KV k="Example" v="Listing a house at $500K makes $450K feel like a deal — even if it's worth $380K" />
            <KV k="Strength" v="Works even when the anchor is obviously random (e.g., spinning a wheel before estimating)" />
            <Bullet><strong>In negotiations</strong> — whoever sets the first number frames the entire discussion</Bullet>
            <Bullet><strong>In hiring</strong> — a candidate's previous salary anchors their offer</Bullet>
            <Bullet><strong>Antidote:</strong> generate your own estimate before seeing anyone else's numbers</Bullet>
          </SectionCard>

          {/* Section 4: Availability Heuristic */}
          <SectionCard number="4" title="Availability Heuristic">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#7a5a8a">Judgment</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Judging the likelihood of events based on how easily examples come to mind, rather than actual frequency data.
            </div>
            <Bullet><strong>Media distortion</strong> — plane crashes feel more likely than car accidents because they're more memorable</Bullet>
            <Bullet><strong>Recency effect</strong> — a recent stock market crash makes you overestimate crash probability</Bullet>
            <Bullet><strong>Vividness</strong> — dramatic stories outweigh statistics in shaping risk perception</Bullet>
            <Bullet><strong>Personal experience</strong> — "it happened to me" overrides base-rate data</Bullet>
            <Bullet><strong>Antidote:</strong> always ask "what does the data actually say?" before trusting your gut on frequency</Bullet>
          </SectionCard>

          {/* Section 5: Sunk Cost Fallacy */}
          <SectionCard number="5" title="Sunk Cost Fallacy">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#2a7a7a">Investment</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Continuing a course of action because of previously invested resources (time, money, effort) rather than future value.
            </div>
            <Bullet><strong>The Concorde effect</strong> — Britain and France kept funding the Concorde despite knowing it would never be profitable</Bullet>
            <Bullet><strong>Bad movie trap</strong> — staying because you already paid for the ticket, even though you're miserable</Bullet>
            <Bullet><strong>Project escalation</strong> — "we've spent $2M already, we can't stop now" even when the project is failing</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700 }}>The Fix</div>
              <div style={{ fontSize: 11.5, color: palette.mid, marginTop: 2 }}>
                Ask: "If I hadn't already invested anything, would I start this project today with what I know now?" If no, walk away.
              </div>
            </div>
          </SectionCard>

          {/* Section 6: Overconfidence Bias */}
          <SectionCard number="6" title="Overconfidence Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#8a6a3a">Self-Assessment</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Excessive confidence in one's own answers, predictions, and abilities. The most pervasive bias in professional settings.
            </div>
            <KV k="Calibration gap" v="When people say they're '95% confident,' they're right only ~75% of the time" />
            <KV k="Planning form" v="Projects routinely take 2-3x longer than initial estimates" />
            <Bullet><strong>Illusion of knowledge</strong> — experts are often more overconfident than novices in areas outside their expertise</Bullet>
            <Bullet><strong>Better-than-average effect</strong> — 93% of US drivers rate themselves above average</Bullet>
            <Bullet><strong>Antidote:</strong> use pre-mortems ("imagine this failed — why?") and track your prediction accuracy over time</Bullet>
          </SectionCard>

          {/* Section 7: Dunning-Kruger Effect */}
          <SectionCard number="7" title="Dunning-Kruger Effect">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A cognitive bias where people with limited knowledge overestimate their competence, while experts underestimate theirs.
            </div>
            {[
              { stage: "Stage 1", label: "Unconscious Incompetence", desc: "Don't know what you don't know — peak confidence" },
              { stage: "Stage 2", label: "Conscious Incompetence", desc: "Realize how much there is to learn — confidence crashes" },
              { stage: "Stage 3", label: "Conscious Competence", desc: "Building skill with effort — confidence slowly rebuilds" },
              { stage: "Stage 4", label: "Unconscious Competence", desc: "Mastery feels natural — but you underestimate your own skill" },
            ].map(({ stage, label, desc }, i) => (
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 48, flexShrink: 0 }}>{stage}</span>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11.5, width: 120, flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 8: Framing Effect */}
          <SectionCard number="8" title="Framing Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Perception</Tag>
              <Tag color="#3a6ea5">Communication</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              People react differently to the same information depending on how it's presented — as a gain or a loss.
            </div>
            <KV k="Gain frame" v={<>"This surgery has a <strong>90% survival rate</strong>" — most patients choose it</>} />
            <KV k="Loss frame" v={<>"This surgery has a <strong>10% mortality rate</strong>" — far fewer patients choose it</>} />
            <Bullet><strong>Marketing</strong> — "Save $50" vs "Don't lose $50" triggers different purchase decisions</Bullet>
            <Bullet><strong>Policy</strong> — "95% employment rate" vs "5% unemployment rate" changes public opinion</Bullet>
            <Bullet><strong>Antidote:</strong> restate every important claim in both gain and loss frames before deciding</Bullet>
          </SectionCard>

          {/* Section 9: Loss Aversion */}
          <SectionCard number="9" title="Loss Aversion">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#2a7a7a">Risk</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The pain of losing is psychologically about twice as powerful as the pleasure of gaining. Discovered by Kahneman and Tversky.
            </div>
            <KV k="Ratio" v="Losses feel roughly 2x more intense than equivalent gains" />
            <KV k="Investing" v="Holding losing stocks too long while selling winners too early (disposition effect)" />
            <Bullet><strong>Endowment effect</strong> — you overvalue what you already own simply because you own it</Bullet>
            <Bullet><strong>Risk aversion</strong> — refusing a fair coin flip for $100 win / $100 loss because the potential loss looms larger</Bullet>
            <Bullet><strong>Antidote:</strong> ask "if I didn't already have this, how much would I pay to get it?"</Bullet>
          </SectionCard>

          {/* Section 10: Status Quo Bias */}
          <SectionCard number="10" title="Status Quo Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Inertia</Tag>
              <Tag color="#5a8a3c">Default</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A preference for the current state of affairs. People tend to stick with defaults even when switching would be beneficial.
            </div>
            <Bullet><strong>Organ donation</strong> — countries with opt-out defaults have 90%+ donation rates vs 15% for opt-in</Bullet>
            <Bullet><strong>Software defaults</strong> — most users never change default settings, even suboptimal ones</Bullet>
            <Bullet><strong>Career inertia</strong> — staying in an unsatisfying role because switching feels risky</Bullet>
            <Bullet><strong>Related to loss aversion</strong> — any change involves potential loss, which feels threatening</Bullet>
            <Bullet><strong>Antidote:</strong> periodically run a "zero-based" review — would you choose this again from scratch?</Bullet>
          </SectionCard>

          {/* Section 11: Survivorship Bias */}
          <SectionCard number="11" title="Survivorship Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Analysis</Tag>
              <Tag color="#3a6ea5">Data</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Focusing on things that survived a selection process while overlooking those that didn't, leading to false conclusions.
            </div>
            <Bullet><strong>WWII planes</strong> — Abraham Wald showed the military should armor where returning planes <em>weren't</em> hit</Bullet>
            <Bullet><strong>Startup advice</strong> — we study successful founders but ignore thousands who followed the same playbook and failed</Bullet>
            <Bullet><strong>Music industry</strong> — "just follow your passion" ignores the 99% of passionate musicians who never make it</Bullet>
            <Bullet><strong>Building design</strong> — ancient structures seem more durable only because the flimsy ones already collapsed</Bullet>
            <Bullet><strong>Antidote:</strong> always ask "where are the failures, and what can they teach us?"</Bullet>
          </SectionCard>

          {/* Section 12: System 1 vs System 2 */}
          <SectionCard number="12" title="The Big Picture: System 1 vs System 2" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 10 }}>
              Daniel Kahneman's framework: most biases arise because System 1 (fast, intuitive thinking) handles decisions that should involve System 2 (slow, deliberate thinking).
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "System 1: Fast", when: "Automatic & Effortless", best: "Pattern recognition, emotional reactions, first impressions, practiced skills. Handles 95% of daily decisions.", marker: "S1" },
                { title: "System 2: Slow", when: "Deliberate & Effortful", best: "Complex calculations, logical reasoning, weighing trade-offs, learning new skills. Lazy — engages only when forced.", marker: "S2" },
                { title: "When Bias Strikes", when: "The Failure Mode", best: "System 1 gives a quick answer to a hard question. System 2 is too lazy or busy to check it. The biased answer becomes your decision.", marker: "!!" },
                { title: "The Debiasing Key", when: "How to Intervene", best: "Create friction that forces System 2 to engage: checklists, pre-mortems, structured frameworks, mandatory second opinions.", marker: "OK" },
              ].map(({ title, when, best, marker }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 4, fontWeight: 900, color: palette.accent }}>{marker}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Group & Advanced Biases */}
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
          {/* Section 13: Bandwagon Effect */}
          <SectionCard number="13" title="Bandwagon Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Social</Tag>
              <Tag color="#7a5a8a">Group</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The tendency to adopt beliefs, trends, or behaviors because others are doing so. Strength increases with perceived group size.
            </div>
            <Bullet><strong>Market bubbles</strong> — "everyone's buying crypto" drives irrational investment surges</Bullet>
            <Bullet><strong>Voting patterns</strong> — poll results influence undecided voters toward the apparent winner</Bullet>
            <Bullet><strong>Workplace adoption</strong> — teams adopt tools because "industry leaders use it" without evaluating fit</Bullet>
            <Bullet><strong>Social proof</strong> — Amazon reviews, follower counts, and "bestseller" labels exploit this bias</Bullet>
            <Bullet><strong>Antidote:</strong> evaluate options on your specific criteria before checking what others chose</Bullet>
          </SectionCard>

          {/* Section 14: Halo Effect */}
          <SectionCard number="14" title="Halo Effect">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Perception</Tag>
              <Tag color="#8a6a3a">Judgment</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              One positive trait (attractiveness, success, eloquence) creates a "halo" that biases your overall judgment of a person, company, or product.
            </div>
            <KV k="Hiring" v="Attractive candidates are rated as more competent, even for unrelated skills" />
            <KV k="Brands" v="Apple's design reputation makes people rate their products higher on unrelated dimensions" />
            <KV k="Reverse halo" v="One negative trait ('horn effect') can unfairly taint everything else" />
            <Bullet><strong>Performance reviews</strong> — a recent success can overshadow months of average work</Bullet>
            <Bullet><strong>Antidote:</strong> evaluate each dimension independently using specific, measurable criteria</Bullet>
          </SectionCard>

          {/* Section 15: Hindsight Bias */}
          <SectionCard number="15" title="Hindsight Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">Memory</Tag>
              <Tag color="#8a6a3a">Judgment</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              After an event occurs, people tend to see it as having been predictable — the "I knew it all along" effect.
            </div>
            <Bullet><strong>Post-mortems</strong> — teams say "the warning signs were obvious" when they weren't at the time</Bullet>
            <Bullet><strong>Medical diagnosis</strong> — once a diagnosis is known, doctors rate earlier symptoms as more clearly indicative</Bullet>
            <Bullet><strong>Financial markets</strong> — every crash feels "inevitable" in retrospect, but nobody timed the exit</Bullet>
            <Bullet><strong>Blame culture</strong> — hindsight bias makes it easy to blame decision-makers who faced genuine uncertainty</Bullet>
            <Bullet><strong>Antidote:</strong> record your predictions and reasoning <em>before</em> outcomes are known</Bullet>
          </SectionCard>

          {/* Section 16: Planning Fallacy */}
          <SectionCard number="16" title="Planning Fallacy">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#5a8a3c">Planning</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The tendency to underestimate time, cost, and risk of future actions while overestimating their benefits. Affects individuals and organizations equally.
            </div>
            <KV k="Sydney Opera House" v="Estimated 4 years and $7M — took 16 years and $102M" />
            <KV k="Software projects" v="Average overrun is 66% of original estimate (Standish Group data)" />
            <Bullet><strong>Best-case thinking</strong> — plans assume everything goes right, ignoring the base rate of delays</Bullet>
            <Bullet><strong>Reference class forecasting</strong> — look at how long similar past projects actually took, not your optimistic estimate</Bullet>
            <Bullet><strong>Antidote:</strong> multiply your time estimate by 1.5-2x, and your budget by 2-3x as a starting correction</Bullet>
          </SectionCard>

          {/* Section 17: Recency Bias */}
          <SectionCard number="17" title="Recency Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">Memory</Tag>
              <Tag color="#3a6ea5">Weighting</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Giving disproportionate weight to the most recent events or information when making judgments, at the expense of longer-term patterns.
            </div>
            <Bullet><strong>Performance reviews</strong> — an employee's last month dominates their annual review</Bullet>
            <Bullet><strong>Investing</strong> — recent market performance (up or down) is projected indefinitely into the future</Bullet>
            <Bullet><strong>Hiring</strong> — the last candidate interviewed is remembered more vividly, biasing the selection</Bullet>
            <Bullet><strong>Risk assessment</strong> — years without an earthquake make people underinsure; a recent quake makes them overinsure</Bullet>
            <Bullet><strong>Antidote:</strong> use structured scoring systems and longer time windows for evaluation</Bullet>
          </SectionCard>

          {/* Section 18: Authority Bias */}
          <SectionCard number="18" title="Authority Bias">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Social</Tag>
              <Tag color="#a53a3a">Danger</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The tendency to attribute greater accuracy to the opinions of authority figures, regardless of whether they have relevant expertise.
            </div>
            <KV k="Milgram experiment" v="65% of participants obeyed orders to administer (simulated) dangerous electric shocks" />
            <KV k="Expert creep" v="A Nobel physicist's opinion on economics gets undeserved weight" />
            <Bullet><strong>Workplace</strong> — junior employees suppress valid concerns because a VP expressed a different view</Bullet>
            <Bullet><strong>Medicine</strong> — nurses historically followed clearly incorrect doctor orders due to authority deference</Bullet>
            <Bullet><strong>Antidote:</strong> evaluate the argument, not the person making it — ask "is this their domain of expertise?"</Bullet>
          </SectionCard>

          {/* Section 19: Groupthink */}
          <SectionCard number="19" title="Groupthink">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">High Impact</Tag>
              <Tag color="#7a5a8a">Group</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              When the desire for group harmony overrides realistic appraisal of alternatives. Coined by Irving Janis studying the Bay of Pigs disaster.
            </div>
            <Bullet><strong>Symptoms:</strong> illusion of invulnerability, collective rationalization, stereotyping outsiders, self-censorship</Bullet>
            <Bullet><strong>Pressure to conform</strong> — dissenters are seen as disloyal rather than insightful</Bullet>
            <Bullet><strong>Illusion of unanimity</strong> — silence is interpreted as agreement</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700 }}>Prevention Strategies</div>
              <div style={{ fontSize: 11.5, color: palette.mid, marginTop: 2 }}>
                Assign a rotating devil's advocate. Invite outside experts. Have the leader speak last. Use anonymous voting for initial positions. Break into subgroups to develop independent analyses.
              </div>
            </div>
          </SectionCard>

          {/* Section 20: Debiasing Toolkit */}
          <SectionCard number="20" title="Debiasing Toolkit">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Practical</Tag>
              <Tag color="#2a7a7a">Strategy</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Evidence-backed techniques to improve decision quality.
            </div>
            <KV k="Pre-mortem" v="Imagine the decision failed — list reasons why. Surfaces hidden risks." />
            <KV k="Red team" v="Assign a group to argue against the proposal. Counters confirmation bias." />
            <KV k="Reference class" v="Find similar past decisions and their outcomes. Counters planning fallacy." />
            <KV k="10/10/10 Rule" v="How will you feel about this decision in 10 minutes, 10 months, 10 years?" />
            <KV k="Decision journal" v="Record predictions, confidence levels, and reasoning. Review accuracy quarterly." />
            <KV k="Consider the opposite" v="Before finalizing, spend 5 minutes arguing the other side." />
          </SectionCard>

          {/* Section 21: Quick Reference Bias Spotter */}
          <SectionCard number="21" title="Quick Reference: Bias Spotter" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 10 }}>
              Use this guide when you notice these situations — they're red flags that a specific bias may be influencing your judgment.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { signal: "\"I just feel strongly about this\"", bias: "Confirmation Bias", fix: "Seek 3 pieces of disconfirming evidence" },
                { signal: "\"The first offer was $X, so...\"", bias: "Anchoring Effect", fix: "Make your own independent estimate first" },
                { signal: "\"I saw it on the news, so it must be common\"", bias: "Availability Heuristic", fix: "Look up actual frequency data" },
                { signal: "\"We've already invested too much to stop\"", bias: "Sunk Cost Fallacy", fix: "Evaluate future value only, ignore past spend" },
                { signal: "\"I'm pretty sure I'm right about this\"", bias: "Overconfidence Bias", fix: "Track your prediction accuracy; widen confidence intervals" },
                { signal: "\"90% success sounds better than 10% failure\"", bias: "Framing Effect", fix: "Restate the problem in both gain and loss frames" },
                { signal: "\"I can't give that up\"", bias: "Loss Aversion", fix: "Ask: would I acquire this if I didn't have it?" },
                { signal: "\"Let's just keep doing what we're doing\"", bias: "Status Quo Bias", fix: "Run a zero-based review — choose fresh from all options" },
                { signal: "\"Everyone else is doing it\"", bias: "Bandwagon Effect", fix: "Evaluate on your own criteria before checking the crowd" },
                { signal: "\"I knew that would happen\"", bias: "Hindsight Bias", fix: "Check your recorded prediction from before the outcome" },
              ].map(({ signal, bias, fix }, i) => (
                <div
                  key={bias}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    padding: "6px 8px",
                    background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                    borderRadius: 5,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11.5, color: palette.dark, fontWeight: 700, fontStyle: "italic" }}>{signal}</div>
                    <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700, marginTop: 2 }}>{bias}</div>
                    <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 1 }}>{fix}</div>
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
        Cognitive Biases Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on research by Kahneman, Tversky, Gigerenzer, and others · Essential biases for decision making
        </span>
      </div>
    </div>
  );
}
