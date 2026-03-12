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
  const pages = ["Page 1: Essentials", "Page 2: Advanced"];

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
          Convert · Trim · Encode · Filter · Merge — 2026 Edition
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

      {/* Page 1: Essentials */}
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
          {/* 1 - Core Syntax */}
          <SectionCard number="1" title="Core Syntax">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every FFmpeg command follows the same structure.
            </div>
            <Code>{`ffmpeg [global] [input opts] -i input \\
  [output opts] output`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="-i" desc="Input file (can specify multiple)" />
              <RefRow cmd="-y" desc="Overwrite output without asking" />
              <RefRow cmd="-n" desc="Never overwrite output" />
              <RefRow cmd="-hide_banner" desc="Suppress version/config info" />
              <RefRow cmd="-v quiet" desc="Silence all log output" />
            </div>
          </SectionCard>

          {/* 2 - Format Conversion */}
          <SectionCard number="2" title="Format Conversion">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">MP4</Tag><Tag color="#5a8a3c">MKV</Tag><Tag color="#7a5a8a">WebM</Tag><Tag color="#8a6a3a">MOV</Tag>
            </div>
            <Code>{`# Re-encode to MP4 (H.264 + AAC)
ffmpeg -i input.mkv -c:v libx264 \\
  -c:a aac output.mp4

# Remux without re-encoding (fast)
ffmpeg -i input.mkv -c copy output.mp4

# Convert to WebM (VP9 + Opus)
ffmpeg -i input.mp4 -c:v libvpx-vp9 \\
  -crf 30 -b:v 0 -c:a libopus output.webm`}</Code>
            <Bullet><code>-c copy</code> remuxes instantly — no quality loss</Bullet>
            <Bullet>Remux only works if codecs are container-compatible</Bullet>
          </SectionCard>

          {/* 3 - Trimming & Cutting */}
          <SectionCard number="3" title="Trimming & Cutting">
            <Code>{`# Cut from 1:30 to 2:45 (no re-encode)
ffmpeg -ss 00:01:30 -i input.mp4 \\
  -to 00:02:45 -c copy output.mp4

# Cut 30 seconds starting at 0:10
ffmpeg -ss 00:00:10 -i input.mp4 \\
  -t 30 -c copy output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="-ss" v="Seek to start position" />
              <KV k="-to" v="Stop at this timestamp" />
              <KV k="-t" v="Duration from start position" />
              <KV k="-ss before -i" v="Input seeking (fast, seeks to nearest keyframe)" />
              <KV k="-ss after -i" v="Output seeking (slower, frame-accurate)" />
            </div>
          </SectionCard>

          {/* 4 - Extract Audio */}
          <SectionCard number="4" title="Extract Audio">
            <Code>{`# Extract to MP3 (re-encode)
ffmpeg -i video.mp4 -vn -c:a libmp3lame \\
  -q:a 2 audio.mp3

# Extract to AAC (copy if already AAC)
ffmpeg -i video.mp4 -vn -c:a copy audio.aac

# Extract to WAV (uncompressed)
ffmpeg -i video.mp4 -vn audio.wav`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="-vn" v="Disable video stream" />
              <KV k="-an" v="Disable audio stream" />
              <KV k="-q:a 2" v="VBR quality for MP3 (0=best, 9=worst)" />
              <KV k="-map 0:a:1" v="Select specific audio track by index" />
            </div>
          </SectionCard>

          {/* 5 - H.264 Encoding */}
          <SectionCard number="5" title="H.264 Encoding (libx264)">
            <Code>{`ffmpeg -i input.mp4 -c:v libx264 \\
  -crf 23 -preset medium \\
  -c:a aac -b:a 128k output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="CRF range" v="0 (lossless) to 51 (worst). Default: 23" />
              <KV k="Sane CRF range" v="18 (visually lossless) to 28" />
              <KV k="-movflags +faststart" v="Moves metadata to front for web streaming" />
            </div>
            <div style={{ marginTop: 6, fontSize: 11, fontWeight: 700, color: palette.dark }}>Presets (speed vs compression):</div>
            {["ultrafast", "superfast", "veryfast", "faster", "fast", "medium (default)", "slow", "slower", "veryslow"].map((p, i) => (
              <div key={p} style={{
                display: "inline-block",
                padding: "1px 6px",
                margin: "1px 2px",
                background: p.includes("medium") ? palette.accentPale : palette.highlight,
                borderRadius: 4,
                fontSize: 10,
                color: palette.mid,
                fontFamily: "'JetBrains Mono', monospace",
              }}>{p}</div>
            ))}
          </SectionCard>

          {/* 6 - H.265 & VP9 */}
          <SectionCard number="6" title="H.265 / HEVC & VP9">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">HEVC</Tag><Tag color="#3a6ea5">VP9</Tag>
            </div>
            <Code>{`# H.265 (smaller files, slower encode)
ffmpeg -i input.mp4 -c:v libx265 \\
  -crf 28 -preset medium \\
  -c:a aac output.mp4

# VP9 constant quality (for WebM)
ffmpeg -i input.mp4 -c:v libvpx-vp9 \\
  -crf 30 -b:v 0 \\
  -c:a libopus output.webm`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="libx265 CRF default" v="28 (range 0-51, same presets as x264)" />
              <KV k="VP9 CRF range" v="0-63 (lower = better). Use -b:v 0 for constant quality" />
              <KV k="VP9 sane range" v="15-35 for most content" />
            </div>
          </SectionCard>

          {/* 7 - Resize & Scale */}
          <SectionCard number="7" title="Resize & Scale">
            <Code>{`# Scale to 1280 wide, keep aspect ratio
ffmpeg -i input.mp4 \\
  -vf "scale=1280:-1" output.mp4

# Scale to 720p height, auto width
ffmpeg -i input.mp4 \\
  -vf "scale=-1:720" output.mp4

# Fit within 1920x1080, keep ratio
ffmpeg -i input.mp4 -vf \\
  "scale=1920:1080:force_original_aspect_ratio=decrease" \\
  output.mp4`}</Code>
            <Bullet>Use <code>-1</code> for auto-calculated dimension (preserves aspect ratio)</Bullet>
            <Bullet>Use <code>-2</code> instead of <code>-1</code> to ensure even dimensions (required by many codecs)</Bullet>
            <Bullet><code>force_original_aspect_ratio=decrease</code> scales down to fit within bounds</Bullet>
            <Bullet>Combine with <code>pad</code> filter for letterboxing</Bullet>
          </SectionCard>

          {/* 8 - Speed & Tempo */}
          <SectionCard number="8" title="Speed & Tempo">
            <Code>{`# 2x speed (video + audio)
ffmpeg -i input.mp4 \\
  -vf "setpts=0.5*PTS" \\
  -af "atempo=2.0" output.mp4

# 0.5x slow motion
ffmpeg -i input.mp4 \\
  -vf "setpts=2.0*PTS" \\
  -af "atempo=0.5" output.mp4

# 4x speed audio (chain atempo for quality)
ffmpeg -i input.mp4 \\
  -vf "setpts=0.25*PTS" \\
  -af "atempo=2.0,atempo=2.0" output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="setpts" v="Adjusts video speed. 0.5*PTS = 2x, 2.0*PTS = 0.5x" />
              <KV k="atempo range" v="0.5 to 100.0 (newer ffmpeg). Chain at 2.0 max for best quality" />
              <KV k="Chaining trick" v="atempo=2.0,atempo=2.0 = 4x speed with better quality" />
            </div>
          </SectionCard>

          {/* 9 - Audio Filters */}
          <SectionCard number="9" title="Audio Filters">
            <Code>{`# Adjust volume (2x louder)
ffmpeg -i input.mp4 \\
  -af "volume=2.0" output.mp4

# Volume in decibels
ffmpeg -i input.mp4 \\
  -af "volume=3dB" output.mp4

# Normalize audio (loudnorm)
ffmpeg -i input.mp4 \\
  -af "loudnorm" output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="volume=0.5" v="Halve volume. volume=2.0 doubles it" />
              <KV k="loudnorm" v="EBU R128 loudness normalization" />
              <KV k="-af" v="Apply audio filter graph (-filter:a)" />
            </div>
            <div style={{
              marginTop: 8,
              padding: "6px 8px",
              background: palette.highlight,
              borderRadius: 6,
            }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                Note: The old <code>-vol</code> flag is deprecated. Use <code>{'-af "volume=X"'}</code> instead.
              </div>
            </div>
          </SectionCard>

          {/* 10 - Crop & Rotate */}
          <SectionCard number="10" title="Crop & Rotate">
            <Code>{`# Crop: width:height:x:y
ffmpeg -i input.mp4 \\
  -vf "crop=640:480:100:50" output.mp4

# Auto-detect black bars, then crop
ffmpeg -i input.mp4 -vf cropdetect \\
  -f null - 2>&1 | grep crop
# Then apply the detected values

# Rotate 90° clockwise
ffmpeg -i input.mp4 \\
  -vf "transpose=1" output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="transpose=0" v="90° counter-clockwise + vertical flip" />
              <KV k="transpose=1" v="90° clockwise" />
              <KV k="transpose=2" v="90° counter-clockwise" />
              <KV k="transpose=3" v="90° clockwise + vertical flip" />
              <KV k="180° rotation" v={'Use -vf "transpose=1,transpose=1"'} />
            </div>
          </SectionCard>

          {/* 11 - GIF Creation */}
          <SectionCard number="11" title="GIF Creation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 4 }}>
              Use the palettegen/paletteuse two-pass approach for high-quality GIFs.
            </div>
            <Code>{`# Single-command with palette (best quality)
ffmpeg -i input.mp4 -filter_complex \\
  "[0:v] fps=10,scale=320:-1,split [a][b]; \\
   [a] palettegen [p]; \\
   [b][p] paletteuse" output.gif

# Simple GIF (lower quality, quick)
ffmpeg -i input.mp4 -vf \\
  "fps=10,scale=320:-1" output.gif`}</Code>
            <Bullet><strong>palettegen</strong> analyzes frames to build an optimal 256-color palette</Bullet>
            <Bullet><strong>split</strong> duplicates the stream so one feeds palettegen, the other paletteuse</Bullet>
            <Bullet>Use <code>fps=10</code> and <code>scale=320:-1</code> to keep file size down</Bullet>
            <Bullet>Add <code>-ss</code> and <code>-t</code> before <code>-i</code> to trim the source</Bullet>
          </SectionCard>

          {/* 12 - ffprobe: Inspect Files */}
          <SectionCard number="12" title="ffprobe: Inspect Files">
            <Code>{`# Quick info summary
ffprobe -hide_banner input.mp4

# JSON output (all streams + format)
ffprobe -v quiet -print_format json \\
  -show_format -show_streams input.mp4

# Just video resolution
ffprobe -v error \\
  -select_streams v:0 \\
  -show_entries stream=width,height \\
  -of csv=p=0 input.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="-show_format" v="Container info: duration, bitrate, size" />
              <KV k="-show_streams" v="Per-stream: codec, resolution, fps, channels" />
              <KV k="-select_streams v:0" v="Query only the first video stream" />
              <KV k="-of csv=p=0" v="Machine-readable CSV output" />
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced */}
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
          {/* 13 - Concatenation */}
          <SectionCard number="13" title="Concatenation (Join Videos)">
            <Code>{`# 1. Create file list (videos.txt):
file 'clip1.mp4'
file 'clip2.mp4'
file 'clip3.mp4'

# 2. Concat demuxer (same codec, fast)
ffmpeg -f concat -safe 0 \\
  -i videos.txt -c copy output.mp4

# Concat filter (different codecs)
ffmpeg -i clip1.mp4 -i clip2.mp4 \\
  -filter_complex \\
  "[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[v][a]" \\
  -map "[v]" -map "[a]" output.mp4`}</Code>
            <Bullet><strong>Demuxer</strong> — instant, no re-encode (same codec/resolution required)</Bullet>
            <Bullet><strong>Filter</strong> — re-encodes, works with different codecs/resolutions</Bullet>
            <Bullet>Use <code>-safe 0</code> if file paths contain special characters</Bullet>
            <Bullet><code>n=2</code> means 2 input segments in the concat filter</Bullet>
          </SectionCard>

          {/* 14 - Subtitles */}
          <SectionCard number="14" title="Subtitles">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">SOFT SUBS</Tag><Tag color="#a53a3a">HARD BURN</Tag>
            </div>
            <Code>{`# Burn subtitles into video (hardcode)
ffmpeg -i input.mp4 \\
  -vf "subtitles=subs.srt" output.mp4

# Embed soft subtitles (MP4)
ffmpeg -i input.mp4 -i subs.srt \\
  -c copy -c:s mov_text \\
  -metadata:s:s:0 language=eng output.mp4

# Embed soft subtitles (MKV)
ffmpeg -i input.mp4 -i subs.srt \\
  -c copy -c:s srt output.mkv`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Hard subs" v="Burned into video pixels, always visible, cannot be toggled" />
              <KV k="Soft subs" v="Embedded as a stream, can be toggled on/off in player" />
              <KV k="mov_text" v="Subtitle codec for MP4 containers" />
              <KV k="srt / ass" v="Subtitle codecs for MKV containers" />
            </div>
          </SectionCard>

          {/* 15 - Watermark & Overlay */}
          <SectionCard number="15" title="Watermark & Overlay">
            <Code>{`# Overlay logo at top-right corner
ffmpeg -i video.mp4 -i logo.png \\
  -filter_complex \\
  "overlay=main_w-overlay_w-10:10" \\
  output.mp4

# Center watermark
ffmpeg -i video.mp4 -i logo.png \\
  -filter_complex \\
  "overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" \\
  output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="overlay=x:y" v="Position in pixels from top-left" />
              <KV k="main_w / main_h" v="Video dimensions" />
              <KV k="overlay_w / overlay_h" v="Overlay image dimensions" />
              <KV k="PNG with alpha" v="Use transparent PNG for clean watermarks" />
            </div>
          </SectionCard>

          {/* 16 - Two-Pass Encoding */}
          <SectionCard number="16" title="Two-Pass Encoding">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 4 }}>
              Use two-pass when you need a specific target file size.
            </div>
            <Code>{`# Pass 1: Analyze
ffmpeg -i input.mp4 -c:v libx264 \\
  -b:v 1000k -pass 1 \\
  -f mp4 /dev/null

# Pass 2: Encode
ffmpeg -i input.mp4 -c:v libx264 \\
  -b:v 1000k -pass 2 \\
  -c:a aac -b:a 128k output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Bitrate formula" v="(target_MB * 8192) / duration_sec = kbps" />
              <KV k="Subtract audio" v="Minus 128-192 kbps for audio bitrate" />
              <KV k="Pass 1 output" v="Goes to /dev/null (NUL on Windows)" />
              <KV k="When to use" v="Strict file size limits; otherwise CRF is simpler" />
            </div>
          </SectionCard>

          {/* 17 - Screen Capture */}
          <SectionCard number="17" title="Screen Capture">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">LINUX</Tag><Tag color="#7a5a8a">MACOS</Tag><Tag color="#2a7a7a">WINDOWS</Tag>
            </div>
            <Code>{`# macOS (avfoundation)
ffmpeg -f avfoundation \\
  -framerate 30 -i "1:" output.mkv

# Linux (x11grab)
ffmpeg -f x11grab -framerate 30 \\
  -video_size 1920x1080 \\
  -i :0.0 output.mkv

# Windows (gdigrab)
ffmpeg -f gdigrab -framerate 30 \\
  -i desktop output.mkv`}</Code>
            <Bullet>On macOS, run <code>ffmpeg -f avfoundation -list_devices true -i ""</code> to list device indices</Bullet>
            <Bullet>Add <code>-c:v libx264 -crf 0</code> for lossless capture</Bullet>
            <Bullet>Append <code>+offset_x,offset_y</code> to <code>-i :0.0</code> on Linux for region capture</Bullet>
            <Bullet>Use <code>-t 60</code> to limit recording to 60 seconds</Bullet>
          </SectionCard>

          {/* 18 - Batch Processing */}
          <SectionCard number="18" title="Batch Processing">
            <Code>{`# Convert all MKV to MP4 (bash)
for f in *.mkv; do
  ffmpeg -i "$f" -c copy "\${f%.mkv}.mp4"
done

# Convert all WAV to MP3
for f in *.wav; do
  ffmpeg -i "$f" -c:a libmp3lame \\
    -q:a 2 "\${f%.wav}.mp3"
done`}</Code>
            <Bullet>Use <code>{"${f%.ext}"}</code> to strip the original extension</Bullet>
            <Bullet>Add <code>-y</code> flag to skip overwrite prompts in batch jobs</Bullet>
            <Bullet>On Windows PowerShell: <code>{"Get-ChildItem *.mkv | ForEach-Object { ... }"}</code></Bullet>
            <Bullet>Run with <code>-loglevel error</code> for cleaner batch output</Bullet>
          </SectionCard>

          {/* 19 - Common Video Filters */}
          <SectionCard number="19" title="Common Video Filters (-vf)">
            <RefRow cmd="scale=W:H" desc="Resize (use -1 or -2 for auto)" />
            <RefRow cmd="crop=W:H:X:Y" desc="Crop to region" />
            <RefRow cmd="fps=24" desc="Change frame rate" />
            <RefRow cmd="setpts=0.5*PTS" desc="Change speed (0.5 = 2x faster)" />
            <RefRow cmd="transpose=1" desc="Rotate 90° clockwise" />
            <RefRow cmd="hflip / vflip" desc="Mirror horizontally / vertically" />
            <RefRow cmd="eq=brightness=0.1" desc="Adjust brightness, contrast, gamma" />
            <RefRow cmd="deinterlace" desc='Use yadif filter: -vf "yadif"' />
            <div style={{
              marginTop: 8,
              padding: "6px 8px",
              background: palette.highlight,
              borderRadius: 6,
            }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong>Chain filters:</strong> <code>{'-vf "scale=1280:-2,fps=24,eq=brightness=0.05"'}</code>
              </div>
            </div>
          </SectionCard>

          {/* 20 - Common Audio Filters */}
          <SectionCard number="20" title="Common Audio Filters (-af)">
            <RefRow cmd="volume=2.0" desc="Multiply volume (use dB: volume=3dB)" />
            <RefRow cmd="loudnorm" desc="EBU R128 loudness normalization" />
            <RefRow cmd="atempo=1.5" desc="Change audio speed (0.5-100.0)" />
            <RefRow cmd="aecho=0.8:0.9:1000:0.3" desc="Add echo effect" />
            <RefRow cmd="highpass=f=200" desc="Remove frequencies below 200Hz" />
            <RefRow cmd="lowpass=f=3000" desc="Remove frequencies above 3000Hz" />
            <RefRow cmd="silenceremove" desc="Detect and strip silence" />
            <div style={{
              marginTop: 8,
              padding: "6px 8px",
              background: palette.highlight,
              borderRadius: 6,
            }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong>Chain audio filters:</strong> <code>{'-af "volume=1.5,highpass=f=200,loudnorm"'}</code>
              </div>
            </div>
          </SectionCard>

          {/* 21 - Stream Selection */}
          <SectionCard number="21" title="Stream Selection (-map)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Use <code>-map</code> for precise control over which streams to include.
            </div>
            <Code>{`# Keep video + 2nd audio track only
ffmpeg -i input.mkv \\
  -map 0:v:0 -map 0:a:1 \\
  -c copy output.mkv

# Merge video from one, audio from another
ffmpeg -i video.mp4 -i audio.m4a \\
  -map 0:v -map 1:a \\
  -c copy output.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="0:v:0" v="First video stream from first input" />
              <KV k="0:a:1" v="Second audio stream from first input" />
              <KV k="1:a" v="All audio streams from second input" />
              <KV k="-map 0" v="All streams from first input" />
            </div>
          </SectionCard>

          {/* 22 - Thumbnails & Frames */}
          <SectionCard number="22" title="Thumbnails & Frames">
            <Code>{`# Extract single frame at timestamp
ffmpeg -ss 00:01:30 -i input.mp4 \\
  -frames:v 1 thumb.png

# Extract one frame per second
ffmpeg -i input.mp4 \\
  -vf "fps=1" frame_%04d.png

# Create thumbnail grid (4x4)
ffmpeg -i input.mp4 \\
  -vf "select=not(mod(n\\,100)),scale=320:-1,tile=4x4" \\
  -frames:v 1 grid.png`}</Code>
            <Bullet><code>-frames:v 1</code> limits output to a single video frame</Bullet>
            <Bullet><code>fps=1</code> outputs one frame per second of video</Bullet>
            <Bullet>Use <code>%04d</code> for zero-padded sequential filenames</Bullet>
            <Bullet><code>tile=4x4</code> arranges multiple frames into a grid</Bullet>
          </SectionCard>

          {/* 23 - Streaming & Piping */}
          <SectionCard number="23" title="Streaming & Piping">
            <Code>{`# Stream to RTMP server
ffmpeg -re -i input.mp4 \\
  -c:v libx264 -preset veryfast \\
  -c:a aac \\
  -f flv rtmp://server/live/key

# Pipe to stdout (for chaining)
ffmpeg -i input.mp4 -f mpegts \\
  pipe:1 | other_command

# Read from stdin
cat input.mp4 | ffmpeg -i pipe:0 \\
  -c copy output.mp4`}</Code>
            <Bullet><code>-re</code> reads input at native frame rate (needed for live streaming)</Bullet>
            <Bullet><code>-f flv</code> forces FLV container for RTMP compatibility</Bullet>
            <Bullet><code>pipe:1</code> is stdout, <code>pipe:0</code> is stdin</Bullet>
            <Bullet>Use <code>-f mpegts</code> for pipe-friendly streaming format</Bullet>
          </SectionCard>

          {/* 24 - Quick Reference: Codec Flags */}
          <SectionCard number="24" title="Quick Reference: Codec Flags" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "-c:v / -c:a", when: "Codec selection", best: "libx264, libx265, libvpx-vp9, aac, libmp3lame, libopus", icon: "V/A" },
                { title: "-b:v / -b:a", when: "Target bitrate", best: "-b:v 2000k, -b:a 128k. Use with two-pass for precision", icon: "BR" },
                { title: "-crf", when: "Quality control", best: "x264 default 23, x265 default 28. Lower = better quality", icon: "CRF" },
                { title: "-preset", when: "Speed/compression", best: "ultrafast to veryslow. Default: medium. Slower = smaller files", icon: "SPD" },
              ].map(({ title, when, best, icon }) => (
                <div key={title} style={{
                  background: palette.highlight,
                  borderRadius: 8,
                  padding: "10px 12px",
                  border: `1px solid ${palette.cardBorder}`,
                }}>
                  <div style={{
                    fontSize: 14,
                    marginBottom: 4,
                    fontWeight: 900,
                    color: palette.accent,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>{icon}</div>
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
        FFmpeg Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Verified against FFmpeg 7.x documentation. Always check ffmpeg -version for your build.
        </span>
      </div>
    </div>
  );
}
