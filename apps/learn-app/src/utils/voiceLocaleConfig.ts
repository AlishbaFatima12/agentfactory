/**
 * Shared locale configuration for voice reading features.
 * Single source of truth for locale-to-language mapping and display names.
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

/** Preferred default voices per locale (first match wins) */
export const PREFERRED_VOICES: Record<string, string[]> = {
    en: ["Google US English", "Microsoft David", "Alex"],
    ur: ["Microsoft Asad", "Google اردو"],
    "zh-Hans": ["Google 普通话", "Microsoft Huihui"],
};
