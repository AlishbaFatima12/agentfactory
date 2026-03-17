---
name: voice-clone
description: >
  Generate voice-cloned audio using Chatterbox TTS on Modal. Use this skill whenever the user
  asks to generate audio, voiceover, narration, voice clone, TTS, text-to-speech, record a
  script, create audio for a video, make someone "say" something, or produce spoken content.
  Also trigger when a user provides a voice sample and wants to clone it, or when they want
  to convert written scripts/ideas into spoken audio files. Works for rough ideas (skill writes
  the script first) and finished scripts alike.
---

# Voice Clone — Chatterbox TTS on Modal

Generate high-quality voice-cloned audio from text using Chatterbox Turbo (350M params, MIT licensed) running on Modal's serverless GPUs. Supports multiple voices, paralinguistic tags, batch generation, and stitching segments into a single file.

**Language support**: English only (Turbo model). The Multilingual model exists but Urdu quality is poor (tested 2026-03-16). Stick to English for production use.

## Quick Reference

```
Project home:  ~/chatterbox-tts/
Modal script:  ~/chatterbox-tts/chatterbox_tts.py
Output dir:    ~/chatterbox-tts/output/
Volume name:   chatterbox-tts-voices
HF secret:     hf-token
GPU:           A10G (~$0.53/hr, billed per second)
```

## How It Works

1. **Text in → Audio out.** User gives text (or a rough idea). If it's an idea, you write a voiceover script first. Then Modal runs Chatterbox Turbo on a GPU, cloning the reference voice.
2. **Zero-shot cloning.** Any ~10-15s voice sample becomes a clonable voice. No training or fine-tuning.
3. **Paralinguistic tags.** Chatterbox Turbo supports `[laugh]`, `[chuckle]`, `[sigh]`, `[gasp]`, `[cough]` inline in text for natural-sounding speech.

## Setup Check (Run This First)

Before generating audio, verify the environment is ready. Run these checks in order — stop at the first failure and fix it.

```bash
# 1. Project exists?
ls ~/chatterbox-tts/chatterbox_tts.py 2>/dev/null || echo "NEEDS_SETUP"

# 2. Modal authenticated?
cat ~/.modal.toml 2>/dev/null | head -3 || echo "NEEDS_MODAL_AUTH"

# 3. uv available?
which uv || echo "NEEDS_UV"

# 4. ffmpeg available? (needed for voice conversion)
which ffmpeg || echo "NEEDS_FFMPEG"
```

If everything passes, skip to **Generating Audio**. If anything fails, run **Full Setup**.

## Full Setup (New System Only)

Run this sequence if the project doesn't exist yet. Each step depends on the previous one.

### Step 1: Create project and install modal

```bash
mkdir -p ~/chatterbox-tts && cd ~/chatterbox-tts
uv init --python 3.10
uv add modal
```

### Step 2: Authenticate Modal

```bash
cd ~/chatterbox-tts && uv run python -m modal setup
```

This opens a browser tab. The user needs to click through to authenticate. Check `~/.modal.toml` exists afterward.

### Step 3: Deploy the TTS script

Copy `scripts/chatterbox_tts.py` from this skill directory to `~/chatterbox-tts/chatterbox_tts.py`.

### Step 4: HuggingFace token

The chatterbox-tts library requires a HF token to download model weights (even though the model is public).

```bash
cd ~/chatterbox-tts && uv run modal secret list 2>&1 | grep hf-token
```

If the secret doesn't exist, ask the user for their HuggingFace token (free at huggingface.co/settings/tokens), then:

```bash
cd ~/chatterbox-tts && uv run modal secret create hf-token HF_TOKEN=hf_xxxxx
```

### Step 5: Create voice volume and upload a voice

```bash
cd ~/chatterbox-tts && uv run modal volume create chatterbox-tts-voices
```

Then convert and upload the user's voice sample (see **Adding a Voice** below).

### Step 6: Test run

```bash
cd ~/chatterbox-tts && uv run modal run chatterbox_tts.py --prompt "Hello, testing voice clone."
```

If audio saves to `/tmp/chatterbox-tts/output.wav`, setup is complete. Open it for playback.

## Adding a Voice

Any audio file (~10-15 seconds of clear speech) can be a voice. Convert to WAV and upload:

```bash
# Convert to mono WAV at 22050Hz (handles m4a, mp3, wav, ogg, etc.)
ffmpeg -y -i "/path/to/voice_sample.m4a" -ar 22050 -ac 1 ~/chatterbox-tts/<voice_name>.wav

# Upload to Modal volume
cd ~/chatterbox-tts && uv run modal volume put chatterbox-tts-voices <voice_name>.wav
```

