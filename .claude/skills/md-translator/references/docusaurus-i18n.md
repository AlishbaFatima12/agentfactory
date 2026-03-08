# Docusaurus i18n Directory Structure

**Official docs**: https://docusaurus.io/docs/i18n/introduction

## Standard Directory Layout

```
project-root/
├── docusaurus.config.js          # i18n config lives here
├── docs/                         # English source (default locale)
│   └── 01-intro/
│       └── 01-welcome.md
└── i18n/
    ├── ar/                       # Arabic
    │   └── docusaurus-plugin-content-docs/
    │       └── current/
    │           └── 01-intro/
    │               └── 01-welcome.md
    ├── ur/                       # Urdu
    │   └── docusaurus-plugin-content-docs/
    │       └── current/
    │           └── ...
    └── es/                       # Spanish
        └── docusaurus-plugin-content-docs/
            └── current/
                └── ...
```

## Config Shape (docusaurus.config.js)

```js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ur', 'es', 'fr'],
    localeConfigs: {
      ar: { label: 'العربية', direction: 'rtl' },
      ur: { label: 'اردو', direction: 'rtl' },
      es: { label: 'Español', direction: 'ltr' },
    },
  },
};
```

## Locale Codes (ISO 639-1)

| Language | Code | Direction |
|----------|------|-----------|
| Arabic | `ar` | RTL |
| Urdu | `ur` | RTL |
| Spanish | `es` | LTR |
| French | `fr` | LTR |
| German | `de` | LTR |
| Hindi | `hi` | LTR |
| Japanese | `ja` | LTR |
| Chinese (Simplified) | `zh` | LTR |
| Hebrew | `he` | RTL |
| Persian/Farsi | `fa` | RTL |

## Key Rules

1. **Plugin path matters** — Translated docs go under `docusaurus-plugin-content-docs/current/`, NOT directly under the locale folder
2. **Mirror source structure** — The folder hierarchy inside `current/` must exactly match `docs/`
3. **File names stay the same** — `01-welcome.md` in English = `01-welcome.md` in Arabic
4. **Frontmatter `id` and `slug` stay the same** — These are structural, not translatable
5. **Sidebar position from frontmatter** — `sidebar_position` stays the same across locales

## When Project Has Custom docs Path

If `docusaurus.config.js` uses a custom `path` for docs plugin:

```js
// e.g., path: 'apps/learn-app/docs'
// Then i18n path becomes:
// i18n/{locale}/docusaurus-plugin-content-docs/current/
// (still mirrors the docs folder structure, not the full filesystem path)
```

## Commands

```bash
# Generate translation files scaffold:
npx docusaurus write-translations --locale ar

# Start dev server in a locale:
npx docusaurus start --locale ar

# Build a specific locale:
npx docusaurus build --locale ar
```
