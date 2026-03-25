# Glossary: Urdu (ur)

## Convention

| Convention | Rule |
|------------|------|
| **[EN]** | Keep in English |
| **[TR]** | Transliterate to Urdu script |
| **[TL]** | Fully translate to Urdu |
| **First use** | اردو اصطلاح کو بطورِ پیش فرض استعمال کریں۔ `(English term)` صرف اسی وقت پہلی بار شامل کریں جب وضاحت، تلاش پذیری، یا repo convention اس کا تقاضا کرے۔ |

## Urdu Typography Rules (CRITICAL)

Urdu script (Naskh/Nastaliq) has fundamentally different typography from Latin. These rules override Rule 21 for Urdu:

### 1. NO ITALIC — Ever
Urdu/Naskh script has NO italic variant. The `*italic*` marker must be **removed entirely** in Urdu translation. Do NOT preserve `*single asterisk*` emphasis.

| Source (English) | Bad (Urdu) | Good (Urdu) |
|-----------------|------------|-------------|
| `*emphasis here*` | `*زور یہاں*` | `زور یہاں` |
| `_also italic_` | `_بھی ترچھا_` | `بھی ترچھا` |

**What to do with English italic text:**
- If the italic conveys **emphasis**: Remove markers, the sentence context carries the emphasis naturally in Urdu
- If the italic marks a **term/definition**: Use `**bold**` instead (one level up)
- If the italic marks a **book title or foreign word**: Keep plain — Urdu readers don't need italic for this

### 2. Bold — Use Sparingly
Bold (`**text**`) works in Naskh but should be used **less** than in English:
- Keep bold for **key terms on first introduction** only
- Keep bold for **headings** (these are already bold via heading level)
- **Remove bold** from phrases that are bold in English just for visual emphasis — Urdu achieves emphasis through word choice and sentence structure
- **Never double-emphasize**: If English has `***bold italic***`, use just `**bold**` in Urdu

| Source (English) | Bad (Urdu) | Good (Urdu) |
|-----------------|------------|-------------|
| `**very important** point` | `**بہت اہم** نکتہ` | `بہت اہم نکتہ` (plain — emphasis is in the words) |
| `***bold and italic***` | `***موٹا اور ترچھا***` | `**موٹا**` (bold only, no italic) |
| `**Digital FTE** (first use)` | `**ڈیجیٹل ایف ٹی ای**` | `**ڈیجیٹل ایف ٹی ای**` (keep — first use of key term) |

### 3. Inline HTML styles
When translating JSX/HTML with inline `fontStyle: 'italic'`, change to `fontStyle: 'normal'` for Urdu. Urdu fonts render italic as broken/slanted which looks wrong.

### 4. Lists — Plain Style
Urdu list items should be plain text. Don't carry over bold from English list items unless the bold marks a key term definition.

| Source (English) | Bad (Urdu) | Good (Urdu) |
|-----------------|------------|-------------|
| `- **Step 1**: Do X` | `- **مرحلہ 1**: یہ کریں` | `- مرحلہ 1: یہ کریں` |
| `- **Key concept**: Agent` | `- **کلیدی تصور**: ایجنٹ` | `- **کلیدی تصور**: ایجنٹ` (keep — defines term) |

### 5. Blockquotes — Remove Extra Bold
English blockquotes often use bold for the entire content. In Urdu, blockquotes should have plain body text with only key terms bolded.

### 6. Emphasis Hierarchy in Urdu
Instead of bold/italic, Urdu uses these for emphasis:
1. **Word choice** — stronger words convey emphasis naturally
2. **Bold** — only for key technical terms on first introduction
3. **Heading level** — structural emphasis via h1-h6
4. **Quotation marks** — for terms being defined: «اصطلاح»
5. Plain text for everything else — Urdu prose is meant to flow clean

## BiDi (Bidirectional) Text Conventions

Urdu is RTL. English terms embedded in Urdu text trigger BiDi rendering issues. Follow these conventions strictly:

| Convention | Rule | Example |
|------------|------|---------|
| **Paragraph start** | Never start a paragraph with an English word. Lead with Urdu. | Bad: `SaaS کے دور نے` / Good: `دورِ SaaS نے` |
| **List item start** | Never start a list item with an English word. Lead with Urdu. | Bad: `- Claude Code ایک ٹول ہے` / Good: `- یہ ٹول Claude Code ہے` |
| **Heading start** | Never start a heading with an English word after `#`. Lead with Urdu. | Bad: `## SDD طریقہ کار` / Good: `## طریقہ کار SDD` |
| **Parenthesized English** | Buffer with Urdu words on both sides. | Bad: `مہارتوں ،(specs)` / Good: `مہارتوں (specs) کو` |
| **Bold with English** | Open `**` adjacent to Urdu character. | Bad: `**SDD طریقہ**` / Good: `**طریقہ SDD**` |
| **RLM fallback** | If restructuring changes meaning, prepend U+200F (‏) before English word. | `‏SaaS کے دور نے` (only as last resort) |

