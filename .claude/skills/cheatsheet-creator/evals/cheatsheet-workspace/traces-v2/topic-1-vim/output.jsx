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

export default function VimCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Essentials", "Page 2: Power User"];

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
          Vim{" "}
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
          Modes · Navigation · Editing · Search · Buffers — 2026 Edition
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
          {/* 1 — Vim Modes */}
          <SectionCard number="1" title="Vim Modes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">NORMAL</Tag>
              <Tag color="#5a8a3c">INSERT</Tag>
              <Tag color="#7a5a8a">VISUAL</Tag>
              <Tag color="#8a6a3a">COMMAND</Tag>
            </div>
            <Bullet><strong>Normal</strong> — default mode for navigation and commands</Bullet>
            <Bullet><strong>Insert</strong> — type text; enter with <code>i</code>, exit with <code>Esc</code></Bullet>
            <Bullet><strong>Visual</strong> — select text with <code>v</code>, <code>V</code>, or <code>Ctrl+v</code></Bullet>
            <Bullet><strong>Command-line</strong> — type <code>:</code> for Ex commands, <code>/</code> for search</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Tip:</strong> Press <code>Esc</code> twice to always get back to Normal mode from anywhere.
              </div>
            </div>
          </SectionCard>

          {/* 2 — Opening & Closing Files */}
          <SectionCard number="2" title="Opening & Closing Files">
            <RefRow cmd="vim file.txt" desc="Open file for editing" />
            <RefRow cmd="vim +42 file" desc="Open file at line 42" />
            <RefRow cmd=":w" desc="Write (save) current file" />
            <RefRow cmd=":w newname" desc="Save as a new filename" />
            <RefRow cmd=":q" desc="Quit (fails if unsaved changes)" />
            <RefRow cmd=":q!" desc="Force quit, discard changes" />
            <RefRow cmd=":wq" desc="Write and quit" />
            <RefRow cmd=":x" desc="Write and quit (same as :wq)" />
            <RefRow cmd="ZZ" desc="Write and quit from Normal mode" />
            <RefRow cmd="ZQ" desc="Quit without saving from Normal" />
          </SectionCard>

          {/* 3 — Basic Navigation */}
          <SectionCard number="3" title="Basic Navigation">
            <RefRow cmd="h j k l" desc="Left, down, up, right" />
            <RefRow cmd="w / W" desc="Next word / next WORD (whitespace-delimited)" />
            <RefRow cmd="b / B" desc="Back word / back WORD" />
            <RefRow cmd="e / E" desc="End of word / end of WORD" />
            <RefRow cmd="0" desc="Start of line" />
            <RefRow cmd="^" desc="First non-blank character" />
            <RefRow cmd="$" desc="End of line" />
            <RefRow cmd="gg" desc="Go to first line of file" />
            <RefRow cmd="G" desc="Go to last line of file" />
            <RefRow cmd="42G" desc="Go to line 42" />
          </SectionCard>

          {/* 4 — Inserting Text */}
          <SectionCard number="4" title="Inserting Text">
            <RefRow cmd="i" desc="Insert before cursor" />
            <RefRow cmd="I" desc="Insert at beginning of line" />
            <RefRow cmd="a" desc="Append after cursor" />
            <RefRow cmd="A" desc="Append at end of line" />
            <RefRow cmd="o" desc="Open new line below" />
            <RefRow cmd="O" desc="Open new line above" />
            <RefRow cmd="ea" desc="Append at end of current word" />
            <RefRow cmd="Esc" desc="Exit insert mode back to Normal" />
          </SectionCard>

          {/* 5 — Editing & Deleting */}
          <SectionCard number="5" title="Editing & Deleting">
            <RefRow cmd="x" desc="Delete character under cursor" />
            <RefRow cmd="X" desc="Delete character before cursor" />
            <RefRow cmd="dw" desc="Delete from cursor to next word" />
            <RefRow cmd="dd" desc="Delete entire line" />
            <RefRow cmd="D" desc="Delete from cursor to end of line" />
            <RefRow cmd="cw" desc="Change word (delete + enter Insert)" />
            <RefRow cmd="cc" desc="Change entire line" />
            <RefRow cmd="C" desc="Change to end of line" />
            <RefRow cmd="r" desc="Replace single character under cursor" />
            <RefRow cmd="J" desc="Join current line with the next" />
          </SectionCard>

          {/* 6 — Copy, Paste & Undo */}
          <SectionCard number="6" title="Copy, Paste & Undo">
            <RefRow cmd="yy" desc="Yank (copy) entire line" />
            <RefRow cmd="yw" desc="Yank word from cursor" />
            <RefRow cmd={`y$`} desc="Yank to end of line" />
            <RefRow cmd="p" desc="Paste after cursor" />
            <RefRow cmd="P" desc="Paste before cursor" />
            <RefRow cmd="u" desc="Undo last change" />
            <RefRow cmd="Ctrl+r" desc="Redo last undo" />
            <RefRow cmd="." desc="Repeat last command" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Note:</strong> Deleted text is also yanked — <code>dd</code> then <code>p</code> works as cut-and-paste.
              </div>
            </div>
          </SectionCard>

          {/* 7 — Search & Replace */}
          <SectionCard number="7" title="Search & Replace">
            <RefRow cmd="/pattern" desc="Search forward for pattern" />
            <RefRow cmd="?pattern" desc="Search backward for pattern" />
            <RefRow cmd="n" desc="Repeat search in same direction" />
            <RefRow cmd="N" desc="Repeat search in opposite direction" />
            <RefRow cmd="*" desc="Search forward for word under cursor" />
            <RefRow cmd="#" desc="Search backward for word under cursor" />
            <Code>{`:%s/old/new/g     " Replace all in file
:%s/old/new/gc    " Replace all with confirm
:s/old/new/g      " Replace all in current line
:5,12s/old/new/g  " Replace in lines 5-12`}</Code>
          </SectionCard>

          {/* 8 — Visual Mode Selection */}
          <SectionCard number="8" title="Visual Mode Selection">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">CHAR</Tag>
              <Tag color="#3a6ea5">LINE</Tag>
              <Tag color="#2a7a7a">BLOCK</Tag>
            </div>
            <RefRow cmd="v" desc="Character-wise visual mode" />
            <RefRow cmd="V" desc="Line-wise visual mode" />
            <RefRow cmd="Ctrl+v" desc="Block (column) visual mode" />
            <RefRow cmd="gv" desc="Re-select last visual selection" />
            <Bullet>In Visual mode: <code>d</code> deletes, <code>y</code> yanks, <code>c</code> changes selected text</Bullet>
            <Bullet>Use <code>o</code> to jump to the other end of the selection</Bullet>
          </SectionCard>

          {/* 9 — Text Objects & Motions */}
          <SectionCard number="9" title="Text Objects & Motions">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Text objects combine with operators: <code>d</code>, <code>c</code>, <code>y</code>, <code>v</code>.
            </div>
            <RefRow cmd="iw / aw" desc="Inner word / a word (includes space)" />
            <RefRow cmd={'i" / a"'} desc="Inner quotes / a quoted string" />
            <RefRow cmd={"i( / a("} desc="Inner parens / around parens" />
            <RefRow cmd={`i{ / a{`} desc={"Inner braces / around braces"} />
            <RefRow cmd={"it / at"} desc={"Inner tag / around HTML tag"} />
            <Code>{`ciw   " Change inner word
di"   " Delete inside quotes
ya(   " Yank around parentheses
vi{   " Select inside braces`}</Code>
          </SectionCard>

          {/* 10 — Working with Multiple Files */}
          <SectionCard number="10" title="Working with Multiple Files">
            <RefRow cmd=":e file" desc="Open another file in current buffer" />
            <RefRow cmd=":bn / :bp" desc="Next buffer / previous buffer" />
            <RefRow cmd=":ls" desc="List all open buffers" />
            <RefRow cmd=":bd" desc="Close (delete) current buffer" />
            <RefRow cmd=":sp file" desc="Horizontal split with file" />
            <RefRow cmd=":vsp file" desc="Vertical split with file" />
            <RefRow cmd=":tabe file" desc="Open file in a new tab" />
            <RefRow cmd="gt / gT" desc="Next tab / previous tab" />
          </SectionCard>

          {/* 11 — Essential Ex Commands */}
          <SectionCard number="11" title="Essential Ex Commands">
            <RefRow cmd=":set nu" desc="Show line numbers" />
            <RefRow cmd=":set nonu" desc="Hide line numbers" />
            <RefRow cmd=":set paste" desc="Enter paste mode (no auto-indent)" />
            <RefRow cmd=":!cmd" desc="Run shell command from inside Vim" />
            <RefRow cmd=":r file" desc="Read file contents into buffer" />
            <RefRow cmd=":r !cmd" desc="Insert output of shell command" />
            <RefRow cmd=":noh" desc="Clear search highlighting" />
            <RefRow cmd=":marks" desc="List all marks" />
          </SectionCard>

          {/* 12 — Scrolling & Screen Movement */}
          <SectionCard number="12" title="Scrolling & Screen Movement">
            <RefRow cmd="Ctrl+f" desc="Scroll one full page forward" />
            <RefRow cmd="Ctrl+b" desc="Scroll one full page backward" />
            <RefRow cmd="Ctrl+d" desc="Scroll half page down" />
            <RefRow cmd="Ctrl+u" desc="Scroll half page up" />
            <RefRow cmd="H" desc="Move cursor to top of screen" />
            <RefRow cmd="M" desc="Move cursor to middle of screen" />
            <RefRow cmd="L" desc="Move cursor to bottom of screen" />
            <RefRow cmd="zz" desc="Center screen on cursor line" />
          </SectionCard>
        </div>
      )}

      {/* Page 2: Power User */}
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
          {/* 13 — Window Management */}
          <SectionCard number="13" title="Window Management">
            <RefRow cmd="Ctrl+w s" desc="Split window horizontally" />
            <RefRow cmd="Ctrl+w v" desc="Split window vertically" />
            <RefRow cmd="Ctrl+w w" desc="Cycle between windows" />
            <RefRow cmd="Ctrl+w h/j/k/l" desc="Move to left/down/up/right window" />
            <RefRow cmd="Ctrl+w =" desc="Make all windows equal size" />
            <RefRow cmd="Ctrl+w +" desc="Increase current window height" />
            <RefRow cmd="Ctrl+w -" desc="Decrease current window height" />
            <RefRow cmd="Ctrl+w q" desc="Close current window" />
          </SectionCard>

          {/* 14 — Indentation & Formatting */}
          <SectionCard number="14" title="Indentation & Formatting">
            <RefRow cmd={">>"} desc="Indent current line" />
            <RefRow cmd={"<<"} desc="Unindent current line" />
            <RefRow cmd=">}" desc="Indent paragraph" />
            <RefRow cmd="==" desc="Auto-indent current line" />
            <RefRow cmd="gg=G" desc="Auto-indent entire file" />
            <RefRow cmd="V then >" desc="Indent selected lines in Visual" />
            <Bullet>In Visual mode, <code>{">"}</code> and <code>{"<"}</code> indent/unindent selection</Bullet>
            <Bullet>Use <code>:set expandtab</code> to use spaces instead of tabs</Bullet>
          </SectionCard>

          {/* 15 — Marks & Jumps */}
          <SectionCard number="15" title="Marks & Jumps">
            <RefRow cmd="ma" desc="Set mark 'a' at cursor position" />
            <RefRow cmd="'a" desc="Jump to line of mark 'a'" />
            <RefRow cmd="`a" desc="Jump to exact position of mark 'a'" />
            <RefRow cmd="Ctrl+o" desc="Jump back to previous position" />
            <RefRow cmd="Ctrl+i" desc="Jump forward to next position" />
            <RefRow cmd="''" desc="Jump to last jump location" />
            <Bullet><strong>Lowercase marks</strong> (a-z) are local to the buffer</Bullet>
            <Bullet><strong>Uppercase marks</strong> (A-Z) are global across files</Bullet>
          </SectionCard>

          {/* 16 — Registers & Macros */}
          <SectionCard number="16" title="Registers & Macros">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Registers store text and recorded commands.
            </div>
            <RefRow cmd={'"ay'} desc="Yank into register 'a'" />
            <RefRow cmd={'"ap'} desc="Paste from register 'a'" />
            <RefRow cmd=":reg" desc="Show all register contents" />
            <RefRow cmd="qa" desc="Start recording macro into register 'a'" />
            <RefRow cmd="q" desc="Stop recording macro" />
            <RefRow cmd="@a" desc="Play macro from register 'a'" />
            <RefRow cmd="@@" desc="Replay last macro" />
            <RefRow cmd="5@a" desc="Play macro 'a' five times" />
          </SectionCard>

          {/* 17 — The Dot Command & Repeating */}
          <SectionCard number="17" title="The Dot Command & Repeating">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The <code>.</code> command repeats your last change — one of Vim{"'"}s most powerful features.
            </div>
            <Bullet><code>.</code> repeats the last text-changing command (insert, delete, replace, etc.)</Bullet>
            <Bullet>Combine with <code>n</code> for search-and-repeat: <code>/word</code>, <code>cw</code>replacement<code>Esc</code>, then <code>n.</code> to repeat</Bullet>
            <Bullet>Use counts: <code>3.</code> repeats last change three times</Bullet>
            <Bullet>Design commands to be repeatable — prefer <code>cw</code> over <code>dwi</code> so <code>.</code> does both steps</Bullet>
            <Code>{`/TODO        " Find first match
cwnDONE<Esc> " Change word to DONE
n.           " Jump next match & repeat
n.           " Keep going...`}</Code>
          </SectionCard>

          {/* 18 — Practical .vimrc Essentials */}
          <SectionCard number="18" title={"Practical .vimrc Essentials"}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Drop these into <code>~/.vimrc</code> for a sane remote editing experience.
            </div>
            <Code>{`set number          " Show line numbers
set relativenumber  " Relative line numbers
set tabstop=4       " Tab width = 4 spaces
set shiftwidth=4    " Indent width = 4 spaces
set expandtab       " Use spaces, not tabs
set ignorecase      " Case-insensitive search
set smartcase       " ...unless uppercase used
set incsearch       " Highlight as you type
set hlsearch        " Highlight all matches
syntax on           " Enable syntax highlighting`}</Code>
            <KV k="Location" v={"~/.vimrc (create if it doesn't exist)"} />
            <KV k="Reload" v=":source ~/.vimrc (apply without restarting)" />
          </SectionCard>

          {/* 19 — Survival Workflows */}
          <SectionCard number="19" title="Survival Workflows" span={2}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Common real-world tasks when you SSH into a server and need to get things done fast.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, marginBottom: 4, fontFamily: "'Georgia', serif" }}>Edit a Config File</div>
                <Code>{`sudo vim /etc/nginx/nginx.conf
/server_name   " Find directive
cw newhost.com " Change value
:wq            " Save and exit`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, marginBottom: 4, fontFamily: "'Georgia', serif" }}>Quick Find and Replace</div>
                <Code>{`:%s/localhost/0.0.0.0/g
:wq`}</Code>
                <div style={{ fontSize: 11, color: palette.mid, marginTop: 4 }}>Replaces all occurrences in the entire file.</div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, marginBottom: 4, fontFamily: "'Georgia', serif" }}>Append to a Log or File</div>
                <Code>{`vim /tmp/notes.txt
G              " Go to end of file
o              " Open new line below
(type content)
Esc :wq        " Save and quit`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, marginBottom: 4, fontFamily: "'Georgia', serif" }}>Comment Out a Block</div>
                <Code>{`Ctrl+v         " Block visual mode
jjjj           " Select lines
I              " Insert at start
#              " Type comment char
Esc            " Apply to all lines`}</Code>
              </div>
            </div>
          </SectionCard>

          {/* 20 — Vim Grammar Cheat */}
          <SectionCard number="20" title="Vim Grammar Cheat">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Vim commands follow a grammar: <strong>operator + count + motion</strong>.
            </div>
            {[
              { op: "d", name: "Delete", ex: "d2w (delete 2 words)" },
              { op: "c", name: "Change", ex: "ci\" (change inside quotes)" },
              { op: "y", name: "Yank", ex: "y3j (yank 3 lines down)" },
              { op: "v", name: "Visual", ex: "vaw (select a word)" },
              { op: ">", name: "Indent", ex: ">} (indent paragraph)" },
            ].map(({ op, name, ex }, i) => (
              <div
                key={op}
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
                    fontWeight: 900,
                    color: palette.accent,
                    fontSize: 13,
                    width: 24,
                    textAlign: "center",
                  }}
                >
                  {op}
                </code>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12, width: 60 }}>{name}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{ex}</span>
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
        Vim Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Compatible with Vim 8.x+ and Neovim
        </span>
      </div>
    </div>
  );
}
