# Glossary: Arabic (ar)

## Convention

| Convention | Rule |
|------------|------|
| **[EN]** | Keep in English |
| **[TR]** | Transliterate to Arabic script |
| **[TL]** | Fully translate to Arabic |
| **First use** | Use the Arabic term by default. Add `(English term)` on first occurrence only when clarity, searchability, or repo convention requires it. |

## BiDi (Bidirectional) Text Conventions

Arabic is RTL. English terms embedded in Arabic text trigger BiDi rendering issues. Follow these conventions strictly:

| Convention | Rule | Example |
|------------|------|---------|
| **Paragraph start** | Never start a paragraph with an English word. Lead with Arabic. | Bad: `SaaS غيرت الصناعة` / Good: `غيرت SaaS الصناعة` |
| **List item start** | Never start a list item with an English word. Lead with Arabic. | Bad: `- Claude Code أداة قوية` / Good: `- أداة Claude Code قوية` |
| **Heading start** | Never start a heading with an English word after `#`. Lead with Arabic. | Bad: `## SDD المنهجية` / Good: `## منهجية SDD` |
| **Parenthesized English** | Buffer with Arabic words on both sides. | Bad: `المهارات ،(specs)` / Good: `المهارات (specs) التي` |
| **Bold with English** | Open `**` adjacent to Arabic character. | Bad: `**SDD المنهجية**` / Good: `**منهجية SDD**` |
| **RLM fallback** | If restructuring changes meaning, prepend U+200F (‏) before English word. | `‏SaaS غيرت الصناعة` (only as last resort) |

## Core Technical Terms

| English Term | Arabic | Convention | Notes |
|-------------|--------|------------|-------|
| AI Agent | وكيل ذكاء اصطناعي | [TL] | |
| Skill | مهارة | [TL] | In context of Claude Code skills |
| Subagent | Subagent | [EN] | Keep as-is |
| Prompt | برومبت | [TR] | |
| Specification | مواصفات | [TL] | |
| Repository | ريبو | [TR] | Short form common |
| Commit | Commit | [EN] | Git term |
| Branch | Branch | [EN] | Git term |
| Pull Request | Pull Request | [EN] | Git term |
| Merge | Merge | [EN] | Git term |
| API | API | [EN] | Acronym |
| CLI | CLI | [EN] | Acronym |
| IDE | IDE | [EN] | Acronym |
| Framework | فريمورك | [TR] | |
| Library | مكتبة | [TL] | |
| Module | وحدة | [TL] | |
| Component | كومبوننت | [TR] | |
| Function | دالة | [TL] | |
| Variable | متغير | [TL] | |
| Parameter | بارامتر | [TR] | |
| Deployment | نشر | [TL] | |
| Pipeline | بايبلاين | [TR] | |
| Workflow | سير العمل | [TL] | |
| Configuration | إعدادات | [TL] | |
| Authentication | مصادقة | [TL] | |
| Authorization | تفويض | [TL] | |
| Markdown | Markdown | [EN] | Format name |
| MDX | MDX | [EN] | Format name |
| YAML | YAML | [EN] | Format name |
| JSON | JSON | [EN] | Format name |
| LLM | LLM | [EN] | Acronym — Large Language Model |
| Large Language Model | نموذج لغوي كبير | [TL] | Full form of LLM |
| Token | توكن | [TR] | ML token |
| Context Window | نافذة السياق | [TL] | AI context window |
| Model | نموذج | [TL] | In AI/ML context |
| Tool | أداة | [TL] | AI agent tool/function |
| Agent Loop | حلقة الوكيل | [TL] | Core agentic loop |
| Orchestration | تنسيق | [TL] | Multi-agent coordination |
| Multi-agent | متعدد الوكلاء | [TL] | Technical term |
| Autonomy | استقلالية | [TL] | |
| Inference | استنتاج | [TL] | ML inference |
| Debugging | تصحيح الأخطاء | [TL] | |
| Interface | واجهة | [TL] | |
| Integration | تكامل | [TL] | |
| Automation | أتمتة | [TL] | |
| Testing | اختبار | [TL] | |
| Documentation | توثيق | [TL] | |
| Output | مخرجات | [TL] | |
| Input | مدخلات | [TL] | |
| Server | خادم | [TL] | |
| Database | قاعدة بيانات | [TL] | |
| Frontend | واجهة أمامية | [TL] | |
| Backend | خلفية | [TL] | |
| Software | برمجيات | [TL] | |
| Code | كود | [TR] | Programming code |
| Codebase | قاعدة الكود | [TL] | |
| Iteration | تكرار | [TL] | |
| Architecture | بنية | [TL] | |
| Template | قالب | [TL] | |

## Educational Terms

| English Term | Arabic | Convention | Notes |
|-------------|--------|------------|-------|
| Learning Objective | هدف تعليمي | [TL] | |
| Proficiency Level | مستوى الكفاءة | [TL] | |
| Assessment | تقييم | [TL] | |
| Exercise | تمرين | [TL] | |
| Lesson | درس | [TL] | |
| Chapter | فصل | [TL] | |
| Quiz | اختبار قصير | [TL] | |
| Flashcard | بطاقة تعليمية | [TL] | |

## Agent Factory-Specific Terms

| English Term | Arabic | Convention | Notes |
|-------------|--------|------------|-------|
| Agent Factory | Agent Factory | [EN] | Product name |
| Spec-Driven Development | Spec-Driven Development | [EN] | Methodology name |
| SDD | SDD | [EN] | Acronym |
| Seven Principles | المبادئ السبعة | [TL] | |
| Bridge Book | Bridge Book | [EN] | Product concept |
| General Agent | وكيل عام | [TL] | |
| Reusable Intelligence | ذكاء قابل لإعادة الاستخدام | [TL] | |
| Agent-Native | Agent-Native | [EN] | Key book concept — never translate |
| AI-Native | AI-Native | [EN] | Key book concept — never translate |
| Domain Expert | خبير المجال | [TL] | |
| Human-in-the-Loop | Human-in-the-Loop | [EN] | Common AI term |
| Claude | Claude | [EN] | Product name — never translate |
| Claude Code | Claude Code | [EN] | Product name — never translate |
| Cowork | Cowork | [EN] | Product name — never translate |