## Core Technical Terms

| English Term | Urdu | Convention | Notes |
|-------------|------|------------|-------|
| AI Agent | اے آئی ایجنٹ | [TR] | |
| Skill | مہارت | [TL] | In context of Claude Code skills |
| Subagent | Subagent | [EN] | Keep as-is |
| Prompt | پرامپٹ | [TR] | |
| Specification | تفصیلات | [TL] | |
| Repository | ریپو | [TR] | Short form common |
| Commit | Commit | [EN] | Git term |
| Branch | Branch | [EN] | Git term |
| Pull Request | Pull Request | [EN] | Git term |
| Merge | Merge | [EN] | Git term |
| API | API | [EN] | Acronym |
| CLI | CLI | [EN] | Acronym |
| IDE | IDE | [EN] | Acronym |
| Framework | فریم ورک | [TR] | |
| Library | لائبریری | [TR] | |
| Module | ماڈیول | [TR] | |
| Component | کمپوننٹ | [TR] | |
| Function | فنکشن | [TR] | |
| Variable | متغیر | [TL] | |
| Parameter | پیرامیٹر | [TR] | |
| Deployment | تعیناتی | [TL] | |
| Pipeline | پائپ لائن | [TR] | |
| Workflow | ورک فلو | [TR] | |
| Configuration | ترتیبات | [TL] | |
| Authentication | تصدیق | [TL] | |
| Authorization | اجازت | [TL] | |
| Markdown | Markdown | [EN] | Format name |
| MDX | MDX | [EN] | Format name |
| YAML | YAML | [EN] | Format name |
| JSON | JSON | [EN] | Format name |
| LLM | LLM | [EN] | Acronym — Large Language Model |
| Large Language Model | بڑا زبانی ماڈل | [TL] | Full form of LLM |
| Token | ٹوکن | [TR] | ML token |
| Context Window | سیاق کی کھڑکی | [TL] | AI context window |
| Model | ماڈل | [TR] | In AI/ML context |
| Tool | ٹول | [TR] | AI agent tool/function |
| Agent Loop | ایجنٹ لوپ | [TR] | Core agentic loop |
| Orchestration | آرکیسٹریشن | [TR] | Multi-agent coordination |
| Multi-agent | Multi-agent | [EN] | Technical term |
| Autonomy | خودمختاری | [TL] | |
| Inference | استنتاج | [TL] | ML inference |
| Debugging | ڈیبگنگ | [TR] | |
| Interface | انٹرفیس | [TR] | |
| Integration | انضمام | [TL] | |
| Automation | خودکاری | [TL] | |
| Testing | جانچ | [TL] | |
| Documentation | دستاویزات | [TL] | |
| Output | آؤٹ پٹ | [TR] | |
| Input | ان پٹ | [TR] | |
| Server | سرور | [TR] | |
| Database | ڈیٹابیس | [TR] | |
| Frontend | Frontend | [EN] | |
| Backend | Backend | [EN] | |
| Software | سافٹ ویئر | [TR] | |
| Code | کوڈ | [TR] | Programming code |
| Codebase | کوڈ بیس | [TR] | |
| Iteration | تکرار | [TL] | |
| Architecture | آرکیٹیکچر | [TR] | |
| Template | سانچہ | [TL] | |

## Educational Terms

| English Term | Urdu | Convention | Notes |
|-------------|------|------------|-------|
| Learning Objective | تعلیمی مقصد | [TL] | |
| Proficiency Level | مہارت کی سطح | [TL] | |
| Assessment | جائزہ | [TL] | |
| Exercise | مشق | [TL] | |
| Lesson | سبق | [TL] | |
| Chapter | باب | [TL] | |
| Quiz | مختصر امتحان | [TL] | |
| Flashcard | فلیش کارڈ | [TR] | |

## Agent Factory-Specific Terms

| English Term | Urdu | Convention | Notes |
|-------------|------|------------|-------|
| Agent Factory | Agent Factory | [EN] | Product name |
| Spec-Driven Development | Spec-Driven Development | [EN] | Methodology name |
| SDD | SDD | [EN] | Acronym |
| Seven Principles | سات اصول | [TL] | |
| Bridge Book | Bridge Book | [EN] | Product concept |
| General Agent | عام ایجنٹ | [TL] | |
| Reusable Intelligence | قابل استعمال ذہانت | [TL] | |
| Agent-Native | Agent-Native | [EN] | Key book concept — never translate |
| AI-Native | AI-Native | [EN] | Key book concept — never translate |
| Domain Expert | شعبہ جاتی ماہر | [TL] | |
| Human-in-the-Loop | Human-in-the-Loop | [EN] | Common AI term |
| Claude | Claude | [EN] | Product name — never translate |
| Claude Code | Claude Code | [EN] | Product name — never translate |
| Cowork | Cowork | [EN] | Product name — never translate |
