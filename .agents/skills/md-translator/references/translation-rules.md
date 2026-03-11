# Universal Translation Rules (50 Rules)

## Section 1: Core Translation Rules (Rules 1-18)

**Rule 1: Understand Before Translating**
Read the entire sentence, paragraph, or document before translating.

**Rule 2: Translate Meaning, Not Words**
Translate ideas and intent, not word-for-word substitution.

**Rule 3: Preserve Original Intent**
Maintain the author's purpose (informative, persuasive, emotional, technical).

**Rule 4: Follow Target Language Grammar**
Apply correct word order, verb conjugation, agreement rules, and sentence structure.

**Rule 5: Restructure When Necessary**
Change sentence structure to sound natural in the target language.

**Rule 6: Maintain Correct Tense and Aspect**
Adapt tense according to how the target language expresses time.

**Rule 7: Adjust Formality Level**
Match the correct politeness or honorific level for the target language.

**Rule 8: Respect Gender and Agreement Rules**
Apply grammatical gender and adjective/verb agreement correctly.

**Rule 9: Avoid Literal Idiom Translation**
Replace idioms with equivalent expressions in the target language.

**Rule 10: Avoid False Friends**
Verify that similar-looking words have the same meaning across languages.

**Rule 11: Resolve Ambiguity**
Clarify meaning from context before translating ambiguous words.

**Rule 12: Preserve Tone and Style**
Maintain the same formality, emotional strength, marketing tone, or academic tone.

**Rule 13: Do Not Add or Remove Meaning**
Do not insert explanations unless required for clarity.

**Rule 14: Localize Units and Formats**
Adapt date formats, currency, measurements, and time formats.

**Rule 15: Preserve Proper Names**
Do not translate brand names unless officially localized.

**Rule 16: Use Standardized Terminology**
Use official terminology for legal, medical, or technical documents.

**Rule 17: Prefer Natural Expression**
Choose phrasing that sounds native, not mechanically translated.

**Rule 18: Proofread the Final Translation**
Review for grammar, spelling, flow, and clarity.

## Section 2: Structure & Formatting Rules (Rules 19-21)

**Rule 19: Preserve Formatting Structure**
Keep paragraph breaks, lists, headings, and indentation intact.

**Rule 20: Maintain Numbering Consistency**
Preserve ordered and unordered list structure.

**Rule 21: Preserve Emphasis**
Maintain bold, italic, and underline formatting exactly as in source.

## Section 3: Markdown Translation Rules (Rules 22-28)

**Rule 22: Do Not Translate Markdown Syntax**
Never translate `#`, `*`, `-`, `>`, `` ``` ``, `---`, or any markdown token.

**Rule 23: Translate Only Human-Readable Text**
Translate visible content, not formatting markers.

**Rule 24: Do Not Modify Code Blocks**
Never translate code examples, commands, file paths, or variable names inside fenced or indented code blocks.

**Rule 25: Preserve Inline Code**
Never translate text inside backticks: `like_this`.

**Rule 26: Preserve Links**
In `[Visible Text](URL)` — translate visible text, never change the URL.

**Rule 27: Preserve Image Paths**
In `![Alt Text](image-path.png)` — translate alt text, never change file paths.

**Rule 28: Preserve Anchor Links**
Never break internal references or anchor IDs.

## Section 4: MDX Translation Rules (Rules 29-35)

**Rule 29: Do Not Translate JSX Syntax**
Never translate `<Component />` or `<Component prop="value" />`.

**Rule 30: Do Not Modify Structural Props or JS Syntax**
Never change prop names, object keys, variable names, component names, booleans, numbers, braces, brackets, commas, or quotes.

**Rule 31: Translate User-Facing Text Nodes and String Literals**
Translate human-readable text inside JSX components AND user-facing string literal values inside JSX/MDX props or JS data structures.

```mdx
<!-- Source -->
<Alert type="warning">
  This action is permanent.
</Alert>

<!-- Translated (Spanish) -->
<Alert type="warning">
  Esta accion es permanente.
</Alert>
```

Translate: "This action is permanent."
Do NOT translate: `Alert`, `type`, `warning`.

```mdx
<!-- Source -->
<Quiz
  title="Assessment"
  questions={[{
    question: "What is Agent Factory?",
    options: ["A framework", "A database"]
  }]}
