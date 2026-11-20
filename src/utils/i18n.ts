export type Language = 'vi' | 'en';

export interface Localized<T = string> {
  vi: T;
  en: T;
}

export const LANGUAGE_STORAGE_KEY = 'portfolio_language';

export function pickLang<T>(value: Localized<T>, lang: Language): T {
  return value[lang];
}

export interface LanguageDetectionInput {
  queryLang?: string | null;
  savedLang?: string | null;
  browserLanguages?: readonly string[];
  timeZone?: string | null;
}

function normalizeLanguageTag(value?: string | null): Language | null {
  if (!value) return null;
  const lower = value.trim().toLowerCase();
  if (lower === 'vi' || lower.startsWith('vi-')) return 'vi';
  if (lower === 'en' || lower.startsWith('en-')) return 'en';
  return null;
}

const VIETNAM_TIMEZONES = new Set(['asia/ho_chi_minh', 'asia/saigon']);

/**
 * Resolves initial UI language:
 * 1. Explicit URL query (?lang=vi|en)
 * 2. Saved user preference in localStorage
 * 3. Browser localization (prefers Vietnamese if any preferred locale is vi-* or timezone is Vietnam;
 *    switches to English for non-Vietnam English-localized browsers)
 * 4. Defaults to Vietnamese ('vi')
 */
export function detectInitialLanguage(input: LanguageDetectionInput): Language {
  const fromQuery = normalizeLanguageTag(input.queryLang);
  if (fromQuery) return fromQuery;

  const fromSaved = normalizeLanguageTag(input.savedLang);
  if (fromSaved) return fromSaved;

  const langs = (input.browserLanguages ?? []).filter(Boolean).map((l) => l.trim().toLowerCase());
  if (langs.some((l) => l === 'vi' || l.startsWith('vi-'))) {
    return 'vi';
  }

  const tz = input.timeZone?.trim().toLowerCase() ?? '';
  if (VIETNAM_TIMEZONES.has(tz)) {
    return 'vi';
  }

  if (langs.length > 0 && (langs[0] === 'en' || langs[0].startsWith('en-'))) {
    return 'en';
  }

  return 'vi';
}

export function getBrowserInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'vi';
  }

  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');

  let savedLang: string | null = null;
  try {
    savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    savedLang = null;
  }

  const browserLanguages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : [];

  let timeZone: string | null = null;
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
  } catch {
    timeZone = null;
  }

  return detectInitialLanguage({
    queryLang,
    savedLang,
    browserLanguages,
    timeZone,
  });
}
