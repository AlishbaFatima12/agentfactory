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

export default function ChildDevelopmentMilestonesCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Ages & Stages", "Page 2: Tips & Activities"];

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
          Birth to 5 Years · What to Expect · When to Worry · Play Ideas
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

      {/* Page 1: Ages & Stages */}
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
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Milestones are skills most children reach by a certain age. They're guideposts, not deadlines. Every child develops at their own pace!
            </div>
            <Bullet><strong>Ranges are normal</strong> — some kids walk at 9 months, others at 16 months, and both are perfectly fine</Bullet>
            <Bullet><strong>Watch for patterns</strong> — missing one milestone isn't usually a concern; falling behind in several areas might be worth a chat with your pediatrician</Bullet>
            <Bullet><strong>Premature babies</strong> — use their adjusted age (from their due date) for the first 2 years</Bullet>
            <Bullet><strong>Culture matters</strong> — some milestones depend on what's practiced at home (like using utensils or sleeping independently)</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700 }}>Remember:</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>This guide is for awareness, not diagnosis. You know your child best. Trust your instincts and partner with your pediatrician.</div>
            </div>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="Newborn to 3 Months">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Motor</Tag><Tag color="#5a8a3c">Social</Tag><Tag color="#7a5a8a">Language</Tag><Tag color="#8a6a3a">Cognitive</Tag>
            </div>
            <Bullet><strong>Lifts head</strong> briefly during tummy time; gains more control each week</Bullet>
            <Bullet><strong>Social smile</strong> — melts your heart around 6-8 weeks</Bullet>
            <Bullet><strong>Follows objects</strong> with eyes and turns head toward sounds</Bullet>
            <Bullet><strong>Coos and gurgles</strong> — those first adorable non-crying sounds</Bullet>
            <Bullet><strong>Recognizes faces</strong> — especially yours, from just a few inches away</Bullet>
            <Bullet><strong>Startles at loud noises</strong> (Moro reflex) — this is normal and fades by 4 months</Bullet>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="4 to 6 Months">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Motor</Tag><Tag color="#5a8a3c">Social</Tag><Tag color="#7a5a8a">Language</Tag>
            </div>
            <Bullet><strong>Rolls over</strong> — usually tummy to back first, then back to tummy</Bullet>
            <Bullet><strong>Reaches for and grabs</strong> toys; starts passing objects hand to hand</Bullet>
            <Bullet><strong>Laughs out loud</strong> — one of the best sounds you'll ever hear</Bullet>
            <Bullet><strong>Babbles</strong> consonant sounds like "ba," "da," "ma"</Bullet>
            <Bullet><strong>Recognizes own name</strong> and turns toward it by 6 months</Bullet>
            <Bullet><strong>Shows interest in food</strong> — sits with support, watches you eat, opens mouth</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}><strong style={{ color: palette.accent }}>Fun fact:</strong> Around 4-5 months, babies discover their feet and can't stop grabbing them!</div>
            </div>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="7 to 9 Months">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Motor</Tag><Tag color="#5a8a3c">Social</Tag><Tag color="#8a6a3a">Cognitive</Tag>
            </div>
            <Bullet><strong>Sits without support</strong> — a game-changer for independent play</Bullet>
            <Bullet><strong>Crawls</strong> (or scoots, rolls, army-crawls — all count!)</Bullet>
            <Bullet><strong>Stranger anxiety</strong> kicks in — clings to you around new people</Bullet>
            <Bullet><strong>Pincer grasp</strong> developing — picks up small foods between thumb and finger</Bullet>
            <Bullet><strong>Plays peek-a-boo</strong> — understands object permanence (things exist even when hidden)</Bullet>
            <Bullet><strong>Waves bye-bye</strong> and claps hands by 9 months</Bullet>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="10 to 12 Months">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Motor</Tag><Tag color="#7a5a8a">Language</Tag><Tag color="#8a6a3a">Cognitive</Tag>
            </div>
            <Bullet><strong>Pulls to stand</strong> and cruises along furniture; some may take first steps</Bullet>
            <Bullet><strong>First words</strong> appear — "mama," "dada," "uh-oh" (1-3 words typical by 12 months)</Bullet>
            <Bullet><strong>Points at things</strong> to show you or request something — this is huge for communication</Bullet>
            <Bullet><strong>Understands "no"</strong> — even if they don't always listen</Bullet>
            <Bullet><strong>Drops things on purpose</strong> to see what happens (your new full-time job: picking things up)</Bullet>
            <Bullet><strong>Imitates actions</strong> — stirs a spoon, holds phone to ear, copies your expressions</Bullet>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="13 to 18 Months">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Motor</Tag><Tag color="#7a5a8a">Language</Tag><Tag color="#5a8a3c">Social</Tag>
            </div>
            <Bullet><strong>Walking!</strong> Most toddlers walk independently between 12-15 months</Bullet>
            <Bullet><strong>Vocabulary grows</strong> to about 5-20 words by 18 months</Bullet>
            <Bullet><strong>Follows simple instructions</strong> — "bring me the ball," "give Daddy a kiss"</Bullet>
            <Bullet><strong>Scribbles with crayons</strong> (and on walls, if you're not careful)</Bullet>
            <Bullet><strong>Stacks 2-3 blocks</strong> — and loves knocking them down even more</Bullet>
            <Bullet><strong>Pretend play begins</strong> — feeds a doll, "talks" on a toy phone</Bullet>
            <Bullet><strong>Points at what they want</strong> — gets frustrated when you don't understand</Bullet>
          </SectionCard>

          {/* Section 7 — THE BIG ONE */}
          <SectionCard number="7" title="19 to 24 Months (Your Kiddo!)" span={2}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>This is you!</Tag><Tag color="#3a6ea5">Motor</Tag><Tag color="#7a5a8a">Language</Tag><Tag color="#5a8a3c">Social</Tag><Tag color="#8a6a3a">Cognitive</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Welcome to the amazing (and exhausting) world of a 2-year-old! Here's what's probably going on:
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.accent, marginBottom: 4, fontFamily: "'Georgia', serif" }}>Movement & Body</div>
                <Bullet><strong>Runs</strong> (and falls, and gets back up — fearlessly)</Bullet>
                <Bullet><strong>Kicks a ball</strong> forward; throws overhand</Bullet>
                <Bullet><strong>Climbs on everything</strong> — furniture, playground structures, your patience</Bullet>
                <Bullet><strong>Walks up stairs</strong> holding the railing or your hand</Bullet>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.accent, marginBottom: 4, fontFamily: "'Georgia', serif" }}>Words & Thinking</div>
                <Bullet><strong>50+ words</strong> and starting to put 2 words together ("more milk," "Daddy go")</Bullet>
                <Bullet><strong>Follows 2-step directions</strong> — "pick up your shoes and put them by the door"</Bullet>
                <Bullet><strong>Names pictures</strong> in books — "dog!" "truck!" "baby!"</Bullet>
                <Bullet><strong>Sorts shapes and colors</strong>; does simple puzzles</Bullet>
              </div>
            </div>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: palette.accent, marginBottom: 4, fontFamily: "'Georgia', serif" }}>The Emotional Rollercoaster (Totally Normal!)</div>
              <Bullet><strong>Big feelings, tiny vocabulary</strong> — tantrums happen because they can't express what they need yet</Bullet>
              <Bullet><strong>"NO!" is their favorite word</strong> — it means they're developing independence and autonomy</Bullet>
              <Bullet><strong>Parallel play</strong> — plays next to other kids but not really with them yet</Bullet>
              <Bullet><strong>Clings, then pushes away</strong> — they want independence but still need you close</Bullet>
            </div>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="2 to 3 Years">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Language</Tag><Tag color="#5a8a3c">Social</Tag><Tag color="#8a6a3a">Cognitive</Tag>
            </div>
            <Bullet><strong>Speaks in sentences</strong> of 3-4 words; strangers understand about half</Bullet>
            <Bullet><strong>Names body parts</strong> and common objects; knows age and gender</Bullet>
            <Bullet><strong>Potty training readiness</strong> — shows interest, stays dry for 2+ hours, tells you when wet</Bullet>
            <Bullet><strong>Imaginative play</strong> takes off — tea parties, playing house, pretend cooking</Bullet>
            <Bullet><strong>Pedals a tricycle</strong> and jumps with both feet off the ground</Bullet>
            <Bullet><strong>Turns book pages</strong> one at a time; "reads" to stuffed animals</Bullet>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="3 to 4 Years">
            <Bullet><strong>"Why?" on repeat</strong> — their curiosity is exploding (deep breaths!)</Bullet>
            <Bullet><strong>Speaks clearly enough</strong> for strangers to understand most of what they say</Bullet>
            <Bullet><strong>Plays cooperatively</strong> with other children; takes turns (sometimes)</Bullet>
            <Bullet><strong>Draws a person</strong> with 2-4 body parts (the head-feet drawings are the best)</Bullet>
            <Bullet><strong>Uses scissors</strong>; strings large beads; buttons large buttons</Bullet>
            <Bullet><strong>Understands "same" and "different"</strong>; counts to 3-4 objects</Bullet>
            <Bullet><strong>Tells stories</strong> — part real, part imaginary, 100% entertaining</Bullet>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="4 to 5 Years">
            <Bullet><strong>Counts 10+ objects</strong>; understands concepts like "more," "biggest," "tallest"</Bullet>
            <Bullet><strong>Writes some letters</strong> and may write their own name</Bullet>
            <Bullet><strong>Hops on one foot</strong>; catches a bounced ball most of the time</Bullet>
            <Bullet><strong>Gets dressed independently</strong> (though outfits may be... creative)</Bullet>
            <Bullet><strong>Has real friendships</strong> and may have a "best friend"</Bullet>
            <Bullet><strong>Tells the difference</strong> between real and make-believe</Bullet>
            <Bullet><strong>Rhymes and sings</strong> songs from memory; loves jokes (even bad ones)</Bullet>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="When to Call Your Pediatrician">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Trust your gut. If something feels off, it's always okay to ask. Early support makes a big difference. Watch for these signs:
            </div>
            {[
              { age: "By 4 months", flag: "Doesn't follow moving objects with eyes, doesn't smile at people, can't support head" },
              { age: "By 6 months", flag: "Doesn't reach for things, no babbling sounds, doesn't respond to own name" },
              { age: "By 12 months", flag: "Doesn't crawl, can't stand with support, no single words, doesn't point or wave" },
              { age: "By 18 months", flag: "Doesn't walk, has fewer than 6 words, doesn't notice when caregiver leaves" },
              { age: "By 24 months", flag: "Doesn't use 2-word phrases, doesn't imitate actions, doesn't follow simple instructions" },
              { age: "By 36 months", flag: "Frequent falling, can't climb stairs, drools or very unclear speech, doesn't play pretend" },
            ].map(({ age, flag }, i) => (
              <div
                key={age}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <strong style={{ color: palette.accent, fontSize: 11.5 }}>{age}:</strong>
                <span style={{ fontSize: 11.5, color: palette.mid, marginLeft: 4 }}>{flag}</span>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}><strong style={{ color: palette.accent }}>Any age:</strong> Loss of skills they previously had, not making eye contact, or not responding to their name — talk to your doctor.</div>
            </div>
          </SectionCard>

          {/* Section 12 — Full Width */}
          <SectionCard number="12" title="The Four Big Areas of Development" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Everything your child learns falls into one of these four domains. Kids often develop faster in one area and slower in another — that's completely normal.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Gross Motor", icon: "Physical", desc: "Big body movements — rolling, crawling, walking, running, jumping, climbing", examples: "Tummy time, riding toys, playground play, dancing", color: "#3a6ea5" },
                { title: "Fine Motor", icon: "Hands", desc: "Small precise movements — grasping, pinching, drawing, stacking, buttoning", examples: "Puzzles, crayons, play-doh, stickers, feeding self", color: "#5a8a3c" },
                { title: "Language & Communication", icon: "Words", desc: "Understanding and expressing — babbling, words, sentences, following directions", examples: "Reading together, narrating your day, singing songs", color: "#7a5a8a" },
                { title: "Social & Emotional", icon: "Heart", desc: "Feelings and relationships — bonding, sharing, empathy, self-regulation, play", examples: "Playdates, naming emotions, comfort routines, modeling", color: "#8a6a3a" },
              ].map(({ title, icon, desc, examples, color }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag color={color}>{icon}</Tag>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginTop: 6 }}>{title}</div>
                  <div style={{ fontSize: 11, color: palette.mid, marginTop: 4, lineHeight: 1.4 }}>{desc}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 6 }}>Try: {examples}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Tips & Activities */}
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
          <SectionCard number="13" title="Play Ideas by Age">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Play is how kids learn everything. You don't need fancy toys — you need time on the floor together.
            </div>
            {[
              { age: "0-6 months", ideas: "Tummy time, rattles, high-contrast cards, singing, face-to-face play" },
              { age: "6-12 months", ideas: "Peek-a-boo, stacking cups, board books, sensory bins (rice, water), clapping games" },
              { age: "1-2 years", ideas: "Shape sorters, push toys, crayons, sandbox play, simple pretend (feeding dolls)" },
              { age: "2-3 years", ideas: "Play-doh, tricycles, dress-up, finger painting, building with blocks" },
              { age: "3-5 years", ideas: "Board games, scavenger hunts, obstacle courses, craft projects, gardening together" },
            ].map(({ age, ideas }, i) => (
              <div
                key={age}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <strong style={{ color: palette.accent, fontSize: 11.5 }}>{age}:</strong>
                <span style={{ fontSize: 11.5, color: palette.mid, marginLeft: 4 }}>{ideas}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Language Boosters">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              You are your child's #1 language teacher. Here's how to help those words come:
            </div>
            <Bullet><strong>Narrate everything</strong> — "I'm putting on your shoes. Now let's zip up your jacket!"</Bullet>
            <Bullet><strong>Expand what they say</strong> — if they say "truck," you say "Yes, a big red truck!"</Bullet>
            <Bullet><strong>Read together daily</strong> — even just 10 minutes makes a massive difference</Bullet>
            <Bullet><strong>Ask open-ended questions</strong> — "What do you see?" instead of "Do you see the dog?"</Bullet>
            <Bullet><strong>Sing songs and nursery rhymes</strong> — rhythm helps with language patterns</Bullet>
            <Bullet><strong>Wait for them to try</strong> — pause after asking a question; don't rush to answer for them</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}><strong style={{ color: palette.accent }}>Limit screens:</strong> Real conversation teaches language 10x better than any app or video.</div>
            </div>
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="Sleep by Age">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Total sleep needed per 24 hours (including naps). Ranges from the AAP:
            </div>
            {[
              { age: "Newborn (0-3 mo)", hours: "14-17 hours", naps: "Multiple naps (no real schedule yet)" },
              { age: "Infant (4-12 mo)", hours: "12-16 hours", naps: "2-3 naps, dropping to 2" },
              { age: "Toddler (1-2 yrs)", hours: "11-14 hours", naps: "1-2 naps, dropping to 1" },
              { age: "Preschool (3-5 yrs)", hours: "10-13 hours", naps: "May drop nap entirely by 3-4" },
            ].map(({ age, hours, naps }, i) => (
              <div
                key={age}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ color: palette.dark, fontSize: 11.5 }}>{age}</strong>
                  <Tag color="#3a6ea5">{hours}</Tag>
                </div>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 2 }}>{naps}</div>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}><strong style={{ color: palette.accent }}>Bedtime tip:</strong> A consistent routine (bath, book, bed) works wonders. Same order, same time, every night.</div>
            </div>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Feeding Milestones">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              From milk to mac and cheese — the feeding journey has its own timeline:
            </div>
            <KV k="0-6 months" v="Breast milk or formula only; no solids needed yet" />
            <KV k="~6 months" v="Start purees or soft foods (baby-led weaning is fine too!); introduce allergens early" />
            <KV k="8-10 months" v="Soft finger foods — banana, avocado, well-cooked pasta; pincer grasp develops" />
            <KV k="12 months" v="Can switch to whole milk; try most family foods in small, soft pieces" />
            <KV k="18-24 months" v="Uses spoon and fork (messily!); drinks from an open cup; feeds self most meals" />
            <KV k="3-5 years" v="Mostly independent eater; picky phase is normal and usually temporary" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}><strong style={{ color: palette.accent }}>Relax about picky eating:</strong> It takes 10-15 exposures to a new food before many kids will try it. Keep offering without pressure.</div>
            </div>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Social & Emotional Growth">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Emotional development is just as important as walking and talking. Here's what to expect:
            </div>
            {[
              { stage: "0-12 months", skill: "Attachment & trust — bonds with caregivers, separation anxiety appears" },
              { stage: "1-2 years", skill: "Autonomy & testing — says 'no,' tantrums, wants to do everything themselves" },
              { stage: "2-3 years", skill: "Empathy emerges — notices others' feelings, starts parallel play with peers" },
              { stage: "3-4 years", skill: "Cooperation grows — takes turns, shares (sometimes), has real friendships" },
              { stage: "4-5 years", skill: "Self-regulation — starts managing frustration, follows rules, shows pride in achievements" },
            ].map(({ stage, skill }, i) => (
              <div
                key={stage}
                style={{
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <strong style={{ color: palette.accent, fontSize: 11.5 }}>{stage}:</strong>
                <span style={{ fontSize: 11.5, color: palette.mid, marginLeft: 4 }}>{skill}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Gross Motor Play Ideas">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Big body play builds strength, coordination, and confidence. Get moving together!
            </div>
            <Bullet><strong>Dance party</strong> — put on music and go wild; great for rainy days</Bullet>
            <Bullet><strong>Obstacle course</strong> — use pillows, chairs, and blankets at home</Bullet>
            <Bullet><strong>Ball play</strong> — kick, throw, roll, catch; adjust size for age</Bullet>
            <Bullet><strong>Playground time</strong> — slides, swings, and climbing build core strength</Bullet>
            <Bullet><strong>Nature walks</strong> — stepping over logs, balancing on curbs, collecting leaves</Bullet>
            <Bullet><strong>Wheelbarrow walks</strong> — hold their legs while they walk on hands (3+ years)</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}><strong style={{ color: palette.accent }}>Goal:</strong> At least 60 minutes of active play every day, broken up throughout the day.</div>
            </div>
          </SectionCard>

          {/* Section 19 */}
          <SectionCard number="19" title="Fine Motor Builders">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Tiny hand muscles need practice! These activities build the skills they'll need for writing, buttoning, and self-care:
            </div>
            <Bullet><strong>Play-doh / clay</strong> — squishing, rolling, pinching strengthens hand muscles</Bullet>
            <Bullet><strong>Coloring & drawing</strong> — chunky crayons for little hands, regular ones from age 3</Bullet>
            <Bullet><strong>Stickers</strong> — peeling and placing builds pincer grasp; kids love them</Bullet>
            <Bullet><strong>Puzzles</strong> — knob puzzles for 1-2 year olds, jigsaw for 3+</Bullet>
            <Bullet><strong>Threading & lacing</strong> — large beads at 2, smaller by 4</Bullet>
            <Bullet><strong>Pouring & scooping</strong> — water play, sand, rice bins build wrist control</Bullet>
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Common Worries (Usually Fine!)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              These are things parents stress about that are almost always perfectly normal:
            </div>
            <KV k="Late walker (15-18 months)" v="Normal range extends to 18 months. Scooters and crawlers often walk later." />
            <KV k="Picky eater" v="Extremely common from 18 months to 5 years. Keep offering variety without pressure." />
            <KV k="Tantrums" v="Peak between 18-36 months. They're a sign of normal emotional development, not bad parenting." />
            <KV k="Not sharing" v="True sharing doesn't develop until 3-4. Taking turns is the first step." />
            <KV k="Speech unclear to strangers" v="At 2, strangers understand about 50%. By 3, it jumps to 75%. By 4, nearly all." />
            <KV k="Imaginary friends" v="Common from age 2.5-5. Sign of creativity and healthy social development." />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}><strong style={{ color: palette.accent }}>Rule of thumb:</strong> Worry less about where they are today and more about whether they're making progress over time.</div>
            </div>
          </SectionCard>

          {/* Section 21 — Full Width */}
          <SectionCard number="21" title="Your Parenting Toolkit" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Quick strategies that work across all ages. Come back to these when things feel hard.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Name the Feeling", when: "During tantrums / big emotions", best: "\"You're feeling frustrated because you can't reach it. That's hard.\" Naming emotions teaches self-awareness.", color: "#3a6ea5" },
                { title: "Offer Two Choices", when: "Power struggles / getting dressed", best: "\"Do you want the red shirt or the blue shirt?\" Giving control within limits reduces battles.", color: "#5a8a3c" },
                { title: "Get on Their Level", when: "Giving instructions / connecting", best: "Kneel down, make eye contact, speak simply. Kids respond 10x better when you're at their height.", color: "#7a5a8a" },
                { title: "Routine is Magic", when: "Transitions / bedtime / mornings", best: "Predictable routines reduce anxiety and meltdowns. Same steps, same order, every time.", color: "#8a6a3a" },
              ].map(({ title, when, best, color }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag color={color}>Strategy</Tag>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginTop: 6 }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 5, lineHeight: 1.4 }}>{best}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Describe, Don't Label", when: "Praise / encouragement", best: "\"You stacked those so carefully!\" instead of \"Good job!\" Specific praise builds real confidence.", color: "#2a7a7a" },
                { title: "Wait & Watch", when: "Before jumping in to help", best: "Give them 10 seconds to try before helping. Struggle builds problem-solving. Say \"I'll help if you need me.\"", color: "#a53a3a" },
                { title: "Connect Before Correct", when: "After misbehavior", best: "First acknowledge their feelings, then set the boundary. \"I know you're angry, AND we don't hit.\"", color: "#c0582a" },
                { title: "Take Care of You", when: "Always", best: "You can't pour from an empty cup. Ask for help, take breaks, lower your standards on housework. You're doing great.", color: "#5a5a8a" },
              ].map(({ title, when, best, color }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag color={color}>Strategy</Tag>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginTop: 6 }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 5, lineHeight: 1.4 }}>{best}</div>
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
          Based on CDC & AAP developmental guidelines. Not a substitute for professional medical advice.
        </span>
      </div>
    </div>
  );
}
