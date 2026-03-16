# Glossary: Traditional Chinese (zh-Hant)

## Convention

| Convention | Rule |
|------------|------|
| **[EN]** | Keep in English |
| **[TR]** | Transliterate to Chinese characters (phonetic approximation) |
| **[TL]** | Fully translate to Traditional Chinese |
| **First use** | Use the translated term by default. Add `(English term)` on first occurrence only when clarity, searchability, or repo convention requires it. |

## Notes on Traditional Chinese

- Traditional Chinese is **LTR** — BiDi rules (43-50) do NOT apply
- Use Traditional Chinese characters (繁體字), not Simplified (简体字)
- Locale code: `zh-Hant` (BCP 47) or `zh-TW` (common in web frameworks)
- Technical terms in Taiwan/Hong Kong often differ from Mainland China translations
- Prefer Taiwan-standard translations (國家教育研究院 terminology) where available

## Core Technical Terms

| English Term | Traditional Chinese | Convention | Notes |
|-------------|-------------------|------------|-------|
| AI Agent | AI 代理 | [TL] | 代理 preferred over 智能體 in Taiwan |
| Skill | 技能 | [TL] | In context of Claude Code skills |
| Subagent | Subagent | [EN] | Keep as-is |
| Prompt | 提示詞 | [TL] | 提示詞 in Taiwan; 提示 also acceptable |
| Specification | 規格 | [TL] | 規格 (Taiwan) vs 規範 (formal) |
| Repository | 儲存庫 | [TL] | Or 倉庫 (informal) |
| Commit | Commit | [EN] | Git term |
| Branch | Branch | [EN] | Git term |
| Pull Request | Pull Request | [EN] | Git term |
| Merge | Merge | [EN] | Git term |
| API | API | [EN] | Acronym |
| CLI | CLI | [EN] | Acronym |
| IDE | IDE | [EN] | Acronym |
| Framework | 框架 | [TL] | |
| Library | 函式庫 | [TL] | 函式庫 (Taiwan) vs 庫 (Mainland) |
| Module | 模組 | [TL] | 模組 (Taiwan) vs 模塊 (Mainland) |
| Component | 元件 | [TL] | 元件 (Taiwan) vs 組件 (Mainland) |
| Function | 函式 | [TL] | 函式 (Taiwan) vs 函數 (Mainland) |
| Variable | 變數 | [TL] | 變數 (Taiwan) vs 變量 (Mainland) |
| Parameter | 參數 | [TL] | |
| Deployment | 部署 | [TL] | |
| Pipeline | 管線 | [TL] | 管線 (Taiwan) vs 管道 (Mainland) |
| Workflow | 工作流程 | [TL] | |
| Configuration | 設定 | [TL] | 設定 (Taiwan) vs 配置 (Mainland) |
| Authentication | 驗證 | [TL] | 身分驗證 for full form |
| Authorization | 授權 | [TL] | |
| Markdown | Markdown | [EN] | Format name |
| MDX | MDX | [EN] | Format name |
| YAML | YAML | [EN] | Format name |
| JSON | JSON | [EN] | Format name |
| LLM | LLM | [EN] | Acronym — Large Language Model |
| Large Language Model | 大型語言模型 | [TL] | Full form of LLM |
| Token | Token | [EN] | ML token — keep in English (Taiwan convention) |
| Context Window | 上下文視窗 | [TL] | AI context window |
| Model | 模型 | [TL] | In AI/ML context |
| Tool | 工具 | [TL] | AI agent tool/function |
| Agent Loop | 代理迴圈 | [TL] | Core agentic loop |
| Orchestration | 協作編排 | [TL] | Multi-agent coordination |
| Multi-agent | 多代理 | [TL] | Technical term |
| Autonomy | 自主性 | [TL] | |
| Inference | 推論 | [TL] | ML inference; 推理 also acceptable |
| Debugging | 除錯 | [TL] | Taiwan standard |
| Interface | 介面 | [TL] | Taiwan standard |
| Integration | 整合 | [TL] | |
| Automation | 自動化 | [TL] | |
| Testing | 測試 | [TL] | |
| Documentation | 文件 | [TL] | Taiwan standard |
| Output | 輸出 | [TL] | |
| Input | 輸入 | [TL] | |
| Server | 伺服器 | [TL] | Taiwan standard |
| Database | 資料庫 | [TL] | Taiwan standard |
| Frontend | 前端 | [TL] | |
| Backend | 後端 | [TL] | |
| Software | 軟體 | [TL] | Taiwan standard |
| Code | 程式碼 | [TL] | Taiwan standard |
| Codebase | 程式碼庫 | [TL] | Taiwan standard |
| Iteration | 迭代 | [TL] | |
| Architecture | 架構 | [TL] | |
| Template | 範本 | [TL] | Taiwan standard |

