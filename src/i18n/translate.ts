import { defaultLocale, type Locale } from './locales';
import { siteTranslations } from './generated/site-translations';

const translatableKeys = new Set([
  'alt',
  'answer',
  'applicationSubCategory',
  'badge',
  'bestForCompetitor',
  'bestForExtraBrain',
  'body',
  'caption',
  'cells',
  'columns',
  'competitor',
  'competitorSummary',
  'contactType',
  'cta',
  'description',
  'difference',
  'eyebrow',
  'extraBrain',
  'feature',
  'featureList',
  'features',
  'free',
  'h1',
  'imageAlt',
  'label',
  'lead',
  'name',
  'note',
  'price',
  'pricing',
  'pricingSnapshot',
  'prompt',
  'pro',
  'question',
  'responsibleUse',
  'softwareRequirements',
  'summary',
  'tagline',
  'text',
  'title',
]);

const protectedKeys = new Set([
  'accent',
  'checkedAt',
  'class',
  'href',
  'icon',
  'image',
  'ogImage',
  'schemaType',
  'slug',
  'src',
  'status',
  'tone',
  'variant',
]);

export function t(locale: Locale, source: string): string {
  if (locale === defaultLocale) return source;
  const translated = siteTranslations[locale]?.[source];
  if (translated) return translated;
  if (import.meta.env?.PROD && process?.env?.EXTRABRAIN_I18N_STRICT === '1') {
    throw new Error(`Missing ${locale} website translation for: ${source}`);
  }
  return source;
}

export function translateValue<T>(value: T, locale: Locale, keyHint?: string): T {
  if (typeof value === 'string') {
    if (!keyHint || translatableKeys.has(keyHint)) return t(locale, value) as T;
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => translateValue(entry, locale, keyHint)) as T;
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [
        key,
        protectedKeys.has(key) ? entry : translateValue(entry, locale, key),
      ]),
    ) as T;
  }
  return value;
}

export function hasTranslation(locale: Locale, source: string): boolean {
  return locale === defaultLocale || Boolean(siteTranslations[locale]?.[source]);
}
