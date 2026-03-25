/**
 * Shared locale configuration for voice reading features.
 * Single source of truth for locale-to-language mapping and display names.
 *
 * MAINTENANCE: When adding a new locale to docusaurus.config.ts i18n.locales,
 * update all maps below.
 */

/** Map Docusaurus locale codes to BCP-47 language prefixes for voice filtering */
export const LOCALE_LANG_MAP: Record<string, string> = {
  en: "en",
  ur: "ur",
  "zh-Hans": "zh",
};

/** Display names for locales (used in install hints and warnings) */
export const LOCALE_DISPLAY_NAMES: Record<string, string> = {
  en: "English",
  ur: "Urdu (اردو)",
  "zh-Hans": "Chinese (中文)",
};

/** Voices to exclude from the selector (novelty/accessibility voices) */
export const BLOCKED_VOICES: string[] = [
  "Albert",
  "Bad News",
  "Bahh",
  "Bells",
  "Boing",
  "Bubbles",
  "Cellos",
  "Eddy",
  "Flo",
  "Good News",
  "Grandma",
  "Grandpa",
  "Jester",
  "Organ",
  "Reed",
  "Rocko",
  "Sandy",
  "Shelley",
  "Superstar",
  "Trinoids",
  "Whisper",
  "Wobble",
  "Zarvox",
  "Ralph",
  "Fred",
  "Kathy",
  "Junior",
  "Princess",
];

/** Preferred default voices per locale (first match wins) */
export const PREFERRED_VOICES: Record<string, string[]> = {
  en: ["Google US English", "Microsoft David", "Alex"],
  ur: ["Microsoft Asad", "Google اردو"],
  "zh-Hans": [
    "Google 普通话",
    "Google Mandarin",
    "Tingting",
    "Microsoft Huihui",
    "Microsoft Yaoyao",
    "Microsoft Kangkang",
  ],
};

/** Localized voice dropdown headers */
export const DROPDOWN_HEADERS: Record<string, string> = {
  en: "English Voices",
  ur: "اردو آوازیں",
  "zh-Hans": "中文语音",
};
