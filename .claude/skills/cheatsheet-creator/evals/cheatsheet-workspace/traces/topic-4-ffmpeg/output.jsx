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
        width: 140,
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

export default function FFmpegCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Commands", "Page 2: Advanced Workflows"];

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
          FFmpeg{" "}
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
          Convert · Encode · Stream · Filter · Extract — 2026 Edition
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

      {/* Page 1: Core Commands */}
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
          <SectionCard number="1" title="Core Anatomy">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every ffmpeg command follows this structure:
            </div>
            <Code>{`ffmpeg [global] [input opts] -i input \\
       [output opts] output`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>-i</strong> specifies input file (can repeat for multiple inputs)</Bullet>
              <Bullet><strong>Order matters</strong> — flags before <code>-i</code> apply to input, after apply to output</Bullet>
              <Bullet><strong>-y</strong> overwrite output without asking, <strong>-n</strong> never overwrite</Bullet>
              <Bullet>Use <strong>-hide_banner</strong> to suppress startup info clutter</Bullet>
              <Bullet>Pipe from stdin: <code>ffmpeg -i pipe:0</code> or to stdout: <code>-f mp4 pipe:1</code></Bullet>
            </div>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="Format Conversion">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              FFmpeg auto-detects formats from extensions. Just change the extension to convert:
            </div>
            <Code>{`# Basic conversion (re-encodes)
ffmpeg -i input.avi output.mp4

# Copy streams without re-encoding
ffmpeg -i input.mkv -c copy output.mp4

# Force output format explicitly
ffmpeg -i input.webm -f mp4 output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="-c copy" v="Stream copy — no re-encoding, instant" />
              <KV k="-c:v copy" v="Copy only the video stream" />
              <KV k="-c:a copy" v="Copy only the audio stream" />
              <KV k="-f fmt" v="Force output container format" />
            </div>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="Video Codecs">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>H.264</Tag>
              <Tag color="#5a8a3c">H.265</Tag>
              <Tag color="#3a6ea5">VP9</Tag>
              <Tag color="#7a5a8a">AV1</Tag>
            </div>
            <Code>{`# H.264 (most compatible)
ffmpeg -i in.mov -c:v libx264 -crf 23 out.mp4

# H.265/HEVC (50% smaller, slower)
ffmpeg -i in.mov -c:v libx265 -crf 28 out.mp4

# VP9 (royalty-free, web)
ffmpeg -i in.mov -c:v libvpx-vp9 -crf 30 out.webm

# AV1 (best compression, slowest)
ffmpeg -i in.mov -c:v libsvtav1 -crf 35 out.mp4`}</Code>
            <Bullet><strong>libx264</strong> — best compatibility, fast encoding</Bullet>
            <Bullet><strong>libx265</strong> — 50% smaller files at same quality</Bullet>
            <Bullet><strong>libsvtav1</strong> — modern, royalty-free, best quality per bit</Bullet>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="Audio Codecs">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">AAC</Tag>
              <Tag color="#3a6ea5">MP3</Tag>
              <Tag color="#2a7a7a">FLAC</Tag>
              <Tag color="#7a5a8a">Opus</Tag>
            </div>
            <Code>{`# AAC (best for MP4)
ffmpeg -i in.wav -c:a aac -b:a 192k out.m4a

# MP3 (universal playback)
ffmpeg -i in.wav -c:a libmp3lame -q:a 2 out.mp3

# FLAC (lossless)
ffmpeg -i in.wav -c:a flac out.flac

# Opus (best lossy at low bitrate)
ffmpeg -i in.wav -c:a libopus -b:a 128k out.ogg`}</Code>
            <Bullet><strong>-b:a 192k</strong> — constant bitrate for audio</Bullet>
            <Bullet><strong>-q:a 2</strong> — VBR quality (0=best, 9=worst for LAME)</Bullet>
            <Bullet><strong>-ar 44100</strong> — set sample rate to 44.1kHz</Bullet>
            <Bullet><strong>-ac 2</strong> — force stereo (1 = mono)</Bullet>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="Quality Control (CRF)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              CRF = Constant Rate Factor. Lower = better quality, bigger file.
            </div>
            <RefRow cmd="CRF 0" desc="Lossless (huge files)" />
            <RefRow cmd="CRF 17-18" desc="Visually lossless (recommended for archival)" />
            <RefRow cmd="CRF 23" desc="Default H.264 — good balance" />
            <RefRow cmd="CRF 28" desc="Default H.265 — equivalent to H.264 CRF 23" />
            <RefRow cmd="CRF 30-35" desc="Noticeable quality loss, small files" />
            <RefRow cmd="CRF 51" desc="Worst quality (tiny files)" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                Rule of thumb: CRF +6 roughly halves the file size
              </div>
            </div>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="Encoding Presets & Speed">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Presets trade encoding speed for compression efficiency (same quality, smaller file):
            </div>
            {[
              { preset: "ultrafast", note: "10x faster, ~2x larger file" },
              { preset: "superfast", note: "Much faster, larger file" },
              { preset: "veryfast", note: "Fast, slightly larger" },
              { preset: "medium", note: "Default — balanced" },
              { preset: "slow", note: "Better compression, 40% slower" },
              { preset: "veryslow", note: "Best compression, 2-3x slower" },
            ].map(({ preset, note }, i) => (
              <div
                key={preset}
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
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    color: palette.accent,
                    fontSize: 11,
                    width: 90,
                    flexShrink: 0,
                  }}
                >
                  {preset}
                </code>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{note}</span>
              </div>
            ))}
            <Code>{`ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 22 out.mp4`}</Code>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="Extract Audio from Video">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Rip audio tracks from any video file:
            </div>
            <Code>{`# Copy original audio (no re-encode)
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Extract as MP3
ffmpeg -i video.mp4 -vn -q:a 2 audio.mp3

# Extract as WAV (uncompressed)
ffmpeg -i video.mp4 -vn audio.wav

# Extract specific audio track
ffmpeg -i video.mkv -map 0:a:1 -c copy track2.m4a`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="-vn" v="Disable video (audio only)" />
              <KV k="-an" v="Disable audio (video only)" />
              <KV k="-map 0:a:1" v="Select 2nd audio stream (0-indexed)" />
            </div>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="Extract Images & Frames">
            <Code>{`# Single screenshot at timestamp
ffmpeg -i video.mp4 -ss 00:01:30 -frames:v 1 thumb.png

# Extract one frame per second
ffmpeg -i video.mp4 -vf "fps=1" frame_%04d.png

# Extract ALL frames (caution: huge output)
ffmpeg -i video.mp4 frame_%06d.png

# Thumbnail sheet (4x4 grid)
ffmpeg -i video.mp4 -vf "select=not(mod(n\\,100)),\\
scale=320:-1,tile=4x4" -frames:v 1 sheet.png`}</Code>
            <Bullet><strong>-ss</strong> before <code>-i</code> is faster (keyframe seeking)</Bullet>
            <Bullet><strong>-ss</strong> after <code>-i</code> is more accurate (decode seeking)</Bullet>
            <Bullet><strong>%04d</strong> creates zero-padded sequential filenames</Bullet>
            <Bullet><strong>fps=1</strong> outputs 1 frame per second of video</Bullet>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="Trim & Cut">
            <Code>{`# Cut from 1:30 to 3:45
ffmpeg -i in.mp4 -ss 00:01:30 -to 00:03:45 \\
       -c copy out.mp4

# Cut 30 seconds starting at 1:00
ffmpeg -i in.mp4 -ss 00:01:00 -t 30 -c copy out.mp4

# Remove first 10 seconds
ffmpeg -i in.mp4 -ss 10 -c copy out.mp4

# Last 60 seconds (seek from end)
ffmpeg -sseof -60 -i in.mp4 -c copy out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="-ss HH:MM:SS" v="Start time (also accepts seconds)" />
              <KV k="-to HH:MM:SS" v="End time (absolute position)" />
              <KV k="-t duration" v="Duration from start point (seconds)" />
              <KV k="-sseof -N" v="Seek N seconds from end of file" />
            </div>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="Scaling & Resolution">
            <Code>{`# Scale to 1280x720
ffmpeg -i in.mp4 -vf "scale=1280:720" out.mp4

# Scale width to 1280, auto height
ffmpeg -i in.mp4 -vf "scale=1280:-1" out.mp4

# Auto-height, divisible by 2
ffmpeg -i in.mp4 -vf "scale=1280:-2" out.mp4

# Fit inside 1920x1080 box (keep ratio)
ffmpeg -i in.mp4 -vf "scale=1920:1080:\\
force_original_aspect_ratio=decrease" out.mp4`}</Code>
            <Bullet><strong>-1</strong> auto-calculates to keep aspect ratio</Bullet>
            <Bullet><strong>-2</strong> same as -1 but ensures result is divisible by 2 (required by most codecs)</Bullet>
            <Bullet>Add <strong>pad</strong> filter for letterboxing: <code>pad=1920:1080:(ow-iw)/2:(oh-ih)/2</code></Bullet>
            <Bullet><strong>-s 1920x1080</strong> shortcut works but <code>scale</code> filter is more flexible</Bullet>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="Common Flags Quick Ref">
            <RefRow cmd="-i file" desc="Input file (repeatable)" />
            <RefRow cmd="-c:v codec" desc="Set video codec" />
            <RefRow cmd="-c:a codec" desc="Set audio codec" />
            <RefRow cmd="-c copy" desc="Copy all streams (no re-encode)" />
            <RefRow cmd="-b:v 5M" desc="Video bitrate (5 Mbps)" />
            <RefRow cmd="-b:a 192k" desc="Audio bitrate (192 kbps)" />
            <RefRow cmd="-r 30" desc="Set output frame rate" />
            <RefRow cmd="-vf filter" desc="Apply video filter graph" />
            <RefRow cmd="-af filter" desc="Apply audio filter graph" />
            <RefRow cmd="-map 0:v" desc="Select video streams from input 0" />
            <RefRow cmd="-threads 4" desc="Limit CPU threads used" />
            <RefRow cmd="-loglevel quiet" desc="Suppress all output" />
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="ffprobe — Inspect Files">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Analyze media files before processing:
            </div>
            <Code>{`# Quick file info
ffprobe -hide_banner input.mp4

# JSON output for scripting
ffprobe -v quiet -print_format json \\
  -show_streams -show_format input.mp4

# Show only video stream info
ffprobe -v error -select_streams v:0 \\
  -show_entries stream=codec_name,width,height,\\
  duration,bit_rate input.mp4

# Get duration in seconds
ffprobe -v error -show_entries format=duration \\
  -of default=nw=1:nk=1 input.mp4`}</Code>
            <Bullet><strong>-show_streams</strong> lists all audio/video/subtitle streams</Bullet>
            <Bullet><strong>-show_format</strong> shows container-level metadata</Bullet>
            <Bullet><strong>-select_streams v:0</strong> targets first video stream only</Bullet>
            <Bullet><strong>ffprobe</strong> ships with ffmpeg — no extra install needed</Bullet>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced Workflows */}
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
          <SectionCard number="13" title="Concatenation & Merging">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Join multiple video/audio files into one:
            </div>
            <Code>{`# Method 1: File list (same codec)
# Create list.txt:
# file 'part1.mp4'
# file 'part2.mp4'
ffmpeg -f concat -safe 0 -i list.txt \\
       -c copy output.mp4

# Method 2: concat filter (different formats)
ffmpeg -i part1.mp4 -i part2.webm \\
  -filter_complex "[0:v][0:a][1:v][1:a]\\
  concat=n=2:v=1:a=1[v][a]" \\
  -map "[v]" -map "[a]" output.mp4`}</Code>
            <Bullet><strong>concat demuxer</strong> (Method 1) — fast, no re-encode, same codec required</Bullet>
            <Bullet><strong>concat filter</strong> (Method 2) — handles different formats, re-encodes</Bullet>
            <Bullet><strong>-safe 0</strong> allows absolute paths in the file list</Bullet>
            <Bullet><strong>n=2</strong> in concat filter = number of segments to join</Bullet>
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Video Filters">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Apply with <code>-vf</code> (single) or <code>-filter_complex</code> (multi-input):
            </div>
            <RefRow cmd="crop=w:h:x:y" desc="Crop to width x height at position" />
            <RefRow cmd="transpose=1" desc="Rotate 90 clockwise (2=counter)" />
            <RefRow cmd="hflip / vflip" desc="Mirror horizontally or vertically" />
            <RefRow cmd="colorbalance" desc="Adjust color channels (r/g/b shadows/mids/highs)" />
            <RefRow cmd="eq=brightness=0.1" desc="Adjust brightness, contrast, saturation" />
            <RefRow cmd="unsharp=5:5:1" desc="Sharpen with matrix 5x5, strength 1.0" />
            <RefRow cmd="hqdn3d" desc="High-quality 3D denoiser" />
            <RefRow cmd="yadif" desc="Deinterlace (yet another deinterlacing filter)" />
            <Code>{`# Chain filters with commas
ffmpeg -i in.mp4 -vf "crop=640:480:10:10,\\
  scale=1280:-2,eq=brightness=0.05" out.mp4`}</Code>
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="Audio Filters">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Apply with <code>-af</code> for audio processing:
            </div>
            <RefRow cmd="volume=1.5" desc="Increase volume by 50%" />
            <RefRow cmd="volume=0.5" desc="Decrease volume by 50%" />
            <RefRow cmd="loudnorm" desc="EBU R128 loudness normalization" />
            <RefRow cmd="dynaudnorm" desc="Dynamic audio normalization" />
            <RefRow cmd="atempo=2.0" desc="Double playback speed (0.5-100)" />
            <RefRow cmd="aecho=0.8:0.9:1000:0.3" desc="Add echo effect" />
            <RefRow cmd="highpass=f=200" desc="Remove frequencies below 200Hz" />
            <RefRow cmd="lowpass=f=3000" desc="Remove frequencies above 3kHz" />
            <Code>{`# Normalize and boost volume
ffmpeg -i in.mp4 -af "loudnorm,volume=1.2" out.mp4`}</Code>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Subtitles">
            <Code>{`# Burn subtitles into video (hardcode)
ffmpeg -i video.mp4 -vf "subtitles=subs.srt" out.mp4

# Add soft subtitles (toggleable)
ffmpeg -i video.mp4 -i subs.srt \\
  -c copy -c:s mov_text out.mp4

# Extract subtitles from MKV
ffmpeg -i video.mkv -map 0:s:0 subs.srt

# Burn ASS subtitles (preserves styling)
ffmpeg -i video.mp4 -vf "ass=styled.ass" out.mp4`}</Code>
            <Bullet><strong>mov_text</strong> — subtitle codec for MP4 containers</Bullet>
            <Bullet><strong>srt</strong> — subtitle codec for MKV containers (use <code>-c:s srt</code>)</Bullet>
            <Bullet><strong>-map 0:s:0</strong> selects the first subtitle stream</Bullet>
            <Bullet>For <strong>subtitles</strong> filter, install ffmpeg with <code>--enable-libass</code></Bullet>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="GIF Creation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Two-pass method for high-quality GIFs:
            </div>
            <Code>{`# Simple (low quality)
ffmpeg -i video.mp4 -vf "fps=10,scale=480:-1" \\
  output.gif

# High quality (two-pass with palette)
ffmpeg -i video.mp4 -vf "fps=15,scale=480:-1:\\
  flags=lanczos,palettegen" palette.png

ffmpeg -i video.mp4 -i palette.png \\
  -filter_complex "fps=15,scale=480:-1:\\
  flags=lanczos[x];[x][1:v]paletteuse" out.gif`}</Code>
            <Bullet><strong>palettegen</strong> creates an optimal 256-color palette</Bullet>
            <Bullet><strong>paletteuse</strong> applies that palette for better colors</Bullet>
            <Bullet><strong>fps=15</strong> — lower fps = smaller file (10-15 is typical)</Bullet>
            <Bullet><strong>lanczos</strong> — high quality scaling algorithm for downscaling</Bullet>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Speed Manipulation">
            <Code>{`# 2x speed video
ffmpeg -i in.mp4 -vf "setpts=0.5*PTS" \\
  -af "atempo=2.0" fast.mp4

# 0.5x slow motion
ffmpeg -i in.mp4 -vf "setpts=2.0*PTS" \\
  -af "atempo=0.5" slow.mp4

# 4x speed (chain atempo for >2x)
ffmpeg -i in.mp4 -vf "setpts=0.25*PTS" \\
  -af "atempo=2.0,atempo=2.0" fast4x.mp4

# Timelapse from frames
ffmpeg -r 30 -i frame_%04d.png -c:v libx264 \\
  -pix_fmt yuv420p timelapse.mp4`}</Code>
            <Bullet><strong>setpts=0.5*PTS</strong> halves video timestamps (2x faster)</Bullet>
            <Bullet><strong>atempo</strong> range is 0.5-100.0 — chain for extreme speeds</Bullet>
            <Bullet>Drop <code>-af</code> entirely for silent speed changes</Bullet>
            <Bullet><strong>-pix_fmt yuv420p</strong> ensures broad player compatibility</Bullet>
          </SectionCard>

          {/* Section 19 */}
          <SectionCard number="19" title="Streaming (HLS & RTMP)">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">HLS</Tag>
              <Tag color="#7a5a8a">RTMP</Tag>
              <Tag color="#2a7a7a">DASH</Tag>
            </div>
            <Code>{`# Create HLS stream segments
ffmpeg -i in.mp4 -c:v libx264 -c:a aac \\
  -hls_time 4 -hls_list_size 0 \\
  -hls_segment_filename "seg_%03d.ts" \\
  stream.m3u8

# Stream to RTMP server
ffmpeg -re -i in.mp4 -c copy -f flv \\
  rtmp://server/live/stream_key

# Stream webcam to RTMP
ffmpeg -f avfoundation -i "0:0" \\
  -c:v libx264 -preset veryfast \\
  -f flv rtmp://server/live/key`}</Code>
            <Bullet><strong>-re</strong> reads input at native frame rate (for live streaming)</Bullet>
            <Bullet><strong>-hls_time 4</strong> creates 4-second segments</Bullet>
            <Bullet><strong>-hls_list_size 0</strong> keeps all segments in the playlist</Bullet>
            <Bullet>Use <strong>avfoundation</strong> on macOS, <strong>v4l2</strong> on Linux for webcam</Bullet>
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Hardware Acceleration">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">NVIDIA</Tag>
              <Tag color="#3a6ea5">macOS</Tag>
              <Tag color="#8a6a3a">Intel</Tag>
              <Tag color="#a53a3a">AMD</Tag>
            </div>
            <Code>{`# NVIDIA NVENC (GPU encoding)
ffmpeg -i in.mp4 -c:v h264_nvenc -preset p4 \\
  -cq 23 out.mp4

# macOS VideoToolbox
ffmpeg -i in.mp4 -c:v h264_videotoolbox \\
  -b:v 5M out.mp4

# Intel QSV
ffmpeg -i in.mp4 -c:v h264_qsv -preset medium \\
  -global_quality 23 out.mp4

# VAAPI (Linux AMD/Intel)
ffmpeg -vaapi_device /dev/dri/renderD128 \\
  -i in.mp4 -vf "format=nv12,hwupload" \\
  -c:v h264_vaapi out.mp4`}</Code>
            <Bullet>HW encoders are <strong>5-10x faster</strong> but slightly lower quality per bit</Bullet>
            <Bullet>Check available encoders: <code>ffmpeg -encoders | grep nvenc</code></Bullet>
          </SectionCard>

          {/* Section 21 */}
          <SectionCard number="21" title="Batch Processing">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Process multiple files with shell loops:
            </div>
            <Code>{`# Convert all AVI files to MP4 (Bash)
for f in *.avi; do
  ffmpeg -i "$f" -c:v libx264 -crf 23 \\
    "\${f%.avi}.mp4"
done

# Parallel batch with GNU parallel
parallel ffmpeg -i {} -c:v libx264 -crf 23 \\
  {.}.mp4 ::: *.avi

# PowerShell batch
Get-ChildItem *.avi | ForEach-Object {
  ffmpeg -i $_.Name -c:v libx264 "$($_.BaseName).mp4"
}`}</Code>
            <Bullet><strong>\${f%.avi}</strong> strips the .avi extension in Bash</Bullet>
            <Bullet><strong>GNU parallel</strong> uses all CPU cores for faster batch jobs</Bullet>
            <Bullet>Add <strong>-n</strong> flag to skip files that already exist</Bullet>
            <Bullet>Use <strong>-loglevel error</strong> for cleaner batch output</Bullet>
          </SectionCard>

          {/* Section 22 */}
          <SectionCard number="22" title="Watermarks & Overlays">
            <Code>{`# Add logo to corner
ffmpeg -i video.mp4 -i logo.png \\
  -filter_complex "overlay=W-w-10:H-h-10" \\
  out.mp4

# Semi-transparent watermark
ffmpeg -i video.mp4 -i logo.png \\
  -filter_complex "[1:v]format=rgba,\\
  colorchannelmixer=aa=0.3[logo];\\
  [0:v][logo]overlay=10:10" out.mp4

# Picture-in-picture
ffmpeg -i main.mp4 -i pip.mp4 \\
  -filter_complex "[1:v]scale=320:-1[pip];\\
  [0:v][pip]overlay=W-w-10:10" out.mp4`}</Code>
            <Bullet><strong>overlay=W-w-10:H-h-10</strong> positions at bottom-right with 10px margin</Bullet>
            <Bullet><strong>W/H</strong> = main video dimensions, <strong>w/h</strong> = overlay dimensions</Bullet>
            <Bullet><strong>colorchannelmixer=aa=0.3</strong> sets 30% opacity</Bullet>
            <Bullet>Overlay coordinates: <strong>0:0</strong> = top-left, <strong>W-w:0</strong> = top-right</Bullet>
          </SectionCard>

          {/* Section 23 */}
          <SectionCard number="23" title="Metadata & Chapters">
            <Code>{`# Set metadata tags
ffmpeg -i in.mp4 -c copy \\
  -metadata title="My Video" \\
  -metadata artist="Author" \\
  -metadata year="2026" out.mp4

# Strip all metadata
ffmpeg -i in.mp4 -c copy \\
  -map_metadata -1 out.mp4

# Copy metadata from another file
ffmpeg -i video.mp4 -i metadata.mp4 \\
  -map 0 -map_metadata 1 -c copy out.mp4`}</Code>
            <Bullet><strong>-metadata key=value</strong> sets individual tags</Bullet>
            <Bullet><strong>-map_metadata -1</strong> removes all metadata (privacy)</Bullet>
            <Bullet>Chapter markers live in the container — use <code>-map_chapters 0</code> to copy</Bullet>
            <Bullet>View existing metadata: <code>ffprobe -show_entries format_tags input.mp4</code></Bullet>
          </SectionCard>

          {/* Section 24 */}
          <SectionCard number="24" title="When to Use Which Codec" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "H.264 (libx264)",
                  when: "Maximum Compatibility",
                  best: "Web uploads, social media, client delivery. Plays everywhere — phones, TVs, browsers.",
                  color: palette.accent,
                },
                {
                  title: "H.265 (libx265)",
                  when: "Archival & Storage",
                  best: "Large video libraries, 4K content. 50% smaller files than H.264 at same quality.",
                  color: "#5a8a3c",
                },
                {
                  title: "VP9 / AV1",
                  when: "Web & Streaming",
                  best: "YouTube, web apps, royalty-free needs. AV1 has best compression but slow encoding.",
                  color: "#3a6ea5",
                },
                {
                  title: "ProRes / DNxHR",
                  when: "Editing & Post",
                  best: "NLE timelines (Premiere, DaVinci). Large files but fast seeking and editing.",
                  color: "#7a5a8a",
                },
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
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: palette.dark,
                      marginBottom: 2,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: color,
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {when}
                  </div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>
                    {best}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10 }}>
              <Bullet><strong>Quick rule:</strong> Use H.264 unless you have a specific reason not to — it just works</Bullet>
              <Bullet><strong>File size priority:</strong> H.265 or AV1 for smallest files at same quality</Bullet>
              <Bullet><strong>Encoding speed priority:</strong> H.264 with <code>-preset veryfast</code> or hardware encoder</Bullet>
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
        FFmpeg Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on FFmpeg 7.x · Verify flags with ffmpeg -h full
        </span>
      </div>
    </div>
  );
}
