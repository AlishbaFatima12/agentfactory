# Glossary: Urdu (ur)

## Convention

| Convention | Rule |
|------------|------|
| **[EN]** | Keep in English |
| **[TR]** | Transliterate to Urdu script |
| **[TL]** | Fully translate to Urdu |
| **First use** | Show: `ترجمہ (English term)` on first occurrence |

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