/>
```

Translate: `"Assessment"`, `"What is Agent Factory?"`, and the option strings.
Do NOT translate: `Quiz`, `title`, `questions`, `question`, `options`, braces, brackets, commas, or quotes.

**Rule 32: Do Not Break JavaScript Expressions**
Never modify `{variable}`, `{count + 1}`, `{user.name}`, or any JS expression.

**Rule 33: Preserve Imports**
Never translate `import Component from '../components/Component'`.

**Rule 34: Preserve Export Statements**
Never modify `export const meta = {...}`.

**Rule 35: Preserve Embedded HTML**
Do not translate HTML tags like `<div className="box">`. Only translate visible text inside.

## Section 5: Technical & File Safety Rules (Rules 36-38)

**Rule 36: Do Not Rename Files Unless Required**
File names remain unchanged unless localization is part of requirements.

**Rule 37: Do Not Break Compilation**
Translation of MDX must not cause syntax errors. Validate structure after translation.

**Rule 38: Keep Special Characters Intact**
Do not alter escape characters, symbols, or encoding-sensitive text.

## Section 6: Quality Control Rules (Rules 39-41)

**Rule 39: Read Translation as Native Reader**
Ensure it sounds natural and fluent to a native speaker.

**Rule 40: Validate Contextual Accuracy**
Ensure meaning matches original context throughout.

**Rule 41: Ensure Consistency**
Terminology must remain consistent across the entire file.

## Section 7: Bidirectional (BiDi) Text Safety Rules (Rules 43-50)

**These rules apply ONLY when the target language is RTL (Arabic, Urdu, Hebrew, Persian/Farsi).**

**Rule 43: Never Start an RTL Paragraph with an LTR Word**
If a sentence begins with an English term (acronym, product name, technical word), restructure so an RTL word comes first. The Unicode BiDi Algorithm uses the first strong character to determine paragraph base direction. An LTR word at position 0 causes the renderer to anchor it to the left margin and wrap the RTL text incorrectly.

Bad: `SaaS کے دور نے...` → Renderer anchors "SaaS" to left margin.
Good: `دورِ SaaS نے...` → RTL word first, "SaaS" embedded naturally.

**Rule 44: Never Start a List Item or Heading with an LTR Word**
Same principle as Rule 43 but for structural elements. List items (`-`, `*`, `1.`) and headings (`#`, `##`) reset the BiDi context. An LTR word immediately after the marker creates an LTR island.

Bad: `- Claude Code ایک ٹول ہے`
Good: `- یہ ٹول Claude Code ہے`

**Rule 45: Buffer Parenthesized English Terms with RTL Context**
Parentheses, brackets, and commas are "weak" Unicode characters — they take the direction of the nearest strong character. When they sit between RTL and LTR text, the renderer flips them. Ensure English words inside parentheses have RTL words on **both sides**.

Bad: `مہارتوں ،(specs)` → comma and parens flip.
Good: `مہارتوں (specs) کو` → RTL words buffer both sides.

**Rule 46: Preserve Meaning When Restructuring for BiDi**
Rules 43-45 require restructuring sentences. The restructured sentence MUST preserve identical meaning to the source. If restructuring would change the meaning, keep the original word order and add a Unicode Right-to-Left Mark (U+200F, `‏`) before the LTR word as a fallback.

Fallback: `‏SaaS کے دور نے...` — the invisible RLM forces RTL context. Use this ONLY when restructuring is impossible without meaning change.

**Rule 47: Handle Mixed-Direction Bold/Italic Correctly**
When bold or italic markers wrap a phrase mixing RTL and LTR text, the entire bold span should be readable in RTL flow. Place the opening `**` adjacent to an RTL character, not an LTR character.

Bad: `**SDD طریقہ کار**` → bold may not render correctly.
Good: `**طریقہ کار SDD**` → bold opens with RTL character.

**Rule 48: Validate Colon and Dash Placement**
In RTL languages, colons (`:`) and dashes (`—`, `-`) should appear on the left side of the preceding text (visually). When a colon follows an English word in an RTL paragraph, it may appear on the wrong side. Buffer with RTL text or restructure.

Bad: `Claude Code: ایک طاقتور ٹول` → colon misplaced.
Good: `طاقتور ٹول ہے Claude Code` or restructure to avoid colon after English.

**Rule 49: Test Inline Code Adjacent to RTL Text**
Backtick-wrapped inline code (`like_this`) is LTR. When inline code appears in an RTL sentence, the surrounding RTL text and punctuation may misrender. Ensure inline code is buffered by RTL words, not punctuation.

Bad: `استعمال کریں `npm install` ،` → comma flips.
Good: `یہ کمانڈ `npm install` استعمال کریں` → RTL buffers both sides.

**Rule 50: Scan Final Output for BiDi Violations**
After completing the translation, perform a dedicated BiDi scan:
1. Check every paragraph's first word — is it RTL? If not, restructure.
2. Check every list item's first word — is it RTL? If not, restructure.
3. Check every heading's first word (after `#`) — is it RTL? If not, restructure.
4. Check every parenthesized English term — are RTL words on both sides? If not, buffer.
5. Check commas/colons adjacent to English — are they rendering correctly? If not, restructure.

This scan is **mandatory** for RTL translations and is separate from the general quality validation.

---

## Master Rule

**Rule 42: Meaning, Accuracy, Structure, and Technical Integrity Must All Be Preserved Simultaneously.**

A correct translation: preserves meaning, follows grammar, sounds natural, keeps formatting, and does not break code.

**For RTL languages, add**: ...and does not break bidirectional text rendering (Rules 43-50).
