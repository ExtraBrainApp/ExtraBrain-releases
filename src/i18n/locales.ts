export const defaultLocale = 'en';

export const siteLocales = {
  en: {
    label: 'English',
    nativeLabel: 'English',
    lang: 'en',
    hreflang: 'en',
    dir: 'ltr',
    prefix: '',
  },
  es: {
    label: 'Spanish',
    nativeLabel: 'Español',
    lang: 'es',
    hreflang: 'es',
    dir: 'ltr',
    prefix: '/es',
  },
  fr: {
    label: 'French',
    nativeLabel: 'Français',
    lang: 'fr',
    hreflang: 'fr',
    dir: 'ltr',
    prefix: '/fr',
  },
  de: {
    label: 'German',
    nativeLabel: 'Deutsch',
    lang: 'de',
    hreflang: 'de',
    dir: 'ltr',
    prefix: '/de',
  },
  pt: {
    label: 'Portuguese',
    nativeLabel: 'Português',
    lang: 'pt',
    hreflang: 'pt',
    dir: 'ltr',
    prefix: '/pt',
  },
  zh: {
    label: 'Chinese',
    nativeLabel: '简体中文',
    lang: 'zh-CN',
    hreflang: 'zh-CN',
    dir: 'ltr',
    prefix: '/zh',
  },
  ja: {
    label: 'Japanese',
    nativeLabel: '日本語',
    lang: 'ja',
    hreflang: 'ja',
    dir: 'ltr',
    prefix: '/ja',
  },
  ko: {
    label: 'Korean',
    nativeLabel: '한국어',
    lang: 'ko',
    hreflang: 'ko',
    dir: 'ltr',
    prefix: '/ko',
  },
  hi: {
    label: 'Hindi',
    nativeLabel: 'हिन्दी',
    lang: 'hi',
    hreflang: 'hi',
    dir: 'ltr',
    prefix: '/hi',
  },
  ar: {
    label: 'Arabic',
    nativeLabel: 'العربية',
    lang: 'ar',
    hreflang: 'ar',
    dir: 'rtl',
    prefix: '/ar',
  },
  uk: {
    label: 'Ukrainian',
    nativeLabel: 'Українська',
    lang: 'uk',
    hreflang: 'uk',
    dir: 'ltr',
    prefix: '/uk',
  },
  be: {
    label: 'Belarusian',
    nativeLabel: 'Беларуская',
    lang: 'be',
    hreflang: 'be',
    dir: 'ltr',
    prefix: '/be',
  },
} as const;

export type Locale = keyof typeof siteLocales;
export type PrefixedLocale = Exclude<Locale, typeof defaultLocale>;

export const localeCodes = Object.keys(siteLocales) as Locale[];
export const prefixedLocaleCodes = localeCodes.filter((locale) => locale !== defaultLocale) as PrefixedLocale[];

const localizedAssetPrefixes = [
  '/assets/',
  '/favicon',
  '/manifest.json',
  '/robots.txt',
  '/CNAME',
  '/apple-touch-icon',
];

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && value in siteLocales);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalized.split('/').filter(Boolean);
  if (isLocale(segments[0])) {
    const stripped = `/${segments.slice(1).join('/')}`;
    return stripped === '/' ? '/' : ensureTrailingSlash(stripped);
  }
  return ensureTrailingSlash(normalized);
}

export function ensureTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  if (path.includes('?') || path.includes('#')) return path;
  return path.endsWith('/') || /\.[a-z0-9]+$/i.test(path) ? path : `${path}/`;
}

export function localizePath(path: string, locale: Locale): string {
  if (!path) return path;
  if (
    path.startsWith('#') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('http://') ||
    path.startsWith('https://')
  ) {
    return path;
  }

  const [pathnameWithQuery, hash = ''] = path.split('#');
  const [pathname, query = ''] = pathnameWithQuery.split('?');
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (localizedAssetPrefixes.some((prefix) => normalized.startsWith(prefix))) {
    return path;
  }

  const base = stripLocalePrefix(normalized);
  const prefix = siteLocales[locale].prefix;
  const localized = locale === defaultLocale ? base : `${prefix}${base === '/' ? '/' : base}`;
  const queryPart = query ? `?${query}` : '';
  const hashPart = hash ? `#${hash}` : '';
  return `${localized}${queryPart}${hashPart}`;
}

export function alternateLinks(pathname: string, siteUrl: URL) {
  const basePath = stripLocalePrefix(pathname);
  return localeCodes.map((locale) => ({
    locale,
    hreflang: siteLocales[locale].hreflang,
    href: new URL(localizePath(basePath, locale), siteUrl).href,
  }));
}

export function localizedPathForLocale(pathname: string, locale: Locale): string {
  return localizePath(stripLocalePrefix(pathname), locale);
}
