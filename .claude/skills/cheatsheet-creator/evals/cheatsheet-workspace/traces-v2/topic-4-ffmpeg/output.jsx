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
  const pages = ["Page 1: Foundations", "Page 2: Advanced"];

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
          Convert · Encode · Stream · Filter — 2026 Edition
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

      {/* Page 1: Foundations */}
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
          {/* 1 — Core Syntax */}
          <SectionCard number="1" title="Core Syntax">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every FFmpeg command follows input → processing → output.
            </div>
            <Code>{`ffmpeg -i input.mp4 output.avi
ffmpeg -i input.mp4 -i audio.mp3 output.mkv
ffmpeg -y -i input.mp4 output.mp4  # overwrite`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>-i</strong> specifies each input file (use multiple for merging)</Bullet>
              <Bullet><strong>-y</strong> overwrites output without asking</Bullet>
              <Bullet><strong>-n</strong> never overwrite — exit if file exists</Bullet>
              <Bullet><strong>-hide_banner</strong> suppresses version and config info</Bullet>
              <Bullet>Options before <code>-i</code> apply to input; after apply to output</Bullet>
            </div>
          </SectionCard>

          {/* 2 — Probing & Inspection */}
          <SectionCard number="2" title="Probing & Inspection">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Use <code>ffprobe</code> to inspect files without converting.
            </div>
            <Code>{`ffprobe -v quiet -show_format input.mp4
ffprobe -v quiet -show_streams input.mp4
ffprobe -v quiet -print_format json \\
  -show_streams input.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="-show_format" desc="Container info: duration, bitrate, size" />
              <RefRow cmd="-show_streams" desc="Per-stream codec, resolution, sample rate" />
              <RefRow cmd="-show_entries" desc="Select specific fields to display" />
              <RefRow cmd="-print_format" desc="Output as json, csv, xml, or flat" />
            </div>
          </SectionCard>

          {/* 3 — Video Codecs */}
          <SectionCard number="3" title="Video Codecs">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">H.264</Tag>
              <Tag color="#7a5a8a">H.265</Tag>
              <Tag color="#2a7a7a">VP9</Tag>
              <Tag color="#5a8a3c">AV1</Tag>
            </div>
            <KV k="libx264" v="H.264, best compatibility, fast encode" />
            <KV k="libx265" v="H.265/HEVC, 50% smaller at same quality" />
            <KV k="libvpx-vp9" v="VP9, royalty-free, WebM compatible" />
            <KV k="libaom-av1" v="AV1, best compression, slow encode" />
            <Code>{`ffmpeg -i in.mp4 -c:v libx264 -crf 23 out.mp4
ffmpeg -i in.mp4 -c:v libx265 -crf 28 out.mp4
ffmpeg -i in.mp4 -c:v libvpx-vp9 -crf 30 out.webm`}</Code>
          </SectionCard>

          {/* 4 — Audio Codecs */}
          <SectionCard number="4" title="Audio Codecs">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">AAC</Tag>
              <Tag color="#a53a3a">MP3</Tag>
              <Tag color="#5a8a3c">FLAC</Tag>
              <Tag color="#2a7a7a">Opus</Tag>
            </div>
            <KV k="aac" v="Default for MP4/M4A, good quality at 128-256k" />
            <KV k="libmp3lame" v="MP3 encoder, universal playback support" />
            <KV k="flac" v="Lossless compression, ~50% file reduction" />
            <KV k="libopus" v="Best lossy codec, great at low bitrates" />
            <Code>{`ffmpeg -i in.mp4 -c:a aac -b:a 192k out.mp4
ffmpeg -i in.wav -c:a libmp3lame -q:a 2 out.mp3
ffmpeg -i in.wav -c:a flac out.flac`}</Code>
          </SectionCard>

          {/* 5 — Container Formats */}
          <SectionCard number="5" title="Container Formats">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Containers hold streams — choosing the right one matters.
            </div>
            <KV k=".mp4" v="Universal playback, H.264/H.265 + AAC, web standard" />
            <KV k=".mkv" v="Holds any codec, multiple tracks, subtitle-friendly" />
            <KV k=".webm" v="Web-optimized, VP8/VP9 + Opus/Vorbis" />
            <KV k=".mov" v="Apple ecosystem, ProRes support, editing workflows" />
            <KV k=".avi" v="Legacy format, limited codec support, avoid for new work" />
            <KV k=".m4a" v="Audio-only MP4, AAC/ALAC, Apple Music compatible" />
          </SectionCard>

          {/* 6 — Transcoding & Stream Copy */}
          <SectionCard number="6" title="Transcoding & Stream Copy">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Re-encode only when you need to — copy streams when you can.
            </div>
            <Code>{`# Copy all streams (instant, no quality loss)
ffmpeg -i in.mkv -c copy out.mp4

# Copy video, re-encode audio only
ffmpeg -i in.mkv -c:v copy -c:a aac out.mp4

# Re-encode everything
ffmpeg -i in.mkv -c:v libx264 -c:a aac out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>-c copy</strong> copies all streams without re-encoding (fastest)</Bullet>
              <Bullet><strong>-c:v</strong> sets video codec, <strong>-c:a</strong> sets audio codec</Bullet>
              <Bullet><strong>-c:s</strong> sets subtitle codec (e.g., <code>mov_text</code>)</Bullet>
              <Bullet>Stream copy may fail if codecs are incompatible with the container</Bullet>
            </div>
          </SectionCard>

          {/* 7 — Quality Control (CRF) */}
          <SectionCard number="7" title="Quality Control (CRF)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              CRF = Constant Rate Factor. Lower = better quality, bigger file.
            </div>
            <RefRow cmd="CRF 0" desc="Lossless — huge files, archival only" />
            <RefRow cmd="CRF 18" desc="Visually lossless — excellent quality" />
            <RefRow cmd="CRF 23" desc="Default for x264 — good balance" />
            <RefRow cmd="CRF 28" desc="Default for x265 — equivalent to x264 CRF 23" />
            <RefRow cmd="CRF 35+" desc="Low quality — visible artifacts" />
            <Code>{`# CRF mode (recommended)
ffmpeg -i in.mp4 -c:v libx264 -crf 20 out.mp4

# Constrained bitrate
ffmpeg -i in.mp4 -c:v libx264 -b:v 5M out.mp4

# Two-pass encoding for target size
ffmpeg -i in.mp4 -c:v libx264 -b:v 2M \\
  -pass 1 -f null /dev/null
ffmpeg -i in.mp4 -c:v libx264 -b:v 2M \\
  -pass 2 out.mp4`}</Code>
          </SectionCard>

          {/* 8 — Scaling & Resizing */}
          <SectionCard number="8" title="Scaling & Resizing">
            <Code>{`# Scale to 1280x720
ffmpeg -i in.mp4 -vf scale=1280:720 out.mp4

# Scale width, keep aspect ratio (-1 auto)
ffmpeg -i in.mp4 -vf scale=1280:-1 out.mp4

# Use -2 for divisible-by-2 (codec safe)
ffmpeg -i in.mp4 -vf scale=1280:-2 out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="scale=1920:1080" desc="Full HD (1080p)" />
              <RefRow cmd="scale=1280:720" desc="HD (720p)" />
              <RefRow cmd="scale=854:480" desc="SD (480p)" />
              <RefRow cmd="scale=iw/2:ih/2" desc="Half resolution" />
              <RefRow cmd="scale=320:-1" desc="Thumbnail width, auto height" />
            </div>
          </SectionCard>

          {/* 9 — Trimming & Cutting */}
          <SectionCard number="9" title="Trimming & Cutting">
            <Code>{`# Cut from 00:01:30 for 45 seconds
ffmpeg -ss 00:01:30 -i in.mp4 \\
  -t 45 -c copy out.mp4

# Cut from start to specific end
ffmpeg -ss 00:00:10 -i in.mp4 \\
  -to 00:02:00 -c copy out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>-ss before -i</strong> seeks fast (input seeking, may be imprecise)</Bullet>
              <Bullet><strong>-ss after -i</strong> seeks precisely (slower, decodes all frames)</Bullet>
              <Bullet><strong>-t</strong> sets duration in seconds; <strong>-to</strong> sets absolute end time</Bullet>
              <Bullet>Use <code>-c copy</code> for instant cuts (keyframe-aligned) or re-encode for frame-exact cuts</Bullet>
            </div>
          </SectionCard>

          {/* 10 — Frame Rate & Speed */}
          <SectionCard number="10" title="Frame Rate & Speed">
            <Code>{`# Change frame rate
ffmpeg -i in.mp4 -r 30 out.mp4

# 2x speed (video + audio)
ffmpeg -i in.mp4 -filter_complex \\
  "[0:v]setpts=0.5*PTS[v];
   [0:a]atempo=2.0[a]" \\
  -map "[v]" -map "[a]" out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="setpts=0.5*PTS" desc="2x speed (halve timestamps)" />
              <RefRow cmd="setpts=2.0*PTS" desc="0.5x slow motion (double timestamps)" />
              <RefRow cmd="atempo=2.0" desc="2x audio speed (range: 0.5 to 100)" />
              <RefRow cmd="-r 24" desc="Set output frame rate to 24 fps" />
            </div>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Tip:</strong> Chain <code>atempo</code> for extreme speeds: <code>atempo=2.0,atempo=2.0</code> = 4x
              </div>
            </div>
          </SectionCard>

          {/* 11 — Audio Extraction & Mixing */}
          <SectionCard number="11" title="Audio Extraction & Mixing">
            <Code>{`# Extract audio only
ffmpeg -i in.mp4 -vn -c:a copy out.aac

# Remove audio from video
ffmpeg -i in.mp4 -an -c:v copy out.mp4

# Replace audio track
ffmpeg -i video.mp4 -i audio.mp3 \\
  -c:v copy -map 0:v -map 1:a out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="-vn" desc="Strip all video streams" />
              <RefRow cmd="-an" desc="Strip all audio streams" />
              <RefRow cmd="-vol 256" desc="Normal volume (512 = 2x, 128 = 0.5x)" />
              <RefRow cmd="-ac 2" desc="Set audio channels (2 = stereo)" />
              <RefRow cmd="-ar 44100" desc="Set audio sample rate (Hz)" />
            </div>
          </SectionCard>

          {/* 12 — Format Quick Reference (span=3) */}
          <SectionCard number="12" title="Format Quick Reference" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Web Upload", when: "YouTube, social, general sharing", best: "MP4 + H.264 + AAC, CRF 20-23", icon: "🌐" },
                { title: "Archival", when: "Master copies, long-term storage", best: "MKV + FFV1 or ProRes, lossless audio", icon: "🗄️" },
                { title: "Streaming", when: "HLS, DASH, live broadcast", best: "MP4/TS + H.264, keyint=2s, AAC 128k", icon: "📡" },
                { title: "Editing", when: "NLE timeline, post-production", best: "MOV + ProRes/DNxHR, PCM audio", icon: "🎬" },
                { title: "Web Embed", when: "HTML5 video, autoplay backgrounds", best: "WebM + VP9 + Opus, MP4 fallback", icon: "💻" },
                { title: "Mobile", when: "Small file, offline playback", best: "MP4 + H.264 Baseline, CRF 28, 720p", icon: "📱" },
                { title: "Audio Only", when: "Podcasts, music, voice memos", best: "M4A + AAC 192k or FLAC for lossless", icon: "🎵" },
                { title: "Animation", when: "Short loops, UI demos, memes", best: "GIF (palette) or WebM VP9, short duration", icon: "🎞️" },
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
          {/* 13 — Concatenation */}
          <SectionCard number="13" title="Concatenation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Join multiple files into one. The concat demuxer is safest.
            </div>
            <Code>{`# 1. Create a file list (files.txt):
file 'clip1.mp4'
file 'clip2.mp4'
file 'clip3.mp4'

# 2. Concatenate with demuxer:
ffmpeg -f concat -safe 0 \\
  -i files.txt -c copy out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>concat demuxer</strong> — best for same-codec files, uses <code>-c copy</code></Bullet>
              <Bullet><strong>concat protocol</strong> — works only with MPEG-TS files</Bullet>
              <Bullet><strong>concat filter</strong> — re-encodes, works across different formats</Bullet>
              <Bullet>Files must have identical codecs and parameters for demuxer mode</Bullet>
            </div>
          </SectionCard>

          {/* 14 — Subtitles */}
          <SectionCard number="14" title="Subtitles">
            <Code>{`# Burn subtitles into video (hardcode)
ffmpeg -i in.mp4 \\
  -vf subtitles=subs.srt out.mp4

# Embed subtitle track (softcode)
ffmpeg -i in.mp4 -i subs.srt \\
  -c copy -c:s mov_text out.mp4

# Extract subtitles from video
ffmpeg -i in.mkv -map 0:s:0 out.srt`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="mov_text" desc="Subtitle codec for MP4 containers" />
              <RefRow cmd="srt / subrip" desc="SubRip text format (most common)" />
              <RefRow cmd="ass" desc="Advanced SubStation Alpha (styled subs)" />
              <RefRow cmd="-map 0:s:0" desc="Select first subtitle stream from input" />
            </div>
          </SectionCard>

          {/* 15 — Filters & Effects */}
          <SectionCard number="15" title="Filters & Effects">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">VIDEO</Tag>
              <Tag color="#5a8a3c">CHAIN</Tag>
            </div>
            <RefRow cmd="crop=w:h:x:y" desc="Crop to width:height at position x,y" />
            <RefRow cmd="transpose=1" desc="Rotate 90° clockwise (2=ccw)" />
            <RefRow cmd="hflip / vflip" desc="Mirror horizontally or vertically" />
            <RefRow cmd="drawtext=..." desc="Overlay text with font, size, position" />
            <RefRow cmd="eq=brightness=0.1" desc="Adjust brightness, contrast, saturation" />
            <Code>{`# Chain filters with commas
ffmpeg -i in.mp4 -vf \\
  "crop=640:480:100:50,\\
   scale=1280:960,\\
   drawtext=text='Demo':x=10:y=10:\\
   fontsize=24:fontcolor=white" \\
  out.mp4`}</Code>
          </SectionCard>

          {/* 16 — GIF Creation */}
          <SectionCard number="16" title="GIF Creation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Two-pass with palettegen gives dramatically better quality.
            </div>
            <Code>{`# Quick GIF (low quality)
ffmpeg -i in.mp4 -vf \\
  "fps=10,scale=320:-1" out.gif

# Two-pass high-quality GIF
ffmpeg -i in.mp4 -vf \\
  "fps=15,scale=480:-1:flags=lanczos,\\
   palettegen" palette.png

ffmpeg -i in.mp4 -i palette.png \\
  -filter_complex \\
  "fps=15,scale=480:-1:flags=lanczos\\
   [x];[x][1:v]paletteuse" out.gif`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>fps=10-15</strong> keeps file size manageable for GIFs</Bullet>
              <Bullet><strong>lanczos</strong> scaling algorithm gives sharp downscales</Bullet>
              <Bullet><strong>palettegen/paletteuse</strong> builds optimal 256-color palette</Bullet>
              <Bullet>Prefer WebM/MP4 over GIF for anything over 10 seconds</Bullet>
            </div>
          </SectionCard>

          {/* 17 — Streaming & HLS */}
          <SectionCard number="17" title="Streaming & HLS">
            <Code>{`# Generate HLS segments
ffmpeg -i in.mp4 -c:v libx264 \\
  -c:a aac -b:a 128k \\
  -hls_time 6 -hls_list_size 0 \\
  -hls_segment_filename "seg_%03d.ts" \\
  playlist.m3u8

# Push to RTMP server
ffmpeg -re -i in.mp4 \\
  -c:v libx264 -c:a aac \\
  -f flv rtmp://server/live/key`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="-hls_time 6" v="Target segment duration in seconds" />
              <KV k="-hls_list_size 0" v="Keep all segments in playlist (VOD)" />
              <KV k="-re" v="Read input at native frame rate (for live)" />
              <KV k="-f flv" v="FLV format required for RTMP output" />
            </div>
          </SectionCard>

          {/* 18 — Hardware Acceleration */}
          <SectionCard number="18" title="Hardware Acceleration">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">NVIDIA</Tag>
              <Tag color="#3a6ea5">INTEL</Tag>
              <Tag color="#7a5a8a">APPLE</Tag>
              <Tag color="#a53a3a">AMD</Tag>
            </div>
            <Code>{`# NVIDIA NVENC (GPU encoding)
ffmpeg -i in.mp4 -c:v h264_nvenc \\
  -preset p7 -cq 23 out.mp4

# Apple VideoToolbox (macOS)
ffmpeg -i in.mp4 -c:v h264_videotoolbox \\
  -q:v 60 out.mp4

# Intel Quick Sync Video
ffmpeg -i in.mp4 -c:v h264_qsv \\
  -global_quality 23 out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>h264_nvenc</strong> — NVIDIA GPU, fastest encode, slightly larger files</Bullet>
              <Bullet><strong>h264_videotoolbox</strong> — macOS native, great on Apple Silicon</Bullet>
              <Bullet><strong>h264_qsv</strong> — Intel iGPU, low power, good quality</Bullet>
              <Bullet>Check available encoders: <code>ffmpeg -encoders</code></Bullet>
            </div>
          </SectionCard>

          {/* 19 — Batch Processing */}
          <SectionCard number="19" title="Batch Processing">
            <Code>{`# Convert all MKV files to MP4 (bash)
for f in *.mkv; do
  ffmpeg -i "$f" -c:v libx264 \\
    -crf 23 "$\{f%.mkv\}.mp4"
done

# Parallel with GNU parallel
parallel ffmpeg -i {} -c:v libx264 \\
  -crf 23 {.}.mp4 ::: *.mkv`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>Use shell loops for sequential batch conversion</Bullet>
              <Bullet><strong>GNU parallel</strong> runs multiple FFmpeg instances simultaneously</Bullet>
              <Bullet><code>{'${f%.mkv}'}</code> strips extension in bash for output naming</Bullet>
              <Bullet>Add <code>-loglevel error</code> for cleaner batch output</Bullet>
            </div>
          </SectionCard>

          {/* 20 — Metadata & Chapters */}
          <SectionCard number="20" title="Metadata & Chapters">
            <Code>{`# Set metadata tags
ffmpeg -i in.mp4 \\
  -metadata title="My Video" \\
  -metadata artist="Author" \\
  -metadata year="2026" \\
  -c copy out.mp4

# Strip all metadata
ffmpeg -i in.mp4 -map_metadata -1 \\
  -c copy out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="-metadata key=val" desc="Set a metadata tag on the output" />
              <RefRow cmd="-map_metadata -1" desc="Remove all metadata from output" />
              <RefRow cmd="-map_chapters -1" desc="Remove chapter markers" />
              <RefRow cmd="-disposition:a:0 default" desc="Set default audio track" />
            </div>
          </SectionCard>

          {/* 21 — Screenshots & Thumbnails */}
          <SectionCard number="21" title="Screenshots & Thumbnails">
            <Code>{`# Single frame at timestamp
ffmpeg -ss 00:01:30 -i in.mp4 \\
  -frames:v 1 thumb.png

# One screenshot every 10 seconds
ffmpeg -i in.mp4 -vf fps=1/10 \\
  frame_%04d.png

# Tile of thumbnails (4x4 grid)
ffmpeg -i in.mp4 -vf \\
  "select=not(mod(n\\,300)),\\
   scale=160:90,\\
   tile=4x4" \\
  -frames:v 1 contact_sheet.png`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="-frames:v 1" desc="Capture exactly one frame" />
              <RefRow cmd="fps=1/10" desc="Output one frame every 10 seconds" />
              <RefRow cmd="tile=4x4" desc="Arrange frames into grid layout" />
              <RefRow cmd="-q:v 2" desc="JPEG quality (2=high, 31=low)" />
            </div>
          </SectionCard>

          {/* 22 — Picture-in-Picture & Overlay */}
          <SectionCard number="22" title="Picture-in-Picture & Overlay">
            <Code>{`# PiP: small video in corner
ffmpeg -i main.mp4 -i pip.mp4 \\
  -filter_complex \\
  "[1:v]scale=240:-1[pip];\\
   [0:v][pip]overlay=W-w-10:10" \\
  -c:a copy out.mp4

# Add image watermark
ffmpeg -i in.mp4 -i logo.png \\
  -filter_complex \\
  "overlay=W-w-10:H-h-10" \\
  out.mp4`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>overlay=x:y</strong> positions the overlay at coordinates</Bullet>
              <Bullet><strong>W/H</strong> = main video width/height, <strong>w/h</strong> = overlay size</Bullet>
              <Bullet><strong>W-w-10:10</strong> = top-right corner with 10px padding</Bullet>
              <Bullet>Use <code>enable='between(t,5,15)'</code> to show overlay only during specific times</Bullet>
            </div>
          </SectionCard>

          {/* 23 — Common Recipes (span=2) */}
          <SectionCard number="23" title="Common Recipes" span={2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent, marginBottom: 4 }}>Convert for WhatsApp</div>
                <Code>{`ffmpeg -i in.mp4 -c:v libx264 \\
  -crf 28 -preset fast \\
  -vf scale=480:-2 \\
  -c:a aac -b:a 64k \\
  whatsapp.mp4`}</Code>
                <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent, marginBottom: 4, marginTop: 10 }}>Extract Audio as MP3</div>
                <Code>{`ffmpeg -i in.mp4 -vn \\
  -c:a libmp3lame -q:a 2 \\
  audio.mp3`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent, marginBottom: 4 }}>Compress for Email</div>
                <Code>{`ffmpeg -i in.mp4 -c:v libx264 \\
  -crf 30 -preset slow \\
  -vf scale=720:-2 \\
  -c:a aac -b:a 96k \\
  -fs 25M small.mp4`}</Code>
                <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent, marginBottom: 4, marginTop: 10 }}>Convert to Web-Ready</div>
                <Code>{`ffmpeg -i in.mov -c:v libx264 \\
  -crf 23 -preset medium \\
  -movflags +faststart \\
  -c:a aac -b:a 128k \\
  web.mp4`}</Code>
              </div>
            </div>
          </SectionCard>

          {/* 24 — Performance Tips */}
          <SectionCard number="24" title="Performance Tips">
            <Bullet><strong>-preset ultrafast</strong> to <strong>veryslow</strong> — slower = smaller file, same quality</Bullet>
            <Bullet><strong>-threads 0</strong> lets FFmpeg auto-detect optimal thread count</Bullet>
            <Bullet><strong>-movflags +faststart</strong> moves the moov atom for web streaming</Bullet>
            <Bullet>Use <code>-c copy</code> whenever possible to skip re-encoding entirely</Bullet>
            <Bullet><strong>Pipe between tools:</strong> <code>{'ffmpeg ... -f nut - | ffmpeg -i - ...'}</code></Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Presets speed vs size:</strong>
              </div>
              {[
                { name: "ultrafast", note: "Fastest encode, largest file" },
                { name: "fast", note: "Good daily driver balance" },
                { name: "medium", note: "Default — recommended starting point" },
                { name: "slow", note: "Smaller files, worth the wait for final output" },
                { name: "veryslow", note: "Diminishing returns, use for archival" },
              ].map(({ name, note }, i) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    gap: 8,
                    padding: "3px 0",
                    fontSize: 11,
                    borderBottom: i < 4 ? `1px solid ${palette.cardBorder}` : "none",
                  }}
                >
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontWeight: 700, width: 80 }}>{name}</code>
                  <span style={{ color: palette.mid }}>{note}</span>
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
          Based on FFmpeg 7.x · ffmpeg.org
        </span>
      </div>
    </div>
  );
}