## Educational Terms

| English Term | Traditional Chinese | Convention | Notes |
|-------------|-------------------|------------|-------|
| Learning Objective | 學習目標 | [TL] | |
| Proficiency Level | 能力等級 | [TL] | |
| Assessment | 評量 | [TL] | 評量 (Taiwan) vs 評估 (Mainland) |
| Exercise | 練習 | [TL] | |
| Lesson | 課程 | [TL] | Single lesson; 課 also acceptable |
| Chapter | 章 | [TL] | 第N章 format |
| Quiz | 測驗 | [TL] | |
| Flashcard | 閃卡 | [TL] | |

## Agent Factory-Specific Terms

| English Term | Traditional Chinese | Convention | Notes |
|-------------|-------------------|------------|-------|
| Agent Factory | Agent Factory | [EN] | Product name — never translate |
| Spec-Driven Development | 規格驅動開發 | [TL] | Translate for readability; keep SDD as acronym |
| SDD | SDD | [EN] | Acronym |
| Seven Principles | 七大原則 | [TL] | |
| Bridge Book | Bridge Book | [EN] | Product concept |
| General Agent | 通用代理 | [TL] | |
| Reusable Intelligence | 可重用智慧 | [TL] | |
| Agent-Native | Agent-Native | [EN] | Key book concept — never translate |
| AI-Native | AI-Native | [EN] | Key book concept — never translate |
| Domain Expert | 領域專家 | [TL] | |
| Human-in-the-Loop | 人在迴圈中 | [TL] | |
| Claude | Claude | [EN] | Product name — never translate |
| Claude Code | Claude Code | [EN] | Product name — never translate |
| Cowork | Cowork | [EN] | Product name — never translate |

## Taiwan vs Mainland Differences (Quick Reference)

Key terms where Taiwan (Traditional) and Mainland (Simplified) conventions diverge. **Always use the Taiwan column** for `zh-Hant` translations:

| English | Taiwan (zh-Hant) | Mainland (zh-Hans) |
|---------|-----------------|-------------------|
| Function | 函式 | 函數 |
| Variable | 變數 | 變量 |
| Module | 模組 | 模塊 |
| Component | 元件 | 組件 |
| Library | 函式庫 | 庫 |
| Pipeline | 管線 | 管道 |
| Configuration | 設定 | 配置 |
| Assessment | 評量 | 評估 |
| Information | 資訊 | 信息 |
| Software | 軟體 | 軟件 |
| Hardware | 硬體 | 硬件 |
| Program | 程式 | 程序 |
| Data | 資料 | 數據 |
| Network | 網路 | 網絡 |
| Server | 伺服器 | 服務器 |
| Database | 資料庫 | 数据库 |
| Frontend | 前端 | 前端 |
| Backend | 後端 | 后端 |
| Code | 程式碼 | 代码 |
| Codebase | 程式碼庫 | 代码库 |
| Documentation | 文件 | 文档 |
| Debugging | 除錯 | 调试 |
| Interface | 介面 | 界面 |
| Inference | 推論 | 推理 |
| Template | 範本 | 模板 |
| Architecture | 架構 | 架构 |
| Context Window | 上下文視窗 | 上下文窗口 |