Voice naming convention: lowercase, no spaces, descriptive. Examples: `junaid`, `sarah_narrator`, `deep_male`.

The default voice is `voice_prompt` (the first voice uploaded during setup).

### Listing available voices

```bash
cd ~/chatterbox-tts && uv run modal volume ls chatterbox-tts-voices
```

## Generating Audio

### From a finished script

Run directly:

```bash
cd ~/chatterbox-tts && uv run modal run chatterbox_tts.py \
  --prompt "Your text here. Can include [chuckle] paralinguistic tags." \
  --voice voice_prompt \
  --output-path ~/chatterbox-tts/output/my_audio.wav
```

Then open the file for playback: `open ~/chatterbox-tts/output/my_audio.wav`

### From a rough idea

When the user gives a rough idea instead of a script:

1. **Write the voiceover script first.** Draft it as natural spoken language — contractions, pauses, conversational tone. Add paralinguistic tags where they'd sound natural.
2. **Show the script to the user** for approval before generating.
3. **Generate the audio** using the approved script.

Script writing guidelines:

- Write for the ear, not the eye. Use short sentences.
- Avoid parenthetical asides — they sound awkward when spoken.
- Use `[chuckle]`, `[laugh]`, `[sigh]` sparingly (1-2 per paragraph max).
- Break long scripts into segments of ~2-4 sentences each for better quality.

### Batch generation (multiple segments)

For longer content, break the script into segments and generate each one separately. This produces better audio quality than one massive prompt.

1. Split the script into segments (2-4 sentences each, natural break points)
2. Generate each segment as a separate WAV file:

```bash
cd ~/chatterbox-tts

# Generate each segment
uv run modal run chatterbox_tts.py --prompt "Segment one text." --output-path ~/chatterbox-tts/output/seg_001.wav
uv run modal run chatterbox_tts.py --prompt "Segment two text." --output-path ~/chatterbox-tts/output/seg_002.wav
uv run modal run chatterbox_tts.py --prompt "Segment three text." --output-path ~/chatterbox-tts/output/seg_003.wav
```

3. Stitch into a single file with a small silence gap between segments:

```bash
# Create 0.5s silence for gaps
ffmpeg -y -f lavfi -i anullsrc=r=22050:cl=mono -t 0.5 ~/chatterbox-tts/output/silence.wav

# Build concat list
cd ~/chatterbox-tts/output
ls seg_*.wav | sort | while read f; do
  echo "file '$f'"
  echo "file 'silence.wav'"
done | head -n -1 > concat_list.txt

# Stitch
ffmpeg -y -f concat -safe 0 -i concat_list.txt -c copy ~/chatterbox-tts/output/final.wav
```

4. Open the final file: `open ~/chatterbox-tts/output/final.wav`

Run the segment generations in parallel (multiple background bash commands) when possible — Modal handles concurrency on the GPU side.

## Deploying as a Persistent API

For ongoing use without CLI:

```bash
cd ~/chatterbox-tts && uv run modal deploy chatterbox_tts.py
```

This gives a persistent URL like:
`https://<workspace>--chatterbox-tts-chatterbox-speak.modal.run`

Call it with: `POST /speak?prompt=Hello&voice=voice_prompt` → returns WAV stream.

The API stays active and scales to zero when idle (no cost). Redeploy after script changes.

## Troubleshooting

| Problem                   | Fix                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `LocalTokenNotFoundError` | HF token missing. Create Modal secret: `uv run modal secret create hf-token HF_TOKEN=hf_xxx`                   |
| `Volume not found`        | Create it: `uv run modal volume create chatterbox-tts-voices`                                                  |
| Audio sounds robotic      | Try a cleaner reference voice sample (less background noise)                                                   |
| Audio too fast/slow       | Chatterbox Turbo doesn't have speed controls — adjust by adding punctuation/pauses in text                     |
| Cold start slow (~30s)    | Normal for first request. Subsequent requests within 5 min are instant. Deploy for persistent warm containers. |
| `ffmpeg not found`        | Install: `brew install ffmpeg` (macOS) or `apt install ffmpeg` (Linux)                                         |

## Cost Reference

- **A10G GPU**: ~$0.53/hr, billed per second
- **Per generation**: ~1-3 seconds GPU time ≈ $0.0004
- **$5 credits**: ~12,000 generations
- **Idle**: scales to zero, no cost
