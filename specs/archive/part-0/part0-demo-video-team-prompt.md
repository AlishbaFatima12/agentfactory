# Part 0 Demo Video — Team Prompt

## How to use

Paste the prompt below into a Claude Code session.
Project: `output/part0-demo/` (Remotion video)

---

## The Prompt

```
Create an agent team to produce a production-grade 18-20 second demo video
for the Part 0 Exercise Submission feature.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the
Agent tool or spawn subagents.

## Current State

The video project is at output/part0-demo/ (Remotion, React 18, 30fps, 1920x1080).
Remotion Studio runs at http://localhost:3333.
Voice clone is set up at ~/chatterbox-tts/ using Modal (voice: junaid_sample).
The hook scene ("What if AI could grade your thinking?") is good — keep it.

## Problems with Current Version

1. Voice narration has no energy — flat, monotone, robotic
2. Visuals and voice are NOT synced — words don't match what's on screen
3. Scenes feel disconnected — no emotional arc
4. After the hook, it becomes a boring slideshow

## What the Product ACTUALLY Does (tested on production)

- Student fills fields in an inline AICheck card
- Clicks "ChatGPT" or "Claude" → opens new tab with pre-filled prompt
- Pastes back AI's evaluation
- Clicks Submit → "Exercise Submitted +50 XP" (NO score card bars)
- 41 exercises across 11 chapters, 50 XP each = 2,050 total XP

## Team Structure: 3-Phase Pipeline (4 Teammates)

You are the team lead. You coordinate. You do NOT write code yourself.

### Phase 1: Script Writer (BLOCKS everything else)

**Task: "Script — write timestamped narration script"**
Spawn a teammate named "scriptwriter". Use Opus model. Require plan approval.

Teammate prompt:

"You are the scriptwriter for the Part 0 demo video.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Write a compelling voiceover script with exact timestamps
that sync to a 6-scene video (18-20 seconds total).

READ IN ORDER:
1. output/part0-demo/src/Part0Demo.tsx (scene structure + timings)
2. output/part0-demo/src/scenes/HookScene.tsx (keep this scene's concept)
3. All other scene files to understand what each shows

DELIVERABLE — Write to output/part0-demo/SCRIPT.md:

1. The full narration script (spoken text only, natural conversational tone)
2. Per-scene breakdown with:
   - Scene name and frame range
   - Exact words spoken during that scene
   - Key visual moments that words must sync to
   - Emotional beat (tension, reveal, celebration, etc.)
3. Voice direction notes (where to emphasize, pause, speed up)
4. Total word count (aim for 40-60 words for 18-20s at natural pace)

SCRIPT RULES:
- Start with the hook question (keep 'What if AI could grade your thinking?')
- Every sentence must match what's visually happening on screen
- Short punchy sentences — this is spoken, not written
- Build emotional arc: curiosity → action → reward → invitation
- End with a clear call to action
- Include [pause] markers where silence adds impact

When finished, message the team lead: 'SCRIPTWRITER DONE'

Execute autonomously without asking for confirmation."

### Phase 2: Scene Engineer (depends on Phase 1)

**Task: "Scenes — sync visuals to script timestamps"**
Spawn a teammate named "scene-engineer". Use Opus model.

Teammate prompt:

"You are the scene engineer for the Part 0 demo video.
You are part of an agent team — communicate via messages to the team lead.

Use the /frontend-design skill for premium motion design.

YOUR TASK: Rewrite all scene files so visual moments sync exactly to
the script's timestamps. Each word in the script must land when the
matching visual element appears.

READ IN ORDER:
1. output/part0-demo/SCRIPT.md (scriptwriter's timestamped script)
2. output/part0-demo/src/Part0Demo.tsx (composition structure)
3. output/part0-demo/src/styles.ts (brand tokens)
4. All scene files in output/part0-demo/src/scenes/

YOUR DELIVERABLES:

1. Update output/part0-demo/src/Part0Demo.tsx:
   - Adjust scene from/dur values to match script timestamps exactly
   - Scene overlaps should be 15 frames for crossfades
   - Total duration = ceil(voiceover_duration * 30) + 30 (buffer)

2. Update each scene file to sync animations to script beats:
   - Text reveals must land when the narrator says those words
   - Button clicks must happen when narrator says 'click' or 'submit'
   - XP celebration must land when narrator says 'fifty XP' or 'earned'
   - Each scene must have exit animation (fade + scale in last 20 frames)

3. Scene 5 (ScoreCardScene/Payoff) MUST show:
   - Green checkmark with spring animation
   - 'Exercise Submitted' text
   - '+50 XP' badge with glow pop
   - NO animated score bars (they don't exist in production)
   - Celebration particles or rings for visual impact

4. Verify in browser: Start Remotion Studio (npm run dev in output/part0-demo/)
   and check each scene visually at http://localhost:3333

CRITICAL RULES:
- Use Remotion's spring() and interpolate() for all animations
- Use the brand colors from styles.ts
- Card widths: 1200px minimum
- Text must be BIG (hero: 110px, h1: 80px, body: 32px)
- React 18 (not 19) — no React 19 features
- Every scene needs exit animation in last 20 frames

When finished, message the team lead: 'SCENE-ENGINEER DONE'

Execute autonomously without asking for confirmation."

### Phase 3A: Voice Generator (depends on Phase 1)

**Task: "Voice — generate cloned voiceover from script"**
Spawn a teammate named "voice-gen". Use Opus model.

Teammate prompt:

"You are the voice generator for the Part 0 demo video.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Generate voice-cloned narration using Chatterbox TTS on Modal,
split into segments for better quality, then stitch into one file.

READ:
1. output/part0-demo/SCRIPT.md (the approved script)

SETUP (already done — just verify):
- Project: ~/chatterbox-tts/
- Voice: junaid_sample (already uploaded to Modal volume)
- Command: cd ~/chatterbox-tts && uv run modal run chatterbox_tts.py --prompt 'text' --voice junaid_sample --output-path ~/chatterbox-tts/output/seg_001.wav

YOUR DELIVERABLES:

1. Split script into 3-4 segments at natural pause points
2. Generate each segment separately for better quality:
   cd ~/chatterbox-tts
   uv run modal run chatterbox_tts.py --prompt 'Segment 1 text' --voice junaid_sample --output-path ~/chatterbox-tts/output/seg_001.wav
   uv run modal run chatterbox_tts.py --prompt 'Segment 2 text' --voice junaid_sample --output-path ~/chatterbox-tts/output/seg_002.wav
   (etc.)

3. Stitch segments with 0.3s silence gaps:
   ffmpeg -y -f lavfi -i anullsrc=r=22050:cl=mono -t 0.3 ~/chatterbox-tts/output/silence.wav
   # Build concat list and stitch with ffmpeg -f concat

4. Copy final file to: output/part0-demo/public/audio/voiceover.wav
5. Report the exact duration in seconds

VOICE DIRECTION (from script):
- Energetic but not hyperactive
- Emphasize key words (thinking, AI, XP)
- Natural pauses between segments — don't rush
- Add [chuckle] or [pause] tags if the script calls for them

When finished, message the team lead with duration: 'VOICE-GEN DONE — [duration]s'

Execute autonomously without asking for confirmation."

### Phase 3B: Audio Sync (depends on Phase 2 AND Phase 3A)

**Task: "Sync — final audio-visual alignment"**
Spawn a teammate named "sync-engineer". Use Opus model.

Teammate prompt:

"You are the sync engineer for the Part 0 demo video.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Align the voiceover timing with scene transitions so words
match visuals exactly. Then verify the complete video in browser.

READ:
1. output/part0-demo/SCRIPT.md (timestamps)
2. output/part0-demo/src/Part0Demo.tsx (scene structure)
3. Check voiceover duration: ffprobe -v error -show_entries format=duration output/part0-demo/public/audio/voiceover.wav

YOUR DELIVERABLES:

1. Adjust Part0Demo.tsx:
   - Set TOTAL_DURATION = ceil(voiceover_seconds * 30) + 45 (1.5s tail)
   - Adjust Audio Sequence 'from' offset so narration starts at right moment
   - Fine-tune scene from/dur to align with voice beats

2. Verify in browser at http://localhost:3333:
   - Play the full video
   - Check that words match visuals at each scene transition
   - Check that '+50 XP' celebration syncs with narrator saying it
   - Check that CTA text appears when narrator says 'start free'

3. If timing is off, adjust scene durations and re-check
4. When satisfied, report: ready for render

When finished, message the team lead: 'SYNC DONE — ready for render'

Execute autonomously without asking for confirmation."

## Team Lead Coordination Rules

1. Create the team using TeamCreate
2. Create ALL tasks upfront with dependencies:
   - Phase 1 (scriptwriter): no dependencies
   - Phase 2 (scene-engineer): depends on Phase 1
   - Phase 3A (voice-gen): depends on Phase 1 (parallel with Phase 2)
   - Phase 3B (sync-engineer): depends on Phase 2 AND Phase 3A
3. Spawn scriptwriter FIRST. Review and approve plan (the script).
4. After script approved, spawn scene-engineer AND voice-gen simultaneously.
5. After BOTH complete, spawn sync-engineer.
6. After sync-engineer done, do final verification:
   a. Play the video at http://localhost:3333
   b. Check voice-visual sync at each transition
   c. Verify total duration is 18-22 seconds
   d. If satisfied, render: cd output/part0-demo && npx remotion render Part0Demo out/part0-demo.mp4
   e. Open the MP4: open output/part0-demo/out/part0-demo.mp4
7. Report the final MP4 path to the user

## Model Preferences

- Script Writer: Opus (creative writing, emotional arc)
- Scene Engineer: Opus (complex React, Remotion, premium design)
- Voice Generator: Opus (Modal CLI, ffmpeg, audio engineering)
- Sync Engineer: Opus (timing precision, browser verification)

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM
- Do NOT write code yourself — delegate everything to teammates
- Do NOT spawn Phase 3B before BOTH Phase 2 and 3A complete
- Do NOT skip browser verification after sync
- Do NOT render before sync engineer confirms ready
- Do NOT keep the old flat voiceover — regenerate with segments
```
