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
  const pages = ["Page 1: Foundations", "Page 2: Productivity"];

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
          Modes · Navigation · Editing · Search · Remote Server Essentials
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
          {/* Section 1 — Vim Modes */}
          <SectionCard number="1" title="Understanding Vim Modes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Vim is a <strong>modal editor</strong> — keys do different things depending on the active mode.
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>Normal</Tag>
              <Tag color="#3a6ea5">Insert</Tag>
              <Tag color="#7a5a8a">Visual</Tag>
              <Tag color="#5a8a3c">Command</Tag>
            </div>
            {[
              { mode: "Normal", key: "Esc", desc: "Default mode — navigate & command" },
              { mode: "Insert", key: "i / a / o", desc: "Type text into the buffer" },
              { mode: "Visual", key: "v / V / Ctrl-v", desc: "Select text for operations" },
              { mode: "Command", key: ":", desc: "Execute Ex commands" },
            ].map(({ mode, key, desc }, i) => (
              <div
                key={mode}
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 12, width: 60 }}>{mode}</span>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: palette.dark, width: 80 }}>{key}</code>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
              </div>
            ))}
            <Bullet>Press <code>Esc</code> twice if unsure which mode you're in</Bullet>
          </SectionCard>

          {/* Section 2 — Opening & Quitting */}
          <SectionCard number="2" title="Open, Save & Quit">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The commands you'll use every single session.
            </div>
            <RefRow cmd=":w" desc="Save (write) the current file" />
            <RefRow cmd=":q" desc="Quit (fails if unsaved changes)" />
            <RefRow cmd=":wq" desc="Save and quit" />
            <RefRow cmd=":q!" desc="Force quit — discard all changes" />
            <RefRow cmd=":x" desc="Save and quit (only writes if changed)" />
            <RefRow cmd="ZZ" desc="Same as :x — save & quit from Normal" />
            <RefRow cmd="ZQ" desc="Same as :q! — force quit from Normal" />
            <RefRow cmd=":w file.txt" desc="Save as a different filename" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>Stuck? Can't quit?</div>
              <div style={{ fontSize: 11, color: palette.mid }}>Press <code>Esc Esc</code> then type <code>:q!</code> and Enter</div>
            </div>
          </SectionCard>

          {/* Section 3 — Cursor Navigation */}
          <SectionCard number="3" title="Cursor Navigation">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Character</Tag>
              <Tag color="#5a8a3c">Word</Tag>
              <Tag color="#7a5a8a">Line</Tag>
              <Tag color="#8a6a3a">Screen</Tag>
            </div>
            <RefRow cmd="h j k l" desc="Left, down, up, right" />
            <RefRow cmd="w / W" desc="Next word start (W = WORD)" />
            <RefRow cmd="b / B" desc="Prev word start (B = WORD)" />
            <RefRow cmd="e / E" desc="Next word end (E = WORD)" />
            <RefRow cmd="0" desc="Start of line" />
            <RefRow cmd="^" desc="First non-blank on line" />
            <RefRow cmd="$" desc="End of line" />
            <RefRow cmd="gg" desc="Go to first line of file" />
            <RefRow cmd="G" desc="Go to last line of file" />
            <RefRow cmd="42G" desc="Go to line 42" />
            <RefRow cmd="Ctrl-d" desc="Scroll half-page down" />
            <RefRow cmd="Ctrl-u" desc="Scroll half-page up" />
            <RefRow cmd="H / M / L" desc="Jump to top / middle / bottom of screen" />
          </SectionCard>

          {/* Section 4 — Inserting Text */}
          <SectionCard number="4" title="Entering Insert Mode">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Multiple ways to start typing — each places your cursor differently.
            </div>
            <RefRow cmd="i" desc="Insert before cursor" />
            <RefRow cmd="I" desc="Insert at beginning of line" />
            <RefRow cmd="a" desc="Append after cursor" />
            <RefRow cmd="A" desc="Append at end of line" />
            <RefRow cmd="o" desc="Open new line below, enter Insert" />
            <RefRow cmd="O" desc="Open new line above, enter Insert" />
            <RefRow cmd="s" desc="Delete char under cursor, enter Insert" />
            <RefRow cmd="S" desc="Delete entire line, enter Insert" />
            <RefRow cmd="C" desc="Delete from cursor to EOL, enter Insert" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Tip:</strong> Use <code>A</code> to append to a line and <code>o</code> to start a new line — the two most common entry points.
              </div>
            </div>
          </SectionCard>

          {/* Section 5 — Deleting & Changing */}
          <SectionCard number="5" title="Delete, Change & Replace">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Operators compose with motions: <code>d</code> deletes, <code>c</code> changes (delete + enter Insert).
            </div>
            <RefRow cmd="x" desc="Delete character under cursor" />
            <RefRow cmd="X" desc="Delete character before cursor" />
            <RefRow cmd="dd" desc="Delete entire line" />
            <RefRow cmd="dw" desc="Delete from cursor to next word" />
            <RefRow cmd="d$  or  D" desc="Delete from cursor to end of line" />
            <RefRow cmd="d0" desc="Delete from cursor to start of line" />
            <RefRow cmd="cc" desc="Change entire line" />
            <RefRow cmd="cw" desc="Change word from cursor" />
            <RefRow cmd="r" desc="Replace single char (stays in Normal)" />
            <RefRow cmd="R" desc="Enter Replace mode (overtype)" />
            <RefRow cmd="3dd" desc="Delete 3 lines (count prefix works)" />
            <Bullet>Deleted text goes into the default register — paste it back with <code>p</code></Bullet>
          </SectionCard>

          {/* Section 6 — Undo, Redo & Repeat */}
          <SectionCard number="6" title="Undo, Redo & Repeat">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Vim has unlimited undo history within a session. Persist it with <code>undofile</code>.
            </div>
            <RefRow cmd="u" desc="Undo last change" />
            <RefRow cmd="Ctrl-r" desc="Redo (undo the undo)" />
            <RefRow cmd="." desc="Repeat last change command" />
            <RefRow cmd="5u" desc="Undo last 5 changes" />
            <RefRow cmd="U" desc="Undo all changes on current line" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>The dot command</strong> is incredibly powerful — make a change once, then <code>.</code> repeats it anywhere. Combine with <code>n</code> (next search match) for find-and-replace by hand.
              </div>
            </div>
            <div style={{ marginTop: 6 }}>
              <KV k="Persistent undo" v="Add set undofile to .vimrc" />
              <KV k="Undo tree" v="Vim tracks branches — use :undolist" />
            </div>
          </SectionCard>

          {/* Section 7 — Copy & Paste */}
          <SectionCard number="7" title="Yank (Copy) & Put (Paste)">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Vim uses <strong>yank</strong> (copy) and <strong>put</strong> (paste). Deleted text is also yanked.
            </div>
            <RefRow cmd="yy" desc="Yank (copy) entire line" />
            <RefRow cmd="yw" desc="Yank word from cursor" />
            <RefRow cmd="y$" desc="Yank to end of line" />
            <RefRow cmd="p" desc="Put (paste) after cursor" />
            <RefRow cmd="P" desc="Put (paste) before cursor" />
            <RefRow cmd={'"ayy'} desc='Yank line into register "a"' />
            <RefRow cmd={'"ap'} desc='Paste from register "a"' />
            <RefRow cmd={'"0p'} desc="Paste last yanked text (not deleted)" />
            <RefRow cmd=":reg" desc="Show all register contents" />
            <Bullet>Use <code>"+y</code> and <code>"+p</code> for system clipboard (when available)</Bullet>
          </SectionCard>

          {/* Section 8 — Search & Replace */}
          <SectionCard number="8" title="Search & Replace">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Search</Tag>
              <Tag color="#5a8a3c">Replace</Tag>
              <Tag color="#7a5a8a">Flags</Tag>
            </div>
            <RefRow cmd="/pattern" desc="Search forward" />
            <RefRow cmd="?pattern" desc="Search backward" />
            <RefRow cmd="n / N" desc="Next / previous match" />
            <RefRow cmd="*" desc="Search word under cursor (forward)" />
            <RefRow cmd="#" desc="Search word under cursor (backward)" />
            <Code>{`:%s/old/new/g      " Replace all in file
:%s/old/new/gc     " Replace all, confirm each
:s/old/new/g       " Replace all in current line
:5,20s/old/new/g   " Replace in lines 5-20`}</Code>
            <div style={{ marginTop: 6 }}>
              <KV k="g flag" v="All occurrences on the line" />
              <KV k="c flag" v="Confirm each replacement" />
              <KV k="i flag" v="Case-insensitive match" />
            </div>
          </SectionCard>

          {/* Section 9 — Visual Mode */}
          <SectionCard number="9" title="Visual Mode Selection">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Select text visually, then apply an operator to the selection.
            </div>
            <RefRow cmd="v" desc="Character-wise visual mode" />
            <RefRow cmd="V" desc="Line-wise visual mode" />
            <RefRow cmd="Ctrl-v" desc="Block (column) visual mode" />
            <RefRow cmd="gv" desc="Reselect last visual selection" />
            <RefRow cmd="o" desc="Jump to other end of selection" />
            <div style={{ fontSize: 12.5, color: palette.mid, marginTop: 6, marginBottom: 4 }}>
              <strong style={{ color: palette.dark }}>After selecting, use:</strong>
            </div>
            <RefRow cmd="d" desc="Delete selection" />
            <RefRow cmd="y" desc="Yank selection" />
            <RefRow cmd="c" desc="Change selection (delete + Insert)" />
            <RefRow cmd=">" desc="Indent selection" />
            <RefRow cmd="<" desc="Unindent selection" />
            <RefRow cmd="U / u" desc="Uppercase / lowercase selection" />
          </SectionCard>

          {/* Section 10 — Text Objects */}
          <SectionCard number="10" title="Text Objects">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Text objects let you operate on structured chunks. Use with <code>d</code>, <code>c</code>, <code>y</code>, or <code>v</code>.
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">i = inner</Tag>
              <Tag color="#2a7a7a">a = around</Tag>
            </div>
            <RefRow cmd="diw" desc='Delete inner word (no spaces)' />
            <RefRow cmd="daw" desc="Delete a word (with trailing space)" />
            <RefRow cmd='ci"' desc="Change inside double quotes" />
            <RefRow cmd="da(" desc="Delete around parentheses" />
            <RefRow cmd="cit" desc="Change inside HTML/XML tag" />
            <RefRow cmd="dip" desc="Delete inner paragraph" />
            <RefRow cmd='yi{' desc="Yank inside curly braces" />
            <RefRow cmd='va"' desc='Visual select around double quotes' />
            <Bullet><code>ci"</code> is one of the most useful Vim commands — change quoted string content instantly</Bullet>
          </SectionCard>

          {/* Section 11 — Marks & Jumps */}
          <SectionCard number="11" title="Marks & Jump List">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Mark positions to jump back to them. Vim also tracks your jump history.
            </div>
            <RefRow cmd="ma" desc="Set mark 'a' at cursor position" />
            <RefRow cmd="'a" desc="Jump to line of mark 'a'" />
            <RefRow cmd="`a" desc="Jump to exact position of mark 'a'" />
            <RefRow cmd="''" desc="Jump to position before last jump" />
            <RefRow cmd="Ctrl-o" desc="Jump to older position in jump list" />
            <RefRow cmd="Ctrl-i" desc="Jump to newer position in jump list" />
            <RefRow cmd=":marks" desc="List all current marks" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.accent }}>Lowercase marks</strong> (a-z) are local to a file. <strong style={{ color: palette.accent }}>Uppercase marks</strong> (A-Z) work across files — great for jumping between configs on a server.
              </div>
            </div>
          </SectionCard>

          {/* Section 12 — Indentation & Formatting */}
          <SectionCard number="12" title="Indent & Format">
            <RefRow cmd=">>" desc="Indent current line" />
            <RefRow cmd="<<" desc="Unindent current line" />
            <RefRow cmd="3>>" desc="Indent 3 lines" />
            <RefRow cmd=">}" desc="Indent to end of paragraph" />
            <RefRow cmd="==" desc="Auto-indent current line" />
            <RefRow cmd="gg=G" desc="Auto-indent entire file" />
            <RefRow cmd="V then =" desc="Auto-indent visual selection" />
            <RefRow cmd="gq" desc="Format (wrap) text to textwidth" />
            <RefRow cmd="J" desc="Join current line with next line" />
            <div style={{ marginTop: 6 }}>
              <KV k="Set indent width" v=":set shiftwidth=4" />
              <KV k="Use spaces" v=":set expandtab" />
              <KV k="Show whitespace" v=":set list" />
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Productivity */}
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
          {/* Section 13 — Buffers & Files */}
          <SectionCard number="13" title="Buffers & Files">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Buffers are in-memory copies of files. You can have many open at once.
            </div>
            <RefRow cmd=":e file.txt" desc="Open file in current window" />
            <RefRow cmd=":ls" desc="List all open buffers" />
            <RefRow cmd=":bn" desc="Next buffer" />
            <RefRow cmd=":bp" desc="Previous buffer" />
            <RefRow cmd=":bd" desc="Delete (close) current buffer" />
            <RefRow cmd=":b3" desc="Switch to buffer #3" />
            <RefRow cmd=":b name" desc="Switch to buffer matching name" />
            <RefRow cmd=":wa" desc="Write (save) all modified buffers" />
            <RefRow cmd=":e!" desc="Reload current file from disk" />
            <Bullet>Use <code>:e scp://host//path/file</code> to edit remote files via SCP</Bullet>
          </SectionCard>

          {/* Section 14 — Splits & Windows */}
          <SectionCard number="14" title="Splits & Windows">
            <RefRow cmd=":sp file" desc="Horizontal split (or :split)" />
            <RefRow cmd=":vsp file" desc="Vertical split (or :vsplit)" />
            <RefRow cmd="Ctrl-w h/j/k/l" desc="Move between splits" />
            <RefRow cmd="Ctrl-w w" desc="Cycle to next window" />
            <RefRow cmd="Ctrl-w =" desc="Equal-size all windows" />
            <RefRow cmd="Ctrl-w _" desc="Maximize current window height" />
            <RefRow cmd="Ctrl-w |" desc="Maximize current window width" />
            <RefRow cmd="Ctrl-w q" desc="Close current window" />
            <RefRow cmd="Ctrl-w o" desc="Close all windows except current" />
            <RefRow cmd="Ctrl-w r" desc="Rotate windows downward" />
            <Bullet>Use <code>:vsp</code> for side-by-side file comparison on servers</Bullet>
          </SectionCard>

          {/* Section 15 — Tabs */}
          <SectionCard number="15" title="Tabs">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Tabs are viewports that can each contain multiple splits.
            </div>
            <RefRow cmd=":tabnew file" desc="Open file in new tab" />
            <RefRow cmd=":tabnew" desc="Open empty new tab" />
            <RefRow cmd="gt" desc="Go to next tab" />
            <RefRow cmd="gT" desc="Go to previous tab" />
            <RefRow cmd="3gt" desc="Go to tab number 3" />
            <RefRow cmd=":tabclose" desc="Close current tab" />
            <RefRow cmd=":tabonly" desc="Close all other tabs" />
            <RefRow cmd=":tabmove 0" desc="Move current tab to first position" />
            <Bullet>Prefer <strong>buffers</strong> over tabs for multiple files — tabs are better for separate contexts</Bullet>
          </SectionCard>

          {/* Section 16 — Command-Line Mode */}
          <SectionCard number="16" title="Command-Line Mode">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Run shell commands and Ex commands without leaving Vim.
            </div>
            <RefRow cmd=":!cmd" desc="Run shell command (e.g., :!ls)" />
            <RefRow cmd=":r !cmd" desc="Insert command output into buffer" />
            <RefRow cmd=":r file" desc="Insert file contents at cursor" />
            <RefRow cmd=":w !sudo tee %" desc="Save file when you forgot sudo" />
            <RefRow cmd=":!" desc="Repeat last shell command" />
            <RefRow cmd=":shell" desc="Open a shell (exit to return)" />
            <RefRow cmd="Ctrl-z" desc="Suspend Vim, fg to resume" />
            <Code>{`:r !date           " Insert current date
:r !curl -s url    " Insert URL contents
:%!sort            " Sort entire file
:%!python3 -m json.tool  " Pretty-print JSON`}</Code>
          </SectionCard>

          {/* Section 17 — Macros */}
          <SectionCard number="17" title="Macros">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Record a sequence of keystrokes and replay them — batch editing at its finest.
            </div>
            <RefRow cmd="qa" desc='Start recording macro into register "a"' />
            <RefRow cmd="q" desc="Stop recording" />
            <RefRow cmd="@a" desc='Play macro from register "a"' />
            <RefRow cmd="@@" desc="Replay last played macro" />
            <RefRow cmd="10@a" desc="Play macro 10 times" />
            <Code>{`Example: add semicolons to 50 lines
  qa       " Start recording into 'a'
  A;       " Append semicolon at end
  Esc      " Back to Normal
  j        " Move down one line
  q        " Stop recording
  49@a     " Repeat 49 more times`}</Code>
            <Bullet>Macros can be edited: paste register contents, modify, then yank back</Bullet>
          </SectionCard>

          {/* Section 18 — Essential .vimrc */}
          <SectionCard number="18" title="Essential .vimrc Settings">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Display</Tag>
              <Tag color="#5a8a3c">Editing</Tag>
              <Tag color="#7a5a8a">Search</Tag>
              <Tag color="#8a6a3a">UX</Tag>
            </div>
            <Code>{`set number            " Show line numbers
set relativenumber    " Relative line numbers
set tabstop=4         " Tab = 4 spaces display
set shiftwidth=4      " Indent = 4 spaces
set expandtab         " Use spaces, not tabs
set autoindent        " Copy indent from prev line
set hlsearch          " Highlight search results
set incsearch         " Search as you type
set ignorecase        " Case-insensitive search
set smartcase         " Case-sensitive if uppercase
set wildmenu          " Tab completion in commands
set mouse=a           " Enable mouse support
syntax on             " Syntax highlighting
set clipboard=unnamed " Use system clipboard`}</Code>
            <Bullet>Create with <code>vim ~/.vimrc</code> — takes effect on next Vim launch</Bullet>
            <Bullet>Minimal server config: <code>set number</code>, <code>syntax on</code>, <code>set hlsearch</code></Bullet>
          </SectionCard>

          {/* Section 19 — Remote Server Workflow */}
          <SectionCard number="19" title="Remote Server Workflow">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">SSH</Tag>
              <Tag color="#2a7a7a">Server</Tag>
              <Tag color="#8a6a3a">Recovery</Tag>
            </div>
            <Bullet><strong>SSH + Vim:</strong> <code>ssh user@host</code> then <code>vim /path/to/file</code></Bullet>
            <Bullet><strong>Edit remote file:</strong> <code>vim scp://user@host//etc/nginx/nginx.conf</code></Bullet>
            <Bullet><strong>Slow connection?</strong> Use <code>ssh -C</code> for compression</Bullet>
            <Bullet><strong>Lost connection?</strong> Vim saves swap files — recover with <code>vim -r file</code></Bullet>
            <Bullet><strong>Forgot sudo?</strong> Save with <code>:w !sudo tee %</code></Bullet>
            <Bullet><strong>Use tmux/screen:</strong> Detach safely if connection drops</Bullet>
            <Code>{`# Recover after disconnect:
vim -r file.txt         # Recover from swap
vim -r                  # List all swap files

# Compare files on server:
vimdiff file1 file2     # Side-by-side diff

# Quick edit without full session:
vim +42 file.txt        # Open at line 42
vim +/pattern file.txt  # Open at first match`}</Code>
          </SectionCard>

          {/* Section 20 — Find in Files */}
          <SectionCard number="20" title="Find in Files">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Search across multiple files without leaving Vim.
            </div>
            <RefRow cmd=":vimgrep /pat/ **/*" desc="Search all files recursively" />
            <RefRow cmd=":cn" desc="Jump to next match" />
            <RefRow cmd=":cp" desc="Jump to previous match" />
            <RefRow cmd=":copen" desc="Open quickfix window with all matches" />
            <RefRow cmd=":cclose" desc="Close quickfix window" />
            <Code>{`:vimgrep /TODO/ **/*.py    " Find TODOs in Python files
:grep -r "error" .        " Use external grep
:lgrep pattern %          " Search current file, use location list`}</Code>
            <Bullet>On servers, <code>:grep</code> uses the system grep — faster for large codebases</Bullet>
          </SectionCard>

          {/* Section 21 — Registers Deep Dive */}
          <SectionCard number="21" title="Registers Deep Dive">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Vim has 48+ registers for storing text. Think of them as named clipboards.
            </div>
            {[
              { reg: '"', desc: "Default register (last delete/yank)" },
              { reg: '"0', desc: "Last yank (not affected by delete)" },
              { reg: '"a-z', desc: "Named registers (you control)" },
              { reg: '"A-Z', desc: "Append to named register" },
              { reg: '"+', desc: "System clipboard" },
              { reg: '"/', desc: "Last search pattern" },
              { reg: '".', desc: "Last inserted text" },
              { reg: '":', desc: "Last Ex command" },
              { reg: '"%', desc: "Current filename" },
            ].map(({ reg, desc }, i) => (
              <div
                key={reg}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                }}
              >
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: palette.accent, fontWeight: 700, width: 40 }}>{reg}</code>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 22 — Folding */}
          <SectionCard number="22" title="Folding">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Collapse sections of code to focus on what matters.
            </div>
            <RefRow cmd="zf" desc="Create fold (use with motion/visual)" />
            <RefRow cmd="zo" desc="Open fold under cursor" />
            <RefRow cmd="zc" desc="Close fold under cursor" />
            <RefRow cmd="za" desc="Toggle fold open/closed" />
            <RefRow cmd="zR" desc="Open ALL folds in file" />
            <RefRow cmd="zM" desc="Close ALL folds in file" />
            <RefRow cmd="zd" desc="Delete fold under cursor" />
            <div style={{ marginTop: 6 }}>
              <KV k="Manual" v="set foldmethod=manual (default)" />
              <KV k="Indent" v="set foldmethod=indent" />
              <KV k="Syntax" v="set foldmethod=syntax" />
            </div>
          </SectionCard>

          {/* Section 23 — Vim Survival Combos */}
          <SectionCard number="23" title="Power Combos">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Compound commands that make experienced Vim users fast.
            </div>
            <RefRow cmd="ciw" desc="Change inner word (delete + type)" />
            <RefRow cmd="dap" desc="Delete around paragraph" />
            <RefRow cmd="yip" desc="Yank inner paragraph" />
            <RefRow cmd="ddp" desc="Swap current line with next" />
            <RefRow cmd="xp" desc="Swap two characters" />
            <RefRow cmd="ea" desc="Append at end of word" />
            <RefRow cmd="ggdG" desc="Delete entire file contents" />
            <RefRow cmd="ggVG" desc="Select entire file" />
            <RefRow cmd="gUiw" desc="Uppercase current word" />
            <RefRow cmd="~" desc="Toggle case of character" />
            <RefRow cmd="Ctrl-a / Ctrl-x" desc="Increment / decrement number" />
            <RefRow cmd="das" desc="Delete a sentence" />
          </SectionCard>

          {/* Section 24 — Quick Reference Decision Guide */}
          <SectionCard number="24" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Quick Edit", when: "Change one line or value", best: "Use i to insert, fix it, :wq to save & quit", icon: "1" },
                { title: "Config Files", when: "Edit nginx, systemd, cron", best: "Open with vim, use /search to find sections, :wq", icon: "2" },
                { title: "Log Analysis", when: "Reading through log files", best: "Use /pattern, n/N to navigate, G for end of file", icon: "3" },
                { title: "Bulk Changes", when: "Same edit across many lines", best: "Record macro with qa, replay with @a, or use :%s", icon: "4" },
                { title: "Multi-File Edit", when: "Edit several configs at once", best: "Use :vsp for splits, Ctrl-w to navigate between them", icon: "5" },
                { title: "Code Review", when: "Reading code on server", best: "Use vimdiff, zf for folding, marks for bookmarks", icon: "6" },
                { title: "Emergency Fix", when: "Production is down", best: "vim file, i to edit, Esc :wq — keep it simple", icon: "7" },
                { title: "File Recovery", when: "Lost connection mid-edit", best: "vim -r file to recover from swap file", icon: "8" },
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
                  <div
                    style={{
                      background: palette.accent,
                      color: "#fff",
                      width: 22,
                      height: 22,
                      borderRadius: 5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: 12,
                      fontFamily: "'Georgia', serif",
                      marginBottom: 4,
                    }}
                  >
                    {icon}
                  </div>
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
        Vim Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Essential Vim for remote server editing — vi/vim 8.x+
        </span>
      </div>
    </div>
  );
}
